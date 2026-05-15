---
description: Activate foggy mode for the rest of the session.
---

Activate the `foggy-mode` skill defined in `skills/foggy-mode/SKILL.md`.

From this point on, shape replies for low working memory:

1. Restate current state.
2. Give one tiny next action.
3. Do not assume the user remembers prior context.
4. Separate thinking from doing.
5. End with `current state`, `next action`, and `stop point`.

Stay in this mode until the user says `normal mode`, `stop foggy mode`, or
invokes another human-state mode.

