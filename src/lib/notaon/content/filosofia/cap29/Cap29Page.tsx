"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 29</span>
          <h1>Existencialismo: Sartre, Simone de Beauvoir e Albert Camus</h1>
          <p>
            O existencialismo é a filosofia que coloca a existência humana concreta — com sua
            liberdade, angústia e responsabilidade — no centro do pensamento. Surgiu no contexto
            do pós-Segunda Guerra Mundial e influenciou profundamente a filosofia, a literatura,
            o feminismo e os movimentos de emancipação do século XX.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. O Existencialismo e Seu Contexto Histórico</h2>
        <p>
          O existencialismo floresce no pós-Segunda Guerra Mundial (1945–), em um contexto de
          devastação, Holocausto e Bombas de Hiroshima e Nagasaki. A humanidade confrontou-se com
          a capacidade de se destruir totalmente. As certezas do Iluminismo — razão, progresso,
          ciência — pareciam insuficientes para explicar a barbárie.
        </p>
        <p>
          Precursores importantes: <strong>Søren Kierkegaard</strong> (1813–1855), que colocou a
          angústia e a escolha individual acima dos sistemas racionais; <strong>Friedrich Nietzsche</strong>,
          com a "morte de Deus" e a criação de valores; <strong>Martin Heidegger</strong> (1889–1976),
          com a análise da existência como "ser-no-mundo" e a questão do ser.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sartre</span>
        <h2>2. Jean-Paul Sartre: "A Existência Precede a Essência"</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Diagrama existência versus essência em Sartre e Platão">
            {/* Platão */}
            <rect x="20" y="30" width="180" height="140" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="110" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">PLATÃO / TRADIÇÃO</text>
            <text x="110" y="78" textAnchor="middle" fontSize="11" fill="#1e40af">ESSÊNCIA precede</text>
            <text x="110" y="95" textAnchor="middle" fontSize="11" fill="#1e40af">a EXISTÊNCIA</text>
            <text x="110" y="120" textAnchor="middle" fontSize="10" fill="#1e40af">Ideia → ser concreto</text>
            <text x="110" y="137" textAnchor="middle" fontSize="10" fill="#1e40af">Deus cria segundo</text>
            <text x="110" y="154" textAnchor="middle" fontSize="10" fill="#1e40af">um modelo prévio</text>

            {/* VS */}
            <text x="240" y="110" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#374151">VS</text>

            {/* Sartre */}
            <rect x="280" y="30" width="180" height="140" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="370" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">SARTRE</text>
            <text x="370" y="78" textAnchor="middle" fontSize="11" fill="#065f46">EXISTÊNCIA precede</text>
            <text x="370" y="95" textAnchor="middle" fontSize="11" fill="#065f46">a ESSÊNCIA</text>
            <text x="370" y="120" textAnchor="middle" fontSize="10" fill="#065f46">Ser humano existe</text>
            <text x="370" y="137" textAnchor="middle" fontSize="10" fill="#065f46">primeiro, depois</text>
            <text x="370" y="154" textAnchor="middle" fontSize="10" fill="#065f46">se define pela ação</text>
          </svg>
          <figcaption>Confronto entre a tradição filosófica (essência precede existência) e o existencialismo de Sartre.</figcaption>
        </figure>
        <p>
          Jean-Paul Sartre (1905–1980), filósofo e escritor francês, é o maior representante do
          existencialismo ateu. Em <em>O Existencialismo é um Humanismo</em> (1945), enuncia o
          princípio fundamental: <strong>"a existência precede a essência"</strong>.
        </p>
        <p>
          Enquanto para Platão e o pensamento cristão a essência (ideia, alma, natureza humana)
          precede e determina a existência concreta — Deus cria o ser humano segundo um modelo
          prévio —, para Sartre o ser humano <em>existe primeiro</em>, lançado no mundo sem
          natureza prévia, e <em>depois</em> se define pelas escolhas e ações. Não há natureza
          humana fixa: "o homem nada mais é do que aquilo que ele se faz."
        </p>
        <div className="lesson-highlight">
          <h3>Liberdade radical e má-fé</h3>
          <p>
            Para Sartre, o ser humano é <strong>condenado a ser livre</strong>: não pode escapar
            da escolha, pois mesmo não escolher é uma escolha. Isso gera <strong>angústia</strong>:
            a consciência de que somos completamente responsáveis por nós mesmos e pelo mundo.
            A <strong>má-fé</strong> (<em>mauvaise foi</em>) é a tentativa de fugir dessa liberdade,
            fingindo ser determinado — "eu sou assim porque nasci assim", "não tenho escolha". É
            uma forma de autoengano, de recusar a responsabilidade pela própria existência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Beauvoir</span>
        <h2>3. Simone de Beauvoir: Existencialismo e Feminismo</h2>
        <p>
          Simone de Beauvoir (1908–1986), parceira intelectual e amorosa de Sartre, aplicou o
          existencialismo à condição feminina em <em>O Segundo Sexo</em> (1949), obra fundante
          do feminismo moderno. Sua frase mais famosa: <strong>"Ninguém nasce mulher: torna-se
          mulher."</strong>
        </p>
        <p>
          Beauvoir demonstra que a "feminilidade" não é uma essência biológica, mas uma
          <strong> construção social e cultural</strong>: as mulheres são condicionadas desde a
          infância a ocupar o papel de <em>Outro</em> — complemento e objeto do sujeito masculino,
          nunca sujeito de sua própria existência. Isso não é natural, mas resultado de séculos de
          opressão patriarcal.
        </p>
        <p>
          Em <em>A Ética da Ambiguidade</em> (1947), Beauvoir desenvolve uma ética existencialista:
          a liberdade individual só se realiza plenamente se reconhecer e buscar a liberdade de
          todos os outros. A opressão de uns nega a liberdade de todos.
        </p>
        <div className="lesson-highlight">
          <h3>Beauvoir e o feminismo contemporâneo</h3>
          <p>
            O trabalho de Beauvoir antecipou décadas de teoria feminista: a distinção entre
            <strong> sexo</strong> (biológico) e <strong>gênero</strong> (social e cultural) — hoje
            central nos estudos de gênero — está implícita em sua análise. Influenciou Betty Friedan,
            Judith Butler e inúmeras pensadoras feministas posteriores.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Camus</span>
        <h2>4. Albert Camus: O Absurdo e a Revolta</h2>
        <p>
          Albert Camus (1913–1960), escritor e filósofo franco-argelino, não se identificava como
          existencialista (era crítico de Sartre), mas seu pensamento dialoga profundamente com esse
          movimento. Para Camus, o problema central da filosofia é o <strong>absurdo</strong>: o
          conflito entre a necessidade humana de sentido e a indiferença radical do universo.
        </p>
        <p>
          Em <em>O Mito de Sísifo</em> (1942), Camus descreve Sísifo — condenado pelos deuses a
          empurrar eternamente uma pedra morro acima, que sempre rola de volta — como a metáfora
          da condição humana. A questão filosófica fundamental é: diante do absurdo, vale a pena
          viver?
        </p>
        <p>
          Camus rejeita o suicídio (escapatória física) e o "salto de fé" religioso (escapatória
          metafísica). Propõe a <strong>revolta</strong>: aceitar o absurdo sem capitular, continuar
          vivendo e criando com plena consciência da condição absurda. "É preciso imaginar Sísifo
          feliz."
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>5. Sartre e Camus: Semelhanças e Diferenças</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Sartre</th>
                <th>Camus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ponto de partida</strong></td>
                <td>Liberdade radical do sujeito</td>
                <td>Absurdo da condição humana</td>
              </tr>
              <tr>
                <td><strong>Deus</strong></td>
                <td>Ateu — sem Deus, o ser humano cria valores</td>
                <td>Agnóstico — o universo é indiferente</td>
              </tr>
              <tr>
                <td><strong>Resposta ao desespero</strong></td>
                <td>Comprometimento (<em>engagement</em>) político</td>
                <td>Revolta e criação artística</td>
              </tr>
              <tr>
                <td><strong>Política</strong></td>
                <td>Próximo ao marxismo; comprometimento com causas coletivas</td>
                <td>Crítico do totalitarismo (incluindo o soviético)</td>
              </tr>
              <tr>
                <td><strong>Obras centrais</strong></td>
                <td><em>O Ser e o Nada</em>, <em>As Moscas</em>, <em>A Náusea</em></td>
                <td><em>O Mito de Sísifo</em>, <em>O Estrangeiro</em>, <em>A Peste</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comprometimento</span>
        <h2>6. O Comprometimento (Engagement) Existencialista</h2>
        <p>
          Para Sartre, a liberdade existencialista não é individualismo: porque somos radicalmente
          livres e responsáveis, somos responsáveis por todos. "Ao escolhermos o que fazer,
          escolhemos para todos os homens a imagem do que o homem deve ser."
        </p>
        <p>
          O <strong>engagement</strong> (comprometimento/engajamento) é a postura existencialista
          de não se manter neutro diante das questões políticas e sociais. Sartre foi figura pública
          comprometida: contra o colonialismo francês na Argélia, contra o stalinismo (tardiamente),
          a favor dos movimentos de libertação do Terceiro Mundo. Beauvoir comprometeu-se com o
          movimento feminista e com causas de mulheres concretas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Autenticidade</span>
        <h2>7. A Angústia Existencial e o Problema da Autenticidade</h2>
        <p>
          Para o existencialismo, a <strong>angústia</strong> não é uma patologia a ser curada,
          mas a experiência lúcida da própria liberdade. Kierkegaard a descreveu como "a vertigem
          da liberdade"; Heidegger, como o estado afetivo que revela ao Dasein a sua condição de
          ser-para-a-morte; Sartre, como a consciência de que não há fundamento externo para as
          nossas escolhas.
        </p>
        <p>
          A <strong>autenticidade</strong> é o conceito positivo oposto à má-fé. Ser autêntico
          significa assumir plenamente a própria liberdade e responsabilidade, reconhecer a
          contingência da existência e agir de acordo com escolhas genuinamente suas — não por
          pressão social, conveniência ou autoengano. É a tarefa mais difícil e mais essencial
          do existencialismo.
        </p>
        <ul>
          <li><strong>Heidegger:</strong> autenticidade é ser-para-a-morte — viver consciente da finitude, sem se perder no "falatório" impessoal do "se diz", "se faz".</li>
          <li><strong>Sartre:</strong> autenticidade exige reconhecer a angústia, a facticidade e o projeto de si mesmo sem má-fé.</li>
          <li><strong>Beauvoir:</strong> a autenticidade feminina exige romper com o papel do Outro — a mulher deve tornar-se sujeito de sua própria existência.</li>
          <li><strong>Camus:</strong> a autenticidade é a revolta lúcida — viver o absurdo sem negá-lo por escapatórias religiosas ou suicidas.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Angústia vs. Medo</h3>
          <p>
            O existencialismo distingue <strong>angústia</strong> (diante da própria liberdade,
            sem objeto determinado) de <strong>medo</strong> (diante de uma ameaça concreta e
            identificável). A angústia revela que somos responsáveis pela totalidade do nosso ser
            — ela é, paradoxalmente, o sinal da liberdade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM</span>
        <h2>8. O Existencialismo no ENEM: Textos Típicos e Armadilhas</h2>
        <p>
          O existencialismo aparece frequentemente no ENEM por meio de trechos de Sartre,
          Beauvoir e Camus, além de textos sobre liberdade, responsabilidade e identidade.
          Veja como o ENEM costuma abordar o tema e as armadilhas mais comuns:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>O ENEM costuma cobrar…</th>
                <th>Armadilha frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sartre</strong></td>
                <td>Existência precede essência; má-fé; responsabilidade radical; engagement</td>
                <td>Confundir existencialismo com pessimismo — Sartre o chama de "humanismo otimista"</td>
              </tr>
              <tr>
                <td><strong>Beauvoir</strong></td>
                <td>"Ninguém nasce mulher"; gênero como construção social; liberdade e opressão</td>
                <td>Interpretar a frase como negação da biologia, em vez de crítica ao determinismo social</td>
              </tr>
              <tr>
                <td><strong>Camus</strong></td>
                <td>O absurdo; Sísifo; revolta criativa vs. suicídio e fé</td>
                <td>Confundir "absurdo" com niilismo — Camus não conclui que tudo é inútil, mas que devemos criar sentido</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Estratégia de prova</h3>
          <p>
            Quando o ENEM apresentar um texto existencialista, identifique primeiro o
            <strong> problema central</strong> (liberdade? responsabilidade? absurdo? autenticidade?)
            e depois a <strong>solução proposta</strong>. Descarte alternativas que atribuam ao
            autor posições opostas: Sartre nunca defende determinismo; Beauvoir nunca afirma que
            biologia é destino; Camus nunca recomenda o suicídio.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧍</span>
            <h3>Existência antes da Essência</h3>
            <p>Sartre: não há natureza humana fixa. O ser humano se faz pelas escolhas.</p>
          </div>
          <div className="math-card">
            <span>😨</span>
            <h3>Liberdade e Angústia</h3>
            <p>Somos "condenados a ser livres". A responsabilidade total gera angústia existencial.</p>
          </div>
          <div className="math-card">
            <span>🎭</span>
            <h3>Má-Fé</h3>
            <p>Recusar a própria liberdade, fingindo ser determinado por natureza ou circunstância.</p>
          </div>
          <div className="math-card">
            <span>♀️</span>
            <h3>Beauvoir</h3>
            <p>"Ninguém nasce mulher." Gênero é construção social — base do feminismo moderno.</p>
          </div>
          <div className="math-card">
            <span>🗿</span>
            <h3>Camus e o Absurdo</h3>
            <p>O universo é indiferente. Sísifo: revolta criativa é a resposta ao absurdo.</p>
          </div>
          <div className="math-card">
            <span>✊</span>
            <h3>Engagement</h3>
            <p>Sartre: liberdade implica comprometimento com as causas de todos os seres humanos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Existência Precede Essência"
          statement={<p>A afirmação sartriana "a existência precede a essência" significa que:</p>}
          options={[
            { letter: "a", text: "O ser humano possui uma natureza fixa e imutável, dada por Deus antes de seu nascimento." },
            { letter: "b", text: "O ser humano existe primeiro, sem natureza prévia, e se define pelo que faz e escolhe.", correct: true },
            { letter: "c", text: "A existência física do corpo precede a existência da consciência no desenvolvimento humano." },
            { letter: "d", text: "A essência das coisas materiais é mais importante do que sua existência concreta." },
          ]}
          resolution={<p>Sartre inverte a tradição filosófica: enquanto para Platão, Aristóteles e o pensamento cristão a essência (modelo, forma, alma) precede e determina a existência concreta, para Sartre o ser humano é <strong>lançado no mundo</strong> sem essência prévia — existe primeiro, depois se define pelo que escolhe e faz. "O homem nada mais é do que aquilo que ele se faz." Isso implica liberdade total e responsabilidade total.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Má-Fé em Sartre"
          statement={<p>Uma pessoa que afirma "não posso fazer diferente, sou assim por natureza" está, do ponto de vista sartriano, agindo em:</p>}
          options={[
            { letter: "a", text: "Engagement — comprometendo-se autenticamente com sua situação existencial." },
            { letter: "b", text: "Má-fé — negando sua liberdade e responsabilidade ao se considerar determinado.", correct: true },
            { letter: "c", text: "Angústia — reconhecendo plenamente o peso de sua liberdade radical." },
            { letter: "d", text: "Absurdo — reconhecendo a indiferença do universo diante de suas escolhas." },
          ]}
          resolution={<p>A <strong>má-fé</strong> (<em>mauvaise foi</em>) é a tentativa de fugir da liberdade e da responsabilidade ao negar que somos livres. Ao dizer "sou assim por natureza" ou "não tenho escolha", a pessoa trata a si mesma como coisa determinada (en-soi) em vez de consciência livre (pour-soi). Para Sartre, é sempre uma escolha — inclusive a escolha de não mudar.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Beauvoir e a Construção Social do Gênero"
          statement={<p>A afirmação de Simone de Beauvoir "Ninguém nasce mulher: torna-se mulher" implica que:</p>}
          options={[
            { letter: "a", text: "As diferenças biológicas entre homens e mulheres determinam seus papéis sociais naturalmente." },
            { letter: "b", text: "A feminilidade é uma essência imutável, comum a todas as mulheres em qualquer cultura." },
            { letter: "c", text: "O gênero é uma construção social e cultural, não uma consequência necessária da biologia.", correct: true },
            { letter: "d", text: "As mulheres devem recusar totalmente a maternidade para alcançar a plena liberdade." },
          ]}
          resolution={<p>Beauvoir aplica o existencialismo à condição feminina: assim como não há "natureza humana" fixa, não há "feminilidade" essencial. A mulher "torna-se mulher" pelo processo de socialização — pela educação, pelas expectativas culturais, pelos papéis que lhe são impostos desde a infância. Isso distingue <strong>sexo</strong> (biológico) de <strong>gênero</strong> (social/cultural) — distinção que se tornaria central no feminismo e nos estudos de gênero posteriores.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Camus e o Absurdo"
          statement={
            <p>
              "Há apenas um problema filosófico verdadeiramente sério: o suicídio. Julgar se a vida vale ou não vale a pena ser vivida é responder à questão fundamental da filosofia." (Albert Camus, <em>O Mito de Sísifo</em>)<br/><br/>
              Camus propõe que a resposta filosófica ao absurdo da existência humana é:
            </p>
          }
          options={[
            { letter: "a", text: "O suicídio, como forma legítima de recusa de uma existência sem sentido." },
            { letter: "b", text: "A fé religiosa, que oferece um sentido transcendente à condição absurda." },
            { letter: "c", text: "A revolta lúcida: aceitar o absurdo sem escapatórias, afirmando a vida com plena consciência.", correct: true },
            { letter: "d", text: "O engajamento político marxista, que transforma o absurdo individual em causa coletiva." },
          ]}
          resolution={<p>Camus rejeita as duas "escapatórias" do absurdo: o <strong>suicídio físico</strong> (que elimina quem experimenta o absurdo) e o <strong>suicídio filosófico</strong> (o "salto de fé" religioso, que nega o absurdo postulando um além transcendente). A resposta autêntica é a <strong>revolta</strong>: viver plenamente consciente do absurdo, sem negá-lo, criando sentido mesmo diante da indiferença do universo. Sísifo, condenado a empurrar a pedra eternamente, deve ser imaginado feliz.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Sartre e a Responsabilidade"
          statement={
            <p>
              "O existencialismo não é um ateísmo no sentido em que esgotaria suas forças para demonstrar que Deus não existe. O que ele afirma é que, mesmo que Deus existisse, isso não mudaria nada." (Jean-Paul Sartre, <em>O Existencialismo é um Humanismo</em>)<br/><br/>
              Que consequência o existencialismo de Sartre extrai dessa posição?
            </p>
          }
          options={[
            { letter: "a", text: "Que a existência de Deus garantiria os valores morais absolutos que os seres humanos devem seguir." },
            { letter: "b", text: "Que o ser humano está sozinho e não pode buscar nenhum tipo de fundamento para suas escolhas morais." },
            { letter: "c", text: "Que o ser humano é plenamente responsável por criar seus valores e dar sentido à sua existência, sem recurso a fundamentos externos.", correct: true },
            { letter: "d", text: "Que a moral religiosa é superior à ética filosófica por oferecer critérios mais claros de julgamento." },
          ]}
          resolution={<p>Sartre sustenta que mesmo a existência de Deus não mudaria o fato de que somos <strong>responsáveis</strong> por nossas escolhas: não podemos nos esconder atrás de uma essência divina, de uma natureza humana ou de qualquer outra fundação externa. Somos radicalmente livres — e essa liberdade exige que criemos nossos próprios valores e sentido. O existencialismo é um humanismo porque coloca o ser humano como único responsável por si mesmo e pela criação de valores.</p>}
        />
      </section>
    </article>
  );
}
