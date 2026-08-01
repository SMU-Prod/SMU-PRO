"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 38</span>
          <h1>Funções Orgânicas II: Oxigenadas</h1>
          <p>
            O cheiro de banana de uma bala, o vinagre da salada, o álcool do combustível, a acetona que
            remove o esmalte e o formol dos laboratórios têm algo em comum: todos pertencem às{" "}
            <strong>funções oxigenadas</strong>. São compostos orgânicos cujo grupo funcional contém{" "}
            <strong>oxigênio</strong> — e é justamente a forma como esse oxigênio se liga ao carbono que
            decide se a molécula é um álcool, um aldeído, um ácido ou um perfume de fruta. Neste capítulo
            você vai reconhecer cada grupo, nomeá-lo pela IUPAC e ligá-lo ao seu uso no cotidiano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que são Funções Oxigenadas?</h2>
        <p>
          <strong>Funções oxigenadas</strong> são as funções orgânicas cujo <strong>grupo funcional</strong>{" "}
          contém o elemento <strong>oxigênio</strong> ligado à cadeia carbônica. O oxigênio é divalente
          (faz duas ligações), e a maneira como ele se conecta ao carbono — por ligação simples (–O–),
          em uma hidroxila (–OH) ou em uma dupla ligação (C=O, a <em>carbonila</em>) — determina a função
          e, com ela, todas as propriedades físicas, químicas e a nomenclatura do composto.
        </p>
        <p>
          As sete funções oxigenadas mais cobradas no ENEM e nos vestibulares são:{" "}
          <strong>álcool</strong>, <strong>fenol</strong>, <strong>enol</strong>, <strong>éter</strong>,{" "}
          <strong>aldeído</strong>, <strong>cetona</strong>, <strong>ácido carboxílico</strong> e{" "}
          <strong>éster</strong>. Identificar a função é, antes de tudo, identificar onde está o oxigênio.
        </p>
        <div className="lesson-highlight">
          <h3>As três "peças" do oxigênio na química orgânica</h3>
          <p>
            <strong>Hidroxila (–OH):</strong> aparece em álcoois, fenóis, enóis e (com a carbonila) em
            ácidos carboxílicos. <strong>Carbonila (C=O):</strong> aparece em aldeídos, cetonas, ácidos e
            ésteres. <strong>Oxigênio de ligação simples (–O–):</strong> conecta dois carbonos em éteres e
            fecha o grupo dos ésteres (–COO–).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grupos funcionais</span>
        <h2>2. Os Grupos Funcionais Oxigenados (esquema)</h2>
        <p>
          Antes de estudar função por função, observe lado a lado os principais grupos desenhados de forma
          esquemática. As ligações são traços e os átomos, letras. Repare como o mesmo átomo de oxigênio
          monta arranjos diferentes — e cada arranjo é uma função distinta.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 560 260" width="560" height="260" aria-label="Grupos funcionais oxigenados: hidroxila, carbonila, carboxila, éster e éter">
            {/* Hidroxila */}
            <text x="60" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Hidroxila</text>
            <text x="30" y="80" fontSize="15" fill="#374151">C</text>
            <line x1="44" y1="75" x2="68" y2="75" stroke="#374151" strokeWidth="2"/>
            <text x="72" y="80" fontSize="15" fill="#dc2626">O</text>
            <line x1="86" y1="75" x2="106" y2="75" stroke="#374151" strokeWidth="2"/>
            <text x="108" y="80" fontSize="15" fill="#374151">H</text>
            <text x="60" y="108" textAnchor="middle" fontSize="11" fill="#6b7280">–OH (álcool)</text>

            {/* Carbonila */}
            <text x="230" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed">Carbonila</text>
            <text x="208" y="80" fontSize="15" fill="#374151">C</text>
            <line x1="224" y1="71" x2="252" y2="71" stroke="#374151" strokeWidth="2"/>
            <line x1="224" y1="79" x2="252" y2="79" stroke="#374151" strokeWidth="2"/>
            <text x="254" y="80" fontSize="15" fill="#dc2626">O</text>
            <text x="230" y="108" textAnchor="middle" fontSize="11" fill="#6b7280">C=O (aldeído/cetona)</text>

            {/* Carboxila */}
            <text x="430" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">Carboxila</text>
            <text x="380" y="80" fontSize="15" fill="#374151">C</text>
            <line x1="396" y1="71" x2="420" y2="71" stroke="#374151" strokeWidth="2"/>
            <line x1="396" y1="79" x2="420" y2="79" stroke="#374151" strokeWidth="2"/>
            <text x="422" y="80" fontSize="15" fill="#dc2626">O</text>
            <line x1="388" y1="90" x2="388" y2="112" stroke="#374151" strokeWidth="2"/>
            <text x="380" y="130" fontSize="15" fill="#dc2626">O</text>
            <line x1="396" y1="125" x2="416" y2="125" stroke="#374151" strokeWidth="2"/>
            <text x="418" y="130" fontSize="15" fill="#374151">H</text>
            <text x="430" y="158" textAnchor="middle" fontSize="11" fill="#6b7280">–COOH (ácido)</text>

            {/* linha divisória */}
            <line x1="20" y1="178" x2="540" y2="178" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Éter */}
            <text x="150" y="206" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">Éter</text>
            <text x="70" y="240" fontSize="15" fill="#374151">C</text>
            <line x1="86" y1="235" x2="110" y2="235" stroke="#374151" strokeWidth="2"/>
            <text x="112" y="240" fontSize="15" fill="#dc2626">O</text>
            <line x1="128" y1="235" x2="152" y2="235" stroke="#374151" strokeWidth="2"/>
            <text x="154" y="240" fontSize="15" fill="#374151">C</text>
            <text x="240" y="240" fontSize="11" fill="#6b7280">C–O–C (oxigênio entre 2 carbonos)</text>

            {/* Éster */}
            <text x="430" y="206" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">Éster</text>
            <text x="356" y="240" fontSize="15" fill="#374151">C</text>
            <line x1="370" y1="231" x2="392" y2="231" stroke="#374151" strokeWidth="2"/>
            <line x1="370" y1="239" x2="392" y2="239" stroke="#374151" strokeWidth="2"/>
            <text x="394" y="240" fontSize="15" fill="#dc2626">O</text>
            <line x1="365" y1="222" x2="365" y2="200" stroke="#374151" strokeWidth="0"/>
            <line x1="410" y1="235" x2="430" y2="235" stroke="#374151" strokeWidth="2"/>
            <text x="432" y="240" fontSize="15" fill="#dc2626">O</text>
            <line x1="448" y1="235" x2="468" y2="235" stroke="#374151" strokeWidth="2"/>
            <text x="470" y="240" fontSize="15" fill="#374151">C</text>
            <text x="430" y="222" textAnchor="middle" fontSize="11" fill="#6b7280">–COO– (aromas de frutas)</text>
          </svg>
          <figcaption>
            Os cinco arranjos-chave do oxigênio. A hidroxila define álcoois e fenóis; a carbonila, aldeídos
            e cetonas; a carboxila, os ácidos; o oxigênio simples entre carbonos, os éteres; e o grupo
            –COO–, os ésteres.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Álcool</span>
        <h2>3. Álcoois</h2>
        <p>
          <strong>Álcool</strong> é o composto que apresenta o grupo <strong>hidroxila (–OH)</strong>{" "}
          ligado a um carbono <strong>saturado</strong> (carbono que faz apenas ligações simples). É essa
          condição "carbono saturado" que diferencia o álcool do fenol e do enol.
        </p>
        <ul>
          <li><strong>Grupo funcional:</strong> –OH em carbono saturado.</li>
          <li>
            <strong>Nomenclatura IUPAC:</strong> sufixo <strong>‑ol</strong> (prefixo do nº de carbonos +
            infixo da saturação + <em>ol</em>), indicando a posição da hidroxila quando necessário. Ex.:{" "}
            <M>{"\\text{propan-1-ol}"}</M>.
          </li>
          <li>
            <strong>Exemplos:</strong> metanol (<M>{"\\text{CH}_3\\text{OH}"}</M>, tóxico, combustível e
            solvente); etanol (<M>{"\\text{CH}_3\\text{CH}_2\\text{OH}"}</M>, das bebidas, do álcool em gel
            e do etanol combustível); etilenoglicol (anticongelante); glicerol/glicerina (cosméticos).
          </li>
        </ul>
        <p>
          Álcoois fazem <strong>ligações de hidrogênio</strong> graças ao –OH, por isso têm pontos de
          ebulição altos e os de cadeia curta são solúveis em água. Quanto ao nº de hidroxilas, podem ser
          monoálcoois (1 OH), diálcoois (2 OH, como o etilenoglicol) ou triálcoois (3 OH, como o glicerol).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenol e Enol</span>
        <h2>4. Fenóis e Enóis</h2>
        <p>
          São duas funções em que a hidroxila <em>não</em> está em carbono saturado — por isso não são
          álcoois, apesar de também terem –OH.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬡</span>
            <h3>Fenol</h3>
            <p>
              Hidroxila ligada <strong>diretamente a um carbono do anel aromático</strong>. Tem caráter{" "}
              <strong>levemente ácido</strong> (mais ácido que o álcool). Ex.: fenol comum (germicidas,
              resinas), cresóis, e o grupo presente em muitos antioxidantes.
            </p>
          </div>
          <div className="lesson-card">
            <span>〰️</span>
            <h3>Enol</h3>
            <p>
              Hidroxila ligada a um carbono que faz <strong>dupla ligação</strong> (<M>{"\\text{C}=\\text{C}-\\text{OH}"}</M>).
              Em geral é <strong>instável</strong> e se converte na cetona/aldeído correspondente
              (tautomeria ceto-enólica).
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção à pegadinha clássica:</strong> ter –OH não basta para ser álcool. Se o –OH
            está no anel aromático, é <strong>fenol</strong>; se está em carbono com dupla, é{" "}
            <strong>enol</strong>; só é <strong>álcool</strong> quando o –OH está em carbono saturado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Éter</span>
        <h2>5. Éteres</h2>
        <p>
          <strong>Éter</strong> é o composto em que um átomo de <strong>oxigênio liga dois grupos
          carbônicos</strong> (<M>{"\\text{R}-\\text{O}-\\text{R}'"}</M>). O oxigênio fica "no meio",
          unindo duas porções da cadeia.
        </p>
        <ul>
          <li><strong>Grupo funcional:</strong> –O– (oxigênio entre dois carbonos).</li>
          <li>
            <strong>Nomenclatura IUPAC:</strong> o radical menor + oxigênio recebe o prefixo{" "}
            <strong>‑óxi</strong>, e a maior cadeia é nomeada como o hidrocarboneto. Ex.:{" "}
            <M>{"\\text{CH}_3-\\text{O}-\\text{CH}_2\\text{CH}_3"}</M> = metoxietano. Pela nomenclatura
            usual: "éter etílico e metílico".
          </li>
          <li>
            <strong>Exemplos:</strong> éter dietílico (<M>{"\\text{C}_2\\text{H}_5-\\text{O}-\\text{C}_2\\text{H}_5"}</M>,
            o "éter" anestésico histórico e solvente); éteres aromáticos como o anetol (aroma de erva-doce).
          </li>
        </ul>
        <p>
          Como o oxigênio do éter não tem hidrogênio ligado a ele, os éteres <strong>não</strong> fazem
          ligações de hidrogênio entre si — por isso têm pontos de ebulição bem menores que os álcoois
          de massa parecida e são bastante voláteis.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Carbonilados</span>
        <h2>6. Aldeídos e Cetonas</h2>
        <p>
          Aldeídos e cetonas compartilham o mesmo grupo — a <strong>carbonila</strong> (<M>{"\\text{C}=\\text{O}"}</M>) —
          mas diferem na <strong>posição</strong> dela na cadeia. Essa diferença de posição é a chave para
          distinguir as duas funções e aparece com frequência nas provas.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 250" width="520" height="250" aria-label="Comparação entre aldeído (carbonila na ponta) e cetona (carbonila no meio)">
            {/* Aldeído */}
            <text x="130" y="36" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">ALDEÍDO — carbonila na ponta</text>
            {/* R */}
            <text x="40" y="105" fontSize="15" fill="#374151">R</text>
            <line x1="56" y1="100" x2="84" y2="100" stroke="#374151" strokeWidth="2"/>
            {/* C */}
            <text x="86" y="105" fontSize="15" fill="#374151">C</text>
            {/* dupla C=O para cima */}
            <line x1="95" y1="90" x2="95" y2="62" stroke="#374151" strokeWidth="2"/>
            <line x1="103" y1="90" x2="103" y2="62" stroke="#374151" strokeWidth="2"/>
            <text x="92" y="58" fontSize="15" fill="#dc2626">O</text>
            {/* ligação a H */}
            <line x1="102" y1="100" x2="130" y2="100" stroke="#374151" strokeWidth="2"/>
            <text x="132" y="105" fontSize="15" fill="#374151">H</text>
            <rect x="60" y="120" width="100" height="26" rx="6" fill="#dbeafe" stroke="#2563eb"/>
            <text x="110" y="138" textAnchor="middle" fontSize="12" fill="#1e40af">–CHO • sufixo ‑al</text>
            <text x="110" y="170" textAnchor="middle" fontSize="11" fill="#6b7280">Ex.: metanal (formol),</text>
            <text x="110" y="186" textAnchor="middle" fontSize="11" fill="#6b7280">etanal (acetaldeído)</text>

            {/* divisória */}
            <line x1="260" y1="40" x2="260" y2="200" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Cetona */}
            <text x="390" y="36" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7c3aed">CETONA — carbonila no meio</text>
            <text x="300" y="105" fontSize="15" fill="#374151">R</text>
            <line x1="316" y1="100" x2="344" y2="100" stroke="#374151" strokeWidth="2"/>
            <text x="346" y="105" fontSize="15" fill="#374151">C</text>
            <line x1="355" y1="90" x2="355" y2="62" stroke="#374151" strokeWidth="2"/>
            <line x1="363" y1="90" x2="363" y2="62" stroke="#374151" strokeWidth="2"/>
            <text x="352" y="58" fontSize="15" fill="#dc2626">O</text>
            <line x1="362" y1="100" x2="390" y2="100" stroke="#374151" strokeWidth="2"/>
            <text x="392" y="105" fontSize="15" fill="#374151">R'</text>
            <rect x="318" y="120" width="110" height="26" rx="6" fill="#ede9fe" stroke="#7c3aed"/>
            <text x="373" y="138" textAnchor="middle" fontSize="12" fill="#5b21b6">C=O interno • sufixo ‑ona</text>
            <text x="373" y="170" textAnchor="middle" fontSize="11" fill="#6b7280">Ex.: propanona (acetona),</text>
            <text x="373" y="186" textAnchor="middle" fontSize="11" fill="#6b7280">butanona</text>
          </svg>
          <figcaption>
            No aldeído a carbonila está na extremidade da cadeia (carbono primário, ligado a um H → grupo
            –CHO); na cetona, a carbonila está entre dois carbonos (carbono secundário). Mesma carbonila,
            posições diferentes, funções diferentes.
          </figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Aldeído</h3>
            <p>
              Carbonila na <strong>ponta</strong> (grupo –CHO). Sufixo <strong>‑al</strong>. Ex.: metanal
              (formol/formaldeído, conservante e germicida); etanal. São facilmente oxidados a ácidos.
            </p>
          </div>
          <div className="lesson-card">
            <span>💅</span>
            <h3>Cetona</h3>
            <p>
              Carbonila <strong>no meio</strong> da cadeia. Sufixo <strong>‑ona</strong>. Ex.: propanona
              (acetona, removedor de esmalte e solvente); butanona (solvente industrial).
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ácido</span>
        <h2>7. Ácidos Carboxílicos</h2>
        <p>
          <strong>Ácido carboxílico</strong> é o composto que possui o grupo <strong>carboxila
          (–COOH)</strong> — uma carbonila e uma hidroxila no mesmo carbono. É a função oxigenada de{" "}
          <strong>caráter ácido</strong> mais importante: em água, libera o íon <M>{"\\text{H}^+"}</M> da
          hidroxila.
        </p>
        <ul>
          <li><strong>Grupo funcional:</strong> –COOH (carboxila).</li>
          <li>
            <strong>Nomenclatura IUPAC:</strong> "<strong>ácido</strong>" + prefixo do nº de carbonos +
            infixo + "<strong>‑oico</strong>". Ex.: <M>{"\\text{HCOOH}"}</M> = ácido metanoico;{" "}
            <M>{"\\text{CH}_3\\text{COOH}"}</M> = ácido etanoico.
          </li>
          <li>
            <strong>Exemplos do cotidiano:</strong> ácido etanoico (acético), o ácido do vinagre; ácido
            metanoico (fórmico), o da picada de formigas e abelhas; ácido cítrico (frutas cítricas); ácidos
            graxos de cadeia longa, que compõem óleos e gorduras.
          </li>
        </ul>
        <div className="lesson-highlight">
          <p>
            A carboxila reúne uma carbonila (C=O) e uma hidroxila (O–H) no <em>mesmo</em> carbono. É essa
            vizinhança que enfraquece a ligação O–H e dá ao composto sua acidez característica — bem mais
            forte que a do álcool e a do fenol.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Éster</span>
        <h2>8. Ésteres</h2>
        <p>
          <strong>Éster</strong> é o composto que apresenta o grupo <strong>–COO–</strong>, obtido pela
          troca do hidrogênio da carboxila de um ácido por um grupo carbônico. Ésteres se formam na reação
          de <strong>esterificação</strong>: ácido carboxílico + álcool ⇌ éster + água.
        </p>
        <ul>
          <li><strong>Grupo funcional:</strong> –COO– (R–COO–R').</li>
          <li>
            <strong>Nomenclatura IUPAC:</strong> nome do ácido com sufixo <strong>‑oato</strong> +{" "}
            "<strong>de</strong>" + nome do radical do álcool com sufixo <strong>‑ila</strong>. Ex.:{" "}
            etanoato de etila; butanoato de etila (aroma de abacaxi).
          </li>
          <li>
            <strong>Exemplos do cotidiano:</strong> ésteres são os principais responsáveis pelos{" "}
            <strong>aromas e sabores de frutas</strong> (banana, morango, maçã, abacaxi) usados em balas,
            sucos e perfumes; o acetato de etila é solvente de esmaltes; e os <em>triglicerídeos</em>{" "}
            (óleos e gorduras) são triésteres do glicerol com ácidos graxos.
          </li>
        </ul>
        <p>
          Por não terem –OH livre, ésteres <strong>não</strong> fazem ligações de hidrogênio entre si: são
          voláteis e de cheiro agradável — exatamente o que se quer numa essência artificial.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela-mestra</span>
        <h2>9. Resumo Comparativo das Funções Oxigenadas</h2>
        <p>
          Esta é a tabela mais importante do capítulo. Memorize a tríade{" "}
          <strong>função → grupo funcional → sufixo</strong> e um exemplo concreto de cada uma:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Grupo funcional</th>
                <th>Sufixo / Nomenclatura</th>
                <th>Exemplo</th>
                <th>Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Álcool</td>
                <td>–OH em C saturado</td>
                <td>‑ol</td>
                <td>etanol (<M>{"\\text{C}_2\\text{H}_5\\text{OH}"}</M>)</td>
                <td>bebida, combustível, antisséptico</td>
              </tr>
              <tr>
                <td>Fenol</td>
                <td>–OH no anel aromático</td>
                <td>(hidróxi... / fenol)</td>
                <td>fenol comum</td>
                <td>germicida, resinas</td>
              </tr>
              <tr>
                <td>Enol</td>
                <td>–OH em C com dupla</td>
                <td>‑enol</td>
                <td>etenol (instável)</td>
                <td>intermediário de reações</td>
              </tr>
              <tr>
                <td>Éter</td>
                <td>C–O–C</td>
                <td>‑óxi (prefixo)</td>
                <td>éter dietílico</td>
                <td>solvente, anestésico histórico</td>
              </tr>
              <tr>
                <td>Aldeído</td>
                <td>–CHO (carbonila na ponta)</td>
                <td>‑al</td>
                <td>metanal (formol)</td>
                <td>conservante, germicida</td>
              </tr>
              <tr>
                <td>Cetona</td>
                <td>C=O no meio da cadeia</td>
                <td>‑ona</td>
                <td>propanona (acetona)</td>
                <td>removedor de esmalte, solvente</td>
              </tr>
              <tr>
                <td>Ácido carboxílico</td>
                <td>–COOH (carboxila)</td>
                <td>ácido ...‑oico</td>
                <td>ácido etanoico (acético)</td>
                <td>vinagre, conservante</td>
              </tr>
              <tr>
                <td>Éster</td>
                <td>–COO–</td>
                <td>‑oato de ...‑ila</td>
                <td>etanoato de etila</td>
                <td>aromas de frutas, essências</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">No cotidiano</span>
        <h2>10. Funções Oxigenadas no Dia a Dia (contexto ENEM)</h2>
        <p>
          O ENEM raramente pergunta a fórmula "seca": prefere um contexto — o rótulo de um produto, um
          processo industrial, uma situação de saúde. A tabela abaixo conecta cada função a situações
          concretas que costumam aparecer nas questões:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Substância</th><th>Função</th><th>Onde aparece</th></tr>
            </thead>
            <tbody>
              <tr><td>Etanol</td><td>Álcool</td><td>Bebidas, álcool em gel, etanol combustível</td></tr>
              <tr><td>Metanol</td><td>Álcool</td><td>Solvente, combustível (tóxico — causa cegueira)</td></tr>
              <tr><td>Glicerol (glicerina)</td><td>Triálcool</td><td>Cosméticos, sabões, hidratantes</td></tr>
              <tr><td>Metanal (formol)</td><td>Aldeído</td><td>Conservação de peças biológicas, germicida</td></tr>
              <tr><td>Propanona (acetona)</td><td>Cetona</td><td>Removedor de esmalte, solvente de tintas</td></tr>
              <tr><td>Ácido etanoico (acético)</td><td>Ácido carboxílico</td><td>Vinagre, conservante de alimentos</td></tr>
              <tr><td>Ácido metanoico (fórmico)</td><td>Ácido carboxílico</td><td>Picada de formigas e abelhas</td></tr>
              <tr><td>Ésteres de frutas</td><td>Éster</td><td>Aromas artificiais de balas, sucos, perfumes</td></tr>
              <tr><td>Óleos e gorduras</td><td>Éster (triglicerídeo)</td><td>Alimentos, produção de biodiesel e sabão</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🍺</span>
            <h3>Álcool</h3>
            <p>–OH em carbono saturado; sufixo ‑ol. Ex.: etanol.</p>
          </div>
          <div className="math-card">
            <span>⬡</span>
            <h3>Fenol / Enol</h3>
            <p>–OH no anel aromático (fenol) ou em C com dupla (enol). Não são álcoois.</p>
          </div>
          <div className="math-card">
            <span>🔀</span>
            <h3>Éter</h3>
            <p>Oxigênio entre dois carbonos (R–O–R'); prefixo ‑óxi. Volátil.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Aldeído</h3>
            <p>Carbonila na ponta (–CHO); sufixo ‑al. Ex.: metanal (formol).</p>
          </div>
          <div className="math-card">
            <span>💅</span>
            <h3>Cetona</h3>
            <p>Carbonila no meio (C=O); sufixo ‑ona. Ex.: propanona (acetona).</p>
          </div>
          <div className="math-card">
            <span>🍋</span>
            <h3>Ácido carboxílico</h3>
            <p>Carboxila –COOH; "ácido ...‑oico". Ex.: ácido acético (vinagre).</p>
          </div>
          <div className="math-card">
            <span>🍓</span>
            <h3>Éster</h3>
            <p>–COO–; "‑oato de ‑ila". Aromas de frutas; ácido + álcool → éster + água.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Regra de ouro</h3>
            <p>Identificar a função = localizar o oxigênio: –OH, C=O, –O– ou –COOH.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Grupo do álcool"
          statement={<p>A função álcool é caracterizada pela presença do grupo:</p>}
          options={[
            { letter: "a", text: "Hidroxila (–OH) ligada a carbono saturado", correct: true },
            { letter: "b", text: "Carboxila (–COOH)" },
            { letter: "c", text: "Carbonila (C=O) na extremidade da cadeia" },
            { letter: "d", text: "Oxigênio ligado entre dois carbonos (–O–)" },
          ]}
          resolution={<p>O álcool tem o grupo –OH ligado a um carbono saturado. O etanol (<M>{"\\text{CH}_3\\text{CH}_2\\text{OH}"}</M>) é o exemplo mais comum. As demais opções correspondem a ácido carboxílico, aldeído e éter, respectivamente.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Acetona"
          statement={<p>A acetona (propanona), usada como removedor de esmaltes, pertence à função:</p>}
          options={[
            { letter: "a", text: "Cetona", correct: true },
            { letter: "b", text: "Aldeído" },
            { letter: "c", text: "Álcool" },
            { letter: "d", text: "Éster" },
          ]}
          resolution={<p>A propanona, <M>{"\\text{CH}_3-\\text{CO}-\\text{CH}_3"}</M>, tem a carbonila (C=O) no meio da cadeia → cetona. Se a carbonila estivesse na ponta (–CHO), seria aldeído.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Aldeído x cetona"
          statement={<p>Aldeídos e cetonas têm o mesmo grupo carbonila (C=O). A diferença está na posição desse grupo. No aldeído, a carbonila localiza-se:</p>}
          options={[
            { letter: "a", text: "Na extremidade da cadeia, formando o grupo –CHO", correct: true },
            { letter: "b", text: "No meio da cadeia, entre dois carbonos" },
            { letter: "c", text: "Ligada a um átomo de nitrogênio" },
            { letter: "d", text: "Ligada diretamente a um anel aromático" },
          ]}
          resolution={<p>Ambos têm carbonila. No aldeído ela está na ponta (carbono primário, ligado a um H → grupo –CHO, sufixo ‑al); na cetona, no meio da cadeia (carbono secundário, sufixo ‑ona).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. –OH nem sempre é álcool"
          statement={<p>O composto a seguir tem uma hidroxila ligada diretamente a um carbono do anel aromático (benzênico). Essa estrutura caracteriza a função:</p>}
          options={[
            { letter: "a", text: "Fenol", correct: true },
            { letter: "b", text: "Álcool" },
            { letter: "c", text: "Enol" },
            { letter: "d", text: "Éter" },
          ]}
          resolution={<p>Quando a –OH está ligada diretamente ao anel aromático, a função é <strong>fenol</strong> (caráter levemente ácido). Só seria álcool se a –OH estivesse em carbono saturado; seria enol se estivesse em carbono com dupla ligação.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Identificando o éter"
          statement={<p>O composto <M>{"\\text{CH}_3-\\text{O}-\\text{CH}_2\\text{CH}_3"}</M> pertence à função:</p>}
          options={[
            { letter: "a", text: "Éter — oxigênio ligado entre dois grupos carbônicos", correct: true },
            { letter: "b", text: "Álcool — possui o grupo –OH" },
            { letter: "c", text: "Éster — possui o grupo –COO–" },
            { letter: "d", text: "Cetona — possui carbonila no meio da cadeia" },
          ]}
          resolution={<p>O oxigênio está ligado a dois grupos carbônicos (<M>{"\\text{R}-\\text{O}-\\text{R}'"}</M>) sem carbonila e sem hidrogênio nele → éter (metoxietano). Não há –OH (não é álcool), nem C=O (não é cetona nem éster).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Aromas artificiais de frutas"
          statement={<p>Muitos aromas artificiais de frutas (banana, morango, abacaxi) usados em balas e sucos são obtidos pela reação entre um ácido carboxílico e um álcool, com liberação de água. Esses compostos voláteis e de cheiro agradável pertencem à função:</p>}
          options={[
            { letter: "a", text: "Éster, formado na esterificação (ácido + álcool → éster + água).", correct: true },
            { letter: "b", text: "Ácido carboxílico, pois derivam de um ácido." },
            { letter: "c", text: "Aldeído, por terem cheiro intenso." },
            { letter: "d", text: "Éter, por conterem oxigênio entre carbonos." },
          ]}
          resolution={<p>A reação entre um ácido carboxílico e um álcool (<strong>esterificação</strong>) produz um éster e água. Os ésteres, com grupo –COO–, são os responsáveis pelos aromas frutados das essências artificiais — muito usados nas indústrias de alimentos e perfumaria.</p>}
        />
      </section>
    </article>
  );
}
