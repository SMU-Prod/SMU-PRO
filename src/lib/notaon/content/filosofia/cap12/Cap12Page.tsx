"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 12</span>
          <h1>Escolástica: São Tomás de Aquino e a Síntese entre Filosofia e Cristianismo</h1>
          <p>
            A Escolástica foi o movimento intelectual dominante nas universidades medievais, que buscou
            harmonizar a razão filosófica — especialmente de Aristóteles — com a fé cristã. São Tomás
            de Aquino é seu maior representante, construindo uma síntese monumental que ainda influencia
            a filosofia e a teologia ocidentais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto e Método</span>
        <h2>1. O que é a Escolástica?</h2>
        <p>
          A <strong>Escolástica</strong> (do latim <em>scholasticus</em>, "das escolas") foi o método
          de ensino filosófico-teológico praticado nas escolas catedrais e nas universidades medievais
          entre os séculos IX e XV. Seu objetivo central era usar a razão filosófica para aprofundar e
          defender a fé cristã — seguindo o lema de Anselmo de Cantuária: <em>"fides quaerens intellectum"</em>
          (a fé que busca a inteligência).
        </p>
        <p>
          O método escolástico se estruturava em dois momentos principais:
        </p>
        <ul>
          <li>
            <strong>Lectio:</strong> leitura comentada de textos de autoridade (a Bíblia, os Pais da
            Igreja, Aristóteles, Platão).
          </li>
          <li>
            <strong>Disputatio:</strong> debate público em que se formulava uma <em>quaestio</em>
            (questão), apresentavam-se argumentos favoráveis (<em>sed contra</em>), objeções
            (<em>objectiones</em>) e a resposta definitiva (<em>responsio</em>), seguida da réplica
            às objeções.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A quaestio escolástica</h3>
          <p>
            A forma "questão escolástica" — perguntar, objetar, responder, refutar — é um dos primeiros
            exemplos de método argumentativo rigoroso no Ocidente e antecipa o debate científico moderno.
            O ENEM valoriza a identificação desse método como forma de produção de conhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Grande Mestre</span>
        <h2>2. São Tomás de Aquino: Vida e Obra</h2>
        <p>
          <strong>Tomás de Aquino</strong> nasceu em 1225 no castelo de Roccasecca, na Itália, em família
          nobre. Ingressou na Ordem dos Dominicanos contra a vontade da família e estudou em Nápoles,
          Paris e Colônia, onde foi discípulo de <strong>Alberto Magno</strong>. Lecionou em Paris e em
          Roma e morreu em 1274, a caminho do Concílio de Lyon.
        </p>
        <p>
          Suas obras mais importantes são:
        </p>
        <ul>
          <li>
            <strong>Summa Theologiae</strong> (Suma Teológica): obra maior, inacabada, dividida em três
            partes — Deus, o ser humano e Cristo. Contém 512 questões e mais de 10 000 artigos.
          </li>
          <li>
            <strong>Summa Contra Gentiles:</strong> defesa racional da fé cristã diante de não-cristãos.
          </li>
          <li>
            <strong>Comentários a Aristóteles:</strong> análises detalhadas da Física, Ética a Nicômaco,
            Política e Metafísica.
          </li>
          <li>
            <strong>De Ente et Essentia</strong> (O Ser e a Essência): tratado metafísico sobre a distinção
            entre essência e existência.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>O Doutor Angélico</h3>
          <p>
            Tomás recebeu o título de <em>Doctor Angelicus</em> (Doutor Angélico) pela clareza e
            profundidade de seu pensamento. Em 1879, o papa Leão XIII declarou o tomismo a filosofia
            oficial da Igreja Católica (<em>Aeterni Patris</em>), influência que perdura até hoje.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Grande Síntese</span>
        <h2>3. Aristóteles + Cristianismo: A Síntese Tomista</h2>
        <p>
          O grande projeto de Tomás foi integrar o pensamento de <strong>Aristóteles</strong> — que
          chegara à Europa via tradições islâmica e judaica — com a teologia cristã. Aristóteles ensinava
          que o conhecimento parte dos sentidos (empirismo) e que existe uma causa primeira (o "Primeiro
          Motor Imóvel"). Tomás reinterpretou esse "Primeiro Motor" como o Deus cristão.
        </p>
        <p>
          Os pontos centrais da síntese tomista:
        </p>
        <ul>
          <li>
            <strong>Metafísica:</strong> adota a distinção aristotélica entre <em>ato</em> e
            <em> potência</em>, <em>forma</em> e <em>matéria</em>, adaptando-a para explicar a criação
            divina.
          </li>
          <li>
            <strong>Ética:</strong> a virtude aristotélica é integrada ao bem sobrenatural; a felicidade
            natural (eudaimonia) é completada pela bem-aventurança eterna (beatitudo).
          </li>
          <li>
            <strong>Política:</strong> o Estado tem uma finalidade natural (bem comum) que se ordena ao
            fim sobrenatural da salvação.
          </li>
          <li>
            <strong>Epistemologia:</strong> o conhecimento começa pelos sentidos (contra o agostinianismo
            platônico) e ascende à razão, que por sua vez é iluminada pela fé.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Provas da Existência de Deus</span>
        <h2>4. As Cinco Vias de Tomás de Aquino</h2>
        <p>
          Na <em>Summa Theologiae</em> (I, q. 2, a. 3), Tomás propõe cinco argumentos
          <em> a posteriori</em> — ou seja, que partem da observação do mundo — para demonstrar a existência
          de Deus. São as famosas <strong>Cinco Vias</strong>:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Via</th>
                <th>Ponto de partida</th>
                <th>Conclusão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª — Do Movimento</td>
                <td>Tudo que se move é movido por outro</td>
                <td>Existe um Primeiro Motor Imóvel = Deus</td>
              </tr>
              <tr>
                <td>2ª — Da Causa Eficiente</td>
                <td>Toda causa tem uma causa anterior</td>
                <td>Existe uma Causa Primeira Incausada = Deus</td>
              </tr>
              <tr>
                <td>3ª — Da Contingência</td>
                <td>Seres contingentes podem ou não existir</td>
                <td>Existe um Ser Necessário = Deus</td>
              </tr>
              <tr>
                <td>4ª — Dos Graus de Perfeição</td>
                <td>Há graus de bondade, verdade e beleza</td>
                <td>Existe um Ser Máximo que é medida de tudo = Deus</td>
              </tr>
              <tr>
                <td>5ª — Da Finalidade (Teleológica)</td>
                <td>Seres sem razão agem com ordem e propósito</td>
                <td>Existe uma Inteligência Ordenadora = Deus</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 300" width="520" height="300" aria-label="As Cinco Vias de Tomás de Aquino">
            <rect x="10" y="10" width="500" height="280" rx="12" fill="#f8f7ff" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="260" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5b21b6">As Cinco Vias — Tomás de Aquino</text>
            {/* Via 1 */}
            <rect x="30" y="55" width="200" height="44" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1"/>
            <text x="130" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">1ª Via: Movimento</text>
            <text x="130" y="89" textAnchor="middle" fontSize="10" fill="#5b21b6">Primeiro Motor Imóvel</text>
            {/* Via 2 */}
            <rect x="290" y="55" width="200" height="44" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1"/>
            <text x="390" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">2ª Via: Causa Eficiente</text>
            <text x="390" y="89" textAnchor="middle" fontSize="10" fill="#5b21b6">Causa Primeira Incausada</text>
            {/* Via 3 */}
            <rect x="160" y="115" width="200" height="44" rx="8" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1"/>
            <text x="260" y="133" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">3ª Via: Contingência</text>
            <text x="260" y="149" textAnchor="middle" fontSize="10" fill="#5b21b6">Ser Necessário</text>
            {/* Via 4 */}
            <rect x="30" y="175" width="200" height="44" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1"/>
            <text x="130" y="193" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">4ª Via: Graus de Perfeição</text>
            <text x="130" y="209" textAnchor="middle" fontSize="10" fill="#5b21b6">Ser Máximo e Perfeito</text>
            {/* Via 5 */}
            <rect x="290" y="175" width="200" height="44" rx="8" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1"/>
            <text x="390" y="193" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4c1d95">5ª Via: Finalidade</text>
            <text x="390" y="209" textAnchor="middle" fontSize="10" fill="#5b21b6">Inteligência Ordenadora</text>
            {/* Centro — DEUS */}
            <ellipse cx="260" cy="258" rx="70" ry="24" fill="#7c3aed"/>
            <text x="260" y="263" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">D E U S</text>
            {/* Setas */}
            <line x1="130" y1="99" x2="220" y2="245" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrV)"/>
            <line x1="390" y1="99" x2="300" y2="245" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrV)"/>
            <line x1="260" y1="159" x2="260" y2="233" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrV)"/>
            <line x1="130" y1="219" x2="210" y2="248" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrV)"/>
            <line x1="390" y1="219" x2="310" y2="248" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrV)"/>
            <defs>
              <marker id="arrV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/>
              </marker>
            </defs>
          </svg>
          <figcaption>As Cinco Vias convergem para a existência de Deus, ponto de chegada de cada argumento.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fé e Razão</span>
        <h2>5. A Distinção entre Fé e Razão</h2>
        <p>
          Um dos maiores legados de Tomás é a clara distinção — e ao mesmo tempo a harmonia — entre
          <strong> fé</strong> e <strong>razão</strong>. Para ele, são dois caminhos distintos para a
          verdade, que não se contradizem:
        </p>
        <ul>
          <li>
            <strong>Razão natural:</strong> pode conhecer verdades sobre Deus (existência, atributos
            gerais) e sobre o mundo moral (lei natural). É autônoma em seu campo.
          </li>
          <li>
            <strong>Fé (revelação):</strong> revela verdades que superam a razão — a Trindade, a
            Encarnação, a Salvação. A razão não pode provar essas verdades, mas também não as contradiz.
          </li>
          <li>
            <strong>Teologia:</strong> usa a razão a serviço da fé para sistematizar, aprofundar e
            defender as verdades reveladas.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Contra Averróis: a Unidade da Verdade</h3>
          <p>
            Alguns seguidores de Averróis defendiam a "dupla verdade" — algo verdadeiro na filosofia
            poderia ser falso na teologia. Tomás rejeitou isso: há apenas uma verdade, e razão e fé,
            quando corretas, convergem para ela. A aparente contradição indica erro em um dos lados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética e Direito</span>
        <h2>6. Lei Natural, Lei Eterna e Direito Natural</h2>
        <p>
          A ética tomista é fundamentada na teoria das leis. Tomás distingue quatro tipos de lei:
        </p>
        <ul>
          <li>
            <strong>Lei Eterna:</strong> a razão de Deus que governa todo o universo. É o fundamento
            de todas as outras leis.
          </li>
          <li>
            <strong>Lei Natural:</strong> a participação da criatura racional na Lei Eterna. Todo ser
            humano, pela razão, pode conhecer os princípios básicos do bem (fazer o bem, evitar o mal;
            preservar a vida; buscar o conhecimento; viver em sociedade).
          </li>
          <li>
            <strong>Lei Humana (positiva):</strong> as leis concretas feitas pelos governantes, que
            devem derivar da lei natural. Uma lei injusta não é lei (<em>lex iniusta non est lex</em>).
          </li>
          <li>
            <strong>Lei Divina (revelada):</strong> conteúda nas Escrituras, orienta o ser humano para
            o fim sobrenatural.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Relevância para o ENEM</h3>
          <p>
            A teoria tomista do direito natural influencia diretamente os debates modernos sobre
            direitos humanos: a ideia de que existem direitos inalienáveis baseados na natureza humana
            (e não apenas nas leis estatais) tem raízes no pensamento de Tomás de Aquino.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Obra-Prima</span>
        <h2>7. A Summa Theologiae</h2>
        <p>
          A <strong>Summa Theologiae</strong> é a maior obra filosófico-teológica da Idade Média. Tomás
          a iniciou por volta de 1265 e não chegou a concluí-la antes de morrer em 1274. Está organizada em:
        </p>
        <ul>
          <li>
            <strong>Prima Pars (Primeira Parte):</strong> trata de Deus — existência, natureza e atributos
            divinos — e da criação.
          </li>
          <li>
            <strong>Secunda Pars (Segunda Parte):</strong> trata do ser humano e sua ordenação a Deus —
            incluindo os atos humanos, as virtudes, os vícios, a lei e a graça. Divide-se em Prima Secundae
            e Secunda Secundae.
          </li>
          <li>
            <strong>Tertia Pars (Terceira Parte):</strong> trata de Cristo e dos sacramentos como meios
            de salvação. Ficou incompleta.
          </li>
        </ul>
        <p>
          Conta-se que, perto da morte, após uma visão mística, Tomás teria dito: "Tudo que escrevi
          me parece palha comparado ao que vi." Essa frase ilustra a tensão entre razão e experiência
          mística que percorre toda a filosofia medieval.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Herança</span>
        <h2>8. O Tomismo e seu Legado</h2>
        <p>
          O pensamento de Tomás de Aquino — o <strong>tomismo</strong> — tornou-se a principal corrente
          filosófica da Igreja Católica. Seu legado inclui:
        </p>
        <ul>
          <li>
            A síntese entre razão e fé que permitiu à Igreja Católica dialogar com o pensamento secular
            por séculos.
          </li>
          <li>
            A fundação da <strong>filosofia do direito natural</strong>, que influenciou Hugo Grotius,
            John Locke e os fundadores dos direitos humanos modernos.
          </li>
          <li>
            O método da disputatio como precursor do debate acadêmico e científico.
          </li>
          <li>
            O <strong>Neotomismo</strong> (ou Neo-Escolástica), movimento filosófico do século XIX-XX
            que buscou atualizar Tomás — figuras como Jacques Maritain e Étienne Gilson.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🏫</span>
            <h3>Escolástica</h3>
            <p>Método universitário medieval: lectio + disputatio. Harmoniza fé e razão.</p>
          </div>
          <div className="math-card">
            <span>✝️</span>
            <h3>São Tomás</h3>
            <p>1225–1274. Dominicano. Maior filósofo medieval. Doutor Angélico.</p>
          </div>
          <div className="math-card">
            <span>📖</span>
            <h3>Summa Theologiae</h3>
            <p>Obra-prima: trata de Deus, do ser humano e de Cristo. 512 questões.</p>
          </div>
          <div className="math-card">
            <span>5️⃣</span>
            <h3>Cinco Vias</h3>
            <p>Argumentos a posteriori para provar a existência de Deus pelo mundo.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Lei Natural</h3>
            <p>Participação da razão humana na Lei Eterna. Fundamento dos direitos naturais.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Fé e Razão</h3>
            <p>Caminhos distintos para a mesma verdade. Uma lei injusta não é lei.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Método Escolástico"
          statement={<p>O método escolástico medieval era caracterizado pela articulação entre leitura de textos de autoridade e debate argumentativo. Esses dois momentos eram chamados, respectivamente, de:</p>}
          options={[
            { letter: "a", text: "lectio e disputatio", correct: true },
            { letter: "b", text: "quaestio e responsio" },
            { letter: "c", text: "ratio e fides" },
            { letter: "d", text: "contemplatio e meditatio" },
          ]}
          resolution={<p>O método escolástico compreendia a <strong>lectio</strong> (leitura comentada dos textos de autoridade) e a <strong>disputatio</strong> (debate público estruturado em questões, objeções e respostas). A <em>quaestio</em> e a <em>responsio</em> são partes da disputatio, não o método em si.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. As Cinco Vias"
          statement={<p>São Tomás de Aquino propôs cinco vias para demonstrar a existência de Deus. Qual das seguintes afirmações descreve corretamente a Terceira Via?</p>}
          options={[
            { letter: "a", text: "Parte da contingência dos seres para concluir pela existência de um Ser Necessário.", correct: true },
            { letter: "b", text: "Parte do movimento para concluir pela existência de um Primeiro Motor Imóvel." },
            { letter: "c", text: "Parte dos graus de perfeição para concluir pelo Ser Máximo." },
            { letter: "d", text: "Parte da finalidade dos seres para concluir por uma Inteligência Ordenadora." },
          ]}
          resolution={<p>A <strong>Terceira Via</strong> parte da observação de que os seres do mundo são <em>contingentes</em> — podem existir ou não existir. Se tudo fosse contingente, em algum momento nada existiria. Como algo existe, deve existir um Ser que existe necessariamente por si mesmo: esse é Deus. A 1ª Via parte do movimento; a 4ª dos graus de perfeição; a 5ª da finalidade.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Fé, Razão e Lei Natural"
          statement={<p>Tomás de Aquino distingue quatro tipos de lei. A afirmação "uma lei injusta não é lei" (<em>lex iniusta non est lex</em>) refere-se à relação entre qual par de leis?</p>}
          options={[
            { letter: "a", text: "Lei humana e lei natural: a lei positiva que viola a lei natural perde sua força obrigatória.", correct: true },
            { letter: "b", text: "Lei eterna e lei divina: a revelação supera qualquer ordenação divina anterior." },
            { letter: "c", text: "Lei natural e lei eterna: a razão humana pode contrariar a ordem divina." },
            { letter: "d", text: "Lei divina e lei humana: toda lei do Estado deve derivar diretamente das Escrituras." },
          ]}
          resolution={<p>Para Tomás, a <strong>lei humana (positiva)</strong> é legítima apenas quando deriva e respeita a <strong>lei natural</strong> (que, por sua vez, é participação da lei eterna). Quando o governante edita uma lei contrária ao bem comum ou à lei natural, ela perde seu caráter obrigatório moral — daí a famosa fórmula. Isso influenciou teorias modernas de desobediência civil e direitos humanos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Tomás e os Direitos Humanos"
          statement={<p>A teoria tomista da lei natural influenciou diretamente a Declaração Universal dos Direitos Humanos (1948) e a ideia de que existem direitos inalienáveis que os Estados não podem violar. Com base no pensamento de São Tomás de Aquino, essa concepção deriva do fato de que:</p>}
          options={[
            { letter: "a", text: "A razão humana, ao participar da lei eterna, conhece princípios morais básicos válidos para todos os seres humanos, independentemente da legislação estatal.", correct: true },
            { letter: "b", text: "Os direitos humanos foram revelados diretamente por Deus nas Escrituras Sagradas e transcritos pelos teólogos medievais." },
            { letter: "c", text: "Apenas os cristãos possuem acesso à lei natural, o que os torna titulares plenos dos direitos humanos." },
            { letter: "d", text: "O Estado moderno é a fonte de todos os direitos, cabendo a ele definir o que é justo com base na lei positiva." },
          ]}
          resolution={<p>Para Tomás, a <strong>lei natural</strong> é acessível a todo ser humano pela razão, pois é a participação da criatura racional na lei eterna de Deus. Isso significa que todos os seres humanos têm acesso, pela razão, a princípios morais básicos (preservar a vida, buscar o bem comum, etc.), independentemente de religião ou lei estatal. Essa ideia fundamenta a universalidade dos direitos humanos modernos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Síntese Aristotélico-Cristã"
          statement={<p>O filósofo islâmico Averróis defendia que a filosofia de Aristóteles e a verdade religiosa poderiam contradizer-se sem problema ("dupla verdade"). São Tomás de Aquino rejeitou essa posição. Qual era a concepção tomista sobre a relação entre filosofia e teologia?</p>}
          options={[
            { letter: "a", text: "Há uma única verdade; filosofia e teologia, quando corretas, convergem, pois a razão e a fé têm o mesmo Deus como fonte.", correct: true },
            { letter: "b", text: "A teologia é superior e pode contradizer a filosofia quando conveniente à fé." },
            { letter: "c", text: "A filosofia é superior à teologia, pois a razão é mais confiável que a revelação." },
            { letter: "d", text: "Filosofia e teologia são campos completamente separados e não se relacionam." },
          ]}
          resolution={<p>Tomás defendia a <strong>unidade da verdade</strong>: Deus é a fonte tanto da razão quanto da revelação, portanto não podem contradizer-se verdadeiramente. Se há contradição aparente, é porque houve erro no raciocínio filosófico ou na interpretação teológica. A filosofia (serva da teologia) prepara e aprofunda a fé; a teologia usa a razão filosófica como instrumento. Essa posição é a da síntese tomista, distinta tanto do averroísmo (dupla verdade) quanto do agostinianismo extremo (desconfiança na razão).</p>}
        />
      </section>
    </article>
  );
}
