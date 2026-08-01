"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 38</span>
          <h1>Era Vargas (1930–1954)</h1>
          <p>
            Getúlio Vargas dominou o cenário político brasileiro por mais de
            duas décadas, transformando radicalmente o Estado, a economia e as
            relações de trabalho no país. Do Governo Provisório ao Estado Novo,
            da industrialização à legislação trabalhista, Vargas redefiniu o
            papel do Estado brasileiro e construiu uma base popular — o
            trabalhismo — que marcou a política nacional até o golpe de 1964.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 — Contexto e chegada ao poder ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Outubro de 1930</span>
        <h2>A Revolução de 1930 e o Fim da República Velha</h2>
        <p>
          Getúlio Dornelles Vargas, gaúcho, ex-governador do Rio Grande do Sul
          e candidato derrotado nas eleições presidenciais de março de 1930,
          chegou ao poder em 3 de novembro de 1930 por meio de um movimento
          político-militar que derrubou o presidente Washington Luís. O estopim
          imediato foi a ruptura do pacto café-com-leite — São Paulo tentou
          manter a presidência para Júlio Prestes em vez de ceder ao candidato
          mineiro — e o assassinato do vice de Vargas, João Pessoa, da Paraíba.
        </p>
        <p>
          A "Revolução de 1930" encerrou a República Velha e inaugurou o que
          historiadores chamam de Era Vargas. Embora não tenha rompido com as
          estruturas sociais oligárquicas de forma imediata, o movimento
          reconfigurou as alianças de poder, abriu espaço para as camadas médias
          urbanas e para os militares e pavimentou o caminho para a
          industrialização e para o trabalhismo.
        </p>
      </section>

      {/* ===== SEÇÃO 2 — Linha do tempo SVG ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>As Fases do Varguismo</h2>

        {/* SVG — Linha do tempo */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="100%" aria-label="Linha do tempo da Era Vargas">
            {/* Linha principal */}
            <line x1="40" y1="100" x2="680" y2="100" stroke="#1e293b" strokeWidth="3" />

            {/* Fase 1 — Governo Provisório */}
            <rect x="40" y="60" width="130" height="40" rx="6" fill="#7c3aed" />
            <text x="105" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Gov. Provisório</text>
            <text x="105" y="89" textAnchor="middle" fill="#ede9fe" fontSize="9">1930–1934</text>
            <circle cx="105" cy="100" r="5" fill="#7c3aed" />

            {/* Fase 2 — Gov. Constitucional */}
            <rect x="185" y="60" width="140" height="40" rx="6" fill="#1d4ed8" />
            <text x="255" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Gov. Constitucional</text>
            <text x="255" y="89" textAnchor="middle" fill="#bfdbfe" fontSize="9">1934–1937</text>
            <circle cx="255" cy="100" r="5" fill="#1d4ed8" />

            {/* Fase 3 — Estado Novo */}
            <rect x="340" y="60" width="120" height="40" rx="6" fill="#991b1b" />
            <text x="400" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Estado Novo</text>
            <text x="400" y="89" textAnchor="middle" fill="#fecaca" fontSize="9">1937–1945</text>
            <circle cx="400" cy="100" r="5" fill="#991b1b" />

            {/* Fase 4 — Interregno */}
            <rect x="475" y="60" width="100" height="40" rx="6" fill="#374151" />
            <text x="525" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Interregno</text>
            <text x="525" y="89" textAnchor="middle" fill="#d1d5db" fontSize="9">1945–1950</text>
            <circle cx="525" cy="100" r="5" fill="#374151" />

            {/* Fase 5 — Retorno */}
            <rect x="590" y="60" width="90" height="40" rx="6" fill="#b45309" />
            <text x="635" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Retorno</text>
            <text x="635" y="89" textAnchor="middle" fill="#fef3c7" fontSize="9">1950–1954</text>
            <circle cx="635" cy="100" r="5" fill="#b45309" />

            {/* Suicídio */}
            <text x="635" y="130" textAnchor="middle" fontSize="9" fill="#991b1b">✝ 24/08/1954</text>

            {/* Título */}
            <text x="360" y="180" textAnchor="middle" fontSize="11" fill="#64748b">Linha do tempo: Era Vargas (1930–1954)</text>
          </svg>
          <figcaption>Linha do tempo das fases do varguismo, desde o Governo Provisório até o suicídio em 1954.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 3 — Governo Provisório ===== */}
      <section className="lesson-section">
        <span className="section-kicker">1930–1934</span>
        <h2>Governo Provisório</h2>
        <p>
          No Governo Provisório (1930–1934), Vargas governou por decreto,
          fechando o Congresso e nomeando interventores federais para os estados.
          Criou o Ministério do Trabalho, Indústria e Comércio — sinal claro de
          que o trabalhismo seria um pilar do novo regime. Nomeou Francisco
          Campos e outros intelectuais autoritários para postos-chave, adotando
          uma feição antiliberal e centralizadora.
        </p>
        <p>
          Em 1932, São Paulo se rebelou na chamada Revolução Constitucionalista,
          exigindo uma constituição e o fim do governo de exceção. Embora
          militarmente derrotados após três meses de combate, os paulistas
          obtiveram a vitória política: Vargas convocou uma Assembleia
          Constituinte, promulgando a Constituição de 1934, que inaugurou o
          Governo Constitucional.
        </p>
        <div className="lesson-highlight">
          <strong>Revolução Constitucionalista de 1932:</strong> O único conflito
          armado de grande escala do período varguista. São Paulo mobilizou cerca
          de 100 000 homens contra as forças federais. A derrota militar foi
          compensada pela vitória política: a redemocratização formal ocorreu em
          1934.
        </div>
      </section>

      {/* ===== SEÇÃO 4 — Governo Constitucional ===== */}
      <section className="lesson-section">
        <span className="section-kicker">1934–1937</span>
        <h2>Governo Constitucional e a Constituição de 1934</h2>
        <p>
          A Constituição de 1934 introduziu avanços significativos: voto
          feminino (conquistado pelas sufragistas, em especial Bertha Lutz),
          voto secreto, ensino primário gratuito e obrigatório, legislação
          trabalhista incorporada ao texto constitucional. Criou também a Justiça
          do Trabalho e definiu os direitos sociais como responsabilidade do
          Estado — ruptura com o liberalismo da Constituição de 1891.
        </p>
        <p>
          O período foi marcado pela polarização ideológica: à esquerda, o
          Partido Comunista e a Aliança Nacional Libertadora (ANL); à direita,
          o Integralismo de Plínio Salgado. Em novembro de 1935, comunistas
          insurgiram-se em Natal, Recife e Rio de Janeiro — a "Intentona
          Comunista". A repressão foi brutal e serviu como pretexto para Vargas
          ampliar poderes excepcionais e, finalmente, dar o golpe do Estado Novo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Constituição de 1891</th>
                <th>Constituição de 1934</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Voto feminino</td>
                <td>Não</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Voto secreto</td>
                <td>Não (voto a descoberto)</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Direitos trabalhistas</td>
                <td>Ausentes</td>
                <td>Incorporados ao texto</td>
              </tr>
              <tr>
                <td>Ensino primário</td>
                <td>Não regulamentado</td>
                <td>Gratuito e obrigatório</td>
              </tr>
              <tr>
                <td>Justiça do Trabalho</td>
                <td>Inexistente</td>
                <td>Prevista</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — Estado Novo ===== */}
      <section className="lesson-section">
        <span className="section-kicker">1937–1945</span>
        <h2>O Estado Novo: Autoritarismo e Modernização</h2>
        <p>
          Em 10 de novembro de 1937, Vargas deu um golpe de Estado — alegando
          um suposto plano comunista de tomada do poder (o "Plano Cohen", que
          depois se revelou uma fabricação do Exército) — e instaurou o Estado
          Novo. A nova Constituição ("Polaca", de Francisco Campos) concentrava
          poderes no Executivo, extinguia os partidos políticos, suprimia a
          imprensa livre e previa pena de morte.
        </p>
        <p>
          O Departamento de Imprensa e Propaganda (DIP), sob o controle de
          Lourival Fontes, foi o principal instrumento de censura e propaganda
          do regime. O DIP controlava rádios, jornais, cinema e o teatro,
          construindo a imagem de Vargas como o "pai dos pobres". Num gesto
          simbólico de centralismos, queimou-se as bandeiras estaduais em
          praça pública em 1937, afirmando a primazia da nação sobre os estados.
        </p>
        <div className="lesson-highlight">
          <strong>O Plano Cohen:</strong> Documento supostamente comunista —
          na verdade forjado pelo General Góes Monteiro — que Vargas usou como
          pretexto para decretar estado de guerra e, depois, para o golpe do
          Estado Novo. Exemplo clássico de instrumentalização do anticomunismo
          para fins políticos.
        </div>
      </section>

      {/* ===== SEÇÃO 6 — Industrialização ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Economia e modernização</span>
        <h2>Industrialização e Estatismo</h2>
        <p>
          A Era Vargas foi o período de lançamento das bases da industrialização
          brasileira. O Estado assumiu o papel de indutor do desenvolvimento —
          o chamado "nacional-desenvolvimentismo". Foram criadas empresas
          estatais estratégicas: a Companhia Siderúrgica Nacional (CSN, em Volta
          Redonda, RJ, inaugurada em 1946 com ajuda norte-americana), a Companhia
          Vale do Rio Doce (CVRD, 1942) e o planejamento da futura Petrobras
          (criada em 1953, no segundo governo). O modelo substituía as importações
          e buscava a independência industrial do país.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Empresa / Política</th>
                <th>Ano</th>
                <th>Setor</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CVRD (Vale)</td>
                <td>1942</td>
                <td>Mineração</td>
                <td>Controle nacional do minério de ferro</td>
              </tr>
              <tr>
                <td>CSN</td>
                <td>1941 (início) / 1946 (operação)</td>
                <td>Siderurgia</td>
                <td>Primeira siderúrgica integrada do Brasil</td>
              </tr>
              <tr>
                <td>FNM</td>
                <td>1942</td>
                <td>Automotivo / aviação</td>
                <td>Fábrica Nacional de Motores</td>
              </tr>
              <tr>
                <td>Petrobras</td>
                <td>1953</td>
                <td>Petróleo</td>
                <td>Monopólio estatal do petróleo; "o petróleo é nosso"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 — Trabalhismo ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Legislação social</span>
        <h2>O Trabalhismo: CLT e "Pai dos Pobres"</h2>
        <p>
          O principal legado popular de Vargas foi a legislação trabalhista. A
          Consolidação das Leis do Trabalho (CLT), decretada em 1943, reuniu em
          um único diploma legal direitos que os trabalhadores urbanos vinham
          conquistando desde os anos 1930: carteira de trabalho, salário mínimo
          (criado em 1940), jornada de oito horas, férias remuneradas, descanso
          semanal, proibição do trabalho infantil e regulamentação sindical.
        </p>
        <p>
          O sindicalismo varguista era corporativista: os sindicatos eram
          reconhecidos pelo Estado, que também controlava suas finanças por
          meio do imposto sindical. Em troca de direitos concretos, os
          trabalhadores aceitavam um sindicalismo tutelado. Esse arranjo
          construiu a base eleitoral trabalhista que sustentou Vargas em 1950
          e o PTB (Partido Trabalhista Brasileiro) nas décadas seguintes.
        </p>

        {/* SVG — Diagrama dos direitos trabalhistas */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 600 300" width="100%" aria-label="Diagrama dos direitos trabalhistas da CLT">
            <rect width="600" height="300" fill="#f0fdf4" rx="8" />
            <text x="300" y="28" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#14532d">
              CLT (1943) — Principais Direitos Trabalhistas
            </text>

            {/* Centro */}
            <ellipse cx="300" cy="155" rx="70" ry="40" fill="#15803d" />
            <text x="300" y="150" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="13">CLT</text>
            <text x="300" y="168" textAnchor="middle" fill="#dcfce7" fontSize="10">1943</text>

            {/* Raios */}
            {/* Carteira de trabalho */}
            <circle cx="100" cy="80" r="40" fill="#166534" />
            <text x="100" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Carteira</text>
            <text x="100" y="89" textAnchor="middle" fill="#dcfce7" fontSize="10">de Trabalho</text>
            <line x1="140" y1="80" x2="230" y2="140" stroke="#15803d" strokeWidth="1.5" />

            {/* Salário mínimo */}
            <circle cx="80" cy="200" r="40" fill="#166534" />
            <text x="80" y="195" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Salário</text>
            <text x="80" y="209" textAnchor="middle" fill="#dcfce7" fontSize="10">Mínimo</text>
            <line x1="118" y1="185" x2="233" y2="165" stroke="#15803d" strokeWidth="1.5" />

            {/* Férias */}
            <circle cx="300" cy="55" r="40" fill="#166534" />
            <text x="300" y="50" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Férias</text>
            <text x="300" y="64" textAnchor="middle" fill="#dcfce7" fontSize="10">Remuneradas</text>
            <line x1="300" y1="95" x2="300" y2="115" stroke="#15803d" strokeWidth="1.5" />

            {/* Jornada 8h */}
            <circle cx="500" cy="80" r="40" fill="#166534" />
            <text x="500" y="75" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Jornada</text>
            <text x="500" y="89" textAnchor="middle" fill="#dcfce7" fontSize="10">de 8 horas</text>
            <line x1="460" y1="80" x2="368" y2="140" stroke="#15803d" strokeWidth="1.5" />

            {/* Descanso semanal */}
            <circle cx="520" cy="200" r="40" fill="#166534" />
            <text x="520" y="195" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Descanso</text>
            <text x="520" y="209" textAnchor="middle" fill="#dcfce7" fontSize="10">Semanal</text>
            <line x1="482" y1="185" x2="367" y2="165" stroke="#15803d" strokeWidth="1.5" />

            {/* Proibição trabalho infantil */}
            <circle cx="300" cy="268" r="28" fill="#166534" />
            <text x="300" y="263" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">Proib.</text>
            <text x="300" y="276" textAnchor="middle" fill="#dcfce7" fontSize="9">Trab. Infantil</text>
            <line x1="300" y1="240" x2="300" y2="195" stroke="#15803d" strokeWidth="1.5" />
          </svg>
          <figcaption>Diagrama dos principais direitos trabalhistas consolidados na CLT de 1943.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 8 — Queda em 1945 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">1945</span>
        <h2>A Queda em 1945</h2>
        <p>
          Com o fim da Segunda Guerra Mundial (1945) e a derrota do nazi-fascismo,
          tornava-se insustentável manter um regime autoritário no Brasil. O
          "queremismo" — movimento popular que exigia a permanência de Vargas
          ("Queremos Getúlio") — tensionou as relações com os militares. Em
          outubro de 1945, os generais Eurico Gaspar Dutra e Góes Monteiro
          depuseram Vargas, que retornou ao Rio Grande do Sul. Foram convocadas
          eleições. Dutra venceu com apoio do PSD e do PTB (paradoxalmente
          o partido fundado pelo próprio Vargas).
        </p>
        <p>
          Em 1950, Vargas voltou pelo voto, eleito pelo PTB com enorme margem.
          Seu segundo governo foi marcado pela criação da Petrobras (1953) e
          pelo slogan "o petróleo é nosso", pelo aumento de 100% do salário
          mínimo (1954) e pela crescente pressão da UDN e dos militares. Em
          agosto de 1954, acuado por uma crise política que incluía o atentado
          da Rua Toneleros (tentativa de assassinato do jornalista Carlos
          Lacerda, aliada a denúncias de corrupção), Vargas suicidou-se no
          Palácio do Catete com um tiro no coração.
        </p>
        <div className="lesson-highlight">
          <strong>A Carta Testamento:</strong> "Serenamente dou o primeiro passo
          no caminho da eternidade e saio da vida para entrar na história." O
          texto, dirigido ao povo brasileiro, transformou Vargas em mártir
          político e provocou comoção popular que adiou os planos golpistas da
          UDN.
        </div>
      </section>

      {/* ===== SEÇÃO 9 — Comparação fases ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>Quadro Comparativo das Fases Varguistas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Período</th>
                <th>Tipo de governo</th>
                <th>Principais medidas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Governo Provisório</td>
                <td>1930–1934</td>
                <td>Ditadura discricionária</td>
                <td>Interventores, Ministério do Trabalho, Revolução Constitucionalista</td>
              </tr>
              <tr>
                <td>Governo Constitucional</td>
                <td>1934–1937</td>
                <td>República constitucional</td>
                <td>Voto feminino, direitos sociais, Intentona Comunista</td>
              </tr>
              <tr>
                <td>Estado Novo</td>
                <td>1937–1945</td>
                <td>Ditadura personalista</td>
                <td>DIP, CLT, CSN, CVRD, queima de bandeiras, censura</td>
              </tr>
              <tr>
                <td>Retorno democrático</td>
                <td>1950–1954</td>
                <td>República democrática</td>
                <td>Petrobras, salário mínimo +100%, carta testamento, suicídio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 10 — Foco ENEM ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Foco ENEM</span>
        <h2>O que o ENEM cobra sobre a Era Vargas</h2>
        <p>
          O ENEM explora a Era Vargas privilegiando a análise crítica dos
          documentos do período: propagandas do DIP, trechos da carta testamento,
          cartazes trabalhistas, reportagens de época. As questões costumam
          contrastar os direitos trabalhistas concedidos (que beneficiaram
          trabalhadores urbanos) com a exclusão dos trabalhadores rurais da CLT
          e com a natureza autoritária e corporativista do sindicalismo varguista.
          O conceito de "populismo" — relação direta entre líder e massa,
          contornando instituições intermediárias — também é frequentemente
          cobrado. Atenção especial ao Estado Novo: censura, propaganda e
          industrialização num mesmo regime.
        </p>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="CLT e direitos trabalhistas"
          statement={
            <p>
              A Consolidação das Leis do Trabalho (CLT), decretada por Getúlio
              Vargas em 1943, foi um marco no direito trabalhista brasileiro.
              Assinale a alternativa correta sobre a CLT.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "A CLT foi criada para regulamentar o trabalho rural, beneficiando principalmente os camponeses.",
            },
            {
              letter: "B",
              text: "A CLT reuniu direitos trabalhistas como carteira de trabalho, jornada de oito horas, salário mínimo e férias remuneradas, voltados principalmente ao trabalhador urbano.",
              correct: true,
            },
            {
              letter: "C",
              text: "A CLT foi uma iniciativa do Congresso Nacional em resposta às greves operárias do Estado Novo.",
            },
            {
              letter: "D",
              text: "A CLT aboliu o sistema de sindicatos e proibiu a organização coletiva dos trabalhadores.",
            },
            {
              letter: "E",
              text: "A CLT foi um instrumento liberal que visava reduzir a intervenção do Estado nas relações de trabalho.",
            },
          ]}
          resolution={
            <p>
              A CLT de 1943 consolidou numa única legislação os direitos
              trabalhistas dos trabalhadores urbanos: carteira de trabalho,
              jornada de 8 horas, salário mínimo, férias remuneradas, descanso
              semanal e proibição do trabalho infantil. Importante notar que
              os trabalhadores rurais foram excluídos dessas proteções — o que
              o ENEM frequentemente explora como a contradição social do
              trabalhismo varguista.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Estado Novo e autoritarismo"
          statement={
            <p>
              "O Estado Novo (1937–1945) combinava características autoritárias
              com políticas de modernização econômica e social." Identifique, na
              lista abaixo, o conjunto de características que melhor define o
              Estado Novo.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "Democracia representativa, livre imprensa, criação de empresas privadas e voto universal.",
            },
            {
              letter: "B",
              text: "Ditadura personalista, DIP (censura e propaganda), criação de estatais (CSN, CVRD), CLT e corporativismo sindical.",
              correct: true,
            },
            {
              letter: "C",
              text: "Governo militar sem personalidade carismática, abertura econômica ao capital estrangeiro e fim dos sindicatos.",
            },
            {
              letter: "D",
              text: "Sistema parlamentarista, liberdade de imprensa controlada pelo Senado e pluripartidarismo.",
            },
            {
              letter: "E",
              text: "Regime democrático com forte participação popular por meio de referendos e eleições diretas.",
            },
          ]}
          resolution={
            <p>
              O Estado Novo foi um regime ditatorial pessoal de Vargas, marcado
              pela censura e propaganda do DIP, pela criação de empresas
              estatais estratégicas (CSN, CVRD) e pela legislação trabalhista
              (CLT, 1943). O sindicalismo era corporativista — controlado
              pelo Estado — e não havia eleições. A contradição central é
              justamente a combinação de autoritarismo político com modernização
              econômica e concessões sociais.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="O trabalhismo varguista e o conceito de populismo"
          statement={
            <p>
              O historiador Francisco Weffort caracterizou o populismo varguista
              como uma relação direta entre o líder e as massas urbanas que
              contornava as instituições intermediárias tradicionais (partidos,
              parlamento). Com base nessa perspectiva, analise a charge fictícia:
              "Vargas distribui a carteira de trabalho pessoalmente ao operário,
              pulando os sindicatos." Que aspecto do varguismo essa imagem
              ilustra?
            </p>
          }
          options={[
            {
              letter: "A",
              text: "A eficiência administrativa do Estado Novo, que dispensava burocracias desnecessárias.",
            },
            {
              letter: "B",
              text: "A relação populista de concessão pessoal de direitos — Vargas como 'pai' que dá ao trabalhador —, criando dependência política sem autonomia sindical real.",
              correct: true,
            },
            {
              letter: "C",
              text: "A força dos sindicatos livres que pressionaram Vargas a conceder a CLT.",
            },
            {
              letter: "D",
              text: "O caráter liberal do varguismo, que respeitava a autonomia individual dos trabalhadores.",
            },
            {
              letter: "E",
              text: "A neutralidade política de Vargas, que não explorava eleitoralmente as concessões trabalhistas.",
            },
          ]}
          resolution={
            <p>
              Weffort e outros analistas identificam no populismo varguista uma
              relação de dependência: os direitos eram apresentados como dádiva
              pessoal do líder, não como conquista da luta coletiva. O
              sindicalismo corporativista reforçava essa dinâmica, pois os
              sindicatos eram tutelados pelo Estado e não podiam agir de forma
              autônoma. Isso criava fidelidade eleitoral sem organização
              independente da classe trabalhadora.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="A Carta Testamento e o suicídio de Vargas"
          statement={
            <p>
              "Serenamente dou o primeiro passo no caminho da eternidade e saio
              da vida para entrar na história." Com essas palavras, Vargas
              encerrou sua carta testamento em 24 de agosto de 1954. Qual foi
              o impacto político imediato do suicídio de Vargas?
            </p>
          }
          options={[
            {
              letter: "A",
              text: "O suicídio de Vargas foi irrelevante politicamente, pois ele já havia perdido todo apoio popular.",
            },
            {
              letter: "B",
              text: "O suicídio provocou comoção popular e adiou os planos golpistas da UDN e dos militares, preservando temporariamente a democracia.",
              correct: true,
            },
            {
              letter: "C",
              text: "O suicídio foi celebrado pelos trabalhadores que rejeitavam o trabalhismo autoritário de Vargas.",
            },
            {
              letter: "D",
              text: "O suicídio levou imediatamente ao golpe militar de 1954, iniciando a ditadura.",
            },
            {
              letter: "E",
              text: "O suicídio enfraqueceu permanentemente o PTB e acabou com o trabalhismo brasileiro.",
            },
          ]}
          resolution={
            <p>
              O suicídio de Vargas provocou comoção popular intensa: multidões
              invadiram redações de jornais opositores, embaixadas e sedes de
              partidos contrários a Vargas. A UDN e os militares, que planejavam
              forçar sua renúncia, recuaram diante da reação popular. A democracia
              foi preservada por mais dez anos, até o golpe de 1964. Vargas
              tornou-se mártir e seu legado trabalhista persistiu no PTB de
              João Goulart.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Industrialização e nacional-desenvolvimentismo"
          statement={
            <p>
              Durante a Era Vargas, o Estado brasileiro assumiu o papel de
              indutor do desenvolvimento industrial. Essa estratégia ficou
              conhecida como nacional-desenvolvimentismo. Identifique a
              alternativa que melhor caracteriza esse modelo.
            </p>
          }
          options={[
            {
              letter: "A",
              text: "Modelo baseado na abertura irrestrita ao capital estrangeiro, sem papel ativo do Estado na economia.",
            },
            {
              letter: "B",
              text: "Modelo de substituição de importações em que o Estado criava empresas estratégicas para reduzir a dependência externa e promover a industrialização.",
              correct: true,
            },
            {
              letter: "C",
              text: "Política que mantinha o Brasil como exportador agrícola, sem investimentos na indústria de base.",
            },
            {
              letter: "D",
              text: "Estratégia de privatização de setores estratégicos como petróleo e siderurgia.",
            },
            {
              letter: "E",
              text: "Modelo liberal que reduzia impostos para estimular o empreendedorismo privado nacional.",
            },
          ]}
          resolution={
            <p>
              O nacional-desenvolvimentismo varguista baseava-se na substituição
              de importações: ao invés de comprar produtos industrializados no
              exterior, o Brasil passou a produzi-los internamente, com forte
              participação estatal. Empresas como a CSN (siderurgia), a CVRD
              (mineração) e a Petrobras (petróleo) foram criadas para garantir
              insumos estratégicos à indústria nacional, reduzindo a dependência
              externa e consolidando o capitalismo industrial brasileiro.
            </p>
          }
        />
      </section>
    </article>
  );
}
