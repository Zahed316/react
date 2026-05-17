# Context + Shared State Page Plan

## Summary

Create a new Context + Shared State lesson after `RoutingPage`. The lesson should
teach why shared state exists, how Context solves specific prop-drilling problems,
and how this app already uses context for language and learning progress.

This is a docs-only plan. It must not add routes, components, tests, storage keys,
progress behavior, or implementation code yet.

## Proposed Module And Route

- Proposed module id: `context-state`
- Proposed route: `/context-state`
- Locale-aware routes: `/fa/context-state` and `/en/context-state`
- Proposed near-term sequence: `/routing` -> `/context-state` -> `/project`
- Longer roadmap sequence: `/routing` -> `/context-state` ->
  `project architecture` -> `/project`
- Future implementation should update `src/App.jsx`, `src/data/courseManifest.js`,
  localized course content, navigation labels, lesson CTAs, and focused RTL/LTR QA.

## Lesson Purpose

Teach learners how state can move from one component to many components without
turning every intermediate component into a pass-through prop carrier.

The core mental model: local state belongs near the UI that owns it, lifted state
belongs at the nearest shared parent, and Context belongs to values that many
parts of the app need across a provider boundary.

## Prerequisites

- React components, props, state, and render/update flow.
- Events and controlled forms.
- Effects and local browser synchronization.
- Routing and the idea that many pages share one app shell.
- No required knowledge of external state libraries, server state, reducers,
  backend sync, or analytics.

## Learning Outcomes

Learners should be able to:

- Explain the prop-drilling problem.
- Compare local state, lifted state, and context state.
- Describe what a Context provider does.
- Describe what a Context consumer or custom hook reads.
- Explain why custom hooks around context improve safety and ergonomics.
- Identify language and progress as app-wide state in this project.
- Explain why Context is not a replacement for every state variable.
- Recognize when shared state should remain local or lifted instead.
- Understand provider boundaries and why values outside the provider cannot read
  the context safely.
- Prepare for a project architecture lesson about features, hooks, and app-level
  providers.

## Content Structure

Use the standard lesson tabs:

- `summary`: why shared state exists and where Context fits.
- `live`: a page-owned shared-state simulator.
- `quiz`: local vs lifted vs context state, providers, hooks, and provider
  boundaries.
- `tips`: common mistakes, practice prompts, and an architecture bridge.

Deep lesson topic sequence:

- Prop drilling problem.
- Local state vs lifted state vs Context.
- Provider and consumer mental model.
- Custom hooks around context.
- Existing language and progress contexts.
- When not to use Context.

## LessonTemplate Usage

Use the existing reusable lesson stack:

- `LessonTemplate` for hero, tabs, completion CTA, and next-lesson CTA.
- `SummaryPanel` for overview, prerequisites, goals, and key points.
- `DeepDivePanel` for topic selection and topic details.
- `LiveLabFrame` for the page-owned shared-state simulator.
- `QuizPanel` for quiz behavior.
- `TipsPanel` for mistakes and practice.
- `LessonSection` only for page-owned detail rendering when needed.

Do not introduce new shared state helpers in v1. The lesson should teach context
without refactoring real app contexts.

## SummaryPanel Plan

Include:

- Intro: some state is local, some belongs to a nearby parent, and some belongs to
  an app-wide provider.
- Prerequisites: props, state, forms, effects, routing, and app shell awareness.
- Learning goals: prop drilling, provider boundaries, custom hooks, language
  state, progress state, and when not to use Context.
- Key points:
  - Context solves a specific sharing problem, not every state problem.
  - Local state is still the default for isolated UI.
  - Lift state when only nearby siblings need it.
  - Use Context when many distant components need the same value.
  - Custom hooks can enforce provider usage and hide raw context details.
  - Persistent progress is still a page-independent app concern, not a live lab
    concern.

## DeepDivePanel Topic Plan

Proposed topic ids:

