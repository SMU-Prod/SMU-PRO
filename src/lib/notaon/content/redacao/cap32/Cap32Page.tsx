"use client";
// src/content/redacao/cap32/Cap32Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 32</span>

          <h1>Temas Sociais Recorrentes no ENEM</h1>

          <p>
            Aprenda quais são os principais temas sociais cobrados na redação
            ENEM e como desenvolver argumentos críticos sobre esses assuntos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>

        <h2>1. O perfil dos temas do ENEM</h2>

        <p>
          A redação ENEM costuma abordar problemas sociais contemporâneos ligados
          à cidadania, direitos humanos e desafios coletivos que exigem análise
          crítica aprofundada e proposta de intervenção socialmente responsável.
          Compreender o perfil desses temas é o primeiro passo para uma preparação
          estratégica eficiente.
        </p>

        <svg
          viewBox="0 0 700 320"
          className="lesson-svg"
          aria-label="Mapa dos principais temas sociais do ENEM"
        >
          <defs>
            <marker id="arr32a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
            </marker>
          </defs>
          {/* Centro */}
          <ellipse cx="350" cy="160" rx="75" ry="38" fill="#6366f1" />
          <text x="350" y="155" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Temas</text>
          <text x="350" y="172" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Sociais ENEM</text>
          {/* Nó Educação */}
          <line x1="280" y1="145" x2="175" y2="90" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="80" y="64" width="110" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="135" y="84" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Educação</text>
          <text x="135" y="100" textAnchor="middle" fill="#4338ca" fontSize="10">desigualdade/acesso</text>
          {/* Nó Saúde */}
          <line x1="290" y1="128" x2="185" y2="55" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="100" y="22" width="110" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="155" y="42" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Saúde Mental</text>
          <text x="155" y="58" textAnchor="middle" fill="#4338ca" fontSize="10">ansiedade/burnout</text>
          {/* Nó Tecnologia */}
          <line x1="350" y1="122" x2="350" y2="42" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="290" y="10" width="120" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="350" y="30" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Tecnologia</text>
          <text x="350" y="46" textAnchor="middle" fill="#4338ca" fontSize="10">fake news/privacidade</text>
          {/* Nó Violência */}
          <line x1="420" y1="128" x2="510" y2="55" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="495" y="22" width="115" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="553" y="42" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Violência</text>
          <text x="553" y="58" textAnchor="middle" fill="#4338ca" fontSize="10">segurança/direitos</text>
          {/* Nó Meio Ambiente */}
          <line x1="420" y1="145" x2="525" y2="90" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="510" y="64" width="120" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="570" y="84" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Meio Ambiente</text>
          <text x="570" y="100" textAnchor="middle" fill="#4338ca" fontSize="10">clima/sustentabilidade</text>
          {/* Nó Inclusão */}
          <line x1="350" y1="198" x2="350" y2="265" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr32a)" />
          <rect x="282" y="265" width="136" height="46" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="350" y="285" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Inclusão Social</text>
          <text x="350" y="301" textAnchor="middle" fill="#4338ca" fontSize="10">diversidade/cidadania</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Características comuns</h3>

          <ul>
            <li>Questões sociais atuais;</li>
            <li>Impactos coletivos;</li>
            <li>Desigualdade e exclusão;</li>
            <li>Direitos fundamentais;</li>
            <li>Necessidade de intervenção social.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>No ENEM</h3>

          <p>
            Os temas geralmente exigem análise crítica e proposta de solução
            socialmente responsável.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Educação</span>

        <h2>2. Educação e desigualdade</h2>

        <p>
          Educação é um dos eixos mais recorrentes nas discussões sociais do
          ENEM. A desigualdade no acesso à educação de qualidade revela contradições
          estruturais do Brasil que merecem análise sociológica aprofundada, com
          referência a dados, legislação e repertório filosófico pertinente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>

            <h3>Acesso</h3>

            <p>Diferença de oportunidades educacionais.</p>
          </div>

          <div className="lesson-card">
            <span>🏫</span>

            <h3>Infraestrutura</h3>

            <p>Desigualdade entre escolas e regiões.</p>
          </div>

          <div className="lesson-card">
            <span>🌎</span>

            <h3>Inclusão</h3>

            <p>Educação como transformação social.</p>
          </div>
        </div>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tema</th>
              <th>Problema central</th>
              <th>Causa estrutural</th>
              <th>Repertório sugerido</th>
              <th>Proposta típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Educação</td>
              <td>Desigualdade de acesso e qualidade</td>
              <td>Subfinanciamento e disparidade regional</td>
              <td>Bourdieu (capital cultural); CF Art. 205</td>
              <td>Ampliação de escolas de tempo integral em áreas vulneráveis</td>
            </tr>
            <tr>
              <td>Saúde Mental</td>
              <td>Negligência coletiva e estigma</td>
              <td>Falta de políticas públicas preventivas</td>
              <td>Bauman (liquidez); OMS (dados globais)</td>
              <td>CAPS nas escolas; treinamento de professores</td>
            </tr>
            <tr>
              <td>Tecnologia</td>
              <td>Desinformação e polarização</td>
              <td>Algoritmos e falta de letramento digital</td>
              <td>Byung-Chul Han (sociedade do cansaço); LGPD</td>
              <td>Educação midiática obrigatória; regulação de plataformas</td>
            </tr>
            <tr>
              <td>Violência</td>
              <td>Insegurança e impunidade</td>
              <td>Desigualdade social e ausência do Estado</td>
              <td>Hobbes (Leviatã); Atlas da Violência</td>
              <td>Investimento em segurança pública e programas sociais</td>
            </tr>
            <tr>
              <td>Meio Ambiente</td>
              <td>Degradação e crise climática</td>
              <td>Modelo econômico predatório</td>
              <td>Milton Santos (território); Código Florestal</td>
              <td>Zoneamento ambiental e transição para energia limpa</td>
            </tr>
          </tbody>
        </table>

        <div className="lesson-highlight">
          <h3>Possíveis abordagens</h3>

          <p>
            Evasão escolar, desigualdade regional, inclusão digital e acesso ao
            ensino de qualidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia</span>

        <h2>3. Tecnologia e sociedade</h2>

        <p>
          O avanço tecnológico trouxe benefícios, mas também novos desafios
          sociais.
        </p>

        <div className="lesson-highlight">
          <h3>Temas possíveis</h3>

          <ul>
            <li>Fake news;</li>
            <li>Privacidade digital;</li>
            <li>Dependência tecnológica;</li>
            <li>Saúde mental;</li>
            <li>Exclusão digital.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica estratégica</h3>

          <p>
            Relacione tecnologia ao impacto social e às consequências coletivas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura argumentativa</span>

        <h2>4. Como estruturar argumentos sobre temas sociais</h2>

        <p>
          Independentemente do tema, a lógica argumentativa eficaz segue um padrão
          de quatro etapas que garante profundidade e coerência ao texto dissertativo.
        </p>

        <svg
          viewBox="0 0 700 180"
          className="lesson-svg"
          aria-label="Estrutura de argumento sobre tema social"
        >
          <defs>
            <marker id="arr32b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
            </marker>
          </defs>
          {/* Bloco 1 */}
          <rect x="10" y="60" width="140" height="65" rx="8" fill="#6366f1" />
          <text x="80" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">① Tese</text>
          <text x="80" y="103" textAnchor="middle" fill="#e0e7ff" fontSize="10">Ponto de vista</text>
          <text x="80" y="117" textAnchor="middle" fill="#e0e7ff" fontSize="10">claro sobre o tema</text>
          {/* Seta 1→2 */}
          <line x1="150" y1="92" x2="178" y2="92" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr32b)" />
          {/* Bloco 2 */}
          <rect x="178" y="60" width="155" height="65" rx="8" fill="#4f46e5" />
          <text x="256" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">② Dado/Estatística</text>
          <text x="256" y="103" textAnchor="middle" fill="#e0e7ff" fontSize="10">Evidência concreta</text>
          <text x="256" y="117" textAnchor="middle" fill="#e0e7ff" fontSize="10">que sustenta a tese</text>
          {/* Seta 2→3 */}
          <line x1="333" y1="92" x2="360" y2="92" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr32b)" />
          {/* Bloco 3 */}
          <rect x="360" y="60" width="155" height="65" rx="8" fill="#7c3aed" />
          <text x="437" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">③ Análise Crítica</text>
          <text x="437" y="103" textAnchor="middle" fill="#e0e7ff" fontSize="10">Relação causa-efeito</text>
          <text x="437" y="117" textAnchor="middle" fill="#e0e7ff" fontSize="10">e contexto social</text>
          {/* Seta 3→4 */}
          <line x1="515" y1="92" x2="543" y2="92" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr32b)" />
          {/* Bloco 4 */}
          <rect x="543" y="60" width="147" height="65" rx="8" fill="#a21caf" />
          <text x="617" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">④ Proposta</text>
          <text x="617" y="103" textAnchor="middle" fill="#e0e7ff" fontSize="10">Solução viável</text>
          <text x="617" y="117" textAnchor="middle" fill="#e0e7ff" fontSize="10">e ética ao problema</text>
          {/* Rótulo superior */}
          <text x="350" y="30" textAnchor="middle" fill="#3730a3" fontSize="13" fontWeight="bold">Estrutura do argumento dissertativo — ENEM</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tema ENEM</th>
              <th>Textos motivadores típicos</th>
              <th>Ângulo mais cobrado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Educação</td>
              <td>Dados de evasão, reportagens sobre PISA, gráficos de desigualdade</td>
              <td>Acesso desigual e formação cidadã</td>
            </tr>
            <tr>
              <td>Saúde Mental</td>
              <td>Estatísticas OMS, relatos de burnout, redes sociais</td>
              <td>Estigma social e falta de políticas públicas</td>
            </tr>
            <tr>
              <td>Tecnologia</td>
              <td>Marco Civil da Internet, dados de fake news, LGPD</td>
              <td>Desinformação e privacidade</td>
            </tr>
            <tr>
              <td>Violência</td>
              <td>Atlas da Violência, estatísticas do IPEA, notícias</td>
              <td>Desigualdade social como causa estrutural</td>
            </tr>
            <tr>
              <td>Meio Ambiente</td>
              <td>Relatórios do INPE, dados de desmatamento, COP</td>
              <td>Tensão entre desenvolvimento e preservação</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Violência</span>

        <h2>5. Violência e segurança pública</h2>

        <p>
          Questões relacionadas à violência aparecem frequentemente em debates
          sociais contemporâneos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚨</span>

            <h3>Violência urbana</h3>

            <p>Impactos sociais e insegurança.</p>
          </div>

          <div className="lesson-card">
            <span>🚺</span>

            <h3>Violência contra mulheres</h3>

            <p>Problema estrutural e cultural.</p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>

            <h3>Direitos humanos</h3>

            <p>Necessidade de soluções éticas.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção</h3>

          <p>
            Propostas violentas ou extremas prejudicam a Competência 5.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde mental</span>

        <h2>6. Saúde mental e sociedade</h2>

        <p>
          Temas ligados à saúde mental ganharam grande espaço nos debates
          sociais recentes.
        </p>

        <div className="lesson-highlight">
          <h3>Problemas recorrentes</h3>

          <ul>
            <li>Ansiedade;</li>
            <li>Depressão;</li>
            <li>Pressão social;</li>
            <li>Impacto das redes sociais;</li>
            <li>Falta de apoio psicológico.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Importante</h3>

          <p>
            Temas de saúde mental exigem linguagem ética e humanizada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meio ambiente</span>

        <h2>7. Meio ambiente e sustentabilidade</h2>

        <p>
          Questões ambientais são recorrentes devido aos impactos globais das
          mudanças climáticas e do consumo excessivo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>

            <h3>Sustentabilidade</h3>

            <p>Uso consciente dos recursos naturais.</p>
          </div>

          <div className="lesson-card">
            <span>🔥</span>

            <h3>Crise climática</h3>

            <p>Impactos ambientais globais.</p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>

            <h3>Poluição</h3>

            <p>Consequências sociais e ambientais.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Possíveis argumentos</h3>

          <p>
            Falta de fiscalização, consumo excessivo e necessidade de educação
            ambiental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inclusão</span>

        <h2>8. Inclusão social e diversidade</h2>

        <p>
          Inclusão e diversidade aparecem em discussões sobre cidadania e acesso
          a direitos.
        </p>

        <div className="lesson-highlight">
          <h3>Exemplos de discussão</h3>

          <ul>
            <li>Pessoas com deficiência;</li>
            <li>Inclusão digital;</li>
            <li>Combate ao preconceito;</li>
            <li>Acesso à cultura;</li>
            <li>Igualdade de oportunidades.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Objetivo</h3>

          <p>
            Defender participação social ampla e garantia de cidadania.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências ENEM</span>

        <h2>9. As Competências na prática</h2>

        <p>
          Conhecer como cada competência se manifesta na redação sobre temas sociais
          permite ao candidato direcionar seus esforços com maior precisão.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Competência</th>
              <th>Critério avaliado</th>
              <th>Dica prática para temas sociais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C1 — Domínio da escrita</td>
              <td>Gramática, ortografia, regência, concordância</td>
              <td>Revise pontuação e use linguagem formal sem arcaismos</td>
            </tr>
            <tr>
              <td>C2 — Compreensão do tema</td>
              <td>Interpretação correta do tema e tipo textual</td>
              <td>Leia todos os textos motivadores e identifique o fio condutor</td>
            </tr>
            <tr>
              <td>C3 — Argumentação</td>
              <td>Seleção, organização e profundidade dos argumentos</td>
              <td>Use dado + análise + repertório; evite senso comum</td>
            </tr>
            <tr>
              <td>C4 — Coesão textual</td>
              <td>Conectivos, referências, progressão temática</td>
              <td>Varie os conectivos e retome o tema a cada parágrafo</td>
            </tr>
            <tr>
              <td>C5 — Proposta de intervenção</td>
              <td>Agente, ação, meio, finalidade, detalhamento</td>
              <td>Complete os 5 elementos e respeite os direitos humanos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>

        <h2>10. Como se preparar para qualquer tema</h2>

        <p>
          Em vez de decorar redações prontas, o ideal é dominar repertórios e
          estruturas argumentativas adaptáveis.
        </p>

        <div className="lesson-highlight">
          <h3>Estratégias eficientes</h3>

          <ul>
            <li>Organizar repertórios por eixo temático;</li>
            <li>Treinar interpretação de temas;</li>
            <li>Praticar propostas de intervenção;</li>
            <li>Estudar atualidades;</li>
            <li>Treinar argumentação crítica.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica final</h3>

          <p>
            Quem domina análise social consegue adaptar argumentos a diferentes
            propostas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>11. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>O ENEM prioriza problemas sociais contemporâneos;</li>
            <li>Educação é tema recorrente;</li>
            <li>Tecnologia e saúde mental ganharam destaque;</li>
            <li>Questões ambientais aparecem frequentemente;</li>
            <li>Inclusão social é um eixo importante;</li>
            <li>Estratégia vale mais que decorar textos prontos.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Perfil dos temas do ENEM"
          statement={<p>Os temas da redação ENEM costumam abordar:</p>}
          options={[
            { letter: "a", text: "assuntos totalmente fictícios" },
            {
              letter: "b",
              text: "problemas sociais contemporâneos",
              correct: true,
            },
            { letter: "c", text: "somente literatura clássica" },
            { letter: "d", text: "equações matemáticas" },
          ]}
          resolution={
            <p>
              O ENEM prioriza debates sociais ligados à cidadania e aos direitos
              humanos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Tecnologia"
          statement={<p>Um tema ligado à tecnologia é:</p>}
          options={[
            { letter: "a", text: "métrica poética" },
            {
              letter: "b",
              text: "fake news e privacidade digital",
              correct: true,
            },
            { letter: "c", text: "estrutura narrativa" },
            { letter: "d", text: "classificação verbal" },
          ]}
          resolution={
            <p>
              Fake news e privacidade digital são problemas sociais ligados à
              tecnologia contemporânea.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Estratégia de preparação"
          statement={<p>Uma boa estratégia para a redação ENEM é:</p>}
          options={[
            { letter: "a", text: "decorar textos completos" },
            {
              letter: "b",
              text: "organizar repertórios por eixo temático",
              correct: true,
            },
            { letter: "c", text: "ignorar atualidades" },
            { letter: "d", text: "evitar propostas de intervenção" },
          ]}
          resolution={
            <p>
              Organizar repertórios por temas facilita adaptação a diferentes
              propostas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Competências e temas sociais"
          statement={
            <p>
              A proposta de intervenção de uma redação nota 1000 sobre desigualdade
              educacional deve, obrigatoriamente, contemplar:
            </p>
          }
          options={[
            { letter: "a", text: "somente a identificação do problema, sem soluções" },
            { letter: "b", text: "agente, ação, meio, finalidade e detalhamento, respeitando os direitos humanos", correct: true },
            { letter: "c", text: "apenas medidas repressivas e punitivas" },
            { letter: "d", text: "a análise histórica sem relação com o presente" },
            { letter: "e", text: "citações filosóficas sem conexão com o tema" },
          ]}
          resolution={
            <p>
              A Competência 5 exige proposta completa com cinco elementos: agente
              (quem age), ação (o que fazer), meio (como), finalidade (para quê)
              e detalhamento — sempre respeitando os direitos humanos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Repertório sociocultural"
          statement={
            <p>
              Ao redigir sobre saúde mental na sociedade contemporânea, um estudante
              utilizou o conceito de "modernidade líquida" de Zygmunt Bauman para
              contextualizar a fragilidade dos vínculos afetivos como fator
              agravante dos transtornos psicológicos. Essa estratégia:
            </p>
          }
          options={[
            { letter: "a", text: "prejudica a redação por fugir ao tema proposto" },
            { letter: "b", text: "fortalece a argumentação ao conectar repertório filosófico ao problema analisado", correct: true },
            { letter: "c", text: "demonstra fuga ao tema por abordar filosofia" },
            { letter: "d", text: "é adequada somente se houver citação literal de Bauman" },
            { letter: "e", text: "comprova domínio da escrita (C1), não da argumentação (C3)" },
          ]}
          resolution={
            <p>
              Usar repertório filosófico de forma produtiva — relacionando o conceito
              ao argumento e ao tema — fortalece especialmente a Competência 3
              (seleção de argumentos) e pode contribuir também para a Competência 2
              (interpretação do tema).
            </p>
          }
        />
      </section>
    </article>
  );
}
