# Project Page Migration Plan

## Purpose

`ProjectPage` is the final and highest-risk lesson page because it is the capstone workflow, not just another lesson shell. It combines the lesson chrome with a stateful Task Manager lab that owns CRUD, filters, persistence, and XP side effects. This plan keeps the migration boundary explicit so the page can adopt reusable lesson structure without disturbing the project workflow itself.

## Current Structure

| Slot / area        | Current implementation                                  | Notes                                                                               |
| ------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Shell / tabs       | `LessonPageShell` + `LessonTabs`                        | Older lesson shell is still in use. Tabs are `summary`, `live`, `quiz`, and `tips`. |
| Summary            | Inline `section` with heading, intro, and bullet points | Uses `content.modules.project.summary`.                                             |
| Live / project lab | `TaskManagerLab`                                        | The capstone workflow lives here and owns the risky state.                          |
| Quiz               | Inline `QuizBlock` stack                                | Uses `content.quizzes.project`.                                                     |
| Tips               | Inline `section` with bullet list                       | Uses `content.modules.project.tips`.                                                |
| Completion CTA     | Primary hero CTA only                                   | Marks `project` complete.                                                           |
| Secondary CTA      | None today                                              | Do not invent one unless product direction changes.                                 |
| Route behavior     | `/project` lesson route                                 | Preserve routing and completion flow unchanged.                                     |

## Task Manager Risk Inventory

### State and persistence

- Task list state is page-owned and stored through `useLocalStorageState`.
- Storage key: `react-lab.task-manager.v3`.
- Legacy fallback key: `react-lab.task-manager.v1`.
- Stored items are normalized on load, including category aliases, `done`, `title`, `note`, and `createdAt`.
- Seed tasks are generated with stable timestamps from `createSeedTasks`.

### CRUD and workflow

- Create: submit a new task from the form.
- Edit: load a task back into the form and replace it in place on submit.
- Delete: remove a task from the list.
- Toggle: flip `done` state from the check button.
- Clear completed: remove all completed tasks in one action.
- Filters: `all`, `active`, and `done`.
- Search: substring filter across title, note, category, and category label.

### Derived data and empty states

- Totals are derived locally for all, active, and done counts.
- The feed uses a filtered list, not a separate persisted view.
- Empty state appears when the current filter/search combination returns no tasks.

### Progress / XP behavior

- Creating a task awards XP.
- Toggling a task to done awards XP.
- Clearing completed tasks awards XP based on removed items.
- Editing, deleting, filtering, and searching do not alter XP.

### Accessibility / interaction sensitivity

- The task list uses many keyboard-reachable controls: form fields, category select, filter buttons, toggle buttons, edit/delete buttons, and clear-completed.
- The filter group currently uses tablist-style chrome, so any shell migration must not disturb its focus order or semantics.
- The task toggle button has an explicit `aria-label`.
- Empty-state and task-card content must remain readable in both locales.
- There is no `document.title` or timer behavior in the current project lab.

## Page-Owned Behavior

- Task Manager state.
- LocalStorage keys and migration fallback.
- CRUD handlers.
- Filters and search.
- XP/progress behavior.
- Completion behavior for `project`.
- Route behavior.
- All custom Task Manager UI and micro-interactions.

## Reusable Components Likely Safe To Use

| Component        | Safe use here                 | Boundary                                                                    |
| ---------------- | ----------------------------- | --------------------------------------------------------------------------- |
| `LessonTemplate` | Yes                           | Use for outer shell/tabs only.                                              |
| `SummaryPanel`   | Yes                           | Safe for the summary/overview tab.                                          |
| `LiveLabFrame`   | Yes                           | Safe wrapper for the Task Manager lab if the state stays page-owned.        |
| `QuizPanel`      | Yes, if quiz stays present    | Wrap the existing quiz stack without changing quiz content or XP.           |
| `TipsPanel`      | Yes, if tips stay present     | Wrap the existing tips list without rewriting the advice.                   |
| `LessonSection`  | Yes, for static sections only | Use only for one-for-one static chrome cleanup, not for Task Manager logic. |

## Do-Not-Use / Risky Components

| Component          | Risk level  | Why it is risky here                                                                                             |
| ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `DeepDivePanel`    | High        | `ProjectPage` has no deep-dive topic flow; forcing one would add unnecessary abstraction and UI noise.           |
| `SimulationSteps`  | High        | The page is a live CRUD workflow, not a linear conceptual simulation.                                            |
| `CodeExampleBlock` | High        | There is no code-example lesson surface to justify this block, and it would distract from the capstone workflow. |
| `MistakeList`      | Medium-high | The page is workflow-heavy, not error-pattern-driven, so this block is easy to overuse.                          |
| `PracticePrompt`   | Medium-high | The live task manager is already the practice surface; a separate prompt could duplicate instructions.           |

## Proposed Migration Phases

1. Replace `LessonPageShell` and `LessonTabs` with `LessonTemplate` only.
2. Convert the summary tab to `SummaryPanel`.
3. Wrap the Task Manager lab area in `LiveLabFrame` without moving any state or handlers.
4. Wrap quiz and tips tabs in `QuizPanel` and `TipsPanel` if they remain present.
5. Remove only safe one-for-one static chrome with `LessonSection`, if it does not flatten the capstone workflow.
6. Run a final audit and update `MIGRATION_STATUS.md` only after the page is stable.

## UX / Psychology / Design Guardrails

- Preserve the capstone feeling of the page.
- Keep the workflow visible and discoverable rather than abstracting it away.
- Reduce cognitive load by keeping one task at a time visible.
- Avoid decorative clutter, gradient-heavy treatment, or extra motion.
- Do not add gamification pressure beyond the existing XP/progress feedback.
- Preserve Persian-first RTL with English parity.
- Keep code, labels, and any technical tokens readable in LTR contexts.
- Do not rely on color alone for meaning.
- Maintain mobile, tablet, and desktop readability without horizontal overflow.

## QA Plan

- Docs-only validation: `npm run format:check`
- Implementation validation: `npm run qa` only, immediately before commit/push

Manual verification should include:

- `/en/project`
- `/fa/project`
- task creation
- editing
- deletion
- completion toggling
- filters
- persistence after reload
- completion CTA
- no horizontal overflow

## Do-Not Rules

- Do not change localStorage keys.
- Do not change CRUD behavior.
- Do not change XP/progress behavior.
- Do not move Task Manager state into reusable components.
- Do not rewrite `TaskManagerLab`.
- Do not introduce backend, AI, analytics, or sync features.
- Do not redesign the page.

## Recommended First Implementation Prompt

Migrate only the outer `ProjectPage` shell and tabs to `LessonTemplate`, and keep every tab body page-owned.
