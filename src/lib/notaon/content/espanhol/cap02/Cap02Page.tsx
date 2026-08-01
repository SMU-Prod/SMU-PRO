"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 02</span>
          <h1>Como compreender textos em espanhol mesmo sem dominar o idioma</h1>
          <p>
            A grande vantagem de escolher Espanhol no ENEM é que você não precisa ser fluente para obter boas notas. Português e Espanhol são tão próximos que um falante nativo de Português já compreende intuitivamente entre 60% e 80% de um texto escrito em Espanhol — mesmo sem nunca ter estudado o idioma. O que esse capítulo ensina é como elevar esse percentual de compreensão para 90% ou mais, usando técnicas sistemáticas de leitura contextual, reconhecimento de pistas textuais e estratégias de inferência. Essas habilidades são exatamente o que o ENEM avalia, e podem ser aprendidas em poucas semanas de prática dirigida.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Línguas Românicas</span>
        <h2>1. A proximidade entre Português e Espanhol</h2>
        <p>
          Português e Espanhol descendem do mesmo ancestral: o Latim vulgar falado no Império Romano Ocidental. Ambas as línguas evoluíram na Península Ibérica durante a Idade Média e compartilham não apenas vocabulário, mas também estruturas gramaticais muito similares — como o uso do subjuntivo, os tempos verbais compostos, a concordância nominal e verbal, e a ordem básica das frases (Sujeito–Verbo–Objeto). Essa proximidade significa que, diferentemente do que ocorre com o Inglês ou o Alemão, o falante de Português já possui um "capital linguístico" enorme antes mesmo de começar a estudar Espanhol.
        </p>
        <div className="lesson-highlight">
          <strong>Dato curioso (fato curioso):</strong> O Espanhol e o Português têm uma distância linguística tão pequena que os linguistas chamam o continuum de comunicação entre falantes das duas línguas de <em>portuñol</em> ou <em>portunhol</em> — uma mistura espontânea que emerge naturalmente nas regiões de fronteira entre Brasil e países hispânicos.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Português</th>
                <th>Espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Família</td>
                <td>Ibero-romance</td>
                <td>Ibero-romance</td>
              </tr>
              <tr>
                <td>Ancestral comum</td>
                <td>Latim vulgar</td>
                <td>Latim vulgar</td>
              </tr>
              <tr>
                <td>Vocabulário cognato</td>
                <td colSpan={2}>~89–93% de sobreposição no vocabulário básico</td>
              </tr>
              <tr>
                <td>Artigos</td>
                <td>o/a/os/as, um/uma</td>
                <td>el/la/los/las, un/una</td>
              </tr>
              <tr>
                <td>Ordem da frase</td>
                <td>SVO (flexível)</td>
                <td>SVO (flexível)</td>
              </tr>
              <tr>
                <td>Gênero gramatical</td>
                <td>Masculino/Feminino</td>
                <td>Masculino/Feminino</td>
              </tr>
              <tr>
                <td>Modo Subjuntivo</td>
                <td>Sim (muito usado)</td>
                <td>Sim (muito usado)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura Contextual</span>
        <h2>2. A técnica da leitura por contexto</h2>
        <p>
          A leitura por contexto é a capacidade de compreender o significado de uma palavra desconhecida a partir de seu entorno linguístico — as palavras antes e depois, a estrutura da frase, o tema do parágrafo e o gênero do texto. Esta é a técnica mais poderosa para falantes de Português que leem textos em Espanhol, pois o contexto em Espanhol é frequentemente suficiente para deduzir o significado de uma palavra mesmo sem jamais tê-la visto antes. A habilidade de leitura contextual não é inata — ela é treinável e melhora com a prática regular de leitura em espanhol.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Diagrama mostrando como o contexto ajuda a inferir o significado de palavras desconhecidas">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Leitura por Contexto — Como Inferir Significado</text>
            <rect x="20" y="55" width="180" height="80" rx="8" fill="#dbeafe" />
            <text x="110" y="85" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Contexto Anterior</text>
            <text x="110" y="103" textAnchor="middle" fill="#1e40af" fontSize="11">"El paciente llegó</text>
            <text x="110" y="119" textAnchor="middle" fill="#1e40af" fontSize="11">al hospital muy..."</text>
            <defs>
              <marker id="cap02arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
              <marker id="cap02arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#065f46" />
              </marker>
            </defs>
            <line x1="202" y1="95" x2="240" y2="95" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap02arr1)" />
            <rect x="242" y="55" width="160" height="80" rx="8" fill="#fef3c7" />
            <text x="322" y="82" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold">Palavra</text>
            <text x="322" y="100" textAnchor="middle" fill="#92400e" fontSize="15" fontWeight="bold">"agotado"</text>
            <text x="322" y="120" textAnchor="middle" fill="#92400e" fontSize="11">(desconhecida)</text>
            <line x1="404" y1="95" x2="442" y2="95" stroke="#065f46" strokeWidth="2" markerEnd="url(#cap02arr2)" />
            <rect x="444" y="55" width="210" height="80" rx="8" fill="#d1fae5" />
            <text x="549" y="85" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Contexto Posterior</text>
            <text x="549" y="103" textAnchor="middle" fill="#065f46" fontSize="11">"...y necesitaba</text>
            <text x="549" y="119" textAnchor="middle" fill="#065f46" fontSize="11">descansar urgente"</text>
            <rect x="242" y="155" width="160" height="50" rx="8" fill="#e0e7ff" />
            <text x="322" y="176" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Inferência:</text>
            <text x="322" y="194" textAnchor="middle" fill="#3730a3" fontSize="11">"agotado" = esgotado/cansado</text>
          </svg>
          <figcaption>O contexto antes e depois de uma palavra desconhecida permite inferir seu significado com alta precisão.</figcaption>
        </figure>

        <p>
          No exemplo acima, mesmo sem conhecer a palavra <em>agotado</em>, o contexto revela tudo: o paciente chegou ao hospital e precisava descansar urgentemente. Logo, <em>agotado</em> deve significar algo como "cansado" ou "esgotado" — o que é exatamente o significado correto (do latim <em>exhaurire</em>, o mesmo ancestral do português "exausto").
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pistas Textuais</span>
        <h2>3. Pistas textuais: título, imagens, subtítulos e fonte</h2>
        <p>
          Antes de ler o corpo de um texto, os elementos paratextuais — título, subtítulo, imagens, legendas, fonte, data, autor — já fornecem uma quantidade enorme de informações. Esses elementos funcionam como "janelas de acesso" ao texto: revelam o gênero, o tema, o público-alvo, a posição do autor e até o contexto histórico ou geográfico. No ENEM, muitos candidatos ignoram esses elementos e começam a ler o corpo do texto imediatamente, perdendo um tempo precioso e comprometendo sua compreensão global.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Título</h3>
            <p>Revela o tema central e muitas vezes a tese. Títulos em forma de pergunta indicam texto argumentativo. Títulos imperativos sugerem textos prescritivos ou publicitários.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Imagens e legendas</h3>
            <p>Contextualizam o texto visualmente. A legenda de uma foto já pode dar a resposta de questões sobre o tema do texto ou o contexto histórico.</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Subtítulos</h3>
            <p>Organizam o texto em seções temáticas. Em textos jornalísticos, o subtítulo (chapeau) frequentemente resume o texto inteiro em 1-2 frases.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Fonte e data</h3>
            <p>Indicam o gênero (jornal, revista, blog, livro), o país de origem, e o contexto histórico. Um texto de 1980 tem contexto político diferente de um de 2023.</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento paratextual</th>
                <th>O que revela</th>
                <th>Exemplo em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título com ¿?</td>
                <td>Texto argumentativo ou interrogativo</td>
                <td><em>¿Es posible vivir sin plástico?</em></td>
              </tr>
              <tr>
                <td>Título com !</td>
                <td>Texto emotivo, imperativo ou publicitário</td>
                <td><em>¡Cuida el planeta, actúa hoy!</em></td>
              </tr>
              <tr>
                <td>Fonte = jornal conhecido</td>
                <td>Texto jornalístico, linguagem formal</td>
                <td><em>El País, La Nación, El Universal</em></td>
              </tr>
              <tr>
                <td>Autor com nome literário</td>
                <td>Provável texto literário (conto, poema)</td>
                <td><em>Julio Cortázar, Pablo Neruda</em></td>
              </tr>
              <tr>
                <td>Legenda com dados estatísticos</td>
                <td>Texto de divulgação científica ou infográfico</td>
                <td><em>Según el INE, el 40% de los hogares...</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Identificação de Palavras-chave</span>
        <h2>4. Identificando palavras-chave para compreensão global</h2>
        <p>
          Em qualquer texto, apenas uma fração das palavras carrega o conteúdo semântico principal — essas são as palavras-chave. Em textos escritos, as palavras-chave são geralmente substantivos (nomes de pessoas, lugares, conceitos), verbos no sentido denotativo (não auxiliares como "ser", "estar", "tener") e adjetivos avaliativos. A estratégia de sublinhar mentalmente (ou literalmente, no rascunho) as palavras-chave enquanto você lê permite construir um "mapa semântico" do texto que torna a compreensão global muito mais eficiente.
        </p>

        <div className="lesson-highlight">
          <strong>Exercício prático:</strong> Ao ler um texto em espanhol, tente identificar: (1) Quem é o sujeito principal? (2) O que acontece com ele? (3) Onde e quando? (4) Por quê? Responder essas quatro perguntas já garante a compreensão essencial de qualquer texto narrativo ou jornalístico.
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Mapa de palavras-chave em um texto em espanhol">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#fef3c7" />
            <text x="350" y="28" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">Identificando Palavras-Chave em Espanhol</text>
            <ellipse cx="350" cy="115" rx="70" ry="35" fill="#f59e0b" />
            <text x="350" y="111" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Tema Central</text>
            <text x="350" y="129" textAnchor="middle" fill="white" fontSize="10">(substantivo-chave)</text>
            <defs>
              <marker id="cap02arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#92400e" />
              </marker>
            </defs>
            <line x1="280" y1="104" x2="215" y2="80" stroke="#92400e" strokeWidth="1.5" markerEnd="url(#cap02arr3)" />
            <rect x="60" y="58" width="148" height="42" rx="6" fill="#fde68a" />
            <text x="134" y="76" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Quem? (Sujeto)</text>
            <text x="134" y="92" textAnchor="middle" fill="#92400e" fontSize="10">personas, organizaciones</text>
            <line x1="350" y1="80" x2="350" y2="54" stroke="#92400e" strokeWidth="1.5" markerEnd="url(#cap02arr3)" />
            <rect x="260" y="33" width="180" height="36" rx="6" fill="#fde68a" />
            <text x="350" y="49" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">O quê? (Acción/Verbo)</text>
            <text x="350" y="62" textAnchor="middle" fill="#92400e" fontSize="10">verbos principais de ação</text>
            <line x1="420" y1="100" x2="485" y2="75" stroke="#92400e" strokeWidth="1.5" markerEnd="url(#cap02arr3)" />
            <rect x="484" y="50" width="170" height="42" rx="6" fill="#fde68a" />
            <text x="569" y="68" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Onde/Quando?</text>
            <text x="569" y="84" textAnchor="middle" fill="#92400e" fontSize="10">lugar, tiempo, circunstancias</text>
            <line x1="350" y1="150" x2="350" y2="176" stroke="#92400e" strokeWidth="1.5" markerEnd="url(#cap02arr3)" />
            <rect x="240" y="176" width="220" height="25" rx="6" fill="#fde68a" />
            <text x="350" y="193" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">Por quê? (Causa/Consecuencia)</text>
          </svg>
          <figcaption>Mapa semântico das quatro perguntas fundamentais para compreensão de qualquer texto em espanhol.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Entendimento Global</span>
        <h2>5. A estratégia do "entendimento global" — sem traduzir palavra por palavra</h2>
        <p>
          O maior erro de candidatos que tentam ler em Espanhol é tentar traduzir cada palavra individualmente para o Português. Essa abordagem é lenta, consome energia desnecessária e frequentemente gera confusão quando uma palavra não tem equivalente direto. A estratégia correta é buscar o <strong>entendimento global</strong>: compreender o que o texto diz como um todo, identificando o argumento principal, as informações de suporte e a conclusão, sem se fixar em cada vocábulo desconhecido. Você pode não entender "menoscabar" mas entende que o texto fala sobre algo ruim para o meio ambiente — e isso muitas vezes é suficiente para responder a questão.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Abordagem errada</th>
                <th>Abordagem correta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Traduzir cada palavra antes de continuar</td>
                <td>Ler o parágrafo inteiro antes de tentar entender cada parte</td>
              </tr>
              <tr>
                <td>Parar na primeira palavra desconhecida</td>
                <td>Marcar a palavra e continuar; o contexto posterior pode esclarecer</td>
              </tr>
              <tr>
                <td>Buscar equivalência perfeita em Português</td>
                <td>Aceitar um entendimento aproximado que seja suficiente para responder</td>
              </tr>
              <tr>
                <td>Ignorar estrutura do texto (início, meio, fim)</td>
                <td>Identificar a estrutura para localizar a informação pedida rapidamente</td>
              </tr>
              <tr>
                <td>Ler de forma linear sempre</td>
                <td>Ler a questão primeiro, depois varrer o texto pela informação específica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Palavras Desconhecidas</span>
        <h2>6. O que fazer quando não entendo uma palavra</h2>
        <p>
          Mesmo com toda a proximidade entre Português e Espanhol, você inevitavelmente encontrará palavras que não reconhece. Para essas situações, existe um protocolo eficiente de quatro passos que permite inferir o significado com alta precisão na maioria dos casos. O primeiro passo é analisar a <strong>morfologia</strong> da palavra (prefixos, sufixos, raiz reconhecível). O segundo é usar o <strong>contexto imediato</strong> (a frase em que a palavra aparece). O terceiro é usar o <strong>contexto ampliado</strong> (o parágrafo ou seção). O quarto é <strong>aceitar a ambiguidade</strong> e responder com base no que você entendeu do restante do texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Passo 1: Morfologia</h3>
            <p>Analise prefixos (des-, in-, re-, sub-) e sufixos (-ción/-ação, -idad/-idade, -mente/-mente). Ex: "inestabilidad" → in+estabilidad = instabilidade.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Passo 2: Contexto imediato</h3>
            <p>Use as palavras da mesma frase. "El niño estaba acongojado tras la noticia" → acongojado deve ser um estado emocional negativo (angustiado/aflito).</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Passo 3: Contexto ampliado</h3>
            <p>Se a frase não resolve, leia o parágrafo inteiro. O argumento geral do parágrafo frequentemente esclarece o significado da palavra problemática.</p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Passo 4: Aceitar e avançar</h3>
            <p>Se mesmo assim não entende, aceite a ambiguidade e responda com base no que compreendeu. Muitas questões podem ser respondidas sem entender 100% do texto.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Prefixos e sufixos compartilhados entre Português e Espanhol:</strong><br />
          • <em>des-</em> em espanhol = des- em português: <em>desconfianza</em> = desconfiança; <em>desequilibrio</em> = desequilíbrio<br />
          • <em>-ción</em> em espanhol = -ção em português: <em>comunicación</em> = comunicação; <em>educación</em> = educação<br />
          • <em>-mente</em> = advérbio: <em>frecuentemente</em> = frequentemente; <em>claramente</em> = claramente<br />
          • <em>in-/im-</em> = negação: <em>imposible</em> = impossível; <em>incapaz</em> = incapaz
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Paráfrases e Reformulações</span>
        <h2>7. Reconhecendo paráfrases e reformulações nas alternativas do ENEM</h2>
        <p>
          No ENEM, a alternativa correta raramente usa as mesmas palavras do texto. Em vez disso, ela <strong>parafraseia</strong> a ideia usando vocabulário diferente mas com o mesmo significado. Isso é proposital — a banca quer testar se você compreendeu o sentido, não se você apenas localizou uma frase. A habilidade de reconhecer paráfrases em Espanhol é, portanto, fundamental. As reformulações mais comuns envolvem: substituição de verbos por sinônimos, troca de substantivos por pronomes ou hiperônimos, mudança de voz (ativa→passiva) e mudança de perspectiva (do particular para o geral).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Texto original (Espanhol)</th>
                <th>Paráfrase na alternativa (Português)</th>
                <th>Tipo de reformulação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Los jóvenes abandonaron sus pueblos</em></td>
                <td>"A juventude deixou as cidades de origem"</td>
                <td>Sinônimo + tradução</td>
              </tr>
              <tr>
                <td><em>El gobierno implementó nuevas leyes</em></td>
                <td>"Foram criadas novas normas pelo poder público"</td>
                <td>Voz ativa → passiva + sinônimos</td>
              </tr>
              <tr>
                <td><em>La mayoría de los encuestados afirmó que...</em></td>
                <td>"Segundo pesquisa, mais da metade dos entrevistados disse que..."</td>
                <td>Substituição de quantificador + sinônimo</td>
              </tr>
              <tr>
                <td><em>Esta situación genera conflictos</em></td>
                <td>"O cenário descrito provoca tensões sociais"</td>
                <td>Pronome demonstrativo + generalização</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          🎯 ALERTA ENEM: Quando você encontrar duas alternativas muito parecidas, a correta geralmente é a que parafraseia o texto sem adicionar informação externa. A incorreta geralmente adiciona um julgamento de valor, uma generalização excessiva ou uma informação que não está no texto.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise de Texto Real</span>
        <h2>8. Exemplo completo: analisando um texto em espanhol passo a passo</h2>
        <p>
          Vamos aplicar todas as estratégias aprendidas a um texto real no estilo ENEM. O texto abaixo é típico do gênero jornalístico hispânico — o tipo mais frequente nas provas de Espanhol. Siga o processo: pré-leitura dos elementos externos → leitura global → identificação das palavras-chave → resposta às quatro perguntas fundamentais.
        </p>

        <div className="lesson-highlight">
          <strong>Texto-exemplo para análise:</strong><br /><br />
          <em>Fuente: El Clarín, Buenos Aires, 15 de marzo de 2022</em><br /><br />
          <em><strong>La deforestación en América del Sur alcanza cifras alarmantes</strong></em><br /><br />
          <em>Según un informe de la ONU publicado esta semana, la pérdida de bosques tropicales en América del Sur aumentó un 12% en el último año. Los expertos advierten que, si la tendencia continúa, varios ecosistemas clave podrían desaparecer antes de 2050. "Es una emergencia ambiental que requiere acción inmediata de todos los gobiernos de la región", declaró la directora del programa medioambiental.</em><br /><br />
          <strong>Análise passo a passo:</strong><br />
          • Fonte: El Clarín (Argentina) → jornalístico, formal<br />
          • Título: tema = desflorestamento na América do Sul; tom = alarmante (<em>alarmantes</em>)<br />
          • Quem? <em>Expertos, ONU, directora</em> (especialistas e organização internacional)<br />
          • O quê? Desflorestamento aumentou 12%; ecosistemas em risco de desaparecimento<br />
          • Quando/Onde? <em>Último año, América del Sur</em> (ano passado, América do Sul)<br />
          • Por quê implícito: ação humana e falta de políticas públicas (inferência)
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores Coesivos</span>
        <h2>9. Marcadores coesivos em espanhol que guiam a leitura</h2>
        <p>
          Os marcadores coesivos são palavras e expressões que conectam as ideias dentro de um texto e sinalizam as relações lógicas entre elas (causa, consequência, oposição, adição, exemplificação etc.). Em espanhol, esses marcadores são muito similares aos do português, o que facilita enormemente a compreensão. Conhecer esses marcadores permite ao leitor antecipar o que virá após cada conector e compreender a lógica argumentativa do texto sem precisar entender cada palavra individualmente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Em Espanhol</th>
                <th>Equivalente em Português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adição</td>
                <td><em>además, también, asimismo, igualmente</em></td>
                <td>além disso, também, igualmente</td>
              </tr>
              <tr>
                <td>Oposição/Contraste</td>
                <td><em>sin embargo, pero, aunque, no obstante, a pesar de</em></td>
                <td>no entanto, mas, embora, apesar de</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td><em>porque, ya que, puesto que, debido a</em></td>
                <td>porque, já que, visto que, devido a</td>
              </tr>
              <tr>
                <td>Consequência</td>
                <td><em>por lo tanto, así que, en consecuencia, por eso</em></td>
                <td>portanto, assim, consequentemente, por isso</td>
              </tr>
              <tr>
                <td>Exemplificação</td>
                <td><em>por ejemplo, como, tal como, entre ellos</em></td>
                <td>por exemplo, como, tal como, entre eles</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td><em>en conclusión, en resumen, finalmente, en definitiva</em></td>
                <td>em conclusão, em resumo, finalmente, em definitivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Proximidade linguística Português-Espanhol"
          statement={
            <p>
              Leia a frase em espanhol: <em>"La educación es fundamental para el desarrollo de una sociedad justa e igualitaria."</em> Sem ter estudado Espanhol formalmente, um falante de Português consegue compreender essa frase principalmente porque:
            </p>
          }
          options={[
            { letter: "a", text: "O Espanhol e o Português pertencem à mesma família germânica de línguas." },
            { letter: "b", text: "Ambas as línguas compartilham aproximadamente 89-93% do vocabulário básico por serem línguas ibero-românicas com ancestral comum no Latim.", correct: true },
            { letter: "c", text: "O ENEM fornece um dicionário Espanhol-Português durante a prova para auxiliar os candidatos." },
            { letter: "d", text: "O Espanhol é um dialeto do Português e portanto tem gramática idêntica." },
            { letter: "e", text: "A compreensão de frases simples é possível apenas para candidatos com nível intermediário de Espanhol." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. Português e Espanhol são línguas ibero-românicas que descendem do Latim vulgar e compartilham entre 89% e 93% do vocabulário básico. Na frase dada, praticamente todas as palavras têm cognatos óbvios: <em>educación</em>=educação, <em>fundamental</em>=fundamental, <em>desarrollo</em>=desenvolvimento, <em>sociedad</em>=sociedade, <em>justa</em>=justa, <em>igualitaria</em>=igualitária. A alternativa a) está errada — ambas são de família ibero-românica, não germânica. As alternativas c) e d) são falsas factualmente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Leitura por contexto — inferindo significado"
          statement={
            <div>
              <p>Leia o trecho: <em>"Después de años de sequía, las reservas hídricas de la región se encontraban al borde del agotamiento. Los habitantes, desesperados, buscaban cualquier manera de paliar la situación."</em></p>
              <p>Qual é o significado mais provável da palavra <em>paliar</em> nesse contexto?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Piorar, agudizar a situação de seca na região." },
            { letter: "b", text: "Aliviar ou amenizar uma situação difícil.", correct: true },
            { letter: "c", text: "Celebrar a chegada das chuvas após o período de seca." },
            { letter: "d", text: "Documentar e registrar os impactos da seca para a ciência." },
            { letter: "e", text: "Ignorar o problema e aguardar uma solução governamental." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> é correta. O contexto é essencial: há uma situação de crise (seca + reservas ao limite), os habitantes estão "desesperados" e buscam "qualquer manera de paliar la situación". A palavra <em>paliar</em> vem do latim <em>palliare</em> (cobrir, encobrir) e significa aliviar, amenizar um problema sem resolvê-lo definitivamente. O contexto já indica que é algo positivo que os habitantes tentam fazer para melhorar a situação — descartando a) por contradição com o tom positivo da busca; c), d) e e) por não fazerem sentido no contexto de desespero.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Marcadores coesivos e estrutura argumentativa"
          statement={
            <div>
              <p>Leia o parágrafo: <em>"Las energías renovables han avanzado significativamente en los últimos años. Sin embargo, su implementación masiva enfrenta obstáculos económicos considerables. Por lo tanto, los gobiernos deben establecer incentivos fiscales que faciliten la transición energética."</em></p>
              <p>Qual é a estrutura argumentativa correta desse parágrafo, identificada pelos marcadores coesivos?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Tese → exemplificação → conclusão." },
            { letter: "b", text: "Afirmação positiva → contraste/limitação → proposta como solução.", correct: true },
            { letter: "c", text: "Causa → efeito → nova causa." },
            { letter: "d", text: "Introdução → desenvolvimento → negação da tese inicial." },
            { letter: "e", text: "Pergunta → resposta → nova pergunta." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> é correta. Os marcadores coesivos revelam a estrutura: (1) <em>"han avanzado significativamente"</em> = afirmação positiva sobre avanço; (2) <em>"Sin embargo"</em> (= no entanto) introduz contraste — os obstáculos econômicos; (3) <em>"Por lo tanto"</em> (= portanto) introduz a proposta como solução decorrente do problema. Esta estrutura Afirmação–Contraste–Proposta é clássica em textos argumentativos jornalísticos e o ENEM frequentemente pede que o candidato a identifique.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Paráfrase e reformulação nas alternativas"
          statement={
            <div>
              <p>Leia o trecho: <em>"Las redes sociales han transformado radicalmente la manera en que los seres humanos se comunican, consumen información y construyen sus identidades. Este fenómeno, que comenzó como una herramienta de entretenimiento, se ha convertido en un elemento indispensable de la vida moderna."</em></p>
              <p>Qual alternativa melhor parafraseia a ideia central do texto?</p>
            </div>
          }
          options={[
            { letter: "a", text: "As redes sociais foram criadas como ferramentas de entretenimento e ainda são usadas principalmente para esse fim." },
            { letter: "b", text: "As redes sociais transformaram profundamente a comunicação, o consumo de informação e a identidade humana, tornando-se parte essencial da vida contemporânea.", correct: true },
            { letter: "c", text: "Os seres humanos estão se tornando dependentes das redes sociais, o que representa um sério problema para a saúde mental." },
            { letter: "d", text: "As redes sociais surgiram recentemente e ainda estão em fase de consolidação como instrumentos de comunicação." },
            { letter: "e", text: "A comunicação humana melhorou significativamente desde a criação das redes sociais, tornando as pessoas mais próximas umas das outras." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> é a paráfrase correta. Ela reformula as três ideias centrais do texto: transformação radical das formas de comunicação, consumo de informação e construção de identidade, além de explicitar que se tornou parte essencial da vida moderna (<em>elemento indispensable</em>). A alternativa a) inverte o argumento (o texto diz que as redes deixaram de ser apenas entretenimento). A alternativa c) adiciona informação sobre saúde mental que não consta no texto. A alternativa e) adiciona julgamento de valor positivo não presente no texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Compreensão global de texto literário hispânico"
          statement={
            <div>
              <p>Leia o fragmento do escritor argentino Jorge Luis Borges:</p>
              <p><em>"El tiempo se bifurca perpetuamente hacia innumerables futuros. En uno de ellos soy su enemigo."</em></p>
              <p>Qual conceito literário e filosófico está sendo explorado nesse fragmento?</p>
            </div>
          }
          options={[
            { letter: "a", text: "O determinismo — a ideia de que o futuro é único e inevitável." },
            { letter: "b", text: "O realismo fantástico — a mistura entre elementos cotidianos e sobrenaturais regionais." },
            { letter: "c", text: "Os universos paralelos e a multiplicidade de futuros possíveis, típicos da ficção científico-filosófica borgeana.", correct: true },
            { letter: "d", text: "O existencialismo — a angústia do ser humano diante da morte iminente." },
            { letter: "e", text: "O romantismo — a idealização das relações humanas e do tempo perdido." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta. O fragmento é do conto "O Jardim de Veredas que se Bifurcam" de Borges — mestre do fantástico intelectual. A ideia central é que "o tempo se bifurca perpetuamente em incontáveis futuros" (<em>innumerables futuros</em>), ou seja, existem múltiplos futuros paralelos coexistindo. Em um desses futuros, o narrador é inimigo do interlocutor. A palavra-chave <em>bifurca</em> (divide-se em dois) e <em>innumerables futuros</em> são as pistas textuais centrais. O ENEM frequentemente usa textos de autores consagrados da literatura hispânica, e reconhecer o estilo de Borges pode ajudar na interpretação.
            </p>
          }
        />
      </section>

    </article>
  );
}
