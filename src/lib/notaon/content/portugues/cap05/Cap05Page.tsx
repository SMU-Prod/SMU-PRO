"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 5</span>

          <h1>Tipologias Textuais</h1>

          <p>
            Compreender as tipologias textuais é fundamental para o ENEM: cada tipo de texto
            possui uma organização interna, uma finalidade comunicativa e recursos linguísticos
            próprios. Dominar narração, descrição, argumentação, exposição e injunção permite
            identificar, produzir e analisar qualquer texto com precisão e profundidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>

        <h2>1. O que são Tipologias Textuais?</h2>

        <p>
          Uma <strong>tipologia textual</strong> é uma categoria que classifica os textos
          segundo sua <em>estrutura interna</em>, seu <em>propósito comunicativo</em> e os
          recursos linguísticos predominantes que mobiliza. Diferentemente do <strong>gênero
          textual</strong> — que designa formas socialmente reconhecidas como conto, artigo de
          opinião, bula, receita — a tipologia descreve o modo de organização discursiva de base.
        </p>

        <p>
          A distinção entre tipologia e gênero é frequentemente cobrada no ENEM. Um único gênero
          pode combinar várias tipologias: uma <em>reportagem</em> mistura exposição (dados
          informativos), narração (reconstituição de fatos) e, eventualmente, argumentação
          (análise crítica). Falar em tipologia, portanto, é falar na <strong>sequência
          predominante</strong> que organiza o texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Narração</h3>
            <p>Conta eventos em sequência temporal com personagens, espaço e enredo.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Descrição</h3>
            <p>Representa seres, objetos, lugares e estados por meio de características sensoriais.</p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Argumentação</h3>
            <p>Defende uma tese com argumentos, visando persuadir o interlocutor.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Exposição</h3>
            <p>Apresenta, explica ou informa conceitos sem necessariamente persuadir.</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Injunção</h3>
            <p>Orienta, instrui ou ordena ações, usando modo imperativo e linguagem direta.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            A banca frequentemente pede ao candidato que identifique a "tipologia predominante"
            de um trecho. Treine localizar o <em>verbo dominante</em>: verbos de ação no pretérito
            → narração; verbos de estado (ser, estar, parecer) → descrição; verbos no imperativo
            → injunção; verbos explicativos (é, significa, consiste) → exposição; verbos de
            opinião + dados + conectivos argumentativos → argumentação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Narração</span>

        <h2>2. A Narração e seus Elementos Estruturais</h2>

        <p>
          A <strong>narração</strong> é a tipologia que relata eventos — reais ou fictícios —
          organizados em uma linha temporal. Seus elementos constitutivos são interdependentes
          e formam o que chamamos de <em>universo diegético</em> (o mundo criado pela narrativa).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Definição</th>
                <th>Função narrativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Narrador</strong></td>
                <td>Voz que conduz o relato</td>
                <td>Organiza, seleciona e interpreta os fatos</td>
              </tr>
              <tr>
                <td><strong>Personagem</strong></td>
                <td>Ser que age na história</td>
                <td>Protagoniza, antagoniza ou coadjuva a ação</td>
              </tr>
              <tr>
                <td><strong>Enredo</strong></td>
                <td>Conjunto de ações encadeadas</td>
                <td>Sustenta o conflito e a progressão dramática</td>
              </tr>
              <tr>
                <td><strong>Tempo</strong></td>
                <td>Cronológico ou psicológico</td>
                <td>Situa e cadencia os eventos</td>
              </tr>
              <tr>
                <td><strong>Espaço</strong></td>
                <td>Ambiente físico e social</td>
                <td>Contextualiza e influencia as ações</td>
              </tr>
              <tr>
                <td><strong>Clímax</strong></td>
                <td>Ponto de maior tensão</td>
                <td>Marca a virada ou ruptura do conflito</td>
              </tr>
              <tr>
                <td><strong>Desfecho</strong></td>
                <td>Resolução (ou não) do conflito</td>
                <td>Fecha ou abre o horizonte narrativo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O <strong>enredo</strong> organiza-se classicamente em cinco fases: <em>apresentação</em>
          (situação inicial estável), <em>complicação</em> (surgimento do conflito),
          <em>desenvolvimento</em> (desdobramentos), <em>clímax</em> (tensão máxima) e
          <em>desfecho</em> (resolução). Narrativas modernas e contemporâneas frequentemente
          embaralham essa ordem — iniciando in media res (no meio da ação) ou terminando de
          forma aberta — o que é amplamente explorado em textos literários do ENEM.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 140" width="700" height="140" aria-label="Diagrama da estrutura do enredo narrativo clássico">
            <rect x="0" y="0" width="700" height="140" rx="10" fill="#f0f4ff" />
            <rect x="20" y="55" width="100" height="40" rx="8" fill="#4f46e5" />
            <text x="70" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Apresentação</text>
            <rect x="150" y="40" width="100" height="40" rx="8" fill="#7c3aed" />
            <text x="200" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Complicação</text>
            <rect x="280" y="25" width="110" height="40" rx="8" fill="#9333ea" />
            <text x="335" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Desenvolvimento</text>
            <rect x="420" y="10" width="80" height="40" rx="8" fill="#dc2626" />
            <text x="460" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Clímax</text>
            <rect x="530" y="40" width="80" height="40" rx="8" fill="#059669" />
            <text x="570" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Desfecho</text>
            <line x1="120" y1="75" x2="150" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arr)" />
            <line x1="250" y1="60" x2="280" y2="45" stroke="#6b7280" strokeWidth="2" />
            <line x1="390" y1="45" x2="420" y2="30" stroke="#6b7280" strokeWidth="2" />
            <line x1="500" y1="30" x2="530" y2="55" stroke="#6b7280" strokeWidth="2" />
            <text x="350" y="125" textAnchor="middle" fill="#374151" fontSize="11">Progressão dramática — tensão cresce até o clímax e se resolve no desfecho</text>
          </svg>
        </figure>

        <div className="math-block">
          <strong>Exemplo de análise de elementos narrativos:</strong>
          <br />
          <em>"Naquela tarde chuvosa, Maria saiu de casa sem avisar ninguém. Quando o marido
          chegou e não a encontrou, percebeu que algo havia mudado para sempre."</em>
          <br /><br />
          Narrador: 3ª pessoa, onisciente seletivo — sabe o que o marido percebe, não revela os
          pensamentos de Maria. Espaço: casa (íntimo, familiar). Tempo: tarde chuvosa
          (simbólico — mudança, melancolia). Clímax implícito: "algo havia mudado para sempre".
          Desfecho aberto: não se sabe o que aconteceu.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Foco Narrativo</span>

        <h2>3. Tipos de Narrador e Foco Narrativo</h2>

        <p>
          O <strong>foco narrativo</strong> é o ponto de vista a partir do qual a história é
          contada. Trata-se de uma das categorias mais cobradas no ENEM, especialmente em textos
          literários. O narrador não deve ser confundido com o autor: o narrador é uma entidade
          intratextual, criada pelo autor para conduzir o relato.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Narrador-Personagem (1ª pessoa)</h3>
            <p>Participa da história como personagem. Usa "eu". Visão limitada — só sabe o que viveu ou lhe foi contado. Cria proximidade e subjetividade.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Narrador Onisciente Total (3ª pessoa)</h3>
            <p>Sabe tudo sobre todos os personagens — pensamentos, sentimentos, passado e futuro. Posição divina. Comum na narrativa clássica do século XIX.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Narrador Onisciente Seletivo</h3>
            <p>Foca na interioridade de apenas um personagem, permanecendo externo aos demais. Técnica do monólogo interior e do discurso indireto livre.</p>
          </div>
          <div className="lesson-card">
            <span>📷</span>
            <h3>Narrador Observador</h3>
            <p>Descreve apenas o que vê externamente, sem acesso à interioridade. Comportamento behaviorista. Cria efeito cinematográfico e objetividade.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Discurso Indireto Livre — Recurso sofisticado no ENEM</h3>
          <p>
            O <strong>discurso indireto livre</strong> funde a voz do narrador com a voz do
            personagem sem marcas sintáticas explícitas (sem verbos dicendi, sem aspas). É um
            recurso de narrador onisciente seletivo que produz efeito de imersão na consciência
            do personagem. Exemplo: <em>"Ela saiu às pressas. Para quê ficar? Ninguém jamais
            a entenderia."</em> — as duas últimas frases são pensamentos da personagem expressos
            pela voz do narrador.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de narrador</th>
                <th>Pessoa gramatical</th>
                <th>Acesso à interioridade</th>
                <th>Efeito predominante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Narrador-personagem</td>
                <td>1ª pessoa</td>
                <td>Apenas a própria</td>
                <td>Subjetividade, intimidade, suspeição</td>
              </tr>
              <tr>
                <td>Onisciente total</td>
                <td>3ª pessoa</td>
                <td>Todos os personagens</td>
                <td>Objetividade aparente, controle total</td>
              </tr>
              <tr>
                <td>Onisciente seletivo</td>
                <td>3ª pessoa</td>
                <td>Um personagem focal</td>
                <td>Profundidade psicológica, ambiguidade</td>
              </tr>
              <tr>
                <td>Observador</td>
                <td>3ª pessoa</td>
                <td>Nenhuma</td>
                <td>Distanciamento, neutralidade, tensão</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Descrição</span>

        <h2>4. A Descrição — Tipos e Recursos</h2>

        <p>
          A <strong>descrição</strong> é a tipologia que representa — por meio de palavras —
          as características de seres, objetos, lugares, sensações e estados. Ao contrário da
          narração, que avança no tempo, a descrição produz uma <em>suspensão temporal</em>:
          o texto "pausa" a ação para construir uma imagem.
        </p>

        <p>
          Toda descrição implica uma <strong>seleção de detalhes</strong>. O descritor nunca
          apresenta a realidade total, mas escolhe quais traços destacar — e essa seleção é
          sempre ideológica, estética ou afetiva. O olhar que descreve já é um olhar que
          interpreta.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📐</span>
            <h3>Descrição Objetiva</h3>
            <p>Apresenta características mensuráveis, verificáveis, sem interferência da subjetividade do descritor. Comum em textos técnicos, científicos e jurídicos.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Descrição Subjetiva</h3>
            <p>Incorpora a perspectiva emocional, estética e valorativa do descritor. Frequente em textos literários. Os adjetivos carregam afeto, julgamento ou metáfora.</p>
          </div>
          <div className="lesson-card">
            <span>🗿</span>
            <h3>Descrição Estática</h3>
            <p>Retrata o objeto em repouso, sem movimento. Típica de paisagens, retratos e inventários. O tempo verbal dominante é o imperfeito do indicativo.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Descrição Dinâmica</h3>
            <p>Combina traços descritivos com movimento — o objeto, personagem ou paisagem é captado em transformação. A fronteira com a narração se torna tênue.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Comparação objetiva vs. subjetiva — mesmo referente:</strong>
          <br /><br />
          <em>Objetivo:</em> "O homem tinha 1,82 m de altura, cabelos castanhos escuros e olhos verdes."
          <br />
          <em>Subjetivo:</em> "O homem era alto demais para aquela sala acanhada; os olhos verdes,
          frios como vidro, pareciam atravessar quem ousasse encará-los."
          <br /><br />
          Na versão subjetiva, os adjetivos ("acanhada", "frios", "ousasse") expressam avaliação
          e estabelecem relações metafóricas que revelam a perspectiva do descritor.
        </div>

        <div className="lesson-highlight">
          <h3>Seleção de detalhes como estratégia discursiva</h3>
          <p>
            No ENEM, questões sobre descrição frequentemente perguntam qual é o <em>efeito de
            sentido</em> produzido pela escolha de determinados adjetivos ou imagens. Lembre-se:
            cada detalhe selecionado constrói uma visão de mundo. Uma favela descrita por seus
            problemas estruturais produz efeito diferente da mesma favela descrita por sua
            vitalidade cultural — mesmo que ambas as descrições sejam "verdadeiras".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Argumentação</span>

        <h2>5. A Dissertação Argumentativa — Estrutura e Estratégias</h2>

        <p>
          A <strong>argumentação</strong> é a tipologia cujo propósito é <em>convencer</em> ou
          <em>persuadir</em> o interlocutor a respeito de uma tese — uma posição sobre um tema
          controverso. Todo texto argumentativo parte de uma situação de dissenso: há uma questão
          em aberto, sobre a qual pessoas razoáveis podem discordar, e o texto intervém para
          defender uma perspectiva.
        </p>

        <p>
          Na estrutura clássica da <strong>dissertação argumentativa</strong>, identifica-se:
          (1) a <em>tese</em> — afirmação defendida; (2) os <em>argumentos</em> — razões que
          sustentam a tese; (3) os <em>contra-argumentos</em> (ou refutações) — posições
          contrárias que o texto antecipa e rebate; e (4) a <em>conclusão</em> — retomada da
          tese e fechamento persuasivo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estratégia argumentativa</th>
                <th>Como funciona</th>
                <th>Exemplo esquemático</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Argumento por dados</strong></td>
                <td>Usa estatísticas, pesquisas, levantamentos quantitativos para embasar a tese</td>
                <td>"Segundo o IBGE, 80% das famílias em situação de pobreza estão em municípios sem saneamento básico."</td>
              </tr>
              <tr>
                <td><strong>Argumento por exemplos</strong></td>
                <td>Apresenta casos concretos que ilustram e corroboram a afirmação geral</td>
                <td>"Países como Finlândia e Coreia do Sul demonstram que investimento em educação reduz desigualdade."</td>
              </tr>
              <tr>
                <td><strong>Argumento de autoridade</strong></td>
                <td>Cita especialistas, pensadores ou instituições reconhecidas para legitimar a tese</td>
                <td>"Para o filósofo Boaventura de Sousa Santos, a democracia exige reconhecimento das diferenças."</td>
              </tr>
              <tr>
                <td><strong>Argumento por analogia</strong></td>
                <td>Compara dois domínios diferentes para transferir a lógica de um ao outro</td>
                <td>"Assim como o corpo adoece sem cuidado médico, a democracia adoece sem educação política."</td>
              </tr>
              <tr>
                <td><strong>Argumento de causa e efeito</strong></td>
                <td>Estabelece relação causal entre fenômenos para justificar uma posição</td>
                <td>"A ausência de políticas de moradia causa exclusão social, que por sua vez alimenta a violência urbana."</td>
              </tr>
              <tr>
                <td><strong>Contra-argumento + refutação</strong></td>
                <td>Antecipa objeções do leitor e as rebate, fortalecendo a tese</td>
                <td>"Embora alguns argumentem que cotas reduzem o mérito, pesquisas mostram que cotistas têm desempenho equivalente ou superior."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Conectivos argumentativos — essenciais para a coesão</h3>
          <p>
            Os operadores argumentativos sinalizam a relação lógica entre os enunciados:
            <strong> adição</strong> (além disso, ademais, também);
            <strong> concessão</strong> (embora, ainda que, apesar de);
            <strong> causa</strong> (porque, visto que, uma vez que);
            <strong> consequência</strong> (portanto, logo, de modo que);
            <strong> oposição</strong> (contudo, entretanto, porém, no entanto);
            <strong> conclusão</strong> (em suma, diante disso, sendo assim).
            Usar esses conectivos com precisão é sinal de maturidade argumentativa e garante
            pontos na competência de coesão da redação do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exposição</span>

        <h2>6. A Exposição e a Explicação</h2>

        <p>
          A <strong>exposição</strong> (ou <strong>explicação</strong>) é a tipologia cujo
          objetivo central é <em>informar</em> e <em>elucidar</em> — apresentar conceitos,
          definir termos, esclarecer processos. Diferentemente da argumentação, a exposição
          não parte necessariamente de uma tese controversa: ela pressupõe um saber estabelecido
          que deve ser transmitido ao leitor.
        </p>

        <p>
          Os gêneros que privilegiam a sequência expositiva incluem: <em>verbetes de enciclopédia</em>,
          <em>textos didáticos</em>, <em>conferências científicas</em>, <em>artigos de divulgação
          científica</em> e <em>manuais técnicos</em>. Em todos, predominam definições,
          classificações, comparações e ilustrações.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📘</span>
            <h3>Definição</h3>
            <p>Estabelece o significado de um conceito. "X é Y que possui Z." Usa verbos ser, consistir, denominar-se.</p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Classificação</h3>
            <p>Agrupa elementos em categorias segundo critérios explícitos. "Existem três tipos de X: A, B e C."</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Comparação</h3>
            <p>Aproxima ou diferencia dois ou mais elementos para clarificar suas características.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Ilustração</h3>
            <p>Fornece exemplos concretos para tornar o conceito abstrato mais acessível e compreensível.</p>
          </div>
        </div>

        <p>
          A linguagem expositiva tende a ser <em>denotativa</em> (sentido literal, preciso) e
          impessoal (ausência de marcas da 1ª pessoa, voz passiva, nominalizações). Contudo, em
          textos de <strong>divulgação científica</strong> destinados ao grande público, a
          exposição é frequentemente mesclada com recursos metafóricos e analogias para tornar
          o conteúdo mais acessível — mantendo rigor informativo e apelo comunicativo
          simultaneamente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Injunção</span>

        <h2>7. A Injunção e a Linguagem Instrucional</h2>

        <p>
          A <strong>injunção</strong> é a tipologia que <em>orienta, instrui, ordena ou
          prescreve ações</em>. Seu traço linguístico mais característico é o uso do
          <strong>modo imperativo</strong> (Adicione, Clique, Não dobre) ou de construções
          equivalentes (infinitivo: "Adicionar sal a gosto"; futuro do presente: "O candidato
          deverá preencher o formulário").
        </p>

        <p>
          Os gêneros injuntivos mais comuns são: <em>receitas culinárias</em>, <em>manuais de
          instrução</em>, <em>bulas de medicamento</em>, <em>regulamentos</em>,
          <em>editais</em>, <em>placas de sinalização</em> e <em>tutoriais</em>. A linguagem
          injuntiva pode ser <strong>verbal</strong> (palavras e frases) ou
          <strong>não verbal</strong> (ícones, pictogramas, setas), ou ainda a combinação de
          ambas — o que é chamado de linguagem <em>multimodal</em>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍳</span>
            <h3>Receita culinária</h3>
            <p>Imperativo ou infinitivo para instruções. Lista de ingredientes (nominais) + modo de preparo (verbal). Sequência rigorosamente ordenada.</p>
          </div>
          <div className="lesson-card">
            <span>💊</span>
            <h3>Bula de medicamento</h3>
            <p>Injunção técnica com linguagem especializada. Combina informação (exposição) e prescrição (injunção). Regulada pela ANVISA.</p>
          </div>
          <div className="lesson-card">
            <span>🚸</span>
            <h3>Sinalização urbana</h3>
            <p>Injunção não verbal: cores, formas e ícones regulamentados convencionalmente. Eficiência máxima em mínimo de signos.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Tutorial digital</h3>
            <p>Injunção multimodal: texto, imagens, numeração de passos, capturas de tela. Adaptado à leitura fragmentada do ambiente digital.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Injunção verbal x não verbal no ENEM</h3>
          <p>
            O ENEM frequentemente apresenta charges, infográficos ou placas de trânsito em suas
            questões e solicita a interpretação da <em>linguagem não verbal injuntiva</em>.
            Lembre-se de que a eficácia da injunção não verbal depende de <strong>convenções
            socialmente partilhadas</strong>: o pictograma de "proibido" só funciona porque todos
            aprendemos seu significado. Isso torna a injunção não verbal culturalmente situada —
            um tema caro à proposta do ENEM de valorizar a diversidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sequências Mistas</span>

        <h2>8. Sequências Textuais Mistas e a Heterogeneidade dos Textos</h2>

        <p>
          Na prática comunicativa real, os textos raramente pertencem a uma única tipologia pura.
          A maioria dos textos que circulam socialmente é <strong>heterogênea</strong>: combina
          sequências narrativas, descritivas, expositivas, argumentativas e injuntivas em
          proporções variáveis, dependendo do gênero, do suporte e da finalidade comunicativa.
        </p>

        <p>
          A noção de <strong>sequência textual</strong>, desenvolvida pelo linguista Jean-Michel
          Adam, permite analisar como blocos tipológicos menores se articulam dentro de um texto
          maior. Assim, uma <em>crônica jornalística</em> pode abrir com uma sequência narrativa
          (um fato do cotidiano), desenvolver-se por uma sequência descritiva (ambientação) e
          fechar com uma sequência argumentativa (reflexão crítica).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama de sequências textuais mistas em uma reportagem">
            <rect x="0" y="0" width="700" height="200" rx="10" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1" />
            <text x="350" y="28" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">Exemplo: Reportagem investigativa</text>
            <rect x="30" y="45" width="120" height="50" rx="8" fill="#4f46e5" />
            <text x="90" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Narração</text>
            <text x="90" y="82" textAnchor="middle" fill="#c7d2fe" fontSize="10">Reconstituição</text>
            <text x="90" y="96" textAnchor="middle" fill="#c7d2fe" fontSize="10">do fato</text>
            <rect x="185" y="45" width="120" height="50" rx="8" fill="#0369a1" />
            <text x="245" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Exposição</text>
            <text x="245" y="82" textAnchor="middle" fill="#bae6fd" fontSize="10">Dados, contexto</text>
            <text x="245" y="96" textAnchor="middle" fill="#bae6fd" fontSize="10">e histórico</text>
            <rect x="340" y="45" width="120" height="50" rx="8" fill="#7c3aed" />
            <text x="400" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Descrição</text>
            <text x="400" y="82" textAnchor="middle" fill="#ede9fe" fontSize="10">Ambientação</text>
            <text x="400" y="96" textAnchor="middle" fill="#ede9fe" fontSize="10">e personagens</text>
            <rect x="495" y="45" width="175" height="50" rx="8" fill="#059669" />
            <text x="582" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Argumentação</text>
            <text x="582" y="82" textAnchor="middle" fill="#d1fae5" fontSize="10">Análise crítica</text>
            <text x="582" y="96" textAnchor="middle" fill="#d1fae5" fontSize="10">e posicionamento</text>
            <line x1="150" y1="70" x2="185" y2="70" stroke="#9ca3af" strokeWidth="2" />
            <line x1="305" y1="70" x2="340" y2="70" stroke="#9ca3af" strokeWidth="2" />
            <line x1="460" y1="70" x2="495" y2="70" stroke="#9ca3af" strokeWidth="2" />
            <text x="350" y="135" textAnchor="middle" fill="#374151" fontSize="12">Tipologia predominante define o gênero — mas sequências secundárias enriquecem o texto</text>
            <text x="350" y="158" textAnchor="middle" fill="#6b7280" fontSize="11">A BANCA IDENTIFICA qual sequência é DOMINANTE — não qual aparece</text>
          </svg>
        </figure>

        <div className="lesson-highlight">
          <h3>Como identificar a tipologia predominante</h3>
          <p>
            Pergunte: <em>Qual é a finalidade principal do texto?</em> Se for contar/relatar →
            narração. Se for convencer/defender → argumentação. Se for informar/explicar →
            exposição. Se for orientar/prescrever → injunção. Se for retratar → descrição.
            A tipologia predominante é aquela que sustenta a <strong>intenção comunicativa
            central</strong>, não necessariamente a que ocupa mais espaço.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM — Redação</span>

        <h2>9. O Texto Dissertativo-Argumentativo no ENEM</h2>

        <p>
          A prova de redação do ENEM exige especificamente a produção de um texto do tipo
          <strong>dissertativo-argumentativo</strong> — uma intersecção entre a sequência
          expositiva (explicar o problema) e a sequência argumentativa (defender uma proposta
          de intervenção). Compreender essa especificidade é essencial para atingir a nota 1000.
        </p>

        <p>
          A estrutura canônica esperada possui quatro partes: <em>introdução</em> (apresentação
          do tema e defesa da tese), <em>desenvolvimento 1</em> (primeiro argumento + explicação
          + evidência), <em>desenvolvimento 2</em> (segundo argumento + explicação + evidência)
          e <em>conclusão</em> (retomada da tese + proposta de intervenção detalhada). Cada
          parágrafo deve ser um bloco coeso, com uma ideia central e progressão interna.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência ENEM</th>
                <th>O que avalia</th>
                <th>Relação com tipologia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C1 — Norma padrão</strong></td>
                <td>Domínio da norma culta escrita</td>
                <td>Afeta todas as tipologias — gramática, ortografia, pontuação</td>
              </tr>
              <tr>
                <td><strong>C2 — Tema e tipologia</strong></td>
                <td>Adequação ao tipo dissertativo-argumentativo</td>
                <td>Avaliam se o texto argumenta de fato, não apenas informa</td>
              </tr>
              <tr>
                <td><strong>C3 — Seleção e organização</strong></td>
                <td>Qualidade e relevância dos argumentos</td>
                <td>Estratégias argumentativas: dados, exemplos, causas, analogias</td>
              </tr>
              <tr>
                <td><strong>C4 — Coesão</strong></td>
                <td>Articulação entre partes do texto</td>
                <td>Conectivos lógico-argumentativos, retomadas anafóricas</td>
              </tr>
              <tr>
                <td><strong>C5 — Proposta de intervenção</strong></td>
                <td>Solução concreta, detalhada e respeitosa aos DH</td>
                <td>Sequência injuntiva dentro do texto argumentativo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Erro clássico: confundir exposição com argumentação</h3>
          <p>
            Um texto que apenas <em>informa</em> sobre um problema (exposição) sem
            <em>tomar partido</em> e <em>defender</em> uma posição com argumentos cai na
            <strong>Competência 2 com nota reduzida</strong>. A diferença está no
            <strong>posicionamento do enunciador</strong>: no texto argumentativo, há um
            "eu" que defende, refuta, sustenta. Expressões como "é necessário", "deve-se",
            "é fundamental que" marcam o comprometimento argumentativo do autor.
          </p>
        </div>

        <div className="math-block">
          <strong>Esquema da proposta de intervenção (C5) — 5 elementos obrigatórios:</strong>
          <br /><br />
          1. <strong>Agente</strong> — quem executará a ação (governo, escola, mídia, sociedade civil)
          <br />
          2. <strong>Ação</strong> — o que será feito (verbo preciso, não genérico)
          <br />
          3. <strong>Modo/meio</strong> — como será executado (instrumento, método)
          <br />
          4. <strong>Efeito esperado</strong> — finalidade ou impacto da ação
          <br />
          5. <strong>Respeito aos direitos humanos</strong> — a solução não pode violar dignidade, diversidade ou liberdade
          <br /><br />
          Exemplo: "O Ministério da Educação <em>(agente)</em> deve implementar
          <em>(ação)</em> programas de letramento digital nas escolas públicas
          <em>(modo)</em>, por meio de parcerias com empresas de tecnologia, a fim de
          reduzir a exclusão digital <em>(efeito)</em>, garantindo a todos o acesso
          equânime à informação <em>(DH)</em>."
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação Integrada</span>

        <h2>10. Quadro Comparativo das Cinco Tipologias</h2>

        <p>
          Para consolidar o aprendizado, é fundamental ter uma visão integrada das cinco
          tipologias, comparando-as segundo os critérios mais relevantes para a interpretação
          e produção de textos no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Narração</th>
                <th>Descrição</th>
                <th>Argumentação</th>
                <th>Exposição</th>
                <th>Injunção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Finalidade</strong></td>
                <td>Relatar eventos</td>
                <td>Retratar seres/cenas</td>
                <td>Persuadir</td>
                <td>Informar/explicar</td>
                <td>Orientar/ordenar</td>
              </tr>
              <tr>
                <td><strong>Tempo verbal</strong></td>
                <td>Pretérito</td>
                <td>Imperfeito</td>
                <td>Presente</td>
                <td>Presente</td>
                <td>Imperativo/Infinitivo</td>
              </tr>
              <tr>
                <td><strong>Progressão</strong></td>
                <td>Temporal</td>
                <td>Estática/espacial</td>
                <td>Lógica</td>
                <td>Lógica/conceitual</td>
                <td>Sequencial/procedimental</td>
              </tr>
              <tr>
                <td><strong>Operadores típicos</strong></td>
                <td>então, depois, quando</td>
                <td>e, também, além disso</td>
                <td>portanto, embora, logo</td>
                <td>ou seja, isto é, por exemplo</td>
                <td>primeiro, em seguida, por fim</td>
              </tr>
              <tr>
                <td><strong>Gêneros típicos</strong></td>
                <td>Conto, crônica, romance</td>
                <td>Inventário, retrato literário</td>
                <td>Artigo de opinião, editorial</td>
                <td>Verbete, artigo científico</td>
                <td>Receita, manual, edital</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Mapa mental para as provas</h3>
          <p>
            Ao se deparar com um texto no ENEM, faça três perguntas rápidas: <strong>(1) O que
            o texto quer fazer com o leitor?</strong> (convencer, informar, emocionar, instruir,
            retratar); <strong>(2) Quais são os verbos dominantes?</strong> (ação/passado →
            narração; estado → descrição; imperativo → injunção; opinião + dados → argumentação;
            definição → exposição); <strong>(3) Há tese explícita?</strong> Se sim, é
            argumentativo. Essas três perguntas resolvem a maioria das questões de tipologia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>11. Exercícios — Tipologias Textuais</h2>

        <Exercise
          title="Elementos da narração"
          level="Básico"
          statement={
            <p>
              Leia o trecho: <em>"Era uma vez um menino que vivia na beira do rio. Certa tarde,
              viu um barco à deriva e, sem pensar duas vezes, jogou-se na água. Quando chegou
              ao barco, encontrou apenas um mapa e uma promessa."</em> Qual dos elementos
              narrativos NÃO está presente ou identificável nesse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Personagem (o menino)" },
            { letter: "b", text: "Espaço (beira do rio)" },
            { letter: "c", text: "Ação/enredo (jogou-se na água, encontrou o mapa)" },
            { letter: "d", text: "Clímax com desfecho explicitamente resolvido", correct: true },
            { letter: "e", text: "Tempo (certa tarde)" },
          ]}
          resolution={
            <p>
              O trecho apresenta personagem, espaço, tempo e ação claramente identificáveis.
              O <strong>clímax</strong> é sugerido (o mergulho e a descoberta do mapa), mas o
              <strong>desfecho</strong> permanece aberto — não há resolução explícita do
              conflito. Portanto, o elemento ausente/não resolvido é o desfecho explícito, e não
              qualquer outro elemento. A alternativa D é a única que descreve algo que o texto
              claramente não contém: um desfecho resolto.
            </p>
          }
        />

        <Exercise
          title="Tipos de narrador"
          level="Intermediário"
          statement={
            <p>
              Analise o trecho: <em>"Ela atravessou a sala sem olhar para nenhum deles.
              Dentro, uma voz dizia que era tarde demais — que as palavras ditas naquela noite
              não poderiam ser desfeitas. Os outros a observavam em silêncio, sem entender."</em>
              Que tipo de narrador conduz esse trecho e qual é a evidência textual mais clara
              dessa escolha?
            </p>
          }
          options={[
            { letter: "a", text: "Narrador-personagem, porque usa 'ela' referindo-se a si mesmo" },
            { letter: "b", text: "Narrador onisciente total, porque tem acesso à interioridade de todos os personagens" },
            { letter: "c", text: "Narrador onisciente seletivo, porque acessa apenas os pensamentos de 'ela', sendo externo aos demais", correct: true },
            { letter: "d", text: "Narrador observador, porque descreve apenas ações externas sem acesso à interioridade" },
            { letter: "e", text: "Narrador em segunda pessoa, porque se dirige diretamente ao leitor" },
          ]}
          resolution={
            <p>
              O narrador acessa os pensamentos de <em>ela</em> ("dentro, uma voz dizia") — o
              que elimina o narrador observador (D). Contudo, em relação aos <em>outros</em>,
              o narrador permanece externo: sabe que eles observavam, mas não acessa seus
              pensamentos ("sem entender" é inferível externamente). Isso configura o
              <strong>narrador onisciente seletivo</strong>: visão privilegiada de apenas um
              personagem. O onisciente total (B) teria acesso irrestrito a todos. A alternativa C
              é a correta.
            </p>
          }
        />

        <Exercise
          title="Estratégias argumentativas"
          level="Avançado"
          statement={
            <p>
              Em um artigo de opinião sobre desigualdade educacional, o autor escreve:{" "}
              <em>"Assim como um atleta de elite nunca venceria uma corrida de 100 metros se
              precisasse carregar uma mochila de 20 kg, um estudante em situação de
              vulnerabilidade social raramente pode competir em igualdade de condições com
              colegas que têm acesso a recursos, tutores e tempo de estudo."</em> Identifique
              a estratégia argumentativa utilizada e avalie sua eficácia retórica.
            </p>
          }
          options={[
            { letter: "a", text: "Argumento por dados estatísticos — usa números para embasar a tese" },
            { letter: "b", text: "Argumento de autoridade — cita especialista para legitimar a posição" },
            { letter: "c", text: "Argumento por analogia — compara dois domínios distintos para transferir uma lógica", correct: true },
            { letter: "d", text: "Argumento por causa e efeito — estabelece relação causal direta entre fenômenos" },
            { letter: "e", text: "Contra-argumento com refutação — antecipa objeção e a rebate" },
          ]}
          resolution={
            <p>
              O trecho usa o <strong>argumento por analogia</strong>: compara a situação de um
              atleta carregando peso (domínio esportivo) com a de um estudante em situação de
              vulnerabilidade (domínio educacional). A eficácia retórica da analogia reside na
              <em>concretude da imagem</em> (a mochila de 20 kg é palpável, visual) e na
              <em>transferência de lógica</em>: se todos concordam que o atleta com peso não
              compete em igualdade, devem aceitar que o mesmo vale para o estudante. A analogia
              é especialmente eficaz porque apela tanto à razão (estrutura lógica) quanto à
              emoção (imagem vívida da injustiça).
            </p>
          }
        />

        <Exercise
          title="Tipologia em contexto jornalístico"
          level="Contextualizado"
          statement={
            <p>
              Uma reportagem sobre mudanças climáticas abre com o seguinte parágrafo:{" "}
              <em>"Na última terça-feira, Pedro acordou e não reconheceu a paisagem. O rio que
              atravessava a cidade há gerações estava seco. As rachaduras no solo lembravam
              cicatrizes."</em> Em seguida, o texto apresenta dados do IPCC sobre a elevação
              das temperaturas globais. A combinação tipológica observada nessa reportagem e
              o efeito que ela produz são, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Injunção + exposição; o texto instrui o leitor a agir e depois explica como" },
            { letter: "b", text: "Narração + exposição; a sequência narrativa humaniza o dado científico, tornando-o mais impactante", correct: true },
            { letter: "c", text: "Descrição + argumentação; a paisagem árida é usada como argumento contra a inação climática" },
            { letter: "d", text: "Exposição + narração; os dados científicos introduzem o caso pessoal de Pedro" },
            { letter: "e", text: "Argumentação + injunção; o texto defende uma tese e depois orienta o leitor a mudar comportamentos" },
          ]}
          resolution={
            <p>
              O primeiro parágrafo é uma sequência <strong>narrativa</strong>: há personagem
              (Pedro), ação (acordou, não reconheceu), tempo (última terça-feira) e espaço
              (cidade com rio). A sequência seguinte é <strong>expositiva</strong>: dados do
              IPCC são informações científicas apresentadas sem necessariamente defender uma tese.
              O efeito da combinação é estratégico: a narrativa individual de Pedro
              <em>humaniza</em> e <em>emocionaliza</em> o dado científico abstrato — técnica
              jornalística conhecida como <em>human interest story</em>. Isso aumenta o engajamento
              do leitor com o tema. A alternativa B descreve com precisão essa combinação.
            </p>
          }
        />

        <Exercise
          title="Injunção e linguagem multimodal"
          level="Contextualizado"
          statement={
            <p>
              Uma placa em um museu mostra o ícone de uma câmera fotográfica com um X vermelho
              sobreposto, sem nenhum texto verbal. Em seguida, um cartaz ao lado da mesma placa
              diz: <em>"Não fotografe as obras. O flash danifica os pigmentos."</em> Qual a
              diferença funcional entre os dois enunciados injuntivos e qual o papel da
              combinação de linguagens?
            </p>
          }
          options={[
            { letter: "a", text: "Ambos têm a mesma função e o mesmo público-alvo; a combinação é apenas estética" },
            { letter: "b", text: "O ícone argumenta; o texto instrui — juntos formam uma sequência dissertativo-argumentativa" },
            { letter: "c", text: "O ícone é injunção não verbal (proíbe a ação imediatamente); o texto acrescenta a justificativa expositiva, reforçando a injunção com razão", correct: true },
            { letter: "d", text: "O texto é exposição pura; o ícone é argumentação visual — nenhum dos dois é injuntivo" },
            { letter: "e", text: "O ícone é descritivo (retrata a câmera); o texto é narrativo (conta o que acontece com os pigmentos)" },
          ]}
          resolution={
            <p>
              O ícone com X vermelho é uma <strong>injunção não verbal</strong>: proíbe
              fotografar de maneira direta, sem mediação verbal. Seu funcionamento depende de
              convenção cultural amplamente partilhada. O cartaz verbal também é injuntivo
              ("Não fotografe"), mas acrescenta uma justificativa expositiva ("o flash danifica
              os pigmentos"), que transforma a ordem em <em>recomendação fundamentada</em>.
              A combinação das duas linguagens é estrategicamente multimodal: o ícone atinge
              quem passa rapidamente (visibilidade imediata); o texto alcança quem quer entender
              o motivo. Juntos, reforçam a injunção e reduzem a resistência do público à norma.
            </p>
          }
        />
      </section>
    </article>
  );
}
