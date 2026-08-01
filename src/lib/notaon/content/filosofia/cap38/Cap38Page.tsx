"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 38</span>
          <h1>Meio Ambiente, Sustentabilidade e Ética Ambiental</h1>
          <p>
            A crise ambiental do século XXI não é apenas técnica — é filosófica. Ela exige que
            repensemos a relação entre ser humano e natureza, os limites do crescimento econômico
            e nossas responsabilidades com as gerações futuras. Hans Jonas, Aldo Leopold e as
            tradições indígenas oferecem perspectivas radicalmente diferentes para enfrentar a
            maior crise ética da nossa época.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raízes Filosóficas</span>
        <h2>1. As Causas Filosóficas da Crise Ambiental</h2>
        <p>
          A destruição ambiental em larga escala não é acidental — tem raízes em escolhas
          filosóficas e culturais profundas do Ocidente moderno:
        </p>
        <ul>
          <li>
            <strong>Antropocentrismo radical:</strong> a visão de que o ser humano está no centro
            do universo e que a natureza existe para servir aos seus propósitos. René Descartes
            tratou os animais como máquinas sem alma ou sentimento.
          </li>
          <li>
            <strong>Dualismo natureza/cultura:</strong> a ideia de que os humanos estão separados
            da natureza, acima dela, e não são parte dela.
          </li>
          <li>
            <strong>Capitalismo e crescimento ilimitado:</strong> a lógica de acumulação que trata
            a natureza como recurso inesgotável para extração e lucro.
          </li>
          <li>
            <strong>Presentismo:</strong> a incapacidade de considerar as consequências das ações
            atuais para as gerações futuras.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>A crise como problema ético</h3>
          <p>
            A crise ambiental (mudanças climáticas, extinção de espécies, desmatamento, poluição)
            coloca questões éticas fundamentais: Temos obrigações morais com as gerações futuras?
            Os animais têm direitos? A natureza tem valor intrínseco ou apenas instrumental?
            Quem deve pagar pelo custo da transição ecológica?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Correntes Éticas</span>
        <h2>2. Três Correntes da Ética Ambiental</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Espectro das éticas ambientais">
            <rect x="10" y="10" width="500" height="180" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="260" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#14532d">Espectro das Éticas Ambientais</text>

            <rect x="25" y="50" width="140" height="120" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="95" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Antropocentrismo</text>
            <text x="95" y="92" textAnchor="middle" fontSize="9" fill="#1e40af">O ser humano é o</text>
            <text x="95" y="105" textAnchor="middle" fontSize="9" fill="#1e40af">único valor moral.</text>
            <text x="95" y="118" textAnchor="middle" fontSize="9" fill="#1e40af">Natureza = recurso</text>
            <text x="95" y="131" textAnchor="middle" fontSize="9" fill="#1e40af">para uso humano</text>
            <text x="95" y="152" textAnchor="middle" fontSize="9" fill="#6b7280">Kant, Descartes</text>
            <text x="95" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">(formas tradicionais)</text>

            <rect x="190" y="50" width="140" height="120" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="260" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Biocentrismo</text>
            <text x="260" y="92" textAnchor="middle" fontSize="9" fill="#065f46">Todos os seres vivos</text>
            <text x="260" y="105" textAnchor="middle" fontSize="9" fill="#065f46">têm valor intrínseco.</text>
            <text x="260" y="118" textAnchor="middle" fontSize="9" fill="#065f46">Direitos para animais</text>
            <text x="260" y="131" textAnchor="middle" fontSize="9" fill="#065f46">e plantas</text>
            <text x="260" y="152" textAnchor="middle" fontSize="9" fill="#6b7280">Peter Singer,</text>
            <text x="260" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">Albert Schweitzer</text>

            <rect x="355" y="50" width="140" height="120" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="425" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Ecocentrismo</text>
            <text x="425" y="92" textAnchor="middle" fontSize="9" fill="#92400e">O ecossistema como</text>
            <text x="425" y="105" textAnchor="middle" fontSize="9" fill="#92400e">um todo tem valor.</text>
            <text x="425" y="118" textAnchor="middle" fontSize="9" fill="#92400e">Humanos: parte</text>
            <text x="425" y="131" textAnchor="middle" fontSize="9" fill="#92400e">da teia da vida</text>
            <text x="425" y="152" textAnchor="middle" fontSize="9" fill="#6b7280">Aldo Leopold,</text>
            <text x="425" y="165" textAnchor="middle" fontSize="9" fill="#6b7280">ecologia profunda</text>
          </svg>
          <figcaption>As três principais correntes da ética ambiental: do antropocentrismo ao ecocentrismo.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hans Jonas</span>
        <h2>3. Hans Jonas e o Princípio Responsabilidade</h2>
        <p>
          <strong>Hans Jonas</strong> (1903–1993) é o filósofo da responsabilidade diante da crise
          tecnológica e ambiental. Em <em>O Princípio Responsabilidade</em> (1979), ele propõe
          um imperativo ético para a era tecnológica:
        </p>
        <blockquote style={{borderLeft: "4px solid #059669", paddingLeft: "1rem", fontStyle: "italic", color: "#065f46"}}>
          "Age de tal forma que os efeitos de tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra."
        </blockquote>
        <p>
          Jonas critica o imperativo kantiano por ser abstrato e não levar em conta as consequências
          de longo prazo. No mundo tecnológico, nossas ações têm alcance global e intergeracional.
          Por isso, precisamos de uma <strong>ética do futuro</strong>: a responsabilidade pelos
          que ainda não nasceram é tão moralmente obrigatória quanto a responsabilidade pelos
          contemporâneos.
        </p>
        <div className="lesson-highlight">
          <h3>Heurística do medo</h3>
          <p>
            Jonas propõe a "heurística do medo": diante da incerteza sobre os impactos de uma
            tecnologia, devemos presumir o pior cenário e agir com precaução. Quando está em jogo
            a possibilidade de dano irreversível à humanidade (como a destruição da biosfera), o
            princípio da precaução deve prevalecer sobre o princípio do progresso.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aldo Leopold</span>
        <h2>4. Aldo Leopold e a Ética da Terra</h2>
        <p>
          <strong>Aldo Leopold</strong> (1887–1948), ecologista e filósofo norte-americano,
          propôs em <em>A Sand County Almanac</em> (1949) a <strong>ética da terra</strong>:
          a extensão da comunidade moral para incluir solos, águas, plantas e animais —
          coletivamente, a "terra".
        </p>
        <p>
          Seu princípio fundamental: <em>"Uma coisa é correta quando tende a preservar a
          integridade, a estabilidade e a beleza da comunidade biótica. É errada quando tende
          ao contrário."</em> Isso representa uma ruptura radical com o antropocentrismo: o
          critério ético não é mais o bem humano, mas a saúde do ecossistema como um todo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento Sustentável</span>
        <h2>5. Sustentabilidade: do Relatório Brundtland aos ODS</h2>
        <p>
          O conceito de <strong>desenvolvimento sustentável</strong> foi definido pelo
          Relatório Brundtland (1987, ONU): "Desenvolvimento que satisfaz as necessidades
          do presente sem comprometer a capacidade das gerações futuras de satisfazerem suas
          próprias necessidades."
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Marco</th><th>Ano</th><th>Resultado</th></tr>
            </thead>
            <tbody>
              <tr><td>Relatório Brundtland</td><td>1987</td><td>Conceito de desenvolvimento sustentável</td></tr>
              <tr><td>Rio-92 (ECO-92)</td><td>1992</td><td>Agenda 21, Convenção do Clima, Biodiversidade</td></tr>
              <tr><td>Protocolo de Kyoto</td><td>1997</td><td>Metas de redução de emissões para países ricos</td></tr>
              <tr><td>Objetivos do Milênio (ODM)</td><td>2000</td><td>8 metas de desenvolvimento humano e ambiental</td></tr>
              <tr><td>Acordo de Paris</td><td>2015</td><td>Limitar aquecimento a 1,5°C–2°C até 2100</td></tr>
              <tr><td>ODS (Agenda 2030)</td><td>2015</td><td>17 Objetivos de Desenvolvimento Sustentável</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Povos Indígenas</span>
        <h2>6. Cosmovisões Indígenas e o Buen Vivir</h2>
        <p>
          As tradições indígenas oferecem alternativas filosóficas ao modelo de desenvolvimento
          ocidental. Para muitos povos indígenas, a natureza não é "recurso" — ela é parente,
          ancestral, sujeito de direitos. A dicotomia humano/natureza não existe.
        </p>
        <p>
          O conceito andino de <strong>Buen Vivir</strong> (Sumak Kawsay, em quéchua) propõe
          uma vida em harmonia com a comunidade e com a natureza, em vez de crescimento econômico
          ilimitado. As Constituições do Equador (2008) e da Bolívia (2009) incorporaram direitos
          da natureza (Pacha Mama) ao ordenamento jurídico — avanços filosófico-jurídicos inéditos.
        </p>
        <div className="lesson-highlight">
          <h3>Justiça climática</h3>
          <p>
            A crise climática é também uma questão de justiça: os países mais pobres e os povos
            marginalizados (incluindo indígenas) são os que menos contribuíram para o aquecimento
            global, mas são os que mais sofrem seus efeitos. Isso coloca o problema da
            responsabilidade diferenciada entre nações e o debate sobre "dívida ecológica" dos
            países ricos para com os países em desenvolvimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ecofeminismo</span>
        <h2>7. A Ética do Cuidado e a Filosofia Ecofeminista</h2>
        <p>
          O <strong>ecofeminismo</strong> é uma corrente filosófica que articula a dominação da
          natureza com a dominação das mulheres, argumentando que ambas têm a mesma raiz cultural:
          o patriarcado e a razão instrumental do Ocidente moderno. Pensadoras como
          <strong>Val Plumwood</strong>, <strong>Karen Warren</strong> e <strong>Vandana Shiva</strong>
          desenvolveram essa perspectiva.
        </p>
        <p>
          A lógica de dominação ecofeminista identifica uma estrutura conceitual dualista que
          organiza o pensamento ocidental: cultura/natureza, razão/emoção, homem/mulher,
          humano/animal. Em cada par, o primeiro elemento é valorizado e o segundo, subordinado.
          A crítica ecofeminista mostra como esses dualismos se reforçam mutuamente: a natureza
          é feminilizada ("Mãe Natureza") e explorada assim como as mulheres; as mulheres são
          naturalizadas e tratadas como objetos de controle.
        </p>
        <p>
          A <strong>ética do cuidado</strong> (Carol Gilligan, Nel Noddings) oferece uma
          alternativa à ética baseada em regras abstratas e universais (Kant). Em vez de princípios
          universais, propõe relações concretas de responsabilidade, atenção e cuidado — tanto com
          seres humanos quanto com outros seres vivos e ecossistemas. Essa perspectiva influencia
          a bioética, a ética ambiental e a crítica feminista do modelo médico e científico
          dominante.
        </p>
        <div className="lesson-highlight">
          <h3>Vandana Shiva e a soberania alimentar</h3>
          <p>
            A física e ativista indiana <strong>Vandana Shiva</strong> (1952–) articula
            ecofeminismo e crítica ao capitalismo agroindustrial. Ela defende a
            <em>soberania alimentar</em> — o direito dos povos de definir suas próprias políticas
            agrícolas e alimentares — contra a imposição de transgênicos e monoculturas por
            corporações multinacionais. Para Shiva, as mulheres camponesas são as principais
            guardiãs da biodiversidade e dos saberes tradicionais que a agricultura industrial
            está destruindo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crise e Capitalismo</span>
        <h2>8. Crise Climática, Capitalismo e as Raízes Filosóficas do Impasse</h2>
        <p>
          A crise climática é hoje o maior desafio ético da história humana. Filosoficamente,
          ela é o resultado de escolhas civilizatórias que a filosofia ajudou a construir —
          e que a filosofia pode ajudar a desconstruir.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Diagnóstico filosófico</th>
                <th>Autor</th>
                <th>Proposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capitalismo = destruição ecológica estrutural</td>
                <td>Marx atualizado (ecosocialismo)</td>
                <td>Transformação do modo de produção; subordinar economia à ecologia</td>
              </tr>
              <tr>
                <td>Razão instrumental como problema</td>
                <td>Adorno/Horkheimer (Escola de Frankfurt)</td>
                <td>Razão comunicativa (Habermas); valorizar outros saberes</td>
              </tr>
              <tr>
                <td>Antropocentrismo filosófico</td>
                <td>Descartes, Bacon</td>
                <td>Ecocentrismo (Leopold); biocentrismo (Schweitzer)</td>
              </tr>
              <tr>
                <td>Presentismo e ausência de futuro</td>
                <td>Hans Jonas</td>
                <td>Ética da responsabilidade; princípio de precaução</td>
              </tr>
              <tr>
                <td>Colonialidade ecológica</td>
                <td>Quijano, Escobar</td>
                <td>Ecologia política decolonial; direitos da natureza</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A noção de <strong>Antropoceno</strong> — proposta pelos geólogos e adotada pela
          filosofia — designa a era geológica em que a ação humana se tornou a principal força
          transformadora da Terra. Para filósofos como <strong>Bruno Latour</strong> e
          <strong>Donna Haraway</strong>, o Antropoceno exige repensar a distinção natureza/cultura:
          não somos "observadores" do planeta — somos parte dele, e nossa separação imaginária
          da natureza é a raiz do problema.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>🌳</span><h3>Crise Ambiental</h3><p>Tem raízes filosóficas: antropocentrismo, dualismo natureza/cultura, lógica capitalista.</p></div>
          <div className="math-card"><span>🔬</span><h3>Hans Jonas</h3><p>Princípio responsabilidade: agir compatível com a permanência da vida humana futura.</p></div>
          <div className="math-card"><span>🌿</span><h3>Aldo Leopold</h3><p>Ética da terra: a comunidade biótica (ecossistema) tem valor intrínseco.</p></div>
          <div className="math-card"><span>♻️</span><h3>Sustentabilidade</h3><p>Brundtland (1987): satisfazer necessidades do presente sem comprometer as gerações futuras.</p></div>
          <div className="math-card"><span>🏔️</span><h3>Buen Vivir</h3><p>Cosmovisão andina: vida em harmonia com a comunidade e a natureza, alternativa ao desenvolvimento.</p></div>
          <div className="math-card"><span>⚖️</span><h3>Justiça Climática</h3><p>Os mais pobres sofrem mais a crise, mas menos a causaram: questão de responsabilidade diferenciada.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Hans Jonas e a Responsabilidade"
          statement={<p>Hans Jonas propôs o "princípio responsabilidade" como resposta à crise ambiental. Sua tese central afirma que devemos:</p>}
          options={[
            { letter: "a", text: "Agir com base no imperativo categórico kantiano, sem considerar as consequências ambientais." },
            { letter: "b", text: "Priorizar o crescimento econômico e lidar com os danos ambientais depois." },
            { letter: "c", text: "Agir de forma que os efeitos de nossas ações sejam compatíveis com a permanência da vida humana na Terra, incluindo gerações futuras.", correct: true },
            { letter: "d", text: "Abandonar a tecnologia e retornar a formas de vida pré-industriais." },
          ]}
          resolution={<p>Jonas propôs um imperativo ético para a era tecnológica: diante da capacidade humana de causar danos globais e irreversíveis, precisamos de uma ética orientada ao futuro. A responsabilidade com as gerações futuras — que não podem se defender — é central em sua proposta, incluindo a "heurística do medo" como princípio de precaução.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Biocentrismo vs. Ecocentrismo"
          statement={<p>Qual a principal diferença entre biocentrismo e ecocentrismo na ética ambiental?</p>}
          options={[
            { letter: "a", text: "O biocentrismo considera que apenas animais têm valor; o ecocentrismo inclui também plantas." },
            { letter: "b", text: "O biocentrismo atribui valor intrínseco a todos os seres vivos individualmente; o ecocentrismo atribui valor ao ecossistema como um todo, incluindo elementos abióticos.", correct: true },
            { letter: "c", text: "O biocentrismo é uma posição religiosa; o ecocentrismo é estritamente científico." },
            { letter: "d", text: "Não há diferença significativa: ambos rejeitam o antropocentrismo da mesma forma." },
          ]}
          resolution={<p>O biocentrismo (Schweitzer, Singer em parte) atribui valor moral a cada organismo vivo individual: plantas, animais e humanos têm igual direito à vida por sua vitalidade intrínseca. O ecocentrismo (Leopold) vai além: o valor moral pertence ao ecossistema como sistema integrado — solos, águas, clima, organismos — e não apenas a cada indivíduo vivo.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Desenvolvimento Sustentável: críticas"
          statement={<p>Pensadores radicais da ecologia política criticam o conceito de "desenvolvimento sustentável" do Relatório Brundtland. Qual é a crítica mais consistente?</p>}
          options={[
            { letter: "a", text: "O conceito é cientificamente impreciso e não pode ser aplicado em políticas públicas." },
            { letter: "b", text: "O conceito combina termos contraditórios: 'desenvolvimento' pressupõe crescimento contínuo, enquanto 'sustentável' reconhece os limites planetários — a combinação pode mascarar a manutenção do modelo de crescimento.", correct: true },
            { letter: "c", text: "O conceito exige que os países pobres renunciem ao desenvolvimento para beneficiar os ricos." },
            { letter: "d", text: "O conceito ignora completamente as gerações futuras em sua formulação." },
          ]}
          resolution={<p>A crítica ecológica radical aponta que "desenvolvimento sustentável" pode ser um oximoro: o modelo capitalista de desenvolvimento exige crescimento econômico contínuo, que em si é incompatível com os limites biofísicos do planeta. O conceito pode servir para "esverdear" o capitalismo sem questionar suas estruturas fundamentais, perpetuando a lógica extrativista com roupagem ecológica.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Cosmovisões Indígenas e Direitos da Natureza"
          statement={<p>"Para os povos andinos, a Pacha Mama (Mãe Terra) não é um recurso a ser explorado, mas um ser vivo com quem os humanos mantêm uma relação de reciprocidade. As Constituições do Equador e da Bolívia reconheceram direitos à natureza." Com base no texto, a posição filosófica expressa pelas cosmovisões indígenas representa uma alternativa ao modelo ocidental dominante porque:</p>}
          options={[
            { letter: "a", text: "Nega qualquer uso humano da natureza, propondo o retorno ao estado selvagem." },
            { letter: "b", text: "Rejeita a dicotomia humano/natureza e atribui à natureza um valor não instrumental, de sujeito de direitos, e não apenas de recurso para fins humanos.", correct: true },
            { letter: "c", text: "Defende que o desenvolvimento econômico deve ser substituído pela subsistência individual." },
            { letter: "d", text: "Propõe a superioridade moral das culturas indígenas sobre as culturas ocidentais." },
          ]}
          resolution={<p>As cosmovisões indígenas rompem com o antropocentrismo e o dualismo natureza/cultura da tradição ocidental moderna. Ao reconhecer a natureza como sujeito (não objeto) de direitos, as Constituições do Equador e da Bolívia incorporaram uma ruptura filosófica: a natureza tem valor intrínseco, independente de sua utilidade para os humanos. Isso dialoga com o ecocentrismo filosófico ocidental, mas a partir de uma perspectiva radicalmente diferente.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Justiça Climática"
          statement={<p>Os países mais pobres do mundo emitem menos de 10% dos gases de efeito estufa, mas são os mais afetados pelas mudanças climáticas — com maior vulnerabilidade a secas, inundações e perda de colheitas. Esse dado ilustra o conceito de:</p>}
          options={[
            { letter: "a", text: "Relativismo ambiental, pois cada país deve cuidar de seus próprios problemas ecológicos." },
            { letter: "b", text: "Biocentrismo, pois demonstra que humanos são menos importantes que ecossistemas." },
            { letter: "c", text: "Injustiça climática, pois as populações que menos contribuíram para a crise são as que mais sofrem suas consequências, colocando a distribuição dos danos como questão ética central.", correct: true },
            { letter: "d", text: "Princípio de precaução, pois indica que os países pobres devem agir preventivamente antes dos ricos." },
          ]}
          resolution={<p>A justiça climática articula ética ambiental e justiça social: os impactos das mudanças climáticas não se distribuem uniformemente — recaem desproporcionalmente sobre os mais vulneráveis (países pobres, comunidades indígenas, populações costeiras). Isso gera a demanda por responsabilidade diferenciada: os países historicamente responsáveis pelo aquecimento têm obrigação maior de financiar a adaptação e a mitigação nos países mais afetados.</p>}
        />
      </section>
    </article>
  );
}
