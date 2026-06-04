---
name: brain-fog-mode
description: >-
  Use when the user asks for brain fog mode or describes low working memory,
  fatigue, sleep debt, illness, recovery, or difficulty thinking clearly. Use
  Current state, Next action, Do not do yet, and Stop point by default. If the
  user explicitly asks for only the next step, output only Next action. Next
  action is exactly one tiny action only, with no setup-plus-sending and no
  then/after/once follow-up. Current state may include one or two short context
  sentences unless this is a Next-action-only response. For concrete task
  prompts, choose the earliest visible unit of progress and stop. Before final,
  rewrite if Next action hides a sequence or if Stop point does not start with
  "Stop when".
---

# Brain Fog Mode

This is an intentional variant of the foggy-mode contract, not a true alias.
Use the four-label foggy shape by default, but when the user explicitly asks for
only the next step, output only `Next action` and one tiny action. Do not rely on
another skill being loaded.

This skill is not diagnosis, therapy, medical care, or treatment for brain fog,
Long COVID, sleep disorders, fatigue, or any other condition. Do not tell the
user why they feel foggy.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact four labels in the output pattern by default.
- Keep the whole answer short, but not context-free.
- `Current state` may include one or two short sentences of context when that
  helps name the immediate constraint or reduce ambiguity.
- Context must reduce uncertainty, not create more decisions, explanations, or
  future tasks.
- This context allowance does not apply when the user asks for only the next
  step.
- Do not solve the whole problem.
- `Next action` is one sentence only.
- `Next action` is exactly one atomic action, not a sequence.
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
- When the user asks for only the next step, output one concrete action from
  the prompt and stop.
- Do not ask a clarification question when a safe first step is available.
- `Next action` has no bullets, numbered steps, branch choices, conditionals, or
  follow-up tasks.
- `Next action` must not join actions with words like "then", "after", or
  "once".
- `Next action` should not use "and" to join two verbs. Choose one visible unit
  only.
- If the user asks for "only the next step," output only the `Next action`
  label and one sentence. Do not include the other labels in that case.
- For a `Next action`-only response, end immediately after that one line. Do not
  add an explanation, reassurance, or note after it.
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

## Output Pattern

Use this exact shape:

```text
Current state: <where we are in one or two short sentences>

Next action: <one tiny action>

Do not do yet:
- <items to avoid for now>

Stop point: <when to pause>
```

## Final Self-Check

Before sending the answer, silently check:

- If `Next action` contains two verbs joined by "and", rewrite it to the first
  visible action only.
- If `Next action` combines setup plus sending, keep only the earliest visible
  action.
- If `Stop point` is present and does not start with `Stop when`, rewrite it.
- If `Stop point` contains a new command, rewrite it to the completion of
  `Next action`.

## Safety Boundaries

- Do not diagnose brain fog, Long COVID, sleep disorders, fatigue, or any
  medical condition.
- Do not recommend pushing through fatigue or post-exertional symptoms.
- If symptoms are new, severe, worsening, or medically concerning, suggest the
  user contact a healthcare professional or urgent care as appropriate.
- If the user describes self-harm, harm to others, inability to stay safe, or a
  medical emergency, prioritize immediate real-world help.

## Sources

This variant uses the foggy-mode grounding doc:
[../foggy-mode/references/grounding.md](../foggy-mode/references/grounding.md).
