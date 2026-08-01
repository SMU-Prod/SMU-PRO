"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 41</span>

          <h1>Sistemas de Controle: Sistema Endócrino e Sistema Nervoso</h1>

          <p>
            O corpo humano é uma obra de integração extraordinária: trilhões de
            células devem agir de forma coordenada para manter a vida. Essa
            coordenação é realizada por dois grandes sistemas de controle — o{" "}
            <strong>sistema endócrino</strong>, que envia mensagens químicas
            (hormônios) pela corrente sanguínea, e o{" "}
            <strong>sistema nervoso</strong>, que dispara sinais elétricos em
            milissegundos. Compreender como esses sistemas funcionam, se
            integram e se regulam por retroalimentação é essencial para o ENEM e
            os principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Integração e Homeostase</span>

        <h2>1. Por Que o Corpo Precisa de Sistemas de Controle?</h2>

        <p>
          Em um organismo unicelular, a célula interage diretamente com o
          ambiente. Em organismos multicelulares complexos, a maioria das células
          fica isolada do meio externo, recebendo nutrientes e informações por
          meio de sistemas especializados. Para que coração, rins, fígado,
          pulmões e músculo trabalhem em harmonia, é preciso{" "}
          <strong>comunicação constante e precisa</strong>. Essa comunicação é
          feita pelos sistemas nervoso e endócrino, que atuam de modo
          complementar para manter a <strong>homeostase</strong> — equilíbrio
          dinâmico de variáveis como temperatura, pH, glicemia, pressão osmótica
          e pressão arterial.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Sistema Nervoso</h3>
            <p>
              Sinais elétricos conduzidos por neurônios. Resposta em
              milissegundos, duração curta, alvo preciso.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Sistema Endócrino</h3>
            <p>
              Hormônios lançados no sangue. Resposta em minutos a horas, duração
              prolongada, alcance amplo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Integração</h3>
            <p>
              O hipotálamo é o ponto de encontro: recebe sinais nervosos e
              emite hormônios que controlam a hipófise.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Homeostase</h3>
            <p>
              Ajustes contínuos via feedback negativo mantêm o ambiente interno
              estável mesmo com variações externas intensas.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Sistema Nervoso</th>
                <th>Sistema Endócrino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mensageiro</td>
                <td>Impulso elétrico + neurotransmissor</td>
                <td>Hormônio (proteína ou esteroide)</td>
              </tr>
              <tr>
                <td>Via de transporte</td>
                <td>Axônios (fibras nervosas)</td>
                <td>Corrente sanguínea</td>
              </tr>
              <tr>
                <td>Velocidade</td>
                <td>Milissegundos</td>
                <td>Minutos a horas</td>
              </tr>
              <tr>
                <td>Duração do efeito</td>
                <td>Curta (segundos)</td>
                <td>Longa (horas a dias)</td>
              </tr>
              <tr>
                <td>Especificidade</td>
                <td>Alta (alvo pontual)</td>
                <td>Ampla (células-alvo em todo o corpo)</td>
              </tr>
              <tr>
                <td>Exemplos de ação</td>
                <td>Retirar a mão do fogo, piscar</td>
                <td>Crescimento, ciclo menstrual, glicemia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Endócrino</span>

        <h2>2. Glândulas Endócrinas, Exócrinas e Mistas</h2>

        <p>
          As glândulas são agrupamentos celulares secretores. Classificam-se
          conforme o destino de sua secreção:
        </p>

        <div className="lesson-highlight">
          <h3>Tipos de glândulas</h3>
          <p>
            <strong>Glândulas endócrinas</strong> lançam seus produtos
            diretamente na corrente sanguínea, sem ductos — por isso são
            chamadas de <em>glândulas de secreção interna</em>. Exemplos:
            hipófise, tireoide, adrenais. <strong>Glândulas exócrinas</strong>{" "}
            possuem ductos que conduzem a secreção até uma superfície (interna
            ou externa): salivares, sudoríparas, sebáceas.{" "}
            <strong>Glândulas mistas</strong> exercem as duas funções: o{" "}
            <strong>pâncreas</strong> tem porção endócrina (ilhotas de
            Langerhans → insulina/glucagon) e porção exócrina (suco pancreático
            → intestino); as <strong>gônadas</strong> produzem hormônios sexuais
            e gametas.
          </p>
        </div>

        <p>
          Os <strong>hormônios</strong> são mensageiros químicos produzidos em
          uma glândula e transportados pelo sangue até células-alvo distantes,
          onde atuam em receptores específicos. Podem ser de natureza{" "}
          <strong>proteica</strong> (insulina, GH, ADH — hidrossolúveis, atuam
          em receptores de membrana) ou <strong>esteroide</strong> (cortisol,
          estrógeno, testosterona — lipossolúveis, atravessam a membrana e atuam
          no núcleo). Essa distinção explica diferenças na velocidade de ação e
          nos mecanismos celulares envolvidos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Glândula</th>
                <th>Principais hormônios</th>
                <th>Funções principais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hipotálamo</td>
                <td>TRH, CRH, GnRH, GHRH, dopamina</td>
                <td>Controla a hipófise; integra SN e SE</td>
              </tr>
              <tr>
                <td>Hipófise anterior (adenoipófise)</td>
                <td>GH, TSH, ACTH, FSH, LH, Prolactina, MSH</td>
                <td>Crescimento; controla tireoide, adrenais, gônadas; produção de leite</td>
              </tr>
              <tr>
                <td>Hipófise posterior (neurohipófise)</td>
                <td>ADH (vasopressina), Ocitocina</td>
                <td>Retenção de água; contrações uterinas e ejeção de leite</td>
              </tr>
              <tr>
                <td>Tireoide</td>
                <td>T₃, T₄, Calcitonina</td>
                <td>Metabolismo basal; redução do cálcio sanguíneo</td>
              </tr>
              <tr>
                <td>Paratireoides (4 nódulos)</td>
                <td>PTH (paratormônio)</td>
                <td>Eleva o cálcio sanguíneo; antagonista da calcitonina</td>
              </tr>
              <tr>
                <td>Pâncreas (ilhotas)</td>
                <td>Insulina (células β), Glucagon (células α)</td>
                <td>Reduz glicemia; eleva glicemia</td>
              </tr>
              <tr>
                <td>Adrenal — córtex</td>
                <td>Cortisol, Aldosterona, Androgênios</td>
                <td>Resposta ao estresse; equilíbrio Na⁺/K⁺; caracteres sexuais</td>
              </tr>
              <tr>
                <td>Adrenal — medula</td>
                <td>Adrenalina, Noradrenalina</td>
                <td>Resposta de luta ou fuga; acelera coração, dilata pupilas</td>
              </tr>
              <tr>
                <td>Gônadas — testículos</td>
                <td>Testosterona</td>
                <td>Caracteres sexuais masculinos, espermatogênese</td>
              </tr>
              <tr>
                <td>Gônadas — ovários</td>
                <td>Estrógeno, Progesterona</td>
                <td>Ciclo menstrual, gestação, caracteres sexuais femininos</td>
              </tr>
              <tr>
                <td>Pineal</td>
                <td>Melatonina</td>
                <td>Regulação do ciclo sono-vigília (ritmo circadiano)</td>
              </tr>
              <tr>
                <td>Timo</td>
                <td>Timosina</td>
                <td>Maturação de linfócitos T (imunidade)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Hipófise e Hipotálamo</span>

        <h2>3. O Eixo Hipotálamo-Hipófise — O Centro de Comando</h2>

        <p>
          A <strong>hipófise</strong> (ou pituitária) é uma estrutura do tamanho
          de uma ervilha localizada na base do cérebro, em uma cavidade óssea
          chamada <em>sela túrcica</em>. Apesar de minúscula, é chamada de{" "}
          <strong>glândula-mestra</strong> porque seus hormônios tróficos
          controlam outras glândulas endócrinas. Entretanto, a hipófise ela
          própria é controlada pelo <strong>hipotálamo</strong>, região do
          diencéfalo que recebe informações de praticamente todo o sistema
          nervoso e traduz sinais neurais em sinais hormonais.
        </p>

        <div className="lesson-highlight">
          <h3>Adenoipófise (lobo anterior)</h3>
          <p>
            Produz hormônios próprios estimulados por hormônios liberadores do
            hipotálamo: <strong>GH</strong> (crescimento — déficit gera nanismo
            hipofisário; excesso na infância gera gigantismo; em adultos, excesso
            gera acromegalia); <strong>TSH</strong> (estimula tireoide);{" "}
            <strong>ACTH</strong> (estimula córtex adrenal);{" "}
            <strong>FSH e LH</strong> (controlam gônadas);{" "}
            <strong>Prolactina</strong> (síntese de leite);{" "}
            <strong>MSH</strong> (estimula melanócitos).
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Neurohipófise (lobo posterior)</h3>
          <p>
            Não produz, mas <em>armazena e libera</em> hormônios sintetizados no
            hipotálamo: <strong>ADH</strong> — atua nos túbulos renais,
            aumentando a reabsorção de água (déficit causa diabetes insipidus,
            com produção de urina muito diluída); <strong>Ocitocina</strong> —
            desencadeia contrações uterinas no parto e ejeção do leite durante a
            amamentação; ambos participam de alças de feedback positivo.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 260" width="680" height="260" aria-label="Eixo hipotálamo-hipófise-tireoide com feedback negativo">
            {/* Hipotálamo */}
            <rect x={250} y={10} width={180} height={50} rx={12} fill="#7c3aed" opacity={0.18} stroke="#7c3aed" strokeWidth={1.8} />
            <text x={340} y={32} textAnchor="middle" fontSize={13} fontWeight={700} fill="#3b0764">Hipotálamo</text>
            <text x={340} y={50} textAnchor="middle" fontSize={11} fill="#5b21b6">libera TRH</text>

            {/* seta hipotálamo → hipófise */}
            <line x1={340} y1={60} x2={340} y2={105} stroke="#7c3aed" strokeWidth={2} markerEnd="url(#arr)" />

            {/* Hipófise */}
            <rect x={250} y={108} width={180} height={50} rx={12} fill="#0ea5e9" opacity={0.18} stroke="#0ea5e9" strokeWidth={1.8} />
            <text x={340} y={130} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0c4a6e">Hipófise anterior</text>
            <text x={340} y={148} textAnchor="middle" fontSize={11} fill="#0369a1">libera TSH</text>

            {/* seta hipófise → tireoide */}
            <line x1={340} y1={158} x2={340} y2={203} stroke="#0ea5e9" strokeWidth={2} markerEnd="url(#arr2)" />

            {/* Tireoide */}
            <rect x={250} y={206} width={180} height={50} rx={12} fill="#16a34a" opacity={0.18} stroke="#16a34a" strokeWidth={1.8} />
            <text x={340} y={228} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Tireoide</text>
            <text x={340} y={246} textAnchor="middle" fontSize={11} fill="#15803d">libera T₃ / T₄</text>

            {/* feedback negativo — seta de volta */}
            <path d="M 430 231 C 580 231, 580 35, 430 35" fill="none" stroke="#dc2626" strokeWidth={2} strokeDasharray="7 4" />
            <polygon points="430,35 420,28 420,42" fill="#dc2626" />
            <text x={530} y={140} textAnchor="middle" fontSize={11} fontWeight={600} fill="#dc2626">feedback</text>
            <text x={530} y={154} textAnchor="middle" fontSize={11} fontWeight={600} fill="#dc2626">negativo</text>
            <text x={530} y={168} textAnchor="middle" fontSize={10} fill="#dc2626">(T₃/T₄ altos →</text>
            <text x={530} y={181} textAnchor="middle" fontSize={10} fill="#dc2626">inibem TRH e TSH)</text>

            {/* legenda setas */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#7c3aed" />
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#0ea5e9" />
              </marker>
            </defs>

            <text x={340} y={255} textAnchor="middle" fontSize={10} fill="#6b7280" fontStyle="italic"> </text>
          </svg>
          <figcaption>
            Eixo hipotálamo → hipófise → tireoide. O excesso de T₃/T₄ inibe a
            produção de TRH e TSH por feedback negativo, restabelecendo o
            equilíbrio.
          </figcaption>
        </figure>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Pâncreas e Glicemia</span>

        <h2>4. Controle da Glicemia — Insulina e Glucagon</h2>

        <p>
          A glicose é o combustível prioritário do cérebro e das células em
          geral. Manter a glicemia dentro de limites seguros (70–110 mg/dL em
          jejum) é uma das tarefas homeostáticas mais críticas do organismo. O
          pâncreas endócrino realiza esse controle por meio de dois hormônios
          antagônicos produzidos nas <strong>ilhotas de Langerhans</strong>:
        </p>

        <div className="lesson-highlight">
          <h3>Insulina (células β) — o hormônio da abundância</h3>
          <p>
            Liberada quando a glicemia sobe (após refeições). Facilita a entrada
            de glicose nas células (especialmente músculo e tecido adiposo),
            estimula a <strong>glicogênese</strong> (síntese de glicogênio no
            fígado) e a <strong>lipogênese</strong> (conversão de glicose em
            gordura). Resultado: glicemia cai de volta ao normal.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Glucagon (células α) — o hormônio da escassez</h3>
          <p>
            Liberado quando a glicemia cai (jejum, exercício intenso). Estimula
            a <strong>glicogenólise</strong> (quebra do glicogênio hepático) e a{" "}
            <strong>gliconeogênese</strong> (síntese de glicose a partir de
            aminoácidos e glicerol). Resultado: glicemia sobe de volta ao normal.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Controle da glicemia — insulina versus glucagon">
            {/* Linha de glicemia normal */}
            <line x1={60} y1={10} x2={60} y2={180} stroke="#374151" strokeWidth={1.5} />
            <line x1={60} y1={180} x2={640} y2={180} stroke="#374151" strokeWidth={1.5} />

            {/* Faixa normal */}
            <rect x={60} y={80} width={580} height={40} fill="#bbf7d0" opacity={0.5} />
            <text x={648} y={95} fontSize={10} fill="#15803d">normal</text>
            <text x={648} y={107} fontSize={10} fill="#15803d">70-110</text>

            {/* Glicemia alta (após refeição) → insulina normaliza */}
            <path d="M 60 100 C 120 100, 150 30, 220 30 C 280 30, 310 100, 380 100" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
            <text x={220} y={22} textAnchor="middle" fontSize={11} fill="#b45309" fontWeight={700}>glicemia alta</text>
            <text x={220} y={35} textAnchor="middle" fontSize={10} fill="#b45309">(após refeição)</text>
            <text x={290} y={55} textAnchor="middle" fontSize={11} fill="#2563eb" fontWeight={700}>insulina</text>
            <polygon points="305,62 298,55 312,55" fill="#2563eb" />

            {/* Glicemia baixa → glucagon normaliza */}
            <path d="M 380 100 C 430 100, 460 160, 510 160 C 555 160, 580 100, 630 100" fill="none" stroke="#6366f1" strokeWidth={2.5} />
            <text x={510} y={175} textAnchor="middle" fontSize={11} fill="#4338ca" fontWeight={700}>glicemia baixa</text>
            <text x={492} y={138} textAnchor="middle" fontSize={11} fill="#16a34a" fontWeight={700}>glucagon</text>
            <polygon points="492,148 485,141 499,141" fill="#16a34a" />

            <text x={40} y={104} textAnchor="end" fontSize={11} fill="#374151">mg/dL</text>
          </svg>
          <figcaption>
            Antagonismo insulina × glucagon mantém a glicemia em uma faixa
            estreita. Ambos operam por feedback negativo: o próprio nível de
            glicose controla sua liberação.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Diabetes mellitus — quando o controle falha</h3>
          <p>
            <strong>Tipo 1:</strong> doença autoimune; o sistema imune destrói as
            células β; ausência de insulina; tratamento com insulina exógena.{" "}
            <strong>Tipo 2:</strong> resistência celular à insulina, frequentemente
            associada à obesidade e sedentarismo; mais prevalente; tratamento
            inclui mudança de estilo de vida e antidiabéticos orais.{" "}
            <strong>Sintomas clássicos ("3 Ps"):</strong> poliúria (urina excessiva),
            polidipsia (sede intensa) e polifagia (fome intensa). A glicose
            em excesso no sangue ultrapassa o limiar de reabsorção renal e é
            eliminada na urina (glicosúria), arrastando água por osmose e
            causando poliúria.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Feedback Negativo</span>

        <h2>5. Regulação Hormonal por Retroalimentação</h2>

        <p>
          O principal mecanismo de controle do sistema endócrino é o{" "}
          <strong>feedback negativo</strong> (retroalimentação negativa): o
          produto final de uma cadeia hormonal inibe os sinais que iniciaram
          essa cadeia. Isso cria um circuito autorregulador que evita tanto a
          deficiência quanto o excesso.
        </p>

        <p>
          O eixo tireoidiano é o exemplo clássico do ENEM: o hipotálamo libera
          TRH, que estimula a hipófise a liberar TSH, que por sua vez estimula
          a tireoide a produzir T₃ e T₄. Quando os níveis de T₃ e T₄ sobem o
          suficiente, eles <strong>inibem</strong> a liberação de TRH e TSH,
          fechando o ciclo. Se a tireoide for destruída (como no hipotireoidismo
          de Hashimoto), os níveis de T₃/T₄ caem, o feedback negativo cessa e
          o TSH sobe — por isso, o TSH alto é marcador laboratorial de
          hipotireoidismo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Hipotireoidismo</h3>
            <p>
              T₃/T₄ baixos → TSH alto (hipófise "grita" por mais hormônio).
              Cansaço, ganho de peso, intolerância ao frio, bradicardia.
            </p>
          </div>

          <div className="lesson-card">
            <span>⬆️</span>
            <h3>Hipertireoidismo</h3>
            <p>
              T₃/T₄ altos → TSH baixo (hipófise é inibida). Perda de peso,
              taquicardia, calor, nervosismo, exoftalmia (Graves).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧂</span>
            <h3>Bócio por deficiência de iodo</h3>
            <p>
              Sem iodo, tireoide não faz T₃/T₄ → TSH sobe cronicamente →
              tireoide cresce (bócio endêmico). Prevenção: sal iodado.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦴</span>
            <h3>PTH × Calcitonina</h3>
            <p>
              PTH sobe o cálcio sanguíneo; calcitonina (tireoide) o reduz.
              Outro par antagônico controlado por feedback negativo.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Exceção — feedback positivo:</strong> o parto é um
            exemplo de feedback <em>positivo</em>: a cabeça do bebê pressiona o
            colo uterino → neurônios enviam sinal ao hipotálamo → mais ocitocina
            é liberada → contrações mais fortes → mais pressão → mais ocitocina.
            O ciclo se amplifica até que o bebê nasce e o estímulo cessa.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Nervoso</span>

        <h2>6. Organização do Sistema Nervoso</h2>

        <p>
          O sistema nervoso (SN) é formado por células altamente especializadas
          — os <strong>neurônios</strong> — e células de suporte, as{" "}
          <strong>células gliais</strong> (ou neuróglia): astrócitos, micróglias,
          oligodendrócitos (SNC) e células de Schwann (SNP). Ele se divide
          anatomicamente em <strong>sistema nervoso central (SNC)</strong> e{" "}
          <strong>sistema nervoso periférico (SNP)</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 310" width="720" height="310" aria-label="Organograma de divisões do sistema nervoso">
            {/* SN raiz */}
            <rect x={290} y={10} width={140} height={44} rx={10} fill="#0f4c81" opacity={0.2} stroke="#0f4c81" strokeWidth={1.8} />
            <text x={360} y={37} textAnchor="middle" fontSize={13} fontWeight={700} fill="#071c3d">Sistema Nervoso</text>

            {/* ramificação para SNC e SNP */}
            <line x1={360} y1={54} x2={360} y2={74} stroke="#374151" strokeWidth={1.5} />
            <line x1={200} y1={74} x2={520} y2={74} stroke="#374151" strokeWidth={1.5} />
            <line x1={200} y1={74} x2={200} y2={94} stroke="#374151" strokeWidth={1.5} />
            <line x1={520} y1={74} x2={520} y2={94} stroke="#374151" strokeWidth={1.5} />

            {/* SNC */}
            <rect x={110} y={94} width={180} height={44} rx={10} fill="#0ea5e9" opacity={0.2} stroke="#0ea5e9" strokeWidth={1.8} />
            <text x={200} y={121} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0c4a6e">SNC</text>

            {/* SNP */}
            <rect x={430} y={94} width={180} height={44} rx={10} fill="#f59e0b" opacity={0.2} stroke="#f59e0b" strokeWidth={1.8} />
            <text x={520} y={121} textAnchor="middle" fontSize={12} fontWeight={700} fill="#78350f">SNP</text>

            {/* SNC → Encéfalo e Medula */}
            <line x1={200} y1={138} x2={200} y2={158} stroke="#374151" strokeWidth={1.3} />
            <line x1={140} y1={158} x2={260} y2={158} stroke="#374151" strokeWidth={1.3} />
            <line x1={140} y1={158} x2={140} y2={178} stroke="#374151" strokeWidth={1.3} />
            <line x1={260} y1={158} x2={260} y2={178} stroke="#374151" strokeWidth={1.3} />

            <rect x={70} y={178} width={140} height={40} rx={8} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.3} />
            <text x={140} y={203} textAnchor="middle" fontSize={11} fontWeight={600} fill="#1e3a8a">Encéfalo</text>

            <rect x={190} y={178} width={140} height={40} rx={8} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.3} />
            <text x={260} y={203} textAnchor="middle" fontSize={11} fontWeight={600} fill="#1e3a8a">Medula espinhal</text>

            {/* Encéfalo → subdivisões */}
            <line x1={140} y1={218} x2={140} y2={238} stroke="#374151" strokeWidth={1.2} />
            <line x1={60} y1={238} x2={220} y2={238} stroke="#374151" strokeWidth={1.2} />
            {[60, 140, 220].map((x) => (
              <line key={x} x1={x} y1={238} x2={x} y2={258} stroke="#374151" strokeWidth={1.2} />
            ))}

            {[
              { x: 60, label: "Cérebro" },
              { x: 140, label: "Cerebelo" },
              { x: 220, label: "Tronco" },
            ].map((item) => (
              <g key={item.label}>
                <rect x={item.x - 40} y={258} width={80} height={36} rx={7} fill="#dbeafe" stroke="#60a5fa" strokeWidth={1} />
                <text x={item.x} y={281} textAnchor="middle" fontSize={10} fontWeight={600} fill="#1e3a8a">{item.label}</text>
              </g>
            ))}

            {/* SNP → Somático e Autônomo */}
            <line x1={520} y1={138} x2={520} y2={158} stroke="#374151" strokeWidth={1.3} />
            <line x1={440} y1={158} x2={600} y2={158} stroke="#374151" strokeWidth={1.3} />
            <line x1={440} y1={158} x2={440} y2={178} stroke="#374151" strokeWidth={1.3} />
            <line x1={600} y1={158} x2={600} y2={178} stroke="#374151" strokeWidth={1.3} />

            <rect x={370} y={178} width={140} height={40} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.3} />
            <text x={440} y={203} textAnchor="middle" fontSize={11} fontWeight={600} fill="#78350f">Somático (vol.)</text>

            <rect x={530} y={178} width={140} height={40} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.3} />
            <text x={600} y={203} textAnchor="middle" fontSize={11} fontWeight={600} fill="#78350f">Autônomo (invol.)</text>

            {/* Autônomo → Simpático e Parassimpático */}
            <line x1={600} y1={218} x2={600} y2={238} stroke="#374151" strokeWidth={1.2} />
            <line x1={540} y1={238} x2={660} y2={238} stroke="#374151" strokeWidth={1.2} />
            <line x1={540} y1={238} x2={540} y2={258} stroke="#374151" strokeWidth={1.2} />
            <line x1={660} y1={238} x2={660} y2={258} stroke="#374151" strokeWidth={1.2} />

            <rect x={498} y={258} width={85} height={36} rx={7} fill="#fce7f3" stroke="#ec4899" strokeWidth={1} />
            <text x={540} y={279} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#831843">Simpático</text>

            <rect x={615} y={258} width={90} height={36} rx={7} fill="#d1fae5" stroke="#10b981" strokeWidth={1} />
            <text x={660} y={272} textAnchor="middle" fontSize={9} fontWeight={600} fill="#065f46">Parassim-</text>
            <text x={660} y={284} textAnchor="middle" fontSize={9} fontWeight={600} fill="#065f46">pático</text>
          </svg>
          <figcaption>
            Organograma do sistema nervoso: divisão central (SNC) e periférica
            (SNP) com suas subdivisões funcionais.
          </figcaption>
        </figure>

        <p>
          O <strong>SNC</strong> é o centro de processamento: recebe informações
          sensoriais, integra e elabora respostas. É protegido pelos ossos
          (crânio e vértebras), pelas três <strong>meninges</strong> (dura-máter,
          aracnoide e pia-máter) e pelo <strong>líquido cefalorraquidiano
          (LCR)</strong>, que amortece impactos e remove metabólitos. O{" "}
          <strong>SNP</strong> é formado por nervos e gânglios que ligam o SNC
          ao resto do corpo.
        </p>

        <div className="lesson-highlight">
          <h3>Encéfalo — três grandes regiões</h3>
          <p>
            <strong>Cérebro:</strong> maior porção; responsável por percepção
            consciente, pensamento, memória, linguagem e controle motor
            voluntário. Divide-se em lobos: frontal (planejamento, fala — área de
            Broca, personalidade), parietal (tato, dor, temperatura), temporal
            (audição, compreensão da fala — área de Wernicke) e occipital (visão).
            O sistema límbico, dentro do cérebro, processa emoções e memórias.
          </p>
          <p>
            <strong>Cerebelo:</strong> fundamental para coordenação motora fina,
            equilíbrio e aprendizado motor. Lesões causam ataxia (movimentos
            descoordenados).
          </p>
          <p>
            <strong>Tronco encefálico</strong> (mesencéfalo, ponte e bulbo):
            controla funções vitais como respiração, batimentos cardíacos,
            pressão arterial e reflexos como deglutição, tosse e vômito. O bulbo
            é continuação da medula espinhal.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Nervoso Autônomo</span>

        <h2>7. Simpático × Parassimpático — Dois Modos do Corpo</h2>

        <p>
          O <strong>sistema nervoso autônomo (SNA)</strong> controla vísceras,
          glândulas e musculatura lisa de modo <em>involuntário</em>. Suas duas
          divisões são funcionalmente antagônicas e trabalham em equilíbrio para
          ajustar o estado do organismo às demandas do momento.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Simpático ("luta ou fuga")</th>
                <th>Parassimpático ("repouso e digestão")</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neurotransmissor pós-ganglionar</td>
                <td>Noradrenalina</td>
                <td>Acetilcolina</td>
              </tr>
              <tr>
                <td>Frequência cardíaca</td>
                <td>Aumenta (taquicardia)</td>
                <td>Diminui (bradicardia)</td>
              </tr>
              <tr>
                <td>Pressão arterial</td>
                <td>Aumenta</td>
                <td>Diminui</td>
              </tr>
              <tr>
                <td>Pupilas</td>
                <td>Dilatam (midríase)</td>
                <td>Contraem (miose)</td>
              </tr>
              <tr>
                <td>Brônquios</td>
                <td>Dilatam (mais O₂)</td>
                <td>Contraem</td>
              </tr>
              <tr>
                <td>Digestão</td>
                <td>Inibida (vasos do TGI contraem)</td>
                <td>Estimulada (peristaltismo aumenta)</td>
              </tr>
              <tr>
                <td>Glicemia</td>
                <td>Aumenta (glicogenólise)</td>
                <td>Sem efeito direto significativo</td>
              </tr>
              <tr>
                <td>Glândulas salivares</td>
                <td>Pouca saliva (espessa)</td>
                <td>Muita saliva (fluida)</td>
              </tr>
              <tr>
                <td>Bexiga</td>
                <td>Relaxa (retém urina)</td>
                <td>Contrai (micção)</td>
              </tr>
              <tr>
                <td>Situação típica</td>
                <td>Exercício, perigo, estresse</td>
                <td>Repouso, sono, pós-refeição</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            A adrenalina, liberada pela medula da adrenal durante o estresse, age
            de forma sistêmica amplificando os efeitos do simpático — essa é uma
            das pontes entre o sistema nervoso e o endócrino. O hormônio do
            estresse crônico é o <strong>cortisol</strong>, produzido pelo córtex
            da adrenal sob controle do ACTH hipofisário.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Arco Reflexo</span>

        <h2>8. Arco Reflexo e Integração Nervoso-Endócrina</h2>

        <p>
          O <strong>arco reflexo</strong> é o circuito neural mais simples: uma
          resposta involuntária, rápida e estereotipada a um estímulo,
          processada principalmente na medula espinhal, sem necessidade de
          consciência. É uma forma de proteção corporal imediata — ao tocar algo
          quente, a mão se retira <em>antes</em> de você sentir dor
          conscientemente.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Diagrama do arco reflexo">
            {/* Receptor */}
            <ellipse cx={70} cy={90} rx={50} ry={30} fill="#fde68a" stroke="#d97706" strokeWidth={1.8} />
            <text x={70} y={86} textAnchor="middle" fontSize={11} fontWeight={700} fill="#78350f">Receptor</text>
            <text x={70} y={100} textAnchor="middle" fontSize={10} fill="#92400e">(pele/tendão)</text>

            {/* seta 1 */}
            <line x1={120} y1={90} x2={178} y2={90} stroke="#374151" strokeWidth={1.5} />
            <polygon points="178,85 190,90 178,95" fill="#374151" />
            <text x={155} y={80} textAnchor="middle" fontSize={9} fill="#6b7280">neurônio</text>
            <text x={155} y={90} textAnchor="middle" fontSize={9} fill="#6b7280">sensorial</text>

            {/* Centro integrador */}
            <rect x={195} y={62} width={130} height={56} rx={10} fill="#c7d2fe" stroke="#6366f1" strokeWidth={1.8} />
            <text x={260} y={86} textAnchor="middle" fontSize={11} fontWeight={700} fill="#312e81">Medula</text>
            <text x={260} y={100} textAnchor="middle" fontSize={10} fill="#3730a3">espinhal</text>
            <text x={260} y={112} textAnchor="middle" fontSize={9} fill="#4338ca">(integração)</text>

            {/* seta 2 */}
            <line x1={325} y1={90} x2={383} y2={90} stroke="#374151" strokeWidth={1.5} />
            <polygon points="383,85 395,90 383,95" fill="#374151" />
            <text x={360} y={80} textAnchor="middle" fontSize={9} fill="#6b7280">neurônio</text>
            <text x={360} y={90} textAnchor="middle" fontSize={9} fill="#6b7280">motor</text>

            {/* Efetor */}
            <ellipse cx={460} cy={90} rx={55} ry={30} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.8} />
            <text x={460} y={86} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Efetor</text>
            <text x={460} y={100} textAnchor="middle" fontSize={10} fill="#166534">(músculo)</text>

            {/* Resposta */}
            <line x1={515} y1={90} x2={573} y2={90} stroke="#374151" strokeWidth={1.5} />
            <polygon points="573,85 585,90 573,95" fill="#374151" />

            <rect x={590} y={65} width={120} height={50} rx={10} fill="#fce7f3" stroke="#db2777" strokeWidth={1.8} />
            <text x={650} y={87} textAnchor="middle" fontSize={11} fontWeight={700} fill="#831843">Resposta</text>
            <text x={650} y={102} textAnchor="middle" fontSize={10} fill="#9d174d">(contração)</text>

            {/* Seta para o cérebro (consciência posterior) */}
            <path d="M 260 62 C 260 30, 650 30, 650 65" fill="none" stroke="#9ca3af" strokeWidth={1.2} strokeDasharray="5 4" />
            <text x={455} y={22} textAnchor="middle" fontSize={9} fill="#6b7280" fontStyle="italic">cérebro toma consciência depois</text>
          </svg>
          <figcaption>
            Arco reflexo: o sinal percorre receptor → neurônio sensorial →
            medula (integração) → neurônio motor → efetor. A consciência da dor
            chega ao cérebro após a resposta já ter ocorrido.
          </figcaption>
        </figure>

        <p>
          A integração entre sistemas nervoso e endócrino tem seu ponto máximo
          no <strong>eixo hipotálamo-hipofisário</strong>. O hipotálamo recebe
          continuamente informações sensoriais, emocionais e metabólicas do SNC
          e as traduz em hormônios liberadores ou inibidores que regulam a
          hipófise. Assim, estados psicológicos como estresse crônico podem
          alterar a produção de cortisol, o ciclo menstrual e o crescimento —
          demonstrando que mente e corpo formam um sistema integrado.
        </p>

        <div className="lesson-highlight">
          <h3>Neuroendocrinologia — pontes entre os sistemas</h3>
          <p>
            Além do hipotálamo-hipófise, a própria medula da adrenal é tecido
            nervoso modificado: seus neurônios pós-ganglionares se especializaram
            em secretar adrenalina e noradrenalina diretamente no sangue, atuando
            como uma glândula endócrina. Essa dualidade ilustra que os sistemas
            nervoso e endócrino são partes de um único sistema de controle
            integrado, não dois sistemas separados.
          </p>
        </div>
      </section>

      {/* ===================== EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Técnicas e Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Glândula-mestra e hormônios tróficos"
          statement={
            <p>
              A hipófise é denominada "glândula-mestra" porque seus hormônios
              controlam outras glândulas. Qual das alternativas apresenta
              corretamente um hormônio hipofisário e sua glândula-alvo?
            </p>
          }
          options={[
            { letter: "a", text: "ADH → tireoide" },
            { letter: "b", text: "TSH → tireoide", correct: true },
            { letter: "c", text: "Insulina → pâncreas" },
            { letter: "d", text: "Cortisol → adrenal" },
          ]}
          resolution={
            <p>
              O TSH (hormônio tireoestimulante) é produzido pela adenoipófise e
              age sobre a tireoide, estimulando a produção de T₃ e T₄. ADH é
              produzido no hipotálamo e armazenado na neurohipófise; insulina é
              produzida pelo pâncreas; cortisol é produzido pela adrenal —
              nenhum deles é hormônio trófico hipofisário sobre as glândulas
              indicadas.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Feedback negativo no eixo tireoidiano"
          statement={
            <p>
              Em um exame laboratorial, um paciente apresenta TSH muito elevado e
              T₄ livre muito baixo. Com base no mecanismo de feedback negativo do
              eixo hipotálamo-hipófise-tireoide, qual é a conclusão mais provável?
            </p>
          }
          options={[
            { letter: "a", text: "Hipertireoidismo; a hipófise está sendo inibida em excesso" },
            {
              letter: "b",
              text: "Hipotireoidismo; como T₄ está baixo, o feedback negativo sobre a hipófise é insuficiente, elevando o TSH",
              correct: true,
            },
            { letter: "c", text: "Hiperfunção hipofisária primária com produção excessiva de TSH" },
            { letter: "d", text: "Padrão normal, pois TSH e T₄ sempre variam em sentidos opostos" },
          ]}
          resolution={
            <p>
              No feedback negativo, T₃/T₄ elevados inibem TRH e TSH; T₃/T₄
              baixos liberam essa inibição, e a hipófise aumenta a produção de
              TSH na tentativa de estimular uma tireoide hipofuncionante. TSH
              alto + T₄ baixo é o padrão laboratorial clássico de
              hipotireoidismo primário (patologia na própria tireoide).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Controle autonômico e diabetes"
          statement={
            <p>
              Um paciente com diabetes mellitus tipo 1 aplica insulina em excesso
              e apresenta hipoglicemia grave. O organismo tenta compensar essa
              queda por mecanismos fisiológicos. Qual conjunto de respostas é
              esperado nessa situação?
            </p>
          }
          options={[
            { letter: "a", text: "Maior liberação de insulina e inibição do glucagon" },
            {
              letter: "b",
              text: "Ativação simpática com liberação de adrenalina e glucagon, promovendo glicogenólise e gliconeogênese",
              correct: true,
            },
            { letter: "c", text: "Ativação parassimpática e maior produção de cortisol exclusivamente" },
            { letter: "d", text: "Aumento de GH e supressão do glucagon pelo hipotálamo" },
          ]}
          resolution={
            <p>
              A hipoglicemia grave ativa o sistema nervoso simpático e a medula
              adrenal, liberando adrenalina. Simultaneamente, as células α do
              pâncreas liberam glucagon. Juntos, adrenalina e glucagon
              estimulam a glicogenólise hepática e a gliconeogênese, elevando
              rapidamente a glicemia. O cortisol (de ação mais lenta) também
              contribui, mas não é a resposta imediata nem atua isolado.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Estresse e sistema endócrino (ENEM)"
          statement={
            <p>
              Uma estudante, na véspera do ENEM, sente o coração acelerado, a
              boca seca e os músculos tensos. Ela percebe que está com medo e
              isso altera seu corpo de forma involuntária. Qual sistema e qual
              substância explicam diretamente as alterações físicas descritas?
            </p>
          }
          options={[
            { letter: "a", text: "Sistema nervoso parassimpático; acetilcolina" },
            {
              letter: "b",
              text: "Sistema nervoso simpático e medula adrenal; adrenalina e noradrenalina",
              correct: true,
            },
            { letter: "c", text: "Sistema endócrino; insulina e glucagon" },
            { letter: "d", text: "Sistema nervoso somático; dopamina" },
          ]}
          resolution={
            <p>
              O medo ativa o sistema nervoso simpático (luta ou fuga), que acelera
              o coração, inibe as glândulas salivares (boca seca) e aumenta o
              tônus muscular. Ao mesmo tempo, o simpático estimula a medula
              adrenal a liberar <strong>adrenalina</strong> e noradrenalina,
              amplificando esses efeitos de forma sistêmica. O parassimpático
              faria o oposto (digestão/repouso). O sistema somático controla
              músculos voluntários. Insulina e glucagon regulam a glicemia, não
              as respostas de estresse descritas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Diabetes insipidus e ADH"
          statement={
            <p>
              Um paciente elimina mais de 15 litros de urina muito diluída por
              dia e sente sede intensa. Exames mostram que a glicemia é normal e
              não há glicose na urina. O médico suspeita de diabetes insipidus,
              uma doença ligada ao sistema neuroendócrino. Qual é o mecanismo
              mais provável dessa condição?
            </p>
          }
          options={[
            { letter: "a", text: "Excesso de insulina impedindo a reabsorção de água nos rins" },
            { letter: "b", text: "Deficiência de T₃/T₄ causando redução do metabolismo renal" },
            {
              letter: "c",
              text: "Deficiência de ADH (vasopressina), que normalmente aumenta a reabsorção de água nos túbulos renais",
              correct: true,
            },
            { letter: "d", text: "Excesso de aldosterona promovendo perda excessiva de sódio" },
          ]}
          resolution={
            <p>
              O ADH (hormônio antidiurético ou vasopressina) é produzido no
              hipotálamo e armazenado na neurohipófise. Ele age nos túbulos
              coletores dos rins, aumentando a permeabilidade à água e, portanto,
              sua reabsorção. Na deficiência de ADH (diabetes insipidus central)
              ou na resistência renal ao ADH (diabetes insipidus nefrogênico),
              o rim não reabsorve água adequadamente, gerando urina muito diluída
              e em grande volume. A glicemia normal e a ausência de glicosúria
              descartam diabetes mellitus, que ocorre por problemas com insulina.
            </p>
          }
        />
      </section>
    </article>
  );
}
