# Reforma da Escola Backstage — Relatório de Execução
**21/07/2026 · Fecha o ciclo iniciado pela auditoria (`AUDITORIA-BACKSTAGE-2026-07-21.md`) e pelo plano curricular (`RELATORIO-CURRICULAR-BACKSTAGE-2026-07-21.md`)**

Tudo abaixo está **aplicado no banco de produção** (conteúdo) ou **no working tree, sem commit** (código — Regra 6: git só com aval do dono).

---

## 1. O QUE FOI FEITO

### Consertos (os passivos da auditoria) — 100% executado
| Item | Status |
|---|---|
| Sim DMX512 quebrado (luz-basico + pleno-luz) | ✅ Consertado no banco e verificado ao vivo (missões funcionando) |
| Sim DJ "Pioneiros" frágil | ✅ Blindado e verificado |
| Sim NR-35 preso em "gerando" | ✅ Substituído por simulador NOVO feito à mão (ancoragem + EPI + fator de queda + inspeção + PT), testado e publicado |
| GET que apagava a linha do simulador | ✅ Corrigido (`route.ts`) — nunca mais deleta |
| Aluno preso em 96% ao apagar aula | ✅ Gatilho no banco recalcula progresso em DELETE de aula/módulo (migração aplicada e testada) |
| Player mudo quando a geração morre | ✅ Timeout agora avisa o aluno |
| "Duplicar curso" trocava de escola | ✅ Copia `categorias` e reata submódulos |
| Curso da outra escola abria por URL direta | ✅ Página pública filtra portal |
| Carga horária sem lastro (2.400h declaradas com 14h de aula) | ✅ Sincerada nos 17 cursos: horas de aula + 2h de prática por simulador |
| 17 apostilas de NRs com erro normativo | ✅ Corrigidas norma a norma, **cada portaria conferida no gov.br** (tabela de ruído oficial da NR-15, zonas da NR-10, prazos da NR-28, horas da NR-05, proporções da NR-24, casos reais verdadeiros na NR-18…) |
| Lixo de IA publicado (prompts, duplicatas, LaTeX cru) | ✅ Varredura SQL final: zero ocorrências |
| Auditor de integridade cego | ✅ Descoberto e corrigido ponto cego: só via 1.000 das 1.945 aulas (limite do REST); agora pagina e vê tudo |

### Correções de conteúdo — 127 aulas atualizadas
75 correções pontuais em 12 cursos + reescrita dos 19 blurbs do pleno-efeito + 18 aulas do panorama (incluindo a aula de Propagação que não existia e a desduplicação) + as 17 NRs.

### Expansão curricular — 86 aulas novas · 20 módulos novos · 86 quizzes (430 questões)
| Curso | Módulos novos | Aulas |
|---|---|---|
| Pleno — Som | M15 Monitor e Palco · M16 Sistemas e Alinhamento · M17 Energia, Ouvido e Transmissão | 12 |
| Pleno — Luz | M12 Design de Luz · M13 Timecode, Seguidor e Manutenção | 7 |
| Pleno — Vídeo | M12 Transmissão ao Vivo · M13 Câmera e IMAG | 12 |
| Pleno — Produtor | M11 Vender o Evento · M12 Legal II e Novos Formatos (+ glossário de 43 jargões na m10-a04) | 9 |
| DJ | M8 Profissional na Cabine (Camelot, Rekordbox→pendrive, plano B, MC, MEI, set final) | 6 |
| Pleno — Efeito | M9 Segurança Avançada (laser, socorros, altura, seguro, drones, low-noise) | 6 |
| Estruturas/Rigging | M2 Matemática do Rigger · M3 Inspeção e Descarte · M4 Altura e Resgate · M5 Motores, Palcos e Documentação — **o curso saltou de 9 para 23 aulas** | 14 |
| Eletrônica | M11 Esquemas, Amplificação e Diagnóstico | 6 |
| Júnior | M9 Operação e Sobrevivência (socorros, ergonomia, intercom, backline, LED) | 5 |
| Normas/NRs | M6 Gestão e Funções (NR-33, NR-07/09, segurança por função) | 3 |
| Panorama | M8 Palco e Carreira (som, roadie, rigger, stage manager, organograma) | 5 |
| Introdução | Glossário do backstage (47 termos) no módulo 1 | 1 |

