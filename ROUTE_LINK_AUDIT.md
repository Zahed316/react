# Route And Link Audit

## Scope

- Audit type: route, navigation, CTA, and internal-link review
- Status: audit only; no code or content changes proposed here are implemented

## 1. Valid Routes

User-facing locale-aware routes currently defined in [src/App.jsx](/home/newuser/react/src/App.jsx):

- `/fa`
- `/fa/setup`
- `/fa/tooling`
- `/fa/js`
- `/fa/react`
- `/fa/effects`
- `/fa/project`
- `/en`
- `/en/setup`
- `/en/tooling`
- `/en/js`
- `/en/react`
- `/en/effects`
- `/en/project`

Additional valid route aliases and fallbacks:

- `/` -> redirects to `/fa`
- `/:locale/start` -> redirects to `/:locale/setup`
- unknown `:locale` -> redirects to `/fa`
- unknown path under a valid locale -> renders the locale-aware 404 page
- unknown top-level path -> redirects to `/fa`

## 2. Internal Link Sources

Primary internal link sources:

- [src/App.jsx](/home/newuser/react/src/App.jsx)
  - route definitions and redirects
- [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js)
  - module paths, navigation items, quest module IDs
- [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx)
  - `localizedPath()` and language-switch route rewriting
- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx)
  - top navigation and brand link
- [src/components/PsychCoachPanel.jsx](/home/newuser/react/src/components/PsychCoachPanel.jsx)
  - coach CTA target path
- [src/components/LessonPageShell.jsx](/home/newuser/react/src/components/LessonPageShell.jsx)
  - lesson secondary CTA button
- [src/pages/HomePage.jsx](/home/newuser/react/src/pages/HomePage.jsx)
  - hero CTA, quest links, module cards, in-page `#quests` anchor
- [src/pages/NotFoundPage.jsx](/home/newuser/react/src/pages/NotFoundPage.jsx)
  - back-home recovery CTA
- lesson pages with `secondaryActionTo`
  - [src/pages/SetupPage.jsx](/home/newuser/react/src/pages/SetupPage.jsx)
  - [src/pages/ToolingPage.jsx](/home/newuser/react/src/pages/ToolingPage.jsx)
  - [src/pages/JsWarmupPage.jsx](/home/newuser/react/src/pages/JsWarmupPage.jsx)
  - [src/pages/ReactBasicsPage.jsx](/home/newuser/react/src/pages/ReactBasicsPage.jsx)
  - [src/pages/EffectsPage.jsx](/home/newuser/react/src/pages/EffectsPage.jsx)

Non-route but route-adjacent references:

- [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js) `taskCategoryIds`
- [src/features/taskManager/TaskManagerLab.jsx](/home/newuser/react/src/features/taskManager/TaskManagerLab.jsx) category aliases
- [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js) and [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js) `routingNotes`

## 3. Broken Links Found

**Broken user-facing internal links found:** `0`

I did not find any current in-app CTA, `Link`, `NavLink`, `Navigate`, or `localizedPath()` usage that resolves to a missing route during normal app flow.

Confirmed working target families by inspection:

- top navigation -> real module routes
- lesson secondary CTAs -> real next lesson routes
- home hero CTA -> next incomplete module or home
- home quest links -> real module routes
- coach CTA -> home or a real module path
- 404 recovery CTA -> locale-aware home

## 4. Suspicious Links Found

### P1: Route-like `routing` category without a real route

Files:

- [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js)
- [src/features/taskManager/TaskManagerLab.jsx](/home/newuser/react/src/features/taskManager/TaskManagerLab.jsx)

Details:

- `taskCategoryIds` includes `routing`
- the task manager also supports a `routing` category
- there is no `/routing` route and no `routing` module in the manifest

Why it matters:

- Nothing is broken today because this category is not used as a router target.
- It is still a trap for future agents, because `routing` looks like a route/module concept even though it currently exists only as a task category and lesson topic reference.

### P1: Routing is taught conceptually before it exists as a route/module

Files:

- [src/pages/EffectsPage.jsx](/home/newuser/react/src/pages/EffectsPage.jsx)
- [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js)
- [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js)

Details:

- `effects` includes `routingNotes`
- the content dependency and learning architecture docs already identify routing as a missing bridge concept

Why it matters:

- This is not a dead link.
- It is still navigation-adjacent curriculum ambiguity, because learners can encounter “routing” as a concept before there is any dedicated route/module for it.

### P2: Footer “Next session” is informational, not navigational

File:

- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx)

Details:

- the footer shows `Next session`
- it displays the current active module title, not a next-route CTA

Why it matters:

- No broken path exists.
- The label can still create mild expectation mismatch because it sounds actionable even though it is only summary text.

## 5. Missing Route / Module Mismatches

### Confirmed aligned

- `moduleManifest` IDs and paths match real routes in [src/App.jsx](/home/newuser/react/src/App.jsx)
- `navigationItems` are consistent with `moduleManifest`
- lesson secondary CTA targets all point to valid modules:
  - `setup` -> `/tooling`
  - `tooling` -> `/js`
  - `js` -> `/react`
  - `react` -> `/effects`
  - `effects` -> `/project`

### Confirmed mismatches

- `routing` exists as a task category but not as a module or route
- `context`, `forms`, `controlled components`, and `progress` are curriculum concepts but not routes/modules yet

Important note:

- These concept-only items are not currently linked as routes, so they are not broken links.
- They are still important to flag so future work does not accidentally route users to paths that do not exist.

## 6. Locale-Aware Routing Risks

### Low current risk

- `localizedPath()` strips and reapplies locale correctly in [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx)
- all current in-app route buttons use locale-aware targets
- coach and quest fallbacks guard against missing module paths by falling back to `/`

### Risks to watch

- if a future module reference is added incorrectly, safe fallbacks may silently send users to home instead of exposing the mismatch immediately
- hidden fallback behavior in:
  - [src/pages/HomePage.jsx](/home/newuser/react/src/pages/HomePage.jsx)
  - [src/components/PsychCoachPanel.jsx](/home/newuser/react/src/components/PsychCoachPanel.jsx)
- future contributors could mistake `routing` for a real route because of task-category naming

### English/Persian parity

- No evidence of a link that works in English but not Persian
- locale switching preserves the current path structure via `changeLanguage()`

## 7. Recommended Fixes

### P1

- Clarify in code comments or planning docs that `routing` is currently a task category, not a route/module
- When the future routing lesson is introduced, add it deliberately through both:
  - [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js)
  - [src/App.jsx](/home/newuser/react/src/App.jsx)
- Consider renaming the footer label or making it a real next-step CTA later, so “Next session” matches behavior better

### P2

- Add a lightweight route-audit checklist item for any future module additions:
  - route exists
  - manifest path exists
  - nav item exists
  - locale-aware links exist
  - coach/quest targets stay valid
- Keep concept-only terms like `routing`, `context`, and `forms` clearly separated from route/module IDs until they become real routes

## 8. Fix Priority

- **P0: broken user path**
  - none found in the current app flow
- **P1: confusing but not blocking**
  - `routing` looks route-like but is only a category
  - “Next session” footer wording implies navigation more than it delivers
  - routing is referenced educationally before it has a dedicated route/module
- **P2: cleanup/documentation**
  - strengthen route/module audit guidance for future lesson additions

## External Link Note

One external resource reference exists in app code:

- [src/styles.css](/home/newuser/react/src/styles.css)
  - Google Fonts `@import`

This is not an internal navigation bug, but it is the only external URL found during this audit.
