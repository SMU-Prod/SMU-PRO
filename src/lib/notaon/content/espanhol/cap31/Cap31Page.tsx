"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 31</span>
          <h1>Direitos Humanos, cidadania e diversidade cultural</h1>
          <p>
            Os direitos humanos, a cidadania e a diversidade cultural são temas centrais tanto no ENEM quanto
            na agenda pública latino-americana. Os textos em espanhol que abordam esses temas vão desde
            fragmentos da Declaração Universal dos Direitos Humanos até crônicas sobre movimentos indígenas,
            reportagens sobre feminismo latinoamericano e debates sobre identidade cultural. Saber identificar
            o vocabulário específico desse campo — discriminação, equidade, diversidade, inclusão, refugiados
            — e reconhecer a posição dos autores nesses textos é uma das competências mais cobradas nas
            questões de espanhol do ENEM nas últimas edições.
          </p>
        </div>
      </section>

      {/* Seção 1: Vocabulário de Direitos Humanos */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>Vocabulário de Direitos Humanos em Espanhol</h2>
        <p>
          O vocabulário dos direitos humanos em espanhol é repleto de termos que parecem familiares ao falante
          de português, mas têm nuances específicas que o ENEM explora. Memorize os termos e suas diferenças
          conceituais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espanhol</th>
                <th>Português</th>
                <th>Nuance / Uso em textos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>derechos humanos</td><td>direitos humanos</td><td>Direitos fundamentais universais (ONU)</td></tr>
              <tr><td>ciudadanía</td><td>cidadania</td><td>Status e direitos do cidadão</td></tr>
              <tr><td>igualdad</td><td>igualdade</td><td>Todos têm os mesmos direitos formais</td></tr>
              <tr><td>equidad</td><td>equidade</td><td>Tratar de forma diferente para atingir igualdade real</td></tr>
              <tr><td>discriminación</td><td>discriminação</td><td>Tratamento injusto baseado em características identitárias</td></tr>
              <tr><td>xenofobia</td><td>xenofobia</td><td>Preconceito contra estrangeiros</td></tr>
              <tr><td>racismo</td><td>racismo</td><td>Discriminação baseada em raça/etnia</td></tr>
              <tr><td>género</td><td>gênero</td><td>Identidade de gênero; diferente de "sexo biológico"</td></tr>
              <tr><td>inclusión</td><td>inclusão</td><td>Integração de grupos marginalizados</td></tr>
              <tr><td>diversidad</td><td>diversidade</td><td>Multiplicidade de culturas, etnias, orientações</td></tr>
              <tr><td>migrantes</td><td>migrantes</td><td>Pessoas que se deslocam entre países por escolha</td></tr>
              <tr><td>refugiados</td><td>refugiados</td><td>Pessoas que fogem de perseguição ou guerra</td></tr>
              <tr><td>desigualdad</td><td>desigualdade</td><td>Distribuição injusta de recursos e oportunidades</td></tr>
              <tr><td>justicia social</td><td>justiça social</td><td>Distribuição justa de direitos e oportunidades</td></tr>
              <tr><td>empoderamiento</td><td>empoderamento</td><td>Processo de ganhar poder e autonomia</td></tr>
              <tr><td>identidad cultural</td><td>identidade cultural</td><td>Conjunto de valores e práticas de um grupo</td></tr>
              <tr><td>pueblos originarios</td><td>povos originários / indígenas</td><td>Populações anteriores à colonização</td></tr>
              <tr><td>afrodescendientes</td><td>afrodescendentes</td><td>Descendentes de africanos escravizados</td></tr>
              <tr><td>interseccionalidad</td><td>interseccionalidade</td><td>Sobreposição de formas de discriminação</td></tr>
              <tr><td>derechos colectivos</td><td>direitos coletivos</td><td>Direitos de povos e comunidades, não apenas indivíduos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2: Diferença Igualdade vs Equidade */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos-Chave</span>
        <h2>Igualdad vs. Equidad — Uma Distinção Fundamental</h2>
        <p>
          A distinção entre <em>igualdad</em> e <em>equidad</em> é um dos conceitos mais explorados em textos
          de direitos humanos no ENEM. Textos de opinião frequentemente usam essa distinção para criticar
          políticas públicas ou defender ações afirmativas.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Diagrama comparativo entre igualdade e equidade">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#fff7ed" />
            <text x="350" y="30" textAnchor="middle" fill="#9a3412" fontSize="14" fontWeight="bold">
              Igualdad vs. Equidad — Diferencia conceptual
            </text>
            {/* IGUALDAD */}
            <rect x="30" y="50" width="290" height="150" rx="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
            <text x="175" y="78" textAnchor="middle" fill="#9a3412" fontSize="13" fontWeight="bold">IGUALDAD</text>
            <text x="175" y="98" textAnchor="middle" fill="#7c2d12" fontSize="11">"Todos reciben lo mismo"</text>
            {/* Pessoas de alturas diferentes com mesma caixa */}
            <rect x="90" y="160" width="30" height="25" fill="#c2410c" rx="3" />
            <circle cx="105" cy="148" r="9" fill="#c2410c" />
            <rect x="150" y="145" width="30" height="40" fill="#c2410c" rx="3" />
            <circle cx="165" cy="133" r="9" fill="#c2410c" />
            <rect x="210" y="130" width="30" height="55" fill="#c2410c" rx="3" />
            <circle cx="225" cy="118" r="9" fill="#c2410c" />
            {/* linha de chão */}
            <line x1="60" y1="190" x2="290" y2="190" stroke="#9a3412" strokeWidth="2" />
            <text x="175" y="210" textAnchor="middle" fill="#9a3412" fontSize="10">Mesma solução para situações diferentes</text>

            {/* EQUIDAD */}
            <rect x="380" y="50" width="290" height="150" rx="10" fill="#bbf7d0" stroke="#15803d" strokeWidth="2" />
            <text x="525" y="78" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="bold">EQUIDAD</text>
            <text x="525" y="98" textAnchor="middle" fill="#166534" fontSize="11">"Cada quien recibe lo que necesita"</text>
            {/* Pessoas de alturas diferentes com caixas diferentes */}
            <rect x="440" y="172" width="30" height="13" fill="#15803d" rx="3" />
            <circle cx="455" cy="160" r="9" fill="#15803d" />
            <rect x="500" y="158" width="30" height="27" fill="#15803d" rx="3" />
            <circle cx="515" cy="146" r="9" fill="#15803d" />
            <rect x="560" y="130" width="30" height="55" fill="#15803d" rx="3" />
            <circle cx="575" cy="118" r="9" fill="#15803d" />
            <line x1="410" y1="190" x2="640" y2="190" stroke="#14532d" strokeWidth="2" />
            <text x="525" y="210" textAnchor="middle" fill="#14532d" fontSize="10">Soluções diferentes para situações diferentes</text>
          </svg>
          <figcaption>Diagrama comparativo entre igualdad e equidad — conceitos centrais nos textos de direitos humanos em espanhol.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <strong>Como esse conceito aparece nos textos do ENEM:</strong>
          <br />
          <em>"La igualdad formal no basta cuando las condiciones de partida son tan distintas. La verdadera
          justicia exige equidad: dar más a quienes menos tienen, para que todos puedan llegar al mismo punto."</em>
          <br /><br />
          Nesse tipo de texto, o autor critica a igualdade formal e defende a equidade como instrumento de
          justiça social. Questões sobre esse tipo de texto pedem que o candidato identifique a tese do autor
          ou compreenda a diferença entre os dois conceitos.
        </div>
      </section>

      {/* Seção 3: Movimentos Sociais Hispânicos */}
      <section className="lesson-section">
        <span className="section-kicker">Movimentos Sociais</span>
        <h2>Movimentos Sociais Hispânicos no ENEM</h2>
        <p>
          Os movimentos sociais da América Latina e da Espanha aparecem em textos do ENEM especialmente
          quando abordam temas de gênero, raça, identidade indígena e direitos coletivos. Reconhecer esses
          movimentos e seu vocabulário específico é fundamental para compreender a argumentação dos textos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>Feminismo latinoamericano</h3>
            <p>
              Movimentos como <em>#NiUnaMenos</em> (Argentina, 2015) e <em>#MeToo</em> em espanhol
              (<em>#YoTambién</em>) combatem a violência de gênero. Vocabulário: <em>femicidio / feminicidio,
              violencia de género, machismo, patriarcado</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪶</span>
            <h3>Movimentos indígenas</h3>
            <p>
              Zapatistas (México), CONAIE (Equador), movimentos mapuche (Chile e Argentina).
              Vocabulário: <em>pueblos originarios, autonomía territorial, cosmovisión, buen vivir</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌈</span>
            <h3>Diversidade e LGBTQIA+</h3>
            <p>
              Debates sobre reconhecimento legal, casamento igualitário (<em>matrimonio igualitario</em>)
              e identidade de gênero em países como Argentina, Espanha, Colômbia e Uruguai.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Migração e refúgio</h3>
            <p>
              Crise migratória venezuelana, crises na América Central (<em>caravanas de migrantes</em>),
              e a xenofobia como tema recorrente. Vocabulário: <em>asilo, deportación, frontera, acogida</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4: Declaração Universal em Espanhol */}
      <section className="lesson-section">
        <span className="section-kicker">Documento Histórico</span>
        <h2>Declaração Universal dos Direitos Humanos em Espanhol</h2>
        <p>
          A Declaração Universal dos Direitos Humanos (1948) é um dos textos em espanhol mais citados em
          questões do ENEM. Seu vocabulário jurídico e filosófico aparece em contextos variados.
        </p>
        <div className="lesson-highlight">
          <strong>Artigos selecionados — texto oficial em espanhol:</strong>
          <br /><br />
          <em>
            "Artículo 1. Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados
            como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros."
          </em>
          <br /><br />
          <em>
            "Artículo 2. Toda persona tiene todos los derechos y libertades proclamados en esta Declaración,
            sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier
            otra índole, origen nacional o social, posición económica, nacimiento o cualquier otra condición."
          </em>
          <br /><br />
          <strong>Vocabulário do documento:</strong>
          <ul>
            <li><em>nacen libres e iguales en dignidad</em> = nascem livres e iguais em dignidade</li>
            <li><em>dotados de razón y conciencia</em> = dotados de razão e consciência</li>
            <li><em>fraternalmente</em> = fraternalmente (em fraternidade)</li>
            <li><em>sin distinción alguna</em> = sem distinção alguma</li>
            <li><em>de cualquier otra índole</em> = de qualquer outra natureza</li>
          </ul>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artigo</th>
                <th>Direito garantido</th>
                <th>Vocabulário-chave em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Art. 3</td><td>Vida, liberdade e segurança pessoal</td><td><em>derecho a la vida, libertad, seguridad personal</em></td></tr>
              <tr><td>Art. 18</td><td>Liberdade de pensamento, consciência e religião</td><td><em>libertad de pensamiento, conciencia y religión</em></td></tr>
              <tr><td>Art. 19</td><td>Liberdade de opinião e expressão</td><td><em>libertad de opinión y de expresión</em></td></tr>
              <tr><td>Art. 23</td><td>Direito ao trabalho justo</td><td><em>derecho al trabajo, salario equitativo, condiciones equitativas</em></td></tr>
              <tr><td>Art. 26</td><td>Direito à educação</td><td><em>derecho a la educación, instrucción gratuita</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 5: Multiculturalismo e Diversidade */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade Cultural</span>
        <h2>Multiculturalismo e Diversidade Étnica da América Latina</h2>
        <p>
          A América Latina é uma das regiões mais diversas do mundo. Essa diversidade étnica, cultural e
          linguística é tema recorrente em textos do ENEM e exige que o candidato conheça vocabulário
          específico sobre identidade e cultura.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Pueblos indígenas</h3>
            <p>
              Mais de 800 povos indígenas na AL, falando centenas de línguas. Conceitos:
              <em> cosmovisión, territorialidad, lenguas originarias, interculturalidad</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🥁</span>
            <h3>Afrodescendientes</h3>
            <p>
              ~130 milhões de afrodescendentes na AL. Culturas: <em>candomblé, vudú, cumbia, afrobeat
              latinoamericano</em>. Luta: <em>reconocimiento, reparación histórica</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Mestizaje e identidade</h3>
            <p>
              O conceito de <em>mestizaje</em> (mestiçagem) é central na identidade latino-americana,
              mas também é questionado por ocultar hierarquias raciais históricas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Plurilinguismo</h3>
            <p>
              Países como Perú, Bolívia, México e Paraguai têm línguas oficiais além do espanhol:
              <em> quechua, aimara, guaraní, náhuatl, maya</em> etc.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 6: SVG — Mapa de Direitos Humanos */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura dos Direitos</span>
        <h2>Gerações dos Direitos Humanos — Esquema Visual</h2>
        <p>
          Os direitos humanos são classificados em "gerações" segundo seu surgimento histórico.
          Essa classificação aparece em textos acadêmicos e jornalísticos em espanhol que o ENEM pode trazer.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Gerações dos direitos humanos em espanhol">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#faf5ff" />
            <text x="350" y="28" textAnchor="middle" fill="#6d28d9" fontSize="14" fontWeight="bold">
              Generaciones de los Derechos Humanos
            </text>
            {/* 1ª Geração */}
            <rect x="20" y="50" width="195" height="160" rx="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
            <text x="117" y="75" textAnchor="middle" fill="#6d28d9" fontSize="12" fontWeight="bold">1.ª Generación</text>
            <text x="117" y="93" textAnchor="middle" fill="#5b21b6" fontSize="10">Derechos civiles y políticos</text>
            <text x="117" y="113" textAnchor="middle" fill="#374151" fontSize="10">• Libertad de expresión</text>
            <text x="117" y="130" textAnchor="middle" fill="#374151" fontSize="10">• Derecho al voto</text>
            <text x="117" y="147" textAnchor="middle" fill="#374151" fontSize="10">• Libertad de religión</text>
            <text x="117" y="164" textAnchor="middle" fill="#374151" fontSize="10">• Debido proceso</text>
            <text x="117" y="196" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Siglos XVIII-XIX</text>

            {/* 2ª Geração */}
            <rect x="255" y="50" width="195" height="160" rx="10" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="352" y="75" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">2.ª Generación</text>
            <text x="352" y="93" textAnchor="middle" fill="#047857" fontSize="10">Derechos económicos y sociales</text>
            <text x="352" y="113" textAnchor="middle" fill="#374151" fontSize="10">• Derecho al trabajo</text>
            <text x="352" y="130" textAnchor="middle" fill="#374151" fontSize="10">• Derecho a la salud</text>
            <text x="352" y="147" textAnchor="middle" fill="#374151" fontSize="10">• Derecho a la educación</text>
            <text x="352" y="164" textAnchor="middle" fill="#374151" fontSize="10">• Vivienda digna</text>
            <text x="352" y="196" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Siglo XX (tras 1948)</text>

            {/* 3ª Geração */}
            <rect x="490" y="50" width="195" height="160" rx="10" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
            <text x="587" y="75" textAnchor="middle" fill="#9a3412" fontSize="12" fontWeight="bold">3.ª Generación</text>
            <text x="587" y="93" textAnchor="middle" fill="#c2410c" fontSize="10">Derechos colectivos y difusos</text>
            <text x="587" y="113" textAnchor="middle" fill="#374151" fontSize="10">• Derecho al medio ambiente</text>
            <text x="587" y="130" textAnchor="middle" fill="#374151" fontSize="10">• Derechos de los pueblos</text>
            <text x="587" y="147" textAnchor="middle" fill="#374151" fontSize="10">• Paz internacional</text>
            <text x="587" y="164" textAnchor="middle" fill="#374151" fontSize="10">• Patrimonio cultural</text>
            <text x="587" y="196" textAnchor="middle" fill="#6b7280" fontSize="9" fontStyle="italic">Desde finales del s. XX</text>
          </svg>
          <figcaption>Gerações dos direitos humanos — classificação usada em textos acadêmicos e jornalísticos em espanhol sobre direitos e cidadania.</figcaption>
        </figure>
      </section>

      {/* Seção 7: Povos Originários e Línguas */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade Linguística</span>
        <h2>Povos Originários e suas Línguas na América Hispânica</h2>
        <p>
          Os povos originários da América Latina têm direitos linguísticos e culturais reconhecidos por
          constituições e tratados internacionais. Textos sobre esses temas aparecem no ENEM com vocabulário
          específico que vale conhecer.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Povo / Região</th>
                <th>Língua</th>
                <th>País</th>
                <th>Vocabulário em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Quechua / Quichua</td><td>Quechua</td><td>Perú, Bolivia, Ecuador</td><td><em>pueblo quechua, lengua ancestral, comunidad andina</em></td></tr>
              <tr><td>Aimara</td><td>Aimara</td><td>Bolivia, Perú</td><td><em>identidad aymara, tierra comunitaria, wiphala</em></td></tr>
              <tr><td>Maya</td><td>Línguas maias (30+)</td><td>México, Guatemala</td><td><em>cosmovisión maya, milpa, patrimonio cultural</em></td></tr>
              <tr><td>Mapuche</td><td>Mapudungún</td><td>Chile, Argentina</td><td><em>pueblo mapuche, territorio ancestral, reivindicación</em></td></tr>
              <tr><td>Guaraní</td><td>Guaraní</td><td>Paraguay, Argentina</td><td><em>lengua oficial, bilingüismo, cultura guaraní</em></td></tr>
              <tr><td>Náhuatl</td><td>Náhuatl</td><td>México</td><td><em>herencia azteca, lengua viva, revitalización</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 8: Identidade e Cultura nos Textos do ENEM */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM em Foco</span>
        <h2>Identidade e Cultura nos Textos Hispânicos do ENEM</h2>
        <p>
          Os textos sobre identidade cultural no ENEM geralmente abordam tensões entre tradição e modernidade,
          entre identidade local e globalização, ou entre reconhecimento e exclusão. Reconhecer esses eixos
          temáticos facilita muito a leitura e a resposta às questões.
        </p>
        <div className="lesson-highlight">
          <strong>Texto modelo — crônica sobre identidade cultural:</strong>
          <br /><br />
          <em>
            "Ser indígena en México, en el siglo XXI, significa navegar entre dos mundos: el de los ancestros
            y el de los algoritmos. Mis abuelas hablan náhuatl; yo tuiteo en español. Y sin embargo, soy la
            misma persona, portadora de una identidad que no cabe en ningún casillero de los censos nacionales.
            La diversidad cultural no es un obstáculo para el progreso: es su condición."
          </em>
          <br /><br />
          <strong>Análise do texto:</strong>
          <ul>
            <li><em>navegar entre dos mundos</em> = metáfora de transição entre culturas</li>
            <li><em>portadora de una identidad</em> = detentora de uma identidade</li>
            <li><em>no cabe en ningún casillero</em> = não cabe em nenhuma caixinha (não se encaixa em categorias)</li>
            <li>Tese final: <em>"La diversidad cultural no es un obstáculo para el progreso: es su condición."</em></li>
          </ul>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Textos sobre direitos humanos e identidade:</strong> Esses textos costumam
          ter estrutura argumentativa clara. Procure a tese (normalmente no primeiro ou último parágrafo),
          os exemplos e dados que a sustentam, e a conclusão. Questões sobre "a ideia central do texto" ou
          "o que o autor quer dizer" sempre exigem que você identifique a tese — nunca um detalhe isolado.
          Se o texto critica a <em>discriminación</em>, a tese não é apenas "existe discriminação" mas
          "a discriminação é injusta / precisa ser combatida".
        </div>
      </section>

      {/* Seção 9: Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Vocabulário — igualdad vs. equidad"
          statement={
            <p>
              Leia: <em>"La igualdad formal no basta cuando las condiciones de partida son tan distintas.
              La verdadera justicia exige equidad: dar más apoyo a quienes enfrentan más obstáculos,
              para que todos puedan alcanzar las mismas oportunidades."</em>
              <br /><br />
              No texto, a diferença entre <strong>"igualdad"</strong> e <strong>"equidad"</strong> é:
            </p>
          }
          options={[
            { letter: "a", text: "Igualdad é um conceito mais avançado que equidad no campo dos direitos humanos." },
            { letter: "b", text: "Igualdad significa tratamento idêntico para todos; equidad significa tratamento diferenciado conforme as necessidades.", correct: true },
            { letter: "c", text: "Os dois termos são sinônimos e podem ser usados de forma intercambiável em espanhol." },
            { letter: "d", text: "Equidad é um conceito aplicado apenas a questões econômicas, enquanto igualdad se refere a direitos políticos." },
          ]}
          resolution={
            <p>
              O texto explica claramente: <em>igualdad formal</em> = todos recebem o mesmo tratamento,
              mas isso não é suficiente quando as condições de partida são desiguais. <em>Equidad</em> =
              dar mais a quem mais precisa (<em>"dar más apoyo a quienes enfrentan más obstáculos"</em>),
              para que todos possam atingir as mesmas oportunidades. A alternativa (b) captura essa distinção.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Movimentos sociais — vocabulário em contexto"
          statement={
            <p>
              Leia: <em>"El movimiento #NiUnaMenos nació en Argentina en 2015 como una respuesta colectiva
              al feminicidio y a la violencia de género. Su grito se extendió por toda América Latina y España,
              transformándose en un símbolo de lucha por los derechos de las mujeres y la igualdad de género."</em>
              <br /><br />
              O termo <strong>"feminicidio"</strong>, no contexto do texto, refere-se a:
            </p>
          }
          options={[
            { letter: "a", text: "Qualquer forma de violência praticada por mulheres contra homens." },
            { letter: "b", text: "O assassinato de mulheres motivado por sua condição de gênero.", correct: true },
            { letter: "c", text: "Movimento político que defende a superioridade feminina nas relações sociais." },
            { letter: "d", text: "Termo jurídico equivalente a homicídio culposo sem motivação de gênero." },
          ]}
          resolution={
            <p>
              <em>Feminicidio</em> (ou <em>femicidio</em>) é o assassinato de mulheres motivado pela condição
              de gênero — a forma mais extrema de violência de gênero. O texto associa o termo à <em>violencia
              de género</em>, o que confirma essa definição. A alternativa (b) é a única correta. Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Inferência em texto sobre identidade indígena"
          statement={
            <p>
              Leia: <em>"Durante siglos, los pueblos originarios de América Latina fueron tratados como
              objetos de la historia, no como sujetos. Sus lenguas fueron prohibidas, sus tierras confiscadas
              y sus conocimientos ignorados. Hoy, sin embargo, sus voces se alzan con más fuerza que nunca,
              reclamando no solo el reconocimiento de sus derechos, sino el derecho a definir su propio futuro."</em>
              <br /><br />
              A expressão <strong>"objetos de la historia, no sujetos"</strong> significa que os povos originários:
            </p>
          }
          options={[
            { letter: "a", text: "Não participaram dos eventos históricos da América Latina." },
            { letter: "b", text: "Foram tratados como alvos passivos das ações de outros, sem protagonismo ou voz na construção da história.", correct: true },
            { letter: "c", text: "Não possuem registros históricos escritos sobre sua cultura e tradições." },
            { letter: "d", text: "São os principais responsáveis pelos conflitos históricos na América Latina." },
          ]}
          resolution={
            <p>
              "Objeto" vs. "sujeito" é uma oposição filosófica e histórica: o sujeito é o agente ativo; o
              objeto é o passivo, o que recebe a ação. O texto afirma que os povos originários foram historicamente
              tratados como passivos (<em>objetos</em>): suas línguas foram proibidas, suas terras confiscadas —
              ações sofridas, não praticadas. A alternativa (b) capta essa ideia de exclusão do protagonismo histórico.
              Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto sobre migração e xenofobia"
          statement={
            <p>
              Leia: <em>"Cada año, miles de venezolanos cruzan la frontera hacia Colombia, Perú y Chile en
              busca de oportunidades. En lugar de ser recibidos con solidaridad, muchos enfrentan xenofobia,
              discriminación laboral y condiciones de vida precarias. Olvidamos con facilidad que migrar
              no es un privilegio, sino muchas veces la única alternativa frente a la desesperación."</em>
              <br /><br />
              Qual é a crítica central do autor nesse texto?
            </p>
          }
          options={[
            { letter: "a", text: "Os países da América Latina não têm capacidade econômica para receber migrantes venezuelanos." },
            { letter: "b", text: "A migração venezuelana é um problema que deve ser resolvido pelo governo da Venezuela." },
            { letter: "c", text: "Os países receptores tratam os migrantes com discriminação, quando deveriam acolhê-los com solidariedade.", correct: true },
            { letter: "d", text: "Os migrantes venezuelanos devem ser responsabilizados pelos problemas socioeconômicos dos países que os recebem." },
          ]}
          resolution={
            <p>
              O autor usa a expressão <em>"En lugar de ser recibidos con solidaridad"</em> para introduzir
              a crítica: os migrantes recebem <em>xenofobia</em> e <em>discriminación</em> em vez de solidariedade.
              A última frase reforça: migrar não é escolha, mas necessidade. A crítica central é ao tratamento
              discriminatório dos países receptores. Alternativa (c). Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Texto da Declaração Universal dos Direitos Humanos"
          statement={
            <p>
              Leia o Artigo 1 da Declaração Universal dos Direitos Humanos: <em>"Todos los seres humanos
              nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia,
              deben comportarse fraternalmente los unos con los otros."</em>
              <br /><br />
              De acordo com esse artigo, a conduta esperada das pessoas é:
            </p>
          }
          options={[
            { letter: "a", text: "Que cada pessoa defenda seus próprios direitos, independentemente dos outros." },
            { letter: "b", text: "Que os governos garantam que todos os cidadãos recebam tratamento igual perante a lei." },
            { letter: "c", text: "Que os seres humanos tratem uns aos outros com fraternidade, reconhecendo sua igualdade em dignidade.", correct: true },
            { letter: "d", text: "Que as nações mais ricas ajudem financeiramente os países menos desenvolvidos." },
          ]}
          resolution={
            <p>
              O artigo afirma que todos nascem livres e iguais em dignidade, e que, por serem dotados de razão
              e consciência (<em>razón y conciencia</em>), <em>deben comportarse fraternalmente</em> — devem se
              comportar de forma fraterna uns com os outros. O "dever" aqui é de conduta interpessoal, não
              governamental. A alternativa (c) é a que melhor traduz esse imperativo ético universal.
              Resposta: (c).
            </p>
          }
        />
      </section>
    </article>
  );
}
