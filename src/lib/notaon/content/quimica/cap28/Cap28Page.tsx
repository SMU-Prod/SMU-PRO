"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 28</span>
          <h1>Equilíbrio Químico Reversível: Constantes Kc e Kp, Grau de Equilíbrio</h1>
          <p>
            Nem toda reação caminha até o fim. Muitas param "no meio do caminho", num estado em que
            reagentes e produtos coexistem sem que suas quantidades mudem mais — o <strong>equilíbrio
            químico</strong>. Neste capítulo você vai entender por que o equilíbrio é{" "}
            <strong>dinâmico</strong>, aprender a escrever e calcular as constantes <M>{"K_c"}</M> e{" "}
            <M>{"K_p"}</M> a partir de uma tabela início–reage–equilíbrio, interpretar o que o valor da
            constante revela sobre o rendimento e medir o grau de equilíbrio <M>{"\\alpha"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ida e volta</span>
        <h2>1. Reações Reversíveis e a Seta Dupla</h2>
        <p>
          Uma <strong>reação reversível</strong> ocorre simultaneamente nos <strong>dois
          sentidos</strong>: os reagentes se transformam em produtos (reação <strong>direta</strong>) e,
          ao mesmo tempo, os produtos formados regeneram os reagentes (reação <strong>inversa</strong>).
          Para indicar isso usamos a seta dupla <M>{"\\rightleftharpoons"}</M> no lugar da seta simples{" "}
          <M>{"\\rightarrow"}</M>:
        </p>
        <div className="math-block">
          <h3>Reação genérica reversível</h3>
          <p><M block>{"aA + bB \\rightleftharpoons cC + dD"}</M></p>
        </div>
        <p>
          Um exemplo clássico é a interconversão entre o tetróxido de dinitrogênio (incolor) e o dióxido
          de nitrogênio (castanho): <M>{"\\text{N}_2\\text{O}_4 \\rightleftharpoons 2\\,\\text{NO}_2"}</M>.
          Num recipiente fechado, a cor se estabiliza num tom intermediário — sinal de que os dois gases
          coexistem em proporções constantes. Reações <em>irreversíveis</em> (como a combustão), ao
          contrário, consomem praticamente todos os reagentes e não "voltam".
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado dinâmico</span>
        <h2>2. O Equilíbrio é Dinâmico, não Estático</h2>
        <p>
          No início, só existem reagentes: a velocidade da reação <strong>direta</strong> é máxima e a da
          inversa é zero. À medida que os produtos se acumulam, a reação direta <strong>desacelera</strong>{" "}
          (menos reagentes) e a inversa <strong>acelera</strong> (mais produtos). Chega um momento em que{" "}
          as duas velocidades se igualam:
        </p>
        <div className="lesson-highlight">
          <p>
            <M block>{"v_{\\text{direta}} = v_{\\text{inversa}}"}</M>
          </p>
          <p>
            A partir daí, as <strong>concentrações permanecem constantes no tempo</strong> — mas{" "}
            <strong>não necessariamente iguais</strong> entre si. É um equilíbrio <strong>dinâmico</strong>:
            as duas reações continuam acontecendo o tempo todo, só que se compensam exatamente, de modo
            que nada parece mudar a olho nu.
          </p>
        </div>
        <p>
          Cuidado com dois erros comuns: equilíbrio <em>não</em> significa que a reação parou, e{" "}
          <em>não</em> significa que <M>{"[\\text{reagentes}] = [\\text{produtos}]"}</M>. Significa apenas
          que as concentrações pararam de variar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualizando</span>
        <h2>3. Gráfico de Concentração × Tempo</h2>
        <p>
          A maneira mais clara de "ver" o equilíbrio é o gráfico de <strong>concentração × tempo</strong>.
          Os reagentes (vermelho) partem de um valor alto e <strong>caem</strong>; os produtos (azul)
          partem do zero e <strong>sobem</strong>. As curvas vão ficando menos íngremes até{" "}
          <strong>estabilizarem em patamares constantes</strong> — esse é o instante <M>{"t_{eq}"}</M> em
          que o equilíbrio é atingido. Note que os patamares estão em <em>alturas diferentes</em>: as
          concentrações ficam constantes, não iguais.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Gráfico de concentração em função do tempo atingindo o equilíbrio">
            {/* Eixos */}
            <line x1="56" y1="240" x2="452" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="270" textAnchor="middle" fontSize="13" fill="#374151">Tempo</text>
            <text x="18" y="135" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,135)">Concentração (mol/L)</text>

            {/* Curva reagente: cai e estabiliza */}
            <path d="M56,52 C120,90 170,128 250,150 C300,160 330,162 452,162" fill="none" stroke="#dc2626" strokeWidth="3"/>
            <text x="120" y="78" fontSize="11" fill="#b91c1c">reagentes ↓</text>

            {/* Curva produto: sobe e estabiliza */}
            <path d="M56,228 C120,180 170,130 250,108 C300,98 330,96 452,96" fill="none" stroke="#2563eb" strokeWidth="3"/>
            <text x="120" y="210" fontSize="11" fill="#1d4ed8">produtos ↑</text>

            {/* Linha vertical do equilíbrio */}
            <line x1="300" y1="40" x2="300" y2="240" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,4"/>
            <text x="304" y="52" fontSize="11" fill="#5b21b6">equilíbrio (t_eq)</text>
            <text x="358" y="90" fontSize="10" fill="#1d4ed8">patamar constante</text>
            <text x="358" y="178" fontSize="10" fill="#b91c1c">patamar constante</text>

            {/* Região de equilíbrio sombreada leve */}
            <rect x="300" y="40" width="152" height="200" fill="#ede9fe" opacity="0.35"/>
          </svg>
          <figcaption>
            Reagentes diminuem e produtos aumentam até estabilizarem em patamares constantes (de alturas
            diferentes). A partir de <M>{"t_{eq}"}</M> as concentrações não mudam mais: o sistema está em
            equilíbrio.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">As velocidades se encontram</span>
        <h2>4. Gráfico de Velocidades × Tempo</h2>
        <p>
          Por trás do gráfico anterior está o jogo das <strong>velocidades</strong>. A velocidade direta
          começa alta e <strong>cai</strong> (vão faltando reagentes); a inversa começa em zero e{" "}
          <strong>sobe</strong> (vão sobrando produtos). Quando as duas curvas <strong>se
          encontram</strong>, temos <M>{"v_{\\text{direta}} = v_{\\text{inversa}}"}</M> — é exatamente o
          momento do equilíbrio.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Gráfico de velocidades direta e inversa em função do tempo">
            {/* Eixos */}
            <line x1="56" y1="240" x2="452" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="270" textAnchor="middle" fontSize="13" fill="#374151">Tempo</text>
            <text x="18" y="135" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,135)">Velocidade</text>

            {/* v direta: começa alta, cai ao patamar de equilíbrio */}
            <path d="M56,44 C120,90 180,135 260,158 C320,170 360,172 452,172" fill="none" stroke="#059669" strokeWidth="3"/>
            <text x="86" y="68" fontSize="11" fill="#047857">v_direta ↓</text>

            {/* v inversa: começa em zero, sobe ao mesmo patamar */}
            <path d="M56,236 C120,210 180,190 260,178 C320,172 360,172 452,172" fill="none" stroke="#f59e0b" strokeWidth="3"/>
            <text x="86" y="226" fontSize="11" fill="#b45309">v_inversa ↑</text>

            {/* Ponto de encontro */}
            <circle cx="300" cy="172" r="5" fill="#7c3aed"/>
            <line x1="300" y1="40" x2="300" y2="240" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,4"/>
            <line x1="56" y1="172" x2="300" y2="172" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="304" y="52" fontSize="11" fill="#5b21b6">equilíbrio</text>
            <text x="306" y="166" fontSize="10" fill="#5b21b6">v_dir = v_inv</text>
          </svg>
          <figcaption>
            A velocidade direta cai e a inversa sobe até se igualarem no ponto roxo. A partir desse
            instante as velocidades permanecem iguais e as concentrações ficam constantes.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante (Kc)</span>
        <h2>5. Constante de Equilíbrio em Concentração (Kc)</h2>
        <p>
          Para o equilíbrio genérico <M>{"aA + bB \\rightleftharpoons cC + dD"}</M>, a{" "}
          <strong>Lei da Ação das Massas</strong> (Guldberg e Waage) afirma que, a uma dada temperatura, a
          razão abaixo é <strong>constante</strong>:
        </p>
        <div className="math-block">
          <h3>Expressão de Kc</h3>
          <p><M block>{"K_c = \\dfrac{[C]^{c}\\,[D]^{d}}{[A]^{a}\\,[B]^{b}}"}</M></p>
          <p>
            Produtos no numerador, reagentes no denominador, cada concentração elevada ao seu{" "}
            <strong>coeficiente estequiométrico</strong>. As concentrações são as do{" "}
            <strong>equilíbrio</strong>, em mol/L.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Regra importante: o que NÃO entra em Kc</h3>
          <p>
            <strong>Sólidos puros</strong> e <strong>líquidos puros</strong> (incluindo o solvente água em
            soluções diluídas) <strong>não aparecem</strong> na expressão, porque sua "concentração" é
            constante. Exemplo: para{" "}
            <M>{"\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\,\\text{CO}(g)"}</M>, escreve-se{" "}
            <M>{"K_c = \\dfrac{[\\text{CO}]^2}{[\\text{CO}_2]}"}</M> — o carbono sólido fica de fora.
          </p>
        </div>
        <p>
          A constante <M>{"K_c"}</M> é <strong>adimensional</strong> nas convenções usuais de vestibular e
          depende <strong>apenas da temperatura</strong>: mudar concentração ou pressão desloca o
          equilíbrio, mas não altera o valor de <M>{"K_c"}</M> (só a temperatura faz isso).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Significado do valor</span>
        <h2>6. O que o Valor de Kc Revela sobre o Rendimento</h2>
        <p>
          O número <M>{"K_c"}</M> é um "termômetro do rendimento": ele compara a quantidade de produtos
          com a de reagentes no equilíbrio. Como o numerador são os produtos e o denominador os reagentes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Valor de Kc</th><th>Interpretação</th><th>Posição do equilíbrio</th><th>Rendimento</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"K_c \\gg 1"}</M></td><td>Produtos muito maiores que reagentes</td><td>Deslocado para a direita (produtos)</td><td>Alto</td></tr>
              <tr><td><M>{"K_c \\approx 1"}</M></td><td>Quantidades comparáveis</td><td>Intermediário</td><td>Médio</td></tr>
              <tr><td><M>{"K_c \\ll 1"}</M></td><td>Reagentes muito maiores que produtos</td><td>Deslocado para a esquerda (reagentes)</td><td>Baixo</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Por exemplo, a formação de água <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{H}_2\\text{O}"}</M>{" "}
          tem <M>{"K_c"}</M> astronômico (da ordem de <M>{"10^{80}"}</M> a 25 °C): praticamente só há
          produto no equilíbrio. Já a dissociação do <M>{"\\text{N}_2"}</M> em átomos tem <M>{"K_c"}</M>{" "}
          minúsculo: quase nada reage.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante (Kp)</span>
        <h2>7. Constante em Pressão (Kp) e a Relação com Kc</h2>
        <p>
          Quando os participantes são <strong>gases</strong>, é prático usar as <strong>pressões
          parciais</strong> em vez das concentrações. Define-se então <M>{"K_p"}</M> de forma análoga:
        </p>
        <div className="math-block">
          <h3>Expressão de Kp</h3>
          <p><M block>{"K_p = \\dfrac{(p_C)^{c}\\,(p_D)^{d}}{(p_A)^{a}\\,(p_B)^{b}}"}</M></p>
        </div>
        <p>
          As duas constantes se relacionam pela equação dos gases ideais{" "}
          (<M>{"pV = nRT \\Rightarrow p = \\frac{n}{V}RT = [\\,]RT"}</M>), o que leva a:
        </p>
        <div className="lesson-highlight">
          <h3>Relação fundamental</h3>
          <p><M block>{"K_p = K_c\\,(RT)^{\\Delta n}"}</M></p>
          <p>
            onde <M>{"\\Delta n = (\\text{mols de gás dos produtos}) - (\\text{mols de gás dos reagentes})"}</M>,{" "}
            <M>{"R"}</M> é a constante dos gases e <M>{"T"}</M> a temperatura em kelvin. Caso{" "}
            <M>{"\\Delta n = 0"}</M> (mesma quantidade de mols gasosos dos dois lados), então{" "}
            <M>{"K_p = K_c"}</M>.
          </p>
        </div>
        <p>
          Exemplo: para <M>{"\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)"}</M>,
          temos <M>{"\\Delta n = 2 - (1+3) = -2"}</M>, logo <M>{"K_p = K_c\\,(RT)^{-2}"}</M>. Já para{" "}
          <M>{"\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\,\\text{HI}"}</M>, <M>{"\\Delta n = 0"}</M> e{" "}
          <M>{"K_p = K_c"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mão na massa</span>
        <h2>8. Calculando Kc com a Tabela Início–Reage–Equilíbrio</h2>
        <p>
          A ferramenta-chave para achar as concentrações de equilíbrio é a <strong>tabela ICE</strong>{" "}
          (Início → Reage → Equilíbrio). Vamos resolver um exemplo completo: num recipiente de 1 L, são
          colocados <strong>1,0 mol de N₂</strong> e <strong>3,0 mol de H₂</strong>. No equilíbrio, sobram{" "}
          <strong>0,2 mol de N₂</strong>. Qual o <M>{"K_c"}</M> de{" "}
          <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3"}</M>?
        </p>
        <p>
          Como o N₂ caiu de 1,0 para 0,2 mol/L, <strong>reagiram 0,8 mol/L</strong> de N₂. Pela
          estequiometria (1 : 3 : 2), reagem <M>{"3 \\times 0{,}8 = 2{,}4"}</M> mol/L de H₂ e formam-se{" "}
          <M>{"2 \\times 0{,}8 = 1{,}6"}</M> mol/L de NH₃:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Etapa (mol/L)</th><th><M>{"\\text{N}_2"}</M></th><th><M>{"3\\,\\text{H}_2"}</M></th><th><M>{"2\\,\\text{NH}_3"}</M></th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Início</strong></td><td>1,0</td><td>3,0</td><td>0</td></tr>
              <tr><td><strong>Reage</strong> (±)</td><td>−0,8</td><td>−2,4</td><td>+1,6</td></tr>
              <tr><td><strong>Equilíbrio</strong></td><td>0,2</td><td>0,6</td><td>1,6</td></tr>
            </tbody>
          </table>
        </div>
        <p>Agora basta substituir as concentrações de equilíbrio na expressão de Kc:</p>
        <div className="math-block">
          <h3>Cálculo</h3>
          <p>
            <M block>{"K_c = \\dfrac{[\\text{NH}_3]^2}{[\\text{N}_2]\\,[\\text{H}_2]^3} = \\dfrac{(1{,}6)^2}{(0{,}2)\\,(0{,}6)^3} = \\dfrac{2{,}56}{0{,}2 \\times 0{,}216}"}</M>
          </p>
          <p>
            <M block>{"K_c = \\dfrac{2{,}56}{0{,}0432} \\approx 59{,}3"}</M>
          </p>
          <p>
            Como <M>{"K_c > 1"}</M>, o equilíbrio favorece a formação de amônia nessas condições.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Roteiro de 3 passos</h3>
          <ol>
            <li>Escreva a expressão de <M>{"K_c"}</M> a partir da equação balanceada.</li>
            <li>Monte a tabela <strong>Início → Reage → Equilíbrio</strong> respeitando os coeficientes.</li>
            <li>Substitua as concentrações de equilíbrio e calcule.</li>
          </ol>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quanto reagiu</span>
        <h2>9. Grau de Equilíbrio (α)</h2>
        <p>
          O <strong>grau de equilíbrio</strong> <M>{"\\alpha"}</M> mede a <strong>fração de reagente que
          efetivamente reagiu</strong> até o equilíbrio ser atingido. É calculado pela razão entre a
          quantidade que reagiu e a quantidade inicial:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"\\alpha = \\dfrac{\\text{quantidade que reagiu}}{\\text{quantidade inicial}}"}</M></p>
          <p>
            Resultado entre 0 e 1 (ou de 0% a 100%). Quanto <strong>maior</strong> o <M>{"\\alpha"}</M>,
            mais o equilíbrio se desloca para os produtos.
          </p>
        </div>
        <p>
          No exemplo anterior, o N₂ passou de 1,0 mol/L para 0,2 mol/L, ou seja, reagiram 0,8 mol/L. Logo{" "}
          <M>{"\\alpha = \\dfrac{0{,}8}{1{,}0} = 0{,}8 = 80\\%"}</M>: 80% do nitrogênio foi convertido. Um{" "}
          <M>{"\\alpha"}</M> próximo de 1 (100%) indica reação quase completa; próximo de 0, reação que
          mal avançou.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔁</span>
            <h3>Reversível</h3>
            <p>Ocorre nos dois sentidos (<M>{"\\rightleftharpoons"}</M>); reagentes e produtos coexistem.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Equilíbrio dinâmico</h3>
            <p><M>{"v_{dir} = v_{inv}"}</M>; concentrações constantes (não iguais).</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Kc</h3>
            <p><M>{"K_c = \\dfrac{[\\text{prod}]^{coef}}{[\\text{reag}]^{coef}}"}</M>; sólidos/líquidos puros fora.</p>
          </div>
          <div className="math-card">
            <span>🎈</span>
            <h3>Kp</h3>
            <p><M>{"K_p = K_c(RT)^{\\Delta n}"}</M>; se <M>{"\\Delta n = 0"}</M>, <M>{"K_p = K_c"}</M>.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Significado</h3>
            <p><M>{"K \\gg 1"}</M> → produtos; <M>{"K \\ll 1"}</M> → reagentes.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Grau α</h3>
            <p><M>{"\\alpha = \\dfrac{\\text{reagiu}}{\\text{inicial}}"}</M> — fração convertida.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Estado de equilíbrio"
          statement={<p>Uma reação reversível atinge o equilíbrio químico quando:</p>}
          options={[
            { letter: "a", text: "As velocidades das reações direta e inversa se igualam e as concentrações ficam constantes.", correct: true },
            { letter: "b", text: "Os reagentes se esgotam completamente." },
            { letter: "c", text: "As concentrações de reagentes e produtos se tornam iguais entre si." },
            { letter: "d", text: "Ambas as reações, direta e inversa, param totalmente." },
          ]}
          resolution={<p>No equilíbrio, <M>{"v_{\\text{direta}} = v_{\\text{inversa}}"}</M> e as concentrações permanecem constantes — mas não necessariamente iguais. É um equilíbrio dinâmico: as reações continuam ocorrendo e apenas se compensam.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Expressão de Kc"
          statement={<p>Para o equilíbrio <M>{"\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)"}</M>, a expressão correta da constante <M>{"K_c"}</M> é:</p>}
          options={[
            { letter: "a", text: "Kc = [HI]² / ([H₂]·[I₂])", correct: true },
            { letter: "b", text: "Kc = ([H₂]·[I₂]) / [HI]²" },
            { letter: "c", text: "Kc = [HI] / ([H₂]·[I₂])" },
            { letter: "d", text: "Kc = [H₂]·[I₂]·[HI]" },
          ]}
          resolution={<p>A constante é produtos sobre reagentes, cada um elevado ao seu coeficiente: <M>{"K_c = \\dfrac{[\\text{HI}]^2}{[\\text{H}_2]\\,[\\text{I}_2]}"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Sólidos não entram em Kc"
          statement={<p>Para o equilíbrio <M>{"\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)"}</M>, a expressão de <M>{"K_c"}</M> é:</p>}
          options={[
            { letter: "a", text: "Kc = [CO₂]", correct: true },
            { letter: "b", text: "Kc = [CaO]·[CO₂] / [CaCO₃]" },
            { letter: "c", text: "Kc = [CO₂] / [CaCO₃]" },
            { letter: "d", text: "Kc = [CaCO₃] / ([CaO]·[CO₂])" },
          ]}
          resolution={<p>Sólidos puros (CaCO₃ e CaO) não entram na expressão, pois suas "concentrações" são constantes. Resta apenas o gás: <M>{"K_c = [\\text{CO}_2]"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Relação entre Kp e Kc"
          statement={<p>Considere <M>{"\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)"}</M>. O valor de <M>{"\\Delta n"}</M> e a relação entre <M>{"K_p"}</M> e <M>{"K_c"}</M> são:</p>}
          options={[
            { letter: "a", text: "Δn = −2, logo Kp = Kc·(RT)⁻²", correct: true },
            { letter: "b", text: "Δn = 0, logo Kp = Kc" },
            { letter: "c", text: "Δn = +2, logo Kp = Kc·(RT)²" },
            { letter: "d", text: "Δn = −1, logo Kp = Kc·(RT)⁻¹" },
          ]}
          resolution={<p><M>{"\\Delta n = n_{\\text{prod}} - n_{\\text{reag}} = 2 - (1+3) = -2"}</M>. Aplicando <M>{"K_p = K_c(RT)^{\\Delta n}"}</M>, obtém-se <M>{"K_p = K_c\\,(RT)^{-2}"}</M>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Cálculo de Kc por tabela ICE"
          statement={<p>Num recipiente de 1 L colocam-se 2,0 mol/L de <M>{"\\text{N}_2\\text{O}_4"}</M>. No equilíbrio <M>{"\\text{N}_2\\text{O}_4 \\rightleftharpoons 2\\,\\text{NO}_2"}</M>, sobra 1,0 mol/L de N₂O₄. O valor de <M>{"K_c"}</M> é:</p>}
          options={[
            { letter: "a", text: "4,0", correct: true },
            { letter: "b", text: "2,0" },
            { letter: "c", text: "1,0" },
            { letter: "d", text: "0,5" },
          ]}
          resolution={<p>Reagiram <M>{"2{,}0 - 1{,}0 = 1{,}0"}</M> mol/L de N₂O₄, formando <M>{"2 \\times 1{,}0 = 2{,}0"}</M> mol/L de NO₂. Logo <M>{"K_c = \\dfrac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\dfrac{(2{,}0)^2}{1{,}0} = \\dfrac{4{,}0}{1{,}0} = 4{,}0"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Equilíbrio no transporte de oxigênio"
          statement={<p>A hemoglobina (Hb) transporta gás oxigênio pelo equilíbrio <M>{"\\text{Hb} + \\text{O}_2 \\rightleftharpoons \\text{HbO}_2"}</M>. Nos pulmões, onde há muito O₂, o equilíbrio se desloca para a direita (capta O₂); nos tecidos, onde há pouco O₂, desloca-se para a esquerda (libera O₂). Esse comportamento ilustra que o equilíbrio químico:</p>}
          options={[
            { letter: "a", text: "É dinâmico e responde às concentrações, permitindo captar e liberar O₂ conforme o local do corpo.", correct: true },
            { letter: "b", text: "É estático e, uma vez atingido, jamais se altera." },
            { letter: "c", text: "Significa o fim definitivo das reações direta e inversa." },
            { letter: "d", text: "Independe completamente da concentração de O₂ disponível." },
          ]}
          resolution={<p>Por ser dinâmico, o equilíbrio responde às variações de concentração: onde sobra O₂ (pulmões) ele é captado, e onde falta (tecidos) é liberado. Esse "vai e volta" controlado é a base do transporte de oxigênio pelo sangue.</p>}
        />
      </section>
    </article>
  );
}
