"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 23</span>
          <h1>Democracia, Cidadania e Estado de Direito</h1>
          <p>
            A democracia é um dos temas mais recorrentes no ENEM e na história da filosofia política.
            Neste capítulo, exploramos as origens gregas da democracia, seus diferentes modelos, o
            conceito de cidadania ao longo do tempo e os fundamentos do Estado de Direito moderno.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origens</span>
        <h2>1. A Democracia na Grécia Antiga</h2>
        <p>
          A palavra <strong>democracia</strong> vem do grego <em>demos</em> (povo) + <em>kratos</em>{" "}
          (poder/governo): o "governo do povo". Nasceu em Atenas no século V a.C., especialmente sob
          as reformas de <strong>Clístenes</strong> (508 a.C.) e o período de <strong>Péricles</strong>{" "}
          (460–429 a.C.).
        </p>
        <p>
          Os principais espaços da democracia ateniense eram a <strong>ágora</strong> (praça pública
          onde se debatia e comercializava), a <strong>Ecclesia</strong> (assembleia dos cidadãos que
          votava leis) e a <strong>Bulé</strong> (conselho dos 500 que preparava as pautas). O
          princípio da <strong>isonomia</strong> (igualdade perante a lei) era central.
        </p>
        <div className="lesson-highlight">
          <h3>Limitações da democracia ateniense</h3>
          <p>
            A democracia grega era <strong>direta</strong> — os cidadãos votavam pessoalmente — mas
            extremamente excludente: mulheres, escravos e estrangeiros (<em>metecos</em>) estavam
            excluídos. Apenas cerca de 10–15% da população era considerada "cidadã". Platão e
            Aristóteles também criticaram a democracia: Platão a via como caminho para a tirania;
            Aristóteles a classificava como forma "corrompida" de poliarquia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelos</span>
        <h2>2. Tipos de Democracia</h2>
        <p>
          A democracia não é uma forma única. Ao longo da história, desenvolveram-se diferentes
          modelos, cada um com pressupostos filosóficos distintos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Característica central</th>
                <th>Pensadores associados</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Direta</strong></td>
                <td>Cidadãos decidem pessoalmente sobre as leis</td>
                <td>Péricles, Rousseau</td>
                <td>Atenas clássica, plebiscitos</td>
              </tr>
              <tr>
                <td><strong>Representativa</strong></td>
                <td>Elege-se representantes para decidir em nome do povo</td>
                <td>Locke, Montesquieu, Madison</td>
                <td>Brasil, EUA, maioria dos países</td>
              </tr>
              <tr>
                <td><strong>Participativa</strong></td>
                <td>Combina representação com mecanismos de participação direta</td>
                <td>Habermas, Paulo Freire</td>
                <td>Orçamento participativo, conselhos</td>
              </tr>
              <tr>
                <td><strong>Deliberativa</strong></td>
                <td>Decisões legítimas surgem de debate público racional</td>
                <td>Habermas, Rawls</td>
                <td>Conferências nacionais, conselhos setoriais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>3. Modelos Democráticos — Visualização</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Modelos de democracia">
            {/* Central: Democracia */}
            <ellipse cx="250" cy="150" rx="60" ry="35" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="250" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Democracia</text>
            <text x="250" y="162" textAnchor="middle" fontSize="11" fill="#1e40af">governo do povo</text>

            {/* Direta */}
            <ellipse cx="80" cy="70" rx="55" ry="28" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="80" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Direta</text>
            <text x="80" y="81" textAnchor="middle" fontSize="10" fill="#065f46">voto pessoal</text>
            <line x1="135" y1="85" x2="195" y2="130" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Representativa */}
            <ellipse cx="420" cy="70" rx="68" ry="28" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="420" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Representativa</text>
            <text x="420" y="81" textAnchor="middle" fontSize="10" fill="#92400e">elege deputados</text>
            <line x1="355" y1="85" x2="302" y2="130" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Participativa */}
            <ellipse cx="80" cy="240" rx="63" ry="28" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="80" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5b21b6">Participativa</text>
            <text x="80" y="251" textAnchor="middle" fontSize="10" fill="#5b21b6">orçamento direto</text>
            <line x1="138" y1="226" x2="196" y2="178" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>

            {/* Deliberativa */}
            <ellipse cx="420" cy="240" rx="68" ry="28" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="420" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Deliberativa</text>
            <text x="420" y="251" textAnchor="middle" fontSize="10" fill="#9d174d">debate racional</text>
            <line x1="355" y1="226" x2="300" y2="178" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3"/>
          </svg>
          <figcaption>Os quatro principais modelos democráticos e suas características centrais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidadania</span>
        <h2>4. O Conceito de Cidadania: Antiga e Moderna</h2>
        <p>
          A <strong>cidadania antiga</strong> (grega e romana) era um privilégio restrito: pertencia
          a quem nascesse livre, do sexo masculino e de família local. Era essencialmente
          <em> política</em> — o cidadão participava diretamente das decisões da <em>pólis</em>.
          Aristóteles definia o cidadão como aquele que participa do governo e da justiça.
        </p>
        <p>
          A <strong>cidadania moderna</strong> surge com as revoluções burguesas (séculos XVII–XVIII)
          e expande-se gradualmente. T. H. Marshall (1950) identificou três dimensões históricas:
        </p>
        <ul>
          <li>
            <strong>Cidadania civil (século XVIII):</strong> direitos individuais — liberdade de
            expressão, propriedade, contratos, justiça igual.
          </li>
          <li>
            <strong>Cidadania política (século XIX):</strong> direito de votar e ser votado,
            participação nas decisões políticas.
          </li>
          <li>
            <strong>Cidadania social (século XX):</strong> direitos econômicos e sociais — educação,
            saúde, trabalho, previdência.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Cidadania no Brasil (CF/1988)</h3>
          <p>
            A Constituição Federal de 1988 — chamada de "Constituição Cidadã" — ampliou enormemente
            os direitos de cidadania: voto aos 16 anos (facultativo), direitos sociais extensivos,
            proteção de minorias, habeas corpus, mandado de segurança, ação popular e outros
            instrumentos de participação e controle democrático.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado de Direito</span>
        <h2>5. Estado de Direito: Fundamentos Filosóficos</h2>
        <p>
          O <strong>Estado de Direito</strong> (<em>Rechtsstaat</em>, conceito elaborado na Alemanha
          do século XIX) é aquele em que o próprio Estado está submetido à lei — ninguém está acima
          dela, nem os governantes. Seus pilares são:
        </p>
        <ul>
          <li>
            <strong>Legalidade:</strong> toda ação do Estado deve ter amparo legal. Nenhum cidadão
            pode ser punido sem lei prévia.
          </li>
          <li>
            <strong>Separação de poderes</strong> (Montesquieu): Executivo, Legislativo e Judiciário
            independentes e harmônicos, impedindo a concentração de poder.
          </li>
          <li>
            <strong>Direitos fundamentais:</strong> garantias constitucionais que o Estado não pode
            violar (vida, liberdade, igualdade, segurança, propriedade).
          </li>
          <li>
            <strong>Controle judicial:</strong> os atos do poder público podem ser questionados no
            Judiciário.
          </li>
        </ul>
        <p>
          O Estado de Direito se opõe ao <strong>Estado de exceção</strong> (Carl Schmitt) — situação
          em que o governante suspende a lei para lidar com uma crise. Giorgio Agamben analisou como
          o estado de exceção pode tornar-se permanente, ameaçando as democracias contemporâneas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hannah Arendt</span>
        <h2>6. Hannah Arendt: O "Direito a Ter Direitos"</h2>
        <p>
          Hannah Arendt (1906–1975), refugiada do nazismo, analisou o que acontece quando os seres
          humanos perdem a cidadania. Em <em>As Origens do Totalitarismo</em> (1951), ela cunhou a
          expressão <strong>"o direito a ter direitos"</strong>: antes de qualquer direito específico,
          os seres humanos precisam pertencer a uma comunidade política que os reconheça como pessoas.
        </p>
        <p>
          Para Arendt, os apátridas e refugiados — que perderam a cidadania — mostraram que os
          "direitos humanos" proclamados em 1789 e 1948 eram na prática direitos de cidadãos de
          Estados-nação. Sem um Estado que os garantisse, os direitos humanos tornavam-se abstrações.
        </p>
        <div className="lesson-highlight">
          <h3>Vita activa: labor, trabalho e ação</h3>
          <p>
            Em <em>A Condição Humana</em> (1958), Arendt distingue três atividades fundamentais:
            <strong> labor</strong> (manutenção biológica da vida), <strong>trabalho</strong>{" "}
            (fabricação de um mundo durável de objetos) e <strong>ação</strong> (atividade política,
            o que nos torna verdadeiramente humanos, pois se dá entre os homens na esfera pública).
            Para ela, a modernidade desvalorizou a ação política em favor do labor e do trabalho.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contemporaneidade</span>
        <h2>7. Crise Democrática Contemporânea</h2>
        <p>
          Nas décadas recentes, a democracia enfrenta desafios sérios que têm sido objeto de análise
          filosófica e política:
        </p>
        <ul>
          <li>
            <strong>Populismo:</strong> apelo direto ao "povo" contra "elites", com tendência a
            desrespeitar procedimentos democráticos e instituições (Chantal Mouffe, Jan-Werner Müller).
          </li>
          <li>
            <strong>Desinformação e pós-verdade:</strong> circulação de fake news que deforma o
            debate público e a formação da vontade coletiva.
          </li>
          <li>
            <strong>Concentração de poder midiático:</strong> grandes corporações controlam a
            informação, distorcendo a esfera pública habermasiana.
          </li>
          <li>
            <strong>Abstenção e apatia política:</strong> distanciamento dos cidadãos da política
            institucional.
          </li>
          <li>
            <strong>Autoritarismo eleitoral:</strong> governos eleitos democraticamente que minam
            as instituições democráticas por dentro (Steven Levitsky e Daniel Ziblatt —{" "}
            <em>Como as Democracias Morrem</em>).
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Deliberativa</span>
        <h2>8. Habermas e a Democracia Deliberativa</h2>
        <p>
          Jürgen Habermas (1929– ) é o principal representante da segunda geração da Escola de
          Frankfurt e um dos mais influentes filósofos políticos contemporâneos. Em sua teoria da
          <strong> ação comunicativa</strong> e da <strong>democracia deliberativa</strong>, Habermas
          propõe que a legitimidade política não deriva apenas de eleições ou de leis formalmente
          válidas, mas do <em>processo de deliberação racional</em> pelo qual as decisões são tomadas.
        </p>
        <p>
          Para Habermas, a democracia legítima exige uma <strong>esfera pública</strong> saudável:
          um espaço intermediário entre o Estado e o mercado, onde cidadãos discutem livremente os
          problemas coletivos, formam opinião pública e pressionam as instituições. Quando a esfera
          pública é colonizada pelo dinheiro (mercado) ou pelo poder (Estado), a democracia
          degenera em mera fachada.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Aplicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ação comunicativa</strong></td>
                <td>Interação orientada para o entendimento mútuo, com base em argumentos racionais</td>
                <td>Debate público, negociação, deliberação</td>
              </tr>
              <tr>
                <td><strong>Ação estratégica</strong></td>
                <td>Interação orientada para o sucesso próprio, manipulando o outro</td>
                <td>Propaganda, manipulação, fake news</td>
              </tr>
              <tr>
                <td><strong>Esfera pública</strong></td>
                <td>Espaço de debate racional entre cidadãos, fora do Estado e do mercado</td>
                <td>Imprensa, redes sociais, fóruns cívicos</td>
              </tr>
              <tr>
                <td><strong>Razão comunicativa</strong></td>
                <td>Racionalidade que busca consenso por meio de argumentos válidos</td>
                <td>Contrapõe-se à razão instrumental (meio-fim)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Democracia deliberativa e o ENEM</h3>
          <p>
            O ENEM frequentemente conecta Habermas à crítica das fake news e à ameaça às instituições
            democráticas. A ideia central: uma democracia saudável depende da qualidade do debate
            público — quando a desinformação domina a esfera pública, a formação racional da vontade
            coletiva fica comprometida, e com ela a legitimidade das decisões políticas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Digital</span>
        <h2>9. Democracia Digital: Redes Sociais, Ativismo e Política Contemporânea</h2>
        <p>
          As redes sociais transformaram o exercício da democracia. Para a filosofia política,
          esse é um campo de tensões: ao mesmo tempo que ampliam a participação, fragmentam
          o espaço público e facilitam a desinformação.
        </p>
        <p>
          <strong>Potencialidades democráticas das redes:</strong>
        </p>
        <ul>
          <li>Ampliam a voz de grupos historicamente marginalizados (movimentos sociais, ativismo online)</li>
          <li>Permitem organização política descentralizada (Primavera Árabe, manifestações de 2013 no Brasil)</li>
          <li>Criam novas formas de fiscalização do poder público (denúncias virais, jornalismo cidadão)</li>
        </ul>
        <p>
          <strong>Ameaças democráticas das redes:</strong>
        </p>
        <ul>
          <li>Câmaras de eco e polarização (algoritmos maximizam engajamento emocional, não verdade)</li>
          <li>Desinformação em escala industrial (fake news, deepfakes, astroturfing)</li>
          <li>Capitalismo de vigilância (Shoshana Zuboff): dados dos cidadãos como mercadoria para influenciar comportamento político</li>
          <li>Populismo digital: líderes que constroem poder bypassing as instituições democráticas via redes sociais</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Habermas e a patologia da esfera pública digital</h3>
          <p>
            Para Habermas, a democracia deliberativa exige uma esfera pública onde cidadãos
            apresentam argumentos racionais e revisam posições. As redes sociais criaram
            "esferas públicas fragmentadas" que dificultam o entendimento mútuo. Paradoxo:
            mais comunicação, menos comunicação genuína orientada ao entendimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🏛️</span>
            <h3>Democracia Ateniense</h3>
            <p>Direta, com Ecclesia e ágora. Excluía mulheres, escravos e estrangeiros.</p>
          </div>
          <div className="math-card">
            <span>🗳️</span>
            <h3>Modelos Democráticos</h3>
            <p>Direta, representativa, participativa e deliberativa — cada uma com pressupostos filosóficos distintos.</p>
          </div>
          <div className="math-card">
            <span>👤</span>
            <h3>Cidadania (Marshall)</h3>
            <p>3 dimensões: civil (séc. XVIII), política (séc. XIX) e social (séc. XX).</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Estado de Direito</h3>
            <p>Legalidade + separação de poderes + direitos fundamentais + controle judicial.</p>
          </div>
          <div className="math-card">
            <span>🔑</span>
            <h3>Arendt</h3>
            <p>"Direito a ter direitos": sem comunidade política, os direitos humanos são abstrações.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Crise Democrática</h3>
            <p>Populismo, desinformação, abstenção e autoritarismo eleitoral ameaçam as democracias.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Isonomia na Democracia Ateniense"
          statement={<p>O princípio da <strong>isonomia</strong>, presente na democracia ateniense, refere-se:</p>}
          options={[
            { letter: "a", text: "À igualdade de todos os habitantes perante a lei, sem distinção de origem." },
            { letter: "b", text: "À igualdade de direitos políticos entre todos os cidadãos.", correct: true },
            { letter: "c", text: "À liberdade de expressão garantida a mulheres e escravos." },
            { letter: "d", text: "Ao princípio de que todos os cargos públicos seriam hereditários." },
          ]}
          resolution={<p>A <strong>isonomia</strong> (iso = igual; nomos = lei) significava igualdade perante a lei entre os cidadãos atenienses. Contudo, apenas homens livres nascidos em Atenas eram cidadãos — mulheres, escravos e metecos (estrangeiros) estavam excluídos. Portanto, era uma igualdade restrita, não universal como a concebemos hoje.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. T. H. Marshall e as Dimensões da Cidadania"
          statement={<p>Segundo T. H. Marshall, a cidadania social, que emergiu principalmente no século XX, inclui:</p>}
          options={[
            { letter: "a", text: "O direito de votar e ser votado nas eleições." },
            { letter: "b", text: "A liberdade de expressão e o habeas corpus." },
            { letter: "c", text: "Direitos à educação, saúde, trabalho e previdência social.", correct: true },
            { letter: "d", text: "A separação entre Igreja e Estado." },
          ]}
          resolution={<p>Marshall dividiu a cidadania em três dimensões históricas: <strong>civil</strong> (séc. XVIII) — liberdades individuais; <strong>política</strong> (séc. XIX) — participação nas decisões; <strong>social</strong> (séc. XX) — direitos econômicos e sociais como educação, saúde, trabalho e seguridade social. No Brasil, esses direitos foram consolidados na CF/1988.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Estado de Direito e Separação de Poderes"
          statement={<p>A doutrina da separação dos poderes, associada a Montesquieu, foi elaborada com o objetivo de:</p>}
          options={[
            { letter: "a", text: "Garantir que o rei mantivesse o controle sobre o Judiciário e o Legislativo." },
            { letter: "b", text: "Impedir que um único poder concentrasse autoridade absoluta, evitando a tirania.", correct: true },
            { letter: "c", text: "Subordinar o Executivo ao Legislativo em todas as decisões de Estado." },
            { letter: "d", text: "Eliminar a necessidade de eleições periódicas, substituindo-as por indicações técnicas." },
          ]}
          resolution={<p>Montesquieu, em <em>O Espírito das Leis</em> (1748), defendeu que a liberdade política só é possível quando os três poderes — Executivo, Legislativo e Judiciário — são independentes e se fiscalizam mutuamente (<em>checks and balances</em>). A concentração de poderes em uma única mão conduz inevitavelmente à tirania. Essa doutrina é a base constitucional da maioria das democracias modernas.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Hannah Arendt e os Refugiados"
          statement={
            <p>
              "Aqueles que perderam todos os outros atributos políticos da personalidade, tornaram-se indivíduos que perderam a qualidade de ser humano, a qualidade que faz com que os outros os tratem e eles se tratem a si mesmos como seres humanos." (Hannah Arendt, <em>As Origens do Totalitarismo</em>)<br/><br/>
              Com base na reflexão de Arendt, pode-se concluir que:
            </p>
          }
          options={[
            { letter: "a", text: "Os direitos humanos são garantidos naturalmente, independentemente de pertencimento político." },
            { letter: "b", text: "A apatridia e a perda da cidadania expõem a fragilidade dos direitos humanos sem respaldo estatal.", correct: true },
            { letter: "c", text: "O totalitarismo é uma forma de governo que respeita plenamente os direitos individuais." },
            { letter: "d", text: "A humanidade prescinde de comunidades políticas para garantir dignidade a todos." },
          ]}
          resolution={<p>Arendt argumenta que os "direitos do homem" proclamados pela Revolução Francesa eram na prática direitos de cidadãos de Estados-nação. Apátridas e refugiados — que perderam a cidadania — mostraram que sem pertencer a uma comunidade política que os reconheça, os seres humanos perdem a proteção efetiva de seus direitos. Daí a expressão: <strong>"o direito a ter direitos"</strong> é o direito de pertencer a uma comunidade política.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Democracia e Populismo Contemporâneo"
          statement={
            <p>
              Pesquisadores de ciência política identificam uma tensão entre democracia e populismo: enquanto a democracia pressupõe respeito às regras institucionais, ao pluralismo e aos direitos das minorias, o populismo frequentemente apela ao "povo" contra as "elites", questionando a legitimidade das instituições democráticas.<br/><br/>
              Nesse sentido, qual fenômeno melhor exemplifica uma ameaça interna às democracias contemporâneas?
            </p>
          }
          options={[
            { letter: "a", text: "A realização de eleições livres e competitivas com ampla participação popular." },
            { letter: "b", text: "A separação entre os poderes Executivo, Legislativo e Judiciário." },
            { letter: "c", text: "Governantes eleitos que, após a posse, enfraquecem o judiciário e a imprensa independente.", correct: true },
            { letter: "d", text: "A criação de conselhos participativos de políticas públicas com representação da sociedade civil." },
          ]}
          resolution={<p>O chamado <strong>"autoritarismo eleitoral"</strong> (Levitsky e Ziblatt) refere-se a líderes que chegam ao poder por vias democráticas, mas progressivamente enfraquecem as instituições que limitam seu poder: judiciário independente, imprensa livre, parlamento, eleições competitivas. Trata-se de uma erosão gradual da democracia "por dentro", diferente dos golpes tradicionais. Reconhecer esse padrão é fundamental para a defesa das instituições democráticas.</p>}
        />
      </section>
    </article>
  );
}
