"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      {/* ── HERO ── */}
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 18</span>
          <h1>Comparativos e Superlativos</h1>
          <p>
            Comparar é uma das operações cognitivas mais presentes em textos autênticos — de
            anúncios publicitários a artigos de divulgação científica, passando por reportagens e
            infográficos. O ENEM explora essa habilidade com frequência: para interpretar
            corretamente um texto em inglês, você precisa reconhecer quando o autor está dizendo
            que algo é <em>igual a</em>, <em>melhor do que</em> ou <em>o pior de todos</em>.
          </p>
          <p>
            Neste capítulo você vai aprender todas as estruturas comparativas e superlativas do
            inglês — formas regulares, irregulares, de igualdade, superioridade e inferioridade —
            com exemplos bilíngues, regras ortográficas e dicas práticas para a prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — INTRODUÇÃO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama geral</span>
        <h2>1. Comparar é Interpretar</h2>
        <p>
          Em inglês, os <strong>adjetivos comparativos</strong> estabelecem uma relação entre dois
          elementos, enquanto os <strong>adjetivos superlativos</strong> posicionam um elemento
          como o extremo dentro de um grupo. Antes de aprender as formas, é importante entender
          os três tipos de comparação que existem:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Igualdade</h3>
            <p>
              Dois elementos têm a mesma qualidade na mesma intensidade.{" "}
              <em>She is as tall as her sister.</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Superioridade</h3>
            <p>
              Um elemento possui mais de uma qualidade do que outro.{" "}
              <em>This phone is faster than that one.</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Inferioridade</h3>
            <p>
              Um elemento possui menos de uma qualidade do que outro.{" "}
              <em>This route is less dangerous than the other.</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Superlativo</h3>
            <p>
              Um elemento está no extremo máximo ou mínimo dentro de um grupo.{" "}
              <em>This is the most beautiful city I have ever visited.</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Por que isso importa no ENEM?</strong> Textos publicitários usam superlativos
          para vender produtos (<em>"the best deal you'll ever find"</em>). Artigos científicos
          usam comparativos para apresentar dados (<em>"this vaccine proved more effective than
          the previous one"</em>). Reconhecer essas estruturas é fundamental para responder
          questões de interpretação.
        </div>

        {/* SVG 1 — Escala visual dos graus de comparação */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Escala visual dos graus comparativos"
            style={{ width: "100%", maxWidth: 700, display: "block", margin: "0 auto" }}
          >
            {/* Fundo */}
            <rect width="700" height="220" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Título */}
            <text x="350" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#1e293b">
              Escala dos Graus de Comparação
            </text>

            {/* Barra de gradiente de cores */}
            <defs>
              <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="33%" stopColor="#a3e635" />
                <stop offset="66%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            <rect x="60" y="60" width="580" height="36" rx="18" fill="url(#compGrad)" />

            {/* Marcadores de posição */}
            {/* Inferioridade */}
            <circle cx="100" cy="78" r="16" fill="#3b82f6" />
            <text x="100" y="83" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">−</text>
            <text x="100" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#1e40af">Inferioridade</text>
            <text x="100" y="132" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#3b82f6">less…than</text>

            {/* Igualdade */}
            <circle cx="262" cy="78" r="16" fill="#65a30d" />
            <text x="262" y="83" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">=</text>
            <text x="262" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#365314">Igualdade</text>
            <text x="262" y="132" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#65a30d">as…as</text>

            {/* Superioridade */}
            <circle cx="438" cy="78" r="16" fill="#ea580c" />
            <text x="438" y="83" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white">+</text>
            <text x="438" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#7c2d12">Superioridade</text>
            <text x="438" y="132" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#ea580c">-er / more…than</text>

            {/* Superlativo */}
            <circle cx="600" cy="78" r="16" fill="#e11d48" />
            <text x="600" y="83" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white">★</text>
            <text x="600" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#881337">Superlativo</text>
            <text x="600" y="132" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#e11d48">-est / most…</text>

            {/* Exemplos */}
            <rect x="40" y="155" width="620" height="48" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <text x="100" y="173" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">less expensive</text>
            <text x="100" y="188" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">than…</text>
            <text x="262" y="173" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">as expensive</text>
            <text x="262" y="188" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">as…</text>
            <text x="438" y="173" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">more expensive</text>
            <text x="438" y="188" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">than…</text>
            <text x="600" y="173" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">the most</text>
            <text x="600" y="188" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#475569">expensive</text>
          </svg>
          <figcaption>Figura 1 — Escala visual dos quatro graus de comparação em inglês</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 — IGUALDADE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo de igualdade</span>
        <h2>2. Comparativo de Igualdade: <em>as…as</em></h2>
        <p>
          O comparativo de igualdade é formado com a estrutura <strong>as + adjetivo + as</strong>.
          Ela indica que dois elementos possuem a mesma quantidade ou intensidade de uma
          qualidade. Para a forma negativa (desigualdade), usa-se{" "}
          <strong>not as + adjetivo + as</strong> (ou, em inglês mais formal,{" "}
          <strong>not so + adjetivo + as</strong>).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Estrutura</th>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afirmativa</td>
                <td>as + adj + as</td>
                <td><em>She is as tall as her sister.</em></td>
                <td>Ela é tão alta quanto sua irmã.</td>
              </tr>
              <tr>
                <td>Negativa</td>
                <td>not as + adj + as</td>
                <td><em>He is not as fast as his brother.</em></td>
                <td>Ele não é tão rápido quanto seu irmão.</td>
              </tr>
              <tr>
                <td>Negativa formal</td>
                <td>not so + adj + as</td>
                <td><em>This result is not so accurate as the first one.</em></td>
                <td>Este resultado não é tão preciso quanto o primeiro.</td>
              </tr>
              <tr>
                <td>Com advérbio</td>
                <td>as + adv + as</td>
                <td><em>She runs as quickly as a professional athlete.</em></td>
                <td>Ela corre tão rapidamente quanto uma atleta profissional.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Veja mais exemplos em contexto, como os que podem aparecer em textos do ENEM:
        </p>
        <ul className="lesson-list">
          <li>
            <em>"The new model is as efficient as the previous one, but at half the cost."</em>
            {" "}— O novo modelo é tão eficiente quanto o anterior, mas pela metade do custo.
          </li>
          <li>
            <em>"Learning a foreign language is not as difficult as most people think."</em>
            {" "}— Aprender um idioma estrangeiro não é tão difícil quanto a maioria das pessoas pensa.
          </li>
          <li>
            <em>"Renewable energy sources are becoming as reliable as fossil fuels."</em>
            {" "}— As fontes de energia renovável estão se tornando tão confiáveis quanto os combustíveis fósseis.
          </li>
          <li>
            <em>"This city is not as polluted as it was ten years ago."</em>
            {" "}— Esta cidade não é tão poluída quanto era há dez anos.
          </li>
        </ul>

        <div className="lesson-highlight">
          <strong>Atenção à posição:</strong> O primeiro <em>as</em> é sempre um advérbio que
          modifica o adjetivo; o segundo <em>as</em> é uma conjunção que introduz o segundo
          elemento da comparação. Nunca omita o segundo <em>as</em> em inglês formal —{" "}
          <em>"She is as tall her sister"</em> está incorreto.
        </div>
      </section>

      {/* ── SEÇÃO 3 — SUPERIORIDADE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo de superioridade</span>
        <h2>3. Comparativo de Superioridade</h2>
        <p>
          A forma do comparativo de superioridade depende do <strong>número de sílabas</strong>{" "}
          do adjetivo. Esta é a distinção mais importante que você precisa dominar:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Adjetivos curtos (1–2 sílabas)</h3>
            <p>
              Acrescente <strong>-er + than</strong> ao adjetivo.
              <br />
              <em>tall → taller than</em>
              <br />
              <em>fast → faster than</em>
              <br />
              <em>smart → smarter than</em>
              <br />
              <em>young → younger than</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Adjetivos longos (3+ sílabas)</h3>
            <p>
              Use <strong>more + adjetivo + than</strong>.
              <br />
              <em>interesting → more interesting than</em>
              <br />
              <em>beautiful → more beautiful than</em>
              <br />
              <em>expensive → more expensive than</em>
              <br />
              <em>complicated → more complicated than</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Adjetivos de 2 sílabas — variação</h3>
            <p>
              Alguns adjetivos de 2 sílabas aceitam as duas formas.
              <br />
              <em>clever → cleverer / more clever</em>
              <br />
              <em>simple → simpler / more simple</em>
              <br />
              <em>quiet → quieter / more quiet</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Terminados em -y</h3>
            <p>
              Adjetivos terminados em -y geralmente recebem <strong>-ier</strong>.
              <br />
              <em>happy → happier than</em>
              <br />
              <em>funny → funnier than</em>
              <br />
              <em>heavy → heavier than</em>
              <br />
              <em>busy → busier than</em>
            </p>
          </div>
        </div>

        <p>Exemplos em contexto:</p>
        <ul className="lesson-list">
          <li>
            <em>"Electric cars are cleaner than gasoline-powered vehicles."</em>
            {" "}— Carros elétricos são mais limpos do que veículos movidos a gasolina.
          </li>
          <li>
            <em>"The Amazon is larger than any other rainforest in the world."</em>
            {" "}— A Amazônia é maior do que qualquer outra floresta tropical no mundo.
          </li>
          <li>
            <em>"Online learning has become more accessible than traditional classroom education."</em>
            {" "}— O aprendizado online tornou-se mais acessível do que a educação tradicional em sala de aula.
          </li>
          <li>
            <em>"Teenagers today are more tech-savvy than previous generations."</em>
            {" "}— Os adolescentes de hoje são mais familiarizados com tecnologia do que as gerações anteriores.
          </li>
        </ul>
      </section>

      {/* ── SEÇÃO 4 — ORTOGRAFIA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Regras ortográficas</span>
        <h2>4. Regras Ortográficas no Comparativo</h2>
        <p>
          Ao adicionar o sufixo <strong>-er</strong> (comparativo) ou <strong>-est</strong>{" "}
          (superlativo) a adjetivos curtos, algumas mudanças ortográficas são obrigatórias.
          Ignorar essas regras é um erro comum. Veja a tabela completa:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Regra</th>
                <th>Quando se aplica</th>
                <th>Base</th>
                <th>Comparativo</th>
                <th>Superlativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duplicação da consoante</td>
                <td>CVC (consoante-vogal-consoante) final</td>
                <td><em>big</em></td>
                <td><em>bigger</em></td>
                <td><em>biggest</em></td>
              </tr>
              <tr>
                <td>Duplicação da consoante</td>
                <td>CVC final</td>
                <td><em>hot</em></td>
                <td><em>hotter</em></td>
                <td><em>hottest</em></td>
              </tr>
              <tr>
                <td>Duplicação da consoante</td>
                <td>CVC final</td>
                <td><em>thin</em></td>
                <td><em>thinner</em></td>
                <td><em>thinnest</em></td>
              </tr>
              <tr>
                <td>y → ier / iest</td>
                <td>Termina em -y precedido de consoante</td>
                <td><em>happy</em></td>
                <td><em>happier</em></td>
                <td><em>happiest</em></td>
              </tr>
              <tr>
                <td>y → ier / iest</td>
                <td>Termina em -y precedido de consoante</td>
                <td><em>easy</em></td>
                <td><em>easier</em></td>
                <td><em>easiest</em></td>
              </tr>
              <tr>
                <td>Adiciona apenas -r / -st</td>
                <td>Termina em -e mudo</td>
                <td><em>nice</em></td>
                <td><em>nicer</em></td>
                <td><em>nicest</em></td>
              </tr>
              <tr>
                <td>Adiciona apenas -r / -st</td>
                <td>Termina em -e mudo</td>
                <td><em>large</em></td>
                <td><em>larger</em></td>
                <td><em>largest</em></td>
              </tr>
              <tr>
                <td>Adiciona -er / -est normalmente</td>
                <td>Termina em vogal + consoante não-CVC</td>
                <td><em>tall</em></td>
                <td><em>taller</em></td>
                <td><em>tallest</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Regra CVC:</strong> A duplicação da consoante final ocorre apenas quando o
          adjetivo termina na sequência <em>consoante + vogal + consoante</em> e a sílaba
          final é tônica. Por isso <em>big → bigger</em> (b-i-g: CVC) mas{" "}
          <em>cool → cooler</em> (não duplica, pois "oo" são duas vogais).
        </div>
      </section>

      {/* ── SEÇÃO 5 — INFERIORIDADE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo de inferioridade</span>
        <h2>5. Comparativo de Inferioridade: <em>less…than</em></h2>
        <p>
          O comparativo de inferioridade em inglês é formado com{" "}
          <strong>less + adjetivo + than</strong>. Ao contrário do comparativo de superioridade,
          essa estrutura <em>não muda</em> com o número de sílabas do adjetivo — é sempre{" "}
          <em>less</em>, independentemente do tamanho do adjetivo.
        </p>

        <ul className="lesson-list">
          <li>
            <em>"This route is less dangerous than the one through the mountains."</em>
            {" "}— Esta rota é menos perigosa do que a que passa pelas montanhas.
          </li>
          <li>
            <em>"Public transportation is less comfortable than driving your own car, but it's more sustainable."</em>
            {" "}— O transporte público é menos confortável do que dirigir seu próprio carro, mas é mais sustentável.
          </li>
          <li>
            <em>"The second experiment was less accurate than the first one."</em>
            {" "}— O segundo experimento foi menos preciso do que o primeiro.
          </li>
          <li>
            <em>"Processed food is less nutritious than fresh produce."</em>
            {" "}— Alimentos processados são menos nutritivos do que produtos frescos.
          </li>
          <li>
            <em>"Social media can make people feel less connected to reality."</em>
            {" "}— As redes sociais podem fazer as pessoas se sentirem menos conectadas à realidade.
          </li>
        </ul>

        <div className="lesson-highlight">
          <strong>Less vs. Fewer:</strong> Use <em>less</em> com substantivos incontáveis
          (<em>less water, less time, less energy</em>) e <em>fewer</em> com substantivos
          contáveis (<em>fewer students, fewer cars, fewer options</em>). Embora o ENEM raramente
          cobre essa distinção diretamente, reconhecê-la ajuda na leitura de textos formais.
        </div>
      </section>

      {/* ── SEÇÃO 6 — SUPERLATIVO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Superlativo</span>
        <h2>6. Superlativo: o Máximo e o Mínimo</h2>
        <p>
          O superlativo posiciona um elemento como o extremo dentro de um grupo de três ou mais.
          Em inglês, o superlativo é sempre acompanhado do artigo definido <strong>the</strong>.
          Assim como no comparativo, a forma depende do tamanho do adjetivo:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Superlativo de curtos</h3>
            <p>
              <strong>the + adjetivo + -est</strong>
              <br />
              <em>tall → the tallest</em>
              <br />
              <em>fast → the fastest</em>
              <br />
              <em>young → the youngest</em>
              <br />
              <em>big → the biggest</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Superlativo de longos</h3>
            <p>
              <strong>the most/least + adjetivo</strong>
              <br />
              <em>interesting → the most interesting</em>
              <br />
              <em>beautiful → the most beautiful</em>
              <br />
              <em>expensive → the most expensive</em>
              <br />
              <em>dangerous → the most dangerous</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Superlativo de inferioridade</h3>
            <p>
              <strong>the least + adjetivo</strong>
              <br />
              <em>the least expensive option</em>
              <br />
              <em>the least popular choice</em>
              <br />
              <em>the least effective method</em>
              <br />
              <em>the least common approach</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Superlativo + ever</h3>
            <p>
              Uma estrutura muito frequente em textos do ENEM combina superlativo com{" "}
              <em>I have ever…</em>:
              <br />
              <em>"the best book I have ever read"</em>
              <br />
              <em>"the worst experience I have ever had"</em>
            </p>
          </div>
        </div>

        <p>Exemplos em textos autênticos:</p>
        <ul className="lesson-list">
          <li>
            <em>"Brazil is the largest country in South America."</em>
            {" "}— O Brasil é o maior país da América do Sul.
          </li>
          <li>
            <em>"This is the most challenging environmental problem of our generation."</em>
            {" "}— Este é o problema ambiental mais desafiador da nossa geração.
          </li>
          <li>
            <em>"The Amazon River carries the greatest volume of water of any river on Earth."</em>
            {" "}— O Rio Amazonas carrega o maior volume de água de qualquer rio na Terra.
          </li>
          <li>
            <em>"Scientists have found the least invasive treatment for this condition."</em>
            {" "}— Cientistas encontraram o tratamento menos invasivo para esta condição.
          </li>
          <li>
            <em>"She was awarded the highest honor in the field of medicine."</em>
            {" "}— Ela recebeu a mais alta honraria no campo da medicina.
          </li>
        </ul>

        <div className="lesson-highlight">
          <strong>Superlativo relativo vs. absoluto:</strong> O superlativo relativo compara
          dentro de um grupo (<em>"the tallest in the class"</em>). O superlativo absoluto
          (mais comum em espanhol e português) expressa intensidade máxima sem comparação
          explícita — em inglês isso é feito com advérbios como <em>extremely, very,
          incredibly</em> (<em>"an extremely tall building"</em>), não com o sufixo -est.
        </div>
      </section>

      {/* ── SEÇÃO 7 — IRREGULARES ── */}
      <section className="lesson-section">
        <span className="section-kicker">Formas irregulares</span>
        <h2>7. Formas Irregulares: Memorize!</h2>
        <p>
          Alguns dos adjetivos mais comuns do inglês não seguem as regras regulares e precisam
          ser memorizados. Eles aparecem com frequência em textos do ENEM, especialmente em
          contextos de comparação de qualidade, quantidade e distância.
        </p>

        {/* SVG 2 — Tabela visual das formas irregulares */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 340"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Tabela visual das formas irregulares"
            style={{ width: "100%", maxWidth: 680, display: "block", margin: "0 auto" }}
          >
            {/* Fundo */}
            <rect width="680" height="340" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Título */}
            <text x="340" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#1e293b">
              Formas Irregulares — Base / Comparativo / Superlativo
            </text>

            {/* Cabeçalho da tabela */}
            <rect x="20" y="40" width="200" height="30" rx="6" fill="#6366f1" />
            <rect x="228" y="40" width="200" height="30" rx="6" fill="#0891b2" />
            <rect x="436" y="40" width="224" height="30" rx="6" fill="#059669" />
            <text x="120" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="white">Forma base</text>
            <text x="328" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="white">Comparativo</text>
            <text x="548" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="white">Superlativo</text>

            {/* Linhas de dados */}
            {[
              ["good (bom)", "better (melhor)", "best (o melhor)", "#fef3c7", "#451a03"],
              ["bad (ruim)", "worse (pior)", "worst (o pior)", "#fee2e2", "#450a0a"],
              ["far (longe)", "farther/further", "farthest/furthest", "#e0f2fe", "#082f49"],
              ["little (pouco)", "less (menos)", "least (o mínimo)", "#f0fdf4", "#052e16"],
              ["much/many (muito/s)", "more (mais)", "most (o máximo)", "#fdf4ff", "#3b0764"],
              ["old (velho)", "older / elder", "oldest / eldest", "#fff7ed", "#431407"],
            ].map(([base, comp, sup, bg, fg], i) => (
              <g key={i}>
                <rect x="20" y={80 + i * 40} width="200" height="36" rx="4" fill={bg} stroke="#e2e8f0" strokeWidth="0.5" />
                <rect x="228" y={80 + i * 40} width="200" height="36" rx="4" fill={bg} stroke="#e2e8f0" strokeWidth="0.5" />
                <rect x="436" y={80 + i * 40} width="224" height="36" rx="4" fill={bg} stroke="#e2e8f0" strokeWidth="0.5" />
                <text x="120" y={103 + i * 40} textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill={fg}>
                  {base}
                </text>
                <text x="328" y={103 + i * 40} textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill={fg}>
                  {comp}
                </text>
                <text x="548" y={103 + i * 40} textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill={fg}>
                  {sup}
                </text>
              </g>
            ))}

            {/* Rodapé */}
            <rect x="20" y="326" width="640" height="6" rx="3" fill="#e2e8f0" />
          </svg>
          <figcaption>Figura 2 — Formas irregulares dos principais adjetivos do inglês</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Base</th>
                <th>Comparativo</th>
                <th>Superlativo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>good</em> (bom)</td>
                <td><em>better</em> (melhor)</td>
                <td><em>best</em> (o melhor)</td>
                <td><em>This plan is better than the last one. It is the best option available.</em></td>
              </tr>
              <tr>
                <td><em>bad</em> (ruim)</td>
                <td><em>worse</em> (pior)</td>
                <td><em>worst</em> (o pior)</td>
                <td><em>Air pollution is worse in winter. Last year was the worst on record.</em></td>
              </tr>
              <tr>
                <td><em>far</em> (longe)</td>
                <td><em>farther / further</em></td>
                <td><em>farthest / furthest</em></td>
                <td><em>We need to go further to find a solution.</em></td>
              </tr>
              <tr>
                <td><em>little</em> (pouco)</td>
                <td><em>less</em> (menos)</td>
                <td><em>least</em> (o mínimo)</td>
                <td><em>She has less time than her colleagues. This took the least effort.</em></td>
              </tr>
              <tr>
                <td><em>much / many</em> (muito/s)</td>
                <td><em>more</em> (mais)</td>
                <td><em>most</em> (o máximo)</td>
                <td><em>More people are using renewable energy. Most scientists agree on this.</em></td>
              </tr>
              <tr>
                <td><em>old</em> (velho)</td>
                <td><em>older / elder</em></td>
                <td><em>oldest / eldest</em></td>
                <td><em>My elder sister is a doctor. She is the eldest child in the family.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Farther vs. Further:</strong> <em>Farther</em> refere-se a distância física
          (<em>"The store is farther than I thought"</em>). <em>Further</em> pode ser usado para
          distância física e também em sentido figurado de "mais além, adicional"
          (<em>"We need to discuss this further"</em> — Precisamos discutir isso mais).
          Em inglês americano, <em>further</em> é aceito em ambos os sentidos.
        </div>

        <div className="lesson-highlight">
          <strong>Elder vs. Older:</strong> <em>Elder</em> é usado exclusivamente para membros
          de uma família (<em>my elder brother</em>). <em>Older</em> pode ser usado para
          pessoas, animais e coisas em geral. No superlativo, tanto <em>eldest</em> quanto
          <em>oldest</em> seguem a mesma lógica.
        </div>
      </section>

      {/* ── SEÇÃO 8 — DUPLO COMPARATIVO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura avançada</span>
        <h2>8. O Duplo Comparativo</h2>
        <p>
          O duplo comparativo é uma das estruturas mais elegantes e expressivas do inglês.
          Ele expressa uma relação de <strong>causa e consequência proporcional</strong>: à medida
          que uma coisa aumenta, a outra também aumenta (ou diminui). A estrutura é:
        </p>

        <div className="math-block">
          <strong>the + comparativo, the + comparativo</strong>
          <br />
          <em>The more you practice, the better you get.</em>
          <br />
          <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
            (Quanto mais você pratica, melhor você fica.)
          </span>
        </div>

        <p>Observe a variedade de contextos em que essa estrutura aparece:</p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
                <th>Contexto típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>The more you read, the more you learn.</em></td>
                <td>Quanto mais você lê, mais você aprende.</td>
                <td>Educação</td>
              </tr>
              <tr>
                <td><em>The harder you work, the greater your chances of success.</em></td>
                <td>Quanto mais duro você trabalha, maiores suas chances de sucesso.</td>
                <td>Motivação</td>
              </tr>
              <tr>
                <td><em>The warmer the climate gets, the more unpredictable the weather becomes.</em></td>
                <td>Quanto mais o clima esquenta, mais imprevisível o tempo fica.</td>
                <td>Meio ambiente</td>
              </tr>
              <tr>
                <td><em>The less sleep you get, the worse your cognitive performance.</em></td>
                <td>Quanto menos você dorme, pior seu desempenho cognitivo.</td>
                <td>Saúde</td>
              </tr>
              <tr>
                <td><em>The sooner we act, the better the outcome will be.</em></td>
                <td>Quanto mais cedo agirmos, melhor será o resultado.</td>
                <td>Urgência / política</td>
              </tr>
              <tr>
                <td><em>The more diverse a society is, the richer its culture becomes.</em></td>
                <td>Quanto mais diversa é uma sociedade, mais rica se torna sua cultura.</td>
                <td>Sociologia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Por que o ENEM adora o duplo comparativo?</strong> Textos de divulgação
          científica, artigos de opinião e reportagens sociais frequentemente usam essa estrutura
          para expressar relações de proporcionalidade. Uma questão pode pedir que você identifique
          a ideia central de um parágrafo que começa com <em>"The more…, the more…"</em> —
          saber que isso expressa proporcionalidade direta é fundamental para não errar a
          interpretação.
        </div>
      </section>

      {/* ── SEÇÃO 9 — COMPARATIVOS EM TEXTOS DO ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação no ENEM</span>
        <h2>9. Comparativos em Textos do ENEM</h2>
        <p>
          Os comparativos e superlativos aparecem em pelo menos três tipos de texto muito
          recorrentes nas provas de inglês do ENEM. Entender como cada gênero usa essas
          estruturas é uma vantagem estratégica significativa.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Anúncios publicitários</h3>
            <p>
              Anúncios usam superlativos para criar impacto e persuadir.
              Frases como <em>"the best price in town"</em>, <em>"the most advanced technology"</em>
              ou <em>"faster than ever"</em> são estratégias retóricas para convencer o leitor.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Artigos científicos</h3>
            <p>
              Textos científicos usam comparativos para apresentar resultados de pesquisa:
              <em>"This method proved more effective than the control group."</em> O ENEM
              costuma pedir que o leitor identifique o que foi comparado e qual foi o resultado.
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Reportagens e infográficos</h3>
            <p>
              Reportagens comparam dados estatísticos, países, gerações ou períodos históricos.
              Expressões como <em>"twice as large as"</em>, <em>"10% higher than"</em> e
              <em>"the worst rate since…"</em> são muito comuns.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Textos de opinião</h3>
            <p>
              Artigos de opinião usam comparativos para argumentar: <em>"Online education is
              more accessible, but less effective than face-to-face learning for some students."</em>
              Identificar o argumento central depende de entender as comparações feitas.
            </p>
          </div>
        </div>

        <p>
          Veja um trecho típico de texto de divulgação do tipo que aparece no ENEM:
        </p>

        <div className="lesson-highlight">
          <em>
            "Urban forests are becoming more essential than ever in the fight against climate
            change. Research shows that cities with more green areas have lower average temperatures
            and better air quality than those without. The more trees a city plants, the healthier
            its residents tend to be — and the less money the public health system needs to spend
            on respiratory diseases."
          </em>
          <br /><br />
          <strong>Análise:</strong> Este parágrafo usa <em>more essential than ever</em>
          (superlativo), <em>more green areas</em> + <em>lower temperatures</em> + <em>better
          air quality than</em> (comparativo de superioridade), e dois duplos comparativos
          (<em>the more… the healthier</em> e <em>the less… the less</em>). Uma questão pode
          pedir a ideia central (relação entre áreas verdes e saúde pública) ou o sentido de
          uma das comparações.
        </div>
      </section>

      {/* ── SEÇÃO 10 — DICAS ENEM E ARMADILHAS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dicas e armadilhas</span>
        <h2>10. Dicas ENEM e Armadilhas</h2>

        <div className="math-block">
          <strong>Dica 1 — Nunca use -er e more juntos</strong>
          <br />
          <span style={{ color: "#ef4444" }}>✗ more bigger, more faster, more taller</span>
          <br />
          <span style={{ color: "#22c55e" }}>✓ bigger, faster, taller</span>
          <br />
          Este é o erro mais comum e frequentemente explorado em questões de inglês.
        </div>

        <div className="math-block">
          <strong>Dica 2 — Nunca use -est e most juntos</strong>
          <br />
          <span style={{ color: "#ef4444" }}>✗ the most biggest, the most fastest</span>
          <br />
          <span style={{ color: "#22c55e" }}>✓ the biggest, the fastest</span>
          <br />
          Essas formas duplas são erros graves e não ocorrem em inglês padrão.
        </div>

        <div className="math-block">
          <strong>Dica 3 — O artigo "the" é obrigatório no superlativo</strong>
          <br />
          <span style={{ color: "#ef4444" }}>✗ She is tallest student in the class.</span>
          <br />
          <span style={{ color: "#22c55e" }}>✓ She is the tallest student in the class.</span>
          <br />
          O superlativo em inglês sempre exige o artigo definido <em>the</em> antes do adjetivo.
        </div>

        <div className="math-block">
          <strong>Dica 4 — "Than" vs. "Then"</strong>
          <br />
          <em>than</em> = do que (comparação): <em>She is taller than me.</em>
          <br />
          <em>then</em> = então / depois (tempo): <em>We ate, and then we left.</em>
          <br />
          Confundir as duas palavras é um erro de ortografia muito comum.
        </div>

        <div className="math-block">
          <strong>Dica 5 — Comparações com "twice / three times as…as"</strong>
          <br />
          <em>twice as large as</em> = duas vezes maior do que
          <br />
          <em>three times as expensive as</em> = três vezes mais caro do que
          <br />
          Textos com dados estatísticos usam muito essa estrutura. Ao ver esses
          multiplicadores, preste atenção especial ao sentido quantitativo da comparação.
        </div>

        <div className="math-block">
          <strong>Dica 6 — "No + comparativo" = completamente diferente</strong>
          <br />
          <em>"This drug is no better than a placebo."</em>
          <br />
          = Este medicamento não é nada melhor do que um placebo (são igualmente ineficazes).
          <br />
          A estrutura <em>no + comparativo</em> indica que a diferença é zero. É frequente
          em textos científicos e pode causar confusão na interpretação.
        </div>

        <p>Tabela de armadilhas mais comuns:</p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Armadilha</th>
                <th>Forma errada</th>
                <th>Forma correta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duplo comparativo com adjetivo curto</td>
                <td><em>more big than</em></td>
                <td><em>bigger than</em></td>
              </tr>
              <tr>
                <td>Duplo superlativo</td>
                <td><em>the most best</em></td>
                <td><em>the best</em></td>
              </tr>
              <tr>
                <td>Superlativo sem artigo</td>
                <td><em>She is tallest.</em></td>
                <td><em>She is the tallest.</em></td>
              </tr>
              <tr>
                <td>Confundir than / then</td>
                <td><em>faster then light</em></td>
                <td><em>faster than light</em></td>
              </tr>
              <tr>
                <td>Duplicação desnecessária</td>
                <td><em>biger, hotter</em> (1 t só)</td>
                <td><em>bigger, hotter</em></td>
              </tr>
              <tr>
                <td>Não trocar y por i</td>
                <td><em>happyer, easyer</em></td>
                <td><em>happier, easier</em></td>
              </tr>
              <tr>
                <td>Usar -er em adjetivo longo</td>
                <td><em>importanter, beautifuler</em></td>
                <td><em>more important, more beautiful</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pratique</span>
        <h2>11. Exercícios Comentados</h2>
        <p>
          Resolva as questões abaixo. Após selecionar sua resposta, você verá a solução
          comentada com a explicação da estrutura gramatical envolvida.
        </p>

        {/* EXERCÍCIO 1 — BÁSICO */}
        <Exercise
          level="Básico"
          title="Comparativo de Superioridade — Adjetivo Curto"
          statement={
            <div>
              <p>Qual é a forma correta do comparativo de superioridade do adjetivo <strong>fast</strong>?</p>
              <p>Complete a frase: <em>"A cheetah is ________ than a lion."</em></p>
            </div>
          }
          options={[
            { letter: "A", text: "more fast than" },
            { letter: "B", text: "fastest than" },
            { letter: "C", text: "faster than", correct: true },
            { letter: "D", text: "the faster than" },
            { letter: "E", text: "more faster than" },
          ]}
          resolution={
            <div>
              <p>
                <strong>fast</strong> é um adjetivo monossilábico (1 sílaba), portanto segue a
                regra dos adjetivos curtos: acrescenta-se <strong>-er + than</strong>.
              </p>
              <p>
                A resposta correta é <strong>faster than</strong>: <em>"A cheetah is faster than
                a lion."</em> — Uma chita é mais rápida do que um leão.
              </p>
              <p>
                As demais alternativas estão erradas porque:
              </p>
              <ul>
                <li><strong>A</strong> — "more fast" usa a estrutura de adjetivos longos em um adjetivo curto.</li>
                <li><strong>B</strong> — "fastest" é o superlativo, não o comparativo; além disso, superlativo não usa "than".</li>
                <li><strong>D</strong> — "the faster" seria o superlativo relativo em algumas construções, mas nunca com "than".</li>
                <li><strong>E</strong> — "more faster" é uma forma dupla impossível no inglês padrão.</li>
              </ul>
            </div>
          }
        />

        {/* EXERCÍCIO 2 — INTERMEDIÁRIO */}
        <Exercise
          level="Intermediário"
          title="Formas Irregulares"
          statement={
            <div>
              <p>
                Leia a frase: <em>"The traffic today is ________ than yesterday — I can't believe
                how many accidents there were."</em>
              </p>
              <p>
                Qual palavra preenche corretamente a lacuna, usando a forma irregular do adjetivo{" "}
                <strong>bad</strong>?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "more bad" },
            { letter: "B", text: "badder" },
            { letter: "C", text: "worst" },
            { letter: "D", text: "worse", correct: true },
            { letter: "E", text: "less good" },
          ]}
          resolution={
            <div>
              <p>
                O adjetivo <strong>bad</strong> é irregular. Sua forma comparativa é{" "}
                <strong>worse</strong> e sua forma superlativa é <strong>worst</strong>.
              </p>
              <p>
                Como a frase está comparando o trânsito de hoje com o de ontem (dois elementos),
                precisamos do <strong>comparativo</strong>, não do superlativo. A resposta correta é{" "}
                <strong>worse</strong>: <em>"The traffic today is worse than yesterday."</em>
              </p>
              <p>Análise das alternativas:</p>
              <ul>
                <li><strong>A</strong> — "more bad" é a tentativa de aplicar a regra regular a um adjetivo irregular — incorreto.</li>
                <li><strong>B</strong> — "badder" não existe em inglês padrão.</li>
                <li><strong>C</strong> — "worst" é o superlativo (exigiria "the worst"), não o comparativo.</li>
                <li><strong>E</strong> — "less good" seria a forma de inferioridade, indicando que o trânsito de hoje é melhor que o de ontem — sentido oposto ao contexto.</li>
              </ul>
            </div>
          }
        />

        {/* EXERCÍCIO 3 — AVANÇADO */}
        <Exercise
          level="Avançado"
          title="Duplo Comparativo — Interpretação"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <blockquote style={{ fontStyle: "italic", borderLeft: "3px solid #6366f1", paddingLeft: "1rem", margin: "0.75rem 0" }}>
                "The more connected people become through social media, the more isolated they
                seem to feel in real life. Paradoxically, digital closeness appears to generate
                physical and emotional distance."
              </blockquote>
              <p>De acordo com o texto, qual é a ideia central expressa pelo duplo comparativo?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Quanto mais as pessoas usam redes sociais, mais felizes e conectadas se sentem na vida real." },
            { letter: "B", text: "As redes sociais promovem a proximidade física entre as pessoas." },
            { letter: "C", text: "Quanto maior a conexão digital, maior o sentimento de isolamento na vida real.", correct: true },
            { letter: "D", text: "A distância emocional diminui à medida que as pessoas se conectam nas redes sociais." },
            { letter: "E", text: "As redes sociais não têm impacto significativo sobre o bem-estar emocional das pessoas." },
          ]}
          resolution={
            <div>
              <p>
                O duplo comparativo <em>"The more connected… the more isolated…"</em> estabelece
                uma relação de <strong>proporcionalidade direta entre dois fenômenos opostos</strong>:
                conexão digital crescente → isolamento real crescente.
              </p>
              <p>
                A segunda frase confirma e reforça essa ideia com o termo "paradoxically" (paradoxalmente)
                e a frase <em>"digital closeness appears to generate physical and emotional distance"</em>
                — a proximidade digital parece gerar distância física e emocional.
              </p>
              <p>
                A resposta correta é <strong>C</strong>. As demais alternativas:
              </p>
              <ul>
                <li><strong>A</strong> — contraria o sentido do texto; o texto diz o oposto.</li>
                <li><strong>B</strong> — o texto afirma que a proximidade digital gera distância física.</li>
                <li><strong>D</strong> — o texto diz que a distância emocional aumenta, não diminui.</li>
                <li><strong>E</strong> — o texto expressa um impacto claro (negativo) das redes sociais.</li>
              </ul>
            </div>
          }
        />

        {/* EXERCÍCIO 4 — CONTEXTUALIZADO */}
        <Exercise
          level="Contextualizado"
          title="Superlativo em Texto de Divulgação Científica"
          statement={
            <div>
              <p>Leia o trecho abaixo, de um artigo sobre meio ambiente:</p>
              <blockquote style={{ fontStyle: "italic", borderLeft: "3px solid #059669", paddingLeft: "1rem", margin: "0.75rem 0" }}>
                "Coral reefs are among the most biodiverse ecosystems on the planet, covering
                less than 1% of the ocean floor but supporting more than 25% of all marine
                species. However, they are also the most vulnerable to rising sea temperatures,
                with some scientists arguing that the worst damage may already be irreversible."
              </blockquote>
              <p>
                Com base no texto, qual das alternativas descreve corretamente o papel dos
                superlativos no parágrafo?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Os superlativos são usados para minimizar a importância dos recifes de coral." },
            { letter: "B", text: "Os superlativos destacam os extremos — tanto o potencial dos recifes quanto sua vulnerabilidade.", correct: true },
            { letter: "C", text: "O texto não contém superlativos, apenas comparativos de superioridade." },
            { letter: "D", text: "Os superlativos indicam que os recifes estão em melhor estado do que se pensava." },
            { letter: "E", text: "O superlativo 'the worst' refere-se à temperatura do oceano, não ao dano aos recifes." },
          ]}
          resolution={
            <div>
              <p>O parágrafo contém três superlativos claramente identificáveis:</p>
              <ul>
                <li><em>"the most biodiverse ecosystems"</em> — os ecossistemas mais biodiversos (extremo positivo)</li>
                <li><em>"the most vulnerable"</em> — os mais vulneráveis (extremo negativo)</li>
                <li><em>"the worst damage"</em> — o pior dano (extremo negativo)</li>
              </ul>
              <p>
                Os superlativos cumprem uma função argumentativa dupla: primeiro estabelecem o
                valor excepcional dos recifes (<em>most biodiverse</em>), depois reforçam a
                gravidade da ameaça que sofrem (<em>most vulnerable, worst damage</em>). Isso
                cria um contraste dramático que serve ao argumento do texto.
              </p>
              <p>
                Também há comparativos (<em>less than 1%, more than 25%</em>), mas a questão
                pede especificamente sobre os superlativos. A alternativa correta é <strong>B</strong>.
              </p>
            </div>
          }
        />

        {/* EXERCÍCIO 5 — CONTEXTUALIZADO */}
        <Exercise
          level="Contextualizado"
          title="Comparativo em Texto Publicitário"
          statement={
            <div>
              <p>Leia o anúncio publicitário abaixo:</p>
              <blockquote style={{ fontStyle: "italic", borderLeft: "3px solid #f59e0b", paddingLeft: "1rem", margin: "0.75rem 0" }}>
                "Introducing the PowerX 5000 — the lightest laptop ever made. It's 30% thinner
                than our previous model and charges three times as fast as the competition.
                Why settle for less when the best is finally within reach?"
              </blockquote>
              <p>
                Qual recurso linguístico NÃO está presente no anúncio acima?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Superlativo: 'the lightest laptop ever made'" },
            { letter: "B", text: "Comparativo de superioridade com percentual: '30% thinner than'" },
            { letter: "C", text: "Comparativo de igualdade multiplicado: 'three times as fast as'" },
            { letter: "D", text: "Duplo comparativo de proporcionalidade: 'the more… the more…'", correct: true },
            { letter: "E", text: "Superlativo irregular: 'the best'" },
          ]}
          resolution={
            <div>
              <p>Vamos identificar cada estrutura presente no anúncio:</p>
              <ul>
                <li>
                  <strong>A</strong> — <em>"the lightest laptop ever made"</em>: superlativo de
                  <em> light</em> (<em>light → lighter → lightest</em>). <strong>Presente.</strong>
                </li>
                <li>
                  <strong>B</strong> — <em>"30% thinner than our previous model"</em>: comparativo
                  de superioridade com indicador percentual. <strong>Presente.</strong>
                </li>
                <li>
                  <strong>C</strong> — <em>"three times as fast as the competition"</em>: comparativo
                  de igualdade multiplicado por três (<em>as fast as</em> com multiplicador).{" "}
                  <strong>Presente.</strong>
                </li>
                <li>
                  <strong>D</strong> — O duplo comparativo (<em>the more… the more…</em>)
                  <strong>não aparece</strong> no texto. A frase <em>"Why settle for less when
                  the best is finally within reach?"</em> usa superlativo e inferioridade, mas
                  não a estrutura de duplo comparativo. <strong>AUSENTE — resposta correta.</strong>
                </li>
                <li>
                  <strong>E</strong> — <em>"the best"</em>: superlativo irregular de
                  <em> good</em> (<em>good → better → best</em>). <strong>Presente.</strong>
                </li>
              </ul>
              <p>
                A alternativa correta é <strong>D</strong>. Esta questão treina a habilidade de
                identificar quais estruturas estão e quais NÃO estão presentes em um texto —
                um tipo de pergunta comum no ENEM.
              </p>
            </div>
          }
        />
      </section>

      {/* ── RESUMO FINAL ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>Resumo: O que Você Precisa Saber</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Igualdade</h3>
            <p>
              <strong>as + adj + as</strong> (afirmativa)
              <br />
              <strong>not as + adj + as</strong> (negativa)
              <br />
              <em>as tall as, not as fast as</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Superioridade</h3>
            <p>
              Curtos: <strong>adj + -er + than</strong>
              <br />
              Longos: <strong>more + adj + than</strong>
              <br />
              -y → -ier; CVC → dupla consoante
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Inferioridade</h3>
            <p>
              <strong>less + adj + than</strong>
              <br />
              Funciona com qualquer adjetivo,
              independentemente do tamanho.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Superlativo</h3>
            <p>
              Curtos: <strong>the + adj + -est</strong>
              <br />
              Longos: <strong>the most/least + adj</strong>
              <br />
              Sempre com artigo <em>the</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Irregulares essenciais</h3>
            <p>
              good → better → best
              <br />
              bad → worse → worst
              <br />
              little → less → least
              <br />
              much/many → more → most
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Duplo comparativo</h3>
            <p>
              <strong>The + comp, the + comp</strong>
              <br />
              Proporcionalidade direta ou inversa.
              <br />
              <em>The more… the better.</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Checklist final para a prova:</strong>
          <ul style={{ marginTop: "0.5rem" }}>
            <li>Identifiquei se o adjetivo tem 1–2 sílabas (→ -er/-est) ou 3+ sílabas (→ more/most)?</li>
            <li>Apliquei as regras ortográficas (CVC, y→ier, -e mudo)?</li>
            <li>Memorizei as 6 formas irregulares essenciais?</li>
            <li>Reconheço o duplo comparativo e sei que expressa proporcionalidade?</li>
            <li>Nunca misturei -er com more, nem -est com most?</li>
            <li>Incluí o artigo <em>the</em> antes de todo superlativo?</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
