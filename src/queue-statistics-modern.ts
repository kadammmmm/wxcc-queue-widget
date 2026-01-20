import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Modern Queue Statistics Widget for Webex Contact Center
 * 
 * Features:
 * - Real-time queue monitoring with auto-refresh
 * - Threshold-based visual alerts (green/amber/red)
 * - Smooth animations and micro-interactions
 * - Dark mode compatible design
 * - Configurable warning and critical thresholds
 */
export class QueueStatisticsModern extends LitElement {
  // === PROPERTIES (passed from Desktop Layout) ===
  @property() token?: string;
  @property() orgId?: string;
  @property() teamId?: string;
  @property() agentId?: string;

  // === THRESHOLD CONFIGURATION ===
  // Contacts thresholds
  @property({ type: Number }) contactsWarning: number = 5;  // Yellow warning
  @property({ type: Number }) contactsCritical: number = 10; // Red critical

  // Wait time thresholds (in seconds)
  @property({ type: Number }) waitWarning: number = 120;     // 2 minutes
  @property({ type: Number }) waitCritical: number = 300;    // 5 minutes

  // Refresh intervals (in milliseconds)
  @property({ type: Number }) dataRefreshInterval: number = 30000;  // 30 seconds
  @property({ type: Number }) uiRefreshInterval: number = 1000;     // 1 second

  // Demo mode (skips API calls, allows manual data setting)
  @property({ type: Boolean }) demoMode: boolean = false;

  // === STATE (internal component data) ===
  @state() private queueStats: any[] = [];
  @state() private queueFilter: object[] = [];
  @state() queueData?: any;  // Public for demo mode
  @state() private _dataRefreshTimer?: any;
  @state() private _uiRefreshTimer?: any;
  @state() isLoading: boolean = true;  // Public for demo mode
  @state() private hasError: boolean = false;
  @state() private errorMessage: string = '';

  // === STYLES ===
  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');

    :host {
      display: block;
      width: 100%;
      font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
      --primary-bg: #0f1419;
      --card-bg: #1a1f2e;
      --card-hover: #232937;
      --text-primary: #e4e7eb;
      --text-secondary: #8b92a5;
      --text-muted: #5a6170;
      --accent-blue: #3b82f6;
      --status-ok: #10b981;
      --status-warning: #f59e0b;
      --status-critical: #ef4444;
      --border-color: #2d3548;
      --glow-ok: rgba(16, 185, 129, 0.2);
      --glow-warning: rgba(245, 158, 11, 0.2);
      --glow-critical: rgba(239, 68, 68, 0.2);
    }

    .container {
      background: var(--primary-bg);
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
                  0 2px 4px -1px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }

