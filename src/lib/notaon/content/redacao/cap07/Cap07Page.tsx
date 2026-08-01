"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 7</span>
          <h1>Construção da Conclusão</h1>
          <p>
            A conclusão é o parágrafo mais estratégico da redação ENEM: nela estão 200 dos
            1000 pontos possíveis. Aprenda a retomar a tese com elegância e a construir uma
            proposta de intervenção completa e coerente com todos os cinco elementos exigidos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função</span>
        <h2>1. Função da Conclusão: Retomar e Propor</h2>
        <p>
          A conclusão do texto dissertativo-argumentativo do ENEM tem dois objetivos
          obrigatórios: (1) <strong>retomar a tese</strong> — sintetizar os argumentos
          desenvolvidos e reafirmar o posicionamento da introdução, com outras palavras;
          (2) <strong>apresentar a proposta de intervenção</strong> — uma solução concreta
          para o problema discutido, respeitando os direitos humanos e incluindo todos os
          cinco elementos avaliados pela C5.
        </p>
        <p>
          A conclusão não deve trazer argumentos novos. Ela encerra o texto de forma
          coerente, mostrando que o candidato chegou a uma conclusão lógica a partir do
          que foi argumentado. A proposta de intervenção é o elemento mais técnico da
          redação — ela pode ser a diferença entre uma nota 800 e uma nota 1000.
        </p>
        <div className="lesson-highlight">
          <h3>Tamanho e proporção</h3>
          <p>
            A conclusão deve ter entre <strong>5 e 7 linhas</strong>. Conclusões muito curtas
            (2–3 linhas) não conseguem incluir a PI completa com todos os cinco elementos.
            Conclusões muito longas (acima de 8 linhas) podem parecer desproporcionais em
            relação ao restante do texto. Distribua: 2 linhas para retomada + 4–5 linhas
            para PI completa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>2. Estrutura da Conclusão: Retomada + PI Completa</h2>
        <p>
          A estrutura ideal da conclusão segue este modelo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parte</th><th>Conteúdo</th><th>Linhas</th><th>Conectivo de início</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Retomada da tese</strong></td>
                <td>Síntese dos argumentos + reafirmação do posicionamento (sem copiar a tese da introdução)</td>
                <td>2 linhas</td>
                <td>"Depreende-se, portanto..." / "Infere-se, diante do exposto..." / "Conclui-se, assim..."</td>
              </tr>
              <tr>
                <td><strong>Proposta de Intervenção</strong></td>
                <td>Solução concreta com 5 elementos: Ação + Agente + Modo + Finalidade + Efeito</td>
                <td>4–5 linhas</td>
                <td>"Para tanto..." / "Faz-se necessário, portanto..." / "A fim de solucionar..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Os 5 Elementos</span>
        <h2>3. Os 5 Elementos da Proposta Completa</h2>
        <p>
          A proposta de intervenção avaliada pela C5 precisa ter cinco elementos para receber
          nota máxima. Cada elemento ausente reduz a nota em 40 pontos (de 200 para 160, de
          160 para 120, etc.).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>O que é</th><th>Pergunta que responde</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ação</strong></td>
                <td>O que vai ser feito — verbo no infinitivo</td>
                <td>O que?</td>
                <td>implementar, criar, promover, ampliar, fiscalizar, desenvolver, regulamentar</td>
              </tr>
              <tr>
                <td><strong>Agente</strong></td>
                <td>Quem vai executar a ação</td>
                <td>Quem?</td>
                <td>Ministério da Educação, ONGs, municípios, escolas, empresas, família, Congresso Nacional</td>
              </tr>
              <tr>
                <td><strong>Modo</strong></td>
                <td>Como vai ser feito — instrumento/meio</td>
                <td>Como?</td>
                <td>por meio de campanhas, mediante legislação, através de parcerias público-privadas, via programas sociais</td>
              </tr>
              <tr>
                <td><strong>Finalidade</strong></td>
                <td>Para que — objetivo da ação</td>
                <td>Para quê?</td>
                <td>com o objetivo de, para que, a fim de, com a intenção de</td>
              </tr>
              <tr>
                <td><strong>Efeito</strong></td>
                <td>Resultado esperado — o que muda na sociedade</td>
                <td>Qual o resultado?</td>
                <td>reduzindo a desigualdade, garantindo o acesso, promovendo a inclusão, fortalecendo os direitos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ação</span>
        <h2>4. O Elemento Ação: Verbos Específicos e Concretos</h2>
        <p>
          A ação deve ser um <strong>verbo no infinitivo</strong> que especifica claramente o
          que será feito. Evite verbos vagos como "resolver", "melhorar" ou "combater" sem
          complemento. Prefira verbos que descrevem ações concretas e mensuráveis.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Verbo vago (evite)</th><th>Ação concreta (prefira)</th></tr>
            </thead>
            <tbody>
              <tr><td>Resolver o problema</td><td>Implementar programa de capacitação profissional</td></tr>
              <tr><td>Melhorar a educação</td><td>Ampliar a oferta de creches públicas em municípios periféricos</td></tr>
              <tr><td>Combater a violência</td><td>Criar casas de acolhimento para mulheres em situação de risco</td></tr>
              <tr><td>Ajudar as pessoas</td><td>Regulamentar o trabalho doméstico remunerado, garantindo direitos trabalhistas</td></tr>
              <tr><td>Mudar a mentalidade</td><td>Desenvolver currículos escolares que incluam educação em gênero e diversidade</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agente</span>
        <h2>5. O Elemento Agente: Quem Pode Executar a Proposta</h2>
        <p>
          O agente é o ator social responsável por executar a ação. Deve ser <strong>específico</strong>
          — não apenas "o governo", mas qual esfera ou órgão. A escolha do agente deve ser
          coerente com o tipo de problema e com o tipo de ação proposta.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Agente</th><th>Tipo de ação mais adequada</th><th>Exemplo de PI</th></tr>
            </thead>
            <tbody>
              <tr><td>Ministério da Educação</td><td>Currículos, programas escolares, formação de professores</td><td>"...que o MEC implante formação docente em educação socioemocional..."</td></tr>
              <tr><td>Ministério da Saúde / SUS</td><td>Políticas de saúde pública, campanhas, unidades de atendimento</td><td>"...que o SUS amplie a rede CAPS para cidades de médio porte..."</td></tr>
              <tr><td>Congresso Nacional</td><td>Legislação, regulamentação, políticas públicas nacionais</td><td>"...que o Congresso regulamente o algoritmo das plataformas digitais..."</td></tr>
              <tr><td>Municípios/Prefeituras</td><td>Serviços locais, assistência social, habitação</td><td>"...que as prefeituras ampliem o número de CRAS nas periferias..."</td></tr>
              <tr><td>Empresas / Setor privado</td><td>Inclusão no mercado de trabalho, diversidade corporativa</td><td>"...que empresas adotem programas de cotas para contratação de pessoas negras..."</td></tr>
              <tr><td>Escola / Comunidade escolar</td><td>Ações educativas, prevenção, acolhimento</td><td>"...que as escolas criem grupos de escuta psicológica para estudantes..."</td></tr>
              <tr><td>Família</td><td>Valores, educação informal, suporte emocional</td><td>"...que as famílias participem de rodas de conversa sobre saúde mental..."</td></tr>
              <tr><td>Mídia / Plataformas digitais</td><td>Campanhas de conscientização, combate a desinformação</td><td>"...que a mídia promova cobertura responsável sobre transtornos mentais..."</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modo e Finalidade</span>
        <h2>6. Modo e Finalidade: Como e Para Quê</h2>
        <p>
          O <strong>modo</strong> especifica o instrumento ou método pelo qual a ação será
          realizada. A <strong>finalidade</strong> enuncia o objetivo da ação — o que se
          espera alcançar com ela. Esses dois elementos são os mais frequentemente esquecidos
          pelos candidatos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Conectivo/Estrutura</th><th>Exemplos de frases</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Modo</strong></td>
                <td>"por meio de", "mediante", "através de", "com base em", "valendo-se de"</td>
                <td>"por meio de parcerias público-privadas"; "mediante campanhas de conscientização nas escolas"; "através de investimento em infraestrutura digital"</td>
              </tr>
              <tr>
                <td><strong>Finalidade</strong></td>
                <td>"com o objetivo de", "a fim de", "para que", "visando a", "com a intenção de"</td>
                <td>"com o objetivo de garantir acesso universal à internet"; "a fim de reduzir o estigma associado às doenças mentais"; "para que jovens em vulnerabilidade tenham suporte psicológico"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>7. SVG: A Proposta de Intervenção em 5 Blocos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 160" width="520" height="160" aria-label="Proposta de Intervenção com os cinco elementos em cadeia linear">
            <defs>
              <marker id="arr7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
              </marker>
            </defs>
            {/* Ação */}
            <rect x="10" y="20" width="82" height="65" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="51" y="43" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">AÇÃO</text>
            <text x="51" y="58" textAnchor="middle" fontSize="9" fill="#1d4ed8">Implementar</text>
            <text x="51" y="70" textAnchor="middle" fontSize="9" fill="#1d4ed8">programa de</text>
            <text x="51" y="82" textAnchor="middle" fontSize="9" fill="#1d4ed8">capacitação</text>
            <line x1="92" y1="52" x2="108" y2="52" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr7)" />
            {/* Agente */}
            <rect x="110" y="20" width="82" height="65" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="151" y="43" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">AGENTE</text>
            <text x="151" y="58" textAnchor="middle" fontSize="9" fill="#047857">Ministério</text>
            <text x="151" y="70" textAnchor="middle" fontSize="9" fill="#047857">da Educação</text>
            <text x="151" y="82" textAnchor="middle" fontSize="9" fill="#047857">(MEC)</text>
            <line x1="192" y1="52" x2="208" y2="52" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr7)" />
            {/* Modo */}
            <rect x="210" y="20" width="82" height="65" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="251" y="43" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">MODO</text>
            <text x="251" y="58" textAnchor="middle" fontSize="9" fill="#b45309">por meio de</text>
            <text x="251" y="70" textAnchor="middle" fontSize="9" fill="#b45309">parcerias</text>
            <text x="251" y="82" textAnchor="middle" fontSize="9" fill="#b45309">público-privadas</text>
            <line x1="292" y1="52" x2="308" y2="52" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr7)" />
            {/* Finalidade */}
            <rect x="310" y="20" width="82" height="65" rx="6" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
            <text x="351" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9d174d">FINALIDADE</text>
            <text x="351" y="52" textAnchor="middle" fontSize="9" fill="#be185d">com o objetivo</text>
            <text x="351" y="64" textAnchor="middle" fontSize="9" fill="#be185d">de garantir</text>
            <text x="351" y="76" textAnchor="middle" fontSize="9" fill="#be185d">acesso à</text>
            <text x="351" y="88" textAnchor="middle" fontSize="9" fill="#be185d">internet</text>
            <line x1="392" y1="52" x2="408" y2="52" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr7)" />
            {/* Efeito */}
            <rect x="410" y="20" width="95" height="65" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
            <text x="457" y="43" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6b21a8">EFEITO</text>
            <text x="457" y="58" textAnchor="middle" fontSize="9" fill="#7e22ce">reduzindo a</text>
            <text x="457" y="70" textAnchor="middle" fontSize="9" fill="#7e22ce">exclusão</text>
            <text x="457" y="82" textAnchor="middle" fontSize="9" fill="#7e22ce">digital</text>
            {/* Exemplo completo */}
            <rect x="10" y="105" width="495" height="45" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <text x="257" y="120" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="bold">PI COMPLETA:</text>
            <text x="257" y="134" textAnchor="middle" fontSize="9" fill="#374151">"Faz-se necessário que o MEC implemente programa de capacitação digital por meio de parcerias</text>
            <text x="257" y="145" textAnchor="middle" fontSize="9" fill="#374151">público-privadas, com o objetivo de garantir acesso à internet, reduzindo a exclusão digital."</text>
          </svg>
          <figcaption>A proposta de intervenção completa: cadeia de cinco elementos obrigatórios</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Retomada da Tese</span>
        <h2>8. Como Retomar a Tese sem Copiar: Sinônimos e Reformulação</h2>
        <p>
          A retomada da tese na conclusão não pode ser cópia literal da última frase da
          introdução. O corretor percebe a repetição e penaliza em C4 (coesão). Use estas
          estratégias para reformular:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Estratégia</th><th>Tese original</th><th>Retomada reformulada</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Substituição por sinônimos</td>
                <td>"A exclusão digital aprofunda desigualdades sociais"</td>
                <td>"A privação de conectividade perpetua iniquidades históricas"</td>
              </tr>
              <tr>
                <td>Inversão da estrutura</td>
                <td>"A herança patriarcal invisibiliza o trabalho feminino"</td>
                <td>"O trabalho de cuidado feminino permanece invisível em função da estrutura patriarcal que o sociedade perpetua"</td>
              </tr>
              <tr>
                <td>Síntese dos argumentos</td>
                <td>Tese original + resumo do que foi argumentado</td>
                <td>"Depreende-se, portanto, que tanto a raiz histórica [Dev. 1] quanto as consequências institucionais [Dev. 2] evidenciam que..."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Conectivos de conclusão recomendados: <em>Depreende-se, portanto, que...</em> /
          <em>Infere-se, diante do exposto, que...</em> / <em>Conclui-se, assim, que...</em>
          / <em>Logo, é possível afirmar que...</em> / <em>Diante desse panorama, fica
          evidente que...</em>
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros na Conclusão</span>
        <h2>9. Erros Comuns na Conclusão e Como Evitá-los</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Erro</th><th>Impacto</th><th>Solução</th></tr>
            </thead>
            <tbody>
              <tr><td>PI genérica: "o governo deve agir"</td><td>C5 = 40–80 (sem agente específico, modo ou finalidade)</td><td>Especificar: qual órgão, com qual instrumento, para qual objetivo</td></tr>
              <tr><td>Conclusão sem PI</td><td>C5 = 0</td><td>Incluir sempre a PI — é obrigatória</td></tr>
              <tr><td>PI que viola direitos humanos</td><td>C5 = 0</td><td>Verificar se a proposta respeita a dignidade humana de todos os envolvidos</td></tr>
              <tr><td>Copiar tese literalmente da introdução</td><td>C4 rebaixada</td><td>Reformular com sinônimos e nova estrutura sintática</td></tr>
              <tr><td>Introduzir argumento novo na conclusão</td><td>C3 rebaixada (conclusão é síntese, não novo desenvolvimento)</td><td>Conclusão = retomada + PI, nunca argumento novo</td></tr>
              <tr><td>Conclusão com menos de 4 linhas</td><td>PI incompleta — faltam elementos</td><td>Escrever PI como frase longa e detalhada (3–4 linhas para a PI)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelos Completos</span>
        <h2>10. Modelos de Conclusão Completa para Diferentes Temas</h2>
        <div className="lesson-highlight">
          <h3>Modelo 1 — Tema: Violência doméstica</h3>
          <p>
            "Depreende-se, portanto, que a violência doméstica no Brasil é fenômeno estrutural,
            alimentado pela herança patriarcal e pela impunidade que historicamente protege
            agressores em detrimento das vítimas. Para enfrentar esse problema, é necessário
            que o Ministério da Mulher, da Família e dos Direitos Humanos amplie a rede de
            Casas da Mulher Brasileira por meio de convênios com estados e municípios, com o
            objetivo de garantir atendimento psicossocial, jurídico e de acolhimento às vítimas
            em situação de vulnerabilidade, reduzindo o feminicídio e fortalecendo o acesso
            das mulheres à proteção estatal."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Modelo 2 — Tema: Saúde mental de jovens</h3>
          <p>
            "Infere-se, diante do exposto, que a crise de saúde mental entre os jovens
            brasileiros resulta tanto do modelo educacional competitivo quanto do estigma
            cultural que silencia o sofrimento psíquico. Para tanto, faz-se necessário que o
            Ministério da Saúde, em parceria com o Ministério da Educação, implemente o
            Programa Nacional de Saúde Mental Escolar por meio de equipes multiprofissionais
            nas escolas públicas, com o objetivo de oferecer atendimento preventivo e
            diagnóstico precoce aos estudantes, reduzindo o adoecimento psíquico e o abandono
            escolar associado a transtornos não tratados."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos Humanos</span>
        <h2>11. Proposta e Direitos Humanos: O que Nunca Propor</h2>
        <p>
          A C5 exige que a proposta de intervenção <strong>respeite os direitos humanos</strong>.
          Qualquer proposta que viole a dignidade, a liberdade, a igualdade ou os direitos
          fundamentais de qualquer grupo zera automaticamente a C5.
        </p>
        <div className="lesson-highlight">
          <h3>Propostas que violam direitos humanos — PROIBIDAS</h3>
          <p>
            ✗ "Expulsar imigrantes para reduzir a criminalidade" — discriminação e xenofobia<br />
            ✗ "Esterilizar mulheres em situação de pobreza" — violência reprodutiva<br />
            ✗ "Encarar homossexuais como doentes e oferecer tratamento" — homofobia<br />
            ✗ "Retirar crianças indígenas de suas comunidades para reeducação" — genocídio cultural<br />
            ✗ "Pena de morte para criminosos reincidentes" — privação do direito à vida<br /><br />
            ✓ Propostas válidas defendem o acesso a direitos, proteção de grupos vulneráveis,
            educação, saúde, cultura — nunca a supressão de direitos de qualquer grupo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔄</span>
            <h3>Retomada reformulada</h3>
            <p>Nunca copie a tese — use sinônimos e nova estrutura sintática</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>5 elementos da PI</h3>
            <p>Ação + Agente + Modo + Finalidade + Efeito — todos obrigatórios para 200 em C5</p>
          </div>
          <div className="math-card">
            <span>👤</span>
            <h3>Agente específico</h3>
            <p>Não "o governo" — diga qual órgão (MEC, SUS, Congresso, prefeitura...)</p>
          </div>
          <div className="math-card">
            <span>⚙️</span>
            <h3>Modo concreto</h3>
            <p>"por meio de campanhas / legislação / parcerias" — instrumento específico</p>
          </div>
          <div className="math-card">
            <span>🌱</span>
            <h3>Efeito social</h3>
            <p>Qual mudança acontece? "reduzindo X, garantindo Y, fortalecendo Z"</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Direitos humanos</h3>
            <p>A PI nunca pode violar a dignidade ou os direitos de qualquer grupo</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Elemento ausente na PI"
          statement={
            <p>
              Analise a proposta: <em>"O governo deve criar campanhas de conscientização para
              reduzir o preconceito."</em> Quais elementos da PI estão ausentes?
            </p>
          }
          options={[
            { letter: "a", text: "Falta apenas o efeito — os demais elementos estão presentes." },
            { letter: "b", text: "Faltam o agente específico (qual governo?), o modo detalhado e o efeito esperado.", correct: true },
            { letter: "c", text: "Falta apenas a ação — 'criar campanhas' não é suficientemente específico." },
            { letter: "d", text: "A proposta está completa — todos os cinco elementos estão presentes." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A PI "o governo deve criar campanhas
              de conscientização para reduzir o preconceito" contém a ação (criar campanhas),
              a finalidade (reduzir o preconceito) e um esboço de modo (campanhas de
              conscientização). Porém, faltam: (1) <strong>agente específico</strong> — "o
              governo" é vago; deveria especificar "o Ministério da Educação" ou "a Secretaria
              de Cultura do Estado"; (2) <strong>modo detalhado</strong> — "por meio de"
              especifica o instrumento mais claramente (ex.: "por meio de parceria com
              influenciadores digitais e escolas"); (3) <strong>efeito</strong> — qual seria
              o resultado concreto além de "reduzir o preconceito" (ex.: "promovendo a
              inclusão social e o respeito à diversidade").
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificar os 5 elementos em uma PI completa"
          statement={
            <p>
              Identifique os cinco elementos na seguinte PI: <em>"Faz-se necessário que o
              Ministério da Educação implemente o Programa Escola sem Preconceito por meio
              de formação continuada de professores, com o objetivo de desenvolver nos
              estudantes uma consciência antirracista, reduzindo as manifestações de racismo
              nas escolas públicas brasileiras."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Ação: implementar | Agente: professores | Modo: formação continuada | Finalidade: consciência antirracista | Efeito: reduzir racismo" },
            { letter: "b", text: "Ação: implementar o Programa | Agente: Ministério da Educação | Modo: formação continuada de professores | Finalidade: desenvolver consciência antirracista | Efeito: reduzindo as manifestações de racismo nas escolas", correct: true },
            { letter: "c", text: "Ação: formar professores | Agente: escolas públicas | Modo: programa governamental | Finalidade: reduzir o racismo | Efeito: estudantes conscientes" },
            { letter: "d", text: "A PI não está completa — faltam o modo e o efeito explícitos." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Os cinco elementos estão presentes:
              <strong> Ação</strong> = "implementar o Programa Escola sem Preconceito";
              <strong> Agente</strong> = "Ministério da Educação" (órgão específico);
              <strong> Modo</strong> = "por meio de formação continuada de professores"
              (instrumento específico); <strong>Finalidade</strong> = "com o objetivo de
              desenvolver nos estudantes uma consciência antirracista" (o que se pretende
              alcançar); <strong>Efeito</strong> = "reduzindo as manifestações de racismo
              nas escolas públicas brasileiras" (resultado esperado na sociedade). Todos
              os cinco estão claramente identificáveis.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escrever PI completa para desigualdade de gênero"
          statement={
            <p>
              Para o tema <em>"Desigualdade de gênero no mercado de trabalho brasileiro"</em>,
              qual alternativa apresenta a PI mais completa com todos os cinco elementos?
            </p>
          }
          options={[
            { letter: "a", text: "'O governo deve criar leis para garantir igualdade salarial entre homens e mulheres.'" },
            { letter: "b", text: "'As empresas precisam tratar melhor as funcionárias e pagar salários iguais.'" },
            { letter: "c", text: "'Faz-se necessário que o Congresso Nacional regulamente a Lei de Igualdade Salarial por meio de mecanismos de auditoria obrigatória nas empresas com mais de 100 funcionários, com o objetivo de garantir remuneração equânime entre homens e mulheres em cargos equivalentes, reduzindo a disparidade salarial de gênero e fortalecendo a participação feminina no mercado formal.'", correct: true },
            { letter: "d", text: "'A sociedade deve mudar sua mentalidade sobre o papel da mulher no mercado de trabalho, valorizando mais as profissionais e reconhecendo suas capacidades.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. Análise dos elementos:
              <strong> Ação</strong> = "regulamentar a Lei de Igualdade Salarial";
              <strong> Agente</strong> = "Congresso Nacional" (poder responsável por
              legislar); <strong>Modo</strong> = "por meio de mecanismos de auditoria
              obrigatória nas empresas com mais de 100 funcionários" (instrumento
              detalhado); <strong>Finalidade</strong> = "com o objetivo de garantir
              remuneração equânime entre homens e mulheres em cargos equivalentes";
              <strong> Efeito</strong> = "reduzindo a disparidade salarial de gênero e
              fortalecendo a participação feminina no mercado formal". Todas as demais
              alternativas são genéricas ou vagas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Avaliar proposta genérica e pontuar"
          statement={
            <p>
              Um candidato escreveu como conclusão: <em>"Portanto, é necessário que a
              sociedade mude e comece a valorizar o trabalho feminino. Só assim as mulheres
              terão seus direitos respeitados."</em> Qual seria a nota estimada em C5 e
              quais elementos estão ausentes?
            </p>
          }
          options={[
            { letter: "a", text: "C5 = 160, pois a proposta tem ação ('mudar'), agente ('sociedade'), finalidade ('valorizar') e efeito ('direitos respeitados')." },
            { letter: "b", text: "C5 = 80–120, pois a proposta tem intenção mas é genérica: falta agente específico, modo concreto e efeito mensurável.", correct: true },
            { letter: "c", text: "C5 = 0, pois a proposta não menciona nenhum elemento obrigatório." },
            { letter: "d", text: "C5 = 200, pois a proposta respeita os direitos humanos e apresenta objetivo claro." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A PI receberia 80 a 120 pontos
              (nível 2–3 de 5) por apresentar esboço de proposta mas ser excessivamente
              genérica. Elementos presentes de forma vaga: ação ("mudar"), agente ("a
              sociedade"), finalidade ("valorizar o trabalho feminino"). Ausentes ou
              insuficientes: (1) <strong>agente específico</strong> — "a sociedade" é muito
              amplo; deveria ser MEC, Congresso, empresas, etc.; (2) <strong>modo</strong>
              — não há instrumento concreto ("por meio de..."); (3) <strong>efeito</strong>
              — "direitos respeitados" é vago demais. Para C5 = 200, a proposta precisaria
              especificar: "que o Congresso Nacional regulamente [ação] por meio de [modo],
              com o objetivo de [finalidade], reduzindo [efeito mensurável]".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. ENEM 2022 — duas PIs com agentes diferentes"
          statement={
            <p>
              Para o tema ENEM 2022 sobre saúde mental, qual alternativa apresenta DUAS
              propostas de intervenção completas com agentes DIFERENTES (escola e governo)?
            </p>
          }
          options={[
            { letter: "a", text: "'O governo e as escolas devem trabalhar juntos para melhorar a saúde mental dos jovens brasileiros.'" },
            { letter: "b", text: "PI 1: 'As escolas devem criar grupos de escuta por meio de parcerias com profissionais de saúde mental, a fim de acolher estudantes em sofrimento, reduzindo o abandono escolar.' PI 2: 'O Ministério da Saúde deve ampliar a rede CAPS Infanto-Juvenil mediante investimento em novas unidades em cidades com mais de 50 mil habitantes, com o objetivo de garantir acesso ao tratamento especializado a crianças e adolescentes.'", correct: true },
            { letter: "c", text: "PI 1: 'O governo deve criar campanhas de saúde mental.' PI 2: 'As escolas devem falar mais sobre saúde mental nas aulas.'" },
            { letter: "d", text: "'Tanto o governo federal quanto as escolas municipais precisam se preocupar mais com a saúde mental, pois ela é fundamental para o desenvolvimento dos jovens.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Cada PI tem todos os cinco elementos:
              <strong>PI 1 (escola)</strong> — Ação: criar grupos de escuta; Agente: as
              escolas; Modo: parcerias com profissionais de saúde mental; Finalidade: acolher
              estudantes; Efeito: reduzindo o abandono escolar.
              <strong>PI 2 (governo)</strong> — Ação: ampliar a rede CAPS Infanto-Juvenil;
              Agente: Ministério da Saúde; Modo: investimento em novas unidades; Finalidade:
              garantir acesso ao tratamento; Efeito: beneficiando crianças e adolescentes em
              cidades de médio porte. O uso de dois agentes diferentes (escola e governo)
              é sofisticado e demonstra visão sistêmica do problema.
            </p>
          }
        />
      </section>
    </article>
  );
}
