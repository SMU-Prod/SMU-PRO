"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 26</span>

          <h1>Reino Fungi: Características, Classificação, Liquens e Micoses</h1>

          <p>
            Os fungos constituem um dos reinos mais fascinantes da vida: são
            eucariontes heterótrofos que decompõem florestas inteiras, formam
            parcerias vitais com raízes e algas, originaram o primeiro
            antibiótico da história e, ao mesmo tempo, causam micoses e
            intoxicações graves. Dominar este conteúdo é essencial para o ENEM
            e os vestibulares, pois aparece em questões de ecologia, saúde
            pública, biotecnologia e evolução.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>

        <h2>1. O Que São os Fungos</h2>

        <p>
          O Reino Fungi reúne mais de <strong>120 mil espécies descritas</strong>{" "}
          — e estima-se que existam de 1,5 a 5 milhões no total. Abrange desde{" "}
          <strong>leveduras unicelulares</strong> microscópicas até{" "}
          <strong>cogumelos macroscópicos</strong> e bolotas de pão. Apesar da
          aparência variada, todos compartilham um conjunto de características
          que os coloca em um reino exclusivo, separado de plantas, animais,
          bactérias e protistas.
        </p>

        <p>
          Os fungos são <strong>eucariontes</strong>: possuem núcleo
          individualizado por membrana nuclear e organelas como mitocôndrias e
          retículo endoplasmático. São <strong>heterótrofos por absorção</strong>:
          secretam enzimas digestivas no substrato, quebram as moléculas
          orgânicas externamente e absorvem os produtos da digestão — um processo
          chamado de <strong>digestão extracorpórea</strong>. A parede celular é
          constituída de <strong>quitina</strong> (a mesma substância da carapaça
          dos insetos e crustáceos), e a substância de reserva energética é o{" "}
          <strong>glicogênio</strong> — assim como nos animais, e não o amido
          das plantas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Eucariontes</h3>
            <p>Núcleo com membrana nuclear e organelas membranosas definidas.</p>
          </div>

          <div className="lesson-card">
            <span>🍴</span>
            <h3>Heterótrofos por absorção</h3>
            <p>Liberam enzimas no substrato e absorvem nutrientes já digeridos.</p>
          </div>

          <div className="lesson-card">
            <span>🧱</span>
            <h3>Parede de quitina</h3>
            <p>Polissacarídeo nitrogenado, diferente da celulose vegetal.</p>
          </div>

          <div className="lesson-card">
            <span>💾</span>
            <h3>Reserva: glicogênio</h3>
            <p>Não acumulam amido — igual aos animais.</p>
          </div>

          <div className="lesson-card">
            <span>🌑</span>
            <h3>Sem clorofila</h3>
            <p>Incapazes de fotossíntese; dependem de matéria orgânica pronta.</p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Ambiente úmido</h3>
            <p>Prosperam em locais úmidos, quentes e ricos em matéria orgânica.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção: fungos NÃO são plantas</h3>
          <p>
            Durante séculos os fungos foram classificados como plantas pela
            morfologia imóvel e enraizada. Hoje sabemos que são{" "}
            <strong>mais próximos dos animais do que das plantas</strong> na
            filogenia — ambos armazenam glicogênio, têm quitina (em fungos e
            artrópodes) e são heterótrofos. A separação em reino próprio é
            amplamente cobrada em vestibulares.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>

        <h2>2. Hifas, Micélio e Corpo de Frutificação</h2>

        <p>
          O corpo dos fungos pluricelulares é formado por filamentos
          microscópicos denominados <strong>hifas</strong>. Cada hifa é um
          tubo cilíndrico envolto por parede de quitina, cujo interior contém
          citoplasma, núcleos e organelas. O conjunto de hifas ramificadas forma
          o <strong>micélio</strong>, estrutura vegetativa responsável pela
          absorção de nutrientes.
        </p>

        <p>
          As hifas podem ser de dois tipos anatômicos. As{" "}
          <strong>hifas septadas</strong> apresentam septos (paredes divisórias)
          que separam células — embora com poros que permitem fluxo de
          citoplasma entre elas. As <strong>hifas cenocíticas</strong> (ou
          asseptadas) não têm septos: o citoplasma é contínuo e multinucleado,
          formando uma única célula gigante com muitos núcleos.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 740 260" width="740" height="260" aria-label="Estrutura de um cogumelo basidiocarpo">
            {/* Solo */}
            <rect x={0} y={190} width={740} height={70} rx={0} fill="#92400e" opacity={0.18} />
            <text x={370} y={245} textAnchor="middle" fontSize={12} fill="#78350f">solo / substrato</text>

            {/* Micélio — linhas entrelaçadas */}
            {[
              "M 200 190 Q 230 215 270 205 Q 310 195 340 220 Q 370 240 420 215 Q 460 195 490 220 Q 520 235 550 210",
              "M 220 200 Q 250 225 280 215 Q 320 200 350 230 Q 390 250 430 225 Q 470 205 510 228",
              "M 240 210 Q 280 230 320 220 Q 360 210 400 235 Q 440 250 470 230",
            ].map((d, i) => (
              <path key={i} d={d} fill="none" stroke="#a16207" strokeWidth={i === 0 ? 2.2 : 1.5} opacity={0.7} />
            ))}
            <text x={160} y={222} fontSize={11} fontWeight={700} fill="#78350f">micélio</text>

            {/* Estipe (pé) */}
            <rect x={340} y={105} width={32} height={88} rx={6} fill="#d97706" opacity={0.6} />

            {/* Píleo (chapéu) */}
            <ellipse cx={356} cy={103} rx={82} ry={28} fill="#b45309" opacity={0.75} />
            <ellipse cx={356} cy={100} rx={78} ry={22} fill="#d97706" opacity={0.85} />

            {/* Lamelas */}
            {[-50, -30, -10, 10, 30, 50].map((offset) => (
              <line
                key={offset}
                x1={356 + offset}
                y1={103}
                x2={356 + offset * 0.6}
                y2={126}
                stroke="#92400e"
                strokeWidth={1.2}
                opacity={0.7}
              />
            ))}

            {/* Basídios e esporos (pontos) */}
            {[-48, -32, -16, 0, 16, 32, 48].map((offset) => (
              <circle key={offset} cx={356 + offset} cy={129} r={2.5} fill="#7c3aed" opacity={0.7} />
            ))}

            {/* Anotações */}
            <line x1={438} y1={96} x2={530} y2={70} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={534} y={68} fontSize={12} fontWeight={700} fill="#374151">píleo (chapéu)</text>

            <line x1={372} y1={145} x2={530} y2={145} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={534} y={149} fontSize={12} fontWeight={700} fill="#374151">lamelas (basídios)</text>

            <line x1={370} y1={155} x2={540} y2={185} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={544} y={189} fontSize={12} fontWeight={700} fill="#374151">estipe (pé)</text>

            <line x1={260} y1={208} x2={140} y2={185} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={18} y={183} fontSize={12} fontWeight={700} fill="#374151">hifas / micélio</text>

            {/* Esporos dispersos */}
            {[
              { cx: 285, cy: 62 }, { cx: 310, cy: 45 }, { cx: 400, cy: 50 },
              { cx: 430, cy: 68 }, { cx: 265, cy: 80 }, { cx: 445, cy: 85 },
            ].map((pos, i) => (
              <circle key={i} cx={pos.cx} cy={pos.cy} r={3} fill="#7c3aed" opacity={0.5} />
            ))}
            <text x={310} y={32} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#7c3aed">esporos dispersos</text>
          </svg>
          <figcaption>
            Estrutura de um basidiocarpo (cogumelo): o píleo sustenta as lamelas onde
            ficam os basídios produtores de esporos; o estipe conecta ao micélio no solo.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Hifas septadas × cenocíticas</h3>
          <p>
            <strong>Septadas:</strong> células separadas por paredes transversais
            com poros — presentes em ascomicetos e basidiomicetos.{" "}
            <strong>Cenocíticas:</strong> multinucleadas sem septos — típicas dos
            zigomicetos (ex.: bolor do pão). Essa diferença é critério de
            classificação e costuma aparecer em questões de vestibular.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Nutrição</span>

        <h2>3. Modos de Nutrição e Relações Ecológicas</h2>

        <p>
          A <strong>digestão extracorpórea</strong> permite que os fungos
          explorem substratos que nenhum outro grupo consegue digerir com a
          mesma eficiência. As enzimas secretadas incluem celulases, proteases,
          lipases e ligninases — essas últimas são fundamentais para decompor a
          madeira, um recurso que poucos organismos conseguem aproveitar.
        </p>

        <p>
          Quanto ao modo de obtenção do substrato, os fungos se dividem em três
          grupos funcionais principais. Os <strong>saprófagos</strong>{" "}
          (ou decompositores) alimentam-se de matéria orgânica morta e são os
          grandes recicladores do ecossistema — sem eles, folhas, galhos e
          animais mortos se acumulariam indefinidamente. Os{" "}
          <strong>parasitas</strong> atacam hospedeiros vivos, causando doenças
          em plantas (ferrugens, carvões), animais e humanos (micoses). Os{" "}
          <strong>predadores</strong> (raros) capturam animais microscópicos como
          nemátodos com armadilhas formadas por hifas modificadas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>♻️</span>
            <h3>Saprófagos</h3>
            <p>Decompõem matéria orgânica morta — reciclagem de nutrientes.</p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Parasitas</h3>
            <p>Atacam hospedeiros vivos: micoses, ferrugens e carvões.</p>
          </div>

          <div className="lesson-card">
            <span>🪤</span>
            <h3>Predadores</h3>
            <p>Capturam nemátodos com laços de hifas — grupo raro.</p>
          </div>

          <div className="lesson-card">
            <span>🤝</span>
            <h3>Mutualistas</h3>
            <p>Liquens e micorrizas — associações benéficas para ambos os parceiros.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Reprodução</span>

        <h2>4. Reprodução nos Fungos</h2>

        <p>
          Os fungos apresentam grande versatilidade reprodutiva, combinando
          estratégias assexuadas e sexuadas conforme as condições ambientais.
          Ambas envolvem a produção de <strong>esporos</strong>, estruturas
          resistentes adaptadas à dispersão pelo vento, água e animais.
        </p>

        <div className="lesson-highlight">
          <h3>Reprodução assexuada</h3>
          <p>
            Ocorre quando as condições são favoráveis e o objetivo é colonizar
            o substrato rapidamente:
          </p>
          <ul>
            <li>
              <strong>Esporulação mitótica:</strong> produção de esporos por
              mitose (conídios, esporangiósporos) — gera cópias genéticas idênticas;
            </li>
            <li>
              <strong>Brotamento (gemulação):</strong> projeta uma célula-filha
              menor que se separa — típico de leveduras como{" "}
              <em>Saccharomyces cerevisiae</em>;
            </li>
            <li>
              <strong>Fragmentação:</strong> pedaços de micélio isolados dão
              origem a novos indivíduos.
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Reprodução sexuada</h3>
          <p>
            Ocorre em condições desfavoráveis, gerando variabilidade genética.
            Passa por três fases:
          </p>
          <ol>
            <li>
              <strong>Plasmogamia:</strong> fusão dos citoplasmas de duas hifas
              geneticamente distintas (não necessariamente fêmea/macho — usam
              os tipos de cruzamento "+" e "−");
            </li>
            <li>
              <strong>Cariogamia:</strong> fusão dos núcleos haploides,
              formando o zigoto diploide (2n);
            </li>
            <li>
              <strong>Meiose:</strong> redução cromossômica que origina esporos
              haploides genéticamente variados.
            </li>
          </ol>
          <p>
            Entre a plasmogamia e a cariogamia, muitos fungos passam por uma
            fase <strong>dicariótica (n+n)</strong>, com dois núcleos haploides
            distintos coexistindo na mesma célula sem fundir — característica
            exclusiva do Reino Fungi.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>

        <h2>5. Classificação do Reino Fungi</h2>

        <p>
          A classificação dos fungos baseia-se principalmente no{" "}
          <strong>tipo de esporo sexual</strong> e na estrutura que o produz.
          Para fins de ENEM e vestibulares, os quatro grupos clássicos são os
          mais cobrados:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Esporo sexual</th>
                <th>Tipo de hifa</th>
                <th>Exemplos</th>
                <th>Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zigomicetos</strong></td>
                <td>Zigósporo</td>
                <td>Cenocítica</td>
                <td><em>Rhizopus stolonifer</em> (bolor do pão)</td>
                <td>Hifas sem septos; reprodução rápida</td>
              </tr>
              <tr>
                <td><strong>Ascomicetos</strong></td>
                <td>Ascósporo (em asco)</td>
                <td>Septada</td>
                <td><em>Saccharomyces</em>, <em>Penicillium</em>, trufas, <em>Neurospora</em></td>
                <td>Maior grupo; inclui leveduras</td>
              </tr>
              <tr>
                <td><strong>Basidiomicetos</strong></td>
                <td>Basidiósporo (em basídio)</td>
                <td>Septada</td>
                <td>Cogumelos, orelha-de-pau, ferrugens, carvões</td>
                <td>Produzem o basidiocarpo (cogumelo)</td>
              </tr>
              <tr>
                <td><strong>Deuteromicetos</strong></td>
                <td>Ausente (só assexuada)</td>
                <td>Septada</td>
                <td><em>Candida albicans</em>, <em>Aspergillus</em></td>
                <td>"Fungos imperfeitos" — classificação artificial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            Os <strong>Deuteromicetos</strong> não são um grupo natural (monofilético):
            reúnem fungos cujo ciclo sexual ainda não foi observado. Com o
            avanço da biologia molecular, muitos foram reclassificados como
            ascomicetos ou basidiomicetos. O termo "fungo imperfeito" refere-se
            à ausência da fase sexual conhecida, não a qualquer imperfeição biológica.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Associações Simbióticas</span>

        <h2>6. Liquens e Micorrizas</h2>

        <p>
          Os fungos são mestres das associações simbióticas. Dois exemplos
          clássicos — liquens e micorrizas — têm enorme importância ecológica
          e são frequentemente abordados no ENEM.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Esquema das camadas de um líquen">
            {/* Fundo */}
            <rect x={60} y={20} width={580} height={200} rx={14} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />

            {/* Camada superior do fungo */}
            <rect x={60} y={20} width={580} height={38} rx={0} fill="#d1fae5" />
            <rect x={60} y={20} width={580} height={38} rx={14} fill="#d1fae5" />
            <text x={350} y={44} textAnchor="middle" fontSize={13} fontWeight={700} fill="#065f46">Córtex superior (hifas fúngicas compactadas)</text>

            {/* Camada de algas/cianobactérias */}
            {[100, 150, 200, 260, 320, 380, 440, 500, 560, 600].map((cx, i) => (
              <circle key={i} cx={cx} cy={85} r={12} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            ))}
            {[130, 180, 240, 300, 360, 420, 480, 540, 580].map((cx, i) => (
              <circle key={i} cx={cx} cy={105} r={10} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.2} opacity={0.7} />
            ))}
            <text x={350} y={130} textAnchor="middle" fontSize={12} fontWeight={700} fill="#166534">Camada gonidial (algas fotossintetizantes / cianobactérias)</text>

            {/* Medula — hifas frouxas */}
            {[80, 160, 240, 320, 400, 480, 560, 620].map((x, i) => (
              <path key={i} d={`M ${x} 148 Q ${x + 20} 158 ${x + 40} 150 Q ${x + 60} 142 ${x + 80} 152`} fill="none" stroke="#6ee7b7" strokeWidth={1.5} opacity={0.6} />
            ))}
            <text x={350} y={175} textAnchor="middle" fontSize={12} fontWeight={700} fill="#065f46">Medula (hifas fúngicas frouxas — reserva de água)</text>

            {/* Córtex inferior */}
            <rect x={60} y={188} width={580} height={32} rx={0} fill="#d1fae5" />
            <rect x={60} y={188} width={580} height={32} rx={14} fill="#d1fae5" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} />
            <text x={350} y={209} textAnchor="middle" fontSize={13} fontWeight={700} fill="#065f46">Córtex inferior (hifas compactadas — fixação ao substrato)</text>
          </svg>
          <figcaption>
            Corte esquemático de um líquen: o fungo fornece estrutura e absorve água;
            as algas (ou cianobactérias) realizam fotossíntese e fornecem açúcares.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Liquens — simbiose mutualística</h3>
          <p>
            Um líquen é a associação entre um <strong>fungo</strong> (geralmente
            ascomiceto) e uma <strong>alga verde</strong> (clorofícea) ou{" "}
            <strong>cianobactéria</strong>. A parceria é mutuamente benéfica:
          </p>
          <ul>
            <li>
              O <strong>fungo</strong> fornece proteção mecânica, absorção de
              água e sais minerais do substrato;
            </li>
            <li>
              A <strong>alga/cianobactéria</strong> realiza fotossíntese e
              disponibiliza carboidratos ao fungo;
            </li>
            <li>
              Cianobactérias liquênicas também fazem <strong>fixação de nitrogênio</strong>{" "}
              — enriquecendo o substrato.
            </li>
          </ul>
          <p>
            Por absorverem água e nutrientes diretamente do ar sem sistema
            excretor, os liquens acumulam poluentes e são{" "}
            <strong>bioindicadores sensíveis</strong>: sua ausência indica
            poluição por SO₂ (dióxido de enxofre). São também{" "}
            <strong>organismos pioneiros</strong> na sucessão ecológica,
            colonizando rochas nuas e preparando o substrato para musgos e plantas.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Micorrizas — fungo + raiz</h3>
          <p>
            As micorrizas são associações entre fungos (basidiomicetos ou
            glomeromicetos) e raízes de plantas. As hifas penetram ou envolvem
            as células da raiz, ampliando enormemente a superfície de absorção
            de água e minerais — especialmente <strong>fósforo</strong>. Em
            troca, o fungo recebe açúcares produzidos pela fotossíntese da
            planta. Estima-se que mais de{" "}
            <strong>90% das plantas terrestres</strong> formam algum tipo de
            micorriza — sendo fundamentais para o crescimento de florestas e
            lavouras.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Importância e Prejuízos</span>

        <h2>7. Importância Econômica e Prejuízos dos Fungos</h2>

        <p>
          Os fungos estão entre os organismos com maior impacto econômico,
          tanto positivo quanto negativo. A tabela abaixo resume os principais
          exemplos:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Benefícios</th>
                <th>Prejuízos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ecologia</strong></td>
                <td>Decomposição de matéria orgânica; reciclagem de nutrientes; micorrizas</td>
                <td>Ferrugens e carvões destroem lavouras de trigo, milho e soja</td>
              </tr>
              <tr>
                <td><strong>Alimentos</strong></td>
                <td>Pão, cerveja, vinho (<em>Saccharomyces</em>); queijos (<em>Penicillium</em>); cogumelos comestíveis</td>
                <td>Apodrecimento de frutas, grãos e carnes; micotoxinas</td>
              </tr>
              <tr>
                <td><strong>Medicina</strong></td>
                <td>Penicilina (<em>Penicillium notatum</em>); ciclosporina (imunossupressor); estatinas</td>
                <td>Micoses superficiais e sistêmicas; toxinas de <em>Amanita</em></td>
              </tr>
              <tr>
                <td><strong>Indústria</strong></td>
                <td>Ácido cítrico (<em>Aspergillus niger</em>); enzimas industriais; biocombustíveis</td>
                <td>Biodegradação de madeiras, tecidos e materiais de construção</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Penicilina — o primeiro antibiótico</h3>
          <p>
            Em 1928, Alexander Fleming observou que colônias de{" "}
            <em>Penicillium notatum</em> inibiam o crescimento de bactérias ao
            redor. A substância ativa — a <strong>penicilina</strong> — age
            bloqueando a síntese de <strong>peptidoglicano</strong>, componente
            exclusivo da parede bacteriana. Como células humanas e fúngicas não
            têm peptidoglicano, o antibiótico é seletivo. Esse é um exemplo
            frequente em questões sobre seletividade de fármacos.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Micotoxinas e ergotismo</h3>
          <p>
            Micotoxinas são toxinas produzidas por fungos que contaminam
            alimentos. As <strong>aflatoxinas</strong> (produzidas por{" "}
            <em>Aspergillus flavus</em> em amendoim e milho mal armazenados)
            são potentes carcinógenos hepáticos. O{" "}
            <strong>ergotismo</strong> — historicamente chamado de "Fogo de
            Santo Antônio" — é causado por <em>Claviceps purpurea</em> que
            parasita o centeio; suas toxinas (ergotaminas) provocam
            vasoconstricção grave, gangrena e alucinações. Surtos de ergotismo
            na Idade Média causaram milhares de mortes na Europa.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Doenças Fúngicas</span>

        <h2>8. Micoses — Doenças Causadas por Fungos</h2>

        <p>
          <strong>Micoses</strong> são infecções causadas por fungos em
          hospedeiros humanos ou animais. Classificam-se em{" "}
          <strong>superficiais</strong> (atingem pele, cabelos, unhas) e{" "}
          <strong>sistêmicas</strong> (órgãos internos), sendo as últimas
          potencialmente fatais em imunodeprimidos. Os ambientes úmidos e quentes
          favorecem a proliferação dos fungos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦶</span>
            <h3>Frieira (pé-de-atleta)</h3>
            <p><em>Tinea pedis</em> — interdigital; contraída em piscinas e vestiários.</p>
          </div>

          <div className="lesson-card">
            <span>💍</span>
            <h3>Impingem (tinha)</h3>
            <p><em>Tinea corporis</em> — lesões circulares e descamativas na pele.</p>
          </div>

          <div className="lesson-card">
            <span>💅</span>
            <h3>Onicomicose</h3>
            <p>Fungos nas unhas — espessamento, amarelamento e descolamento.</p>
          </div>

          <div className="lesson-card">
            <span>💇</span>
            <h3>Pitiríase versicolor</h3>
            <p><em>Malassezia furfur</em> — "pano branco"; manchas hipopigmentadas.</p>
          </div>

          <div className="lesson-card">
            <span>👶</span>
            <h3>Candidíase</h3>
            <p><em>Candida albicans</em> — sapinho oral, vulvovaginal; oportunista.</p>
          </div>

          <div className="lesson-card">
            <span>🫁</span>
            <h3>Histoplasmose</h3>
            <p><em>Histoplasma capsulatum</em> — pulmonar; ligada a fezes de morcegos e aves.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Candidíase e imunidade</h3>
          <p>
            A <em>Candida albicans</em> faz parte da microbiota normal de mucosas
            em pessoas saudáveis. A doença surge quando a imunidade cai (HIV/AIDS,
            uso de corticoides, antibióticos de amplo espectro) ou em
            neonatos com imunidade ainda imatura. Isso a caracteriza como um
            fungo <strong>oportunista</strong> — terminologia frequente no ENEM.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Prevenção das micoses superficiais</h3>
          <ul>
            <li>Manter a pele seca, especialmente entre os dedos dos pés;</li>
            <li>Usar chinelos em vestiários, piscinas e banheiros coletivos;</li>
            <li>Não compartilhar toalhas, calçados e roupas íntimas;</li>
            <li>Tratamento com antifúngicos tópicos (clotrimazol, miconazol) ou sistêmicos (fluconazol).</li>
          </ul>
        </div>
      </section>

      {/* ===================== EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Nutrição e parede celular dos fungos"
          statement={
            <p>
              Em relação ao Reino Fungi, assinale a alternativa que apresenta
              corretamente o tipo de nutrição e o componente principal da
              parede celular desses organismos.
            </p>
          }
          options={[
            { letter: "a", text: "Autótrofos por fotossíntese; parede de celulose" },
            { letter: "b", text: "Heterótrofos por absorção; parede de quitina", correct: true },
            { letter: "c", text: "Heterótrofos por ingestão; parede de peptidoglicano" },
            { letter: "d", text: "Autótrofos por quimiossíntese; parede de quitina" },
          ]}
          resolution={
            <p>
              Os fungos são <strong>heterótrofos por absorção</strong>: liberam
              enzimas no ambiente e absorvem os nutrientes digeridos
              externamente. A parede celular é de <strong>quitina</strong> —
              diferente da celulose das plantas e do peptidoglicano das
              bactérias. A reserva energética é o glicogênio, não o amido.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Líquen como bioindicador"
          statement={
            <p>
              Os liquens são amplamente utilizados como bioindicadores da
              qualidade do ar em centros urbanos. Esse uso se justifica porque
              os liquens:
            </p>
          }
          options={[
            { letter: "a", text: "Produzem oxigênio em proporção direta à concentração de SO₂" },
            { letter: "b", text: "São altamente resistentes a todos os poluentes atmosféricos" },
            {
              letter: "c",
              text: "Absorvem substâncias do ar sem sistema excretor, acumulando poluentes e não tolerando SO₂",
              correct: true,
            },
            { letter: "d", text: "Crescem mais rapidamente em ambientes poluídos" },
          ]}
          resolution={
            <p>
              Liquens absorvem água e nutrientes diretamente do ar e da chuva,
              sem sistema excretor especializado. Por isso, acumulam poluentes
              e são extremamente sensíveis ao{" "}
              <strong>dióxido de enxofre (SO₂)</strong>. A ausência de liquens
              em uma área indica poluição atmosférica elevada — daí seu uso como
              bioindicadores.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fase dicariótica e ciclo reprodutivo"
          statement={
            <p>
              Na reprodução sexuada dos fungos, entre a plasmogamia e a
              cariogamia existe uma fase denominada dicariótica (n+n). Essa
              fase é biologicamente importante porque:
            </p>
          }
          options={[
            { letter: "a", text: "Produz esporos haploides por meiose imediatamente após a plasmogamia" },
            {
              letter: "b",
              text: "Permite que o fungo mantenha dois conjuntos haploides distintos antes da fusão nuclear, ampliando o período de variabilidade potencial",
              correct: true,
            },
            { letter: "c", text: "Corresponde à fase diploide permanente do ciclo de vida dos fungos" },
            { letter: "d", text: "É exclusiva dos zigomicetos e não ocorre nos basidiomicetos" },
          ]}
          resolution={
            <p>
              Na fase <strong>dicariótica (n+n)</strong>, a célula contém dois
              núcleos haploides geneticamente diferentes que se dividem de forma
              coordenada sem fundir. Nos basidiomicetos, essa fase pode durar
              anos (todo o crescimento do cogumelo é dicariótico). Ela permite
              ao fungo manter variabilidade genética potencial sem comprometer-se
              com a diploidia — uma estratégia evolutiva única do Reino Fungi.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Fleming, penicilina e seletividade (ENEM)"
          statement={
            <p>
              Em 1928, Alexander Fleming observou que o fungo{" "}
              <em>Penicillium notatum</em> inibia o crescimento de bactérias ao
              seu redor em uma placa de Petri. Décadas depois, a penicilina
              tornou-se o primeiro antibiótico amplamente usado, salvando
              milhões de vidas. A seletividade da penicilina — que mata
              bactérias sem prejudicar células humanas — deve-se ao fato de que
              ela:
            </p>
          }
          options={[
            { letter: "a", text: "Destrói o DNA bacteriano, que é diferente do DNA humano" },
            { letter: "b", text: "Inibe a respiração celular exclusiva das bactérias" },
            {
              letter: "c",
              text: "Bloqueia a síntese de peptidoglicano da parede bacteriana, componente ausente em células humanas",
              correct: true,
            },
            { letter: "d", text: "Dissolve a membrana lipídica das bactérias, que é diferente da membrana humana" },
          ]}
          resolution={
            <p>
              A penicilina inibe enzimas que sintetizam o{" "}
              <strong>peptidoglicano</strong>, polímero exclusivo da parede
              bacteriana. Sem essa parede, a bactéria não suporta a pressão
              osmótica e se lisa. Células humanas, fúngicas e de plantas não
              possuem peptidoglicano, por isso o fármaco é seletivo e seguro
              para o hospedeiro humano.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ergotismo medieval e micotoxinas"
          statement={
            <p>
              Na Idade Média, surtos de uma doença chamada "Fogo de Santo
              Antônio" atingiram populações europeias causando ardência nas
              extremidades, gangrena, alucinações e morte. Pesquisas históricas
              apontaram o consumo de centeio contaminado como causa. Com base
              nos conhecimentos atuais sobre o Reino Fungi, a doença foi
              causada por:
            </p>
          }
          options={[
            { letter: "a", text: "Candidíase sistêmica disseminada pela farinha de centeio" },
            { letter: "b", text: "Aflatoxinas produzidas por Aspergillus flavus no centeio armazenado" },
            {
              letter: "c",
              text: "Ergotaminas produzidas por Claviceps purpurea, fungo parasita do centeio",
              correct: true,
            },
            { letter: "d", text: "Histoplasmose transmitida por esporos do fungo presentes no centeio" },
          ]}
          resolution={
            <p>
              O <strong>ergotismo</strong> é causado pelas{" "}
              <strong>ergotaminas</strong>, alcaloides produzidos por{" "}
              <em>Claviceps purpurea</em>, um ascomiceto parasita que substitui
              os grãos de centeio por estruturas escuras chamadas escleródios.
              As ergotaminas provocam vasoconstricção intensa, levando a
              gangrena nas extremidades, alucinações (precursoras do LSD) e
              morte. Os surtos medievais foram devastadores porque o centeio
              era base alimentar de populações pobres europeias.
            </p>
          }
        />
      </section>
    </article>
  );
}
