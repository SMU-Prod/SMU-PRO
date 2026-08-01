"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 4</span>
          <h1>Tese e Posicionamento</h1>
          <p>
            A tese é a espinha dorsal da redação ENEM. Aprenda a formular posicionamentos
            claros, específicos e argumentáveis, evite teses vagas e óbvias, e descubra
            como garantir que toda a redação sustente seu ponto de vista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Central</span>
        <h2>1. O que é Tese: Afirmação sobre o Problema que Você vai Defender</h2>
        <p>
          A <strong>tese</strong> é a afirmação central que você vai defender ao longo de toda
          a redação. Ela não é uma pergunta, não é uma descrição do problema e não é um resumo
          do que você vai escrever — é um <em>posicionamento</em> sobre o problema, uma resposta
          à questão implícita no tema.
        </p>
        <p>
          Enquanto o <strong>tema</strong> é o problema posto em discussão (ex.: "a violência
          doméstica"), a <strong>tese</strong> é o que <em>você afirma</em> sobre esse problema
          (ex.: "a violência doméstica é perpetuada pela cultura machista e pela omissão estatal").
          A tese delimita quais argumentos serão usados e orienta toda a estrutura da redação.
        </p>
        <div className="lesson-highlight">
          <h3>Tese vs opinião pessoal</h3>
          <p>
            "Eu acho que o governo deveria ajudar as mulheres" não é tese — é opinião pessoal
            informal. Tese é: "A persistência da violência doméstica no Brasil decorre da herança
            patriarcal e da insuficiência das políticas públicas de proteção à mulher, exigindo
            reformas estruturais urgentes." Use linguagem formal e impessoal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. Características da Tese: Clara, Específica, Argumentável, Coerente</h2>
        <p>
          Uma tese nota 1000 em C3 precisa ter quatro características simultâneas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Característica</th><th>O que significa</th><th>Exemplo positivo</th><th>Exemplo negativo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clara</strong></td>
                <td>O leitor entende exatamente seu posicionamento</td>
                <td>"A exclusão digital aprofunda desigualdades sociais estruturais"</td>
                <td>"O problema da internet é complicado e precisa ser resolvido"</td>
              </tr>
              <tr>
                <td><strong>Específica</strong></td>
                <td>Aponta causa, grupo ou aspecto concreto</td>
                <td>"A precarização do trabalho feminino decorre da herança patriarcal"</td>
                <td>"As mulheres sofrem muita discriminação no trabalho"</td>
              </tr>
              <tr>
                <td><strong>Argumentável</strong></td>
                <td>Pode ser questionada ou contestada</td>
                <td>"A violência urbana decorre principalmente de fatores socioeconômicos"</td>
                <td>"A violência é um problema que precisa ser combatido" (óbvio)</td>
              </tr>
              <tr>
                <td><strong>Coerente com o tema</strong></td>
                <td>Responde ao recorte pedido, não ao tema amplo</td>
                <td>Para "saúde mental": "O estigma dificulta o tratamento de transtornos mentais"</td>
                <td>Para "saúde mental": "O sistema de saúde é precário no Brasil"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tema vs Tese</span>
        <h2>3. Tema vs Tese: A Diferença Fundamental</h2>
        <p>
          Confundir tema com tese é um dos erros mais comuns entre candidatos iniciantes.
          O tema é o objeto de discussão; a tese é o que você afirma sobre ele. Veja como
          transformar temas em teses fortes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema (problema)</th><th>Tese fraca (vaga)</th><th>Tese forte (específica e argumentável)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Violência contra a mulher</td>
                <td>"A violência contra a mulher é inaceitável e precisa acabar"</td>
                <td>"A violência doméstica no Brasil é perpetuada pela normalização cultural do machismo e pela impunidade estrutural, exigindo políticas de proteção e educação preventiva"</td>
              </tr>
              <tr>
                <td>Racismo no Brasil</td>
                <td>"O racismo é um problema sério que afeta muitos brasileiros"</td>
                <td>"O racismo estrutural no Brasil, herança direta da escravidão, reproduz-se nas instituições e no mercado de trabalho, demandando ações afirmativas e letramento racial nas escolas"</td>
              </tr>
              <tr>
                <td>Desemprego juvenil</td>
                <td>"Os jovens não conseguem emprego porque falta educação"</td>
                <td>"O desemprego juvenil no Brasil decorre da precarização do mercado de trabalho e da defasagem entre o ensino técnico e as demandas produtivas atuais"</td>
              </tr>
              <tr>
                <td>Saúde mental</td>
                <td>"A saúde mental é importante e deve ser prioridade"</td>
                <td>"O estigma associado às doenças mentais, sustentado por tabus culturais e desinformação, afasta pacientes do tratamento e perpetua o sofrimento psíquico"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posicionamento</span>
        <h2>4. Onde Fica a Tese: Final da Introdução</h2>
        <p>
          A tese deve aparecer obrigatoriamente na <strong>última ou penúltima frase da
          introdução</strong>. Ela encerra o parágrafo inicial como uma "conclusão provisória"
          que indica ao leitor o caminho que o texto vai percorrer. Tese no meio da introdução
          ou no início pode passar despercebida pelo corretor.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Posição da tese na introdução da redação ENEM">
            <rect x="20" y="15" width="440" height="165" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="30" y="35" fontSize="11" fontWeight="bold" fill="#475569">§1 INTRODUÇÃO</text>
            <rect x="30" y="42" width="420" height="22" rx="3" fill="#e0e7ff" />
            <text x="240" y="57" textAnchor="middle" fontSize="10" fill="#3730a3">Linha 1–2: Contextualização histórica / dado / hipótese / contraste</text>
            <rect x="30" y="68" width="420" height="22" rx="3" fill="#dbeafe" />
            <text x="240" y="83" textAnchor="middle" fontSize="10" fill="#1e40af">Linha 3–4: Aprofundamento da contextualização — problema social relevante</text>
            <rect x="30" y="94" width="420" height="22" rx="3" fill="#bfdbfe" />
            <text x="240" y="109" textAnchor="middle" fontSize="10" fill="#1e3a8a">Linha 5: Conexão entre contextualização e problema específico do recorte</text>
            <rect x="30" y="120" width="420" height="28" rx="3" fill="#4f46e5" />
            <text x="240" y="138" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Linha 6–7 (ÚLTIMA): TESE — posicionamento claro e específico sobre o problema</text>
            {/* Seta indicando a tese */}
            <line x1="460" y1="134" x2="455" y2="134" stroke="#dc2626" strokeWidth="2" />
            <text x="10" y="170" fontSize="10" fill="#dc2626" fontWeight="bold">Tese aqui!</text>
            <text x="55" y="170" fontSize="10" fill="#dc2626">← última frase da introdução, específica e argumentável</text>
          </svg>
          <figcaption>A tese encerra a introdução — deve ser a última frase, clara e específica</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Tese</span>
        <h2>5. Tipos de Tese: Causa, Necessidade, Crítica/Proposta</h2>
        <p>
          Existem três estruturas principais de tese, cada uma com sua lógica argumentativa:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Estrutura</th><th>Melhor para</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Causa/Consequência</strong></td>
                <td>[Problema] decorre de [causa] e gera [consequência]</td>
                <td>Temas com raiz histórica ou estrutural clara</td>
                <td>"O racismo estrutural, herança da escravidão, reproduz-se nas instituições e gera exclusão social sistemática"</td>
              </tr>
              <tr>
                <td><strong>Necessidade de solução</strong></td>
                <td>[Problema] demanda [solução específica]</td>
                <td>Temas com urgência ou lacuna de políticas</td>
                <td>"A exclusão digital, fruto da concentração de infraestrutura, demanda políticas públicas de universalização da conectividade"</td>
              </tr>
              <tr>
                <td><strong>Crítica/Proposta</strong></td>
                <td>Embora [concessão], [crítica] + [necessidade de mudança]</td>
                <td>Temas com paradoxo ou contradição evidente</td>
                <td>"Embora o Brasil possua legislação avançada contra a violência doméstica, a impunidade e a omissão institucional perpetuam a vitimização feminina"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros na Tese</span>
        <h2>6. Erros na Tese: Vaga, Óbvia, Contraditória, Off-topic</h2>
        <div className="lesson-highlight">
          <h3>Os quatro erros mais comuns na formulação da tese</h3>
          <p>
            <strong>1. Tese vaga:</strong> "O governo deve resolver o problema da pobreza no Brasil."
            — Não aponta causa específica nem argumento defendível.<br /><br />
            <strong>2. Tese óbvia:</strong> "A educação é fundamental para o desenvolvimento do país."
            — Todo mundo concorda; não há o que argumentar. C3 rebaixada por falta de
            profundidade.<br /><br />
            <strong>3. Tese contraditória:</strong> "A desigualdade social é causada pela falta de
            trabalho, mas a maioria dos pobres trabalha muito." — A tese entra em contradição
            com evidências que ela mesma menciona.<br /><br />
            <strong>4. Tese off-topic:</strong> Para o tema "cyberbullying", escrever "a violência
            física nas escolas é um problema grave" — está fora do recorte temático.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica Avançada</span>
        <h2>7. Tese com "Embora": Concessão + Posicionamento Forte</h2>
        <p>
          Uma das estruturas mais sofisticadas para a tese é a <strong>concessão + posicionamento</strong>,
          usando o conectivo "embora" (ou "apesar de", "ainda que"). Essa estrutura reconhece
          um lado da questão antes de apresentar sua posição, demonstrando maturidade argumentativa
          e visão crítica — o que eleva a nota em C3.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema</th><th>Tese com concessão</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Violência contra a mulher</td>
                <td>"Embora o Brasil conte com a Lei Maria da Penha — uma das mais avançadas do mundo —, a persistência da violência doméstica revela que a legislação isolada é insuficiente sem mudança cultural e aparato de proteção efetivo."</td>
              </tr>
              <tr>
                <td>Saúde mental</td>
                <td>"Apesar dos avanços no diagnóstico e no tratamento de transtornos mentais, o estigma social ainda empurra pacientes para o silêncio e o isolamento, demonstrando que a transformação cultural é tão urgente quanto a médica."</td>
              </tr>
              <tr>
                <td>Racismo</td>
                <td>"Ainda que o Brasil se apresente como nação miscigenada e tolerante, o racismo estrutural persiste nas estatísticas de encarceramento, desemprego e mortalidade da população negra, evidenciando a hipocrisia do mito da democracia racial."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A tese com concessão é mais difícil de formular, mas impressiona o corretor por
          demonstrar pensamento crítico e conhecimento das duas faces do problema. Use-a
          quando você tiver repertório suficiente para sustentar a crítica.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coerência Interna</span>
        <h2>8. Tese e Coerência: Defendida em Ambos os Desenvolvimentos</h2>
        <p>
          A tese não é apenas uma frase bonita da introdução — ela é um <strong>compromisso</strong>
          com o que você vai defender ao longo de todo o texto. O corretor verifica se os
          argumentos dos dois desenvolvimentos realmente sustentam a tese, e se a conclusão
          a retoma coerentemente.
        </p>
        <p>
          Verificação de coerência: após escrever cada desenvolvimento, pergunte-se — "Este
          argumento <em>comprova</em> minha tese ou apenas fala sobre o mesmo tema?" Se o
          argumento não sustenta diretamente a tese, reescreva-o ou reformule a tese para
          que ela englobe o argumento.
        </p>
        <div className="lesson-highlight">
          <h3>Teste de coerência — tese vs argumentos</h3>
          <p>
            <strong>Tese:</strong> "A exclusão digital aprofunda desigualdades por concentração de infraestrutura e falta de letramento digital."<br /><br />
            <strong>Dev. 1 coerente:</strong> Argumenta sobre a desigualdade de infraestrutura (fibra óptica concentrada nos centros). ✓<br />
            <strong>Dev. 2 coerente:</strong> Argumenta sobre a falta de letramento digital entre populações vulneráveis. ✓<br />
            <strong>Dev. 2 incoerente:</strong> Argumenta sobre a importância da educação pública no geral. ✗ — não sustenta a tese.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>9. Teses Fracas vs Teses Fortes: Análise Comparativa</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema</th><th>Tese fraca</th><th>Tese forte</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Desigualdade de gênero</td>
                <td>"As mulheres ainda sofrem muita discriminação no Brasil."</td>
                <td>"A precarização do trabalho de cuidado feminino no Brasil, invisibilizada pela herança patriarcal, perpetua a pobreza das mulheres e demanda políticas de valorização e remuneração dessas atividades."</td>
              </tr>
              <tr>
                <td>Meio ambiente</td>
                <td>"O desmatamento precisa parar para salvar o planeta."</td>
                <td>"O avanço do desmatamento na Amazônia, impulsionado pela flexibilização do Código Florestal e pela grilagem de terras, ameaça não apenas a biodiversidade, mas também a soberania hídrica e alimentar do Brasil."</td>
              </tr>
              <tr>
                <td>Acesso à saúde</td>
                <td>"O SUS precisa de mais investimentos para funcionar melhor."</td>
                <td>"A precariedade do acesso à saúde nas periferias urbanas, resultado do subfinanciamento crônico do SUS e da má distribuição de profissionais, aprofunda as desigualdades socioespaciais no Brasil."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Banco de Teses</span>
        <h2>10. Teses Modelo para Temas Recorrentes do ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tema recorrente</th><th>Tese modelo</th></tr>
            </thead>
            <tbody>
              <tr><td>Violência contra a mulher</td><td>"A violência doméstica, sustentada pela cultura machista e pela impunidade estrutural, exige tanto o fortalecimento da rede de proteção quanto a transformação dos valores patriarcais por meio da educação."</td></tr>
              <tr><td>Racismo estrutural</td><td>"O racismo no Brasil, naturalizado pela ideologia da democracia racial, reproduz-se nas instituições e demanda políticas afirmativas e letramento étnico-racial para sua superação."</td></tr>
              <tr><td>Saúde mental</td><td>"O estigma cultural associado aos transtornos mentais afasta pacientes do diagnóstico e do tratamento, exigindo campanhas de conscientização e a ampliação do CAPS como rede de atenção comunitária."</td></tr>
              <tr><td>Evasão escolar</td><td>"A evasão no ensino médio brasileiro, decorrente da desarticulação entre o currículo e a realidade socioeconômica dos estudantes, demanda reformas pedagógicas e suporte socioemocional nas escolas públicas."</td></tr>
              <tr><td>Fake news</td><td>"A desinformação em plataformas digitais, amplificada por algoritmos que priorizam o engajamento emocional, corrói os fundamentos da democracia e exige regulação tecnológica aliada ao letramento midiático."</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>11. Como Formular uma Tese em 4 Passos</h2>
        <p>
          Use este método rápido durante a prova para garantir que sua tese seja forte:
        </p>
        <div className="lesson-highlight">
          <h3>Método dos 4 passos</h3>
          <p>
            <strong>Passo 1 — Identifique o problema:</strong> "O tema é [X]."<br />
            <strong>Passo 2 — Aponte a causa ou aspecto central:</strong> "Isso decorre de [causa/fator específico]."<br />
            <strong>Passo 3 — Aponte a consequência ou urgência:</strong> "O que gera [efeito/consequência grave]."<br />
            <strong>Passo 4 — Sinalize a solução:</strong> "Exigindo/demandando [tipo de intervenção]."<br /><br />
            <strong>Resultado:</strong> "[X] decorre de [causa], o que gera [efeito], exigindo [solução]."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎯</span>
            <h3>Tese = posicionamento</h3>
            <p>Afirmação sobre o problema — específica, argumentável, coerente com o tema</p>
          </div>
          <div className="math-card">
            <span>📍</span>
            <h3>Última frase da intro</h3>
            <p>Posicionada no final da introdução — encerra e direciona todo o texto</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Defendida em 2 devs</h3>
            <p>Cada argumento deve sustentar diretamente a tese — teste de coerência</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Embora + posição</h3>
            <p>Concessão + posicionamento forte = tese sofisticada nota 200 em C3</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Evite teses óbvias</h3>
            <p>"A educação é importante" não é argumentável — C3 rebaixada</p>
          </div>
          <div className="math-card">
            <span>✍️</span>
            <h3>Fórmula de 4 passos</h3>
            <p>Problema + Causa + Efeito + Necessidade de solução = tese completa</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tese vs opinião pessoal"
          statement={
            <p>
              Qual das alternativas apresenta uma tese válida para uma redação ENEM, e não
              uma simples opinião pessoal informal?
            </p>
          }
          options={[
            { letter: "a", text: "Eu acredito que o governo deveria fazer mais pelo meio ambiente porque a natureza é muito importante." },
            { letter: "b", text: "Na minha opinião, o racismo precisa acabar porque é muito errado discriminar pessoas." },
            { letter: "c", text: "A degradação ambiental da Amazônia, impulsionada pelo avanço do agronegócio sem regulação adequada, ameaça a biodiversidade global e os direitos territoriais dos povos indígenas.", correct: true },
            { letter: "d", text: "Todo mundo sabe que a violência é ruim e que o Brasil precisa de mais segurança pública." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. Ela apresenta posicionamento específico
              (degradação da Amazônia), aponta causa (agronegócio sem regulação), indica
              consequências (ameaça à biodiversidade e aos direitos indígenas) e usa linguagem
              formal impessoal. As demais usam "eu", "na minha opinião", "todo mundo sabe" —
              marcas de informalidade e subjetividade que reduzem a nota em C1 e C3.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Reescrevendo tese vaga"
          statement={
            <p>
              Reescreva a tese vaga: <em>"A educação é muito importante para o Brasil e
              precisa melhorar."</em> Qual das alternativas apresenta a versão mais específica
              e argumentável dessa tese?
            </p>
          }
          options={[
            { letter: "a", text: "A educação brasileira, especialmente a pública, enfrenta muitos problemas que precisam ser resolvidos urgentemente." },
            { letter: "b", text: "A defasagem entre o currículo do ensino médio público e as demandas do mercado de trabalho tecnológico perpetua a exclusão dos jovens de baixa renda, exigindo reforma curricular e expansão do ensino técnico.", correct: true },
            { letter: "c", text: "Sem uma boa educação, o Brasil não poderá se desenvolver e competir com outros países no mundo globalizado." },
            { letter: "d", text: "O investimento em educação é a melhor forma de reduzir a pobreza e garantir um futuro melhor para os brasileiros." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Ela transforma a tese vaga em uma
              afirmação específica: (1) identifica o problema concreto (defasagem curricular
              no ensino médio público), (2) aponta o grupo afetado (jovens de baixa renda),
              (3) nomeia a consequência (exclusão do mercado de trabalho tecnológico), e
              (4) indica a solução necessária (reforma curricular + ensino técnico). As demais
              alternativas continuam vagas ou usam clichês como "mundo globalizado" e "futuro
              melhor".
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Escrever introdução com tese forte"
          statement={
            <p>
              Para o tema <em>"Uso de agrotóxicos no Brasil"</em>, qual das alternativas
              apresenta a introdução mais completa — com contextualização adequada e tese
              forte e específica na última frase?
            </p>
          }
          options={[
            { letter: "a", text: "'O Brasil é o maior consumidor de agrotóxicos do mundo. Isso é um problema grave. O governo deve agir para proteger os brasileiros.'" },
            { letter: "b", text: "'A agricultura é muito importante para o Brasil. O agronegócio emprega muitas pessoas e gera riqueza. Mas os agrotóxicos são prejudiciais à saúde. Portanto, o governo deve regulamentá-los.'", correct: false },
            { letter: "c", text: "'Desde a Revolução Verde na década de 1960, a agricultura brasileira incorporou o uso intensivo de agrotóxicos como modelo produtivo. Atualmente, o Brasil é o maior mercado global de defensivos agrícolas, consumindo cerca de 500 mil toneladas por ano — dado que coloca em risco a saúde da população e dos ecossistemas. O uso indiscriminado de pesticidas, permitido pela flexibilização regulatória dos últimos anos, configura grave ameaça à segurança alimentar e à soberania sanitária do país.'", correct: true },
            { letter: "d", text: "'Os agrotóxicos são substâncias químicas usadas para combater pragas na lavoura. Eles têm vantagens e desvantagens. Por um lado, aumentam a produção; por outro, causam doenças. É preciso encontrar um equilíbrio entre os dois lados.'" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(c)</strong>. Essa introdução tem: contextualização
              histórica (Revolução Verde, anos 1960), dado específico (500 mil toneladas/ano,
              maior mercado global), desenvolvimento da problemática (risco à saúde e
              ecossistemas) e tese forte na última frase (flexibilização regulatória como causa
              + ameaça à segurança alimentar como consequência). A alternativa (a) é rasa,
              (b) não formula tese clara, e (d) aponta "equilíbrio" sem posicionamento definido.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM 2021 — avaliar tese sobre registro civil"
          statement={
            <p>
              Para o tema ENEM 2021 <em>"Invisibilidade e registro civil: os desafios para
              o acesso à cidadania no Brasil"</em>, avalie a seguinte tese: <em>"É preciso
              que o governo se preocupe com os sem documentos."</em> O que está errado?
            </p>
          }
          options={[
            { letter: "a", text: "A tese está correta — é específica, usa linguagem formal e apresenta posicionamento claro sobre o tema." },
            { letter: "b", text: "A tese é vaga e imprecisa: não especifica qual problema causa a falta de registro, quem são os grupos afetados, nem qual tipo de intervenção é necessária.", correct: true },
            { letter: "c", text: "A tese está fora do tema — falar em 'sem documentos' é tangenciamento, pois o tema é 'invisibilidade' em sentido amplo." },
            { letter: "d", text: "A tese é óbvia mas está gramaticalmente correta — o único problema é o nível de formalidade." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. A tese "o governo deve se preocupar
              com os sem documentos" tem múltiplos problemas: (1) <em>vaga</em> — "se preocupar"
              não especifica nenhuma ação concreta; (2) <em>imprecisa</em> — não identifica
              os grupos afetados (populações indígenas, quilombolas, migrantes internos,
              crianças de famílias em situação de rua) nem as causas da falta de registro;
              (3) <em>sem argumento</em> — não aponta o que gera a invisibilidade nem as
              consequências. Uma tese forte seria: "A ausência de registro civil entre
              populações vulneráveis, decorrente de barreiras geográficas e burocráticas, priva
              cidadãos de direitos fundamentais e perpetua a invisibilidade social estrutural."
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Tese sobre trabalho de cuidado feminino — argumentos de apoio"
          statement={
            <p>
              Dada a tese: <em>"A precarização do trabalho de cuidado feminino decorre da
              herança patriarcal e da ausência de políticas públicas de valorização"</em>,
              quais argumentos a sustentam melhor nos dois desenvolvimentos?
            </p>
          }
          options={[
            { letter: "a", text: "Dev. 1: A mulher sofre violência doméstica. Dev. 2: As leis brasileiras não punem suficientemente os agressores." },
            { letter: "b", text: "Dev. 1: A divisão sexual do trabalho, construída historicamente, atribui às mulheres as tarefas domésticas sem remuneração. Dev. 2: A ausência de políticas públicas como creches e licença parental igualitária aprofunda essa desigualdade.", correct: true },
            { letter: "c", text: "Dev. 1: O mercado de trabalho discrimina as mulheres em promoções e salários. Dev. 2: A educação das meninas ainda é limitada em regiões pobres." },
            { letter: "d", text: "Dev. 1: O Brasil tem uma das piores taxas de igualdade de gênero do mundo. Dev. 2: Outros países como Islândia já resolveram esse problema." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>(b)</strong>. Os dois argumentos sustentam
              diretamente a tese: Dev. 1 defende a causa "herança patriarcal" (divisão sexual
              do trabalho construída historicamente), e Dev. 2 defende a causa "ausência de
              políticas públicas" (creches e licença parental igualitária). Cada desenvolvimento
              corresponde a uma das causas enunciadas na tese, garantindo coerência perfeita.
              As alternativas (a), (c) e (d) se afastam do recorte específico da tese (trabalho
              de cuidado não remunerado) e abordam outros aspectos da desigualdade de gênero.
            </p>
          }
        />
      </section>
    </article>
  );
}
