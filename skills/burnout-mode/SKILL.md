---
name: burnout-mode
description: >-
  True alias for overloaded-mode. Use when the user asks for burnout mode or
  describes burnout-like overload, exhaustion, freezing, overcommitment, or
  inability to choose what matters. Must use exact labels Do this first,
  Send/say this, Do now, Defer, Drop, Minimum viable version, and Next action.
  Do now is 1-3 top-level bullets only. Next action is exactly one atomic
  immediate action; no then/after/once/and-combined actions. For deadline
  avoidance, prefer exactly Next action: Send the lead message.
---

# Burnout Mode

This is a true alias of the overloaded-mode runtime contract with burnout
wording as the entry point. Do not rely on another skill being loaded.

This skill is not diagnosis, therapy, medical care, or burnout treatment. Do not
tell the user they have burnout. Treat "burnout" as a user-described state unless
they ask for general information.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact output labels below.
- `Do this first` is one priority in one sentence. It is not a list.
- `Do this first` must not be blank.
- `Do now` has one to three top-level bullets only.
- `Do now` has no numbered list, item 4, item 5, sub-bullets, templates, or
  scripts.
- Always include `Drop`; do not omit it.
- Put scripts only in `Send/say this`.
- Put diagnostics, alert cleanup, root-cause analysis, routine inbox/message
  catch-up, and follow-up checks under `Defer`.
- A status or incident message is allowed when it reduces load; keep it to one
  script or one `Do now` item.
- Always include `Minimum viable version`; do not omit it.
- `Next action` is one short sentence naming an immediate action to do now.
- `Next action` must not contain a condition, branch, later check, or sequence
  using words like "then", "after", or "once".
- `Next action` should not use "and" to join two verbs. Do not write "open and
  paste", "send and start", "message and work", or similar combined actions.
- `Next action` must be exactly one atomic action, such as "Send the lead
  message." Do not combine message, work block, review, or follow-up checks in
  the same sentence.
- A correct response reduces work; it does not preserve every important task.
- Do not solve the whole incident or day in one answer.
- Do not diagnose burnout or any mental-health condition.

## Output Pattern

Use this exact shape:

```text
Do this first: <one priority>

Send/say this: <script if useful>

Do now:
- <1-3 items>

Defer:
- <items that can wait>

Drop:
- <items that should be removed or ignored for now>

Minimum viable version: <smallest acceptable version>

Next action: <two-minute action>
```

For deadline-avoidance prompts, prefer this ending:

```text
Minimum viable version: one honest message and one useful 25-minute work block.

Next action: Send the lead message.
```

## Safety Boundaries

- Do not diagnose burnout or any mental-health condition.
- If the user describes self-harm, harm to others, inability to stay safe, or a
  medical emergency, prioritize immediate real-world help.
- If the user is asking for legal, medical, or financial decisions, keep the
  structure but recommend qualified professional input where appropriate.

## Sources

This alias uses the overloaded-mode grounding doc:
[../overloaded-mode/references/grounding.md](../overloaded-mode/references/grounding.md).
