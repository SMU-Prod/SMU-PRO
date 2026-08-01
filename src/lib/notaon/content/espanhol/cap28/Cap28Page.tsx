"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 28</span>
          <h1>Blogs, e-mails, redes sociais e comunicação digital</h1>
          <p>
            A comunicação digital transformou profundamente a linguagem e os gêneros textuais nas últimas décadas.
            No contexto do ENEM, textos produzidos em blogs, e-mails, redes sociais e aplicativos de mensagens
            aparecem com frequência crescente, exigindo do candidato a capacidade de identificar o gênero, o suporte,
            a intenção comunicativa e os recursos linguísticos utilizados. Em espanhol, esses gêneros digitais
            apresentam características específicas — abreviações, emojis, hashtags, code-switching e registros
            que variam do extremamente informal ao altamente formal — que precisam ser reconhecidas e interpretadas
            com precisão para uma leitura proficiente e para o bom desempenho na prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gênero Digital</span>
        <h2>1. O blog como gênero textual</h2>
        <p>
          O <strong>blog</strong> (do inglês <em>weblog</em>) é um gênero textual digital caracterizado por
          publicações periódicas — chamadas <strong>entradas</strong> ou <strong>posts</strong> — organizadas em
          ordem cronológica inversa (a mais recente primeiro). Em espanhol, o blog consolidou-se como espaço de
          expressão pessoal, jornalismo cidadão, divulgação científica e marketing de conteúdo.
        </p>
        <p>
          A <strong>estrutura típica de um blog em espanhol</strong> inclui: título (<em>título</em>),
          data de publicação (<em>fecha de publicación</em>), nome do autor (<em>nombre del autor/a</em>),
          corpo do texto (<em>cuerpo del texto</em>), marcadores temáticos (<em>etiquetas / tags</em>),
          seção de comentários (<em>comentarios</em>) e opções de compartilhamento (<em>compartir</em>).
        </p>

        <blockquote>
          <p>
            <em>
              "Bienvenidos a mi blog de viajes. Hoy les cuento mi experiencia en las calles de Buenos Aires,
              una ciudad que nunca duerme y que te roba el corazón desde el primer momento. 🌆
              ¡Empezamos! #viajes #BuenosAires #Argentina"
            </em>
          </p>
          <footer>— Excerto fictício de blog de viagens em espanhol</footer>
        </blockquote>

        <p>
          A <strong>linguagem do blog</strong> varia conforme o tema e o público-alvo. Blogs pessoais tendem
          ao registro informal, com uso de primeira pessoa (<em>yo, nosotros</em>), marcadores de oralidade
          (<em>bueno, pues, o sea</em>), interjeições e emojis. Já blogs especializados — de tecnologia, medicina
          ou direito — podem adotar registro formal, com terminologia técnica e estrutura argumentativa densa.
        </p>

        <p>
          Hispanoblogs de destaque incluem portais como <strong>Xataka</strong> (tecnologia),
          <strong>El Blog de Marketing</strong>, blogs literários e aqueles mantidos por jornalistas e escritores
          hispano-americanos. A presença de comentários dos leitores (<em>lectores</em>) cria uma dimensão
          dialógica que distingue o blog de outros gêneros impressos.
        </p>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O ENEM frequentemente questiona a distinção entre <em>gênero textual</em>
          (blog, e-mail, tweet) e <em>suporte</em> (o site, o servidor, o dispositivo). O blog é o gênero;
          a plataforma (Blogspot, WordPress) é o suporte.
        </div>

        {/* Figura 1 — Estrutura de um blog */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama da estrutura de um blog em espanhol">
            <rect width="700" height="260" fill="#f8fafc" rx="12" />
            <rect x="30" y="20" width="640" height="40" fill="#dbeafe" rx="6" />
            <text x="350" y="46" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">NOMBRE DEL BLOG — Logo / Menú de navegación</text>
            <rect x="30" y="72" width="440" height="36" fill="#bfdbfe" rx="6" />
            <text x="250" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Título del post</text>
            <rect x="30" y="116" width="440" height="28" fill="#e0e7ff" rx="4" />
            <text x="250" y="135" textAnchor="middle" fontSize="12" fill="#3730a3">Fecha · Autor/a · Categoría</text>
            <rect x="30" y="152" width="440" height="50" fill="#eff6ff" rx="4" />
            <text x="250" y="172" textAnchor="middle" fontSize="12" fill="#374151">Cuerpo del texto</text>
            <text x="250" y="190" textAnchor="middle" fontSize="11" fill="#6b7280">(párrafos, imágenes, videos, enlaces)</text>
            <rect x="30" y="210" width="210" height="28" fill="#dcfce7" rx="4" />
            <text x="135" y="229" textAnchor="middle" fontSize="12" fill="#166534">Etiquetas / Tags</text>
            <rect x="250" y="210" width="220" height="28" fill="#fef9c3" rx="4" />
            <text x="360" y="229" textAnchor="middle" fontSize="12" fill="#854d0e">Comentarios de lectores</text>
            <rect x="490" y="72" width="180" height="166" fill="#fce7f3" rx="6" />
            <text x="580" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Barra lateral</text>
            <text x="580" y="115" textAnchor="middle" fontSize="11" fill="#6b7280">· Búsqueda</text>
            <text x="580" y="132" textAnchor="middle" fontSize="11" fill="#6b7280">· Posts recientes</text>
            <text x="580" y="149" textAnchor="middle" fontSize="11" fill="#6b7280">· Categorías</text>
            <text x="580" y="166" textAnchor="middle" fontSize="11" fill="#6b7280">· Redes sociales</text>
            <text x="580" y="183" textAnchor="middle" fontSize="11" fill="#6b7280">· Suscripción</text>
            <text x="580" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">· Publicidad</text>
          </svg>
          <figcaption>Estrutura típica de um blog em espanhol: cabeçalho, post principal, barra lateral e seção de comentários.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comunicação Formal</span>
        <h2>2. O e-mail formal em espanhol</h2>
        <p>
          O <strong>correo electrónico formal</strong> (e-mail formal) é utilizado em contextos profissionais,
          institucionais e acadêmicos. Sua estrutura se aproxima da carta comercial tradicional, com fórmulas
          de cortesia codificadas que o candidato do ENEM precisa reconhecer e saber interpretar.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parte do e-mail</th>
                <th>Fórmulas em espanhol</th>
                <th>Equivalente em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Saudação inicial</strong></td>
                <td><em>Estimado/a Sr./Sra. López:</em><br /><em>Distinguido/a Director/a:</em><br /><em>A quien corresponda:</em></td>
                <td>Prezado(a) Sr./Sra. López:<br />Ilustríssimo(a) Diretor(a):<br />A quem possa interessar:</td>
              </tr>
              <tr>
                <td><strong>Apresentação do motivo</strong></td>
                <td><em>Me dirijo a usted para...</em><br /><em>El motivo de este correo es...</em><br /><em>Por medio del presente, le comunico...</em></td>
                <td>Dirijo-me ao senhor/à senhora para...<br />O motivo deste e-mail é...<br />Por meio do presente, comunico...</td>
              </tr>
              <tr>
                <td><strong>Corpo principal</strong></td>
                <td>Parágrafos em registro formal, verbos no presente ou futuro, sem abreviações</td>
                <td>Idem ao português formal</td>
              </tr>
              <tr>
                <td><strong>Fecho / Despedida</strong></td>
                <td><em>Atentamente,</em><br /><em>En espera de su respuesta,</em><br /><em>Quedo a su disposición,</em><br /><em>Un cordial saludo,</em></td>
                <td>Atenciosamente,<br />Aguardando sua resposta,<br />Coloco-me à disposição,<br />Cordialmente,</td>
              </tr>
              <tr>
                <td><strong>Assinatura</strong></td>
                <td>Nome completo, cargo, instituição, dados de contato</td>
                <td>Idem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p>
            <em>
              Estimada Directora García:<br />
              Me dirijo a usted para solicitar información sobre el proceso de matrícula para el próximo semestre.
              Agradecería que me indicara los documentos necesarios y los plazos establecidos.<br />
              En espera de su respuesta, quedo a su disposición.<br />
              Atentamente,<br />
              Carlos Mendoza — Estudiante de Ingeniería
            </em>
          </p>
          <footer>— Exemplo de e-mail formal em espanhol</footer>
        </blockquote>

        <p>
          Note que o e-mail formal em espanhol usa <strong>dois pontos (:)</strong> após a saudação — e não
          vírgula como no inglês. Além disso, o pronome de tratamento <strong><em>usted</em></strong>
          (e suas formas verbais em terceira pessoa) é central no registro formal hispânico.
        </p>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Em questões com e-mails formais em espanhol, identifique a intenção
          comunicativa pela fórmula de apresentação (<em>"Me dirijo a usted para..."</em>) e o tom pelo
          pronome de tratamento (<em>usted</em> = formal; <em>tú</em> = informal).
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comunicação Informal</span>
        <h2>3. O e-mail informal em espanhol</h2>
        <p>
          O <strong>correo electrónico informal</strong> é utilizado entre amigos, colegas próximos e
          familiares. Contrasta com o e-mail formal pela ausência de fórmulas codificadas, pelo uso do
          tuteo (<em>tú</em>), pela presença de gírias, abreviações e, cada vez mais, por emojis.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>E-mail Formal</th>
                <th>E-mail Informal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Saudação</strong></td>
                <td><em>Estimado/a..., Distinguido/a...</em></td>
                <td><em>Hola, ¿Qué tal?, ¡Buenas!, ¿Cómo estás?</em></td>
              </tr>
              <tr>
                <td><strong>Pronome de tratamento</strong></td>
                <td><em>usted</em> (3ª pessoa)</td>
                <td><em>tú / vos</em> (2ª pessoa)</td>
              </tr>
              <tr>
                <td><strong>Vocabulário</strong></td>
                <td>Formal, técnico, sem gírias</td>
                <td>Coloquial, gírias, abreviações</td>
              </tr>
              <tr>
                <td><strong>Emojis</strong></td>
                <td>Ausentes</td>
                <td>Frequentes 😊 😂 🙏</td>
              </tr>
              <tr>
                <td><strong>Despedida</strong></td>
                <td><em>Atentamente, Un cordial saludo</em></td>
                <td><em>Un abrazo, Hasta pronto, Besos, Chau</em></td>
              </tr>
              <tr>
                <td><strong>Assunto</strong></td>
                <td>Claro e específico</td>
                <td>Curto ou ausente (<em>¡Mira esto!</em>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p>
            <em>
              ¡Hola, Ana! ¿Cómo estás? 😊<br />
              Te escribo rápido xq mañana no puedo y quería contarte lo q pasó ayer en la fiesta de Marcos...
              ¡Fue increíble! Ya te cuento todo en persona. Un besito, Laura 💕
            </em>
          </p>
          <footer>— Exemplo de e-mail informal em espanhol com abreviações digitais</footer>
        </blockquote>

        <p>
          Observem no exemplo acima: <strong><em>xq</em></strong> (porque/por que),
          <strong><em>q</em></strong> (que), <strong><em>mañana</em></strong> escrito por extenso mas
          frequentemente abreviado como <em>mñn</em>. Essas abreviações, herdadas do SMS e depois das
          redes sociais, infiltraram-se no e-mail informal.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Redes Sociais</span>
        <h2>4. Linguagem das redes sociais em espanhol</h2>
        <p>
          As <strong>redes sociais</strong> (<em>redes sociales</em>) criaram novos subgêneros textuais com
          características linguísticas próprias. No universo hispânico, plataformas como Twitter/X, Instagram
          e TikTok são amplamente utilizadas e aparecem em provas do ENEM como suporte de textos em espanhol.
        </p>

        <p>
          O <strong>Twitter/X</strong> impõe um limite de caracteres que historicamente moldou a linguagem
          das publicações: uso de hashtags (<strong>#</strong>) para categorização temática, arroba (<strong>@</strong>)
          para mencionar usuários, retweet (<em>RT</em>) para compartilhar, e linguagem hipercondensada.
          O <strong>Instagram</strong> combina imagem e texto, com legendas (<em>pies de foto</em>) que
          vão do poético ao publicitário. O <strong>TikTok</strong>, com vídeos curtos, incorpora
          linguagem audiovisual e tendências (<em>tendencias</em>) virais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Abreviação / Recurso</th>
                <th>Significado em espanhol</th>
                <th>Equivalente em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>tb / tmb</strong></td>
                <td><em>también</em></td>
                <td>também</td>
              </tr>
              <tr>
                <td><strong>xq / pq</strong></td>
                <td><em>porque / por qué</em></td>
                <td>porque / por quê</td>
              </tr>
              <tr>
                <td><strong>tqm</strong></td>
                <td><em>te quiero mucho</em></td>
                <td>te amo muito / adoro você</td>
              </tr>
              <tr>
                <td><strong>mñn</strong></td>
                <td><em>mañana</em></td>
                <td>amanhã</td>
              </tr>
              <tr>
                <td><strong>q / k</strong></td>
                <td><em>que</em></td>
                <td>que</td>
              </tr>
              <tr>
                <td><strong>d</strong></td>
                <td><em>de</em></td>
                <td>de</td>
              </tr>
              <tr>
                <td><strong>bss / besos</strong></td>
                <td><em>besos</em></td>
                <td>beijos</td>
              </tr>
              <tr>
                <td><strong>jaja / jeje</strong></td>
                <td>Risada (equivalente ao "haha" / "rs")</td>
                <td>haha / rs / kkk</td>
              </tr>
              <tr>
                <td><strong>xfa / x favor</strong></td>
                <td><em>por favor</em></td>
                <td>por favor</td>
              </tr>
              <tr>
                <td><strong>ntp</strong></td>
                <td><em>no te preocupes</em></td>
                <td>não se preocupe</td>
              </tr>
              <tr>
                <td><strong># (hashtag)</strong></td>
                <td>Marcador temático (<em>etiqueta</em>)</td>
                <td>hashtag / marcador</td>
              </tr>
              <tr>
                <td><strong>@ (arroba)</strong></td>
                <td>Menção de usuário</td>
                <td>arroba / menção</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p>
            <em>
              "¡Chicas, mñn hay descuento del 50% en @TiendaRopaOficial! 😱 xfa compartan xq tqm y quiero
              q todas aprovechen 💕 #moda #descuentos #chicas"
            </em>
          </p>
          <footer>— Excerto fictício de post no Instagram em espanhol</footer>
        </blockquote>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O ENEM pode apresentar posts de redes sociais em espanhol e pedir
          que o candidato identifique o <em>propósito comunicativo</em> (informar, convencer, entreter,
          pedir), o <em>público-alvo</em> ou os <em>recursos linguísticos</em> utilizados (abreviações,
          emojis, hashtags, informalidade).
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Recursos Expressivos</span>
        <h2>5. Emojis e linguagem digital multimodal</h2>
        <p>
          Os <strong>emojis</strong> são pictogramas digitais que funcionam como recursos comunicativos
          multimodais, combinando função expressiva, fática e até argumentativa nos textos digitais.
          Em espanhol, assim como em outras línguas, os emojis integram a linguagem das redes sociais,
          aplicativos de mensagens e, em alguns contextos, e-mails informais.
        </p>

        <p>
          Do ponto de vista linguístico, os emojis podem:
        </p>
        <ul>
          <li><strong>Substituir palavras</strong>: <em>"Voy a la 🏖️ con mi 👨‍👩‍👧"</em> (Vou à praia com minha família)</li>
          <li><strong>Complementar o texto</strong>: <em>"Fue una experiencia increíble 😍"</em> (reforçam emoções)</li>
          <li><strong>Criar ironia</strong>: <em>"Sí, claro, fue muy divertido 🙄"</em> (o emoji contradiz o texto verbal)</li>
          <li><strong>Marcar tom</strong>: suavizam pedidos (<em>"¿Puedes ayudarme? 🙏"</em>) ou intensificam humor</li>
        </ul>

        <p>
          Outro fenômeno relevante é o <strong>code-switching hispano-inglês</strong> — a alternância de
          códigos entre espanhol e inglês dentro do mesmo texto. Muito presente em comunidades hispânicas
          dos EUA (espanglish), esse fenômeno também aparece em textos digitais de jovens hispano-americanos:
        </p>

        <blockquote>
          <p>
            <em>
              "Literally no puedo más con esta semana 😩 viernes please llega ya... #TGIF #viernes"
            </em>
          </p>
          <footer>— Excerto fictício de tweet com code-switching espanhol-inglês</footer>
        </blockquote>

        <p>
          O <em>code-switching</em> não é erro — é estratégia identitária e comunicativa que marca
          pertencimento a comunidades bilíngues. No ENEM, identificar esse recurso e sua função é
          fundamental para a interpretação correta do texto.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>6. Gênero textual versus suporte: distinção essencial</h2>
        <p>
          Uma das distinções mais cobradas no ENEM em relação aos textos digitais é a diferença entre
          <strong>gênero textual</strong> e <strong>suporte</strong>.
        </p>

        <p>
          O <strong>gênero textual</strong> é a forma sociocomunicativa estável que um texto assume:
          blog, e-mail, tweet, comentário, notícia, anúncio publicitário, resenha. O gênero é definido
          pela sua função social, estrutura composicional e estilo. O <strong>suporte</strong> é o meio
          físico ou digital onde o gênero circula: o jornal impresso, o site de notícias, a rede social,
          o aplicativo de mensagens, o servidor de e-mail.
        </p>

        <p>
          Um mesmo gênero pode circular em diferentes suportes: uma <em>notícia</em> pode aparecer
          no jornal impresso, no site, no aplicativo e ser compartilhada no Twitter. Um mesmo suporte
          pode abrigar múltiplos gêneros: o Instagram abriga fotos pessoais, anúncios publicitários,
          notícias, resenhas de livros e videoaulas.
        </p>

        {/* Figura 2 — Mapa de gêneros digitais */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa de gêneros textuais digitais e seus suportes em espanhol">
            <rect width="700" height="280" fill="#f8fafc" rx="12" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Gêneros Digitais × Suportes</text>
            <rect x="30" y="45" width="140" height="36" fill="#dbeafe" rx="8" />
            <text x="100" y="68" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Blog</text>
            <rect x="190" y="45" width="140" height="36" fill="#dcfce7" rx="8" />
            <text x="260" y="68" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Twitter / X</text>
            <rect x="350" y="45" width="140" height="36" fill="#fef9c3" rx="8" />
            <text x="420" y="68" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854d0e">Instagram</text>
            <rect x="510" y="45" width="160" height="36" fill="#fce7f3" rx="8" />
            <text x="590" y="68" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">E-mail / WhatsApp</text>
            <line x1="100" y1="81" x2="100" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="260" y1="81" x2="260" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="420" y1="81" x2="420" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="590" y1="81" x2="590" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="30" y="105" width="140" height="50" fill="#eff6ff" rx="6" />
            <text x="100" y="126" textAnchor="middle" fontSize="11" fill="#374151">entrada de blog</text>
            <text x="100" y="143" textAnchor="middle" fontSize="11" fill="#374151">resenha, crónica</text>
            <rect x="190" y="105" width="140" height="50" fill="#f0fdf4" rx="6" />
            <text x="260" y="126" textAnchor="middle" fontSize="11" fill="#374151">tweet / tuit</text>
            <text x="260" y="143" textAnchor="middle" fontSize="11" fill="#374151">thread / hilo</text>
            <rect x="350" y="105" width="140" height="50" fill="#fefce8" rx="6" />
            <text x="420" y="126" textAnchor="middle" fontSize="11" fill="#374151">pie de foto</text>
            <text x="420" y="143" textAnchor="middle" fontSize="11" fill="#374151">story / reels</text>
            <rect x="510" y="105" width="160" height="50" fill="#fdf4ff" rx="6" />
            <text x="590" y="126" textAnchor="middle" fontSize="11" fill="#374151">correo formal/informal</text>
            <text x="590" y="143" textAnchor="middle" fontSize="11" fill="#374151">mensaje, nota</text>
            <line x1="30" y1="190" x2="670" y2="190" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6,3" />
            <text x="350" y="212" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">Suporte ≠ Gênero: um blog (suporte) abriga entrada, resenha, crônica (gêneros)</text>
            <text x="350" y="234" textAnchor="middle" fontSize="11" fill="#64748b">O gênero é definido pela função social + estrutura + estilo</text>
            <text x="350" y="256" textAnchor="middle" fontSize="11" fill="#64748b">O suporte é o meio de circulação (plataforma, dispositivo, site)</text>
          </svg>
          <figcaption>Mapa de gêneros textuais digitais em espanhol e seus respectivos suportes — distinção cobrada no ENEM.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Quando a questão perguntar "em que suporte circula o texto?" ou
          "a qual gênero pertence o texto?", lembre-se: o suporte é a plataforma/meio (blog, rede social,
          aplicativo) e o gênero é a forma textual (entrada de blog, tweet, e-mail, comentário, anúncio).
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Abordagem no ENEM</span>
        <h2>7. Como o ENEM aborda textos digitais em espanhol</h2>
        <p>
          O ENEM, ao incluir textos digitais em espanhol nas questões de Linguagens, Códigos e suas
          Tecnologias, testa competências específicas que vão além da simples tradução vocabular. O
          candidato precisa mobilizar habilidades de <strong>leitura multimodal</strong>, interpretação
          de <strong>contexto e intenção comunicativa</strong>, e reconhecimento dos
          <strong>interlocutores</strong> envolvidos.
        </p>

        <p>As questões do ENEM com textos digitais em espanhol costumam pedir:</p>
        <ul>
          <li>Identificação do <strong>gênero textual</strong> e do <strong>suporte</strong></li>
          <li>Reconhecimento da <strong>intenção comunicativa</strong> (informar, persuadir, entreter, emocionar, solicitar)</li>
          <li>Identificação dos <strong>interlocutores</strong> (emissor e receptor) e da relação entre eles</li>
          <li>Análise dos <strong>recursos linguísticos</strong> (abreviações, hashtags, emojis, registro formal/informal)</li>
          <li>Interpretação de <strong>ironia</strong>, <strong>humor</strong> ou <strong>crítica social</strong> em posts</li>
          <li>Compreensão do <strong>sentido global</strong> do texto mesmo sem conhecer todas as palavras</li>
          <li>Relação entre <strong>texto verbal e não-verbal</strong> (imagem + legenda no Instagram, por exemplo)</li>
        </ul>

        <p>
          Um princípio fundamental para o ENEM: textos digitais em espanhol raramente exigem tradução
          palavra por palavra. O que se avalia é a capacidade de <strong>inferência contextual</strong>
          — usar o contexto, os cognatos, a estrutura do gênero e os elementos não-verbais para
          construir o sentido.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Leitura</span>
        <h2>8. Estratégias para textos digitais multimodais</h2>
        <p>
          Textos digitais multimodais combinam linguagem verbal e não-verbal (imagens, emojis, ícones,
          gráficos, vídeos). Ler esses textos com proficiência requer estratégias específicas:
        </p>

        <p>
          <strong>1. Identifique o gênero antes de ler o conteúdo.</strong> Reconhecer que se trata
          de um tweet, um e-mail formal ou uma entrada de blog já fornece informações sobre o registro
          esperado, os interlocutores e a intenção comunicativa.
        </p>

        <p>
          <strong>2. Observe os elementos não-verbais.</strong> Emojis, hashtags, imagens e formatação
          são parte integrante do texto. Um emoji irônico pode inverter completamente o sentido literal
          das palavras.
        </p>

        <p>
          <strong>3. Use os cognatos a seu favor.</strong> O espanhol e o português são línguas irmãs.
          Palavras como <em>comunicación, digital, información, redes sociales, usuario, plataforma</em>
          são imediatamente compreensíveis para falantes de português.
        </p>

        <p>
          <strong>4. Atenção aos falsos cognatos.</strong> Nem tudo que parece familiar é transparente:
          <em>embarazada</em> (grávida, não embaraçada), <em>borracha</em> (bêbada, não borracha),
          <em>polvo</em> (poeira, não polvo). Em contextos digitais, erros de interpretação por falsos
          cognatos podem levar a respostas equivocadas.
        </p>

        <p>
          <strong>5. Leia as hashtags como pistas temáticas.</strong> As hashtags organizam o conteúdo
          e revelam o tema central do post mesmo quando o texto verbal é obscuro ou muito abreviado.
          <em>"#climatico #medioambiente #sostenibilidad"</em> indica imediatamente que o texto trata
          de questões ambientais.
        </p>

        <p>
          <strong>6. Considere o público-alvo e o contexto de produção.</strong> Um post voltado a
          adolescentes usa linguagem e referências culturais diferentes de um post empresarial.
          A plataforma (Instagram vs. LinkedIn vs. Twitter) também condiciona a linguagem.
        </p>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Nas questões de espanhol, priorize sempre a compreensão do
          sentido global antes de tentar traduzir palavra por palavra. A maioria das questões testa
          interpretação — não tradução literal.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exemplos do ENEM</span>
        <h2>9. Modelos de questões com textos digitais em espanhol</h2>
        <p>
          O ENEM já apresentou questões com tweets, posts de redes sociais, e-mails e comentários de
          blog em espanhol. Abaixo, analisamos dois modelos típicos para treinar o olhar crítico do candidato.
        </p>

        <p><strong>Modelo A — Tweet de ativismo ambiental:</strong></p>
        <blockquote>
          <p>
            <em>
              "El planeta no necesita más palabras. Necesita acción. 🌍 Hoy marcho xq el futuro
              no puede esperar. ¿Y tú? #CambioClimatico #JuventudPorElClima @FridaysForFuture"
            </em>
          </p>
        </blockquote>
        <p>
          Nesse tweet, o candidato deve ser capaz de identificar: (1) o <strong>gênero</strong> (tweet/tuit);
          (2) a <strong>intenção</strong> (convocação, ativismo, engajamento); (3) os <strong>recursos</strong>
          (emoji de globo terrestre como reforço visual, hashtags temáticas, pergunta retórica <em>"¿Y tú?"</em>
          para incluir o leitor); (4) a abreviação <em>xq</em> = <em>porque</em>.
        </p>

        <p><strong>Modelo B — Comentário em blog de culinária:</strong></p>
        <blockquote>
          <p>
            <em>
              "¡Hola! Hice la receta tal como la explicaste y quedó espectacular. Mi familia no podía
              creerlo. ¡Gracias por compartir! Solo una pregunta: ¿se puede sustituir la harina de trigo
              por harina de avena? Saludos desde México 🇲🇽"
            </em>
          </p>
        </blockquote>
        <p>
          Nesse comentário: (1) <strong>gênero</strong> = comentário de blog; (2) <strong>intenção</strong>
          = elogiar e solicitar informação; (3) <strong>recursos</strong> = vocativo informal (<em>¡Hola!</em>),
          registro coloquial, emoji de bandeira como marca de identidade regional; (4) o léxico culinário
          (<em>receta, harina, trigo, avena</em>) é contextualizado pelo suporte (blog de culinária).
        </p>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pratique</span>
        <h2>10. Exercícios</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de gênero digital"
          statement={
            <p>
              Leia o excerto: <em>"Estimada Sra. Ramírez: Me dirijo a usted para solicitar una reunión
              a fin de discutir los resultados del proyecto. Quedo a su disposición. Atentamente, Pedro Vega."</em>
              <br /><br />
              Esse texto pertence ao gênero:
            </p>
          }
          options={[
            { letter: "a", text: "Tweet com hashtags temáticas." },
            { letter: "b", text: "Comentário informal de blog." },
            { letter: "c", text: "E-mail formal em espanhol.", correct: true },
            { letter: "d", text: "Entrada de blog pessoal." },
            { letter: "e", text: "Mensagem de WhatsApp entre amigos." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong> O texto apresenta todos os marcadores do e-mail formal em
              espanhol: saudação com <em>Estimada Sra.</em>, uso do pronome de tratamento <em>usted</em>,
              fórmula de abertura <em>"Me dirijo a usted para..."</em>, expressão de disponibilidade
              <em>"Quedo a su disposición"</em> e fecho <em>Atentamente</em>. Esses elementos são
              exclusivos do registro formal escrito.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Análise de recursos linguísticos digitais"
          statement={
            <p>
              Leia o post: <em>"¡No puedo creer q mñn ya es viernes! 🙌 Tb voy a la fiesta d Lucas,
              xfa alguien q me lleve 🚗 tqm a todos #viernes #fiesta #amistad"</em>
              <br /><br />
              Sobre os recursos linguísticos presentes nesse post, é CORRETO afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "O texto utiliza linguagem formal com fórmulas de cortesia." },
            { letter: "b", text: "As hashtags indicam o suporte onde o texto circula, não seu tema." },
            { letter: "c", text: "As abreviações 'xfa', 'tqm' e 'xq' são características do registro digital informal e facilitam a comunicação rápida.", correct: true },
            { letter: "d", text: "Os emojis são apenas decorativos e não acrescentam sentido ao texto." },
            { letter: "e", text: "O texto apresenta code-switching espanhol-inglês em sua estrutura." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong> As abreviações <em>xfa</em> (por favor), <em>tqm</em>
              (te quiero mucho) e <em>xq</em> (porque) são recursos típicos da linguagem digital informal
              em espanhol, originados no SMS e consolidados nas redes sociais. Elas comprimem palavras
              para agilizar a comunicação e são amplamente reconhecidas pelos usuários jovens. As hashtags
              (alternativa b) categorizam o tema — não indicam o suporte. Os emojis (alternativa d)
              exercem função expressiva e fática, não são meramente decorativos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Distinção entre gênero e suporte"
          statement={
            <p>
              Considere as afirmações sobre gêneros textuais digitais em espanhol:
              <br /><br />
              I. O blog é um suporte que pode abrigar gêneros como entrada de blog, resenha e crônica.
              <br />
              II. O e-mail é simultaneamente um gênero textual e o suporte onde ele circula.
              <br />
              III. Um mesmo gênero — como a notícia — pode circular em suportes diferentes (jornal
              impresso, site, aplicativo, rede social).
              <br /><br />
              Estão CORRETAS:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas III." },
            { letter: "c", text: "I e II." },
            { letter: "d", text: "I e III.", correct: true },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              Resposta: <strong>d)</strong> A afirmação I está correta: o blog é um suporte digital que
              pode abrigar múltiplos gêneros. A afirmação II está incorreta: o e-mail é um gênero textual
              (forma socialmente reconhecível com função, estrutura e estilo próprios); o suporte é o
              servidor de e-mail ou o aplicativo (Gmail, Outlook). Suporte e gênero são categorias
              distintas — confundi-los é um erro clássico. A afirmação III está correta: a notícia como
              gênero existe independentemente do suporte em que circula.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Interpretação de post em rede social"
          statement={
            <p>
              Leia o post publicado no Twitter/X:
              <br /><br />
              <em>
                "Llevamos 3 años pidiendo lo mismo y los políticos siguen sin escucharnos. 😤
                Pero nuestras voces no se van a callar. #Educación #FuturoNuestro @MinEducacion"
              </em>
              <br /><br />
              O recurso linguístico e comunicativo que melhor caracteriza esse post é:
            </p>
          }
          options={[
            { letter: "a", text: "Linguagem técnica e objetiva, típica de relatório institucional." },
            { letter: "b", text: "Registro formal com fórmulas de cortesia direcionadas a autoridades." },
            { letter: "c", text: "Ironia e humor como estratégias de entretenimento para os seguidores." },
            { letter: "d", text: "Linguagem de protesto com uso de hashtags, menção institucional e emoji expressivo para mobilização social.", correct: true },
            { letter: "e", text: "Code-switching espanhol-inglês para alcançar público internacional." },
          ]}
          resolution={
            <p>
              Resposta: <strong>d)</strong> O post apresenta linguagem de engajamento político e social:
              o verbo <em>"no se van a callar"</em> (não vão se calar) expressa resistência coletiva;
              as hashtags <em>#Educación #FuturoNuestro</em> categorizam a pauta e ampliam o alcance;
              a menção <em>@MinEducacion</em> direciona a mensagem ao órgão responsável, criando pressão
              pública; o emoji <em>😤</em> reforça o tom de indignação. Não há linguagem técnica (a),
              fórmulas formais (b), humor (c) nem code-switching (e).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Leitura de e-mail e intenção comunicativa"
          statement={
            <p>
              Leia o e-mail abaixo:
              <br /><br />
              <em>
                "Asunto: Consulta sobre beca de posgrado
                <br />
                Estimado Dr. Fuentes:
                <br />
                Me dirijo a usted para solicitar información sobre las becas disponibles para estudios
                de posgrado en su institución. Soy estudiante de último año de Ciencias Sociales y
                me interesa especialmente el programa de Políticas Públicas.
                <br />
                Agradecería que me indicara los requisitos, plazos y documentación necesaria.
                <br />
                En espera de su respuesta, quedo a su disposición.
                <br />
                Atentamente,
                María González"
              </em>
              <br /><br />
              Com base na leitura do e-mail, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "O e-mail é informal, pois foi enviado por uma estudante a um professor." },
            { letter: "b", text: "A expressão 'Me dirijo a usted' indica intimidade entre os interlocutores." },
            { letter: "c", text: "A intenção comunicativa é solicitar informações sobre bolsas de pós-graduação, usando registro formal adequado ao contexto institucional.", correct: true },
            { letter: "d", text: "O uso de 'usted' indica que a emissora e o receptor se conhecem há muito tempo." },
            { letter: "e", text: "As fórmulas 'En espera de su respuesta' e 'Atentamente' são típicas do e-mail informal entre jovens." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong> O e-mail apresenta todos os marcadores do registro formal:
              saudação <em>Estimado Dr. Fuentes</em>, fórmula de abertura <em>Me dirijo a usted para</em>,
              uso consistente do pronome <em>usted</em> (que indica distância formal, não intimidade —
              alternativa b incorreta), pedido de informação claro e detalhado, e fecho com
              <em>En espera de su respuesta / Atentamente</em> (que são marcas do e-mail FORMAL —
              alternativa e incorreta). A alternativa a está errada porque o grau de relacionamento
              (estudante-professor) não determina automaticamente a informalidade — o contexto
              institucional exige o registro formal.
            </p>
          }
        />
      </section>

    </article>
  );
}
