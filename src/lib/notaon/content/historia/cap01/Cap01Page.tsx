"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 1</span>
          <h1>O que o ENEM cobra em História: competências, habilidades e interpretação histórica</h1>
          <p>
            O Exame Nacional do Ensino Médio avalia História não como memorização de datas e nomes,
            mas como capacidade de leitura crítica de fontes, compreensão de processos históricos e
            articulação entre passado e presente. Entender o que o ENEM realmente cobra é o primeiro
            passo para uma preparação eficaz: neste capítulo você vai conhecer as competências da área
            de Ciências Humanas, as habilidades específicas de H1 a H7, os tipos de questões que
            aparecem na prova e as estratégias mais eficientes para interpretação de documentos históricos.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">A Estrutura da Prova</span>
        <h2>1. Como o ENEM organiza a área de Ciências Humanas</h2>
        <p>
          O ENEM é dividido em quatro grandes áreas do conhecimento. História integra a área de
          <strong> Ciências Humanas e suas Tecnologias</strong>, ao lado de Geografia, Filosofia e
          Sociologia. A prova dessa área contém <strong>45 questões</strong> no total, sendo
          aproximadamente 15 a 18 questões com forte componente histórico. As questões raramente são
          de uma disciplina isolada: é muito comum uma questão misturar um texto histórico com um
          mapa geográfico, uma charge e um dado estatístico, exigindo leitura integrada.
        </p>
        <p>
          A área de Ciências Humanas está organizada em <strong>6 competências</strong> e
          <strong> 30 habilidades</strong>. Cada questão do ENEM é associada a uma habilidade
          específica, o que permite identificar padrões de cobrança ao longo dos anos. Conhecer
          essas habilidades não é tecnicismo burocrático: é entender o que o examinador espera
          que você faça ao ler cada questão.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Diagrama das 6 competências da área de Ciências Humanas no ENEM">
            <rect x="0" y="0" width="720" height="180" fill="#f8f9fa" rx="8"/>
            {/* Título */}
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">6 Competências — Ciências Humanas ENEM</text>
            {/* Caixas das competências */}
            <rect x="10" y="35" width="108" height="52" rx="6" fill="#4361ee" opacity="0.85"/>
            <text x="64" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C1</text>
            <text x="64" y="70" textAnchor="middle" fontSize="9" fill="#fff">Linguagens</text>
            <text x="64" y="82" textAnchor="middle" fontSize="9" fill="#fff">e códigos</text>

            <rect x="128" y="35" width="108" height="52" rx="6" fill="#3a0ca3" opacity="0.85"/>
            <text x="182" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C2</text>
            <text x="182" y="70" textAnchor="middle" fontSize="9" fill="#fff">Tempo</text>
            <text x="182" y="82" textAnchor="middle" fontSize="9" fill="#fff">histórico</text>

            <rect x="246" y="35" width="108" height="52" rx="6" fill="#7209b7" opacity="0.85"/>
            <text x="300" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C3</text>
            <text x="300" y="70" textAnchor="middle" fontSize="9" fill="#fff">Espaço</text>
            <text x="300" y="82" textAnchor="middle" fontSize="9" fill="#fff">geográfico</text>

            <rect x="364" y="35" width="108" height="52" rx="6" fill="#f72585" opacity="0.85"/>
            <text x="418" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C4</text>
            <text x="418" y="70" textAnchor="middle" fontSize="9" fill="#fff">Divers.</text>
            <text x="418" y="82" textAnchor="middle" fontSize="9" fill="#fff">cultural</text>

            <rect x="482" y="35" width="108" height="52" rx="6" fill="#b5179e" opacity="0.85"/>
            <text x="536" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C5</text>
            <text x="536" y="70" textAnchor="middle" fontSize="9" fill="#fff">Cidadania</text>
            <text x="536" y="82" textAnchor="middle" fontSize="9" fill="#fff">e direitos</text>

            <rect x="600" y="35" width="108" height="52" rx="6" fill="#480ca8" opacity="0.85"/>
            <text x="654" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">C6</text>
            <text x="654" y="70" textAnchor="middle" fontSize="9" fill="#fff">Trabalho</text>
            <text x="654" y="82" textAnchor="middle" fontSize="9" fill="#fff">e tecnologia</text>

            {/* Barra inferior de habilidades */}
            <text x="360" y="115" textAnchor="middle" fontSize="11" fill="#333">Cada competência desdobra-se em 5 habilidades (H1–H30)</text>
            <rect x="60" y="125" width="600" height="8" rx="4" fill="#4361ee" opacity="0.3"/>
            <rect x="60" y="125" width="100" height="8" rx="4" fill="#4361ee"/>
            <text x="110" y="148" textAnchor="middle" fontSize="9" fill="#333">H1–H5</text>
            <rect x="180" y="125" width="100" height="8" rx="4" fill="#3a0ca3"/>
            <text x="230" y="148" textAnchor="middle" fontSize="9" fill="#333">H6–H10</text>
            <rect x="300" y="125" width="100" height="8" rx="4" fill="#7209b7"/>
            <text x="350" y="148" textAnchor="middle" fontSize="9" fill="#333">H11–H15</text>
            <rect x="420" y="125" width="100" height="8" rx="4" fill="#f72585"/>
            <text x="470" y="148" textAnchor="middle" fontSize="9" fill="#333">H16–H20</text>
            <rect x="540" y="125" width="60" height="8" rx="4" fill="#b5179e"/>
            <text x="570" y="148" textAnchor="middle" fontSize="9" fill="#333">H21–H25</text>

            <text x="360" y="170" textAnchor="middle" fontSize="10" fill="#555">30 habilidades no total — História concentra-se em C2, C4 e C5</text>
          </svg>
          <figcaption>Estrutura das 6 competências da área de Ciências Humanas no ENEM e sua distribuição em habilidades (H1–H30).</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>Foco Principal</th>
                <th>Relação com História</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C1 — Linguagens</td>
                <td>Interpretar textos e linguagens variadas</td>
                <td>Leitura de fontes primárias, charges, iconografia</td>
              </tr>
              <tr>
                <td>C2 — Tempo Histórico</td>
                <td>Compreender processos e mudanças no tempo</td>
                <td>Periodização, continuidades e rupturas históricas</td>
              </tr>
              <tr>
                <td>C3 — Espaço Geográfico</td>
                <td>Relacionar território, sociedade e natureza</td>
                <td>Expansão colonial, formação de territórios</td>
              </tr>
              <tr>
                <td>C4 — Diversidade Cultural</td>
                <td>Valorizar identidades e alteridade</td>
                <td>África, povos indígenas, diáspora africana</td>
              </tr>
              <tr>
                <td>C5 — Cidadania e Direitos</td>
                <td>Democracia, Estado, direitos humanos</td>
                <td>Revoluções, constituições, movimentos sociais</td>
              </tr>
              <tr>
                <td>C6 — Trabalho e Tecnologia</td>
                <td>Transformações produtivas e inovação</td>
                <td>Revoluções Industriais, escravidão, capitalismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidades Específicas</span>
        <h2>2. As habilidades H1–H7 mais cobradas em História</h2>
        <p>
          Dentro das 30 habilidades, as de H1 a H7 são as mais recorrentes nas provas do ENEM
          e constituem o núcleo da competência histórica exigida. Elas abrangem desde a
          identificação de processos de mudança e permanência até o reconhecimento da diversidade
          de interpretações sobre o mesmo evento. Compreender o que cada habilidade exige
          operacionalmente é essencial para não errar por desatenção.
        </p>
        <p>
          A habilidade <strong>H1</strong> pede que o aluno <em>interprete documentos históricos</em>
          de natureza variada — textos oficiais, correspondências, diários, fotografias — extraindo
          informações explícitas e implícitas. A <strong>H2</strong> exige a identificação de
          <em>continuidades e rupturas</em> entre períodos, o que significa perceber o que muda e
          o que permanece ao longo do tempo histórico. A <strong>H3</strong> foca em
          <em>múltiplas causas e consequências</em>, descartando visões simplistas do tipo "a
          Revolução Francesa foi causada apenas pela fome".
        </p>
        <p>
          A <strong>H4</strong> exige reconhecer a <em>diversidade cultural e a alteridade</em>,
          habilidade fortemente associada às questões sobre povos africanos, afrodescendentes e
          populações indígenas — temas recorrentes na prova. A <strong>H5</strong> trabalha
          com a <em>relação entre o local e o global</em>: como um evento no Oriente Médio impacta
          o cotidiano de uma família em Minas Gerais. A <strong>H6</strong> aborda
          <em>sujeitos históricos</em> que não aparecem nos manuais tradicionais — mulheres,
          trabalhadores, populações marginalizadas. A <strong>H7</strong> trabalha com a
          <em>memória histórica</em>: museus, monumentos, datas comemorativas como construções
          sociais que revelam escolhas políticas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Habilidade</th>
                <th>O que a prova pede</th>
                <th>Palavras-chave no enunciado</th>
                <th>Exemplo de tema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>H1</strong></td>
                <td>Interpretar documentos históricos</td>
                <td>"o documento revela", "a fonte indica"</td>
                <td>Carta de Pero Vaz de Caminha</td>
              </tr>
              <tr>
                <td><strong>H2</strong></td>
                <td>Identificar continuidades e rupturas</td>
                <td>"permanência", "mudança", "ruptura"</td>
                <td>Abolição da escravidão e continuidades do racismo</td>
              </tr>
              <tr>
                <td><strong>H3</strong></td>
                <td>Relacionar múltiplas causas e consequências</td>
                <td>"contribuiu para", "resultou em", "entre os fatores"</td>
                <td>Causas da Revolução Industrial</td>
              </tr>
              <tr>
                <td><strong>H4</strong></td>
                <td>Reconhecer diversidade cultural</td>
                <td>"identidade", "cultura", "resistência"</td>
                <td>Quilombos e resistência africana no Brasil</td>
              </tr>
              <tr>
                <td><strong>H5</strong></td>
                <td>Articular local e global</td>
                <td>"impacto", "consequências no Brasil", "contexto mundial"</td>
                <td>Crise de 1929 e seus efeitos no Brasil</td>
              </tr>
              <tr>
                <td><strong>H6</strong></td>
                <td>Reconhecer sujeitos históricos marginalizados</td>
                <td>"trabalhadores", "mulheres", "indígenas", "negros"</td>
                <td>Papel das mulheres na Revolução Francesa</td>
              </tr>
              <tr>
                <td><strong>H7</strong></td>
                <td>Analisar memória e patrimônio histórico</td>
                <td>"memória", "monumento", "data comemorativa"</td>
                <td>O que o 7 de setembro representa hoje</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de Fontes</span>
        <h2>3. Como o ENEM usa fontes históricas nas questões</h2>
        <p>
          Uma das características mais marcantes do ENEM é o uso de fontes históricas variadas
          como suporte das questões. Cada tipo de fonte exige uma abordagem de leitura específica.
          Saber identificar o tipo de fonte e aplicar o método correto de interpretação é
          determinante para acertar questões que parecem difíceis mas são, na verdade, exercícios
          de leitura atenta.
        </p>
        <p>
          <strong>Textos escritos</strong> (cartas, decretos, discursos, tratados) devem ser lidos
          com atenção ao contexto de produção: quem escreveu, para quem, quando e com qual
          intenção. Um decreto imperial não é neutro — é um instrumento de poder. Identificar o
          ponto de vista do autor é essencial.
        </p>
        <p>
          <strong>Imagens e charges</strong> exigem leitura visual: identificar os elementos
          representados, o que está sendo satirizado ou exaltado, quais símbolos são utilizados.
          O ENEM frequentemente usa charges do século XIX e XX sobre temas políticos — a ironia
          e a crítica estão nos detalhes visuais que precisam ser decodificados.
        </p>
        <p>
          <strong>Tabelas e gráficos</strong> requerem leitura quantitativa articulada ao contexto
          histórico: por que a exportação de café caiu em determinado período? O que o crescimento
          urbano entre 1940 e 1970 revela sobre a industrialização brasileira? Os dados não falam
          por si — precisam ser interpretados historicamente.
        </p>

        <div className="lesson-highlight">
          <h3>Método de leitura de fontes históricas no ENEM</h3>
          <p>
            <strong>Passo 1 — Identifique o tipo de fonte:</strong> texto, imagem, tabela, mapa, charge.<br/>
            <strong>Passo 2 — Contextualize:</strong> quando foi produzida? Em que contexto histórico?<br/>
            <strong>Passo 3 — Identifique o autor e seu ponto de vista:</strong> quem produziu e com qual interesse?<br/>
            <strong>Passo 4 — Extraia a ideia central:</strong> o que a fonte afirma, critica ou celebra?<br/>
            <strong>Passo 5 — Relacione com o enunciado:</strong> a questão pede continuidade, ruptura, causa, consequência, crítica?
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de Questões</span>
        <h2>4. Os quatro tipos de questões históricas no ENEM</h2>
        <p>
          As questões de História no ENEM podem ser classificadas em quatro grandes tipos,
          independentemente do período histórico abordado. Reconhecer o tipo de questão
          permite identificar a estratégia correta de resolução antes mesmo de ler as alternativas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Questão</th>
                <th>O que pede</th>
                <th>Como resolver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Contextualização histórica</strong></td>
                <td>Relacionar a fonte ao contexto do período</td>
                <td>Identifique o período, ative o conhecimento sobre ele e conecte à fonte</td>
              </tr>
              <tr>
                <td><strong>Análise documental</strong></td>
                <td>Interpretar o que a fonte diz e o que silencia</td>
                <td>Leia o texto ou imagem com atenção; busque o argumento central; desconfie do óbvio</td>
              </tr>
              <tr>
                <td><strong>Relação passado-presente</strong></td>
                <td>Identificar herança histórica em situações contemporâneas</td>
                <td>Identifique a continuidade ou ruptura entre o passado descrito e o presente</td>
              </tr>
              <tr>
                <td><strong>Comparação entre processos</strong></td>
                <td>Comparar dois eventos, períodos ou sociedades</td>
                <td>Liste características de cada um e encontre semelhanças/diferenças relevantes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Fluxograma de resolução de questões históricas no ENEM">
            <rect x="0" y="0" width="720" height="200" fill="#f8f9fa" rx="8"/>
            <text x="360" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Fluxo de Resolução de Questão Histórica no ENEM</text>

            {/* Passo 1 */}
            <rect x="20" y="40" width="130" height="50" rx="8" fill="#4361ee"/>
            <text x="85" y="61" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">PASSO 1</text>
            <text x="85" y="76" textAnchor="middle" fontSize="9" fill="#fff">Leia o enunciado</text>
            <text x="85" y="88" textAnchor="middle" fontSize="9" fill="#fff">e a fonte</text>
            <line x1="150" y1="65" x2="175" y2="65" stroke="#333" strokeWidth="2" markerEnd="url(#arr)"/>

            {/* Passo 2 */}
            <rect x="175" y="40" width="130" height="50" rx="8" fill="#3a0ca3"/>
            <text x="240" y="61" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">PASSO 2</text>
            <text x="240" y="76" textAnchor="middle" fontSize="9" fill="#fff">Identifique o tipo</text>
            <text x="240" y="88" textAnchor="middle" fontSize="9" fill="#fff">de questão</text>
            <line x1="305" y1="65" x2="330" y2="65" stroke="#333" strokeWidth="2"/>

            {/* Passo 3 */}
            <rect x="330" y="40" width="130" height="50" rx="8" fill="#7209b7"/>
            <text x="395" y="61" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">PASSO 3</text>
            <text x="395" y="76" textAnchor="middle" fontSize="9" fill="#fff">Contextualize</text>
            <text x="395" y="88" textAnchor="middle" fontSize="9" fill="#fff">historicamente</text>
            <line x1="460" y1="65" x2="485" y2="65" stroke="#333" strokeWidth="2"/>

            {/* Passo 4 */}
            <rect x="485" y="40" width="130" height="50" rx="8" fill="#f72585"/>
            <text x="550" y="61" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">PASSO 4</text>
            <text x="550" y="76" textAnchor="middle" fontSize="9" fill="#fff">Elimine as</text>
            <text x="550" y="88" textAnchor="middle" fontSize="9" fill="#fff">alternativas erradas</text>

            {/* Armadilhas comuns */}
            <rect x="20" y="120" width="680" height="65" rx="8" fill="#fff" stroke="#e74c3c" strokeWidth="2"/>
            <text x="360" y="140" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#e74c3c">ARMADILHAS COMUNS</text>
            <text x="180" y="158" textAnchor="middle" fontSize="10" fill="#333">Alternativa verdadeira</text>
            <text x="180" y="172" textAnchor="middle" fontSize="10" fill="#333">mas fora do contexto</text>
            <text x="360" y="158" textAnchor="middle" fontSize="10" fill="#333">Confundir causa</text>
            <text x="360" y="172" textAnchor="middle" fontSize="10" fill="#333">com consequência</text>
            <text x="540" y="158" textAnchor="middle" fontSize="10" fill="#333">Generalizar o que</text>
            <text x="540" y="172" textAnchor="middle" fontSize="10" fill="#333">a fonte não afirma</text>
          </svg>
          <figcaption>Fluxo de resolução de questões históricas no ENEM e as armadilhas mais comuns a evitar.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Temas Recorrentes</span>
        <h2>5. Os temas históricos mais cobrados no ENEM</h2>
        <p>
          Analisando as provas do ENEM de 2009 a 2024, é possível identificar temas que aparecem
          com altíssima frequência. Esses temas não são escolhidos aleatoriamente: refletem os
          valores que o ENEM quer avaliar, sobretudo cidadania, direitos humanos, diversidade
          cultural e pensamento crítico sobre o Brasil e o mundo.
        </p>
        <p>
          <strong>História do Brasil</strong> é o tema mais presente, com destaque para:
          colonização e seus impactos sobre povos indígenas, escravidão e resistência africana,
          Independência e formação do Estado nacional, República Velha, Era Vargas,
          ditadura militar (1964–1985) e redemocratização. Questões sobre a escravidão e o
          racismo estrutural aparecem em praticamente todos os anos, muitas vezes articulando
          passado colonial com desigualdades contemporâneas.
        </p>
        <p>
          <strong>História da África</strong> é obrigatória por lei (Lei 10.639/2003) e aparece
          com crescente frequência: reinos africanos pré-coloniais (Mali, Songai, Congo), tráfico
          negreiro, colonização europeia, pan-africanismo e descolonização. O ENEM frequentemente
          questiona narrativas eurocêntricas e valoriza perspectivas africanas e afrocentradas.
        </p>
        <p>
          <strong>História Contemporânea</strong> também é muito cobrada: Primeira e Segunda
          Guerras Mundiais, totalitarismos (nazismo, fascismo, stalinismo), Guerra Fria,
          descolonização da Ásia e África, globalização e seus impactos. Questões sobre
          <strong> direitos humanos</strong> frequentemente articulam o Holocausto, os
          regimes ditatoriais latino-americanos e conflitos contemporâneos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Frequência</th>
                <th>Principais Subtemas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escravidão e resistência africana no Brasil</td>
                <td>Muito alta</td>
                <td>Quilombos, alforrias, cultura afro-brasileira, pós-abolição</td>
              </tr>
              <tr>
                <td>Ditadura militar brasileira (1964–1985)</td>
                <td>Muito alta</td>
                <td>AI-5, tortura, censura, anistia, abertura política</td>
              </tr>
              <tr>
                <td>Colonização do Brasil</td>
                <td>Alta</td>
                <td>Povos indígenas, exploração, missões jesuíticas, resistência</td>
              </tr>
              <tr>
                <td>Revoluções Industriais</td>
                <td>Alta</td>
                <td>Movimento operário, urbanização, capitalismo, trabalho</td>
              </tr>
              <tr>
                <td>Totalitarismos e Segunda Guerra</td>
                <td>Alta</td>
                <td>Nazismo, fascismo, Holocausto, propaganda</td>
              </tr>
              <tr>
                <td>História da África</td>
                <td>Crescente</td>
                <td>Reinos africanos, colonização europeia, descolonização</td>
              </tr>
              <tr>
                <td>Povos indígenas</td>
                <td>Crescente</td>
                <td>Resistência, territórios, culturas, direitos constitucionais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação de Fontes</span>
        <h2>6. Como ler uma charge histórica no ENEM</h2>
        <p>
          A charge é um dos recursos mais utilizados pelo ENEM em questões de História. Por ser
          uma imagem crítica e satírica, a charge exige do leitor a capacidade de decodificar
          símbolos visuais, identificar o alvo da crítica e compreender o contexto histórico
          que dá sentido à sátira. Uma charge sem contexto histórico é indecifrável; com o
          contexto, torna-se uma fonte riquíssima de análise.
        </p>
        <p>
          O método para ler uma charge histórica começa pela <strong>identificação dos personagens</strong>
          e objetos representados: quem são? O que vestem? O que carregam? Em seguida, é preciso
          identificar a <strong>hierarquia visual</strong>: quem está em posição de poder e quem
          está subordinado, quem ri e quem sofre. O terceiro passo é identificar os
          <strong>símbolos e metonímias</strong>: uma coroa representa a monarquia, um martelo e
          foice representam o comunismo, uma balança representa a justiça. Por fim, a questão
          geralmente pede que se identifique <strong>qual aspecto do contexto histórico</strong>
          a charge critica, celebra ou ironiza.
        </p>

        <div className="lesson-highlight">
          <h3>Exercício mental com charges históricas</h3>
          <p>
            Ao ver uma charge no ENEM, faça estas perguntas antes de ler as alternativas:<br/>
            <strong>1.</strong> Quem são os personagens? Eles representam grupos sociais, países ou ideologias?<br/>
            <strong>2.</strong> Qual é a situação representada? Alguém está sofrendo, dominando, resistindo?<br/>
            <strong>3.</strong> Qual é o tom: irônico, denunciatório, celebratório?<br/>
            <strong>4.</strong> O que está escondido ou implícito que os elementos visuais sugerem?<br/>
            <strong>5.</strong> Em que período histórico a charge faz sentido? O enunciado informa a data?
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação de Textos</span>
        <h2>7. Como ler um texto histórico no ENEM</h2>
        <p>
          Textos históricos — sejam cartas, decretos, discursos, relatos de viajantes, trechos
          de romances históricos ou excertos de obras historiográficas — são os suportes mais
          frequentes nas questões do ENEM. Diferentemente de uma questão de conhecimento puro,
          nas questões com texto a resposta geralmente está <em>dentro do texto</em> ou pode ser
          inferida a partir dele em combinação com o contexto histórico.
        </p>
        <p>
          O erro mais comum dos candidatos é <strong>ignorar o texto</strong> e responder com
          base apenas no que "já sabem" sobre o tema. Isso é uma armadilha: o ENEM frequentemente
          inclui textos com perspectivas incomuns, pontos de vista de grupos marginalizados ou
          trechos que contradizem a narrativa dominante. Ler o texto atentamente é indispensável.
        </p>
        <p>
          Preste atenção especial ao <strong>título e à autoria</strong>: um texto do século XVII
          escrito por um jesuíta tem intenções muito diferentes de um texto do mesmo período
          escrito por um líder indígena. A perspectiva do autor molda o que é dito e o que é
          omitido. O ENEM costuma explorar justamente essa tensão entre diferentes perspectivas
          sobre o mesmo evento.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Texto</th>
                <th>O que observar</th>
                <th>Armadilha típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fonte primária (carta, decreto)</td>
                <td>Quem escreveu, para quem, qual intenção</td>
                <td>Tomar o texto como verdade absoluta, sem questionar perspectiva</td>
              </tr>
              <tr>
                <td>Texto historiográfico</td>
                <td>Qual interpretação o historiador defende</td>
                <td>Confundir a análise do historiador com fato histórico</td>
              </tr>
              <tr>
                <td>Discurso político</td>
                <td>Qual grupo o discurso representa, qual é o adversário</td>
                <td>Aceitar o discurso como representação neutra da realidade</td>
              </tr>
              <tr>
                <td>Relato de viajante</td>
                <td>O olhar do "outro" e o etnocentrismo implícito</td>
                <td>Não identificar o preconceito cultural embutido na descrição</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Afro-Indígena</span>
        <h2>8. África e povos indígenas no ENEM: uma abordagem obrigatória</h2>
        <p>
          A Lei 10.639/2003 tornou obrigatório o ensino de História e Cultura Afro-Brasileira e
          Africana na educação básica. A Lei 11.645/2008 incluiu também a história e cultura dos
          povos indígenas. O ENEM reflete essa legislação: questões sobre África e povos indígenas
          aparecem todos os anos, e o tratamento dado a esses temas é sempre crítico em relação
          ao eurocentrismo.
        </p>
        <p>
          As questões sobre África no ENEM geralmente exploram: (1) a riqueza e complexidade das
          civilizações africanas pré-coloniais (Egito, Mali, Songai, Zimbábue, Congo); (2) o
          tráfico negreiro como crime contra a humanidade e não apenas como "comércio";
          (3) a resistência africana à escravidão no Brasil (quilombos, revoltas, sincretismo
          religioso); (4) o racismo estrutural como herança histórica que persiste até hoje.
        </p>
        <p>
          As questões sobre povos indígenas exploram: (1) a diversidade e sofisticação das
          culturas indígenas pré-colombianas; (2) os impactos devastadores da colonização
          (mortalidade, escravização, destruição cultural); (3) a resistência indígena ao
          longo de séculos; (4) os direitos constitucionais de 1988 e os conflitos territoriais
          contemporâneos. O ENEM frequentemente apresenta textos escritos <em>por</em> lideranças
          indígenas, e não apenas <em>sobre</em> elas.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Prova</span>
        <h2>9. Estratégias práticas para resolver questões de História no ENEM</h2>
        <p>
          Conhecer o conteúdo é necessário, mas não suficiente. Candidatos que dominam o
          conteúdo histórico podem errar por não aplicarem boas estratégias de resolução.
          As estratégias a seguir foram desenvolvidas com base na análise sistemática das
          provas do ENEM de 2009 a 2024.
        </p>
        <p>
          <strong>Estratégia 1 — Leia o enunciado antes da fonte:</strong> O enunciado da questão
          geralmente indica o que o examinador quer que você encontre na fonte. Lê-lo primeiro
          orienta sua leitura da charge, do texto ou da tabela.
        </p>
        <p>
          <strong>Estratégia 2 — Elimine por absurdo:</strong> Sempre há pelo menos 2 alternativas
          claramente erradas — eliminá-las aumenta sua probabilidade de acerto. Descarte as que
          contradizem o texto da fonte ou o contexto histórico elementar.
        </p>
        <p>
          <strong>Estratégia 3 — Desconfie das alternativas "quase certas":</strong> O ENEM é
          especialista em criar alternativas que contêm informações verdadeiras mas que não
          respondem ao que foi perguntado. A alternativa correta é sempre a que responde
          exatamente ao que o enunciado pede.
        </p>
        <p>
          <strong>Estratégia 4 — Contextualize antes de concluir:</strong> Nunca responda uma
          questão de História sem primeiro situar cronologicamente o tema. Uma afirmação pode
          ser verdadeira no século XVIII e falsa no século XIX.
        </p>

        <div className="lesson-info-box">
          <strong>Dica de ouro para a prova:</strong> Quando a questão apresenta dois textos ou
          duas fontes, procure sempre a <em>convergência ou a tensão</em> entre elas. O ENEM
          frequentemente usa dois textos com perspectivas opostas sobre o mesmo evento e pergunta
          o que eles têm em comum, ou onde divergem. Isso testa a habilidade de análise
          historiográfica comparada.
        </div>
      </section>

      {/* ===== SEÇÃO 10 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Cronograma de Estudos</span>
        <h2>10. Como organizar seus estudos de História para o ENEM</h2>
        <p>
          A História é uma matéria que requer tanto conhecimento factual quanto habilidade
          interpretativa. Um bom plano de estudos deve equilibrar os dois: sem conhecimento
          do contexto, não há interpretação possível; sem habilidade interpretativa, o
          conhecimento não converte em pontos na prova.
        </p>
        <p>
          Recomenda-se dividir os estudos em três blocos: <strong>conteúdo</strong> (ler e
          compreender os processos históricos), <strong>prática</strong> (resolver questões
          de provas anteriores, especialmente do ENEM) e <strong>revisão</strong> (retomar
          os erros e identificar padrões). A revisão é muitas vezes negligenciada, mas é o
          momento em que ocorre a consolidação do aprendizado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Bloco Temático</th>
                <th>Prioridade</th>
                <th>Tempo sugerido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>História do Brasil (Colonial ao Republicano)</td>
                <td>Altíssima</td>
                <td>35% do tempo total</td>
              </tr>
              <tr>
                <td>História Contemporânea (séc. XX)</td>
                <td>Alta</td>
                <td>25% do tempo total</td>
              </tr>
              <tr>
                <td>História da América Latina</td>
                <td>Alta</td>
                <td>15% do tempo total</td>
              </tr>
              <tr>
                <td>História Antiga e Medieval</td>
                <td>Média</td>
                <td>15% do tempo total</td>
              </tr>
              <tr>
                <td>História da África e povos indígenas</td>
                <td>Alta e crescente</td>
                <td>10% do tempo total (integrado aos outros blocos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 11 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Direitos Humanos no ENEM</span>
        <h2>11. Direitos humanos como eixo transversal em História</h2>
        <p>
          Um dos eixos mais importantes do ENEM é a perspectiva dos direitos humanos aplicada
          à análise histórica. Isso significa que o examinador frequentemente apresenta
          situações históricas e pede que o candidato as avalie à luz de conceitos como
          dignidade humana, igualdade, liberdade e justiça. Reconhecer violações de direitos
          humanos em contextos históricos e relacioná-las a lutas contemporâneas é uma
          habilidade central da prova.
        </p>
        <p>
          A Declaração Universal dos Direitos Humanos de 1948, aprovada após o horror do
          Holocausto, é um marco histórico frequentemente referenciado. Questões sobre nazismo,
          ditaduras militares, apartheid e colonialismo invariavelmente passam pelo filtro dos
          direitos humanos. O ENEM não é uma prova neutra: ela tem uma posição ética clara em
          favor da dignidade humana, da democracia e contra toda forma de discriminação.
        </p>
      </section>

      {/* ===== SEÇÃO 12 — EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Habilidades do ENEM em História"
          statement={
            <p>
              No ENEM, a habilidade H4 da área de Ciências Humanas pede que o candidato reconheça
              a diversidade cultural e valorize a alteridade. Com base nessa habilidade, qual
              alternativa exemplifica corretamente uma questão do tipo H4?
            </p>
          }
          options={[
            { letter: "a", text: "Calcular a taxa de crescimento populacional de uma cidade entre dois censos." },
            { letter: "b", text: "Analisar como o quilombo dos Palmares representou uma forma de resistência cultural e política dos escravizados africanos no Brasil colonial.", correct: true },
            { letter: "c", text: "Identificar as principais causas econômicas da Revolução Industrial inglesa do século XVIII." },
            { letter: "d", text: "Comparar as taxas de mortalidade na Europa antes e depois da Peste Negra do século XIV." },
            { letter: "e", text: "Descrever as etapas do processo de industrialização brasileira no governo Vargas." },
          ]}
          resolution={
            <p>
              A habilidade H4 foca em diversidade cultural e alteridade — a capacidade de reconhecer
              e valorizar culturas diferentes. A alternativa B exemplifica perfeitamente essa
              habilidade: o quilombo dos Palmares não é apenas um evento histórico, mas uma
              manifestação de resistência cultural, política e identitária dos africanos
              escravizados. As demais alternativas envolvem cálculo quantitativo (A), análise
              econômica (C, E) ou análise demográfica (D), que remetem a habilidades diferentes.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Interpretação de fonte primária"
          statement={
            <div>
              <p>
                "Esta terra, Senhor, me parece que da ponta que mais contra o sul vimos, até à
                outra ponta que contra o norte vem, de que nós deste porto houvemos vista, será
                tamanha que haverá nela bem vinte ou vinte e cinco léguas por costa. Tem, ao longo
                do mar, em algumas partes, grandes barreiras, umas vermelhas, e outras brancas;
                e a terra por cima toda chã e muito cheia de grandes arvoredos."
              </p>
              <p><em>(Carta de Pero Vaz de Caminha, 1500)</em></p>
              <p>Sobre a natureza e as limitações desta fonte histórica, é correto afirmar que:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Por ser um documento oficial do Estado português, representa fielmente a perspectiva de todos os habitantes da terra descrita." },
            { letter: "b", text: "Trata-se de uma fonte objetiva e científica, pois foi escrita por um observador direto dos eventos." },
            { letter: "c", text: "A carta reflete o olhar europeu e cristão sobre o território, construindo uma narrativa que serve aos interesses da colonização portuguesa, silenciando a perspectiva dos povos que habitavam a terra.", correct: true },
            { letter: "d", text: "O documento é inválido como fonte histórica por não ter sido escrito por historiadores profissionais." },
            { letter: "e", text: "A carta de Caminha descreve a terra de forma neutra e imparcial, sem qualquer interesse político ou econômico." },
          ]}
          resolution={
            <p>
              A carta de Pero Vaz de Caminha é uma fonte primária fundamental, mas deve ser lida
              criticamente. Ela reflete o olhar do europeu cristão sobre um território que ele
              enxerga como "disponível" para a colonização. A perspectiva dos povos Tupiniquins
              que habitavam a costa está completamente ausente do documento. O examinador do
              ENEM testa exatamente essa habilidade: reconhecer o ponto de vista da fonte,
              seus silêncios e seus interesses. A alternativa C captura isso com precisão.
              As demais alternativas erram ao atribuir objetividade ou neutralidade a um
              documento claramente situado.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Historiografia e múltiplas interpretações"
          statement={
            <div>
              <p>
                <strong>Texto I:</strong> "A Independência do Brasil foi um movimento essencialmente
                elitista, conduzido por fazendeiros e comerciantes que queriam preservar a ordem
                escravocrata e o latifúndio, sem qualquer ruptura social significativa."
              </p>
              <p>
                <strong>Texto II:</strong> "A Independência do Brasil, embora conduzida pelas
                elites, mobilizou amplos setores da população, incluindo trabalhadores livres,
                escravizados que viam na mudança política uma possibilidade de transformação
                social, e grupos que tinham interesses distintos dos proprietários rurais."
              </p>
              <p>
                A divergência entre os dois textos historiográficos acima exemplifica principalmente:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O fato de que a História não é uma ciência e, portanto, qualquer interpretação tem igual validade." },
            { letter: "b", text: "Que os historiadores que escreveram os textos não tinham acesso às mesmas fontes históricas." },
            { letter: "c", text: "A pluralidade de interpretações historiográficas sobre o mesmo evento, refletindo diferentes metodologias, escolhas teóricas e perspectivas analíticas sobre os sujeitos históricos envolvidos.", correct: true },
            { letter: "d", text: "Que um dos textos está necessariamente errado e cabe ao leitor decidir qual é verdadeiro." },
            { letter: "e", text: "A impossibilidade de se conhecer o passado com qualquer grau de certeza." },
          ]}
          resolution={
            <p>
              Os dois textos representam interpretações historiográficas legítimas e diferentes
              sobre a Independência do Brasil. O Texto I privilegia a análise das classes
              dominantes e da continuidade social; o Texto II amplia os sujeitos históricos
              analisados, incorporando grupos subalternos. Essa divergência não significa que
              um está errado: reflete diferentes perguntas feitas ao passado, diferentes fontes
              consultadas e diferentes referenciais teóricos (marxismo, história social, história
              cultural). O ENEM avalia a compreensão de que a História é um campo de debates
              interpretativos — não um repositório de verdades únicas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Relação passado-presente: racismo e história"
          statement={
            <div>
              <p>
                Em 2020, o assassinato de George Floyd nos Estados Unidos desencadeou uma onda
                global de protestos do movimento Black Lives Matter, que derrubou estátuas de
                figuras históricas ligadas ao tráfico negreiro e ao colonialismo em vários países.
                No Brasil, manifestantes também reivindicaram a remoção de monumentos públicos
                a figuras escravagistas.
              </p>
              <p>
                Considerando as habilidades do ENEM, esse evento contemporâneo articulado com
                a História do Brasil colonial e escravocrata exemplifica principalmente qual
                competência da área de Ciências Humanas?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "C1 — Linguagens e códigos, pois o movimento utilizou redes sociais para se comunicar." },
            { letter: "b", text: "C3 — Espaço geográfico, pois os protestos ocorreram em vários países simultaneamente." },
            { letter: "c", text: "C5 — Cidadania e direitos humanos, articulando a herança histórica da escravidão com as demandas contemporâneas por igualdade racial e revisão crítica da memória histórica.", correct: true },
            { letter: "d", text: "C6 — Trabalho e tecnologia, pois o movimento ocorreu em contexto de desemprego gerado pela pandemia." },
            { letter: "e", text: "C2 — Tempo histórico, pois o movimento data de 2020, portanto é um evento recente." },
          ]}
          resolution={
            <p>
              A competência C5 trata de cidadania, democracia e direitos humanos — e é exatamente
              o que está em jogo quando um movimento contemporâneo questiona os monumentos públicos
              a escravagistas. Os protestos do Black Lives Matter articulam o passado histórico
              da escravidão com as desigualdades raciais do presente, e a derrubada de estátuas
              é uma disputa sobre memória histórica e representação simbólica no espaço público.
              Isso envolve direitos humanos, cidadania e a relação entre história e identidade
              — núcleo da C5. A habilidade H7 (memória e patrimônio) também é mobilizada aqui.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Leitura crítica e diversidade de perspectivas"
          statement={
            <div>
              <p>
                "Os índios não têm rei nem lei nem fé, e vivem segundo a natureza,
                sem conhecer Deus nem a alma. [...] São como pássaros livres, sem nenhum cuidado
                do porvir."
              </p>
              <p><em>(Missionário jesuíta, século XVI)</em></p>
              <p>
                Um historiador contemporâneo, ao analisar este tipo de relato colonial sobre
                os povos indígenas, deve adotar a postura de:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Aceitar o relato como descrição objetiva, pois o missionário estava presente no local e observou diretamente os indígenas." },
            { letter: "b", text: "Descartar completamente o documento por ser tendencioso, pois fontes com ponto de vista definido não têm valor histórico." },
            { letter: "c", text: "Reconhecer que o relato revela mais sobre a visão de mundo etnocêntrica e cristã do autor do que sobre a realidade dos povos indígenas, usando-o para analisar a ideologia colonial e buscando fontes complementares.", correct: true },
            { letter: "d", text: "Usar o documento apenas para confirmar o que já se sabe sobre a barbaridade dos colonizadores europeus." },
            { letter: "e", text: "Considerar que, por ser do século XVI, o documento é irrecuperável e não pode ser analisado com as ferramentas historiográficas modernas." },
          ]}
          resolution={
            <p>
              Este exercício testa a habilidade crítica fundamental da análise historiográfica.
              Todo documento histórico é produzido por alguém, com um ponto de vista específico,
              em um contexto específico. O relato do missionário jesuíta está impregnado de
              etnocentrismo e visão cristã: ao dizer que os indígenas "não têm lei nem fé",
              ele está medindo culturas não-europeias com o padrão europeu, que considera
              superior. Um historiador crítico não descarta esse documento — ele o usa para
              entender a ideologia colonial, mas o interroga: o que esse documento revela
              sobre quem o escreveu? O que ele omite sobre os povos que descreve? É essa
              postura reflexiva que o ENEM exige.
            </p>
          }
        />
      </section>
    </article>
  );
}
