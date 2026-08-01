"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 19</span>
          <h1>Iluminismo: Liberdade, Direitos e Contrato Social</h1>
          <p>
            O Iluminismo (século XVIII) foi o maior movimento intelectual da Era Moderna. Iluministas
            como Voltaire, Montesquieu, Rousseau e Diderot usaram a razão para criticar o absolutismo,
            a superstição e a intolerância religiosa, lançando as bases das democracias liberais, dos
            direitos humanos e das revoluções americana e francesa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Movimento</span>
        <h2>1. O que foi o Iluminismo?</h2>
        <p>
          O <strong>Iluminismo</strong> (em alemão <em>Aufklärung</em>, em inglês <em>Enlightenment</em>)
          foi um movimento filosófico e cultural que dominou a Europa no século XVIII, chamado por isso
          de "Século das Luzes". Sua ideia central: a <strong>razão</strong> é a luz que ilumina as
          trevas da superstição, do preconceito e do autoritarismo.
        </p>
        <p>
          Immanuel Kant definiu o Iluminismo em seu ensaio de 1784:
        </p>
        <div className="lesson-highlight">
          <h3>Sapere aude!</h3>
          <p>
            "Iluminismo é a saída do ser humano de sua menoridade autoimposta. Menoridade é a incapacidade
            de fazer uso do entendimento sem a direção de outro. [...] <em>Sapere aude!</em> — Tem
            coragem de te servir de teu próprio entendimento!"<br/>
            — Immanuel Kant, <em>Resposta à Pergunta: O que é Iluminismo?</em> (1784)
          </p>
        </div>
        <p>
          As características centrais do iluminismo:
        </p>
        <ul>
          <li><strong>Primado da razão</strong> sobre a tradição e a autoridade religiosa.</li>
          <li><strong>Tolerância religiosa</strong> e crítica ao fanatismo.</li>
          <li><strong>Direitos naturais</strong> do ser humano: liberdade, igualdade, propriedade.</li>
          <li><strong>Progresso:</strong> a história caminha para um futuro melhor pela educação e pela ciência.</li>
          <li><strong>Crítica ao absolutismo</strong> e defesa do governo limitado e representativo.</li>
          <li><strong>Cosmopolitismo:</strong> a humanidade como um todo, além das nações particulares.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Voltaire</span>
        <h2>2. Voltaire (1694–1778): Tolerância e Liberdade de Pensamento</h2>
        <p>
          <strong>François-Marie Arouet</strong>, conhecido como <strong>Voltaire</strong>, foi o
          iluminista mais célebre. Filósofo, dramaturgo e escritor, usou a ironia e o sarcasmo para
          atacar o fanatismo religioso, a intolerância e o absolutismo.
        </p>
        <ul>
          <li>
            <strong>Cândido (1759):</strong> novela filosófica satírica que critica o otimismo
            ingênuo de Leibniz ("este é o melhor dos mundos possíveis") diante de catástrofes como
            o Terremoto de Lisboa (1755).
          </li>
          <li>
            <strong>Tratado sobre a Tolerância (1763):</strong> escrito em defesa de Jean Calas,
            protestante falsamente acusado de matar o filho para impedi-lo de se converter ao
            catolicismo. Voltaire defendeu a tolerância religiosa como princípio fundamental.
          </li>
          <li>
            <strong>"Écrasons l'infâme!"</strong> ("Esmaguemos o infame!"): expressão de Voltaire
            contra o fanatismo religioso e a intolerância institucional.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Montesquieu</span>
        <h2>3. Montesquieu (1689–1755): A Separação dos Poderes</h2>
        <p>
          <strong>Charles-Louis de Secondat, Barão de Montesquieu</strong>, é o teórico da
          <strong> separação dos poderes</strong>. Em <em>O Espírito das Leis</em> (1748), analisou os
          diferentes tipos de governo (república, monarquia, despotismo) e propôs que a liberdade
          política só é possível quando o poder é dividido e cada poder controla os outros.
        </p>
        <p>
          Os três poderes, segundo Montesquieu:
        </p>
        <ul>
          <li><strong>Poder Legislativo:</strong> faz as leis (Parlamento/Congresso).</li>
          <li><strong>Poder Executivo:</strong> aplica e executa as leis (governo/presidente).</li>
          <li><strong>Poder Judiciário:</strong> julga os conflitos com base nas leis (tribunais).</li>
        </ul>
        <p>
          Esse sistema de freios e contrapesos (<em>checks and balances</em>) é o fundamento das
          democracias modernas e está inscrito na Constituição dos EUA (1787) e na Constituição
          brasileira de 1988.
        </p>
        <div className="lesson-highlight">
          <h3>Montesquieu na CF/88</h3>
          <p>
            O artigo 2º da Constituição Federal do Brasil (1988) declara: "São Poderes da União,
            independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário." Isso
            é diretamente derivado de Montesquieu. O ENEM frequentemente relaciona esse artigo ao
            pensamento iluminista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rousseau</span>
        <h2>4. Rousseau (1712–1778): Vontade Geral e Soberania Popular</h2>
        <p>
          <strong>Jean-Jacques Rousseau</strong> é o mais radical dos iluministas — e o mais
          contraditório. Em <em>O Contrato Social</em> (1762), propõe que a autoridade política
          legítima deriva da <strong>vontade geral</strong> (<em>volonté générale</em>) do povo.
        </p>
        <p>
          Conceitos centrais de Rousseau:
        </p>
        <ul>
          <li>
            <strong>Estado de natureza:</strong> o ser humano é naturalmente bom, livre e feliz.
            A corrupção vem da civilização e da propriedade privada.
          </li>
          <li>
            <strong>Vontade geral:</strong> não é a soma das vontades individuais (vontade de todos),
            mas o bem comum que todos deveriam querer se fossem racionais e desinteressados.
          </li>
          <li>
            <strong>Soberania popular:</strong> a soberania pertence ao povo e é inalienável —
            não pode ser delegada definitivamente a representantes.
          </li>
          <li>
            <strong>Crítica à propriedade:</strong> "O primeiro que, tendo cercado um terreno, teve
            a ideia de dizer 'isto é meu' e encontrou pessoas simples o suficiente para acreditar
            nele — esse foi o verdadeiro fundador da sociedade civil."
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Encyclopédie</span>
        <h2>5. A Encyclopédie: O Grande Projeto Iluminista</h2>
        <p>
          A <em>Encyclopédie, ou Dicionário Razoado das Ciências, das Artes e dos Ofícios</em>
          (1751–1772), editada por <strong>Denis Diderot</strong> e <strong>Jean le Rond
          D'Alembert</strong>, foi o maior projeto editorial do século XVIII. Com 28 volumes, reuniu
          os conhecimentos científicos, filosóficos e técnicos da época.
        </p>
        <p>
          Seu objetivo: <em>mudar a maneira de pensar das pessoas</em> — substituir a autoridade
          da tradição e da Igreja pela razão, a observação e a experiência. Os verbetes eram escritos
          por iluministas como Voltaire, Rousseau, Montesquieu, Holbach e Condorcet.
        </p>
        <p>
          A Encyclopédie foi proibida pela Igreja e censurada pelo governo francês — o que aumentou
          sua difusão e seu impacto. É o símbolo máximo do projeto iluminista de disseminação do saber.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Impactos Históricos</span>
        <h2>6. Impactos do Iluminismo: Revoluções e Direitos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Ano</th>
                <th>Influência Iluminista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Independência dos EUA</td>
                <td>1776</td>
                <td>Locke (direitos naturais); Montesquieu (separação dos poderes)</td>
              </tr>
              <tr>
                <td>Revolução Francesa</td>
                <td>1789</td>
                <td>Rousseau (vontade geral); Voltaire (liberdade); Montesquieu (poderes)</td>
              </tr>
              <tr>
                <td>Independência do Brasil</td>
                <td>1822</td>
                <td>Ideias iluministas via Universidade de Coimbra reformada</td>
              </tr>
              <tr>
                <td>Declaração Universal dos DH</td>
                <td>1948</td>
                <td>Locke (direitos naturais); Iluminismo (dignidade humana universal)</td>
              </tr>
              <tr>
                <td>Constituição Federal do Brasil</td>
                <td>1988</td>
                <td>Montesquieu (Art. 2º); Rousseau (soberania popular); Locke (direitos)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Árvore iluminista">
            <rect x="10" y="10" width="500" height="180" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">A Árvore Iluminista: Raízes e Frutos</text>
            {/* Raízes */}
            <text x="80" y="165" textAnchor="middle" fontSize="10" fill="#ca8a04">Locke</text>
            <text x="160" y="165" textAnchor="middle" fontSize="10" fill="#ca8a04">Newton</text>
            <text x="240" y="165" textAnchor="middle" fontSize="10" fill="#ca8a04">Descartes</text>
            <text x="320" y="165" textAnchor="middle" fontSize="10" fill="#ca8a04">Bacon</text>
            <text x="400" y="165" textAnchor="middle" fontSize="10" fill="#ca8a04">Spinoza</text>
            {/* Tronco */}
            <rect x="225" y="85" width="50" height="60" fill="#92400e" rx="4"/>
            <text x="250" y="118" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">RAZÃO</text>
            {/* Galhos/Frutos */}
            <text x="80" y="70" textAnchor="middle" fontSize="10" fill="#16a34a">Tolerância</text>
            <text x="160" y="55" textAnchor="middle" fontSize="10" fill="#16a34a">Liberdade</text>
            <text x="250" y="45" textAnchor="middle" fontSize="10" fill="#16a34a">Democracia</text>
            <text x="340" y="55" textAnchor="middle" fontSize="10" fill="#16a34a">Direitos DH</text>
            <text x="420" y="70" textAnchor="middle" fontSize="10" fill="#16a34a">Ciência</text>
            {/* Linhas */}
            <line x1="250" y1="85" x2="80" y2="75" stroke="#92400e" strokeWidth="1.5"/>
            <line x1="250" y1="85" x2="160" y2="62" stroke="#92400e" strokeWidth="1.5"/>
            <line x1="250" y1="85" x2="250" y2="52" stroke="#92400e" strokeWidth="1.5"/>
            <line x1="250" y1="85" x2="340" y2="62" stroke="#92400e" strokeWidth="1.5"/>
            <line x1="250" y1="85" x2="420" y2="75" stroke="#92400e" strokeWidth="1.5"/>
            <line x1="250" y1="145" x2="80" y2="158" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="250" y1="145" x2="160" y2="158" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="250" y1="145" x2="240" y2="158" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="250" y1="145" x2="320" y2="158" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="250" y1="145" x2="400" y2="158" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3,3"/>
          </svg>
          <figcaption>A árvore iluminista: raízes nos filósofos modernos, tronco na razão, frutos nas conquistas democráticas.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Iluminismo no Brasil</span>
        <h2>7. Iluminismo no Brasil: Independência, Abolição e Republicanismo</h2>
        <p>
          As ideias iluministas chegaram ao Brasil por vias diversas — livros contrabandeados, estudantes
          na Universidade de Coimbra reformada pelo Marquês de Pombal, e intelectuais que leram Rousseau,
          Voltaire e Montesquieu. Elas inspiraram movimentos que moldaram a história nacional:
        </p>
        <ul>
          <li>
            <strong>Inconfidência Mineira (1789):</strong> Tiradentes e os conjurados leram Montesquieu
            e foram inspirados pela independência americana. Queriam a separação do Brasil de Portugal.
            "Libertas quae sera tamen" ("Liberdade ainda que tardia") é o lema de Minas Gerais —
            de origem latina, mas com espírito iluminista.
          </li>
          <li>
            <strong>Conjuração Baiana (1798):</strong> mais radical, com influência da Revolução Francesa.
            Os "Alfaiates" queriam liberdade, igualdade e abolição da escravidão.
          </li>
          <li>
            <strong>Independência (1822):</strong> as elites ilustradas brasileiras usaram o vocabulário
            iluminista — soberania, direitos, nação — para legitimar a separação de Portugal.
          </li>
          <li>
            <strong>Abolicionismo e Republicanismo (séc. XIX):</strong> José Bonifácio, Joaquim Nabuco
            e o positivismo de Augusto Comte (inspirado no Iluminismo) influenciaram a abolição (1888)
            e a Proclamação da República (1889).
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>O Iluminismo e a Constituição de 1988</h3>
          <p>
            A Constituição Federal brasileira de 1988 carrega a herança iluminista em seus princípios
            fundamentais: a soberania popular (Art. 1º), a separação dos poderes (Art. 2º), os direitos
            e garantias individuais (Art. 5º) e a dignidade da pessoa humana. O ENEM frequentemente
            pede que o candidato relacione esses artigos às suas fontes filosóficas iluministas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crítica ao Iluminismo</span>
        <h2>8. Crítica ao Iluminismo: As Sombras das Luzes</h2>
        <p>
          O Iluminismo não foi um projeto sem contradições. Pensadores posteriores e movimentos
          históricos revelaram suas sombras:
        </p>
        <ul>
          <li>
            <strong>Escravidão e colonialismo:</strong> iluministas como Voltaire e Locke viviam em
            sociedades escravistas — Locke até investiu em companhias coloniais. O universalismo
            iluminista convivia com a negação da humanidade plena a povos africanos e indígenas.
          </li>
          <li>
            <strong>Exclusão das mulheres:</strong> Olympe de Gouges (Declaração dos Direitos da Mulher
            e da Cidadã, 1791) denunciou que os "Direitos do Homem" excluíam as mulheres. Mary
            Wollstonecraft (<em>Vindication of the Rights of Woman</em>, 1792) fez o mesmo.
          </li>
          <li>
            <strong>Dialética do Esclarecimento (Adorno e Horkheimer, 1944):</strong> a razão
            iluminista, ao invés de libertar, gerou o terror das guerras mundiais, o Holocausto e
            a indústria cultural que manipula as massas. A "razão instrumental" — que trata tudo como
            meio para fins — é o reverso sombrio das Luzes.
          </li>
          <li>
            <strong>Romantismo (reação):</strong> o movimento romântico do séc. XIX criticou o
            racionalismo iluminista, valorizando a emoção, a intuição e a cultura nacional.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>O Iluminismo no ENEM: contradições são conteúdo</h3>
          <p>
            O ENEM gosta de questões que pedem ao candidato identificar as <em>contradições</em>
            do Iluminismo — como a defesa dos direitos universais combinada com a escravidão e o
            colonialismo. Conhecer as críticas ao Iluminismo é tão importante quanto conhecer seus
            princípios.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💡</span>
            <h3>Iluminismo</h3>
            <p>Século XVIII. Razão contra superstição. Sapere aude! Progresso pela educação e ciência.</p>
          </div>
          <div className="math-card">
            <span>😄</span>
            <h3>Voltaire</h3>
            <p>Tolerância religiosa. Crítica ao fanatismo. Cândido. "Écrasons l'infâme!"</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Montesquieu</h3>
            <p>Separação dos poderes (Legislativo, Executivo, Judiciário). Base da democracia moderna.</p>
          </div>
          <div className="math-card">
            <span>🌿</span>
            <h3>Rousseau</h3>
            <p>Vontade geral. Soberania popular. Crítica à propriedade. Contrato Social.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Encyclopédie</h3>
            <p>Diderot e D'Alembert. 28 volumes. Democratização do saber. Arma contra a ignorância.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Legado</h3>
            <p>Revolução Francesa, EUA, DH universais, CF/88 brasileira: frutos do Iluminismo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Montesquieu e a Separação dos Poderes"
          statement={<p>Montesquieu propôs em "O Espírito das Leis" a separação dos poderes como garantia da liberdade política. Quais são os três poderes por ele identificados?</p>}
          options={[
            { letter: "a", text: "Legislativo (faz as leis), Executivo (executa as leis) e Judiciário (julga os conflitos).", correct: true },
            { letter: "b", text: "Eclesiástico, Civil e Militar: os três pilares do poder na França do século XVIII." },
            { letter: "c", text: "Monarca, Nobreza e Terceiro Estado: as três ordens do Antigo Regime." },
            { letter: "d", text: "Federal, Estadual e Municipal: os níveis de governo do sistema federativo moderno." },
          ]}
          resolution={<p>Montesquieu identificou em <em>O Espírito das Leis</em> três poderes: <strong>Legislativo</strong> (Parlamento/Congresso — faz as leis), <strong>Executivo</strong> (Governo/Presidente — executa as leis) e <strong>Judiciário</strong> (Tribunais — julga com base nas leis). A separação e o equilíbrio entre eles (freios e contrapesos) é condição da liberdade política. A CF/88 adotou esse modelo no Art. 2º.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Rousseau: Vontade Geral vs. Vontade de Todos"
          statement={<p>Rousseau distinguia "vontade geral" de "vontade de todos". Qual é a diferença essencial?</p>}
          options={[
            { letter: "a", text: "A vontade geral busca o bem comum; a vontade de todos é a soma dos interesses particulares, que podem contradizer o bem comum.", correct: true },
            { letter: "b", text: "A vontade geral é a do rei; a vontade de todos é a da nobreza e do clero juntos." },
            { letter: "c", text: "Não há diferença: para Rousseau, a vontade geral é sempre idêntica à soma das vontades individuais." },
            { letter: "d", text: "A vontade geral é a vontade da maioria; a vontade de todos é a vontade de todo o povo, incluindo minorias." },
          ]}
          resolution={<p>Para Rousseau, a <strong>vontade geral</strong> é a vontade que visa ao bem comum — o que todos deveriam querer se fossem racionais e desinteressados. A <strong>vontade de todos</strong> é a soma das vontades individuais particulares, que frequentemente divergem e se contradizem. A soberania legítima expressa a vontade geral, não a soma de interesses privados. Essa distinção é fundamental para entender o republicanismo de Rousseau.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Kant e o Iluminismo"
          statement={<p>Kant definiu o Iluminismo como "a saída do ser humano de sua menoridade autoimposta". A "menoridade" que Kant critica se refere a:</p>}
          options={[
            { letter: "a", text: "A incapacidade de pensar por si mesmo, dependendo da autoridade de outros (Igreja, tradição, governantes) para guiar o entendimento.", correct: true },
            { letter: "b", text: "A infância cronológica, que impede o ser humano de usar plenamente a razão antes da maturidade." },
            { letter: "c", text: "A condição dos servos e camponeses, que não tinham acesso à educação formal." },
            { letter: "d", text: "A falta de conhecimento matemático e científico, que mantinha a população na superstição." },
          ]}
          resolution={<p>Para Kant, a <strong>menoridade</strong> não é falta de inteligência, mas a escolha de deixar que outros pensem por você — seja a Igreja (que diz o que crer), o governo (que diz o que obedecer) ou os livros (que dizem o que pensar). O Iluminismo é o processo histórico de superação dessa dependência, com o uso público da razão. O lema <em>Sapere aude!</em> (Ouse saber!) resume essa postura de autonomia intelectual.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Iluminismo e Revolução Francesa"
          statement={<p>A Revolução Francesa (1789) proclamou como ideais "Liberdade, Igualdade e Fraternidade". A lema da Declaração dos Direitos do Homem e do Cidadão (1789) afirma que "o princípio de toda soberania reside na nação". Qual filósofo iluminista está mais diretamente expresso nessa afirmação?</p>}
          options={[
            { letter: "a", text: "Jean-Jacques Rousseau, para quem a soberania pertence ao povo e não pode ser alienada a um rei ou aristocracia.", correct: true },
            { letter: "b", text: "Voltaire, que defendia a tolerância religiosa como base da soberania nacional." },
            { letter: "c", text: "Montesquieu, cuja teoria da separação dos poderes é equivalente à soberania nacional." },
            { letter: "d", text: "Diderot, editor da Encyclopédie, que definiu a soberania como o poder da razão coletiva." },
          ]}
          resolution={<p>A afirmação de que "a soberania reside na nação" é diretamente derivada de <strong>Rousseau</strong>: em <em>O Contrato Social</em>, ele afirmava que a soberania pertence ao povo e é inalienável — não pode ser cedida definitivamente a um monarca. Os revolucionários franceses leram Rousseau como seu principal inspirador político. Voltaire e Montesquieu também influenciaram a Revolução, mas é Rousseau quem responde mais diretamente à questão da soberania popular.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Iluminismo e Educação"
          statement={<p>O Iluminismo defendia que a ignorância era a principal causa da opressão, da superstição e do absolutismo. Por isso, iluministas como Diderot e D'Alembert criaram a Encyclopédie para democratizar o conhecimento. Essa perspectiva reflete a crença iluminista de que:</p>}
          options={[
            { letter: "a", text: "A educação e o acesso ao conhecimento são instrumentos de emancipação humana e condição para o exercício pleno da liberdade e da cidadania.", correct: true },
            { letter: "b", text: "O conhecimento deve ser restrito às elites intelectuais, que usarão a razão para guiar as massas ignorantes." },
            { letter: "c", text: "A educação formal é dispensável, pois a razão humana se desenvolve naturalmente sem intervenção." },
            { letter: "d", text: "O progresso científico e tecnológico é nocivo quando está ao alcance de pessoas comuns sem formação filosófica." },
          ]}
          resolution={<p>Um dos pilares do Iluminismo é a crença no <strong>poder emancipatório da educação e do conhecimento</strong>. A Encyclopédie foi criada exatamente para democratizar o saber, tornando acessíveis os conhecimentos científicos, filosóficos e técnicos da época a um público mais amplo. Para os iluministas, a ignorância sustentava o absolutismo e a superstição; a difusão do conhecimento era condição necessária para a liberdade e a cidadania. Essa perspectiva influencia diretamente a ideia moderna de educação pública e universal.</p>}
        />
      </section>
    </article>
  );
}
