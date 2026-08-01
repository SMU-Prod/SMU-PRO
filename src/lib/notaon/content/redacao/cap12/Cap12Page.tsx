"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 12</span>
          <h1>Argumentação Filosófica</h1>
          <p>
            Aprenda a usar os grandes pensadores da filosofia ocidental como suporte
            teórico de alto nível para seus argumentos — com precisão conceitual,
            conexão real ao tema e frases-modelo para cada filósofo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que a Filosofia Funciona como Repertório de Alto Nível</h2>
        <p>
          A filosofia oferece ao candidato algo que nenhum outro tipo de repertório oferece
          com a mesma profundidade: <strong>fundamentação teórica</strong>. Ao usar um filósofo,
          o candidato demonstra que seu argumento não é uma impressão pessoal, mas está
          ancorado em um sistema de pensamento desenvolvido por séculos. Isso eleva
          diretamente a Competência 2 (compreensão e repertório) e a Competência 3
          (organização e argumentação).
        </p>
        <div className="lesson-highlight">
          <h3>Regra fundamental: filosofia serve ao argumento</h3>
          <p>
            O filósofo deve aparecer <em>dentro</em> do argumento, não antes dele. A estrutura
            correta é: <strong>argumento (causa ou consequência) → "Conforme sustentou X..." →
            explicação do conceito → conexão explícita ao tema</strong>. Nunca abra um parágrafo
            com "Segundo Aristóteles..." sem antes estabelecer qual argumento está sendo
            construído.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 230" width="480" height="230" aria-label="Diagrama de filósofos e temas compatíveis no ENEM">
            <rect width="480" height="230" fill="#f8fafc" rx="12" />
            {/* Cards grid 3x2 */}
            {/* Platão */}
            <rect x="10" y="10" width="140" height="95" rx="8" fill="#6366f1" />
            <text x="80" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PLATÃO</text>
            <text x="80" y="50" textAnchor="middle" fill="white" fontSize="9">Alegoria da Caverna</text>
            <text x="80" y="65" textAnchor="middle" fill="#c7d2fe" fontSize="8">Conceito: Ignorância</text>
            <text x="80" y="80" textAnchor="middle" fill="#c7d2fe" fontSize="8">vs. Conhecimento</text>
            <text x="80" y="96" textAnchor="middle" fill="white" fontSize="8">Temas: Educação, Mídia</text>
            {/* Rousseau */}
            <rect x="170" y="10" width="140" height="95" rx="8" fill="#10b981" />
            <text x="240" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ROUSSEAU</text>
            <text x="240" y="50" textAnchor="middle" fill="white" fontSize="9">Contrato Social</text>
            <text x="240" y="65" textAnchor="middle" fill="#a7f3d0" fontSize="8">Conceito: Vontade</text>
            <text x="240" y="80" textAnchor="middle" fill="#a7f3d0" fontSize="8">Geral do Estado</text>
            <text x="240" y="96" textAnchor="middle" fill="white" fontSize="8">Temas: Estado, Democracia</text>
            {/* Marx */}
            <rect x="330" y="10" width="140" height="95" rx="8" fill="#ef4444" />
            <text x="400" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MARX</text>
            <text x="400" y="50" textAnchor="middle" fill="white" fontSize="9">Alienação / Mais-valia</text>
            <text x="400" y="65" textAnchor="middle" fill="#fecaca" fontSize="8">Conceito: Exploração</text>
            <text x="400" y="80" textAnchor="middle" fill="#fecaca" fontSize="8">do Trabalhador</text>
            <text x="400" y="96" textAnchor="middle" fill="white" fontSize="8">Temas: Trabalho, Desigualdade</text>
            {/* Locke */}
            <rect x="10" y="120" width="140" height="95" rx="8" fill="#f59e0b" />
            <text x="80" y="142" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">LOCKE</text>
            <text x="80" y="160" textAnchor="middle" fill="white" fontSize="9">Direitos Naturais</text>
            <text x="80" y="175" textAnchor="middle" fill="#fef3c7" fontSize="8">Conceito: Vida, Liberdade</text>
            <text x="80" y="190" textAnchor="middle" fill="#fef3c7" fontSize="8">e Propriedade</text>
            <text x="80" y="206" textAnchor="middle" fill="white" fontSize="8">Temas: Liberdade, DH</text>
            {/* H. Arendt */}
            <rect x="170" y="120" width="140" height="95" rx="8" fill="#8b5cf6" />
            <text x="240" y="142" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">H. ARENDT</text>
            <text x="240" y="160" textAnchor="middle" fill="white" fontSize="9">Banalidade do Mal</text>
            <text x="240" y="175" textAnchor="middle" fill="#ddd6fe" fontSize="8">Conceito: Cumplicidade</text>
            <text x="240" y="190" textAnchor="middle" fill="#ddd6fe" fontSize="8">Silenciosa</text>
            <text x="240" y="206" textAnchor="middle" fill="white" fontSize="8">Temas: Violência, Autoritarismo</text>
            {/* Aristóteles */}
            <rect x="330" y="120" width="140" height="95" rx="8" fill="#06b6d4" />
            <text x="400" y="142" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ARISTÓTELES</text>
            <text x="400" y="160" textAnchor="middle" fill="white" fontSize="9">Animal Político</text>
            <text x="400" y="175" textAnchor="middle" fill="#cffafe" fontSize="8">Conceito: Participação</text>
            <text x="400" y="190" textAnchor="middle" fill="#cffafe" fontSize="8">na Vida Coletiva</text>
            <text x="400" y="206" textAnchor="middle" fill="white" fontSize="8">Temas: Cidadania, Bem Comum</text>
          </svg>
          <figcaption>Os seis filósofos mais usados no ENEM — com conceito central e temas compatíveis.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Platão</span>
        <h2>2. Platão e a Alegoria da Caverna</h2>
        <p>
          Na <em>República</em>, Platão propôs a Alegoria da Caverna para explicar a diferença
          entre a ignorância e o conhecimento verdadeiro. Prisioneiros acorrentados numa caverna
          acreditam que as sombras projetadas na parede são a realidade; apenas quem se liberta
          e contempla a luz do sol alcança a verdade. A alegoria é uma das mais versáteis da
          filosofia ocidental porque pode ser aplicada a qualquer tema que envolva <strong>ilusão,
          manipulação, desinformação, educação ou tomada de consciência</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Frases-modelo para usar Platão</h3>
          <p>
            "Tal qual os prisioneiros da caverna platônica, parcela significativa da população
            brasileira permanece acorrentada à desinformação, incapaz de distinguir notícias
            verdadeiras das falsas."
          </p>
          <p>
            "Platão, ao propor a Alegoria da Caverna, já sinalizava que a ignorância não é
            apenas ausência de instrução, mas um estado imposto por estruturas de poder que
            têm interesse em manter as massas na penumbra."
          </p>
        </div>
        <p>
          Temas compatíveis: fake news, analfabetismo funcional, manipulação midiática,
          censura, qualidade do ensino público, acesso à informação.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aristóteles</span>
        <h2>3. Aristóteles: Ética, Bem Comum e Cidadania</h2>
        <p>
          Aristóteles afirmou que "o ser humano é, por natureza, um animal político" — o que
          significa que a vida em comunidade não é opcional, mas constitutiva da humanidade.
          Para ele, a pólis (cidade-estado) era o espaço de realização plena do ser humano, e
          a ética estava intrinsecamente ligada à participação na vida coletiva. Fora da
          comunidade, só existe o deus ou a besta.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação na redação</h3>
          <p>
            "Aristóteles já reconhecia que o ser humano só se realiza plenamente em comunidade.
            A exclusão de grupos vulneráveis da vida social — seja pelo preconceito, pela falta
            de acessibilidade ou pela privação de direitos — nega essa condição fundamental da
            existência humana, reduzindo cidadãos a meros espectadores da própria vida."
          </p>
        </div>
        <p>
          Temas compatíveis: inclusão social, cidadania, participação política, pessoas com
          deficiência, direito à cidade, bem comum versus interesse individual.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Locke</span>
        <h2>4. John Locke: Direitos Naturais e Democracia</h2>
        <p>
          John Locke é o pai do liberalismo político. Em <em>Segundo Tratado sobre o Governo
          Civil</em>, defendeu que todo ser humano possui, por natureza, direitos inalienáveis à
          <strong> vida, à liberdade e à propriedade</strong>. Esses direitos existem antes do
          Estado e não podem ser suprimidos por ele. O Estado existe apenas para proteger esses
          direitos; quando os viola, perde sua legitimidade.
        </p>
        <div className="lesson-highlight">
          <h3>Frase-modelo</h3>
          <p>
            "Conforme preconizava John Locke, os direitos à vida, à liberdade e à propriedade
            são inalienáveis e precedem qualquer arranjo institucional. Ao permitir que grupos
            marginalizados vivam sem segurança ou proteção estatal, o Estado brasileiro falha
            no único propósito que justifica sua existência."
          </p>
        </div>
        <p>
          Temas compatíveis: liberdade de expressão, democracia, violência policial, segurança
          pública, direito à moradia, privacidade digital.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rousseau</span>
        <h2>5. Rousseau: Vontade Geral e Papel do Estado</h2>
        <p>
          Jean-Jacques Rousseau elaborou em <em>Do Contrato Social</em> (1762) a ideia de que a
          legitimidade do governo deriva da <strong>vontade geral</strong> — o interesse coletivo
          de todos os cidadãos, que transcende a soma das vontades individuais. O Estado legítimo
          é aquele que governa em nome de todos, especialmente dos mais vulneráveis. Ao contrário
          de Hobbes, Rousseau acreditava que o ser humano é naturalmente bom e que a sociedade o
          corrompe.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação prática</h3>
          <p>
            "Rousseau sustentava que o contrato social exige do Estado a proteção da vontade
            geral, não dos interesses de minorias privilegiadas. Nesse sentido, políticas
            públicas que ignoram as demandas da parcela mais vulnerável da população representam
            uma ruptura do pacto que funda a legitimidade governamental."
          </p>
        </div>
        <p>
          Temas compatíveis: desigualdade social, políticas públicas, saúde pública, educação,
          participação democrática, corrupção, reforma tributária.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Marx</span>
        <h2>6. Karl Marx: Alienação, Mais-valia e Desigualdade</h2>
        <p>
          Karl Marx analisou o capitalismo industrial como um sistema que sistematicamente
          explora o trabalhador. Dois conceitos são especialmente úteis na redação ENEM:
        </p>
        <ul>
          <li><strong>Alienação:</strong> o trabalhador se torna estranho ao produto de seu trabalho, pois não o controla nem o possui. No sentido mais amplo, alienação é a perda da consciência crítica sobre a própria condição.</li>
          <li><strong>Mais-valia:</strong> a diferença entre o valor que o trabalhador produz e o salário que recebe — o mecanismo fundamental de concentração de riqueza.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Frase-modelo</h3>
          <p>
            "À luz do pensamento de Karl Marx, a concentração de riqueza no Brasil não é
            acidental, mas resultado de um sistema que, ao não recompensar adequadamente o
            trabalho, perpetua a transferência de valor dos que produzem para os que detêm o
            capital."
          </p>
        </div>
        <p>
          Temas compatíveis: desigualdade social, trabalho infantil, trabalho análogo à
          escravidão, uberização do trabalho, direitos trabalhistas, concentração de renda.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hannah Arendt</span>
        <h2>7. Hannah Arendt: Banalidade do Mal e Totalitarismo</h2>
        <p>
          Hannah Arendt, ao cobrir o julgamento do nazista Adolf Eichmann em Jerusalém,
          cunhou o conceito de <strong>banalidade do mal</strong>: grandes atrocidades não são
          necessariamente cometidas por monstros, mas por pessoas comuns que simplesmente
          obedecem ordens sem pensar criticamente sobre suas ações. Além disso, em <em>Origens do
          Totalitarismo</em>, analisou como regimes autoritários destroem a esfera pública e
          eliminam a pluralidade humana.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação poderosa</h3>
          <p>
            "Como observou Hannah Arendt ao analisar o totalitarismo, a indiferença e a
            obediência irreflexiva são as condições que permitem que injustiças se perpetuem.
            No contexto brasileiro, a naturalização da violência contra grupos vulneráveis
            configura exatamente essa banalidade: o mal que se reproduz não pela maldade
            explícita, mas pela omissão coletiva."
          </p>
        </div>
        <p>
          Temas compatíveis: violência, racismo estrutural, autoritarismo, indiferença
          social, liberdade de expressão, violência policial, censura.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Como introduzir</span>
        <h2>8. Formas de Introduzir Citações Filosóficas</h2>
        <p>
          A forma como se apresenta o filósofo na redação influencia diretamente a fluidez
          do texto. Evite sempre começar com o nome do filósofo; prefira introduzi-lo após
          o argumento já estar estabelecido. Veja as fórmulas mais eficazes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fórmula de introdução</th>
                <th>Exemplo prático</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segundo [filósofo]...</td>
                <td>"Segundo Rousseau, o contrato social exige que o Estado sirva à vontade geral..."</td>
              </tr>
              <tr>
                <td>Conforme sustenta/sustentava...</td>
                <td>"Conforme sustentava Platão na Alegoria da Caverna, a ignorância é uma condição imposta..."</td>
              </tr>
              <tr>
                <td>À luz do pensamento de...</td>
                <td>"À luz do pensamento de Marx, a desigualdade não é natural, mas estruturalmente produzida..."</td>
              </tr>
              <tr>
                <td>Na perspectiva de...</td>
                <td>"Na perspectiva de Hannah Arendt, a omissão diante da violência é uma forma de cumplicidade..."</td>
              </tr>
              <tr>
                <td>Como preconizava...</td>
                <td>"Como preconizava John Locke, os direitos naturais não podem ser suprimidos pelo Estado..."</td>
              </tr>
              <tr>
                <td>O filósofo X já sinalizava que...</td>
                <td>"Aristóteles já sinalizava que a participação coletiva é constitutiva da humanidade..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros</span>
        <h2>9. Erros Graves com Repertório Filosófico</h2>
        <p>
          Três tipos de erro comprometem seriamente a nota ao usar filosofia na redação:
        </p>
        <div className="lesson-highlight">
          <h3>Erro 1: Atribuição errada de frase ou conceito</h3>
          <p>
            "O homem é o lobo do homem" é de Hobbes, não de Rousseau. "A imaginação é mais
            importante que o conhecimento" é de Einstein, não de um filósofo. Quando tiver
            dúvida, não atribua — use "conforme a tradição filosófica iluminista" ou apenas
            descreva a ideia.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro 2: Usar o conceito errado para o contexto</h3>
          <p>
            Usar Marx para discutir liberdade religiosa, sem adaptar o conceito ao contexto,
            gera incoerência. Cada filósofo tem temas naturais; forçar uma conexão artificial
            prejudica a argumentação.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro 3: Forçar o repertório sem conectá-lo ao tema</h3>
          <p>
            Citar Rousseau e não explicar como o Contrato Social se relaciona ao problema
            discutido é o uso mais ineficaz possível. O corretor percebe imediatamente que
            a citação é decorativa — e penaliza a Competência 2.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelos prontos</span>
        <h2>10. Frases-Modelo Integradas a Argumentos Reais</h2>
        <div className="lesson-highlight">
          <h3>Platão — Educação de qualidade</h3>
          <p>
            "A precariedade da educação pública brasileira mantém gerações inteiras acorrentadas
            ao que Platão denominaria 'caverna da ignorância', impedindo-as de desenvolver o
            pensamento crítico necessário para transformar sua realidade."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Rousseau — Desigualdade social</h3>
          <p>
            "Ao permitir que 1% da população detenha parcela desproporcional da riqueza
            nacional, o Estado brasileiro viola o princípio rousseauniano de que o contrato
            social existe para proteger a vontade geral, não os privilégios de poucos."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Hannah Arendt — Violência e indiferença</h3>
          <p>
            "Hannah Arendt demonstrou que a violência não se sustenta apenas pela brutalidade
            dos perpetradores, mas pela omissão dos espectadores. A indiferença social diante
            do feminicídio perpetua, portanto, a lógica que deveria ser combatida."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Argumentação Filosófica</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✍️</span>
            <h3>Integre ao argumento</h3>
            <p>O filósofo aparece depois de estabelecer o argumento — nunca como abertura de parágrafo.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Seis filósofos-chave</h3>
            <p>Platão, Aristóteles, Locke, Rousseau, Marx e Hannah Arendt cobrem a maioria dos temas ENEM.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Nunca atribua errado</h3>
            <p>Frase ou conceito errado penaliza C1 e C2. Na dúvida, use "a tradição filosófica..." sem nomear.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Conecte ao tema</h3>
            <p>Após apresentar o conceito filosófico, sempre escreva a frase de conexão explícita ao problema.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Explique o conceito</h3>
            <p>Não assuma que o corretor "sabe" o que é banalidade do mal. Explique em uma frase o conceito.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Um filósofo por argumento</h3>
            <p>Dois filósofos no mesmo parágrafo confundem. Use um por parágrafo de desenvolvimento.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Conceito central de Rousseau"
          statement={
            <p>
              Em uma redação sobre o papel do Estado no combate à desigualdade social, o
              pensamento de Rousseau é útil principalmente porque:
            </p>
          }
          options={[
            { letter: "a", text: "Rousseau defendia que a desigualdade é natural e inevitável nas sociedades modernas." },
            { letter: "b", text: "Rousseau argumentou que o Estado legítimo deve governar em nome da vontade geral, protegendo os mais vulneráveis.", correct: true },
            { letter: "c", text: "Rousseau criou o conceito de alienação do trabalhador, aplicável à desigualdade econômica." },
            { letter: "d", text: "Rousseau defendia que direitos naturais como vida e propriedade precedem o Estado." },
          ]}
          resolution={
            <p>
              A ideia central de Rousseau para temas sobre Estado e desigualdade é o Contrato
              Social: o Estado tem legitimidade apenas quando governa em função da vontade
              geral, ou seja, do interesse coletivo — especialmente dos mais vulneráveis. A
              alternativa D descreve Locke, não Rousseau.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Platão e fake news"
          statement={
            <p>
              Um candidato quer usar repertório filosófico em uma redação sobre
              <strong> desinformação nas redes sociais</strong>. A Alegoria da Caverna de Platão
              é adequada porque:
            </p>
          }
          options={[
            { letter: "a", text: "Platão discutia especificamente os riscos da internet e da desinformação digital." },
            { letter: "b", text: "A alegoria representa a condição humana presa a ilusões tomadas por realidade, metáfora direta para o consumo acrítico de fake news.", correct: true },
            { letter: "c", text: "Platão defendia a censura total das redes sociais como solução para a desinformação." },
            { letter: "d", text: "A alegoria descreve a câmara de eco das redes sociais com terminologia moderna." },
          ]}
          resolution={
            <p>
              A Alegoria da Caverna descreve pessoas que tomam sombras (ilusões) por realidade
              porque nunca foram expostas à luz da verdade. Essa estrutura é uma metáfora
              poderosa para o consumo acrítico de fake news: usuários que nunca desenvolveram
              letramento midiático tomam notícias falsas como verdadeiras, permanecendo
              "acorrentados" à desinformação. A conexão é filosófica, não histórica.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Diferença entre Hobbes e Rousseau"
          statement={
            <p>
              Em uma redação sobre <strong>segurança pública e violência urbana</strong>, qual
              é a diferença fundamental entre usar Hobbes e usar Rousseau como repertório?
            </p>
          }
          options={[
            { letter: "a", text: "Hobbes e Rousseau têm visões idênticas sobre o papel do Estado na segurança pública." },
            { letter: "b", text: "Hobbes vê a violência como resultado da natureza humana predatória (Estado necessário para contê-la); Rousseau a vê como resultado da corrupção social (Estado falhou em sua função protetora).", correct: true },
            { letter: "c", text: "Hobbes é adequado para temas ambientais; Rousseau, para temas de violência." },
            { letter: "d", text: "Ambos defendiam que o ser humano é naturalmente bom e que a sociedade o corrompe." },
          ]}
          resolution={
            <p>
              Hobbes argumentava que, sem Estado, a vida seria "solitária, pobre, sórdida,
              brutal e curta" — a violência é a condição natural do ser humano. Rousseau, ao
              contrário, via o ser humano como naturalmente bom e a violência como produto
              da desigualdade produzida pela sociedade. Para uma redação sobre violência, a
              escolha entre os dois muda o argumento: Hobbes justifica mais policiamento;
              Rousseau justifica redução da desigualdade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Hannah Arendt e violência doméstica"
          statement={
            <p>
              (Estilo ENEM) Uma candidata escreveu o trecho a seguir: "Hannah Arendt, ao cunhar
              o conceito de banalidade do mal, demonstrou que atrocidades se perpetuam não
              apenas pela crueldade dos agressores, mas pela passividade dos espectadores. Essa
              lógica se reproduz na violência doméstica: a omissão de vizinhos, familiares e
              instituições torna-se cumplicidade silenciosa que permite o ciclo de agressões."
              O uso de Arendt nesse contexto é:
            </p>
          }
          options={[
            { letter: "a", text: "Inadequado, pois Arendt discutia apenas o holocausto, não violência doméstica." },
            { letter: "b", text: "Produtivo: o conceito foi explicado, conectado ao problema discutido e integrado ao argumento principal.", correct: true },
            { letter: "c", text: "Fraco, pois a candidata deveria ter usado dados estatísticos em vez de filosofia." },
            { letter: "d", text: "Inadequado, pois 'banalidade do mal' é um conceito de Marx, não de Arendt." },
          ]}
          resolution={
            <p>
              O trecho exemplifica uso filosófico produtivo: (1) apresenta o conceito com
              precisão ("banalidade do mal"), (2) explica seu significado ("atrocidades se
              perpetuam pela passividade dos espectadores"), (3) conecta ao problema discutido
              ("omissão de vizinhos e instituições na violência doméstica"). Esse é exatamente
              o padrão valorizado pela Competência 2 do ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Marx e desigualdade de renda"
          statement={
            <p>
              (Estilo ENEM) Uma redação sobre <strong>concentração de renda no Brasil</strong>
              usa o seguinte argumento: "Segundo Karl Marx, a alienação do trabalhador —
              processo pelo qual o operário perde o controle sobre o produto de seu trabalho —
              é o mecanismo estrutural que permite a transferência contínua de riqueza dos que
              produzem para os que detêm o capital." Esse trecho demonstra uso de repertório
              filosófico de qualidade porque:
            </p>
          }
          options={[
            { letter: "a", text: "Marx é o único filósofo válido para temas de desigualdade econômica." },
            { letter: "b", text: "O candidato apresenta o conceito (alienação), explica seu mecanismo e o conecta ao argumento sobre concentração de renda.", correct: true },
            { letter: "c", text: "O candidato reproduz uma citação literal de Marx, demonstrando memória excepcional." },
            { letter: "d", text: "O uso é inadequado porque alienação é um conceito psicológico, não econômico." },
          ]}
          resolution={
            <p>
              O trecho é eficaz porque segue a estrutura ideal: nomeia o filósofo e o
              conceito (alienação), explica o mecanismo desse conceito com precisão, e
              conecta diretamente ao argumento sobre concentração de renda. Isso demonstra
              compreensão real do pensamento marxista — exatamente o que a Competência 2
              recompensa com pontuação máxima.
            </p>
          }
        />
      </section>
    </article>
  );
}
