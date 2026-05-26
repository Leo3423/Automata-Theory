# Project Progress: Automata & Formal Languages Interactive Workspace

> Branch: `tims-branch` (forked from `graph-trace-theme`)

---

## 1. Project Setup

- Pulled and ran the latest version from the `graph-trace-theme` branch as the starting point.
- Resolved stash conflicts from earlier uncommitted work on the wrong branch.

---

## 2. Header / Navbar Overhaul

- **Removed the old generic header** and replaced it with a clean, responsive premium navbar.
- **Renamed alphabet toggle buttons** from plain `a, b` / `0, 1` to clearly labeled `Regex {a, b}` / `Regex {0, 1}`.
- Removed the redundant "ALPHABET" label from alongside the toggle buttons.
- **Added a Format Toggle button** to the Regular Expression card that swaps between `+` and `|` notation (standard regex vs. textbook notation). Wired up the JS state variable `regexFormat` and `updateWorkspace()` to conditionally swap symbols on click.

---

## 3. Regular Expression Card Redesign

- Completely redesigned the layout of the "Regular Expression Rule Set" panel:
  - Added a clean header row with a left-aligned `REGULAR EXPRESSION RULE SET` badge and a right-aligned `Format: USE |` toggle button separated by a border-bottom.
  - The regex string is now **centered** both horizontally and vertically in the large padded content body below the header.

---

## 4. Sidebar Complete Overhaul

- **Full layout switch** from a top-bar-based structure to a **premium responsive left-sidebar** layout.
- Moved the logo, navigation tabs, and controls into the sidebar.
- **Custom SVG icons** added to each navigation tab (DFA, CFG, PDA) matching the academic design.
- **Active Definition Card** redesigned as a dark navy card (`#111827`) showing:
  - Start State (large white mono text)
  - Accepting Set (emerald green highlighted states)
  - Alphabet Rules Set (white mono text)
- Updated the JS sidebar-meta renderer to match these new label styles.
- Fixed a dark mode bug where hardcoded Tailwind light classes (`bg-white`, `bg-slate-50`) were overriding the CSS variable–based theme. Replaced with theme-aware classes.
- Fixed a duplicate `sidebar-meta` ID that caused only one of the two instances to be populated.

---

## 5. DFA Graph State Node Notation Fix

**Bug:** Start states were rendered with an incoming arrow and text label. Accept states had an outer double-circle. These didn't match standard JFLAP/academic notation.

**Fix:**
- **Start State (`−`):** Replaced the start arrow with a bold minus sign (`−`) centered above the state label inside a single circle.
- **Accept State (`+`):** Replaced the outer double-circle with a bold plus sign (`+`) centered above the label in emerald green.
- **Start + Accept State (`±`):** Handled edge case with the `±` symbol.
- Updated the **graph legend** at the bottom of the DFA viewer to reflect these new notations.

---

## 6. DFA Graph Drag-to-Pan

**Bug:** The graph only supported zoom-in/zoom-out. There was no way to scroll or navigate a large graph.

**Fix:**
- Added `isDraggingGraph`, `dragStartX`, `dragStartY`, `startViewBoxX`, `startViewBoxY` state variables.
- Added `mousedown` / `mouseup` / `mouseleave` event listeners on the graph canvas.
- Updated `onGraphMouseMove` to detect dragging and pan the graph by shifting the SVG viewBox coordinates.
- Added `cursor: grab` / `cursor: grabbing` CSS to the canvas for visual feedback.

---

## 7. Layout Spacing & Sidebar Cleanup

- Removed `justify-between` from the sidebar flex container which was forcing the Active Definition card to snap to the bottom of the screen.
- Reduced outer gap from `space-y-8` to `gap-5` for proper top-to-bottom flow.
- Removed the **"Component View"** and **"Automata Engines"** redundant heading labels from the sidebar.
- Increased flex gap to `gap-8` for final version spacing between all sidebar sections.

---

## 8. Logo Integration

- User provided a custom PNG logo file (`logo_atmt.png`).
- Replaced the old `∑` text badge with the actual logo image (`h-6` sizing) in the sidebar header.
- Added a vertical divider and the "Interactive Tracing System" label to the right of the logo.

---

## 9. Theme: Remove Emojis & Purple → Blue

- Removed all emoji characters (`📌`, `✓`, `✗`, `⬇`) from button labels throughout the app.
- Updated the CSS theme tokens in both light and dark modes to change the accent color from indigo/purple (`#6366f1`) to a clean professional blue (`#2563eb`).
- Updated all related CSS variables: `--app-accent`, `--app-logo`, `--app-accent-soft`, `--app-accent-text`, and their dark-mode equivalents.

---

## 10. Sequence Tester Bug Fixes

### Bug: Adding a Test Case Wiped All Previous Inputs & Results
**Root Cause:** `renderTestRows()` called `container.innerHTML = ''` and rebuilt all rows from scratch on every invocation, nuking existing user inputs.

**Fix:**
- Introduced `createRowElement(id)` helper that builds a single row as a proper DOM element.
- `addTestRow()` now only *appends* the new row to the container.
- `removeTestRow(id)` now only removes that specific row's DOM element.
- `clearAllTestRows()` explicitly clears the container before adding the first blank row.

