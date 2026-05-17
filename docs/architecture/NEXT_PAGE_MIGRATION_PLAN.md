# Next Page Migration Plan

## Pages Inspected

- `src/pages/ReactBasicsPage.jsx`
- `src/pages/EffectsPage.jsx`
- `src/pages/ProjectPage.jsx`

## Risk Comparison

| Page              | Migration risk | Why                                                                                                                                                                                                           |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReactBasicsPage` | Low            | Uses the standard lesson shell/tab pattern, has local interactive labs but no storage or `document.title` side effects, and mirrors the already-proven migration shape from `JsWarmupPage` and `ToolingPage`. |
| `EffectsPage`     | Medium         | Includes `document.title` updates, localStorage-backed note state, a clock, debounced search, and more page-specific live behavior.                                                                           |
| `ProjectPage`     | High           | Wraps `TaskManagerLab`, which owns CRUD, localStorage persistence, filtering, editing, and XP side effects.                                                                                                   |

## Chosen Next Page

`ReactBasicsPage` is the safest next migration target.

### Why this choice

- It follows the same lesson-page structure already proven by the migrated pages.
- It has reusable summary, deep-dive, live, quiz, and tips sections.
- Its custom interactions are local and bounded, so page-owned behavior can stay intact while reuse is introduced.
- It avoids the higher-risk side effects present in `EffectsPage` and `ProjectPage`.

## Current Page Structure Summary

`ReactBasicsPage` currently uses:

- `LessonPageShell` and `LessonTabs`
- a summary tab built around `ReactTopicLesson`
- a `DeepLessonTopicPicker`-driven selected-topic flow
- a live tab with `PropsLab` and `EventLab`
- manual quiz and tips sections
- localized completion and navigation behavior

### Page-owned behavior to preserve

- `selectedTopicId`
- `PropsLab` state: name, role, accent, visits
- `EventLab` state: liked, count
- tab switching behavior
- completion CTA for `react`
- localized secondary CTA to `/effects`
- route behavior
- any existing language-specific copy and labels

## Reusable Components to Use

Primary reusable blocks:

- `LessonTemplate`
- `SummaryPanel`
- `DeepDivePanel`
- `LiveLabFrame`
- `QuizPanel`
- `TipsPanel`

Supporting blocks that may help during deeper refactoring:

- `LessonSection`
- `SimulationSteps`
- `CodeExampleBlock`
- `MistakeList`
- `PracticePrompt`

## Step-by-Step Migration Order

1. Replace `LessonPageShell` and `LessonTabs` with `LessonTemplate`.
2. Convert the top-level summary to `SummaryPanel`.
3. Move the selected-topic explainer into `DeepDivePanel`.
4. Wrap the live lab content in `LiveLabFrame` while keeping `PropsLab` and `EventLab` page-owned.
5. Replace quiz chrome with `QuizPanel`.
6. Replace tips chrome with `TipsPanel`.
7. Remove any remaining duplicate section chrome only where the layout stays identical.
8. Run full QA and audit the migration before touching the next page.

## UX, Psychology, and Design Guardrails

- Keep the page calm, scan-friendly, and low-noise.
- Preserve chunking and progressive disclosure.
- Use neutral surfaces, soft cards, subtle borders, and clear spacing.
- Avoid decorative clutter, noisy animation, confetti, and competitive language.
- Do not rely on color alone for meaning.
- Keep Persian-first RTL with English parity.
- Keep code and command-like snippets LTR when they appear.

## RTL/LTR and Accessibility Risks

- Topic-picker labels and live-card text must remain readable in both directions.
- Interactive controls in `PropsLab` and `EventLab` must keep keyboard focus and semantic labels.
- Any future code examples should render safely with `dir="ltr"` when appropriate.
- Layout changes must be checked on mobile, tablet, and desktop for overflow.

## QA Plan

- Fast local check: `npm run check:fast`
- Targeted route check after implementation: `npm run test:e2e:react` if added, otherwise the closest page-targeted Playwright selection
- Fast e2e: `npm run test:e2e:fast`
- Final gate: `npm run qa`

## Do-Not Rules

- Do not start implementation yet.
- Do not change routes, storage keys, or lesson content.
- Do not move page-owned interaction state into reusable components without approval.
- Do not migrate `EffectsPage` or `ProjectPage` as part of this plan.
- Do not introduce AI, backend, analytics, or data features.
- Do not redesign the page while migrating it.
