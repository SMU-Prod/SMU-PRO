"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 06</span>
          <h1>Artigos, substantivos e formação do gênero e número</h1>
          <p>
            Em espanhol, assim como em português, todo substantivo possui um <strong>gênero gramatical</strong> — masculino ou feminino — e um <strong>número</strong> — singular ou plural. Os artigos (definidos e indefinidos) devem concordar com o substantivo em gênero e número, formando o núcleo de quase toda frase nominal. Dominar esse sistema é fundamental para a leitura do ENEM porque a identificação correta do gênero e do número de uma palavra permite ao leitor rastrear referências pronominais, entender a concordância de adjetivos e interpretar com precisão expressões nominais em textos autênticos. O espanhol apresenta, ainda, algumas armadilhas para falantes de português: substantivos que trocam de gênero entre os dois idiomas (<em>la mano</em>, <em>el mapa</em>, <em>el problema</em>) e plurais que seguem regras distintas (<em>la voz → las voces</em>). Neste capítulo, você estudará todos esses tópicos de forma sistemática, com tabelas comparativas, exemplos retirados de contextos reais e exercícios no padrão ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Artigos Definidos</span>
        <h2>1. Os artigos definidos em espanhol</h2>
        <p>
          Os artigos definidos em espanhol equivalem ao "o/a/os/as" do português e indicam que o falante se refere a algo específico, já conhecido no contexto. Em espanhol são quatro formas: <strong>el</strong> (masculino singular), <strong>la</strong> (feminino singular), <strong>los</strong> (masculino plural) e <strong>las</strong> (feminino plural). Diferentemente do português, o espanhol <em>não possui</em> um artigo neutro de uso corriqueiro como "lo" para substantivos — embora exista o <em>lo</em> para nominalizar adjetivos em construções como <em>lo bueno</em> ("o bom", "o que é bom"), que aparecem eventualmente em textos do ENEM.
        </p>
        <p>
          Uma diferença fundamental entre os dois idiomas é a ocorrência de <strong>contrações obrigatórias</strong>: quando a preposição <em>a</em> ou <em>de</em> precede o artigo masculino singular <em>el</em>, forma-se obrigatoriamente a contração <strong>al</strong> (<em>a + el</em>) ou <strong>del</strong> (<em>de + el</em>). Essa contração <em>não ocorre</em> com a forma do pronome pessoal <em>él</em> (com acento gráfico), que significa "ele". Portanto, escrevemos <em>voy al mercado</em> (vou ao mercado) mas <em>hablo de él</em> (falo dele).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Gênero / Número</th>
                <th>Exemplo em Espanhol</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>el</strong></td>
                <td>Masculino singular</td>
                <td><em>el libro, el día</em></td>
                <td>o livro, o dia</td>
              </tr>
              <tr>
                <td><strong>la</strong></td>
                <td>Feminino singular</td>
                <td><em>la casa, la mano</em></td>
                <td>a casa, a mão</td>
              </tr>
              <tr>
                <td><strong>los</strong></td>
                <td>Masculino plural</td>
                <td><em>los niños, los mapas</em></td>
                <td>os meninos, os mapas</td>
              </tr>
              <tr>
                <td><strong>las</strong></td>
                <td>Feminino plural</td>
                <td><em>las flores, las manos</em></td>
                <td>as flores, as mãos</td>
              </tr>
              <tr>
                <td><strong>al</strong></td>
                <td>Contração: <em>a + el</em></td>
                <td><em>Voy al parque.</em></td>
                <td>Vou ao parque.</td>
              </tr>
              <tr>
                <td><strong>del</strong></td>
                <td>Contração: <em>de + el</em></td>
                <td><em>Vengo del trabajo.</em></td>
                <td>Venho do trabalho.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção:</strong> A contração <em>al</em> e <em>del</em> é <strong>obrigatória</strong> em espanhol escrito. Escrever <em>*a el</em> ou <em>*de el</em> (sem contração) é considerado erro gramatical. No entanto, se "el" for um pronome pessoal (com acento: <em>él</em>), a contração não se forma: <em>el libro de él</em> (o livro dele) é correto.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Artigos Indefinidos</span>
        <h2>2. Os artigos indefinidos em espanhol</h2>
        <p>
          Os artigos indefinidos em espanhol correspondem ao "um/uma/uns/umas" do português. São quatro formas: <strong>un</strong> (masculino singular), <strong>una</strong> (feminino singular), <strong>unos</strong> (masculino plural) e <strong>unas</strong> (feminino plural). Os plurais <em>unos/unas</em> têm sentido aproximado de "uns/umas" ou "alguns/algumas" — são menos frequentes que o singular, mas aparecem regularmente em textos narrativos e descritivos.
        </p>
        <p>
          Um detalhe importante: substantivos femininos que começam com <em>a-</em> ou <em>ha-</em> tônico (isto é, com a sílaba tônica no <em>a</em> inicial) recebem o artigo <strong>el</strong> (e não <em>la</em>) no singular para evitar o choque de sons. Esse é o caso de palavras como <em>el agua</em> (a água), <em>el águila</em> (a águia) e <em>el hacha</em> (o machado — palavra feminina). No plural, a regra não se aplica: <em>las aguas, las águilas</em>. O gênero feminino se manifesta na concordância dos adjetivos: <em>el agua fría</em> (a água fria), provando que <em>agua</em> é feminino.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Gênero / Número</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>un</strong></td>
                <td>Masculino singular</td>
                <td><em>un amigo, un problema</em></td>
                <td>um amigo, um problema</td>
              </tr>
              <tr>
                <td><strong>una</strong></td>
                <td>Feminino singular</td>
                <td><em>una ciudad, una tarde</em></td>
                <td>uma cidade, uma tarde</td>
              </tr>
              <tr>
                <td><strong>unos</strong></td>
                <td>Masculino plural</td>
                <td><em>unos libros, unos días</em></td>
                <td>uns livros, alguns dias</td>
              </tr>
              <tr>
                <td><strong>unas</strong></td>
                <td>Feminino plural</td>
                <td><em>unas flores, unas horas</em></td>
                <td>umas flores, algumas horas</td>
              </tr>
              <tr>
                <td><strong>el</strong> (≠ artigo def.)</td>
                <td>Feminino singular — a- tônico</td>
                <td><em>el agua fría, el águila</em></td>
                <td>a água fria, a águia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Quando você ver <em>el agua</em> em um texto espanhol, não confunda com masculino! O artigo <em>el</em> está ali por razão fonética, e os adjetivos que acompanham <em>agua</em> continuam no feminino: <em>el agua limpia, el agua turbia</em>. Isso pode aparecer em questões de interpretação que exploram concordância nominal.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── SVG: Mapa visual dos artigos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. Diagrama: sistema de artigos do espanhol</h2>
        <p>
          O diagrama abaixo organiza visualmente as oito formas de artigo do espanhol (quatro definidos e quatro indefinidos) distribuídas por gênero e número, destacando também as contrações obrigatórias. Use-o como referência rápida durante a leitura de textos.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            aria-label="Diagrama do sistema de artigos do espanhol: definidos e indefinidos por gênero e número"
            role="img"
          >
            {/* Fundo geral */}
            <rect width="700" height="260" rx="10" fill="#f8fafc" />

            {/* Título central */}
            <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
              Sistema de Artigos do Espanhol
            </text>

            {/* --- COLUNA ESQUERDA: DEFINIDOS --- */}
            <rect x="20" y="42" width="315" height="200" rx="8" fill="#dbeafe" />
            <text x="177" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">
              DEFINIDOS (o / a / os / as)
            </text>

            {/* Masculino singular */}
            <rect x="35" y="72" width="130" height="38" rx="5" fill="#bfdbfe" />
            <text x="100" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">el</text>
            <text x="100" y="103" textAnchor="middle" fontSize="11" fill="#1e293b">masc. singular</text>

            {/* Feminino singular */}
            <rect x="190" y="72" width="130" height="38" rx="5" fill="#bfdbfe" />
            <text x="255" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">la</text>
            <text x="255" y="103" textAnchor="middle" fontSize="11" fill="#1e293b">fem. singular</text>

            {/* Masculino plural */}
            <rect x="35" y="120" width="130" height="38" rx="5" fill="#bfdbfe" />
            <text x="100" y="136" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">los</text>
            <text x="100" y="151" textAnchor="middle" fontSize="11" fill="#1e293b">masc. plural</text>

            {/* Feminino plural */}
            <rect x="190" y="120" width="130" height="38" rx="5" fill="#bfdbfe" />
            <text x="255" y="136" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">las</text>
            <text x="255" y="151" textAnchor="middle" fontSize="11" fill="#1e293b">fem. plural</text>

            {/* Contrações */}
            <rect x="35" y="170" width="285" height="62" rx="5" fill="#eff6ff" />
            <text x="177" y="188" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Contrações obrigatórias</text>
            <text x="100" y="208" textAnchor="middle" fontSize="12" fill="#1e293b">a + el → al</text>
            <text x="100" y="224" textAnchor="middle" fontSize="11" fill="#64748b">ex: voy al parque</text>
            <text x="255" y="208" textAnchor="middle" fontSize="12" fill="#1e293b">de + el → del</text>
            <text x="255" y="224" textAnchor="middle" fontSize="11" fill="#64748b">ex: vengo del trabajo</text>

            {/* --- COLUNA DIREITA: INDEFINIDOS --- */}
            <rect x="365" y="42" width="315" height="200" rx="8" fill="#dcfce7" />
            <text x="522" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">
              INDEFINIDOS (um / uma / uns / umas)
            </text>

            {/* un */}
            <rect x="380" y="72" width="130" height="38" rx="5" fill="#bbf7d0" />
            <text x="445" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">un</text>
            <text x="445" y="103" textAnchor="middle" fontSize="11" fill="#1e293b">masc. singular</text>

            {/* una */}
            <rect x="535" y="72" width="130" height="38" rx="5" fill="#bbf7d0" />
            <text x="600" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">una</text>
            <text x="600" y="103" textAnchor="middle" fontSize="11" fill="#1e293b">fem. singular</text>

            {/* unos */}
            <rect x="380" y="120" width="130" height="38" rx="5" fill="#bbf7d0" />
            <text x="445" y="136" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">unos</text>
            <text x="445" y="151" textAnchor="middle" fontSize="11" fill="#1e293b">masc. plural</text>

            {/* unas */}
            <rect x="535" y="120" width="130" height="38" rx="5" fill="#bbf7d0" />
            <text x="600" y="136" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">unas</text>
            <text x="600" y="151" textAnchor="middle" fontSize="11" fill="#1e293b">fem. plural</text>

            {/* Nota fonética */}
            <rect x="380" y="170" width="285" height="62" rx="5" fill="#f0fdf4" />
            <text x="522" y="188" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Exceção fonética (a- tônico)</text>
            <text x="522" y="208" textAnchor="middle" fontSize="12" fill="#1e293b">el agua, el águila, el hacha</text>
            <text x="522" y="224" textAnchor="middle" fontSize="11" fill="#64748b">(femininos — artigo def. por fonética)</text>
          </svg>
          <figcaption>Sistema de artigos definidos e indefinidos do espanhol, com contrações e exceção fonética.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gênero dos Substantivos</span>
        <h2>4. Gênero gramatical dos substantivos</h2>
        <p>
          Em espanhol, <strong>todo substantivo pertence a um gênero gramatical</strong> — masculino ou feminino. Embora o gênero seja uma propriedade arbitrária da língua (não há lógica "natural" que explique por que <em>la luna</em> é feminino e <em>el sol</em> é masculino), existem <strong>padrões terminológicos</strong> que permitem deduzir o gênero da maioria das palavras. Esse conhecimento é especialmente útil na prova do ENEM, onde o candidato frequentemente encontra palavras que nunca viu antes e precisa determinar seu gênero para identificar a concordância correta.
        </p>

        <h3>Regras gerais de gênero</h3>
        <p>
          A terminação mais produtiva do espanhol é a oposição <strong>-o/-a</strong>: substantivos terminados em <em>-o</em> são geralmente masculinos (<em>el libro, el niño, el camino</em>) e substantivos terminados em <em>-a</em> são geralmente femininos (<em>la casa, la niña, la mesa</em>). Para substantivos terminados em consoante ou em outra vogal, há que observar padrões por grupo terminológico.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Terminação</th>
                <th>Gênero esperado</th>
                <th>Exemplos</th>
                <th>Equivalente PT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>-o</strong></td>
                <td>Masculino</td>
                <td><em>el libro, el río, el vaso</em></td>
                <td>o livro, o rio, o copo</td>
              </tr>
              <tr>
                <td><strong>-a</strong></td>
                <td>Feminino</td>
                <td><em>la mesa, la tarde, la ciudad*</em></td>
                <td>a mesa, a tarde, a cidade</td>
              </tr>
              <tr>
                <td><strong>-ción / -sión</strong></td>
                <td>Feminino</td>
                <td><em>la nación, la televisión</em></td>
                <td>a nação, a televisão</td>
              </tr>
              <tr>
                <td><strong>-dad / -tad / -tud</strong></td>
                <td>Feminino</td>
                <td><em>la ciudad, la libertad, la virtud</em></td>
                <td>a cidade, a liberdade, a virtude</td>
              </tr>
              <tr>
                <td><strong>-umbre</strong></td>
                <td>Feminino</td>
                <td><em>la costumbre, la muchedumbre</em></td>
                <td>o costume, a multidão</td>
              </tr>
              <tr>
                <td><strong>-eza</strong></td>
                <td>Feminino</td>
                <td><em>la belleza, la tristeza</em></td>
                <td>a beleza, a tristeza</td>
              </tr>
              <tr>
                <td><strong>-ema / -oma / -ama</strong></td>
                <td>Masculino (!)</td>
                <td><em>el problema, el sistema, el idioma</em></td>
                <td>o problema, o sistema, o idioma</td>
              </tr>
              <tr>
                <td><strong>-or</strong></td>
                <td>Masculino (geralmente)</td>
                <td><em>el calor, el color, el amor</em></td>
                <td>o calor, a cor, o amor</td>
              </tr>
              <tr>
                <td><strong>-ión</strong></td>
                <td>Feminino</td>
                <td><em>la canción, la región</em></td>
                <td>a canção, a região</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Regra do -ema / -oma / -ama:</strong> Palavras de origem grega terminadas em <em>-ema</em>, <em>-oma</em> ou <em>-ama</em> são <strong>masculinas</strong> em espanhol, mesmo terminando em <em>-a</em>. Isso é diferente do comportamento em português para algumas dessas palavras. Exemplos: <em>el problema, el sistema, el tema, el programa, el poema, el idioma, el esquema</em>. Esses substantivos aparecem com frequência em textos do ENEM e são fonte comum de erro de interpretação.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Plural dos Substantivos</span>
        <h2>5. Formação do plural em espanhol</h2>
        <p>
          A formação do plural em espanhol segue regras relativamente simples, semelhantes às do português, mas com algumas diferenças importantes que o candidato deve conhecer. A regra básica é: substantivos terminados em vogal recebem <strong>-s</strong>, e substantivos terminados em consoante recebem <strong>-es</strong>. Há, ainda, o caso especial dos substantivos terminados em <em>-z</em>, que formam o plural com <strong>-ces</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Terminação no singular</th>
                <th>Regra de pluralização</th>
                <th>Singular → Plural</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vogal (a, e, i, o, u)</td>
                <td>+ <strong>s</strong></td>
                <td><em>casa → casas; libro → libros</em></td>
                <td>casa/s; livro/s</td>
              </tr>
              <tr>
                <td>Consoante (exceto -z)</td>
                <td>+ <strong>es</strong></td>
                <td><em>flor → flores; ciudad → ciudades</em></td>
                <td>flor/flores; cidade/s</td>
              </tr>
              <tr>
                <td>-<strong>z</strong></td>
                <td>-z → <strong>-ces</strong></td>
                <td><em>voz → voces; vez → veces; pez → peces</em></td>
                <td>voz/vozes; vez/vezes; peixe/s</td>
              </tr>
              <tr>
                <td>Vogal tônica + -s/-x no final</td>
                <td>Invariável (ou + <strong>es</strong>)</td>
                <td><em>el lunes → los lunes; el análisis → los análisis</em></td>
                <td>segunda-feira; análise/s</td>
              </tr>
              <tr>
                <td>-<strong>én / -ón / -ín</strong></td>
                <td>Perde acento no plural</td>
                <td><em>el jardín → los jardines; el camión → los camiones</em></td>
                <td>jardim/s; caminhão/ões</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Um ponto que diferencia o espanhol do português na pluralização é que palavras paroxítonas terminadas em <em>-s</em> não mudam no plural (<em>el lunes → los lunes</em>, "a segunda-feira → as segundas-feiras"), enquanto no português a tendência é pluralizar. Além disso, palavras com acento gráfico nas terminações <em>-én, -ón, -ín</em> perdem o acento ao ganhar <em>-es</em>, pois a sílaba tônica se redistribui: <em>el jardín → los jardines</em>, <em>el alemán → los alemanes</em>.
        </p>

        <div className="lesson-highlight">
          <strong>Atenção ao -z → -ces:</strong> A transformação <em>-z → -ces</em> no plural é uma das mais cobradas em questões que envolvem o reconhecimento de formas: <em>la voz</em> (a voz) vira <em>las voces</em> (as vozes); <em>la vez</em> (a vez) vira <em>las veces</em> (as vezes); <em>el pez</em> (o peixe) vira <em>los peces</em> (os peixes). No ENEM, é comum que o candidato precise reconhecer uma forma plural para localizá-la no texto.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── SVG: Diagrama de formação do plural ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama Visual</span>
        <h2>6. Diagrama: regras de pluralização</h2>
        <p>
          O fluxograma abaixo sintetiza as três principais trajetórias de formação do plural em espanhol de acordo com a terminação do substantivo no singular. Leia da esquerda para a direita.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            aria-label="Fluxograma das regras de formação do plural em espanhol: terminação em vogal recebe -s, em consoante recebe -es, em -z recebe -ces"
            role="img"
          >
            {/* Fundo */}
            <rect width="700" height="220" rx="10" fill="#f8fafc" />

            {/* Título */}
            <text x="350" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
              Formação do Plural em Espanhol
            </text>

            {/* Caixa de entrada: SINGULAR */}
            <rect x="270" y="40" width="160" height="38" rx="8" fill="#e2e8f0" />
            <text x="350" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#334155">SINGULAR</text>

            {/* Seta para baixo */}
            <line x1="350" y1="78" x2="350" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Losango de decisão */}
            <polygon points="350,100 430,125 350,150 270,125" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="350" y="121" textAnchor="middle" fontSize="11" fill="#713f12">Termina</text>
            <text x="350" y="135" textAnchor="middle" fontSize="11" fill="#713f12">em...?</text>

            {/* Seta esquerda → vogal */}
            <line x1="270" y1="125" x2="110" y2="125" stroke="#94a3b8" strokeWidth="2" />
            <line x1="110" y1="125" x2="110" y2="158" stroke="#94a3b8" strokeWidth="2" />
            <text x="190" y="118" textAnchor="middle" fontSize="11" fill="#475569">vogal</text>
            <rect x="40" y="158" width="140" height="44" rx="8" fill="#dcfce7" />
            <text x="110" y="176" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">+ s</text>
            <text x="110" y="193" textAnchor="middle" fontSize="10" fill="#166534">casa → casas</text>

            {/* Seta direita → -z */}
            <line x1="430" y1="125" x2="590" y2="125" stroke="#94a3b8" strokeWidth="2" />
            <line x1="590" y1="125" x2="590" y2="158" stroke="#94a3b8" strokeWidth="2" />
            <text x="510" y="118" textAnchor="middle" fontSize="11" fill="#475569">-z</text>
            <rect x="520" y="158" width="140" height="44" rx="8" fill="#fce7f3" />
            <text x="590" y="176" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">-z → -ces</text>
            <text x="590" y="193" textAnchor="middle" fontSize="10" fill="#9d174d">voz → voces</text>

            {/* Seta baixo → consoante */}
            <line x1="350" y1="150" x2="350" y2="158" stroke="#94a3b8" strokeWidth="2" />
            <text x="360" y="148" fontSize="11" fill="#475569">cons.</text>
            <rect x="280" y="158" width="140" height="44" rx="8" fill="#dbeafe" />
            <text x="350" y="176" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">+ es</text>
            <text x="350" y="193" textAnchor="middle" fontSize="10" fill="#1e40af">flor → flores</text>
          </svg>
          <figcaption>Fluxograma de pluralização: vogal (+s), consoante (+es), -z (-ces).</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gênero Irregular e Heterônimos</span>
        <h2>7. Gênero irregular e pares heterônimos</h2>
        <p>
          Alguns substantivos em espanhol formam o par masculino/feminino não por sufixação, mas por palavras completamente diferentes. Esses pares são chamados de <strong>heterônimos de gênero</strong> e correspondem, na maioria dos casos, a seres animados (pessoas e animais). O candidato do ENEM deve reconhecê-los para não interpretar erroneamente referências pronominais ou de concordância nesses textos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Masculino (ES)</th>
                <th>Feminino (ES)</th>
                <th>Tradução (M)</th>
                <th>Tradução (F)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>el hombre</em></td>
                <td><em>la mujer</em></td>
                <td>o homem</td>
                <td>a mulher</td>
              </tr>
              <tr>
                <td><em>el padre</em></td>
                <td><em>la madre</em></td>
                <td>o pai</td>
                <td>a mãe</td>
              </tr>
              <tr>
                <td><em>el rey</em></td>
                <td><em>la reina</em></td>
                <td>o rei</td>
                <td>a rainha</td>
              </tr>
              <tr>
                <td><em>el toro</em></td>
                <td><em>la vaca</em></td>
                <td>o touro</td>
                <td>a vaca</td>
              </tr>
              <tr>
                <td><em>el caballo</em></td>
                <td><em>la yegua</em></td>
                <td>o cavalo</td>
                <td>a égua</td>
              </tr>
              <tr>
                <td><em>el carnero</em></td>
                <td><em>la oveja</em></td>
                <td>o carneiro</td>
                <td>a ovelha</td>
              </tr>
              <tr>
                <td><em>el yerno</em></td>
                <td><em>la nuera</em></td>
                <td>o genro</td>
                <td>a nora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Há também substantivos que mudam de gênero simplesmente trocando a terminação (<em>el niño → la niña</em>), e outros que são <strong>epicenos</strong> — isto é, têm uma única forma para ambos os sexos biológicos, diferenciados apenas pelo artigo ou por um adjetivo: <em>el/la estudiante, el/la artista, el/la joven, el/la cantante</em>. Reconhecer esses substantivos evita confusões na leitura de textos narrativos em que o personagem ou sujeito é introduzido com artigo feminino mas o substantivo não termina em <em>-a</em>.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Falsos Cognatos de Gênero</span>
        <h2>8. Falsos cognatos de gênero com o português</h2>
        <p>
          Um dos maiores desafios para o estudante brasileiro é que certos substantivos de uso muito frequente têm <strong>gênero diferente do português</strong>. O espanhol e o português descendem do latim, mas nem sempre preservaram o gênero latino da mesma forma — e em alguns casos o próprio latim tinha gênero neutro que cada língua resolveu de maneira diferente. Conhecer esses "falsos cognatos de gênero" é essencial para não interpretar incorretamente a concordância em textos do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra (ES)</th>
                <th>Gênero em ES</th>
                <th>Gênero em PT</th>
                <th>Exemplo em Espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>la mano</em></td>
                <td><strong>Feminino</strong></td>
                <td>Feminino (igual!)</td>
                <td><em>Levantó la mano derecha.</em></td>
              </tr>
              <tr>
                <td><em>el mapa</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El mapa político de Europa.</em></td>
              </tr>
              <tr>
                <td><em>el tema</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El tema central del texto.</em></td>
              </tr>
              <tr>
                <td><em>el problema</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>Un problema grave afecta la región.</em></td>
              </tr>
              <tr>
                <td><em>el día</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El día estaba nublado.</em></td>
              </tr>
              <tr>
                <td><em>el sistema</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El sistema educativo necesita cambios.</em></td>
              </tr>
              <tr>
                <td><em>el idioma</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El idioma español es muy rico.</em></td>
              </tr>
              <tr>
                <td><em>la foto</em></td>
                <td><strong>Feminino</strong></td>
                <td>Feminino (igual!)</td>
                <td><em>La foto fue tomada en Buenos Aires.</em></td>
              </tr>
              <tr>
                <td><em>la sangre</em></td>
                <td><strong>Feminino</strong></td>
                <td>Masculino (o sangue)</td>
                <td><em>La sangre es vital para el cuerpo.</em></td>
              </tr>
              <tr>
                <td><em>el calor</em></td>
                <td><strong>Masculino</strong></td>
                <td>Masculino (igual!)</td>
                <td><em>El calor del verano es intenso.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Caso especial — <em>la sangre</em>:</strong> Em português dizemos "o sangue" (masculino), mas em espanhol <em>la sangre</em> é <strong>feminino</strong>. Esse é um dos poucos casos em que os dois idiomas divergem no gênero de uma palavra cognata de uso cotidiano. Nos demais casos listados acima, o gênero coincide — o que facilita a leitura para falantes de português.
        </div>

        <p>
          Outro ponto relevante é que <em>la mano</em> termina em <em>-o</em> mas é feminino — uma exceção histórica que vem do latim <em>manus</em> (4ª declinação feminina). Por isso, os adjetivos que concordam com <em>mano</em> vão para o feminino: <em>la mano derecha</em> (a mão direita), <em>la mano izquierda</em> (a mão esquerda). Já os substantivos do grupo <em>-ema/-oma/-ama</em> (<em>el problema, el sistema, el tema</em>) terminam em <em>-a</em> mas são masculinos, como visto na seção anterior.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Concordância</span>
        <h2>9. Concordância artigo-substantivo e seus efeitos na leitura</h2>
        <p>
          A <strong>concordância nominal</strong> em espanhol funciona de forma muito semelhante ao português: artigos, adjetivos e pronomes devem concordar com o substantivo em gênero e número. Porém, para o leitor do ENEM, o valor da concordância vai além da gramática normativa — ela serve como ferramenta de rastreamento de referências dentro do texto. Ao identificar o gênero de um artigo, é possível determinar o gênero do substantivo ao qual um adjetivo posposto se refere, mesmo quando o substantivo está em outra frase.
        </p>
        <p>
          Por exemplo, no fragmento <em>"El autor presentó una solución innovadora y un análisis detallado de los resultados obtenidos"</em>, o adjetivo <em>innovadora</em> (feminino) confirma que se refere a <em>solución</em> (feminino), enquanto <em>detallado</em> (masculino) remete a <em>análisis</em> (masculino). Saber isso permite ao candidato responder perguntas sobre "a que se refere o adjetivo X" ou "qual é o sujeito da oração Y" com mais segurança.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Substantivo</th>
                <th>Artigo</th>
                <th>Adjetivo concordante</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>libro</em> (masc. sg.)</td>
                <td><em>el</em></td>
                <td><em>interesante / nuevo</em></td>
                <td>o livro interessante / novo</td>
              </tr>
              <tr>
                <td><em>ciudad</em> (fem. sg.)</td>
                <td><em>la</em></td>
                <td><em>grande / antigua</em></td>
                <td>a cidade grande / antiga</td>
              </tr>
              <tr>
                <td><em>niños</em> (masc. pl.)</td>
                <td><em>los</em></td>
                <td><em>pequeños / alegres</em></td>
                <td>os meninos pequenos / alegres</td>
              </tr>
              <tr>
                <td><em>flores</em> (fem. pl.)</td>
                <td><em>las</em></td>
                <td><em>blancas / silvestres</em></td>
                <td>as flores brancas / silvestres</td>
              </tr>
              <tr>
                <td><em>problema</em> (masc. sg.)</td>
                <td><em>el / un</em></td>
                <td><em>grave / complejo</em></td>
                <td>o/um problema grave / complexo</td>
              </tr>
              <tr>
                <td><em>mano</em> (fem. sg.)</td>
                <td><em>la / una</em></td>
                <td><em>derecha / izquierda</em></td>
                <td>a/uma mão direita / esquerda</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Estratégia de leitura no ENEM:</strong> Quando você encontrar um adjetivo no texto e precisar identificar a que substantivo ele se refere, verifique o <strong>gênero e número do adjetivo</strong> e rastreie o substantivo com gênero e número correspondentes. Essa técnica de "rastreio por concordância" é especialmente útil em textos mais longos, onde o substantivo e o adjetivo estão em frases diferentes.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contraste Português–Espanhol</span>
        <h2>10. Diferenças sistemáticas entre português e espanhol</h2>
        <p>
          Embora o português e o espanhol sejam línguas irmãs e compartilhem a esmagadora maioria de suas estruturas gramaticais, há diferenças sistemáticas no uso de artigos e no gênero de certos substantivos que o candidato do ENEM deve conhecer para não cometer erros de interpretação. O português, por exemplo, usa o artigo definido antes de nomes próprios de pessoas em registros informais (<em>"A Maria chegou"</em>), enquanto o espanhol evita esse uso em nomes próprios de pessoas.
        </p>
        <p>
          Outra diferença importante é o uso do artigo com partes do corpo: em espanhol é muito mais comum usar o artigo definido em vez do possessivo para referir-se a partes do corpo, especialmente quando o possuidor é o sujeito da frase. Enquanto em português diríamos "Ela lavou <em>suas</em> mãos", em espanhol o mais natural é <em>"Ella se lavó <strong>las</strong> manos"</em> — o artigo definido, combinado com o pronome reflexivo <em>se</em>, indica a posse implicitamente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Português</th>
                <th>Espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artigo com nomes de pessoas (informal)</td>
                <td><em>A Maria chegou.</em></td>
                <td><em>María llegó.</em> (sem artigo)</td>
              </tr>
              <tr>
                <td>Partes do corpo (com possessivo)</td>
                <td><em>Ela lavou suas mãos.</em></td>
                <td><em>Ella se lavó las manos.</em></td>
              </tr>
              <tr>
                <td>Horas do dia</td>
                <td><em>É uma hora / São duas horas.</em></td>
                <td><em>Es la una / Son las dos.</em></td>
              </tr>
              <tr>
                <td>Gênero de "sangue"</td>
                <td><em>o sangue</em> (masc.)</td>
                <td><em>la sangre</em> (fem.)</td>
              </tr>
              <tr>
                <td>Palavras em -ema/-oma/-ama</td>
                <td>Geralmente masc. (o problema)</td>
                <td>Sempre masc. (el problema)</td>
              </tr>
              <tr>
                <td>Plural de palavras em -z</td>
                <td><em>voz → vozes</em></td>
                <td><em>voz → voces</em></td>
              </tr>
              <tr>
                <td>Dias da semana com artigo</td>
                <td><em>na segunda-feira</em></td>
                <td><em>el lunes</em> (artigo def.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação no ENEM</span>
        <h2>11. Como esse conhecimento aparece nas questões do ENEM</h2>
        <p>
          O ENEM raramente cobra o sistema de artigos de forma isolada ("qual é o artigo correto?"). O que aparece são questões que exigem que o candidato identifique o referente de um pronome ou adjetivo, perceba a ironia ou ambiguidade criada por uma escolha lexical específica, ou compreenda a estrutura informacional de um parágrafo — e para isso é necessário saber como funciona a concordância nominal em espanhol.
        </p>
        <p>
          Na prática, o candidato precisa ser capaz de: (a) identificar se um artigo é definido ou indefinido e o que isso implica do ponto de vista informacional (<em>el problema</em> pressupõe que o problema já foi mencionado; <em>un problema</em> o introduz como novo); (b) usar o gênero dos artigos para rastrear referências; (c) reconhecer palavras de gênero inesperado (como <em>el día, el sistema, el tema</em>) para não confundir concordância; (d) identificar plurais irregulares (<em>voces, veces, peces</em>) ao lê-los nos textos.
        </p>
        <div className="lesson-highlight">
          <strong>Resumo estratégico:</strong> Ao ler um texto em espanhol no ENEM, preste atenção especial aos artigos — eles revelam o gênero de substantivos que você talvez não conheça, permitem rastrear referências e indicam se a informação é nova ou já conhecida no contexto. Esse é um dos recursos mais poderosos da interpretação textual em língua estrangeira.
        </div>
      </section>

      {/* ── SEÇÃO 12: EXERCÍCIOS ── */}
      <section className="lesson-section">

        <Exercise
          level="Básico"
          title="1. Artigo definido correto"
          statement={
            <p>
              Escolha o artigo definido correto para completar a frase:<br />
              <em>___ problema que enfrentamos es muy grave.</em>
            </p>
          }
          options={[
            { letter: "a", text: "La" },
            { letter: "b", text: "El", correct: true },
            { letter: "c", text: "Los" },
            { letter: "d", text: "Las" },
            { letter: "e", text: "Una" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) El</strong>. A palavra <em>problema</em> é masculina em espanhol (termina em <em>-ema</em>, de origem grega), portanto o artigo definido correto é <em>el</em> (masculino singular). Não se deixe enganar pela terminação <em>-a</em>, que normalmente indica feminino — esse é um falso cognato de gênero que o ENEM pode explorar.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Plural de substantivos terminados em -z"
          statement={
            <p>
              Qual é a forma plural correta das palavras destacadas na frase abaixo?<br />
              <em>"La <strong>voz</strong> del cantante y la <strong>vez</strong> que actuó en Buenos Aires quedaron en la memoria del público."</em>
            </p>
          }
          options={[
            { letter: "a", text: "las vozs / las vezs" },
            { letter: "b", text: "las voces / las vezes" },
            { letter: "c", text: "las voces / las veces", correct: true },
            { letter: "d", text: "las vozces / las vecez" },
            { letter: "e", text: "los voces / los veces" },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) las voces / las veces</strong>. Substantivos terminados em <em>-z</em> formam o plural com <em>-ces</em>: <em>voz → voces</em> e <em>vez → veces</em>. Note que o artigo também vai para o feminino plural (<em>las</em>), concordando com ambos os substantivos femininos. A alternativa "vezes" (b) usa o padrão português, mas em espanhol a transformação é <em>-z → -ces</em>, não <em>-z → -zes</em>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Contração e concordância nominal"
          statement={
            <p>
              Assinale a alternativa que preenche corretamente as lacunas da frase:<br />
              <em>"Los estudiantes fueron ___ museo y hablaron ___ director sobre ___ nueva exposición."</em>
            </p>
          }
          options={[
            { letter: "a", text: "a el / de el / la" },
            { letter: "b", text: "al / del / la", correct: true },
            { letter: "c", text: "al / de el / una" },
            { letter: "d", text: "a el / del / la" },
            { letter: "e", text: "al / del / el" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) al / del / la</strong>. As preposições <em>a</em> e <em>de</em> contraem-se obrigatoriamente com o artigo masculino singular <em>el</em>, formando <em>al</em> e <em>del</em>, respectivamente. A forma <em>"a el"</em> ou <em>"de el"</em> (sem acento) é agramatical em espanhol. A terceira lacuna pede o artigo feminino singular <em>la</em>, pois <em>exposición</em> é feminino (terminação <em>-ción</em>).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Interpretação com rastreamento por concordância"
          statement={
            <div>
              <p>Leia o fragmento de texto e responda à questão:</p>
              <blockquote>
                <em>
                  "La directora del colegio presentó un informe detallado sobre los resultados académicos del año. El documento, considerado innovador por los expertos consultados, propone una nueva metodología para la enseñanza de las ciencias. La propuesta fue bien recibida por la comunidad escolar."
                </em>
              </blockquote>
              <p>
                No trecho, o adjetivo <em>innovador</em> refere-se a qual substantivo?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "la directora" },
            { letter: "b", text: "un informe" },
            { letter: "c", text: "los resultados" },
            { letter: "d", text: "el documento", correct: true },
            { letter: "e", text: "la propuesta" },
          ]}
          resolution={
            <p>
              Resposta: <strong>d) el documento</strong>. O adjetivo <em>innovador</em> está no masculino singular, concordando com <em>el documento</em> (masculino singular). Os outros candidatos possíveis são descartados pela concordância: <em>la directora</em> e <em>la propuesta</em> são femininos; <em>un informe</em> é masculino singular mas aparece na frase anterior, enquanto <em>el documento</em> é o sujeito imediato da oração em que <em>innovador</em> aparece; <em>los resultados</em> é plural. O rastreamento por concordância de gênero e número permite identificar o referente com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Falsos cognatos de gênero em contexto textual"
          statement={
            <div>
              <p>Leia o trecho abaixo, retirado de um artigo de opinião publicado em um jornal hispânico:</p>
              <blockquote>
                <em>
                  "El sistema educativo enfrenta hoy un gran dilema: ¿cómo mantener el calor humano de la enseñanza presencial en un mundo cada vez más digital? La sangre de la educación es el vínculo entre docente y alumno, algo que ningún algoritmo puede replicar. El día en que perdamos ese vínculo, perderemos también el alma de la escuela."
                </em>
              </blockquote>
              <p>
                Com base no texto, qual das alternativas descreve corretamente o gênero gramatical das palavras em destaque: <em>sistema, calor, sangre</em> e <em>día</em>?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "todos são masculinos" },
            { letter: "b", text: "sistema e calor são masculinos; sangre e día são femininos" },
            { letter: "c", text: "sistema, calor e día são masculinos; sangre é feminino", correct: true },
            { letter: "d", text: "todos são femininos por terminarem em vogal ou consoante sonora" },
            { letter: "e", text: "sistema é feminino; calor, sangre e día são masculinos" },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) sistema, calor e día são masculinos; sangre é feminino</strong>. No texto, os artigos confirmam o gênero: <em><strong>el</strong> sistema</em> (masc.), <em><strong>el</strong> calor</em> (masc.), <em><strong>la</strong> sangre</em> (fem.) e <em><strong>el</strong> día</em> (masc.). Note que <em>la sangre</em> é um dos casos em que o espanhol difere do português ("o sangue" é masculino em PT). Os demais seguem o mesmo gênero dos cognatos portugueses: "o sistema", "o calor", "o dia" — todos masculinos. Saber identificar esses gêneros pelos artigos é uma estratégia fundamental de leitura para o ENEM.
            </p>
          }
        />

      </section>

    </article>
  );
}
