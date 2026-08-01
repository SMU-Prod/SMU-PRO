"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 10</span>

          <h1>Núcleo Celular, Cromatina, Cromossomos e Cariótipo</h1>

          <p>
            Dentro de cada uma das trilhões de células do corpo humano há um
            núcleo que guarda aproximadamente 2 metros de DNA comprimidos em um
            diâmetro de apenas 6 micrômetros. Neste capítulo você vai dominar
            como o núcleo é organizado estruturalmente, como o DNA se compacta
            progressivamente em cromatina e cromossomos, o que é o cariótipo e
            como ele revela o sexo cromossômico e as principais síndromes
            genéticas — temas recorrentes no ENEM e nos principais vestibulares
            do Brasil.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura do Núcleo</span>

        <h2>1. O Núcleo Celular: Centro de Comando da Célula</h2>

        <p>
          O <strong>núcleo celular</strong> é a organela exclusiva das células{" "}
          <strong>eucarióticas</strong> — animais, plantas, fungos e protistas.
          É nele que reside o <strong>DNA genômico</strong>, o genoma completo do
          indivíduo, e é a partir dele que toda a expressão gênica é orquestrada:
          o DNA é transcrito em RNA mensageiro que, após processamento, emigra ao
          citoplasma para guiar a síntese de proteínas. Sem o núcleo, a célula
          perde a capacidade de se adaptar, crescer e se dividir — motivo pelo
          qual a enucleação (retirada do núcleo) de hemácias maduras as torna
          células com vida útil limitada, incapazes de se reproduzir.
        </p>

        <p>
          O núcleo é delimitado por uma estrutura dupla denominada{" "}
          <strong>carioteca</strong> (ou envoltório nuclear) e internamente
          preenchido pelo <strong>nucleoplasma</strong>, uma solução coloidal
          onde estão mergulhados a cromatina e o(s) nucléolo(s). Cada compartimento
          tem função precisa e regulada:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Carioteca</h3>
            <p>
              Membrana dupla (externa contínua com o retículo endoplasmático
              rugoso; interna em contato com a lâmina nuclear). Separa o genoma
              do citoplasma, protegendo o DNA.
            </p>
          </div>

          <div className="lesson-card">
            <span>🚪</span>
            <h3>Poros Nucleares</h3>
            <p>
              Complexos proteicos que perfuram a carioteca e controlam o trânsito
              seletivo: RNA e ribossomos saem; proteínas reguladoras, histonas e
              nucleotídeos entram.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Nucleoplasma</h3>
            <p>
              Matriz fluida composta de água, íons, enzimas e proteínas. É o
              "citoplasma" do núcleo, onde ocorrem transcrição e replicação.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Cromatina</h3>
            <p>
              Complexo de DNA + proteínas histonas (e não-histonas). É a forma
              na qual o material genético existe durante a interfase.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Nucléolo</h3>
            <p>
              Região densa, sem membrana própria, responsável pela síntese de
              RNA ribossômico (rRNA) e pela montagem das subunidades do
              ribossomo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧱</span>
            <h3>Lâmina Nuclear</h3>
            <p>
              Rede de proteínas (laminas A, B e C) logo abaixo da membrana
              interna; confere suporte mecânico e ancora a cromatina.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 560 300" width="560" height="300" aria-label="Diagrama do núcleo celular com seus componentes">
            {/* fundo */}
            <rect x={0} y={0} width={560} height={300} rx={16} fill="#f0f9ff" />
            {/* membrana externa */}
            <ellipse cx={280} cy={150} rx={240} ry={130} fill="none" stroke="#0284c7" strokeWidth={8} strokeDasharray="14 5" />
            {/* membrana interna */}
            <ellipse cx={280} cy={150} rx={220} ry={112} fill="#e0f2fe" stroke="#0369a1" strokeWidth={3} />
            {/* nucléolo */}
            <ellipse cx={230} cy={140} rx={52} ry={40} fill="#bfdbfe" stroke="#1d4ed8" strokeWidth={2} />
            <text x={230} y={145} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Nucléolo</text>
            {/* cromatina - fios */}
            <path d="M 310 100 Q 370 80 390 130 Q 410 170 360 180 Q 330 190 340 155 Q 350 120 310 100" fill="none" stroke="#7c3aed" strokeWidth={3} strokeLinecap="round" />
            <path d="M 360 105 Q 420 95 430 140 Q 440 175 400 185" fill="none" stroke="#7c3aed" strokeWidth={2.5} strokeLinecap="round" />
            <text x={400} y={100} textAnchor="middle" fontSize={12} fontWeight={600} fill="#5b21b6">Cromatina</text>
            {/* poros */}
            {[
              [71, 130], [68, 175], [105, 55], [280, 22], [455, 55], [492, 130], [489, 175], [280, 278],
            ].map(([cx, cy], i) => (
              <rect key={i} x={(cx as number) - 9} y={(cy as number) - 5} width={18} height={10} rx={3} fill="#f97316" stroke="#c2410c" strokeWidth={1.2} />
            ))}
            {/* legenda poros */}
            <text x={80} y={248} fontSize={11} fill="#c2410c" fontWeight={600}>Poros nucleares</text>
            {/* legenda membrana */}
            <text x={300} y={290} textAnchor="middle" fontSize={11} fill="#0369a1" fontWeight={600}>Carioteca (membrana dupla)</text>
            {/* nucleoplasma label */}
            <text x={290} y={215} textAnchor="middle" fontSize={12} fill="#64748b" fontStyle="italic">Nucleoplasma</text>
          </svg>
          <figcaption>
            Diagrama esquemático do núcleo eucariótico: carioteca de dupla membrana com poros, nucléolo
            (azul escuro) e cromatina (violeta). A membrana externa é contínua com o retículo endoplasmático.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que os poros são tão importantes?</h3>
          <p>
            Cada célula humana possui cerca de <strong>2 000 a 4 000 poros nucleares</strong>,
            cada um formado por aproximadamente 30 proteínas diferentes (nucleoporinas).
            Eles não são simples "buracos": realizam transporte{" "}
            <strong>ativo e seletivo</strong>. Moléculas pequenas (&lt; 9 nm)
            difundem livremente; proteínas maiores precisam de sinais de
            localização nuclear (NLS) para serem "aceitas". Esse controle garante
            que a expressão gênica seja regulada com precisão.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Empacotamento do DNA</span>

        <h2>2. Cromatina: Os Níveis de Compactação do DNA</h2>

        <p>
          Se estendido, o DNA de uma única célula humana somática mediria cerca
          de <strong>2 metros</strong>. Para caber em um núcleo de{" "}
          <strong>6 µm</strong> de diâmetro — compressão de mais de 300 000
          vezes — o DNA é progressivamente enrolado e dobrado em uma estrutura
          hierárquica chamada <strong>cromatina</strong>. Cada nível de
          compactação envolve proteínas específicas e tem consequências
          funcionais diretas.
        </p>

        <div className="math-block">
          <h3>Hierarquia de compactação (menor → maior)</h3>
          <ol>
            <li>
              <strong>Dupla hélice de DNA</strong> — ~2 nm de diâmetro.
            </li>
            <li>
              <strong>Nucleossomo</strong> — DNA enrolado ~1,7 vezes em torno
              de um octâmero de histonas (H2A, H2B, H3, H4 em pares); diâmetro
              ~11 nm. A histona H1 sela a entrada/saída do DNA.
            </li>
            <li>
              <strong>Fibra de 30 nm (solenoide)</strong> — nucleossomos
              empacotados em espiral; formada durante a interfase.
            </li>
            <li>
              <strong>Alças de 300 nm</strong> — domínios em alça presos a
              proteínas scaffold (andaimes); compactação ≈ 10 000×.
            </li>
            <li>
              <strong>Cromossomo metafásico</strong> — máxima condensação
              (~1 400 nm); visível ao microscópio óptico durante a divisão
              celular.
            </li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 160" width="680" height="160" aria-label="Níveis de compactação do DNA até cromossomo">
            <rect x={0} y={0} width={680} height={160} rx={12} fill="#faf5ff" />
            {/* Nível 1: DNA */}
            <line x1={30} y1={55} x2={30} y2={105} stroke="#7c3aed" strokeWidth={3} />
            <line x1={45} y1={45} x2={45} y2={115} stroke="#a78bfa" strokeWidth={3} />
            <text x={37} y={130} textAnchor="middle" fontSize={10} fill="#5b21b6" fontWeight={700}>DNA</text>
            <text x={37} y={142} textAnchor="middle" fontSize={9} fill="#6b7280">2 nm</text>
            {/* seta */}
            <polygon points="72,78 88,72 88,84" fill="#6b7280" />
            {/* Nível 2: Nucleossomo */}
            <circle cx={115} cy={80} r={18} fill="#ddd6fe" stroke="#7c3aed" strokeWidth={2} />
            <text x={115} y={85} textAnchor="middle" fontSize={9} fontWeight={700} fill="#4c1d95">nucl.</text>
            <circle cx={155} cy={80} r={18} fill="#ddd6fe" stroke="#7c3aed" strokeWidth={2} />
            <text x={155} y={85} textAnchor="middle" fontSize={9} fontWeight={700} fill="#4c1d95">nucl.</text>
            <line x1={133} y1={80} x2={137} y2={80} stroke="#7c3aed" strokeWidth={2} />
            <text x={135} y={128} textAnchor="middle" fontSize={10} fill="#5b21b6" fontWeight={700}>Nucleoss.</text>
            <text x={135} y={140} textAnchor="middle" fontSize={9} fill="#6b7280">11 nm</text>
            {/* seta */}
            <polygon points="188,78 204,72 204,84" fill="#6b7280" />
            {/* Nível 3: solenoide */}
            {[220, 234, 248, 262, 276].map((x, i) => (
              <ellipse key={i} cx={x} cy={80 + (i % 2 === 0 ? -6 : 6)} rx={12} ry={9} fill="#c4b5fd" stroke="#7c3aed" strokeWidth={1.5} />
            ))}
            <text x={250} y={128} textAnchor="middle" fontSize={10} fill="#5b21b6" fontWeight={700}>Fibra 30 nm</text>
            <text x={250} y={140} textAnchor="middle" fontSize={9} fill="#6b7280">30 nm</text>
            {/* seta */}
            <polygon points="302,78 318,72 318,84" fill="#6b7280" />
            {/* Nível 4: alças */}
            <rect x={325} y={58} width={52} height={44} rx={6} fill="#a78bfa" opacity={0.5} stroke="#7c3aed" strokeWidth={1.5} />
            <path d="M 340 68 Q 350 52 360 68" fill="none" stroke="#4c1d95" strokeWidth={2} />
            <path d="M 340 92 Q 350 108 360 92" fill="none" stroke="#4c1d95" strokeWidth={2} />
            <text x={351} y={130} textAnchor="middle" fontSize={10} fill="#5b21b6" fontWeight={700}>Alças</text>
            <text x={351} y={142} textAnchor="middle" fontSize={9} fill="#6b7280">300 nm</text>
            {/* seta */}
            <polygon points="392,78 408,72 408,84" fill="#6b7280" />
            {/* Nível 5: cromossomo */}
            <ellipse cx={445} cy={70} rx={18} ry={30} fill="#6d28d9" opacity={0.8} stroke="#4c1d95" strokeWidth={2} />
            <ellipse cx={475} cy={70} rx={18} ry={30} fill="#6d28d9" opacity={0.8} stroke="#4c1d95" strokeWidth={2} />
            <line x1={460} y1={52} x2={460} y2={88} stroke="#4c1d95" strokeWidth={2.5} />
            <text x={460} y={130} textAnchor="middle" fontSize={10} fill="#4c1d95" fontWeight={700}>Cromossomo</text>
            <text x={460} y={142} textAnchor="middle" fontSize={9} fill="#6b7280">1 400 nm</text>
            {/* seta final */}
            <polygon points="510,78 526,72 526,84" fill="#6b7280" />
            {/* cariótipo ícone */}
            <rect x={533} y={50} width={14} height={50} rx={3} fill="#0ea5e9" />
            <rect x={551} y={50} width={14} height={50} rx={3} fill="#0ea5e9" />
            <rect x={569} y={55} width={14} height={40} rx={3} fill="#0284c7" />
            <rect x={587} y={58} width={14} height={34} rx={3} fill="#0284c7" />
            <text x={570} y={130} textAnchor="middle" fontSize={10} fill="#0369a1" fontWeight={700}>Cariótipo</text>
            <text x={570} y={142} textAnchor="middle" fontSize={9} fill="#6b7280">visível</text>
          </svg>
          <figcaption>
            Hierarquia de compactação: do DNA de 2 nm ao cromossomo metafásico
            condensado (~1 400 nm), passando por nucleossomo, fibra de 30 nm e
            domínios em alça.
          </figcaption>
        </figure>

        <p>
          As <strong>histonas</strong> são proteínas altamente básicas
          (carregadas positivamente em pH fisiológico) que se ligam ao DNA
          carregado negativamente por afinidade eletrostática. Suas "caudas"
          N-terminais que projetam para fora do nucleossomo podem ser
          quimicamente modificadas — acetilação, metilação, fosforilação — numa
          linguagem epigenética que regula se um gene será silenciado ou expresso
          sem alterar a sequência do DNA.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Cromatina</th>
                <th>Grau de Condensação</th>
                <th>Atividade Transcricional</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Eucromatina</strong></td>
                <td>Pouco condensada (fibra 11-30 nm)</td>
                <td>Genes ativos; transcrição ocorre</td>
                <td>Genes de "manutenção" (housekeeping) ativos</td>
              </tr>
              <tr>
                <td><strong>Heterocromatina constitutiva</strong></td>
                <td>Muito condensada (permanente)</td>
                <td>Genes silenciados; sequências repetitivas</td>
                <td>Centrômeros, telômeros, satélites de DNA</td>
              </tr>
              <tr>
                <td><strong>Heterocromatina facultativa</strong></td>
                <td>Condensada de forma regulada</td>
                <td>Genes que podem ser reativados</td>
                <td>Corpúsculo de Barr (X inativado em XX)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Corpúsculo de Barr — inativação do X</h3>
          <p>
            Em células femininas (XX), um dos cromossomos X é inativado em
            cada célula somática, formando uma massa densa chamada{" "}
            <strong>corpúsculo de Barr</strong>. Isso equaliza a dose de
            expressão dos genes ligados ao X entre homens (XY) e mulheres (XX).
            A inativação é aleatória e permanente na linhagem celular: parte das
            células inativa o X materno, parte inativa o X paterno — gerando um
            mosaico genético. O número de corpúsculos de Barr é sempre igual a{" "}
            <strong>n° de X − 1</strong>: uma mulher normal (XX) tem 1; um
            indivíduo com Klinefelter (XXY) tem 1; uma mulher com síndrome de
            Turner (X0) tem 0.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Morfologia Cromossômica</span>

        <h2>3. Anatomia dos Cromossomos Metafásicos</h2>

        <p>
          Durante a <strong>interfase</strong> o DNA existe como cromatina
          descondensada, invisível ao microscópio óptico comum. Ao entrar em
          divisão celular, a cromatina condensa-se progressivamente até atingir
          o máximo na <strong>metáfase</strong>, quando os cromossomos tornam-se
          visíveis como estruturas individuais e podem ser fotografados para
          construir o cariótipo. Nesse estado, um cromossomo já duplicado é
          formado por <strong>duas cromátides-irmãs</strong> idênticas, unidas
          ao longo de toda sua extensão mas especialmente no{" "}
          <strong>centrômero</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 280" width="420" height="280" aria-label="Anatomia de um cromossomo metafásico com legendas">
            <rect x={0} y={0} width={420} height={280} rx={14} fill="#fefce8" />
            {/* Cromátide esquerda */}
            <path d="M 155 30 Q 140 80 140 130 Q 140 155 155 160 Q 170 165 170 130 Q 170 80 155 30" fill="#6d28d9" opacity={0.85} />
            {/* Cromátide direita */}
            <path d="M 185 30 Q 200 80 200 130 Q 200 155 185 160 Q 170 165 170 130 Q 170 80 185 30" fill="#7c3aed" opacity={0.85} />
            {/* Braço curto (p) — cima */}
            <text x={110} y={55} textAnchor="end" fontSize={12} fill="#374151" fontWeight={600}>Braço curto (p)</text>
            <line x1={112} y1={55} x2={150} y2={65} stroke="#9ca3af" strokeWidth={1.2} />
            {/* Braço longo (q) — baixo */}
            <path d="M 155 165 Q 140 210 150 250" fill="#6d28d9" opacity={0.85} />
            <path d="M 185 165 Q 200 210 190 250" fill="#7c3aed" opacity={0.85} />
            <text x={110} y={220} textAnchor="end" fontSize={12} fill="#374151" fontWeight={600}>Braço longo (q)</text>
            <line x1={112} y1={220} x2={151} y2={215} stroke="#9ca3af" strokeWidth={1.2} />
            {/* Centrômero */}
            <ellipse cx={170} cy={162} rx={22} ry={10} fill="#f59e0b" stroke="#d97706" strokeWidth={2} />
            <text x={225} y={168} fontSize={12} fill="#92400e" fontWeight={700}>Centrômero</text>
            <line x1={192} y1={162} x2={222} y2={164} stroke="#9ca3af" strokeWidth={1.2} />
            {/* Telômeros */}
            <ellipse cx={170} cy={30} rx={18} ry={8} fill="#16a34a" stroke="#15803d" strokeWidth={2} />
            <text x={225} y={34} fontSize={12} fill="#14532d" fontWeight={700}>Telômero</text>
            <line x1={188} y1={30} x2={222} y2={32} stroke="#9ca3af" strokeWidth={1.2} />
            <ellipse cx={170} cy={250} rx={18} ry={8} fill="#16a34a" stroke="#15803d" strokeWidth={2} />
            <line x1={188} y1={250} x2={222} y2={248} stroke="#9ca3af" strokeWidth={1.2} />
            <text x={225} y={252} fontSize={12} fill="#14532d" fontWeight={700}>Telômero</text>
            {/* Cromátides label */}
            <text x={370} y={95} textAnchor="middle" fontSize={12} fill="#4c1d95" fontWeight={700}>Cromátides</text>
            <text x={370} y={110} textAnchor="middle" fontSize={12} fill="#4c1d95" fontWeight={700}>irmãs</text>
            <line x1={348} y1={100} x2={200} y2={90} stroke="#9ca3af" strokeWidth={1.2} />
            <line x1={348} y1={107} x2={155} y2={90} stroke="#9ca3af" strokeWidth={1.2} />
          </svg>
          <figcaption>
            Cromossomo metafásico submetacêntrico: duas cromátides-irmãs (violeta)
            unidas no centrômero (âmbar); telômeros protetores (verde) nas
            extremidades; braços curto (p) e longo (q) definidos pelo centrômero.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Classificação dos cromossomos pela posição do centrômero</h3>
          <p>
            A posição do centrômero define o comprimento relativo dos braços e
            é usada para classificar morfologicamente cada cromossomo:
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Posição do Centrômero</th>
                <th>Braços</th>
                <th>Exemplos Humanos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Metacêntrico</strong></td>
                <td>Exatamente no meio</td>
                <td>p ≈ q (iguais)</td>
                <td>Cromossomo 1, 3</td>
              </tr>
              <tr>
                <td><strong>Submetacêntrico</strong></td>
                <td>Levemente deslocado</td>
                <td>p &lt; q</td>
                <td>Cromossomo 2, 4, 5</td>
              </tr>
              <tr>
                <td><strong>Acrocêntrico</strong></td>
                <td>Próximo a uma extremidade</td>
                <td>p muito curto</td>
                <td>Cromossomos 13, 14, 15, 21, 22</td>
              </tr>
              <tr>
                <td><strong>Telocêntrico</strong></td>
                <td>Na extremidade</td>
                <td>Braço p ausente</td>
                <td>Não ocorre em humanos normais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Os <strong>telômeros</strong> são sequências repetitivas de DNA
          (TTAGGG em vertebrados) que formam as extremidades dos cromossomos
          lineares. Funcionam como "capas protetoras" que impedem a fusão
          entre cromossomos diferentes e evitam o reconhecimento das
          extremidades como quebras de DNA. A cada divisão celular os telômeros
          encurtam ligeiramente — fenômeno associado ao <strong>envelhecimento
          celular</strong>. Células com alta taxa de divisão (células tronco,
          gametas, células cancerígenas) expressam a enzima{" "}
          <strong>telomerase</strong>, que restaura o comprimento telomérico.
        </p>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Ploidia</span>

        <h2>4. Conjuntos Cromossômicos: Haploide, Diploide e Poliploidia</h2>

        <p>
          O <strong>número cromossômico</strong> é uma característica de espécie.
          Organismos de reprodução sexuada possuem normalmente duas cópias de
          cada cromossomo (uma de origem materna, outra paterna),{" "}
          <strong>cromossomos homólogos</strong>, formando células{" "}
          <strong>diploides (2n)</strong>. Os gametas, produzidos por meiose,
          recebem apenas um membro de cada par, tornando-se{" "}
          <strong>haploides (n)</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Condição</th>
                <th>Notação</th>
                <th>Definição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Haploide</strong></td>
                <td>n</td>
                <td>Um conjunto de cromossomos (sem par)</td>
                <td>Gametas humanos (n = 23); gametófitos de plantas</td>
              </tr>
              <tr>
                <td><strong>Diploide</strong></td>
                <td>2n</td>
                <td>Dois conjuntos (par homólogo)</td>
                <td>Células somáticas humanas (2n = 46)</td>
              </tr>
              <tr>
                <td><strong>Triploide</strong></td>
                <td>3n</td>
                <td>Três conjuntos</td>
                <td>Banana cultivada (3n = 33); endosperma de sementes</td>
              </tr>
              <tr>
                <td><strong>Tetraploide</strong></td>
                <td>4n</td>
                <td>Quatro conjuntos</td>
                <td>Morango cultivado (4n = 28)</td>
              </tr>
              <tr>
                <td><strong>Hexaploide</strong></td>
                <td>6n</td>
                <td>Seis conjuntos</td>
                <td>Trigo comum — <em>Triticum aestivum</em> (6n = 42)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Humano</h3>
            <p>2n = 46 (23 pares); n = 23 nos gametas.</p>
          </div>

          <div className="lesson-card">
            <span>🐕</span>
            <h3>Cão</h3>
            <p>2n = 78; mais cromossomos que o humano, mas menor genoma.</p>
          </div>

          <div className="lesson-card">
            <span>🐭</span>
            <h3>Camundongo</h3>
            <p>2n = 40.</p>
          </div>

          <div className="lesson-card">
            <span>🐝</span>
            <h3>Abelha-operária</h3>
            <p>2n = 32 (diploide, fêmea); zangão: n = 16 (haploide, macho).</p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Trigo</h3>
            <p>2n = 42 (hexaploide); resultado de hibridações naturais.</p>
          </div>

          <div className="lesson-card">
            <span>🍓</span>
            <h3>Morango</h3>
            <p>2n = 56 (octaploide, 8n); poliploidia melhorou o sabor.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção:</strong> o número de cromossomos{" "}
            <strong>não reflete a complexidade do organismo</strong>. A samambaia{" "}
            <em>Ophioglossum reticulatum</em> tem 2n = 1 440 — o maior
            número conhecido — mas é muito menos complexa que um ser humano
            com 2n = 46.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Cariótipo</span>

        <h2>5. Cariótipo: Fotografia dos Cromossomos</h2>

        <p>
          O <strong>cariótipo</strong> é a representação fotográfica ordenada
          dos cromossomos de uma célula em metáfase, organizada por tamanho
          (do maior para o menor), posição do centrômero e padrão de bandas
          (G-banding, Q-banding). A técnica exige a obtenção de células em
          divisão — leucócitos do sangue periférico são os mais utilizados na
          prática clínica — tratadas com colchicina (que bloqueia o fuso
          mitótico na metáfase), hipotonia (que expande as células), fixação,
          coloração e fotografia ao microscópio.
        </p>

        <div className="math-block">
          <h3>Cariótipo humano normal</h3>
          <p>Total: <strong>46 cromossomos = 44 autossomos + 2 sexuais</strong></p>
          <p>Mulher: <strong>46, XX</strong> — 22 pares autossômicos + par XX</p>
          <p>Homem: <strong>46, XY</strong> — 22 pares autossômicos + par XY</p>
          <p>
            Os 22 pares de <strong>autossomos</strong> são iguais em ambos os
            sexos. Os <strong>cromossomos sexuais</strong> (alossomas) diferem:
            o X é grande (~155 Mb), com ~800 genes; o Y é pequeno (~57 Mb),
            com ~70 genes ativos, incluindo o <em>SRY</em> (região
            determinante do sexo).
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Determinação do sexo: sistema XY vs. ZW</h3>
          <p>
            Nos humanos e na maioria dos mamíferos, a determinação do sexo
            é feita pelo cromossomo Y: a presença do gene <em>SRY</em> no Y
            desencadeia o desenvolvimento das gônadas como testículos. Como a
            mãe (XX) sempre doa um X ao óvulo, é o{" "}
            <strong>espermatozoide</strong> (que pode levar X ou Y) que define
            o sexo do embrião. Nas <strong>aves</strong> (e alguns répteis)
            o sistema é invertido: a <strong>fêmea</strong> é heterogamética
            (ZW) e o <strong>macho</strong> homogamético (ZZ), sendo o óvulo
            que determina o sexo.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Alterações Numéricas</span>

        <h2>6. Aneuploidias e Principais Síndromes Cromossômicas</h2>

        <p>
          <strong>Aneuploidia</strong> é a condição em que uma célula apresenta
          número de cromossomos diferente do múltiplo exato do conjunto
          haploide. Resulta, na maioria dos casos, de{" "}
          <strong>não-disjunção meiótica</strong> — falha na separação de
          cromossomos homólogos (na meiose I) ou de cromátides-irmãs (na
          meiose II) —, produzindo gametas com cromossomo a mais
          (<strong>n+1</strong>, dissomia) ou a menos (<strong>n−1</strong>,
          nulissomia). Quando fecundados por gameta normal (n), originam
          zigotos <strong>trissômicos (2n+1)</strong> ou{" "}
          <strong>monossômicos (2n−1)</strong>, respectivamente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>21</span>
            <h3>Síndrome de Down</h3>
            <p>
              Trissomia do cromossomo 21 — 47, XX+21 ou 47, XY+21. Traços
              faciais característicos, hipotonia muscular, deficiência
              intelectual variável. Frequência: ~1:700. Risco aumenta com
              a idade materna.
            </p>
          </div>

          <div className="lesson-card">
            <span>18</span>
            <h3>Síndrome de Edwards</h3>
            <p>
              Trissomia do 18 — 47,XX+18 ou 47,XY+18. Malformações cardíacas
              graves, punho fechado. Frequência: ~1:6 000; alta
              mortalidade perinatal.
            </p>
          </div>

          <div className="lesson-card">
            <span>13</span>
            <h3>Síndrome de Patau</h3>
            <p>
              Trissomia do 13 — 47,+13. Fenda palatina, polidactilia,
              malformações do SNC. Frequência: ~1:10 000.
            </p>
          </div>

          <div className="lesson-card">
            <span>X0</span>
            <h3>Síndrome de Turner</h3>
            <p>
              Monossomia do X — 45, X (único cromossomo sexual). Fenótipo
              feminino; baixa estatura, pescoço alado, infertilidade,
              ausência de puberdade espontânea.
            </p>
          </div>

          <div className="lesson-card">
            <span>XXY</span>
            <h3>Síndrome de Klinefelter</h3>
            <p>
              47, XXY. Fenótipo masculino; testículos pequenos, ginecomastia,
              infertilidade, estatura alta. Frequência: ~1:1 000 homens.
            </p>
          </div>

          <div className="lesson-card">
            <span>XYY</span>
            <h3>Síndrome XYY</h3>
            <p>
              47, XYY. Fenótipo masculino normal; pode haver estatura acima
              da média. Geralmente fértil; não associado a agressividade
              (mito histórico refutado).
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Síndrome</th>
                <th>Cariótipo</th>
                <th>Tipo</th>
                <th>Corpúsculos de Barr</th>
                <th>Causa Mais Comum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Down</td>
                <td>47, XX+21 / XY+21</td>
                <td>Trissomia autossômica</td>
                <td>0 (♂) ou 1 (♀)</td>
                <td>Não-disjunção materna na meiose I</td>
              </tr>
              <tr>
                <td>Turner</td>
                <td>45, X</td>
                <td>Monossomia sexual</td>
                <td>0</td>
                <td>Perda do cromossomo paterno</td>
              </tr>
              <tr>
                <td>Klinefelter</td>
                <td>47, XXY</td>
                <td>Trissomia sexual</td>
                <td>1</td>
                <td>Não-disjunção (materna ou paterna)</td>
              </tr>
              <tr>
                <td>Triple X</td>
                <td>47, XXX</td>
                <td>Trissomia sexual</td>
                <td>2</td>
                <td>Não-disjunção materna</td>
              </tr>
              <tr>
                <td>XYY</td>
                <td>47, XYY</td>
                <td>Trissomia sexual</td>
                <td>0</td>
                <td>Não-disjunção paterna na meiose II</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Regra do Corpúsculo de Barr</h3>
          <p>
            O número de corpúsculos de Barr visíveis no núcleo é sempre igual
            ao <strong>número de cromossomos X menos 1</strong>. Isso é
            consequência da inativação do X: cada X "extra" além de um é
            inativado e visível como heterocromatina densa. Por isso:
            45,X → 0 corpúsculos; 46,XX → 1; 47,XXX → 2; 47,XXY → 1.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Alterações Estruturais</span>

        <h2>7. Alterações Estruturais dos Cromossomos</h2>

        <p>
          Além das alterações numéricas, os cromossomos podem sofrer{" "}
          <strong>rearranjos estruturais</strong> quando o DNA é quebrado e
          reunido de forma incorreta — espontaneamente ou induzido por
          agentes mutagênicos (radiação ionizante, certos vírus, produtos
          químicos). Cada tipo de rearranjo tem consequências fenotípicas
          distintas:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Deleção</h3>
            <p>
              Perda de um segmento cromossômico. Ex.: Síndrome do Cri-du-Chat
              (deleção no braço curto do cromossomo 5), com choro agudo
              característico em bebês.
            </p>
          </div>

          <div className="lesson-card">
            <span>➕</span>
            <h3>Duplicação</h3>
            <p>
              Repetição de um segmento. Pode aumentar a expressão de genes
              naquela região; base evolutiva para criação de famílias
              multigênicas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Inversão</h3>
            <p>
              Segmento cromossômico inserido em orientação invertida.
              Pericêntrica (inclui o centrômero) ou paracêntrica (não inclui).
            </p>
          </div>

          <div className="lesson-card">
            <span>↔️</span>
            <h3>Translocação</h3>
            <p>
              Segmento transferido para outro cromossomo (não homólogo). A
              translocação recíproca t(9;22) origina o cromossomo Philadelphia,
              associado à leucemia mieloide crônica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Dica ENEM/vestibular:</strong> a maioria das alterações
            estruturais resulta de <strong>quebra e reunião</strong> incorreta.
            Portadores de translocação equilibrada (sem perda de material) são
            geralmente fenotipicamente normais, mas podem ter filhos com
            desequilíbrio cromossômico — razão importante para investigação
            de casais com abortos de repetição.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 — EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>8. Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Função do nucléolo"
          statement={
            <p>
              O nucléolo é uma estrutura densa presente no interior do núcleo
              celular eucariótico. Qual é sua principal função?
            </p>
          }
          options={[
            { letter: "a", text: "Replicar o DNA antes da divisão celular" },
            {
              letter: "b",
              text: "Sintetizar RNA ribossômico (rRNA) e montar as subunidades do ribossomo",
              correct: true,
            },
            { letter: "c", text: "Controlar a passagem de proteínas para o citoplasma" },
            { letter: "d", text: "Armazenar lipídios para a membrana nuclear" },
          ]}
          resolution={
            <p>
              O nucléolo é a fábrica de ribossomos da célula: nele são
              transcritos os genes de rRNA (a maior fração do RNA celular) e
              as subunidades ribossômicas são montadas antes de migrar para o
              citoplasma pelos poros nucleares. A replicação do DNA ocorre no
              nucleoplasma, não no nucléolo; o controle de passagem cabe aos
              poros nucleares; lipídios não são função nuclear.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Eucromatina e heterocromatina"
          statement={
            <p>
              Uma pesquisadora observa ao microscópio eletrônico que certas
              regiões do núcleo estão muito condensadas e coram-se com maior
              intensidade, enquanto outras regiões são difusas e menos coradas.
              Assinale a afirmação CORRETA sobre essa observação:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As regiões condensadas (heterocromatina) correspondem a genes mais ativamente transcritos",
            },
            {
              letter: "b",
              text: "As regiões difusas (eucromatina) correspondem a genes ativos, enquanto as condensadas (heterocromatina) abrigam genes silenciados",
              correct: true,
            },
            {
              letter: "c",
              text: "Ambas as regiões possuem a mesma atividade transcricional",
            },
            {
              letter: "d",
              text: "A heterocromatina é formada exclusivamente por RNA, não por DNA",
            },
          ]}
          resolution={
            <p>
              A eucromatina, menos condensada, tem seus genes acessíveis à
              maquinaria de transcrição (RNA polimerase) e está associada a
              genes em atividade. A heterocromatina, muito condensada, tem
              o DNA "fechado" para enzimas de transcrição — seus genes
              ficam silenciados. A heterocromatina é composta de
              DNA + proteínas histonas (cromatina), não de RNA.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Corpúsculo de Barr e cariótipo"
          statement={
            <p>
              Um laboratório analisa células da mucosa bucal de quatro
              indivíduos e conta o número de corpúsculos de Barr em cada um:
              Indivíduo 1 — 0 corpúsculos; Indivíduo 2 — 1 corpúsculo;
              Indivíduo 3 — 2 corpúsculos; Indivíduo 4 — 1 corpúsculo.
              Considerando apenas os cariótipos mais frequentes associados a
              esses resultados, qual é a sequência correta?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "45,X / 46,XX / 47,XXX / 47,XXY",
              correct: true,
            },
            {
              letter: "b",
              text: "46,XY / 46,XX / 47,XXX / 47,XXY",
            },
            {
              letter: "c",
              text: "45,X / 46,XY / 47,XXY / 47,XXX",
            },
            {
              letter: "d",
              text: "46,XX / 47,XXY / 47,XXX / 45,X",
            },
          ]}
          resolution={
            <>
              <p>
                A regra é: <strong>n° de corpúsculos de Barr = n° de X − 1</strong>.
              </p>
              <p>
                0 corpúsculos → 1 cromossomo X → cariótipo mais comum: 45,X (Turner).
                1 corpúsculo → 2 X → 46,XX (mulher normal) ou 47,XXY (Klinefelter — também 1 Barr).
                2 corpúsculos → 3 X → 47,XXX (triplo X).
                O indivíduo 4 com 1 Barr mais frequentemente corresponde a 47,XXY.
              </p>
              <p>
                A sequência 45,X / 46,XX / 47,XXX / 47,XXY é a única compatível.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Diagnóstico pré-natal (vestibular)"
          statement={
            <p>
              Uma gestante de 38 anos realizou amniocentese e o laudo indicou
              que o cariótipo do feto apresenta 47 cromossomos, com três cópias
              do cromossomo 21. O médico informou que esse achado é mais
              frequente em gestações de mulheres mais velhas porque, com o
              avançar da idade, aumenta a probabilidade de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Translocação do cromossomo 21 induzida por radiação ultravioleta",
            },
            {
              letter: "b",
              text: "Não-disjunção durante a meiose I materna, resultando em óvulo com dois cromossomos 21",
              correct: true,
            },
            {
              letter: "c",
              text: "Duplicação gênica no cromossomo 21 do espermatozoide paterno",
            },
            {
              letter: "d",
              text: "Inversão pericêntrica no cromossomo 21, tornando-o morfologicamente trissômico",
            },
          ]}
          resolution={
            <p>
              A trissomia do 21 (Síndrome de Down) resulta predominantemente de
              não-disjunção na <strong>meiose I materna</strong> — os dois
              homólogos 21 da mãe não se separam e ambos vão para o mesmo
              óvulo (n+1 = 24 cromossomos). Esse óvulo, ao ser fecundado por
              espermatozoide normal (n = 23), origina zigoto 2n+1 = 47. O
              risco aumenta com a idade materna porque os oócitos primários
              são formados ainda na vida fetal e permanecem paralisados em
              prófase I por décadas — tempo suficiente para o deterioração
              das proteínas de coesão que mantêm os homólogos unidos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Aplicação biotecnológica da poliploidia"
          statement={
            <p>
              Pesquisadores de melhoramento vegetal trataram sementes de uma
              espécie diploide (2n = 14) com colchicina, um alcaloide que
              impede a formação do fuso acromático. As plantas resultantes
              tinham frutos maiores, folhas mais largas e células de maior
              volume. Com base nesses resultados, assinale a alternativa que
              explica corretamente o mecanismo e o número cromossômico das
              plantas obtidas:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A colchicina provocou mutações pontuais no DNA, gerando plantas com 2n = 14 mais eficientes",
            },
            {
              letter: "b",
              text: "A colchicina impediu a citocinese após a duplicação do DNA, dobrando o número de cromossomos para 4n = 28 (poliploidia)",
              correct: true,
            },
            {
              letter: "c",
              text: "A colchicina eliminou metade dos cromossomos, gerando plantas haploides (n = 7) mais vigorosas",
            },
            {
              letter: "d",
              text: "A colchicina inseriu 14 cromossomos extras ao azar, originando plantas com 2n = 28 aneuploides",
            },
          ]}
          resolution={
            <p>
              A colchicina liga-se à tubulina e impede a polimerização dos
              microtúbulos do fuso mitótico. Sem o fuso, as cromátides não se
              segregam — o DNA foi duplicado mas as células não se dividiram
              (sem citocinese). O resultado é uma célula com o dobro do
              número de cromossomos: de 2n = 14 para <strong>4n = 28</strong>{" "}
              (tetraploide). Plantas poliploides geralmente têm células maiores
              (gigantismo celular) e órgãos mais volumosos porque possuem mais
              cópias dos genes produtores de biomassa — princípio largamente
              explorado na agricultura (melancia sem sementes, banana, morango,
              trigo).
            </p>
          }
        />
      </section>
    </article>
  );
}
