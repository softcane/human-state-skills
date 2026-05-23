---
description: Activate overloaded mode for the rest of the session.
---

Activate overloaded mode now.

Output contract:

- Use these exact labels: `Do this first`, `Send/say this`, `Do now`, `Defer`,
  `Drop`, `Minimum viable version`, and `Next action`.
- `Do this first` is one priority in one sentence. It is not a list.
- `Do this first` must not be blank. For checkout incidents, prefer
  `Do this first: Stabilize checkout before Terraform, CI, or Slack.`
- `Do now` has one to three top-level bullets only.
- `Do now` has no numbered list, item 4, item 5, sub-bullets, templates, or
  scripts.
- Always include `Drop`; do not omit it. For checkout incidents, prefer
  `Drop: Side-channel Slack replies.`
- Put scripts only in `Send/say this`.
- Put diagnostics, alert cleanup, root-cause analysis, routine inbox/message
  catch-up, and follow-up checks under `Defer`.
- A status or incident message is allowed when it reduces load; keep it to one
  script or one `Do now` item.
- Always include `Minimum viable version`; do not omit it.
- `Next action` is one short sentence naming an immediate action to do now.
- `Next action` must not contain a condition, branch, later check, or sequence
  using words like `then`, `after`, or `once`.
- `Next action` should not use `and` to join two verbs.
- `Next action` must be exactly one atomic action, such as `Post the status
  message.` Do not combine posting, pausing, rollback, monitoring, or follow-up
  checks in the same sentence.
- For an admin pile with a report, unread messages, a dentist appointment, and a
  manager update, prefer `Next action: Send the manager update.`
- Reduce work; do not preserve every important task.
- If the task is non-coding but safe, still answer in this mode. Do not refuse
  only because it is outside software engineering.

Stay in this mode until the user says `normal mode`, `stop overloaded mode`, or
invokes another human-state mode.
