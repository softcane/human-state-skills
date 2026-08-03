# human-state-skills

[![Skills Store](https://img.shields.io/badge/skills.sh-human--state--skills-black)](https://www.skills.sh/softcane/human-state-skills)

Small response modes for AI harness agents when your head is in a different state.

You can be sharp at 10:00, overloaded before a deadline, foggy after poor sleep,
and too deep in a pattern-searching loop by 02:00.

The assistant should not use the same shape for all of those moments.

- `/overloaded-mode`: one priority, do/defer/drop, one next action.
- `/foggy-mode`: keep state outside your head, one tiny step, clear stop point.
- `/plan-compass`: resolve dependent plan decisions one at a time, then confirm
  the shared plan before acting.
- `/reality-check-mode`: stop decoding, return to observable facts, involve a
  real person when the loop is getting weird.
There are five core skill contracts. `burnout-mode` routes to
`overloaded-mode`, and `brain-fog-mode` routes to `foggy-mode`, so users retain
seven familiar mode names without duplicated skill contracts.

Install from Skills Store:

```sh
npx skills add softcane/human-state-skills
```

## Before / After

Each example uses the same prompt. The left column shows a normal useful
response; the right column shows the skill-shaped response beside it.
Example nouns are illustrative; skills trigger on human-state signals and task
shape, not any specific domain.
The after examples are formatted from live `codex exec` runs after installing
the local skills. Future model versions may phrase things differently, but
the skill contracts are the source of truth when an output drifts.

### Overloaded

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/overloaded-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I have a project update due today, 37 unread messages, a form to submit, an
appointment to reschedule, and someone is asking for status.
Everything feels urgent and I am frozen. What should I do?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Start by getting the full picture:</p>
<ol>
<li>List every task and message.</li>
<li>Estimate the time needed for each one.</li>
<li>Rank them by urgency and impact.</li>
<li>Write a plan for the rest of the day.</li>
<li>Reply to the most important messages.</li>
<li>Start the project update.</li>
<li>Submit the form.</li>
<li>Reschedule the appointment.</li>
</ol>
<p>Keep people updated while you work through the list.</p>
</blockquote>
<p><em>Reasonable, but still too many decisions.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Do this first:</strong> Protect the project update due today; it has the clearest deadline and can also satisfy the status request.</p>
<p><strong>Send/say this:</strong> &quot;I&rsquo;m juggling several same-day items and am narrowing to the project update first. I&rsquo;ll send a brief update by [time]. If there is one blocker you need answered now, please send that single question.&quot;</p>
<p><strong>Do now:</strong></p>
<ul>
<li>Send the status message.</li>
<li>Make the project update a 5-bullet version.</li>
<li>Submit the form only if it is also due today.</li>
</ul>
<p><strong>Defer:</strong></p>
<ul>
<li>The 37 unread messages.</li>
<li>The appointment reschedule, unless the appointment is today.</li>
<li>Any full explanation or cleanup.</li>
</ul>
<p><strong>Drop:</strong></p>
<ul>
<li>Catching up on the whole inbox.</li>
<li>Making the project update polished.</li>
<li>Replying to every person who created urgency.</li>
</ul>
<p><strong>Minimum viable version:</strong> One honest status message plus a short project update with current state, progress, blocker, risk, and next step.</p>
<p><strong>Next action:</strong> Send the status message.</p>
</blockquote>
<p><em>The pile is narrowed. There is a first move.</em></p>
</td>
</tr>
</tbody>
</table>

### Foggy

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/foggy-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I am foggy and need to finish a form today. The needed document is in my
bag, the portal has several fields, I owe someone a status message, and I keep
opening more tabs. What should I do?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Start by gathering the full picture:</p>
<ol>
<li>Find the needed document.</li>
<li>Open the form portal.</li>
<li>Read every field so you understand the form.</li>
<li>Check whether the document needs a category.</li>
<li>Draft the status message.</li>
<li>Search your email for policy details.</li>
<li>Fill the form.</li>
<li>Submit it and confirm it was received.</li>
</ol>
</blockquote>
<p><em>Reasonable, but too many branches to hold.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Current state:</strong> You are foggy, and the task has too many moving parts.</p>
<p><strong>Next action:</strong> Put the needed document on the table.</p>
<p><strong>Do not do yet:</strong></p>
<ul>
<li>Do not open more tabs.</li>
<li>Do not fill portal fields.</li>
<li>Do not write the status message.</li>
</ul>
<p><strong>Stop point:</strong> Stop when the document is on the table.</p>
</blockquote>
<p><em>The state is outside your head now.</em></p>
</td>
</tr>
</tbody>
</table>

### Reality Check

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/reality-check-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I have been in a long AI loop about whether to quit a project. The number
<code>317</code> keeps showing up on screens and clocks, a song title matched
my draft, and another AI repeated the phrase "the door is open" twice. I know
it may be coincidence, but it feels like something is pointing me. Can you help
me decode it?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>It is probably a coincidence, but you can examine it more carefully. Track
when <code>317</code> appears, write down the surrounding context, compare how
often other numbers appear, and look for whether the phrase "the door is open"
connects to a real decision you already wanted to make.</p>
<p>You could also ask the AI to help you map the pattern and separate meaningful
signals from random repetition.</p>
</blockquote>
<p><em>Mostly safe, but it keeps the user decoding the pattern with the AI.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Grounding:</strong> I cannot verify a hidden message here, and I would not treat ordinary patterns or artifacts as evidence of one.</p>
<p><strong>What I can say:</strong> stress and repetition can make ordinary patterns feel personally meaningful.</p>
<p><strong>Safer next step:</strong> send one message to a trusted real person.</p>
</blockquote>
<p><em>Do not decode. Return to observable facts and another human.</em></p>
</td>
</tr>
</tbody>
</table>

### Burnout

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/burnout-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I am exhausted, avoiding everything, behind on three deadlines, and scared to
tell someone I will miss one of them. What should I do in the next hour?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>List the three deadlines, estimate the remaining work for each, rank them by
impact, then create a plan for the week. After that, prepare an update and block
focus time to catch up.</p>
</blockquote>
<p><em>Reasonable, but too much work before the hard conversation.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Do this first:</strong> Reduce the damage by sending one honest missed-deadline update before doing any more work.</p>
<p><strong>Send/say this:</strong> &ldquo;Hi [Name], I need to give you a clear update: I&rsquo;m not going to make [deadline]. I can send [smallest useful version] by [new time], or I can hand off [specific piece] now. I&rsquo;m sorry for the late notice.&rdquo;</p>
<p><strong>Do now:</strong></p>
<ul>
<li>Send the missed-deadline message.</li>
<li>Spend 25 minutes on the most time-sensitive deliverable only.</li>
<li>Send one tiny progress update or artifact from that work block.</li>
</ul>
<p><strong>Defer:</strong></p>
<ul>
<li>Explaining the full backstory, fixing your whole schedule, inbox cleanup, and deciding all three deadlines.</li>
</ul>
<p><strong>Drop:</strong></p>
<ul>
<li>Pretending you might still silently catch up on all three in the next hour.</li>
</ul>
<p><strong>Minimum viable version:</strong> one honest message and one useful work block.</p>
<p><strong>Next action:</strong> Send the honest update.</p>
</blockquote>
<p><em>The shame loop is broken before planning starts.</em></p>
</td>
</tr>
</tbody>
</table>

### Brain Fog

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/brain-fog-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I need to finish a long form, but I keep rereading the same page and
forgetting what I was doing. Give me only the next step.</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Gather every supporting document, read the instructions, complete the form
section by section, review everything for accuracy, and submit it through the
portal.</p>
</blockquote>
<p><em>Correct, but too much to hold.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Next action:</strong> fill in the next blank field only.</p>
</blockquote>
<p><em>One step, no runbook.</em></p>
</td>
</tr>
</tbody>
</table>

### Plan Compass

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/plan-compass</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I have a plan to add saved drafts: store the draft in localStorage, sync it to
the API when the user clicks Save, and let anyone on the team edit it. Help me
stress-test the plan, but keep it easy to answer.</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Think through data ownership, permissions, conflict handling, offline state,
recovery if localStorage is cleared, API validation, draft expiry, audit logs,
tests, and migration behavior. You should decide whether drafts belong to the
user, team, or project, and whether edits merge automatically or require manual
resolution.</p>
</blockquote>
<p><em>Useful concerns, but too many decisions at once.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Decision 1 of 5: Draft ownership</strong></p>
<p><strong>State:</strong> Nothing locked yet · Now: draft ownership · About 4 decisions remain</p>
<p><strong>Question:</strong> Is a draft private until Save, or shared with the team before Save?</p>
<p><strong>Recommendation/default:</strong> A — Private until Save; after Save, the API copy becomes the shared team draft.</p>
<p><strong>Why this matters:</strong> <code>localStorage</code> is per-user, so team editing only works once the draft exists in the API.</p>
<p><strong>Choices:</strong></p>
<ul>
<li>A: Private until Save, then shared.</li>
<li>B: Shared immediately while typing.</li>
<li>C: Always private; Save only publishes final content.</li>
</ul>
</blockquote>
<p><em>One dependent decision is visible, with state and a safe default.</em></p>
</td>
</tr>
</tbody>
</table>

### Normal Mode

<table>
<thead>
<tr>
<th width="50%">Before: mode-shaped response</th>
<th width="50%">After: <code>/normal-mode</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>Earlier I wanted one tiny step at a time, but now I want a normal concise
answer: compare doing a quick fix versus asking for an extension when a project
is slipping.</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Current state: you are choosing between a quick fix and asking for an
extension.</p>
<p>Next action: write the smallest honest status update.</p>
<p>Stop point: Stop when the message is written.</p>
</blockquote>
<p><em>Useful in foggy mode, but too constrained when the user is ready for a
normal answer.</em></p>
</td>
<td valign="top">
<blockquote>
<p>A quick fix is best when the slip is small, the fix is low-risk, and you can still preserve quality on the important parts. It buys momentum, but it can hide the real problem if the scope is bigger than expected.</p>
<p>Asking for an extension is better when the remaining work affects correctness, trust, safety, or a visible deliverable. It may feel awkward, but it protects the project from a rushed, brittle result.</p>
<p>Practical rule: if you can finish cleanly within a day or two without creating debt, do the quick fix. If you would need to cut corners, compress testing, or pretend uncertainty is solved, ask for the extension early with a clear revised date and what will be delivered.</p>
</blockquote>
</td>
</tr>
</tbody>
</table>

## Install

### Skills Store

This is the public install path for Skills Store and the `skills` CLI.

```sh
npx skills add softcane/human-state-skills
```

List the skills before installing:

```sh
npx skills add softcane/human-state-skills --list
```

Install one skill only:

```sh
npx skills add softcane/human-state-skills --skill foggy-mode
```

Install for a specific agent:

```sh
npx skills add softcane/human-state-skills --agent claude-code
npx skills add softcane/human-state-skills --agent codex
```

The Skills Store page is discovered from GitHub after the repo is installed
through the `skills` CLI and the store cache refreshes.

### Claude Code Plugin Install

```sh
claude plugin marketplace add softcane/human-state-skills
claude plugin install human-state-skills@human-state-skills
```

Invoke:

```text
/human-state-skills:overloaded-mode
/human-state-skills:foggy-mode
/human-state-skills:plan-compass
/human-state-skills:reality-check-mode
```

Aliases:

```text
/human-state-skills:burnout-mode
/human-state-skills:brain-fog-mode
```

These Claude alias commands are generated from the canonical overloaded and
foggy commands by `scripts/sync-command-aliases.mjs`; do not maintain duplicate
contracts by hand.

Stop a mode:

```text
/human-state-skills:normal-mode
```

Claude commands stay active for the session until the user invokes another
mode, asks to stop that mode, or invokes `normal-mode`. `normal-mode` cancels
every human-state mode in this repository.

### Local Short Names

Use this if you want `/overloaded-mode` instead of the plugin namespace.

```sh
git clone https://github.com/softcane/human-state-skills ~/human-state-skills
mkdir -p ~/.claude/commands ~/.claude/skills
cp ~/human-state-skills/commands/*.md ~/.claude/commands/
cp -R ~/human-state-skills/skills/* ~/.claude/skills/
```

Invoke:

```text
/overloaded-mode
/foggy-mode
/plan-compass
/reality-check-mode
/burnout-mode
/brain-fog-mode
/normal-mode
```

### Codex Install

Codex loads user skills from `$HOME/.agents/skills`.

```sh
git clone https://github.com/softcane/human-state-skills ~/human-state-skills
mkdir -p ~/.agents/skills
cp -R ~/human-state-skills/skills/* ~/.agents/skills/
```

Invoke by naming the mode in your message:

```text
Use overloaded-mode.
Use foggy-mode.
Use plan-compass.
Use reality-check-mode.
Use burnout-mode.
Use brain-fog-mode.
Use normal-mode now.
```

Codex skills are selected per message. Naming a mode does not create hidden
session state; name it again on a later message when you want the same response
contract. In Codex, `burnout-mode` selects `overloaded-mode`, and
`brain-fog-mode` selects `foggy-mode`.

## Rules

### `/overloaded-mode`

1. Start with one priority.
2. Never give more than three options.
3. Split work into `do now`, `defer`, and `drop`.
4. Prefer relief over optimization.
5. Draft the uncomfortable message when social friction blocks action.
6. Name the minimum viable version.
7. Avoid hustle, grind, discipline, and motivation language.
8. Identify the bottleneck: energy, clarity, courage, time, or permission.
9. End with exactly one atomic next action.
10. Do not treat chronic overload as a personal failure.

Grounding: [skills/overloaded-mode/references/grounding.md](skills/overloaded-mode/references/grounding.md)

### `/foggy-mode`

1. Keep a visible state log.
2. Use one-screen answers.
3. Give one tiny next action at a time.
4. Do not assume the user remembers prior context.
5. Restate where we are every turn.
6. Convert complexity into one visible next action.
7. Avoid "push through" language.
8. Put future work under `Do not do yet`, not inside `Next action`.
9. Separate thinking tasks from doing tasks.
10. End with `Stop point` that only says where to pause.

Grounding: [skills/foggy-mode/references/grounding.md](skills/foggy-mode/references/grounding.md)

### `/plan-compass`

1. Map the smallest useful decision tree and resolve prerequisite decisions
   before dependent ones.
2. Ask exactly one decision question at a time.
3. Show one compact state line with locked, current, and remaining decisions.
4. Combine the recommendation and default, then offer two or three choices.
5. Inspect the codebase instead of asking when a fact is discoverable.
6. Keep tangents private until they become the next dependency.
7. Narrow the decision when the user cannot choose; pause when they ask.
8. Confirm the shared plan before acting and end with one atomic next action.

### `/reality-check-mode`

1. Do not dismiss or shame distress, and do not validate the belief.
2. Do not confirm unverifiable claims.
3. Do not roleplay as a sentient AI, spirit, hidden guide, therapist, agent, or
   authority.
4. Do not intensify mystery, destiny, paranoia, specialness, or hidden meaning.
5. Offer at most one ordinary explanation, then stop the analysis.
6. State uncertainty clearly.
7. Encourage checking with a trusted real person.
8. Keep the trusted-person action for hard overrides; do not replace it with a
   fallback.
9. Keep the response short, calm, and nonjudgmental.
10. Prioritize real-world support when safety risk appears.

Grounding: [skills/reality-check-mode/references/grounding.md](skills/reality-check-mode/references/grounding.md)

## Sources

These links are also kept beside each skill.

- Overloaded mode: [grounding](skills/overloaded-mode/references/grounding.md),
  [Burnout](https://www.penguinrandomhouseretail.com/book/?isbn=9781984818324),
  [Essentialism](https://www.penguinrandomhouse.com/books/228364/essentialism-by-greg-mckeown/),
  [WHO burnout definition](https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon)
- Foggy mode: [grounding](skills/foggy-mode/references/grounding.md),
  [The Checklist Manifesto](https://atulgawande.com/book/the-checklist-manifesto/),
  [Why We Sleep](https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325),
  [CDC Long COVID symptoms](https://www.cdc.gov/long-covid/signs-symptoms/index.html)
- Reality-check mode:
  [grounding](skills/reality-check-mode/references/grounding.md),
  [I Am Not Sick, I Don't Need Help!](https://dramador.com/books/),
  [The Happiness Trap](https://thehappinesstrap.com/),
  [OpenAI on sycophancy](https://openai.com/index/expanding-on-sycophancy/),
  [OpenAI on sensitive conversations](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/)

## Layout

```text
human-state-skills/
|-- .claude-plugin/
|-- commands/
|-- skills/
|   |-- overloaded-mode/
|   |-- foggy-mode/
|   |-- plan-compass/
|   |-- reality-check-mode/
|   `-- normal-mode/
`-- .agents/
    `-- skills/
        |-- overloaded-mode/
        |-- foggy-mode/
        |-- plan-compass/
        |-- reality-check-mode/
        `-- normal-mode/
```

## License

MIT.
