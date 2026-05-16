# Scalability Audit

## Scope

- Audit type: content architecture and maintainability review
- Status: audit only; no code or content changes proposed here are implemented

## Scalability Verdict

The current structure can support a few more lesson expansions without breaking down, but it is already showing early scaling strain in three places: monolithic bilingual content files, repeated deep-lesson page rendering, and a runtime content builder that is growing one custom branch at a time.

Short version:

- Route structure scales well enough right now.
- Shared shell and progress patterns are good foundations.
- Content storage and lesson-page composition will become painful soon if deeper lessons keep expanding in the current shape.

## 1. What Can Scale Well Now

- **Route structure**
  - The locale-prefixed route model is simple and predictable.
  - Module order is centralized in [`src/data/courseManifest.js`](/home/newuser/react/src/data/courseManifest.js).
- **Module manifest**
  - `moduleManifest` is a clean source of truth for IDs, paths, and rewards.
  - Adding a new module is conceptually straightforward.
- **Shared app shell**
  - Shared layout patterns already exist through shell and tab components.
  - This helps RTL/LTR behavior stay consistent across pages.
- **Progress model**
  - localStorage state is versioned and already uses migration hooks.
  - This lowers the risk of simple future progress changes.
- **Interactive lesson strategy**
  - Reusing small live examples inside lesson pages is a strong direction for deeper learning content.

## 2. What Will Become Painful Soon

- **Monolithic locale files**
  - [`src/i18n/course/en.js`](/home/newuser/react/src/i18n/course/en.js) and [`src/i18n/course/fa.js`](/home/newuser/react/src/i18n/course/fa.js) are already very large.
  - As more lessons, quizzes, and simulations are added, EN/FA symmetry will become harder to audit and safer edits will take longer.
- **Repeated deep-lesson rendering**
  - [`src/pages/ToolingPage.jsx`](/home/newuser/react/src/pages/ToolingPage.jsx), [`src/pages/ReactBasicsPage.jsx`](/home/newuser/react/src/pages/ReactBasicsPage.jsx), and [`src/pages/EffectsPage.jsx`](/home/newuser/react/src/pages/EffectsPage.jsx) repeat the same deep-lesson structure with local variations.
  - That duplication increases the cost of layout fixes, accessibility improvements, and future lesson UI changes.
- **Course runtime builder growth**
  - [`src/data/course.js`](/home/newuser/react/src/data/course.js) is still manageable, but it is accumulating one-off deck builders and content wiring rules.
  - That pattern will get brittle as more lesson families need custom data shaping.
- **Quiz model depth**
  - The quiz structure works for current multiple-choice style content.
  - It may get cramped if future lessons need richer question types, step-checking, or simulation-linked feedback.
- **Bundle size**
  - The app still builds successfully, but the main bundle already triggers a Vite chunk-size warning.
  - More lesson content in single entry files will make this worse.

## 3. Recommended Refactors

1. **Split course locale files by module**
   - Break `en.js` and `fa.js` into module-level files or grouped lesson packs.
   - This is the highest-value maintainability improvement.
2. **Extract a shared deep-lesson renderer**
   - Create reusable components for the repeated 11-section lesson structure, topic picker, simulation cards, and example sections.
   - Keep page-specific live labs separate.
3. **Make course content assembly more declarative**
   - Reduce custom deck-building code in [`src/data/course.js`](/home/newuser/react/src/data/course.js).
   - Prefer manifest-driven mapping over one new custom transform per lesson family.
4. **Separate content schema from page wiring more clearly**
   - Keep lesson content, quiz data, and page-only UI helpers easier to reason about.
   - This will help future agents change content without touching runtime logic unnecessarily.
5. **Plan for content-aware bundle control**
   - Revisit code splitting or route-level/language-level content loading before several new modules land.
   - This matters more after the next 2-3 lesson families.

## 4. Refactors To Avoid For Now

- Do not change route structure just for abstraction.
- Do not replace the current progress model or storage keys without a real product need.
- Do not add a global state library yet.
- Do not over-generalize every lesson page before one more similar lesson family confirms the shared pattern.
- Do not add new dependencies to solve documentation or content-shape problems that can be handled locally.

## 5. Highest-Risk Files

- [`src/i18n/course/en.js`](/home/newuser/react/src/i18n/course/en.js)
  - Large, high-churn, easy to make asymmetrical with FA.
- [`src/i18n/course/fa.js`](/home/newuser/react/src/i18n/course/fa.js)
  - Same scaling problem, plus long Persian strings increase visual-risk pressure.
- [`src/data/course.js`](/home/newuser/react/src/data/course.js)
  - Central runtime content builder; easy place for special-case growth.
- [`src/pages/EffectsPage.jsx`](/home/newuser/react/src/pages/EffectsPage.jsx)
  - Good example of the richer lesson pattern, but also a sign of growing UI duplication.
- [`src/pages/ReactBasicsPage.jsx`](/home/newuser/react/src/pages/ReactBasicsPage.jsx)
  - Similar risk: deep content UI plus custom labs in one page file.
- [`src/styles.css`](/home/newuser/react/src/styles.css)
  - Large shared stylesheet; future visual changes may get harder to isolate safely.
- [`src/context/LearningProgressContext.jsx`](/home/newuser/react/src/context/LearningProgressContext.jsx)
  - Stable now, but future progress, quiz, coach, and project expansion may concentrate too much responsibility here.

## 6. Suggested Priority Order For Improvements

1. Split bilingual course content files by module or lesson family.
2. Extract shared deep-lesson presentation components from the tooling/react/effects pages.
3. Simplify `course.js` into clearer manifest-driven content assembly.
4. Add stronger parity/audit automation for EN/FA keys and quiz IDs.
5. Address bundle growth once the next major lesson family lands.

## Notes For Future Expansions

- The next content slice should still be built on the current architecture; the repo does not need a preemptive rewrite first.
- The best time to refactor is before `routing + context + shared state + progress` and `forms + controlled components` add another layer of page duplication and content density.
- Long Persian strings and mobile density should be treated as scaling risks, not just styling bugs.
