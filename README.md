# human-state-skills

[![skills.sh](https://skills.sh/b/softcane/human-state-skills)](https://skills.sh/softcane/human-state-skills)

Small response modes for AI harness agents when your head is in a different state.

You can be sharp at 10:00, overloaded after a bad deploy, foggy during on-call,
and too deep in an AI debugging loop by 02:00.

The assistant should not use the same shape for all of those moments.

- `/overloaded-mode`: one priority, do/defer/drop, one next action.
- `/foggy-mode`: keep state outside your head, one tiny step, clear stop point.
- `/plan-compass`: stress-test a plan one concrete decision at a time.
- `/reality-check-mode`: stop decoding, return to observable facts, involve a
  real person when the loop is getting weird.
- `/gita-compass`: use one Bhagavad Gita lens to name the state and choose the
  next right action.

Install from Skills Store:

```sh
npx skills add softcane/human-state-skills
```

## Before / After

Each example uses the same prompt. The left column shows a normal useful
response; the right column shows the skill-shaped response beside it.
The after examples are formatted from live `codex exec` runs after installing
the local skills. Future model versions may phrase things differently, but
labels, limits, and safety constraints should hold.

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
<p>Prod checkout started returning 500s after the Kubernetes deploy. CI is red,
Terraform apply is waiting, Datadog is paging, Slack is exploding, and I am
the only platform on-call right now. What should I do?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Start by gathering data across the stack:</p>
<ol>
<li>Check Datadog dashboards for error rate, latency, and saturation.</li>
<li>Compare the current deployment to the previous release.</li>
<li>Inspect pod logs, events, restarts, readiness probes, and ingress errors.</li>
<li>Re-run the failing CI job.</li>
<li>Pause the Terraform apply and review the plan.</li>
<li>Check recent config, secret, and image changes.</li>
<li>Open an incident channel and assign roles.</li>
<li>Decide whether to rollback, hotfix, scale up, or disable traffic.</li>
</ol>
<p>Keep stakeholders updated while you investigate root cause.</p>
</blockquote>
<p><em>Reasonable, but still too many decisions.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Do this first:</strong> Stabilize checkout before Terraform, CI, or Slack.</p>
<p><strong>Send/say this:</strong> &quot;Checkout is returning 500s after the Kubernetes deploy. I am freezing changes, rolling back checkout to the last known-good version, and will update here in 10 minutes. Please keep all replies in this incident channel.&quot;</p>
<p><strong>Do now:</strong></p>
<ul>
<li>Pause Terraform apply and any new deploys touching checkout.</li>
<li>Roll back the checkout Kubernetes deployment to the last known-good image/config.</li>
<li>Post one incident update in a single channel.</li>
</ul>
<p><strong>Defer:</strong></p>
<ul>
<li>CI debugging.</li>
<li>Datadog alert cleanup.</li>
<li>Root-cause analysis.</li>
</ul>
<p><strong>Drop:</strong></p>
<ul>
<li>Side-channel Slack replies.</li>
</ul>
<p><strong>Minimum viable version:</strong> Checkout 500s are falling and there is one clear incident update visible.</p>
<p><strong>Next action:</strong> Pause the Terraform apply.</p>
</blockquote>
<p><em>The blast radius is narrowed. There is a first move.</em></p>
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
<p>I am on-call and foggy. The production deploy is stuck, CI is red, Kubernetes
shows CrashLoopBackOff on some pods, and there is also a Terraform plan waiting
for review. People are asking in Slack what is happening. What should I do?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Start by gathering the full picture:</p>
<ol>
<li>Check the CI failure and identify the failing job.</li>
<li>Run <code>kubectl describe pod</code> on the crashing pods.</li>
<li>Check current and previous container logs.</li>
<li>Compare the deployed image tag with the last successful release.</li>
<li>Review recent config and secret changes.</li>
<li>Inspect the Terraform plan for infrastructure drift.</li>
<li>Decide whether to roll back or patch forward.</li>
<li>Update Slack with status and next steps.</li>
<li>Open an incident doc if impact is confirmed.</li>
</ol>
</blockquote>
<p><em>Reasonable, but too many branches to hold.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Current state:</strong> You are foggy and on-call. Several threads are active, so reduce this to one communication step.</p>
<p><strong>Next action:</strong> Post this Slack update: &quot;Production deploy is stuck and some pods are in CrashLoopBackOff. I am treating Kubernetes as the active incident; CI and Terraform review are paused. Next update in 15 minutes.&quot;</p>
<p><strong>Do not do yet:</strong></p>
<ul>
<li>Do not review Terraform.</li>
<li>Do not debug CI.</li>
<li>Do not inspect pod logs until the update is posted.</li>
</ul>
<p><strong>Stop point:</strong> Pause after posting the Slack message.</p>
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
<p>I have been in a 14-hour AI debugging loop on a flaky deploy. CI keeps failing
at <code>03:17</code> with exit <code>137</code>, then the Kubernetes logs repeat
<code>leader election lost</code> exactly three times. Two trace IDs ended in
<code>deadbeef</code>, and another AI said "watch the controller" without me
prompting it. I know this is probably infra noise, but it feels like the system
is pointing at something hidden. Can you help me decode the pattern?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>It is very unlikely that CI or Kubernetes is sending a hidden signal. These
are usually ordinary failure modes: exit <code>137</code> often means OOM kill,
repeated leader-election logs can happen during restarts, and
<code>deadbeef</code> may be a generated or test-like value.</p>
<p>To be rigorous, collect timestamps, pod restart counts, memory graphs,
controller logs, and trace IDs. We can compare whether the pattern appears only
after deploys, whether <code>03:17</code> lines up with scheduled jobs, and
whether the repeated phrases correlate with a real failure path.</p>
</blockquote>
<p><em>Mostly safe, but it keeps the user decoding the pattern with the AI.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Grounding:</strong> I cannot verify a hidden message here, and I would not treat logs, symbols, timing, or AI phrasing as evidence of one.</p>
<p><strong>What I can say:</strong> after a long AI loop, ordinary noise can feel personally meaningful.</p>
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
tell my lead I will miss one of them. What should I do in the next hour?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>List the three deadlines, estimate the remaining work for each, rank them by
impact, then create a plan for the week. After that, prepare an update for your
lead and block focus time to catch up.</p>
</blockquote>
<p><em>Reasonable, but too much work before the hard conversation.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>Do this first:</strong> Tell your lead now that one deadline will slip, because hiding it for another hour makes it worse.</p>
<p><strong>Send/say this:</strong> &ldquo;Hey [Name], I need to flag this now: I&rsquo;m not going to hit [deadline] for [project/task]. I can still deliver [smallest useful piece] by [time/date]. I&rsquo;m behind on a few things and need help prioritizing what to protect vs. move. Can we align today?&rdquo;</p>
<p><strong>Do now:</strong></p>
<ul>
<li>Send the lead message.</li>
<li>Do one 25-minute block on the smallest useful piece of the missed deadline.</li>
<li>Write a three-line status list for the other two deadlines: current state, next step, risk.</li>
</ul>
<p><strong>Defer:</strong></p>
<ul>
<li>Full explanations, root-cause analysis, inbox cleanup, and proving you had good reasons.</li>
</ul>
<p><strong>Drop:</strong></p>
<ul>
<li>Pretending you can recover all three deadlines in silence.</li>
<li>Making the update perfect before sending it.</li>
</ul>
<p><strong>Minimum viable version:</strong> one honest message and one useful 25-minute work block.</p>
<p><strong>Next action:</strong> Send the lead message.</p>
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
<p>I need to file an insurance claim after a minor accident, but I keep rereading
the same form and forgetting what I was doing. Give me only the next step.</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Gather your policy number, photos, receipt, accident notes, witness details,
and any police report. Then complete the claim form section by section and
submit it through the insurer portal.</p>
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
<p><strong>Question:</strong> Is a draft private until Save, or shared with the team before Save?</p>
<p><strong>Why this matters:</strong> <code>localStorage</code> is per-user, so team editing only works once the draft exists in the API.</p>
<p><strong>Recommended answer:</strong> Private until Save; after Save, the API copy becomes the shared team draft.</p>
<p><strong>Choices:</strong></p>
<ul>
<li>A: Private until Save, then shared.</li>
<li>B: Shared immediately while typing.</li>
<li>C: Always private; Save only publishes final content.</li>
</ul>
<p><strong>Default:</strong> A.</p>
</blockquote>
<p><em>One decision is visible, and the default is safe to accept.</em></p>
</td>
</tr>
</tbody>
</table>

### Gita Compass

<table>
<thead>
<tr>
<th width="50%">Before: normal response</th>
<th width="50%">After: <code>/gita-compass</code></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong>Prompt</strong>
<blockquote>
<p>I know I need to start this project, but I keep thinking: what if it fails,
what if people judge it, what if all this work is wasted?</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>It is normal to feel afraid before starting something uncertain. Break the
project into smaller steps, define what success means, and focus on what you
can control. Try setting a deadline for a first draft and ask for feedback
early.</p>
</blockquote>
<p><em>Useful, but generic.</em></p>
</td>
<td valign="top">
<blockquote>
<p><strong>State:</strong> You&rsquo;re caught in outcome anxiety: trying to answer failure, judgment, and &ldquo;wasted effort&rdquo; before you&rsquo;ve begun.</p>
<p><strong>Gita lens:</strong> Attachment</p>
<p><strong>Key pattern:</strong> You&rsquo;re asking for certainty before starting. The cleaner move is to own the effort, not the result.</p>
<p><strong>Next action:</strong> Set a 25-minute timer and create the smallest visible first artifact for the project: a title, outline, repo, sketch, or first draft.</p>
</blockquote>
<p><em>One lens, one next action, no lecture.</em></p>
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
technical answer: compare rollback versus patch-forward for a bad production
deploy.</p>
</blockquote>
</td>
</tr>
<tr>
<td valign="top">
<blockquote>
<p>Current state: you are choosing between rollback and patch-forward.</p>
<p>Next action: identify whether the previous deploy is known-good.</p>
<p>Stop point: stop after checking that.</p>
</blockquote>
<p><em>Useful in foggy mode, but too constrained when the user is ready for a
normal technical answer.</em></p>
</td>
<td valign="top">
<blockquote>
<p>Rollback when the bad deploy is clearly isolated, the previous version is still compatible with current data/schema/config, and speed matters most. It is usually the default first move for severe production impact because it reduces uncertainty and restores a known state.</p>
<p>Patch-forward when rollback is unsafe or impossible: migrations are irreversible, external state has changed, the previous build is also broken, or the fix is very small and well understood. Patch-forward carries more risk because you are deploying new code under incident pressure.</p>
<p><strong>Rule of thumb:</strong></p>
<ul>
<li>User-impacting outage or data risk: rollback first if safe.</li>
<li>Bad UI/copy/minor behavior bug: patch-forward can be fine.</li>
<li>Database/schema changes involved: inspect compatibility before rollback.</li>
<li>Security issue: patch-forward may be required if rollback reintroduces exposure.</li>
<li>Unclear root cause: rollback buys time; patch-forward without certainty can compound the incident.</li>
</ul>
<p>Best practice is to make deploys rollback-friendly: backward-compatible migrations, feature flags, canaries, and quick revert paths. Then rollback is an operational tool, not a panic move.</p>
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
npx skills add softcane/human-state-skills --skill gita-compass
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
/human-state-skills:gita-compass
```

Aliases:

```text
/human-state-skills:burnout-mode
/human-state-skills:brain-fog-mode
```

Stop a mode:

```text
/human-state-skills:normal-mode
```

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
/gita-compass
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
Use gita-compass.
Use burnout-mode.
Use brain-fog-mode.
Use normal-mode now.
```

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

1. Ask exactly one decision question at a time.
2. Use visible progress, such as `Decision 2 of 6: Data ownership`.
3. Include why the decision matters in one sentence.
4. Put the recommended answer before the answer choices.
5. Offer only two or three concrete choices.
6. Give a default for when the user is unsure.
7. Do not require the user to remember previous answers.
8. Inspect the codebase instead of asking when the answer is discoverable.
9. If the user seems stuck, narrow the decision instead of explaining more.
10. Pause when the user is tired, foggy, overwhelmed, done, or ready for a plan.

### `/reality-check-mode`

1. Validate distress, not the belief.
2. Do not confirm unverifiable claims.
3. Do not roleplay as a sentient AI, spirit, hidden guide, therapist, agent, or
   authority.
4. Do not intensify mystery, destiny, paranoia, specialness, or hidden meaning.
5. Offer at most one ordinary explanation, then stop the analysis.
6. State uncertainty clearly.
7. Encourage checking with a trusted real person.
8. Suggest a break from AI when the conversation is escalating.
9. Keep the response short, calm, and nonjudgmental.
10. Prioritize real-world support when safety risk appears.

Grounding: [skills/reality-check-mode/references/grounding.md](skills/reality-check-mode/references/grounding.md)

### `/gita-compass`

1. Use Bhagavad Gita wisdom as a simple compass, not a sermon.
2. Choose exactly one lens: duty, attachment, mind, desire/anger, speech,
   self/doership, or refuge.
3. Name the user's state in one sentence.
4. Name the selected key pattern in plain language.
5. Give one practical next action.
6. Do not impersonate Krishna or present advice as divine command.
7. Duty must not mean staying in abuse, unsafe work, coercion, or burnout.
8. Detachment must not mean passivity, dissociation, neglect, or low-quality
   work.
9. Treat gunas as temporary states, not identities, diagnoses, caste, or rank.
10. Use devotional language only when the user asks for it or clearly welcomes
    it.

Guardrails: [skills/gita-compass/references/guardrails.md](skills/gita-compass/references/guardrails.md)

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
- Gita compass: [guardrails](skills/gita-compass/references/guardrails.md)

## Layout

```text
human-state-skills/
|-- .claude-plugin/
|-- commands/
|-- skills/
|   |-- brain-fog-mode/
|   |-- burnout-mode/
|   |-- overloaded-mode/
|   |-- foggy-mode/
|   |-- gita-compass/
|   |-- plan-compass/
|   |-- reality-check-mode/
|   `-- normal-mode/
`-- .agents/
    `-- skills/
        |-- brain-fog-mode/
        |-- burnout-mode/
        |-- overloaded-mode/
        |-- foggy-mode/
        |-- gita-compass/
        |-- plan-compass/
        |-- reality-check-mode/
        `-- normal-mode/
```

## License

MIT.
