"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 23</span>
          <h1>Notícias, reportagens e textos jornalísticos</h1>
          <p>
            O texto jornalístico em espanhol é um dos gêneros mais recorrentes nas questões de língua estrangeira
            do ENEM. Ele aparece em forma de notícia, reportagem ou breve informe, exigindo do candidato a
            capacidade de identificar a estrutura do texto, o seu propósito comunicativo e os recursos
            linguísticos típicos do jornalismo hispânico. A linguagem jornalística em espanhol é marcada pela
            objetividade, pela economia de palavras e pelo uso do passivo com <em>se</em>, estruturas que
            diferem significativamente do português brasileiro. Compreender essas marcas linguísticas e
            conhecer os principais veículos da imprensa hispânica é fundamental para resolver questões de
            leitura e interpretação com alto desempenho.
          </p>
        </div>
      </section>

      {/* Seção 1 — Estrutura da notícia */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Textual</span>
        <h2>Partes de uma notícia em espanhol</h2>
        <p>
          A notícia jornalística em espanhol segue uma estrutura clássica, amplamente utilizada em toda
          a imprensa hispânica — de El País (Espanha) ao Clarín (Argentina) e La Jornada (México).
          Conhecer cada parte facilita a localização rápida de informações na prova.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Pirâmide invertida da notícia jornalística em espanhol">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            <polygon points="100,30 600,30 500,90 200,90" fill="#dbeafe" />
            <text x="350" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">TITULAR</text>
            <polygon points="200,95 500,95 430,145 270,145" fill="#bfdbfe" />
            <text x="350" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">ENTRADILLA / LEAD</text>
            <polygon points="270,150 430,150 385,195 315,195" fill="#93c5fd" />
            <text x="350" y="178" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">CUERPO</text>
            <rect x="305" y="200" width="90" height="30" rx="4" fill="#60a5fa" />
            <text x="350" y="220" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">CIERRE</text>
            <text x="615" y="65" fontSize="11" fill="#475569">mais importante</text>
            <text x="615" y="125" fontSize="11" fill="#475569">responde às 6W</text>
            <text x="615" y="178" fontSize="11" fill="#475569">desenvolvimento</text>
            <text x="615" y="218" fontSize="11" fill="#475569">conclusão</text>
          </svg>
          <figcaption>Pirâmide invertida: a notícia começa pelo mais importante e vai para o menos relevante.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parte</th>
                <th>Nome em espanhol</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td><em>titular / encabezado</em></td>
                <td>Sintetiza o fato principal; atrai o leitor</td>
              </tr>
              <tr>
                <td>Lead / Lide</td>
                <td><em>entradilla / lead / párrafo introductorio</em></td>
                <td>Responde às 6 perguntas essenciais em 1-2 frases</td>
              </tr>
              <tr>
                <td>Corpo</td>
                <td><em>cuerpo / desarrollo</em></td>
                <td>Detalha o fato com contexto, dados e declarações</td>
              </tr>
              <tr>
                <td>Fechamento</td>
                <td><em>cierre / párrafo final</em></td>
                <td>Contextualiza historicamente ou aponta desdobramentos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2 — As 6 perguntas do lead */}
      <section className="lesson-section">
        <span className="section-kicker">Lead Jornalístico</span>
        <h2>As 6 perguntas fundamentais da notícia</h2>
        <p>
          O lead jornalístico deve responder, em poucas linhas, às seis perguntas clássicas. Em espanhol,
          essas perguntas são conhecidas como las 6W ou simplesmente as seis interrogativas básicas.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❓</span>
            <h3><em>¿Qué?</em> — O quê?</h3>
            <p>O fato em si: o que aconteceu? <em>Un terremoto sacudió el sur de Chile.</em></p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3><em>¿Quién?</em> — Quem?</h3>
            <p>O protagonista: quem praticou ou sofreu a ação? <em>El presidente anunció...</em></p>
          </div>
          <div className="lesson-card">
            <span>📅</span>
            <h3><em>¿Cuándo?</em> — Quando?</h3>
            <p>O momento: <em>El martes por la mañana / la madrugada del viernes.</em></p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3><em>¿Dónde?</em> — Onde?</h3>
            <p>O lugar: <em>en la capital colombiana / en el centro de Buenos Aires.</em></p>
          </div>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔧</span>
            <h3><em>¿Cómo?</em> — Como?</h3>
            <p><em>mediante una votación / a través de un decreto presidencial.</em></p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3><em>¿Por qué?</em> — Por quê?</h3>
            <p><em>debido a la crisis económica / a raíz de las protestas.</em></p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Exemplo de lead completo</h3>
            <p><em>"Un sismo de magnitud 6,8 sacudió el norte de Chile el lunes por la madrugada, sin causar víctimas, según informó el SHOA."</em></p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>O que o ENEM cobra</h3>
            <p>Identificar qual pergunta o lead responde — ou notar qual informação está ausente no texto.</p>
          </div>
        </div>
      </section>

      {/* Seção 3 — Linguagem jornalística */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem</span>
        <h2>Recursos linguísticos do jornalismo hispânico</h2>
        <p>
          O jornalismo em espanhol tem marcas linguísticas próprias que o distinguem de outros gêneros.
          Reconhecê-las permite identificar rapidamente o propósito do texto e o posicionamento do veículo.
        </p>
        <div className="lesson-highlight">
          <strong>Passivo com "se":</strong> em vez de dizer quem praticou a ação (voz ativa), o jornalismo
          hispânico usa <em>se</em> + verbo para conferir impessoalidade:
          <em> "Se registraron tres heridos" / "Se confirmó la detención" / "Se informó que..."</em>
          Esse recurso equivale ao "foi registrado / foi confirmado" do português.
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso</th>
                <th>Exemplo em espanhol</th>
                <th>Tradução / Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Passivo com <em>se</em></td>
                <td><em>Se informó que el acuerdo fue firmado.</em></td>
                <td>Impessoalidade; omite o agente</td>
              </tr>
              <tr>
                <td>Citação indireta</td>
                <td><em>El ministro afirmó que la situación es grave.</em></td>
                <td>Reproduz declaração sem aspas</td>
              </tr>
              <tr>
                <td>Citação direta</td>
                <td><em>"La situación es crítica", declaró el ministro.</em></td>
                <td>Reproduz declaração literal entre aspas</td>
              </tr>
              <tr>
                <td>Atribuição de fonte</td>
                <td><em>Según fuentes oficiales / de acuerdo con El País</em></td>
                <td>Credita a informação a uma fonte</td>
              </tr>
              <tr>
                <td>Verbos de dizer</td>
                <td><em>señaló, indicó, aseguró, confirmó, reveló, denunció</em></td>
                <td>Variam o matiz da declaração</td>
              </tr>
              <tr>
                <td>Voz passiva composta</td>
                <td><em>El sospechoso fue detenido por la policía.</em></td>
                <td>Foco na pessoa/coisa que sofre a ação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 4 — Tipos de título */}
      <section className="lesson-section">
        <span className="section-kicker">Tipologia</span>
        <h2>Tipos de titular jornalístico</h2>
        <p>
          O tipo de título revela a intenção do veículo e o gênero do texto. O ENEM costuma pedir que
          o candidato identifique o estilo de linguagem de um titular.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Característica</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Informativo</strong></td>
                <td>Neutro; informa o fato sem interpretação</td>
                <td><em>"El gobierno anuncia nuevo plan de vivienda"</em></td>
              </tr>
              <tr>
                <td><strong>Interpretativo</strong></td>
                <td>Analisa ou contextualiza o fato</td>
                <td><em>"La crisis habitacional: un problema sin solución a corto plazo"</em></td>
              </tr>
              <tr>
                <td><strong>Sensacionalista</strong></td>
                <td>Usa emoção, exagero e palavras fortes</td>
                <td><em>"¡Tragedia! Decenas de familias pierden sus hogares"</em></td>
              </tr>
              <tr>
                <td><strong>Apelativo</strong></td>
                <td>Convoca o leitor; usa imperativo ou vocativo</td>
                <td><em>"Ciudadanos, exijan sus derechos: conozca el nuevo plan"</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 5 — Notícia vs Reportagem vs Crônica */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros Jornalísticos</span>
        <h2>Notícia, reportagem e crônica: diferenças</h2>
        <p>
          O ENEM pode apresentar diferentes gêneros jornalísticos e pedir que o candidato identifique
          qual é qual, ou reconheça as marcas linguísticas de cada um.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Notícia (<em>noticia</em>)</h3>
            <p>Relato objetivo de um fato recente. Linguagem impessoal, sem opinião. Estrutura de pirâmide invertida.</p>
          </div>
          <div className="lesson-card">
            <span>📗</span>
            <h3>Reportagem (<em>reportaje</em>)</h3>
            <p>Aprofundamento de um tema. Combina dados, entrevistas e contexto histórico. Mais longa que a notícia.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Crônica (<em>crónica</em>)</h3>
            <p>Relato jornalístico com tom literário. Admite subjetividade e linguagem conotativa. Assina o autor.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Editorial (<em>editorial</em>)</h3>
            <p>Texto de opinião do próprio veículo. Sem assinatura individual; representa a posição do jornal.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Diferença crucial:</strong> na <em>noticia</em>, a subjetividade é evitada; na <em>crónica</em>
          e no <em>editorial</em>, ela é esperada. Identificar essa diferença é fundamental para responder questões
          sobre posicionamento do enunciador.
        </div>
      </section>

      {/* Seção 6 — Exemplo de notícia */}
      <section className="lesson-section">
        <span className="section-kicker">Texto Modelo</span>
        <h2>Exemplo de notícia jornalística hispânica</h2>
        <p>Analise o texto a seguir — estilo El País / Clarín — identificando as partes e recursos linguísticos:</p>
        <div className="lesson-highlight">
          <p><strong>TITULAR:</strong> <em>México registra récord de turismo extranjero en el primer semestre</em></p>
          <p><strong>ENTRADILLA:</strong> <em>El país recibió más de 22 millones de visitantes internacionales entre enero y junio,
          lo que representa un aumento del 14% respecto al mismo período del año anterior, según informó la Secretaría de Turismo.</em></p>
          <p><strong>CUERPO:</strong> <em>"Estamos ante un momento histórico para el turismo nacional", señaló el titular de la cartera.
          La llegada de turistas estadounidenses y canadienses lideró el incremento, con un crecimiento del 18% respecto al año previo.
          Las zonas costeras del Pacífico se consolidaron como destinos preferentes, con Cancún y Los Cabos a la cabeza.</em></p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso encontrado</th>
                <th>Trecho do texto</th>
                <th>Análise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atribuição de fonte</td>
                <td><em>según informó la Secretaría de Turismo</em></td>
                <td>Credita o dado a fonte oficial</td>
              </tr>
              <tr>
                <td>Citação direta</td>
                <td><em>"Estamos ante un momento histórico"</em></td>
                <td>Declara com aspas; verbo <em>señaló</em></td>
              </tr>
              <tr>
                <td>Dado numérico</td>
                <td><em>aumento del 14%</em></td>
                <td>Dados quantitativos conferem objetividade</td>
              </tr>
              <tr>
                <td>Comparação temporal</td>
                <td><em>respecto al mismo período del año anterior</em></td>
                <td>Contextualiza o dado em série histórica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 7 — Jornais hispânicos */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Cultural</span>
        <h2>Principais jornais do mundo hispânico</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Principais jornais hispânicos por país">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="30" width="155" height="140" rx="8" fill="#dbeafe" />
            <text x="97" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Espanha</text>
            <text x="97" y="80" textAnchor="middle" fontSize="11" fill="#1e40af">El País</text>
            <text x="97" y="98" textAnchor="middle" fontSize="11" fill="#1e40af">El Mundo</text>
            <text x="97" y="116" textAnchor="middle" fontSize="11" fill="#1e40af">La Vanguardia</text>
            <text x="97" y="134" textAnchor="middle" fontSize="11" fill="#1e40af">ABC</text>
            <rect x="190" y="30" width="155" height="140" rx="8" fill="#d1fae5" />
            <text x="267" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Argentina</text>
            <text x="267" y="80" textAnchor="middle" fontSize="11" fill="#065f46">Clarín</text>
            <text x="267" y="98" textAnchor="middle" fontSize="11" fill="#065f46">La Nación</text>
            <text x="267" y="116" textAnchor="middle" fontSize="11" fill="#065f46">Infobae</text>
            <rect x="360" y="30" width="155" height="140" rx="8" fill="#fef3c7" />
            <text x="437" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">México</text>
            <text x="437" y="80" textAnchor="middle" fontSize="11" fill="#92400e">La Jornada</text>
            <text x="437" y="98" textAnchor="middle" fontSize="11" fill="#92400e">El Universal</text>
            <text x="437" y="116" textAnchor="middle" fontSize="11" fill="#92400e">Reforma</text>
            <rect x="530" y="30" width="155" height="140" rx="8" fill="#fce7f3" />
            <text x="607" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Colômbia</text>
            <text x="607" y="80" textAnchor="middle" fontSize="11" fill="#9d174d">El Tiempo</text>
            <text x="607" y="98" textAnchor="middle" fontSize="11" fill="#9d174d">El Espectador</text>
            <text x="607" y="116" textAnchor="middle" fontSize="11" fill="#9d174d">Semana</text>
          </svg>
          <figcaption>Principais veículos jornalísticos do mundo hispânico que podem ser fonte de textos no ENEM.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <strong>ENEM na prática:</strong> questões frequentemente citam a fonte do texto (ex.: "Texto adaptado de El País,
          2022"). Saber que El País é espanhol e La Jornada é mexicano ajuda a contextualizar o registro linguístico
          e o contexto sociocultural do texto.
        </div>
      </section>

      {/* Seção 8 — Posição do enunciador */}
      <section className="lesson-section">
        <span className="section-kicker">Análise Discursiva</span>
        <h2>Marcadores de posição do enunciador</h2>
        <p>
          Mesmo em textos que pretendem ser objetivos, o enunciador deixa marcas que revelam sua posição.
          O ENEM frequentemente pede que o candidato identifique essas marcas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marca linguística</th>
                <th>Exemplo</th>
                <th>Posicionamento revelado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adjetivos avaliativos</td>
                <td><em>"la alarmante cifra de desempleo"</em></td>
                <td>Julgamento negativo implícito</td>
              </tr>
              <tr>
                <td>Verbos de dizer com carga</td>
                <td><em>denunció, alertó, admitió</em></td>
                <td>Implica problematização ou confissão</td>
              </tr>
              <tr>
                <td>Uso de aspas</td>
                <td><em>el "milagro" económico</em></td>
                <td>Distanciamento irônico do conceito</td>
              </tr>
              <tr>
                <td>Seleção de fontes</td>
                <td>Citar só opositores ou só governo</td>
                <td>Parcialidade pelo silêncio de vozes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — verbos de dizer e seu matiz:</strong>
          <ul>
            <li><em>afirmó / declaró</em> — neutro</li>
            <li><em>aseguró</em> — ênfase na certeza do falante</li>
            <li><em>reveló</em> — informação antes desconhecida do público</li>
            <li><em>denunció</em> — tom crítico; aponta algo errado</li>
            <li><em>admitió</em> — concessão relutante</li>
            <li><em>insistió</em> — repetição de posição já tomada anteriormente</li>
          </ul>
        </div>
      </section>

      {/* Seção 9 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação do lead"
          statement={
            <p>
              Leia o trecho: <em>"Un incendio de grandes proporciones destruyó esta madrugada un edificio
              de apartamentos en el centro de Bogotá, Colombia. Según informaron los bomberos, no se
              registraron víctimas fatales. Las causas del siniestro aún se investigan."</em>
              Qual das perguntas jornalísticas NÃO é respondida diretamente pelo texto?
            </p>
          }
          options={[
            { letter: "a", text: "¿Qué? (o que aconteceu)" },
            { letter: "b", text: "¿Dónde? (onde aconteceu)" },
            { letter: "c", text: "¿Cuándo? (quando aconteceu)" },
            { letter: "d", text: "¿Por qué? (causa do incêndio)", correct: true },
          ]}
          resolution={
            <p>
              O texto informa <em>qué</em> (incêndio), <em>dónde</em> (Bogotá), <em>cuándo</em>
              (esta madrugada). A causa (<em>por qué</em>) é explicitamente mencionada como ainda sob
              investigação (<em>"aún se investigan"</em>), portanto não respondida no texto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Recurso de impessoalidade"
          statement={
            <p>
              Leia: <em>"Se confirmó que el acuerdo de paz fue firmado en la madrugada del jueves.
              Se espera que el documento sea ratificado por el Congreso en las próximas semanas."</em>
              O uso repetido de <em>se</em> no texto tem como função principal:
            </p>
          }
          options={[
            { letter: "a", text: "Indicar que o sujeito da frase é desconhecido em ambos os casos." },
            { letter: "b", text: "Conferir impessoalidade ao texto, omitindo os agentes das ações e focando nos fatos.", correct: true },
            { letter: "c", text: "Substituir o pronome reflexivo que indicaria ação sobre si mesmo." },
            { letter: "d", text: "Expressar dúvida do jornalista sobre as informações relatadas." },
          ]}
          resolution={
            <p>
              O passivo com <em>se</em> é recurso típico do jornalismo hispânico para conferir impessoalidade:
              o foco recai sobre o fato, não sobre quem o pratica. Isso não implica que o agente seja
              desconhecido — o jornalista pode saber quem confirmou, mas opta pela construção impessoal
              para parecer mais objetivo.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tipo de titular e intenção"
          statement={
            <p>
              Compare os dois titulares sobre o mesmo fato:
              <br /><strong>Titular A:</strong> <em>"El Congreso aprueba reforma educativa con 52 votos a favor"</em>
              <br /><strong>Titular B:</strong> <em>"¡Escándalo! El gobierno impone reforma educativa a pesar del rechazo popular"</em>
              <br />Qual afirmativa descreve CORRETAMENTE a diferença entre os dois titulares?
            </p>
          }
          options={[
            { letter: "a", text: "Ambos são informativos; a diferença está apenas no número de palavras." },
            { letter: "b", text: "O titular A é informativo e neutro; o B é sensacionalista e revela posicionamento contrário à reforma.", correct: true },
            { letter: "c", text: "O titular B é mais preciso por apresentar mais contexto político." },
            { letter: "d", text: "O titular A é interpretativo; o B é informativo." },
          ]}
          resolution={
            <p>
              O titular A usa linguagem neutra e factual (número de votos, verbo <em>aprobar</em> sem carga
              avaliativa). O B usa exclamação, a palavra <em>escándalo</em>, o verbo <em>impone</em> (com
              carga negativa) e pressupõe "rechazo popular" — recursos que revelam posicionamento crítico
              e caracterizam o estilo sensacionalista/opinativo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Verbos de dizer e matiz"
          statement={
            <p>
              Leia: <em>"El exministro admitió ante el juez que no había declarado sus bienes en el exterior,
              aunque insistió en que se trataba de un error administrativo, no de una intención de ocultar
              información. La fiscal reveló que el caso será investigado por el ministerio público."</em>
              Os verbos <em>admitió, insistió</em> e <em>reveló</em> revelam, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Concessão relutante, repetição de posição e apresentação de informação nova.", correct: true },
            { letter: "b", text: "Negação, afirmação e dúvida." },
            { letter: "c", text: "Concordância, contestação e acusação." },
            { letter: "d", text: "Confirmação, negação e questionamento." },
          ]}
          resolution={
            <p>
              <em>Admitir</em> implica uma concessão relutante (confessou algo que preferia não dizer).
              <em>Insistir</em> indica que o sujeito repete uma posição já tomada anteriormente.
              <em>Revelar</em> introduz informação nova ou até então desconhecida do público.
              A alternativa (a) captura esses três matizes com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gênero jornalístico e enunciador"
          statement={
            <p>
              Leia o trecho: <em>"Cada mañana, cuando cruzo el parque central de esta ciudad que ya no
              reconozco, me pregunto cuántos de mis vecinos habrán dormido bajo este cielo sin una cobija.
              La crisis habitacional no es solo una cifra en un informe gubernamental: es el hombre que vi
              ayer pidiendo limosna frente al banco que le negó el crédito hace tres años."</em>
              Esse texto pertence ao gênero:
            </p>
          }
          options={[
            { letter: "a", text: "Notícia, pois relata um fato recente de forma objetiva." },
            { letter: "b", text: "Editorial, pois representa a posição institucional do jornal." },
            { letter: "c", text: "Crónica jornalística, pois combina relato de fatos com subjetividade e linguagem literária.", correct: true },
            { letter: "d", text: "Reportagem, pois aprofunda um tema com entrevistas e dados." },
          ]}
          resolution={
            <p>
              O texto apresenta marcas inequívocas de <em>crónica</em>: uso da primeira pessoa
              (<em>cuando cruzo, me pregunto</em>), linguagem subjetiva e literária (<em>este cielo, cobija</em>),
              mistura de relato pessoal com crítica social. Não é notícia (sem neutralidade), não é editorial
              (voz individual, não institucional) e não é reportagem (ausência de dados e entrevistas formais).
            </p>
          }
        />
      </section>
    </article>
  );
}
