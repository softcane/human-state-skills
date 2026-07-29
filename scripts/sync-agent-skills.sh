#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
canonical_dir="$repo_dir/skills"
mirror_dir="$repo_dir/.agents/skills"

test -f "$repo_dir/.claude-plugin/plugin.json"
test -d "$canonical_dir"
test -d "$mirror_dir"

rsync -a --delete "$canonical_dir/" "$mirror_dir/"
diff -qr "$canonical_dir" "$mirror_dir"
