"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 42</span>

          <h1>Sistema Reprodutor Humano, Ciclo Menstrual, Contracepção e Embriologia</h1>

          <p>
            A reprodução humana representa um dos temas mais integrados de toda a
            Biologia: anatomia, fisiologia hormonal, genética e desenvolvimento
            embrionário convergem em questões frequentes no ENEM e nos principais
            vestibulares do país. Neste capítulo você vai dominar a estrutura e a
            função dos sistemas reprodutores masculino e feminino, compreender com
            profundidade o ciclo menstrual e sua regulação hormonal, analisar os
            mecanismos de ação dos diferentes métodos contraceptivos, entender a
            fecundação e a nidação, e acompanhar as primeiras etapas do
            desenvolvimento embrionário — da clivagem à formação dos folhetos
            germinativos e dos anexos embrionários.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 1 — SISTEMA REPRODUTOR MASCULINO */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Reprodutor Masculino</span>

        <h2>1. Sistema Reprodutor Masculino</h2>

        <p>
          O sistema reprodutor masculino tem duas funções principais:{" "}
          <strong>produzir os gametas masculinos</strong> (espermatozoides) e{" "}
          <strong>secretar testosterona</strong>, o hormônio sexual masculino
          responsável pelo desenvolvimento das características sexuais secundárias
          (voz grave, pelos, massa muscular, crescimento da laringe) e pela
          manutenção da líbido e do comportamento reprodutivo. Anatomicamente,
          divide-se em gônadas, vias espermáticas e glândulas anexas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚪</span>
            <h3>Testículos</h3>
            <p>
              Gônadas masculinas, alojadas na bolsa escrotal a ≈ 2 °C abaixo da
              temperatura corporal — condição essencial à espermatogênese. Formados
              pelos <strong>túbulos seminíferos</strong> (produção de
              espermatozoides) e pelas células de Leydig (produção de
              testosterona).
            </p>
          </div>

          <div className="lesson-card">
            <span>🌀</span>
            <h3>Epidídimo</h3>
            <p>
              Túbulo altamente enovelado fixado à face posterior de cada testículo.
              Os espermatozoides permanecem aqui por 2 a 12 dias adquirindo{" "}
              <strong>maturidade e motilidade</strong>.
            </p>
          </div>

          <div className="lesson-card">
            <span>📏</span>
            <h3>Ducto deferente</h3>
            <p>
              Canal muscular que conduz os espermatozoides do epidídimo até a
              uretra. A vasectomia consiste no corte e ligadura desse ducto,
              tornando o homem infértil sem afetar a produção de testosterona.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Vesículas seminais</h3>
            <p>
              Secretam ≈ 60% do volume do sêmen, rico em{" "}
              <strong>frutose</strong> (fonte energética para os espermatozoides),
              prostaglandinas e proteínas de coagulação.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌰</span>
            <h3>Próstata</h3>
            <p>
              Glândula única que envolve a uretra logo abaixo da bexiga.
              Secreta líquido <strong>levemente alcalino</strong> que neutraliza
              a acidez vaginal, protegendo os espermatozoides.
            </p>
          </div>

          <div className="lesson-card">
            <span>💦</span>
            <h3>Glândulas bulbouretrais</h3>
            <p>
              Par de glândulas (Cowper) que liberam muco lubrificante antes da
              ejaculação, neutralizando resíduos ácidos de urina na uretra.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Espermatogênese — produção contínua de gametas</h3>
          <p>
            A espermatogênese ocorre nos <strong>túbulos seminíferos</strong> sob
            controle do FSH (hormônio folículo-estimulante) e da testosterona, e
            dura cerca de <strong>70 dias</strong>. As células de Sertoli nutrem e
            sustentam as células em divisão. A sequência é:{" "}
            <strong>espermatogônia (2n) → espermatócito I (2n) →</strong> meiose I
            → <strong>espermatócito II (n) →</strong> meiose II →{" "}
            <strong>espermátides (n) →</strong> espermiogênese →{" "}
            <strong>espermatozoides (n)</strong>. Diferentemente da ovogênese,
            a produção é <em>contínua</em> desde a puberdade até a velhice,
            gerando centenas de milhões de células por dia. Cada espermatozoide
            apresenta: <strong>cabeça</strong> (núcleo haploide + acrossomo com
            hialuronidase e acrosina para penetrar a zona pelúcida);{" "}
            <strong>peça intermediária</strong> (mitocôndrias em espiral que
            fornecem ATP para o flagelo); e <strong>cauda/flagelo</strong>
            (movimento flagelar para locomoção).
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 2 — SISTEMA REPRODUTOR FEMININO */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Reprodutor Feminino</span>

        <h2>2. Sistema Reprodutor Feminino e Ovogênese</h2>

        <p>
          O sistema reprodutor feminino é responsável por produzir os gametas
          femininos (óvulos), secretar os hormônios sexuais femininos (estrógeno
          e progesterona) e abrigar o embrião e o feto durante os nove meses de
          gestação. Cada estrutura tem função precisa dentro desse complexo
          sistema.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🥚</span>
            <h3>Ovários</h3>
            <p>
              Gônadas femininas que produzem óvulos (gametas) e os hormônios
              estrógeno e progesterona. Os folículos ovarianos são as unidades
              funcionais onde os ovócitos amadurecem.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎺</span>
            <h3>Tubas uterinas</h3>
            <p>
              Também chamadas de trompas de Falópio. Capturam o ovócito liberado
              na ovulação pelas <strong>fímbrias</strong>. A{" "}
              <strong>fecundação</strong> ocorre normalmente na ampola, terço
              lateral da tuba.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍐</span>
            <h3>Útero</h3>
            <p>
              Órgão muscular oco formado pelo miométrio (músculo) e o{" "}
              <strong>endométrio</strong> (mucosa interna que prolifera e é
              descamada no ciclo menstrual). Local de implantação e desenvolvimento
              do embrião.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Colo do útero (cérvix)</h3>
            <p>
              Região inferior do útero, em contato com a vagina. O muco cervical
              varia ao longo do ciclo facilitando ou dificultando a passagem dos
              espermatozoides. Local de ação do HPV.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Vagina</h3>
            <p>
              Canal musculomembranoso que liga o útero ao exterior. Recebe o
              pênis durante a relação sexual e constitui o canal do parto. Seu
              pH ácido dificulta infecções.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Folículo ovariano</h3>
            <p>
              Estrutura que envolve o ovócito em desenvolvimento. O{" "}
              <strong>folículo de De Graaf</strong> é o folículo maduro que se
              rompe na ovulação, originando o <strong>corpo lúteo</strong>.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Ovogênese — produção limitada de gametas</h3>
          <p>
            A ovogênese começa ainda na <strong>vida fetal</strong>: ao nascer,
            a menina já possui cerca de um a dois milhões de{" "}
            <strong>ovócitos primários parados em prófase I da meiose</strong>.
            Na puberdade, a cada ciclo menstrual, FSH estimula um grupo de
            folículos a crescer; apenas o folículo dominante completa a{" "}
            <strong>meiose I</strong>, gerando o <em>ovócito secundário</em> (n)
            e o primeiro corpúsculo polar. O ovócito secundário é liberado na
            ovulação e só completará a <strong>meiose II</strong> se for
            fecundado, gerando o óvulo funcional e o segundo corpúsculo polar.
            Ao todo, a mulher libera cerca de <strong>400 ovócitos</strong> ao
            longo da vida fértil — contraste marcante com os bilhões de
            espermatozoides produzidos pelo homem ao longo da vida.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 3 — CICLO MENSTRUAL */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclo Menstrual</span>

        <h2>3. O Ciclo Menstrual e a Regulação Hormonal</h2>

        <p>
          O ciclo menstrual dura em média <strong>28 dias</strong> (variando
          normalmente de 21 a 35 dias) e é controlado pelo eixo{" "}
          <strong>hipotálamo → hipófise → ovário</strong>. O hipotálamo libera
          o GnRH (hormônio liberador de gonadotrofinas), que estimula a hipófise
          a secretar <strong>FSH</strong> e <strong>LH</strong>. Esses, por sua
          vez, agem nos ovários modulando a produção de{" "}
          <strong>estrógeno</strong> e <strong>progesterona</strong>, que fecham
          o <em>feedback</em> regulando a hipófise e o hipotálamo. O ciclo se
          divide em quatro fases descritas abaixo.
        </p>

        {/* Figura 1 — Gráfico dos hormônios ao longo de 28 dias */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 780 300"
            width="780"
            height="300"
            aria-label="Gráfico dos hormônios FSH, LH, estrógeno e progesterona ao longo do ciclo menstrual de 28 dias"
          >
            {/* fundo */}
            <rect x={0} y={0} width={780} height={300} fill="#f8fafc" rx={10} />

            {/* eixos */}
            <line x1={60} y1={240} x2={740} y2={240} stroke="#374151" strokeWidth={1.5} />
            <line x1={60} y1={20} x2={60} y2={240} stroke="#374151" strokeWidth={1.5} />

            {/* linhas de fase */}
            {/* dia 1 = x:60, dia 28 = x:740, escala: (740-60)/27 = 25.19 px/dia */}
            {/* dia 5: 60 + 4*25.19 = 160.7 ≈ 161 */}
            {/* dia 14: 60 + 13*25.19 = 387.5 ≈ 388 */}
            {/* dia 16: 60 + 15*25.19 = 437.9 ≈ 438 */}
            <line x1={161} y1={20} x2={161} y2={240} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={388} y1={20} x2={388} y2={240} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={438} y1={20} x2={438} y2={240} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />

            {/* rótulos de fase */}
            <text x={108} y={14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1d4ed8">Menstrual</text>
            <text x={275} y={14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0891b2">Folicular</text>
            <text x={413} y={14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#7c3aed">Ovulação</text>
            <text x={589} y={14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b45309">Lútea</text>

            {/* rótulos de dias */}
            {[1, 7, 14, 21, 28].map((d) => (
              <text
                key={d}
                x={60 + (d - 1) * 25.19}
                y={256}
                textAnchor="middle"
                fontSize={10}
                fill="#374151"
              >
                {d}
              </text>
            ))}
            <text x={400} y={272} textAnchor="middle" fontSize={11} fill="#6b7280">dias do ciclo</text>

            {/* CURVA FSH — pico inicial e leve elevação antes da ovulação */}
            {/* escala Y: 240 (min) a 30 (max), 210 px disponíveis */}
            <path
              d="M 60 210 C 80 200, 100 160, 120 155 C 140 150, 155 165, 161 170 C 200 185, 280 195, 360 190 C 380 188, 388 175, 388 170 C 395 165, 405 172, 438 188 C 500 205, 650 210, 740 210"
              fill="none"
              stroke="#0891b2"
              strokeWidth={2.5}
            />

            {/* CURVA LH — pico abrupto no dia 13-14 */}
            <path
              d="M 60 215 C 150 215, 300 212, 360 210 C 375 209, 382 195, 385 160 C 387 110, 389 90, 391 120 C 393 150, 395 195, 410 210 C 500 215, 650 215, 740 215"
              fill="none"
              stroke="#7c3aed"
              strokeWidth={2.5}
            />

            {/* CURVA Estrógeno — sobe na fase folicular, pico pré-ovulação, segundo pico lútea */}
            <path
              d="M 60 218 C 100 215, 200 190, 300 155 C 350 130, 375 100, 388 105 C 400 115, 420 135, 450 145 C 500 160, 550 145, 590 130 C 630 118, 680 140, 740 175"
              fill="none"
              stroke="#dc2626"
              strokeWidth={2.5}
            />

            {/* CURVA Progesterona — quase zero até ovulação, sobe na fase lútea */}
            <path
              d="M 60 230 C 200 230, 380 228, 438 225 C 460 222, 490 175, 540 130 C 570 108, 610 100, 640 108 C 680 120, 720 175, 740 228"
              fill="none"
              stroke="#16a34a"
              strokeWidth={2.5}
            />

            {/* BARRA endométrio — espessura como retângulo proporcional */}
            <rect x={60} y={235} width={100} height={5} fill="#f87171" rx={2} />
            <rect x={161} y={232} width={227} height={8} fill="#fca5a5" rx={2} />
            <rect x={388} y={228} width={50} height={12} fill="#fca5a5" rx={2} />
            <rect x={438} y={225} width={302} height={15} fill="#fecaca" rx={2} />
            <text x={60} y={245} fontSize={8} fill="#7f1d1d" fontStyle="italic">endométrio (espessura relativa)</text>

            {/* legenda */}
            <rect x={62} y={168} width={12} height={3} fill="#0891b2" />
            <text x={78} y={173} fontSize={10} fill="#0891b2">FSH</text>

            <rect x={62} y={178} width={12} height={3} fill="#7c3aed" />
            <text x={78} y={183} fontSize={10} fill="#7c3aed">LH</text>

            <rect x={62} y={188} width={12} height={3} fill="#dc2626" />
            <text x={78} y={193} fontSize={10} fill="#dc2626">Estrógeno</text>

            <rect x={62} y={198} width={12} height={3} fill="#16a34a" />
            <text x={78} y={203} fontSize={10} fill="#16a34a">Progesterona</text>

            {/* seta de ovulação */}
            <line x1={388} y1={88} x2={388} y2={60} stroke="#7c3aed" strokeWidth={1.5} />
            <polygon points="388,55 384,65 392,65" fill="#7c3aed" />
            <text x={420} y={58} fontSize={10} fontWeight={700} fill="#7c3aed">Ovulação</text>
          </svg>
          <figcaption>
            Variação hormonal ao longo do ciclo menstrual de 28 dias. O pico de LH
            desencadeia a ovulação no dia 14. O estrógeno prolifera o endométrio; a
            progesterona o mantém secretor na fase lútea.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Dias (média)</th>
                <th>Evento ovariano</th>
                <th>Evento endometrial</th>
                <th>Hormônios predominantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Menstrual</strong></td>
                <td>1–5</td>
                <td>Folículos primordiais começam a ser recrutados pelo FSH</td>
                <td>Descamação do endométrio (menstruação)</td>
                <td>Baixo estrógeno e progesterona</td>
              </tr>
              <tr>
                <td><strong>Folicular / Proliferativa</strong></td>
                <td>6–13</td>
                <td>Folículo dominante cresce; secreta estrógeno crescente</td>
                <td>Espessamento e proliferação do endométrio</td>
                <td>FSH ↑, estrógeno ↑↑</td>
              </tr>
              <tr>
                <td><strong>Ovulação</strong></td>
                <td>14</td>
                <td>Ruptura do folículo; liberação do ovócito secundário</td>
                <td>Endométrio espesso, receptivo</td>
                <td>Pico de LH e FSH, estrógeno pico</td>
              </tr>
              <tr>
                <td><strong>Lútea / Secretora</strong></td>
                <td>15–28</td>
                <td>Folículo roto → corpo lúteo → secreta progesterona e estrógeno</td>
                <td>Endométrio secretor, vascularizado, preparado para nidação</td>
                <td>Progesterona ↑↑, estrógeno ↑</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Feedback hormonal — a chave do ciclo</h3>
          <p>
            O estrógeno elevado exerce <strong>feedback negativo</strong> sobre
            o FSH (inibindo o recrutamento de mais folículos) e, ao atingir o
            pico pré-ovulatório, passa a exercer <strong>feedback positivo</strong>{" "}
            sobre o LH, disparando seu pico e a ovulação. Após a ovulação, a
            progesterona secretada pelo corpo lúteo inibe tanto FSH quanto LH por
            feedback negativo. Se não houver gravidez, o corpo lúteo regride em
            ≈ 12 dias, a progesterona cai, o endométrio se descama (menstruação) e
            o FSH volta a subir, iniciando novo ciclo.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 4 — FECUNDAÇÃO E NIDAÇÃO */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Fecundação e Nidação</span>

        <h2>4. Fecundação e Nidação</h2>

        <p>
          A <strong>fecundação</strong> é a fusão de um espermatozoide com o
          ovócito secundário, restaurando o número diploide (2n = 46 cromossomos)
          e formando o <strong>zigoto</strong>. Ocorre normalmente na{" "}
          <strong>ampola da tuba uterina</strong>, nas primeiras horas após a
          ovulação — o ovócito é viável por apenas ≈ 12 a 24 horas, enquanto
          os espermatozoides podem sobreviver por 3 a 5 dias nas vias genitais
          femininas.
        </p>

        <div className="lesson-highlight">
          <h3>Etapas moleculares da fecundação</h3>
          <ol>
            <li>
              O espermatozoide atravessa a <strong>corona radiata</strong>{" "}
              (camada de células foliculares) ao redor do ovócito.
            </li>
            <li>
              <strong>Reação acrossômica</strong>: o acrossomo libera enzimas
              (hialuronidase, acrosina) que digerem a <strong>zona pelúcida</strong>.
            </li>
            <li>
              Fusão das membranas plasmáticas: o núcleo do espermatozoide
              penetra no citoplasma do ovócito.
            </li>
            <li>
              <strong>Reação cortical</strong>: grânulos corticais do ovócito
              alteram a zona pelúcida, impedindo a entrada de outros
              espermatozoides (<em>bloqueio à poliespermia</em>).
            </li>
            <li>
              O ovócito completa a <strong>meiose II</strong>, expulsando o
              segundo corpúsculo polar.
            </li>
            <li>
              <strong>Cariogamia</strong>: fusão dos pronúcleos masculino e
              feminino → formação do <strong>zigoto 2n</strong>.
            </li>
          </ol>
        </div>

        <p>
          Após a fecundação, o zigoto inicia a <strong>clivagem</strong> (divisões
          mitóticas rápidas sem crescimento celular) enquanto migra pela tuba
          uterina em direção ao útero. Por volta do <strong>7º dia</strong>
          pós-fecundação, o blastocisto se implanta no endométrio: é a{" "}
          <strong>nidação</strong>. As células do trofoblasto (camada externa do
          blastocisto) invadem o endométrio, iniciando a formação da{" "}
          <strong>placenta</strong>. O trofoblasto começa a produzir o{" "}
          <strong>HCG</strong> (gonadotrofina coriônica humana), hormônio que
          mantém o corpo lúteo ativo e é detectado pelos testes de gravidez
          na urina e no sangue. A gravidez ectópica ocorre quando a nidação se
          dá fora do útero, quase sempre na própria tuba uterina, constituindo
          emergência médica.
        </p>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 5 — MÉTODOS CONTRACEPTIVOS E ISTs */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Contracepção e ISTs</span>

        <h2>5. Métodos Contraceptivos e Infecções Sexualmente Transmissíveis</h2>

        <p>
          Os métodos contraceptivos atuam em diferentes pontos da cadeia
          reprodutiva: impedindo a produção de gametas, bloqueando o encontro
          entre eles, inibindo a ovulação ou dificultando a nidação. A escolha
          depende de eficácia, reversibilidade, tolerância individual e necessidade
          de proteção contra ISTs — lembrando que <strong>apenas o preservativo</strong>{" "}
          (camisinha masculina ou feminina) oferece proteção simultânea contra
          gravidez e ISTs.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>Comportamentais</h3>
            <p>
              Tabelinha (Ogino-Knaus), método da temperatura basal, método do
              muco cervical (Billings) e coito interrompido. Eficácia baixa
              (60–85%) por dependerem de regularidade e comportamento.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Barreira</h3>
            <p>
              Camisinha masculina (eficácia ≈ 85–98%) e feminina, diafragma,
              esponja e espermicidas. A camisinha é o <strong>único método
              que previne ISTs</strong> como HIV, sífilis, gonorreia e HPV.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Hormonais combinados</h3>
            <p>
              Pílula combinada (estrógeno + progestina), adesivo transdérmico
              e anel vaginal. Inibem o pico de LH → bloqueiam a ovulação.
              Eficácia ≈ 99% com uso correto.
            </p>
          </div>

          <div className="lesson-card">
            <span>💉</span>
            <h3>Hormonais de progestina</h3>
            <p>
              Minipílula, injeção (mensal ou trimestral), implante subdérmico
              (3 anos) e DIU hormonal. Espessam o muco cervical e podem inibir
              a ovulação. Indicados para quem não tolera estrógeno.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>DIU de cobre</h3>
            <p>
              Dispositivo intrauterino de cobre que age como{" "}
              <strong>espermicida</strong> (íons Cu²⁺ tóxicos aos
              espermatozoides) e dificulta a nidação. Altamente eficaz
              (99,9%), reversível, dura até 10 anos.
            </p>
          </div>

          <div className="lesson-card">
            <span>✂️</span>
            <h3>Definitivos</h3>
            <p>
              <strong>Laqueadura tubária</strong> (ligação das tubas uterinas)
              e <strong>vasectomia</strong> (ligação dos ductos deferentes).
              Métodos permanentes; não alteram a produção hormonal nem a
              função sexual.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Contracepção de emergência ("pílula do dia seguinte")</h3>
          <p>
            Contém altas doses de <strong>levonorgestrel</strong> (progestina)
            e age principalmente atrasando ou inibindo a ovulação. Pode também
            alterar o muco cervical e a motilidade tubária. <em>Não é
            abortiva</em> — não interrompe uma gravidez já implantada. Eficácia
            de ≈ 95% se usada nas primeiras 24 h, caindo para ≈ 58% entre
            48–72 h. Não é recomendada como método regular.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Método</th>
                <th>Mecanismo principal</th>
                <th>Eficácia típica</th>
                <th>Protege contra IST?</th>
                <th>Reversibilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camisinha masculina</td>
                <td>Barreira física</td>
                <td>85–98%</td>
                <td><strong>Sim</strong></td>
                <td>—</td>
              </tr>
              <tr>
                <td>Pílula combinada</td>
                <td>Inibe ovulação (bloqueia pico de LH)</td>
                <td>92–99%</td>
                <td>Não</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>DIU de cobre</td>
                <td>Espermicida (Cu²⁺) + antinidação</td>
                <td>99,9%</td>
                <td>Não</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Implante hormonal</td>
                <td>Libera progestina; inibe ovulação e espessa muco</td>
                <td>&gt; 99%</td>
                <td>Não</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Vasectomia</td>
                <td>Interrupção do ducto deferente</td>
                <td>99,9%</td>
                <td>Não</td>
                <td>Difícil</td>
              </tr>
              <tr>
                <td>Tabelinha</td>
                <td>Evitar relações no período fértil</td>
                <td>75–85%</td>
                <td>Não</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 6 — EMBRIOLOGIA */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Embriologia</span>

        <h2>6. Desenvolvimento Embrionário Inicial</h2>

        <p>
          A embriologia estuda a série de transformações que convertem o zigoto
          unicelular em um organismo multicelular complexo. As etapas iniciais
          seguem uma sequência altamente conservada nos vertebrados e são
          frequentemente abordadas no ENEM na forma de figuras esquemáticas para
          identificação.
        </p>

        {/* Figura 2 — Desenvolvimento embrionário inicial */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 200"
            width="760"
            height="200"
            aria-label="Desenvolvimento embrionário: zigoto, mórula, blástula e gástrula"
          >
            <rect x={0} y={0} width={760} height={200} fill="#f0fdf4" rx={10} />

            {/* Etapa 1 — Zigoto */}
            <circle cx={70} cy={100} r={38} fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            <circle cx={70} cy={100} r={12} fill="#4ade80" stroke="#15803d" strokeWidth={1.5} />
            <text x={70} y={105} textAnchor="middle" fontSize={10} fontWeight={700} fill="#14532d">2n</text>
            <text x={70} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#15803d">Zigoto</text>
            <text x={70} y={172} textAnchor="middle" fontSize={10} fill="#4b5563">1 célula (2n)</text>

            {/* seta */}
            <line x1={115} y1={100} x2={143} y2={100} stroke="#374151" strokeWidth={1.5} />
            <polygon points="143,96 150,100 143,104" fill="#374151" />
            <text x={129} y={92} textAnchor="middle" fontSize={9} fill="#6b7280">clivagem</text>

            {/* Etapa 2 — Mórula */}
            <circle cx={195} cy={100} r={38} fill="#d1fae5" stroke="#059669" strokeWidth={2} />
            {[
              [195, 88], [183, 96], [207, 96], [183, 108], [207, 108],
              [195, 116], [175, 100], [215, 100],
            ].map(([cx2, cy2], i) => (
              <circle key={i} cx={cx2} cy={cy2} r={9} fill="#6ee7b7" stroke="#059669" strokeWidth={1} />
            ))}
            <text x={195} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#059669">Mórula</text>
            <text x={195} y={172} textAnchor="middle" fontSize={10} fill="#4b5563">16–32 células</text>

            {/* seta */}
            <line x1={240} y1={100} x2={268} y2={100} stroke="#374151" strokeWidth={1.5} />
            <polygon points="268,96 275,100 268,104" fill="#374151" />
            <text x={254} y={92} textAnchor="middle" fontSize={9} fill="#6b7280">blastulação</text>

            {/* Etapa 3 — Blástula/Blastocisto */}
            <circle cx={320} cy={100} r={38} fill="#e0f2fe" stroke="#0284c7" strokeWidth={2} />
            <circle cx={320} cy={100} r={26} fill="#bfdbfe" stroke="#0284c7" strokeWidth={1} strokeDasharray="3 2" />
            <circle cx={320} cy={100} r={14} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1} />
            <text x={320} y={105} textAnchor="middle" fontSize={9} fill="#1d4ed8">blastocele</text>
            <text x={320} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0284c7">Blástula</text>
            <text x={320} y={172} textAnchor="middle" fontSize={10} fill="#4b5563">cavidade interna</text>

            {/* seta */}
            <line x1={365} y1={100} x2={393} y2={100} stroke="#374151" strokeWidth={1.5} />
            <polygon points="393,96 400,100 393,104" fill="#374151" />
            <text x={379} y={92} textAnchor="middle" fontSize={9} fill="#6b7280">gastrulação</text>

            {/* Etapa 4 — Gástrula */}
            <ellipse cx={455} cy={100} rx={40} ry={38} fill="#fef3c7" stroke="#d97706" strokeWidth={2} />
            {/* invaginação */}
            <path d="M 425 100 Q 455 75 485 100" fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <path d="M 430 108 Q 455 140 480 108" fill="#fbbf24" stroke="#b45309" strokeWidth={1} />
            <text x={455} y={98} textAnchor="middle" fontSize={9} fill="#92400e">ecto</text>
            <text x={455} y={118} textAnchor="middle" fontSize={9} fill="#78350f">endo</text>
            <text x={455} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#d97706">Gástrula</text>
            <text x={455} y={172} textAnchor="middle" fontSize={10} fill="#4b5563">3 folhetos</text>

            {/* seta */}
            <line x1={502} y1={100} x2={530} y2={100} stroke="#374151" strokeWidth={1.5} />
            <polygon points="530,96 537,100 530,104" fill="#374151" />
            <text x={516} y={92} textAnchor="middle" fontSize={9} fill="#6b7280">neurulação</text>

            {/* Etapa 5 — Nêurula */}
            <ellipse cx={590} cy={100} rx={40} ry={38} fill="#faf5ff" stroke="#7c3aed" strokeWidth={2} />
            {/* tubo neural */}
            <path d="M 563 90 Q 590 70 617 90" fill="none" stroke="#7c3aed" strokeWidth={2} />
            <path d="M 568 94 Q 590 78 612 94" fill="#e9d5ff" stroke="#7c3aed" strokeWidth={1} />
            <text x={590} y={120} textAnchor="middle" fontSize={9} fill="#4c1d95">tubo neural</text>
            <text x={590} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Nêurula</text>
            <text x={590} y={172} textAnchor="middle" fontSize={10} fill="#4b5563">SNC em formação</text>

            {/* seta final */}
            <line x1={636} y1={100} x2={660} y2={100} stroke="#374151" strokeWidth={1.5} />
            <polygon points="660,96 667,100 660,104" fill="#374151" />
            <text x={700} y={100} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Embrião</text>
            <text x={700} y={115} textAnchor="middle" fontSize={10} fill="#6b7280">organogênese</text>
          </svg>
          <figcaption>
            Sequência do desenvolvimento embrionário inicial: zigoto → mórula
            (clivagem) → blástula (cavidade blastocele) → gástrula (3 folhetos
            germinativos) → nêurula (tubo neural). A nidação ocorre na fase de
            blastocisto, por volta do 7.º dia.
          </figcaption>
        </figure>

        <p>
          A <strong>clivagem</strong> são divisões mitóticas sucessivas do zigoto
          sem crescimento celular entre as divisões — as células resultantes,
          chamadas <em>blastômeros</em>, tornam-se progressivamente menores.
          A <strong>mórula</strong> (16–32 células) é uma massa compacta que,
          ao acumular líquido entre os blastômeros, dá origem à{" "}
          <strong>blástula</strong> (em mamíferos chamada <em>blastocisto</em>),
          com uma cavidade interna — o <em>blastocele</em> — e uma massa celular
          interna (<em>botão embrionário</em>) que origina o embrião propriamente
          dito. A camada externa, o <em>trofoblasto</em>, forma os anexos. A{" "}
          <strong>gastrulação</strong> reorganiza as células em três folhetos.
        </p>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 7 — FOLHETOS GERMINATIVOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Folhetos Germinativos</span>

        <h2>7. Os Três Folhetos Germinativos e Seus Derivados</h2>

        <p>
          Na <strong>gastrulação</strong>, movimentos celulares reorganizam os
          blastômeros em três camadas embrionárias primárias: ectoderma,
          mesoderma e endoderma. Os seres humanos são{" "}
          <strong>triblásticos</strong> (possuem os três folhetos) e{" "}
          <strong>celomados</strong> (possuem cavidade corporal verdadeira —
          o celoma — revestida por mesoderma). Cada folheto origina tecidos e
          órgãos específicos — conhecimento essencial para questões de ENEM
          sobre embriologia comparada.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Folheto</th>
                <th>Posição</th>
                <th>Estruturas derivadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ectoderma</strong></td>
                <td>Mais externo</td>
                <td>
                  Epiderme e seus anexos (pelos, unhas, glândulas sebáceas e
                  sudoríparas), sistema nervoso (tubo neural → encéfalo e medula
                  espinal), nervos periféricos, órgãos dos sentidos, esmalte
                  dos dentes, cristalino, córnea.
                </td>
              </tr>
              <tr>
                <td><strong>Mesoderma</strong></td>
                <td>Médio</td>
                <td>
                  Musculatura esquelética, cardíaca e lisa; esqueleto (ossos e
                  cartilagens); sistema circulatório (coração, vasos e sangue);
                  sistema linfático; rins e ureteres (excretor); gônadas e
                  ductos genitais; derme; tecido conjuntivo; serosas
                  (peritônio, pleura, pericárdio).
                </td>
              </tr>
              <tr>
                <td><strong>Endoderma</strong></td>
                <td>Mais interno</td>
                <td>
                  Revestimento interno do tubo digestivo (da faringe ao reto),
                  fígado e vesícula biliar, pâncreas, glândula tireoide e
                  paratireoides, timo, revestimento dos pulmões e brônquios,
                  bexiga urinária, uretra (parte), revestimento do ouvido médio.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — como memorizar</h3>
          <p>
            <strong>Ecto</strong> = externo → tudo que toca o ambiente diretamente
            (pele) ou é derivado do tubo neural (sistema nervoso).{" "}
            <strong>Endo</strong> = interno → revestimento das "cavernas internas"
            (tubo digestivo, pulmões, fígado/pâncreas).{" "}
            <strong>Meso</strong> = meio → tudo entre os dois extremos: músculo,
            osso, sangue, rim, gônada.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 8 — ANEXOS EMBRIONÁRIOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Anexos Embrionários e Gestação</span>

        <h2>8. Anexos Embrionários, Placenta e Gestação</h2>

        <p>
          Os <strong>anexos embrionários</strong> são estruturas extra-embrionárias
          — não fazem parte do embrião propriamente dito — que protegem, nutrem e
          garantem as trocas metabólicas durante o desenvolvimento intrauterino.
          Nos mamíferos placentários como os humanos, os principais são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Âmnio</h3>
            <p>
              Membrana que envolve o embrião e o feto em uma bolsa cheia de{" "}
              <strong>líquido amniótico</strong>. Protege contra choques
              mecânicos, mantém temperatura e hidratação, e permite os
              movimentos fetais. A rotura desta bolsa ("bolsa d'água") é sinal
              de início do parto.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌐</span>
            <h3>Cório</h3>
            <p>
              Membrana mais externa que participa da formação da{" "}
              <strong>placenta</strong>, por meio de projeções chamadas
              vilosidades coriônicas que penetram no endométrio materno.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥚</span>
            <h3>Saco vitelínico</h3>
            <p>
              Muito reduzido em humanos (sem vitelo). Produz as{" "}
              <strong>primeiras células sanguíneas</strong> do embrião e as
              células germinativas primordiais (que migrarão para as gônadas).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Alantoide</h3>
            <p>
              Em humanos, é rudimentar. Seus vasos sanguíneos participam da
              formação do <strong>cordão umbilical</strong>. Em répteis e aves,
              tem papel mais relevante como reservatório de excretas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍎</span>
            <h3>Placenta</h3>
            <p>
              Órgão formado por tecidos do embrião (cório) e da mãe
              (endométrio). Realiza trocas de O₂, CO₂, nutrientes e excretas
              entre os dois organismos <em>sem mistura direta de sangues</em>.
              Produz HCG, progesterona e estrógeno a partir do 3.º mês.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧵</span>
            <h3>Cordão umbilical</h3>
            <p>
              Liga o feto à placenta. Contém{" "}
              <strong>2 artérias umbilicais</strong> (sangue venoso do feto para
              a placenta) e <strong>1 veia umbilical</strong> (sangue
              oxigenado/nutrido da placenta para o feto).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Período crítico — teratógenos</h3>
          <p>
            O <strong>primeiro trimestre</strong> (semanas 3–12) é o período de
            maior sensibilidade a <strong>teratógenos</strong> — agentes que
            causam malformações — porque é quando ocorre a{" "}
            <strong>organogênese</strong> (formação dos órgãos). Álcool
            (síndrome alcoólica fetal), rubéola congênita, vírus Zika
            (microcefalia), talidomida (focomelia) e tabaco são exemplos clássicos
            abordados em questões contextualizadas do ENEM. A microcefalia
            pelo Zika resulta da destruição de neurônios progenitores ainda na
            fase de proliferação do sistema nervoso central.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXERCÍCIOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Fase do ciclo menstrual"
          statement={
            <p>
              Em um ciclo menstrual regular de 28 dias, qual evento hormonal
              desencadeia diretamente a ovulação?
            </p>
          }
          options={[
            { letter: "a", text: "Elevação progressiva do FSH ao longo dos 14 primeiros dias" },
            { letter: "b", text: "Queda brusca da progesterona no final da fase lútea" },
            {
              letter: "c",
              text: "Pico súbito de LH por volta do 13.º ao 14.º dia do ciclo",
              correct: true,
            },
            { letter: "d", text: "Aumento gradual do estrógeno ao longo de todo o ciclo" },
          ]}
          resolution={
            <p>
              O pico de LH (hormônio luteinizante), desencadeado pelo feedback
              positivo do estrógeno elevado sobre a hipófise, causa a ruptura do
              folículo de De Graaf e a liberação do ovócito secundário —
              caracterizando a ovulação. FSH recruta folículos mas não dispara a
              ovulação; a queda de progesterona causa a menstruação, não a
              ovulação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Folhetos germinativos e derivados"
          statement={
            <p>
              Analise as estruturas abaixo e assinale a alternativa em que{" "}
              <strong>todas</strong> derivam do mesmo folheto embrionário.
            </p>
          }
          options={[
            { letter: "a", text: "Fígado, epiderme e musculatura esquelética" },
            {
              letter: "b",
              text: "Sistema nervoso central, esmalte dos dentes e epiderme",
              correct: true,
            },
            { letter: "c", text: "Coração, pulmões e rins" },
            { letter: "d", text: "Intestino, córnea e medula espinal" },
          ]}
          resolution={
            <p>
              Sistema nervoso central (tubo neural), esmalte dos dentes e epiderme
              derivam todos do <strong>ectoderma</strong>. Fígado e revestimento
              dos pulmões derivam do endoderma. Coração, rins e musculatura
              esquelética derivam do mesoderma. Córnea é ectoderma, mas intestino
              é endoderma e medula é ectoderma — a alternativa D mistura os dois.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mecanismo hormonal dos contraceptivos orais"
          statement={
            <p>
              A pílula anticoncepcional combinada (estrógeno + progestina) impede
              a gravidez principalmente porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Destrói quimicamente os espermatozoides na vagina antes que alcancem o útero",
            },
            {
              letter: "b",
              text: "Impede a nidação ao tornar o endométrio hostil à implantação do zigoto já formado",
            },
            {
              letter: "c",
              text: "Mantém níveis elevados de hormônios exógenos que suprimem o pico de LH por feedback negativo, inibindo a ovulação",
              correct: true,
            },
            {
              letter: "d",
              text: "Estimula o FSH a recrutar múltiplos folículos, impedindo que um único folículo domine",
            },
          ]}
          resolution={
            <p>
              Os hormônios exógenos da pílula (estrógeno e progestina) exercem{" "}
              <strong>feedback negativo</strong> contínuo sobre o hipotálamo e a
              hipófise, suprimindo a secreção de FSH e LH e, portanto, impedindo
              o pico de LH necessário para a ovulação. Sem ovulação, não há óvulo
              para ser fecundado. A pílula também espessa o muco cervical e altera
              o endométrio como efeitos secundários.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Zika e microcefalia (ENEM)"
          statement={
            <p>
              Durante a epidemia de Zika vírus no Brasil (2015–2016), observou-se
              um aumento expressivo de casos de microcefalia em recém-nascidos de
              mães infectadas durante a gestação. Do ponto de vista embriológico,
              a microcefalia ocorre porque o vírus Zika:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Destrói os folhetos endodérmico e mesodérmico, impedindo a formação de órgãos internos",
            },
            {
              letter: "b",
              text: "Infecta e elimina neurônios progenitores do córtex cerebral, principalmente no primeiro trimestre, quando a organogênese do SNC é mais intensa",
              correct: true,
            },
            {
              letter: "c",
              text: "Impede a formação da placenta, interrompendo o fornecimento de nutrientes para o encéfalo fetal",
            },
            {
              letter: "d",
              text: "Bloqueia a produção de HCG, fazendo o corpo lúteo regredir precocemente e causando aborto espontâneo",
            },
          ]}
          resolution={
            <p>
              O vírus Zika tem tropismo pelos <strong>neurônios progenitores</strong>{" "}
              do córtex cerebral em desenvolvimento. A infecção no{" "}
              <strong>primeiro trimestre</strong> — período crítico de organogênese
              do sistema nervoso central — destrói essas células antes que possam
              se multiplicar e migrar para formar as camadas corticais, resultando
              em um crânio e encéfalo subdesenvolvidos (microcefalia). Estruturas
              derivadas do ectoderma (tubo neural) são as mais afetadas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Teste de gravidez e HCG"
          statement={
            <p>
              Uma mulher realizou um teste de gravidez de farmácia, que detecta
              a presença de um hormônio na urina. O resultado foi positivo. Com
              base no conhecimento sobre fisiologia reprodutiva humana, o hormônio
              detectado é produzido por qual estrutura e qual é sua função no
              início da gravidez?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Hipófise; o LH sinaliza à hipófise que a ovulação ocorreu com sucesso",
            },
            {
              letter: "b",
              text: "Ovário; o estrógeno estimula o endométrio a receber o blastocisto",
            },
            {
              letter: "c",
              text: "Trofoblasto/placenta em formação; o HCG mantém o corpo lúteo ativo, que continua secretando progesterona para sustentar o endométrio até a placenta assumir essa função",
              correct: true,
            },
            {
              letter: "d",
              text: "Endométrio; a progesterona sinaliza ao ovário que a nidação foi concluída",
            },
          ]}
          resolution={
            <p>
              O <strong>HCG</strong> (gonadotrofina coriônica humana) é secretado
              pelo <strong>trofoblasto</strong> (que forma a placenta) a partir do
              momento da nidação. Sua função essencial é manter o{" "}
              <strong>corpo lúteo</strong> funcional nos primeiros meses de
              gravidez, impedindo sua regressão e garantindo a produção contínua
              de <strong>progesterona</strong>, hormônio que sustenta o
              endométrio e impede a menstruação. Os testes de gravidez detectam
              HCG porque seus níveis elevam-se rapidamente após a implantação,
              tornando-se detectáveis na urina poucos dias antes da menstruação
              esperada.
            </p>
          }
        />
      </section>
    </article>
  );
}
