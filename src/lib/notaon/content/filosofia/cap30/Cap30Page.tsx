"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 30</span>
          <h1>Escola de Frankfurt: Indústria Cultural e Sociedade de Massa</h1>
          <p>
            A Escola de Frankfurt produziu algumas das críticas mais penetrantes da cultura de massa,
            da razão instrumental e da sociedade capitalista moderna. Seus conceitos — indústria
            cultural, razão comunicativa, esfera pública — são recorrentes no ENEM e essenciais para
            analisar a mídia e a cultura contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. O Instituto de Pesquisa Social e Seus Pensadores</h2>
        <p>
          A Escola de Frankfurt refere-se ao Instituto de Pesquisa Social (<em>Institut für
          Sozialforschung</em>), fundado em 1923 em Frankfurt am Main, Alemanha. Com a ascensão
          do nazismo, seus membros — em sua maioria judeus marxistas — emigraram para os Estados
          Unidos (Nova Iorque, depois Los Angeles), onde continuaram pesquisando as razões pelas
          quais o fascismo triunfou.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pensador</th>
                <th>Contribuição central</th>
                <th>Obras-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Max Horkheimer</strong> (1895–1973)</td>
                <td>Teoria Crítica; razão instrumental</td>
                <td><em>Eclipse da Razão</em>; <em>Dialética do Esclarecimento</em> (com Adorno)</td>
              </tr>
              <tr>
                <td><strong>Theodor Adorno</strong> (1903–1969)</td>
                <td>Indústria cultural; teoria estética</td>
                <td><em>Dialética do Esclarecimento</em>; <em>Mínima Moralia</em></td>
              </tr>
              <tr>
                <td><strong>Herbert Marcuse</strong> (1898–1979)</td>
                <td>Homem unidimensional; marxismo freudiano</td>
                <td><em>Eros e Civilização</em>; <em>O Homem Unidimensional</em></td>
              </tr>
              <tr>
                <td><strong>Jürgen Habermas</strong> (n. 1929)</td>
                <td>Razão comunicativa; esfera pública; democracia deliberativa</td>
                <td><em>Teoria da Ação Comunicativa</em>; <em>Mudança Estrutural da Esfera Pública</em></td>
              </tr>
              <tr>
                <td><strong>Walter Benjamin</strong> (1892–1940)</td>
                <td>Obra de arte na era da reprodutibilidade técnica; aura</td>
                <td><em>A Obra de Arte na Era de sua Reprodutibilidade Técnica</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teoria Crítica</span>
        <h2>2. Teoria Crítica: O Que É?</h2>
        <p>
          Horkheimer distinguiu <strong>teoria tradicional</strong> (ciência que descreve o mundo
          como ele é, de forma "neutra") de <strong>teoria crítica</strong>: uma análise que
          questiona as condições sociais existentes, desvelando os mecanismos de dominação e
          apontando para a emancipação humana. A teoria crítica não pretende ser "objetiva" — ela
          está comprometida com a transformação social.
        </p>
        <p>
          O método da teoria crítica é a <strong>crítica imanente</strong>: toma a sociedade por
          seus próprios critérios (ela proclama liberdade e igualdade) e demonstra como esses
          valores não são realizados (trabalhadores não são livres nem iguais). A contradição entre
          promessa e realidade é o motor da crítica.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Razão Instrumental</span>
        <h2>3. Horkheimer: A Razão Instrumental</h2>
        <p>
          Em <em>Eclipse da Razão</em> (1947), Horkheimer analisa como a razão moderna se reduziu
          a razão <strong>instrumental</strong>: uma racionalidade voltada apenas para a eficiência
          técnica e a adequação de meios a fins, sem questionar os fins em si mesmos.
        </p>
        <p>
          A razão instrumental sabe calcular o melhor caminho para alcançar um objetivo, mas não
          pergunta se o objetivo é bom. Resultado: tecnologia pode ser usada para construir câmaras
          de gás com a mesma eficiência com que constrói hospitais. A razão perdeu sua dimensão
          crítica e emancipatória.
        </p>
        <div className="lesson-highlight">
          <h3>Dialética do Esclarecimento</h3>
          <p>
            Em <em>Dialética do Esclarecimento</em> (1944/1947), Horkheimer e Adorno defendem uma
            tese provocativa: o próprio Iluminismo — que prometeu libertar a humanidade do mito e da
            superstição — produziu uma nova forma de dominação. A razão que deveria emancipar tornou-se
            instrumento de controle. O nazismo não foi uma recaída na barbárie pré-moderna, mas um
            produto da modernidade racional.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Indústria Cultural</span>
        <h2>4. Adorno: Indústria Cultural e Cultura de Massa</h2>
        <p>
          Adorno e Horkheimer cunharam o conceito de <strong>indústria cultural</strong> para
          descrever o sistema de produção e consumo de cultura nas sociedades capitalistas. A
          expressão foi deliberadamente escolhida para contrariar "cultura de massa" — que
          sugeriria que a cultura emerge espontaneamente das massas. Na realidade, ela é
          <em> produzida para as massas</em> de acordo com critérios industriais de lucro.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama da indústria cultural">
            {/* Indústria */}
            <rect x="30" y="30" width="130" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="95" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Indústria</text>
            <text x="95" y="73" textAnchor="middle" fontSize="11" fill="#92400e">Capitalista</text>

            {/* Seta */}
            <line x1="160" y1="60" x2="200" y2="60" stroke="#374151" strokeWidth="2" markerEnd="url(#arr-frank)"/>

            {/* Indústria Cultural */}
            <rect x="200" y="20" width="140" height="80" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="270" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">INDÚSTRIA</text>
            <text x="270" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">CULTURAL</text>
            <text x="270" y="83" textAnchor="middle" fontSize="10" fill="#1e40af">TV, cinema, música, moda</text>

            {/* Seta */}
            <line x1="340" y1="60" x2="380" y2="60" stroke="#374151" strokeWidth="2" markerEnd="url(#arr-frank2)"/>

            {/* Massa */}
            <rect x="380" y="30" width="90" height="60" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="425" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Massas</text>
            <text x="425" y="73" textAnchor="middle" fontSize="10" fill="#065f46">consumidoras</text>

            {/* Funções */}
            <text x="270" y="130" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#374151">Funções da Indústria Cultural</text>
            <text x="270" y="150" textAnchor="middle" fontSize="10" fill="#374151">✗ Padronização do gosto</text>
            <text x="270" y="167" textAnchor="middle" fontSize="10" fill="#374151">✗ Pseudoindividualização</text>
            <text x="270" y="184" textAnchor="middle" fontSize="10" fill="#374151">✗ Integração social passiva</text>
            <text x="270" y="201" textAnchor="middle" fontSize="10" fill="#374151">✗ Obstáculo à consciência crítica</text>

            <defs>
              <marker id="arr-frank" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
              <marker id="arr-frank2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
            </defs>
          </svg>
          <figcaption>A indústria cultural produz e distribui cultura como mercadoria, padronizando o gosto e impedindo a reflexão crítica.</figcaption>
        </figure>
        <p>
          Para Adorno, a indústria cultural não apenas entretém — ela <strong>integra</strong> os
          indivíduos à ordem social existente, impedindo a reflexão crítica. A
          <strong> pseudoindividualização</strong> é um mecanismo-chave: produtos culturais criam
          a ilusão de variedade e escolha individual, mas são estruturalmente idênticos. "O estilo
          próprio da indústria cultural é a negação do estilo."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Marcuse</span>
        <h2>5. Herbert Marcuse: O Homem Unidimensional</h2>
        <p>
          Em <em>O Homem Unidimensional</em> (1964), Marcuse analisa as sociedades industriais
          avançadas (capitalistas e soviéticas) como sistemas de dominação total que produzem um
          "homem unidimensional": incapaz de pensar de forma crítica e alternativa, plenamente
          integrado à ordem existente.
        </p>
        <p>
          A sociedade afluente capitalista usa o <strong>conforto material</strong> e o
          <strong> consumismo</strong> como formas de controle: ao satisfazer "falsas necessidades"
          (bens de consumo supérfluos criados pela publicidade), suprime o desejo de mudança social.
          As "necessidades verdadeiras" (liberdade, beleza, paz, criatividade) são substituídas por
          necessidades fabricadas pelo mercado.
        </p>
        <div className="lesson-highlight">
          <h3>Marcuse e o movimento de 1968</h3>
          <p>
            Marcuse foi o "Pai Espiritual" dos movimentos estudantis de 1968, que agitaram a França,
            os EUA e o Brasil. Os jovens de 68 encontraram em sua crítica ao "sistema" — capitalismo
            liberal E socialismo burocrático — uma fundamentação para recusar tanto o consumismo
            quanto o stalinismo e lutar por uma sociedade radicalmente diferente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Habermas</span>
        <h2>6. Jürgen Habermas: Razão Comunicativa e Esfera Pública</h2>
        <p>
          Jürgen Habermas, da segunda geração da Escola de Frankfurt, discordou do pessimismo de
          Adorno e Horkheimer. Para ele, a razão não se reduziu completamente a instrumento: há
          outra dimensão da racionalidade humana — a <strong>razão comunicativa</strong>.
        </p>
        <p>
          A razão comunicativa se realiza no <strong>diálogo</strong> entre pessoas livres e iguais,
          orientado ao entendimento mútuo (e não à dominação). Habermas propõe a ideia de
          <strong> situação ideal de fala</strong>: um contexto em que todos os participantes têm
          iguais chances de se manifestar, questionar e argumentar — e onde apenas o "melhor
          argumento" prevalece.
        </p>
        <p>
          A <strong>esfera pública</strong> é o espaço social de debate racional entre cidadãos,
          entre o Estado e o mercado, onde se forma a opinião pública democrática. Habermas analisa
          como ela surgiu na modernidade burguesa (cafés, jornais, salões) e como foi sendo
          colonizada pelo mercado e pelo Estado.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Benjamin</span>
        <h2>7. Walter Benjamin: Aura e Reprodutibilidade Técnica</h2>
        <p>
          Walter Benjamin (1892–1940) é um dos pensadores mais originais associados à Escola de
          Frankfurt, embora nunca tenha sido membro formal do Instituto. Em seu ensaio fundamental
          <em> A Obra de Arte na Era de sua Reprodutibilidade Técnica</em> (1935/36), analisou as
          transformações culturais provocadas pelas novas tecnologias de reprodução — fotografia,
          cinema, gravação sonora.
        </p>
        <p>
          O conceito central de Benjamin é a <strong>aura</strong>: a qualidade de autenticidade,
          singularidade e presença que caracteriza a obra de arte original — "sua existência única
          no lugar em que se encontra." A aura está ligada à tradição, ao ritual e ao aqui-e-agora
          insubstituível do original. Uma pintura de Leonardo da Vinci tem aura; sua reprodução
          fotográfica não.
        </p>
        <p>
          A reprodução técnica <strong>destrói a aura</strong>: multiplica infinitamente a obra,
          transporta-a para qualquer contexto, arranca-a de sua unicidade ritual. Para Benjamin,
          isso tem um duplo potencial: negativo (empobrecimento da experiência estética) e positivo
          (democratização do acesso à arte; potencial emancipatório do cinema como arte de massas).
        </p>
        <div className="lesson-highlight">
          <h3>Benjamin vs. Adorno sobre o Cinema</h3>
          <p>
            Adorno via o cinema de massa apenas como instrumento da indústria cultural — integração
            e passividade. Benjamin, com mais ambivalência, enxergava no cinema um potencial
            revolucionário: ao destruir a aura e exigir um novo modo de recepção (distração coletiva
            em vez de contemplação individual), poderia educar as massas para uma percepção crítica
            da realidade. O debate entre eles permanece produtivo para analisar mídias digitais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atualidade</span>
        <h2>8. Escola de Frankfurt Hoje: Redes Sociais e Cultura Digital</h2>
        <p>
          Os conceitos da Escola de Frankfurt são ferramentas poderosas para analisar a cultura
          digital contemporânea. As redes sociais e as plataformas de streaming representam uma
          nova fase da indústria cultural, com características que Adorno não poderia prever mas
          que se encaixam perfeitamente em sua análise.
        </p>
        <ul>
          <li><strong>Algoritmos como razão instrumental:</strong> otimizados para maximizar o engajamento (tempo de tela, cliques), os algoritmos das plataformas não perguntam se o conteúdo é verdadeiro ou edificante — apenas se é "viral". É a razão instrumental aplicada à cultura.</li>
          <li><strong>Pseudoindividualização 2.0:</strong> a personalização algorítmica cria a ilusão de que cada usuário tem uma experiência única, mas o modelo de negócio é idêntico para todos — coleta de dados, publicidade dirigida, criação de dependência.</li>
          <li><strong>Colonização da esfera pública (Habermas):</strong> as redes sociais prometeram ampliar a esfera pública, mas sua lógica comercial (algoritmos que privilegiam o sensacionalismo) fragmenta o debate racional e alimenta câmaras de eco.</li>
          <li><strong>Aura na era digital (Benjamin):</strong> a reprodução infinita de imagens e a cultura dos memes levam a aura a zero — tudo é reprodutível, remixável, instantâneo. O original perde sentido.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Byung-Chul Han e a Escola de Frankfurt</h3>
          <p>
            O filósofo contemporâneo Byung-Chul Han, em <em>A Sociedade do Cansaço</em> (2010),
            atualiza a crítica frankfurtiana para a era das redes sociais: o controle não vem mais
            de fora (disciplina, repressão), mas de dentro — os indivíduos se autoexploram
            voluntariamente, competindo por "likes" e visibilidade. O "sujeito de desempenho"
            moderno é seu próprio explorador.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🏫</span>
            <h3>Escola de Frankfurt</h3>
            <p>Instituto de Pesquisa Social; marxismo crítico; exílio nos EUA com a ascensão nazista.</p>
          </div>
          <div className="math-card">
            <span>⚙️</span>
            <h3>Razão Instrumental</h3>
            <p>Horkheimer: razão reduzida à eficiência técnica, sem questionar os fins. Dialética do Esclarecimento.</p>
          </div>
          <div className="math-card">
            <span>📺</span>
            <h3>Indústria Cultural</h3>
            <p>Adorno: cultura produzida como mercadoria; padronização, pseudoindividualização, integração passiva.</p>
          </div>
          <div className="math-card">
            <span>🛍️</span>
            <h3>Homem Unidimensional</h3>
            <p>Marcuse: consumismo e conforto material suprimem o pensamento crítico e o desejo de mudança.</p>
          </div>
          <div className="math-card">
            <span>🗣️</span>
            <h3>Razão Comunicativa</h3>
            <p>Habermas: diálogo orientado ao entendimento. Contraponto ao pessimismo de Adorno/Horkheimer.</p>
          </div>
          <div className="math-card">
            <span>📰</span>
            <h3>Esfera Pública</h3>
            <p>Habermas: espaço de debate democrático entre cidadãos, ameaçado pela colonização do mercado.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Conceito de Indústria Cultural"
          statement={<p>Adorno e Horkheimer utilizam o termo "indústria cultural" (em vez de "cultura de massa") para destacar que:</p>}
          options={[
            { letter: "a", text: "A cultura moderna é produzida espontaneamente pelas massas populares." },
            { letter: "b", text: "A cultura é fabricada de acordo com critérios industriais e de mercado, não emergindo das massas.", correct: true },
            { letter: "c", text: "As indústrias de entretenimento promovem a consciência crítica dos trabalhadores." },
            { letter: "d", text: "A produção cultural de massas é uma forma de resistência ao capitalismo." },
          ]}
          resolution={<p>Adorno e Horkheimer rejeitam o termo "cultura de massa" porque ele sugere que a cultura brota espontaneamente das massas. Na realidade, ela é <strong>produzida para as massas</strong> de acordo com critérios de rentabilidade e de integração social. A "indústria cultural" trata a cultura como mercadoria, padroniza o gosto, e integra os indivíduos passivamente à ordem social capitalista — impedindo o desenvolvimento de uma consciência crítica.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Razão Instrumental em Horkheimer"
          statement={<p>A "razão instrumental", criticada por Horkheimer, refere-se a uma forma de racionalidade que:</p>}
          options={[
            { letter: "a", text: "Questiona os fins e objetivos de todas as ações humanas à luz de valores éticos universais." },
            { letter: "b", text: "Está voltada exclusivamente para a eficiência técnica e a adequação de meios a fins dados, sem questionar esses fins.", correct: true },
            { letter: "c", text: "Orienta o diálogo democrático entre cidadãos em busca do melhor argumento." },
            { letter: "d", text: "Sustenta a emancipação humana por meio da crítica das condições sociais de dominação." },
          ]}
          resolution={<p>A <strong>razão instrumental</strong> é a redução da razão à sua dimensão técnica: sabe calcular eficientemente os meios para atingir fins dados, mas não questiona se esses fins são bons, justos ou emancipadores. Para Horkheimer, o Iluminismo prometeu uma razão que libertaria a humanidade, mas produziu uma razão que serve igualmente ao progresso e à barbárie (como o nazismo). A emancipação exigiria recuperar a dimensão crítica e reflexiva da razão.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Habermas e a Esfera Pública"
          statement={<p>Para Habermas, a "esfera pública" é:</p>}
          options={[
            { letter: "a", text: "O aparato estatal responsável pela tomada de decisões políticas e administrativas." },
            { letter: "b", text: "Um espaço de debate racional entre cidadãos livres e iguais, onde se forma a opinião pública democrática.", correct: true },
            { letter: "c", text: "O mercado de bens culturais onde diferentes produções competem pela atenção das massas." },
            { letter: "d", text: "O conjunto de instituições públicas como escolas, hospitais e praças que servem a toda a população." },
          ]}
          resolution={<p>A <strong>esfera pública</strong> habermasiana é o espaço social — entre o Estado e o mercado — onde cidadãos se reúnem para debater questões de interesse comum de forma racional e livre. Surgiu historicamente com a burguesia moderna (cafés, jornais, academias) e é o fundamento da democracia deliberativa. Para Habermas, ela é ameaçada pela "colonização sistêmica" do mercado (que transforma tudo em mercadoria) e do Estado (que burocratiza e regula o debate).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Indústria Cultural e Pseudoindividualização"
          statement={
            <p>
              "Os produtos culturais da indústria cultural não servem mais também como guia de conduta para uma vida correta [...]. Eles impõem ao consumidor uma identificação não mais com uma coletividade real, mas com o esquema de massas que a indústria cultural apresenta como a única realidade possível." (Adorno e Horkheimer, <em>Dialética do Esclarecimento</em>)<br/><br/>
              Qual fenômeno contemporâneo melhor ilustra o conceito de "pseudoindividualização" descrito pela Escola de Frankfurt?
            </p>
          }
          options={[
            { letter: "a", text: "A multiplicidade de canais de streaming que oferecem milhares de conteúdos diferentes, mas cujos algoritmos recomendam padrões similares de consumo.", correct: true },
            { letter: "b", text: "O surgimento de movimentos artísticos de vanguarda que desafiam os padrões estéticos estabelecidos." },
            { letter: "c", text: "A criação de cooperativas culturais que permitem aos artistas independentes distribuir seu trabalho sem intermediários." },
            { letter: "d", text: "A preservação de patrimônios culturais regionais e de culturas indígenas diante da globalização." },
          ]}
          resolution={<p>A <strong>pseudoindividualização</strong> é a ilusão de diversidade e escolha individual criada pela indústria cultural. O streaming é um exemplo perfeito: há aparente vastidão de opções, mas algoritmos de recomendação (otimizados para maximizar o tempo de tela e a receita publicitária) conduzem os usuários a conteúdos similares e padronizados. A "personalização" é superficial — a lógica estrutural do entretenimento de massa permanece, agora com dados individuais a seu serviço.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Marcuse e as Falsas Necessidades"
          statement={
            <p>
              "As necessidades de relaxar, de se divertir, de comportar-se e consumir de acordo com os anúncios, de amar e odiar o que os outros amam e odeiam, pertencem a essa categoria de falsas necessidades." (Herbert Marcuse, <em>O Homem Unidimensional</em>)<br/><br/>
              De acordo com a análise de Marcuse, as "falsas necessidades" criadas pelo capitalismo industrial servem para:
            </p>
          }
          options={[
            { letter: "a", text: "Satisfazer autenticamente as aspirações humanas mais profundas por liberdade e criatividade." },
            { letter: "b", text: "Integrar os indivíduos ao sistema, suprimindo o pensamento crítico e o desejo de transformação social.", correct: true },
            { letter: "c", text: "Democratizar o acesso à cultura, permitindo que as classes populares desfrutem de bens antes restritos às elites." },
            { letter: "d", text: "Estimular o desenvolvimento técnico e científico que aumenta o bem-estar de toda a população." },
          ]}
          resolution={<p>Para Marcuse, o capitalismo avançado usa o <strong>consumismo</strong> como mecanismo de controle social: ao criar e satisfazer "falsas necessidades" (bens supérfluos, entretenimento, conforto material), suprime as "necessidades verdadeiras" — liberdade, criatividade, realização genuína. O trabalhador satisfeito com seu carro novo e sua televisão não se rebela. A riqueza material da sociedade afluente se torna a maior barreira para a emancipação — é uma dominação "confortável" e "democrática".</p>}
        />
      </section>
    </article>
  );
}
