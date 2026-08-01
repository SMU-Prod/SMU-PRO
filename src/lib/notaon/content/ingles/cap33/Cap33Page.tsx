"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 33</span>
          <h1>Direitos Humanos, diversidade cultural e cidadania global</h1>
          <p>
            Direitos humanos é um dos temas mais cobrados nas últimas edições do ENEM
            em inglês. Textos sobre igualdade, diversidade, discriminação, refugiados e
            justiça social aparecem em formatos variados e exigem leitura crítica:
            identificar posicionamentos, distinguir descrição de valoração e compreender
            linguagem de ativismo são habilidades centrais.
          </p>
          <p>
            Neste capítulo você vai dominar o vocabulário do tema, aprender a identificar
            a intenção comunicativa em textos de direitos humanos, reconhecer a linguagem
            de ativismo e praticar com questões estilo ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário essencial</span>
        <h2>1. Vocabulário de Direitos Humanos e Diversidade</h2>
        <p>
          Esses termos aparecem em textos de campanha, reportagem, manifesto e artigo de
          opinião. Muitos são cognatos ou semelhantes ao português:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo em inglês</th>
                <th>Tradução / sentido</th>
                <th>Contexto típico no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>human rights</strong></td>
                <td>direitos humanos</td>
                <td>Declarações, campanhas, reportagens sobre violações</td>
              </tr>
              <tr>
                <td><strong>equality</strong></td>
                <td>igualdade</td>
                <td>Textos sobre gênero, raça, renda</td>
              </tr>
              <tr>
                <td><strong>diversity</strong></td>
                <td>diversidade</td>
                <td>Campanhas corporativas, textos educacionais</td>
              </tr>
              <tr>
                <td><strong>inclusion</strong></td>
                <td>inclusão</td>
                <td>Textos sobre pessoas com deficiência, minorias</td>
              </tr>
              <tr>
                <td><strong>discrimination</strong></td>
                <td>discriminação</td>
                <td>Reportagens, manifestos, artigos de opinião</td>
              </tr>
              <tr>
                <td><strong>racism</strong></td>
                <td>racismo</td>
                <td>Textos sobre desigualdade racial, movimentos sociais</td>
              </tr>
              <tr>
                <td><strong>refugee</strong></td>
                <td>refugiado</td>
                <td>Reportagens sobre crises humanitárias, políticas migratórias</td>
              </tr>
              <tr>
                <td><strong>empowerment</strong></td>
                <td>empoderamento</td>
                <td>Campanhas feministas, textos sobre autonomia</td>
              </tr>
              <tr>
                <td><strong>representation</strong></td>
                <td>representatividade</td>
                <td>Textos sobre mídia, política, cultura</td>
              </tr>
              <tr>
                <td><strong>marginalization</strong></td>
                <td>marginalização</td>
                <td>Textos sobre exclusão social e econômica</td>
              </tr>
              <tr>
                <td><strong>justice</strong></td>
                <td>justiça</td>
                <td>Manifestos, artigos de opinião, discursos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção ao falso cognato:</strong> <em>Minority</em> = minoria (grupo
          com menos poder ou representação — não necessariamente numérico). Em inglês,
          <em> minorities</em> pode referir-se a grupos raciais, étnicos ou LGBTQ+ mesmo
          que sejam numericamente expressivos, pois o critério é poder social, não quantidade.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros textuais</span>
        <h2>2. Tipos de Texto sobre Direitos Humanos no ENEM</h2>
        <p>
          O tema de direitos humanos aparece em gêneros muito variados. Identificar
          o gênero é o primeiro passo para antecipar a intenção comunicativa:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎤</span>
            <h3>Discurso / manifesto</h3>
            <p>Linguagem direta, apelo emocional, repetição. Intenção: mobilizar, denunciar ou reivindicar.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Reportagem</h3>
            <p>Informa sobre violações ou conquistas de direitos. Usa citações de especialistas e dados.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Artigo de opinião</h3>
            <p>Posicionamento explícito sobre desigualdade, discriminação ou política. Exige identificar ponto de vista.</p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Campanha</h3>
            <p>Slogan, imperativo, imagem simbólica. Objetivo: conscientizar e persuadir a agir.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem de ativismo</span>
        <h2>3. A Linguagem do Ativismo em Inglês</h2>
        <p>
          Textos ativistas sobre direitos humanos têm marcas linguísticas específicas
          que os diferenciam de textos informativos. Reconhecê-las ajuda a identificar
          a intenção comunicativa rapidamente:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            aria-label="Diagrama de marcas linguísticas de textos ativistas de direitos humanos"
            role="img"
          >
            {/* Título */}
            <text x="350" y="30" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">Marcas linguísticas do texto ativista</text>

            {/* Linha central */}
            <rect x="270" y="50" width="160" height="50" rx="8" fill="#7c3aed" />
            <text x="350" y="71" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TEXTO ATIVISTA</text>
            <text x="350" y="89" textAnchor="middle" fill="white" fontSize="11">de direitos humanos</text>

            {/* Ramificações */}
            {/* Esquerda alta */}
            <rect x="10" y="120" width="170" height="55" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="95" y="141" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">✊ Call to action</text>
            <text x="95" y="158" textAnchor="middle" fill="#4c1d95" fontSize="10">demand, fight for, stand up,</text>
            <text x="95" y="171" textAnchor="middle" fill="#4c1d95" fontSize="10">refuse to accept</text>
            <line x1="180" y1="147" x2="270" y2="87" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Esquerda baixa */}
            <rect x="10" y="195" width="170" height="55" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="95" y="216" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">📢 Imperativo direto</text>
            <text x="95" y="233" textAnchor="middle" fill="#1e3a8a" fontSize="10">Act now. Say no to. Speak</text>
            <text x="95" y="246" textAnchor="middle" fill="#1e3a8a" fontSize="10">up. Take action.</text>
            <line x1="180" y1="222" x2="270" y2="90" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Direita alta */}
            <rect x="520" y="120" width="170" height="55" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="605" y="141" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">🌍 Apelo coletivo</text>
            <text x="605" y="158" textAnchor="middle" fill="#065f46" fontSize="10">we, our, together, united,</text>
            <text x="605" y="171" textAnchor="middle" fill="#065f46" fontSize="10">as a community</text>
            <line x1="520" y1="147" x2="430" y2="87" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Direita baixa */}
            <rect x="520" y="195" width="170" height="55" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="605" y="216" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">⚠️ Urgência / denúncia</text>
            <text x="605" y="233" textAnchor="middle" fill="#92400e" fontSize="10">enough is enough, it is time,</text>
            <text x="605" y="246" textAnchor="middle" fill="#92400e" fontSize="10">no longer acceptable</text>
            <line x1="520" y1="222" x2="430" y2="90" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3" />
          </svg>
          <figcaption>As quatro marcas linguísticas mais comuns em textos ativistas sobre direitos humanos: call to action, imperativo direto, apelo coletivo e urgência/denúncia.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Intenção comunicativa</span>
        <h2>4. Como o ENEM Testa Posicionamento Crítico</h2>
        <p>
          Em textos sobre direitos humanos, o ENEM frequentemente pede que você
          identifique o posicionamento do autor ou a intenção do texto. Aqui estão
          as perguntas mais comuns e como abordá-las:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pergunta típica do ENEM</th>
                <th>O que buscar no texto</th>
                <th>Pistas linguísticas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"O texto tem como objetivo principal…"</td>
                <td>Intenção comunicativa do gênero</td>
                <td>Verbos no imperativo, tom emocional, dados estatísticos</td>
              </tr>
              <tr>
                <td>"O autor do texto defende que…"</td>
                <td>Ponto de vista explícito</td>
                <td><em>I believe, it is clear that, we must, should</em></td>
              </tr>
              <tr>
                <td>"O trecho destacado expressa…"</td>
                <td>Função do trecho (denúncia, apelo, ironia)</td>
                <td>Modalidade, pontuação, escolha lexical</td>
              </tr>
              <tr>
                <td>"O público-alvo do texto é…"</td>
                <td>Para quem o texto se dirige</td>
                <td>Uso de <em>you, we, citizens, women, youth</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade cultural</span>
        <h2>5. Textos sobre Diversidade Cultural no ENEM</h2>
        <p>
          Além dos direitos políticos e civis, o ENEM apresenta textos que celebram ou
          analisam a diversidade cultural — práticas, identidades e expressões de
          diferentes comunidades. Fique atento a esses padrões:
        </p>
        <ul>
          <li><strong>Celebração de identidade</strong> — textos que descrevem e valorizam práticas culturais específicas (festas, culinária, música, línguas minoritárias).</li>
          <li><strong>Preservação cultural</strong> — argumentos sobre a importância de manter tradições ameaçadas de extinção.</li>
          <li><strong>Interculturalidade</strong> — textos sobre encontro e troca entre culturas diferentes.</li>
          <li><strong>Crítica à homogeneização</strong> — textos que criticam a dominação cultural de um país sobre outros (especialmente dos EUA via mídia global).</li>
        </ul>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Ao ler textos sobre diversidade cultural, sempre
          pergunte: o texto está <em>descrevendo</em> uma prática ou <em>defendendo</em>
          sua preservação? Essa distinção entre descrição neutra e valoração positiva
          é frequentemente cobrada nas questões.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>6. Armadilhas nas Questões sobre Direitos Humanos</h2>
        <p>
          O ENEM constrói alternativas erradas de forma muito específica para esse tema.
          Fique atento a esses padrões:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Descrição x valoração</h3>
            <p>O texto descreve uma prática cultural, mas a alternativa afirma que o autor a defende ou critica — sem base no texto.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Generalização indevida</h3>
            <p>O texto fala de uma comunidade específica, a alternativa generaliza para "toda a sociedade" ou "todos os grupos".</p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Público-alvo errado</h3>
            <p>O texto se dirige a um grupo específico (mulheres, jovens, refugiados), mas a alternativa indica público geral.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Sentido invertido</h3>
            <p>A alternativa pega uma ideia do texto e inverte o sentido — transformando crítica em elogio ou vice-versa.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cidadania global</span>
        <h2>7. Cidadania Global e o Conceito de "Global Citizen"</h2>
        <p>
          O conceito de <strong>global citizen</strong> (cidadão global) aparece cada
          vez mais em textos do ENEM em inglês. Ele refere-se à ideia de que, além das
          obrigações com seu país, os indivíduos têm responsabilidades com a humanidade
          como um todo — meio ambiente, pobreza, conflitos, direitos humanos universais.
        </p>
        <ul>
          <li><em>global citizen</em> — cidadão global, comprometido com causas além-fronteiras</li>
          <li><em>cosmopolitan</em> — cosmopolita, que valoriza diversidade e conexões globais</li>
          <li><em>solidarity</em> — solidariedade (entre povos, nações, grupos)</li>
          <li><em>humanitarian</em> — humanitário (organização, ajuda, crise)</li>
          <li><em>sustainable development goals (SDGs)</em> — Objetivos de Desenvolvimento Sustentável da ONU</li>
        </ul>
        <div className="lesson-highlight">
          <strong>Conexão ENEM:</strong> O conceito de cidadania global conecta temas de
          inglês com competências de Ciências Humanas. Textos que mencionam ONU, acordos
          internacionais ou movimentos globais frequentemente pedem identificação de
          intenção comunicativa ou posicionamento do autor.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Vocabulário de direitos humanos"
          statement={
            <p>
              No trecho <em>"Despite significant progress in recent decades, racial
              discrimination remains a persistent challenge in many societies, limiting
              the opportunities and rights of marginalized groups"</em>, o termo{" "}
              <strong>marginalized</strong> refere-se a grupos:
            </p>
          }
          options={[
            { letter: "A", text: "Que habitam regiões geográficas afastadas dos grandes centros urbanos." },
            { letter: "B", text: "Que foram excluídos do acesso a direitos, poder e recursos sociais.", correct: true },
            { letter: "C", text: "Que escolheram voluntariamente se isolar das estruturas sociais dominantes." },
            { letter: "D", text: "Que possuem riqueza superior à média da sociedade em que vivem." },
            { letter: "E", text: "Que fazem parte de grupos majoritários com ampla representação política." },
          ]}
          resolution={
            <p>
              <em>Marginalized</em> significa marginalizado — excluído das margens do poder,
              dos recursos e dos direitos. O contexto reforça: o trecho menciona que a
              discriminação racial <em>limits opportunities and rights</em> (limita
              oportunidades e direitos), o que aponta para exclusão social. A alternativa A
              confunde marginalização social com localização geográfica. As demais contradizem
              o sentido do texto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Linguagem de ativismo"
          statement={
            <p>
              Leia o trecho: <em>"Enough is enough. Women around the world continue to
              face violence, unequal pay and limited access to education. It is time to
              demand the change we deserve. Stand up. Speak out. Act now."</em>
              <br /><br />
              As marcas linguísticas do texto indicam que sua principal função é:
            </p>
          }
          options={[
            { letter: "A", text: "Apresentar dados estatísticos sobre a desigualdade de gênero em diferentes países." },
            { letter: "B", text: "Explicar as causas históricas da discriminação contra a mulher na sociedade ocidental." },
            { letter: "C", text: "Mobilizar leitoras a agir em defesa da igualdade de gênero.", correct: true },
            { letter: "D", text: "Informar sobre políticas públicas de proteção à mulher implementadas por governos." },
            { letter: "E", text: "Apresentar argumentos contrários ao movimento feminista de forma imparcial." },
          ]}
          resolution={
            <p>
              O texto usa marcas típicas do texto ativista: urgência (<em>Enough is enough,
              It is time</em>), imperativo direto (<em>Stand up. Speak out. Act now.</em>)
              e apelo coletivo (<em>we deserve</em>). Esses recursos caracterizam uma
              função de <strong>mobilização</strong> — convencer o leitor a agir. Não há
              dados (exclui A), nem explicação histórica (exclui B), nem informação sobre
              políticas (exclui D). A alternativa E contradiz totalmente o tom do texto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Descrição x valoração"
          statement={
            <p>
              Leia o trecho de uma reportagem: <em>"In Brazil, the Festival of Bumba Meu Boi
              is celebrated annually in the northeastern state of Maranhão. The festival
              combines indigenous, African and Portuguese cultural elements, attracting
              thousands of visitors and playing a central role in the regional identity
              of local communities."</em>
              <br /><br />
              Com base no texto, é correto afirmar que o autor:
            </p>
          }
          options={[
            { letter: "A", text: "Defende que o Festival do Bumba Meu Boi deve ser reconhecido como Patrimônio da Humanidade pela UNESCO." },
            { letter: "B", text: "Critica a influência de elementos africanos e indígenas na cultura do Maranhão." },
            { letter: "C", text: "Descreve o festival de forma informativa, sem expressar julgamento de valor explícito.", correct: true },
            { letter: "D", text: "Argumenta que festivais culturais regionais são mais importantes do que festivais internacionais." },
            { letter: "E", text: "Sugere que o turismo provocado pelo festival prejudica a autenticidade da cultura local." },
          ]}
          resolution={
            <p>
              O texto usa linguagem neutra e descritiva: verbos como <em>is celebrated,
              combines, attracting</em> e <em>playing a role</em> descrevem o festival
              sem emitir julgamento positivo ou negativo. Não há defesa, crítica, argumento
              comparativo nem sugestão de impacto negativo — apenas descrição informativa.
              Esta é uma armadilha clássica do ENEM: o leitor pode projetar uma valoração
              positiva implícita, mas o texto apenas descreve. A alternativa C capta
              precisamente o tom neutro do trecho.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Público-alvo em campanha de direitos"
          statement={
            <div>
              <p><em>(Campanha internacional)</em></p>
              <p style={{ fontStyle: "italic", background: "#faf5ff", padding: "12px", borderRadius: "6px", borderLeft: "4px solid #7c3aed" }}>
                "You have the power to change the world — one vote, one voice, one choice at
                a time. Young people represent the future. Get informed. Get involved.
                <strong> Your generation can end the silence.</strong>"
              </p>
              <p>O público-alvo prioritário desse texto é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Políticos e autoridades governamentais responsáveis por políticas de direitos humanos." },
            { letter: "B", text: "Jornalistas que cobrem temas de cidadania e participação política." },
            { letter: "C", text: "Jovens, incentivados a se engajar politicamente e a exercer sua cidadania.", correct: true },
            { letter: "D", text: "Empresas que apoiam campanhas de conscientização sobre direitos humanos." },
            { letter: "E", text: "Professores responsáveis por educar estudantes sobre participação democrática." },
          ]}
          resolution={
            <p>
              Várias marcas linguísticas indicam que o texto se dirige aos <strong>jovens</strong>:
              a menção direta a <em>Young people</em> e <em>Your generation</em>, o uso de
              <em>you</em> e <em>your</em> (interpelação direta ao leitor jovem), e verbos no
              imperativo (<em>Get informed. Get involved.</em>) que convocam à ação. O tom
              motivacional e a ênfase no poder transformador da juventude reforçam esse
              público-alvo. As demais alternativas não têm base no texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Texto sobre refugiados e intenção comunicativa"
          statement={
            <div>
              <p><em>(Adaptado de artigo internacional)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "By the end of 2022, over 100 million people had been forcibly displaced
                from their homes — the highest number ever recorded. Behind every statistic
                is a human story: a family who lost everything, a child who grew up without
                a school, a doctor who had to flee her country. Numbers tell part of the
                story. People tell the rest."
              </p>
              <p>O autor usa histórias individuais no texto com o objetivo de:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Contestar os dados estatísticos apresentados sobre o número de refugiados." },
            { letter: "B", text: "Humanizar os dados estatísticos e gerar empatia com a situação dos refugiados.", correct: true },
            { letter: "C", text: "Demonstrar que as estatísticas sobre refugiados são imprecisas e subestimadas." },
            { letter: "D", text: "Argumentar que apenas profissionais qualificados, como médicos, deveriam receber status de refugiado." },
            { letter: "E", text: "Provar que o número de refugiados está diminuindo em comparação com décadas anteriores." },
          ]}
          resolution={
            <p>
              O autor apresenta primeiro o dado estatístico (100 milhões de deslocados) e,
              em seguida, afirma que <em>"behind every statistic is a human story"</em>
              (por trás de cada estatística há uma história humana). Os exemplos que seguem
              (família, criança, médica) têm função de <strong>humanizar</strong> o dado
              abstrato e criar conexão emocional com o leitor — estratégia típica de textos
              jornalísticos sobre crises humanitárias. O texto não contesta (exclui A e C),
              não restringe (exclui D) nem afirma declínio (exclui E).
            </p>
          }
        />
      </section>
    </article>
  );
}
