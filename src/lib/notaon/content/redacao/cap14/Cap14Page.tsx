"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 14</span>
          <h1>Argumentação Científica</h1>
          <p>
            Aprenda a usar dados do IBGE, OMS, IPEA e outras fontes confiáveis para
            construir argumentos objetivos, credíveis e convincentes — elevando sua nota
            nas Competências 2 e 3 do ENEM sem precisar de footnotes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que Dados Científicos Fortalecem Argumentos</h2>
        <p>
          Na dissertação argumentativa, um dos mecanismos mais eficazes de persuasão é a
          <strong> prova empírica</strong>: dados, estatísticas e pesquisas científicas que
          demonstram a dimensão real de um problema. Enquanto a filosofia oferece fundamentação
          teórica e a história oferece contexto causal, os dados científicos oferecem
          <strong> objetividade e credibilidade</strong>. Ao escrever "segundo dados do IBGE,
          cerca de X% dos brasileiros vivem abaixo da linha da pobreza", o candidato transforma
          uma impressão em argumento documentado.
        </p>
        <div className="lesson-highlight">
          <h3>Impacto nas competências</h3>
          <p>
            Dados científicos elevam a <strong>Competência 2</strong> (demonstram conhecimento
            de mundo e uso produtivo de repertório de outras áreas do conhecimento) e a
            <strong> Competência 3</strong> (organizam argumentos por causa e consequência com
            base em evidências concretas, não apenas em opinião).
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Pirâmide de credibilidade de fontes para a redação ENEM">
            <rect width="480" height="220" fill="#f8fafc" rx="12" />
            {/* Pyramid layers */}
            {/* Base - highest credibility */}
            <polygon points="60,195 420,195 380,150 100,150" fill="#10b981" />
            <text x="240" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ALTA CREDIBILIDADE</text>
            <text x="240" y="186" textAnchor="middle" fill="white" fontSize="9">IBGE · OMS · IPEA · UNICEF · INEP · Atlas da Violência</text>
            {/* Middle */}
            <polygon points="100,150 380,150 340,105 140,105" fill="#f59e0b" />
            <text x="240" y="122" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MÉDIA CREDIBILIDADE</text>
            <text x="240" y="136" textAnchor="middle" fill="white" fontSize="9">Jornais de referência · Revistas científicas · Relatórios ONU</text>
            {/* Top - low credibility */}
            <polygon points="140,105 340,105 300,60 180,60" fill="#ef4444" />
            <text x="240" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BAIXA CREDIBILIDADE</text>
            <text x="240" y="94" textAnchor="middle" fill="white" fontSize="9">Blogs · Redes sociais · Fontes anônimas</text>
            {/* Peak */}
            <polygon points="180,60 300,60 240,22" fill="#7f1d1d" />
            <text x="240" y="46" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">EVITE</text>
            <text x="240" y="58" textAnchor="middle" fill="white" fontSize="8">Dados inventados</text>
            {/* Label left */}
            <text x="28" y="185" fill="#10b981" fontSize="9" transform="rotate(-90,28,185)">+ Confiável</text>
            <text x="28" y="45" fill="#ef4444" fontSize="9" transform="rotate(-90,28,45)">- Confiável</text>
          </svg>
          <figcaption>Pirâmide de credibilidade de fontes para a redação ENEM — use sempre fontes da base (IBGE, OMS, IPEA) e evite dados sem fonte ou dados inventados.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fontes</span>
        <h2>2. Fontes Confiáveis para Repertório Científico</h2>
        <p>
          Você não precisa memorizar números exatos — mas precisa saber de onde vêm os dados
          e qual é a especialidade de cada fonte. Isso permite usar fórmulas como "segundo
          dados do IBGE" com precisão:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fonte</th>
                <th>Área de especialidade</th>
                <th>Como usar na redação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IBGE</td>
                <td>Dados demográficos, socioeconômicos e censitários do Brasil</td>
                <td>"Segundo dados do IBGE, cerca de X% da população brasileira..."</td>
              </tr>
              <tr>
                <td>OMS / WHO</td>
                <td>Saúde pública global — doenças, saúde mental, medicamentos</td>
                <td>"De acordo com a Organização Mundial da Saúde..."</td>
              </tr>
              <tr>
                <td>IPEA</td>
                <td>Pesquisas sobre desigualdade, pobreza, trabalho e políticas sociais no Brasil</td>
                <td>"Pesquisa do Instituto de Pesquisa Econômica Aplicada revela que..."</td>
              </tr>
              <tr>
                <td>UNICEF</td>
                <td>Direitos de crianças e adolescentes, educação e saúde infantil globais</td>
                <td>"Dados da UNICEF apontam que mais de X milhões de crianças..."</td>
              </tr>
              <tr>
                <td>INEP</td>
                <td>Educação brasileira — IDEB, analfabetismo, desempenho escolar</td>
                <td>"Segundo o INEP, o índice de analfabetismo funcional no Brasil..."</td>
              </tr>
              <tr>
                <td>Atlas da Violência (FBSP/IPEA)</td>
                <td>Segurança pública, homicídios, violência de gênero no Brasil</td>
                <td>"O Atlas da Violência registra que o Brasil concentra..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Como citar</span>
        <h2>3. Como Citar Dados sem Footnote</h2>
        <p>
          A redação ENEM não usa notas de rodapé nem referências bibliográficas. Os dados
          são incorporados diretamente ao texto por meio de expressões introdutórias que
          indicam a fonte. As fórmulas mais eficazes:
        </p>
        <div className="lesson-highlight">
          <h3>Fórmulas prontas para usar</h3>
          <p>
            "Segundo dados do IBGE, cerca de [X]% da população brasileira..." |
            "De acordo com a Organização Mundial da Saúde, mais de [X] milhões de pessoas..." |
            "Pesquisa do IPEA revela que, no Brasil, mais da metade dos domicílios..." |
            "O Atlas da Violência registra que uma mulher é assassinada a cada seis horas no Brasil..." |
            "Dados da UNICEF indicam que aproximadamente [X] crianças brasileiras..." |
            "Conforme aponta o último censo do IBGE, o Brasil conta com..."
          </p>
        </div>
        <p>
          Note que você não precisa do número exato. "Mais da metade", "cerca de um quarto",
          "aproximadamente um terço" são estimativas razoáveis que o ENEM aceita quando
          acompanhadas de uma fonte credível.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados sociais</span>
        <h2>4. Dados Sociais Relevantes para o ENEM</h2>
        <p>
          Estes são os dados que mais aparecem em redações nota alta. Memorize a ordem de
          grandeza, não o número preciso:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ENEM</th>
                <th>Dado relevante (ordem de grandeza)</th>
                <th>Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Violência contra a mulher</td>
                <td>1 mulher assassinada a cada 6 horas; Brasil tem uma das maiores taxas de feminicídio do mundo</td>
                <td>Atlas da Violência / IPEA</td>
              </tr>
              <tr>
                <td>Desigualdade de renda</td>
                <td>Brasil está entre os países mais desiguais do mundo — Índice de Gini elevado</td>
                <td>IBGE / Banco Mundial</td>
              </tr>
              <tr>
                <td>Educação / Analfabetismo</td>
                <td>Cerca de 1 em cada 4 brasileiros adultos é analfabeto funcional</td>
                <td>INEP / IBGE</td>
              </tr>
              <tr>
                <td>Saneamento básico</td>
                <td>Mais de 35 milhões de brasileiros sem acesso a água tratada</td>
                <td>IBGE / SNIS</td>
              </tr>
              <tr>
                <td>Trabalho infantil</td>
                <td>Mais de 1 milhão de crianças em trabalho infantil no Brasil</td>
                <td>IBGE / UNICEF</td>
              </tr>
              <tr>
                <td>Saúde mental</td>
                <td>Depressão é a principal causa de incapacidade no mundo; Brasil tem alta taxa de suicídio</td>
                <td>OMS / Min. Saúde</td>
              </tr>
              <tr>
                <td>Racismo / Desigualdade racial</td>
                <td>Negros representam cerca de 70% dos mais pobres e das vítimas de homicídio no Brasil</td>
                <td>IBGE / Atlas da Violência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia e ciência</span>
        <h2>5. Ciência e Tecnologia como Tema e Argumento</h2>
        <p>
          Além de dados socioeconômicos, o ENEM valoriza candidatos que demonstram
          consciência científica sobre temas de ciência e tecnologia. Três áreas merecem
          atenção especial:
        </p>
        <div className="lesson-highlight">
          <h3>Inteligência Artificial e automação</h3>
          <p>
            "Segundo o Fórum Econômico Mundial, a automação por inteligência artificial
            pode substituir cerca de 85 milhões de empregos até 2025, tornando urgente
            a discussão sobre qualificação profissional e redes de proteção social."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Aquecimento global e clima</h3>
          <p>
            "O Painel Intergovernamental sobre Mudanças Climáticas (IPCC) adverte que,
            sem ação imediata, o planeta aquecerá 1,5°C acima dos níveis pré-industriais
            ainda nesta década, intensificando eventos climáticos extremos e ameaçando
            a segurança alimentar de bilhões de pessoas."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Saúde pública e pandemia</h3>
          <p>
            "A pandemia de Covid-19 evidenciou a fragilidade dos sistemas de saúde pública:
            segundo a OMS, países com maior investimento per capita em saúde apresentaram
            taxas de mortalidade significativamente menores — um dado que reforça a
            correlação entre políticas de saúde preventiva e proteção das populações."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estimativas seguras</span>
        <h2>6. Como Usar Estatísticas Aproximadas com Segurança</h2>
        <p>
          O maior medo dos candidatos é usar um dado errado. A solução é simples: use
          aproximações razoáveis acompanhadas da fonte. O ENEM não exige precisão decimal —
          exige verossimilhança e indicação de origem.
        </p>
        <div className="lesson-highlight">
          <h3>Escala de segurança para dados aproximados</h3>
          <p>
            <strong>Mais seguro:</strong> "Mais da metade", "cerca de um quarto", "aproximadamente
            um terço" + fonte genérica confiável.<br />
            <strong>Seguro:</strong> "Cerca de X%" (arredondado para dezena mais próxima) + fonte específica.<br />
            <strong>Arriscado:</strong> Percentual exato (ex: "27,3%") sem certeza — se errar,
            prejudica a credibilidade.<br />
            <strong>Proibido:</strong> Dado inventado sem nenhuma base real.
          </p>
        </div>
        <p>
          Exemplo prático: se você sabe que o analfabetismo funcional é "alto no Brasil" mas
          não lembra o número, use: "Segundo o INEP, parcela expressiva da população adulta
          brasileira apresenta analfabetismo funcional, evidenciando as lacunas de um sistema
          educacional historicamente subfinanciado."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gênero</span>
        <h2>7. Dados sobre Desigualdade de Gênero</h2>
        <p>
          Temas sobre mulheres e gênero aparecem com frequência no ENEM. Estes dados são
          especialmente relevantes e devem ser memorizados:
        </p>
        <ul>
          <li><strong>Violência doméstica:</strong> cerca de 30% das mulheres brasileiras já sofreram violência física ou sexual de um parceiro íntimo (OMS/IPEA).</li>
          <li><strong>Feminicídio:</strong> uma mulher é assassinada a cada 6 horas no Brasil — um dos maiores índices do mundo.</li>
          <li><strong>Desigualdade salarial:</strong> mulheres ganham em média 20–30% menos que homens em cargos equivalentes no Brasil (IBGE).</li>
          <li><strong>Sub-representação política:</strong> apesar de serem maioria da população, mulheres ocupam menos de 20% das cadeiras no Congresso Nacional.</li>
          <li><strong>Dupla jornada:</strong> mulheres realizam em média 21 horas semanais a mais de trabalho doméstico não remunerado que os homens (IBGE).</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Argumento com dados de gênero</h3>
          <p>
            "A desigualdade de gênero no mercado de trabalho vai além da diferença salarial:
            segundo o IBGE, mulheres realizam mais de 20 horas semanais de trabalho doméstico
            não remunerado — uma jornada invisível que limita sua disponibilidade para a vida
            profissional e perpetua a desigualdade estrutural."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Causa-consequência</span>
        <h2>8. Template de Argumento por Causa-Consequência com Dados</h2>
        <p>
          Esta é a estrutura mais valorizada pela Competência 3. Combine causa, dado
          científico e consequência em um parágrafo coeso:
        </p>
        <div className="lesson-highlight">
          <h3>Template completo</h3>
          <p>
            "[CAUSA]: A negligência histórica do Estado brasileiro com o saneamento básico
            é um dos principais fatores da mortalidade infantil nas regiões mais pobres do
            país. [DADO]: Segundo dados do IBGE, mais de 35 milhões de brasileiros ainda não
            têm acesso a água tratada em suas residências. [CONSEQUÊNCIA]: Esse déficit
            impacta diretamente a saúde das crianças, que se tornam mais vulneráveis a
            doenças gastrointestinais evitáveis, comprometendo o desenvolvimento físico e
            cognitivo das futuras gerações. [CONEXÃO COM A TESE]: Portanto, investir em
            infraestrutura hídrica não é apenas uma questão ambiental, mas de saúde pública
            e de cumprimento do direito constitucional à dignidade humana."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>9. Erros Graves com Repertório Científico</h2>
        <div className="lesson-highlight">
          <h3>Erro 1: Inventar dados</h3>
          <p>
            "99% dos brasileiros vivem em extrema pobreza" é obviamente falso e destrói a
            credibilidade do texto. Percentuais inverossímeis são piores que a ausência de dado.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro 2: Citar fonte errada para o dado</h3>
          <p>
            Atribuir dado de saúde pública ao IBGE quando o IBGE não pesquisa aquele
            indicador específico demonstra conhecimento superficial. Use a fonte correta
            ou use uma fórmula genérica como "pesquisas governamentais apontam que..."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro 3: Usar dado sem conectar ao argumento</h3>
          <p>
            "Segundo o IBGE, 215 milhões de brasileiros." O dado está incompleto — falta
            o contexto, a consequência e a conexão ao tema. Um dado isolado não é argumento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Argumentação Científica</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📊</span>
            <h3>Seis fontes-chave</h3>
            <p>IBGE, OMS, IPEA, UNICEF, INEP e Atlas da Violência — saiba o que cada uma mede.</p>
          </div>
          <div className="math-card">
            <span>✍️</span>
            <h3>Aproximações são aceitas</h3>
            <p>"Cerca de", "mais da metade", "aproximadamente" + fonte confiável = dado válido no ENEM.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Dado + causa + consequência</h3>
            <p>O dado nunca fica sozinho: sempre vem com causa ou consequência que o conecta ao tema.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Nunca invente</h3>
            <p>Um percentual absurdo (99%, 0,1%) ou inventado é pior que nenhum dado. Seja cauteloso.</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Dados globais também valem</h3>
            <p>OMS, IPCC, UNICEF, ONU — dados internacionais são aceitos e valorizam o texto.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Eleva C2 e C3</h3>
            <p>Dados científicos demonstram conhecimento de outras áreas (C2) e organizam argumentos causais (C3).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de fonte"
          statement={
            <p>
              Um candidato quer incluir um dado sobre <strong>desigualdade de renda no Brasil</strong>
              em sua redação. Qual fonte é mais adequada para embasar esse dado?
            </p>
          }
          options={[
            { letter: "a", text: "OMS — Organização Mundial da Saúde." },
            { letter: "b", text: "IPEA — Instituto de Pesquisa Econômica Aplicada.", correct: true },
            { letter: "c", text: "UNICEF — Fundo das Nações Unidas para a Infância." },
            { letter: "d", text: "INEP — Instituto Nacional de Estudos e Pesquisas Educacionais." },
          ]}
          resolution={
            <p>
              O IPEA (Instituto de Pesquisa Econômica Aplicada) é a principal fonte de
              pesquisas sobre desigualdade, pobreza, trabalho e políticas sociais no Brasil.
              A OMS é adequada para dados de saúde; a UNICEF, para crianças; o INEP, para
              educação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Dado aproximado vs. dado preciso"
          statement={
            <p>
              Em uma redação sobre <strong>analfabetismo funcional</strong>, um candidato
              não tem certeza do percentual exato. Qual das formulações abaixo é mais
              adequada ao contexto da redação ENEM?
            </p>
          }
          options={[
            { letter: "a", text: "'Segundo o INEP, exatamente 29,4% dos brasileiros adultos são analfabetos funcionais.'" },
            { letter: "b", text: "'O analfabetismo funcional é um problema grave no Brasil, sem dados disponíveis sobre sua dimensão.'" },
            { letter: "c", text: "'Segundo dados do INEP, cerca de um quarto dos brasileiros adultos não consegue compreender plenamente textos escritos.'", correct: true },
            { letter: "d", text: "'Todos os brasileiros são analfabetos funcionais, segundo o IBGE.'" },
          ]}
          resolution={
            <p>
              A alternativa C é a mais segura: usa uma aproximação razoável ("cerca de um
              quarto"), indica a fonte correta (INEP), descreve o dado com linguagem
              acessível e não arrisca um percentual preciso que pode estar errado. O ENEM
              não exige precisão matemática nos dados — exige razoabilidade e indicação
              de fonte.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Template causa-consequência"
          statement={
            <p>
              Um candidato quer usar o seguinte dado em uma redação sobre saúde mental:
              "A OMS classifica a depressão como a principal causa de incapacidade no
              mundo." Para que esse dado seja um argumento produtivo (Competência 3), ele
              precisa ser seguido de:
            </p>
          }
          options={[
            { letter: "a", text: "Uma citação filosófica sobre saúde, para complementar o dado com teoria." },
            { letter: "b", text: "A explicação de uma causa da depressão E/OU de sua consequência social, conectando ao problema discutido na tese.", correct: true },
            { letter: "c", text: "Um segundo dado sobre outro problema de saúde, para ampliar o repertório." },
            { letter: "d", text: "Uma proposta de intervenção para combater a depressão no parágrafo do desenvolvimento." },
          ]}
          resolution={
            <p>
              A Competência 3 avalia a organização e profundidade argumentativa. Um dado
              sozinho é uma informação, não um argumento. Para se tornar argumento, o dado
              precisa estar inserido em uma cadeia causal: por que a depressão tem essa
              dimensão? Quais são as consequências sociais? Como isso se conecta à tese?
              A proposta de intervenção pertence à conclusão, não ao desenvolvimento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Dado de gênero integrado ao argumento"
          statement={
            <p>
              (Estilo ENEM) Leia o trecho: "A desigualdade salarial entre homens e mulheres
              no Brasil persiste décadas após a equiparação formal de direitos. Segundo dados
              do IBGE, mulheres ganham em média 20% menos que homens em funções equivalentes,
              revelando que a discriminação de gênero transcende a esfera legal e se enraíza
              em práticas institucionais e culturais que o Estado precisa combater ativamente."
              Esse uso de dado científico é eficaz porque:
            </p>
          }
          options={[
            { letter: "a", text: "Usa um percentual exato e preciso que demonstra conhecimento avançado de estatística." },
            { letter: "b", text: "Apresenta o dado, indica a fonte, extrai a consequência (discriminação persistente) e propõe conexão com a ação do Estado.", correct: true },
            { letter: "c", text: "O dado é usado como argumento único, sem necessidade de causas ou consequências." },
            { letter: "d", text: "O trecho é inadequado porque dados salariais não são relevantes para temas de gênero no ENEM." },
          ]}
          resolution={
            <p>
              O trecho exemplifica uso científico produtivo: (1) contextualiza o problema
              ("décadas após a equiparação formal de direitos"), (2) apresenta o dado com
              fonte ("segundo o IBGE"), (3) extrai a consequência ("discriminação transcende
              a esfera legal"), (4) conecta à ação necessária ("Estado precisa combater
              ativamente"). Essa cadeia transforma o dado em argumento completo para a
              Competência 3.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Dado inventado vs. dado razoável"
          statement={
            <p>
              (Estilo ENEM) Em uma redação sobre trabalho infantil, um candidato escreveu:
              "Segundo a UNICEF, 98% das crianças brasileiras realizam trabalho infantil,
              configurando uma crise humanitária sem precedentes no país." O principal
              problema desse trecho é:
            </p>
          }
          options={[
            { letter: "a", text: "A UNICEF não é uma fonte válida para dados sobre trabalho infantil." },
            { letter: "b", text: "O percentual de 98% é inverossímil e destrói a credibilidade do argumento — um dado absurdo é pior que nenhum dado.", correct: true },
            { letter: "c", text: "O candidato não deveria usar dados internacionais em redações sobre o Brasil." },
            { letter: "d", text: "O trecho está correto e seria avaliado positivamente pela Competência 2." },
          ]}
          resolution={
            <p>
              O problema é o percentual inverossímil (98%). Se 98% das crianças brasileiras
              trabalhassem, o Brasil seria a pior crise humanitária do planeta — o que
              qualquer corretor reconhece como impossível. Percentuais absurdos destroem a
              credibilidade do texto inteiro. A formulação correta seria: "Segundo a UNICEF,
              mais de um milhão de crianças brasileiras realizam trabalho infantil" — um dado
              real e razoável que não arrisca o crédito do argumento.
            </p>
          }
        />
      </section>
    </article>
  );
}
