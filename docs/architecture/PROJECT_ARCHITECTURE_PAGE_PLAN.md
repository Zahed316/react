# Project Architecture Page Plan

## Summary

Create a new Project Architecture lesson after `ContextSharedStatePage` and before
the Task Manager capstone. The lesson should teach the current app structure,
ownership boundaries, and how pages, shared components, features, hooks, contexts,
data, and localized content work together.

This is a docs-only plan. It must not add routes, components, tests, storage keys,
folder moves, progress behavior, or implementation code yet.

## Proposed Module And Route

- Proposed module id: `project-architecture`
- Proposed route: `/project-architecture`
- Locale-aware routes: `/fa/project-architecture` and `/en/project-architecture`
- Proposed sequence: `/context-state` -> `/project-architecture` -> `/project`
- Future implementation should update `src/App.jsx`, `src/data/courseManifest.js`,
  localized course content, navigation labels, lesson CTAs, and focused RTL/LTR QA.

## Lesson Purpose

Teach learners that architecture is about ownership and boundaries, not only
folder names. The lesson should prepare learners to read the real app before they
work with the Task Manager capstone.

Core mental model: pages compose route-level experiences, features own domain
behavior, reusable components stay generic, contexts own app-wide state, hooks
hide repeated access patterns, and data/content modules keep structure and copy
explicit.

## Prerequisites

- React components, props, state, and render/update flow.
- Events, forms, effects, routing, and Context/shared state.
- Familiarity with the Task Manager capstone preview.
- No required knowledge of backend architecture, deployment, external state
  libraries, or server rendering.

## Learning Outcomes

Learners should be able to:

- Explain pages, components, features, hooks, contexts, data, and i18n content.
- Read `src/App.jsx` as the route boundary map.
- Explain why pages compose but should not become generic mega-components.
- Explain why `TaskManagerLab` owns capstone behavior.
- Identify page-owned, feature-owned, reusable, and app-wide behavior.
- Explain what `courseManifest` controls.
- Explain why localized content stays outside page components.
- Avoid moving domain rules into reusable lesson components.

## Content Structure

Use the standard lesson tabs:

- `summary`: app architecture, ownership, and current file structure.
- `live`: a read-only architecture map explorer.
- `quiz`: ownership boundaries, file roles, reusable components, features, hooks,
  contexts, manifest, and i18n content.
- `tips`: common mistakes, practice prompts, and the capstone bridge.

Deep lesson topic sequence:

- App map and route boundaries.
- Pages vs reusable components.
- Features and feature-owned state.
- Hooks and contexts.
- Data, manifest, and localized content.
- Reuse boundaries and mega-component risks.

## LessonTemplate Usage

Use the existing reusable lesson stack:

- `LessonTemplate` for hero, tabs, completion CTA, and next-lesson CTA.
- `SummaryPanel` for overview, prerequisites, goals, and key points.
- `DeepDivePanel` for topic selection and details.
- `LiveLabFrame` for the page-owned architecture explorer.
- `QuizPanel` for quiz behavior.
- `TipsPanel` for mistakes and practice.
- `LessonSection` only for page-owned detail rendering when needed.

The explorer should stay page-owned in v1. Do not introduce a new shared app-map
component unless future lessons prove a real reuse need.

## SummaryPanel Plan

Include:

- Intro: architecture is ownership and boundaries.
- Prerequisites: routing, context, hooks, forms, effects, and Task Manager preview.
- Learning goals: app map, page/component/feature separation, hooks, contexts,
  manifest, i18n, route boundaries, and reuse decisions.
- Key points:
  - Pages compose route-level lessons.
  - Shared components stay generic and behavior-light.
  - Features own domain behavior.
  - Contexts own app-wide state.
  - Hooks hide repeated access patterns.
  - Data and i18n modules keep structure and copy explicit.

## DeepDivePanel Topic Plan

Proposed topic ids:

- `app-map-routes`
- `pages-components`
- `features-state`
- `hooks-contexts`
- `data-i18n-manifest`
- `reuse-boundaries`

Topic coverage:

