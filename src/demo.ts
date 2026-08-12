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

// Three queues covering ok / warning / critical status.
el.queueData = [
  {
    lastQueue: { id: 'q1', name: 'Support EN' },
    aggregation: [
      { name: 'contacts', value: 14 },
      { name: 'oldestStart', value: Date.now() - (8 * 60 + 22) * 1000 }
    ]
  },
  {
    lastQueue: { id: 'q2', name: 'Billing' },
    aggregation: [
      { name: 'contacts', value: 2 },
      { name: 'oldestStart', value: Date.now() - 30 * 1000 }
    ]
  },
  {
    lastQueue: { id: 'q3', name: 'VIP Escalations' },
    aggregation: [
      { name: 'contacts', value: 7 },
      { name: 'oldestStart', value: Date.now() - 130 * 1000 }
    ]
  }
];
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

el.addEventListener('manage-queue', (e: Event) => {
  console.log('manage-queue', (e as CustomEvent).detail);
});
