"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 27</span>
          <h1>Poemas, músicas e textos literários</h1>
          <p>
            A literatura hispânica está entre as mais ricas do mundo — e o ENEM a usa sistematicamente
            para testar a leitura crítica em espanhol. Poemas de Pablo Neruda, fragmentos de García
            Márquez, versos de García Lorca e letras de músicas hispânicas aparecem nas questões com
            perguntas que cobram interpretação, identificação de recursos poéticos, reconhecimento do
            narrador e compreensão do realismo mágico. A boa notícia: com estratégias certas, é possível
            interpretar um poema em espanhol mesmo sem conhecer todas as palavras — usando campos
            semânticos, imagens poéticas e o tom emocional do texto. Este capítulo dá o mapa completo
            para essa habilidade.
          </p>
        </div>
      </section>

      {/* Seção 1 — Autores mais cobrados */}
      <section className="lesson-section">
        <span className="section-kicker">Cânone Literário</span>
        <h2>Autores hispânicos mais cobrados no ENEM</h2>
        <p>
          O ENEM seleciona autores canônicos da literatura hispânica. Conhecer o perfil de cada um
          — país, época, estilo — permite contextualizar rapidamente qualquer fragmento apresentado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>País / Época</th>
                <th>Obras / Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Federico García Lorca</td>
                <td>Espanha / Séc. XX</td>
                <td><em>Romancero gitano, Bodas de sangre, La casa de Bernarda Alba</em>. Morte, amor, liberdade, flamenco.</td>
              </tr>
              <tr>
                <td>Pablo Neruda</td>
                <td>Chile / Séc. XX</td>
                <td><em>Veinte poemas de amor y una canción desesperada, Canto general</em>. Amor, natureza, política.</td>
              </tr>
              <tr>
                <td>Jorge Luis Borges</td>
                <td>Argentina / Séc. XX</td>
                <td><em>Ficciones, El Aleph</em>. Labirintos, tempo, infinito, metaficção.</td>
              </tr>
              <tr>
                <td>Gabriel García Márquez</td>
                <td>Colômbia / Séc. XX</td>
                <td><em>Cien años de soledad, El amor en los tiempos del cólera</em>. Realismo mágico, solidão.</td>
              </tr>
              <tr>
                <td>Isabel Allende</td>
                <td>Chile / Séc. XX-XXI</td>
                <td><em>La casa de los espíritus, Eva Luna</em>. Realismo mágico, feminismo, ditadura.</td>
              </tr>
              <tr>
                <td>Octavio Paz</td>
                <td>México / Séc. XX</td>
                <td><em>El laberinto de la soledad, Piedra de sol</em>. Identidade mexicana, solidão, tempo.</td>
              </tr>
              <tr>
                <td>Gabriela Mistral</td>
                <td>Chile / Séc. XX</td>
                <td><em>Desolación, Ternura</em>. Primeira Nobel de Literatura latino-americana (1945). Amor materno, dor, natureza.</td>
              </tr>
              <tr>
                <td>Mario Vargas Llosa</td>
                <td>Peru / Séc. XX-XXI</td>
                <td><em>La ciudad y los perros, La fiesta del Chivo</em>. Ditadura, violência, poder.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2 — Recursos poéticos */}
      <section className="lesson-section">
        <span className="section-kicker">Recursos Literários</span>
        <h2>Recursos poéticos em espanhol</h2>
        <p>
          O ENEM cobra identificação e análise de recursos poéticos. Em espanhol, os termos são muito
          similares ao português — mas há nuances importantes no uso de cada um.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso</th>
                <th>Em espanhol</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metáfora</td>
                <td><em>metáfora</em></td>
                <td>Comparação implícita (sem "como")</td>
                <td><em>"Tus ojos son luceros."</em> (Neruda)</td>
              </tr>
              <tr>
                <td>Símile / Comparação</td>
                <td><em>símil / comparación</em></td>
                <td>Comparação explícita (com "como")</td>
                <td><em>"Tus cabellos son como la noche."</em></td>
              </tr>
              <tr>
                <td>Símbolo</td>
                <td><em>símbolo</em></td>
                <td>Imagem que representa algo além do literal</td>
                <td>Rosa = amor; lua = morte (em Lorca)</td>
              </tr>
              <tr>
                <td>Aliteração</td>
                <td><em>aliteración</em></td>
                <td>Repetição de sons consonantais</td>
                <td><em>"Con el ala aleve del leve abanico"</em> (Rubén Darío)</td>
              </tr>
              <tr>
                <td>Anáfora</td>
                <td><em>anáfora</em></td>
                <td>Repetição de palavra(s) no início dos versos</td>
                <td><em>"Puedo escribir... / Puedo escribir..."</em> (Neruda)</td>
              </tr>
              <tr>
                <td>Hipérbato</td>
                <td><em>hipérbaton</em></td>
                <td>Inversão da ordem natural das palavras</td>
                <td><em>"Del salón en el ángulo oscuro..."</em> (Bécquer)</td>
              </tr>
              <tr>
                <td>Sinestesia</td>
                <td><em>sinestesia</em></td>
                <td>Mistura de sentidos (visão + audição, etc.)</td>
                <td><em>"El silencio es dorado."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 3 — Fragmentos literários */}
      <section className="lesson-section">
        <span className="section-kicker">Textos Reais</span>
        <h2>Fragmentos literários para análise</h2>
        <p>
          Analisar fragmentos reais de autores hispânicos com as ferramentas aprendidas é a melhor
          preparação para as questões do ENEM.
        </p>
        <div className="lesson-highlight">
          <p><strong>Pablo Neruda — <em>Puedo escribir los versos</em> (fragmento):</strong></p>
          <p><em>
            "Puedo escribir los versos más tristes esta noche.<br />
            Escribir, por ejemplo: 'La noche está estrellada,<br />
            y tiritan, azules, los astros, a lo lejos.'<br />
            El viento de la noche gira en el cielo y canta.<br />
            Puedo escribir los versos más tristes esta noche.<br />
            La quise, y a veces ella también me quería."
          </em></p>
          <p><strong>Recursos identificados:</strong> anáfora (<em>Puedo escribir...</em>), sinestesia
          (<em>tiritan, azules, los astros</em> — mistura som + cor), hipérbole emotiva (<em>más tristes</em>).</p>
        </div>
        <div className="lesson-highlight">
          <p><strong>Federico García Lorca — <em>Romance sonámbulo</em> (fragmento):</strong></p>
          <p><em>
            "Verde que te quiero verde.<br />
            Verde viento. Verdes ramas.<br />
            El barco sobre la mar<br />
            y el caballo en la montaña."
          </em></p>
          <p><strong>Recursos identificados:</strong> anáfora (<em>Verde... Verde... Verdes</em>),
          símbolo (verde = vida/morte em Lorca), justaposição de imagens (barco no mar + cavalo na
          montanha = liberdade impossível).</p>
        </div>
        <div className="lesson-highlight">
          <p><strong>Gabriel García Márquez — <em>Cien años de soledad</em> (íncipit):</strong></p>
          <p><em>
            "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía
            había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."
          </em></p>
          <p><strong>Recursos identificados:</strong> analepse (flashback a partir do futuro), realismo
          mágico (coexistência do extraordinário — pelotão — e do ordinário — conhecer o gelo),
          sintaxe complexa que comprime passado, presente e futuro numa frase.</p>
        </div>
      </section>

      {/* Seção 4 — Realismo mágico */}
      <section className="lesson-section">
        <span className="section-kicker">Movimento Literário</span>
        <h2>Realismo mágico: características e exemplos</h2>
        <p>
          O realismo mágico é o movimento literário mais identificado com a América Latina e o mais
          cobrado no ENEM quando o tema é literatura hispânica.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Características do realismo mágico na literatura hispânica">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <rect x="20" y="30" width="200" height="150" rx="10" fill="#dbeafe" />
            <text x="120" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">REAL</text>
            <text x="120" y="78" textAnchor="middle" fontSize="10" fill="#1e40af">contexto histórico real</text>
            <text x="120" y="95" textAnchor="middle" fontSize="10" fill="#1e40af">personagens cotidianos</text>
            <text x="120" y="112" textAnchor="middle" fontSize="10" fill="#1e40af">problemas sociais reais</text>
            <text x="120" y="129" textAnchor="middle" fontSize="10" fill="#1e40af">linguagem narrativa</text>
            <text x="120" y="146" textAnchor="middle" fontSize="10" fill="#1e40af">América Latina</text>
            <rect x="250" y="60" width="200" height="90" rx="10" fill="#fef3c7" />
            <text x="350" y="90" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">REALISMO</text>
            <text x="350" y="110" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">MÁGICO</text>
            <text x="350" y="135" textAnchor="middle" fontSize="10" fill="#92400e">fusão naturalizada</text>
            <rect x="480" y="30" width="200" height="150" rx="10" fill="#d1fae5" />
            <text x="580" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">MÁGICO</text>
            <text x="580" y="78" textAnchor="middle" fontSize="10" fill="#065f46">eventos sobrenaturais</text>
            <text x="580" y="95" textAnchor="middle" fontSize="10" fill="#065f46">aceitos como normais</text>
            <text x="580" y="112" textAnchor="middle" fontSize="10" fill="#065f46">crenças populares</text>
            <text x="580" y="129" textAnchor="middle" fontSize="10" fill="#065f46">morte que volta</text>
            <text x="580" y="146" textAnchor="middle" fontSize="10" fill="#065f46">profecias cumpridas</text>
          </svg>
          <figcaption>Realismo mágico: fusão do cotidiano real com o sobrenatural, tratado como natural pelos personagens.</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👻</span>
            <h3>Sobrenatural naturalizado</h3>
            <p>Personagens mortos que continuam presentes; fantasmas tratados como membros da família. <em>"José Arcadio no había muerto: seguía viviendo."</em></p>
          </div>
          <div className="lesson-card">
            <span>🌺</span>
            <h3>Hipérbole mítica</h3>
            <p>Exageros que fogem da lógica realista: chuva de flores amarelas, chuva de borboletas, insônia coletiva que apaga a memória.</p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>Profecias e destino</h3>
            <p>O futuro já está escrito; personagens cumprem profecias sem possibilidade de escapar. Estrutura circular do tempo.</p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Contexto latino-americano</h3>
            <p>Conflitos políticos reais (ditaduras, guerras civis, desigualdade) coexistem com o fantástico sem causar estranhamento.</p>
          </div>
        </div>
      </section>

      {/* Seção 5 — Como interpretar poesia */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>Como interpretar poesia em espanhol sem dominar o idioma</h2>
        <p>
          A poesia comunica mais pelo som, pela imagem e pelo tom emocional do que pelo significado
          literal das palavras. Isso é uma vantagem para o candidato que não domina todo o vocabulário.
        </p>
        <div className="lesson-highlight">
          <strong>Estratégia em 4 passos:</strong>
          <ol>
            <li><strong>Campo semântico:</strong> identifique o grupo de palavras que se relacionam
            (morte, noite, silêncio → tom melancólico; sol, flor, canto → tom alegre/vitalista).</li>
            <li><strong>Imagens poéticas:</strong> o que o poema mostra? Mesmo sem entender cada palavra,
            visualize o que está sendo descrito.</li>
            <li><strong>Tom emocional:</strong> o poema transmite alegria, tristeza, raiva, nostalgia,
            esperança? O tom guia a interpretação.</li>
            <li><strong>Contexto do autor:</strong> lembre-se do perfil do autor — um poema de Neruda
            sobre "tú" provavelmente fala de amor; um de García Lorca sobre "luna" provavelmente
            evoca morte ou destino.</li>
          </ol>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Campo semântico</th>
                <th>Palavras em espanhol</th>
                <th>Tom / Sentido provável</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morte / Tragédia</td>
                <td><em>muerte, sangre, luna, sombra, noche, silencio, frío</em></td>
                <td>Melancolia, destino inevitável, perda</td>
              </tr>
              <tr>
                <td>Amor / Paixão</td>
                <td><em>amor, corazón, tus ojos, beso, abrazo, querer, latir</em></td>
                <td>Intensidade afetiva, desejo, saudade</td>
              </tr>
              <tr>
                <td>Natureza / Vitalidade</td>
                <td><em>sol, viento, flor, río, tierra, verde, cantar</em></td>
                <td>Vida, energia, alegria, esperança</td>
              </tr>
              <tr>
                <td>Opressão / Luta</td>
                <td><em>cadenas, lucha, pueblo, grito, silencio, resistencia</em></td>
                <td>Crítica política, clamor por liberdade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 6 — Música hispânica */}
      <section className="lesson-section">
        <span className="section-kicker">Música e ENEM</span>
        <h2>Música hispânica como texto literário no ENEM</h2>
        <p>
          Letras de músicas em espanhol aparecem no ENEM como textos a serem interpretados, com as
          mesmas estratégias usadas para poesia. Conhecer os gêneros e seus contextos facilita muito.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎸</span>
            <h3>Nueva Canción</h3>
            <p>Movimento político-musical (anos 60-80): Violeta Parra, Mercedes Sosa, Silvio Rodríguez. Letras de protesto, identidade popular, resistência.</p>
          </div>
          <div className="lesson-card">
            <span>💃</span>
            <h3>Flamenco e Canción Española</h3>
            <p>Amor, dor, paixão, morte (<em>duende</em>). Letras com imagens intensas e vocabulário poético. García Lorca e o duende flamenco.</p>
          </div>
          <div className="lesson-card">
            <span>🥁</span>
            <h3>Salsa e Música Latina</h3>
            <p>Ritmos caribenhos com letras sobre cotidiano urbano, amor, identidade. Rubén Blades: letras de crônica social.</p>
          </div>
          <div className="lesson-card">
            <span>🎤</span>
            <h3>Pop e Rock en Español</h3>
            <p>Shakira, Juanes, Alejandro Sanz, Café Tacvba. Letras sobre amor contemporâneo, identidade, globalizaçao.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Dica de leitura de letra de música:</strong> identifique o <em>yo lírico</em> (eu lírico —
          quem fala) e o <em>tú</em> (a quem se dirige). Em músicas de amor, geralmente há um eu que fala
          para um tu ausente ou perdido. Em músicas políticas, o eu coletivo fala em nome do povo.
        </div>
      </section>

      {/* Seção 7 — Narrador e focalização */}
      <section className="lesson-section">
        <span className="section-kicker">Teoria Narrativa</span>
        <h2>Narrador e focalização em textos literários hispânicos</h2>
        <p>
          O ENEM frequentemente pede que o candidato identifique o tipo de narrador de um fragmento
          literário em espanhol.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Tipos de narrador em literatura hispânica">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="30" width="195" height="140" rx="8" fill="#dbeafe" />
            <text x="117" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Narrador Onisciente</text>
            <text x="117" y="78" textAnchor="middle" fontSize="10" fill="#1e40af">3ª pessoa</text>
            <text x="117" y="95" textAnchor="middle" fontSize="10" fill="#1e40af">Sabe tudo: pensamentos,</text>
            <text x="117" y="112" textAnchor="middle" fontSize="10" fill="#1e40af">passado e futuro</text>
            <text x="117" y="129" textAnchor="middle" fontSize="10" fill="#1e40af">Ex: García Márquez</text>
            <rect x="250" y="30" width="195" height="140" rx="8" fill="#d1fae5" />
            <text x="347" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Narrador-Personagem</text>
            <text x="347" y="78" textAnchor="middle" fontSize="10" fill="#065f46">1ª pessoa</text>
            <text x="347" y="95" textAnchor="middle" fontSize="10" fill="#065f46">Conta sua própria história</text>
            <text x="347" y="112" textAnchor="middle" fontSize="10" fill="#065f46">ponto de vista limitado</text>
            <text x="347" y="129" textAnchor="middle" fontSize="10" fill="#065f46">Ex: Vargas Llosa</text>
            <rect x="480" y="30" width="195" height="140" rx="8" fill="#fef3c7" />
            <text x="577" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Narrador Observador</text>
            <text x="577" y="78" textAnchor="middle" fontSize="10" fill="#92400e">3ª pessoa</text>
            <text x="577" y="95" textAnchor="middle" fontSize="10" fill="#92400e">Apenas registra fatos</text>
            <text x="577" y="112" textAnchor="middle" fontSize="10" fill="#92400e">não acessa pensamentos</text>
            <text x="577" y="129" textAnchor="middle" fontSize="10" fill="#92400e">Ex: Borges (às vezes)</text>
          </svg>
          <figcaption>Três tipos de narrador mais cobrados em literatura hispânica no ENEM.</figcaption>
        </figure>
        <div className="math-block">
          <strong>Dica ENEM — Identificando o narrador em espanhol:</strong>
          <ul>
            <li>Se o texto usa <em>yo / me / mi</em> predominantemente → narrador em 1ª pessoa (narrador-personagem).</li>
            <li>Se usa <em>él / ella / ellos</em> e descreve pensamentos dos personagens → narrador onisciente em 3ª pessoa.</li>
            <li>Se usa <em>él / ella</em> mas apenas descreve ações externas → narrador observador.</li>
            <li>Se usa <em>nosotros</em> → narrador coletivo (raro, mas existe em García Márquez).</li>
          </ul>
        </div>
      </section>

      {/* Seção 8 — Intertextualidade */}
      <section className="lesson-section">
        <span className="section-kicker">Relações entre Textos</span>
        <h2>Intertextualidade em textos literários hispânicos</h2>
        <p>
          A intertextualidade — quando um texto faz referência a outro — é muito cobrada no ENEM.
          Em literatura hispânica, as relações intertextuais mais comuns são:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Citação</h3>
            <p>Reprodução direta de outro texto. <em>"Como dijo Neruda: 'Puedo escribir los versos más tristes esta noche.'"</em></p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Paráfrase</h3>
            <p>Reescrita do texto de origem com palavras próprias, mantendo o sentido.</p>
          </div>
          <div className="lesson-card">
            <span>😂</span>
            <h3>Paródia</h3>
            <p>Imitação cômica ou crítica de um texto canônico. Usa a forma do original para subverter seu sentido.</p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Alusão</h3>
            <p>Referência indireta a outro texto, autor ou personagem sem citá-lo explicitamente. Exige repertório cultural do leitor.</p>
          </div>
        </div>
      </section>

      {/* Seção 9 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de recurso poético"
          statement={
            <p>
              Leia os versos de Neruda: <em>"Puedo escribir los versos más tristes esta noche. /
              Puedo escribir, por ejemplo: la noche está estrellada."</em>
              A repetição da expressão <em>"Puedo escribir"</em> no início dos versos constitui:
            </p>
          }
          options={[
            { letter: "a", text: "Aliteração: repetição de sons consonantais semelhantes." },
            { letter: "b", text: "Anáfora: repetição de palavra ou expressão no início de versos ou orações consecutivas.", correct: true },
            { letter: "c", text: "Sinestesia: fusão de dois sentidos diferentes numa imagem." },
            { letter: "d", text: "Hipérbato: inversão da ordem natural das palavras na frase." },
          ]}
          resolution={
            <p>
              <em>Anáfora</em> é a figura de linguagem que consiste na repetição de uma palavra ou expressão
              no início de versos, orações ou frases consecutivas. Aqui, <em>"Puedo escribir"</em> é repetido
              no início de versos diferentes, criando ritmo e ênfase emocional na capacidade/necessidade
              de escrever para lidar com a dor. Esse recurso é uma marca estilística de Neruda.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Realismo mágico"
          statement={
            <p>
              Leia: <em>"Esa noche, cuando Úrsula entró al cuarto, encontró a Remedios la Bella flotando
              a treinta centímetros del suelo, con los ojos cerrados y una expresión de paz absoluta.
              Los vecinos, acostumbrados ya a las singularidades de la familia, apenas si levantaron
              la mirada."</em>
              Que característica do realismo mágico está presente nesse fragmento?
            </p>
          }
          options={[
            { letter: "a", text: "O uso de linguagem científica para explicar o fenômeno sobrenatural." },
            { letter: "b", text: "A rejeição total dos eventos sobrenaturais pelos personagens, que fogem com medo." },
            { letter: "c", text: "A naturalização do sobrenatural: o evento extraordinário é aceito como corriqueiro pelos personagens.", correct: true },
            { letter: "d", text: "A crítica explícita do narrador ao comportamento irracional dos personagens." },
          ]}
          resolution={
            <p>
              A característica central do realismo mágico presente no fragmento é a naturalização do
              sobrenatural: Remedios flutua a 30 cm do chão, mas os vizinhos — <em>"acostumbrados ya a
              las singularidades"</em> — mal levantam os olhos. Não há explicação científica, não há fuga
              apavorada e não há julgamento do narrador. O extraordinário é tratado como parte do cotidiano
              da família Buendía — marca registrada de García Márquez.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Símbolo em García Lorca"
          statement={
            <p>
              Em García Lorca, a lua é um dos símbolos mais recorrentes. Leia:
              <em>"La luna vino a la fragua / con su polisón de nardos. / El niño la mira, mira. / El niño la está mirando."</em>
              (Romance de la luna, luna). Na poética lorquiana, a lua frequentemente simboliza:
            </p>
          }
          options={[
            { letter: "a", text: "Alegria e fertilidade: a lua ilumina a noite para que os agricultores trabalhem." },
            { letter: "b", text: "A passagem do tempo: a lua cheia indica o fim de um ciclo de plantio." },
            { letter: "c", text: "Morte e destino: a lua é presença ameaçadora que anuncia tragédia.", correct: true },
            { letter: "d", text: "Amor romântico: a lua como testemunha dos encontros amorosos noturnos." },
          ]}
          resolution={
            <p>
              Na poética de García Lorca, a lua é símbolo central de morte e destino inexorável.
              No <em>Romancero gitano</em>, a lua aparece como figura sedutora e mortal que leva a
              criança (o cigano, o inocente). A cena da fragua (forja) com o menino olhando hipnotizado
              é de tensão crescente — a lua é uma ameaça. Esse simbolismo lorquiano é cobrado frequentemente
              no ENEM, que apresenta poemas de Lorca com questões sobre o sentido dos símbolos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Narrador e ponto de vista"
          statement={
            <p>
              Leia o fragmento: <em>"Aquella tarde, mientras caminaba por las calles desiertas de
              Macondo, el coronel sintió que algo había cambiado para siempre en el mundo. No supo
              explicarlo, pero lo sintió en los huesos, en ese dolor sordo que le anunciaba siempre
              las lluvias."</em>
              O narrador desse fragmento é:
            </p>
          }
          options={[
            { letter: "a", text: "Narrador em 1ª pessoa: usa 'yo' e conta sua própria experiência." },
            { letter: "b", text: "Narrador onisciente em 3ª pessoa: acessa os sentimentos e sensações internas do personagem.", correct: true },
            { letter: "c", text: "Narrador observador: apenas descreve ações externas sem acessar o interior do personagem." },
            { letter: "d", text: "Narrador coletivo: fala em nome de toda a comunidade de Macondo." },
          ]}
          resolution={
            <p>
              O narrador usa a 3ª pessoa (<em>el coronel, sintió, supo, lo sintió</em>) e acessa
              diretamente os pensamentos e sensações do personagem (<em>"no supo explicarlo, pero lo
              sintió en los huesos"</em>). Isso caracteriza o narrador onisciente em 3ª pessoa — ele
              está fora da história, mas tem acesso total ao interior dos personagens. É o narrador
              mais usado por García Márquez.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Interpretação de letra de música"
          statement={
            <p>
              Leia a letra de Violeta Parra (Nueva Canción chilena):
              <em>"Gracias a la vida, que me ha dado tanto. / Me dio dos luceros, que cuando los abro,
              perfecto distingo lo negro del blanco."</em>
              A expressão <em>"dos luceros"</em> refere-se a:
            </p>
          }
          options={[
            { letter: "a", text: "Duas estrelas que a cantora observa no céu noturno como símbolo de esperança." },
            { letter: "b", text: "Os olhos da cantora, usados metaforicamente para expressar a capacidade de ver o mundo.", correct: true },
            { letter: "c", text: "Dois testemunhos/filhos que a vida lhe deu como presentes concretos." },
            { letter: "d", text: "Os faróis de um automóvel que iluminam o caminho metafórico da vida." },
          ]}
          resolution={
            <p>
              <em>Luceros</em> é uma metáfora — em espanhol literário, <em>lucero</em> (estrela brilhante)
              é usado poeticamente para referir-se aos olhos. O verso seguinte confirma: <em>"cuando los
              abro, perfecto distingo lo negro del blanco"</em> — só os olhos se "abrem" para distinguir
              cores. Violeta Parra usa essa metáfora para agradecer a dádiva da visão, seguindo o tom geral
              da canção de gratidão pelas capacidades humanas simples.
            </p>
          }
        />
      </section>
    </article>
  );
}
