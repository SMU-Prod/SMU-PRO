"use client";

import { useState } from "react";
import { adminToggleCourse } from "@/lib/actions/courses";
import { Badge } from "@/components/ui/badge";

export function CourseToggle({ id, ativo }: { id: string; ativo: boolean }) {
  const [active, setActive] = useState(ativo);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    setActive(!active);
    try {
      await adminToggleCourse(id, !active);
    } catch {
      setActive(active);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={toggle} disabled={loading} className="cursor-pointer">
      <Badge
        variant={active ? "success" : "secondary"}
        className="text-[10px] transition-all hover:opacity-80"
      >
        {loading ? "..." : active ? "Ativo" : "Rascunho"}
      </Badge>
    </button>
  );
}
