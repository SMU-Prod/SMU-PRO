"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 28</span>
          <h1>Propagandas, campanhas publicitárias e marketing</h1>
          <p>
            Textos publicitários são um dos gêneros mais recorrentes nas provas
            de inglês do ENEM. Entender como a linguagem persuasiva opera —
            seus apelos, estruturas e estratégias — permite que você interprete
            qualquer anúncio com confiança, mesmo sem dominar todo o vocabulário.
          </p>
          <p>
            Neste capítulo você vai aprender a identificar os elementos da
            propaganda (slogan, headline, call-to-action), diferenciar campanhas
            comerciais, sociais e políticas, e reconhecer os recursos linguísticos
            que o ENEM mais cobra nesse gênero.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. A Função Persuasiva do Texto Publicitário</h2>
        <p>
          Todo texto publicitário tem uma função central: <strong>persuadir</strong>.
          Diferente de um artigo informativo (que informa) ou de um poema (que
          expressa emoção), a propaganda quer mudar o comportamento do leitor —
          fazê-lo comprar, apoiar, agir ou acreditar em algo.
        </p>
        <p>
          No ENEM, o examinador quase sempre pergunta sobre a <strong>intenção
          comunicativa</strong> do texto, o <strong>público-alvo</strong> ou o
          <strong> efeito de sentido</strong> produzido pelos recursos escolhidos.
          Reconhecer que o texto é uma propaganda é o primeiro passo para
          responder corretamente.
        </p>
        <div className="lesson-highlight">
          <strong>Princípio-chave:</strong> Propaganda = persuadir. Sempre que
          o texto tiver um slogan curto, verbos no imperativo, apelo emocional
          ou imagem simbólica, você está diante de um texto publicitário.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>2. Elementos da Propaganda em Inglês</h2>
        <p>
          Os textos publicitários em inglês que aparecem no ENEM compartilham
          uma estrutura reconhecível. Conhecer cada elemento permite decodificar
          rapidamente qualquer anúncio:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Headline</h3>
            <p>Título principal do anúncio. Capta atenção imediatamente. Ex.: "Change starts here."</p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Slogan / Tagline</h3>
            <p>Frase curta e memorável que resume a marca ou mensagem. Ex.: "Just do it."</p>
          </div>
          <div className="lesson-card">
            <span>👆</span>
            <h3>Call-to-Action (CTA)</h3>
            <p>Convite à ação. Verbos no imperativo. Ex.: "Sign up now.", "Donate today."</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Público-alvo</h3>
            <p>A quem a mensagem se dirige. Pistas: vocabulário, imagens, tom e tema escolhidos.</p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Apelo emocional</h3>
            <p>Palavras e imagens que ativam sentimentos: medo, esperança, pertencimento, orgulho.</p>
          </div>
          <div className="lesson-card">
            <span>📸</span>
            <h3>Recursos visuais</h3>
            <p>Cores, imagens e layout integram a mensagem verbal. No ENEM, imagem + texto formam sentido conjunto.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>
        <h2>3. Propagandas Comerciais, Sociais e Políticas</h2>
        <p>
          Nem toda propaganda vende um produto. O ENEM cobra os três tipos, e
          cada um tem características distintas que você precisa reconhecer:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Objetivo</th>
                <th>Exemplos de tema</th>
                <th>Linguagem típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comercial</td>
                <td>Vender produto ou serviço</td>
                <td>Celular, roupas, plano de saúde</td>
                <td>Imperativo, superlativo, oferta limitada</td>
              </tr>
              <tr>
                <td>Social / ONG</td>
                <td>Conscientizar, mudar comportamento</td>
                <td>Meio ambiente, saúde pública, educação</td>
                <td>Apelo emocional, dados estatísticos, urgência</td>
              </tr>
              <tr>
                <td>Política / Institucional</td>
                <td>Construir imagem, angariar apoio</td>
                <td>Candidatos, governos, partidos</td>
                <td>Promessas, valores compartilhados, identidade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Campanhas de conscientização (awareness
          campaigns) são frequentes na prova. Diferem da propaganda comercial
          porque não vendem produto — querem mudar atitudes. Ex.: campanhas
          antitabagismo, de vacinação, de reciclagem.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem</span>
        <h2>4. Recursos Linguísticos da Propaganda</h2>
        <p>
          A propaganda usa a língua de forma estratégica. Cada recurso tem um
          efeito calculado sobre o leitor. Conheça os principais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso</th>
                <th>Como funciona</th>
                <th>Exemplo em inglês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Imperativo</td>
                <td>Ordena/convida à ação diretamente</td>
                <td>"Buy now." / "Act before it's too late."</td>
              </tr>
              <tr>
                <td>Superlativo</td>
                <td>Posiciona o produto como o melhor</td>
                <td>"The most trusted brand." / "Best value ever."</td>
              </tr>
              <tr>
                <td>Ambiguidade</td>
                <td>Palavra com duplo sentido cria humor ou impacto</td>
                <td>"Get charged." (bateria do celular / motivado)</td>
              </tr>
              <tr>
                <td>Aliteração / rima</td>
                <td>Torna o slogan memorável</td>
                <td>"Don't delay. Donate today."</td>
              </tr>
              <tr>
                <td>Inclusão ("nós")</td>
                <td>Cria senso de comunidade</td>
                <td>"Together we can change the world."</td>
              </tr>
              <tr>
                <td>Urgência / escassez</td>
                <td>Pressiona o leitor a agir rápido</td>
                <td>"Limited offer." / "Only 3 left."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>5. Anatomia de um Anúncio: Mapa Visual</h2>
        <p>
          O diagrama abaixo mostra como os elementos de um anúncio típico se
          organizam e como cada um contribui para o efeito persuasivo:
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            aria-label="Diagrama de anatomia de um anúncio publicitário em inglês"
            role="img"
          >
            {/* Moldura do anúncio */}
            <rect x="20" y="20" width="400" height="260" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

            {/* Headline */}
            <rect x="40" y="35" width="360" height="40" rx="6" fill="#4f46e5" />
            <text x="220" y="60" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">HEADLINE — capta atenção</text>

            {/* Imagem / Visual */}
            <rect x="40" y="85" width="170" height="100" rx="6" fill="#e0e7ff" />
            <text x="125" y="130" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Imagem / Visual</text>
            <text x="125" y="148" textAnchor="middle" fill="#3730a3" fontSize="11">reforça a mensagem</text>

            {/* Body copy */}
            <rect x="225" y="85" width="175" height="100" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <text x="312" y="115" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">Body copy</text>
            <text x="312" y="133" textAnchor="middle" fill="#475569" fontSize="10">argumento + benefício</text>
            <text x="312" y="149" textAnchor="middle" fill="#475569" fontSize="10">apelo emocional</text>
            <text x="312" y="165" textAnchor="middle" fill="#475569" fontSize="10">prova social / dado</text>

            {/* Slogan */}
            <rect x="40" y="195" width="255" height="35" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="167" y="217" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Slogan / Tagline memorável</text>

            {/* CTA */}
            <rect x="310" y="195" width="110" height="35" rx="17" fill="#059669" />
            <text x="365" y="217" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CTA → Ação</text>

            {/* Logo */}
            <rect x="40" y="245" width="360" height="25" rx="4" fill="#e2e8f0" />
            <text x="220" y="262" textAnchor="middle" fill="#64748b" fontSize="11">Logotipo + informação de contato</text>

            {/* Legenda lateral */}
            <rect x="440" y="30" width="245" height="240" rx="8" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
            <text x="562" y="55" textAnchor="middle" fill="#9a3412" fontSize="12" fontWeight="bold">O que o ENEM pergunta</text>
            <text x="562" y="78" textAnchor="middle" fill="#9a3412" fontSize="11">• Objetivo do texto</text>
            <text x="562" y="98" textAnchor="middle" fill="#9a3412" fontSize="11">• Público-alvo</text>
            <text x="562" y="118" textAnchor="middle" fill="#9a3412" fontSize="11">• Sentido do slogan</text>
            <text x="562" y="138" textAnchor="middle" fill="#9a3412" fontSize="11">• Efeito da imagem</text>
            <text x="562" y="158" textAnchor="middle" fill="#9a3412" fontSize="11">• Recurso persuasivo</text>
            <text x="562" y="178" textAnchor="middle" fill="#9a3412" fontSize="11">• Tipo de campanha</text>
            <text x="562" y="210" textAnchor="middle" fill="#7c2d12" fontSize="10" fontStyle="italic">Nunca pergunta:</text>
            <text x="562" y="228" textAnchor="middle" fill="#7c2d12" fontSize="10">gramática isolada ou</text>
            <text x="562" y="246" textAnchor="middle" fill="#7c2d12" fontSize="10">tradução literal</text>
          </svg>
          <figcaption>Anatomia de um anúncio publicitário e os elementos que o ENEM avalia em questões sobre propaganda.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>6. Vocabulário Publicitário de Alta Frequência</h2>
        <p>
          Certas palavras e expressões aparecem quase sempre em textos
          publicitários em inglês. Reconhecê-las ajuda a identificar o gênero
          e a intenção antes mesmo de ler o texto por completo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão em inglês</th>
                <th>Tradução / sentido</th>
                <th>Função persuasiva</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Buy now / Order today</td><td>Compre agora / Peça hoje</td><td>Urgência e ação imediata</td></tr>
              <tr><td>Limited offer / Limited time</td><td>Oferta limitada / Tempo limitado</td><td>Escassez artificial</td></tr>
              <tr><td>Exclusive / Premium</td><td>Exclusivo / Premium</td><td>Distinção, status</td></tr>
              <tr><td>Free / No cost</td><td>Grátis / Sem custo</td><td>Eliminação de barreira</td></tr>
              <tr><td>Trusted / Proven / Guaranteed</td><td>Confiável / Comprovado / Garantido</td><td>Credibilidade, segurança</td></tr>
              <tr><td>Join us / Be part of</td><td>Junte-se a nós / Faça parte de</td><td>Pertencimento, comunidade</td></tr>
              <tr><td>Save / Protect / Help</td><td>Salvar / Proteger / Ajudar</td><td>Apelo altruísta (campanhas sociais)</td></tr>
              <tr><td>Discover / Explore</td><td>Descubra / Explore</td><td>Curiosidade, novidade</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>7. Não Confunda: Intenção Informativa vs. Persuasiva</h2>
        <p>
          Uma das armadilhas mais comuns do ENEM neste tema é confundir o
          objetivo de textos que <em>parecem</em> informativos mas são, na
          verdade, persuasivos — ou vice-versa:
        </p>
        <ul>
          <li>
            <strong>Uma campanha de saúde pública</strong> pode conter dados e
            estatísticas (elemento informativo), mas seu objetivo central é
            persuadir a população a vacinar-se, usar protetor solar ou parar
            de fumar. O dado é um recurso persuasivo, não o objetivo.
          </li>
          <li>
            <strong>Um artigo jornalístico sobre um produto</strong> pode mencionar
            benefícios (linguagem positiva), mas se não tiver CTA, slogan ou
            apelo emocional direto, provavelmente é informativo.
          </li>
          <li>
            <strong>O critério decisivo</strong> é sempre perguntar: o texto quer
            que eu <em>saiba</em> algo ou que eu <em>faça/acredite</em> em algo?
            Se for o segundo, é persuasivo.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Regra prática:</strong> Se o texto tem imperativo + imagem simbólica
          + slogan, é propaganda. Se tem imperativo mas descreve passos técnicos
          (instruções), é texto instrucional — objetivo diferente.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>8. Como Resolver Questões sobre Propaganda no ENEM</h2>
        <p>
          Siga esta sequência ao encontrar uma propaganda na prova:
        </p>
        <ol>
          <li><strong>Identifique o gênero:</strong> é uma propaganda? (slogan, imperativo, imagem simbólica)</li>
          <li><strong>Classifique o tipo:</strong> comercial, social ou política?</li>
          <li><strong>Identifique o público-alvo:</strong> a quem o texto se dirige (jovens, pais, consumidores, cidadãos)?</li>
          <li><strong>Qual é o apelo central?</strong> medo, esperança, orgulho, pertencimento, conveniência?</li>
          <li><strong>Leia o enunciado</strong> para saber se a questão pede objetivo, público-alvo ou sentido de expressão específica.</li>
          <li><strong>Elimine as alternativas</strong> que atribuem função informativa/narrativa a um texto claramente persuasivo.</li>
        </ol>
        <div className="math-block">
          <strong>Dica ENEM:</strong> O ENEM raramente pede tradução de slogan.
          Em geral, pede o <em>efeito de sentido</em> — o que a expressão
          provoca no leitor, não o que significa palavra por palavra.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Função do texto publicitário"
          statement={
            <p>
              Um anúncio em inglês traz o seguinte slogan:{" "}
              <strong>"Don't just dream it. Live it."</strong>, ao lado da imagem
              de uma pessoa fazendo uma trilha em uma montanha, com o logotipo
              de uma empresa de equipamentos esportivos. Esse texto tem como
              objetivo principal:
            </p>
          }
          options={[
            { letter: "A", text: "Informar sobre os riscos de atividades esportivas ao ar livre." },
            { letter: "B", text: "Narrar a experiência de um alpinista em uma expedição." },
            { letter: "C", text: "Persuadir o leitor a adquirir os produtos da marca, associando-os à realização pessoal.", correct: true },
            { letter: "D", text: "Explicar como escolher equipamentos esportivos de qualidade." },
            { letter: "E", text: "Criticar pessoas que preferem sonhar a praticar esportes." },
          ]}
          resolution={
            <p>
              O slogan usa o imperativo (<em>Don't</em>, <em>Live</em>) e cria
              um contraste entre sonho e ação — recurso clássico de propaganda
              comercial. A imagem esportiva e o logotipo da marca confirmam que
              o objetivo é <strong>persuadir</strong> o leitor a identificar-se
              com o estilo de vida proposto e comprar os produtos. Alternativas
              A, B, D e E descrevem funções informativa, narrativa, instrucional
              e crítica — incompatíveis com o gênero propaganda.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Propaganda social vs. comercial"
          statement={
            <p>
              Uma campanha traz o texto:{" "}
              <em>"Every 2 minutes, someone is diagnosed with skin cancer.
              Wear sunscreen. Save your skin."</em>, acompanhado de dado
              estatístico e logotipo de organização de saúde. Como esse texto
              se diferencia de uma propaganda comercial típica?
            </p>
          }
          options={[
            { letter: "A", text: "Porque usa linguagem informal e emotiva, enquanto propagandas comerciais são sempre formais." },
            { letter: "B", text: "Porque seu objetivo é conscientizar sobre um problema de saúde pública e mudar comportamento, não vender um produto específico.", correct: true },
            { letter: "C", text: "Porque não utiliza verbos no imperativo, ao contrário das propagandas comerciais." },
            { letter: "D", text: "Porque apresenta apenas dados estatísticos, sem nenhum apelo emocional." },
            { letter: "E", text: "Porque é direcionado exclusivamente a médicos e profissionais de saúde." },
          ]}
          resolution={
            <p>
              Campanhas de saúde pública são <strong>propagandas sociais</strong>:
              usam dados (estatística), imperativo (<em>Wear, Save</em>) e apelo
              emocional (medo do câncer), mas o objetivo não é vender um produto —
              é mudar um comportamento para o bem coletivo. A alternativa B
              captura essa distinção. As demais são incorretas: campanhas sociais
              também usam imperativo (C é falsa), têm apelo emocional forte (D
              é falsa), e se dirigem ao público geral (E é falsa).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Ambiguidade no slogan"
          statement={
            <p>
              Um anúncio de energia elétrica renovável traz o slogan:{" "}
              <strong>"Power your future."</strong> A ambiguidade presente nesse
              slogan contribui para o efeito persuasivo porque:
            </p>
          }
          options={[
            { letter: "A", text: "A palavra power é ambígua pois pode significar tanto 'energia elétrica' quanto 'empoderar/fortalecer', associando o produto a progresso e capacitação pessoal.", correct: true },
            { letter: "B", text: "A ambiguidade impede a compreensão, o que desafia o leitor a pesquisar mais sobre o produto." },
            { letter: "C", text: "O verbo no imperativo gera ambiguidade entre ordem e pedido, o que suaviza a mensagem publicitária." },
            { letter: "D", text: "A palavra future é ambígua pois pode referir-se ao futuro próximo ou distante, ampliando o público-alvo." },
            { letter: "E", text: "A ambiguidade é um erro de redação que o ENEM não consideraria em textos publicitários reais." },
          ]}
          resolution={
            <p>
              <em>Power</em> funciona simultaneamente como substantivo ("energia
              elétrica") e verbo ("empoderar, impulsionar"). Essa <strong>polissemia
              intencional</strong> é um recurso clássico da publicidade: o anúncio
              vende energia renovável (<em>power = eletricidade</em>) e ao mesmo
              tempo promete transformação pessoal (<em>power your future =
              impulsione seu futuro</em>). O ENEM frequentemente cobra esse tipo
              de ambiguidade criativa como recurso expressivo consciente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Público-alvo"
          statement={
            <div>
              <p>
                <em>(Situação típica de questão ENEM)</em>
              </p>
              <p>
                Um anúncio traz a seguinte mensagem:{" "}
                <em>"College is tough. Your bank shouldn't be. Open a free student
                account today — no fees, no minimums, just support when you need it."</em>
              </p>
              <p>
                O público-alvo desse anúncio é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Professores universitários que buscam facilitar os pagamentos de seus alunos." },
            { letter: "B", text: "Empresas que financiam estudantes do ensino superior." },
            { letter: "C", text: "Estudantes universitários que precisam de uma conta bancária sem custos e burocracia.", correct: true },
            { letter: "D", text: "Pais de estudantes que buscam controlar os gastos dos filhos na faculdade." },
            { letter: "E", text: "Qualquer pessoa que deseje abrir uma conta bancária gratuita." },
          ]}
          resolution={
            <p>
              O anúncio começa reconhecendo a dificuldade da vida universitária
              (<em>"College is tough"</em>) e oferece uma solução específica:
              conta para estudante sem taxas. O sintagma <em>"free student
              account"</em> e a promessa de "<em>no fees, no minimums</em>"
              indicam que o público-alvo são <strong>estudantes universitários</strong>,
              tipicamente com renda limitada e sem histórico bancário sólido.
              Apesar de a alternativa E parecer abrangente, o anúncio claramente
              se dirige ao contexto universitário.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Apelo central da campanha"
          statement={
            <div>
              <p>
                Uma campanha internacional de combate ao desperdício de alimentos
                traz o seguinte texto:{" "}
                <em>"1/3 of all food produced globally is wasted. Meanwhile,
                800 million people go to bed hungry every night. Change your habits.
                Change the world."</em>
              </p>
              <p>
                O principal recurso persuasivo utilizado nessa campanha é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O uso de superlativos para destacar a gravidade do problema." },
            { letter: "B", text: "A ironia ao comparar o desperdício com a fome, criando um efeito humorístico." },
            { letter: "C", text: "O contraste entre dados de desperdício e a realidade da fome, gerando urgência e apelo à responsabilidade individual.", correct: true },
            { letter: "D", text: "O uso de linguagem técnica e científica para convencer especialistas em nutrição." },
            { letter: "E", text: "A repetição da estrutura 'Change your... Change the...' como recurso exclusivamente estético, sem efeito persuasivo." },
          ]}
          resolution={
            <p>
              A campanha usa o recurso de <strong>contraste</strong>: coloca
              lado a lado o dado de desperdício (1/3 da produção global) e a
              realidade da fome (800 milhões de pessoas). Esse choque de
              informações gera <strong>impacto emocional e moral</strong>,
              mobilizando o senso de responsabilidade do leitor. O imperativo
              final (<em>"Change your habits. Change the world."</em>) transforma
              esse impacto em convite à ação. Não há superlativos (A), não é
              irônico/humorístico (B), a linguagem é acessível, não técnica (D),
              e a repetição tem função retórica clara (E é parcialmente correta
              mas incompleta).
            </p>
          }
        />
      </section>
    </article>
  );
}
