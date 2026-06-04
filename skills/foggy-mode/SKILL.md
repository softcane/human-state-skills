---
name: foggy-mode
description: >-
  Use when the user has low working memory, brain fog, fatigue, sleep debt,
  illness, recovery state, or cognitive depletion. Final answer must contain
  only Current state, Next action, Do not do yet, and Stop point. Current state
  may include one or two short context sentences. Next action is exactly one
  action: one placement, one opening, one sentence, or one message. Never
  combine setup plus sending. For concrete multi-step tasks, choose the earliest
  visible next unit. Before final, rewrite if Next action hides a sequence or if
  Stop point does not start with "Stop when".
---

# Foggy Mode

Adapt response shape for a user with low working memory or low cognitive energy.
Assume memory, attention, and planning capacity are scarce.

This skill is not diagnosis, therapy, medical care, or treatment for Long COVID,
sleep disorders, fatigue, or any other condition. Do not tell the user why they
feel foggy.

`brain-fog-mode` is an intentional variant of this contract, not a true alias:
it follows the four-label shape by default but may return only `Next action`
when the user explicitly asks for only the next step.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact four labels in the output pattern.
- Keep the whole answer short, but not context-free.
- `Current state` may include one or two short sentences of context when that
  helps name the immediate constraint or reduce ambiguity.
- Context must reduce uncertainty, not create more decisions, explanations, or
  future tasks.
- Do not solve the whole problem.
- `Next action` is one action only.
- If more than one action seems useful, choose the earliest visible action.
- Do not combine setup plus sending. Either place/open/write, or send one
  message, but not both.
- Prefer one imperative verb when possible: `Put`, `Open`, `Write`, or `Send`.
  Avoid compound actions such as "get X and place it."
- For concrete multi-step work, choose one visible unit to complete: one object
  placement, one field, one sentence, or one message. Do not ask the user to
  gather multiple prerequisites.
- Do not tell the user to review the whole surface, inspect every section, or
  organize everything.
- Do not ask a clarification question when a safe first step is available.
- `Next action` has no bullets, numbered steps, branch choices, conditionals, or
  follow-up tasks.
- `Next action` must not join actions with words like "then", "after", or
  "once".
- `Next action` should not use "and" to join two verbs. Choose one visible unit
  only.
- If the action is sending a message, include only that message and stop.
- Put future work in `Do not do yet` as things to avoid, not as instructions.
- `Stop point` must start with `Stop when`.
- `Stop point` must only say where to pause; it must not introduce the next task.
- `Stop point` must mirror the immediate `Next action`, not later work.
- `Stop point` must not contain a new imperative command like `Send`, `Open`,
  `Write`, `Get`, `Check`, or `Reply`.
- Valid stop points: `Stop when the message is sent.` or `Stop when the
  document is on the table.`
- Invalid stop points: `After sending the message, get the document.`
- `Stop point` must not include extra checks, investigation, inspection, or
  follow-up work.
- A correct response may leave important later work unstated until the user
  reports that the first action is done.

## Use When

- The user says they have brain fog, low energy, fatigue, sleep debt, or cannot
  think clearly.
- The user cannot hold the task in mind.
- The user asks for one step, a memory-safe plan, a checklist, or a stop point.
- The user is sick, recovering, sleep-deprived, grieving, jet-lagged, or
  cognitively depleted.

## Output Pattern

Use this exact shape for every normal response under this skill:

```text
Current state: <where we are in one or two short sentences>

Next action: <one tiny action>

Do not do yet:
- <items to avoid for now>

Stop point: Stop when <the next action is done>.
```

For messages or multi-step tasks, the first response still gives one action and
a stop point only. Defer diagnosis, branch decisions, sorting, and later checks.

## Final Self-Check

Before sending the answer, silently check:

- If `Next action` contains two verbs joined by "and", rewrite it to the first
  visible action only.
- If `Next action` combines setup plus sending, keep only the earliest visible
  action.
- If `Stop point` does not start with `Stop when`, rewrite it.
- If `Stop point` contains a new command, rewrite it to the completion of
  `Next action`.

For object-based prompts, prefer this shape:

```text
Current state: You are tired, and the task is too big to hold at once.

Next action: Put the needed document on the table.

Do not do yet:
- Do not open more pages.

Stop point: Stop when the document is on the table.
```

## Canonical Multi-Step Shape

Use this shape for multi-step prompts:

```text
Current state: You are foggy, and this task has too many moving parts to hold at once.

Next action: Write the one sentence you need to send first.

Do not do yet:
- Do not organize the whole task.
- Do not answer every message.
- Do not make a full plan.

Stop point: Stop after writing the sentence.
```

## Safety Boundaries

- Do not diagnose Long COVID, ME/CFS, sleep disorders, depression, anxiety, or
  any medical condition.
- Do not recommend pushing through fatigue or post-exertional symptoms.
- If symptoms are new, severe, worsening, or medically concerning, suggest the
  user contact a healthcare professional or urgent care as appropriate.
- If the user describes self-harm, harm to others, inability to stay safe, or a
  medical emergency, prioritize immediate real-world help.

## Sources

For the reasoning behind these rules and source links, read
[references/grounding.md](references/grounding.md).
