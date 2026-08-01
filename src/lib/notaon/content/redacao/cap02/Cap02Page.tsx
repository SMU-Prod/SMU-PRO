"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 2</span>
          <h1>Estrutura do Texto Dissertativo-Argumentativo</h1>
          <p>
            Compreenda a função de cada parágrafo da redação ENEM, aprenda a dimensionar
            corretamente cada seção e domine os templates que transformam uma boa ideia em
            um texto bem construído e pontuado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. Os Quatro Parágrafos e Suas Funções</h2>
        <p>
          O texto dissertativo-argumentativo do ENEM é dividido em <strong>quatro parágrafos</strong>,
          cada um com função precisa e insubstituível. Escrever mais parágrafos não é proibido,
          mas a estrutura mínima de quatro é o padrão esperado. Cada parágrafo deve ter início,
          meio e fim claros, com frase tópico que indica o que será discutido, desenvolvimento
          da ideia e frase de encerramento (ou conector de transição para o próximo parágrafo).
        </p>
        <div className="lesson-highlight">
          <h3>Regra de ouro da estrutura</h3>
          <p>
            Cada parágrafo = uma ideia principal. Não misture dois argumentos diferentes no
            mesmo parágrafo de desenvolvimento. Não coloque a proposta de intervenção fora da
            conclusão. Não inicie a conclusão sem retomar a tese com outras palavras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parágrafo 1</span>
        <h2>2. Introdução: Contextualizar o Tema e Apresentar a Tese</h2>
        <p>
          A introdução tem três missões simultâneas: <strong>contextualizar o tema</strong>
          (mostrar que ele existe e é relevante), <strong>apresentar o recorte</strong> (delimitar
          qual aspecto será discutido) e <strong>enunciar a tese</strong> (seu posicionamento
          claro sobre o problema). A tese deve ser a última — ou penúltima — frase da introdução.
        </p>
        <p>
          Uma introdução bem feita tem entre <strong>5 e 7 linhas</strong>. A contextualização
          ocupa as 3–4 primeiras linhas e pode ser histórica, estatística, hipotética, conceitual
          ou por contraste. A tese é sempre afirmativa, específica e diretamente ligada ao tema.
          Evite introduções com mais de 8 linhas — elas roubam espaço dos desenvolvimentos e
          sinalizam que o candidato está "enrolando".
        </p>
        <div className="lesson-highlight">
          <h3>Modelo de introdução completa (tema: acesso à internet)</h3>
          <p>
            "Na era da informação, o acesso à rede mundial de computadores tornou-se requisito
            fundamental para o exercício pleno da cidadania. Contudo, segundo dados da TIC
            Domicílios 2022, mais de 25 milhões de brasileiros ainda não têm conexão doméstica
            à internet, sendo a maioria residente em áreas rurais e periferias urbanas. Essa
            exclusão digital aprofunda desigualdades históricas, pois impede o acesso a serviços
            públicos, oportunidades de emprego e educação de qualidade. Diante disso, a
            democratização do acesso à internet no Brasil demanda políticas públicas de
            infraestrutura e inclusão digital urgentes."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parágrafo 2</span>
        <h2>3. Desenvolvimento 1: Argumento Principal + Evidência + Análise</h2>
        <p>
          O primeiro parágrafo de desenvolvimento deve conter o <strong>argumento mais forte</strong>
          em defesa da tese. A estrutura interna ideal é <strong>T-E-A</strong>: Tópico (frase
          que enuncia o argumento), Evidência (dado, exemplo, citação ou comparação que comprova
          o argumento) e Análise (reflexão que conecta a evidência ao tema e à tese).
        </p>
        <p>
          O argumento do Dev. 1 geralmente aponta a <strong>causa estrutural ou histórica</strong>
          do problema. Por exemplo, se o tema é desigualdade social, o Dev. 1 pode discutir
          as raízes históricas (escravidão, colonização, concentração fundiária). Esse é o
          argumento mais sólido e é posicionado primeiro para dar peso ao texto.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo de Dev. 1 (tema: acesso à internet)</h3>
          <p>
            "<strong>[Tópico]</strong> A exclusão digital no Brasil é reflexo direto de uma
            infraestrutura de telecomunicações historicamente concentrada nos grandes centros
            urbanos. <strong>[Evidência]</strong> De acordo com a Anatel, cerca de 70% dos
            municípios com população inferior a 10 mil habitantes não possuem cobertura de
            fibra óptica. <strong>[Análise]</strong> Essa disparidade territorial perpetua um
            ciclo de exclusão: sem conectividade adequada, moradores de regiões remotas não
            conseguem acessar serviços públicos digitais, plataformas de ensino a distância ou
            oportunidades de trabalho remoto, o que aprofunda as desigualdades já existentes.
            <strong>[Conector]</strong> Além dessa dimensão estrutural, outros fatores agravam
            o problema."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parágrafo 3</span>
        <h2>4. Desenvolvimento 2: Argumento Complementar — Consequência ou Nova Perspectiva</h2>
        <p>
          O segundo desenvolvimento deve apresentar um argumento <strong>diferente</strong> do
          primeiro — não mais aprofundado do mesmo, mas um ângulo complementar. Estratégias
          comuns: apontar as <strong>consequências</strong> do problema (enquanto o Dev. 1
          tratou das causas), apresentar uma <strong>perspectiva diferente</strong> (econômica,
          cultural, psicológica), ou discutir um <strong>grupo específico</strong> afetado.
        </p>
        <p>
          O Dev. 2 começa obrigatoriamente com uma frase de transição que conecta ao parágrafo
          anterior. Frases como <em>"Além da dimensão histórica, é necessário considerar..."</em>
          ou <em>"Ademais, as consequências dessa realidade se fazem sentir..."</em> são ideais.
          Nunca comece o Dev. 2 com a mesma estrutura do Dev. 1 — isso soa como repetição.
        </p>
        <div className="lesson-highlight">
          <h3>Modelo de Dev. 2 (tema: acesso à internet)</h3>
          <p>
            "<strong>[Transição]</strong> Ademais, as consequências da exclusão digital
            transcendem o plano econômico e atingem diretamente o exercício da cidadania.
            <strong>[Tópico]</strong> Em um país onde serviços como declaração de imposto de
            renda, agendamento de consultas pelo SUS e inscrição em programas sociais são
            realizados predominantemente online, não ter internet equivale a não ter acesso
            ao Estado. <strong>[Evidência]</strong> Durante a pandemia de Covid-19, estudantes
            sem conexão foram excluídos do ensino remoto, gerando lacunas educacionais graves.
            <strong>[Análise]</strong> Esse cenário demonstra que a ausência de conectividade
            não é apenas inconveniência técnica, mas mecanismo de exclusão que viola o direito
            à educação e à participação democrática garantidos pela Constituição Federal."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parágrafo 4</span>
        <h2>5. Conclusão: Retomada da Tese + Proposta de Intervenção Completa</h2>
        <p>
          A conclusão tem duas partes obrigatórias: a <strong>retomada da tese</strong> (com
          outras palavras — nunca copiada da introdução) e a <strong>proposta de intervenção
          completa</strong> com todos os cinco elementos exigidos pelo ENEM.
        </p>
        <p>
          A retomada da tese ocupa aproximadamente as duas primeiras linhas da conclusão. Ela
          deve sintetizar o que foi argumentado nos dois desenvolvimentos e reafirmar o
          posicionamento inicial de forma reformulada. Em seguida, apresenta-se a proposta
          introduzida por conectivo conclusivo: "Portanto", "Logo", "Assim sendo", "Depreende-se,
          portanto, que..." ou "Infere-se, diante do exposto, que...".
        </p>
        <div className="lesson-highlight">
          <h3>Modelo de conclusão completa (tema: acesso à internet)</h3>
          <p>
            "Depreende-se, portanto, que a exclusão digital brasileira é resultado de um modelo
            de telecomunicações concentrador que produz e reproduz desigualdades sociais profundas.
            Para enfrentar esse problema, faz-se necessário que o Ministério das Comunicações
            implemente o Programa Nacional de Conectividade Rural por meio de parcerias
            público-privadas que obriguem as operadoras a expandir fibra óptica a municípios
            com menos de 20 mil habitantes, com o objetivo de garantir acesso à internet de
            qualidade a toda a população, reduzindo a desigualdade digital e ampliando o
            exercício pleno da cidadania no Brasil."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Estrutura Visual com Setas de Coesão</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 340" width="480" height="340" aria-label="Diagrama detalhado dos quatro parágrafos da redação ENEM com conectores de coesão">
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8" />
              </marker>
            </defs>
            <rect x="20" y="10" width="440" height="55" rx="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="30" y="30" fontSize="12" fontWeight="bold" fill="#3730a3">§1 INTRODUÇÃO (5–7 linhas)</text>
            <text x="30" y="48" fontSize="10" fill="#4338ca">Contextualização → Recorte do tema → TESE (última frase)</text>
            <line x1="240" y1="65" x2="240" y2="88" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />
            <text x="248" y="81" fontSize="9" fill="#6b7280">conector de transição</text>
            <rect x="20" y="90" width="440" height="70" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="30" y="110" fontSize="12" fontWeight="bold" fill="#065f46">§2 DESENVOLVIMENTO 1 (7–9 linhas)</text>
            <rect x="30" y="118" width="95" height="22" rx="3" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
            <text x="77" y="133" textAnchor="middle" fontSize="9" fill="#065f46">TÓPICO</text>
            <rect x="140" y="118" width="95" height="22" rx="3" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
            <text x="187" y="133" textAnchor="middle" fontSize="9" fill="#065f46">EVIDÊNCIA</text>
            <rect x="250" y="118" width="95" height="22" rx="3" fill="#a7f3d0" stroke="#059669" strokeWidth="1" />
            <text x="297" y="133" textAnchor="middle" fontSize="9" fill="#065f46">ANÁLISE</text>
            <rect x="360" y="118" width="90" height="22" rx="3" fill="#6ee7b7" stroke="#059669" strokeWidth="1" />
            <text x="405" y="133" textAnchor="middle" fontSize="9" fill="#065f46">CONECTOR</text>
            <line x1="240" y1="160" x2="240" y2="183" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />
            <text x="248" y="176" fontSize="9" fill="#6b7280">"Ademais..." / "Além disso..."</text>
            <rect x="20" y="185" width="440" height="70" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="30" y="205" fontSize="12" fontWeight="bold" fill="#92400e">§3 DESENVOLVIMENTO 2 (7–9 linhas)</text>
            <rect x="30" y="213" width="95" height="22" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
            <text x="77" y="228" textAnchor="middle" fontSize="9" fill="#92400e">TÓPICO</text>
            <rect x="140" y="213" width="95" height="22" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
            <text x="187" y="228" textAnchor="middle" fontSize="9" fill="#92400e">EVIDÊNCIA</text>
            <rect x="250" y="213" width="95" height="22" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
            <text x="297" y="228" textAnchor="middle" fontSize="9" fill="#92400e">ANÁLISE</text>
            <rect x="360" y="213" width="90" height="22" rx="3" fill="#fcd34d" stroke="#d97706" strokeWidth="1" />
            <text x="405" y="228" textAnchor="middle" fontSize="9" fill="#92400e">CONECTOR</text>
            <line x1="240" y1="255" x2="240" y2="278" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)" />
            <text x="248" y="271" fontSize="9" fill="#6b7280">"Portanto..." / "Depreende-se..."</text>
            <rect x="20" y="280" width="440" height="55" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="30" y="300" fontSize="12" fontWeight="bold" fill="#9d174d">§4 CONCLUSÃO (5–7 linhas)</text>
            <text x="30" y="318" fontSize="10" fill="#be185d">Retomada da tese (reformulada) → PI (Ação+Agente+Modo+Finalidade+Efeito)</text>
          </svg>
          <figcaption>Os quatro parágrafos com conectores de transição entre eles e estrutura interna T-E-A nos desenvolvimentos</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dimensionamento</span>
        <h2>7. Tamanho de Cada Parágrafo: Mínimo 5–7 Linhas</h2>
        <p>
          Um parágrafo com menos de 5 linhas raramente consegue desenvolver ideia com profundidade
          suficiente para receber nota alta em C3. Parágrafos muito longos (acima de 10 linhas)
          tendem a misturar ideias e prejudicar a clareza. O equilíbrio é fundamental.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parágrafo</th><th>Mínimo</th><th>Ideal</th><th>Máximo recomendado</th></tr>
            </thead>
            <tbody>
              <tr><td>Introdução</td><td>4 linhas</td><td>5–6 linhas</td><td>7 linhas</td></tr>
              <tr><td>Desenvolvimento 1</td><td>6 linhas</td><td>7–8 linhas</td><td>9 linhas</td></tr>
              <tr><td>Desenvolvimento 2</td><td>6 linhas</td><td>7–8 linhas</td><td>9 linhas</td></tr>
              <tr><td>Conclusão</td><td>4 linhas</td><td>5–6 linhas</td><td>7 linhas</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>20 linhas</strong></td><td><strong>24–28 linhas</strong></td><td><strong>30 linhas</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coesão Inter-parágrafos</span>
        <h2>8. Como Conectar Parágrafos: Conectivos de Transição</h2>
        <p>
          A transição entre parágrafos é um dos elementos que mais contribui para a nota em
          Competência 4. O leitor precisa perceber que cada parágrafo novo é continuação lógica
          do anterior. Para isso, use <strong>frases de transição</strong> no início do Dev. 2
          e da Conclusão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Posição</th><th>Função</th><th>Exemplos de conectivo de transição</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Início do Dev. 2</td>
                <td>Adicionar novo argumento</td>
                <td>"Ademais, ...", "Além dessa dimensão, ...", "Outrossim, ...", "Somado a isso, ..."</td>
              </tr>
              <tr>
                <td>Início do Dev. 2</td>
                <td>Contrastar / aprofundar</td>
                <td>"Entretanto, não apenas ...", "Para além disso, ...", "Sob outro prisma, ..."</td>
              </tr>
              <tr>
                <td>Início da Conclusão</td>
                <td>Concluir / retomar</td>
                <td>"Portanto, ...", "Depreende-se, pois, que ...", "Infere-se, diante do exposto, ..."</td>
              </tr>
              <tr>
                <td>Final do Dev. 1</td>
                <td>Preparar próximo argumento</td>
                <td>"...o que torna imperativa a análise de um segundo fator.", "...além de outros aspectos a serem considerados."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Tese</span>
        <h2>9. A Tese: Posição, Formulação e Coerência Interna</h2>
        <p>
          A tese é o <strong>coração da redação</strong>. Ela é enunciada na introdução (última
          ou penúltima linha) e deve ser defendida pelos dois desenvolvimentos e retomada na
          conclusão. Uma tese bem formulada é: <strong>específica</strong> (não genérica),
          <strong> argumentável</strong> (pode ser contestada), <strong>coerente com o tema</strong>
          e <strong>propositiva</strong> (aponta para uma solução ou causa).
        </p>
        <p>
          Fórmula estrutural da tese: <em>[Problema] + [causa/consequência/aspecto central] +
          [necessidade de solução/reflexão]</em>. Exemplo: "A violência doméstica, perpetuada
          por uma cultura machista institucionalizada, demanda intervenção estatal coordenada
          e transformação estrutural nos valores sociais brasileiros." Essa tese é específica
          (cultura machista), argumentável (pode-se discutir outros fatores) e propositiva
          (demanda intervenção).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros Frequentes</span>
        <h2>10. Erros Estruturais Comuns e Como Evitá-los</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Erro</th><th>Competência afetada</th><th>Como evitar</th></tr>
            </thead>
            <tbody>
              <tr><td>Parágrafo único</td><td>C3 e C4</td><td>Sempre separar em 4 parágrafos com funções distintas</td></tr>
              <tr><td>Conclusão em 1–2 linhas</td><td>C5</td><td>Escrever PI completa com todos os 5 elementos (mínimo 4 linhas)</td></tr>
              <tr><td>Dois devs com o mesmo argumento</td><td>C3</td><td>Dev. 1 = causa/contexto; Dev. 2 = consequência/solução ou novo ângulo</td></tr>
              <tr><td>Introdução sem tese</td><td>C2 e C3</td><td>Última frase da introdução = posicionamento claro sobre o tema</td></tr>
              <tr><td>Desenvolvimento sem análise</td><td>C3</td><td>Sempre conectar a evidência ao tema com frase analítica ("isso demonstra que...")</td></tr>
              <tr><td>Conclusão copiando tese literalmente</td><td>C4</td><td>Reformular a tese com sinônimos e rearticulação sintática</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Templates</span>
        <h2>11. Template de Redação Completo com Frases Modelo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parágrafo</th><th>Posição</th><th>Frase modelo</th></tr>
            </thead>
            <tbody>
              <tr><td>Introdução</td><td>Abertura</td><td>"No contexto de [período/cenário], [contextualização do problema]..."</td></tr>
              <tr><td>Introdução</td><td>Dado</td><td>"Segundo [fonte], [dado estatístico], o que revela [implicação]."</td></tr>
              <tr><td>Introdução</td><td>Tese</td><td>"Diante disso, [problema] demanda [solução/análise], uma vez que [justificativa]."</td></tr>
              <tr><td>Dev. 1</td><td>Tópico</td><td>"No que tange a [aspecto 1], é válido ressaltar que [argumento principal]."</td></tr>
              <tr><td>Dev. 1</td><td>Evidência</td><td>"Nesse sentido, [dado/exemplo] corrobora essa perspectiva, visto que [análise]."</td></tr>
              <tr><td>Dev. 2</td><td>Transição</td><td>"Ademais, sob o prisma de [aspecto 2], observa-se que [argumento complementar]."</td></tr>
              <tr><td>Dev. 2</td><td>Análise</td><td>"Esse cenário evidencia que [relação com a tese], comprometendo [impacto social]."</td></tr>
              <tr><td>Conclusão</td><td>Retomada</td><td>"Depreende-se, portanto, que [síntese dos argumentos + retomada da tese]."</td></tr>
              <tr><td>Conclusão</td><td>PI</td><td>"Para tanto, faz-se necessário que [agente] [ação] por meio de [modo], com o objetivo de [finalidade], [efeito esperado]."</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📝</span>
            <h3>4 parágrafos</h3>
            <p>Introdução, Dev. 1, Dev. 2, Conclusão — cada um com função única</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Estrutura T-E-A</h3>
            <p>Tópico → Evidência → Análise em cada desenvolvimento</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Conectores de transição</h3>
            <p>"Ademais", "Outrossim", "Depreende-se" — articulam os parágrafos</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Tese na introdução</h3>
            <p>Última frase — específica, argumentável, defendida em ambos os devs.</p>
          </div>
          <div className="math-card">
            <span>🏁</span>
            <h3>Conclusão completa</h3>
            <p>Retomada reformulada + PI com 5 elementos obrigatórios</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Equilíbrio</h3>
            <p>Dev. 1 e Dev. 2 com argumentos DIFERENTES — não repita o mesmo</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Proposta de Intervenção — parágrafo correto"
          statement={<p>Em qual parágrafo da redação ENEM deve obrigatoriamente aparecer a proposta de intervenção completa?</p>}
          options={[
            { letter: "a", text: "No Desenvolvimento 1, ao final do argumento principal." },
            { letter: "b", text: "No Desenvolvimento 2, como alternativa de solução ao problema apresentado." },
            { letter: "c", text: "Na Conclusão, após a retomada da tese.", correct: true },
            { letter: "d", text: "Na Introdução, junto com a tese, para antecipar a solução." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. A proposta de intervenção (PI) é
              avaliada pela Competência 5 e deve aparecer exclusivamente no parágrafo de
              conclusão, após a retomada da tese. Apresentar a PI na introdução ou nos
              desenvolvimentos quebra a estrutura esperada e prejudica as notas de C3
              (organização) e C5 (PI fora do lugar).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. O que falta no parágrafo de desenvolvimento"
          statement={
            <p>
              Um estudante escreveu: "A violência doméstica é um problema grave no Brasil.
              Muitas mulheres sofrem agressões em casa. Segundo dados do DataSenado, 29% das
              brasileiras já sofreram violência doméstica. O governo deve criar mais delegacias."
              O que está faltando para que esse parágrafo seja estruturalmente completo?
            </p>
          }
          options={[
            { letter: "a", text: "Uma frase de abertura mais elaborada com contextualização histórica." },
            { letter: "b", text: "A análise que conecta a evidência (dado do DataSenado) ao tema e à tese central.", correct: true },
            { letter: "c", text: "Um segundo dado estatístico para reforçar a evidência já apresentada." },
            { letter: "d", text: "A proposta de intervenção, que pode aparecer em qualquer parágrafo." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. O parágrafo tem frase tópico e
              evidência (dado do DataSenado), mas falta a <strong>análise</strong> — a frase
              que conecta a evidência ao argumento central e à tese. Por exemplo: "Esse dado
              evidencia que a violência doméstica é estruturalmente tolerada, resultado de uma
              cultura que historicamente invisibilizou o sofrimento feminino." A última frase
              ("o governo deve criar delegacias") também antecipa a PI indevidamente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Diagnóstico de problemas estruturais"
          statement={
            <p>
              Analise o trecho: "A educação é importante. Muitos não têm acesso. O governo
              deve agir." como parágrafo de Desenvolvimento 1. Qual alternativa identifica
              TODOS os problemas estruturais presentes?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas falta evidência; a tese e a análise estão presentes implicitamente." },
            { letter: "b", text: "Falta evidência concreta, falta análise crítica, o tópico é vago, e a última frase antecipa PI indevidamente.", correct: true },
            { letter: "c", text: "O único problema é o tamanho — com mais frases desenvolvendo as mesmas ideias, o parágrafo seria adequado." },
            { letter: "d", text: "Há fuga ao tema e erro de concordância verbal, que são os únicos problemas identificáveis." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. O trecho acumula múltiplos problemas:
              (1) Tópico vago — "a educação é importante" não enuncia argumento específico;
              (2) Ausência de evidência — "muitos não têm acesso" é afirmação genérica sem
              dados; (3) Ausência de análise — não há frase conectando o problema à tese;
              (4) PI antecipada — "o governo deve agir" é esboço de proposta no parágrafo
              errado. Em C3, esse desenvolvimento receberia no máximo 80 pontos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Escrever tese para tema 'acesso à internet'"
          statement={
            <p>
              Considerando o tema <em>"A democratização do acesso à internet no Brasil"</em>,
              qual das alternativas apresenta a tese mais adequada para encerrar a introdução —
              específica, argumentável e propositiva?
            </p>
          }
          options={[
            { letter: "a", text: "A internet é muito importante nos dias de hoje e precisa chegar a todos os brasileiros." },
            { letter: "b", text: "O acesso à internet é um direito que deve ser garantido pelo governo." },
            { letter: "c", text: "A exclusão digital no Brasil, fruto da histórica concentração de infraestrutura nas regiões metropolitanas, aprofunda desigualdades sociais e demanda políticas públicas que universalizem a conectividade como direito fundamental.", correct: true },
            { letter: "d", text: "Com o avanço tecnológico, o Brasil precisa modernizar sua infraestrutura de telecomunicações para não ficar para trás no mundo globalizado." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. É específica (aponta a causa:
              concentração de infraestrutura), argumentável (pode-se questionar as causas ou
              soluções), propositiva (demanda políticas públicas) e conecta o problema
              (exclusão digital) a uma consequência (desigualdades). As demais são genéricas
              demais: (a) usa linguagem vaga, (b) é afirmação óbvia, (d) usa o clichê "mundo
              globalizado" sem posicionamento específico.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Dois desenvolvimentos com o mesmo argumento"
          statement={
            <p>
              Uma estudante escreveu: Dev. 1 — "A falta de internet prejudica a educação dos
              jovens pobres." Dev. 2 — "Sem internet, jovens de baixa renda não conseguem
              estudar para o ENEM." Por que essa estrutura prejudica especificamente a nota
              na Competência 3 e como deve ser corrigida?
            </p>
          }
          options={[
            { letter: "a", text: "Prejudica C3 pois os dois parágrafos tratam do mesmo ângulo (educação de jovens) sem progressão temática; Dev. 2 deve abordar outro aspecto, como consequências econômicas ou grupo diferente afetado.", correct: true },
            { letter: "b", text: "Prejudica C3 pois o Dev. 2 não possui evidência estatística, enquanto o Dev. 1 também não a apresentou." },
            { letter: "c", text: "Não prejudica C3, pois os dois argumentos são diferentes — um fala em 'prejudicar' e outro em 'não conseguir estudar'." },
            { letter: "d", text: "Prejudica C4, não C3, pois o problema é de repetição lexical entre os dois parágrafos." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. A C3 avalia "organização e defesa
              de um ponto de vista com progressão temática". Quando os dois desenvolvimentos
              exploram o mesmo aspecto (impacto na educação de jovens), não há progressão —
              o texto "anda em círculos". O corretor interpreta isso como incapacidade de
              desenvolver mais de um argumento, rebaixando C3 para 80–120. A correção é mudar
              o Dev. 2 para ângulo diferente: consequências econômicas, impacto na saúde
              (telemedicina inacessível) ou exclusão de grupos específicos como idosos ou
              população rural.
            </p>
          }
        />
      </section>
    </article>
  );
}
