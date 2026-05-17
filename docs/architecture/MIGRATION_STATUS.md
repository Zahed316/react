# Migration Status

## Purpose

This document tracks progress from one-off lesson pages to the reusable lesson template system, along with the pages that still need migration work and the audit gates that should pass before each step.

## Current Migrated Pages

| Page           | Migration status | Audit status  | Main reusable components used                                                                                                                                                        | Page-owned behavior preserved                                                                                                             |
| -------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `JsWarmupPage` | Migrated         | Audited       | `LessonTemplate`, `SummaryPanel`, `DeepDivePanel`, `LiveLabFrame`, `QuizPanel`, `TipsPanel`                                                                                          | JS explorer state, localized lesson content, quiz behavior, completion CTA, route behavior                                                |
| `SetupPage`    | Migrated         | Audited       | `LessonTemplate`, `SummaryPanel`, `LiveLabFrame`, `QuizPanel`, `TipsPanel`                                                                                                           | Setup checklist state, readiness/progress behavior, localized CTA, storage keys, completion CTA, route behavior                           |
| `ToolingPage`  | Fully migrated   | Final-audited | `LessonTemplate`, `SummaryPanel`, `DeepDivePanel`, `LiveLabFrame`, `SimulationSteps`, `CodeExampleBlock`, `MistakeList`, `PracticePrompt`, `QuizPanel`, `TipsPanel`, `LessonSection` | Selected-tool state, selected-command state, live command exploration, quiz behavior, completion CTA, localized `/js` CTA, route behavior |

## Remaining Pages

The following lesson pages still need inspection and migration planning:

- `ReactBasicsPage`
- `EffectsPage`
- `ProjectPage`

No other lesson pages were found in `src/pages` at the time of this update.

## Reusable System Status

The reusable lesson system is proven across these blocks:

- `LessonSection`
- `CodeExampleBlock`
- `SimulationSteps`
- `MistakeList`
- `PracticePrompt`
- `ProgressIndicator`
- `SummaryPanel`
- `DeepDivePanel`
- `LiveLabFrame`
- `QuizPanel`
- `TipsPanel`
- `LessonTemplate`

## Page-Owned Behavior Rules

These behaviors should remain page-owned unless explicitly approved for reuse:

- live lab state
- custom explorers
- command pickers
- setup checklist state
- storage keys
- `document.title` behavior
- route behavior
- completion side effects
- Task Manager CRUD

## UX and Design Guardrails

All lesson migrations should preserve the same learning direction:

- calm, scan-friendly layout
- chunking into short, readable blocks
- progressive disclosure
- neutral surfaces
- soft cards
- subtle borders
- clear spacing
- no noisy animation
- no decorative clutter
- no color-only meaning
- Persian-first RTL with English parity
- LTR safety for code and command snippets

## QA Policy

Use the following validation levels as migration work progresses:

- fast local check: `npm run check:fast`
- targeted tooling check: `npm run test:e2e:tooling`
- fast e2e: `npm run test:e2e:fast`
- final gate: `npm run qa`

## Recommended Next Step

Before implementing the next migration, inspect `src/pages`, then create a migration plan for the next page so the reuse boundary and page-owned behaviors stay explicit.
