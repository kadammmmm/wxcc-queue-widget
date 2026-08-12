import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Modern Queue Statistics Widget for Webex Contact Center
 *
 * Features:
 * - Real-time queue monitoring with auto-refresh
 * - Per-queue agent roster (name + live status) with graceful fallback
 * - Threshold-based visual alerts (ok/warning/critical)
 * - Configurable warning and critical thresholds
 *
 * No caller/agent data is ever masked or anonymized here - if the API
 * returns a name or number, it is shown as-is.
 */

interface QueueStat {
  id: string;
  name: string;
  contacts: number;
  waitTimeSeconds: number;
  status: 'ok' | 'warning' | 'critical';
}

interface AgentRosterEntry {
  id: string;
  name: string;
  state: 'available' | 'oncall' | 'wrapup' | 'unknown';
  stateDurationSeconds?: number;
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
  @state() private queueFilter: object[] = [];
  @state() queueData?: any;  // Public for demo mode
  // Per-queue agent roster, keyed by queue id.
  //   undefined -> not yet fetched
  //   null      -> fetch attempted but roster could not be obtained (show fallback, never fabricate agents)
  //   []        -> fetch succeeded, no agents currently assigned
  //   [...]     -> live roster
  @state() agentRoster: Map<string, AgentRosterEntry[] | null> = new Map(); // Public for demo mode
  @state() private _dataRefreshTimer?: any;
  @state() private _uiRefreshTimer?: any;
  @state() isLoading: boolean = true;  // Public for demo mode
  @state() private hasError: boolean = false;
  @state() private errorMessage: string = '';

