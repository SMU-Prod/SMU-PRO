"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 31</span>
          <h1>Globalização e nova divisão internacional do trabalho</h1>
          <p>
            A globalização é o processo de crescente integração econômica, política, cultural e
            tecnológica entre os países e regiões do mundo, acelerado especialmente a partir dos anos
            1970–1980. Ela reorganizou profundamente a geografia da produção mundial, criando uma nova
            divisão internacional do trabalho na qual países emergentes assumiram papel de destaque
            na manufatura, enquanto os países desenvolvidos buscam manter sua liderança em tecnologia,
            finanças e serviços. Compreender esse processo — suas causas, dinâmicas, vencedores e
            perdedores — é fundamental para o ENEM e para a leitura crítica do mundo contemporâneo.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O que é globalização</span>
        <h2>1. Globalização: conceito, causas e fases</h2>
        <p>
          A <strong>globalização</strong> pode ser definida como o processo pelo qual mercados,
          produções, culturas e fluxos financeiros integram-se em escala planetária, rompendo as
          barreiras nacionais. Ela não é um fenômeno novo — o colonialismo europeu e o comércio
          intercontinental já integravam diferentes regiões desde o século XVI — mas atingiu uma
          intensidade, velocidade e abrangência sem precedentes a partir do final do século XX.
        </p>
        <p>
          Os principais fatores que impulsionaram a globalização contemporânea foram: a
          <strong> Revolução Técnico-Científico-Informacional</strong> (internet, telecomunicações,
          transporte rápido de cargas); a abertura dos mercados e a adoção do modelo
          <strong> neoliberal</strong> (livre comércio, desregulamentação financeira, privatizações);
          o fim da Guerra Fria (1989–1991), que abriu o bloco socialista ao capitalismo mundial; e a
          atuação de organismos internacionais como a <strong>OMC, FMI e Banco Mundial</strong> na
          promoção do comércio e das políticas de ajuste estrutural.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fases da globalização econômica</caption>
            <thead>
              <tr>
                <th>Fase</th>
                <th>Período</th>
                <th>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proto-globalização</td>
                <td>Séc. XVI–XVIII</td>
                <td>Comércio colonial, circuito atlântico, tráfico de escravos, especiarias</td>
              </tr>
              <tr>
                <td>Globalização clássica</td>
                <td>1850–1914</td>
                <td>Industrialização, padrão ouro, imperialismo, expansão do telégrafo e ferrovias</td>
              </tr>
              <tr>
                <td>Interrupção</td>
                <td>1914–1945</td>
                <td>Guerras mundiais, protecionismo, Grande Depressão</td>
              </tr>
              <tr>
                <td>Globalização Bretton Woods</td>
                <td>1945–1971</td>
                <td>GATT, FMI, câmbio fixo, crescimento com regulação</td>
              </tr>
              <tr>
                <td>Globalização neoliberal</td>
                <td>1971–hoje</td>
                <td>Câmbio flutuante, financeirização, TICs, cadeias globais de valor, OMC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Divisão internacional do trabalho</span>
        <h2>2. A divisão internacional do trabalho: velha e nova</h2>
        <p>
          A <strong>velha divisão internacional do trabalho</strong> (DIT), típica do período colonial
          e industrial clássico, era relativamente simples: países centrais (Europa, EUA) produziam
          e exportavam bens manufaturados de alto valor agregado, enquanto países periféricos
          (América Latina, África, Ásia) exportavam matérias-primas e produtos agrícolas. Essa
          divisão refletia e reproduzia a desigualdade entre o Norte e o Sul globais.
        </p>
        <p>
          A <strong>nova divisão internacional do trabalho</strong> (nDIT), consolidada a partir dos
          anos 1970–1980, é mais complexa e fragmentada. Com o desenvolvimento das telecomunicações
          e do transporte de cargas, as empresas multinacionais passaram a fragmentar a produção em
          escala global, instalando diferentes etapas do processo produtivo nos países com maior
          vantagem comparativa para cada fase: design nos EUA ou Europa, componentes no Japão e
          Coreia do Sul, montagem na China ou no Sudeste Asiático, matérias-primas na América
          Latina e na África.
        </p>
        <p>
          Esse processo criou as chamadas <strong>cadeias globais de valor</strong>: redes de
          produção que atravessam fronteiras nacionais e conectam fornecedores, montadores,
          distribuidores e consumidores em diferentes países. O exemplo clássico é o iPhone: projetado
          nos EUA, com componentes do Japão, Coreia e Taiwan, montado na China e vendido no mundo todo.
        </p>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="300" fill="#ede7f6" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#4527a0">
            Nova Divisão Internacional do Trabalho: cadeia global de valor (exemplo smartphone)
          </text>
          {/* etapas */}
          {/* Design/P&D */}
          <rect x="20" y="70" width="110" height="65" rx="8" fill="#7b1fa2" />
          <text x="75" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Design e P&D</text>
          <text x="75" y="107" textAnchor="middle" fontSize="9" fill="#fff">EUA, Japão,</text>
          <text x="75" y="120" textAnchor="middle" fontSize="9" fill="#fff">Europa</text>
          {/* seta */}
          <polygon points="130,100 142,93 142,107" fill="#4527a0" />
          <line x1="130" y1="100" x2="155" y2="100" stroke="#4527a0" strokeWidth="2" />
          {/* Componentes */}
          <rect x="155" y="70" width="110" height="65" rx="8" fill="#8e24aa" />
          <text x="210" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Componentes</text>
          <text x="210" y="107" textAnchor="middle" fontSize="9" fill="#fff">Coreia, Taiwan,</text>
          <text x="210" y="120" textAnchor="middle" fontSize="9" fill="#fff">Japão</text>
          {/* seta */}
          <polygon points="265,100 277,93 277,107" fill="#4527a0" />
          <line x1="265" y1="100" x2="290" y2="100" stroke="#4527a0" strokeWidth="2" />
          {/* Matérias-primas */}
          <rect x="290" y="70" width="110" height="65" rx="8" fill="#ab47bc" />
          <text x="345" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Mat.-primas</text>
          <text x="345" y="107" textAnchor="middle" fontSize="9" fill="#fff">Brasil, Chile,</text>
          <text x="345" y="120" textAnchor="middle" fontSize="9" fill="#fff">RDC, Bolívia</text>
          {/* seta */}
          <polygon points="400,100 412,93 412,107" fill="#4527a0" />
          <line x1="400" y1="100" x2="425" y2="100" stroke="#4527a0" strokeWidth="2" />
          {/* Montagem */}
          <rect x="425" y="70" width="110" height="65" rx="8" fill="#ce93d8" />
          <text x="480" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4527a0">Montagem</text>
          <text x="480" y="107" textAnchor="middle" fontSize="9" fill="#4527a0">China,</text>
          <text x="480" y="120" textAnchor="middle" fontSize="9" fill="#4527a0">Sudeste Asiático</text>
          {/* seta */}
          <polygon points="535,100 547,93 547,107" fill="#4527a0" />
          <line x1="535" y1="100" x2="560" y2="100" stroke="#4527a0" strokeWidth="2" />
          {/* Consumo */}
          <rect x="560" y="70" width="120" height="65" rx="8" fill="#e1bee7" />
          <text x="620" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4527a0">Distribuição</text>
          <text x="620" y="107" textAnchor="middle" fontSize="9" fill="#4527a0">e consumo</text>
          <text x="620" y="120" textAnchor="middle" fontSize="9" fill="#4527a0">Mercado global</text>
          {/* Onde fica o valor adicionado */}
          <rect x="20" y="165" width="660" height="60" rx="8" fill="#f3e5f5" />
          <text x="350" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4527a0">
            Onde fica o maior valor agregado?
          </text>
          <text x="350" y="203" textAnchor="middle" fontSize="11" fill="#7b1fa2">
            Design/P&D e marcas (países centrais) capturam mais valor que montagem e mat.-primas (periferias)
          </text>
          <text x="350" y="220" textAnchor="middle" fontSize="10" fill="#6a1b9a">
            Exemplo: de cada R$ 100 do preço de um iPhone, menos de R$ 5 ficam na China (montagem)
          </text>
          {/* sorriso da curva */}
          <text x="350" y="255" textAnchor="middle" fontSize="11" fill="#4527a0" fontWeight="bold">
            "Curva sorridente": o valor se concentra nas pontas (design e comercialização), não na montagem
          </text>
        </svg>
        <figcaption>
          Figura 1 — Cadeia global de valor de um smartphone: a nova DIT fragmenta a produção em etapas
          distribuídas pelo mundo, mas o maior valor agregado fica nos países centrais
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Empresas transnacionais</span>
        <h2>3. Empresas transnacionais e o poder econômico global</h2>
        <p>
          As <strong>empresas transnacionais (ETNs)</strong> — também chamadas de multinacionais —
          são o principal agente privado da globalização. Elas produzem, distribuem e comercializam
          em múltiplos países, buscando constantemente reduzir custos, ampliar mercados e acessar
          recursos. As maiores ETNs têm faturamentos superiores ao PIB de países de médio porte.
        </p>
        <p>
          As ETNs exercem forte influência sobre os países onde se instalam: geram empregos e
          divisas, mas também podem pressionar por menores impostos, legislações ambientais e
          trabalhistas mais frouxas, e transferência de lucros para sedes em paraísos fiscais. O
          debate sobre a <strong>regulação das multinacionais</strong> e a soberania dos Estados
          nacionais é um dos temas centrais da geopolítica contemporânea.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Algumas das maiores empresas transnacionais e seus setores (2024)</caption>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>País de origem</th>
                <th>Setor</th>
                <th>Presença global</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>EUA</td>
                <td>Tecnologia/Eletrônicos</td>
                <td>Design nos EUA, fabricação na China</td>
              </tr>
              <tr>
                <td>Amazon</td>
                <td>EUA</td>
                <td>Comércio/Logística/Cloud</td>
                <td>Operações em mais de 50 países</td>
              </tr>
              <tr>
                <td>Toyota</td>
                <td>Japão</td>
                <td>Automobilístico</td>
                <td>Fábricas em 28 países</td>
              </tr>
              <tr>
                <td>Shell</td>
                <td>Reino Unido/Países Baixos</td>
                <td>Petróleo e gás</td>
                <td>Exploração em mais de 70 países</td>
              </tr>
              <tr>
                <td>JBS</td>
                <td>Brasil</td>
                <td>Alimentos (proteína animal)</td>
                <td>Maior frigorífico do mundo; presente em 15 países</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Blocos econômicos</span>
        <h2>4. Blocos econômicos e a regionalização da economia global</h2>
        <p>
          Em paralelo à globalização, ocorreu um processo de <strong>regionalização</strong>: países
          com proximidade geográfica, histórica e econômica formaram blocos para facilitar o comércio
          intrarregional e negociar coletivamente com outros blocos e potências. Os blocos econômicos
          são classificados de acordo com o grau de integração:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Graus de integração econômica regional e exemplos</caption>
            <thead>
              <tr>
                <th>Grau</th>
                <th>Características</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zona de livre comércio</td>
                <td>Eliminação de tarifas entre membros</td>
                <td>USMCA/NAFTA (EUA, México, Canadá)</td>
              </tr>
              <tr>
                <td>União aduaneira</td>
                <td>Tarifa externa comum ao bloco</td>
                <td>Mercosul (Brasil, Argentina, Uruguai, Paraguai)</td>
              </tr>
              <tr>
                <td>Mercado comum</td>
                <td>Livre circulação de bens, serviços, capital e pessoas</td>
                <td>UE (com algumas restrições à circulação de pessoas)</td>
              </tr>
              <tr>
                <td>União econômica e monetária</td>
                <td>Moeda única, políticas econômicas comuns</td>
                <td>Zona do Euro (19 países da UE)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os principais blocos econômicos contemporâneos são: <strong>União Europeia (UE)</strong> —
          o mais avançado, com mercado único e moeda comum (euro) para 20 membros; <strong>USMCA</strong>
          (ex-NAFTA) — entre EUA, Canadá e México; <strong>ASEAN</strong> — Associação das Nações do
          Sudeste Asiático; <strong>Mercosul</strong> — entre os países do Cone Sul da América do Sul;
          e a <strong>União Africana</strong>.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Países emergentes</span>
        <h2>5. BRICS e países emergentes na nova ordem econômica global</h2>
        <p>
          O termo <strong>BRIC</strong> foi criado pelo economista Jim O'Neill (Goldman Sachs) em 2001
          para designar quatro grandes economias emergentes: <strong>Brasil, Rússia, Índia e
          China</strong>. Em 2010, a África do Sul foi incluída, criando o acrônimo <strong>BRICS</strong>.
          Em 2024, o grupo ampliou-se significativamente com a adesão de Irã, Egito, Etiópia e Emirados
          Árabes Unidos.
        </p>
        <p>
          Os BRICS representam uma alternativa à hegemonia ocidental nas relações econômicas
          internacionais. Criaram o <strong>Novo Banco de Desenvolvimento (NBD)</strong>, com sede em
          Xangai, como alternativa ao Banco Mundial e ao FMI. O peso crescente da <strong>China</strong>
          no grupo e na economia global é especialmente marcante: desde 2010, a China ultrapassou o Japão
          como segunda maior economia do mundo e é o maior parceiro comercial do Brasil e de muitos
          países em desenvolvimento.
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="290" fill="#e0f2f1" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#00695c">
            Participação no PIB global: países desenvolvidos x emergentes (tendência)
          </text>
          {/* eixos */}
          <line x1="70" y1="50" x2="70" y2="230" stroke="#00695c" strokeWidth="2" />
          <line x1="70" y1="230" x2="650" y2="230" stroke="#00695c" strokeWidth="2" />
          {/* linhas horizontais */}
          <line x1="70" y1="130" x2="650" y2="130" stroke="#b2dfdb" strokeWidth="1" strokeDasharray="5,3" />
          <line x1="70" y1="90" x2="650" y2="90" stroke="#b2dfdb" strokeWidth="1" strokeDasharray="5,3" />
          {/* labels eixo Y */}
          <text x="60" y="233" textAnchor="end" fontSize="10" fill="#00695c">0%</text>
          <text x="60" y="133" textAnchor="end" fontSize="10" fill="#00695c">40%</text>
          <text x="60" y="93" textAnchor="end" fontSize="10" fill="#00695c">60%</text>
          <text x="60" y="53" textAnchor="end" fontSize="10" fill="#00695c">80%</text>
          {/* labels eixo X */}
          <text x="130" y="247" textAnchor="middle" fontSize="10" fill="#00695c">1990</text>
          <text x="250" y="247" textAnchor="middle" fontSize="10" fill="#00695c">2000</text>
          <text x="380" y="247" textAnchor="middle" fontSize="10" fill="#00695c">2010</text>
          <text x="520" y="247" textAnchor="middle" fontSize="10" fill="#00695c">2023</text>
          {/* linha: países desenvolvidos (caindo) */}
          <polyline
            points="130,70 250,80 380,110 520,120"
            fill="none"
            stroke="#1565c0"
            strokeWidth="3"
          />
          <text x="540" y="118" fontSize="10" fill="#1565c0" fontWeight="bold">Desenvolvidos</text>
          {/* linha: emergentes (subindo) */}
          <polyline
            points="130,190 250,175 380,150 520,130"
            fill="none"
            stroke="#e65100"
            strokeWidth="3"
          />
          <text x="540" y="140" fontSize="10" fill="#e65100" fontWeight="bold">Emergentes</text>
          {/* círculo de cruzamento */}
          <circle cx="450" cy="135" r="8" fill="#ffd54f" stroke="#f57f17" strokeWidth="2" />
          <text x="470" y="118" fontSize="9" fill="#f57f17" fontWeight="bold">Cruzamento</text>
          <text x="470" y="130" fontSize="9" fill="#f57f17">previsto</text>
          {/* legenda */}
          <text x="350" y="270" textAnchor="middle" fontSize="11" fill="#00695c">
            Emergentes (BRICS + outros) já respondem por mais da metade do PIB global em paridade de poder de compra (PPC)
          </text>
        </svg>
        <figcaption>
          Figura 2 — Convergência econômica global: emergentes ampliam participação no PIB mundial
          enquanto países desenvolvidos perdem peso relativo
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Globalização financeira</span>
        <h2>6. Globalização financeira e os fluxos de capital</h2>
        <p>
          A <strong>globalização financeira</strong> é uma das dimensões mais impactantes do processo
          de integração mundial. A partir dos anos 1970–1980, com a desregulamentação dos mercados de
          capitais e o desenvolvimento de tecnologias de telecomunicação, os fluxos financeiros
          internacionais cresceram exponencialmente, superando em muito o volume do comércio de bens
          e serviços.
        </p>
        <p>
          Os <strong>paraísos fiscais</strong> — territórios com baixa tributação e sigilo bancário
          — tornaram-se centros de acumulação de riqueza e de evasão fiscal, drenando recursos de
          países em desenvolvimento. Estimativas indicam que trilhões de dólares estão depositados
          em paraísos fiscais, subtraídos da tributação nos países de origem.
        </p>
        <p>
          As crises financeiras globais — como a crise asiática (1997), a bolha da internet (2001) e
          a crise financeira global de 2008 — demonstraram a vulnerabilidade da globalização
          financeira: choques em um mercado podem se propagar rapidamente para o resto do mundo,
          atingindo economias que nada têm a ver com a origem do problema.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Críticas à globalização</span>
        <h2>7. Críticas, resistências e o debate sobre a globalização</h2>
        <p>
          A globalização é um processo contraditório: ao mesmo tempo em que criou oportunidades (crescimento
          econômico em países como China, Coreia do Sul e Índia, difusão de tecnologias, queda de preços de
          bens de consumo), aprofundou desigualdades tanto entre países quanto dentro deles.
        </p>
        <p>
          Entre as críticas mais frequentes à globalização destacam-se: o aprofundamento da{" "}
          <strong>desigualdade Norte-Sul</strong>; a <strong>precarização do trabalho</strong> (com a
          busca das ETNs por países com menores salários e proteção social); os impactos
          <strong> culturais</strong> (homogeneização cultural ou "mcdonaldização"); os riscos
          <strong> ambientais</strong> (deslocalização de indústrias poluentes para países com menor
          regulação); e a <strong>perda de soberania</strong> dos Estados nacionais frente ao poder
          das corporações transnacionais e dos organismos financeiros internacionais.
        </p>
        <p>
          Movimentos <strong>altermundialistas</strong> (ou antiglobalização) como o Fórum Social
          Mundial — lançado em Porto Alegre (Brasil) em 2001 como contraponto ao Fórum Econômico
          Mundial de Davos — defendem "outro mundo possível", com comércio justo, soberania
          alimentar, regulação das finanças e prioridade ao ser humano sobre o mercado.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geopolítica e tensões</span>
        <h2>8. Geopolítica contemporânea: multipolaridade e tensões globais</h2>
        <p>
          Com o fim da Guerra Fria em 1991, os EUA tornaram-se a única superpotência global
          — a chamada ordem <strong>unipolar</strong>. Essa hegemonia, contudo, foi progressivamente
          questionada pela ascensão da <strong>China</strong>, pelo retorno da <strong>Rússia</strong>
          como potência militar e pelos BRICS como polo alternativo de poder econômico. O mundo
          contemporâneo avança para uma ordem <strong>multipolar</strong>, com disputas entre potências
          por mercados, tecnologias estratégicas, recursos naturais e áreas de influência geopolítica.
        </p>
        <p>
          As tensões entre <strong>EUA e China</strong> em torno do controle das tecnologias
          estratégicas (semicondutores, inteligência artificial, 5G), do Mar do Sul da China e de
          Taiwan são a principal linha de fratura da geopolítica atual. A guerra na Ucrânia (desde
          2022) acrescentou nova tensão ao cenário, reorganizando alianças e fluxos de energia e
          alimentos no mundo.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Globalização e o Brasil</span>
        <h2>9. O Brasil na globalização</h2>
        <p>
          O Brasil inseriu-se de forma assimétrica na globalização: é um grande exportador de
          commodities (soja, minério, petróleo, carne) e um mercado consumidor importante, mas ainda
          tem participação modesta nas exportações de bens de alta tecnologia e nos setores de
          serviços globais. A abertura econômica dos anos 1990 expôs a indústria nacional à
          concorrência exterior, gerando desindustrialização em alguns setores.
        </p>
        <p>
          Por outro lado, o Brasil se afirmou globalmente em áreas como <strong>agronegócio</strong>,
          <strong> biocombustíveis</strong> (etanol e biodiesel), <strong>petróleo em águas profundas
          (pré-sal)</strong> e <strong>aviação civil (Embraer)</strong>. O desafio é escalar esses
          pontos fortes e diversificar a inserção global para além das commodities, agregando mais
          valor à produção nacional.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Inserção do Brasil na globalização: pontos fortes e desafios</caption>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Pontos fortes</th>
                <th>Desafios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comércio</td>
                <td>Líder em soja, carne, café, petróleo</td>
                <td>Baixa participação em manufaturados de alto valor</td>
              </tr>
              <tr>
                <td>Tecnologia</td>
                <td>Embraer, fintechs, agtech, biocombustíveis</td>
                <td>Deficit em semicondutores, IA, hardware</td>
              </tr>
              <tr>
                <td>Investimentos</td>
                <td>Grande receptor de IED; JBS, Vale globais</td>
                <td>Dependência de capital externo; volatilidade cambial</td>
              </tr>
              <tr>
                <td>Geopolítico</td>
                <td>Membro fundador dos BRICS; liderança regional</td>
                <td>Relações tensas com potências; posição ambígua em conflitos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desglobalização?</span>
        <h2>10. Desglobalização, nearshoring e o futuro da ordem global</h2>
        <p>
          A pandemia de Covid-19 (2020–2022) expôs a vulnerabilidade das cadeias globais de suprimento:
          a dependência de um único fornecedor (especialmente a China) para produtos essenciais como
          medicamentos, semicondutores e equipamentos médicos criou crises de abastecimento em todo
          o mundo. Esse choque acelerou um debate sobre <strong>desglobalização</strong> ou, mais
          precisamente, <strong>reorganização das cadeias globais</strong>.
        </p>
        <p>
          O conceito de <strong>nearshoring</strong> (relocação de produção para países próximos
          geograficamente ao mercado consumidor) ganhou força: empresas norte-americanas passaram a
          investir no México; empresas europeias, em países do Leste Europeu. O objetivo é reduzir
          a dependência de fornecedores distantes e os riscos geopolíticos associados. Esse processo
          pode abrir oportunidades para países como o Brasil, que pode se beneficiar de sua
          proximidade com os EUA e da crescente demanda por alimentos, energia limpa e minerais
          estratégicos.
        </p>
      </section>

      {/* ── Seção de exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A globalização contemporânea é frequentemente associada à Revolução Técnico-Científico-Informacional
              e ao modelo neoliberal. Assinale a alternativa que apresenta corretamente uma característica da
              globalização econômica contemporânea:
            </p>
          }
          options={[
            { letter: "a", text: "A globalização promoveu a igualdade econômica entre os países, reduzindo as disparidades entre o Norte desenvolvido e o Sul em desenvolvimento." },
            { letter: "b", text: "A globalização eliminou o papel das empresas transnacionais, transferindo o controle da produção para os governos nacionais." },
            { letter: "c", text: "A globalização levou à fragmentação da produção em escala global, com diferentes etapas do processo produtivo distribuídas por vários países segundo vantagens comparativas.", correct: true },
            { letter: "d", text: "A globalização resultou no fortalecimento do protecionismo e na formação de economias autossuficientes em cada país." },
            { letter: "e", text: "A globalização contemporânea iniciou-se na Segunda Guerra Mundial, com o plano Marshall de reconstrução da Europa." },
          ]}
          resolution={
            <p>
              Uma das características centrais da globalização contemporânea é a fragmentação da produção em
              escala global, criando as chamadas cadeias globais de valor: diferentes etapas do processo
              produtivo (design, fabricação de componentes, montagem, distribuição) são realizadas em países
              distintos, de acordo com as vantagens comparativas de cada um (custo da mão de obra,
              tecnologia, matérias-primas). A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O Fórum Social Mundial foi criado em 2001 em Porto Alegre (RS) como contraponto ao Fórum
              Econômico Mundial de Davos. Qual é a posição do Fórum Social Mundial em relação à globalização?
            </p>
          }
          options={[
            { letter: "a", text: "Defende a aceleração da globalização neoliberal, com maior liberdade de movimento de capitais e eliminação total de tarifas comerciais." },
            { letter: "b", text: "Propõe o retorno ao isolacionismo nacional, com cada país produzindo tudo o que consome sem comércio internacional." },
            { letter: "c", text: "Critica o modelo de globalização neoliberal e defende alternativas baseadas em comércio justo, soberania alimentar, regulação das finanças e prioridade ao desenvolvimento humano.", correct: true },
            { letter: "d", text: "Apoia a globalização, mas propõe que seja liderada pelos países em desenvolvimento em vez dos países ricos." },
            { letter: "e", text: "Defende a extinção dos organismos internacionais como ONU, FMI e OMC, substituindo-os por acordos bilaterais entre países." },
          ]}
          resolution={
            <p>
              O Fórum Social Mundial (FSM), lançado em Porto Alegre em 2001 com o slogan "Outro mundo é
              possível", reúne movimentos sociais, ONGs e intelectuais que criticam o modelo de globalização
              neoliberal. O FSM propõe alternativas como comércio justo, soberania alimentar, regulação dos
              fluxos financeiros, cancelamento da dívida dos países pobres e prioridade ao desenvolvimento
              humano sobre os interesses do mercado. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A "velha" divisão internacional do trabalho (DIT), vigente no período colonial e industrial
              clássico, difere significativamente da "nova" DIT, consolidada a partir dos anos 1970–1980.
              Assinale a alternativa que apresenta corretamente essa diferença:
            </p>
          }
          options={[
            { letter: "a", text: "Na velha DIT, os países periféricos exportavam manufaturados; na nova DIT, passaram a exportar apenas matérias-primas." },
            { letter: "b", text: "A velha DIT era mais complexa e fragmentada do que a nova DIT, que simplificou as relações comerciais entre países centrais e periféricos." },
            { letter: "c", text: "Na velha DIT, países centrais exportavam manufaturados e periféricos exportavam matérias-primas; na nova DIT, a produção se fragmenta em cadeias globais de valor com diferentes países em etapas específicas.", correct: true },
            { letter: "d", text: "A velha e a nova DIT são essencialmente idênticas, pois os países que eram centrais continuam centrais e os periféricos continuam periféricos sem alteração de papéis." },
            { letter: "e", text: "Na nova DIT, os países em desenvolvimento assumiram o controle do design e da tecnologia, enquanto os países desenvolvidos se especializaram na montagem de produtos manufaturados." },
          ]}
          resolution={
            <p>
              A velha DIT era relativamente simples: países centrais (Europa, EUA) exportavam manufaturados;
              países periféricos (América Latina, África, Ásia) exportavam matérias-primas. A nova DIT,
              impulsionada pela globalização e pela revolução das telecomunicações, fragmentou a produção em
              cadeias globais de valor: diferentes etapas do processo produtivo são realizadas em países
              distintos (design nos EUA, componentes no Japão/Coreia, montagem na China, matérias-primas no
              Brasil/África). A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Os blocos econômicos são uma das expressões da regionalização da economia global.
              Assinale a alternativa que apresenta corretamente os graus de integração do Mercosul
              e da União Europeia:
            </p>
          }
          options={[
            { letter: "a", text: "Mercosul e União Europeia são ambos uniões monetárias, com moeda única e banco central comum." },
            { letter: "b", text: "O Mercosul é uma zona de livre comércio (sem tarifas internas), enquanto a União Europeia é uma união aduaneira (com tarifa externa comum)." },
            { letter: "c", text: "O Mercosul é uma união aduaneira (com tarifa externa comum), enquanto a União Europeia avançou para o estágio de união econômica e monetária, com mercado único e moeda comum (euro) para a maioria dos membros.", correct: true },
            { letter: "d", text: "Ambos os blocos são mercados comuns com livre circulação de pessoas, bens, serviços e capitais, sem distinção de grau de integração." },
            { letter: "e", text: "O Mercosul é mais avançado que a União Europeia em termos de integração política, com parlamento supranacional e corte de justiça regional com poder vinculante." },
          ]}
          resolution={
            <p>
              O Mercosul, criado pelo Tratado de Assunção em 1991, é formalmente uma união aduaneira: além
              de eliminar tarifas entre os membros, estabelece uma Tarifa Externa Comum (TEC) para produtos
              importados de fora do bloco (embora com muitas exceções e imperfeições). A União Europeia
              avançou muito além: é o bloco mais integrado do mundo, com mercado único (livre circulação de
              bens, serviços, capital e pessoas) e, para 20 membros, moeda única (euro) e política monetária
              comum. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A pandemia de Covid-19 (2020–2022) expôs fragilidades nas cadeias globais de suprimento
              e acelerou debates sobre desglobalização e nearshoring. Com base nesse contexto, analise
              a seguinte afirmação:
            </p>
          }
          options={[
            { letter: "a", text: "A pandemia comprovou que a globalização das cadeias produtivas é sempre benéfica, pois permitiu uma redistribuição eficiente de recursos médicos entre países durante a crise." },
            { letter: "b", text: "O nearshoring é uma tendência que busca relocalizar parte da produção para países mais próximos dos mercados consumidores, reduzindo riscos geopolíticos e de abastecimento — o que pode abrir novas oportunidades para países como o Brasil.", correct: true },
            { letter: "c", text: "A pandemia demonstrou que o modelo de produção just-in-time, com estoques mínimos, é o mais eficiente para garantir o abastecimento em situações de crise global." },
            { letter: "d", text: "O nearshoring é uma política exclusiva dos países desenvolvidos e não afeta os países em desenvolvimento, que continuam integrados às cadeias globais da mesma forma que antes." },
            { letter: "e", text: "A desglobalização significa o retorno ao isolacionismo econômico total, com cada país produzindo todos os bens que consome sem nenhum comércio internacional." },
          ]}
          resolution={
            <p>
              A pandemia demonstrou a vulnerabilidade das cadeias globais altamente concentradas: a
              dependência de um único país (especialmente a China) para produtos essenciais gerou crises de
              abastecimento. O nearshoring — relocação de parte da produção para países geograficamente mais
              próximos dos mercados consumidores — ganhou força como estratégia para reduzir esses riscos. O
              Brasil pode se beneficiar dessa tendência: está próximo dos EUA e Europa, possui abundância de
              recursos naturais, energia e capacidade agropecuária e industrial. Desglobalização não significa
              isolacionismo total, mas reorganização das cadeias. A alternativa B está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
