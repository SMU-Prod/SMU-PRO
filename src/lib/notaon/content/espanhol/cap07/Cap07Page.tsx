"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 07</span>
          <h1>Pronomes pessoais, possessivos, demonstrativos e interrogativos</h1>
          <p>
            Os pronomes são peças fundamentais do espanhol e aparecem com frequência nas provas do ENEM, tanto como elementos gramaticais a serem identificados quanto como ferramentas de coesão textual que conectam ideias ao longo de um texto. Diferentemente do Português, o espanhol possui uma distinção importante entre o tratamento formal e informal — e ainda mantém, na variante peninsular, a segunda pessoa do plural <em>vosotros</em>, que praticamente desapareceu do espanhol americano. Compreender os pronomes pessoais sujeito, os objetos direto e indireto, os reflexivos, os possessivos átonos e tônicos, os demonstrativos e os interrogativos permite que o leitor rastreie corretamente as referências dentro de um texto, identifique quem faz o quê e como os elementos se relacionam — habilidade essencial para responder questões de interpretação no ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Sujeito</span>
        <h2>1. Pronomes pessoais sujeito em espanhol</h2>
        <p>
          Os <strong>pronomes pessoais sujeito</strong> (pronombres personales de sujeto) indicam quem realiza a ação verbal. Em espanhol, eles são frequentemente omitidos na fala cotidiana porque a desinência verbal já indica a pessoa — assim como ocorre no Português do Brasil. No entanto, eles aparecem em textos formais escritos para dar <strong>ênfase</strong> ou <strong>contraste</strong>: <em>Yo lo hice, no él</em> (Eu fiz, não ele). Conhecê-los é fundamental para identificar o sujeito em frases sem pronome explícito.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Singular</th>
                <th>Plural (Espanha)</th>
                <th>Plural (América Latina)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª pessoa</td>
                <td><em>yo</em> (eu)</td>
                <td><em>nosotros / nosotras</em> (nós)</td>
                <td><em>nosotros / nosotras</em></td>
              </tr>
              <tr>
                <td>2ª pessoa informal</td>
                <td><em>tú</em> (tu / você)</td>
                <td><em>vosotros / vosotras</em> (vocês)</td>
                <td><em>ustedes</em> (vocês)</td>
              </tr>
              <tr>
                <td>2ª pessoa formal</td>
                <td><em>usted</em> (o/a senhor/a)</td>
                <td><em>ustedes</em></td>
                <td><em>ustedes</em></td>
              </tr>
              <tr>
                <td>3ª pessoa</td>
                <td><em>él / ella</em> (ele / ela)</td>
                <td><em>ellos / ellas</em> (eles / elas)</td>
                <td><em>ellos / ellas</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Diferença regional importante:</strong> Na Espanha, <em>vosotros/vosotras</em> é a forma informal da 2ª pessoa do plural (correspondente a "vocês" no uso coloquial). Na América Latina, essa forma praticamente não existe — usa-se <em>ustedes</em> tanto no formal quanto no informal. O ENEM pode cobrar textos de qualquer variedade do espanhol, portanto reconhecer <em>vosotros</em> é essencial.
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Mapa dos pronomes sujeito do espanhol por variante regional">
            <rect x="0" y="0" width="700" height="260" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Pronomes Sujeito: Espanha × América Latina</text>

            {/* Coluna Espanha */}
            <rect x="40" y="45" width="280" height="30" rx="6" fill="#1e40af" />
            <text x="180" y="65" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ESPANHA</text>

            <rect x="40" y="82" width="280" height="28" rx="5" fill="#dbeafe" />
            <text x="180" y="101" textAnchor="middle" fill="#1e3a8a" fontSize="12">yo / tú / él / ella / usted</text>

            <rect x="40" y="116" width="280" height="28" rx="5" fill="#bfdbfe" />
            <text x="180" y="135" textAnchor="middle" fill="#1e3a8a" fontSize="12">nosotros / nosotras</text>

            <rect x="40" y="150" width="280" height="28" rx="5" fill="#93c5fd" />
            <text x="180" y="169" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">vosotros / vosotras (informal)</text>

            <rect x="40" y="184" width="280" height="28" rx="5" fill="#bfdbfe" />
            <text x="180" y="203" textAnchor="middle" fill="#1e3a8a" fontSize="12">ustedes (formal)</text>

            <rect x="40" y="218" width="280" height="28" rx="5" fill="#dbeafe" />
            <text x="180" y="237" textAnchor="middle" fill="#1e3a8a" fontSize="12">ellos / ellas</text>

            {/* Coluna América Latina */}
            <rect x="380" y="45" width="280" height="30" rx="6" fill="#065f46" />
            <text x="520" y="65" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">AMÉRICA LATINA</text>

            <rect x="380" y="82" width="280" height="28" rx="5" fill="#dcfce7" />
            <text x="520" y="101" textAnchor="middle" fill="#065f46" fontSize="12">yo / tú / él / ella / usted</text>

            <rect x="380" y="116" width="280" height="28" rx="5" fill="#bbf7d0" />
            <text x="520" y="135" textAnchor="middle" fill="#065f46" fontSize="12">nosotros / nosotras</text>

            <rect x="380" y="150" width="280" height="28" rx="5" fill="#f1f5f9" />
            <text x="520" y="169" textAnchor="middle" fill="#94a3b8" fontSize="12" fontStyle="italic">vosotros — praticamente não usado</text>

            <rect x="380" y="184" width="280" height="28" rx="5" fill="#bbf7d0" />
            <text x="520" y="203" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">ustedes (formal e informal)</text>

            <rect x="380" y="218" width="280" height="28" rx="5" fill="#dcfce7" />
            <text x="520" y="237" textAnchor="middle" fill="#065f46" fontSize="12">ellos / ellas</text>
          </svg>
          <figcaption>Comparativo dos pronomes sujeito entre a variante peninsular (Espanha) e as variantes hispano-americanas (América Latina).</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto Direto</span>
        <h2>2. Pronomes de objeto direto (complemento direto)</h2>
        <p>
          Os <strong>pronomes de objeto direto</strong> (pronombres de objeto directo) substituem o ser ou a coisa que recebe diretamente a ação verbal, sem preposição. Em Português, são equivalentes a "o", "a", "os", "as" quando usados após o verbo ou "me", "te", "nos". Em espanhol, esses pronomes se posicionam <strong>antes do verbo conjugado</strong> (proclíticos) ou <strong>após o verbo no infinitivo, gerúndio ou imperativo</strong> (enclíticos): <em>Lo veo</em> (eu o vejo) / <em>Quiero verlo</em> (quero vê-lo).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Pronome OD</th>
                <th>Equivalente em Português</th>
                <th>Exemplo em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª singular</td>
                <td><em>me</em></td>
                <td>me</td>
                <td><em>Ella me llama.</em> (Ela me liga.)</td>
              </tr>
              <tr>
                <td>2ª singular informal</td>
                <td><em>te</em></td>
                <td>te</td>
                <td><em>Te veo mañana.</em> (Te vejo amanhã.)</td>
              </tr>
              <tr>
                <td>3ª masc. singular</td>
                <td><em>lo</em></td>
                <td>o (ele)</td>
                <td><em>Lo compré ayer.</em> (Comprei-o ontem.)</td>
              </tr>
              <tr>
                <td>3ª fem. singular</td>
                <td><em>la</em></td>
                <td>a (ela)</td>
                <td><em>La vi en el mercado.</em> (Eu a vi no mercado.)</td>
              </tr>
              <tr>
                <td>1ª plural</td>
                <td><em>nos</em></td>
                <td>nos</td>
                <td><em>El profesor nos felicitó.</em></td>
              </tr>
              <tr>
                <td>2ª plural (Espanha)</td>
                <td><em>os</em></td>
                <td>vos (arcaico)</td>
                <td><em>Os espero aquí.</em></td>
              </tr>
              <tr>
                <td>3ª masc. plural</td>
                <td><em>los</em></td>
                <td>os (eles)</td>
                <td><em>Los vimos en la fiesta.</em></td>
              </tr>
              <tr>
                <td>3ª fem. plural</td>
                <td><em>las</em></td>
                <td>as (elas)</td>
                <td><em>Las invité a cenar.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Leísmo:</strong> Na Espanha, é comum usar <em>le</em> no lugar de <em>lo</em> para objetos diretos de pessoa masculina singular: <em>Le vi ayer</em> em vez de <em>Lo vi ayer</em> (Vi-o ontem). Essa forma é aceita pela Real Academia Española mas não é padrão na América Latina. O ENEM pode apresentar textos peninsulares com essa característica.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto Indireto</span>
        <h2>3. Pronomes de objeto indireto (complemento indireto)</h2>
        <p>
          Os <strong>pronomes de objeto indireto</strong> (pronombres de objeto indirecto) indicam a quem ou para quem se destina a ação. Em Português, equivalem a "me", "te", "lhe", "nos", "lhes". Em espanhol, a 3ª pessoa usa sempre <em>le</em> (singular) e <em>les</em> (plural), independentemente do gênero — o que é diferente do Português, onde se usa "lhe" para singular masculino e feminino. Observe: <em>Le escribí una carta a María</em> (Escrevi uma carta a Maria) e <em>Le escribí una carta a Juan</em> (Escrevi uma carta a João). O pronome não muda.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Pronome OI</th>
                <th>Equivalente em Português</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª singular</td>
                <td><em>me</em></td>
                <td>me</td>
                <td><em>Me dieron el premio.</em> (Deram-me o prêmio.)</td>
              </tr>
              <tr>
                <td>2ª singular informal</td>
                <td><em>te</em></td>
                <td>te</td>
                <td><em>Te traje flores.</em> (Trouxe-te flores.)</td>
              </tr>
              <tr>
                <td>3ª singular (masc. e fem.)</td>
                <td><em>le</em></td>
                <td>lhe</td>
                <td><em>Le conté la verdad.</em> (Contei-lhe a verdade.)</td>
              </tr>
              <tr>
                <td>1ª plural</td>
                <td><em>nos</em></td>
                <td>nos</td>
                <td><em>Nos enviaron una carta.</em></td>
              </tr>
              <tr>
                <td>2ª plural (Espanha)</td>
                <td><em>os</em></td>
                <td>vos (arcaico)</td>
                <td><em>Os digo la verdad.</em></td>
              </tr>
              <tr>
                <td>3ª plural (masc. e fem.)</td>
                <td><em>les</em></td>
                <td>lhes</td>
                <td><em>Les expliqué el problema.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Quando os pronomes de objeto direto e indireto aparecem juntos na mesma frase, o indireto vem primeiro: <em>Me lo dio</em> (Deu-mo / Ele me deu isso). Atenção: quando o OI é <em>le</em> ou <em>les</em> e vem antes de <em>lo/la/los/las</em>, ele se transforma em <em>se</em>: <em>Se lo expliqué</em> (Expliquei-lho), nunca <em>le lo expliqué</em>.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Reflexivos</span>
        <h2>4. Pronomes reflexivos</h2>
        <p>
          Os <strong>pronomes reflexivos</strong> (pronombres reflexivos) são usados quando o sujeito realiza e ao mesmo tempo recebe a ação verbal — equivalem às construções com "se" em Português. São fundamentais para os verbos pronominais (verbos que se conjugam obrigatoriamente com pronome reflexivo, como <em>levantarse</em>, <em>llamarse</em>, <em>sentarse</em>). Exemplo: <em>Me llamo Ana</em> (Me chamo Ana / Meu nome é Ana); <em>Él se levantó temprano</em> (Ele se levantou cedo).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Pronome reflexivo</th>
                <th>Exemplo com <em>lavarse</em></th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>yo</td>
                <td><em>me</em></td>
                <td><em>Yo me lavo.</em></td>
                <td>Eu me lavo.</td>
              </tr>
              <tr>
                <td>tú</td>
                <td><em>te</em></td>
                <td><em>Tú te lavas.</em></td>
                <td>Tu te lavas.</td>
              </tr>
              <tr>
                <td>él / ella / usted</td>
                <td><em>se</em></td>
                <td><em>Ella se lava.</em></td>
                <td>Ela se lava.</td>
              </tr>
              <tr>
                <td>nosotros / nosotras</td>
                <td><em>nos</em></td>
                <td><em>Nosotros nos lavamos.</em></td>
                <td>Nós nos lavamos.</td>
              </tr>
              <tr>
                <td>vosotros / vosotras</td>
                <td><em>os</em></td>
                <td><em>Vosotros os laváis.</em></td>
                <td>Vós vos laveis.</td>
              </tr>
              <tr>
                <td>ellos / ellas / ustedes</td>
                <td><em>se</em></td>
                <td><em>Ellos se lavan.</em></td>
                <td>Eles se lavam.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Uso do <em>se</em> impessoal:</strong> Em espanhol, <em>se</em> também é usado para expressar ações impessoais ou passivas, equivalendo ao "se" em Português: <em>Se venden apartamentos</em> (Vendem-se apartamentos / Apartamentos à venda); <em>Se habla español aquí</em> (Fala-se espanhol aqui). Esse uso é muito frequente em textos escritos e pode aparecer no ENEM.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Possessivos</span>
        <h2>5. Pronomes e adjetivos possessivos</h2>
        <p>
          Em espanhol, os possessivos se dividem em duas formas: as formas <strong>átonas</strong> (ou apocopadas), que aparecem antes do substantivo e funcionam como adjetivos (<em>mi libro</em> — meu livro), e as formas <strong>tônicas</strong>, que aparecem após o substantivo ou sozinhas como pronomes verdadeiros (<em>el libro mío</em> — o livro meu / <em>el mío</em> — o meu). Essa distinção é diferente do Português brasileiro, onde geralmente usamos apenas uma forma ("meu livro" / "o meu livro").
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Forma átona (antes do subst.)</th>
                <th>Forma tônica (após subst. ou sozinha)</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>yo</td>
                <td><em>mi / mis</em></td>
                <td><em>mío / mía / míos / mías</em></td>
                <td><em>mi casa</em> / <em>la casa es mía</em></td>
              </tr>
              <tr>
                <td>tú</td>
                <td><em>tu / tus</em></td>
                <td><em>tuyo / tuya / tuyos / tuyas</em></td>
                <td><em>tu libro</em> / <em>el libro es tuyo</em></td>
              </tr>
              <tr>
                <td>él / ella / usted</td>
                <td><em>su / sus</em></td>
                <td><em>suyo / suya / suyos / suyas</em></td>
                <td><em>su coche</em> / <em>el coche es suyo</em></td>
              </tr>
              <tr>
                <td>nosotros</td>
                <td><em>nuestro / nuestra / nuestros / nuestras</em></td>
                <td><em>nuestro / nuestra / nuestros / nuestras</em></td>
                <td><em>nuestra escuela</em></td>
              </tr>
              <tr>
                <td>vosotros</td>
                <td><em>vuestro / vuestra / vuestros / vuestras</em></td>
                <td><em>vuestro / vuestra / vuestros / vuestras</em></td>
                <td><em>vuestra ciudad</em></td>
              </tr>
              <tr>
                <td>ellos / ellas / ustedes</td>
                <td><em>su / sus</em></td>
                <td><em>suyo / suya / suyos / suyas</em></td>
                <td><em>sus ideas</em> / <em>las ideas son suyas</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Cuidado com <em>su/sus</em>:</strong> Em espanhol, <em>su</em> pode se referir a "seu" (de ele), "sua" (de ela), "seu" (de você — usted), "de eles" ou "de ustedes". Para evitar ambiguidade, usa-se a construção com preposição: <em>el libro de él</em> (o livro dele) / <em>el libro de ella</em> (o livro dela). Em textos do ENEM, o contexto sempre esclarece a referência.
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Diagrama dos possessivos átonos e tônicos em espanhol">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="26" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Possessivos em Espanhol: Átono vs. Tônico</text>

            {/* Átono */}
            <rect x="30" y="42" width="300" height="30" rx="7" fill="#1e40af" />
            <text x="180" y="62" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">FORMA ÁTONA (antes do nome)</text>

            <rect x="30" y="78" width="300" height="26" rx="5" fill="#dbeafe" />
            <text x="180" y="96" textAnchor="middle" fill="#1e3a8a" fontSize="12">mi libro — tu casa — su perro</text>

            <rect x="30" y="110" width="300" height="26" rx="5" fill="#bfdbfe" />
            <text x="180" y="128" textAnchor="middle" fill="#1e3a8a" fontSize="12">nuestro país — vuestro equipo</text>

            <rect x="30" y="142" width="300" height="26" rx="5" fill="#dbeafe" />
            <text x="180" y="160" textAnchor="middle" fill="#1e3a8a" fontSize="12">Não varia em gênero: mi (não mia)</text>

            <text x="180" y="195" textAnchor="middle" fill="#6b7280" fontSize="11">Uso: indica posse simples</text>

            {/* Tônico */}
            <rect x="370" y="42" width="300" height="30" rx="7" fill="#065f46" />
            <text x="520" y="62" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">FORMA TÔNICA (após o nome)</text>

            <rect x="370" y="78" width="300" height="26" rx="5" fill="#dcfce7" />
            <text x="520" y="96" textAnchor="middle" fill="#065f46" fontSize="12">el libro mío — la casa tuya</text>

            <rect x="370" y="110" width="300" height="26" rx="5" fill="#bbf7d0" />
            <text x="520" y="128" textAnchor="middle" fill="#065f46" fontSize="12">Ese libro es mío — pronome sozinho</text>

            <rect x="370" y="142" width="300" height="26" rx="5" fill="#dcfce7" />
            <text x="520" y="160" textAnchor="middle" fill="#065f46" fontSize="12">Varia em gênero/número: mío/mía/míos/mías</text>

            <text x="520" y="195" textAnchor="middle" fill="#6b7280" fontSize="11">Uso: ênfase ou predicado nominal</text>
          </svg>
          <figcaption>Possessivos átonos antecedem o substantivo e não variam em gênero. Possessivos tônicos seguem o substantivo e concordam em gênero e número.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Demonstrativos</span>
        <h2>6. Pronomes e adjetivos demonstrativos</h2>
        <p>
          Os <strong>demonstrativos</strong> (demostrativos) indicam a distância entre o falante, o interlocutor e o objeto referido. Em espanhol, há três graus de distância — um a mais que no Português moderno oral. A série <em>este/esta/esto</em> indica proximidade do falante; <em>ese/esa/eso</em> indica proximidade do interlocutor ou distância média; e <em>aquel/aquella/aquello</em> indica distância de ambos. Essa distinção tripartite é importante para a interpretação de textos narrativos e dialogais no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Distância</th>
                <th>Masc. singular</th>
                <th>Fem. singular</th>
                <th>Masc. plural</th>
                <th>Fem. plural</th>
                <th>Neutro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Próximo ao falante ("este aqui")</td>
                <td><em>este</em></td>
                <td><em>esta</em></td>
                <td><em>estos</em></td>
                <td><em>estas</em></td>
                <td><em>esto</em></td>
              </tr>
              <tr>
                <td>Próximo ao interlocutor ("esse aí")</td>
                <td><em>ese</em></td>
                <td><em>esa</em></td>
                <td><em>esos</em></td>
                <td><em>esas</em></td>
                <td><em>eso</em></td>
              </tr>
              <tr>
                <td>Distante de ambos ("aquele lá")</td>
                <td><em>aquel</em></td>
                <td><em>aquella</em></td>
                <td><em>aquellos</em></td>
                <td><em>aquellas</em></td>
                <td><em>aquello</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Os demonstrativos neutros (<em>esto, eso, aquello</em>) nunca acompanham um substantivo — sempre funcionam como pronomes que se referem a uma ideia, situação ou coisa não especificada: <em>¿Qué es esto?</em> (O que é isso?); <em>Eso es exactamente lo que quería</em> (Isso é exatamente o que eu queria). Compare com o Português, onde também usamos "isso" e "aquilo" de forma similar.
        </p>

        <div className="lesson-highlight">
          <strong>Uso coesivo nos textos:</strong> Em textos escritos, os demonstrativos têm papel fundamental na <strong>coesão referencial</strong>: retomam ou antecipam informações. <em>Este</em> geralmente retoma o elemento mencionado por último (anáfora); <em>aquel</em> retoma o elemento mencionado primeiro. Exemplo: <em>Juan y Pedro llegaron tarde; este traía flores, aquel venía sin nada</em> (este = Pedro — último mencionado; aquel = Juan — primeiro mencionado).
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Interrogativos</span>
        <h2>7. Pronomes e advérbios interrogativos</h2>
        <p>
          Os <strong>interrogativos</strong> introduzem perguntas diretas e indiretas em espanhol e sempre carregam <strong>acento tônico escrito</strong> (tilde) — o que os diferencia dos pronomes relativos homófonos (<em>que</em> relativo vs. <em>qué</em> interrogativo). No ENEM, os interrogativos aparecem em textos dialogais, manchetes jornalísticas com perguntas retóricas e estruturas de perguntas indiretas embutidas em sentenças. Reconhecê-los é crucial para compreender o propósito comunicativo do texto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Interrogativo</th>
                <th>Significado / uso</th>
                <th>Exemplo</th>
                <th>Equivalente em PT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>qué</em></td>
                <td>Pergunta sobre coisa, ideia, definição</td>
                <td><em>¿Qué hora es?</em></td>
                <td>Que / O que</td>
              </tr>
              <tr>
                <td><em>quién / quiénes</em></td>
                <td>Pergunta sobre pessoa (singular / plural)</td>
                <td><em>¿Quién llamó?</em></td>
                <td>Quem</td>
              </tr>
              <tr>
                <td><em>cuál / cuáles</em></td>
                <td>Seleção entre opções; pergunta sobre identidade</td>
                <td><em>¿Cuál prefieres?</em></td>
                <td>Qual / Quais</td>
              </tr>
              <tr>
                <td><em>cuándo</em></td>
                <td>Pergunta sobre tempo</td>
                <td><em>¿Cuándo llegas?</em></td>
                <td>Quando</td>
              </tr>
              <tr>
                <td><em>dónde / adónde</em></td>
                <td>Pergunta sobre lugar (estático / com movimento)</td>
                <td><em>¿Dónde vives?</em></td>
                <td>Onde / Aonde</td>
              </tr>
              <tr>
                <td><em>cómo</em></td>
                <td>Pergunta sobre modo, maneira</td>
                <td><em>¿Cómo estás?</em></td>
                <td>Como</td>
              </tr>
              <tr>
                <td><em>cuánto / cuánta</em></td>
                <td>Pergunta sobre quantidade (concorda em gênero)</td>
                <td><em>¿Cuánto cuesta?</em></td>
                <td>Quanto / Quanta</td>
              </tr>
              <tr>
                <td><em>cuántos / cuántas</em></td>
                <td>Plural de cuánto</td>
                <td><em>¿Cuántos años tienes?</em></td>
                <td>Quantos / Quantas</td>
              </tr>
              <tr>
                <td><em>por qué</em></td>
                <td>Pergunta sobre causa (dois vocábulos)</td>
                <td><em>¿Por qué lloras?</em></td>
                <td>Por que</td>
              </tr>
              <tr>
                <td><em>para qué</em></td>
                <td>Pergunta sobre finalidade</td>
                <td><em>¿Para qué sirve esto?</em></td>
                <td>Para que / Para quê</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong><em>Qué</em> vs. <em>cuál</em>:</strong> Essa é uma das distinções mais cobradas. <em>¿Qué es la libertad?</em> pede uma <strong>definição</strong> (O que é a liberdade?). <em>¿Cuál es tu nombre?</em> pede uma <strong>identificação ou seleção</strong> (Qual é o seu nome?). Em Português, muitas vezes usamos apenas "qual" para ambas as funções, mas em espanhol a distinção é necessária — especialmente antes do verbo <em>ser</em>.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Posição dos Pronomes</span>
        <h2>8. Posição dos pronomes átonos na frase</h2>
        <p>
          A posição dos pronomes átonos (objeto direto, objeto indireto e reflexivos) em relação ao verbo segue regras precisas em espanhol. Compreender essas regras ajuda a identificar referências em textos e a não confundir o sentido de uma frase durante a leitura. No ENEM, frases com pronomes em posição enclítica (após o verbo) são comuns em textos literários e formais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Contexto verbal</th>
                <th>Posição do pronome</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Verbo conjugado</td>
                <td>Antes do verbo (proclítico)</td>
                <td><em>Lo veo todos los días.</em></td>
                <td>Eu o vejo todo dia.</td>
              </tr>
              <tr>
                <td>Infinitivo</td>
                <td>Após o verbo (enclítico) ou antes da perífrase</td>
                <td><em>Quiero verlo / Lo quiero ver.</em></td>
                <td>Quero vê-lo.</td>
              </tr>
              <tr>
                <td>Gerúndio</td>
                <td>Após o gerúndio (enclítico) ou antes da perífrase</td>
                <td><em>Estoy haciéndolo / Lo estoy haciendo.</em></td>
                <td>Estou fazendo isso.</td>
              </tr>
              <tr>
                <td>Imperativo afirmativo</td>
                <td>Após o verbo (enclítico, obrigatório)</td>
                <td><em>¡Dímelo! / ¡Cómetelo!</em></td>
                <td>Diga-me! / Come isso!</td>
              </tr>
              <tr>
                <td>Imperativo negativo</td>
                <td>Antes do verbo (proclítico, obrigatório)</td>
                <td><em>No me lo digas.</em></td>
                <td>Não me diga isso.</td>
              </tr>
              <tr>
                <td>Negação com verbo conjugado</td>
                <td>Entre a negação e o verbo</td>
                <td><em>No lo vi.</em></td>
                <td>Não o vi.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          No imperativo afirmativo com dois pronomes, a ordem é sempre <strong>OI + OD</strong> e o resultado forma uma única palavra: <em>¡Dámelo!</em> (Dê-me isso! = dá + me + lo). Nos demais contextos, quando OI e OD se combinam e o OI é de 3ª pessoa (<em>le/les</em>), ele se converte em <em>se</em>: <em>Se lo dije</em> (Disse-lho / Disse isso a ele).
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Coesão Textual</span>
        <h2>9. Pronomes como mecanismos de coesão no ENEM</h2>
        <p>
          No ENEM, as questões raramente pedem que o candidato identifique um pronome gramaticalmente em isolamento. O que a prova realmente cobra é a capacidade de <strong>rastrear referências pronominais</strong> dentro do texto: entender a que (ou a quem) um pronome se refere. Esse processo chama-se <strong>referência anafórica</strong> (o pronome retoma algo dito antes) ou <strong>catafórica</strong> (o pronome antecipa algo que virá depois). Dominar essa habilidade é o que distingue um leitor proficiente de um leitor superficial.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplo de referência anafórica:</strong> <em>"El presidente firmó el decreto. Él justificó la medida argumentando razones de seguridad."</em> Nesse caso, <em>él</em> retoma anaforicamente <em>el presidente</em>. Em questões do ENEM em Espanhol, pode-se perguntar: "A que se refere o pronome <em>él</em> no segundo período?" — a resposta é o presidente.
        </div>

        <div className="lesson-highlight">
          <strong>Ambiguidade pronominal:</strong> Quando <em>su</em> ou <em>sus</em> aparecem em um texto com dois ou mais referentes possíveis, o leitor precisa usar o contexto para resolver a ambiguidade. Isso é deliberadamente explorado pelo ENEM em questões de interpretação de texto — identifique sempre o referente mais próximo e mais logicamente coerente com o sentido geral do parágrafo.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de referência</th>
                <th>Definição</th>
                <th>Exemplo em espanhol</th>
                <th>Pronome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anafórica</td>
                <td>Retoma algo já mencionado</td>
                <td><em>Laura estudió mucho. Ella aprobó el examen.</em></td>
                <td><em>ella</em> retoma Laura</td>
              </tr>
              <tr>
                <td>Catafórica</td>
                <td>Antecipa algo ainda não dito</td>
                <td><em>Solo pienso en esto: volver a casa.</em></td>
                <td><em>esto</em> antecipa "volver a casa"</td>
              </tr>
              <tr>
                <td>Possessiva</td>
                <td>Indica pertencimento ou relação</td>
                <td><em>El autor y su obra son inseparables.</em></td>
                <td><em>su</em> remete ao autor</td>
              </tr>
              <tr>
                <td>Demonstrativa coesiva</td>
                <td>Retoma ideia do período anterior</td>
                <td><em>Hubo protestas. Esto generó un debate.</em></td>
                <td><em>esto</em> retoma as protestas</td>
              </tr>
              <tr>
                <td>Impessoal com se</td>
                <td>Generaliza sem especificar sujeito</td>
                <td><em>En ese país se come muy bien.</em></td>
                <td><em>se</em> de sujeito genérico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contraste com o Português</span>
        <h2>10. Diferenças e semelhanças com o Português</h2>
        <p>
          Para o candidato brasileiro, compreender onde o espanhol diverge do Português é tão importante quanto identificar as semelhanças. As principais armadilhas envolvem o uso de possessivos (Português: "minha" = Espanhol: <em>mi</em>, não <em>mia</em>), os demonstrativos com três graus (o Português moderno reduziu para dois na língua oral), e os interrogativos com acento (em Espanhol escrito, <em>qué</em> com acento é interrogativo; <em>que</em> sem acento é conjunção ou pronome relativo). Conhecer essas diferenças evita interpretações equivocadas durante a leitura.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Espanhol</th>
                <th>Português</th>
                <th>Diferença / Armadilha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Possessivo átono 1ª sg.</td>
                <td><em>mi / mis</em></td>
                <td>meu / minha / meus / minhas</td>
                <td>Em espanhol, <em>mi</em> não varia em gênero</td>
              </tr>
              <tr>
                <td>Demonstrativo</td>
                <td><em>este / ese / aquel</em></td>
                <td>este / esse / aquele</td>
                <td>Três graus em ambas; espanhol formal ainda distingue os três</td>
              </tr>
              <tr>
                <td>Interrogativo vs. relativo</td>
                <td><em>qué</em> (interrog.) / <em>que</em> (relativo)</td>
                <td>que / o que</td>
                <td>Acento gráfico distingue a função em espanhol</td>
              </tr>
              <tr>
                <td>Pronome sujeito explícito</td>
                <td>Frequentemente omitido</td>
                <td>Frequentemente omitido (PT-BR)</td>
                <td>Quando explícito em espanhol indica ênfase ou contraste</td>
              </tr>
              <tr>
                <td>OD de 3ª pessoa</td>
                <td><em>lo / la / los / las</em></td>
                <td>o / a / os / as</td>
                <td>Mesma função; em espanhol aparece antes do verbo conjugado</td>
              </tr>
              <tr>
                <td>OI de 3ª pessoa</td>
                <td><em>le / les</em> (sem gênero)</td>
                <td>lhe / lhes</td>
                <td>Em espanhol <em>le</em> serve para masc. e fem.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Falso cognato pronominal:</strong> Em Português, "seu" pode ser possessivo informal de 2ª pessoa ("seu livro" = o teu livro). Em espanhol, <em>su</em> é de 3ª pessoa (ele/ela/usted/eles). Para "teu" em espanhol, usa-se <em>tu</em> (sem acento) como possessivo átono. O <em>tú</em> com acento é o pronome sujeito de 2ª pessoa.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Pronome sujeito correto"
          statement={
            <p>
              Qual pronome sujeito completa corretamente a frase a seguir? <em>"___ somos estudiantes de la Universidad de Buenos Aires."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Yo" },
            { letter: "b", text: "Nosotros", correct: true },
            { letter: "c", text: "Ellos" },
            { letter: "d", text: "Tú" },
            { letter: "e", text: "Usted" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>b) Nosotros</strong>. O verbo <em>somos</em> é a forma de 1ª pessoa do plural do verbo <em>ser</em>, que corresponde a "nós somos". Portanto, o pronome sujeito correto é <em>nosotros</em>. <em>Yo</em> corresponderia a <em>soy</em>; <em>ellos</em> corresponderia a <em>son</em>; <em>tú</em> corresponderia a <em>eres</em>; e <em>usted</em> também corresponde a <em>es</em>. Essa questão testa a correspondência entre pronome e desinência verbal — habilidade essencial para identificar o sujeito de frases em espanhol.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificação do possessivo correto"
          statement={
            <p>
              Em qual das alternativas abaixo o possessivo em espanhol está empregado <strong>corretamente</strong>, de acordo com a norma padrão do idioma?
            </p>
          }
          options={[
            { letter: "a", text: <span><em>Mia hermana vive en Madrid.</em></span> },
            { letter: "b", text: <span><em>Tu libro está encima de la mesa.</em> (o livro de você)</span>, correct: true },
            { letter: "c", text: <span><em>Su libros son muy interesantes.</em></span> },
            { letter: "d", text: <span><em>Nuestro amiga llegó tarde.</em></span> },
            { letter: "e", text: <span><em>Vuestras hijo estudia medicina.</em></span> },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>b)</strong>. O possessivo átono <em>tu</em> (sem acento) concorda corretamente com o substantivo masculino singular <em>libro</em>. As demais alternativas apresentam erros: a) <em>Mia</em> não existe — a forma correta é <em>mi</em> (invariável em gênero, diferente do Português "minha"); c) <em>Su libros</em> viola a concordância numérica — deveria ser <em>Sus libros</em>; d) <em>Nuestro amiga</em> viola a concordância de gênero — deveria ser <em>Nuestra amiga</em>; e) <em>Vuestras hijo</em> também viola a concordância — deveria ser <em>Vuestro hijo</em>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Referência anafórica em texto argumentativo"
          statement={
            <div>
              <p>Leia o fragmento de um artigo de opinião publicado em jornal mexicano:</p>
              <p>
                <em>"La educación pública enfrenta desafíos sin precedentes. Los recursos asignados a ella se han reducido en un 30% durante la última década, lo que ha generado una crisis de infraestructura. Esta situación afecta principalmente a los estudiantes de zonas rurales, quienes ya enfrentaban desigualdades históricas. Ellos merecen una respuesta urgente del Estado."</em>
              </p>
              <p>O pronome <em>ellos</em>, no último período, retoma anaforicamente:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Os desafios enfrentados pela educação pública." },
            { letter: "b", text: "Os recursos financeiros reduzidos ao longo da década." },
            { letter: "c", text: "Os estudantes de zonas rurais mencionados no período anterior.", correct: true },
            { letter: "d", text: "As desigualdades históricas citadas no texto." },
            { letter: "e", text: "Os responsáveis pela crise de infraestrutura." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>c)</strong>. O pronome <em>ellos</em> retoma anaforicamente o referente mais próximo e logicamente coerente: <em>los estudiantes de zonas rurales, quienes ya enfrentaban desigualdades históricas</em>. A referência anafórica em espanhol tende a retomar o sujeito ou complemento mais recente que seja sintaticamente compatível com o pronome. Como <em>ellos</em> é masculino plural, corresponde a <em>los estudiantes</em>. As alternativas a), b) e d) não são compatíveis sintaticamente com o pronome <em>ellos</em> — seriam retomados por pronomes como <em>estos</em> ou <em>ellas</em>. A alternativa e) não está mencionada explicitamente no texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Demonstrativos e coesão textual em texto literário"
          statement={
            <div>
              <p>Leia o fragmento do escritor argentino Jorge Luis Borges:</p>
              <p>
                <em>"Aquel hombre que yo fui en la mañana del otro lado de la reja no es el mismo que redacta estas palabras; las vicisitudes de estos tres años son como si las hubiera vivido otro. Aquello que viví, aquello que soñé, ya no me pertenece: pertenece a ese individuo que me precedió y cuyo lenguaje procuro olvidar."</em>
              </p>
              <p>O demonstrativo <em>aquello</em> é empregado duas vezes no trecho para referir-se a:</p>
            </div>
          }
          options={[
            { letter: "a", text: "Ao outro lado da reja, lugar físico mencionado no início do fragmento." },
            { letter: "b", text: "Às vicissitudes dos três anos descritas na primeira parte do trecho." },
            { letter: "c", text: "À linguagem que o narrador procura esquecer ao final do fragmento." },
            { letter: "d", text: "Às experiências e sonhos vividos pelo eu anterior do narrador, percebidos agora como alheios.", correct: true },
            { letter: "e", text: "Ao indivíduo que precedeu o narrador e que é o sujeito do texto." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>d)</strong>. O demonstrativo neutro <em>aquello</em> refere-se a algo abstrato e distante — não a um objeto físico, mas ao conjunto de experiências e sonhos do "eu anterior" do narrador: <em>aquello que viví, aquello que soñé</em> (aquilo que vivi, aquilo que sonhei). O uso de <em>aquello</em> (e não <em>esto</em> ou <em>eso</em>) reforça o distanciamento psicológico que o narrador estabelece em relação ao seu passado — ele enxerga essa vida anterior como pertencente a "outro indivíduo". Esse é um uso literário sofisticado dos demonstrativos, que o ENEM pode cobrar ao pedir a identificação de recursos expressivos e o rastreamento de referências coesivas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Interrogativos e interpretação de manchete jornalística"
          statement={
            <div>
              <p>Leia a manchete e o subtítulo de uma reportagem publicada em jornal colombiano:</p>
              <p>
                <em>"¿Por qué los jóvenes latinoamericanos no confían en las instituciones? Un estudio reciente revela que el 67% de los menores de 30 años considera que los gobiernos no representan sus intereses. Los investigadores señalan múltiples causas: corrupción, desigualdad económica y falta de participación política real. ¿Cuál es el papel de las redes sociales en esta desconfianza creciente?"</em>
              </p>
              <p>Com base no uso dos interrogativos no texto, é correto afirmar que:</p>
            </div>
          }
          options={[
            { letter: "a", text: "As perguntas são retóricas e indicam que o texto não apresentará respostas para as questões levantadas." },
            { letter: "b", text: "O uso de qué em '¿Por qué...?' indica uma pergunta sobre a definição de um conceito abstrato." },
            { letter: "c", text: "O interrogativo cuál em '¿Cuál es el papel...?' seleciona entre opções, enquanto por qué introduz a pergunta causal central que norteia toda a reportagem.", correct: true },
            { letter: "d", text: "Os interrogativos por qué e cuál têm o mesmo valor semântico no texto e poderiam ser permutados sem alteração de sentido." },
            { letter: "e", text: "O interrogativo por qué poderia ser substituído por cómo sem alterar a natureza da pergunta formulada na manchete." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>c)</strong>. O interrogativo <em>por qué</em> pergunta sobre <strong>causa</strong> — é a pergunta central que justifica toda a reportagem (por que os jovens não confiam?). Já <em>cuál</em> pede uma <strong>identificação ou seleção</strong> dentro de possibilidades — aqui, qual é o papel específico das redes sociais dentro do fenômeno já descrito. As demais alternativas estão erradas: a) o texto apresenta causas no corpo da reportagem, portanto não são retóricas sem resposta; b) <em>qué</em> sozinho pede definição, mas aqui é <em>por qué</em> que pergunta causa — funções distintas; d) os dois interrogativos têm funções semânticas diferentes e não são intercambiáveis; e) <em>cómo</em> pergunta sobre modo/maneira, não sobre causa — a substituição alteraria completamente o sentido da pergunta.
            </p>
          }
        />

      </section>

    </article>
  );
}