- App map and route boundaries: `App.jsx`, locale guard, app shell, pages, and
  not-found recovery.
- Pages vs reusable components: page composition, `LessonTemplate`, panels, and
  thin shared surfaces.
- Features and feature-owned state: `features/taskManager`, CRUD, filters, search,
  persistence, and task-specific XP behavior.
- Hooks and contexts: `useCourseContent`, `useLanguage`, `useLearningProgress`,
  provider boundaries, and safe APIs.
- Data and i18n: `courseManifest`, navigation, XP, next flow, Persian/English
  content, labels, examples, and quizzes.
- Reuse boundaries: what can be shared, what must stay page-owned, and how to
  avoid mega-components.

File paths, component names, hook names, storage keys, JSX props, and identifiers
must render LTR with `translate="no"` where implemented.

## LiveLabFrame Lab Plan

Recommended lab: `Architecture Map Explorer`.

Required behavior:

- Show a read-only map of major layers:
  - `src/App.jsx`
  - `src/pages/*`
  - `src/components/*`
  - `src/features/taskManager/*`
  - `src/context/*`
  - `src/hooks/*`
  - `src/data/courseManifest.js`
  - `src/i18n/course/*`
- Let the learner select a layer.
- Show responsibility, owns, does-not-own, and example files for the selected
  layer.
- Show decisions such as `page-owned`, `feature-owned`, `safe to reuse`, and
  `app-wide context`.
- Show where `TaskManagerLab` fits and why it should not move into
  `LessonTemplate`.
- Keep all explorer state local to the Project Architecture page.

Forbidden behavior:

- No folder reorganization.
- No Task Manager refactor.
- No context refactor.
- No reusable lesson component refactor.
- No persistence and no new storage key.
- No XP awards from explorer interactions.
- No product-scope expansion.

## QuizPanel Plan

Include 4-6 questions covering:

- Which layer owns route definitions.
- Difference between a page and a reusable component.
- Why Task Manager CRUD belongs in the feature layer.
- What `courseManifest` controls.
- Why localized content belongs outside page components.
- When behavior should remain page-owned.
- Why mega-components are risky.

Quiz ids, options, answers, and explanations should stay aligned across Persian
and English.

## TipsPanel Plan

Common mistakes:

- Moving feature behavior into shared lesson components.
- Making `LessonTemplate` own page-specific or feature-specific state.
- Treating folders as architecture without defining ownership.
- Refactoring working feature state only to make a diagram look cleaner.
- Forgetting route, manifest, CTA, and localized content updates must stay aligned.
- Treating the Task Manager capstone as generic lesson chrome.

Practice prompts:

- Decide whether a behavior is page-owned, feature-owned, reusable, or app-wide.
- Trace the path from navigation item to route, page, content, quiz, and next CTA.
- Explain why `TaskManagerLab` is a feature and not a shared component.
- Name one behavior that should never move into `LessonTemplate`.

## Page-Owned Behavior Boundaries

Must stay page-owned:

- Selected deep-dive topic state.
- Selected architecture layer state.
- Explorer-only selected decision example.
- Derived responsibility and ownership preview.
- Completion CTA wiring for only the `project-architecture` module.
- Localized next-lesson CTA behavior.

Must not move into shared components:

- Architecture explorer layer definitions.
- Ownership decision examples.
- Task Manager CRUD or persistence behavior.
- Context provider behavior.
- Course manifest mutation behavior.
- Storage keys or storage migration behavior.

## Storage Policy

- Do not persist architecture explorer state.
- Do not add a new storage key.
- Do not add localStorage migration behavior.
- Do not change existing language, progress, quiz, effects note, forms, routing,
  context, or Task Manager storage behavior.

## Completion/XP Behavior

- Completion CTA should mark only the `project-architecture` module complete.
- Use the existing module-completion XP convention.
- Explorer interactions must not award XP.
- Quiz behavior should follow existing `QuizPanel` behavior.
- Do not change progress schema, XP rules, badges, language behavior, or Task
  Manager XP behavior.

## Relationship To Existing App Structure

