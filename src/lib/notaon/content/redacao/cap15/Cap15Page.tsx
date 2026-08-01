"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 15</span>
          <h1>Direitos Humanos no ENEM</h1>
          <p>
            Entenda por que os direitos humanos são critério de nota zero, como usá-los
            positivamente como repertório, e como construir propostas de intervenção que
            respeitem e promovam os direitos fundamentais de todos os cidadãos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos críticos</span>
        <h2>1. Por que Direitos Humanos São Critério Eliminatório</h2>
        <p>
          A <strong>Competência 5</strong> do ENEM não avalia apenas se a proposta de
          intervenção é detalhada — avalia se ela <em>respeita os direitos humanos</em>.
          O Manual de Correção do ENEM estabelece que qualquer proposta que "fira a
          integridade física ou psicológica, viole a dignidade ou promova a discriminação"
          zera não só a Competência 5, mas pode resultar em <strong>nota zero na redação
          inteira</strong>. Isso não é hipotético: a cada ano, redações são anuladas por
          propor a tortura de criminosos, esterilização forçada ou punições que violam a
          dignidade humana.
        </p>
        <div className="lesson-highlight">
          <h3>A regra absoluta</h3>
          <p>
            Sua proposta de intervenção NUNCA pode violar os direitos à vida, à dignidade,
            à liberdade, à igualdade e à não-discriminação — mesmo que você acredite que a
            medida seja eficaz. O ENEM avalia se o candidato demonstra consciência ética,
            não apenas eficiência na solução.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 210" width="480" height="210" aria-label="Diagrama dos 6 pilares dos direitos humanos em torno da dignidade humana">
            <rect width="480" height="210" fill="#f8fafc" rx="12" />
            {/* Center circle */}
            <circle cx="240" cy="105" r="38" fill="#3b82f6" />
            <text x="240" y="100" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DIGNIDADE</text>
            <text x="240" y="113" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HUMANA</text>
            {/* Outer circles */}
            {/* Educação - top */}
            <circle cx="240" cy="30" r="26" fill="#10b981" />
            <text x="240" y="27" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Educação</text>
            <text x="240" y="40" textAnchor="middle" fill="white" fontSize="8">Art. 6º CF/88</text>
            <line x1="240" y1="56" x2="240" y2="67" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Saúde - top right */}
            <circle cx="390" cy="55" r="26" fill="#f59e0b" />
            <text x="390" y="52" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Saúde</text>
            <text x="390" y="65" textAnchor="middle" fill="white" fontSize="8">Art. 196 CF/88</text>
            <line x1="367" y1="67" x2="274" y2="83" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Igualdade - bottom right */}
            <circle cx="390" cy="155" r="26" fill="#8b5cf6" />
            <text x="390" y="152" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Igualdade</text>
            <text x="390" y="165" textAnchor="middle" fill="white" fontSize="8">Art. 5º CF/88</text>
            <line x1="367" y1="143" x2="274" y2="124" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Segurança - bottom */}
            <circle cx="240" cy="183" r="26" fill="#ef4444" />
            <text x="240" y="180" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Segurança</text>
            <text x="240" y="193" textAnchor="middle" fill="white" fontSize="8">Art. 5º CF/88</text>
            <line x1="240" y1="157" x2="240" y2="143" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Liberdade - bottom left */}
            <circle cx="90" cy="155" r="26" fill="#06b6d4" />
            <text x="90" y="152" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Liberdade</text>
            <text x="90" y="165" textAnchor="middle" fill="white" fontSize="8">Art. 5º CF/88</text>
            <line x1="113" y1="143" x2="206" y2="124" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Cultura - top left */}
            <circle cx="90" cy="55" r="26" fill="#f97316" />
            <text x="90" y="52" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Cultura</text>
            <text x="90" y="65" textAnchor="middle" fill="white" fontSize="8">Art. 215 CF/88</text>
            <line x1="113" y1="67" x2="206" y2="83" stroke="#94a3b8" strokeWidth="1.5" />
          </svg>
          <figcaption>Os seis pilares dos direitos fundamentais em torno da Dignidade Humana — todos ancorados na Constituição Federal de 1988.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Declaração Universal</span>
        <h2>2. O que são Direitos Humanos: a Declaração de 1948</h2>
        <p>
          A Declaração Universal dos Direitos Humanos foi adotada pela Assembleia Geral da ONU
          em 10 de dezembro de 1948, após os horrores da Segunda Guerra Mundial e do Holocausto.
          Seus 30 artigos consagram direitos civis, políticos, econômicos, sociais e culturais
          que pertencem a todo ser humano, independentemente de raça, religião, sexo,
          nacionalidade ou qualquer outra condição.
        </p>
        <div className="lesson-highlight">
          <h3>Os mais relevantes para o ENEM</h3>
          <p>
            Art. 1º — Todos os seres humanos nascem livres e iguais em dignidade e direitos. |
            Art. 3º — Todo indivíduo tem direito à vida, à liberdade e à segurança. |
            Art. 18 — Liberdade de pensamento, consciência e religião. |
            Art. 19 — Liberdade de opinião e expressão. |
            Art. 26 — Direito à educação.
          </p>
        </div>
        <p>
          A Declaração é um repertório poderoso na introdução ou no argumento: "A Declaração
          Universal dos Direitos Humanos de 1948, ao consagrar o direito à educação como um
          bem universal, estabeleceu o parâmetro pelo qual as nações são avaliadas em seu
          compromisso com a dignidade humana."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Principais direitos</span>
        <h2>3. Direitos que Mais Aparecem no ENEM</h2>
        <p>
          Certos direitos aparecem em praticamente todos os temas do ENEM. Conhecê-los
          permite usá-los tanto como repertório quanto como base da proposta de intervenção:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Direito fundamental</th>
                <th>Artigo CF/88</th>
                <th>Temas ENEM compatíveis</th>
                <th>Frase para PI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Educação</td>
                <td>Art. 6º e 205</td>
                <td>Analfabetismo, trabalho infantil, inclusão digital</td>
                <td>"...a fim de garantir o direito constitucional à educação de qualidade."</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>Art. 6º e 196</td>
                <td>Saúde mental, saneamento, acesso a medicamentos</td>
                <td>"...de modo a assegurar o direito à saúde previsto no artigo 196 da CF."</td>
              </tr>
              <tr>
                <td>Igualdade e não-discriminação</td>
                <td>Art. 5º, caput</td>
                <td>Racismo, gênero, LGBTQIA+, pessoa com deficiência</td>
                <td>"...visando à efetivação do princípio constitucional da igualdade."</td>
              </tr>
              <tr>
                <td>Liberdade de expressão</td>
                <td>Art. 5º, IV e IX</td>
                <td>Fake news, censura, mídia, liberdade de imprensa</td>
                <td>"...respeitando a garantia constitucional da liberdade de expressão."</td>
              </tr>
              <tr>
                <td>Dignidade humana</td>
                <td>Art. 1º, III</td>
                <td>Qualquer tema envolvendo violação de direitos</td>
                <td>"...assegurando o respeito à dignidade da pessoa humana."</td>
              </tr>
              <tr>
                <td>Cultura e acesso à arte</td>
                <td>Art. 215</td>
                <td>Inclusão cultural, diversidade, patrimônio histórico</td>
                <td>"...de modo a democratizar o acesso à cultura, direito fundamental previsto na CF."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas sensíveis</span>
        <h2>4. Temas Sensíveis: Como Argumentar sem Discriminar</h2>
        <p>
          Alguns temas do ENEM envolvem grupos historicamente marginalizados ou questões
          ideologicamente controversas. Nesses casos, a regra é: <strong>argumente sobre
          direitos, não sobre identidades</strong>. Isso significa que você não precisa
          tomar partido sobre questões religiosas ou morais — apenas deve garantir que sua
          proposta respeita a dignidade e os direitos de todos os grupos envolvidos.
        </p>
        <div className="lesson-highlight">
          <h3>Gênero e sexualidade</h3>
          <p>
            Não emita julgamentos morais sobre orientação sexual ou identidade de gênero.
            Foque em dados e direitos: violência, discriminação no mercado de trabalho,
            acesso à saúde. Proposta adequada: "...programas de conscientização nas escolas
            sobre respeito à diversidade, garantindo o direito de todos à vida digna."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Raça e etnia</h3>
          <p>
            Discuta dados concretos (IBGE, Atlas da Violência) e políticas públicas.
            Evite generalizações sobre grupos raciais. Proposta adequada: "...políticas de
            ações afirmativas que corrijam desigualdades históricas, respeitando o princípio
            da igualdade material."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Religião</h3>
          <p>
            O Brasil é um Estado laico (art. 19, CF/88). Nunca proponha intervenções baseadas
            em preceitos religiosos específicos. Proposta inadequada: "a solução é a valorização
            dos valores cristãos nas escolas públicas." Isso viola a laicidade do Estado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nota zero</span>
        <h2>5. Erros que Zeram a Nota por Violação de DH</h2>
        <p>
          A seguir, os tipos de proposta que garantem nota zero na Competência 5 e podem
          anular toda a redação. Estes são exemplos reais de erros identificados pelo ENEM:
        </p>
        <div className="lesson-highlight">
          <h3>Propostas que ANULAM a redação</h3>
          <p>
            "A solução é torturar criminosos para obter informações" — viola o direito à
            integridade física (art. 5º, III, CF/88). |
            "O governo deveria esterilizar compulsoriamente mulheres de baixa renda" — viola
            o direito à saúde, à liberdade e à dignidade. |
            "Deveríamos expulsar estrangeiros que cometam crimes" — pode configurar xenofobia
            e viola o princípio da não-discriminação. |
            "A solução é a pena de morte" — não viola os DH por si só (alguns países têm pena
            de morte), mas pode comprometer a nota se justificada de forma desumana.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Como identificar se uma proposta viola DH</h3>
          <p>
            Pergunte-se: "Essa proposta trata algum grupo humano como menos digno que
            outros? Ela viola o direito à vida, à liberdade ou à integridade física de
            alguém? Ela discrimina com base em raça, gênero, religião ou orientação
            sexual?" Se a resposta for sim a qualquer uma dessas perguntas, a proposta
            viola os DH e deve ser reescrita.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Na PI</span>
        <h2>6. Como Incluir Direitos Humanos na Proposta de Intervenção</h2>
        <p>
          Mencionar os direitos humanos explicitamente na proposta de intervenção é uma
          das estratégias mais eficazes para garantir nota máxima na Competência 5.
          Além de demonstrar consciência ética, a menção mostra que o candidato compreende
          que a solução proposta deve ser compatível com o Estado democrático de direito.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo de PI com menção a DH</h3>
          <p>
            "Cabe ao Estado [agente] implementar políticas públicas de conscientização
            e fiscalização [ação] por meio de campanhas nas escolas e em meios de comunicação
            [meio], com o objetivo de combater [finalidade] a violência doméstica,
            assegurando assim o direito constitucional à vida digna e à integridade física
            das mulheres [menção explícita a DH], em cumprimento ao artigo 5º da
            Constituição Federal de 1988."
          </p>
        </div>
        <p>
          Note que a menção a direitos humanos não precisa ser extensa — uma frase no
          final da PI que conecte a ação proposta a um direito fundamental já eleva
          significativamente a avaliação da Competência 5.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">DH como tese</span>
        <h2>7. A Perspectiva dos Direitos Humanos como Base da Tese</h2>
        <p>
          Os direitos humanos não servem apenas para a proposta de intervenção — eles
          podem estruturar a tese inteira da redação. Ao posicionar o problema do tema
          como uma violação de direitos fundamentais, o candidato estabelece uma
          perspectiva ética poderosa:
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo de tese baseada em DH</h3>
          <p>
            Tema: "Desafios para a inclusão de pessoas com deficiência no mercado de trabalho."
          </p>
          <p>
            Tese baseada em DH: "A exclusão de pessoas com deficiência do mercado de
            trabalho brasileiro representa uma violação sistemática do direito à igualdade
            e à participação social, consagrados tanto na Constituição Federal de 1988
            quanto na Convenção da ONU sobre os Direitos das Pessoas com Deficiência de
            2006 — tratado que o Brasil ratificou e tem obrigação de cumprir."
          </p>
        </div>
        <p>
          Essa tese é forte porque: (1) define o problema como violação de direito, não
          apenas como "situação difícil"; (2) cita dois instrumentos normativos relevantes;
          (3) cria uma obrigação estatal clara que sustentará os argumentos do desenvolvimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Os mais cobrados</span>
        <h2>8. Direitos que o ENEM Mais Cobra nas Redações</h2>
        <p>
          Baseado nos temas das últimas 15 edições do ENEM, estes são os direitos
          fundamentais mais frequentemente cobrados:
        </p>
        <ul>
          <li><strong>Educação de qualidade:</strong> presente em temas como analfabetismo, acesso à universidade, educação indígena, inclusão de PCD.</li>
          <li><strong>Saúde mental:</strong> fortemente presente nas edições recentes — depressão, burnout, suicídio entre jovens.</li>
          <li><strong>Igualdade de gênero:</strong> feminicídio, diferença salarial, sub-representação política, violência doméstica.</li>
          <li><strong>Acesso à cultura:</strong> democratização da cultura, patrimônio cultural, diversidade cultural brasileira.</li>
          <li><strong>Direitos da população negra:</strong> racismo estrutural, desigualdade racial, representatividade.</li>
          <li><strong>Direitos de migrantes e refugiados:</strong> crescente nas edições mais recentes.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Positivo vs. negativo</span>
        <h2>9. DH Positivo vs. DH Violado: Dois Papéis na Redação</h2>
        <p>
          Os direitos humanos podem aparecer na redação de dois modos:
        </p>
        <div className="lesson-highlight">
          <h3>Papel 1: Diagnóstico — o DH que está sendo violado</h3>
          <p>
            Nos parágrafos de desenvolvimento, o DH violado fundamenta o argumento:
            "O trabalho infantil viola sistematicamente o direito à educação e ao
            desenvolvimento saudável, consagrado tanto na Constituição Federal quanto
            no Estatuto da Criança e do Adolescente."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Papel 2: Solução — o DH que deve ser garantido</h3>
          <p>
            Na proposta de intervenção, o DH aparece como finalidade da ação proposta:
            "...de modo a assegurar o direito à educação e ao pleno desenvolvimento
            das crianças, eliminando a exploração que as priva de uma infância digna."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos contrastados</span>
        <h2>10. Redações Zeradas por DH vs. Redações que Usam DH Positivamente</h2>
        <div className="lesson-highlight">
          <h3>Exemplo de PI que ZERA por violação de DH</h3>
          <p>
            "Para combater a violência, o governo deveria implementar a pena de castração
            química compulsória para abusadores sexuais reincidentes, garantindo assim a
            segurança da sociedade." — Essa proposta viola o direito à integridade física
            e à dignidade humana. Nota zero na C5 e possível anulação da redação.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo de PI que usa DH positivamente e garante nota alta</h3>
          <p>
            "Para combater a violência sexual, cabe ao Poder Judiciário implementar medidas
            protetivas mais eficazes por meio de monitoramento eletrônico de condenados em
            liberdade condicional, com o objetivo de prevenir reincidências e garantir o
            direito à segurança e à integridade das vítimas, em respeito à dignidade humana
            consagrada no artigo 1º da Constituição Federal." — Proposta detalhada, eficaz
            e que respeita todos os DH envolvidos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Direitos Humanos no ENEM</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚠️</span>
            <h3>Critério eliminatório</h3>
            <p>Proposta que viola DH zera C5 e pode anular a redação inteira. É a linha vermelha absoluta.</p>
          </div>
          <div className="math-card">
            <span>📜</span>
            <h3>Declaração de 1948</h3>
            <p>30 artigos que garantem direitos universais — use como repertório de alto nível na introdução.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Constituição de 1988</h3>
            <p>Arts. 5º, 6º, 196, 205 e 215 são os mais úteis — memorize qual direito cada um garante.</p>
          </div>
          <div className="math-card">
            <span>✍️</span>
            <h3>DH na PI</h3>
            <p>Feche a PI com "...de modo a garantir o direito a..." — essa frase eleva a nota da C5.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>DH como tese</h3>
            <p>Enquadrar o problema como violação de DH desde a introdução cria uma tese ética e profunda.</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Estado laico</h3>
            <p>Nunca baseie propostas em valores religiosos específicos — violaria o art. 19 da CF/88.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O critério da Competência 5"
          statement={
            <p>
              A Competência 5 do ENEM pode atribuir nota zero a uma redação quando:
            </p>
          }
          options={[
            { letter: "a", text: "A proposta de intervenção não cita a Constituição Federal." },
            { letter: "b", text: "A proposta de intervenção viola os direitos humanos ao propor medidas que ferem a dignidade, a liberdade ou a integridade das pessoas.", correct: true },
            { letter: "c", text: "A proposta de intervenção tem apenas quatro elementos em vez de cinco." },
            { letter: "d", text: "A proposta de intervenção é muito curta e tem menos de três linhas." },
          ]}
          resolution={
            <p>
              O critério de nota zero na Competência 5 é a violação dos direitos humanos:
              propostas que propõem tortura, discriminação, tratamento desumano ou violação
              da dignidade de qualquer grupo resultam em nota zero nessa competência e podem
              anular a redação. Os demais erros (falta de elementos, brevidade) reduzem a
              nota, mas não a zeram.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Direito violado vs. direito garantido"
          statement={
            <p>
              Em uma redação sobre <strong>trabalho infantil</strong>, qual dos trechos a
              seguir usa os direitos humanos de forma produtiva?
            </p>
          }
          options={[
            { letter: "a", text: "'O trabalho infantil é um problema que afeta crianças, que deveriam estar nas escolas.'" },
            { letter: "b", text: "'O trabalho infantil viola sistematicamente o direito à educação e ao desenvolvimento pleno, consagrado no artigo 227 da Constituição Federal, que impõe à família, à sociedade e ao Estado o dever de proteger a criança contra toda forma de exploração.'", correct: true },
            { letter: "c", text: "'Devemos punir severamente os pais que colocam filhos para trabalhar, retirando a guarda das crianças sem processo judicial.'" },
            { letter: "d", text: "'As crianças que trabalham merecem admiração pela coragem de ajudar a família.'" },
          ]}
          resolution={
            <p>
              A alternativa B usa os direitos humanos de forma produtiva: (1) enquadra o
              problema como violação de DH ("viola sistematicamente o direito"), (2) cita
              o dispositivo constitucional específico (art. 227 CF), (3) distribui
              responsabilidades (família, sociedade e Estado). As demais alternativas são
              superficiais, violam DH (C) ou normalizam o problema (D).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. PI que viola DH"
          statement={
            <p>
              Uma candidata escreveu a seguinte proposta de intervenção para uma redação
              sobre segurança pública: "Para reduzir a violência nas cidades, o Estado deve
              autorizar que policiais atirem para matar em qualquer suspeito de crime,
              eliminando processos judiciais demorados que beneficiam criminosos." Essa
              proposta:
            </p>
          }
          options={[
            { letter: "a", text: "É válida, pois apresenta agente (Estado/policiais), ação (autorização para atirar) e finalidade (reduzir violência)." },
            { letter: "b", text: "Zera a Competência 5 por violar o direito ao devido processo legal, à presunção de inocência e à vida — direitos consagrados na CF/88 e na Declaração Universal de DH.", correct: true },
            { letter: "c", text: "É fraca, mas não zera a nota — apenas reduz a pontuação por falta de detalhamento." },
            { letter: "d", text: "É adequada, pois expressa uma opinião legítima sobre segurança pública." },
          ]}
          resolution={
            <p>
              Essa proposta viola múltiplos direitos fundamentais: o direito à vida (art. 5º,
              caput, CF), o direito ao devido processo legal (art. 5º, LIV, CF), a
              presunção de inocência (art. 5º, LVII, CF) e a vedação à execução sumária
              (direito internacional de DH). A proposta zera a Competência 5 e pode anular
              a redação inteira. O fato de ter agente e ação não salva uma PI que viola DH.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. DH como repertório na introdução"
          statement={
            <p>
              (Estilo ENEM) Uma candidata abriu sua redação sobre
              <strong> desigualdade no acesso à saúde mental</strong> com o seguinte trecho:
              "A Declaração Universal dos Direitos Humanos de 1948, ao consagrar o direito
              à saúde como um direito fundamental inalienável, estabeleceu o parâmetro
              pelo qual as nações devem ser avaliadas. No Brasil, entretanto, o acesso a
              serviços de saúde mental permanece um privilégio de poucos, revelando que o
              compromisso com a dignidade humana ainda não se traduziu em realidade para
              parcelas expressivas da população." Esse uso da Declaração é eficaz porque:
            </p>
          }
          options={[
            { letter: "a", text: "A Declaração Universal é o único repertório válido para temas de saúde no ENEM." },
            { letter: "b", text: "A candidata contextualiza historicamente o direito (1948), apresenta o princípio, e imediatamente conecta ao problema brasileiro com contraste temporal.", correct: true },
            { letter: "c", text: "O uso é inadequado porque a Declaração de 1948 não menciona saúde mental especificamente." },
            { letter: "d", text: "O trecho é muito longo e a candidata deveria ter usado apenas a frase sobre o problema brasileiro." },
          ]}
          resolution={
            <p>
              O trecho exemplifica uso produtivo de DH como repertório: (1) contextualiza
              historicamente (1948), (2) extrai o princípio relevante (direito à saúde),
              (3) cria um contraste poderoso entre o ideal universal e a realidade
              brasileira. Essa estrutura "padrão internacional → falha nacional" é uma
              das mais eficazes para introduções de redação ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Construção de PI respeitosa"
          statement={
            <p>
              (Estilo ENEM) Para uma redação sobre
              <strong> violência contra a população LGBTQIA+</strong>, qual das propostas
              de intervenção a seguir é mais adequada?
            </p>
          }
          options={[
            { letter: "a", text: "'Cabe ao Estado criminalizar a homossexualidade, protegendo os valores tradicionais da família.'", correct: false },
            { letter: "b", text: "'Cabe ao Ministério da Educação implementar, em escolas públicas e privadas, programas de educação para o respeito à diversidade, com o objetivo de combater o preconceito estrutural, assegurando o direito à vida digna e à não-discriminação, garantido pelo artigo 5º da Constituição Federal.'", correct: true },
            { letter: "c", text: "'As pessoas LGBTQIA+ deveriam se comportar de forma menos visível para evitar provocações e reduzir a violência contra elas.'", correct: false },
            { letter: "d", text: "'O Estado deveria criar bairros separados para a população LGBTQIA+, garantindo sua segurança.'", correct: false },
          ]}
          resolution={
            <p>
              A alternativa B é a única que respeita os DH e apresenta todos os elementos
              da PI: agente (Ministério da Educação), ação (programas de educação para
              o respeito), meio (escolas), finalidade (combater preconceito), e menção
              explícita a DH (art. 5º da CF). As demais violam os DH de formas variadas:
              A criminaliza orientação sexual; C culpabiliza as vítimas; D segrega, o que
              é discriminatório e histórica e eticamente inaceitável.
            </p>
          }
        />
      </section>
    </article>
  );
}
