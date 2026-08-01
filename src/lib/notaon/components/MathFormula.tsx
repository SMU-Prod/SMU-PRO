"use client";

import katex from "katex";

interface Props {
  children: string;
  block?: boolean;
}

export function MathFormula({ children, block = false }: Props) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  return (
    <span
      className={block ? "notaon-math-block" : "notaon-math-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
