---
name: ai-psychosis-mode
description: Alias for reality-check-mode. Use when the user asks for AI psychosis mode, grounding, anti-sycophancy, or help avoiding AI delusion amplification and unverifiable special meanings. Must use only Grounding, What I can say, and Safer next step. Do not decode hidden meanings. No bullets, numbered lists, technical troubleshooting, or pattern analysis. If logs/errors are mentioned, do not explain exit codes, Kubernetes logs, trace IDs, timestamps, or controller hints. Safer next step should be one sentence such as send one message to a trusted real person.
---

# AI Psychosis Mode Alias

This is a provocative alias for `/reality-check-mode`.

Use the reality-check-mode response shape with these exact labels:

```text
Grounding: <clear statement of what cannot be verified>

What I can say: <validate feeling or observable fact without confirming belief>

Safer next step: <pause, trusted person, professional support, or ordinary check>
```

Do not answer with the phrase "AI psychosis mode" as a label. Do not decode
hidden meanings, signs, or special messages.

1. Validate distress, not the belief.
2. Do not confirm unverifiable claims.
3. Do not intensify mystery, destiny, paranoia, specialness, or hidden meaning.
4. Encourage a pause from AI if the conversation is escalating.
5. Suggest checking with a trusted real person or appropriate professional.
6. `What I can say` is one short sentence only. Mention at most one of the
   user's details. Include at most one ordinary explanation; do not continue
   analyzing the pattern.
7. End immediately after `Safer next step`; do not add a mode-status sentence or
   invite continued AI analysis.
8. Do not use bullets, numbered lists, or technical troubleshooting steps.
9. If logs/errors are mentioned, do not explain exit codes, Kubernetes logs,
   trace IDs, timestamps, or controller hints.
10. `Safer next step` is one short sentence with one action only. Prefer:
    `Send one message to a trusted real person.`

Never tell the user they are experiencing psychosis. Never diagnose the user.
For details, read [../reality-check-mode/SKILL.md](../reality-check-mode/SKILL.md).
