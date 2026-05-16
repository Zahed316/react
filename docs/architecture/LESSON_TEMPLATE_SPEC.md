# Lesson Template Spec

## Purpose

- Define one reusable lesson-page template so new lessons do not clone page scaffolding.
- Keep the course consistent across locales while preserving page-owned labs and progress behavior.

## Template Slots

- `hero`: title, lead, primary CTA, optional secondary CTA.
- `summary`: lesson overview and key points.
- `deep dive`: optional structured topic/picker-driven explanation block.
- `live lab`: page-owned interaction surface.
- `quiz`: shared `QuizBlock` stack.
- `tips/practice`: short recap, mistakes, or practice prompts.
- `completion CTA`: marks only the current module complete.
- `next lesson CTA`: links to the declared next lesson only.

## Shared vs Custom

- Shared: `LessonPageShell`, `LessonTabs`, `QuizBlock`, `DeepLessonTopicPicker`, `surface` + `section-heading` framing, and the standard tab chrome.
- Custom: setup checklist, JS array explorer, tooling panels, React labs, Effects labs, and Task Manager CRUD.

## Tab Contract

- Use stable lesson tabs: `summary`, `live`, `quiz`, `tips`.
- Tabs keep the same meaning across lessons even when the inner content differs.
- The template owns tab layout; pages own tab content.

## Live Lab Rules

- Live labs may be complex, stateful, and localStorage-backed.
- Live labs must remain page-owned and must not redefine shell, tabs, quiz, or completion flow.
- Deep-dive lessons may use `DeepLessonTopicPicker`, but the data and interaction remain page-owned.

## Completion/Progress Rules

- Completion CTA marks only the current module.
- Next lesson CTA must use the curriculum order and stay route-safe.
- No route changes, storage-key changes, or progress-schema changes in template adoption.

## Do-Not Rules

- Do not turn the template into a mega-component that owns all lesson logic.
- Do not add new lessons, new routes, or new storage keys.
- Do not move page-specific lab behavior into shared template code.

## First Migration Target

- Start with `JsWarmupPage`.
- It uses the common lesson shell with the fewest custom interaction dependencies, so it is the safest proof of the template.

## Success Criteria

- A lesson can be expressed through the same slot contract without cloning page chrome.
- Custom labs still behave exactly as before.
- EN/FA content stays structurally aligned.
- Future lessons can be added by filling slots, not by inventing new page shapes.
