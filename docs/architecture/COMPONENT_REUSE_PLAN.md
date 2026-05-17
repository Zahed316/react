# Component Reuse Plan

## Purpose

- Define the reusable lesson UI blocks from the lowest-level building blocks upward.
- Keep lesson presentation aligned with the design system foundation before any component implementation starts.
- Preserve page-owned labs, state, routing, and storage behavior while reducing repeated UI scaffolding.

## Source Alignment

- Follow `DESIGN_SYSTEM_FOUNDATION.md` for cognitive load, RTL/LTR, accessibility, color, and layout rules.
- Stay compatible with `LESSON_TEMPLATE_SPEC.md` and `LESSON_SCHEMA.md`.
- Reuse the existing shared components instead of duplicating lesson chrome.

## Existing Shared Components And Current Roles

- `LessonPageShell`: page-level hero shell that owns the lesson title, lead, primary CTA, optional secondary CTA, and wraps the lesson content.
- `LessonTabs`: shared tablist and tab-panel system for `summary`, `live`, `quiz`, and `tips`, including hash-aware tab selection and focus/scroll behavior.
- `QuizBlock`: current quiz card that owns question rendering, option selection, reveal state, XP flow, and solved progress updates.
- `DeepLessonTopicPicker`: current topic selector for deep-dive lessons that owns the topic switching UI only.

## Repeated UI Patterns That Should Become Shared Blocks

- Standard lesson sections with a heading, short lead, body content, and optional actions.
- Structured code examples with labels, readable formatting, and optional copy affordances.
- Ordered simulation walkthroughs with a visible current step.
- Mistake summaries that group common beginner errors and fixes.
- Short practice prompts that ask for one next action.
- Calm progress indicators for completion, XP, and milestone visibility.
- Quiz surfaces that separate prompt, options, answer feedback, and progress state.
- Deep-dive panels that combine topic picking with explanatory content.
- Summary panels that always lead with the most important overview.
- Tips panels that keep recap, reminders, and practice notes lightweight.
- Live lab frames that group the interactive surface with local guidance and state notes.
- A thin lesson template that only composes proven blocks and does not own content logic.

## Proposed Components, From Lowest-Level Upward

### `LessonSection`

- Responsibility: standard section wrapper for lesson content blocks.
- Owns: heading, short lead, body slot, optional footer actions, and section framing.
- Must not own: page routing, storage, quiz state, lab state, or content fetching.
- UX rule: put the answer to "what is this" and "why does it matter" at the top.
- RTL/LTR concern: use logical spacing and semantic order so the section reads correctly in both directions.
- Visual guidance: soft surface, rounded corners, subtle border, clear spacing, minimal decoration.

### `CodeExampleBlock`

- Responsibility: present small code examples with context.
- Owns: code label, code content, optional notes, and optional copy affordance.
- Must not own: live execution, route changes, or page-level state.
- UX rule: make the example scannable before it becomes detailed.
- RTL/LTR concern: preserve code token order and keep surrounding labels direction-aware.
- Visual guidance: neutral surface, monospace body, compact header, no noisy chrome.

### `SimulationSteps`

- Responsibility: show a step-by-step conceptual or interaction simulation.
- Owns: ordered steps, current-step state, and short per-step descriptions.
- Must not own: global progress, task completion, or unrelated lesson state.
- UX rule: reveal one step at a time when needed, but keep the sequence obvious.
- RTL/LTR concern: step ordering and directional markers must mirror without changing meaning.
- Visual guidance: grouped steps, clear current-step emphasis, calm progress styling.

### `MistakeList`

- Responsibility: surface common beginner mistakes and fixes.
- Owns: mistake label, short explanation, fix guidance, and warning framing.
- Must not own: blocking validation logic or runtime error handling.
- UX rule: keep warnings useful and brief so they reduce confusion instead of increasing it.
- RTL/LTR concern: keep icon direction neutral and ensure labels still read naturally when mirrored.
- Visual guidance: light warning treatment, readable list spacing, no heavy red panels.

### `PracticePrompt`

- Responsibility: give one small action that reinforces the lesson.
- Owns: prompt text, optional hint, and expected learner action.
- Must not own: scoring logic, heavy feedback systems, or multi-step lab state.
- UX rule: ask for one next step only so cognitive load stays low.
- RTL/LTR concern: ensure instruction order remains natural in both Persian and English.
- Visual guidance: compact card, subtle emphasis, and a secondary hint area only when needed.

### `ProgressIndicator`

