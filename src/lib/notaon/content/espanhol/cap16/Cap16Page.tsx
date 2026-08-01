"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 16</span>
          <h1>Pronomes reflexivos e verbos pronominais</h1>
          <p>
            Os pronomes reflexivos em espanhol são essenciais para expressar ações que recaem sobre o próprio
            sujeito, reciprocidade, mudanças de estado e nuances sutis de significado. Ao contrário do que
            muitos brasileiros pensam, nem todo uso de <em>se</em> em espanhol é reflexivo: há o <em>se</em>{" "}
            impessoal, o <em>se</em> passivo e verbos que simplesmente não existem sem pronome
            (<em>arrepentirse, quejarse</em>). Compreender quando o pronome é obrigatório, quando muda o
            significado do verbo e quando indica passividade ou impessoalidade é uma das habilidades mais
            cobradas pelo ENEM em língua espanhola, especialmente em textos jornalísticos e literários.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Pronomes reflexivos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Pronomes</span>
        <h2>Os pronomes reflexivos em espanhol</h2>
        <p>
          Os pronomes reflexivos em espanhol correspondem a "me", "te", "se", "nos", "os", "se". Eles
          acompanham o verbo e indicam que a ação recai sobre o próprio sujeito. Diferentemente do português,
          o espanhol usa esses pronomes com muito mais frequência e em uma gama muito maior de verbos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Pronome reflexivo</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><em>me</em></td><td><em>Me lavo las manos.</em></td><td>Lavo as minhas mãos.</td></tr>
              <tr><td>tú</td><td><em>te</em></td><td><em>Te despiertas tarde.</em></td><td>Você acorda tarde.</td></tr>
              <tr><td>él / ella / usted</td><td><em>se</em></td><td><em>Se peina cada mañana.</em></td><td>Ela se penteia toda manhã.</td></tr>
              <tr><td>nosotros</td><td><em>nos</em></td><td><em>Nos levantamos a las 7.</em></td><td>Nós nos levantamos às 7.</td></tr>
              <tr><td>vosotros</td><td><em>os</em></td><td><em>¿Os duchasteis ya?</em></td><td>Vocês já tomaram banho?</td></tr>
              <tr><td>ellos / ustedes</td><td><em>se</em></td><td><em>Se visten rápido.</em></td><td>Eles se vestem rápido.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> Em espanhol, o reflexivo frequentemente acompanha ações cotidianas que
          em português não usam pronome: <em>levantarse</em> (levantar-se), <em>acostarse</em> (deitar-se),
          <em>ducharse</em> (tomar banho), <em>afeitarse</em> (fazer a barba).
        </div>
      </section>

      {/* ── Seção 2: Verbos pronominais obrigatórios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos Essencialmente Pronominais</span>
        <h2>Verbos que só existem com pronome reflexivo</h2>
        <p>
          Alguns verbos em espanhol são essencialmente pronominais: não existem sem o pronome reflexivo.
          Tentativa de usá-los sem o pronome resulta em erro ou em outro verbo com significado diferente.
          Esses verbos são muito comuns em textos literários e jornalísticos do ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😤</span>
            <h3>quejarse</h3>
            <p>Reclamar, lamentar-se. <em>"Siempre se queja del trabajo."</em> Não existe *"quejar" sem pronome.</p>
          </div>
          <div className="lesson-card">
            <span>😔</span>
            <h3>arrepentirse</h3>
            <p>Arrepender-se. <em>"Se arrepintió de sus palabras."</em> Irreg.: e→ie (arrepiento), e→i (arrepintió).</p>
          </div>
          <div className="lesson-card">
            <span>💪</span>
            <h3>atreverse</h3>
            <p>Atrever-se, ousar. <em>"No se atrevió a hablar."</em> Sempre seguido de "a + infinitivo".</p>
          </div>
          <div className="lesson-card">
            <span>🦚</span>
            <h3>jactarse</h3>
            <p>Vangloriar-se, gabar-se. <em>"Se jacta de sus logros."</em> Sempre seguido de "de + infinitivo/noun".</p>
          </div>
          <div className="lesson-card">
            <span>🧘</span>
            <h3>abstenerse</h3>
            <p>Abster-se. <em>"Se abstuvo de comentar."</em> Conjugação como "tener": me abstengo.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>portarse</h3>
            <p>Comportar-se, portar-se. <em>"Los niños se portaron bien."</em> Comum em contextos educacionais.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 3: Verbos que mudam de sentido ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mudança de Sentido</span>
        <h2>Verbos que mudam de sentido com o pronome</h2>
        <p>
          Este é o ponto mais importante do capítulo para o ENEM. Muitos verbos em espanhol existem tanto
          na forma sem pronome (significado original) quanto na forma pronominal (significado diferente).
          Dominar esses pares é fundamental para interpretar textos corretamente.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Pares de verbos com e sem pronome reflexivo">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            <rect x="10" y="8" width="320" height="30" rx="8" fill="#dbeafe" />
            <text x="170" y="28" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Sem pronome → sentido direto</text>
            <rect x="370" y="8" width="320" height="30" rx="8" fill="#fce7f3" />
            <text x="530" y="28" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">Com pronome → sentido pronominal</text>
            {[
              ["ir", "ir (a algum lugar)", "irse", "ir embora, partir"],
              ["dormir", "dormir", "dormirse", "adormecer, pegar no sono"],
              ["llevar", "levar, carregar", "llevarse", "levar consigo / dar-se bem com"],
              ["parecer", "parecer (opinião)", "parecerse", "parecer-se, assemelhar-se"],
              ["poner", "colocar, pôr", "ponerse", "vestir / tornar-se / posicionar-se"],
              ["volver", "voltar", "volverse", "tornar-se / virar-se"],
            ].map(([v1, s1, v2, s2], i) => (
              <g key={i}>
                <text x="20" y={56 + i * 28} fontSize="12" fill="#1e40af" fontWeight="bold" fontStyle="italic">{v1}</text>
                <text x="80" y={56 + i * 28} fontSize="12" fill="#1e40af">→ {s1}</text>
                <text x="380" y={56 + i * 28} fontSize="12" fill="#9d174d" fontWeight="bold" fontStyle="italic">{v2}</text>
                <text x="455" y={56 + i * 28} fontSize="12" fill="#9d174d">→ {s2}</text>
              </g>
            ))}
          </svg>
          <figcaption>Pares de verbos com e sem pronome — o pronome altera completamente o significado.</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Sem pronome</th>
                <th>Com pronome</th>
                <th>Exemplo pronominal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>ir / irse</em></td><td>ir (a um lugar)</td><td>ir embora, partir</td><td><em>¡Me voy! Ya es tarde.</em></td></tr>
              <tr><td><em>dormir / dormirse</em></td><td>dormir</td><td>adormecer, pegar no sono</td><td><em>El bebé se durmió en seguida.</em></td></tr>
              <tr><td><em>llevar / llevarse</em></td><td>levar, carregar</td><td>levar consigo; dar-se bem/mal com</td><td><em>Se lleva bien con todos.</em></td></tr>
              <tr><td><em>parecer / parecerse</em></td><td>parecer (opinião)</td><td>parecer-se com alguém</td><td><em>Se parece mucho a su madre.</em></td></tr>
              <tr><td><em>poner / ponerse</em></td><td>colocar, pôr</td><td>vestir; tornar-se; pôr-se (sol)</td><td><em>Se puso nervioso.</em></td></tr>
              <tr><td><em>hacer / hacerse</em></td><td>fazer</td><td>tornar-se (por esforço/tempo)</td><td><em>Se hizo famoso con los años.</em></td></tr>
              <tr><td><em>volver / volverse</em></td><td>voltar</td><td>tornar-se (mudança repentina)</td><td><em>Se volvió loco.</em></td></tr>
              <tr><td><em>quedar / quedarse</em></td><td>combinar encontro</td><td>ficar, permanecer</td><td><em>Me quedé en casa toda la tarde.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4: Posição dos pronomes ── */}
      <section className="lesson-section">
        <span className="section-kicker">Posição</span>
        <h2>Posição dos pronomes reflexivos</h2>
        <p>
          A posição do pronome reflexivo segue regras precisas em espanhol. Com um verbo conjugado, o pronome
          vai <strong>antes</strong> do verbo. Com infinitivo ou gerúndio, pode ir <strong>antes</strong> do
          verbo auxiliar ou <strong>depois</strong> (anexado) ao infinitivo/gerúndio.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Construção</th>
                <th>Posição</th>
                <th>Exemplos equivalentes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Verbo conjugado simples</td>
                <td>Antes do verbo</td>
                <td><em>Me levanto tarde. / Se ducha rápido.</em></td>
              </tr>
              <tr>
                <td>Auxiliar + infinitivo</td>
                <td>Antes do auxiliar OU após o infinitivo</td>
                <td><em>Me voy a levantar</em> = <em>Voy a levantarme</em></td>
              </tr>
              <tr>
                <td>Estar + gerúndio</td>
                <td>Antes do estar OU após o gerúndio</td>
                <td><em>Se está duchando</em> = <em>Está duchándose</em></td>
              </tr>
              <tr>
                <td>Imperativo afirmativo</td>
                <td>Sempre após o verbo (enclítico)</td>
                <td><em>¡Levántate! / ¡Siéntese!</em></td>
              </tr>
              <tr>
                <td>Imperativo negativo</td>
                <td>Antes do verbo</td>
                <td><em>¡No te levantes! / ¡No se siente!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Acento no gerúndio:</strong> Ao adicionar o pronome após o gerúndio, o acento gráfico é
          obrigatório para manter a sílaba tônica: <em>duchar + se</em> → <em>duchándo</em>se (com acento
          no "a" de duchando). Sem acento, a palavra ficaria com pronúncia errada.
        </div>
      </section>

      {/* ── Seção 5: Reflexivo × Recíproco ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reflexivo vs. Recíproco</span>
        <h2>Uso reflexivo versus uso recíproco</h2>
        <p>
          Os pronomes <em>nos</em> e <em>se</em> (plural) podem expressar tanto a ação reflexiva (cada um
          age sobre si mesmo) quanto a ação recíproca (cada um age sobre o outro). O contexto — e às vezes
          expressões como <em>el uno al otro / mutuamente</em> — esclarece a ambiguidade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪞</span>
            <h3>Reflexivo</h3>
            <p><em>"Se miran en el espejo."</em> = Cada um olha para si mesmo no espelho. A ação recai sobre o próprio sujeito.</p>
          </div>
          <div className="lesson-card">
            <span>👫</span>
            <h3>Recíproco</h3>
            <p><em>"Se miran (el uno al otro)."</em> = Olham um para o outro. A ação recai mutuamente entre os sujeitos.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Como diferenciar</h3>
            <p>Adicione <em>"mutuamente"</em> ou <em>"el uno al otro"</em>. Se a frase fizer sentido, é recíproco; se soar redundante, provavelmente é reflexivo.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 6: SE impessoal e SE passivo ── */}
      <section className="lesson-section">
        <span className="section-kicker">SE Impessoal e SE Passivo</span>
        <h2>SE impessoal e SE passivo reflexivo</h2>
        <p>
          Além dos usos reflexivo e recíproco, o pronome <em>se</em> aparece em dois outros contextos muito
          comuns em textos do ENEM: o <em>se</em> impessoal e o <em>se</em> passivo. Reconhecer cada um é
          essencial para compreensão de textos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Tipos de se em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="20" width="310" height="160" rx="12" fill="#fef3c7" />
            <text x="175" y="48" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#92400e">SE impessoal</text>
            <text x="175" y="70" textAnchor="middle" fontSize="12" fill="#92400e">Sujeito = pessoas em geral</text>
            <text x="175" y="90" textAnchor="middle" fontSize="12" fill="#92400e">Verbo sempre no singular</text>
            <text x="175" y="112" textAnchor="middle" fontSize="12" fill="#92400e" fontStyle="italic">"Se dice que..."</text>
            <text x="175" y="130" textAnchor="middle" fontSize="12" fill="#92400e" fontStyle="italic">"Se puede entrar aquí."</text>
            <text x="175" y="148" textAnchor="middle" fontSize="12" fill="#92400e" fontStyle="italic">"Se come bien en este país."</text>
            <text x="175" y="166" textAnchor="middle" fontSize="11" fill="#92400e">= Diz-se / Pode-se / Come-se</text>
            <rect x="370" y="20" width="310" height="160" rx="12" fill="#d1fae5" />
            <text x="525" y="48" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#065f46">SE passivo</text>
            <text x="525" y="70" textAnchor="middle" fontSize="12" fill="#065f46">Sujeito = coisa (não pessoa)</text>
            <text x="525" y="90" textAnchor="middle" fontSize="12" fill="#065f46">Verbo concorda com o sujeito</text>
            <text x="525" y="112" textAnchor="middle" fontSize="12" fill="#065f46" fontStyle="italic">"Se venden casas."</text>
            <text x="525" y="130" textAnchor="middle" fontSize="12" fill="#065f46" fontStyle="italic">"Se publicó el informe."</text>
            <text x="525" y="148" textAnchor="middle" fontSize="12" fill="#065f46" fontStyle="italic">"Se hablan tres idiomas."</text>
            <text x="525" y="166" textAnchor="middle" fontSize="11" fill="#065f46">= Casas são vendidas / Falam-se</text>
          </svg>
          <figcaption>SE impessoal (sujeito = pessoas em geral, verbo no singular) vs. SE passivo (sujeito = coisa, verbo concorda).</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de SE</th><th>Exemplo</th><th>Tradução</th><th>Como identificar</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>SE impessoal</td>
                <td><em>Se trabaja mucho en esta empresa.</em></td>
                <td>Trabalha-se muito nessa empresa.</td>
                <td>Verbo no singular; sujeito = pessoas genéricas</td>
              </tr>
              <tr>
                <td>SE impessoal</td>
                <td><em>No se puede fumar aquí.</em></td>
                <td>Não se pode fumar aqui.</td>
                <td>Verbo modal no singular</td>
              </tr>
              <tr>
                <td>SE passivo</td>
                <td><em>Se venden apartamentos.</em></td>
                <td>Vendem-se apartamentos.</td>
                <td>Verbo no plural concordando com "apartamentos"</td>
              </tr>
              <tr>
                <td>SE passivo</td>
                <td><em>Se publicó el artículo.</em></td>
                <td>Publicou-se o artigo.</td>
                <td>Verbo no singular concordando com "el artículo"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: Identificação no ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>Como o ENEM cobra pronomes pronominais</h2>
        <div className="lesson-highlight">
          <strong>Estratégia de identificação:</strong> Ao encontrar <em>se</em> em um texto, pergunte:
          (1) O verbo existe sem o <em>se</em>? Se não existir → verbo essencialmente pronominal (quejarse,
          arrepentirse...). (2) O sujeito é uma pessoa? → reflexivo ou recíproco. (3) O sujeito é uma coisa
          ou genérico? → SE passivo ou SE impessoal. (4) O significado do verbo muda com o <em>se</em>? →
          verifique os pares (ir/irse, dormir/dormirse...).
        </div>
        <div className="math-block">
          <strong>Fluxo de classificação do SE:</strong>
          <br />
          Verbo SÓ existe com SE? → <strong>Essencialmente pronominal</strong> (quejarse, atreverse...)
          <br />
          Sujeito = pessoa + ação sobre si mesmo? → <strong>SE reflexivo</strong>
          <br />
          Dois sujeitos, ação mútua? → <strong>SE recíproco</strong>
          <br />
          Sujeito = coisa, verbo concorda? → <strong>SE passivo</strong>
          <br />
          Sujeito genérico, verbo singular? → <strong>SE impessoal</strong>
          <br />
          Significado muda? → <strong>Verbo pronominal de mudança</strong> (ponerse, volverse...)
        </div>
      </section>

      {/* ── Seção 8: Verbos de mudança ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos de Mudança</span>
        <h2>Verbos pronominais que expressam mudança de estado</h2>
        <p>
          Em espanhol, diferentes verbos pronominais expressam tipos diferentes de mudança ou transformação.
          É importante diferenciá-los porque seus matizes são frequentemente testados em questões de
          interpretação do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Verbo</th><th>Tipo de mudança</th><th>Exemplo</th><th>Tradução</th></tr>
            </thead>
            <tbody>
              <tr><td><em>hacerse</em></td><td>Por esforço / ao longo do tempo</td><td><em>Se hizo médico.</em></td><td>Tornou-se médico.</td></tr>
              <tr><td><em>volverse</em></td><td>Mudança repentina ou involuntária</td><td><em>Se volvió agresivo.</em></td><td>Ficou agressivo (de repente).</td></tr>
              <tr><td><em>ponerse</em></td><td>Mudança de estado emocional/físico</td><td><em>Se puso triste.</em></td><td>Ficou triste.</td></tr>
              <tr><td><em>quedarse</em></td><td>Permanecer em novo estado</td><td><em>Se quedó sin trabajo.</em></td><td>Ficou sem trabalho.</td></tr>
              <tr><td><em>llegar a ser</em></td><td>Resultado de processo longo</td><td><em>Llegó a ser presidente.</em></td><td>Chegou a ser presidente.</td></tr>
              <tr><td><em>convertirse en</em></td><td>Transformação em outra coisa</td><td><em>Se convirtió en un símbolo.</em></td><td>Tornou-se um símbolo.</td></tr>
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
          title="1. Pronome reflexivo na rotina diária"
          statement={
            <p>
              Qual opção completa corretamente a frase?{" "}
              <em>"Todos los días, ella _____ a las seis, _____ y _____ para ir al trabajo."</em>
            </p>
          }
          options={[
            { letter: "a", text: "levanta / ducha / viste" },
            { letter: "b", text: "se levanta / se ducha / se viste", correct: true },
            { letter: "c", text: "levantarse / ducharse / vestirse" },
            { letter: "d", text: "se levanta / ducha / se viste" },
          ]}
          resolution={
            <p>
              Os verbos <em>levantarse, ducharse, vestirse</em> são verbos de rotina diária que em espanhol
              exigem obrigatoriamente o pronome reflexivo. Com verbo conjugado, o pronome vai antes:
              <em> se levanta, se ducha, se viste</em>. Os infinitivos "levantarse" (opção c) não cabem em
              uma frase com sujeito expresso e verbo conjugado. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Verbo que muda de sentido com o pronome"
          statement={
            <p>
              Leia as frases e identifique a opção com tradução correta:{" "}
              <em>(I) "Juan fue a Madrid." (II) "Juan se fue a Madrid."</em>
            </p>
          }
          options={[
            { letter: "a", text: "I: Juan foi a Madrid (temporariamente). II: Juan foi e voltou de Madrid." },
            { letter: "b", text: "I: Juan foi a Madrid. II: Juan foi embora para Madrid (partiu, deixou o lugar de origem).", correct: true },
            { letter: "c", text: "Não há diferença de significado; o 'se' é apenas ênfase." },
            { letter: "d", text: "I: Juan estava em Madrid. II: Juan saiu de Madrid." },
          ]}
          resolution={
            <p>
              <em>Ir</em> (sem pronome) = deslocar-se em direção a um lugar. <em>Irse</em> (com pronome) =
              ir embora, partir, deixar o lugar onde se está. Na frase II, o uso de <em>se fue</em> enfatiza
              que Juan partiu, foi embora — o foco está no afastamento do lugar de origem, não apenas no
              destino. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. SE impessoal vs. SE passivo"
          statement={
            <p>
              Leia: <em>"En este restaurante se come muy bien. Además, se sirven platos típicos de la región."</em>{" "}
              Sobre os usos de <em>se</em> nas duas frases, é correto afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "Ambos são SE reflexivo, pois as ações recaem sobre os próprios sujeitos." },
            { letter: "b", text: "A primeira frase tem SE passivo (o restaurante é comido); a segunda tem SE impessoal." },
            { letter: "c", text: "A primeira tem SE impessoal (come-se bem = as pessoas comem bem); a segunda tem SE passivo (pratos são servidos).", correct: true },
            { letter: "d", text: "Ambos são SE passivo, pois em ambas os sujeitos são objetos." },
          ]}
          resolution={
            <p>
              "Se come muy bien" → SE impessoal: o sujeito genérico são as pessoas (come-se bem = as pessoas
              comem bem). O verbo está no singular. "Se sirven platos típicos" → SE passivo: "platos típicos"
              é o sujeito gramatical (pratos típicos são servidos), e o verbo concorda no plural.
              Resposta: <strong>c</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Verbo pronominal em texto literário"
          statement={
            <p>
              Leia o trecho: <em>"Después de años de lucha, el joven se convirtió en uno de los escritores
              más importantes de su generación. Nunca se arrepintió de haber dejado su ciudad natal, aunque
              a veces se quejaba de la soledad."</em>{" "}
              Os verbos pronominais destacados expressam, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "ação reflexiva / ação recíproca / SE impessoal" },
            { letter: "b", text: "transformação em outra coisa / arrependimento (essencial) / queixa (essencial)", correct: true },
            { letter: "c", text: "SE passivo / SE impessoal / ação reflexiva" },
            { letter: "d", text: "mudança repentina / verbo auxiliar / SE passivo" },
          ]}
          resolution={
            <p>
              <em>Convertirse en</em> = transformar-se em (mudança de estado). <em>Arrepentirse</em> = verbo
              essencialmente pronominal que significa arrepender-se — não existe sem o pronome. <em>Quejarse</em>
              = verbo essencialmente pronominal que significa reclamar/queixar-se — também não existe sem o
              pronome. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Verbos de mudança — ponerse vs. volverse vs. hacerse"
          statement={
            <p>
              Em qual alternativa o verbo pronominal de mudança de estado está usado corretamente?
            </p>
          }
          options={[
            { letter: "a", text: "Con la práctica, se volvió médico tras años de estudio." },
            { letter: "b", text: "Se puso enfadado cuando escuchó la noticia.", correct: true },
            { letter: "c", text: "Se hizo triste de repente al recordar a su abuela." },
            { letter: "d", text: "Se convirtió en nervioso antes del examen." },
          ]}
          resolution={
            <p>
              <em>Ponerse</em> é o verbo correto para mudanças de estado emocional ou físico temporárias e
              relativamente rápidas: "se puso enfadado" = ficou com raiva. <em>Volverse</em> expressa
              mudança radical e permanente (não se usa para "tornar-se médico" — isso é <em>hacerse</em>).
              <em>Hacerse</em> é para transformação por esforço ao longo do tempo (médico, famoso). Não se
              usa <em>convertirse</em> com adjetivos. Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
