# Content Standard

## Purpose

Use this standard for every future technical lesson expansion in this repo. The goal is to keep lessons deep, beginner-friendly, practical, and consistent across English and Persian.

## Required lesson structure

Every deep lesson must include all 11 parts below:

1. **Simple definition**
   - One plain-language sentence.
   - No jargon pileup.
2. **Why it exists**
   - Explain why the concept, tool, or pattern was created.
   - Include the practical or historical reason if useful.
3. **Problem it solves**
   - Name the difficulty, pain point, or limitation it addresses.
4. **How it works**
   - Explain the internal mechanism at a beginner-friendly level.
   - Be technically accurate, but do not lecture like a spec.
5. **Step-by-step simulation**
   - Show what happens behind the scenes in sequence.
   - Use real cause-and-effect order.
6. **Practical code example**
   - Use a small example the learner can actually read.
   - Match the lesson topic directly.
7. **Before/after comparison**
   - Show the less effective approach and the improved approach.
   - Make the improvement visible and meaningful.
8. **Common beginner mistakes**
   - List the misunderstandings most likely to happen first.
   - Explain why they are mistakes.
9. **Real project usage**
   - Show where this idea appears in production or in this repo.
10. **Mini practice or quiz**

- Include at least one prediction or applied question.

11. **Simple summary**

- End with short takeaways the learner can remember.

## Rules for beginner-friendly explanations

- Start simple, then deepen.
- Prefer concrete language over abstract language.
- Explain new terms before using them heavily.
- Connect the idea to something the learner can already see in the browser, code, or UI.
- When a concept has multiple layers, name the layer clearly.
  - Example: browser DOM vs React element vs real DOM update.
- Do not assume the learner already knows the “why.”
- Use short paragraphs and visible structure.

## Rules for simulations

- Simulations must be sequential.
- Each step should describe:
  - what triggered the step
  - what changed internally
  - what the learner can observe
- Use one concrete scenario, not a vague generality.
- Avoid fake magic words like “then React handles it” without saying how.
- Keep simulations short enough to scan quickly.
- If the topic affects browser behavior, React behavior, or both, say which layer each step belongs to.

## Rules for code examples

- Keep examples small.
- Show only the code needed to teach the point.
- Match the learner’s current level in the path.
- Prefer examples that feel like real UI behavior, not random syntax toys.
- If the example uses a special rule, explain it right after the code.
- Do not use complicated styling, APIs, or architecture unless the lesson is about them.

## Rules for quizzes

- Prefer prediction, debugging, or “what happens next?” questions.
- Avoid pure memorization unless the fact is foundational.
- Wrong answers should reflect real beginner mistakes.
- Explanations must say why the correct answer is right and why the others are misleading.
- Keep each quiz tied to the lesson’s main mental model.

## Rules for avoiding over-explanation

- Depth is required; bloat is not.
- Do not turn one lesson into a full textbook chapter.
- Stop when the learner can:
  - define the concept
  - explain why it exists
  - predict the basic flow
  - use it in a small example
- If advanced edge cases are not needed yet, omit them.
- Prefer one strong example over many weak ones.

## Definition of “done” for a deep lesson

A lesson is done only when:

- all 11 required sections exist
- the explanation is beginner-friendly and technically correct
- the simulation shows real step order
- the code example is practical and readable
- the quiz checks understanding, not just memory
- common mistakes are explicitly called out
- real-world usage is mentioned
- the summary is short and useful
- English and Persian versions match in meaning and structure
- RTL/LTR impact has been checked if the lesson changes visible UI or long text

## Review standard

Before a lesson is considered ready:

- `Product/Curriculum` checks depth, clarity, and learning flow
- `React Domain SME` checks technical correctness
- `Docs/Localization` checks EN/FA consistency and terminology
- `QA` checks structure completeness, quiz quality, and regression risk
