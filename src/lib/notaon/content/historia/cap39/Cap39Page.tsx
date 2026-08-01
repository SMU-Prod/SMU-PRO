"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 39</span>
          <h1>República Populista (1946–1964)</h1>
          <p>
            Entre o fim do Estado Novo e o golpe militar de 1964, o Brasil viveu
            seu período mais intenso de democracia de massas: seis presidentes,
            três constituições, a criação da Petrobras, a construção de Brasília
            e um acirramento político que culminaria na ruptura institucional.
            Compreender essa fase é essencial para entender tanto o populismo
            quanto as contradições do desenvolvimento brasileiro.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Abertura Política</span>
        <h2>1. A Redemocratização de 1945</h2>
        <p>
          Em outubro de 1945, o Estado Novo chegou ao fim sem disparar um tiro.
          Uma conjunção de forças — a vitória dos Aliados na Segunda Guerra
          (tornando insustentável a retórica autoritária de Vargas), o movimento
          <strong> Queremista</strong> ("Queremos Getúlio!") que paradoxalmente
          assustou os militares ao sugerir uma Assembleia Constituinte com Vargas
          no poder, e a pressão de generais como Góis Monteiro — levou à
          deposição de Vargas em <strong>29 de outubro de 1945</strong>.
        </p>
        <p>
          O general Eurico Gaspar Dutra, ex-ministro da Guerra de Vargas, saiu
          vitorioso nas eleições de dezembro de 1945 com apoio do PSD e do PTB
          (ambos criados pelo próprio Vargas). Ao mesmo tempo, os brasileiros
          elegeram uma Assembleia Constituinte que produziria a Constituição de
          1946.
        </p>
        <div className="lesson-highlight">
          <strong>O paradoxo varguista:</strong> ao cair, Vargas deixou como
          herança os dois maiores partidos do período democrático (PSD e PTB) e
          uma legislação trabalhista que moldaria toda a política de massas
          subsequente.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Constituição</span>
        <h2>2. A Constituição de 1946</h2>
        <p>
          Promulgada em <strong>18 de setembro de 1946</strong>, a Constituição
          representou um avanço democrático significativo em relação ao Estado
          Novo, mas preservou muitas estruturas varguistas — especialmente a
          Consolidação das Leis do Trabalho (CLT) e o sindicalismo corporativo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Constituição de 1937 (Estado Novo)</th>
                <th>Constituição de 1946</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Regime</td>
                <td>Ditadura / Estado Corporativo</td>
                <td>República Democrática Liberal</td>
              </tr>
              <tr>
                <td>Eleições</td>
                <td>Supressas / indiretas</td>
                <td>Diretas, secretas, universais (exceto analfabetos)</td>
              </tr>
              <tr>
                <td>Direitos políticos</td>
                <td>Suspensos</td>
                <td>Partidos permitidos (exceto PCB após 1947)</td>
              </tr>
              <tr>
                <td>Imprensa</td>
                <td>Censura pelo DIP</td>
                <td>Liberdade de imprensa garantida</td>
              </tr>
              <tr>
                <td>Direitos trabalhistas</td>
                <td>CLT (1943) — controle do Estado</td>
                <td>Mantidos e ampliados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Uma limitação importante: <strong>analfabetos não votavam</strong>,
          excluindo cerca de 50% da população adulta. O voto ainda era negado a
          praças das Forças Armadas.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Governo Dutra</span>
        <h2>3. Governo Dutra (1946–1950)</h2>
        <p>
          O governo Dutra foi marcado por um forte alinhamento com os Estados
          Unidos num contexto de início da Guerra Fria. O presidente adotou
          posturas conservadoras tanto na política externa quanto interna.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🇺🇸</span>
            <h3>Alinhamento com os EUA</h3>
            <p>
              Brasil rompeu relações com a URSS (1947), fechou cassinos e tentou
              liberalizar a economia com abertura às importações, exaurindo as
              reservas cambiais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Cassação do PCB (1947)</h3>
            <p>
              O Partido Comunista Brasileiro, que havia obtido 14% nas eleições
              de 1945 e elegido 14 deputados federais, foi cassado em maio de
              1947, e seus representantes perderam os mandatos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Plano SALTE</h3>
            <p>
              Primeiro plano econômico formal: focado em Saúde, Alimentação,
              Transporte e Energia. Execução parcial por falta de recursos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Inflação</h3>
            <p>
              A liberalização das importações gerou déficit comercial e
              pressões inflacionárias. A política econômica foi revertida
              para um protecionismo moderado ao final do governo.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Retorno Vargas</span>
        <h2>4. O Segundo Governo Vargas (1950–1954)</h2>
        <p>
          Em 1950, Vargas voltou pelo voto — e não pelas armas. Eleito com
          48,7% dos votos válidos, o "pai dos pobres" assumiu a presidência com
          um projeto <strong>nacional-desenvolvimentista</strong>: industrializar
          o Brasil com protagonismo do Estado, protegendo recursos estratégicos
          da exploração estrangeira.
        </p>

        <div className="lesson-highlight">
          <strong>"O petróleo é nosso!"</strong> — A campanha que mobilizou
          estudantes, militares e a opinião pública levou à criação da
          <strong> Petrobras em 3 de outubro de 1953</strong>, com monopólio
          estatal sobre a extração e refino do petróleo. Foi o maior legado
          econômico desse governo.
        </div>

        <p>
          Mas o governo enfrentou crescente oposição. A UDN (União Democrática
          Nacional), liderada por Carlos Lacerda, atacava Vargas com acusações
          de corrupção e autoritarismo. Em agosto de 1954, um atentado a Lacerda
          na rua Toneleros — que matou o major-aviador Rubens Vaz — foi
          atribuído ao segurança pessoal de Vargas. A crise se tornou
          insuportável.
        </p>

        <p>
          Na madrugada de <strong>24 de agosto de 1954</strong>, Vargas escreveu
          sua <em>Carta Testamento</em> e se suicidou com um tiro no coração.
          A frase final ecoa até hoje: <em>"Saio da vida para entrar na
          história."</em> A morte de Vargas gerou comoção nacional e isolou
          temporariamente seus adversários políticos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Realização</th>
                <th>Ano</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Criação da Petrobras</td>
                <td>1953</td>
                <td>Monopólio estatal do petróleo — soberania energética</td>
              </tr>
              <tr>
                <td>Criação do BNDE</td>
                <td>1952</td>
                <td>Financiamento do desenvolvimento industrial</td>
              </tr>
              <tr>
                <td>Aumento do salário mínimo (100%)</td>
                <td>1954</td>
                <td>Gerou inflação, mas reforçou base trabalhista</td>
              </tr>
              <tr>
                <td>Suicídio de Vargas</td>
                <td>24/08/1954</td>
                <td>Crise política, "carta testamento", comoção nacional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1: Linha do Tempo dos Presidentes ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>5. Linha do Tempo — Presidentes da República Populista</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 820 300"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 820, height: "auto" }}
            aria-label="Linha do tempo dos presidentes da República Populista 1946-1964"
          >
            {/* Fundo */}
            <rect width="820" height="300" fill="#0f172a" rx="12" />

            {/* Linha central */}
            <line x1="30" y1="150" x2="790" y2="150" stroke="#334155" strokeWidth="3" />

            {/* Dutra 1946-1950 */}
            <rect x="30" y="120" width="120" height="60" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="90" y="143" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">Dutra</text>
            <text x="90" y="158" textAnchor="middle" fill="#64748b" fontSize="9">PSD</text>
            <text x="90" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9">1946–1950</text>

            {/* Vargas 1950-1954 */}
            <rect x="160" y="120" width="120" height="60" rx="6" fill="#3b1f1f" stroke="#ef4444" strokeWidth="1.5" />
            <text x="220" y="143" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">Vargas</text>
            <text x="220" y="158" textAnchor="middle" fill="#64748b" fontSize="9">PTB</text>
            <text x="220" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9">1950–1954†</text>

            {/* Café Filho 1954-1955 */}
            <rect x="290" y="120" width="100" height="60" rx="6" fill="#1c2a1c" stroke="#22c55e" strokeWidth="1.5" />
            <text x="340" y="143" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">Café Filho</text>
            <text x="340" y="158" textAnchor="middle" fill="#64748b" fontSize="9">PSP</text>
            <text x="340" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9">1954–55</text>

            {/* JK 1956-1961 */}
            <rect x="400" y="110" width="130" height="80" rx="6" fill="#1f2937" stroke="#f59e0b" strokeWidth="2" />
            <text x="465" y="137" textAnchor="middle" fill="#fcd34d" fontSize="11" fontWeight="bold">JK</text>
            <text x="465" y="153" textAnchor="middle" fill="#fcd34d" fontSize="9">50 anos em 5</text>
            <text x="465" y="167" textAnchor="middle" fill="#64748b" fontSize="9">PSD</text>
            <text x="465" y="180" textAnchor="middle" fill="#94a3b8" fontSize="9">1956–1961</text>

            {/* Jânio 1961 */}
            <rect x="540" y="120" width="90" height="60" rx="6" fill="#1c1c2e" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="585" y="143" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="bold">Jânio</text>
            <text x="585" y="158" textAnchor="middle" fill="#64748b" fontSize="9">PTN</text>
            <text x="585" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9">1961 (7m)</text>

            {/* Jango 1961-1964 */}
            <rect x="640" y="120" width="140" height="60" rx="6" fill="#1a1a1a" stroke="#f97316" strokeWidth="1.5" />
            <text x="710" y="143" textAnchor="middle" fill="#fdba74" fontSize="11" fontWeight="bold">João Goulart</text>
            <text x="710" y="158" textAnchor="middle" fill="#64748b" fontSize="9">PTB</text>
            <text x="710" y="171" textAnchor="middle" fill="#94a3b8" fontSize="9">1961–1964</text>

            {/* Setas / marcadores */}
            <circle cx="90" cy="150" r="4" fill="#3b82f6" />
            <circle cx="220" cy="150" r="4" fill="#ef4444" />
            <circle cx="340" cy="150" r="4" fill="#22c55e" />
            <circle cx="465" cy="150" r="4" fill="#f59e0b" />
            <circle cx="585" cy="150" r="4" fill="#a78bfa" />
            <circle cx="710" cy="150" r="4" fill="#f97316" />

            {/* Título */}
            <text x="410" y="25" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Presidentes da República Populista (1946–1964)
            </text>

            {/* Legenda golpe */}
            <text x="780" y="265" textAnchor="end" fill="#ef4444" fontSize="10">
              ← Golpe Militar (01/04/1964)
            </text>
            <line x1="780" y1="268" x2="785" y2="268" stroke="#ef4444" strokeWidth="1.5" />
          </svg>
          <figcaption>
            Sucessão presidencial na República Populista — partidos e durações dos mandatos.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimentismo</span>
        <h2>6. JK e os "50 Anos em 5"</h2>
        <p>
          Juscelino Kubitschek tomou posse em janeiro de 1956 após uma crise
          política: a UDN tentou impedir sua posse alegando que não havia obtido
          maioria absoluta. O general Henrique Teixeira Lott deu um
          <strong> contragolpe preventivo</strong> em novembro de 1955, afastando
          o presidente interino Carlos Luz e garantindo a posse de JK.
        </p>
        <p>
          O governo JK foi o mais dinâmico do período. Seu <strong>Plano de
          Metas</strong> (1956–1961) previa investimentos em 5 setores com 30
          metas específicas, financiados com capital externo e emissão monetária.
          A "meta-síntese" era a construção de <strong>Brasília</strong>,
          inaugurada em <strong>21 de abril de 1960</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Setor do Plano de Metas</th>
                <th>Exemplos de Realizações</th>
                <th>% do Investimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energia</td>
                <td>Usina de Furnas, expansão da rede elétrica</td>
                <td>43%</td>
              </tr>
              <tr>
                <td>Transporte</td>
                <td>18.000 km de estradas, Rodovia Belém-Brasília</td>
                <td>29%</td>
              </tr>
              <tr>
                <td>Indústria de base</td>
                <td>Ford, GM, VW, Mercedes no ABC paulista; siderurgia</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td>Armazéns e silos; pouco investido</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Educação ("chave do arco")</td>
                <td>Ensino técnico; universidades; pouco investido</td>
                <td>3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O custo foi alto: a inflação saltou de 7% ao ano em 1956 para 39% em
          1960, e a dívida externa cresceu significativamente. O debate sobre
          <em>soberania vs. modernização</em> marcou o período — o capital
          estrangeiro impulsionou a indústria, mas com lucros remetidos ao
          exterior.
        </p>

        <div className="lesson-highlight">
          <strong>Brasília:</strong> projetada pelo urbanista Lúcio Costa
          (Plano Piloto) e com os edifícios monumentais de Oscar Niemeyer,
          a nova capital simbolizava o Brasil moderno, voltado para o interior.
          Foi construída em 41 meses por operários chamados de
          <em> candangos</em>.
        </div>
      </section>

      {/* ── SVG 2: Gráfico Plano de Metas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infográfico</span>
        <h2>7. Plano de Metas — Setores e Investimentos (JK)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 700, height: "auto" }}
            aria-label="Gráfico do Plano de Metas de JK por setor"
          >
            <rect width="700" height="320" fill="#0f172a" rx="12" />

            {/* Título */}
            <text x="350" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Plano de Metas JK — Distribuição do Investimento
            </text>

            {/* Eixo Y */}
            <line x1="80" y1="50" x2="80" y2="250" stroke="#334155" strokeWidth="1.5" />
            {/* Eixo X */}
            <line x1="80" y1="250" x2="670" y2="250" stroke="#334155" strokeWidth="1.5" />

            {/* Barra Energia 43% */}
            <rect x="100" y="90" width="100" height="160" fill="#f59e0b" rx="4" />
            <text x="150" y="83" textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="bold">43%</text>
            <text x="150" y="268" textAnchor="middle" fill="#94a3b8" fontSize="10">Energia</text>

            {/* Barra Transporte 29% */}
            <rect x="220" y="142" width="100" height="108" fill="#3b82f6" rx="4" />
            <text x="270" y="135" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold">29%</text>
            <text x="270" y="268" textAnchor="middle" fill="#94a3b8" fontSize="10">Transporte</text>

            {/* Barra Indústria 20% */}
            <rect x="340" y="175" width="100" height="75" fill="#22c55e" rx="4" />
            <text x="390" y="168" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="bold">20%</text>
            <text x="390" y="268" textAnchor="middle" fill="#94a3b8" fontSize="10">Indústria</text>

            {/* Barra Alimentação 5% */}
            <rect x="460" y="231" width="100" height="19" fill="#f97316" rx="4" />
            <text x="510" y="224" textAnchor="middle" fill="#fdba74" fontSize="12" fontWeight="bold">5%</text>
            <text x="510" y="268" textAnchor="middle" fill="#94a3b8" fontSize="10">Alimentação</text>

            {/* Barra Educação 3% */}
            <rect x="570" y="239" width="80" height="11" fill="#a78bfa" rx="4" />
            <text x="610" y="232" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">3%</text>
            <text x="610" y="268" textAnchor="middle" fill="#94a3b8" fontSize="10">Educação</text>

            {/* Marcas Y */}
            <text x="72" y="255" textAnchor="end" fill="#64748b" fontSize="9">0%</text>
            <text x="72" y="180" textAnchor="end" fill="#64748b" fontSize="9">20%</text>
            <text x="72" y="120" textAnchor="end" fill="#64748b" fontSize="9">35%</text>
            <line x1="78" y1="180" x2="82" y2="180" stroke="#334155" strokeWidth="1" />
            <line x1="78" y1="120" x2="82" y2="120" stroke="#334155" strokeWidth="1" />

            {/* Nota */}
            <text x="350" y="300" textAnchor="middle" fill="#64748b" fontSize="9">
              Nota: setores do Plano de Metas (1956–1961). Brasília era a "meta-síntese".
            </text>
          </svg>
          <figcaption>
            Distribuição aproximada dos investimentos do Plano de Metas por setor — governo JK.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crise Política</span>
        <h2>8. Jânio Quadros e a Renuncia de 1961</h2>
        <p>
          Eleito em outubro de 1960 com a maior votação até então na história
          brasileira (48%), Jânio Quadros prometia "limpar a corrupção" com sua
          famosa <strong>vassoura</strong>, símbolo de campanha. Governou apenas
          7 meses.
        </p>
        <p>
          Jânio adotou uma <strong>política externa independente</strong>: manteve
          relações com Cuba revolucionária, recebeu Che Guevara e o condecorou
          com a Grã-Cruz da Ordem do Cruzeiro do Sul — atitude que escandalizou
          a UDN e os militares. Em <strong>25 de agosto de 1961</strong>, renunciou
          alegando "forças ocultas" que dificultavam seu governo. Seu cálculo
          político era errado: esperava que o Congresso rejeitasse a renúncia
          e lhe desse poderes excepcionais. O Congresso aceitou a renúncia.
        </p>
        <p>
          A renúncia abriu uma crise constitucional: o vice-presidente
          <strong> João Goulart (Jango)</strong> — do PTB, ligado ao trabalhismo
          varguista — estava na China em missão diplomática. Os ministros
          militares (guerra, marinha e aeronáutica) vetaram a posse de Jango,
          considerando-o uma ameaça comunista.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Parlamentarismo</span>
        <h2>9. João Goulart e as Reformas de Base (1961–1964)</h2>
        <p>
          A solução para a crise foi um acordo político: a{" "}
          <strong>Emenda Constitucional nº 4 (setembro de 1961)</strong> instituiu
          o parlamentarismo — Jango assumiria a presidência, mas com poderes
          reduzidos, compartilhando o governo com um Primeiro-Ministro aprovado
          pelo Congresso. Em <strong>6 de janeiro de 1963</strong>, um plebiscito
          restituiu o presidencialismo, com 82% dos votos.
        </p>
        <p>
          Com poderes plenos, Jango lançou seu projeto das{" "}
          <strong>Reformas de Base</strong>: um conjunto de mudanças estruturais
          que incluíam reforma agrária (desapropriação de latifúndios
          improdutivos), reforma urbana, reforma tributária, reforma universitária
          e a encampação de refinarias estrangeiras.
        </p>
        <p>
          No <strong>Comício da Central (13 de março de 1964)</strong>, diante
          de 300.000 pessoas no Rio de Janeiro, Jango assinou decretos de
          desapropriação de terras e estatização de refinarias — polarizando
          definitivamente o país entre apoiadores e opositores das reformas.
        </p>
        <div className="lesson-highlight">
          <strong>A "Marcha da Família com Deus pela Liberdade"</strong>{" "}
          (19/03/1964, São Paulo) reuniu centenas de milhares de pessoas
          contra as reformas, mostrando que havia uma ampla base social
          conservadora mobilizada.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ruptura</span>
        <h2>10. O Golpe de 1964 no Contexto da Guerra Fria</h2>
        <p>
          O golpe de 1º de abril de 1964 não foi uma ação militar espontânea.
          Foi o resultado de uma conspiração articulada há meses, com apoio civil
          e envolvimento dos Estados Unidos, determinados a evitar "outra Cuba"
          na América Latina após a Revolução Cubana de 1959 e a deposição do
          governo Arbenz na Guatemala (1954).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Setor</th>
                <th>Atores</th>
                <th>Papel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Militares</td>
                <td>General Castello Branco, Costa e Silva</td>
                <td>Lideraram o movimento e tomaram o poder</td>
              </tr>
              <tr>
                <td>Políticos civis</td>
                <td>Carlos Lacerda, Adhemar de Barros (governadores)</td>
                <td>Apoio político e legitimidade civil ao golpe</td>
              </tr>
              <tr>
                <td>Empresariado</td>
                <td>IPES (Instituto Pesq. e Estudos Sociais)</td>
                <td>Financiamento, propaganda anticomunista (IBAD)</td>
              </tr>
              <tr>
                <td>Imprensa</td>
                <td>O Globo, O Estado de S. Paulo, Jornal do Brasil</td>
                <td>Editoriais favoráveis; enquadramento como "Revolução"</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>Embaixador Lincoln Gordon, CIA</td>
                <td>Reconhecimento imediato; "Operação Brother Sam" em standby</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Na madrugada do dia 1º de abril, o general Olímpio Mourão Filho
          movimentou tropas em Minas Gerais. Jango, sem apoio militar suficiente,
          partiu para o Rio Grande do Sul e depois para o exílio no Uruguai.
          O período democrático de 18 anos chegava ao fim.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A Constituição de 1946 restaurou as liberdades democráticas no Brasil, mas manteve uma exclusão importante em relação ao sufrágio. Qual era essa exclusão e como ela impactava a representatividade política?</p>}
          options={[
            { letter: "a", text: "Mulheres não podiam votar, excluindo metade da população adulta do processo eleitoral." },
            { letter: "b", text: "Analfabetos não tinham direito ao voto, o que excluía cerca de 50% da população adulta, concentrada nas camadas mais pobres.", correct: true },
            { letter: "c", text: "Trabalhadores rurais não podiam votar, pois a CLT não se aplicava ao campo." },
            { letter: "d", text: "Militares de baixa patente tinham o voto suspenso por questões de hierarquia." },
          ]}
          resolution={<p>A Constituição de 1946, apesar de democrática, manteve a exclusão dos analfabetos do direito ao voto — uma restrição que afetava aproximadamente metade da população adulta brasileira, especialmente os mais pobres e os trabalhadores rurais do interior. Essa exclusão limitava a representatividade e tornava o sistema político um 'populismo' que dialogava com as massas sem incluí-las plenamente no processo eleitoral. O voto universal pleno, incluindo analfabetos, só viria com a Constituição de 1988.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>O segundo governo Vargas (1950–1954) adotou uma postura nacional-desenvolvimentista. Qual das seguintes afirmativas melhor descreve as tensões que levaram ao suicídio de Vargas em agosto de 1954?</p>}
          options={[
            { letter: "a", text: "Vargas perdeu o apoio popular após a criação da Petrobras, vista como medida socialista." },
            { letter: "b", text: "A crise envolveu acusações de corrupção, o atentado da rua Toneleros e pressão militar para renúncia — contexto em que Vargas optou pelo suicídio como gesto político.", correct: true },
            { letter: "c", text: "Vargas foi deposto por golpe militar após tentar dissolver o Congresso Nacional." },
            { letter: "d", text: "A UDN obteve maioria no Congresso e aprovou o impedimento de Vargas por crime de responsabilidade." },
          ]}
          resolution={<p>A crise de 1954 foi multifacetada: o atentado contra Lacerda na rua Toneleros (agosto de 1954), atribuído a integrantes da guarda pessoal de Vargas, deu ao oposicionismo a munição política que precisava. Os generais exigiram a renúncia. Vargas, recusando o exílio e a humilhação política, escreveu a 'Carta Testamento' e se suicidou na madrugada de 24 de agosto — transformando sua morte num ato político que isolou temporariamente seus adversários e comoveu a nação.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>O historiador Francisco Weffort cunhou o conceito de 'populismo' para explicar a política brasileira de 1945 a 1964. Com base nesse conceito e no contexto histórico, analise: em que medida o parlamentarismo imposto a João Goulart em 1961 representou uma solução conservadora para a crise constitucional?</p>}
          options={[
            { letter: "a", text: "O parlamentarismo foi uma solução progressista, pois aumentou os poderes do Congresso e limitou o presidencialismo excessivo." },
            { letter: "b", text: "O parlamentarismo foi uma solução conservadora porque esvaziou os poderes de um presidente eleito indiretamente, evitando reformas estruturais." },
            { letter: "c", text: "O parlamentarismo foi uma solução conservadora porque reduziu os poderes executivos de um presidente com mandato popular, como forma de bloquear reformas que ameaçavam interesses estabelecidos, sem recorrer abertamente ao golpe.", correct: true },
            { letter: "d", text: "O parlamentarismo foi uma medida revolucionária, pois transferiu o poder para o povo por meio do Congresso." },
          ]}
          resolution={<p>A Emenda Constitucional nº 4 de 1961 é um caso exemplar de solução conservadora disfarçada de compromisso constitucional. Ao transformar o Brasil num sistema parlamentarista sem transição planejada, os opositores de Jango conseguiram que ele assumisse a presidência sem poderes efetivos — impedindo que implementasse as Reformas de Base. Era uma forma de bloquear politicamente alguém que havia sido eleito vice-presidente com amplo apoio trabalhista, sem precisar recorrer ao golpe aberto. O plebiscito de 1963 (82% pelo presidencialismo) mostrou que a população entendia o parlamentarismo como ilegítimo.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) Em março de 1964, João Goulart assinou decretos de encampação de refinarias e de desapropriação de terras durante o 'Comício da Central'. Dias depois, grupos conservadores realizaram a 'Marcha da Família com Deus pela Liberdade'. Sobre esse contexto, é correto afirmar:</p>}
          options={[
            { letter: "a", text: "As reformas de Goulart tinham apoio unânime das Forças Armadas, que apenas discordavam do ritmo de implementação." },
            { letter: "b", text: "A polarização política de 1964 se inseria no contexto da Guerra Fria, com o bloco conservador temendo que o Brasil seguisse o caminho de Cuba, e o governo propondo reformas estruturais com apoio das massas urbanas.", correct: true },
            { letter: "c", text: "A Marcha da Família foi organizada exclusivamente pelo Partido Comunista Brasileiro como provocação à UDN." },
            { letter: "d", text: "Os EUA permaneceram neutros nos eventos de 1964, respeitando a soberania brasileira." },
          ]}
          resolution={<p>O Brasil de 1964 era um microcosmo da Guerra Fria. Num lado, Goulart e suas Reformas de Base mobilizavam trabalhadores, sindicatos e estudantes; no outro, a UDN, os militares, o empresariado e o governo americano temiam uma 'cubanização' do Brasil. A 'Marcha da Família' foi organizada por grupos civis conservadores (especialmente pela Igreja Católica e setores da elite) como demonstração de força popular contrária às reformas. Os EUA tinham planos de intervenção (Operação Brother Sam) e reconheceram o novo governo horas após o golpe — qualquer ideia de neutralidade americana é historiograficamente insustentável.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Vestibular FUVEST adaptado) 'O petróleo é nosso!' foi o slogan de uma campanha que resultou na criação da Petrobras em 1953. Essa campanha e a fundação da estatal revelam, no contexto do segundo governo Vargas, qual visão de desenvolvimento econômico?</p>}
          options={[
            { letter: "a", text: "Uma visão liberal, favorável à entrada irrestrita de capital estrangeiro no setor de energia." },
            { letter: "b", text: "Uma visão nacional-desenvolvimentista, que defendia o controle estatal sobre recursos estratégicos como forma de garantir a soberania e financiar a industrialização.", correct: true },
            { letter: "c", text: "Uma visão socialista, que propunha a estatização de todos os setores da economia seguindo o modelo soviético." },
            { letter: "d", text: "Uma visão regionalista, que buscava descentralizar a exploração de petróleo para os estados produtores." },
          ]}
          resolution={<p>O nacional-desenvolvimentismo varguista defendia que o Estado deveria controlar os setores estratégicos da economia — como energia e infraestrutura — para garantir a soberania nacional e financiar a industrialização. A Petrobras (1953) é o exemplo mais acabado dessa visão: ao estabelecer o monopólio estatal sobre extração e refino do petróleo, Vargas impedia que multinacionais estrangeiras controlassem um recurso fundamental para o desenvolvimento industrial. Essa postura diferia tanto do liberalismo (que aceitaria o capital estrangeiro) quanto do socialismo (que proporia estatizações muito mais amplas).</p>}
        />
      </section>
    </article>
  );
}
