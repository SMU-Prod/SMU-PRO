"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 30</span>
          <h1>Tecnologia, internet e inteligência artificial</h1>
          <p>
            A revolução digital e o avanço da inteligência artificial são temas que dominam a mídia hispânica
            contemporânea e aparecem com frequência crescente nas provas de Espanhol do ENEM. Textos de jornais
            como <em>El País Tecnología</em>, <em>Xataka</em> (Espanha) e <em>Tecnología para Todos</em>
            (América Latina) exploram desde os anglicismos incorporados ao espanhol até debates éticos sobre
            privacidade, desinformação e automação do trabalho. Dominar o vocabulário tecnológico em espanhol,
            identificar os anglicismos adaptados e compreender o posicionamento dos autores em textos de opinião
            sobre tecnologia são competências essenciais para garantir pontos nessa disciplina no ENEM.
          </p>
        </div>
      </section>

      {/* Seção 1: Vocabulário Tecnológico */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>Vocabulário Tecnológico Essencial em Espanhol</h2>
        <p>
          O espanhol absorveu um grande número de termos tecnológicos, seja traduzindo-os, seja
          adaptando-os do inglês. Conhecer as duas formas — a tradução oficial e o anglicismo em uso — é
          fundamental para compreender textos autênticos em espanhol.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espanhol (termo oficial)</th>
                <th>Anglicismo em uso</th>
                <th>Português</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>inteligencia artificial</td><td>IA / AI</td><td>inteligência artificial</td></tr>
              <tr><td>algoritmo</td><td>algoritmo</td><td>algoritmo</td></tr>
              <tr><td>red social</td><td>red social</td><td>rede social</td></tr>
              <tr><td>nube / computación en la nube</td><td>cloud</td><td>nuvem / computação em nuvem</td></tr>
              <tr><td>datos</td><td>data</td><td>dados</td></tr>
              <tr><td>privacidad de datos</td><td>privacidad</td><td>privacidade de dados</td></tr>
              <tr><td>ciberseguridad</td><td>cibersecurity</td><td>cibersegurança</td></tr>
              <tr><td>dispositivo</td><td>device</td><td>dispositivo</td></tr>
              <tr><td>aplicación / app</td><td>app</td><td>aplicativo</td></tr>
              <tr><td>programación</td><td>coding</td><td>programação</td></tr>
              <tr><td>robótica</td><td>robótica</td><td>robótica</td></tr>
              <tr><td>automatización</td><td>automation</td><td>automação</td></tr>
              <tr><td>brecha digital</td><td>digital divide</td><td>exclusão digital</td></tr>
              <tr><td>redes neuronales</td><td>neural networks</td><td>redes neurais</td></tr>
              <tr><td>ultrafalsificación / deepfake</td><td>deepfake</td><td>deepfake</td></tr>
              <tr><td>desinformación</td><td>fake news / misinformation</td><td>desinformação</td></tr>
              <tr><td>computación cuántica</td><td>quantum computing</td><td>computação quântica</td></tr>
              <tr><td>internet de las cosas</td><td>IoT</td><td>internet das coisas</td></tr>
              <tr><td>realidad aumentada</td><td>AR / augmented reality</td><td>realidade aumentada</td></tr>
              <tr><td>metaverso</td><td>metaverse</td><td>metaverso</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2: Anglicismos Tecnológicos */}
      <section className="lesson-section">
        <span className="section-kicker">Língua</span>
        <h2>Anglicismos Tecnológicos Integrados ao Espanhol</h2>
        <p>
          Um dos fenômenos linguísticos mais relevantes do espanhol contemporâneo é a integração de termos
          do inglês ligados à tecnologia. O ENEM pode explorar textos que debem esse fenômeno ou que simplesmente
          usam esses termos sem tradução. É fundamental reconhecê-los.
        </p>
        <div className="lesson-highlight">
          <strong>Como os anglicismos funcionam em espanhol:</strong>
          <ul>
            <li><strong>Verbos criados:</strong> <em>tuitear</em> (tuitar), <em>postear</em> (postar), <em>hackear</em> (hackear), <em>chatear</em> (conversar por chat), <em>googlear</em> (pesquisar no Google).</li>
            <li><strong>Substantivos adaptados:</strong> <em>el selfie</em>, <em>el streaming</em>, <em>el influencer</em>, <em>el ciberbullying</em>, <em>el hacker</em>, <em>el youtuber</em>, <em>el podcast</em>.</li>
            <li><strong>Uso com gênero espanhol:</strong> <em>un tuit / los tuits</em> (não "tweets"); <em>un email</em>, <em>el wifi</em>.</li>
            <li><strong>Expressões mistas:</strong> <em>hacer un live</em>, <em>subir stories</em>, <em>dar like</em>, <em>ir al trending</em>.</li>
          </ul>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐦</span>
            <h3>Tuitear / Postear</h3>
            <p>
              <em>Los políticos tuitearon sus reacciones minutos después del anuncio.</em>
              Verbos criados a partir de nomes de plataformas digitais.
            </p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>El influencer</h3>
            <p>
              <em>Los influencers tienen más impacto en los jóvenes que los medios tradicionales.</em>
              Substantivo direto do inglês, sem tradução oficial aceita.
            </p>
          </div>
          <div className="lesson-card">
            <span>😈</span>
            <h3>Ciberbullying</h3>
            <p>
              <em>El ciberbullying afecta a uno de cada cuatro adolescentes en América Latina.</em>
              Composto do prefixo <em>ciber-</em> + termo inglês, muito usado em textos jornalísticos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎥</span>
            <h3>El streaming</h3>
            <p>
              <em>El streaming superó a la televisión tradicional en audiencia por primera vez en 2022.</em>
              Usado sem tradução mesmo em textos formais e jornalísticos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: SVG Ecossistema Digital */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Sistêmica</span>
        <h2>O Ecossistema Digital e seus Riscos — Diagrama</h2>
        <p>
          Os textos sobre tecnologia no ENEM frequentemente abordam não apenas a inovação, mas também os
          riscos sociais ligados ao ambiente digital. Compreender essa estrutura ajuda a responder questões
          sobre a intenção comunicativa dos autores.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 270" width="700" height="270" aria-label="Diagrama do ecossistema digital e riscos sociais">
            <rect x="0" y="0" width="700" height="270" rx="14" fill="#eff6ff" />
            <defs>
              <marker id="cap30arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            <text x="350" y="28" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="bold">
              Ecosistema Digital: Oportunidades y Riesgos
            </text>
            {/* Centro */}
            <ellipse cx="350" cy="140" rx="65" ry="45" fill="#2563eb" />
            <text x="350" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Revolución</text>
            <text x="350" y="152" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Digital</text>

            {/* Oportunidades — esquerda */}
            <rect x="20" y="50" width="145" height="42" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1" />
            <text x="92" y="68" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Acceso al conocimiento</text>
            <text x="92" y="83" textAnchor="middle" fill="#1e3a8a" fontSize="10">educación en línea</text>
            <line x1="165" y1="71" x2="285" y2="120" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#cap30arr1)" />

            <rect x="20" y="120" width="145" height="42" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1" />
            <text x="92" y="138" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Economía digital</text>
            <text x="92" y="153" textAnchor="middle" fill="#1e3a8a" fontSize="10">comercio electrónico</text>
            <line x1="165" y1="141" x2="285" y2="141" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#cap30arr1)" />

            <rect x="20" y="190" width="145" height="42" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1" />
            <text x="92" y="208" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Participación ciudadana</text>
            <text x="92" y="223" textAnchor="middle" fill="#1e3a8a" fontSize="10">democracia digital</text>
            <line x1="165" y1="211" x2="285" y2="162" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#cap30arr1)" />

            {/* Riscos — direita */}
            <rect x="535" y="50" width="150" height="42" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
            <text x="610" y="68" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Desinformación</text>
            <text x="610" y="83" textAnchor="middle" fill="#991b1b" fontSize="10">deepfakes, fake news</text>
            <line x1="415" y1="120" x2="535" y2="71" stroke="#dc2626" strokeWidth="1.5" />

            <rect x="535" y="120" width="150" height="42" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
            <text x="610" y="138" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Vigilancia masiva</text>
            <text x="610" y="153" textAnchor="middle" fill="#991b1b" fontSize="10">pérdida de privacidad</text>
            <line x1="415" y1="141" x2="535" y2="141" stroke="#dc2626" strokeWidth="1.5" />

            <rect x="535" y="190" width="150" height="42" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
            <text x="610" y="208" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Brecha digital</text>
            <text x="610" y="223" textAnchor="middle" fill="#991b1b" fontSize="10">desigualdad de acceso</text>
            <line x1="415" y1="162" x2="535" y2="211" stroke="#dc2626" strokeWidth="1.5" />

            <text x="92" y="245" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold">OPORTUNIDADES</text>
            <text x="610" y="245" textAnchor="middle" fill="#b91c1c" fontSize="12" fontWeight="bold">RIESGOS</text>
          </svg>
          <figcaption>Diagrama do ecossistema digital: oportunidades e riscos — estrutura típica dos textos de opinião sobre tecnologia em espanhol.</figcaption>
        </figure>
      </section>

      {/* Seção 4: Textos Jornalísticos sobre Tecnologia e IA */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura</span>
        <h2>Textos Jornalísticos sobre Tecnologia e IA em Espanhol</h2>
        <p>
          Os textos sobre tecnologia e inteligência artificial publicados na imprensa hispânica apresentam
          um vocabulário híbrido: termos técnicos em inglês convivem com explicações em espanhol formal.
          Saber navegar nessa mistura é essencial para o ENEM.
        </p>
        <div className="lesson-highlight">
          <strong>Texto modelo — trecho de reportagem tecnológica:</strong>
          <br /><br />
          <em>
            "La inteligencia artificial generativa ha transformado el panorama laboral de manera sin precedentes.
            Según un informe del Foro Económico Mundial, el 40% de los empleos actuales podría ser automatizado
            en la próxima década. Sin embargo, los expertos advierten que la IA también creará nuevas
            profesiones que hoy apenas podemos imaginar. El verdadero desafío, sostienen, es garantizar que
            los trabajadores reciban la formación necesaria para adaptarse a este nuevo entorno digital."
          </em>
          <br /><br />
          <strong>Vocabulário-chave do texto:</strong>
          <ul>
            <li><em>inteligencia artificial generativa</em> = IA generativa (capaz de criar conteúdo)</li>
            <li><em>panorama laboral</em> = cenário do mercado de trabalho</li>
            <li><em>sin precedentes</em> = sem precedentes</li>
            <li><em>podría ser automatizado</em> = poderia ser automatizado (condicional)</li>
            <li><em>el verdadero desafío</em> = o verdadeiro desafio</li>
            <li><em>formación necesaria</em> = formação necessária / capacitação</li>
          </ul>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de texto</th>
                <th>Características linguísticas</th>
                <th>Exemplo de publicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reportagem tecnológica</td>
                <td>Dados, citações de especialistas, anglicismos, linguagem neutra</td>
                <td><em>El País Tecnología, Wired en Español</em></td>
              </tr>
              <tr>
                <td>Artigo de opinião</td>
                <td>Posição clara do autor, argumentos, marcadores de opinião</td>
                <td><em>Columna de opinión en El Universal</em></td>
              </tr>
              <tr>
                <td>Texto informativo / divulgação</td>
                <td>Explicações didáticas, definições, analogias simples</td>
                <td><em>BBC Mundo, National Geographic en Español</em></td>
              </tr>
              <tr>
                <td>Publicidade / marketing digital</td>
                <td>Imperativo, apelo emocional, brevidade, chamada para ação</td>
                <td><em>Anúncios de produtos tech em espanhol</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 5: Debate Ética e IA */}
      <section className="lesson-section">
        <span className="section-kicker">Debate Contemporâneo</span>
        <h2>Ética e Inteligência Artificial em Textos em Espanhol</h2>
        <p>
          O debate sobre ética e IA é um dos temas mais férteis para textos de opinião em espanhol.
          O ENEM pode apresentar textos que discutam privacidade, viés algorítmico, desinformação ou
          o impacto da automação no trabalho. Esses textos exigem leitura crítica e atenção à posição do autor.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ético</th>
                <th>Vocabulário em espanhol</th>
                <th>Exemplo de enunciado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Privacidade e dados</td>
                <td><em>privacidad, datos personales, vigilancia, consentimiento, GDPR</em></td>
                <td><em>¿Hasta qué punto tenemos derecho a la privacidad en la era digital?</em></td>
              </tr>
              <tr>
                <td>Viés algorítmico</td>
                <td><em>sesgo algorítmico, discriminación digital, opacidad, caja negra</em></td>
                <td><em>Los algoritmos reproducen los sesgos de quienes los programan.</em></td>
              </tr>
              <tr>
                <td>Desinformação</td>
                <td><em>desinformación, bulos, fake news, deepfake, infodemia</em></td>
                <td><em>La infodemia es tan peligrosa como la pandemia que la acompañó.</em></td>
              </tr>
              <tr>
                <td>Automação do trabalho</td>
                <td><em>automatización, desempleo tecnológico, reconversión laboral, futuro del trabajo</em></td>
                <td><em>La automatización destruirá empleos, pero también creará nuevos.</em></td>
              </tr>
              <tr>
                <td>Regulação da IA</td>
                <td><em>regulación, gobernanza digital, ley de IA, ética algorítmica</em></td>
                <td><em>Europa aprueba la primera ley mundial de regulación de la IA.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Fragmento de texto de opinião sobre IA:</strong>
          <br /><br />
          <em>
            "La inteligencia artificial no es neutral. Cada algoritmo refleja las decisiones, prejuicios y
            valores de quienes lo diseñaron. Cuando un sistema de IA reproduce discriminación racial en la
            concesión de créditos o en la contratación laboral, no estamos ante un fallo técnico, sino
            ante una injusticia estructural amplificada por la tecnología. Por eso, la regulación de la IA
            no es una opción: es una urgencia democrática."
          </em>
          <br /><br />
          <strong>Identificando a tese:</strong> <em>"La inteligencia artificial no es neutral"</em> — essa
          é a tese. Tudo o que segue são argumentos que a sustentam. O parágrafo final — <em>"la regulación
          de la IA no es una opción: es una urgencia democrática"</em> — é a conclusão com chamada à ação.
        </div>
      </section>

      {/* Seção 6: Brechas Digitais na América Latina */}
      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Digital</span>
        <h2>Brecha Digital na América Latina</h2>
        <p>
          A <em>brecha digital</em> (exclusão digital) é um tema recorrente em textos hispânicos sobre tecnologia
          e sociedade. Refere-se às desigualdades no acesso a dispositivos, internet e competências digitais
          entre diferentes grupos sociais, geracionais e geográficos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Acceso a internet</h3>
            <p>
              Apenas 70% da população da América Latina tem acesso à internet. Zonas rurais e comunidades
              indígenas são as mais afetadas pela falta de <em>conectividad</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>👧</span>
            <h3>Brecha de género</h3>
            <p>
              Mulheres na AL têm 20% menos acesso a dispositivos digitais que homens. Iniciativas de
              <em> inclusión digital</em> buscam combater essa desigualdade.
            </p>
          </div>
          <div className="lesson-card">
            <span>👴</span>
            <h3>Brecha generacional</h3>
            <p>
              Idosos (<em>adultos mayores</em>) têm maiores dificuldades com competências digitais.
              O conceito de <em>alfabetización digital</em> é central nesse debate.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Brecha urbano-rural</h3>
            <p>
              Cidades concentram infraestrutura digital; zonas rurais têm acesso precário.
              <em> Conectividad rural</em> e <em>internet satelital</em> são soluções em debate.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 7: SVG — IA e Redes Neurais */}
      <section className="lesson-section">
        <span className="section-kicker">Inteligência Artificial</span>
        <h2>Como Funciona a Inteligência Artificial — Esquema Visual</h2>
        <p>
          Textos sobre IA frequentemente explicam seu funcionamento de forma didática para um público leigo.
          Reconhecer os conceitos básicos ajuda a compreender essas explicações em espanhol.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Esquema de funcionamento de rede neural artificial">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#faf5ff" />
            <defs>
              <marker id="cap30arr2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#7c3aed" />
              </marker>
            </defs>
            <text x="350" y="26" textAnchor="middle" fill="#5b21b6" fontSize="14" fontWeight="bold">
              Red Neuronal Artificial — Cómo aprende la IA
            </text>
            {/* Camada de entrada */}
            <text x="95" y="55" textAnchor="middle" fill="#6b7280" fontSize="11">Capa de entrada</text>
            <circle cx="95" cy="90" r="20" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
            <text x="95" y="94" textAnchor="middle" fill="#5b21b6" fontSize="10">datos</text>
            <circle cx="95" cy="140" r="20" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
            <text x="95" y="144" textAnchor="middle" fill="#5b21b6" fontSize="10">datos</text>
            <circle cx="95" cy="190" r="20" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
            <text x="95" y="194" textAnchor="middle" fill="#5b21b6" fontSize="10">datos</text>

            {/* Camada oculta 1 */}
            <text x="270" y="55" textAnchor="middle" fill="#6b7280" fontSize="11">Capa oculta 1</text>
            <circle cx="270" cy="80" r="18" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="270" cy="120" r="18" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="270" cy="160" r="18" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="270" cy="200" r="18" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />

            {/* Camada oculta 2 */}
            <text x="430" y="55" textAnchor="middle" fill="#6b7280" fontSize="11">Capa oculta 2</text>
            <circle cx="430" cy="90" r="18" fill="#a78bfa" stroke="#5b21b6" strokeWidth="2" />
            <circle cx="430" cy="140" r="18" fill="#a78bfa" stroke="#5b21b6" strokeWidth="2" />
            <circle cx="430" cy="190" r="18" fill="#a78bfa" stroke="#5b21b6" strokeWidth="2" />

            {/* Camada de saída */}
            <text x="600" y="55" textAnchor="middle" fill="#6b7280" fontSize="11">Capa de salida</text>
            <circle cx="600" cy="120" r="22" fill="#7c3aed" stroke="#4c1d95" strokeWidth="2" />
            <text x="600" y="116" textAnchor="middle" fill="white" fontSize="9">resul-</text>
            <text x="600" y="128" textAnchor="middle" fill="white" fontSize="9">tado</text>

            {/* Conexões simplificadas */}
            {[90, 140, 190].map((y1, i) =>
              [80, 120, 160, 200].map((y2, j) => (
                <line key={`in${i}h${j}`} x1="115" y1={y1} x2="252" y2={y2} stroke="#ddd6fe" strokeWidth="1" />
              ))
            )}
            {[80, 120, 160, 200].map((y1, i) =>
              [90, 140, 190].map((y2, j) => (
                <line key={`h1${i}h2${j}`} x1="288" y1={y1} x2="412" y2={y2} stroke="#c4b5fd" strokeWidth="1" />
              ))
            )}
            {[90, 140, 190].map((y1, i) => (
              <line key={`h2${i}out`} x1="448" y1={y1} x2="578" y2="120" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#cap30arr2)" />
            ))}
          </svg>
          <figcaption>Esquema simplificado de uma rede neural artificial — vocabulário essencial para textos sobre inteligência artificial em espanhol.</figcaption>
        </figure>
      </section>

      {/* Seção 8: Regulação de Redes Sociais */}
      <section className="lesson-section">
        <span className="section-kicker">Política Digital</span>
        <h2>Regulação de Redes Sociais em Países Hispânicos</h2>
        <p>
          O debate sobre regulação das redes sociais é frequente nos textos do ENEM. Países da América
          Latina e Espanha têm diferentes abordagens, e os textos jornalísticos exploram as tensões entre
          liberdade de expressão, privacidade e combate à desinformação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>País</th>
                <th>Abordagem de regulação</th>
                <th>Vocabulário-chave em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>España</td>
                <td>Segue a regulação europeia (DSA — Ley de Servicios Digitales)</td>
                <td><em>responsabilidad de las plataformas, contenido ilegal, moderación</em></td>
              </tr>
              <tr>
                <td>México</td>
                <td>Debate sobre censura vs. combate à desinformação durante eleições</td>
                <td><em>libertad de expresión, censura digital, contenido electoral</em></td>
              </tr>
              <tr>
                <td>Argentina</td>
                <td>Discussões sobre proteção de dados pessoais e IA nas eleições</td>
                <td><em>protección de datos, deepfake electoral, identidad digital</em></td>
              </tr>
              <tr>
                <td>Brasil*</td>
                <td>Marco Civil da Internet; debate sobre PL das Fake News</td>
                <td>(*contexto para comparação nos textos ENEM)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Textos sobre tecnologia:</strong> Quando o texto em espanhol faz referência a
          <em> "plataformas digitales"</em> ou <em>"redes sociales"</em>, preste atenção ao verbos modais:
          <em> "deben", "deberían", "podrían", "es necesario que"</em> — eles indicam a posição normativa
          do autor (o que ele acha que DEVE ser feito). Questões sobre a <em>intenção comunicativa</em> do
          texto frequentemente dependem de identificar se o autor descreve, critica, propõe ou alerta.
        </div>
      </section>

      {/* Seção 9: Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Anglicismo tecnológico em espanhol"
          statement={
            <p>
              Leia o fragmento: <em>"Miles de jóvenes latinoamericanos pasan horas tuiteando, posteando
              fotos y siguiendo a sus influencers favoritos. Para muchos, las redes sociales se han
              convertido en su principal fuente de información."</em>
              <br /><br />
              Os termos <strong>"tuiteando"</strong> e <strong>"posteando"</strong> são:
            </p>
          }
          options={[
            { letter: "a", text: "Termos criados por academias de língua para substituir palavras em inglês." },
            { letter: "b", text: "Verbos em espanhol formados a partir de palavras do inglês incorporadas ao idioma.", correct: true },
            { letter: "c", text: "Erros gramaticais típicos do espanhol coloquial latino-americano." },
            { letter: "d", text: "Expressões exclusivas do espanhol da Espanha, não usadas na América Latina." },
          ]}
          resolution={
            <p>
              <em>Tuitear</em> e <em>postear</em> são anglicismos verbalizados: palavras inglesas (tweet, post)
              adaptadas como verbos em espanhol com o sufixo <em>-ear</em>, muito produtivo na formação
              de novos verbos. Esse fenômeno é amplamente aceito e documentado. A alternativa (b) descreve
              corretamente esse processo de incorporação linguística. Resposta: (b).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Intenção comunicativa em texto sobre tecnologia"
          statement={
            <p>
              Leia: <em>"La inteligencia artificial no es neutral. Cada algoritmo refleja los valores y
              prejuicios de quienes lo diseñaron. Por eso, cuando un sistema de IA discrimina a minorías
              en la contratación laboral, no estamos ante un fallo técnico, sino ante una injusticia
              estructural amplificada por la tecnología."</em>
              <br /><br />
              A principal intenção comunicativa desse texto é:
            </p>
          }
          options={[
            { letter: "a", text: "Explicar didaticamente como os algoritmos de IA são programados por engenheiros." },
            { letter: "b", text: "Descrever neutralmente os benefícios e riscos da inteligência artificial no trabalho." },
            { letter: "c", text: "Defender o argumento de que a IA reproduz injustiças sociais e por isso precisa ser questionada.", correct: true },
            { letter: "d", text: "Criticar as empresas de tecnologia por não contratarem profissionais de minorias." },
          ]}
          resolution={
            <p>
              O texto assume uma posição clara desde a primeira frase — <em>"La inteligencia artificial no es
              neutral"</em> — e desenvolve um argumento: a IA reflete os preconceitos dos programadores e amplifica
              injustiças estruturais. Isso é um texto de opinião argumentativo, não uma explicação didática nem
              uma descrição neutra. A alternativa (c) é a que melhor resume essa intenção. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Vocabulário técnico em contexto"
          statement={
            <p>
              Leia: <em>"La brecha digital en América Latina no es solo un problema de acceso a dispositivos.
              Es, ante todo, una cuestión de alfabetización digital: millones de personas tienen teléfonos
              inteligentes pero carecen de las competencias necesarias para aprovechar sus potencialidades
              educativas, económicas y cívicas."</em>
              <br /><br />
              No texto, a expressão <strong>"alfabetización digital"</strong> se refere a:
            </p>
          }
          options={[
            { letter: "a", text: "A distribuição de tablets e computadores para estudantes em zonas rurais." },
            { letter: "b", text: "O processo de aprender a ler e escrever usando plataformas digitais." },
            { letter: "c", text: "As habilidades e competências necessárias para usar os recursos digitais de forma eficaz.", correct: true },
            { letter: "d", text: "A criação de alfabetos digitais para línguas indígenas da América Latina." },
          ]}
          resolution={
            <p>
              <em>Alfabetización</em> originalmente significa "alfabetização" (aprender a ler e escrever). O
              prefixo <em>digital</em> estende esse conceito: <em>alfabetización digital</em> é a capacidade
              de usar ferramentas digitais de forma eficiente. O texto confirma: as pessoas <em>"carecen de las
              competencias necesarias para aprovechar sus potencialidades"</em> — faltam competências, não
              dispositivos. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto sobre desinformação digital"
          statement={
            <p>
              Leia: <em>"En las últimas elecciones mexicanas, circularon por las redes sociales miles de
              bulos y deepfakes de candidatos. La desinformación alcanzó tal magnitud que la Organización
              de los Estados Americanos (OEA) alertó sobre el riesgo para la democracia. Sin regulación,
              las plataformas digitales se convierten en altavoces del engaño."</em>
              <br /><br />
              Qual é a posição defendida pelo autor nesse texto?
            </p>
          }
          options={[
            { letter: "a", text: "As eleições mexicanas foram fraudadas por causa dos deepfakes nas redes sociais." },
            { letter: "b", text: "A OEA deve intervir diretamente nas eleições dos países latino-americanos." },
            { letter: "c", text: "A falta de regulação das plataformas digitais representa uma ameaça à democracia.", correct: true },
            { letter: "d", text: "As redes sociais devem ser proibidas durante os períodos eleitorais em toda a América Latina." },
          ]}
          resolution={
            <p>
              A última frase resume perfeitamente a tese do autor: <em>"Sin regulación, las plataformas digitales
              se convierten en altavoces del engaño"</em> (sem regulação, as plataformas se tornam amplificadores
              de mentiras). O texto não pede a proibição das redes nem afirma fraude — apenas aponta o risco
              democrático da desinformação não regulada. Resposta: (c).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gênero textual — publicidade tecnológica"
          statement={
            <p>
              Leia: <em>"¿Tu empresa todavía usa hojas de cálculo? Descubre el poder de la IA para tu
              negocio. Automatiza tareas, ahorra tiempo y multiplica tus ganancias. Prueba nuestra
              plataforma gratis durante 30 días. ¡Sin compromisos!"</em>
              <br /><br />
              Esse texto é um exemplo de:
            </p>
          }
          options={[
            { letter: "a", text: "Artigo de opinião sobre os benefícios da inteligência artificial para pequenas empresas." },
            { letter: "b", text: "Reportagem sobre o impacto da automação no mercado de trabalho hispânico." },
            { letter: "c", text: "Propaganda comercial de um produto de tecnologia voltado para empresas.", correct: true },
            { letter: "d", text: "Texto informativo sobre as diferenças entre planilhas e softwares de IA." },
          ]}
          resolution={
            <p>
              O texto apresenta: pergunta retórica para criar identificação com o leitor-alvo (<em>¿Tu empresa
              todavía usa hojas de cálculo?</em>), verbos no imperativo (<em>Descubre, Automatiza, ahorra,
              multiplica, Prueba</em>), benefícios listados, oferta de teste gratuito e frase de fechamento
              tranquilizador (<em>¡Sin compromisos!</em>). Esse é o padrão clássico de publicidade/propaganda
              comercial digital. Resposta: (c).
            </p>
          }
        />
      </section>
    </article>
  );
}
