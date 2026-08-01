"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 32</span>
          <h1>Tecnologia, inteligência artificial e redes sociais</h1>
          <p>
            Tecnologia é um dos temas mais dinâmicos e recorrentes no ENEM de inglês.
            Textos sobre inteligência artificial, privacidade de dados, fake news e
            automação aparecem em formatos variados — de artigos de opinião a infográficos —
            e exigem tanto vocabulário específico quanto leitura crítica.
          </p>
          <p>
            Neste capítulo você vai dominar o vocabulário tecnológico de alta frequência,
            entender como o ENEM aborda dilemas éticos da tecnologia, aprender a ler
            infográficos e praticar com questões no estilo do exame.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário essencial</span>
        <h2>1. Vocabulário Tecnológico de Alta Frequência no ENEM</h2>
        <p>
          O ENEM seleciona textos autênticos de circulação internacional. Veja os termos
          mais frequentes e como eles aparecem em contexto:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo em inglês</th>
                <th>Tradução / sentido</th>
                <th>Aparece frequentemente em</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>artificial intelligence (AI)</strong></td>
                <td>inteligência artificial</td>
                <td>Artigos de divulgação, textos de opinião</td>
              </tr>
              <tr>
                <td><strong>machine learning</strong></td>
                <td>aprendizado de máquina</td>
                <td>Textos científicos adaptados</td>
              </tr>
              <tr>
                <td><strong>algorithm</strong></td>
                <td>algoritmo</td>
                <td>Reportagens sobre redes sociais, big data</td>
              </tr>
              <tr>
                <td><strong>data privacy</strong></td>
                <td>privacidade de dados</td>
                <td>Artigos de opinião, campanhas, reportagens</td>
              </tr>
              <tr>
                <td><strong>social media</strong></td>
                <td>redes sociais / mídia social</td>
                <td>Posts, artigos, campanhas de conscientização</td>
              </tr>
              <tr>
                <td><strong>digital footprint</strong></td>
                <td>rastro digital / pegada digital</td>
                <td>Textos sobre privacidade e vigilância</td>
              </tr>
              <tr>
                <td><strong>cybersecurity</strong></td>
                <td>segurança cibernética</td>
                <td>Reportagens, infográficos</td>
              </tr>
              <tr>
                <td><strong>automation</strong></td>
                <td>automação</td>
                <td>Textos sobre mercado de trabalho e robótica</td>
              </tr>
              <tr>
                <td><strong>disruption</strong></td>
                <td>disrupção / ruptura (de modelo de negócio)</td>
                <td>Textos sobre startups e inovação</td>
              </tr>
              <tr>
                <td><strong>platform</strong></td>
                <td>plataforma (digital)</td>
                <td>Textos sobre redes sociais e economia digital</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Cognatos que enganam:</strong> <em>Digital</em> → digital (fácil),
          mas <em>data</em> em inglês é sempre plural (os dados), e <em>network</em>
          pode ser rede ou conexão. <em>Bias</em> = viés (não "bias" no sentido coloquial
          de favoritismo automático — no contexto de IA, significa distorção no algoritmo).
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros textuais</span>
        <h2>2. Tipos de Texto sobre Tecnologia no ENEM</h2>
        <p>
          Cada gênero textual aborda a tecnologia com uma intenção comunicativa
          diferente. Reconhecer o gênero orienta a leitura e ajuda a antecipar
          o que a questão vai cobrar:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Artigo de opinião</h3>
            <p>Posicionamento explícito sobre impactos da IA ou redes sociais. Pede identificação de ponto de vista.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Divulgação científica</h3>
            <p>Explica conceitos técnicos para leigos. Usa hedging (may, could, suggests). Pede ideia central.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Infográfico</h3>
            <p>Dados sobre uso de redes sociais, crescimento da IA, etc. Pede interpretação de dados e comparação.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Post / blog</h3>
            <p>Linguagem informal, interação digital, hashtags. Pede intenção comunicativa e público-alvo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dilemas éticos</span>
        <h2>3. Como o ENEM Aborda Dilemas Éticos da Tecnologia</h2>
        <p>
          O ENEM não testa apenas vocabulário tecnológico — ele avalia se você consegue
          compreender os debates éticos que cercam essas tecnologias. O diagrama abaixo
          mostra os quatro grandes dilemas que aparecem com mais frequência:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            aria-label="Diagrama dos quatro dilemas éticos da tecnologia cobrados no ENEM"
            role="img"
          >
            {/* Centro */}
            <ellipse cx="350" cy="140" rx="70" ry="40" fill="#4f46e5" />
            <text x="350" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DILEMAS</text>
            <text x="350" y="152" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ÉTICOS</text>

            {/* Quadrante superior esquerdo */}
            <rect x="30" y="20" width="190" height="80" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="125" y="48" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold">🔒 Privacidade de dados</text>
            <text x="125" y="66" textAnchor="middle" fill="#1e3a8a" fontSize="10">Empresas coletam dados</text>
            <text x="125" y="82" textAnchor="middle" fill="#1e3a8a" fontSize="10">sem consentimento informado</text>
            <line x1="220" y1="70" x2="282" y2="115" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Quadrante superior direito */}
            <rect x="480" y="20" width="190" height="80" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="575" y="48" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">📰 Fake news</text>
            <text x="575" y="66" textAnchor="middle" fill="#92400e" fontSize="10">Algoritmos amplificam</text>
            <text x="575" y="82" textAnchor="middle" fill="#92400e" fontSize="10">desinformação em escala</text>
            <line x1="480" y1="70" x2="418" y2="115" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Quadrante inferior esquerdo */}
            <rect x="30" y="180" width="190" height="80" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="125" y="208" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">🤖 Automação</text>
            <text x="125" y="226" textAnchor="middle" fill="#065f46" fontSize="10">Substituição de empregos</text>
            <text x="125" y="242" textAnchor="middle" fill="#065f46" fontSize="10">por máquinas e IA</text>
            <line x1="220" y1="210" x2="282" y2="165" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Quadrante inferior direito */}
            <rect x="480" y="180" width="190" height="80" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="575" y="208" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">📱 Vício digital</text>
            <text x="575" y="226" textAnchor="middle" fill="#9d174d" fontSize="10">Design persuasivo das</text>
            <text x="575" y="242" textAnchor="middle" fill="#9d174d" fontSize="10">plataformas x saúde mental</text>
            <line x1="480" y1="210" x2="418" y2="165" stroke="#db2777" strokeWidth="1.5" strokeDasharray="4,3" />
          </svg>
          <figcaption>Os quatro grandes dilemas éticos da tecnologia que aparecem em textos de inglês do ENEM: privacidade de dados, fake news, automação e vício digital.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem de futuro</span>
        <h2>4. Como Textos Tecnológicos Falam sobre o Futuro</h2>
        <p>
          Textos sobre tecnologia frequentemente fazem projeções futuras. Reconhecer
          as estruturas que expressam futuro é essencial para não confundir o que
          já acontece com o que ainda pode acontecer:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Grau de certeza</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>will + verbo</em></td>
                <td>Certeza / previsão forte</td>
                <td><em>"AI will transform every industry."</em></td>
              </tr>
              <tr>
                <td><em>is expected to</em></td>
                <td>Expectativa baseada em evidências</td>
                <td><em>"Automation is expected to eliminate 85 million jobs by 2025."</em></td>
              </tr>
              <tr>
                <td><em>might / could</em></td>
                <td>Possibilidade (moderada)</td>
                <td><em>"This technology could revolutionize healthcare."</em></td>
              </tr>
              <tr>
                <td><em>is likely to</em></td>
                <td>Probabilidade alta</td>
                <td><em>"Social media is likely to continue shaping public opinion."</em></td>
              </tr>
              <tr>
                <td><em>may</em></td>
                <td>Possibilidade (aberta)</td>
                <td><em>"Quantum computing may solve problems beyond current AI capabilities."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Questões sobre textos tecnológicos frequentemente
          testam se você distingue o que o texto <em>afirma</em> (fato presente) do que
          o texto <em>projeta</em> (futuro incerto). <em>Will</em> não significa
          "com certeza absoluta" em textos de opinião — é a visão do autor.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infográficos</span>
        <h2>5. Lendo Infográficos sobre Tecnologia</h2>
        <p>
          Infográficos combinam dados visuais com texto em inglês. Para interpreta-los
          no ENEM, siga este roteiro:
        </p>
        <ol>
          <li><strong>Leia o título e subtítulo</strong> — definem o tema e a fonte dos dados.</li>
          <li><strong>Identifique o eixo ou variável principal</strong> — o que está sendo comparado (tempo, regiões, porcentagens).</li>
          <li><strong>Procure a tendência</strong> — crescimento (<em>increase, rise, surge</em>), queda (<em>decline, drop, decrease</em>) ou estabilidade (<em>remain stable, plateau</em>).</li>
          <li><strong>Relacione legenda e dados</strong> — cores, barras ou linhas têm significado explicitado na legenda.</li>
          <li><strong>Conecte o dado ao enunciado da questão</strong> — o ENEM pede interpretação, não apenas leitura literal.</li>
        </ol>
        <div className="lesson-highlight">
          <strong>Vocabulário de infográficos tecnológicos:</strong> <em>users, growth rate,
          percentage, compared to, versus, as of [year], global share, adoption rate,
          per capita</em>. Esses termos são quase todos cognatos ou facilmente inferíveis.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hedging em IA</span>
        <h2>6. Linguagem de Moderação em Textos sobre Inteligência Artificial</h2>
        <p>
          Textos científicos sobre IA são repletos de <strong>hedging</strong> — o autor
          modera afirmações para não ir além do que os dados sustentam. Ao mesmo tempo,
          textos de opinião e marketing de startups usam linguagem mais assertiva.
          Distinguir os dois é crucial:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Texto científico (hedging)</h3>
            <p><em>"Early results suggest that AI may be able to detect cancer earlier than traditional methods."</em></p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Texto de marketing (assertivo)</h3>
            <p><em>"Our AI will revolutionize your business and deliver results in days, not months."</em></p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Artigo de opinião (posicionado)</h3>
            <p><em>"We must regulate AI now, before it is too late to protect human dignity."</em></p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Reportagem (informativo)</h3>
            <p><em>"According to experts, AI adoption in the workplace doubled between 2020 and 2023."</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cidadania digital</span>
        <h2>7. Tecnologia, Direitos Digitais e Cidadania</h2>
        <p>
          O ENEM frequentemente conecta tecnologia a temas de cidadania e direitos.
          Fique atento a esses vínculos ao ler textos tecnológicos:
        </p>
        <ul>
          <li><strong>Privacidade como direito fundamental</strong> — textos argumentam que o acesso a dados pessoais por empresas viola direitos humanos.</li>
          <li><strong>Inclusão digital</strong> — desigualdade no acesso à internet como barreira à cidadania plena.</li>
          <li><strong>Liberdade de expressão x desinformação</strong> — debate sobre regulação de conteúdo em plataformas.</li>
          <li><strong>Impacto da automação nos mais vulneráveis</strong> — trabalhadores de baixa renda são os mais afetados pela substituição por máquinas.</li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando o texto mistura tecnologia com direitos humanos,
          o ENEM geralmente pergunta sobre a <em>intenção comunicativa</em> (persuadir,
          alertar, criticar) ou sobre o <em>público-alvo</em> do texto. Essas perguntas
          ficam mais fáceis quando você identifica o gênero e o tom do texto.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Vocabulário tecnológico"
          statement={
            <p>
              No trecho <em>"Companies collect massive amounts of user data without obtaining
              explicit consent, raising serious concerns about data privacy"</em>, o termo{" "}
              <strong>data privacy</strong> refere-se a:
            </p>
          }
          options={[
            { letter: "A", text: "A velocidade com que as empresas processam informações dos usuários." },
            { letter: "B", text: "O direito dos usuários de controlar como suas informações pessoais são coletadas e usadas.", correct: true },
            { letter: "C", text: "A tecnologia usada pelas empresas para proteger seus próprios servidores de ataques." },
            { letter: "D", text: "A quantidade de dados armazenados pelas plataformas digitais por ano." },
            { letter: "E", text: "A política de compartilhamento de informações entre empresas parceiras." },
          ]}
          resolution={
            <p>
              <em>Data privacy</em> significa privacidade de dados — o direito dos usuários
              de controlar como suas informações pessoais são coletadas, armazenadas e usadas.
              O contexto reforça isso: o trecho menciona coleta de dados <em>sem consentimento
              explícito</em> (<em>without explicit consent</em>), o que levanta preocupações
              sobre esse direito. As demais alternativas confundem privacidade com velocidade,
              segurança de servidores ou políticas de parceria.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Grau de certeza sobre o futuro"
          statement={
            <p>
              Leia os dois trechos:<br />
              <strong>Trecho 1:</strong> <em>"AI will replace 50% of all jobs within the next decade."</em><br />
              <strong>Trecho 2:</strong> <em>"AI might replace a significant portion of jobs, depending on how quickly companies adopt new technologies."</em>
              <br /><br />
              A diferença principal entre os dois trechos é que:
            </p>
          }
          options={[
            { letter: "A", text: "O Trecho 1 é científico e o Trecho 2 é publicitário." },
            { letter: "B", text: "O Trecho 1 apresenta uma previsão mais assertiva, enquanto o Trecho 2 apresenta uma possibilidade condicionada.", correct: true },
            { letter: "C", text: "O Trecho 1 critica a automação e o Trecho 2 a apoia." },
            { letter: "D", text: "O Trecho 2 afirma com mais certeza do que o Trecho 1 sobre o impacto da IA." },
            { letter: "E", text: "Ambos os trechos expressam o mesmo grau de incerteza sobre o impacto da IA." },
          ]}
          resolution={
            <p>
              O Trecho 1 usa <em>will replace</em> — futuro simples, expressando previsão
              afirmativa e assertiva. O Trecho 2 usa <em>might replace</em> (poderia substituir)
              e acrescenta uma condição (<em>depending on how quickly…</em>), tornando a
              afirmação mais incerta e contingente. Identificar esse contraste é essencial
              para não confundir certeza com possibilidade em textos tecnológicos do ENEM.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Intenção comunicativa em texto sobre IA"
          statement={
            <p>
              Leia o trecho: <em>"The rise of artificial intelligence is not merely a
              technological shift — it is a fundamental transformation of what it means to
              be human. We must ask ourselves: who controls these systems, who benefits, and
              who is left behind? Regulation is not optional. It is a moral imperative."</em>
              <br /><br />
              A principal intenção do autor ao escrever esse texto é:
            </p>
          }
          options={[
            { letter: "A", text: "Explicar de forma técnica e neutra como funcionam os sistemas de inteligência artificial." },
            { letter: "B", text: "Apresentar dados estatísticos sobre o crescimento da IA no mercado de trabalho global." },
            { letter: "C", text: "Persuadir o leitor de que a regulamentação da IA é uma necessidade ética urgente.", correct: true },
            { letter: "D", text: "Narrar a história da inteligência artificial desde suas origens acadêmicas até os dias atuais." },
            { letter: "E", text: "Propor soluções técnicas específicas para os problemas gerados pela automação." },
          ]}
          resolution={
            <p>
              O texto usa linguagem deliberadamente persuasiva: perguntas retóricas
              (<em>"who controls… who benefits… who is left behind?"</em>), afirmações
              categóricas (<em>"Regulation is not optional"</em>) e apelo moral
              (<em>"moral imperative"</em>). Esses recursos caracterizam um texto de
              opinião/manifesto com clara intenção de <strong>convencer</strong> o leitor
              sobre a urgência da regulação da IA. Não há dados (exclui B), não é neutro
              (exclui A), nem histórico (exclui D), nem propositivo tecnicamente (exclui E).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Algoritmos e fake news"
          statement={
            <div>
              <p><em>(Adaptado de reportagem sobre redes sociais)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Social media algorithms are designed to maximize engagement — and
                emotionally charged content, including misinformation, tends to generate
                more clicks, shares, and reactions than factual reporting. As a result,
                false stories often spread faster and reach wider audiences than
                corrections ever do."
              </p>
              <p>De acordo com o texto, os algoritmos das redes sociais:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Foram criados especificamente para combater a propagação de notícias falsas." },
            { letter: "B", text: "Penalizam conteúdos emocionais, priorizando informações verificadas por jornalistas." },
            { letter: "C", text: "Contribuem indiretamente para a disseminação de desinformação ao priorizar engajamento.", correct: true },
            { letter: "D", text: "Distribuem igualmente conteúdo verdadeiro e falso sem qualquer critério de relevância." },
            { letter: "E", text: "Garantem que correções de informações falsas alcancem mais pessoas do que as notícias originais." },
          ]}
          resolution={
            <p>
              O texto explica que algoritmos buscam maximizar <em>engagement</em> (engajamento),
              e que conteúdo emocional — incluindo desinformação — gera mais cliques e
              compartilhamentos. A consequência (<em>as a result</em>) é que histórias falsas
              se espalham mais rápido e alcançam mais pessoas do que as correções. Isso
              indica que os algoritmos <em>contribuem indiretamente</em> para a disseminação
              de fake news, não que foram projetados para isso. As alternativas A, B e E
              contradizem diretamente o texto. D ignora o critério de engajamento mencionado.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Infográfico sobre uso de redes sociais"
          statement={
            <div>
              <p><em>(Baseado em infográfico típico do ENEM)</em></p>
              <p>
                Um infográfico apresenta o título <em>"Global Social Media Users (2019–2023)"</em>
                e mostra uma linha crescente: 3,4 bilhões (2019), 3,8 bi (2020), 4,2 bi (2021),
                4,6 bi (2022), 4,9 bi (2023). A legenda indica: <em>"Source: Global Digital
                Report, 2023."</em>
              </p>
              <p>Com base nos dados do infográfico, é correto afirmar que:</p>
            </div>
          }
          options={[
            { letter: "A", text: "O número de usuários de redes sociais diminuiu entre 2020 e 2021." },
            { letter: "B", text: "Em 2023, mais da metade da população mundial usava redes sociais.", correct: true },
            { letter: "C", text: "O crescimento de usuários foi mais acelerado entre 2022 e 2023 do que entre 2019 e 2020." },
            { letter: "D", text: "O infográfico apresenta dados sobre os países com maior número de usuários de internet." },
            { letter: "E", text: "Os dados mostram que o crescimento de usuários estabilizou após 2021." },
          ]}
          resolution={
            <p>
              A alternativa B é correta: em 2023, 4,9 bilhões de usuários em uma população
              mundial de cerca de 8 bilhões representa mais da metade. A alternativa A está
              errada — os dados mostram crescimento constante. C está errada: o crescimento
              foi de 0,4 bi (2019→2020) e de 0,3 bi (2022→2023), portanto mais lento no
              período mais recente. D confunde o tema (o infográfico trata de usuários de
              redes sociais, não acesso à internet). E está errada — os números crescem de
              forma constante até 2023.
            </p>
          }
        />
      </section>
    </article>
  );
}
