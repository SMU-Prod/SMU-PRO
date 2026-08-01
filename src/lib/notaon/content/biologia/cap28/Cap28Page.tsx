"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 28</span>

          <h1>Reino Animalia II: Moluscos, Anelídeos e Artrópodes</h1>

          <p>
            Três filos de invertebrados celomados dominam a fauna terrestre e
            aquática: os <strong>moluscos</strong> (corpo mole protegido pelo
            manto), os <strong>anelídeos</strong> (vermes segmentados, pilares
            da fertilidade do solo) e os <strong>artrópodes</strong> — o filo
            mais diversificado de toda a história da vida, responsável por mais
            de 80% das espécies animais descritas. Dominá-los é indispensável
            para o ENEM, pois envolvem vetores de doenças tropicais, agricultura
            sustentável e adaptações evolutivas extraordinárias.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 1 — MOLUSCOS: PLANO CORPORAL
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Moluscos</span>

        <h2>1. Filo Mollusca — O Corpo Mole e Seus Três Tagmas</h2>

        <p>
          O filo <strong>Mollusca</strong> reúne cerca de 100 000 espécies
          conhecidas, sendo o segundo maior filo animal em número de espécies
          (atrás apenas dos artrópodes). São animais{" "}
          <strong>triblásticos, celomados e com simetria bilateral</strong>,
          embora em gastrópodes adultos a torção do corpo (torção gástrica)
          quebre a simetria aparente. Habitam ambientes marinhos, de água doce
          e terrestres úmidos.
        </p>

        <p>
          O plano corporal básico de um molusco não-especializado (o{" "}
          <em>Neopilina</em>, considerado "fóssil vivo") apresenta três regiões
          fundamentais: o <strong>pé muscular</strong> ventral (locomotor), o{" "}
          <strong>manto</strong> (folha de tecido que envolve a massa visceral e
          secreta a concha de carbonato de cálcio, CaCO₃) e a{" "}
          <strong>massa visceral</strong> dorsal (onde se concentram os sistemas
          digestório, excretor e reprodutor). Além disso, a maioria dos
          moluscos apresenta a <strong>rádula</strong>, uma fita denticulada
          móvel usada para raspar alimento — ausente apenas nos bivalves, que
          são filtradores.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦶</span>
            <h3>Pé muscular</h3>
            <p>
              Estrutura ventral de grande variedade funcional: rampa deslizante
              em gastrópodes, perfurador em bivalves, tentáculos em cefalópodes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐚</span>
            <h3>Manto e concha</h3>
            <p>
              O manto secreta ativamente a concha de carbonato de cálcio,
              conferindo proteção mecânica; nos cefalópodes é interna ou
              ausente.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫀</span>
            <h3>Massa visceral</h3>
            <p>
              Concentra coração, gônadas, glândulas digestivas e metanefrídios
              (rins primitivos) responsáveis pela excreção.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦷</span>
            <h3>Rádula</h3>
            <p>
              Língua denticulada quitinosa usada para raspar algas e tecidos;
              ausente em bivalves (filtradores).
            </p>
          </div>

          <div className="lesson-card">
            <span>💨</span>
            <h3>Respiração</h3>
            <p>
              Branquial (ctênidios) em aquáticos; pulmonar em gastrópodes
              terrestres (massa vascularizada no manto).
            </p>
          </div>

          <div className="lesson-card">
            <span>❤️</span>
            <h3>Circulação</h3>
            <p>
              Aberta (hemocela) na maioria; <strong>fechada</strong> apenas em
              cefalópodes — o que lhes garante maior eficiência metabólica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que os cefalópodes são tão especiais?</h3>
          <p>
            Polvos e lulas possuem o <strong>sistema nervoso mais complexo
            entre todos os invertebrados</strong>: um cérebro cartilaginoso
            envolvido em uma "caixa craniana" primitiva, olhos com estrutura
            convergente à dos vertebrados e capacidade de aprendizagem e memória
            de curto prazo. A circulação <strong>fechada</strong> (única entre
            os moluscos) garante pressão e velocidade de fornecimento de O₂
            compatíveis com o alto metabolismo de caçadores ativos. O pigmento
            respiratório deles é a <strong>hemocianina</strong> (cobre, não
            ferro), que confere cor azul-esverdeada ao sangue.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 2 — CLASSES DE MOLUSCOS (tabela)
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Classes</span>

        <h2>2. As Principais Classes de Moluscos</h2>

        <p>
          A diversidade morfológica dos moluscos é enorme. As cinco classes de
          maior relevância para o ENEM são apresentadas a seguir, com ênfase
          nas diferenças de plano corporal, conchas e hábitos:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Concha</th>
                <th>Pé</th>
                <th>Respiração</th>
                <th>Exemplos</th>
                <th>Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gastrópodes</strong></td>
                <td>Única, em espiral</td>
                <td>Plano, deslizante</td>
                <td>Branquial ou pulmonar</td>
                <td>Caracol, lesma, caramujo, cone</td>
                <td>Hospedeiro de <em>Schistosoma</em> (<em>Biomphalaria</em>)</td>
              </tr>
              <tr>
                <td><strong>Bivalves (Pelecípodes)</strong></td>
                <td>Duas valvas</td>
                <td>Perfurador em cunha</td>
                <td>Branquial</td>
                <td>Ostra, mexilhão, marisco, berbigão</td>
                <td>Pérolas, aquicultura, bioindicadores</td>
              </tr>
              <tr>
                <td><strong>Cefalópodes</strong></td>
                <td>Interna ou ausente</td>
                <td>Tentáculos (8–10+)</td>
                <td>Branquial (fechada)</td>
                <td>Polvo, lula, sépia, náutilo</td>
                <td>Maior encéfalo invertebrado; tinta de sépia</td>
              </tr>
              <tr>
                <td><strong>Poliplacóforos</strong></td>
                <td>8 placas dorsais</td>
                <td>Plano</td>
                <td>Branquial</td>
                <td>Quitons</td>
                <td>Indicadores de saúde recifal</td>
              </tr>
              <tr>
                <td><strong>Escafópodes</strong></td>
                <td>Tubular (cônica)</td>
                <td>Cilíndrico</td>
                <td>Manto</td>
                <td>Dentes-do-mar</td>
                <td>Papel sedimentar; ornamentação indígena</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Comparação dos planos corporais de moluscos">
            {/* Gastropode */}
            <g>
              <ellipse cx={100} cy={110} rx={55} ry={30} fill="#d1fae5" stroke="#059669" strokeWidth={1.5} />
              <path d="M100 80 Q110 40 130 30 Q150 20 145 55 Q140 70 115 78" fill="#6ee7b7" stroke="#059669" strokeWidth={1.2} />
              <ellipse cx={85} cy={115} rx={20} ry={10} fill="#34d399" opacity={0.7} />
              <text x={100} y={155} textAnchor="middle" fontSize={12} fontWeight={700} fill="#065f46">Gastrópode</text>
              <text x={100} y={168} textAnchor="middle" fontSize={10} fill="#6b7280">concha espiral</text>
            </g>
            {/* Bivalve */}
            <g>
              <ellipse cx={260} cy={105} rx={50} ry={35} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.5} />
              <path d="M210 105 Q235 75 260 70 Q285 75 310 105" fill="none" stroke="#1d4ed8" strokeWidth={2} />
              <ellipse cx={240} cy={108} rx={22} ry={14} fill="#93c5fd" opacity={0.8} />
              <ellipse cx={280} cy={108} rx={22} ry={14} fill="#93c5fd" opacity={0.8} />
              <text x={260} y={155} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e40af">Bivalve</text>
              <text x={260} y={168} textAnchor="middle" fontSize={10} fill="#6b7280">duas valvas</text>
            </g>
            {/* Cefalopode */}
            <g>
              <ellipse cx={430} cy={100} rx={40} ry={28} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const angle = (i * Math.PI) / 4;
                const x2 = 430 + Math.cos(angle) * 55;
                const y2 = 140 + Math.sin(angle) * 22;
                return (
                  <line key={i} x1={430} y1={128} x2={x2} y2={y2} stroke="#b45309" strokeWidth={2} />
                );
              })}
              <circle cx={430} cy={100} r={12} fill="#fbbf24" />
              <circle cx={426} cy={97} r={4} fill="#1f2937" />
              <text x={430} y={170} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Cefalópode</text>
              <text x={430} y={183} textAnchor="middle" fontSize={10} fill="#6b7280">tentáculos</text>
            </g>
            {/* Poliplacoforo */}
            <g>
              <ellipse cx={590} cy={105} rx={45} ry={22} fill="#e9d5ff" stroke="#7c3aed" strokeWidth={1.5} />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <rect key={i} x={550 + i * 10} y={87} width={9} height={18} rx={2} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={0.8} />
              ))}
              <text x={590} y={145} textAnchor="middle" fontSize={12} fontWeight={700} fill="#5b21b6">Poliplacóforo</text>
              <text x={590} y={158} textAnchor="middle" fontSize={10} fill="#6b7280">8 placas</text>
            </g>
          </svg>
          <figcaption>
            Planos corporais comparados das principais classes de moluscos: gastrópode (concha espiral), bivalve (duas valvas), cefalópode (tentáculos) e poliplacóforo (8 placas dorsais).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Atenção — <em>Biomphalaria</em> e esquistossomose</h3>
          <p>
            O caramujo <em>Biomphalaria glabrata</em> (gastrópode dulcícola) é
            o <strong>hospedeiro intermediário</strong> de <em>Schistosoma
            mansoni</em>, parasita causador da esquistossomose (xistose), doença
            endêmica no Brasil. Sem o caramujo o ciclo do parasita se quebra
            — por isso o controle do molusco é estratégia de saúde pública.
            Essa relação aparece com frequência no ENEM em questões de
            parasitologia e ciclos biológicos.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 3 — ANELÍDEOS
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Anelídeos</span>

        <h2>3. Filo Annelida — A Metameria e a Vida Segmentada</h2>

        <p>
          Os <strong>anelídeos</strong> são vermes celomados cujo corpo é
          dividido em <strong>metameria</strong> — anéis (segmentos) repetidos
          externamente e internamente por septos musculares. Cada segmento
          (chamado metâmero ou somito) contém, via de regra, um par de
          metanefrídios (excreção) e um par de gânglios nervosos, conferindo
          certo grau de autonomia funcional a cada parte do corpo. São
          triblásticos, com simetria bilateral e sistema digestório completo
          (boca e ânus distintos).
        </p>

        <p>
          A <strong>circulação dos anelídeos é fechada</strong> — característica
          que os difere dos moluscos (exceto cefalópodes) e garante maior
          eficiência no transporte de O₂ e nutrientes. A respiração é
          essencialmente <strong>cutânea</strong> nos oligoquetos terrestres
          (e.g. minhoca), dependendo da umidade da pele, enquanto nos poliquetos
          marinhos ocorre por <strong>parapódios</strong> (expansões laterais
          ricamente vascularizadas). As sanguessugas (hirudíneos) podem ter
          brânquias.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Metameria</h3>
            <p>
              Repetição de segmentos ao longo do eixo antero-posterior;
              internamente separados por septos, externamente visíveis como
              anéis.
            </p>
          </div>

          <div className="lesson-card">
            <span>❤️</span>
            <h3>Circulação fechada</h3>
            <p>
              Dois vasos longitudinais principais (dorsal e ventral) ligados
              por vasos transversais; a minhoca tem corações laterais
              ("pseudocoração") no 7.º–11.º segmento.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Excreção por metanefrídios</h3>
            <p>
              Cada segmento possui um par de metanefrídios que filtram a
              hemolinfa e eliminam amônia diluída ou ureia.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Sistema nervoso</h3>
            <p>
              Gânglio cerebral supraesofágico ("cérebro") + cordão nervoso
              ventral ganglionado com um par de gânglios por segmento.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Cerdas</th>
                <th>Habitat</th>
                <th>Reprodução</th>
                <th>Exemplos</th>
                <th>Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Oligoquetos</strong></td>
                <td>Poucas (oligo = pouco)</td>
                <td>Solo úmido / água doce</td>
                <td>Hermafrodita cruzado</td>
                <td>Minhoca (<em>Lumbricus</em>, <em>Eisenia</em>)</td>
                <td>Arejamento e fertilização do solo; vermicompostagem</td>
              </tr>
              <tr>
                <td><strong>Poliquetos</strong></td>
                <td>Muitas (poli = muitas), em parapódios</td>
                <td>Marinho (maioria)</td>
                <td>Sexuada; dióicos</td>
                <td>Nereis, minhoca-de-praia, poliquetas-de-tubo</td>
                <td>Base da cadeia alimentar marinha; bioindicadores</td>
              </tr>
              <tr>
                <td><strong>Hirudíneos</strong></td>
                <td>Ausentes</td>
                <td>Água doce / úmido</td>
                <td>Hermafrodita cruzado</td>
                <td>Sanguessuga (<em>Hirudo medicinalis</em>)</td>
                <td>Hirudina (anticoagulante); uso em microcirurgia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>A minhoca como engenheira do solo</h3>
          <p>
            Charles Darwin dedicou seu último livro inteiramente às minhocas,
            reconhecendo-as como "os animais mais importantes da história
            natural". Elas escavam galerias que <strong>arejam</strong> e{" "}
            <strong>drenam</strong> o solo, ingerem matéria orgânica e
            excretam fezes ricas em nutrientes mineralizados (o{" "}
            <strong>húmus</strong> ou "adubo de minhoca"). Além disso, sua
            atividade eleva a capacidade de retenção de água e favorece o
            estabelecimento de raízes. A{" "}
            <strong>vermicompostagem</strong> — aproveitamento de resíduos
            orgânicos por minhocas em composteiras — é tecnologia de
            agricultura sustentável amplamente adotada.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 4 — ARTRÓPODES: CARACTERÍSTICAS GERAIS
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Artrópodes</span>

        <h2>4. Filo Arthropoda — O Maior Filo de Todos os Tempos</h2>

        <p>
          O filo <strong>Arthropoda</strong> (do grego <em>arthros</em> =
          articulado + <em>podos</em> = pé) compreende mais de{" "}
          <strong>1,2 milhão de espécies descritas</strong> — mais de 80% de
          toda a fauna conhecida — e provavelmente outros milhões ainda sem
          nome científico. Sua dominância é explicada por um conjunto único de
          adaptações evolutivas:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Exoesqueleto de quitina</h3>
            <p>
              Polissacarídeo nitrogenado resistente, leve e impermeável.
              Protege contra predadores e dessecação; serve de ponto de
              inserção muscular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Ecdise (muda)</h3>
            <p>
              Como o exoesqueleto não cresce, o animal o substitui
              periodicamente. Durante a ecdise o animal fica vulnerável até
              o novo esqueleto endurecer.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦵</span>
            <h3>Apêndices articulados</h3>
            <p>
              Patas, antenas, quelíceras, pinças e asas derivam todos de
              apêndices articulados; a especialização desses apêndices
              define cada grupo.
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>Olhos compostos</h3>
            <p>
              Formados por centenas a milhares de omatídios; excelente
              detecção de movimento; presentes em insetos e crustáceos.
            </p>
          </div>

          <div className="lesson-card">
            <span>💨</span>
            <h3>Respiração variada</h3>
            <p>
              Traqueal (insetos, quilópodes, diplópodes), branquial
              (crustáceos aquáticos), pulmonar em livro (aracnídeos) ou
              mista.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Sistema nervoso eficiente</h3>
            <p>
              Gânglio supra e subesofágico + cadeia ganglionar ventral;
              órgãos sensoriais sofisticados (estatocistos, cerdas sensoras,
              olhos).
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Anatomia de um inseto com partes nomeadas">
            {/* Cabeça */}
            <ellipse cx={120} cy={110} rx={55} ry={50} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            <text x={120} y={108} textAnchor="middle" fontSize={13} fontWeight={700} fill="#78350f">CABEÇA</text>
            <text x={120} y={124} textAnchor="middle" fontSize={10} fill="#92400e">antenas, olhos, peças</text>
            <text x={120} y={136} textAnchor="middle" fontSize={10} fill="#92400e">bucais</text>
            {/* Antenas */}
            <path d="M95 65 Q70 30 55 15" fill="none" stroke="#ca8a04" strokeWidth={2} />
            <path d="M140 65 Q160 30 175 15" fill="none" stroke="#ca8a04" strokeWidth={2} />
            {/* Olhos compostos */}
            <ellipse cx={88} cy={95} rx={14} ry={10} fill="#a3e635" stroke="#4d7c0f" strokeWidth={1} />
            <ellipse cx={152} cy={95} rx={14} ry={10} fill="#a3e635" stroke="#4d7c0f" strokeWidth={1} />
            {/* Tórax */}
            <rect x={185} y={65} width={170} height={95} rx={18} fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            <text x={270} y={108} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">TÓRAX</text>
            <text x={270} y={124} textAnchor="middle" fontSize={10} fill="#166534">3 pares de pernas</text>
            <text x={270} y={137} textAnchor="middle" fontSize={10} fill="#166534">1–2 pares de asas</text>
            {/* 3 pares de patas no torax */}
            {[200, 250, 320].map((px, i) => (
              <g key={i}>
                <line x1={px} y1={160} x2={px - 20} y2={195} stroke="#16a34a" strokeWidth={2.5} />
                <line x1={px + 20} y1={160} x2={px + 40} y2={195} stroke="#16a34a" strokeWidth={2.5} />
              </g>
            ))}
            {/* Asas */}
            <path d="M200 68 Q230 20 310 30 Q300 65 185 68Z" fill="#bae6fd" stroke="#0284c7" strokeWidth={1.2} opacity={0.8} />
            <path d="M200 80 Q220 110 310 100 Q300 75 185 78Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth={1} opacity={0.7} />
            {/* Abdome */}
            <ellipse cx={490} cy={110} rx={100} ry={55} fill="#fecaca" stroke="#dc2626" strokeWidth={2} />
            {/* Segmentos abdominais */}
            {[-60, -30, 0, 30, 60].map((dx) => (
              <line key={dx} x1={490 + dx} y1={57} x2={490 + dx} y2={163} stroke="#dc2626" strokeWidth={1} opacity={0.4} />
            ))}
            <text x={490} y={108} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">ABDOME</text>
            <text x={490} y={124} textAnchor="middle" fontSize={10} fill="#991b1b">segmentado; órgãos</text>
            <text x={490} y={137} textAnchor="middle" fontSize={10} fill="#991b1b">reprodutores e respiratórios</text>
            {/* Ligação cabeça-torax */}
            <line x1={175} y1={110} x2={185} y2={110} stroke="#78350f" strokeWidth={3} />
            {/* Ligação torax-abdome */}
            <line x1={355} y1={110} x2={390} y2={110} stroke="#78350f" strokeWidth={3} />
            {/* Label */}
            <text x={360} y={210} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#4b5563">Inseto: 3 tagmas (cabeça, tórax, abdome) · 3 pares de pernas · até 2 pares de asas</text>
          </svg>
          <figcaption>
            Anatomia geral de um inseto: cabeça (antenas, olhos compostos, peças bucais), tórax (3 pares de pernas articuladas, asas) e abdome segmentado (órgãos internos e respiratório traqueal).
          </figcaption>
        </figure>
      </section>

      {/* ================================================================
          SEÇÃO 5 — CLASSES DE ARTRÓPODES (tabela comparativa)
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Classes de Artrópodes</span>

        <h2>5. As Cinco Classes — Comparação Sistemática</h2>

        <p>
          A diversidade dos artrópodes é organizada em classes definidas
          principalmente pelo <strong>número e tipo de apêndices</strong>,
          pelo <strong>número de tagmas</strong> (regiões corporais) e pelo{" "}
          <strong>tipo de respiração</strong>. A tabela a seguir sintetiza os
          pontos mais cobrados no ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Tagmas</th>
                <th>Pares de pernas</th>
                <th>Pares de antenas</th>
                <th>Respiração</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Insetos (Hexápodes)</strong></td>
                <td>3 (cabeça, tórax, abdome)</td>
                <td>3 (no tórax)</td>
                <td>1</td>
                <td>Traqueal</td>
                <td>Borboleta, abelha, gafanhoto, mosquito, besouro</td>
              </tr>
              <tr>
                <td><strong>Aracnídeos</strong></td>
                <td>2 (cefalotórax, abdome)</td>
                <td>4</td>
                <td>0 (quelíceras + pedipalpos)</td>
                <td>Pulmão em livro / traqueal</td>
                <td>Aranha, escorpião, ácaro, carrapato</td>
              </tr>
              <tr>
                <td><strong>Crustáceos</strong></td>
                <td>2 (cefalotórax, abdome)</td>
                <td>5+ (pereópodes)</td>
                <td>2</td>
                <td>Branquial</td>
                <td>Camarão, caranguejo, lagosta, tatuzinho, copépode</td>
              </tr>
              <tr>
                <td><strong>Quilópodes</strong></td>
                <td>2 (cabeça + tronco)</td>
                <td>1 por segmento (15–170+)</td>
                <td>1</td>
                <td>Traqueal</td>
                <td>Lacraia, escolopendra</td>
              </tr>
              <tr>
                <td><strong>Diplópodes</strong></td>
                <td>2 (cabeça + tronco)</td>
                <td>2 por segmento</td>
                <td>1</td>
                <td>Traqueal</td>
                <td>Piolho-de-cobra, embuá, gongilomorfo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 160" width="720" height="160" aria-label="Comparação visual das cinco classes de artrópodes">
            {/* Inseto */}
            <g>
              <rect x={10} y={20} width={120} height={90} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
              <text x={70} y={44} textAnchor="middle" fontSize={12} fontWeight={700} fill="#78350f">Inseto</text>
              <text x={70} y={60} textAnchor="middle" fontSize={11} fill="#1f2937">3 pares pernas</text>
              <text x={70} y={74} textAnchor="middle" fontSize={11} fill="#1f2937">1 par antenas</text>
              <text x={70} y={88} textAnchor="middle" fontSize={11} fill="#1f2937">3 tagmas</text>
              <text x={70} y={102} textAnchor="middle" fontSize={10} fill="#6b7280">abelha, mosquito</text>
            </g>
            {/* Aracnideo */}
            <g>
              <rect x={148} y={20} width={120} height={90} rx={10} fill="#fce7f3" stroke="#be185d" strokeWidth={1.5} />
              <text x={208} y={44} textAnchor="middle" fontSize={12} fontWeight={700} fill="#831843">Aracnídeo</text>
              <text x={208} y={60} textAnchor="middle" fontSize={11} fill="#1f2937">4 pares pernas</text>
              <text x={208} y={74} textAnchor="middle" fontSize={11} fill="#1f2937">0 antenas</text>
              <text x={208} y={88} textAnchor="middle" fontSize={11} fill="#1f2937">2 tagmas</text>
              <text x={208} y={102} textAnchor="middle" fontSize={10} fill="#6b7280">aranha, escorpião</text>
            </g>
            {/* Crustaceo */}
            <g>
              <rect x={286} y={20} width={120} height={90} rx={10} fill="#cffafe" stroke="#0891b2" strokeWidth={1.5} />
              <text x={346} y={44} textAnchor="middle" fontSize={12} fontWeight={700} fill="#164e63">Crustáceo</text>
              <text x={346} y={60} textAnchor="middle" fontSize={11} fill="#1f2937">5+ pares pernas</text>
              <text x={346} y={74} textAnchor="middle" fontSize={11} fill="#1f2937">2 pares antenas</text>
              <text x={346} y={88} textAnchor="middle" fontSize={11} fill="#1f2937">2 tagmas</text>
              <text x={346} y={102} textAnchor="middle" fontSize={10} fill="#6b7280">camarão, caranguejo</text>
            </g>
            {/* Quilopode */}
            <g>
              <rect x={424} y={20} width={130} height={90} rx={10} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
              <text x={489} y={44} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Quilópode</text>
              <text x={489} y={60} textAnchor="middle" fontSize={11} fill="#1f2937">1 par/segmento</text>
              <text x={489} y={74} textAnchor="middle" fontSize={11} fill="#1f2937">1 par antenas</text>
              <text x={489} y={88} textAnchor="middle" fontSize={11} fill="#1f2937">corpo achatado</text>
              <text x={489} y={102} textAnchor="middle" fontSize={10} fill="#6b7280">lacraia</text>
            </g>
            {/* Diplopode */}
            <g>
              <rect x={568} y={20} width={130} height={90} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
              <text x={633} y={44} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4c1d95">Diplópode</text>
              <text x={633} y={60} textAnchor="middle" fontSize={11} fill="#1f2937">2 pares/segmento</text>
              <text x={633} y={74} textAnchor="middle" fontSize={11} fill="#1f2937">1 par antenas</text>
              <text x={633} y={88} textAnchor="middle" fontSize={11} fill="#1f2937">corpo cilíndrico</text>
              <text x={633} y={102} textAnchor="middle" fontSize={10} fill="#6b7280">piolho-de-cobra</text>
            </g>
          </svg>
          <figcaption>
            As cinco classes de artrópodes: diferenças-chave em número de pernas, antenas e tagmas — os critérios mais testados no ENEM.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Macete para não confundir</h3>
          <p>
            <strong>Inseto:</strong> 6 patas, 1 antena, 3 partes — "6–1–3".{" "}
            <strong>Aracnídeo:</strong> 8 patas, 0 antenas, 2 partes — "8–0–2".{" "}
            <strong>Crustáceo:</strong> muitas patas, 2 antenas, 2 partes — "M–2–2".
            Quilópodes têm 1 par de patas por segmento e são predadores
            (venenosos via forcípulas); diplópodes têm 2 pares por segmento
            e são detritívoros ou herbívoros.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 6 — METAMORFOSE DOS INSETOS
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Metamorfose</span>

        <h2>6. Metamorfose dos Insetos — Completa e Incompleta</h2>

        <p>
          A capacidade de passar por diferentes estágios morfológicos —{" "}
          <strong>metamorfose</strong> — é um dos segredos do sucesso evolutivo
          dos insetos. Ela separa radicalmente os nichos ocupados pela larva
          e pelo adulto, reduzindo a competição intraespecífica. Existem três
          padrões:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦋</span>
            <h3>Holometabolismo (completa)</h3>
            <p>
              <strong>Ovo → Larva → Pupa → Adulto.</strong> Larva e adulto
              têm morfologia e dieta completamente distintas. Pupa é estágio
              de reorganização interna intensa. Ex.: borboleta, abelha,
              mosquito, mosca, besouro.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦗</span>
            <h3>Hemimetabolismo (incompleta)</h3>
            <p>
              <strong>Ovo → Ninfa(s) → Adulto.</strong> A ninfa é semelhante
              ao adulto mas sem asas funcionais; vai crescendo por sucessivas
              ecdises. Ex.: gafanhoto, barata, grilo, libelinha, percevejo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐟</span>
            <h3>Ametabolismo (sem metamorfose)</h3>
            <p>
              <strong>Ovo → Jovem → Adulto.</strong> O jovem é idêntico ao
              adulto em miniatura; apenas cresce. Ex.: traça-de-livro (<em>Lepisma</em>), pulga-d'água.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 170" width="720" height="170" aria-label="Ciclos de metamorfose completa e incompleta comparados">
            {/* HOLOMETABOLO */}
            <text x={180} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0369a1">Holometabolismo (completo)</text>
            {[
              { x: 20, label: "Ovo", color: "#fef08a" },
              { x: 115, label: "Larva", color: "#bbf7d0" },
              { x: 210, label: "Pupa", color: "#c7d2fe" },
              { x: 305, label: "Adulto", color: "#fecaca" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x} y={28} width={84} height={48} rx={10} fill={s.color} stroke="#64748b" strokeWidth={1.2} />
                <text x={s.x + 42} y={58} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">{s.label}</text>
              </g>
            ))}
            {[104, 199, 294].map((x) => (
              <polygon key={x} points={`${x},52 ${x + 11},46 ${x + 11},58`} fill="#64748b" />
            ))}
            {/* HEMIMETABOLO */}
            <text x={560} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#15803d">Hemimetabolismo (incompleto)</text>
            {[
              { x: 410, label: "Ovo", color: "#fef08a" },
              { x: 510, label: "Ninfa", color: "#bbf7d0" },
              { x: 610, label: "Adulto", color: "#fecaca" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x} y={28} width={88} height={48} rx={10} fill={s.color} stroke="#64748b" strokeWidth={1.2} />
                <text x={s.x + 44} y={58} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">{s.label}</text>
              </g>
            ))}
            {[498, 598].map((x) => (
              <polygon key={x} points={`${x},52 ${x + 12},46 ${x + 12},58`} fill="#64748b" />
            ))}
            {/* Linha divisória */}
            <line x1={395} y1={10} x2={395} y2={150} stroke="#e5e7eb" strokeWidth={2} strokeDasharray="6 4" />
            {/* Legendas inferiores */}
            <text x={180} y={98} textAnchor="middle" fontSize={11} fill="#4b5563">Ex.: borboleta, mosca, mosquito, abelha, besouro</text>
            <text x={560} y={98} textAnchor="middle" fontSize={11} fill="#4b5563">Ex.: gafanhoto, barata, grilo, percevejo, libelinha</text>
            <text x={180} y={112} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#0369a1">Pupa = reorganização completa dos tecidos</text>
            <text x={560} y={112} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#15803d">Ninfa lembra o adulto (sem asas)</text>
          </svg>
          <figcaption>
            Holometabolismo (4 estágios, com pupa) versus hemimetabolismo (3 estágios, com ninfa). A pupa é exclusiva do desenvolvimento completo e representa uma fase de reestruturação tissular radical.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que a metamorfose é vantajosa?</h3>
          <p>
            Quando larvas e adultos ocupam <strong>nichos ecológicos
            distintos</strong> (larva aquática / adulto aéreo, como no mosquito;
            ou larva comedora de folhas / adulto sugador de néctar, como na
            borboleta), a pressão competitiva intraespecífica cai. Cada fase
            explora recursos diferentes, maximizando a eficiência da espécie.
            Isso também facilita a dispersão: a larva cresce e a fase adulta
            voa para novos ambientes. O estágio de pupa no holometabolismo
            ainda representa um "reinício" do organismo — imagos (adultos)
            são construídos a partir de discos imaginais, grupos de células
            que permanecem indiferenciados durante toda a fase larval.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 7 — IMPORTÂNCIA MÉDICA E ECOLÓGICA
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Importância Médica</span>

        <h2>7. Vetores, Parasitas e Importância Ecológica dos Artrópodes</h2>

        <p>
          Os artrópodes têm impacto direto na saúde humana como{" "}
          <strong>vetores de doenças</strong> (transmitem agentes patogênicos
          ao picar), como <strong>ectoparasitas</strong> (vivem sobre o
          hospedeiro) e como <strong>reservatórios</strong>. Ao mesmo tempo,
          são insubstituíveis ecologicamente como polinizadores, decompositores
          e base de cadeias alimentares.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artrópode</th>
                <th>Classe</th>
                <th>Doença transmitida / dano</th>
                <th>Agente etiológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Aedes aegypti</em></td>
                <td>Inseto</td>
                <td>Dengue, zika, chikungunya, febre amarela urbana</td>
                <td>Arbovírus (Flavivírus, Alphavírus)</td>
              </tr>
              <tr>
                <td><em>Anopheles</em></td>
                <td>Inseto</td>
                <td>Malária (paludismo)</td>
                <td><em>Plasmodium</em> spp.</td>
              </tr>
              <tr>
                <td><em>Culex quinquefasciatus</em></td>
                <td>Inseto</td>
                <td>Filariose (elefantíase)</td>
                <td><em>Wuchereria bancrofti</em></td>
              </tr>
              <tr>
                <td><em>Triatoma infestans</em> (barbeiro)</td>
                <td>Inseto</td>
                <td>Doença de Chagas</td>
                <td><em>Trypanosoma cruzi</em></td>
              </tr>
              <tr>
                <td><em>Lutzomyia</em> (flebotomíneo)</td>
                <td>Inseto</td>
                <td>Leishmaniose</td>
                <td><em>Leishmania</em> spp.</td>
              </tr>
              <tr>
                <td><em>Amblyomma / Ixodes</em> (carrapato)</td>
                <td>Aracnídeo</td>
                <td>Febre maculosa; doença de Lyme</td>
                <td><em>Rickettsia rickettsii; Borrelia</em></td>
              </tr>
              <tr>
                <td><em>Tityus serrulatus</em> (escorpião amarelo)</td>
                <td>Aracnídeo</td>
                <td>Escorpionismo</td>
                <td>Neurotoxina do veneno</td>
              </tr>
              <tr>
                <td><em>Loxosceles</em> (aranha-marrom)</td>
                <td>Aracnídeo</td>
                <td>Loxoscelismo (necrose tecidual)</td>
                <td>Esfingomielinase D no veneno</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Importância ecológica positiva dos artrópodes</h3>
          <p>
            Do outro lado da balança, os artrópodes são responsáveis por cerca
            de <strong>80% da polinização</strong> das plantas com flores,
            incluindo culturas agrícolas vitais (abelhas, vespas, borboletas,
            mariposas). São a principal fonte de alimento de aves, anfíbios,
            répteis e peixes. Atuam como <strong>decompositores</strong> (tisanuros,
            diplópodes, isópodos) e como <strong>controladores biológicos</strong>
            de populações de pragas (predadores como louva-a-deus, joaninha e
            vespas parasitoides). A extinção dos polinizadores seria
            catastrófica para a produção de alimentos — razão pela qual o
            declínio global de abelhas é monitorado como alerta ambiental.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 8 — EXERCÍCIOS
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Classes de moluscos"
          statement={
            <p>
              O grupo de moluscos cujos membros possuem o pé modificado em
              tentáculos com ventosas, circulação fechada e o sistema nervoso
              mais desenvolvido entre todos os invertebrados é:
            </p>
          }
          options={[
            { letter: "a", text: "Gastrópodes" },
            { letter: "b", text: "Bivalves" },
            { letter: "c", text: "Cefalópodes", correct: true },
            { letter: "d", text: "Poliplacóforos" },
          ]}
          resolution={
            <p>
              Nos cefalópodes (polvos, lulas, sépias), o pé original evoluiu
              em tentáculos preenseis. Além disso, são os únicos moluscos com
              circulação fechada, o que lhes permite alto metabolismo como
              predadores ativos. O encéfalo deles, protegido por cartilagem,
              é o mais complexo de todos os invertebrados.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Metameria nos anelídeos"
          statement={
            <p>
              A metameria, característica marcante dos anelídeos, tem
              implicação funcional direta em qual sistema do organismo, além
              da musculatura?
            </p>
          }
          options={[
            { letter: "a", text: "Sistema digestório — cada segmento digere independentemente" },
            {
              letter: "b",
              text: "Sistema excretor — cada segmento possui um par de metanefrídios",
              correct: true,
            },
            { letter: "c", text: "Sistema respiratório — cada segmento realiza trocas gasosas por brânquias" },
            { letter: "d", text: "Sistema circulatório aberto — a hemolinfa banha cada segmento em separado" },
          ]}
          resolution={
            <p>
              A metameria é refletida no sistema excretor: cada metâmero dos
              anelídeos oligoquetos possui um par de <strong>metanefrídios</strong>,
              que filtram a hemolinfa e eliminam excretas. O sistema digestório
              é completo mas não repetido por segmento, e a circulação é
              fechada (não aberta).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ecdise e hormônios nos artrópodes"
          statement={
            <p>
              A ecdise (muda) nos artrópodes é regulada pelo hormônio
              ecdisona, produzido pelas glândulas de protórax (nos insetos).
              Qual é a razão evolutiva fundamental pela qual esse processo é
              necessário?
            </p>
          }
          options={[
            { letter: "a", text: "Permitir a regeneração de apêndices perdidos" },
            { letter: "b", text: "Eliminar parasitas fixados ao exoesqueleto antigo" },
            {
              letter: "c",
              text: "Permitir o crescimento corporal, pois o exoesqueleto de quitina não se expande",
              correct: true,
            },
            { letter: "d", text: "Substituir o pigmento do exoesqueleto conforme a estação" },
          ]}
          resolution={
            <p>
              O exoesqueleto de quitina é rígido e inextensível — não cresce
              com o organismo. Para aumentar de tamanho, o artrópode sintetiza
              um novo exoesqueleto macio sob o antigo, descarta o antigo
              (ecdise) e expande o corpo antes que o novo esqueleto endureça
              (esclerotização). Durante esse período o animal está vulnerável
              a predadores.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Dengue e metamorfose — questão ENEM"
          statement={
            <p>
              O controle da dengue exige eliminar os criadouros do mosquito{" "}
              <em>Aedes aegypti</em>, que deposita ovos em água parada.
              Com base no ciclo biológico desse inseto holometábolo, assinale
              a alternativa que apresenta, na ordem correta, os estágios de
              desenvolvimento pelo quais passa o vetor antes de se tornar adulto
              alado.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ovo → Ninfa → Adulto",
            },
            {
              letter: "b",
              text: "Ovo → Larva → Pupa → Adulto",
              correct: true,
            },
            { letter: "c", text: "Ovo → Larva → Adulto" },
            { letter: "d", text: "Ovo → Pupa → Ninfa → Adulto" },
          ]}
          resolution={
            <p>
              O <em>Aedes aegypti</em> é holometábolo (metamorfose completa):
              passa por quatro estágios — <strong>ovo, larva, pupa e adulto</strong>.
              As larvas (vermes aquáticos) e as pupas vivem na água parada,
              sendo por isso que eliminar recipientes com água estagnada
              interrompe o ciclo. A ninfa é característica de insetos
              hemimetábolos (como gafanhotos e baratas), não do mosquito.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Minhoca e agricultura sustentável"
          statement={
            <p>
              Um agrônomo observou que solos manejados sem uso de agrotóxicos
              e com cobertura vegetal apresentavam maior população de minhocas,
              maior porosidade e melhor retenção de água do que solos com uso
              intenso de pesticidas. Com base na biologia dos anelídeos
              oligoquetos, a relação entre minhocas e qualidade do solo é
              melhor explicada porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As minhocas liberam antibióticos que eliminam patógenos do solo",
            },
            {
              letter: "b",
              text: "As galerias escavadas pelas minhocas arejam o solo e suas fezes ricas em nutrientes funcionam como adubo orgânico",
              correct: true,
            },
            {
              letter: "c",
              text: "As minhocas fixam nitrogênio atmosférico como as bactérias simbiontes de leguminosas",
            },
            {
              letter: "d",
              text: "As minhocas compactam o solo ao se movimentar, aumentando a retenção hídrica",
            },
          ]}
          resolution={
            <p>
              As minhocas (oligoquetos) escavam galerias que <strong>arejam
              e drenam</strong> o solo, facilitando o acesso de raízes e
              reduzindo o risco de encharcamento. Ao ingerir matéria orgânica,
              mineralizam nutrientes e os eliminam em fezes ricas em compostos
              aproveitáveis pelas plantas (<strong>húmus</strong>), funcionando
              como fertilizante natural. Esse processo é explorado na{" "}
              <strong>vermicompostagem</strong>. As minhocas não fixam N₂ nem
              compactam o solo — ocorre o oposto.
            </p>
          }
        />
      </section>
    </article>
  );
}
