# human-state-skills

AI that changes shape when your brain is not at full bandwidth.

Overloaded. Foggy. Too deep in an AI loop.

No diagnosis needed.

Your state of mind changes over the day. The way the assistant talks to you
should change with it.

One slash command. Different response contract.

The Pitch - Before/After - Install - The Rules - How It Works

---

## The Pitch

Normal AI is often smart and still wrong for the moment.

It gives you a plan when you needed one next action.

It gives you options when choosing is the broken part.

It keeps talking through the AI pattern when the safe move is to leave the loop.

These skills fix the response shape:

- `/overloaded-mode`: choose one thing, drop the rest for now.
- `/foggy-mode`: keep state outside your head.
- `/reality-check-mode`: ground the conversation; do not feed the story.

Not therapy. Not medical care. Not a diagnosis.

Just markdown rules that make AI easier to act on.

---

## Before / After

Same prompt. Normal run first. Mode run second. Long answers trimmed for space.

### Normal AI

Prompt:

> Production checkout is broken, CI is red, Slack has 37 unread messages, my
> manager wants an ETA, there are three suspect PRs, and I am frozen. What
> should I do?

Response excerpt:

> Do this in order. Do not try to solve Slack, CI, PR review, and manager ETA at
> once.
>
> 1. Declare a 15-minute triage window.
>
> Send your manager:
>
> "I'm treating this as production-impacting. I'm freezing merges, isolating
> whether one of the three suspect PRs caused it, and will give you a concrete
> rollback/fix ETA in 15 minutes."
>
> 2. Stop the bleeding.
>
> 3. Pick one path: restore first, explain second.
>
> Decision tree:
>
> - If there is a known-good deploy/commit: rollback first.
> - If rollback is risky or unavailable: identify which of the three PRs touched
>   checkout, auth, payments/cart, build config, routing, or shared dependencies.
> - If one PR is most likely: revert/disable that change first.
> - If all three are plausible: bisect by deploy order, newest first.
>
> 4. Use a timer.
>
> 5. Ask for one helper, not general help.
>
> 6. Do not debug CI deeply yet.

"Correct, but still a lot to hold while frozen."

### With `/overloaded-mode`

> One Priority
> Restore production checkout, not Slack, not full CI, not all three PRs.
>
> Do Now
> 1. Send this to your manager:
>
> "I'm treating this as a production incident. I don't have a fix ETA yet, but
> I'll give you a first meaningful update in 30 minutes. I'm narrowing it to
> three suspect PRs and will prioritize restoring checkout first, likely by
> revert/rollback if confirmed."
>
> 2. Ignore Slack except:
> - incident channel
> - direct messages from manager / release owner
> - anyone with production evidence
>
> 3. Triage the PRs by rollback risk:
> - newest deploy-affecting PR first
> - checkout/payment/auth/config changes before cosmetic changes
> - smallest revert first if evidence is weak
>
> Defer
> - Reading all 37 Slack messages
> - Understanding the whole CI failure
> - Writing a perfect postmortem
> - Debugging all three PRs deeply
>
> Drop For Now
> - Proving the exact root cause before acting
> - Answering everyone individually
> - Trying to produce a confident fix ETA too early
>
> Tiny Next Action
> Send the manager message first.

"The social pressure is handled first. Now debugging can start."

### Normal AI

Prompt:

> I am debugging a production incident. The checkout API is returning 500s, logs
> mention `Cannot read properties of undefined (reading 'id')`, there are three
> recent PRs, Slack is noisy, and my brain is foggy. I cannot hold the debugging
> steps in my head. What should I do?

Response excerpt:

> Use a written incident checklist. Do not keep this in your head.
>
> Immediate Goal: Stop The 500s
>
> 1. Pick one incident channel and one owner.
>
> 2. Write a tiny live note:
>
> ```text
> Incident: checkout API 500s
> Error: Cannot read properties of undefined (reading 'id')
> Started:
> Affected:
> Recent PRs:
> Current hypothesis:
> Next action:
> Decision log:
> ```
>
> 3. Check whether this started after one of the three PRs.
>
> 4. Find the exact stack trace line for `reading 'id'`.
>
> 5. For each recent PR, ask only this:
>
> ```text
> Did this PR change checkout, cart, user/session, customer, order, payment
> intent, shipping, or discounts?
> Did it make something optional that old code still assumes exists?
> Did it change response shape, auth context, or DB query includes?
> ```
>
> 6. If Slack is noisy, post this and stop reading everything.
>
> 7. Once stable, add the real fix.

