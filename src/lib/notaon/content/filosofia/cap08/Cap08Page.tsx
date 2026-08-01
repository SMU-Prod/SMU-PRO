"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 8</span>
          <h1>Platão: teoria das ideias, justiça e política</h1>
          <p>
            Platão (428–348 a.C.) é o filósofo mais influente da história ocidental. Discípulo de
            Sócrates e mestre de Aristóteles, fundou a Academia em Atenas e construiu um sistema
            filosófico completo que abrange a teoria do conhecimento, a metafísica, a ética e a
            política. Seu legado perpassa toda a tradição filosófica e religiosa do Ocidente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e Obra</span>
        <h2>1. Platão: vida, contexto e a Academia</h2>
        <p>
          <strong>Platão</strong> nasceu em Atenas em uma família aristocrática. Seu nome real era
          Arístocles — "Platão" (largura de ombros) era um apelido de luta. Conheceu Sócrates
          por volta dos 20 anos e ficou profundamente marcado por sua filosofia e por sua morte
          injusta em 399 a.C.
        </p>
        <p>
          Após a morte de Sócrates, viajou pela Grécia, Egito e Itália. Em Siracusa tentou
          (sem sucesso) implementar suas ideias políticas com o tirano Dionísio. De volta a
          Atenas, fundou a <strong>Academia</strong> (c. 387 a.C.) — a primeira instituição de
          ensino superior do mundo ocidental, que funcionou por quase novecentos anos.
        </p>
        <p>
          Escreveu em forma de <strong>diálogos</strong> (conversas filosóficas), com Sócrates
          geralmente como personagem principal. As obras principais incluem:
          <em> República, Fédon, Banquete, Mênon, Teeteto, Timeu</em> e outros.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dois Mundos</span>
        <h2>2. A teoria das ideias (Formas): dois mundos</h2>
        <p>
          A teoria mais famosa de Platão é a <strong>Teoria das Ideias</strong> (ou Formas). Platão
          propõe que a realidade está dividida em dois mundos:
        </p>
        <ul>
          <li>
            <strong>Mundo Sensível</strong> (material): o mundo que percebemos pelos sentidos.
            É imperfeito, mutável, transitório, plural. Todos os objetos físicos existem aqui —
            mas são cópias imperfeitas das Formas.
          </li>
          <li>
            <strong>Mundo Inteligível</strong> (ideal): o reino das Formas ou Ideias eternas,
            imutáveis, perfeitas e universais. Só acessível pela razão. Aqui existem a Forma
            do Belo em si, da Justiça em si, do Bem em si.
          </li>
        </ul>
        <p>
          Exemplos: todos os cavalos do mundo sensível participam da Forma do Cavalo; todas as ações
          justas participam da Forma da Justiça. As Formas são mais reais do que as coisas materiais.
        </p>
        <div className="lesson-highlight">
          <h3>A Forma do Bem</h3>
          <p>
            No topo do mundo das Formas está a <strong>Forma do Bem</strong> — análoga ao Sol no
            mundo sensível. Assim como o sol ilumina e torna visíveis os objetos, o Bem ilumina
            e torna inteligíveis todas as outras Formas. É o princípio supremo da realidade e do
            conhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Mito da Caverna</span>
        <h2>3. O mito da caverna: interpretação e aplicação</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 280" width="500" height="280" aria-label="Mito da Caverna de Platão">
            {/* Caverna */}
            <path d="M30,260 Q30,80 250,60 Q470,80 470,260 Z" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>

            {/* Prisioneiros */}
            <circle cx="160" cy="200" r="12" fill="#6b7280"/>
            <circle cx="200" cy="200" r="12" fill="#6b7280"/>
            <circle cx="240" cy="200" r="12" fill="#6b7280"/>
            <text x="200" y="235" textAnchor="middle" fontSize="10" fill="#374151">Prisioneiros acorrentados</text>

            {/* Parede de sombras */}
            <rect x="130" y="170" width="140" height="6" rx="2" fill="#374151"/>
            <text x="200" y="168" textAnchor="middle" fontSize="9" fill="#374151">parede</text>

            {/* Sombras na parede da caverna */}
            <rect x="80" y="90" width="240" height="40" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1"/>
            <text x="200" y="106" textAnchor="middle" fontSize="10" fill="#6b7280">SOMBRAS</text>
            <text x="200" y="120" textAnchor="middle" fontSize="9" fill="#9ca3af">(aparências, opiniões)</text>

            {/* Fogo atrás */}
            <ellipse cx="200" cy="160" rx="20" ry="12" fill="#fbbf24" opacity="0.8"/>
            <text x="200" y="157" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">fogo</text>

            {/* Saída */}
            <path d="M390,180 Q430,140 450,80" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5,3"/>
            <circle cx="450" cy="70" r="18" fill="#fbbf24"/>
            <text x="450" y="66" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">SOL</text>
            <text x="450" y="80" textAnchor="middle" fontSize="9" fill="#92400e">Bem</text>

            <text x="420" y="130" textAnchor="middle" fontSize="10" fill="#1d4ed8">filósofo</text>
            <text x="420" y="144" textAnchor="middle" fontSize="10" fill="#1d4ed8">liberto →</text>

            {/* Legenda */}
            <text x="30" y="275" fontSize="9" fill="#6b7280">Dentro: mundo sensível (aparências). Fora: mundo das Formas (verdade). Sol = Forma do Bem.</text>
          </svg>
          <figcaption>O mito da caverna: prisioneiros veem apenas sombras (opiniões); o filósofo liberto ascende à luz do Sol (a Forma do Bem).</figcaption>
        </figure>
        <p>
          O mito da caverna, do Livro VII da <em>República</em>, descreve prisioneiros acorrentados
          numa caverna desde a infância, vendo apenas as sombras projetadas na parede.
          Quando um deles é libertado e sobe à luz do sol, inicialmente fica cego — mas gradualmente
          vê os objetos reais, e finalmente o sol (o Bem).
        </p>
        <p>
          <strong>Interpretação:</strong> as sombras representam as opiniões (doxa) e as aparências
          do mundo sensível. O processo de libertação é a educação filosófica — a ascensão da opinião
          ao conhecimento verdadeiro (episteme). O filósofo que retorna à caverna para iluminar os
          outros representa o dever político do sábio.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epistemologia</span>
        <h2>4. Doxa vs. Episteme: graus de conhecimento</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Tipo</th>
                <th>Objeto</th>
                <th>Faculdade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mais baixo</td>
                <td><strong>Eikasia</strong> (imaginação)</td>
                <td>Sombras, imagens, reflexos</td>
                <td>Imaginação</td>
              </tr>
              <tr>
                <td></td>
                <td><strong>Pistis</strong> (crença)</td>
                <td>Objetos físicos sensíveis</td>
                <td>Percepção</td>
              </tr>
              <tr>
                <td></td>
                <td><strong>Dianoia</strong> (pensamento discursivo)</td>
                <td>Objetos matemáticos</td>
                <td>Razão discursiva</td>
              </tr>
              <tr>
                <td>Mais alto</td>
                <td><strong>Noesis</strong> (intuição intelectual)</td>
                <td>Formas puras, o Bem</td>
                <td>Razão pura (nous)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os dois primeiros níveis (eikasia e pistis) constituem a <strong>doxa</strong> (opinião),
          relativa ao mundo sensível. Os dois últimos (dianoia e noesis) constituem a <strong>episteme</strong>
          (conhecimento), relativa ao mundo inteligível.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Alma</span>
        <h2>5. A alma tripartite: razão, ânimo e apetite</h2>
        <p>
          Na <em>República</em> e no <em>Fedro</em>, Platão descreve a alma humana como composta
          de três partes:
        </p>
        <ul>
          <li><strong>Razão (logistikon):</strong> a parte mais nobre, que deve governar as outras. Sede do pensamento e da sabedoria. Localizada na cabeça.</li>
          <li><strong>Ânimo/Espírito (thymoeides):</strong> a sede da coragem, da honra e da vontade de lutar. Deve obedecer à razão e controlar os apetites. Localizado no peito.</li>
          <li><strong>Apetite (epithymetikon):</strong> a parte inferior, sede dos desejos corporais (comida, bebida, sexo, dinheiro). Deve ser controlada pela razão. Localizado no ventre.</li>
        </ul>
        <p>
          A <strong>alma justa</strong> é aquela em que a razão governa, auxiliada pelo espírito,
          controlando os apetites. A injustiça na alma é uma desordem: o apetite governa a razão.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A República</span>
        <h2>6. A República: política e a cidade ideal</h2>
        <p>
          A <em>República</em> é a obra política central de Platão. Nela, ele descreve a cidade
          (polis) ideal organizada segundo a justiça — paralelando a estrutura da alma.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe social</th>
                <th>Parte da alma</th>
                <th>Virtude</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Filósofos-reis</strong></td>
                <td>Razão</td>
                <td>Sabedoria</td>
                <td>Governar a cidade</td>
              </tr>
              <tr>
                <td><strong>Guerreiros/Auxiliares</strong></td>
                <td>Ânimo</td>
                <td>Coragem</td>
                <td>Defender a cidade</td>
              </tr>
              <tr>
                <td><strong>Artesãos/Produtores</strong></td>
                <td>Apetite</td>
                <td>Moderação</td>
                <td>Produzir bens</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>justiça</strong>, tanto na alma quanto na cidade, é a harmonia entre as partes:
          cada uma cumpre sua função sem invadir a das outras. Só os filósofos — que conhecem o Bem
          em si — têm condições de governar justamente.
        </p>
        <div className="lesson-highlight">
          <h3>O filósofo-rei</h3>
          <p>
            "Enquanto os filósofos não forem reis nas cidades, ou os que agora se chamam reis e
            soberanos não forem autêntica e seriamente filósofos, não haverá trégua nos males
            das cidades." (República, Livro V). Essa ideia de governo dos sábios foi e continua
            sendo alvo de crítica: é compatível com a democracia?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alma Imortal</span>
        <h2>7. A reminiscência e a imortalidade da alma</h2>
        <p>
          A teoria do conhecimento de Platão está profundamente ligada à sua crença na
          <strong> imortalidade da alma</strong>. No diálogo <em>Mênon</em>, Platão apresenta a
          teoria da <strong>reminiscência</strong> (anamnese): o aprendizado não é aquisição de
          conhecimento novo, mas <em>recordação</em> de verdades que a alma conhecia antes de
          encarnar no corpo.
        </p>
        <p>
          A alma, sendo imortal, existiu no mundo das Formas antes de habitar o corpo. Ao nascer,
          esquece esse conhecimento. A filosofia — e especialmente a maiêutica socrática — é o
          processo de fazer a alma <em>recordar</em> o que já sabia. No <em>Mênon</em>, Sócrates
          demonstra isso ensinando geometria a um escravo analfabeto apenas por perguntas — o
          escravo "descobre" o teorema de dentro de si.
        </p>
        <p>
          No <em>Fédon</em>, Platão apresenta quatro argumentos para a imortalidade da alma:
        </p>
        <ul>
          <li><strong>Argumento dos contrários:</strong> assim como o sono gera o despertar e vice-versa, a morte gera a vida e a vida gera a morte — a alma se rencarna ciclicamente.</li>
          <li><strong>Argumento da reminiscência:</strong> se podemos recordar conhecimentos que nunca adquirimos nesta vida, a alma deve ter existido antes.</li>
          <li><strong>Argumento da afinidade:</strong> a alma é semelhante às Formas eternas e imutáveis — logo, é ela mesma simples, imutável e imortal.</li>
          <li><strong>Argumento da Forma da Vida:</strong> a alma é o princípio da vida; a morte é a ausência de vida; logo, a alma não pode morrer por definição.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Platão e o dualismo alma-corpo</h3>
          <p>
            Platão foi o grande responsável pelo dualismo alma-corpo no Ocidente: o corpo é
            prisão da alma, sede dos apetites e das ilusões sensíveis. A morte é a libertação
            da alma para o mundo das Formas. Essa concepção influenciou profundamente o
            pensamento cristão (Santo Agostinho, Descartes), a medicina (separação mente-corpo)
            e a ética (desconfiança do prazer corporal).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM: Platão</span>
        <h2>8. Platão no ENEM: abordagens, padrões e armadilhas</h2>
        <p>
          Platão é o filósofo mais cobrado no ENEM em Filosofia. As questões sobre Platão
          tipicamente exploram um dos quatro temas centrais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Como o ENEM cobra</th>
                <th>Armadilha frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mito da Caverna</strong></td>
                <td>Trecho da República; pergunta sobre o que as sombras, o fogo ou o sol representam</td>
                <td>Inverter: sombras = verdade; sol = aparência. É o contrário: sombras = ilusão; sol = Forma do Bem</td>
              </tr>
              <tr>
                <td><strong>Teoria das Formas</strong></td>
                <td>Texto sobre mundo sensível vs. inteligível; sobre o que Platão entende por "real"</td>
                <td>Confundir com Aristóteles: para Platão, as Formas existem separadas; para Aristóteles, nas próprias coisas</td>
              </tr>
              <tr>
                <td><strong>Filósofo-Rei</strong></td>
                <td>Questão sobre a cidade ideal e a relação entre conhecimento e governo</td>
                <td>Achar que Platão era democrata — ele critica duramente a democracia por ser governo da opinião, não do saber</td>
              </tr>
              <tr>
                <td><strong>Epistemologia (doxa/episteme)</strong></td>
                <td>Distinção entre opinião e conhecimento genuíno</td>
                <td>Confundir doxa com erro simples — doxa pode ser verdadeira, mas não justificada; episteme é crença verdadeira e justificada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Como ler um trecho de Platão no ENEM</h3>
          <p>
            1. Identifique se o texto é de Platão ou de um comentador. 2. Procure as
            <strong> palavras-chave</strong>: "sombras", "luz", "mundo inteligível", "Formas",
            "alma", "filósofo", "cidade", "justo". 3. Relacione ao contexto histórico —
            a morte de Sócrates e a desconfiança na democracia explicam muito do pensamento
            político platônico. 4. Nunca interprete Platão como um relativista — ele acredita
            em verdades absolutas e objetivas, acessíveis pela razão filosófica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🌟</span>
            <h3>Dois Mundos</h3>
            <p>Mundo sensível (cópias imperfeitas) e mundo inteligível (Formas eternas e perfeitas).</p>
          </div>
          <div className="math-card">
            <span>🕯️</span>
            <h3>Mito da Caverna</h3>
            <p>Prisioneiros veem sombras (opiniões). Filósofo liberto vê o Sol (a Forma do Bem).</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Alma Tripartite</h3>
            <p>Razão governa Ânimo e Apetite. Alma justa = razão no comando.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>A República</h3>
            <p>Cidade justa: filósofos governam, guerreiros defendem, artesãos produzem.</p>
          </div>
          <div className="math-card">
            <span>👑</span>
            <h3>Filósofo-Rei</h3>
            <p>Só quem conhece o Bem pode governar justamente. Crítica à democracia.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Legado</h3>
            <p>A filosofia ocidental é "notas de rodapé a Platão" (Whitehead). Influência imensa.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Teoria das Ideias"
          statement={<p>Segundo a Teoria das Ideias de Platão, o que são as Formas (ou Ideias)?</p>}
          options={[
            { letter: "a", text: "Pensamentos subjetivos que cada pessoa cria em sua mente individual." },
            { letter: "b", text: "Entidades eternas, imutáveis e perfeitas que existem no mundo inteligível, independentemente das coisas materiais.", correct: true },
            { letter: "c", text: "Conceitos abstratos produzidos pela linguagem humana para nomear objetos físicos." },
            { letter: "d", text: "Imagens projetadas pelos deuses na mente dos filósofos durante a meditação." },
          ]}
          resolution={<p>As <strong>Formas</strong> (ou Ideias) de Platão são entidades objetivas, eternas e imutáveis que existem no mundo inteligível, independentemente de qualquer mente humana ou objeto físico. Cada coisa do mundo sensível é uma cópia imperfeita e transitória de sua Forma: os cavalos físicos são cópias imperfeitas da Forma do Cavalo; as ações justas participam da Forma da Justiça. As Formas são mais reais do que as coisas materiais — são o fundamento ontológico e epistemológico de tudo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Mito da Caverna"
          statement={<p>No mito da caverna, os prisioneiros acorrentados que veem apenas sombras na parede simbolizam:</p>}
          options={[
            { letter: "a", text: "Os filósofos que atingiram o conhecimento pleno das Formas eternas." },
            { letter: "b", text: "As pessoas que vivem presas às aparências e opiniões do mundo sensível, sem acesso à verdade.", correct: true },
            { letter: "c", text: "Os tiranos que governam as cidades injustas sem amor pela sabedoria." },
            { letter: "d", text: "Os poetas e artistas que Platão criticava por imitarem cópias de cópias da realidade." },
          ]}
          resolution={<p>No mito da caverna, os prisioneiros representam os seres humanos comuns que vivem presos ao mundo das <em>aparências</em> — as sombras. Acreditam que as sombras são a realidade, pois nunca viram outra coisa. Isso corresponde ao nível mais baixo de conhecimento: a <em>doxa</em> (opinião) baseada nas percepções sensíveis. O processo de educação filosófica é análogo à libertação das correntes e à ascensão à luz do sol (a Forma do Bem). O filósofo que retorna à caverna simboliza a obrigação moral de educar os outros.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Platão e a Democracia"
          statement={<p>Platão era crítico severo da democracia ateniense. Com base em sua teoria política, seu principal argumento contra a democracia seria:</p>}
          options={[
            { letter: "a", text: "A democracia favorece os ricos, enquanto a aristocracia distribui o poder de forma mais justa." },
            { letter: "b", text: "A democracia pressupõe que qualquer cidadão pode governar, mas governar bem requer conhecimento do Bem — que apenas os filósofos possuem.", correct: true },
            { letter: "c", text: "A democracia é intrinsecamente violenta, pois exige que as maiorias imponham sua vontade às minorias." },
            { letter: "d", text: "A democracia é incompatível com a justiça porque privilegia a liberdade sobre a igualdade." },
          ]}
          resolution={<p>A crítica platônica à democracia é epistemológica: ela parte do pressuposto de que <em>qualquer</em> cidadão pode governar, mas Platão argumenta que governar bem requer <strong>conhecimento do Bem em si</strong> — um conhecimento filosófico que exige décadas de formação. Deixar a cidade nas mãos do voto popular seria como deixar a navegação do barco nas mãos de um passageiro aleatório, em vez do piloto treinado. A democracia condenou Sócrates à morte — o que para Platão era prova suficiente de sua falha moral.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) A Alma Tripartite e a Educação"
          statement={<p>Platão propôs que a alma humana tem três partes: razão, ânimo e apetite. Tendo em vista essa tripartição, o objetivo central da educação para Platão seria:</p>}
          options={[
            { letter: "a", text: "Desenvolver ao máximo os apetites e desejos para que o indivíduo possa ser feliz e satisfeito." },
            { letter: "b", text: "Eliminar completamente o ânimo e os apetites, tornando o ser humano puro inteleque." },
            { letter: "c", text: "Fortalecer a razão para que ela governe harmoniosamente as demais partes da alma, produzindo a virtude.", correct: true },
            { letter: "d", text: "Equilibrar igualmente as três partes da alma sem hierarquia entre elas." },
          ]}
          resolution={<p>Para Platão, a educação tem como objetivo a <strong>formação da alma justa</strong>: fortalecer a razão para que ela governe o ânimo e os apetites de forma harmoniosa. Não se trata de eliminar as partes inferiores (apetites e ânimo são necessários), mas de estabelecer a hierarquia correta: razão no comando, auxiliada pelo ânimo, controlando os apetites. Uma alma em que os apetites governam a razão é uma alma injusta e doente — o que para Platão corresponde à tirania, tanto na alma individual quanto na cidade.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Platão e as Artes"
          statement={<p>Platão excluía os poetas e artistas de sua cidade ideal porque, segundo ele, a arte é uma "imitação de imitação" da realidade. Com base na teoria das Formas, essa crítica significa que:</p>}
          options={[
            { letter: "a", text: "Os artistas não possuem talento genuíno e apenas copiam obras de outros artistas." },
            { letter: "b", text: "A arte imita objetos do mundo sensível (já cópias das Formas), distanciando ainda mais o espectador da verdade.", correct: true },
            { letter: "c", text: "A música e a poesia são superiores às artes visuais porque expressam emoções verdadeiras." },
            { letter: "d", text: "Os artistas deveriam se dedicar à filosofia para criar obras que expressem diretamente as Formas eternas." },
          ]}
          resolution={<p>Na teoria platônica, a hierarquia da realidade é: Formas (nível 1) → objetos físicos, que as imitam (nível 2) → obras de arte, que imitam os objetos físicos (nível 3). A pintura de uma cama é uma imitação de uma cama física, que por sua vez é uma imitação da Forma da Cama. A arte está, portanto, duas vezes removida da verdade. Para Platão, o artista trabalha com aparências de aparências e estimula a parte emocional e apetitiva da alma (prejudicando o domínio da razão). Por isso, na República, os poetas são banidos ou submetidos a rígida censura filosófica.</p>}
        />
      </section>
    </article>
  );
}
