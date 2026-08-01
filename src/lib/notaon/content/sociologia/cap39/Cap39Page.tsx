"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 39</span>
          <h1>Temas Contemporâneos Recorrentes no ENEM</h1>
          <p>
            O ENEM de Sociologia não cobra apenas teorias clássicas: exige que o estudante leia
            a realidade social contemporânea com olhar sociológico. Juventude, saúde pública,
            meio ambiente, democracia, movimentos sociais e questões étnico-raciais são temas
            que aparecem sistematicamente, sempre exigindo a aplicação de conceitos e autores
            para interpretar textos de apoio com precisão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Juventude</span>
        <h2>1. Juventude, Identidade e Violência</h2>
        <p>
          A juventude é uma categoria social construída historicamente — não é apenas uma fase
          biológica, mas um período definido culturalmente e atravessado por desigualdades de
          classe, raça e gênero. Ser jovem em sociedades desiguais significa experiências
          radicalmente distintas: enquanto jovens de classe média têm moratória social (tempo
          para estudar e explorar identidades), jovens pobres precisam trabalhar cedo e assumir
          responsabilidades adultas prematuramente.
        </p>
        <p>
          No Brasil, a equação "ser jovem, negro e periférico" significa exposição desproporcional
          à violência. O <strong>Atlas da Violência</strong> (IPEA/FBSP) documenta sistematicamente:
          jovens negros de 15 a 29 anos têm taxa de homicídio 2,5 a 3 vezes maior do que jovens
          brancos da mesma faixa etária. Essa não é uma tragédia inevitável — é o resultado de
          desigualdades estruturais que o Estado perpetua por ação (violência policial) e omissão
          (ausência de políticas públicas).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Moratória social</h3>
            <p>Período de "suspensão" das responsabilidades adultas para investir em formação. Privilégio de jovens de classe média e alta; jovens pobres raramente têm essa proteção.</p>
          </div>
          <div className="lesson-card">
            <span>🏫</span>
            <h3>Violência escolar e bullying</h3>
            <p>PENSE/IBGE: mais de 20% dos estudantes brasileiros relatam ter sofrido bullying. Violência simbólica (Bourdieu) que gera exclusão, evasão escolar e adoecimento psíquico.</p>
          </div>
          <div className="lesson-card">
            <span>🌆</span>
            <h3>Territorialidade e gangues</h3>
            <p>Em contextos de privação econômica, grupos juvenis constroem identidade e proteção em gangues, respondendo à falência das instituições (família, escola, Estado) nesses territórios.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Juventude e redes sociais</h3>
            <p>Redes sociais são espaço central de sociabilidade juvenil, mas também de cyberbullying, radicalização política, exposição a padrões corporais irreais e dependência tecnológica.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Violência simbólica × violência física (Bourdieu)</h3>
          <p>
            Bourdieu distingue a violência física (coação corporal direta) da <strong>violência
            simbólica</strong>: dominação exercida com a cumplicidade inconsciente dos dominados,
            que a percebem como natural, legítima ou até merecida. O preconceito escolar contra
            estudantes periféricos — que internalizam a ideia de que "não são capazes" —, o
            bullying homofóbico e o racismo cotidiano são formas de violência simbólica com
            consequências concretas e mensuráveis sobre trajetórias de vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde Pública</span>
        <h2>2. Saúde Pública e Determinantes Sociais</h2>
        <p>
          A saúde não é apenas ausência de doença: é determinada por condições socioeconômicas,
          ambientais e culturais. A OMS define os <strong>determinantes sociais de saúde</strong>
          como as condições em que as pessoas nascem, crescem, vivem, trabalham e envelhecem.
          Essa perspectiva transforma a saúde em um problema político — e a desigualdade social
          em um problema de saúde pública.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏥</span>
            <h3>SUS — Sistema Único de Saúde</h3>
            <p>Garantido pela Constituição de 1988. Princípios: universalidade (para todos), integralidade (todos os aspectos da saúde) e equidade (mais para quem precisa mais). Maior sistema público de saúde do mundo.</p>
          </div>
          <div className="lesson-card">
            <span>🦠</span>
            <h3>COVID-19 como questão sociológica</h3>
            <p>A pandemia revelou que vírus afeta desigualmente: trabalhadores informais, população em favelas e grupos sem acesso a saneamento tiveram maior mortalidade. "O vírus não escolhe — a desigualdade sim."</p>
          </div>
          <div className="lesson-card">
            <span>⚕️</span>
            <h3>Racismo na saúde</h3>
            <p>Pesquisas documentam: pacientes negros recebem menos analgésicos, são menos encaminhados a especialistas e têm diagnósticos mais tardios. Preconceito implícito dos profissionais é fator documentado.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Saúde mental como questão social</h3>
            <p>Aumento de ansiedade, depressão e suicídio entre jovens é relacionado a pressão escolar, uso de redes sociais, insegurança econômica e — especialmente para negros e LGBTs — violência e discriminação.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Medicalização da vida social (Peter Conrad)</h3>
          <p>
            Peter Conrad (2007) descreveu o processo pelo qual problemas sociais são reinterpretados
            como questões médicas individuais: pobreza vira "depressão a tratar", agitação infantil
            em sala superlotada vira TDAH, timidez vira "transtorno de ansiedade social". A crítica
            sociológica não nega o sofrimento, mas questiona quando a medicina substitui soluções
            políticas e estruturais por diagnósticos e medicamentos individuais — mantendo as causas
            sociais intocadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meio Ambiente</span>
        <h2>3. Meio Ambiente, Sustentabilidade e Injustiça Ambiental</h2>
        <p>
          As mudanças climáticas não afetam a todos igualmente: os países e populações que menos
          contribuíram para as emissões históricas de CO₂ são os mais vulneráveis às suas
          consequências — secas, inundações, desertificação, insegurança alimentar. Isso é
          a <strong>injustiça ambiental</strong>: distribuição desigual dos riscos e danos
          ambientais sobre grupos já marginalizados.
        </p>
        <p>
          No Brasil, a injustiça ambiental tem faces concretas: comunidades quilombolas e
          indígenas são as primeiras vítimas do agronegócio predatório e da mineração ilegal.
          Favelas em encostas são as primeiras a desmoronar com chuvas intensas. Trabalhadores
          rurais são os primeiros a ser intoxicados por agrotóxicos. O sociólogo Henri Acselrad
          (UFRJ) sistematizou esse debate para o contexto brasileiro, mostrando que a "decisão
          de onde colocar o lixo" é sempre também uma decisão política sobre quais grupos
          suportarão os custos do desenvolvimento.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Autor/Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Desenvolvimento sustentável</td>
                <td>Atende às necessidades do presente sem comprometer as gerações futuras</td>
                <td>Relatório Brundtland (ONU, 1987)</td>
              </tr>
              <tr>
                <td>Injustiça ambiental</td>
                <td>Distribuição desigual dos riscos ambientais sobre grupos marginalizados</td>
                <td>Acselrad; Movimento de Justiça Ambiental (EUA)</td>
              </tr>
              <tr>
                <td>Ecossocialismo</td>
                <td>Não há sustentabilidade possível dentro do capitalismo; é preciso transformar a ordem econômica</td>
                <td>Michael Löwy; Murray Bookchin</td>
              </tr>
              <tr>
                <td>Débito ecológico</td>
                <td>Dívida histórica dos países ricos com os pobres pela exploração de recursos e emissões</td>
                <td>Martinez-Alier; movimentos do Sul Global</td>
              </tr>
              <tr>
                <td>Racismo ambiental</td>
                <td>Exposição desproporcional de populações negras e indígenas a riscos ambientais</td>
                <td>Robert Bullard (EUA); adaptações ao Brasil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia</span>
        <h2>4. Democracia, Polarização e Ameaças às Instituições</h2>
        <p>
          A democracia liberal enfrenta, no século XXI, ameaças que não vêm de golpes militares
          clássicos, mas de erosão lenta por dentro das instituições. Steven Levitsky e Daniel
          Ziblatt, em <em>Como as Democracias Morrem</em> (2018), identificam o padrão: líderes
          eleitos que gradualmente concentram poder, atacam a imprensa independente, enfraquecem
          o judiciário e polarizam a sociedade ao transformar adversários em inimigos.
        </p>
        <p>
          As redes sociais amplificam a polarização: algoritmos privilegiam conteúdo emocionalmente
          provocativo, criando câmaras de eco em que cada grupo vive em uma realidade informacional
          distinta. O resultado é o que Chantal Mouffe chama de "pós-democracia" e outros chamam
          de "democracia iliberal": formalmente democrática (eleições ocorrem), mas estruturalmente
          autoritária (oposição criminalizada, mídia cooptada, judiciário subordinado).
        </p>
        <div className="lesson-highlight">
          <h3>Indicadores de erosão democrática (Levitsky e Ziblatt)</h3>
          <p>
            Os autores identificam sinais de alerta: (1) rejeição das normas democráticas —
            líderes que recusam aceitar resultados eleitorais; (2) negação da legitimidade dos
            adversários — classificar opositores como criminosos ou inimigos da nação;
            (3) tolerância ou encorajamento de violência; (4) disposição de restringir liberdades
            civis de opositores, incluindo mídia. Esses critérios são aplicáveis à análise de
            casos como Hungria, Venezuela, Turquia e Brasil pós-2018.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos Sociais</span>
        <h2>5. Movimentos Sociais Contemporâneos</h2>
        <p>
          Os movimentos sociais são ações coletivas organizadas que buscam transformar ou
          preservar estruturas sociais e políticas. Desde os clássicos movimentos operários do
          século XIX, passando pelos movimentos de direitos civis e feminismo dos anos 1960-70,
          até os movimentos em rede do século XXI, a forma e o conteúdo das lutas coletivas
          evoluíram substancialmente.
        </p>
        <p>
          Alain Touraine distinguiu os "velhos movimentos sociais" (centrados no trabalho e na
          luta de classes) dos "novos movimentos sociais" (centrados na identidade, na cultura
          e no reconhecimento): feminismo, movimento negro, LGBTQIA+, movimento indígena,
          ambientalismo. Manuel Castells, em "Redes de Indignação e Esperança" (2012), analisa
          como as redes sociais digitais permitem novos formatos de mobilização: horizontal,
          sem liderança centralizada, capaz de escalar rapidamente.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento negro e antirracismo</h3>
            <p>No Brasil, organizações como o MNU (Movimento Negro Unificado, 1978), o movimento das Mães de Maio e o #VidasNegrasImportam demandam desde direitos civis básicos até reparações históricas.</p>
          </div>
          <div className="lesson-card">
            <span>♀️</span>
            <h3>Feminismo e movimento de mulheres</h3>
            <p>#MeToo, #EleNão (2018), Marcha das Mulheres: lutas contra o feminicídio, assédio, desigualdade salarial e violência doméstica. Lei Maria da Penha (11.340/2006) como conquista do movimento.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Ambientalismo</h3>
            <p>Fridays for Future (Greta Thunberg), movimentos indígenas pela terra, APIB (Articulação dos Povos Indígenas do Brasil): interseção entre luta ambiental, territorial e de reconhecimento cultural.</p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Movimentos por moradia</h3>
            <p>MTST (Movimento dos Trabalhadores Sem Teto) e MST (Movimento dos Sem Terra): luta pela reforma agrária e urbana no contexto de concentração de terra e especulação imobiliária no Brasil.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Questão Racial</span>
        <h2>6. Racismo Estrutural e Políticas de Igualdade Racial no Brasil</h2>
        <p>
          O Brasil foi o último país das Américas a abolir a escravidão (1888) e o fez sem
          qualquer política de integração ou reparação. A ideia de "democracia racial" — de que
          o Brasil seria isento de preconceito racial por causa da mestiçagem — foi sistematicamente
          desconstruída por sociólogos como Florestan Fernandes, Carlos Hasenbalg e Silvio Almeida.
          Os dados são inequívocos: negros têm menor renda, menor escolaridade, maior mortalidade
          e maior encarceramento do que brancos com escolaridade equivalente.
        </p>
        <p>
          <strong>Silvio Almeida</strong>, em "Racismo Estrutural" (2018), distingue três dimensões
          do racismo: (1) individual — atos de preconceito deliberado; (2) institucional —
          práticas discriminatórias de organizações mesmo sem intenção explícita; (3) estrutural
          — racismo como elemento constitutivo da ordem econômica e social, que se reproduz
          independentemente de intenções. O racismo estrutural é a dimensão mais difícil de
          combater porque é a mais invisível.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Política</th>
                <th>Objetivos</th>
                <th>Fundamento sociológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cotas universitárias (Lei 12.711/2012)</td>
                <td>Reserva de vagas para negros, indígenas e escola pública em universidades federais</td>
                <td>Ação afirmativa para corrigir desigualdades históricas acumuladas</td>
              </tr>
              <tr>
                <td>Estatuto da Igualdade Racial (Lei 12.288/2010)</td>
                <td>Garantia de direitos da população negra em saúde, educação, cultura e lazer</td>
                <td>Reconhecimento jurídico do racismo estrutural e dever reparatório do Estado</td>
              </tr>
              <tr>
                <td>Lei Caó (Lei 7.716/1989)</td>
                <td>Criminalização da discriminação racial</td>
                <td>Controle formal do racismo individual; limitada no combate ao racismo estrutural</td>
              </tr>
              <tr>
                <td>Cotas no serviço público (Lei 12.990/2014)</td>
                <td>Reserva de 20% das vagas em concursos para candidatos negros</td>
                <td>Representatividade institucional e quebra do teto de vidro racial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gênero e Sexualidade</span>
        <h2>7. Gênero, Feminismo e Diversidade Sexual</h2>
        <p>
          Gênero é uma categoria analítica que se refere ao conjunto de normas, práticas e
          identidades socialmente construídas sobre o que significa ser homem, mulher ou
          qualquer outra identidade de gênero. Diferentemente do sexo biológico, o gênero é
          aprendido, performado e variável cultural e historicamente.
        </p>
        <p>
          Simone de Beauvoir já afirmava em 1949: "Não se nasce mulher, torna-se." Judith Butler
          radicalizou essa perspectiva com o conceito de <strong>performatividade de gênero</strong>:
          o gênero não é expressão de uma identidade interior fixa, mas uma série de atos repetidos
          que produzem o efeito de naturalidade. No Brasil, o debate sobre gênero cruza com questões
          de violência: o feminicídio mata em média 4 mulheres por dia (Monitor da Violência/G1, 2023),
          e a violência LGBTfóbica coloca o Brasil como líder mundial em assassinatos de travestis
          e pessoas trans (Antra, 2023).
        </p>
        <div className="lesson-highlight">
          <h3>Interseccionalidade (Kimberlé Crenshaw)</h3>
          <p>
            O conceito de interseccionalidade, desenvolvido pela jurista Kimberlé Crenshaw (1989),
            argumenta que as opressões de gênero, raça e classe não são separadas e aditivas —
            elas se entrecruzam e se potencializam mutuamente. Uma mulher negra de baixa renda
            vive uma experiência específica que não pode ser compreendida olhando apenas para
            o gênero, ou apenas para a raça, ou apenas para a classe. A interseccionalidade
            revolucionou o feminismo ao questionar qual mulher estava no centro do discurso
            feminista hegemônico (branca, de classe média, heterossexual).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho e Desigualdade</span>
        <h2>8. Desigualdade de Renda e Pobreza no Brasil</h2>
        <p>
          O Brasil é historicamente um dos países mais desiguais do mundo, medido pelo índice de
          Gini. Embora tenha havido redução da desigualdade entre 2003 e 2014 (efeito das políticas
          sociais do período Lula-Dilma: Bolsa Família, valorização do salário mínimo, expansão
          do emprego formal), a desigualdade voltou a crescer após 2015.
        </p>
        <p>
          A <strong>pobreza multidimensional</strong> vai além da renda: inclui privações em saúde,
          educação, habitação, saneamento e energia. O Índice de Desenvolvimento Humano (IDH) do
          PNUD mede essa multidimensionalidade. No Brasil, existem "Brasis" dentro do Brasil:
          o IDH de municípios do Nordeste rural é comparável ao de países da África Subsaariana,
          enquanto bairros nobres de São Paulo têm IDH equivalente ao da Suíça.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Índice de Gini</h3>
            <p>Mede desigualdade de renda: 0 = igualdade perfeita; 1 = desigualdade máxima. Brasil oscila entre 0,50 e 0,60, entre os mais altos do mundo. Oxfam documentou que os 5 mais ricos têm riqueza igual à da metade mais pobre.</p>
          </div>
          <div className="lesson-card">
            <span>👨‍👩‍👧</span>
            <h3>Bolsa Família / CadÚnico</h3>
            <p>Programa de transferência de renda condicional: maior do mundo em termos de cobertura proporcional. Apontado como um dos principais responsáveis pela redução da pobreza extrema no período 2003-2014.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Mobilidade social</h3>
            <p>Piketty e pesquisadores do IPEA mostram que a mobilidade social intergeracional é baixa no Brasil: filhos tendem a reproduzir a posição social dos pais, especialmente entre os mais ricos e os mais pobres.</p>
          </div>
          <div className="lesson-card">
            <span>🏚️</span>
            <h3>Deficit habitacional</h3>
            <p>Brasil tem deficit de mais de 8 milhões de moradias, concentrado entre as famílias com renda até 3 salários mínimos. A especulação imobiliária expulsa os pobres das cidades para periferias sem serviços.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Questão Indígena</span>
        <h2>9. Populações Indígenas e Quilombolas: Direitos e Conflitos</h2>
        <p>
          A Constituição Federal de 1988 representou uma virada histórica no tratamento jurídico
          das populações indígenas no Brasil: pelo art. 231, reconheceu aos índios sua organização
          social, costumes, línguas, crenças e tradições, e os direitos originários sobre as
          terras que tradicionalmente ocupam. Antes de 1988, a legislação indigenista era
          tutelar — os indígenas eram tratados como "relativamente incapazes", sob tutela do
          Estado (FUNAI).
        </p>
        <p>
          Apesar dos avanços constitucionais, a questão indígena permanece como um dos temas
          mais conflituosos da política brasileira. O agronegócio, a mineração ilegal e as
          hidrelétricas representam ameaças permanentes aos territórios demarcados — e
          especialmente às terras ainda em processo de demarcação. A APIB (Articulação dos
          Povos Indígenas do Brasil) consolidou-se como a maior organização política indígena
          do país, com projeção internacional nos debates sobre clima e direitos humanos.
        </p>
        <div className="lesson-highlight">
          <h3>Comunidades quilombolas</h3>
          <p>
            O art. 68 do ADCT (Ato das Disposições Constitucionais Transitórias) garante às
            comunidades remanescentes de quilombos a propriedade definitiva de suas terras.
            Mais de 3.500 comunidades quilombolas foram certificadas pela Fundação Cultural
            Palmares, mas apenas uma pequena fração tem titulação definitiva. As disputas
            por terras quilombolas cruzam as mesmas forças do agronegócio que ameaçam terras
            indígenas, tornando indígenas e quilombolas aliados naturais na luta por território.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa Estratégico</span>
        <h2>10. Como o ENEM Cobra Temas Contemporâneos — Guia de Estratégia</h2>
        <p>
          O ENEM nunca cobra temas contemporâneos de forma isolada: sempre conecta o fenômeno
          atual a um conceito sociológico clássico ou a uma teoria. A estratégia é identificar
          qual lente teórica o texto de apoio está usando — ou qual o enunciado pede que se
          aplique ao caso descrito.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema contemporâneo</th>
                <th>Por que o ENEM cobra?</th>
                <th>Conceitos sociológicos aplicáveis</th>
                <th>Autores-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juventude e violência</td>
                <td>Cidadania, direitos e exclusão são competências centrais do ENEM</td>
                <td>Violência simbólica, anomia, controle social, moratória social</td>
                <td>Bourdieu, Durkheim, Wacquant, Abramo</td>
              </tr>
              <tr>
                <td>Saúde pública</td>
                <td>Saúde como direito social; intersecção com raça e classe</td>
                <td>Determinantes sociais, racismo estrutural, medicalização, biopolítica</td>
                <td>Foucault, Conrad, Almeida, OMS</td>
              </tr>
              <tr>
                <td>Meio ambiente</td>
                <td>Sustentabilidade e injustiça ambiental são temas transversais</td>
                <td>Injustiça ambiental, desenvolvimento sustentável, ecossocialismo, racismo ambiental</td>
                <td>Acselrad, Brundtland, Löwy, Bullard</td>
              </tr>
              <tr>
                <td>Democracia e polarização</td>
                <td>Cidadania, Estado e direitos políticos são eixos do ENEM</td>
                <td>Esfera pública, câmaras de eco, populismo, erosão democrática</td>
                <td>Habermas, Levitsky, Mouffe, Castells</td>
              </tr>
              <tr>
                <td>Racismo estrutural</td>
                <td>Desigualdades étnico-raciais são tema obrigatório nos currículos</td>
                <td>Racismo estrutural, mito da democracia racial, interseccionalidade</td>
                <td>Almeida, Fernandes, Hasenbalg, Crenshaw</td>
              </tr>
              <tr>
                <td>Gênero e feminismo</td>
                <td>Igualdade de gênero e violência doméstica são temas recorrentes</td>
                <td>Patriarcado, divisão sexual do trabalho, interseccionalidade, performatividade</td>
                <td>Beauvoir, Butler, Saffioti, Crenshaw</td>
              </tr>
              <tr>
                <td>Povos indígenas e quilombolas</td>
                <td>Diversidade cultural e direitos coletivos são competências do ENEM</td>
                <td>Etnocentrismo, relativismo cultural, multiculturalismo, injustiça ambiental</td>
                <td>Boas, Lévi-Strauss, Cunha, Krenak</td>
              </tr>
              <tr>
                <td>Movimentos sociais</td>
                <td>Participação política e cidadania ativa são competências centrais</td>
                <td>Novos movimentos sociais, ação coletiva, contrapoder, repertório de ação</td>
                <td>Touraine, Tarrow, Castells, Alonso</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica estratégica: identificando a pegadinha mais comum</h3>
          <p>
            O ENEM frequentemente apresenta alternativas que confundem autores e conceitos.
            As trocas mais comuns: alienação (Marx) versus anomia (Durkheim); burocracia
            (Weber) versus fordismo (Marx/Gramsci); habitus (Bourdieu) versus hábito;
            etnocentrismo (Sumner/Lévi-Strauss) versus racismo (conceito mais amplo que
            inclui poder estrutural). Identificar o autor correto a partir de palavras-chave
            no texto é a habilidade central para esse tipo de questão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Violência e juventude negra"
          statement={<p>Dados do Atlas da Violência mostram sistematicamente que jovens negros têm taxas de homicídio muito superiores às de jovens brancos no Brasil. Sob a perspectiva sociológica, isso indica:</p>}
          options={[
            { letter: "A", text: "Uma tendência biológica ou cultural inerente à população negra que a predispõe à violência." },
            { letter: "B", text: "Que a violência é distribuída de forma aleatória na sociedade brasileira, sem padrão racial identificável." },
            { letter: "C", text: "O resultado de desigualdades estruturais — territoriais, econômicas e de acesso a direitos — que expõem desproporcionalmente jovens negros ao risco de morte.", correct: true },
            { letter: "D", text: "Que o sistema de segurança pública brasileiro é igualmente eficiente para todas as raças e classes sociais." },
            { letter: "E", text: "Uma consequência inevitável da urbanização acelerada, sem relação com fatores raciais específicos." },
          ]}
          resolution={<p>A concentração de homicídios entre jovens negros reflete a sobreposição de múltiplas desigualdades: segregação espacial em territórios sem serviços públicos, maior exposição à violência policial, exclusão do mercado formal de trabalho e menor acesso à educação de qualidade. É uma expressão do racismo estrutural — não de características individuais ou culturais do grupo. A alternativa A representa exatamente o tipo de naturalização ideológica que a Sociologia critica.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Determinantes sociais de saúde"
          statement={<p>O conceito de "determinantes sociais de saúde" é importante para a Sociologia porque:</p>}
          options={[
            { letter: "A", text: "Demonstra que a saúde é determinada exclusivamente por fatores genéticos e comportamentos individuais, independentemente do contexto social." },
            { letter: "B", text: "Reduz a saúde a uma questão médica, demonstrando a supremacia da biomedicina sobre as ciências sociais." },
            { letter: "C", text: "Evidencia que as condições socioeconômicas, ambientais e culturais em que as pessoas vivem determinam seu estado de saúde, tornando a desigualdade social um problema de saúde pública.", correct: true },
            { letter: "D", text: "Propõe que o acesso universal à saúde é suficiente para eliminar as desigualdades em saúde entre grupos sociais distintos." },
            { letter: "E", text: "Sugere que políticas de saúde pública são desnecessárias, pois a saúde individual depende apenas de escolhas pessoais." },
          ]}
          resolution={<p>Os determinantes sociais de saúde (OMS) mostram que renda, educação, habitação, saneamento e raça afetam diretamente a saúde das pessoas — muito mais do que o acesso a médicos. Isso transforma a saúde em uma questão política: combater a desigualdade social é, ao mesmo tempo, uma intervenção de saúde pública. Ter acesso ao SUS é importante, mas não resolve as causas estruturais das doenças.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Injustiça ambiental"
          statement={<p>O conceito de "injustiça ambiental" destaca que os danos causados pela degradação ambiental e pelas mudanças climáticas:</p>}
          options={[
            { letter: "A", text: "São distribuídos igualmente entre todas as classes sociais e nações, pois o meio ambiente não respeita fronteiras." },
            { letter: "B", text: "Afetam desproporcionalmente populações pobres, negras, indígenas e países periféricos, que menos contribuíram para a crise ambiental.", correct: true },
            { letter: "C", text: "Recaem principalmente sobre as nações industrializadas, que produzem mais resíduos e sofrem as consequências diretas de sua própria poluição." },
            { letter: "D", text: "São um problema exclusivamente técnico, resolúvel por inovações tecnológicas sem necessidade de transformações nas relações sociais." },
            { letter: "E", text: "Atingem preferencialmente populações de alta renda, que vivem em áreas urbanas de maior concentração de poluentes industriais." },
          ]}
          resolution={<p>A injustiça ambiental é a face ecológica da desigualdade social: depósitos de lixo tóxico ficam próximos a comunidades pobres e negras; populações indígenas perdem territórios para mineração; países da África e Ásia sofrem as piores secas e inundações causadas pelas emissões históricas dos países ricos. A luta ambiental é, portanto, também uma luta por justiça social e racial.</p>}
        />

        <Exercise
          level="Avançado"
          title="Racismo estrutural"
          statement={
            <p>
              Silvio Almeida, em "Racismo Estrutural" (2018), distingue três dimensões do racismo.
              A dimensão estrutural é aquela que:
            </p>
          }
          options={[
            { letter: "A", text: "Se manifesta apenas em atos de discriminação individual e intencional, como insultos raciais e recusas de atendimento explicitamente motivadas por preconceito." },
            { letter: "B", text: "Opera por meio de práticas discriminatórias de organizações e instituições, como empresas que contratam menos negros mesmo sem política formal de discriminação." },
            { letter: "C", text: "Constitui o racismo como elemento fundante da ordem social, econômica e política, reproduzindo desigualdades raciais independentemente de intenções individuais ou institucionais.", correct: true },
            { letter: "D", text: "Pode ser eliminada apenas com a criminalização severa de atos de discriminação racial, por meio da aplicação rigorosa da Lei Caó." },
            { letter: "E", text: "Existe apenas no Brasil, como herança específica da escravidão colonial, não tendo equivalentes em outras sociedades." },
          ]}
          resolution={<p>Almeida distingue: (1) racismo individual — atos deliberados de discriminação; (2) racismo institucional — práticas organizacionais que discriminam mesmo sem intenção; (3) racismo estrutural — dimensão mais profunda, em que o racismo é constitutivo da ordem social capitalista-colonial e se reproduz sistemicamente. O estrutural inclui os demais, mas vai além: explica por que políticas antirracistas pontuais são insuficientes sem transformação das estruturas econômicas e políticas.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Movimentos sociais contemporâneos"
          statement={
            <p>
              "O movimento #MeToo, iniciado nos Estados Unidos em 2017, rapidamente se espalhou
              globalmente pelas redes sociais, gerando uma onda de denúncias de assédio e violência
              sexual, especialmente no ambiente de trabalho. No Brasil, iniciativas como o
              movimento #ChegaDeFiufiu e as campanhas contra o assédio no transporte público
              mobilizaram milhares de mulheres sem uma liderança centralizada ou estrutura
              organizacional formal."
              <br /><br />
              Esse fenômeno é mais adequadamente analisado à luz de qual perspectiva?
            </p>
          }
          options={[
            { letter: "A", text: "Solidariedade mecânica (Durkheim): grupos femininos se unem pela semelhança de valores morais comuns em sociedades tradicionais." },
            { letter: "B", text: "Novos movimentos sociais em rede (Castells/Touraine): mobilizações identitárias horizontais, sem hierarquia centralizada, amplificadas por redes digitais, que articulam demandas de reconhecimento e transformação cultural.", correct: true },
            { letter: "C", text: "Dominação carismática (Weber): líderes com qualidades pessoais extraordinárias mobilizam seguidores em torno de causas específicas." },
            { letter: "D", text: "Funcionalismo estrutural (Parsons): movimentos sociais são mecanismos de reequilíbrio do sistema social ante disfunções temporárias." },
            { letter: "E", text: "Luta de classes (Marx): o movimento feminista é expressão da contradição entre burguesia e proletariado, com mulheres como classe explorada pelo capital." },
          ]}
          resolution={<p>O #MeToo exemplifica os "novos movimentos sociais" analisados por Touraine (centrados em identidade e reconhecimento, não apenas em trabalho) e a forma em rede descrita por Castells: horizontal, sem liderança centralizada, capaz de escalar globalmente por redes digitais, articulando demandas de reconhecimento (violência de gênero) e transformação cultural (padrões de comportamento aceitáveis no trabalho). A ausência de organização formal e hierarquia é precisamente a marca dos movimentos em rede do século XXI.</p>}
        />
      </section>
    </article>
  );
}