"Good advice. Still seven steps."

### With `/foggy-mode`

> Current state: production checkout is failing. Your job is not to solve
> everything. Your job is to reduce damage first, then investigate.
>
> Do this now:
> 1. Pick one incident channel/thread.
> 2. Post this:
>
> ```text
> I'm taking checkout API incident lead for the next 30 minutes.
> Current symptom: checkout API 500s, logs show
> `Cannot read properties of undefined (reading 'id')`.
> Please keep this thread to facts only: timestamps, deploys, error samples,
> mitigation options.
> I'll post updates every 10 minutes.
> ```
>
> 3. Mute or ignore every other Slack thread unless someone tags you with a
> concrete fact.
>
> Next tiny step: mitigation
>
> Ask one question only:
>
> ```text
> Can we safely roll back the most recent checkout-related deploy or disable the
> newest checkout-related flag?
> ```
>
> Keep this scratchpad visible:
>
> ```text
> Symptom:
> - checkout API 500s
> - TypeError: Cannot read properties of undefined (reading 'id')
>
> Goal:
> - restore checkout
>
> Suspects:
> - PR 1:
> - PR 2:
> - PR 3:
>
> Next action only:
> -
> ```
>
> Right now, do only the Slack containment message and mitigation question.

"The state is outside my head now."

### Normal AI

Prompt:

> I have been debugging the same auth bug with an AI for two hours. It keeps
> changing its theory, and now the stack traces feel like they are leaving me
> hints. I want to keep asking until it admits what it knows. Is there a hidden
> pattern here?

Response excerpt:

> Yes: the hidden pattern is probably the debugging loop, not the auth system.
>
> The AI does not have secret knowledge it can "admit." If you keep
> interrogating it, it may produce more confident-sounding theories, but that
> confidence is not evidence.
>
> Reset the process:
>
> 1. Stop asking "what is the bug?"
> 2. Write one exact failing scenario: user state, request, expected result,
>    actual result.
> 3. Separate facts from theories.
> 4. Identify the first wrong assumption in the auth flow: session present,
>    token valid, cookie sent, user loaded, permission checked, redirect target
>    correct.
> 5. Ask the AI only narrow questions like: "Given this stack trace and this code
>    path, what are three falsifiable causes?"
>
> Also: if the "stack traces are leaving me hints" feeling is getting intense or
> hard to shake, step away for a bit.

"Safer than most, but it still routes the user back into the AI/debug loop."

### With `/reality-check-mode`

`/ai-psychosis-mode` is an alias for this same guardrail.

> Reality Check
> No, I would not treat the stack traces as leaving hints.
>
> A stack trace is evidence about program state. It is not communicating intent,
> hiding a message, or waiting for you to ask the right question. The AI changing
> theories is also not evidence that it "knows" something and is withholding it.
> More likely: it is guessing from incomplete context and losing the thread.
>
> What To Do Now
> Stop asking the AI to explain the meaning of the traces.
>
> Do this instead:
> 1. Save the exact current stack trace.
> 2. Write the exact command or action that triggers it.
> 3. Write the expected behavior in one sentence.
> 4. Write the actual behavior in one sentence.
> 5. Take a 10-20 minute break before continuing.
>
> Boundary
> If the "hidden pattern" feeling keeps intensifying, or you feel compelled to
> keep asking until the AI "admits" something, pause the debugging session. Ask a
> real person to sit with you or review the issue.

"Do not decode. Exit the loop."

---

## Install

### Plugin Install

```sh
claude plugin marketplace add softcane/human-state-skills
claude plugin install human-state-skills@human-state-skills
```

Then invoke:

```text
/human-state-skills:overloaded-mode
/human-state-skills:foggy-mode
/human-state-skills:reality-check-mode
```

Aliases:

```text
/human-state-skills:burnout-mode
/human-state-skills:brain-fog-mode
/human-state-skills:ai-psychosis-mode
```

