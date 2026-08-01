"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 35</span>
          <h1>Consumo, Mídia e Cultura Digital</h1>
          <p>
            Vivemos numa sociedade em que o espetáculo substituiu a realidade, em que compramos
            identidades e em que algoritmos moldam o que pensamos. Baudrillard, Debord, Bauman e
            Adorno oferecem as ferramentas filosóficas para compreender — e criticar — a cultura
            do consumo, da mídia e do mundo digital. Este capítulo é especialmente recorrente no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Baudrillard</span>
        <h2>1. Baudrillard e a Sociedade dos Simulacros</h2>
        <p>
          <strong>Jean Baudrillard</strong> (1929–2007) propôs que a sociedade contemporânea
          perdeu contato com a realidade e passa a viver em um universo de <strong>simulacros</strong>
          — cópias sem original. A publicidade não vende produtos; vende imagens de felicidade,
          status e identidade. O shopping não é um espaço de compra; é um cenário que simula
          uma vida ideal.
        </p>
        <p>
          Baudrillard identificou quatro fases da imagem na modernidade:
        </p>
        <ul>
          <li><strong>1ª fase:</strong> A imagem é reflexo de uma realidade profunda (ícone).</li>
          <li><strong>2ª fase:</strong> A imagem mascara e deforma a realidade.</li>
          <li><strong>3ª fase:</strong> A imagem mascara a ausência de realidade profunda.</li>
          <li><strong>4ª fase (simulacro):</strong> A imagem não tem relação alguma com a realidade — ela é sua própria realidade.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>O exemplo da Disneylândia</h3>
          <p>
            Para Baudrillard, a Disneylândia existe para nos fazer acreditar que o resto do
            mundo é real. Ela é apresentada como ficção para ocultar que a América toda é um
            simulacro — um país que funciona como parque temático de si mesmo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>2. As Fases do Simulacro — Diagrama</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 200" width="500" height="200" aria-label="Diagrama dos simulacros de Baudrillard">
            <defs>
              <marker id="arr35" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#4f46e5"/>
              </marker>
            </defs>
            <rect x="10" y="10" width="480" height="180" rx="10" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1"/>

            <rect x="20" y="30" width="95" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="67" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">1ª Fase</text>
            <text x="67" y="72" textAnchor="middle" fontSize="9" fill="#1e40af">Reflexo da</text>
            <text x="67" y="84" textAnchor="middle" fontSize="9" fill="#1e40af">realidade</text>

            <line x1="115" y1="60" x2="135" y2="60" stroke="#4f46e5" strokeWidth="1.5" markerEnd="url(#arr35)"/>

            <rect x="135" y="30" width="95" height="60" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="182" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">2ª Fase</text>
            <text x="182" y="72" textAnchor="middle" fontSize="9" fill="#065f46">Mascara a</text>
            <text x="182" y="84" textAnchor="middle" fontSize="9" fill="#065f46">realidade</text>

            <line x1="230" y1="60" x2="250" y2="60" stroke="#4f46e5" strokeWidth="1.5" markerEnd="url(#arr35)"/>

            <rect x="250" y="30" width="95" height="60" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="297" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">3ª Fase</text>
            <text x="297" y="72" textAnchor="middle" fontSize="9" fill="#92400e">Mascara ausência</text>
            <text x="297" y="84" textAnchor="middle" fontSize="9" fill="#92400e">de realidade</text>

            <line x1="345" y1="60" x2="365" y2="60" stroke="#4f46e5" strokeWidth="1.5" markerEnd="url(#arr35)"/>

            <rect x="365" y="30" width="115" height="60" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="422" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9d174d">4ª Fase</text>
            <text x="422" y="72" textAnchor="middle" fontSize="9" fill="#9d174d">Simulacro puro:</text>
            <text x="422" y="84" textAnchor="middle" fontSize="9" fill="#9d174d">sem referência</text>

            <text x="250" y="155" textAnchor="middle" fontSize="11" fill="#4c1d95" fontStyle="italic">Realidade → Representação → Distorção → Simulacro</text>
            <text x="250" y="175" textAnchor="middle" fontSize="10" fill="#6b7280">Ex: publicidade, redes sociais, reality shows, política-espetáculo</text>
          </svg>
          <figcaption>As quatro fases da imagem segundo Baudrillard: da representação fiel ao simulacro sem referência real.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Debord</span>
        <h2>3. Guy Debord e a Sociedade do Espetáculo</h2>
        <p>
          <strong>Guy Debord</strong> (1931–1994), em <em>A Sociedade do Espetáculo</em> (1967),
          afirma que "tudo o que era vivido diretamente tornou-se uma representação". O espetáculo
          não é um conjunto de imagens, mas uma relação social mediada por imagens. A vida
          autêntica foi substituída pela sua representação espetacular.
        </p>
        <p>
          Para Debord, o espetáculo é a forma mais avançada de alienação: os seres humanos não
          apenas perdem o produto de seu trabalho (Marx), mas perdem também a própria vida — sua
          experiência direta é convertida em consumo passivo de imagens.
        </p>
        <div className="lesson-highlight">
          <h3>Espetáculo e política</h3>
          <p>
            Debord antecipou a política-espetáculo: candidatos vendem imagens, não propostas;
            escândalos são encenados; debates viram reality shows. A democracia do espetáculo
            não governa — ela entretém. Décadas depois, as redes sociais radicalizaram essa
            dinâmica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bauman</span>
        <h2>4. Zygmunt Bauman e a Modernidade Líquida</h2>
        <p>
          <strong>Zygmunt Bauman</strong> (1925–2017) descreveu a contemporaneidade como
          <strong>modernidade líquida</strong>: tudo que era sólido e permanente (instituições,
          valores, identidades, relações) tornou-se fluido, provisório, descartável. O consumismo
          é a expressão máxima dessa liquidez: consumimos objetos, relacionamentos, identidades
          e até crenças como se fossem mercadorias substituíveis.
        </p>
        <p>
          Na sociedade de consumidores, o valor de uma pessoa é medido por sua capacidade de
          consumir. O próprio <em>eu</em> torna-se um projeto de consumo: compramos roupas,
          estilos de vida e experiências para construir identidades. A insatisfação é sistemática
          — é o motor que mantém o ciclo do consumo funcionando.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Adorno e Horkheimer</span>
        <h2>5. Indústria Cultural no Século XXI</h2>
        <p>
          Adorno e Horkheimer cunharam o conceito de <strong>indústria cultural</strong> em
          <em>Dialética do Esclarecimento</em> (1947): a cultura torna-se mercadoria, produzida
          em série para gerar lucro e conformismo social. A pseudoindividualidade é a oferta de
          "variações" dentro de um mesmo padrão — ilusão de escolha dentro de uma uniformidade real.
        </p>
        <p>
          No século XXI, a indústria cultural se amplificou: plataformas de streaming oferecem
          milhares de títulos, mas os algoritmos recomendam o mesmo tipo de conteúdo; as redes
          sociais parecem democráticas, mas são controladas por corporações que vendem a atenção
          dos usuários como mercadoria.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Redes Sociais</span>
        <h2>6. Algoritmos, Bolhas Epistemológicas e Pós-Verdade</h2>
        <p>
          Os algoritmos das redes sociais são projetados para maximizar o tempo de uso —
          e fazem isso mostrando conteúdo que provoca reação emocional intensa, especialmente
          raiva e indignação. O resultado são as <strong>bolhas epistemológicas</strong>
          (ou câmaras de eco): ambientes digitais em que só consumimos conteúdo que confirma
          nossas crenças preexistentes.
        </p>
        <p>
          A <strong>pós-verdade</strong> é o fenômeno pelo qual as emoções e crenças pessoais
          têm mais influência sobre a opinião pública do que fatos verificáveis. Numa era de
          desinformação massiva, distinguir fato de opinião, ciência de pseudociência e verdade
          de fake news torna-se um exercício filosófico fundamental.
        </p>
        <div className="lesson-highlight">
          <h3>Ética digital e vigilância</h3>
          <p>
            O filósofo Shoshana Zuboff cunhou o termo <em>capitalismo de vigilância</em>: as
            plataformas digitais coletam dados comportamentais dos usuários, transformam-nos em
            produto e vendem previsões sobre comportamento futuro. Privacidade, autonomia e
            dignidade são os valores filosóficos em jogo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>
        <h2>7. Pensadores do Consumo e da Mídia — Síntese</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Pensador</th><th>Conceito-chave</th><th>Crítica central</th></tr>
            </thead>
            <tbody>
              <tr><td>Baudrillard</td><td>Simulacro / Hiperrealidade</td><td>A realidade foi substituída por cópias sem original</td></tr>
              <tr><td>Debord</td><td>Espetáculo</td><td>A vida vivida foi convertida em representação e consumo passivo</td></tr>
              <tr><td>Bauman</td><td>Modernidade líquida</td><td>Tudo é fluido, descartável; consumismo como modo de ser</td></tr>
              <tr><td>Adorno/Horkheimer</td><td>Indústria cultural</td><td>Cultura como mercadoria que gera conformismo e pseudoindividualidade</td></tr>
              <tr><td>Zuboff</td><td>Capitalismo de vigilância</td><td>Dados comportamentais como matéria-prima do capitalismo digital</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Han</span>
        <h2>8. Byung-Chul Han e a Sociedade do Cansaço</h2>
        <p>
          O filósofo sul-coreano radicado na Alemanha <strong>Byung-Chul Han</strong> (n. 1959)
          propõe, em <em>A Sociedade do Cansaço</em> (2010), um diagnóstico original da
          contemporaneidade. Enquanto a sociedade disciplinar de Foucault (século XIX/XX) produzia
          sujeitos obedientes por coerção externa (proibições, punições, vigilância), a sociedade
          atual produz sujeitos que se autoexploram voluntariamente — movidos pela positividade do
          "você pode!", "seja o melhor!", "otimize-se!".
        </p>
        <p>
          Han chama isso de <strong>sociedade do desempenho</strong>: o imperativo não é mais "deves",
          mas "podes". O resultado não é liberdade — é esgotamento. O sujeito de desempenho é seu
          próprio patrão e seu próprio escravo: trabalha 24 horas porque "quer", compartilha sua vida
          nas redes sociais porque "gosta", está permanentemente conectado porque "escolhe". O
          <strong> cansaço</strong> e a <strong>depressão</strong> são as doenças características
          dessa sociedade — não a repressão, mas o esgotamento de quem excede os próprios limites.
        </p>
        <ul>
          <li><strong>Transparência:</strong> Han critica também a "sociedade da transparência" — a obsessão contemporânea por visibilidade e exposição que elimina o segredo, a alteridade e o mistério, empobrecendo a experiência humana.</li>
          <li><strong>Narcisismo digital:</strong> as redes sociais são o espaço do "eu" expandido — o indivíduo autoexibido, autoavaliado, autocomercializado. O outro deixa de ser alteridade e torna-se espelho.</li>
          <li><strong>Ócio criativo:</strong> Han reivindica o direito ao silêncio, à contemplação e ao tédio produtivo como resistência à ditadura do desempenho e da hiperconectividade.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Han e o ENEM</h3>
          <p>
            Questões sobre saúde mental, burnout, redes sociais e autoexploração no trabalho
            contemporâneo frequentemente aparecem no ENEM atreladas a leituras filosóficas. Han
            é o referencial mais atual para analisar a autoexploração voluntária, o cansaço
            existencial e a cultura do desempenho — distinguindo-se de Foucault (coerção externa)
            e de Marx (exploração pelo capital externo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ética Digital</span>
        <h2>9. Ética Digital: Privacidade, Vigilância e Cidadania na Era dos Dados</h2>
        <p>
          A era digital colocou em questão conceitos filosóficos fundamentais: o que é
          privacidade? Quem é o sujeito na era da vigilância algorítmica? Como exercer
          cidadania quando dados pessoais são a principal mercadoria?
        </p>
        <p>
          <strong>Shoshana Zuboff</strong> cunhou o conceito de <em>capitalismo de vigilância</em>:
          as grandes plataformas digitais (Google, Meta, Amazon) não vendem produtos — vendem
          previsões sobre o comportamento humano, obtidas pela coleta e análise massiva de dados
          pessoais. O usuário não é o cliente — é a matéria-prima. Isso representa uma nova
          forma de poder sobre a subjetividade humana, mais sutil e penetrante do que o
          panoptismo de Foucault.
        </p>
        <p>
          Instrumentos filosófico-jurídicos de resposta:
        </p>
        <ul>
          <li>
            <strong>LGPD (Lei Geral de Proteção de Dados, 2018):</strong> o Brasil regulamentou
            o uso de dados pessoais, reconhecendo a privacidade como direito fundamental
            (art. 5º, X, CF/1988).
          </li>
          <li>
            <strong>Direito ao esquecimento:</strong> o direito de solicitar a remoção de
            informações pessoais desatualizadas ou prejudiciais da internet — debatido nos
            tribunais brasileiros e europeus.
          </li>
          <li>
            <strong>Soberania digital:</strong> discussão filosófico-política sobre o controle
            nacional de infraestruturas digitais frente ao poder das big techs.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A pergunta filosófica central</h3>
          <p>
            Se nossa atenção, preferências, emoções e decisões são continuamente mapeadas e
            influenciadas por algoritmos, em que medida somos ainda sujeitos autônomos —
            no sentido kantiano (legisladores de si mesmos pela razão)? A ética digital é,
            no fundo, uma questão sobre o que resta de autonomia humana na sociedade de
            plataformas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>🪞</span><h3>Simulacro</h3><p>Baudrillard: a imagem substitui a realidade; vivemos em hiperrealidade sem referente.</p></div>
          <div className="math-card"><span>📺</span><h3>Espetáculo</h3><p>Debord: tudo que era vivido tornou-se representação. A vida autêntica é alienada.</p></div>
          <div className="math-card"><span>💧</span><h3>Modernidade Líquida</h3><p>Bauman: valores e identidades são fluidos e descartáveis como mercadorias.</p></div>
          <div className="math-card"><span>🏭</span><h3>Indústria Cultural</h3><p>Adorno: cultura produzida em série gera conformismo e ilusão de liberdade.</p></div>
          <div className="math-card"><span>🔍</span><h3>Bolhas Digitais</h3><p>Algoritmos criam câmaras de eco que reforçam crenças e geram pós-verdade.</p></div>
          <div className="math-card"><span>🛡️</span><h3>Ética Digital</h3><p>Privacidade, autonomia e dignidade são valores filosóficos centrais na era digital.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Baudrillard e o Simulacro"
          statement={<p>Para Baudrillard, a quarta fase da imagem — o simulacro — caracteriza-se por:</p>}
          options={[
            { letter: "a", text: "Ser um reflexo fiel da realidade profunda." },
            { letter: "b", text: "Mascarar e deformar a realidade existente." },
            { letter: "c", text: "Não ter relação alguma com a realidade, sendo sua própria verdade.", correct: true },
            { letter: "d", text: "Revelar a essência oculta da realidade." },
          ]}
          resolution={<p>Na teoria de Baudrillard, as quatro fases vão do reflexo da realidade (1ª) à máscara da realidade (2ª), à ocultação da ausência de realidade (3ª) e, por fim, ao simulacro puro (4ª): a imagem não representa nenhuma realidade — ela é autorreferente, sem original.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Debord e o Espetáculo"
          statement={<p>Guy Debord afirma que "tudo o que era vivido diretamente tornou-se uma representação". Essa tese implica que:</p>}
          options={[
            { letter: "a", text: "A televisão é o único meio de comunicação responsável pela alienação moderna." },
            { letter: "b", text: "A experiência autêntica foi substituída pelo consumo passivo de imagens e representações.", correct: true },
            { letter: "c", text: "O espetáculo é um fenômeno positivo que democratiza o acesso à cultura." },
            { letter: "d", text: "A representação artística deve ser banida para restaurar a vida autêntica." },
          ]}
          resolution={<p>Debord argumenta que o espetáculo é a forma mais avançada de alienação: não apenas o produto do trabalho é alienado (como em Marx), mas a própria experiência vivida. A vida se converte em imagem consumida passivamente. Isso não se limita à TV — inclui toda mediação imagética da experiência social.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Modernidade Líquida e Identidade"
          statement={<p>Bauman afirma que na modernidade líquida o próprio "eu" torna-se um projeto de consumo. Essa tese aponta para qual problema filosófico central?</p>}
          options={[
            { letter: "a", text: "A impossibilidade de o sujeito ter uma identidade estável e autêntica numa sociedade de consumo.", correct: true },
            { letter: "b", text: "A necessidade de o sujeito consumir mais para construir uma identidade sólida." },
            { letter: "c", text: "A equivalência entre identidade e riqueza material." },
            { letter: "d", text: "A substituição da ética pela estética no consumo contemporâneo." },
          ]}
          resolution={<p>Bauman aponta que o consumismo transforma a identidade em mercadoria provisória: compramos estilos de vida, afiliações e pertencimentos como produtos descartáveis. Isso produz uma instabilidade crônica do eu — a identidade nunca está pronta, sempre em reconstrução pela via do consumo. O problema filosófico é a impossibilidade de uma identidade autêntica e estável nesse contexto.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Indústria Cultural e Pseudoindividualidade"
          statement={<p>"A indústria cultural impede o desenvolvimento de indivíduos autônomos, independentes, capazes de julgar e decidir conscientemente." (Adorno e Horkheimer, adaptado) Com base na crítica da Escola de Frankfurt, as plataformas de streaming que oferecem milhares de títulos, mas recomendam via algoritmo sempre o mesmo perfil de conteúdo, exemplificam o conceito de:</p>}
          options={[
            { letter: "a", text: "Pluralismo cultural, pois oferecem diversidade real de escolhas." },
            { letter: "b", text: "Pseudoindividualidade, pois criam ilusão de escolha dentro de uma padronização real.", correct: true },
            { letter: "c", text: "Emancipação cultural, pois democratizam o acesso à cultura." },
            { letter: "d", text: "Racionalidade comunicativa, pois permitem o diálogo entre culturas distintas." },
          ]}
          resolution={<p>Adorno e Horkheimer cunharam "pseudoindividualidade" para descrever como a indústria cultural oferece variações superficiais dentro de um padrão uniforme. Os algoritmos de recomendação realizam exatamente isso: a aparência de diversidade mascara a homogeneização do gosto e a limitação da autonomia do espectador.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Pós-Verdade e Bolhas Epistemológicas"
          statement={<p>Pesquisas mostram que pessoas expostas exclusivamente a conteúdo alinhado às suas crenças preexistentes nas redes sociais tendem a rejeitar evidências contrárias mesmo quando verificadas por especialistas. Esse fenômeno está relacionado a qual característica das plataformas digitais contemporâneas?</p>}
          options={[
            { letter: "a", text: "O pluralismo epistêmico promovido pelas redes sociais, que oferecem múltiplos pontos de vista." },
            { letter: "b", text: "A formação de bolhas epistemológicas pelos algoritmos, que reforçam crenças e geram pós-verdade.", correct: true },
            { letter: "c", text: "A democratização do conhecimento científico facilitada pela internet." },
            { letter: "d", text: "A transparência das plataformas quanto ao uso de dados dos usuários." },
          ]}
          resolution={<p>Os algoritmos das plataformas maximizam engajamento mostrando conteúdo emocionalmente ressonante com o usuário, criando câmaras de eco que reforçam crenças. Isso gera o fenômeno da pós-verdade: as emoções e crenças pessoais passam a ter mais peso que fatos verificáveis. Filosoficamente, compromete a autonomia racional e a formação de opinião pública qualificada.</p>}
        />
      </section>
    </article>
  );
}
