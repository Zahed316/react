# Refactor Plan: Reusable Deep Lesson Rendering

## Scope

- Task type: refactor planning only
- Goal: reduce duplicated deep-lesson rendering logic without changing behavior, routes, content, or dependencies
- Non-goal: full rewrite of lesson pages or course content

## 1. Current Duplicated Patterns

The deepest duplication is across:

- [src/pages/ToolingPage.jsx](/home/newuser/react/src/pages/ToolingPage.jsx)
- [src/pages/ReactBasicsPage.jsx](/home/newuser/react/src/pages/ReactBasicsPage.jsx)
- [src/pages/EffectsPage.jsx](/home/newuser/react/src/pages/EffectsPage.jsx)

Common repeated patterns:

- local topic/tool picker with the same button UI pattern
- spotlight card for the active topic
- repeated section layout for:
  - definition
  - why it exists
  - problem it solves
  - how it works
  - simulation
  - code example
  - before/after
  - beginner mistakes
  - real usage
  - practice
  - summary
- repeated `story-card` mapping for simulations, examples, comparisons, and summaries
- repeated `lesson-subpanel` section framing and eyebrow/title structure

What is different per page:

- live labs and interactive panels
- page-specific intro copy
- data source names such as `toolingDeck`, `reactTopicDeck`, and `effectsTopicDeck`
- a few small section-level variations

## 2. Proposed Reusable Components

### `DeepLessonTopicPicker`

Purpose:

- Shared picker UI for tools/topics inside a lesson

### `DeepLessonSection`

Purpose:

- Shared framed section with eyebrow, title, optional lead, and body content

### `DeepLessonDeck`

Purpose:

- Main reusable renderer for the common 11-part deep lesson structure
- Receives one active topic plus the section labels/copy config

### `SimulationSteps`

Purpose:

- Shared renderer for step-by-step simulation cards

### `CodeExampleBlock`

Purpose:

- Shared renderer for example title, explanation, and code/result notes

### `BeginnerMistakesList`

Purpose:

- Shared renderer for mistake bullet lists or mistake cards

### `MiniPracticeBlock`

Purpose:

- Shared renderer for one or two practice prompts with optional answer hints

## 3. Props / Data Shape

### `DeepLessonTopicPicker`

Suggested props:

- `items`: `{ id, title }[]`
- `activeId`: `string`
- `onSelect`: `(id: string) => void`
- `ariaLabel`: `string`

### `DeepLessonSection`

Suggested props:

- `eyebrow`: `string`
- `title`: `string`
- `lead?`: `string`
- `as?`: `'section' | 'article'`
- `children`: `ReactNode`

### `SimulationSteps`

Suggested props:

- `steps`: `{ title: string, description: string }[]`

Fallback support:

- allow a short string array temporarily during migration to avoid a forced content rewrite

### `CodeExampleBlock`

Suggested props:

- `title`: `string`
- `description`: `string`
- `code`: `string`
- `notes?`: `string[]`

### `BeginnerMistakesList`

Suggested props:

- `items`: `string[]` or `{ title?: string, description: string }[]`

### `MiniPracticeBlock`

Suggested props:

- `prompt`: `string`
- `followUp?`: `string`
- `hint?`: `string`

### `DeepLessonDeck`

Suggested props:

- `title`: `string`
- `lead`: `string`
- `chooserLabel`: `string`
- `sectionLabels`: object with keys:
  - `definition`
  - `whyExists`
  - `problem`
  - `howItWorks`
  - `simulation`
  - `example`
  - `beforeAfter`
  - `mistakes`
  - `usage`
  - `practice`
  - `summary`
- `items`: `{ id, title }[]`
- `activeItemId`: `string`
- `onSelect`: `(id: string) => void`
- `topic`: object containing the active topic content:
  - `title`
  - `badge`
  - `accent`
  - `summary`
  - `whyExists`
  - `problem`
  - `howItWorks`
  - `simulation`
  - `example`
  - `beforeAfter`
  - `mistakes`
  - `usage`
  - `practice`
  - `summaryPoints`

Design note:

- Keep `DeepLessonDeck` presentational.
- Do not move page-specific state, tabs, quiz selection, or live-lab logic into it.

## 4. Files Likely Affected

New shared components, likely under [src/components](/home/newuser/react/src/components):

- `DeepLessonDeck.jsx`
- `DeepLessonTopicPicker.jsx`
- `DeepLessonSection.jsx`
- `SimulationSteps.jsx`
- `CodeExampleBlock.jsx`
- `BeginnerMistakesList.jsx`
- `MiniPracticeBlock.jsx`