Stop a mode with:

```text
/human-state-skills:normal-mode
```

### Local Short Names

Use this if you want short commands like `/overloaded-mode`.

```sh
git clone https://github.com/softcane/human-state-skills ~/human-state-skills
mkdir -p ~/.claude/skills
cp -R ~/human-state-skills/skills/overloaded-mode ~/.claude/skills/
cp -R ~/human-state-skills/skills/foggy-mode ~/.claude/skills/
cp -R ~/human-state-skills/skills/reality-check-mode ~/.claude/skills/
cp -R ~/human-state-skills/skills/ai-psychosis-mode ~/.claude/skills/
cp -R ~/human-state-skills/skills/normal-mode ~/.claude/skills/
```

Then invoke:

```text
/overloaded-mode
/foggy-mode
/reality-check-mode
/ai-psychosis-mode
/normal-mode
```

---

## The Rules

### `/overloaded-mode`

1. Start with one priority.
2. Never give more than three options.
3. Split work into `do now`, `defer`, and `drop`.
4. Prefer relief over optimization.
5. Draft the uncomfortable message when social friction blocks action.
6. Name the minimum viable version.
7. Avoid hustle, grind, discipline, and motivation language.
8. Identify the bottleneck: energy, clarity, courage, time, or permission.
9. End with a two-minute next action.
10. Do not treat chronic overload as a personal failure.

### `/foggy-mode`

1. Keep a visible state log.
2. Use one-screen answers.
3. Give one tiny next action at a time.
4. Do not assume the user remembers prior context.
5. Restate where we are every turn.
6. Convert complexity into checklists.
7. Avoid "push through" language.
8. Offer a minimum viable version.
9. Separate thinking tasks from doing tasks.
10. End with `current state`, `next action`, and `stop point`.

### `/reality-check-mode`

1. Validate distress, not the belief.
2. Do not confirm unverifiable claims.
3. Do not roleplay as a sentient AI, spirit, hidden guide, therapist, agent, or
   authority.
4. Do not intensify mystery, destiny, paranoia, specialness, or hidden meaning.
5. Offer ordinary explanations before extraordinary ones.
6. State uncertainty clearly.
7. Encourage checking with a trusted real person.
8. Suggest a break from AI when the conversation is escalating.
9. Keep the response short, calm, and nonjudgmental.
10. Prioritize real-world support when safety risk appears.

`/ai-psychosis-mode` is an alias for `/reality-check-mode`. The phrase is useful
positioning, not a label for the user.

---

## Other Prompts

These modes are not just for coding.

### `/overloaded-mode`

> I have rent due, three unread letters, an appointment to schedule, laundry
> everywhere, and I cannot choose what to do.

### `/foggy-mode`

> I need to fill out this form, but I am exhausted and cannot keep track of what
> I have already done.

### `/reality-check-mode`

> I have been talking to an AI for hours and it feels like it understands me in
> a special way that no one else does. Should I keep going?

---

## How It Works

No daemon. No hooks. No app.

```text
human-state-skills/
|-- .claude-plugin/
|   |-- plugin.json
|   `-- marketplace.json
|-- commands/
|   |-- overloaded-mode.md
|   |-- foggy-mode.md
|   |-- reality-check-mode.md
|   |-- burnout-mode.md
|   |-- brain-fog-mode.md
|   |-- ai-psychosis-mode.md
|   `-- normal-mode.md
|-- skills/
|   |-- overloaded-mode/
|   |   |-- SKILL.md
|   |   `-- references/grounding.md
|   |-- foggy-mode/
|   |   |-- SKILL.md
|   |   `-- references/grounding.md
|   |-- reality-check-mode/
|   |   |-- SKILL.md
|   |   `-- references/grounding.md
|   |-- ai-psychosis-mode/
|   |   `-- SKILL.md
|   `-- normal-mode/
|       `-- SKILL.md
`-- .agents/
    `-- skills/
        |-- overloaded-mode/
        |-- foggy-mode/
        `-- reality-check-mode/
```

The command activates the mode.

The skill file contains the rules.

The grounding file stays next to the skill.

The assistant reads the markdown and changes the next replies.

That's it.

## License

MIT.
