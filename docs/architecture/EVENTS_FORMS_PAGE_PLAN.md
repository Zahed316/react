# Events + Controlled Forms Page Plan

## Summary

Create a new Events + Controlled Forms lesson that bridges `ReactBasicsPage` and
`EffectsPage`. The lesson should teach how user actions enter React through events,
how controlled inputs keep form data in component state, and how simple validation
and derived UI prepare learners for the final Task Manager project.

This is a docs-only plan for a new lesson page, not a migration of an existing
page. `MIGRATION_STATUS.md` currently has no remaining pages to migrate, so this
plan should not be treated as migration work. It must not add the route, page
component, tests, storage keys, progress behavior, or lesson implementation yet.

## Proposed Module And Route

- Proposed module id: `events-forms`
- Proposed route: `/events-forms`
- Locale-aware routes: `/fa/events-forms` and `/en/events-forms`
- Proposed curriculum sequence: `/react` -> `/events-forms` -> `/effects` -> `/project`
- Future implementation must update `src/App.jsx`, `src/data/courseManifest.js`,
  localized course content, navigation labels, and next-lesson CTAs, but those
  changes are out of scope for this docs-only task.

## Lesson Purpose

Teach learners how React responds to user actions and keeps form inputs
synchronized with component state. The lesson should make the transition from
basic state updates to real form workflows before learners meet effects,
persistence, and browser APIs.

The core mental model: user input is data, event handlers receive that data, and
React state becomes the source of truth for rendering the current form and its
derived preview.

## Prerequisites

- Completed React basics: DOM, JSX, rendering, props, state, and render/update flow.
- Basic JavaScript functions, objects, arrays, conditionals, and browser event
  familiarity.
- Ability to read small React examples using `useState`.
- No required knowledge of `useEffect`, routing, localStorage, backend APIs, or
  Task Manager CRUD.

## Learning Outcomes

Learners should be able to:

- Attach event handlers to buttons, inputs, selects, textareas, and forms.
- Explain why event handlers receive an `event` object.
- Build controlled inputs with `value` and `onChange`.
- Keep related form fields in one form-state object.
- Update one field without mutating the rest of the form state.
- Handle form submission with `onSubmit` and `event.preventDefault()`.
- Validate required input before accepting a submission.
- Render derived UI from input state, including previews, character counts,
  disabled buttons, and validation messages.
- Explain how these patterns prepare them for Task Manager add/edit flows.

## Content Structure

Use the standard lesson tabs:

- `summary`: what events and forms solve, why controlled inputs matter, and where
  the lesson fits in the course.
- `live`: a small controlled form lab with local-only state and derived preview.
- `quiz`: questions about handler references, controlled fields, submit handling,
  validation, and derived state.
- `tips`: common mistakes, short practice prompts, and a Task Manager bridge.

Deep lesson topic sequence:

- Event handlers.
- Controlled inputs.
- Form state shape.
- Submit handling.
- Validation and derived UI.

## LessonTemplate Usage

Use the existing reusable lesson stack:

- `LessonTemplate` for hero, completion CTA, next lesson CTA, and stable tabs.
- `SummaryPanel` for overview, prerequisites, goals, and key points.
- `DeepDivePanel` for a structured topic picker and topic details.
- `LiveLabFrame` for the page-owned controlled form lab.
- `QuizPanel` for the quiz stack.
- `TipsPanel` for recap, mistakes, and practice.
- `LessonSection` inside page-owned topic rendering when a static explanatory
  section needs the established lesson surface.

Do not introduce new shared components for v1 unless implementation later proves
the existing lesson stack cannot express the lesson safely. The template must
remain thin and must not own page-specific form behavior.

## SummaryPanel Plan

Include:

- Intro: user input is data entering React through events.
- Prerequisites: JSX, props, state, render flow, and JavaScript functions.
- Learning goals: handlers, controlled fields, form-state objects, submit flow,
  validation, and derived preview.
