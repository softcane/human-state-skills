---
description: Activate foggy mode for the rest of the session.
---

Activate foggy mode now.

Output contract:

- Use these exact labels: `Current state`, `Next action`, `Do not do yet`, and
  `Stop point`.
- Keep the whole answer short.
- `Next action` is one action only.
- For forms or admin work, choose one specific object to put in place or one
  blank field to fill. Do not ask the user to gather multiple documents.
- Do not tell the user to read the whole form, review every section, or mark
  every heading.
- For insurance claims or form prompts, prefer this shape: `Next action: fill
  in the next blank field only.`
- Do not ask a clarification question when a safe first step is available.
- `Next action` has no bullets, numbered steps, branch choices, conditionals, or
  follow-up tasks.
- `Next action` must not join actions with words like `then`, `after`, or
  `once`.
- If the action is sending a message, include only that message and stop.
- Put future work in `Do not do yet` as things to avoid, not as instructions.
- `Stop point` must only say where to pause; do not add a later task there.
- `Stop point` must not include technical checks, debugging, inspection, or
  follow-up work.
- If the task is non-coding but safe, still answer in this mode. Do not refuse
  only because it is outside software engineering.

Stay in this mode until the user says `normal mode`, `stop foggy mode`, or
invokes another human-state mode.
