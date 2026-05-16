# Lesson Audit Checklist

Use this checklist after changing lesson content, quizzes, bilingual copy, or progress-related lesson behavior.

## Content parity

- [ ] EN/FA content key parity is preserved
  - Confirm matching topic keys, section keys, and lesson structure in [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js) and [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js)
- [ ] EN/FA quiz ID parity is preserved
- [ ] EN/FA quiz count parity is preserved
- [ ] Terminology matches [GLOSSARY.md](/home/newuser/react/GLOSSARY.md)

## Deep lesson completeness

- [ ] The lesson includes all required deep sections from [CONTENT_STANDARD.md](/home/newuser/react/CONTENT_STANDARD.md)
  - simple definition
  - why it exists
  - problem it solves
  - how it works
  - step-by-step simulation
  - practical code example
  - before/after comparison
  - common beginner mistakes
  - real project usage
  - mini practice or quiz
  - simple summary
- [ ] A real step-by-step simulation exists
- [ ] A practical code example exists
- [ ] Common beginner mistakes are explicitly listed
- [ ] A mini practice or quiz exists
- [ ] The lesson is not definition-only or shallow

## Progress / storage safety

- [ ] If lesson changes touched localStorage, progress, XP, badges, or solved quizzes, migration behavior was checked
- [ ] Existing storage keys were preserved or explicitly migrated
- [ ] Quiz IDs were not changed casually if solved-state persistence depends on them

## Required repo checks

- [ ] `npm run format:check`
- [ ] `npm run check`

## Review gates

- [ ] `QA` reviewed structure completeness and regression risk
- [ ] `Docs/Localization` reviewed EN/FA consistency
- [ ] `React Domain SME` reviewed technical correctness when the lesson is technical
- [ ] `Product/Curriculum` reviewed depth and learner clarity when lesson structure changed
