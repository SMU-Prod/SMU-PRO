"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 17</span>
          <h1>Desigualdade Social no Brasil e no Mundo</h1>
          <p>
            Os oito homens mais ricos do mundo possuem a mesma riqueza que a metade mais
            pobre da humanidade. Entender como essa desigualdade se forma, se mede, se reproduz
            e pode ser combatida é central para a análise sociológica contemporânea e para o ENEM.
            A desigualdade não é natural — é produto de relações sociais históricas que podem
            ser transformadas por escolhas políticas coletivas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito e Medidas</span>
        <h2>1. Como Medir a Desigualdade? Indicadores e Limites</h2>
        <p>
          A desigualdade social não é simplesmente a existência de diferenças — é a
          distribuição sistematicamente injusta de recursos, oportunidades e poder.
          Para mensurá-la, as Ciências Sociais utilizam diferentes indicadores, cada um
          capturando uma dimensão específica do problema. Nenhum índice isolado é suficiente
          para descrever a desigualdade em toda sua complexidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>O que mede</th>
                <th>Escala / Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Índice de Gini</strong></td>
                <td>Concentração de renda</td>
                <td>0 (igualdade perfeita) a 1 (máxima desigualdade)</td>
              </tr>
              <tr>
                <td><strong>IDH</strong></td>
                <td>Renda, saúde e educação combinados</td>
                <td>0 a 1 (quanto maior, melhor); elaborado pelo PNUD</td>
              </tr>
              <tr>
                <td><strong>Razão 10/40</strong></td>
                <td>Renda dos 10% mais ricos ÷ renda dos 40% mais pobres</td>
                <td>Quanto maior o valor, mais desigual o país</td>
              </tr>
              <tr>
                <td><strong>Linha de pobreza</strong></td>
                <td>Percentual abaixo de um limiar de renda mínima</td>
                <td>Banco Mundial: US$ 2,15/dia (extrema pobreza)</td>
              </tr>
              <tr>
                <td><strong>Coeficiente de Palma</strong></td>
                <td>Renda dos 10% mais ricos ÷ renda dos 40% mais pobres</td>
                <td>Alternativa ao Gini, mais sensível aos extremos</td>
              </tr>
              <tr>
                <td><strong>IPM</strong></td>
                <td>Pobreza multidimensional (saúde, educação, padrão de vida)</td>
                <td>PNUD/Oxford; supera a limitação da renda isolada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Gini: como funciona?</h3>
          <p>
            O Índice de Gini é calculado a partir da <em>Curva de Lorenz</em>: quanto mais
            distante a curva real da linha de igualdade perfeita (diagonal de 45°), maior
            o Gini. Um Gini de 0,52 (como o Brasil) significa que a distribuição de renda
            está muito afastada da igualdade, mas esse número não diz <em>onde</em> ocorre
            a concentração — por isso o Coeficiente de Palma, que foca nos extremos, é
            complementar e frequentemente mais revelador.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raízes Históricas</span>
        <h2>2. Desigualdade no Brasil: Raízes Estruturais</h2>
        <p>
          A desigualdade brasileira tem raízes históricas estruturais que antecedem o
          capitalismo industrial e se reproduzem até hoje em novas formas. Compreender
          essas raízes é fundamental para não tratar a desigualdade como fenômeno natural
          ou inevitável — ela é resultado de escolhas históricas e de relações de poder.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⛓️</span>
            <h3>Escravidão (1500–1888)</h3>
            <p>O Brasil foi o último país a abolir a escravidão no hemisfério ocidental. Mais de 4 milhões de africanos foram escravizados. A abolição se deu sem indenização, terra ou política de inclusão para os ex-escravizados.</p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Concentração fundiária</h3>
            <p>A estrutura fundiária colonial (sesmarias → latifúndios) nunca foi revertida por uma reforma agrária ampla. O Brasil tem um dos maiores índices de Gini de terra do mundo — o agronegócio coexiste com sem-terras.</p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Urbanização desigual</h3>
            <p>A industrialização do século XX atraiu populações rurais, mas não foi acompanhada de habitação digna, gerando favelas e periferias sem infraestrutura básica em todas as grandes cidades.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Exclusão educacional</h3>
            <p>O acesso à educação de qualidade permaneceu restrito às elites por décadas. A universalização do ensino fundamental ocorreu apenas nos anos 1990, consolidando décadas de transmissão intergeracional da pobreza.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados Atuais</span>
        <h2>3. A Desigualdade Brasileira em Números</h2>
        <p>
          Apesar de melhorias nas últimas décadas, o Brasil permanece entre os países mais
          desiguais do mundo. Os dados da PNADC (Pesquisa Nacional por Amostra de Domicílios
          Contínua) do IBGE e relatórios da FGV revelam uma estrutura de distribuição de renda
          persistentemente concentrada no topo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Participação na renda (aprox. 2022)</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1% mais ricos</td>
                <td>≈ 28% da renda nacional</td>
                <td>Mais do que os 50% mais pobres juntos</td>
              </tr>
              <tr>
                <td>10% mais ricos</td>
                <td>≈ 43% da renda nacional</td>
                <td>Concentração extrema no topo</td>
              </tr>
              <tr>
                <td>50% do meio</td>
                <td>≈ 22% da renda nacional</td>
                <td>"Classe média" com fatia relativamente pequena</td>
              </tr>
              <tr>
                <td>40% mais pobres</td>
                <td>≈ 7% da renda nacional</td>
                <td>Maioria da população com fatia mínima</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A desigualdade brasileira tem também dimensão racial: a renda média de pessoas
          brancas é cerca de 74% maior que a de pessoas pretas e pardas. Mulheres negras
          representam o grupo com menor renda média — evidenciando a intersecção de
          classe, raça e gênero na produção da desigualdade.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Global</span>
        <h2>4. Desigualdade no Mundo: Norte Global vs. Sul Global</h2>
        <p>
          A desigualdade não é apenas interna aos países — ela se reproduz entre nações.
          A divisão <strong>Norte Global / Sul Global</strong> reflete assimetrias históricas
          de riqueza e poder que remontam ao colonialismo: os países que colonizaram e
          saquearam recursos de outros acumularam riqueza que financiou sua industrialização;
          os colonizados ficaram com economias dependentes da exportação de matérias-primas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>País</th>
                <th>Gini (aprox.)</th>
                <th>IDH (2022)</th>
                <th>Renda per capita (US$)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Noruega</td>
                <td>0,26</td>
                <td>0,966</td>
                <td>~106.000</td>
              </tr>
              <tr>
                <td>Dinamarca</td>
                <td>0,28</td>
                <td>0,952</td>
                <td>~68.000</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>0,41</td>
                <td>0,921</td>
                <td>~76.000</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>0,52</td>
                <td>0,760</td>
                <td>~10.000</td>
              </tr>
              <tr>
                <td>Índia</td>
                <td>0,35</td>
                <td>0,644</td>
                <td>~2.400</td>
              </tr>
              <tr>
                <td>África do Sul</td>
                <td>0,63</td>
                <td>0,713</td>
                <td>~6.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Teoria da dependência</h3>
          <p>
            Para teóricos como <strong>Ruy Mauro Marini</strong> e <strong>Celso Furtado</strong>,
            a pobreza dos países periféricos não é ausência de desenvolvimento, mas resultado de uma
            inserção subordinada no capitalismo global: exportam matéria-prima barata e importam
            produtos industrializados caros, transferindo riqueza para os países centrais.
            Essa é a chamada <strong>teoria da dependência</strong>, formulada na América Latina
            nos anos 1960–70.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade e Democracia</span>
        <h2>5. Desigualdade, Poder Político e Democracia</h2>
        <p>
          A desigualdade econômica extrema ameaça a democracia. Quando uma minúscula elite
          concentra riqueza desproporcional, ela tende a converter esse poder econômico em
          poder político — financiando campanhas, controlando meios de comunicação, contratando
          lobistas e influenciando políticas públicas em seu favor. O resultado é que a
          democracia formal (igual direito de votar) coexiste com uma <strong>plutocracia</strong>
          real (o poder político segue o poder econômico).
        </p>
        <p>
          O economista <strong>Thomas Piketty</strong>, em <em>O Capital no Século XXI</em>
          (2013), demonstrou que, quando a taxa de retorno do capital (r) supera a taxa de
          crescimento econômico (g) — como tem ocorrido na maioria dos países capitalistas —,
          a desigualdade tende a crescer naturalmente, concentrando riqueza nas mãos de
          herdeiros e rentistas. A herança retorna como principal motor da desigualdade,
          revertendo os progressos igualitários do século XX.
        </p>
        <div className="lesson-highlight">
          <h3>Oxfam e a desigualdade global</h3>
          <p>
            Relatórios anuais da <strong>Oxfam</strong> revelam o grau extremo da concentração
            global: em 2023, os 1% mais ricos do mundo possuíam mais riqueza do que os 95%
            restantes juntos. A pandemia de Covid-19 (2020–2022) aprofundou essas disparidades:
            enquanto bilionários viram suas fortunas crescerem em trilhões de dólares, centenas
            de milhões de pessoas retrocederam para a pobreza extrema.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Racismo e Desigualdade</span>
        <h2>6. Racismo Estrutural e Desigualdade Racial no Brasil</h2>
        <p>
          O <strong>racismo estrutural</strong>, conceito desenvolvido por <strong>Silvio Almeida</strong>
          no Brasil, refere-se ao conjunto de práticas, normas, instituições e representações que
          produzem sistematicamente desvantagens para pessoas negras em todas as esferas da vida social
          — mesmo sem intenção discriminatória explícita. O racismo não é apenas um conjunto de
          atitudes individuais preconceituosas: é uma estrutura social que organiza a distribuição
          de oportunidades e recursos.
        </p>
        <p>
          Os dados são inequívocos: pessoas negras têm menor renda, menor acesso à educação de
          qualidade, menor representação no poder político e nas empresas, maior exposição à
          violência policial e maior mortalidade em praticamente todos os indicadores de saúde.
          Essas desigualdades não são explicáveis por diferenças de esforço ou mérito — são
          produto de séculos de escravidão, seguidos de exclusão sistemática sem políticas de
          reparação adequadas.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Renda</h3>
            <p>
              Renda média de pessoas brancas é 74% maior que a de pessoas negras. Mulheres negras
              têm a menor renda média entre todos os grupos raciais e de gênero.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Educação</h3>
            <p>
              Jovens negros têm taxas de conclusão do ensino médio e ensino superior
              significativamente menores, mesmo após as políticas de cotas (que
              reduziram parcialmente essa brecha).
            </p>
          </div>
          <div className="lesson-card">
            <span>🔫</span>
            <h3>Violência</h3>
            <p>
              75% das vítimas de homicídio no Brasil são negras. A violência policial
              mata desproporcionalmente jovens negros nas periferias — o que o IPEA
              documenta como "genocídio negro".
            </p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Habitação</h3>
            <p>
              Segregação espacial: famílias negras são maioria nas favelas e periferias,
              com menor acesso a saneamento, transporte e serviços públicos de qualidade.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade de Gênero</span>
        <h2>7. Desigualdade de Gênero no Mercado de Trabalho e na Sociedade</h2>
        <p>
          A desigualdade de gênero é uma das formas mais persistentes e multidimensionais
          de desigualdade social. No mercado de trabalho, mulheres ganham em média menos
          que homens para funções equivalentes (a chamada <strong>"brecha salarial de gênero"</strong>),
          têm menor representação em cargos de liderança, e enfrentam o <strong>"teto de vidro"</strong>
          — barreira simbólica e estrutural que impede sua ascensão ao topo das hierarquias
          organizacionais.
        </p>
        <p>
          Além da desigualdade no trabalho remunerado, as mulheres realizam a maior parte do
          trabalho doméstico e de cuidado não remunerado — a chamada <strong>dupla jornada</strong>.
          No Brasil, mulheres dedicam em média 21 horas semanais ao trabalho doméstico não
          remunerado, contra 11 horas dos homens. Esse trabalho não entra no PIB, mas é
          fundamental para a reprodução da sociedade — e sua invisibilização econômica
          é uma forma de exploração.
        </p>
        <div className="lesson-highlight">
          <h3>Feminização da pobreza</h3>
          <p>
            As mulheres, especialmente mães solteiras, mulheres negras e idosas, constituem
            proporção crescente dos grupos mais pobres — fenômeno chamado de{" "}
            <strong>feminização da pobreza</strong>. No Brasil, 68% dos domicílios em extrema
            pobreza chefiados por mulheres não têm renda do trabalho. A desigualdade de gênero
            e a desigualdade de classe se reforçam mutuamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Políticas Redistributivas</span>
        <h2>8. Como Combater a Desigualdade? Instrumentos e Debates</h2>
        <p>
          A Sociologia e a Economia identificam diferentes mecanismos de redução
          da desigualdade, que atuam em diferentes dimensões do problema. Não existe
          uma solução única — a redução sustentável da desigualdade exige políticas
          multidimensionais e de longo prazo.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💵</span>
            <h3>Transferência de renda</h3>
            <p>Programas como o Bolsa Família/Auxílio Brasil transferem renda diretamente às famílias mais pobres, com contrapartidas de saúde e educação. Comprovadamente eficazes no curto prazo.</p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Progressividade fiscal</h3>
            <p>Imposto de renda progressivo (quem ganha mais paga proporcionalmente mais). No Brasil, a tributação é historicamente regressiva — pesa mais sobre consumo do que sobre patrimônio e renda do capital.</p>
          </div>
          <div className="lesson-card">
            <span>🏫</span>
            <h3>Políticas de acesso</h3>
            <p>Expansão do ensino público de qualidade, cotas nas universidades, saúde universal (SUS) e habitação social reduzem desigualdades de oportunidade e rompem a reprodução intergeracional da pobreza.</p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Reforma agrária</h3>
            <p>Redistribuição de terras improdutivas, fundamental para reduzir desigualdades rurais — historicamente bloqueada no Brasil pela pressão política do latifúndio no Congresso Nacional.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Ambiental</span>
        <h2>9. Desigualdade Ambiental e Racismo Ambiental</h2>
        <p>
          A desigualdade social tem uma dimensão ambiental frequentemente negligenciada:
          os efeitos da degradação ambiental — poluição do ar e da água, enchentes, calor
          extremo, contaminação por agrotóxicos — recaem desproporcionalmente sobre as
          populações mais pobres e sobre comunidades negras, indígenas e periféricas.
          Esse fenômeno é chamado de <strong>racismo ambiental</strong> ou
          <strong>injustiça ambiental</strong>.
        </p>
        <p>
          No Brasil, as favelas e periferias urbanas são construídas em áreas de risco —
          encostas, margens de rios, zonas de alagamento — porque são os únicos espaços
          acessíveis para famílias de baixa renda. Quando chegam as chuvas intensas,
          são essas populações que sofrem as enchentes e deslizamentos. As chaminés das
          indústrias poluentes ficam nos bairros operários, não nos bairros ricos.
          Comunidades indígenas são as primeiras afetadas pelo desmatamento e pela
          mineração ilegal.
        </p>
        <div className="lesson-highlight">
          <h3>Mudanças climáticas e desigualdade</h3>
          <p>
            As mudanças climáticas são um amplificador de desigualdades: os países mais
            pobres do mundo — os que menos contribuíram para as emissões históricas de
            gases de efeito estufa — serão os mais afetados pelas suas consequências.
            Dentro dos países, as populações mais pobres têm menor capacidade de adaptação
            (não podem se mudar, comprar ar-condicionado, pagar por sistemas de proteção).
            A justiça climática é inseparável da justiça social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perspectivas Teóricas</span>
        <h2>10. Teorias Sociológicas sobre a Desigualdade</h2>
        <p>
          As principais correntes da Sociologia oferecem perspectivas distintas sobre a origem,
          a natureza e as possibilidades de transformação da desigualdade social. Conhecer
          essas perspectivas é fundamental para compreender os debates contemporâneos sobre
          políticas públicas e justiça social.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Perspectiva</th>
                <th>Autor(es) de referência</th>
                <th>Origem da desigualdade</th>
                <th>Solução proposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Funcionalismo</td>
                <td>Talcott Parsons, Davis &amp; Moore</td>
                <td>Desigualdade é funcional — remunera funções mais importantes</td>
                <td>Meritocracia e igualdade de oportunidades</td>
              </tr>
              <tr>
                <td>Marxismo</td>
                <td>Marx, Engels, Gramsci</td>
                <td>Exploração do trabalho; extração de mais-valia pela burguesia</td>
                <td>Abolição da propriedade privada dos meios de produção</td>
              </tr>
              <tr>
                <td>Weberianismo</td>
                <td>Weber, Dahrendorf</td>
                <td>Multidimensional: classe, status e poder se articulam</td>
                <td>Democratização do acesso a recursos e poder</td>
              </tr>
              <tr>
                <td>Teoria crítica</td>
                <td>Horkheimer, Adorno, Habermas</td>
                <td>Razão instrumental; colonização do mundo vivido pelo capital</td>
                <td>Emancipação pelo diálogo e pela esfera pública</td>
              </tr>
              <tr>
                <td>Pós-colonial</td>
                <td>Fanon, Quijano, Mbembe</td>
                <td>Colonialismo como fundamento da desigualdade global</td>
                <td>Decolonização epistêmica e política</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A perspectiva funcionalista de Davis e Moore (1945) argumentava que a desigualdade
          é necessária para motivar os indivíduos a ocupar posições mais exigentes e importantes.
          Essa visão é amplamente criticada: ignora as desigualdades de partida, confunde
          mérito com privilégio herdado, e naturaliza uma hierarquia social que beneficia
          os que já estão no topo.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Índice de Gini"
          statement={<p>O Índice de Gini é amplamente utilizado para medir a desigualdade social. Um país com Gini igual a 0 teria:</p>}
          options={[
            { letter: "A", text: "Toda a renda concentrada em apenas uma pessoa." },
            { letter: "B", text: "Metade da população sem renda alguma." },
            { letter: "C", text: "Distribuição perfeitamente igualitária da renda entre todos os habitantes.", correct: true },
            { letter: "D", text: "Inexistência de classes sociais de qualquer tipo." },
            { letter: "E", text: "Um sistema econômico baseado exclusivamente na solidariedade." },
          ]}
          resolution={<p>O Gini varia de 0 a 1: 0 representa igualdade perfeita (todos têm a mesma renda) e 1 representa desigualdade máxima (uma pessoa concentra toda a renda). O Brasil, com Gini em torno de 0,52, está muito distante do ideal igualitário — entre os mais desiguais do mundo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Raízes da desigualdade brasileira"
          statement={<p>A desigualdade social no Brasil tem raízes históricas profundas. Qual das alternativas a seguir <strong>melhor</strong> explica a persistência histórica dessa desigualdade?</p>}
          options={[
            { letter: "A", text: "A falta de capacidade dos brasileiros pobres de aproveitarem as oportunidades disponíveis." },
            { letter: "B", text: "A escravidão, a concentração fundiária e a exclusão educacional que perpetuaram desigualdades estruturais ao longo de séculos.", correct: true },
            { letter: "C", text: "A ausência de recursos naturais que impede o crescimento econômico sustentado." },
            { letter: "D", text: "A cultura brasileira que valoriza o ócio em detrimento do trabalho produtivo." },
            { letter: "E", text: "A globalização, que é o único fator responsável pelo aumento da desigualdade no país." },
          ]}
          resolution={<p>A desigualdade brasileira é estrutural: a escravidão (abolida sem indenização ou inclusão dos ex-escravizados), a concentração fundiária herdada do período colonial e a exclusão histórica da educação de qualidade criaram e reproduziram abismos sociais que nenhuma geração conseguiu superar completamente. Essas raízes históricas são fundamentais para compreender a persistência da desigualdade.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Teoria da dependência"
          statement={<p>A teoria da dependência, desenvolvida por autores como Celso Furtado e Ruy Mauro Marini, argumenta que a pobreza dos países periféricos como o Brasil:</p>}
          options={[
            { letter: "A", text: "É resultado exclusivo de fatores climáticos e geográficos desfavoráveis." },
            { letter: "B", text: "Decorre da preguiça e da falta de empreendedorismo da população local." },
            { letter: "C", text: "É produto de uma inserção subordinada no capitalismo global, que transfere riqueza dos países periféricos para os centrais.", correct: true },
            { letter: "D", text: "Seria superada apenas por meio de isolamento econômico e autossuficiência total." },
            { letter: "E", text: "É temporária e será naturalmente superada pelo livre mercado, sem intervenção estatal." },
          ]}
          resolution={<p>A teoria da dependência explica que o subdesenvolvimento não é uma fase natural do desenvolvimento, mas o resultado de uma estrutura global que beneficia os países centrais: os periféricos exportam commodities baratas e importam produtos industrializados caros, gerando transferência de valor que perpetua a pobreza — processo historicamente construído pelo colonialismo e pelo capitalismo global.</p>}
        />

        <Exercise
          level="Avançado"
          title="Transferência de renda e Gini"
          statement={
            <p>
              Entre 2003 e 2014, o Brasil reduziu seu Gini de 0,58 para 0,51, período em
              que o Programa Bolsa Família atingiu cerca de 14 milhões de famílias. Críticos
              argumentam que a transferência de renda é assistencialista e não reduz a
              desigualdade estruturalmente. Com base nos dados e nas teorias sociológicas,
              avalie:
            </p>
          }
          options={[
            { letter: "A", text: "A queda do Gini prova que o Bolsa Família eliminou a desigualdade estrutural brasileira." },
            { letter: "B", text: "Transferências de renda são sempre ineficazes, pois não geram mudanças na estrutura produtiva." },
            { letter: "C", text: "A redução do Gini indica que as transferências de renda têm impacto real na desigualdade imediata, mas por si sós são insuficientes para alterar as estruturas que a reproduzem (propriedade da terra, tributação regressiva, acesso à educação de qualidade).", correct: true },
            { letter: "D", text: "O Gini mede apenas a desigualdade de riqueza, e não a desigualdade de renda, portanto é irrelevante para avaliar o Bolsa Família." },
            { letter: "E", text: "A queda do Gini prova que a desigualdade estrutural foi superada com o boom das commodities, sem relação com políticas sociais." },
          ]}
          resolution={<p>Estudos do IPEA e do Banco Mundial confirmam que o Bolsa Família foi responsável por parcela significativa da redução do Gini. Contudo, a desigualdade estrutural persiste: o Brasil mantém tributação regressiva (pesa mais sobre os pobres), concentração de terra e acesso desigual à educação de qualidade. A política social reduz sintomas sem eliminar as causas profundas — que exigem reformas estruturais mais amplas.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Pandemia e desigualdade"
          statement={
            <>
              <p>
                Relatório da Oxfam (2022) revelou que, durante a pandemia de Covid-19,
                os bilionários do mundo aumentaram sua riqueza em US$ 3,9 trilhões,
                enquanto cerca de 160 milhões de pessoas retrocederam para a pobreza
                extrema. No Brasil, o Auxílio Emergencial (R$ 600/mês) reduziu
                temporariamente a pobreza abaixo dos níveis pré-pandemia, mas sua
                interrupção em 2021 reverteu esses ganhos.
              </p>
              <p>Com base no texto, assinale a alternativa correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "A pandemia reduziu a desigualdade global ao eliminar os padrões de consumo das elites." },
            { letter: "B", text: "O aumento da riqueza dos bilionários durante a pandemia prova que o mercado distribui renda naturalmente em crises." },
            { letter: "C", text: "A redução temporária da pobreza pelo Auxílio Emergencial e sua reversão com o fim do programa evidenciam que políticas sociais de renda têm efeito real, mas requerem continuidade para impacto estrutural.", correct: true },
            { letter: "D", text: "A pandemia provou que a desigualdade é inevitável e não pode ser alterada por nenhuma política pública." },
            { letter: "E", text: "A queda na pobreza durante o Auxílio Emergencial ocorreu apenas em função do crescimento econômico, não da transferência de renda." },
          ]}
          resolution={<p>O caso do Auxílio Emergencial é um experimento natural em política redistributiva: quando ativo, reduziu a pobreza extrema; quando encerrado, ela voltou a crescer. Isso confirma que transferências de renda funcionam enquanto vigentes, mas não alteram as estruturas que geram pobreza (mercado de trabalho precário, falta de acesso à educação e saúde). A desigualdade exige intervenção contínua e multidimensional — não uma solução de emergência temporária.</p>}
        />
      </section>
    </article>
  );
}
