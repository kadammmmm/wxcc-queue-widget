# Webex Contact Center Queue Statistics Widget

A real-time queue monitoring widget for Webex Contact Center Agent Desktop. Displays one compact row per queue - tap a queue to expand it for full stats and the agent roster - sorted by urgency.

![Widget Preview](docs/widget-preview.png)

## Features

- 📊 **Real-time queue statistics** - Contacts waiting, longest wait time, and status per queue
- 📉 **Collapsed by default** - Each queue is a single compact row ("No calls waiting" or "N waiting"); click a queue to expand it for the full detail (stat tiles + agent roster), so a narrow panel with many queues stays scannable
- 🧑‍💻 **Agent roster** - Per-queue agent names and live status (Ready / In Call / Wrap Up), best-effort; shows an explicit "unavailable" state rather than guessing when the data can't be fetched
- 🚦 **Color-coded status** - OK / Warning / Critical based on configurable thresholds
- 🔄 **Auto-refresh** - Configurable refresh interval (default: 30 seconds)
- 📜 **Multi-queue support** - Stacked, scrollable cards sorted by priority (critical first)
- 🔓 **No masked data** - Names and numbers are shown as returned by the API; nothing is anonymized

> A compact 64px header-bar variant (`queue-statistics-compact.ts`, with click-to-expand contact detail panels) is also included in `src/` for teams that want that form factor, but it is not the default build - see [Alternative: Compact Widget](#alternative-compact-widget).

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Deployment](#deployment)
5. [Agent Desktop Configuration](#agent-desktop-configuration)
6. [Customization](#customization)
7. [Thresholds](#thresholds)
8. [Troubleshooting](#troubleshooting)
9. [Development](#development)
10. [API Reference](#api-reference)

---

## Quick Start

If you just want to use the widget without modifications:

1. Fork this repository
2. Enable GitHub Pages on the `gh-pages` branch
3. Add the widget URL to your Agent Desktop layout
4. Done!

---

## Prerequisites

### For Using the Widget
- Webex Contact Center organization
- Admin access to Desktop Layout configuration
- GitHub account (for hosting)

### For Development/Customization
- Node.js 18+ 
- npm 9+
- Git
- Code editor (VS Code recommended)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/wxcc-queue-widget.git
cd wxcc-queue-widget
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Widget

```bash
npm run build
```

This creates a compiled `index.js` file in the `dist/` folder.

---

## Deployment

### Option A: GitHub Pages (Recommended)

#### Initial Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create the gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   cp dist/index.js .
   git add index.js
   git commit -m "Initial deployment"
   git push origin gh-pages
   git checkout main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

4. **Your widget URL will be:**
   ```
   https://YOUR_USERNAME.github.io/wxcc-queue-widget/index.js
   ```

#### Deploying Updates

After making changes, run these commands:

```bash
# 1. Commit changes on main
git checkout main
git add .
git commit -m "Description of changes"
git push origin main

# 2. Build
npm run build

# 3. Deploy to gh-pages
git checkout gh-pages
cp dist/index.js .
git add index.js
git commit -m "Deploy: Description of changes"
git push origin gh-pages

# 4. Return to main
git checkout main
```

### Option B: Custom Web Server

1. Build the widget: `npm run build`
2. Host `dist/index.js` on any HTTPS web server
3. Ensure CORS headers allow requests from `*.cisco.com`

---

## Agent Desktop Configuration

### 1. Access Desktop Layout

1. Log in to Webex Control Hub
2. Navigate to: Contact Center → Desktop Layouts
3. Edit your desktop layout JSON

### 2. Add the Widget to the Header

Add this to the `header` section of your layout:

```json
{
  "comp": "md-tab",
  "attributes": {
    "slot": "tab"
  },
  "children": [
    {
      "comp": "md-icon",
      "attributes": {
        "name": "queue-contact_16"
      }
    },
    {
      "comp": "span",
      "textContent": "Queue Stats"
    }
  ]
},
{
  "comp": "md-tab-panel",
  "attributes": {
    "slot": "panel"
  },
  "children": [
    {
      "comp": "queue-statistics-modern",
      "script": "https://YOUR_USERNAME.github.io/wxcc-queue-widget/index.js",
      "attributes": {
        "contacts-warning": "5",
        "contacts-critical": "10",
        "wait-warning": "120",
        "wait-critical": "300",
        "data-refresh-interval": "30000"
      }
    }
  ]
}
```

### 3. Alternative: Panel Widget (Always Visible)

To display the widget directly in a panel (always visible, no tab):

```json
{
  "comp": "queue-statistics-modern",
  "script": "https://YOUR_USERNAME.github.io/wxcc-queue-widget/index.js",
  "attributes": {
    "contacts-warning": "5",
    "contacts-critical": "10",
    "wait-warning": "120",
    "wait-critical": "300"
  }
}
```

### 4. Save and Publish

Save your layout changes. Agents will see the widget after refreshing their desktop.

---

## Customization

### Widget Attributes

Configure the widget behavior using HTML attributes:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `contacts-warning` | number | `5` | Contact count threshold for warning status |
| `contacts-critical` | number | `10` | Contact count threshold for critical status |
| `wait-warning` | number | `120` | Wait time (seconds) threshold for warning |
| `wait-critical` | number | `300` | Wait time (seconds) threshold for critical |
| `data-refresh-interval` | number | `30000` | Data refresh interval in milliseconds |
| `ui-refresh-interval` | number | `1000` | UI update interval in milliseconds |
| `demo-mode` | boolean | `false` | Enable demo mode (no API calls) |

### Example: Stricter Thresholds

```json
{
  "comp": "queue-statistics-modern",
  "script": "https://YOUR_USERNAME.github.io/wxcc-queue-widget/index.js",
  "attributes": {
    "contacts-warning": "3",
    "contacts-critical": "5",
    "wait-warning": "60",
    "wait-critical": "180"
  }
}
```

### Example: Faster Refresh

```json
{
  "comp": "queue-statistics-modern",
  "script": "https://YOUR_USERNAME.github.io/wxcc-queue-widget/index.js",
  "attributes": {
    "data-refresh-interval": "15000"
  }
}
```

---

## Thresholds

The widget uses a two-tier threshold system:

### Status Levels

| Status | Color | Condition |
|--------|-------|-----------|
| OK | 🟢 Green | Below all thresholds |
| Warning | 🟡 Yellow | Contacts ≥ warning OR wait time ≥ warning |
| Critical | 🔴 Red | Contacts ≥ critical OR wait time ≥ critical |

### Default Thresholds

| Metric | Warning | Critical |
|--------|---------|----------|
| Contacts Waiting | 5 | 10 |
| Wait Time | 2 minutes (120s) | 5 minutes (300s) |

### Customizing Thresholds

Adjust thresholds based on your contact center's SLAs:

**High-volume center (relaxed):**
```json
"contacts-warning": "15",
"contacts-critical": "30",
"wait-warning": "300",
"wait-critical": "600"
```

**Premium support (strict):**
```json
"contacts-warning": "2",
"contacts-critical": "5",
"wait-warning": "30",
"wait-critical": "60"
```

---

## Troubleshooting

### Widget Not Loading

1. **Check browser console** (F12 → Console) for errors
2. **Verify the script URL** is accessible (try opening it directly in browser)
3. **Check HTTPS** - the widget must be served over HTTPS
4. **Verify GitHub Pages** is enabled and deployed

### "Error loading queue data"

1. **Token issues** - The widget uses the agent's session token automatically
2. **API permissions** - Ensure the agent has access to queue data
3. **Network issues** - Check if `api.wxcc-us1.cisco.com` is accessible

### GraphQL Errors in Console

If you see errors like `Unknown type 'TaskAggregation'`:
- Ensure you're using the latest version of the widget
- The query syntax must use inline aggregations, not variables

### Panel Not Appearing on Click

1. **Z-index conflicts** - The panel uses `z-index: 10000`
2. **Check for JavaScript errors** in the console
3. **Verify the click event** is not being blocked by other elements

### Data Not Refreshing

1. Check `data-refresh-interval` attribute value
2. Verify there are no console errors during refresh
3. Ensure the agent session hasn't expired

### Agent Roster Shows "Agent status unavailable"

The per-agent roster call is best-effort. Webex CC's agent-listing API is documented as asynchronous (it can respond `202 Accepted` and deliver the real payload over a separate WebSocket notification subscription), and that handshake isn't implemented yet - see the comment above `getAgentRoster()` in `src/queue-statistics-modern.ts`. If your token/scope only supports the async path, the roster will consistently show "unavailable" until that method is updated against a confirmed response shape for your org. This is intentional: the widget never fabricates agent names or statuses.

---

## Development

### Project Structure

```
wxcc-queue-widget/
├── src/
│   ├── queue-statistics-modern.ts    # Main widget source (default build)
│   └── queue-statistics-compact.ts   # Alternative 64px header-bar widget
├── dist/
│   └── index.js                      # Compiled widget (built)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Alternative: Compact Widget

`queue-statistics-compact.ts` is still in the repo for teams that want a 64px header bar with click-to-expand contact panels instead of the full queue cards. It isn't built by default. To build it, change `entry` (and the matching `name` values) in `vite.config.ts` back to `./src/queue-statistics-compact.ts`, then use `"comp": "queue-statistics-compact"` in your Desktop Layout JSON.

### Development Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Type check
npm run typecheck
```

### Making Changes

1. Edit `src/queue-statistics-modern.ts`
2. Run `npm run build`
3. Test locally or deploy to GitHub Pages
4. Commit and push changes

### Code Style

- Use TypeScript strict mode
- Follow Lit element patterns
- Keep the bundle size minimal
- Use CSS-in-JS (Lit's `css` template literal)

---

## API Reference

### Webex CC Search API

The widget uses the GraphQL Search API to fetch queue data.

**Endpoint:**
```
POST https://api.wxcc-us1.cisco.com/search
```

**Headers:**
```
Authorization: Bearer {agent_token}
Content-Type: application/json
```

**Query: Aggregated Stats**
```graphql
{
  task(
    from: {epoch_ms}
    to: {epoch_ms}
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
}
```

**Query: Contact Details**
```graphql
{
  task(
    from: {epoch_ms}
    to: {epoch_ms}
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
}
```

### Data Center URLs

| Region | API URL |
|--------|---------|
| US | `api.wxcc-us1.cisco.com` |
| EU | `api.wxcc-eu1.cisco.com` |
| ANZ | `api.wxcc-anz1.cisco.com` |

To change regions, modify the fetch URL in `queue-statistics-modern.ts`.

---

## Browser Support

- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 13.1+

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Acknowledgments

- Built with [Lit](https://lit.dev)
- Powered by [Webex Contact Center APIs](https://developer.webex-cx.com)
- Bundled with [Vite](https://vitejs.dev)

---

## Support

For issues and feature requests, please [open an issue](https://github.com/YOUR_USERNAME/wxcc-queue-widget/issues) on GitHub.

For Webex Contact Center API questions, visit the [Cisco Developer Community](https://community.cisco.com/t5/webex-for-developers/bd-p/disc-webex-developers).