  // === STYLES ===
  static styles = css`
    :host {
      display: block;
      width: 100%;
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
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .queue-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
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
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--turquoise-600);
    }

    .card-body {
      padding: 18px 20px 20px;
    }

    .waiting-now-box {
      border: 2px solid var(--neutral-black);
      border-radius: 12px;
      padding: 12px 16px;
      margin-bottom: 14px;
    }

    .stat-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--neutral-black);
      opacity: 0.7;
    }

    .waiting-now-value {
      font-size: 40px;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -1px;
      color: var(--neutral-black);
    }

    .tile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 18px;
    }

    .tile {
      border-radius: 12px;
      padding: 12px 16px;
      color: var(--neutral-black);
    }

    .tile-value {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    .tile.tile-pink { background: color-mix(in srgb, var(--pink-600), white 25%); }
    .tile.tile-available { background: color-mix(in srgb, var(--lblue-600), white 25%); }
    .tile.tile-active { background: color-mix(in srgb, var(--blue-600), white 20%); color: var(--neutral-white); }
    .tile.tile-active .stat-label { color: var(--neutral-white); opacity: 0.85; }

    .tile.status-ok { background: color-mix(in srgb, var(--turquoise-600), white 25%); }
    .tile.status-warning { background: color-mix(in srgb, var(--yellow-600), white 15%); }
    .tile.status-critical { background: color-mix(in srgb, var(--red-600), white 15%); }

    .roster-section {
      border-top: 1px solid var(--neutral-grey);
      padding-top: 8px;
      margin-bottom: 16px;
    }

    .agent-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 2px;
      border-bottom: 1px solid var(--neutral-grey);
      font-size: 13px;
    }

    .agent-row:last-child {
      border-bottom: none;
    }

    .agent-name {
      font-weight: 600;
      color: var(--neutral-black);
    }

    .status-pill {
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .status-pill.available {
      background: var(--yellow-600);
      color: var(--neutral-black);
    }

    .status-pill.oncall {
      background: var(--pink-600);
      color: var(--neutral-black);
    }

    .status-pill.wrapup {
      background: var(--neutral-white);
      border: 1.5px solid var(--neutral-black);
      color: var(--neutral-black);
    }

    .status-pill.unknown {
      background: var(--neutral-grey-light);
      color: var(--neutral-text-muted);
      border: 1px solid var(--neutral-grey);
    }

    .roster-empty,
    .roster-unavailable {
      padding: 10px 2px;
      font-size: 12px;
      color: var(--neutral-text-muted);
      font-style: italic;
      text-align: center;
    }

    .manage-btn {
      width: 100%;
      padding: 14px;
      background: var(--neutral-black);
      color: var(--neutral-white);
      border: none;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .manage-btn:hover {
      background: #262626;
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
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
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
                id
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

        // Best-effort agent roster refresh - failures are handled internally
        // and never block or fail the queue stats render.
        this.getAgentRoster();
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Best-effort fetch of the per-queue agent roster (name + live state).
   *
   * NOTE: Webex CC's agent-listing API (used for consult/transfer "buddy
   * agent" lookups) is documented as asynchronous - it can return a 202
   * and deliver the actual payload over a separate WebSocket notification
   * subscription. That handshake isn't implemented here because the exact
   * event/payload shape couldn't be confirmed against live docs. This method
   * only handles a direct synchronous JSON response. If your org's endpoint
   * only replies via the async/WebSocket path, this will consistently mark
   * the roster "unavailable" below - that's expected until this method is
   * updated against a verified response shape.
   *
   * Whatever happens, we never invent agent names or states: a queue with
   * no usable data renders an explicit "unavailable" state instead.
   */
  private async getAgentRoster() {
    if (this.demoMode || !this.queueStats.length) {
      return;
    }

    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const results = await Promise.all(this.queueStats.map(async (queue) => {
      if (!queue.id) {
        return { queueId: queue.id, roster: null as AgentRosterEntry[] | null };
      }
      try {
        const response = await fetch(
          `https://api.wxcc-us1.cisco.com/organization/${this.orgId}/v1/agents/buddy-agents-list`,
          {
            method: 'POST',
            headers,
            body: JSON.stringify({ queueId: queue.id }),
            redirect: 'follow',
            signal: AbortSignal.timeout(5000)
          }
        );

        // Async APIs (202 Accepted) require a WebSocket notification
        // subscription this widget doesn't implement yet - see note above.
        if (response.status === 202) {
          console.info(`Agent roster for "${queue.name}" is delivered asynchronously; live status unavailable.`);
          return { queueId: queue.id, roster: null as AgentRosterEntry[] | null };
        }

        if (!response.ok) {
          return { queueId: queue.id, roster: null as AgentRosterEntry[] | null };
        }

        const result = await response.json();
        const roster = this.parseAgentRoster(result);
        return { queueId: queue.id, roster };
      } catch (error) {
        console.error(`Error fetching agent roster for queue ${queue.id}:`, error);
        return { queueId: queue.id, roster: null as AgentRosterEntry[] | null };
      }
    }));

    const nextRoster = new Map(this.agentRoster);
    for (const { queueId, roster } of results) {
      nextRoster.set(queueId, roster);
    }
    this.agentRoster = nextRoster;
  }

  /**
   * Normalizes a roster API response into AgentRosterEntry[], tolerating
   * several plausible field-name variants since the exact schema is
   * unverified (see getAgentRoster). Returns null if nothing usable is found.
   */
  private parseAgentRoster(result: any): AgentRosterEntry[] | null {
    const rawList: any[] = result?.data ?? result?.agents ?? result?.agentList ?? (Array.isArray(result) ? result : null);
    if (!Array.isArray(rawList)) {
      return null;
    }

    return rawList.map((agent: any): AgentRosterEntry => {
      const rawState = agent.state ?? agent.agentState ?? agent.status ?? '';
      return {
        id: agent.id ?? agent.agentId ?? '',
        name: agent.name ?? agent.agentName ?? agent.displayName ?? 'Unknown Agent',
        state: this.normalizeAgentState(rawState),
        stateDurationSeconds: agent.stateDuration ?? agent.stateDurationSeconds ?? undefined
      };
    });
  }

  private normalizeAgentState(rawState: string): AgentRosterEntry['state'] {
    const s = (rawState || '').toLowerCase();
    if (s.includes('available')) return 'available';
    if (s.includes('wrap')) return 'wrapup';
    if (s.includes('call') || s.includes('engaged') || s.includes('connect') || s.includes('talk')) return 'oncall';
    return 'unknown';
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

  private getStatusPillLabel(state: AgentRosterEntry['state']): string {
    switch (state) {
      case 'available': return 'Ready';
      case 'oncall': return 'In Call';
      case 'wrapup': return 'Wrap Up';
      default: return 'Unknown';
    }
  }

  private handleManageQueue(queue: QueueStat) {
    this.dispatchEvent(new CustomEvent('manage-queue', {
      detail: { queueId: queue.id, queueName: queue.name },
      bubbles: true,
      composed: true
    }));
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
    return html`${this.renderContent()}`;
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
    const roster = this.agentRoster.get(queue.id);
    const available = roster ? roster.filter(a => a.state === 'available').length : null;
    const activeCalls = roster ? roster.filter(a => a.state === 'oncall').length : null;

    return html`
      <div class="queue-card" style="animation-delay: ${index * 0.05}s">
        <div class="card-header">
          <div class="queue-title">
            <span class="live-dot"></span>
            Queue: ${queue.name}
          </div>
          <span class="live-badge">Live</span>
        </div>

        <div class="card-body">
          <div class="waiting-now-box">
            <div class="stat-label">Waiting Now</div>
            <div class="waiting-now-value">${queue.contacts}</div>
          </div>

          <div class="tile-grid">
            <div class="tile tile-pink">
              <div class="stat-label">Longest Wait</div>
              <div class="tile-value">${this.formatWaitTime(queue.waitTimeSeconds)}</div>
            </div>
            <div class="tile status-${queue.status}">
              <div class="stat-label">Status</div>
              <div class="tile-value">${this.getStatusText(queue.status)}</div>
            </div>
            <div class="tile tile-available">
              <div class="stat-label">Available</div>
              <div class="tile-value">${available === null ? '—' : available}</div>
            </div>
            <div class="tile tile-active">
              <div class="stat-label">Active Calls</div>
              <div class="tile-value">${activeCalls === null ? '—' : activeCalls}</div>
            </div>
          </div>

          <div class="roster-section">
            ${this.renderRoster(roster)}
          </div>

          <button class="manage-btn" @click=${() => this.handleManageQueue(queue)}>
            Manage Queue
          </button>
        </div>
      </div>
    `;
  }

  private renderRoster(roster: AgentRosterEntry[] | null | undefined) {
    if (roster === null) {
      return html`<div class="roster-unavailable">Agent status unavailable</div>`;
    }
    if (!roster || roster.length === 0) {
      return html`<div class="roster-empty">No agents currently assigned</div>`;
    }

    return roster.map(agent => html`
      <div class="agent-row">
        <span class="agent-name">${agent.name}</span>
        <span class="status-pill ${agent.state}">
          ${this.getStatusPillLabel(agent.state)}${agent.state === 'oncall' && agent.stateDurationSeconds != null
            ? ` (${this.formatWaitTime(agent.stateDurationSeconds)})`
            : ''}
        </span>
      </div>
    `);
  }
}

// Register the custom element
customElements.define('queue-statistics-modern', QueueStatisticsModern);
