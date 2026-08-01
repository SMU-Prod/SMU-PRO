"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 25</span>
          <h1>Empreendedorismo, Economia Solidária e Novas Formas de Produção</h1>
          <p>
            Diante da crise do emprego formal e da precarização do trabalho, surgem alternativas
            que vão desde o empreendedorismo individual até formas coletivas de organização
            econômica. A economia solidária, a economia criativa, a economia digital e a economia
            verde representam modelos que colocam em debate os valores e as contradições do
            capitalismo contemporâneo, sendo tema recorrente no ENEM de Sociologia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Empreendedorismo</span>
        <h2>1. Empreendedorismo: Conceito, História e Contexto</h2>
        <p>
          O <strong>empreendedorismo</strong> refere-se à criação de novos negócios ou à identificação
          e exploração de oportunidades de mercado. O economista austríaco <strong>Joseph Schumpeter</strong>
          foi o primeiro a dar destaque socioeconômico ao empreendedor, descrevendo-o como agente de
          <strong> destruição criativa</strong>: ao introduzir inovações — novos produtos, processos ou
          mercados —, ele destrói estruturas antigas e cria novas, sendo o motor dinâmico do capitalismo.
        </p>
        <p>
          Historicamente, o discurso empreendedor ganhou força global com o neoliberalismo dos anos 1980
          (Thatcher, Reagan) e se expandiu nos anos 1990 com a revolução tecnológica. No Brasil, ganhou
          impulso com a abertura econômica do governo Collor (1990) e se consolidou como narrativa dominante
          nas décadas seguintes, permeando políticas públicas, currículos escolares e o discurso midiático.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪪</span>
            <h3>MEI (Microempreendedor Individual)</h3>
            <p>
              Criado em 2008, o MEI simplifica a formalização de trabalhadores autônomos com faturamento
              anual de até R$ 81.000. Em 2022, o Brasil atingiu 14 milhões de MEIs — muitos são
              trabalhadores precarizados buscando proteção previdenciária mínima.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚀</span>
            <h3>Startups</h3>
            <p>
              Empresas nascentes com modelo de negócio escalável, baseado em tecnologia. O ecossistema
              brasileiro tem São Paulo como principal hub e produziu unicórnios como Nubank, iFood
              e Mercado Livre.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏪</span>
            <h3>Por necessidade</h3>
            <p>
              Segundo o GEM Brasil, mais de 50% dos empreendedores brasileiros abrem negócios por
              necessidade, não por oportunidade — reflexo da fragilidade do mercado de trabalho
              formal e do desemprego estrutural.
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Por oportunidade</h3>
            <p>
              Empreendedores que identificam lacunas no mercado e desenvolvem soluções inovadoras.
              Concentram-se em regiões mais desenvolvidas e entre pessoas com maior acesso a capital
              e redes de contato.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Crítica sociológica ao empreendedorismo</h3>
          <p>
            Autores como <strong>Byung-Chul Han</strong> (<em>Sociedade do Cansaço</em>) e{" "}
            <strong>Ricardo Antunes</strong> criticam o empreendedorismo como forma de fazer o trabalhador
            internalizar a lógica do capital: ao se tornar "seu próprio patrão", ele explora a si mesmo
            sem perceber. O discurso empreendedor pode funcionar como <strong>resposta ideológica à
            precarização</strong>, naturalizando a falta de direitos como "escolha" individual e
            enfraquecendo a organização coletiva dos trabalhadores.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Economia Solidária</span>
        <h2>2. Economia Solidária: Paul Singer e as Cooperativas</h2>
        <p>
          A <strong>economia solidária</strong> é um conjunto de práticas econômicas baseadas na
          <strong> autogestão</strong>, na <strong>cooperação</strong> e na solidariedade, em contraposição
          à lógica competitiva e hierárquica do capitalismo. O principal teórico brasileiro é{" "}
          <strong>Paul Singer</strong> (1932–2018), que sistematizou o conceito e dirigiu a Secretaria
          Nacional de Economia Solidária (SENAES) de 2003 a 2016 no governo Lula.
        </p>
        <p>
          Singer via nas cooperativas e nos empreendimentos solidários uma alternativa ao capitalismo
          que não exigia uma revolução radical: era possível construir, dentro da sociedade de mercado,
          ilhas de produção baseadas em outros valores. Para ele, a economia solidária era uma
          <strong> escola de democracia</strong>, pois obrigava trabalhadores a aprender a gerir
          coletivamente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Empresa Capitalista Convencional</th>
                <th>Cooperativa / Economia Solidária</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Propriedade dos meios</strong></td>
                <td>Privada (sócios/acionistas)</td>
                <td>Coletiva (todos os membros)</td>
              </tr>
              <tr>
                <td><strong>Tomada de decisões</strong></td>
                <td>Hierárquica (diretoria, CEO)</td>
                <td>Democrática (assembleia — 1 membro, 1 voto)</td>
              </tr>
              <tr>
                <td><strong>Distribuição dos resultados</strong></td>
                <td>Proporcional ao capital investido (dividendos)</td>
                <td>Proporcional ao trabalho realizado (sobras)</td>
              </tr>
              <tr>
                <td><strong>Objetivo principal</strong></td>
                <td>Maximização do lucro</td>
                <td>Bem-estar dos cooperados e da comunidade</td>
              </tr>
              <tr>
                <td><strong>Demissão</strong></td>
                <td>Decisão unilateral da empresa</td>
                <td>Decisão coletiva da assembleia</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td>Ambev, Magazine Luiza, Petrobras</td>
                <td>COOPAMARE (catadores SP), Mondragon (Espanha)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          No Brasil, o Mapeamento Nacional de Economia Solidária (2013) identificou mais de 19.000
          empreendimentos econômicos solidários (EES), envolvendo cerca de 1,4 milhão de pessoas.
          Catadores de materiais recicláveis organizados em cooperativas são um dos exemplos mais
          visíveis e politicamente relevantes desse modelo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cooperativismo</span>
        <h2>3. O Movimento Cooperativista: Princípios e História</h2>
        <p>
          O cooperativismo tem origens no século XIX, em resposta às condições de exploração da
          Revolução Industrial. A <strong>Cooperativa de Rochdale</strong> (1844, Inglaterra) é
          considerada o marco fundador: 28 tecelões criaram uma cooperativa de consumo com princípios
          que ainda norteiam o movimento global — adesão voluntária, gestão democrática, participação
          econômica dos membros, autonomia e independência.
        </p>
        <p>
          No Brasil, o cooperativismo se desenvolveu fortemente no agronegócio (cooperativas agropecuárias
          como Coamo e Coopersucar) e no setor financeiro (cooperativas de crédito como Sicredi e Sicoob).
          A Organização das Cooperativas Brasileiras (OCB) representa mais de 15 milhões de cooperados
          em todo o país.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Cooperativas agropecuárias</h3>
            <p>
              Reúnem produtores rurais para comprar insumos em escala, processar e comercializar
              a produção. São fundamentais para a agricultura familiar e o agronegócio no sul e
              centro-oeste do Brasil.
            </p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Cooperativas de crédito</h3>
            <p>
              Oferecem serviços financeiros a seus membros com condições mais vantajosas que os
              bancos convencionais, democratizando o acesso ao crédito, especialmente em pequenas
              cidades e para pequenos produtores.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Cooperativas de saúde</h3>
            <p>
              Unimed é o maior sistema cooperativista de saúde do mundo, reunindo médicos que
              prestam serviços a planos de saúde. Modelo que combina cooperativismo com mercado
              de serviços privados.
            </p>
          </div>
          <div className="lesson-card">
            <span>♻️</span>
            <h3>Cooperativas de catadores</h3>
            <p>
              COOPAMARE (1989, SP) foi pioneira; hoje existem mais de 1.000 cooperativas de
              catadores no Brasil. São modelo de economia solidária e de política ambiental,
              integrando inclusão social e reciclagem.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Economia Criativa</span>
        <h2>4. Economia Criativa: Cultura como Produção Econômica</h2>
        <p>
          A <strong>economia criativa</strong> compreende atividades que têm na criatividade, na cultura
          e no conhecimento sua principal matéria-prima: design, moda, publicidade, música, cinema,
          games, gastronomia, artes visuais, patrimônio cultural e arquitetura. O conceito foi
          popularizado por <strong>John Howkins</strong> (2001) e incorporado pela UNCTAD (ONU) como
          setor estratégico para o desenvolvimento.
        </p>
        <p>
          A UNCTAD estima que a economia criativa representa 3% do PIB mundial e emprega mais de
          29 milhões de pessoas globalmente. No Brasil, o setor representa cerca de 2,6% do PIB
          (2019, FGV), com destaque para a indústria audiovisual, o mercado de games (maior da
          América Latina), a moda e o artesanato regional.
        </p>

        <div className="lesson-highlight">
          <h3>Tensão entre criatividade e mercantilização</h3>
          <p>
            A economia criativa é objeto de tensão: ao mesmo tempo em que valoriza a cultura, pode
            submetê-la à lógica de mercado — transformando expressões culturais em produtos, sujeitos
            às mesmas pressões de produtividade e lucratividade que qualquer outra mercadoria. A{" "}
            <strong>indústria cultural</strong> (Adorno e Horkheimer, Escola de Frankfurt) já antecipou
            esse processo nos anos 1940, denunciando como o capitalismo transforma a arte em produto
            padronizado para o consumo de massa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gig Economy</span>
        <h2>5. Gig Economy: Trabalho Sob Demanda e Precarização Digital</h2>
        <p>
          A <strong>gig economy</strong> (economia de "bicos" ou "tarefas") refere-se ao modelo de
          trabalho mediado por plataformas digitais, em que trabalhadores executam tarefas ou serviços
          temporários, sem vínculo empregatício formal. Uber, iFood, Rappi, 99, Airbnb e Freelancer
          são exemplos globais desse modelo.
        </p>
        <p>
          Segundo dados do IBGE, em 2022 havia mais de 1,5 milhão de entregadores e motoristas de
          aplicativo no Brasil. A plataformização do trabalho levanta debates sociológicos e jurídicos
          intensos: esses trabalhadores são empregados ou autônomos? Têm direito a férias, 13º salário
          e previdência? O Supremo Tribunal Federal e o Congresso travaram debates sobre a
          <strong> regulação do trabalho por aplicativo</strong> ao longo dos anos 2020.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚗</span>
            <h3>Motoristas de aplicativo</h3>
            <p>
              Trabalham para plataformas como Uber e 99 sem contrato formal. Os algoritmos definem
              preços, destinos e a reputação do trabalhador, exercendo controle sem a relação
              jurídica de emprego.
            </p>
          </div>
          <div className="lesson-card">
            <span>🛵</span>
            <h3>Entregadores</h3>
            <p>
              Um dos segmentos mais precarizados: expõem-se a riscos no trânsito sem seguro
              obrigatório por acidente de trabalho, recebem por entrega e ficam à mercê das
              variações algorítmicas de demanda.
            </p>
          </div>
          <div className="lesson-card">
            <span>💻</span>
            <h3>Freelancers digitais</h3>
            <p>
              Designers, programadores e redatores que oferecem serviços em plataformas como
              Workana e 99Freelas. Têm maior autonomia que entregadores, mas também ausência
              de proteção trabalhista.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>O paradoxo da autonomia</h3>
          <p>
            Empresas de plataforma apresentam seus trabalhadores como "parceiros independentes"
            que gozam de autonomia e flexibilidade. Sociólogos como <strong>Richard Sennett</strong>
            e <strong>Abilio Diniz Krein</strong> apontam que essa "autonomia" é ilusória: o
            trabalhador não tem poder de negociação sobre preços, rotas ou regras — decididas
            unilateralmente pelo algoritmo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Economia Verde e Circular</span>
        <h2>6. Economia Verde e Economia Circular</h2>
        <p>
          A crise ambiental gerou dois modelos econômicos que buscam superar o paradigma extrativista
          e poluidor do capitalismo convencional. A <strong>economia verde</strong>, proposta pelo
          Programa das Nações Unidas para o Meio Ambiente (PNUMA), busca conciliar crescimento
          econômico com preservação ambiental por meio de energias renováveis, eficiência energética
          e valoração dos serviços ecossistêmicos.
        </p>
        <p>
          A <strong>economia circular</strong> rompe com o padrão linear (extrair → produzir →
          descartar) e propõe ciclos fechados de materiais: os resíduos de uma empresa tornam-se
          insumos de outra, mimetizando os ciclos naturais dos ecossistemas. O crítico{" "}
          <strong>Joan Martínez Alier</strong> alerta que a economia verde pode ser "ecolavagem"
          (greenwashing) se não questionar o modelo de crescimento ilimitado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Lógica central</th>
                <th>Instrumentos</th>
                <th>Crítica principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Capitalismo convencional</strong></td>
                <td>Crescimento ilimitado, externalização de custos ambientais</td>
                <td>Mercado livre, tecnologia produtivista</td>
                <td>Esgotamento dos recursos naturais, colapso climático</td>
              </tr>
              <tr>
                <td><strong>Economia verde</strong></td>
                <td>Crescimento "sustentável" com baixo carbono</td>
                <td>Energias renováveis, carbono zero, mercado de créditos</td>
                <td>Greenwashing; mantém lógica capitalista</td>
              </tr>
              <tr>
                <td><strong>Economia circular</strong></td>
                <td>Fechar ciclos de materiais, eliminar resíduo</td>
                <td>Reutilização, reciclagem, reparo, remanufatura</td>
                <td>Difícil escala; ainda marginal no sistema produtivo</td>
              </tr>
              <tr>
                <td><strong>Decrescimento</strong></td>
                <td>Reduzir produção e consumo material nos países ricos</td>
                <td>Menos horas de trabalho, mais bens comuns</td>
                <td>Considerado politicamente inviável na prática</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho Informal</span>
        <h2>7. Informalidade e Precarização do Trabalho no Brasil</h2>
        <p>
          O trabalho informal — sem carteira assinada, INSS, 13º salário ou férias — é uma
          característica estrutural do mercado de trabalho brasileiro. O IBGE registrou, em 2022,
          que cerca de 40% da força de trabalho era informale, ou seja, aproximadamente 39 milhões
          de pessoas trabalhavam sem proteção social mínima.
        </p>
        <p>
          Para o sociólogo <strong>Ricardo Antunes</strong>, a informalidade não é uma anomalia a
          ser corrigida, mas um resultado estrutural do capitalismo contemporâneo, especialmente
          no Brasil periférico: a acumulação flexível pós-fordista exige um exército de trabalhadores
          precarizados disponíveis para quando o capital precisar, sem o custo dos direitos
          trabalhistas.
        </p>

        <div className="lesson-highlight">
          <h3>Informalidade e desigualdade racial</h3>
          <p>
            A informalidade no Brasil tem cor: trabalhadores negros têm taxas de informalidade
            sistematicamente maiores que brancos. Em 2022, segundo o IBGE, 48% dos trabalhadores
            negros eram informais, contra 34% dos brancos. Isso revela como a precarização
            laboral se articula com o <strong>racismo estrutural</strong>, perpetuando
            desigualdades históricas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Automação e Futuro do Trabalho</span>
        <h2>8. Automação, Inteligência Artificial e o Futuro do Trabalho</h2>
        <p>
          A <strong>Quarta Revolução Industrial</strong> — marcada pela automação avançada, robótica,
          inteligência artificial e internet das coisas — está transformando radicalmente o mercado
          de trabalho global. Estudos da Oxford University (Frey e Osborne, 2013) estimaram que
          47% dos empregos nos EUA estavam em risco de automação nas décadas seguintes.
        </p>
        <p>
          No Brasil, pesquisa do McKinsey Global Institute estimou que até 2030 entre 11 e 22
          milhões de postos de trabalho podem ser substituídos por automação — sobretudo empregos
          rotineiros e de baixa qualificação. Ao mesmo tempo, novos empregos ligados a tecnologia,
          cuidados humanos e economia criativa podem surgir, mas exigem requalificação da força
          de trabalho.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Automação industrial</h3>
            <p>
              Robôs substituem trabalhadores em linhas de montagem, armazéns e agricultura de
              precisão. Setores afetados: manufatura, logística, transporte.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Inteligência Artificial</h3>
            <p>
              IA afeta não só trabalhos manuais, mas também cognitivos: análise jurídica,
              diagnóstico médico, contabilidade e jornalismo passam por automação parcial.
            </p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Novos empregos digitais</h3>
            <p>
              Desenvolvedor de software, cientista de dados, gestor de mídias sociais e
              especialista em cibersegurança são profissões em expansão, mas concentradas
              em trabalhadores com alta escolaridade.
            </p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Cuidados humanos</h3>
            <p>
              Enfermagem, educação, serviço social e trabalho doméstico são resistentes
              à automação por exigirem empatia e relações interpessoais — mas historicamente
              são mal remunerados e feminizados.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Economia Social e Solidária no Mundo</span>
        <h2>9. Experiências Globais de Economia Solidária</h2>
        <p>
          A economia solidária não é uma utopia teórica — existem experiências concretas e bem
          documentadas em escala global. O exemplo mais estudado é o <strong>Grupo Mondragon</strong>
          (País Basco, Espanha), fundado em 1956 pelo padre José Maria Arizmendiarrieta: hoje é
          um conglomerado com mais de 80.000 trabalhadores-cooperados em indústria, serviços,
          finanças e educação, sendo a maior cooperativa do mundo.
        </p>
        <p>
          No Brasil, destaca-se a experiência das <strong>Fábricas Recuperadas</strong>: empresas
          falidas cujos trabalhadores assumiram a gestão coletiva. A Companhia Brasileira de Usinas
          e Tecelagem (CBUT), em Santo André, e a Cerâmica Cipas, em Recife, são exemplos documentados.
          Na Argentina, o movimento de "fábricas recuperadas" (empresas tomadas pelos operários durante
          a crise de 2001-2002) envolveu mais de 300 empresas e 15.000 trabalhadores.
        </p>

        <div className="lesson-highlight">
          <h3>Economia Feminista</h3>
          <p>
            A <strong>economia feminista</strong> é uma corrente que questiona a invisibilidade
            do trabalho reprodutivo (doméstico, de cuidado) nas contas nacionais e nos modelos
            econômicos convencionais. Autoras como <strong>Silvia Federici</strong> (<em>O Ponto
            Zero da Revolução</em>) argumentam que o capitalismo se apoia na exploração gratuita
            do trabalho das mulheres — cozinhar, limpar, cuidar de filhos e idosos — que sustenta
            a produtividade do trabalho assalariado masculino sem receber remuneração.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese e Perspectivas</span>
        <h2>10. Síntese: Alternativas ao Capitalismo Convencional no Século XXI</h2>
        <p>
          O debate sobre formas alternativas de produção e organização econômica está no centro
          das questões sociais contemporâneas. O capitalismo neoliberal gerou riqueza sem precedentes,
          mas também desigualdade crescente, degradação ambiental e precarização do trabalho. As
          alternativas — economia solidária, cooperativismo, economia circular, economia criativa —
          não são excludentes entre si; muitas vezes se combinam e se complementam.
        </p>
        <p>
          O ENEM frequentemente aborda esses temas por meio de situações-problema que exigem a
          capacidade de identificar conceitos (autogestão, cooperativismo, gig economy, destruição
          criativa) e de analisar criticamente discursos — distinguindo, por exemplo, entre o
          empreendedorismo como solução real para desigualdades e o empreendedorismo como ideologia
          que naturaliza a precarização.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>Economia solidária</h3>
            <p>Autogestão, cooperação, solidariedade. Referência: Paul Singer e a SENAES.</p>
          </div>
          <div className="lesson-card">
            <span>♻️</span>
            <h3>Economia circular</h3>
            <p>Fechar ciclos de materiais, eliminar resíduos. Alternativa ao modelo linear extrativista.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Economia criativa</h3>
            <p>Criatividade e cultura como matéria-prima econômica. Tensão com mercantilização da cultura.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Gig economy</h3>
            <p>Plataformas digitais organizam trabalho precário e sem vínculo. Debate sobre regulação.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Economia verde</h3>
            <p>Crescimento com baixo carbono. Crítica: pode ser greenwashing que mantém lógica capitalista.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Decrescimento</h3>
            <p>Redução do consumo e da produção material. Corrente minoritária mas crescente no debate global.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Para o ENEM: conceitos-chave</h3>
          <p>
            Dominar a diferença entre <strong>empresa capitalista</strong> (hierarquia, lucro,
            capital) e <strong>cooperativa</strong> (assembleia, sobras, trabalho); saber identificar
            características da <strong>gig economy</strong> e suas contradições; compreender a
            distinção entre <strong>economia verde</strong> (crescimento sustentável) e{" "}
            <strong>economia circular</strong> (ciclos fechados de materiais); e reconhecer a{" "}
            <strong>crítica ao empreendedorismo como ideologia</strong> são os pontos mais
            cobrados nas provas recentes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Cooperativa vs. empresa capitalista"
          statement={
            <p>
              A principal diferença entre uma cooperativa (economia solidária) e uma empresa capitalista
              convencional em relação à tomada de decisões é que, na cooperativa:
            </p>
          }
          options={[
            { letter: "A", text: "As decisões são tomadas exclusivamente pelo gerente mais experiente." },
            { letter: "B", text: "Cada cooperado vota proporcionalmente ao capital que investiu." },
            { letter: "C", text: "As decisões são democráticas: cada membro tem direito a um voto, independentemente do capital.", correct: true },
            { letter: "D", text: "As decisões são delegadas a um CEO externo contratado pelo mercado." },
            { letter: "E", text: "Não há decisões coletivas — cada cooperado age de forma independente." },
          ]}
          resolution={
            <p>
              Na cooperativa, o princípio é <strong>1 pessoa = 1 voto</strong>, independentemente
              do capital investido. Isso garante igualdade política entre os membros e é uma das
              diferenças fundamentais em relação às empresas capitalistas, onde o poder é proporcional
              ao número de ações ou participação societária.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Gig economy e precarização"
          statement={
            <p>
              O crescimento da <em>gig economy</em> — representada por plataformas como Uber, iFood
              e Rappi — é analisado por sociólogos como uma expressão da precarização do trabalho
              porque:
            </p>
          }
          options={[
            { letter: "A", text: "Garante alta remuneração e proteção social plena aos trabalhadores de plataforma." },
            { letter: "B", text: "Elimina a necessidade de qualificação profissional para obter renda estável." },
            { letter: "C", text: "Os trabalhadores são classificados como autônomos, perdendo direitos trabalhistas enquanto o algoritmo controla suas atividades.", correct: true },
            { letter: "D", text: "Cria empregos formais em setores de alta tecnologia para trabalhadores sem escolaridade." },
            { letter: "E", text: "Promove a autogestão coletiva do trabalho nos moldes da economia solidária." },
          ]}
          resolution={
            <p>
              A <strong>gig economy</strong> apresenta o paradoxo da "autonomia sem direitos":
              o trabalhador é formalmente autônomo (sem vínculo empregatício), mas na prática o
              algoritmo controla preços, rotas, avaliações e acesso ao trabalho. Perde direitos
              trabalhistas (férias, FGTS, seguro-desemprego) sem ganhar autonomia real — é a
              essência da precarização digital.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Economia circular vs. linear"
          statement={
            <p>
              O modelo de economia circular se distingue do modelo linear convencional porque:
            </p>
          }
          options={[
            { letter: "A", text: "Elimina totalmente a extração de matérias-primas da natureza." },
            { letter: "B", text: "Propõe que os resíduos de um processo produtivo sejam reinseridos no ciclo como insumos.", correct: true },
            { letter: "C", text: "Baseia-se exclusivamente em energias fósseis mais eficientes." },
            { letter: "D", text: "Maximiza a produção de descartáveis para estimular o crescimento econômico." },
            { letter: "E", text: "Defende o fim do consumo como condição para a sustentabilidade ambiental." },
          ]}
          resolution={
            <p>
              A economia circular rompe com o padrão <strong>extrair → produzir → descartar</strong>
              ao propor que os resíduos sejam reinseridos no ciclo produtivo, mimetizando os
              ecossistemas naturais onde "não há lixo". Isso reduz a extração de recursos virgens
              e a geração de resíduos, mas não elimina completamente a necessidade de insumos naturais.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Empreendedorismo como ideologia"
          statement={
            <p>
              Autores como Byung-Chul Han e Ricardo Antunes criticam o discurso do empreendedorismo
              como uma forma de ideologia no contexto do capitalismo contemporâneo. Qual das
              alternativas descreve melhor essa crítica?
            </p>
          }
          options={[
            { letter: "A", text: "O empreendedorismo é criticado por ser exclusivo das classes altas, impedindo a mobilidade social." },
            { letter: "B", text: "Os autores defendem que o empreendedorismo é ineficiente do ponto de vista econômico." },
            { letter: "C", text: "O discurso empreendedor faz o trabalhador internalizar a lógica do capital, explorando a si mesmo e naturalizando a ausência de direitos como 'escolha'.", correct: true },
            { letter: "D", text: "A crítica é ao empreendedorismo coletivo (cooperativas), que seria exploratório por natureza." },
            { letter: "E", text: "Os autores entendem que o empreendedorismo é positivo, mas deve ser regulado pelo Estado." },
          ]}
          resolution={
            <p>
              A crítica de Han e Antunes aponta que o <strong>sujeito do desempenho</strong> —
              o empreendedor que "corre atrás" — converte-se em agente de sua própria exploração.
              Ao internalizar a lógica capitalista e se tornar "seu próprio patrão", ele abdica
              de reivindicar direitos coletivos e culpabiliza a si mesmo pelo fracasso. Isso serve
              aos interesses do capital ao enfraquecer a organização trabalhista coletiva.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Cooperativa de catadores"
          statement={
            <p>
              <em>"A COOPAMARE, fundada em 1989 em São Paulo, foi a primeira cooperativa de catadores
              de materiais recicláveis do Brasil. Seus membros definem coletivamente as regras de
              trabalho, dividem igualmente as tarefas e distribuem as sobras mensais proporcionalmente
              à produção de cada um. Não há patrão: todos são donos e trabalhadores."</em>
              <br /><br />
              O modelo descrito ilustra os princípios da:
            </p>
          }
          options={[
            { letter: "A", text: "Gig economy, com trabalhadores autônomos gerenciados por algoritmo." },
            { letter: "B", text: "Economia solidária, com autogestão, cooperação e distribuição equitativa dos resultados.", correct: true },
            { letter: "C", text: "Economia criativa, centrada na criatividade como matéria-prima produtiva." },
            { letter: "D", text: "Fordismo, com divisão rígida de tarefas e hierarquia de supervisores." },
            { letter: "E", text: "Neoliberalismo, com privatização e busca de eficiência exclusivamente pelo mercado." },
          ]}
          resolution={
            <p>
              A COOPAMARE exemplifica a <strong>economia solidária</strong>: autogestão (sem patrão),
              cooperação (definição coletiva das regras), igualdade (todos são donos) e distribuição
              proporcional ao trabalho (sobras). Paul Singer utilizou exemplos semelhantes para
              demonstrar a viabilidade de uma economia baseada em valores diferentes do lucro,
              integrando inclusão social e sustentabilidade ambiental.
            </p>
          }
        />
      </section>
    </article>
  );
}