Use the real app as a reference without reorganizing it:

- `src/App.jsx` owns route boundaries.
- `src/pages/*` owns route-level lesson composition and page-specific state.
- `src/components/*` owns reusable lesson surfaces.
- `src/features/taskManager/*` owns capstone domain behavior.
- `src/context/*` owns app-wide language and progress state.
- `src/hooks/*` owns reusable access helpers.
- `src/data/courseManifest.js` owns module order, paths, XP, and next flow.
- `src/i18n/course/*` owns localized lesson copy, examples, quiz data, and labels.

The lesson should explain why this structure fits this product now, not claim it
is the only valid React structure.

## Relationship To Task Manager Capstone

Task Manager should be presented as a feature, not as generic lesson shell.

The lesson should explain:

- `ProjectPage` composes the capstone into the lesson shell.
- `TaskManagerLab` owns CRUD, filters, search, form state, persistence, and
  task-specific XP actions.
- Task Manager storage and legacy fallback behavior remain feature-owned.
- The capstone proves earlier lessons together: forms, effects, localStorage,
  routing, context-aware progress, and responsive UI.
- Generic lesson components should not absorb Task Manager domain rules.

It must not duplicate or refactor `TaskManagerLab`.

## Relationship To Context + Shared State

This lesson should connect:

- `LanguageContext` to locale-aware links, direction, and localized content.
- `LearningProgressContext` to completion CTA, XP, badges, and solved quizzes.
- Page-owned lab state to isolated lesson interactions.
- Feature-owned state to the Task Manager capstone.
- Manifest and i18n modules to the content/navigation layer.

It must not refactor either context or introduce new provider layers.

## Accessibility And RTL/LTR Requirements

- Persian-first content with English structural parity.
- Same lesson ids, topic ids, quiz ids, and tab ids across locales.
- Logical layout and spacing for RTL and LTR.
- File paths, component names, hook names, storage keys, JSX props, and identifiers
  render LTR.
- Architecture map controls are keyboard reachable.
- Layer selection exposes text labels and does not rely on color alone.
- Ownership diagrams use text labels and accessible descriptions.
- Mobile, tablet, and desktop layouts avoid horizontal overflow.
- Keep the design calm, scan-friendly, and free of noisy animation.

## Implementation Phases

1. Create this docs-only plan.
2. Later: add localized module content and stable content ids.
3. Later: add manifest entry, navigation labels, route, and page component using
   `LessonTemplate`.
4. Later: update `ContextSharedStatePage` CTA to `/project-architecture` and
   Project Architecture next CTA to `/project`.
5. Later: add the page-owned read-only architecture map explorer.
6. Later: add focused tests and responsive RTL/LTR QA for
   `/fa/project-architecture` and `/en/project-architecture`.
7. Later: update roadmap docs after the implemented page is stable.

## Acceptance Criteria

- `docs/architecture/PROJECT_ARCHITECTURE_PAGE_PLAN.md` exists and is the only
  file changed for this task.
- The document includes purpose, prerequisites, outcomes, route, curriculum
  position, panels, lab, quiz, tips, RTL/LTR, accessibility, page-owned behavior,
  storage, XP, existing app structure, Task Manager relationship, Context
  relationship, phases, acceptance criteria, and validation.
- The lesson follows `ContextSharedStatePage` and bridges into the Task Manager
  capstone.
- The lesson teaches app structure, pages/components/features/hooks/context/data,
  route boundaries, reusable components, Task Manager ownership, and
  mega-component risks.
- The lab is read-only, educational, page-owned, and has no persistence.
- No source code, route, component, test, storage key, progress behavior, existing
  page, folder structure, Task Manager behavior, context implementation, or
  reusable component implementation is changed.

## Validation Command

Run:

```bash
npm run format:check
```

If validation passes, commit and push to `origin/main` with:

```bash
git commit -m "add project architecture lesson plan"
git push origin main
```

If validation fails, do not commit or push. Fix only safe docs/formatting issues
once, rerun `npm run format:check` once, and stop to report blockers if it still
fails.
