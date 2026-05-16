# Design System Foundation

## Purpose

- Define the visual and UX baseline for reusable lesson components in the React Lab course platform.
- Keep the learning experience consistent across Persian and English while supporting RTL and LTR layouts.
- Reduce cognitive load, preserve accessibility, and keep progress feedback calm and useful.

## Source Alignment

- Follow the product direction in `../product/PRODUCT_STRATEGY.md`.
- Respect the curriculum priorities in `../product/CURRICULUM_ROADMAP.md`.
- Apply the product guardrails in `../product/PRODUCT_DECISIONS.md`.
- Stay compatible with the lesson slot model in `LESSON_TEMPLATE_SPEC.md`.
- Stay compatible with the content contract in `LESSON_SCHEMA.md`.
- If a component reuse plan is added later, it must comply with this foundation.

## 1. Design Principles

- Design for learning first, not decoration first.
- Keep the platform calm, structured, and easy to scan.
- Show the most important information early in each block.
- Use progressive disclosure so depth is available without forcing it upfront.
- Prefer consistent reusable containers over one-off visual treatments.
- Keep the product bilingual by design, with Persian as the primary experience and English as structural parity.
- Treat progress, XP, badges, and completion as support for learning, not as competitive pressure.
- Keep the system friendly to mobile first layouts, then scale cleanly to tablet and desktop.

## 2. Visual Hierarchy Rules

- Every block should answer three questions quickly: what is this, why does it matter, and what should I do next.
- Use one clear heading, one short summary, then supporting details.
- Put the primary action in the most visible position for the block.
- Use typography, spacing, and grouping before color to establish hierarchy.
- Keep supporting metadata smaller and quieter than the main instructional content.
- Reserve strong emphasis for completion, warnings, and important calls to action.
- Do not make every element visually loud; quiet surfaces improve scanning.

## 3. Cognitive-Load Rules

### Chunking

- Split content into short sections with one purpose each.
- Prefer lists, callouts, and small content groups over dense paragraphs.
- Keep related ideas together so the learner does not need to mentally assemble scattered content.

### Progressive Disclosure

- Show a compact summary first, then reveal detail through tabs, accordions, topic pickers, or section drill-downs.
- Keep deep explanation, examples, simulations, and practice separate when that improves comprehension.
- Hide secondary detail until the learner chooses it or the flow clearly needs it.

### Clear Headings

- Use descriptive headings that tell the learner what the section contains.
- Avoid vague labels that force the learner to guess.
- Keep subheadings consistent across lessons so the learner builds a reliable scanning model.

### Limited Visual Noise

- Avoid decorative shapes, busy backgrounds, and unnecessary motion.
- Keep one visual focus per surface.
- Limit the number of competing buttons, badges, and callouts in a single area.
- If something is important, emphasize it through structure first, then color or iconography.

## 4. Color System Guidance

- Use mostly neutral backgrounds for reading surfaces and shells.
- Use calm blue and green tones for learning, trust, focus, and progress.
- Use warm accent colors only for important CTAs, warnings, or attention points.
- Do not overuse saturated colors or large colored panels.
- Keep semantic colors consistent: success, warning, error, and info should always mean the same thing.
- Never rely on color alone to communicate meaning.
- Pair semantic color with text, icon, border, or label so the message still works for color-blind users.
- Expect accessible contrast for all text and controls.
- Body text should meet WCAG AA contrast at minimum; interactive states should remain visible in low-contrast environments.

## 5. Shape and Layout Guidance

- Prefer soft cards, rounded corners, subtle borders, and generous spacing.
- Group related information into clear containers so the learner can process one thing at a time.
- Use spacing rhythm consistently within and between sections.
- Let padding and whitespace do more work than shadows or decorative effects.
- Keep visual containers stable across lesson types so the learner recognizes patterns quickly.
- Use directional icons and arrows carefully so they still make sense in both RTL and LTR.
- Mirror layout direction when needed, but do not change the meaning of the content.
- Avoid shapes or motion that distract from learning or imply game-like spectacle.

## 6. RTL/LTR Layout Rules

