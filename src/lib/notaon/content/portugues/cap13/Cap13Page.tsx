"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">

      <div className="lesson-hero">
        <span className="lesson-badge">Português • Capítulo 13</span>
        <h1>Classes Gramaticais II</h1>
        <p>
          Neste capítulo você dominará as classes de palavras variáveis e invariáveis mais cobradas
          no ENEM: verbo (com toda a sua riqueza de conjugações, vozes e formas nominais), advérbio,
          preposição, conjunção e interjeição. Entender como cada classe funciona na frase é
          indispensável para interpretar textos com precisão, responder questões de gramática
          contextualizada e produzir redações coesas.
        </p>
      </div>

      <section className="lesson-section">
        <span className="section-kicker">1 — Verbo: conceito e classificação</span>
        <h2>O que é verbo e como ele se classifica quanto à transitividade</h2>
        <p>
          O <strong>verbo</strong> é a classe de palavras que exprime ação, estado, fenômeno da
          natureza ou ocorrência, situando o evento no tempo. É o núcleo do predicado e o maior
          responsável pela organização sintática da frase, pois determina quais complementos são
          necessários ou facultativos.
        </p>
        <p>
          A <strong>transitividade verbal</strong> indica se o verbo precisa ou não de complemento
          para ter sentido completo. Essa distinção é fundamental porque define os termos da oração
          (objeto direto, objeto indireto, predicativo) e interfere diretamente na interpretação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Transitivo Direto (VTD)</h3>
            <p>
              Exige complemento <strong>sem preposição obrigatória</strong> (objeto direto).
              Ex.: <em>Ela comprou o livro.</em> O verbo "comprar" pede o quê? → "o livro" sem
              preposição.
            </p>
          </div>
          <div className="lesson-card">
            <span>🟠</span>
            <h3>Transitivo Indireto (VTI)</h3>
            <p>
              Exige complemento <strong>com preposição obrigatória</strong> (objeto indireto).
              Ex.: <em>Ele gosta de música.</em> O verbo "gostar" pede de quê? → "de música" com
              preposição regida.
            </p>
          </div>
          <div className="lesson-card">
            <span>🟣</span>
            <h3>Bitransitivo (VTDI)</h3>
            <p>
              Exige <strong>dois complementos</strong>: OD (sem preposição) + OI (com preposição).
              Ex.: <em>O professor entregou o trabalho aos alunos.</em> "trabalho" = OD;
              "aos alunos" = OI.
            </p>
          </div>
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Intransitivo (VI)</h3>
            <p>
              Não exige complemento; o sentido se fecha no próprio verbo.
              Ex.: <em>O bebê dormiu.</em> "Dormiu" não precisa de objeto para ter sentido pleno.
            </p>
          </div>
          <div className="lesson-card">
            <span>⭐</span>
            <h3>De Ligação (VL)</h3>
            <p>
              Liga sujeito ao <strong>predicativo</strong>; não exprime ação, mas estado ou
              mudança de estado. Verbos: <em>ser, estar, ficar, parecer, permanecer, continuar,
              tornar-se, andar, viver</em>.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O ENEM costuma apresentar verbos em contextos nos quais a
          transitividade muda de acordo com o sentido. "Assistir" pode ser VTI (assistir
          <em> a</em> um filme) ou VTD (assistir = ajudar alguém). Fique atento ao contexto!
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Classificação</th>
                <th>Exemplo</th>
                <th>Complemento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amar</td>
                <td>VTD</td>
                <td>Ela ama a arte.</td>
                <td>OD: "a arte"</td>
              </tr>
              <tr>
                <td>Depender</td>
                <td>VTI</td>
                <td>Tudo depende de esforço.</td>
                <td>OI: "de esforço"</td>
              </tr>
              <tr>
                <td>Dar</td>
                <td>VTDI</td>
                <td>Dei um presente a ela.</td>
                <td>OD + OI</td>
              </tr>
              <tr>
                <td>Correr</td>
                <td>VI</td>
                <td>Pedro correu muito.</td>
                <td>Não tem</td>
              </tr>
              <tr>
                <td>Estar</td>
                <td>VL</td>
                <td>Ana está feliz.</td>
                <td>Predicativo: "feliz"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2 — Verbos de Ligação</span>
        <h2>Ser, Estar, Ficar e os outros verbos de ligação</h2>
        <p>
          Os <strong>verbos de ligação</strong> formam o predicado nominal. Eles não exprimem
          ação; servem de elo entre o sujeito e um predicativo, que pode ser um adjetivo, um
          substantivo ou uma locução adjetiva.
        </p>
        <p>
          A escolha do verbo de ligação carrega informação semântica importante: <em>ser</em>{" "}
          indica característica permanente; <em>estar</em> indica estado transitório; <em>ficar</em>{" "}
          indica mudança de estado; <em>parecer</em> indica aparência; <em>permanecer / continuar</em>{" "}
          indicam permanência; <em>tornar-se</em> indica transformação gradual.
        </p>
        <div className="math-block">
          <p><strong>Ser (permanência):</strong> "Pedro é inteligente." — traço inerente</p>
          <p><strong>Estar (transitoriedade):</strong> "Pedro está nervoso." — estado temporário</p>
          <p><strong>Ficar (mudança):</strong> "Pedro ficou animado com a notícia." — resultado de mudança</p>
          <p><strong>Parecer (aparência):</strong> "Pedro parece cansado." — impressão</p>
          <p><strong>Permanecer / Continuar:</strong> "Pedro permaneceu quieto." — manutenção de estado</p>
          <p><strong>Tornar-se:</strong> "Pedro tornou-se famoso." — transformação gradual</p>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> Verbos como <em>viver, andar</em> e <em>acabar</em> também
          podem funcionar como verbos de ligação em certos contextos: "Ela vive estressada." /
          "Ele anda preocupado." Identifique sempre pela presença do predicativo e pela ausência
          de ação concreta.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3 — Conjugação Verbal: Modos e Tempos</span>
        <h2>Modo Indicativo, Subjuntivo e Imperativo</h2>
        <p>
          O verbo flexiona-se em <strong>modo</strong>, <strong>tempo</strong>,{" "}
          <strong>número</strong>, <strong>pessoa</strong>, <strong>aspecto</strong> e{" "}
          <strong>voz</strong>. O <strong>modo</strong> indica a atitude do falante em relação
          ao fato enunciado.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>Modo Indicativo</h3>
            <p>
              Enuncia fatos <strong>certos ou reais</strong>. Tempos simples: presente, pretérito
              perfeito, pretérito imperfeito, pretérito mais-que-perfeito, futuro do presente,
              futuro do pretérito. Tempos compostos: têm sido, tinha ido, terei feito, etc.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Modo Subjuntivo</h3>
            <p>
              Enuncia fatos <strong>incertos, duvidosos, hipotéticos ou desejados</strong>.
              Presente ("que eu fale"), imperfeito ("se eu falasse"), futuro ("quando eu falar").
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Modo Imperativo</h3>
            <p>
              Exprime <strong>ordem, pedido, proibição ou conselho</strong>. Afirmativo deriva
              do presente do indicativo (2ª p. sg. sem -s: "fala!"). Negativo deriva do presente
              do subjuntivo ("não fales!").
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Diagrama dos modos verbais e seus tempos"
          >
            <rect x="0" y="0" width="700" height="260" rx="12" fill="#f8faff" stroke="#c7d7f5" strokeWidth="1.5" />
            <text x="350" y="30" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#1e3a8a">MODOS VERBAIS</text>

            <rect x="30" y="50" width="190" height="185" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="125" y="72" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">INDICATIVO</text>
            <text x="125" y="93" textAnchor="middle" fontSize="11" fill="#1e3a8a">Presente</text>
            <text x="125" y="111" textAnchor="middle" fontSize="11" fill="#1e3a8a">Pret. Perfeito</text>
            <text x="125" y="129" textAnchor="middle" fontSize="11" fill="#1e3a8a">Pret. Imperfeito</text>
            <text x="125" y="147" textAnchor="middle" fontSize="11" fill="#1e3a8a">Pret. M-q-Perfeito</text>
            <text x="125" y="165" textAnchor="middle" fontSize="11" fill="#1e3a8a">Futuro do Presente</text>
            <text x="125" y="183" textAnchor="middle" fontSize="11" fill="#1e3a8a">Futuro do Pretérito</text>
            <text x="125" y="204" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontStyle="italic">+ tempos compostos</text>

            <rect x="255" y="50" width="190" height="185" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" />
            <text x="350" y="72" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">SUBJUNTIVO</text>
            <text x="350" y="98" textAnchor="middle" fontSize="11" fill="#831843">Presente</text>
            <text x="350" y="120" textAnchor="middle" fontSize="12" fill="#6b7280" fontStyle="italic">"que eu fale"</text>
            <text x="350" y="144" textAnchor="middle" fontSize="11" fill="#831843">Imperfeito</text>
            <text x="350" y="166" textAnchor="middle" fontSize="12" fill="#6b7280" fontStyle="italic">"se eu falasse"</text>
            <text x="350" y="190" textAnchor="middle" fontSize="11" fill="#831843">Futuro</text>
            <text x="350" y="212" textAnchor="middle" fontSize="12" fill="#6b7280" fontStyle="italic">"quando eu falar"</text>

            <rect x="480" y="50" width="190" height="185" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
            <text x="575" y="72" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">IMPERATIVO</text>
            <text x="575" y="100" textAnchor="middle" fontSize="11" fill="#047857">Afirmativo</text>
            <text x="575" y="118" textAnchor="middle" fontSize="11" fill="#374151">Base: Ind. Presente</text>
            <text x="575" y="136" textAnchor="middle" fontSize="12" fill="#6b7280" fontStyle="italic">"Fala! / Venha!"</text>
            <text x="575" y="162" textAnchor="middle" fontSize="11" fill="#047857">Negativo</text>
            <text x="575" y="180" textAnchor="middle" fontSize="11" fill="#374151">Base: Subj. Presente</text>
            <text x="575" y="198" textAnchor="middle" fontSize="12" fill="#6b7280" fontStyle="italic">"Não fales! / Não venha!"</text>
          </svg>
          <figcaption>Os três modos verbais com seus respectivos tempos e exemplos.</figcaption>
        </figure>

        <div className="math-block">
          <p><strong>Imperativo Afirmativo (tu/vós):</strong> Retira-se o -s final da 2ª pessoa do singular do Presente do Indicativo.</p>
          <p>→ "Tu falas" → "Fala!" | "Tu comes" → "Come!" | "Tu partes" → "Parte!"</p>
          <p><strong>Imperativo Negativo (todas as pessoas):</strong> Usa-se o Presente do Subjuntivo.</p>
          <p>→ "Não fales." | "Não coma." | "Não partamos." | "Não falem."</p>
          <p><strong>Atenção — verbos irregulares:</strong> "Ser" → afirmativo: "sê!" / negativo: "não sejas!"</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">4 — Formas Nominais do Verbo</span>
        <h2>Infinitivo, Gerúndio e Particípio</h2>
        <p>
          As <strong>formas nominais</strong> são formas verbais que podem funcionar como substantivo
          (infinitivo), adjetivo (particípio) ou advérbio/adjetivo (gerúndio). Elas não exprimem
          diretamente modo ou tempo, mas podem aparecer em locuções verbais.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Infinitivo</h3>
            <p>
              <strong>Impessoal:</strong> não flexiona, funciona como substantivo. "É importante
              estudar." | <strong>Pessoal:</strong> flexiona em pessoa e número. "É necessário
              estudarmos juntos." Usado quando sujeitos são diferentes.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Gerúndio</h3>
            <p>
              Termina em <strong>-ndo</strong>. Exprime ação em progresso ou simultânea a
              outra. Pode funcionar como adjunto adverbial, adjetivo ou núcleo de locução
              verbal. "Estudando, aprendo mais."
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Particípio Regular</h3>
            <p>
              Termina em <strong>-ado / -ido</strong>. Forma tempos compostos com
              ter/haver: "Havia estudado." Funciona como adjetivo: "O trabalho terminado."
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Particípio Irregular</h3>
            <p>
              Forma paralela ao regular, usada com ser/estar (voz passiva analítica).
              Ex.: aceito/aceitado, preso/prendido, gasto/gastado — "O criminoso foi preso."
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Particípio Regular</th>
                <th>Particípio Irregular</th>
                <th>Uso correto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aceitar</td>
                <td>aceitado</td>
                <td>aceito</td>
                <td>"Tinha aceitado" / "foi aceito"</td>
              </tr>
              <tr>
                <td>Imprimir</td>
                <td>imprimido</td>
                <td>impresso</td>
                <td>"Havia imprimido" / "foi impresso"</td>
              </tr>
              <tr>
                <td>Prender</td>
                <td>prendido</td>
                <td>preso</td>
                <td>"Tinha prendido" / "foi preso"</td>
              </tr>
              <tr>
                <td>Ganhar</td>
                <td>ganhado</td>
                <td>ganho</td>
                <td>"Tinha ganhado" / "foi ganho"</td>
              </tr>
              <tr>
                <td>Eleger</td>
                <td>elegido</td>
                <td>eleito</td>
                <td>"Tinha elegido" / "foi eleito"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> Com os auxiliares <em>ter</em> e <em>haver</em> (voz
          ativa), usa-se o particípio <strong>regular</strong> (-ado/-ido). Com os auxiliares{" "}
          <em>ser</em> e <em>estar</em> (voz passiva ou estado), usa-se o particípio{" "}
          <strong>irregular</strong> (quando existir).
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">5 — Locução Verbal e Flexões do Verbo</span>
        <h2>Locução verbal e as seis flexões verbais</h2>
        <p>
          A <strong>locução verbal</strong> é formada por um verbo <em>auxiliar</em> + um verbo
          principal em forma nominal (infinitivo, gerúndio ou particípio). O auxiliar carrega
          as flexões de modo, tempo, número e pessoa; o principal traz o sentido lexical da ação.
        </p>
        <div className="math-block">
          <p><strong>Auxiliar + Infinitivo:</strong> "Vou estudar." | "Devo chegar cedo."</p>
          <p><strong>Auxiliar + Gerúndio:</strong> "Estava correndo." | "Ficou pensando."</p>
          <p><strong>Auxiliar + Particípio:</strong> "Tinha saído." | "Foi aprovado."</p>
        </div>
        <p>
          As <strong>seis flexões verbais</strong> são dimensões pelas quais o verbo varia
          morfologicamente para expressar diferentes informações gramaticais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Flexão</th>
                <th>O que indica</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Número</strong></td>
                <td>Singular ou plural</td>
                <td>fala / falam</td>
              </tr>
              <tr>
                <td><strong>Pessoa</strong></td>
                <td>1ª, 2ª ou 3ª pessoa</td>
                <td>falo / falas / fala</td>
              </tr>
              <tr>
                <td><strong>Tempo</strong></td>
                <td>Passado, presente, futuro</td>
                <td>falei / falo / falarei</td>
              </tr>
              <tr>
                <td><strong>Modo</strong></td>
                <td>Certeza, hipótese, ordem</td>
                <td>fala / fale / fala!</td>
              </tr>
              <tr>
                <td><strong>Aspecto</strong></td>
                <td>Ação concluída ou em curso</td>
                <td>falei (perfectivo) / falava (imperfectivo)</td>
              </tr>
              <tr>
                <td><strong>Voz</strong></td>
                <td>Quem pratica ou sofre a ação</td>
                <td>ativa / passiva / reflexiva</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Voz Passiva no ENEM:</strong> A prova explora muito a transformação de voz
          ativa em passiva analítica (ser + particípio) e passiva sintética (SE + VTD).
          Ex.: "Vendem-se casas." = "Casas são vendidas." O sujeito da ativa vira agente da
          passiva (introduzido por "por/pelo").
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">6 — Advérbio</span>
        <h2>Advérbio: classificações, locuções e funções</h2>
        <p>
          O <strong>advérbio</strong> é a classe de palavras <em>invariável</em> que modifica
          verbo, adjetivo, outro advérbio ou mesmo uma oração inteira. A principal característica
          do advérbio é <strong>não variar em gênero e número</strong> (exceção: os advérbios
          em -mente derivados de adjetivos e os que admitem grau).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏰</span>
            <h3>Tempo</h3>
            <p>hoje, ontem, amanhã, sempre, nunca, cedo, tarde, já, ainda, então, antigamente, logo, brevemente</p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Lugar</h3>
            <p>aqui, ali, lá, acolá, cá, onde, longe, perto, acima, abaixo, dentro, fora, adiante, detrás</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Modo</h3>
            <p>bem, mal, assim, devagar, depressa, melhor, pior + a maioria dos advérbios em -mente: rapidamente, claramente</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Intensidade</h3>
            <p>muito, pouco, bastante, demais, mais, menos, tão, quão, quanto, nada, quase, apenas, assaz</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Negação / Afirmação</h3>
            <p><strong>Negação:</strong> não, nem, tampouco, jamais | <strong>Afirmação:</strong> sim, certamente, realmente, efetivamente, também</p>
          </div>
          <div className="lesson-card">
            <span>🤔</span>
            <h3>Dúvida</h3>
            <p>talvez, quiçá, provavelmente, possivelmente, acaso, porventura — frequentemente acompanhados do subjuntivo</p>
          </div>
        </div>

        <p>
          As <strong>locuções adverbiais</strong> são expressões formadas por duas ou mais
          palavras com valor de advérbio. Geralmente são preposição + substantivo: <em>às vezes,
          de repente, por acaso, em breve, de modo algum, a contragosto, à toa, de madrugada</em>.
        </p>
        <div className="lesson-highlight">
          <strong>Grau do Advérbio:</strong> Comparativo de superioridade ("fala mais alto"),
          igualdade ("fala tão alto quanto"), inferioridade ("fala menos alto"). Superlativo
          absoluto sintético: "tardíssimo", "pouquíssimo", "muitíssimo".
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">7 — Preposição</span>
        <h2>Preposição: simples, compostas, contrações e relações semânticas</h2>
        <p>
          A <strong>preposição</strong> é palavra invariável que estabelece relação de
          dependência entre termos da oração, subordinando um termo (determinante) a outro
          (determinado). Sem ela, muitos complementos verbais e nominais ficam gramaticalmente
          incompletos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Preposições Simples</h3>
            <p>a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás</p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Preposições Compostas (locuções)</h3>
            <p>abaixo de, acima de, além de, antes de, depois de, ao lado de, a fim de, por causa de, por meio de, em frente a</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação Semântica</th>
                <th>Preposição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Posse / origem</td>
                <td>de</td>
                <td>O livro de Maria.</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td>por, de, com</td>
                <td>Chorou de alegria.</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>para, a fim de</td>
                <td>Estuda para passar.</td>
              </tr>
              <tr>
                <td>Instrumento</td>
                <td>com, por meio de</td>
                <td>Escreveu com caneta.</td>
              </tr>
              <tr>
                <td>Lugar</td>
                <td>em, a, de, sobre, entre</td>
                <td>Mora em São Paulo.</td>
              </tr>
              <tr>
                <td>Tempo</td>
                <td>em, a, de, por, antes de</td>
                <td>Chegou às dez horas.</td>
              </tr>
              <tr>
                <td>Companhia</td>
                <td>com</td>
                <td>Saiu com os amigos.</td>
              </tr>
              <tr>
                <td>Assunto</td>
                <td>sobre, acerca de, a respeito de</td>
                <td>Falou sobre política.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Contração</strong> é a fusão obrigatória de preposição + artigo ou pronome:{" "}
          <em>de + o = do, a + o = ao, em + um = num, por + o = pelo</em>. Já a{" "}
          <strong>combinação</strong> é a fusão sem perda fonética:{" "}
          <em>a + onde = aonde</em>.
        </p>

        <div className="lesson-highlight">
          <strong>Crase e preposição "a":</strong> A crase (à) ocorre quando há fusão da
          preposição "a" com o artigo feminino "a" ou com os pronomes demonstrativos
          "aquele(s)/aquela(s)/aquilo". Identificar a preposição é o primeiro passo para
          determinar o uso correto da crase.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">8 — Conjunção Coordenativa</span>
        <h2>Conjunções Coordenativas: as cinco classes</h2>
        <p>
          As <strong>conjunções coordenativas</strong> ligam orações independentes (coordenadas)
          ou termos de mesma função sintática. As orações coordenadas não dependem
          sintaticamente uma da outra — cada uma tem sentido completo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Sentido</th>
                <th>Conjunções</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aditiva</strong></td>
                <td>Adição, acréscimo</td>
                <td>e, nem, não só... mas também, bem como</td>
                <td>Estuda e trabalha.</td>
              </tr>
              <tr>
                <td><strong>Adversativa</strong></td>
                <td>Oposição, contraste</td>
                <td>mas, porém, contudo, todavia, no entanto, entretanto</td>
                <td>Estudou mas não passou.</td>
              </tr>
              <tr>
                <td><strong>Alternativa</strong></td>
                <td>Alternância, exclusão</td>
                <td>ou, ou...ou, ora...ora, quer...quer, seja...seja</td>
                <td>Ou vem ou vai.</td>
              </tr>
              <tr>
                <td><strong>Conclusiva</strong></td>
                <td>Conclusão de raciocínio</td>
                <td>logo, portanto, por isso, assim, pois (posposto)</td>
                <td>Estudou; logo, passou.</td>
              </tr>
              <tr>
                <td><strong>Explicativa</strong></td>
                <td>Motivo, justificativa</td>
                <td>pois (anteposto), porque, que, porquanto</td>
                <td>Coma, pois está fraco.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM — "pois":</strong> O "pois" <strong>anteposto</strong> ao verbo
          é explicativo (coordenativo). O "pois" <strong>posposto</strong> (entre vírgulas ou
          no meio da oração) é conclusivo. Saber essa diferença já resolve várias questões de
          coesão textual.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">9 — Conjunção Subordinativa</span>
        <h2>Conjunções Subordinativas: integrantes e adverbiais</h2>
        <p>
          As <strong>conjunções subordinativas</strong> introduzem orações dependentes
          (subordinadas) que completam ou modificam a oração principal. Dividem-se em
          <strong> integrantes</strong> (introduzem completivas) e <strong>adverbiais</strong>{" "}
          (introduzem circunstanciais).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 340"
            width="720"
            height="340"
            aria-label="Mapa das conjunções subordinativas adverbiais e seus sentidos"
          >
            <rect x="0" y="0" width="720" height="340" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
            <text x="360" y="28" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#14532d">CONJUNÇÕES SUBORDINATIVAS ADVERBIAIS</text>

            <rect x="260" y="42" width="200" height="42" rx="8" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1.5" />
            <text x="360" y="62" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#166534">CAUSA</text>
            <text x="360" y="78" textAnchor="middle" fontSize="10" fill="#15803d">porque, pois, já que, uma vez que, visto que</text>

            <rect x="20" y="105" width="200" height="42" rx="8" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="120" y="125" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">CONCESSÃO</text>
            <text x="120" y="141" textAnchor="middle" fontSize="10" fill="#1d4ed8">embora, ainda que, mesmo que, apesar de que</text>

            <rect x="500" y="105" width="200" height="42" rx="8" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="600" y="125" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#92400e">CONDIÇÃO</text>
            <text x="600" y="141" textAnchor="middle" fontSize="10" fill="#b45309">se, caso, desde que, contanto que, a menos que</text>

            <rect x="20" y="170" width="200" height="42" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" />
            <text x="120" y="190" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">FINALIDADE</text>
            <text x="120" y="206" textAnchor="middle" fontSize="10" fill="#be185d">para que, a fim de que</text>

            <rect x="260" y="170" width="200" height="42" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="360" y="190" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#5b21b6">CONSEQUÊNCIA</text>
            <text x="360" y="206" textAnchor="middle" fontSize="10" fill="#7c3aed">de modo que, tanto que, de forma que</text>

            <rect x="500" y="170" width="200" height="42" rx="8" fill="#ffedd5" stroke="#f97316" strokeWidth="1.5" />
            <text x="600" y="190" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9a3412">COMPARAÇÃO</text>
            <text x="600" y="206" textAnchor="middle" fontSize="10" fill="#c2410c">como, assim como, bem como, tanto quanto</text>

            <rect x="20" y="235" width="200" height="42" rx="8" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x="120" y="255" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#0c4a6e">TEMPO</text>
            <text x="120" y="271" textAnchor="middle" fontSize="10" fill="#0369a1">quando, enquanto, assim que, antes que, depois que</text>

            <rect x="260" y="235" width="200" height="42" rx="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
            <text x="360" y="255" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#14532d">INTEGRANTE</text>
            <text x="360" y="271" textAnchor="middle" fontSize="10" fill="#166534">que, se (completivas nominais e verbais)</text>

            <rect x="500" y="235" width="200" height="42" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5" />
            <text x="600" y="255" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#713f12">PROPORÇÃO</text>
            <text x="600" y="271" textAnchor="middle" fontSize="10" fill="#a16207">à medida que, à proporção que, quanto mais...mais</text>
          </svg>
          <figcaption>Mapa completo das conjunções subordinativas adverbiais por sentido.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Concessão vs. Condição no ENEM:</strong> A concessão admite um fato contrário
          à expectativa sem impedir a conclusão: "Embora chovesse, saímos." A condição apresenta
          um fato hipotético do qual depende a oração principal: "Se chover, não sairemos."
          A diferença de sentido impacta diretamente a interpretação textual.
        </div>

        <div className="math-block">
          <p><strong>Causa x Explicação:</strong> Causa ocorre em oração subordinada adverbial causal: "Ele faltou porque estava doente." (fato real anterior). Explicação ocorre em oração coordenada explicativa: "Ele deve estar doente, pois faltou." (dedução, conclusão lógica)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">10 — Interjeição</span>
        <h2>Interjeição: expressão da linguagem afetiva</h2>
        <p>
          A <strong>interjeição</strong> é palavra ou locução invariável que exprime de forma
          espontânea e imediata estados afetivos, emoções, sensações ou apelos do falante.
          Diferencia-se das demais classes porque equivale a uma <em>frase</em> inteira condensada
          em uma palavra. Geralmente aparece isolada por ponto de exclamação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😮</span>
            <h3>Surpresa / Espanto</h3>
            <p>Oh! Ah! Uau! Caramba! Puxa! Nossa! Céus! Meu Deus! Que coisa!</p>
          </div>
          <div className="lesson-card">
            <span>😊</span>
            <h3>Alegria / Satisfação</h3>
            <p>Oba! Viva! Hurra! Eba! Que bom!</p>
          </div>
          <div className="lesson-card">
            <span>😞</span>
            <h3>Tristeza / Lamento</h3>
            <p>Ai! Ah! Ui! Coitado! Que pena! Infelizmente!</p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Chamamento / Apelo</h3>
            <p>Psiu! Ei! Olá! Ô! Alô! Socorro! Atenção!</p>
          </div>
          <div className="lesson-card">
            <span>🤫</span>
            <h3>Silêncio / Ordem</h3>
            <p>Silêncio! Basta! Chega! Quieto! Calma! Sai!</p>
          </div>
          <div className="lesson-card">
            <span>🤢</span>
            <h3>Repulsa / Medo</h3>
            <p>Eca! Que nojo! Credo! Argh! Uf! Ufa!</p>
          </div>
        </div>

        <p>
          As <strong>locuções interjetivas</strong> são expressões com valor de interjeição:
          "Meu Deus!", "Ora bolas!", "Muito bem!", "Até logo!", "Que absurdo!". A interjeição
          não exerce função sintática dentro da oração; é um termo à parte, chamado de{" "}
          <strong>vocativo</strong> quando acompanha chamamento de pessoa, ou simplesmente{" "}
          <strong>interjeição</strong> nos demais casos.
        </p>
        <div className="lesson-highlight">
          <strong>Interjeição no ENEM:</strong> O ENEM quase não cobra interjeição de forma
          isolada, mas a usa em questões de <em>linguagem coloquial, gêneros textuais</em>{" "}
          (charges, tirinhas, anúncios publicitários) e <em>variação linguística</em>. Reconhecer
          o valor expressivo da interjeição ajuda a interpretar o tom afetivo do texto.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">11 — Síntese e Exercícios</span>
        <h2>Revise e treine: 5 questões no estilo ENEM</h2>
        <p>
          Teste seus conhecimentos com as questões abaixo. Cada uma aborda um aspecto diferente
          das classes gramaticais estudadas neste capítulo.
        </p>

        <Exercise
          title="Exercício 1 — Transitividade Verbal"
          level="Básico"
          statement={
            <p>
              Analise as frases: I. "O aluno assistiu ao filme." | II. "A enfermeira assistiu o
              paciente." | III. "Todos assistiram ao espetáculo." A respeito da transitividade
              do verbo "assistir" nessas frases, é CORRETO afirmar:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O verbo é transitivo indireto nas três frases, pois sempre exige preposição.",
            },
            {
              letter: "b",
              text: "O verbo é transitivo direto nas três frases, pois nunca admite preposição.",
            },
            {
              letter: "c",
              text: 'O verbo é transitivo indireto em I e III (sentido de "ver/presenciar") e transitivo direto em II (sentido de "ajudar/cuidar").',
              correct: true,
            },
            {
              letter: "d",
              text: "O verbo é intransitivo em todas as frases porque não precisaria de complemento.",
            },
          ]}
          resolution={
            <p>
              O verbo "assistir" tem dois empregos distintos: quando significa <em>ver, presenciar,
              comparecer</em>, é <strong>transitivo indireto</strong> e exige a preposição "a"
              (objeto indireto). Quando significa <em>ajudar, socorrer, cuidar</em>, é{" "}
              <strong>transitivo direto</strong> e não exige preposição (objeto direto). Nas frases
              I e III, o sentido é "ver/presenciar"; logo, VTI. Na frase II, o sentido é "cuidar";
              logo, VTD. Alternativa correta: C.
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Imperativo e Modo Verbal"
          level="Intermediário"
          statement={
            <p>
              Em uma campanha publicitária, o redator precisava criar dois slogans distintos:
              um usando imperativo afirmativo (tratamento por "tu") e outro usando imperativo
              negativo (tratamento por "você"). Para o verbo "vir", qual é a combinação CORRETA?
            </p>
          }
          options={[
            {
              letter: "a",
              text: '"Vem para cá!" (afirmativo) e "Não venha para cá!" (negativo).',
              correct: true,
            },
            {
              letter: "b",
              text: '"Venha para cá!" (afirmativo) e "Não vem para cá!" (negativo).',
            },
            {
              letter: "c",
              text: '"Vem para cá!" (afirmativo) e "Não vem para cá!" (negativo).',
            },
            {
              letter: "d",
              text: '"Venha para cá!" (afirmativo) e "Não venhas para cá!" (negativo).',
            },
          ]}
          resolution={
            <p>
              O <strong>imperativo afirmativo de "tu"</strong> é formado a partir da 2ª pessoa do
              singular do presente do indicativo, retirando o -s: "Tu vens" → "Vem!" O{" "}
              <strong>imperativo negativo</strong> de qualquer pessoa é formado a partir do
              presente do subjuntivo: o subjuntivo de "vir" na 3ª pessoa é "venha" →
              "Não venha!" (forma usada no tratamento por "você", que usa 3ª pessoa).
              Portanto, a combinação correta é "Vem para cá!" + "Não venha para cá!" — alternativa A.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Conjunções e Relações de Sentido"
          level="Avançado"
          statement={
            <p>
              Leia o trecho: "A reforma foi aprovada pelo Congresso; contudo, a população
              permanece insatisfeita com o resultado." A conjunção sublinhada estabelece
              entre as orações uma relação de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Causa, pois apresenta o motivo da insatisfação popular.",
            },
            {
              letter: "b",
              text: "Adição, ampliando a ideia expressa na primeira oração.",
            },
            {
              letter: "c",
              text: "Conclusão, apresentando consequência lógica da aprovação.",
            },
            {
              letter: "d",
              text: "Oposição/adversidade, pois contrasta a aprovação legislativa com a insatisfação popular.",
              correct: true,
            },
          ]}
          resolution={
            <p>
              "Contudo" é uma conjunção coordenativa <strong>adversativa</strong> — pertence ao
              mesmo grupo de "mas, porém, todavia, no entanto, entretanto". Ela estabelece uma
              relação de <strong>oposição ou contraste</strong> entre duas ideias: esperava-se que
              a aprovação gerasse satisfação, mas ocorreu o contrário. Não há sentido de causa
              (explicação de um fato por outro anterior), nem de adição (acréscimo sem contraste),
              nem de conclusão (dedução lógica). Alternativa correta: D.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Particípio e Locução Verbal"
          level="Contextualizado"
          statement={
            <p>
              Considere os enunciados retirados de um relatório policial: "Os documentos haviam
              sido falsificados." / "O suspeito tinha falsificado os documentos." A diferença no
              uso do particípio "falsificado/falsificados" nas duas locuções verbais indica:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Apenas uma diferença estilística, sem impacto gramatical ou semântico.",
            },
            {
              letter: "b",
              text: 'No primeiro, usa-se particípio com auxiliar "ser" (voz passiva) e o particípio concorda com o sujeito; no segundo, usa-se particípio com auxiliar "ter" (voz ativa) e o particípio é invariável.',
              correct: true,
            },
            {
              letter: "c",
              text: "Nos dois casos, o particípio deve concordar com o sujeito, pois ambas as frases estão na voz passiva.",
            },
            {
              letter: "d",
              text: "Nos dois casos, o particípio é invariável porque ambas as locuções usam auxiliar composto.",
            },
          ]}
          resolution={
            <p>
              Na locução "haviam sido falsificados", o auxiliar "ser" integra a voz passiva
              analítica. Aqui o particípio funciona como adjetivo e <strong>concorda</strong>{" "}
              com o sujeito ("os documentos" — plural masculino → "falsificados"). Na locução
              "tinha falsificado", o auxiliar "ter" forma o pretérito mais-que-perfeito composto
              na voz ativa; o particípio com <em>ter/haver</em> é <strong>invariável</strong>{" "}
              (não concorda com nada). Essa distinção é uma das mais cobradas no ENEM.
              Alternativa correta: B.
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Conjunção Subordinativa em Texto"
          level="Contextualizado"
          statement={
            <p>
              Em um editorial jornalístico lê-se: "Embora os dados econômicos apontem
              recuperação, especialistas advertem que o desemprego ainda preocupa." A conjunção
              "embora" introduz uma oração subordinada adverbial de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Causa, pois explica o motivo da advertência dos especialistas.",
            },
            {
              letter: "b",
              text: "Condição, pois apresenta uma hipótese para a advertência.",
            },
            {
              letter: "c",
              text: "Concessão, pois admite um fato contrário à expectativa sem impedir a conclusão da oração principal.",
              correct: true,
            },
            {
              letter: "d",
              text: "Consequência, pois apresenta o resultado dos dados econômicos.",
            },
          ]}
          resolution={
            <p>
              "Embora" é conjunção <strong>concessiva</strong> por excelência. A oração concessiva
              admite um fato que deveria impedir a conclusão, mas não impede: os dados apontam
              recuperação (fato que poderia tranquilizar), mas mesmo assim (concessão) os
              especialistas advertem sobre o desemprego. O verbo na oração concessiva com
              "embora" obrigatoriamente vai para o <strong>subjuntivo</strong> ("apontem"),
              o que confirma o valor hipotético/concessivo. Alternativa correta: C.
            </p>
          }
        />

      </section>

    </article>
  );
}
