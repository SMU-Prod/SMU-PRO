"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 23</span>

          <h1>Virologia: Estrutura, Ciclos e Viroses Humanas</h1>

          <p>
            Os vírus são as entidades biológicas mais numerosas do planeta —
            estima-se que existam{" "}
            <strong>10³¹ partículas virais na biosfera</strong> — e, ao mesmo
            tempo, as mais incompreendidas. Neste capítulo você vai dominar a
            natureza acelular dos vírus, sua estrutura molecular, os ciclos
            reprodutivos lítico e lisogênico, o mecanismo singular dos
            retrovírus e as principais viroses humanas cobradas no ENEM e nos
            vestibulares, incluindo dengue, COVID-19, AIDS, gripe, hepatites,
            HPV, sarampo e raiva. Você também vai diferenciar vacinas de soros
            e entender por que antibióticos são completamente ineficazes contra
            infecções virais.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Natureza dos Vírus</span>

        <h2>1. O Que São Vírus — Posição Limítrofe na Biologia</h2>

        <p>
          Os vírus são <strong>entidades acelulares</strong> — não possuem
          células, portanto não se enquadram nos cinco reinos nem nos três
          domínios da vida. Foram descritos pela primeira vez em 1892 por
          Dmitri Ivanovsky ao estudar o mosaico do tabaco, e o termo "vírus"
          (do latim: veneno) foi adotado por Martinus Beijerinck em 1898. São
          classificados como <strong>parasitas intracelulares obrigatórios</strong>:
          fora de uma célula hospedeira viva, são inertes — não crescem, não se
          dividem, não realizam nenhuma reação metabólica.
        </p>

        <p>
          Esse caráter limítrofe gera um debate clássico no ENEM: os vírus
          são seres vivos? A resposta mais aceita é que eles{" "}
          <strong>não se enquadram plenamente na definição de ser vivo</strong>,
          pois lhes faltam organização celular e metabolismo próprio. Contudo,
          possuem material genético capaz de sofrer <strong>mutação</strong> e
          são sujeitos à <strong>seleção natural</strong>, o que lhes confere
          capacidade de evolução — característica típica dos seres vivos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>A favor de "ser vivo"</h3>
            <p>
              Possuem material genético (DNA ou RNA), sofrem mutação, evoluem
              por seleção natural e são capazes de se reproduzir (dentro do
              hospedeiro).
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Contra "ser vivo"</h3>
            <p>
              Não possuem células, ribossomos, mitocôndrias nem metabolismo
              próprio. Fora do hospedeiro são cristais inertes, sem qualquer
              atividade.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Consenso atual</h3>
            <p>
              Parasitas intracelulares obrigatórios que ocupam uma "zona
              limítrofe" entre a matéria viva e a inerte. Estudados pela
              Virologia, ramo da Microbiologia.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Pegadinha clássica do ENEM:</strong> o fato de os
            vírus possuírem material genético e evoluírem{" "}
            <em>não</em> os torna seres vivos no sentido convencional, pois
            ausência de célula e de metabolismo próprio são critérios
            eliminatórios segundo a definição padrão de vida.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Viral</span>

        <h2>2. Anatomia de um Vírus</h2>

        <p>
          Apesar de sua simplicidade, cada partícula viral (chamada{" "}
          <strong>vírion</strong>) é altamente especializada para reconhecer,
          invadir e explorar um tipo específico de célula hospedeira. Os
          componentes fundamentais são:
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg
              viewBox="0 0 320 280"
              width="320"
              height="280"
              aria-label="Estrutura de um vírus envelopado (tipo HIV/Influenza)"
            >
              {/* Envelope externo */}
              <ellipse cx={160} cy={140} rx={120} ry={110} fill="#fde68a" stroke="#d97706" strokeWidth={2} opacity={0.6} />
              {/* Espículas */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const x1 = 160 + 118 * Math.cos(rad);
                const y1 = 140 + 108 * Math.sin(rad);
                const x2 = 160 + 138 * Math.cos(rad);
                const y2 = 140 + 126 * Math.sin(rad);
                return (
                  <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b45309" strokeWidth={3} strokeLinecap="round" />
                );
              })}
              {/* Capsídeo */}
              <ellipse cx={160} cy={140} rx={82} ry={72} fill="#a5f3fc" stroke="#0891b2" strokeWidth={2} opacity={0.7} />
              {/* Ácido nucleico */}
              <ellipse cx={160} cy={140} rx={44} ry={36} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} opacity={0.85} />
              {/* Helix RNA */}
              <path d="M130 132 Q140 120 150 132 Q160 144 170 132 Q180 120 190 132" fill="none" stroke="#7c3aed" strokeWidth={2} />
              <path d="M130 148 Q140 136 150 148 Q160 160 170 148 Q180 136 190 148" fill="none" stroke="#7c3aed" strokeWidth={2} />
              {/* Labels */}
              <text x={288} y={55} fontSize={10} fill="#b45309" fontWeight={700}>Espículas</text>
              <line x1={270} y1={58} x2={245} y2={82} stroke="#b45309" strokeWidth={1} />
              <text x={260} y={105} fontSize={10} fill="#d97706" fontWeight={700}>Envelope</text>
              <line x1={255} y1={109} x2={236} y2={118} stroke="#d97706" strokeWidth={1} />
              <text x={255} y={150} fontSize={10} fill="#0891b2" fontWeight={700}>Capsídeo</text>
              <line x1={248} y1={154} x2={224} y2={148} stroke="#0891b2" strokeWidth={1} />
              <text x={240} y={200} fontSize={10} fill="#7c3aed" fontWeight={700}>Ácido nucleico</text>
              <line x1={238} y1={196} x2={200} y2={158} stroke="#7c3aed" strokeWidth={1} />
            </svg>
            <figcaption>
              Estrutura de um vírus envelopado: espículas glicoproteicas,
              envelope lipídico, capsídeo proteico e ácido nucleico central.
            </figcaption>
          </figure>

          <div>
            <div className="lesson-highlight">
              <h3>Componentes e funções</h3>
              <p>
                <strong>Ácido nucleico (DNA ou RNA):</strong> contém as
                instruções genéticas do vírus. Nunca ambos simultaneamente.
                Pode ser fita simples ou dupla, linear ou circular.
              </p>
              <p>
                <strong>Capsídeo:</strong> envoltório proteico formado por
                subunidades chamadas <em>capsômeros</em>. Protege o material
                genético e media a ligação ao receptor celular.
              </p>
              <p>
                <strong>Envelope viral:</strong> presente apenas em vírus
                envelopados (HIV, Influenza, SARS-CoV-2, Herpes). Deriva da
                membrana da célula hospedeira e contém{" "}
                <strong>glicoproteínas (espículas)</strong> que reconhecem
                receptores específicos do hospedeiro.
              </p>
              <p>
                ⚠️ Vírus <strong>envelopados</strong> são destruídos por
                álcool 70% e detergentes, pois estes dissolvem o envelope
                lipídico. Vírus <strong>não envelopados</strong> (ex.:
                Poliovírus, Adenovírus) são mais resistentes no ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>

        <h2>3. Classificação dos Vírus</h2>

        <p>
          Os vírus são classificados segundo múltiplos critérios: tipo de ácido
          nucleico, presença ou ausência de envelope, simetria do capsídeo e
          hospedeiro preferencial. A tabela abaixo resume os grupos mais
          cobrados no ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Ácido nucleico</th>
                <th>Envelope</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retrovírus</td>
                <td>RNA fita simples (+)</td>
                <td>Sim</td>
                <td>HIV</td>
              </tr>
              <tr>
                <td>Coronavírus</td>
                <td>RNA fita simples (+)</td>
                <td>Sim</td>
                <td>SARS-CoV-2 (COVID-19)</td>
              </tr>
              <tr>
                <td>Orthomyxovírus</td>
                <td>RNA fita simples (−)</td>
                <td>Sim</td>
                <td>Influenza (gripe)</td>
              </tr>
              <tr>
                <td>Flavivírus</td>
                <td>RNA fita simples (+)</td>
                <td>Sim</td>
                <td>Dengue, Zika, Febre Amarela</td>
              </tr>
              <tr>
                <td>Papilomavírus</td>
                <td>DNA fita dupla</td>
                <td>Não</td>
                <td>HPV</td>
              </tr>
              <tr>
                <td>Herpesvírus</td>
                <td>DNA fita dupla</td>
                <td>Sim</td>
                <td>HSV-1, HSV-2, Varicela</td>
              </tr>
              <tr>
                <td>Hepadnavírus</td>
                <td>DNA parcialmente fita dupla</td>
                <td>Sim</td>
                <td>Vírus da Hepatite B (HBV)</td>
              </tr>
              <tr>
                <td>Rabdovírus</td>
                <td>RNA fita simples (−)</td>
                <td>Sim</td>
                <td>Vírus da Raiva</td>
              </tr>
              <tr>
                <td>Bacteriófagos (fagos)</td>
                <td>DNA ou RNA</td>
                <td>Não</td>
                <td>Fago T4, Lambda</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Bacteriófagos</h3>
            <p>
              Vírus que infectam exclusivamente bactérias. São os mais
              estudados em modelos de ciclo lítico e lisogênico. Morfologia
              típica: cabeça icosaédrica + cauda com fibras de fixação.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Vírus de plantas</h3>
            <p>
              Transmitidos por insetos vetores (afídeos) ou por contato
              mecânico. Exemplo histórico: vírus do mosaico do tabaco (TMV),
              o primeiro vírus descoberto.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐾</span>
            <h3>Vírus de vertebrados</h3>
            <p>
              Altamente especializados: o HIV infecta apenas células com
              receptor CD4 (linfócitos T); o vírus da raiva tem tropismo pelo
              sistema nervoso central.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclos Virais</span>

        <h2>4. Ciclo Lítico × Ciclo Lisogênico</h2>

        <p>
          Os bacteriófagos são o modelo clássico para o estudo dos dois
          grandes ciclos de replicação viral. No{" "}
          <strong>ciclo lítico</strong>, o vírus subverte imediatamente a
          célula para produzir centenas de novos vírions e a destrói ao sair.
          No <strong>ciclo lisogênico</strong>, o DNA viral integra-se ao
          cromossomo bacteriano (formando o <em>prófago</em>), replica-se
          passivamente por gerações até ser ativado por algum estressor.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 740 310"
            width="740"
            height="310"
            aria-label="Diagrama comparativo do ciclo lítico e lisogênico do bacteriófago"
          >
            {/* --- Bloco LÍTICO --- */}
            <rect x={10} y={10} width={340} height={290} rx={14} fill="#fee2e2" stroke="#ef4444" strokeWidth={1.5} />
            <text x={180} y={34} textAnchor="middle" fontSize={14} fontWeight={800} fill="#b91c1c">CICLO LÍTICO</text>

            {/* Etapas lítico */}
            {[
              { y: 58, label: "1. Adsorção", sub: "Fago liga-se ao receptor bacteriano", c: "#fca5a5" },
              { y: 110, label: "2. Injeção do DNA", sub: "Ácido nucleico viral entra na bactéria", c: "#fca5a5" },
              { y: 162, label: "3. Replicação & Síntese", sub: "Maquinaria celular produz proteínas e DNA virais", c: "#fca5a5" },
              { y: 214, label: "4. Montagem", sub: "Novos vírions são montados", c: "#fca5a5" },
              { y: 266, label: "5. Lise celular", sub: "Célula se rompe; ~200 vírus liberados", c: "#ef4444" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={26} y={s.y - 18} width={308} height={40} rx={8} fill={s.c} opacity={0.5} stroke="#ef4444" strokeWidth={1} />
                <text x={180} y={s.y - 2} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7f1d1d">{s.label}</text>
                <text x={180} y={s.y + 12} textAnchor="middle" fontSize={10} fill="#991b1b">{s.sub}</text>
              </g>
            ))}
            {[88, 140, 192, 244].map((y) => (
              <polygon key={y} points={`180,${y} 174,${y + 12} 186,${y + 12}`} fill="#b91c1c" />
            ))}

            {/* --- Bloco LISOGÊNICO --- */}
            <rect x={390} y={10} width={340} height={290} rx={14} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={560} y={34} textAnchor="middle" fontSize={14} fontWeight={800} fill="#1d4ed8">CICLO LISOGÊNICO</text>

            {[
              { y: 58, label: "1. Adsorção e Injeção", sub: "Igual ao ciclo lítico", c: "#bfdbfe" },
              { y: 110, label: "2. Integração (Prófago)", sub: "DNA viral insere-se no cromossomo bacteriano", c: "#bfdbfe" },
              { y: 162, label: "3. Replicação passiva", sub: "Prófago replica-se junto com o DNA da bactéria", c: "#bfdbfe" },
              { y: 214, label: "4. Indução (gatilho)", sub: "Estressor (UV, radiação) ativa o prófago", c: "#bfdbfe" },
              { y: 266, label: "5. → Ciclo Lítico", sub: "Prófago excisado inicia o ciclo lítico", c: "#3b82f6" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={406} y={s.y - 18} width={308} height={40} rx={8} fill={s.c} opacity={0.6} stroke="#3b82f6" strokeWidth={1} />
                <text x={560} y={s.y - 2} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a8a">{s.label}</text>
                <text x={560} y={s.y + 12} textAnchor="middle" fontSize={10} fill="#1d4ed8">{s.sub}</text>
              </g>
            ))}
            {[88, 140, 192, 244].map((y) => (
              <polygon key={y} points={`560,${y} 554,${y + 12} 566,${y + 12}`} fill="#1d4ed8" />
            ))}

            {/* Seta de conexão entre os dois */}
            <path d="M 350 162 Q 370 162 390 162" fill="none" stroke="#6b7280" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={370} y={155} textAnchor="middle" fontSize={9} fill="#6b7280">ou</text>
          </svg>
          <figcaption>
            Ciclo lítico (vermelho): destruição imediata da célula. Ciclo
            lisogênico (azul): vírus fica latente como prófago até ser ativado.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Prófago × Provírus</h3>
          <p>
            Quando o DNA viral integra-se ao genoma de uma <strong>bactéria</strong>,
            recebe o nome de <strong>prófago</strong>. Quando se integra ao
            genoma de uma <strong>célula eucariótica</strong> (como ocorre com
            o HIV em linfócitos T), é chamado de <strong>provírus</strong>. Em
            ambos os casos, o material genético viral é replicado junto com o
            da célula hospedeira sem produzir novos vírions — o vírus permanece
            em estado de latência.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Retrovírus e HIV</span>

        <h2>5. Retrovírus, Transcriptase Reversa e AIDS</h2>

        <p>
          Os <strong>retrovírus</strong> possuem RNA como material genético e
          utilizam uma enzima exclusiva — a{" "}
          <strong>transcriptase reversa (TR)</strong> — para sintetizar DNA a
          partir do RNA viral, invertendo o fluxo canônico da informação
          genética (DNA → RNA → proteína). Por isso o nome "retro" (do latim:
          para trás). O DNA produzido é então integrado ao genoma da célula
          como <strong>provírus</strong>.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg
              viewBox="0 0 380 190"
              width="380"
              height="190"
              aria-label="Ciclo de replicação do HIV"
            >
              {/* Fundo */}
              <rect x={0} y={0} width={380} height={190} rx={12} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
              {/* Etapas em círculo */}
              {[
                { x: 60, y: 38, label: "1. HIV", sub: "(RNA + TR)" },
                { x: 200, y: 20, label: "2. Fusão", sub: "com CD4+" },
                { x: 320, y: 55, label: "3. RNA viral", sub: "no citoplasma" },
                { x: 330, y: 130, label: "4. DNA", sub: "(via TR)" },
                { x: 200, y: 165, label: "5. Provírus", sub: "(no núcleo)" },
                { x: 60, y: 130, label: "6. Novos HIV", sub: "por brotamento" },
              ].map((s) => (
                <g key={s.label}>
                  <ellipse cx={s.x} cy={s.y + 10} rx={44} ry={22} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.2} />
                  <text x={s.x} y={s.y + 7} textAnchor="middle" fontSize={10} fontWeight={700} fill="#14532d">{s.label}</text>
                  <text x={s.x} y={s.y + 19} textAnchor="middle" fontSize={9} fill="#166534">{s.sub}</text>
                </g>
              ))}
              {/* Setas aproximadas */}
              <path d="M 103 48 Q 140 28 156 35" fill="none" stroke="#16a34a" strokeWidth={1.5} markerEnd="url(#arrow)" />
              <path d="M 244 35 Q 285 40 290 60" fill="none" stroke="#16a34a" strokeWidth={1.5} />
              <path d="M 332 90 Q 340 108 330 118" fill="none" stroke="#16a34a" strokeWidth={1.5} />
              <path d="M 295 148 Q 260 168 244 170" fill="none" stroke="#16a34a" strokeWidth={1.5} />
              <path d="M 155 168 Q 110 165 95 148" fill="none" stroke="#16a34a" strokeWidth={1.5} />
              <path d="M 60 118 Q 58 80 58 60" fill="none" stroke="#16a34a" strokeWidth={1.5} />
              {/* Destaque TR */}
              <text x={310} y={100} fontSize={9} fill="#7c3aed" fontWeight={700}>Transcriptase</text>
              <text x={310} y={110} fontSize={9} fill="#7c3aed" fontWeight={700}>Reversa (TR)</text>
              <text x={180} y={100} fontSize={11} fontStyle="italic" fill="#6b7280" textAnchor="middle">RNA → DNA → Provírus</text>
            </svg>
            <figcaption>
              Ciclo do HIV: RNA viral é convertido em DNA pela transcriptase
              reversa e integrado ao genoma humano como provírus.
            </figcaption>
          </figure>

          <div>
            <div className="lesson-highlight">
              <h3>HIV e a AIDS — pontos-chave para o ENEM</h3>
              <p>
                <strong>Agente etiológico:</strong> HIV (Human Immunodeficiency
                Virus), um retrovírus.
              </p>
              <p>
                <strong>Alvo celular:</strong> linfócitos T CD4+ (auxiliadores),
                células fundamentais para coordenar a resposta imune adaptativa.
                Com a queda progressiva de CD4+, o organismo perde a capacidade
                de combater infecções oportunistas.
              </p>
              <p>
                <strong>AIDS</strong> (Síndrome da Imunodeficiência Adquirida)
                é o estágio avançado da infecção pelo HIV, definido quando a
                contagem de CD4+ cai abaixo de 200 células/mm³ ou surgem
                infecções/cânceres oportunistas.
              </p>
              <p>
                <strong>Transmissão:</strong> relações sexuais desprotegidas,
                sangue contaminado (transfusão, seringas compartilhadas),
                transmissão vertical (mãe para filho durante gestação, parto
                ou amamentação). <em>Não</em> é transmitido por abraço,
                beijo, aperto de mão ou utensílios.
              </p>
              <p>
                <strong>Tratamento — TARV:</strong> a terapia antirretroviral
                combina inibidores da transcriptase reversa, da protease e da
                integrase, mantendo a carga viral indetectável. Não há cura,
                mas a TARV garante qualidade de vida normal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Principais Viroses Humanas</span>

        <h2>6. Viroses Humanas — Quadro Completo</h2>

        <p>
          O ENEM cobra com frequência a associação entre agente viral,
          transmissão, manifestações clínicas e estratégias de prevenção.
          A tabela abaixo consolida as viroses mais recorrentes:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Virose</th>
                <th>Agente viral</th>
                <th>Transmissão</th>
                <th>Sintomas principais</th>
                <th>Prevenção / Tratamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gripe (Influenza)</strong></td>
                <td>Orthomyxovírus (RNA); subtipos H1N1, H3N2…</td>
                <td>Gotículas respiratórias</td>
                <td>Febre alta, mialgia, tosse, coriza, prostração</td>
                <td>Vacina anual (estirpes variam); oseltamivir (Tamiflu)</td>
              </tr>
              <tr>
                <td><strong>COVID-19</strong></td>
                <td>SARS-CoV-2 (Coronavírus, RNA)</td>
                <td>Aerossóis e gotículas respiratórias</td>
                <td>Febre, tosse, dispneia, anosmia, ageusia; formas graves: pneumonia, SARA</td>
                <td>Vacinas (mRNA, vetor viral, inativado); antivirais (nirmatrelvir)</td>
              </tr>
              <tr>
                <td><strong>Dengue</strong></td>
                <td>Vírus Dengue (Flavivírus, RNA); sorotipos DENV1–4</td>
                <td>Picada do Aedes aegypti</td>
                <td>Febre alta, dor atrás dos olhos, mialgia, exantema; forma grave: dengue hemorrágica</td>
                <td>Eliminação de criadouros; repelente; vacina (Dengvaxia/Qdenga)</td>
              </tr>
              <tr>
                <td><strong>Zika</strong></td>
                <td>Vírus Zika (Flavivírus, RNA)</td>
                <td>Aedes aegypti; sexual; vertical</td>
                <td>Febre baixa, exantema, conjuntivite; microcefalia fetal (transmissão vertical)</td>
                <td>Controle de vetores; sem vacina aprovada no Brasil</td>
              </tr>
              <tr>
                <td><strong>Chikungunya</strong></td>
                <td>Vírus Chikungunya (Alfavírus, RNA)</td>
                <td>Aedes aegypti e Aedes albopictus</td>
                <td>Febre, artralgia intensa e persistente (pode durar meses)</td>
                <td>Controle de vetores; analgésicos; sem vacina amplamente disponível</td>
              </tr>
              <tr>
                <td><strong>AIDS</strong></td>
                <td>HIV (Retrovírus, RNA)</td>
                <td>Sexual, sanguínea, vertical</td>
                <td>Queda de imunidade, infecções oportunistas, cânceres</td>
                <td>Preservativo; TARV; PrEP; triagem do sangue</td>
              </tr>
              <tr>
                <td><strong>Hepatite B</strong></td>
                <td>HBV (Hepadnavírus, DNA)</td>
                <td>Sexual, sanguínea, vertical</td>
                <td>Icterícia, fadiga; formas crônicas podem evoluir para cirrose e hepatocarcinoma</td>
                <td>Vacina (obrigatória no calendário); antivirais (tenofovir)</td>
              </tr>
              <tr>
                <td><strong>Hepatite C</strong></td>
                <td>HCV (Flavivírus, RNA)</td>
                <td>Principalmente sanguínea</td>
                <td>Hepatite crônica silenciosa; cirrose e carcinoma hepatocelular</td>
                <td>Antivirais de ação direta (DAA); sem vacina</td>
              </tr>
              <tr>
                <td><strong>HPV</strong></td>
                <td>Papilomavírus (DNA)</td>
                <td>Sexual; contato pele a pele</td>
                <td>Verrugas genitais; sorotipos 16 e 18 causam câncer do colo do útero, orofaringe, ânus</td>
                <td>Vacina (meninas 9–14 a e meninos 11–14 a no SUS); Papanicolau</td>
              </tr>
              <tr>
                <td><strong>Sarampo</strong></td>
                <td>Paramyxovírus (RNA)</td>
                <td>Aerossóis (altamente contagioso)</td>
                <td>Febre, coriza, manchas de Koplik, exantema maculopapular; complicações: pneumonia, encefalite</td>
                <td>Vacina tríplice viral (SCR/MMR) — 2 doses garantem imunidade</td>
              </tr>
              <tr>
                <td><strong>Raiva</strong></td>
                <td>Lyssavírus (Rhabdovírus, RNA)</td>
                <td>Saliva de animal infectado (mordida/arranhão)</td>
                <td>Hidrofobia, espasmos, paralisia; quase 100% fatal sem tratamento</td>
                <td>Vacinação animal; soro antirrábico + vacina pós-exposição imediata</td>
              </tr>
              <tr>
                <td><strong>Febre Amarela</strong></td>
                <td>Vírus da FA (Flavivírus, RNA)</td>
                <td>Aedes aegypti (urbana); Haemagogus (silvestre)</td>
                <td>Febre, icterícia, hemorragia; alta letalidade</td>
                <td>Vacina de dose única (via de regra; imunidade vitalícia)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Imunização</span>

        <h2>7. Vacinas × Soros: Imunidade Ativa e Passiva</h2>

        <p>
          Uma das pegadinhas mais recorrentes do ENEM é confundir{" "}
          <strong>vacina</strong> com <strong>soro</strong>. Ambos são
          utilizados na profilaxia ou tratamento de doenças infecciosas, mas
          funcionam por mecanismos completamente distintos e produzem tipos
          diferentes de imunidade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Vacina</th>
                <th>Soro (imunoglobulina)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Contém</strong></td>
                <td>Antígeno (vírus atenuado, inativado, subunidade proteica ou mRNA)</td>
                <td>Anticorpos prontos produzidos em outro organismo</td>
              </tr>
              <tr>
                <td><strong>Tipo de imunidade</strong></td>
                <td>Ativa e adquirida: o próprio organismo produz os anticorpos</td>
                <td>Passiva: anticorpos são introduzidos diretamente</td>
              </tr>
              <tr>
                <td><strong>Duração da proteção</strong></td>
                <td>Longa (meses a anos; memória imunológica)</td>
                <td>Curta (dias a semanas; anticorpos são degradados)</td>
              </tr>
              <tr>
                <td><strong>Velocidade de ação</strong></td>
                <td>Lenta (dias a semanas para produção de anticorpos)</td>
                <td>Imediata (anticorpos já disponíveis)</td>
              </tr>
              <tr>
                <td><strong>Uso típico</strong></td>
                <td>Prevenção (antes da exposição)</td>
                <td>Emergência após exposição (raiva, ofídismo, botulismo)</td>
              </tr>
              <tr>
                <td><strong>Exemplos</strong></td>
                <td>Vacina da gripe, COVID-19, HPV, febre amarela, sarampo</td>
                <td>Soro antirrábico, soro antiofídico, imunoglobulina anti-hepatite B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Tipos de vacinas antivirais</h3>
          <p>
            <strong>Vírus atenuado (ao vivo):</strong> vírus com virulência
            reduzida por passagens sucessivas em culturas. Gera resposta imune
            robusta e duradoura. Exemplos: sarampo (SCR), febre amarela,
            varicela. Contraindicada em imunossuprimidos.
          </p>
          <p>
            <strong>Vírus inativado:</strong> vírus morto quimicamente ou
            por calor. Segura para imunossuprimidos. Exemplo: vacina da gripe
            injetável (tradicional), poliomielite injetável (IPV).
          </p>
          <p>
            <strong>Subunidade proteica:</strong> apenas proteínas do agente
            (ex.: proteína S do SARS-CoV-2 na vacina Novavax; proteína L1 do
            HPV na Gardasil).
          </p>
          <p>
            <strong>mRNA:</strong> tecnologia inovadora usada nas vacinas
            Pfizer-BioNTech e Moderna contra COVID-19. O mRNA instrui as
            células a produzirem a proteína spike, estimulando resposta imune
            sem nenhum material genético viral completo.
          </p>
          <p>
            <strong>Vetor viral:</strong> vírus atenuado (p. ex., adenovírus
            de chimpanzé) transporta o gene de uma proteína viral. Exemplos:
            AstraZeneca (COVID-19), Janssen.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Prevenção e Antivirais</span>

        <h2>8. Prevenção das Viroses e Antivirais</h2>

        <p>
          Diferentemente das infecções bacterianas, as viroses{" "}
          <strong>não respondem a antibióticos</strong>. Isso se deve ao fato
          de os antibióticos atuarem em estruturas exclusivas das bactérias —
          parede celular de peptidoglicano, ribossomos 70S, DNA girase
          bacteriana — que os vírus simplesmente não possuem. O uso indevido
          de antibióticos em infecções virais é uma das principais causas de
          resistência bacteriana.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💉</span>
            <h3>Vacinação</h3>
            <p>
              Estratégia mais eficaz de prevenção coletiva. A imunidade de
              rebanho é atingida quando uma proporção elevada da população
              está imune, protegendo inclusive os que não podem se vacinar.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧼</span>
            <h3>Higiene e barreira</h3>
            <p>
              Lavagem das mãos, uso de máscara em surtos respiratórios,
              preservativo (viroses de transmissão sexual), controle de
              vetores (Aedes aegypti) e saneamento básico.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Antivirais</h3>
            <p>
              Medicamentos que interferem em etapas específicas do ciclo
              viral: oseltamivir (gripe), aciclovir (herpes), TARV (HIV),
              sofosbuvir (hepatite C), nirmatrelvir (COVID-19).
            </p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Triagem do sangue</h3>
            <p>
              Testes obrigatórios em bancos de sangue para HIV, HBV, HCV e
              HTLV-1/2, eliminando a transmissão transfusional dessas viroses.
            </p>
          </div>

          <div className="lesson-card">
            <span>🤝</span>
            <h3>Vigilância epidemiológica</h3>
            <p>
              Monitoramento contínuo de casos para detectar surtos e
              epidemias precocemente e acionar respostas de saúde pública.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐕</span>
            <h3>Vacinação animal</h3>
            <p>
              Fundamental para a raiva: campanhas anuais de vacinação de
              cães e gatos eliminaram a raiva humana transmitida por cães
              em grande parte do Brasil.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>⚠️ Antibióticos não combatem vírus — por quê?</h3>
          <p>
            Antibióticos como a penicilina bloqueiam a síntese de
            peptidoglicano da parede bacteriana; tetraciclinas inibem
            ribossomos 70S. Os vírus <strong>não possuem parede celular
            nem ribossomos próprios</strong>: eles usam os ribossomos 80S
            do hospedeiro eucariótico, que os antibióticos não podem atacar
            sem matar também as células humanas. Assim, antibióticos são
            ineficazes e inapropriados para tratar gripe, COVID-19, dengue
            ou qualquer outra virose.
          </p>
        </div>
      </section>

      {/* ===================== EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Natureza dos vírus"
          statement={
            <p>
              Os vírus são considerados parasitas intracelulares obrigatórios
              porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Possuem ribossomos e mitocôndrias próprios para o metabolismo",
            },
            {
              letter: "b",
              text: "Só conseguem se reproduzir utilizando a maquinaria metabólica de uma célula hospedeira viva",
              correct: true,
            },
            {
              letter: "c",
              text: "Realizam respiração celular aeróbica dentro do hospedeiro",
            },
            {
              letter: "d",
              text: "Possuem membrana plasmática que regula sua homeostase",
            },
          ]}
          resolution={
            <p>
              Os vírus são desprovidos de organelas e de metabolismo próprio.
              Fora de uma célula hospedeira viva, são inertes. Apenas ao
              invadir uma célula passam a usar os ribossomos, enzimas e
              energia (ATP) do hospedeiro para replicar seu material genético
              e sintetizar as proteínas do capsídeo, produzindo novos vírions.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ciclo lítico × lisogênico"
          statement={
            <p>
              Um bacteriófago lambda infecta uma bactéria e integra seu DNA
              ao cromossomo bacteriano, sendo replicado por várias gerações
              sem produzir novos vírus. Após exposição à radiação ultravioleta,
              o DNA viral é excisado e inicia-se a produção intensa de novos
              fagos, com posterior lise da célula. Esse comportamento descreve,
              respectivamente:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ciclo lítico seguido de ciclo lisogênico",
            },
            {
              letter: "b",
              text: "Ciclo lisogênico seguido de ciclo lítico",
              correct: true,
            },
            {
              letter: "c",
              text: "Dois ciclos líticos consecutivos",
            },
            {
              letter: "d",
              text: "Ciclo lisogênico exclusivo, sem lise celular",
            },
          ]}
          resolution={
            <p>
              A integração do DNA viral ao cromossomo bacteriano caracteriza o{" "}
              <strong>ciclo lisogênico</strong> (prófago). A excisão do prófago
              induzida por UV e a subsequente produção de novos vírions com
              lise da célula hospedeira definem o{" "}
              <strong>ciclo lítico</strong>. A sequência correta é: lisogênico
              {" "}→ lítico.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Retrovírus e transcrição reversa"
          statement={
            <p>
              O HIV é um retrovírus cujo ciclo de infecção inclui uma etapa
              em que RNA viral é convertido em DNA. Esse processo inverte o
              fluxo convencional de informação genética e depende de uma
              enzima específica. Assinale a alternativa que descreve
              corretamente essa enzima e sua ação-alvo no tratamento da AIDS:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "DNA polimerase — inibe a síntese do DNA do hospedeiro nas células CD4+",
            },
            {
              letter: "b",
              text: "Transcriptase reversa — converte RNA viral em DNA; inibidores dessa enzima compõem a TARV",
              correct: true,
            },
            {
              letter: "c",
              text: "RNA polimerase — transcreve o DNA do hospedeiro em RNA mensageiro viral",
            },
            {
              letter: "d",
              text: "Integrase — elimina o DNA do hospedeiro, impedindo a formação do provírus",
            },
          ]}
          resolution={
            <p>
              A <strong>transcriptase reversa (TR)</strong> catalisa a síntese
              de DNA usando o RNA viral como molde — etapa essencial para a
              formação do provírus. Inibidores nucleosídeos da TR (ex.:
              zidovudina/AZT, tenofovir) e inibidores não nucleosídeos (ex.:
              efavirenz) integram a TARV, bloqueando essa etapa e impedindo a
              replicação do HIV.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Surto de dengue e controle de vetor"
          statement={
            <p>
              Um município registrou aumento expressivo de casos de dengue em
              fevereiro, mês com alta pluviosidade. O secretário de saúde
              propôs duas medidas: (I) distribuição em massa de antibióticos
              para a população sintomática; (II) campanha de eliminação de
              recipientes com água parada e distribuição de repelentes. Com
              base no conhecimento sobre viroses e prevenção, avalie:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ambas as medidas são adequadas, pois antibióticos atuam também contra vírus em altas doses",
            },
            {
              letter: "b",
              text: "Apenas a medida II é adequada; antibióticos não atuam contra vírus e o controle vetorial reduz a transmissão do Aedes aegypti",
              correct: true,
            },
            {
              letter: "c",
              text: "Apenas a medida I é adequada, pois a dengue pode ser complicada por infecções bacterianas secundárias que os antibióticos tratam",
            },
            {
              letter: "d",
              text: "Nenhuma das medidas é adequada; apenas a vacinação em massa é eficaz para controlar surtos de dengue",
            },
          ]}
          resolution={
            <p>
              A dengue é causada por um flavivírus, e{" "}
              <strong>antibióticos são ineficazes contra vírus</strong> — não
              há justificativa científica para distribuí-los em surtos virais.
              A eliminação de criadouros do <em>Aedes aegypti</em> e o uso de
              repelentes são as principais estratégias de controle, pois
              reduzem a população do vetor e protegem os indivíduos da
              picada. A vacinação (Qdenga) é complementar, não substitui o
              controle vetorial.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Vacina de mRNA e imunidade ativa"
          statement={
            <p>
              Durante a pandemia de COVID-19, foram desenvolvidas vacinas
              baseadas em mRNA que instruem as células humanas a produzir a
              proteína spike do SARS-CoV-2, estimulando o sistema imune a
              gerar anticorpos. Uma pessoa vacinada com duas doses que,
              meses depois, entra em contato com o vírus apresenta resposta
              imune rápida e eficaz. Esse fenômeno é explicado pela:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Imunidade passiva conferida pelos anticorpos presentes no mRNA injetado",
            },
            {
              letter: "b",
              text: "Presença de vírus vivo atenuado na vacina, que permanece no organismo e combate a infecção",
            },
            {
              letter: "c",
              text: "Memória imunológica: linfócitos B e T de memória gerados após a vacinação reconhecem rapidamente o antígeno na reinfecção",
              correct: true,
            },
            {
              letter: "d",
              text: "Ação direta do mRNA vacinal, que permanece no núcleo celular e bloqueia a entrada do vírus",
            },
          ]}
          resolution={
            <p>
              A vacinação induz <strong>imunidade ativa</strong>: o organismo
              é exposto ao antígeno (proteína spike), ativa linfócitos B
              (que diferenciam em plasmócitos e produzem anticorpos) e T
              (citotóxicos e auxiliadores). Após a resposta primária, parte
              dessas células torna-se <strong>linfócitos de memória</strong>,
              que persistem por anos e respondem muito mais rapidamente (
              resposta secundária) ao reconhecer o mesmo antígeno em uma
              infecção real — reduzindo a gravidade da doença. O mRNA não
              entra no núcleo nem persiste no organismo além de poucos dias.
            </p>
          }
        />
      </section>
    </article>
  );
}
