"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 10</span>
          <h1>Coesão e Conectivos</h1>
          <p>
            A coesão textual é o que transforma frases soltas em texto fluente e coerente.
            Domine os mecanismos de referenciação e sequenciação, aprenda a usar conectivos
            com naturalidade e elimine os erros que rebaixam sua nota na Competência 4.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Coesão Textual: Articulação entre Frases e Parágrafos</h2>
        <p>
          <strong>Coesão textual</strong> é o conjunto de mecanismos linguísticos que conectam
          as partes do texto — palavras, frases, orações e parágrafos — criando um fluxo
          contínuo e inteligível. Um texto coeso é aquele em que o leitor consegue acompanhar
          o raciocínio sem perder o fio condutor.
        </p>
        <p>
          Na redação ENEM, a coesão é avaliada pela <strong>Competência 4</strong> em dois
          planos: (1) <em>referenciação</em> — como você retoma e substitui os elementos
          já mencionados (pronomes, sinônimos, hiperônimos); e (2) <em>sequenciação</em>
          — como você conecta as ideias usando conectivos e articuladores textuais.
        </p>
        <div className="lesson-highlight">
          <h3>Coesão vs coerência</h3>
          <p>
            <strong>Coesão</strong> é o plano formal — os mecanismos linguísticos de conexão
            (conectivos, pronomes, sinônimos). <strong>Coerência</strong> é o plano semântico
            — a lógica e consistência das ideias (avaliada em C3). Um texto pode ser coeso
            (bem conectado formalmente) mas incoerente (ideias contraditórias). O ideal é
            ter ambos: coesão formal + coerência lógica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referenciação</span>
        <h2>2. Coesão Referencial: Pronomes, Sinônimos e Hiperônimos</h2>
        <p>
          A coesão referencial evita a repetição desnecessária de palavras, substituindo
          termos já mencionados por seus equivalentes. Os principais mecanismos são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Mecanismo</th><th>Definição</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pronome pessoal</strong></td>
                <td>Substitui o sujeito já mencionado</td>
                <td>"A mulher trabalha em casa. <strong>Ela</strong> não recebe salário por isso."</td>
              </tr>
              <tr>
                <td><strong>Pronome demonstrativo</strong></td>
                <td>Retoma ideia do período anterior</td>
                <td>"A exclusão digital aprofunda desigualdades. <strong>Esse fenômeno</strong> afeta principalmente as periferias."</td>
              </tr>
              <tr>
                <td><strong>Sinônimo</strong></td>
                <td>Palavra com sentido equivalente ao termo original</td>
                <td>"O racismo é estrutural. <strong>O preconceito racial</strong> está presente nas instituições."</td>
              </tr>
              <tr>
                <td><strong>Hiperônimo</strong></td>
                <td>Palavra de categoria mais ampla que engloba o termo original</td>
                <td>"A Lei Maria da Penha... <strong>essa legislação</strong> protege as mulheres."</td>
              </tr>
              <tr>
                <td><strong>Elipse</strong></td>
                <td>Omissão do sujeito já identificado</td>
                <td>"Os jovens sofrem com ansiedade. <strong>[Eles]</strong> buscam apoio nas redes sociais."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sequenciação</span>
        <h2>3. Coesão Sequencial: Conectivos e Articuladores Textuais</h2>
        <p>
          A coesão sequencial usa <strong>conectivos</strong> para mostrar a relação lógica
          entre as ideias: adição, causa, consequência, contraste, concessão, etc. O uso
          correto e variado de conectivos é um dos critérios mais observados na C4.
        </p>
        <p>
          O ENEM valoriza conectivos que demonstram maturidade argumentativa — não apenas
          "mas" e "porque", mas também "outrossim", "ademais", "consoante", "à luz disso",
          "nesse viés". A variedade sinaliza repertório linguístico amplo e domínio da norma.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mega Tabela</span>
        <h2>4. Tabela Completa de Conectivos por Função</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Função</th><th>Conectivos e articuladores</th><th>Exemplo de uso</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Adição</strong></td>
                <td>Ademais, Além disso, Outrossim, Acrescente-se que, Somado a isso, Não apenas... mas também</td>
                <td>"Ademais, o racismo estrutural impacta o sistema judiciário..."</td>
              </tr>
              <tr>
                <td><strong>Adversidade</strong></td>
                <td>Entretanto, Contudo, Todavia, Porém, No entanto, Não obstante, Em contrapartida</td>
                <td>"Entretanto, a legislação não é suficiente sem estrutura de proteção..."</td>
              </tr>
              <tr>
                <td><strong>Causa</strong></td>
                <td>Pois, porque, visto que, uma vez que, já que, dado que, tendo em vista que, haja vista que</td>
                <td>"...uma vez que a pobreza estrutural impossibilita o acesso à internet..."</td>
              </tr>
              <tr>
                <td><strong>Consequência</strong></td>
                <td>Logo, portanto, assim, por isso, consequentemente, destarte, de modo que</td>
                <td>"Logo, a exclusão digital perpetua o ciclo de pobreza nas periferias..."</td>
              </tr>
              <tr>
                <td><strong>Conclusão</strong></td>
                <td>Portanto, Logo, Em suma, Depreende-se, pois, que, Infere-se, diante do exposto</td>
                <td>"Depreende-se, portanto, que a violência doméstica é fenômeno estrutural..."</td>
              </tr>
              <tr>
                <td><strong>Exemplificação</strong></td>
                <td>Por exemplo, Como, Tal como, A exemplo de, Entre outros, Como ilustração</td>
                <td>"A exemplo da pandemia de Covid-19, que expôs as consequências da exclusão digital..."</td>
              </tr>
              <tr>
                <td><strong>Explicação</strong></td>
                <td>Ou seja, Isto é, Em outras palavras, A saber, De fato</td>
                <td>"Ou seja, o problema não é técnico, mas estrutural e político..."</td>
              </tr>
              <tr>
                <td><strong>Concessão</strong></td>
                <td>Embora, Apesar de, Ainda que, Mesmo que, Por mais que, Ainda assim</td>
                <td>"Embora o Brasil possua a Lei Maria da Penha, a impunidade persiste..."</td>
              </tr>
              <tr>
                <td><strong>Comparação</strong></td>
                <td>Assim como, Da mesma forma que, À semelhança de, Analogamente, De modo similar</td>
                <td>"Assim como o preconceito racial, o estigma mental isola e marginaliza..."</td>
              </tr>
              <tr>
                <td><strong>Proporcionalidade</strong></td>
                <td>À medida que, Conforme, Na proporção que, Quanto mais... mais</td>
                <td>"À medida que a conectividade avança, a exclusão digital se aprofunda nas periferias..."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Uso Natural</span>
        <h2>5. Como Usar Conectivos sem Ser Mecânico: Variedade e Naturalidade</h2>
        <p>
          Um erro frequente é usar sempre os mesmos conectivos ou colocá-los de forma forçada,
          apenas para mostrar ao corretor que os conhece. O resultado é um texto que parece
          "lista de conectivos" em vez de argumento fluente.
        </p>
        <div className="lesson-highlight">
          <h3>Regras de ouro para o uso de conectivos</h3>
          <p>
            <strong>1. Não inicie três parágrafos seguidos com o mesmo conectivo.</strong>
            Se o Dev. 1 começa com "No que tange a...", o Dev. 2 não pode começar igual.<br /><br />
            <strong>2. O conectivo deve corresponder à relação lógica real.</strong> Não use
            "portanto" para iniciar um argumento novo — use-o apenas para concluir.<br /><br />
            <strong>3. Varie entre conectivos de diferentes famílias.</strong> Não use só
            "Ademais" para adição — alterne com "Outrossim", "Somado a isso", "Além disso".<br /><br />
            <strong>4. Conectivos sofisticados devem ser usados corretamente.</strong>
            "Outrossim" equivale a "além disso"; "destarte" equivale a "dessa forma".
            Use-os apenas se souber o sentido exato.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Parágrafo com Conectivos e Referenciação Destacados</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 210" width="480" height="210" aria-label="Parágrafo com conectivos sequenciais e referenciação destacados por cor">
            <rect x="10" y="10" width="460" height="185" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            {/* Linha 1 */}
            <rect x="20" y="18" width="90" height="16" rx="3" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="65" y="30" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">No que tange</text>
            <text x="116" y="30" fontSize="9" fill="#374151">à saúde mental de jovens,</text>
            <rect x="248" y="18" width="100" height="16" rx="3" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="298" y="30" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">é válido ressaltar que</text>
            {/* Linha 2 */}
            <text x="20" y="50" fontSize="9" fill="#374151">o modelo educacional competitivo impõe pressão excessiva aos estudantes.</text>
            {/* Linha 3 */}
            <rect x="20" y="56" width="85" height="16" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
            <text x="62" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">Essa pressão</text>
            <text x="110" y="68" fontSize="9" fill="#374151">gera ansiedade crônica, conforme aponta pesquisa</text>
            {/* Linha 4 */}
            <text x="20" y="86" fontSize="9" fill="#374151">do Instituto Ayrton Senna: 7 em cada 10 estudantes relatam angústia frequente.</text>
            {/* Linha 5 */}
            <rect x="20" y="94" width="105" height="16" rx="3" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="72" y="106" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">Esse dado evidencia que</text>
            <text x="130" y="106" fontSize="9" fill="#374151">a escola, em vez de ser espaço</text>
            {/* Linha 6 */}
            <text x="20" y="124" fontSize="9" fill="#374151">de acolhimento, tornou-se fonte adicional de sofrimento para os jovens.</text>
            {/* Linha 7 */}
            <rect x="20" y="132" width="55" height="16" rx="3" fill="#f3e8ff" stroke="#d8b4fe" strokeWidth="1" />
            <text x="47" y="144" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7e22ce">Ademais,</text>
            <text x="80" y="144" fontSize="9" fill="#374151">Winnicott alertava que o desenvolvimento saudável</text>
            {/* Linha 8 */}
            <text x="20" y="162" fontSize="9" fill="#374151">exige ambiente seguro —</text>
            <rect x="147" y="152" width="80" height="16" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
            <text x="187" y="164" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">condição essa</text>
            <text x="232" y="164" fontSize="9" fill="#374151">que o sistema atual falha em oferecer.</text>
            {/* Legenda */}
            <rect x="10" y="188" width="12" height="10" rx="2" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="26" y="197" fontSize="8" fill="#166534">conectivo sequencial</text>
            <rect x="160" y="188" width="12" height="10" rx="2" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
            <text x="176" y="197" fontSize="8" fill="#1e40af">referenciação anafórica</text>
            <rect x="320" y="188" width="12" height="10" rx="2" fill="#f3e8ff" stroke="#d8b4fe" strokeWidth="1" />
            <text x="336" y="197" fontSize="8" fill="#7e22ce">conectivo de adição</text>
          </svg>
          <figcaption>Parágrafo anotado: conectivos sequenciais (verde), referenciação coesiva (azul) e conectivo de adição (roxo)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sofisticação</span>
        <h2>7. Conectivos Valorizados pelo ENEM: Elevação do Nível Lexical</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conectivo avançado</th><th>Equivalente simples</th><th>Exemplo de uso na redação</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Outrossim</strong></td><td>Além disso</td><td>"Outrossim, cabe destacar que o estigma cultural isola ainda mais as vítimas..."</td></tr>
              <tr><td><strong>Ademais</strong></td><td>Adicionalmente</td><td>"Ademais, os dados do IBGE corroboram essa perspectiva ao revelar..."</td></tr>
              <tr><td><strong>Consoante</strong></td><td>De acordo com</td><td>"Consoante os princípios da Declaração Universal dos Direitos Humanos, o acesso à saúde é..."</td></tr>
              <tr><td><strong>À luz disso</strong></td><td>Diante disso</td><td>"À luz disso, torna-se imperativa a intervenção do Estado..."</td></tr>
              <tr><td><strong>Nesse viés</strong></td><td>Nessa perspectiva</td><td>"Nesse viés, compreende-se que o problema não é apenas técnico, mas estrutural..."</td></tr>
              <tr><td><strong>Destarte</strong></td><td>Dessa forma</td><td>"Destarte, fica evidente que a invisibilidade do trabalho feminino perpetua a desigualdade..."</td></tr>
              <tr><td><strong>Não obstante</strong></td><td>Apesar disso</td><td>"Não obstante os avanços legislativos, a violência doméstica persiste em altos índices..."</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Atenção:</strong> use esses conectivos apenas se tiver certeza do sentido
          e do uso correto. Um conectivo sofisticado usado de forma errada prejudica mais do
          que ajuda — tanto em C1 (erro gramatical) quanto em C4 (relação lógica equivocada).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros de Coesão</span>
        <h2>8. Erros Frequentes de Coesão e Como Corrigi-los</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Erro</th><th>Exemplo problemático</th><th>Correção</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Repetição excessiva de palavras</td>
                <td>"A violência é grave. A violência afeta mulheres. A violência deve acabar."</td>
                <td>"A violência é fenômeno grave que afeta mulheres. Esse problema deve ser enfrentado."</td>
              </tr>
              <tr>
                <td>Pronome sem antecedente claro</td>
                <td>"O governo e a escola devem agir. Ele deve criar políticas." (Ele = qual?)</td>
                <td>"O governo e a escola devem agir. O Estado deve criar políticas, enquanto a escola..."</td>
              </tr>
              <tr>
                <td>Conectivo com função errada</td>
                <td>"O Brasil é rico. Portanto, enfrenta desigualdade." (não há relação de consequência)</td>
                <td>"O Brasil é rico. Entretanto, enfrenta profunda desigualdade social."</td>
              </tr>
              <tr>
                <td>"Isso" ambíguo</td>
                <td>"A falta de educação causa pobreza. Isso é uma vergonha."</td>
                <td>"A falta de educação causa pobreza. Essa relação revela a urgência de políticas públicas."</td>
              </tr>
              <tr>
                <td>Repetição de "mas" várias vezes</td>
                <td>"A lei existe. Mas a violência persiste. Mas há impunidade. Mas as vítimas sofrem."</td>
                <td>"Embora a lei exista, a violência persiste em razão da impunidade estrutural, que condena as vítimas ao silêncio."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referenciação na Prática</span>
        <h2>9. Como Retomar "a Mulher" com Variedade ao Longo do Texto</h2>
        <p>
          Ao longo da redação, você precisa retomar os termos centrais do tema sem repeti-los
          mecanicamente. A referenciação anafórica é fundamental para manter a coesão.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo: 7 formas de retomar "a mulher"</h3>
          <p>
            Introdução: "...a <strong>mulher</strong>..."<br />
            Dev. 1 linha 1: "...a <strong>trabalhadora</strong> doméstica..."<br />
            Dev. 1 linha 3: "...<strong>ela</strong>..."<br />
            Dev. 1 linha 5: "...a <strong>profissional</strong> não remunerada..."<br />
            Dev. 2 linha 1: "...a <strong>figura feminina</strong>..."<br />
            Dev. 2 linha 4: "...essa <strong>cidadã</strong>..."<br />
            Conclusão: "...essa <strong>parcela da população</strong>..."<br /><br />
            A mesma referência é expressa de 7 formas diferentes — mantendo coesão sem
            repetição maçante.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transição entre Parágrafos</span>
        <h2>10. Coesão entre Parágrafos: A Frase de Transição</h2>
        <p>
          A frase de transição é a primeira frase do Dev. 2 e da Conclusão. Ela tem dupla
          função: retomar o parágrafo anterior (por referência) e anunciar a nova ideia (por
          conectivo). Uma boa frase de transição mostra ao corretor controle do fluxo do texto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Parágrafo</th><th>Modelo de frase de transição</th></tr>
            </thead>
            <tbody>
              <tr><td>Início do Dev. 2</td><td>"Ademais, além da dimensão [aspecto do Dev. 1], é fundamental considerar [aspecto do Dev. 2]..."</td></tr>
              <tr><td>Início do Dev. 2</td><td>"Para além desse contexto histórico, faz-se necessário analisar as consequências sociais que..."</td></tr>
              <tr><td>Início do Dev. 2</td><td>"Outrossim, sob o prisma [nova perspectiva], constata-se que o problema se aprofunda quando..."</td></tr>
              <tr><td>Início da Conclusão</td><td>"Depreende-se, portanto, que tanto [resumo Dev. 1] quanto [resumo Dev. 2] evidenciam que..."</td></tr>
              <tr><td>Início da Conclusão</td><td>"Infere-se, diante do exposto, que [síntese], o que torna imperativa a seguinte intervenção..."</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>11. Texto com Coesão Ruim vs Texto com Coesão Excelente</h2>
        <div className="lesson-highlight">
          <h3>Coesão ruim (C4 estimada: 80)</h3>
          <p>
            "O racismo é um problema. Muitas pessoas sofrem racismo. Isso é errado. Os negros
            são discriminados. Eles sofrem muito. O governo deve resolver. O racismo precisa
            acabar. A sociedade deve mudar. Todos precisam ajudar."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Coesão excelente (C4 estimada: 200)</h3>
          <p>
            "O racismo estrutural constitui fenômeno histórico enraizado nas relações sociais
            brasileiras. Essa prática discriminatória, herdada do período escravocrata, ainda
            se manifesta nas instituições públicas e no mercado de trabalho, vitimando
            desproporcionalmente a população negra. Nesse viés, segundo o IPEA, cidadãos negros
            representam 75% das vítimas de homicídio no país — dado que expõe a dimensão letal
            do racismo. À luz disso, torna-se imperativo que o Estado implemente políticas
            afirmativas estruturais, com o objetivo de reparar a desigualdade historicamente
            produzida e garantir igualdade de oportunidades a todos os brasileiros."
          </p>
        </div>
        <p>
          No segundo texto, "racismo" aparece apenas 2 vezes — o restante usa "essa prática
          discriminatória", "essa prática", "do racismo" (com variação). Os conectivos são
          variados: "Nesse viés", "dado que", "À luz disso". O leitor acompanha o raciocínio
          sem tropeçar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔗</span>
            <h3>Referenciação</h3>
            <p>Pronomes, sinônimos, hiperônimos — substitua palavras repetidas com naturalidade</p>
          </div>
          <div className="math-card">
            <span>➡️</span>
            <h3>Sequenciação</h3>
            <p>Conectivos mostram a relação lógica entre as ideias — adição, causa, contraste</p>
          </div>
          <div className="math-card">
            <span>🌿</span>
            <h3>Variedade</h3>
            <p>Não repita "mas" e "porque" — use "entretanto", "uma vez que", "outrossim"</p>
          </div>
          <div className="math-card">
            <span>🎓</span>
            <h3>Sofisticação</h3>
            <p>"Outrossim", "Nesse viés", "Consoante", "À luz disso" — só use se souber o sentido</p>
          </div>
          <div className="math-card">
            <span>🔀</span>
            <h3>Frase de transição</h3>
            <p>Primeira frase do Dev. 2 e da Conclusão = conexão coesiva entre parágrafos</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Evite repetições</h3>
            <p>Palavra repetida 3+ vezes no mesmo parágrafo = penalização em C4</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificar função do conectivo"
          statement={
            <p>
              Na frase: <em>"Entretanto, muitos jovens não têm acesso à internet nas regiões
              periféricas"</em>, qual é a função do conectivo "Entretanto"?
            </p>
          }
          options={[
            { letter: "a", text: "Adição — acrescenta uma nova informação à já apresentada." },
            { letter: "b", text: "Causa — indica a razão pela qual os jovens não têm internet." },
            { letter: "c", text: "Adversidade / contraste — indica oposição à ideia expressa anteriormente.", correct: true },
            { letter: "d", text: "Conclusão — encerra o argumento apresentado no parágrafo." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. "Entretanto" é conjunção adversativa
              que indica contraste ou oposição. No contexto de uma redação, seu uso típico é
              opor uma realidade negativa a algo positivo mencionado antes: "O Brasil expandiu
              sua infraestrutura. Entretanto, muitos jovens nas periferias ainda não têm
              acesso." Pertence à mesma família de "porém", "no entanto", "contudo", "todavia".
              Não deve ser confundido com "portanto" (conclusão) ou "porque" (causa).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Reescrever sem repetir 'violência' quatro vezes"
          statement={
            <p>
              O trecho repete "violência" quatro vezes: <em>"A violência doméstica é grave.
              A violência afeta muitas mulheres. A violência causa trauma. É preciso combater
              a violência."</em> Qual reescrita usa mecanismos coesivos adequados?
            </p>
          }
          options={[
            { letter: "a", text: "'A violência doméstica é grave e afeta muitas mulheres, causando trauma e precisando ser combatida.'" },
            { letter: "b", text: "'A violência doméstica é fenômeno grave que vitimiza milhões de mulheres no Brasil. Esse tipo de abuso gera traumas profundos e sequelas duradouras, razão pela qual o combate a essa prática deve ser prioritário nas políticas públicas.'", correct: true },
            { letter: "c", text: "'O problema é grave. Muitas mulheres são afetadas. Trauma é gerado. Precisa ser combatido.'" },
            { letter: "d", text: "'A violência doméstica é grave, afeta mulheres, causa trauma e deve ser combatida.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Ela elimina as quatro repetições de
              "violência" usando mecanismos coesivos variados: "violência doméstica" (1ª
              ocorrência, necessária para apresentar o termo), "Esse tipo de abuso" (pronome
              demonstrativo + sinônimo), "essa prática" (pronome demonstrativo + hiperônimo).
              Além disso, o trecho usa conectivo adequado ("razão pela qual") e análise mais
              elaborada ("sequelas duradouras"). A alternativa (a) elimina repetições mas cria
              frase longa sem análise; (c) é excessivamente sintético; (d) apenas condensa
              sem usar recursos coesivos diversificados.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Conectivo mal posicionado — identificar e corrigir"
          statement={
            <p>
              Analise: <em>"A educação pública brasileira tem graves deficiências.
              Portanto, o governo investe bilhões no setor todos os anos."</em>
              Por que o uso de "portanto" está errado e como corrigir?
            </p>
          }
          options={[
            { letter: "a", text: "'Portanto' está errado pois é conectivo conclusivo — a segunda frase não é consequência da primeira; deveria ser 'entretanto' ou 'contudo' (contraste).", correct: true },
            { letter: "b", text: "'Portanto' está errado pois é muito informal para o registro da redação ENEM." },
            { letter: "c", text: "'Portanto' está correto — a segunda frase é a conclusão da primeira afirmação." },
            { letter: "d", text: "O erro não está no conectivo, mas na ausência de evidência estatística na segunda frase." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(a)</strong>. "Portanto" é conectivo
              consecutivo/conclusivo — indica que a segunda afirmação é consequência ou
              conclusão lógica da primeira. Mas as duas afirmações estão em
              <em>oposição</em>: o Brasil tem graves deficiências <em>apesar de</em> investir
              bilhões (paradoxo). A relação lógica é adversativa, não conclusiva. Correções
              adequadas: "A educação pública tem graves deficiências. <strong>Contudo</strong>
              / <strong>No entanto</strong> / <strong>Não obstante</strong>, o governo investe
              bilhões no setor." Usar "portanto" onde deveria ser "contudo" é erro de coesão
              sequencial que confunde o leitor e prejudica a C4.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Conectar frases soltas em parágrafo coeso"
          statement={
            <p>
              Transforme estas quatro frases soltas em parágrafo coeso com conectivos
              adequados: (1) "A exclusão digital afeta jovens pobres." (2) "Muitos não têm
              smartphones ou computadores." (3) "A pandemia agravou o problema." (4)
              "Estudantes sem internet foram excluídos do ensino remoto."
            </p>
          }
          options={[
            { letter: "a", text: "'A exclusão digital afeta os jovens pobres. Muitos não têm smartphones. A pandemia agravou o problema. Eles foram excluídos do ensino.'" },
            { letter: "b", text: "'A exclusão digital afeta profundamente os jovens pobres, uma vez que grande parcela dessa população não tem acesso a smartphones ou computadores. Esse cenário se agravou durante a pandemia de Covid-19, período em que estudantes sem conectividade foram excluídos do ensino remoto, ampliando as já profundas desigualdades educacionais no país.'", correct: true },
            { letter: "c", text: "'A exclusão digital afeta os jovens pobres porque não têm smartphones. Portanto, a pandemia foi grave. Logo, foram excluídos do ensino remoto.'" },
            { letter: "d", text: "'Os jovens pobres são excluídos digitalmente. Ademais, não têm smartphones. Outrossim, a pandemia agravou. Destarte, foram excluídos da escola.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Ela transforma as quatro frases
              soltas em parágrafo fluente usando: (1) <em>"uma vez que"</em> — causa: liga
              exclusão digital à falta de dispositivos; (2) <em>"Esse cenário"</em> —
              referenciação anafórica retomando "exclusão digital"; (3) <em>"período em que"</em>
              — frase subordinada que integra a pandemia ao argumento; (4) <em>"ampliando"</em>
              — gerúndio indicando consequência com análise. A alternativa (a) é uma sequência
              de frases curtas sem conectivos; (c) usa "portanto" e "logo" com relação causal
              errada; (d) usa conectivos corretos mas de forma forçada e mecânica sem integração
              sintática real.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Três 'mas' seguidos — diagnóstico e reescrita"
          statement={
            <p>
              Um estudante escreveu: <em>"O governo criou leis. Mas não funcionam. Mas a
              violência aumentou. Mas as mulheres precisam de proteção."</em> Qual é o
              diagnóstico do impacto em C4 e a reescrita mais adequada?
            </p>
          }
          options={[
            { letter: "a", text: "Impacto em C4 = 160 (pequeno desvio pontual). Reescrita: 'O governo criou leis, mas não funcionam, mas a violência aumentou, mas as mulheres precisam de proteção.'" },
            { letter: "b", text: "Impacto em C4 = 40–80 (repetição mecânica de 'mas' = coesão precária). Reescrita: 'Embora o governo tenha criado leis de proteção, tais medidas mostram-se insuficientes, haja vista que os índices de violência seguiram crescendo, evidenciando que as mulheres ainda carecem de mecanismos efetivos de amparo.'", correct: true },
            { letter: "c", text: "Impacto em C4 = 120 (coesão mediana). Reescrita: 'O governo criou leis. Entretanto, não funcionam. Entretanto, a violência aumentou. Entretanto, as mulheres precisam de proteção.'" },
            { letter: "d", text: "Não há impacto em C4 — o uso de 'mas' é gramaticalmente correto e não causa penalização." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Usar "mas" três vezes seguidas no
              início de frases curtas configura coesão muito precária — C4 = 40 a 80. O
              problema é duplo: (1) repetição mecânica do mesmo conectivo; (2) frases curtas
              e isoladas sem articulação sintática. A reescrita em (b) integra as quatro
              afirmações em período complexo com conectivos variados: <em>"Embora"</em>
              (concessão), <em>"tais medidas mostram-se insuficientes"</em> (referenciação +
              análise), <em>"haja vista que"</em> (causa), <em>"evidenciando que"</em>
              (consequência + análise). Resultado: C4 = 160–200. A alternativa (c) apenas
              substitui "mas" por "entretanto" repetido — o mesmo erro com outro conectivo.
            </p>
          }
        />
      </section>
    </article>
  );
}