- Responsibility: show learning progress, completion, or milestone status.
- Owns: progress label, percentage or step state, and calm feedback text.
- Must not own: leaderboard logic, competitive ranking, or noisy celebration.
- UX rule: make progress visible but emotionally quiet.
- RTL/LTR concern: progress direction, icons, and labels must work in both mirrored and non-mirrored layouts.
- Visual guidance: small calm bar or pill-based status, neutral background, restrained accent color.

### `QuizPanel`

- Responsibility: wrap a quiz prompt, answer choices, feedback, and progress.
- Owns: question framing, answer interaction, feedback states, and XP/success messaging.
- Must not own: page navigation, route logic, or unrelated course state.
- UX rule: keep answer submission immediate and feedback calm, specific, and encouraging.
- RTL/LTR concern: option order, focus order, and any directional feedback must be correct in both layouts.
- Visual guidance: clear card hierarchy, strong spacing between options, accessible states, restrained color use.

### `DeepDivePanel`

- Responsibility: host the deep-dive topic picker and the selected topic content.
- Owns: topic navigation, selection state, and the structured explanation area.
- Must not own: page-specific data loading patterns, global course progress, or storage keys.
- UX rule: present the topic list first, then progressively disclose detail for the selected topic.
- RTL/LTR concern: picker order and directional affordances must remain semantically correct when mirrored.
- Visual guidance: split into a compact selector and a readable explanation surface.

### `SummaryPanel`

- Responsibility: provide the compact lesson overview.
- Owns: intro text, learning goals, prerequisites, and key points.
- Must not own: quiz behavior, lab execution, or deep-dive selection.
- UX rule: answer what the lesson is and why it matters before showing supporting detail.
- RTL/LTR concern: keep the reading order consistent with the active language direction.
- Visual guidance: concise surface with a strong heading and clear grouped subcontent.

### `TipsPanel`

- Responsibility: hold recap notes, practice reminders, and common pitfalls.
- Owns: short tips, quick reminders, and light practice cues.
- Must not own: deep explanations or long tutorials.
- UX rule: keep the block short so it feels like support, not another lesson.
- RTL/LTR concern: avoid directional phrasing that depends on left/right.
- Visual guidance: quiet surface, compact list, minimal emphasis.

### `LiveLabFrame`

- Responsibility: frame the interactive lab surface and its local guidance.
- Owns: task prompt, local controls, state note, and lab-specific content grouping.
- Must not own: shared shell behavior, routing, document title, or storage-key ownership.
- UX rule: keep the live surface isolated so learners can experiment without losing orientation.
- RTL/LTR concern: controls, labels, and layout must mirror cleanly without changing semantics.
- Visual guidance: clear grouped frame, strong containment, calm feedback, no decorative effects.

### `LessonTemplate` (thin)

- Responsibility: compose proven blocks into the standard lesson page structure.
- Owns: slot composition, block ordering, and shell-to-block wiring.
- Must not own: page-specific lab logic, custom progress rules, or content authoring details.
- UX rule: stay thin so the template supports consistency without becoming a mega-component.
- RTL/LTR concern: preserve semantic reading order and tab behavior across locales.
- Visual guidance: use the existing shell language and do not introduce a new visual system.

## What Must Stay Page-Owned

- Setup checklist.
- JS explorer.
- Tooling panels.
- React labs.
- Effects labs.
- Task Manager CRUD.
- Storage keys.
- `document.title` behavior.
- Any page-specific lab or explanation logic that does not belong in a shared block.

## First Implementation Order

1. `LessonSection`
2. `CodeExampleBlock`
3. `SimulationSteps`
4. `MistakeList` and `PracticePrompt`
5. `QuizPanel`
6. `LiveLabFrame`
7. `LessonTemplate` only after the blocks above are proven

## First Migration Target

- `JsWarmupPage`
- It already uses the common lesson shell with relatively low interaction complexity, so it is the safest starting point.

## QA Expectations

- Docs-only changes: run `npm run format:check`.
- Code changes later: run `npm run check:all` and `npx playwright test`.
- Verify EN/FA parity for structure, not just copy.
- Verify RTL/LTR layout behavior in mirrored and non-mirrored states.
- Verify mobile, tablet, and desktop readability before expanding reuse.

## Do-Not Rules

- Do not change app code in this plan.
- Do not create components yet.
- Do not change routes.
- Do not change storage keys.
- Do not add new lessons.
- Do not introduce AI, backend, or data features.
- Do not over-design visual effects or motion.

## Notes

- This plan is intentionally implementation-free.
- Shared blocks should be introduced only after the design foundation and template rules stay stable.
- Any future exception should be narrow, explicit, and documented.
- The reusable lesson stack is now validated across all current lesson pages, including `ProjectPage`.