- Key points:
  - React does not read input values magically; state is the source of truth.
  - `onChange` copies the current field value into state.
  - `onSubmit` is where form data is accepted.
  - `event.preventDefault()` keeps the browser from reloading the page.
  - Derived UI should come from current state, not duplicated state.
  - These patterns are the foundation for adding and editing tasks.

## DeepDivePanel Topic Plan

Topics should follow the deep lesson format from `LESSON_SCHEMA.md`: definition,
why it exists, problem, how it works, simulation, example, before/after,
mistakes, real usage, practice, and summary.

Proposed topic ids:

- `event-handlers`
- `controlled-inputs`
- `form-state`
- `submit-handling`
- `validation-derived-ui`

Topic coverage:

- Event handlers: handler references, event object, button/input/form events, and
  why handlers should not be called during render.
- Controlled inputs: `value` plus `onChange`, state as source of truth, text
  input, textarea, and select.
- Form state: one object for related fields, immutable field updates, trimming
  only when accepting submitted data.
- Submit handling: real `<form onSubmit>`, `event.preventDefault()`, validation
  before submit, and local submit confirmation.
- Validation and derived UI: required fields, text feedback, disabled actions,
  character count, preview card, and no color-only meaning.

Code snippets, JSX prop names, and event names must render LTR with
`translate="no"` where implemented.

## LiveLabFrame Lab Plan

Use a small controlled form lab that is clearly simpler than `TaskManagerLab`.

Recommended lab: "Mini Profile Draft" or "Task Draft Card".

Required lab behavior:

- Fields: title/name, short note, and category/status select.
- State: a single page-owned `formState` object.
- Derived UI: live preview card, character count, empty-state text, and disabled
  submit state.
- Submit behavior: use a real form, call `event.preventDefault()`, validate the
  required field, then show a local submitted preview or confirmation.
- Validation: required title/name feedback using text, not color alone.
- Reset behavior: clear the draft back to initial local defaults.
- Accessibility: every input has a label; validation text is connected with
  `aria-describedby` and invalid fields use `aria-invalid`.

Forbidden lab behavior:

- No persisted task list.
- No edit, delete, complete, filter, or search workflow.
- No localStorage persistence.
- No new storage key.
- No XP awards from submit or reset.
- No reuse or mutation of `TaskManagerLab`.

## QuizPanel Plan

Include 4-6 questions covering:

- Why `onClick={handleClick}` differs from calling a function during render.
- What makes an input controlled.
- Why `event.preventDefault()` is used in a form submit handler.
- How to update one field in an object form state.
- Which UI should be derived from state instead of stored separately.
- How validation should be shown accessibly.

Each quiz should have aligned Persian and English ids, answer structure,
explanations, and misconception tags. The quiz should test behavior and mental
models, not memorized definitions.

## TipsPanel Plan

Include concise reminders and practice prompts.

Common mistakes:

- Calling handlers during render.
- Forgetting `onChange` on a controlled input.
- Mutating the form-state object directly.
- Storing derived values unnecessarily.
- Trimming every keystroke instead of trimming accepted submit data.
- Relying on color alone for validation.

Practice prompts:

- Add one optional field to the lab.
- Add a disabled submit condition.
- Convert separate field states into one form-state object.
- Explain which values are stored state and which values are derived UI.

Project bridge:

- Task Manager create/edit forms use the same controlled form-state pattern.
- Required task-title validation uses the same validation-before-submit pattern.
- Task preview, counts, and disabled actions should be derived from state.

## Page-Owned Behavior Boundaries

Must stay page-owned:

- Selected deep-dive topic state.
- Controlled form state.
- Field validation state.
- Submitted preview or confirmation state.
- Submit and reset handlers.
- Derived preview logic.
- Lab-specific event handlers.
- Completion CTA wiring for only the `events-forms` module.
- Localized next-lesson CTA behavior.

Must not move into shared components:

- Lab-specific controlled-form behavior.
- Validation rules for this lesson.
- Draft object creation.
- Submitted preview behavior.
- Task Manager CRUD behavior.
- Storage keys or storage migration logic.

## Storage Policy

