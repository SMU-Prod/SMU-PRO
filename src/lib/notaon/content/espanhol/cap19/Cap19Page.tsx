"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 19</span>
          <h1>Skimming, Scanning e leitura eficiente</h1>
          <p>
            A prova de língua estrangeira do ENEM não testa a capacidade de traduzir palavra por palavra —
            testa a habilidade de extrair informação de textos autênticos de forma eficiente e estratégica.
            As técnicas de <strong>skimming</strong> (leitura global) e <strong>scanning</strong> (leitura de
            varredura) são ferramentas profissionais usadas por leitores experientes em qualquer idioma e se
            tornam ainda mais poderosas quando aplicadas a uma língua estrangeira. Combinar essas estratégias
            com a leitura preditiva e o gerenciamento inteligente do tempo transforma a experiência na prova:
            em vez de travar em palavras desconhecidas, o candidato navega pelo texto com confiança, encontrando
            as respostas que precisa.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Skimming ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 1</span>
        <h2>Skimming: leitura global para capturar o tema</h2>
        <p>
          O <strong>skimming</strong> (do inglês "to skim" = deslizar sobre a superfície) é a técnica de ler
          rapidamente para captar a ideia geral de um texto sem processá-lo palavra por palavra. Em espanhol,
          como em qualquer língua, o skimming funciona porque a informação mais importante tende a aparecer em
          posições privilegiadas do texto.
        </p>
        <div className="lesson-highlight">
          <strong>Protocolo de skimming em espanhol:</strong> (1) Leia o título e subtítulos.
          (2) Leia a primeira frase de cada parágrafo (<em>la frase temática</em>). (3) Leia a última frase
          do último parágrafo (conclusão). (4) Observe numerais, nomes próprios, palavras em negrito/itálico.
          Isso leva menos de 30 segundos para textos do ENEM e revela o tema e a intenção geral.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Título e subtítulos</h3>
            <p>Em jornalismo hispânico, o título anuncia a tese ou o fato central. <em>"El cambio climático ya es irreversible"</em> diz tudo sobre a posição do texto.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Primeira frase de cada parágrafo</h3>
            <p>A maioria dos textos argumentativos em espanhol coloca a ideia central do parágrafo na primeira frase (frase-tópico).</p>
          </div>
          <div className="lesson-card">
            <span>🏁</span>
            <h3>Conclusão</h3>
            <p>A última frase do último parágrafo frequentemente recapitula ou reforça a tese. Marcadores: <em>en conclusión, por lo tanto, en definitiva, así pues</em>.</p>
          </div>
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Dados quantitativos</h3>
            <p>Números, porcentagens e datas são âncoras visuais importantes mesmo sem ler o texto completo. <em>"un 30% de la población"</em>, <em>"en 2023"</em>.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 2: Scanning ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica 2</span>
        <h2>Scanning: varredura para localizar informação específica</h2>
        <p>
          O <strong>scanning</strong> (varredura) é a técnica de percorrer rapidamente o texto com um objetivo
          específico: encontrar uma data, um nome, um número, uma palavra-chave. Diferentemente do skimming,
          no scanning você já sabe o que procura — o desafio é encontrá-lo sem ler tudo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>O que você procura</th>
                <th>Pista visual</th>
                <th>Exemplo em texto espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data / Ano</td>
                <td>Numerais + contexto temporal</td>
                <td><em>En 1994 / a partir de 2020 / el próximo marzo</em></td>
              </tr>
              <tr>
                <td>Nome próprio</td>
                <td>Maiúsculas</td>
                <td><em>García Márquez / Madrid / ONU</em></td>
              </tr>
              <tr>
                <td>Percentagem / Número</td>
                <td>Símbolo % ou numerais</td>
                <td><em>el 45% / más de tres millones / unos 500</em></td>
              </tr>
              <tr>
                <td>Palavra-chave da questão</td>
                <td>Sinônimo ou mesma palavra</td>
                <td>Se a questão diz "desempleo", procure também <em>paro, desocupación</em></td>
              </tr>
              <tr>
                <td>Causa / Consequência</td>
                <td>Conectivos causais/consecutivos</td>
                <td><em>porque, ya que, por eso, por lo tanto, así que</em></td>
              </tr>
              <tr>
                <td>Opinião do autor</td>
                <td>Verbos modais e adjetivos avaliativos</td>
                <td><em>es necesario, resulta preocupante, hay que destacar</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Armadilha do scanning:</strong> Às vezes a questão usa sinônimos da palavra que está no texto.
          Por exemplo, a questão pergunta sobre "paro" e o texto usa "desempleo". Antes do scanning, anote
          mentalmente possíveis sinônimos da palavra buscada.
        </div>
      </section>

      {/* ── Seção 3: SVG fluxo de leitura ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fluxo Estratégico</span>
        <h2>Estratégia das 3 leituras para o ENEM</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Fluxo de 3 leituras para o ENEM">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap19arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            {/* Passo 1 */}
            <rect x="20" y="30" width="180" height="130" rx="10" fill="#dbeafe" />
            <text x="110" y="60" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e40af">1ª Leitura</text>
            <text x="110" y="78" textAnchor="middle" fontSize="12" fill="#1e40af">SKIMMING</text>
            <text x="110" y="98" textAnchor="middle" fontSize="11" fill="#1e40af">• Título / subtítulos</text>
            <text x="110" y="114" textAnchor="middle" fontSize="11" fill="#1e40af">• 1ª frase de cada §</text>
            <text x="110" y="130" textAnchor="middle" fontSize="11" fill="#1e40af">• Conclusão</text>
            <text x="110" y="148" textAnchor="middle" fontSize="11" fill="#1e40af">Objetivo: tema geral</text>
            {/* Seta 1→2 */}
            <line x1="205" y1="95" x2="235" y2="95" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#cap19arr1)" />
            {/* Passo 2 */}
            <rect x="240" y="30" width="200" height="130" rx="10" fill="#fef3c7" />
            <text x="340" y="60" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">2ª Leitura</text>
            <text x="340" y="78" textAnchor="middle" fontSize="12" fill="#92400e">LER A QUESTÃO</text>
            <text x="340" y="98" textAnchor="middle" fontSize="11" fill="#92400e">• Identifique o que é pedido</text>
            <text x="340" y="114" textAnchor="middle" fontSize="11" fill="#92400e">• Sublinhe palavras-chave</text>
            <text x="340" y="130" textAnchor="middle" fontSize="11" fill="#92400e">• Anote sinônimos possíveis</text>
            <text x="340" y="148" textAnchor="middle" fontSize="11" fill="#92400e">Objetivo: saber o que buscar</text>
            {/* Seta 2→3 */}
            <line x1="445" y1="95" x2="475" y2="95" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#cap19arr1)" />
            {/* Passo 3 */}
            <rect x="480" y="30" width="200" height="130" rx="10" fill="#d1fae5" />
            <text x="580" y="60" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#065f46">3ª Leitura</text>
            <text x="580" y="78" textAnchor="middle" fontSize="12" fill="#065f46">SCANNING SELETIVO</text>
            <text x="580" y="98" textAnchor="middle" fontSize="11" fill="#065f46">• Varra o texto</text>
            <text x="580" y="114" textAnchor="middle" fontSize="11" fill="#065f46">• Encontre a informação</text>
            <text x="580" y="130" textAnchor="middle" fontSize="11" fill="#065f46">• Leia o contexto próximo</text>
            <text x="580" y="148" textAnchor="middle" fontSize="11" fill="#065f46">Objetivo: responder com precisão</text>
            {/* Tempo */}
            <rect x="20" y="175" width="660" height="35" rx="8" fill="#fce7f3" />
            <text x="350" y="197" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Gestão do tempo: ~20s skimming + 10s ler questão + 30s scanning = menos de 1 minuto por questão</text>
          </svg>
          <figcaption>Estratégia das 3 leituras: skimming global → ler a questão → scanning seletivo. Menos de 1 minuto por questão.</figcaption>
        </figure>
      </section>

      {/* ── Seção 4: Leitura preditiva ── */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura Preditiva</span>
        <h2>Antecipar o conteúdo antes de ler</h2>
        <p>
          A leitura preditiva consiste em usar pistas visuais e contextuais para antecipar o conteúdo antes de
          processar o texto completo. Essa técnica reduz o esforço cognitivo e aumenta a velocidade de
          compreensão, pois o cérebro já começa a "esperar" determinadas informações.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Pista visual</th><th>O que antecipa</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Fonte / Veículo</td>
                <td>Tom (formal/informal), área temática</td>
                <td><em>El País</em> → artigo jornalístico formal; <em>El Mundo Deportivo</em> → esporte</td>
              </tr>
              <tr>
                <td>Gênero textual</td>
                <td>Estrutura e intenção</td>
                <td>Artigo de opinião: tese + argumentos + conclusão</td>
              </tr>
              <tr>
                <td>Título com pergunta</td>
                <td>O texto responderá a essa pergunta</td>
                <td><em>"¿Por qué fracasan las dietas?"</em> → o texto dará causas</td>
              </tr>
              <tr>
                <td>Imagem/legenda</td>
                <td>Contexto visual do tema</td>
                <td>Foto de floresta queimada → texto sobre desmatamento</td>
              </tr>
              <tr>
                <td>Palavras em negrito/itálico</td>
                <td>Conceitos-chave do texto</td>
                <td><em>"La <strong>empatía</strong> es fundamental..."</em></td>
              </tr>
              <tr>
                <td>Data de publicação</td>
                <td>Contexto histórico, relevância temporal</td>
                <td>Artigo de 2020 → possivelmente sobre pandemia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5: Armadilha da tradução ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erro Fatal</span>
        <h2>A armadilha da tradução simultânea</h2>
        <p>
          O maior inimigo do candidato na prova de espanhol é a tentação de traduzir mentalmente cada palavra
          antes de continuar a leitura. Isso não apenas consome tempo precioso como aumenta a ansiedade e
          bloqueia a compreensão global. O espanhol é suficientemente próximo do português para que a
          compreensão contextual funcione sem tradução completa.
        </p>
        <div className="lesson-highlight">
          <strong>Princípio da tolerância à ambiguidade:</strong> Aceite não entender todas as palavras.
          Uma palavra desconhecida em 10 raramente impede a compreensão do texto. Em espanhol-português, o
          contexto resolve a maioria das ambiguidades. Avance e deixe o contexto trabalhar para você.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>O que NÃO fazer</h3>
            <p>Parar em cada palavra desconhecida. Tentar traduzir mentalmente para o português antes de continuar. Reler o mesmo trecho várias vezes sem estratégia.</p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>O que FAZER</h3>
            <p>Usar o contexto para inferir o significado. Procurar cognatas (palavras parecidas com o português). Continuar lendo e deixar o sentido emergir do conjunto.</p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Cognatas úteis</h3>
            <p><em>importante, necesario, problema, crisis, economía, sociedad, cultura, político, sistema</em> — palavras que funcionam quase identicamente em espanhol e português.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 6: Textos multimodais ── */}
      <section className="lesson-section">
        <span className="section-kicker">Textos Multimodais</span>
        <h2>Legendas, imagens e títulos como pistas de leitura</h2>
        <p>
          O ENEM frequentemente usa textos multimodais: notícias com fotos, charges, tirinhas, infográficos,
          cartazes e anúncios. Em textos multimodais em espanhol, os elementos não-verbais são pistas
          fundamentais para a compreensão, especialmente quando o vocabulário é limitado.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Elementos de texto multimodal em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="15" width="200" height="160" rx="10" fill="#dbeafe" />
            <text x="120" y="40" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Charge / Tirinha</text>
            <text x="120" y="60" textAnchor="middle" fontSize="11" fill="#1e40af">• Identifique personagens</text>
            <text x="120" y="76" textAnchor="middle" fontSize="11" fill="#1e40af">• Situação visual</text>
            <text x="120" y="92" textAnchor="middle" fontSize="11" fill="#1e40af">• Balões de fala</text>
            <text x="120" y="108" textAnchor="middle" fontSize="11" fill="#1e40af">• Contraste / ironia</text>
            <text x="120" y="124" textAnchor="middle" fontSize="11" fill="#1e40af">• Exagero visual</text>
            <text x="120" y="144" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">A imagem diz mais</text>
            <text x="120" y="160" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">que mil palavras</text>
            <rect x="245" y="15" width="200" height="160" rx="10" fill="#d1fae5" />
            <text x="345" y="40" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">Infográfico</text>
            <text x="345" y="60" textAnchor="middle" fontSize="11" fill="#065f46">• Título do infográfico</text>
            <text x="345" y="76" textAnchor="middle" fontSize="11" fill="#065f46">• Legenda dos eixos</text>
            <text x="345" y="92" textAnchor="middle" fontSize="11" fill="#065f46">• Fonte dos dados</text>
            <text x="345" y="108" textAnchor="middle" fontSize="11" fill="#065f46">• Tendência (sobe/desce)</text>
            <text x="345" y="124" textAnchor="middle" fontSize="11" fill="#065f46">• Valores extremos</text>
            <text x="345" y="144" textAnchor="middle" fontSize="11" fill="#065f46" fontStyle="italic">Dados numéricos</text>
            <text x="345" y="160" textAnchor="middle" fontSize="11" fill="#065f46" fontStyle="italic">independem do idioma</text>
            <rect x="470" y="15" width="210" height="160" rx="10" fill="#fef3c7" />
            <text x="575" y="40" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#92400e">Notícia com Foto</text>
            <text x="575" y="60" textAnchor="middle" fontSize="11" fill="#92400e">• Leia a legenda da foto</text>
            <text x="575" y="76" textAnchor="middle" fontSize="11" fill="#92400e">• Título + subtítulo</text>
            <text x="575" y="92" textAnchor="middle" fontSize="11" fill="#92400e">• 1° parágrafo (lide)</text>
            <text x="575" y="108" textAnchor="middle" fontSize="11" fill="#92400e">• Nome do veículo</text>
            <text x="575" y="124" textAnchor="middle" fontSize="11" fill="#92400e">• Data / Local</text>
            <text x="575" y="144" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic">O lide jornalístico</text>
            <text x="575" y="160" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic">resume tudo</text>
          </svg>
          <figcaption>Tipos de texto multimodal e os elementos visuais prioritários para leitura eficiente em espanhol.</figcaption>
        </figure>
      </section>

      {/* ── Seção 7: Gerenciamento de tempo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gestão de Tempo</span>
        <h2>Gerenciamento de tempo na prova de língua estrangeira</h2>
        <div className="math-block">
          <strong>Distribuição estratégica do tempo (prova de espanhol ENEM):</strong>
          <br />
          • Total de questões de espanhol: 5 questões
          <br />
          • Tempo ideal por questão: 3 a 4 minutos
          <br />
          • Skimming inicial do texto: 20-30 segundos
          <br />
          • Leitura da questão: 15-20 segundos
          <br />
          • Scanning + verificação: 40-60 segundos
          <br />
          • Revisão se sobrar tempo: 30 segundos
          <br /><br />
          <strong>Regra de ouro:</strong> Se após 4 minutos você não encontrou a resposta, marque a melhor
          opção disponível e avance. Não sacrifique 3 questões por 1.
        </div>
        <div className="lesson-highlight">
          <strong>Elimine antes de confirmar:</strong> Nas questões de espanhol do ENEM, pelo menos 2
          alternativas costumam ser claramente incorretas (informação oposta ao texto, muito específica ou
          totalmente fora de contexto). Eliminar primeiro reduz o espaço de busca e aumenta a precisão.
        </div>
      </section>

      {/* ── Seção 8: Estratégia ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>Quando usar skimming e quando usar scanning</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de questão ENEM</th><th>Técnica primária</th><th>Como aplicar</th></tr>
            </thead>
            <tbody>
              <tr><td>"O texto trata de..."</td><td>Skimming</td><td>Tema geral → ler título + 1ª frase de cada parágrafo</td></tr>
              <tr><td>"Segundo o texto, em que ano..."</td><td>Scanning</td><td>Procurar numerais no texto</td></tr>
              <tr><td>"O autor defende que..."</td><td>Skimming + conclusão</td><td>Foco no último parágrafo e nos marcadores de opinião</td></tr>
              <tr><td>"De acordo com o texto, qual é o significado de..."</td><td>Scanning + contexto</td><td>Localizar a palavra e ler as frases ao redor</td></tr>
              <tr><td>"A charge/tirinha critica..."</td><td>Leitura preditiva</td><td>Analisar imagem → inferir intenção → confirmar com texto verbal</td></tr>
              <tr><td>"O texto é um exemplo de..."</td><td>Skimming + gênero</td><td>Identificar estrutura e marcas do gênero textual</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Aplicando skimming — identificar tema"
          statement={
            <p>
              Um candidato lê rapidamente o título de um texto: <em>"La inteligencia artificial y el futuro
              del trabajo: ¿amenaza u oportunidad?"</em>. Usando apenas o título (skimming), qual é o tema
              geral do texto?
            </p>
          }
          options={[
            { letter: "a", text: "O texto discute a história da inteligência artificial desde suas origens." },
            { letter: "b", text: "O texto aborda o impacto da IA no mercado de trabalho, apresentando dois pontos de vista opostos.", correct: true },
            { letter: "c", text: "O texto define o conceito de inteligência artificial para leigos." },
            { letter: "d", text: "O texto argumenta que a IA é exclusivamente negativa para o emprego." },
          ]}
          resolution={
            <p>
              O título usa o operador lógico <em>¿...u...?</em> (amenaza ou oportunidade), indicando que o texto
              apresenta <strong>dois pontos de vista</strong> sobre o mesmo tema (impacto da IA no trabalho). A
              estrutura de pergunta retórica com alternativas opostas é um sinal claro de texto que vai explorar
              argumentos contrários. O skimming do título já revela tema + estrutura argumentativa.
              Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Scanning — localizar informação específica"
          statement={
            <p>
              Um candidato precisa responder: "Em que ano o acordo foi assinado?" Ele aplica scanning no texto
              e encontra: <em>"El tratado internacional, que fue redactado a lo largo de tres años de
              negociaciones, fue finalmente suscrito en diciembre de 2015 por 196 naciones."</em>{" "}
              Qual é a informação correta?
            </p>
          }
          options={[
            { letter: "a", text: "O tratado foi assinado após três anos exatos de negociações." },
            { letter: "b", text: "O tratado foi assinado em dezembro de 2015 por 196 nações.", correct: true },
            { letter: "c", text: "O tratado foi redigido em 2015 por 196 nações." },
            { letter: "d", text: "O tratado levou 196 anos para ser negociado." },
          ]}
          resolution={
            <p>
              O scanning deve focar na informação pedida (data de assinatura), não em detalhes adjacentes. O texto
              diz: "fue finalmente <em>suscrito</em> en diciembre de 2015" — <em>suscrito</em> é sinônimo de
              "assinado" (<em>firmado</em>). O complemento "por 196 naciones" especifica quem assinou. "Três anos
              de negociações" refere-se ao período de <em>redação</em>, não de assinatura. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Evitar a armadilha da tradução"
          statement={
            <p>
              Um candidato encontra no texto: <em>"El informe reveló que la tasa de analfabetismo funcional entre
              los adultos es considerablemente más elevada de lo que se suponía anteriormente."</em>{" "}
              Mesmo sem conhecer a palavra <em>analfabetismo</em>, qual informação o candidato pode inferir
              pelo contexto?
            </p>
          }
          options={[
            { letter: "a", text: "O relatório revelou algo positivo sobre os adultos." },
            { letter: "b", text: "O relatório revelou que um problema (relacionado a 'analfabetismo') é mais grave do que se pensava antes.", correct: true },
            { letter: "c", text: "O relatório confirmou que a situação dos adultos melhorou." },
            { letter: "d", text: "O relatório foi publicado anteriormente e já era conhecido." },
          ]}
          resolution={
            <p>
              Mesmo sem saber o significado de <em>analfabetismo</em>, o contexto fornece pistas claras: "reveló"
              (revelou — algo novo/surpreendente), "considerablemente más elevada" (consideravelmente maior —
              piora), "de lo que se suponía anteriormente" (do que se supunha antes — surpresa negativa). O
              conjunto indica um <strong>problema mais grave que o esperado</strong>. A estratégia de tolerância
              à ambiguidade funciona aqui. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto jornalístico — aplicar as 3 leituras"
          statement={
            <p>
              Leia o texto:{" "}
              <em>"La contaminación del aire en las grandes urbes latinoamericanas ha alcanzado niveles
              alarmantes, según un informe publicado por la OMS esta semana. Los datos revelan que Ciudad
              de México, Bogotá y Lima superan en más de tres veces los límites recomendados por la
              organización. Los expertos advierten que esta situación provoca unas 300.000 muertes prematuras
              al año en la región. En conclusión, la lucha contra la contaminación debe convertirse en una
              prioridad política urgente."</em>{" "}
              Qual é a ideia central do texto?
            </p>
          }
          options={[
            { letter: "a", text: "Apresentar dados estatísticos sobre as três cidades mais poluídas da América Latina." },
            { letter: "b", text: "A poluição do ar nas grandes cidades latino-americanas é alarmante e exige ação política urgente.", correct: true },
            { letter: "c", text: "A OMS publicou um relatório com dados sobre a qualidade do ar no mundo." },
            { letter: "d", text: "Descrever as causas da poluição do ar nas megacidades." },
          ]}
          resolution={
            <p>
              Aplicando as 3 leituras: (1) Skimming: o texto fala de poluição alarmante em cidades
              latino-americanas. (2) Questão pede ideia central. (3) Scanning: a última frase é a conclusão
              explícita (<em>"En conclusión, la lucha contra la contaminación debe convertirse en una prioridad
              política urgente"</em>). Essa frase expressa a tese principal do texto. Os dados sobre cidades e
              mortes são argumentos de suporte, não a ideia central. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Texto multimodal — ler pistas visuais"
          statement={
            <p>
              Um candidato vê um infográfico com o título <em>"Evolución del uso de internet en América
              Latina (2000-2023)"</em> e uma linha que sobe acentuadamente ao longo dos anos, com o valor
              de 8% em 2000 e 78% em 2023. Sem ler o texto que acompanha o infográfico, qual conclusão
              o candidato pode extrair com segurança?
            </p>
          }
          options={[
            { letter: "a", text: "O uso da internet caiu drasticamente entre 2000 e 2023 na América Latina." },
            { letter: "b", text: "O uso da internet cresceu de forma expressiva na América Latina ao longo de 23 anos, passando de 8% para 78%.", correct: true },
            { letter: "c", text: "A América Latina lidera o uso de internet no mundo." },
            { letter: "d", text: "O infográfico mostra que a internet foi criada em 2000 na América Latina." },
          ]}
          resolution={
            <p>
              O título, a linha ascendente e os valores numéricos (8%→78%) são pistas visuais suficientes para
              concluir que houve <strong>crescimento expressivo</strong> do uso de internet na América Latina
              no período indicado. Números são universais e independem do idioma — uma das vantagens dos textos
              multimodais para candidatos com vocabulário limitado em espanhol. As opções a, c e d contradizem
              os dados visuais. Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
