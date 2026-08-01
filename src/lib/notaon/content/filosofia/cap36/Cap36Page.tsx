"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 36</span>
          <h1>Diversidade Cultural, Pluralidade e Tolerância</h1>
          <p>
            Num mundo de encontros e conflitos entre culturas, a filosofia é convocada a responder:
            todas as culturas têm igual valor? Há valores universais que transcendem culturas? Como
            conviver com a diferença sem apagar identidades nem impor uma cultura sobre outra?
            Relativismo, universalismo, multiculturalismo e interculturalidade são os eixos deste debate.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos</span>
        <h2>1. O que é Cultura?</h2>
        <p>
          Em sentido amplo, <strong>cultura</strong> é o conjunto de práticas, valores, crenças,
          símbolos, línguas, artes e modos de vida que um grupo humano produz e transmite ao longo
          das gerações. Não existe ser humano sem cultura — somos seres culturais por natureza.
        </p>
        <p>
          O filósofo <strong>Clifford Geertz</strong> definiu cultura como "teias de significado"
          que o próprio ser humano tece e dentro das quais está suspenso. Compreender uma cultura
          é interpretar seus símbolos, não apenas descrever seus comportamentos.
        </p>
        <p>
          É importante distinguir:
        </p>
        <ul>
          <li><strong>Etnocentrismo:</strong> julgar outras culturas com base nos valores e padrões da própria cultura, considerando-a superior.</li>
          <li><strong>Relativismo cultural:</strong> considerar que cada cultura deve ser compreendida a partir de seus próprios critérios, sem julgamentos externos.</li>
          <li><strong>Interculturalidade:</strong> diálogo respeitoso entre culturas, reconhecendo tanto as diferenças quanto a possibilidade de aprendizado mútuo.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relativismo</span>
        <h2>2. Relativismo Cultural: toda cultura tem valor próprio?</h2>
        <p>
          O <strong>relativismo cultural</strong> surgiu como reação ao etnocentrismo europeu que,
          durante a colonização, classificava povos africanos, indígenas e asiáticos como
          "primitivos" ou "selvagens". Antropólogos como Franz Boas defenderam que cada cultura
          deve ser avaliada em seus próprios termos.
        </p>
        <p>
          O relativismo cultural tem méritos importantes: combate o preconceito, valoriza a
          diversidade e exige humildade epistêmica. Contudo, também levanta um problema grave:
          se toda cultura tem seus próprios valores, como condenar práticas como escravidão,
          tortura, mutilação genital feminina ou discriminação de minorias quando praticadas
          dentro de uma cultura?
        </p>
        <div className="lesson-highlight">
          <h3>O dilema do relativismo</h3>
          <p>
            O relativismo radical leva a um paradoxo: ao dizer "toda cultura é igualmente válida",
            ele próprio faz um julgamento moral universal (que a tolerância é um valor), contradizendo
            sua própria premissa. Além disso, inviabiliza a defesa dos direitos humanos frente a
            práticas culturais opressivas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Universalismo</span>
        <h2>3. Universalismo Ético: há valores que transcendem as culturas?</h2>
        <p>
          O <strong>universalismo ético</strong> defende que existem valores morais válidos para
          todos os seres humanos, independentemente de cultura, época ou localização. Kant é o
          grande representante: o imperativo categórico ("Age de tal forma que a máxima de tua
          ação possa se tornar lei universal") é racional e universal.
        </p>
        <p>
          Os <strong>Direitos Humanos</strong> (Declaração Universal de 1948) fundamentam-se
          no universalismo: toda pessoa, em qualquer cultura, tem direito à vida, à liberdade,
          à integridade física e à dignidade. Isso é frequentemente invocado para condenar práticas
          culturais que violam esses direitos.
        </p>
        <p>
          O problema do universalismo é que, historicamente, muitas imposições culturais foram
          legitimadas em nome de "valores universais" — o colonialismo europeu usou a "missão
          civilizatória" para justificar dominação e exploração.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>4. Relativismo × Universalismo × Interculturalidade</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 240" width="500" height="240" aria-label="Espectro: relativismo, interculturalidade e universalismo">
            <rect x="10" y="10" width="480" height="220" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
            <text x="250" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Posições sobre Diversidade Cultural</text>

            <rect x="25" y="55" width="130" height="130" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="90" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Relativismo</text>
            <text x="90" y="108" textAnchor="middle" fontSize="10" fill="#9d174d">Cultural</text>
            <text x="90" y="130" textAnchor="middle" fontSize="9" fill="#831843">Cada cultura tem</text>
            <text x="90" y="143" textAnchor="middle" fontSize="9" fill="#831843">seus próprios</text>
            <text x="90" y="156" textAnchor="middle" fontSize="9" fill="#831843">critérios válidos</text>
            <text x="90" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Boas, Lévi-Strauss</text>

            <rect x="185" y="55" width="130" height="130" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="250" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Intercultura-</text>
            <text x="250" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">lidade</text>
            <text x="250" y="128" textAnchor="middle" fontSize="9" fill="#064e3b">Diálogo entre culturas</text>
            <text x="250" y="141" textAnchor="middle" fontSize="9" fill="#064e3b">com aprendizado</text>
            <text x="250" y="154" textAnchor="middle" fontSize="9" fill="#064e3b">mútuo respeitoso</text>
            <text x="250" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Taylor, Fornet-Betancourt</text>

            <rect x="345" y="55" width="130" height="130" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="410" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Universalismo</text>
            <text x="410" y="108" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Ético</text>
            <text x="410" y="130" textAnchor="middle" fontSize="9" fill="#1e3a8a">Valores morais</text>
            <text x="410" y="143" textAnchor="middle" fontSize="9" fill="#1e3a8a">válidos para todos</text>
            <text x="410" y="156" textAnchor="middle" fontSize="9" fill="#1e3a8a">os seres humanos</text>
            <text x="410" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Kant, Rawls, ONU</text>

            <text x="250" y="210" textAnchor="middle" fontSize="10" fill="#64748b" fontStyle="italic">Tensão central da filosofia intercultural contemporânea</text>
          </svg>
          <figcaption>As três posições principais no debate sobre diversidade cultural. A interculturalidade busca o equilíbrio entre o respeito às diferenças e a defesa de valores comuns.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Multiculturalismo</span>
        <h2>5. Charles Taylor e o Multiculturalismo</h2>
        <p>
          <strong>Charles Taylor</strong> (1931–) defende que a identidade cultural é fundamental
          para a dignidade humana. Sua <strong>política do reconhecimento</strong> argumenta que
          culturas, grupos étnicos e minorias têm o direito de ver sua identidade reconhecida e
          respeitada na esfera pública — não apenas tolerada, mas positivamente reconhecida.
        </p>
        <p>
          Taylor critica o liberalismo "cego às diferenças" que trata todos como iguais ignorando
          as especificidades culturais. Cotas raciais, ensino de línguas indígenas, preservação
          de patrimônio cultural imaterial — tudo isso responde à demanda pelo reconhecimento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tolerância</span>
        <h2>6. Tolerância: de Locke a Rawls</h2>
        <p>
          <strong>John Locke</strong> foi um dos primeiros a defender a tolerância religiosa
          (Carta sobre a Tolerância, 1689): o Estado não deve impor uma religião e deve permitir
          que cada cidadão siga suas convicções no âmbito privado.
        </p>
        <p>
          <strong>John Rawls</strong> (1921–2002) ampliou o conceito: numa sociedade plural, os
          cidadãos com visões de vida distintas podem cooperar politicamente a partir de um
          "consenso sobreposto" — conjunto de valores políticos básicos (dignidade, liberdade,
          igualdade) que todas as doutrinas razoáveis podem aceitar sem abrir mão de suas crenças
          privadas.
        </p>
        <div className="lesson-highlight">
          <h3>Os limites da tolerância</h3>
          <p>
            Karl Popper formulou o "paradoxo da tolerância": uma sociedade tolerante deve ser
            intolerante com a intolerância. Se tolerarmos aqueles que pregam a destruição da
            tolerância, a própria tolerância será destruída. Logo, a tolerância tem limites —
            ela não pode proteger práticas que visam eliminar a tolerância e a pluralidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>
        <h2>7. Posições e Autores — Síntese</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Posição</th><th>Autor(es)</th><th>Tese central</th><th>Problema</th></tr>
            </thead>
            <tbody>
              <tr><td>Relativismo cultural</td><td>Boas, Lévi-Strauss</td><td>Cada cultura é válida em seus próprios termos</td><td>Inviabiliza crítica a práticas opressivas</td></tr>
              <tr><td>Universalismo ético</td><td>Kant, ONU</td><td>Há valores morais universais (dignidade, liberdade)</td><td>Risco de imperialismo cultural</td></tr>
              <tr><td>Multiculturalismo</td><td>Taylor</td><td>Identidades culturais merecem reconhecimento público</td><td>Como equilibrar reconhecimento e igualdade?</td></tr>
              <tr><td>Interculturalidade</td><td>Fornet-Betancourt</td><td>Diálogo entre culturas com aprendizado mútuo</td><td>Pressupõe condições de igualdade raramente existentes</td></tr>
              <tr><td>Tolerância política</td><td>Locke, Rawls</td><td>Convívio plural via consenso sobreposto</td><td>Paradoxo: não pode tolerar a intolerância</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Multiculturalismo</span>
        <h2>8. Multiculturalismo e Interculturalidade: Desafios para a Filosofia Contemporânea</h2>
        <p>
          O <strong>multiculturalismo</strong> é uma posição filosófica e política que defende o
          direito de diferentes culturas coexistirem e serem reconhecidas no espaço público, sem
          que uma seja imposta como padrão universal. Vai além da tolerância passiva: exige
          reconhecimento ativo das diferenças culturais como componentes da dignidade humana.
        </p>
        <p>
          A <strong>interculturalidade</strong>, por sua vez, vai além da simples coexistência.
          Ela propõe o <em>diálogo transformador</em> entre culturas: cada cultura aprende com
          as outras, revisa seus próprios pressupostos e enriquece-se a partir do encontro.
          O filósofo cubano <strong>Raúl Fornet-Betancourt</strong> defende que a filosofia
          precisa se transformar num diálogo intercultural — deixando de ser monólogo ocidental
          para se tornar conversa entre múltiplas tradições de sabedoria.
        </p>
        <ul>
          <li>
            <strong>Multiculturalismo liberal (Taylor):</strong> reconhecimento de identidades
            culturais no interior de um Estado democrático-liberal. Ex.: ensino de línguas
            indígenas, cotas raciais, preservação de patrimônios culturais imateriais.
          </li>
          <li>
            <strong>Multiculturalismo crítico (hooks, Bhabha):</strong> vai além do reconhecimento
            formal — questiona as relações de poder que determinam quais culturas são reconhecidas
            e quais são invisibilizadas. O "terceiro espaço" de Homi Bhabha: as culturas não são
            fixas, mas se transformam no contato e no conflito.
          </li>
          <li>
            <strong>Interculturalidade crítica (Fornet-Betancourt, Walsh):</strong> pressupõe que
            o diálogo intercultural exige transformação das relações assimétricas de poder que
            determinam quem fala, de onde e com que autoridade. Não há diálogo real sem igualdade.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Brasil: laboratório intercultural</h3>
          <p>
            O Brasil é um dos países mais diversificados culturalmente do mundo: mais de 300
            povos indígenas, influências africanas profundas, migrações asiáticas e europeias.
            A Constituição de 1988 tentou institucionalizar o multiculturalismo ao reconhecer os
            direitos culturais específicos de indígenas e quilombolas. O ENEM frequentemente
            explora essa tensão: como uma sociedade plural pode construir uma identidade nacional
            sem apagar suas diferenças?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>🌐</span><h3>Cultura</h3><p>Conjunto de práticas, valores e símbolos que grupos humanos produzem e transmitem.</p></div>
          <div className="math-card"><span>🔄</span><h3>Relativismo</h3><p>Cada cultura é válida em seus próprios termos. Combate o etnocentrismo, mas tem limites éticos.</p></div>
          <div className="math-card"><span>⚖️</span><h3>Universalismo</h3><p>Há valores morais válidos para todos (Kant, Direitos Humanos). Risco de imperialismo cultural.</p></div>
          <div className="math-card"><span>🤝</span><h3>Reconhecimento</h3><p>Taylor: identidades culturais exigem reconhecimento público, não apenas tolerância passiva.</p></div>
          <div className="math-card"><span>🕊️</span><h3>Tolerância</h3><p>Locke/Rawls: convívio plural possível via consenso sobre valores políticos básicos.</p></div>
          <div className="math-card"><span>🚧</span><h3>Paradoxo Popper</h3><p>A tolerância deve ser intolerante com a intolerância, sob pena de se autodestruir.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Etnocentrismo e Relativismo"
          statement={<p>A atitude de um pesquisador que classifica rituais indígenas como "primitivos" por julgá-los a partir dos padrões de sua própria cultura europeia é um exemplo de:</p>}
          options={[
            { letter: "a", text: "Relativismo cultural, pois analisa culturas de forma comparativa." },
            { letter: "b", text: "Universalismo ético, pois aplica critérios morais válidos para todos." },
            { letter: "c", text: "Etnocentrismo, pois usa os valores de sua cultura como critério de julgamento.", correct: true },
            { letter: "d", text: "Interculturalidade, pois estabelece diálogo entre culturas distintas." },
          ]}
          resolution={<p>Etnocentrismo é a prática de julgar outras culturas com base nos valores, padrões e crenças da própria cultura, considerando-a como referência natural e superior. O pesquisador do exemplo impõe a perspectiva europeia como critério avaliativo, sem compreender o ritual em seus próprios termos.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Paradoxo do Relativismo"
          statement={<p>O relativismo cultural radical afirma que não há valores morais universais e que cada cultura é válida em seus próprios termos. Qual é a principal inconsistência lógica dessa posição?</p>}
          options={[
            { letter: "a", text: "Ela implica que o etnocentrismo é inevitável em toda análise cultural." },
            { letter: "b", text: "Ao afirmar que 'toda cultura é igualmente válida', faz ela mesma um julgamento moral universal, contraditório com sua premissa.", correct: true },
            { letter: "c", text: "Ela pressupõe que os Direitos Humanos são inúteis para a convivência plural." },
            { letter: "d", text: "Ela ignora as diferenças biológicas entre grupos humanos." },
          ]}
          resolution={<p>O relativismo radical cai num paradoxo performativo: ao afirmar que "nenhum valor é universal", faz uma afirmação que pretende ser universalmente verdadeira. Além disso, ao defender que "toda cultura é igualmente válida", impõe um valor (a tolerância) como universalmente válido — contradizendo sua própria premissa.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Taylor e o Reconhecimento"
          statement={<p>Charles Taylor afirma que a política liberal "cega às diferenças" pode, paradoxalmente, ser uma forma de opressão. Por quê?</p>}
          options={[
            { letter: "a", text: "Porque o liberalismo favorece apenas os grupos economicamente dominantes." },
            { letter: "b", text: "Porque tratar todos como iguais, ignorando especificidades culturais, apaga identidades que dependem do reconhecimento público para se manter.", correct: true },
            { letter: "c", text: "Porque a igualdade formal é incompatível com a democracia representativa." },
            { letter: "d", text: "Porque o Estado liberal nunca garante direitos civis para minorias culturais." },
          ]}
          resolution={<p>Taylor argumenta que a identidade é dialógica: ela se forma em relação ao reconhecimento dos outros. Quando o Estado ignora diferenças culturais, trata todos como se pertencessem à cultura dominante — o que equivale a negar o reconhecimento às minorias. Isso pode ser uma forma velada de opressão: impõe a identidade dominante como "neutra" enquanto apaga as demais.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Tolerância e Direitos Humanos"
          statement={<p>"Uma sociedade tolerante deve ser intolerante com aqueles que pregam a intolerância." (Karl Popper, adaptado) Com base nessa afirmação, pode-se concluir que a tolerância:</p>}
          options={[
            { letter: "a", text: "É um valor absoluto que não admite exceções em nenhuma circunstância." },
            { letter: "b", text: "É incompatível com a defesa dos Direitos Humanos, que impõem valores universais." },
            { letter: "c", text: "Possui limites: não pode proteger práticas que visam destruir a própria pluralidade e tolerância.", correct: true },
            { letter: "d", text: "Deve ser praticada apenas no âmbito privado, sem regulamentação estatal." },
          ]}
          resolution={<p>O paradoxo de Popper mostra que a tolerância não é um valor absoluto e irrestrito. Se uma sociedade tolerante permitir que movimentos intolerantes se desenvolvam livremente, eles podem destruir a própria base da tolerância. Logo, a defesa da pluralidade exige que certas formas de intolerância (como o ódio que nega a humanidade de grupos) não sejam protegidas sob o guarda-chuva da tolerância.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Interculturalidade no Brasil"
          statement={<p>A Constituição Federal de 1988 reconhece aos povos indígenas seus costumes, línguas, crenças e tradições, bem como o direito às terras que ocupam. Do ponto de vista filosófico, essa garantia constitucional fundamenta-se na ideia de:</p>}
          options={[
            { letter: "a", text: "Relativismo cultural absoluto, que proíbe qualquer interferência externa nas práticas indígenas." },
            { letter: "b", text: "Universalismo ético que impõe ao Estado garantir a mesma cultura a todos os cidadãos." },
            { letter: "c", text: "Reconhecimento e valorização da diversidade cultural como componente da dignidade humana.", correct: true },
            { letter: "d", text: "Etnocentrismo positivo que eleva as culturas indígenas como superiores às demais." },
          ]}
          resolution={<p>A garantia constitucional dos direitos culturais indígenas baseia-se no princípio do reconhecimento (Taylor) e na afirmação da dignidade humana como inseparável da identidade cultural. Não é relativismo absoluto (o Estado pode intervir em casos de violações graves), nem universalismo homogeneizador — é o reconhecimento de que a diversidade cultural enriquece e que cada povo tem o direito de preservar sua identidade.</p>}
        />
      </section>
    </article>
  );
}
