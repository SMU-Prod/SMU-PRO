"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 1</span>

          <h1>Introdução à Biologia, Método Científico e Seres Vivos</h1>

          <p>
            A Biologia é a ciência que busca entender o fenômeno mais complexo
            do universo conhecido: a vida. Neste capítulo você vai compreender o
            objeto de estudo da Biologia, dominar o raciocínio do método
            científico, organizar a vida em níveis hierárquicos e reconhecer as
            propriedades que separam o que é vivo do que é inerte — base
            conceitual cobrada em praticamente toda prova do ENEM e dos
            vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição</span>

        <h2>1. O Que é a Biologia</h2>

        <p>
          A <strong>Biologia</strong> (do grego <em>bios</em> = vida +{" "}
          <em>logos</em> = estudo) é a ciência que estuda os seres vivos em todas
          as suas dimensões: a estrutura química e celular, o funcionamento
          interno (fisiologia), a transmissão de características (hereditariedade),
          a transformação ao longo do tempo (evolução) e as relações com o
          ambiente (ecologia). É uma ciência <strong>multidisciplinar</strong>,
          que dialoga constantemente com a Química, a Física, a Geologia e a
          Matemática.
        </p>

        <p>
          Por abranger desde uma única molécula de DNA até a biosfera inteira, a
          Biologia se divide em diversas áreas especializadas, que se
          complementam para explicar a vida de forma integrada:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Genética</h3>
            <p>Herança, variação e o funcionamento do material genético.</p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Microbiologia</h3>
            <p>Bactérias, arqueas, protozoários, fungos e vírus.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Botânica</h3>
            <p>Morfologia, fisiologia e diversidade das plantas.</p>
          </div>

          <div className="lesson-card">
            <span>🐯</span>
            <h3>Zoologia</h3>
            <p>Estrutura, comportamento e classificação dos animais.</p>
          </div>

          <div className="lesson-card">
            <span>🌍</span>
            <h3>Ecologia</h3>
            <p>Interações entre os seres vivos e o ambiente.</p>
          </div>

          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Bioquímica</h3>
            <p>As moléculas e reações que sustentam a vida.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método Científico</span>

        <h2>2. As Etapas do Método Científico</h2>

        <p>
          O conhecimento científico se distingue do senso comum por ser{" "}
          <strong>testável, reprodutível e passível de refutação</strong>. A
          ciência avança por meio de um processo investigativo organizado, no
          qual cada conclusão pode ser verificada e corrigida por outros
          pesquisadores. A sequência clássica do método hipotético-dedutivo é:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 130" width="760" height="130" aria-label="Fluxo do método científico">
            {[
              { x: 10, label: "Observação", c: "#0ea5e9" },
              { x: 160, label: "Problema", c: "#0ea5e9" },
              { x: 310, label: "Hipótese", c: "#6366f1" },
              { x: 460, label: "Experimento", c: "#f59e0b" },
              { x: 610, label: "Conclusão", c: "#16a34a" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x} y={40} width={130} height={48} rx={12} fill={s.c} opacity={0.15} stroke={s.c} strokeWidth={1.5} />
                <text x={s.x + 65} y={69} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1f2937">{s.label}</text>
              </g>
            ))}
            {[140, 290, 440, 590].map((x) => (
              <polygon key={x} points={`${x},64 ${x + 18},58 ${x + 18},70`} fill="#9ca3af" />
            ))}
            <path d="M 675 88 q 0 28 -305 28 q -305 0 -305 -22" fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={370} y={126} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#16a34a">se a hipótese é refutada, reformula-se e testa-se novamente</text>
          </svg>
          <figcaption>O método científico é cíclico: hipóteses refutadas levam a novas hipóteses.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Variáveis de um experimento</h3>
          <p>
            Todo experimento bem desenhado compara um <strong>grupo
            experimental</strong> com um <strong>grupo controle</strong>,
            mantendo todas as condições idênticas, exceto uma. As variáveis
            envolvidas são:
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Variável</th>
                <th>Definição</th>
                <th>Exemplo (efeito da luz no crescimento de mudas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Independente</td>
                <td>O que o pesquisador altera de propósito</td>
                <td>Quantidade de horas de luz</td>
              </tr>
              <tr>
                <td>Dependente</td>
                <td>O que se mede como resposta</td>
                <td>Altura das mudas</td>
              </tr>
              <tr>
                <td>Controle</td>
                <td>Fatores mantidos constantes</td>
                <td>Água, solo, temperatura, espécie</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>De hipótese a teoria e a lei</h3>
          <p>
            Uma <strong>hipótese</strong> repetidamente confirmada por
            experimentos independentes pode tornar-se uma <strong>teoria
            científica</strong> — uma explicação ampla e bem sustentada (ex.:
            Teoria da Evolução). Já uma <strong>lei</strong> descreve um padrão
            constante da natureza, geralmente em forma matemática. Importante:
            teoria, no sentido científico, <em>não</em> significa "suposição",
            mas sim um corpo robusto de explicações testadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Níveis de Organização</span>

        <h2>3. Níveis de Organização Biológica</h2>

        <p>
          A vida se organiza de forma <strong>hierárquica</strong>: cada nível é
          formado pela associação de unidades do nível anterior e apresenta{" "}
          <strong>propriedades emergentes</strong> — características novas que não
          existiam nas partes isoladas. Uma célula nervosa isolada não pensa, mas
          bilhões delas organizadas formam um cérebro capaz de gerar
          consciência.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 110" width="720" height="110" aria-label="Hierarquia dos níveis de organização">
            {[
              "Átomo", "Molécula", "Célula", "Tecido", "Órgão", "Sistema", "Organismo",
            ].map((label, i) => (
              <g key={label}>
                <rect x={10 + i * 100} y={40} width={88} height={42} rx={10} fill="#0f4c81" opacity={0.12 + i * 0.05} stroke="#0f4c81" strokeWidth={1.2} />
                <text x={54 + i * 100} y={66} textAnchor="middle" fontSize={12.5} fontWeight={700} fill="#071c3d">{label}</text>
                {i < 6 && <polygon points={`${98 + i * 100},61 ${110 + i * 100},55 ${110 + i * 100},67`} fill="#0f4c81" />}
              </g>
            ))}
            <text x={360} y={22} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#4b5563">complexidade crescente →</text>
            <text x={360} y={101} textAnchor="middle" fontSize={11} fill="#6b7280">…seguem-se População → Comunidade → Ecossistema → Bioma → Biosfera</text>
          </svg>
          <figcaption>Do átomo à biosfera: cada nível emerge da associação do anterior.</figcaption>
        </figure>

        <p>
          Acima do organismo, os níveis tornam-se ecológicos:{" "}
          <strong>população</strong> (indivíduos da mesma espécie em um local),{" "}
          <strong>comunidade</strong> (várias populações),{" "}
          <strong>ecossistema</strong> (comunidade + ambiente físico),{" "}
          <strong>bioma</strong> (grandes regiões com clima e vegetação
          característicos) e <strong>biosfera</strong> (o conjunto de toda a vida
          na Terra).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Características da Vida</span>

        <h2>4. Características Gerais dos Seres Vivos</h2>

        <p>
          Não há uma única característica que defina a vida sozinha — é o{" "}
          <strong>conjunto</strong> delas que distingue um ser vivo da matéria
          bruta. A tabela abaixo resume as propriedades fundamentais:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>O que significa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Composição química</td>
                <td>Base de carbono e presença de água e biomoléculas orgânicas</td>
              </tr>
              <tr>
                <td>Organização celular</td>
                <td>Formados por células (exceto os vírus)</td>
              </tr>
              <tr>
                <td>Metabolismo</td>
                <td>Reações de síntese (anabolismo) e quebra (catabolismo)</td>
              </tr>
              <tr>
                <td>Homeostase</td>
                <td>Manutenção do equilíbrio interno (temperatura, pH, água)</td>
              </tr>
              <tr>
                <td>Crescimento</td>
                <td>Aumento ordenado de massa e número de células</td>
              </tr>
              <tr>
                <td>Reprodução</td>
                <td>Geração de novos indivíduos, perpetuando a espécie</td>
              </tr>
              <tr>
                <td>Hereditariedade</td>
                <td>Transmissão de informação genética (DNA) aos descendentes</td>
              </tr>
              <tr>
                <td>Irritabilidade</td>
                <td>Capacidade de reagir a estímulos do ambiente</td>
              </tr>
              <tr>
                <td>Evolução / adaptação</td>
                <td>Mudança das populações ao longo das gerações</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção a pegadinhas:</strong> a{" "}
            <strong>locomoção</strong> NÃO é uma característica universal —
            plantas e fungos não se locomovem. Da mesma forma,{" "}
            <strong>inteligência</strong> e <strong>respiração com O₂</strong>{" "}
            não valem para todos os seres vivos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vírus</span>

        <h2>5. Os Vírus São Seres Vivos?</h2>

        <p>
          Os vírus ocupam uma posição <strong>limítrofe</strong> entre o vivo e o
          não vivo. Possuem material genético (DNA ou RNA) e capacidade de
          evoluir, mas são desprovidos de organização celular e de metabolismo
          próprio, dependendo totalmente da maquinaria de uma célula hospedeira
          para se replicar.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>A favor de serem vivos</h3>
            <p>Têm material genético, sofrem mutação e evoluem por seleção natural.</p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Contra</h3>
            <p>Não têm células nem metabolismo; inertes fora do hospedeiro.</p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Consenso</h3>
            <p>Parasitas intracelulares obrigatórios — forma "limítrofe" de vida.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Composição Química</span>

        <h2>6. Composição Química da Vida</h2>

        <p>
          Cerca de <strong>96%</strong> da massa de um ser vivo é formada por
          apenas quatro elementos químicos — carbono, hidrogênio, oxigênio e
          nitrogênio (o grupo <strong>CHON</strong>) —, que se combinam em
          quatro grandes classes de biomoléculas.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Proporção de elementos no corpo">
              <circle cx={110} cy={100} r={80} fill="#e5e7eb" />
              {/* O 65% */}
              <path d="M110 100 L110 20 A80 80 0 0 1 180 140 Z" fill="#0ea5e9" />
              {/* C 18% */}
              <path d="M110 100 L180 140 A80 80 0 0 1 96 179 Z" fill="#16a34a" />
              {/* H 10% */}
              <path d="M110 100 L96 179 A80 80 0 0 1 41 145 Z" fill="#f59e0b" />
              {/* N 3% + outros 4% */}
              <path d="M110 100 L41 145 A80 80 0 0 1 110 20 Z" fill="#a855f7" />
              <circle cx={110} cy={100} r={34} fill="white" />
              <text x={110} y={105} textAnchor="middle" fontSize={13} fontWeight={700} fill="#071c3d">CHON</text>
            </svg>
            <figcaption>O (~65%), C (~18%), H (~10%), N + outros (~7%) em massa.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 240 200" width="240" height="200" aria-label="Importância da água na célula">
              <rect x={30} y={20} width={180} height={160} rx={14} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1.5} />
              <rect x={30} y={68} width={180} height={112} rx={0} fill="#3b82f6" opacity={0.35} />
              <rect x={30} y={68} width={180} height={112} fill="none" />
              <line x1={30} y1={68} x2={210} y2={68} stroke="#2563eb" strokeWidth={2} strokeDasharray="6 4" />
              <text x={120} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">demais componentes ~30%</text>
              <text x={120} y={130} textAnchor="middle" fontSize={15} fontWeight={800} fill="#1e3a8a">água ~70%</text>
            </svg>
            <figcaption>A água é a substância mais abundante das células.</figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Biomolécula</th>
                <th>Função principal</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carboidratos</td>
                <td>Energia rápida e estrutura</td>
                <td>Glicose, amido, celulose</td>
              </tr>
              <tr>
                <td>Lipídios</td>
                <td>Reserva energética e membranas</td>
                <td>Gorduras, fosfolipídios</td>
              </tr>
              <tr>
                <td>Proteínas</td>
                <td>Estrutura, transporte e enzimas</td>
                <td>Colágeno, hemoglobina, enzimas</td>
              </tr>
              <tr>
                <td>Ácidos nucleicos</td>
                <td>Informação genética</td>
                <td>DNA e RNA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem da Vida</span>

        <h2>7. Origem da Vida na Terra</h2>

        <p>
          Há cerca de <strong>3,8 bilhões de anos</strong> surgiram os primeiros
          seres vivos. A hipótese mais aceita — a{" "}
          <strong>hipótese heterotrófica</strong>, ou da evolução química — reúne
          as ideias de Oparin e Haldane com a comprovação experimental de
          Miller e Urey, que sintetizaram aminoácidos a partir de gases da
          atmosfera primitiva e descargas elétricas.
        </p>

        <div className="lesson-highlight">
          <h3>Sequência hipotética da evolução química</h3>
          <ol>
            <li>Atmosfera primitiva <strong>sem O₂ livre</strong>, rica em CH₄, NH₃, H₂ e vapor de água;</li>
            <li>Fontes de energia (raios, vulcões, radiação UV) sintetizaram moléculas orgânicas simples;</li>
            <li>Essas moléculas se acumularam nos oceanos, formando <strong>coacervados</strong> (aglomerados isolados);</li>
            <li>Surgiram os primeiros seres <strong>heterótrofos e anaeróbios</strong>, que se nutriam do "caldo" orgânico;</li>
            <li>Com a evolução da <strong>fotossíntese</strong>, o O₂ acumulou-se, permitindo a respiração aeróbica e a camada de ozônio.</li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 220" width="420" height="220" aria-label="Acúmulo de oxigênio ao longo do tempo geológico">
            <line x1={50} y1={20} x2={50} y2={185} stroke="#374151" strokeWidth={1.5} />
            <line x1={50} y1={185} x2={400} y2={185} stroke="#374151" strokeWidth={1.5} />
            <text x={24} y={28} fontSize={12} fill="#374151">O₂ (%)</text>
            <text x={398} y={205} textAnchor="end" fontSize={12} fill="#374151">tempo →</text>
            {/* curva sigmoidal de acúmulo de O2 */}
            <path d="M 50 180 C 150 178, 200 170, 240 110 C 270 65, 320 45, 400 40" fill="none" stroke="#16a34a" strokeWidth={3} />
            <line x1={240} y1={185} x2={240} y2={110} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
            <text x={240} y={203} textAnchor="middle" fontSize={10} fill="#6b7280">Grande Evento de Oxigenação</text>
            <text x={120} y={170} fontSize={10} fill="#6b7280">anaeróbios</text>
            <text x={320} y={32} fontSize={10} fill="#16a34a">aeróbios + ozônio</text>
          </svg>
          <figcaption>A fotossíntese das cianobactérias elevou o O₂ atmosférico (Grande Evento de Oxigenação).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Sequência do método científico"
          statement={
            <p>Qual é a sequência correta do método científico clássico?</p>
          }
          options={[
            { letter: "a", text: "Hipótese → Observação → Conclusão" },
            {
              letter: "b",
              text: "Observação → Hipótese → Experimentação → Conclusão",
              correct: true,
            },
            { letter: "c", text: "Conclusão → Hipótese → Experimentação" },
            { letter: "d", text: "Experimentação → Observação → Hipótese" },
          ]}
          resolution={
            <p>
              Primeiro observa-se um fenômeno, formula-se uma hipótese, testa-se
              por experimentos controlados e, por fim, conclui-se aceitando ou
              refutando a hipótese.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Características dos seres vivos"
          statement={
            <p>
              Assinale a alternativa que apresenta uma característica que NÃO é
              comum a todos os seres vivos.
            </p>
          }
          options={[
            { letter: "a", text: "Metabolismo" },
            { letter: "b", text: "Hereditariedade baseada em DNA" },
            { letter: "c", text: "Capacidade de locomoção", correct: true },
            { letter: "d", text: "Capacidade de evoluir" },
          ]}
          resolution={
            <p>
              Plantas e fungos, por exemplo, não se locomovem. A locomoção é
              comum em animais, mas não é uma propriedade universal da vida —
              diferentemente do metabolismo, da hereditariedade e da evolução.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Níveis de organização e emergência"
          statement={
            <p>
              A afirmação "o todo é maior que a soma das partes" relaciona-se
              diretamente ao conceito de propriedades emergentes. Qual exemplo
              ilustra corretamente esse conceito?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Um átomo de carbono possui as mesmas propriedades de uma molécula de glicose",
            },
            {
              letter: "b",
              text: "Neurônios isolados não geram pensamento, mas o cérebro, formado por eles, gera consciência",
              correct: true,
            },
            { letter: "c", text: "Uma célula realiza exatamente as mesmas funções de um tecido" },
            { letter: "d", text: "Um organismo é idêntico a uma população" },
          ]}
          resolution={
            <p>
              Propriedades emergentes surgem da organização e interação das
              partes. Neurônios isolados não pensam; é a rede organizada de
              bilhões deles que origina funções novas, como a consciência.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Experimento com fertilizante (ENEM)"
          statement={
            <p>
              Um agricultor quer testar se um novo fertilizante aumenta a
              produção de tomates. Ele separa duas estufas idênticas: na estufa
              A aplica o fertilizante; na estufa B, não. Mantém água, luz, solo e
              temperatura iguais nas duas. Nesse experimento, o uso da estufa B
              tem como finalidade:
            </p>
          }
          options={[
            { letter: "a", text: "Aumentar a quantidade total de tomates colhidos" },
            {
              letter: "b",
              text: "Servir de grupo controle, permitindo comparar o efeito do fertilizante",
              correct: true,
            },
            { letter: "c", text: "Ser a variável independente do experimento" },
            { letter: "d", text: "Eliminar a necessidade de repetição do experimento" },
          ]}
          resolution={
            <p>
              A estufa B é o <strong>grupo controle</strong>: como difere da
              estufa A apenas pela ausência do fertilizante (a variável
              independente), qualquer diferença na produção (variável dependente)
              pode ser atribuída ao fertilizante.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Vírus na pandemia"
          statement={
            <p>
              Durante uma pandemia, é comum ouvir que um vírus "fica inativo" em
              superfícies e só "ganha vida" ao infectar uma pessoa. Do ponto de
              vista biológico, isso ocorre porque o vírus:
            </p>
          }
          options={[
            { letter: "a", text: "Perde seu material genético fora do corpo humano" },
            {
              letter: "b",
              text: "Não possui metabolismo próprio e só se reproduz usando a maquinaria de uma célula hospedeira",
              correct: true,
            },
            { letter: "c", text: "É formado por células que morrem ao ar livre" },
            { letter: "d", text: "Realiza fotossíntese apenas dentro das células" },
          ]}
          resolution={
            <p>
              O vírus é um parasita intracelular obrigatório: fora de uma célula
              ele é inerte, pois não tem metabolismo. Só ao invadir uma célula
              hospedeira passa a usar as enzimas e ribossomos dela para se
              replicar.
            </p>
          }
        />
      </section>
    </article>
  );
}