- `prop-drilling`
- `state-placement`
- `provider-consumer`
- `custom-context-hooks`
- `language-progress-contexts`
- `context-tradeoffs`

Topic coverage:

- Prop drilling: passing props through layers that do not use them.
- State placement: local state, lifted state, and context state.
- Provider and consumer: a provider supplies values to a subtree, consumers read
  them inside that subtree.
- Custom context hooks: safer access, clearer API, and useful provider errors.
- Language and progress contexts: `LanguageContext` controls locale, direction,
  localized paths, and i18n; `LearningProgressContext` controls completion, XP,
  quiz state, badges, and reset.
- Tradeoffs: Context can cause broad rerenders and should not own every keystroke
  or page-specific live lab detail.

Code snippets, hook names, context names, storage keys, and identifier-like tokens
must render LTR with `translate="no"` where implemented.

## LiveLabFrame Lab Plan

Recommended lab: `Shared State Simulator`.

Required behavior:

- Show three modes: local state, lifted state, and context-like shared state.
- Let the learner change a small value such as theme, language label, or progress
  badge in a local simulator.
- Show two sibling preview panels that either stay independent or read the same
  shared value depending on selected mode.
- Show a provider boundary preview that labels which components are inside or
  outside the shared value area.
- Show an explanation for why each mode fits or does not fit the current example.
- Keep all simulator state local to the Context lesson page.

Forbidden behavior:

- No refactor of `LanguageContext.jsx`.
- No refactor of `LearningProgressContext.jsx`.
- No changes to real app language behavior.
- No changes to real progress, XP, badges, or quiz behavior.
- No localStorage persistence for the lab.
- No new storage key.
- No XP awards from simulator interactions.
- No external state library, backend sync, analytics, or AI tutor scope.

## QuizPanel Plan

Include 4-6 questions covering:

- What prop drilling means.
- When local state is enough.
- When lifted state is better than Context.
- What a provider does.
- Why custom hooks around Context are useful.
- Why Context should not hold every piece of UI state.
- Which existing project values are app-wide shared state.

Quiz ids, options, answers, and explanations should stay aligned across Persian
and English.

## TipsPanel Plan

Common mistakes:

- Moving state into Context just because it is inconvenient to pass one prop.
- Putting every form keystroke or live lab detail into app-wide Context.
- Forgetting that components must be inside a provider to read its value.
- Exposing raw context everywhere instead of a small custom hook API.
- Mixing persistent progress behavior with temporary page-owned lab state.
- Treating Context as a backend, cache, analytics layer, or state library for
  every problem.

Practice prompts:

- Decide whether a field draft should be local, lifted, or context state.
- Trace how `language` reaches a navigation link.
- Trace how `markModuleComplete` can be used by a lesson page.
- Draw a provider boundary around the components that need a shared value.

Project bridge:

- Project architecture will later explain where providers, hooks, features,
  components, and data modules should live.
- Context helps explain why language and progress can span many routes.
- Task Manager state should remain feature-owned unless the product explicitly
  needs it across distant app areas.

## Page-Owned Behavior Boundaries

Must stay page-owned:

- Selected deep-dive topic state.
- Selected simulator mode.
- Simulator-only local value.
- Derived sibling panel preview.
- Provider boundary preview.
- Completion CTA wiring for only the `context-state` module.
- Localized next-lesson CTA behavior.

Must not move into shared components:

- Simulator-specific state placement rules.
- Simulator-specific provider boundary examples.
- Temporary shared-state demo values.
- Any real language, progress, XP, badge, or Task Manager logic.
- Storage keys or storage migration logic.

## Storage Policy

- Do not persist simulator state.
- Do not add a new storage key.
- Do not add localStorage migration behavior.
- Do not change existing language storage key `react-lab.language.v3`.
- Do not change existing progress, current module, gamification, quiz, effects
  note, forms lesson, routing lesson, or Task Manager storage behavior.
