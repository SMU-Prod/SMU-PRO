"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 25</span>
          <h1>Interpretação de tirinhas, charges, quadrinhos e memes</h1>
          <p>
            Textos multimodais — aqueles que combinam linguagem verbal e não-verbal —
            são presença garantida nas provas de inglês do ENEM. Tirinhas, charges,
            quadrinhos e memes exigem uma leitura integrada: o sentido completo só
            emerge quando texto e imagem são interpretados juntos.
          </p>
          <p>
            Neste capítulo você vai aprender como funciona o humor em tirinhas,
            como identificar crítica social em charges, como ler a estrutura
            narrativa de quadrinhos e como o ENEM usa memes para testar
            compreensão de ironia e referências culturais.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura do humor</span>
        <h2>1. Como Funciona o Humor em Tirinhas</h2>
        <p>
          Toda tirinha humorística segue uma lógica previsível: há uma
          <strong> expectativa criada</strong> e depois uma <strong>quebra dessa
          expectativa</strong>. Em inglês essa estrutura é chamada de{" "}
          <em>setup</em> (preparação) e <em>punchline</em> (golpe final).
          O humor nasce do contraste entre o que o leitor espera e o que
          realmente acontece no último quadrinho.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎬</span>
            <h3>Setup</h3>
            <p>Quadrinhos iniciais que estabelecem contexto, personagens e expectativa.</p>
          </div>
          <div className="lesson-card">
            <span>💥</span>
            <h3>Punchline</h3>
            <p>Último quadrinho ou fala que quebra a expectativa, gerando o efeito cômico.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Inversão</h3>
            <p>O sentido esperado é subvertido — palavra com duplo sentido, situação absurda ou ironia.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Contexto cultural</h3>
            <p>Referências culturais amplificam o humor — reconhecê-las ajuda, mas não é obrigatório para o ENEM.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Estratégia ENEM:</strong> Identifique o que muda do primeiro para o último
          quadrinho. A diferença entre o esperado e o que acontece é exatamente onde o
          ENEM vai perguntar.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem visual</span>
        <h2>2. Elementos Visuais que Carregam Sentido</h2>
        <p>
          Em tirinhas e quadrinhos, a imagem não é decoração — ela é parte
          essencial do texto. O ENEM cobra justamente a capacidade de ler
          esses elementos visuais como se fossem palavras.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento visual</th>
                <th>O que comunica</th>
                <th>Exemplo de leitura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expressão facial</td>
                <td>Emoção do personagem (raiva, surpresa, ironia)</td>
                <td>Sorriso sarcástico = personagem não acredita no que diz</td>
              </tr>
              <tr>
                <td>Balão de fala</td>
                <td>Diálogo direto, pensamento (oval/nuvem), sussurro (tracejado)</td>
                <td>Balão com raios = personagem gritando</td>
              </tr>
              <tr>
                <td>Onomatopeias</td>
                <td>Sons representados graficamente (BANG, CRASH, HA HA)</td>
                <td>HA HA HA = riso exagerado, pode indicar ironia ou escárnio</td>
              </tr>
              <tr>
                <td>Tamanho das letras</td>
                <td>Ênfase, volume, urgência</td>
                <td>Letras maiores = voz mais alta ou palavra importante</td>
              </tr>
              <tr>
                <td>Postura corporal</td>
                <td>Atitude do personagem (confiança, medo, submissão)</td>
                <td>Ombros caídos = derrota ou desânimo</td>
              </tr>
              <tr>
                <td>Linhas de movimento</td>
                <td>Velocidade, agitação, impacto</td>
                <td>Linhas ao redor de objeto = movimento rápido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crítica social</span>
        <h2>3. Charges em Inglês — Ironia e Posicionamento</h2>
        <p>
          A charge é um texto de <strong>opinião visual</strong>. Ela não descreve
          a realidade — ela a comenta de forma crítica, usando exagero, ironia e
          símbolos. O ENEM usa charges em inglês para testar se o candidato
          consegue identificar o alvo da crítica e a posição do autor.
        </p>
        <p>
          Diferentemente da tirinha, que normalmente busca apenas o humor,
          a charge tem sempre uma <strong>intenção argumentativa</strong>: defender
          ou criticar algo. O exagero (caricatura) é o recurso principal.
        </p>
        <div className="lesson-highlight">
          <strong>Perguntas-chave para charges:</strong> "Quem está sendo criticado?"
          e "Qual é a opinião do autor sobre esse assunto?" — essas duas perguntas
          respondem praticamente todas as questões de charge do ENEM.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Caricatura</h3>
            <p>Exagero físico de personagens reais para destacar seus defeitos ou posições.</p>
          </div>
          <div className="lesson-card">
            <span>🔣</span>
            <h3>Símbolos</h3>
            <p>Objetos com significado fixo: cifrão = dinheiro/ganância, caveira = morte/perigo.</p>
          </div>
          <div className="lesson-card">
            <span>😏</span>
            <h3>Ironia</h3>
            <p>Dizer o contrário do que se quer comunicar — o alvo da ironia é sempre o criticado.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Contexto histórico</h3>
            <p>Charges são datadas — o contexto político/social amplifica o sentido, mas o ENEM fornece contexto suficiente no enunciado.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Narrativa visual</span>
        <h2>4. Quadrinhos (Comics) — Painéis e Sequência</h2>
        <p>
          Quadrinhos narram histórias por meio de uma sequência de painéis.
          A leitura é linear (da esquerda para a direita, de cima para baixo)
          e o <strong>espaço entre os painéis</strong> (chamado de <em>gutter</em>
          em inglês) é onde o leitor constrói mentalmente a ação que aconteceu
          entre um quadro e outro. Isso exige inferência — habilidade central no ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Nome em inglês</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quadro</td>
                <td>Panel</td>
                <td>Unidade básica da narrativa visual</td>
              </tr>
              <tr>
                <td>Espaço entre quadros</td>
                <td>Gutter</td>
                <td>Leitor infere a ação não mostrada</td>
              </tr>
              <tr>
                <td>Balão de fala</td>
                <td>Speech bubble</td>
                <td>Diálogo dos personagens</td>
              </tr>
              <tr>
                <td>Caixa de texto</td>
                <td>Caption box</td>
                <td>Narrador externo, contexto temporal ou espacial</td>
              </tr>
              <tr>
                <td>Efeito sonoro</td>
                <td>Sound effect / Onomatopoeia</td>
                <td>Representação visual de sons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cultura digital</span>
        <h2>5. Memes em Inglês — Ironia, Referências e o ENEM</h2>
        <p>
          Memes são textos digitais que combinam imagem e texto de forma irônica
          ou humorística, circulando em redes sociais. O ENEM passou a usar memes
          nas provas de língua estrangeira a partir das últimas edições, refletindo
          a importância da comunicação digital como gênero textual relevante.
        </p>
        <p>
          A chave para interpretar memes é entender a <strong>relação entre a
          imagem e o texto escrito</strong>. Frequentemente, o texto e a imagem
          criam sentido por contraste ou complementação. A ironia é o recurso
          mais comum — o meme diz uma coisa mas quer dizer outra.
        </p>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Para memes, pergunte-se: "O texto confirma ou
          contraria o que a imagem mostra?" Se contraria, provavelmente há ironia.
          O ENEM costuma perguntar justamente sobre essa relação entre o verbal e o visual.
        </div>
      </section>

      {/* ── SEÇÃO 6 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>6. Mapa dos Textos Multimodais no ENEM</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            aria-label="Mapa comparativo dos textos multimodais cobrados no ENEM: tirinhas, charges, quadrinhos e memes"
            role="img"
          >
            {/* Título central */}
            <rect x="230" y="10" width="240" height="40" rx="20" fill="#4f46e5" />
            <text x="350" y="35" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">TEXTOS MULTIMODAIS</text>

            {/* Tirinha */}
            <rect x="20" y="80" width="145" height="130" rx="10" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
            <text x="92" y="105" textAnchor="middle" fill="#3730a3" fontSize="13" fontWeight="bold">TIRINHA</text>
            <text x="92" y="125" textAnchor="middle" fill="#3730a3" fontSize="11">Setup + Punchline</text>
            <text x="92" y="143" textAnchor="middle" fill="#3730a3" fontSize="11">Humor verbal/visual</text>
            <text x="92" y="161" textAnchor="middle" fill="#3730a3" fontSize="11">Personagens fixos</text>
            <text x="92" y="179" textAnchor="middle" fill="#3730a3" fontSize="11">3–4 quadros</text>
            <text x="92" y="197" textAnchor="middle" fill="#3730a3" fontSize="11">Ex: Peanuts, Garfield</text>

            {/* Charge */}
            <rect x="185" y="80" width="145" height="130" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="257" y="105" textAnchor="middle" fill="#9d174d" fontSize="13" fontWeight="bold">CHARGE</text>
            <text x="257" y="125" textAnchor="middle" fill="#9d174d" fontSize="11">Crítica política/social</text>
            <text x="257" y="143" textAnchor="middle" fill="#9d174d" fontSize="11">Caricatura + ironia</text>
            <text x="257" y="161" textAnchor="middle" fill="#9d174d" fontSize="11">Sem personagens fixos</text>
            <text x="257" y="179" textAnchor="middle" fill="#9d174d" fontSize="11">1 quadro, geralmente</text>
            <text x="257" y="197" textAnchor="middle" fill="#9d174d" fontSize="11">Datada/contextual</text>

            {/* Quadrinhos */}
            <rect x="350" y="80" width="145" height="130" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="422" y="105" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">QUADRINHOS</text>
            <text x="422" y="125" textAnchor="middle" fill="#065f46" fontSize="11">Narrativa longa</text>
            <text x="422" y="143" textAnchor="middle" fill="#065f46" fontSize="11">Múltiplos painéis</text>
            <text x="422" y="161" textAnchor="middle" fill="#065f46" fontSize="11">Personagens heróis</text>
            <text x="422" y="179" textAnchor="middle" fill="#065f46" fontSize="11">Gutter (inferência)</text>
            <text x="422" y="197" textAnchor="middle" fill="#065f46" fontSize="11">Ex: Marvel, DC</text>

            {/* Meme */}
            <rect x="515" y="80" width="165" height="130" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="597" y="105" textAnchor="middle" fill="#713f12" fontSize="13" fontWeight="bold">MEME</text>
            <text x="597" y="125" textAnchor="middle" fill="#713f12" fontSize="11">Texto digital viral</text>
            <text x="597" y="143" textAnchor="middle" fill="#713f12" fontSize="11">Imagem + legenda</text>
            <text x="597" y="161" textAnchor="middle" fill="#713f12" fontSize="11">Ironia frequente</text>
            <text x="597" y="179" textAnchor="middle" fill="#713f12" fontSize="11">Referências culturais</text>
            <text x="597" y="197" textAnchor="middle" fill="#713f12" fontSize="11">Redes sociais</text>

            {/* Linhas do centro para cada box */}
            <line x1="350" y1="50" x2="92" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="350" y1="50" x2="257" y2="80" stroke="#db2777" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="350" y1="50" x2="422" y2="80" stroke="#059669" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="350" y1="50" x2="597" y2="80" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4" />

            {/* Rodapé */}
            <rect x="150" y="230" width="400" height="36" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <text x="350" y="248" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">Todos cobram: leitura integrada verbal + não-verbal</text>
            <text x="350" y="262" textAnchor="middle" fill="#374151" fontSize="11">O ENEM testa inferência, intenção comunicativa e posicionamento</text>
          </svg>
          <figcaption>Comparativo dos quatro tipos de texto multimodal presentes nas provas de inglês do ENEM, com suas características e o que cada um costuma exigir do candidato.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica de leitura</span>
        <h2>7. Como Ler Textos Multimodais no ENEM</h2>
        <p>
          Ao encontrar uma tirinha, charge ou meme na prova, siga esta sequência:
        </p>
        <ol>
          <li>
            <strong>Leia o enunciado primeiro.</strong> O enunciado revela o foco
            da questão — humor, intenção, crítica, vocabulário? Isso orienta sua leitura.
          </li>
          <li>
            <strong>Observe a imagem antes de ler o texto.</strong> Quem são os
            personagens? Qual é o cenário? Qual é a emoção expressa?
          </li>
          <li>
            <strong>Leia o texto (balões, legendas, slogans).</strong> Relacione
            o que está escrito com o que a imagem mostra.
          </li>
          <li>
            <strong>Identifique o último quadro.</strong> Em tirinhas, o humor
            está no final. Em charges, a crítica está no elemento mais exagerado.
          </li>
          <li>
            <strong>Pergunte: "Qual é a intenção comunicativa?"</strong>
            Fazer rir? Criticar? Ironizar? Persuadir?
          </li>
        </ol>
        <div className="lesson-highlight">
          <strong>Armadilha frequente:</strong> Não projete sua interpretação sobre
          a imagem. A resposta correta está no texto — o que o texto diz explicitamente
          ou implicitamente, não o que você acha engraçado ou chocante.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>8. Os Erros mais Comuns em Questões de Tirinhas e Charges</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Armadilha</th>
                <th>Descrição</th>
                <th>Como evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Projeção do humor</td>
                <td>Candidato acha algo engraçado por razão pessoal, não pelo texto</td>
                <td>Identifique o mecanismo do humor: onde está o contraste ou a inversão?</td>
              </tr>
              <tr>
                <td>Ignorar a imagem</td>
                <td>Ler apenas o texto verbal e ignorar o que a imagem acrescenta</td>
                <td>Em textos multimodais, sentido = texto + imagem juntos</td>
              </tr>
              <tr>
                <td>Generalizar a crítica</td>
                <td>Dizer que a charge critica "a sociedade" sem precisar o alvo</td>
                <td>Identifique quem ou o quê especificamente está sendo caricaturado</td>
              </tr>
              <tr>
                <td>Confundir ironia com literalidade</td>
                <td>Tomar o que está escrito ao pé da letra quando é irônico</td>
                <td>Se o contexto contradiz o texto, há ironia — procure a contradição</td>
              </tr>
              <tr>
                <td>Ignorar referência cultural</td>
                <td>Não reconhecer o personagem ou contexto histórico da charge</td>
                <td>O ENEM sempre fornece informação suficiente no enunciado ou na imagem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Estrutura da tirinha"
          statement={
            <p>
              Em uma tirinha em inglês publicada no ENEM, os três primeiros quadros
              mostram um personagem planejando um piquenique perfeito: sol, cesta de
              comida, parque verde. No quarto e último quadro, uma legenda diz{" "}
              <em>"It rained all day."</em> (Choveu o dia todo.), e o personagem
              aparece sentado dentro de casa, olhando pela janela. O efeito de humor
              nessa tirinha resulta de:
            </p>
          }
          options={[
            { letter: "A", text: "A tradução literal da frase 'It rained all day'." },
            { letter: "B", text: "O vocabulário difícil usado na tirinha." },
            { letter: "C", text: "O contraste entre a expectativa criada nos quadros iniciais e o desfecho inesperado no último quadro.", correct: true },
            { letter: "D", text: "A expressão facial do personagem nos três primeiros quadros." },
            { letter: "E", text: "A ausência de diálogo na tirinha." },
          ]}
          resolution={
            <p>
              O humor em tirinhas nasce da estrutura <em>setup</em> (expectativa)
              e <em>punchline</em> (quebra da expectativa). Os três primeiros quadros
              criam a expectativa de um piquenique perfeito; o último quadro quebra
              essa expectativa com a chuva. É exatamente esse contraste que produz
              o efeito cômico — a alternativa C captura esse mecanismo com precisão.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Elementos visuais na tirinha"
          statement={
            <p>
              Em uma tirinha, um personagem fala com balões de texto cada vez maiores,
              enquanto a expressão facial do interlocutor vai de neutra para assustada.
              A legenda final diz: <em>"He just couldn't stop talking."</em> (Ele
              simplesmente não conseguia parar de falar.) O aumento progressivo do
              tamanho dos balões serve principalmente para indicar:
            </p>
          }
          options={[
            { letter: "A", text: "Que o personagem está falando em voz cada vez mais baixa." },
            { letter: "B", text: "Que o personagem está ficando com raiva." },
            { letter: "C", text: "O crescimento da quantidade e intensidade da fala do personagem ao longo do tempo.", correct: true },
            { letter: "D", text: "Que o texto está em um idioma diferente do inglês." },
            { letter: "E", text: "Que os quadros posteriores são mais importantes que os anteriores." },
          ]}
          resolution={
            <p>
              Em quadrinhos, o tamanho do balão de fala é proporcional ao volume
              e à quantidade do que é dito. Balões progressivamente maiores + expressão
              do interlocutor se tornando assustada + a legenda final formam um
              conjunto coerente: o personagem fala cada vez mais e mais, sem parar.
              A alternativa C é a única que captura essa função visual do elemento.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Ironia em charges"
          statement={
            <p>
              Uma charge em inglês publicada em jornal americano mostra um político
              discursando para a plateia com um banner atrás que diz{" "}
              <em>"Protecting the Environment"</em> (Protegendo o Meio Ambiente),
              enquanto ao fundo se vê uma fábrica com chaminés expelindo fumaça preta.
              A charge critica principalmente:
            </p>
          }
          options={[
            { letter: "A", text: "A poluição industrial como fenômeno natural inevitável." },
            { letter: "B", text: "A plateia que assiste ao discurso sem questionar o político." },
            { letter: "C", text: "A contradição entre o discurso ambiental do político e suas ações reais, usando ironia visual.", correct: true },
            { letter: "D", text: "A qualidade do ar nas cidades americanas em geral." },
            { letter: "E", text: "O uso de banners em campanhas políticas como estratégia de marketing." },
          ]}
          resolution={
            <p>
              A charge usa o recurso clássico da <strong>contradição visual</strong>:
              o texto verbal (<em>Protecting the Environment</em>) afirma uma coisa,
              enquanto a imagem ao fundo (fábrica poluindo) mostra o oposto. Isso
              gera ironia — o sentido real é o contrário do que está escrito.
              A charge critica a hipocrisia do político: fala em preservação
              ambiental enquanto suas ações indicam o contrário. A alternativa C
              é a única que captura o alvo e o mecanismo crítico corretamente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Meme e intenção comunicativa"
          statement={
            <div>
              <p>
                <em>(Baseado em situação típica do ENEM)</em>
              </p>
              <p>
                Um meme em inglês traz a imagem de um homem sorrindo aliviado, com
                o seguinte texto sobreposto:{" "}
                <strong>"When you finish studying for the exam... then realize it's tomorrow, not today."</strong>
                (Quando você termina de estudar para a prova... aí percebe que é amanhã, não hoje.)
              </p>
              <p>A intenção comunicativa desse meme é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Criticar estudantes que estudam na véspera de provas." },
            { letter: "B", text: "Informar sobre a importância de verificar datas de provas com antecedência." },
            { letter: "C", text: "Expressar, de forma humorística, o sentimento de alívio seguido de frustração ao descobrir um engano sobre a data da prova.", correct: true },
            { letter: "D", text: "Persuadir estudantes a estudarem com mais antecedência." },
            { letter: "E", text: "Narrar uma experiência pessoal do criador do meme." },
          ]}
          resolution={
            <p>
              O meme combina imagem (homem aliviado) e texto (situação de engano
              sobre a data). A imagem mostra o alívio de ter acabado de estudar;
              o texto revela a frustração de perceber que estudou um dia antes do
              necessário. O humor vem do contraste entre o alívio da imagem e o
              conteúdo do texto — situação cômica e universalmente reconhecível.
              A função não é criticar, informar nem persuadir, mas gerar
              identificação e humor — alternativa C.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Quadrinhos e inferência"
          statement={
            <div>
              <p>
                <em>(Questão baseada em situação típica do ENEM)</em>
              </p>
              <p>
                Em uma sequência de quadrinhos em inglês, o primeiro painel mostra
                uma criança plantando uma semente; o segundo painel está em branco
                (representa o tempo passando — o <em>gutter</em>); o terceiro painel
                mostra a criança adulta colhendo frutas de uma árvore alta. A
                sequência transmite principalmente a ideia de:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "A diferença física entre crianças e adultos em diferentes culturas." },
            { letter: "B", text: "A importância de comer frutas para o crescimento saudável." },
            { letter: "C", text: "O processo de crescimento e o resultado do esforço ao longo do tempo, usando o painel em branco para indicar passagem de tempo.", correct: true },
            { letter: "D", text: "A facilidade com que árvores crescem em ambientes rurais." },
            { letter: "E", text: "A nostalgia da infância em contraste com a vida adulta." },
          ]}
          resolution={
            <p>
              O <em>gutter</em> (painel em branco entre os outros dois) exige que
              o leitor infira o que aconteceu: o tempo passou e a semente cresceu.
              A sequência completa — plantar → tempo passa → colher — comunica
              uma metáfora sobre esforço e recompensa: o que se planta com dedicação
              gera resultados no futuro. A alternativa C é a única que captura
              tanto o mecanismo narrativo (gutter como passagem de tempo) quanto
              o sentido simbólico da sequência.
            </p>
          }
        />
      </section>
    </article>
  );
}
