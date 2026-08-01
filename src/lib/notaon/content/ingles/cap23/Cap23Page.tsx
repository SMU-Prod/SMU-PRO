"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 23</span>
          <h1>Inferência, Opinião, Humor, Ironia e Intenção Comunicativa</h1>
          <p>
            As questões mais sofisticadas do ENEM exigem que o candidato vá além da superfície
            do texto: é preciso identificar o que o autor pensa, reconhecer quando ele está
            sendo irônico ou bem-humorado, e compreender por que aquele texto foi escrito.
            Este capítulo desenvolve essas habilidades com exemplos reais de textos em inglês.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de Inferência</span>
        <h2>1. Os Três Tipos de Inferência em Inglês</h2>
        <p>
          Nem toda inferência é igual. O ENEM cobra diferentes graus de complexidade
          inferencial. Conhecer os tipos ajuda a saber que tipo de raciocínio é necessário
          para cada questão.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Inferência Lógica (Dedução)</h3>
            <p>
              Decorre da lógica formal. Se o texto diz A e B, e a lógica conecta A+B → C,
              então C pode ser inferido. Exemplo: "All mammals breathe air. Dolphins are
              mammals." → Inferência: Dolphins breathe air. É necessária, não apenas possível.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Inferência Pragmática</h3>
            <p>
              Baseia-se no contexto da comunicação — o que normalmente se entende em
              uma situação. Exemplo: alguém diz "It's cold in here" em uma sala com janela
              aberta → pragma: ela quer que a janela seja fechada. Vai além do sentido literal.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Inferência Cultural</h3>
            <p>
              Requer conhecimento compartilhado de mundo ou da cultura anglófona. Uma tirinha
              que referencia um personagem famoso americano ou uma expressão culturalmente
              específica só pode ser entendida com esse conhecimento de fundo.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Base</th>
                <th>Grau de dificuldade</th>
                <th>Exemplo no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lógica</td>
                <td>Relação entre afirmações do texto</td>
                <td>Médio</td>
                <td>Se A causa B e B causa C, então A causa C</td>
              </tr>
              <tr>
                <td>Pragmática</td>
                <td>Contexto da situação comunicativa</td>
                <td>Médio-alto</td>
                <td>Subentendidos em diálogos, tirinhas, charges</td>
              </tr>
              <tr>
                <td>Cultural</td>
                <td>Conhecimento de mundo / referências</td>
                <td>Alto</td>
                <td>Memes, humor, alusões históricas ou pop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Opinião</span>
        <h2>2. Marcadores de Opinião em Inglês</h2>
        <p>
          Identificar quando o autor está dando uma opinião — e não um fato — é fundamental
          para interpretar textos argumentativos, editoriais e artigos de opinião. O inglês
          usa marcadores específicos para sinalizar subjetividade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama de marcadores de opinião em inglês organizados por grau de certeza">
            <rect x="0" y="0" width="700" height="230" rx="10" fill="#fafafa" stroke="#e2e8f0" strokeWidth="2"/>
            <text x="350" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Marcadores de Opinião — Gradação de Certeza</text>
            {/* Gradient bar */}
            <defs>
              <linearGradient id="certaintyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fecaca"/>
                <stop offset="50%" stopColor="#fef9c3"/>
                <stop offset="100%" stopColor="#bbf7d0"/>
              </linearGradient>
            </defs>
            <rect x="30" y="45" width="640" height="30" rx="15" fill="url(#certaintyGrad)" stroke="#e2e8f0"/>
            <text x="30" y="93" fontSize="10" fill="#dc2626" fontWeight="bold">INCERTO</text>
            <text x="590" y="93" fontSize="10" fill="#16a34a" fontWeight="bold">CERTO</text>
            {/* Markers */}
            <text x="30" y="115" fontSize="9" fill="#374151">it seems that</text>
            <text x="30" y="128" fontSize="9" fill="#374151">it appears that</text>
            <text x="30" y="141" fontSize="9" fill="#374151">one might argue</text>
            <text x="160" y="115" fontSize="9" fill="#374151">I believe / I think</text>
            <text x="160" y="128" fontSize="9" fill="#374151">in my opinion</text>
            <text x="160" y="141" fontSize="9" fill="#374151">to my mind</text>
            <text x="290" y="115" fontSize="9" fill="#374151">arguably</text>
            <text x="290" y="128" fontSize="9" fill="#374151">arguably the most</text>
            <text x="290" y="141" fontSize="9" fill="#374151">some would say</text>
            <text x="420" y="115" fontSize="9" fill="#374151">I strongly believe</text>
            <text x="420" y="128" fontSize="9" fill="#374151">there is no doubt</text>
            <text x="420" y="141" fontSize="9" fill="#374151">it is clear that</text>
            <text x="550" y="115" fontSize="9" fill="#374151">it is obvious that</text>
            <text x="550" y="128" fontSize="9" fill="#374151">undoubtedly</text>
            <text x="550" y="141" fontSize="9" fill="#374151">certainly</text>
            {/* Fact vs Opinion line */}
            <line x1="30" y1="165" x2="670" y2="165" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4"/>
            <text x="350" y="183" textAnchor="middle" fontSize="11" fill="#6b7280">
              FATO: "Studies show..." / "According to data..." / "Research indicates..."
            </text>
            <text x="350" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">
              OPINIÃO: "In my view..." / "I feel that..." / "It seems to me..."
            </text>
          </svg>
          <figcaption>Gradação de certeza nos marcadores de opinião em inglês: de incerto a certeza plena</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Atenção: fato vs. opinião no ENEM</h3>
          <p>
            O ENEM frequentemente pergunta se uma afirmação no texto é um fato ou uma opinião.
            Fatos podem ser verificados; opiniões refletem julgamentos subjetivos. "The Amazon
            rainforest covers 5.5 million km²" é fato verificável. "The Amazon is the most
            important ecosystem on Earth" é opinião (mesmo que amplamente compartilhada).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Humor</span>
        <h2>3. Humor em Textos de Língua Inglesa</h2>
        <p>
          O humor em inglês é um dos elementos mais cobrados no ENEM — especialmente em
          tirinhas e charges. Conhecer os mecanismos de produção do humor é essencial para
          responder a questões sobre o <em>efeito cômico</em> ou <em>punch line</em>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Pun (Trocadilho)</h3>
            <p>
              Jogo com o duplo sentido de uma palavra ou com palavras de som semelhante.
              Exemplo: "Time flies like an arrow. Fruit flies like a banana." — "flies" tem
              dois sentidos (voar / moscas de fruta) e "like" também (semelhante a / gostar de).
            </p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Wordplay (Jogo de Palavras)</h3>
            <p>
              Manipulação criativa da linguagem para criar efeito cômico, incluindo rimas,
              aliterações e referências a expressões idiomáticas. Ex.: uma tirinha em que
              um banco quebra e o personagem diz "I guess this is what they mean by 'losing
              your balance'". (balance = equilíbrio / saldo bancário)
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Cultural Humor (Humor Cultural)</h3>
            <p>
              Baseado em referências específicas da cultura anglófona: política, celebridades,
              eventos históricos, costumes sociais. Exemplo: piadas sobre o fuso horário
              britânico, o sotaque americano do Sul, ou eventos específicos dos EUA/UK.
            </p>
          </div>
          <div className="lesson-card">
            <span>😮</span>
            <h3>Absurd Humor (Humor Absurdo)</h3>
            <p>
              Cria comicidade pela quebra total da lógica ou da expectativa. Muito comum em
              tirinhas estilo surreal. O leitor ri porque a situação é completamente ilógica
              ou inesperada — como um peixe que vai ao banco pedir empréstimo.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Mecanismo</th>
                <th>Como funciona</th>
                <th>Exemplo</th>
                <th>Tradução / Explicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pun</td>
                <td>Duplo sentido de palavra</td>
                <td><em>"I used to be a banker, but I lost interest."</em></td>
                <td>lost interest = perdi o interesse / perdi os juros</td>
              </tr>
              <tr>
                <td>Irony</td>
                <td>Diz o oposto do que pensa</td>
                <td><em>"Oh, great, another Monday."</em></td>
                <td>"Ótimo" dito com tom negativo sobre segunda-feira</td>
              </tr>
              <tr>
                <td>Sarcasm</td>
                <td>Ironia agressiva/crítica</td>
                <td><em>"Wow, what a brilliant idea!" (sobre ideia ruim)</em></td>
                <td>Elogio sarcástico que na verdade critica</td>
              </tr>
              <tr>
                <td>Understatement</td>
                <td>Minimiza algo grande</td>
                <td><em>"The Titanic had a bit of a rough crossing."</em></td>
                <td>Eufemismo cômico para o naufrágio do Titanic</td>
              </tr>
              <tr>
                <td>Absurdism</td>
                <td>Quebra total de lógica</td>
                <td><em>A chair complaining about people sitting on it.</em></td>
                <td>Humor pelo absurdo da situação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ironia</span>
        <h2>4. Ironia Verbal e Ironia Situacional</h2>
        <p>
          A ironia é um dos recursos mais importantes nas questões do ENEM que envolvem
          tirinhas, charges e textos de opinião em inglês. É fundamental distinguir os dois
          tipos principais:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💬</span>
            <h3>Ironia Verbal (Verbal Irony)</h3>
            <p>
              O autor diz uma coisa, mas quer dizer o oposto. O contexto e o tom revelam
              o sentido real. Exemplo: após uma chuva torrencial que arruinou um piquenique,
              alguém diz <em>"Perfect weather for a picnic!"</em> — a frase é o oposto do
              que realmente sente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ironia Situacional (Situational Irony)</h3>
            <p>
              Ocorre quando o que acontece é o oposto do que se esperava. Exemplo clássico:
              um bombeiro cujas casa pega fogo; um professor de saúde que é sedentário; uma
              charge em que um político anti-corrupção é preso por corrupção.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Como identificar ironia em inglês</h3>
          <p>
            Pistas linguísticas de ironia: uso de advérbios como <em>obviously, clearly,
            certainly</em> em contexto negativo; adjetivos positivos em contexto negativo
            (<em>wonderful, brilliant, great</em>); contraste entre tom e conteúdo;
            exclamações em situações negativas. Em tirinhas, o tom irônico aparece na
            expressão do personagem ou na situação visual.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Intenção Comunicativa</span>
        <h2>5. Intenção Comunicativa: Por Que o Texto Foi Escrito?</h2>
        <p>
          Todo texto tem uma <strong>finalidade</strong> (purpose). Identificar a intenção
          comunicativa é uma das habilidades centrais avaliadas pelo ENEM. As principais
          intenções são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Intenção</th>
                <th>Em inglês</th>
                <th>Gêneros típicos</th>
                <th>Pistas linguísticas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Informar</strong></td>
                <td>to inform</td>
                <td>Notícias, artigos científicos, verbetes</td>
                <td>Linguagem objetiva, dados, datas, passiva impessoal</td>
              </tr>
              <tr>
                <td><strong>Persuadir</strong></td>
                <td>to persuade</td>
                <td>Propaganda, editorial, carta aberta, discurso</td>
                <td>Imperativo, apelos emocionais, argumentação</td>
              </tr>
              <tr>
                <td><strong>Criticar</strong></td>
                <td>to criticize</td>
                <td>Charge, sátira, crônica, artigo de opinião</td>
                <td>Ironia, sarcasmo, linguagem avaliativa negativa</td>
              </tr>
              <tr>
                <td><strong>Entreter</strong></td>
                <td>to entertain</td>
                <td>Conto, tirinha, humor, crônica cômica</td>
                <td>Narrativa, diálogo, humor, punch line</td>
              </tr>
              <tr>
                <td><strong>Instruir</strong></td>
                <td>to instruct</td>
                <td>Manual, bula, receita, tutorial</td>
                <td>Imperativo, numeração de passos, verbos de ação</td>
              </tr>
              <tr>
                <td><strong>Conscientizar</strong></td>
                <td>to raise awareness</td>
                <td>Campanha social, folheto, discurso</td>
                <td>Apelo emocional, dados alarmantes, chamada à ação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tom e Registro</span>
        <h2>6. Tom e Registro: Como o Autor Diz o Que Diz</h2>
        <p>
          O <strong>tom</strong> é a atitude do autor em relação ao assunto e ao leitor.
          O <strong>registro</strong> é o nível de formalidade da linguagem. Ambos revelam
          pistas sobre a intenção comunicativa.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa de tons em textos em inglês organizados por formalidade e atitude">
            <rect x="0" y="0" width="700" height="220" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            <text x="350" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Mapa de Tons em Inglês</text>
            {/* Axes */}
            <line x1="350" y1="40" x2="350" y2="210" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
            <line x1="30" y1="125" x2="670" y2="125" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
            <text x="350" y="55" textAnchor="middle" fontSize="10" fill="#6b7280">FORMAL</text>
            <text x="350" y="215" textAnchor="middle" fontSize="10" fill="#6b7280">INFORMAL</text>
            <text x="35" y="129" fontSize="10" fill="#6b7280">NEGATIVO</text>
            <text x="620" y="129" fontSize="10" fill="#6b7280">POSITIVO</text>
            {/* Tone bubbles */}
            <circle cx="200" cy="75" r="28" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="200" y="72" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">critical</text>
            <text x="200" y="84" textAnchor="middle" fontSize="9" fill="#dc2626">crítico</text>
            <circle cx="500" cy="75" r="28" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="500" y="72" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">optimistic</text>
            <text x="500" y="84" textAnchor="middle" fontSize="9" fill="#16a34a">otimista</text>
            <circle cx="250" cy="75" r="26" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="250" y="72" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="bold">ironic</text>
            <text x="250" y="84" textAnchor="middle" fontSize="9" fill="#d97706">irônico</text>
            <circle cx="450" cy="80" r="26" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="450" y="77" textAnchor="middle" fontSize="9" fill="#7c3aed" fontWeight="bold">persuasive</text>
            <text x="450" y="89" textAnchor="middle" fontSize="9" fill="#7c3aed">persuasivo</text>
            <circle cx="180" cy="170" r="26" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="180" y="167" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">sarcastic</text>
            <text x="180" y="179" textAnchor="middle" fontSize="9" fill="#dc2626">sarcástico</text>
            <circle cx="350" cy="75" r="24" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5"/>
            <text x="350" y="72" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="bold">neutral</text>
            <text x="350" y="84" textAnchor="middle" fontSize="9" fill="#475569">neutro</text>
            <circle cx="520" cy="170" r="26" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="520" y="167" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">humorous</text>
            <text x="520" y="179" textAnchor="middle" fontSize="9" fill="#16a34a">humorístico</text>
            <circle cx="410" cy="165" r="24" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="410" y="162" textAnchor="middle" fontSize="9" fill="#ca8a04" fontWeight="bold">informal</text>
            <text x="410" y="174" textAnchor="middle" fontSize="9" fill="#ca8a04">informal</text>
          </svg>
          <figcaption>Mapa de tons em textos em inglês: eixo formalidade (vertical) e atitude (horizontal)</figcaption>
        </figure>
        <p>
          Ao identificar o tom, procure pistas como: escolha de vocabulário (palavras de
          conotação positiva/negativa), pontuação (exclamações, reticências), estrutura
          das frases (curtas e diretas vs. longas e elaboradas) e uso de figuras de linguagem
          (metáfora, comparação, hipérbole).
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tirinhas no ENEM</span>
        <h2>7. Tirinha e Charge em Inglês: Análise de Humor e Crítica</h2>
        <p>
          O ENEM frequentemente usa tirinhas e charges em inglês para avaliar a capacidade
          de integrar linguagem verbal e não verbal. O humor ou a crítica geralmente estão
          na última vinheta (punch line).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Leitura Visual</h3>
            <p>
              Observe: expressões faciais dos personagens, ação nas vinhetas, mudança de
              situação entre a primeira e a última vinheta, elementos visuais exagerados
              (traços de suor, estrelas ao redor da cabeça, tamanho desproporcional).
            </p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Leitura dos Balões</h3>
            <p>
              Balão oval = fala; balão de nuvem = pensamento; caption (legenda) = narração.
              O conteúdo dos balões na última vinheta geralmente contém a chave do humor
              (punch line) ou da crítica.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>A Inversão de Expectativa</h3>
            <p>
              O humor de tirinha costuma funcionar por inversão: o leitor espera algo comum
              e recebe algo inesperado. A quebra de expectativa entre as vinhetas é o mecanismo
              central de comicidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Crítica Social em Charges</h3>
            <p>
              Charges criticam situações políticas ou sociais por meio de exagero visual
              (caricatura) e metáfora. O humor é secundário; o objetivo principal é denunciar
              ou satirizar algo. Identificar o alvo da crítica é essencial.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exemplos ENEM</span>
        <h2>8. Análise de Exemplos de Textos com Ironia e Humor</h2>
        <p>Veja como identificar ironia e humor em dois exemplos:</p>
        <div className="lesson-highlight">
          <h3>Exemplo 1 — Ironia em editorial</h3>
          <blockquote style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            <p>
              "Naturally, the best way to tackle traffic congestion in our city is to build
              more roads. After all, one more road has never created more traffic. Just as
              adding more belts has always been the most effective way to lose weight."
            </p>
          </blockquote>
          <p>
            <strong>Análise:</strong> O autor usa ironia para criticar a política de expandir
            estradas como solução para o congestionamento. Frases como "Naturally" e "has
            never created more traffic" são o oposto do que a evidência mostra. A analogia
            final com cintos e perda de peso é absurda e reforça a crítica irônica: ambas
            são "soluções" que na verdade agravam o problema.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo 2 — Pun em tirinha</h3>
          <blockquote style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            <p>
              Vinheta 1: Pessoa entra no banco e diz ao gerente: "I'd like to open a joint
              account."
              <br />
              Vinheta 2: O gerente responde sorrindo: "With whom?"
              <br />
              Vinheta 3: A pessoa abre a pasta e diz: "With my knee — the doctor says I need
              a new one."
            </p>
          </blockquote>
          <p>
            <strong>Análise:</strong> O humor vem do duplo sentido de "joint": no contexto
            bancário, significa conta conjunta (com outra pessoa); mas "joint" também é um
            termo médico para articulação. A virada na última vinheta revela que a pessoa
            está falando de cirurgia no joelho — quebra de expectativa que produz o efeito
            cômico.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>9. Vocabulário Essencial: Ironia, Humor e Opinião</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo em inglês</th>
                <th>Tradução</th>
                <th>Contexto de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>irony / ironic</em></td><td>ironia / irônico</td><td>Diz o oposto do que pensa</td></tr>
              <tr><td><em>sarcasm / sarcastic</em></td><td>sarcasmo / sarcástico</td><td>Ironia agressiva, crítica</td></tr>
              <tr><td><em>pun / wordplay</em></td><td>trocadilho / jogo de palavras</td><td>Duplo sentido, humor linguístico</td></tr>
              <tr><td><em>punch line</em></td><td>punchline / graça final</td><td>Última vinheta / graça da piada</td></tr>
              <tr><td><em>tone</em></td><td>tom</td><td>Atitude do autor no texto</td></tr>
              <tr><td><em>in my opinion / I believe</em></td><td>na minha opinião / eu acredito</td><td>Marcador de opinião</td></tr>
              <tr><td><em>arguably</em></td><td>pode-se dizer / discutivelmente</td><td>Opinião com ressalva</td></tr>
              <tr><td><em>it seems that</em></td><td>parece que</td><td>Opinião hesitante / inferência</td></tr>
              <tr><td><em>understatement</em></td><td>eufemismo / minimização</td><td>Humor por subestimar</td></tr>
              <tr><td><em>hyperbole</em></td><td>hipérbole</td><td>Exagero para efeito cômico ou retórico</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>10. Mapa Mental: Inferência, Ironia e Intenção Comunicativa</h2>
        <div className="math-block">
          <strong>ROTEIRO PARA QUESTÕES DE INFERÊNCIA, IRONIA E INTENÇÃO COMUNICATIVA:</strong>
          <br /><br />
          1. LEIA o texto com atenção ao tom: o autor está sendo literal ou irônico?
          <br />
          2. IDENTIFIQUE a intenção: informar / persuadir / criticar / entreter?
          <br />
          3. PROCURE marcadores de opinião (I believe, arguably, it seems...) para distinguir fato de opinião.
          <br />
          4. EM TIRINHAS: foque no contraste entre as vinhetas e na última fala (punch line).
          <br />
          5. PARA INFERÊNCIA: a resposta certa deve ser dedutível do texto — não apenas possível, mas necessária.
          <br />
          6. CUIDADO com alternativas que parecem verdadeiras mas vão além do texto ou o contradizem.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificar marcador de opinião"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <blockquote style={{borderLeft: "3px solid #4f46e5", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "In my opinion, remote work has been one of the most positive changes in
                  the modern workplace. It gives employees more flexibility and reduces the
                  time wasted on commuting. I strongly believe that companies that embrace
                  this model will outperform their competitors in the long run."
                </p>
              </blockquote>
              <p>O texto acima é predominantemente:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Um relatório objetivo sobre o trabalho remoto." },
            { letter: "B", text: "Uma expressão de opinião favorável ao trabalho remoto.", correct: true },
            { letter: "C", text: "Uma pesquisa científica sobre produtividade." },
            { letter: "D", text: "Uma notícia sobre mudanças no mercado de trabalho." },
            { letter: "E", text: "Um texto neutro que apresenta prós e contras." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> O texto usa marcadores de opinião claramente
                identificáveis: "In my opinion", "I strongly believe". Além disso, o vocabulário
                é avaliativo e positivo: "most positive changes", "more flexibility". Não há
                dados objetivos, pesquisa ou apresentação de pontos contrários — apenas a
                visão favorável do autor sobre o trabalho remoto.
              </p>
            </div>
          }
        />

        <Exercise
          level="Intermediário"
          title="Reconhecer ironia verbal"
          statement={
            <div>
              <p>Leia o trecho de um blog de humor:</p>
              <blockquote style={{borderLeft: "3px solid #059669", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "I absolutely love it when the internet goes down just as I'm finishing
                  a three-hour work project. There's truly nothing more relaxing than redoing
                  everything from scratch. Technology has certainly made our lives simpler."
                </p>
              </blockquote>
              <p>Qual recurso linguístico o autor usa e qual é sua real intenção?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Informação objetiva; o autor realmente gosta quando a internet cai." },
            { letter: "B", text: "Hipérbole; o autor exagera para mostrar entusiasmo pela tecnologia." },
            { letter: "C", text: "Ironia verbal; o autor expressa frustração fingindo aprovação.", correct: true },
            { letter: "D", text: "Comparação; o autor compara seu trabalho com atividades relaxantes." },
            { letter: "E", text: "Narração objetiva de um fato ocorrido com o autor." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> O texto usa ironia verbal: as palavras são positivas
                ("absolutely love", "nothing more relaxing", "simpler") mas o contexto revela
                o oposto — ninguém gosta de perder três horas de trabalho por falha técnica.
                A frase final "Technology has certainly made our lives simpler" é claramente
                irônica dado o contexto. O autor está frustrado, mas expressa isso fingindo
                aprovação — a marca definitória da ironia verbal.
              </p>
            </div>
          }
        />

        <Exercise
          level="Avançado"
          title="Analisar punch line de tirinha"
          statement={
            <div>
              <p>Leia a descrição de uma tirinha em inglês:</p>
              <blockquote style={{borderLeft: "3px solid #dc2626", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  <strong>Vinheta 1:</strong> Um médico olha para o paciente e diz: "I have
                  good news and bad news."
                  <br />
                  <strong>Vinheta 2:</strong> Paciente nervoso: "Give me the good news first."
                  <br />
                  <strong>Vinheta 3:</strong> Médico: "The good news is you only have 24 hours
                  to live." Paciente: "That's the GOOD news?! What's the bad news?!" Médico:
                  "I forgot to call you yesterday."
                </p>
              </blockquote>
              <p>Que mecanismo produz o efeito cômico na tirinha?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Pun — jogo de palavras com o duplo sentido de 'good'." },
            { letter: "B", text: "Understatement — o médico minimiza a gravidade da situação." },
            { letter: "C", text: "Quebra de expectativa e ironia situacional — o que deveria ser a notícia ruim revela-se pior do que o esperado.", correct: true },
            { letter: "D", text: "Sarcasmo — o médico critica o comportamento do paciente." },
            { letter: "E", text: "Cultural humor — a situação só é engraçada no contexto americano." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> A estrutura da piada funciona por dupla inversão
                de expectativa. Primeiro, ouvimos "boas notícias" e esperamos algo positivo —
                mas é que o paciente tem 24h de vida (ironia). Segundo, a "má notícia" revela
                que o médico soube disso ontem e esqueceu de ligar — o que significa que o
                paciente tinha 24h de vida há mais tempo ainda. A situação é irônica porque
                o que deveria ser a melhor notícia é na verdade devastating. Nenhum pun ou
                sarcasmo específico está presente — é pura quebra de expectativa progressiva.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Identificar intenção comunicativa (ENEM)"
          statement={
            <div>
              <p>Leia o texto abaixo, adaptado de uma campanha publicitária social:</p>
              <blockquote style={{borderLeft: "3px solid #7c3aed", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  "Every 40 seconds, someone in the world dies by suicide. Every 40 seconds,
                  a family loses a loved one. Every 40 seconds, we lose a future. If you are
                  struggling, you are not alone. Talk to someone. Call a helpline. Take the
                  first step — because 40 seconds is all it takes to ask for help."
                </p>
              </blockquote>
              <p>Qual é a principal intenção comunicativa desse texto?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Informar sobre as estatísticas globais de suicídio." },
            { letter: "B", text: "Criticar os sistemas de saúde mental nos países desenvolvidos." },
            { letter: "C", text: "Entreter o leitor com uma narrativa sobre saúde mental." },
            { letter: "D", text: "Conscientizar e incentivar pessoas em sofrimento a buscar ajuda.", correct: true },
            { letter: "E", text: "Persuadir governos a investirem em prevenção ao suicídio." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: D.</strong> O texto usa dados estatísticos no início para
                criar impacto emocional, mas o objetivo principal não é informar (A) — é
                incentivar ação. A virada ocorre em "If you are struggling, you are not alone":
                o texto dirige-se diretamente à pessoa em sofrimento, encoraja o pedido de
                ajuda e termina com uma mensagem de esperança. Isso é característica de campanha
                de conscientização (raise awareness) com chamada à ação específica (talk,
                call, ask). A alternativa B é secundária e não está fundamentada. E seria
                possível mas o texto se dirige ao indivíduo, não a governos.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Inferência cultural em texto humorístico"
          statement={
            <div>
              <p>Leia o seguinte diálogo:</p>
              <blockquote style={{borderLeft: "3px solid #ea580c", paddingLeft: "1rem", fontStyle: "italic", margin: "1rem 0"}}>
                <p>
                  Person A: "I'm reading a book about anti-gravity."
                  <br />
                  Person B: "Any good?"
                  <br />
                  Person A: "It's impossible to put down."
                </p>
              </blockquote>
              <p>De onde vem o efeito cômico desse diálogo?</p>
            </div>
          }
          options={[
            { letter: "A", text: "Da ironia situacional: um livro sobre física que é difícil de entender." },
            { letter: "B", text: "Do pun com 'put down': significa tanto 'largar o livro' quanto 'algo que vai contra a gravidade'.", correct: true },
            { letter: "C", text: "Do sarcasmo de Person B, que não está realmente interessado." },
            { letter: "D", text: "Da hipérbole: nenhum livro é realmente impossível de largar." },
            { letter: "E", text: "Da referência cultural a um livro famoso sobre anti-gravidade." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> O humor é gerado por um pun clássico. "Put down"
                em inglês tem dois sentidos: (1) largar algo / parar de ler um livro ("I can't
                put this book down" = não consigo parar de ler); e (2) aplicando literalmente
                ao tema do livro — algo que vai contra a gravidade literalmente não pode ser
                colocado para baixo ("put down"). A piada funciona porque a última frase ativa
                ambos os sentidos simultaneamente: o livro é tão bom que não consegue largar,
                E tematicamente trata de algo que não cai. É um exemplo perfeito de wordplay
                baseado em double meaning.
              </p>
            </div>
          }
        />
      </section>
    </article>
  );
}
