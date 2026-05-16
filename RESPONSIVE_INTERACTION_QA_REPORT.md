# Responsive + Interaction QA Report

## Classification

- visual QA
- responsive regression test
- interaction verification

## Agents Used

- Primary: QA
- Reviewers: UX/UI, Frontend Engineer, Product/Curriculum, Docs/Localization

## Scope

### Requested Pages

- `/fa`
- `/en`
- `/fa/setup`
- `/en/setup`
- `/fa/tooling`
- `/en/tooling`
- `/fa/js`
- `/en/js`
- `/fa/react`
- `/en/react`
- `/fa/effects`
- `/en/effects`
- `/fa/project`
- `/en/project`

### Requested Viewports

- `375px` mobile
- `768px` tablet
- `1024px` tablet/desktop
- `1366px` desktop

## Verification Method

- Ran required repository checks and production build validation.
- Reviewed the shared shell, language routing, and `LessonTabs` implementation directly in code.
- Used reviewer-agent pass for QA, UX/UI, frontend, product/curriculum, and docs/localization perspectives.
- Attempted live browser-based viewport verification against the local Vite server using Firefox headless and Playwright-on-demand.

## Live Verification Status

- Local app server started successfully at `http://127.0.0.1:5173/`.
- Required repo checks completed successfully.
- Full interactive browser automation was **not completed** in this environment.
- Playwright installation succeeded at the package level, but browser downloads are not supported on this Ubuntu image for Firefox/Chromium.
- Native Firefox headless screenshot attempts were unstable and did not produce reliable artifacts for inclusion.

Because of that, the findings below distinguish between:

- **confirmed from code/checks**
- **high-confidence responsive/interaction risks**
- **manual follow-up still recommended**

## Confirmed From Code And Checks

### Header / App Shell

- All requested routes render through the same shared app shell, so header behavior is consistent across `/fa/*` and `/en/*`.
- The header remains sticky and becomes more compact by breakpoint:
  - desktop: 3-column layout
  - tablet: `brand + progress` row with nav below
  - mobile: stacked `brand -> nav -> progress`
- The mini progress strip sits below the sticky topbar and also responds across breakpoints.
- Language switching preserves the current route, query string, and hash.

### Lesson Tabs

- `LessonTabs` supports direct initial loads from hash forms such as:
  - `#summary`
  - `#live`
  - `#quiz`
  - `#tips`
  - `#tab-trigger-quiz`
  - `#tab-panel-quiz`
- On mount and tab activation, the active panel is scrolled into view and focused.
- The same `LessonTabs` component is reused across the lesson pages in scope, so behavior is shared across `setup`, `tooling`, `js`, `react`, `effects`, and `project`.

### Interaction Surfaces

- Route/content checks passed for all configured modules and lesson-topic groups.
- Build passed, so the current code compiles cleanly after the header and LessonTabs changes.

## Issues Found

### 1. High-confidence responsive risk: sticky header height vs tab scroll offsets

- Severity: `P1 risk`
- Status: **not live-device confirmed in this session**

Why this is a risk:

- On smaller breakpoints, the sticky header can grow vertically because nav, language pills, stats, and badges wrap or stack.
- `LessonTabs` uses `scrollIntoView({ block: 'start' })`.
- The scroll landing area is controlled by fixed `scroll-padding-top` and `scroll-margin-block-start` values.

Why it matters:

- On narrow mobile/tablet widths, the selected lesson panel may land partially underneath the sticky header.
- This directly affects the core goal of the previous fix: clicking `Summary`, `Live practice`, `Quiz`, or `Tips` should clearly move the learner to the selected section.

Relevant files:

- [src/components/LessonTabs.jsx](/home/newuser/react/src/components/LessonTabs.jsx)
- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx)
- [src/styles.css](/home/newuser/react/src/styles.css)

### 2. High-confidence responsive risk: mobile header may still dominate the viewport

- Severity: `P1 risk`
- Status: **not live-device confirmed in this session**

Why this is a risk:

- On mobile, the header still contains:
  - brand
  - nav
  - language switcher
  - player stats
  - XP progress
  - badge preview
- At the narrowest breakpoints, some of those elements stack further instead of collapsing into a lighter mobile mode.

