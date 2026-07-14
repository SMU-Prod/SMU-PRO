import Image from "@tiptap/extension-image";

// Resizable Image Extension — adds width/alignment attributes
export const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (el) => el.getAttribute("data-width") || el.style.width || null,
        renderHTML: (attrs) => attrs.width ? { "data-width": attrs.width, style: `width: ${attrs.width}` } : {},
      },
      alignment: {
        default: "center",
        parseHTML: (el) => el.getAttribute("data-alignment") || "center",
        renderHTML: (attrs) => ({ "data-alignment": attrs.alignment || "center" }),
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const alignment = HTMLAttributes["data-alignment"] || "center";
    const alignMap: Record<string, string> = { left: "flex-start", center: "center", right: "flex-end" };
    const justify = alignMap[alignment] || "center";
    const { "data-alignment": _, ...imgAttrs } = HTMLAttributes;
    return [
      "figure",
      { style: `display:flex;justify-content:${justify};margin:1rem 0;`, class: "editor-image-figure" },
      ["img", { ...imgAttrs, class: "rounded-lg" }],
    ];
  },
  parseHTML() {
    return [
      { tag: "figure.editor-image-figure img", getAttrs: (el: any) => ({ src: el.getAttribute("src") }) },
      { tag: "img[src]" },
    ];
  },
});
