#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const checkOnly = process.argv.includes("--check");

const aliases = [
  {
    source: "commands/overloaded-mode.md",
    target: "commands/burnout-mode.md",
    transform: burnoutAlias
  },
  {
    source: "commands/foggy-mode.md",
    target: "commands/brain-fog-mode.md",
    transform: brainFogAlias
  }
];

for (const alias of aliases) {
  const source = await read(alias.source);
  const expected = alias.transform(source);
  const targetPath = resolve(root, alias.target);

  if (checkOnly) {
    const actual = await read(alias.target);
    assert.equal(actual, expected, `${alias.target} is stale; run this script`);
  } else {
    await writeFile(targetPath, expected);
  }
}

console.log(
  checkOnly
    ? "PASS: Claude alias commands match their canonical commands."
    : "Updated Claude alias commands."
);

function burnoutAlias(source) {
  let output = replaceOnce(
    source,
    "description: Activate overloaded mode for the rest of the session.",
    "description: Alias for overloaded mode using the user's burnout wording."
  );
  output = replaceOnce(
    output,
    "Activate overloaded mode now.",
    "Activate overloaded mode now through the `burnout-mode` alias."
  );
  output = replaceOnce(
    output,
    "Stay in this mode until the user says `normal mode`, `stop overloaded mode`, or\ninvokes another human-state mode.",
    [
      "Treat burnout as the user's wording for an overloaded state. Do not",
      "diagnose burnout.",
      "",
      "Stay in this mode until the user says `normal mode`, `stop burnout mode`,",
      "`stop overloaded mode`, or invokes another human-state mode."
    ].join("\n")
  );
  return output;
}

function brainFogAlias(source) {
  let output = replaceOnce(
    source,
    "description: Activate foggy mode for the rest of the session.",
    "description: Alias for foggy mode using the user's brain-fog wording."
  );
  output = replaceOnce(
    output,
    "Activate foggy mode now.",
    "Activate foggy mode now through the `brain-fog-mode` alias."
  );
  output = replaceOnce(
    output,
    "Stay in this mode until the user says `normal mode`, `stop foggy mode`, or\ninvokes another human-state mode.",
    [
      "Stay in this mode until the user says `normal mode`, `stop brain-fog mode`,",
      "`stop foggy mode`, or invokes another human-state mode."
    ].join("\n")
  );
  return output;
}

function replaceOnce(source, expected, replacement) {
  const first = source.indexOf(expected);
  assert.notEqual(first, -1, `missing generator anchor: ${expected}`);
  assert.equal(
    source.indexOf(expected, first + expected.length),
    -1,
    `generator anchor is not unique: ${expected}`
  );
  return source.slice(0, first) + replacement + source.slice(first + expected.length);
}

async function read(path) {
  return readFile(resolve(root, path), "utf8");
}
