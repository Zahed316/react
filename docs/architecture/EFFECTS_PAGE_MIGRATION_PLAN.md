# Effects Page Migration Plan

## Purpose

`EffectsPage` needs its own migration plan because it is materially riskier than the pages already migrated to the reusable lesson system. It combines standard lesson-shell structure with page-specific timers, debounced input, `document.title` updates, and localStorage-backed note state. Those behaviors must remain intact while the shared lesson chrome is introduced.

## Current Page Structure

`src/pages/EffectsPage.jsx` currently uses:

- `LessonPageShell` and `LessonTabs`
- a summary tab built around `EffectsTopicLesson`
- a `DeepLessonTopicPicker`-driven selected-topic flow
- a live tab with:
  - `ClockPanel`
  - `DebouncedSearch`
  - `NoteSaver`
- manual quiz content rendered with `QuizBlock`
- manual tips content built from topic mistakes, routing notes, and lesson tips
- localized completion and navigation behavior

### Tab-by-tab Breakdown

| Tab       | Current page-owned surface                   | Notes                                                                          |
| --------- | -------------------------------------------- | ------------------------------------------------------------------------------ |
| `summary` | `EffectsTopicLesson`                         | Selected-topic explainer with picker, spotlight, and detailed content sections |
| `live`    | `ClockPanel`, `DebouncedSearch`, `NoteSaver` | Timer, debounced search, and localStorage note state stay local                |
| `quiz`    | manual `QuizBlock` stack                     | Quiz data and answer behavior remain unchanged                                 |
| `tips`    | topic mistakes + routing notes + tips        | Preserve page-specific reminders and localized copy                            |

### Current Shell / Tab Shape

- Tabs are defined locally as a page-owned array.
- The page uses the standard `summary`, `live`, `quiz`, and `tips` tab semantics.
- The lesson shell is still the older `LessonPageShell` + `LessonTabs` structure rather than `LessonTemplate`.

## Local State and Side-Effect Inventory

### Page-owned state

- `selectedTopicId`
- `ClockPanel.tick`
- `DebouncedSearch.query`
- `DebouncedSearch.debouncedQuery`
- `NoteSaver.note` via localStorage

### Side effects

- `ClockPanel` starts a one-second interval and clears it on unmount.
- `ClockPanel` updates `document.title` on tick and on cleanup.
- `DebouncedSearch` starts and clears a 350 ms timeout on query change.
- `NoteSaver` reads and writes localStorage through `useLocalStorageState`.

### Persistence / migration detail

- Storage key: `react-lab.effects-note.v3`
- Legacy fallback key: `react-lab.effects-note.v1`

### Completion / navigation behavior

- Completion CTA marks only `effects`
- Secondary CTA currently points to localized `/project`
- Route behavior must remain unchanged

## Reusable Components to Use

Primary reusable blocks:

- `LessonTemplate`
- `SummaryPanel`
- `DeepDivePanel`
- `LiveLabFrame`
- `QuizPanel`
- `TipsPanel`

Supporting blocks for deeper refactoring:

- `LessonSection`
- `SimulationSteps`
- `CodeExampleBlock`
- `MistakeList`
- `PracticePrompt`

## What Must Remain Page-Owned

These behaviors should stay local unless explicitly approved otherwise:

- clock/timer state and cleanup
- debounced search timing and result logic
- note saver state and localStorage key
- `document.title` behavior
- live lab behavior
- selected-topic state
- completion behavior
- localized `/project` CTA
- any effect cleanup logic

## Proposed Migration Phases

1. Replace `LessonPageShell` and `LessonTabs` with `LessonTemplate` only.
2. Convert the top-level overview to `SummaryPanel`.
3. Move the selected-topic explainer into `DeepDivePanel` if the topic mapping is clean.
4. Wrap the live tab in `LiveLabFrame` while keeping clock, debounce, and note state page-owned.
5. Replace quiz chrome with `QuizPanel`.
6. Replace tips chrome with `TipsPanel`.
7. Remove only safe duplicated section chrome.
8. Run full QA and audit the page before moving to `ProjectPage`.

## Phase 1 Acceptance Criteria

- `LessonPageShell` and `LessonTabs` are replaced with `LessonTemplate`.
- All tab bodies remain page-owned and functionally unchanged.
- The clock, debounce, note saver, and `document.title` behavior remain local to the page.
- Quiz and tips still render the same content and preserve existing answer behavior.
- The localized `/project` CTA still works in both EN and FA routes.

## Migration Risk Table

| Risk area           | Why it matters                                                       | Mitigation                                                                   |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Timer cleanup       | `document.title` and the live clock are driven by a ticking interval | Keep the timer and cleanup logic page-owned; verify unmount behavior         |
| Debounce behavior   | Search results depend on a delayed state update                      | Preserve the existing timeout and cleanup exactly                            |
| localStorage        | Notes are persisted and migrated from a legacy key                   | Keep `useLocalStorageState` on the page and verify the key/fallback          |
| `document.title`    | Title changes are part of the live experience                        | Do not move title logic into shared blocks                                   |
| RTL/LTR             | The page mixes UI text with code-like snippets and search tokens     | Keep code/command snippets LTR and verify Persian/English parity             |
| Quiz behavior       | Quiz content and answer state must remain stable                     | Keep `QuizBlock` data unchanged while swapping only chrome                   |
| Route / CTA         | The next lesson route and completion path must stay stable           | Preserve the localized `/project` CTA and completion side effect             |
| Playwright coverage | The page has more live behavior than the already-migrated lessons    | Verify the live clock, debounce, note saving, quiz, and tabs in both locales |

## UX / Psychology / Visual Guardrails

- Preserve calm, scan-friendly, low-noise learning layout.
- Preserve chunking across summary, deep dive, live lab, quiz, and tips.
- Preserve progressive disclosure through the topic picker.
- Make the live area clearly answer:
  - what the effect demonstrates
  - what the learner should try
  - what feedback/output to watch
- Keep neutral surfaces, soft cards, rounded corners, subtle borders, and clear spacing.
- Avoid decorative clutter, noisy gradients, extra motion, confetti, and competitive language.
- Do not rely on color alone for meaning.
- Preserve Persian-first RTL and English parity.
- Keep code-like snippets LTR where needed.
- Preserve keyboard and screen-reader accessibility.
- Preserve mobile/tablet/desktop readability and avoid horizontal overflow.

## QA Plan

- Final gate for implementation work: `npm run qa`
- Manual verification should include:
  - `/en/effects`
  - `/fa/effects`
  - tabs
  - clock behavior
  - debounced search
  - note save/restore
  - quiz behavior
  - completion CTA
  - localized next CTA
  - no horizontal overflow on mobile

## Do-Not Rules

- Do not change routes.
- Do not change storage keys unless explicitly approved.
- Do not change `document.title` behavior during shell migration.
- Do not move live state into reusable components.
- Do not change quiz content or answer behavior.
- Do not migrate `ProjectPage` as part of this plan.
- Do not introduce AI, backend, analytics, or data features.
- Do not redesign the page during migration.

## Recommended First Implementation Prompt

Migrate only the `EffectsPage` shell and tabs to `LessonTemplate`, keeping all tab bodies page-owned.
