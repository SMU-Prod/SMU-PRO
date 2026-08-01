"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 10</span>
          <h1>Recursos minerais e exploração econômica</h1>
          <p>
            Os recursos minerais são componentes da crosta terrestre explorados pelo ser humano para
            fins econômicos, industriais e energéticos. Formados ao longo de milhões de anos por
            processos geológicos, esses recursos são considerados não renováveis, pois sua reposição
            natural ocorre em escalas de tempo incompatíveis com a demanda humana. Compreender sua
            distribuição, extração, beneficiamento e impactos socioambientais é fundamental para
            entender a economia global e os desafios do desenvolvimento sustentável.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos fundamentais</span>
        <h2>1. O que são recursos minerais?</h2>
        <p>
          Recursos minerais são substâncias inorgânicas naturais encontradas na crosta terrestre com
          propriedades físicas e químicas definidas. Eles se formam por processos como magmatismo,
          sedimentação, metamorfismo e atividade hidrotermal. Os minerais podem ser metálicos
          (ferro, ouro, cobre, alumínio), não metálicos (caulim, calcário, amianto) ou energéticos
          (carvão mineral, petróleo, gás natural, urânio).
        </p>
        <p>
          A diferença entre mineral e minério é importante: <strong>mineral</strong> é qualquer
          substância inorgânica natural com composição química definida, enquanto{" "}
          <strong>minério</strong> é o mineral ou conjunto de minerais com concentração suficiente
          para ser explorado economicamente. O teor de corte — concentração mínima viável — varia
          conforme o mineral e as condições de mercado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Classificação dos recursos minerais com exemplos e usos</caption>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Exemplos</th>
                <th>Principais usos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metais ferrosos</td>
                <td>Ferro, manganês, cromo, níquel</td>
                <td>Siderurgia, aço, ligas metálicas</td>
              </tr>
              <tr>
                <td>Metais não ferrosos</td>
                <td>Cobre, alumínio, chumbo, zinco</td>
                <td>Eletroeletrônicos, embalagens, baterias</td>
              </tr>
              <tr>
                <td>Metais preciosos</td>
                <td>Ouro, prata, platina</td>
                <td>Joalheria, reservas financeiras, eletrônica</td>
              </tr>
              <tr>
                <td>Minerais industriais</td>
                <td>Caulim, apatita, calcário, gipsita</td>
                <td>Cerâmica, cimento, fertilizantes</td>
              </tr>
              <tr>
                <td>Combustíveis minerais</td>
                <td>Carvão, petróleo, gás natural, urânio</td>
                <td>Energia elétrica, combustão, nuclear</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Formação geológica</span>
        <h2>2. Como se formam os depósitos minerais?</h2>
        <p>
          Os depósitos minerais resultam de processos geológicos específicos que concentram minerais
          em quantidades economicamente exploráveis. Os principais processos são:
        </p>
        <ul>
          <li>
            <strong>Magmáticos:</strong> cristalização de magma que separa minerais por densidade e
            temperatura. Formam depósitos de cromo, platina e diamantes (kimberlitos).
          </li>
          <li>
            <strong>Hidrotermais:</strong> fluidos quentes ricos em minerais que circulam pela crosta
            e depositam metais ao resfriar. Responsáveis por depósitos de ouro, prata, cobre e zinco.
          </li>
          <li>
            <strong>Sedimentares:</strong> acúmulo e cimentação de partículas minerais em bacias
            sedimentares. Formam os grandes depósitos de ferro (hematita), petróleo e carvão.
          </li>
          <li>
            <strong>Metamórficos:</strong> recristalização de rochas sob alta pressão e temperatura.
            Produzem grafite, talco e alguns depósitos de ouro.
          </li>
          <li>
            <strong>Supergênicos (lateritização):</strong> intemperismo químico que concentra
            minerais como bauxita (alumínio) e lateritas de níquel nas regiões tropicais.
          </li>
        </ul>
      </section>

      {/* SVG – Ciclo de formação de depósitos minerais */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          {/* fundo */}
          <rect width="600" height="320" fill="#f0f4f8" rx="12" />
          {/* título */}
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e3a5f">
            Processos de formação de depósitos minerais
          </text>
          {/* Terra em corte */}
          <rect x="50" y="50" width="500" height="230" fill="#e8d5b7" rx="8" />
          {/* camada superficial */}
          <rect x="50" y="50" width="500" height="40" fill="#8bc34a" rx="8" />
          <text x="300" y="76" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">
            Superfície (intemperismo / lateritização → bauxita)
          </text>
          {/* camada sedimentar */}
          <rect x="50" y="90" width="500" height="50" fill="#c8a96e" />
          <text x="300" y="120" textAnchor="middle" fontSize="11" fill="#3e2000" fontWeight="bold">
            Rochas sedimentares (ferro, carvão, petróleo)
          </text>
          {/* camada metamórfica */}
          <rect x="50" y="140" width="500" height="50" fill="#9e7b49" />
          <text x="300" y="170" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">
            Rochas metamórficas (grafite, talco, ouro)
          </text>
          {/* camada magmática */}
          <rect x="50" y="190" width="500" height="55" fill="#b71c1c" rx="0" />
          <text x="300" y="222" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">
            Câmara magmática (cromo, platina, diamante)
          </text>
          {/* fluidos hidrotermais */}
          <line x1="200" y1="245" x2="200" y2="105" stroke="#1565c0" strokeWidth="2.5" strokeDasharray="6,3" />
          <polygon points="196,105 204,105 200,90" fill="#1565c0" />
          <text x="140" y="180" fontSize="10" fill="#1565c0" fontWeight="bold">Fluidos</text>
          <text x="130" y="193" fontSize="10" fill="#1565c0" fontWeight="bold">hidrotermais</text>
          <text x="124" y="206" fontSize="10" fill="#1565c0" fontWeight="bold">(ouro, prata, Cu)</text>
          {/* vulcão */}
          <polygon points="420,50 395,140 445,140" fill="#757575" />
          <ellipse cx="420" cy="50" rx="12" ry="8" fill="#ff7043" />
          <text x="470" y="100" fontSize="10" fill="#555" fontWeight="bold">Vulcanismo</text>
          <text x="463" y="113" fontSize="10" fill="#555">→ magmático</text>
        </svg>
        <figcaption>
          Corte esquemático da crosta terrestre mostrando os diferentes ambientes de formação de
          depósitos minerais.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil mineral</span>
        <h2>3. Recursos minerais no Brasil</h2>
        <p>
          O Brasil possui uma das maiores reservas minerais do mundo, sendo destaque em ferro,
          nióbio, manganês, bauxita, ouro e rochas ornamentais. A exploração mineral é fundamental
          para a balança comercial brasileira, mas também gera debates intensos sobre impactos
          ambientais e direitos de comunidades tradicionais e indígenas.
        </p>
        <p>
          O <strong>Quadrilátero Ferrífero</strong> (MG) é a principal região produtora de ferro do
          país, responsável por grande parte das exportações de minério de ferro. A{" "}
          <strong>Serra dos Carajás</strong> (PA), na Amazônia, abriga uma das maiores reservas de
          ferro do mundo, além de cobre, ouro e manganês. O Brasil detém mais de 90% das reservas
          mundiais de nióbio, mineral estratégico para a produção de aços especiais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais recursos minerais do Brasil e localização</caption>
            <thead>
              <tr>
                <th>Mineral</th>
                <th>Principais estados/regiões</th>
                <th>Posição mundial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ferro</td>
                <td>MG (Quadrilátero Ferrífero), PA (Carajás)</td>
                <td>2º maior exportador mundial</td>
              </tr>
              <tr>
                <td>Nióbio</td>
                <td>MG (Araxá), GO (Catalão)</td>
                <td>90% das reservas mundiais</td>
              </tr>
              <tr>
                <td>Bauxita (alumínio)</td>
                <td>PA (Trombetas), MG</td>
                <td>3ª maior reserva mundial</td>
              </tr>
              <tr>
                <td>Manganês</td>
                <td>PA (Serra do Navio), MG</td>
                <td>Uma das maiores reservas</td>
              </tr>
              <tr>
                <td>Ouro</td>
                <td>PA, MT, AM, MG</td>
                <td>Entre os 10 maiores produtores</td>
              </tr>
              <tr>
                <td>Petróleo</td>
                <td>Pré-sal (RJ, SP, ES)</td>
                <td>9º maior produtor mundial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Extração e beneficiamento</span>
        <h2>4. Métodos de extração mineral</h2>
        <p>
          A extração mineral pode ocorrer por diferentes métodos, cada um adequado a um tipo de
          depósito e com diferentes impactos ambientais:
        </p>
        <ul>
          <li>
            <strong>Mineração a céu aberto (lavra a céu aberto):</strong> remoção de camadas de
            solo e rocha para acessar o minério. É o método mais comum para minério de ferro,
            bauxita e carvão. Gera grande alteração da paisagem.
          </li>
          <li>
            <strong>Mineração subterrânea:</strong> utilizada quando o depósito está profundo.
            Apresenta riscos de colapso e acúmulo de gases. Usada para ouro, potassa e diamantes.
          </li>
          <li>
            <strong>Garimpo:</strong> extração artesanal ou semi-artesanal, frequentemente informal.
            Associada ao ouro e diamantes; causa graves impactos ambientais e sociais (mercúrio,
            desmatamento, conflitos com indígenas).
          </li>
          <li>
            <strong>Extração por dissolução (lixiviação):</strong> uso de soluções químicas para
            extrair o mineral in situ. Utilizada para cobre, urânio e alguns minerais de potássio.
          </li>
        </ul>
        <p>
          Após a extração, o minério passa pelo <strong>beneficiamento</strong> (concentração e
          separação do mineral útil da ganga — material sem valor econômico), gerando rejeitos que
          devem ser armazenados em barragens. Os desastres de Mariana (2015) e Brumadinho (2019) no
          Brasil evidenciaram os riscos catastróficos do rompimento dessas estruturas.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geopolítica mineral</span>
        <h2>5. Distribuição mundial e geopolítica dos recursos minerais</h2>
        <p>
          Os recursos minerais estão distribuídos de forma desigual pelo planeta, determinando
          relações geopolíticas e econômicas entre países. Países ricos em minerais nem sempre são
          os maiores beneficiários econômicos, pois frequentemente exportam matéria-prima bruta e
          importam produtos industrializados — fenômeno relacionado à{" "}
          <strong>divisão internacional do trabalho</strong>.
        </p>
        <p>
          Os <strong>minerais estratégicos</strong> ganham crescente importância no contexto da
          transição energética: lítio (baterias elétricas), cobalto, terras raras (tecnologias
          verdes e eletrônica). A China domina a produção e o refino de terras raras (~60% da
          produção mundial), o que lhe confere poder geopolítico expressivo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Maiores produtores mundiais de minerais estratégicos (dados aproximados)</caption>
            <thead>
              <tr>
                <th>Mineral</th>
                <th>1º produtor</th>
                <th>2º produtor</th>
                <th>3º produtor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ferro</td>
                <td>Austrália</td>
                <td>Brasil</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Cobre</td>
                <td>Chile</td>
                <td>Peru</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Lítio</td>
                <td>Austrália</td>
                <td>Chile</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Terras raras</td>
                <td>China</td>
                <td>EUA</td>
                <td>Austrália</td>
              </tr>
              <tr>
                <td>Ouro</td>
                <td>China</td>
                <td>Rússia</td>
                <td>Austrália</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG – Cadeia produtiva mineral */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="200" fill="#e8f5e9" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1b5e20">
            Cadeia produtiva da mineração
          </text>
          {/* Etapas */}
          {[
            { x: 30, label: "Pesquisa\ngeológica", fill: "#66bb6a" },
            { x: 145, label: "Extração\n(lavra)", fill: "#43a047" },
            { x: 260, label: "Beneficia-\nmento", fill: "#388e3c" },
            { x: 375, label: "Transporte\ne logística", fill: "#2e7d32" },
            { x: 490, label: "Industria-\nlização", fill: "#1b5e20" },
          ].map(({ x, label, fill }) => (
            <g key={x}>
              <rect x={x} y="50" width="100" height="90" rx="8" fill={fill} />
              {label.split("\n").map((line, i) => (
                <text
                  key={i}
                  x={x + 50}
                  y={100 + i * 16}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#fff"
                  fontWeight="bold"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
          {/* setas */}
          {[145, 260, 375, 490].map((x) => (
            <polygon key={x} points={`${x - 10},95 ${x},88 ${x},102`} fill="#fff" />
          ))}
          <text x="300" y="175" textAnchor="middle" fontSize="10" fill="#2e7d32">
            Cada etapa agrega valor — países que industrializam retêm maior parte da riqueza gerada
          </text>
        </svg>
        <figcaption>
          Cadeia produtiva da mineração: da pesquisa geológica à industrialização. Países em
          desenvolvimento frequentemente exportam nas primeiras etapas, perdendo valor agregado.
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos ambientais</span>
        <h2>6. Impactos socioambientais da mineração</h2>
        <p>
          A exploração mineral causa impactos ambientais significativos em todas as fases da cadeia
          produtiva. Entre os principais problemas estão:
        </p>
        <ul>
          <li>
            <strong>Supressão de vegetação e desmatamento:</strong> abertura de minas exige a
            remoção de toda cobertura vegetal da área.
          </li>
          <li>
            <strong>Contaminação de recursos hídricos:</strong> drenagem ácida de mina, metais
            pesados e rejeitos comprometem rios e lençóis freáticos.
          </li>
          <li>
            <strong>Rompimento de barragens de rejeito:</strong> como em Mariana (2015, 19 mortos)
            e Brumadinho (2019, 270 mortos), causando desastres ambientais de grande escala.
          </li>
          <li>
            <strong>Subsidência do solo:</strong> colapso de galerias subterrâneas, afetando
            edificações e infraestrutura.
          </li>
          <li>
            <strong>Conflitos com populações tradicionais:</strong> garimpo ilegal em terras
            indígenas (Yanomami) gera contaminação por mercúrio e violência.
          </li>
        </ul>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcos regulatórios</span>
        <h2>7. Legislação e regulação da mineração no Brasil</h2>
        <p>
          A mineração brasileira é regulada pelo <strong>Código de Mineração</strong> (Decreto-Lei
          227/1967) e suas atualizações. A <strong>Agência Nacional de Mineração (ANM)</strong>,
          criada em 2017, fiscaliza a atividade e gerencia os direitos minerários. A Constituição
          Federal de 1988 estabelece que os recursos minerais pertencem à União, cabendo ao
          minerador apenas o direito de lavra mediante concessão.
        </p>
        <p>
          A <strong>Política Nacional de Segurança de Barragens (PNSB)</strong>, reforçada após
          Brumadinho pela Lei 14.066/2020, estabelece critérios rigorosos para construção,
          operação e descomissionamento de barragens de rejeito, incluindo a proibição de
          barragens com método alteamento a montante.
        </p>
        <p>
          O debate sobre o <strong>Marco Legal da Mineração</strong> envolve tensões entre
          desenvolvimento econômico, proteção ambiental, direitos indígenas (Convenção 169 da OIT)
          e compensações financeiras para municípios mineradores por meio da{" "}
          <strong>CFEM (Compensação Financeira pela Exploração Mineral)</strong>.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Economia mineral</span>
        <h2>8. Mineração e economia: enclave ou desenvolvimento?</h2>
        <p>
          Um dos debates centrais da Geografia Econômica é se a exploração mineral gera
          desenvolvimento sustentável ou funciona como <strong>enclave econômico</strong> — isto é,
          atividade que extrai riqueza local sem promover industrialização, diversificação produtiva
          ou melhoria das condições de vida da população local.
        </p>
        <p>
          A <strong>maldição dos recursos naturais</strong> (ou paradoxo da abundância) descreve o
          fenômeno em que países ricos em recursos minerais apresentam, paradoxalmente, menor
          crescimento econômico a longo prazo, maior desigualdade e instabilidade política. Exemplos
          incluem países da África Subsaariana ricos em diamantes e petróleo.
        </p>
        <p>
          O conceito de <strong>doença holandesa</strong> (Dutch Disease) descreve como a exportação
          intensa de commodities minerais pode valorizar a moeda nacional e desindustrializar o país,
          tornando os demais setores menos competitivos.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mineração e futuro</span>
        <h2>9. Minerais críticos e a transição energética</h2>
        <p>
          A transição para uma economia de baixo carbono paradoxalmente aumenta a demanda por
          minerais. Veículos elétricos, painéis solares, turbinas eólicas e baterias de
          armazenamento dependem intensamente de minerais como lítio, cobalto, níquel, cobre,
          manganês e terras raras.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Minerais críticos para a transição energética e principais usos</caption>
            <thead>
              <tr>
                <th>Mineral</th>
                <th>Uso na transição energética</th>
                <th>Principais produtores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lítio</td>
                <td>Baterias de íon-lítio (veículos elétricos)</td>
                <td>Austrália, Chile, Argentina</td>
              </tr>
              <tr>
                <td>Cobalto</td>
                <td>Cátodos de baterias</td>
                <td>Rep. Democrática do Congo</td>
              </tr>
              <tr>
                <td>Cobre</td>
                <td>Cabos elétricos, motores, painéis solares</td>
                <td>Chile, Peru, China</td>
              </tr>
              <tr>
                <td>Neodímio (terra rara)</td>
                <td>Ímãs para turbinas eólicas e motores</td>
                <td>China (domínio quase total)</td>
              </tr>
              <tr>
                <td>Silício</td>
                <td>Células fotovoltaicas</td>
                <td>China, Rússia, Brasil</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O Brasil aparece como potencial protagonista nesse cenário: possui reservas de lítio,
          grafite, nióbio e manganês, minerais estratégicos para a economia verde. O desafio é
          transformar essa vantagem comparativa em desenvolvimento industrial agregando valor à
          produção nacional.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              O Brasil detém mais de 90% das reservas mundiais de nióbio, mineral estratégico para
              a produção de aços especiais. As principais jazidas estão localizadas em Araxá (MG) e
              Catalão (GO). Com base nessa informação e nos conhecimentos sobre recursos minerais,
              assinale a alternativa que melhor explica por que o Brasil, apesar de sua riqueza
              mineral, ainda exporta predominantemente matéria-prima bruta e não produtos
              industrializados com maior valor agregado.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Porque os minerais brasileiros têm qualidade inferior aos de outros países, inviabilizando o beneficiamento.",
            },
            {
              letter: "b",
              text: "Porque a legislação brasileira proíbe a industrialização de minerais no território nacional.",
            },
            {
              letter: "c",
              text: "Porque a divisão internacional do trabalho histórica posicionou países em desenvolvimento como exportadores de commodities, com dificuldades estruturais para agregar valor na cadeia produtiva.",
              correct: true,
            },
            {
              letter: "d",
              text: "Porque o Brasil não possui tecnologia para construir indústrias de beneficiamento mineral.",
            },
            {
              letter: "e",
              text: "Porque a demanda internacional por minerais industrializados brasileiros é nula.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. A divisão internacional do trabalho, consolidada
              desde o período colonial, posicionou países como o Brasil como exportadores de
              matérias-primas. Mesmo após a independência, estruturas econômicas herdadas,
              dependência tecnológica e relações comerciais assimétricas dificultam a
              industrialização. Esse fenômeno está relacionado ao conceito de enclave econômico e à
              maldição dos recursos naturais, em que a abundância mineral não se converte
              automaticamente em desenvolvimento.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={
            <p>
              Em janeiro de 2019, o rompimento da barragem de rejeitos da Vale em Brumadinho (MG)
              causou a morte de 270 pessoas e devastou a bacia do Rio Paraopeba. O método de
              alteamento utilizado na barragem rompida foi o alteamento a montante. Considerando
              esse evento e a legislação posterior, analise as afirmativas:
              <br />
              <br />
              I. O método de alteamento a montante é o mais seguro entre os métodos construtivos de
              barragens de rejeito.
              <br />
              II. A Lei 14.066/2020 proibiu a construção de novas barragens com método de
              alteamento a montante e estabeleceu prazo para descomissionamento das existentes.
              <br />
              III. Os rejeitos de mineração são resíduos sem valor econômico gerados no processo de
              beneficiamento do minério.
              <br />
              <br />
              Estão corretas:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas II." },
            { letter: "c", text: "Apenas I e III." },
            { letter: "d", text: "Apenas II e III.", correct: true },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A alternativa correta é D (II e III). A afirmativa I é falsa: o alteamento a montante
              é considerado o método mais econômico, mas também o mais inseguro — foi proibido
              justamente por isso. A afirmativa II é verdadeira: a Lei 14.066/2020, aprovada após
              Brumadinho, proibiu novas barragens nesse método e exigiu a desativação das
              existentes. A afirmativa III é verdadeira: rejeitos são os resíduos do beneficiamento
              — o que sobra após a separação do mineral útil da ganga.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O conceito de "doença holandesa" (Dutch Disease) foi cunhado para descrever o impacto
              econômico sofrido pelos Países Baixos após a descoberta de vastas reservas de gás
              natural no Mar do Norte. Esse conceito é frequentemente aplicado à análise de
              economias exportadoras de commodities minerais. De acordo com esse conceito, uma
              economia afetada pela "doença holandesa" tende a:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Industrializar-se rapidamente graças à receita obtida com a exportação de recursos naturais.",
            },
            {
              letter: "b",
              text: "Valorizar sua moeda nacional e desindustrializar-se, pois outros setores perdem competitividade frente às importações.",
              correct: true,
            },
            {
              letter: "c",
              text: "Reduzir a desigualdade social, pois a riqueza mineral é distribuída uniformemente pela população.",
            },
            {
              letter: "d",
              text: "Desenvolver tecnologia avançada para agregar valor às suas exportações minerais.",
            },
            {
              letter: "e",
              text: "Diversificar sua matriz produtiva, tornando-se menos dependente das exportações minerais.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. A doença holandesa ocorre quando a intensa
              exportação de commodities (minerais, petróleo, agro) valoriza a moeda nacional. Com a
              moeda mais forte, as exportações de produtos industrializados ficam mais caras (menos
              competitivas) e as importações ficam mais baratas, o que desindustrializa o país. O
              setor exportador de commodities prospera, mas os demais setores produtivos enfraquecem.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 4"
          statement={
            <p>
              A transição energética global, impulsionada pela necessidade de reduzir emissões de
              gases de efeito estufa, paradoxalmente aumenta a demanda por determinados minerais.
              Analise o mapa mental abaixo e responda:
              <br />
              <br />
              "Um veículo elétrico padrão requer aproximadamente 6 vezes mais minerais que um veículo
              movido a combustão interna. Uma turbina eólica offshore pode conter até 3 toneladas de
              cobre e centenas de quilos de terras raras."
              <br />
              <br />
              Considerando essa realidade, qual é o principal desafio geopolítico associado à
              transição energética no que diz respeito aos recursos minerais?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A escassez total de minerais críticos, que tornará a transição energética inviável nas próximas décadas.",
            },
            {
              letter: "b",
              text: "A dependência de poucos países produtores para minerais estratégicos cria novas vulnerabilidades geopolíticas, podendo substituir a dependência do petróleo pela dependência de minerais críticos.",
              correct: true,
            },
            {
              letter: "c",
              text: "O fato de que os minerais necessários para a transição energética só existem em países ricos, excluindo os países em desenvolvimento desse processo.",
            },
            {
              letter: "d",
              text: "A impossibilidade técnica de reciclar minerais provenientes de baterias e painéis solares.",
            },
            {
              letter: "e",
              text: "A baixa demanda por minerais em tecnologias renováveis, que torna a mineração economicamente inviável.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. A transição energética cria novas dependências
              geopolíticas: assim como o mundo dependeu do petróleo do Oriente Médio no século XX,
              o século XXI pode ser marcado pela dependência de lítio da América do Sul (triângulo
              do lítio: Chile, Argentina e Bolívia), cobalto do Congo e terras raras da China. Essa
              concentração de produção confere enorme poder geopolítico a poucos países e pode
              gerar tensões e conflitos similares aos associados ao petróleo.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O garimpo ilegal na Terra Indígena Yanomami, no estado de Roraima, foi declarado
              emergência de saúde pública em 2023. A atividade garimpeira nessa área causa impactos
              múltiplos sobre as populações indígenas e o meio ambiente. Com base nos conhecimentos
              sobre mineração e seus impactos socioambientais, assinale a alternativa que apresenta
              CORRETAMENTE as consequências do garimpo ilegal em terras indígenas.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O garimpo ilegal promove o desenvolvimento econômico das comunidades indígenas, gerando emprego e renda para as populações locais.",
            },
            {
              letter: "b",
              text: "A única consequência negativa do garimpo é o desmatamento, sem impactos sobre a saúde das populações indígenas.",
            },
            {
              letter: "c",
              text: "O uso de mercúrio no garimpo de ouro contamina rios e peixes, provocando intoxicação (doença de Minamata) nas populações que dependem da pesca; além disso, causa desmatamento, violência e desorganização social.",
              correct: true,
            },
            {
              letter: "d",
              text: "O garimpo ilegal em terras indígenas é tolerado pela legislação brasileira quando praticado por pequenos garimpeiros individuais.",
            },
            {
              letter: "e",
              text: "A contaminação por mercúrio é facilmente reversível, e as populações se recuperam rapidamente após o fim das atividades garimpeiras.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. O garimpo de ouro usa mercúrio para amalgamar o
              mineral, e o descarte desse metal pesado nos rios contamina peixes e a água,
              intoxicando populações que dependem da pesca. A intoxicação por mercúrio causa danos
              neurológicos graves e irreversíveis (síndrome similar à doença de Minamata). Além
              disso, o garimpo ilegal em terras indígenas promove desmatamento, violência, invasão
              territorial e desestruturação cultural, configurando uma violação dos direitos
              indígenas protegidos pela Constituição Federal e pela Convenção 169 da OIT.
            </p>
          }
        />
      </section>
    </article>
  );
}
