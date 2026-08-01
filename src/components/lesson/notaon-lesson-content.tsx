"use client";

import { useState, useEffect, type ComponentType } from "react";
import { NOTAON_LOADERS } from "@/lib/notaon/registry";

function Skeleton() {
  return (
    <div className="animate-pulse space-y-3 py-2">
      {[80, 95, 70, 88, 60, 75].map((w, i) => (
        <div key={i} className="h-3.5 rounded bg-surface-2" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}

export default function NotaonLessonContent({ pdfPath }: { pdfPath: string }) {
  const [subject, capStr] = pdfPath.replace("notaon:", "").split(":");
  const capNum = parseInt(capStr, 10);
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setComp(null);
    setError(false);
    const subjectLoader = NOTAON_LOADERS[subject];
    if (!subjectLoader) { setError(true); return; }
    subjectLoader()
      .then((subMod) => {
        const capLoader = subMod.default[capNum];
        if (!capLoader) { setError(true); return; }
        return capLoader().then((capMod) => setComp(() => capMod.default));
      })
      .catch(() => setError(true));
  }, [subject, capNum]);

  if (error) return (
    <p className="text-sm text-muted-light py-2">
      Conteúdo não disponível para esta aula.
    </p>
  );

  if (!Comp) return <Skeleton />;

  return (
    <div className="notaon-content">
      <Comp />
    </div>
  );
}