Likely page adopters:

- [src/pages/ToolingPage.jsx](/home/newuser/react/src/pages/ToolingPage.jsx)
- [src/pages/ReactBasicsPage.jsx](/home/newuser/react/src/pages/ReactBasicsPage.jsx)
- [src/pages/EffectsPage.jsx](/home/newuser/react/src/pages/EffectsPage.jsx)

Possibly touched for styling only if needed:

- [src/styles.css](/home/newuser/react/src/styles.css)

Files that should stay untouched in the first pass:

- [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js)
- [src/context/LearningProgressContext.jsx](/home/newuser/react/src/context/LearningProgressContext.jsx)
- [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js)
- [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js)

## 5. Migration Order

1. **Extract the picker first**
   - Replace local `ToolPicker` and `TopicPicker` copies with one shared component.
   - Lowest-risk step with minimal content assumptions.
2. **Extract shared section framing**
   - Introduce `DeepLessonSection` for repeated eyebrow/title/surface structure.
3. **Extract simulation and simple list blocks**
   - Pull out `SimulationSteps`, `BeginnerMistakesList`, and `MiniPracticeBlock`.
4. **Extract the full deep-lesson deck**
   - Move the repeated 11-section structure into `DeepLessonDeck`.
5. **Adopt one page first**
   - Start with [src/pages/ToolingPage.jsx](/home/newuser/react/src/pages/ToolingPage.jsx), because it has fewer custom live-lab interactions than the React and effects pages.
6. **Adopt React basics next**
   - Validate that the shared deck works with richer topic content.
7. **Adopt Effects last**
   - Keep the most interaction-heavy page for last so timer/localStorage examples stay stable.

## 6. How To Preserve Current UI

- Reuse existing CSS class names wherever possible:
  - `lesson-subpanel`
  - `tool-tabs`
  - `pill`
  - `tool-spotlight`
  - `story-card`
- Keep layout ownership in the pages or existing CSS, not inside a new abstraction layer.
- Treat the first shared components as markup extraction, not redesign.
- Avoid renaming content fields in the first pass.

## 7. How To Preserve EN/FA Parity

- Do not rewrite locale content structure during the first refactor.
- Keep current EN/FA keys unchanged while introducing shared components.
- Use the renderer to consume the current content shape before any schema cleanup.
- After each migration step, verify that both locale files still map cleanly to the same rendered sections.

## 8. How To Avoid Breaking Existing Routes

- Do not touch route definitions in [src/App.jsx](/home/newuser/react/src/App.jsx).
- Do not change module IDs, manifest order, or localized paths.
- Limit refactor changes to shared presentational components and the three lesson pages already using the deep structure.
- Keep `LessonPageShell`, `LessonTabs`, and page-level exports unchanged.

## 9. How To Test After Each Step

After each migration step:

- run `npm run format:check`
- run `npm run check`
- manually smoke-check:
  - `/en/tooling`
  - `/fa/tooling`
  - `/en/react`
  - `/fa/react`
  - `/en/effects`
  - `/fa/effects`
- verify:
  - tabs still switch
  - active topic/tool selection still works
  - quizzes still render
  - live examples still work
  - long Persian labels still fit
  - RTL/LTR direction still looks correct

Use [VISUAL_QA.md](/home/newuser/react/VISUAL_QA.md) as the manual visual checklist during the real refactor.

## 10. Rollback Strategy

- Keep each extraction in a separate commit.
- Migrate one component or one page at a time.
- If a shared component causes layout or parity regressions:
  - revert only that extraction commit
  - leave the rest of the page architecture intact
- Do not combine content refactors with renderer refactors in the same change set.

## Recommended Implementation Sequence

1. shared picker
2. shared section shell
3. shared simulation/practice/mistake blocks
4. shared deep lesson deck
5. tooling adoption
6. react adoption
7. effects adoption

## Main Risks

- Over-abstracting too early and forcing all pages into a shape that does not fit future lessons
- Accidentally changing CSS structure and causing RTL/LTR regressions
- Mixing renderer extraction with content-schema cleanup in the same task
- Touching the effects page too early, where interactive examples increase regression risk

## Planning Verdict

This refactor is worth doing, but only as an incremental extraction of repeated presentation patterns. The safest version is not a “new lesson system.” It is a staged replacement of duplicated markup with small shared components while keeping current page behavior, route flow, and bilingual content structure unchanged.
