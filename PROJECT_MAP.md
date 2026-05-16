# Project Map

## 1. Project purpose

- Bilingual (`fa`/`en`) React learning sandbox with RTL/LTR support.
- Teaches a guided path from setup and tooling to React, effects, and a final task manager project.
- Includes quizzes, XP/badges, local progress persistence, and a rule-based motivational coach.

## 2. Main learning routes/modules

- `/fa` or `/en`: home/dashboard
- `/setup`: environment and prerequisites
- `/tooling`: npm, pnpm, Vite, ESLint, Prettier
- `/js`: JavaScript warm-up
- `/react`: DOM, JSX, rendering, props, state
- `/effects`: `useEffect`, cleanup, persistence, routing notes
- `/project`: task manager capstone

Route wiring lives in [src/App.jsx](/home/newuser/react/src/App.jsx).

## 3. Important files and what they control

- [src/App.jsx](/home/newuser/react/src/App.jsx): locale-aware route tree
- [src/components/AppShell.jsx](/home/newuser/react/src/components/AppShell.jsx): app frame, nav, language switcher, progress summary, coach panel
- [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx): locale state, URL syncing, `dir`/`lang` on `<html>`
- [src/context/LearningProgressContext.jsx](/home/newuser/react/src/context/LearningProgressContext.jsx): completed modules, XP, streaks, solved quizzes, badges, reset
- [src/hooks/useLocalStorageState.js](/home/newuser/react/src/hooks/useLocalStorageState.js): localStorage read/write + legacy migration helper
- [src/data/courseManifest.js](/home/newuser/react/src/data/courseManifest.js): module order, routes, XP rewards, supported locales, deck ordering
- [src/data/course.js](/home/newuser/react/src/data/course.js): builds localized runtime content from manifest + i18n packs
- [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js): English lesson content, quizzes, badges, coach copy
- [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js): Persian lesson content, quizzes, badges, coach copy
- [src/components/QuizBlock.jsx](/home/newuser/react/src/components/QuizBlock.jsx): quiz UI and solved-state XP flow
- [src/utils/getCoachState.js](/home/newuser/react/src/utils/getCoachState.js): rule-based coach state selection
- [src/features/taskManager/TaskManagerLab.jsx](/home/newuser/react/src/features/taskManager/TaskManagerLab.jsx): final capstone feature
- [src/styles.css](/home/newuser/react/src/styles.css): shared layout, RTL/LTR-safe visuals, lesson UI primitives

## 4. Content / i18n flow

- Source content lives in [src/i18n/course/en.js](/home/newuser/react/src/i18n/course/en.js) and [src/i18n/course/fa.js](/home/newuser/react/src/i18n/course/fa.js).
- Common UI strings live in [src/i18n/common/en.js](/home/newuser/react/src/i18n/common/en.js) and [src/i18n/common/fa.js](/home/newuser/react/src/i18n/common/fa.js).
- [src/i18n/resources.js](/home/newuser/react/src/i18n/resources.js) registers both packs.
- [src/hooks/useCourseContent.js](/home/newuser/react/src/hooks/useCourseContent.js) selects localized content through [src/data/course.js](/home/newuser/react/src/data/course.js).
- Locale changes update both the URL and `<html dir>` / `<html lang>` in [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx).

## 5. Quiz flow

- Quiz definitions live under `quizzes` in the course i18n files.
- Pages render quiz arrays with [src/components/QuizBlock.jsx](/home/newuser/react/src/components/QuizBlock.jsx).
- Correct answers call `markQuizSolved()` from [src/context/LearningProgressContext.jsx](/home/newuser/react/src/context/LearningProgressContext.jsx).
- Solved quiz IDs are persisted in localStorage and also feed coach/badge/progress logic.

## 6. Progress and localStorage flow

- Storage helper: [src/hooks/useLocalStorageState.js](/home/newuser/react/src/hooks/useLocalStorageState.js)
- Main persisted keys live in [src/context/LearningProgressContext.jsx](/home/newuser/react/src/context/LearningProgressContext.jsx):
  - completed modules
  - current module
  - gamification state (`xp`, `streakDays`, `lastActiveDate`, `solvedQuizIds`)
- Language preference also persists via [src/context/LanguageContext.jsx](/home/newuser/react/src/context/LanguageContext.jsx).
- Legacy key migration is already present; any storage-key change must preserve migration behavior.

## 7. Coach flow

- [src/utils/getCoachState.js](/home/newuser/react/src/utils/getCoachState.js) turns progress into one of: `start`, `momentum`, `stuck`, `celebration`, `comeback`.
- [src/components/PsychCoachPanel.jsx](/home/newuser/react/src/components/PsychCoachPanel.jsx) reads that state, chooses localized coach copy, and links the learner to the recommended next route.

## 8. Build / test commands

- `npm run dev`: Vite dev server
- `npm run lint`: ESLint
- `npm run build`: production build
- `npm run format:check`: Prettier verification
- `npm run check`: lint + build

## 9. Risky areas

- Bilingual lesson parity between `en.js` and `fa.js`
- RTL/LTR regressions caused by layout or long-text changes
- localStorage key/version changes and migration behavior
- Quiz ID changes, because solved-state persistence depends on stable IDs
- `courseManifest.js` ordering, because routes, module progress, and deck selection all depend on it
- `AppShell` and `LanguageContext`, because they affect every route

## 10. Do-not-touch rules

- Do not change app code when only content needs updating.
- Do not rename persisted localStorage keys without explicit migration handling.
- Do not change quiz IDs casually; treat them as persisted user-progress identifiers.
- Do not break EN/FA structure parity when adding lesson topics or quizzes.
- Do not bypass locale-aware routing; always preserve `/:locale/...` behavior.
- Do not rewrite `.agents/AGENTS.md` unless the task explicitly asks for agent-workflow changes.
