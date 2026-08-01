"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 37</span>
          <h1>Filosofia, Gênero, Identidade e Direitos Humanos</h1>
          <p>
            Simone de Beauvoir afirmou que "ninguém nasce mulher, torna-se mulher". Judith Butler
            mostrou que o gênero é uma performance. bell hooks articulou raça, classe e gênero
            como sistemas entrelaçados de opressão. Este capítulo apresenta as principais contribuições
            filosóficas para o debate contemporâneo sobre gênero, identidade e direitos — temas
            centrais no ENEM de Ciências Humanas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Beauvoir</span>
        <h2>1. Simone de Beauvoir: "Ninguém Nasce Mulher"</h2>
        <p>
          Em <em>O Segundo Sexo</em> (1949), <strong>Simone de Beauvoir</strong> (1908–1986)
          realizou a análise filosófica mais influente da condição feminina. Sua tese central é:
          <em>"Ninguém nasce mulher: torna-se mulher."</em> O feminino não é uma essência
          biológica — é uma construção social, histórica e cultural imposta às mulheres.
        </p>
        <p>
          Beauvoir aplica a perspectiva existencialista: o ser humano não tem uma essência prévia,
          ele <em>se faz</em> por suas escolhas e situações. Porém, as mulheres são definidas como
          o <strong>Outro</strong> em relação ao homem (o sujeito universal). Essa alteridade não
          é natural — é produto de relações de poder históricas que precisam ser superadas.
        </p>
        <div className="lesson-highlight">
          <h3>Existencialismo e feminismo</h3>
          <p>
            A conexão beauvoiriana entre existencialismo e feminismo é poderosa: se o ser humano
            não tem natureza fixa, nada impede as mulheres de superarem a condição de Outro e
            tornarem-se sujeitos autônomos. A opressão não é destino — é condição histórica
            transformável pela ação coletiva.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Butler</span>
        <h2>2. Judith Butler e a Performatividade de Gênero</h2>
        <p>
          <strong>Judith Butler</strong> (1956–) radicalizou a proposta de Beauvoir em
          <em>Problemas de Gênero</em> (1990). Para Butler, não apenas o gênero, mas também o
          próprio <em>sexo biológico</em> é uma construção discursiva — não existe corpo "natural"
          antes da linguagem e das normas sociais que o constituem.
        </p>
        <p>
          O conceito central é o de <strong>performatividade</strong>: gênero não é algo que se
          "é" ou que se "tem" — é algo que se <em>faz</em>, repetidamente, por meio de atos,
          gestos, linguagem e práticas corporais. Não há um "eu" de gênero que preexista a essas
          performances — o sujeito é constituído nelas e por elas.
        </p>
        <p>
          Butler também questiona o binarismo de gênero (masculino/feminino): ele não é natural,
          mas é uma norma coercitiva que exclui e marginaliza quem não se encaixa nela.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ondas do Feminismo</span>
        <h2>3. As Ondas do Movimento Feminista</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 230" width="520" height="230" aria-label="Diagrama das ondas do feminismo">
            <rect x="10" y="10" width="500" height="210" rx="10" fill="#fdf4ff" stroke="#a855f7" strokeWidth="1.5"/>
            <text x="260" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#581c87">As Ondas do Feminismo</text>

            <rect x="25" y="50" width="105" height="140" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="77" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">1ª Onda</text>
            <text x="77" y="88" textAnchor="middle" fontSize="9" fill="#6d28d9">Séc. XIX – início XX</text>
            <text x="77" y="108" textAnchor="middle" fontSize="9" fill="#4c1d95">Sufrágio feminino</text>
            <text x="77" y="121" textAnchor="middle" fontSize="9" fill="#4c1d95">Direitos civis e</text>
            <text x="77" y="134" textAnchor="middle" fontSize="9" fill="#4c1d95">políticos básicos</text>
            <text x="77" y="152" textAnchor="middle" fontSize="9" fill="#6b7280">Mary Wollstonecraft</text>
            <text x="77" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">Olympe de Gouges</text>

            <rect x="150" y="50" width="105" height="140" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="202" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">2ª Onda</text>
            <text x="202" y="88" textAnchor="middle" fontSize="9" fill="#be185d">1960s–1980s</text>
            <text x="202" y="108" textAnchor="middle" fontSize="9" fill="#9d174d">Igualdade no trabalho</text>
            <text x="202" y="121" textAnchor="middle" fontSize="9" fill="#9d174d">Corpo e sexualidade</text>
            <text x="202" y="134" textAnchor="middle" fontSize="9" fill="#9d174d">Patriarcado como</text>
            <text x="202" y="147" textAnchor="middle" fontSize="9" fill="#9d174d">estrutura social</text>
            <text x="202" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">Beauvoir, Betty Friedan</text>

            <rect x="275" y="50" width="105" height="140" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="327" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">3ª Onda</text>
            <text x="327" y="88" textAnchor="middle" fontSize="9" fill="#047857">1990s–2010s</text>
            <text x="327" y="108" textAnchor="middle" fontSize="9" fill="#065f46">Interseccionalidade</text>
            <text x="327" y="121" textAnchor="middle" fontSize="9" fill="#065f46">Gênero, raça e classe</text>
            <text x="327" y="134" textAnchor="middle" fontSize="9" fill="#065f46">Desconstrução do</text>
            <text x="327" y="147" textAnchor="middle" fontSize="9" fill="#065f46">binarismo</text>
            <text x="327" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">Butler, bell hooks</text>

            <rect x="400" y="50" width="100" height="140" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="450" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">4ª Onda</text>
            <text x="450" y="88" textAnchor="middle" fontSize="9" fill="#b45309">2010s–hoje</text>
            <text x="450" y="108" textAnchor="middle" fontSize="9" fill="#92400e">Ativismo digital</text>
            <text x="450" y="121" textAnchor="middle" fontSize="9" fill="#92400e">MeToo, feminicídio</text>
            <text x="450" y="134" textAnchor="middle" fontSize="9" fill="#92400e">Políticas públicas</text>
            <text x="450" y="147" textAnchor="middle" fontSize="9" fill="#92400e">e representação</text>
            <text x="450" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">Redes sociais</text>
          </svg>
          <figcaption>As quatro ondas do movimento feminista, com suas principais pautas e referenciais teóricos.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interseccionalidade</span>
        <h2>4. bell hooks e o Feminismo Interseccional</h2>
        <p>
          <strong>bell hooks</strong> (1952–2021, nome em minúsculas por escolha própria) foi uma
          das principais teóricas do feminismo negro e interseccional. Em <em>Ain't I a Woman?</em>
          (1981) e outras obras, ela argumentou que gênero, raça e classe são sistemas de opressão
          que se entrelaçam e se potencializam mutuamente.
        </p>
        <p>
          A crítica de bell hooks ao feminismo mainstream era que ele frequentemente falava de
          "mulheres" como categoria homogênea, ignorando que mulheres negras e pobres enfrentavam
          formas específicas de opressão que mulheres brancas de classe média não experimentavam.
          Um feminismo que liberta apenas as mulheres brancas privilegiadas não é, de fato,
          feminismo — é uma nova forma de exclusão.
        </p>
        <div className="lesson-highlight">
          <h3>Interseccionalidade</h3>
          <p>
            O conceito de interseccionalidade foi sistematizado por <strong>Kimberlé Crenshaw</strong>
            (1989): os sistemas de opressão (gênero, raça, classe, sexualidade, deficiência) não
            atuam isoladamente — eles se cruzam, criando experiências específicas de marginalização
            que não podem ser compreendidas analisando apenas uma variável por vez.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade</span>
        <h2>5. Identidade, Reconhecimento e Honneth</h2>
        <p>
          <strong>Axel Honneth</strong> (1949–) desenvolveu uma teoria filosófica baseada na
          <strong>luta por reconhecimento</strong> (recuperando Hegel). Para Honneth, a identidade
          se forma por meio de três esferas de reconhecimento:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Esfera</th><th>Tipo de reconhecimento</th><th>Relação</th><th>Dano da negação</th></tr>
            </thead>
            <tbody>
              <tr><td>Amor/cuidado</td><td>Reconhecimento emocional</td><td>Família, amizade íntima</td><td>Maus-tratos, abuso</td></tr>
              <tr><td>Direito</td><td>Reconhecimento jurídico-moral</td><td>Cidadania, Estado de Direito</td><td>Exclusão de direitos, discriminação legal</td></tr>
              <tr><td>Solidariedade</td><td>Reconhecimento social/cultural</td><td>Comunidade, grupos de pertencimento</td><td>Desrespeito, humilhação, invisibilização</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A luta por direitos LGBTQIA+, por representação de mulheres em posições de poder, por
          visibilidade de pessoas negras na mídia — todas essas são formas de luta por
          reconhecimento nas três esferas identificadas por Honneth.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos no Brasil</span>
        <h2>6. Gênero e Direitos Humanos no Brasil</h2>
        <p>
          O Brasil possui um arcabouço jurídico importante para a proteção de direitos relacionados
          a gênero e identidade:
        </p>
        <ul>
          <li><strong>Lei Maria da Penha (11.340/2006):</strong> coíbe a violência doméstica e familiar contra a mulher.</li>
          <li><strong>Lei do Feminicídio (13.104/2015):</strong> tipifica como homicídio qualificado o assassinato de mulher por razão de gênero.</li>
          <li><strong>ADI 4275 (STF, 2018):</strong> reconheceu o direito de transexuais alterarem nome e sexo no registro civil sem cirurgia.</li>
          <li><strong>Resolução CFM 2.265/2019 e debate contínuo:</strong> atenção à saúde de pessoas trans.</li>
          <li><strong>CF/1988, art. 5º:</strong> igualdade formal entre homens e mulheres; proibição de discriminação.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Patriarcado no Brasil</span>
        <h2>7. Patriarcado, Violência e Movimento Feminista Brasileiro</h2>
        <p>
          O Brasil possui uma das maiores taxas de feminicídio do mundo e uma estrutura patriarcal
          profunda, enraizada na história colonial e escravista. A reflexão filosófica sobre o
          patriarcado no contexto brasileiro articula gênero, raça e classe de forma inescapável.
        </p>
        <p>
          <strong>Lélia Gonzalez</strong> (1935–1994) foi uma das primeiras intelectuais a
          articular sistematicamente raça e gênero na realidade brasileira. Em seu conceito de
          <em>amefricanidade</em>, ela propôs uma identidade cultural que reconhece a herança
          africana como constitutiva das Américas — em especial do Brasil. Para Lélia, o racismo
          e o sexismo são inseparáveis na formação social brasileira: a mulher negra ocupa a
          posição mais subalterna precisamente pela combinação desses dois sistemas.
        </p>
        <p>
          <strong>Djamila Ribeiro</strong> (1980–), filósofa e ativista contemporânea, popularizou
          no Brasil o conceito de <em>lugar de fala</em>: toda enunciação parte de um lugar social
          e histórico. Reconhecer o lugar de fala não é silenciar grupos — é exigir que cada
          voz seja ouvida a partir de sua posição específica, especialmente as historicamente
          silenciadas.
        </p>
        <div className="lesson-highlight">
          <h3>Dados e filosofia</h3>
          <p>
            Em 2023, o Brasil registrou mais de 1.400 feminicídios (Monitor da Violência). A
            filosofia interpreta esses dados como expressão de uma estrutura social de dominação
            masculina (Bourdieu: "violência simbólica") que se materializa em violência física.
            A Lei Maria da Penha e a Lei do Feminicídio são respostas jurídicas a uma demanda
            filosófico-política: nomear e punir a violência de gênero como violência estrutural,
            não como "crime passional".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>8. Gênero e Identidade no ENEM: Abordagens, Textos e Questões Típicas</h2>
        <p>
          As questões do ENEM sobre gênero e identidade seguem padrões reconhecíveis. Conhecê-los
          é metade do trabalho:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de questão</th>
                <th>Texto típico</th>
                <th>O que o ENEM pede</th>
                <th>Conceito-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Beauvoir</td>
                <td>Trecho de "O Segundo Sexo"</td>
                <td>Identificar a crítica ao determinismo biológico</td>
                <td>Construção social do gênero</td>
              </tr>
              <tr>
                <td>Butler</td>
                <td>Trecho de "Problemas de Gênero"</td>
                <td>Explicar o conceito de performatividade</td>
                <td>Gênero como performance, não essência</td>
              </tr>
              <tr>
                <td>Interseccionalidade</td>
                <td>Situação concreta (mulher negra, periférica)</td>
                <td>Aplicar a análise interseccional</td>
                <td>Raça + gênero + classe combinados</td>
              </tr>
              <tr>
                <td>Direitos</td>
                <td>Texto jurídico ou notícia sobre violência</td>
                <td>Relacionar com legislação e reconhecimento</td>
                <td>Lei Maria da Penha, feminicídio, ADI 4275</td>
              </tr>
              <tr>
                <td>Ondas do feminismo</td>
                <td>Descrição de uma pauta política</td>
                <td>Identificar a qual onda pertence</td>
                <td>Sufrágio / igualdade / interseccionalidade / digital</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Dica ENEM:</strong> quando o texto mencionar que "ninguém nasce X — torna-se X",
          a resposta quase sempre envolve construção social e a rejeição do determinismo biológico.
          Quando mencionar "olhar do outro" e identidade, pense em Honneth e reconhecimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>✊</span><h3>Beauvoir</h3><p>"Ninguém nasce mulher." Gênero é construção social, não destino biológico.</p></div>
          <div className="math-card"><span>🎭</span><h3>Butler</h3><p>Gênero é performance repetida, não essência. O binarismo é norma coercitiva, não natural.</p></div>
          <div className="math-card"><span>✂️</span><h3>Interseccionalidade</h3><p>bell hooks e Crenshaw: raça, gênero e classe se entrelaçam em sistemas de opressão múltiplos.</p></div>
          <div className="math-card"><span>🏅</span><h3>Honneth</h3><p>Identidade se forma pelo reconhecimento: amor, direito e solidariedade social.</p></div>
          <div className="math-card"><span>⚖️</span><h3>Direitos</h3><p>Lei Maria da Penha, feminicídio, direitos trans: conquistas jurídicas da luta por reconhecimento.</p></div>
          <div className="math-card"><span>🌊</span><h3>Ondas Feministas</h3><p>4 ondas: sufrágio → igualdade → interseccionalidade → ativismo digital.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Beauvoir e a Construção do Gênero"
          statement={<p>A frase "Ninguém nasce mulher: torna-se mulher", de Simone de Beauvoir, indica que:</p>}
          options={[
            { letter: "a", text: "A identidade feminina é determinada pela biologia e não pode ser alterada." },
            { letter: "b", text: "O feminino é uma construção social e histórica imposta às mulheres, não uma essência natural.", correct: true },
            { letter: "c", text: "As mulheres devem rejeitar qualquer papel social para alcançar a liberdade." },
            { letter: "d", text: "A distinção entre homens e mulheres é irrelevante para a filosofia política." },
          ]}
          resolution={<p>Beauvoir, a partir do existencialismo, nega que haja uma "natureza feminina" prévia. O que chamamos de "feminino" — passividade, maternidade como destino, subordinação — é resultado de condicionamentos históricos, sociais e culturais. As mulheres são formadas como o Outro do homem por meio de processos de socialização, não por determinismo biológico.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Butler e a Performatividade"
          statement={<p>Para Judith Butler, o gênero é uma performance. Isso significa que:</p>}
          options={[
            { letter: "a", text: "O gênero é uma escolha livre e consciente que cada indivíduo faz diariamente." },
            { letter: "b", text: "O gênero é uma encenação teatral que pode ser trocada à vontade, como uma fantasia." },
            { letter: "c", text: "O gênero é constituído por atos repetidos ao longo do tempo, dentro de normas sociais coercitivas, sem que exista um sujeito de gênero preexistente.", correct: true },
            { letter: "d", text: "O gênero é uma ilusão que deve ser abolida para que a igualdade seja alcançada." },
          ]}
          resolution={<p>Butler usa "performance" não no sentido teatral de escolha livre, mas no sentido de que o gênero é produzido por atos reiterados, normatizados socialmente. Não há um "eu" de gênero que preexista a essas práticas — o sujeito é constituído por elas. A performance é compulsória, pois quem não se conforma com as normas de gênero sofre sanções sociais.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Interseccionalidade"
          statement={<p>O conceito de interseccionalidade, desenvolvido por Kimberlé Crenshaw, sustenta que:</p>}
          options={[
            { letter: "a", text: "A opressão de gênero é a forma mais fundamental de todas as opressões." },
            { letter: "b", text: "Raça é mais importante que gênero na determinação das desigualdades sociais." },
            { letter: "c", text: "Sistemas de opressão como gênero, raça e classe se cruzam, criando experiências específicas de marginalização irredutíveis a apenas um eixo.", correct: true },
            { letter: "d", text: "A luta por direitos deve priorizar um único eixo de opressão para ser eficaz." },
          ]}
          resolution={<p>A interseccionalidade nega hierarquias entre formas de opressão e insiste que elas se entrelaçam. Uma mulher negra pobre não experimenta simplesmente "sexismo + racismo + classismo" somados — ela enfrenta uma forma específica de opressão que emerge da combinação desses eixos, que o feminismo mainstream branco, por exemplo, frequentemente não enxergava.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Reconhecimento e Identidade"
          statement={<p>"A luta por reconhecimento é o motor do desenvolvimento social e moral. Quando grupos historicamente marginalizados exigem visibilidade e direitos, estão lutando não apenas por recursos materiais, mas pela afirmação de sua dignidade como sujeitos." (Axel Honneth, adaptado) Com base no texto, a criação de cotas raciais em universidades brasileiras exemplifica qual dimensão do reconhecimento segundo Honneth?</p>}
          options={[
            { letter: "a", text: "Reconhecimento emocional, pois fortalece os laços afetivos entre grupos étnicos." },
            { letter: "b", text: "Reconhecimento jurídico-moral, pois garante acesso igualitário a direitos e oportunidades institucionais.", correct: true },
            { letter: "c", text: "Reconhecimento estético, pois valoriza a cultura afro-brasileira no âmbito universitário." },
            { letter: "d", text: "Reconhecimento econômico, pois visa apenas a redistribuição de renda entre grupos." },
          ]}
          resolution={<p>Para Honneth, o reconhecimento jurídico-moral ocorre quando o Estado garante a todos os cidadãos, como sujeitos de direito, o acesso igualitário às instituições e oportunidades. As cotas raciais buscam corrigir uma desigualdade histórica de acesso ao direito à educação superior, reconhecendo que, sem ação afirmativa, a igualdade formal não produz igualdade real.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Violência de Gênero e Direitos"
          statement={<p>O Brasil registra índices alarmantes de feminicídio — o assassinato de mulheres por razão de gênero. A Lei do Feminicídio (13.104/2015) tipificou como homicídio qualificado esse crime. Do ponto de vista filosófico, essa lei representa:</p>}
          options={[
            { letter: "a", text: "Uma violação do princípio da igualdade, pois cria tratamento diferenciado com base no gênero." },
            { letter: "b", text: "Uma forma de reconhecimento jurídico que nomeia e condena uma forma específica de violência estrutural contra mulheres.", correct: true },
            { letter: "c", text: "A superação completa do patriarcado no ordenamento jurídico brasileiro." },
            { letter: "d", text: "Uma medida meramente simbólica, sem impacto real na redução da violência contra mulheres." },
          ]}
          resolution={<p>A Lei do Feminicídio representa um avanço no reconhecimento jurídico: ao nomear e qualificar especificamente o assassinato de mulheres por razão de gênero, o Estado reconhece que essa violência não é acidente individual, mas expressão de uma estrutura social de dominação (patriarcado). Filosoficamente, nomear a opressão é ato político de reconhecimento e rejeição formal de uma forma específica de negação da dignidade feminina.</p>}
        />
      </section>
    </article>
  );
}
