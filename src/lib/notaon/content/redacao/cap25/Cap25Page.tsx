"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 25</span>
          <h1>Uso de Dados e Estatísticas</h1>
          <p>
            Aprenda a selecionar, memorizar e usar dados estatísticos de forma
            eficaz na redação ENEM — transformando números em argumentos sólidos
            que elevam a credibilidade do texto e a nota na Competência 2.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que dados elevam o nível do argumento</h2>
        <p>
          Um argumento sem evidência é apenas uma opinião. Quando o candidato
          incorpora dados concretos ao texto, ele transforma a afirmação em evidência
          objetiva — e o corretor da C2 percebe isso. Dados demonstram que o autor
          realizou leitura crítica do mundo, não apenas repetiu lugares-comuns.
        </p>
        <div className="lesson-highlight">
          <h3>O que o dado faz pelo argumento</h3>
          <p>
            <strong>Sem dado:</strong> "A desigualdade social no Brasil é muito grave."
            — Descrição. Qualquer pessoa poderia escrever.
          </p>
          <p>
            <strong>Com dado:</strong> "Segundo o Instituto Brasileiro de Geografia
            e Estatística, os 10% mais ricos do Brasil detêm mais de 40% da renda
            nacional — concentração que coloca o país entre os dez mais desiguais
            do mundo." — Argumento com evidência objetiva.
          </p>
        </div>
        <p>
          O dado também serve como "gancho" para a análise: após citá-lo, o candidato
          deve analisá-lo — o que ele significa, o que revela, por que é problemático.
          Dado sem análise é decorativo; dado com análise é argumento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Memória</span>
        <h2>2. Como memorizar dados para o ENEM</h2>
        <p>
          Não tente memorizar dezenas de dados — você vai confundir e inventar
          números na hora da prova, o que é pior do que não usar dados. Selecione
          5 a 6 dados-chave por tema prioritário e memorize-os de forma sólida.
        </p>
        <div className="lesson-highlight">
          <h3>Estratégia de memorização eficiente</h3>
          <p>
            <strong>1. Dado aproximado é melhor que dado inventado:</strong>
            "Cerca de 1/3 dos brasileiros vivem em situação de insegurança alimentar"
            é mais seguro do que tentar lembrar o percentual exato e errar.
          </p>
          <p>
            <strong>2. Memorize fonte + grandeza + tema:</strong> IBGE + "10% mais
            ricos detêm 40% da renda" + desigualdade. Esses três elementos são
            suficientes.
          </p>
          <p>
            <strong>3. Associe o dado a uma imagem:</strong> Pense em uma cena
            que ilustra o dado — 1 em cada 10 brasileiros sem saneamento básico →
            imagine uma torneira seca.
          </p>
          <p>
            <strong>4. Revise em voz alta:</strong> Ao estudar, diga o dado em
            voz alta 3 vezes em frases completas como usaria na redação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados</span>
        <h2>3. Dados sobre desigualdade: GINI, renda e IDH</h2>
        <p>
          A desigualdade é o tema mais transversal do ENEM — aparece direta ou
          indiretamente em quase todos os temas. Memorizar dados sobre desigualdade
          é um dos investimentos mais eficientes da preparação.
        </p>
        <div className="lesson-highlight">
          <h3>Dados essenciais sobre desigualdade</h3>
          <p>
            <strong>GINI:</strong> O Brasil tem coeficiente de Gini próximo a 0,53
            — um dos mais altos do mundo. Quanto mais próximo de 1, mais desigual.
            O índice 0 representaria igualdade perfeita.
          </p>
          <p>
            <strong>Renda:</strong> Os 10% mais ricos detêm mais de 40% da renda
            nacional (IBGE). Trabalhadores negros ganham, em média, 58% do salário
            de trabalhadores brancos com mesma escolaridade (IBGE/IPEA).
          </p>
          <p>
            <strong>IDH:</strong> O Brasil é classificado como país de alto
            desenvolvimento humano (IDH 0,76), mas essa média esconde abismos:
            o IDH do Nordeste se aproxima ao de países da África subsaariana
            quando calculado por região.
          </p>
          <p>
            <strong>Fome:</strong> Cerca de 33 milhões de brasileiros passam
            fome, segundo a Rede PENSSAN (2022) — número que representa uma
            reversão de décadas de avanço social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados</span>
        <h2>4. Dados sobre violência: fontes confiáveis</h2>
        <p>
          O tema violência aparece no ENEM com frequência — especialmente violência
          contra a mulher, violência racial e violência urbana. Ter dados precisos
          sobre esses temas é fundamental.
        </p>
        <div className="lesson-highlight">
          <h3>Dados de violência a memorizar</h3>
          <p>
            <strong>Feminicídio:</strong> O Brasil registra mais de 1.400 casos de
            feminicídio por ano (Fórum Brasileiro de Segurança Pública). É o 5° país
            com maior taxa de feminicídio do mundo.
          </p>
          <p>
            <strong>Violência racial:</strong> Negros representam 75% das vítimas
            de homicídio no Brasil (Atlas da Violência/IPEA). Um jovem negro tem
            2,7 vezes mais chance de ser assassinado do que um jovem branco.
          </p>
          <p>
            <strong>Violência doméstica:</strong> A cada 7 minutos, uma mulher é
            vítima de violência doméstica no Brasil. A Lei Maria da Penha completa
            mais de 15 anos e a subnotificação ainda é alta.
          </p>
          <p>
            <strong>Homicídios:</strong> O Brasil tem taxa de homicídios entre as
            mais altas do mundo — cerca de 20 por 100 mil habitantes (OMS/IPEA).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados</span>
        <h2>5. Dados sobre educação: INEP como fonte</h2>
        <div className="lesson-highlight">
          <h3>Dados educacionais essenciais</h3>
          <p>
            <strong>Analfabetismo:</strong> Cerca de 11 milhões de brasileiros
            acima de 15 anos são analfabetos (IBGE). O analfabetismo funcional
            (dificuldade de interpretar textos simples) atinge mais de 29% dos
            adultos (IBGE).
          </p>
          <p>
            <strong>IDEB:</strong> O Índice de Desenvolvimento da Educação Básica
            mostra que metade das escolas públicas municipais do ensino fundamental
            não atingem a meta mínima estabelecida pelo próprio governo.
          </p>
          <p>
            <strong>Evasão:</strong> Cerca de 20% dos jovens entre 15 e 17 anos
            estão fora da escola (INEP/IBGE). No ensino médio, a evasão é especialmente
            alta entre alunos de famílias de baixa renda.
          </p>
          <p>
            <strong>Desigualdade racial na educação:</strong> Negros representam
            apenas 28% dos estudantes de ensino superior, apesar de serem 56% da
            população brasileira (IBGE/2022).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados</span>
        <h2>6. Dados sobre saúde, saneamento e meio ambiente</h2>
        <div className="lesson-highlight">
          <h3>Dados de saúde e ambiente</h3>
          <p>
            <strong>Saúde mental:</strong> O Brasil é o país com maior taxa de
            ansiedade do mundo — 9,3% da população (OMS). 12 milhões de brasileiros
            sofrem de depressão (Ministério da Saúde).
          </p>
          <p>
            <strong>Saneamento:</strong> Cerca de 100 milhões de brasileiros não
            têm acesso a esgoto tratado (SNIS/2021). Doenças relacionadas à falta
            de saneamento custam bilhões ao SUS anualmente.
          </p>
          <p>
            <strong>Desmatamento:</strong> O Brasil desmatou mais de 11.000 km²
            de Amazônia em 2022 (INPE). A Amazônia cobre 60% do território nacional
            e abriga 10% de toda a biodiversidade do planeta.
          </p>
          <p>
            <strong>Emissões:</strong> O Brasil é o 6° maior emissor de gases de
            efeito estufa do mundo, com grande parte das emissões provenientes do
            desmatamento e da pecuária.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>7. Mapa visual de dados por área temática</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Tabela visual de dados organizados por área temática">
            <rect x="5" y="5" width="88" height="185" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="49" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e40af">EDUCAÇÃO</text>
            <text x="49" y="40" textAnchor="middle" fontSize="9" fill="#1e3a8a">11 mi analfabetos</text>
            <text x="49" y="56" textAnchor="middle" fontSize="9" fill="#1e3a8a">20% jovens fora</text>
            <text x="49" y="72" textAnchor="middle" fontSize="9" fill="#1e3a8a">da escola</text>
            <text x="49" y="88" textAnchor="middle" fontSize="9" fill="#1e3a8a">28% negros no</text>
            <text x="49" y="104" textAnchor="middle" fontSize="9" fill="#1e3a8a">ensino superior</text>

            <rect x="99" y="5" width="88" height="185" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="143" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#15803d">SAÚDE</text>
            <text x="143" y="40" textAnchor="middle" fontSize="9" fill="#14532d">9,3% ansiedade</text>
            <text x="143" y="56" textAnchor="middle" fontSize="9" fill="#14532d">(maior do mundo)</text>
            <text x="143" y="72" textAnchor="middle" fontSize="9" fill="#14532d">12 mi com</text>
            <text x="143" y="88" textAnchor="middle" fontSize="9" fill="#14532d">depressão</text>
            <text x="143" y="104" textAnchor="middle" fontSize="9" fill="#14532d">100 mi sem esgoto</text>

            <rect x="193" y="5" width="88" height="185" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="237" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#991b1b">VIOLÊNCIA</text>
            <text x="237" y="40" textAnchor="middle" fontSize="9" fill="#7f1d1d">1.400+ feminicídios</text>
            <text x="237" y="56" textAnchor="middle" fontSize="9" fill="#7f1d1d">/ano</text>
            <text x="237" y="72" textAnchor="middle" fontSize="9" fill="#7f1d1d">75% vítimas de</text>
            <text x="237" y="88" textAnchor="middle" fontSize="9" fill="#7f1d1d">homicídio: negros</text>
            <text x="237" y="104" textAnchor="middle" fontSize="9" fill="#7f1d1d">20/100mil hom.</text>

            <rect x="287" y="5" width="88" height="185" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="331" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#713f12">DESIGUALD.</text>
            <text x="331" y="40" textAnchor="middle" fontSize="9" fill="#92400e">GINI 0,53</text>
            <text x="331" y="56" textAnchor="middle" fontSize="9" fill="#92400e">10% mais ricos:</text>
            <text x="331" y="72" textAnchor="middle" fontSize="9" fill="#92400e">40% da renda</text>
            <text x="331" y="88" textAnchor="middle" fontSize="9" fill="#92400e">33 mi passam</text>
            <text x="331" y="104" textAnchor="middle" fontSize="9" fill="#92400e">fome</text>

            <rect x="381" y="5" width="94" height="185" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5"/>
            <text x="428" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#6b21a8">AMBIENTE</text>
            <text x="428" y="40" textAnchor="middle" fontSize="9" fill="#581c87">11.000 km²</text>
            <text x="428" y="56" textAnchor="middle" fontSize="9" fill="#581c87">desmatados/ano</text>
            <text x="428" y="72" textAnchor="middle" fontSize="9" fill="#581c87">6° emissor de</text>
            <text x="428" y="88" textAnchor="middle" fontSize="9" fill="#581c87">gases do mundo</text>
            <text x="428" y="104" textAnchor="middle" fontSize="9" fill="#581c87">10% biodiversidade</text>
          </svg>
          <figcaption>Dados organizados por área temática para facilitar a memorização e o uso na redação.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica</span>
        <h2>8. Técnica do dado aproximado</h2>
        <p>
          Na prova, sob pressão, é normal que a memória falhe nos números exatos.
          A técnica do dado aproximado permite usar evidências sem o risco de errar
          percentuais e perder credibilidade.
        </p>
        <div className="lesson-highlight">
          <h3>Formulas de dado aproximado</h3>
          <p>
            <strong>"Cerca de 1/3 dos brasileiros..."</strong> — Equivale a
            aproximadamente 70 milhões de pessoas, sem precisar de percentual.
          </p>
          <p>
            <strong>"Mais da metade da população..."</strong> — Sempre verdadeiro
            quando o dado é majoritário.
          </p>
          <p>
            <strong>"Segundo dados recentes do [órgão]..."</strong> — A fonte
            confere credibilidade mesmo sem o número exato.
          </p>
          <p>
            <strong>"Milhões de brasileiros..."</strong> — Para quantidades
            imprecisas mas expressivas.
          </p>
          <p>
            <strong>"Uma em cada [X] pessoas..."</strong> — Humaniza o dado:
            "Uma em cada quatro brasileiras já sofreu violência doméstica."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Integração</span>
        <h2>9. Como integrar o dado ao argumento</h2>
        <p>
          O erro mais comum com dados é "jogar o número" no texto sem contexto
          ou análise. O dado deve entrar como evidência de um argumento em
          construção — nunca como elemento isolado.
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura de integração do dado</h3>
          <p>
            <strong>Afirmação (o argumento):</strong> "A pobreza estrutural limita
            o acesso de crianças à alimentação adequada."
          </p>
          <p>
            <strong>Dado (a evidência):</strong> "Segundo a Rede PENSSAN, cerca de
            33 milhões de brasileiros convivem com a fome."
          </p>
          <p>
            <strong>Análise (o significado):</strong> "Esse número — equivalente à
            população total da Argentina — revela que a insegurança alimentar não
            é fenômeno marginal, mas realidade estrutural de um país que simultaneamente
            figura entre os maiores exportadores de alimentos do mundo."
          </p>
        </div>
        <p>
          A análise é obrigatória. Ela transforma o número em argumento e demonstra
          a capacidade crítica do candidato — o que a C2 avalia diretamente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>10. Erros com dados: como evitar penalizações</h2>
        <div className="lesson-highlight">
          <h3>Os 4 erros mais graves com estatísticas</h3>
          <p>
            <strong>1. Inventar dados:</strong> O maior risco. Se o corretor
            perceber que o dado é falso, toda a credibilidade do texto cai.
            Prefira dados aproximados a dados inventados.
          </p>
          <p>
            <strong>2. Exagerar:</strong> "99% dos brasileiros são pobres" —
            dado exagerado que o corretor identificará imediatamente e que
            prejudica a credibilidade.
          </p>
          <p>
            <strong>3. Confundir percentual com quantidade:</strong> Dizer
            "40 por cento dos brasileiros" quando o dado é "40 milhões" (cerca
            de 20%). Sempre verifique a unidade do dado.
          </p>
          <p>
            <strong>4. Dado sem fonte:</strong> Um dado ganha credibilidade quando
            acompanhado de fonte: "Segundo o IBGE...", "De acordo com o IPEA...",
            "Dados da OMS revelam...". Sem fonte, o dado parece opinião.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela</span>
        <h2>11. 20 dados reais organizados por tema</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Dado</th>
                <th>Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Desigualdade</td><td>10% mais ricos detêm 40% da renda nacional</td><td>IBGE</td></tr>
              <tr><td>Desigualdade</td><td>Coeficiente de Gini: ~0,53 (top 10 mais desiguais)</td><td>IBGE/IPEA</td></tr>
              <tr><td>Fome</td><td>33 milhões passam fome no Brasil</td><td>Rede PENSSAN</td></tr>
              <tr><td>Educação</td><td>11 milhões de analfabetos acima de 15 anos</td><td>IBGE</td></tr>
              <tr><td>Educação</td><td>20% dos jovens 15-17 anos fora da escola</td><td>INEP/IBGE</td></tr>
              <tr><td>Educação racial</td><td>Negros: 28% dos universitários / 56% da população</td><td>IBGE</td></tr>
              <tr><td>Violência</td><td>Brasil: 5° maior taxa de feminicídio do mundo</td><td>FBSP</td></tr>
              <tr><td>Violência</td><td>75% das vítimas de homicídio são negros</td><td>Atlas Violência/IPEA</td></tr>
              <tr><td>Violência</td><td>Taxa de homicídios: ~20/100 mil habitantes</td><td>OMS/IPEA</td></tr>
              <tr><td>Saúde mental</td><td>Brasil: maior taxa de ansiedade do mundo (9,3%)</td><td>OMS</td></tr>
              <tr><td>Saúde mental</td><td>12 milhões sofrem de depressão no Brasil</td><td>Ministério da Saúde</td></tr>
              <tr><td>Saneamento</td><td>100 milhões sem acesso a esgoto tratado</td><td>SNIS</td></tr>
              <tr><td>Internet</td><td>~40 milhões de brasileiros sem acesso à internet</td><td>IBGE</td></tr>
              <tr><td>Trabalho</td><td>Salário negro: 58% do salário branco (mesma escolaridade)</td><td>IBGE</td></tr>
              <tr><td>Trabalho</td><td>Mulheres recebem ~80% do salário dos homens</td><td>IBGE</td></tr>
              <tr><td>Meio ambiente</td><td>11.000 km² de Amazônia desmatados por ano (2022)</td><td>INPE</td></tr>
              <tr><td>Meio ambiente</td><td>Brasil: 6° maior emissor de gases estufa do mundo</td><td>SEEG/OC</td></tr>
              <tr><td>Pobreza</td><td>Analfabetismo funcional atinge 29% dos adultos</td><td>IBGE</td></tr>
              <tr><td>Mortalidade</td><td>Mortalidade materna: 68/100 mil nascidos vivos</td><td>MS</td></tr>
              <tr><td>Racial</td><td>Jovem negro tem 2,7x mais chance de ser assassinado</td><td>Atlas Violência</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo da Aula</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📊</span>
            <h3>Dado + análise</h3>
            <p>Nunca jogue o número sozinho. Sempre analise: o que ele significa, por que é grave, o que revela.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Memorização</h3>
            <p>5-6 dados por tema. Fonte + grandeza + área. Aproximações são mais seguras que números exatos errados.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Fontes confiáveis</h3>
            <p>IBGE, INEP, IPEA, FBSP, OMS, MS, INPE, Ministérios, Atlas da Violência. Cite a fonte.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Nunca invente</h3>
            <p>Dado inventado é pior que ausência de dado. Use aproximações como "cerca de 1/3" ou "mais da metade".</p>
          </div>
          <div className="math-card">
            <span>📌</span>
            <h3>Integração</h3>
            <p>Afirmação → dado como evidência → análise do significado. Essa estrutura garante argumento sólido.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Dado aproximado</h3>
            <p>"Cerca de X milhões", "mais da metade", "1 em cada Y pessoas" — humaniza e aproxima sem risco.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Função do dado"
          statement={<p>Qual é a principal função de um dado estatístico em um parágrafo de desenvolvimento?</p>}
          options={[
            { letter: "a", text: "Substituir a análise crítica do candidato" },
            { letter: "b", text: "Tornar o texto mais longo e preenchido" },
            { letter: "c", text: "Fornecer evidência objetiva que fundamenta e comprova o argumento", correct: true },
            { letter: "d", text: "Demonstrar que o candidato memorizou muitos números" },
          ]}
          resolution={<p>O dado estatístico funciona como evidência objetiva que transforma uma afirmação em argumento fundamentado. Ele não substitui a análise — deve ser seguido de interpretação do que significa e por que é relevante para o tema. Dado sem análise não pontua em C2.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Técnica do dado aproximado"
          statement={<p>Um candidato não lembra o percentual exato de brasileiros sem acesso à internet. Qual alternativa representa o uso mais correto e seguro da informação?</p>}
          options={[
            { letter: "a", text: "Não usar nenhum dado sobre o assunto para evitar erros" },
            { letter: "b", text: "Escrever 'cerca de 40 milhões de brasileiros ainda não têm acesso à internet, segundo o IBGE'", correct: true },
            { letter: "c", text: "Escrever '95% dos brasileiros têm acesso à internet'" },
            { letter: "d", text: "Escrever '30% dos brasileiros não têm internet, de acordo com pesquisas'" },
          ]}
          resolution={<p>A opção B usa dado aproximado (40 milhões — valor real) com fonte confiável (IBGE). Isso é mais seguro e mais eficaz do que inventar um percentual. A técnica do dado aproximado permite usar evidências sem risco de erros, mantendo a credibilidade do argumento.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Erro com dado"
          statement={<p>Analise o trecho: "Segundo dados do governo, 98% dos brasileiros são pobres — realidade que exige políticas urgentes de redistribuição de renda." Qual é o problema principal com o uso do dado?</p>}
          options={[
            { letter: "a", text: "O tema distribuição de renda não é adequado para o ENEM" },
            { letter: "b", text: "A fonte é vaga e o dado é evidentemente exagerado e falso, o que prejudica toda a credibilidade do texto", correct: true },
            { letter: "c", text: "A análise deveria ser mais longa para compensar o dado" },
            { letter: "d", text: "O conector 'segundo' é inadequado para introduzir dados" },
          ]}
          resolution={<p>O dado "98% dos brasileiros são pobres" é claramente falso e exagerado. O corretor identificará o erro imediatamente, o que prejudica a credibilidade de todo o texto — inclusive dos argumentos corretos. Além disso, a fonte "dados do governo" é vaga demais. Um dado incorreto vale menos do que nenhum dado.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Dado integrado ao argumento"
          statement={<p>Para o tema "violência contra a mulher", qual uso de dado é mais eficaz e bem integrado ao argumento?</p>}
          options={[
            { letter: "a", text: "O Brasil registra muitos casos de violência contra a mulher, o que é muito grave." },
            { letter: "b", text: "Dados: 1.400 feminicídios/ano. A violência é um problema enorme no Brasil." },
            { letter: "c", text: "Segundo o Fórum Brasileiro de Segurança Pública, o Brasil registra mais de 1.400 feminicídios por ano — dado que demonstra que a violência de gênero atingiu dimensões de crise nacional, evidenciando que a Lei Maria da Penha, apesar de ser um avanço histórico, ainda precisa ser acompanhada de políticas efetivas de prevenção e proteção.", correct: true },
            { letter: "d", text: "O feminicídio é um crime grave. Existem muitos dados que provam isso." },
          ]}
          resolution={<p>A opção C apresenta o dado corretamente integrado: fonte confiável (FBSP) → dado específico (1.400/ano) → análise que extrai o significado (crise nacional) → contextualização adicional (Lei Maria da Penha) → argumento que aponta para a solução. Todas as outras opções carecem de fonte, de dado preciso ou de análise.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Memorização estratégica"
          statement={<p>Um candidato quer se preparar para o tema "desigualdade racial". Qual conjunto de dados é mais estratégico para memorizar?</p>}
          options={[
            { letter: "a", text: "Datas históricas da escravidão, nomes de líderes do movimento negro e obras literárias sobre o tema" },
            { letter: "b", text: "Disparidade salarial entre negros e brancos, percentual de negros no ensino superior, proporção de negros entre vítimas de homicídio e coeficiente de Gini", correct: true },
            { letter: "c", text: "Apenas o coeficiente de Gini, que resume toda a desigualdade em um único número" },
            { letter: "d", text: "Todos os dados disponíveis sobre o tema, para garantir que haverá pelo menos um correto" },
          ]}
          resolution={<p>A estratégia correta é selecionar dados que cobrem diferentes dimensões da desigualdade racial: econômica (salário), educacional (ensino superior), criminal (homicídios) e estrutural (Gini). Isso permite construir argumentos sólidos em qualquer subtema do assunto. Memorizar tudo é inviável e perigoso — cria risco de confusão e erros.</p>}
        />
      </section>
    </article>
  );
}
