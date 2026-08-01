"use client";
// src/content/redacao/cap35/Cap35Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 35</span>

          <h1>Redação sobre Redes Sociais</h1>

          <p>
            Aprenda como construir argumentos críticos sobre tecnologia, redes
            sociais e impactos digitais na sociedade contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociedade digital</span>

        <h2>1. Tecnologia como transformação social</h2>

        <p>
          A tecnologia modificou relações humanas, acesso à informação,
          comunicação, educação e formas de participação social. Em menos de
          três décadas, a internet conectou mais de 5 bilhões de pessoas,
          reconfigurando padrões de sociabilidade, consumo de informação e
          exercício da cidadania de maneira sem precedente na história humana.
        </p>

        <svg
          viewBox="0 0 700 280"
          className="lesson-svg"
          aria-label="Mapa de impactos das redes sociais na sociedade"
        >
          <defs>
            <marker id="arr35a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#0891b2" />
            </marker>
          </defs>
          {/* Centro */}
          <ellipse cx="350" cy="140" rx="80" ry="38" fill="#0891b2" />
          <text x="350" y="133" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Redes</text>
          <text x="350" y="150" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Sociais</text>
          {/* Desinformação */}
          <line x1="274" y1="127" x2="168" y2="82" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="55" y="55" width="125" height="48" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="118" y="75" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Desinformação</text>
          <text x="118" y="91" textAnchor="middle" fill="#0369a1" fontSize="10">fake news e boatos</text>
          {/* Privacidade */}
          <line x1="282" y1="114" x2="194" y2="52" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="92" y="20" width="122" height="48" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="153" y="40" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Privacidade</text>
          <text x="153" y="56" textAnchor="middle" fill="#0369a1" fontSize="10">LGPD e vigilância</text>
          {/* Saúde Mental */}
          <line x1="350" y1="102" x2="350" y2="40" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="275" y="8" width="150" height="48" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="350" y="28" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Saúde Mental</text>
          <text x="350" y="44" textAnchor="middle" fill="#0369a1" fontSize="10">ansiedade e comparação</text>
          {/* Polarização */}
          <line x1="418" y1="114" x2="506" y2="52" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="492" y="20" width="122" height="48" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="553" y="40" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Polarização</text>
          <text x="553" y="56" textAnchor="middle" fill="#0369a1" fontSize="10">câmaras de eco</text>
          {/* Economia da Atenção */}
          <line x1="426" y1="127" x2="532" y2="82" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="520" y="55" width="150" height="48" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="595" y="75" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Econ. Atenção</text>
          <text x="595" y="91" textAnchor="middle" fill="#0369a1" fontSize="10">algoritmos e vício digital</text>
          {/* Inclusão/Exclusão digital */}
          <line x1="350" y1="178" x2="350" y2="240" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arr35a)" />
          <rect x="262" y="240" width="176" height="38" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
          <text x="350" y="263" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Exclusão Digital</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Ideia central</h3>

          <p>
            Apesar dos benefícios tecnológicos, também surgiram desafios sociais
            ligados ao comportamento digital e ao uso excessivo das redes.
          </p>
        </div>

        <div className="math-block">
          <h3>No ENEM</h3>

          <p>
            Temas tecnológicos costumam exigir análise equilibrada entre avanços
            e consequências sociais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas no ENEM</span>

        <h2>2. Temas tecnológicos no ENEM — panorama histórico</h2>

        <p>
          As redes sociais e o impacto da tecnologia são temas que o ENEM aborda
          sob diferentes ângulos. Conhecer os padrões de cobrança ajuda a preparar
          repertórios e argumentos mais assertivos.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tema tecnológico</th>
              <th>Problema central</th>
              <th>Repertório sugerido</th>
              <th>Proposta típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fake news</td>
              <td>Desinformação e manipulação política</td>
              <td>Marco Civil da Internet; pesquisas do Reuters Institute</td>
              <td>Educação midiática obrigatória nas escolas</td>
            </tr>
            <tr>
              <td>Privacidade digital</td>
              <td>Coleta de dados sem consentimento informado</td>
              <td>LGPD (Lei 13.709/2018); Byung-Chul Han (transparência)</td>
              <td>Regulação de plataformas e fiscalização da ANPD</td>
            </tr>
            <tr>
              <td>Dependência tecnológica</td>
              <td>Uso compulsivo e saúde mental</td>
              <td>OMS (classificação do vício em jogos); pesquisas IBGE</td>
              <td>Programas de saúde digital em escolas</td>
            </tr>
            <tr>
              <td>Exclusão digital</td>
              <td>Desigualdade no acesso à tecnologia</td>
              <td>PNAD 2022 (49 milhões sem acesso à internet); CF Art. 5</td>
              <td>Ampliação de infraestrutura e inclusão digital pública</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Benefícios</span>

        <h2>3. Aspectos positivos da tecnologia</h2>

        <p>
          A tecnologia trouxe importantes avanços para diferentes áreas da
          sociedade.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>

            <h3>Educação</h3>

            <p>Ampliação do acesso à informação.</p>
          </div>

          <div className="lesson-card">
            <span>🌎</span>

            <h3>Comunicação</h3>

            <p>Conexão global instantânea.</p>
          </div>

          <div className="lesson-card">
            <span>🏥</span>

            <h3>Saúde</h3>

            <p>Avanços médicos e digitais.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Possíveis argumentos</h3>

          <p>
            Democratização da informação, inclusão digital e inovação científica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Problemas sociais</span>

        <h2>4. Impactos negativos das redes sociais</h2>

        <p>
          O uso excessivo das redes sociais pode gerar impactos emocionais,
          sociais e políticos.
        </p>

        <div className="lesson-highlight">
          <h3>Problemas recorrentes</h3>

          <ul>
            <li>Dependência digital;</li>
            <li>Ansiedade e comparação social;</li>
            <li>Disseminação de fake news;</li>
            <li>Cyberbullying;</li>
            <li>Polarização social.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica argumentativa</h3>

          <p>
            Relacione comportamento digital aos impactos coletivos na sociedade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fake news e legislação</span>

        <h2>5. Desinformação e legislação pertinente</h2>

        <p>
          A circulação de informações falsas tornou-se um dos principais desafios
          das plataformas digitais e da democracia contemporânea.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Problema</th>
              <th>Causa estrutural</th>
              <th>Efeito social</th>
              <th>Legislação / Referência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fake news</td>
              <td>Algoritmos que priorizam engajamento emocional</td>
              <td>Polarização, desinformação, risco à saúde (anti-vacinas)</td>
              <td>Marco Civil da Internet (Lei 12.965/2014)</td>
            </tr>
            <tr>
              <td>Privacidade violada</td>
              <td>Coleta massiva de dados por plataformas</td>
              <td>Manipulação política (Cambridge Analytica)</td>
              <td>LGPD (Lei 13.709/2018)</td>
            </tr>
            <tr>
              <td>Cyberbullying</td>
              <td>Anonimato e ausência de responsabilização</td>
              <td>Danos psicológicos, evasão escolar, suicídio</td>
              <td>Lei 13.185/2015 (Antibullying)</td>
            </tr>
            <tr>
              <td>Discurso de ódio</td>
              <td>Câmaras de eco e moderação insuficiente</td>
              <td>Violência física e simbólica contra grupos vulneráveis</td>
              <td>CP Art. 140 (Injúria racial); projetos regulatórios em debate</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>

            <h3>Fake news</h3>

            <p>Manipulação e desinformação coletiva.</p>
          </div>

          <div className="lesson-card">
            <span>🗳️</span>

            <h3>Democracia</h3>

            <p>Impacto político e social.</p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>

            <h3>Algoritmos</h3>

            <p>Amplificação de conteúdos extremos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde mental</span>

        <h2>6. Redes sociais e saúde emocional</h2>

        <p>
          O ambiente digital pode influenciar autoestima, ansiedade e percepção
          social.
        </p>

        <div className="lesson-highlight">
          <h3>Fatores importantes</h3>

          <ul>
            <li>Pressão estética;</li>
            <li>Busca excessiva por aprovação;</li>
            <li>Comparação constante;</li>
            <li>Exposição exagerada;</li>
            <li>Isolamento social.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Atenção</h3>

          <p>
            O tema exige linguagem ética e abordagem equilibrada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Repertório</span>

        <h2>7. Repertórios filosóficos e culturais</h2>

        <p>
          Temas tecnológicos permitem repertórios atuais, interdisciplinares e
          fortemente conectados à realidade contemporânea.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Filósofo / Autor</th>
              <th>Conceito central</th>
              <th>Aplicação em redação sobre tecnologia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Byung-Chul Han</td>
              <td>Sociedade da transparência: exposição total, fim da privacidade</td>
              <td>Critica o imperativo de visibilidade nas redes sociais e a vigilância permanente</td>
            </tr>
            <tr>
              <td>Zygmunt Bauman</td>
              <td>Modernidade líquida: relações instáveis e descartáveis</td>
              <td>Conexões digitais superficiais como extensão da fragilidade das relações contemporâneas</td>
            </tr>
            <tr>
              <td>Shoshana Zuboff</td>
              <td>Capitalismo de vigilância: dados como matéria-prima</td>
              <td>Critica o modelo de negócios das plataformas baseado na exploração de dados pessoais</td>
            </tr>
            <tr>
              <td>Marco Civil da Internet</td>
              <td>Lei 12.965/2014: neutralidade da rede, privacidade, liberdade de expressão</td>
              <td>Base legal para propostas de regulação digital no Brasil</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>

            <h3>Bauman</h3>

            <p>Fragilidade das relações contemporâneas.</p>
          </div>

          <div className="lesson-card">
            <span>🎬</span>

            <h3>Documentários</h3>

            <p>Impactos sociais das redes digitais.</p>
          </div>

          <div className="lesson-card">
            <span>📱</span>

            <h3>Atualidades</h3>

            <p>Casos recentes de desinformação.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intervenção</span>

        <h2>8. Proposta de intervenção</h2>

        <p>
          A conclusão deve apresentar soluções educativas, tecnológicas e
          institucionais.
        </p>

        <div className="lesson-highlight">
          <h3>Possíveis ações</h3>

          <ul>
            <li>Educação midiática nas escolas;</li>
            <li>Campanhas de uso consciente das redes;</li>
            <li>Fiscalização de conteúdos falsos;</li>
            <li>Incentivo à saúde digital;</li>
            <li>Projetos de alfabetização digital.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Agentes possíveis</h3>

          <p>
            Ministério da Educação, escolas, plataformas digitais e mídia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">SVG — argumento</span>

        <h2>9. Estrutura do argumento sobre tecnologia</h2>

        <svg
          viewBox="0 0 700 160"
          className="lesson-svg"
          aria-label="Estrutura de argumento sobre tecnologia e redes sociais"
        >
          <defs>
            <marker id="arr35b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#0891b2" />
            </marker>
          </defs>
          <rect x="10" y="45" width="145" height="70" rx="8" fill="#0891b2" />
          <text x="82" y="68" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">① Tese</text>
          <text x="82" y="84" textAnchor="middle" fill="#e0f2fe" fontSize="10">ponto de vista</text>
          <text x="82" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="10">sobre tecnologia</text>
          <line x1="155" y1="80" x2="183" y2="80" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arr35b)" />
          <rect x="183" y="45" width="145" height="70" rx="8" fill="#0369a1" />
          <text x="256" y="68" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">② Dado</text>
          <text x="256" y="84" textAnchor="middle" fill="#e0f2fe" fontSize="10">estatística/pesquisa</text>
          <text x="256" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="10">concreta</text>
          <line x1="328" y1="80" x2="356" y2="80" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arr35b)" />
          <rect x="356" y="45" width="160" height="70" rx="8" fill="#075985" />
          <text x="436" y="68" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">③ Análise Crítica</text>
          <text x="436" y="84" textAnchor="middle" fill="#e0f2fe" fontSize="10">causa-efeito social</text>
          <text x="436" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="10">e contexto</text>
          <line x1="516" y1="80" x2="544" y2="80" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arr35b)" />
          <rect x="544" y="45" width="146" height="70" rx="8" fill="#0c4a6e" />
          <text x="617" y="68" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">④ Solução</text>
          <text x="617" y="84" textAnchor="middle" fill="#e0f2fe" fontSize="10">proposta viável</text>
          <text x="617" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="10">e ética</text>
          <text x="350" y="25" textAnchor="middle" fill="#0c4a6e" fontSize="13" fontWeight="bold">Fluxo do argumento dissertativo — tema Tecnologia</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>

        <h2>10. Erros comuns nesse tema</h2>

        <p>
          Muitos candidatos fazem análises superficiais ou extremamente radicais
          sobre tecnologia.
        </p>

        <div className="lesson-highlight">
          <h3>Evite:</h3>

          <ul>
            <li>Tratar tecnologia apenas como vilã;</li>
            <li>Ignorar benefícios sociais;</li>
            <li>Generalizações exageradas;</li>
            <li>Ausência de análise crítica;</li>
            <li>Propostas impossíveis ou autoritárias.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica final</h3>

          <p>
            O equilíbrio argumentativo fortalece a credibilidade da redação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>11. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>Tecnologia gera benefícios e desafios sociais;</li>
            <li>Fake news são problema contemporâneo relevante;</li>
            <li>Redes sociais influenciam saúde emocional;</li>
            <li>Educação midiática é solução recorrente;</li>
            <li>O repertório deve ser atual e produtivo;</li>
            <li>A argumentação precisa ser equilibrada.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Tecnologia e sociedade"
          statement={<p>A tecnologia provocou principalmente:</p>}
          options={[
            { letter: "a", text: "isolamento absoluto da sociedade" },
            {
              letter: "b",
              text: "transformações sociais e comunicacionais",
              correct: true,
            },
            { letter: "c", text: "fim da educação" },
            { letter: "d", text: "eliminação das relações humanas" },
          ]}
          resolution={
            <p>
              A tecnologia modificou comunicação, educação e relações sociais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Fake news"
          statement={<p>As fake news representam:</p>}
          options={[
            { letter: "a", text: "fortalecimento automático da democracia" },
            {
              letter: "b",
              text: "problema de desinformação digital",
              correct: true,
            },
            { letter: "c", text: "melhoria do debate público" },
            { letter: "d", text: "fim das redes sociais" },
          ]}
          resolution={
            <p>
              Notícias falsas prejudicam informação, debate público e cidadania.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Intervenção"
          statement={<p>Uma proposta adequada para esse tema seria:</p>}
          options={[
            { letter: "a", text: "proibir totalmente a internet" },
            {
              letter: "b",
              text: "incentivar educação midiática e uso consciente",
              correct: true,
            },
            { letter: "c", text: "eliminar redes sociais por lei" },
            { letter: "d", text: "ignorar alfabetização digital" },
          ]}
          resolution={
            <p>
              Educação midiática e conscientização fortalecem o uso responsável
              da tecnologia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Algoritmos e democracia"
          statement={
            <p>
              Os algoritmos das plataformas digitais tendem a exibir conteúdos
              que reforçam crenças preexistentes dos usuários, criando as
              chamadas "câmaras de eco". Esse fenômeno prejudica principalmente:
            </p>
          }
          options={[
            { letter: "a", text: "o entretenimento digital, por restringir o acesso a conteúdos variados" },
            { letter: "b", text: "a liberdade de expressão, por censurar opiniões contrárias" },
            { letter: "c", text: "a democracia, ao aprofundar a polarização social e dificultar o diálogo entre grupos divergentes", correct: true },
            { letter: "d", text: "apenas os usuários jovens, que são mais suscetíveis a influências digitais" },
            { letter: "e", text: "o mercado publicitário, por limitar a exposição de anúncios a nichos específicos" },
          ]}
          resolution={
            <p>
              As câmaras de eco reforçam visões de mundo sem confronto com
              perspectivas distintas, aprofundando a polarização política e
              social. Esse fenômeno fragiliza o debate democrático, pois a
              democracia pressupõe pluralidade de ideias e diálogo entre
              grupos. Byung-Chul Han e outros pensadores contemporâneos alertam
              que a transparência das plataformas não garante veracidade —
              apenas velocidade de circulação.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. LGPD e cidadania digital"
          statement={
            <p>
              A Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018) foi criada
              para regulamentar o uso de dados pessoais por empresas e pelo poder
              público. Na redação ENEM, essa legislação pode ser mobilizada como
              repertório principalmente para:
            </p>
          }
          options={[
            { letter: "a", text: "criticar a liberdade de expressão nas redes sociais" },
            { letter: "b", text: "argumentar sobre o direito à privacidade digital como extensão dos direitos fundamentais", correct: true },
            { letter: "c", text: "defender a proibição total do uso de dados para fins comerciais" },
            { letter: "d", text: "propor a extinção das redes sociais no Brasil" },
            { letter: "e", text: "justificar a intervenção do Estado na educação básica" },
          ]}
          resolution={
            <p>
              A LGPD reconhece o tratamento adequado de dados pessoais como
              condição para o exercício da cidadania e da autonomia individual.
              Quando citada em redações sobre tecnologia, privacidade ou
              vigilância digital, ela funciona como repertório jurídico produtivo
              que ancora a proposta de intervenção em bases legais concretas —
              um dos requisitos para a nota máxima na Competência 5.
            </p>
          }
        />
      </section>
    </article>
  );
}
