"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      {/* ── HERO ── */}
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 18</span>
          <h1>Reforma Protestante e Contrarreforma</h1>
          <p>
            Em 31 de outubro de 1517, um monge agostiniano alemão afixou 95 teses
            numa porta de Wittenberg e desencadeou a maior ruptura da cristandade
            ocidental. A Reforma Protestante não foi apenas um conflito religioso:
            foi uma revolução política, social e cultural que redesenhou o mapa da
            Europa, acelerou a formação dos Estados nacionais, influenciou o
            capitalismo e chegou ao Brasil pela catequese jesuíta. O ENEM cobra
            as causas, os personagens, os desdobramentos e os impactos dessa
            transformação que ainda hoje molda o mundo.
          </p>
        </div>
      </section>

      {/* ── 1. CONTEXTO DA IGREJA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>Contexto da Igreja Católica no século XVI: riqueza, corrupção e crise</h2>
        <p>
          No início do século XVI, a Igreja Católica era a instituição mais
          poderosa e rica da Europa Ocidental. Mas essa riqueza e poder vinham
          acompanhados de problemas estruturais que a tornavam vulnerável a
          críticas:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Simonia:</strong> venda de cargos eclesiásticos (bispados,
              paroquias, canonicatos). Um bispo rico comprava sua posição; um
              papa como Alexandre VI (Bórgia) vendia cardeais. A palavra vem
              de Simão Mago, que ofereceu dinheiro aos apóstolos para comprar
              poderes espirituais (At 8,18).
            </li>
            <li>
              <strong>Nicolaísmo:</strong> clérigos que viviam maritalmente
              com mulheres ("concubinas") — celibato eclesiástico amplamente
              desobedecido no clero rural.
            </li>
            <li>
              <strong>Venda de indulgências:</strong> remissão das penas
              temporais dos pecados em troca de dinheiro. O papa Leão X usou
              a venda de indulgências para financiar a nova Basílica de São Pedro
              em Roma. O vendedor Johann Tetzel pregava em Wittenberg com o
              slogan: "Assim que a moeda cai na caixa, a alma sai do Purgatório."
            </li>
            <li>
              <strong>Ignorância do clero rural:</strong> muitos padres rurais
              não sabiam latim e não liam a Bíblia; a instrução religiosa dos
              fiéis era mínima.
            </li>
            <li>
              <strong>Pluralismo beneficiário:</strong> bispos que acumulavam
              várias dioceses (e suas rendas) sem visitar nenhuma.
            </li>
          </ul>
        </div>
        <p>
          Críticas à Igreja já vinham do século XIV (Wycliffe, Hus). Mas a
          combinação da <strong>imprensa de Gutenberg</strong> (que permitia
          difundir ideias em massa) com a crise das indulgências criou uma
          conjuntura explosiva.
        </p>
      </section>

      {/* ── 2. LUTERO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>Martinho Lutero (1483–1546): as 95 Teses e a ruptura com Roma</h2>
        <p>
          Martinho Lutero era monge agostiniano e professor de teologia na
          Universidade de Wittenberg. Profundamente angustiado com a questão da
          salvação — <em>"como posso encontrar um Deus misericordioso?"</em> —
          chegou à convicção de que a justificação vem somente pela fé, não pelas
          obras humanas ou pela mediação da Igreja.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Data</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afixação das 95 Teses</td>
                <td>31/10/1517</td>
                <td>Convite ao debate acadêmico sobre as indulgências; a imprensa as difundiu por toda a Europa em semanas</td>
              </tr>
              <tr>
                <td>Debate de Leipzig</td>
                <td>1519</td>
                <td>Johann Eck força Lutero a defender Jan Hus (já condenado); Lutero conclui que a autoridade de Deus supera a do papa</td>
              </tr>
              <tr>
                <td>Três grandes escritos reformadores</td>
                <td>1520</td>
                <td><em>À Nobreza Cristã da Nação Alemã</em>, <em>O Cativeiro Babilônico da Igreja</em>, <em>Da Liberdade do Cristão</em> — formulação completa da doutrina luterana</td>
              </tr>
              <tr>
                <td>Dieta de Worms</td>
                <td>1521</td>
                <td>"Aqui estou, não posso fazer diferente": recusa a retratar diante do imperador Carlos V; excomungado e posto fora da lei; refugia-se no castelo de Wartburg</td>
              </tr>
              <tr>
                <td>Tradução da Bíblia para o alemão</td>
                <td>1522–1534</td>
                <td>Usando o dialeto saxônico como base, Lutero ajudou a criar o alemão padrão; qualquer letrado podia ler a Bíblia sem mediação clerical</td>
              </tr>
              <tr>
                <td>Paz de Augsburgo</td>
                <td>1555</td>
                <td><em>Cujus regio, ejus religio</em> (de quem é o território, é a religião): príncipes alemães escolhem luteranismo ou catolicismo para seus territórios</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Os quatro "somente" (<em>sola</em>) do luteranismo:</strong>
          <ul>
            <li><strong><em>Sola fide</em></strong> — somente a fé justifica o homem diante de Deus, não as obras.</li>
            <li><strong><em>Sola scriptura</em></strong> — somente a Bíblia é autoridade em matéria de fé; a tradição da Igreja não tem o mesmo peso.</li>
            <li><strong><em>Sola gratia</em></strong> — somente a graça divina salva; o ser humano não "merece" a salvação.</li>
            <li><strong>Sacerdócio universal:</strong> todo crente tem acesso direto a Deus; não há necessidade de mediação sacerdotal para a salvação.</li>
          </ul>
        </div>
      </section>

      {/* ── 3. CALVINO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>Calvino (1509–1564): predestinação e a "ética protestante"</h2>
        <p>
          João Calvino, francês que se exilou em Genebra, levou a Reforma a um
          sistema teológico mais rigoroso e de enorme impacto histórico. Sua
          doutrina central foi a <strong>predestinação</strong>: Deus, em sua
          soberania absoluta, já elegeu antes da criação quem será salvo
          (eleitos) e quem será condenado (réprobos), independentemente dos
          méritos humanos.
        </p>
        <div className="lesson-highlight">
          <strong>A "ética protestante" e o capitalismo (Max Weber):</strong>
          <p>
            O sociólogo Max Weber, em <em>A Ética Protestante e o Espírito do
            Capitalismo</em> (1905), argumentou que o calvinismo gerou uma
            mentalidade favorável ao capitalismo: o crente calvinista não sabe
            se é "eleito", mas interpreta o sucesso econômico e o trabalho
            disciplinado como sinais da eleição divina. Isso criou uma ética
            de trabalho sistemático, acumulação e reinvestimento do lucro —
            base do espírito capitalista.
          </p>
        </div>

        {/* SVG 1: Mapa Europa - expansão das reformas */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 720 380" width="100%" aria-label="Mapa esquemático da expansão das religiões reformadas na Europa">
            <rect x="0" y="0" width="720" height="380" fill="#d6eaf8" rx="8" />

            {/* Contorno Europa simplificado */}
            <polygon
              points="60,70 140,50 220,40 310,35 380,40 440,35 520,50 600,60 660,90 680,150 670,220 640,270 590,310 530,330 460,340 390,345 320,340 240,330 170,310 120,280 80,240 55,190 50,140"
              fill="#f5f0e8"
              stroke="#aaa"
              strokeWidth="1.5"
            />

            {/* LUTERANISMO — Norte (Alemanha, Escandinávia) */}
            <polygon
              points="220,40 310,35 380,40 390,80 370,130 340,150 310,140 280,130 250,110 230,80"
              fill="#f39c12"
              opacity="0.6"
            />
            <text x="305" y="95" textAnchor="middle" fill="#7d4c00" fontSize="11" fontWeight="bold">LUTERANISMO</text>
            <text x="305" y="110" textAnchor="middle" fill="#7d4c00" fontSize="9">Alemanha, Dinamarca</text>
            <text x="305" y="123" textAnchor="middle" fill="#7d4c00" fontSize="9">Suécia, Noruega</text>

            {/* CALVINISMO — Holanda, Escócia, parte da França */}
            <polygon
              points="155,110 200,100 230,110 230,145 200,160 165,150 145,130"
              fill="#8e44ad"
              opacity="0.55"
            />
            <text x="190" y="133" textAnchor="middle" fill="#4a0068" fontSize="9" fontWeight="bold">CALVINISMO</text>
            <text x="190" y="146" textAnchor="middle" fill="#4a0068" fontSize="8">Holanda / Suíça</text>

            {/* ANGLICANISMO — Inglaterra */}
            <polygon
              points="90,70 140,50 160,70 155,110 130,130 100,120 75,100 70,80"
              fill="#27ae60"
              opacity="0.55"
            />
            <text x="115" y="93" textAnchor="middle" fill="#0d4e27" fontSize="9" fontWeight="bold">ANGLICANISMO</text>
            <text x="115" y="106" textAnchor="middle" fill="#0d4e27" fontSize="8">Inglaterra</text>

            {/* CATOLICISMO — Sul (Itália, Espanha, Portugal, França) */}
            <polygon
              points="160,160 230,145 280,150 320,165 360,180 390,210 400,260 380,300 330,320 270,325 210,310 165,280 140,240 135,200"
              fill="#e74c3c"
              opacity="0.4"
            />
            <text x="270" y="240" textAnchor="middle" fill="#7b0000" fontSize="12" fontWeight="bold">CATOLICISMO</text>
            <text x="270" y="257" textAnchor="middle" fill="#7b0000" fontSize="10">Itália, Espanha</text>
            <text x="270" y="272" textAnchor="middle" fill="#7b0000" fontSize="10">Portugal, França (maioria)</text>

            {/* Legenda */}
            <rect x="460" y="60" width="235" height="160" rx="6" fill="white" opacity="0.85" stroke="#ccc" strokeWidth="1" />
            <text x="577" y="83" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">Legenda</text>

            <rect x="475" y="95" width="16" height="14" fill="#f39c12" opacity="0.7" />
            <text x="498" y="107" fill="#333" fontSize="10">Luteranismo</text>

            <rect x="475" y="118" width="16" height="14" fill="#8e44ad" opacity="0.7" />
            <text x="498" y="130" fill="#333" fontSize="10">Calvinismo</text>

            <rect x="475" y="141" width="16" height="14" fill="#27ae60" opacity="0.7" />
            <text x="498" y="153" fill="#333" fontSize="10">Anglicanismo</text>

            <rect x="475" y="164" width="16" height="14" fill="#e74c3c" opacity="0.5" />
            <text x="498" y="176" fill="#333" fontSize="10">Catolicismo</text>

            <text x="577" y="200" textAnchor="middle" fill="#777" fontSize="8">Mapa esquemático — aprox. séc. XVI</text>

            <text x="360" y="372" textAnchor="middle" fill="#555" fontSize="10">
              Expansão das religiões reformadas na Europa (século XVI) — esquema simplificado
            </text>
          </svg>
          <figcaption>
            Distribuição aproximada das confissões religiosas na Europa no século XVI:
            luteranismo (Norte/Centro), calvinismo (Holanda, Suíça, Escócia),
            anglicanismo (Inglaterra), catolicismo (Sul)
          </figcaption>
        </figure>

        <p>
          O calvinismo se expandiu para: <strong>Holanda</strong> (base
          ideológica da independência dos Países Baixos contra a Espanha católica),
          <strong> Escócia</strong> (presbiterianismo de John Knox),
          <strong>França</strong> (huguenotes — minoria protestante perseguida)
          e <strong>Inglaterra</strong> (puritanos — calvinistas que fugiram para
          a América do Norte, fundando as colônias da Nova Inglaterra).
        </p>
      </section>

      {/* ── 4. ANGLICANISMO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>Anglicanismo: a Reforma por razões políticas</h2>
        <p>
          A Reforma na Inglaterra teve uma lógica diferente: não partiu de
          uma crise teológica profunda, mas de um conflito político entre
          Henrique VIII e o papa Clemente VII.
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              Henrique VIII quis anular seu casamento com Catarina de Aragão
              (espanhola, sobrinha do imperador Carlos V) para casar com Ana
              Bolena — esperando um herdeiro masculino.
            </li>
            <li>
              O papa, pressionado por Carlos V (que mantinha o papa como refém
              após o saque de Roma em 1527), recusou o divórcio.
            </li>
            <li>
              Em 1534, o <strong>Ato de Supremacia</strong> declarou o rei da
              Inglaterra "Supremo Chefe da Igreja da Inglaterra" (anglicana).
              O papa foi removido da autoridade eclesiástica inglesa.
            </li>
            <li>
              Doutrinalmente, o anglicanismo inicial era próximo do catolicismo
              (manteve bispos, liturgia similar); depois, sob Eduardo VI, tornou-se
              mais protestante; Maria Tudor ("Bloody Mary") restaurou o catolicismo
              (1553–1558); Isabel I estabeleceu definitivamente o anglicanismo
              como via média.
            </li>
          </ul>
        </div>
      </section>

      {/* ── 5. OUTROS MOVIMENTOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>Outros movimentos reformadores: anabatistas e radicais</h2>
        <p>
          À margem de Lutero, Calvino e Henrique VIII, emergiram movimentos
          mais radicais, perseguidos por católicos E por protestantes:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Anabatistas</strong>
            <p>
              Rejeitavam o batismo infantil (daí "ana" = rebatizar os adultos);
              defendiam separação completa entre Igreja e Estado; comunidade de
              bens; pacifismo radical. Perseguidos ferozmente: afogados, queimados,
              decapitados. Ancestrais espirituais dos menonitas, amish e batistas.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Zuinglio</strong>
            <p>
              Ulrico Zuínglio reformou a Suíça a partir de Zurique (1519).
              Mais radical que Lutero na eliminação de imagens, música e
              cerimônias. Morreu em batalha (1531) — único dos grandes
              reformadores a morrer com armas na mão.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Socinianismo</strong>
            <p>
              Questionava a Trindade (antitrinitarismo); ancestral do
              unitarismo moderno. Radicalmente racional: aceitava apenas
              o que a razão pudesse confirmar na Bíblia. Perseguido por
              toda confissão cristã da época.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. CONTRARREFORMA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>A Contrarreforma: reação e reforma interna da Igreja</h2>
        <p>
          A reação da Igreja ao protestantismo foi dupla: <strong>defensiva</strong>
          (condenar os hereges) e <strong>reformadora</strong> (corrigir
          genuinamente os abusos que tinham alimentado a Reforma). O instrumento
          central foi o <strong>Concílio de Trento</strong> (1545–1563).
        </p>

        {/* SVG 2: Diagrama comparativo */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 760 320" width="100%" aria-label="Diagrama comparando Lutero, Calvino, Anglicanismo e Catolicismo">
            <rect x="0" y="0" width="760" height="320" fill="#fafafa" rx="8" stroke="#ddd" strokeWidth="1" />
            <text x="380" y="28" textAnchor="middle" fill="#222" fontSize="14" fontWeight="bold">Comparação das principais correntes religiosas do século XVI</text>

            {/* Cabeçalhos das colunas */}
            {[
              { x: 100, label: "LUTERANISMO", color: "#e67e22" },
              { x: 270, label: "CALVINISMO", color: "#8e44ad" },
              { x: 460, label: "ANGLICANISMO", color: "#27ae60" },
              { x: 640, label: "CATOLICISMO", color: "#c0392b" },
            ].map((col) => (
              <g key={col.x}>
                <rect x={col.x - 80} y="40" width="155" height="30" rx="5" fill={col.color} opacity="0.8" />
                <text x={col.x} y="59" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{col.label}</text>
              </g>
            ))}

            {/* Linhas de conteúdo */}
            {[
              {
                topic: "Autoridade",
                vals: ["Bíblia (sola scriptura)", "Bíblia + Espírito Santo", "Rei + Bíblia", "Bíblia + Tradição + Papa"],
              },
              {
                topic: "Salvação",
                vals: ["Sola fide + sola gratia", "Predestinação absoluta", "Próxima do luteranismo", "Fé + obras + sacramentos"],
              },
              {
                topic: "Sacramentos",
                vals: ["2 (Batismo e Ceia)", "2 (simbólicos)", "2 a 7 (variou)", "7 sacramentos"],
              },
              {
                topic: "Imagens",
                vals: ["Aceitas com reservas", "Proibidas (iconoclastia)", "Aceitas (via média)", "Aceitas e veneradas"],
              },
              {
                topic: "Clero",
                vals: ["Sacerdócio universal; pastores podem casar", "Pastores leigos, podem casar", "Bispos; celibato inicial mantido", "Celibato obrigatório; hierarquia"],
              },
            ].map((row, ri) => {
              const y = 85 + ri * 44;
              const bgColor = ri % 2 === 0 ? "#f9f9f9" : "#efefef";
              return (
                <g key={ri}>
                  <rect x="10" y={y} width="740" height="40" fill={bgColor} />
                  <text x="15" y={y + 23} fill="#333" fontSize="9.5" fontWeight="bold">{row.topic}</text>
                  {row.vals.map((val, vi) => {
                    const xs = [100, 270, 460, 640];
                    return (
                      <text key={vi} x={xs[vi]} y={y + 15} textAnchor="middle" fill="#333" fontSize="8.5">
                        {val.length > 28 ? (
                          <>
                            <tspan x={xs[vi]} dy="0">{val.substring(0, 26)}</tspan>
                            <tspan x={xs[vi]} dy="12">{val.substring(26)}</tspan>
                          </>
                        ) : val}
                      </text>
                    );
                  })}
                </g>
              );
            })}

            <text x="380" y="312" textAnchor="middle" fill="#888" fontSize="9">
              Comparação simplificada — século XVI
            </text>
          </svg>
          <figcaption>
            Comparação das correntes religiosas do século XVI: luteranismo,
            calvinismo, anglicanismo e catolicismo
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Concílio de Trento (1545–1563) — decisões principais:</strong>
          <ul>
            <li>Reafirmação da <strong>dupla autoridade</strong>: Escritura E Tradição (contra o <em>sola scriptura</em> protestante)</li>
            <li>Confirmação do <strong>livre-arbítrio</strong> humano (contra a predestinação e a sola fide)</li>
            <li>Manutenção dos <strong>sete sacramentos</strong></li>
            <li>Indulgências <strong>mantidas</strong>, mas com proibição de sua venda direta (regulamentação)</li>
            <li>Criação de <strong>seminários tridentinos</strong> para formação obrigatória do clero — atacando a ignorância clerical</li>
            <li>Missa em <strong>latim</strong> mantida; Bíblia Vulgata (São Jerônimo) confirmada como versão oficial</li>
            <li><strong>Index Librorum Prohibitorum:</strong> lista de livros proibidos (incluindo Lutero, Erasmo, Maquiavel)</li>
          </ul>
        </div>
      </section>

      {/* ── 7. JESUÍTAS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>Companhia de Jesus: soldados de Cristo e catequese no Brasil</h2>
        <p>
          A <strong>Companhia de Jesus</strong>, fundada por Inácio de Loyola
          em 1540 e aprovada pelo papa Paulo III, foi o principal instrumento da
          Contrarreforma católica. Organizada com disciplina militar ("soldados
          de Cristo"), os jesuítas atuavam em três frentes: educação de élite,
          missões no ultramar e combate às heresias.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Frente</th>
                <th>Ação</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Educação</td>
                <td>Colégios jesuítas em toda a Europa (modelo <em>Ratio Studiorum</em>)</td>
                <td>Formação da elite católica; combate ao humanismo reformado; influência cultural duradoura</td>
              </tr>
              <tr>
                <td>Missões na Ásia</td>
                <td>Francisco Xavier na Índia, China e Japão (1542–1552)</td>
                <td>Estabelecimento de comunidades cristãs no Oriente; adaptação cultural controversa</td>
              </tr>
              <tr>
                <td>Missões nas Américas</td>
                <td>Manoel da Nóbrega e José de Anchieta chegam ao Brasil com Tomé de Sousa (1549)</td>
                <td>Catequese indígena; fundação de colégios (São Paulo, Salvador); Reduções jesuíticas (Missões do Sul)</td>
              </tr>
              <tr>
                <td>Conflito com colonos</td>
                <td>Jesuítas opuseram-se à escravidão indígena pelos colonos portugueses</td>
                <td>Tensão permanente entre "proteção" jesuíta e interesse dos colonos em mão de obra escrava</td>
              </tr>
              <tr>
                <td>Expulsão</td>
                <td>Marquês de Pombal expulsou os jesuítas do Brasil e Portugal (1759)</td>
                <td>Colapso das missões; índios aldeados ficaram sem proteção; regalismo pombalino</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. GUERRAS DE RELIGIÃO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>Guerras de Religião: da Noite de São Bartolomeu à Paz de Vestfália</h2>
        <p>
          A Reforma gerou conflitos armados em toda a Europa. Os mais graves
          envolveram a França e a Alemanha.
        </p>
        <div className="lesson-highlight">
          <strong>Noite de São Bartolomeu (23–24/08/1572, França):</strong>
          <p>
            Massacre de huguenotes (protestantes calvinistas) em Paris e outras
            cidades francesas, iniciado durante o casamento do rei Henrique de
            Navarra (protestante) com Margarida de Valois (católica). A rainha
            Catarina de Médici ordenou o massacre; estima-se que 3.000 a 30.000
            protestantes foram assassinados. A notícia causou horror na Europa
            protestante e euforia na Roma papal.
          </p>
          <p>
            O fim das guerras de religião francesas veio com o <strong>Édito de
            Nantes</strong> (1598), promulgado pelo rei convertido ao catolicismo
            Henrique IV: os huguenotes receberam liberdade de culto em certos
            territórios. Revogado por Luís XIV em 1685 (Édito de Fontainebleau).
          </p>
        </div>
        <div className="lesson-highlight">
          <strong>Guerra dos Trinta Anos (1618–1648):</strong>
          <p>
            Iniciada na Boêmia com a "Defenestração de Praga" (1618 — conselheiros
            imperiais católicos atirados pela janela por protestantes boêmios),
            tornou-se a guerra mais devastadora da Europa antes do século XX.
            Envolveu todos os grandes poderes europeus. A Alemanha perdeu entre
            1/4 e 1/3 de sua população. A <strong>Paz de Vestfália (1648)</strong>
            foi o primeiro tratado de paz internacional moderno:
          </p>
          <ul>
            <li>Reconheceu o calvinismo como religião legítima (além do catolicismo e luteranismo da Paz de Augsburgo)</li>
            <li>Estabeleceu o princípio da <strong>soberania estatal</strong>: nenhum poder externo (nem o papa, nem o imperador) pode interferir nos assuntos internos de um Estado</li>
            <li>Criou o sistema de Estados soberanos que fundamenta as relações internacionais até hoje</li>
          </ul>
        </div>
      </section>

      {/* ── 9. IMPACTO NO BRASIL ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 9</span>
        <h2>Reforma e Contrarreforma no Brasil colonial</h2>
        <p>
          A Contrarreforma chegou ao Brasil essencialmente pelos <strong>jesuítas</strong>.
          Manoel da Nóbrega e a primeira missão jesuítica desembarcaram em Salvador
          em 1549, junto com o primeiro governador-geral Tomé de Sousa. José de
          Anchieta chegou em 1553.
        </p>
        <p>
          Os jesuítas fundaram aldeamentos (<em>aldeias de catequese</em>) onde
          os índios eram reunidos para aprender a doutrina cristã, o português e
          habilidades artesanais. Do ponto de vista indígena, esse processo foi
          ambíguo: havia proteção contra a escravidão pelos colonos, mas também
          destruição das culturas e religiões tradicionais, e vulnerabilidade
          às epidemias por concentração.
        </p>
        <p>
          A Inquisição, embora nunca estabelecida formalmente no Brasil (não havia
          Tribunal do Santo Ofício aqui), atuou via visitações e delatores,
          perseguindo cristãos-novos (judeus convertidos), práticas "heréticas"
          e comportamentos contrários à moral católica. O Brasil colonial foi
          efetivamente moldado pelo catolicismo tridentino.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Pratique e Fixe</h2>

        <Exercise
          level="Básico"
          title="Sola Scriptura"
          statement={
            <p>
              Um dos princípios centrais da Reforma de Martinho Lutero foi o
              <em> sola scriptura</em> (somente a Escritura). Esse princípio
              significava que:
            </p>
          }
          options={[
            { letter: "A", text: "Somente os padres e bispos podiam ler e interpretar a Bíblia" },
            { letter: "B", text: "A Bíblia deveria ser escrita em latim e nunca traduzida para línguas vernáculas" },
            { letter: "C", text: "A Bíblia era a única autoridade em matéria de fé, independentemente das decisões papais e da tradição da Igreja", correct: true },
            { letter: "D", text: "Somente as obras escritas por Lutero tinham autoridade religiosa para os protestantes" },
            { letter: "E", text: "A tradição oral da Igreja tinha prioridade sobre o texto bíblico escrito" },
          ]}
          resolution={
            <p>
              <em>Sola scriptura</em> foi uma das rupturas fundamentais com Roma:
              se a Bíblia é a única autoridade, então decisões papais, bulas,
              tradições e decretos conciliares que contradissessem a Bíblia eram
              inválidos. Isso transferia o poder de interpretação religiosa do papa
              e dos bispos para qualquer crente que soubesse ler — por isso Lutero
              traduziu a Bíblia para o alemão.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Paz de Vestfália e relações internacionais"
          statement={
            <p>
              A Paz de Vestfália (1648), que encerrou a Guerra dos Trinta Anos,
              é considerada um marco fundador das relações internacionais modernas.
              Qual foi sua principal contribuição nesse sentido?
            </p>
          }
          options={[
            { letter: "A", text: "Estabeleceu o papado como árbitro supremo dos conflitos entre Estados europeus" },
            { letter: "B", text: "Criou uma federação europeia com parlamento único e moeda comum" },
            { letter: "C", text: "Reconheceu o princípio da soberania estatal — nenhum poder externo pode interferir nos assuntos internos dos Estados", correct: true },
            { letter: "D", text: "Unificou os reinos europeus sob o domínio do Sacro Império Romano-Germânico" },
            { letter: "E", text: "Proibiu definitivamente as guerras religiosas ao impor o catolicismo a todos os Estados europeus" },
          ]}
          resolution={
            <p>
              A Paz de Vestfália estabeleceu o sistema de Estados soberanos:
              cada Estado é soberano em seu território e nenhuma entidade
              supranacional (papa, imperador) pode interferir em seus assuntos
              internos. Esse princípio é a base do direito internacional até
              hoje — a Carta da ONU (1945) reafirma a soberania estatal como
              princípio fundamental.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="A ética protestante e o capitalismo"
          statement={
            <p>
              Max Weber, em <em>A Ética Protestante e o Espírito do Capitalismo</em>
              (1905), argumentou que o calvinismo contribuiu para o desenvolvimento
              do capitalismo moderno. Qual é o mecanismo causal que Weber propõe?
            </p>
          }
          options={[
            { letter: "A", text: "Calvino defendia explicitamente o lucro como virtude cristã e a usura como legítima" },
            { letter: "B", text: "A doutrina da predestinação gerou ansiedade sobre a salvação, e o sucesso econômico foi interpretado como sinal da eleição divina, criando uma ética de trabalho sistemático e acumulação", correct: true },
            { letter: "C", text: "Os calvinistas rejeitavam qualquer trabalho mundano em favor da vida contemplativa, gerando eficiência pelo ascetismo" },
            { letter: "D", text: "A proibição da riqueza individual pelo calvinismo levou ao desenvolvimento de empresas coletivas, origem das sociedades por ações" },
            { letter: "E", text: "Weber argumentou que o catolicismo, não o calvinismo, foi responsável pela origem do capitalismo" },
          ]}
          resolution={
            <p>
              O argumento weberiano é sofisticado: o calvinista não sabe se é
              "eleito". A ansiedade existencial levou a buscar "sinais" da
              eleição — e o sucesso no trabalho foi interpretado como tal.
              Isso gerou uma ética de trabalho metódico, disciplinado, com
              reinvestimento dos lucros (não consumo conspícuo). É a base
              psicológica e cultural que, segundo Weber, foi favorável ao
              capitalismo industrial.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Jesuítas no Brasil colonial"
          statement={
            <p>
              "Os jesuítas chegaram ao Brasil em 1549 com a missão de catequizar
              os indígenas. Em suas aldeias, os índios aprendiam a doutrina
              cristã, o português e ofícios artesanais. Mas os colonos reclamavam
              que os padres 'roubavam' a mão de obra indígena, impedindo sua
              escravização. Em 1759, o Marquês de Pombal expulsou os jesuítas do
              Brasil e de Portugal."
              <br /><br />
              O texto revela que a presença jesuíta no Brasil colonial:
            </p>
          }
          options={[
            { letter: "A", text: "Foi completamente harmoniosa, pois colonos e jesuítas compartilhavam os mesmos objetivos" },
            { letter: "B", text: "Representou um conflito de interesses: entre a visão da Igreja (catequese e proteção relativa) e a do colonato (exploração da mão de obra indígena)", correct: true },
            { letter: "C", text: "Teve como principal objetivo enriquecer a Companhia de Jesus com a exploração das riquezas naturais brasileiras" },
            { letter: "D", text: "Foi inteiramente benéfica para os indígenas, que preservaram suas culturas nas missões jesuítas" },
            { letter: "E", text: "Estabeleceu no Brasil a Inquisição como tribunal permanente contra heresias" },
          ]}
          resolution={
            <p>
              A presença jesuíta foi estruturalmente conflituosa: para os colonos,
              os índios aldeados eram mão de obra perdida (não podiam ser
              escravizados nos aldeamentos). Para os jesuítas, eram almas a
              converter. Para os índios, era ambígua: proteção relativa contra
              a escravidão, mas destruição cultural e vulnerabilidade às
              epidemias. A expulsão de Pombal (1759) encerrou essa tensão em
              favor dos interesses coloniais e do Estado laico.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Anglicanismo e poder político"
          statement={
            <p>
              Em 1534, o Ato de Supremacia declara: "O rei, nosso senhor, seus
              herdeiros e sucessores, reis deste reino, deverão ser aceitos,
              reconhecidos e tomados como a única e suprema cabeça na Terra da
              Igreja da Inglaterra."
              <br /><br />
              A análise desse documento revela que:
            </p>
          }
          options={[
            { letter: "A", text: "A Reforma na Inglaterra foi motivada primariamente por razões teológicas, como a discordância doutrinária de Henrique VIII com Roma" },
            { letter: "B", text: "O anglicanismo surgiu da fusão entre luteranismo e calvinismo adaptada à realidade inglesa" },
            { letter: "C", text: "A Reforma inglesa foi fundamentalmente política: a ruptura com Roma foi instrumento de ampliação do poder monárquico sobre a Igreja nacional", correct: true },
            { letter: "D", text: "O Ato de Supremacia foi uma resposta à perseguição dos protestantes ingleses pelo papa" },
            { letter: "E", text: "Henrique VIII converteu-se ao protestantismo por convicção teológica após ler as obras de Lutero" },
          ]}
          resolution={
            <p>
              O Ato de Supremacia é um documento político, não teológico.
              Henrique VIII não era teólogo protestante — de fato, havia
              escrito uma refutação a Lutero e recebido do papa o título
              "Defensor da Fé". A ruptura foi motivada por razões políticas
              (divórcio negado pelo papa) e econômicas (confisco dos bens
              dos mosteiros). O anglicanismo é o caso mais claro de Reforma
              "de cima para baixo", imposta pelo Estado.
            </p>
          }
        />
      </section>
    </article>
  );
}
