"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 29</span>
          <h1>Movimentos Sociais e Participação Popular</h1>
          <p>
            Os movimentos sociais são forças coletivas que desafiam a ordem estabelecida em busca de transformação.
            Compreender sua lógica, tipologia e conquistas históricas é essencial para interpretar a dinâmica
            política e social cobrada intensamente no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O Que São Movimentos Sociais?</h2>
        <p>
          Um <strong>movimento social</strong> é uma forma de ação coletiva organizada que visa promover
          ou resistir a mudanças sociais, políticas ou culturais. Diferentemente de partidos e sindicatos,
          os movimentos sociais tendem a ser mais difusos, identitários e plurais.
        </p>
        <p>
          A socióloga brasileira <strong>Ilse Scherer-Warren</strong> aponta que os movimentos sociais
          contemporâneos articulam três dimensões: a <em>identidade coletiva</em> (quem somos),
          o <em>adversário</em> (contra quem lutamos) e o <em>projeto</em> (o que queremos).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Coletividade</h3>
            <p>Envolve grupos de pessoas unidas por uma causa comum — não ações isoladas de indivíduos.</p>
          </div>
          <div className="lesson-card">
            <span>🪪</span>
            <h3>Identidade</h3>
            <p>Os membros partilham uma identidade coletiva — "somos trabalhadores", "somos mulheres negras".</p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Conflito</h3>
            <p>Há um adversário identificado: o Estado, o patronato, o sistema patriarcal, etc.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Objetivo</h3>
            <p>Têm uma pauta clara: direitos trabalhistas, igualdade racial, preservação ambiental.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Movimento social ≠ revolta espontânea</h3>
          <p>
            Uma revolta (como um motim ou distúrbio) é espontânea e efêmera. Um movimento social
            possui <strong>organização</strong>, <strong>continuidade</strong> e uma <strong>agenda
            política</strong> explícita. O Movimento dos Trabalhadores Rurais Sem Terra (MST), por
            exemplo, possui estatutos, coordenações e estratégias de longo prazo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipologia</span>
        <h2>2. Principais Tipos de Movimentos Sociais</h2>
        <p>
          Os movimentos sociais podem ser classificados segundo o <em>sujeito</em> que mobilizam
          e o <em>campo de conflito</em> em que atuam. Veja os mais recorrentes no ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>Principal reivindicação</th>
                <th>Conquista histórica</th>
                <th>Período de destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trabalhista / Sindical</td>
                <td>Jornada de 8h, salário mínimo, direitos previdenciários</td>
                <td>CLT (1943), greve geral de 1917</td>
                <td>1900 – atual</td>
              </tr>
              <tr>
                <td>Feminista</td>
                <td>Sufrágio, igualdade salarial, fim da violência doméstica</td>
                <td>Voto feminino (1932), Lei Maria da Penha (2006)</td>
                <td>1910 – atual</td>
              </tr>
              <tr>
                <td>Negro / Antirracista</td>
                <td>Abolição, igualdade racial, cotas, reparação histórica</td>
                <td>Abolição (1888), Estatuto da Igualdade Racial (2010)</td>
                <td>Séc. XIX – atual</td>
              </tr>
              <tr>
                <td>Ambiental</td>
                <td>Preservação da natureza, justiça climática</td>
                <td>Criação do IBAMA (1989), Lei da Mata Atlântica (2006)</td>
                <td>1970 – atual</td>
              </tr>
              <tr>
                <td>LGBT+</td>
                <td>Descriminalização, casamento homoafetivo, combate à lgbtfobia</td>
                <td>Reconhecimento da união estável (2011), criminalização da homofobia (STF, 2019)</td>
                <td>1970 – atual</td>
              </tr>
              <tr>
                <td>Indígena</td>
                <td>Demarcação de terras, autonomia cultural</td>
                <td>Art. 231-232 da CF/88, criação da FUNAI</td>
                <td>Séc. XX – atual</td>
              </tr>
              <tr>
                <td>Sem-Terra (MST)</td>
                <td>Reforma agrária, acesso à terra</td>
                <td>Assentamentos rurais, pressão por desapropriações</td>
                <td>1984 – atual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Novos Movimentos</span>
        <h2>3. Novos Movimentos Sociais e a Era das Redes</h2>
        <p>
          A partir dos anos 1970, surgiram os chamados <strong>novos movimentos sociais</strong> —
          focados em identidade (gênero, etnia, sexualidade) mais do que em classe. Com a internet,
          esses movimentos adquiriram nova velocidade e alcance.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 160" width="700" height="160" aria-label="Evolução dos movimentos sociais">
            <rect x={10} y={55} width={160} height={55} rx={10} fill="#e0f2fe" stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={90} y={76} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0c4a6e">Movimentos clássicos</text>
            <text x={90} y={93} textAnchor="middle" fontSize={11} fill="#075985">Classe operária</text>
            <text x={90} y={108} textAnchor="middle" fontSize={10} fill="#075985">Séc. XIX – meados XX</text>

            <rect x={210} y={55} width={160} height={55} rx={10} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={290} y={76} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Novos movimentos</text>
            <text x={290} y={93} textAnchor="middle" fontSize={11} fill="#78350f">Identidade e cultura</text>
            <text x={290} y={108} textAnchor="middle" fontSize={10} fill="#78350f">1970 – 2000</text>

            <rect x={410} y={55} width={160} height={55} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={490} y={76} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4c1d95">Movimentos em rede</text>
            <text x={490} y={93} textAnchor="middle" fontSize={11} fill="#3b0764">Digital + híbrido</text>
            <text x={490} y={108} textAnchor="middle" fontSize={10} fill="#3b0764">2010 – atual</text>

            <polygon points="175,82 205,72 205,92" fill="#9ca3af" />
            <polygon points="375,82 405,72 405,92" fill="#9ca3af" />

            <rect x={610} y={55} width={80} height={55} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={650} y={76} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Junho</text>
            <text x={650} y={91} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">de 2013</text>
            <text x={650} y={106} textAnchor="middle" fontSize={10} fill="#14532d">Brasil</text>
            <polygon points="575,82 605,72 605,92" fill="#9ca3af" />
          </svg>
          <figcaption>Da classe à identidade: a evolução dos movimentos sociais no tempo.</figcaption>
        </figure>

        <p>
          Em <strong>junho de 2013</strong>, o Brasil viveu um ciclo de manifestações iniciado pelo
          Movimento Passe Livre (MPL) contra o aumento da tarifa de ônibus em São Paulo. O que
          começou com uma pauta específica rapidamente se expandiu para questionar a corrupção,
          os gastos com a Copa do Mundo e a qualidade dos serviços públicos — revelando as
          características dos movimentos em rede:
        </p>
        <ul>
          <li><strong>Horizontalidade:</strong> sem lideranças centralizadas únicas.</li>
          <li><strong>Convocação digital:</strong> Facebook, Twitter e WhatsApp como organizadores.</li>
          <li><strong>Pluralidade ideológica:</strong> direita, esquerda e centro nas mesmas ruas.</li>
          <li><strong>Pautas múltiplas e sobrepostas.</strong></li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Impacto</span>
        <h2>4. Movimentos Sociais e Mudança Social</h2>
        <p>
          Os movimentos sociais são motores fundamentais das transformações históricas. Sem eles,
          direitos que hoje parecem óbvios jamais teriam sido conquistados. A democracia liberal
          contemporânea é, em grande parte, fruto de pressão popular organizada.
        </p>

        <div className="lesson-highlight">
          <h3>Do conflito à institucionalização</h3>
          <p>
            Muitos movimentos percorrem um ciclo: <strong>emergência</strong> (surgimento da demanda) →{" "}
            <strong>coalização</strong> (ampliação da base) → <strong>institucionalização</strong>{" "}
            (a demanda vira lei ou política pública) → <strong>rotinização</strong> (o movimento
            perde força ou se transforma em ONG/partido). A CLT (1943), o voto feminino (1932)
            e o Estatuto da Criança e do Adolescente (1990) são exemplos desse ciclo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorias</span>
        <h2>5. Teorias dos Movimentos Sociais: Recursos, Estrutura e Identidade</h2>
        <p>
          A Sociologia desenvolveu diferentes teorias para explicar por que os movimentos
          sociais surgem, como se organizam e quando têm sucesso. Três abordagens dominam
          o campo acadêmico e são relevantes para o ENEM: a <strong>Teoria da Mobilização
          de Recursos</strong>, a <strong>Teoria das Oportunidades Políticas</strong> e a
          <strong> Teoria dos Novos Movimentos Sociais</strong>.
        </p>
        <p>
          Cada teoria enfatiza um aspecto diferente: a primeira foca nos recursos materiais
          e organizacionais que permitem um movimento existir; a segunda analisa o contexto
          político que abre ou fecha janelas de oportunidade para a ação coletiva; a terceira
          coloca a identidade no centro — os movimentos não lutam apenas por recursos,
          mas pelo reconhecimento de quem são. Na prática, os movimentos combinam esses
          três aspectos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Teoria</th>
                <th>Autores principais</th>
                <th>Foco central</th>
                <th>Pergunta-chave</th>
                <th>Exemplo de aplicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mobilização de Recursos</strong></td>
                <td>McCarthy e Zald (EUA, 1970s)</td>
                <td>Recursos materiais, organizacionais e humanos</td>
                <td>Como o movimento se sustenta e se organiza?</td>
                <td>MST: terra, lideranças, apoio de setores da Igreja (CPT) como recursos</td>
              </tr>
              <tr>
                <td><strong>Oportunidades Políticas</strong></td>
                <td>Sidney Tarrow, Charles Tilly</td>
                <td>Contexto político que facilita ou bloqueia a ação</td>
                <td>Por que o movimento surge agora, neste contexto?</td>
                <td>Redemocratização 1985 criou oportunidade para greves e movimentos sindicais</td>
              </tr>
              <tr>
                <td><strong>Novos Movimentos Sociais</strong></td>
                <td>Alain Touraine (França), Alberto Melucci</td>
                <td>Identidade coletiva, reconhecimento cultural</td>
                <td>Quem somos? O que valorizamos além de recursos?</td>
                <td>Movimento LGBTQIA+: luta por reconhecimento identitário, não apenas por leis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidadania</span>
        <h2>6. Cidadania no Brasil: Marshall e a Constituição de 1988</h2>
        <p>
          O sociólogo britânico <strong>T. H. Marshall</strong> propôs, em <em>Cidadania e
          Classe Social</em> (1950), que a cidadania moderna se desenvolveu historicamente
          em três dimensões: os <strong>direitos civis</strong> (liberdade individual,
          propriedade, contratos, acesso à Justiça — conquistados no séc. XVIII), os
          <strong> direitos políticos</strong> (voto, participação — séc. XIX) e os
          <strong> direitos sociais</strong> (saúde, educação, previdência, trabalho —
          séc. XX). Cada dimensão exige instituições específicas: Judiciário, Parlamento
          e Estado de Bem-Estar Social, respectivamente.
        </p>
        <p>
          No Brasil, o historiador <strong>José Murilo de Carvalho</strong> identificou
          uma <em>sequência invertida</em>: aqui, os direitos sociais (criados por Vargas
          nos anos 1930–40) vieram <em>antes</em> dos direitos políticos plenos. Carvalho
          chamou isso de "<strong>estadania</strong>" — uma cidadania outorgada pelo Estado,
          não conquistada pela mobilização política autônoma dos cidadãos. A
          <strong> Constituição de 1988</strong>, chamada de "Constituição Cidadã",
          representou a primeira vez que o Brasil consagrou de forma ampla os três tipos
          de direitos, sendo fruto direto da pressão de movimentos sociais durante
          a redemocratização.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 680 160" width="680" height="160" aria-label="Linha do tempo da cidadania no Brasil">
            <line x1={40} y1={80} x2={640} y2={80} stroke="#9ca3af" strokeWidth={2} />
            {[
              { x: 90, year: "1824", label: "Constituição Imperial\n(cidadania excludente)", color: "#9ca3af" },
              { x: 210, year: "1930s", label: "Vargas: direitos\nsociais trabalhistas", color: "#16a34a" },
              { x: 330, year: "1945", label: "Redemocratização\n(voto ampliado)", color: "#0ea5e9" },
              { x: 450, year: "1964–84", label: "Ditadura:\ndireitos suspensos", color: "#ef4444" },
              { x: 590, year: "1988", label: "Constituição Cidadã:\n3 dimensões de Marshall", color: "#7c3aed" },
            ].map((p) => (
              <g key={p.year}>
                <circle cx={p.x} cy={80} r={7} fill={p.color} />
                <line x1={p.x} y1={73} x2={p.x} y2={30} stroke={p.color} strokeWidth={1} strokeDasharray="3 2" />
                <text x={p.x} y={25} textAnchor="middle" fontSize={9} fontWeight={700} fill={p.color}>{p.year}</text>
                {p.label.split("\n").map((line, i) => (
                  <text key={i} x={p.x} y={100 + i * 14} textAnchor="middle" fontSize={9} fill="#374151">{line}</text>
                ))}
              </g>
            ))}
            <text x={340} y={155} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">A sequência brasileira foi inversa à europeia: direitos sociais antes dos políticos</text>
          </svg>
          <figcaption>A cidadania no Brasil chegou de forma invertida: direitos sociais de Vargas antes do pleno direito político.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação com o Estado</span>
        <h2>7. Movimentos Sociais e Estado: Co-optação, Institucionalização e Tensão</h2>
        <p>
          Os movimentos sociais vivem uma tensão permanente em relação ao Estado: precisam
          pressioná-lo para obter mudanças, mas ao mesmo tempo correm o risco de serem
          absorvidos por ele. Quando líderes de movimentos assumem cargos no governo,
          quando demandas viram políticas públicas ou quando organizações recebem verbas
          estatais, abre-se o risco de <strong>co-optação</strong> — a perda da autonomia
          crítica e da capacidade de mobilização independente.
        </p>
        <p>
          O processo inverso — quando a pressão de um movimento produz uma lei, órgão ou
          política pública — chama-se <strong>institucionalização</strong>. A diferença é
          que a institucionalização mantém a autonomia do movimento, enquanto a co-optação
          a dissolve. A linha entre as duas é sempre disputada e depende de como o movimento
          gerencia sua relação com o poder. Movimentos como o MST e o feminismo brasileiro
          passaram por essas tensões ao longo de décadas.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Co-optação</h3>
            <p>O movimento perde autonomia ao ser absorvido pelo Estado. Líderes viram funcionários públicos; a crítica ao governo enfraquece. Risco maior quando o partido aliado chega ao poder.</p>
          </div>
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Institucionalização</h3>
            <p>A demanda vira lei, órgão ou política pública — sem que o movimento perca autonomia. Ex.: Lei Maria da Penha (2006) resultou da pressão feminista sem co-optar o movimento.</p>
          </div>
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Tensão permanente</h3>
            <p>A maioria dos movimentos oscila entre pressão e participação. O MST pressionou governos aliados (PT) enquanto mantinha acampamentos e ocupações de terra.</p>
          </div>
          <div className="lesson-card">
            <span>⚪</span>
            <h3>Autonomia</h3>
            <p>Movimentos que mantêm autonomia evitam coligações formais com partidos e Estado, preservando a liberdade de criticar qualquer governo. Estratégia típica dos movimentos anarquistas e horizontais.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos de Direita</span>
        <h2>8. Conservadorismo e Movimentos de Direita</h2>
        <p>
          A Sociologia dos movimentos sociais historicamente se focou em movimentos
          progressistas — trabalhistas, feministas, antirracistas. Mas movimentos conservadores
          e de direita também são formas legítimas de ação coletiva organizada e devem
          ser analisados com as mesmas ferramentas conceituais. O ENEM cobra essa pluralidade.
        </p>
        <p>
          No Brasil, as <strong>manifestações de 2013-2016</strong> revelaram a emergência
          de movimentos conservadores de massa: o Movimento Brasil Livre (MBL), o Vem pra Rua
          e grupos pró-impeachment mobilizaram milhões com pautas anticorrupção, antipetismo
          e, em alguns casos, saudosistas do regime militar. Esses movimentos usaram as
          mesmas ferramentas dos movimentos progressistas — redes sociais, convocações online,
          ação de rua — mas com pautas políticas opostas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Movimentos progressistas</th>
                <th>Movimentos conservadores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pauta central</strong></td>
                <td>Ampliação de direitos, igualdade, redistribuição</td>
                <td>Manutenção da ordem, valores tradicionais, mercado livre</td>
              </tr>
              <tr>
                <td><strong>Adversário</strong></td>
                <td>Estado excludente, capital, patriarcado, racismo</td>
                <td>Governo de esquerda, "ideologia de gênero", corrupção</td>
              </tr>
              <tr>
                <td><strong>Base social</strong></td>
                <td>Trabalhadores, minorias, jovens periféricos</td>
                <td>Classe média, setores religiosos, militares, ruralistas</td>
              </tr>
              <tr>
                <td><strong>Táticas</strong></td>
                <td>Greves, ocupações, marchas, boicotes</td>
                <td>Manifestações de rua, pressão eleitoral, lobby legislativo, redes sociais</td>
              </tr>
              <tr>
                <td><strong>Relação com o Estado</strong></td>
                <td>Pressão por reformas; tensão com Estado</td>
                <td>Podem apoiar ou pressionar o Estado conforme o governo</td>
              </tr>
              <tr>
                <td><strong>Exemplos no Brasil</strong></td>
                <td>MST, CUT, APIB, movimento feminista, LGBTQIA+</td>
                <td>MBL, Vem pra Rua, bancada evangélica, movimento pró-armas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Povos Originários</span>
        <h2>9. Movimentos Indígenas e Quilombolas no Brasil</h2>
        <p>
          Os povos indígenas e quilombolas desenvolveram formas próprias de mobilização
          coletiva que articulam a defesa do território com a luta pelo reconhecimento
          cultural e pela autodeterminação. A <strong>APIB</strong> (Articulação dos Povos
          Indígenas do Brasil), criada em 2005, é a maior organização indígena do país
          e articula regionalmente movimentos como a COIAB (Amazônia), a APOINME (Nordeste)
          e o ATY GUASU (Guarani). Seu evento mais visível é o <strong>Acampamento Terra
          Livre</strong> (ATL), realizado anualmente em Brasília desde 2004.
        </p>
        <p>
          A Constituição de 1988 representou um avanço histórico para os povos indígenas:
          os artigos 231 e 232 reconhecem sua organização social, línguas, crenças, tradições
          e os direitos originários sobre as terras que habitam. Para os quilombolas, o
          Decreto 4.887/2003 regulamentou o Art. 68 do ADCT, que garante a titulação das
          terras de comunidades remanescentes de quilombos. Contudo, a implementação
          dessas garantias enfrenta resistência histórica de ruralistas, mineradoras e
          governos que privilegiam o agronegócio.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conquista</th>
                <th>Instrumento legal</th>
                <th>Ano</th>
                <th>Desafio atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reconhecimento constitucional dos direitos indígenas</td>
                <td>CF/1988, Art. 231–232</td>
                <td>1988</td>
                <td>Demarcação lenta; pressão do agronegócio; tese do Marco Temporal</td>
              </tr>
              <tr>
                <td>FUNAI e tutela estatal</td>
                <td>Lei 5.371/1967</td>
                <td>1967</td>
                <td>Orçamento cortado; enfraquecimento da proteção institucional</td>
              </tr>
              <tr>
                <td>Titulação de terras quilombolas</td>
                <td>Decreto 4.887/2003</td>
                <td>2003</td>
                <td>Menos de 10% dos territórios quilombolas têm titulação definitiva</td>
              </tr>
              <tr>
                <td>Criação da SESAI (saúde indígena)</td>
                <td>Decreto 7.336/2010</td>
                <td>2010</td>
                <td>Subfinanciamento; mortalidade infantil indígena 3× maior que a média nacional</td>
              </tr>
              <tr>
                <td>STF derruba Marco Temporal (2023)</td>
                <td>RE 1.017.365</td>
                <td>2023</td>
                <td>Reação do Congresso: PL aprovado tenta restabelecer o Marco Temporal via legislação</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O Marco Temporal e a luta por demarcações</h3>
          <p>
            O <strong>Marco Temporal</strong> era uma tese jurídica que afirmava que os
            povos indígenas só teriam direito às terras que estivessem ocupando ou
            disputando em <strong>5 de outubro de 1988</strong> (data da CF). Em setembro
            de 2023, o STF declarou o Marco Temporal inconstitucional — uma vitória
            histórica dos movimentos indígenas. No entanto, o Congresso aprovou legislação
            tentando reinstituir a tese, demonstrando que a luta territorial é contínua.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Movimentos Sociais no ENEM</h2>
        <p>
          O ENEM aborda movimentos sociais por meio de textos que descrevem conquistas
          históricas, situações de mobilização coletiva ou debates sobre democracia
          e participação. As questões pedem identificação do tipo de movimento, do
          conceito teórico associado ou das relações entre movimentos e legislação.
          O erro mais comum é confundir <em>movimento social</em> com revolta espontânea,
          ou não identificar que movimentos conservadores também são movimentos sociais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>Fundação / Surgimento</th>
                <th>Pauta principal</th>
                <th>Conquista histórica</th>
                <th>Conceito sociológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sindical / Trabalhista</td>
                <td>Séc. XIX (Brasil: 1906)</td>
                <td>Direitos trabalhistas, salário, jornada</td>
                <td>CLT (1943), greves do ABC (1978–80)</td>
                <td>Luta de classes (Marx), mobilização de recursos</td>
              </tr>
              <tr>
                <td>MST</td>
                <td>1984</td>
                <td>Reforma agrária, acesso à terra</td>
                <td>Pressão por desapropriações; assentamentos rurais</td>
                <td>Conflito de classe, movimentos sociais clássicos</td>
              </tr>
              <tr>
                <td>Feminista</td>
                <td>Séc. XIX (Brasil: Séc. XX)</td>
                <td>Voto, igualdade salarial, fim da violência</td>
                <td>Voto (1932), Lei Maria da Penha (2006)</td>
                <td>Patriarcado, novos movimentos sociais, interseccionalidade</td>
              </tr>
              <tr>
                <td>Negro / Antirracista</td>
                <td>Séc. XIX – MNU (1978)</td>
                <td>Igualdade racial, cotas, reparação</td>
                <td>Estatuto da Igualdade Racial (2010), cotas (2012)</td>
                <td>Racismo estrutural (Silvio Almeida), identidade</td>
              </tr>
              <tr>
                <td>LGBTQIA+</td>
                <td>1970s (Brasil: 1978)</td>
                <td>Direitos, reconhecimento, fim da violência</td>
                <td>União homoafetiva (STF 2011), criminalização da homofobia (2019)</td>
                <td>Novos movimentos sociais, política de reconhecimento (Taylor)</td>
              </tr>
              <tr>
                <td>Indígena (APIB)</td>
                <td>2005</td>
                <td>Demarcação de terras, autonomia cultural</td>
                <td>Art. 231–232 CF/88; derrubada do Marco Temporal (2023)</td>
                <td>Identidade, território, resistência cultural</td>
              </tr>
              <tr>
                <td>Ambiental</td>
                <td>1960–70s</td>
                <td>Preservação, justiça climática</td>
                <td>Rio-92, Lei da Mata Atlântica, Reservas Extrativistas</td>
                <td>Novos movimentos sociais, justiça ambiental</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Distinções que o ENEM mais cobra</h3>
          <p>
            1. <strong>Movimento social ≠ revolta espontânea:</strong> movimento tem organização,
            continuidade e agenda; revolta é efêmera e desorganizada.<br />
            2. <strong>Novos movimentos sociais:</strong> focam em identidade e reconhecimento,
            não apenas em classe ou recursos — surgem nos anos 1970–80.<br />
            3. <strong>Ciclo do movimento social:</strong> emergência → coalização →
            institucionalização → rotinização (declínio ou transformação).<br />
            4. <strong>Junho de 2013:</strong> exemplo de movimento em rede: horizontal,
            plural, convocado digitalmente, sem liderança única.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Características dos movimentos sociais"
          statement={
            <p>
              Assinale a alternativa que apresenta corretamente uma característica que distingue
              um <strong>movimento social</strong> de uma revolta espontânea.
            </p>
          }
          options={[
            { letter: "A", text: <>Ocorre apenas em contextos de crise econômica aguda.</> },
            { letter: "B", text: <>É liderado obrigatoriamente por um partido político.</> },
            { letter: "C", text: <>Possui organização, continuidade e uma agenda política explícita.</>, correct: true },
            { letter: "D", text: <>Limita-se a ações violentas contra o Estado.</> },
            { letter: "E", text: <>Não se articula com outras organizações da sociedade civil.</> },
          ]}
          resolution={
            <p>
              Movimentos sociais se distinguem de revoltas por possuir organização interna,
              continuidade temporal e pautas políticas definidas. Uma revolta é efêmera e
              desorganizada; um movimento social tem projeto, identidade e estratégia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Tipos de movimentos sociais"
          statement={
            <p>
              O Movimento dos Trabalhadores Rurais Sem Terra (MST), fundado em 1984, tem como
              principal bandeira:
            </p>
          }
          options={[
            { letter: "A", text: <>A defesa do trabalho industrial urbano e dos direitos da CLT.</> },
            { letter: "B", text: <>A luta por igualdade de gênero no campo.</> },
            { letter: "C", text: <>A reforma agrária e o acesso à terra por trabalhadores rurais sem propriedade.</>, correct: true },
            { letter: "D", text: <>A demarcação de terras indígenas no cerrado brasileiro.</> },
            { letter: "E", text: <>A preservação de biomas ameaçados pelo agronegócio.</> },
          ]}
          resolution={
            <p>
              O MST luta pela reforma agrária — redistribuição de terras improdutivas a
              trabalhadores rurais —, usando ocupações de latifúndios como estratégia de
              pressão política. É considerado um dos maiores movimentos sociais da América Latina.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Novos movimentos sociais"
          statement={
            <p>
              Os "novos movimentos sociais" surgidos a partir dos anos 1970 diferenciam-se dos
              movimentos clássicos operários principalmente por:
            </p>
          }
          options={[
            { letter: "A", text: <>Limitarem suas demandas a aumentos salariais e redução de jornada.</> },
            { letter: "B", text: <>Articularem pautas de identidade cultural, gênero, etnia e sexualidade, além da classe.</>, correct: true },
            { letter: "C", text: <>Rejeitarem completamente a atuação no campo institucional-eleitoral.</> },
            { letter: "D", text: <>Surgirem exclusivamente em países desenvolvidos.</> },
            { letter: "E", text: <>Dispensarem qualquer forma de organização coletiva.</> },
          ]}
          resolution={
            <p>
              Os novos movimentos sociais ampliam o campo de conflito para além da classe,
              incorporando identidades de gênero, raça, sexualidade e etnia. Isso reflete
              a complexidade das sociedades pós-industriais, onde as clivagens sociais
              não se reduzem mais apenas ao eixo capital-trabalho.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Junho de 2013 e movimentos em rede"
          statement={
            <p>
              As manifestações de junho de 2013 no Brasil são frequentemente citadas como exemplo
              de "movimento em rede". Qual característica melhor define esse tipo de mobilização?
            </p>
          }
          options={[
            { letter: "A", text: <>Liderança centralizada em um partido político de esquerda.</> },
            { letter: "B", text: <>Pauta única e homogênea orientada por sindicatos.</> },
            { letter: "C", text: <>Horizontalidade, convocação digital e pluralidade de pautas sem liderança única.</>, correct: true },
            { letter: "D", text: <>Ação restrita a grupos universitários de elite.</> },
            { letter: "E", text: <>Financiamento exclusivo por ONGs internacionais.</> },
          ]}
          resolution={
            <p>
              Junho de 2013 exemplifica os movimentos em rede: convocados via redes sociais,
              sem lideranças centralizadas, com pluralidade de pautas (tarifa, corrupção, Copa)
              e participantes de diferentes espectros políticos, sem unidade ideológica clara.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Movimentos sociais e legislação"
          statement={
            <p>
              "A Lei Maria da Penha (2006) não surgiu do nada. Ela é resultado de décadas de
              mobilização do movimento feminista, que denunciou a violência doméstica como
              problema estrutural e não privado."
              <br /><br />
              Esse trecho ilustra qual aspecto dos movimentos sociais?
            </p>
          }
          options={[
            { letter: "A", text: <>A dependência dos movimentos em relação ao Estado para existir.</> },
            { letter: "B", text: <>A capacidade dos movimentos sociais de transformar demandas coletivas em políticas públicas e legislação.</>, correct: true },
            { letter: "C", text: <>O fato de que apenas movimentos violentos conseguem mudanças legais.</> },
            { letter: "D", text: <>A irrelevância dos movimentos sociais em democracias consolidadas.</> },
            { letter: "E", text: <>A substituição dos partidos políticos pelos movimentos como principal canal de representação.</> },
          ]}
          resolution={
            <p>
              A Lei Maria da Penha é caso paradigmático do ciclo movimento → institucionalização:
              a pressão feminista ao longo de décadas transformou uma demanda de direitos das
              mulheres em legislação concreta, demonstrando como movimentos sociais produzem
              mudanças reais e duradouras na estrutura jurídica da sociedade.
            </p>
          }
        />
      </section>
    </article>
  );
}
