---
name: plan-compass
description: >-
  Stress-tests a plan through low-working-memory-friendly decision prompts. Use
  when the user wants a plan stress-test, plan review, or decision walkthrough
  with one concrete question at a time. Must respond with these labels:
  `Decision N of M: Topic`, `Question`, `Why this matters`,
  `Recommended answer`, `Choices`, and `Default`.
---

# Plan Compass

Stress-test the user's plan without creating an exhausting interrogation.

## Core Loop

Ask exactly one question at a time.

Each question must include:

1. The progress label.
2. The question.
3. Why this matters in one sentence.
4. Your recommended answer.
5. Two or three concrete answer choices.
6. A suggested default if the user is unsure.

Use this shape:

```text
Decision 2 of 6: Data ownership

Question: Who owns the saved draft?

Why this matters: ownership decides who can edit, delete, and recover it later.

Recommended answer: The user owns the draft.

Choices:
- A: User owns it.
- B: Team owns it.
- C: Project owns it.

Default: A.
```

## Interaction Rules

- Do not call the process "grilling" unless the user uses that word first.
- Keep questions short and specific.
- Do not ask broad open-ended questions unless unavoidable.
- Do not ask multiple questions in one response.
- Do not require the user to hold previous answers in memory.
- Restate only the current decision and the immediate consequence.
- Prefer examples over abstract categories.
- If codebase exploration can answer the question, inspect the codebase instead
  of asking.
- If the user seems stuck, narrow the decision instead of explaining more.
- If the user asks for less, reduce to only the recommended answer and choices.

## Progress Format

Use this format:

```text
Decision 2 of 6: Data ownership
```

Choose the total decision count conservatively. Prefer 4 to 6 decisions for a
normal plan. Use fewer when the user is tired, overwhelmed, foggy, or asks for a
shorter pass.

## Stop Conditions

Pause the decision walkthrough when:

- The next decision depends on missing information.
- The user has answered enough to produce a useful plan.
- The user says they are overwhelmed, tired, foggy, or done.

When pausing, summarize only:

- Decisions made.
- Open decisions.
- Next useful action.
