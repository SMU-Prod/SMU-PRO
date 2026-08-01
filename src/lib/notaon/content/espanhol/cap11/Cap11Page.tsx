"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 11</span>
          <h1>Verbos Irregulares Mais Frequentes</h1>
          <p>
            Os verbos irregulares são inevitáveis no espanhol e aparecem
            constantemente nos textos do ENEM — tanto em diálogos quanto em
            narrativas e textos de opinião. A boa notícia é que a irregularidade
            não é aleatória: ela segue padrões reconhecíveis. Ao dominar esses
            padrões — como a diptongação (e→ie, o→ue), a mudança vocálica (e→i)
            e os chamados "verbos go" (irregulares apenas na 1ª pessoa do
            singular) — você será capaz de reconhecer e interpretar qualquer
            um desses verbos em contexto, mesmo sem tê-lo memorizado previamente.
            Neste capítulo estudaremos os 15 verbos mais cobrados no ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ser e Estar</span>
        <h2>1. Ser e Estar — os verbos mais cobrados do ENEM</h2>
        <p>
          A distinção entre <em>ser</em> e <em>estar</em> é um dos grandes
          diferenciais do espanhol em relação ao português. Em português, os
          dois verbos correspondem ao verbo "ser/estar" com menos especialização.
          Em espanhol, <em>ser</em> expressa características permanentes ou
          essenciais, enquanto <em>estar</em> expressa estados temporários,
          localização e resultado de uma ação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>SER</th>
                <th>ESTAR</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>soy</td><td>estoy</td></tr>
              <tr><td>tú</td><td>eres</td><td>estás</td></tr>
              <tr><td>él/ella/Ud.</td><td>es</td><td>está</td></tr>
              <tr><td>nosotros</td><td>somos</td><td>estamos</td></tr>
              <tr><td>vosotros</td><td>sois</td><td>estáis</td></tr>
              <tr><td>ellos/Uds.</td><td>son</td><td>están</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>SER:</strong> identidade (<em>Soy brasileño</em>), profissão
          (<em>Es médico</em>), origem (<em>Es de Colombia</em>), material
          (<em>La mesa es de madera</em>), hora (<em>Son las tres</em>),
          características permanentes (<em>El cielo es azul</em>).<br />
          <strong>ESTAR:</strong> localização (<em>Estoy en casa</em>), estado
          temporário (<em>Estoy cansado</em>), resultado (<em>La puerta está
          abierta</em>), aspecto (forma progressiva: <em>Estoy comiendo</em>).
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tener e Ir</span>
        <h2>2. Tener e Ir — estruturas essenciais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>TENER (ter)</th>
                <th>IR (ir)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>tengo</td><td>voy</td></tr>
              <tr><td>tú</td><td>tienes</td><td>vas</td></tr>
              <tr><td>él/ella/Ud.</td><td>tiene</td><td>va</td></tr>
              <tr><td>nosotros</td><td>tenemos</td><td>vamos</td></tr>
              <tr><td>vosotros</td><td>tenéis</td><td>vais</td></tr>
              <tr><td>ellos/Uds.</td><td>tienen</td><td>van</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <em>Tener</em> é um "verbo go" (1ª pessoa <em>tengo</em>) com
          diptongação e→ie nas demais pessoas (exceto <em>nosotros/vosotros</em>).
          <em>Ir</em> é totalmente irregular — não tem qualquer semelhança com
          seu infinitivo na conjugação. É um dos verbos mais frequentes do
          espanhol e essencial para a perífrase <em>ir a + infinitivo</em>
          (futuro próximo): <em>Voy a estudiar mañana.</em>
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos e→ie</span>
        <h2>3. Irregularidade e→ie: diptongação</h2>
        <p>
          Um grupo numeroso de verbos sofre diptongação do <em>e</em> do
          radical para <em>ie</em> nas formas tônicas (yo, tú, él/ella,
          ellos/Uds.) — mas NÃO em <em>nosotros</em> e <em>vosotros</em>,
          onde a sílaba tônica não recai sobre o radical.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama da diptongação e→ie nos verbos irregulares em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap11arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#1e40af" />
              </marker>
            </defs>
            {/* Boot shape labels */}
            <rect x="20" y="20" width="300" height="160" rx="12" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
            <text x="170" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">QUERER (e→ie)</text>
            <text x="170" y="74" textAnchor="middle" fontSize="13" fill="#1f2937">yo <tspan fontStyle="italic" fontWeight="bold" fill="#1e40af">qu-ie-ro</tspan></text>
            <text x="170" y="96" textAnchor="middle" fontSize="13" fill="#1f2937">tú <tspan fontStyle="italic" fontWeight="bold" fill="#1e40af">qu-ie-res</tspan></text>
            <text x="170" y="118" textAnchor="middle" fontSize="13" fill="#1f2937">él <tspan fontStyle="italic" fontWeight="bold" fill="#1e40af">qu-ie-re</tspan></text>
            <text x="170" y="140" textAnchor="middle" fontSize="12" fill="#6b7280">nosotros <tspan fontStyle="italic">queremos</tspan> (sem diptongar)</text>
            <text x="170" y="160" textAnchor="middle" fontSize="12" fill="#6b7280">vosotros <tspan fontStyle="italic">queréis</tspan> (sem diptongar)</text>
            <text x="170" y="180" textAnchor="middle" fontSize="13" fill="#1f2937">ellos <tspan fontStyle="italic" fontWeight="bold" fill="#1e40af">qu-ie-ren</tspan></text>
            {/* Right box */}
            <rect x="380" y="20" width="300" height="160" rx="12" fill="#d1fae5" stroke="#065f46" strokeWidth="2" />
            <text x="530" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#065f46">Outros verbos e→ie</text>
            <text x="530" y="74" textAnchor="middle" fontSize="12" fill="#1f2937"><tspan fontStyle="italic">entender</tspan> → entiendo</text>
            <text x="530" y="96" textAnchor="middle" fontSize="12" fill="#1f2937"><tspan fontStyle="italic">pensar</tspan> → pienso</text>
            <text x="530" y="118" textAnchor="middle" fontSize="12" fill="#1f2937"><tspan fontStyle="italic">empezar</tspan> → empiezo</text>
            <text x="530" y="140" textAnchor="middle" fontSize="12" fill="#1f2937"><tspan fontStyle="italic">preferir</tspan> → prefiero</text>
            <text x="530" y="162" textAnchor="middle" fontSize="12" fill="#1f2937"><tspan fontStyle="italic">venir</tspan> → vengo/vienes</text>
          </svg>
          <figcaption>O padrão de diptongação e→ie ocorre nas formas tônicas (yo, tú, él, ellos), mas não em nosotros/vosotros.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>yo</th>
                <th>tú</th>
                <th>él</th>
                <th>nosotros</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>querer</td><td>quiero</td><td>quieres</td><td>quiere</td><td>queremos</td><td>quieren</td></tr>
              <tr><td>entender</td><td>entiendo</td><td>entiendes</td><td>entiende</td><td>entendemos</td><td>entienden</td></tr>
              <tr><td>pensar</td><td>pienso</td><td>piensas</td><td>piensa</td><td>pensamos</td><td>piensan</td></tr>
              <tr><td>preferir</td><td>prefiero</td><td>prefieres</td><td>prefiere</td><td>preferimos</td><td>prefieren</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos o→ue</span>
        <h2>4. Irregularidade o→ue: diptongação</h2>
        <p>
          Outro padrão frequente é a diptongação <em>o→ue</em>, que segue
          exatamente o mesmo padrão da diptongação e→ie: afeta as formas
          tônicas (yo, tú, él, ellos) e não afeta <em>nosotros/vosotros</em>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>yo</th>
                <th>tú</th>
                <th>él</th>
                <th>nosotros</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>poder</td><td>puedo</td><td>puedes</td><td>puede</td><td>podemos</td><td>pueden</td></tr>
              <tr><td>dormir</td><td>duermo</td><td>duermes</td><td>duerme</td><td>dormimos</td><td>duermen</td></tr>
              <tr><td>volver</td><td>vuelvo</td><td>vuelves</td><td>vuelve</td><td>volvemos</td><td>vuelven</td></tr>
              <tr><td>encontrar</td><td>encuentro</td><td>encuentras</td><td>encuentra</td><td>encontramos</td><td>encuentran</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos e→i</span>
        <h2>5. Irregularidade e→i e os "verbos go"</h2>
        <p>
          Um terceiro padrão de irregularidade é a mudança <em>e→i</em> no
          radical, restrito a verbos em -IR. Difere da diptongação e→ie porque
          o <em>e</em> se transforma em <em>i</em> simples (sem ditongo). Os
          "verbos go" são irregulares apenas na 1ª pessoa do singular, adicionando
          <em>-go</em> à raiz. São dois padrões distintos que merecem atenção
          separada.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔀</span>
            <h3>e→i: pedir</h3>
            <p>pido, pides, pide, pedimos, pedís, piden</p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>e→i: servir</h3>
            <p>sirvo, sirves, sirve, servimos, servís, sirven</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>"go": hacer</h3>
            <p><strong>hago</strong>, haces, hace, hacemos, hacéis, hacen</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>"go": salir</h3>
            <p><strong>salgo</strong>, sales, sale, salimos, salís, salen</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>yo (irr.)</th>
                <th>tú</th>
                <th>él</th>
                <th>nosotros</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>hacer (fazer)</td><td><strong>hago</strong></td><td>haces</td><td>hace</td><td>hacemos</td><td>hacen</td></tr>
              <tr><td>poner (pôr)</td><td><strong>pongo</strong></td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
              <tr><td>salir (sair)</td><td><strong>salgo</strong></td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
              <tr><td>tener (ter)</td><td><strong>tengo</strong></td><td>tienes</td><td>tiene</td><td>tenemos</td><td>tienen</td></tr>
              <tr><td>venir (vir)</td><td><strong>vengo</strong></td><td>vienes</td><td>viene</td><td>venimos</td><td>vienen</td></tr>
              <tr><td>traer (trazer)</td><td><strong>traigo</strong></td><td>traes</td><td>trae</td><td>traemos</td><td>traen</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Estratégia de memorização dos "verbos go":</strong> Agrupe-os
          pela terminação: <em>hago, salgo, valgo, traigo, caigo</em> (com -g-
          antes de -o); <em>pongo, tengo, vengo</em> (com vogal + ng + o).
          O restante da conjugação desses verbos é regular ou segue diptongação.
          Foque na 1ª pessoa, que é a mais imprevisível.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Saber, Dar, Ver</span>
        <h2>6. Saber, Dar, Ver e Decir</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>SABER (saber)</th>
                <th>DAR (dar)</th>
                <th>VER (ver)</th>
                <th>DECIR (dizer)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><strong>sé</strong></td><td><strong>doy</strong></td><td><strong>veo</strong></td><td><strong>digo</strong></td></tr>
              <tr><td>tú</td><td>sabes</td><td>das</td><td>ves</td><td>dices</td></tr>
              <tr><td>él/ella</td><td>sabe</td><td>da</td><td>ve</td><td>dice</td></tr>
              <tr><td>nosotros</td><td>sabemos</td><td>damos</td><td>vemos</td><td>decimos</td></tr>
              <tr><td>vosotros</td><td>sabéis</td><td>dais</td><td>veis</td><td>decís</td></tr>
              <tr><td>ellos/Uds.</td><td>saben</td><td>dan</td><td>ven</td><td>dicen</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <em>Saber</em> é irregular apenas na 1ª pessoa (<em>sé</em>).
          <em>Dar</em> é irregular em <em>doy</em> e mantém as terminações
          de -ER/-IR (não de -AR) nas demais pessoas. <em>Ver</em> tem apenas
          a irregularidade em <em>veo</em> (1ª pessoa). <em>Decir</em> é
          e→i (verbo -IR) com irregularidade adicional na 1ª pessoa: <em>digo</em>,
          e nas demais segue e→i: <em>dices, dice, dicen</em>.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro geral</span>
        <h2>7. Quadro geral dos 15 verbos irregulares mais cobrados</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Tipo de irregularidade</th>
                <th>yo</th>
                <th>tú</th>
                <th>él/ella</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ser</td><td>totalmente irregular</td><td>soy</td><td>eres</td><td>es</td><td>son</td></tr>
              <tr><td>estar</td><td>irregular (1ª p. + acentos)</td><td>estoy</td><td>estás</td><td>está</td><td>están</td></tr>
              <tr><td>tener</td><td>go + e→ie</td><td>tengo</td><td>tienes</td><td>tiene</td><td>tienen</td></tr>
              <tr><td>ir</td><td>totalmente irregular</td><td>voy</td><td>vas</td><td>va</td><td>van</td></tr>
              <tr><td>hacer</td><td>go (1ª p.)</td><td>hago</td><td>haces</td><td>hace</td><td>hacen</td></tr>
              <tr><td>poder</td><td>o→ue</td><td>puedo</td><td>puedes</td><td>puede</td><td>pueden</td></tr>
              <tr><td>querer</td><td>e→ie</td><td>quiero</td><td>quieres</td><td>quiere</td><td>quieren</td></tr>
              <tr><td>saber</td><td>irregular (1ª p.)</td><td>sé</td><td>sabes</td><td>sabe</td><td>saben</td></tr>
              <tr><td>venir</td><td>go + e→ie</td><td>vengo</td><td>vienes</td><td>viene</td><td>vienen</td></tr>
              <tr><td>decir</td><td>go + e→i</td><td>digo</td><td>dices</td><td>dice</td><td>dicen</td></tr>
              <tr><td>ver</td><td>irregular (1ª p.)</td><td>veo</td><td>ves</td><td>ve</td><td>ven</td></tr>
              <tr><td>dar</td><td>irregular (1ª p.)</td><td>doy</td><td>das</td><td>da</td><td>dan</td></tr>
              <tr><td>salir</td><td>go (1ª p.)</td><td>salgo</td><td>sales</td><td>sale</td><td>salen</td></tr>
              <tr><td>poner</td><td>go (1ª p.)</td><td>pongo</td><td>pones</td><td>pone</td><td>ponen</td></tr>
              <tr><td>traer</td><td>go (1ª p.)</td><td>traigo</td><td>traes</td><td>trae</td><td>traen</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>8. Estratégia de leitura para verbos irregulares no ENEM</h2>
        <p>
          No ENEM, você não precisa conjugar verbos — precisa reconhecê-los
          em contexto. A estratégia mais eficiente é identificar o padrão
          de irregularidade e o sujeito gramatical para determinar pessoa e
          número, e assim compreender quem pratica a ação descrita.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Identifique o radical</h3>
            <p>Compare a forma verbal com o infinitivo para identificar modificações no radical.</p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Identifique o sujeito</h3>
            <p>Procure o sujeito explícito ou use o contexto para determinar a pessoa gramatical.</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Classifique a irregularidade</h3>
            <p>É e→ie, o→ue, e→i, "go" ou totalmente irregular? Isso já reduz as possibilidades.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Use o contexto</h3>
            <p>O contexto do texto sempre ajuda a confirmar o sentido do verbo mesmo que a forma seja nova.</p>
          </div>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> Os verbos irregulares mais cobrados nas provas
          recentes foram <em>poder, querer, tener, ir, hacer</em> e <em>ser/estar</em>.
          Priorize memorizar a 1ª e 3ª pessoas do singular e do plural, pois são as
          mais frequentes em textos narrativos e argumentativos.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Ser vs. Estar"
          statement={
            <p>
              Escolha a opção correta para completar a frase:<br />
              <em>"La reunión ___ en la sala de conferencias."</em>
            </p>
          }
          options={[
            { letter: "a", text: "es" },
            { letter: "b", text: "está", correct: true },
            { letter: "c", text: "son" },
            { letter: "d", text: "están" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) está</strong>. O verbo <em>estar</em>
              é usado para indicar localização. A reunião "está" (localiza-se)
              na sala de conferências. O verbo <em>ser</em> seria usado para
              características permanentes ou identidade. Note que o sujeito
              (<em>la reunión</em>) é singular, o que descarta as formas
              plurais <em>son</em> e <em>están</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Verbo poder — diptongação o→ue"
          statement={
            <p>
              Escolha a forma correta do verbo <em>poder</em>:<br />
              <em>"¿___ tú venir esta tarde?"</em>
            </p>
          }
          options={[
            { letter: "a", text: "Podes" },
            { letter: "b", text: "Pode" },
            { letter: "c", text: "Puedes", correct: true },
            { letter: "d", text: "Podéis" },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) Puedes</strong>. O verbo <em>poder</em>
              sofre diptongação o→ue nas formas tônicas. Para a 2ª pessoa
              do singular (<em>tú</em>), a forma é <em>puedes</em>
              (pode- → pue-des). A opção a (<em>podes</em>) é uma
              interferência do português. A opção d (<em>podéis</em>) é para
              <em>vosotros</em>. A opção b (<em>pode</em>) seria uma forma do
              português ou indicaria a 3ª pessoa sem diptongação — erro.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Verbos go — identificação"
          statement={
            <p>
              Leia o trecho: <em>"Cuando salgo de casa, siempre traigo
              el paraguas, aunque no sé si va a llover."</em><br />
              Quantos "verbos go" aparecem nesse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Um: salgo." },
            { letter: "b", text: "Dois: salgo, traigo.", correct: true },
            { letter: "c", text: "Três: salgo, traigo, sé." },
            { letter: "d", text: "Quatro: salgo, traigo, sé, va." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. Os "verbos go" são aqueles que
              formam a 1ª pessoa do singular com a terminação irregular -go:
              <em> salgo</em> (de <em>salir</em>) e <em>traigo</em> (de
              <em>traer</em>). O verbo <em>sé</em> (de <em>saber</em>) tem
              irregularidade própria, mas não é classificado como "go verb".
              <em>Va</em> é a 3ª pessoa de <em>ir</em>, um verbo totalmente
              irregular, também não classificado como "go".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Identificação de verbos irregulares em texto"
          statement={
            <p>
              Leia o trecho: <em>"El escritor dice que no quiere hablar de su
              vida personal, pero que sabe muy bien lo que hace cuando escribe.
              Para él, escribir es una forma de estar en el mundo."</em><br />
              Qual verbo irregular aparece com irregularidade do tipo e→ie?
            </p>
          }
          options={[
            { letter: "a", text: "dice" },
            { letter: "b", text: "sabe" },
            { letter: "c", text: "hace" },
            { letter: "d", text: "quiere", correct: true },
          ]}
          resolution={
            <p>
              Resposta: <strong>d) quiere</strong>. O verbo <em>querer</em>
              sofre diptongação e→ie: <em>quiero, quieres, quiere, quieren</em>.
              A forma <em>quiere</em> (3ª pessoa singular) é o exemplo de
              e→ie neste trecho. Os demais: <em>dice</em> é e→i (decir);
              <em>sabe</em> é irregular apenas na 1ª pessoa (<em>sé</em>),
              mas <em>sabe</em> em si é regular; <em>hace</em> é "go" apenas
              na 1ª pessoa — <em>hace</em> é regular.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ser/Estar em texto literário"
          statement={
            <p>
              Leia o fragmento: <em>"La ciudad es hermosa en otoño, pero hoy
              está cubierta de niebla. Los habitantes están acostumbrados a eso
              y saben que el sol siempre es fiel: vuelve."</em><br />
              Por que o autor usa <em>es</em> com "hermosa" mas <em>está</em>
              com "cubierta de niebla"?
            </p>
          }
          options={[
            { letter: "a", text: "É apenas variação estilística — os dois verbos poderiam ser trocados sem mudança de sentido." },
            { letter: "b", text: "Ser expressa característica permanente (beleza da cidade); estar expressa estado temporário (cobertura de nevoeiro hoje).", correct: true },
            { letter: "c", text: "Ser é usado com adjetivos de qualidade; estar com adjetivos de cor." },
            { letter: "d", text: "Estar indica localização geográfica; ser indica estado emocional." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. Este é o uso clássico da distinção
              ser/estar: <em>es hermosa</em> usa <em>ser</em> porque a beleza
              da cidade é uma característica considerada permanente ou essencial.
              <em>Está cubierta de niebla</em> usa <em>estar</em> porque é um
              estado temporário — apenas hoje, apenas agora. Esta distinção
              é fundamental para interpretar textos literários em espanhol.
            </p>
          }
        />
      </section>

    </article>
  );
}
