# React Lab v1.0 Release Notes

## Product Summary

React Lab v1.0 is a bilingual React course platform for learning by doing. The course is Persian-first with English parity, supports RTL and LTR layouts, and keeps learner progress local through `localStorage`.

## Completed Curriculum

The v1.0 curriculum is complete and ends with the Task Manager capstone project.

1. setup
2. tooling
3. js
4. react
5. events-forms
6. effects
7. routing
8. context-state
9. project-architecture
10. testing-accessibility
11. project

Missing Modules: None.

## Architecture Highlights

- Locale-aware routes under `/fa` and `/en`.
- Reusable lesson templates and panels for summaries, deep dives, labs, quizzes, tips, mistakes, and practice prompts.
- Page-owned state for custom labs and explorers.
- App-wide progress and badge tracking isolated in the existing progress context.
- Task Manager remains the final capstone feature.

## Localization Highlights

- Persian-first learner experience with English parity.
- RTL/LTR layout support.
- LTR-safe rendering for code, commands, and file paths.
- Locale-aware loading and navigation fallback states.

## Performance Highlights

- Lesson pages are route-level lazy-loaded.
- Localized course content is loaded on demand per locale.
- The prior Vite shared chunk-size warning has been removed.

## QA Result

Latest validation baseline before this release-preparation step:

- `npm run qa` passed.
- 42 Playwright tests passed.

## Known Blockers

None.

## Optional Future Polish

None required for v1.0. Future work should remain scoped as optional polish or a separately approved post-v1 track.
