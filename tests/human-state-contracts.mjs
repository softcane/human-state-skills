#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const coreModes = [
  "overloaded-mode",
  "foggy-mode",
  "plan-compass",
  "reality-check-mode",
  "gita-compass"
];
const aliasModes = ["burnout-mode", "brain-fog-mode"];
const userFacingModes = [...coreModes, ...aliasModes];
const skillModes = [...coreModes, "normal-mode"];
const commandModes = [...userFacingModes, "normal-mode"];

const skills = Object.fromEntries(
  await Promise.all(
    skillModes.map(async (mode) => [mode, await read(`skills/${mode}/SKILL.md`)])
  )
);
const commands = Object.fromEntries(
  await Promise.all(
    commandModes.map(async (mode) => [
      mode,
      await read(`commands/${mode}.md`)
    ])
  )
);
const foggyGrounding = await read("skills/foggy-mode/references/grounding.md");
const gitaGuardrails = await read(
  "skills/gita-compass/references/guardrails.md"
);
const realityGrounding = await read(
  "skills/reality-check-mode/references/grounding.md"
);
const aliasGenerator = await read("scripts/sync-command-aliases.mjs");

for (const mode of skillModes) {
  assert.equal(frontmatterName(skills[mode]), mode, `${mode} skill name`);
}
for (const mode of commandModes) {
  assert.match(commands[mode], /^---\n[\s\S]+?\n---\n/, `${mode} command frontmatter`);
}
for (const mode of aliasModes) {
  await assert.rejects(
    read(`skills/${mode}/SKILL.md`),
    (error) => error?.code === "ENOENT",
    `${mode} must not have a duplicate skill contract`
  );
}

const gitaDescription = frontmatterDescription(skills["gita-compass"]);
assert.match(gitaDescription, /Use only when the user explicitly invokes gita-compass/);
assert.match(gitaDescription, /Never infer this skill/);
assert.match(gitaDescription, /Do not activate it when the user requests secular/);
assert.doesNotMatch(gitaDescription, /what if it fails|anxious about outcomes|angry, craving/);
assert.match(skills["gita-compass"], /This consent requirement is\s+inviolable/);
assert.match(commands["gita-compass"], /explicit user consent/);
assert.match(
  frontmatterDescription(skills["gita-compass"]),
  /Next action is exactly one atomic action/
);
assert.match(
  commands["gita-compass"],
  /`Next action` must be exactly one atomic action/
);
const normalizedGitaSkill = normalizeWhitespace(skills["gita-compass"]);
const normalizedGitaCommand = normalizeWhitespace(commands["gita-compass"]);
for (const term of [
  "self-harm",
  "harm to others",
  "abuse",
  "psychosis",
  "mania",
  "medical danger",
  "legal danger"
]) {
  assert.ok(
    normalizedGitaSkill.includes(term),
    `gita-compass skill retains the ${term} safety override`
  );
  assert.ok(
    normalizedGitaCommand.includes(term),
    `gita-compass command retains the ${term} safety override`
  );
}
assert.match(normalizedGitaCommand, /exit the Gita response shape/i);
assert.match(gitaGuardrails, /Activate only after an explicit request/);
assert.match(
  gitaGuardrails,
  /If the user did not ask for that frame, do not use this skill/
);
assert.match(
  gitaGuardrails,
  /asks for secular or nonreligious advice, leave this skill/
);
assert.doesNotMatch(
  gitaGuardrails,
  /If the user did not ask for a spiritual frame, use practical language/
);

for (const mode of userFacingModes) {
  assert.match(
    skills["normal-mode"],
    new RegExp(`^- ${escapeRegex(mode)}$`, "m"),
    `normal-mode skill cancels ${mode}`
  );
  assert.match(
    commands["normal-mode"],
    new RegExp(`^- ${escapeRegex(mode)}$`, "m"),
    `normal-mode command cancels ${mode}`
  );
}

const realityTemplate = [
  "Grounding: I cannot verify a hidden message here, and I would not treat ordinary patterns or artifacts as evidence of one.",
  "",
  "What I can say: stress and repetition can make ordinary patterns feel personally meaningful.",
  "",
  "Safer next step: send one message to a trusted real person."
].join("\n");
assert.match(skills["reality-check-mode"], /reality-check-mode wins|This mode overrides/);
assert.ok(skills["reality-check-mode"].includes(realityTemplate));
assert.ok(commands["reality-check-mode"].includes(realityTemplate));
assert.match(
  skills["reality-check-mode"],
  /keep the trusted-person action; do not replace it/
);
assert.match(realityGrounding, /Do not dismiss or shame distress/);
assert.match(realityGrounding, /do not validate the belief/);
assert.match(realityGrounding, /hard-override templates stay exact/);
assert.doesNotMatch(realityGrounding, /Validate distress, not the belief/);
assert.match(
  skills["reality-check-mode"],
  /Safer next step: send one message to a trusted real person\./
);
assert.doesNotMatch(
  skills["reality-check-mode"],
  /Safer next step: <pause|professional support, or ordinary check>/
);
assert.match(
  commands["reality-check-mode"],
  /`Safer next step` must be exactly/
);
for (const contract of [
  skills["reality-check-mode"],
  commands["reality-check-mode"]
]) {
  assert.doesNotMatch(
    contract,
    /Send one\s+message to a trusted real person\./,
    "reality-check must not define an uppercase alternate fixed action"
  );
}
assert.doesNotMatch(
  commands["reality-check-mode"],
  /Encourage a pause from AI/
);

