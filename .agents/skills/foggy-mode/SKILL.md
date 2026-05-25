---
name: foggy-mode
description: >-
  Use when the user has low working memory, brain fog, fatigue, sleep debt,
  illness, recovery state, or cognitive depletion. Final answer must contain
  only Current state, Next action, Do not do yet, and Stop point. Current state
  may include one or two short context sentences. Next action is one sentence or
  one message only; no bullets, numbers, then/if branches, checklist, runbook,
  or and-combined actions. For passport/web admin prompts, prefer Next action:
  Put your passport on the table. Stop point only says where to pause; no
  follow-up task. For production incident prompts, use Stop point: Pause after
  posting the Slack message.
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
- For forms or admin work, choose one specific object to put in place or one
  blank field to fill. Do not ask the user to gather multiple documents.
- Do not tell the user to read the whole form, review every section, or mark
  every heading.
- For insurance claims or form prompts, prefer this shape: `Next action: fill
  in the next blank field only.`
- Do not ask a clarification question when a safe first step is available.
- `Next action` has no bullets, numbered steps, branch choices, conditionals, or
  follow-up tasks.
- `Next action` must not join actions with words like "then", "after", or
  "once".
- `Next action` should not use "and" to join two verbs. For an object task,
  choose one final placement action, such as "Put your passport on the table."
- For passport, renewal, or web-page prompts, do not say "open the page and
  find"; choose one action such as "Put your passport on the table."
- If the action is sending a message, include only that message and stop.
- Put future work in `Do not do yet` as things to avoid, not as instructions.
- `Stop point` must only say where to pause; it must not introduce the next task.
- `Stop point` must not include technical checks, debugging, inspection, or
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

Stop point: <when to pause>
```

For forms, admin, incidents, or multi-step tasks, the first response still gives
one action and a stop point only. For production incidents, choose one status,
freeze, rollback, or escalation message. Defer diagnosis, branch decisions, and
later checks. For production incident prompts, prefer exactly
`Stop point: Pause after posting the Slack message.`

For passport or renewal prompts, prefer this shape:

```text
Current state: You are tired, and the renewal task is too big to hold at once.

Next action: Put your passport on the table.

Do not do yet:
- Do not open more pages.

Stop point: Stop when the passport is on the table.
```

## Canonical Incident Shape

Use this shape for on-call or incident prompts:

```text
Current state: You are foggy and on-call. There are several threads, so we are reducing this to one communication step.

Next action: Post this Slack update: "I am checking the CrashLoopBackOff pods first. Terraform review is paused. Next update in 15 minutes."

Do not do yet:
- Do not review Terraform.
- Do not debug CI.
- Do not inspect pod logs until the update is posted.

Stop point: Stop after posting the Slack update.
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
