"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 25</span>

          <h1>Reino Protoctista: Algas e Protozoários</h1>

          <p>
            O Reino Protoctista (ou Protista) é a grande "caixa de fragmentos" dos
            eucariotos: reúne desde algas microscópicas responsáveis por metade do
            oxigênio que respiramos até protozoários parasitas que figuram entre as
            maiores causas de mortalidade tropical. Dominar este capítulo é
            essencial para o ENEM — provas de Biologia e Ciências Naturais abordam
            sistematicamente os ciclos de vida do <em>Plasmodium</em>,{" "}
            <em>Trypanosoma cruzi</em> e <em>Leishmania</em>, além da importância
            ecológica do fitoplâncton e da classificação das algas por pigmento.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. O Reino "Caixa de Fragmentos" — O Que é o Protoctista</h2>

        <p>
          O Reino Protoctista (do grego <em>protiston</em> = os primeiros) é um
          agrupamento <strong>artificial e polifilético</strong>: ele reúne
          eucariontes que <em>não</em> pertencem aos reinos Fungi, Plantae ou
          Animalia. Em outras palavras, é a categoria que sobrou quando a
          taxonomia clássica organizou os demais reinos — daí a expressão popular
          "caixa de fragmentos". Seus integrantes <strong>não compartilham um único
          ancestral comum exclusivo</strong>, o que os distingue de um grupo
          monofilético.
        </p>

        <p>
          Apesar da heterogeneidade, todos os protistas são{" "}
          <strong>eucariotos</strong>: possuem núcleo verdadeiro, delimitado por
          membrana nuclear, além de organelas membranosas (mitocôndrias, retículo
          endoplasmático, complexo de Golgi etc.). A diversidade do grupo inclui
          formas <strong>unicelulares e pluricelulares simples</strong>, organismos{" "}
          <strong>autotróficos e heterotróficos</strong>, seres de vida livre e
          parasitas obrigatórios.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Eucariotos</h3>
            <p>Núcleo organizado, envolto por membrana; organelas complexas.</p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Predominantemente aquáticos</h3>
            <p>Água doce, salgada ou ambientes úmidos; poucos terrestres.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Algas — autótrofas</h3>
            <p>Realizam fotossíntese; base das cadeias alimentares aquáticas.</p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Protozoários — heterotrófos</h3>
            <p>Fagocitam bactérias, matéria orgânica ou parasitam hospedeiros.</p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Uni e pluricelulares</h3>
            <p>Organismos unicelulares, coloniais ou pluricelulares simples.</p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Grupo polifilético</h3>
            <p>Não formam clado natural — "tudo que sobrou" entre os eucariotos.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Polifilético vs. Monofilético — pegadinha do ENEM</h3>
          <p>
            Um grupo <strong>monofilético</strong> inclui um ancestral comum e{" "}
            <em>todos</em> os seus descendentes (ex.: Mammalia). Um grupo{" "}
            <strong>polifilético</strong> reúne organismos de linhagens
            evolutivas distintas, sem ancestral comum exclusivo. O Protoctista é
            o exemplo clássico de grupo polifilético no vestibular.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Protozoários — Locomoção</span>

        <h2>2. Protozoários: Classificação pela Locomoção</h2>

        <p>
          Os <strong>protozoários</strong> são eucariontes unicelulares
          heterotróficos. Classicamente, são divididos em quatro grupos de acordo
          com o <strong>tipo de estrutura locomotora</strong>. Essa classificação,
          embora não totalmente filogenética, ainda é amplamente cobrada em
          vestibulares e no ENEM para associar o grupo ao organismo parasita.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 740 260"
            width="740"
            height="260"
            aria-label="Quatro grupos de protozoários por estrutura de locomoção"
          >
            {/* Sarcodíneos */}
            <rect x={10} y={20} width={165} height={220} rx={14} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.8} />
            <text x={92} y={50} textAnchor="middle" fontSize={14} fontWeight={800} fill="#92400e">Sarcodíneos</text>
            <text x={92} y={70} textAnchor="middle" fontSize={11} fill="#78350f">(Rizópodes)</text>
            {/* ameba com pseudópodes */}
            <ellipse cx={92} cy={130} rx={38} ry={28} fill="#fcd34d" stroke="#f59e0b" strokeWidth={1.5} />
            <path d="M 118 118 Q 140 100 145 115 Q 140 130 118 125" fill="#fcd34d" stroke="#f59e0b" strokeWidth={1.2} />
            <path d="M 92 102 Q 90 75 102 73 Q 112 75 108 102" fill="#fcd34d" stroke="#f59e0b" strokeWidth={1.2} />
            <path d="M 58 130 Q 32 122 30 135 Q 32 148 58 140" fill="#fcd34d" stroke="#f59e0b" strokeWidth={1.2} />
            <circle cx={96} cy={125} r={7} fill="white" stroke="#f59e0b" strokeWidth={1} />
            <text x={92} y={181} textAnchor="middle" fontSize={11} fill="#78350f">Pseudópodes</text>
            <text x={92} y={197} textAnchor="middle" fontSize={10} fill="#92400e">Ex.:</text>
            <text x={92} y={212} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#92400e">Entamoeba</text>
            <text x={92} y={228} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#92400e">histolytica</text>

            {/* Flagelados */}
            <rect x={190} y={20} width={165} height={220} rx={14} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.8} />
            <text x={272} y={50} textAnchor="middle" fontSize={14} fontWeight={800} fill="#4c1d95">Flagelados</text>
            <text x={272} y={70} textAnchor="middle" fontSize={11} fill="#5b21b6">(Mastigóforos)</text>
            {/* célula com flagelo */}
            <ellipse cx={272} cy={135} rx={28} ry={20} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} />
            <path d="M 272 115 Q 270 90 260 70 Q 255 55 265 50 Q 275 48 272 65 Q 270 80 272 95" fill="none" stroke="#7c3aed" strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={276} cy={130} r={5} fill="white" stroke="#7c3aed" strokeWidth={1} />
            <text x={272} y={181} textAnchor="middle" fontSize={11} fill="#4c1d95">Flagelos</text>
            <text x={272} y={197} textAnchor="middle" fontSize={10} fill="#4c1d95">Ex.:</text>
            <text x={272} y={212} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4c1d95">Trypanosoma</text>
            <text x={272} y={227} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4c1d95">Leishmania</text>
          </svg>
          <svg
            viewBox="0 0 400 260"
            width="400"
            height="260"
            aria-label="Ciliados e esporozoários"
          >
            {/* Ciliados */}
            <rect x={10} y={20} width={165} height={220} rx={14} fill="#d1fae5" stroke="#059669" strokeWidth={1.8} />
            <text x={92} y={50} textAnchor="middle" fontSize={14} fontWeight={800} fill="#064e3b">Ciliados</text>
            <text x={92} y={70} textAnchor="middle" fontSize={11} fill="#065f46">(Cilióforos)</text>
            {/* paramecium com cílios */}
            <ellipse cx={92} cy={135} rx={32} ry={22} fill="#6ee7b7" stroke="#059669" strokeWidth={1.5} />
            {[0,1,2,3,4,5,6,7].map((i) => {
              const angle = (i / 8) * Math.PI * 2;
              const bx = 92 + 32 * Math.cos(angle);
              const by = 135 + 22 * Math.sin(angle);
              const ex = 92 + 46 * Math.cos(angle);
              const ey = 135 + 36 * Math.sin(angle);
              return <line key={i} x1={bx} y1={by} x2={ex} y2={ey} stroke="#059669" strokeWidth={1.5} />;
            })}
            <circle cx={88} cy={130} r={6} fill="white" stroke="#059669" strokeWidth={1} />
            <text x={92} y={181} textAnchor="middle" fontSize={11} fill="#064e3b">Cílios</text>
            <text x={92} y={197} textAnchor="middle" fontSize={10} fill="#064e3b">Ex.:</text>
            <text x={92} y={212} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#064e3b">Paramecium</text>
            <text x={92} y={227} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#064e3b">caudatum</text>

            {/* Esporozoários */}
            <rect x={190} y={20} width={165} height={220} rx={14} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.8} />
            <text x={272} y={50} textAnchor="middle" fontSize={14} fontWeight={800} fill="#7f1d1d">Esporozoários</text>
            <text x={272} y={70} textAnchor="middle" fontSize={11} fill="#991b1b">(Apicomplexa)</text>
            {/* célula simples sem estrutura locomotora */}
            <ellipse cx={272} cy={135} rx={30} ry={22} fill="#fca5a5" stroke="#dc2626" strokeWidth={1.5} />
            <circle cx={272} cy={135} r={8} fill="white" stroke="#dc2626" strokeWidth={1} />
            <text x={272} y={95} textAnchor="middle" fontSize={10} fill="#7f1d1d">sem</text>
            <text x={272} y={108} textAnchor="middle" fontSize={10} fill="#7f1d1d">locomoção</text>
            <text x={272} y={181} textAnchor="middle" fontSize={11} fill="#7f1d1d">Sem estrutura</text>
            <text x={272} y={197} textAnchor="middle" fontSize={10} fill="#7f1d1d">Ex.:</text>
            <text x={272} y={212} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#7f1d1d">Plasmodium</text>
            <text x={272} y={227} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#7f1d1d">Toxoplasma</text>
          </svg>
          <figcaption>
            Os quatro grupos de protozoários classificados pela estrutura de locomoção.
            Esporozoários não possuem organela locomotora — são exclusivamente parasitas intracelulares.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Locomoção</th>
                <th>Principais parasitas</th>
                <th>Doença associada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sarcodíneos</strong> (Rizópodes)</td>
                <td>Pseudópodes</td>
                <td><em>Entamoeba histolytica</em></td>
                <td>Amebíase</td>
              </tr>
              <tr>
                <td><strong>Flagelados</strong> (Mastigóforos)</td>
                <td>Flagelos</td>
                <td><em>Trypanosoma cruzi</em>, <em>Leishmania</em> spp., <em>Giardia lamblia</em>, <em>Trichomonas vaginalis</em></td>
                <td>Chagas, Leishmaniose, Giardíase, Tricomoníase</td>
              </tr>
              <tr>
                <td><strong>Ciliados</strong> (Cilióforos)</td>
                <td>Cílios</td>
                <td><em>Balantidium coli</em>, <em>Paramecium caudatum</em> (vida livre)</td>
                <td>Balantidíase (rara em humanos)</td>
              </tr>
              <tr>
                <td><strong>Esporozoários</strong> (Apicomplexa)</td>
                <td>Ausente — parasitas intracelulares</td>
                <td><em>Plasmodium</em> spp., <em>Toxoplasma gondii</em></td>
                <td>Malária, Toxoplasmose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Algas</span>

        <h2>3. Algas — Os Grandes Produtores Fotossintetizantes</h2>

        <p>
          As <strong>algas</strong> são organismos predominantemente aquáticos
          (marinhos ou de água doce) que realizam <strong>fotossíntese
          oxigênica</strong>. Diferentemente das plantas, não possuem raízes,
          caules, folhas ou tecidos vasculares verdadeiros. Podem ser{" "}
          <strong>unicelulares</strong> (diatomáceas, euglenas, dinoflagelados),{" "}
          <strong>coloniais</strong> (<em>Volvox</em>) ou{" "}
          <strong>pluricelulares</strong> (kelps, alga-marinha, ulva).
        </p>

        <p>
          A classificação mais importante para o ENEM é baseada nos{" "}
          <strong>pigmentos fotossintetizantes</strong> predominantes e nas
          substâncias de reserva. Cada grupo possui pigmentos específicos que
          determinam a cor característica e permitem captar diferentes
          comprimentos de onda da luz — fator decisivo para a profundidade em
          que cada grupo habita nos oceanos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Clorofíceas — Algas Verdes</h3>
            <p>
              <strong>Pigmentos:</strong> clorofila <em>a</em> e <em>b</em>. Reserva:
              amido. Ancestrais das plantas terrestres. Exemplos: <em>Chlorella</em>,{" "}
              <em>Spirogyra</em>, <em>Chlamydomonas</em>, <em>Volvox</em>, ulva.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔴</span>
            <h3>Rodofíceas — Algas Vermelhas</h3>
            <p>
              <strong>Pigmentos:</strong> ficoeritrina (vermelha) + clorofila <em>a</em>.
              Reserva: amido das florídeas. Principalmente marinhas e profundas.
              Fonte de <strong>ágar</strong> e carragenina. Ex.: <em>Porphyra</em>, <em>Gelidium</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🟤</span>
            <h3>Feofíceas — Algas Pardas</h3>
            <p>
              <strong>Pigmentos:</strong> fucoxantina (marrom) + clorofila <em>a</em> e <em>c</em>.
              Reserva: laminarina. As maiores algas do mundo (<em>kelps</em>, até 60 m).
              Ex.: <em>Sargassum</em>, <em>Fucus</em>, <em>Laminaria</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🟡</span>
            <h3>Diatomáceas (Chrysophyta)</h3>
            <p>
              <strong>Parede celular de sílica</strong> (sílica-gel). Reserva: crisolaminarina e óleo.
              Componente crucial do fitoplâncton marinho. Depósitos de diatomita têm uso industrial.
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>Euglenófitas — Euglenas</h3>
            <p>
              Organismos <strong>mixotróficos</strong>: fotossíntese na luz e
              heterotrofia no escuro. Possuem flagelo, estigma (ponto de luz) e
              cloroplastos. Unicelulares de água doce. Ex.: <em>Euglena viridis</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌀</span>
            <h3>Dinoflagelados (Pyrrophyta)</h3>
            <p>
              Dois flagelos perpendiculares. Responsáveis pela{" "}
              <strong>maré vermelha</strong> — proliferação explosiva com liberação
              de toxinas que matam peixes e contaminam moluscos filtradores.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Pigmento característico</th>
                <th>Substância de reserva</th>
                <th>Parede celular</th>
                <th>Destaque/uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clorofíceas</strong> (verdes)</td>
                <td>Clorofila <em>a</em> e <em>b</em></td>
                <td>Amido</td>
                <td>Celulose</td>
                <td>Ancestrais das plantas; biocombustível</td>
              </tr>
              <tr>
                <td><strong>Rodofíceas</strong> (vermelhas)</td>
                <td>Ficoeritrina + clorofila <em>a</em></td>
                <td>Amido das florídeas</td>
                <td>Celulose + ágar</td>
                <td>Ágar (microbiologia), carragenina (alimentos)</td>
              </tr>
              <tr>
                <td><strong>Feofíceas</strong> (pardas)</td>
                <td>Fucoxantina + clorofila <em>a</em>/<em>c</em></td>
                <td>Laminarina, manitol</td>
                <td>Celulose + alginato</td>
                <td>Alginato (sorvete, cosméticos); maior biomassa</td>
              </tr>
              <tr>
                <td><strong>Diatomáceas</strong></td>
                <td>Fucoxantina + clorofila <em>a</em>/<em>c</em></td>
                <td>Crisolaminarina, óleos</td>
                <td>Sílica (frústula)</td>
                <td>Diatomita (filtros); fitoplâncton dominante</td>
              </tr>
              <tr>
                <td><strong>Euglenófitas</strong></td>
                <td>Clorofila <em>a</em> e <em>b</em></td>
                <td>Paramilo</td>
                <td>Película proteica</td>
                <td>Organismos mixotróficos; sem parede celular típica</td>
              </tr>
              <tr>
                <td><strong>Dinoflagelados</strong></td>
                <td>Peridinina + clorofila <em>a</em>/<em>c</em></td>
                <td>Amido, óleos</td>
                <td>Celulose (teca)</td>
                <td>Maré vermelha; bioluminescência</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Maré Vermelha — fenômeno de atenção</h3>
          <p>
            A <strong>floração de dinoflagelados</strong> (bloom), favorecida por
            altas temperaturas e excesso de nutrientes (eutrofização), colore a
            água de vermelho-acastanhado e libera <strong>saxitoxinas</strong> e
            outras toxinas. Moluscos bivalves (mexilhões, ostras) filtram e
            acumulam essas toxinas — o consumo humano pode causar{" "}
            <strong>paralisia respiratória e morte</strong>. A vigilância
            ambiental monitora regularmente as praias durante surtos de maré
            vermelha.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fitoplâncton</span>

        <h2>4. Importância Ecológica do Fitoplâncton — O Pulmão dos Oceanos</h2>

        <p>
          O <strong>fitoplâncton</strong> é o conjunto de microrganismos
          fotossintetizantes (principalmente diatomáceas, dinoflagelados,
          cianobactérias e outras algas unicelulares) que deriva nas camadas
          superficiais dos oceanos e corpos d'água. Apesar do tamanho microscópico,
          o fitoplâncton é responsável por{" "}
          <strong>50% a 70% de todo o oxigênio produzido na Terra</strong> — mais do
          que todas as florestas terrestres combinadas.
        </p>

        <div className="lesson-highlight">
          <h3>Funções ecológicas do fitoplâncton</h3>
          <ul>
            <li>
              <strong>Produção primária aquática:</strong> é a base da cadeia
              alimentar dos oceanos — zooplâncton alimenta-se de fitoplâncton,
              que alimenta peixes pequenos, grandes predadores e baleias;
            </li>
            <li>
              <strong>Fixação de CO₂:</strong> fixa bilhões de toneladas de
              dióxido de carbono anualmente, regulando o clima global;
            </li>
            <li>
              <strong>Produção de O₂:</strong> gera oxigênio dissolvido para os
              ecossistemas aquáticos e oxigênio gasoso para a atmosfera;
            </li>
            <li>
              <strong>Ciclo do nitrogênio e do fósforo:</strong> participa da
              reciclagem dos nutrientes nos ecossistemas aquáticos.
            </li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Ameaça das mudanças climáticas</h3>
            <p>
              O aquecimento dos oceanos reduz a densidade das águas superficiais,
              diminuindo a mistura vertical que leva nutrientes do fundo para a
              superfície — isso reduz a produtividade do fitoplâncton.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>
            <h3>Eutrofização x Floração</h3>
            <p>
              Excesso de nutrientes (esgoto, fertilizantes) estimula explosão
              reprodutiva de algas (floração), que ao morrer consomem o O₂
              dissolvido, causando mortandade de peixes — zona morta.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Malária</span>

        <h2>5. Malária — Ciclo do <em>Plasmodium</em> e o Mosquito <em>Anopheles</em></h2>

        <p>
          A <strong>malária</strong> (paludismo ou impaludismo) é causada por
          protozoários esporozoários do gênero <em>Plasmodium</em>. As quatro
          espécies que infectam humanos são: <em>P. falciparum</em> (mais letal,
          causa malária cerebral), <em>P. vivax</em> (mais prevalente no Brasil,
          febre terçã benigna), <em>P. malariae</em> (febre quartã) e{" "}
          <em>P. ovale</em> (rara, África). A transmissão ocorre pela picada da{" "}
          <strong>fêmea do mosquito <em>Anopheles</em></strong> (macho não
          pica — alimenta-se de néctar).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 740 340"
            width="740"
            height="340"
            aria-label="Ciclo de vida do Plasmodium no humano e no mosquito Anopheles"
          >
            {/* Fundo: humano */}
            <rect x={10} y={10} width={340} height={320} rx={18} fill="#fef9ec" stroke="#f59e0b" strokeWidth={1.8} />
            <text x={180} y={38} textAnchor="middle" fontSize={15} fontWeight={800} fill="#92400e">Hospedeiro Humano</text>

            {/* Fundo: mosquito */}
            <rect x={390} y={10} width={340} height={320} rx={18} fill="#f0fdf4" stroke="#16a34a" strokeWidth={1.8} />
            <text x={560} y={38} textAnchor="middle" fontSize={15} fontWeight={800} fill="#166534">Mosquito Anopheles ♀</text>

            {/* ---- CICLO HUMANO ---- */}
            {/* Etapa 1: esporozoítos → fígado */}
            <circle cx={100} cy={90} r={26} fill="#fde68a" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={100} y={87} textAnchor="middle" fontSize={9} fontWeight={700} fill="#92400e">Fígado</text>
            <text x={100} y={100} textAnchor="middle" fontSize={8} fill="#78350f">merozoítos</text>

            {/* Etapa 2: merozoítos → hemácias */}
            <circle cx={240} cy={90} r={26} fill="#fca5a5" stroke="#dc2626" strokeWidth={1.5} />
            <text x={240} y={87} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7f1d1d">Hemácias</text>
            <text x={240} y={100} textAnchor="middle" fontSize={8} fill="#991b1b">ruptura cíclica</text>

            {/* Etapa 3: gametócitos */}
            <circle cx={240} cy={220} r={26} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={240} y={217} textAnchor="middle" fontSize={9} fontWeight={700} fill="#4c1d95">Gameto</text>
            <text x={240} y={230} textAnchor="middle" fontSize={8} fill="#5b21b6">citos</text>

            {/* setas ciclo humano */}
            <path d="M 126 90 L 212 90" fill="none" stroke="#f59e0b" strokeWidth={2} markerEnd="url(#arr1)" />
            <path d="M 240 117 L 240 192" fill="none" stroke="#dc2626" strokeWidth={2} markerEnd="url(#arr2)" />
            <text x={170} y={80} textAnchor="middle" fontSize={8} fill="#92400e">merozoítos</text>
            <text x={254} y={158} textAnchor="middle" fontSize={8} fill="#7f1d1d">gametócitos</text>

            {/* esporozoítos entram pelo mosquito */}
            <path d="M 100 64 L 100 50 Q 100 20 180 20" fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="6 3" />
            <text x={120} y={48} fontSize={8} fill="#166534">esporozoítos inoculados</text>

            {/* gametócitos sugados */}
            <path d="M 266 220 Q 360 220 390 180" fill="none" stroke="#7c3aed" strokeWidth={1.5} strokeDasharray="6 3" />
            <text x={330} y={248} fontSize={8} fill="#4c1d95">sugados pelo mosquito</text>

            {/* ---- CICLO MOSQUITO ---- */}
            <circle cx={480} cy={90} r={26} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <text x={480} y={87} textAnchor="middle" fontSize={9} fontWeight={700} fill="#064e3b">Fecundação</text>
            <text x={480} y={100} textAnchor="middle" fontSize={8} fill="#166534">zigoto</text>

            <circle cx={620} cy={90} r={26} fill="#a7f3d0" stroke="#059669" strokeWidth={1.5} />
            <text x={620} y={87} textAnchor="middle" fontSize={9} fontWeight={700} fill="#064e3b">Oocisto</text>
            <text x={620} y={100} textAnchor="middle" fontSize={8} fill="#166534">parede do intestino</text>

            <circle cx={620} cy={220} r={26} fill="#6ee7b7" stroke="#10b981" strokeWidth={1.5} />
            <text x={620} y={217} textAnchor="middle" fontSize={9} fontWeight={700} fill="#064e3b">Esporozoítos</text>
            <text x={620} y={230} textAnchor="middle" fontSize={8} fill="#166534">glândulas salivares</text>

            <path d="M 506 90 L 592 90" fill="none" stroke="#059669" strokeWidth={2} />
            <polygon points="592,86 604,90 592,94" fill="#059669" />
            <path d="M 620 117 L 620 192" fill="none" stroke="#10b981" strokeWidth={2} />
            <polygon points="616,192 620,204 624,192" fill="#10b981" />

            <text x={548} y={80} textAnchor="middle" fontSize={8} fill="#064e3b">divisão</text>
            <text x={635} y={158} textAnchor="middle" fontSize={8} fill="#064e3b">esporulação</text>

            {/* setas defs */}
            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
              </marker>
            </defs>

            {/* legenda */}
            <text x={180} y={290} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#92400e">
              Febre terçã: ruptura das hemácias a cada 48 h (P. vivax)
            </text>
            <text x={560} y={290} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#166534">
              Ciclo sexuado ocorre no mosquito (hospedeiro definitivo)
            </text>
          </svg>
          <figcaption>
            Ciclo do <em>Plasmodium</em>: o humano é o hospedeiro intermediário (ciclo assexuado —
            esquizogonia); o mosquito <em>Anopheles</em> fêmea é o hospedeiro definitivo (ciclo
            sexuado — esporogonia). Os acessos febris ocorrem com a ruptura cíclica das hemácias.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Sintomas e diagnóstico</h3>
          <p>
            A tríade clássica da malária é: <strong>febre alta, calafrios e
            sudorese intensa</strong>, de modo cíclico. Ocorre{" "}
            <strong>anemia hemolítica</strong> (destruição das hemácias) e pode
            haver icterícia, esplenomegalia e hepatomegalia. A{" "}
            <em>P. falciparum</em> causa obstrução dos capilares cerebrais
            (malária cerebral) — potencialmente fatal se não tratada em 24 h.
            O diagnóstico é feito pelo <strong>exame de gota espessa</strong>
            (visualização do parasita no sangue).
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Profilaxia e tratamento</h3>
          <ul>
            <li>Eliminação de criadouros de mosquitos (água parada);</li>
            <li>Uso de mosquiteiros impregnados com inseticida e repelentes;</li>
            <li>Telas em janelas e portas;</li>
            <li>Quimioprofilaxia com cloroquina ou mefloquina para viajantes;</li>
            <li>Tratamento com cloroquina + primaquina; artemisinina para <em>P. falciparum</em>.</li>
          </ul>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Doença de Chagas e Leishmaniose</span>

        <h2>6. Doença de Chagas e Leishmaniose — Flagelados Parasitas</h2>

        <p>
          Ambas são causadas por flagelados da família <em>Trypanosomatidae</em>
          e figuram entre as <strong>doenças negligenciadas</strong> mais
          importantes do Brasil. Compartilham características estruturais (presença
          de cinetoplasto — organela mitocondrial exclusiva da família), mas diferem
          em agente, vetor e manifestação clínica.
        </p>

        <div className="lesson-figure-row">
          <div className="lesson-card">
            <span>🫀</span>
            <h3>Doença de Chagas</h3>
            <p>
              <strong>Agente:</strong> <em>Trypanosoma cruzi</em>.<br />
              <strong>Vetor:</strong> triatomíneo (<em>Triatoma infestans</em>) — o "barbeiro".<br />
              <strong>Mecanismo:</strong> o barbeiro pica e <em>defeca</em> no local;
              coçar introduz as tripomastigotas das fezes na pele ou mucosa.<br />
              <strong>Descoberta:</strong> Carlos Chagas (1909) — única vez em que
              um pesquisador descreveu agente, vetor, reservatório e doença simultaneamente.<br />
              <strong>Fases:</strong> aguda (sinal de Romaña — edema palpebral unilateral)
              e crônica (megacólon, megaesôfago, cardiomegalia).<br />
              <strong>Outras vias:</strong> transfusão sanguínea, via congênita (mãe-feto),
              via oral (caldo de cana e açaí contaminados com fezes de barbeiro).
            </p>
          </div>

          <div className="lesson-card">
            <span>🩹</span>
            <h3>Leishmaniose</h3>
            <p>
              <strong>Agente:</strong> <em>Leishmania braziliensis</em> (tegumentar) e{" "}
              <em>L. chagasi</em> / <em>L. infantum</em> (visceral — calazar).<br />
              <strong>Vetor:</strong> fêmea de flebotomíneo (mosquito-palha, birigui).<br />
              <strong>Tegumentar:</strong> úlceras na pele e mucosas (úlcera de Bauru);
              pode destruir cartilagem nasal e palato (forma mucocutânea).<br />
              <strong>Visceral (calazar):</strong> acomete fígado, baço e medula óssea;
              febre prolongada, emagrecimento, anemia grave, hepatoesplenomegalia;
              fatal se não tratada.<br />
              <strong>Reservatório urbano:</strong> cão doméstico (<em>L. chagasi</em>);
              reservatórios silvestres: roedores, tatus, raposas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Outras Protozooses</span>

        <h2>7. Amebíase, Giardíase e Toxoplasmose</h2>

        <p>
          Além das grandes protozooses vetoriais, o ENEM cobra com frequência
          protozooses de <strong>transmissão fecal-oral</strong> (amebíase e
          giardíase) e a <strong>toxoplasmose</strong>, especialmente seu risco
          para gestantes. O denominador comum é a falta de saneamento básico e
          higiene inadequada.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Doença</th>
                <th>Agente</th>
                <th>Grupo / Locomoção</th>
                <th>Transmissão</th>
                <th>Sintomas principais</th>
                <th>Risco especial</th>
                <th>Prevenção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Malária</strong></td>
                <td><em>Plasmodium</em> spp.</td>
                <td>Esporozoário</td>
                <td>Picada de <em>Anopheles</em> ♀</td>
                <td>Febre cíclica, anemia, calafrios</td>
                <td>Malária cerebral (<em>P. falciparum</em>)</td>
                <td>Mosquiteiro, eliminar criadouros</td>
              </tr>
              <tr>
                <td><strong>Doença de Chagas</strong></td>
                <td><em>Trypanosoma cruzi</em></td>
                <td>Flagelado</td>
                <td>Fezes do barbeiro; oral; transfusão</td>
                <td>Sinal de Romaña, cardiopatia crônica</td>
                <td>Grávidas (transmissão congênita)</td>
                <td>Controle do barbeiro, triagem no banco de sangue</td>
              </tr>
              <tr>
                <td><strong>Leishmaniose tegumentar</strong></td>
                <td><em>Leishmania braziliensis</em></td>
                <td>Flagelado</td>
                <td>Picada do flebotomíneo</td>
                <td>Úlceras na pele e mucosas</td>
                <td>Destruição de cartilagem (forma mucocutânea)</td>
                <td>Repelente, telas, controle do vetor</td>
              </tr>
              <tr>
                <td><strong>Leishmaniose visceral (calazar)</strong></td>
                <td><em>L. chagasi</em></td>
                <td>Flagelado</td>
                <td>Picada do flebotomíneo</td>
                <td>Febre, emagrecimento, hepatoesplenomegalia</td>
                <td>Fatal sem tratamento; crianças e imunocomprometidos</td>
                <td>Controle do cão, combate ao vetor</td>
              </tr>
              <tr>
                <td><strong>Amebíase</strong></td>
                <td><em>Entamoeba histolytica</em></td>
                <td>Sarcodíneo (pseudópodes)</td>
                <td>Fecal-oral (água/alimentos contaminados)</td>
                <td>Diarreia com sangue e muco (disenteria)</td>
                <td>Abscesso hepático amebiano</td>
                <td>Saneamento básico, higiene alimentar</td>
              </tr>
              <tr>
                <td><strong>Giardíase</strong></td>
                <td><em>Giardia lamblia</em></td>
                <td>Flagelado</td>
                <td>Fecal-oral; água contaminada</td>
                <td>Diarreia, flatulência, má absorção</td>
                <td>Desnutrição em crianças (má absorção)</td>
                <td>Tratamento da água, higiene</td>
              </tr>
              <tr>
                <td><strong>Toxoplasmose</strong></td>
                <td><em>Toxoplasma gondii</em></td>
                <td>Esporozoário</td>
                <td>Fezes de gato; carne crua; congênita</td>
                <td>Assintomática ou leve em imunocompetentes</td>
                <td>Gestantes: lesões fetais graves (hidrocefalia)</td>
                <td>Cozinhar carne, evitar fezes de gato na gravidez</td>
              </tr>
              <tr>
                <td><strong>Tricomoníase</strong></td>
                <td><em>Trichomonas vaginalis</em></td>
                <td>Flagelado</td>
                <td>Sexual (IST)</td>
                <td>Corrimento, prurido, inflamação genital</td>
                <td>Pode facilitar transmissão do HIV</td>
                <td>Uso de preservativo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Toxoplasmose e gravidez — atenção máxima</h3>
          <p>
            O <em>Toxoplasma gondii</em> tem o gato como <strong>hospedeiro
            definitivo</strong> (onde ocorre o ciclo sexuado e são produzidos
            os oocistos eliminados nas fezes). Humanos são hospedeiros
            intermediários. Quando uma gestante se infecta pela primeira vez
            durante a gravidez, o parasita pode atravessar a placenta e causar
            no feto: <strong>hidrocefalia, calcificações cerebrais,
            coriorretinite e morte fetal</strong>. O pré-natal inclui exame
            sorológico (IgM e IgG) para detectar infecção ativa.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e Contexto ENEM</span>

        <h2>8. Pontos Críticos para o ENEM e Vestibulares</h2>

        <p>
          O ENEM valoriza a <strong>interpretação contextualizada</strong>: não basta
          memorizar nomes — é preciso compreender os ciclos, os vetores e as
          implicações epidemiológicas e ecológicas. As correlações mais cobradas são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦟</span>
            <h3>Vetor vs. Hospedeiro</h3>
            <p>
              <strong>Vetor biológico</strong> é o organismo que transmite e no
              qual o parasita completa parte do ciclo. <em>Anopheles</em> é o
              hospedeiro <em>definitivo</em> da malária (ciclo sexuado ocorre
              no mosquito, não no humano).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧫</span>
            <h3>Saneamento como profilaxia</h3>
            <p>
              Amebíase, giardíase e parte da toxoplasmose dependem da
              contaminação fecal da água. Saneamento básico (tratamento de
              esgoto e água) é a principal medida de controle dessas doenças.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Fitoplâncton e CO₂</h3>
            <p>
              Questões de ecologia e mudanças climáticas frequentemente associam
              a redução do fitoplâncton ao agravamento do efeito estufa —
              menor fixação de CO₂ e menor produção de O₂.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Pigmentos e profundidade</h3>
            <p>
              A cor dos pigmentos das algas determina os comprimentos de onda
              absorvidos. Algas vermelhas (ficoeritrina) absorvem verde-azul,
              permitindo fotossíntese em maior profundidade — a luz vermelha
              é absorvida nas camadas superiores.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Resumão: associações essenciais</h3>
          <ul>
            <li><strong>Malária</strong> → <em>Plasmodium</em> (esporozoário) + <em>Anopheles</em> ♀ → febre cíclica, hemácias.</li>
            <li><strong>Chagas</strong> → <em>Trypanosoma cruzi</em> (flagelado) + barbeiro (triatomíneo) → cardiopatia crônica.</li>
            <li><strong>Leishmaniose</strong> → <em>Leishmania</em> (flagelado) + flebotomíneo → tegumentar ou visceral (calazar).</li>
            <li><strong>Amebíase</strong> → <em>Entamoeba histolytica</em> (sarcodíneo) → transmissão fecal-oral.</li>
            <li><strong>Giardíase</strong> → <em>Giardia lamblia</em> (flagelado) → má absorção, água contaminada.</li>
            <li><strong>Toxoplasmose</strong> → <em>Toxoplasma gondii</em> (esporozoário) → gato (hospedeiro definitivo), risco gestacional.</li>
            <li><strong>Algas verdes</strong> → ancestrais das plantas; clorofila a+b; reserva = amido.</li>
            <li><strong>Algas vermelhas</strong> → ficoeritrina; ágar; profundas.</li>
            <li><strong>Algas pardas</strong> → fucoxantina; maiores algas (kelps).</li>
            <li><strong>Diatomáceas</strong> → parede de sílica; fitoplâncton dominante.</li>
            <li><strong>Dinoflagelados</strong> → maré vermelha; bioluminescência.</li>
          </ul>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Grupos de algas por pigmento"
          statement={
            <p>
              As algas são classificadas, entre outros critérios, pelo pigmento
              fotossintetizante predominante. Associe corretamente o grupo ao
              pigmento e ao uso econômico: o grupo que possui{" "}
              <strong>ficoeritrina</strong> como pigmento acessório e é fonte
              de <strong>ágar</strong> corresponde a:
            </p>
          }
          options={[
            { letter: "a", text: "Chlorophyta (algas verdes), pois possuem clorofila a e b" },
            { letter: "b", text: "Phaeophyta (algas pardas), pois possuem fucoxantina e formam os kelps" },
            { letter: "c", text: "Rhodophyta (algas vermelhas), pois possuem ficoeritrina e fornecem ágar", correct: true },
            { letter: "d", text: "Dinoflagelados (Pyrrophyta), pois possuem peridinina e causam maré vermelha" },
          ]}
          resolution={
            <p>
              As <strong>Rhodophyta</strong> (algas vermelhas) possuem{" "}
              <strong>ficoeritrina</strong> como pigmento acessório (responsável
              pela cor avermelhada) além de clorofila <em>a</em>. Sua parede
              celular é rica em <strong>ágar</strong>, polissacarídeo amplamente
              usado em microbiologia para solidificar meios de cultura, e em
              carragenina, usada na indústria alimentícia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ciclo da malária e hospedeiro definitivo"
          statement={
            <p>
              No ciclo de vida do <em>Plasmodium</em>, o mosquito <em>Anopheles</em>{" "}
              é considerado o <strong>hospedeiro definitivo</strong> porque:
            </p>
          }
          options={[
            { letter: "a", text: "É onde ocorre a ruptura das hemácias e os acessos febris" },
            { letter: "b", text: "É onde o parasita realiza o ciclo sexuado (formação dos gametócitos e zigoto)", correct: true },
            { letter: "c", text: "Possui sistema imune incapaz de destruir o Plasmodium" },
            { letter: "d", text: "Serve apenas como vetor mecânico, sem participar do ciclo biológico" },
          ]}
          resolution={
            <p>
              O <strong>hospedeiro definitivo</strong> é aquele em que o parasita
              realiza o <strong>ciclo sexuado</strong>. No mosquito{" "}
              <em>Anopheles</em> fêmea, os gametócitos sugados do humano se
              fundem, formando o zigoto (oocineto), que se desenvolve em oocisto
              e gera esporozoítos. No humano (hospedeiro intermediário) ocorre
              apenas o ciclo assexuado (esquizogonia).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Euglena — organismo mixotrófico"
          statement={
            <p>
              A <em>Euglena viridis</em> é classificada no Reino Protoctista e
              apresenta comportamento mixotrófico. Em um experimento, culturas de{" "}
              <em>Euglena</em> foram mantidas em ausência total de luz por 30 dias.
              Qual o resultado esperado e por quê?
            </p>
          }
          options={[
            { letter: "a", text: "Morrem imediatamente, pois dependem exclusivamente da fotossíntese" },
            { letter: "b", text: "Sobrevivem heterotroficamente, absorvendo matéria orgânica do meio, mas perdem os cloroplastos progressivamente", correct: true },
            { letter: "c", text: "Aumentam a taxa fotossintética para compensar a ausência de luz" },
            { letter: "d", text: "Transformam-se em bactérias heterotróficas para se adaptar ao ambiente escuro" },
          ]}
          resolution={
            <p>
              <em>Euglena</em> é <strong>mixotrófica</strong>: na presença de
              luz realiza fotossíntese (autotrofia); no escuro, absorve matéria
              orgânica dissolvida (heterotrofia osmotrófica). Sem luz por tempo
              prolongado, os cloroplastos são perdidos progressivamente (processo
              reversível na maioria das cepas quando a luz retorna). Isso
              exemplifica a plasticidade metabólica única desse organismo —
              e é motivo de debate sobre sua classificação, já que une
              características de algas e protozoários.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Fitoplâncton e mudanças climáticas (contexto ENEM)"
          statement={
            <p>
              Um relatório científico publicado em 2023 alertou que o aquecimento
              global reduziu em 6% a biomassa do fitoplâncton oceânico nas últimas
              décadas. Considerando o papel ecológico desses organismos, qual seria
              a consequência mais direta e grave dessa redução para o planeta?
            </p>
          }
          options={[
            { letter: "a", text: "Aumento da salinidade dos oceanos, dificultando a dessalinização da água" },
            { letter: "b", text: "Redução na produção de oxigênio atmosférico e menor fixação de CO₂, intensificando o efeito estufa", correct: true },
            { letter: "c", text: "Desaparecimento das correntes marítimas, alterando o regime de chuvas" },
            { letter: "d", text: "Extinção dos corais, por perda de simbiose com dinoflagelados (zooxantelas)" },
          ]}
          resolution={
            <p>
              O fitoplâncton é responsável por <strong>50% a 70% do oxigênio
              atmosférico</strong> e fixa bilhões de toneladas de CO₂ por ano
              (bomba biológica de carbono). Sua redução diminui a produção de O₂
              e aumenta o CO₂ atmosférico, intensificando o efeito estufa — um
              ciclo de retroalimentação positiva que agrava o próprio aquecimento
              que causou a redução do fitoplâncton. A alternativa D descreve
              um efeito real mas secundário e não é a consequência "mais direta e
              grave".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Doença de Chagas — transmissão oral (caso real)"
          statement={
            <p>
              Em 2005, um surto de Doença de Chagas foi registrado em Santa
              Catarina após o consumo de caldo de cana contaminado. Diferentemente
              da transmissão clássica pelo barbeiro, nessa via oral o parasita
              penetra pela mucosa do trato digestivo. Com base nisso, é correto
              afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A transmissão oral dispensa a participação do Trypanosoma cruzi, pois a doença é causada pela toxina do barbeiro" },
            { letter: "b", text: "Apenas a transmissão vetorial (pelo barbeiro) é capaz de gerar a fase crônica da doença" },
            { letter: "c", text: "Na transmissão oral, o Trypanosoma cruzi presente nas fezes do barbeiro contamina o alimento e penetra pelas mucosas do hospedeiro", correct: true },
            { letter: "d", text: "O caldo de cana em si produz substâncias que imitam os sintomas da Doença de Chagas sem infecção parasitária" },
          ]}
          resolution={
            <p>
              A transmissão oral da Doença de Chagas ocorre quando{" "}
              <strong>triatomíneos (barbeiros) contaminam alimentos</strong>{" "}
              (caldo de cana, açaí, palmito) com suas fezes contendo{" "}
              <em>Trypanosoma cruzi</em> na forma tripomastigota metacíclica. Ao
              consumir o alimento, o parasita penetra pelas mucosas bucal e
              gastrointestinal. Essa via oral costuma causar forma aguda mais
              grave do que a vetorial clássica. O agente etiológico é sempre o
              mesmo: <em>T. cruzi</em>.
            </p>
          }
        />
      </section>
    </article>
  );
}
