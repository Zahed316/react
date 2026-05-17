# Routing Page Plan

## Summary

Create a new Routing lesson after `EffectsPage`. The lesson should explain how a
React app changes views without a full page reload, how this project uses
locale-aware routes, and how links, active navigation, redirects, and not-found
handling fit into the course platform.

This is a docs-only plan. It must not add routes, components, tests, storage keys,
progress behavior, or implementation code yet.

## Proposed Module And Route

- Proposed module id: `routing`
- Proposed route: `/routing`
- Locale-aware routes: `/fa/routing` and `/en/routing`
- Proposed near-term sequence: `/react` -> `/events-forms` -> `/effects` ->
  `/routing` -> `/project`
- Longer roadmap sequence: `/routing` -> `context/shared state` ->
  `project architecture` -> `/project`
- Future implementation should update `src/App.jsx`, `src/data/courseManifest.js`,
  localized course content, navigation labels, lesson CTAs, and focused route QA.

## Lesson Purpose

Teach the mental model of client-side routing. The browser URL describes the
current location, React Router matches that location to a page component, and app
links change the route without requesting a brand-new document from the server.

## Prerequisites

- React components, props, state, and render/update flow.
- Events and controlled form state.
- Effects and browser synchronization basics.
- Awareness that this app has Persian and English route prefixes.
- No required knowledge of Context, project architecture, data loading, SSR, or
  backend routing.

## Learning Outcomes

Learners should be able to:

- Explain why client-side navigation avoids full reloads.
- Distinguish route paths from page components.
- Read a simple `Routes` / `Route` tree.
- Use `Link` or `NavLink` for internal navigation.
- Explain why this app nests lesson routes under a locale segment.
- Describe how an unsupported locale can redirect safely.
- Explain why a not-found route is needed.
- Recognize the idea of static routes and simple dynamic route segments.
- Connect routing to later Context and project architecture lessons.

## Content Structure

Use the standard lesson tabs:

- `summary`: why routing exists and where it fits in the course.
- `live`: a page-owned route explorer/simulator.
- `quiz`: route matching, links, locale-aware paths, redirects, and not-found
  handling.
- `tips`: common mistakes, practice prompts, and an app architecture bridge.

Deep lesson topic sequence:

- Client-side routing mental model.
- Routes and page components.
- Links and active navigation.
- Locale-aware nested routes.
- Redirects and not-found routes.

## LessonTemplate Usage

Use the existing reusable lesson stack:

- `LessonTemplate` for hero, tabs, completion CTA, and next-lesson CTA.
- `SummaryPanel` for overview, prerequisites, goals, and key points.
- `DeepDivePanel` for topic selection and topic details.
- `LiveLabFrame` for the page-owned route explorer.
- `QuizPanel` for quiz behavior.
- `TipsPanel` for mistakes and practice.
- `LessonSection` only for page-owned detail rendering when needed.

Do not introduce a new shared routing component in v1. Route explorer state and
matching rules must stay page-owned.

## SummaryPanel Plan

Include:

- Intro: routing lets one React app show different pages for different URLs.
- Prerequisites: React state, events, effects, and locale-aware path awareness.
- Learning goals: route matching, links, active navigation, locale nesting,
  redirects, and not-found handling.
- Key points:
  - URL paths can select UI.
  - `Route` maps a path to a component.
  - `Link` changes app location without a full reload.
  - `/fa/...` and `/en/...` should stay structurally aligned.
  - Fallback routes prevent dead ends.

## DeepDivePanel Topic Plan

Proposed topic ids:

- `client-routing`
- `routes-pages`
- `links-navigation`
- `localized-routes`
- `fallback-routes`

Topic coverage:

- Client-side routing: URL changes, history, route matching, and no full reload.
- Routes and pages: `Routes`, `Route`, path segments, and page components.
- Links and navigation: `Link`, `NavLink`, active state, and accessible navigation.
- Localized routes: `:locale`, `/fa`, `/en`, route guards, and bilingual parity.
- Fallback routes: redirects, unsupported locales, not-found pages, and recovery.

Code snippets, JSX prop names, route paths, and identifiers must render LTR with
`translate="no"` where implemented.

## LiveLabFrame Lab Plan

Recommended lab: `Route Explorer`.

Required behavior:

- Show sample paths such as `/fa/react`, `/fa/effects`, `/en/project`, and
  `/fa/unknown`.
- Let the learner choose a path from buttons, a select, or a controlled input.
- Derive the matched route label from the selected path.
- Show whether the path is valid, unsupported, or not found.
- Show locale and page segments separately.
- Show a small active-link preview.
- Include an unsupported-locale example such as `/de/react` -> `/fa`.
- Keep all lab state local to the Routing page.

Forbidden behavior:

- No real router refactor inside the lab.
- No persistence.
- No new storage key.
- No XP awards from selecting paths.
- No backend or data loading.
- No advanced routing APIs in v1.

## QuizPanel Plan

Include 4-6 questions covering:

- Why client-side navigation avoids full reloads.
- What a `Route` connects together.
- When to use `Link` or `NavLink`.
- Why this app nests pages under `:locale`.
- What should happen for unsupported locales.
- Why a not-found route improves recovery.

Quiz ids, options, answers, and explanations should stay aligned across Persian
and English.

## TipsPanel Plan

Common mistakes:

- Treating every URL change as a server reload.
- Confusing a path string with a page component.
- Using raw anchors for internal navigation when router links are needed.
- Adding a route but forgetting manifest, navigation label, or CTA flow.
- Forgetting not-found handling.

Practice prompts:

- Trace which component renders for `/fa/effects`.
- Add a fake path to the route explorer and predict the result.
- Explain why `/de/react` should recover safely.
- Compare a router link with a full page reload.

## Page-Owned Behavior Boundaries

Must stay page-owned:

- Selected deep-dive topic state.
- Selected route example state.
- Derived route-match result.
- Active-link preview logic.
- Unsupported-locale and not-found simulation logic.
- Completion CTA wiring for only the `routing` module.
- Localized next-lesson CTA behavior.

Must not move into shared components:

- Route explorer matching rules.
- Lab-specific path examples.
- Redirect simulation rules.
- Not-found simulation rules.
- Progress or storage behavior.

## Storage Policy

- Do not persist route explorer state.
- Do not add a storage key.
- Do not add localStorage migration behavior.
- Do not change existing progress, quiz, effects note, form lesson, or Task
  Manager storage keys.

## Completion/XP Behavior

- Completion CTA should mark only the `routing` module complete.
- Use the existing module-completion XP convention.
- Route explorer interactions must not award XP.
- Quiz behavior should follow existing `QuizPanel` behavior.
- Do not change the progress schema, XP rules, badge rules, or Task Manager XP.

## Relationship To Existing App Routes

This lesson should teach the structure learners already use:

- `/` redirects to `/fa`.
- `/:locale` is guarded by supported locales.
- Lesson pages live under the locale segment.
- `/fa/events-forms` and `/en/events-forms` show the same lesson in two locales.
- Unknown paths inside a supported locale render the not-found page.
- Navigation items come from the module manifest and localized labels.

The lesson can use simplified examples, but it should help learners read the real
`src/App.jsx` route tree later.

## Relationship To Task Manager And Project Architecture

Routing should not change Task Manager behavior. It prepares learners to
understand where the project page lives in the application and why page, feature,
component, hook, and data boundaries matter.

It should prepare learners to:

- Understand `/project` as one route in a broader app.
- See how a capstone is reachable through navigation and CTAs.
- Understand why architecture needs route boundaries.
- Prepare for Context, where language and progress span many routes.

It must not duplicate or refactor `TaskManagerLab`.

## Accessibility And RTL/LTR Requirements

- Persian-first content with English structural parity.
- Same lesson ids, topic ids, quiz ids, and tab ids across locales.
- Logical layout and spacing for RTL and LTR.
- Route paths, JSX props, component names, and identifiers render LTR.
- Interactive route examples are keyboard reachable.
- Link-like controls have clear accessible names.
- Active route state must not rely on color alone.
- Not-found and redirect examples use text labels.
- Mobile, tablet, and desktop layouts avoid horizontal overflow.
- Keep the design calm, scan-friendly, and free of noisy animation.

## Implementation Phases

1. Create this docs-only plan.
2. Later: add localized module content and stable content ids.
3. Later: add manifest entry, navigation labels, route, and page component using
   `LessonTemplate`.
4. Later: update `EffectsPage` CTA to `/routing` and Routing CTA to the next
   planned module or `/project`, depending on implementation order.
5. Later: add the page-owned route explorer lab.
6. Later: add focused tests and responsive RTL/LTR QA for `/fa/routing` and
   `/en/routing`.
7. Later: update roadmap docs after the implemented page is stable.

## Acceptance Criteria

- `docs/architecture/ROUTING_PAGE_PLAN.md` exists and is the only file changed for
  this task.
- The document includes purpose, prerequisites, outcomes, route, curriculum
  position, panels, lab, quiz, tips, RTL/LTR, accessibility, page-owned behavior,
  storage, XP, app-route relationship, project relationship, phases, acceptance
  criteria, and validation.
- The lesson follows `EffectsPage` and prepares learners for Context and project
  architecture.
- The lesson teaches client-side routing, routes vs pages, links, locale-aware
  nested routes, redirects, active navigation, and not-found handling.
- The lab stays simpler than the real app router and has no persistence.
- No source code, route, component, test, storage key, progress behavior, or
  existing page is changed.

## Validation Command

Run:

```bash
npm run format:check
```

If validation passes, commit and push to `origin/main` with:

```bash
git commit -m "add routing lesson plan"
git push origin main
```

If validation fails, do not commit or push. Fix only safe docs/formatting issues
once, rerun `npm run format:check` once, and stop to report blockers if it still
fails.