    /* Subtle animated background gradient */
    .container::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 50%
      );
      animation: rotate 20s linear infinite;
      pointer-events: none;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--text-primary);
    }

    .title-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-blue);
      border-radius: 6px;
      font-size: 12px;
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 500;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--status-ok);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .queues-container {
      display: grid;
      gap: 12px;
      position: relative;
      z-index: 1;
      max-height: 400px;
      overflow-y: auto;
      padding-right: 4px;
    }

    /* Custom scrollbar */
    .queues-container::-webkit-scrollbar {
      width: 6px;
    }

    .queues-container::-webkit-scrollbar-track {
      background: var(--card-bg);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb {
      background: var(--border-color);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }

    .queue-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 14px 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      animation: slideIn 0.4s ease-out backwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .queue-card:hover {
      background: var(--card-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.4);
    }

    /* Status glow effect based on threshold */
    .queue-card.status-ok {
      border-left: 3px solid var(--status-ok);
    }

    .queue-card.status-ok::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-ok) 0%, transparent 100%);
      pointer-events: none;
    }

    .queue-card.status-warning {
      border-left: 3px solid var(--status-warning);
      animation: warningPulse 2s ease-in-out infinite;
    }

    .queue-card.status-warning::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-warning) 0%, transparent 100%);
      pointer-events: none;
    }

    @keyframes warningPulse {
      0%, 100% { box-shadow: 0 0 0 0 var(--glow-warning); }
      50% { box-shadow: 0 0 20px 0 var(--glow-warning); }
    }

    .queue-card.status-critical {
      border-left: 3px solid var(--status-critical);
      animation: criticalPulse 1s ease-in-out infinite;
    }

    .queue-card.status-critical::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-critical) 0%, transparent 100%);
      pointer-events: none;
    }

    @keyframes criticalPulse {
      0%, 100% {
        box-shadow: 0 0 0 0 var(--glow-critical);
        border-left-color: var(--status-critical);
      }
      50% {
        box-shadow: 0 0 30px 0 var(--glow-critical);
        border-left-color: #ff6b6b;
      }
    }

    .queue-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }

    .queue-name {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: -0.2px;
      line-height: 1.4;
    }

    .queue-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }

    .queue-badge.ok {
      background: rgba(16, 185, 129, 0.15);
      color: var(--status-ok);
    }

    .queue-badge.warning {
      background: rgba(245, 158, 11, 0.15);
      color: var(--status-warning);
    }

    .queue-badge.critical {
      background: rgba(239, 68, 68, 0.15);
      color: var(--status-critical);
    }

    .queue-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      position: relative;
      z-index: 1;
    }

    .metric {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .metric-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .metric-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 20px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1;
      letter-spacing: -0.5px;
    }

    .metric-value.large-number {
      font-size: 24px;
    }

    .metric-icon {
      margin-right: 4px;
      font-size: 14px;
    }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--border-color);
      border-top-color: var(--accent-blue);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 16px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-text,
    .error-text,
    .empty-text {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 8px;
    }

    .error-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .empty-icon {
      font-size: 48px;
      opacity: 0.3;
      margin-bottom: 12px;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .queue-metrics {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  // === LIFECYCLE METHODS ===

  connectedCallback() {
    super.connectedCallback();
    this.initialize();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
  }

  // === INITIALIZATION ===

  private async initialize() {
    try {
      this.isLoading = true;
      this.hasError = false;

      // Skip API calls in demo mode
      if (!this.demoMode) {
        // Fetch all queues the agent can receive calls from
        await this.getQueues();

        // Start refresh timers
        this._dataRefreshTimer = setInterval(
          () => this.getStats(),
          this.dataRefreshInterval
        );
      }

      // Always start UI refresh timer
      this._uiRefreshTimer = setInterval(
        () => this.updateTemplate(),
        this.uiRefreshInterval
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  private cleanup() {
    if (this._dataRefreshTimer) {
      clearInterval(this._dataRefreshTimer);
    }
    if (this._uiRefreshTimer) {
      clearInterval(this._uiRefreshTimer);
    }
  }

  // === API METHODS ===

  /**
   * Fetch all queues the agent is assigned to from three sources:
   * 1. Team-based queues
   * 2. Skill-based queues  
   * 3. Agent-assigned queues
   */
  private async getQueues() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };

    const paths = [
      `/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,
      `/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,
      `/team/${this.teamId}/incoming-references`
    ];

    this.queueFilter = [];

    const requestOptions: object = {
      method: 'GET',
      headers,
      redirect: 'follow'
    };

    // Fetch from all three endpoints
    const promises = paths.map(async (path) => {
      try {
        const response = await fetch(
          `https://api.wxcc-us1.cisco.com/organization/${this.orgId}${path}`,
          requestOptions
        );
        const result = await response.json();
        
        // Add queue IDs to filter
        if (result.data && Array.isArray(result.data)) {
          result.data.forEach((q: any) => {
            this.queueFilter.push({ 
              lastQueue: { id: { equals: q.id } } 
            });
          });
        }
      } catch (error) {
        console.error(`Error fetching queues from ${path}:`, error);
      }
    });

    await Promise.all(promises);

    // Fetch initial statistics
    await this.getStats();
  }

  /**
   * Fetch queue statistics using GraphQL Search API
   */
  private async getStats() {
    if (!this.queueFilter.length) {
      this.queueData = [];
      this.isLoading = false;
      return;
    }

    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const graphqlQuery = {
      query: `
        query queueStats($from: Long!, $to: Long!, $filter: TaskFilters) {
          task(from: $from, to: $to, filter: $filter) {
            tasks {
              lastQueue {
                name
              }
              aggregation {
                name
                value
              }
            }
          }
        }
      `,
      variables: {
        from: `${Date.now() - 86400000}`,  // 24 hours ago
        to: `${Date.now()}`,
        filter: {
          and: [
            { isActive: { equals: true } },
            { status: { equals: "parked" } },
            { or: this.queueFilter }
          ]
        },
        aggregation: [
          { field: "id", type: "count", name: "contacts" },
          { field: "createdTime", type: "min", name: "oldestStart" }
        ]
      }
    };

    const requestOptions: object = {
      method: 'POST',
      headers,
      body: JSON.stringify(graphqlQuery),
      redirect: 'follow'
    };

    try {
      const response = await fetch(
        'https://api.wxcc-us1.cisco.com/search',
        requestOptions
      );
      
      const result = await response.json();
      
      if (result.data?.task?.tasks) {
        this.queueData = result.data.task.tasks;
        this.updateTemplate();
        this.isLoading = false;
        this.hasError = false;
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Update the UI template with current data
   */
  updateTemplate() {  // Made public for demo mode
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

    // Sort by status priority: critical > warning > ok
    this.queueStats.sort((a, b) => {
      const statusPriority: Record<string, number> = { critical: 3, warning: 2, ok: 1 };
      return (statusPriority[b.status] || 0) - (statusPriority[a.status] || 0);
    });
  }

  // === HELPER METHODS ===

  /**
   * Calculate queue status based on thresholds
   */
  private calculateStatus(contacts: number, waitTimeSeconds: number): 'ok' | 'warning' | 'critical' {
    if (contacts >= this.contactsCritical || waitTimeSeconds >= this.waitCritical) {
      return 'critical';
    }
    if (contacts >= this.contactsWarning || waitTimeSeconds >= this.waitWarning) {
      return 'warning';
    }
    return 'ok';
  }

  /**
   * Format seconds to HH:MM:SS
   */
  private formatWaitTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [hours, minutes, secs]
      .map(v => v.toString().padStart(2, '0'))
      .join(':');
  }

  /**
   * Get status badge label
   */
  private getStatusLabel(status: string): string {
    switch (status) {
      case 'critical': return '🔴 Critical';
      case 'warning': return '⚠️ Warning';
      default: return '✓ Normal';
    }
  }

  /**
   * Handle errors
   */
  private handleError(error: any) {
    console.error('Queue Statistics Error:', error);
    this.hasError = true;
    this.isLoading = false;
    this.errorMessage = error.message || 'Failed to load queue statistics';
  }

  // === RENDER ===

  render() {
    return html`
      <div class="container">
        <div class="header">
          <div class="title">
            <div class="title-icon">📊</div>
            Queue Monitor
          </div>
          <div class="status-indicator">
            <div class="status-dot"></div>
            Live
          </div>
        </div>

        ${this.renderContent()}
      </div>
    `;
  }

  private renderContent() {
    if (this.isLoading) {
      return html`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading queue statistics...</div>
        </div>
      `;
    }

    if (this.hasError) {
      return html`
        <div class="error-container">
          <div class="error-icon">⚠️</div>
          <div class="error-text">${this.errorMessage}</div>
        </div>
      `;
    }

    if (!this.queueStats.length) {
      return html`
        <div class="empty-container">
          <div class="empty-icon">✓</div>
          <div class="empty-text">All queues clear</div>
        </div>
      `;
    }

    return html`
      <div class="queues-container">
        ${this.queueStats.map((queue, index) => html`
          <div 
            class="queue-card status-${queue.status}"
            style="animation-delay: ${index * 0.05}s"
          >
            <div class="queue-header">
              <div class="queue-name">${queue.name}</div>
              <div class="queue-badge ${queue.status}">
                ${this.getStatusLabel(queue.status)}
              </div>
            </div>
            
            <div class="queue-metrics">
              <div class="metric">
                <div class="metric-label">
                  <span class="metric-icon">👥</span>Contacts
                </div>
                <div class="metric-value ${queue.contacts >= 10 ? 'large-number' : ''}">
                  ${queue.contacts}
                </div>
              </div>
              
              <div class="metric">
                <div class="metric-label">
                  <span class="metric-icon">⏱️</span>Longest Wait
                </div>
                <div class="metric-value">
                  ${this.formatWaitTime(queue.waitTimeSeconds)}
                </div>
              </div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

// Register the custom element
customElements.define('queue-statistics-modern', QueueStatisticsModern);