Why it matters:

- The topbar may still feel oversized on small screens even though the layout is more robust than before.
- This can crowd the hero area and reduce useful above-the-fold lesson space.

Relevant files:

- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx)
- [src/styles.css](/home/newuser/react/src/styles.css)

### 3. Footer CTA flow mismatch

- Severity: `P1 usability / product-flow issue`
- Status: confirmed from code

Why this happens:

- The footer “next session” CTA points to the first incomplete module globally.
- If the learner is currently on that same first incomplete module, the footer can label the action as “next session” while linking back to the current route.

Why it matters:

- The footer CTA can disagree with a lesson-level forward CTA.
- That creates confusion in the learning flow even though routing itself remains valid.

Relevant file:

- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx)

### 4. Localization metadata gap

- Severity: `P2`
- Status: confirmed from code

Why this happens:

- `index.html` starts with Persian metadata and direction defaults.
- Runtime language switching updates `<html lang dir>`, but global title/description handling is incomplete across routes.

Why it matters:

- English routes can start with Persian tab metadata on hard load or keep stale metadata across navigation.
- This does not break routing, but it is a polish/localization issue worth tracking.

Relevant files:

- [index.html](/home/newuser/react/index.html)
- [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx)

### 5. Hash behavior is partial by design

- Severity: `P2`
- Status: confirmed from code

What works:

- Direct loading with a recognized hash opens the matching tab on first render.

What does not happen:

- Clicking tabs does not write the active tab back to `location.hash`.
- Later hash changes are not observed by the component.

Why it matters:

- Deep links work for initial entry.
- Ongoing back/forward/share expectations remain limited.

Relevant file:

- [src/components/LessonTabs.jsx](/home/newuser/react/src/components/LessonTabs.jsx)

## Requested Interaction Checklist Coverage

### Covered By Code Review

- language switching preserves equivalent route
- hash-preserving locale switch behavior
- lesson tab direct-load behavior
- shared tab behavior across lesson pages
- footer CTA target logic
- shared sticky-header breakpoints

### Not Fully Live-Verified In This Session

- click-by-click tab motion at every requested route/viewport
- focus visibility during keyboard traversal
- browser back/forward feel during hashed navigation
- quiz block interaction in a real browser
- tooling topic picker interaction in a real browser
- react topic picker interaction in a real browser
- effects topic picker, clock, debounce, and note persistence in a real browser
- reset progress interaction in a real browser
- console-error sweep from live navigation

## Checks Run

- `npm run format:check` ✅
- `npm run check:routes` ✅
- `npm run check:content` ✅
- `npm run check` ✅
- `npm run check:all` ✅

## Fixes Applied

- No application code changes were made in this QA pass.
- Added this report file only.

Reason:

- The task requested QA-only work unless a `P0` or `P1` bug was found.
- I found multiple high-confidence risks and one product-flow issue from code review, but I did not have reliable live-device/browser confirmation in this environment to justify changing app behavior inside a QA-only pass without first surfacing the findings clearly.

## Screenshots / Manual Notes

- No stable screenshots were captured.
- Local browser automation attempts were blocked by environment support limitations.
- Manual visual notes are therefore not attached.

## Remaining Risks

- Small-screen sticky-header overlap with tab auto-scroll remains the main unresolved risk.
- The mobile header may still feel too tall in Persian or other high-wrap states.
- Footer CTA wording/target logic can still confuse learners about what “next session” means.
- English document metadata may remain stale or initially Persian on direct load.
- A true device/browser sweep is still needed for the requested matrix of:
  - 14 routes
  - 4 viewport widths
  - both RTL and LTR
  - tab, picker, quiz, and persistence interactions

## Next Recommended Step

1. Run a real browser QA sweep on the requested routes and viewport sizes, prioritizing:
   - `/fa/react`
   - `/en/react`
   - `/fa/effects`
   - `/en/effects`
   - `/fa`
   - `/en`
2. If the sticky-header/tab-overlap risk reproduces on mobile or tablet, treat it as the first fix.
3. Follow with a small product-flow fix for the footer “next session” CTA so it never points to the current lesson as “next”.
