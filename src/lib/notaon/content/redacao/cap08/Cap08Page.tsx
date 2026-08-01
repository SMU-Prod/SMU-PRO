"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 8</span>
          <h1>Proposta de Intervenção Completa</h1>
          <p>
            A Proposta de Intervenção (PI) vale 200 dos 1000 pontos e é o elemento mais
            técnico da redação ENEM. Aprenda a construí-la com os cinco elementos obrigatórios,
            escolher os agentes certos e garantir que ela respeite os direitos humanos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Importância Estratégica</span>
        <h2>1. Por que a PI Vale 200 Pontos e é Decisiva</h2>
        <p>
          A Competência 5 — que avalia a proposta de intervenção — vale <strong>200 dos 1000
          pontos</strong> possíveis na redação ENEM. É a única competência cujo elemento
          principal (a PI) tem localização fixa obrigatória (parágrafo de conclusão), estrutura
          mínima estabelecida (cinco elementos) e condição automática de zero (violação de
          direitos humanos ou ausência total).
        </p>
        <p>
          A PI é também onde candidatos com boa escrita e bons argumentos frequentemente
          perdem pontos desnecessários. Não por falta de conteúdo, mas por não saberem
          estruturar a proposta com todos os elementos exigidos. Um candidato que escreve
          uma PI completa e bem articulada pode ter C5 = 200 mesmo com notas menores em
          outras competências.
        </p>
        <div className="lesson-highlight">
          <h3>O que o corretor procura em C5</h3>
          <p>
            O corretor avalia: (1) existe proposta? (2) tem agente específico? (3) especifica
            como será feito? (4) indica a finalidade? (5) aponta o efeito esperado?
            (6) respeita os direitos humanos? Um "sim" para todas = C5 máxima.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erro Mais Comum</span>
        <h2>2. O Erro Mais Comum: PI Genérica sem Especificidade</h2>
        <p>
          O erro mais frequente na C5 é apresentar uma proposta genérica que poderia ser
          usada em qualquer tema. Exemplos de PIs que rendem no máximo C5 = 80:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>PI genérica (40–80 em C5)</th><th>O que falta</th><th>PI específica (160–200 em C5)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>"O governo deve resolver o problema"</td>
                <td>Tudo — qual governo? Como? Para quê? Efeito?</td>
                <td>"O Congresso Nacional deve regulamentar [ação específica] por meio de [instrumento], com o objetivo de [finalidade], [efeito]"</td>
              </tr>
              <tr>
                <td>"A sociedade deve mudar"</td>
                <td>Agente específico, modo, finalidade e efeito</td>
                <td>"As escolas devem implementar [programa específico] por meio de [como], para que [resultado concreto]"</td>
              </tr>
              <tr>
                <td>"É necessário conscientizar a população"</td>
                <td>Agente específico, instrumento detalhado e efeito mensurável</td>
                <td>"O Ministério da Saúde deve promover campanha nacional [sobre o tema] via [plataformas específicas], com o objetivo de [finalidade], reduzindo [dado ou fenômeno específico]"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agentes</span>
        <h2>3. Agentes Válidos e Inválidos: Tabela Completa</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Agente</th><th>Válido?</th><th>Tipo de ação mais adequada</th><th>Por que funciona/não funciona</th></tr>
            </thead>
            <tbody>
              <tr><td>Governo federal (genérico)</td><td>Parcialmente</td><td>Qualquer política pública</td><td>Válido mas vago — melhor especificar o Ministério</td></tr>
              <tr><td>Ministério da Educação (MEC)</td><td>Sim</td><td>Currículos, programas escolares, formação de professores</td><td>Específico e responsável pela área educacional</td></tr>
              <tr><td>Congresso Nacional</td><td>Sim</td><td>Legislação, regulamentação, fiscalização</td><td>Poder responsável por leis nacionais</td></tr>
              <tr><td>Ministério da Saúde / SUS</td><td>Sim</td><td>Saúde pública, campanhas sanitárias, CAPS</td><td>Órgão responsável pela política de saúde</td></tr>
              <tr><td>Municípios / Prefeituras</td><td>Sim</td><td>Serviços locais, CRAS, CREAS, creches, habitação</td><td>Responsáveis por serviços de assistência social</td></tr>
              <tr><td>ONGs / Sociedade civil</td><td>Sim</td><td>Campanhas, mobilização social, atendimento comunitário</td><td>Atores relevantes em questões de direitos humanos</td></tr>
              <tr><td>Empresa / Setor privado</td><td>Sim</td><td>Diversidade, inclusão, responsabilidade social</td><td>Válido quando a ação é de competência corporativa</td></tr>
              <tr><td>Escola / Professores</td><td>Sim</td><td>Educação preventiva, acolhimento, currículo</td><td>Agente local com impacto direto nos estudantes</td></tr>
              <tr><td>Família</td><td>Sim (com limitações)</td><td>Valores, suporte emocional, educação informal</td><td>Válido como agente complementar; fraco como único agente para problemas estruturais</td></tr>
              <tr><td>"Todos nós"</td><td>Não</td><td>—</td><td>Muito genérico; sem responsabilidade específica</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Múltiplas Propostas</span>
        <h2>4. Quando e Como Apresentar Mais de uma PI</h2>
        <p>
          O ENEM não exige múltiplas propostas — uma PI completa já garante C5 máxima.
          Porém, apresentar duas PIs com agentes diferentes pode demonstrar visão sistêmica
          e elevar a nota, desde que ambas sejam desenvolvidas com os cinco elementos.
          Nunca apresente duas PIs incompletas — é melhor uma completa do que duas rascunhadas.
        </p>
        <p>
          Modelo de duas PIs encadeadas para o tema "desigualdade racial":
        </p>
        <div className="lesson-highlight">
          <h3>Template de duas PIs</h3>
          <p>
            "Diante desse panorama, é necessário que [agente 1 — estado] [ação 1] por meio
            de [modo 1], com o objetivo de [finalidade 1], [efeito 1]. Paralelamente, cabe
            a [agente 2 — escola/empresa] [ação 2] mediante [modo 2], visando a [finalidade 2]
            e, assim, [efeito 2 — síntese do impacto social esperado]."
          </p>
        </div>
        <p>
          A conjunção de coordenação "Paralelamente" ou "Concomitantemente" é ideal para
          unir as duas propostas sem tornar o texto repetitivo. Cada PI deve ter agente
          distinto e ação diferenciada.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos Humanos</span>
        <h2>5. PI e Direitos Humanos: Garantir que a Proposta é Ética</h2>
        <p>
          A proposta de intervenção deve ser avaliada à luz dos princípios da Declaração
          Universal dos Direitos Humanos (1948) e da Constituição Federal de 1988. Qualquer
          proposta que viole esses princípios — mesmo que bem estruturada nos cinco elementos
          — zera automaticamente a C5.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Princípio violado</th><th>Exemplo de PI inválida</th><th>PI válida alternativa</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Direito à vida</td>
                <td>"Pena de morte para traficantes reincidentes"</td>
                <td>"Ampliar programas de reintegração social para egressos do sistema prisional"</td>
              </tr>
              <tr>
                <td>Direito à não-discriminação</td>
                <td>"Proibir imigrantes de acessar serviços públicos de saúde"</td>
                <td>"Criar centros de acolhimento e integração para refugiados e imigrantes"</td>
              </tr>
              <tr>
                <td>Direito à liberdade religiosa</td>
                <td>"Proibir religiões de matriz africana nas escolas públicas"</td>
                <td>"Incluir conteúdo sobre pluralidade religiosa nos currículos escolares"</td>
              </tr>
              <tr>
                <td>Direito à integridade física</td>
                <td>"Autorizar castigo físico de crianças em casos de indisciplina escolar"</td>
                <td>"Implementar práticas restaurativas de disciplina positiva nas escolas"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Dica prática: antes de escrever sua PI, pergunte-se — "essa proposta
          <em> aumenta</em> ou <em>restringe</em> os direitos de alguém?" Se restringe
          direitos de qualquer grupo, reformule. Uma boa PI sempre amplia direitos e
          oportunidades.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Árvore de Decisão</span>
        <h2>6. Árvore de Decisão: Escolhendo o Agente Certo</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 260" width="520" height="260" aria-label="Árvore de decisão para escolha do agente da proposta de intervenção">
            <defs>
              <marker id="arr8" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#6366f1" />
              </marker>
            </defs>
            {/* Raiz */}
            <rect x="185" y="10" width="150" height="30" rx="15" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="260" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3730a3">Qual é o problema?</text>
            {/* Social */}
            <line x1="215" y1="40" x2="100" y2="80" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr8)" />
            <text x="130" y="70" fontSize="9" fill="#6366f1">Social/saúde</text>
            <rect x="30" y="82" width="120" height="28" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="90" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">SUS / Ministério</text>
            <text x="90" y="112" textAnchor="middle" fontSize="9" fill="#065f46">da Saúde / CRAS</text>
            {/* Educação */}
            <line x1="245" y1="40" x2="185" y2="80" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr8)" />
            <text x="195" y="70" fontSize="9" fill="#6366f1">Educação</text>
            <rect x="140" y="82" width="100" height="28" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="190" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">MEC / Escolas /</text>
            <text x="190" y="112" textAnchor="middle" fontSize="9" fill="#1e40af">Professores</text>
            {/* Legal */}
            <line x1="275" y1="40" x2="340" y2="80" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr8)" />
            <text x="320" y="70" fontSize="9" fill="#6366f1">Legal/regulação</text>
            <rect x="260" y="82" width="130" height="28" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="325" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">Congresso Nacional</text>
            <text x="325" y="112" textAnchor="middle" fontSize="9" fill="#92400e">/ STF / Ministérios</text>
            {/* Cultural */}
            <line x1="305" y1="40" x2="430" y2="80" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr8)" />
            <text x="390" y="70" fontSize="9" fill="#6366f1">Cultural</text>
            <rect x="385" y="82" width="120" height="28" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="445" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9d174d">Mídia / ONGs /</text>
            <text x="445" y="112" textAnchor="middle" fontSize="9" fill="#9d174d">Setor privado</text>
            {/* Segunda linha - modos */}
            <text x="260" y="155" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">Escolha o MODO correspondente:</text>
            <rect x="10" y="165" width="115" height="30" rx="5" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
            <text x="67" y="185" textAnchor="middle" fontSize="9" fill="#166534">campanhas, CAPS, CRAS, programas de saúde</text>
            <rect x="140" y="165" width="115" height="30" rx="5" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <text x="197" y="185" textAnchor="middle" fontSize="9" fill="#1e3a8a">formação docente, currículo, bolsas</text>
            <rect x="270" y="165" width="120" height="30" rx="5" fill="#fffbeb" stroke="#fde68a" strokeWidth="1" />
            <text x="330" y="185" textAnchor="middle" fontSize="9" fill="#78350f">legislação, fiscalização, sanções</text>
            <rect x="405" y="165" width="100" height="30" rx="5" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />
            <text x="455" y="185" textAnchor="middle" fontSize="9" fill="#881337">campanhas midiáticas, fóruns</text>
            {/* Efeito */}
            <rect x="100" y="210" width="320" height="30" rx="8" fill="#1e1b4b" />
            <text x="260" y="230" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">EFEITO sempre: "reduzindo X / garantindo Y / fortalecendo Z"</text>
          </svg>
          <figcaption>Árvore de decisão: tipo de problema → agente → modo → efeito</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Banco de Ações</span>
        <h2>7. Banco de Agentes e Verbos de Ação</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Agente</th><th>Verbos de ação adequados</th></tr>
            </thead>
            <tbody>
              <tr><td>Congresso Nacional</td><td>regulamentar, legislar, aprovar, criar lei, reformar, fiscalizar</td></tr>
              <tr><td>Ministério da Educação</td><td>implementar, reformular, ampliar, incluir no currículo, capacitar, criar programa</td></tr>
              <tr><td>Ministério da Saúde</td><td>ampliar rede, implementar, financiar, criar protocolo, capacitar profissionais</td></tr>
              <tr><td>Municípios/Prefeituras</td><td>criar, instalar, ampliar, financiar, promover, oferecer</td></tr>
              <tr><td>ONGs / Sociedade civil</td><td>promover, articular, mobilizar, capacitar, apoiar, disseminar</td></tr>
              <tr><td>Empresas</td><td>adotar, implementar, criar programa, estabelecer metas, financiar, contratar</td></tr>
              <tr><td>Família / Comunidade</td><td>participar, apoiar, dialogar, acompanhar, estimular</td></tr>
              <tr><td>Mídia</td><td>promover, veicular, combater, desmistificar, conscientizar, cobrir</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Banco de Modos</span>
        <h2>8. Banco de Modos: Instrumentos de Intervenção</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de modo</th><th>Exemplos de frases</th></tr>
            </thead>
            <tbody>
              <tr><td>Políticas públicas</td><td>"por meio de políticas públicas de [área]", "mediante programa nacional de [tema]"</td></tr>
              <tr><td>Legislação</td><td>"por meio de legislação específica", "mediante regulamentação", "através de emenda constitucional"</td></tr>
              <tr><td>Campanhas</td><td>"por meio de campanhas de conscientização", "mediante campanhas nas redes sociais e escolas"</td></tr>
              <tr><td>Formação profissional</td><td>"por meio de formação continuada de professores", "mediante capacitação de [profissionais]"</td></tr>
              <tr><td>Parcerias</td><td>"por meio de parcerias público-privadas", "mediante convênios com ONGs especializadas"</td></tr>
              <tr><td>Infraestrutura</td><td>"mediante investimento em infraestrutura de [área]", "por meio de obras de [tipo]"</td></tr>
              <tr><td>Inclusão curricular</td><td>"por meio da inclusão de [conteúdo] nos currículos escolares", "mediante disciplina optativa sobre [tema]"</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Progressão de Qualidade</span>
        <h2>9. PI em Três Níveis: Básico, Intermediário, Completo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nível</th><th>Exemplo de PI</th><th>Elementos presentes</th><th>Nota estimada em C5</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Básico</strong></td>
                <td>"O governo deve resolver o problema da saúde mental."</td>
                <td>Agente vago, ação vaga, sem modo, sem finalidade, sem efeito</td>
                <td>40–80</td>
              </tr>
              <tr>
                <td><strong>Intermediário</strong></td>
                <td>"O Ministério da Saúde deve ampliar os serviços de saúde mental para jovens, com o objetivo de reduzir o sofrimento psíquico."</td>
                <td>Agente específico, ação, finalidade — sem modo e efeito</td>
                <td>120–160</td>
              </tr>
              <tr>
                <td><strong>Completo</strong></td>
                <td>"Faz-se necessário que o Ministério da Saúde amplie a rede CAPS Infanto-Juvenil por meio de investimento federal em novas unidades nos municípios com mais de 50 mil habitantes, com o objetivo de oferecer atendimento especializado a crianças e adolescentes em sofrimento psíquico, reduzindo o índice de automutilação e suicídio juvenil no Brasil."</td>
                <td>Todos os 5 elementos presentes: ação + agente + modo + finalidade + efeito</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas ENEM</span>
        <h2>10. PIs Modelo para Temas ENEM 2018–2023</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ano</th><th>Tema</th><th>PI modelo completa</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>2018</td>
                <td>Manipulação de dados do usuário</td>
                <td>"Faz-se necessário que o Congresso Nacional regulamente o uso de dados pessoais por plataformas digitais por meio de legislação específica alinhada à LGPD, com o objetivo de proteger a privacidade dos usuários, reduzindo a manipulação comportamental por algoritmos de desinformação."</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Democratização do cinema</td>
                <td>"É necessário que o Ministério da Cultura amplie o programa Cinema Perto de Você por meio de parcerias com prefeituras para instalar salas em municípios sem cinemas, com o objetivo de democratizar o acesso à cultura audiovisual, reduzindo as desigualdades regionais no consumo de bens culturais."</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>Estigma das doenças mentais</td>
                <td>"Cabe ao Ministério da Saúde promover campanha nacional de desmistificação dos transtornos mentais por meio de parceria com redes sociais e escolas, com o objetivo de combater o estigma cultural, encorajando a busca por tratamento e reduzindo o isolamento social dos pacientes."</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>Invisibilidade e registro civil</td>
                <td>"Faz-se necessário que o CNJ implemente o programa de registro civil móvel em comunidades indígenas e quilombolas por meio de cartórios itinerantes, com o objetivo de garantir o direito à identidade a todos os cidadãos, reduzindo a exclusão jurídica de populações territorialmente isoladas."</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>Povos tradicionais</td>
                <td>"É imperativo que a FUNAI, em parceria com o STF, acelere os processos de demarcação de terras indígenas por meio de equipes técnicas ampliadas e desburocratizadas, com o objetivo de garantir a segurança territorial dos povos indígenas, preservando sua cultura e reduzindo os conflitos fundiários no país."</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>Trabalho de cuidado feminino</td>
                <td>"Faz-se necessário que o Congresso Nacional regulamente o Fundo de Apoio ao Cuidado mediante aprovação do PL do Cuidado, com o objetivo de reconhecer e remunerar parcialmente o trabalho doméstico não remunerado, reduzindo a pobreza feminina e promovendo a equidade de gênero no mercado de trabalho."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🏗️</span>
            <h3>5 elementos</h3>
            <p>Ação + Agente + Modo + Finalidade + Efeito — todos necessários para 200 em C5</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Agente específico</h3>
            <p>Não "o governo" — especifique: MEC, SUS, Congresso, prefeitura, ONGs</p>
          </div>
          <div className="math-card">
            <span>🔧</span>
            <h3>Modo detalhado</h3>
            <p>"por meio de [instrumento concreto]" — não "de alguma forma"</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Respeito a direitos</h3>
            <p>PI que viola dignidade humana = C5 zero automático</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Efeito mensurável</h3>
            <p>"reduzindo X / garantindo Y" — resultado concreto na sociedade</p>
          </div>
          <div className="math-card">
            <span>✍️</span>
            <h3>Uma PI completa</h3>
            <p>Melhor que duas PIs incompletas — qualidade acima de quantidade</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificar a PI com todos os 5 elementos"
          statement={
            <p>
              Qual das alternativas apresenta a Proposta de Intervenção mais completa, com
              todos os cinco elementos?
            </p>
          }
          options={[
            { letter: "a", text: "'O governo deve investir em educação para melhorar o Brasil.'" },
            { letter: "b", text: "'As escolas precisam ensinar mais sobre meio ambiente.'" },
            { letter: "c", text: "'Faz-se necessário que o MEC inclua educação ambiental como componente curricular obrigatório por meio de formação de professores nas redes municipais, com o objetivo de conscientizar os jovens sobre a crise climática, reduzindo comportamentos prejudiciais ao meio ambiente e formando cidadãos comprometidos com a sustentabilidade.'", correct: true },
            { letter: "d", text: "'É necessário que a sociedade se conscientize sobre os problemas ambientais e passe a adotar práticas mais sustentáveis no dia a dia.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. Análise dos elementos:
              <strong>Ação</strong> = incluir educação ambiental como componente curricular;
              <strong>Agente</strong> = MEC (Ministério da Educação);
              <strong>Modo</strong> = por meio de formação de professores nas redes municipais;
              <strong>Finalidade</strong> = com o objetivo de conscientizar os jovens sobre a
              crise climática;
              <strong>Efeito</strong> = reduzindo comportamentos prejudiciais e formando
              cidadãos comprometidos. Todas as demais alternativas são vagas e carecem de
              pelo menos três dos cinco elementos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Completar os elementos ausentes na PI"
          statement={
            <p>
              A PI parcial: <em>"O Ministério da Educação deve criar programas de combate
              ao bullying nas escolas para reduzir a violência entre estudantes."</em>
              Quais elementos estão presentes e quais estão ausentes?
            </p>
          }
          options={[
            { letter: "a", text: "Presentes: ação, agente, finalidade. Ausentes: modo ('por meio de') e efeito mais específico além de 'reduzir a violência'.", correct: true },
            { letter: "b", text: "Presentes: todos os cinco elementos — a PI está completa." },
            { letter: "c", text: "Presentes: agente e finalidade. Ausentes: ação específica, modo e efeito." },
            { letter: "d", text: "A PI está incorreta porque 'bullying' não é tema específico do ENEM." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. A PI tem:
              <strong>Ação</strong> = criar programas de combate ao bullying (presente);
              <strong>Agente</strong> = Ministério da Educação (presente);
              <strong>Modo</strong> = ausente — não especifica como os programas serão
              criados ou implementados (por capacitação de professores? por parceria com
              psicólogos escolares?);
              <strong>Finalidade</strong> = implícita ("para reduzir a violência");
              <strong>Efeito</strong> = vago ("reduzir a violência entre estudantes" poderia
              ser mais específico: "reduzindo o abandono escolar por vítimas de bullying e
              promovendo um ambiente escolar inclusivo"). Para completar, acrescentar: "por
              meio de capacitação docente em práticas restaurativas, com o objetivo de
              desenvolver empatia e resolução de conflitos nos estudantes".
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escrever duas PIs para violência contra idosos"
          statement={
            <p>
              Para o tema <em>"Violência contra idosos no Brasil"</em>, qual alternativa
              apresenta DUAS propostas de intervenção completas com agentes diferentes?
            </p>
          }
          options={[
            { letter: "a", text: "PI 1: 'O governo deve proteger os idosos.' PI 2: 'As famílias devem ser mais cuidadosas com os mais velhos.'" },
            { letter: "b", text: "PI 1: 'É necessário que o Congresso Nacional regulamente o Estatuto do Idoso com penalidades mais severas para crimes contra pessoas acima de 60 anos por meio de PEC específica, com o objetivo de inibir a violência patrimonial e física, reduzindo a impunidade.' PI 2: 'Cabe ao Ministério da Saúde ampliar a rede de atendimento geriátrico por meio de unidades especializadas no SUS, visando a diagnosticar vítimas de violência doméstica silenciosa, garantindo assistência integral ao idoso vulnerável.'", correct: true },
            { letter: "c", text: "PI 1: 'Que a sociedade respeite mais os idosos.' PI 2: 'Que as empresas não discriminem trabalhadores idosos.'" },
            { letter: "d", text: "PI única: 'O governo federal deve criar uma lei especial de proteção aos idosos com multas para agressores, punindo quem maltratar pessoas com mais de 60 anos.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Cada PI contém todos os cinco
              elementos e os agentes são diferentes:
              <strong>PI 1 (Congresso)</strong> — Ação: regulamentar com penalidades mais
              severas; Agente: Congresso Nacional; Modo: via PEC específica; Finalidade:
              inibir a violência patrimonial; Efeito: reduzindo a impunidade.
              <strong>PI 2 (Ministério da Saúde)</strong> — Ação: ampliar rede de atendimento
              geriátrico; Agente: Ministério da Saúde; Modo: unidades especializadas no SUS;
              Finalidade: diagnosticar vítimas de violência silenciosa; Efeito: garantindo
              assistência integral. As demais alternativas são genéricas ou incompletas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM 2019 — PI respeitando direitos de propriedade intelectual"
          statement={
            <p>
              Para o tema ENEM 2019 <em>"Democratização do acesso ao cinema no Brasil"</em>,
              um candidato propôs: <em>"Criar plataformas de streaming gratuitas com todo
              o acervo do cinema nacional para que todos os brasileiros possam assistir
              filmes sem pagar."</em> Por que essa PI pode ser problemática?
            </p>
          }
          options={[
            { letter: "a", text: "Não é problemática — é uma proposta válida e respeitosa que resolve o problema de acesso.", correct: false },
            { letter: "b", text: "É problemática pois viola direitos de propriedade intelectual dos produtores e realizadores cinematográficos ao disponibilizar conteúdo sem remuneração aos criadores, o que pode ser interpretado como violação de direitos autorais.", correct: true },
            { letter: "c", text: "É problemática apenas porque falta o modo ('como criar') e o efeito ('resultado esperado')." },
            { letter: "d", text: "É problemática porque streaming não é cinema — o acesso ao cinema exige salas físicas." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Disponibilizar obras cinematográficas
              gratuitamente sem remuneração aos realizadores pode violar os direitos autorais
              dos produtores, diretores e roteiristas — direitos protegidos pela Constituição
              (Art. 5º, XXVII e XXVIII) e pela Lei 9.610/98. Uma PI mais adequada seria:
              "que o Ministério da Cultura negocie acordos de licenciamento subsidiado com
              produtoras por meio de fundo público de acesso cultural, com o objetivo de
              disponibilizar o cinema nacional a preços acessíveis, democratizando o consumo
              sem prejudicar a cadeia criativa do audiovisual brasileiro."
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Família como agente para combater racismo estrutural"
          statement={
            <p>
              Um candidato usou "a família" como agente único na PI para o tema "racismo
              estrutural no Brasil": <em>"É necessário que as famílias eduquem seus filhos
              com valores de igualdade racial para combater o racismo."</em> Essa PI é
              adequada? Sugira melhoria com agente mais apropriado.
            </p>
          }
          options={[
            { letter: "a", text: "Sim, é adequada — a família é o agente mais importante na formação de valores e no combate ao racismo." },
            { letter: "b", text: "É parcialmente adequada como PI complementar, mas insuficiente como única proposta para um problema estrutural; o Estado deve ser o agente principal com ação em políticas afirmativas e educação formal.", correct: true },
            { letter: "c", text: "Não é adequada — a família não pode ser agente da PI em nenhuma circunstância no ENEM." },
            { letter: "d", text: "É adequada, mas precisa apenas especificar o modo ('por meio de conversas em casa') para ser completa." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A família pode ser agente complementar
              em PIs, mas é inadequada como <em>único</em> agente para problemas estruturais
              como o racismo, pois: (1) o racismo estrutural se reproduz nas instituições —
              escolas, empresas, judiciário, polícia —, não apenas na família; (2) confiar à
              família a responsabilidade de combater um fenômeno sistêmico é insuficiente e
              pode ser percebido como individualização de um problema coletivo.
              Uma PI mais forte: "Faz-se necessário que o Ministério da Educação implemente
              a Lei 10.639/2003 de forma efetiva por meio de formação docente em história e
              cultura afro-brasileira em todas as redes públicas, com o objetivo de desenvolver
              uma consciência antirracista nas novas gerações, reduzindo a discriminação racial
              institucional."
            </p>
          }
        />
      </section>
    </article>
  );
}
