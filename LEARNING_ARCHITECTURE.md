# Learning Architecture

## 1. Learning path overview

Current route order:

1. `setup`
2. `tooling`
3. `js`
4. `react`
5. `effects`
6. `project`

Overall, the path has a solid high-level progression:

- environment first
- tools second
- JavaScript refresher before React
- browser/React rendering model before effects
- effects before persistence-heavy project work

The main weakness is not the early sequence. It is the missing bridge between `effects` and `project`.

## 2. Module-by-module learning goal

| Module    | Learning goal                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `setup`   | Remove environment friction and explain the learning workflow.                                          |
| `tooling` | Explain why React projects use npm, Vite, ESLint, and Prettier.                                         |
| `js`      | Refresh array transformation and immutability-adjacent thinking before React state work.                |
| `react`   | Teach DOM/browser foundations, JSX, rendering, props, state, and event-driven UI updates.               |
| `effects` | Teach side effects, cleanup, dependencies, browser synchronization, debounce, timers, and localStorage. |
| `project` | Combine state, forms, list rendering, CRUD, filtering, and persistence in one capstone.                 |

## 3. Prerequisites for each module

| Module    | Assumes the learner already knows                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `setup`   | Very little; only basic computer/browser usage.                                                                        |
| `tooling` | What the environment is and why React needs Node/browser/editor support.                                               |
| `js`      | How to run the app and read basic code examples.                                                                       |
| `react`   | Basic JavaScript data transformation and non-mutation mindset.                                                         |
| `effects` | Rendering, state updates, event handling, and the difference between UI description and browser output.                |
| `project` | State, events, rendering, effects, persistence basics, and enough confidence to read a multi-part interactive feature. |

## 4. Output skill for each module

| Module    | Learner should be able to do by the end                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `setup`   | Prepare the environment and understand the learning flow.                                                  |
| `tooling` | Explain what each main tool does and when it is used.                                                      |
| `js`      | Use `map`, `filter`, and basic transformation patterns without mutating data casually.                     |
| `react`   | Explain how React turns JSX and state into UI updates.                                                     |
| `effects` | Explain when an effect is needed, how cleanup/dependencies work, and how to sync with browser APIs safely. |
| `project` | Build and reason about a small stateful CRUD app with filtering and persistence.                           |

## 5. Connection to next module

| Module    | How it prepares the next one                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| `setup`   | Makes `tooling` concrete instead of abstract.                                                                       |
| `tooling` | Makes `js` and later React work feel like real project development rather than theory.                              |
| `js`      | Gives the learner the array/data habits needed for props, state, and rendering.                                     |
| `react`   | Builds the mental model needed before `useEffect` and external synchronization.                                     |
| `effects` | Introduces timers and localStorage, which are directly useful in the capstone.                                      |
| `project` | Currently acts as the synthesis step, but it absorbs several concepts that do not yet have their own lesson bridge. |

## 6. Missing concepts

The most important missing prerequisite concepts are:

- `forms`
- `controlled components`
- `routing`
- `context`
- `shared state`
- `progress` as an architectural concept

These are not random extras. They are the missing bridge between `effects` and `project`.

Also missing as explicit curriculum links:

- clearer transition from `js` array methods to list rendering in React
- clearer transition from `react` state/events to form handling
- clearer distinction between project-specific persistence and app-wide progress persistence

## 7. Repeated or overlapping concepts

Current overlaps are manageable, but a few are visible:

- `state` appears in both `js` quiz framing and `react`
- `localStorage` appears in `effects` and again in `project`
- `routing notes` currently live inside `effects`, even though routing is not really an effects topic

These overlaps are not fatal, but they should be cleaned up as the curriculum grows.

## 8. Concepts that are too advanced too early

Nothing is severely out of order right now, but these are the pressure points:

- `routing notes` inside `effects` feel early and slightly misplaced
- the `project` module currently expects more form-handling maturity than the curriculum explicitly teaches
- app-level ideas like `progress`, `shared state`, and persistence architecture are present in the product but not yet taught as learner-facing concepts

## 9. Recommended reordering

No urgent reordering is needed for the first five modules.

Recommended future structure:

1. `setup`
2. `tooling`
3. `js`
4. `react`
5. `effects`
6. `routing + context + shared state + progress`
7. `forms + controlled components`
8. `project lab`

If new routes are not added yet, the same curriculum order should still guide content expansion priorities.

## 10. Risks if the content keeps expanding without structure

- The app can become a collection of strong individual lessons that do not build toward each other.
- `project` can turn into a concept dump instead of a capstone.
- `effects` can become the place where unrelated advanced topics get parked.
- EN/FA content may stay technically correct but drift pedagogically if module purpose is not kept explicit.
- Learners may understand isolated explanations but still not know what skill they are supposed to gain before moving on.

## Main conclusion

The current architecture is mostly coherent through `effects`.

The main curriculum problem is not early ordering. It is the missing middle layer between `effects` and `project`:

- routing
- context
- shared state
- progress
- forms
- controlled components

Those concepts should be treated as explicit connective tissue, not left to the project lesson to absorb implicitly.
