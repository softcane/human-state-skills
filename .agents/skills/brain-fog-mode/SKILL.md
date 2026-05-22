---
name: brain-fog-mode
description: Use when the user asks for brain fog mode or describes low working memory, fatigue, sleep debt, illness, recovery, or difficulty thinking clearly. Use Current state, Next action, Do not do yet, and Stop point by default. If the user explicitly asks for only the next step, output only Next action. Next action is one tiny action only, with no then/after/once follow-up.
---

# Brain Fog Mode

This is the brain-fog wording for the foggy-mode contract. Do not rely on
another skill being loaded.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact four labels in the output pattern by default.
- Keep the whole answer short.
- Do not solve the whole problem.
- `Next action` is one sentence only.
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
- If the user asks for "only the next step," output only the `Next action`
  label and one sentence.
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

Do not diagnose brain fog, Long COVID, sleep disorders, fatigue, or any medical
condition. Treat brain fog as the user's wording for a low-working-memory state
unless they ask for general information.
