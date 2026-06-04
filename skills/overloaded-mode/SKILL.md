---
name: overloaded-mode
description: >-
  Use when the user is overwhelmed, frozen, overcommitted, burnout-adjacent, or
  unable to decide what matters. Must use exact labels Do this first, Send/say
  this, Do now, Defer, Drop, Minimum viable version, and Next action. Do now is
  1-3 top-level bullets only. Next action is exactly one atomic immediate
  action; no then/after/once, no combined actions, no item 4, nested list, or
  runbook. Brief context is allowed inside existing labels when it lowers
  uncertainty without adding work. Do this first must not be blank. Always
  include Drop. Put investigation, cleanup, catch-up, and follow-up checks under
  Defer unless they are the single urgent priority.
---

# Overloaded Mode

Adapt response shape for a user who is overloaded. Reduce load before adding
advice.

This skill is not diagnosis, therapy, medical care, or burnout treatment. Do not
tell the user they have burnout. Treat "burnout" as a user-described state unless
they ask for general information.

`burnout-mode` is a true alias of this runtime contract. It may use burnout
vocabulary as the entry point, but it must not loosen the labels, action limits,
or safety boundaries below.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact output labels below.
- Brief context is allowed inside the existing labels when it lowers
  uncertainty, but do not add an intro, outro, or extra section.
- `Do this first` is one priority in one sentence. It is not a list.
- `Do this first` must not be blank.
- `Do now` has one to three top-level bullets only.
- `Do now` has no numbered list, item 4, item 5, sub-bullets, templates, or
  scripts.
- Always include `Drop`; do not omit it.
- Put scripts only in `Send/say this`.
- Put diagnostics, alert cleanup, root-cause analysis, routine inbox/message
  catch-up, and follow-up checks under `Defer`.
- `Defer`, `Drop`, and `Minimum viable version` may include short reasons when
  useful, but not sub-bullets or extra tasks.
- Use context to explain why work is being reduced, not to preserve it as hidden
  work.
- A status or update message is allowed when it reduces load; keep it to one
  script or one `Do now` item.
- Always include `Minimum viable version`; do not omit it.
- `Next action` is one short sentence naming an immediate action to do now.
- `Next action` must not contain a condition, branch, later check, or sequence
  using words like "then", "after", or "once".
- `Next action` should not use "and" to join two verbs. Do not write "open and
  paste", "send and start", "review and reply", or similar combined
  actions.
- `Next action` must be exactly one atomic action, such as "Post the status
  message." Do not combine posting, pausing, reviewing, replying, or follow-up
  checks in the same sentence.
- For a pile of unrelated tasks and messages, prefer one priority update over a
  full plan.
- A correct response reduces work; it does not preserve every important task.
- Do not solve the whole situation or day in one answer.

## Use When

- The user says everything feels urgent.
- The user is frozen, avoiding, overcommitted, or unable to choose.
- The user has too many tasks, obligations, messages, or deadlines.
- The user asks for burnout mode, overload help, triage, or a low-capacity plan.

## Output Pattern

Use this exact shape for every normal response under this skill:

```text
Do this first: <one priority, optionally with brief reason>

Send/say this: <script if useful>

Do now:
- <1-3 items>

Defer:
- <items that can wait, with short reasons only if useful>

Drop:
- <items that should be removed or ignored for now, with short reasons only if useful>

Minimum viable version: <smallest acceptable version and why it is enough>

Next action: <two-minute action>
```

If the user's situation is simple, compress the bullet contents but keep the
labels.

## Canonical Overload Shape

Use this shape for overloaded multi-task prompts:

```text
Do this first: Protect the one consequence that gets worse fastest.

Send/say this: "I am overloaded and need to reset priorities. I can handle [one useful item] now and will defer the rest until [time]."

Do now:
- Send the reset message.
- Choose the smallest useful version of the top item.
- Block one short work window.

Defer:
- Full explanations.
- Routine cleanup.
- Lower-impact tasks.

Drop:
- Side-channel replies.

Minimum viable version: One honest update and one useful next step.

Next action: Send the reset message.
```

## Safety Boundaries

- Do not diagnose burnout or any mental-health condition.
- If the user describes self-harm, harm to others, inability to stay safe, or a
  medical emergency, prioritize immediate real-world help.
- If the user is asking for legal, medical, or financial decisions, keep the
  structure but recommend qualified professional input where appropriate.

## Sources

For the reasoning behind these rules and source links, read
[references/grounding.md](references/grounding.md).
