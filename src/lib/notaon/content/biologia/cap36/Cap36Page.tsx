"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 36</span>

          <h1>Fisiologia Vegetal II: Fitormônios e Fotoperiodismo</h1>

          <p>
            As plantas não possuem sistema nervoso, mas se comunicam internamente
            com extraordinária precisão por meio de mensageiros químicos chamados{" "}
            <strong>fitormônios</strong>. Neste capítulo você vai dominar os cinco
            reguladores clássicos — auxinas, giberelinas, citocininas, etileno e
            ácido abscísico — além de compreender como respostas direcionais de
            crescimento (tropismos) e a medição do comprimento do dia pelo fitocromo
            (fotoperiodismo) permitem às plantas adaptar-se ao ambiente. Esses temas
            são cobrados com altíssima frequência no ENEM e em todos os vestibulares
            de biologia.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. O Que São Fitormônios</h2>

        <p>
          <strong>Fitormônios</strong> (ou reguladores vegetais) são substâncias
          orgânicas sintetizadas em pequenas quantidades em determinadas regiões da
          planta e transportadas — geralmente via floema, xilema ou por difusão célula
          a célula — para tecidos-alvo, onde desencadeiam respostas fisiológicas
          específicas em concentrações muito baixas. Diferem dos hormônios animais
          principalmente pela ausência de glândulas secretoras especializadas: qualquer
          célula vegetal pode, em princípio, produzir e responder a essas moléculas.
        </p>

        <p>
          A ação dos fitormônios é <strong>dose-dependente</strong>, frequentemente{" "}
          <strong>sinérgica</strong> (dois hormônios amplificam o efeito um do outro)
          ou <strong>antagônica</strong> (um inibe o efeito do outro), e o resultado
          final depende da razão entre eles e da sensibilidade do tecido-alvo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Auxinas (AIA)</h3>
            <p>Alongamento celular, dominância apical, tropismos e herbicidas seletivos.</p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Giberelinas (GAs)</h3>
            <p>Alongamento do caule, germinação, partenocarpia e floração.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Citocininas</h3>
            <p>Divisão celular, brotamento lateral e retardo da senescência foliar.</p>
          </div>

          <div className="lesson-card">
            <span>🍅</span>
            <h3>Etileno (C₂H₄)</h3>
            <p>Único hormônio gasoso: amadurecimento de frutos e abscisão.</p>
          </div>

          <div className="lesson-card">
            <span>🍂</span>
            <h3>Ácido Abscísico (ABA)</h3>
            <p>Dormência de sementes e gemas, fechamento estomático e estresse hídrico.</p>
          </div>

          <div className="lesson-card">
            <span>🌞</span>
            <h3>Fitocromo</h3>
            <p>Fotorreceptor que mede a duração da noite e controla a floração.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Auxinas</span>

        <h2>2. Auxinas — AIA e o Mecanismo do Crescimento</h2>

        <p>
          O <strong>ácido indol-3-acético (AIA)</strong> é a principal auxina natural
          das plantas. É sintetizado sobretudo no <strong>meristema apical do caule</strong>{" "}
          e em folhas jovens, a partir do aminoácido triptofano. Seu transporte é
          predominantemente polar (basípeto no caule — de cima para baixo), mediado
          por proteínas transportadoras específicas (PIN-FORMED).
        </p>

        <p>
          O mecanismo de ação envolve a acidificação da parede celular: a auxina
          estimula uma <strong>ATPase de membrana</strong> que bombeia H⁺ para a
          parede, ativando expansinas que rompem pontes de hidrogênio entre fibras
          de celulose. A célula, com a parede afrouxada, absorve água por osmose e
          se expande. Esse processo é chamado de <strong>hipótese do crescimento
          ácido</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Dominância Apical</h3>
          <p>
            A auxina produzida no ápice flui para baixo e inibe o crescimento das
            gemas laterais (axilares), garantindo que a planta cresça em altura.
            Ao se retirar o ápice (poda), a concentração de auxina cai nas gemas
            laterais, que passam a ser estimuladas pelas citocininas das raízes —
            resultado: brotamento lateral vigoroso. Este é o fundamento da prática
            de <strong>poda de formação</strong> em plantas ornamentais e frutíferas.
          </p>
        </div>

        <p>
          A sensibilidade à auxina varia entre os órgãos:
          a concentração que promove o máximo crescimento do caule{" "}
          <strong>inibe</strong> as raízes e pode inibir também as gemas laterais.
          Esse gradiente de sensibilidade é a base dos{" "}
          <strong>herbicidas auxínicos sintéticos</strong> como o 2,4-D
          (ácido 2,4-diclorofenoxiacético), que mimetiza o AIA em concentrações
          letais para dicotiledôneas de folha larga, mas não afeta gramíneas
          (monocotiledôneas) — extensamente usado em lavouras de milho e trigo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Órgão</th>
                <th>Resposta a baixas [ ]</th>
                <th>Resposta a altas [ ]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Caule</td>
                <td>Pouco crescimento</td>
                <td>Máximo crescimento</td>
              </tr>
              <tr>
                <td>Gemas laterais</td>
                <td>Estimuladas (após poda)</td>
                <td>Inibidas (dominância apical)</td>
              </tr>
              <tr>
                <td>Raiz</td>
                <td>Máximo crescimento</td>
                <td>Inibição (efeito oposto)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 340 230" width="340" height="230" aria-label="Fototropismo: migração da auxina para o lado sombreado">
              {/* sol */}
              <circle cx={30} cy={40} r={20} fill="#fde68a" stroke="#f59e0b" strokeWidth={2} />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => {
                const rad = (a * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1={30 + 22 * Math.cos(rad)}
                    y1={40 + 22 * Math.sin(rad)}
                    x2={30 + 30 * Math.cos(rad)}
                    y2={40 + 30 * Math.sin(rad)}
                    stroke="#f59e0b"
                    strokeWidth={1.5}
                  />
                );
              })}
              {/* setas de luz */}
              <line x1={60} y1={40} x2={150} y2={90} stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="5 3" />
              <line x1={60} y1={55} x2={150} y2={110} stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="5 3" />
              {/* coleóptilo */}
              {/* lado iluminado (esq) - menos auxina - menor altura */}
              <rect x={140} y={100} width={24} height={100} rx={4} fill="#86efac" stroke="#16a34a" strokeWidth={1.5} />
              {/* lado sombreado (dir) - mais auxina - maior altura */}
              <rect x={164} y={80} width={24} height={120} rx={4} fill="#4ade80" stroke="#16a34a" strokeWidth={2} />
              {/* solo */}
              <rect x={120} y={200} width={100} height={16} rx={4} fill="#92400e" opacity={0.4} />
              {/* seta de curvatura */}
              <path d="M 176 80 Q 200 100 190 130" fill="none" stroke="#dc2626" strokeWidth={2} markerEnd="url(#arr)" />
              <defs>
                <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#dc2626" />
                </marker>
              </defs>
              {/* legenda */}
              <text x={130} y={225} textAnchor="middle" fontSize={10} fill="#374151">menos auxina</text>
              <text x={180} y={225} textAnchor="middle" fontSize={10} fill="#16a34a">mais auxina</text>
              {/* setas de migração */}
              <path d="M 152 130 Q 162 130 172 130" fill="none" stroke="#7c3aed" strokeWidth={1.5} strokeDasharray="3 2" markerEnd="url(#arr2)" />
              <defs>
                <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed" />
                </marker>
              </defs>
              <text x={158} y={118} fontSize={9} fill="#7c3aed">AIA migra</text>
            </svg>
            <figcaption>
              No fototropismo positivo, a auxina migra do lado iluminado para o sombreado.
              O lado sombreado (verde escuro) alonga-se mais, curvando o caule em
              direção à luz.
            </figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 280 230" width="280" height="230" aria-label="Experimentos clássicos de auxina: Darwin, Boysen-Jensen e Went">
              {/* títulos */}
              <text x={35} y={16} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1f2937">Darwin</text>
              <text x={135} y={16} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1f2937">Boysen-Jensen</text>
              <text x={235} y={16} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1f2937">Went</text>

              {/* Darwin: ápice descoberto → curva; ápice coberto → não */}
              {/* coleóptilo A (curvo) */}
              <rect x={20} y={30} width={14} height={60} rx={3} fill="#86efac" stroke="#16a34a" strokeWidth={1.2} />
              <rect x={34} y={22} width={14} height={70} rx={3} fill="#4ade80" stroke="#16a34a" strokeWidth={1.5} />
              <text x={35} y={108} textAnchor="middle" fontSize={9} fill="#374151">sem capuz</text>
              <text x={35} y={118} textAnchor="middle" fontSize={9} fill="#16a34a">curva ✓</text>

              {/* Boysen-Jensen: gelatina permite curvatura */}
              <rect x={122} y={30} width={14} height={60} rx={3} fill="#86efac" stroke="#16a34a" strokeWidth={1.2} />
              <rect x={122} y={90} width={14} height={8} rx={2} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1} />
              <rect x={136} y={34} width={14} height={66} rx={3} fill="#4ade80" stroke="#16a34a" strokeWidth={1.5} />
              <text x={135} y={112} textAnchor="middle" fontSize={9} fill="#374151">gelatina</text>
              <text x={135} y={122} textAnchor="middle" fontSize={9} fill="#16a34a">curva ✓</text>

              {/* Went: bloco de ágar com auxina */}
              <rect x={220} y={70} width={16} height={60} rx={3} fill="#86efac" stroke="#16a34a" strokeWidth={1.2} />
              <rect x={236} y={60} width={16} height={70} rx={3} fill="#4ade80" stroke="#16a34a" strokeWidth={1.5} />
              <rect x={218} y={58} width={20} height={12} rx={3} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1} />
              <text x={235} y={146} textAnchor="middle" fontSize={9} fill="#374151">ágar + AIA</text>
              <text x={235} y={156} textAnchor="middle" fontSize={9} fill="#16a34a">curva ✓</text>

              {/* solo */}
              <rect x={10} y={130} width={60} height={10} rx={3} fill="#92400e" opacity={0.35} />
              <rect x={105} y={130} width={60} height={10} rx={3} fill="#92400e" opacity={0.35} />
              <rect x={205} y={132} width={60} height={10} rx={3} fill="#92400e" opacity={0.35} />

              <text x={140} y={175} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
                Três experimentos que isolaram a auxina
              </text>
            </svg>
            <figcaption>
              Darwin (1880) mostrou que o ápice é essencial; Boysen-Jensen provou que
              o sinal é químico; Went (1926) isolou a auxina em ágar.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Giberelinas</span>

        <h2>3. Giberelinas — Do Fungo ao Fruto sem Semente</h2>

        <p>
          As <strong>giberelinas (GAs)</strong> foram descobertas no Japão, na
          década de 1920, quando pesquisadores investigavam a "<em>doença do broto
          louco</em>" do arroz causada pelo fungo <em>Gibberella fujikuroi</em>: plantas
          infectadas cresciam exageradamente mas eram fracas e tombavam. A substância
          responsável foi isolada e denominada <strong>ácido giberélico (GA₃)</strong>,
          o mais estudado de uma família de mais de 130 giberelinas identificadas.
        </p>

        <p>
          Nas plantas, as giberelinas são sintetizadas principalmente em sementes em
          desenvolvimento, meristemas apicais e folhas jovens. Seu efeito mais
          característico é o <strong>alongamento dos entrenós</strong>, promovendo
          o crescimento em altura do caule pela indução de divisão e elongação das
          células do câmbio. Plantas anãs (mutantes deficientes em GAs) respondem
          dramaticamente à aplicação exógena de GA₃.
        </p>

        <div className="lesson-highlight">
          <h3>Aplicações Agrícolas das Giberelinas</h3>
          <p>
            Na <strong>viticultura</strong>, GA₃ é pulverizado sobre uvas sem sementes
            (Thompson Seedless) para aumentar o tamanho das bagas e afastar os grãos
            no cacho, facilitando a aeração e reduzindo doenças fúngicas. Na{" "}
            <strong>produção de malte</strong>, giberelinas aceleram a germinação da
            cevada ao induzir a síntese de α-amilase no endosperma, que hidrolisa o
            amido. Em flores, retardam a senescência e alongam os pedúnculos florais.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📏</span>
            <h3>Alongamento do Caule</h3>
            <p>Estimulam a divisão e o alongamento celular nos entrenós, "desfazendo" o nanismo.</p>
          </div>

          <div className="lesson-card">
            <span>🌰</span>
            <h3>Germinação de Sementes</h3>
            <p>Induzem α-amilase no endosperma, quebrando dormência e mobilizando reservas de amido.</p>
          </div>

          <div className="lesson-card">
            <span>🍇</span>
            <h3>Partenocarpia</h3>
            <p>Estimulam o desenvolvimento do fruto sem fecundação (frutos sem sementes).</p>
          </div>

          <div className="lesson-card">
            <span>🌸</span>
            <h3>Floração</h3>
            <p>Induzem floração em plantas em roseta que normalmente precisariam de dias longos.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Citocininas &amp; Etileno &amp; ABA</span>

        <h2>4. Citocininas, Etileno e Ácido Abscísico</h2>

        <p>
          Enquanto auxinas e giberelinas dominam o crescimento em comprimento,
          outros três fitormônios regulam a divisão celular, o amadurecimento e as
          respostas de defesa.
        </p>

        <div className="lesson-highlight">
          <h3>Citocininas</h3>
          <p>
            Sintetizadas principalmente nas <strong>raízes</strong> e transportadas
            pelo xilema, as citocininas atuam em conjunto com as auxinas. Estimulam
            a <strong>divisão celular (citocinese)</strong> e promovem o brotamento
            de gemas laterais, antagonizando a dominância apical mediada pelas
            auxinas. Em cultura de tecidos (<em>in vitro</em>), a razão
            auxina:citocinina determina o destino do explante: razão alta →
            formação de raízes; razão baixa → formação de brotos/folhas; razão
            intermediária → calo indiferenciado. As citocininas também{" "}
            <strong>retardam a senescência foliar</strong>, mantendo os cloroplastos
            funcionais por mais tempo — fato explorado comercialmente para conservar
            o verde de legumes após a colheita.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Etileno (C₂H₄) — o Hormônio Gasoso</h3>
          <p>
            O etileno é o único fitormônio em estado gasoso em temperatura ambiente,
            o que lhe confere uma propriedade única: pode se difundir pelo ar e
            agir sobre plantas vizinhas. É produzido em maior quantidade por{" "}
            <strong>frutos em amadurecimento, tecidos feridos e flores</strong>.
            Desencadeia a degradação da clorofila, a síntese de pigmentos carotenoides
            e antocianinas, a conversão de amido em açúcares solúveis e o amolecimento
            da polpa (por ativação de pectinases). Induz ainda a{" "}
            <strong>abscisão</strong> de folhas, flores e frutos ao ativar celulases
            na zona de abscisão. A famosa observação popular de que "uma maçã podre
            estraga as outras" é literalmente correta: a maçã madura libera etileno
            que acelera o amadurecimento das demais. Na prática agrícola, frutos
            como banana e tomate são colhidos verdes e expostos a câmaras de etileno
            para uniformizar o amadurecimento antes da comercialização.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ácido Abscísico (ABA) — Hormônio do Estresse</h3>
          <p>
            Apesar do nome histórico ("abscisão"), o papel central do ABA é atuar
            como <strong>sinal de estresse</strong>. Em condição de déficit hídrico,
            o ABA é produzido nas folhas e raízes e induz o{" "}
            <strong>fechamento dos estômatos</strong>: se liga a receptores nas
            células-guarda e desencadeia a saída de K⁺ (e água por osmose), levando
            ao esvaziamento e fechamento do poro. Isso reduz drasticamente a
            transpiração e a perda de água. O ABA também é o principal indutor da{" "}
            <strong>dormência de sementes e gemas</strong> em condições adversas
            (baixas temperaturas, seca), sendo antagônico às giberelinas:
            giberelinas quebram a dormência, ABA a mantém.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fitormônio</th>
                <th>Local de Síntese Principal</th>
                <th>Efeitos-Chave</th>
                <th>Aplicação Prática</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Auxina (AIA)</strong></td>
                <td>Ápice caulinar e folhas jovens</td>
                <td>Alongamento celular, dominância apical, tropismos, formação de raízes adventícias</td>
                <td>Herbicidas (2,4-D), estaquia, partenocarpia</td>
              </tr>
              <tr>
                <td><strong>Giberelinas (GAs)</strong></td>
                <td>Sementes em desenvolvimento, ápice</td>
                <td>Alongamento de entrenós, germinação, partenocarpia, floração em roseta</td>
                <td>Produção de uvas maiores, malte, floração controlada</td>
              </tr>
              <tr>
                <td><strong>Citocininas</strong></td>
                <td>Raízes (transporte pelo xilema)</td>
                <td>Divisão celular, brotamento lateral, retardo da senescência</td>
                <td>Cultura de tecidos, conservação de vegetais</td>
              </tr>
              <tr>
                <td><strong>Etileno (C₂H₄)</strong></td>
                <td>Frutos maduros, tecidos feridos</td>
                <td>Amadurecimento de frutos, abscisão, senescência floral</td>
                <td>Câmaras de maturação, uniformização de colheita</td>
              </tr>
              <tr>
                <td><strong>ABA</strong></td>
                <td>Folhas, raízes, sementes</td>
                <td>Fechamento de estômatos, dormência de sementes e gemas, resposta a estresse</td>
                <td>Pesquisa em tolerância à seca, regulação pós-colheita</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tropismos e Nastismos</span>

        <h2>5. Tropismos × Nastismos</h2>

        <p>
          As plantas respondem a estímulos ambientais com movimentos de crescimento
          que podem ser classificados em dois grandes grupos:{" "}
          <strong>tropismos</strong>, que são respostas direcionais determinadas pela
          origem do estímulo, e <strong>nastismos</strong>, que são respostas
          independentes da direção do estímulo.
        </p>

        <p>
          Nos <strong>tropismos</strong>, a distribuição assimétrica da auxina
          (ou de outros reguladores) é o mecanismo central. O órgão cresce mais em
          um lado do que no outro, curvando-se em direção ao estímulo (tropismo
          positivo) ou em sentido contrário (tropismo negativo).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Estímulo</th>
                <th>Órgão / Resposta</th>
                <th>Positivo (+) / Negativo (−)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fototropismo</strong></td>
                <td>Luz unilateral</td>
                <td>Caule curva em direção à luz; raiz se afasta</td>
                <td>Caule (+); raiz (−)</td>
              </tr>
              <tr>
                <td><strong>Gravitropismo</strong> (geotropismo)</td>
                <td>Gravidade</td>
                <td>Raiz cresce para baixo; caule cresce para cima</td>
                <td>Raiz (+); caule (−)</td>
              </tr>
              <tr>
                <td><strong>Hidrotropismo</strong></td>
                <td>Gradiente de umidade</td>
                <td>Raiz cresce em direção à água</td>
                <td>Raiz (+)</td>
              </tr>
              <tr>
                <td><strong>Tigmotropismo</strong></td>
                <td>Contato mecânico</td>
                <td>Gavinhas e caules volúveis enrolam-se em suportes</td>
                <td>(+) ao contato</td>
              </tr>
              <tr>
                <td><strong>Termotropismo</strong></td>
                <td>Gradiente de temperatura</td>
                <td>Crescimento em direção ao calor (ou afastamento)</td>
                <td>Variável</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Os <strong>nastismos</strong> diferem por não depender da direção do
          estímulo. O <strong>termonastismo</strong> ocorre quando tulipas abrem
          as flores ao calor. O <strong>fotonastismo</strong> faz flores de dente-de-leão
          abrirem à luz e fecharem no escuro. O caso mais espetacular é o{" "}
          <strong>tigmonastismo</strong> da <em>Mimosa pudica</em> ("dormideira"):
          o toque mecânico provoca variações turgor nas células motoras do pulvino,
          fechando os folíolos em segundos — resposta que independe da direção do
          toque e não envolve crescimento diferencial, apenas mudanças turgor.
        </p>

        <div className="lesson-highlight">
          <h3>Gravitropismo: o papel dos amiloplastos</h3>
          <p>
            Nas células do meristema radicular existe uma região denominada{" "}
            <strong>columela</strong>, cujas células contêm{" "}
            <strong>amiloplastos</strong> (grãos de amido densos). Quando uma
            raiz é colocada horizontalmente, esses grãos sedimentam para o novo
            lado inferior por ação da gravidade, sinalizando a redistribuição
            assimétrica da auxina para o lado inferior, que passa a ser inibido
            (raiz positivamente gravitrópica: o lado com menos auxina cresce mais,
            curvando a raiz de volta para baixo).
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fotoperiodismo</span>

        <h2>6. Fotoperiodismo e o Fitocromo</h2>

        <p>
          <strong>Fotoperiodismo</strong> é a capacidade dos vegetais (e outros
          organismos) de medir a duração relativa dos períodos de luz e escuro ao
          longo de 24 horas e de ajustar processos fisiológicos — em especial a
          floração — de acordo com as estações do ano. A descoberta do
          fotoperiodismo se deve a Garner e Allard (1920), que observaram que uma
          variedade de tabaco florescia apenas nos dias mais curtos do outono,
          independentemente da temperatura ou da quantidade total de luz.
        </p>

        <p>
          O pigmento responsável pela percepção do fotoperíodo é o{" "}
          <strong>fitocromo</strong>, uma proteína fotorreceptora que existe em
          duas formas interconversíveis:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Pr (Fitocromo vermelho)</h3>
            <p>Absorve luz vermelha (660 nm) e converte-se em Pfr. Acumula-se no escuro prolongado.</p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Pfr (Fitocromo vermelho-distante)</h3>
            <p>Absorve luz vermelho-distante (730 nm) e converte-se em Pr. Forma biologicamente ativa (na maioria dos casos).</p>
          </div>

          <div className="lesson-card">
            <span>🌑</span>
            <h3>Reversão no Escuro</h3>
            <p>No escuro, Pfr se converte lentamente em Pr. A quantidade de Pr acumulada informa a duração da noite.</p>
          </div>
        </div>

        <p>
          Um achado fundamental: o que as plantas realmente medem é a duração da{" "}
          <strong>noite</strong>, não do dia. Um pulso de luz no meio da noite,
          mesmo brevíssimo, converte Pr em Pfr, "reiniciando" o contador e
          interrompendo a medição do período escuro. Isso impede a floração de
          plantas de <strong>noite longa</strong> (dia curto) e pode induzir
          plantas de <strong>noite curta</strong> (dia longo). O próprio termo
          "planta de dia curto" é um arcaísmo que persiste por tradição.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo Fotoperiódico</th>
                <th>Condição para Floração</th>
                <th>Período Crítico de Escuro</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Planta de dia curto</strong> (noite longa)</td>
                <td>Noite &gt; período crítico</td>
                <td>Deve ser contínua e suficientemente longa</td>
                <td>Crisântemo, soja, cana-de-açúcar, batata-doce</td>
              </tr>
              <tr>
                <td><strong>Planta de dia longo</strong> (noite curta)</td>
                <td>Dia &gt; período crítico (noite curta)</td>
                <td>Deve ser interrompida ou curta</td>
                <td>Rabanete, espinafre, trigo de inverno, aveia</td>
              </tr>
              <tr>
                <td><strong>Planta neutra</strong></td>
                <td>Independe do fotoperíodo</td>
                <td>Não há período crítico</td>
                <td>Tomate, milho, pepino, feijão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 260" width="680" height="260" aria-label="Diagrama fotoperiodismo: plantas de dia curto e dia longo sob diferentes regimes de luz e escuro">
            {/* Eixos */}
            <text x={340} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Fotoperiodismo: Floração sob Diferentes Regimes</text>

            {/* --- Linha 1: Planta dia curto, noite longa, SEM interrupção → FLORESCE --- */}
            <text x={5} y={50} fontSize={10} fontWeight={700} fill="#374151">PDC</text>
            <text x={5} y={60} fontSize={9} fill="#6b7280">(dia curto)</text>
            {/* barra LUZ 8h */}
            <rect x={70} y={38} width={160} height={22} rx={3} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={150} y={53} textAnchor="middle" fontSize={9} fill="#92400e">luz  8 h</text>
            {/* barra ESCURO 16h */}
            <rect x={230} y={38} width={320} height={22} rx={3} fill="#1e293b" />
            <text x={390} y={53} textAnchor="middle" fontSize={9} fill="#e2e8f0">escuro 16 h (noite longa)</text>
            {/* flor */}
            <circle cx={605} cy={49} r={13} fill="#fca5a5" stroke="#dc2626" strokeWidth={1.5} />
            <text x={605} y={53} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7f1d1d">FLOR</text>

            {/* --- Linha 2: PDC com flash de luz no meio da noite → NÃO FLORESCE --- */}
            <text x={5} y={90} fontSize={10} fontWeight={700} fill="#374151">PDC</text>
            <text x={5} y={100} fontSize={9} fill="#6b7280">(flash)</text>
            <rect x={70} y={78} width={160} height={22} rx={3} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={150} y={93} textAnchor="middle" fontSize={9} fill="#92400e">luz  8 h</text>
            <rect x={230} y={78} width={150} height={22} rx={3} fill="#1e293b" />
            <text x={305} y={93} textAnchor="middle" fontSize={9} fill="#e2e8f0">escuro</text>
            {/* flash */}
            <rect x={380} y={78} width={12} height={22} rx={2} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={386} y={73} textAnchor="middle" fontSize={8} fill="#92400e">flash</text>
            <rect x={392} y={78} width={158} height={22} rx={3} fill="#1e293b" />
            <text x={471} y={93} textAnchor="middle" fontSize={9} fill="#e2e8f0">escuro</text>
            <text x={605} y={93} textAnchor="middle" fontSize={10} fontWeight={700} fill="#6b7280">— (sem flor)</text>

            {/* --- Linha 3: Planta dia longo, dia longo → FLORESCE --- */}
            <text x={5} y={130} fontSize={10} fontWeight={700} fill="#374151">PDL</text>
            <text x={5} y={140} fontSize={9} fill="#6b7280">(dia longo)</text>
            <rect x={70} y={118} width={320} height={22} rx={3} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={230} y={133} textAnchor="middle" fontSize={9} fill="#92400e">luz  16 h</text>
            <rect x={390} y={118} width={160} height={22} rx={3} fill="#1e293b" />
            <text x={470} y={133} textAnchor="middle" fontSize={9} fill="#e2e8f0">escuro 8 h (noite curta)</text>
            <circle cx={605} cy={129} r={13} fill="#fca5a5" stroke="#dc2626" strokeWidth={1.5} />
            <text x={605} y={133} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7f1d1d">FLOR</text>

            {/* --- Linha 4: PDL, noite longa → NÃO FLORESCE --- */}
            <text x={5} y={170} fontSize={10} fontWeight={700} fill="#374151">PDL</text>
            <text x={5} y={180} fontSize={9} fill="#6b7280">(dia curto)</text>
            <rect x={70} y={158} width={160} height={22} rx={3} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={150} y={173} textAnchor="middle" fontSize={9} fill="#92400e">luz  8 h</text>
            <rect x={230} y={158} width={320} height={22} rx={3} fill="#1e293b" />
            <text x={390} y={173} textAnchor="middle" fontSize={9} fill="#e2e8f0">escuro 16 h</text>
            <text x={605} y={173} textAnchor="middle" fontSize={10} fontWeight={700} fill="#6b7280">— (sem flor)</text>

            {/* legenda */}
            <rect x={70} y={205} width={18} height={12} rx={2} fill="#fde68a" stroke="#f59e0b" strokeWidth={1} />
            <text x={94} y={215} fontSize={10} fill="#374151">período de luz</text>
            <rect x={180} y={205} width={18} height={12} rx={2} fill="#1e293b" />
            <text x={204} y={215} fontSize={10} fill="#374151">período de escuro</text>
            <circle cx={320} cy={211} r={8} fill="#fca5a5" stroke="#dc2626" strokeWidth={1} />
            <text x={333} y={215} fontSize={10} fill="#374151">floração ocorre</text>
            <text x={430} y={215} fontSize={10} fill="#6b7280">PDC = planta de dia curto | PDL = planta de dia longo</text>

            <text x={340} y={245} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              Um pulso de luz no meio da noite impede a floração de PDC e pode induzi-la em PDL.
            </text>
          </svg>
          <figcaption>
            Esquema fotoperiódico comparando plantas de dia curto (PDC) e dia longo (PDL).
            Note que o flash de luz no meio da noite desfaz a noite longa para a PDC,
            impedindo a floração.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Integração</span>

        <h2>7. Interações entre Fitormônios e Aplicações na Agricultura</h2>

        <p>
          Raramente um fitormônio age de forma isolada: o crescimento e o
          desenvolvimento vegetal resultam de um equilíbrio dinâmico entre
          diferentes reguladores. A tabela abaixo ilustra as principais interações:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Hormônios Envolvidos</th>
                <th>Relação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dominância apical</td>
                <td>Auxina × Citocinina</td>
                <td>Antagônica: auxina inibe gemas; citocinina as libera</td>
              </tr>
              <tr>
                <td>Dormência de sementes</td>
                <td>ABA × Giberelina</td>
                <td>Antagônica: ABA mantém dormência; GA₃ quebra</td>
              </tr>
              <tr>
                <td>Amadurecimento de frutos</td>
                <td>Etileno + Auxina</td>
                <td>Auxina alta → fruto verde; queda de auxina → etileno dispara amadurecimento</td>
              </tr>
              <tr>
                <td>Cultura de tecidos</td>
                <td>Auxina + Citocinina</td>
                <td>Razão define destino: raiz (↑AIA), broto (↑CK), calo (equilíbrio)</td>
              </tr>
              <tr>
                <td>Estresse hídrico</td>
                <td>ABA ↑, Citocinina ↓</td>
                <td>ABA fecha estômatos; queda de CK acelera senescência foliar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍌</span>
            <h3>Banana Verde ao Mercado</h3>
            <p>Bananas são colhidas verdes e amadurecem em câmaras de etileno antes de chegar às prateleiras.</p>
          </div>

          <div className="lesson-card">
            <span>🌲</span>
            <h3>Poda e Brotação</h3>
            <p>A remoção do ápice elimina a fonte de auxina, liberando gemas laterais estimuladas pelas citocininas.</p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>Micropropagação</h3>
            <p>A manipulação da razão auxina:citocinina in vitro permite clonar plantas em escala industrial.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Herbicidas Seletivos</h3>
            <p>2,4-D e 2,4,5-T mimetizam auxinas em doses tóxicas para dicotiledôneas, poupando gramíneas.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>8. Questões de Vestibular e ENEM</h2>

        <Exercise
          level="Básico"
          title="1. Fitormônio responsável pelo amadurecimento de frutos"
          statement={
            <p>
              Frutos como banana e tomate são frequentemente colhidos ainda verdes
              e amadurecem durante o transporte ou armazenamento. O fitormônio
              diretamente responsável por desencadear esse processo é:
            </p>
          }
          options={[
            { letter: "a", text: "Ácido abscísico (ABA), que ativa enzimas de degradação da clorofila" },
            { letter: "b", text: "Giberelina, que induz o alongamento das células da polpa" },
            { letter: "c", text: "Etileno (C₂H₄), único fitormônio gasoso, que desencadeia a maturação", correct: true },
            { letter: "d", text: "Citocinina, que estimula a divisão celular na polpa" },
          ]}
          resolution={
            <p>
              O <strong>etileno</strong> é o único hormônio vegetal gasoso e o principal
              regulador do amadurecimento de frutos climatéricos. Ele ativa a degradação
              de clorofila, a síntese de pigmentos, a conversão de amido em açúcares e o
              amolecimento da polpa por pectinases. Na agricultura, câmaras com etileno
              exógeno uniformizam o amadurecimento comercial de bananas, tomates e
              outros frutos colhidos verdes.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Mecanismo do fototropismo positivo no caule"
          statement={
            <p>
              Em experimentos com coleóptilos de aveia iluminados unilateralmente, observa-se
              curvatura em direção à fonte de luz. Esse comportamento é melhor explicado pela
              seguinte sequência de eventos:
            </p>
          }
          options={[
            { letter: "a", text: "A luz destrói as auxinas do lado iluminado, reduzindo seu crescimento" },
            { letter: "b", text: "O lado iluminado realiza mais fotossíntese, produzindo mais glicose e crescendo mais" },
            {
              letter: "c",
              text: "A auxina migra lateralmente para o lado sombreado; o maior teor de AIA nesse lado promove mais elongação, curvando o caule em direção à luz",
              correct: true,
            },
            { letter: "d", text: "A luz estimula a síntese de citocininas no lado iluminado, que inibem o crescimento desse lado" },
          ]}
          resolution={
            <p>
              O fototropismo positivo do caule ocorre porque proteínas fotorreceptoras
              (fototropinas) detectam a luz azul unilateral e disparam a redistribuição
              lateral da auxina para o lado oposto à luz. O lado sombreado, com maior
              concentração de AIA, acidifica mais a parede celular (hipótese do crescimento
              ácido), expande-se mais e curva o caule em direção à fonte luminosa.
              Os experimentos de Darwin, Boysen-Jensen e Went (1926) estabeleceram
              progressivamente a natureza química desse sinal.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Razão auxina:citocinina em cultura de tecidos"
          statement={
            <p>
              Em laboratório, explantes foliares de uma dicotiledônea foram cultivados
              em meio com diferentes concentrações de auxina (AIA) e citocinina (CK).
              Quatro tratamentos foram testados: I — AIA alta, CK zero; II — AIA zero,
              CK alta; III — AIA moderada, CK moderada (equilíbrio); IV — AIA zero,
              CK zero. Assinale a alternativa que associa corretamente cada tratamento
              ao resultado esperado:
            </p>
          }
          options={[
            { letter: "a", text: "I: gemas; II: raízes; III: calo; IV: morte" },
            {
              letter: "b",
              text: "I: raízes; II: gemas/brotos; III: calo indiferenciado; IV: nenhuma diferenciação/morte",
              correct: true,
            },
            { letter: "c", text: "I: calo; II: raízes; III: gemas; IV: floração" },
            { letter: "d", text: "I: brotos; II: calo; III: raízes; IV: sementes" },
          ]}
          resolution={
            <p>
              O destino do explante em cultura de tecidos depende da razão AIA:CK.
              Alta auxina (baixa CK): formação preferencial de <strong>raízes</strong>.
              Alta CK (baixa auxina): formação de <strong>gemas e brotos</strong>.
              Equilíbrio: proliferação de <strong>calo</strong> indiferenciado.
              Ausência de ambos: a célula não tem sinal para proliferar e morre.
              Esse conhecimento é base da micropropagação clonal de espécies vegetais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Maçã podre e etileno (ENEM adaptado)"
          statement={
            <p>
              Uma dona de casa notou que, ao guardar uma maçã muito madura junto a
              bananas verdes, as bananas amadureciam muito mais rapidamente do que as
              armazenadas separadamente. Com base no conhecimento de fisiologia vegetal,
              a explicação correta para esse fenômeno é:
            </p>
          }
          options={[
            { letter: "a", text: "A maçã libera giberelinas que se difundem pelo ar e estimulam o metabolismo das bananas" },
            {
              letter: "b",
              text: "A maçã madura libera etileno gasoso que, ao atingir as bananas, acelera seu processo de amadurecimento",
              correct: true,
            },
            { letter: "c", text: "O alto teor de açúcar da maçã madura contamina as bananas por contato e acelera sua fermentação" },
            { letter: "d", text: "A maçã produz auxinas voláteis que aumentam a taxa respiratória das bananas" },
          ]}
          resolution={
            <p>
              O <strong>etileno</strong> é gasoso em temperatura ambiente e pode se
              difundir pelo ar. A maçã madura produz altas quantidades de etileno;
              ao se difundir para as bananas vizinhas, ativa os mesmos receptores
              que desencadeiam a cascata de amadurecimento: degradação de clorofila,
              síntese de pigmentos amarelos (carotenoides), conversão de amido em
              açúcares e amolecimento da polpa por pectinases. Esse efeito é
              explorado comercialmente nas câmaras de maturação da indústria
              bananeira.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Fotoperiodismo e cultivo da soja"
          statement={
            <p>
              A soja (<em>Glycine max</em>) é uma planta de dia curto (noite longa).
              Um agricultor do sul do Brasil deseja antecipar a floração da soja no
              verão, quando os dias são longos. Qual intervenção seria correta para
              induzir a floração fora de época?
            </p>
          }
          options={[
            { letter: "a", text: "Iluminar as plantas com luz azul durante o dia para aumentar a taxa fotossintética" },
            {
              letter: "b",
              text: "Cobrir as plantas com lonas escuras por algumas horas ao dia para artificialmente aumentar o período de escuro (noite) além do valor crítico",
              correct: true,
            },
            { letter: "c", text: "Aplicar giberelinas exógenas, que substituem o sinal fotoperiódico em dicotiledôneas" },
            { letter: "d", text: "Aplicar ABA, que sinaliza ao fitocromo que a noite foi suficientemente longa" },
          ]}
          resolution={
            <p>
              A soja é uma <strong>planta de dia curto (noite longa)</strong>: floresce
              quando o período de escuro ininterrupto excede seu valor crítico. No verão,
              as noites são muito curtas, impedindo a floração. Para antecipar esse processo,
              o agricultor pode cobrir as plantas com lonas opacas durante algumas horas do
              dia, prolongando artificialmente a noite. Isso mantém o Pfr baixo (convertido em
              Pr no escuro prolongado), sinalizando ao relógio biológico que a estação
              fotoperiódica adequada chegou e induzindo a floração. Essa técnica é usada
              comercialmente na produção de crisântemos em qualquer época do ano.
            </p>
          }
        />
      </section>
    </article>
  );
}
