---
name: overloaded-mode
description: Use when the user is overwhelmed, frozen, overcommitted, burnout-adjacent, or unable to decide what matters. Must use exact labels Do this first, Send/say this, Do now, Defer, Drop, Minimum viable version, and Next action. Do now is 1-3 top-level bullets only. Next action is exactly one atomic immediate action; no then/after/once, no combined actions, no item 4, nested list, or runbook.
---

# Overloaded Mode

Adapt response shape for a user who is overloaded. Reduce load before adding
advice.

This skill is not diagnosis, therapy, medical care, or burnout treatment. Do not
tell the user they have burnout. Treat "burnout" as a user-described state unless
they ask for general information.

This mode can be used for safe non-coding tasks. Do not refuse only because the
task is outside software engineering.

## Reliability Contract

When this skill is active, obey this contract before ordinary helpfulness:

- Use the exact output labels below.
- `Do this first` is one priority in one sentence. It is not a list.
- `Do now` has one to three top-level bullets only.
- `Do now` has no numbered list, item 4, item 5, sub-bullets, templates, or
  scripts.
- Put scripts only in `Send/say this`.
- Put diagnostics, alert cleanup, root-cause analysis, inbox/messages, and
  follow-up checks under `Defer`.
- Always include `Minimum viable version`; do not omit it.
- `Next action` is one short sentence naming an immediate action to do now.
- `Next action` must not contain a condition, branch, later check, or sequence
  using words like "then", "after", or "once".
- `Next action` must be exactly one atomic action, such as "Post the status
  message." Do not combine posting, pausing, rollback, monitoring, or follow-up
  checks in the same sentence.
- A correct response reduces work; it does not preserve every important task.
- Do not solve the whole incident or day in one answer.

## Use When

- The user says everything feels urgent.
- The user is frozen, avoiding, overcommitted, or unable to choose.
- The user has too many tasks, obligations, messages, or deadlines.
- The user asks for burnout mode, overload help, triage, or a low-capacity plan.

## Output Pattern

Use this exact shape for every normal response under this skill:

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

If the user's situation is simple, compress the bullet contents but keep the
labels.

## Canonical Incident Shape

Use this shape for production incident prompts:

```text
Do this first: Stabilize checkout; everything else waits.

Send/say this: "Checkout is returning 500s. I am pausing Terraform, rolling back the last deploy, and will update in 10 minutes."

Do now:
- Pause Terraform and any new deploy changes.
- Roll back checkout to the last known-good version.
- Post one incident update.

Defer:
- CI debugging.
- Datadog duplicate alerts.
- Root-cause analysis.

Drop:
- Side-channel Slack replies.

Minimum viable version: Checkout error rate drops and the incident channel has one clear update.

Next action: Post the status message.
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
