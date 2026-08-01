---
name: plan-compass
description: >-
  Stress-tests a plan through dependency-aware, easy-to-answer decision prompts.
  Use when the user wants a plan stress-test, plan review, or decision
  walkthrough with one concrete question at a time. During decision questions,
  use these labels: `Decision N of M: Topic`, `State`, `Question`,
  `Recommendation/default`, `Why this matters`, and `Choices`.
---

# Plan Compass

Stress-test the user's plan without creating an exhausting interrogation.

## Core Loop

Before the first question, map the smallest useful decision tree internally.
Separate discoverable facts from user-owned decisions. Inspect the environment
for facts instead of asking, and ask prerequisite decisions before decisions
that depend on them.

During the decision phase, ask exactly one decision question at a time.

Each question must include:

1. The progress label.
2. A compact state line.
3. The question.
4. Your recommended choice, which is also the default.
5. Why this matters in one sentence.
6. Two or three concrete answer choices.

Use this shape:

```text
Decision 2 of 6: Data ownership

State: Locked: offline storage · Now: ownership · About 4 decisions remain

Question: Who owns the saved draft?

Recommendation/default: A — The user owns the draft.

Why this matters: ownership decides who can edit, delete, and recover it later.

Choices:
- A: User owns it.
- B: Team owns it.
- C: Project owns it.
```

## Interaction Rules

- Do not call the process "grilling" unless the user uses that word first.
- Keep questions short and specific.
- Do not ask broad open-ended questions unless unavoidable.
- Do not ask multiple questions in one response.
- Do not require the user to hold previous answers in memory.
- Keep `State` to one line: locked decisions, the current decision, and the
  approximate number remaining. Summarize older decisions rather than letting
  the line grow.
- Prefer examples over abstract categories.
- If the user cannot choose, narrow the decision instead of explaining more.
- If the user asks for less, output only `Recommendation/default` and `Choices`.
  This is an explicit exception to the normal question format.
- Keep tangents in a private parking lot. Finish the current branch first and
  surface a parked item only when it becomes the next dependency.
- Make progress visible without praise or gamification.

## Progress Format

Use this format:

```text
Decision 2 of 6: Data ownership
```

Choose the total decision count conservatively. Prefer 4 to 6 decisions for a
normal plan. Use fewer when the user asks for a shorter pass. If an answer adds
or removes a branch, update the total openly; do not preserve a false count.

## Confirmation Gate

When the decisions are sufficient, stop asking decision questions and show only:

- `Plan ready for confirmation`
- `Decisions locked`: the agreed decisions in no more than five bullets.
- `Open`: unresolved decisions, or `None`.
- `Next action`: exactly one small, atomic next action.
- `Confirmation`: ask the user to approve the summary or name one change.

This confirmation response replaces the decision labels and is an explicit
exception to the question format.

Do not act on the plan until the user confirms the shared-understanding summary.
After confirmation, act only if the user requested implementation; otherwise
hand off the confirmed plan and next action.

## Stop Conditions

Pause the decision walkthrough when:

- The next decision depends on missing information.
- The user asks to pause, stop, or end the walkthrough.

When pausing, summarize only:

- Decisions made.
- Open decisions.
- One small, atomic next action.

Do not request confirmation while required information is missing or when the
user asks to pause. Preserve the state so the next turn can resume from one
decision.
