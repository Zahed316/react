# Product Strategy

## Vision

React Lab should become an interactive bilingual React course platform, not only a loose sandbox.

It teaches React fundamentals through concise explanations, deep mental models, live examples, simulations, quizzes, progress, and a final project.

## Recommended Direction

| Choice            | Decision                                            |
| ----------------- | --------------------------------------------------- |
| Product type      | Interactive course platform with sandbox-style labs |
| Language strategy | Persian-first experience with English parity        |
| Data model        | Local-first progress using browser storage          |
| Coach             | Rule-based coach for now                            |
| AI/backend        | Postponed until the course MVP proves the need      |

## What This Is

- A guided self-study React course.
- A bilingual RTL/LTR learning app.
- A practical lab with live examples and quizzes.
- A local-first product with progress, XP, badges, and a capstone project.

## What This Is Not

- Not a generic code playground.
- Not a full LMS yet.
- Not an AI tutor yet.
- Not a backend-first product.
- Not a collection of disconnected lessons.

## Target Learner

Persian-first beginner to early-intermediate React learner who:

- knows basic browser usage;
- has basic JavaScript exposure;
- wants visual, practical React practice;
- wants to finish a small real project.

## MVP Success Criteria

- Learner can complete the guided path from setup to project.
- Learner understands core React mental models, not only definitions.
- Each complex topic has simulation, example, quiz, and summary.
- Persian and English content remain structurally aligned.
- Core routes pass responsive RTL/LTR Playwright checks.
- Final project proves CRUD, state, events, persistence, and polish.

## Scope Boundaries

Do now:

- deepen missing lessons;
- improve progressive disclosure;
- strengthen quizzes and simulations;
- keep local progress reliable;
- improve final project milestones.

Do later:

- accounts;
- cloud sync;
- analytics;
- AI hints;
- community features;
- backend services.

## Why AI and Backend Are Postponed

The course needs a strong curriculum spine first. AI, accounts, sync, and telemetry add privacy, cost, evaluation, and infrastructure overhead. They should be added only after the local-first course MVP is useful and stable.
