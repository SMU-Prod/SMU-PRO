"use client";
// src/content/redacao/cap36/Cap36Page.tsx

import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 36</span>

          <h1>Redação sobre Meio Ambiente</h1>

          <p>
            Aprenda como construir redações sobre meio ambiente utilizando
            argumentação crítica, repertórios produtivos e propostas sustentáveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Questão global</span>

        <h2>1. Meio ambiente como problema social</h2>

        <p>
          Problemas ambientais afetam diretamente qualidade de vida, saúde,
          economia e relações sociais em escala global. O Brasil ocupa posição
          paradoxal nesse debate: possui a maior biodiversidade do planeta e,
          ao mesmo tempo, enfrenta desafios graves de desmatamento, poluição
          e exploração predatória de recursos naturais — o que torna o tema
          especialmente relevante para o ENEM.
        </p>

        <svg
          viewBox="0 0 700 260"
          className="lesson-svg"
          aria-label="Ameaças ambientais — mapa de causas e efeitos"
        >
          <defs>
            <marker id="arr36a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#15803d" />
            </marker>
          </defs>
          {/* Centro */}
          <ellipse cx="350" cy="130" rx="80" ry="38" fill="#15803d" />
          <text x="350" y="123" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Crise</text>
          <text x="350" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ambiental</text>
          {/* Desmatamento */}
          <line x1="274" y1="116" x2="168" y2="72" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="55" y="46" width="125" height="46" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="118" y="66" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Desmatamento</text>
          <text x="118" y="82" textAnchor="middle" fill="#166534" fontSize="10">Amazônia e Cerrado</text>
          {/* Poluição */}
          <line x1="282" y1="104" x2="194" y2="46" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="88" y="16" width="120" height="46" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="148" y="36" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Poluição</text>
          <text x="148" y="52" textAnchor="middle" fill="#166534" fontSize="10">ar, água e solo</text>
          {/* Aquecimento */}
          <line x1="350" y1="92" x2="350" y2="36" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="270" y="8" width="160" height="46" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="350" y="28" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Aquecimento Global</text>
          <text x="350" y="44" textAnchor="middle" fill="#166534" fontSize="10">CO₂ e gases de efeito estufa</text>
          {/* Biodiversidade */}
          <line x1="418" y1="104" x2="508" y2="46" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="498" y="16" width="140" height="46" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="568" y="36" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Perda Biodiversidade</text>
          <text x="568" y="52" textAnchor="middle" fill="#166534" fontSize="10">extinção de espécies</text>
          {/* Escassez Hídrica */}
          <line x1="426" y1="116" x2="528" y2="72" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="520" y="46" width="150" height="46" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="595" y="66" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Escassez Hídrica</text>
          <text x="595" y="82" textAnchor="middle" fill="#166534" fontSize="10">crise de água doce</text>
          {/* Consumismo */}
          <line x1="350" y1="168" x2="350" y2="225" stroke="#15803d" strokeWidth="1.5" markerEnd="url(#arr36a)" />
          <rect x="260" y="225" width="180" height="34" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
          <text x="350" y="246" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Consumismo Excessivo</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Ideia central</h3>

          <p>
            Questões ambientais não envolvem apenas natureza, mas também
            responsabilidade coletiva e desenvolvimento sustentável.
          </p>
        </div>

        <div className="math-block">
          <h3>No ENEM</h3>

          <p>
            O tema costuma exigir visão crítica sobre consumo, políticas públicas
            e sustentabilidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Problemas ambientais</span>

        <h2>2. Principais desafios contemporâneos</h2>

        <p>
          Diversos problemas ambientais aparecem frequentemente em debates
          sociais e propostas de redação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>

            <h3>Queimadas</h3>

            <p>Destruição ambiental e impactos climáticos.</p>
          </div>

          <div className="lesson-card">
            <span>🌳</span>

            <h3>Desmatamento</h3>

            <p>Perda da biodiversidade e desequilíbrio ecológico.</p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>

            <h3>Poluição</h3>

            <p>Contaminação do ar, água e solo.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Outros temas recorrentes</h3>

          <ul>
            <li>Crise climática;</li>
            <li>Produção excessiva de lixo;</li>
            <li>Consumo exagerado;</li>
            <li>Escassez de água;</li>
            <li>Uso inadequado de recursos naturais.</li>
          </ul>
        </div>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Problema ambiental</th>
              <th>Causas principais</th>
              <th>Consequências</th>
              <th>Soluções possíveis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desmatamento</td>
              <td>Agropecuária predatória, fiscalização insuficiente</td>
              <td>Perda de biodiversidade, emissão de CO₂, desequilíbrio climático</td>
              <td>Código Florestal, PSA, fiscalização via satélite (INPE)</td>
            </tr>
            <tr>
              <td>Poluição hídrica</td>
              <td>Despejo industrial, saneamento precário</td>
              <td>Doenças, morte de espécies, insegurança alimentar</td>
              <td>Marco Legal do Saneamento (Lei 14.026/2020); investimento em ETEs</td>
            </tr>
            <tr>
              <td>Aquecimento global</td>
              <td>Uso de combustíveis fósseis, queimadas, pecuária</td>
              <td>Eventos climáticos extremos, derretimento de geleiras, refugiados climáticos</td>
              <td>Acordo de Paris; transição para energia renovável</td>
            </tr>
            <tr>
              <td>Resíduos sólidos</td>
              <td>Consumismo, descarte inadequado</td>
              <td>Contaminação do solo, poluição de rios e oceanos</td>
              <td>PNRS (Lei 12.305/2010); logística reversa; educação ambiental</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade</span>

        <h2>3. Desenvolvimento sustentável</h2>

        <p>
          Sustentabilidade envolve equilíbrio entre crescimento econômico,
          preservação ambiental e qualidade de vida.
        </p>

        <div className="lesson-highlight">
          <h3>Princípios importantes</h3>

          <ul>
            <li>Consumo consciente;</li>
            <li>Preservação ambiental;</li>
            <li>Responsabilidade coletiva;</li>
            <li>Energia limpa;</li>
            <li>Reciclagem e reutilização.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica argumentativa</h3>

          <p>
            Relacione sustentabilidade à garantia de recursos para futuras
            gerações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legislação ambiental</span>

        <h2>4. Legislação ambiental brasileira como repertório</h2>

        <p>
          Conhecer a legislação ambiental brasileira é fundamental para embasar
          propostas de intervenção com autoridade jurídica.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Legislação</th>
              <th>Ano</th>
              <th>Conteúdo principal</th>
              <th>Como usar na redação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Política Nacional do Meio Ambiente</td>
              <td>1981</td>
              <td>Estabelece objetivos e instrumentos de proteção ambiental</td>
              <td>Base para argumentar sobre obrigação do Estado de proteger o ambiente</td>
            </tr>
            <tr>
              <td>Constituição Federal — Art. 225</td>
              <td>1988</td>
              <td>Meio ambiente ecologicamente equilibrado é direito de todos</td>
              <td>Fundamenta que a preservação ambiental é dever constitucional do Estado e da sociedade</td>
            </tr>
            <tr>
              <td>Código Florestal</td>
              <td>2012</td>
              <td>Regula o uso do solo em propriedades rurais (APP, RL)</td>
              <td>Repertório para tratar desmatamento e responsabilidade de produtores rurais</td>
            </tr>
            <tr>
              <td>PNRS — Política Nacional de Resíduos Sólidos</td>
              <td>2010</td>
              <td>Logística reversa, coleta seletiva, responsabilidade compartilhada</td>
              <td>Proposta concreta para gestão de resíduos e economia circular</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Responsabilidade</span>

        <h2>5. Papel do Estado e da sociedade</h2>

        <p>
          A preservação ambiental depende tanto de políticas públicas quanto da
          participação social.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>

            <h3>Estado</h3>

            <p>Fiscalização e políticas ambientais.</p>
          </div>

          <div className="lesson-card">
            <span>👥</span>

            <h3>Sociedade</h3>

            <p>Consumo consciente e participação coletiva.</p>
          </div>

          <div className="lesson-card">
            <span>🏢</span>

            <h3>Empresas</h3>

            <p>Responsabilidade socioambiental.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Importante</h3>

          <p>
            A responsabilidade ambiental é compartilhada entre governo,
            instituições e cidadãos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Proposta de intervenção</span>

        <h2>6. Proposta de intervenção ambiental — modelo de 5 elementos</h2>

        <svg
          viewBox="0 0 700 140"
          className="lesson-svg"
          aria-label="Proposta de intervenção ambiental — modelo dos 5 elementos"
        >
          <rect x="10" y="30" width="128" height="80" rx="6" fill="#15803d" />
          <text x="74" y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Quem</text>
          <text x="74" y="66" textAnchor="middle" fill="#dcfce7" fontSize="10">(Agente)</text>
          <text x="74" y="84" textAnchor="middle" fill="white" fontSize="10">Ibama /</text>
          <text x="74" y="98" textAnchor="middle" fill="white" fontSize="10">Min. Ambiente</text>

          <rect x="148" y="30" width="128" height="80" rx="6" fill="#16a34a" />
          <text x="212" y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Faz o quê</text>
          <text x="212" y="66" textAnchor="middle" fill="#dcfce7" fontSize="10">(Ação)</text>
          <text x="212" y="84" textAnchor="middle" fill="white" fontSize="10">Implementar</text>
          <text x="212" y="98" textAnchor="middle" fill="white" fontSize="10">fiscalização digital</text>

          <rect x="286" y="30" width="128" height="80" rx="6" fill="#166534" />
          <text x="350" y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Com quem</text>
          <text x="350" y="66" textAnchor="middle" fill="#dcfce7" fontSize="10">(Parceiro)</text>
          <text x="350" y="84" textAnchor="middle" fill="white" fontSize="10">INPE e</text>
          <text x="350" y="98" textAnchor="middle" fill="white" fontSize="10">municípios</text>

          <rect x="424" y="30" width="128" height="80" rx="6" fill="#14532d" />
          <text x="488" y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Para quê</text>
          <text x="488" y="66" textAnchor="middle" fill="#dcfce7" fontSize="10">(Finalidade)</text>
          <text x="488" y="84" textAnchor="middle" fill="white" fontSize="10">Reduzir</text>
          <text x="488" y="98" textAnchor="middle" fill="white" fontSize="10">desmatamento</text>

          <rect x="562" y="30" width="128" height="80" rx="6" fill="#052e16" />
          <text x="626" y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Como</text>
          <text x="626" y="66" textAnchor="middle" fill="#dcfce7" fontSize="10">(Mecanismo)</text>
          <text x="626" y="84" textAnchor="middle" fill="white" fontSize="10">Multas e</text>
          <text x="626" y="98" textAnchor="middle" fill="white" fontSize="10">monitoramento via satélite</text>
          <text x="350" y="18" textAnchor="middle" fill="#14532d" fontSize="12" fontWeight="bold">Exemplo de intervenção completa — Desmatamento</text>
        </svg>

        <div className="lesson-highlight">
          <h3>Possíveis soluções</h3>

          <ul>
            <li>Campanhas de educação ambiental;</li>
            <li>Fiscalização contra crimes ambientais;</li>
            <li>Incentivo à reciclagem;</li>
            <li>Investimento em energia limpa;</li>
            <li>Projetos de conscientização coletiva.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Agentes possíveis</h3>

          <p>
            Ministério do Meio Ambiente, escolas, mídia, ONGs e empresas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Competências ENEM</span>

        <h2>7. Competências ENEM — aplicação ao tema ambiental</h2>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Competência ENEM</th>
              <th>Critério avaliado</th>
              <th>Dica prática para tema ambiental</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C1 — Domínio da escrita</td>
              <td>Gramática, ortografia, pontuação</td>
              <td>Atenção a nomes técnicos: "Amazônia" (maiúscula), "biodiversidade" (minúscula)</td>
            </tr>
            <tr>
              <td>C2 — Compreensão do tema</td>
              <td>Interpretação do tema proposto</td>
              <td>Identifique se o foco é conservação, consumo, políticas públicas ou educação ambiental</td>
            </tr>
            <tr>
              <td>C3 — Argumentação</td>
              <td>Profundidade e coerência dos argumentos</td>
              <td>Use dados do INPE, ONU, Acordo de Paris e autores como Milton Santos ou Henri Acselrad</td>
            </tr>
            <tr>
              <td>C4 — Coesão</td>
              <td>Conectivos e progressão temática</td>
              <td>Use "ademais", "sob esse viés", "nessa perspectiva" para articular parágrafos</td>
            </tr>
            <tr>
              <td>C5 — Intervenção</td>
              <td>Proposta de solução viável</td>
              <td>Cite legislação ambiental (CF Art. 225, Código Florestal) na proposta de intervenção</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>

        <h2>8. Erros comuns nesse tema</h2>

        <p>
          Muitos textos ambientais apresentam superficialidade ou propostas pouco
          viáveis.
        </p>

        <div className="lesson-highlight">
          <h3>Evite:</h3>

          <ul>
            <li>Generalizações vagas;</li>
            <li>Ausência de análise crítica;</li>
            <li>Propostas impossíveis;</li>
            <li>Ignorar responsabilidade coletiva;</li>
            <li>Uso excessivo de clichês.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Dica final</h3>

          <p>
            Relacione meio ambiente à cidadania, economia e qualidade de vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>

        <h2>9. Pontos Mais Importantes</h2>

        <div className="lesson-highlight">
          <ul>
            <li>Questões ambientais afetam toda a sociedade;</li>
            <li>Sustentabilidade é tema central;</li>
            <li>Estado e sociedade possuem responsabilidades;</li>
            <li>Repertórios atuais fortalecem argumentos;</li>
            <li>Educação ambiental é solução recorrente;</li>
            <li>Argumentação precisa ser crítica e concreta.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Meio ambiente"
          statement={<p>Problemas ambientais afetam principalmente:</p>}
          options={[
            { letter: "a", text: "somente áreas rurais" },
            {
              letter: "b",
              text: "sociedade, economia e qualidade de vida",
              correct: true,
            },
            { letter: "c", text: "apenas animais" },
            { letter: "d", text: "somente florestas" },
          ]}
          resolution={
            <p>
              Questões ambientais possuem impactos sociais, econômicos e
              coletivos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Sustentabilidade"
          statement={<p>Desenvolvimento sustentável significa:</p>}
          options={[
            { letter: "a", text: "explorar recursos sem limites" },
            {
              letter: "b",
              text: "equilibrar desenvolvimento e preservação",
              correct: true,
            },
            { letter: "c", text: "impedir qualquer crescimento econômico" },
            { letter: "d", text: "eliminar tecnologia" },
          ]}
          resolution={
            <p>
              Sustentabilidade busca equilíbrio entre economia, sociedade e meio
              ambiente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Intervenção"
          statement={<p>Uma proposta adequada para esse tema seria:</p>}
          options={[
            { letter: "a", text: "ignorar educação ambiental" },
            {
              letter: "b",
              text: "investir em conscientização e fiscalização",
              correct: true,
            },
            { letter: "c", text: "eliminar toda atividade econômica" },
            { letter: "d", text: "proibir totalmente consumo industrial" },
          ]}
          resolution={
            <p>
              Educação ambiental e fiscalização são soluções viáveis e
              sustentáveis.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Constituição Federal e meio ambiente"
          statement={
            <p>
              O artigo 225 da Constituição Federal estabelece que "todos têm
              direito ao meio ambiente ecologicamente equilibrado, bem de uso
              comum do povo e essencial à sadia qualidade de vida, impondo-se
              ao Poder Público e à coletividade o dever de defendê-lo e
              preservá-lo para as presentes e futuras gerações." Com base nesse
              artigo, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "apenas o Poder Público tem obrigação de preservar o meio ambiente" },
            { letter: "b", text: "a proteção ambiental é obrigação compartilhada entre Estado e sociedade, com previsão constitucional", correct: true },
            { letter: "c", text: "o direito ao meio ambiente equilibrado se sobrepõe ao direito à propriedade privada em qualquer situação" },
            { letter: "d", text: "a Constituição proíbe qualquer atividade econômica que cause impacto ambiental" },
            { letter: "e", text: "a preservação ambiental é obrigação exclusiva das gerações futuras" },
          ]}
          resolution={
            <p>
              O art. 225 da CF/88 é claro ao estabelecer responsabilidade
              compartilhada: tanto o Poder Público quanto a coletividade têm
              dever de defender e preservar o meio ambiente. Esse dispositivo
              é um dos mais citados em redações sobre sustentabilidade e
              políticas ambientais, servindo tanto como fundamento para cobrar
              ação do Estado quanto para responsabilizar a sociedade civil.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Justiça ambiental e desigualdade"
          statement={
            <p>
              O conceito de "justiça ambiental" aponta que as populações mais
              pobres e as comunidades tradicionais são desproporcionalmente
              afetadas pela degradação ambiental — seja por viverem em áreas
              de risco, seja por terem menor capacidade de mitigar os efeitos
              de desastres. Na redação ENEM, esse conceito pode fortalecer
              principalmente:
            </p>
          }
          options={[
            { letter: "a", text: "apenas argumentos sobre o desmatamento da Amazônia" },
            { letter: "b", text: "a análise de causas (C3), ao conectar degradação ambiental à desigualdade social como problema estrutural", correct: true },
            { letter: "c", text: "a competência de domínio da escrita (C1), por ser um conceito técnico" },
            { letter: "d", text: "somente a proposta de intervenção (C5), por sugerir ações compensatórias" },
            { letter: "e", text: "a compreensão do tema (C2), por ampliar o escopo do debate para além do Brasil" },
          ]}
          resolution={
            <p>
              Ao revelar que as consequências da crise ambiental são distribuídas
              de forma desigual — recaindo mais sobre grupos vulneráveis —,
              o conceito de justiça ambiental aprofunda a análise das causas
              (C3): não é apenas um problema ecológico, mas uma manifestação
              de desigualdade estrutural. Autores como Henri Acselrad (UFRJ) e
              Milton Santos exploram essa intersecção entre território, poder e
              ambiente.
            </p>
          }
        />
      </section>
    </article>
  );
}
