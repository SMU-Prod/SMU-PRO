"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 33</span>
          <h1>Óptica Geométrica: Sombra, Penumbra e Espelhos Planos</h1>
          <p>
            Aprenda os fundamentos da óptica geométrica: a luz como raios retilíneos, fontes primárias e
            secundárias, a câmara escura, a formação de sombra e penumbra, e todas as propriedades dos
            espelhos planos — incluindo associações e o número de imagens formadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Óptica Geométrica: Luz como Raios Retilíneos</h2>
        <p>
          A óptica geométrica trata a luz como raios — linhas abstratas que indicam a direção de propagação
          da energia luminosa. Essa aproximação é válida quando os objetos com que a luz interage são muito
          maiores que o comprimento de onda da luz (λ ≈ 400–700 nm), o que ocorre na maioria das situações
          do cotidiano.
        </p>
        <div className="lesson-highlight">
          <h3>Três princípios fundamentais</h3>
          <p><strong>1. Propagação retilínea:</strong> em meios homogêneos e transparentes, a luz propaga-se em linha reta.<br/>
          <strong>2. Independência dos raios:</strong> raios que se cruzam não interferem entre si.<br/>
          <strong>3. Reversibilidade:</strong> a trajetória da luz é reversível — o caminho de A a B é o mesmo de B a A.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fontes</span>
        <h2>2. Fontes de Luz: Primárias e Secundárias</h2>
        <p>
          Uma <strong>fonte primária</strong> (luminosa) emite luz por conta própria, convertendo outra
          forma de energia em radiação eletromagnética visível. Uma <strong>fonte secundária</strong>
          (iluminada) apenas reflete a luz recebida.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Tipo</th><th>Exemplos</th><th>Mecanismo</th></tr></thead>
            <tbody>
              <tr><td>Fonte primária</td><td>Sol, lâmpadas, velas, estrelas, LEDs</td><td>Converte energia química, elétrica ou nuclear em luz</td></tr>
              <tr><td>Fonte secundária</td><td>Lua, planetas, espelhos, objetos iluminados</td><td>Reflexão da luz recebida</td></tr>
            </tbody>
          </table>
        </div>
        <p>Quanto à extensão, as fontes podem ser <strong>puntiformes</strong> (idealmente um ponto) ou
        <strong> extensas</strong> (com dimensão apreciável). Essa distinção determina se há apenas sombra
        ou também penumbra atrás de objetos opacos.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Câmara Escura</span>
        <h2>3. Propagação Retilínea: A Câmara Escura</h2>
        <p>
          A câmara escura de orifício (pin-hole camera) demonstra a propagação retilínea da luz: raios
          vindos de uma fonte extensa atravessam um pequeno furo e formam uma imagem <strong>invertida</strong>
          (de cabeça para baixo e espelhada) no anteparo oposto. A relação de semelhança entre objeto e
          imagem vem da semelhança de triângulos:
        </p>
        <M block={true}>{"\\frac{i}{o} = \\frac{d_i}{d_o}"}</M>
        <p>onde i = tamanho da imagem, o = tamanho do objeto, d_i = distância furo-anteparo, d_o = distância
        objeto-furo.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sombra e Penumbra</span>
        <h2>4. Sombra e Penumbra: Fonte Puntiforme vs. Fonte Extensa</h2>
        <p>
          Uma fonte <strong>puntiforme</strong> produz apenas uma região completamente escura (sombra/umbra)
          atrás do objeto opaco — pois um único ponto de emissão cria sombras geométricas nítidas.
          Uma fonte <strong>extensa</strong> produz uma zona de <em>umbra</em> (nenhuma parte da fonte é
          visível) e uma zona de <em>penumbra</em> (parte da fonte é visível, parcialmente iluminada).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Sombra</span>
        <h2>5. Diagrama: Sombra com Fonte Puntiforme</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 440 200" width="440" height="200" aria-label="Formação de sombra com fonte puntiforme e objeto opaco">
            {/* Source */}
            <circle cx="40" cy="100" r="8" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
            <text x="20" y="85" fill="#f59e0b" fontSize="12">Fonte</text>
            <text x="20" y="97" fill="#f59e0b" fontSize="12">puntiforme</text>
            {/* Object (opaque) */}
            <rect x="180" y="70" width="16" height="60" fill="#334155"/>
            <text x="162" y="64" fill="#334155" fontSize="12">Objeto</text>
            <text x="162" y="77" fill="#334155" fontSize="12">opaco</text>
            {/* Rays defining shadow edges */}
            <line x1="40" y1="100" x2="180" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3"/>
            <line x1="40" y1="100" x2="180" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3"/>
            {/* Shadow region */}
            <line x1="196" y1="70" x2="430" y2="28" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5,3"/>
            <line x1="196" y1="130" x2="430" y2="172" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5,3"/>
            {/* Umbra fill */}
            <polygon points="196,70 430,28 430,172 196,130" fill="#1e293b" opacity="0.6"/>
            {/* Screen */}
            <line x1="400" y1="10" x2="400" y2="190" stroke="#94a3b8" strokeWidth="2"/>
            {/* Labels */}
            <text x="310" y="90" fill="#e2e8f0" fontSize="12" fontWeight="bold">SOMBRA</text>
            <text x="310" y="106" fill="#e2e8f0" fontSize="10">(umbra)</text>
            <text x="405" y="100" fill="#475569" fontSize="12">Anteparo</text>
          </svg>
          <figcaption>Fonte puntiforme: os dois raios tangentes ao objeto opaco delimitam a região de sombra (umbra) no anteparo — região totalmente escura, sem penumbra.</figcaption>
        </figure>

        <figure className="lesson-figure">
          <svg viewBox="0 0 440 220" width="440" height="220" aria-label="Formação de sombra e penumbra com fonte extensa">
            {/* Extended source */}
            <rect x="20" y="70" width="12" height="80" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
            <text x="4" y="63" fill="#f59e0b" fontSize="11">Fonte</text>
            <text x="4" y="75" fill="#f59e0b" fontSize="11">extensa</text>
            {/* Object */}
            <rect x="200" y="90" width="14" height="40" fill="#334155"/>
            {/* Umbra rays (from extreme points of source to edges of object) */}
            <line x1="32" y1="70" x2="200" y2="90" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="5,3"/>
            <line x1="32" y1="150" x2="200" y2="130" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="5,3"/>
            {/* Penumbra outer rays */}
            <line x1="32" y1="150" x2="214" y2="90" stroke="#fde68a" strokeWidth="1" strokeDasharray="4,4" opacity="0.7"/>
            <line x1="32" y1="70" x2="214" y2="130" stroke="#fde68a" strokeWidth="1" strokeDasharray="4,4" opacity="0.7"/>
            {/* Umbra region */}
            <polygon points="214,90 430,60 430,160 214,130" fill="#1e293b" opacity="0.7"/>
            {/* Penumbra top */}
            <polygon points="214,90 430,25 430,60 214,90" fill="#475569" opacity="0.5"/>
            {/* Penumbra bottom */}
            <polygon points="214,130 430,160 430,195 214,130" fill="#475569" opacity="0.5"/>
            {/* Screen */}
            <line x1="400" y1="10" x2="400" y2="210" stroke="#94a3b8" strokeWidth="2"/>
            {/* Labels */}
            <text x="295" y="115" fill="#e2e8f0" fontSize="11" fontWeight="bold">UMBRA</text>
            <text x="290" y="48" fill="#cbd5e1" fontSize="10">PENUMBRA</text>
            <text x="290" y="178" fill="#cbd5e1" fontSize="10">PENUMBRA</text>
          </svg>
          <figcaption>Fonte extensa: forma-se uma umbra (totalmente escura) cercada por penumbra (parcialmente iluminada, onde a fonte é parcialmente visível).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Espelhos Planos</span>
        <h2>6. Espelho Plano: Características da Imagem</h2>
        <p>
          Um espelho plano é uma superfície plana e polida que reflete a luz de forma especular.
          A imagem formada tem as seguintes características:
        </p>
        <div className="lesson-highlight">
          <h3>Propriedades da imagem no espelho plano</h3>
          <p>
            1. <strong>Virtual:</strong> formada pelo prolongamento dos raios refletidos atrás do espelho — não pode ser projetada num anteparo.<br/>
            2. <strong>Direita (não invertida verticalmente):</strong> mesma orientação vertical do objeto.<br/>
            3. <strong>Mesmo tamanho:</strong> ampliação linear A = 1.<br/>
            4. <strong>Simétrica:</strong> a imagem está tão atrás do espelho quanto o objeto está à frente.<br/>
            5. <strong>Enantiomorfa:</strong> lateralmente invertida (a direita do objeto corresponde à esquerda da imagem) — por isso o espelho "inverte esquerda e direita", não cima e baixo.
          </p>
        </div>
        <M block={true}>{"d_{imagem} = d_{objeto} \\quad \\text{(em relação ao espelho)}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Translação e Rotação</span>
        <h2>7. Translação e Rotação do Espelho Plano</h2>
        <p>
          Se um espelho plano se translada uma distância Δx enquanto o objeto permanece fixo, a imagem
          se move o dobro dessa distância:
        </p>
        <M block={true}>{"\\Delta x_{imagem} = 2 \\cdot \\Delta x_{espelho}"}</M>
        <p>
          Se o espelho é girado de um ângulo θ em torno de um ponto fixo (mantendo o objeto fixo),
          o raio refletido gira de <strong>2θ</strong>. Esse princípio é usado em galvanômetros e
          scanners de espelho.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dois Espelhos</span>
        <h2>8. Dois Espelhos Planos com Ângulo α: Número de Imagens</h2>
        <p>
          Dois espelhos planos formando ângulo α (em graus) entre si produzem múltiplas imagens por
          reflexões sucessivas. O número de imagens N é:
        </p>
        <M block={true}>{"N = \\frac{360°}{\\alpha} - 1 \\quad \\text{(quando 360°/α é número inteiro par)}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Ângulo α</th><th>360°/α</th><th>N (imagens)</th></tr></thead>
            <tbody>
              <tr><td>90°</td><td>4</td><td>3</td></tr>
              <tr><td>72°</td><td>5</td><td>4</td></tr>
              <tr><td>60°</td><td>6</td><td>5</td></tr>
              <tr><td>45°</td><td>8</td><td>7</td></tr>
              <tr><td>30°</td><td>12</td><td>11</td></tr>
              <tr><td>0° (paralelos)</td><td>∞</td><td>∞</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Espelhos Paralelos</span>
        <h2>9. Diagrama: Espelhos Paralelos — Infinitas Imagens</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 180" width="420" height="180" aria-label="Dois espelhos planos paralelos formando infinitas imagens">
            {/* Left mirror */}
            <rect x="40" y="20" width="8" height="140" fill="#6366f1"/>
            <text x="4" y="95" fill="#6366f1" fontSize="12">Espelho L</text>
            {/* Right mirror */}
            <rect x="380" y="20" width="8" height="140" fill="#10b981"/>
            <text x="352" y="10" fill="#10b981" fontSize="12">Espelho R</text>
            {/* Object */}
            <rect x="205" y="78" width="10" height="24" fill="#f59e0b"/>
            <text x="190" y="73" fill="#f59e0b" fontSize="11">Objeto</text>
            {/* Image dots from reflections */}
            {[150, 60].map((x, i) => (
              <circle key={`l${i}`} cx={x} cy={90} r={i === 0 ? 6 : 4} fill="#6366f1" opacity={1 - i * 0.3}/>
            ))}
            {[260, 310, 360].map((x, i) => (
              <circle key={`r${i}`} cx={x} cy={90} r={6 - i} fill="#10b981" opacity={1 - i * 0.25}/>
            ))}
            {/* Dashed lines for virtual images */}
            <line x1="48" y1="90" x2="388" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4"/>
            {/* Labels */}
            <text x="140" y="115" fill="#6366f1" fontSize="10">I₁</text>
            <text x="52" y="115" fill="#6366f1" fontSize="10">I₂</text>
            <text x="254" y="115" fill="#10b981" fontSize="10">I₁'</text>
            <text x="305" y="115" fill="#10b981" fontSize="10">I₂'</text>
            <text x="150" y="165" fill="#475569" fontSize="11">⟵ imagens cada vez mais fracas e espaçadas ⟶</text>
          </svg>
          <figcaption>Dois espelhos planos paralelos: o objeto gera infinitas imagens, distribuídas simetricamente dos dois lados, com intensidade decrescente a cada reflexão.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho Mínimo do Espelho</span>
        <h2>10. Tamanho Mínimo de Espelho para Ver o Corpo Inteiro</h2>
        <p>
          Para uma pessoa de altura h ver seu corpo inteiro em um espelho plano vertical, o espelho precisa
          ter pelo menos metade da altura da pessoa: h_min = h/2. Isso é independente da distância entre
          a pessoa e o espelho — resultado contraintuitivo facilmente deduzido por semelhança de triângulos
          nos raios extremos (cabeça e pés).
        </p>
        <M block={true}>{"h_{espelho} \\geq \\frac{h_{pessoa}}{2}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>i</span>
            <h3>Câmara Escura</h3>
            <M block={true}>{"\\frac{i}{o} = \\frac{d_i}{d_o}"}</M>
          </div>
          <div className="math-card">
            <span>d</span>
            <h3>Espelho Plano</h3>
            <M block={true}>{"d_{img} = d_{obj}"}</M>
          </div>
          <div className="math-card">
            <span>N</span>
            <h3>N de Imagens</h3>
            <M block={true}>{"N = \\frac{360°}{\\alpha} - 1"}</M>
          </div>
          <div className="math-card">
            <span>Δx</span>
            <h3>Translação do Espelho</h3>
            <M block={true}>{"\\Delta x_{img} = 2\\Delta x_{esp}"}</M>
          </div>
          <div className="math-card">
            <span>h</span>
            <h3>Espelho para Corpo Inteiro</h3>
            <M block={true}>{"h_{min} = h/2"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Imagem no Espelho Plano"
          statement={<p>Um objeto está posicionado a 2 m de um espelho plano. (a) A que distância do espelho está a imagem? (b) A que distância do objeto está a imagem?</p>}
          options={[
            {letter:"a", text:"(a) 2 m do espelho; (b) 4 m do objeto", correct:true},
            {letter:"b", text:"(a) 4 m do espelho; (b) 2 m do objeto"},
            {letter:"c", text:"(a) 2 m do espelho; (b) 2 m do objeto"},
            {letter:"d", text:"(a) 1 m do espelho; (b) 3 m do objeto"},
          ]}
          resolution={<><p>A imagem no espelho plano é simétrica em relação ao espelho. Se o objeto está a 2 m, a imagem está a 2 m atrás do espelho (do lado oposto). A distância entre objeto e imagem é 2 + 2 = 4 m.</p></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Dois Espelhos com Ângulo de 60°"
          statement={<p>Dois espelhos planos formam entre si um ângulo de 60°. Um objeto é colocado no interior do ângulo. Quantas imagens são formadas?</p>}
          options={[
            {letter:"a", text:"3"},
            {letter:"b", text:"4"},
            {letter:"c", text:"5", correct:true},
            {letter:"d", text:"6"},
          ]}
          resolution={<><M block={true}>{"N = \\frac{360°}{60°} - 1 = 6 - 1 = 5 \\text{ imagens}"}</M></>}
        />

        <Exercise
          level="Avançado"
          title="3. Tamanho Mínimo do Espelho"
          statement={<p>Uma pessoa com 1,70 m de altura quer ver seu corpo inteiro em um espelho plano vertical. Qual é a altura mínima do espelho necessária? Essa altura depende da distância da pessoa ao espelho?</p>}
          options={[
            {letter:"a", text:"0,85 m; não depende da distância ao espelho", correct:true},
            {letter:"b", text:"1,70 m; depende da distância ao espelho"},
            {letter:"c", text:"0,85 m; depende da distância ao espelho"},
            {letter:"d", text:"1,20 m; não depende da distância ao espelho"},
          ]}
          resolution={<><M block={true}>{"h_{min} = \\frac{h_{pessoa}}{2} = \\frac{1{,}70}{2} = 0{,}85 \\text{ m}"}</M><p>O resultado é independente da distância da pessoa ao espelho — os raios dos olhos até o espelho (e de volta aos pés e à cabeça) formam triângulos semelhantes que sempre resultam em h_espelho = h/2.</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Espelho de Vigilância em Loja: Convexo vs. Plano"
          statement={<p>Em lojas de supermercado, colocam-se espelhos convexos nas esquinas dos corredores em vez de espelhos planos. Qual é a principal vantagem física do espelho convexo para essa aplicação?</p>}
          options={[
            {letter:"a", text:"O espelho convexo amplia as imagens, facilitando a leitura de etiquetas"},
            {letter:"b", text:"O espelho convexo tem campo visual muito maior que o plano — abrange ângulos de quase 180°", correct:true},
            {letter:"c", text:"O espelho convexo forma imagens reais, que podem ser gravadas por câmeras"},
            {letter:"d", text:"O espelho convexo é mais barato que o plano"},
          ]}
          resolution={<><p>O espelho convexo possui superfície curva voltada para fora, o que diverge os raios refletidos em um cone muito aberto — proporcionando campo visual de quase 180°. Um espelho plano de mesma largura só mostraria um cone estreito de visão direta. A desvantagem do espelho convexo é que as imagens são menores e não refletem tamanhos reais — por isso retrovisores têm aviso: "objects may be closer than they appear".</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Periscopio: Dois Espelhos a 45°"
          statement={<p>Um periscópio usa dois espelhos planos inclinados a 45° em relação à vertical (e 90° entre si), separados verticalmente. Trace mentalmente o caminho do raio e explique por que a imagem observada está direita (não invertida).</p>}
          options={[
            {letter:"a", text:"A imagem fica invertida — o periscópio inverte cima e baixo"},
            {letter:"b", text:"A imagem fica direita — cada espelho inverte uma vez e as duas inversões se cancelam", correct:true},
            {letter:"c", text:"A imagem fica direita — a refração nos espelhos corrige a inversão"},
            {letter:"d", text:"A imagem fica invertida lateralmente — como em qualquer espelho plano"},
          ]}
          resolution={<><p>O raio entra horizontalmente, incide no espelho superior (45°) e é defletido 90° para baixo; ao atingir o espelho inferior (45°), é defletido 90° horizontalmente de volta ao observador. Cada reflexão inverte a imagem verticalmente, mas duas inversões consecutivas restauram a orientação original — o resultado é uma imagem direita e do mesmo tamanho. É o princípio dos periscópios de submarino e trincheira.</p></>}
        />
      </section>
    </article>
  );
}
