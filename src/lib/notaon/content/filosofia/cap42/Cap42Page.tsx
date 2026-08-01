"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 42</span>
          <h1>Questões Comentadas dos Principais Filósofos do ENEM</h1>
          <p>
            Este capítulo é um simulado comentado com os filósofos que mais aparecem no ENEM.
            Para cada filósofo, apresentamos o perfil de como o ENEM o aborda, as armadilhas
            frequentes e questões simuladas com resolução detalhada. Resolva antes de ler a
            resposta — é o único jeito de saber o que você realmente sabe.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa dos Filósofos</span>
        <h2>1. Os Filósofos Mais Cobrados no ENEM</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 260" width="520" height="260" aria-label="Mapa mental dos filósofos mais cobrados no ENEM">
            <rect x="10" y="10" width="500" height="240" rx="10" fill="#fafafa" stroke="#374151" strokeWidth="1.5"/>
            <text x="260" y="33" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827">Filósofos Mais Cobrados no ENEM</text>

            <rect x="195" y="45" width="130" height="35" rx="6" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1"/>
            <text x="260" y="67" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">MUITO FREQUENTES</text>

            <rect x="20" y="100" width="108" height="28" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
            <text x="74" y="119" textAnchor="middle" fontSize="9" fill="white">Platão / Sócrates</text>

            <rect x="140" y="100" width="80" height="28" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
            <text x="180" y="119" textAnchor="middle" fontSize="9" fill="white">Aristóteles</text>

            <rect x="233" y="100" width="65" height="28" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
            <text x="265" y="119" textAnchor="middle" fontSize="9" fill="white">Kant</text>

            <rect x="311" y="100" width="65" height="28" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
            <text x="343" y="119" textAnchor="middle" fontSize="9" fill="white">Marx</text>

            <rect x="389" y="100" width="95" height="28" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
            <text x="436" y="119" textAnchor="middle" fontSize="9" fill="white">Rousseau/Locke</text>

            <rect x="195" y="148" width="130" height="28" rx="6" fill="#059669" stroke="#047857" strokeWidth="1"/>
            <text x="260" y="167" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">FREQUENTES</text>

            <rect x="20" y="190" width="95" height="28" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1"/>
            <text x="67" y="209" textAnchor="middle" fontSize="9" fill="white">Nietzsche</text>

            <rect x="127" y="190" width="75" height="28" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1"/>
            <text x="164" y="209" textAnchor="middle" fontSize="9" fill="white">Sartre</text>

            <rect x="214" y="190" width="90" height="28" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1"/>
            <text x="259" y="209" textAnchor="middle" fontSize="9" fill="white">Descartes</text>

            <rect x="316" y="190" width="95" height="28" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1"/>
            <text x="363" y="209" textAnchor="middle" fontSize="9" fill="white">Habermas</text>

            <rect x="423" y="190" width="75" height="28" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1"/>
            <text x="460" y="209" textAnchor="middle" fontSize="9" fill="white">Arendt</text>

            <rect x="20" y="230" width="80" height="22" rx="4" fill="#6b7280" stroke="#4b5563" strokeWidth="1"/>
            <text x="60" y="245" textAnchor="middle" fontSize="8" fill="white">Foucault</text>

            <rect x="112" y="230" width="80" height="22" rx="4" fill="#6b7280" stroke="#4b5563" strokeWidth="1"/>
            <text x="152" y="245" textAnchor="middle" fontSize="8" fill="white">Paulo Freire</text>

            <rect x="204" y="230" width="95" height="22" rx="4" fill="#6b7280" stroke="#4b5563" strokeWidth="1"/>
            <text x="251" y="245" textAnchor="middle" fontSize="8" fill="white">Beauvoir/Butler</text>

            <rect x="311" y="230" width="100" height="22" rx="4" fill="#6b7280" stroke="#4b5563" strokeWidth="1"/>
            <text x="361" y="245" textAnchor="middle" fontSize="8" fill="white">Adorno/Horkheimer</text>

            <rect x="423" y="230" width="75" height="22" rx="4" fill="#6b7280" stroke="#4b5563" strokeWidth="1"/>
            <text x="460" y="245" textAnchor="middle" fontSize="8" fill="white">Hobbes</text>
          </svg>
          <figcaption>Filósofos por frequência de aparição nas provas do ENEM. Foque nos muito frequentes e complemente com os demais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perfis</span>
        <h2>2. Como o ENEM Aborda os Principais Filósofos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Filósofo</th><th>O ENEM costuma cobrar…</th><th>Armadilha frequente</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Platão</strong></td><td>Alegoria da Caverna; Teoria das Ideias; dualismo mundo sensível/inteligível</td><td>Confundir o mundo das sombras (sensível) com o mundo verdadeiro (inteligível)</td></tr>
              <tr><td><strong>Aristóteles</strong></td><td>Ética da virtude (eudaimonia, justo meio); política (zoon politikon); lógica</td><td>Confundir com Platão: Aristóteles critica a teoria das Ideias</td></tr>
              <tr><td><strong>Kant</strong></td><td>Imperativo categórico; dever moral; autonomia; crítica do conhecimento</td><td>Confundir imperativo categórico (incondicional) com imperativo hipotético (condicional)</td></tr>
              <tr><td><strong>Marx</strong></td><td>Alienação; mais-valia; luta de classes; infraestrutura/superestrutura</td><td>Achar que Marx é apenas contra o capitalismo — ele analisa sua dinâmica estrutural</td></tr>
              <tr><td><strong>Rousseau</strong></td><td>Estado de natureza (bondade natural); contrato social; vontade geral</td><td>Confundir com Hobbes: para Rousseau, o estado de natureza é bom, a sociedade que corrompe</td></tr>
              <tr><td><strong>Nietzsche</strong></td><td>Morte de Deus; moral do ressentimento; vontade de potência; Übermensch</td><td>Interpretar a "morte de Deus" literalmente; confundir Übermensch com superioridade racial (erro nazista)</td></tr>
              <tr><td><strong>Habermas</strong></td><td>Ação comunicativa; esfera pública; razão comunicativa vs. instrumental</td><td>Confundir ação comunicativa (entendimento) com ação estratégica (manipulação)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégias</span>
        <h2>3. Estratégias por Tipo de Filósofo</h2>
        <p>
          <strong>Para filósofos antigos (Platão, Aristóteles, Sócrates):</strong> o ENEM
          frequentemente usa textos clássicos em tradução. Procure o vocabulário específico:
          "formas", "virtude", "eudaimonia", "alma", "polis". Relacione com o período histórico
          (democracia ateniense, crise das polis).
        </p>
        <p>
          <strong>Para filósofos modernos (Descartes, Locke, Rousseau, Kant):</strong> o ENEM
          relaciona com temas políticos (contrato social, democracia) e epistemológicos
          (conhecimento, razão, experiência). Saiba diferenciar racionalismo de empirismo.
        </p>
        <p>
          <strong>Para filósofos contemporâneos (Marx, Nietzsche, Sartre, Foucault,
          Habermas):</strong> o ENEM usa esses autores para analisar fenômenos contemporâneos —
          mídia, democracia, trabalho, gênero. A questão geralmente pede que você aplique o
          conceito a uma situação concreta.
        </p>
        <div className="lesson-highlight">
          <h3>Dica de ouro: o contexto da obra</h3>
          <p>
            Saber o contexto histórico em que o filósofo escreveu ajuda a compreender o
            "problema" que ele tentava resolver. Hobbes escreveu no contexto da Guerra Civil
            Inglesa; Rousseau, na véspera da Revolução Francesa; Marx, na industrialização do
            século XIX. O ENEM frequentemente explora essa relação entre texto e contexto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por Período</span>
        <h2>4. Perfil de Questões por Período Filosófico</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Tipo de questão mais comum</th>
                <th>Filósofos mais cobrados</th>
                <th>Dica para acertar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Antiga (séc. VI a.C.–V d.C.)</strong></td>
                <td>Interpretação de diálogos platônicos; ética aristotélica aplicada; método socrático</td>
                <td>Platão, Aristóteles, Sócrates, estoicos</td>
                <td>Identifique o vocabulário: "eudaimonia", "justo meio", "Ideias", "caverna", "maiêutica"</td>
              </tr>
              <tr>
                <td><strong>Medieval (séc. V–XV)</strong></td>
                <td>Relação fé/razão; provas da existência de Deus; universais</td>
                <td>Agostinho, Tomás de Aquino, Anselmo</td>
                <td>O ENEM não cobra teologia — cobra a estrutura do argumento filosófico (razão + fé)</td>
              </tr>
              <tr>
                <td><strong>Moderna (séc. XV–XVIII)</strong></td>
                <td>Contrato social; empirismo vs. racionalismo; moral kantiana</td>
                <td>Descartes, Locke, Rousseau, Hobbes, Kant</td>
                <td>Diferencie os três contratualistas: o "estado de natureza" de cada um é diferente</td>
              </tr>
              <tr>
                <td><strong>Contemporânea (séc. XIX–XXI)</strong></td>
                <td>Aplicação de conceitos a situações concretas: trabalho, política, mídia, gênero</td>
                <td>Marx, Nietzsche, Freud, Sartre, Arendt, Foucault, Habermas</td>
                <td>O ENEM usa esses filósofos para analisar fenômenos atuais — pense no contexto da aplicação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Top 10 Conceitos</span>
        <h2>5. Os 10 Conceitos Filosóficos Mais Cobrados no ENEM</h2>
        <ul>
          <li>
            <strong>1. Imperativo categórico (Kant):</strong> "Age apenas segundo a máxima pela qual
            possas ao mesmo tempo querer que ela se torne lei universal." É incondicional — não
            depende de fins. Difere do imperativo hipotético ("se queres X, faz Y").
          </li>
          <li>
            <strong>2. Alienação (Marx):</strong> o trabalhador perde o controle sobre o produto
            do seu trabalho (que pertence ao capitalista), sobre o processo (que não controla),
            sobre sua essência humana (o trabalho criativo) e sobre os outros (competição).
          </li>
          <li>
            <strong>3. Alegoria da Caverna (Platão):</strong> prisioneiros veem sombras e as tomam
            por realidade. A libertação representa a ascensão ao conhecimento filosófico (mundo
            inteligível). O sol = a Ideia do Bem. O filósofo liberto tem dever de retornar.
          </li>
          <li>
            <strong>4. Contrato social:</strong> para Hobbes = medo (estado de natureza = guerra);
            para Locke = conveniência (estado de natureza = paz, mas precária); para Rousseau =
            vontade geral (estado de natureza = bondade corrompida pela sociedade).
          </li>
          <li>
            <strong>5. Banalidade do mal (Arendt):</strong> o mal não é demoníaco — é a ausência
            de pensamento. Eichmann não era monstro: era burocracia sem reflexão.
          </li>
          <li>
            <strong>6. Vontade de potência (Nietzsche):</strong> força criadora que afirma a vida
            e supera os valores do ressentimento. Não é "vontade de dominar" os outros —
            é criação de novos valores além do bem e do mal.
          </li>
          <li>
            <strong>7. Maiêutica (Sócrates):</strong> arte de partejar ideias — o professor não
            transmite, ajuda o interlocutor a trazer à luz o conhecimento que já está em si.
            Precede a ironia: primeiro destrói a falsa certeza, depois constrói o genuíno.
          </li>
          <li>
            <strong>8. Ação comunicativa (Habermas):</strong> interação orientada para o
            entendimento mútuo racional — oposta à ação estratégica (manipulação). Base da
            democracia deliberativa e da esfera pública racional.
          </li>
          <li>
            <strong>9. Conscientização (Freire):</strong> processo pelo qual o oprimido toma
            consciência crítica de sua condição e das estruturas que a produzem — condição para
            a práxis (reflexão + ação) transformadora.
          </li>
          <li>
            <strong>10. Biopoder (Foucault):</strong> conjunto de técnicas pelos quais governos
            modernos administram populações e corpos — saúde pública, sexualidade, natalidade,
            sistemas de vigilância. Diferente do poder soberano (que mata): o biopoder faz viver.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros Comuns</span>
        <h2>6. Erros Mais Comuns e Como Evitá-los</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Erro clássico</th>
                <th>Exemplo</th>
                <th>Correção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Confundir Hobbes e Rousseau</td>
                <td>Dizer que para Rousseau o estado de natureza é guerra</td>
                <td>Para Hobbes = guerra; para Rousseau = bondade. A sociedade que corrompeu, não a natureza.</td>
              </tr>
              <tr>
                <td>Confundir Kant e utilitarismo</td>
                <td>Dizer que Kant avalia ações pelas consequências</td>
                <td>Kant é deontológico: avalia pelo princípio (máxima), não pelo resultado. Consequências = utilitarismo (Mill).</td>
              </tr>
              <tr>
                <td>Interpretar "morte de Deus" literalmente</td>
                <td>Achar que Nietzsche nega a existência de Deus (ateísmo simples)</td>
                <td>"Deus morreu" = os valores absolutos perderam credibilidade na modernidade. É diagnóstico cultural, não ateísmo.</td>
              </tr>
              <tr>
                <td>Reduzir Marx a "antipatia ao capitalismo"</td>
                <td>Responder que Marx "odeia o capitalismo" sem entender a análise estrutural</td>
                <td>Marx <em>analisa</em> o capitalismo cientificamente: mais-valia, alienação, luta de classes são conceitos analíticos, não apenas morais.</td>
              </tr>
              <tr>
                <td>Confundir performatividade de Butler com livre escolha</td>
                <td>Dizer que "gênero é performance" significa que cada um escolhe seu gênero livremente</td>
                <td>Performance é <em>compulsória</em> — opera dentro de normas coercitivas. Não é escolha livre como fantasia.</td>
              </tr>
              <tr>
                <td>Confundir Platão e Aristóteles</td>
                <td>Dizer que Aristóteles defende o mundo das Ideias ou a teoria das Formas</td>
                <td>Aristóteles <em>critica</em> Platão. As formas em Aristóteles estão nas coisas (imanentes), não num mundo separado (transcendente).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Citações</span>
        <h2>7. Banco de Citações Filosóficas Frequentes no ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Citação</th>
                <th>Autor</th>
                <th>O que significa no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne lei universal."</td>
                <td>Kant</td>
                <td>Imperativo categórico: lei moral universal, incondicional, derivada da razão</td>
              </tr>
              <tr>
                <td>"O homem nasce livre, e em toda parte encontra-se acorrentado."</td>
                <td>Rousseau</td>
                <td>Liberdade natural corrompida pela sociedade; base do contrato social</td>
              </tr>
              <tr>
                <td>"Ninguém nasce mulher: torna-se mulher."</td>
                <td>Beauvoir</td>
                <td>Gênero como construção social; crítica ao determinismo biológico</td>
              </tr>
              <tr>
                <td>"Uma vida não examinada não vale a pena ser vivida."</td>
                <td>Sócrates (via Platão)</td>
                <td>Valor do autoconhecimento e da reflexão filosófica</td>
              </tr>
              <tr>
                <td>"A existência precede a essência."</td>
                <td>Sartre</td>
                <td>O ser humano não tem natureza fixa — se define pelas suas escolhas (liberdade radical)</td>
              </tr>
              <tr>
                <td>"A leitura do mundo precede a leitura da palavra."</td>
                <td>Paulo Freire</td>
                <td>Educação parte da realidade do educando; crítica à educação bancária</td>
              </tr>
              <tr>
                <td>"O filósofo que não faz nada além de filosofar é apenas um filósofo — e o mundo precisa ser transformado."</td>
                <td>Marx (adaptado)</td>
                <td>Filosofia como práxis; teoria ligada à transformação social</td>
              </tr>
              <tr>
                <td>"A banalidade do mal."</td>
                <td>Hannah Arendt</td>
                <td>Os maiores crimes podem ser cometidos por pessoas comuns que deixaram de pensar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano de Estudos</span>
        <h2>8. Como Estudar Filosofia para o ENEM: Plano de 30 Dias</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Semana</th>
                <th>Foco</th>
                <th>Conteúdo</th>
                <th>Tarefa prática</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Semana 1</strong></td>
                <td>Fundamentos e Filosofia Antiga</td>
                <td>Método filosófico; Sócrates; Platão; Aristóteles; estoicos</td>
                <td>Monte um flashcard por filósofo: nome, período, 3 conceitos, 1 obra</td>
              </tr>
              <tr>
                <td><strong>Semana 2</strong></td>
                <td>Filosofia Moderna e Política</td>
                <td>Descartes; Locke; Rousseau; Hobbes; Kant; contrato social</td>
                <td>Faça uma tabela comparativa dos 3 contratualistas (estado de natureza, contrato, governo)</td>
              </tr>
              <tr>
                <td><strong>Semana 3</strong></td>
                <td>Filosofia Contemporânea</td>
                <td>Marx; Nietzsche; Freud; Sartre; Arendt; Foucault; Habermas; Beauvoir; Butler</td>
                <td>Para cada filósofo: 1 conceito-chave + 1 situação contemporânea onde aparece</td>
              </tr>
              <tr>
                <td><strong>Semana 4</strong></td>
                <td>Revisão e questões</td>
                <td>Temas transversais: ética ambiental, gênero, democracia, IA, decolonialidade</td>
                <td>Resolver 20 questões do ENEM dos últimos 5 anos; analisar cada erro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Regra de ouro:</strong> na Filosofia do ENEM, qualidade supera quantidade.
          Entender profundamente 15 filósofos é mais valioso do que conhecer superficialmente 40.
          Concentre-se nos muito frequentes (Platão, Aristóteles, Kant, Marx, Rousseau, Nietzsche,
          Sartre, Foucault, Habermas, Arendt, Paulo Freire) e use as semanas 1–3 para isso.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interdisciplinaridade</span>
        <h2>9. Conexões Interdisciplinares: Filosofia + História + Sociologia</h2>
        <p>
          O ENEM integra as Ciências Humanas — uma questão de Filosofia raramente existe isolada.
          Conhecer as conexões interdisciplinares permite responder com mais segurança:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito filosófico</th>
                <th>Conexão histórica</th>
                <th>Conexão sociológica</th>
                <th>Questão típica ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contrato social (Rousseau/Locke)</td>
                <td>Revolução Francesa (1789); independências americanas</td>
                <td>Legitimidade do Estado; democracia representativa</td>
                <td>Relacionar a ideia contratualista com a Declaração dos Direitos do Homem</td>
              </tr>
              <tr>
                <td>Alienação (Marx)</td>
                <td>Revolução Industrial; proletariado urbano séc. XIX</td>
                <td>Trabalho assalariado; desigualdade; greve</td>
                <td>Aplicar alienação a situação de trabalho contemporâneo (plataformas digitais, uberização)</td>
              </tr>
              <tr>
                <td>Totalitarismo (Arendt)</td>
                <td>Nazismo; Stalinismo; II Guerra Mundial</td>
                <td>Propaganda; controle social; burocracia do mal</td>
                <td>Identificar características do totalitarismo em textos sobre o Holocausto ou regimes autoritários</td>
              </tr>
              <tr>
                <td>Colonialidade (Quijano/Dussel)</td>
                <td>Colonização das Américas; tráfico de escravizados</td>
                <td>Racismo estrutural; desigualdade racial; epistemicídio</td>
                <td>Relacionar a persistência do racismo com a colonialidade do poder</td>
              </tr>
              <tr>
                <td>Ética ambiental (Jonas/Leopold)</td>
                <td>Revolução Industrial; acordos ambientais (Kyoto, Paris)</td>
                <td>Movimentos ambientalistas; justiça climática</td>
                <td>Aplicar o princípio responsabilidade à discussão sobre mudanças climáticas e gerações futuras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões Simuladas Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. (Simulado ENEM) Alegoria da Caverna"
          statement={<p>Na Alegoria da Caverna (República, Livro VII), Platão descreve prisioneiros que, acorrentados, veem apenas sombras projetadas na parede e as tomam por realidade. Quando um deles é libertado e vê o sol, volta para contar a verdade — mas os outros não acreditam. Essa alegoria representa:</p>}
          options={[
            { letter: "a", text: "A superioridade física dos filósofos sobre os demais cidadãos da polis." },
            { letter: "b", text: "O processo de ascensão do conhecimento sensível (sombras/opiniões) ao conhecimento inteligível (Ideias/verdade), e a missão do filósofo de iluminar a cidade.", correct: true },
            { letter: "c", text: "A teoria de que o conhecimento verdadeiro vem exclusivamente da experiência sensível dos sentidos." },
            { letter: "d", text: "A impossibilidade de o ser humano comum alcançar a verdade, reservada apenas aos deuses." },
          ]}
          resolution={<p>A caverna representa o mundo sensível (das aparências e opiniões); a saída da caverna, o processo de ascensão ao conhecimento filosófico; o sol, a Ideia do Bem (verdade suprema). O filósofo que retorna à caverna representa o governante-filósofo que, conhecendo a verdade, tem obrigação de guiar a cidade. A alternativa C inverte o platonismo: Platão desconfia dos sentidos.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. (Simulado ENEM) Kant e o Imperativo Categórico"
          statement={<p>"Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne uma lei universal." (Kant, Fundamentação da Metafísica dos Costumes) Essa formulação do imperativo categórico significa que:</p>}
          options={[
            { letter: "a", text: "A moralidade de uma ação é determinada pelas consequências que ela produz para a maioria das pessoas." },
            { letter: "b", text: "Uma ação é moralmente correta se o princípio que a guia pode ser universalizado sem contradição, independentemente de suas consequências.", correct: true },
            { letter: "c", text: "Cada pessoa deve agir de acordo com o que for melhor para si mesma, pois não há moralidade universal." },
            { letter: "d", text: "A lei moral é estabelecida pela sociedade e muda conforme a cultura e o momento histórico." },
          ]}
          resolution={<p>Kant defende uma ética deontológica: o valor moral de uma ação está em seu princípio (máxima), não em suas consequências. O teste do imperativo categórico é a universalizabilidade: "posso querer que todos ajam assim?" — se a máxima for universalizada e produzir contradição, a ação é imoral. Isso distingue Kant do utilitarismo (que avalia consequências) e do relativismo (que nega universal).</p>}
        />

        <Exercise
          level="Avançado"
          title="3. (Simulado ENEM) Marx e a Alienação"
          statement={<p>"O trabalhador coloca a sua vida no objeto; mas a partir de então ela não pertence mais a ele, mas ao objeto. Quanto maior a sua atividade, portanto, mais o trabalhador carece de objetos." (Marx, Manuscritos Econômico-Filosóficos) O conceito de alienação presente no texto indica que:</p>}
          options={[
            { letter: "a", text: "O trabalhador se aliena voluntariamente de seus objetos para garantir o progresso tecnológico da sociedade." },
            { letter: "b", text: "No capitalismo, o produto do trabalho humano se torna uma força estranha e dominante sobre o próprio trabalhador que o criou.", correct: true },
            { letter: "c", text: "A alienação é uma condição psicológica individual que pode ser resolvida com terapia e autoconhecimento." },
            { letter: "d", text: "O trabalhador se realiza plenamente no produto de seu trabalho, desde que seja adequadamente remunerado." },
          ]}
          resolution={<p>Para Marx, a alienação no capitalismo tem quatro dimensões: o trabalhador se aliena do produto (que pertence ao capitalista), do processo de trabalho (que não controla), de sua essência genérica (o trabalho criativo que o define como humano) e dos outros seres humanos (a competição substitui a cooperação). O texto descreve a primeira dimensão: o produto se torna autônomo e domina o criador.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (Simulado ENEM) Foucault e o Poder"
          statement={<p>"O poder não é algo que se possui, mas algo que se exerce; não está localizado no Estado ou em qualquer instituição, mas circula por toda a rede social." (Michel Foucault, adaptado) Com base nessa concepção, a vigilância de funcionários por câmeras no ambiente de trabalho exemplifica:</p>}
          options={[
            { letter: "a", text: "A concentração do poder apenas nas mãos da gerência e dos proprietários da empresa." },
            { letter: "b", text: "Uma forma de poder disciplinar que se exerce sobre os corpos por meio da vigilância constante, produzindo sujeitos que se auto-vigiam.", correct: true },
            { letter: "c", text: "A impossibilidade do poder ser exercido sem o consentimento dos trabalhadores." },
            { letter: "d", text: "Uma forma de contrato social que garante a segurança dos funcionários no trabalho." },
          ]}
          resolution={<p>Foucault, em Vigiar e Punir, analisou o panóptico de Bentham como metáfora do poder disciplinar moderno: quando os sujeitos sabem que podem ser observados a qualquer momento, passam a se auto-vigiar. A câmera no trabalho funciona exatamente assim: não precisa estar sempre ligada — a possibilidade de vigilância já produz o efeito de autodisciplina. O poder não está na câmera ou no gerente, mas na relação que se instala.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (Simulado ENEM) Habermas e a Esfera Pública"
          statement={<p>Jürgen Habermas define a esfera pública como o espaço em que cidadãos discutem racionalmente assuntos de interesse coletivo, formando a opinião pública que deve orientar o Estado democrático. A proliferação de fake news nas redes sociais representa uma ameaça à democracia deliberativa porque:</p>}
          options={[
            { letter: "a", text: "As redes sociais são controladas por governos autoritários que distorcem a informação propositalmente." },
            { letter: "b", text: "As redes sociais excluem os cidadãos mais pobres, que não têm acesso à internet." },
            { letter: "c", text: "Compromete a formação de uma esfera pública baseada em argumentos verificáveis, substituindo o debate racional por desinformação emocional que inviabiliza o consenso democrático.", correct: true },
            { letter: "d", text: "Habermas considerava que a democracia não necessita de uma esfera pública, apenas de eleições periódicas." },
          ]}
          resolution={<p>Habermas desenvolveu a teoria da ação comunicativa e da democracia deliberativa: a legitimidade política depende de processos de deliberação pública em que os cidadãos apresentam argumentos racionais, ouvem e revisam posições. As fake news atacam as condições desse processo ao introduzir informações falsas que distorcem a formação da opinião pública, tornando impossível o consenso baseado em razões válidas.</p>}
        />
      </section>
    </article>
  );
}
