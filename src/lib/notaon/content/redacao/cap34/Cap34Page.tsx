"use client";
// src/content/redacao/cap34/Cap34Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 34</span>

          <h1>Redação sobre Saúde Mental</h1>

          <p>
            Aprenda como desenvolver textos sobre saúde mental com cuidado,
            responsabilidade, argumentação crítica e proposta de intervenção
            humanizada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tema social</span>

        <h2>1. Saúde mental como problema coletivo</h2>

        <p>
          A saúde mental não deve ser tratada apenas como questão individual,
          pois envolve fatores sociais, familiares, escolares, econômicos e
          culturais. De acordo com a Organização Mundial da Saúde (OMS), a
          depressão é a principal causa de incapacidade no mundo, afetando mais
          de 264 milhões de pessoas — dado que confere urgência ao debate público
          e exige políticas preventivas articuladas.
        </p>

        <svg
          viewBox="0 0 700 290"
          className="lesson-svg"
          aria-label="Mapa de causas da crise de saúde mental"
        >
          <defs>
            <marker id="arr34a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed" />
            </marker>
          </defs>
          {/* Centro */}
          <ellipse cx="350" cy="145" rx="90" ry="40" fill="#7c3aed" />
          <text x="350" y="138" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Crise de</text>
          <text x="350" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Saúde Mental</text>
          {/* Burnout */}
          <line x1="262" y1="130" x2="162" y2="90" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="60" y="62" width="110" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="115" y="82" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Burnout</text>
          <text x="115" y="98" textAnchor="middle" fill="#5b21b6" fontSize="10">sobrecarga de trabalho</text>
          {/* Isolamento */}
          <line x1="270" y1="118" x2="178" y2="52" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="80" y="18" width="125" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="143" y="38" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Isolamento Social</text>
          <text x="143" y="54" textAnchor="middle" fill="#5b21b6" fontSize="10">vínculos fragilizados</text>
          {/* Redes Sociais */}
          <line x1="350" y1="105" x2="350" y2="40" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="275" y="10" width="150" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="350" y="30" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Redes Sociais</text>
          <text x="350" y="46" textAnchor="middle" fill="#5b21b6" fontSize="10">pressão estética e comparação</text>
          {/* Pressão Escolar */}
          <line x1="430" y1="118" x2="522" y2="52" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="500" y="18" width="125" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="563" y="38" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Pressão Escolar</text>
          <text x="563" y="54" textAnchor="middle" fill="#5b21b6" fontSize="10">ansiedade acadêmica</text>
          {/* Desigualdade */}
          <line x1="438" y1="130" x2="538" y2="90" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="528" y="62" width="115" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="586" y="82" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Desigualdade</text>
          <text x="586" y="98" textAnchor="middle" fill="#5b21b6" fontSize="10">acesso restrito a tratamento</text>
          {/* Estigma */}
          <line x1="350" y1="185" x2="350" y2="250" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <rect x="270" y="250" width="160" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="350" y="272" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Estigma Social</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Ideia central</h3>

          <p>
            O sofrimento psicológico pode ser intensificado por pressão social,
            falta de acesso a tratamento, preconceito e ausência de políticas
            públicas.
          </p>
        </div>

        <div className="math-block">
          <h3>No ENEM</h3>

          <p>
            O tema exige abordagem ética, linguagem respeitosa e proposta de
            intervenção cuidadosa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Causas</span>

        <h2>2. Principais causas sociais</h2>

        <p>
          Existem diversos fatores que podem contribuir para o agravamento dos
          problemas de saúde mental.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📱</span>

            <h3>Redes sociais</h3>

            <p>Comparação, exposição e pressão estética.</p>
          </div>

          <div className="lesson-card">
            <span>🏫</span>

            <h3>Ambiente escolar</h3>

            <p>Cobrança, bullying e ansiedade acadêmica.</p>
          </div>

          <div className="lesson-card">
            <span>💰</span>

            <h3>Desigualdade</h3>

            <p>Dificuldade de acesso a acompanhamento.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Outros fatores</h3>

          <ul>
            <li>Preconceito contra transtornos mentais;</li>
            <li>Falta de profissionais especializados;</li>
            <li>Desinformação familiar;</li>
            <li>Rotina de trabalho excessiva;</li>
            <li>Isolamento social.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados</span>

        <h2>3. Dados e repertório para a redação</h2>

        <p>
          Utilizar dados concretos e repertório filosófico pertinente é
          essencial para elevar a argumentação ao nível exigido pela Competência 3.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Dado/Valor</th>
              <th>Fonte</th>
              <th>Relevância para a redação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Depressão no mundo</td>
              <td>+264 milhões de pessoas afetadas</td>
              <td>OMS, 2021</td>
              <td>Contextualiza o problema como epidemia global</td>
            </tr>
            <tr>
              <td>Suicídio entre jovens</td>
              <td>3ª causa de morte (15–29 anos) no Brasil</td>
              <td>IBGE / Ministério da Saúde</td>
              <td>Demonstra a gravidade para a população jovem</td>
            </tr>
            <tr>
              <td>Psicólogos por habitante</td>
              <td>Brasil tem 1 psicólogo para cada 726 habitantes (apenas nas capitais)</td>
              <td>CFP, 2022</td>
              <td>Evidencia desigualdade no acesso ao tratamento</td>
            </tr>
            <tr>
              <td>Burnout</td>
              <td>30% dos trabalhadores brasileiros sofrem de burnout</td>
              <td>ISMA-BR, 2019</td>
              <td>Argumenta a dimensão laboral do problema</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Repertório</span>

        <h2>4. Repertórios filosóficos e culturais</h2>

        <p>
          Repertórios socioculturais ajudam a aprofundar a discussão sobre saúde
          mental, conectando o problema social a análises teóricas reconhecidas.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Filósofo / Autor</th>
              <th>Conceito central</th>
              <th>Aplicação na redação</th>
              <th>Temas compatíveis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zygmunt Bauman</td>
              <td>Modernidade líquida: vínculos frágeis e instáveis</td>
              <td>Fragilidade das relações sociais agrava isolamento e ansiedade</td>
              <td>Isolamento, redes sociais, saúde mental</td>
            </tr>
            <tr>
              <td>Byung-Chul Han</td>
              <td>Sociedade do cansaço: excesso de positividade e produtividade</td>
              <td>Pressão por performance constante gera burnout e depressão</td>
              <td>Burnout, trabalho, saúde mental</td>
            </tr>
            <tr>
              <td>Constituição Federal</td>
              <td>Art. 196: saúde como direito de todos e dever do Estado</td>
              <td>Fundamenta proposta de políticas públicas de saúde mental</td>
              <td>Saúde, cidadania, desigualdade</td>
            </tr>
            <tr>
              <td>OMS</td>
              <td>Saúde = bem-estar físico, mental e social</td>
              <td>Amplia a definição de saúde para além do aspecto físico</td>
              <td>Saúde mental, qualidade de vida, políticas públicas</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Constituição</h3>

            <p>Direito à saúde e à dignidade humana.</p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>

            <h3>Bauman</h3>

            <p>Fragilidade das relações contemporâneas.</p>
          </div>

          <div className="lesson-card">
            <span>📱</span>

            <h3>Atualidades</h3>

            <p>Impactos das redes sociais na juventude.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Importante</h3>

          <p>
            Use repertórios com sensibilidade, evitando generalizações ou
            julgamentos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>

        <h2>5. Como argumentar com cuidado</h2>

        <p>
          Temas de saúde mental exigem responsabilidade, empatia e clareza
          analítica.
        </p>

        <div className="lesson-highlight">
          <h3>Boas abordagens</h3>

          <ul>
            <li>Falta de acesso a atendimento psicológico;</li>
            <li>Estigma social sobre transtornos mentais;</li>
            <li>Pressão estética e comparação nas redes;</li>
            <li>Ambientes escolares pouco acolhedores;</li>
            <li>Necessidade de políticas públicas preventivas.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Evite</h3>

          <p>
            Não trate sofrimento mental como fraqueza, exagero ou problema
            exclusivamente individual.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intervenção</span>

        <h2>6. Proposta de intervenção</h2>

        <p>
          A proposta deve apresentar solução viável, humanizada e respeitosa aos
          direitos humanos.
        </p>

        <svg
          viewBox="0 0 700 160"
          className="lesson-svg"
          aria-label="Modelo de proposta de intervenção sobre saúde mental"
        >
          {/* 5 colunas */}
          <rect x="10" y="20" width="128" height="120" rx="6" fill="#6366f1" />
          <text x="74" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Quem</text>
          <text x="74" y="56" textAnchor="middle" fill="white" fontSize="10">(Agente)</text>
          <text x="74" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="10">Ministério da</text>
          <text x="74" y="94" textAnchor="middle" fill="#e0e7ff" fontSize="10">Saúde e MEC</text>

          <rect x="148" y="20" width="128" height="120" rx="6" fill="#4f46e5" />
          <text x="212" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Faz o quê</text>
          <text x="212" y="56" textAnchor="middle" fill="white" fontSize="10">(Ação)</text>
          <text x="212" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="10">Implementar CAPS</text>
          <text x="212" y="94" textAnchor="middle" fill="#e0e7ff" fontSize="10">em escolas públicas</text>

          <rect x="286" y="20" width="128" height="120" rx="6" fill="#7c3aed" />
          <text x="350" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Com quem</text>
          <text x="350" y="56" textAnchor="middle" fill="white" fontSize="10">(Parceiro)</text>
          <text x="350" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="10">Psicólogos e</text>
          <text x="350" y="94" textAnchor="middle" fill="#e0e7ff" fontSize="10">assistentes sociais</text>

          <rect x="424" y="20" width="128" height="120" rx="6" fill="#9333ea" />
          <text x="488" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Para quê</text>
          <text x="488" y="56" textAnchor="middle" fill="white" fontSize="10">(Finalidade)</text>
          <text x="488" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="10">Garantir acesso</text>
          <text x="488" y="94" textAnchor="middle" fill="#e0e7ff" fontSize="10">universal ao suporte</text>

          <rect x="562" y="20" width="128" height="120" rx="6" fill="#a21caf" />
          <text x="626" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Como</text>
          <text x="626" y="56" textAnchor="middle" fill="white" fontSize="10">(Mecanismo)</text>
          <text x="626" y="80" textAnchor="middle" fill="#e0e7ff" fontSize="10">Lei federal com</text>
          <text x="626" y="94" textAnchor="middle" fill="#e0e7ff" fontSize="10">financiamento SUS</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Possíveis ações</h3>

          <ul>
            <li>Ampliação de atendimento psicológico em escolas;</li>
            <li>Campanhas de combate ao estigma;</li>
            <li>Formação de professores para acolhimento;</li>
            <li>Investimento em serviços públicos de saúde mental;</li>
            <li>Educação digital sobre uso saudável das redes sociais.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Agentes possíveis</h3>

          <p>
            Ministério da Saúde, Ministério da Educação, escolas, mídia e
            famílias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propostas</span>

        <h2>7. Propostas de intervenção detalhadas</h2>

        <p>
          Uma proposta nota 1000 deve ser específica e apresentar os cinco
          elementos exigidos pela Competência 5.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Proposta</th>
              <th>Agente responsável</th>
              <th>Mecanismo</th>
              <th>Detalhamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAPS nas escolas públicas</td>
              <td>Ministério da Saúde + MEC</td>
              <td>Política pública integrada, financiamento via SUS</td>
              <td>Psicólogos e assistentes sociais alocados em escolas com +500 alunos</td>
            </tr>
            <tr>
              <td>Campanha antiestigma</td>
              <td>Governo Federal + mídias sociais</td>
              <td>Campanhas em plataformas digitais e escolas</td>
              <td>Março Azul-Marinho: conscientização sobre depressão e ansiedade</td>
            </tr>
            <tr>
              <td>Formação docente em saúde emocional</td>
              <td>Secretarias de Educação estaduais</td>
              <td>Cursos de formação continuada obrigatória</td>
              <td>Professores aprendem sinais de sofrimento psicológico em alunos</td>
            </tr>
            <tr>
              <td>Regulação do tempo de tela</td>
              <td>Legislativo Federal (Câmara e Senado)</td>
              <td>Lei de proteção de menores em redes sociais</td>
              <td>Limitar acesso de menores de 16 anos sem supervisão parental</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>

        <h2>8. Erros comuns nesse tema</h2>

        <p>
          Algumas abordagens podem tornar o texto superficial ou inadequado.
        </p>

        <div className="lesson-highlight">
          <h3>Evite:</h3>

          <ul>
            <li>Culpar a vítima;</li>
            <li>Generalizar transtornos mentais;</li>
            <li>Usar linguagem preconceituosa;</li>
            <li>Ignorar o papel do Estado;</li>
            <li>Propor soluções simplistas.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica ética</h3>

          <p>
            O texto deve defender acolhimento, prevenção e acesso a tratamento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>9. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>Saúde mental é também questão social;</li>
            <li>Redes sociais podem intensificar pressões;</li>
            <li>O acesso ao tratamento é desigual;</li>
            <li>A linguagem deve ser respeitosa;</li>
            <li>A intervenção deve ser humanizada;</li>
            <li>O tema permite repertórios éticos e atuais.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Saúde mental"
          statement={<p>Na redação, saúde mental deve ser tratada como:</p>}
          options={[
            { letter: "a", text: "problema sem importância social" },
            {
              letter: "b",
              text: "questão individual e coletiva",
              correct: true,
            },
            { letter: "c", text: "assunto proibido" },
            { letter: "d", text: "apenas fraqueza pessoal" },
          ]}
          resolution={
            <p>
              Saúde mental envolve fatores individuais e sociais, exigindo
              análise ampla.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Argumentação ética"
          statement={<p>Uma abordagem adequada sobre saúde mental deve:</p>}
          options={[
            { letter: "a", text: "culpar pessoas em sofrimento" },
            {
              letter: "b",
              text: "usar linguagem respeitosa e humanizada",
              correct: true,
            },
            { letter: "c", text: "ridicularizar transtornos" },
            { letter: "d", text: "ignorar políticas públicas" },
          ]}
          resolution={
            <p>
              Temas de saúde mental exigem cuidado, respeito e responsabilidade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Intervenção"
          statement={<p>Uma boa proposta de intervenção para esse tema seria:</p>}
          options={[
            { letter: "a", text: "culpar exclusivamente os jovens" },
            {
              letter: "b",
              text: "ampliar atendimento psicológico e campanhas educativas",
              correct: true,
            },
            { letter: "c", text: "negar a existência do problema" },
            { letter: "d", text: "propor punições desumanas" },
          ]}
          resolution={
            <p>
              Ações educativas e ampliação de atendimento são propostas viáveis e
              humanizadas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Repertório filosófico aplicado"
          statement={
            <p>
              Leia o trecho a seguir: <em>"Na modernidade líquida, os vínculos
              afetivos tornaram-se frágeis e descartáveis, gerando insegurança
              emocional crônica."</em> Com base no conceito de Zygmunt Bauman
              e no tema saúde mental, a melhor forma de utilizar esse repertório
              em uma redação ENEM seria:
            </p>
          }
          options={[
            { letter: "a", text: "Citar a frase diretamente sem explicação, para demonstrar erudição" },
            { letter: "b", text: "Relacionar o conceito de modernidade líquida ao isolamento social como fator agravante dos transtornos mentais contemporâneos", correct: true },
            { letter: "c", text: "Substituir os dados estatísticos pelo conceito, pois a filosofia é mais valorizada que dados" },
            { letter: "d", text: "Usar o conceito apenas na conclusão, onde o repertório tem maior peso avaliativo" },
            { letter: "e", text: "Rejeitar o repertório filosófico por ser abstrato demais para uma redação objetiva" },
          ]}
          resolution={
            <p>
              O repertório filosófico só é produtivo quando conectado ao argumento.
              Relacionar "modernidade líquida" ao isolamento social (causa) e à
              deterioração da saúde mental (efeito) demonstra capacidade analítica
              — o que a Competência 3 valoriza. A simples citação descontextualizada
              caracteriza repertório decorativo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Proposta de intervenção completa"
          statement={
            <p>
              Uma candidata escreveu a seguinte conclusão: <em>"Portanto, o governo
              deve agir para melhorar a saúde mental dos brasileiros."</em> Essa
              proposta receberia qual pontuação na Competência 5 e por quê?
            </p>
          }
          options={[
            { letter: "a", text: "200 pontos, pois identifica o agente (governo) e a finalidade (melhorar a saúde mental)" },
            { letter: "b", text: "160 pontos, pois apresenta agente e ação, mas falta o detalhamento" },
            { letter: "c", text: "80 a 120 pontos, pois faltam ação específica, meio, finalidade e detalhamento — a proposta é genérica", correct: true },
            { letter: "d", text: "40 pontos, pois a proposta viola os direitos humanos" },
            { letter: "e", text: "0 pontos, pois não menciona nenhum elemento da proposta de intervenção" },
          ]}
          resolution={
            <p>
              Uma proposta genérica como "o governo deve agir" não contempla os
              5 elementos exigidos: agente (quem?), ação (o quê?), meio (como?),
              finalidade (para quê?) e detalhamento. Sem especificidade, a proposta
              recebe pontuação baixa na C5. O ideal seria: "O Ministério da Saúde
              deve implementar CAPS nas escolas públicas, por meio de parceria com
              o MEC, com o objetivo de garantir atendimento psicológico universal,
              financiado pelo SUS."
            </p>
          }
        />
      </section>
    </article>
  );
}