### Bug: No Validate All Cases Button
- The "Validate All Cases" button was accidentally removed. Added it back.
- Initial implementation fired all rows simultaneously. Fixed to run **sequentially** — validate row N → play full trace animation → 400ms pause → validate row N+1.

### Bug: No Clear Button for Individual Test Cases
- Added a **⟲ (Clear)** button inside each test row that resets only that row's input field and result badge, without removing the row or affecting others.

---

## 11. Dock-to-Side Layout Feature

- Added a **"Dock to Side"** button to the Sequence Tester header.
- Clicking it switches the DFA view from a stacked layout to a **side-by-side grid** (graph on left, tester panel on right).
- Added `.dfa-layout-stacked` and `.dfa-layout-docked` CSS classes to manage both modes.
- Simplified to only change the layout — all buttons and interactions remain fully functional in both modes.
- Button label toggles between "Dock to Side" and "Undock".

---

## 12. Test History Sidebar Panel

- Added a **Test History** section to the sidebar below the Active Definition card.
- Every call to `validateSingle()` automatically logs the tested string and result (`Accepted` in green / `Rejected` in red) as a card in the history list.
- A trash icon button clears the entire history.
- Shows a "No validations yet." empty state when the list is empty.

---

## 13. Sequence Tester: Modern Pill Input UI

- Redesigned each test row from a flat grid into a **pill-shaped input container**:
  - Input field and Validate button are flush inside the pill.
  - Clear (⟲) and Remove (×) buttons sit inside a divider on the right edge.
  - Result badge and state path detail appear cleanly below each pill.

---

## 14. Trace Replay Dropdown

- Added a **"Replay"** `<select>` dropdown to the trace controls bar.
- Every time a string is validated, its result and animation frames are stored in the `traceHistory` array.
- The dropdown is populated with each validated string (e.g., `aaabba [✓]`, `babab [✗]`), newest first.
- Selecting an entry instantly loads and replays that string's full trace animation on the DFA graph.
- Clearing history also resets the dropdown.

---

## 15. PDA Graph Rendering Bug Fix

### Bug: PDA Flowchart Lines Were Disconnected
**Root Cause:** Rectangular blocks (`Start`, `Push X`, `Accept`, `Reject`) stored `x` and `y` as their **top-left** corner, but the line-drawing math assumed `x` and `y` were the block's **center**. This caused all rectangular nodes to be visually offset from where lines connected.

**Fix:**
- Updated `getSideCoord()` to compute anchor points from center-based coordinates for `rect` type blocks (matching the existing behavior for `diamond` type blocks).
- Updated the `<rect>` SVG rendering to offset by `-w/2` and `-h/2` so the rectangle is drawn centered on its `x`, `y`.
- Fixed the `<text>` label position to also use the center coordinate.

### Bug: PDA Arrow Heads Were Pointing Backwards
**Fix:** Changed `orient="auto-start-reverse"` to `orient="auto"` in the `pda-arrow` SVG marker definition.

---

## 16. Background Grid

- Added a faint 40×40px CSS grid pattern to both the main dashboard (`DFA_Tester.html` via `DFA_Tester_CSS.css`) and the landing page (`index.html`).

---

## 17. Landing Page (`index.html`)

- Built a new, premium landing page from scratch.
- Features: large "ATMTA" hero text, italic serif tagline, teal "Enter Dashboard" CTA button, "View Demo" secondary link.
- Background includes the same grid pattern as the dashboard, plus a slow-moving radial gradient overlay.
- Decorative background SVG nodes and dashed lines.
- macOS-style "Simulator v1.0.4" app mockup window at the bottom, showing a correctly rendered DFA transition (`S0 → S1`) using the exact SVG styling tokens from the live app (radius=20, `#eff6ff` active fill, `#3b82f6` trace color, bold `−` start state indicator).
- Sub-description updated to accurately reflect the full scope: "Automata & Formal Languages" workspace covering DFA, CFG, and PDA.

---

## 18. Version Control

- All changes committed to a new dedicated branch: **`tims-branch`**
- Pushed to `origin/tims-branch` on GitHub.
- Old `landing-page-ui` branch deleted after rename.

---

## 19. Core Academic Features: Auto-Generator & Computation Trace

- **Auto-Generate Test Cases Panel:**
  - Added a collapsible panel in the Sequence Tester triggered by a new "Auto-Generate" button.
  - Implemented an algorithm to dynamically walk the DFA and generate valid/invalid string paths.
  - Mixes random walks and guided BFS to guarantee an equal split of accepted and rejected strings within user-defined length ranges.
  - Automatically populates the test rows, ready for batch validation.
- **Computation Breakdown Panel (δ-Table):**
  - Designed a collapsible breakdown panel that sits below the trace controls.
  - Displays the input string with dynamic character highlighting indicating the current read position.
  - Dynamically builds a step-by-step trace table (`Step # | Symbol | Current State → Next State | Status`) that updates in real-time as the graph animation plays.
  - Added a pulsing "Validating: <string>" badge to the graph header so the active string is always visible.

---

## 20. Trace Animation UX Improvements

- **Pacing & Synchronization:**
  - Slowed the animation steps (from 600ms to 900ms) to make tracing easier to follow visually.
  - Increased the gap between batch tests in "Validate All Cases" to 1200ms.
- **Active Row Highlighting:**
  - Added a bright amber glow (`.testing-active`) to the sequence tester row currently being processed, making it crystal clear which input string matches the graph animation.
