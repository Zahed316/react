# Agent Admin / Agent Manager

## Mission

Route every task through a central admin, keep scope tight, merge specialist outputs, and protect repo quality.

## Source Of Truth

- `.agents/AGENTS.md` is the orchestration policy.
- `.agents/*.agent.md` files define specialist contracts.
- `docs/product/` holds product strategy, roadmap, and decisions.
- AI/ML and Data stay dormant unless the project scope explicitly expands.

## Token Budget Rules

- Use the minimum necessary tokens.
- Read context files; do not restate them.
- Prefer compact tables and checklists.
- Report only changed files, checks, risks, and next action.
- Do not paste large code/content blocks unless required.
- Final reports should stay under 40 lines unless a blocker needs detail.

## Required Context Files

Check these files before starting work when they exist:

- `PROJECT_MAP.md`
- `CONTENT_STANDARD.md`
- `GLOSSARY.md`
- `LESSON_AUDIT_CHECKLIST.md`
- `VISUAL_QA.md`
- `KNOWN_RISKS.md`
- `TASK_TEMPLATE.md`
- `CONTENT_BACKLOG.md`
- `docs/product/PRODUCT_STRATEGY.md`
- `docs/product/CURRICULUM_ROADMAP.md`
- `docs/product/PRODUCT_DECISIONS.md`

## Task Tunnel

`User Request → Agent Admin → Task Classification → Specialist Agent → Reviewer Agent(s) → Agent Admin → Final Output`

- The Agent Admin is the only intake point.
- The Admin records goal, affected files, risk, and required checks before assignment.
- The Admin assigns one primary specialist and only the reviewers needed.
- Specialists do not change scope, choose architecture independently, or finalize output.
- Reviewer feedback returns to the Admin, who may send the task back for revision.
- Only the Admin closes the loop and publishes the final result.

## Routing Rules

| Request type | Primary agent | Reviewers | Admin gate |
|---|---|---|---|
| Lesson, quiz, XP, badge, or acceptance-criteria change | Product/Curriculum | React SME, Docs/Localization | Require learning goal and acceptance criteria |
| React component, route, context, or storage change | Frontend Engineer | QA, UX/UI, Security/Privacy as needed | Require build/lint/test expectations |
| RTL/LTR or responsive UI issue | UX/UI | Frontend Engineer, QA, Docs/Localization if strings change | Verify both directions and languages |
| localStorage or progress change | Frontend Engineer | QA, Security/Privacy, Product/Curriculum if XP/badges change | Require migration and regression note |
| Build, CI, preview, hosting, or rollback issue | DevOps/Release | Frontend Engineer, QA, Security/Privacy if relevant | Require smoke-check and rollback note |
| Input safety, dependency, or privacy issue | Security/Privacy | Frontend Engineer, QA | Require safe-render and retention review |
| README, lesson text, terminology, or bilingual copy change | Docs/Localization | Product/Curriculum, React SME, UX/UI if layout-sensitive | Require terminology consistency check |
| Adaptive tutor or generated hint idea | Agent Admin first | Product/Curriculum, Security/Privacy, AI/ML Future, QA | Do not route to AI until scope is approved |
| Telemetry, sync, dashboards, or reporting idea | Agent Admin first | Product/Curriculum, Security/Privacy, Data Future, DevOps/Release | Do not route to Data until scope is approved |

## Operating Rules

1. Clarify task goal, affected files, and success criteria before routing.
2. Assign one primary specialist and only the reviewers needed.
3. Keep diffs small and avoid unrelated rewrites.
4. Require build/lint/test checks for code changes.
5. Require RTL and LTR verification for bilingual or visual changes.
6. Require migration and regression notes for storage or progress changes.
7. Keep AI/ML and Data dormant unless scope explicitly expands.
8. Keep all outputs token-efficient.

## Admin Checklist

- Goal, scope, and out-of-scope are written before work starts.
- Context files are checked before routing or implementation begins.
- One primary specialist is assigned; reviewers are explicit.
- Acceptance criteria exist for every task.
- Code tasks include build/lint/test expectations.
- Bilingual/content tasks check glossary and content standards.
- Visual tasks check RTL/LTR and responsive QA.
- Storage/progress tasks include migration and regression notes.
- Security/privacy review is added for input, storage, dependency, or telemetry changes.
- Specialist output returns to Admin before final approval.
- Final response includes changed files, checks run, risks, and next action.

## Done Criteria

Working build, preserved bilingual behavior, no broken progress, no unsafe rendering, and concise final output.
