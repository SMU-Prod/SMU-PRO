"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 31</span>
          <h1>Meio ambiente, sustentabilidade e mudanças climáticas</h1>
          <p>
            Meio ambiente é um dos temas mais recorrentes nas provas de inglês do ENEM.
            Sua interdisciplinaridade com Ciências da Natureza e Ciências Humanas torna
            esses textos especialmente ricos em vocabulário técnico, argumentação estruturada
            e posicionamentos políticos — exatamente o que o ENEM adora testar.
          </p>
          <p>
            Neste capítulo você vai dominar o vocabulário essencial do tema, entender como
            textos ambientais estruturam argumentação, reconhecer os gêneros mais usados
            e praticar com questões no estilo ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Por que estudar esse tema</span>
        <h2>1. Meio Ambiente no ENEM: por que é tão frequente?</h2>
        <p>
          O ENEM prioriza temas que conectam múltiplas áreas do conhecimento. Meio ambiente
          aparece em pelo menos uma das 5 questões de inglês em quase todas as edições porque:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Relevância global</h3>
            <p>Mudanças climáticas dominam a imprensa internacional — textos autênticos abundam.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Variedade de gêneros</h3>
            <p>Do artigo científico ao slogan de campanha, o tema aparece em todos os formatos.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Pensamento crítico</h3>
            <p>Textos ambientais exigem distinção entre fato, opinião e dado científico.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Cidadania global</h3>
            <p>O tema conecta-se a competências de consciência socioambiental cobradas pelo ENEM.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário essencial</span>
        <h2>2. Vocabulário de Meio Ambiente de Alta Frequência</h2>
        <p>
          Conhecer esses termos permite inferir o sentido de parágrafos inteiros mesmo sem
          entender cada palavra individualmente. Todos aparecem com alta frequência em textos
          sobre meio ambiente no ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo em inglês</th>
                <th>Tradução / sentido</th>
                <th>Contexto de uso típico no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>climate change</strong></td>
                <td>mudança climática</td>
                <td>Artigos científicos, reportagens, acordos internacionais</td>
              </tr>
              <tr>
                <td><strong>global warming</strong></td>
                <td>aquecimento global</td>
                <td>Campanhas, textos de divulgação científica</td>
              </tr>
              <tr>
                <td><strong>greenhouse effect</strong></td>
                <td>efeito estufa</td>
                <td>Textos explicativos, infográficos</td>
              </tr>
              <tr>
                <td><strong>carbon footprint</strong></td>
                <td>pegada de carbono</td>
                <td>Campanhas de conscientização, rótulos, anúncios</td>
              </tr>
              <tr>
                <td><strong>renewable energy</strong></td>
                <td>energia renovável</td>
                <td>Reportagens, textos sobre política energética</td>
              </tr>
              <tr>
                <td><strong>deforestation</strong></td>
                <td>desmatamento</td>
                <td>Reportagens sobre Amazônia, artigos científicos</td>
              </tr>
              <tr>
                <td><strong>biodiversity</strong></td>
                <td>biodiversidade</td>
                <td>Textos científicos, argumentos de conservação</td>
              </tr>
              <tr>
                <td><strong>sustainability</strong></td>
                <td>sustentabilidade</td>
                <td>Propagandas corporativas, textos sobre desenvolvimento</td>
              </tr>
              <tr>
                <td><strong>emissions</strong></td>
                <td>emissões (de CO₂)</td>
                <td>Acordos climáticos, gráficos de dados</td>
              </tr>
              <tr>
                <td><strong>fossil fuels</strong></td>
                <td>combustíveis fósseis</td>
                <td>Textos sobre transição energética</td>
              </tr>
              <tr>
                <td><strong>conservation</strong></td>
                <td>conservação (ambiental)</td>
                <td>Campanhas, artigos sobre fauna e flora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Estratégia:</strong> Esses termos são quase todos cognatos ou semelhantes ao
          português. <em>Climate</em> → clima, <em>deforestation</em> → desmatamento (de-flores-tation),
          <em>biodiversity</em> → biodiversidade. Use o português para ancorar o sentido.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros textuais</span>
        <h2>3. Tipos de Texto Ambiental no ENEM</h2>
        <p>
          O mesmo tema pode aparecer em formatos muito diferentes, cada um com intenção
          comunicativa e linguagem próprias. Identificar o gênero é o primeiro passo
          para interpretar corretamente:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero</th>
                <th>Características</th>
                <th>O que o ENEM costuma perguntar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artigo científico (adaptado)</td>
                <td>Linguagem técnica, dados, hedging ("studies suggest…")</td>
                <td>Ideia central, conclusão dos pesquisadores</td>
              </tr>
              <tr>
                <td>Reportagem jornalística</td>
                <td>Informativo, citações de especialistas, lead objetivo</td>
                <td>Tema central, posição do autor, inferência</td>
              </tr>
              <tr>
                <td>Campanha de conscientização</td>
                <td>Slogan, imperativo, imagem simbólica, apelo emocional</td>
                <td>Objetivo comunicativo, público-alvo, persuasão</td>
              </tr>
              <tr>
                <td>Infográfico</td>
                <td>Dados visuais + legenda em inglês, comparações</td>
                <td>Interpretação de dados, tendência, comparação</td>
              </tr>
              <tr>
                <td>Artigo de opinião</td>
                <td>Ponto de vista explícito, argumentação, contra-argumentos</td>
                <td>Posicionamento do autor, distinção fato/opinião</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>4. Estrutura da Argumentação em Textos Ambientais</h2>
        <p>
          Textos sobre meio ambiente frequentemente seguem uma estrutura argumentativa
          padrão: <strong>afirmação → evidência → implicação</strong>. Reconhecer essa
          estrutura permite localizar rapidamente a informação pedida na questão.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            aria-label="Diagrama da estrutura argumentativa claim-evidence-implication em textos ambientais"
            role="img"
          >
            <defs>
              <marker id="arrowEnv" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#059669" />
              </marker>
            </defs>

            {/* Bloco 1: Claim */}
            <rect x="20" y="80" width="180" height="80" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="110" y="112" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="bold">CLAIM</text>
            <text x="110" y="130" textAnchor="middle" fill="#065f46" fontSize="11">(Afirmação)</text>
            <text x="110" y="148" textAnchor="middle" fill="#065f46" fontSize="10">"Global warming is</text>
            <text x="110" y="162" textAnchor="middle" fill="#065f46" fontSize="10">accelerating."</text>

            <line x1="200" y1="120" x2="260" y2="120" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowEnv)" />

            {/* Bloco 2: Evidence */}
            <rect x="260" y="80" width="180" height="80" rx="10" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
            <text x="350" y="112" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="bold">EVIDENCE</text>
            <text x="350" y="130" textAnchor="middle" fill="#1e3a8a" fontSize="11">(Evidência)</text>
            <text x="350" y="148" textAnchor="middle" fill="#1e3a8a" fontSize="10">"CO₂ levels reached</text>
            <text x="350" y="162" textAnchor="middle" fill="#1e3a8a" fontSize="10">record highs in 2023."</text>

            <line x1="440" y1="120" x2="500" y2="120" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowEnv)" />

            {/* Bloco 3: Implication */}
            <rect x="500" y="80" width="180" height="80" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="590" y="112" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">IMPLICATION</text>
            <text x="590" y="130" textAnchor="middle" fill="#92400e" fontSize="11">(Implicação)</text>
            <text x="590" y="148" textAnchor="middle" fill="#92400e" fontSize="10">"We must reduce</text>
            <text x="590" y="162" textAnchor="middle" fill="#92400e" fontSize="10">emissions urgently."</text>

            {/* Rótulos inferiores */}
            <text x="110" y="195" textAnchor="middle" fill="#374151" fontSize="10">O que o autor diz</text>
            <text x="350" y="195" textAnchor="middle" fill="#374151" fontSize="10">Por que acreditar</text>
            <text x="590" y="195" textAnchor="middle" fill="#374151" fontSize="10">O que devemos fazer</text>

            {/* Título superior */}
            <text x="350" y="45" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">Estrutura: Claim → Evidence → Implication</text>
            <text x="350" y="65" textAnchor="middle" fill="#6b7280" fontSize="11">Padrão típico de textos argumentativos ambientais no ENEM</text>
          </svg>
          <figcaption>Estrutura argumentativa típica de textos sobre meio ambiente. Reconhecer essa progressão permite localizar a informação-chave de cada questão.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conectores causais</span>
        <h2>5. Conectores de Causa e Consequência em Textos Ambientais</h2>
        <p>
          Textos sobre meio ambiente usam muito a lógica causa → consequência.
          Esses conectores são pistas textuais valiosíssimas para entender a
          relação entre as ideias:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Causa</h3>
            <p><em>because of, due to, owing to, as a result of, caused by</em></p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Consequência</h3>
            <p><em>therefore, thus, consequently, as a result, leading to, which leads to</em></p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Propósito/solução</h3>
            <p><em>in order to, so that, to prevent, to reduce, to address</em></p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Contraste</h3>
            <p><em>however, although, despite, even though, on the other hand</em></p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando a questão pede "de acordo com o texto, o desmatamento
          provoca…", procure no texto um conector de consequência (<em>leads to, results in,
          causes, therefore</em>) logo após a palavra <em>deforestation</em>.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Negacionismo x ciência</span>
        <h2>6. Posicionamentos em Textos sobre Crise Climática</h2>
        <p>
          O ENEM frequentemente apresenta textos que expõem diferentes posições sobre
          mudanças climáticas. Saber distinguir o posicionamento do autor é fundamental
          para responder questões sobre intenção comunicativa e ponto de vista:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Marcas linguísticas típicas</th>
                <th>Exemplo de afirmação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consenso científico</td>
                <td><em>studies show, data indicates, scientists warn, evidence suggests</em></td>
                <td>"Peer-reviewed studies confirm that human activity is the main driver of warming."</td>
              </tr>
              <tr>
                <td>Ceticismo / negacionismo</td>
                <td><em>allegedly, so-called, some claim, it is debated</em></td>
                <td>"Some politicians claim that the so-called climate crisis is exaggerated."</td>
              </tr>
              <tr>
                <td>Ativismo ambiental</td>
                <td><em>we must, it is urgent, demand, now, before it's too late</em></td>
                <td>"We must act now before the planet reaches irreversible tipping points."</td>
              </tr>
              <tr>
                <td>Otimismo tecnológico</td>
                <td><em>innovation, solutions, new technologies will, can solve</em></td>
                <td>"Advances in clean energy technology offer realistic pathways to net zero."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário de hedging</span>
        <h2>7. Linguagem de Moderação em Textos Científicos</h2>
        <p>
          Textos científicos usam <strong>hedging</strong> — linguagem que modera
          afirmações para indicar que são baseadas em evidências, não certezas absolutas.
          Reconhecer essas marcas evita confusão entre o que o texto afirma e o que
          apenas sugere:
        </p>
        <ul>
          <li><strong>may / might / could</strong> — indica possibilidade: <em>"Temperatures might rise by 2°C."</em></li>
          <li><strong>is likely to</strong> — indica probabilidade: <em>"Rainfall is likely to decrease."</em></li>
          <li><strong>suggests / indicates</strong> — evidência, não prova absoluta</li>
          <li><strong>according to</strong> — atribui a afirmação a uma fonte</li>
          <li><strong>it is estimated that</strong> — dado aproximado</li>
        </ul>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> Uma questão comum no ENEM apresenta uma afirmação
          do tipo "O texto afirma que as geleiras <em>certamente</em> derreterão". Se
          o texto usou <em>may melt</em> (podem derreter), a afirmação da questão
          está errada — o texto indica possibilidade, não certeza.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Manchetes típicas</span>
        <h2>8. Manchetes e Títulos Típicos do ENEM sobre Meio Ambiente</h2>
        <p>
          Treinar com manchetes reais é uma das melhores formas de se preparar.
          Veja exemplos do tipo de título que aparece em provas:
        </p>
        <ul>
          <li><em>"Scientists warn of accelerating ice melt in Antarctica"</em></li>
          <li><em>"Amazon deforestation reaches record high, data shows"</em></li>
          <li><em>"Renewable energy now cheaper than fossil fuels in most countries"</em></li>
          <li><em>"World leaders fail to agree on emissions targets at climate summit"</em></li>
          <li><em>"Youth activists demand urgent action on climate change"</em></li>
          <li><em>"New study links air pollution to rising respiratory disease rates"</em></li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Leia manchetes do <em>BBC News</em>,{" "}
          <em>The Guardian</em> ou <em>National Geographic</em> sobre meio ambiente
          por 5 minutos por dia. Isso expõe você ao vocabulário real que o ENEM usa.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Vocabulário ambiental"
          statement={
            <p>
              No trecho <em>"The government announced new measures to reduce carbon emissions
              and invest in renewable energy sources"</em>, o termo{" "}
              <strong>renewable energy</strong> refere-se a:
            </p>
          }
          options={[
            { letter: "A", text: "Energia proveniente exclusivamente de usinas nucleares." },
            { letter: "B", text: "Energia gerada por combustíveis fósseis como petróleo e carvão." },
            { letter: "C", text: "Energia obtida de fontes naturais e reabastecíveis, como sol e vento.", correct: true },
            { letter: "D", text: "Energia importada de outros países para suprir a demanda interna." },
            { letter: "E", text: "Energia produzida por grandes hidrelétricas em países desenvolvidos." },
          ]}
          resolution={
            <p>
              <em>Renewable energy</em> significa energia renovável — obtida de fontes
              naturais que se reabastecm continuamente, como solar, eólica e hidráulica.
              O contexto reforça isso: o trecho opõe <em>renewable energy</em> à
              redução de <em>carbon emissions</em>, mostrando que se trata de uma
              alternativa mais limpa aos combustíveis fósseis.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Conector de consequência"
          statement={
            <p>
              Leia o trecho: <em>"Massive deforestation in the Amazon has led to a significant
              loss of biodiversity. As a result, several species of plants and animals are now
              considered endangered."</em>
              <br /><br />
              O papel do conector <strong>as a result</strong> no texto é:
            </p>
          }
          options={[
            { letter: "A", text: "Introduzir uma informação que contrasta com a afirmação anterior." },
            { letter: "B", text: "Indicar uma condição necessária para que o desmatamento ocorra." },
            { letter: "C", text: "Apresentar a consequência do desmatamento sobre a biodiversidade.", correct: true },
            { letter: "D", text: "Resumir as principais causas da destruição ambiental na Amazônia." },
            { letter: "E", text: "Introduzir uma opinião pessoal do autor sobre a perda de espécies." },
          ]}
          resolution={
            <p>
              <em>As a result</em> é um conector de <strong>consequência</strong>: indica
              que o que vem depois é o resultado direto do que foi dito antes. No trecho,
              a perda de biodiversidade (primeira oração) gerou como consequência o risco
              de extinção de espécies (segunda oração). Identificar conectores causais é
              essencial para responder questões sobre relação entre ideias no ENEM.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Posicionamento do autor"
          statement={
            <p>
              Leia o trecho de um artigo de opinião:{" "}
              <em>"While some politicians continue to dismiss the so-called climate crisis
              as exaggerated, peer-reviewed scientific data leaves little room for doubt:
              human-induced warming is accelerating at an unprecedented rate."</em>
              <br /><br />
              Em relação ao negacionismo climático, o autor do texto:
            </p>
          }
          options={[
            { letter: "A", text: "Apoia a posição dos políticos que consideram a crise exagerada." },
            { letter: "B", text: "Adota uma posição neutra, apresentando os dois lados sem julgamento." },
            { letter: "C", text: "Rejeita o negacionismo ao contrapô-lo com dados científicos revisados por pares.", correct: true },
            { letter: "D", text: "Sugere que o debate científico sobre mudanças climáticas ainda está em aberto." },
            { letter: "E", text: "Critica os cientistas por exagerarem os dados sobre aquecimento global." },
          ]}
          resolution={
            <p>
              O autor usa <em>so-called</em> (dito/suposto) ao mencionar a posição dos
              políticos — um recurso de distanciamento irônico. Em seguida, contrapõe com
              <em> peer-reviewed scientific data</em> (dados científicos revisados por pares),
              marcando claramente seu alinhamento com o consenso científico. A expressão
              <em> leaves little room for doubt</em> reforça a certeza do autor. Isso
              caracteriza rejeição ao negacionismo, não neutralidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Campanha ambiental e intenção comunicativa"
          statement={
            <div>
              <p><em>(Texto de campanha ambiental)</em></p>
              <p style={{ fontStyle: "italic", background: "#f0fdf4", padding: "12px", borderRadius: "6px", borderLeft: "4px solid #059669" }}>
                "Every drop counts. Every tree matters. Every action you take today shapes the
                world your children will inherit tomorrow. <strong>Go green. Act now.</strong>"
              </p>
              <p>A principal intenção comunicativa desse texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Informar sobre dados científicos recentes sobre desmatamento global." },
            { letter: "B", text: "Explicar o conceito de sustentabilidade de forma técnica e objetiva." },
            { letter: "C", text: "Persuadir o leitor a adotar comportamentos ambientalmente responsáveis.", correct: true },
            { letter: "D", text: "Criticar governos que não cumprem acordos internacionais de proteção ambiental." },
            { letter: "E", text: "Narrar a trajetória do movimento ambientalista ao longo do século XX." },
          ]}
          resolution={
            <p>
              O texto é uma <strong>campanha de conscientização</strong>: usa imperativo
              (<em>Go green. Act now.</em>), apelo emocional (<em>your children will inherit</em>)
              e repetição rítmica (<em>Every drop… Every tree… Every action</em>). Todos esses
              recursos visam <strong>persuadir</strong> o leitor a mudar comportamento.
              Não há dados científicos (exclui A), nem explicação técnica (exclui B), nem
              crítica a governos (exclui D), nem narrativa histórica (exclui E).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Hedging em texto científico"
          statement={
            <div>
              <p><em>(Adaptado de artigo científico)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "According to recent studies, global average temperatures may rise by up
                to 3°C by 2100 if current emission trends continue. Researchers warn that
                such an increase could lead to more frequent extreme weather events,
                including hurricanes, floods, and prolonged droughts."
              </p>
              <p>Com base no texto, é correto afirmar que:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Os cientistas garantem que a temperatura subirá exatamente 3°C até 2100." },
            { letter: "B", text: "O texto afirma que eventos climáticos extremos já aumentaram nos últimos anos." },
            { letter: "C", text: "As projeções de aumento de temperatura são apresentadas como possibilidades condicionadas, não certezas.", correct: true },
            { letter: "D", text: "O texto descarta a relação entre emissões atuais e mudanças climáticas futuras." },
            { letter: "E", text: "Os pesquisadores concluem que furacões e enchentes já são consequência direta do aquecimento." },
          ]}
          resolution={
            <p>
              O texto usa linguagem de <strong>hedging</strong>: <em>may rise</em> (pode
              subir), <em>could lead to</em> (poderia levar a) e <em>if current trends
              continue</em> (se as tendências atuais continuarem). Isso indica projeções
              condicionais, não certezas. A alternativa A erra ao usar "garantem" e
              "exatamente". A B introduz afirmação temporal não presente no texto. D e E
              contradizem o conteúdo. Apenas C captura corretamente o tom condicional do
              trecho científico.
            </p>
          }
        />
      </section>
    </article>
  );
}
