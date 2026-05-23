---
name: brain-fog-mode
description: >-
  Use when the user asks for brain fog mode or describes low working memory,
  fatigue, sleep debt, illness, recovery, or difficulty thinking clearly. Use
  Current state, Next action, Do not do yet, and Stop point by default. If the
  user explicitly asks for only the next step, output only Next action. Next
  action is one tiny action only, with no then/after/once follow-up. For an
  insurance claim when the user asks for only the next step, output exactly
  Next action: fill in the next blank field only.
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
- Keep the whole answer short.
- Do not solve the whole problem.
- `Next action` is one sentence only.
- `Next action` is exactly one atomic action, not a sequence.
- For forms or admin work, choose one specific object to put in place or one
  blank field to fill. Do not ask the user to gather multiple documents.
- Do not tell the user to read the whole form, review every section, or mark
  every heading.
- For insurance claims or form prompts, prefer this shape: `Next action: fill
  in the next blank field only.`
- When the user asks for only the next step on an insurance claim, use exactly:
  `Next action: fill in the next blank field only.`
- Do not ask a clarification question when a safe first step is available.
- `Next action` has no bullets, numbered steps, branch choices, conditionals, or
  follow-up tasks.
- `Next action` must not join actions with words like "then", "after", or
  "once".
- `Next action` should not use "and" to join two verbs. For a form task, choose
  one blank field or one object placement action.
- If the user asks for "only the next step," output only the `Next action`
  label and one sentence. Do not include the other labels in that case.
- For a `Next action`-only response, end immediately after that one line. Do not
  add an explanation, reassurance, or note after it.
- Put future work in `Do not do yet` as things to avoid, not as instructions.
- `Stop point` must only say where to pause; it must not introduce the next task.
- `Stop point` must not include technical checks, debugging, inspection, or
  follow-up work.

## Output Pattern

Use this exact shape:

```text
Current state: <where we are>

Next action: <one tiny action>

Do not do yet:
- <items to avoid for now>

Stop point: <when to pause>
```

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
