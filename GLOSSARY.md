# Glossary

Use this glossary as the terminology baseline for lessons, quizzes, UI strings, and documentation. The goal is consistency across English and Persian, not literal translation at any cost.

## React basics

| English term     | Persian term        | Short explanation                                                                     | Usage note                                                                               |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| component        | کامپوننت            | A reusable UI unit in React.                                                          | Keep `کامپوننت` in Persian; it is more natural than forcing a literal equivalent.        |
| props            | props               | Inputs passed into a component from its parent.                                       | Keep `props` in English in Persian text; it is standard in React teaching.               |
| state            | state               | Internal component data that can change and trigger UI updates.                       | Keep `state` in English in Persian text; this matches existing repo usage.               |
| render           | رندر                | Producing visible UI or a UI description from code.                                   | In React lessons, clarify whether it means browser rendering or React rendering.         |
| re-render        | رندر دوباره         | Running the render flow again after props or state change.                            | Use `رندر دوباره` or `دوباره رندر شدن`; stay consistent within one lesson.               |
| hook             | هوک                 | A React function pattern like `useState` or `useEffect` that adds component behavior. | Keep `هوک` as the Persianized form of the English term.                                  |
| useEffect        | useEffect           | React hook for syncing with things outside render, like timers or storage.            | Keep the API name in English exactly as written in code.                                 |
| cleanup          | پاک‌سازی            | The function that clears timers, listeners, or subscriptions created by an effect.    | Prefer `پاک‌سازی` over literal phrases like “تمیزکاری”.                                  |
| dependency array | آرایهٔ dependencyها | The array that tells `useEffect` when to run again based on tracked values.           | Keep `dependency` in English in Persian because it is already common in React education. |

## Browser concepts

| English term   | Persian term   | Short explanation                                                                         | Usage note                                                                                 |
| -------------- | -------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| DOM            | DOM            | The live document tree the browser builds from HTML.                                      | Keep `DOM` in English uppercase. Do not try to translate the acronym inline.               |
| node           | نود            | One item in the DOM tree, such as an element node or text node.                           | `نود` is preferred over awkward literal alternatives.                                      |
| element        | المنت          | A DOM node created from an HTML tag like `div` or `button`.                               | Use `المنت` when discussing browser structure; use “React element” separately when needed. |
| event          | رویداد         | Something the browser reports, like a click, input, or key press.                         | Prefer `رویداد` in Persian explanatory text.                                               |
| browser API    | API مرورگر     | Built-in browser capabilities exposed to JavaScript.                                      | Keep `API` in English uppercase; translate the rest naturally.                             |
| localStorage   | localStorage   | Browser storage for small key-value data that survives refresh.                           | Keep the API name in English exactly as used in code.                                      |
| document.title | document.title | The browser API for changing the current page title.                                      | Keep the code-like API name in English exactly.                                            |
| timer          | تایمر          | A delayed or repeated browser-driven callback, usually via `setTimeout` or `setInterval`. | `تایمر` is clearer than a literal long translation.                                        |

## Tooling

| English term | Persian term | Short explanation                                                      | Usage note                                                                                      |
| ------------ | ------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| npm          | npm          | Node’s default package manager and script runner.                      | Keep the tool name exactly in English lowercase.                                                |
| package.json | package.json | The project file for scripts, metadata, and dependencies.              | Keep the filename exactly as written.                                                           |
| Vite         | Vite         | The dev server and build tool used in this repo.                       | Keep the product name exactly in English.                                                       |
| ESLint       | ESLint       | Static analysis tool for JavaScript and JSX.                           | Keep the product name exactly in English.                                                       |
| Prettier     | Prettier     | Code formatter used to keep style consistent.                          | Keep the product name exactly in English.                                                       |
| linting      | linting      | Static code checking against rules without running the app.            | Prefer `linting` in Persian text, with an explanation instead of forcing a literal replacement. |
| formatting   | فرمت‌بندی    | Making code style consistent in spacing, quotes, wrapping, and layout. | Prefer `فرمت‌بندی` in Persian.                                                                  |
| build        | بیلد         | The production-ready output generation step.                           | `بیلد` is more natural than a fully translated equivalent in this context.                      |
| dev server   | dev server   | The local server used during development for fast feedback.            | Keep `dev server` in English in Persian text; it matches current repo style.                    |

## Project concepts

| English term | Persian term | Short explanation                                             | Usage note                                                                      |
| ------------ | ------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| lesson       | درس          | One learning unit in the app.                                 | Prefer `درس` in Persian learner-facing copy.                                    |
| quiz         | quiz         | A short question block used to test understanding.            | Keep `quiz` in English in Persian text; it already appears throughout the repo. |
| badge        | badge        | A small achievement reward unlocked by progress.              | Keep `badge` in English in Persian text; current UI already does this.          |
| XP           | XP           | Experience points earned from lessons and quizzes.            | Keep `XP` exactly in English uppercase.                                         |
| progress     | پیشرفت       | The learner’s completion and activity status.                 | Prefer `پیشرفت` in Persian explanatory and UI text.                             |
| coach        | کوچ          | The motivational guide panel that reacts to learner progress. | Use `کوچ` because it is already established in the UI.                          |
| route        | route        | A URL path that maps to one page or lesson view.              | Keep `route` in English in Persian technical explanations.                      |
| module       | ماژول        | A major step in the learning path, such as setup or tooling.  | Prefer `ماژول` in Persian for structural course units.                          |

## Usage rules

- Keep code identifiers and API names exactly as written in code.
- Prefer natural Persian learning language around English technical terms instead of forced literal translations.
- If one term stays English in Persian, keep it consistent everywhere.
- When a term can refer to two layers, name the layer explicitly.
  - Example: `DOM element` vs `React element`
- Before changing a commonly used term, check lesson content, quiz copy, UI strings, and this glossary together.
