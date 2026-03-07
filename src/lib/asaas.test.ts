import { describe, it, expect } from "vitest";
import { getDueDate } from "./asaas";

describe("getDueDate", () => {
  it("returns date in YYYY-MM-DD format", () => {
    const result = getDueDate(3);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("defaults to 3 days from now", () => {
    const result = getDueDate();
    const expected = new Date();
    expected.setDate(expected.getDate() + 3);
    expect(result).toBe(expected.toISOString().split("T")[0]);
  });

  it("handles 0 days (today)", () => {
    const result = getDueDate(0);
    const today = new Date().toISOString().split("T")[0];
    expect(result).toBe(today);
  });

  it("handles large day offsets", () => {
    const result = getDueDate(30);
    const expected = new Date();
    expected.setDate(expected.getDate() + 30);
    expect(result).toBe(expected.toISOString().split("T")[0]);
  });
});
