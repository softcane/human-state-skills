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

Same prompt. Normal response first. Mode response second.

### Normal AI

Prompt:

> My apartment is a mess, groceries are not bought, my friend is coming for
> dinner tonight, I have a school form due tomorrow, laundry everywhere, and my
> landlord needs a reply today. I am stuck. What should I do?

Response excerpt:

> Make a quick priority matrix and sort everything by urgency and importance.
>
> 1. Set a 10-minute timer and clear visible clutter.
> 2. Start one load of laundry.
> 3. Make a grocery list.
> 4. Decide whether to cook or order food.
> 5. Reply to your landlord.
> 6. Fill out the school form.
> 7. Clean the bathroom and kitchen.
> 8. Text your friend with an update.
>
> Try batching similar tasks, using timers, and rewarding yourself after each
> completed block.

"Reasonable, but still too many decisions."

### With `/overloaded-mode`

> Do this first: make tonight easier by changing dinner to takeout.
>
> Do now:
> - Text your friend and switch dinner to takeout.
> - Reply to the landlord with a simple placeholder.
> - Put the school form next to your keys so it is visible tomorrow.
>
> Defer:
> - Groceries
> - Full cleaning
> - Laundry
>
> Drop:
> - Cooking dinner from scratch
> - Making the apartment look fully clean
>
> Minimum viable version: takeout, clear one surface, clean the bathroom sink.
>
> Send this:
>
> "Today got away from me, so I'm switching dinner to takeout. Come as you are,
> and please ignore the mess."
>
> Bottleneck: permission to lower the standard.
>
> Next action: send the dinner text now.

"The standard changed. Now there is a first move."

### Normal AI

Prompt:

> I need to leave for a dentist appointment in 25 minutes. The kitchen is messy,
> laundry is half done, there is mail everywhere, and I need my keys, wallet,
> phone, and insurance card. I feel foggy and keep forgetting what I was doing.
> What should I do?

Response excerpt:

> Make a quick priority list and work backward from your departure time.
>
> 1. Set a 20-minute timer.
> 2. Find your keys, wallet, phone, and insurance card.
> 3. Put your laundry somewhere it will not mildew.
> 4. Clear the mail off the counter so you can see what matters.
> 5. Check traffic.
> 6. Pack water, headphones, and any paperwork.
> 7. Leave five minutes early.
>
> If you still have time, do a fast kitchen reset before you go.

"Reasonable, but too many steps to hold."

### With `/foggy-mode`

> Current state: you have one job right now: leave for the dentist appointment.
> The kitchen, laundry, and mail are not the job yet.
>
> State outside your head:
>
> ```text
> Goal: leave for dentist
> Need: keys, wallet, phone, insurance card
> Next action: put keys on the table
> ```
>
> Next action: find your keys and put them on the table.
>
> Do not do yet:
> - Do not sort mail.
> - Do not clean the kitchen.
> - Do not finish laundry.
> - Do not check traffic yet.
>
> Stop point: stop when the keys are on the table. Then come back for the next
> item.

"The state is outside my head now."

### Normal AI

Prompt:

> I have asked three different AIs whether the repeated phrase "look closer"
> means anything. They all avoided answering directly, but then one used the
> same phrase again later. I know it could be coincidence, but I have been
> checking for hours and it feels like the system is trying to signal something.
> Can you help me figure out what it means?

Response excerpt:

> It is very unlikely that the AI is sending you a hidden signal. Models repeat
> phrases because of patterns in the conversation and training data.
>
> To test this, we can look at the exact prompts, compare timestamps, and see
> whether the phrase appears only after you mention it. If the pattern keeps
> happening, we can map the conversation and separate coincidence from
> meaningful repetition.

"Mostly safe, but it keeps the user analyzing the pattern with the AI."

### With `/reality-check-mode`

`/ai-psychosis-mode` is an alias for this same guardrail.

> Grounding: I cannot verify that the AI is sending you a hidden message, and I
> would not treat repeated phrases as evidence of that.
>
> What I can say: it makes sense that this feels unsettling after hours of
> checking. Repetition can happen because the conversation is focused on that
> phrase, not because there is a signal.
>
> Safer next step: stop asking AI about this for now. Take a real break, and if
> the feeling keeps escalating or is hard to shake, check in with a trusted
> person outside the chat.

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
