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

// Several queues covering ok / warning / critical status plus a batch of
// empty ones (mirrors a real org with many mostly-idle queues). Shape
// mirrors the GraphQL task-search response consumed by updateTemplate()
// in queue-statistics-modern.ts (one grouped entry per queue, with a
// "contacts" count and "oldestStart" timestamp aggregation).
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
  },
  { lastQueue: { id: 'q4', name: 'After Hours' }, aggregation: [] },
  { lastQueue: { id: 'q5', name: 'TS_EMAIL' }, aggregation: [] },
  { lastQueue: { id: 'q6', name: 'TS_CHAT_Q' }, aggregation: [] },
  { lastQueue: { id: 'q7', name: 'MATT_VOICE' }, aggregation: [] }
];
el.updateTemplate();

// Individual contact details, keyed by queue id. Covers: a populated list
// with real-looking phone numbers/emails (q1), an explicit empty result
// (q2, to show "No individual contact details available"), and a queue
// whose fetch simply hasn't landed yet (q3 - deliberately no entry, to
// show the "Loading contact details..." state).
const contacts = new Map<string, any[]>();
contacts.set('q1', [
  { id: 'c1', createdTime: Date.now() - (8 * 60 + 22) * 1000, channelType: 'telephony', origin: '+14155552671' },
  { id: 'c2', createdTime: Date.now() - (4 * 60 + 5) * 1000, channelType: 'chat', origin: 'j.rivera@example.com' },
  { id: 'c3', createdTime: Date.now() - 45 * 1000, channelType: 'telephony', origin: '+16505550132' }
]);
contacts.set('q2', []);
el.contactDetails = contacts;

// Open the panel by default so the demo page shows the expanded view,
// since there's no way to script a click in a static screenshot check.
el.panelPosition = { top: 44, left: 12 };
el.isPanelOpen = true;
