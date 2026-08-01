"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 24</span>
          <h1>Interpretação de Gráficos, Tabelas, Anúncios e Infográficos</h1>
          <p>
            O ENEM usa textos multimodais em inglês — gráficos, tabelas, anúncios e
            infográficos — que combinam linguagem verbal e linguagem visual. Dominar o
            vocabulário específico de tendências, estruturas de anúncios e estratégias de
            leitura não linear é essencial para acertar essas questões mesmo sem ser fluente
            em inglês.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário de Gráficos</span>
        <h2>1. Vocabulário de Gráficos em Inglês: Tendências e Variações</h2>
        <p>
          Gráficos em inglês usam vocabulário específico para descrever mudanças ao longo
          do tempo. Este vocabulário é essencial tanto para interpretar gráficos em questões
          de inglês como para a redação e a prova de ciências humanas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>Verbos</th>
                <th>Substantivos</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Alta</strong></td>
                <td>rise, increase, grow, climb, surge, soar, jump</td>
                <td>a rise, an increase, growth, a surge, a jump</td>
                <td><em>Temperatures rose by 2°C.</em></td>
              </tr>
              <tr>
                <td><strong>Queda</strong></td>
                <td>fall, drop, decrease, decline, plunge, plummet, dip</td>
                <td>a fall, a drop, a decrease, a decline, a dip</td>
                <td><em>Sales dropped sharply in Q3.</em></td>
              </tr>
              <tr>
                <td><strong>Estável</strong></td>
                <td>remain stable, level off, plateau, stay constant</td>
                <td>a plateau, stability</td>
                <td><em>Prices remained stable throughout the year.</em></td>
              </tr>
              <tr>
                <td><strong>Pico</strong></td>
                <td>peak, reach a high, hit a record</td>
                <td>a peak, a record high / low</td>
                <td><em>Production peaked in 2019.</em></td>
              </tr>
              <tr>
                <td><strong>Flutuação</strong></td>
                <td>fluctuate, vary, oscillate</td>
                <td>fluctuation, variation</td>
                <td><em>The exchange rate fluctuated wildly.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Advérbios de intensidade</th>
                <th>Significado</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>sharply / dramatically</em></td><td>abruptamente / dramaticamente</td><td><em>Sales fell sharply.</em></td></tr>
              <tr><td><em>gradually / steadily</em></td><td>gradualmente / continuamente</td><td><em>Prices rose steadily.</em></td></tr>
              <tr><td><em>slightly / marginally</em></td><td>levemente / marginalmente</td><td><em>Output increased slightly.</em></td></tr>
              <tr><td><em>significantly / considerably</em></td><td>significativamente</td><td><em>Costs dropped significantly.</em></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Vocabulário de proporções e porcentagens</h3>
          <p>
            <em>percentage / proportion / share / fraction / rate / ratio / average / mean /
            median / trend / peak / trough / overall</em>
          </p>
          <p>
            Exemplos: <em>"The proportion of users aged 18–24 increased from 30% to 45%."</em> /
            <em>"On average, households spend 15% of their income on food."</em>
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos — Tipos</span>
        <h2>2. Tipos de Gráficos e Como Lê-los</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustração dos principais tipos de gráficos usados em textos em inglês no ENEM">
            <rect x="0" y="0" width="700" height="240" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            <text x="350" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Tipos de Gráficos em Inglês</text>
            {/* Line chart */}
            <rect x="20" y="38" width="155" height="140" rx="6" fill="#fff" stroke="#e2e8f0"/>
            <text x="97" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Line Chart</text>
            <line x1="35" y1="155" x2="165" y2="155" stroke="#94a3b8" strokeWidth="1"/>
            <line x1="35" y1="75" x2="35" y2="155" stroke="#94a3b8" strokeWidth="1"/>
            <polyline points="45,145 75,120 100,100 125,115 150,80" fill="none" stroke="#4f46e5" strokeWidth="2.5"/>
            <circle cx="45" cy="145" r="3" fill="#4f46e5"/>
            <circle cx="75" cy="120" r="3" fill="#4f46e5"/>
            <circle cx="100" cy="100" r="3" fill="#4f46e5"/>
            <circle cx="125" cy="115" r="3" fill="#4f46e5"/>
            <circle cx="150" cy="80" r="3" fill="#4f46e5"/>
            <text x="97" y="188" textAnchor="middle" fontSize="9" fill="#6b7280">(gráfico de linhas — tendências)</text>
            {/* Bar chart */}
            <rect x="185" y="38" width="155" height="140" rx="6" fill="#fff" stroke="#e2e8f0"/>
            <text x="262" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Bar Chart</text>
            <line x1="200" y1="155" x2="330" y2="155" stroke="#94a3b8" strokeWidth="1"/>
            <line x1="200" y1="75" x2="200" y2="155" stroke="#94a3b8" strokeWidth="1"/>
            <rect x="210" y="120" width="20" height="35" fill="#4f46e5"/>
            <rect x="237" y="100" width="20" height="55" fill="#7c3aed"/>
            <rect x="264" y="110" width="20" height="45" fill="#4f46e5"/>
            <rect x="291" y="85" width="20" height="70" fill="#7c3aed"/>
            <text x="262" y="188" textAnchor="middle" fontSize="9" fill="#6b7280">(gráfico de barras — comparação)</text>
            {/* Pie chart */}
            <rect x="350" y="38" width="155" height="140" rx="6" fill="#fff" stroke="#e2e8f0"/>
            <text x="427" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Pie Chart</text>
            <circle cx="427" cy="115" r="40" fill="#e2e8f0"/>
            <path d="M427,115 L427,75 A40,40 0 0,1 467,115 Z" fill="#4f46e5"/>
            <path d="M427,115 L467,115 A40,40 0 0,1 410,151 Z" fill="#7c3aed"/>
            <path d="M427,115 L410,151 A40,40 0 0,1 387,115 Z" fill="#a5b4fc"/>
            <path d="M427,115 L387,115 A40,40 0 0,1 427,75 Z" fill="#c7d2fe"/>
            <text x="427" y="188" textAnchor="middle" fontSize="9" fill="#6b7280">(gráfico de pizza — proporções)</text>
            {/* Table */}
            <rect x="515" y="38" width="170" height="140" rx="6" fill="#fff" stroke="#e2e8f0"/>
            <text x="600" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Data Table</text>
            <rect x="525" y="65" width="150" height="18" rx="2" fill="#1e293b"/>
            <text x="600" y="78" textAnchor="middle" fontSize="8" fill="#fff">Country | 2020 | 2023</text>
            <text x="600" y="97" textAnchor="middle" fontSize="8" fill="#374151">Brazil | 212M | 215M</text>
            <line x1="525" y1="102" x2="675" y2="102" stroke="#e2e8f0"/>
            <text x="600" y="117" textAnchor="middle" fontSize="8" fill="#374151">USA | 331M | 335M</text>
            <line x1="525" y1="122" x2="675" y2="122" stroke="#e2e8f0"/>
            <text x="600" y="137" textAnchor="middle" fontSize="8" fill="#374151">India | 1.38B | 1.43B</text>
            <line x1="525" y1="142" x2="675" y2="142" stroke="#e2e8f0"/>
            <text x="600" y="157" textAnchor="middle" fontSize="8" fill="#374151">China | 1.41B | 1.41B</text>
            <text x="600" y="188" textAnchor="middle" fontSize="9" fill="#6b7280">(tabela de dados — valores exatos)</text>
            {/* Labels */}
            <text x="97" y="200" textAnchor="middle" fontSize="8" fill="#4f46e5">tendência</text>
            <text x="262" y="200" textAnchor="middle" fontSize="8" fill="#4f46e5">comparação</text>
            <text x="427" y="200" textAnchor="middle" fontSize="8" fill="#4f46e5">proporção</text>
            <text x="600" y="200" textAnchor="middle" fontSize="8" fill="#4f46e5">dados precisos</text>
          </svg>
          <figcaption>Os quatro tipos principais de representações visuais de dados em textos em inglês no ENEM</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📈</span>
            <h3>Line Chart (Gráfico de Linhas)</h3>
            <p>
              Mostra evolução ao longo do tempo. Leia o eixo X (tempo) e o eixo Y (valor),
              identifique picos, vales e tendências gerais. Vocabulário: <em>rise, fall,
              peak, plateau, trend</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Bar Chart (Gráfico de Barras)</h3>
            <p>
              Compara categorias. Pode ser horizontal ou vertical. Leia os rótulos do eixo
              e compare as alturas/comprimentos das barras. Vocabulário: <em>compared to,
              higher than, lower than, the largest, the smallest</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🥧</span>
            <h3>Pie Chart (Gráfico de Pizza)</h3>
            <p>
              Mostra proporções de um todo (100%). Identifique a fatia maior e a menor.
              Vocabulário: <em>accounts for, represents, makes up, proportion, the majority</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Data Table (Tabela de Dados)</h3>
            <p>
              Apresenta dados precisos organizados em linhas e colunas. Leia os cabeçalhos
              primeiro, depois compare colunas ou linhas específicas. Vocabulário: <em>the
              highest value, compared to, in contrast</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura de Tabelas</span>
        <h2>3. Estratégias de Leitura de Tabelas</h2>
        <p>
          Veja uma tabela modelo com dados fictícios e as estratégias para interpretá-la:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Internet Users (2010)</th>
                <th>Internet Users (2020)</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Brazil</td><td>40%</td><td>74%</td><td>+34 pp</td></tr>
              <tr><td>USA</td><td>72%</td><td>90%</td><td>+18 pp</td></tr>
              <tr><td>India</td><td>7%</td><td>45%</td><td>+38 pp</td></tr>
              <tr><td>Germany</td><td>80%</td><td>93%</td><td>+13 pp</td></tr>
              <tr><td>Nigeria</td><td>28%</td><td>73%</td><td>+45 pp</td></tr>
            </tbody>
          </table>
        </div>
        <p>A partir desta tabela, você pode praticar inferências:</p>
        <ul>
          <li><strong>Explícito:</strong> "India had 7% of internet users in 2010." ✓ (dado direto)</li>
          <li><strong>Implícito:</strong> "Developing countries showed higher growth rates." ✓ (deduzido comparando colunas)</li>
          <li><strong>Impossível inferir:</strong> "Germany's internet speed is the fastest." ✗ (a tabela não diz isso)</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Passo a passo para tabelas no ENEM</h3>
          <p>
            1. Leia o título da tabela antes dos dados.
            2. Identifique o que cada coluna e linha representa.
            3. Encontre o maior e o menor valor por coluna.
            4. Compare linhas para encontrar diferenças.
            5. Responda apenas com base nos dados da tabela — não acrescente informações externas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Anúncios</span>
        <h2>4. Estrutura de Anúncios Publicitários em Inglês</h2>
        <p>
          Anúncios em inglês têm uma estrutura padronizada que é importante conhecer para
          identificar sua função e os recursos persuasivos utilizados.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Headline (Título)</h3>
            <p>
              Primeira coisa que o leitor vê. Deve capturar a atenção imediatamente. Usa
              linguagem impactante, pergunta retórica, imperativo ou afirmação provocante.
              Exemplo: <em>"Is your skin ready for summer?"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Body Copy (Corpo do Texto)</h3>
            <p>
              Explica o produto/serviço, seus benefícios e diferencias. Usa linguagem
              mais descritiva e persuasiva. Pode incluir dados, depoimentos ou argumentos.
              Exemplo: <em>"Our formula, tested by dermatologists in 40 countries..."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Slogan / Tagline</h3>
            <p>
              Frase curta e memorável que resume a identidade da marca. Usa recursos
              fonéticos (rima, aliteração) e é facilmente lembrada. Exemplos clássicos:
              <em>"Just Do It"</em> (Nike); <em>"Think Different"</em> (Apple).
            </p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Call to Action (CTA)</h3>
            <p>
              Instrução direta ao consumidor sobre o que fazer. Usa imperativo. Exemplos:
              <em>"Buy now", "Visit our website", "Call today", "Download the app",
              "Don't miss out"</em>. Cria urgência e direciona o comportamento do leitor.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso Persuasivo</th>
                <th>Em inglês</th>
                <th>Como aparece no anúncio</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apelo emocional</td>
                <td>emotional appeal (pathos)</td>
                <td>Imagens de família, felicidade, segurança</td>
                <td><em>"Protect what matters most."</em></td>
              </tr>
              <tr>
                <td>Apelo à autoridade</td>
                <td>appeal to authority (ethos)</td>
                <td>Citação de especialistas, prêmios, certificações</td>
                <td><em>"Recommended by 9 out of 10 dentists."</em></td>
              </tr>
              <tr>
                <td>Apelo à razão</td>
                <td>rational appeal (logos)</td>
                <td>Dados, comparações, resultados mensuráveis</td>
                <td><em>"Uses 50% less energy than competitors."</em></td>
              </tr>
              <tr>
                <td>Escassez / urgência</td>
                <td>scarcity / urgency</td>
                <td>Prazos, quantidades limitadas</td>
                <td><em>"Limited offer — ends Sunday!"</em></td>
              </tr>
              <tr>
                <td>Prova social</td>
                <td>social proof</td>
                <td>Número de clientes, avaliações</td>
                <td><em>"Join over 2 million satisfied customers."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infográficos</span>
        <h2>5. Infográficos: Hierarquia Visual e Leitura Não Linear</h2>
        <p>
          Um <strong>infográfico</strong> combina texto, dados e elementos visuais em um
          único layout. A leitura não é linear (de cima para baixo) — o leitor navega pelos
          elementos visuais conforme a hierarquia visual indica.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama de estrutura de um infográfico mostrando hierarquia visual">
            <rect x="0" y="0" width="700" height="250" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            {/* Title area */}
            <rect x="10" y="10" width="680" height="45" rx="6" fill="#1e293b"/>
            <text x="350" y="37" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">TÍTULO PRINCIPAL — Maior, mais visível (nível 1)</text>
            {/* Subtitle */}
            <rect x="10" y="62" width="680" height="25" rx="4" fill="#334155"/>
            <text x="350" y="79" textAnchor="middle" fontSize="10" fill="#cbd5e1">Subtítulo ou dado-chave em destaque (nível 2)</text>
            {/* Three columns */}
            <rect x="10" y="95" width="210" height="110" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="115" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4c1d95">BLOCO TEMÁTICO 1</text>
            <circle cx="115" cy="140" r="22" fill="#7c3aed"/>
            <text x="115" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">32%</text>
            <text x="115" y="175" textAnchor="middle" fontSize="9" fill="#4c1d95">Dado + ícone visual</text>
            <text x="115" y="188" textAnchor="middle" fontSize="9" fill="#4c1d95">(nível 3)</text>
            <rect x="245" y="95" width="210" height="110" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="350" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14532d">BLOCO TEMÁTICO 2</text>
            <circle cx="350" cy="140" r="22" fill="#16a34a"/>
            <text x="350" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">58%</text>
            <text x="350" y="175" textAnchor="middle" fontSize="9" fill="#14532d">Dado + ícone visual</text>
            <text x="350" y="188" textAnchor="middle" fontSize="9" fill="#14532d">(nível 3)</text>
            <rect x="480" y="95" width="210" height="110" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="585" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#713f12">BLOCO TEMÁTICO 3</text>
            <circle cx="585" cy="140" r="22" fill="#ca8a04"/>
            <text x="585" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">10%</text>
            <text x="585" y="175" textAnchor="middle" fontSize="9" fill="#713f12">Dado + ícone visual</text>
            <text x="585" y="188" textAnchor="middle" fontSize="9" fill="#713f12">(nível 3)</text>
            {/* Footer / source */}
            <rect x="10" y="212" width="680" height="28" rx="4" fill="#f1f5f9"/>
            <text x="350" y="230" textAnchor="middle" fontSize="9" fill="#6b7280">Fonte / Source: [nome da fonte] — texto de rodapé pequeno (nível 4 — menos importante)</text>
          </svg>
          <figcaption>Hierarquia visual em infográficos: do elemento mais proeminente ao menos visível</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👁️</span>
            <h3>Leitura por Hierarquia</h3>
            <p>
              Comece sempre pelo elemento visualmente mais proeminente (maior, mais colorido,
              centralizado). Depois os subtítulos, depois os blocos de dados, por último
              legendas e fontes.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Relação Texto-Imagem</h3>
            <p>
              Em infográficos, o texto e a imagem se completam — um sem o outro pode ser
              ambíguo. O ícone visual confirma ou amplia o dado textual. Nunca ignore
              os elementos visuais em questões do ENEM.
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Atenção à Fonte</h3>
            <p>
              O rodapé do infográfico geralmente indica a fonte dos dados. O ENEM pode
              perguntar sobre a procedência ou confiabilidade das informações. Preste
              atenção em "Source:", "Data:", "According to:".
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Cuidado com Seleção de Dados</h3>
            <p>
              Infográficos e anúncios selecionam dados favoráveis para sua mensagem. Uma
              questão do ENEM pode pedir que você identifique o que o infográfico <em>não</em>
              mostra ou qual informação estaria faltando para uma análise completa.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Campanhas Sociais</span>
        <h2>6. Campanhas de Conscientização em Inglês</h2>
        <p>
          O ENEM frequentemente usa anúncios de campanhas sociais (saúde pública, meio
          ambiente, direitos humanos) em inglês. Elas diferem dos anúncios comerciais por
          sua intenção — não vender, mas conscientizar e mudar comportamentos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Campanha Comercial</th>
                <th>Campanha Social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Objetivo</strong></td>
                <td>Vender produto / serviço</td>
                <td>Mudar comportamento / conscientizar</td>
              </tr>
              <tr>
                <td><strong>Tom</strong></td>
                <td>Positivo, aspiracional, sedutor</td>
                <td>Informativo, urgente, emocional, às vezes chocante</td>
              </tr>
              <tr>
                <td><strong>Recursos</strong></td>
                <td>Beleza, status, prazer</td>
                <td>Dados alarmantes, apelo emocional, narrativa de impacto</td>
              </tr>
              <tr>
                <td><strong>CTA típico</strong></td>
                <td><em>Buy now / Order today</em></td>
                <td><em>Act now / Donate / Spread the word / Save lives</em></td>
              </tr>
              <tr>
                <td><strong>Exemplos</strong></td>
                <td>Nike, Apple, Coca-Cola</td>
                <td>WWF, WHO, UNICEF, Greenpeace</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo de texto de campanha social</h3>
          <blockquote style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            <p>
              "8 million tonnes of plastic enter our oceans every year. That's one garbage
              truck every minute. Change starts with you. Refuse single-use plastics.
              Because the ocean can't wait."
            </p>
          </blockquote>
          <p>
            Recursos identificáveis: dado estatístico chocante ("8 million tonnes"),
            comparação acessível ("one garbage truck"), apelo emocional e imperativo
            ("Refuse"), urgência ("can't wait").
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia Não Linear</span>
        <h2>7. Estratégias de Leitura Não Linear para o ENEM</h2>
        <p>
          Textos multimodais não precisam ser lidos linearmente. Use estas estratégias:
        </p>
        <ol>
          <li>
            <strong>Leia o título e a fonte primeiro</strong> — eles contextualizam o tipo
            de texto e a perspectiva adotada.
          </li>
          <li>
            <strong>Identifique o gênero visual</strong> — gráfico, tabela, infográfico ou
            anúncio pedem estratégias diferentes.
          </li>
          <li>
            <strong>Leia a questão antes de analisar o visual</strong> — assim você sabe
            exatamente o que procurar e não perde tempo com dados irrelevantes.
          </li>
          <li>
            <strong>Para gráficos</strong>: leia os eixos, identifique a variável de cada
            eixo, depois analise tendências e valores extremos (pico/vale).
          </li>
          <li>
            <strong>Para tabelas</strong>: leia os cabeçalhos de linha e coluna, depois
            vá diretamente aos valores pedidos pela questão.
          </li>
          <li>
            <strong>Para anúncios</strong>: identifique produto/serviço, público-alvo,
            intenção e recursos persuasivos — a questão frequentemente pede um desses.
          </li>
        </ol>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>8. Vocabulário Consolidado: Gráficos, Anúncios e Infográficos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo</th>
                <th>Tradução</th>
                <th>Contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>trend</em></td><td>tendência</td><td>Gráfico de linhas</td></tr>
              <tr><td><em>peak / trough</em></td><td>pico / vale</td><td>Gráfico de linhas</td></tr>
              <tr><td><em>accounts for / makes up</em></td><td>representa / corresponde a</td><td>Gráfico de pizza</td></tr>
              <tr><td><em>compared to / in contrast</em></td><td>comparado a / em contraste</td><td>Qualquer gráfico</td></tr>
              <tr><td><em>headline</em></td><td>título / manchete</td><td>Anúncio / notícia</td></tr>
              <tr><td><em>slogan / tagline</em></td><td>slogan / lema</td><td>Anúncio</td></tr>
              <tr><td><em>call to action</em></td><td>chamada para ação</td><td>Anúncio / campanha</td></tr>
              <tr><td><em>target audience</em></td><td>público-alvo</td><td>Anúncio / marketing</td></tr>
              <tr><td><em>source</em></td><td>fonte</td><td>Infográfico / tabela</td></tr>
              <tr><td><em>infographic</em></td><td>infográfico</td><td>Texto multimodal</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 — DICA ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>9. Dica Final: Cuidados Comuns em Questões de Gráficos e Anúncios</h2>
        <div className="math-block">
          <strong>ARMADILHAS FREQUENTES EM QUESTÕES DO ENEM COM TEXTOS VISUAIS:</strong>
          <br /><br />
          ① Gráficos: cuidado com a escala do eixo Y — uma diferença visual grande pode
          corresponder a uma diferença numérica pequena se a escala começar em valor alto.
          <br /><br />
          ② Tabelas: não "invente" dados. Se a tabela mostra 2020 e 2023, você não pode
          afirmar nada sobre 2021 ou 2022.
          <br /><br />
          ③ Anúncios: o objetivo é sempre persuadir — mesmo campanhas sociais. Não confunda
          "informar" com "conscientizar e persuadir a agir".
          <br /><br />
          ④ Infográficos: a fonte dos dados é parte do texto — questões podem perguntar
          sobre credibilidade ou limitação das informações.
          <br /><br />
          ⑤ Texto + visual: em questões com texto E imagem, a resposta geralmente requer
          a integração dos dois — não é possível responder olhando apenas para um deles.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Vocabulário de gráficos"
          statement={
            <div>
              <p>Qual alternativa descreve corretamente a seguinte tendência em um gráfico:</p>
              <blockquote style={{borderLeft: "3px solid #4f46e5", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "The number of smartphone users worldwide <strong>rose sharply</strong> from
                  2010 to 2015, then <strong>leveled off</strong> between 2015 and 2017, before
                  <strong>climbing steadily</strong> again through 2023."
                </p>
              </blockquote>
              <p>Qual das afirmações abaixo é compatível com essa descrição?</p>
            </div>
          }
          options={[
            { letter: "A", text: "O número de usuários caiu bruscamente entre 2010 e 2015." },
            { letter: "B", text: "Houve crescimento rápido até 2015, estabilização e novo crescimento gradual.", correct: true },
            { letter: "C", text: "O número de usuários ficou constante durante todo o período de 2010 a 2023." },
            { letter: "D", text: "O crescimento foi lento e constante em todos os anos do período." },
            { letter: "E", text: "Houve queda acentuada entre 2015 e 2017 seguida de recuperação." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> "Rose sharply" = subiu rapidamente (2010–2015).
                "Leveled off" = estabilizou (2015–2017). "Climbing steadily" = subindo
                gradualmente (2017–2023). A alternativa B descreve exatamente essa sequência.
                A alternativa A usa "fell" (caiu) que é o oposto de "rose". C ignora as
                variações. D descreve crescimento constante, sem a estabilização intermediária.
                E confunde "leveled off" com queda.
              </p>
            </div>
          }
        />

        <Exercise
          level="Intermediário"
          title="Interpretar anúncio publicitário"
          statement={
            <div>
              <p>Leia o texto de um anúncio:</p>
              <blockquote style={{borderLeft: "3px solid #059669", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  <strong>AQUA PURE</strong>
                  <br />
                  <em>"Why settle for less when you can have the best?"</em>
                  <br /><br />
                  Our water filter removes 99.9% of contaminants — tested and certified by
                  the Global Water Safety Institute. Over 3 million homes already trust AQUA PURE.
                  <br /><br />
                  <strong>Order now and get 30% off. Limited stock available.</strong>
                </p>
              </blockquote>
              <p>Qual recurso persuasivo NÃO é utilizado nesse anúncio?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Apelo à autoridade (certificação por instituto)." },
            { letter: "B", text: "Prova social (3 milhões de lares)." },
            { letter: "C", text: "Urgência (estoque limitado)." },
            { letter: "D", text: "Dados racionais (99.9% dos contaminantes)." },
            { letter: "E", text: "Apelo emocional através de uma narrativa pessoal de consumidor.", correct: true },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: E.</strong> O anúncio usa: apelo à autoridade (A — "certified
                by the Global Water Safety Institute"), prova social (B — "3 million homes
                trust"), urgência (C — "Limited stock available") e dados racionais (D —
                "99.9% of contaminants"). O que não está presente é um apelo emocional por
                meio de narrativa pessoal de consumidor — não há testemunho, história ou
                relato de experiência individual. A pergunta retórica inicial é persuasiva,
                mas não é narrativa pessoal.
              </p>
            </div>
          }
        />

        <Exercise
          level="Avançado"
          title="Interpretar infográfico de campanha social"
          statement={
            <div>
              <p>Leia a descrição de um infográfico de campanha ambiental:</p>
              <blockquote style={{borderLeft: "3px solid #dc2626", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  <strong>SAVE WATER — SAVE LIFE</strong>
                  <br />
                  Only 3% of Earth's water is freshwater. Of that, just 0.5% is accessible
                  for human use. [Pie chart showing 97% saltwater, 2.5% ice caps, 0.5%
                  accessible freshwater]. Average water usage per person per day: USA: 380L /
                  Germany: 120L / Ethiopia: 15L.
                  <br /><em>Source: UN Water Report, 2022.</em>
                </p>
              </blockquote>
              <p>Com base no infográfico, qual afirmação pode ser corretamente inferida?</p>
            </div>
          }
          options={[
            { letter: "A", text: "A Etiópia tem melhores práticas de conservação de água do que a Alemanha." },
            { letter: "B", text: "Toda a água doce da Terra está disponível para consumo humano." },
            { letter: "C", text: "Existe uma grande desigualdade no consumo diário de água entre países.", correct: true },
            { letter: "D", text: "Os EUA têm mais recursos hídricos do que a Alemanha." },
            { letter: "E", text: "A ONU recomenda que cada pessoa use menos de 15L de água por dia." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> O infográfico mostra claramente a diferença no
                consumo diário per capita: EUA (380L) vs. Alemanha (120L) vs. Etiópia (15L).
                Essa diferença de mais de 25 vezes entre o maior e o menor consumidor é uma
                desigualdade evidente — inferência válida e diretamente sustentada pelos dados.
                A alternativa A extrapola (baixo consumo pode ser por falta de acesso, não
                por conservação). B contradiz o texto (apenas 0,5% é acessível). D não está
                fundamentado (consumo ≠ disponibilidade de recursos). E distorce a fonte (a ONU
                apresenta dados, não faz recomendação de 15L no texto).
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Leitura integrada de anúncio com tabela (ENEM)"
          statement={
            <div>
              <p>Analise os dados e o slogan de uma campanha de uma empresa de energia:</p>
              <blockquote style={{borderLeft: "3px solid #7c3aed", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  <strong>GREENPOWER — Energy for a Better Future</strong>
                  <br /><em>"The world's most sustainable energy company."</em>
                  <br /><br />
                  <small>
                    Energy sources used (2023): Solar: 12% | Wind: 15% | Hydroelectric: 18%
                    | Natural gas: 35% | Coal: 20%
                  </small>
                </p>
              </blockquote>
              <p>
                Com base nas informações, é correto afirmar que o slogan da empresa é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Factualmente correto, já que a empresa usa mais energias renováveis do que fósseis." },
            { letter: "B", text: "Enganoso, pois 55% da energia da empresa ainda vem de fontes fósseis.", correct: true },
            { letter: "C", text: "Verdadeiro, porque a empresa não usa energia nuclear." },
            { letter: "D", text: "Neutro, pois apenas descreve os planos futuros da empresa." },
            { letter: "E", text: "Incorreto porque energia solar representa apenas 12% da matriz." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> Calculando: carvão (20%) + gás natural (35%) =
                55% de fontes fósseis. Renováveis: solar (12%) + eólica (15%) + hidrelétrica
                (18%) = 45%. A empresa gera a maior parte de sua energia a partir de fontes
                fósseis — contraditório com o slogan de "most sustainable energy company".
                Isso configura um caso de <em>greenwashing</em> (propaganda enganosa com apelo
                ambiental). A alternativa A inverte os dados. C é irrelevante para o slogan.
                D é falso — o slogan é uma afirmação presente, não futura. E é incompleta
                como crítica ao slogan.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Vocabulário de tendência em gráfico de barras"
          statement={
            <div>
              <p>Leia a descrição de um gráfico de barras e responda:</p>
              <blockquote style={{borderLeft: "3px solid #ea580c", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "The bar chart shows the percentage of adults who read printed newspapers
                  daily in four countries in 2005 and 2022. In all four countries, there was
                  a significant decline. The sharpest drop occurred in the UK, from 52% to
                  just 9%. Brazil dropped from 28% to 11%, while Japan remained the highest
                  in both years, falling from 71% to 38%."
                </p>
              </blockquote>
              <p>
                De acordo com a descrição do gráfico, qual país apresentou a maior proporção
                de leitores de jornal impresso em 2022?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Reino Unido (UK), por ter tido a maior queda." },
            { letter: "B", text: "Brasil, por ter mantido proporção próxima à do Japão." },
            { letter: "C", text: "Japão, pois mesmo após a queda mantinha 38% de leitores.", correct: true },
            { letter: "D", text: "Não é possível saber, pois o quarto país não foi identificado." },
            { letter: "E", text: "Reino Unido, por ter começado com 52% em 2005." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> A descrição afirma explicitamente que "Japan
                remained the highest in both years" — ou seja, em 2022 o Japão tinha 38%,
                a maior proporção entre os países mencionados. O UK caiu para 9% e o Brasil
                para 11% — ambos muito abaixo do Japão. A alternativa A confunde "maior queda"
                (drop) com "maior proporção" — o UK teve o maior declínio, mas o menor valor
                final. E faz a mesma confusão mas usando o dado de 2005. D é incorreta pois
                há dados suficientes para responder a questão.
              </p>
            </div>
          }
        />
      </section>
    </article>
  );
}
