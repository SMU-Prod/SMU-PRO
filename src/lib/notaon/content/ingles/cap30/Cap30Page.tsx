"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 30</span>
          <h1>E-mails, blogs, redes sociais e comunicação digital</h1>
          <p>
            Os gêneros digitais tornaram-se parte essencial das provas de inglês
            do ENEM. Posts, tweets, e-mails, blogs e perfis em redes sociais
            combinam linguagem verbal e não-verbal, registros formais e informais,
            e exigem que o candidato compreenda a <strong>intenção comunicativa</strong>{" "}
            dentro de contextos digitais contemporâneos.
          </p>
          <p>
            Neste capítulo você vai aprender a identificar as características de
            cada gênero digital em inglês, reconhecer os registros de linguagem
            usados online e responder com precisão às questões do ENEM sobre
            comunicação na era digital.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>
        <h2>1. Por que Gêneros Digitais estão no ENEM?</h2>
        <p>
          O ENEM avalia competências comunicativas que refletem a realidade social.
          Como a comunicação contemporânea acontece cada vez mais no ambiente
          digital — redes sociais, e-mails, blogs, aplicativos —, esses gêneros
          passaram a integrar as provas de língua estrangeira.
        </p>
        <p>
          O candidato que conhece as características desses gêneros consegue
          identificar rapidamente o contexto, a intenção comunicativa e o público-alvo
          de qualquer texto digital em inglês, mesmo sem entender cada palavra.
        </p>
        <div className="lesson-highlight">
          <strong>Ponto-chave:</strong> O ENEM não pergunta sobre tecnologia —
          pergunta sobre <em>linguagem</em>. A questão pode envolver um tweet,
          mas o que é avaliado é sempre leitura e interpretação, não conhecimento
          de plataformas digitais.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros digitais</span>
        <h2>2. Principais Gêneros Digitais em Inglês no ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Gênero</th>
                <th>Características linguísticas</th>
                <th>O que o ENEM costuma perguntar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Post em rede social</td>
                <td>Informal, curto, hashtags, emoji, reações</td>
                <td>Objetivo, público, sentido de expressão</td>
              </tr>
              <tr>
                <td>Tweet / publicação curta</td>
                <td>Muito conciso, hashtag, @menção, irônico</td>
                <td>Intenção comunicativa, tema</td>
              </tr>
              <tr>
                <td>E-mail formal</td>
                <td>Estrutura: assunto, saudação, corpo, encerramento</td>
                <td>Objetivo da mensagem, relação entre interlocutores</td>
              </tr>
              <tr>
                <td>E-mail informal</td>
                <td>Tom pessoal, contrações, abreviações</td>
                <td>Relação entre remetente e destinatário</td>
              </tr>
              <tr>
                <td>Post de blog</td>
                <td>Tom pessoal ou especializado, hiperlinks mencionados</td>
                <td>Posição do autor, tema, público-alvo</td>
              </tr>
              <tr>
                <td>Comentário online</td>
                <td>Reação a conteúdo, pode ser positivo, crítico ou irônico</td>
                <td>Atitude do comentarista em relação ao texto-base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">E-mail</span>
        <h2>3. Estrutura do E-mail Formal em Inglês</h2>
        <p>
          O e-mail formal é um dos gêneros mais cobrados no ENEM. Sua estrutura
          é padronizada e reconhecível:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📧</span>
            <h3>Subject line</h3>
            <p>Linha de assunto: resume o conteúdo do e-mail de forma concisa. Ex.: "Application for Marketing Position"</p>
          </div>
          <div className="lesson-card">
            <span>👋</span>
            <h3>Salutation (Saudação)</h3>
            <p>Formal: "Dear Mr./Ms. [Sobrenome]," ou "To whom it may concern," — nunca "Hey" ou "Hi" no formal.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Body (Corpo)</h3>
            <p>Apresentação do objetivo (parágrafo 1), desenvolvimento (parágrafos 2-3), solicitação ou próximo passo.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Closing (Encerramento)</h3>
            <p>Formal: "Yours sincerely," / "Best regards," / "Respectfully,". Seguido do nome completo.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>E-mail formal</th>
                <th>E-mail informal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saudação</td>
                <td>Dear Mr. Smith,</td>
                <td>Hey John! / Hi,</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Profissional, objetivo</td>
                <td>Descontraído, pessoal</td>
              </tr>
              <tr>
                <td>Contrações</td>
                <td>Evitadas (I am, I would)</td>
                <td>Comuns (I'm, I'd, can't)</td>
              </tr>
              <tr>
                <td>Encerramento</td>
                <td>Yours sincerely, / Best regards,</td>
                <td>Take care, / Cheers, / See you!</td>
              </tr>
              <tr>
                <td>Abreviações</td>
                <td>Evitadas</td>
                <td>Comuns (asap, btw, lol)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>4. Espectro de Formalidade na Comunicação Digital</h2>
        <p>
          O registro (formal ou informal) é um dos elementos mais cobrados pelo
          ENEM em textos digitais. O diagrama abaixo mostra como os gêneros
          se distribuem no espectro de formalidade:
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            aria-label="Espectro de formalidade dos gêneros digitais em inglês"
            role="img"
          >
            {/* Linha do espectro */}
            <line x1="60" y1="120" x2="640" y2="120" stroke="#6b7280" strokeWidth="4" />

            {/* Seta esquerda (informal) */}
            <polygon points="40,120 70,108 70,132" fill="#dc2626" />
            <text x="35" y="150" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">INFORMAL</text>

            {/* Seta direita (formal) */}
            <polygon points="660,120 630,108 630,132" fill="#059669" />
            <text x="665" y="150" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">FORMAL</text>

            {/* Pontos no espectro */}
            {/* Meme/emoji */}
            <circle cx="100" cy="120" r="8" fill="#dc2626" />
            <text x="100" y="95" textAnchor="middle" fill="#991b1b" fontSize="10">Meme /</text>
            <text x="100" y="107" textAnchor="middle" fill="#991b1b" fontSize="10">emoji</text>

            {/* Tweet informal */}
            <circle cx="195" cy="120" r="8" fill="#f97316" />
            <text x="195" y="95" textAnchor="middle" fill="#c2410c" fontSize="10">Tweet</text>
            <text x="195" y="107" textAnchor="middle" fill="#c2410c" fontSize="10">casual</text>

            {/* Post rede social */}
            <circle cx="295" cy="120" r="8" fill="#eab308" />
            <text x="295" y="140" textAnchor="middle" fill="#713f12" fontSize="10">Post em</text>
            <text x="295" y="152" textAnchor="middle" fill="#713f12" fontSize="10">rede social</text>

            {/* Blog pessoal */}
            <circle cx="395" cy="120" r="8" fill="#22c55e" />
            <text x="395" y="95" textAnchor="middle" fill="#166534" fontSize="10">Blog</text>
            <text x="395" y="107" textAnchor="middle" fill="#166534" fontSize="10">pessoal</text>

            {/* E-mail informal */}
            <circle cx="475" cy="120" r="8" fill="#0ea5e9" />
            <text x="475" y="140" textAnchor="middle" fill="#075985" fontSize="10">E-mail</text>
            <text x="475" y="152" textAnchor="middle" fill="#075985" fontSize="10">informal</text>

            {/* E-mail formal */}
            <circle cx="570" cy="120" r="8" fill="#059669" />
            <text x="570" y="95" textAnchor="middle" fill="#065f46" fontSize="10">E-mail</text>
            <text x="570" y="107" textAnchor="middle" fill="#065f46" fontSize="10">formal</text>

            {/* Nota */}
            <rect x="220" y="180" width="260" height="50" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="350" y="200" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">O ENEM pergunta:</text>
            <text x="350" y="218" textAnchor="middle" fill="#92400e" fontSize="11">registro e relação entre interlocutores</text>
          </svg>
          <figcaption>Espectro de formalidade dos principais gêneros digitais em inglês cobrados no ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem digital</span>
        <h2>5. Características da Linguagem Digital em Inglês</h2>
        <p>
          A linguagem usada em ambientes digitais tem marcas específicas que
          permitem identificar o gênero e o registro rapidamente:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Exemplos</th>
                <th>O que indica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hashtag</td>
                <td>#ClimateAction #MondayMotivation</td>
                <td>Categorização, engajamento, campanha</td>
              </tr>
              <tr>
                <td>@menção</td>
                <td>@username, @organization</td>
                <td>Endereçamento direto a pessoa ou entidade</td>
              </tr>
              <tr>
                <td>Abreviações</td>
                <td>asap (as soon as possible), btw (by the way), lol, omg</td>
                <td>Registro informal, comunicação rápida</td>
              </tr>
              <tr>
                <td>Emoji</td>
                <td>😊 🔥 👏 💪</td>
                <td>Expressão emocional, substituição de palavras</td>
              </tr>
              <tr>
                <td>Link / URL mencionado</td>
                <td>"Check the link in bio", "Click here"</td>
                <td>Chamada para ação em ambiente digital</td>
              </tr>
              <tr>
                <td>Contrações extremas</td>
                <td>gonna (going to), wanna (want to), gotta (got to)</td>
                <td>Registro muito informal, linguagem falada transcrita</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando um texto tem hashtags, @menções e
          abreviações como "lol" ou "btw", ele é claramente informal — o que
          indica relação próxima entre interlocutores ou comunicação em redes
          sociais. Use isso para identificar o contexto e o público.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário digital</span>
        <h2>6. Vocabulário Digital de Alta Frequência</h2>
        <p>
          Estas palavras e expressões aparecem constantemente em textos digitais
          em inglês. Reconhecê-las facilita a compreensão do contexto:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra / expressão</th>
                <th>Significado / uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>post / share / like / comment</td><td>Ações básicas em redes sociais</td></tr>
              <tr><td>follow / unfollow / block</td><td>Relações de conexão em redes sociais</td></tr>
              <tr><td>trending / viral / going viral</td><td>Conteúdo que se espalha rapidamente</td></tr>
              <tr><td>thread</td><td>Série de posts conectados no mesmo tópico</td></tr>
              <tr><td>update / status update</td><td>Publicação sobre estado atual / novidade</td></tr>
              <tr><td>dm / direct message</td><td>Mensagem privada</td></tr>
              <tr><td>content creator / influencer</td><td>Pessoa que produz conteúdo para redes sociais</td></tr>
              <tr><td>fake news / misinformation</td><td>Notícia falsa / desinformação</td></tr>
              <tr><td>data privacy / digital footprint</td><td>Privacidade de dados / rastro digital</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Multimodalidade</span>
        <h2>7. Textos Multimodais Digitais no ENEM</h2>
        <p>
          Muitos textos digitais são <strong>multimodais</strong>: combinam
          linguagem verbal com imagens, ícones, emojis, layout e cores para
          construir sentido. No ENEM, a questão pode perguntar sobre o efeito
          dessa combinação:
        </p>
        <ul>
          <li>
            <strong>Imagem + legenda:</strong> Um post em rede social com foto
            e texto — o sentido emerge da relação entre os dois.
          </li>
          <li>
            <strong>Emoji como substituto verbal:</strong> Um emoji de coração ❤️
            em lugar de "I love this" — compreender sua função comunicativa é
            essencial.
          </li>
          <li>
            <strong>Hashtag como argumento:</strong> #BlackLivesMatter ou
            #FridaysForFuture carregam posicionamentos políticos e sociais —
            o ENEM pode perguntar sobre o movimento ou causa que representam.
          </li>
          <li>
            <strong>Layout da página:</strong> Em um e-mail, a posição do
            remetente, assunto e saudação revela o nível de formalidade antes
            de ler o conteúdo.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Regra prática:</strong> Em textos digitais multimodais, nunca
          ignore os elementos não-verbais. Um emoji, uma hashtag ou a formatação
          do texto fazem parte do sentido e podem ser o foco da questão do ENEM.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>8. Armadilhas nas Questões de Gêneros Digitais</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Confundir registro</h3>
            <p>Um e-mail com "Dear Sir" é formal; um com "Hey!" é informal. Identificar o registro muda a análise da relação entre os interlocutores.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ignorar hashtags e @menções</h3>
            <p>Esses elementos fazem parte do texto e carregam informação sobre o contexto, a causa ou a pessoa endereçada.</p>
          </div>
          <div className="lesson-card">
            <span>📏</span>
            <h3>Tomar abreviações ao pé da letra</h3>
            <p>"lol" não significa risada literal — é uma marca de informalidade e tom leve. "asap" indica urgência na solicitação.</p>
          </div>
          <div className="lesson-card">
            <span>🌀</span>
            <h3>Confundir blog com notícia</h3>
            <p>Blogs têm tom pessoal e opinativo; notícias são objetivas e factuais. O ENEM pode pedir a distinção.</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificar o gênero digital"
          statement={
            <div>
              <p>
                Um texto em inglês apresenta as seguintes características:
                começa com "Dear Ms. Johnson,", tem parágrafos organizados com
                apresentação, desenvolvimento e encerramento "Yours sincerely,
                Thomas Brown". Esse texto é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Um post informal em rede social endereçado a uma amiga chamada Johnson." },
            { letter: "B", text: "Um comentário em blog escrito por Thomas Brown para Ms. Johnson." },
            { letter: "C", text: "Um e-mail formal com estrutura convencional, indicando relação profissional entre remetente e destinatária.", correct: true },
            { letter: "D", text: "Um tweet de Thomas Brown para Ms. Johnson sobre um assunto profissional." },
            { letter: "E", text: "Um texto de divulgação científica escrito por Thomas Brown e publicado por Ms. Johnson." },
          ]}
          resolution={
            <p>
              As pistas são claras: "Dear Ms. Johnson," (saudação formal com
              título de tratamento), estrutura organizada em parágrafos e
              encerramento "Yours sincerely, Thomas Brown" (fecho formal com
              nome completo). Esses elementos são marcas inequívocas de{" "}
              <strong>e-mail formal</strong>, indicando relação profissional.
              Tweets têm limite de caracteres e não têm essa estrutura; posts
              em redes sociais não usam saudação formal.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Registro e relação entre interlocutores"
          statement={
            <div>
              <p>
                <em>(Situação típica ENEM)</em>
              </p>
              <p>
                Um e-mail começa assim:{" "}
                <em>"Hey Sarah! Hope you're doing well :) Just wanted to check
                if you're still up for Saturday? Let me know asap!"</em>
              </p>
              <p>
                Com base nas características linguísticas do texto, a relação
                entre os interlocutores é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Formal e profissional — o uso de 'Hope you're doing well' indica cordialidade corporativa." },
            { letter: "B", text: "Íntima e informal — o cumprimento 'Hey', as contrações, o emoji e a abreviação 'asap' indicam familiaridade entre as pessoas.", correct: true },
            { letter: "C", text: "Neutra — o e-mail não fornece informações suficientes para identificar o tipo de relação." },
            { letter: "D", text: "Hierárquica — o remetente usa um tom diretivo ao dizer 'Let me know asap'." },
            { letter: "E", text: "Formal e acadêmica — perguntar sobre 'Saturday' sugere um encontro profissional ou de estudos." },
          ]}
          resolution={
            <p>
              Múltiplos indicadores apontam para relação informal e íntima:
              "Hey" (cumprimento informal), contrações ("you're", "you're"),
              emoji (:)), pergunta pessoal sobre um compromisso de fim de semana
              e "asap" (abreviação informal). Todos esses elementos são marcas
              de registro coloquial, indicando que remetente e destinatária se
              conhecem bem. A A erra porque "Hope you're doing well" nesse
              contexto é casual, não corporativo.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Função comunicativa de hashtag"
          statement={
            <div>
              <p>
                <em>(Situação típica ENEM)</em>
              </p>
              <p>
                Um post em rede social traz o texto:{" "}
                <em>"Another oil spill in the Amazon region. When will this
                stop? 🌊 #ProtectTheAmazon #ClimateJustice"</em>
              </p>
              <p>
                A função comunicativa das hashtags nesse post é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Decorativa — as hashtags apenas embelezam o post e não acrescentam significado." },
            { letter: "B", text: "Gramatical — as hashtags substituem verbos e conectivos no texto digital." },
            { letter: "C", text: "Temática e de mobilização — as hashtags categorizam o post em causas mais amplas (proteção ambiental e justiça climática) e ampliam o alcance da mensagem.", correct: true },
            { letter: "D", text: "Informativa — as hashtags explicam o significado do derramamento de óleo mencionado no post." },
            { letter: "E", text: "Exclusivamente comercial — as hashtags indicam que o post é patrocinado por marcas ambientais." },
          ]}
          resolution={
            <p>
              As hashtags têm duas funções simultâneas em redes sociais: de
              <strong> categorização</strong> (conectam o post a outros conteúdos
              sobre o mesmo tema) e de <strong>mobilização</strong> (posicionam
              o autor em um movimento ou causa mais ampla). #ProtectTheAmazon e
              #ClimateJustice não descrevem o fato — eles situam o post dentro
              de reivindicações políticas e ambientais, aumentando o alcance e o
              engajamento. Não são decorativas (A), gramaticais (B), explicativas
              (D) nem indicam patrocínio (E).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Blog vs. notícia"
          statement={
            <div>
              <p>
                <em>(Situação típica ENEM)</em>
              </p>
              <p>
                Um texto em inglês começa assim:{" "}
                <em>"I've been living plastic-free for a year now, and honestly?
                It changed my life. Here's what I learned — and what I wish
                someone had told me before I started."</em>
              </p>
              <p>
                Esse texto se diferencia de uma notícia jornalística porque:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Trata de um tema ambiental, enquanto notícias jornalísticas tratam apenas de política e economia." },
            { letter: "B", text: "Usa o inglês informal, enquanto jornalistas sempre escrevem em inglês formal e técnico." },
            { letter: "C", text: "É escrito na primeira pessoa, com tom pessoal e experiência subjetiva, características de blog — ao contrário de uma notícia, que prioriza objetividade e fatos verificáveis.", correct: true },
            { letter: "D", text: "Não apresenta informações relevantes, enquanto notícias sempre trazem dados concretos." },
            { letter: "E", text: "Tem estrutura de pirâmide invertida, enquanto blogs não têm estrutura definida." },
          ]}
          resolution={
            <p>
              O texto é claramente um <strong>post de blog</strong>: usa primeira
              pessoa ("I've been", "I learned", "I wish"), tom pessoal e
              confessional ("honestly?"), e promete compartilhar experiência
              própria. Uma notícia prioriza a terceira pessoa, objetividade,
              verificação de fatos e estrutura de pirâmide invertida (informação
              mais importante primeiro). A C captura exatamente essa distinção.
              A A é incorreta (notícias cobrem todos os temas). A E inverte
              a característica: a pirâmide invertida é da notícia, não do blog.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Multimodalidade em post digital"
          statement={
            <div>
              <p>
                <em>(Situação típica ENEM)</em>
              </p>
              <p>
                Um post em rede social de uma ONG de educação traz uma foto de
                crianças em sala de aula e o texto:{" "}
                <em>"Education is the most powerful weapon you can use to change
                the world. — Nelson Mandela 📚✊ Help us keep classrooms open.
                Link in bio. #EducationForAll"</em>
              </p>
              <p>
                A combinação de imagem, citação famosa, emojis e hashtag nesse
                post tem como objetivo principal:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Informar sobre a biografia de Nelson Mandela e sua relação com a educação." },
            { letter: "B", text: "Vender materiais escolares para crianças carentes de países em desenvolvimento." },
            { letter: "C", text: "Mobilizar e persuadir o público a apoiar financeiramente a causa da educação, usando apelo emocional, autoridade e pertencimento.", correct: true },
            { letter: "D", text: "Criticar governos que não investem em educação pública, sem solicitar nenhuma ação do leitor." },
            { letter: "E", text: "Documentar o trabalho da ONG para prestação de contas a financiadores institucionais." },
          ]}
          resolution={
            <p>
              O post combina múltiplos recursos persuasivos: foto de crianças
              (apelo emocional), citação de Mandela (ethos/autoridade), emojis
              📚✊ (pertencimento, empoderamento), "Help us" (CTA — chamada para
              ação), "Link in bio" (direcionamento para doação) e
              #EducationForAll (mobilização). Todos esses elementos convergem
              para um único objetivo: <strong>engajar o público e obter
              apoio</strong> (financeiro ou de compartilhamento) para a causa.
              Não é informativo (A), comercial (B), apenas crítico (D) ou
              burocrático (E).
            </p>
          }
        />
      </section>
    </article>
  );
}
