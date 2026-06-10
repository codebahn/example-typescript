import { describe, expect, it } from "vitest";
import { stripMarkdown } from "./parser.js";

describe("stripMarkdown", () => {
  it("strips headings", () => {
    expect(stripMarkdown("# Title")).toBe("Title\n");
    expect(stripMarkdown("### Subsection")).toBe("Subsection\n");
  });

  it("strips bold and italic", () => {
    expect(stripMarkdown("**bold**")).toBe("bold\n");
    expect(stripMarkdown("*italic*")).toBe("italic\n");
    expect(stripMarkdown("***both***")).toBe("both\n");
  });

  it("strips inline code", () => {
    expect(stripMarkdown("run `npm test` now")).toBe("run npm test now\n");
  });

  it("strips fenced code blocks", () => {
    const input = "before\n```ts\nconst x = 1;\n```\nafter";
    expect(stripMarkdown(input)).toBe("before\nconst x = 1;\n\nafter\n");
  });

  it("converts links to text", () => {
    expect(stripMarkdown("[Codebahn](https://codebahn.net)")).toBe(
      "Codebahn\n",
    );
  });

  it("converts images to alt text", () => {
    expect(stripMarkdown("![logo](./logo.png)")).toBe("logo\n");
  });

  it("strips blockquotes", () => {
    expect(stripMarkdown("> quoted text")).toBe("quoted text\n");
  });

  it("strips unordered list markers", () => {
    const input = "- one\n- two\n- three";
    expect(stripMarkdown(input)).toBe("one\ntwo\nthree\n");
  });

  it("strips strikethrough", () => {
    expect(stripMarkdown("~~removed~~")).toBe("removed\n");
  });

  it("handles a realistic document", () => {
    const doc = [
      "# Getting Started",
      "",
      "Install the **CLI** with `npm install`.",
      "",
      "- Run `md-strip file.md`",
      "- Pipe from stdin: `echo '# hi' | md-strip -`",
      "",
      "> Works on any markdown file.",
      "",
      "See [docs](https://docs.codebahn.net) for more.",
    ].join("\n");

    const expected = [
      "Getting Started",
      "",
      "Install the CLI with npm install.",
      "",
      "Run md-strip file.md",
      "Pipe from stdin: echo '# hi' | md-strip -",
      "",
      "Works on any markdown file.",
      "",
      "See docs for more.",
    ].join("\n");

    expect(stripMarkdown(doc)).toBe(expected + "\n");
  });
});
