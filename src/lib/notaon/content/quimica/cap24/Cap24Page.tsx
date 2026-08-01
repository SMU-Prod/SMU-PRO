"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 24</span>
          <h1>Termoquímica I: Reações Endo/Exotérmicas, Entalpia e Diagramas de Energia</h1>
          <p>
            Por que a gasolina aquece o motor enquanto a planta precisa do Sol para fabricar seu
            alimento? Por que uma bolsa de compressa fria "rouba" calor da pele e uma compressa quente
            o devolve? A <strong>termoquímica</strong> responde a essas perguntas medindo o calor que
            entra ou sai em cada transformação. Neste capítulo você vai dominar os conceitos de{" "}
            <strong>entalpia (H)</strong> e sua variação <M>{"\\Delta H"}</M>, aprender a classificar
            reações como <strong>exotérmicas</strong> ou <strong>endotérmicas</strong>, ler os{" "}
            <strong>diagramas de energia</strong> e escrever corretamente as equações termoquímicas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Termoquímica?</h2>
        <p>
          A <strong>termoquímica</strong> é o ramo da química que estuda as <strong>trocas de
          calor</strong> que acompanham as reações químicas e as mudanças de estado físico. Toda
          transformação envolve quebra e formação de ligações: quebrar ligações <em>consome</em>{" "}
          energia, formar ligações <em>libera</em> energia. O balanço entre essas duas etapas decide
          se a reação, no total, libera ou absorve calor.
        </p>
        <p>
          A termoquímica responde à pergunta <em>"quanta energia entra ou sai?"</em> — diferente da
          cinética (Capítulo 26), que responde <em>"com que rapidez a reação ocorre?"</em>. São
          perguntas independentes: uma reação pode ser muito exotérmica e, mesmo assim, lentíssima
          (a oxidação do ferro libera calor, mas leva anos). Aqui o foco é a <strong>energia</strong>,
          não o tempo.
        </p>
        <div className="lesson-highlight">
          <p>
            O calor trocado a <strong>pressão constante</strong> (a situação mais comum em laboratório,
            sob a pressão atmosférica) recebe o nome de <strong>variação de entalpia</strong>,{" "}
            <M>{"\\Delta H"}</M>. É essa grandeza que medimos e tabelamos em termoquímica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A grandeza central</span>
        <h2>2. Entalpia (H) e Variação de Entalpia (ΔH)</h2>
        <p>
          A <strong>entalpia (H)</strong> pode ser entendida como o <strong>conteúdo total de
          energia</strong> de um sistema a pressão constante — a energia "armazenada" nas substâncias,
          principalmente em suas ligações químicas. O grande detalhe é que <strong>não conseguimos
          medir H diretamente</strong>: não há aparelho que leia o valor absoluto da energia interna de
          uma substância. O que medimos, e o que importa, é a <strong>variação</strong> da entalpia
          entre o início e o fim da transformação:
        </p>
        <div className="math-block">
          <h3>Definição de ΔH</h3>
          <p><M block>{"\\Delta H = H_{\\text{produtos}} - H_{\\text{reagentes}}"}</M></p>
          <p>Unidade usual: kJ/mol (ou kcal/mol).</p>
        </div>
        <p>
          O sinal de <M>{"\\Delta H"}</M> é a chave de toda a classificação:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              Se <M>{"H_{\\text{produtos}} < H_{\\text{reagentes}}"}</M>, então{" "}
              <M>{"\\Delta H < 0"}</M> → o sistema <strong>perdeu</strong> energia para o ambiente →{" "}
              reação <strong>exotérmica</strong>.
            </li>
            <li>
              Se <M>{"H_{\\text{produtos}} > H_{\\text{reagentes}}"}</M>, então{" "}
              <M>{"\\Delta H > 0"}</M> → o sistema <strong>ganhou</strong> energia do ambiente →{" "}
              reação <strong>endotérmica</strong>.
            </li>
          </ul>
        </div>
        <p>
          Uma boa regra prática: produtos com <strong>menos</strong> energia são, em geral, mais{" "}
          <strong>estáveis</strong>. Por isso reações exotérmicas tendem a "descer a ladeira
          energética" rumo a produtos mais estáveis.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dois caminhos</span>
        <h2>3. Reações Exotérmicas e Endotérmicas</h2>
        <p>
          Toda reação química se enquadra em um de dois grandes grupos quanto à troca de calor. A
          tabela abaixo reúne as características que mais caem em provas — observe como cada coluna se
          opõe ponto a ponto:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Exotérmica</th>
                <th>Endotérmica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Troca de calor</td>
                <td><strong>Libera</strong> calor para o ambiente</td>
                <td><strong>Absorve</strong> calor do ambiente</td>
              </tr>
              <tr>
                <td>Sinal de <M>{"\\Delta H"}</M></td>
                <td><M>{"\\Delta H < 0"}</M> (negativo)</td>
                <td><M>{"\\Delta H > 0"}</M> (positivo)</td>
              </tr>
              <tr>
                <td>Energia dos produtos</td>
                <td>Menor que a dos reagentes</td>
                <td>Maior que a dos reagentes</td>
              </tr>
              <tr>
                <td>Sensação ao redor</td>
                <td>Esquenta (aquece a vizinhança)</td>
                <td>Esfria (resfria a vizinhança)</td>
              </tr>
              <tr>
                <td>Posição no diagrama</td>
                <td>Produtos <strong>abaixo</strong> dos reagentes</td>
                <td>Produtos <strong>acima</strong> dos reagentes</td>
              </tr>
              <tr>
                <td>Onde aparece o calor</td>
                <td>No lado dos <strong>produtos</strong></td>
                <td>No lado dos <strong>reagentes</strong></td>
              </tr>
              <tr>
                <td>Exemplos típicos</td>
                <td>Combustão, neutralização ácido-base, respiração</td>
                <td>Fotossíntese, cozimento, fusão do gelo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Exotérmica</h3>
            <p>
              Libera calor; <M>{"\\Delta H < 0"}</M>. A vizinhança esquenta. Ex.: queima de combustível,
              respiração celular, neutralização.
            </p>
          </div>
          <div className="lesson-card">
            <span>❄️</span>
            <h3>Endotérmica</h3>
            <p>
              Absorve calor; <M>{"\\Delta H > 0"}</M>. A vizinhança esfria. Ex.: fotossíntese, fusão do
              gelo, cozimento de alimentos.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualizando</span>
        <h2>4. Diagramas de Entalpia (H × caminho da reação)</h2>
        <p>
          O <strong>diagrama de entalpia</strong> coloca a entalpia no eixo vertical e o caminho da
          reação (progresso de reagentes → produtos) no eixo horizontal. A leitura é direta: o{" "}
          <strong>nível dos reagentes</strong> e o <strong>nível dos produtos</strong> são patamares
          horizontais, e o <strong>degrau</strong> entre eles é o <M>{"\\Delta H"}</M>. Nos diagramas
          abaixo, a "subidinha" intermediária até o pico representa a <strong>energia de ativação</strong>{" "}
          (Eₐ) — a barreira que será detalhada em cinética (Capítulo 26); aqui ela aparece apenas para
          contextualizar.
        </p>
        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 270" width="320" height="270" aria-label="Diagrama de entalpia de uma reação exotérmica">
              <line x1="46" y1="234" x2="305" y2="234" stroke="#374151" strokeWidth="2"/>
              <line x1="46" y1="18" x2="46" y2="234" stroke="#374151" strokeWidth="2"/>
              <text x="178" y="256" textAnchor="middle" fontSize="11" fill="#374151">Caminho da reação</text>
              <text x="15" y="128" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,15,128)">Entalpia (H)</text>
              {/* curva exo: reagentes altos, pequeno pico, produtos baixos */}
              <path d="M62,110 C108,110 116,60 160,60 C204,60 214,184 272,184" fill="none" stroke="#2563eb" strokeWidth="3"/>
              {/* níveis tracejados */}
              <line x1="46" y1="110" x2="160" y2="110" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="160" y1="184" x2="292" y2="184" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              {/* ΔH */}
              <line x1="256" y1="110" x2="256" y2="184" stroke="#059669" strokeWidth="1.6" markerEnd="url(#exoDhA)" markerStart="url(#exoDhB)"/>
              <text x="260" y="152" fontSize="10" fill="#047857">ΔH &lt; 0</text>
              {/* rótulos */}
              <text x="60" y="104" fontSize="9" fill="#1e40af">H reagentes</text>
              <text x="206" y="200" fontSize="9" fill="#1e40af">H produtos</text>
              <text x="118" y="54" fontSize="9" fill="#7c3aed">Eₐ</text>
              <text x="90" y="224" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">EXOTÉRMICA</text>
              <text x="232" y="224" textAnchor="middle" fontSize="9" fill="#374151">libera calor</text>
              <defs>
                <marker id="exoDhA" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#059669"/></marker>
                <marker id="exoDhB" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#059669"/></marker>
              </defs>
            </svg>
            <figcaption>Exotérmica: produtos <strong>abaixo</strong> dos reagentes, <M>{"\\Delta H < 0"}</M>. A "queda" de energia corresponde ao calor liberado.</figcaption>
          </figure>
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 270" width="320" height="270" aria-label="Diagrama de entalpia de uma reação endotérmica">
              <line x1="46" y1="234" x2="305" y2="234" stroke="#374151" strokeWidth="2"/>
              <line x1="46" y1="18" x2="46" y2="234" stroke="#374151" strokeWidth="2"/>
              <text x="178" y="256" textAnchor="middle" fontSize="11" fill="#374151">Caminho da reação</text>
              <text x="15" y="128" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,15,128)">Entalpia (H)</text>
              {/* curva endo: reagentes baixos, pico, produtos médios-altos */}
              <path d="M62,184 C108,184 116,46 160,46 C204,46 214,108 272,108" fill="none" stroke="#2563eb" strokeWidth="3"/>
              <line x1="46" y1="184" x2="160" y2="184" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="160" y1="108" x2="292" y2="108" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              {/* ΔH */}
              <line x1="256" y1="184" x2="256" y2="108" stroke="#059669" strokeWidth="1.6" markerEnd="url(#endoDhA)" markerStart="url(#endoDhB)"/>
              <text x="260" y="150" fontSize="10" fill="#047857">ΔH &gt; 0</text>
              <text x="60" y="200" fontSize="9" fill="#1e40af">H reagentes</text>
              <text x="206" y="102" fontSize="9" fill="#1e40af">H produtos</text>
              <text x="118" y="40" fontSize="9" fill="#7c3aed">Eₐ</text>
              <text x="90" y="224" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">ENDOTÉRMICA</text>
              <text x="232" y="224" textAnchor="middle" fontSize="9" fill="#374151">absorve calor</text>
              <defs>
                <marker id="endoDhA" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#059669"/></marker>
                <marker id="endoDhB" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#059669"/></marker>
              </defs>
            </svg>
            <figcaption>Endotérmica: produtos <strong>acima</strong> dos reagentes, <M>{"\\Delta H > 0"}</M>. A "subida" de energia corresponde ao calor absorvido.</figcaption>
          </figure>
        </div>
        <div className="lesson-highlight">
          <h3>Como ler o diagrama (resumo)</h3>
          <p>
            <strong><M>{"\\Delta H"}</M></strong> = nível dos produtos − nível dos reagentes. Se a seta
            do degrau aponta <strong>para baixo</strong> (produtos mais baixos), a reação é exotérmica;
            se aponta <strong>para cima</strong>, é endotérmica. O pico intermediário é a energia de
            ativação — assunto da cinética.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Notação</span>
        <h2>5. Equações Termoquímicas</h2>
        <p>
          Uma <strong>equação termoquímica</strong> é a equação balanceada acompanhada do valor de{" "}
          <M>{"\\Delta H"}</M> e — fundamental — dos <strong>estados físicos</strong> de todas as
          substâncias e das <strong>condições</strong> em que o calor foi medido. Esses detalhes não
          são decorativos: o estado físico altera a entalpia (vapor d'água guarda mais energia que água
          líquida) e, portanto, altera o valor de <M>{"\\Delta H"}</M>.
        </p>
        <div className="lesson-highlight">
          <p><M block>{"\\text{C}_{(s)} + \\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)} \\qquad \\Delta H = -394\\ \\text{kJ/mol} \\;\\text{(exotérmica)}"}</M></p>
          <p><M block>{"\\text{H}_2\\text{O}_{(l)} \\rightarrow \\text{H}_2\\text{O}_{(g)} \\qquad \\Delta H = +44\\ \\text{kJ/mol} \\;\\text{(endotérmica)}"}</M></p>
        </div>
        <p>
          Há duas formas equivalentes de escrever o calor. Na forma <strong>com ΔH ao lado</strong>{" "}
          (acima), o sinal indica tudo. Na forma <strong>com o calor dentro da equação</strong>, vale a
          regra: o calor entra <strong>do lado dos produtos</strong> quando a reação é exotérmica (ela
          "produz" calor) e <strong>do lado dos reagentes</strong> quando é endotérmica (ela "consome"
          calor):
        </p>
        <div className="lesson-highlight">
          <p><M block>{"\\text{C}_{(s)} + \\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)} + 394\\ \\text{kJ} \\quad (\\text{calor nos produtos} = \\text{exo})"}</M></p>
          <p><M block>{"\\text{H}_2\\text{O}_{(l)} + 44\\ \\text{kJ} \\rightarrow \\text{H}_2\\text{O}_{(g)} \\quad (\\text{calor nos reagentes} = \\text{endo})"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Padronizando</span>
        <h2>6. Condições Padrão e Fatores que Alteram o ΔH</h2>
        <p>
          Como o valor de <M>{"\\Delta H"}</M> depende de várias condições, os químicos combinaram um
          <strong> estado padrão</strong> de referência: <strong>25 °C (298 K) e 1 atm</strong>, com
          cada substância em sua forma física e alotrópica mais estável. O <M>{"\\Delta H"}</M> medido
          nessas condições é o <strong>ΔH padrão</strong>, simbolizado por <M>{"\\Delta H^{\\circ}"}</M>.
          Padronizar permite comparar reações de forma justa, em tabelas.
        </p>
        <p>Os principais fatores que mudam o valor numérico de <M>{"\\Delta H"}</M> são:</p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Quantidade de matéria (mols):</strong> <M>{"\\Delta H"}</M> é{" "}
              <strong>proporcional</strong> aos coeficientes. Dobrar a reação dobra o <M>{"\\Delta H"}</M>.
            </li>
            <li>
              <strong>Estado físico:</strong> sólido, líquido e gasoso têm entalpias diferentes — por
              isso é obrigatório indicar (s), (l), (g) ou (aq).
            </li>
            <li>
              <strong>Forma alotrópica:</strong> grafite e diamante são ambos carbono, mas têm
              entalpias distintas; o estado padrão escolhe a forma mais estável (grafite).
            </li>
            <li>
              <strong>Temperatura e pressão:</strong> alteram o conteúdo energético; daí a necessidade
              das condições padrão.
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">No dia a dia</span>
        <h2>7. Termoquímica no Cotidiano</h2>
        <p>
          Reconhecer processos exotérmicos e endotérmicos ao redor é uma das competências mais cobradas
          no ENEM. A tabela reúne exemplos do cotidiano e o porquê de cada classificação:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo do cotidiano</th>
                <th>Classificação</th>
                <th>O que acontece com a energia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Queima de gasolina/etanol no motor</td>
                <td>Exotérmico</td>
                <td>Combustão libera calor que move o veículo</td>
              </tr>
              <tr>
                <td>Respiração celular (oxidação da glicose)</td>
                <td>Exotérmico</td>
                <td>Libera energia para o corpo; por isso "esquentamos"</td>
              </tr>
              <tr>
                <td>Compressa quente instantânea</td>
                <td>Exotérmico</td>
                <td>Cristalização/reação libera calor para a pele</td>
              </tr>
              <tr>
                <td>Fotossíntese</td>
                <td>Endotérmico</td>
                <td>Planta absorve energia luminosa para formar glicose</td>
              </tr>
              <tr>
                <td>Cozimento de um ovo / assar um bolo</td>
                <td>Endotérmico</td>
                <td>Precisa receber calor continuamente do fogão/forno</td>
              </tr>
              <tr>
                <td>Compressa fria instantânea (NH₄NO₃)</td>
                <td>Endotérmico</td>
                <td>Dissolução absorve calor e resfria a região</td>
              </tr>
              <tr>
                <td>Fusão do gelo / derretimento</td>
                <td>Endotérmico</td>
                <td>Absorve calor do ambiente para mudar de estado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⛽</span>
            <h3>Combustíveis</h3>
            <p>
              Escolhidos pelo <strong>poder calorífico</strong>: quanto mais calor a combustão libera
              por grama, melhor o desempenho energético.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Fotossíntese</h3>
            <p>
              Processo endotérmico que "guarda" a energia do Sol em glicose — depois liberada na
              respiração (exotérmica). Um ciclo de energia.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧊</span>
            <h3>Bolsas térmicas</h3>
            <p>
              Compressas quentes usam reações exotérmicas; as frias usam dissoluções endotérmicas que
              "roubam" calor da lesão.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📐</span>
            <h3>Variação de entalpia</h3>
            <p><M>{"\\Delta H = H_{\\text{prod}} - H_{\\text{reag}}"}</M> — calor a pressão constante.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Exotérmica</h3>
            <p>Libera calor; <M>{"\\Delta H < 0"}</M>; produtos abaixo no diagrama.</p>
          </div>
          <div className="math-card">
            <span>❄️</span>
            <h3>Endotérmica</h3>
            <p>Absorve calor; <M>{"\\Delta H > 0"}</M>; produtos acima no diagrama.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Diagrama</h3>
            <p>Degrau reagentes → produtos = <M>{"\\Delta H"}</M>; pico = energia de ativação.</p>
          </div>
          <div className="math-card">
            <span>📝</span>
            <h3>Equação termoquímica</h3>
            <p>Reação + <M>{"\\Delta H"}</M> + estados físicos. Calor nos produtos = exo; nos reagentes = endo.</p>
          </div>
          <div className="math-card">
            <span>⚙️</span>
            <h3>Estado padrão</h3>
            <p>25 °C, 1 atm, forma mais estável → <M>{"\\Delta H^{\\circ}"}</M>. Depende de mols, estado e alotropia.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Sinal do ΔH"
          statement={<p>Uma reação que libera calor para o ambiente é classificada como exotérmica e possui variação de entalpia:</p>}
          options={[
            { letter: "a", text: "ΔH < 0 (negativa)", correct: true },
            { letter: "b", text: "ΔH > 0 (positiva)" },
            { letter: "c", text: "ΔH = 0" },
            { letter: "d", text: "ΔH indefinido" },
          ]}
          resolution={<p>Em reações exotérmicas, os produtos têm menos energia que os reagentes: <M>{"\\Delta H = H_{\\text{prod}} - H_{\\text{reag}} < 0"}</M>. O valor negativo significa que o sistema perdeu energia para o ambiente.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Identificando o processo endotérmico"
          statement={<p>Qual dos processos abaixo é endotérmico (absorve calor do ambiente)?</p>}
          options={[
            { letter: "a", text: "Fotossíntese", correct: true },
            { letter: "b", text: "Combustão da gasolina" },
            { letter: "c", text: "Respiração celular" },
            { letter: "d", text: "Neutralização de um ácido por uma base" },
          ]}
          resolution={<p>A fotossíntese absorve energia (luz solar) para transformar CO₂ e água em glicose — é endotérmica, <M>{"\\Delta H > 0"}</M>. Combustão, respiração e neutralização liberam calor (exotérmicas).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Lendo o diagrama de entalpia"
          statement={<p>Em um diagrama de entalpia (H × caminho da reação), observa-se que os produtos estão em um nível de energia mais alto que os reagentes. Isso indica uma reação:</p>}
          options={[
            { letter: "a", text: "Endotérmica, com ΔH > 0", correct: true },
            { letter: "b", text: "Exotérmica, com ΔH < 0" },
            { letter: "c", text: "Sem variação de energia" },
            { letter: "d", text: "Impossível de ocorrer" },
          ]}
          resolution={<p>Produtos acima dos reagentes significam <M>{"H_{\\text{prod}} > H_{\\text{reag}}"}</M>, logo <M>{"\\Delta H > 0"}</M>. O sistema absorveu calor → reação endotérmica.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Proporcionalidade do ΔH"
          statement={<p>A combustão completa de 1 mol de carbono libera 394 kJ: <M>{"\\text{C}_{(s)} + \\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)},\\ \\Delta H = -394\\ \\text{kJ/mol}"}</M>. Quanto calor é liberado na combustão de 3 mol de carbono?</p>}
          options={[
            { letter: "a", text: "1182 kJ", correct: true },
            { letter: "b", text: "394 kJ" },
            { letter: "c", text: "131 kJ" },
            { letter: "d", text: "788 kJ" },
          ]}
          resolution={<p>O <M>{"\\Delta H"}</M> é proporcional à quantidade de matéria: <M>{"3 \\times 394 = 1182\\ \\text{kJ}"}</M> liberados.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Calculando o ΔH a partir das entalpias"
          statement={<p>Em uma reação, a entalpia total dos reagentes é 250 kJ e a dos produtos é 100 kJ. O valor de <M>{"\\Delta H"}</M> e a classificação da reação são:</p>}
          options={[
            { letter: "a", text: "ΔH = −150 kJ; exotérmica", correct: true },
            { letter: "b", text: "ΔH = +150 kJ; endotérmica" },
            { letter: "c", text: "ΔH = +350 kJ; endotérmica" },
            { letter: "d", text: "ΔH = −350 kJ; exotérmica" },
          ]}
          resolution={<p><M>{"\\Delta H = H_{\\text{prod}} - H_{\\text{reag}} = 100 - 250 = -150\\ \\text{kJ}"}</M>. Como é negativo, a reação libera calor → exotérmica (produtos mais estáveis que os reagentes).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Compressa fria instantânea"
          statement={<p>Em lesões esportivas usam-se compressas frias instantâneas que contêm nitrato de amônio (NH₄NO₃) e um saco de água separado. Ao apertar a bolsa, o sal se dissolve na água e a temperatura cai rapidamente, aliviando o inchaço. Sob o ponto de vista termoquímico, a dissolução desse sal é um processo:</p>}
          options={[
            { letter: "a", text: "Endotérmico, pois absorve calor do meio (da pele), resfriando a região; ΔH > 0.", correct: true },
            { letter: "b", text: "Exotérmico, pois libera calor para a pele; ΔH < 0." },
            { letter: "c", text: "De combustão, pois há queima do sal." },
            { letter: "d", text: "Sem qualquer troca de calor com o ambiente; ΔH = 0." },
          ]}
          resolution={<p>A dissolução do nitrato de amônio é endotérmica (<M>{"\\Delta H > 0"}</M>): ela absorve calor do ambiente — inclusive da pele lesionada. Essa retirada de energia provoca a queda de temperatura e a sensação de frio, reduzindo o inchaço sem necessidade de gelo.</p>}
        />
      </section>
    </article>
  );
}
