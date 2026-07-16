import { describe, it, expect } from "vitest";
import { sanitizeBlogHtml } from "./sanitize";

describe("sanitizeBlogHtml", () => {
  it("remove <script>", () => {
    expect(sanitizeBlogHtml('<p>ok</p><script>alert(1)</script>')).toBe("<p>ok</p>");
  });

  it("remove handlers on* (onerror, onclick)", () => {
    const out = sanitizeBlogHtml('<img src=x onerror="alert(1)"><p onclick="x()">t</p>');
    expect(out).not.toContain("onerror");
    expect(out).not.toContain("onclick");
  });

  it("neutraliza href javascript:", () => {
    const out = sanitizeBlogHtml('<a href="javascript:alert(1)">x</a>');
    expect(out).not.toContain("javascript:");
  });

  it("preserva formatação legítima do blog", () => {
    const html = '<h2>Título</h2><p>Texto <strong>forte</strong></p><ul><li>item</li></ul>';
    expect(sanitizeBlogHtml(html)).toBe(html);
  });

  it("força rel seguro em links externos", () => {
    const out = sanitizeBlogHtml('<a href="https://x.com">link</a>');
    expect(out).toContain('rel="noopener noreferrer nofollow"');
  });

  it("trata null/undefined", () => {
    expect(sanitizeBlogHtml(null)).toBe("");
    expect(sanitizeBlogHtml(undefined)).toBe("");
  });
});
