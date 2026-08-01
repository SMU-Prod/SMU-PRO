"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 6</span>
          <h1>Desenvolvimento Argumentativo</h1>
          <p>
            Os parágrafos de desenvolvimento são onde sua redação ganha ou perde pontos em
            Competência 3. Aprenda a estrutura T-E-A, os tipos de argumento mais valorizados
            e como fazer análise crítica que vai além do óbvio.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função</span>
        <h2>1. Função do Desenvolvimento: Defender a Tese com Argumentos</h2>
        <p>
          Os dois parágrafos de desenvolvimento são o núcleo da redação. É neles que você
          <strong> prova</strong> que a tese apresentada na introdução é correta, usando
          argumentos fundamentados em evidências. Desenvolvimento fraco = C3 fraca = até
          300 pontos perdidos no total.
        </p>
        <p>
          Cada parágrafo de desenvolvimento tem uma função específica:
          <strong> Dev. 1</strong> — apresenta o argumento mais sólido, geralmente a causa
          histórica ou estrutural do problema. <strong>Dev. 2</strong> — complementa com
          consequência, perspectiva diferente ou grupo específico afetado. Juntos, os dois
          desenvolvimentos devem cobrir os aspectos centrais da tese de forma que o leitor
          seja convencido.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura T-E-A</span>
        <h2>2. Estrutura do Parágrafo: T-E-A (Tópico-Evidência-Análise)</h2>
        <p>
          A estrutura <strong>T-E-A</strong> é o padrão de ouro para parágrafos de
          desenvolvimento no ENEM. Cada letra representa uma parte obrigatória:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Função</th><th>Como escrever</th><th>Linhas aproximadas</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>T — Tópico</strong></td>
                <td>Enuncia o argumento que será desenvolvido</td>
                <td>Frase afirmativa que conecta ao tema e à tese. "No que tange a [aspecto], [argumento central]..."</td>
                <td>1–2 linhas</td>
              </tr>
              <tr>
                <td><strong>E — Evidência</strong></td>
                <td>Comprova o argumento com dado, exemplo ou citação</td>
                <td>Dado estatístico, exemplo histórico, citação de autor, comparação com outros países</td>
                <td>2–3 linhas</td>
              </tr>
              <tr>
                <td><strong>A — Análise</strong></td>
                <td>Conecta a evidência ao argumento e à tese</td>
                <td>"Esse dado/exemplo evidencia que... / demonstra que... / revela que..."</td>
                <td>2–3 linhas</td>
              </tr>
              <tr>
                <td><strong>C — Conector</strong></td>
                <td>Encerra o parágrafo e prepara o próximo</td>
                <td>"Ademais...", "Além disso...", "Esse cenário aponta para..."</td>
                <td>1 linha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento 1</span>
        <h2>3. Argumento 1: A Causa Estrutural ou Histórica</h2>
        <p>
          O Dev. 1 deve trazer o <strong>argumento mais forte</strong> da sua redação — aquele
          que melhor sustenta a tese. O argumento de causa histórica ou estrutural é o mais
          valorizado porque demonstra análise profunda do problema e conhecimento de contexto.
        </p>
        <p>
          Argumentos de causa histórica para temas comuns:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema</th><th>Causa histórica/estrutural (Dev. 1)</th></tr>
            </thead>
            <tbody>
              <tr><td>Racismo</td><td>Herança da escravidão colonial + mito da democracia racial (Gilberto Freyre)</td></tr>
              <tr><td>Violência contra a mulher</td><td>Cultura patriarcal herdada da sociedade colonial + Código Civil de 1916 que subordinava a mulher ao marido</td></tr>
              <tr><td>Desigualdade social</td><td>Concentração fundiária pós-abolição + modelo exportador que excluiu o trabalhador nacional</td></tr>
              <tr><td>Evasão escolar</td><td>Modelo educacional colonial elitista + necessidade econômica que força crianças pobres ao trabalho precoce</td></tr>
              <tr><td>Saúde mental</td><td>Psiquiatria manicomial que excluiu e estigmatizou doentes mentais durante séculos + Reforma Psiquiátrica incompleta</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento 2</span>
        <h2>4. Argumento 2: Consequência ou Perspectiva Complementar</h2>
        <p>
          O Dev. 2 deve oferecer um <strong>ângulo diferente</strong> do Dev. 1. As estratégias
          mais comuns:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Estratégia</th><th>Quando usar</th><th>Exemplo para tema "racismo"</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Consequência do problema</td>
                <td>Quando Dev. 1 explorou a causa — Dev. 2 mostra o efeito</td>
                <td>Dev. 1: causa (escravidão); Dev. 2: consequência (desigualdade econômica, encarceramento)</td>
              </tr>
              <tr>
                <td>Perspectiva diferente</td>
                <td>Econômica, cultural, psicológica, institucional</td>
                <td>Dev. 1: perspectiva cultural (racismo normalizado); Dev. 2: perspectiva institucional (racismo no judiciário)</td>
              </tr>
              <tr>
                <td>Grupo específico afetado</td>
                <td>Quando o tema afeta diferentes grupos de formas distintas</td>
                <td>Dev. 1: população negra no mercado de trabalho; Dev. 2: mulheres negras (interseccionalidade)</td>
              </tr>
              <tr>
                <td>Dimensão tecnológica/contemporânea</td>
                <td>Quando há aspecto moderno não coberto pelo Dev. 1</td>
                <td>Dev. 1: racismo histórico; Dev. 2: racismo algorítmico nas plataformas digitais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Argumento</span>
        <h2>5. Tipos de Argumento Valorizados pelo ENEM</h2>
        <p>
          Existem cinco tipos de argumento que os corretores reconhecem e valorizam. Use-os
          de forma variada ao longo dos dois desenvolvimentos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Como usar</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dado/Estatística</strong></td>
                <td>Cite fonte confiável + número específico</td>
                <td>"Segundo o IBGE (2022), 56% das pessoas em situação de rua são negras"</td>
              </tr>
              <tr>
                <td><strong>Exemplificação</strong></td>
                <td>Exemplo histórico, literário ou contemporâneo</td>
                <td>"A obra 'Quarto de Despejo', de Carolina de Jesus, documenta a exclusão racial e social das periferias brasileiras"</td>
              </tr>
              <tr>
                <td><strong>Comparação</strong></td>
                <td>Compare com outro país, época ou grupo</td>
                <td>"Ao contrário da África do Sul, que implantou reparações pós-apartheid, o Brasil nunca adotou política sistemática de reparação"</td>
              </tr>
              <tr>
                <td><strong>Autoridade/Citação</strong></td>
                <td>Pensador, filósofo, sociólogo, cientista</td>
                <td>"O sociólogo Florestan Fernandes demonstrou que a abolição da escravidão não foi acompanhada de integração social dos negros"</td>
              </tr>
              <tr>
                <td><strong>Causa/Consequência</strong></td>
                <td>Mostre relação causal entre o fator e o problema</td>
                <td>"A ausência de creches públicas obriga mães a abandonar o mercado de trabalho, perpetuando a pobreza feminina"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama T-E-A</span>
        <h2>6. Diagrama do Parágrafo Ideal</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Diagrama vertical do parágrafo T-E-A com fluxo e exemplos">
            <defs>
              <marker id="arr6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>
            {/* TÓPICO */}
            <rect x="20" y="10" width="440" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="90" y="28" fontSize="11" fontWeight="bold" fill="#1e40af">T — TÓPICO</text>
            <text x="90" y="43" fontSize="10" fill="#1d4ed8">"No que tange a [aspecto], [argumento central que sustenta a tese]..."</text>
            <text x="30" y="34" fontSize="10" fontWeight="bold" fill="#1e40af">1–2</text>
            <text x="30" y="46" fontSize="10" fontWeight="bold" fill="#1e40af">linhas</text>
            <line x1="240" y1="50" x2="240" y2="70" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr6)" />
            {/* EVIDÊNCIA */}
            <rect x="20" y="72" width="440" height="50" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="90" y="90" fontSize="11" fontWeight="bold" fill="#065f46">E — EVIDÊNCIA</text>
            <text x="90" y="106" fontSize="10" fill="#047857">"Segundo [fonte], [dado concreto] — OU — O escritor [X], em [obra], mostra que..."</text>
            <text x="90" y="118" fontSize="10" fill="#047857">"Exemplo: durante a pandemia, estudantes sem internet foram excluídos do ensino remoto"</text>
            <text x="30" y="93" fontSize="10" fontWeight="bold" fill="#065f46">2–3</text>
            <text x="30" y="105" fontSize="10" fontWeight="bold" fill="#065f46">linhas</text>
            <line x1="240" y1="122" x2="240" y2="142" stroke="#10b981" strokeWidth="2" markerEnd="url(#arr6)" />
            {/* ANÁLISE */}
            <rect x="20" y="144" width="440" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="90" y="162" fontSize="11" fontWeight="bold" fill="#92400e">A — ANÁLISE</text>
            <text x="90" y="178" fontSize="10" fill="#b45309">"Esse dado/exemplo evidencia que [conexão com o tema e a tese]..."</text>
            <text x="90" y="190" fontSize="10" fill="#b45309">"Demonstrando como [causa-efeito relacionado ao argumento central]"</text>
            <text x="30" y="165" fontSize="10" fontWeight="bold" fill="#92400e">2–3</text>
            <text x="30" y="177" fontSize="10" fontWeight="bold" fill="#92400e">linhas</text>
            <line x1="240" y1="194" x2="240" y2="214" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr6)" />
            {/* CONECTOR */}
            <rect x="20" y="216" width="440" height="20" rx="4" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="240" y="230" textAnchor="middle" fontSize="10" fill="#6d28d9">C — CONECTOR: "Ademais..." / "Além disso..." / "Outrossim..."</text>
          </svg>
          <figcaption>Estrutura T-E-A: cada elemento é obrigatório para desenvolvimento nota 200 em C3</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Repertório</span>
        <h2>7. Como Usar Repertório: Filosofia, História, Literatura, Ciência</h2>
        <p>
          Repertório sociocultural é qualquer referência externa que você usa para embasar
          seu argumento. O ENEM valoriza repertório <strong>produtivo</strong> — aquele que
          é pertinente ao tema, contextualizado e usado com precisão. Repertório decorativo
          (jogado sem conexão com o argumento) não ajuda e pode confundir o corretor.
        </p>
        <div className="lesson-highlight">
          <h3>Banco de repertório por área temática</h3>
          <p>
            <strong>Racismo e desigualdade:</strong> Florestan Fernandes (integração pós-abolição),
            Abdias Nascimento (genocídio do povo negro), Silvio Almeida (racismo estrutural),
            Carolina de Jesus (Quarto de Despejo), Atlas da Violência (IPEA)<br /><br />
            <strong>Gênero e feminismo:</strong> Simone de Beauvoir (O Segundo Sexo),
            bell hooks (feminismo interseccional), dados do IBGE sobre jornada dupla,
            Lei Maria da Penha, Declaração Universal dos Direitos Humanos (Art. 2)<br /><br />
            <strong>Saúde mental:</strong> Michel Foucault (História da Loucura), OMS,
            Reforma Psiquiátrica Lei 10.216/2001, dados do DataSUS<br /><br />
            <strong>Educação:</strong> Paulo Freire (Pedagogia do Oprimido),
            INEP/SAEB/PISA, Lei de Diretrizes e Bases, ECA (Art. 53)<br /><br />
            <strong>Tecnologia:</strong> Zygmunt Bauman (modernidade líquida),
            Shoshana Zuboff (capitalismo de vigilância), LGPD, dados da TIC Domicílios
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros Comuns</span>
        <h2>8. Erros no Desenvolvimento que Prejudicam a C3</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Erro</th><th>Impacto em C3</th><th>Como corrigir</th></tr>
            </thead>
            <tbody>
              <tr><td>Argumento sem análise (T + E, sem A)</td><td>Perda de nível (160 → 120)</td><td>Adicionar frase de análise: "Esse dado revela que..."</td></tr>
              <tr><td>Parágrafo muito curto (3–4 linhas)</td><td>Percepção de desenvolvimento insuficiente</td><td>Desenvolver cada elemento com mais detalhes — mínimo 7 linhas</td></tr>
              <tr><td>Repetição do mesmo argumento no Dev. 2</td><td>Falta de progressão — C3 cai para 80</td><td>Mudar perspectiva: causa → consequência ou novo grupo afetado</td></tr>
              <tr><td>Evidência sem fonte ("é sabido que...")</td><td>Argumento não comprovado — perde credibilidade</td><td>Citar fonte específica: "Segundo o IBGE..."</td></tr>
              <tr><td>Tópico que não conecta à tese</td><td>Incoerência entre tese e desenvolvimento</td><td>Verificar: "este argumento sustenta minha tese?" antes de escrever</td></tr>
              <tr><td>Argumento no campo pessoal ("eu passei por isso")</td><td>Quebra do registro formal exigido</td><td>Generalizar: "jovens em situação de vulnerabilidade..." em vez de "eu"</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Análise Crítica</span>
        <h2>9. Como Fazer Análise Crítica: Além do Óbvio</h2>
        <p>
          A análise é o elemento que mais diferencia uma redação nota 120 de uma nota 200 em
          C3. Análise crítica não é apenas repetir o que a evidência diz — é conectar a
          evidência ao problema mais amplo, às causas estruturais e às consequências sociais.
        </p>
        <div className="lesson-highlight">
          <h3>Da análise superficial à análise crítica</h3>
          <p>
            <strong>Análise superficial (C3 = 120):</strong><br />
            "Segundo o IBGE, 56% das pessoas em situação de rua são negras. Isso mostra que
            o racismo é um problema sério."<br /><br />
            <strong>Análise crítica (C3 = 200):</strong><br />
            "Segundo o IBGE, 56% das pessoas em situação de rua são negras. Esse dado não é
            coincidência — é consequência direta de um processo histórico de expropriação: a
            abolição da escravidão não foi acompanhada de reforma agrária nem de políticas de
            integração social, condenando os ex-escravizados à marginalidade urbana que, gerações
            depois, ainda se manifesta na sobre-representação negra entre os mais vulneráveis.
            Essa realidade demonstra que o racismo não é apenas um problema de atitudes
            individuais, mas uma estrutura que se reproduz através das instituições e das
            políticas públicas deficitárias."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conectivos</span>
        <h2>10. Conectivos de Desenvolvimento: Tabela Completa</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Função</th><th>Conectivos</th><th>Exemplo de uso</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Adição</strong></td><td>Ademais, Além disso, Outrossim, Somado a isso, Acrescenta-se</td><td>"Ademais, a falta de creches públicas obriga mães a abandonar o mercado de trabalho..."</td></tr>
              <tr><td><strong>Causa</strong></td><td>Pois, porque, visto que, uma vez que, já que, dado que</td><td>"...uma vez que a ausência de políticas de permanência não retém os estudantes em situação de vulnerabilidade"</td></tr>
              <tr><td><strong>Consequência</strong></td><td>Logo, portanto, assim, por isso, consequentemente, destarte</td><td>"...logo, a exclusão digital perpetua o ciclo de pobreza nas periferias"</td></tr>
              <tr><td><strong>Exemplificação</strong></td><td>Por exemplo, como, tal como, a exemplo de</td><td>"...a exemplo da pandemia de Covid-19, que expôs as consequências da exclusão digital"</td></tr>
              <tr><td><strong>Contraste</strong></td><td>Entretanto, contudo, todavia, porém, no entanto, embora</td><td>"Entretanto, a legislação existente não é suficiente sem estrutura de fiscalização"</td></tr>
              <tr><td><strong>Explicação</strong></td><td>Ou seja, isto é, em outras palavras, a saber</td><td>"Ou seja, o problema não é técnico, mas estrutural e político"</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo Anotado</span>
        <h2>11. Parágrafo Completo Anotado: Saúde Mental de Jovens</h2>
        <div className="lesson-highlight">
          <h3>Dev. 1 completo — estrutura T-E-A anotada</h3>
          <p>
            <em>[TÓPICO]</em> "A crise de saúde mental entre os jovens brasileiros tem raízes
            profundas no modelo educacional altamente competitivo e na ausência de espaços de
            escuta e acolhimento nas escolas. <em>[EVIDÊNCIA]</em> Segundo pesquisa do Instituto
            Ayrton Senna publicada em 2022, 7 em cada 10 estudantes do ensino médio relatam
            sentimentos frequentes de angústia, ansiedade ou tristeza, e apenas 30% das escolas
            públicas contam com profissionais de apoio psicossocial. <em>[ANÁLISE]</em> Esses
            dados evidenciam que a escola, em vez de ser espaço de desenvolvimento integral,
            tornou-se fonte adicional de sofrimento para jovens já vulnerabilizados por condições
            socioeconômicas precárias. O psicólogo Winnicott já alertava que o desenvolvimento
            saudável requer ambiente seguro e empático — exatamente o que o sistema educacional
            atual, pressionado por metas e rankings, falha em oferecer. <em>[CONECTOR]</em>
            Além dessa dimensão educacional, há fatores culturais que agravam o problema."
          </p>
        </div>
        <p>
          Observe como o parágrafo conecta cada elemento: o tópico enuncia o argumento (modelo
          educacional competitivo), a evidência comprova com dados precisos (Instituto Ayrton
          Senna, 70% com angústia), e a análise vai além do dado — conecta ao problema estrutural
          e traz repertório filosófico (Winnicott) para aprofundar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📐</span>
            <h3>Estrutura T-E-A</h3>
            <p>Tópico → Evidência → Análise → Conector — obrigatório em cada desenvolvimento</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Dev. 1 = causa forte</h3>
            <p>Argumento estrutural ou histórico — o mais sólido vem primeiro</p>
          </div>
          <div className="math-card">
            <span>🔀</span>
            <h3>Dev. 2 = novo ângulo</h3>
            <p>Consequência, perspectiva diferente ou grupo específico afetado</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>5 tipos de argumento</h3>
            <p>Dado, Exemplificação, Comparação, Autoridade, Causa/Consequência</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Análise crítica</h3>
            <p>Ir além do óbvio — conectar evidência à estrutura social e à tese</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Conectivos variados</h3>
            <p>Ademais, Outrossim, uma vez que, logo — mostre domínio de C4</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Elemento ausente no parágrafo"
          statement={
            <p>
              Leia o trecho: <em>"A violência doméstica prejudica as mulheres. Segundo dados do
              DataSenado, 29% das brasileiras já sofreram violência. O governo deve agir."</em>
              Qual elemento da estrutura T-E-A está ausente?
            </p>
          }
          options={[
            { letter: "a", text: "A evidência — o dado do DataSenado não é fonte confiável o suficiente." },
            { letter: "b", text: "O tópico — a primeira frase não enuncia argumento específico sobre a causa." },
            { letter: "c", text: "A análise — não há frase que conecte a evidência ao argumento e à tese do texto.", correct: true },
            { letter: "d", text: "O conector — não há conectivo de transição para o próximo parágrafo." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. O trecho tem tópico ("violência
              doméstica prejudica as mulheres"), evidência (dado do DataSenado) e um esboço
              de proposta de intervenção ("o governo deve agir"). O que falta é a
              <strong> análise</strong> — a frase que conecta a evidência ao argumento central
              e à tese. Algo como: "Esse dado evidencia que a violência doméstica no Brasil
              não é fenômeno isolado, mas manifestação sistemática de uma cultura patriarcal
              que normaliza o controle masculino sobre o corpo feminino." Sem análise, o
              parágrafo não tem profundidade argumentativa — C3 = 80 a 120.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificar tipo de argumento"
          statement={
            <p>
              No trecho: <em>"Segundo a OMS, 1 em cada 3 mulheres no mundo sofre violência
              física ou sexual ao longo da vida, sendo que o agressor é, na maioria dos casos,
              um parceiro íntimo."</em> Qual tipo de argumento é utilizado?
            </p>
          }
          options={[
            { letter: "a", text: "Argumento de comparação — compara a situação da mulher em diferentes países." },
            { letter: "b", text: "Argumento de causa/consequência — explica por que a violência ocorre." },
            { letter: "c", text: "Argumento de autoridade e dado estatístico — cita fonte (OMS) com dado quantitativo.", correct: true },
            { letter: "d", text: "Argumento por exemplificação — apresenta exemplo histórico específico." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. O trecho combina dois tipos
              complementares: <em>autoridade</em> (a OMS — Organização Mundial da Saúde —
              é fonte de alta credibilidade internacional) e <em>dado estatístico</em> (1 em
              cada 3 mulheres). Essa combinação é especialmente eficaz porque confere ao
              argumento tanto credibilidade institucional quanto precisão quantitativa. Na
              escala de eficácia para C3, argumentos com dado + fonte tendem a receber
              valorização máxima quando acompanhados de análise.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escrever parágrafo T-E-A completo"
          statement={
            <p>
              Para o tema <em>"Impacto das redes sociais na saúde mental de jovens"</em>,
              qual alternativa apresenta o parágrafo de desenvolvimento mais completo e
              bem estruturado em T-E-A?
            </p>
          }
          options={[
            { letter: "a", text: "'As redes sociais fazem mal à saúde mental. Muitos jovens passam horas no celular. As empresas de tecnologia deveriam ser responsabilizadas por isso.'" },
            { letter: "b", text: "'As redes sociais podem ser positivas e negativas. Por um lado, conectam pessoas; por outro, causam ansiedade. O governo deve criar leis.'" },
            { letter: "c", text: "'A arquitetura de engajamento das plataformas digitais, baseada em loops de recompensa variável, constitui mecanismo comprovado de dependência psicológica entre jovens. Segundo pesquisa da Universidade de Pittsburgh, adolescentes que usam mais de 3 horas diárias de redes sociais têm 14% mais chance de desenvolver sintomas depressivos. Esse dado revela que o problema não é o uso em si, mas o design intencional das plataformas para maximizar o tempo de tela à custa do bem-estar dos usuários — fenômeno que Shoshana Zuboff nomeia \"capitalismo de vigilância\". Ademais, as consequências psicológicas se concentram desproporcionalmente entre jovens de baixa renda.'", correct: true },
            { letter: "d", text: "'Eu mesmo já passei por episódios de ansiedade causados pelo uso excessivo do Instagram. Isso mostra que as redes sociais são prejudiciais e precisam ser regulamentadas pelo governo federal.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. O parágrafo tem estrutura T-E-A
              completa: <strong>Tópico</strong> (arquitetura de engajamento como mecanismo
              de dependência), <strong>Evidência</strong> (pesquisa de Pittsburgh com dado
              quantitativo: 14% mais chance de depressão), <strong>Análise</strong> (problema
              é o design intencional, não o uso em si — com repertório de Shoshana Zuboff) e
              <strong>Conector</strong> ("Ademais, as consequências..."). Alternativa (a) é
              rasa; (b) é indefinida; (d) usa linguagem pessoal informal.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM 2023 — melhor tipo de argumento para causa estrutural"
          statement={
            <p>
              Para o tema ENEM 2023 <em>"Desafios para o enfrentamento da invisibilidade do
              trabalho de cuidado realizado pela mulher no Brasil"</em> e a tese de que
              "essa invisibilidade decorre da herança patriarcal", qual tipo de argumento
              sustenta melhor o primeiro desenvolvimento?
            </p>
          }
          options={[
            { letter: "a", text: "Argumento de comparação com países nórdicos que pagam pelo trabalho doméstico.", correct: false },
            { letter: "b", text: "Argumento de causa histórica: o pensamento patriarcal herdado do período colonial, que designou o espaço doméstico como esfera feminina natural e despolitizou o trabalho de cuidado como 'amor' e não como trabalho.", correct: true },
            { letter: "c", text: "Argumento de dado estatístico: as mulheres ganham 22% menos que os homens no mercado formal." },
            { letter: "d", text: "Argumento por exemplificação: a personagem Macabéa, de Clarice Lispector, representa a mulher invisível na sociedade brasileira." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. O argumento de causa histórica
              (herança patriarcal colonial) é o mais adequado para o Dev. 1 por duas razões:
              (1) sustenta diretamente a tese ("invisibilidade decorre da herança patriarcal"),
              cumprindo a exigência de coerência entre tese e argumento; (2) demonstra análise
              estrutural profunda — a naturalização do cuidado como "amor feminino" e não
              como trabalho é uma construção patriarcal histórica, não um fato natural. A
              comparação com países nórdicos (a) é útil para Dev. 2; o dado salarial (c)
              trata de outro aspecto da desigualdade de gênero; Macabéa (d) é exemplificação
              literária que pode reforçar, mas não sustenta sozinha o argumento de causa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Avaliar parágrafo para C3 — estimativa de nota"
          statement={
            <p>
              Avalie o parágrafo: <em>"A educação é importante. Muitas crianças não têm acesso.
              O governo deve investir mais. Isso resolveria o problema."</em> Qual seria a
              estimativa de nota em C3 e qual é a justificativa?
            </p>
          }
          options={[
            { letter: "a", text: "160 pontos — o parágrafo tem todos os elementos, apenas de forma concisa." },
            { letter: "b", text: "120 pontos — o parágrafo está no nível mediano; tem tópico e conclusão, mas falta profundidade." },
            { letter: "c", text: "40–80 pontos — o parágrafo tem tópico vago, sem evidência verificável, sem análise crítica e com PI antecipada na última frase.", correct: true },
            { letter: "d", text: "0 pontos — o parágrafo é tão fraco que configura fuga ao tipo textual." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. O parágrafo receberia 40 a 80 pontos
              em C3 por acumular múltiplos problemas: (1) <strong>tópico vago</strong> —
              "a educação é importante" não enuncia argumento específico; (2)
              <strong>ausência de evidência</strong> — "muitas crianças não têm acesso" é
              afirmação genérica sem dado ou fonte; (3) <strong>ausência de análise</strong>
              — não há frase conectando o problema à causa ou à tese; (4) <strong>PI
              antecipada</strong> — "o governo deve investir" é conclusão, não desenvolvimento.
              O parágrafo tem 4 frases curtas em vez das 7–9 linhas esperadas, o que também
              sinaliza desenvolvimento insuficiente. Para C3 = 200, seria necessário incluir
              dado específico (INEP, IBGE), análise da causa estrutural e conexão com a tese.
            </p>
          }
        />
      </section>
    </article>
  );
}
