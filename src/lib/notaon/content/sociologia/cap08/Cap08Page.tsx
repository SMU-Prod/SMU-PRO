"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 8</span>
          <h1>Karl Marx: capitalismo, trabalho, alienação e luta de classes</h1>
          <p>
            Marx foi o pensador que mais radicalmente questionou a ordem capitalista do século XIX — e suas
            categorias (mais-valia, alienação, luta de classes, ideologia) continuam sendo ferramentas
            indispensáveis para compreender o mundo do trabalho, as desigualdades estruturais e as crises
            econômicas do século XXI. Dominar Marx é essencial tanto para o ENEM quanto para qualquer
            análise crítica da sociedade contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto e método</span>
        <h2>1. Marx e o materialismo histórico</h2>
        <p>
          Karl Marx (1818–1883) nasceu na Prússia, estudou Direito e Filosofia e foi profundamente influenciado
          por Hegel. Mas enquanto Hegel enxergava a história como o movimento das <em>ideias</em> (o Espírito
          Absoluto se desdobrando no tempo), Marx inverteu essa lógica: para ele, são as
          <strong> condições materiais de produção</strong> que determinam a consciência humana e explicam a
          história. Essa inversão ficou conhecida como <strong>materialismo histórico</strong>.
        </p>
        <p>
          O método de Marx é a <strong>dialética materialista</strong>: a história avança por
          <em> contradições</em>. Em cada época existe uma <strong>tese</strong> (a ordem dominante), que gera
          sua própria <strong>antítese</strong> (as forças que a contradizem), resultando numa
          <strong> síntese</strong> — uma nova ordem que, por sua vez, será contradita. No capitalismo, a tese é
          a propriedade privada dos meios de produção; a antítese é o proletariado; a síntese seria o
          socialismo e, posteriormente, o comunismo.
        </p>
        <div className="lesson-highlight">
          <h3>Infraestrutura e superestrutura</h3>
          <p>
            Marx distingue a <strong>infraestrutura</strong> (base econômica: forças e relações de produção)
            da <strong>superestrutura</strong> (Estado, leis, religião, filosofia, arte, mídia). A
            infraestrutura determina a superestrutura — as leis e a cultura de uma sociedade refletem os
            interesses da classe dominante que controla os meios de produção. As ideias não são neutras:
            são expressões das relações de poder econômico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Capitalismo</span>
        <h2>2. O modo de produção capitalista e a mais-valia</h2>
        <p>
          Para Marx, toda sociedade se organiza em torno de um <strong>modo de produção</strong> — a forma
          como os humanos produzem a vida material. O capitalismo tem duas classes fundamentais em conflito
          permanente:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Burguesia</h3>
            <p>
              Proprietária dos meios de produção (fábricas, máquinas, terra, capital financeiro). Compra
              a força de trabalho dos proletários e controla o processo produtivo e seus resultados.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Proletariado</h3>
            <p>
              Não possui meios de produção e precisa vender sua força de trabalho para sobreviver. Cria
              toda a riqueza social, mas recebe apenas o equivalente à sua subsistência como salário.
            </p>
          </div>
        </div>
        <p>
          A chave do capitalismo para Marx é a <strong>mais-valia</strong> (<em>Mehrwert</em>): o trabalhador
          produz num período de tempo o equivalente ao seu salário (<strong>trabalho necessário</strong>), mas
          continua trabalhando além disso — o excedente (<strong>trabalho excedente</strong>) é apropriado
          gratuitamente pelo capitalista como lucro. Exemplo: um operário trabalha 8 horas; em 4 horas já
          produziu o equivalente ao seu salário; as outras 4 horas geram mais-valia para o patrão.
        </p>
        <p>
          Há dois tipos de mais-valia: a <strong>absoluta</strong> (prolongar a jornada de trabalho, extraindo
          mais horas do trabalhador) e a <strong>relativa</strong> (aumentar a produtividade por meio de
          máquinas e tecnologia, reduzindo o tempo de trabalho necessário sem diminuir a jornada total).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alienação</span>
        <h2>3. A alienação do trabalho: quatro dimensões</h2>
        <p>
          Nos <em>Manuscritos Econômico-Filosóficos</em> (1844), Marx descreve como o capitalismo transforma
          o trabalho — que deveria ser a expressão mais plena do ser humano, o ato pelo qual ele transforma a
          natureza e a si mesmo — em algo estranho e hostil ao próprio trabalhador. A
          <strong> alienação</strong> (<em>Entfremdung</em>) opera em quatro dimensões:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão da alienação</th>
                <th>O que significa</th>
                <th>Exemplo contemporâneo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Do produto</strong></td>
                <td>O objeto produzido pertence ao capitalista, não ao trabalhador</td>
                <td>Operário de fábrica que nunca poderá comprar o carro que monta</td>
              </tr>
              <tr>
                <td><strong>Do processo</strong></td>
                <td>O trabalhador não controla como ou o que produz — é controlado pela máquina</td>
                <td>Entregador de app que segue rotas determinadas por algoritmo</td>
              </tr>
              <tr>
                <td><strong>Dos outros humanos</strong></td>
                <td>Competição generalizada dissolve a solidariedade entre trabalhadores</td>
                <td>Trabalhadores que disputam vagas e se sabotam mutuamente</td>
              </tr>
              <tr>
                <td><strong>De si mesmo</strong></td>
                <td>O trabalhador se sente máquina, perde criatividade e humanidade</td>
                <td>Burnout e adoecimento mental por trabalho repetitivo ou excessivo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Alienação como condição estrutural</h3>
          <p>
            Atenção: alienação em Marx não é apenas psicológica — é uma condição objetiva e estrutural do
            modo de produção capitalista. Não basta o trabalhador "mudar de atitude" ou "gostar mais do
            emprego". A alienação só pode ser superada com a transformação das relações de produção — pela
            abolição da propriedade privada dos meios de produção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Luta de classes</span>
        <h2>4. Luta de classes e consciência de classe</h2>
        <p>
          "A história de toda sociedade existente até hoje é a história das lutas de classes." Com essa frase
          no <em>Manifesto Comunista</em> (1848), Marx e Engels sintetizaram sua visão da história humana como
          conflito permanente entre exploradores e explorados: senhores × escravos, patrícios × plebeus,
          senhores feudais × servos, burguesia × proletariado.
        </p>
        <p>
          A transformação social exige que o proletariado passe de <strong>classe em si</strong> (que existe
          objetivamente, mas sem consciência de sua situação comum de exploração) para <strong>classe para
          si</strong> (com consciência coletiva e capacidade de ação política organizada). Esse processo é a
          <strong> consciência de classe</strong> — a compreensão da própria posição na estrutura produtiva
          e dos interesses coletivos que decorrem dela.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Classe em si</h3>
            <p>O proletariado existe objetivamente como grupo que vende força de trabalho, mas seus membros não se reconhecem como classe nem agem coletivamente em função disso.</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Classe para si</h3>
            <p>O proletariado toma consciência de sua situação, organiza-se politicamente (sindicatos, partidos) e age para transformar as relações de produção em seu favor.</p>
          </div>
        </div>
        <p>
          No Brasil, a história dos movimentos operários — das greves de 1917 e 1918 em São Paulo aos sindicatos
          do ABC que deram origem ao PT nos anos 1980 — pode ser lida como processo de formação da consciência
          de classe do proletariado brasileiro.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ideologia</span>
        <h2>5. Ideologia: as ideias da classe dominante</h2>
        <p>
          "As ideias dominantes de cada época são as ideias da classe dominante." Essa frase sintetiza o
          conceito marxista de <strong>ideologia</strong>: o conjunto de ideias, valores e crenças que a
          classe dominante produz e difunde para que a dominação pareça natural, justa e eterna. A ideologia
          não é uma mentira consciente — é um sistema de ideias que as pessoas incorporam genuinamente, mas
          que serve para legitimar a ordem vigente.
        </p>
        <p>
          Exemplos de ideologia no capitalismo contemporâneo incluem: o <strong>discurso meritocrático</strong>
          (o pobre é pobre porque não se esforçou suficientemente, ignorando estruturas de desigualdade); o
          <strong> consumismo</strong> (a felicidade se obtém pelo consumo, não pela transformação das relações
          sociais); e a naturalização do mercado como se fosse uma lei da natureza e não uma construção histórica.
        </p>
        <div className="lesson-highlight">
          <h3>Religião como ideologia</h3>
          <p>
            Marx via a religião como uma forma privilegiada de ideologia: "A religião é o suspiro da criatura
            oprimida, o coração de um mundo sem coração, o espírito de uma época sem espírito. É o ópio do
            povo." A religião ofereceria consolo ilusório que desviaria os oprimidos da luta real contra a
            exploração, prometendo recompensas num além que justifica o sofrimento presente. Essa interpretação
            contrasta com a de Durkheim (religião como cimento social) e Weber (religião como força cultural ativa).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modos de produção</span>
        <h2>6. A teoria dos modos de produção e a história</h2>
        <p>
          Para Marx, a história humana é a história da sucessão de <strong>modos de produção</strong>. Cada
          modo tem suas próprias forças produtivas (tecnologia, trabalho, matérias-primas) e relações de
          produção (a forma como se organiza a propriedade e o trabalho). Quando as forças produtivas se
          desenvolvem além do que as relações de produção conseguem suportar, surgem contradições que geram
          crises e, eventualmente, revolução social.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modo de produção</th>
                <th>Classes em conflito</th>
                <th>Forma de extração do excedente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Escravismo</strong></td>
                <td>Senhores × escravos</td>
                <td>Propriedade direta sobre o trabalhador e seu produto</td>
              </tr>
              <tr>
                <td><strong>Feudalismo</strong></td>
                <td>Senhores feudais × servos</td>
                <td>Corveia (trabalho gratuito) e pagamento de tributos em espécie</td>
              </tr>
              <tr>
                <td><strong>Capitalismo</strong></td>
                <td>Burguesia × proletariado</td>
                <td>Mais-valia extraída pela compra da força de trabalho no mercado livre</td>
              </tr>
              <tr>
                <td><strong>Socialismo</strong></td>
                <td>Transição — Estado operário</td>
                <td>Propriedade estatal dos meios de produção, planejamento central</td>
              </tr>
              <tr>
                <td><strong>Comunismo</strong></td>
                <td>Sem classes — horizonte histórico</td>
                <td>"De cada um conforme sua capacidade; a cada um conforme sua necessidade"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Marx não via essa sequência como inevitável ou automática — a transição exige luta política
          organizada e consciente do proletariado. No século XX, tentativas de implementar o socialismo (URSS,
          Cuba, China) geraram intenso debate sobre se os resultados correspondiam ao projeto marxista original.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fetichismo da mercadoria</span>
        <h2>7. Fetichismo da mercadoria e sociedade de consumo</h2>
        <p>
          Em <em>O Capital</em> (1867), Marx introduziu o conceito de <strong>fetichismo da mercadoria</strong>:
          nas relações capitalistas, as coisas (mercadorias) parecem ter vida própria, valor intrínseco,
          misterioso — enquanto as relações sociais entre pessoas se tornam invisíveis, aparecendo apenas como
          relações entre coisas. O valor de uma mercadoria parece ser uma propriedade natural dela, não o
          resultado do trabalho humano que a produziu.
        </p>
        <p>
          Esse conceito é profundamente atual. Quando alguém compra um tênis de marca por R$ 900, o que está
          comprando não é apenas o material — está comprando uma relação social condensada: o trabalho mal
          pago de trabalhadores em Bangladesh, a publicidade que associou a marca ao sucesso, o prestígio
          social que o objeto confere. O fetichismo obscurece essas relações: vemos apenas o objeto "valioso",
          não o processo social que produziu esse valor.
        </p>
        <div className="lesson-highlight">
          <h3>Fetichismo e redes sociais</h3>
          <p>
            As redes sociais aprofundam o fetichismo: "curtidas", "seguidores" e "influenciadores" se tornam
            valores em si mesmos, deslocados das relações humanas concretas. A mercantilização da atenção e
            da personalidade nas plataformas digitais é uma extensão do fetichismo que Marx identificou na
            produção industrial do século XIX para a produção simbólica do século XXI.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho no Brasil</span>
        <h2>8. Capitalismo e trabalho no Brasil: a herança da escravidão</h2>
        <p>
          O capitalismo no Brasil tem características específicas que Marx não analisou diretamente, mas que
          podem ser compreendidas com suas categorias. O Brasil foi o último país das Américas a abolir a
          escravidão (1888) e o fez sem distribuição de terra ou reparação — criando uma estrutura de
          desigualdade persistente que condiciona o mercado de trabalho até hoje.
        </p>
        <p>
          O sociólogo <strong>Florestan Fernandes</strong> aplicou o marxismo à realidade brasileira,
          argumentando que o capitalismo brasileiro é dependente e periférico: a industrialização ocorreu sem
          reforma agrária, mantendo estruturas de concentração fundiária e de renda herdadas do período
          colonial. A classe trabalhadora brasileira se formou com o peso da herança escravista, o que criou
          um mercado de trabalho marcado por informalidade, baixos salários e racismo estrutural.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Questão agrária</h3>
            <p>Concentração fundiária extrema no Brasil: os 3% maiores proprietários detêm mais de 50% das terras agricultáveis. Base da desigualdade estrutural analisada pelo marxismo brasileiro.</p>
          </div>
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Precarização do trabalho</h3>
            <p>Uberização, terceirização e trabalho informal como formas contemporâneas de extração de mais-valia com eliminação de direitos trabalhistas conquistados historicamente.</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimentos sociais</h3>
            <p>MST, sindicatos e movimentos populares como expressões da luta de classes no Brasil — tentativas do proletariado rural e urbano de passar de "classe em si" para "classe para si".</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Neomarxismo</span>
        <h2>9. Neomarxismo e a Escola de Frankfurt</h2>
        <p>
          No século XX, o pensamento marxista se renovou com a <strong>Escola de Frankfurt</strong>
          (Theodor Adorno, Max Horkheimer, Herbert Marcuse, Jürgen Habermas). Esses pensadores ampliaram
          a crítica marxista para incluir a cultura, a mídia e a racionalidade instrumental como formas
          de dominação que vão além das relações econômicas.
        </p>
        <p>
          Adorno e Horkheimer cunharam o conceito de <strong>indústria cultural</strong>: a produção
          capitalista de cultura (cinema, televisão, música popular, publicidade) padroniza os produtos
          culturais, destrói a autonomia do espectador e integra o indivíduo ao sistema capitalista por
          meio do entretenimento e do consumo. A TV, o streaming e as redes sociais seriam formas
          contemporâneas da indústria cultural.
        </p>
        <div className="lesson-highlight">
          <h3>Antonio Gramsci e a hegemonia</h3>
          <p>
            O marxista italiano Antonio Gramsci (1891–1937) desenvolveu o conceito de <strong>hegemonia</strong>:
            a dominação de classe não se sustenta apenas pela coerção (polícia, exército), mas principalmente
            pelo <em>consenso</em> — pela capacidade da classe dominante de apresentar seus valores e interesses
            como os interesses de toda a sociedade. A escola, a mídia, a Igreja e os partidos políticos são
            "aparelhos privados de hegemonia" que constroem esse consenso. Para transformar a sociedade, é
            preciso disputar a hegemonia cultural antes de tomar o poder político.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado e críticas</span>
        <h2>10. Legado de Marx: atualidade e críticas</h2>
        <p>
          Marx morreu em 1883 sem ver o surgimento do socialismo real, das guerras mundiais ou das
          revoluções do século XX. Seu legado é complexo: suas análises do capitalismo continuam extremamente
          pertinentes, mas as experiências políticas realizadas em seu nome (URSS, Maoísmo) revelaram
          contradições graves entre teoria e prática.
        </p>
        <p>
          As principais <strong>críticas</strong> à teoria marxista são: o determinismo econômico excessivo
          (nem tudo na vida social se reduz à economia); a subestimação da agência individual; a visão
          teleológica da história (como se o comunismo fosse o destino inevitável da humanidade); e a
          desconsideração de eixos de desigualdade como raça e gênero, que não se reduzem à classe.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito marxista</th>
                <th>Definição central</th>
                <th>Atualidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mais-valia</strong></td>
                <td>Trabalho não pago apropriado pelo capitalista</td>
                <td>Lucros recordes com salários estagnados; uberização</td>
              </tr>
              <tr>
                <td><strong>Alienação</strong></td>
                <td>Estranhamento do trabalhador de seu produto e processo</td>
                <td>Burnout, trabalho mecânico, controle algorítmico</td>
              </tr>
              <tr>
                <td><strong>Ideologia</strong></td>
                <td>Ideias que legitimam a dominação de classe</td>
                <td>Meritocracia, discurso empreendedor, fake news</td>
              </tr>
              <tr>
                <td><strong>Fetichismo</strong></td>
                <td>Coisas aparecem com valor próprio, ocultando trabalho humano</td>
                <td>Hype de produtos, cultura de marcas, criptomoedas</td>
              </tr>
              <tr>
                <td><strong>Luta de classes</strong></td>
                <td>Conflito entre detentores e não detentores dos meios de produção</td>
                <td>Greves, reforma trabalhista, desigualdade de renda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Mais-valia"
          statement={
            <p>
              De acordo com Karl Marx, a mais-valia é:
            </p>
          }
          options={[
            { letter: "A", text: "O salário mínimo pago ao trabalhador pela força de trabalho despendida." },
            { letter: "B", text: "O excedente de trabalho não remunerado que o capitalista se apropria como lucro.", correct: true },
            { letter: "C", text: "O lucro obtido exclusivamente por meio da especulação financeira no mercado de ações." },
            { letter: "D", text: "A diferença entre o preço de venda e o custo das matérias-primas de um produto." },
            { letter: "E", text: "A taxa de exploração que o Estado cobra das empresas para financiar o bem-estar social." },
          ]}
          resolution={
            <p>
              A mais-valia é o trabalho excedente — o tempo de trabalho além do necessário para pagar o salário
              do trabalhador — que o capitalista se apropria gratuitamente. É a fonte do lucro no capitalismo
              segundo Marx.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Alienação do trabalho"
          statement={
            <p>
              Um trabalhador de uma linha de produção automotiva passa 8 horas por dia apertando o mesmo parafuso,
              sem entender o processo completo de montagem do veículo e sem poder adquirir o produto que fabrica.
              Para Marx, essa situação exemplifica principalmente:
            </p>
          }
          options={[
            { letter: "A", text: "A racionalização burocrática do trabalho industrial, segundo Weber." },
            { letter: "B", text: "A anomia gerada pela falta de normas sociais claras no ambiente fabril." },
            { letter: "C", text: "A alienação do trabalhador em relação ao produto e ao processo de trabalho.", correct: true },
            { letter: "D", text: "O toyotismo, modelo que promove a polivalência e o envolvimento do operário." },
            { letter: "E", text: "A divisão moral do trabalho, conceito de Durkheim sobre solidariedade social." },
          ]}
          resolution={
            <p>
              O trabalhador está alienado do produto (não pode comprar o carro) e do processo (não controla nem
              compreende a produção). Marx descreveu essas duas dimensões da alienação nos Manuscritos
              Econômico-Filosóficos de 1844.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Infraestrutura e superestrutura"
          statement={
            <p>
              Marx sustentava que a religião, o direito e o Estado constituem a superestrutura de uma sociedade.
              Segundo o materialismo histórico, qual é a relação entre superestrutura e infraestrutura?
            </p>
          }
          options={[
            { letter: "A", text: "A superestrutura determina a infraestrutura: as ideias movem a história." },
            { letter: "B", text: "São esferas autônomas e independentes, sem influência mútua." },
            { letter: "C", text: "A infraestrutura (base econômica) determina a superestrutura, que legitima os interesses da classe dominante.", correct: true },
            { letter: "D", text: "A superestrutura é a esfera material; a infraestrutura é a esfera das ideias." },
            { letter: "E", text: "A relação é de equilíbrio funcional, como defendia Durkheim sobre a divisão do trabalho." },
          ]}
          resolution={
            <p>
              Para Marx, são as condições materiais de produção (infraestrutura) que determinam a consciência e as
              instituições (superestrutura). As leis, a religião e a cultura refletem e legitimam os interesses da
              classe que controla os meios de produção.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Fetichismo da mercadoria"
          statement={
            <p>
              Marx desenvolveu o conceito de "fetichismo da mercadoria" em O Capital. Um pesquisador aplicando
              esse conceito à publicidade contemporânea diria que os anúncios de tênis de marca de luxo:
            </p>
          }
          options={[
            { letter: "A", text: "Revelam com transparência o trabalho humano incorporado no produto, valorizando os trabalhadores que o fabricaram." },
            { letter: "B", text: "Ocultam as relações sociais de produção (trabalho mal pago, exploração) ao apresentar o produto como detentor de um valor misterioso ligado ao status e prestígio.", correct: true },
            { letter: "C", text: "Expressam a solidariedade orgânica da sociedade de consumo, onde todos se integram pela troca de mercadorias." },
            { letter: "D", text: "São exemplos de dominação carismática, pois as marcas criam líderes simbólicos que inspiram lealdade irracional." },
            { letter: "E", text: "Ilustram a anomia moderna, pois a multiplicidade de marcas cria desorientação nos consumidores." },
          ]}
          resolution={
            <p>
              O fetichismo da mercadoria consiste em apresentar o valor do produto como algo inerente ao objeto
              (sua marca, seu design, seu prestígio), obscurecendo as relações sociais reais que o produziram —
              o trabalho humano, muitas vezes mal pago e em condições precárias. A publicidade é um dos
              principais mecanismos de fetichização das mercadorias no capitalismo contemporâneo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Marx e o trabalho de plataforma"
          statement={
            <p>
              Entregadores de aplicativos trabalham longas jornadas, mas são classificados como
              "parceiros autônomos", sem salário fixo, sem direitos trabalhistas e com remuneração
              definida por algoritmos. À luz das categorias marxistas, essa situação revela principalmente:
            </p>
          }
          options={[
            { letter: "A", text: "Uma nova forma de solidariedade orgânica típica da sociedade pós-industrial." },
            { letter: "B", text: "A superação da mais-valia pelo empreendedorismo individual e pela liberdade de horários." },
            { letter: "C", text: "A modernização da burocracia racional-legal weberiana no contexto digital." },
            { letter: "D", text: "A continuidade da exploração do trabalho com extração de mais-valia e alienação aprofundada pelo controle algorítmico.", correct: true },
            { letter: "E", text: "A anomia durkheimiana resultante da ausência de normas regulatórias no mercado digital." },
          ]}
          resolution={
            <p>
              O modelo de plataformas digitais transforma trabalhadores em "autônomos" para eliminar direitos
              e ocultar a relação de exploração — mas a mais-valia continua sendo extraída (o valor criado
              pela entrega é maior que o repasse ao entregador) e a alienação é aprofundada: o algoritmo
              controla rota, velocidade e avaliação, retirando qualquer autonomia real do trabalhador.
            </p>
          }
        />
      </section>
    </article>
  );
}
