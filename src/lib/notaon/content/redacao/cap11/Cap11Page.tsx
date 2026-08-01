"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 11</span>
          <h1>Repertório Sociocultural</h1>
          <p>
            Domine a arte de usar conhecimentos filosóficos, históricos, literários e
            científicos de forma integrada ao argumento — o diferencial que separa as
            redações nota 800 das nota 1000 no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O que é Repertório Sociocultural?</h2>
        <p>
          Repertório sociocultural é o conjunto de conhecimentos acumulados pelo
          candidato ao longo da vida — leituras, estudos, filmes, debates, notícias —
          que podem ser mobilizados produtivamente para enriquecer a argumentação da
          redação. No ENEM, o conceito aparece diretamente na <strong>Competência 2</strong>,
          que avalia a "compreensão da proposta de redação e aplicação de conceitos das
          várias áreas do conhecimento para desenvolver o tema dentro dos limites
          estruturais do texto dissertativo-argumentativo".
        </p>
        <div className="lesson-highlight">
          <h3>A palavra-chave é "produtivo"</h3>
          <p>
            O manual do ENEM não pede apenas que o candidato cite um autor ou dado: ele
            exige que o repertório seja <em>produtivo</em>, ou seja, que seja integrado ao
            argumento de forma clara e funcional. Citar Rousseau sem explicar a ideia
            dele e sem conectá-la ao tema não vale nada — e pode até prejudicar a nota ao
            revelar uso superficial ou incorreto do conceito.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Mapa mental de repertórios socioculturais">
            <rect width="480" height="220" fill="#f8fafc" rx="12" />
            {/* Center */}
            <ellipse cx="240" cy="110" rx="54" ry="28" fill="#3b82f6" />
            <text x="240" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">REPERTÓRIO</text>
            <text x="240" y="120" textAnchor="middle" fill="white" fontSize="10">SOCIOCULTURAL</text>
            {/* Filosófico */}
            <line x1="190" y1="92" x2="108" y2="48" stroke="#6366f1" strokeWidth="2"/>
            <ellipse cx="80" cy="40" rx="44" ry="20" fill="#6366f1" />
            <text x="80" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Filosófico</text>
            <text x="80" y="49" textAnchor="middle" fill="white" fontSize="8">Platão, Rousseau, Marx</text>
            {/* Histórico */}
            <line x1="208" y1="83" x2="150" y2="28" stroke="#10b981" strokeWidth="2"/>
            <ellipse cx="188" cy="22" rx="46" ry="18" fill="#10b981" />
            <text x="188" y="19" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Histórico</text>
            <text x="188" y="31" textAnchor="middle" fill="white" fontSize="8">Iluminismo, Ditadura</text>
            {/* Científico */}
            <line x1="270" y1="84" x2="330" y2="30" stroke="#f59e0b" strokeWidth="2"/>
            <ellipse cx="366" cy="24" rx="50" ry="18" fill="#f59e0b" />
            <text x="366" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Científico</text>
            <text x="366" y="33" textAnchor="middle" fill="white" fontSize="8">IBGE, OMS, IPEA</text>
            {/* Cultural */}
            <line x1="290" y1="92" x2="390" y2="55" stroke="#ef4444" strokeWidth="2"/>
            <ellipse cx="418" cy="50" rx="46" ry="18" fill="#ef4444" />
            <text x="418" y="47" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Cultural</text>
            <text x="418" y="59" textAnchor="middle" fill="white" fontSize="8">Cinema, Música, Arte</text>
            {/* Literário */}
            <line x1="210" y1="136" x2="100" y2="178" stroke="#8b5cf6" strokeWidth="2"/>
            <ellipse cx="68" cy="184" rx="52" ry="20" fill="#8b5cf6" />
            <text x="68" y="181" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Literário</text>
            <text x="68" y="193" textAnchor="middle" fill="white" fontSize="8">Dom Casmurro, Vidas Secas</text>
            {/* Dados */}
            <line x1="270" y1="136" x2="360" y2="178" stroke="#06b6d4" strokeWidth="2"/>
            <ellipse cx="400" cy="186" rx="60" ry="20" fill="#06b6d4" />
            <text x="400" y="183" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Dados/Estatísticas</text>
            <text x="400" y="195" textAnchor="middle" fill="white" fontSize="8">Índices, percentuais, pesquisas</text>
          </svg>
          <figcaption>Os seis grandes grupos de repertório sociocultural aceitos no ENEM, com exemplos de cada.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências</span>
        <h2>2. Por que o Repertório Vale Tanto?</h2>
        <p>
          A Competência 2 vale até 200 pontos e avalia diretamente a capacidade de o
          candidato <em>compreender o tema</em> e <em>aplicar conceitos de diversas áreas do
          conhecimento</em>. Repertório produtivo é justamente isso: usar um conceito
          filosófico, um dado científico ou um evento histórico para iluminar o problema
          discutido. Além disso, um bom repertório também eleva a Competência 3, pois
          organiza e sustenta melhor os argumentos causais e consequenciais.
        </p>
        <div className="lesson-highlight">
          <h3>Regra de ouro: conectar ao argumento</h3>
          <p>
            O repertório não vive sozinho. Ele precisa aparecer <em>dentro</em> de um
            argumento, servindo como fundamento, comprovação ou ilustração. A estrutura
            ideal é: <strong>Argumento → Repertório → Análise → Conexão com a tese</strong>.
            Nunca o inverso — não inicie um parágrafo jogando uma citação no ar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>
        <h2>3. Os Seis Tipos de Repertório e Como Usá-los</h2>
        <p>
          Conhecer os diferentes tipos de repertório e suas funções argumentativas é o
          primeiro passo para usá-los com naturalidade. Veja cada categoria:
        </p>
        <ul>
          <li><strong>Filosófico:</strong> conceitos de pensadores como Platão, Rousseau, Locke, Marx, Hannah Arendt — ideais para fundamentar posicionamentos teóricos.</li>
          <li><strong>Histórico:</strong> eventos como Abolição da Escravatura, Ditadura Militar, Revolução Industrial — úteis para mostrar causa e contexto histórico.</li>
          <li><strong>Literário:</strong> personagens e situações de obras como <em>Dom Casmurro</em>, <em>Vidas Secas</em>, <em>A Hora da Estrela</em> — ideais para ilustrar condições humanas.</li>
          <li><strong>Científico:</strong> dados do IBGE, OMS, IPEA, pesquisas — conferem objetividade e credibilidade ao argumento.</li>
          <li><strong>Artístico/Cultural:</strong> filmes, músicas, obras de arte, festivais — humanizam o texto e demonstram repertório amplo.</li>
          <li><strong>Dados/Estatísticas:</strong> percentuais aproximados, índices sociais — comprovam a dimensão do problema sem footnote.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Integração</span>
        <h2>4. Como Usar Repertório SEM Parecer Forçado</h2>
        <p>
          O maior erro dos candidatos é decorar frases prontas e inserir citações de forma
          abrupta, sem transição natural. O repertório precisa nascer do argumento, não
          ser colado sobre ele. Observe os dois modelos abaixo:
        </p>
        <div className="lesson-highlight">
          <h3>Modelo ERRADO — repertório forçado</h3>
          <p>
            "A desigualdade social é um problema grave. Rousseau escreveu o Contrato Social.
            O Brasil precisa de políticas públicas."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Modelo CORRETO — repertório integrado</h3>
          <p>
            "A desigualdade social no Brasil perpetua a exclusão de milhões de cidadãos,
            negando-lhes o acesso a direitos básicos. Conforme sustentou Jean-Jacques
            Rousseau em <em>Do Contrato Social</em>, o Estado existe para garantir a vontade
            geral e não os interesses de minorias privilegiadas. Ao falhar nessa função,
            o Estado brasileiro aprofunda a ruptura do pacto social que deveria proteger
            os mais vulneráveis."
          </p>
        </div>
        <p>
          No segundo modelo, o repertório nasce naturalmente do argumento, explica a
          ideia central do filósofo com precisão e, em seguida, conecta ao problema
          discutido. Esse é o padrão das redações nota 1000.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filosofia</span>
        <h2>5. Filósofos Mais Usados no ENEM</h2>
        <p>
          Seis filósofos concentram a grande maioria das citações em redações nota alta
          do ENEM. Memorize a ideia central de cada um e, principalmente, saiba em quais
          temas cada um pode ser mobilizado:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Conceito central</th>
                <th>Temas compatíveis no ENEM</th>
                <th>Frase-modelo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platão</td>
                <td>Alegoria da Caverna — ignorância e busca pelo conhecimento</td>
                <td>Educação, desinformação, manipulação</td>
                <td>"Segundo Platão, a ignorância acorrenta o ser humano às sombras da caverna..."</td>
              </tr>
              <tr>
                <td>Rousseau</td>
                <td>Contrato Social — Estado deve servir à vontade geral</td>
                <td>Papel do Estado, democracia, exclusão social</td>
                <td>"Conforme defende Rousseau, o pacto social exige que o Estado proteja os mais vulneráveis..."</td>
              </tr>
              <tr>
                <td>Marx</td>
                <td>Alienação e mais-valia — exploração do trabalhador</td>
                <td>Trabalho, desigualdade, capitalismo</td>
                <td>"À luz do pensamento de Marx, a alienação do trabalhador perpetua a concentração de renda..."</td>
              </tr>
              <tr>
                <td>Locke</td>
                <td>Direitos naturais — vida, liberdade e propriedade</td>
                <td>Liberdade, democracia, direitos civis</td>
                <td>"Como preconizava John Locke, os direitos naturais são inalienáveis e precedem qualquer Estado..."</td>
              </tr>
              <tr>
                <td>Hannah Arendt</td>
                <td>Banalidade do mal — cumplicidade silenciosa com injustiças</td>
                <td>Violência, autoritarismo, indiferença social</td>
                <td>"Na perspectiva de Hannah Arendt, a omissão diante da crueldade torna-se cumplicidade..."</td>
              </tr>
              <tr>
                <td>Aristóteles</td>
                <td>Ser humano como animal político — vida em comunidade</td>
                <td>Cidadania, bem comum, participação política</td>
                <td>"Aristóteles já reconhecia que o ser humano é, por natureza, um animal político..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>6. Repertório Histórico: Causa, Contexto e Conexão</h2>
        <p>
          Eventos históricos são excelentes repertórios porque ilustram como problemas
          que parecem contemporâneos têm raízes profundas. A estrutura ideal ao usar
          história é: <strong>nomear o evento → explicar o impacto histórico → conectar ao
          problema atual</strong>. Exemplos de conexões poderosas:
        </p>
        <ul>
          <li><strong>Revolução Industrial (século XIX):</strong> origem da desigualdade urbana e do trabalho assalariado — aplicável a temas sobre trabalho, capitalismo e direitos trabalhistas.</li>
          <li><strong>Iluminismo (século XVIII):</strong> fundamento dos direitos universais e da separação Estado-Igreja — aplicável a democracia, liberdade religiosa, educação.</li>
          <li><strong>Abolição no Brasil (1888):</strong> escravidão formal acabou, mas desigualdade estrutural persistiu — aplicável a racismo, reparação histórica, exclusão.</li>
          <li><strong>Ditadura Militar (1964–1985):</strong> censura, tortura e supressão de direitos — aplicável a liberdade de imprensa, democracia, violência estatal.</li>
          <li><strong>Constituição Federal de 1988:</strong> marco dos direitos fundamentais no Brasil — aplicável a cidadania, saúde, educação, igualdade.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Cuidado com datas</h3>
          <p>
            Nunca invente datas. Se não tiver certeza, use formulações seguras como
            "no século XIX", "nas décadas de 1960 e 1970" ou "após a Segunda Guerra Mundial".
            Uma data errada pode questionar a credibilidade de todo o argumento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ciência e Dados</span>
        <h2>7. Repertório Científico: Dados que Convencem</h2>
        <p>
          Dados estatísticos e referências a pesquisas científicas são repertórios de
          alta credibilidade, pois conferem objetividade ao argumento. Não é necessário
          memorizar percentuais exatos: o ENEM aceita aproximações razoáveis.
        </p>
        <div className="lesson-highlight">
          <h3>Fórmulas seguras para citar dados</h3>
          <p>
            "Segundo dados do IBGE, cerca de X% da população brasileira..." |
            "De acordo com a Organização Mundial da Saúde..." |
            "Pesquisa do IPEA aponta que mais da metade dos domicílios..." |
            "O Atlas da Violência revela que..." |
            "O índice de Gini demonstra que o Brasil figura entre..."
          </p>
        </div>
        <p>
          Fontes confiáveis para memorizar: <strong>IBGE</strong> (dados demográficos e
          socioeconômicos), <strong>OMS</strong> (saúde global), <strong>IPEA</strong>
          (desigualdade e políticas sociais), <strong>UNICEF</strong> (infância e educação),
          <strong>INEP</strong> (educação brasileira), <strong>Atlas da Violência</strong>
          (segurança pública).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Literatura</span>
        <h2>8. Repertório Literário: Personagens e Situações</h2>
        <p>
          A literatura permite usar personagens e situações ficcionais para ilustrar
          condições humanas reais. A técnica mais eficaz não é resumir o livro, mas
          extrair um elemento específico que dialogue com o tema:
        </p>
        <ul>
          <li><strong>Dom Casmurro (Machado de Assis):</strong> narrador não confiável, ciúme, manipulação — aplicável a temas de gênero, narrativa midiática, verdade.</li>
          <li><strong>Capitães da Areia (Jorge Amado):</strong> meninos em situação de rua na Salvador do século XX — aplicável a trabalho infantil, exclusão social, abandono estatal.</li>
          <li><strong>A Hora da Estrela (Clarice Lispector):</strong> Macabéa, migrante nordestina invisível — aplicável a invisibilidade social, migração, desigualdade de gênero.</li>
          <li><strong>Vidas Secas (Graciliano Ramos):</strong> seca, migração forçada, desumanização — aplicável a meio ambiente, desigualdade regional, direito à moradia.</li>
          <li><strong>Grande Sertão: Veredas (Guimarães Rosa):</strong> identidade, violência e dilema moral — aplicável a violência, ética, religiosidade.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Armadilha</span>
        <h2>9. O Erro Fatal: Citação Errada ou Atribuída ao Filósofo Errado</h2>
        <p>
          Atribuir uma frase ou ideia ao filósofo errado é um dos erros mais graves que
          um candidato pode cometer. O corretor do ENEM é especialista e reconhece o
          equívoco imediatamente. Esse erro prejudica tanto a Competência 1 (demonstra
          uso indevido do conhecimento) quanto a Competência 2 (mostra compreensão
          equivocada do tema).
        </p>
        <div className="lesson-highlight">
          <h3>Erros clássicos que você deve evitar</h3>
          <p>
            "A imaginação é mais importante que o conhecimento" não é de Rousseau — é de
            Einstein. "O homem é o lobo do homem" é de Hobbes, não de Marx. "A liberdade
            é consciência da necessidade" é de Hegel, não de Kant. Quando tiver dúvida,
            use: "Conforme sustenta a tradição filosófica iluminista..." ou apenas descreva
            a ideia sem atribuir autoria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela estratégica</span>
        <h2>10. 10 Temas ENEM × 3 Repertórios Cada</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ENEM</th>
                <th>Repertório 1 (Filosófico/Sociológico)</th>
                <th>Repertório 2 (Histórico/Literário)</th>
                <th>Repertório 3 (Científico/Dados)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Violência contra a mulher</td>
                <td>Hannah Arendt — banalidade do mal</td>
                <td>Lei Maria da Penha (2006)</td>
                <td>IPEA — 1 mulher morta a cada 6h no Brasil</td>
              </tr>
              <tr>
                <td>Desigualdade social</td>
                <td>Marx — alienação e concentração de renda</td>
                <td>Abolição incompleta de 1888</td>
                <td>Índice de Gini — Brasil entre os mais desiguais</td>
              </tr>
              <tr>
                <td>Educação</td>
                <td>Platão — Alegoria da Caverna</td>
                <td>Iluminismo e direito universal à instrução</td>
                <td>INEP — taxa de analfabetismo funcional no Brasil</td>
              </tr>
              <tr>
                <td>Meio ambiente</td>
                <td>Hans Jonas — princípio da responsabilidade</td>
                <td>Protocolo de Kyoto / Acordo de Paris</td>
                <td>IPCC — aquecimento de 1,5°C até 2040</td>
              </tr>
              <tr>
                <td>Saúde mental</td>
                <td>Foucault — biopolítica e controle dos corpos</td>
                <td>Reforma psiquiátrica brasileira (2001)</td>
                <td>OMS — depressão, 1ª causa de incapacidade global</td>
              </tr>
              <tr>
                <td>Fake news</td>
                <td>Platão — doxa (opinião) vs episteme (verdade)</td>
                <td>Propaganda nazista — manipulação das massas</td>
                <td>Reuters Institute — 62% confiam menos em notícias</td>
              </tr>
              <tr>
                <td>Trabalho infantil</td>
                <td>Rousseau — infância como etapa sagrada</td>
                <td>Capitães da Areia — Jorge Amado</td>
                <td>UNICEF — 160 milhões de crianças em trabalho infantil</td>
              </tr>
              <tr>
                <td>Racismo</td>
                <td>Frantz Fanon — colonialismo e construção do outro</td>
                <td>Escravidão no Brasil (1500–1888)</td>
                <td>IBGE — negros representam 70% dos mais pobres</td>
              </tr>
              <tr>
                <td>Tecnologia e privacidade</td>
                <td>Foucault — panoptismo e vigilância</td>
                <td>George Orwell — 1984 (distopia do controle)</td>
                <td>LGPD (2020) — lei de proteção de dados no Brasil</td>
              </tr>
              <tr>
                <td>Inclusão da pessoa com deficiência</td>
                <td>Aristóteles — participação plena na polis</td>
                <td>Convenção da ONU sobre Deficiência (2006)</td>
                <td>IBGE — 24% dos brasileiros têm alguma deficiência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Repertório Sociocultural</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✍️</span>
            <h3>Integre, não cole</h3>
            <p>O repertório nasce do argumento; não abre parágrafos com citações soltas.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Seis tipos válidos</h3>
            <p>Filosófico, histórico, literário, científico, artístico e dados/estatísticas.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Filósofos com precisão</h3>
            <p>Conheça a ideia central de cada pensador antes de usá-lo. Erro de atribuição penaliza C1 e C2.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Dados aproximados são aceitos</h3>
            <p>"Cerca de X%", "mais da metade", "segundo dados do IBGE" — sem footnote necessário.</p>
          </div>
          <div className="math-card">
            <span>📖</span>
            <h3>Literatura: extraia o essencial</h3>
            <p>Use personagens e situações específicas — não resuma o livro inteiro.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Nunca invente</h3>
            <p>Dado, data ou citação inventados são piores que a ausência de repertório.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Conceito de repertório produtivo"
          statement={
            <p>
              No ENEM, o repertório sociocultural é considerado "produtivo" quando:
            </p>
          }
          options={[
            { letter: "a", text: "O candidato cita o maior número possível de filósofos no mesmo parágrafo." },
            { letter: "b", text: "A referência cultural é integrada ao argumento e conectada explicitamente ao tema.", correct: true },
            { letter: "c", text: "O candidato memoriza frases célebres e as reproduz fielmente na redação." },
            { letter: "d", text: "O repertório aparece apenas na proposta de intervenção da conclusão." },
          ]}
          resolution={
            <p>
              A Competência 2 exige que o repertório seja <em>produtivo</em>, ou seja, que
              esteja integrado ao argumento, explicado com precisão e conectado ao tema.
              Citar filósofos em série sem explicação é o oposto do que o ENEM valoriza.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Filósofo e tema compatível"
          statement={
            <p>
              Um candidato quer escrever sobre <strong>trabalho infantil</strong> e deseja usar
              repertório filosófico. Qual das opções abaixo apresenta o uso mais adequado?
            </p>
          }
          options={[
            { letter: "a", text: "Marx — alienação do trabalhador adulto no sistema capitalista, sem conexão com a criança.", correct: false },
            { letter: "b", text: "Aristóteles — o ser humano como animal político que deve participar ativamente da polis.", correct: false },
            { letter: "c", text: "Rousseau — a infância como etapa sagrada do desenvolvimento humano que deve ser protegida pelo Estado.", correct: true },
            { letter: "d", text: "Platão — a Alegoria da Caverna e o papel do filósofo como educador da sociedade.", correct: false },
          ]}
          resolution={
            <p>
              Rousseau, especialmente em <em>Emílio ou Da Educação</em>, argumentou que a
              infância é uma fase única de desenvolvimento que não deve ser corrompida pelo
              mundo adulto. Esse conceito se conecta diretamente ao tema trabalho infantil,
              que priva a criança de uma infância plena. As demais opções podem ser
              usadas, mas demandam maior esforço de conexão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Erro de atribuição"
          statement={
            <p>
              Em uma redação sobre <strong>desigualdade social</strong>, um candidato escreveu:
              "Como afirmou Jean-Jacques Rousseau, 'o homem é o lobo do homem', revelando a
              necessidade de um Estado forte para controlar a violência social." Qual é o
              erro nessa passagem?
            </p>
          }
          options={[
            { letter: "a", text: "O tema desigualdade social não aceita repertório filosófico." },
            { letter: "b", text: "A frase 'o homem é o lobo do homem' é de Thomas Hobbes, não de Rousseau — erro de atribuição que penaliza C1 e C2.", correct: true },
            { letter: "c", text: "A ideia de Estado forte é contrária ao espírito da redação ENEM." },
            { letter: "d", text: "A frase é correta, mas deveria aparecer na introdução, não no desenvolvimento." },
          ]}
          resolution={
            <p>
              "Homo homini lupus" (o homem é o lobo do homem) é a célebre frase de Thomas
              Hobbes, não de Rousseau. Rousseau acreditava que o ser humano é naturalmente
              bom e que a sociedade o corrompe — posição oposta à de Hobbes. Atribuir a
              frase errada penaliza a Competência 1 (demonstra descontrole do código) e a
              Competência 2 (revela compreensão equivocada do repertório).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Repertório literário integrado"
          statement={
            <p>
              (Estilo ENEM) Leia o trecho de redação sobre <strong>invisibilidade social no Brasil</strong>:
              "A escritora Clarice Lispector, em <em>A Hora da Estrela</em>, criou a personagem
              Macabéa, uma jovem nordestina que vive no Rio de Janeiro sem que ninguém a veja
              de verdade. Essa invisibilidade ficcional espelha a realidade de milhões de
              brasileiros que, excluídos do mercado de trabalho e da proteção estatal,
              existem sem existir." O trecho exemplifica uso de repertório produtivo porque:
            </p>
          }
          options={[
            { letter: "a", text: "Cita uma obra literária brasileira reconhecida pelo ENEM.", correct: false },
            { letter: "b", text: "Apresenta o repertório, explica seu sentido e conecta explicitamente ao problema social discutido.", correct: true },
            { letter: "c", text: "Resume o enredo de A Hora da Estrela para o corretor compreender.", correct: false },
            { letter: "d", text: "Usa linguagem poética adequada ao gênero dissertativo.", correct: false },
          ]}
          resolution={
            <p>
              O trecho é um exemplo perfeito de repertório produtivo: apresenta o repertório
              (a obra e a personagem), explica seu sentido central (invisibilidade ficcional)
              e conecta ao problema real discutido (invisibilidade social dos excluídos).
              Isso atende à exigência da Competência 2 de usar o repertório de forma
              funcional e integrada ao argumento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Dados científicos sem footnote"
          statement={
            <p>
              (Estilo ENEM) Um candidato não lembra o percentual exato de analfabetismo
              funcional no Brasil. Qual das formulações abaixo é <strong>aceitável</strong> no
              contexto de uma redação ENEM?
            </p>
          }
          options={[
            { letter: "a", text: "O Brasil possui exatamente 27,3% de analfabetos funcionais, segundo o INEP." },
            { letter: "b", text: "Segundo dados do INEP, cerca de um quarto dos brasileiros adultos não compreende plenamente textos escritos.", correct: true },
            { letter: "c", text: "Todos os brasileiros são analfabetos funcionais, o que torna a educação impossível." },
            { letter: "d", text: "Dados científicos não podem ser usados sem footnote na redação ENEM." },
          ]}
          resolution={
            <p>
              O ENEM aceita dados aproximados razoáveis ("cerca de um quarto",
              "aproximadamente", "mais da metade") quando atribuídos a fontes confiáveis.
              A alternativa A é perigosa porque apresenta um número exato que pode estar
              errado — e incorreções factuais prejudicam a Competência 2. Nunca invente
              percentuais precisos; prefira aproximações defensivas com fonte genérica.
            </p>
          }
        />
      </section>
    </article>
  );
}
