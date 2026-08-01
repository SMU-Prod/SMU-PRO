"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap46Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 46</span>
          <h1>Brasil Contemporâneo: Redemocratização, Constituição de 1988 e desafios atuais</h1>
          <p>
            O Brasil viveu entre 1979 e 1988 uma das mais profundas transições políticas de sua
            história: saiu de uma ditadura militar de 21 anos para um Estado Democrático de Direito
            consagrado na Constituição Cidadã. Desde então, o país passou por oito presidentes,
            dois impeachments, crises econômicas devastadoras e conquistas sociais notáveis. Entender
            esse percurso — da Lei da Anistia ao 8 de janeiro de 2023 — é fundamental para o ENEM
            e para a compreensão do Brasil em que vivemos, com suas contradições, seus avanços
            e seus déficits democráticos ainda não superados.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">O Fim da Ditadura</span>
        <h2>1. A redemocratização brasileira (1979–1985)</h2>
        <p>
          A redemocratização brasileira foi um processo gradual, negociado e controlado pela
          elite política — diferentemente de rupturas abruptas como as revoluções. O general
          João Figueiredo (1979–1985) inaugurou a "abertura lenta, gradual e segura", uma
          estratégia dos próprios militares para controlar a transição e preservar seus interesses.
          A <strong>Lei da Anistia de 1979</strong> concedeu anistia "ampla, geral e irrestrita"
          — um termo que, paradoxalmente, abrangia tanto os perseguidos políticos (exilados,
          presos, cassados) quanto os agentes do Estado responsáveis por torturas e assassinatos.
          Esse aspecto da lei gerou um debate histórico que perdura até hoje: o Brasil é o único
          país do Cone Sul que nunca julgou seus torturadores.
        </p>
        <p>
          O retorno dos <strong>exilados</strong> — entre eles Leonel Brizola, Luís Inácio Lula
          da Silva, Miguel Arraes e outros líderes políticos — reanimou a vida partidária. As
          eleições estaduais de <strong>1982</strong> foram as primeiras diretas desde 1965 e
          resultaram em vitória expressiva do PMDB nos principais estados, sinalizando a perda
          de legitimidade do regime militar perante a população.
        </p>
        <p>
          A <strong>campanha das Diretas Já</strong> (1983–1984) foi o maior movimento de
          mobilização popular da história brasileira até então: comícios com milhões de pessoas
          em São Paulo, Rio de Janeiro, Belo Horizonte e outras cidades exigiam eleições diretas
          para presidente. A emenda Dante de Oliveira, que propunha eleições diretas, foi
          derrotada no Congresso Nacional por apenas 22 votos — faltou o quórum de dois terços
          necessário. A derrota forçou a oposição a disputar no Colégio Eleitoral (órgão
          indireto criado pela ditadura), onde <strong>Tancredo Neves</strong> (PMDB), com apoio
          da dissidência do PDS na "Aliança Democrática", derrotou Paulo Maluf em 15 de janeiro
          de 1985. Tancredo, porém, adoeceu gravemente e morreu em 21 de abril de 1985, nunca
          chegando a tomar posse. <strong>José Sarney</strong>, seu vice, assumiu a presidência.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 200" width="760" height="200" aria-label="Linha do tempo dos presidentes do Brasil de 1985 ao presente">
            <rect x="0" y="0" width="760" height="200" fill="#f0f4ff" rx="10"/>
            <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Presidentes do Brasil — 1985 ao presente</text>

            {/* Linha central */}
            <line x1="20" y1="75" x2="740" y2="75" stroke="#4361ee" strokeWidth="2"/>

            {/* Sarney */}
            <circle cx="50" cy="75" r="7" fill="#4361ee"/>
            <text x="50" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Sarney</text>
            <text x="50" y="48" textAnchor="middle" fontSize="7" fill="#555">1985–90</text>
            <text x="50" y="95" textAnchor="middle" fontSize="7" fill="#555">PMDB</text>

            {/* Collor */}
            <circle cx="145" cy="75" r="7" fill="#e63946"/>
            <text x="145" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Collor</text>
            <text x="145" y="48" textAnchor="middle" fontSize="7" fill="#555">1990–92</text>
            <text x="145" y="95" textAnchor="middle" fontSize="7" fill="#e63946">Impeachment</text>

            {/* Itamar */}
            <circle cx="225" cy="75" r="7" fill="#2d6a4f"/>
            <text x="225" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Itamar</text>
            <text x="225" y="48" textAnchor="middle" fontSize="7" fill="#555">1992–94</text>
            <text x="225" y="95" textAnchor="middle" fontSize="7" fill="#555">Plano Real</text>

            {/* FHC */}
            <circle cx="325" cy="75" r="7" fill="#023e8a"/>
            <text x="325" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">FHC</text>
            <text x="325" y="48" textAnchor="middle" fontSize="7" fill="#555">1995–2002</text>
            <text x="325" y="95" textAnchor="middle" fontSize="7" fill="#555">PSDB · 2 mandatos</text>

            {/* Lula I e II */}
            <circle cx="450" cy="75" r="7" fill="#e63946"/>
            <text x="450" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Lula</text>
            <text x="450" y="48" textAnchor="middle" fontSize="7" fill="#555">2003–2010</text>
            <text x="450" y="95" textAnchor="middle" fontSize="7" fill="#555">PT · 2 mandatos</text>

            {/* Dilma */}
            <circle cx="565" cy="75" r="7" fill="#e63946"/>
            <text x="565" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Dilma</text>
            <text x="565" y="48" textAnchor="middle" fontSize="7" fill="#555">2011–2016</text>
            <text x="565" y="95" textAnchor="middle" fontSize="7" fill="#e63946">Impeachment</text>

            {/* Temer */}
            <circle cx="625" cy="75" r="7" fill="#6a0572"/>
            <text x="625" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Temer</text>
            <text x="625" y="48" textAnchor="middle" fontSize="7" fill="#555">2016–18</text>
            <text x="625" y="95" textAnchor="middle" fontSize="7" fill="#555">MDB</text>

            {/* Bolsonaro */}
            <circle cx="675" cy="75" r="7" fill="#457b9d"/>
            <text x="675" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Bolsonaro</text>
            <text x="675" y="48" textAnchor="middle" fontSize="7" fill="#555">2019–22</text>
            <text x="675" y="95" textAnchor="middle" fontSize="7" fill="#555">PL</text>

            {/* Lula III */}
            <circle cx="730" cy="75" r="7" fill="#e63946"/>
            <text x="730" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a1a2e">Lula</text>
            <text x="730" y="48" textAnchor="middle" fontSize="7" fill="#555">2023–</text>
            <text x="730" y="95" textAnchor="middle" fontSize="7" fill="#555">PT</text>

            {/* Legenda */}
            <rect x="200" y="130" width="360" height="60" rx="6" fill="#fff" stroke="#ccc"/>
            <text x="380" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">Marcos da Linha do Tempo</text>
            <rect x="215" y="156" width="10" height="10" fill="#e63946"/>
            <text x="230" y="166" fontSize="9" fill="#333">Impeachment ou PT</text>
            <rect x="340" y="156" width="10" height="10" fill="#4361ee"/>
            <text x="355" y="166" fontSize="9" fill="#333">PMDB/MDB</text>
            <rect x="450" y="156" width="10" height="10" fill="#023e8a"/>
            <text x="465" y="166" fontSize="9" fill="#333">PSDB</text>
          </svg>
          <figcaption>Linha do tempo dos presidentes do Brasil de 1985 ao presente, com partidos e principais marcos de cada mandato.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">A Constituição Cidadã</span>
        <h2>2. A Constituição de 1988: direitos, conquistas e estrutura</h2>
        <p>
          A Constituição Federal de 1988, promulgada em 5 de outubro pelo presidente da
          Assembleia Constituinte, deputado Ulysses Guimarães, é o documento jurídico mais
          importante da história brasileira recente. Chamada de <strong>"Constituição
          Cidadã"</strong> por Ulysses Guimarães, ela resultou de um processo histórico de
          participação popular sem precedentes: mais de 70.000 emendas populares foram
          apresentadas, e o texto final, com 250 artigos e 98 disposições transitórias, é
          um dos mais longos e detalhados do mundo.
        </p>
        <p>
          O <strong>artigo 5º</strong> é o coração da Constituição: 78 incisos garantindo
          direitos fundamentais — dignidade da pessoa humana, igualdade perante a lei,
          liberdade de expressão e crença, inviolabilidade do domicílio e da correspondência,
          habeas corpus (impetrado por qualquer pessoa, inclusive em favor de si mesma),
          mandado de segurança, vedação expressa à tortura e ao tratamento degradante,
          direito ao contraditório e à ampla defesa. O racismo é definido como crime
          inafiançável e imprescritível.
        </p>
        <p>
          O <strong>artigo 6º</strong> lista os direitos sociais: educação, saúde, alimentação,
          trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à
          maternidade e à infância e assistência aos desamparados. O <strong>SUS</strong>
          (Sistema Único de Saúde), consagrado no artigo 196, tornou a saúde um direito
          universal e gratuito — uma conquista histórica que beneficia hoje mais de 150 milhões
          de brasileiros que não têm plano de saúde privado.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 300" width="760" height="300" aria-label="Diagrama em árvore dos principais direitos da Constituição de 1988">
            <rect x="0" y="0" width="760" height="300" fill="#f8f9fa" rx="10"/>
            <text x="380" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1a2e">Constituição de 1988 — Principais Direitos</text>

            {/* Raiz */}
            <rect x="290" y="38" width="180" height="42" rx="8" fill="#1a1a2e"/>
            <text x="380" y="56" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">CONSTITUIÇÃO FEDERAL</text>
            <text x="380" y="72" textAnchor="middle" fontSize="9" fill="#aaa">Promulgada em 05/10/1988</text>

            {/* Linhas */}
            <line x1="380" y1="80" x2="100" y2="120" stroke="#4361ee" strokeWidth="1.5"/>
            <line x1="380" y1="80" x2="270" y2="120" stroke="#3a0ca3" strokeWidth="1.5"/>
            <line x1="380" y1="80" x2="490" y2="120" stroke="#7209b7" strokeWidth="1.5"/>
            <line x1="380" y1="80" x2="660" y2="120" stroke="#f72585" strokeWidth="1.5"/>

            {/* Art. 5 */}
            <rect x="28" y="120" width="145" height="62" rx="7" fill="#4361ee"/>
            <text x="100" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Art. 5º</text>
            <text x="100" y="155" textAnchor="middle" fontSize="8" fill="#d0d8ff">Direitos individuais</text>
            <text x="100" y="167" textAnchor="middle" fontSize="8" fill="#d0d8ff">e coletivos</text>
            <text x="100" y="179" textAnchor="middle" fontSize="8" fill="#ccc">HC · liberdade · igualdade</text>

            {/* Art. 6 */}
            <rect x="198" y="120" width="145" height="62" rx="7" fill="#3a0ca3"/>
            <text x="270" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Art. 6º</text>
            <text x="270" y="155" textAnchor="middle" fontSize="8" fill="#c8c0ff">Direitos sociais</text>
            <text x="270" y="167" textAnchor="middle" fontSize="8" fill="#c8c0ff">Educação · saúde</text>
            <text x="270" y="179" textAnchor="middle" fontSize="8" fill="#c0b8ff">moradia · trabalho</text>

            {/* Art. 231 */}
            <rect x="418" y="120" width="145" height="62" rx="7" fill="#7209b7"/>
            <text x="490" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Art. 231</text>
            <text x="490" y="155" textAnchor="middle" fontSize="8" fill="#e0b0ff">Direitos indígenas</text>
            <text x="490" y="167" textAnchor="middle" fontSize="8" fill="#e0b0ff">Terras originalmente</text>
            <text x="490" y="179" textAnchor="middle" fontSize="8" fill="#e0b0ff">ocupadas · cultura</text>

            {/* Art. 225 */}
            <rect x="588" y="120" width="145" height="62" rx="7" fill="#f72585"/>
            <text x="660" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Art. 225</text>
            <text x="660" y="155" textAnchor="middle" fontSize="8" fill="#ffe0f0">Meio ambiente</text>
            <text x="660" y="167" textAnchor="middle" fontSize="8" fill="#ffe0f0">Direito difuso para</text>
            <text x="660" y="179" textAnchor="middle" fontSize="8" fill="#ffe0f0">presentes e futuros</text>

            {/* Linha inferior */}
            <line x1="380" y1="80" x2="380" y2="245" stroke="#b5179e" strokeWidth="1" strokeDasharray="4,3"/>

            {/* SUS / Previdência */}
            <rect x="190" y="245" width="380" height="44" rx="7" fill="#b5179e"/>
            <text x="380" y="263" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">SUS (Art. 196) · Previdência Social · Educação Pública (Art. 205)</text>
            <text x="380" y="280" textAnchor="middle" fontSize="8" fill="#f8d0ff">Saúde universal e gratuita · Aposentadoria · Educação obrigatória e gratuita</text>
          </svg>
          <figcaption>Diagrama em árvore dos principais artigos da Constituição de 1988 e os direitos que consagram — dos direitos individuais ao meio ambiente.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artigo / Dispositivo</th>
                <th>Conteúdo principal</th>
                <th>Significado histórico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Art. 5º</strong></td>
                <td>Direitos e garantias individuais (78 incisos)</td>
                <td>Vedação à tortura, habeas corpus amplo, igualdade perante a lei</td>
              </tr>
              <tr>
                <td><strong>Art. 6º</strong></td>
                <td>Direitos sociais</td>
                <td>Saúde, educação, moradia, trabalho — obrigações do Estado</td>
              </tr>
              <tr>
                <td><strong>Art. 196</strong></td>
                <td>Saúde como direito universal</td>
                <td>Criação do SUS — sistema público universal e gratuito</td>
              </tr>
              <tr>
                <td><strong>Art. 205</strong></td>
                <td>Educação como direito de todos</td>
                <td>Ensino fundamental obrigatório e gratuito; expansão posterior</td>
              </tr>
              <tr>
                <td><strong>Art. 231</strong></td>
                <td>Direitos dos povos indígenas</td>
                <td>Terras "originariamente ocupadas", língua, costumes, demarcação</td>
              </tr>
              <tr>
                <td><strong>Art. 68 (ADCT)</strong></td>
                <td>Direitos quilombolas</td>
                <td>Titulação das terras das comunidades remanescentes de quilombos</td>
              </tr>
              <tr>
                <td><strong>Art. 225</strong></td>
                <td>Meio ambiente como direito difuso</td>
                <td>Dever do Estado e da sociedade de preservar para gerações futuras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">A Era Sarney e Collor</span>
        <h2>3. Sarney, hiperinflação e o governo Collor (1985–1992)</h2>
        <p>
          O governo <strong>José Sarney</strong> (1985–1990) foi marcado pela crise econômica
          herdada da ditadura — uma dívida externa monumental e uma inflação crescente. O
          <strong> Plano Cruzado</strong> (1986) foi a tentativa mais ambiciosa de estabilização:
          criou uma nova moeda (o cruzado), congelou preços e salários e produziu uma euforia
          consumista inicial. A inflação caiu de 250% para quase zero em poucos meses, e o
          PMDB ganhou as eleições estaduais de 1986 em todos os estados. Mas o congelamento
          artificial gerou escassez, ágio e desequilíbrio fiscal — o plano fracassou em menos
          de um ano. Vieram o Plano Bresser (1987) e o Plano Verão (1989), igualmente
          malsucedidos. A inflação chegou a 80% ao mês em 1989.
        </p>
        <p>
          <strong>Fernando Collor de Mello</strong> foi o primeiro presidente eleito diretamente
          pelo voto popular desde 1960. Derrotando Lula no segundo turno em 1989, Collor
          apresentou-se como um jovem político do interior de Alagoas capaz de "caçar marajás"
          (servidores públicos com altos salários). Seu <strong>Plano Collor</strong> (1990)
          foi o mais radical da história econômica brasileira: confiscou as poupanças dos
          brasileiros — bloqueando 80% dos depósitos em cadernetas de poupança e contas
          correntes — para reduzir a liquidez da economia e combater a inflação. O confisco
          provocou falências de pequenas empresas e causou enorme sofrimento popular.
        </p>
        <p>
          O governo Collor encerrou-se precocemente: denúncias de corrupção envolvendo seu
          tesoureiro Paulo César Farias (PC Farias) levaram à abertura de uma CPI e,
          posteriormente, ao processo de <strong>impeachment</strong>, o primeiro da história
          brasileira. Collor renunciou em 29 de dezembro de 1992, horas antes de ser cassado,
          e <strong>Itamar Franco</strong> assumiu a presidência.
        </p>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Estabilização Econômica</span>
        <h2>4. O Plano Real e os governos FHC (1994–2002)</h2>
        <p>
          O maior legado econômico do governo <strong>Itamar Franco</strong> foi o
          <strong> Plano Real</strong>, lançado em julho de 1994 sob a coordenação do ministro
          da Fazenda <strong>Fernando Henrique Cardoso</strong>. Diferentemente dos planos
          anteriores, o Real não congelou preços: criou um índice intermediário (a URV —
          Unidade Real de Valor) que reequilibrou os preços relativos antes da introdução da
          nova moeda, o Real. Além disso, foi acompanhado de âncora cambial (o Real atrelado
          ao dólar) e abertura comercial que conteve a inflação por meio da concorrência externa.
          O plano funcionou: a inflação caiu de mais de 5.000% ao ano em 1993 para menos de
          10% em 1995. Trinta anos de inflação crônica chegaram ao fim.
        </p>
        <p>
          FHC elegeu-se presidente em outubro de 1994, ainda como ministro, e governou por
          dois mandatos (1995–2002). Seu governo foi marcado pelas <strong>privatizações</strong>
          — Telebrás, Vale do Rio Doce, Embraer, CSN, Companhia Siderúrgica, bancos estaduais —
          pela <strong>Lei de Responsabilidade Fiscal</strong> (2000), pela renegociação da
          dívida externa e pelas reformas da previdência e educacional (LDB/1996).
        </p>
        <p>
          O segundo mandato de FHC foi turbulento: a <strong>desvalorização do Real</strong>
          em janeiro de 1999 (abandonou-se a âncora cambial em crise) elevou a dívida pública,
          o apagão energético de 2001 (crise hídrica) impôs racionamento de eletricidade e
          a crise argentina de 2001–2002 contaminou o Brasil. FHC entregou o governo em
          recessão e com o câmbio descontrolado.
        </p>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Ascensão Social e Política Externa</span>
        <h2>5. Os governos Lula (2003–2010): redistribuição e protagonismo global</h2>
        <p>
          A eleição de <strong>Luís Inácio Lula da Silva</strong> em outubro de 2002 foi um
          marco histórico: o primeiro presidente operário do Brasil, ex-torneiro mecânico e
          líder sindical que fundara o Partido dos Trabalhadores (PT) em 1980. Sua eleição
          provocou inquietação nos mercados financeiros, mas a "<strong>Carta ao Povo
          Brasileiro</strong>" — em que comprometia manter a âncora macroeconômica do governo
          anterior — sinalizou continuidade econômica com inovação social.
        </p>
        <p>
          O maior programa social de Lula foi o <strong>Bolsa Família</strong> (2003), resultado
          da fusão de vários programas anteriores: uma transferência condicionada de renda para
          famílias pobres, vinculada ao cumprimento de contrapartidas em saúde e educação.
          No auge do programa, beneficiou mais de 14 milhões de famílias e tornou-se o maior
          programa de transferência de renda do mundo, estudado e reproduzido em dezenas de países.
          Combinado com o <strong>aumento real do salário mínimo</strong> (que cresceu mais de
          70% acima da inflação entre 2003 e 2010) e com a expansão do crédito, o programa
          contribuiu para a saída de mais de 30 milhões de brasileiros da pobreza extrema e
          para a emergência de uma nova classe média — a chamada "nova classe C".
        </p>
        <p>
          Na educação, os governos Lula expandiram massivamente as universidades federais
          (programa REUNI: novas vagas, novos campi), criaram o ProUni (bolsas em universidades
          privadas) e o FIES (financiamento estudantil). Na política externa, o Brasil adotou
          uma postura ativa e "Sul-Sul": liderança nos BRICS, protagonismo no Mercosul e nas
          relações com a África, participação nas missões de paz da ONU. O país tornou-se ator
          relevante nas negociações climáticas e comerciais globais.
        </p>

        <div className="lesson-highlight">
          <h3>O Mensalão (2005) e seus impactos políticos</h3>
          <p>
            Em 2005, uma crise de grandes proporções abalou o governo Lula: o escândalo do
            "mensalão", um esquema de pagamento de mesadas a parlamentares em troca de apoio
            ao governo, veio à tona. Vários assessores e aliados do PT foram indiciados.
            Lula sobreviveu politicamente — aprovado por mais de 60% da população ao final do
            segundo mandato — mas o PT sofreu danos institucionais graves e o escândalo
            alimentou um crescente ambiente de desconfiança institucional que se aprofundaria
            na década seguinte.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Dilma, Lava Jato e Impeachment</span>
        <h2>6. Os governos Dilma (2011–2016): crise e impeachment</h2>
        <p>
          <strong>Dilma Rousseff</strong> — ex-ministra da Casa Civil de Lula, ex-guerrilheira
          que enfrentou tortura durante a ditadura — foi eleita em 2010 como a primeira mulher
          presidente do Brasil. Seu primeiro mandato foi marcado pela tentativa de uma "Nova
          Matriz Econômica": desonerações fiscais para a indústria, redução das tarifas de
          energia, contenção das taxas de juros pelo Banco Central e intervencionismo seletivo
          no mercado. A estratégia foi amplamente criticada como heterodoxa e ineficiente.
        </p>
        <p>
          A queda dos preços das commodities (petróleo, soja, minério de ferro) a partir de
          2012–2013, combinada com o esgotamento do modelo de transferência de renda sem
          aumento de produtividade, mergulhou o Brasil em recessão. Simultaneamente, a
          <strong> Operação Lava Jato</strong> (2014), investigação do Ministério Público
          Federal e da Polícia Federal que descobriu um esquema gigantesco de corrupção na
          Petrobras, envolveu empreiteiras, partidos políticos e executivos — e impactou
          profundamente a confiança pública nas instituições.
        </p>
        <p>
          As <strong>manifestações de junho de 2013</strong> — iniciadas contra o aumento
          das passagens de ônibus, mas que cresceram para abraçar demandas difusas contra
          a corrupção, pelo transporte público de qualidade, por saúde e educação — foram
          as maiores mobilizações de rua do Brasil desde as Diretas Já. O processo de
          <strong> impeachment</strong> de Dilma foi aprovado pelo Senado em agosto de 2016,
          com base na acusação de "pedaladas fiscais" (manobras contábeis no orçamento).
          O debate sobre a regularidade do processo permanece: para seus defensores, foi
          um golpe parlamentar; para seus críticos, foi um impeachment legítimo diante do
          descumprimento da lei de responsabilidade fiscal.
        </p>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Reformas e Polarização</span>
        <h2>7. Temer, Bolsonaro e os desafios democráticos (2016–2022)</h2>
        <p>
          <strong>Michel Temer</strong> (MDB), que assumiu após o impeachment de Dilma,
          governou em meio a alta impopularidade e dennúncias de corrupção. Seu legado é
          controvertido: aprovou a <strong>PEC do Teto de Gastos</strong> (Emenda Constitucional
          95/2016), que congelou os gastos públicos federais por 20 anos em termos reais — uma
          das medidas mais restritivas de política fiscal já adotadas no mundo — e a
          <strong> Reforma Trabalhista</strong> (2017), que flexibilizou amplamente as proteções
          da CLT, permitindo contratos de trabalho intermitente, negociação coletiva acima da
          lei e terceirização ampla.
        </p>
        <p>
          <strong>Jair Bolsonaro</strong> (PSL/PL), capitão reformado do Exército com discurso
          de extrema-direita, foi eleito em 2018 numa onda de rejeição ao PT e à classe
          política tradicional. Seu governo foi marcado pelo negacionismo ambiental — o
          desmatamento da Amazônia atingiu os maiores índices em 15 anos — e pelo negacionismo
          científico durante a pandemia de COVID-19 (2020–2022), que matou mais de 700.000
          brasileiros, uma das maiores mortalidades per capita do mundo. O confronto sistemático
          com o STF, com o Congresso e com o sistema eleitoral gerou sucessivas crises
          institucionais. Bolsonaro foi derrotado nas eleições de outubro de 2022 por Lula
          com diferença de 1,8 ponto percentual.
        </p>
        <p>
          O <strong>8 de janeiro de 2023</strong> marcou um dos piores ataques às instituições
          democráticas da história brasileira: apoiadores de Bolsonaro invadiram e depredaram
          o Congresso Nacional, o STF e o Palácio do Planalto em Brasília, exigindo uma
          intervenção militar que desfizesse o resultado das eleições. Os ataques foram
          rapidamente controlados e resultaram em centenas de processos judiciais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Presidente</th>
                <th>Período</th>
                <th>Principal política social</th>
                <th>Principal tensão/crise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sarney</td>
                <td>1985–1990</td>
                <td>Assembleia Constituinte, direitos trabalhistas</td>
                <td>Hiperinflação, fracasso dos planos</td>
              </tr>
              <tr>
                <td>Collor</td>
                <td>1990–1992</td>
                <td>Abertura econômica</td>
                <td>Confisco da poupança, impeachment por corrupção</td>
              </tr>
              <tr>
                <td>Itamar / FHC</td>
                <td>1992–2002</td>
                <td>Plano Real, controle da inflação</td>
                <td>Privatizações contestadas, crise cambial 1999</td>
              </tr>
              <tr>
                <td>Lula</td>
                <td>2003–2010</td>
                <td>Bolsa Família, salário mínimo real, ProUni</td>
                <td>Mensalão (2005), crise financeira global (2008)</td>
              </tr>
              <tr>
                <td>Dilma</td>
                <td>2011–2016</td>
                <td>Expansão do Minha Casa Minha Vida</td>
                <td>Lava Jato, recessão, impeachment</td>
              </tr>
              <tr>
                <td>Temer</td>
                <td>2016–2018</td>
                <td>Reforma Trabalhista</td>
                <td>PEC do Teto, impopularidade extrema</td>
              </tr>
              <tr>
                <td>Bolsonaro</td>
                <td>2019–2022</td>
                <td>Auxílio Emergencial (COVID)</td>
                <td>Pandemia, desmatamento, 8 de janeiro</td>
              </tr>
              <tr>
                <td>Lula (3º mandato)</td>
                <td>2023–</td>
                <td>Bolsa Família ampliado, agenda social</td>
                <td>Dívida pública, consolidação fiscal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Direitos na Constituição</span>
        <h2>8. Direitos trabalhistas, indígenas e ambientais na CF/88</h2>
        <p>
          A Constituição de 1988 incorporou direitos trabalhistas que avançaram significativamente
          em relação à CLT de 1943: 13º salário constitucionalizado, FGTS obrigatório para todos
          os trabalhadores, licença-maternidade mínima de 120 dias, licença-paternidade, férias
          com adicional de um terço, limitação da jornada a 44 horas semanais, horas extras com
          adicional de 50% no mínimo, aviso prévio proporcional ao tempo de serviço. O
          movimento sindical teve seu papel reconhecido: o direito de greve foi ampliado e
          os sindicatos ganharam representação constitucional.
        </p>
        <p>
          Os <strong>direitos indígenas</strong> (Art. 231 e 232) representaram uma ruptura com
          o paradigma integracionista que dominou a política indigenista brasileira desde o
          Serviço de Proteção aos Índios (SPI, 1910): pela primeira vez, reconheceu-se que os
          povos indígenas têm o direito de <em>ser diferentes</em> — manter sua língua, seus
          costumes, sua organização social e suas crenças — sem que isso signifique uma condição
          transitória rumo à "civilização". As terras "originariamente ocupadas" são definidas
          como de usufruto exclusivo das comunidades indígenas, inalienáveis e
          indisponíveis.
        </p>
        <p>
          O <strong>artigo 225</strong> é pioneiro na proteção ambiental constitucional: define
          o meio ambiente ecologicamente equilibrado como "bem de uso comum do povo e essencial
          à sadia qualidade de vida", impondo ao Poder Público e à coletividade o dever de
          defendê-lo e preservá-lo para as gerações presentes e futuras. O conceito de
          desenvolvimento sustentável é implícito nesse artigo — que também foi a base
          constitucional para a criação do SISNAMA (Sistema Nacional de Meio Ambiente) e para
          legislações ambientais posteriores como o Código Florestal e a Lei da Mata Atlântica.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Democracia e Desafios</span>
        <h2>9. Democracia e desigualdade: os limites da Constituição Cidadã</h2>
        <p>
          A Constituição de 1988 é um documento avançado em termos de direitos formais, mas
          sua efetivação permanece incompleta após mais de três décadas. O Brasil é um dos
          países mais desiguais do mundo — o índice de Gini coloca o país entre os 10 mais
          desiguais do planeta. A herança da escravidão, da concentração fundiária e da exclusão
          histórica de negros, indígenas e pobres do acesso à terra, à educação e ao poder
          político não é superada por uma Constituição — por mais generosa que seja em seus
          direitos formais.
        </p>
        <p>
          O <strong>racismo estrutural</strong> persiste: negros e negras representam mais de
          80% das vítimas de homicídios dolosos, têm renda média 60% inferior à de brancos,
          são maioria entre os encarcerados e enfrentam barreiras sistemáticas de acesso à
          educação de qualidade, ao mercado formal de trabalho e à representação política.
          A reforma agrária, prometida pela Constituição, permanece incompleta: a concentração
          fundiária brasileira é uma das maiores do mundo, com o índice de Gini fundiário
          acima de 0,8.
        </p>
        <p>
          A democracia brasileira enfrenta desafios estruturais que o ENEM frequentemente
          aborda: a captura do poder político pelo poder econômico (financiamento de campanhas,
          influência de grupos empresariais sobre legislação), a sub-representação de negros,
          mulheres e indígenas nos parlamentos e tribunais, a fragilidade das instituições
          diante de pressões autoritárias. O 8 de janeiro de 2023 revelou a vulnerabilidade
          da democracia brasileira a ataques que pareciam impensáveis — e a resistência das
          instituições que, naquele momento, funcionaram.
        </p>
      </section>

      {/* ===== SEÇÃO 10 — EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — Brasil Contemporâneo e Constituição de 1988</h2>

        <Exercise
          level="Básico"
          title="1. A campanha das Diretas Já"
          statement={
            <p>
              A campanha "Diretas Já" (1983–1984) mobilizou milhões de brasileiros em comícios
              nas principais cidades do país. Sobre esse movimento e seu desfecho, é correto
              afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A emenda Dante de Oliveira foi aprovada no Congresso, resultando em eleições diretas para presidente em 1984." },
            { letter: "b", text: "A campanha teve pouca repercussão popular e foi organizada apenas por partidos políticos de oposição." },
            { letter: "c", text: "A emenda das Diretas foi derrotada no Congresso por falta de quórum, mas a mobilização popular forçou a abertura política e a eleição indireta de Tancredo Neves pelo Colégio Eleitoral.", correct: true },
            { letter: "d", text: "O movimento foi liderado pelos militares que queriam apressar a transição democrática para manter sua influência sobre o processo político." },
            { letter: "e", text: "A campanha resultou na eleição direta de Fernando Collor de Mello, o primeiro presidente eleito pelo voto popular após a ditadura." },
          ]}
          resolution={
            <p>
              A emenda Dante de Oliveira precisava de dois terços dos votos do Congresso para
              ser aprovada. Faltaram 22 votos — um resultado que deixou marca na memória política
              brasileira. A derrota não extinguiu o movimento democrático: a oposição negociou
              com dissidentes do PDS na "Aliança Democrática" e levou Tancredo Neves ao
              Colégio Eleitoral, onde venceu em janeiro de 1985. As eleições diretas para
              presidente só vieram em 1989, quando Fernando Collor foi eleito.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Constituição de 1988 e os direitos sociais"
          statement={
            <div>
              <p>
                "Art. 196. A saúde é direito de todos e dever do Estado, garantido mediante
                políticas sociais e econômicas que visem à redução do risco de doença e de
                outros agravos e ao acesso universal e igualitário às ações e serviços para
                sua promoção, proteção e recuperação."
              </p>
              <p><em>(Constituição Federal do Brasil, 1988)</em></p>
              <p>O artigo acima representa uma conquista histórica porque:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Pela primeira vez na história brasileira, reconheceu-se que a saúde pública deveria ser paga pelos cidadãos que dela precisassem, sem ônus ao Estado." },
            { letter: "b", text: "Universalizou o acesso à saúde como direito de cidadania, criando as bases jurídicas do SUS e superando o modelo anterior que restringia o atendimento público apenas aos trabalhadores com carteira assinada.", correct: true },
            { letter: "c", text: "Transferiu a responsabilidade pela saúde pública exclusivamente para os estados e municípios, sem obrigações do governo federal." },
            { letter: "d", text: "Proibiu a existência de planos de saúde privados, tornando o sistema de saúde brasileiro integralmente estatal." },
            { letter: "e", text: "Representou uma continuidade em relação ao sistema de saúde anterior, sem alterações substanciais no acesso dos brasileiros aos serviços médicos." },
          ]}
          resolution={
            <p>
              Antes de 1988, o acesso à saúde pública no Brasil era restrito aos trabalhadores
              com carteira assinada, vinculados ao antigo INAMPS (Instituto Nacional de
              Assistência Médica da Previdência Social). Trabalhadores informais, desempregados
              e pobres recorriam à caridade — Santas Casas de Misericórdia — ou à saúde privada.
              A Constituição rompeu com esse modelo ao universalizar a saúde como direito de
              todos, independentemente de vínculos empregatícios, criando as bases legais
              do SUS, implementado a partir de 1990.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Redemocratização e seus limites estruturais"
          statement={
            <div>
              <p>
                "A transição democrática brasileira foi um processo negociado, controlado
                pelos próprios militares, que garantiu a si mesmos imunidade judicial através
                da Lei da Anistia de 1979, preservou a estrutura fundiária concentrada e
                não alterou as bases do sistema econômico que produzia a desigualdade. A
                Constituição de 1988, por mais avançada que fosse, não suprimiu as raízes
                históricas da exclusão social."
              </p>
              <p>
                Esse texto caracteriza a redemocratização brasileira como uma "transição
                conservadora". Qual evidência histórica melhor sustenta essa interpretação?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O fato de que nenhum militar foi punido por crimes de tortura durante a ditadura, e que a desigualdade social e racial herdada do período colonial permaneceu estruturalmente intocada pelo processo de transição.", correct: true },
            { letter: "b", text: "O fato de que a Constituição de 1988 não garantiu o direito ao voto às mulheres e aos analfabetos, excluindo grande parte da população." },
            { letter: "c", text: "A derrota da campanha das Diretas Já, que demonstrou que o povo brasileiro não tinha interesse em participar do processo democrático." },
            { letter: "d", text: "O fato de que o governo militar se recusou a negociar com a oposição, resultando em uma transição abrupta e violenta." },
            { letter: "e", text: "A aprovação de uma nova Constituição que manteve os mesmos direitos civis da Constituição de 1967, sem inovações significativas." },
          ]}
          resolution={
            <p>
              A tese da "transição conservadora" é amplamente aceita na historiografia
              brasileira recente (Daniel Aarão Reis, entre outros). Seus pilares são:
              (1) a anistia de 1979 que beneficiou torturadores — o Brasil é exceção no
              Cone Sul, onde Chile, Argentina e Uruguai julgaram agentes da repressão;
              (2) a manutenção da estrutura agrária (reforma agrária nunca realizada);
              (3) a persistência do racismo estrutural — a abolição de 1888 também não
              foi acompanhada de integração — e da desigualdade extrema. A Constituição
              avançou em direitos formais, mas não alterou as estruturas materiais da
              exclusão histórica.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Bolsa Família e políticas de redistribuição"
          statement={
            <div>
              <p>
                Entre 2003 e 2010, o Brasil implementou uma combinação de políticas públicas —
                Bolsa Família, aumento real do salário mínimo, expansão do crédito popular e
                ampliação do acesso à educação superior — que contribuiu para a saída de mais
                de 30 milhões de pessoas da pobreza extrema e para a ascensão social de uma
                nova camada de consumidores, denominada pela imprensa de "nova classe C".
              </p>
              <p>
                Historicamente, esse processo se insere em que tradição de políticas públicas?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "No neoliberalismo do Consenso de Washington, que defendia a redistribuição de renda via privatizações e abertura comercial." },
            { letter: "b", text: "No keynesianismo e no Estado de Bem-Estar Social: a intervenção do Estado no mercado para reduzir desigualdades e ampliar consumo como motor do crescimento econômico.", correct: true },
            { letter: "c", text: "No liberalismo clássico do século XIX, que defendia que o mercado, sem intervenção estatal, produziria naturalmente a melhor distribuição de renda." },
            { letter: "d", text: "No socialismo real, com estatização dos meios de produção e planejamento centralizado da economia." },
            { letter: "e", text: "No monetarismo de Milton Friedman, que priorizava o controle da inflação sobre qualquer política de redistribuição de renda." },
          ]}
          resolution={
            <p>
              As políticas sociais dos governos Lula articulam várias tradições, mas a principal
              referência é o keynesianismo: o Estado intervém para corrigir falhas do mercado,
              ampliar a renda das camadas mais pobres (que têm maior propensão marginal ao consumo)
              e usar esse consumo como motor do crescimento econômico — o chamado "crescimento
              com distribuição". O Bolsa Família não é socialismo (não estatiza a produção)
              nem neoliberalismo (não é a livre mercado que distribui a renda) — é uma política
              redistributiva via Estado, inspirada em experiências de países como México
              (Progresa/Oportunidades) e em fundamentos keynesianos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Direitos indígenas na Constituição e os conflitos contemporâneos"
          statement={
            <div>
              <p>
                O artigo 231 da Constituição Federal de 1988 reconhece aos índios "sua organização
                social, costumes, línguas, crenças e tradições, e os direitos originários sobre
                as terras que tradicionalmente ocupam". Em 2023, o STF julgou inconstitucional
                a tese do "Marco Temporal", que restringiria o direito às terras indígenas
                apenas àquelas que estivessem sob ocupação indígena em 5 de outubro de 1988
                (data da promulgação da Constituição).
              </p>
              <p>
                Qual é a principal crítica histórica à tese do Marco Temporal?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A data de 1988 é muito antiga e deveria ser substituída por 1500, quando os povos indígenas ocupavam todo o território brasileiro." },
            { letter: "b", text: "O Marco Temporal ignora que muitas comunidades indígenas foram expulsas violentamente de seus territórios originários antes de 1988 — precisamente pela violência do Estado e de fazendeiros — e que reconhecer apenas a ocupação naquela data premiaria quem praticou a expulsão.", correct: true },
            { letter: "c", text: "A tese é historicamente correta: se os indígenas não estavam na terra em 1988, é porque nunca a habitaram originalmente." },
            { letter: "d", text: "A crítica ao Marco Temporal é que ele fixou uma data muito recente; o correto seria usar 1500 como referência histórica da ocupação territorial." },
            { letter: "e", text: "O Marco Temporal seria benéfico aos indígenas porque garantiria segurança jurídica às terras efetivamente ocupadas em 1988." },
          ]}
          resolution={
            <p>
              O argumento histórico central contra o Marco Temporal é de uma lógica cristalina:
              muitos grupos indígenas foram expulsos de seus territórios nos anos 1960, 1970 e
              1980 — precisamente pelo período em que o Estado brasileiro, sob a ditadura,
              promoveu a expansão do agronegócio e de projetos de infraestrutura sobre territórios
              indígenas. Usar a data de 1988 como critério de ocupação significaria legitimar
              as expulsões violentas realizadas antes dessa data. O STF, em julgamento histórico
              de 2023, reconheceu esse argumento e declarou o Marco Temporal inconstitucional
              por maioria. O Congresso aprovou lei (PL 2903/2023) tentando impor o Marco Temporal,
              abrindo nova disputa judicial.
            </p>
          }
        />
      </section>
    </article>
  );
}
