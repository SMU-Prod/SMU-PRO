"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 17</span>
          <h1>Fuga ao Tema</h1>
          <p>
            Compreenda o erro mais temido do ENEM — a fuga ao tema — com exemplos reais
            de como ela acontece, a diferença crucial entre fuga e tangenciamento, e
            estratégias concretas para manter seu texto no eixo central do que foi pedido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. O que é Fuga ao Tema</h2>
        <p>
          Fuga ao tema é escrever sobre um assunto diferente do proposto pela banca — seja
          por má interpretação do enunciado, por não compreender as palavras-chave do tema,
          ou por deixar o repertório escolhido "puxar" o texto para outro assunto. É o erro
          mais grave que não resulta em anulação total: <strong>zera a Competência 2</strong>
          e impede a nota de ultrapassar 400 pontos, mesmo que as demais competências sejam
          avaliadas normalmente.
        </p>
        <div className="lesson-highlight">
          <h3>Definição precisa do INEP</h3>
          <p>
            O Manual de Correção do ENEM define fuga ao tema como "a não abordagem do tema
            proposto, seja por tratar de assunto completamente diferente, seja por abordar
            apenas aspectos tangenciais sem desenvolver o núcleo temático central". A
            consequência é nota 0 (zero) na Competência 2, com as demais competências
            recebendo no máximo 40 pontos cada.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Diagrama de fuga ao tema — círculos concêntricos mostrando o que está dentro e fora do tema">
            <rect width="480" height="200" fill="#f8fafc" rx="10" />
            {/* Outer circle - off topic */}
            <circle cx="240" cy="100" r="90" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,3" />
            <text x="240" y="20" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">FORA DO TEMA</text>
            <text x="96" y="90" fill="#ef4444" fontSize="8">trabalho adulto</text>
            <text x="340" y="85" fill="#ef4444" fontSize="8">escola em geral</text>
            <text x="78" y="130" fill="#ef4444" fontSize="8">infância em geral</text>
            <text x="340" y="135" fill="#ef4444" fontSize="8">educação básica</text>
            <text x="165" y="185" fill="#ef4444" fontSize="8">direitos da criança (sem foco)</text>
            {/* Inner circle - on topic */}
            <circle cx="240" cy="100" r="50" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
            <text x="240" y="86" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">TEMA CENTRAL</text>
            <text x="240" y="100" textAnchor="middle" fill="#166534" fontSize="9">Trabalho infantil</text>
            <text x="240" y="114" textAnchor="middle" fill="#166534" fontSize="8">exploração + impacto</text>
            <text x="240" y="126" textAnchor="middle" fill="#166534" fontSize="8">+ solução</text>
            {/* Arrow pointing outside */}
            <line x1="290" y1="100" x2="340" y2="100" stroke="#ef4444" strokeWidth="2" />
            <polygon points="340,96 350,100 340,104" fill="#ef4444" />
            <text x="355" y="103" fill="#ef4444" fontSize="8">FUGA</text>
            {/* Arrow pointing inside */}
            <line x1="250" y1="75" x2="250" y2="50" stroke="#10b981" strokeWidth="2" />
            <polygon points="246,50 250,40 254,50" fill="#10b981" />
            <text x="255" y="43" fill="#10b981" fontSize="8">NO TEMA</text>
          </svg>
          <figcaption>O que está dentro e fora do tema — o exemplo usa "trabalho infantil". Tudo fora do círculo verde é fuga ou tangenciamento.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fuga vs. tangenciamento</span>
        <h2>2. A Diferença Crucial entre Fuga e Tangenciamento</h2>
        <p>
          Essa distinção é fundamental: o tangenciamento penaliza, mas não zera a C2. A
          fuga total zera. Entender a diferença salva sua nota:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Fuga total</th>
                <th>Tangenciamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definição</td>
                <td>O texto não aborda o tema proposto de nenhuma forma significativa</td>
                <td>O texto aborda aspecto relacionado ao tema, mas não o núcleo central</td>
              </tr>
              <tr>
                <td>Relação com o tema</td>
                <td>Nenhuma ou apenas periférica</td>
                <td>Parcial — o tema aparece, mas de forma superficial</td>
              </tr>
              <tr>
                <td>Impacto na C2</td>
                <td>Zero — nota 0 na competência</td>
                <td>Penalização — nota entre 40 e 80 em vez de 200</td>
              </tr>
              <tr>
                <td>Exemplo (tema: trabalho infantil)</td>
                <td>Escrever sobre "os benefícios do trabalho para jovens adultos"</td>
                <td>Escrever sobre "a educação como solução para a pobreza" sem mencionar diretamente o trabalho infantil</td>
              </tr>
              <tr>
                <td>Causa mais comum</td>
                <td>Má interpretação completa do enunciado</td>
                <td>Deixar o repertório ou o argumento se desviar do núcleo temático</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por que acontece</span>
        <h2>3. Por que a Fuga ao Tema Acontece</h2>
        <p>
          A fuga raramente é intencional — na maioria dos casos, é resultado de três
          situações específicas:
        </p>
        <div className="lesson-highlight">
          <h3>Causa 1: Má interpretação das palavras-chave</h3>
          <p>
            O candidato lê o tema com pressa e não identifica o recorte específico.
            Exemplo: tema "os impactos do racismo no acesso à saúde" — o candidato escreve
            sobre "desafios do sistema de saúde" sem mencionar o recorte racial. As
            palavras "racismo" e "acesso" eram as palavras-chave que definiam o núcleo.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Causa 2: O repertório "puxa" o texto para outro assunto</h3>
          <p>
            O candidato escolhe um filósofo ou evento histórico que sabe muito bem —
            e deixa esse repertório dominar o parágrafo, desviando do tema. Exemplo:
            quer usar Marx no tema "trabalho infantil" e acaba escrevendo três linhas
            sobre capitalismo e nenhuma sobre crianças. O repertório deve servir ao
            tema, não o contrário.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Causa 3: Confusão entre o tema e um tema "vizinho"</h3>
          <p>
            Alguns temas são parecidos mas têm núcleos diferentes. "Desigualdade social"
            e "pobreza" parecem sinônimos mas não são. "Violência contra a mulher" e
            "violência urbana" são temas distintos. Confundir os núcleos temáticos é
            uma das formas mais comuns de tangenciamento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplos reais</span>
        <h2>4. Exemplos de Fuga: Da Parcial à Total</h2>
        <p>
          Veja três situações com o mesmo tema para entender a gradação entre "dentro do
          tema", "tangenciamento" e "fuga total":
        </p>
        <div className="lesson-highlight">
          <h3>Tema: "Os desafios do trabalho infantil no Brasil"</h3>
          <p>
            <strong>Dentro do tema (correto):</strong> O texto discute como a pobreza
            familiar, a ausência de políticas públicas e a naturalização cultural do
            trabalho precoce perpetuam a exploração de crianças no Brasil, propondo como
            solução a ampliação do Bolsa Família e fiscalização do Ministério do Trabalho.
          </p>
          <p>
            <strong>Tangenciamento:</strong> O texto discute a importância da educação
            para o desenvolvimento infantil e menciona que crianças que trabalham não
            têm tempo para estudar — mas não desenvolve as causas ou consequências do
            trabalho infantil em si, nem o contexto econômico ou social específico.
          </p>
          <p>
            <strong>Fuga total:</strong> O texto discute os benefícios do trabalho para
            a formação do caráter dos jovens adultos e a importância do primeiro emprego
            para a vida profissional. O tema "trabalho infantil" (crianças em situação
            de exploração) foi completamente substituído por outro assunto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identificação</span>
        <h2>5. Como Identificar se Você Está Fugindo ao Tema</h2>
        <p>
          A técnica mais eficaz para detectar fuga em tempo real é a <strong>releitura
          do tema após cada parágrafo</strong>. Depois de escrever cada parágrafo, releia
          o enunciado do tema e pergunte:
        </p>
        <div className="lesson-highlight">
          <h3>As três perguntas de controle</h3>
          <p>
            1. "O parágrafo que escrevi fala especificamente sobre o que foi pedido?" |
            2. "As palavras-chave do tema (sublinhadas antes de começar) aparecem ou são
            implicitamente respondidas neste parágrafo?" |
            3. "Se alguém lesse apenas este parágrafo, saberia qual é o tema central da
            redação?"
          </p>
        </div>
        <p>
          Se a resposta for não a qualquer uma dessas perguntas, o parágrafo precisa ser
          reescrito. Identifique a frase que desviou o foco e corrija-a antes de continuar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>6. Estratégia Anti-Fuga: Repetir as Palavras-Chave</h2>
        <p>
          Uma das estratégias mais eficazes para manter o texto no tema é a
          <strong> repetição controlada das palavras-chave</strong>. Não se trata de
          repetição automática — mas de retomar os termos centrais do tema ao menos
          2–3 vezes ao longo do texto, especialmente no início de cada parágrafo.
        </p>
        <div className="lesson-highlight">
          <h3>Como aplicar</h3>
          <p>
            1. Antes de começar a escrever, <strong>sublinhe as palavras-chave do tema</strong>
            no enunciado (ex: "trabalho infantil", "Brasil", "desafios").<br />
            2. Ao iniciar cada parágrafo, retome pelo menos uma dessas palavras-chave ou
            um sinônimo próximo.<br />
            3. Na conclusão, retome o tema explicitamente: "Portanto, para superar os
            desafios do trabalho infantil no Brasil..."<br />
            4. Nunca permita que um parágrafo inteiro passe sem nenhuma referência ao
            núcleo temático.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temas com armadilha</span>
        <h2>7. Temas do ENEM com Armadilha de Fuga</h2>
        <p>
          Alguns temas têm formulações que confundem candidatos. Veja os casos mais
          comuns de temas com "armadilha" e o foco correto para cada um:
        </p>
        <div className="lesson-highlight">
          <h3>Armadilha 1: Tema com qualificador específico</h3>
          <p>
            "O estigma associado às doenças mentais na sociedade brasileira" — a armadilha
            é escrever sobre "doenças mentais" em geral (causas, tratamentos). O núcleo é
            o <em>estigma</em> — o preconceito social, não a doença em si. Quem escrever
            sobre depressão sem discutir o preconceito está tangenciando.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Armadilha 2: Tema com "no Brasil" ou "na sociedade brasileira"</h3>
          <p>
            "A violência contra a mulher no Brasil contemporâneo" — a armadilha é
            generalizar para a violência de gênero no mundo. O tema exige contextualização
            específica: dados brasileiros, legislação brasileira (Lei Maria da Penha),
            realidade brasileira.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Armadilha 3: Temas sobre grupos específicos</h3>
          <p>
            "Os desafios da inclusão da pessoa surda na educação" — a armadilha é escrever
            sobre inclusão de pessoas com deficiência em geral. O tema pede especificamente
            sobre surdez: comunicação em LIBRAS, intérpretes, barreiras específicas da
            surdez, não genericamente sobre deficiências.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tangenciamento em detalhe</span>
        <h2>8. Tangenciamento: Abordar a Periferia sem o Núcleo</h2>
        <p>
          O tangenciamento é quando o texto "roça" o tema sem entrar nele. O candidato
          escreve sobre aspectos relacionados mas não desenvolve o aspecto central. Isso
          é especialmente comum quando:
        </p>
        <ul>
          <li>O argumento escolhido é uma causa muito distante do problema central.</li>
          <li>O repertório filosófico ou histórico domina o parágrafo e o problema em si fica sem análise.</li>
          <li>A proposta de intervenção resolve um problema diferente do apresentado na tese.</li>
          <li>A introdução apresenta um problema mais amplo e o desenvolvimento não retorna ao recorte específico do tema.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Teste de tangenciamento</h3>
          <p>
            Após escrever cada parágrafo, pergunte: "Este parágrafo poderia estar em uma
            redação sobre um tema completamente diferente?" Se sim, você está tangenciando
            — o parágrafo falta especificidade ao tema proposto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercício de identificação</span>
        <h2>9. Como Distinguir: Dentro do Tema vs. Fuga</h2>
        <p>
          Uma forma prática de treinar a identificação de fuga é comparar dois textos
          sobre o mesmo tema e identificar qual está no tema e qual está fugindo. Essa
          é uma habilidade que se desenvolve com prática deliberada:
        </p>
        <div className="lesson-highlight">
          <h3>Tema: "O impacto das redes sociais na saúde mental dos jovens brasileiros"</h3>
          <p>
            <strong>Texto A (dentro do tema):</strong> "A exposição contínua às redes sociais
            alimenta nos jovens um ciclo de comparação social que a psicologia contemporânea
            associa ao aumento de quadros de ansiedade e depressão. Dados da OMS indicam que
            a prevalência de transtornos mentais em jovens cresceu significativamente na última
            década, período que coincide com a massificação do uso de smartphones no Brasil."
          </p>
          <p>
            <strong>Texto B (tangenciamento/fuga):</strong> "As redes sociais transformaram a
            comunicação humana no século XXI, permitindo que pessoas de diferentes países se
            conectem instantaneamente. Essa revolução tecnológica trouxe benefícios como o
            acesso à informação e a democratização do conhecimento, embora também apresente
            riscos que a sociedade precisa enfrentar."
          </p>
          <p>
            O Texto B não fala sobre saúde mental, não fala sobre jovens brasileiros
            especificamente, e não desenvolve os impactos negativos. É tangenciamento que
            beira a fuga.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela estratégica</span>
        <h2>10. Temas ENEM com Fuga Clássica e o Foco Correto</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ENEM</th>
                <th>Fuga clássica (erro comum)</th>
                <th>Foco correto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trabalho infantil no Brasil</td>
                <td>Escrever sobre "primeiro emprego" ou "importância do trabalho para a formação"</td>
                <td>Exploração, causas econômicas, violação de direitos, soluções de proteção à criança</td>
              </tr>
              <tr>
                <td>Violência contra a mulher</td>
                <td>Escrever sobre "violência urbana em geral" ou "segurança pública"</td>
                <td>Especificidade da violência de gênero, feminicídio, machismo estrutural, Lei Maria da Penha</td>
              </tr>
              <tr>
                <td>Saúde mental na pandemia</td>
                <td>Escrever sobre "os impactos da pandemia na economia"</td>
                <td>Depressão, ansiedade, isolamento social, acesso a tratamento psicológico</td>
              </tr>
              <tr>
                <td>Desigualdade racial no Brasil</td>
                <td>Escrever sobre "desigualdade social" sem recorte racial</td>
                <td>Racismo estrutural, herança da escravidão, dados sobre a população negra especificamente</td>
              </tr>
              <tr>
                <td>Inclusão do surdo na educação</td>
                <td>Escrever sobre "inclusão de pessoas com deficiência" em geral</td>
                <td>LIBRAS, intérpretes, barreiras específicas da surdez, comunicação visual</td>
              </tr>
              <tr>
                <td>Fake news e democracia</td>
                <td>Escrever sobre "liberdade de expressão na internet"</td>
                <td>Desinformação eleitoral, enfraquecimento de instituições, letramento midiático</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Fuga ao Tema</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎯</span>
            <h3>Fuga zera C2</h3>
            <p>Escrever sobre outro assunto = zero na Competência 2. As demais Cx recebem no máximo 40 pts cada.</p>
          </div>
          <div className="math-card">
            <span>📝</span>
            <h3>Tangenciamento penaliza, não zera</h3>
            <p>Abordar aspecto periférico do tema reduz C2, mas não a zera. Sempre desenvolva o núcleo central.</p>
          </div>
          <div className="math-card">
            <span>🔑</span>
            <h3>Sublinhe as palavras-chave</h3>
            <p>Antes de escrever, identifique os 2-3 termos centrais do tema e retome-os em cada parágrafo.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Releia o tema após cada parágrafo</h3>
            <p>A técnica mais simples e eficaz para detectar desvio em tempo real — antes que vire fuga.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>O repertório não deve puxar o texto</h3>
            <p>O filósofo ou evento histórico serve ao tema — nunca deixe o repertório dominar e desviar o foco.</p>
          </div>
          <div className="math-card">
            <span>🏷️</span>
            <h3>Atenção ao qualificador</h3>
            <p>"No Brasil", "entre jovens", "na escola pública" — esses recortes são obrigatórios, não opcionais.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Definição de fuga ao tema"
          statement={
            <p>
              O que é, precisamente, a "fuga ao tema" na redação ENEM?
            </p>
          }
          options={[
            { letter: "a", text: "Escrever um texto muito curto, com menos de 15 linhas." },
            { letter: "b", text: "Abordar o tema proposto de forma superficial, sem aprofundamento argumentativo." },
            { letter: "c", text: "Escrever sobre um assunto diferente do proposto, sem desenvolver o núcleo temático central.", correct: true },
            { letter: "d", text: "Usar repertório filosófico que não tem relação direta com o tema." },
          ]}
          resolution={
            <p>
              Fuga ao tema é escrever sobre outro assunto — seja por má interpretação
              do enunciado, por deixar o repertório dominar ou por confundir o tema com
              um assunto relacionado. Resulta em nota zero na Competência 2, com as demais
              competências podendo receber no máximo 40 pontos. Texto curto e uso inadequado
              de repertório penalizam, mas não configuram fuga.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Fuga ou tangenciamento?"
          statement={
            <p>
              O tema é <strong>"O estigma social das doenças mentais no Brasil"</strong>.
              Um candidato escreveu dois parágrafos inteiros sobre as causas biológicas
              da depressão (genética, neuroquímica, fatores hormonais) e apenas uma frase
              mencionando que "a sociedade muitas vezes não compreende quem sofre". Esse
              texto está:
            </p>
          }
          options={[
            { letter: "a", text: "Dentro do tema, pois aborda doenças mentais — exatamente o que foi pedido." },
            { letter: "b", text: "Em fuga total ao tema, pois escreve sobre biologia quando deveria escrever sobre o estigma social.", correct: true },
            { letter: "c", text: "Em tangenciamento, pois menciona o estigma brevemente, mesmo que não o desenvolva." },
            { letter: "d", text: "Com erro de coesão, não de fuga ao tema." },
          ]}
          resolution={
            <p>
              O núcleo do tema é o <em>estigma social</em> — o preconceito e a
              discriminação que pessoas com doenças mentais enfrentam na sociedade.
              Escrever sobre causas biológicas (genética, neuroquímica) é um assunto
              diferente — beira a fuga total. Uma única frase sobre estigma não salva
              o texto. Se o desenvolvimento inteiro é sobre outro assunto, configura
              fuga à C2, não tangenciamento.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O repertório puxando para a fuga"
          statement={
            <p>
              Um candidato escolheu usar Marx como repertório para o tema
              <strong> "trabalho infantil no Brasil"</strong>. Ao escrever, acabou
              dedicando dois parágrafos ao conceito de mais-valia e à exploração do
              trabalhador adulto no capitalismo, mencionando trabalho infantil apenas
              no último período do segundo parágrafo. Esse texto está:
            </p>
          }
          options={[
            { letter: "a", text: "Dentro do tema, pois trabalho infantil é uma forma de exploração do trabalho." },
            { letter: "b", text: "Em tangenciamento: o repertório marxista é relevante, mas o tema central (trabalho infantil) está sendo eclipsado pelo repertório escolhido.", correct: true },
            { letter: "c", text: "Em fuga total, pois Marx não tem relação com trabalho infantil." },
            { letter: "d", text: "Adequado: repertório aprofundado é sempre valorizado pela C2." },
          ]}
          resolution={
            <p>
              O caso descreve tangenciamento — o repertório marxista é pertinente ao tema
              (exploração do trabalho infantil tem raízes no capitalismo), mas o candidato
              deixou o repertório "engolir" o tema central. Dois parágrafos sobre
              exploração do trabalhador adulto sem aplicar diretamente ao trabalho infantil
              é tangenciamento. A correção é simples: a cada menção a Marx, conectar
              explicitamente ao caso específico das crianças.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Identificando o foco correto"
          statement={
            <p>
              (Estilo ENEM) O tema é <strong>"Desafios para a inclusão digital de populações
              vulneráveis no Brasil"</strong>. Qual das teses abaixo está dentro do tema
              proposto?
            </p>
          }
          options={[
            { letter: "a", text: "'A internet é uma tecnologia que transformou a comunicação e o entretenimento na sociedade contemporânea.'" },
            { letter: "b", text: "'A falta de infraestrutura tecnológica e o alto custo de conexão excluem milhões de brasileiros pobres, indígenas e moradores de zonas rurais do acesso à internet, aprofundando desigualdades socioeconômicas já existentes.'", correct: true },
            { letter: "c", text: "'O ensino de programação nas escolas é fundamental para preparar os jovens para o mercado de trabalho digital.'" },
            { letter: "d", text: "'As redes sociais causam dependência tecnológica e prejudicam a saúde mental de crianças e adolescentes.'" },
          ]}
          resolution={
            <p>
              A alternativa B está no tema: aborda o problema da exclusão digital, identifica
              os grupos vulneráveis (pobres, indígenas, moradores rurais) e o mecanismo
              (infraestrutura e custo). As demais fogem ou tangenciam: A fala de internet
              em geral; C fala de educação tecnológica (outro recorte); D fala de saúde
              mental (tema diferente).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Estratégia anti-fuga na prática"
          statement={
            <p>
              (Estilo ENEM) Antes de escrever sua redação sobre
              <strong> "O papel do Estado no combate à desinformação nas eleições"</strong>,
              um candidato sublinhou as palavras-chave: "Estado", "desinformação" e
              "eleições". Durante a escrita, percebe que o segundo parágrafo de
              desenvolvimento fala sobre liberdade de expressão e regulação da internet
              em geral, sem mencionar eleições ou a desinformação eleitoral
              especificamente. O que ele deve fazer?
            </p>
          }
          options={[
            { letter: "a", text: "Manter o parágrafo, pois liberdade de expressão é relacionada ao tema." },
            { letter: "b", text: "Adicionar uma frase final ao parágrafo conectando o argumento sobre regulação da internet especificamente ao problema da desinformação eleitoral e ao papel do Estado nesse contexto.", correct: true },
            { letter: "c", text: "Apagar o parágrafo inteiro e escrever outro, pois está em fuga total." },
            { letter: "d", text: "Mudar o tema da redação para algo relacionado à liberdade de expressão." },
          ]}
          resolution={
            <p>
              A estratégia correta é a mais eficiente: o candidato não precisa apagar o
              parágrafo — apenas precisa adicionar a frase de conexão ao núcleo temático.
              Uma frase como "Essa falta de regulação específica torna o ambiente digital
              um terreno fértil para a desinformação que distorce o processo eleitoral —
              exatamente o que o Estado tem o dever de coibir" recupera o parágrafo
              e elimina o risco de tangenciamento.
            </p>
          }
        />
      </section>
    </article>
  );
}
