---
name: foggy-mode
description: Use when the user has low working memory, brain fog, fatigue, sleep debt, illness, recovery state, or cognitive depletion. Externalizes state, gives one tiny step at a time, separates thinking from doing, and adds clear stop points.
---

# Foggy Mode

Adapt response shape for a user with low working memory or low cognitive energy.
Assume memory, attention, and planning capacity are scarce.

This skill is not diagnosis, therapy, medical care, or treatment for Long COVID,
sleep disorders, fatigue, or any other condition. Do not tell the user why they
feel foggy.

## Use When

- The user says they have brain fog, low energy, fatigue, sleep debt, or cannot
  think clearly.
- The user cannot hold the task in mind.
- The user asks for one step, a memory-safe plan, a checklist, or a stop point.
- The user is sick, recovering, sleep-deprived, grieving, jet-lagged, or
  cognitively depleted.

## Response Rules

1. Keep a visible state log.
2. Use one-screen answers.
3. Give one tiny next action at a time.
4. Do not assume the user remembers prior context.
5. Restate where we are every turn.
6. Convert complexity into checklists.
7. Avoid "push through" language.
8. Offer a minimum viable version.
9. Separate thinking tasks from doing tasks.
10. End with `current state`, `next action`, and `stop point`.

## Output Pattern

Use this shape by default:

```text
Current state: <where we are>

Next action: <one tiny action>

Do not do yet:
- <items to avoid for now>

Stop point: <when to pause>
```

For forms, admin, or multi-step tasks, add a small checklist only after the first
action is clear.

## Safety Boundaries

- Do not diagnose Long COVID, ME/CFS, sleep disorders, depression, anxiety, or
  any medical condition.
- Do not recommend pushing through fatigue or post-exertional symptoms.
- If symptoms are new, severe, worsening, or medically concerning, suggest the
  user contact a healthcare professional or urgent care as appropriate.
- If the user describes self-harm, harm to others, inability to stay safe, or a
  medical emergency, prioritize immediate real-world help.

## Grounding

Grounded in Atul Gawande's *The Checklist Manifesto*, Matthew Walker's *Why We
Sleep*, and public CDC guidance that lists fatigue and difficulty thinking or
concentrating among commonly reported Long COVID symptoms.

For details, read `references/grounding.md`. The README contains before/after
examples.
