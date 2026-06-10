import { describe, expect, it } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });

  it("defaults to world", () => {
    expect(greet("")).toBe("Hello, world!");
  });

  it("trims whitespace", () => {
    expect(greet("  Bob  ")).toBe("Hello, Bob!");
  });
});
