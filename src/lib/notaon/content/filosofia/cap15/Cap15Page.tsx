"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 15</span>
          <h1>A Transição da Filosofia Medieval para a Moderna</h1>
          <p>
            Entre os séculos XIV e XVI, a Europa viveu uma série de crises — a Peste Negra, o Cisma
            da Igreja, o declínio do feudalismo — que abalaram os fundamentos da visão de mundo
            medieval. Ao mesmo tempo, um novo espírito intelectual emergiu: o Humanismo, a redescoberta
            dos clássicos gregos e a valorização do indivíduo. Este capítulo mostra como o pensamento
            passou da Idade Média à Modernidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crise da Cristandade</span>
        <h2>1. As Crises do Século XIV</h2>
        <p>
          A visão de mundo medieval era marcada pela harmonia entre Deus, natureza e ser humano, mediada
          pela Igreja Católica. No século XIV, essa harmonia entrou em colapso:
        </p>
        <ul>
          <li>
            <strong>Peste Negra (1347–1351):</strong> matou entre 30% e 50% da população europeia.
            A escala da tragédia abalou a confiança na providência divina e gerou uma nova consciência
            da morte, da finitude e da importância do presente.
          </li>
          <li>
            <strong>Cisma do Ocidente (1378–1417):</strong> dois e depois três papas simultaneamente
            disputavam a liderança da Igreja. O prestígio da Santa Sé foi profundamente abalado.
          </li>
          <li>
            <strong>Cruzadas fracassadas:</strong> a perda de Jerusalém (1291) representou o fim do
            projeto de Cristandade universal.
          </li>
          <li>
            <strong>Crise do feudalismo:</strong> o comércio e o dinheiro substituíam gradualmente
            as relações de servidão; cidades cresciam; uma nova burguesia emergia.
          </li>
          <li>
            <strong>Guerras:</strong> a Guerra dos Cem Anos (1337–1453) devastou a França e a Inglaterra.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A mudança na consciência do tempo</h3>
          <p>
            A Idade Média tinha uma visão do tempo orientada para a eternidade — o presente era apenas
            uma passagem para a vida eterna. A Peste Negra e as crises do século XIV geraram uma nova
            consciência: o presente importa, a vida terrena tem valor. Isso é um dos fundamentos do
            Humanismo renascentista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Humanismo Proto-Renascentista</span>
        <h2>2. Os Precursores: Dante, Petrarca e Boccaccio</h2>
        <p>
          Na Itália, ainda no século XIV, três grandes escritores anunciaram a transição:
        </p>
        <ul>
          <li>
            <strong>Dante Alighieri (1265–1321):</strong> na <em>Divina Comédia</em>, escreveu em
            italiano vulgar (não em latim), tornando a literatura acessível ao povo. Ao mesmo tempo,
            usou Virgílio (razão) e Beatriz (fé) como guias — ainda medieval em espírito, mas
            inaugurando o uso das línguas vernáculas.
          </li>
          <li>
            <strong>Francesco Petrarca (1304–1374):</strong> considerado o "primeiro humanista", foi
            o pioneiro na busca e valorização dos textos clássicos latinos. Sua poesia exalta o amor
            humano e a beleza do mundo — uma virada do teocentrismo para o antropocentrismo.
          </li>
          <li>
            <strong>Giovanni Boccaccio (1313–1375):</strong> no <em>Decamerão</em>, narrou histórias
            de seres humanos comuns — com todos seus vícios, virtudes, amores e astúcias — valorizando
            a vida mundana e o humor humano.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Redescoberta dos Clássicos</span>
        <h2>3. A Redescoberta dos Clássicos Gregos</h2>
        <p>
          Um dos fatores decisivos da transição foi a chegada maciça de textos gregos ao Ocidente,
          especialmente após a queda de Constantinopla (1453), quando sábios gregos fugiram para a
          Itália trazendo manuscritos.
        </p>
        <ul>
          <li>
            O contato com o <strong>Platão</strong> original — não apenas o Platão filtrado por
            Agostinho — revelou uma tradição filosófica mais ampla e plural.
          </li>
          <li>
            A <strong>Academia Platônica de Florença</strong>, fundada por Cosimo de Médici e dirigida
            por Marsílio Ficino (1433–1499), traduziu e comentou toda a obra de Platão.
          </li>
          <li>
            O <strong>Neoplatonismo renascentista</strong> valorizou a beleza, a alma e a ascensão
            espiritual — mas com um novo espírito de celebração da vida e do corpo.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A invenção da imprensa (1450)</h3>
          <p>
            A imprensa de tipos móveis de Gutenberg (c. 1450) acelerou decisivamente a difusão do
            saber. Os textos clássicos, antes copiados à mão em mosteiros, tornaram-se acessíveis
            em larga escala, democratizando o conhecimento e acelerando a Reforma Protestante.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Declínio da Igreja</span>
        <h2>4. O Enfraquecimento da Autoridade da Igreja</h2>
        <p>
          O poder da Igreja Católica como árbitro supremo do pensamento foi progressivamente
          questionado:
        </p>
        <ul>
          <li>
            <strong>Crítica ao clero:</strong> escritores como Boccaccio e Erasmo de Roterdã
            satirizavam a hipocrisia e a corrupção da Igreja, preparando o terreno para a Reforma.
          </li>
          <li>
            <strong>Reforma Protestante (1517):</strong> Martinho Lutero pregou o <em>livre exame</em>
            da Bíblia — cada cristão poderia ler e interpretar as Escrituras diretamente, sem mediação
            clerical. Isso valorizou a razão individual e a alfabetização.
          </li>
          <li>
            <strong>Revolução Científica:</strong> Copérnico, Galileu e Newton mostraram que o universo
            funcionava segundo leis matemáticas, sem intervenção sobrenatural contínua — deslocando a
            terra (e o ser humano) do centro do cosmos.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nominalismo como Semente</span>
        <h2>5. O Nominalismo de Ockham como Germe da Modernidade</h2>
        <p>
          A filosofia de Guilherme de Ockham preparou o terreno para a modernidade em vários aspectos:
        </p>
        <ul>
          <li>
            Ao separar fé e razão, liberou a filosofia natural para investigar o mundo sem precisar
            confirmar verdades teológicas.
          </li>
          <li>
            A <strong>navalha de Ockham</strong> (economicidade das explicações) antecipou o método
            científico.
          </li>
          <li>
            O nominalismo radical — só existem indivíduos, não essências universais — preparou o
            terreno para o individualismo moderno.
          </li>
          <li>
            A valorização da <strong>experiência concreta</strong> sobre as abstrações escolásticas
            abriu caminho para o empirismo de Francis Bacon e John Locke.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Valorização do Indivíduo</span>
        <h2>6. Do Teocentrismo ao Antropocentrismo</h2>
        <p>
          A maior mudança de mentalidade entre a Idade Média e a Modernidade foi a passagem do
          <strong> teocentrismo</strong> (Deus como centro de tudo) para o
          <strong> antropocentrismo</strong> (o ser humano como medida e centro):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Visão Medieval (Teocentrismo)</th>
                <th>Visão Moderna (Antropocentrismo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centro do universo</td>
                <td>Deus</td>
                <td>Ser humano / Razão</td>
              </tr>
              <tr>
                <td>Objetivo da vida</td>
                <td>Salvação eterna</td>
                <td>Realização humana aqui e agora</td>
              </tr>
              <tr>
                <td>Arte</td>
                <td>Religiosa, anônima, a serviço de Deus</td>
                <td>Individualizada, retrato do corpo humano</td>
              </tr>
              <tr>
                <td>Natureza</td>
                <td>Criação de Deus, símbolo do sagrado</td>
                <td>Objeto de estudo e domínio humano</td>
              </tr>
              <tr>
                <td>Autoridade</td>
                <td>A Bíblia e os Pais da Igreja</td>
                <td>A razão e a experiência</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 220" width="520" height="220" aria-label="Transição do Teocentrismo ao Antropocentrismo">
            <rect x="10" y="10" width="500" height="200" rx="10" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0c4a6e">Transição: Teocentrismo → Antropocentrismo</text>
            {/* Lado Medieval */}
            <rect x="30" y="50" width="190" height="140" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="125" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">IDADE MÉDIA</text>
            <text x="125" y="90" textAnchor="middle" fontSize="11" fill="#1e40af">☩ Teocentrismo</text>
            <text x="125" y="108" textAnchor="middle" fontSize="10" fill="#1d4ed8">• Fé acima da razão</text>
            <text x="125" y="124" textAnchor="middle" fontSize="10" fill="#1d4ed8">• Vida eterna como fim</text>
            <text x="125" y="140" textAnchor="middle" fontSize="10" fill="#1d4ed8">• Arte religiosa</text>
            <text x="125" y="156" textAnchor="middle" fontSize="10" fill="#1d4ed8">• Autoridade da Igreja</text>
            <text x="125" y="172" textAnchor="middle" fontSize="10" fill="#1d4ed8">• Natureza = símbolo</text>
            {/* Seta */}
            <text x="260" y="128" textAnchor="middle" fontSize="22" fill="#0369a1">→</text>
            {/* Lado Moderno */}
            <rect x="300" y="50" width="190" height="140" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="395" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">MODERNIDADE</text>
            <text x="395" y="90" textAnchor="middle" fontSize="11" fill="#15803d">🧍 Antropocentrismo</text>
            <text x="395" y="108" textAnchor="middle" fontSize="10" fill="#166534">• Razão autônoma</text>
            <text x="395" y="124" textAnchor="middle" fontSize="10" fill="#166534">• Realização terrena</text>
            <text x="395" y="140" textAnchor="middle" fontSize="10" fill="#166534">• Arte humanista</text>
            <text x="395" y="156" textAnchor="middle" fontSize="10" fill="#166534">• Autoridade da razão</text>
            <text x="395" y="172" textAnchor="middle" fontSize="10" fill="#166534">• Natureza = objeto</text>
          </svg>
          <figcaption>A transição da Idade Média para a Modernidade foi, em grande parte, a passagem do teocentrismo ao antropocentrismo.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Navegações e Comércio</span>
        <h2>7. O papel das navegações e do comércio na ruptura com o pensamento medieval</h2>
        <p>
          A expansão marítima europeia dos séculos XV e XVI foi um dos fatores mais decisivos
          na ruptura com a visão de mundo medieval. O encontro com culturas, povos e territórios
          desconhecidos forçou uma revisão radical das categorias filosóficas, teológicas e
          científicas herdadas da Escolástica.
        </p>
        <p>
          <strong>Impactos filosóficos das navegações:</strong>
        </p>
        <ul>
          <li>
            <strong>Crise da cosmografia aristotélica:</strong> Aristóteles e Ptolomeu descreveram
            um mundo finito, centrado no Mediterrâneo. As navegações revelaram um planeta muito
            maior e mais diverso. Isso abalou a autoridade dos textos antigos.
          </li>
          <li>
            <strong>Questão das origens dos povos:</strong> de onde vinham os habitantes das
            Américas? A Bíblia não os mencionava. Isso gerou intenso debate teológico e filosófico
            sobre a natureza humana e a providência divina.
          </li>
          <li>
            <strong>Relativismo cultural embrionário:</strong> o contato com povos diferentes
            gerou algumas vozes — como Michel de Montaigne (1533–1592) — que questionavam a
            superioridade da civilização europeia: "Cada um chama de barbárie aquilo que não é
            costume de seu país."
          </li>
          <li>
            <strong>Aceleração do comércio:</strong> o capitalismo mercantil emergente criou uma
            nova classe burguesa que valorizava a razão prática, a empiria e a eficiência —
            valores incompatíveis com a contemplação escolástica.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Montaigne e o relativismo cultural</h3>
          <p>
            Michel de Montaigne, nos seus <em>Ensaios</em>, usou a existência dos povos americanos
            para questionar o etnocentrismo europeu. Seu ceticismo moderado e seu humanismo crítico
            são uma das pontes mais importantes entre o Renascimento e a filosofia moderna.
            No ENEM, Montaigne aparece em questões sobre diversidade cultural e tolerância.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Consciência Individual</span>
        <h2>8. A Reforma Protestante e o nascimento da consciência individual</h2>
        <p>
          A Reforma Protestante (1517) não foi apenas um conflito religioso — foi uma revolução
          filosófica e cultural que reconfigurou a relação entre indivíduo, razão e autoridade.
          Três contribuições fundamentais ao pensamento moderno:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Princípio Reformador</th>
                <th>Conteúdo</th>
                <th>Impacto filosófico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sola Scriptura</strong></td>
                <td>Apenas a Bíblia como autoridade, não a tradição da Igreja</td>
                <td>Enfraquece a autoridade institucional; valoriza o texto e o leitor individual</td>
              </tr>
              <tr>
                <td><strong>Livre exame</strong></td>
                <td>Cada cristão interpreta as Escrituras com a própria razão</td>
                <td>Funda o individualismo epistêmico: a consciência individual como árbitro da verdade</td>
              </tr>
              <tr>
                <td><strong>Sacerdócio universal</strong></td>
                <td>Todo cristão é sacerdote diante de Deus, sem mediação obrigatória</td>
                <td>Elimina hierarquias entre leigos e clérigos; igualitarismo moral e religioso</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O filósofo Max Weber identificou na <em>ética protestante</em> um dos fundamentos
          do capitalismo moderno: o trabalho como vocação, o sucesso material como sinal de
          eleição divina, a disciplina e a acumulação racional como virtudes.
        </p>
        <p>
          Essa ênfase na consciência individual é um dos pilares da filosofia moderna: Descartes
          partiria de si mesmo como ponto de certeza; Locke fundaria os direitos na consciência
          individual; Kant tornaria a autonomia da razão o princípio supremo da ética.
        </p>
        <div className="lesson-highlight">
          <h3>Reforma Protestante e ENEM</h3>
          <p>
            O ENEM cobra a Reforma Protestante tanto em História (causas, impacto político,
            guerras de religião) quanto em Filosofia (individualismo, razão, libertação da
            autoridade eclesiástica). Lembre-se da ligação: Reforma → livre exame → razão
            individual → Iluminismo → direitos humanos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🦠</span>
            <h3>Crise do Século XIV</h3>
            <p>Peste Negra, Cisma, guerras: abalaram a visão de mundo medieval baseada na providência divina.</p>
          </div>
          <div className="math-card">
            <span>✍️</span>
            <h3>Humanismo Inicial</h3>
            <p>Dante, Petrarca, Boccaccio: línguas vernáculas, valorização do humano e dos clássicos.</p>
          </div>
          <div className="math-card">
            <span>📜</span>
            <h3>Redescoberta Clássica</h3>
            <p>Queda de Constantinopla (1453) + imprensa (c.1450): difusão dos textos gregos.</p>
          </div>
          <div className="math-card">
            <span>⛪</span>
            <h3>Reforma Protestante</h3>
            <p>Lutero (1517): livre exame da Bíblia; valorização da razão individual.</p>
          </div>
          <div className="math-card">
            <span>✂️</span>
            <h3>Nominalismo de Ockham</h3>
            <p>Separação fé/razão; experiência concreta; germe do método científico moderno.</p>
          </div>
          <div className="math-card">
            <span>🧍</span>
            <h3>Antropocentrismo</h3>
            <p>O ser humano passa ao centro: razão, natureza e individualidade valorizados.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Teocentrismo e Antropocentrismo"
          statement={<p>A transição da Idade Média para a Modernidade é marcada, no campo das ideias, pela passagem do teocentrismo ao antropocentrismo. Isso significa que:</p>}
          options={[
            { letter: "a", text: "O ser humano passou a ser o centro das preocupações filosóficas, artísticas e científicas, substituindo Deus como referência principal.", correct: true },
            { letter: "b", text: "O ser humano negou a existência de Deus e adotou o ateísmo como base da cultura moderna." },
            { letter: "c", text: "A Modernidade manteve o teocentrismo medieval, apenas substituindo o Deus cristão por deuses gregos." },
            { letter: "d", text: "O antropocentrismo implicou a eliminação da filosofia e da teologia em favor das ciências naturais." },
          ]}
          resolution={<p>O <strong>antropocentrismo</strong> não significa necessariamente ateísmo — a maioria dos renascentistas e filósofos modernos eram teístas. Significa que o ser humano (sua razão, sua dignidade, sua capacidade criativa) passou ao centro das investigações filosóficas, artísticas e científicas. A Modernidade não abandona Deus, mas desloca o centro de gravidade para o humano.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. A Reforma Protestante e o Livre Exame"
          statement={<p>Martinho Lutero (1517) defendeu o princípio do "livre exame" das Escrituras. Qual foi a implicação filosófica mais importante desse princípio?</p>}
          options={[
            { letter: "a", text: "Valorizou a razão individual como instância capaz de interpretar os textos sagrados, sem necessidade de mediação de uma autoridade externa.", correct: true },
            { letter: "b", text: "Eliminou a necessidade de qualquer texto escrito, pois a revelação se dava diretamente por voz divina." },
            { letter: "c", text: "Restringiu o acesso à Bíblia apenas aos clérigos protestantes, excluindo os leigos." },
            { letter: "d", text: "Afirmou que somente o latim poderia ser usado para ler e interpretar as Escrituras." },
          ]}
          resolution={<p>O <strong>livre exame</strong> luterano afirmou que cada cristão pode — e deve — ler e interpretar a Bíblia por si mesmo, guiado pela razão e pela consciência. Isso valorizou a <strong>razão individual</strong> como fonte de autoridade, contribuiu para a alfabetização em massa (era preciso saber ler) e preparou o terreno para o iluminismo e o individualismo moderno.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. A Imprensa como Revolução Cultural"
          statement={<p>A invenção da imprensa de tipos móveis por Gutenberg (c. 1450) foi um dos fatores decisivos da transição para a Modernidade. Que impacto filosófico e cultural ela teve?</p>}
          options={[
            { letter: "a", text: "Democratizou o acesso ao conhecimento, acelerou a difusão das ideias humanistas e da Reforma Protestante, e enfraqueceu o controle eclesiástico sobre o saber.", correct: true },
            { letter: "b", text: "Reforçou o poder da Igreja, pois agora ela podia publicar mais Bíblias e controlar melhor a doutrina." },
            { letter: "c", text: "Eliminou a tradição oral e filosófica, substituindo o debate racional pela leitura solitária." },
            { letter: "d", text: "Teve impacto apenas na literatura, sem consequências para a filosofia ou a teologia." },
          ]}
          resolution={<p>A imprensa foi uma revolução comunicacional sem precedentes. Antes dela, os textos eram copiados à mão nos mosteiros, e o acesso ao saber era restrito à elite clerical e aristocrática. Com a imprensa, os textos clássicos, as teses de Lutero (95 Teses espalhadas em semanas por toda a Europa) e as obras humanistas chegaram rapidamente a um público muito maior, minando o monopólio eclesiástico do saber.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) A Peste Negra e a Consciência Humana"
          statement={<p>A Peste Negra (1347–1351) matou entre 30% e 50% da população europeia. Além do impacto demográfico e econômico, ela gerou uma profunda mudança cultural: a arte passou a retratar explicitamente a morte, o corpo e a finitude humana (a chamada "Dança da Morte"). Qual mudança filosófica e cultural essa transformação artística expressa?</p>}
          options={[
            { letter: "a", text: "Uma nova consciência da condição humana: a valorização do presente e da vida terrena diante da certeza da morte, preparando o terreno para o humanismo.", correct: true },
            { letter: "b", text: "O abandono completo da fé cristã e a adoção do materialismo ateu como visão dominante." },
            { letter: "c", text: "O retorno ao paganismo greco-romano, com o culto dos mortos substituindo o catolicismo." },
            { letter: "d", text: "Uma visão pessimista e niilista que paralisou o desenvolvimento cultural europeu por séculos." },
          ]}
          resolution={<p>A Peste Negra foi, paradoxalmente, um dos fatores que impulsionaram a modernidade. Ao tornar a morte onipresente e imprevisível, gerou uma nova consciência do valor do presente — da vida concreta, dos prazeres e das relações humanas. A arte da "Dança da Morte" (Danse Macabre) expressava angústia, mas também um novo realismo sobre a condição humana que preparou o terreno para o humanismo renascentista.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Queda de Constantinopla e o Renascimento"
          statement={<p>A queda de Constantinopla para os turcos otomanos (1453) é frequentemente citada como um dos marcos da transição para a Modernidade. No campo filosófico e cultural, o principal impacto desse evento foi:</p>}
          options={[
            { letter: "a", text: "A migração de intelectuais gregos para a Itália trazendo manuscritos, o que acelerou o contato com a filosofia grega original e estimulou o Renascimento.", correct: true },
            { letter: "b", text: "O fim da filosofia, pois os turcos destruíram todos os manuscritos filosóficos gregos conservados em Bizâncio." },
            { letter: "c", text: "A unificação política da Europa cristã em uma Cruzada contra os turcos, gerando um novo vigor medieval." },
            { letter: "d", text: "O início do protestantismo, já que Lutero foi diretamente influenciado pelos exilados gregos de Constantinopla." },
          ]}
          resolution={<p>A queda de Constantinopla levou muitos sábios gregos a fugirem para a Itália — especialmente para Florença — trazendo consigo manuscritos originais de Platão e outros filósofos. Isso alimentou diretamente o Renascimento italiano: a Academia Platônica de Florença, fundada pelos Médici, traduziu e comentou toda a obra de Platão. Assim, um evento político-militar teve enorme impacto cultural e filosófico.</p>}
        />
      </section>
    </article>
  );
}
