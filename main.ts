// The One-Liner Groan-Off — writes exactly one original dad joke to /output/entry.txt.
// No network, no input, deterministic output.
// The joke turns on "cloud" doing double duty: the storage cloud where the
// photos live, and the rain cloud overhead — so a kid concludes rain is the
// internet leaking. Setup and punchline both live inside the single line,
// and the twist lands on the last two words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told my kids the cloud stores our photos — now they think rain is just the internet leaking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = joke + "\n";
// Self-check: the gate requires UTF-8 text of 1-140 characters, exactly one line.
if ([...text].length < 1 || [...text].length > 140) {
  throw new Error(`entry out of gate range: ${[...text].length} characters`);
}
if (text.trim().split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
