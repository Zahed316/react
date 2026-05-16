# Content Dependency Graph

Use this graph to keep lesson expansion cumulative. The goal is practical sequencing, not academic completeness.

## Concept dependency table

| Concept               | Required previous concepts                                                | Where it is currently taught                     | Where it is used later                                              | Missing support lesson, if any                                       | Risk level |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------- |
| browser               | none                                                                      | `setup`                                          | all modules                                                         | none                                                                 | low        |
| DevTools              | browser                                                                   | `setup`                                          | `react`, `effects`, `project` debugging mindset                     | none                                                                 | low        |
| npm                   | browser, basic environment                                                | `setup`, `tooling`                               | all local workflow                                                  | none                                                                 | low        |
| Vite                  | npm                                                                       | `tooling`                                        | all app development and live learning loop                          | none                                                                 | low        |
| ESLint                | npm, basic code reading                                                   | `tooling`                                        | all code tasks and repo checks                                      | none                                                                 | low        |
| JavaScript variables  | basic JavaScript reading                                                  | implied in `js`                                  | `react`, `effects`, `project`                                       | deeper JS foundations if JS module expands                           | medium     |
| arrays                | JavaScript variables                                                      | `js`                                             | list rendering, filtering, task manager                             | none                                                                 | low        |
| objects               | JavaScript variables                                                      | implied in `js` and examples                     | props, state, task manager items, progress state                    | explicit object/state lesson could help                              | medium     |
| functions             | JavaScript variables                                                      | implied in `js`                                  | components, handlers, hooks, effects                                | explicit function refresher could help                               | medium     |
| events                | browser, DOM                                                              | implied in `react` live examples                 | event handling, forms, project interactions                         | dedicated events lesson would help                                   | medium     |
| DOM                   | browser                                                                   | `react`                                          | events, rendering, browser APIs, effects                            | none                                                                 | low        |
| JSX                   | JavaScript functions, DOM basics                                          | `react`                                          | components, props, state, project UI                                | none                                                                 | low        |
| component             | JSX, functions                                                            | `react`                                          | props, state, effects, project composition                          | none                                                                 | low        |
| props                 | component                                                                 | `react`                                          | project composition, shared state discussions                       | none                                                                 | low        |
| state                 | component, props, arrays                                                  | `react`                                          | effects, forms, project, progress                                   | none                                                                 | low        |
| render                | JSX, component, state                                                     | `react`                                          | re-render, effects, derived state                                   | none                                                                 | low        |
| re-render             | render, state, props                                                      | `react`                                          | effects dependencies, project updates                               | none                                                                 | low        |
| event handling        | events, state, re-render                                                  | `react`                                          | forms, controlled components, project actions                       | dedicated events/forms bridge                                        | medium     |
| forms                 | event handling, state                                                     | only implicit in `project`                       | controlled components, task manager CRUD                            | yes: forms lesson                                                    | high       |
| controlled components | forms, state, event handling                                              | only implicit in `project`                       | task manager inputs, search, edit flows                             | yes: controlled components lesson                                    | high       |
| useEffect             | render, re-render, state, browser APIs idea                               | `effects`                                        | localStorage sync, debounce, timers, title sync                     | none                                                                 | low        |
| cleanup               | useEffect, timers/listeners                                               | `effects`                                        | debounce, intervals, future subscriptions                           | none                                                                 | low        |
| dependency array      | useEffect, state, re-render                                               | `effects`                                        | all future effect-based sync                                        | none                                                                 | low        |
| browser APIs          | browser, DOM                                                              | `effects`                                        | timers, `document.title`, `localStorage`, future routing side notes | none                                                                 | medium     |
| localStorage          | browser APIs, useEffect or persistence model                              | `effects`, `project`                             | note saver, progress persistence, task manager                      | separate persistence architecture lesson could help                  | medium     |
| routing               | browser path idea, components                                             | only lightly in `effects` notes and app behavior | navigation, module transitions, future app structure                | yes: routing lesson                                                  | high       |
| context               | state, component tree, props limits                                       | not taught yet                                   | shared state, progress architecture, coach state                    | yes: context lesson                                                  | high       |
| shared state          | state, context or lifting state up                                        | not taught yet                                   | progress, quiz state, coach state, project scaling                  | yes: shared state lesson                                             | high       |
| progress              | state, localStorage, shared state                                         | only product behavior, not taught explicitly     | badges, XP, coach, module completion                                | yes: progress architecture lesson                                    | high       |
| quiz state            | state, events, progress                                                   | implied across quiz UI                           | solved quiz persistence, badges, coach logic                        | support inside progress/shared-state lesson                          | medium     |
| coach state           | progress, shared state, derived state                                     | not taught explicitly; only product behavior     | motivational panel, future adaptive logic boundaries                | support inside progress/shared-state lesson                          | medium     |
| task manager project  | arrays, state, event handling, forms, controlled components, localStorage | `project`                                        | capstone synthesis                                                  | yes: forms + routing/context/progress bridge before deeper expansion | high       |

## Suggested teaching order

1. browser
2. DevTools
3. npm
4. Vite
5. ESLint
6. JavaScript variables
7. arrays
8. objects
9. functions
10. DOM
11. events
12. JSX
13. component
14. props
15. state
16. render
17. re-render
18. event handling
19. useEffect
20. cleanup
21. dependency array
22. browser APIs
23. localStorage
24. routing
25. context
26. shared state
27. progress
28. quiz state
29. coach state
30. forms
31. controlled components
32. task manager project

## Concepts that need deeper explanation before future lessons

- `objects`
- `functions`
- `events`
- `forms`
- `controlled components`
- `routing`
- `context`
- `shared state`
- `progress`

These are the weakest prerequisite links in the current path.

## Concepts that should not be introduced too early

- `useEffect` before render/state are understood
- `dependency array` before the learner understands rerendering
- `context` before props/state/component tree basics
- `shared state` before local component state is stable
- `progress` architecture before storage and shared state are explained
- `task manager project` before forms and controlled inputs are explicit

## Concepts that should repeat with increasing depth

- `state`
- `render`
- `re-render`
- `events`
- `browser APIs`
- `localStorage`
- `progress`

These should appear more than once, but each repeat should move from:

- simple definition
- to mechanism
- to application
- to architecture

## Main planning takeaway

The highest-risk dependency gap is:

- `effects` -> `routing/context/shared state/progress/forms` -> `project`

Future lesson expansion should fill that middle layer before pushing the capstone deeper.
