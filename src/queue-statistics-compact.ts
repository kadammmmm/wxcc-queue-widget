import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Compact Queue Statistics Widget for Webex Contact Center
 * Designed for 64px header - horizontal scrolling bar with expandable overlay
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
  @state() private queueDetails: Map<string, any[]> = new Map();
  @state() private _dataRefreshTimer?: any;
  @state() private _uiRefreshTimer?: any;
  @state() isLoading: boolean = true;
  @state() private hasError: boolean = false;
  @state() private expandedQueue: string | null = null;
  @state() private lastUpdated: Date = new Date();

  // === STYLES ===
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 48px;
      background: #0f1419;
      border-radius: 6px;
      overflow: visible;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
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
      transition: all 0.2s ease;
      cursor: pointer;
      position: relative;
    }

    .queue-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    .queue-item.expanded {
      background: rgba(255, 255, 255, 0.12);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
      50% { opacity: 0.85; }
    }

    @keyframes pulse-critical {
      0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(239, 68, 68, 0.5); }
      50% { opacity: 0.9; box-shadow: 0 0 16px rgba(239, 68, 68, 0.8); }
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-indicator.ok { background: #10b981; }
    .status-indicator.warning { background: #f59e0b; }
    .status-indicator.critical { background: #ef4444; }

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

    .expand-icon {
      margin-left: 4px;
      font-size: 10px;
      opacity: 0.6;
      transition: transform 0.2s ease;
    }

    .queue-item.expanded .expand-icon {
      transform: rotate(180deg);
    }

    .loading, .error, .empty {
      color: #94a3b8;
      font-size: 13px;
      padding: 0 12px;
    }

    .error { color: #ef4444; }

    /* === FLOATING OVERLAY PANEL === */
    .overlay-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
    }

    .overlay-panel {
      position: absolute;
      top: 52px;
      left: 0;
      min-width: 320px;
      max-width: 420px;
      background: linear-gradient(165deg, #1a1f2e 0%, #0f1419 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
      z-index: 1000;
      overflow: hidden;
      animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .panel-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .panel-title-text {
      font-size: 15px;
      font-weight: 600;
      color: #f1f5f9;
    }

    .panel-status-badge {
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .panel-status-badge.ok {
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
    }

    .panel-status-badge.warning {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .panel-status-badge.critical {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: #94a3b8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      font-size: 16px;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #f1f5f9;
    }

    .panel-content {
      padding: 16px 20px;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 14px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #f1f5f9;
      line-height: 1.2;
    }

    .stat-value.warning { color: #f59e0b; }
    .stat-value.critical { color: #ef4444; }

    .stat-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    /* Contacts List */
    .contacts-section {
      margin-top: 8px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .contacts-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 200px;
      overflow-y: auto;
    }

    .contacts-list::-webkit-scrollbar {
      width: 4px;
    }

    .contacts-list::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }

    .contacts-list::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.06);
    }

    .contact-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .contact-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .contact-id {
      font-size: 13px;
      color: #f1f5f9;
      font-weight: 500;
    }

    .contact-channel {
      font-size: 11px;
      color: #64748b;
    }

    .contact-wait {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
    }

    .wait-time {
      font-size: 14px;
      font-weight: 600;
      color: #f1f5f9;
    }

    .wait-time.warning { color: #f59e0b; }
    .wait-time.critical { color: #ef4444; }

    .wait-label {
      font-size: 10px;
      color: #64748b;
    }

    /* Panel Footer */
    .panel-footer {
      padding: 12px 20px;
      background: rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .last-updated {
      font-size: 11px;
      color: #64748b;
    }

    .refresh-btn {
      padding: 6px 12px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 6px;
      color: #3b82f6;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .refresh-btn:hover {
      background: rgba(59, 130, 246, 0.3);
    }

    .no-contacts {
      text-align: center;
      padding: 24px;
      color: #64748b;
      font-size: 13px;
    }

    .no-contacts-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }
  `;

  // === LIFECYCLE ===
  connectedCallback() {
    super.connectedCallback();
    if (!this.demoMode) {
      this.initialize();
    }
    // Close panel when clicking outside
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private handleOutsideClick = (e: MouseEvent) => {
    if (this.expandedQueue && !this.shadowRoot?.contains(e.target as Node)) {
      this.expandedQueue = null;
    }
  };

  private async initialize() {
    try {
      this.isLoading = true;
      this.hasError = false;

      if (!this.demoMode) {
        await this.getStats();
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
  private async getStats() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };

    const now = Date.now();
    const from = now - 86400000;

    // Query for aggregated stats by queue
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
            lastQueue { id name }
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
      
      if (result.error || result.errors) {
        console.error('GraphQL error:', result.error || result.errors);
        this.hasError = true;
        this.isLoading = false;
        return;
      }
      
      if (result.data?.task?.tasks) {
        this.queueData = result.data.task.tasks;
        this.lastUpdated = new Date();
        this.updateTemplate();
        this.isLoading = false;
        this.hasError = false;
        
        // Fetch individual contacts for detail view
        await this.getContactDetails();
      } else {
        this.queueData = [];
        this.updateTemplate();
        this.isLoading = false;
        this.hasError = false;
      }
    } catch (error) {
      this.hasError = true;
      console.error('Error fetching stats:', error);
    }
  }

  private async getContactDetails() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };

    const now = Date.now();
    const from = now - 86400000;

    // Query for individual parked contacts
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
        ) {
          tasks {
            id
            createdTime
            channelType
            origin
            lastQueue { id name }
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
      
      if (result.data?.task?.tasks) {
        // Group contacts by queue
        const contactsByQueue = new Map<string, any[]>();
        
        for (const task of result.data.task.tasks) {
          const queueName = task.lastQueue?.name || 'Unknown';
          if (!contactsByQueue.has(queueName)) {
            contactsByQueue.set(queueName, []);
          }
          contactsByQueue.get(queueName)!.push({
            id: task.id,
            createdTime: task.createdTime,
            channelType: task.channelType || 'telephony',
            origin: task.origin || 'Unknown'
          });
        }

        // Sort contacts by wait time (oldest first)
        for (const [queue, contacts] of contactsByQueue) {
          contacts.sort((a, b) => a.createdTime - b.createdTime);
        }

        this.queueDetails = contactsByQueue;
      }
    } catch (error) {
      console.error('Error fetching contact details:', error);
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
        id: item.lastQueue?.id || '',
        name: item.lastQueue?.name || 'Unknown Queue',
        contacts,
        waitTimeSeconds,
        oldestStart,
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

  private formatLongWaitTime(seconds: number): string {
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      return `${hours}h ${mins}m`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  }

  private getWaitTimeStatus(seconds: number): string {
    if (seconds >= this.waitCritical) return 'critical';
    if (seconds >= this.waitWarning) return 'warning';
    return '';
  }

  private toggleQueue(queueName: string, e: Event) {
    e.stopPropagation();
    this.expandedQueue = this.expandedQueue === queueName ? null : queueName;
  }

  private closePanel() {
    this.expandedQueue = null;
  }

  private async refreshData() {
    await this.getStats();
  }

  private getChannelIcon(channelType: string): string {
    switch (channelType?.toLowerCase()) {
      case 'telephony': return '📞';
      case 'chat': return '💬';
      case 'email': return '📧';
      case 'social': return '📱';
      default: return '📞';
    }
  }

  private formatOrigin(origin: string): string {
    if (!origin || origin === 'Unknown') return 'Unknown Caller';
    // Mask phone number for privacy: +1234567890 -> +1***890
    if (origin.match(/^\+?\d{10,}/)) {
      return origin.slice(0, 3) + '***' + origin.slice(-3);
    }
    return origin;
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

    const expandedContacts = this.expandedQueue 
      ? this.queueDetails.get(this.expandedQueue) || []
      : [];

    return html`
      <div class="container">
        ${this.queueStats.map(queue => html`
          <div 
            class="queue-item ${queue.status} ${this.expandedQueue === queue.name ? 'expanded' : ''}"
            @click=${(e: Event) => this.toggleQueue(queue.name, e)}
          >
            <div class="status-indicator ${queue.status}"></div>
            <span class="queue-name">${queue.name}</span>
            <div class="queue-metrics">
              <span class="metric">👥 ${queue.contacts}</span>
              <span class="metric">⏱️ ${this.formatWaitTime(queue.waitTimeSeconds)}</span>
            </div>
            <span class="expand-icon">▼</span>

            ${this.expandedQueue === queue.name ? html`
              <div class="overlay-panel" @click=${(e: Event) => e.stopPropagation()}>
                <div class="panel-header">
                  <div class="panel-title">
                    <span class="panel-title-text">${queue.name}</span>
                    <span class="panel-status-badge ${queue.status}">${queue.status}</span>
                  </div>
                  <button class="close-btn" @click=${() => this.closePanel()}>✕</button>
                </div>

                <div class="panel-content">
                  <div class="stats-grid">
                    <div class="stat-card">
                      <div class="stat-value ${queue.contacts >= this.contactsCritical ? 'critical' : queue.contacts >= this.contactsWarning ? 'warning' : ''}">${queue.contacts}</div>
                      <div class="stat-label">Waiting</div>
                    </div>
                    <div class="stat-card">
                      <div class="stat-value ${this.getWaitTimeStatus(queue.waitTimeSeconds)}">${this.formatLongWaitTime(queue.waitTimeSeconds)}</div>
                      <div class="stat-label">Longest Wait</div>
                    </div>
                  </div>

                  <div class="contacts-section">
                    <div class="section-header">
                      <span class="section-title">Contacts in Queue</span>
                    </div>
                    
                    ${expandedContacts.length > 0 ? html`
                      <div class="contacts-list">
                        ${expandedContacts.map(contact => {
                          const waitSeconds = Math.floor((Date.now() - contact.createdTime) / 1000);
                          return html`
                            <div class="contact-item">
                              <div class="contact-info">
                                <div class="contact-icon">${this.getChannelIcon(contact.channelType)}</div>
                                <div class="contact-details">
                                  <span class="contact-id">${this.formatOrigin(contact.origin)}</span>
                                  <span class="contact-channel">${contact.channelType || 'Voice'}</span>
                                </div>
                              </div>
                              <div class="contact-wait">
                                <span class="wait-time ${this.getWaitTimeStatus(waitSeconds)}">${this.formatLongWaitTime(waitSeconds)}</span>
                                <span class="wait-label">waiting</span>
                              </div>
                            </div>
                          `;
                        })}
                      </div>
                    ` : html`
                      <div class="no-contacts">
                        <div class="no-contacts-icon">📭</div>
                        <div>No contacts waiting</div>
                      </div>
                    `}
                  </div>
                </div>

                <div class="panel-footer">
                  <span class="last-updated">Updated ${this.lastUpdated.toLocaleTimeString()}</span>
                  <button class="refresh-btn" @click=${() => this.refreshData()}>↻ Refresh</button>
                </div>
              </div>
            ` : ''}
          </div>
        `)}
      </div>
    `;
  }
}

// Register the custom element
customElements.define('queue-statistics-compact', QueueStatisticsCompact);
