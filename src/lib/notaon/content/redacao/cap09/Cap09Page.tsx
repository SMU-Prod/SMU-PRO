"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 9</span>
          <h1>Competências da Redação ENEM</h1>
          <p>
            Conheça em profundidade o que cada uma das cinco competências avalia, como o
            corretor aplica a escala de 0 a 200 pontos e quais são as estratégias específicas
            para maximizar sua nota em cada dimensão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Sistêmica</span>
        <h2>1. As 5 Competências × 200 Pontos = 1000</h2>
        <p>
          A redação ENEM é corrigida por dois avaliadores independentes. Cada um atribui de
          0 a 200 pontos em cada competência, em intervalos fixos de 40 pontos (0, 40, 80,
          120, 160 ou 200). Se a diferença entre os dois corretores for maior que 100 pontos
          em qualquer competência, um terceiro corretor é acionado. A nota final é a média
          das notas dos dois primeiros corretores (ou a média com o terceiro, se convocado).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama de barras das cinco competências da redação ENEM">
            {/* Eixo Y */}
            <line x1="60" y1="10" x2="60" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="55" y="15" textAnchor="end" fontSize="9" fill="#64748b">200</text>
            <text x="55" y="55" textAnchor="end" fontSize="9" fill="#64748b">160</text>
            <text x="55" y="95" textAnchor="end" fontSize="9" fill="#64748b">120</text>
            <text x="55" y="135" textAnchor="end" fontSize="9" fill="#64748b">80</text>
            <text x="55" y="175" textAnchor="end" fontSize="9" fill="#64748b">40</text>
            {/* Linhas de grade */}
            {[15, 55, 95, 135, 175].map((y, i) => (
              <line key={i} x1="60" y1={y} x2="470" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4" />
            ))}
            {/* Barras */}
            <rect x="80" y="15" width="60" height="170" rx="4" fill="#6366f1" opacity="0.85" />
            <text x="110" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3730a3">C1</text>
            <text x="110" y="215" textAnchor="middle" fontSize="8" fill="#6366f1">Língua</text>
            <rect x="170" y="15" width="60" height="170" rx="4" fill="#059669" opacity="0.85" />
            <text x="200" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">C2</text>
            <text x="200" y="215" textAnchor="middle" fontSize="8" fill="#059669">Compreensão</text>
            <rect x="260" y="15" width="60" height="170" rx="4" fill="#d97706" opacity="0.85" />
            <text x="290" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">C3</text>
            <text x="290" y="215" textAnchor="middle" fontSize="8" fill="#d97706">Organização</text>
            <rect x="350" y="15" width="60" height="170" rx="4" fill="#db2777" opacity="0.85" />
            <text x="380" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9d174d">C4</text>
            <text x="380" y="215" textAnchor="middle" fontSize="8" fill="#db2777">Coesão</text>
            <rect x="440" y="15" width="60" height="170" rx="4" fill="#9333ea" opacity="0.85" />
            <text x="470" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b21a8">C5</text>
            <text x="470" y="215" textAnchor="middle" fontSize="8" fill="#9333ea">Proposta</text>
            {/* Labels de valor */}
            <text x="110" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">200</text>
            <text x="200" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">200</text>
            <text x="290" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">200</text>
            <text x="380" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">200</text>
            <text x="470" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">200</text>
          </svg>
          <figcaption>As cinco competências valem 200 pontos cada — total máximo: 1000 pontos</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competência 1</span>
        <h2>2. C1: Domínio da Língua Portuguesa — Ortografia e Gramática</h2>
        <p>
          A Competência 1 avalia o <strong>domínio da norma culta escrita</strong> da língua
          portuguesa em texto formal. Inclui ortografia, acentuação, concordância verbal e
          nominal, regência verbal e nominal, pontuação, crase e uso correto de pronomes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nota</th><th>Critério (desvios graves)</th><th>Exemplos de desvio</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>200</strong></td><td>Desvios de pouca importância (≤5 desvios leves)</td><td>Vírgula dispensável, acento em palavra incomum</td></tr>
              <tr><td><strong>160</strong></td><td>Bom domínio (6–10 desvios ou desvios leves)</td><td>Acento errado ocasional, vírgula faltando, pontuação inconsistente</td></tr>
              <tr><td><strong>120</strong></td><td>Domínio mediano (11–15 desvios)</td><td>Concordância verbal inconsistente, erros de crase</td></tr>
              <tr><td><strong>80</strong></td><td>Domínio insuficiente (16–20 desvios)</td><td>Erros frequentes de concordância, regência, ortografia</td></tr>
              <tr><td><strong>40</strong></td><td>Muito precário (21–25 desvios)</td><td>Erros graves e frequentes que dificultam a compreensão</td></tr>
              <tr><td><strong>0</strong></td><td>Sem domínio (mais de 25 desvios ou texto ilegível)</td><td>Texto ininteligível, sem paragrafação, letra ilegível</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Erros mais penalizados na C1</h3>
          <p>
            <strong>Concordância verbal:</strong> "Haviam muitas pessoas..." (→ "Havia"),
            "Fazem dois anos..." (→ "Faz"), "Existem uma solução..." (→ "Existe")<br />
            <strong>Concordância nominal:</strong> "Os alunos ficaram satisfeito..." (→ "satisfeitos")<br />
            <strong>Crase:</strong> "Vou à escola" ✓, "Vou a escola" ✗ / "Refiro-me à homens" ✗<br />
            <strong>Regência:</strong> "Obedeça as regras" ✗ (→ "Obedeça às regras"),
            "Assisti o filme" ✗ (→ "Assisti ao filme")<br />
            <strong>Pontuação:</strong> vírgula entre sujeito e verbo, ausência de vírgula
            antes de conjunções coordenativas
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competência 2</span>
        <h2>3. C2: Compreensão da Proposta e Repertório Sociocultural</h2>
        <p>
          A C2 avalia se o candidato compreendeu a proposta de redação e se é capaz de
          selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e
          argumentos em defesa de um ponto de vista, demonstrando conhecimento do mundo.
          Inclui também a avaliação do repertório sociocultural.
        </p>
        <p>
          <strong>Repertório produtivo</strong> (valorizado): citações de obras literárias,
          referências filosóficas, dados estatísticos de fontes confiáveis, eventos históricos,
          legislação, referências científicas — desde que pertinentes ao tema e usados como
          argumento, não como decoração.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nota C2</th><th>Critério</th></tr>
            </thead>
            <tbody>
              <tr><td>200</td><td>Desenvolve o tema completamente, com argumentation e repertório pertinente e produtivo</td></tr>
              <tr><td>160</td><td>Desenvolve o tema com bom repertório, mas com pequenas inconsistências</td></tr>
              <tr><td>120</td><td>Desenvolve o tema de forma mediana, com repertório limitado ou pouco produtivo</td></tr>
              <tr><td>80</td><td>Desenvolve insuficientemente — tangenciamento evidente ou repertório desconexo</td></tr>
              <tr><td>40</td><td>Tangenciamento grave — o tema é abordado de forma muito marginal</td></tr>
              <tr><td>0</td><td>Fuga ao tema, fuga ao tipo textual, texto em branco, menos de 7 linhas, cópia integral dos motivadores</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competência 3</span>
        <h2>4. C3: Organização e Defesa de Ponto de Vista</h2>
        <p>
          A C3 avalia a <strong>coerência entre tese e argumentos</strong>, a seleção de
          informações pertinentes, a progressão temática e a articulação entre as partes do
          texto. É a competência que mede a qualidade do raciocínio argumentativo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nota C3</th><th>Critério</th></tr>
            </thead>
            <tbody>
              <tr><td>200</td><td>Tese clara, argumentos pertinentes, coerência total entre tese e argumentos, progressão temática consistente, análise crítica profunda</td></tr>
              <tr><td>160</td><td>Tese clara, argumentos bem desenvolvidos com pequenas inconsistências ou falta de profundidade analítica</td></tr>
              <tr><td>120</td><td>Tese reconhecível, argumentos medianos sem análise suficiente, ou progressão temática irregular</td></tr>
              <tr><td>80</td><td>Tese vaga ou os dois desenvolvimentos com o mesmo argumento, ou evidência sem análise</td></tr>
              <tr><td>40</td><td>Presença muito precária de tese ou argumentos muito incipientes</td></tr>
              <tr><td>0</td><td>Estrutura tão fragmentada que o ponto de vista não pode ser identificado</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências 4 e 5</span>
        <h2>5. C4: Mecanismos de Coesão | C5: Proposta de Intervenção</h2>
        <p>
          <strong>Competência 4</strong> avalia os mecanismos coesivos — referenciação (uso de
          pronomes, sinônimos, hiperônimos para retomar termos) e sequenciação (conectivos e
          articuladores textuais). Um texto com C4 = 200 usa conectivos variados, pronomes de
          retomada adequados, sem repetição excessiva de palavras.
        </p>
        <p>
          <strong>Competência 5</strong> avalia exclusivamente a proposta de intervenção:
          existência, completude (cinco elementos), coerência com o problema e respeito aos
          direitos humanos. Um texto sem PI recebe C5 = 0 automaticamente. PI com apenas
          dois ou três elementos recebe no máximo C5 = 120.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nota</th><th>C4 — Coesão</th><th>C5 — PI</th></tr>
            </thead>
            <tbody>
              <tr><td>200</td><td>Conectivos diversificados e adequados, referenciação sem problemas, fluidez total</td><td>PI com todos os 5 elementos, respeitando direitos humanos, coerente com o problema</td></tr>
              <tr><td>160</td><td>Boa coesão com pequenos desvios pontuais</td><td>PI com 4–5 elementos, pequenas imprecisões</td></tr>
              <tr><td>120</td><td>Coesão mediana — conectivos repetitivos ou mal usados, alguma repetição lexical</td><td>PI com 3 elementos identificáveis</td></tr>
              <tr><td>80</td><td>Coesão insuficiente — poucos conectivos, repetição evidente de palavras</td><td>PI com 1–2 elementos ou PI vaga</td></tr>
              <tr><td>40</td><td>Coesão muito precária — articulação mínima</td><td>PI com intenção mas incompreensível</td></tr>
              <tr><td>0</td><td>Ausência de mecanismos coesivos</td><td>Ausência de PI OU PI que viola direitos humanos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Nota</span>
        <h2>6. Como Pontuar Acima de 160 em Cada Competência</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Competência</th><th>Para sair de 120 para 160</th><th>Para sair de 160 para 200</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C1</strong></td>
                <td>Eliminar erros de concordância verbal e nominal; revisar crase</td>
                <td>Revisar pontuação, regência e ortografia nas últimas 5 min — máx. 5 desvios</td>
              </tr>
              <tr>
                <td><strong>C2</strong></td>
                <td>Garantir que toda a redação trate o recorte específico; usar dado com fonte</td>
                <td>Acrescentar repertório sofisticado (filósofo, obra literária) pertinente ao tema</td>
              </tr>
              <tr>
                <td><strong>C3</strong></td>
                <td>Garantir que ambos os desenvolvimentos sustentem a tese; adicionar análise crítica</td>
                <td>Usar argumento com análise profunda que vai além do óbvio; progressão temática clara</td>
              </tr>
              <tr>
                <td><strong>C4</strong></td>
                <td>Variar os conectivos — evitar "porém" repetido; usar pronomes de retomada</td>
                <td>Usar conectivos sofisticados ("outrossim", "consoante", "à luz disso"); eliminar repetições lexicais</td>
              </tr>
              <tr>
                <td><strong>C5</strong></td>
                <td>Garantir que a PI tem agente específico, modo e finalidade</td>
                <td>Incluir efeito detalhado e mensurável; PI coerente com o problema central do tema</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condições de Zero</span>
        <h2>7. O que Zera Cada Competência: Tabela de Risco</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Competência</th><th>Condição de nota zero</th><th>Como evitar</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>C1</td>
                <td>Mais de 25 desvios graves ou texto ilegível</td>
                <td>Escrever com clareza; revisar os últimos 5 minutos</td>
              </tr>
              <tr>
                <td>C2</td>
                <td>Fuga ao tema, fuga ao tipo textual, texto em branco, menos de 7 linhas, cópia integral dos motivadores, identificação no texto</td>
                <td>Sublinhar palavras-chave antes de escrever; nunca escrever menos de 20 linhas</td>
              </tr>
              <tr>
                <td>C3</td>
                <td>Estrutura tão fragmentada que o ponto de vista não pode ser identificado</td>
                <td>Sempre formular tese clara na introdução e garantir que ela seja sustentada</td>
              </tr>
              <tr>
                <td>C4</td>
                <td>Ausência total de mecanismos coesivos (texto sem articulação)</td>
                <td>Usar pelo menos um conectivo por parágrafo; retomar termos com pronomes ou sinônimos</td>
              </tr>
              <tr>
                <td>C5</td>
                <td>Ausência de PI OU PI que viola os direitos humanos</td>
                <td>Sempre incluir PI na conclusão; verificar se ela respeita a dignidade de todos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interação entre Competências</span>
        <h2>8. Como as Competências se Interrelacionam</h2>
        <p>
          As cinco competências não são isoladas — elas se influenciam mutuamente. Entender
          essas relações ajuda a priorizar correções:
        </p>
        <div className="lesson-highlight">
          <h3>Relações entre competências</h3>
          <p>
            <strong>C2 influencia C3:</strong> Se você foge ao tema (C2 baixa), os argumentos
            automaticamente não são pertinentes (C3 também cai).<br /><br />
            <strong>C3 influencia C4:</strong> Argumentos mal organizados tornam a coesão
            impossível — se as ideias não têm lógica interna (C3 baixa), os conectivos não
            conseguem articulá-las (C4 cai).<br /><br />
            <strong>C1 influencia C4:</strong> Erros gramaticais graves (C1 baixa) frequentemente
            são erros de articulação sintática que prejudicam também a coesão (C4).<br /><br />
            <strong>C5 independente:</strong> A C5 é a mais independente — uma PI perfeita pode
            coexistir com texto mediano nas demais; mas a ausência de PI zera apenas a C5 (não
            as outras), a menos que a ausência de PI torne a conclusão sem sentido (afetando C3).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Priorização</span>
        <h2>9. Qual Competência Priorizar? Estratégia por Perfil</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Perfil do candidato</th><th>Competência mais fraca</th><th>Estratégia de melhoria</th><th>Ganho potencial</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Escreve bem mas foge ao tema</td>
                <td>C2</td>
                <td>Praticar interpretação de tema: sublinhar palavras-chave, fazer brainstorm antes de escrever</td>
                <td>Até +200 pontos</td>
              </tr>
              <tr>
                <td>Tem ideias mas não estrutura argumentos</td>
                <td>C3</td>
                <td>Praticar estrutura T-E-A; garantir dois argumentos diferentes nos devs</td>
                <td>Até +120 pontos</td>
              </tr>
              <tr>
                <td>Tem muitos erros gramaticais</td>
                <td>C1</td>
                <td>Focar em concordância verbal/nominal, crase e regência; revisar sempre</td>
                <td>Até +120 pontos</td>
              </tr>
              <tr>
                <td>PI sempre incompleta</td>
                <td>C5</td>
                <td>Memorizar a fórmula dos 5 elementos; praticar PIs para 10 temas diferentes</td>
                <td>Até +160 pontos</td>
              </tr>
              <tr>
                <td>Texto parece "colagem de frases"</td>
                <td>C4</td>
                <td>Aprender conectivos por função; praticar retomada com sinônimos e pronomes</td>
                <td>Até +80 pontos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>10. Os Últimos 5 Minutos: Checklist de Revisão</h2>
        <p>
          Reserve os últimos 5–7 minutos da prova para revisar sua redação com foco nas
          competências. Use este checklist mental:
        </p>
        <div className="lesson-highlight">
          <h3>Checklist de revisão — 5 minutos antes de entregar</h3>
          <p>
            <strong>C1:</strong> Releia rapidamente todas as frases. Há concordância verbal?
            O sujeito concorda com o verbo? Há erros óbvios de acentuação?<br /><br />
            <strong>C2:</strong> Cada parágrafo trata do recorte específico do tema?
            Não copiei trechos dos motivadores literalmente?<br /><br />
            <strong>C3:</strong> A tese está na última frase da introdução? Os dois
            desenvolvimentos têm argumentos diferentes? Ambos sustentam a tese?<br /><br />
            <strong>C4:</strong> Cada parágrafo começa com conectivo de transição adequado?
            Repeti alguma palavra mais de 3 vezes em um mesmo parágrafo?<br /><br />
            <strong>C5:</strong> A conclusão tem PI? A PI tem agente específico, modo,
            finalidade e efeito? Ela respeita os direitos humanos?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Análise Integrada</span>
        <h2>11. Combinação de Notas por Competência: Exemplos Reais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Perfil</th><th>C1</th><th>C2</th><th>C3</th><th>C4</th><th>C5</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr><td>Nota 1000</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>1000</td></tr>
              <tr><td>Bom mas não excelente</td><td>160</td><td>160</td><td>160</td><td>160</td><td>160</td><td>800</td></tr>
              <tr><td>PI incompleta</td><td>200</td><td>200</td><td>200</td><td>200</td><td>80</td><td>880</td></tr>
              <tr><td>Erros gramaticais</td><td>80</td><td>200</td><td>200</td><td>160</td><td>200</td><td>840</td></tr>
              <tr><td>Sem PI</td><td>200</td><td>200</td><td>200</td><td>200</td><td>0</td><td>800</td></tr>
              <tr><td>Fuga parcial ao tema</td><td>160</td><td>80</td><td>80</td><td>120</td><td>80</td><td>520</td></tr>
              <tr><td>Fuga total ao tema</td><td>160</td><td>0</td><td>0</td><td>120</td><td>0</td><td>280</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📝</span>
            <h3>C1 — Gramática</h3>
            <p>Concordância, regência, pontuação — revisar sempre nos últimos 5 minutos</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>C2 — Recorte</h3>
            <p>Todo parágrafo deve tratar o tema específico — sem tangenciamento</p>
          </div>
          <div className="math-card">
            <span>🏗️</span>
            <h3>C3 — Argumentação</h3>
            <p>Tese + 2 argumentos diferentes + análise crítica = progressão temática</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>C4 — Coesão</h3>
            <p>Conectivos variados + retomada por sinônimos = articulação fluida</p>
          </div>
          <div className="math-card">
            <span>🌱</span>
            <h3>C5 — PI</h3>
            <p>5 elementos + direitos humanos = 200 pontos estratégicos</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Estratégia</h3>
            <p>Identifique sua C mais fraca e invista nela — maior ganho marginal</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Erro de concordância e impacto na C1"
          statement={
            <p>
              A frase <em>"Haviam muitas pessoas no local aguardando o resultado da redação"</em>
              contém erro de concordância verbal. Qual é a correção e qual nota estimada na
              C1 se esse for o único tipo de erro recorrente no texto?
            </p>
          }
          options={[
            { letter: "a", text: "Correto: 'Havia muitas pessoas no local.' — Esse tipo de erro recorrente (5–6 ocorrências) pode reduzir C1 para 160.", correct: true },
            { letter: "b", text: "Correto: 'Haviam muitas pessoas no local.' — A conjugação está correta no plural." },
            { letter: "c", text: "Correto: 'Tinha muitas pessoas no local.' — 'Ter' é substituto adequado em linguagem formal." },
            { letter: "d", text: "Correto: 'Havia muitas pessoas no local.' — Esse único erro não impacta a C1." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. "Haver" no sentido de "existir" é
              impessoal — não tem sujeito e portanto não concorda com o complemento. A forma
              correta é <em>"Havia muitas pessoas"</em> (singular). Se esse erro aparecer
              recorrentemente (5–6 vezes), a nota em C1 pode cair para 160. Se aparecer
              junto com outros erros de concordância, regência ou pontuação, pode chegar a
              120. A alternativa (d) está parcialmente correta quanto à correção, mas errada
              quanto ao impacto — erros recorrentes do mesmo tipo somam pontos e afetam a nota.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Cópia de texto motivador — competência e pontuação"
          statement={
            <p>
              Uma candidata copiou 3 linhas inteiras de um dos textos motivadores e as
              inseriu no seu Desenvolvimento 1, sem aspas ou indicação de fonte. O que
              acontece com sua nota?
            </p>
          }
          options={[
            { letter: "a", text: "As 3 linhas copiadas são desconsideradas pelo corretor, como se não tivessem sido escritas, reduzindo efetivamente o texto e podendo prejudicar C2 e C3.", correct: true },
            { letter: "b", text: "A candidata recebe nota zero na C2, pois cópia do motivador equivale a fuga ao tipo textual." },
            { letter: "c", text: "A cópia é penalizada apenas em C1, pois configura erro de norma culta." },
            { letter: "d", text: "Não há penalidade — copiar os motivadores é uma forma de usar o repertório disponível." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. Segundo os critérios do ENEM, trechos
              copiados dos textos motivadores são desconsiderados pelos corretores — são tratados
              como se não existissem. Isso tem dois efeitos: (1) o texto efetivo fica mais curto,
              o que pode reduzir a percepção de desenvolvimento em C3; (2) o trecho copiado não
              conta como argumento ou evidência, enfraquecendo o desenvolvimento da tese. A
              consequência não é zero imediato em C2 (isso acontece apenas se TODA a redação
              for copiada), mas prejudica a qualidade geral do texto. Parafrasear com citação
              da fonte ("Conforme indicado no texto II") é sempre preferível.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ausência de conectivos — competências afetadas"
          statement={
            <p>
              Um texto tem tese clara, dois argumentos diferentes e bem desenvolvidos, e PI
              completa — mas foi escrito sem nenhum conectivo entre frases e parágrafos.
              Cada frase é curta e isolada. Quais competências são mais afetadas?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas C4, pois os conectivos são avaliados exclusivamente nessa competência." },
            { letter: "b", text: "C4 é a mais afetada (ausência de mecanismos de coesão), mas C3 também é prejudicada pois a falta de articulação dificulta a percepção da progressão temática.", correct: true },
            { letter: "c", text: "C1 e C4, pois a ausência de conectivos configura erro gramatical e de articulação simultâneos." },
            { letter: "d", text: "Todas as cinco competências são igualmente afetadas pela ausência de conectivos." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A <strong>C4</strong> é a mais afetada
              porque avalia diretamente os "mecanismos de coesão textual e coerência" — a
              articulação entre frases e parágrafos por conectivos e referenciação. Sem conectivos,
              a C4 pode cair para 40–80. A <strong>C3</strong> também é afetada porque a
              progressão temática entre os argumentos não fica evidente quando não há articuladores
              lógicos que mostrem a relação entre as ideias (causa, consequência, adição, contraste).
              O corretor pode ter dificuldade em perceber a coerência entre tese e argumentos,
              rebaixando a C3. As demais competências são menos diretamente afetadas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Diagnóstico completo de parágrafo — estimar notas por competência"
          statement={
            <p>
              Analise este parágrafo: <em>"A violência doméstica é um problema sério. Existem
              muitos casos no brasil. As mulher precisam de proteção. O governo deve criar leis.
              Isso vai resolver o problema."</em> Estime as notas por competência.
            </p>
          }
          options={[
            { letter: "a", text: "C1=160, C2=160, C3=160, C4=160, C5=0 — boa estrutura com erros leves e PI ausente." },
            { letter: "b", text: "C1=80 (erros graves de maiúscula e concordância), C2=120 (tema presente mas superficial), C3=80 (tópico vago, sem análise), C4=40 (sem conectivos), C5=0 (PI antecipada e incompleta).", correct: true },
            { letter: "c", text: "C1=120, C2=200, C3=200, C4=120, C5=80 — erros leves, boa argumentação." },
            { letter: "d", text: "Todas as competências = 0, pois o texto está completamente abaixo do nível esperado." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Análise detalhada:
              <strong>C1 = 80</strong> — erros de maiúscula ("brasil" sem maiúscula),
              concordância nominal ("As mulher" → "as mulheres") e ortografia;
              <strong>C2 = 120</strong> — o tema está presente mas desenvolvido de forma
              muito superficial, sem repertório;
              <strong>C3 = 80</strong> — tópico vago ("é um problema sério"), sem evidência
              com fonte, sem análise crítica, sem desenvolvimento mínimo;
              <strong>C4 = 40</strong> — nenhum conectivo entre as frases curtas, parece
              lista de afirmações soltas;
              <strong>C5 = 0</strong> — "o governo deve criar leis" é PI antecipada (no
              desenvolvimento, não na conclusão) e completamente incompleta.
              Total estimado: 320 pontos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Estratégia para nota 760 — priorizar competências"
          statement={
            <p>
              Um candidato tem as seguintes notas médias atuais: C1=160, C2=120, C3=120,
              C4=120, C5=80. Total = 600. Para chegar a 760 pontos (+160), em quais
              competências deve investir primeiro?
            </p>
          }
          options={[
            { letter: "a", text: "Investir em C1 — já está em 160, mas 200 em C1 dá +40 pontos fáceis." },
            { letter: "b", text: "Investir em C5 primeiro (+120 potencial: de 80 para 200), depois C2 (+40: de 120 para 160) — total +160, atingindo 760 pontos.", correct: true },
            { letter: "c", text: "Investir igualmente em todas as competências — 160 a mais divididos por 5 = +32 por competência." },
            { letter: "d", text: "Investir em C3 (+80 potencial) e C4 (+80 potencial) — total +160, atingindo 760." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>, embora (d) também seja viável.
              A estratégia mais eficiente é priorizar a competência com maior potencial de
              ganho com menor esforço: <strong>C5</strong> (PI incompleta com 80 pontos) tem
              potencial de +120 pontos apenas garantindo os cinco elementos da proposta —
              algo técnico e treinável em poucas semanas. <strong>C2</strong> pode subir de
              120 para 160 (+40) com melhoria do repertório sociocultural. Total: +160,
              chegando a 760. A opção (d) também é viável — C3 e C4 cada +80 — mas exige
              mudanças mais profundas na escrita. Foco em C5 é o investimento mais eficiente
              pelo menor esforço.
            </p>
          }
        />
      </section>
    </article>
  );
}
