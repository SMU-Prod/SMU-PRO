"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 10</span>
          <h1>Verbos Regulares no Presente do Indicativo</h1>
          <p>
            O Presente do Indicativo é o tempo verbal mais utilizado na língua
            espanhola e o ponto de partida obrigatório para qualquer estudante.
            Além de descrever ações habituais e fatos do presente, ele é
            empregado para enunciar verdades universais, narrar eventos históricos
            com vivacidade (presente histórico) e indicar ações futuras com
            marcador temporal. Para o ENEM, saber reconhecer e compreender
            verbos conjugados no presente — especialmente em textos literários
            e jornalísticos — é fundamental. Neste capítulo você aprenderá a
            conjugação completa dos verbos regulares das três conjugações
            (-AR, -ER, -IR) e os principais contextos de uso.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes sujeito</span>
        <h2>1. Pronomes pessoais sujeito em espanhol</h2>
        <p>
          Em espanhol, os pronomes sujeito são <strong>opcionais</strong>, pois
          a desinência verbal já indica a pessoa gramatical. Eles são usados
          para ênfase, contraste ou clareza. Uma diferença importante em relação
          ao português: o espanhol tem dois pronomes para a segunda pessoa
          — <em>tú</em> (informal) e <em>usted</em> (formal, que conjuga o
          verbo na 3ª pessoa). Na Espanha existe ainda a segunda pessoa do
          plural <em>vosotros/as</em>, ausente no espanhol latino-americano,
          onde se usa apenas <em>ustedes</em>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Espanhol (Espanha)</th>
                <th>Espanhol (América Latina)</th>
                <th>Equivalente português</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1ª sing.</td><td>yo</td><td>yo</td><td>eu</td></tr>
              <tr><td>2ª sing. informal</td><td>tú</td><td>tú / vos*</td><td>tu / você</td></tr>
              <tr><td>2ª sing. formal</td><td>usted (Ud.)</td><td>usted (Ud.)</td><td>o senhor / a senhora</td></tr>
              <tr><td>3ª sing.</td><td>él / ella</td><td>él / ella</td><td>ele / ela</td></tr>
              <tr><td>1ª plural</td><td>nosotros/as</td><td>nosotros/as</td><td>nós</td></tr>
              <tr><td>2ª plural informal</td><td>vosotros/as</td><td>(não existe)</td><td>vós / vocês</td></tr>
              <tr><td>2ª plural formal</td><td>ustedes (Uds.)</td><td>ustedes (Uds.)</td><td>vocês / os senhores</td></tr>
              <tr><td>3ª plural</td><td>ellos / ellas</td><td>ellos / ellas</td><td>eles / elas</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Voseo:</strong> Em países como Argentina, Uruguai e parte da América
          Central, usa-se <em>vos</em> no lugar de <em>tú</em>. A conjugação do
          voseo no presente tem formas específicas: <em>vos hablás, vos comés,
          vos vivís</em>. O ENEM ocasionalmente apresenta textos com <em>vos</em>,
          especialmente de autores argentinos.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos -AR</span>
        <h2>2. Conjugação dos verbos regulares em -AR</h2>
        <p>
          Os verbos da primeira conjugação terminam em <em>-ar</em> no
          infinitivo. São os mais numerosos em espanhol. Para conjugá-los
          no presente, retira-se o infinitivo e adicionam-se as terminações
          abaixo. O modelo é <em>hablar</em> (falar).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Terminação</th>
                <th>hablar</th>
                <th>trabajar</th>
                <th>estudiar</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><strong>-o</strong></td><td>hablo</td><td>trabajo</td><td>estudio</td></tr>
              <tr><td>tú</td><td><strong>-as</strong></td><td>hablas</td><td>trabajas</td><td>estudias</td></tr>
              <tr><td>él/ella/Ud.</td><td><strong>-a</strong></td><td>habla</td><td>trabaja</td><td>estudia</td></tr>
              <tr><td>nosotros/as</td><td><strong>-amos</strong></td><td>hablamos</td><td>trabajamos</td><td>estudiamos</td></tr>
              <tr><td>vosotros/as</td><td><strong>-áis</strong></td><td>habláis</td><td>trabajáis</td><td>estudiáis</td></tr>
              <tr><td>ellos/Uds.</td><td><strong>-an</strong></td><td>hablan</td><td>trabajan</td><td>estudian</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Outros verbos regulares em -AR muito comuns: <em>escuchar</em> (ouvir),
          <em>mirar</em> (olhar), <em>caminar</em> (caminhar), <em>comprar</em> (comprar),
          <em>llegar</em> (chegar), <em>necesitar</em> (precisar), <em>usar</em> (usar),
          <em>terminar</em> (terminar), <em>preguntar</em> (perguntar), <em>ayudar</em> (ajudar).
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos -ER</span>
        <h2>3. Conjugação dos verbos regulares em -ER</h2>
        <p>
          Os verbos da segunda conjugação terminam em <em>-er</em> no infinitivo.
          Suas terminações são diferentes das de -AR, especialmente nas pessoas
          <em>tú</em> (-es), <em>nosotros</em> (-emos) e <em>vosotros</em> (-éis).
          O modelo é <em>comer</em> (comer).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Terminação</th>
                <th>comer</th>
                <th>beber</th>
                <th>leer</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><strong>-o</strong></td><td>como</td><td>bebo</td><td>leo</td></tr>
              <tr><td>tú</td><td><strong>-es</strong></td><td>comes</td><td>bebes</td><td>lees</td></tr>
              <tr><td>él/ella/Ud.</td><td><strong>-e</strong></td><td>come</td><td>bebe</td><td>lee</td></tr>
              <tr><td>nosotros/as</td><td><strong>-emos</strong></td><td>comemos</td><td>bebemos</td><td>leemos</td></tr>
              <tr><td>vosotros/as</td><td><strong>-éis</strong></td><td>coméis</td><td>bebéis</td><td>leéis</td></tr>
              <tr><td>ellos/Uds.</td><td><strong>-en</strong></td><td>comen</td><td>beben</td><td>leen</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Outros verbos regulares em -ER: <em>correr</em> (correr), <em>vender</em>
          (vender), <em>aprender</em> (aprender), <em>comprender</em> (compreender),
          <em>responder</em> (responder), <em>depender</em> (depender),
          <em>prometer</em> (prometer), <em>meter</em> (meter/colocar).
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos -IR</span>
        <h2>4. Conjugação dos verbos regulares em -IR</h2>
        <p>
          Os verbos da terceira conjugação terminam em <em>-ir</em> no infinitivo.
          Suas terminações são quase idênticas às dos verbos -ER, com diferença
          apenas em <em>nosotros</em> (-imos) e <em>vosotros</em> (-ís).
          O modelo é <em>vivir</em> (viver).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Terminação</th>
                <th>vivir</th>
                <th>escribir</th>
                <th>partir</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><strong>-o</strong></td><td>vivo</td><td>escribo</td><td>parto</td></tr>
              <tr><td>tú</td><td><strong>-es</strong></td><td>vives</td><td>escribes</td><td>partes</td></tr>
              <tr><td>él/ella/Ud.</td><td><strong>-e</strong></td><td>vive</td><td>escribe</td><td>parte</td></tr>
              <tr><td>nosotros/as</td><td><strong>-imos</strong></td><td>vivimos</td><td>escribimos</td><td>partimos</td></tr>
              <tr><td>vosotros/as</td><td><strong>-ís</strong></td><td>vivís</td><td>escribís</td><td>partís</td></tr>
              <tr><td>ellos/Uds.</td><td><strong>-en</strong></td><td>viven</td><td>escriben</td><td>parten</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo das conjugações</span>
        <h2>5. Tabela comparativa das três conjugações</h2>
        <p>
          Observe como as terminações se relacionam entre si. O padrão
          <em> -o</em> para <em>yo</em> é comum às três conjugações e é um
          ponto de partida seguro. As maiores diferenças aparecem em
          <em> nosotros</em> e <em>vosotros</em>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Tabela visual comparativa das terminações das três conjugações no presente">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            {/* Cabeçalhos */}
            <rect x="10" y="10" width="100" height="30" rx="4" fill="#1f2937" />
            <text x="60" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Pessoa</text>
            <rect x="120" y="10" width="160" height="30" rx="4" fill="#1e40af" />
            <text x="200" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">-AR (hablar)</text>
            <rect x="290" y="10" width="160" height="30" rx="4" fill="#065f46" />
            <text x="370" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">-ER (comer)</text>
            <rect x="460" y="10" width="230" height="30" rx="4" fill="#92400e" />
            <text x="575" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">-IR (vivir)</text>
            {/* Linhas */}
            {[
              { p: "yo", ar: "hablo", er: "como", ir: "vivo", y: 60 },
              { p: "tú", ar: "hablas", er: "comes", ir: "vives", y: 90 },
              { p: "él/ella", ar: "habla", er: "come", ir: "vive", y: 120 },
              { p: "nosotros", ar: "hablamos", er: "comemos", ir: "vivimos", y: 150 },
              { p: "vosotros", ar: "habláis", er: "coméis", ir: "vivís", y: 180 },
              { p: "ellos", ar: "hablan", er: "comen", ir: "viven", y: 210 },
            ].map((row) => (
              <g key={row.y}>
                <rect x="10" y={row.y - 18} width="100" height="28" rx="3" fill={row.y % 60 === 0 ? "#e5e7eb" : "#f3f4f6"} />
                <text x="60" y={row.y} textAnchor="middle" fontSize="11" fill="#1f2937">{row.p}</text>
                <text x="200" y={row.y} textAnchor="middle" fontSize="12" fill="#1e40af" fontStyle="italic">{row.ar}</text>
                <text x="370" y={row.y} textAnchor="middle" fontSize="12" fill="#065f46" fontStyle="italic">{row.er}</text>
                <text x="575" y={row.y} textAnchor="middle" fontSize="12" fill="#92400e" fontStyle="italic">{row.ir}</text>
              </g>
            ))}
          </svg>
          <figcaption>Comparativo visual das terminações do Presente do Indicativo para as três conjugações regulares.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Usos do presente</span>
        <h2>6. Usos do Presente do Indicativo</h2>
        <p>
          O Presente do Indicativo em espanhol tem uma gama de usos que vai
          além de descrever o "agora". Reconhecer esses usos em diferentes
          contextos textuais é essencial para o ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Fato habitual</h3>
            <p><em>Siempre desayuno café con leche.</em><br />= Sempre tomo café com leite.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Verdade universal</h3>
            <p><em>El agua hierve a 100 grados.</em><br />= A água ferve a 100 graus.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Presente histórico</h3>
            <p><em>En 1492, Colón llega a América.</em><br />= (narração vívida do passado)</p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>Futuro próximo</h3>
            <p><em>Mañana viajo a Chile.</em><br />= Amanhã viajo para o Chile.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Presente histórico:</strong> Em textos literários e jornalísticos,
          o presente é frequentemente usado para narrar eventos passados com maior
          vivacidade: <em>"En 1810, los patriotas declaran la independencia y el
          pueblo celebra en las calles."</em> Este recurso estilístico é comum em
          textos do ENEM e pode confundir o leitor que espera o passado.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Espanha vs. América Latina</span>
        <h2>7. Diferenças entre o espanhol peninsular e o latino-americano</h2>
        <p>
          O ENEM apresenta textos de diversas variantes do espanhol. A principal
          diferença gramatical no Presente do Indicativo diz respeito ao uso de
          <em> vosotros</em> (Espanha) vs. <em>ustedes</em> (América Latina) para
          a segunda pessoa do plural. Em termos de conjugação, isso significa
          terminações diferentes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Contexto</th>
                <th>Espanha (vosotros)</th>
                <th>América Latina (ustedes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2ª pessoa plural</td>
                <td><em>vosotros habláis, coméis, vivís</em></td>
                <td><em>ustedes hablan, comen, viven</em></td>
              </tr>
              <tr>
                <td>Forma imperativa (afirm.)</td>
                <td><em>¡hablad! ¡comed! ¡vivid!</em></td>
                <td><em>¡hablen! ¡coman! ¡vivan!</em></td>
              </tr>
              <tr>
                <td>Pronome reflexivo</td>
                <td><em>vosotros os laváis</em></td>
                <td><em>ustedes se lavan</em></td>
              </tr>
              <tr>
                <td>Pronome objeto</td>
                <td><em>os digo</em></td>
                <td><em>les digo</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> Ao ver <em>vosotros</em> em um texto, saiba que
          é espanhol peninsular (Espanha). Ao ver apenas <em>ustedes</em> para o plural,
          é espanhol latino-americano. Essa diferença não afeta o significado das
          alternativas — o que importa é compreender o conteúdo, não a variante.
          A prova respeita ambas as formas como igualmente corretas.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alterações fonéticas</span>
        <h2>8. Alterações fonéticas e ortográficas na conjugação</h2>
        <p>
          Alguns verbos considerados "regulares" apresentam pequenas alterações
          ortográficas para preservar a pronúncia original do radical. Estes não
          são propriamente irregulares em seu paradigma, mas exigem ajuste gráfico.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de alteração</th>
                <th>Verbo modelo</th>
                <th>Conjugação afetada</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-ger/-gir → -jo na 1ª pessoa</td>
                <td>coger, dirigir</td>
                <td>1ª pessoa sing.</td>
                <td><em>cojo, dirijo</em></td>
              </tr>
              <tr>
                <td>-guir → -go/-go</td>
                <td>seguir, distinguir</td>
                <td>1ª pessoa sing.</td>
                <td><em>sigo, distingo</em></td>
              </tr>
              <tr>
                <td>-cer/-cir → -zco</td>
                <td>conocer, producir</td>
                <td>1ª pessoa sing.</td>
                <td><em>conozco, produzco</em></td>
              </tr>
              <tr>
                <td>vogal + er → y na 1ª/3ª</td>
                <td>leer, creer</td>
                <td>3ª sing. e 3ª plural pretérito</td>
                <td><em>leyó, creyó</em> (em outras formas)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Conjugação regular em -AR"
          statement={
            <p>
              Escolha a conjugação correta do verbo <em>trabajar</em> para
              completar a frase:<br />
              <em>"Nosotros ___ en una empresa multinacional."</em>
            </p>
          }
          options={[
            { letter: "a", text: "trabajamos", correct: true },
            { letter: "b", text: "trabajan" },
            { letter: "c", text: "trabajáis" },
            { letter: "d", text: "trabaja" },
          ]}
          resolution={
            <p>
              Resposta: <strong>a) trabajamos</strong>. O sujeito
              <em> nosotros</em> exige a terminação <em>-amos</em> para
              verbos da primeira conjugação (-AR): <em>trabaj- + amos =
              trabajamos</em>. A opção b (<em>trabajan</em>) seria para
              <em>ellos/ustedes</em>; a opção c (<em>trabajáis</em>) para
              <em>vosotros</em>; a opção d (<em>trabaja</em>) para
              <em>él/ella/usted</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Diferença entre -ER e -IR"
          statement={
            <p>
              Qual das conjugações abaixo está <strong>incorreta</strong>?
            </p>
          }
          options={[
            { letter: "a", text: "yo como (comer)" },
            { letter: "b", text: "ellos viven (vivir)" },
            { letter: "c", text: "nosotros bebemos (beber)" },
            { letter: "d", text: "nosotros vivemos (vivir)", correct: true },
          ]}
          resolution={
            <p>
              Resposta: <strong>d) nosotros vivemos</strong> está incorreta.
              Os verbos em <em>-IR</em> têm a terminação <em>-imos</em> para
              <em>nosotros</em> (não <em>-emos</em>): a forma correta é
              <em> nosotros vivimos</em>. Esse é um erro típico causado por
              interferência do português ("nós vivemos") ou por confusão com
              a terminação dos verbos em -ER (<em>nosotros comemos</em>).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Uso do presente histórico"
          statement={
            <p>
              Leia o trecho de um texto histórico em espanhol:<br />
              <em>"El 25 de mayo de 1810, los porteños se reúnen en la Plaza
              Mayor. Deciden formar una junta de gobierno y deponen al virrey.
              La noticia se extiende rápidamente por todo el territorio."</em><br />
              O uso do Presente do Indicativo neste texto tem a função de:
            </p>
          }
          options={[
            { letter: "a", text: "Indicar que os eventos descritos ainda estão ocorrendo." },
            { letter: "b", text: "Narrar eventos passados com maior vivacidade e imersão, recurso chamado presente histórico.", correct: true },
            { letter: "c", text: "Expressar incerteza sobre a veracidade dos fatos históricos narrados." },
            { letter: "d", text: "Indicar que os eventos ocorrerão no futuro próximo." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O <strong>presente histórico</strong>
              (ou presente narrativo) é um recurso retórico muito comum em
              textos históricos, literários e jornalísticos. O autor usa o
              presente para narrar eventos do passado, criando um efeito de
              imersão e vivacidade na narração. O contexto temporal (<em>El 25
              de mayo de 1810</em>) deixa claro que os eventos são passados.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Identificação de sujeito e verbo em texto"
          statement={
            <p>
              Leia o trecho: <em>"En las ciudades latinoamericanas, millones
              de personas viven sin acceso a servicios básicos. Las familias
              más pobres trabajan en empleos informales y apenas sobreviven
              con lo que ganan."</em><br />
              Qual dos verbos sublinhados está conjugado na 3ª pessoa do plural?
            </p>
          }
          options={[
            { letter: "a", text: "viven, trabajan, sobreviven e ganan — todos estão na 3ª pessoa do plural.", correct: true },
            { letter: "b", text: "Apenas viven está na 3ª pessoa do plural." },
            { letter: "c", text: "trabajan e ganan estão no singular." },
            { letter: "d", text: "sobreviven está no singular porque o sujeito é implícito." },
          ]}
          resolution={
            <p>
              Resposta: <strong>a)</strong>. Todos os verbos do trecho estão
              na 3ª pessoa do plural. Os sujeitos são coletivos plurais:
              <em> millones de personas</em> (viven), <em>las familias</em>
              (trabajan, sobreviven) e a forma <em>ganan</em> cujo sujeito
              implícito são as mesmas famílias. A terminação <em>-an</em>
              (para verbos -AR) e <em>-en</em> (para verbos -ER/-IR) na
              3ª pessoa do plural são facilmente identificáveis.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Vosotros vs. Ustedes"
          statement={
            <p>
              Um texto espanhol diz: <em>"¿A qué hora llegáis vosotros?"</em><br />
              Um texto argentino expressa o mesmo significado como:
            </p>
          }
          options={[
            { letter: "a", text: "¿A qué hora llegamos nosotros?" },
            { letter: "b", text: "¿A qué hora llegan ustedes?", correct: true },
            { letter: "c", text: "¿A qué hora llegas tú?" },
            { letter: "d", text: "¿A qué hora llegáis ustedes?" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. Na Espanha, a segunda pessoa do
              plural informal é <em>vosotros</em>, com a terminação <em>-áis</em>
              para verbos -AR: <em>llegáis</em>. Na América Latina, não existe
              <em>vosotros</em> — usa-se <em>ustedes</em> com a terminação
              da 3ª pessoa do plural: <em>llegan</em>. A opção d mistura
              incorretamente a terminação peninsular (<em>-áis</em>) com o
              pronome latino-americano (<em>ustedes</em>).
            </p>
          }
        />
      </section>

    </article>
  );
}
