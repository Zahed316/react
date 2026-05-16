# Tooling Page Migration Plan

## Purpose

- Migrate `ToolingPage` after the simpler `JsWarmupPage` and `SetupPage` proofs.
- Reduce repeated lesson chrome while preserving tooling-specific command exploration, local selections, and bilingual parity.
- Keep the page calm, scan-friendly, and easy to navigate on mobile, tablet, and desktop.

## Current ToolingPage Structure

- Page shell: `LessonPageShell` plus `LessonTabs` with stable `summary`, `live`, `quiz`, and `tips` tabs.
- Local state: `selectedToolId` for the tool picker and `selectedCommand` for the command preview tabs.
- Summary tab: a dense explanation surface with tool picker, spotlight, definition, why it exists, the problem it solves, how it works, simulation, example, before/after, mistakes, usage, practice, and recap.
- Live tab: tool picker, spotlight, package manager comparison, command tabs, active command preview, and full command list.
- Quiz tab: `QuizBlock` stack from `content.quizzes.tooling`.
- Tips tab: lightweight lesson tips list.
- Completion: the primary CTA marks only the `tooling` module complete.
- Storage: no page storage key today; keep it that way unless a later migration clearly needs one.

## What Can Safely Reuse

- `LessonTemplate`: use for the shared shell, hero CTA, next-step CTA, and fixed tab contract.
- `SummaryPanel`: use for the top-level tooling overview, learning goals, prerequisites, and key points.
- `DeepDivePanel`: use for the selected-tool explainer if the tooling items map cleanly to the standard topic fields; otherwise keep a narrow page-owned adapter until the mapping is safe.
- `LiveLabFrame`: use for the command exploration area and spotlight frame, while keeping `selectedToolId` and `selectedCommand` page-owned.
- `QuizPanel`: use for the tooling quiz stack without changing `QuizBlock` behavior.
- `TipsPanel`: use for the tips tab, with short reminders and practice cues.
- `CodeExampleBlock`: use for command examples, before/after snippets, and any future copyable code blocks.
- `SimulationSteps`: use for `howItWorks` and `simulation` sequences.
- `MistakeList`: use for common tooling mistakes and fixes.
- `PracticePrompt`: use for the lesson practice question and task.

## What Must Remain Page-Owned

- Tooling panels, especially the package-manager comparison and command preview behavior.
- Local interaction state such as `selectedToolId` and `selectedCommand`.
- Any command-selection logic that ties the current spotlight to the live command preview.
- `document.title` behavior if it is introduced later.
- Storage keys, if any are added in the future.
- Route structure and localization paths.

## Risks

- EN/FA parity: the tooling explanations, commands, and tab labels must stay structurally aligned across locales.
- RTL/LTR layout: code samples, shell commands, terminal output, and comparison snippets must stay readable in LTR even when surrounded by Persian RTL copy.
- Command direction: `pre`/`code` blocks need direction-safe rendering so the token order does not flip.
- Quiz/storage: do not introduce new storage keys or alter `QuizBlock` persistence behavior.
- Playwright route coverage: the page has multiple interactive surfaces, so tab order and selector stability should be verified after each step.

## Migration Order

1. Replace `LessonPageShell` and `LessonTabs` scaffolding with `LessonTemplate`.
2. Move the top-level overview into `SummaryPanel`.
3. Split the selected-tool explainer into `DeepDivePanel` if the tooling topics map cleanly; otherwise keep only a thin page-owned adapter first.
4. Wrap the command exploration surface in `LiveLabFrame` and keep the local selectors page-owned.
5. Convert the tool flow sections into `SimulationSteps`, `CodeExampleBlock`, `MistakeList`, and `PracticePrompt`.
6. Wrap the quiz stack in `QuizPanel` and the recap notes in `TipsPanel`.
7. Remove duplicated section chrome only after the page still renders identically in English and Persian.

## Validation Checklist

- `npm run format:check`
- `npm run check:all`
- `npx playwright test`
- Verify `/en/tooling` and `/fa/tooling`.
- Verify summary, live, quiz, and tips tabs still switch correctly.
- Verify tool selection and command selection still work.
- Verify command and code blocks remain LTR inside RTL pages.
- Verify no horizontal overflow on mobile.
- Verify completion still marks only `tooling`.

## Do-Not Rules

- Do not change app code in this plan.
- Do not migrate `ToolingPage` yet.
- Do not change routes, storage keys, or lesson content.
- Do not move page-specific tooling behavior into `LessonTemplate`.
- Do not introduce decorative visuals, noisy animation, or competitive progress language.
