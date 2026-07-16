/**
 * Cálculo de sequência de estudo (streak). Puro e testável.
 *
 * Bugs corrigidos:
 *  - A tolerância "hoje ou ontem" valia em CADA passo, então dias alternados
 *    (15, 13, 11…) contavam como sequência. Agora a tolerância só vale no início;
 *    depois exige o dia imediatamente anterior.
 *  - Datas eram bucketadas em UTC: quem estuda após 21h BRT caía no dia seguinte.
 *    Agora usamos o dia-calendário em America/Sao_Paulo.
 */

/** ISO timestamp → "YYYY-MM-DD" no fuso de São Paulo. */
export function toBrtDateString(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date(iso));
}

function addDays(dateStr: string, delta: number): string {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().split("T")[0];
}

function dayDiff(a: string, b: string): number {
  const ms = new Date(a + "T00:00:00Z").getTime() - new Date(b + "T00:00:00Z").getTime();
  return Math.round(ms / 86_400_000);
}

/**
 * @param activityDates datas de atividade "YYYY-MM-DD" (BRT), qualquer ordem/repetição
 * @param today          "YYYY-MM-DD" de hoje (BRT)
 */
export function computeStreak(activityDates: string[], today: string): number {
  const unique = Array.from(new Set(activityDates)).sort().reverse(); // desc
  if (unique.length === 0) return 0;

  let streak = 0;
  let expected = "";
  for (const d of unique) {
    if (streak === 0) {
      // Início: aceita hoje ou ontem. Mais velho que ontem → sem streak ativo.
      const diff = dayDiff(today, d);
      if (diff === 0 || diff === 1) {
        streak = 1;
        expected = addDays(d, -1);
      } else {
        break;
      }
    } else if (d === expected) {
      streak++;
      expected = addDays(d, -1);
    } else {
      break; // buraco → fim da sequência
    }
  }
  return streak;
}
