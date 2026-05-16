# Known Risks

Use this file as a quick pre-flight risk scan before changing lessons, quizzes, layout, or progress behavior.

- **Long Persian strings**
  - Can overflow cards, tabs, and buttons faster than English strings.
- **Mobile visual density**
  - Deep lessons can become too crowded on small screens.
- **EN/FA mismatch**
  - Topic keys, section structure, or meaning can drift between locales.
- **Quiz ID mismatch**
  - Changed or inconsistent quiz IDs break solved-state continuity.
- **localStorage migration bugs**
  - Renaming keys or changing stored shapes can silently lose progress.
- **Unsafe user input rendering**
  - Any future rendering of learner-entered text must stay safe and avoid HTML injection patterns.
- **Shallow explanations**
  - Lessons can slip into definition-only copy without real mechanism, simulation, or practice.
- **Unrelated rewrites**
  - Content tasks can accidentally expand into app-wide refactors or style churn.
- **Overusing `useEffect`**
  - Future educational examples may teach effects where plain render/state logic is enough.
- **Activating AI/ML or Data agents too early**
  - Adaptive tutoring, analytics, sync, or personalization should remain out of scope until explicitly approved.

## Use this file when

- scoping a task
- checking acceptance criteria
- deciding reviewers
- writing the final risk note in a task report
