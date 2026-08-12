// Local dev/demo harness for visually verifying queue-statistics-modern
// without a live Webex CC token. Not part of the built widget bundle.
import './queue-statistics-modern.ts';
import type { QueueStatisticsModern } from './queue-statistics-modern.ts';

// demoMode must be set BEFORE the element is attached to the document,
// since attaching synchronously runs connectedCallback -> initialize(),
// which otherwise takes the live-API code path with a bogus token.
const el = document.createElement('queue-statistics-modern') as QueueStatisticsModern;
el.demoMode = true;
document.getElementById('widget-root')!.appendChild(el);

// initialize() unconditionally sets isLoading = true before checking
// demoMode, so the sample data has to be applied AFTER attaching (i.e.
// after that synchronous initialize() call has already run) or it gets
// clobbered.
el.isLoading = false;

// Four queues covering ok / warning / critical status plus an empty one.
// Shape mirrors our best guess at GET /v1/queues/statistics's response (see
// the comment on fetchQueueStatistics() in queue-statistics-modern.ts) -
// adjust this once the real response shape is confirmed.
el.queueData = {
  data: [
    { id: 'q1', name: 'Support EN', activeContacts: 14, longestWaitTime: 8 * 60 + 22 },
    { id: 'q2', name: 'Billing', activeContacts: 2, longestWaitTime: 30 },
    { id: 'q3', name: 'VIP Escalations', activeContacts: 7, longestWaitTime: 130 },
    { id: 'q4', name: 'After Hours', activeContacts: 0, longestWaitTime: 0 }
  ]
};
el.updateTemplate();

// Agent roster covering: full live roster, empty roster (no agents
// assigned), and unavailable roster (fetch failed / async-only API).
const roster = new Map<string, any[] | null>();
roster.set('q1', [
  { id: 'a1', name: 'Sarah Jenkins', state: 'available' },
  { id: 'a2', name: 'Marcus Aurelius', state: 'oncall', stateDurationSeconds: 252 },
  { id: 'a3', name: 'Elena Rodriguez', state: 'wrapup' }
]);
roster.set('q2', []);
roster.set('q3', null);
el.agentRoster = roster;
