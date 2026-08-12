import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Modern Queue Statistics Widget for Webex Contact Center
 *
 * Features:
 * - Real-time queue monitoring with auto-refresh
 * - Threshold-based visual alerts (ok/warning/critical)
 * - Configurable warning and critical thresholds
 *
 * No caller data is ever masked or anonymized here - if the API returns a
 * name or number, it is shown as-is.
 */

interface QueueStat {
  id: string;
  name: string;
  contacts: number;
  waitTimeSeconds: number;
  status: 'ok' | 'warning' | 'critical';
}

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
  @state() private queueStats: QueueStat[] = [];
  @state() queueData?: any;  // Public for demo mode
  @state() isPanelOpen: boolean = false; // Public for demo mode
  @state() panelPosition: { top: number; left: number } = { top: 0, left: 0 }; // Public for demo mode
  @state() private _dataRefreshTimer?: any;
  @state() private _uiRefreshTimer?: any;
  @state() isLoading: boolean = true;  // Public for demo mode
  @state() private hasError: boolean = false;
  @state() private errorMessage: string = '';

  // === STYLES ===
  static styles = css`
    :host, :host *, :host *::before, :host *::after {
      box-sizing: border-box;
    }

    :host {
      /* Sized to the compact indicator's content, not stretched - this
         sits inline alongside several other icon-sized widgets in the
         Desktop header. The overlay panel below uses fixed positioning,
         so it isn't constrained by the host's size. */
      display: inline-block;
      max-width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

      /* Palette - literal color values only */
      --neutral-black: #000000;
      --neutral-grey: #e8e8e8;
      --neutral-grey-light: #f7f7f7;
      --neutral-white: #ffffff;
      --neutral-text-muted: #6b7280;

      --blue-600: #4f6fda;
      --blue-400: #b8c8ff;
      --blue-200: #f2f5ff;

      --lblue-600: #42b1ff;
      --lblue-400: #aedbfb;
      --lblue-200: #f6fbff;

      --pink-600: #ffa5fb;
      --orange-600: #ff8a30;
      --red-600: #ff5c5f;
      --yellow-600: #ffbc2a;
      --turquoise-600: #00dadf;
    }

    /* === COMPACT HEADER INDICATOR === */
    .compact-bar {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      max-width: 220px;
      height: 28px;
      padding: 0 12px;
      background: var(--neutral-black);
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .compact-bar:hover {
      background: #262626;
    }

    .compact-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      animation: pulse 2s ease-in-out infinite;
    }

    .compact-status-dot.status-ok { background: var(--turquoise-600); }
    .compact-status-dot.status-warning { background: var(--yellow-600); }
    .compact-status-dot.status-critical { background: var(--red-600); }

    .compact-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--neutral-white);
      font-size: 12px;
      font-weight: 600;
    }

    /* === EXPANDED OVERLAY PANEL === */
    .overlay-backdrop {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: transparent;
    }

    .overlay-panel {
      position: fixed;
      width: 360px;
      max-width: calc(100vw - 16px);
      max-height: 70vh;
      display: flex;
      flex-direction: column;
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      overflow: hidden;
      animation: slideIn 0.15s ease-out;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--neutral-black);
      flex-shrink: 0;
    }

    .panel-title {
      color: var(--neutral-white);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .close-btn {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.12);
      border: none;
      border-radius: 6px;
      color: var(--neutral-white);
      font-size: 13px;
      cursor: pointer;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.22);
    }

    .panel-content {
      padding: 12px;
      overflow-y: auto;
    }

    .queues-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-height: 100%;
      overflow-y: auto;
      padding: 2px;
    }

    .queues-container::-webkit-scrollbar {
      width: 6px;
    }

    .queues-container::-webkit-scrollbar-track {
      background: var(--neutral-grey-light);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb {
      background: var(--neutral-grey);
      border-radius: 3px;
    }

    .queue-card {
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      animation: slideIn 0.3s ease-out backwards;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .card-header {
      background: var(--neutral-black);
      color: var(--neutral-white);
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .queue-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--turquoise-600);
      animation: pulse 2s ease-in-out infinite;
      flex-shrink: 0;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .live-badge {
      flex-shrink: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--turquoise-600);
    }

    .card-summary {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
    }

    .summary-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .summary-status-dot.status-ok { background: var(--turquoise-600); }
    .summary-status-dot.status-warning { background: var(--yellow-600); }
    .summary-status-dot.status-critical { background: var(--red-600); }

    .summary-text {
      font-size: 13px;
      font-weight: 600;
      color: var(--neutral-black);
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .summary-text.is-empty {
      color: var(--neutral-text-muted);
      font-weight: 500;
    }

    .card-body {
      padding: 4px 16px 16px;
      border-top: 1px solid var(--neutral-grey);
    }

    .stat-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--neutral-black);
      opacity: 0.7;
    }

    .tile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 14px;
      margin-bottom: 16px;
    }

    .tile {
      min-width: 0;
      border-radius: 12px;
      padding: 12px 16px;
      color: var(--neutral-black);
    }

    .tile-value {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tile.tile-pink { background: color-mix(in srgb, var(--pink-600), white 25%); }

    .tile.status-ok { background: color-mix(in srgb, var(--turquoise-600), white 25%); }
    .tile.status-warning { background: color-mix(in srgb, var(--yellow-600), white 15%); }
    .tile.status-critical { background: color-mix(in srgb, var(--red-600), white 15%); }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
      text-align: center;
    }

    .loading-spinner {
      width: 36px;
      height: 36px;
      border: 3px solid var(--neutral-grey);
      border-top-color: var(--blue-600);
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
      color: var(--neutral-text-muted);
      margin-top: 8px;
    }

    .error-icon,
    .empty-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .tile-grid {
        grid-template-columns: 1fr;
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
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private handleOutsideClick = (e: MouseEvent) => {
    // e.target gets retargeted to the host element for listeners outside
    // the shadow tree, so it's always "not contained" in our own
    // shadowRoot - composedPath() gives the real, unretargeted path
    // (including this host element) across the shadow boundary.
    if (this.isPanelOpen && !e.composedPath().includes(this)) {
      this.isPanelOpen = false;
    }
  };

  // === INITIALIZATION ===

  private async initialize() {
    try {
      this.isLoading = true;
      this.hasError = false;

      // Skip API calls in demo mode
      if (!this.demoMode) {
        await this.fetchQueueStatistics();

        // Start refresh timer
        this._dataRefreshTimer = setInterval(
          () => this.fetchQueueStatistics(),
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
   * Fetch live queue statistics via the GraphQL Task Search API.
   *
   * GET /v1/queues/statistics (tried previously) turned out to be a
   * historical/interval reporting endpoint - every row is a 15-minute
   * bucket with offered/accepted/abandoned counts, not a live "waiting
   * now" figure - so it can't answer what this widget needs. This query
   * instead asks for every currently active, parked (waiting) task
   * org-wide and groups them by queue, which is genuinely live. It
   * intentionally applies no queue-id filter (matching the proven,
   * working pattern in queue-statistics-compact.ts) so it doesn't depend
   * on the queue-lookup endpoints that were 404/403-ing.
   *
   * Note: the query uses inline `aggregations` syntax, not GraphQL
   * variables - the API rejects (or silently ignores) aggregations passed
   * as a variable.
   */
  private async fetchQueueStatistics() {
    if (!this.token || !this.orgId) {
      this.hasError = true;
      this.isLoading = false;
      this.errorMessage = 'Missing token/orgId - check the widget attributes in the Desktop Layout configuration.';
      return;
    }

    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const to = Date.now();
    const from = to - 86400000; // 24 hours ago

    const graphqlQuery = {
      query: `{
        task(
          from: ${from}
          to: ${to}
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
      const response = await fetch(
        'https://api.wxcc-us1.cisco.com/search',
        {
          method: 'POST',
          headers,
          body: JSON.stringify(graphqlQuery),
          redirect: 'follow'
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.errors || result?.error) {
        throw new Error(
          `Task search request failed (${response.status}): ${JSON.stringify(result?.errors || result?.error || result)}`
        );
      }

      this.queueData = result?.data?.task?.tasks ?? [];
      this.updateTemplate();
      this.isLoading = false;
      this.hasError = false;
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

    this.queueStats = this.queueData.map((item: any): QueueStat => {
      const contacts = item.aggregation?.find((a: any) => a.name === 'contacts')?.value || 0;
      const oldestStart = item.aggregation?.find((a: any) => a.name === 'oldestStart')?.value || 0;
      const waitTimeSeconds = oldestStart ? Math.floor((Date.now() - oldestStart) / 1000) : 0;

      return {
        id: item.lastQueue?.id || '',
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
   * Format seconds to MM:SS
   */
  private formatWaitTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  private getStatusText(status: string): string {
    switch (status) {
      case 'critical': return 'Critical';
      case 'warning': return 'Warning';
      default: return 'OK';
    }
  }

  private togglePanel(e: Event) {
    if (this.isPanelOpen) {
      this.isPanelOpen = false;
      return;
    }

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.panelPosition = {
      top: rect.bottom + 6,
      left: Math.max(8, Math.min(rect.left, window.innerWidth - 380))
    };
    this.isPanelOpen = true;
  }

  private closePanel() {
    this.isPanelOpen = false;
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
      ${this.renderCompactBar()}
      ${this.isPanelOpen ? html`
        <div class="overlay-backdrop" @click=${() => this.closePanel()}></div>
        <div
          class="overlay-panel"
          style="top: ${this.panelPosition.top}px; left: ${this.panelPosition.left}px;"
          @click=${(e: Event) => e.stopPropagation()}
        >
          <div class="panel-header">
            <span class="panel-title">Queue Statistics</span>
            <button class="close-btn" @click=${() => this.closePanel()}>✕</button>
          </div>
          <div class="panel-content">
            ${this.renderContent()}
          </div>
        </div>
      ` : ''}
    `;
  }

  private renderCompactBar() {
    const totalContacts = this.queueStats.reduce((sum, q) => sum + q.contacts, 0);
    const busyQueues = this.queueStats.filter(q => q.contacts > 0);

    const statusPriority: Record<string, number> = { critical: 3, warning: 2, ok: 1 };
    const worstStatus = this.queueStats.reduce<'ok' | 'warning' | 'critical'>((worst, q) => {
      return statusPriority[q.status] > statusPriority[worst] ? q.status : worst;
    }, 'ok');

    let summary: string;
    if (this.isLoading) {
      summary = 'Loading…';
    } else if (this.hasError) {
      summary = 'Queue data unavailable';
    } else if (totalContacts === 0) {
      summary = 'No calls in queue';
    } else if (busyQueues.length === 1) {
      summary = `${busyQueues[0].name}: ${busyQueues[0].contacts} waiting`;
    } else {
      summary = `${totalContacts} waiting across ${busyQueues.length} queues`;
    }

    return html`
      <button class="compact-bar" @click=${(e: Event) => this.togglePanel(e)}>
        <span class="compact-status-dot status-${this.hasError ? 'critical' : worstStatus}"></span>
        <span class="compact-text">${summary}</span>
      </button>
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
        ${this.queueStats.map((queue, index) => this.renderQueueCard(queue, index))}
      </div>
    `;
  }

  private renderQueueCard(queue: QueueStat, index: number) {
    const isEmpty = queue.contacts === 0;
    // Queues with calls show full detail directly; empty ones stay a
    // one-line summary so a long queue list stays scannable.
    const expanded = !isEmpty;

    return html`
      <div class="queue-card" style="animation-delay: ${index * 0.05}s">
        <div class="card-header">
          <div class="queue-title">
            <span class="live-dot"></span>
            Queue: ${queue.name}
          </div>
          <span class="live-badge">Live</span>
        </div>

        <div class="card-summary">
          <span class="summary-status-dot status-${queue.status}"></span>
          <span class="summary-text ${isEmpty ? 'is-empty' : ''}">
            ${isEmpty
              ? 'No calls waiting'
              : `${queue.contacts} waiting · longest ${this.formatWaitTime(queue.waitTimeSeconds)}`}
          </span>
        </div>

        ${expanded ? html`
          <div class="card-body">
            <div class="tile-grid">
              <div class="tile tile-pink">
                <div class="stat-label">Longest Wait</div>
                <div class="tile-value">${this.formatWaitTime(queue.waitTimeSeconds)}</div>
              </div>
              <div class="tile status-${queue.status}">
                <div class="stat-label">Status</div>
                <div class="tile-value">${this.getStatusText(queue.status)}</div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

// Register the custom element
customElements.define('queue-statistics-modern', QueueStatisticsModern);
