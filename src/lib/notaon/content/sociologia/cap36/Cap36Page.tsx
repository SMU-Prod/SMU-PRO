"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 36</span>
          <h1>Globalização e Sociedade em Rede</h1>
          <p>
            A globalização transformou radicalmente a organização das sociedades contemporâneas,
            criando o que Manuel Castells chamou de "sociedade em rede" — um sistema em que fluxos
            de informação, capital e poder atravessam fronteiras em tempo real. Compreender esse
            processo é essencial para interpretar questões do ENEM sobre desigualdades globais,
            migrações e governança internacional.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sociedade em Rede</span>
        <h2>1. Manuel Castells e a Sociedade em Rede</h2>
        <p>
          O sociólogo espanhol Manuel Castells, em sua trilogia <em>A Era da Informação</em> (1996–1998),
          argumentou que a globalização contemporânea não é apenas econômica: é estruturalmente uma{" "}
          <strong>sociedade em rede</strong> organizada em torno de fluxos — de informação, capital,
          tecnologia, imagens e símbolos — que circulam globalmente em tempo quase real.
        </p>
        <p>
          Nas redes, o poder não pertence a quem controla território, mas a quem controla os{" "}
          <strong>nós estratégicos</strong> — os pontos de conexão e comutação entre os fluxos.
          Grandes plataformas tecnológicas (Google, Meta, Amazon), centros financeiros (Nova York,
          Londres, Tóquio) e instituições supranacionais são exemplos de nós de poder na rede global.
        </p>
        <div className="lesson-highlight">
          <h3>Espaço de fluxos × espaço de lugares</h3>
          <p>
            Castells distingue o <strong>espaço de fluxos</strong> (onde se organizam as redes globais
            de poder e capital) do <strong>espaço de lugares</strong> (a experiência cotidiana e local
            das pessoas). A tensão entre esses dois espaços está na raiz de conflitos identitários e
            movimentos de resistência localista — como o nativismo e os fundamentalismos religiosos.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 180" width="700" height="180" aria-label="Diagrama da sociedade em rede">
            {[
              { cx: 100, cy: 90, label: "Capital" },
              { cx: 250, cy: 40, label: "Tecnologia" },
              { cx: 250, cy: 140, label: "Trabalho" },
              { cx: 400, cy: 90, label: "NÓ CENTRAL", big: true },
              { cx: 560, cy: 40, label: "Informação" },
              { cx: 560, cy: 140, label: "Imagens" },
            ].map((n) => (
              <g key={n.label}>
                <circle cx={n.cx} cy={n.cy} r={n.big ? 44 : 34} fill={n.big ? "#0ea5e9" : "#e0f2fe"} stroke={n.big ? "#0284c7" : "#0ea5e9"} strokeWidth={1.8} />
                <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize={n.big ? 12 : 11} fontWeight={700} fill={n.big ? "#fff" : "#0c4a6e"}>{n.label}</text>
              </g>
            ))}
            {([[100,90,250,40],[100,90,250,140],[250,40,400,90],[250,140,400,90],[400,90,560,40],[400,90,560,140]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0ea5e9" strokeWidth={1.5} strokeDasharray="6 3" />
            ))}
            <text x={350} y={175} textAnchor="middle" fontSize={11} fill="#6b7280">Fluxos globais conectados por nós estratégicos de poder</text>
          </svg>
          <figcaption>Na sociedade em rede, o poder se concentra nos nós que controlam os fluxos globais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Globalização Financeira</span>
        <h2>2. Capitalismo Financeiro, Crises e Paraísos Fiscais</h2>
        <p>
          A <strong>globalização financeira</strong> é caracterizada pela livre circulação de capitais
          especulativos — dinheiro que não financia a produção real, mas busca lucro em apostas sobre
          câmbio, commodities e derivativos. A desregulamentação dos mercados financeiros a partir dos
          anos 1970–80 (neoliberalismo) possibilitou crises de escala global.
        </p>
        <ul>
          <li><strong>Crise asiática (1997):</strong> fuga de capitais especulativos da Tailândia, Coreia do Sul e Indonésia derrubou moedas e empurrou milhões para a pobreza em meses.</li>
          <li><strong>Crise do subprime (2008):</strong> hipotecas de alto risco nos EUA empacotadas como títulos financeiros geraram colapso global; desemprego disparou em países sem relação com o mercado imobiliário americano.</li>
          <li><strong>Paraísos fiscais:</strong> jurisdições com sigilo bancário e impostos próximos de zero (Ilhas Cayman, Luxemburgo, Suíça) onde grandes corporações e bilionários ocultam fortunas — estimam-se US$ 7–12 trilhões sonegados globalmente.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Piketty e a desigualdade global</h3>
          <p>
            O economista Thomas Piketty mostrou que, quando a taxa de retorno do capital supera
            o crescimento econômico, a desigualdade tende a crescer indefinidamente. A globalização
            financeira amplifica esse mecanismo ao permitir que o capital ultrapasse fronteiras rumo
            a jurisdições de tributação mínima.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Migração Global</span>
        <h2>3. Migração, Diáspora e Refugiados</h2>
        <p>
          O aumento dos fluxos migratórios globais é um dos fenômenos mais visíveis da globalização.
          Segundo o ACNUR, em 2023 havia mais de 110 milhões de pessoas deslocadas forçadamente no
          mundo — o maior número desde a Segunda Guerra Mundial. As causas variam de conflitos
          armados a desastres climáticos e instabilidade econômica.
        </p>
        <p>
          A <strong>Convenção de Refugiados de 1951</strong> (e Protocolo de 1967) define refugiado
          como pessoa que teme perseguição por raça, religião, nacionalidade, opinião política ou
          grupo social. O Brasil é signatário e acolheu, na última década, grandes fluxos de
          haitianos, sírios e venezuelanos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Diáspora</h3>
            <p>Dispersão de um grupo étnico ou nacional por vários países, mantendo identidade cultural de origem. Ex.: diáspora africana, judaica, síria.</p>
          </div>
          <div className="lesson-card">
            <span>🚧</span>
            <h3>Xenofobia</h3>
            <p>Medo ou hostilidade irracional a estrangeiros; se intensifica em períodos de crise econômica. É crime no Brasil (Lei 9.459/1997).</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Lei de Migração (BR)</h3>
            <p>Lei 13.445/2017 substituiu o Estatuto do Estrangeiro de 1980, adotando perspectiva de direitos humanos em vez de segurança nacional.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Governança Global</span>
        <h2>4. Soberania Nacional e Organizações Internacionais</h2>
        <p>
          A globalização tensiona o conceito clássico de <strong>soberania nacional</strong>:
          decisões do FMI ou da OMC podem condicionar políticas internas de países soberanos.
          Isso gerou debates sobre o <em>déficit democrático</em> das instituições globais, já que
          suas decisões afetam populações que não as elegeram.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Organização</th>
                <th>Criação</th>
                <th>Função principal</th>
                <th>Crítica mais comum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ONU</td>
                <td>1945</td>
                <td>Manutenção da paz e cooperação internacional</td>
                <td>Veto dos 5 permanentes paralisa o Conselho de Segurança</td>
              </tr>
              <tr>
                <td>FMI</td>
                <td>1944</td>
                <td>Estabilidade financeira e empréstimos a países em crise</td>
                <td>Condiciona empréstimos a ajustes fiscais que aprofundam pobreza</td>
              </tr>
              <tr>
                <td>OMC</td>
                <td>1995</td>
                <td>Regular o comércio internacional e reduzir tarifas</td>
                <td>Regras favorecem países ricos com subsídios agrícolas</td>
              </tr>
              <tr>
                <td>Banco Mundial</td>
                <td>1944</td>
                <td>Financiamento de projetos de desenvolvimento</td>
                <td>Projetos geraram endividamento e danos ambientais em países pobres</td>
              </tr>
              <tr>
                <td>G20</td>
                <td>1999</td>
                <td>Fórum das 20 maiores economias para coordenação de políticas</td>
                <td>Não tem poder vinculante; decisões dependem de vontade política</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Multilateralismo em crise</h3>
          <p>
            O fortalecimento de movimentos nacionalistas e a rivalidade EUA–China fragilizaram
            instituições multilaterais nas últimas décadas. O conceito de <strong>policentrismo</strong>
            (múltiplos centros de poder regional) substituiu a ideia de uma única ordem mundial
            liderada pelos EUA pós-Guerra Fria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura Global</span>
        <h2>5. Globalização Cultural: Homogeneização e Resistência</h2>
        <p>
          A globalização não é apenas econômica ou tecnológica — é também <strong>cultural</strong>.
          O sociólogo americano George Ritzer descreveu a <strong>McDonaldização</strong> como o
          processo pelo qual os princípios das redes de fast food (eficiência, calculabilidade,
          previsibilidade e controle tecnológico) se difundem por toda a sociedade global, homogeneizando
          práticas de consumo, de lazer e até de educação. O "imperialismo cultural" americano —
          filmes de Hollywood, franquias de fast food, redes sociais, músicas em inglês — cria uma
          cultura global de consumo que pressiona as culturas locais.
        </p>
        <p>
          Mas a globalização cultural não produz homogeneização completa. O sociólogo Roland Robertson
          cunhou o conceito de <strong>glocalização</strong> para descrever como culturas locais
          absorvem, adaptam e ressignificam elementos globais: o McDonalds serve pão de queijo no
          Brasil, arroz no Japão e curry na Índia. O teórico pós-colonial Homi Bhabha analisou o
          <strong> hibridismo cultural</strong> — as formas mestiças e criativas que emergem do
          encontro entre culturas dominantes e subordinadas. O samba, o reggaeton e o K-pop são
          exemplos de culturas locais que invertem o fluxo e se tornam globais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tendência global</th>
                <th>Conceito</th>
                <th>Resposta local</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Americanização da dieta</td>
                <td>McDonaldização (Ritzer)</td>
                <td>Glocalização (Robertson)</td>
                <td>McDonalds com pão de queijo no Brasil; coxinha no KFC</td>
              </tr>
              <tr>
                <td>Hegemonia do inglês</td>
                <td>Imperialismo linguístico</td>
                <td>Resistência e fusão criativa</td>
                <td>Rap brasileiro com gírias locais; literatura africana em inglês</td>
              </tr>
              <tr>
                <td>Hollywood / Netflix</td>
                <td>Soft power cultural americano</td>
                <td>Cinema nacional e K-pop global</td>
                <td>Parasite (Oscar 2020); produções brasileiras da Netflix</td>
              </tr>
              <tr>
                <td>Redes sociais globais</td>
                <td>Capitalismo de plataforma</td>
                <td>Adaptação de conteúdo local</td>
                <td>Conteúdo em português no TikTok; memes nacionais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modernidade Líquida</span>
        <h2>6. Modernidade Líquida: Zygmunt Bauman</h2>
        <p>
          O sociólogo polonês Zygmunt Bauman (1925–2017) é um dos pensadores mais influentes sobre
          a condição contemporânea. Em sua obra <em>Modernidade Líquida</em> (2000), propõe uma
          distinção crucial: a <strong>modernidade sólida</strong> (do século XIX ao meado do XX)
          era caracterizada por estruturas estáveis — fábricas permanentes, empregos para a vida
          toda, casamentos duradouros, identidades fixas, fronteiras claras entre classes e nações.
          A <strong>modernidade líquida</strong> contemporânea derrete essas estruturas: relações
          fluidas, identidades múltiplas e mutáveis, vínculos fáceis de criar e desfazer, e
          incerteza como condição permanente.
        </p>
        <p>
          Bauman desenvolve o conceito de <strong>"refugos humanos"</strong> para descrever as
          populações que a globalização produz como resíduos: migrantes económicos, refugiados,
          populações de rua, trabalhadores precarizados — todos aqueles que o sistema não precisa
          e não sabe onde colocar. As fronteiras da modernidade líquida são "líquidas" para o
          capital (que circula livremente) e "sólidas" para os pobres (que encontram muros,
          cercas e centros de detenção).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 660 180" width="660" height="180" aria-label="Modernidade sólida versus líquida segundo Bauman">
            <rect x={10} y={20} width={300} height={140} rx={10} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={160} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Modernidade Sólida</text>
            <text x={160} y={68} textAnchor="middle" fontSize={11} fill="#1e40af">Emprego vitalício</text>
            <text x={160} y={86} textAnchor="middle" fontSize={11} fill="#1e40af">Identidade fixa de classe</text>
            <text x={160} y={104} textAnchor="middle" fontSize={11} fill="#1e40af">Casamento para sempre</text>
            <text x={160} y={122} textAnchor="middle" fontSize={11} fill="#1e40af">Fronteiras nacionais claras</text>
            <text x={160} y={140} textAnchor="middle" fontSize={11} fill="#1e40af">Séc. XIX – meados XX</text>

            <text x={330} y={98} textAnchor="middle" fontSize={22} fill="#6b7280">→</text>

            <rect x={350} y={20} width={300} height={140} rx={10} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={500} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Modernidade Líquida</text>
            <text x={500} y={68} textAnchor="middle" fontSize={11} fill="#78350f">Trabalho precário e flexível</text>
            <text x={500} y={86} textAnchor="middle" fontSize={11} fill="#78350f">Identidades múltiplas e fluidas</text>
            <text x={500} y={104} textAnchor="middle" fontSize={11} fill="#78350f">Amor líquido, vínculos frágeis</text>
            <text x={500} y={122} textAnchor="middle" fontSize={11} fill="#78350f">Capital sem fronteiras; pessoas, não</text>
            <text x={500} y={140} textAnchor="middle" fontSize={11} fill="#78350f">Séc. XXI</text>

            <text x={330} y={168} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Bauman: o que era sólido derrete, o que era permanente se torna provisório</text>
          </svg>
          <figcaption>A transição da modernidade sólida para a líquida: estruturas estáveis se dissolvem em fluidez e incerteza.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Amor líquido e identidade líquida</h3>
          <p>
            Em <em>Amor Líquido</em> (2003), Bauman analisa como os laços afetivos contemporâneos
            refletem a lógica do consumo: queremos conexões intensas mas sem compromisso de longo
            prazo, fáceis de desfazer quando deixam de satisfazer. Nas redes sociais, "desconectar"
            é sempre possível. A identidade líquida é construída, desconstruída e reconstruída
            permanentemente — o que pode ser libertador ou angustiante, dependendo dos recursos
            (econômicos, culturais, psicológicos) que o indivíduo possui.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdades Globais</span>
        <h2>7. Desigualdades Globais: Norte-Sul e Sistemas-Mundo</h2>
        <p>
          A globalização não eliminou as desigualdades entre países — em muitos aspectos, as
          aprofundou. O sociólogo americano Immanuel Wallerstein desenvolveu a
          <strong> Teoria dos Sistemas-Mundo</strong>, que analisa o capitalismo como um sistema
          global dividido em três zonas: <strong>centro</strong> (países ricos e industrializados,
          que controlam tecnologia e finanças), <strong>semiperiferia</strong> (países de
          industrialização intermediária, como Brasil, China e Índia) e <strong>periferia</strong>
          (países fornecedores de matérias-primas e mão de obra barata, principalmente na África
          e no Sul da Ásia).
        </p>
        <p>
          A <strong>teoria da dependência</strong>, desenvolvida por economistas latino-americanos
          como Celso Furtado e Fernando Henrique Cardoso (com Enzo Faletto), argumenta que o
          subdesenvolvimento da América Latina não é uma fase anterior ao desenvolvimento dos
          países ricos — é sua contraface estrutural. Países periféricos são mantidos em posição
          dependente pela divisão internacional do trabalho, que os condena à exportação de
          commodities e à importação de manufaturados de alto valor agregado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Zona (Wallerstein)</th>
                <th>Características</th>
                <th>Exemplos</th>
                <th>IDH médio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Centro</strong></td>
                <td>Alta tecnologia, finanças, serviços, capital intensivo</td>
                <td>EUA, Alemanha, Japão, França</td>
                <td>0,90+</td>
              </tr>
              <tr>
                <td><strong>Semiperiferia</strong></td>
                <td>Industrialização parcial, exporta manufaturas e commodities</td>
                <td>Brasil, China, México, Índia, África do Sul</td>
                <td>0,70–0,80</td>
              </tr>
              <tr>
                <td><strong>Periferia</strong></td>
                <td>Exporta matérias-primas, mão de obra barata, dependência financeira</td>
                <td>Moçambique, Bolívia, Haiti, Myanmar</td>
                <td>abaixo de 0,60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Piketty e a desigualdade global</h3>
          <p>
            O economista francês Thomas Piketty demonstrou em <em>O Capital no Século XXI</em> (2013)
            que, quando a taxa de retorno do capital (r) é maior que a taxa de crescimento econômico
            (g), a desigualdade tende a aumentar indefinidamente. A globalização financeira amplifica
            esse mecanismo: o capital ultrapassa fronteiras em busca de paraísos fiscais e mão de obra
            barata, enquanto os trabalhadores permanecem confinados em mercados nacionais. Resultado:
            o 1% mais rico detém mais riqueza do que os 99% restantes combinados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">IA e Poder</span>
        <h2>8. Digitalização, Inteligência Artificial e Poder</h2>
        <p>
          A <strong>Inteligência Artificial</strong> (IA) e a digitalização da economia estão
          reordenando as relações de poder global. Shoshana Zuboff, em <em>A Era do Capitalismo
          de Vigilância</em> (2019), argumenta que as Big Techs — Google, Meta, Amazon, Microsoft,
          Apple — coletam dados comportamentais dos usuários em escala sem precedentes históricos.
          Esses dados são processados por algoritmos para prever e modificar comportamentos humanos,
          gerando lucro tanto com publicidade direcionada quanto com a venda de "futuros
          comportamentais" a terceiros.
        </p>
        <p>
          As Big Techs concentram poder econômico, tecnológico e político que rivaliza com o de
          muitos Estados nacionais. A capitalização de mercado da Apple, por exemplo, supera o PIB
          da maioria dos países do mundo. Isso levanta questões fundamentais sobre soberania
          digital, privacidade, monopólio e democracia — pois plataformas privadas definem as
          regras do debate público sem a legitimidade democrática que os governos têm.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🕵️</span>
            <h3>Capitalismo de Vigilância</h3>
            <p>Zuboff: dados pessoais são a matéria-prima do capitalismo digital. Comportamentos são monitorados, analisados e vendidos como "produtos futuros" a anunciantes e outros compradores.</p>
          </div>
          <div className="lesson-card">
            <span>🤖</span>
            <h3>IA e Discriminação</h3>
            <p>Algoritmos de reconhecimento facial, crédito e contratação reproduzem e amplificam vieses raciais e de gênero presentes nos dados de treinamento — racismo e sexismo automatizados.</p>
          </div>
          <div className="lesson-card">
            <span>🇪🇺</span>
            <h3>Lei Europeia de IA (2024)</h3>
            <p>Primeira regulação abrangente de IA no mundo: classifica sistemas por risco (inaceitável, alto, baixo), exige transparência e proíbe vigilância biométrica em massa em espaços públicos.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Brasil e Soberania Digital</h3>
            <p>O Brasil discute um marco regulatório de IA (PL 2338/2023), mas ainda depende de infraestrutura digital estrangeira — servidores em nuvem americanos e chips taiwaneses/holandeses.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil Global</span>
        <h2>9. O Brasil na Globalização: Dependência ou Protagonismo?</h2>
        <p>
          O Brasil ocupa posição ambígua na globalização: é a nona maior economia do mundo (PIB),
          possui uma das maiores reservas de recursos naturais do planeta e lidera a exportação de
          commodities agrícolas — soja, carne, açúcar, café, minério de ferro. Ao mesmo tempo,
          mantém alta dependência de importações tecnológicas e de capital externo, configurando
          o papel típico da semiperiferia na teoria dos sistemas-mundo de Wallerstein.
        </p>
        <p>
          O <strong>BRICS</strong> (Brasil, Rússia, Índia, China, África do Sul — e em expansão
          desde 2024) é uma tentativa de criar uma alternativa à ordem financeira dominada pelo
          G7 (EUA, Europa, Japão). O grupo discute a criação de uma moeda comum para comércio
          bilateral que reduza a dependência do dólar americano. O Brasil desempenhou papel de
          liderança diplomática do Sul Global especialmente nos governos Lula (2003–2010 e 2023–),
          articulando posições sobre comércio agrícola (rodada de Doha), clima e segurança alimentar.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parceiro comercial</th>
                <th>Relação</th>
                <th>Principal produto</th>
                <th>Dependência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>China</strong></td>
                <td>Maior parceiro comercial (desde 2009)</td>
                <td>Soja, minério de ferro, petróleo</td>
                <td>Alta: demanda chinesa determina preços das commodities</td>
              </tr>
              <tr>
                <td><strong>EUA</strong></td>
                <td>2º ou 3º parceiro; investidor</td>
                <td>Manufaturados, aeronaves, petróleo</td>
                <td>Dólar como moeda de reserva; tecnologia e sistema SWIFT</td>
              </tr>
              <tr>
                <td><strong>União Europeia</strong></td>
                <td>Bloco comercial; acordo Mercosul-UE (em tramitação)</td>
                <td>Agropecuária, minérios</td>
                <td>Condicionalidades ambientais (cláusulas de desmatamento)</td>
              </tr>
              <tr>
                <td><strong>Argentina / Mercosul</strong></td>
                <td>Bloco regional</td>
                <td>Manufaturados, veículos, alimentos</td>
                <td>Instabilidade macroeconômica argentina impacta exportações brasileiras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Globalização e Sociedade em Rede no ENEM</h2>
        <p>
          O ENEM cobra globalização principalmente em questões que articulam teoria social com
          fenômenos contemporâneos: fluxos migratórios, crises financeiras, diversidade cultural
          e desigualdades entre países. Textos de Bauman, Castells ou sobre a teoria dos
          sistemas-mundo aparecem com frequência nos cadernos de Ciências Humanas.
        </p>
        <p>
          A chave interpretativa é entender que a globalização é <strong>desigual</strong>: beneficia
          mais o capital do que o trabalho, mais os países do centro do que os da periferia, mais
          os consumidores com poder aquisitivo do que os excluídos do mercado. O ENEM valoriza a
          leitura crítica desse processo — não a sua celebração acrítica como inevitável progresso.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Autor</th>
                <th>Armadilha no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sociedade em rede</strong></td>
                <td>Organização social baseada em fluxos de informação, capital e poder que atravessam fronteiras</td>
                <td>Manuel Castells</td>
                <td>Não confundir com redes sociais digitais — o conceito é anterior à internet atual</td>
              </tr>
              <tr>
                <td><strong>Espaço de fluxos</strong></td>
                <td>Dimensão da rede global onde circulam capital, informação e poder; opõe-se ao espaço de lugares (local)</td>
                <td>Castells</td>
                <td>A tensão entre fluxos (global) e lugares (local) gera movimentos identitários de resistência</td>
              </tr>
              <tr>
                <td><strong>Modernidade líquida</strong></td>
                <td>Condição contemporânea de fluidez, incerteza e vínculos frágeis; opõe-se à solidez das instituições modernas</td>
                <td>Zygmunt Bauman</td>
                <td>Não é apenas sobre amor ou relacionamentos — abrange trabalho, identidade, política e consumo</td>
              </tr>
              <tr>
                <td><strong>Sistemas-mundo / dependência</strong></td>
                <td>Centro-semiperiferia-periferia; países subdesenvolvidos são dependentes estruturalmente, não "atrasados"</td>
                <td>Wallerstein / Cardoso</td>
                <td>Subdesenvolvimento ≠ atraso histórico; é posição estrutural no sistema capitalista global</td>
              </tr>
              <tr>
                <td><strong>Glocalização</strong></td>
                <td>Adaptação local de tendências globais; culturas locais ressignificam o global</td>
                <td>Robertson</td>
                <td>Globalização não homogeneíza completamente — gera hibridismo e resistência</td>
              </tr>
              <tr>
                <td><strong>McDonaldização</strong></td>
                <td>Difusão dos princípios do fast food (eficiência, padronização, previsibilidade, controle) para toda a sociedade</td>
                <td>George Ritzer</td>
                <td>Não é só sobre fast food — aplica-se à educação, saúde, turismo e serviços em geral</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Armadilha clássica: globalização = progresso universal</h3>
          <p>
            O ENEM nunca apresenta a globalização como fenômeno puramente positivo. Questões que
            descrevem a globalização como "democratização" ou "nivelamento" entre países são
            geralmente distratoras. A perspectiva correta articula benefícios desiguais, reprodução
            de hierarquias centro-periferia e resistências culturais locais ao processo de
            homogeneização. Bauman, Castells e Wallerstein são as referências mais seguras para
            anchorar essas análises no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Sociedade em rede"
          statement={<p>Manuel Castells, ao descrever a "sociedade em rede", afirma que o poder nas sociedades contemporâneas se concentra principalmente em quem:</p>}
          options={[
            { letter: "A", text: <>Controla os maiores territórios nacionais e seus recursos naturais.</> },
            { letter: "B", text: <>Possui maior número de trabalhadores na indústria manufatureira.</> },
            { letter: "C", text: <>Controla os nós estratégicos de conexão nos fluxos globais de informação e capital.</>, correct: true },
            { letter: "D", text: <>Detém os maiores exércitos e capacidade de projeção de força militar.</> },
            { letter: "E", text: <>Representa as maiores populações nacionais em organismos supranacionais.</> },
          ]}
          resolution={<p>Castells distingue o espaço de fluxos (redes globais) do espaço de lugares (local). O poder migrou para quem controla os nós — pontos de conexão entre fluxos de capital, informação e tecnologia —, não para quem controla território ou força bruta.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Crises financeiras globais"
          statement={<p>A crise do subprime de 2008 demonstrou uma característica central da globalização financeira. Assinale a alternativa que melhor explica esse fenômeno:</p>}
          options={[
            { letter: "A", text: <>A crise se limitou aos Estados Unidos, pois a regulamentação europeia protegeu os demais países.</> },
            { letter: "B", text: <>Hipotecas imobiliárias americanas de alto risco, securitizadas e vendidas globalmente, geraram colapso sistêmico internacional.</>, correct: true },
            { letter: "C", text: <>O colapso foi causado exclusivamente pela especulação com commodities agrícolas em mercados emergentes.</> },
            { letter: "D", text: <>A desregulamentação financeira foi limitada aos países em desenvolvimento, protegendo as economias centrais.</> },
            { letter: "E", text: <>A crise demonstrou a eficácia do FMI em prevenir contágio financeiro entre países.</> },
          ]}
          resolution={<p>O mecanismo central foi a securitização: hipotecas de alto risco foram empacotadas em títulos financeiros e vendidas globalmente. Quando o mercado imobiliário americano colapsou, bancos de todo o mundo quebraram, evidenciando o risco sistêmico da globalização financeira desregulada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Refugiados e Convenção de 1951"
          statement={<p>Segundo a Convenção de Refugiados de 1951, uma pessoa pode ser reconhecida como refugiada quando:</p>}
          options={[
            { letter: "A", text: <>Migra voluntariamente em busca de melhores condições econômicas em outro país.</> },
            { letter: "B", text: <>Abandona seu país em razão de desastres naturais como terremotos e inundações.</> },
            { letter: "C", text: <>Tem fundado temor de perseguição por raça, religião, nacionalidade, opinião política ou pertencimento a grupo social.</>, correct: true },
            { letter: "D", text: <>É nacional de país em conflito armado, independentemente de sofrer perseguição individual.</> },
            { letter: "E", text: <>Enfrenta pobreza extrema e não encontra emprego no país de origem.</> },
          ]}
          resolution={<p>A definição clássica exige "fundado temor de perseguição" por um dos cinco motivos listados. Migrantes econômicos e deslocados por desastres naturais não se enquadram — embora haja debates sobre ampliar a proteção para "refugiados climáticos".</p>}
        />

        <Exercise
          level="Avançado"
          title="Crítica às instituições globais"
          statement={<p>Críticos do FMI e do Banco Mundial argumentam que essas instituições reproduzem relações de dominação entre países centrais e periféricos. Essa perspectiva se aproxima de qual teoria sociológica?</p>}
          options={[
            { letter: "A", text: <>Funcionalismo de Durkheim, que vê as instituições como mecanismos de integração social universal.</> },
            { letter: "B", text: <>Teoria da modernização, que considera as organizações internacionais vetores de progresso para todos os países.</> },
            { letter: "C", text: <>Teoria da dependência e análise dos sistemas-mundo (Wallerstein), que identifica estruturas de dominação centro–periferia no capitalismo global.</>, correct: true },
            { letter: "D", text: <>Interacionismo simbólico, que foca nas interações face a face entre diplomatas nas negociações internacionais.</> },
            { letter: "E", text: <>Positivismo de Comte, que defende a neutralidade científica das instituições na promoção do progresso.</> },
          ]}
          resolution={<p>Immanuel Wallerstein (teoria dos sistemas-mundo) e a teoria da dependência argumentam que as relações entre países centrais e periféricos são estruturalmente assimétricas. As instituições de Bretton Woods, criadas pelo Ocidente industrializado, historicamente beneficiaram exportadores de capital das economias centrais.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Xenofobia e crise migratória"
          statement={
            <p>
              "Entre 2015 e 2016, mais de um milhão de pessoas cruzaram o Mediterrâneo em direção
              à Europa, fugindo de conflitos na Síria, Líbia e Afeganistão. O fluxo desencadeou
              crises políticas em países europeus, com partidos de extrema-direita explorando o
              medo da 'invasão cultural' para ganhar eleições."
              <br /><br />
              A partir do trecho, a xenofobia que se intensificou nesse contexto pode ser sociologicamente
              explicada como:
            </p>
          }
          options={[
            { letter: "A", text: <>Uma reação natural e biologicamente determinada de autopreservação das populações nativas diante de ameaças externas.</> },
            { letter: "B", text: <>Um fenômeno construído socialmente, instrumentalizado politicamente para redirecionar ansiedades econômicas contra grupos minoritários vulneráveis.</>, correct: true },
            { letter: "C", text: <>Uma expressão legítima de solidariedade mecânica, conforme descrita por Durkheim para sociedades pré-industriais.</> },
            { letter: "D", text: <>Um epifenômeno sem relevância política, sem impacto real nas eleições dos países receptores.</> },
            { letter: "E", text: <>Uma consequência inevitável e temporária do processo de globalização, que se dissolve espontaneamente com o tempo.</> },
          ]}
          resolution={<p>A Sociologia rejeita explicações biologizantes da xenofobia. Trata-se de uma construção social: em contextos de insegurança econômica, migrantes tornam-se bodes expiatórios — mecanismo amplificado por discursos políticos populistas que identificam o "outro" como ameaça à identidade nacional (Zygmunt Bauman: "refugo humano").</p>}
        />
      </section>
    </article>
  );
}
