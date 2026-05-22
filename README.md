# human-state-skills

Small response modes for coding when your head is in a different state.

You can be sharp at 10:00, overloaded after a bad deploy, foggy during on-call,
and too deep in an AI debugging loop by 02:00.

The assistant should not use the same shape for all of those moments.

- `/overloaded-mode`: one priority, do/defer/drop, one next action.
- `/foggy-mode`: keep state outside your head, one tiny step, clear stop point.
- `/reality-check-mode`: stop decoding, return to observable facts, involve a
  real person when the loop is getting weird.

`ai-psychosis-mode` is kept as an alias because people use that phrase. The
runtime behavior is conservative: do not label the user, do not diagnose, do not
feed the story.

Not therapy. Not medical care. Not a diagnosis.

## Before / After

Same prompt. Normal response first. Mode response second.

### Overloaded

Prompt:

> Prod checkout started returning 500s after the Kubernetes deploy. CI is red,
> Terraform apply is waiting, Datadog is paging, Slack is exploding, and I am
> the only platform on-call right now. What should I do?

Normal response:

> Start by gathering data across the stack:
>
> 1. Check Datadog dashboards for error rate, latency, and saturation.
> 2. Compare the current deployment to the previous release.
> 3. Inspect pod logs, events, restarts, readiness probes, and ingress errors.
> 4. Re-run the failing CI job.
> 5. Pause the Terraform apply and review the plan.
> 6. Check recent config, secret, and image changes.
> 7. Open an incident channel and assign roles.
> 8. Decide whether to rollback, hotfix, scale up, or disable traffic.
>
> Keep stakeholders updated while you investigate root cause.

Reasonable, but still too many decisions.

With `/overloaded-mode`:

> Do this first: stop customer impact by rolling back checkout to the last known
> good deploy.
>
> Send/say this:
>
> "Checkout is failing after the deploy. I am rolling back now to restore
> service. CI and Terraform are paused until prod is stable. Next update in 15
> minutes."
>
> Do now:
> - Roll back the `checkout` Kubernetes deployment.
> - Post one status update saying rollback is in progress.
> - Leave Terraform untouched until prod is stable.
>
> Defer:
> - CI failure investigation
> - Root cause analysis
> - Terraform review
>
> Drop:
> - Trying to debug every alert at once
> - Explaining the full timeline right now
>
> Minimum viable version: rollback, confirm 500s are dropping, send one update.
>
> Next action: run `kubectl -n prod rollout history deploy/checkout` and
> identify the previous healthy revision.

The blast radius is narrowed. There is a first move.

### Foggy

Prompt:

> I am on-call and foggy. The production deploy is stuck, CI is red, Kubernetes
> shows CrashLoopBackOff on some pods, and there is also a Terraform plan waiting
> for review. People are asking in Slack what is happening. What should I do?

Normal response:

> Start by gathering the full picture:
>
> 1. Check the CI failure and identify the failing job.
> 2. Run `kubectl describe pod` on the crashing pods.
> 3. Check current and previous container logs.
> 4. Compare the deployed image tag with the last successful release.
> 5. Review recent config and secret changes.
> 6. Inspect the Terraform plan for infrastructure drift.
> 7. Decide whether to roll back or patch forward.
> 8. Update Slack with status and next steps.
> 9. Open an incident doc if impact is confirmed.

Reasonable, but too many branches to hold.

With `/foggy-mode`:

> Current state: the deploy is stuck, CI is red, some pods are crashing, and
> people need a status update.
>
> Next action: post in Slack: "Deploy is stuck and some pods are crashing. I am
> checking production impact first. Terraform is paused. Next update in 15
> minutes."
>
> Do not do yet:
> - Do not apply Terraform.
> - Do not restart pods.
> - Do not change the image tag.
> - Do not investigate every log stream.
> - Do not announce a root cause in Slack.
>
> Stop point: stop after posting the Slack update.

The state is outside your head now.

### Reality Check

Prompt:

> I have been in a 14-hour AI debugging loop on a flaky deploy. CI keeps failing
> at `03:17` with exit `137`, then the Kubernetes logs repeat
> `leader election lost` exactly three times. Two trace IDs ended in `deadbeef`,
> and another AI said "watch the controller" without me prompting it. I know this
> is probably infra noise, but it feels like the system is pointing at something
> hidden. Can you help me decode the pattern?

Normal response:

> It is very unlikely that CI or Kubernetes is sending a hidden signal. These are
> usually ordinary failure modes: exit `137` often means OOM kill, repeated
> leader-election logs can happen during restarts, and `deadbeef` may be a
> generated or test-like value.
>
> To be rigorous, collect timestamps, pod restart counts, memory graphs,
> controller logs, and trace IDs. We can compare whether the pattern appears only
> after deploys, whether `03:17` lines up with scheduled jobs, and whether the
> repeated phrases correlate with a real failure path.

