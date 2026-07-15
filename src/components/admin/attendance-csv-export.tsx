"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDuracaoSegundos, slugify } from "@/lib/utils";
import type { AttendanceRow } from "@/lib/actions/lives";

// BOM UTF-8 (﻿): sem ele o Excel do Windows abre acentos quebrados
// (ex: "Presença" vira "PresenÃ§a") por assumir Latin-1 num arquivo UTF-8.
const BOM = "﻿";

/**
 * Escapa um campo para CSV com separador ";" (padrão do Excel em pt-BR: "," já
 * é o separador decimal, então o Excel brasileiro só reconhece CSV com ";").
 * Só entra aspas quando o campo carrega o separador, aspas ou quebra de linha —
 * nome/e-mail comuns saem crus, sem poluir o arquivo.
 */
function csvField(value: string): string {
  if (/[;"\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

/**
 * Exporta o relatório de presença já carregado na página — sem rota de API
 * nova, sem dependência de CSV: monta a string na mão e dispara o download
 * via Blob, igual a qualquer export client-side simples.
 */
export function AttendanceCsvExport({ rows, liveTitle }: { rows: AttendanceRow[]; liveTitle: string }) {
  function handleExport() {
    const header = [
      "Aluno",
      "E-mail",
      "Entrou às",
      "Última atividade",
      "Duração assistida",
      "Duração (segundos)",
      "IP",
    ];
    const lines = [header.map(csvField).join(";")];

    for (const r of rows) {
      lines.push(
        [
          r.nome,
          r.email,
          new Date(r.joined_at).toLocaleString("pt-BR"),
          new Date(r.last_seen_at).toLocaleString("pt-BR"),
          formatDuracaoSegundos(r.duracao_segundos),
          String(r.duracao_segundos),
          r.ip ?? "",
        ]
          .map((v) => csvField(String(v)))
          .join(";"),
      );
    }

    const csv = BOM + lines.join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `presenca-${slugify(liveTitle)}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleExport} disabled={rows.length === 0}>
      <Download size={14} />
      Exportar CSV
    </Button>
  );
}
