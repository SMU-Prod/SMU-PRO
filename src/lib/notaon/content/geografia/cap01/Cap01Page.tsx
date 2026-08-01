"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 01</span>
          <h1>O que o ENEM cobra em Geografia: competências, habilidades e interpretação do espaço geográfico</h1>
          <p>
            Antes de mergulhar nos conteúdos específicos de Geografia, é fundamental
            entender como o ENEM avalia essa disciplina. O exame não cobra decoreba de
            capitais ou datas — ele exige que você leia o espaço geográfico com
            raciocínio crítico, interprete mapas, gráficos e tabelas, e relacione
            fenômenos naturais, sociais, econômicos e políticos. Neste capítulo você vai
            descobrir quais competências e habilidades guiam as questões, quais temas
            aparecem com mais frequência e como montar uma estratégia eficiente de estudo
            e de prova.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura da prova</span>
        <h2>1. O ENEM e a Área de Ciências Humanas</h2>
        <p>
          O ENEM é organizado em quatro grandes áreas de conhecimento. A Geografia
          integra a área de <strong>Ciências Humanas e suas Tecnologias</strong>, ao lado
          de História, Sociologia e Filosofia. A prova dessa área contém
          <strong> 45 questões</strong> (das 180 do caderno completo) e é avaliada pela
          Teoria de Resposta ao Item (TRI), que valoriza coerência e profundidade — não
          apenas acertar na sorte.
        </p>
        <p>
          As questões de Ciências Humanas partem sempre de um <em>texto motivador</em>:
          um trecho jornalístico, uma charge, um mapa, um gráfico, uma fotografia ou
          uma citação acadêmica. O candidato precisa acionar conhecimentos geográficos
          para interpretar esse material e selecionar a alternativa correta. Por isso,
          a <strong>leitura de contexto</strong> é tão importante quanto o conteúdo teórico.
        </p>

        <div className="lesson-highlight">
          <strong>Dica estratégica:</strong> Em média, cerca de 12 a 15 das 45 questões
          de Ciências Humanas têm enunciados predominantemente geográficos. Dominar
          Geografia pode garantir até um terço da área!
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Distribuição aproximada de questões por disciplina — área de Ciências Humanas (ENEM)</caption>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Questões (estimativa)</th>
                <th>% da área</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>História</td>
                <td>13 – 15</td>
                <td>29 – 33%</td>
              </tr>
              <tr>
                <td>Geografia</td>
                <td>12 – 15</td>
                <td>27 – 33%</td>
              </tr>
              <tr>
                <td>Sociologia</td>
                <td>8 – 10</td>
                <td>18 – 22%</td>
              </tr>
              <tr>
                <td>Filosofia</td>
                <td>7 – 9</td>
                <td>16 – 20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Competências e habilidades</span>
        <h2>2. Competências da Área e Habilidades de Geografia</h2>
        <p>
          A Matriz de Referência do ENEM organiza os objetivos de aprendizagem em
          <strong> competências</strong> (grandes capacidades cognitivas) e
          <strong> habilidades</strong> (desempenhos específicos e mensuráveis). Para
          Ciências Humanas existem <strong>6 competências</strong> e
          <strong> 30 habilidades</strong> (H1 a H30). As habilidades não aparecem
          etiquetadas nas provas, mas orientam a elaboração de cada questão.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Competências da área de Ciências Humanas e sua relação com Geografia</caption>
            <thead>
              <tr>
                <th>Competência</th>
                <th>Descrição resumida</th>
                <th>Relevância para Geografia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Compreender os elementos culturais e tecnológicos que constituem as identidades</td>
                <td>Cultura, globalização, identidade territorial</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Compreender as transformações dos espaços geográficos como produto das relações socioeconômicas e culturais</td>
                <td>Urbanização, industrialização, uso do solo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Compreender a produção e o papel histórico das instituições sociais, políticas e econômicas</td>
                <td>Geopolítica, fronteiras, blocos econômicos</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Entender as transformações técnicas e tecnológicas e seu impacto nos processos sociais</td>
                <td>Revolução Industrial, redes técnicas, TICs</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Utilizar os conhecimentos históricos para compreender e valorizar os fundamentos da cidadania e democracia</td>
                <td>Direitos territoriais, movimentos sociais</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Compreender a sociedade e a natureza, reconhecendo suas interações no espaço em diferentes contextos</td>
                <td>Clima, biomas, recursos naturais, riscos ambientais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          As habilidades mais cobradas em Geografia estão concentradas nas competências
          2 e 6. A <strong>Competência 2</strong> engloba questões sobre urbanização,
          migração, trabalho, desigualdade socioespacial e globalização. A
          <strong> Competência 6</strong> abarca clima, hidrografia, relevo, biomas,
          desastres naturais e impactos ambientais das atividades humanas.
        </p>

        {/* SVG 1 — Gráfico de barras dos temas mais cobrados */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 320"
            width="520"
            height="320"
            aria-label="Gráfico de barras: temas de Geografia mais cobrados no ENEM (estimativa de frequência)"
            role="img"
          >
            {/* Fundo */}
            <rect x="0" y="0" width="520" height="320" rx="10" fill="#f8fafc" />
            {/* Título */}
            <text x="260" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a5f">
              Temas de Geografia mais cobrados no ENEM
            </text>
            {/* Eixo Y */}
            <line x1="70" y1="40" x2="70" y2="270" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Eixo X */}
            <line x1="70" y1="270" x2="500" y2="270" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Grades */}
            {[50, 100, 150, 200].map((y) => (
              <g key={y}>
                <line x1="70" y1={270 - y} x2="500" y2={270 - y} stroke="#e2e8f0" strokeDasharray="4 3" />
                <text x="62" y={274 - y} textAnchor="end" fontSize="9" fill="#64748b">{y / 10}%</text>
              </g>
            ))}
            {/* Barras e rótulos */}
            {[
              { label: "Urbanização", val: 180, cor: "#3b82f6" },
              { label: "Clima e Biomas", val: 160, cor: "#10b981" },
              { label: "Geopolítica", val: 140, cor: "#f59e0b" },
              { label: "Cartografia", val: 120, cor: "#8b5cf6" },
              { label: "Pop. e Migração", val: 110, cor: "#ef4444" },
              { label: "Meio Ambiente", val: 100, cor: "#06b6d4" },
            ].map((item, i) => {
              const x = 90 + i * 70;
              return (
                <g key={item.label}>
                  <rect x={x} y={270 - item.val} width="42" height={item.val} fill={item.cor} rx="3" opacity="0.85" />
                  <text x={x + 21} y={265 - item.val} textAnchor="middle" fontSize="9" fontWeight="bold" fill={item.cor}>
                    {item.val / 10}%
                  </text>
                  <text x={x + 21} y="285" textAnchor="middle" fontSize="8" fill="#475569">{item.label}</text>
                </g>
              );
            })}
          </svg>
          <figcaption>Frequência estimada de temas de Geografia nas provas do ENEM (2009–2023)</figcaption>
        </figure>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidades em detalhe</span>
        <h2>3. Habilidades H1–H30: O Que Cada Uma Pede</h2>
        <p>
          As 30 habilidades da área estão distribuídas igualmente entre as 6 competências
          (5 habilidades por competência). Para Geografia, as mais frequentemente acionadas
          nas questões são:
        </p>
        <ul>
          <li><strong>H1:</strong> Interpretar historicamente e/ou geograficamente fontes documentais acerca de aspectos da cultura.</li>
          <li><strong>H6:</strong> Interpretar diferentes representações gráficas e cartográficas dos processos de formação e transformação do espaço urbano.</li>
          <li><strong>H7:</strong> Identificar os significados histórico-geográficos das relações de poder entre as nações.</li>
          <li><strong>H11:</strong> Identificar as formas de representação e as linguagens da cartografia e dos recursos tecnológicos de georeferenciamento.</li>
          <li><strong>H16:</strong> Comparar processos de formação socioeconômica, relacionando-os com seu contexto histórico e geográfico.</li>
          <li><strong>H21:</strong> Identificar critérios ambientais que preservem a qualidade da vida e sejam capazes de garantir o desenvolvimento sustentável.</li>
          <li><strong>H26:</strong> Identificar em fontes diversas o processo de ocupação dos meios físicos e as relações da vida humana com a paisagem.</li>
          <li><strong>H27:</strong> Compreender as representações do espaço geográfico a partir de mapas, plantas, gráficos e imagens de satélite.</li>
        </ul>

        <div className="lesson-highlight">
          <strong>Padrão ENEM:</strong> A maioria das questões de Geografia começa com
          verbos como <em>interpretar, analisar, identificar, relacionar</em> e
          <em> comparar</em>. Isso indica que a prova mede raciocínio, não memorização.
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Temas recorrentes</span>
        <h2>4. Os Temas que Mais Aparecem na Prova</h2>
        <p>
          Analisando as provas do ENEM desde 2009, é possível identificar um núcleo de
          temas que retornam com grande regularidade. Conhecê-los em profundidade é o
          caminho mais eficiente para maximizar o desempenho.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Temas de Geografia com maior recorrência no ENEM (análise histórica)</caption>
            <thead>
              <tr>
                <th>Módulo temático</th>
                <th>Subtemas mais cobrados</th>
                <th>Frequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Urbanização</td>
                <td>Crescimento das cidades, periferias, segregação socioespacial, megacidades</td>
                <td>Muito Alta</td>
              </tr>
              <tr>
                <td>Climatologia</td>
                <td>Tipos climáticos, El Niño/La Niña, mudanças climáticas, efeito estufa</td>
                <td>Muito Alta</td>
              </tr>
              <tr>
                <td>Geopolítica</td>
                <td>Conflitos internacionais, blocos econômicos, fronteiras, ordens mundiais</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Cartografia</td>
                <td>Leitura de mapas, escalas, projeções, fusos horários</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Questão Ambiental</td>
                <td>Desmatamento, poluição, conferências internacionais, biomas</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>População e Migração</td>
                <td>Transição demográfica, pirâmide etária, fluxos migratórios</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Globalização e Economia</td>
                <td>Divisão Internacional do Trabalho, multinacionais, comércio</td>
                <td>Média-Alta</td>
              </tr>
              <tr>
                <td>Industrialização</td>
                <td>Revoluções industriais, desindustrialização, zonas de processamento</td>
                <td>Média</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura de mapas</span>
        <h2>5. Como o ENEM Avalia a Leitura de Mapas e Gráficos</h2>
        <p>
          O ENEM usa mapas, gráficos, tabelas e imagens como <em>textos não verbais</em>.
          Eles não são decorativos: carregam a informação central da questão. Saber
          decodificá-los é habilidade essencial.
        </p>
        <p>
          Para <strong>mapas</strong>, o candidato deve observar: título, legenda,
          escala, projeção utilizada e orientação. Depois identificar os padrões
          espaciais — concentração, dispersão, fluxos, limites. O erro mais comum é
          ignorar a legenda e tentar "adivinhar" o que o mapa mostra.
        </p>
        <p>
          Para <strong>gráficos</strong>, verifique sempre: eixos e unidades, período
          de tempo coberto, fonte dos dados e tendência geral (crescimento, queda,
          estabilidade, oscilação). Gráficos de barras, linhas, pizza e pirâmide etária
          são os mais frequentes.
        </p>
        <p>
          Para <strong>tabelas</strong>, leia o cabeçalho e as notas de rodapé antes
          das células. Identifique se os valores são absolutos ou relativos (percentuais)
          e o que a variação entre linhas/colunas revela.
        </p>

        <div className="lesson-highlight">
          <strong>Técnica dos 3 passos para textos não verbais:</strong>
          <ol>
            <li><strong>Descreva:</strong> O que o mapa/gráfico mostra literalmente?</li>
            <li><strong>Interprete:</strong> Qual fenômeno geográfico ele representa?</li>
            <li><strong>Relacione:</strong> Como ele conecta com o enunciado da questão?</li>
          </ol>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa mental das competências</span>
        <h2>6. Visualizando as Competências em Mapa Mental</h2>

        {/* SVG 2 — Mapa mental das competências */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 380"
            width="560"
            height="380"
            aria-label="Mapa mental das 6 competências de Ciências Humanas relacionadas à Geografia"
            role="img"
          >
            <rect x="0" y="0" width="560" height="380" rx="12" fill="#f0f9ff" />
            {/* Nó central */}
            <ellipse cx="280" cy="190" rx="72" ry="38" fill="#1e3a5f" />
            <text x="280" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Ciências</text>
            <text x="280" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Humanas</text>
            {/* Competências — 6 nós externos */}
            {[
              { cx: 100, cy: 80, label: ["C1", "Cultura e"], label2: "Identidade", cor: "#3b82f6" },
              { cx: 280, cy: 48, label: ["C2", "Espaço"], label2: "Geográfico", cor: "#10b981" },
              { cx: 460, cy: 80, label: ["C3", "Instituições"], label2: "e Poder", cor: "#f59e0b" },
              { cx: 460, cy: 300, label: ["C4", "Tecnologia"], label2: "e Sociedade", cor: "#8b5cf6" },
              { cx: 280, cy: 332, label: ["C5", "Cidadania"], label2: "e Democracia", cor: "#ef4444" },
              { cx: 100, cy: 300, label: ["C6", "Natureza"], label2: "e Ambiente", cor: "#06b6d4" },
            ].map((n) => (
              <g key={n.label[0]}>
                <line x1={n.cx} y1={n.cy} x2="280" y2="190" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 3" />
                <ellipse cx={n.cx} cy={n.cy} rx="58" ry="30" fill={n.cor} opacity="0.9" />
                <text x={n.cx} y={n.cy - 6} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">{n.label[0]} – {n.label[1]}</text>
                <text x={n.cx} y={n.cy + 9} textAnchor="middle" fontSize="10" fill="#fff">{n.label2}</text>
              </g>
            ))}
          </svg>
          <figcaption>Mapa mental: as 6 Competências de Ciências Humanas no ENEM</figcaption>
        </figure>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de estudo</span>
        <h2>7. Como Estudar Geografia para o ENEM</h2>
        <p>
          Dado o perfil da prova, a estratégia mais eficiente combina três pilares:
          <strong> base conceitual sólida</strong>, <strong>prática com questões</strong>
          e <strong>atualidade</strong>.
        </p>
        <ul>
          <li>
            <strong>Base conceitual:</strong> estude os conceitos fundamentais de cada
            módulo (espaço, território, lugar, paisagem, região) e as teorias clássicas
            antes de avançar para conteúdos específicos.
          </li>
          <li>
            <strong>Prática com questões:</strong> resolva provas anteriores do ENEM
            organizadas por tema. Identifique os padrões de comando e de enunciado.
          </li>
          <li>
            <strong>Atualidade:</strong> o ENEM adora conectar conteúdo geográfico a
            eventos recentes — guerras, crises climáticas, migrações em massa, acordos
            ambientais. Leia jornais e revistas de divulgação científica.
          </li>
        </ul>

        <div className="lesson-highlight">
          <strong>Cronograma sugerido:</strong> divida os módulos em blocos semanais.
          Dedique 2 horas por semana a questões de provas anteriores, priorizando os
          temas de frequência Muito Alta e Alta da tabela acima.
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas comuns</span>
        <h2>8. Erros Mais Comuns e Como Evitá-los</h2>
        <p>
          Compreender onde os candidatos mais erram ajuda a direcionar o estudo para
          os pontos críticos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Armadilhas frequentes em questões de Geografia no ENEM</caption>
            <thead>
              <tr>
                <th>Erro comum</th>
                <th>Por que acontece</th>
                <th>Como evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Confundir clima com tempo atmosférico</td>
                <td>Termos similares; falta de distinção conceitual</td>
                <td>Clima = padrão de longo prazo; Tempo = condição momentânea</td>
              </tr>
              <tr>
                <td>Ler o mapa sem observar a legenda</td>
                <td>Pressa; assumir significados óbvios de cores</td>
                <td>Sempre ler legenda antes de interpretar o mapa</td>
              </tr>
              <tr>
                <td>Confundir escala numérica com gráfica</td>
                <td>Não praticar cálculos de escala</td>
                <td>Exercitar conversões: 1:100 000 = 1 cm → 1 km</td>
              </tr>
              <tr>
                <td>Misturar países em questões de geopolítica</td>
                <td>Falta de localização espacial dos países</td>
                <td>Estudar mapas políticos e regiões geopolíticas regularmente</td>
              </tr>
              <tr>
                <td>Ignorar o contexto histórico em questões de globalização</td>
                <td>Tratar Geografia de forma isolada</td>
                <td>Conectar sempre com a cronologia histórica e econômica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Na hora da prova</span>
        <h2>9. Técnicas para a Hora da Prova</h2>
        <p>
          Mesmo com muito conteúdo estudado, a gestão da prova faz diferença entre um
          bom e um ótimo resultado. Algumas técnicas específicas para questões de
          Geografia:
        </p>
        <ul>
          <li>
            <strong>Leia o enunciado até o final</strong> antes de olhar as alternativas.
            Muitas questões de Geografia têm enunciados longos com a resposta embutida
            no texto motivador.
          </li>
          <li>
            <strong>Elimine as alternativas absurdas.</strong> Em questões de
            interpretação de mapa ou gráfico, sempre há pelo menos uma alternativa que
            contradiz diretamente o material visual apresentado.
          </li>
          <li>
            <strong>Atenção ao superlativo.</strong> Alternativas com "sempre", "nunca",
            "único" e "apenas" costumam estar erradas em questões de Geografia, que lida
            com fenômenos complexos e multifatoriais.
          </li>
          <li>
            <strong>Geolocalização mental:</strong> ao ler um país, região ou bioma,
            posicione-o mentalmente no mapa. Isso ajuda a descartar alternativas
            geograficamente impossíveis.
          </li>
        </ul>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo do capítulo</span>
        <h2>10. O Que Você Precisa Fixar</h2>
        <p>
          Antes de avançar para os próximos capítulos, certifique-se de que domina
          os seguintes pontos:
        </p>
        <ul>
          <li>Geografia integra a área de Ciências Humanas com 45 questões totais.</li>
          <li>A prova usa competências e habilidades (H1–H30) como balizas.</li>
          <li>Os temas mais cobrados são: urbanização, climatologia, geopolítica e cartografia.</li>
          <li>Textos não verbais (mapas, gráficos, tabelas) são centrais na prova.</li>
          <li>A técnica dos 3 passos (descrever, interpretar, relacionar) facilita a leitura de qualquer material visual.</li>
          <li>Estudo eficiente = base conceitual + prática com questões + atualidade.</li>
        </ul>

        <div className="lesson-highlight">
          <strong>Próximo capítulo:</strong> agora que você conhece o perfil da prova,
          vamos mergulhar nos conceitos fundamentais da Geografia — espaço, território,
          lugar, paisagem e região.
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Pratique o Conteúdo</h2>

        <Exercise
          level="Básico"
          title="1. Área de conhecimento do ENEM"
          statement={<p>No ENEM, a disciplina de Geografia integra qual área de conhecimento?</p>}
          options={[
            { letter: "a", text: "Linguagens, Códigos e suas Tecnologias" },
            { letter: "b", text: "Ciências da Natureza e suas Tecnologias" },
            { letter: "c", text: "Ciências Humanas e suas Tecnologias", correct: true },
            { letter: "d", text: "Matemática e suas Tecnologias" },
          ]}
          resolution={<p>A Geografia está na área de <strong>Ciências Humanas e suas Tecnologias</strong>, junto com História, Sociologia e Filosofia. Essa área conta com 45 questões na prova do ENEM.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Técnica de leitura de mapas"
          statement={<p>Ao deparar com um mapa em uma questão do ENEM, qual deve ser o primeiro passo do candidato antes de interpretar os dados espaciais?</p>}
          options={[
            { letter: "a", text: "Ler as alternativas de resposta para ganhar tempo" },
            { letter: "b", text: "Observar a legenda e o título do mapa", correct: true },
            { letter: "c", text: "Calcular a escala numérica do mapa" },
            { letter: "d", text: "Identificar o país ou continente representado" },
          ]}
          resolution={<p>A legenda e o título são as chaves de leitura do mapa. Sem eles, qualquer interpretação das cores, símbolos e limites é arbitrária. Esse deve ser sempre o primeiro passo, pois define o que cada elemento visual significa.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Habilidades da Matriz de Referência"
          statement={
            <><p>A Matriz de Referência do ENEM organiza os objetivos de aprendizagem em competências e habilidades. Com base nessa estrutura, analise a seguinte afirmação:</p>
            <p><em>"Identificar as formas de representação e as linguagens da cartografia e dos recursos tecnológicos de georreferenciamento."</em></p>
            <p>Essa habilidade exige do candidato:</p></>
          }
          options={[
            { letter: "a", text: "Memorizar as capitais de todos os países do mundo" },
            { letter: "b", text: "Calcular a área total dos continentes em km²" },
            { letter: "c", text: "Saber ler e interpretar mapas, plantas, GPS e imagens de satélite", correct: true },
            { letter: "d", text: "Conhecer todos os fusos horários do planeta" },
          ]}
          resolution={<p>A habilidade H11 da Matriz de Referência do ENEM refere-se à competência de <strong>leitura e interpretação de representações cartográficas</strong>, incluindo mapas tradicionais, plantas urbanas, GPS e imagens de satélite. Não se trata de memorização de dados isolados, mas de compreender linguagens visuais do espaço.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Temas mais frequentes"
          statement={<p>Com base na análise histórica das provas do ENEM, qual conjunto de temas apresenta a maior frequência nas questões de Geografia?</p>}
          options={[
            { letter: "a", text: "Geologia, tectonismo e vulcanismo" },
            { letter: "b", text: "Urbanização, climatologia, geopolítica e cartografia", correct: true },
            { letter: "c", text: "Astronomia, marés e movimentos da Terra" },
            { letter: "d", text: "Solos, pedologia e desertificação" },
          ]}
          resolution={<p>Os temas de <strong>urbanização, climatologia, geopolítica e cartografia</strong> são os mais recorrentes no ENEM, aparecendo em quase todas as edições. São temas que permitem ao exame conectar conteúdo geográfico a contextos contemporâneos e a habilidades de interpretação visual (mapas e gráficos).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Competência 6 aplicada"
          statement={
            <><p>Um candidato se depara com a seguinte questão no ENEM:</p>
            <p><em>"A crescente intensidade e frequência de eventos climáticos extremos, como secas prolongadas e enchentes devastadoras, tem sido associada às emissões de gases de efeito estufa. Identifique a alternativa que relaciona corretamente um impacto socioespacial desses eventos em países em desenvolvimento."</em></p>
            <p>Essa questão aciona principalmente qual competência da Matriz de Referência?</p></>
          }
          options={[
            { letter: "a", text: "Competência 1 — cultura e identidade dos povos" },
            { letter: "b", text: "Competência 3 — papel das instituições políticas" },
            { letter: "c", text: "Competência 4 — transformações tecnológicas" },
            { letter: "d", text: "Competência 6 — relações entre sociedade e natureza", correct: true },
          ]}
          resolution={<p>A <strong>Competência 6</strong> trata da compreensão das interações entre sociedade e natureza no espaço geográfico. Questões sobre mudanças climáticas, desastres naturais, biomas e impactos ambientais das atividades humanas são típicas dessa competência. A questão do exemplo conecta um fenômeno natural (eventos climáticos extremos) a suas consequências sociais em países vulneráveis — padrão clássico da Competência 6.</p>}
        />
      </section>
    </article>
  );
}