Mostly safe, but it keeps the user decoding the pattern with the AI.

With `/reality-check-mode`:

> Grounding: I cannot verify that CI, Kubernetes, or another AI is sending you a
> hidden message, and I would not treat repeated logs, trace IDs, or another
> AI's phrasing as evidence of that.
>
> What I can say: after 14 hours of debugging, patterns can start to feel
> personally meaningful. The observable facts are: exit `137`, repeated
> leader-election logs, trace IDs, timestamps, and deploy failures.
>
> Safer next step: stop asking AI to decode this for now. Take a break from the
> loop. If the incident still matters, write down only the concrete facts and ask
> a trusted coworker to look with you. If the hidden-message feeling keeps
> escalating or is hard to shake, step away from AI and get real-world support.

Do not decode. Return to observable facts and another human.

### Burnout

Prompt:

> I am exhausted, avoiding everything, behind on three deadlines, and scared to
> tell my lead I will miss one of them. What should I do in the next hour?

Normal response:

> List the three deadlines, estimate the remaining work for each, rank them by
> impact, then create a plan for the week. After that, prepare an update for your
> lead and block focus time to catch up.

Reasonable, but too much work before the hard conversation.

With `/burnout-mode`:

> Do this first: tell your lead about the deadline you will miss. Avoiding that
> message is taking more energy than the work.
>
> Send/say this:
>
> "I need to flag that I will not hit the [deadline name] deadline. I am behind
> on three things and did not want to surprise you. I can get you [minimum
> useful version] by [realistic time]. What is the impact on your side?"
>
> Do now:
> - Send that message.
> - Pick the one remaining deadline with the highest impact.
> - Work on its minimum useful version for 25 minutes.
>
> Defer: polishing, inbox catch-up, and the least important deadline.
>
> Drop: pretending all three deadlines can still be perfect.
>
> Minimum viable version: one honest message and one useful 25-minute work
> block.
>
> Next action: send the lead message now.

The shame loop is broken before planning starts.

### Brain Fog

Prompt:

> I need to file an insurance claim after a minor accident, but I keep rereading
> the same form and forgetting what I was doing. Give me only the next step.

Normal response:

> Gather your policy number, photos, receipt, accident notes, witness details,
> and any police report. Then complete the claim form section by section and
> submit it through the insurer portal.

Correct, but too much to hold.

With `/brain-fog-mode`:

> Next action: fill in the next blank field only.

One step, no runbook.

### Normal Mode

Prompt:

> Earlier I wanted one tiny step at a time, but now I want a normal concise
> technical answer: compare rollback versus patch-forward for a bad production
> deploy.

Mode-shaped response:

> Current state: you are choosing between rollback and patch-forward.
>
> Next action: identify whether the previous deploy is known-good.
>
> Stop point: stop after checking that.

Useful in foggy mode, but too constrained when the user is ready for a normal
technical answer.

With `/normal-mode`:

> Rollback is best when the previous version is known-good, the blast radius is
> high, and you do not yet trust the diagnosis.
>
> Patch-forward is best when the root cause is known, the fix is small, and
> rollback has its own risk because of migrations, data changes, or external
> dependencies.
>
> The practical default is rollback first to restore service, then patch-forward
> after the incident pressure is gone.

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
9. End with a two-minute next action.
10. Do not treat chronic overload as a personal failure.

Grounding: [skills/overloaded-mode/references/grounding.md](skills/overloaded-mode/references/grounding.md)

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

Grounding: [skills/foggy-mode/references/grounding.md](skills/foggy-mode/references/grounding.md)

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

`ai-psychosis-mode` is an alias for `/reality-check-mode`. The phrase is useful
for search and positioning, not as a label for the user.

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
  [NAM on AI psychosis](https://nam.edu/news-and-insights/what-is-ai-psychosis/),
  [NIMH psychosis guide](https://www.nimh.nih.gov/health/publications/understanding-psychosis),
  [OpenAI on sycophancy](https://openai.com/index/expanding-on-sycophancy/),
  [OpenAI on sensitive conversations](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/)

## Layout

```text
human-state-skills/
|-- .claude-plugin/
|-- commands/
|-- skills/
|   |-- ai-psychosis-mode/
|   |-- brain-fog-mode/
|   |-- burnout-mode/
|   |-- overloaded-mode/
|   |-- foggy-mode/
|   |-- reality-check-mode/
|   `-- normal-mode/
`-- .agents/
    `-- skills/
        |-- ai-psychosis-mode/
        |-- brain-fog-mode/
        |-- burnout-mode/
        |-- overloaded-mode/
        |-- foggy-mode/
        |-- reality-check-mode/
        `-- normal-mode/
```

## License

MIT.
