import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Compact Queue Statistics Widget for Webex Contact Center
 * Designed for 64px header - horizontal scrolling bar
 */
export class QueueStatisticsCompact extends LitElement {
  // === PROPERTIES ===
  @property() token?: string;
  @property() orgId?: string;
  @property() teamId?: string;
  @property() agentId?: string;

  // Thresholds
  @property({ type: Number }) contactsWarning: number = 5;
  @property({ type: Number }) contactsCritical: number = 10;
  @property({ type: Number }) waitWarning: number = 120;
  @property({ type: Number }) waitCritical: number = 300;

  // Intervals
  @property({ type: Number }) dataRefreshInterval: number = 30000;
  @property({ type: Number }) uiRefreshInterval: number = 1000;
  @property({ type: Boolean }) demoMode: boolean = false;

  // === STATE ===
  @state() private queueStats: any[] = [];
  @state() queueData?: any;
  @state() private _dataRefreshTimer?: any;
  @state() private _uiRefreshTimer?: any;
  @state() isLoading: boolean = true;
  @state() private hasError: boolean = false;

  // === STYLES ===
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 48px;
      background: #0f1419;
      border-radius: 6px;
      overflow: hidden;
    }

    .container {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      gap: 16px;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .container::-webkit-scrollbar {
      height: 4px;
    }

    .container::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    .container::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    .queue-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      white-space: nowrap;
      flex-shrink: 0;
      font-size: 13px;
      transition: all 0.3s ease;
    }

    .queue-item.ok {
      border-left: 3px solid #10b981;
    }

    .queue-item.warning {
      border-left: 3px solid #f59e0b;
      animation: pulse-warning 2s ease-in-out infinite;
    }

    .queue-item.critical {
      border-left: 3px solid #ef4444;
      animation: pulse-critical 1s ease-in-out infinite;
    }

    @keyframes pulse-warning {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    @keyframes pulse-critical {
      0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(239, 68, 68, 0.5); }
      50% { opacity: 0.8; box-shadow: 0 0 16px rgba(239, 68, 68, 0.8); }
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-indicator.ok {
      background: #10b981;
    }

    .status-indicator.warning {
      background: #f59e0b;
    }

    .status-indicator.critical {
      background: #ef4444;
    }

    .queue-name {
      color: #f1f5f9;
      font-weight: 600;
      font-size: 13px;
    }

    .queue-metrics {
      display: flex;
      gap: 12px;
      color: #94a3b8;
      font-size: 12px;
    }

    .metric {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .loading, .error, .empty {
      color: #94a3b8;
      font-size: 13px;
      padding: 0 12px;
    }

    .error {
      color: #ef4444;
    }
  `;

  // === LIFECYCLE ===
  connectedCallback() {
    super.connectedCallback();
    if (!this.demoMode) {
      this.initialize();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
  }

  private async initialize() {
    try {
      this.isLoading = true;
      this.hasError = false;

      if (!this.demoMode) {
        await this.getQueues();
        this._dataRefreshTimer = setInterval(() => this.getStats(), this.dataRefreshInterval);
      }

      this._uiRefreshTimer = setInterval(() => this.updateTemplate(), this.uiRefreshInterval);
    } catch (error) {
      this.hasError = true;
      console.error('Queue widget error:', error);
    }
  }

  private cleanup() {
    if (this._dataRefreshTimer) clearInterval(this._dataRefreshTimer);
    if (this._uiRefreshTimer) clearInterval(this._uiRefreshTimer);
  }

  // === API METHODS ===
  private async getQueues() {
    // Skip queue fetching - we'll query ALL parked contacts and group by queue
    // This works even if agent has no queue assignments
    await this.getStats();
  }

  private async getStats() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };

    // Calculate time range
    const now = Date.now();
    const from = now - 86400000; // 24 hours ago

    // Build the GraphQL query with aggregations as direct arguments (NOT as variables)
    // This is the correct syntax for the Webex CC Search API
    const graphqlQuery = {
      query: `{
        task(
          from: ${from}
          to: ${now}
          filter: {
            and: [
              { isActive: { equals: true } }
              { status: { equals: "parked" } }
            ]
          }
          aggregations: [
            { field: "id", type: count, name: "contacts" }
            { field: "createdTime", type: min, name: "oldestStart" }
          ]
        ) {
          tasks {
            lastQueue { name }
            aggregation { name value }
          }
        }
      }`
    };

    try {
      const response = await fetch('https://api.wxcc-us1.cisco.com/search', {
        method: 'POST',
        headers,
        body: JSON.stringify(graphqlQuery),
        redirect: 'follow'
      });
      
      const result = await response.json();
      
      // Check for GraphQL errors
      if (result.error || result.errors) {
        const errorMsg = result.error?.message?.[0]?.description || 
                         result.errors?.[0]?.message || 
                         JSON.stringify(result.error || result.errors);
        console.error('GraphQL error:', errorMsg);
        this.hasError = true;
        this.isLoading = false;
        return;
      }
      
      if (result.data?.task?.tasks) {
        this.queueData = result.data.task.tasks;
        this.updateTemplate();
        this.isLoading = false;
        this.hasError = false;
      } else {
        // No data but no error - might be empty results
        this.queueData = [];
        this.updateTemplate();
        this.isLoading = false;
        this.hasError = false;
      }
    } catch (error) {
      this.hasError = true;
    }
  }

  updateTemplate() {
    if (!this.queueData || !Array.isArray(this.queueData)) {
      this.queueStats = [];
      return;
    }

    this.queueStats = this.queueData.map((item: any) => {
      const contacts = item.aggregation?.find((a: any) => a.name === 'contacts')?.value || 0;
      const oldestStart = item.aggregation?.find((a: any) => a.name === 'oldestStart')?.value || 0;
      const waitTimeSeconds = oldestStart ? Math.floor((Date.now() - oldestStart) / 1000) : 0;
      
      return {
        name: item.lastQueue?.name || 'Unknown Queue',
        contacts,
        waitTimeSeconds,
        status: this.calculateStatus(contacts, waitTimeSeconds)
      };
    });

    // Sort by priority
    this.queueStats.sort((a, b) => {
      const statusPriority: Record<string, number> = { critical: 3, warning: 2, ok: 1 };
      return (statusPriority[b.status] || 0) - (statusPriority[a.status] || 0);
    });
  }

  private calculateStatus(contacts: number, waitTimeSeconds: number): 'ok' | 'warning' | 'critical' {
    if (contacts >= this.contactsCritical || waitTimeSeconds >= this.waitCritical) {
      return 'critical';
    }
    if (contacts >= this.contactsWarning || waitTimeSeconds >= this.waitWarning) {
      return 'warning';
    }
    return 'ok';
  }

  private formatWaitTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // === RENDER ===
  render() {
    if (this.hasError) {
      return html`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`;
    }

    if (this.isLoading) {
      return html`<div class="container"><div class="loading">Loading queue data...</div></div>`;
    }

    if (this.queueStats.length === 0) {
      return html`<div class="container"><div class="empty">All queues clear ✔</div></div>`;
    }

    return html`
      <div class="container">
        ${this.queueStats.map(queue => html`
          <div class="queue-item ${queue.status}">
            <div class="status-indicator ${queue.status}"></div>
            <span class="queue-name">${queue.name}</span>
            <div class="queue-metrics">
              <span class="metric">👥 ${queue.contacts}</span>
              <span class="metric">⏱️ ${this.formatWaitTime(queue.waitTimeSeconds)}</span>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

// Register the custom element
customElements.define('queue-statistics-compact', QueueStatisticsCompact);
