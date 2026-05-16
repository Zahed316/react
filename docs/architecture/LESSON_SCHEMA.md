# Lesson Schema

## Purpose

- Define the reusable content contract for template-driven lessons.
- Keep lesson data consistent across locales while leaving behavior in the template and page components.

## Lesson-Level Fields

| Field | Purpose |
| --- | --- |
| `id` | Stable lesson identifier. |
| `moduleId` | Course module bucket for progress and navigation. |
| `route` | Locale-aware lesson path. |
| `order` | Curriculum order within the course. |
| `xpReward` | XP awarded when the lesson is completed. |
| `nextId` | Next lesson identifier in sequence. |
| `templateType` | Template variant used to render the lesson. |

## Hero Fields

| Field | Purpose |
| --- | --- |
| `eyebrow` | Small label above the hero title. |
| `title` | Main lesson title. |
| `lead` | Short lesson summary. |
| `primaryAction` | Primary completion CTA label. |
| `secondaryAction` | Optional next-lesson CTA label. |

## Tab Fields

- `summary`
- `live`
- `quiz`
- `tips/practice`

## Summary Fields

| Field | Purpose |
| --- | --- |
| `intro` | One-paragraph lesson overview. |
| `learningGoals` | What the learner should be able to do. |
| `prerequisites` | What should already be known. |
| `keyPoints` | Short takeaways for the summary tab. |

## Deep Topic Fields

| Field | Purpose |
| --- | --- |
| `id` | Stable topic identifier. |
| `title` | Topic title shown in the picker and panels. |
| `definition` | Plain-language explanation. |
| `whyExists` | Why the concept or tool exists. |
| `problem` | Problem the topic solves. |
| `howItWorks` | Mechanism or stepwise explanation. |
| `simulation` | Sequential behind-the-scenes walkthrough. |
| `example` | Small practical example. |
| `beforeAfter` | Improvement comparison. |
| `mistakes` | Common beginner mistakes. |
| `realUsage` | Real project or production usage. |
| `practice` | Prompt or quiz-style practice. |
| `summary` | Short recap for the topic. |

## Live Lab Fields

| Field | Purpose |
| --- | --- |
| `labId` | Stable live-lab identifier. |
| `title` | Lab title. |
| `lead` | Short lab description. |
| `description` | What the lab demonstrates. |
| `pageOwnedStateNote` | Reminder that the lab owns its local interaction/state. |

## Quiz Fields

| Field | Purpose |
| --- | --- |
| `id` | Stable quiz identifier. |
| `question` | Quiz prompt. |
| `options` | Answer choices. |
| `answer` | Correct answer value or index. |
| `explanation` | Why the answer is correct. |
| `misconceptionTag` | Tag for the likely beginner mistake. |

## EN/FA Parity Rules

- Same lesson ids in both locales.
- Same topic ids in both locales.
- Same quiz ids in both locales.
- Same tab ids in both locales.
- Same required field structure in both locales.

## Schema Must Not Own

- Component state.
- Storage keys.
- `document.title` side effects.
- Task Manager CRUD logic.
- Custom live-lab behavior.

## Notes

- This schema is content-only.
- Rendering, interaction, and progress rules remain in the template and page layers defined in `LESSON_TEMPLATE_SPEC.md`.
