// Funniest One-Line Out-of-Office Reply
// make.fun bounty: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
// Writes a single one-line out-of-office reply to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, not only whitespace, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of the office until Monday — if it's urgent, it can wait; if it can wait, it's waiting until Monday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
