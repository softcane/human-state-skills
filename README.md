# human-state-skills

Small response modes for coding when your head is in a different state.

You can be sharp at 10:00, overloaded after a bad deploy, foggy during on-call,
and too deep in an AI debugging loop by 02:00.

The assistant should not use the same shape for all of those moments.

- `/overloaded-mode`: one priority, do/defer/drop, one next action.
- `/foggy-mode`: keep state outside your head, one tiny step, clear stop point.
- `/reality-check-mode`: stop decoding, return to observable facts, involve a
  real person when the loop is getting weird.

## Before / After

Each example uses the same prompt. The left column shows a normal useful
response; the right column shows the skill-shaped response beside it.

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
<p>Do this first: stop customer impact by rolling back checkout to the last known
good deploy.</p>
<p>Send/say this:</p>
<p>"Checkout is failing after the deploy. I am rolling back now to restore
service. CI and Terraform are paused until prod is stable. Next update in 15
minutes."</p>
<p>Do now:</p>
<ul>
<li>Roll back the <code>checkout</code> Kubernetes deployment.</li>
<li>Post one status update saying rollback is in progress.</li>
<li>Leave Terraform untouched until prod is stable.</li>
</ul>
<p>Defer:</p>
<ul>
<li>CI failure investigation</li>
<li>Root cause analysis</li>
<li>Terraform review</li>
</ul>
<p>Drop:</p>
<ul>
<li>Trying to debug every alert at once</li>
<li>Explaining the full timeline right now</li>
</ul>
<p>Minimum viable version: checkout is back on the last known-good release and
the incident channel has one clear update.</p>
<p>Next action: post the status message.</p>
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
<p>Current state: the deploy is stuck, CI is red, some pods are crashing, and
people need a status update.</p>
<p>Next action: post in Slack: "Deploy is stuck and some pods are crashing. I am
checking production impact first. Terraform is paused. Next update in 15
minutes."</p>
<p>Do not do yet:</p>
<ul>
<li>Do not apply Terraform.</li>
<li>Do not restart pods.</li>
<li>Do not change the image tag.</li>
<li>Do not investigate every log stream.</li>
<li>Do not announce a root cause in Slack.</li>
</ul>
<p>Stop point: Pause after posting the Slack message.</p>
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
<p>Grounding: I cannot verify a hidden message here, and I would not treat logs,
symbols, timing, or AI phrasing as evidence of one.</p>
<p>What I can say: after a long AI loop, ordinary noise can feel personally
meaningful.</p>
<p>Safer next step: send one message to a trusted real person.</p>
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
<p>Do this first: tell your lead about the deadline you will miss.</p>
<p>Send/say this:</p>
<p>"I need to flag that I will not hit the [deadline name] deadline. I am behind
on three things and did not want to surprise you. I can get you [minimum useful
version] by [realistic time]. What is the impact on your side?"</p>
<p>Do now:</p>
<ul>
<li>Send that message.</li>
<li>Pick the one remaining deadline with the highest impact.</li>
<li>Work on its minimum useful version for 25 minutes.</li>
</ul>
<p>Defer: polishing, inbox catch-up, and the least important deadline.</p>
<p>Drop: pretending all three deadlines can still be perfect.</p>
<p>Minimum viable version: one honest message and one useful 25-minute work
block.</p>
<p>Next action: Send the lead message.</p>
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
<p>Next action: fill in the next blank field only.</p>
</blockquote>
<p><em>One step, no runbook.</em></p>
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
<p>Rollback is best when the previous version is known-good, the blast radius is
high, and you do not yet trust the diagnosis.</p>
<p>Patch-forward is best when the root cause is known, the fix is small, and
rollback has its own risk because of migrations, data changes, or external
dependencies.</p>
<p>The practical default is rollback first to restore service, then patch-forward
after the incident pressure is gone.</p>
</blockquote>
</td>
</tr>
</tbody>
</table>

## Install

### Claude Code Plugin Install

```sh
claude plugin marketplace add softcane/human-state-skills
claude plugin install human-state-skills@human-state-skills
```

Invoke:

```text
/human-state-skills:overloaded-mode
/human-state-skills:foggy-mode
/human-state-skills:reality-check-mode
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
Use reality-check-mode.
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
|   |-- brain-fog-mode/
|   |-- burnout-mode/
|   |-- overloaded-mode/
|   |-- foggy-mode/
|   |-- reality-check-mode/
|   `-- normal-mode/
`-- .agents/
    `-- skills/
        |-- brain-fog-mode/
        |-- burnout-mode/
        |-- overloaded-mode/
        |-- foggy-mode/
        |-- reality-check-mode/
        `-- normal-mode/
```

## License

MIT.
