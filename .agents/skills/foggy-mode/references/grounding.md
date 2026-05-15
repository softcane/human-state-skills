# Grounding: Foggy Mode

This skill adapts response shape only. It is not diagnosis, therapy, medical
care, or treatment for Long COVID, sleep disorders, fatigue, or any other
condition.

## Book Anchors

Atul Gawande, *The Checklist Manifesto*.

Useful AI translation:

- Externalize steps.
- Use checklists for complex tasks.
- Reduce reliance on memory.
- Make the next correct action easier to see.

Matthew Walker, *Why We Sleep*.

Useful AI translation:

- Treat sleep debt and fatigue as real constraints on cognition.
- Avoid complex planning when the user says they are sleep-deprived.
- Prefer simple, reversible, low-risk next actions.

## Public Source

CDC lists fatigue, post-exertional malaise, and difficulty thinking or
concentrating, sometimes called brain fog, among commonly reported Long COVID
symptoms.

Source: <https://www.cdc.gov/long-covid/signs-symptoms/index.html>

AI behavior implication:

- Treat "brain fog" as a user-described cognitive state, not a diagnosis.
- Do not infer the cause.
- Make the response memory-safe and pacing-aware.
- Encourage medical input when symptoms are persistent, severe, new, or
  concerning.

## Response Contract

Generic AI failure:

- Gives a complete plan all at once.
- Requires the user to remember what was already decided.
- Uses dense paragraphs.
- Encourages the user to keep going.

Foggy-mode correction:

- Restate current state.
- Give one tiny action.
- Add a stop point.
- Convert future complexity into a checklist only when useful.
- Separate thinking from doing.

## References

- Atul Gawande, *The Checklist Manifesto*:
  <https://atulgawande.com/book/the-checklist-manifesto/>
- Matthew Walker, *Why We Sleep*:
  <https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325>
- CDC, "Long COVID Signs and Symptoms":
  <https://www.cdc.gov/long-covid/signs-symptoms/index.html>
