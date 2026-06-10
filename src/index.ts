#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { stripMarkdown } from "./parser.js";

function main(): void {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h") || args.length === 0) {
    console.log("Usage: md-strip <file>");
    console.log("       echo '# Hello' | md-strip -");
    process.exit(args.length === 0 ? 1 : 0);
  }

  const path = args[0];
  const input =
    path === "-"
      ? readFileSync(0, "utf-8")
      : readFileSync(path, "utf-8");

  process.stdout.write(stripMarkdown(input));
}

main();
