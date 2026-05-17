# React Lab

A bilingual React course platform for learning by doing. The curriculum is Persian-first with English parity, supports RTL and LTR layouts, and stores learner progress locally in `localStorage`.

## What it includes

- Locale-aware routing for Persian and English lessons
- A completed curriculum with a final `Task Manager` capstone
- Quiz, tips, summary, and deep-dive lesson panels
- Page-owned lesson state and app-wide progress tracking
- Accessible, keyboard-friendly learning interactions

## Current curriculum

1. `setup`
2. `tooling`
3. `js`
4. `react`
5. `events-forms`
6. `effects`
7. `routing`
8. `context-state`
9. `project-architecture`
10. `testing-accessibility`
11. `project`

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run qa
```

## Notes

- The course is intentionally bilingual, with Persian as the primary learning experience and English kept in parity.
- Route, content, manifest, and completion flow changes should stay aligned.
- Lesson content is loaded on demand per locale so the shared entry bundle stays smaller.
- The project is designed to remain a learning platform, not a general-purpose app framework.

## Agent workflow

For development, review, or content changes, start from `.agents/AGENTS.md`. The Agent Admin should scope the task first and then hand it to the appropriate specialist agent.
