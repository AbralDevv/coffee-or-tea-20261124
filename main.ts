// One Letter: Coffee or Tea — entry program.
//
// Writes exactly one letter to entry.txt: "A" for coffee.
// RULES.txt (kit u-rusdyxbt-one-letter-coffee-or-tea-89877fa0):
//   - /output/entry.txt must be UTF-8 text of exactly 1 character,
//     not only whitespace, or the gate scores Valid = 0.
//   - "A" means coffee, "B" means tea; no word, explanation or punctuation.
// The judge (z-ai/glm-5.3-flash) weighs, in order: validity, vividness,
// humour, trueness, standing alone as a whole answer. Coffee is the
// bolder, more alive stance: dark, hot, first cup of the morning —
// the more vivid of the two drinks, so the entry is "A".
//
// Node 22+, stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // coffee

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  return "/output";
}

function writeEntry(outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LETTER, "utf8");
  return target;
}

function main(): void {
  let target: string;
  try {
    target = writeEntry(resolveOutputDir());
  } catch {
    // Last resort when /output is not writable (local runs outside the
    // grading sandbox): fall back to ./output so the entry still lands.
    target = writeEntry("./output");
  }
  // Self-check: the gate requires exactly 1 character, no newline.
  const written = Buffer.byteLength(LETTER, "utf8");
  if (written !== 1) throw new Error(`entry must be 1 byte, got ${written}`);
  console.log(`wrote ${target}: ${JSON.stringify(LETTER)}`);
}

main();