- Do not persist the live lab draft.
- Do not add a new storage key.
- Do not add localStorage migration behavior.
- Do not change existing progress, quiz, effects note, or Task Manager storage keys.
- Existing local-first course progress remains unchanged and continues to use the
  current progress mechanism.

## Completion/XP Behavior

- Completion CTA should mark only the `events-forms` module complete.
- Use the existing course progress mechanism and module-completion XP convention.
- Lab submit and reset actions must not award XP.
- Quiz behavior should follow the existing `QuizPanel` and solved-quiz behavior.
- Do not change the progress schema, XP rules, badge rules, or Task Manager XP
  behavior during this lesson implementation.

## Relationship To Task Manager

This lesson prepares learners for the Task Manager capstone by introducing the
form workflow before CRUD, persistence, filtering, and project complexity.

It should prepare learners to:

- Create a task from controlled form fields.
- Edit a task by loading existing values into form state.
- Validate required task titles.
- Submit accepted form data without page reload.
- Show derived previews, counts, empty states, and disabled actions.
- Understand why Task Manager CRUD needs predictable form state before storage.

It must not duplicate `TaskManagerLab`:

- No persistent task collection.
- No edit/delete/complete workflow.
- No filters or search.
- No storage migration.
- No Task Manager XP side effects.

## Accessibility And RTL/LTR Requirements

- Persian-first content with English structural parity.
- Same lesson ids, topic ids, quiz ids, and tab ids across Persian and English.
- Use logical layout and spacing so RTL and LTR render naturally.
- Code snippets, JSX props, event names, and identifier-like tokens render LTR.
- Use a real `<form onSubmit>` for the lab.
- Every form control has a programmatic label.
- Validation messages are text-based and connected to their fields with
  `aria-describedby`.
- Invalid fields expose invalid state with `aria-invalid` when applicable.
- Submit and reset buttons have clear accessible names.
- Keyboard users can tab through fields, submit, reset, tabs, and quiz choices.
- Validation must not rely on color alone.
- Keep mobile, tablet, and desktop layouts readable with no horizontal overflow.
- Keep the design calm and scan-friendly with no noisy animation, decorative
  clutter, or LMS-style feature expansion.

## Implementation Phases

1. Create this docs-only plan.
2. Later: add localized module content and stable content ids.
3. Later: add the module manifest entry, navigation labels, route, and page
   component using `LessonTemplate`.
4. Later: update React lesson next CTA to point to `/events-forms` and Events +
   Controlled Forms next CTA to point to `/effects`.
5. Later: add focused tests and responsive RTL/LTR QA for the new route.
6. Later: update migration and roadmap docs only after the implemented page is
   stable.

## Acceptance Criteria

- `docs/architecture/EVENTS_FORMS_PAGE_PLAN.md` exists and is the only repository
  file changed for this task.
- The document includes summary, module id, route proposal, curriculum position,
  purpose, prerequisites, outcomes, content structure, panel plans, behavior
  boundaries, storage policy, XP behavior, Task Manager relationship,
  accessibility/RTL/LTR requirements, phases, acceptance criteria, and validation.
- The lesson clearly bridges `ReactBasicsPage` and `EffectsPage`.
- The lesson teaches event handlers, controlled inputs, form state, submit
  handling, validation basics, and derived UI from input state.
- The lesson clearly prepares learners for Task Manager CRUD without duplicating
  `TaskManagerLab`.
- The live lab stays simpler than Task Manager and has no persistence.
- The plan preserves Persian-first content, English parity, local-first progress,
  no backend, no AI tutor, no analytics, no LMS features, calm design, responsive
  readability, no horizontal overflow, no noisy animation, no decorative clutter,
  and no color-only meaning.
- No source code, route, component, test, reusable component, storage key,
  progress behavior, existing page, or migration implementation is changed.

## Validation Command

Run:

```bash
npm run format:check
```

If validation passes, commit and push to `origin/main` with:

```bash
git commit -m "add events forms lesson plan"
git push origin main
```

If validation fails, do not commit or push. Fix only safe docs/formatting issues
once, rerun `npm run format:check` once, and stop to report blockers if it still
fails.
