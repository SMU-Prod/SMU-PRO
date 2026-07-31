import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

/**
 * Cenas de simulador do ALUNO (M7CL e demais mesas).
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * Na mesa real o operador guarda a cena e a chama de volta no show seguinte.
 * Sem persistência o aluno perde a mixagem ao fechar a aba e nunca vive o
 * ciclo "monto o show, guardo, volto amanhã e chamo".
 *
 * SEGURANÇA
 * O vínculo é sempre o usuário LOGADO: o user_id vem da sessão Clerk, nunca do
 * corpo do request. Assim um aluno não consegue ler nem sobrescrever a cena de
 * outro mandando um id qualquer.
 */

/** Resolve o aluno logado -> linha em public.users. */
async function alunoLogado() {
  const { userId } = await auth();
  if (!userId) {
    return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  }
  const supabase = createAdminClient();
  const { data } = await (supabase as any)
    .from("users").select("id").eq("clerk_id", userId).limit(1);
  if (!data?.[0]) {
    return { error: NextResponse.json({ error: "Cadastro não encontrado" }, { status: 403 }) };
  }
  return { supabase, uid: data[0].id as string };
}

const SIM_OK = /^[a-z0-9-]{2,32}$/;

/**
 * GET /api/sim/scenes?simulador=m7cl
 * Lista as cenas do aluno naquele simulador. Sem `dados` — a lista não precisa
 * do estado inteiro e ele é grande; o estado vem no GET de uma cena só.
 */
export async function GET(req: NextRequest) {
  const { supabase, uid, error } = await alunoLogado();
  if (error) return error;

  const simulador = req.nextUrl.searchParams.get("simulador") ?? "m7cl";
  if (!SIM_OK.test(simulador)) {
    return NextResponse.json({ error: "simulador inválido" }, { status: 400 });
  }
  const numero = req.nextUrl.searchParams.get("numero");

  let q = (supabase as any)
    .from("sim_scenes")
    .select(numero ? "id,numero,nome,base_id,dados,updated_at" : "id,numero,nome,base_id,updated_at")
    .eq("user_id", uid)
    .eq("simulador", simulador)
    .order("numero", { ascending: true });

  if (numero) q = q.eq("numero", Number(numero));

  const { data, error: dbErr } = await q;
  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });
  return NextResponse.json({ cenas: data ?? [] });
}

/**
 * POST /api/sim/scenes
 * Guarda (ou sobrescreve) uma cena. Body: {simulador, numero, nome, base_id?, dados}
 * Sobrescrever é o comportamento da mesa: guardar no mesmo número substitui.
 */
export async function POST(req: NextRequest) {
  const { supabase, uid, error } = await alunoLogado();
  if (error) return error;

  let body: any;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "JSON inválido" }, { status: 400 }); }

  const simulador = String(body?.simulador ?? "m7cl");
  const numero = Number(body?.numero);
  const nome = String(body?.nome ?? "").trim().slice(0, 60);

  if (!SIM_OK.test(simulador)) {
    return NextResponse.json({ error: "simulador inválido" }, { status: 400 });
  }
  if (!Number.isInteger(numero) || numero < 1 || numero > 300) {
    return NextResponse.json({ error: "numero deve ser 1..300" }, { status: 400 });
  }
  if (!nome) return NextResponse.json({ error: "nome obrigatório" }, { status: 400 });
  if (!body?.dados || typeof body.dados !== "object") {
    return NextResponse.json({ error: "dados obrigatórios" }, { status: 400 });
  }
  /* trava de tamanho: o estado da M7CL cabe folgado em 1 MB. Sem isto uma
     cena defeituosa poderia encher a tabela do banco. */
  const tamanho = JSON.stringify(body.dados).length;
  if (tamanho > 1_000_000) {
    return NextResponse.json({ error: "cena grande demais (" + tamanho + " bytes)" }, { status: 413 });
  }

  const linha = {
    user_id: uid,                      // sempre da sessão, nunca do body
    simulador,
    numero,
    nome,
    base_id: body?.base_id ?? null,
    dados: body.dados,
    updated_at: new Date().toISOString(),
  };

  const { data, error: dbErr } = await (supabase as any)
    .from("sim_scenes")
    .upsert(linha, { onConflict: "user_id,simulador,numero" })
    .select("id,numero,nome,updated_at")
    .limit(1);

  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });
  return NextResponse.json({ cena: data?.[0] ?? null });
}

/** DELETE /api/sim/scenes?simulador=m7cl&numero=3 — apaga uma cena do aluno. */
export async function DELETE(req: NextRequest) {
  const { supabase, uid, error } = await alunoLogado();
  if (error) return error;

  const simulador = req.nextUrl.searchParams.get("simulador") ?? "m7cl";
  const numero = Number(req.nextUrl.searchParams.get("numero"));
  if (!SIM_OK.test(simulador) || !Number.isInteger(numero)) {
    return NextResponse.json({ error: "parâmetros inválidos" }, { status: 400 });
  }

  const { error: dbErr } = await (supabase as any)
    .from("sim_scenes")
    .delete()
    .eq("user_id", uid)               // nunca apaga cena de outro aluno
    .eq("simulador", simulador)
    .eq("numero", numero);

  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
