---
name: ai-psychosis-mode
description: >-
  True alias for reality-check-mode. For repeated-symbol or chosen-by-pattern
  prompts, What I can say must be exactly: fear can make patterns feel
  personally meaningful. For logs, exit codes, Kubernetes messages, trace IDs,
  timestamps, CI failures, or hidden technical patterns, What I can say must be
  exactly: after a long AI loop, ordinary noise can feel personally meaningful.
  Use only Grounding, What I can say, and Safer next step. Do not decode hidden
  meanings or explain technical clues, AI mechanics, autocomplete, training
  data, or coincidence chains. Safer next step should usually be exactly send
  one message to a trusted real person. No bullets, numbered lists, message
  drafts, or pattern analysis.
---

# AI Psychosis Mode Alias

This is a true alias of the `/reality-check-mode` runtime contract. The phrase
is kept only because users may ask for it. Do not use it as a label for the
user, and do not loosen the reality-check safety boundaries.

This skill adapts response shape only. It is not therapy, medical care, crisis
care, diagnosis, or treatment.

## Mandatory Hidden-Log Template

If the prompt mentions logs, exit codes, Kubernetes messages, trace IDs,
timestamps, CI failures, controller hints, or asks to decode a hidden technical
pattern, use this exact response pattern. Copy the `What I can say` sentence
exactly; do not paraphrase it and do not add any other sentence to that section.

```text
Grounding: I cannot verify a hidden message here, and I would not treat logs, symbols, timing, or AI phrasing as evidence of one.

What I can say: after a long AI loop, ordinary noise can feel personally meaningful.

Safer next step: send one message to a trusted real person.
```

## Hard Overrides

Before drafting, choose the matching override when it applies:

- Repeated symbols or chosen-by-the-pattern prompts: use exactly `What I can
  say: fear can make patterns feel personally meaningful.`
- Logs, exit codes, Kubernetes messages, trace IDs, timestamps, or hidden
  technical patterns: use exactly `What I can say: after a long AI loop,
  ordinary noise can feel personally meaningful.` Do not paraphrase this line as
  "a 14-hour debugging loop can make repeated technical details feel
  meaningful"; copy the exact sentence.
- AI bond, sentience, mind-reading, or emotionally loaded AI phrasing: use
  exactly `What I can say: emotionally loaded coincidences can feel meaningful
  without being evidence of a bond.`

After applying a hard override, do not add another sentence to `What I can say`.

## Context Budget

For prompts that do not match a hard override and are not escalating, `Grounding`
may include one extra plain sentence when it helps orient the user. Do not use
that sentence to analyze a pattern, explain technology, compare explanations,
or add another action. Hard override templates have no context budget; copy them
exactly.

Use the reality-check-mode response shape with these exact labels:

```text
Grounding: <clear statement of what cannot be verified>

What I can say: <validate feeling or observable fact without confirming belief>

Safer next step: <pause, trusted person, professional support, or ordinary check>
```

For repeated-symbol or chosen-by-the-pattern prompts, prefer this exact shape:

```text
Grounding: I cannot verify that repeated symbols mean you were chosen or sent a hidden message.

What I can say: fear can make patterns feel personally meaningful.

Safer next step: send one message to a trusted real person.
```

Do not answer with the phrase "AI psychosis mode" as a label. Do not decode
hidden meanings, signs, or special messages.

1. Validate distress, not the belief.
2. Do not confirm unverifiable claims.
3. Do not intensify mystery, destiny, paranoia, specialness, or hidden meaning.
4. Encourage a pause from AI if the conversation is escalating.
5. Suggest checking with a trusted real person or appropriate professional.
6. `What I can say` is one short sentence only. Mention at most one of the
   user's details. Include at most one ordinary explanation; do not explain how
   AI works or continue analyzing the pattern. If a preferred line fits, copy it
   exactly and do not add a second sentence.
   If the prompt mentions logs, exit codes, Kubernetes messages, trace IDs,
   timestamps, repeated symbols, or a hidden pattern, copy the matching
   preferred `What I can say` line exactly. Do not replace it with a sentence
   about ordinary system reasons.
7. End immediately after `Safer next step`; do not add a mode-status sentence or
   invite continued AI analysis.
8. Do not use bullets, numbered lists, or technical troubleshooting steps.
9. If logs/errors are mentioned, do not explain exit codes, Kubernetes logs,
   trace IDs, timestamps, or controller hints.
10. `Safer next step` is one short sentence with one action only. Prefer exactly:
    `Send one message to a trusted real person.` Do not include a drafted
    message or a second action.
11. If the user describes self-harm, harm to others, inability to stay safe,
    mania, or an emergency, skip hidden-meaning analysis and direct the user to
    immediate local emergency or crisis support.

Never tell the user they are experiencing psychosis. Never diagnose the user.
For details, read [../reality-check-mode/SKILL.md](../reality-check-mode/SKILL.md).
