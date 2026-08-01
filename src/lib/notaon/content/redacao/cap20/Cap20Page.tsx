"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 20</span>

          <h1>Repertório Sociocultural Nota 1000</h1>

          <p>
            Aprenda como usar repertório sociocultural de forma estratégica para
            fortalecer argumentos, aprofundar análises e elevar o nível da sua
            redação ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>

        <h2>1. O que é repertório sociocultural?</h2>

        <svg
          viewBox="0 0 700 300"
          className="lesson-svg"
          aria-label="Mapa radial do repertório sociocultural"
        >
          <defs>
            <marker id="arr20a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
            </marker>
          </defs>
          {/* Centro */}
          <ellipse cx="350" cy="150" rx="85" ry="40" fill="#6366f1" />
          <text x="350" y="143" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Repertório</text>
          <text x="350" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Sociocultural</text>
          {/* Filosofia */}
          <line x1="267" y1="136" x2="162" y2="88" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="58" y="62" width="115" height="48" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="116" y="82" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Filosofia</text>
          <text x="116" y="98" textAnchor="middle" fill="#4338ca" fontSize="10">Bauman, Hobbes, Kant</text>
          {/* Literatura */}
          <line x1="276" y1="122" x2="188" y2="55" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="90" y="22" width="115" height="48" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="148" y="42" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Literatura</text>
          <text x="148" y="58" textAnchor="middle" fill="#4338ca" fontSize="10">obras, autores, movimentos</text>
          {/* Ciências */}
          <line x1="350" y1="110" x2="350" y2="42" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="278" y="10" width="144" height="48" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="350" y="30" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Ciências / Dados</text>
          <text x="350" y="46" textAnchor="middle" fill="#4338ca" fontSize="10">pesquisas e estatísticas</text>
          {/* Arte */}
          <line x1="424" y1="122" x2="512" y2="55" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="498" y="22" width="115" height="48" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="556" y="42" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Arte / Cinema</text>
          <text x="556" y="58" textAnchor="middle" fill="#4338ca" fontSize="10">filmes, músicas, séries</text>
          {/* Sociologia */}
          <line x1="433" y1="136" x2="537" y2="88" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="528" y="62" width="115" height="48" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="586" y="82" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Sociologia</text>
          <text x="586" y="98" textAnchor="middle" fill="#4338ca" fontSize="10">Durkheim, Bourdieu</text>
          {/* História / Leis */}
          <line x1="350" y1="190" x2="350" y2="256" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr20a)" />
          <rect x="270" y="256" width="160" height="38" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="350" y="278" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">História / Legislação</text>
        </svg>

        <p>
          Repertório sociocultural é toda referência externa utilizada para
          enriquecer a argumentação e contextualizar o tema da redação.
        </p>

        <div className="lesson-highlight">
          <h3>Objetivo principal</h3>

          <p>
            Demonstrar conhecimento de mundo e fortalecer a análise crítica do
            problema discutido.
          </p>
        </div>

        <div className="math-block">
          <h3>No ENEM</h3>

          <p>
            O repertório ajuda principalmente nas Competências 2 e 3 da redação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>

        <h2>2. Principais tipos de repertório</h2>

        <p>
          Existem diversas formas de construir repertório sociocultural
          produtivo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>

            <h3>Literatura</h3>

            <p>
              Livros, autores e movimentos literários.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏛️</span>

            <h3>Filosofia</h3>

            <p>
              Pensadores e conceitos filosóficos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌎</span>

            <h3>Sociologia</h3>

            <p>
              Estudos sociais e desigualdades.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎬</span>

            <h3>Filmes e séries</h3>

            <p>
              Obras culturais relacionadas ao tema.
            </p>
          </div>

          <div className="lesson-card">
            <span>📰</span>

            <h3>Atualidades</h3>

            <p>
              Notícias e acontecimentos recentes.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Leis e Constituição</h3>

            <p>
              Direitos sociais e cidadania.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Produtividade</span>

        <h2>3. O que é repertório produtivo?</h2>

        <p>
          Repertório produtivo é aquele que possui ligação clara com o tema e
          fortalece diretamente a argumentação.
        </p>

        <div className="lesson-highlight">
          <h3>Estrutura eficiente</h3>

          <ul>
            <li>Apresente a referência;</li>
            <li>Explique o significado;</li>
            <li>Relacione ao argumento;</li>
            <li>Conecte ao tema da redação.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Exemplo</h3>

          <p>
            A Constituição Federal pode ser usada para discutir acesso à saúde,
            educação, igualdade e cidadania.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filosofia</span>

        <h2>4. Repertório filosófico</h2>

        <p>
          A filosofia é uma das fontes mais utilizadas em redações nota alta.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>

            <h3>Aristóteles</h3>

            <p>
              Sociedade e cidadania.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Hobbes</h3>

            <p>
              Estado e organização social.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>

            <h3>Bauman</h3>

            <p>
              Modernidade líquida e relações sociais.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Importante</h3>

          <p>
            O conceito filosófico precisa ser explicado e conectado ao problema
            discutido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociologia</span>

        <h2>5. Repertório sociológico</h2>

        <p>
          A sociologia ajuda a interpretar problemas sociais e desigualdades.
        </p>

        <div className="lesson-highlight">
          <h3>Autores frequentes</h3>

          <ul>
            <li>Émile Durkheim;</li>
            <li>Karl Marx;</li>
            <li>Max Weber;</li>
            <li>Pierre Bourdieu.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Aplicações</h3>

          <p>
            Educação, desigualdade social, violência, mídia, cidadania e
            exclusão social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura</span>

        <h2>6. Filmes, séries e literatura</h2>

        <p>
          Obras culturais também funcionam como excelentes repertórios quando
          usadas estrategicamente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎬</span>

            <h3>Filmes</h3>

            <p>
              Questões sociais e psicológicas.
            </p>
          </div>

          <div className="lesson-card">
            <span>📺</span>

            <h3>Séries</h3>

            <p>
              Tecnologia, comportamento e ética.
            </p>
          </div>

          <div className="lesson-card">
            <span>📖</span>

            <h3>Literatura</h3>

            <p>
              Crítica social e reflexão humana.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção</h3>

          <p>
            Não basta citar a obra: é necessário explicar sua relação com o
            tema.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>

        <h2>6b. Repertório produtivo vs. decorativo</h2>

        <svg
          viewBox="0 0 700 220"
          className="lesson-svg"
          aria-label="Comparativo entre repertório produtivo e decorativo"
        >
          {/* Título */}
          <text x="350" y="22" textAnchor="middle" fill="#3730a3" fontSize="13" fontWeight="bold">Repertório Produtivo vs. Repertório Decorativo</text>
          {/* Coluna Produtivo */}
          <rect x="20" y="38" width="310" height="170" rx="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
          <text x="175" y="62" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="bold">Repertório PRODUTIVO ✓</text>
          <text x="175" y="82" textAnchor="middle" fill="#166534" fontSize="11">① Apresenta a referência</text>
          <text x="175" y="100" textAnchor="middle" fill="#166534" fontSize="11">② Explica o conceito</text>
          <text x="175" y="118" textAnchor="middle" fill="#166534" fontSize="11">③ Relaciona ao argumento</text>
          <text x="175" y="136" textAnchor="middle" fill="#166534" fontSize="11">④ Conecta ao tema central</text>
          <text x="175" y="160" textAnchor="middle" fill="#14532d" fontSize="10" fontStyle="italic">Ex: "Segundo Bauman, na modernidade</text>
          <text x="175" y="175" textAnchor="middle" fill="#14532d" fontSize="10" fontStyle="italic">líquida os laços são frágeis — fato que</text>
          <text x="175" y="190" textAnchor="middle" fill="#14532d" fontSize="10" fontStyle="italic">explica o crescimento da ansiedade..."</text>
          {/* VS */}
          <text x="350" y="135" textAnchor="middle" fill="#6366f1" fontSize="18" fontWeight="bold">vs</text>
          {/* Coluna Decorativo */}
          <rect x="370" y="38" width="310" height="170" rx="10" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="525" y="62" textAnchor="middle" fill="#7f1d1d" fontSize="13" fontWeight="bold">Repertório DECORATIVO ✗</text>
          <text x="525" y="82" textAnchor="middle" fill="#991b1b" fontSize="11">① Cita a referência</text>
          <text x="525" y="100" textAnchor="middle" fill="#991b1b" fontSize="11">② Não explica o conceito</text>
          <text x="525" y="118" textAnchor="middle" fill="#991b1b" fontSize="11">③ Não relaciona ao argumento</text>
          <text x="525" y="136" textAnchor="middle" fill="#991b1b" fontSize="11">④ Desconexo do tema</text>
          <text x="525" y="160" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontStyle="italic">Ex: "Como dizia Bauman, a modernidade</text>
          <text x="525" y="175" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontStyle="italic">é líquida." [sem desenvolvimento]</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tipo de repertório</th>
              <th>Competência ENEM beneficiada</th>
              <th>Exemplos</th>
              <th>Risco de uso inadequado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Filosófico (Bauman, Hobbes, Kant)</td>
              <td>C3 — Argumentação</td>
              <td>Modernidade líquida para relações sociais; Leviatã para violência</td>
              <td>Citar sem explicar o conceito gera repertório decorativo</td>
            </tr>
            <tr>
              <td>Sociológico (Bourdieu, Marx, Durkheim)</td>
              <td>C3 — Argumentação</td>
              <td>Capital cultural para desigualdade educacional; anomia para violência</td>
              <td>Confundir autores ou usar conceitos incorretamente</td>
            </tr>
            <tr>
              <td>Legislativo (CF, leis específicas)</td>
              <td>C5 — Intervenção</td>
              <td>CF Art. 205 para educação; Lei Maria da Penha para violência de gênero</td>
              <td>Citar número de lei errado ou com informação imprecisa</td>
            </tr>
            <tr>
              <td>Dados/Estatísticas (IBGE, OMS, Ipea)</td>
              <td>C3 — Argumentação</td>
              <td>Taxa de desemprego, índice de analfabetismo, dados de suicídio</td>
              <td>Usar dados imprecisos ou desatualizados; afetar a credibilidade</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filósofos e aplicações</span>

        <h2>6c. Repertório filosófico — guia prático</h2>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Filósofo / Teórico</th>
              <th>Conceito central</th>
              <th>Como aplicar na redação</th>
              <th>Temas compatíveis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zygmunt Bauman</td>
              <td>Modernidade líquida: vínculos frágeis e descartáveis</td>
              <td>Fragilidade das relações digitais; isolamento social; saúde mental</td>
              <td>Tecnologia, saúde mental, violência, solidão</td>
            </tr>
            <tr>
              <td>Pierre Bourdieu</td>
              <td>Capital cultural: desigualdade reproduzida pela educação</td>
              <td>Crianças de famílias com maior capital cultural têm mais sucesso escolar</td>
              <td>Educação, desigualdade social, inclusão</td>
            </tr>
            <tr>
              <td>Thomas Hobbes</td>
              <td>Estado como organizador social necessário (Leviatã)</td>
              <td>Sem Estado forte, prevalece a violência e a insegurança</td>
              <td>Violência, segurança pública, papel do Estado</td>
            </tr>
            <tr>
              <td>Byung-Chul Han</td>
              <td>Sociedade do cansaço: excesso de produtividade e burnout</td>
              <td>Pressão por performance constante gera esgotamento coletivo</td>
              <td>Saúde mental, tecnologia, trabalho, redes sociais</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>

        <h2>7. Erros mais comuns</h2>

        <p>
          Muitos candidatos usam repertórios apenas para “parecer inteligente”.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Erro comum</th>
              <th>Causa</th>
              <th>Consequência para a nota</th>
              <th>Como corrigir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Citação sem explicação</td>
              <td>Pressa ou falta de domínio do conceito</td>
              <td>Reduz C3 (repertório decorativo)</td>
              <td>Sempre explique o conceito antes de conectar ao tema</td>
            </tr>
            <tr>
              <td>Repertório desconectado do tema</td>
              <td>Memorização sem contextualização</td>
              <td>Pode gerar perda em C2 (fuga parcial) e C3</td>
              <td>Organize repertórios por eixo temático antes da prova</td>
            </tr>
            <tr>
              <td>Excesso de repertórios em um parágrafo</td>
              <td>Insegurança — tentar compensar com quantidade</td>
              <td>Prejudica C4 (coesão) e C3 (profundidade)</td>
              <td>Use 1 repertório por parágrafo de desenvolvimento, bem desenvolvido</td>
            </tr>
            <tr>
              <td>Datas ou informações erradas</td>
              <td>Memorização imprecisa</td>
              <td>Compromete credibilidade em C3</td>
              <td>Se não tiver certeza do dado exato, use referência mais vaga mas correta</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-highlight">
          <h3>Evite:</h3>

          <ul>
            <li>Citações decoradas;</li>
            <li>Referências desconectadas do tema;</li>
            <li>Excesso de repertórios no mesmo parágrafo;</li>
            <li>Explicações superficiais;</li>
            <li>Uso de repertório sem análise.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica estratégica</h3>

          <p>
            Um repertório simples e bem explicado vale mais que várias
            referências superficiais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>

        <h2>8. Como construir repertório ao longo do ano</h2>

        <p>
          Repertório sociocultural é construído continuamente por meio do estudo
          e da observação crítica da sociedade.
        </p>

        <div className="lesson-highlight">
          <h3>Estratégias importantes</h3>

          <ul>
            <li>Ler notícias diariamente;</li>
            <li>Assistir documentários;</li>
            <li>Ler livros e artigos;</li>
            <li>Estudar filosofia e sociologia;</li>
            <li>Organizar repertórios por tema.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Objetivo</h3>

          <p>
            Desenvolver repertório amplo e aplicável a diferentes propostas de
            redação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>9. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>Repertório fortalece argumentação;</li>
            <li>Precisa estar ligado ao tema;</li>
            <li>Filosofia e sociologia são muito úteis;</li>
            <li>Filmes e literatura podem enriquecer o texto;</li>
            <li>Repertório decorativo prejudica a redação;</li>
            <li>Atualidades ampliam a visão crítica.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Repertório sociocultural"
          statement={
            <p>
              O repertório sociocultural serve principalmente para:
            </p>
          }
          options={[
            { letter: "a", text: "Eliminar a tese" },
            {
              letter: "b",
              text: "Fortalecer a argumentação",
              correct: true,
            },
            { letter: "c", text: "Substituir a conclusão" },
            { letter: "d", text: "Evitar análise crítica" },
          ]}
          resolution={
            <p>
              O repertório ajuda a contextualizar e aprofundar os argumentos da
              redação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Repertório produtivo"
          statement={
            <p>
              Um repertório é considerado produtivo quando:
            </p>
          }
          options={[
            { letter: "a", text: "Está desconectado do tema" },
            {
              letter: "b",
              text: "Fortalece o argumento desenvolvido",
              correct: true,
            },
            { letter: "c", text: "Aparece sem explicação" },
            { letter: "d", text: "Substitui a tese" },
          ]}
          resolution={
            <p>
              O repertório precisa dialogar diretamente com o argumento e o
              tema.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Filosofia"
          statement={
            <p>
              Um filósofo frequentemente usado em temas sobre modernidade líquida
              é:
            </p>
          }
          options={[
            { letter: "a", text: "Aristóteles" },
            {
              letter: "b",
              text: "Zygmunt Bauman",
              correct: true,
            },
            { letter: "c", text: "Newton" },
            { letter: "d", text: "Darwin" },
          ]}
          resolution={
            <p>
              Bauman é conhecido por discutir relações sociais na modernidade
              líquida.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="4. Erro comum"
          statement={
            <p>
              Um erro frequente no uso de repertório é:
            </p>
          }
          options={[
            { letter: "a", text: "Relacionar repertório ao tema" },
            {
              letter: "b",
              text: "Usar citações decoradas sem análise",
              correct: true,
            },
            { letter: "c", text: "Explicar referências utilizadas" },
            { letter: "d", text: "Contextualizar argumentos" },
          ]}
          resolution={
            <p>
              Repertórios decorativos enfraquecem a argumentação da redação.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Estratégia"
          statement={
            <p>
              Uma boa estratégia para ampliar repertório sociocultural é:
            </p>
          }
          options={[
            { letter: "a", text: "Ignorar atualidades" },
            {
              letter: "b",
              text: "Ler notícias e estudar temas sociais",
              correct: true,
            },
            { letter: "c", text: "Memorizar frases prontas" },
            { letter: "d", text: "Evitar documentários" },
          ]}
          resolution={
            <p>
              O estudo contínuo de temas sociais ajuda a construir repertório
              consistente.
            </p>
          }
        />
      </section>
    </article>
  );
}