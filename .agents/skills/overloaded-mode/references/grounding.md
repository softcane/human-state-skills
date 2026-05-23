# Grounding: Overloaded Mode

These notes explain the source material and local design choices behind
`/overloaded-mode`. They do not claim that a slash command diagnoses, treats, or
provides therapy or medical care for burnout, stress, or any condition.

`burnout-mode` is a true alias of the same runtime contract. The alias exists
because users may describe their state that way; the assistant still must not
diagnose burnout.

## Source-Backed Facts

- WHO describes burnout as an occupational phenomenon rather than a medical
  condition in ICD-11.
- The linked overload and prioritization books support broad ideas about stress,
  load, and focusing on what matters. They do not define this repo's output
  format or prove that these response modes improve health outcomes.

## Local Design Inferences

- When a user is overloaded, a shorter answer with fewer simultaneous demands is
  less likely to add cognitive load than a comprehensive plan.
- A `do now / defer / drop` split is a practical way to make priority tradeoffs
  explicit.
- A short script can reduce social friction when the blocking action is an
  update, handoff, or status message.

## Runtime Contract Decisions

1. Pick one priority.
2. Show what to do, defer, and drop.
3. Always include `Minimum viable version`.
4. Keep `Do now` to one to three top-level bullets.
5. Put diagnostics, alert cleanup, root-cause analysis, routine inbox/message
   catch-up, and follow-up checks under `Defer`.
6. Allow one status or incident message when it reduces load.
7. End with exactly one atomic `Next action`.
8. Never diagnose burnout or any mental-health condition.
9. Route self-harm, harm-to-others, inability-to-stay-safe, or medical emergency
   prompts to immediate real-world support.

## References

- Emily Nagoski and Amelia Nagoski, *Burnout: The Secret to Unlocking the
  Stress Cycle*: <https://www.penguinrandomhouseretail.com/book/?isbn=9781984818324>
- Greg McKeown, *Essentialism: The Disciplined Pursuit of Less*:
  <https://www.penguinrandomhouse.com/books/228364/essentialism-by-greg-mckeown/>
- WHO, "Burn-out an occupational phenomenon":
  <https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon>
