"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 1</span>

          <h1>Linguagem, Língua e Fala</h1>

          <p>
            A capacidade de comunicar é o traço mais distintivo da espécie humana. Mas comunicar-se
            bem exige compreender as diferenças entre <strong>linguagem</strong>, <strong>língua</strong> e{" "}
            <strong>fala</strong>, reconhecer como o idioma varia no espaço, no tempo e na sociedade,
            e saber adequar o discurso a cada contexto. Esses são os fundamentos cobrados em todas as
            provas de Linguagens do ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O Que é Linguagem?</h2>

        <p>
          <strong>Linguagem</strong> é a capacidade inata e universal que os seres humanos possuem
          de criar e usar sistemas de signos para expressar pensamentos, emoções, intenções e
          informações. Ela não se restringe a palavras: um sorriso, uma melodia, um quadro, um gesto
          de semáforo — tudo isso é linguagem.
        </p>

        <p>
          Os linguistas distinguem a linguagem de outros sistemas de comunicação animal justamente
          pela <em>recursividade</em> (podemos criar frases infinitas com um número finito de regras),
          pela <em>arbitrariedade</em> dos signos e pela <em>transmissão cultural</em> do código de
          geração em geração.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Linguagem Verbal</h3>
            <p>
              Utiliza palavras — orais ou escritas — como unidade básica de comunicação. Exemplos:
              uma conversa, um poema, um artigo científico, uma legenda.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Linguagem Não Verbal</h3>
            <p>
              Comunica sem palavras, por meio de imagens, gestos, cores, sons musicais, expressões
              corporais, símbolos gráficos e sinais. Exemplos: semáforo, tela de pintura, mímica.
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Linguagem Mista</h3>
            <p>
              Integra elementos verbais e não verbais num mesmo enunciado. Exemplos: charge, tirinha,
              infográfico, propaganda com imagem e slogan, filme legendado.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> questões de interpretação frequentemente apresentam charges ou
          tirinhas — linguagem mista. Lembre-se de analisar tanto o texto escrito quanto os elementos
          visuais (expressão dos personagens, perspectiva, símbolos) para captar o sentido completo.
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ferdinand de Saussure</span>
        <h2>2. Língua como Sistema Social: a Teoria do Signo</h2>

        <p>
          O linguista suíço <strong>Ferdinand de Saussure</strong> (1857–1913) fundou a Linguística
          moderna ao propor que a <strong>língua</strong> é um <em>sistema social de signos</em>,
          uma convenção coletiva compartilhada por todos os membros de uma comunidade. Sem esse
          código comum, a comunicação seria impossível.
        </p>

        <p>
          Para Saussure, o <strong>signo linguístico</strong> é a unidade mínima da língua e possui
          duas faces inseparáveis, como os dois lados de uma folha de papel:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔊</span>
            <h3>Significante</h3>
            <p>
              A imagem acústica ou a forma escrita do signo — ou seja, a sequência de sons ou letras.
              Exemplo: a palavra <em>casa</em> é formada pelos sons /k/ /a/ /z/ /a/.
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Significado</h3>
            <p>
              O conceito mental evocado pelo significante — a ideia de "construção usada como
              moradia" que surge na mente ao ouvir a palavra <em>casa</em>.
            </p>
          </div>
        </div>

        <p>
          Duas propriedades fundamentais do signo saussuriano precisam ser dominadas para o ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Propriedade</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Arbitrariedade</strong></td>
                <td>A ligação entre significante e significado é convencional, não existe por natureza.</td>
                <td>
                  O animal bovino é <em>cow</em> em inglês, <em>vaca</em> em português, <em>vache</em>{" "}
                  em francês — nenhuma forma é "natural".
                </td>
              </tr>
              <tr>
                <td><strong>Linearidade</strong></td>
                <td>Os signos se sucedem no tempo (fala) ou no espaço (escrita) — um de cada vez.</td>
                <td>
                  Não é possível pronunciar duas sílabas ao mesmo tempo: <em>ca-sa</em> é sempre
                  sequencial.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Ponto de atenção:</strong> a arbitrariedade explica por que línguas diferentes
          usam palavras completamente distintas para os mesmos conceitos, e por que é impossível
          deduzir o significado de uma palavra apenas pela sua "forma" — é preciso aprender o código.
        </div>

        {/* SVG 1 — diagrama do signo saussuriano */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 420 220"
            width="420"
            height="220"
            aria-label="Diagrama do signo linguístico: significante e significado separados por linha tracejada, unidos por setas bidirecionais"
          >
            {/* Fundo */}
            <rect x="10" y="10" width="400" height="200" rx="14" fill="#f0f4ff" stroke="#c7d2fe" strokeWidth="2" />
            {/* Título */}
            <text x="210" y="38" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#3730a3">
              O Signo Linguístico (Saussure)
            </text>
            {/* Divisor tracejado */}
            <line x1="210" y1="55" x2="210" y2="195" stroke="#6366f1" strokeWidth="2" strokeDasharray="6,4" />
            {/* Caixa Significante */}
            <rect x="25" y="65" width="165" height="110" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
            <text x="108" y="88" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#4338ca">
              SIGNIFICANTE
            </text>
            <text x="108" y="108" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#374151">
              Imagem acústica /
            </text>
            <text x="108" y="122" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#374151">
              forma escrita
            </text>
            <text x="108" y="142" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fill="#1d4ed8" fontStyle="italic">
              c-a-s-a
            </text>
            <text x="108" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">
              sons: /k/ /a/ /z/ /a/
            </text>
            {/* Caixa Significado */}
            <rect x="230" y="65" width="165" height="110" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
            <text x="313" y="88" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#15803d">
              SIGNIFICADO
            </text>
            <text x="313" y="108" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#374151">
              Conceito mental
            </text>
            <text x="313" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#374151">
              "moradia / abrigo"
            </text>
            <text x="313" y="152" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#374151">
              (ideia na mente)
            </text>
            {/* Setas bidirecionais */}
            <line x1="190" y1="120" x2="230" y2="120" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrowBack)" />
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
              <marker id="arrowBack" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto-start-reverse">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
            </defs>
          </svg>
          <figcaption>Figura 1 — As duas faces do signo linguístico segundo Saussure.</figcaption>
        </figure>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Uso Individual</span>
        <h2>3. Fala: o Uso Concreto da Língua</h2>

        <p>
          Se a <em>língua</em> é o sistema abstrato e coletivo, a <strong>fala</strong> é o ato
          concreto e individual de uso desse sistema. É na fala que a língua se realiza: cada vez que
          uma pessoa produz um enunciado, ela escolhe palavras, organiza frases e emprega entonações
          de modo único, refletindo sua história, cultura e intenções pessoais.
        </p>

        <p>
          A fala é sempre variável e criativa — cada falante pode combinar os recursos da língua de
          maneiras diferentes. É exatamente a observação da fala real que permite aos linguistas
          entender como a língua muda e evolui.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Língua</th>
                <th>Fala</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natureza</td>
                <td>Sistema abstrato e social</td>
                <td>Ato concreto e individual</td>
              </tr>
              <tr>
                <td>Quem possui</td>
                <td>A comunidade de falantes</td>
                <td>Cada falante individualmente</td>
              </tr>
              <tr>
                <td>Características</td>
                <td>Estável, convencional, normativa</td>
                <td>Variável, criativa, contextual</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>O sistema da Língua Portuguesa</td>
                <td>A forma como você pronuncia "saudade"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Analogia:</strong> a língua é como o conjunto de regras do xadrez, que todos os
          jogadores devem conhecer. A fala é a partida em si — cada jogador cria movimentos únicos
          dentro dessas regras.
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade</span>
        <h2>4. Variações Linguísticas: Diatópica, Diastrática, Diafásica e Diacrônica</h2>

        <p>
          A língua não é um bloco homogêneo. Ela varia no espaço, na hierarquia social, no grau de
          formalidade e no tempo histórico. A Linguística classifica essas variações em quatro tipos
          principais, todos cobrados no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Variação Diatópica</h3>
            <p>
              Variação <em>regional</em> ou <em>geográfica</em>. O mesmo objeto recebe nomes
              diferentes conforme a região. Exemplos: <strong>mandioca</strong> (SP) /
              <strong> aipim</strong> (RJ/RS) / <strong>macaxeira</strong> (NE); ônibus (SP) /
              bonde (linguagem antiga carioca). Inclui também diferenças de sotaque e pronúncia.
            </p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Variação Diastrática</h3>
            <p>
              Variação <em>social</em>, ligada a classe socioeconômica, grau de escolaridade,
              profissão, faixa etária ou grupo cultural. Exemplos: o jargão médico ("hipertensão
              arterial sistêmica"), a gíria jovem ("mitar", "lacrar"), o vocabulário técnico do
              Direito ("habeas corpus").
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Variação Diafásica</h3>
            <p>
              Variação <em>situacional</em> ou <em>de registro</em>: a mesma pessoa usa
              linguagem diferente em contextos diferentes. Exemplos: "Bom dia, Dr. Alves, venho
              solicitar..." (formal) vs. "Oi, tio, cola lá em casa!" (informal). Também chamada de
              variação de estilo ou registro.
            </p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>Variação Diacrônica</h3>
            <p>
              Variação <em>histórica</em>: mudanças na língua ao longo do tempo. Exemplos: "vós
              deveis" tornou-se "vocês devem"; palavras medievais como "outrossim" e "meirinho"
              caíram em desuso; neologismos como "selfie" e "deletar" foram incorporados.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Evolução histórica clássica (diacrônica):</strong>
          <br />
          <em>Vossa Mercê</em> → <em>Vosmecê</em> → <em>Você</em> → <em>Cê</em>
          <br />
          Ao longo de 400 anos, o pronome de tratamento formal tornou-se pronome pessoal de uso
          cotidiano e chegou à forma reduzida "cê", usada informalmente no Brasil atual.
        </div>
      </section>

      {/* ── Seção 5 — SVG 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>5. Mapa das Variações Linguísticas</h2>

        <p>
          O esquema a seguir sintetiza os quatro eixos de variação e os fatores que os determinam,
          facilitando a memorização para a prova.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 500 320"
            width="500"
            height="320"
            aria-label="Mapa mental das quatro variações linguísticas: diatópica (espaço), diastrática (sociedade), diafásica (contexto) e diacrônica (tempo)"
          >
            {/* Fundo */}
            <rect x="5" y="5" width="490" height="310" rx="16" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1.5" />

            {/* Círculo central */}
            <circle cx="250" cy="160" r="48" fill="#4f46e5" />
            <text x="250" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="white">
              VARIAÇÕES
            </text>
            <text x="250" y="172" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="white">
              LINGUÍSTICAS
            </text>

            {/* Nó 1 — Diatópica (topo esquerda) */}
            <line x1="215" y1="120" x2="145" y2="75" stroke="#6366f1" strokeWidth="2" />
            <rect x="30" y="30" width="110" height="65" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
            <text x="85" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#3730a3">
              DIATÓPICA
            </text>
            <text x="85" y="68" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">
              Variação regional
            </text>
            <text x="85" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">
              (espaço geográfico)
            </text>

            {/* Nó 2 — Diastrática (topo direita) */}
            <line x1="285" y1="120" x2="355" y2="75" stroke="#0891b2" strokeWidth="2" />
            <rect x="360" y="30" width="115" height="65" rx="10" fill="#cffafe" stroke="#0891b2" strokeWidth="1.5" />
            <text x="418" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#0e7490">
              DIASTRÁTICA
            </text>
            <text x="418" y="68" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">
              Variação social
            </text>
            <text x="418" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">
              (classe / grupo)
            </text>

            {/* Nó 3 — Diafásica (baixo esquerda) */}
            <line x1="215" y1="200" x2="145" y2="250" stroke="#d97706" strokeWidth="2" />
            <rect x="30" y="232" width="110" height="65" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="85" y="254" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#92400e">
              DIAFÁSICA
            </text>
            <text x="85" y="270" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">
              Variação de registro
            </text>
            <text x="85" y="284" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">
              (formal / informal)
            </text>

            {/* Nó 4 — Diacrônica (baixo direita) */}
            <line x1="285" y1="200" x2="355" y2="250" stroke="#16a34a" strokeWidth="2" />
            <rect x="360" y="232" width="115" height="65" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="418" y="254" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#15803d">
              DIACRÔNICA
            </text>
            <text x="418" y="270" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">
              Variação histórica
            </text>
            <text x="418" y="284" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280">
              (mudança no tempo)
            </text>
          </svg>
          <figcaption>Figura 2 — Os quatro eixos de variação linguística e seus fatores determinantes.</figcaption>
        </figure>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Registros</span>
        <h2>6. Norma Culta e Linguagem Coloquial</h2>

        <p>
          A <strong>norma culta</strong> (ou norma-padrão) é a variedade linguística de maior
          prestígio social, associada à escrita formal, à tradição literária e ao uso institucional
          (documentos jurídicos, textos acadêmicos, jornalismo de referência). Ela segue convenções
          gramaticais codificadas em gramáticas normativas.
        </p>

        <p>
          A <strong>linguagem coloquial</strong> é o registro informal utilizado nas interações do
          cotidiano. Caracteriza-se por maior flexibilidade sintática, uso de gírias, contrações
          ("tô", "pra", "num") e dependência do contexto compartilhado entre os interlocutores.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Norma Culta</th>
                <th>Linguagem Coloquial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contexto de uso</td>
                <td>Redação ENEM, petições, artigos científicos, discursos formais</td>
                <td>Conversa entre amigos, mensagens de WhatsApp, redes sociais</td>
              </tr>
              <tr>
                <td>Exemplos lexicais</td>
                <td>"estou", "para", "não", "você"</td>
                <td>"tô", "pra", "num", "cê"</td>
              </tr>
              <tr>
                <td>Sintaxe</td>
                <td>Estrutura completa, concordância rigorosa</td>
                <td>Elipses, anacolutos e inversões livres</td>
              </tr>
              <tr>
                <td>Julgamento correto</td>
                <td>Adequada ao contexto formal</td>
                <td>Adequada ao contexto informal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Nenhuma das duas é "certa" ou "errada" em absoluto. O critério
          é sempre a <em>adequação</em>: usar linguagem coloquial em uma redação argumentativa é
          inadequação ao gênero, não erro moral; usar norma culta excessivamente rígida numa conversa
          informal pode soar artificial e afastar o interlocutor.
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidade Central</span>
        <h2>7. Competência Comunicativa e Adequação ao Contexto</h2>

        <p>
          O conceito de <strong>competência comunicativa</strong>, proposto pelo sociolinguista
          Dell Hymes, vai além do mero conhecimento das regras gramaticais. Um falante competente
          sabe <em>quando falar</em>, <em>o que falar</em>, <em>com quem</em> e <em>de que forma</em>
          — adaptando constantemente seu discurso às variáveis da situação comunicativa.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Interlocutor</h3>
            <p>
              Quem é o receptor da mensagem? Um superior hierárquico, um amigo, uma criança, um
              cliente? A relação social determina o grau de formalidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Objetivo</h3>
            <p>
              O que se quer alcançar? Convencer, informar, entreter, cumprimentar, negociar? Cada
              objetivo exige recursos discursivos diferentes.
            </p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Situação</h3>
            <p>
              Onde e quando ocorre a comunicação? Uma reunião corporativa, um velório, uma festa,
              uma sala de aula — cada espaço tem protocolos linguísticos próprios.
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Canal e Gênero</h3>
            <p>
              A comunicação é oral, escrita, digital? É uma carta, um e-mail, um tweet, uma
              dissertação? O gênero textual define as convenções a serem seguidas.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Caso prático:</strong> Um médico ao explicar um diagnóstico usa linguagem técnica
          no prontuário (<em>norma culta + jargão</em>), mas linguagem acessível com o paciente
          leigo (<em>registro intermediário</em>) e gírias com os colegas residentes num chat
          informal (<em>coloquial</em>). O mesmo profissional, três registros distintos — isso é
          competência comunicativa plena.
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Crítica</span>
        <h2>8. Preconceito Linguístico e a Linguística Moderna</h2>

        <p>
          O <strong>preconceito linguístico</strong> ocorre quando se julga a inteligência, o valor
          moral ou a capacidade de uma pessoa pela forma como ela fala, considerando certas variantes
          como "erradas", "feias" ou "inferiores". Esse julgamento é científicamente infundado e
          socialmente danoso.
        </p>

        <p>
          A Linguística moderna, desde o século XX, afirma que <em>toda variante linguística é
          sistemática e funcional</em>: dialetos regionais, gírias e registros coloquiais têm
          gramáticas próprias e cumprem plenamente sua função comunicativa dentro de seus contextos.
          Dizer que "nordestino fala errado" ou que "pobre não sabe português" é preconceito
          linguístico disfarçado de crítica gramatical.
        </p>

        <div className="lesson-highlight">
          <strong>No ENEM:</strong> questões sobre variação linguística tendem a valorizar a visão
          descritiva da Linguística (que descreve como a língua é usada) em oposição à visão
          puramente prescritiva (que dita como "deve" ser usada). O candidato deve reconhecer que
          diversidade não é erro.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❌</span>
            <h3>Visão Prescritiva Extrema</h3>
            <p>
              "Existe apenas uma forma correta de falar/escrever. Tudo que foge à gramática
              normativa é erro." — visão que ignora a variação natural das línguas.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Visão Descritiva / Moderna</h3>
            <p>
              "A língua varia e muda. Todas as variantes são sistemáticas. O problema não é a
              variante em si, mas a inadequação ao contexto." — visão científica dominante.
            </p>
          </div>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Aprofundado</span>
        <h2>9. Língua vs. Idioma e Línguas Naturais vs. Artificiais</h2>

        <p>
          No uso cotidiano, <strong>língua</strong> e <strong>idioma</strong> são frequentemente
          usados como sinônimos, mas há uma distinção técnica relevante: o termo "idioma" enfatiza
          o pertencimento a uma nação ou comunidade política, enquanto "língua" é mais amplo e
          científico. Assim, o "idioma brasileiro" é uma forma popular de dizer "Língua Portuguesa
          falada no Brasil", mas os linguistas preferem "variedade brasileira do português".
        </p>

        <p>
          Outro ponto importante é a distinção entre <strong>línguas naturais</strong> e{" "}
          <strong>línguas artificiais</strong> (ou planejadas):
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Língua Natural</strong></td>
                <td>Surgiu espontaneamente de comunidades humanas, evoluindo ao longo de gerações sem planejamento deliberado.</td>
                <td>Português, inglês, mandarim, árabe, tupi</td>
              </tr>
              <tr>
                <td><strong>Língua Artificial</strong></td>
                <td>Criada intencionalmente por uma pessoa ou grupo, com regras definidas a priori, geralmente com objetivo de comunicação internacional ou ficcional.</td>
                <td>Esperanto (L. Zamenhof, 1887), Interlingua, Klingon (Star Trek), Quenya (Tolkien)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Curiosidade ENEM:</strong> A Língua Brasileira de Sinais (Libras) é uma{" "}
          <em>língua natural</em>, com gramática própria, desenvolvida organicamente pelas
          comunidades surdas brasileiras — não é uma versão gestual do português. Ela é reconhecida
          oficialmente pela Lei 10.436/2002.
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo Integrado do Capítulo</h2>

        <p>
          Este capítulo estabelece as bases de toda a análise linguística exigida no ENEM. Os
          conceitos se articulam da seguinte forma:
        </p>

        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Linguagem</strong> é a capacidade humana universal de criar sistemas
              simbólicos de comunicação (verbal, não verbal e mista).
            </li>
            <li>
              <strong>Língua</strong> é o sistema social e coletivo de signos (Saussure): cada
              signo une um <em>significante</em> a um <em>significado</em> de forma
              <em> arbitrária</em> e <em>linear</em>.
            </li>
            <li>
              <strong>Fala</strong> é o uso concreto, individual e criativo da língua em
              situações reais de comunicação.
            </li>
            <li>
              A língua varia em quatro eixos: <em>diatópico</em> (espaço), <em>diastrático</em>{" "}
              (sociedade), <em>diafásico</em> (registro/contexto) e <em>diacrônico</em> (tempo).
            </li>
            <li>
              <strong>Norma culta</strong> e <strong>linguagem coloquial</strong> são registros
              igualmente válidos — a questão é sempre a adequação ao contexto.
            </li>
            <li>
              <strong>Competência comunicativa</strong> é saber adaptar a linguagem ao
              interlocutor, ao objetivo, à situação e ao gênero textual.
            </li>
            <li>
              <strong>Preconceito linguístico</strong> é científicamente infundado: toda variante
              tem sua gramática e cumpre sua função. A Linguística moderna descreve a língua como
              ela é, sem hierarquizar variantes.
            </li>
            <li>
              Línguas <em>naturais</em> emergem espontaneamente; línguas <em>artificiais</em>{" "}
              são planejadas — como o Esperanto. A Libras é uma língua natural plena.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Seção 11 — Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Tipos de Linguagem"
          statement={
            <p>
              Uma propaganda de refrigerante exibe a imagem de uma garrafa gelada, o slogan{" "}
              <em>"Refrescante como nunca"</em> e o logotipo da marca. Quanto ao tipo de linguagem
              utilizado, essa propaganda é classificada como:
            </p>
          }
          options={[
            { letter: "a", text: "Exclusivamente verbal, pois há palavras escritas." },
            { letter: "b", text: "Exclusivamente não verbal, pois a imagem predomina." },
            { letter: "c", text: "Mista, pois combina elementos verbais (slogan e logotipo) e não verbais (imagem da garrafa).", correct: true },
            { letter: "d", text: "Oral, pois a propaganda é veiculada em televisão." },
          ]}
          resolution={
            <p>
              A propaganda integra texto escrito (linguagem verbal) e imagem visual (linguagem não
              verbal), caracterizando a <strong>linguagem mista</strong>. A alternativa D confunde o
              canal de veiculação (televisão) com o tipo de linguagem — mesmo na TV, a propaganda
              pode ser mista se tiver elementos visuais e verbais simultâneos.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Signo Linguístico (Saussure)"
          statement={
            <p>
              Segundo a teoria saussuriana, o fato de a palavra <em>árvore</em> em português
              corresponder a <em>tree</em> em inglês e <em>arbre</em> em francês para o mesmo
              conceito demonstra que o signo linguístico é:
            </p>
          }
          options={[
            { letter: "a", text: "Motivado, pois reflete a realidade natural do objeto." },
            { letter: "b", text: "Arbitrário, pois a ligação entre significante e significado é convencional, não natural.", correct: true },
            { letter: "c", text: "Linear, pois as línguas se sucedem no tempo." },
            { letter: "d", text: "Universal, pois todos os idiomas usam as mesmas palavras." },
          ]}
          resolution={
            <p>
              A <strong>arbitrariedade</strong> do signo é justamente a ausência de relação natural
              entre a forma sonora/escrita (significante) e o conceito (significado). Se houvesse
              motivação natural, todas as línguas usariam a mesma palavra para os mesmos objetos.
              A alternativa C trata da <em>linearidade</em>, que é outra propriedade do signo, mas
              não responde ao que foi perguntado.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Variação Diastrática"
          statement={
            <p>
              Leia o trecho: <em>"O réu impetrou habeas corpus preventivo alegando ausência de justa
              causa para a ação penal."</em> O vocabulário utilizado é característico da variação
              linguística denominada:
            </p>
          }
          options={[
            { letter: "a", text: "Diatópica, pois reflete a região geográfica do falante." },
            { letter: "b", text: "Diacrônica, pois são termos que mudaram ao longo do tempo." },
            { letter: "c", text: "Diastrática, pois revela o grupo profissional e o nível de especialização do falante.", correct: true },
            { letter: "d", text: "Diafásica, pois o texto foi escrito em situação informal." },
          ]}
          resolution={
            <p>
              O jargão jurídico (<em>habeas corpus</em>, <em>justa causa</em>,{" "}
              <em>ação penal</em>) identifica o falante como pertencente a um grupo profissional
              específico — o campo do Direito. Isso é <strong>variação diastrática</strong>, pois
              está ligada ao grupo social/profissional. A variação diafásica (alternativa D)
              dependeria da situação comunicativa (formal vs. informal), não do grupo.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="4. Competência Comunicativa e Adequação"
          statement={
            <p>
              Em uma entrevista de emprego para cargo gerencial, um candidato usa
              expressões como <em>"cara, o negócio é assim..."</em> e <em>"tô ligado no que cê tá
              falando"</em>. A avaliação linguisticamente correta dessa situação é:
            </p>
          }
          options={[
            { letter: "a", text: "O candidato demonstra preconceito linguístico ao usar formas coloquiais." },
            { letter: "b", text: "As formas coloquiais são erradas gramaticalmente e revelam desconhecimento do português." },
            { letter: "c", text: "O uso coloquial é inadequado ao contexto formal da entrevista, indicando falta de competência comunicativa, embora as formas sejam gramaticalmente válidas em outros contextos.", correct: true },
            { letter: "d", text: "Não há nenhum problema, pois todas as variantes linguísticas são igualmente adequadas em todos os contextos." },
          ]}
          resolution={
            <p>
              A questão exige distinguir dois planos: o da <em>validade gramatical</em> (as
              expressões são válidas no registro coloquial) e o da <em>adequação contextual</em>
              (são inadequadas num contexto formal de avaliação profissional). A alternativa D erra
              ao afirmar que toda variante é adequada em <em>todo</em> contexto — o critério é
              justamente a adequação. A alternativa B confunde inadequação situacional com erro
              gramatical. A <strong>competência comunicativa</strong> envolve saber escolher o
              registro correto para cada situação.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Preconceito Linguístico"
          statement={
            <p>
              O linguista Marcos Bagno, em seu livro <em>Preconceito Linguístico</em>, argumenta
              que afirmações como "brasileiro não sabe falar português" e "o carioca fala errado
              porque não pronuncia o 's' no final das palavras" são exemplos de preconceito
              linguístico. Com base nos princípios da Linguística moderna, assinale a alternativa
              que melhor justifica a crítica de Bagno:
            </p>
          }
          options={[
            { letter: "a", text: "Toda variação linguística deve ser combatida para preservar a pureza do idioma." },
            { letter: "b", text: "As variantes regionais e sociais são sistemas organizados e funcionais; julgá-las como 'erradas' confunde adequação contextual com valor moral ou intelectual do falante.", correct: true },
            { letter: "c", text: "A norma culta é a única forma legítima de comunicação em qualquer situação." },
            { letter: "d", text: "O preconceito linguístico só existe quando envolve discriminação racial explícita." },
          ]}
          resolution={
            <p>
              Bagno e a Linguística descritiva demonstram que variantes como a redução do 's' final
              no carioca seguem regras sistemáticas — não são "desleixo" ou "ignorância". O
              preconceito linguístico surge quando se usa a forma de falar para inferir
              inteligência, caráter ou valor social do falante. A alternativa B capta exatamente
              esse ponto: toda variante é funcional em seu contexto, e o problema não é a variante
              em si, mas a <em>inadequação situacional</em> — um conceito muito diferente de
              "falar errado".
            </p>
          }
        />
      </section>
    </article>
  );
}
