"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 24</span>

          <h1>Vícios e Qualidades de Linguagem</h1>

          <p>
            Dominar os vícios e as qualidades da linguagem é essencial para
            escrever com precisão, elegância e clareza — habilidades cobradas
            tanto na redação do ENEM quanto nas questões de interpretação e
            gramática. Neste capítulo, você aprenderá a identificar erros
            recorrentes, entender seus efeitos e cultivar as qualidades que
            tornam um texto verdadeiramente eficaz.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 1 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama geral</span>

        <h2>1. Vícios e Qualidades: o que está em jogo?</h2>

        <p>
          A linguagem não é apenas um conjunto de regras: é um instrumento de
          poder e expressão. Quando usada com <strong>qualidade</strong>, ela
          comunica com eficiência, beleza e precisão. Quando contaminada por{" "}
          <strong>vícios</strong>, gera ruído, ambiguidade e desprestígio ao
          autor. O ENEM cobra esse conhecimento de duas formas: (1) em questões
          que pedem a identificação de erros ou efeitos estilísticos em textos;
          (2) nos critérios da redação, especialmente na Competência 1 (domínio
          da norma) e na Competência 3 (coesão e coerência).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Qualidades de linguagem</h3>
            <p>
              Características que tornam o texto claro, coeso, preciso, elegante
              e eficaz para o leitor.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Vícios de linguagem</h3>
            <p>
              Falhas que comprometem a comunicação, seja por erro gramatical,
              excesso, repetição indevida ou inadequação ao contexto.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção: erro vs. recurso estilístico</h3>
          <p>
            Nem todo desvio é vício. Um autor experiente pode usar pleonasmo,
            arcaísmo ou coloquialismo <em>intencionalmente</em> para criar
            efeitos de sentido. O critério que separa vício de recurso é a{" "}
            <strong>intencionalidade e o contexto</strong>. O ENEM frequentemente
            testa essa distinção.
          </p>
        </div>

        {/* SVG 1 — Diagrama vícios vs. qualidades */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama mostrando vícios e qualidades de linguagem como dois polos opostos ligados pelo conceito de uso consciente da língua"
          >
            {/* fundo */}
            <rect width="700" height="220" rx="14" fill="#f8fafc" />

            {/* polo esquerdo — vícios */}
            <rect x="20" y="40" width="200" height="140" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="120" y="72" textAnchor="middle" fontSize="13" fontWeight="700" fill="#b91c1c">VÍCIOS</text>
            <text x="120" y="94" textAnchor="middle" fontSize="11" fill="#7f1d1d">Barbarismo</text>
            <text x="120" y="111" textAnchor="middle" fontSize="11" fill="#7f1d1d">Solecismo</text>
            <text x="120" y="128" textAnchor="middle" fontSize="11" fill="#7f1d1d">Pleonasmo vicioso</text>
            <text x="120" y="145" textAnchor="middle" fontSize="11" fill="#7f1d1d">Cacofonia / Eco</text>
            <text x="120" y="162" textAnchor="middle" fontSize="11" fill="#7f1d1d">Ambiguidade patológica</text>

            {/* centro — uso consciente */}
            <ellipse cx="350" cy="110" rx="80" ry="45" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
            <text x="350" y="104" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0369a1">Uso</text>
            <text x="350" y="120" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0369a1">consciente</text>

            {/* setas */}
            <line x1="220" y1="110" x2="268" y2="110" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="432" y1="110" x2="480" y2="110" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* polo direito — qualidades */}
            <rect x="480" y="40" width="200" height="140" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
            <text x="580" y="72" textAnchor="middle" fontSize="13" fontWeight="700" fill="#15803d">QUALIDADES</text>
            <text x="580" y="94" textAnchor="middle" fontSize="11" fill="#14532d">Clareza</text>
            <text x="580" y="111" textAnchor="middle" fontSize="11" fill="#14532d">Concisão</text>
            <text x="580" y="128" textAnchor="middle" fontSize="11" fill="#14532d">Coerência</text>
            <text x="580" y="145" textAnchor="middle" fontSize="11" fill="#14532d">Precisão vocabular</text>
            <text x="580" y="162" textAnchor="middle" fontSize="11" fill="#14532d">Elegância / Originalidade</text>

            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
              </marker>
            </defs>
          </svg>
          <figcaption>Vícios e qualidades como polos de uma mesma língua — o uso consciente é o que define o resultado.</figcaption>
        </figure>
      </section>

      {/* ─────────────────────── SEÇÃO 2 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Qualidades essenciais</span>

        <h2>2. Clareza, Concisão e Precisão Vocabular</h2>

        <p>
          As três qualidades mais cobradas no ENEM são aquelas que dizem respeito
          à <strong>eficiência comunicativa</strong>. Um texto claro, conciso e
          preciso respeita o leitor e transmite a mensagem sem ruídos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💡</span>
            <h3>Clareza</h3>
            <p>
              O texto deve ser compreendido imediatamente, sem duplas
              interpretações. Frases curtas, ordem direta (sujeito–verbo–objeto)
              e vocabulário adequado ao público garantem clareza.
            </p>
          </div>

          <div className="lesson-card">
            <span>✂️</span>
            <h3>Concisão</h3>
            <p>
              Máximo de informação com mínimo de palavras. Concisão não é
              brevidade forçada: é eliminar o supérfluo sem sacrificar o
              essencial. O antônimo da concisão é a <em>prolixidade</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Precisão vocabular</h3>
            <p>
              Usar a palavra exata para o conceito pretendido. Confundir
              "iminente" com "eminente", ou "infringir" com "infligir", é falta
              de precisão — e erro grave na redação do ENEM.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Qualidade</th>
                <th>Texto com o vício oposto</th>
                <th>Texto com a qualidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clareza</strong></td>
                <td>"O referido documento, cujos dados foram obtidos conforme solicitação, está anexo."</td>
                <td>"O documento solicitado está anexo."</td>
              </tr>
              <tr>
                <td><strong>Concisão</strong></td>
                <td>"Devido ao fato de que chovia muito, eu resolvi não sair de casa."</td>
                <td>"Como chovia muito, fiquei em casa."</td>
              </tr>
              <tr>
                <td><strong>Precisão</strong></td>
                <td>"O problema é iminente no campo científico." (querendo dizer eminente)</td>
                <td>"O pesquisador tem papel eminente na área."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — Redação</h3>
          <p>
            A banca penaliza construções prolixas e vocabulário vago. Prefira
            "crianças em situação de vulnerabilidade" a "criancinhas que passam
            por coisas ruins". Escolha o substantivo abstrato correto; evite
            "coisa", "algo" e "questão" como muletas textuais.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 3 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Qualidades avançadas</span>

        <h2>3. Coerência, Elegância e Originalidade</h2>

        <p>
          Além das três qualidades básicas, um texto de alto nível também
          apresenta <strong>coerência</strong> — unidade lógica entre as ideias
          — <strong>elegância</strong> — bom gosto na construção das frases — e{" "}
          <strong>originalidade</strong> — repertório e perspectiva própria. No
          ENEM, a coerência é avaliada pela Competência 3, e a originalidade
          contribui para a nota máxima na Competência 2.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Coerência</h3>
            <p>
              As ideias do texto devem formar uma unidade lógica. Contradições
              internas, saltos temáticos e conclusões sem premissas são rupturas
              de coerência.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎨</span>
            <h3>Elegância</h3>
            <p>
              Variedade sintática, ritmo das frases, vocabulário rico sem
              pedantismo. Elegância não é rebuscamento: é equilíbrio entre
              simplicidade e sofisticação.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌟</span>
            <h3>Originalidade</h3>
            <p>
              Perspectiva própria, repertório inusitado, metáforas criativas.
              O oposto não é o erro gramatical, mas o lugar-comum e o clichê.
            </p>
          </div>

          <div className="lesson-card">
            <span>📐</span>
            <h3>Propriedade</h3>
            <p>
              Usar as palavras de acordo com seu sentido e registro correto.
              "Implicar" não é sinônimo de "acarretar" em todos os contextos;
              "mediante" não é o mesmo que "através de".
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Coerência vs. coesão</h3>
          <p>
            <strong>Coesão</strong> é o encadeamento formal das frases por
            conectivos e pronomes (nível da superfície textual).{" "}
            <strong>Coerência</strong> é a consistência lógico-semântica das
            ideias (nível profundo). Um texto pode ser coeso e incoerente: frases
            bem ligadas por "portanto" e "logo" que chegam a conclusões
            absurdas. O ENEM avalia os dois aspectos separadamente.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 4 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios gramaticais</span>

        <h2>4. Barbarismo: erros de forma e uso de estrangeirismos</h2>

        <p>
          <strong>Barbarismo</strong> é o uso de formas incorretas em relação à
          norma culta da língua. Pode ocorrer em quatro planos distintos:{" "}
          <em>pronúncia</em>, <em>grafia</em>, <em>flexão</em> e{" "}
          <em>uso de palavras estrangeiras desnecessárias</em>. É um dos vícios
          mais amplos e cobrados no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de barbarismo</th>
                <th>Exemplo errado</th>
                <th>Forma correta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pronúncia (acento errado)</td>
                <td>"rúbrica" pronunciado com acento na segunda sílaba</td>
                <td>"rubrica" — acento na segunda sílaba — correto; "rúbrica" é errado</td>
              </tr>
              <tr>
                <td>Grafia incorreta</td>
                <td>"fazê" por "fazer"; "prevê" por "prever"</td>
                <td>Manter o infinitivo completo na escrita formal</td>
              </tr>
              <tr>
                <td>Flexão irregular inadequada</td>
                <td>"ele interveio" por "ele interveio" ✓ / "ele interviu" ✗</td>
                <td>"ele interveio" (seguir paradigma de "ver")</td>
              </tr>
              <tr>
                <td>Estrangeirismo desnecessário</td>
                <td>"deletar" quando há "excluir"; "né" em texto formal</td>
                <td>Preferir o equivalente português quando existir</td>
              </tr>
              <tr>
                <td>Neologismo sem registro</td>
                <td>"imprimir" no sentido de "pressionar" sem contexto</td>
                <td>Usar o termo consagrado pelo uso culto</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Estrangeirismo: vício ou enriquecimento?</h3>
          <p>
            Nem todo estrangeirismo é barbarismo. Palavras como{" "}
            <em>software</em>, <em>internet</em> e <em>rock</em> já foram
            incorporadas ao português e são aceitas. O vício ocorre quando existe
            equivalente português perfeitamente adequado e o falante escolhe a
            palavra estrangeira por esnobismo ou desconhecimento: dizer{" "}
            <em>deletar</em> quando poderia dizer <em>excluir</em>, ou{" "}
            <em>performance</em> quando poderia dizer <em>desempenho</em>.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 5 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios gramaticais</span>

        <h2>5. Solecismo: erros de concordância, regência e colocação</h2>

        <p>
          <strong>Solecismo</strong> é o erro de construção sintática. Diferente
          do barbarismo (que afeta a forma das palavras), o solecismo afeta as{" "}
          <em>relações entre as palavras na frase</em>. Há três subtipos
          principais: erros de <strong>concordância</strong>, de{" "}
          <strong>regência</strong> e de <strong>colocação pronominal</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Concordância</h3>
            <p>
              "Faz dez anos" (correto) vs. "fazem dez anos" (errado — verbo
              impessoal). "Meia hora" correto; "meio" invariável em "meio louco".
              Erro clássico: "meia" por "muito" — "ele tava meia animado".
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Regência</h3>
            <p>
              "Assistir ao filme" (correto) vs. "assistir o filme" (regência
              coloquial). "Visar ao cargo" vs. "visar o cargo". A regência
              inadequada em contexto formal é solecismo.
            </p>
          </div>

          <div className="lesson-card">
            <span>📌</span>
            <h3>Colocação pronominal</h3>
            <p>
              Próclise, mesóclise e ênclise têm regras definidas. "Me dá isso"
              (coloquial) vs. "Dá-me isso" (formal). "Te amo" no início de frase
              é solecismo na norma culta escrita.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>O caso "meia" por "muito"</h3>
          <p>
            Um erro muito cobrado no ENEM é o uso popular de <em>meia</em> como
            advérbio de intensidade: <em>"Ela estava meia nervosa."</em> Na norma
            culta, o advérbio é <strong>meio</strong> (invariável): <em>"Ela
            estava meio nervosa."</em> "Meia" só aparece como numeral (meia dúzia)
            ou substantivo (meia de futebol). Esse é um solecismo de concordância
            do advérbio com o adjetivo.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 6 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios de redundância</span>

        <h2>6. Pleonasmo Vicioso vs. Pleonasmo Expressivo</h2>

        <p>
          <strong>Pleonasmo</strong> é a redundância — repetição de um conceito
          já expresso. Pode ser <em>vicioso</em> (erro) ou{" "}
          <em>expressivo/literário</em> (recurso estilístico intencional). A
          diferença está na <strong>intencionalidade e no contexto</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pleonasmo vicioso</th>
                <th>Pleonasmo expressivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Subir para cima" — "subir" já implica para cima</td>
                <td>"Chora, chora, olho de gato" — repetição rítmica e emocional</td>
              </tr>
              <tr>
                <td>"Entrar para dentro" — redundância óbvia</td>
                <td>"Amor, amor, amor..." — ênfase poética</td>
              </tr>
              <tr>
                <td>"Encarar de frente" — "encarar" já pressupõe frente</td>
                <td>"A solidão mais solitária" — hipérbole intencional</td>
              </tr>
              <tr>
                <td>"Elo de ligação" — "elo" já é ligação</td>
                <td>"Morreu de morte morrida" — figura expressiva da oralidade</td>
              </tr>
              <tr>
                <td>"Repetir de novo" — "repetir" implica nova execução</td>
                <td>"Ver com os próprios olhos" — ênfase retórica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Pleonasmos viciosos clássicos no ENEM</h3>
          <ul>
            <li><strong>Monopólio exclusivo</strong> — monopólio já é exclusivo por definição</li>
            <li><strong>Há anos atrás</strong> — "há" e "atrás" em conjunto são redundantes; use "há anos" ou "anos atrás"</li>
            <li><strong>Certeza absoluta</strong> — certeza já é absoluta por natureza</li>
            <li><strong>Conviver juntos</strong> — "conviver" já pressupõe companhia</li>
            <li><strong>Continuar ainda</strong> — "continuar" já implica persistência</li>
          </ul>
        </div>

        {/* SVG 2 — Timeline: vício → recurso */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 200"
            width="680"
            height="200"
            aria-label="Fluxo mostrando como um mesmo recurso linguístico pode ser vício ou recurso estilístico dependendo da intencionalidade e contexto"
          >
            <rect width="680" height="200" rx="14" fill="#f1f5f9" />

            {/* linha central */}
            <line x1="60" y1="100" x2="620" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,3" />

            {/* nó 1 — construção */}
            <circle cx="100" cy="100" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="100" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">Construção</text>
            <text x="100" y="108" textAnchor="middle" fontSize="10" fill="#1e40af">textual</text>

            {/* seta */}
            <polygon points="155,96 175,100 155,104" fill="#64748b" />

            {/* nó 2 — contexto */}
            <rect x="180" y="72" width="120" height="56" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="2" />
            <text x="240" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#713f12">Análise do</text>
            <text x="240" y="112" textAnchor="middle" fontSize="11" fill="#713f12">contexto</text>

            {/* bifurcação */}
            <line x1="300" y1="100" x2="340" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="300" y1="100" x2="340" y2="140" stroke="#94a3b8" strokeWidth="1.5" />

            {/* ramo superior — recurso */}
            <rect x="345" y="38" width="160" height="44" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="425" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532d">Intencional</text>
            <text x="425" y="73" textAnchor="middle" fontSize="10" fill="#14532d">→ Recurso estilístico ✓</text>

            {/* ramo inferior — vício */}
            <rect x="345" y="118" width="160" height="44" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="425" y="137" textAnchor="middle" fontSize="11" fontWeight="700" fill="#991b1b">Não intencional</text>
            <text x="425" y="153" textAnchor="middle" fontSize="10" fill="#991b1b">→ Vício de linguagem ✗</text>

            {/* nó final */}
            <circle cx="580" cy="100" r="32" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="580" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3730a3">Efeito</text>
            <text x="580" y="108" textAnchor="middle" fontSize="10" fill="#3730a3">no leitor</text>

            <line x1="507" y1="60" x2="548" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="507" y1="140" x2="548" y2="115" stroke="#94a3b8" strokeWidth="1.5" />
          </svg>
          <figcaption>O mesmo fenômeno linguístico pode ser vício ou recurso — tudo depende da intencionalidade e do contexto.</figcaption>
        </figure>
      </section>

      {/* ─────────────────────── SEÇÃO 7 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios sonoros</span>

        <h2>7. Cacofonia e Eco: os vícios do som</h2>

        <p>
          A língua escrita tem uma dimensão sonora que o leitor cultivo percebe.
          Dois vícios derivam do descuido com os sons:{" "}
          <strong>cacofonia</strong> e <strong>eco</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😬</span>
            <h3>Cacofonia</h3>
            <p>
              Sequência de sons desagradáveis, ridículos ou obscenos formada
              pelo encontro de palavras. O exemplo clássico é{" "}
              <em>"cada dia"</em> — a junção sonora produz efeito indesejado.
              Outro: <em>"lhe leva"</em>, <em>"vim cá"</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔔</span>
            <h3>Eco</h3>
            <p>
              Rima involuntária em prosa, criada por palavras com terminações
              semelhantes próximas no texto: <em>"A situação da nação causou
              consternação na população."</em> Em poesia é recurso; em prosa
              dissertativa é vício.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Vício sonoro</th>
                <th>Exemplo problemático</th>
                <th>Correção sugerida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cacofonia</td>
                <td>"Vou cada dia ao mercado."</td>
                <td>"Vou ao mercado todos os dias."</td>
              </tr>
              <tr>
                <td>Cacofonia</td>
                <td>"Ele a ama muito."</td>
                <td>"Ele a ama profundamente." / reorganizar a frase</td>
              </tr>
              <tr>
                <td>Eco</td>
                <td>"A decisão causou confusão na comissão."</td>
                <td>"A decisão gerou mal-estar na comissão."</td>
              </tr>
              <tr>
                <td>Eco</td>
                <td>"A nação exige educação e habitação."</td>
                <td>"O país exige educação e moradia digna."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Cacofonia intencional em literatura</h3>
          <p>
            Assim como o pleonasmo, a cacofonia pode ser usada como recurso
            humorístico ou satírico. No teatro e na poesia cômica, produz
            deliberadamente o efeito de humor. O ENEM pode cobrar a distinção
            entre o uso inadvertido (vício) e o uso proposital (recurso).
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 8 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios de sentido</span>

        <h2>8. Ambiguidade Patológica e Prolixidade</h2>

        <p>
          Dois vícios que comprometem profundamente a comunicação são a{" "}
          <strong>ambiguidade não intencional</strong> e a{" "}
          <strong>prolixidade</strong>. Ambos revelam falta de controle sobre o
          que se escreve.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Ambiguidade patológica</h3>
            <p>
              Quando a frase admite mais de uma interpretação sem que isso seja
              proposital. Causa: pronome sem antecedente claro, ordem invertida
              sem motivo, modificador mal posicionado.
            </p>
          </div>

          <div className="lesson-card">
            <span>📜</span>
            <h3>Prolixidade</h3>
            <p>
              Excesso de palavras para dizer pouco. O texto prolixo esgota o
              leitor e dilui a mensagem. É o oposto direto da concisão — vício
              muito penalizado na redação do ENEM.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos de ambiguidade patológica</h3>
          <p>
            <em>"Pedro falou com João antes de ele sair."</em> — quem saiu?
            Pedro ou João? O pronome "ele" não tem referente claro.
          </p>
          <p>
            <em>"A professora viu a aluna com o binóculo."</em> — quem tinha o
            binóculo? A frase é genuinamente ambígua na estrutura.
          </p>
          <p>
            <strong>Correção:</strong> reorganizar a frase ou substituir o pronome
            pelo nome: "Pedro falou com João antes de João sair."
          </p>
        </div>

        <div className="math-block">
          <h3>Exemplos de prolixidade</h3>
          <p>
            <strong>Prolixo:</strong> <em>"Devido ao fato de que a situação
            econômica do país se encontra em um estado de crise que afeta
            negativamente as condições de vida da população mais carente e
            vulnerável da sociedade brasileira..."</em>
          </p>
          <p>
            <strong>Conciso:</strong> <em>"A crise econômica aprofunda a
            vulnerabilidade das camadas mais pobres..."</em>
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 9 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vícios de registro</span>

        <h2>9. Arcaísmo Sem Propósito e Coloquialismo Inadequado</h2>

        <p>
          Dois vícios opostos — um pelo excesso de formalidade anacrônica, outro
          pela informalidade fora de lugar — comprometem igualmente a adequação
          do texto ao contexto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Arcaísmo sem propósito</h3>
            <p>
              Uso de palavras ou estruturas do português arcaico sem intenção
              estética ou estilística. Exemplo: escrever <em>"outrossim"</em> e
              <em>"de conseguinte"</em> em texto jornalístico contemporâneo.
              Resulta em artificialidade e pedantismo.
            </p>
          </div>

          <div className="lesson-card">
            <span>💬</span>
            <h3>Coloquialismo inadequado</h3>
            <p>
              Uso de linguagem informal em contexto que exige formalidade.
              Inserir <em>"né"</em>, <em>"tá"</em>, <em>"cara"</em> ou gírias
              em redação dissertativa é coloquialismo inadequado — vício grave
              na redação do ENEM.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Arcaísmo como recurso estilístico</h3>
          <p>
            Em textos literários históricos, regionais ou que buscam caracterizar
            uma época, o arcaísmo é recurso válido e intencional. João Guimarães
            Rosa usava arcaísmos e neologismos como marca de sua poética. A
            diferença é sempre a <strong>intencionalidade e o efeito
            produzido</strong>.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Registro</th>
                <th>Coloquial (inadequado em texto formal)</th>
                <th>Formal (adequado à redação ENEM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afirmação</td>
                <td>"A gente sabe que..."</td>
                <td>"Sabe-se que..." / "É sabido que..."</td>
              </tr>
              <tr>
                <td>Negação</td>
                <td>"Nem um pouco né..."</td>
                <td>"De modo algum..."</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td>"Por causa que..."</td>
                <td>"Porque..." / "Em decorrência de..."</td>
              </tr>
              <tr>
                <td>Opinião</td>
                <td>"Acho que tipo assim..."</td>
                <td>"Depreende-se que..." / "Infere-se que..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 10 ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva avançada</span>

        <h2>10. Desvio Intencional como Recurso Estilístico</h2>

        <p>
          A norma existe para ser conhecida — e eventualmente subvertida com
          maestria. Os grandes escritores dominam as regras antes de quebrá-las.
          O <strong>desvio intencional</strong> é a transgressão consciente da
          norma para produzir um efeito específico: humor, ênfase, caracterização
          de personagem, ironia, musicalidade ou ruptura.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Ironia e humor</h3>
            <p>
              O cronista usa coloquialismo propositalmente para criar intimidade
              com o leitor ou satirizar o alvo. Luis Fernando Veríssimo constrói
              humor com incorreções deliberadas na voz de seus personagens.
            </p>
          </div>

          <div className="lesson-card">
            <span>🖊️</span>
            <h3>Caracterização de personagem</h3>
            <p>
              Em diálogos literários, o autor pode escrever como o personagem
              falaria — com coloquialismos, solecismos e regionalismos — para
              autenticidade. Isso não é erro do autor: é domínio da técnica.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Ruptura modernista</h3>
            <p>
              O Modernismo brasileiro (1922) rompeu deliberadamente com o
              purismo gramatical parnasiano. Oswald de Andrade e Mário de
              Andrade usavam a fala popular como bandeira estética.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Critério do ENEM</h3>
            <p>
              O exame distingue erro de recurso. Uma questão pode apresentar
              um "erro" que na verdade é marca estilística do autor — e pedir
              que o candidato identifique o efeito de sentido produzido.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Como identificar: vício ou recurso?</h3>
          <p>
            Faça três perguntas: (1) O contexto é formal ou literário/humorístico?
            (2) O autor domina a norma em outros momentos do texto? (3) A
            "transgressão" produz algum efeito de sentido identificável? Se
            as respostas apontam para intencionalidade, é recurso. Se o texto
            todo apresenta o mesmo desvio sem efeito aparente, é vício.
          </p>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 11 — REVISÃO ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão completa</span>

        <h2>11. Mapa Visual dos Vícios e Qualidades</h2>

        <p>
          Antes dos exercícios, revise o panorama completo com a tabela
          comparativa de todos os conceitos estudados.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Categoria</th>
                <th>Definição rápida</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clareza</strong></td>
                <td>Qualidade</td>
                <td>Compreensão imediata, sem ambiguidade</td>
                <td>"O relatório está pronto."</td>
              </tr>
              <tr>
                <td><strong>Concisão</strong></td>
                <td>Qualidade</td>
                <td>Máximo de informação com mínimo de palavras</td>
                <td>Eliminar "devido ao fato de que" → "porque"</td>
              </tr>
              <tr>
                <td><strong>Precisão vocabular</strong></td>
                <td>Qualidade</td>
                <td>Palavra exata para o conceito</td>
                <td>"eminente" vs. "iminente" — usos distintos</td>
              </tr>
              <tr>
                <td><strong>Coerência</strong></td>
                <td>Qualidade</td>
                <td>Unidade lógica entre as ideias</td>
                <td>Tese, argumentos e conclusão alinhados</td>
              </tr>
              <tr>
                <td><strong>Elegância</strong></td>
                <td>Qualidade</td>
                <td>Bom gosto estético na construção</td>
                <td>Variar a estrutura sintática das frases</td>
              </tr>
              <tr>
                <td><strong>Barbarismo</strong></td>
                <td>Vício</td>
                <td>Erro de pronúncia, grafia, flexão ou estrangeirismo desnecessário</td>
                <td>"deletar" quando existe "excluir"</td>
              </tr>
              <tr>
                <td><strong>Solecismo</strong></td>
                <td>Vício</td>
                <td>Erro de concordância, regência ou colocação</td>
                <td>"meia" por "meio" em uso adverbial</td>
              </tr>
              <tr>
                <td><strong>Pleonasmo vicioso</strong></td>
                <td>Vício</td>
                <td>Redundância desnecessária</td>
                <td>"Subir para cima"</td>
              </tr>
              <tr>
                <td><strong>Cacofonia</strong></td>
                <td>Vício</td>
                <td>Sequência sonora desagradável/obscena</td>
                <td>"cada dia" — junção problemática</td>
              </tr>
              <tr>
                <td><strong>Eco</strong></td>
                <td>Vício</td>
                <td>Rima involuntária em prosa</td>
                <td>"nação... situação... solução"</td>
              </tr>
              <tr>
                <td><strong>Ambiguidade patológica</strong></td>
                <td>Vício</td>
                <td>Dupla interpretação não intencional</td>
                <td>"Ele a viu com o telescópio." — quem o tinha?</td>
              </tr>
              <tr>
                <td><strong>Prolixidade</strong></td>
                <td>Vício</td>
                <td>Excesso de palavras sem acréscimo de sentido</td>
                <td>Texto com três parágrafos que dizem o que um diria</td>
              </tr>
              <tr>
                <td><strong>Arcaísmo sem propósito</strong></td>
                <td>Vício</td>
                <td>Uso de linguagem arcaica sem efeito estético</td>
                <td>"outrossim" em artigo jornalístico contemporâneo</td>
              </tr>
              <tr>
                <td><strong>Coloquialismo inadequado</strong></td>
                <td>Vício</td>
                <td>Informalidade em contexto formal</td>
                <td>"né", "tá", gírias em redação dissertativa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────── SEÇÃO 12 — EXERCÍCIOS ─────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>

        <h2>12. Exercícios</h2>

        <Exercise
          title="Identificação de pleonasmo vicioso"
          level="Básico"
          statement={
            <p>
              Assinale a alternativa que contém um <strong>pleonasmo
              vicioso</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"Ele subiu as escadas rapidamente.\"",
            },
            {
              letter: "b",
              text: "\"Eles convivem juntos há dez anos.\"",
              correct: true,
            },
            {
              letter: "c",
              text: "\"A criança chorou bastante.\"",
            },
            {
              letter: "d",
              text: "\"O relatório foi entregue no prazo.\"",
            },
          ]}
          resolution={
            <p>
              A alternativa B apresenta pleonasmo vicioso: <em>"convivem
              juntos"</em>. O verbo <strong>conviver</strong> já pressupõe
              companhia (con- = com), tornando "juntos" redundante e
              desnecessário. As demais alternativas não apresentam redundância —
              "subir as escadas" não é pleonasmo porque "subir" não especifica
              a direção para cima; "bastante" e "no prazo" são informações que
              acrescentam sentido.
            </p>
          }
        />

        <Exercise
          title="Solecismo: concordância do advérbio"
          level="Intermediário"
          statement={
            <p>
              Em qual das frases abaixo há <strong>solecismo de
              concordância</strong> do advérbio?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"Ela estava meio preocupada com o resultado.\"",
            },
            {
              letter: "b",
              text: "\"O candidato estava bastante preparado.\"",
            },
            {
              letter: "c",
              text: "\"A proposta é mais do que razoável.\"",
            },
            {
              letter: "d",
              text: "\"Ele ficou meia envergonhado diante de todos.\"",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A alternativa D apresenta solecismo. <em>"Meia"</em> está sendo
              usado como advérbio de intensidade, mas na norma culta o advérbio
              é <strong>meio</strong>, invariável: "Ele ficou{" "}
              <strong>meio</strong> envergonhado." A forma "meia" é numeral
              (meia dúzia) ou substantivo (a meia do time). O uso popular de
              "meia" por "muito/bastante" é coloquialismo e solecismo ao mesmo
              tempo. A alternativa A está correta: "meio preocupada" —
              "meio" invariável como advérbio.
            </p>
          }
        />

        <Exercise
          title="Barbarismo e estrangeirismo"
          level="Avançado"
          statement={
            <p>
              Leia o trecho: <em>"O diretor resolveu <u>deletar</u> todos os
              arquivos redundantes do servidor antes de <u>printar</u> o
              relatório final, evitando o <u>overload</u> do sistema."</em>{" "}
              Sobre o uso das palavras sublinhadas, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As três palavras são barbarismos, pois não existe equivalente em português para nenhuma delas.",
            },
            {
              letter: "b",
              text: "\"Deletar\" e \"printar\" são barbarismos por terem equivalentes em português (excluir/imprimir); \"overload\" pode ser considerado barbarismo se existir termo técnico equivalente consolidado.",
              correct: true,
            },
            {
              letter: "c",
              text: "Todas as palavras são aceitas pela norma culta sem restrições, pois fazem parte do vocabulário de informática.",
            },
            {
              letter: "d",
              text: "Apenas \"overload\" é barbarismo; \"deletar\" e \"printar\" já foram dicionarizados e, portanto, não constituem vício.",
            },
          ]}
          resolution={
            <p>
              A alternativa B está correta. <strong>Barbarismo por
              estrangeirismo</strong> ocorre quando se usa uma palavra estrangeira
              havendo equivalente português adequado. <em>Deletar</em> tem
              equivalente perfeito em <em>excluir</em>; <em>printar</em> em{" "}
              <em>imprimir</em>. <em>Overload</em> pode ser substituído por{" "}
              <em>sobrecarga</em>. O fato de palavras terem sido dicionarizadas
              não elimina o barbarismo em contextos formais — a gramática
              normativa prioriza o termo vernáculo. A alternativa A está errada
              porque existem equivalentes; a C ignora os critérios de adequação;
              a D comete o equívoco de que dicionarização = aceitação plena em
              todos os registros.
            </p>
          }
        />

        <Exercise
          title="Redação do ENEM: coloquialismo e adequação de registro"
          level="Contextualizado"
          statement={
            <p>
              Uma candidata escreveu em sua redação do ENEM:{" "}
              <em>"A gente sabe que a falta de saneamento básico é um problema
              sério, né? Tipo, as pessoas mais pobres são as que mais sofrem com
              isso. Acho que o governo tem que fazer alguma coisa."</em> Esse
              trecho apresenta vícios que comprometam a nota na Competência 1.
              Qual deles é o <strong>mais grave</strong> para uma redação
              dissertativo-argumentativa?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O uso de \"a gente\" como pronome, pois é proibido em qualquer texto formal.",
            },
            {
              letter: "b",
              text: "A imprecisão vocabular em \"alguma coisa\", associada ao coloquialismo generalizado (\"né\", \"tipo\", \"acho\"), que revela falta de domínio do registro dissertativo-argumentativo.",
              correct: true,
            },
            {
              letter: "c",
              text: "A ausência de pleonasmo expressivo, que tornaria o texto mais enfático.",
            },
            {
              letter: "d",
              text: "O uso de eco sonoro nas terminações das palavras.",
            },
          ]}
          resolution={
            <p>
              A alternativa B está correta. O maior problema é o conjunto de{" "}
              <strong>coloquialismos inadequados</strong> ao gênero
              dissertativo-argumentativo: <em>"né"</em> (interjeição oral),{" "}
              <em>"tipo"</em> (marcador discursivo coloquial), <em>"a gente"</em>{" "}
              (pronome informal — embora aceito em alguns contextos, neste
              contexto marca informalidade) e, sobretudo, a{" "}
              <strong>imprecisão vocabular</strong> em <em>"alguma coisa"</em> —
              que revela falta de repertório e assertividade argumentativa. A
              Competência 1 avalia exatamente o domínio da norma culta e a
              adequação ao registro formal. A alternativa A está errada porque
              "a gente" não é proibido, mas inadequado ao contexto; C e D são
              irrelevantes para o problema identificado.
            </p>
          }
        />

        <Exercise
          title="Desvio intencional: vício ou recurso estilístico?"
          level="Contextualizado"
          statement={
            <p>
              Leia o fragmento de crônica: <em>"O Brasil, coitado, tem uma
              vocação danada pra se complicar. A gente resolve um probleminha
              aqui, surge três do lado. É que nem aquela história do Sísifro,
              sabe?"</em> (texto ficcional de crônica humorística). As marcas de
              coloquialismo nesse trecho são:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Vícios de linguagem que o autor deveria ter corrigido antes da publicação.",
            },
            {
              letter: "b",
              text: "Recursos estilísticos intencionais que constroem o tom informal e de cumplicidade típico do gênero crônica humorística.",
              correct: true,
            },
            {
              letter: "c",
              text: "Barbarismos, pois o texto mistura registros sem critério.",
            },
            {
              letter: "d",
              text: "Solecismos que revelam desconhecimento da norma culta por parte do autor.",
            },
          ]}
          resolution={
            <p>
              A alternativa B está correta. O gênero <strong>crônica
              humorística</strong> admite e frequentemente explora a linguagem
              coloquial como recurso para criar proximidade com o leitor,
              construir ironia e simular a voz de um narrador "descontraído".
              Expressões como <em>"coitado"</em>, <em>"danada pra"</em>,{" "}
              <em>"a gente"</em>, <em>"probleminha"</em> e <em>"É que nem"</em>{" "}
              são marcas do estilo cronístico brasileiro — usadas
              intencionalmente pelo autor. Isso não é vício: é domínio da técnica.
              O ENEM frequentemente apresenta questões que testam essa distinção,
              pedindo ao candidato que identifique o <strong>efeito de sentido
              produzido pelo desvio intencional</strong> em vez de classificá-lo
              como erro gramatical.
            </p>
          }
        />
      </section>
    </article>
  );
}
