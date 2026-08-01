"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <div className="lesson-hero">
        <span className="lesson-badge">Português • Capítulo 22</span>
        <h1>Crase</h1>
        <p>
          A crase é um dos temas que mais assustam os candidatos no ENEM — mas, com a
          compreensão correta do que ela representa e quando aplicá-la, torna-se um
          recurso previsível e dominável. A crase nada mais é do que o <strong>acento
          grave (`) que marca a fusão (contração) da preposição "a" com o artigo
          definido feminino "a(as)"</strong>, ou ainda com os pronomes demonstrativos
          "aquele(a)(s)" e "aquilo". Entender essa lógica de fusão é o primeiro passo
          para nunca mais errar.
        </p>
      </div>

      <section className="lesson-section">
        <span className="section-kicker">1. Fundamento</span>
        <h2>O Que É a Crase — A Lógica da Fusão</h2>
        <p>
          A palavra <em>crase</em> vem do grego <em>krasis</em>, que significa
          "mistura" ou "fusão". Em português, ela ocorre quando duas vogais idênticas
          se encontram e se contraem em uma só, marcada pelo acento grave. Esse
          fenômeno só acontece em dois contextos específicos:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Fusão 1</h3>
            <p>
              Preposição <strong>"a"</strong> + artigo definido feminino{" "}
              <strong>"a(s)"</strong>. Exemplo: <em>fui à escola</em> = fui [a] +
              [a]escola.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Fusão 2</h3>
            <p>
              Preposição <strong>"a"</strong> + pronomes demonstrativos{" "}
              <strong>"aquele(a)(s)"</strong> e <strong>"aquilo"</strong>. Exemplo:{" "}
              <em>refiro-me àquele fato</em> = a + aquele.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Por que isso importa?</strong> Se a crase é sempre uma fusão, então
          ela só pode existir onde há preposição <em>e</em> artigo (ou demonstrativo)
          ao mesmo tempo. Identificar esses dois elementos é a chave de todo o
          raciocínio sobre crase.
        </div>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 600 180"
            width="600"
            height="180"
            aria-label="Diagrama da fusão que forma a crase"
          >
            <rect width="600" height="180" rx="12" fill="#f8f4ff" />
            <rect x="30" y="60" width="130" height="60" rx="8" fill="#7c3aed" />
            <text x="95" y="88" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Preposição</text>
            <text x="95" y="108" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">"a"</text>
            <text x="185" y="97" textAnchor="middle" fill="#7c3aed" fontSize="28" fontWeight="bold">+</text>
            <rect x="210" y="60" width="170" height="60" rx="8" fill="#059669" />
            <text x="295" y="88" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Artigo / Dem.</text>
            <text x="295" y="108" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">"a / aquele"</text>
            <text x="400" y="97" textAnchor="middle" fill="#7c3aed" fontSize="28" fontWeight="bold">=</text>
            <rect x="430" y="60" width="140" height="60" rx="8" fill="#dc2626" />
            <text x="500" y="88" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Crase</text>
            <text x="500" y="108" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">"à / àquele"</text>
            <text x="300" y="155" textAnchor="middle" fill="#555" fontSize="13">a + a escola → à escola   |   a + aquele → àquele</text>
          </svg>
          <figcaption>Fusão das duas vogais "a" gerando o acento grave da crase.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2. Método</span>
        <h2>O Truque do "ao" — Diagnóstico Rápido e Infalível</h2>
        <p>
          O método mais confiável para verificar se há crase é a <strong>substituição
          pelo masculino</strong>. Se, ao trocar o substantivo feminino por um
          masculino equivalente, a frase pedir "ao" (contração de a + o), então no
          feminino há crase. Se pedir apenas "a", não há crase.
        </p>
        <div className="math-block">
          <p><strong>Teste na prática:</strong></p>
          <p>✅ "Fui à escola." → "Fui ao colégio." → usa "ao" → <strong>há crase</strong>.</p>
          <p>✅ "Refiro-me à aluna." → "Refiro-me ao aluno." → usa "ao" → <strong>há crase</strong>.</p>
          <p>❌ "Ela chegou a pé." → "Ela chegou a pé." → não muda → <strong>sem crase</strong>.</p>
          <p>❌ "Vou a aprender." → verbo não tem artigo → <strong>sem crase</strong>.</p>
        </div>
        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> "ao" no masculino = crase no feminino. Se a
          troca resultar apenas em "a" (sem o), não há crase. Esse teste funciona para
          a grande maioria dos casos obrigatórios e facultativos.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3. Obrigatoriedade</span>
        <h2>Casos em Que a Crase É Obrigatória</h2>
        <p>
          Existem situações em que a crase é <strong>exigida pela norma culta</strong>,
          independente de estilo ou contexto. Conhecê-las garante acertos em questões
          de uso obrigatório.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>Exemplo Correto</th>
                <th>Por quê?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Substantivo feminino precedido de preposição "a"</td>
                <td>Fui <strong>à</strong> biblioteca.</td>
                <td>a (prep.) + a (art.) biblioteca</td>
              </tr>
              <tr>
                <td>Locuções adverbiais femininas de modo/tempo</td>
                <td>Chegou <strong>às</strong> três horas.</td>
                <td>a + as = às</td>
              </tr>
              <tr>
                <td>Locuções adverbiais cristalizadas</td>
                <td>Fez <strong>à</strong> mão / trabalhou <strong>à</strong> toa.</td>
                <td>Locuções fixas com artigo implícito</td>
              </tr>
              <tr>
                <td>Locuções prepositivas femininas</td>
                <td>Ficou <strong>à</strong> beira do rio.</td>
                <td>à beira de, à frente de, à custa de...</td>
              </tr>
              <tr>
                <td>Antes de "aquele/aquela/aquilo"</td>
                <td>Dei o livro <strong>àquele</strong> rapaz.</td>
                <td>a (prep.) + aquele (dem.)</td>
              </tr>
              <tr>
                <td>Locuções conjuntivas "à medida que / à proporção que"</td>
                <td><strong>À medida que</strong> estuda, aprende mais.</td>
                <td>Locução conjuntiva com artigo feminino</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> A expressão correta é "<strong>à medida que</strong>"
          (crase obrigatória). Já "<em>na medida em que</em>" é outra estrutura, sem
          crase. Nunca use "a medida que" sem crase — isso é erro grave.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">4. Locuções Adverbiais</span>
        <h2>Locuções Adverbiais Femininas — Memorização Essencial</h2>
        <p>
          As <strong>locuções adverbiais femininas</strong> são expressões formadas por
          "a + substantivo feminino" que funcionam como advérbios na oração. Como
          carregam artigo implícito, exigem crase. O domínio dessas expressões elimina
          muita dúvida no ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🕐</span>
            <h3>Tempo</h3>
            <p>
              <strong>à tarde, à noite, às vezes, às três horas, à época, à
              semana</strong>. Todas indicam tempo e admitem artigo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🛠️</span>
            <h3>Modo / Instrumento</h3>
            <p>
              <strong>à mão, à máquina, à força, à base de, à vontade, à toa, à
              beça</strong>. Indicam como algo é feito.
            </p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Conformidade / Moda</h3>
            <p>
              <strong>à francesa, à italiana, à moda de, à semelhança de</strong>.
              Indicam estilo ou conformidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Distância / Posição</h3>
            <p>
              <strong>à distância de, às avessas, à deriva, à margem</strong>.
              Indicam posição relativa ou estado.
            </p>
          </div>
        </div>
        <div className="math-block">
          <p><strong>Frases modelo para fixação:</strong></p>
          <p>• Prefiro trabalhar <strong>à noite</strong>, pois há mais silêncio.</p>
          <p>• O bordado foi feito <strong>à mão</strong>, com muito esmero.</p>
          <p>• Ele vivia <strong>à toa</strong>, sem objetivo algum.</p>
          <p>• O peixe era preparado <strong>à francesa</strong>.</p>
          <p>• <strong>Às vezes</strong>, a simplicidade é a maior sabedoria.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">5. Casos Facultativos</span>
        <h2>Quando a Crase É Opcional — Entenda as Nuances</h2>
        <p>
          Em certos contextos, a norma culta aceita tanto o uso quanto a omissão da
          crase. Isso ocorre quando o artigo feminino é <em>possível mas não
          obrigatório</em>. Conhecer esses casos evita tanto o excesso quanto a falta
          de crase.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Contexto</th>
                <th>Com Crase</th>
                <th>Sem Crase</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nomes próprios femininos de lugares</td>
                <td>Fui <strong>à</strong> Roma.</td>
                <td>Fui <strong>a</strong> Roma.</td>
                <td>Ambas as formas são aceitas</td>
              </tr>
              <tr>
                <td>Pronomes possessivos femininos</td>
                <td>Refiro-me <strong>à</strong> sua mãe.</td>
                <td>Refiro-me <strong>a</strong> sua mãe.</td>
                <td>Depende se o possessivo está com artigo</td>
              </tr>
              <tr>
                <td>Após a preposição "até"</td>
                <td>Vá <strong>até à</strong> porta.</td>
                <td>Vá <strong>até a</strong> porta.</td>
                <td>Ambas as formas são aceitas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Quando a banca pede a forma "de acordo com a
          norma culta" e apresenta nomes próprios femininos de cidades, prefira a forma
          com crase se o contexto claramente pede artigo (ex.: "a Lisboa histórica" →
          "à Lisboa histórica"). Em caso de dúvida, o teste do "ao" sempre resolve.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">6. Proibição</span>
        <h2>Casos em Que a Crase É Proibida — Erros Clássicos</h2>
        <p>
          Tão importante quanto saber quando usar a crase é saber quando ela é
          <strong> absolutamente proibida</strong>. O ENEM frequentemente apresenta
          distratores com crase indevida. Memorize esses casos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Antes de Masculinos</h3>
            <p>
              "Refiro-me <strong>a</strong> um bom professor." Não há artigo feminino,
              portanto impossível haver crase.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Antes de Verbos</h3>
            <p>
              "Começou <strong>a</strong> estudar." Verbos não admitem artigo antes
              deles; sem artigo, sem crase.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Pronomes Pessoais / "Esta/Essa"</h3>
            <p>
              "Falei <strong>a</strong> ela." / "Entreguei <strong>a</strong> esta
              aluna." Esses pronomes não admitem artigo antes deles.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Após Outra Preposição</h3>
            <p>
              "Saiu <strong>para a</strong> escola." Após preposição, não se usa
              crase — duas preposições não se acumulam.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>"Casa" e "Terra" Sem Especificação</h3>
            <p>
              "Fui <strong>a</strong> casa." (sem artigo). Mas: "Fui <strong>à</strong>
              casa de Maria." (com especificação, há artigo).
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Feminino Plural Sem Artigo</h3>
            <p>
              "Refiro-me <strong>a</strong> alunas dedicadas." Se o substantivo plural
              não admite artigo naquele contexto, não há crase.
            </p>
          </div>
        </div>
        <div className="math-block">
          <p><strong>Pronomes que jamais admitem crase antes deles:</strong></p>
          <p>ela, você, mim, nossa, esta, essa, aquela (sem preposição), sua, cuja, que, quem</p>
          <p>— Todos esses pronomes bloqueiam o artigo, logo bloqueiam a crase.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">7. Demonstrativos</span>
        <h2>Crase Antes de "Aquele", "Aquela", "Aquilo"</h2>
        <p>
          Os pronomes demonstrativos <strong>"aquele", "aquela", "aqueles", "aquelas"
          e "aquilo"</strong> se contraem com a preposição "a" e formam as formas
          acentuadas <strong>àquele, àquela, àqueles, àquelas, àquilo</strong>. Essa
          regra é obrigatória e frequentemente cobrada.
        </p>
        <div className="math-block">
          <p>• Dei o prêmio <strong>àquele</strong> estudante esforçado.</p>
          <p>• Refiro-me <strong>àquelas</strong> questões já debatidas.</p>
          <p>• Tudo isso se deve <strong>àquilo</strong> que foi ensinado.</p>
          <p>• Ela se opôs <strong>àquela</strong> decisão.</p>
        </div>
        <div className="lesson-highlight">
          <strong>Como diferenciar de "aquela" sem crase?</strong> Se há preposição
          exigida pelo verbo ou nome antes de "aquela/aquele", obrigatoriamente há
          crase. Se não há preposição (ex.: "aquela menina é inteligente"), não há
          fusão e portanto sem acento grave.
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Frase</th>
                <th>Há preposição antes?</th>
                <th>Forma Correta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Refiro-me ___ aquela colega.</td>
                <td>Sim ("refiro-me a")</td>
                <td><strong>àquela</strong></td>
              </tr>
              <tr>
                <td>___ aquela época, tudo era diferente.</td>
                <td>Sim ("a" locução temporal)</td>
                <td><strong>Àquela</strong></td>
              </tr>
              <tr>
                <td>___ aquela menina ganhou o prêmio.</td>
                <td>Não (sujeito da oração)</td>
                <td><strong>Aquela</strong> (sem crase)</td>
              </tr>
              <tr>
                <td>Dedico este trabalho ___ aqueles que lutaram.</td>
                <td>Sim ("dedico a")</td>
                <td><strong>àqueles</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">8. Locuções Prepositivas</span>
        <h2>Locuções Prepositivas Femininas — Crase Sempre Presente</h2>
        <p>
          As <strong>locuções prepositivas femininas</strong> são expressões formadas
          por "a + substantivo feminino + preposição" que funcionam como preposições
          compostas. Por sempre carregarem artigo feminino, a crase é obrigatória
          nessas expressões.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📍</span>
            <h3>Posição / Lugar</h3>
            <p>
              <strong>à beira de, à frente de, à esquerda de, à direita de, à
              margem de</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>💪</span>
            <h3>Causa / Meio</h3>
            <p>
              <strong>à custa de, à base de, à força de, à mercê de</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Conformidade</h3>
            <p>
              <strong>à maneira de, à moda de, à semelhança de, à luz de</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Proporção</h3>
            <p>
              <strong>à proporção de, à razão de</strong>. Usadas em contextos
              matemáticos e argumentativos.
            </p>
          </div>
        </div>
        <div className="math-block">
          <p><strong>Exemplos em frases:</strong></p>
          <p>• Ficou parado <strong>à beira</strong> do precipício, hesitante.</p>
          <p>• Conseguiu o diploma <strong>à custa de</strong> muito esforço.</p>
          <p>• O governo agiu <strong>à margem</strong> da lei.</p>
          <p>• Pintou o quadro <strong>à maneira de</strong> Monet.</p>
          <p>• Analisou o problema <strong>à luz de</strong> novos dados.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">9. Casos Especiais</span>
        <h2>Armadilhas Clássicas do ENEM — "Casa", "Terra" e Horas</h2>
        <p>
          Algumas palavras femininas têm comportamento especial em relação à crase.
          O ENEM adora explorar exatamente esses casos limítrofes para testar a
          compreensão profunda da regra.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Sem Crase</th>
                <th>Com Crase</th>
                <th>Critério</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Casa</strong></td>
                <td>Fui <strong>a</strong> casa.</td>
                <td>Fui <strong>à</strong> casa de Pedro.</td>
                <td>Sem especificação = sem artigo. Com especificação = artigo presente.</td>
              </tr>
              <tr>
                <td><strong>Terra</strong></td>
                <td>O avião desceu <strong>a</strong> terra.</td>
                <td>Voltou <strong>à</strong> terra natal.</td>
                <td>"Terra" = chão/solo = sem artigo. Terra = lugar específico = com artigo.</td>
              </tr>
              <tr>
                <td><strong>Horas</strong></td>
                <td>—</td>
                <td>Chegou <strong>à</strong> meia-noite / <strong>às</strong> duas horas.</td>
                <td>Horas sempre com artigo = sempre com crase.</td>
              </tr>
              <tr>
                <td><strong>Distâncias</strong></td>
                <td>Mora <strong>a</strong> dois quilômetros.</td>
                <td>Mora <strong>à</strong> distância de dois km.</td>
                <td>Numeral sem artigo. Locução com artigo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Macete para "casa" e "terra":</strong> Pergunte-se: "Estou falando
          de um lugar genérico ou de um lugar específico/determinado?" Genérico = sem
          artigo = sem crase. Específico / determinado = com artigo = crase.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">10. Mapa Visual</span>
        <h2>Fluxograma para Decisão — Use Crase ou Não?</h2>
        <p>
          O fluxograma a seguir sintetiza o raciocínio completo para decidir sobre a
          crase em qualquer situação. Treine esse percurso mental até ele se tornar
          automático.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 420"
            width="700"
            height="420"
            aria-label="Fluxograma de decisão sobre o uso da crase"
          >
            <rect width="700" height="420" rx="12" fill="#f0f9ff" />
            <rect x="220" y="10" width="260" height="50" rx="10" fill="#1d4ed8" />
            <text x="350" y="32" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Há preposição "a" antes</text>
            <text x="350" y="50" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">do termo?</text>
            <line x1="350" y1="60" x2="350" y2="90" stroke="#555" strokeWidth="2" />
            <polygon points="350,90 345,80 355,80" fill="#555" />
            <rect x="220" y="90" width="260" height="50" rx="10" fill="#0284c7" />
            <text x="350" y="113" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">O termo é feminino</text>
            <text x="350" y="131" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">e admite artigo "a"?</text>
            <line x1="100" y1="115" x2="220" y2="115" stroke="#dc2626" strokeWidth="2" />
            <text x="160" y="108" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">NÃO</text>
            <rect x="10" y="90" width="90" height="50" rx="10" fill="#dc2626" />
            <text x="55" y="113" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">SEM</text>
            <text x="55" y="131" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">CRASE</text>
            <line x1="350" y1="140" x2="350" y2="170" stroke="#555" strokeWidth="2" />
            <polygon points="350,170 345,160 355,160" fill="#555" />
            <rect x="220" y="170" width="260" height="50" rx="10" fill="#0369a1" />
            <text x="350" y="193" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">É pronome que bloqueia</text>
            <text x="350" y="211" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">artigo? (ela, você, esta...)</text>
            <line x1="480" y1="195" x2="600" y2="195" stroke="#dc2626" strokeWidth="2" />
            <text x="540" y="188" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">SIM</text>
            <rect x="600" y="170" width="90" height="50" rx="10" fill="#dc2626" />
            <text x="645" y="193" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">SEM</text>
            <text x="645" y="211" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">CRASE</text>
            <line x1="350" y1="220" x2="350" y2="250" stroke="#555" strokeWidth="2" />
            <polygon points="350,250 345,240 355,240" fill="#555" />
            <rect x="220" y="250" width="260" height="50" rx="10" fill="#15803d" />
            <text x="350" y="273" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Teste do "ao": troca pelo</text>
            <text x="350" y="291" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">masc. e pede "ao"?</text>
            <line x1="350" y1="300" x2="350" y2="330" stroke="#555" strokeWidth="2" />
            <polygon points="350,330 345,320 355,320" fill="#555" />
            <rect x="220" y="330" width="260" height="50" rx="10" fill="#166534" />
            <text x="350" y="358" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">USE CRASE (à / às)</text>
            <line x1="220" y1="355" x2="110" y2="355" stroke="#dc2626" strokeWidth="2" />
            <text x="165" y="348" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">NÃO</text>
            <rect x="10" y="330" width="100" height="50" rx="10" fill="#dc2626" />
            <text x="60" y="353" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SEM</text>
            <text x="60" y="371" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CRASE</text>
          </svg>
          <figcaption>Fluxograma de decisão: percorra da pergunta inicial até a resposta final.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">11. Revisão</span>
        <h2>Resumo Estratégico — O Que o ENEM Mais Cobra</h2>
        <p>
          O ENEM testa a crase principalmente em três frentes: <strong>identificação
          de erro</strong> em frase apresentada, <strong>reescrita</strong> mantendo
          a correção gramatical, e <strong>análise de texto</strong> onde a crase
          contribui para o sentido. Veja os padrões mais cobrados:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Mais Cobrado 1</h3>
            <p>
              Distinção entre "<strong>à medida que</strong>" (correto) e "a medida
              que" (errado). A crase é obrigatória nessa locução conjuntiva.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Mais Cobrado 2</h3>
            <p>
              Crase antes de pronomes demonstrativos: "<strong>àquele, àquela,
              àquilo</strong>". Frequente em questões de reescrita.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Mais Cobrado 3</h3>
            <p>
              "Fui <strong>a</strong> casa" vs. "fui <strong>à</strong> casa de João".
              Especificação determina a presença do artigo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Mais Cobrado 4</h3>
            <p>
              Crase proibida após preposição: "Saiu <strong>para a</strong> escola"
              (não "para à"). Duas preposições não se acumulam.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Checklist rápido antes da prova:</strong>
          <br />1. Há preposição "a" exigida pelo contexto? (Se não → sem crase)
          <br />2. O termo seguinte é feminino e admite artigo? (Se não → sem crase)
          <br />3. É pronome bloqueador de artigo? (Se sim → sem crase)
          <br />4. Teste do "ao" confirma? (Se sim → crase obrigatória)
          <br />5. É locução adverbial/prepositiva feminina clássica? (Se sim → crase)
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">12. Exercícios</span>
        <h2>Pratique e Consolide o Conhecimento</h2>
        <p>
          Resolva os exercícios abaixo com atenção. Leia cada alternativa identificando
          se há preposição, se o termo é feminino com artigo e se o teste do "ao"
          confirma a crase.
        </p>

        <Exercise
          title="Exercício 1 — Uso Obrigatório"
          level="Básico"
          statement={
            <p>
              Assinale a alternativa em que o uso da crase está <strong>correto</strong>{" "}
              de acordo com a norma culta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Começou à trabalhar logo cedo.",
            },
            {
              letter: "b",
              text: "Refiro-me à ela com respeito.",
            },
            {
              letter: "c",
              text: "Fui à biblioteca estudar para o ENEM.",
              correct: true,
            },
            {
              letter: "d",
              text: "Saiu para à escola às pressas.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a <strong>C</strong>. Em "fui à biblioteca",
              temos a preposição "a" (exigida pelo verbo "ir") fundida com o artigo
              feminino "a" antes de "biblioteca" (substantivo feminino que admite
              artigo). Teste: "fui ao colégio" → confirma "ao" no masculino, logo
              crase no feminino. Na A, verbos não admitem artigo. Na B, "ela" é
              pronome pessoal que bloqueia artigo. Na D, após preposição "para" não
              se usa crase.
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Locuções Adverbiais"
          level="Intermediário"
          statement={
            <p>
              Em qual das frases abaixo o uso da crase está <strong>incorreto</strong>?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Às vezes, prefiro estudar à noite.",
            },
            {
              letter: "b",
              text: "O artesanato foi feito à mão com muito cuidado.",
            },
            {
              letter: "c",
              text: "Chegou às três horas da tarde.",
            },
            {
              letter: "d",
              text: "Caminhei à dois quilômetros do destino.",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A alternativa incorreta é a <strong>D</strong>. Em "caminhei a dois
              quilômetros", a preposição "a" indica distância antes de numeral
              ("dois quilômetros"). Numerais não admitem artigo definido antes deles
              nesse contexto, portanto não há fusão e a crase é <strong>proibida</strong>.
              O correto seria "a dois quilômetros" (sem acento grave). As demais
              alternativas apresentam locuções adverbiais femininas clássicas
              (às vezes, à noite, à mão, às três horas) que sempre exigem crase.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Casos Complexos e Pronomes"
          level="Avançado"
          statement={
            <p>
              Considerando as regras da norma culta sobre crase, assinale a
              alternativa em que <strong>todas</strong> as frases estão corretas:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Dei o livro àquele aluno. / Refiro-me à sua opinião. / Fui à Roma.",
              correct: true,
            },
            {
              letter: "b",
              text: "Dei o livro aquele aluno. / Refiro-me à ela. / Fui à Roma.",
            },
            {
              letter: "c",
              text: "Dediquei o trabalho à essa pesquisadora. / Fui à casa. / Às vezes erro.",
            },
            {
              letter: "d",
              text: "Àquilo me surpreendeu. / Começou à chover. / Voltou à terra.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a <strong>A</strong>. "àquele" = a (prep.) +
              aquele (dem.) → crase obrigatória; "à sua opinião" = crase facultativa
              aceita antes de possessivo feminino; "à Roma" = crase facultativa antes
              de nome próprio feminino de lugar. Na B, falta crase antes de "aquele"
              e "ela" bloqueia artigo. Na C, "essa" bloqueia artigo (proibição de
              crase) e "a casa" sem especificação não leva crase. Na D, "àquilo"
              estaria correto se fosse objeto, mas como sujeito é errado; verbos
              nunca admitem crase.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Texto Literário e Crase"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho a seguir: <em>"À medida que os anos passavam, a personagem
              foi se adaptando à nova realidade, voltando sempre à cidade onde nascera,
              mesmo que fosse apenas a pé, a sonhar com tempos melhores."</em> Sobre
              o uso da crase nesse trecho, é correto afirmar:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Todas as ocorrências de crase no trecho estão incorretas.",
            },
            {
              letter: "b",
              text: "A expressão 'à medida que' está errada; o correto seria 'a medida que'.",
            },
            {
              letter: "c",
              text: "O uso de crase em 'à nova realidade' e 'à cidade' está correto; 'a pé' e 'a sonhar' não levam crase por razões distintas.",
              correct: true,
            },
            {
              letter: "d",
              text: "Apenas 'à medida que' está correta; as demais ocorrências de crase são opcionais e poderiam ser suprimidas.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a <strong>C</strong>. No trecho: "à medida que"
              é locução conjuntiva que exige crase obrigatória; "à nova realidade" =
              preposição + artigo feminino antes de substantivo feminino → crase
              obrigatória; "à cidade" = mesma situação → crase obrigatória. Já "a
              pé" é locução adverbial <em>masculina</em> (sem artigo feminino, logo
              sem crase) e "a sonhar" tem crase proibida pois antecede verbo no
              infinitivo, que nunca admite artigo. A alternativa C é a única que
              distingue corretamente todos os casos.
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Reescrita e Equivalência"
          level="Contextualizado"
          statement={
            <p>
              A frase "Ele se opôs a aquela proposta desde o início" deve ser
              reescrita corretamente como:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ele se opôs a aquela proposta desde o início. (mantida sem alteração)",
            },
            {
              letter: "b",
              text: "Ele se opôs àquela proposta desde o início.",
              correct: true,
            },
            {
              letter: "c",
              text: "Ele se opôs á aquela proposta desde o início.",
            },
            {
              letter: "d",
              text: "Ele se opôs à aquela proposta desde o início.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a <strong>B</strong>. O verbo "opor-se" exige
              a preposição "a" (opor-se <em>a</em> algo). Quando essa preposição
              precede o pronome demonstrativo "aquela", ocorre a fusão obrigatória:
              a + aquela = <strong>àquela</strong>. A forma da alternativa A está
              errada por manter as duas palavras separadas sem realizar a contração.
              A alternativa C usa acento agudo (incorreto — o acento da crase é
              grave). A alternativa D duplica a vogal (à + aquela), o que é erro
              crasso: a crase já representa a fusão; escrever "à aquela" seria
              redundante e incorreto.
            </p>
          }
        />
      </section>
    </article>
  );
}
