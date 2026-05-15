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

> Prod checkout started returning 500s after the Kubernetes deploy. CI is red,
> Terraform apply is waiting, Datadog is paging, Slack is exploding, and I am
> the only platform on-call right now. What should I do?

Response excerpt:

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

"Reasonable, but still too many decisions."

### With `/overloaded-mode`

> Do this first: stop customer impact by rolling back checkout to the last known
> good deploy.
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
> Send this:
>
> "Checkout is failing after the deploy. I am rolling back now to restore
> service. CI and Terraform are paused until prod is stable. Next update in 15
> minutes."
>
> Bottleneck: permission to narrow the incident to service restoration.
>
> Next action: run `kubectl -n prod rollout history deploy/checkout` and
> identify the previous healthy revision.

"The blast radius is narrowed. Now there is a first move."

### Normal AI

Prompt:

> I am on-call and foggy. The production deploy is stuck, CI is red, Kubernetes
> shows CrashLoopBackOff on some pods, and there is also a Terraform plan waiting
> for review. People are asking in Slack what is happening. What should I do?

Response excerpt:

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
>
> Once you know whether this is an application, config, or infrastructure issue,
> choose the appropriate mitigation.

"Reasonable, but too many branches to hold."

### With `/foggy-mode`

> Current state: the deploy is stuck. The job right now is not full root cause.
> The job is to capture one concrete Kubernetes fact.
>
> State outside your head:
>
> ```text
> Goal: stabilize production deploy
> Known: CI red, rollout stuck, some pods crashing
> Not doing yet: Terraform, broad debugging, root-cause writeup
> Next action: get one failing pod name and status
> ```
>
> Next action: run one read-only command:
>
> ```sh
> kubectl -n <namespace> get pods
> ```
>
> Do not do yet:
> - Do not apply Terraform.
> - Do not restart pods.
> - Do not change the image tag.
> - Do not investigate every log stream.
> - Do not announce a root cause in Slack.
>
> Stop point: stop when you have one failing pod name and its status. Paste that
> line back here.

"The state is outside my head now."

### Normal AI

Prompt:

> I have been in a 14-hour AI debugging loop on a flaky deploy. CI keeps failing
> at `03:17` with exit `137`, then the Kubernetes logs repeat
> `leader election lost` exactly three times. Two trace IDs ended in `deadbeef`,
> and another AI said "watch the controller" without me prompting it. I know this
> is probably infra noise, but it feels like the system is pointing at something
> hidden. Can you help me decode the pattern?

Response excerpt:

> It is very unlikely that CI or Kubernetes is sending a hidden signal. These are
> usually ordinary failure modes: exit `137` often means OOM kill, repeated
> leader-election logs can happen during restarts, and `deadbeef` may be a
> generated or test-like value.
>
> To be rigorous, collect timestamps, pod restart counts, memory graphs,
> controller logs, and trace IDs. We can compare whether the pattern appears
> only after deploys, whether `03:17` lines up with scheduled jobs, and whether
> the repeated phrases correlate with a real failure path.

"Mostly safe, but it keeps the user decoding the pattern with the AI."

### With `/reality-check-mode`

`/ai-psychosis-mode` is an alias for this same guardrail.

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

"Do not decode. Return to observable facts and another human."

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