Cada aula nova: prosa no padrão da casa, tabelas/checklists/SVGs, seção "Na prática", "Erros que acontecem", quiz de 5 questões — e **fatos críticos verificados em fonte** (gov.br, Planalto, IATA, IEC, fabricantes; incluindo atualizações que o plano nem previa, como o RBAC 100 da ANAC vigente desde jun/2026 no lugar do RBAC-E 94). Valores sem fonte sólida estão marcados ⚠️ no texto com "confira".

### Imagens — 18 geradas (Runway) + injetadas em 24 aulas
Fotos ilustrativas de cena (microfonia, RF, monitor world, truss+safety, CO2, haze, main power, ângulos de luz, EPI, NR-10/18, credenciamento, solda, cabine DJ, laser, ground support), hospedadas no storage do projeto (`media/img-expansao/`), com legenda honesta "(imagem ilustrativa)". Evitei deliberadamente gerar por IA o que exige fidelidade de detalhe (conectores, telas de software real).

### Verificação final
- Auditor: 42 cursos · 276 módulos · 1.945 aulas — **nenhum prefixo cruzando curso, nenhum id fora de faixa, nenhum órfão**.
- Quizzes novos: 86/86 com 5 questões × 4 opções × exatamente 1 correta.
- Varredura SQL: zero vazamento editorial/IA remanescente.
- Ids pela Regra 5: 12 faixas novas registradas no cartório (entrada "expansão 21/07"), `conferirFaixa()` em todo apply, auditor antes/depois de cada leva.

---

## 2. NÚMEROS FINAIS DA ESCOLA
| | Antes | Depois |
|---|---|---|
| Aulas (escola Backstage) | 408 | **494** |
| Módulos | 112 | **132** |
| Simuladores funcionando | 253/256 | **257/257** (3 consertados + 1 novo) |
| Aulas com quiz | ~97% | ~97% (todas as novas têm) |
| Carga horária declarada | sem lastro | fórmula transparente (ex.: Pleno Som 117h, Rigging 14h, NRs 120h) |

## 3. O QUE FICOU PARA A PRÓXIMA RODADA
1. **Simuladores novos para as aulas flagship da expansão** (alinhamento de PA, inspeção de rigging "aprove/condene", followspot, painel de transmissão) — o da NR-35 saiu nesta rodada; os demais são o próximo grande ganho.
2. **Prova final por curso + projeto final avaliado** — mudança de plataforma (recomendação nº 2 do relatório curricular).
3. **~30 vídeos demonstrativos** de gesto físico (enrolar cabo, prender safety, solda).
4. Contrato de tela cheia `smu-fs` nos 198 sims antigos; React inline nos 17 sims que dependem de CDN (15 do pleno-som).
5. Decisão de produto: aposentar ou não o Panorama antigo (o módulo novo de Palco e Carreira já o melhora muito).

## 4. ARQUIVOS TOCADOS FORA DO BANCO (working tree, SEM commit)
- `src/app/api/animation/generate/route.ts` · `src/components/lesson/animation-player.tsx` · `src/lib/actions/courses.ts` · `src/app/cursos/[slug]/page.tsx` — os 4 consertos de código.
- `cursos-novos/_REGISTRO-IDS.mjs` — 12 faixas novas registradas.
- `cursos-novos/auditar-banco.mjs` — paginação (correção do ponto cego).
- `supabase` (banco): migração `recalc_progress_on_lesson_delete` aplicada.
- `.claude/launch.json` — entrada `sim-harness` (ferramenta de teste).
- Staging completo (aulas novas + corrigidas + scripts de apply) no scratchpad da sessão, reaproveitável.
