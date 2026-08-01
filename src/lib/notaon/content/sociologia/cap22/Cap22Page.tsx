"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 22</span>
          <h1>Capitalismo, Consumo e Sociedade Contemporânea</h1>
          <p>
            O capitalismo não é um sistema imutável: ele se reinventou ao longo dos séculos,
            passando do comércio de especiarias à economia de dados e ao capitalismo de vigilância.
            Compreender suas fases, suas crises e a centralidade do consumo na vida social é
            essencial para interpretar questões do ENEM sobre desigualdade, cultura e globalização.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fases Históricas</span>
        <h2>1. As Fases do Capitalismo</h2>
        <p>
          O capitalismo emerge na Europa Ocidental a partir do século XV com a dissolução do
          feudalismo e a expansão marítima. Desde então, passou por ao menos quatro grandes
          fases, cada uma com uma lógica de acumulação distinta, novas tecnologias e formas
          de organizar a produção e o trabalho.
        </p>
        <p>
          Cada transição entre fases foi marcada por crises: a crise do capitalismo mercantil
          levou ao industrial; a crise do industrial levou ao financeiro; a crise do fordismo
          (anos 1970) levou ao neoliberalismo e ao toyotismo. As crises não destroem o
          capitalismo — o reconfiguram.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Período</th>
                <th>Características centrais</th>
                <th>Exemplo histórico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mercantil</strong></td>
                <td>Séc. XV – XVIII</td>
                <td>Acumulação via comércio, colonialismo, balança comercial favorável, metais preciosos</td>
                <td>Portugal e Espanha explorando colônias; Companhias das Índias</td>
              </tr>
              <tr>
                <td><strong>Industrial</strong></td>
                <td>Séc. XVIII – XIX</td>
                <td>Acumulação via produção fabril, máquina a vapor, proletariado urbano, mais-valia</td>
                <td>Fábricas têxteis de Manchester; mineração de carvão na Ruhr</td>
              </tr>
              <tr>
                <td><strong>Financeiro / Monopolista</strong></td>
                <td>Séc. XX</td>
                <td>Grandes conglomerados, imperialismo, fusão de capital bancário e industrial</td>
                <td>Standard Oil; crise de 1929; Bretton Woods; Plano Marshall</td>
              </tr>
              <tr>
                <td><strong>Informacional / Cognitivo</strong></td>
                <td>Séc. XXI</td>
                <td>Acumulação via dados, plataformas digitais, trabalho imaterial, financeirização extrema</td>
                <td>Google, Amazon, Meta; capitalismo de vigilância (Shoshana Zuboff)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Conceito-chave: mais-valia</h3>
          <p>
            Para Marx, a <strong>mais-valia</strong> é a diferença entre o valor que o trabalhador
            produz e o salário que recebe. É a fonte do lucro capitalista e a base da exploração.
            A mais-valia pode ser <strong>absoluta</strong> (aumentar a jornada de trabalho) ou
            <strong> relativa</strong> (aumentar a produtividade com tecnologia, mantendo a jornada).
            Na contemporaneidade, acrescenta-se a mais-valia <strong>digital</strong>: o valor
            gerado pelo trabalho gratuito dos usuários de plataformas (dados, conteúdo, atenção).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Welfare State</span>
        <h2>2. Estado de Bem-Estar Social: Origem e Crise</h2>
        <p>
          O <strong>Estado de Bem-Estar Social</strong> (<em>Welfare State</em>) é um modelo de
          organização político-econômica em que o Estado assume responsabilidade pela proteção
          social dos cidadãos: saúde universal, educação pública, previdência social, seguro-
          desemprego e habitação. Desenvolveu-se nos países capitalistas avançados após a Segunda
          Guerra Mundial, inspirado nas ideias do economista britânico <strong>John Maynard Keynes</strong>.
        </p>
        <p>
          O Welfare State foi possível pela combinação de quatro fatores: o trauma da Grande
          Depressão (1929) e da guerra; o crescimento econômico fordista; a pressão dos
          movimentos operários; e a rivalidade com o bloco soviético (os capitalistas precisavam
          mostrar que o capitalismo podia distribuir bem-estar). O período 1945–1973 ficou
          conhecido na França como <strong>"Trinta Gloriosos"</strong> — crescimento contínuo,
          pleno emprego e redução das desigualdades.
        </p>
        <p>
          A crise do petróleo de 1973 e a estagflação dos anos 1970 puseram em xeque o modelo
          keynesiano: crescimento lento com inflação alta não era previsto pela teoria. Isso abriu
          espaço para a crítica neoliberal, que identificava no intervencionismo estatal a causa
          dos problemas econômicos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Saúde universal</h3>
            <p>
              Sistema Nacional de Saúde britânico (NHS, 1948) como modelo: saúde gratuita para
              todos, independente de renda. No Brasil, o SUS (1988) é inspirado nesse modelo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Educação pública</h3>
            <p>
              Expansão da educação gratuita e universal como direito do cidadão e investimento
              no capital humano para o desenvolvimento econômico.
            </p>
          </div>
          <div className="lesson-card">
            <span>👴</span>
            <h3>Previdência social</h3>
            <p>
              Aposentadoria por contribuição e por idade como direito universal, não caridade.
              Proteção contra riscos da vida (doença, acidente, velhice).
            </p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Habitação social</h3>
            <p>
              Programas de construção de moradias populares subsidiadas; controle de aluguéis.
              No Brasil, programas como o "Minha Casa, Minha Vida" têm essa inspiração.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Neoliberalismo</span>
        <h2>3. Neoliberalismo e Reestruturação Produtiva</h2>
        <p>
          A partir dos anos 1970, a crise do petróleo e a estagflação puseram em xeque o Welfare
          State keynesiano. A resposta foi o <strong>neoliberalismo</strong>, que propõe a primazia
          do mercado sobre o Estado: privatizações, desregulamentação, redução de gastos sociais,
          abertura comercial e combate à inflação como prioridade absoluta.
        </p>
        <p>Os marcos políticos do neoliberalismo foram:</p>
        <ul>
          <li>
            <strong>Margaret Thatcher</strong> (Reino Unido, 1979): privatização de estatais
            (British Telecom, British Airways), combate a sindicatos, desregulamentação financeira.
          </li>
          <li>
            <strong>Ronald Reagan</strong> (EUA, 1981): corte de impostos para os ricos
            (supply-side economics / "Reaganomics"), enfraquecimento de sindicatos, aumento
            dos gastos militares.
          </li>
          <li>
            <strong>Consenso de Washington</strong> (1989): conjunto de recomendações do FMI e
            Banco Mundial — ajuste fiscal, privatizações, abertura comercial, desregulamentação.
          </li>
          <li>
            <strong>Brasil nos anos 1990</strong>: Plano Collor, privatização da Telebrás e Vale
            do Rio Doce, abertura comercial, Plano Real (1994).
          </li>
        </ul>

        <div className="lesson-highlight">
          <h3>Crítica ao neoliberalismo: David Harvey</h3>
          <p>
            David Harvey (<em>Breve História do Neoliberalismo</em>, 2005) argumenta que o
            neoliberalismo não foi apenas política econômica, mas um <strong>projeto de
            classe</strong> para restaurar o poder das elites econômicas após os ganhos
            distributivos do pós-guerra. Dados do World Inequality Lab mostram que, após
            quarenta anos de neoliberalismo, a desigualdade de renda aumentou expressivamente
            nos países que adotaram essas políticas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Consumo e Sociedade</span>
        <h2>4. O Consumo Como Fenômeno Social</h2>
        <p>
          O consumo não é apenas uma necessidade econômica — é também um fenômeno{" "}
          <strong>social, simbólico e cultural</strong>. Diversas teorias sociológicas buscam
          compreender por que compramos o que compramos — e o que esse comportamento revela
          sobre a estrutura social.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎩</span>
            <h3>Veblen — Consumo Conspícuo</h3>
            <p>
              Thorstein Veblen (<em>A Teoria da Classe Ociosa</em>, 1899) identificou que a
              classe ociosa consome para <strong>exibir status</strong> e distinção social.
              Comprar bens caros sinaliza posição hierárquica, não apenas supre necessidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔣</span>
            <h3>Baudrillard — Consumo de Signos</h3>
            <p>
              Jean Baudrillard (<em>A Sociedade de Consumo</em>, 1970) propõe que consumimos
              <strong> signos</strong>, não objetos. A Nike não vende tênis: vende vitória
              e identidade. Os objetos são substituídos por seus simulacros.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Bourdieu — Capital e Distinção</h3>
            <p>
              Pierre Bourdieu (<em>A Distinção</em>, 1979) mostra como o <strong>gosto</strong>
              é socialmente construído. Gostos musicais, culinários e estéticos refletem a
              posição de classe e funcionam como <strong>capital cultural</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Bauman — Modernidade Líquida</h3>
            <p>
              Zygmunt Bauman descreve a <strong>identidade-mercadoria</strong>: na modernidade
              líquida, a identidade é construída e descartada como produtos. Somos o que
              consumimos — e precisamos consumir para existir socialmente.
            </p>
          </div>
        </div>

        <p>
          O sociólogo George Ritzer cunhou o conceito de <strong>McDonaldização da sociedade</strong>:
          a lógica do fast food (eficiência, calculabilidade, previsibilidade, controle) se
          expande para todos os âmbitos da vida — turismo, educação, saúde, entretenimento.
          Produtos e serviços se tornam padronizados e intercambiáveis em escala global.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Consumismo</span>
        <h2>5. Crítica ao Consumismo: Obsolescência e Endividamento</h2>
        <p>
          O <strong>consumismo</strong> — consumo excessivo, compulsivo e além das necessidades —
          é sustentado por mecanismos específicos criados pelo capitalismo para garantir demanda
          contínua. O mais importante é a <strong>obsolescência programada</strong>: produtos
          são projetados para durar pouco e precisar de substituição em curto prazo — como
          smartphones com bateria não substituível e eletrodomésticos com componentes que param
          de ser fabricados após poucos anos.
        </p>
        <p>
          A <strong>obsolescência percebida</strong> (ou simbólica) é ainda mais eficaz: o
          produto continua funcionando, mas é apresentado como "desatualizado" ou "fora de moda".
          A indústria da moda é o exemplo mais claro: coleções são lançadas em ciclos cada vez
          mais curtos (o <em>fast fashion</em>), criando a pressão constante de renovação do
          guarda-roupa mesmo que as roupas antigas estejam em bom estado.
        </p>
        <p>
          O consumismo tem consequências sociais graves: em 2023, mais de 70% das famílias
          brasileiras estavam endividadas (CNC — Confederação Nacional do Comércio), com o
          cartão de crédito como principal modalidade. O endividamento crônico aprisiona
          famílias num ciclo de consumo subsidiado por juros — e o Brasil tem taxas de juros
          entre as mais altas do mundo.
        </p>

        <div className="lesson-highlight">
          <h3>Alternativas: consumo consciente e decrescimento</h3>
          <p>
            Movimentos como o <strong>consumo consciente</strong>, o <strong>slow fashion</strong>,
            a <strong>economia circular</strong> e o <strong>decrescimento</strong> (Serge Latouche)
            questionam a equação "crescimento = bem-estar" e propõem padrões de vida mais
            sustentáveis e equitativos. A economia circular propõe que resíduos de um processo
            se tornem insumos de outro, eliminando o descarte. O decrescimento propõe a redução
            deliberada da produção e do consumo como caminho para a sustentabilidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Capitalismo Digital</span>
        <h2>6. Capitalismo de Plataforma e Economia de Dados</h2>
        <p>
          O <strong>capitalismo de plataforma</strong> é a forma dominante do capitalismo no
          século XXI: empresas como Google, Amazon, Facebook/Meta, Apple e Microsoft (as "Big
          Tech") criaram plataformas digitais que intermediam transações entre usuários,
          acumulando poder de mercado e dados em escala sem precedente.
        </p>
        <p>
          A pesquisadora <strong>Shoshana Zuboff</strong>, em <em>A Era do Capitalismo de
          Vigilância</em> (2018), argumenta que as Big Tech desenvolveram um novo modelo de
          negócios: a <strong>extração de dados comportamentais</strong> dos usuários para
          prever e modificar seu comportamento, vendendo esses dados para anunciantes e
          governos. Os usuários são ao mesmo tempo consumidores, produtos e trabalhadores
          gratuitos (gerando o conteúdo que atrai outros usuários).
        </p>
        <p>
          O economista <strong>Nick Srnicek</strong>, em <em>Capitalismo de Plataforma</em>
          (2016), identifica diferentes tipos de plataformas: plataformas de anúncio (Google,
          Facebook), plataformas de nuvem (AWS, Azure), plataformas industriais (GE Digital),
          plataformas de produto (Apple, Microsoft) e plataformas enxutas (Uber, Airbnb — que
          terceirizam todos os ativos físicos). Todas têm em comum o controle de dados e
          a tendência ao monopólio.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Tipo de plataforma</th>
                <th>Produto real</th>
                <th>Modelo de extração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td>Anúncio / Busca</td>
                <td>Atenção do usuário</td>
                <td>Dados comportamentais para publicidade direcionada</td>
              </tr>
              <tr>
                <td>Meta (Facebook/Instagram)</td>
                <td>Redes sociais</td>
                <td>Atenção e dados relacionais</td>
                <td>Perfis psicológicos para publicidade e influência política</td>
              </tr>
              <tr>
                <td>Amazon</td>
                <td>Comércio / Nuvem</td>
                <td>Logística e infraestrutura digital</td>
                <td>Dados de compra e precificação dinâmica</td>
              </tr>
              <tr>
                <td>Uber</td>
                <td>Enxuta / Trabalho</td>
                <td>Intermediação de serviços</td>
                <td>Extração de valor do trabalho de motoristas sem vínculo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Globalização</span>
        <h2>7. Globalização: Economia, Cultura e Críticas</h2>
        <p>
          A <strong>globalização</strong> é o processo de integração econômica, política, cultural
          e social em escala planetária, acelerado pela revolução das comunicações (internet,
          satélites) e pela liberalização comercial (OMC, blocos econômicos). Tem múltiplas
          dimensões: a globalização econômica (fluxos de capital, comércio e investimento); a
          cultural (circulação de produtos culturais, modas, valores); a política (ONU, FMI,
          acordos multilaterais) e a tecnológica (internet, redes sociais).
        </p>
        <p>
          O sociólogo <strong>Boaventura de Sousa Santos</strong> distingue
          <strong> globalização hegemônica</strong> (imposta pelos países ricos e pelas
          corporações transnacionais) de <strong>globalização contra-hegemônica</strong>
          (movimentos sociais, ONGs e redes de solidariedade que usam a globalização para
          resistir a seus efeitos perversos). O Fórum Social Mundial (Porto Alegre, 2001)
          foi um exemplo de globalização contra-hegemônica: "Um outro mundo é possível."
        </p>
        <p>
          As críticas à globalização vêm de perspectivas opostas: a esquerda critica a
          concentração de poder nas corporações transnacionais, a destruição de empregos
          industriais nos países ricos e a exploração dos países pobres; a direita nacionalista
          critica a perda de soberania nacional e o impacto cultural da homogeneização global.
          A globalização produz <strong>glocalização</strong> (Robertson): culturas locais
          absorvem e reinterpretam elementos globais, gerando hibridizações culturais.
        </p>

        <div className="lesson-highlight">
          <h3>Dependência e imperialismo</h3>
          <p>
            As teorias da dependência (Raúl Prebisch, Celso Furtado, Ruy Mauro Marini)
            argumentam que a integração do Brasil e da América Latina à economia mundial
            não foi livre e igualitária: foi estruturada como periférica, exportadora de
            matérias-primas e importadora de produtos industrializados. A deterioração dos
            termos de troca (os preços das commodities caem em relação aos manufaturados)
            condena os países periféricos a uma posição subordinada permanente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Global</span>
        <h2>8. Desigualdade Global no Capitalismo Contemporâneo</h2>
        <p>
          O capitalismo contemporâneo produziu riqueza sem precedente na história humana — e
          também concentrou essa riqueza de forma sem precedente. O relatório anual da Oxfam
          mostra que, em 2023, os 1% mais ricos do mundo possuem mais riqueza que os 99%
          restantes combinados. Nos EUA, os 0,1% mais ricos detêm mais riqueza que os 80%
          mais pobres juntos.
        </p>
        <p>
          O economista <strong>Thomas Piketty</strong>, em <em>O Capital no Século XXI</em>
          (2013), demonstrou com dados históricos que a desigualdade de riqueza tende a crescer
          no capitalismo quando a taxa de retorno do capital (r) supera a taxa de crescimento
          econômico (g): r &gt; g. Isso ocorre porque o capital se acumula mais rápido do que
          a economia cresce — e a solução proposta por Piketty é um imposto global sobre o
          patrimônio, de difícil implementação política.
        </p>
        <p>
          No Brasil, o país entre os mais desiguais do mundo: o Índice de Gini brasileiro está
          entre os mais altos globalmente (0,53 em 2022, segundo o IBGE). O 1% mais rico do
          Brasil recebe cerca de 28% de toda a renda nacional (World Inequality Lab). Essa
          desigualdade é produto de séculos de escravidão, concentração fundiária e exclusão
          de grupos historicamente marginalizados.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>País / Região</th>
                <th>Índice de Gini</th>
                <th>Interpretação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Países escandinavos</td>
                <td>~0,27–0,30</td>
                <td>Baixa desigualdade: políticas redistributivas fortes</td>
              </tr>
              <tr>
                <td>França</td>
                <td>~0,33</td>
                <td>Desigualdade moderada; Welfare State ativo</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>~0,41</td>
                <td>Desigualdade alta para país desenvolvido; neoliberalismo</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>~0,53</td>
                <td>Muito alta; um dos mais desiguais do mundo</td>
              </tr>
              <tr>
                <td>África do Sul</td>
                <td>~0,63</td>
                <td>O mais desigual do mundo; herança do apartheid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Impactos Ambientais</span>
        <h2>9. Capitalismo, Consumismo e Crise Ambiental</h2>
        <p>
          O capitalismo industrial e o consumismo de massa são as principais forças motrizes
          da crise ambiental contemporânea: mudanças climáticas, perda de biodiversidade,
          poluição do ar, da água e do solo, e esgotamento de recursos naturais. A lógica
          capitalista de crescimento contínuo é estruturalmente incompatível com os limites
          planetários.
        </p>
        <p>
          O conceito de <strong>Antropoceno</strong> — época geológica marcada pela ação humana
          como força dominante na biosfera — sintetiza essa crise. O físico Johan Rockström
          identificou nove <strong>limites planetários</strong> que definem o espaço seguro para
          a humanidade: o capitalismo contemporâneo já ultrapassou ao menos seis deles, incluindo
          as mudanças climáticas, a perda de biodiversidade e os ciclos de nitrogênio e fósforo.
        </p>
        <p>
          O <strong>fast fashion</strong> é um exemplo concreto: a indústria têxtil é a segunda
          mais poluidora do mundo. Produz 20% dos efluentes industriais de água poluída globalmente;
          uma camiseta de algodão consome 2.700 litros de água para ser produzida; marcas como
          Shein lançam dezenas de milhar de modelos por semana. Trabalhadores em Bangladesh
          ganham menos de US$ 3 por dia costurando peças vendidas a US$ 80 nas capitais europeias.
        </p>

        <div className="lesson-highlight">
          <h3>Justiça ambiental e racismo ambiental</h3>
          <p>
            A crise ambiental não afeta a todos igualmente: comunidades pobres e negras sofrem
            desproporcionalmente os piores impactos ambientais — poluição industrial, falta de
            saneamento, risco de desastres. O conceito de <strong>racismo ambiental</strong>
            (Robert Bullard) e de <strong>justiça ambiental</strong> articulam a dimensão racial
            e de classe das desigualdades ambientais. Populações indígenas e quilombolas são
            as mais ameaçadas pelo avanço do agronegócio e do garimpo ilegal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alternativas</span>
        <h2>10. Alternativas ao Capitalismo Contemporâneo</h2>
        <p>
          Diante das contradições do capitalismo — desigualdade, crise ambiental, precarização
          do trabalho, crises financeiras recorrentes — surgem propostas de alternativas que
          variam desde reformas dentro do sistema até projetos de transformação mais radical.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Economia solidária</h3>
            <p>
              Cooperativas, associações e empreendimentos autogestionários que organizam a
              produção com base na democracia, solidariedade e sustentabilidade, não no lucro.
              No Brasil, o movimento de economia solidária foi impulsionado pelo governo Lula
              (SENAES, 2003).
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Decrescimento</h3>
            <p>
              Proposta de Serge Latouche: redução deliberada da produção e do consumo nos
              países ricos como condição de sustentabilidade global. Questiona o PIB como
              medida de bem-estar e propõe outros indicadores (felicidade, tempo livre,
              saúde ambiental).
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Renda básica universal</h3>
            <p>
              Transferência universal de renda para todos os cidadãos, independente de trabalho
              ou renda. Proposta como resposta à automação e à precarização. Experimentos
              realizados na Finlândia, Quênia e em vários municípios brasileiros.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Economia circular</h3>
            <p>
              Modelo que elimina o desperdício ao projetar produtos para serem reutilizados,
              reparados e reciclados. Resíduos de um processo tornam-se insumos de outro.
              Alternativa à lógica linear extrair–produzir–descartar.
            </p>
          </div>
        </div>

        <p>
          O debate sobre alternativas ao capitalismo ganha urgência diante das crises
          simultâneas: climática, de desigualdade, democrática e de saúde pública (como a
          pandemia de Covid-19 demonstrou). O economista <strong>Mariana Mazzucato</strong>
          propõe um "Estado empreendedor" que dirija o investimento para missões públicas
          (descarbonização, saúde, educação), recuperando o papel ativo do Estado na
          orientação da economia — uma alternativa ao neoliberalismo que não rejeita o mercado,
          mas o subordina ao interesse público.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Fases do capitalismo"
          statement={
            <p>
              O período histórico marcado pela expansão ultramarina europeia, pelo comércio de
              especiarias e pelo acúmulo de metais preciosos corresponde à fase do capitalismo
              denominada:
            </p>
          }
          options={[
            { letter: "A", text: "Capitalismo industrial" },
            { letter: "B", text: "Capitalismo financeiro" },
            { letter: "C", text: "Capitalismo mercantil", correct: true },
            { letter: "D", text: "Capitalismo informacional" },
            { letter: "E", text: "Capitalismo monopolista" },
          ]}
          resolution={
            <p>
              O <strong>capitalismo mercantil</strong> (séc. XV–XVIII) caracteriza-se pela
              acumulação de riqueza via comércio, exploração colonial e ênfase nos metais
              preciosos (mercantilismo). As demais opções referem-se a fases históricas posteriores,
              marcadas pela indústria, pelas finanças e pela informação, respectivamente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Neoliberalismo e Consenso de Washington"
          statement={
            <p>
              O Consenso de Washington (1989) foi um conjunto de medidas recomendado por
              organismos como FMI e Banco Mundial aos países em desenvolvimento. Assinale
              a alternativa que apresenta corretamente as principais diretrizes desse consenso.
            </p>
          }
          options={[
            { letter: "A", text: "Ampliação do Estado, nacionalizações e aumento do salário mínimo" },
            { letter: "B", text: "Ajuste fiscal, privatizações, abertura comercial e desregulamentação", correct: true },
            { letter: "C", text: "Reforma agrária, subsídios agrícolas e protecionismo industrial" },
            { letter: "D", text: "Controle estatal da taxa de câmbio e expansão do crédito público" },
            { letter: "E", text: "Fortalecimento de sindicatos e ampliação da previdência social" },
          ]}
          resolution={
            <p>
              O Consenso de Washington preconizava: disciplina fiscal, redução de gastos públicos,
              reforma tributária, liberalização financeira, abertura comercial,{" "}
              <strong>privatizações</strong> e desregulamentação — o oposto das políticas
              keynesianas do Welfare State. Foi amplamente aplicado na América Latina nos anos 1990.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Veblen e o consumo conspícuo"
          statement={
            <p>
              Thorstein Veblen, ao analisar a "classe ociosa" no final do século XIX,
              desenvolveu o conceito de consumo conspícuo. Esse conceito se refere a:
            </p>
          }
          options={[
            { letter: "A", text: "Consumo de bens de primeira necessidade por camadas populares" },
            { letter: "B", text: "Compra de produtos por impulso emocional sem utilidade prática" },
            { letter: "C", text: "Aquisição de bens para demonstrar status e distinção social", correct: true },
            { letter: "D", text: "Boicote coletivo a marcas que violam direitos trabalhistas" },
            { letter: "E", text: "Consumo sustentável baseado em necessidades reais" },
          ]}
          resolution={
            <p>
              Para Veblen, a classe ociosa consome de forma <strong>conspícua</strong> (visível,
              ostensiva) para sinalizar sua posição social elevada. O consumo é um ato de
              comunicação social e de distinção, não apenas econômico. A compra de um relógio
              de R$ 50.000 cumpre função de status, não de medir o tempo com mais precisão.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Baudrillard e a sociedade de consumo"
          statement={
            <p>
              Jean Baudrillard argumenta que, na sociedade contemporânea, consumimos
              fundamentalmente signos, e não objetos em si. A afirmação "ao comprar um tênis
              de marca famosa, o consumidor adquire muito mais do que calçado" ilustra:
            </p>
          }
          options={[
            { letter: "A", text: "A teoria marxista da mais-valia e da exploração do trabalho" },
            { letter: "B", text: "O conceito durkheimiano de solidariedade orgânica" },
            { letter: "C", text: "A lógica weberiana de racionalização das escolhas econômicas" },
            { letter: "D", text: "O consumo de signos, em que o produto carrega identidade, status e pertencimento", correct: true },
            { letter: "E", text: "A crítica de Veblen ao consumo de subsistência das classes populares" },
          ]}
          resolution={
            <p>
              Baudrillard distingue o valor de uso, o valor de troca e o <strong>valor-signo</strong>.
              Na sociedade de consumo, o que realmente circula são significados simbólicos:
              ao comprar uma Nike, o consumidor compra associações de vitória, esportividade e
              pertencimento a um estilo de vida. Os objetos são substituídos por seus simulacros —
              imagens sem referente real.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Fast fashion e impactos socioambientais"
          statement={
            <p>
              <em>"A indústria da moda produz 20% dos efluentes industriais de água poluída
              globalmente. Uma única camiseta de algodão consome até 2.700 litros de água para
              ser produzida. Trabalhadores em Bangladesh ganham menos de US$ 3 por dia costurando
              peças vendidas a US$ 80 nas capitais europeias."</em>
              <br /><br />
              O trecho acima evidencia, do ponto de vista sociológico:
            </p>
          }
          options={[
            { letter: "A", text: "A eficiência da divisão internacional do trabalho que beneficia igualmente ricos e pobres" },
            { letter: "B", text: "A superação das contradições do capitalismo pela globalização comercial" },
            { letter: "C", text: "A articulação entre exploração do trabalho, degradação ambiental e desigualdade global no capitalismo contemporâneo", correct: true },
            { letter: "D", text: "O avanço tecnológico como solução para os problemas socioambientais do consumo" },
            { letter: "E", text: "A irrelevância do consumo como objeto de análise sociológica" },
          ]}
          resolution={
            <p>
              O texto une três dimensões: a <strong>exploração do trabalho</strong> (baixos salários
              no Sul Global), o <strong>impacto ambiental</strong> (água, poluição) e a
              <strong> desigualdade global</strong> (lucro concentrado no Norte). Isso ilustra como
              o capitalismo contemporâneo produz riqueza e miséria simultaneamente — tema central
              da crítica marxista e das teorias do desenvolvimento desigual e combinado.
            </p>
          }
        />
      </section>
    </article>
  );
}
