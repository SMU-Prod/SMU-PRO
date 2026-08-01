"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 19</span>
          <h1>Raça, Racismo Estrutural e Relações Étnico-Raciais</h1>
          <p>
            Embora raça não seja uma categoria biológica real, ela é um poderoso organizador das
            desigualdades sociais no Brasil e no mundo. O racismo estrutural permeia instituições,
            práticas e políticas — e compreendê-lo em suas múltiplas dimensões é fundamental para
            o ENEM e para o exercício da cidadania.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raça e Etnia</span>
        <h2>1. Raça Como Construção Social</h2>
        <p>
          A <strong>genética moderna</strong> demonstrou que o conceito de raça humana como
          categoria biológica é cientificamente inválido: os seres humanos compartilham 99,9%
          do material genético, e a variação dentro de grupos considerados "raças" é maior do
          que a variação entre eles. O Projeto Genoma Humano (2003) consolidou esse entendimento
          — não existem raças puras, mas <strong>variação genética contínua</strong> ao longo
          das populações.
        </p>
        <p>
          No entanto, raça é uma <strong>construção social</strong> com efeitos reais e
          poderosos: sociedades classificam pessoas por características físicas (cor da pele,
          traços faciais, tipo de cabelo) e as tratam de forma diferente com base nessa
          classificação. A raça não existe na biologia, mas existe no <em>social</em> — e isso
          basta para produzir desigualdades mensuráveis em renda, educação, saúde e violência.
          Como diria W.E.B. Du Bois, a linha de cor é o problema do século XX — e continua
          sendo no XXI.
        </p>
        <p>
          No Brasil, o sistema de classificação racial é peculiar: o IBGE usa as categorias
          branco, pardo, preto, amarelo e indígena por autodeclaração. Pretos e pardos são
          frequentemente agrupados como "negros" nas análises de desigualdade racial, somando
          56% da população segundo o Censo 2022 — pela primeira vez a maioria declarou-se negra.
        </p>

        <div className="lesson-highlight">
          <h3>Raça vs. etnia</h3>
          <p>
            <strong>Raça</strong> refere-se à classificação baseada em características físicas
            (fenotípicas), geralmente associada à cor da pele. <strong>Etnia</strong> refere-se
            a uma identidade coletiva baseada em história, língua, cultura, religião e
            ancestralidade comuns — não necessariamente marcada por aparência física. Os judeus
            formam uma etnia, não uma "raça". Povos indígenas brasileiros formam etnias distintas
            (tupi, guarani, yanomami, etc.). No Brasil, os dois termos aparecem articulados:
            "relações étnico-raciais".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Racismo</span>
        <h2>2. Racismo Individual, Institucional e Estrutural</h2>
        <p>
          O pensador Silvio Almeida, em <em>Racismo Estrutural</em> (2018), propõe três
          concepções de racismo que se articulam numa hierarquia explicativa. Compreender
          essa diferença é fundamental para entender por que o racismo persiste mesmo sem
          racistas "declarados".
        </p>
        <p>
          O racismo individual é o mais visível e o mais fácil de combater juridicamente —
          basta identificar o agressor. Mas é também o menos explicativo das desigualdades
          raciais sistêmicas, porque foca em exceções ao invés de padrões. O racismo
          institucional e o estrutural operam de forma muito mais silenciosa e eficaz.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Racismo individual</h3>
            <p>
              Atos de discriminação praticados por indivíduos com preconceito racial.
              Ex.: negar emprego explicitamente por causa da cor da pele; insulto racial.
              É o racismo mais visível, mas também o mais limitado como categoria explicativa
              das desigualdades estruturais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Racismo institucional</h3>
            <p>
              Quando organizações e instituições (polícia, sistema de justiça, bancos,
              hospitais) produzem resultados discriminatórios mesmo sem uma política
              explicitamente racista. Ex.: abordagens policiais seletivas por raça;
              menos crédito bancário para negros com o mesmo perfil financeiro de brancos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Racismo estrutural</h3>
            <p>
              O racismo como elemento constitutivo da estrutura social — não é uma
              anomalia ou exceção, mas o modo como a sociedade foi construída. Produz
              desigualdades raciais mesmo sem intenção discriminatória declarada e exige
              transformações estruturais para ser combatido.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o conceito de racismo estrutural importa?</h3>
          <p>
            Para Silvio Almeida, o racismo estrutural não requer racistas individuais para
            funcionar — basta que as estruturas econômicas, políticas e culturais reproduzam
            desigualdades raciais. Uma empresa pode não ter política discriminatória explícita,
            mas se seus processos selecionam sistematicamente brancos, pratica racismo
            institucional decorrente do estrutural. Combatê-lo exige transformar as estruturas,
            não apenas punir indivíduos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formação Histórica</span>
        <h2>3. Escravidão e Suas Sequelas no Brasil</h2>
        <p>
          O Brasil foi o maior importador de escravizados africanos das Américas: entre os
          séculos XVI e XIX, estima-se que 4,9 milhões de africanos foram trazidos forçadamente
          ao país — 40% do total do tráfico negreiro transatlântico. A escravidão durou quase
          400 anos e moldou profundamente a estrutura social, econômica e cultural brasileira.
          Foi o último país do continente a aboli-la (1888).
        </p>
        <p>
          A <strong>Lei Áurea</strong> (1888) aboliu a escravidão sem qualquer política de
          integração: nenhuma terra, capital, educação ou aposentadoria foi garantida aos
          ex-escravizados. O sociólogo <strong>Florestan Fernandes</strong>, em{" "}
          <em>A Integração do Negro na Sociedade de Classes</em> (1964), demonstrou empiricamente
          que a abolição foi uma "libertação" formal sem substância material: negros foram
          lançados ao mercado de trabalho em desvantagem absoluta, enquanto imigrantes europeus
          recebiam terras e apoio estatal.
        </p>
        <p>
          As sequelas dessa história são mensuráveis até hoje: concentração de riqueza,
          terra e educação nas mãos de brancos; negros sobre-representados nas ocupações
          mais precárias e nas periferias urbanas. O sociólogo Jessé Souza chamou esse
          grupo de "ralé estrutural" — não por falta de mérito, mas por herança histórica
          de exclusão.
        </p>

        <div className="lesson-highlight">
          <h3>Branqueamento</h3>
          <p>
            No final do século XIX e início do XX, a elite brasileira promoveu políticas de
            <strong> branqueamento</strong>: incentivo à imigração europeia para "clareamento"
            da população, sustentado pelo racismo científico do darwinismo social. Nina
            Rodrigues e outros intelectuais argumentavam que a miscigenação "elevaria" a raça
            brasileira. Essa política afastou negros do mercado de trabalho formal (substituídos
            por imigrantes) e reforçou a hierarquia racial que persiste até hoje.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil</span>
        <h2>4. O Mito da Democracia Racial</h2>
        <p>
          O sociólogo <strong>Gilberto Freyre</strong>, em <em>Casa-Grande &amp; Senzala</em>
          (1933), propôs que o Brasil havia desenvolvido uma relação harmônica entre
          colonizadores, escravizados e indígenas, gerando uma "democracia racial" baseada
          na miscigenação e no convívio cotidiano das raças. Essa tese foi amplamente difundida
          e ainda habita o imaginário popular — a imagem do Brasil como paraíso racial.
        </p>
        <p>
          Florestan Fernandes e outros sociólogos da <strong>Escola Paulista de Sociologia</strong>
          —como Octavio Ianni e Fernando Henrique Cardoso — demonstraram empiricamente que essa
          "democracia" era um mito. O mito da democracia racial funciona como <em>ideologia</em>:
          ao naturalizar uma harmonia inexistente, impede o reconhecimento do racismo e dificulta
          seu combate. Permite que o racista diga "no Brasil não tem racismo" enquanto pratica
          discriminação.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Brancos</th>
                <th>Pretos e pardos</th>
                <th>Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renda média mensal</td>
                <td>R$ 3.076</td>
                <td>R$ 1.712</td>
                <td>IBGE/PNAD 2022</td>
              </tr>
              <tr>
                <td>Taxa de desemprego</td>
                <td>~6,5%</td>
                <td>~11,7%</td>
                <td>IBGE 2022</td>
              </tr>
              <tr>
                <td>Acesso ao ensino superior</td>
                <td>~24% concluem</td>
                <td>~13% concluem</td>
                <td>IBGE 2022</td>
              </tr>
              <tr>
                <td>Vítimas de homicídio</td>
                <td>28,8/100.000 hab.</td>
                <td>64,3/100.000 hab.</td>
                <td>Atlas da Violência 2023</td>
              </tr>
              <tr>
                <td>Encarcerados</td>
                <td>~35% da pop. carcerária</td>
                <td>~64% da pop. carcerária</td>
                <td>DEPEN 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interseccionalidade</span>
        <h2>5. Interseccionalidade: Raça, Gênero e Classe</h2>
        <p>
          O conceito de <strong>interseccionalidade</strong>, desenvolvido pela jurista e
          ativista afro-americana <strong>Kimberlé Crenshaw</strong> (1989), propõe que as
          identidades e as opressões não são separadas e aditivas, mas se cruzam e se
          potencializam mutuamente. Raça, gênero, classe, sexualidade e outras categorias
          interagem para produzir experiências de discriminação únicas.
        </p>
        <p>
          Um exemplo brasileiro: mulheres negras experimentam uma combinação específica de
          opressão que não é simplesmente "racismo + machismo". A escritora <strong>Lélia
          Gonzalez</strong> foi pioneira no Brasil ao articular raça e gênero, cunhando o
          conceito de "amefricanidade" para descrever a identidade das mulheres
          afro-latino-americanas. Dados do IBGE mostram que mulheres negras ganham, em média,
          55% do salário de homens brancos — o piso mais baixo da pirâmide salarial.
        </p>
        <p>
          O feminismo negro brasileiro, representado por figuras como <strong>Sueli
          Carneiro</strong> e <strong>Djamila Ribeiro</strong>, crítica o feminismo
          hegemônico (branco e de classe média) por ignorar as especificidades das mulheres
          negras e pobres. O "lugar de fala" (conceito de Djamila) não nega a capacidade
          de falar sobre outros grupos, mas reconhece que a experiência vivida produz
          perspectivas epistêmicas distintas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Kimberlé Crenshaw</h3>
            <p>
              Jurista afro-americana que cunhou o conceito de interseccionalidade ao analisar
              como mulheres negras eram discriminadas de formas que nem a lei antirracista
              nem a lei antissexista conseguiam capturar isoladamente.
            </p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Lélia Gonzalez</h3>
            <p>
              Antropóloga e ativista brasileira, pioneira no feminismo negro no Brasil.
              Articulou raça, gênero e classe na análise da condição da mulher negra
              no contexto da "amefricanidade".
            </p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Djamila Ribeiro</h3>
            <p>
              Filósofa e ativista contemporânea, autora de <em>O que é lugar de fala?</em>
              (2017). Popularizou o conceito no debate brasileiro sobre representatividade
              e voz política de grupos marginalizados.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Frantz Fanon</h3>
            <p>
              Psiquiatra e filósofo martinicano, autor de <em>Pele Negra, Máscaras Brancas</em>
              (1952). Analisou o impacto psicológico do colonialismo e do racismo na
              identidade dos colonizados, influenciando o pensamento decolonial.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legislação</span>
        <h2>6. Legislação Antirracista no Brasil</h2>
        <p>
          O Brasil possui um conjunto de legislações voltadas ao combate ao racismo e à
          promoção da igualdade racial. A Constituição de 1988 foi um marco histórico:
          pela primeira vez, o racismo foi definido como crime inafiançável e imprescritível,
          reflexo do engajamento dos movimentos negros na Assembleia Constituinte.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Legislação</th>
                <th>Ano</th>
                <th>O que estabelece</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Constituição Federal</td>
                <td>1988</td>
                <td>Racismo é crime inafiançável e imprescritível (Art. 5°, XLII)</td>
              </tr>
              <tr>
                <td>Lei Caó (7.716/89)</td>
                <td>1989</td>
                <td>Define os crimes resultantes de preconceito de raça ou cor; pena de 1 a 5 anos</td>
              </tr>
              <tr>
                <td>Lei 10.639/03</td>
                <td>2003</td>
                <td>Torna obrigatório o ensino de história e cultura afro-brasileira e africana nas escolas</td>
              </tr>
              <tr>
                <td>Estatuto da Igualdade Racial</td>
                <td>2010</td>
                <td>Garante direitos à população negra em saúde, educação, cultura, esporte e acesso à terra</td>
              </tr>
              <tr>
                <td>Cotas raciais (Lei 12.711/12)</td>
                <td>2012</td>
                <td>Reserva vagas em universidades e institutos federais para negros, pardos e indígenas</td>
              </tr>
              <tr>
                <td>STF — renovação das cotas</td>
                <td>2023</td>
                <td>Confirma constitucionalidade e renova as cotas por mais 10 anos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          As <strong>ações afirmativas</strong> não visam à igualdade de tratamento (todos
          recebem o mesmo), mas à <strong>igualdade de oportunidade</strong> (compensar
          desvantagens históricas). Partem do princípio aristotélico de que "tratar
          desigualmente os desiguais" é condição de justiça.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cotas</span>
        <h2>7. Cotas Raciais: Debate e Impactos</h2>
        <p>
          A implementação das cotas raciais nas universidades federais brasileiras,
          estabelecida pela Lei 12.711/2012, foi um dos momentos mais controversos
          da política brasileira contemporânea. Defensores e críticos apresentaram
          argumentos sociológicos, jurídicos e filosóficos.
        </p>
        <p>
          Estudos de avaliação mostram resultados positivos: pesquisa da UFMG demonstrou
          que cotistas têm desempenho acadêmico equivalente ou superior ao dos não cotistas
          após o ingresso, evidenciando que o problema não era capacidade, mas acesso.
          O IPEA estimou que, sem cotas, a universalização do ensino superior para negros
          levaria mais de 40 anos além do prazo previsto para brancos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Argumentos favoráveis</h3>
            <p>
              Compensação de desvantagem histórica; diversidade enriquece o ambiente
              acadêmico; amplia mobilidade social; produz profissionais negros em áreas
              de prestígio (medicina, direito, engenharia).
            </p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Argumentos contrários</h3>
            <p>
              Dificuldade de definir quem é negro no Brasil; suposta "racialização"
              da sociedade; argumento de que cotas de renda seriam mais justas;
              alegação de rebaixamento do nível acadêmico (refutada por pesquisas).
            </p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Posição do STF</h3>
            <p>
              Em 2012 (ADPF 186) e 2023, o STF decidiu unanimemente pela
              constitucionalidade das cotas, reconhecendo que a desigualdade racial
              exige medidas específicas de reparação histórica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Impacto nas universidades</h3>
          <p>
            Entre 2013 e 2022, a proporção de estudantes negros nas universidades federais
            dobrou, passando de cerca de 26% para 52% — pela primeira vez, representando
            a proporção da população negra no país. As cotas não eliminaram a desigualdade,
            mas a reduziram significativamente no acesso ao ensino superior público.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Violência e Racismo</span>
        <h2>8. Racismo, Violência e o Sistema de Segurança Pública</h2>
        <p>
          O <strong>Atlas da Violência 2023</strong> (IPEA e FBSP) revela dados alarmantes
          sobre a dimensão racial da violência no Brasil: jovens negros (pretos e pardos)
          representam 77% das vítimas de homicídio, embora correspondam a 56% da população.
          A taxa de homicídio de jovens negros é 2,6 vezes maior que a de jovens brancos.
          Esses números evidenciam o que estudiosos chamam de <strong>genocídio negro</strong>.
        </p>
        <p>
          O sistema de segurança pública reproduz o racismo estrutural de forma institucional:
          negros são abordados, presos e mortos pela polícia em proporção muito maior que
          brancos em situações similares. A <strong>letalidade policial</strong> é
          desproporcionalmente concentrada em corpos negros: segundo o Anuário Brasileiro
          de Segurança Pública 2023, 84% das vítimas de intervenções policiais que resultaram
          em morte eram negras.
        </p>
        <p>
          O encarceramento em massa também tem dimensão racial: negros representam 64% da
          população carcerária brasileira (DEPEN 2022). A pesquisadora Michelle Alexander,
          ao analisar os EUA em <em>A Nova Segregação</em> (2010), mostrou como o
          encarceramento em massa funciona como sistema de controle racial — análise
          aplicável ao contexto brasileiro.
        </p>

        <div className="lesson-highlight">
          <h3>Racismo ambiental</h3>
          <p>
            O conceito de <strong>racismo ambiental</strong>, desenvolvido pelo pastor Robert
            Bullard nos EUA, refere-se à tendência de depósitos de lixo, indústrias poluentes
            e projetos de infraestrutura prejudiciais serem instalados em comunidades negras e
            pobres. No Brasil, comunidades quilombolas e periferias negras são
            desproporcionalmente afetadas por catástrofes ambientais e pela ausência de
            saneamento básico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos Negros</span>
        <h2>9. Movimentos Negros e Resistência no Brasil</h2>
        <p>
          A história dos movimentos negros brasileiros é longa e articulada com as lutas
          globais pela liberdade e igualdade. Desde os <strong>quilombos</strong> — comunidades
          formadas por escravizados fugidos — até os movimentos contemporâneos, a resistência
          negra foi central na história do país. O Quilombo dos Palmares, liderado por
          Zumbi, resistiu por quase um século (1605–1695) e tornou-se símbolo da resistência
          negra: o 20 de novembro (data da morte de Zumbi) é o Dia da Consciência Negra.
        </p>
        <p>
          No século XX, destaca-se a <strong>Frente Negra Brasileira</strong> (1931–1937),
          primeira organização política negra de massa no Brasil; o <strong>Teatro
          Experimental do Negro</strong> (TEN), fundado por Abdias do Nascimento em 1944,
          que promoveu a cultura afro-brasileira e denunciou o racismo; e o{" "}
          <strong>Movimento Negro Unificado</strong> (MNU, 1978), que foi fundamental na
          pressão pela redemocratização e na inclusão dos direitos raciais na Constituição.
        </p>
        <p>
          Contemporaneamente, o movimento negro influenciou a aprovação das cotas, a Lei
          10.639/03 e o Estatuto da Igualdade Racial. O <strong>Movimento Negro Unificado</strong>,
          o <strong>Educafro</strong> e organizações quilombolas continuam pressionando por
          políticas de reparação histórica, regularização fundiária de quilombos e combate
          ao racismo institucional.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marco</th>
                <th>Período</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quilombo dos Palmares</td>
                <td>1605–1695</td>
                <td>Maior comunidade quilombola; símbolo de resistência; Zumbi como ícone</td>
              </tr>
              <tr>
                <td>Abolição (Lei Áurea)</td>
                <td>1888</td>
                <td>Fim formal da escravidão, sem políticas de integração social</td>
              </tr>
              <tr>
                <td>Frente Negra Brasileira</td>
                <td>1931–1937</td>
                <td>Primeira organização política negra de massa; combate à discriminação</td>
              </tr>
              <tr>
                <td>Teatro Experimental do Negro</td>
                <td>1944–1961</td>
                <td>Abdias do Nascimento; valorização da cultura negra e denúncia do racismo</td>
              </tr>
              <tr>
                <td>Movimento Negro Unificado</td>
                <td>1978–presente</td>
                <td>Redemocratização; pressão por direitos constitucionais e cotas</td>
              </tr>
              <tr>
                <td>Dia da Consciência Negra</td>
                <td>20/11</td>
                <td>Homenagem a Zumbi; feriado nacional desde 2023 (Lei 14.759/2023)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura e Identidade</span>
        <h2>10. Cultura Afro-Brasileira e Identidade Nacional</h2>
        <p>
          A contribuição africana para a formação cultural do Brasil é imensurável, apesar
          de historicamente silenciada. A <strong>cultura afro-brasileira</strong> está
          presente em todos os aspectos da vida nacional: na língua (termos de origem
          bantu e iorubá no português brasileiro), na culinária (acarajé, feijoada,
          vatapá), na música (samba, maracatu, funk, axé), na religiosidade (candomblé,
          umbanda) e nas artes.
        </p>
        <p>
          O <strong>candomblé</strong> e a <strong>umbanda</strong> são expressões da
          resistência cultural: mesmo proibidos e perseguidos durante séculos, os cultos
          afro-brasileiros sobreviveram e se desenvolveram como espaços de identidade,
          solidariedade e resistência. A criminalização histórica das religiões de matriz
          africana é reconhecida como <strong>racismo religioso</strong> — ainda presente
          em casos de intolerância e violência contra terreiros.
        </p>
        <p>
          A <strong>Lei 10.639/03</strong> foi um marco na valorização da história e cultura
          africana e afro-brasileira no currículo escolar. Antes dela, a história da África
          era praticamente ausente dos livros didáticos brasileiros, e a contribuição negra
          à formação do país era reduzida ao período da escravidão. A lei representa o
          reconhecimento de que a identidade nacional é fundamentalmente afro-brasileira.
        </p>

        <div className="lesson-highlight">
          <h3>Quilombos contemporâneos</h3>
          <p>
            O Brasil possui mais de 3.000 comunidades quilombolas reconhecidas, espalhadas
            por todo o território nacional. A Constituição de 1988 (Art. 68 dos ADCT) garante
            aos remanescentes de quilombos a propriedade das terras que ocupam, mas a
            regularização fundiária é lenta e disputada: apenas cerca de 140 territórios
            foram titulados até 2023. A luta por terra é, também, uma luta contra o
            racismo estrutural que historicamente expropriou as comunidades negras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Raça como construção social"
          statement={<p>Do ponto de vista científico contemporâneo, o conceito de raça humana é considerado:</p>}
          options={[
            { letter: "A", text: "Uma categoria biológica válida, com base nas diferenças genéticas entre populações humanas." },
            { letter: "B", text: "Uma construção social sem impactos reais nas condições de vida das pessoas." },
            { letter: "C", text: "Cientificamente inválido como categoria biológica, mas socialmente real em seus efeitos, pois organiza desigualdades.", correct: true },
            { letter: "D", text: "Uma invenção moderna sem raízes históricas no período colonial." },
            { letter: "E", text: "Um conceito superado que não deve mais ser estudado pela Sociologia." },
          ]}
          resolution={<p>A genética demonstrou que não existem raças humanas biologicamente distintas — humanos compartilham 99,9% do DNA. No entanto, raça é uma construção social com efeitos reais: pessoas são classificadas e tratadas diferentemente com base em características físicas, gerando desigualdades mensuráveis em renda, educação, violência e encarceramento.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Democracia racial"
          statement={<p>O "mito da democracia racial", associado à obra de Gilberto Freyre e criticado por Florestan Fernandes, consiste na ideia de que:</p>}
          options={[
            { letter: "A", text: "O Brasil é um país profundamente racista e não há nenhuma convivência entre diferentes grupos raciais." },
            { letter: "B", text: "A miscigenação brasileira teria gerado uma sociedade harmônica, sem conflitos raciais relevantes, ocultando o racismo real e impedindo seu combate.", correct: true },
            { letter: "C", text: "A democracia racial só será alcançada quando o Brasil abolir todas as políticas de cotas raciais." },
            { letter: "D", text: "O Brasil foi o único país que integrou completamente seus escravizados após a abolição." },
            { letter: "E", text: "A democracia racial é uma meta constitucional explicitamente estabelecida na CF/88." },
          ]}
          resolution={<p>Gilberto Freyre valorizou a miscigenação como base de uma convivência harmônica entre raças. Florestan Fernandes demonstrou empiricamente que isso era um mito: negros foram excluídos do mercado de trabalho após a Abolição e o racismo permaneceu ativo. O mito funciona como ideologia: ao naturalizar uma harmonia inexistente, dificulta a identificação e o combate ao racismo real.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Racismo estrutural"
          statement={<p>Segundo Silvio Almeida, o racismo <strong>estrutural</strong> se diferencia do racismo individual porque:</p>}
          options={[
            { letter: "A", text: "É praticado apenas por grupos organizados com ideologia racista explícita, como neonazistas." },
            { letter: "B", text: "Não produz desigualdades reais, sendo apenas uma forma de preconceito interno a indivíduos." },
            { letter: "C", text: "Não requer intenção discriminatória individual para funcionar: está incorporado nas estruturas sociais, econômicas e políticas, reproduzindo desigualdades raciais sistematicamente.", correct: true },
            { letter: "D", text: "É uma forma de racismo superada com a criminalização do preconceito racial na CF/88." },
            { letter: "E", text: "Afeta apenas países que nunca promoveram políticas de igualdade racial." },
          ]}
          resolution={<p>Para Silvio Almeida, o racismo estrutural não precisa de racistas para funcionar: está embutido nas instituições, nas práticas e nas estruturas que reproduzem desigualdades raciais automaticamente. Uma empresa pode não ter política discriminatória explícita, mas se seus processos de seleção excluem sistematicamente negros, pratica racismo institucional decorrente do estrutural.</p>}
        />

        <Exercise
          level="Avançado"
          title="Ações afirmativas e igualdade"
          statement={
            <p>
              As políticas de cotas raciais nas universidades brasileiras, confirmadas pelo STF em
              2012 e renovadas em 2023, têm como fundamento constitucional e sociológico o
              princípio de que:
            </p>
          }
          options={[
            { letter: "A", text: "A igualdade formal perante a lei é suficiente para garantir igualdade de oportunidades a todos." },
            { letter: "B", text: "Tratar de forma idêntica pessoas em situações desiguais aprofunda a desigualdade; ações afirmativas corrigem desvantagens históricas estruturais.", correct: true },
            { letter: "C", text: "As cotas raciais violam o princípio de igualdade, pois criam privilégios para grupos específicos." },
            { letter: "D", text: "A raça é o único fator determinante do desempenho acadêmico, justificando tratamento diferenciado permanente." },
            { letter: "E", text: "As políticas afirmativas devem ser baseadas exclusivamente em critérios de renda, sem qualquer consideração racial." },
          ]}
          resolution={<p>As ações afirmativas partem do princípio aristotélico de que "tratar desigualmente os desiguais" é condição de justiça. A desigualdade racial no acesso ao ensino superior não é resultado de menor capacidade, mas de séculos de exclusão histórica (escravidão, branqueamento, exclusão educacional). As cotas não criam privilégio — compensam desvantagem estrutural.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Atlas da Violência e racismo"
          statement={
            <>
              <p>
                Segundo o Atlas da Violência 2023, jovens negros (pretos e pardos) representam
                77% das vítimas de homicídio no Brasil, embora correspondam a 56% da população.
                A taxa de homicídio de jovens negros é 2,6 vezes maior que a de jovens brancos.
                Segundo o Anuário Brasileiro de Segurança Pública 2023, 84% das vítimas de
                intervenções policiais que resultaram em morte eram negras.
              </p>
              <p>Com base nos dados, assinale a alternativa correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "Os dados refletem exclusivamente diferenças culturais entre grupos raciais, sem relação com o racismo institucional." },
            { letter: "B", text: "A sobrerrepresentação de negros nas vítimas de violência é explicada por fatores genéticos que aumentam a propensão à criminalidade." },
            { letter: "C", text: "Os dados evidenciam racismo institucional no sistema de segurança pública, que trata negros como suspeitos preferenciais, reproduzindo e aprofundando desigualdades raciais.", correct: true },
            { letter: "D", text: "A violência contra jovens negros é resultado exclusivo das condições econômicas, sem nenhuma dimensão racial específica." },
            { letter: "E", text: "Os dados são inválidos porque a raça não existe como categoria social no Brasil." },
          ]}
          resolution={<p>Os dados do Atlas da Violência revelam racismo institucional no sistema de segurança pública: negros são selecionados preferencialmente para abordagens policiais, prisões e são desproporcionalmente vítimas de violência letal — inclusive por parte do Estado (letalidade policial). Isso não decorre de genes ou cultura, mas de um sistema que trata negros como suspeitos e os expõe a maior risco. É o racismo estrutural e institucional em ação.</p>}
        />
      </section>
    </article>
  );
}
