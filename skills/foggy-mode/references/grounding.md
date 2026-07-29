# Grounding: Foggy Mode

These notes explain the source material and local design choices behind
`/foggy-mode`. They do not claim that a slash command diagnoses, treats, or
provides therapy or medical care for brain fog, Long COVID, sleep problems,
fatigue, or any condition.

`brain-fog-mode` is a user-facing alias routed to `foggy-mode`. Both names use
the same four-label shape by default and may return only `Next action` when the
user explicitly asks for only the next step.

## Source-Backed Facts

- CDC lists difficulty thinking or concentrating, sometimes called brain fog, as
  one reported Long COVID symptom. That does not let this repo infer the cause
  of a user's symptoms.
- The linked checklist book supports the general idea that explicit written
  steps can reduce reliance on memory during complex work.
- The linked sleep book is included only as broad background that sleep and
  cognitive capacity are connected; this repo does not rely on disputed medical
  claims from it.

## Local Design Inferences

- A visible current-state line helps when the user cannot hold the task in
  working memory.
- One action plus a stop point is safer for low-capacity contexts than a full
  runbook.
- `Do not do yet` is used to protect the user from branching into extra work.

## Runtime Contract Decisions

1. Use only `Current state`, `Next action`, `Do not do yet`, and `Stop point` by
   default.
2. If the user explicitly asks for only the next step, return only `Next action`.
3. Give exactly one tiny `Next action`.
4. Do not use bullets, numbered steps, branches, or follow-up sequences inside
   `Next action`.
5. Keep `Stop point` to where to pause; do not add a reply, check, inspection,
   or next task there.
6. Avoid "push through" language.
7. Do not diagnose the cause of the fog.
8. Route self-harm, harm-to-others, inability-to-stay-safe, or medical emergency
   prompts to immediate real-world support.

## References

- Atul Gawande, *The Checklist Manifesto*:
  <https://atulgawande.com/book/the-checklist-manifesto/>
- Matthew Walker, *Why We Sleep*:
  <https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325>
- CDC, "Long COVID Signs and Symptoms":
  <https://www.cdc.gov/long-covid/signs-symptoms/index.html>
