"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 37</span>
          <h1>República Velha (1889–1930)</h1>
          <p>
            Proclamada em novembro de 1889, a República brasileira inaugurou
            quatro décadas marcadas pela hegemonia das oligarquias cafeicultoras,
            pela exclusão das camadas populares da vida política formal e pela
            eclosão de movimentos sociais que questionaram as estruturas de poder
            vigentes. Compreender a República Velha é essencial para entender
            as tensões que levaram à Revolução de 1930 e à reconfiguração do
            Estado brasileiro ao longo do século XX.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 — República da Espada ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Período 1889–1894</span>
        <h2>A República da Espada: Deodoro e Floriano</h2>
        <p>
          Os primeiros cinco anos da República brasileira foram dominados por
          militares, razão pela qual esse período ficou conhecido como
          "República da Espada". O Marechal Deodoro da Fonseca, líder do golpe
          de 15 de novembro de 1889, governou primeiro como chefe do Governo
          Provisório e depois como presidente eleito indiretamente pelo Congresso
          Constituinte. Seu governo foi marcado por uma grave crise econômica — o
          Encilhamento —, pela adoção do federalismo e pela promulgação da
          Constituição de 1891.
        </p>
        <p>
          Deodoro dissolveu o Congresso Nacional em novembro de 1891, num ato
          que configurou tentativa de golpe. A reação das forças políticas,
          especialmente da Marinha (a "Revolta da Armada"), forçou sua renúncia.
          Assumiu o vice-presidente Floriano Peixoto, o "Marechal de Ferro",
          que enfrentou a Revolução Federalista (1893–95) no Sul e a Segunda
          Revolta da Armada (1893), consolidando a ordem republicana com mão
          dura. Floriano construiu uma base popular urbana no Rio de Janeiro —
          os "florianistas" ou "jacobinos" — que viam no militarismo republicano
          uma alternativa às oligarquias rurais.
        </p>
        <div className="lesson-highlight">
          <strong>O Encilhamento (1890–91):</strong> Política financeira do
          Ministro da Fazenda Rui Barbosa que autorizou bancos privados a emitir
          papel-moeda. A especulação desenfreada em ações gerou inflação, falências
          e crise econômica generalizada. O termo "encilhamento" remete ao
          comportamento dos cavalos antes da corrida — agitados e irrequietos —
          para descrever a febre especulativa da época.
        </div>
      </section>

      {/* ===== SEÇÃO 2 — Constituição de 1891 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Arcabouço jurídico</span>
        <h2>A Constituição de 1891</h2>
        <p>
          Redigida sob forte influência do positivismo e do modelo norte-americano,
          a Constituição de 1891 instituiu o federalismo (os antigos "estados"
          ganharam autonomia fiscal e política), o presidencialismo, a separação
          entre Estado e Igreja, e o voto masculino para maiores de 21 anos —
          excluindo mulheres, analfabetos, mendigos, praças de pré e religiosos
          claustrais. Embora proclamasse a igualdade formal, a Carta de 1891
          reproduzia as estruturas de exclusão que caracterizavam a sociedade
          brasileira.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Constituição de 1891</th>
                <th>Contraste com o Império</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forma de governo</td>
                <td>República Federativa Presidencialista</td>
                <td>Monarquia parlamentarista com Poder Moderador</td>
              </tr>
              <tr>
                <td>Sufrágio</td>
                <td>Masculino, não-analfabeto, maior de 21 anos</td>
                <td>Masculino, censo de renda, voto censitário</td>
              </tr>
              <tr>
                <td>Relação Igreja-Estado</td>
                <td>Separação laica</td>
                <td>Religião oficial católica</td>
              </tr>
              <tr>
                <td>Organização territorial</td>
                <td>Estados federados com autonomia fiscal</td>
                <td>Províncias subordinadas ao governo central</td>
              </tr>
              <tr>
                <td>Poderes</td>
                <td>Executivo, Legislativo, Judiciário</td>
                <td>Executivo, Legislativo, Judiciário + Moderador</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 3 — Política Café-com-Leite ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Oligarquias e poder</span>
        <h2>A Política do Café-com-Leite</h2>
        <p>
          A partir de 1894, com a eleição de Prudente de Morais, o poder passou
          às oligarquias civis, especialmente às dos estados de São Paulo e Minas
          Gerais. O pacto informal conhecido como "política do café-com-leite"
          estabelecia a alternância da presidência entre representantes paulistas
          (ligados ao café) e mineiros (associados à pecuária leiteira). Esse
          arranjo garantia estabilidade ao bloco dominante mas excluía outros
          estados e camadas sociais da competição política nacional.
        </p>
        <p>
          A sustentação desse sistema repousava sobre dois mecanismos
          interligados: a <strong>política dos governadores</strong> e o
          <strong> coronelismo</strong>. Pelo primeiro mecanismo, o presidente
          da República reconhecia a autonomia dos governadores estaduais e
          garantia a eleição de seus aliados ao Congresso; em troca, os
          governadores apoiavam as medidas federais. Pelo coronelismo, os
          grandes proprietários rurais ("coronéis") controlavam o voto da
          população local — muitas vezes por meio da violência, do clientelismo
          e do "voto de cabresto" —, garantindo a eleição dos candidatos
          indicados pelas oligarquias estaduais.
        </p>

        {/* SVG — Diagrama da Política Café-com-Leite */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 320" width="100%" aria-label="Diagrama da política café-com-leite e coronelismo">
            {/* Título */}
            <text x="350" y="28" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#1e293b">
              Diagrama: Política do Café-com-Leite e Coronelismo
            </text>

            {/* SP */}
            <rect x="60" y="60" width="140" height="60" rx="10" fill="#854d0e" />
            <text x="130" y="88" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="13">São Paulo</text>
            <text x="130" y="108" textAnchor="middle" fill="#fef3c7" fontSize="11">(Café)</text>

            {/* MG */}
            <rect x="500" y="60" width="140" height="60" rx="10" fill="#166534" />
            <text x="570" y="88" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="13">Minas Gerais</text>
            <text x="570" y="108" textAnchor="middle" fill="#dcfce7" fontSize="11">(Leite)</text>

            {/* Presidência */}
            <rect x="270" y="55" width="160" height="70" rx="10" fill="#1e40af" />
            <text x="350" y="83" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="13">Presidência</text>
            <text x="350" y="100" textAnchor="middle" fill="#bfdbfe" fontSize="11">da República</text>
            <text x="350" y="116" textAnchor="middle" fill="#bfdbfe" fontSize="10">(alternância)</text>

            {/* Setas SP → Presidência */}
            <line x1="200" y1="90" x2="268" y2="90" stroke="#854d0e" strokeWidth="2.5" markerEnd="url(#arrow37)" />
            {/* Setas MG → Presidência */}
            <line x1="500" y1="90" x2="432" y2="90" stroke="#166534" strokeWidth="2.5" markerEnd="url(#arrow37g)" />

            {/* Política dos Governadores */}
            <rect x="220" y="175" width="260" height="52" rx="8" fill="#7c3aed" />
            <text x="350" y="198" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="12">Política dos Governadores</text>
            <text x="350" y="216" textAnchor="middle" fill="#ede9fe" fontSize="10">apoio mútuo: presidente ↔ governadores</text>
            <line x1="350" y1="125" x2="350" y2="174" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,3" />

            {/* Coronelismo */}
            <rect x="60" y="175" width="140" height="52" rx="8" fill="#b45309" />
            <text x="130" y="198" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="12">Coronelismo</text>
            <text x="130" y="216" textAnchor="middle" fill="#fef3c7" fontSize="10">controle do voto local</text>
            <line x1="130" y1="120" x2="130" y2="174" stroke="#b45309" strokeWidth="2" strokeDasharray="5,3" />

            {/* Voto de Cabresto */}
            <rect x="500" y="175" width="140" height="52" rx="8" fill="#991b1b" />
            <text x="570" y="198" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="12">Voto de Cabresto</text>
            <text x="570" y="216" textAnchor="middle" fill="#fecaca" fontSize="10">coerção do eleitorado</text>
            <line x1="570" y1="120" x2="570" y2="174" stroke="#991b1b" strokeWidth="2" strokeDasharray="5,3" />

            {/* Eleitorado */}
            <rect x="220" y="272" width="260" height="40" rx="8" fill="#475569" />
            <text x="350" y="296" textAnchor="middle" fill="#fff" fontSize="12">Eleitorado rural controlado</text>
            <line x1="220" y1="227" x2="220" y2="272" stroke="#475569" strokeWidth="1.5" />
            <line x1="480" y1="227" x2="480" y2="272" stroke="#475569" strokeWidth="1.5" />

            <defs>
              <marker id="arrow37" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#854d0e" />
              </marker>
              <marker id="arrow37g" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 z" fill="#166534" />
              </marker>
            </defs>
          </svg>
          <figcaption>Diagrama esquemático da política café-com-leite e do coronelismo na República Velha.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 4 — Movimentos Sociais ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Resistência popular</span>
        <h2>Movimentos Sociais da República Velha</h2>
        <p>
          A República Velha foi um período de profundas tensões sociais. Excluídas
          da ordem liberal formal e submetidas a condições de extrema pobreza e
          violência, diversas parcelas da população brasileira protagonizaram
          movimentos de resistência que o Estado reprimiu com força militar.
          Esses movimentos revelam a face excludente da república oligárquica e
          são tema recorrente nas provas do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>Período</th>
                <th>Local</th>
                <th>Liderança / Causa</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Canudos</strong></td>
                <td>1896–1897</td>
                <td>Sertão da Bahia</td>
                <td>Antônio Conselheiro; misticismo e resistência camponesa</td>
                <td>4ª expedição militar destruiu Canudos; massacre de ~15 000 pessoas</td>
              </tr>
              <tr>
                <td><strong>Revolta da Vacina</strong></td>
                <td>1904</td>
                <td>Rio de Janeiro (RJ)</td>
                <td>Populares urbanos; contra vacinação obrigatória de Oswaldo Cruz</td>
                <td>Revolta sufocada; lei suspensa; "bota-abaixo" de Pereira Passos continuou</td>
              </tr>
              <tr>
                <td><strong>Revolta da Chibata</strong></td>
                <td>1910</td>
                <td>Baía de Guanabara (RJ)</td>
                <td>João Cândido "Almirante Negro"; marinheiros negros contra castigos corporais</td>
                <td>Governo aceitou condições; depois expulsou e prendeu líderes</td>
              </tr>
              <tr>
                <td><strong>Contestado</strong></td>
                <td>1912–1916</td>
                <td>Fronteira SC/PR</td>
                <td>José Maria; camponeses expulsos pela estrada de ferro e madeireiras</td>
                <td>Violenta repressão militar; aproximadamente 20 000 mortos</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SVG — Mapa dos movimentos sociais */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 600 480" width="100%" aria-label="Mapa esquemático dos movimentos sociais da República Velha">
            <rect width="600" height="480" fill="#e0f2fe" rx="8" />
            <text x="300" y="26" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e293b">
              Localização dos Principais Movimentos Sociais (1889–1930)
            </text>

            {/* Esboço simplificado do Brasil */}
            <path
              d="M220,50 Q300,40 370,55 Q430,70 460,110 Q490,150 480,200 Q470,250 490,290 Q510,330 480,370 Q450,410 400,430 Q360,450 310,440 Q260,445 220,420 Q180,400 160,360 Q140,320 150,280 Q155,240 140,200 Q125,160 145,120 Q170,80 220,50 Z"
              fill="#bbf7d0"
              stroke="#15803d"
              strokeWidth="2"
            />

            {/* Nordeste highlight */}
            <ellipse cx="370" cy="130" rx="50" ry="35" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" opacity="0.7" />

            {/* Ponto Canudos — BA */}
            <circle cx="355" cy="155" r="10" fill="#dc2626" />
            <text x="370" y="152" fontSize="11" fill="#1e293b" fontWeight="bold">Canudos (1896–97)</text>
            <text x="370" y="164" fontSize="10" fill="#374151">Sertão da Bahia</text>

            {/* Ponto Rio de Janeiro */}
            <circle cx="320" cy="320" r="10" fill="#7c3aed" />
            <text x="334" y="316" fontSize="11" fill="#1e293b" fontWeight="bold">Revolta da Vacina (1904)</text>
            <text x="334" y="328" fontSize="10" fill="#374151">Revolta da Chibata (1910) — RJ</text>

            {/* Ponto Contestado — SC/PR */}
            <circle cx="255" cy="380" r="10" fill="#ea580c" />
            <text x="270" y="376" fontSize="11" fill="#1e293b" fontWeight="bold">Contestado (1912–16)</text>
            <text x="270" y="388" fontSize="10" fill="#374151">Fronteira SC/PR</text>

            {/* Legenda */}
            <rect x="10" y="390" width="190" height="80" rx="6" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <text x="20" y="408" fontSize="11" fontWeight="bold" fill="#1e293b">Legenda</text>
            <circle cx="25" cy="425" r="6" fill="#dc2626" />
            <text x="36" y="429" fontSize="10" fill="#374151">Canudos</text>
            <circle cx="25" cy="445" r="6" fill="#7c3aed" />
            <text x="36" y="449" fontSize="10" fill="#374151">Revolta da Vacina / Chibata</text>
            <circle cx="25" cy="462" r="6" fill="#ea580c" />
            <text x="36" y="466" fontSize="10" fill="#374151">Contestado</text>
          </svg>
          <figcaption>Mapa esquemático indicando a localização geográfica dos principais movimentos sociais da República Velha.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 5 — Canudos ===== */}
      <section className="lesson-section">
        <span className="section-kicker">1896–1897</span>
        <h2>Guerra de Canudos</h2>
        <p>
          No sertão baiano, Antônio Vicente Mendes Maciel — o Antônio Conselheiro
          — liderava um movimento messiânico que atraiu milhares de sertanejos
          miseráveis e despossuídos. Em Canudos, fundou uma comunidade autônoma
          conhecida como Belo Monte, que chegou a reunir entre 25 000 e 30 000
          pessoas, tornando-se a segunda maior cidade da Bahia. A república
          oligárquica enxergou no movimento uma ameaça monarquista e
          "fanática". Enviou quatro expedições militares sucessivas; as três
          primeiras foram derrotadas. A quarta, com mais de 10 000 soldados e
          artilharia pesada, destruiu o arraial em outubro de 1897, degolando
          os últimos resistentes. O intelectual Euclides da Cunha narrou o
          conflito em <em>Os Sertões</em> (1902), obra fundadora do pensamento
          social brasileiro, que desnudou o abandono das populações sertanejas
          pelo Estado republicano.
        </p>
        <div className="lesson-highlight">
          <strong>Euclides da Cunha e Os Sertões:</strong> A obra divide-se em
          três partes — A Terra, O Homem e A Luta — e inaugurou a análise
          científica (ainda que permeada de determinismo racial e geográfico) da
          realidade brasileira. A expressão "o sertanejo é, antes de tudo, um
          forte" tornou-se símbolo da resistência nordestina.
        </div>
      </section>

      {/* ===== SEÇÃO 6 — Tenentismo ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Década de 1920</span>
        <h2>O Tenentismo</h2>
        <p>
          O tenentismo foi um movimento político-militar da década de 1920 que
          expressou o descontentamento das camadas médias urbanas e de jovens
          oficiais do Exército com a oligarquia cafeeira. Sem programa ideológico
          definido, os tenentes propunham o fim do coronelismo, o voto secreto e
          reformas modernizadoras. As principais manifestações foram:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Revolta do Forte de Copacabana (1922)</h4>
            <p>
              Em julho de 1922, militares insurgiram-se no Rio de Janeiro. O
              episódio mais simbólico foi a marcha dos "18 do Forte de
              Copacabana" pela orla, enfrentando tropas leais. Dois
              sobreviventes — Siqueira Campos e Eduardo Gomes — tornaram-se
              ícones do movimento.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Revoltas de 1924</h4>
            <p>
              Em São Paulo e no Rio Grande do Sul eclodiram novas rebeliões.
              As forças rebeldes paulistas recuaram para o interior e se
              uniram ao contingente gaúcho, formando a Coluna Miguel
              Costa–Prestes.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Coluna Prestes (1925–1927)</h4>
            <p>
              A coluna percorreu cerca de 25 000 km pelo interior do Brasil
              sem ser derrotada militarmente, tornando-se símbolo de
              resistência. Luís Carlos Prestes ("Cavaleiro da Esperança")
              depois se filiou ao Partido Comunista.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 7 — Café e Crise de 1929 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Economia e colapso</span>
        <h2>O Café Valorizado e a Crise de 1929</h2>
        <p>
          A economia da República Velha era dependente da exportação de café,
          responsável por mais de 70% das receitas cambiais brasileiras nos anos
          1920. Para sustentar os preços internacionais, o governo implementou a
          política de valorização do café (compra de excedentes com recursos
          públicos), iniciada pelo Convênio de Taubaté (1906). Essa política
          tornou o Brasil refém das oscilações do mercado externo.
        </p>
        <p>
          A crise de 1929 nos Estados Unidos derrubou os preços do café
          internacionalmente. O Brasil viu suas exportações derreterem e suas
          reservas se esgotarem. O governo queimou milhões de sacas de café
          para tentar sustentar preços, enquanto a população enfrentava
          desemprego e escassez. Esse colapso econômico fragilizou
          mortalmente a oligarquia cafeeira e pavimentou o caminho para a
          Revolução de 1930.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Política cafeeira</th>
                <th>Contexto internacional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1906</td>
                <td>Convênio de Taubaté: valorização artificial do café</td>
                <td>Superprodução brasileira; preços baixos</td>
              </tr>
              <tr>
                <td>1906–1929</td>
                <td>Compra de estoques, empréstimos externos para financiar política</td>
                <td>Demanda mundial estável; EUA principal importador</td>
              </tr>
              <tr>
                <td>Out/1929</td>
                <td>Colapso das exportações; queima de sacas de café</td>
                <td>Crash da Bolsa de Nova York; depressão global</td>
              </tr>
              <tr>
                <td>1930</td>
                <td>Falência do modelo agroexportador</td>
                <td>Preço do café despenca 60%; dívida externa cresce</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 — Revolução de 1930 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">O fim da República Velha</span>
        <h2>A Revolução de 1930</h2>
        <p>
          Em 1930, ao tentar garantir a sucessão para outro candidato paulista
          (Júlio Prestes) em vez de respeitar a vez de Minas Gerais, o presidente
          Washington Luís rompeu o pacto café-com-leite. Minas, aliada ao Rio
          Grande do Sul e à Paraíba, lançou a candidatura de Getúlio Vargas.
          Com a derrota oficial de Vargas nas eleições (março de 1930) em meio
          a suspeitas de fraude, e com o assassinato do candidato a
          vice-presidente João Pessoa (paraibano), as forças oposicionistas
          desencadearam a revolução em outubro.
        </p>
        <p>
          A chamada "Revolução de 1930" foi, na prática, um golpe de Estado
          articulado por militares e oligarquias dissidentes. Getúlio Vargas
          chegou ao poder em 3 de novembro de 1930 conduzido numa charrete pelos
          generais, encerrando a República Velha e inaugurando uma nova era na
          política brasileira. Embora não tenha modificado radicalmente as
          estruturas sociais, o movimento abriu caminho para a industrialização,
          o centralismo estatal e o trabalhismo que caracterizariam os anos
          seguintes.
        </p>
        <div className="lesson-highlight">
          <strong>Interpretações historiográficas:</strong> Para Boris Fausto,
          1930 representou uma "revolução burguesa" que permitiu ao Brasil avançar
          para a industrialização. Para outros autores, tratou-se de uma "revolução
          pelo alto", que substituiu uma oligarquia por outra sem romper com as
          estruturas de dominação.
        </div>
      </section>

      {/* ===== SEÇÃO 9 — Tabela de presidentes ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Linha cronológica</span>
        <h2>Os Presidentes da República Velha</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Presidente</th>
                <th>Período</th>
                <th>Estado</th>
                <th>Principal característica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deodoro da Fonseca</td>
                <td>1889–1891</td>
                <td>Alagoas (militar)</td>
                <td>Golpe, Encilhamento, dissolução do Congresso</td>
              </tr>
              <tr>
                <td>Floriano Peixoto</td>
                <td>1891–1894</td>
                <td>Alagoas (militar)</td>
                <td>Repressão à Revolta Federalista e à Armada</td>
              </tr>
              <tr>
                <td>Prudente de Morais</td>
                <td>1894–1898</td>
                <td>São Paulo</td>
                <td>Primeiro civil; repressão a Canudos</td>
              </tr>
              <tr>
                <td>Campos Sales</td>
                <td>1898–1902</td>
                <td>São Paulo</td>
                <td>Política dos Governadores; funding loan</td>
              </tr>
              <tr>
                <td>Rodrigues Alves</td>
                <td>1902–1906</td>
                <td>São Paulo</td>
                <td>Reforma urbana RJ; Revolta da Vacina</td>
              </tr>
              <tr>
                <td>Afonso Pena</td>
                <td>1906–1909</td>
                <td>Minas Gerais</td>
                <td>Convênio de Taubaté; modernização</td>
              </tr>
              <tr>
                <td>Hermes da Fonseca</td>
                <td>1910–1914</td>
                <td>Rio Grande do Sul</td>
                <td>Revolta da Chibata; "política das salvações"</td>
              </tr>
              <tr>
                <td>Epitácio Pessoa</td>
                <td>1919–1922</td>
                <td>Paraíba</td>
                <td>Seca nordestina; Revoltas tenentistas</td>
              </tr>
              <tr>
                <td>Washington Luís</td>
                <td>1926–1930</td>
                <td>São Paulo</td>
                <td>Rompimento do café-com-leite; derrubado em 1930</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 10 — Síntese ENEM ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Foco ENEM</span>
        <h2>O que o ENEM cobra sobre a República Velha</h2>
        <p>
          As questões do ENEM sobre a República Velha costumam articular temas
          políticos, sociais e econômicos em perspectiva crítica. São temas
          recorrentes: a exclusão política das classes populares e das mulheres;
          o papel do coronelismo e do clientelismo; a análise de fontes primárias
          (textos de Euclides da Cunha, charges, fotografias de Canudos); a
          conexão entre dependência econômica do café e vulnerabilidade externa;
          e a comparação entre os movimentos sociais (messiânicos, urbanos,
          militares). O ENEM valoriza a interpretação contextual e a capacidade
          de relacionar causas e consequências.
        </p>
        <div className="lesson-highlight">
          <strong>Dica de prova:</strong> Ao ver qualquer questão sobre "República
          Velha", acione imediatamente as palavras-chave: coronelismo, voto de
          cabresto, política dos governadores, café-com-leite, Canudos, Contestado,
          Revolta da Vacina, Revolta da Chibata, Tenentismo, Coluna Prestes,
          crise de 1929, Revolução de 1930. Cada um desses temas tem implicações
          sociais que o ENEM gosta de explorar por meio de textos de época.
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Política do café-com-leite"
          statement={
            <p>
              A "política do café-com-leite" foi um arranjo que caracterizou boa
              parte da República Velha (1894–1930). Assinale a alternativa que
              melhor descreve esse sistema político.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "Aliança entre trabalhadores rurais do café e da pecuária leiteira para reivindicar direitos trabalhistas.",
            },
            {
              letter: "B",
              text: "Acordo informal de alternância da presidência entre as oligarquias de São Paulo e Minas Gerais.",
              correct: true,
            },
            {
              letter: "C",
              text: "Política econômica de proteção ao mercado interno de alimentos, incluindo café e derivados do leite.",
            },
            {
              letter: "D",
              text: "Aliança militar entre os estados do Sul e do Sudeste para conter o tenentismo.",
            },
            {
              letter: "E",
              text: "Sistema de exportação conjunta de café e leite para financiar a dívida externa brasileira.",
            },
          ]}
          resolution={
            <p>
              A "política do café-com-leite" refere-se ao pacto oligárquico entre
              São Paulo (produtor de café) e Minas Gerais (associado à pecuária
              leiteira) para revezar o controle da presidência da República. Esse
              arranjo garantia a hegemonia dessas duas oligarquias sobre o Estado
              brasileiro durante a Primeira República.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Movimentos sociais da República Velha"
          statement={
            <p>
              Analise a seguinte afirmação: "Tanto Canudos (1896–97) quanto o
              Contestado (1912–16) foram movimentos protagonizados por
              populações campesinas marginalizadas que desenvolveram forte
              componente messiânico e foram violentamente reprimidos pelo
              Estado republicano."
            </p>
          }
          options={[
            {
              letter: "A",
              text: "A afirmação é falsa porque Canudos foi liderado por militares tenentistas, não por camponeses.",
            },
            {
              letter: "B",
              text: "A afirmação é verdadeira: ambos os movimentos tinham caráter popular-messiânico e foram esmagados militarmente.",
              correct: true,
            },
            {
              letter: "C",
              text: "A afirmação é parcialmente correta: o Contestado não teve caráter messiânico, apenas reivindicações trabalhistas.",
            },
            {
              letter: "D",
              text: "A afirmação é falsa porque ambos os movimentos foram negociados pacificamente com o governo federal.",
            },
            {
              letter: "E",
              text: "A afirmação é incorreta pois Canudos foi um movimento urbano concentrado na cidade de Salvador.",
            },
          ]}
          resolution={
            <p>
              Canudos, no sertão baiano, era liderado por Antônio Conselheiro e
              atraiu camponeses miseráveis num movimento com forte viés religioso
              messiânico. O Contestado, na fronteira SC/PR, igualmente agregou
              camponeses expulsos pela ferrovia e madeireiras, com liderança de
              monges como José Maria. Ambos foram destruídos por expedições
              militares com grande mortandade.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Coronelismo e estrutura de poder"
          statement={
            <p>
              O historiador Victor Nunes Leal definiu o coronelismo como "uma
              forma peculiar de manifestação do poder privado, que coexiste com
              um regime político de base representativa." Com base nessa
              perspectiva, identifique a alternativa que melhor explica a relação
              entre coronelismo e sistema eleitoral na República Velha.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "O coronelismo decorria da ausência de eleições; os coronéis indicavam líderes sem qualquer processo eleitoral.",
            },
            {
              letter: "B",
              text: "O coronelismo era incompatível com o voto universal, por isso foi abolido com a proclamação da República.",
            },
            {
              letter: "C",
              text: "O coronelismo era justamente o mecanismo pelo qual o voto existia formalmente, mas era controlado pelos proprietários rurais, articulando poder privado e representação formal.",
              correct: true,
            },
            {
              letter: "D",
              text: "O coronelismo era um fenômeno exclusivamente nordestino, sem relação com as eleições nos estados do Sul e Sudeste.",
            },
            {
              letter: "E",
              text: "O coronelismo corresponde ao controle que os militares exerciam sobre as eleições durante a República da Espada.",
            },
          ]}
          resolution={
            <p>
              Victor Nunes Leal demonstrou que o coronelismo não suprimia as
              eleições, mas as instrumentalizava: o coronel garantia votos ao
              candidato oficial em troca de favores e proteção estatal. Era
              exatamente a combinação de sufrágio formal com controle privado
              sobre eleitores dependentes que caracterizava o fenômeno. Assim,
              poder privado e representação formal coexistiam de forma perversa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="A Revolta da Chibata e a exclusão racial"
          statement={
            <p>
              A Revolta da Chibata (1910) foi liderada pelo marinheiro João
              Cândido Felisberto, filho de ex-escravizados. Os revoltosos
              exigiam o fim dos castigos corporais (chibatadas) ainda praticados
              na Marinha brasileira, apesar de legalmente abolidos. Qual é a
              dimensão social mais relevante desse evento para a compreensão da
              sociedade brasileira pós-abolição?
            </p>
          }
          options={[
            {
              letter: "A",
              text: "A revolta demonstra que a Marinha tinha interesse em modernizar seus métodos de treinamento.",
            },
            {
              letter: "B",
              text: "O evento ilustra a persistência de práticas escravistas em instituições republicanas, evidenciando que a abolição formal de 1888 não eliminou as hierarquias raciais.",
              correct: true,
            },
            {
              letter: "C",
              text: "A revolta foi um movimento estritamente trabalhista, sem relação com a questão racial brasileira.",
            },
            {
              letter: "D",
              text: "O episódio mostra a eficiência do governo republicano em absorver as demandas dos trabalhadores negros.",
            },
            {
              letter: "E",
              text: "João Cândido agia em nome do movimento tenentista, buscando a derrubada do governo oligárquico.",
            },
          ]}
          resolution={
            <p>
              A Revolta da Chibata evidencia que a abolição de 1888 não
              transformou as relações sociais: marinheiros negros — a maioria
              da tripulação — continuavam submetidos a castigos corporais que
              remetiam à escravidão. A República mantinha discriminação racial
              nas instituições. João Cândido, mesmo após a vitória inicial,
              foi expulso da Marinha e internado num hospício, ilustrando a
              violência institucional contra os negros no pós-abolição.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Crise de 1929 e a República Velha"
          statement={
            <p>
              "A lavoura cafeeira não pode esperar a solução dos problemas
              financeiros internacionais. O governo precisa agir agora para
              manter o preço do café." (Discurso fictício de um fazendeiro
              paulista, 1929.) Considerando o contexto da crise de 1929 e
              seu impacto no Brasil, analise a relação entre dependência do
              café e crise política da República Velha.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "A crise de 1929 beneficiou o Brasil porque a queda do dólar tornou o café mais barato para importadores europeus.",
            },
            {
              letter: "B",
              text: "A dependência do café não tinha relação com a política, pois a economia e a política eram esferas separadas na República Velha.",
            },
            {
              letter: "C",
              text: "A crise de 1929 derrubou os preços do café, levando à falência do modelo agroexportador e enfraquecendo a oligarquia paulista, o que criou condições para a Revolução de 1930.",
              correct: true,
            },
            {
              letter: "D",
              text: "O governo brasileiro evitou os efeitos da crise de 1929 por meio da diversificação da pauta exportadora.",
            },
            {
              letter: "E",
              text: "A crise de 1929 fortaleceu a oligarquia cafeeira porque o governo ampliou os subsídios ao setor.",
            },
          ]}
          resolution={
            <p>
              A crise de 1929 derrubou drasticamente os preços internacionais
              do café. O Brasil, cujas exportações dependiam em mais de 70%
              do produto, viu suas receitas cambiais colapsarem. O governo
              queimou milhões de sacas, mas não conseguiu sustentar os preços.
              Esse colapso econômico desgastou politicamente a oligarquia
              cafeeira paulista — a espinha dorsal da República Velha — e
              viabilizou a aliança que depôs Washington Luís em outubro de 1930.
            </p>
          }
        />
      </section>
    </article>
  );
}
