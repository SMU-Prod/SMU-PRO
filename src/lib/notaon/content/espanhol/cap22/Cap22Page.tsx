"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 22</span>
          <h1>Interpretação de gráficos, tabelas, mapas e infográficos</h1>
          <p>
            O ENEM frequentemente apresenta questões de espanhol acompanhadas de elementos visuais: gráficos de barras,
            tabelas estatísticas, mapas temáticos e infográficos. Esses textos multimodais combinam linguagem verbal e
            não verbal, exigindo do candidato a capacidade de integrar as informações dos dois sistemas de signos.
            Saber ler os dados e interpretar o que eles significam — e não apenas descrevê-los — é a habilidade central
            cobrada nessas questões. Neste capítulo você aprenderá o vocabulário essencial, as estruturas linguísticas
            típicas e as estratégias de resolução para textos com gráficos em espanhol.
          </p>
        </div>
      </section>

      {/* Seção 1 — Textos Multimodais */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>O que são textos multimodais?</h2>
        <p>
          Um texto multimodal articula mais de um modo semiótico na construção de sentido: o verbal (palavras, frases,
          legendas) e o não verbal (imagens, formas, cores, disposição espacial). No ENEM, questões de espanhol com
          gráficos ou infográficos testam exatamente essa habilidade de integração.
        </p>
        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> a questão raramente pede apenas que você leia o número. Ela pede que você
          interprete o dado — relate-o ao contexto, identifique tendências, compare períodos ou aponte a contradição
          entre o gráfico e o texto verbal.
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Estrutura de texto multimodal: verbal + não verbal = texto multimodal">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <rect x="30" y="60" width="180" height="100" rx="10" fill="#dbeafe" />
            <text x="120" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">Texto Verbal</text>
            <text x="120" y="125" textAnchor="middle" fontSize="12" fill="#1e40af">títulos, legendas,</text>
            <text x="120" y="142" textAnchor="middle" fontSize="12" fill="#1e40af">notas de rodapé</text>
            <rect x="260" y="60" width="180" height="100" rx="10" fill="#d1fae5" />
            <text x="350" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#065f46">Texto Não Verbal</text>
            <text x="350" y="125" textAnchor="middle" fontSize="12" fill="#065f46">gráfico, mapa,</text>
            <text x="350" y="142" textAnchor="middle" fontSize="12" fill="#065f46">ícones, cores</text>
            <defs>
              <marker id="cap22arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            <line x1="210" y1="110" x2="258" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap22arr1)" />
            <line x1="440" y1="110" x2="488" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap22arr1)" />
            <rect x="490" y="60" width="180" height="100" rx="10" fill="#fef3c7" />
            <text x="580" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">Texto</text>
            <text x="580" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">Multimodal</text>
            <text x="580" y="142" textAnchor="middle" fontSize="12" fill="#92400e">integração de sentidos</text>
          </svg>
          <figcaption>Diagrama: os modos verbal e não verbal se integram para formar o texto multimodal.</figcaption>
        </figure>
      </section>

      {/* Seção 2 — Vocabulário essencial */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>Palavras-chave para interpretar dados em espanhol</h2>
        <p>
          Conhecer o vocabulário estatístico em espanhol é o primeiro passo para resolver questões com gráficos.
          Muitos termos são cognatos do português, mas há diferenças importantes de uso.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espanhol</th>
                <th>Português</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>porcentaje</em></td><td>percentagem / porcentagem</td><td><em>El 45% de la población...</em></td></tr>
              <tr><td><em>promedio</em></td><td>média</td><td><em>El promedio de edad es 32 años.</em></td></tr>
              <tr><td><em>cifra</em></td><td>número / cifra</td><td><em>Las cifras muestran un aumento.</em></td></tr>
              <tr><td><em>dato</em></td><td>dado</td><td><em>Los datos indican que...</em></td></tr>
              <tr><td><em>índice</em></td><td>índice</td><td><em>El índice de desempleo bajó.</em></td></tr>
              <tr><td><em>tasa</em></td><td>taxa</td><td><em>La tasa de natalidad disminuyó.</em></td></tr>
              <tr><td><em>aumento / crecimiento</em></td><td>aumento / crescimento</td><td><em>Se registró un aumento del 12%.</em></td></tr>
              <tr><td><em>disminución / descenso</em></td><td>diminuição / queda</td><td><em>Hay una disminución sostenida.</em></td></tr>
              <tr><td><em>variación</em></td><td>variação</td><td><em>La variación interanual fue del 3%.</em></td></tr>
              <tr><td><em>según / de acuerdo con</em></td><td>segundo / de acordo com</td><td><em>Según el gráfico...</em></td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica:</strong> <em>dato</em> (dado/informação) ≠ <em>fecha</em> (data). Não confunda esses falsos
          cognatos na hora de responder sobre o que o gráfico mostra.
        </div>
      </section>

      {/* Seção 3 — Estruturas linguísticas */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática em Uso</span>
        <h2>Estruturas linguísticas para descrever e interpretar dados</h2>
        <p>
          O espanhol usa construções específicas para apresentar dados. Reconhecê-las é essencial para entender
          o que o texto afirma sobre o gráfico.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Estrutura em Espanhol</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apresentar dado</td>
                <td><em>Se observa que / Se aprecia que</em></td>
                <td>Observa-se que / Percebe-se que</td>
              </tr>
              <tr>
                <td>Destacar informação</td>
                <td><em>Cabe destacar que / Vale la pena señalar que</em></td>
                <td>Cabe destacar que / Vale a pena notar que</td>
              </tr>
              <tr>
                <td>Comparar períodos</td>
                <td><em>En comparación con / A diferencia de</em></td>
                <td>Em comparação com / Diferentemente de</td>
              </tr>
              <tr>
                <td>Indicar fonte</td>
                <td><em>Según datos del / De acuerdo con el informe de</em></td>
                <td>Segundo dados do / De acordo com o relatório de</td>
              </tr>
              <tr>
                <td>Indicar tendência</td>
                <td><em>La tendencia muestra / Se evidencia una tendencia</em></td>
                <td>A tendência mostra / Evidencia-se uma tendência</td>
              </tr>
              <tr>
                <td>Indicar proporção</td>
                <td><em>Uno de cada tres / La mitad de / Un tercio de</em></td>
                <td>Um em cada três / A metade de / Um terço de</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 4 — Tipos de gráfico */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de Gráfico</span>
        <h2>Gráficos mais comuns em textos hispânicos</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Gráfico de barras (<em>gráfico de barras</em>)</h3>
            <p>Compara categorias ou períodos. Vocabulário: <em>columna, barra, eje horizontal/vertical, valor máximo/mínimo</em>.</p>
          </div>
          <div className="lesson-card">
            <span>🥧</span>
            <h3>Gráfico de pizza (<em>gráfico circular / de torta</em>)</h3>
            <p>Mostra proporções de um todo. Vocabulário: <em>sector, porción, representa el X%, la mayor parte</em>.</p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Gráfico de linha (<em>gráfico de líneas</em>)</h3>
            <p>Mostra evolução temporal. Vocabulário: <em>curva, tendencia ascendente/descendente, pico, valle, punto de inflexión</em>.</p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Mapa temático (<em>mapa temático</em>)</h3>
            <p>Distribui dados geograficamente. Vocabulário: <em>región, zona, legenda, sombreado, escala, norte/sur/este/oeste</em>.</p>
          </div>
        </div>
      </section>

      {/* Seção 5 — Partes do gráfico */}
      <section className="lesson-section">
        <span className="section-kicker">Anatomia Visual</span>
        <h2>Partes de um gráfico em espanhol</h2>
        <p>
          Antes de interpretar qualquer gráfico, leia todas as partes textuais: título, subtítulo, legendas, eixos
          e notas de rodapé. Elas fornecem o contexto necessário para compreender os dados.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Anatomia de um gráfico com título, eixos, legenda e nota de rodapé">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            {/* Gráfico de barras simulado */}
            <rect x="80" y="30" width="540" height="170" rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Título */}
            <text x="350" y="22" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">[TÍTULO DEL GRÁFICO]</text>
            {/* Eixo Y */}
            <line x1="130" y1="40" x2="130" y2="180" stroke="#64748b" strokeWidth="1.5" />
            <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#475569">100</text>
            <text x="90" y="100" textAnchor="middle" fontSize="10" fill="#475569">50</text>
            <text x="90" y="180" textAnchor="middle" fontSize="10" fill="#475569">0</text>
            <text x="60" y="115" textAnchor="middle" fontSize="10" fill="#1e40af" transform="rotate(-90,60,115)">Eje Y (variable)</text>
            {/* Barras */}
            <rect x="155" y="80" width="50" height="100" fill="#3b82f6" rx="3" />
            <rect x="235" y="100" width="50" height="80" fill="#3b82f6" rx="3" />
            <rect x="315" y="60" width="50" height="120" fill="#10b981" rx="3" />
            <rect x="395" y="90" width="50" height="90" fill="#3b82f6" rx="3" />
            <rect x="475" y="110" width="50" height="70" fill="#10b981" rx="3" />
            {/* Eixo X */}
            <line x1="130" y1="180" x2="600" y2="180" stroke="#64748b" strokeWidth="1.5" />
            <text x="180" y="196" textAnchor="middle" fontSize="10" fill="#475569">2019</text>
            <text x="260" y="196" textAnchor="middle" fontSize="10" fill="#475569">2020</text>
            <text x="340" y="196" textAnchor="middle" fontSize="10" fill="#475569">2021</text>
            <text x="420" y="196" textAnchor="middle" fontSize="10" fill="#475569">2022</text>
            <text x="500" y="196" textAnchor="middle" fontSize="10" fill="#475569">2023</text>
            <text x="350" y="215" textAnchor="middle" fontSize="10" fill="#1e40af">Eje X (años)</text>
            {/* Legenda */}
            <rect x="530" y="50" width="12" height="12" fill="#3b82f6" rx="2" />
            <text x="546" y="61" fontSize="10" fill="#475569">País A</text>
            <rect x="530" y="70" width="12" height="12" fill="#10b981" rx="2" />
            <text x="546" y="81" fontSize="10" fill="#475569">País B</text>
            <text x="350" y="232" textAnchor="middle" fontSize="9" fill="#94a3b8">Fuente: CEPAL, 2024. Nota: datos preliminares para 2023.</text>
          </svg>
          <figcaption>Anatomia de um gráfico em espanhol: título, eixos, barras, legenda e nota de fonte (<em>fuente</em>).</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parte do gráfico</th>
                <th>Em espanhol</th>
                <th>O que indica</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Título</td><td><em>título / encabezado</em></td><td>Tema e recorte temporal/geográfico</td></tr>
              <tr><td>Legenda</td><td><em>leyenda / referencia</em></td><td>Significado de cores e símbolos</td></tr>
              <tr><td>Eixo vertical</td><td><em>eje vertical / eje Y</em></td><td>Escala de valores</td></tr>
              <tr><td>Eixo horizontal</td><td><em>eje horizontal / eje X</em></td><td>Categorias ou tempo</td></tr>
              <tr><td>Nota de rodapé</td><td><em>nota al pie / fuente</em></td><td>Origem dos dados e ressalvas</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 6 — Descrever vs Interpretar */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidade Central</span>
        <h2>Descrever versus interpretar dados</h2>
        <p>
          Esta é a distinção mais importante para o ENEM. Descrever é dizer o que o gráfico mostra
          (reproduzir o dado). Interpretar é explicar o que o dado significa no contexto.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Nível 1 — Descrição</h3>
            <p><em>El gráfico muestra que en 2022 el desempleo fue del 8%.</em> (reprodução do dado)</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Nível 2 — Comparação</h3>
            <p><em>En 2022, el desempleo fue mayor que en 2021, cuando se registró un 6%.</em></p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Nível 3 — Tendência</h3>
            <p><em>A lo largo del período analizado, se observa una tendencia creciente del desempleo.</em></p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Nível 4 — Interpretação</h3>
            <p><em>El aumento del desempleo coincide con la crisis económica regional de 2020-2022.</em></p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>ENEM cobra o nível 4:</strong> questões que pedem apenas leitura direta do gráfico (nível 1)
          são raras. A maioria exige que você relacione o dado ao contexto, identifique contradições ou avalie
          a adequação de uma afirmação.
        </div>
      </section>

      {/* Seção 7 — Infográficos */}
      <section className="lesson-section">
        <span className="section-kicker">Infográficos</span>
        <h2>Como ler infográficos em espanhol</h2>
        <p>
          O infográfico combina texto, ícones, setas, mapas e gráficos numa única composição visual. No ENEM,
          infográficos hispânicos costumam tratar de temas sociais, ambientais e econômicos da América Latina.
        </p>
        <div className="lesson-highlight">
          <strong>Estratégia de leitura:</strong> (1) Leia o título geral. (2) Identifique os blocos temáticos.
          (3) Leia as legendas e notas. (4) Integre os dados com o texto verbal da questão.
          (5) Cuidado com dados que aparecem no infográfico mas contradizem o enunciado — o ENEM pode testar
          exatamente essa contradição.
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento do infográfico</th>
                <th>Em espanhol</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Seta de fluxo</td><td><em>flecha de flujo</em></td><td>Indica direção, sequência ou causalidade</td></tr>
              <tr><td>Ícone representativo</td><td><em>ícono / pictograma</em></td><td>Substitui ou reforça o dado verbal</td></tr>
              <tr><td>Destaque numérico</td><td><em>dato destacado / cifra clave</em></td><td>Chama atenção para o dado mais relevante</td></tr>
              <tr><td>Mapa de localização</td><td><em>mapa de ubicación</em></td><td>Situa geograficamente a informação</td></tr>
              <tr><td>Linha do tempo</td><td><em>línea de tiempo / cronología</em></td><td>Mostra evolução histórica</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 8 — Mapas temáticos */}
      <section className="lesson-section">
        <span className="section-kicker">Mapas</span>
        <h2>Mapas temáticos da América Latina</h2>
        <p>
          Mapas temáticos são muito usados em questões sobre desigualdade, pobreza, biodiversidade, distribuição
          de renda e saúde pública. O vocabulário de orientação e escala é essencial.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧭</span>
            <h3>Orientação</h3>
            <p><em>norte, sur, este, oeste, noreste, noroeste, sureste, suroeste</em> — norte, sul, leste, oeste e diagonais.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Legenda de cores</h3>
            <p><em>Las zonas más oscuras indican mayor concentración.</em> Cores mais escuras = maior intensidade do fenômeno.</p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Escala</h3>
            <p><em>escala gráfica / escala numérica</em>. Indica a proporção entre distâncias no mapa e na realidade.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Símbolos pontuais</h3>
            <p><em>punto, círculo, triángulo</em> — representam cidades, fábricas, recursos naturais ou ocorrências.</p>
          </div>
        </div>
      </section>

      {/* Seção 9 — Dados sobre América Latina */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Regional</span>
        <h2>Vocabulário sobre dados socioeconômicos da América Latina</h2>
        <p>
          O ENEM frequentemente utiliza dados sobre desigualdade, educação, saúde e meio ambiente em países
          hispânicos. Conhecer esse vocabulário ajuda a contextualizar os gráficos rapidamente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Vocabulário em espanhol</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Pobreza</td><td><em>pobreza extrema, umbral de pobreza, línea de pobreza</em></td><td>pobreza extrema, limiar de pobreza</td></tr>
              <tr><td>Educação</td><td><em>tasa de alfabetización, deserción escolar, matrícula</em></td><td>taxa de alfabetização, evasão escolar</td></tr>
              <tr><td>Saúde</td><td><em>esperanza de vida, mortalidad infantil, cobertura sanitaria</em></td><td>expectativa de vida, mortalidade infantil</td></tr>
              <tr><td>Economia</td><td><em>PIB, crecimiento económico, deuda externa, inflación</em></td><td>PIB, crescimento econômico, dívida externa</td></tr>
              <tr><td>Meio ambiente</td><td><em>deforestación, emisiones, biodiversidad, sequía</em></td><td>desmatamento, emissões, biodiversidade, seca</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 10 — Dica ENEM */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>Estratégia completa para questões com gráfico no ENEM</h2>
        <div className="math-block">
          <strong>Roteiro de resolução em 5 passos:</strong>
          <ol>
            <li><strong>Leia o enunciado da questão antes do gráfico</strong> — saiba o que procurar.</li>
            <li><strong>Leia o título e a fonte do gráfico</strong> — contextualize o dado (país, ano, tema).</li>
            <li><strong>Identifique os eixos e a legenda</strong> — entenda o que cada cor/barra representa.</li>
            <li><strong>Localize os dados pedidos</strong> — não leia o gráfico inteiro, vá direto ao ponto.</li>
            <li><strong>Relacione o dado ao contexto textual</strong> — a resposta correta integra gráfico + texto verbal.</li>
          </ol>
        </div>
        <div className="lesson-highlight">
          <strong>Armadilha frequente:</strong> alternativas que reproduzem corretamente um dado do gráfico,
          mas que não respondem ao que a questão pediu (ex.: a questão pede tendência, a alternativa dá
          apenas o valor de um ano específico).
        </div>
      </section>

      {/* Seção 11 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Vocabulário estatístico básico"
          statement={
            <p>
              Leia o trecho: <em>"Según el informe de la CEPAL, la tasa de pobreza en América Latina
              disminuyó un 3% en el último año, aunque la cifra sigue siendo elevada."</em>
              A palavra <em>tasa</em> equivale, em português, a:
            </p>
          }
          options={[
            { letter: "a", text: "data" },
            { letter: "b", text: "taxa", correct: true },
            { letter: "c", text: "tarifa postal" },
            { letter: "d", text: "conta" },
          ]}
          resolution={
            <p>
              <em>Tasa</em> em espanhol corresponde a "taxa" em português — uma medida proporcional
              aplicada a um fenômeno (desemprego, natalidade, pobreza etc.). <em>Fecha</em> = data;
              <em>tarifa</em> = tarifa/preço; <em>cuenta</em> = conta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificação de tendência"
          statement={
            <p>
              Observe o trecho que acompanha um gráfico de linhas: <em>"A lo largo del período 2015-2022,
              se observa una tendencia ascendente en el índice de desempleo juvenil, con un pico registrado
              en 2020, año en que alcanzó el 28%."</em>
              Qual das afirmativas é CORRETA de acordo com o texto?
            </p>
          }
          options={[
            { letter: "a", text: "O desemprego juvenil caiu continuamente entre 2015 e 2022." },
            { letter: "b", text: "O pico do desemprego ocorreu em 2022." },
            { letter: "c", text: "O índice de desemprego juvenil teve tendência de alta no período, com pico em 2020.", correct: true },
            { letter: "d", text: "Em 2020, o desemprego juvenil era de 38%." },
          ]}
          resolution={
            <p>
              <em>Tendencia ascendente</em> = tendência de alta. <em>Pico</em> = pico/valor máximo.
              O texto afirma explicitamente que o pico foi em 2020 com 28% — não 38%. A alternativa (c)
              resume corretamente as duas informações.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Contradição entre texto e gráfico"
          statement={
            <p>
              Um infográfico sobre deforestación na América do Sul apresenta os dados: Brasil: 38%,
              Colômbia: 14%, Peru: 12%, Bolívia: 10%, outros: 26%. O texto que acompanha diz:
              <em>"Colombia es el país más afectado por la deforestación en la región, con tasas crecientes
              desde 2018."</em> Avalie a afirmativa do texto em relação ao infográfico.
            </p>
          }
          options={[
            { letter: "a", text: "O texto é coerente com os dados, pois a Colômbia é citada como prioridade." },
            { letter: "b", text: "O texto contradiz os dados do infográfico, pois o Brasil tem o maior percentual de desmatamento.", correct: true },
            { letter: "c", text: "O texto complementa o infográfico sem contradição alguma." },
            { letter: "d", text: "O infográfico é impreciso, pois os dados não somam 100%." },
          ]}
          resolution={
            <p>
              Os dados mostram o Brasil com 38% — muito superior à Colômbia (14%). Afirmar que a Colômbia é
              "o país mais afetado" contradiz diretamente o infográfico. Esta é uma armadilha clássica do ENEM:
              o texto verbal pode afirmar algo que os dados visuais contradizem. O candidato precisa integrar
              as duas fontes criticamente. Note que os dados somam 100% (38+14+12+10+26=100).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Dados de saúde pública hispânica"
          statement={
            <p>
              Um gráfico de barras compara a <em>esperanza de vida</em> em cinco países hispânicos em 2023:
              Chile: 82 anos, Espanha: 84 anos, México: 75 anos, Venezuela: 72 anos, Bolívia: 71 anos.
              A nota de rodapé diz: <em>"Fuente: OMS, 2024. Datos para el año 2023."</em>
              Com base no gráfico, qual afirmativa é VERDADEIRA?
            </p>
          }
          options={[
            { letter: "a", text: "A Bolívia tem a maior expectativa de vida entre os países listados." },
            { letter: "b", text: "A Espanha aparece com a maior esperanza de vida do conjunto analisado.", correct: true },
            { letter: "c", text: "México e Venezuela têm expectativa de vida idêntica." },
            { letter: "d", text: "O Chile supera a Espanha em expectativa de vida." },
          ]}
          resolution={
            <p>
              <em>Esperanza de vida</em> = expectativa de vida. Segundo os dados, a Espanha (84 anos) tem o
              maior valor entre os cinco países. Chile (82) vem em segundo. A Bolívia tem o menor valor (71),
              não o maior. México (75) ≠ Venezuela (72). A alternativa (b) é a única compatível com os dados.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Interpretação de mapa temático"
          statement={
            <p>
              Um mapa temático da América Latina usa sombreamento: regiões mais escuras indicam maior
              <em>índice de desigualdad</em> (coeficiente de Gini). O texto da questão diz:
              <em>"El mapa permite identificar que la desigualdad no es un fenómeno homogéneo en la región:
              mientras algunas zonas presentan índices similares a los países desarrollados, otras mantienen
              niveles históricamente elevados."</em> O objetivo principal desse texto em relação ao mapa é:
            </p>
          }
          options={[
            { letter: "a", text: "Descrever apenas os valores numéricos do coeficiente de Gini de cada país." },
            { letter: "b", text: "Indicar que todos os países da América Latina têm desigualdade semelhante." },
            { letter: "c", text: "Interpretar o padrão espacial da desigualdade revelado pelo mapa, destacando a heterogeneidade regional.", correct: true },
            { letter: "d", text: "Criticar a metodologia do coeficiente de Gini como medida de desigualdade." },
          ]}
          resolution={
            <p>
              O texto não reproduz dados numéricos (descarta a), não afirma homogeneidade (descarta b)
              e não discute metodologia (descarta d). Ele <em>interpreta</em> o padrão visual do mapa —
              a heterogeneidade entre regiões — indo além da simples descrição. Esta é exatamente a
              habilidade de interpretação de texto multimodal cobrada pelo ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