- Persian is the primary language experience.
- English content must keep structural parity with Persian content.
- Use logical CSS properties and semantic ordering instead of hardcoded left and right values when possible.
- Prefer `start` and `end` alignment over `left` and `right`.
- Mirror layouts for RTL only when the semantic meaning remains intact.
- Keep icons, arrows, steppers, and progress indicators direction-aware.
- Make tab order follow the semantic reading order in both directions.
- Keep code, IDs, URLs, and technical tokens readable even when surrounded by RTL copy.
- Check mirrored layouts on mobile and desktop so spacing, wrapping, and hierarchy remain stable.

## 7. Lesson Block Layout Rules

### Hero

- Lead with the lesson title, then a short summary of the lesson value.
- Show module context or progress near the top without crowding the title.
- Keep the primary action obvious and calm.
- Use the hero to answer what the lesson is and why it matters before asking for action.

### Summary

- Start with a short overview of the lesson.
- Follow with learning goals and prerequisites.
- End with the key points the learner should remember.
- Keep the summary compact so it can be scanned in seconds.

### Deep Dive

- Present the deep-dive topic list or picker first, then the explanation for the selected topic.
- Structure each topic as definition, why it exists, how it works, example, mistakes, and recap.
- Reveal detail progressively instead of placing all explanation in one long block.

### Live Lab

- Keep the live lab clearly separated from explanatory text.
- Show the task, the live surface, and the state note together.
- Keep lab controls local to the lab and do not let them leak into global page chrome.
- Make feedback immediate but quiet so learners can experiment safely.

### Quiz

- Keep quiz prompts short and unambiguous.
- Show answer choices with enough spacing to support scanning and keyboard use.
- After submission, explain why the answer is correct instead of only showing right or wrong.
- Use success and error states sparingly so the quiz feels encouraging, not noisy.

### Practice and Tips

- Use this area for short recap notes, common mistakes, and practice prompts.
- Keep tips small enough that they feel like support, not another lesson inside the lesson.
- Prefer one practice goal per block.

### Completion CTA

- Use a clear, calm completion action for the current module or lesson.
- Confirm completion without excessive celebration.
- Reinforce the learning milestone with a subtle success state and a visible next step.

### Next Lesson CTA

- Show only the declared next lesson.
- Keep the next step easy to find after completion.
- Make the CTA visually secondary to the lesson content but still highly discoverable.

## 8. Component Design Rules for Future Blocks

### LessonSection

- Use as the standard wrapper for lesson content blocks.
- Include a clear heading, short lead, body content, and optional footer actions.
- Keep the surface consistent across all lesson types.

### QuizPanel

- Keep the prompt, choices, submission, and feedback in one predictable container.
- Support keyboard navigation and accessible labels.
- Keep answer feedback short, specific, and calm.

### SimulationSteps

- Present the steps in order with a clear current step indicator.
- Support a compact summary first, then detailed steps if needed.
- Keep directionality mirrored without changing the logic of the simulation.

### CodeExampleBlock

- Show code with a short contextual label when needed.
- Keep copy actions obvious but not dominant.
- Do not overload the block with secondary UI.

### MistakeList

- Use this block to surface common beginner errors and their fixes.
- Keep each item short and actionable.
- Use warning styling lightly so the block remains readable.

### PracticePrompt

- Keep the task concise and outcome-oriented.
- Show what the learner should do next in plain language.
- Offer a hint only when it helps learning, not to fill space.

### LiveLabFrame

- Group the live surface, controls, and state notes together.
- Keep the frame page-owned when the lab needs custom behavior.
- Ensure the frame still fits the shared lesson shell and template rules.

## 9. Gamification UX Rules

- Make progress visible in a way that helps the learner understand where they are.
- Show XP and badges as reinforcement for learning milestones, not as the main attraction.
- Use completion states to encourage continuation, not competition.
- Keep action feedback immediate but calm.
- Avoid leaderboards, noisy animations, or pressure-heavy streak language unless explicitly requested.
- If a reward is shown, connect it to learning progress and the next useful action.

## 10. Do-Not Rules

- Do not add app code in this document.
- Do not create components here.
- Do not change routes.
- Do not change storage keys.
- Do not add AI, backend, sync, or data features.
- Do not over-design visual effects, motion, or decorative elements.
- Do not introduce layout rules that break RTL, LTR, or responsive behavior.
- Do not weaken accessibility requirements for the sake of style.

## Notes

- This foundation is for reusable lesson components and shared lesson surfaces only.
- It must work alongside the lesson template spec, lesson schema, and product decisions.
- When a future component needs a visual exception, the exception should be explicit and narrow.
