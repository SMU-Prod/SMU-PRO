"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 34</span>
          <h1>Organismos internacionais: ONU, FMI, Banco Mundial, OMC e OTAN</h1>
          <p>
            Os organismos internacionais são instituições criadas por acordos entre Estados soberanos para
            regular aspectos específicos da vida internacional — desde a manutenção da paz e segurança até
            o comércio, as finanças e o desenvolvimento econômico. Criados em grande parte no contexto do
            pós-Segunda Guerra Mundial, esses organismos refletem a tentativa das nações de construir uma
            ordem mundial baseada em regras, cooperação e multilateralismo. Compreender seu funcionamento,
            limites e contradições é fundamental para entender a geopolítica contemporânea.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arquitetura global</span>
        <h2>1. A ordem multilateral do pós-guerra</h2>
        <p>
          O fim da Segunda Guerra Mundial (1945) deixou um mundo devastado e uma humanidade determinada a
          evitar novos conflitos em escala global. Desse contexto surgiram as principais instituições
          multilaterais: a ONU, o FMI, o Banco Mundial e, posteriormente, o GATT (que evoluiu para a OMC)
          e a OTAN. Essas instituições formam o arcabouço da "ordem liberal internacional" ou "ordem de
          Bretton Woods" (referência à conferência de 1944 em New Hampshire, EUA, que definiu o sistema
          financeiro internacional).
        </p>
        <p>
          Essa arquitetura reflete a correlação de forças do pós-guerra: os EUA e as potências ocidentais
          detêm poder desproporcional nas instituições criadas. Por isso, países emergentes como China,
          Índia e Brasil têm pressionado por reformas que ampliem sua representatividade — e criado
          alternativas paralelas, como o Novo Banco de Desenvolvimento (BRICS) e o Banco Asiático de
          Investimento em Infraestrutura (China).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais organismos internacionais e suas funções</caption>
            <thead>
              <tr>
                <th>Organismo</th>
                <th>Fundação</th>
                <th>Sede</th>
                <th>Função principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ONU</td>
                <td>1945</td>
                <td>Nova York, EUA</td>
                <td>Paz e segurança internacionais; direitos humanos; desenvolvimento</td>
              </tr>
              <tr>
                <td>FMI</td>
                <td>1944 (Bretton Woods)</td>
                <td>Washington, EUA</td>
                <td>Estabilidade financeira; empréstimos a países com dificuldades cambiais</td>
              </tr>
              <tr>
                <td>Banco Mundial</td>
                <td>1944 (Bretton Woods)</td>
                <td>Washington, EUA</td>
                <td>Financiamento do desenvolvimento; redução da pobreza</td>
              </tr>
              <tr>
                <td>OMC</td>
                <td>1995 (sucedeu o GATT de 1947)</td>
                <td>Genebra, Suíça</td>
                <td>Regulação do comércio internacional; resolução de disputas</td>
              </tr>
              <tr>
                <td>OTAN</td>
                <td>1949</td>
                <td>Bruxelas, Bélgica</td>
                <td>Aliança militar de defesa coletiva do Ocidente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Paz e segurança</span>
        <h2>2. ONU: a Organização das Nações Unidas</h2>
        <p>
          A ONU foi criada em 1945, com 51 membros fundadores, após a dissolução da Liga das Nações (que
          fracassou em prevenir a Segunda Guerra Mundial). Atualmente conta com 193 Estados-membros —
          praticamente todos os países reconhecidos do mundo. Sua Carta estabelece como propósitos
          fundamentais: manter a paz e a segurança internacionais, desenvolver relações amistosas entre
          nações, promover a cooperação internacional e harmonizar ações dos Estados.
        </p>
        <p>
          A estrutura da ONU inclui seis órgãos principais: a Assembleia Geral (onde todos os membros têm
          voto igual), o Conselho de Segurança (15 membros, 5 permanentes com poder de veto), o Conselho
          Econômico e Social (ECOSOC), a Corte Internacional de Justiça (CIJ), o Secretariado e o Conselho
          de Tutela (inativo). Os cinco membros permanentes do Conselho de Segurança — EUA, Rússia, China,
          Reino Unido e França — detêm poder de veto sobre qualquer resolução, o que frequentemente paralisa
          a organização diante de conflitos envolvendo essas potências.
        </p>
        <p>
          A ONU coordena dezenas de agências especializadas: UNICEF (crianças), UNESCO (educação e cultura),
          OMS (saúde), FAO (alimentação), ACNUR (refugiados), PNUD (desenvolvimento), OIT (trabalho), entre
          outras. Essas agências realizam trabalho humanitário e de desenvolvimento fundamental, mesmo quando
          o braço político da ONU está paralisado.
        </p>
      </section>

      {/* ── SVG Figure 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#f0f9ff" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Estrutura da ONU
          </text>

          {/* Assembleia Geral */}
          <rect x="10" y="50" width="120" height="65" rx="8" fill="#3b82f6" />
          <text x="70" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">ASSEMBLEIA</text>
          <text x="70" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">GERAL</text>
          <text x="70" y="107" textAnchor="middle" fontSize="9" fill="#bfdbfe">193 membros; 1 voto cada</text>

          {/* Conselho de Segurança */}
          <rect x="145" y="50" width="130" height="65" rx="8" fill="#ef4444" />
          <text x="210" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">CONSELHO DE</text>
          <text x="210" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">SEGURANÇA</text>
          <text x="210" y="107" textAnchor="middle" fontSize="9" fill="#fecaca">5 permanentes + 10 rotativos</text>

          {/* Secretariado */}
          <rect x="290" y="50" width="120" height="65" rx="8" fill="#10b981" />
          <text x="350" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">SECRETARIADO</text>
          <text x="350" y="91" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">-GERAL</text>
          <text x="350" y="107" textAnchor="middle" fontSize="9" fill="#a7f3d0">Chefe administrativo</text>

          {/* Corte Internacional */}
          <rect x="425" y="50" width="165" height="65" rx="8" fill="#8b5cf6" />
          <text x="507" y="69" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">CORTE</text>
          <text x="507" y="84" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">INTERNACIONAL</text>
          <text x="507" y="99" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">DE JUSTIÇA</text>
          <text x="507" y="109" textAnchor="middle" fontSize="9" fill="#ddd6fe">Haia, Holanda</text>

          {/* Membros P5 */}
          <rect x="70" y="150" width="460" height="55" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="300" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">
            P5 — Membros Permanentes com VETO
          </text>
          <text x="300" y="191" textAnchor="middle" fontSize="11" fill="#92400e">
            EUA · Rússia · China · Reino Unido · França
          </text>

          {/* Agências */}
          <rect x="20" y="230" width="550" height="55" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="300" y="252" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
            Agências Especializadas
          </text>
          <text x="300" y="270" textAnchor="middle" fontSize="10" fill="#475569">
            UNICEF · UNESCO · OMS · FAO · ACNUR · PNUD · OIT · AIEA · ONUDI
          </text>
        </svg>
        <figcaption>Estrutura simplificada da Organização das Nações Unidas e seus principais órgãos</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Finanças globais</span>
        <h2>3. FMI: Fundo Monetário Internacional</h2>
        <p>
          O Fundo Monetário Internacional foi criado em 1944, na Conferência de Bretton Woods, e entrou em
          funcionamento em 1945. Seu objetivo original era estabilizar o sistema monetário internacional,
          baseado no padrão dólar-ouro estabelecido na conferência. Após o colapso desse padrão em 1971
          (quando Nixon suspendeu a conversibilidade do dólar em ouro), o FMI adaptou suas funções.
        </p>
        <p>
          Hoje, o FMI atua principalmente como "emprestador de última instância" para países com dificuldades
          no balanço de pagamentos — quando um país não tem reservas suficientes para pagar suas importações e
          dívidas externas. Os empréstimos do FMI vêm acompanhados de "condicionalidades" — reformas
          econômicas exigidas do país tomador, geralmente incluindo cortes nos gastos públicos, privatizações,
          liberalização comercial e cambial, e aumento de juros. Essas políticas, chamadas de "ajuste
          estrutural", foram amplamente criticadas por aumentar o desemprego e a pobreza nos países
          beneficiários.
        </p>
        <p>
          A estrutura de votos do FMI reflete o peso econômico dos países: os EUA possuem cerca de 17% dos
          votos — suficiente para vetar decisões que exigem 85% de aprovação. Os países em desenvolvimento
          pressionam por uma reforma do sistema de cotas que amplie sua representatividade, mas as negociações
          têm avançado lentamente.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento</span>
        <h2>4. Banco Mundial: financiamento do desenvolvimento</h2>
        <p>
          O Banco Mundial também nasceu em Bretton Woods e, inicialmente, tinha como missão financiar a
          reconstrução dos países devastados pela Segunda Guerra Mundial. Com o tempo, seu foco deslocou-se
          para o financiamento do desenvolvimento econômico e a redução da pobreza nos países mais pobres.
        </p>
        <p>
          O grupo Banco Mundial é composto por cinco instituições, sendo as principais o BIRD (Banco
          Internacional para Reconstrução e Desenvolvimento), que empresta a países de renda média, e a
          AID (Associação Internacional de Desenvolvimento), que oferece condições mais favoráveis a países
          de baixa renda. Assim como o FMI, o Banco Mundial tem sido criticado pelas condicionalidades
          impostas aos seus empréstimos e pelos modelos de desenvolvimento que projetou — frequentemente
          baseados em megaprojetos de infraestrutura e liberalização econômica.
        </p>
        <p>
          O Banco Mundial publica relatórios influentes sobre a economia global, incluindo o relatório anual
          "Doing Business" (suspenso em 2021 após escândalos sobre manipulação de dados) e o relatório de
          Desenvolvimento Mundial. Por tradição, o presidente do Banco Mundial é indicado pelos EUA.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comércio livre</span>
        <h2>5. OMC: Organização Mundial do Comércio</h2>
        <p>
          A Organização Mundial do Comércio (OMC) foi criada em 1995 para substituir o GATT (Acordo Geral
          sobre Tarifas e Comércio), de 1947. Enquanto o GATT era apenas um acordo, a OMC é uma organização
          formal com personalidade jurídica internacional. Sua sede fica em Genebra, na Suíça, e conta com
          164 membros.
        </p>
        <p>
          A OMC estabelece as regras do comércio internacional, negocia a redução de barreiras comerciais
          (tarifas, cotas, subsídios) e oferece mecanismo de solução de controvérsias para disputas entre
          países. O princípio fundamental é o da "nação mais favorecida" — qualquer vantagem comercial
          concedida a um país deve ser estendida a todos os membros.
        </p>
        <p>
          A OMC tem enfrentado crises significativas. As negociações da Rodada Doha (iniciada em 2001 com
          foco no desenvolvimento) estão paralisadas há décadas, sem consenso entre países desenvolvidos e
          em desenvolvimento sobre subsídios agrícolas. Os EUA sob Trump (e depois Biden) paralisaram o
          órgão de apelação da OMC ao bloquear a nomeação de novos juízes. As guerras comerciais EUA-China
          desafiam os fundamentos da ordem comercial multilateral.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Princípios fundamentais da OMC</caption>
            <thead>
              <tr>
                <th>Princípio</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nação Mais Favorecida (NMF)</td>
                <td>Benefício concedido a um membro deve ser estendido a todos</td>
                <td>Se EUA reduzem tarifa para o Japão, devem fazer o mesmo para todos os membros da OMC</td>
              </tr>
              <tr>
                <td>Tratamento Nacional</td>
                <td>Produtos importados devem receber tratamento igual aos nacionais após entrada</td>
                <td>Impostos internos não podem discriminar produtos estrangeiros</td>
              </tr>
              <tr>
                <td>Transparência</td>
                <td>Membros devem publicar suas políticas comerciais</td>
                <td>Notificação de novos subsídios ou tarifas</td>
              </tr>
              <tr>
                <td>Reciprocidade</td>
                <td>Concessões comerciais são negociadas mutuamente</td>
                <td>Rodadas de negociação multilateral</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG Figure 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="280" fill="#f8fafc" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            OTAN: Expansão desde 1949
          </text>

          {/* Linha do tempo */}
          <line x1="50" y1="150" x2="560" y2="150" stroke="#cbd5e1" strokeWidth="3" />

          {/* 1949 - Fundação */}
          <circle cx="80" cy="150" r="14" fill="#1e40af" />
          <text x="80" y="175" textAnchor="middle" fontSize="10" fill="#475569">1949</text>
          <text x="80" y="113" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">12</text>
          <text x="80" y="127" textAnchor="middle" fontSize="10" fill="#1e293b">membros</text>
          <text x="80" y="141" textAnchor="middle" fontSize="9" fill="#64748b">fundadores</text>

          {/* 1952 */}
          <circle cx="160" cy="150" r="10" fill="#3b82f6" />
          <text x="160" y="173" textAnchor="middle" fontSize="10" fill="#475569">1952</text>
          <text x="160" y="113" textAnchor="middle" fontSize="9" fill="#1e293b">+Grécia</text>
          <text x="160" y="126" textAnchor="middle" fontSize="9" fill="#1e293b">+Turquia</text>

          {/* 1982 */}
          <circle cx="240" cy="150" r="10" fill="#3b82f6" />
          <text x="240" y="173" textAnchor="middle" fontSize="10" fill="#475569">1982</text>
          <text x="240" y="113" textAnchor="middle" fontSize="9" fill="#1e293b">+Espanha</text>

          {/* 1999 */}
          <circle cx="330" cy="150" r="13" fill="#ef4444" />
          <text x="330" y="175" textAnchor="middle" fontSize="10" fill="#475569">1999</text>
          <text x="330" y="110" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Leste</text>
          <text x="330" y="124" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Europeu</text>
          <text x="330" y="138" textAnchor="middle" fontSize="9" fill="#64748b">Polônia, Hungria...</text>

          {/* 2004 */}
          <circle cx="420" cy="150" r="13" fill="#ef4444" />
          <text x="420" y="175" textAnchor="middle" fontSize="10" fill="#475569">2004</text>
          <text x="420" y="110" textAnchor="middle" fontSize="9" fill="#1e293b">+7 países</text>
          <text x="420" y="124" textAnchor="middle" fontSize="9" fill="#1e293b">ex-soviéticos</text>
          <text x="420" y="138" textAnchor="middle" fontSize="9" fill="#1e293b">e balcânicos</text>

          {/* 2022-2024 */}
          <circle cx="520" cy="150" r="15" fill="#10b981" />
          <text x="520" y="177" textAnchor="middle" fontSize="10" fill="#475569">2022-24</text>
          <text x="520" y="110" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="bold">Finlândia</text>
          <text x="520" y="124" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="bold">+ Suécia</text>
          <text x="520" y="138" textAnchor="middle" fontSize="9" fill="#1e293b">32 membros</text>

          <text x="300" y="240" textAnchor="middle" fontSize="11" fill="#64748b">
            A expansão da OTAN em direção ao Leste é uma das causas citadas pela Rússia para a invasão da Ucrânia
          </text>
        </svg>
        <figcaption>Expansão da OTAN desde sua criação em 1949 até os 32 membros atuais (2024)</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aliança militar</span>
        <h2>6. OTAN: a aliança militar do Ocidente</h2>
        <p>
          A Organização do Tratado do Atlântico Norte (OTAN) foi criada em 1949, no contexto da Guerra
          Fria, como aliança de defesa coletiva das democracias ocidentais contra a ameaça soviética. Seu
          artigo 5 estabelece o princípio da defesa coletiva: um ataque a um membro é considerado ataque
          a todos. Esse artigo foi invocado pela primeira vez em setembro de 2001, após os atentados nos
          EUA.
        </p>
        <p>
          Após o fim da Guerra Fria, questionou-se a razão de existir da OTAN. Ao invés de se dissolver,
          a aliança expandiu-se progressivamente para o Leste Europeu, absorvendo ex-membros do Pacto de
          Varsóvia (aliança militar soviética) e repúblicas ex-soviéticas. Essa expansão foi vista por
          Moscou como violação de compromissos informais feitos no momento da reunificação alemã e como
          ameaça à segurança russa — argumento central na justificativa russa para a invasão da Ucrânia
          em 2022.
        </p>
        <p>
          A guerra na Ucrânia revitalizou a OTAN: a aliança recebeu as adesões históricas de Finlândia
          (2023) e Suécia (2024), países que mantinham neutralidade desde a Segunda Guerra Mundial. Com 32
          membros, a OTAN representa a maior aliança militar da história. Os EUA respondem por mais de 70%
          dos gastos militares do bloco — tensão permanente, pois outros membros são pressionados a atingir
          a meta de 2% do PIB em gastos de defesa.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crise do multilateralismo</span>
        <h2>7. Limites e críticas aos organismos internacionais</h2>
        <p>
          Os organismos internacionais enfrentam críticas sistêmicas de diferentes perspectivas. Para os
          países em desenvolvimento, a estrutura de poder das instituições de Bretton Woods (FMI e Banco
          Mundial) reflete a ordem mundial do pós-guerra e não representa adequadamente as economias
          emergentes. As condicionalidades impostas pelos empréstimos do FMI foram associadas a crises
          sociais graves, como na Argentina (2001) e na Grécia (2010-2015).
        </p>
        <p>
          O Conselho de Segurança da ONU é frequentemente paralisado pelo veto das potências permanentes.
          A Rússia vetou resoluções sobre a Síria e a Ucrânia; os EUA vetaram resoluções sobre Israel.
          Essa paralisia levou a críticas sobre a eficácia da ONU na manutenção da paz — objetivo central
          da organização.
        </p>
        <p>
          A OMC enfrenta o desafio de acomodar um mundo cada vez mais protecionista. As guerras comerciais
          entre EUA e China, os subsídios agrícolas dos países ricos que prejudicam agricultores dos países
          pobres, e as disputas sobre propriedade intelectual (especialmente vacinas) revelam os limites
          do sistema de livre comércio que a organização representa.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Críticas aos principais organismos internacionais</caption>
            <thead>
              <tr>
                <th>Organismo</th>
                <th>Crítica principal</th>
                <th>Exemplo concreto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ONU</td>
                <td>Paralisia pelo veto no Conselho de Segurança</td>
                <td>Veto russo bloqueou resoluções sobre Síria e Ucrânia</td>
              </tr>
              <tr>
                <td>FMI</td>
                <td>Condicionalidades geram recessão e aumento da pobreza</td>
                <td>Crise argentina 2001; austeridade grega 2010-2015</td>
              </tr>
              <tr>
                <td>Banco Mundial</td>
                <td>Modelos de desenvolvimento inadequados para países pobres</td>
                <td>Projetos de infraestrutura com impactos ambientais e sociais negativos</td>
              </tr>
              <tr>
                <td>OMC</td>
                <td>Subsídios agrícolas dos países ricos prejudicam agricultores pobres</td>
                <td>Rodada Doha paralisada há décadas</td>
              </tr>
              <tr>
                <td>OTAN</td>
                <td>Instrumento de política externa dos EUA; provoca insegurança na Rússia</td>
                <td>Expansão ao Leste Europeu como causa da guerra na Ucrânia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reforma e futuro</span>
        <h2>8. O debate sobre a reforma dos organismos internacionais</h2>
        <p>
          A reforma das instituições multilaterais é um debate permanente nas relações internacionais.
          No caso da ONU, discute-se principalmente a ampliação do Conselho de Segurança, com a inclusão
          de novos membros permanentes — Brasil, Alemanha, Japão e Índia são os principais candidatos —
          e a limitação ou eliminação do direito de veto. No entanto, os P5 não têm interesse em diluir
          seu poder, o que torna qualquer reforma extremamente difícil.
        </p>
        <p>
          No FMI e no Banco Mundial, a pressão é por uma redistributção das cotas de votação em favor das
          economias emergentes, especialmente China, Índia, Brasil e outros países em desenvolvimento. Uma
          reforma de cotas foi aprovada em 2010, mas sua implementação foi bloqueada pelo Congresso
          americano por anos. Em 2015, após pressão chinesa (que havia criado o Banco Asiático de
          Investimento em Infraestrutura como alternativa), a reforma foi finalmente ratificada.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil no mundo</span>
        <h2>9. O Brasil nos organismos internacionais</h2>
        <p>
          O Brasil é membro fundador da ONU e tem participado ativamente de operações de manutenção da paz,
          especialmente na MINUSTAH (Haiti, 2004-2017), onde liderou a missão militar. O país candidatou-se
          a um assento permanente no Conselho de Segurança reformado, mas essa aspiração encontra resistências
          de Argentina, México e países europeus.
        </p>
        <p>
          No FMI e no Banco Mundial, o Brasil pertence ao grupo de países com maior peso relativo, mas ainda
          insuficiente para exercer influência decisiva. O país também é membro da OMC e participou
          ativamente das negociações da Rodada Doha, liderando o grupo G20 agrícola (diferente do G20
          de cúpula) que pressionou pelos países em desenvolvimento.
        </p>
        <p>
          O Brasil não é membro da OTAN e adota posição de não-alinhamento nas disputas militares. A
          participação brasileira no BRICS e no G20 reflete a estratégia de inserção internacional do
          país — buscar protagonismo nos fóruns multilaterais enquanto defende a reforma da ordem
          internacional.
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
              O Conselho de Segurança da ONU é o órgão responsável pela manutenção da paz e segurança
              internacionais. Sobre sua composição e funcionamento, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Todos os 193 membros da ONU têm assento permanente no Conselho de Segurança." },
            { letter: "b", text: "O Conselho é composto por 5 membros permanentes com direito de veto e 10 membros rotativos, eleitos pela Assembleia Geral.", correct: true },
            { letter: "c", text: "As decisões do Conselho de Segurança requerem unanimidade de todos os membros para entrar em vigor." },
            { letter: "d", text: "O Brasil possui assento permanente no Conselho de Segurança desde a fundação da ONU." },
            { letter: "e", text: "O direito de veto pode ser exercido por qualquer membro do Conselho de Segurança." },
          ]}
          resolution={
            <p>
              O Conselho de Segurança da ONU é composto por 15 membros: 5 permanentes (P5: EUA, Rússia,
              China, Reino Unido e França) com direito de veto, e 10 membros não-permanentes eleitos pela
              Assembleia Geral por mandatos de 2 anos. O veto é prerrogativa exclusiva dos P5 — qualquer
              um deles pode bloquear uma resolução. O Brasil não possui assento permanente; é um dos países
              que mais frequentemente ocupou cadeiras rotativas, mas candidata-se a membro permanente em
              uma eventual reforma do Conselho.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O FMI e o Banco Mundial foram criados na Conferência de Bretton Woods em 1944. Embora ambos
              sejam instituições financeiras internacionais, suas funções são distintas. Qual alternativa
              descreve corretamente a diferença entre eles?
            </p>
          }
          options={[
            { letter: "a", text: "O FMI financia projetos de infraestrutura em países pobres, enquanto o Banco Mundial regula o câmbio internacional." },
            { letter: "b", text: "O FMI é voltado para estabilidade monetária e empréstimos a países com crises no balanço de pagamentos, enquanto o Banco Mundial financia projetos de desenvolvimento e redução da pobreza.", correct: true },
            { letter: "c", text: "O FMI é uma instituição europeia, enquanto o Banco Mundial é controlado pelos países em desenvolvimento." },
            { letter: "d", text: "Ambos têm a mesma função, diferenciando-se apenas pelo tamanho dos empréstimos que concedem." },
            { letter: "e", text: "O Banco Mundial regula o comércio internacional, enquanto o FMI supervisiona as políticas fiscais nacionais." },
          ]}
          resolution={
            <p>
              O FMI tem função de estabilização: atua como "emprestador de última instância" para países
              com crises no balanço de pagamentos (quando um país não consegue honrar suas obrigações em
              moeda estrangeira). Seus empréstimos vêm com condicionalidades (reformas estruturais).
              O Banco Mundial, por sua vez, financia projetos de desenvolvimento de longo prazo — infraestrutura,
              saúde, educação, meio ambiente — nos países mais pobres, com o objetivo de reduzir a pobreza.
              Ambos têm sede em Washington e são dominados pelos EUA e países ricos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A OTAN foi criada em 1949 como aliança de defesa coletiva durante a Guerra
              Fria. Após o fim do conflito bipolar em 1991, a aliança não se dissolveu — ao contrário,
              expandiu-se progressivamente para o Leste Europeu. Essa expansão é mencionada como uma das
              causas do conflito entre Rússia e Ucrânia. Qual interpretação geopolítica melhor explica
              essa questão?
            </p>
          }
          options={[
            { letter: "a", text: "A OTAN expandiu-se para o Leste como forma de incluir a Rússia numa grande aliança pan-europeia." },
            { letter: "b", text: "Para a Rússia, a expansão da OTAN representa uma ameaça à sua segurança e zona de influência histórica, enquanto para os países do Leste Europeu representa proteção contra a possível agressão russa.", correct: true },
            { letter: "c", text: "A expansão da OTAN foi um processo puramente econômico, sem implicações militares ou de segurança." },
            { letter: "d", text: "Os países do Leste Europeu foram forçados pelos EUA a aderir à OTAN, contrariando a vontade de suas populações." },
            { letter: "e", text: "A OTAN expandiu-se apenas para cumprir acordos formais firmados entre as superpotências no fim da Guerra Fria." },
          ]}
          resolution={
            <p>
              A expansão da OTAN para o Leste Europeu é lida de formas opostas por diferentes atores.
              Para a Rússia, representa um cerco estratégico que viola compromissos informais dos anos 1990
              e ameaça sua segurança. Para os países da Europa Central e Oriental (Polônia, repúblicas
              bálticas etc.), a adesão à OTAN é uma conquista soberana que garante proteção contra o
              que percebem como imperialismo russo. Esse choque de perspectivas está no centro da crise
              ucraniana e ilustra como a geopolítica envolve interpretações conflitantes sobre segurança,
              soberania e influência regional.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A OMC enfrenta crises que questionam o modelo de livre comércio multilateral. Uma das
              críticas dos países em desenvolvimento é sobre os subsídios agrícolas dos países ricos.
              Por que essa questão é considerada injusta pelos países em desenvolvimento?
            </p>
          }
          options={[
            { letter: "a", text: "Porque os subsídios agrícolas dos países ricos reduzem o preço dos alimentos no mercado internacional, beneficiando consumidores pobres em todo o mundo." },
            { letter: "b", text: "Porque os subsídios tornam a produção agrícola dos países ricos artificialmente mais barata, prejudicando a competitividade dos produtores dos países em desenvolvimento que não têm recursos para subsidiar da mesma forma.", correct: true },
            { letter: "c", text: "Porque os subsídios são exclusivamente para a exportação de produtos industriais, prejudicando a importação de tecnologia pelos países em desenvolvimento." },
            { letter: "d", text: "Porque a OMC proíbe qualquer tipo de subsídio e os países ricos violam abertamente as regras da organização." },
            { letter: "e", text: "Porque os subsídios agrícolas dos países ricos são reinvestidos em colonização econômica dos países em desenvolvimento." },
          ]}
          resolution={
            <p>
              Os subsídios agrícolas (especialmente dos EUA e da UE) reduzem o custo de produção dos
              agricultores desses países, permitindo que vendam seus produtos abaixo do preço de mercado.
              Isso torna os produtos agrícolas dos países em desenvolvimento não competitivos — mesmo sendo
              produzidos a menor custo sem subsídios. O resultado é que produtores brasileiros, africanos
              ou asiáticos perdem mercado para produtos subsidiados dos países ricos, aprofundando a
              desigualdade no comércio global. Esse tema foi central nas negociações da Rodada Doha da OMC.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A criação do Novo Banco de Desenvolvimento (NBD) pelos países do BRICS e do Banco Asiático
              de Investimento em Infraestrutura (BAII) pela China são frequentemente interpretados como
              desafios à ordem institucional estabelecida em Bretton Woods. Qual a interpretação
              geopolítica mais adequada desse fenômeno?
            </p>
          }
          options={[
            { letter: "a", text: "Representam iniciativas que visam simplesmente duplicar as funções do FMI e do Banco Mundial, sem qualquer motivação geopolítica." },
            { letter: "b", text: "Refletem a insatisfação das potências emergentes com a sub-representação nos organismos de Bretton Woods e a busca por alternativas que ampliem sua autonomia e influência nas finanças internacionais.", correct: true },
            { letter: "c", text: "São projetos exclusivamente econômicos, sem qualquer dimensão política ou geopolítica, voltados apenas para o financiamento de infraestrutura." },
            { letter: "d", text: "Representam a tentativa de substituir completamente e imediatamente o FMI e o Banco Mundial por instituições controladas pela China." },
            { letter: "e", text: "São iniciativas aprovadas e incentivadas pelos EUA como forma de ampliar o alcance das instituições financeiras internacionais." },
          ]}
          resolution={
            <p>
              A criação do NBD (BRICS) e do BAII (China) reflete a frustração das potências emergentes com
              a lentidão das reformas no FMI e no Banco Mundial, que mantêm o peso desproporcional dos países
              ocidentais. Ao criar alternativas, esses países buscam: reduzir a dependência do dólar e das
              condicionalidades ocidentais; ampliar sua influência geopolítica via financiamento de países
              em desenvolvimento; e pressionar as instituições existentes a aceitar reformas. Não há intenção
              imediata de substituir as instituições de Bretton Woods, mas de criar um sistema paralelo que
              aumente a barganha das economias emergentes na ordem financeira global.
            </p>
          }
        />
      </section>
    </article>
  );
}
