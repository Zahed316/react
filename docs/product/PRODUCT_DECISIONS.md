# Product Decisions

Short ADR-style decisions for future agents.

## ADR-001: Course-first product

Decision: React Lab is an interactive course platform with lab-style practice, not a loose sandbox.

Why: The repo already has ordered modules, progress, quizzes, and a final project. Future work should strengthen the learning path.

## ADR-002: Persian-first with English parity

Decision: Persian is the primary learner experience, but English must keep structural parity.

Why: RTL is a core differentiator. English parity keeps the architecture clean and the content reusable.

## ADR-003: Local-first progress

Decision: Progress, XP, badges, streaks, and quiz state stay in localStorage for MVP.

Why: Local-first keeps the app simple, private, and deployable as a static site.

## ADR-004: Rule-based coach for now

Decision: The coach stays deterministic until curriculum, privacy, and evaluation needs justify AI.

Why: A rule-based coach is easier to test, translate, and keep safe.

## ADR-005: No backend or AI until justified

Decision: Do not add backend, accounts, telemetry, cloud sync, or AI hints without explicit product approval.

Why: These add privacy, infrastructure, and maintenance cost before the course MVP needs them.

## ADR-006: Deep lesson format required

Decision: Complex topics must include definition, why it exists, problem, mechanism, simulation, example, mistakes, usage, practice, and summary.

Why: The product value is deep beginner understanding, not glossary-level definitions.

## ADR-007: Playwright QA stays required

Decision: Route, RTL/LTR, viewport, tab, quiz, and live-panel smoke coverage must stay green for production-facing changes.

Why: Bilingual responsive regressions are high-risk for this product.

## ADR-008: Avoid unrelated rewrites

Decision: Agents must make small, scoped changes and avoid rewriting unrelated lessons, routes, or storage keys.

Why: The course is content-heavy; uncontrolled rewrites create parity and regression risk.