- Existing local-first course progress remains unchanged.

## Completion/XP Behavior

- Completion CTA should mark only the `context-state` module complete.
- Use the existing module-completion XP convention.
- Simulator interactions must not award XP.
- Quiz behavior should follow existing `QuizPanel` behavior.
- Do not change the progress schema, XP rules, badge rules, language behavior, or
  Task Manager XP behavior during this lesson implementation.

## Relationship To Existing Contexts

This lesson should use the real app as a reference without refactoring it.

`LanguageContext` can illustrate:

- a provider wrapping app UI;
- `language`, `lang`, `dir`, and `localizedPath` as shared values;
- `changeLanguage` as shared behavior;
- `document.documentElement.lang` and `document.documentElement.dir` updates;
- the local-first language storage key `react-lab.language.v3`.

`LearningProgressContext` can illustrate:

- completed module ids;
- current module id;
- XP, streak, badges, and solved quiz ids;
- `markModuleComplete`, `markQuizSolved`, and `resetProgress`;
- persistent progress storage keys;
- why progress is app-wide while live lab details stay page-owned.

The lesson must not change either context.

## Relationship To Routing And Project Architecture

Routing shows that many pages share one app shell. Context explains how values
such as language and progress can cross those route boundaries safely.

This lesson should prepare learners for project architecture by showing:

- why providers usually sit near the app root;
- why feature state can stay inside a feature;
- why hooks can hide implementation details;
- why storage and migration policies should remain explicit;
- why app-wide state is different from page-owned lab state.

It should not start the project architecture lesson or reorganize directories.

## Accessibility And RTL/LTR Requirements

- Persian-first content with English structural parity.
- Same lesson ids, topic ids, quiz ids, and tab ids across locales.
- Logical layout and spacing for RTL and LTR.
- Hook names, context names, storage keys, JSX props, and identifiers render LTR.
- Simulator controls are keyboard reachable.
- Mode selection exposes text labels, not color alone.
- Provider boundary diagrams use text labels and accessible descriptions.
- Sibling preview state must not rely on color alone.
- Mobile, tablet, and desktop layouts avoid horizontal overflow.
- Keep the design calm, scan-friendly, and free of noisy animation.

## Implementation Phases

1. Create this docs-only plan.
2. Later: add localized module content and stable content ids.
3. Later: add manifest entry, navigation labels, route, and page component using
   `LessonTemplate`.
4. Later: update `RoutingPage` CTA to `/context-state` and Context next CTA to the
   next planned module or `/project`, depending on implementation order.
5. Later: add the page-owned shared-state simulator.
6. Later: add focused tests and responsive RTL/LTR QA for `/fa/context-state` and
   `/en/context-state`.
7. Later: update roadmap docs after the implemented page is stable.

## Acceptance Criteria

- `docs/architecture/CONTEXT_SHARED_STATE_PAGE_PLAN.md` exists and is the only
  file changed for this task.
- The document includes purpose, prerequisites, outcomes, module id, route,
  curriculum position, panels, lab, quiz, tips, RTL/LTR, accessibility,
  page-owned behavior, storage, XP, existing context relationships, routing and
  architecture relationships, phases, acceptance criteria, and validation.
- The lesson follows `RoutingPage` and prepares learners for Project Architecture.
- The lesson teaches prop drilling, shared state, provider/consumer, custom hooks,
  app-wide language state, app-wide progress state, and when not to use Context.
- The lab stays simpler than the real contexts and has no persistence.
- No source code, route, component, test, storage key, progress behavior, existing
  page, or context implementation is changed.

## Validation Command

Run:

```bash
npm run format:check
```

If validation passes, commit and push to `origin/main` with:

```bash
git commit -m "add context shared state lesson plan"
git push origin main
```

If validation fails, do not commit or push. Fix only safe docs/formatting issues
once, rerun `npm run format:check` once, and stop to report blockers if it still
fails.
