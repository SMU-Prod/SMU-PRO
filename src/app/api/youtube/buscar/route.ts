import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { rateLimit } from "@/lib/rate-limit";

/* ============================================================================
   BUSCA NO YOUTUBE — proxy de servidor para o simulador de DJ
   ----------------------------------------------------------------------------
   POR QUE ISTO É UMA ROTA DE SERVIDOR, e não um fetch no simulador:

   1. A chave NUNCA pode ir para o navegador. O HTML do simulador vive no banco
      e é servido para todo aluno — chave embutida ali é chave publicada.
   2. Chave de navegador se protege por restrição de HTTP referrer. O simulador
      roda em iframe sandbox de origem opaca ("null"), que não manda referrer —
      ou seja, a restrição barraria justamente o nosso uso, e a chave só ficaria
      segura sendo irrestrita (pior ainda).

   QUOTA — o motivo de existir cache e trava aqui:
   `search.list` custa 100 unidades por chamada. A quota padrão do projeto é
   10.000 unidades/dia => ~100 buscas por DIA no projeto inteiro, somando todos
   os alunos. Por isso:
     - o simulador só chama isto quando o aluno CONFIRMA (nunca a cada tecla);
     - colar link/ID não passa por aqui (custo ZERO) e é o caminho preferido;
     - resposta idêntica sai do cache (custo ZERO);
     - há um teto diário local que corta antes de estourar a quota do Google.
   ============================================================================ */

export const dynamic = "force-dynamic";

const CUSTO_BUSCA = 100;
const TETO_DIARIO = Number(process.env.YOUTUBE_TETO_BUSCAS_DIA || 80); // < 100 de propósito
const CACHE_TTL = 12 * 60 * 60 * 1000;

type Item = { id: string; titulo: string; canal: string; thumb: string };
const cache = new Map<string, { em: number; itens: Item[] }>();
let gastas = 0;
let diaAtual = "";

function contaDoDia() {
  const hoje = new Date().toISOString().slice(0, 10);
  if (hoje !== diaAtual) { diaAtual = hoje; gastas = 0; }
  return gastas;
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") || "").trim().slice(0, 120);
  if (q.length < 2) return NextResponse.json({ itens: [], erro: "Escreva pelo menos 2 letras." });

  // Aluno logado só. Busca anônima queimaria a quota do dia em minutos.
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ itens: [], erro: "Entre na sua conta para buscar no YouTube." }, { status: 401 });

  const chave = process.env.YOUTUBE_API_KEY;
  if (!chave) {
    // Sem chave a busca simplesmente não existe — mas colar o link continua
    // funcionando, e é o que a mensagem manda o aluno fazer.
    return NextResponse.json({
      itens: [],
      erro: "A busca por nome ainda não está ligada neste servidor. Cole o link do vídeo do YouTube — funciona igual.",
      semChave: true,
    });
  }

  const norm = q.toLowerCase().replace(/\s+/g, " ");
  const hit = cache.get(norm);
  if (hit && Date.now() - hit.em < CACHE_TTL) return NextResponse.json({ itens: hit.itens, doCache: true });

  const { success } = await rateLimit(`yt:${userId}`, 8, 60_000);
  if (!success) return NextResponse.json({ itens: [], erro: "Muitas buscas seguidas. Espere um minuto." }, { status: 429 });

  if (contaDoDia() + CUSTO_BUSCA > TETO_DIARIO * CUSTO_BUSCA) {
    return NextResponse.json({
      itens: [],
      erro: "A busca do dia acabou (limite da API do YouTube). Cole o link do vídeo — esse caminho não tem limite.",
    });
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("q", q);
    url.searchParams.set("type", "video");
    url.searchParams.set("videoEmbeddable", "true"); // sem isto vem vídeo que não toca em iframe
    url.searchParams.set("videoCategoryId", "10");   // 10 = Música
    url.searchParams.set("maxResults", "8");
    url.searchParams.set("safeSearch", "moderate");
    url.searchParams.set("key", chave);

    const r = await fetch(url.toString(), { cache: "no-store" });
    gastas += CUSTO_BUSCA;
    if (!r.ok) {
      const detalhe = r.status === 403 ? "Quota do YouTube esgotada ou chave sem permissão." : `YouTube respondeu ${r.status}.`;
      return NextResponse.json({ itens: [], erro: `${detalhe} Cole o link do vídeo para continuar.` });
    }
    const j = await r.json();
    const itens: Item[] = (j.items || [])
      .filter((it: { id?: { videoId?: string } }) => it?.id?.videoId)
      .map((it: { id: { videoId: string }; snippet: { title: string; channelTitle: string; thumbnails?: { default?: { url?: string } } } }) => ({
        id: it.id.videoId,
        titulo: String(it.snippet.title || "").slice(0, 120),
        canal: String(it.snippet.channelTitle || "").slice(0, 60),
        thumb: it.snippet.thumbnails?.default?.url || "",
      }));

    cache.set(norm, { em: Date.now(), itens });
    if (cache.size > 400) cache.delete(cache.keys().next().value as string);
    return NextResponse.json({ itens });
  } catch {
    return NextResponse.json({ itens: [], erro: "Não deu para falar com o YouTube agora. Cole o link do vídeo." });
  }
}
