"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 43</span>
          <h1>Revisão Geral: Conceitos Essenciais e Estratégias de Prova</h1>
          <p>
            Este é o capítulo final de revisão. Aqui você encontra a tabela-mestre dos filósofos,
            os 10 conceitos mais cobrados, estratégias de gestão de tempo na prova e 5 questões
            de alto grau de dificuldade com resolução completa. Estude, revise e confie no
            trabalho que você fez ao longo do curso.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Revisão Modular</span>
        <h2>1. Mapa Cronológico da Filosofia</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Mapa cronológico da Filosofia de Tales a Habermas">
            <rect x="10" y="10" width="500" height="180" rx="10" fill="#f8fafc" stroke="#374151" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#111827">Linha do Tempo da Filosofia</text>

            <line x1="30" y1="100" x2="490" y2="100" stroke="#6b7280" strokeWidth="2"/>

            <circle cx="55" cy="100" r="5" fill="#2563eb"/>
            <text x="55" y="88" textAnchor="middle" fontSize="8" fill="#1e40af">Tales</text>
            <text x="55" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">~600 a.C.</text>

            <circle cx="100" cy="100" r="5" fill="#2563eb"/>
            <text x="100" y="88" textAnchor="middle" fontSize="8" fill="#1e40af">Sócrates</text>
            <text x="100" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">~470 a.C.</text>

            <circle cx="145" cy="100" r="5" fill="#2563eb"/>
            <text x="145" y="88" textAnchor="middle" fontSize="8" fill="#1e40af">Platão</text>
            <text x="145" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">~428 a.C.</text>

            <circle cx="190" cy="100" r="5" fill="#2563eb"/>
            <text x="190" y="88" textAnchor="middle" fontSize="8" fill="#1e40af">Aristóteles</text>
            <text x="190" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">~384 a.C.</text>

            <circle cx="235" cy="100" r="5" fill="#059669"/>
            <text x="235" y="88" textAnchor="middle" fontSize="8" fill="#065f46">Agostinho</text>
            <text x="235" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">354 d.C.</text>

            <circle cx="268" cy="100" r="5" fill="#059669"/>
            <text x="268" y="88" textAnchor="middle" fontSize="8" fill="#065f46">Tomás</text>
            <text x="268" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1225</text>

            <circle cx="305" cy="100" r="5" fill="#d97706"/>
            <text x="305" y="88" textAnchor="middle" fontSize="8" fill="#92400e">Descartes</text>
            <text x="305" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1596</text>

            <circle cx="330" cy="100" r="5" fill="#d97706"/>
            <text x="330" y="88" textAnchor="middle" fontSize="8" fill="#92400e">Locke</text>
            <text x="330" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1632</text>

            <circle cx="355" cy="100" r="5" fill="#d97706"/>
            <text x="355" y="88" textAnchor="middle" fontSize="8" fill="#92400e">Rousseau</text>
            <text x="355" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1712</text>

            <circle cx="380" cy="100" r="5" fill="#d97706"/>
            <text x="380" y="88" textAnchor="middle" fontSize="8" fill="#92400e">Kant</text>
            <text x="380" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1724</text>

            <circle cx="405" cy="100" r="5" fill="#dc2626"/>
            <text x="405" y="88" textAnchor="middle" fontSize="8" fill="#991b1b">Marx</text>
            <text x="405" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1818</text>

            <circle cx="425" cy="100" r="5" fill="#dc2626"/>
            <text x="425" y="88" textAnchor="middle" fontSize="8" fill="#991b1b">Nietzsche</text>
            <text x="425" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1844</text>

            <circle cx="450" cy="100" r="5" fill="#7c3aed"/>
            <text x="450" y="88" textAnchor="middle" fontSize="8" fill="#4c1d95">Sartre</text>
            <text x="450" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1905</text>

            <circle cx="480" cy="100" r="5" fill="#7c3aed"/>
            <text x="480" y="88" textAnchor="middle" fontSize="8" fill="#4c1d95">Habermas</text>
            <text x="480" y="120" textAnchor="middle" fontSize="7" fill="#6b7280">1929</text>

            <text x="55" y="160" textAnchor="middle" fontSize="8" fill="#2563eb">Antiga</text>
            <text x="252" y="160" textAnchor="middle" fontSize="8" fill="#059669">Medieval</text>
            <text x="342" y="160" textAnchor="middle" fontSize="8" fill="#d97706">Moderna</text>
            <text x="455" y="160" textAnchor="middle" fontSize="8" fill="#7c3aed">Contemporânea</text>
          </svg>
          <figcaption>Linha do tempo da filosofia: dos pré-socráticos a Habermas, com os períodos marcados por cores.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela-Mestre</span>
        <h2>2. Tabela-Mestre: Filósofo × Período × Conceito × ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Filósofo</th><th>Período</th><th>Conceito-chave</th><th>Como aparece no ENEM</th></tr>
            </thead>
            <tbody>
              <tr><td>Sócrates</td><td>Antiga</td><td>Maiêutica; "só sei que nada sei"</td><td>Diálogo filosófico; busca da virtude; ironia socrática</td></tr>
              <tr><td>Platão</td><td>Antiga</td><td>Teoria das Ideias; Alegoria da Caverna</td><td>Conhecimento x opinião; mundo sensível x inteligível</td></tr>
              <tr><td>Aristóteles</td><td>Antiga</td><td>Eudaimonia; justo meio; zoon politikon</td><td>Ética das virtudes; política como natureza humana</td></tr>
              <tr><td>Santo Agostinho</td><td>Medieval</td><td>Fé e razão; iluminação divina</td><td>Relação fé/razão; filosofia a serviço da teologia</td></tr>
              <tr><td>São Tomás de Aquino</td><td>Medieval</td><td>Síntese Aristóteles-Cristo; provas da existência de Deus</td><td>Razão e fé complementares; lei natural</td></tr>
              <tr><td>Maquiavel</td><td>Moderna</td><td>Virtù; política autônoma da moral</td><td>Realismo político; meios e fins; poder</td></tr>
              <tr><td>Hobbes</td><td>Moderna</td><td>Leviatã; estado de natureza (guerra)</td><td>Contrato social por medo; Estado absoluto</td></tr>
              <tr><td>Locke</td><td>Moderna</td><td>Tabula rasa; direitos naturais; governo limitado</td><td>Empirismo; direito de resistência; liberalismo</td></tr>
              <tr><td>Rousseau</td><td>Moderna</td><td>Bondade natural; vontade geral</td><td>Crítica da propriedade; democracia direta</td></tr>
              <tr><td>Kant</td><td>Moderna</td><td>Imperativo categórico; crítica da razão</td><td>Moral do dever; autonomia; ilustração</td></tr>
              <tr><td>Hegel</td><td>Contemporânea</td><td>Dialética; Espírito Absoluto</td><td>Movimento histórico; reconhecimento (base de Marx)</td></tr>
              <tr><td>Marx</td><td>Contemporânea</td><td>Mais-valia; alienação; luta de classes</td><td>Capitalismo; trabalho; estrutura/superestrutura</td></tr>
              <tr><td>Nietzsche</td><td>Contemporânea</td><td>Morte de Deus; vontade de potência; eterno retorno</td><td>Crítica da moral; niilismo; criação de valores</td></tr>
              <tr><td>Freud</td><td>Contemporânea</td><td>Inconsciente; pulsões; id/ego/superego</td><td>Civilização e seus descontentamentos; repressão</td></tr>
              <tr><td>Sartre</td><td>Contemporânea</td><td>"Existência precede essência"; liberdade radical; má-fé</td><td>Responsabilidade; autenticidade; ser-para-outro</td></tr>
              <tr><td>Beauvoir</td><td>Contemporânea</td><td>O Segundo Sexo; tornar-se mulher</td><td>Feminismo existencialista; construção social do gênero</td></tr>
              <tr><td>Arendt</td><td>Contemporânea</td><td>Banalidade do mal; totalitarismo; esfera pública</td><td>Política; democracia; mal sem monstruosidade</td></tr>
              <tr><td>Foucault</td><td>Contemporânea</td><td>Biopoder; discurso; panoptismo</td><td>Poder/saber; disciplina; identidade como construção</td></tr>
              <tr><td>Habermas</td><td>Contemporânea</td><td>Ação comunicativa; esfera pública</td><td>Democracia deliberativa; razão comunicativa</td></tr>
              <tr><td>Paulo Freire</td><td>Brasileira</td><td>Conscientização; educação bancária; práxis</td><td>Educação popular; oprimido; libertação</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Top 10 Conceitos</span>
        <h2>3. Os 10 Conceitos Mais Cobrados e Suas Definições</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>#</th><th>Conceito</th><th>Definição essencial</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong>Contrato social</strong></td><td>Acordo (hipotético ou real) pelo qual os indivíduos renunciam a parte de sua liberdade natural para constituir a sociedade política e garantir direitos</td></tr>
              <tr><td>2</td><td><strong>Alienação</strong></td><td>Processo pelo qual o ser humano perde o controle sobre o produto de seu trabalho, sua essência ou sua consciência, tornando-os uma força estranha que o domina</td></tr>
              <tr><td>3</td><td><strong>Imperativo categórico</strong></td><td>Lei moral universal e incondicional da razão: age apenas segundo a máxima que possas universalizar sem contradição</td></tr>
              <tr><td>4</td><td><strong>Dialética</strong></td><td>Método de desenvolvimento do pensamento e da história por meio de contradições: tese → antítese → síntese (Hegel/Marx)</td></tr>
              <tr><td>5</td><td><strong>Virtude (eudaimonia)</strong></td><td>Aristóteles: a virtude é o hábito de agir pelo justo meio entre extremos; a vida virtuosa leva à felicidade (eudaimonia/florescimento humano)</td></tr>
              <tr><td>6</td><td><strong>Conscientização</strong></td><td>Freire: processo pelo qual o oprimido toma consciência crítica de sua condição histórica e das estruturas que a produzem, tornando-se agente de transformação</td></tr>
              <tr><td>7</td><td><strong>Biopoder</strong></td><td>Foucault: conjunto de técnicas pelas quais os governos modernos administram e regulam as populações e os corpos individuais</td></tr>
              <tr><td>8</td><td><strong>Estado de natureza</strong></td><td>Condição hipotética pré-social dos seres humanos: para Hobbes (guerra), Locke (paz precária) e Rousseau (bondade e liberdade) com implicações diferentes para o contrato</td></tr>
              <tr><td>9</td><td><strong>Indústria cultural</strong></td><td>Adorno/Horkheimer: sistema de produção cultural capitalista que transforma a arte em mercadoria, gera conformismo e produz pseudoindividualidade</td></tr>
              <tr><td>10</td><td><strong>Luta por reconhecimento</strong></td><td>Hegel/Honneth: motor do desenvolvimento social; sujeitos e grupos lutam para ter sua identidade e dignidade reconhecidas nas esferas do amor, do direito e da solidariedade</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Prova</span>
        <h2>4. Estratégias Finais para o Dia da Prova</h2>
        <ul>
          <li>
            <strong>Gestão de tempo:</strong> a prova de Ciências Humanas tem 45 questões (História,
            Geografia, Filosofia, Sociologia) em ~3h30. Não gaste mais de 3–4 minutos por questão.
            Se travar, marque uma alternativa, assinale para revisão e continue.
          </li>
          <li>
            <strong>Ordem de resposta:</strong> comece pelas questões que você domina. Reservar
            as difíceis para o final garante que você não perca tempo e perca questões fáceis.
          </li>
          <li>
            <strong>Leia todos os textos:</strong> nunca pule o texto-base, mesmo que seja longo.
            As questões de Filosofia dependem da interpretação correta do fragmento.
          </li>
          <li>
            <strong>Elimine distratores:</strong> nas questões de Filosofia, quase sempre é
            possível eliminar 2–3 alternativas claramente erradas antes de escolher entre as
            melhores.
          </li>
          <li>
            <strong>Confie no preparo:</strong> se você chegou até aqui estudando o curso completo,
            você tem conhecimento suficiente. A prova de Filosofia não é sobre decorar datas —
            é sobre compreender e relacionar conceitos. Leia com calma, pense com cuidado.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>O que não fazer no dia da prova</h3>
          <p>
            Não tente memorizar tudo na véspera. Não responda sem ler o texto-base. Não confunda
            autores por pressa (verifique sempre o nome antes de responder). Não deixe questão
            sem resposta — no ENEM não há desconto por erro. E não subestime as questões "fáceis":
            os distratores são cuidadosamente construídos para enganar quem não refletiu.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Glossário Final</span>
        <h2>5. Vocabulário Filosófico Essencial — Revisão Rápida</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Termo</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Ontologia</td><td>Estudo do ser, da existência — "o que é ser?"</td></tr>
              <tr><td>Epistemologia</td><td>Teoria do conhecimento — como, o que e com que limites podemos conhecer</td></tr>
              <tr><td>Ética</td><td>Estudo dos valores, virtudes e princípios que guiam a ação humana</td></tr>
              <tr><td>Política</td><td>Filosofia da organização social, do poder, da justiça e do Estado</td></tr>
              <tr><td>Metafísica</td><td>Estudo de questões além da física: Deus, alma, livre-arbítrio, substância</td></tr>
              <tr><td>Lógica</td><td>Estudo das formas válidas de raciocínio e argumentação</td></tr>
              <tr><td>Estética</td><td>Filosofia da arte, do belo e da experiência sensível</td></tr>
              <tr><td>Empirismo</td><td>Todo conhecimento deriva da experiência sensível (Locke, Hume)</td></tr>
              <tr><td>Racionalismo</td><td>O conhecimento verdadeiro vem da razão, independente dos sentidos (Descartes, Leibniz)</td></tr>
              <tr><td>Idealismo</td><td>A realidade é constituída pelo pensamento/espírito (Kant, Hegel)</td></tr>
              <tr><td>Materialismo</td><td>A matéria é a base de toda realidade; o pensamento deriva da matéria (Marx)</td></tr>
              <tr><td>Existencialismo</td><td>A existência precede a essência; o ser humano se define por suas escolhas (Sartre, Beauvoir)</td></tr>
              <tr><td>Utilitarismo</td><td>A ação correta é aquela que produz a maior felicidade para o maior número (Bentham, Mill)</td></tr>
              <tr><td>Deontologia</td><td>A moralidade de uma ação está em seu princípio, não em suas consequências (Kant)</td></tr>
              <tr><td>Niilismo</td><td>A negação de valores absolutos, sentido ou verdade universal (Nietzsche analisa, não defende)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diálogos Filosóficos</span>
        <h2>6. Conexões Entre Filósofos: Diálogos e Rupturas Fundamentais</h2>
        <p>
          Entender como os filósofos dialogam entre si — concordando, criticando ou transformando
          uns aos outros — é uma das chaves para o ENEM. O exame frequentemente pede que você
          identifique continuidades e rupturas entre pensadores:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação</th>
                <th>Filósofos</th>
                <th>O que um herda do outro</th>
                <th>O que um critica/inverte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mestre e discípulo</td>
                <td>Sócrates → Platão → Aristóteles</td>
                <td>Método dialógico; busca da verdade; ética</td>
                <td>Aristóteles critica a Teoria das Ideias: formas estão nas coisas, não num mundo separado</td>
              </tr>
              <tr>
                <td>Herdeiro e crítico</td>
                <td>Hegel → Marx</td>
                <td>Dialética; contradição como motor da história</td>
                <td>Marx inverte Hegel: não é o Espírito, mas a matéria (forças produtivas) que move a história</td>
              </tr>
              <tr>
                <td>Empirismo vs. racionalismo</td>
                <td>Hume → Kant</td>
                <td>Hume mostrou limites da razão especulativa; "despertou" Kant do sono dogmático</td>
                <td>Kant supera o ceticismo humiano: razão tem estruturas a priori que organizam a experiência</td>
              </tr>
              <tr>
                <td>Existencialismo e feminismo</td>
                <td>Sartre → Beauvoir</td>
                <td>"Existência precede essência"; liberdade radical; situação</td>
                <td>Beauvoir aplica ao gênero: as mulheres têm existência, mas são forçadas à condição de Outro</td>
              </tr>
              <tr>
                <td>Frankfurt e democracia</td>
                <td>Adorno/Horkheimer → Habermas</td>
                <td>Crítica da razão instrumental; ideologia; indústria cultural</td>
                <td>Habermas resgata o potencial emancipatório da razão pela ação comunicativa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Padrões do ENEM</span>
        <h2>7. Análise de Padrões: O que o ENEM Mais Cobra em Filosofia</h2>
        <p>
          Com base nas provas do ENEM desde 2009, é possível identificar padrões estáveis nos
          temas filosóficos cobrados. Conhecer esses padrões permite direcionar o estudo:
        </p>
        <ul>
          <li>
            <strong>Ética e moral (30% das questões):</strong> Kant (imperativo categórico),
            Aristóteles (virtude e eudaimonia), utilitarismo (Mill/Bentham), Nietzsche (crítica
            da moral). Perguntas típicas: identificar a teoria ética, aplicá-la a uma situação,
            distinguir ética deontológica de consequencialista.
          </li>
          <li>
            <strong>Filosofia política (25%):</strong> contrato social (Hobbes/Locke/Rousseau),
            democracia (Arendt, Habermas), poder (Foucault), ideologia (Marx). Perguntas típicas:
            identificar os contratualistas, aplicar conceito de poder a situação política.
          </li>
          <li>
            <strong>Epistemologia e ciência (20%):</strong> empirismo vs. racionalismo, Popper
            (falseabilidade), Kuhn (paradigma), filosofia da linguagem. Perguntas típicas:
            identificar a teoria do conhecimento, aplicar falseabilidade a exemplo científico.
          </li>
          <li>
            <strong>Temas contemporâneos (25%):</strong> gênero (Beauvoir, Butler), ética
            ambiental (Jonas), decolonialidade (Quijano, Freire), IA e tecnologia. Perguntas
            típicas: aplicar conceito filosófico a situação contemporânea (feminicídio, mudanças
            climáticas, fake news).
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A questão mais difícil do ENEM em Filosofia</h3>
          <p>
            As questões mais difíceis do ENEM em Filosofia quase sempre exigem dois passos:
            (1) identificar corretamente a posição filosófica no texto e (2) aplicá-la a uma
            situação concreta de forma não óbvia. O erro mais comum é parar no passo 1 sem
            completar o passo 2 — ou inverter a posição do filósofo em relação à situação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Maximizar Nota</span>
        <h2>8. Como Maximizar a Nota em Ciências Humanas no ENEM</h2>
        <p>
          Ciências Humanas no ENEM avalia Filosofia, Sociologia, História e Geografia de forma
          integrada. Para maximizar a nota:
        </p>
        <ul>
          <li>
            <strong>Identifique sua zona de conforto:</strong> Se você é melhor em História,
            faça as questões de História primeiro para ganhar ritmo e confiança. Deixe os
            temas mais difíceis para depois de garantir as questões que domina.
          </li>
          <li>
            <strong>Nunca deixe questão em branco:</strong> O ENEM não desconta ponto errado.
            Se não sabe a resposta, elimine o que puder e marque a que parece mais plausível.
          </li>
          <li>
            <strong>Leia todos os textos-base:</strong> Questões de Filosofia no ENEM exigem
            interpretação do trecho apresentado — não apenas memorização de conteúdo. A resposta
            correta quase sempre está no texto.
          </li>
          <li>
            <strong>Cuidado com os termos "EXCETO", "NÃO" e "INCORRETO":</strong> Invertam
            a lógica da questão. São armadilhas para quem responde por impulso.
          </li>
          <li>
            <strong>Revisão estratégica nos últimos 30 minutos:</strong> Use esse tempo para
            revisar apenas as questões que você marcou como incertas. Não mude respostas
            marcadas com confiança — a primeira intuição tende a estar certa.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A regra dos 5 minutos</h3>
          <p>
            Se você está há mais de 5 minutos numa questão, pare. Marque a melhor alternativa
            disponível, sinalize para revisão e avance. Perder 10 minutos numa questão difícil
            e errar é pior do que marcar e errar em 30 segundos — você pode acertar outras
            3 questões nesse tempo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo Final do Curso</h2>
        <div className="math-grid">
          <div className="math-card"><span>🏛️</span><h3>Filosofia Antiga</h3><p>Sócrates (maiêutica), Platão (Ideias, Caverna), Aristóteles (virtude, política, lógica).</p></div>
          <div className="math-card"><span>✝️</span><h3>Filosofia Medieval</h3><p>Agostinho (fé/razão), Tomás (síntese Aristóteles-Cristo), filosofia islâmica.</p></div>
          <div className="math-card"><span>🔭</span><h3>Filosofia Moderna</h3><p>Descartes (dúvida, cogito), Locke (empirismo, liberalismo), Kant (razão crítica, imperativo).</p></div>
          <div className="math-card"><span>🔴</span><h3>Filosofia Contemporânea</h3><p>Marx (alienação, capital), Nietzsche (morte de Deus), Sartre (existencialismo), Foucault (poder).</p></div>
          <div className="math-card"><span>⚖️</span><h3>Filosofia Política</h3><p>Contrato social (Hobbes/Locke/Rousseau), democracia (Arendt, Habermas), direitos (Rawls).</p></div>
          <div className="math-card"><span>🌍</span><h3>Filosofia Atual</h3><p>Ética ambiental (Jonas), gênero (Beauvoir, Butler), decolonial (Dussel, Quijano), Freire.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Finais</span>
        <h2>Questões de Alto Grau de Dificuldade</h2>

        <Exercise
          level="Avançado"
          title="1. Síntese: Kant e Rousseau"
          statement={<p>Kant afirmou que foi Rousseau quem o despertou de seu "sono dogmático" — não o empírico (como disse de Hume), mas o moral. O que Rousseau ofereceu a Kant foi:</p>}
          options={[
            { letter: "a", text: "A teoria do contrato social como fundamento do Estado democrático moderno." },
            { letter: "b", text: "A ideia de que a moralidade não reside na razão pura, mas nos sentimentos naturais do ser humano." },
            { letter: "c", text: "A convicção de que a dignidade humana é universal e não depende de riqueza, cultura ou inteligência — o que levou Kant a fundamentar a moral na razão prática de todos os seres racionais, não apenas dos eruditos.", correct: true },
            { letter: "d", text: "A crítica do Estado absolutista como contrário à liberdade natural humana." },
          ]}
          resolution={<p>Kant confessou que Rousseau o ensinou a respeitar o ser humano comum. Rousseau mostrou que o agricultor iletrado pode ter tanto valor moral quanto o filósofo erudito — o que levou Kant a fundamentar a moral não no conhecimento ou na cultura, mas na razão prática inerente a todo ser racional. Isso é a universalidade do imperativo categórico: vale para todos, não apenas para os sábios.</p>}
        />

        <Exercise
          level="Avançado"
          title="2. Hegel, Marx e a Dialética"
          statement={<p>Marx afirmou que "colocou Hegel de pé" (ou "de cabeça para baixo"). Isso significa que Marx:</p>}
          options={[
            { letter: "a", text: "Abandonou completamente o método dialético de Hegel, substituindo-o pelo método empírico das ciências naturais." },
            { letter: "b", text: "Inverteu o idealismo hegeliano: enquanto para Hegel a história é o desdobramento do Espírito (ideia), para Marx é o desenvolvimento das forças produtivas materiais que determina a consciência — não o contrário.", correct: true },
            { letter: "c", text: "Criou uma filosofia completamente original, sem nenhuma influência de Hegel ou da tradição filosófica alemã." },
            { letter: "d", text: "Concordou com Hegel que o Estado prussiano representava a realização do Espírito Absoluto na história." },
          ]}
          resolution={<p>A dialética de Hegel é idealista: o motor da história é o Espírito (Geist) que se desdobra por contradições. Marx mantém a dialética (tese-antítese-síntese, contradições que movem a história), mas inverte o fundamento: para ele, não é a ideia que determina a realidade material — é a realidade material (forças produtivas, relações de produção) que determina as ideias (consciência, cultura, direito, religião). Isso é o materialismo histórico-dialético.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Nietzsche e a Moral"
          statement={<p>Nietzsche distingue "moral dos senhores" de "moral dos escravos". A moral dos escravos é uma moral de ressentimento porque:</p>}
          options={[
            { letter: "a", text: "Os escravos eram literalmente preguiçosos e incapazes de criar valores positivos próprios." },
            { letter: "b", text: "Nasce da fraqueza e inverte os valores aristocráticos: chama de 'mau' o que é forte e vital, e de 'bom' o que é humilde e fraco — transformando a incapacidade de agir em virtude.", correct: true },
            { letter: "c", text: "Os escravos copiavam os valores dos senhores sem criar nada de original." },
            { letter: "d", text: "A moral dos escravos é superior à dos senhores porque valoriza a compaixão e a solidariedade humanas." },
          ]}
          resolution={<p>A "genealogia da moral" de Nietzsche mostra que a moral ocidental (cristã, democrática, igualitária) é uma inversão operada pelos "fracos": incapazes de afirmar sua força vitalmente, transformam sua fraqueza em virtude e chamam de "mal" o que é forte, nobre e vital. É uma moral reativa (definida em oposição ao senhor) e de ressentimento. Nietzsche não prega o retorno à escravidão — ele quer a criação de novos valores além do bem e do mal.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Arendt e a Banalidade do Mal"
          statement={<p>"O mal não é uma força demoníaca ou monstruosa — é a ausência de pensamento. Adolf Eichmann não era um monstro, era um burocrata que obedecia ordens sem jamais refletir sobre o que estava fazendo." (Hannah Arendt, Eichmann em Jerusalém, adaptado) A "banalidade do mal" de Arendt implica que:</p>}
          options={[
            { letter: "a", text: "Os grandes crimes históricos são inevitáveis, pois fazem parte da natureza humana violenta." },
            { letter: "b", text: "A obediência irrefletida a ordens e a abdicação do pensamento crítico podem tornar pessoas comuns cúmplices de atrocidades.", correct: true },
            { letter: "c", text: "Os crimes do nazismo foram perpetrados apenas por indivíduos psicologicamente anormais e sádicos." },
            { letter: "d", text: "A responsabilidade moral pelos crimes de Estado recai exclusivamente sobre os líderes, não sobre os executores das ordens." },
          ]}
          resolution={<p>Arendt, ao cobrir o julgamento de Eichmann (1961), ficou chocada com sua normalidade: ele não era um monstro, mas um funcionário medíocre que "apenas cumpria ordens" sem pensar. Isso revelou algo perturbador: os maiores crimes podem ser cometidos por pessoas comuns que abdicaram do pensamento — que é, para Arendt, o único antídoto contra o mal. A banalidade do mal é a ausência de reflexão, não a presença de maldade.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Questão Integradora"
          statement={<p>Considere as seguintes afirmações: I. Para Rousseau, a propriedade privada é a origem das desigualdades sociais e da corrupção da bondade natural humana. II. Para Locke, a propriedade privada é um direito natural anterior ao Estado, que o governo deve proteger. III. Para Marx, a propriedade privada dos meios de produção é a base da exploração capitalista e deve ser abolida. Está CORRETO o que se afirma em:</p>}
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas I e II." },
            { letter: "c", text: "Apenas II e III." },
            { letter: "d", text: "I, II e III.", correct: true },
          ]}
          resolution={<p>Todas as três afirmações são corretas. Rousseau (Discurso sobre a Origem da Desigualdade): "O primeiro que, tendo cercado um terreno, teve a ideia de dizer 'Isto é meu' e encontrou pessoas suficientemente simples para acreditar nele, foi o verdadeiro fundador da sociedade civil." Locke: a propriedade é direito natural (vida, liberdade, propriedade), anterior ao contrato social. Marx: a propriedade privada dos meios de produção é a base estrutural do capitalismo e da exploração — sua supressão é condição para a emancipação. São três das mais influentes posições filosóficas sobre propriedade e merecem domínio preciso.</p>}
        />
      </section>
    </article>
  );
}