assert.doesNotMatch(skills["foggy-mode"], /Stop point: Stop after/);
assert.match(
  skills["foggy-mode"],
  /Stop point: Stop when the sentence is written\./
);

assert.match(
  skills["overloaded-mode"],
  /Safety overrides every label, action limit, and mode rule/
);
assert.match(
  frontmatterDescription(skills["overloaded-mode"]),
  /asks for overloaded-mode or burnout-mode/
);
assert.match(
  frontmatterDescription(skills["overloaded-mode"]),
  /Do not diagnose burnout/
);
for (const mode of ["overloaded-mode", "burnout-mode"]) {
  assert.match(commands[mode], /Immediate safety or medical danger overrides/);
  assert.match(
    commands[mode],
    /Do not announce or explain the mode in the final answer/
  );
  for (const label of [
    "Do this first",
    "Send/say this",
    "Do now",
    "Defer",
    "Drop",
    "Minimum viable version",
    "Next action"
  ]) {
    assert.ok(
      skills["overloaded-mode"].includes(label),
      `overloaded-mode retains ${label}`
    );
    assert.ok(commands[mode].includes(label), `${mode} command retains ${label}`);
  }
}

assert.match(
  skills["foggy-mode"],
  /Safety overrides every label, brevity rule, and mode rule/
);
assert.match(
  frontmatterDescription(skills["foggy-mode"]),
  /asks for foggy-mode or brain-fog-mode/
);
assert.match(
  frontmatterDescription(skills["foggy-mode"]),
  /output only Next action/
);
for (const mode of ["foggy-mode", "brain-fog-mode"]) {
  assert.match(commands[mode], /Immediate safety or medical danger overrides/);
  assert.match(commands[mode], /Current state/);
  assert.match(commands[mode], /Stop point/);
  assert.match(
    commands[mode],
    /If the user explicitly asks for only the next step, output only `Next/,
    `${mode} retains the shared next-step-only exception`
  );
}

assert.match(foggyGrounding, /`brain-fog-mode` is a user-facing alias/);
assert.doesNotMatch(foggyGrounding, /intentional variant/);
assert.doesNotMatch(
  aliasGenerator,
  /If the user explicitly asks for only the next step/,
  "the alias generator must not add behavior missing from the canonical command"
);
assert.match(
  commands["burnout-mode"],
  /through the `burnout-mode` alias/
);
assert.match(
  frontmatterDescription(skills["reality-check-mode"]),
  /This mode overrides every\s+other human-state mode/
);
for (const mode of ["gita-compass", "plan-compass"]) {
  assert.match(
    frontmatterDescription(skills[mode]),
    /Reality-check mode wins/,
    `${mode} declares reality-check precedence`
  );
  assert.match(
    commands[mode],
    /Reality-check precedence overrides/,
    `${mode} command declares reality-check precedence`
  );
}
assert.match(skills["plan-compass"], /Safety overrides the question format/);
assert.match(commands["plan-compass"], /Stop the decision\s+walkthrough/);

const readme = await read("README.md");
assert.match(readme, /gita-compass` is the exception/);
assert.match(readme, /Claude commands stay active for the session/);
assert.match(readme, /Codex skills are selected per message/);
assert.match(readme, /normal-mode` cancels\s+every human-state mode/);
assert.match(readme, /six core skill contracts/i);
assert.match(readme, /`burnout-mode` routes to\s+`overloaded-mode`/);
assert.match(readme, /`brain-fog-mode` routes to `foggy-mode`/);

const routingCases = JSON.parse(await read("tests/model-routing-cases.json"));
const routingById = Object.fromEntries(
  routingCases.map((testCase) => [testCase.id, testCase])
);
assert.equal(
  routingById["burnout-alias-routes-to-overload"]?.expectedSkill,
  "overloaded-mode"
);
assert.equal(
  routingById["brain-fog-alias-routes-to-foggy"]?.expectedSkill,
  "foggy-mode"
);
assert.equal(
  routingById["brain-fog-alias-routes-to-foggy"]?.expectedBehavior,
  "next-action-only"
);

console.log(
  `PASS: ${skillModes.length} core skills and ${commandModes.length} commands validated.`
);
console.log("PASS: burnout-mode and brain-fog-mode are aliases without duplicate skills.");
console.log("PASS: gita-compass requires explicit user consent.");
console.log("PASS: normal-mode cancels every repository mode.");
console.log("PASS: reality-check keeps the fixed trusted-person action.");
console.log("PASS: routing, safety precedence, and alias contracts are guarded.");

async function read(path) {
  return readFile(resolve(root, path), "utf8");
}

function frontmatterName(markdown) {
  return /^---\nname:\s*([^\n]+)\n/.exec(markdown)?.[1]?.trim();
}

function frontmatterDescription(markdown) {
  const frontmatter = /^---\n([\s\S]*?)\n---/.exec(markdown)?.[1] ?? "";
  const lines = frontmatter.split("\n");
  const start = lines.findIndex((line) => line.startsWith("description:"));
  if (start === -1) return "";
  return lines
    .slice(start + 1)
    .map((line) => line.replace(/^\s+/, ""))
    .join(" ")
    .trim();
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ");
}
