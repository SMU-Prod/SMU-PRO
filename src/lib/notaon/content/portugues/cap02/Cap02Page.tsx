"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 2</span>

          <h1>Funções da Linguagem</h1>

          <p>
            Domine o modelo de comunicação de Jakobson e as seis funções da
            linguagem — referencial, emotiva, conativa, fática,
            metalinguística e poética — com exemplos práticos e a lógica que
            o ENEM exige para identificá-las em qualquer texto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Base Teórica</span>

        <h2>1. O Modelo de Comunicação de Jakobson</h2>

        <p>
          Em 1960, o linguista russo Roman Jakobson publicou a obra{" "}
          <em>Linguística e Poética</em> e propôs um modelo que organiza o
          ato comunicativo em <strong>seis elementos</strong>. Cada elemento
          corresponde a uma função da linguagem: quando um desses elementos é
          destacado pelo texto, reconhecemos qual função está em evidência.
          O modelo superou versões anteriores porque incorporou, além do
          conteúdo e dos participantes, o canal físico, o código compartilhado
          e a própria forma da mensagem.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 340"
            width="700"
            height="340"
            aria-label="Diagrama dos seis elementos do modelo de comunicação de Jakobson"
            role="img"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>

            <rect width="700" height="340" rx="16" fill="#f8fafc" />

            <rect x="270" y="16" width="160" height="52" rx="10" fill="#6366f1" />
            <text x="350" y="38" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">REFERENTE</text>
            <text x="350" y="57" textAnchor="middle" fill="#c7d2fe" fontSize="11">(Contexto)</text>

            <rect x="270" y="90" width="160" height="52" rx="10" fill="#8b5cf6" />
            <text x="350" y="112" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">MENSAGEM</text>
            <text x="350" y="131" textAnchor="middle" fill="#ddd6fe" fontSize="11">(Enunciado)</text>

            <rect x="20" y="163" width="160" height="52" rx="10" fill="#0ea5e9" />
            <text x="100" y="185" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">EMISSOR</text>
            <text x="100" y="204" textAnchor="middle" fill="#bae6fd" fontSize="11">(Remetente)</text>

            <rect x="520" y="163" width="160" height="52" rx="10" fill="#10b981" />
            <text x="600" y="185" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">RECEPTOR</text>
            <text x="600" y="204" textAnchor="middle" fill="#a7f3d0" fontSize="11">(Destinatário)</text>

            <rect x="270" y="236" width="160" height="52" rx="10" fill="#f59e0b" />
            <text x="350" y="258" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">CANAL</text>
            <text x="350" y="277" textAnchor="middle" fill="#fef3c7" fontSize="11">(Contato físico)</text>

            <rect x="270" y="308" width="160" height="24" rx="8" fill="#ef4444" />
            <text x="350" y="325" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CÓDIGO</text>

            <line x1="180" y1="189" x2="265" y2="116" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,3" />
            <line x1="265" y1="116" x2="185" y2="189" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,3" />
            <line x1="430" y1="116" x2="518" y2="189" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,3" />
          </svg>
          <figcaption>
            Os seis elementos do ato comunicativo segundo Jakobson (1960).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Definição</th>
                <th>Pergunta-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Emissor</strong></td>
                <td>Quem produz a mensagem</td>
                <td>Quem fala / escreve?</td>
              </tr>
              <tr>
                <td><strong>Receptor</strong></td>
                <td>Quem recebe a mensagem</td>
                <td>Para quem?</td>
              </tr>
              <tr>
                <td><strong>Mensagem</strong></td>
                <td>O conteúdo comunicado</td>
                <td>O que é dito?</td>
              </tr>
              <tr>
                <td><strong>Canal</strong></td>
                <td>Meio físico que viabiliza o contato</td>
                <td>Como o sinal chega?</td>
              </tr>
              <tr>
                <td><strong>Código</strong></td>
                <td>Sistema de sinais compartilhado</td>
                <td>Em que língua/sistema?</td>
              </tr>
              <tr>
                <td><strong>Referente</strong></td>
                <td>Assunto ou realidade a que a mensagem se refere</td>
                <td>Sobre o quê?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            O ENEM raramente pede que você nomeie os elementos isoladamente.
            O foco recai sobre <strong>qual função predomina</strong> em um
            fragmento de texto — ou seja, qual elemento o texto coloca em
            primeiro plano. Memorize a tríade{" "}
            <em>elemento → função → característica</em> para responder com
            rapidez.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 1</span>

        <h2>2. Função Referencial (Denotativa ou Informativa)</h2>

        <p>
          A <strong>função referencial</strong> é centrada no{" "}
          <strong>referente</strong>, ou seja, no objeto, fato ou situação
          sobre o qual se fala. O objetivo é transmitir informação de maneira
          objetiva, precisa e impessoal. A linguagem tende a ser denotativa —
          as palavras são usadas em seu sentido literal, dicionarizado.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Onde aparece?</h3>
            <p>
              Notícias jornalísticas, artigos científicos, enciclopédias,
              bulas de remédio, manuais técnicos e relatórios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔍</span>
            <h3>Marcas linguísticas</h3>
            <p>
              3ª pessoa verbal, verbos no indicativo, advérbios de tempo e
              lugar, vocabulário técnico, ausência de marcas afetivas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Foco</h3>
            <p>
              Referente (contexto, mundo exterior). A mensagem informa sobre
              algo que existe fora do ato de comunicação.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "O Brasil possui uma área de 8,5 milhões de km² e uma população
            de aproximadamente 215 milhões de habitantes." — Linguagem
            objetiva, dados verificáveis, 3ª pessoa, sentido literal.
          </p>
          <p>
            "O coração é um músculo oco que bombeia sangue por todo o
            organismo, contraindo-se em média 70 vezes por minuto em repouso."
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção: denotação x conotação</h3>
          <p>
            A função referencial opera com a linguagem <em>denotativa</em>{" "}
            (sentido literal). Quando o texto usa metáforas, ironia ou
            simbolismo, outras funções entram em cena — especialmente a
            poética. No ENEM, textos de opinião podem misturar referencial e
            argumentativa, mas o foco informativo é o traço principal da
            referencial.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 2</span>

        <h2>3. Função Emotiva (Expressiva)</h2>

        <p>
          A <strong>função emotiva</strong> ou <strong>expressiva</strong> é
          centrada no <strong>emissor</strong>. O falante revela suas emoções,
          sentimentos, opiniões e estados psicológicos. A subjetividade é
          marca essencial: o texto fala mais sobre quem enuncia do que sobre
          o mundo exterior.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💌</span>
            <h3>Onde aparece?</h3>
            <p>
              Cartas pessoais, diários íntimos, poemas líricos, depoimentos,
              discursos emotivos e postagens em redes sociais com forte carga
              afetiva.
            </p>
          </div>

          <div className="lesson-card">
            <span>✍️</span>
            <h3>Marcas linguísticas</h3>
            <p>
              1ª pessoa (eu, mim, meu), verbos no presente do indicativo
              expressando estado interior, interjeições, exclamações,
              reticências e adjetivos de julgamento subjetivo.
            </p>
          </div>

          <div className="lesson-card">
            <span>❤️</span>
            <h3>Foco</h3>
            <p>
              Emissor. A mensagem revela a subjetividade, o estado afetivo ou
              a perspectiva pessoal de quem fala.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "Que saudade terrível! Jamais imaginei sentir tanta falta de uma
            pessoa assim." — Interjeição, 1ª pessoa, exclamação, adjetivo
            subjetivo ("terrível").
          </p>
          <p>
            "Detesto acordar cedo. Cada manhã parece um castigo
            desnecessário." — Expressão de aversão pessoal, hipérbole,
            julgamento do emissor.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 3</span>

        <h2>4. Função Conativa (Apelativa)</h2>

        <p>
          A <strong>função conativa</strong> é centrada no{" "}
          <strong>receptor</strong>. O emissor quer influenciar, persuadir,
          ordenar ou convencer o destinatário a pensar ou agir de certa forma.
          É a função da <em>ação sobre o outro</em>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Onde aparece?</h3>
            <p>
              Publicidade, campanhas políticas, sermões, discursos de
              motivação, ordens militares, receitas culinárias no modo
              imperativo e bulas com instruções.
            </p>
          </div>

          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Marcas linguísticas</h3>
            <p>
              Modo imperativo ("venha", "compre", "vote"), vocativo (chamado
              direto ao receptor), 2ª ou 3ª pessoa, verbos que indicam ordem
              ou pedido, uso do pronome "você".
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Foco</h3>
            <p>
              Receptor. O texto quer provocar uma reação, mudança de
              comportamento ou adesão do destinatário.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "Vote com consciência! O futuro do país está nas suas mãos." —
            Imperativo ("Vote"), vocativo implícito (o eleitor), apelo à
            responsabilidade do receptor.
          </p>
          <p>
            "Não fume. Fumar mata." — Imperativo negativo direto, foco na
            ação do receptor, persuasão pela ameaça.
          </p>
          <p>
            "Caro leitor, participe desta pesquisa e contribua para a melhoria
            dos nossos serviços." — Vocativo explícito ("Caro leitor"), duplo
            imperativo ("participe", "contribua").
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Referencial x Conativa na publicidade</h3>
          <p>
            Um anúncio pode começar com dados referenciais ("Nosso produto
            reduziu 30% do desperdício") e terminar com apelo conativo ("Peça
            já o seu!"). O ENEM pode pedir que você identifique a função{" "}
            <em>predominante</em>, que no caso de anúncios publicitários é
            quase sempre a conativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 4</span>

        <h2>5. Função Fática</h2>

        <p>
          A <strong>função fática</strong> é centrada no{" "}
          <strong>canal</strong>. Ela serve para <em>estabelecer</em>,{" "}
          <em>manter</em>, <em>verificar</em> ou <em>encerrar</em> o contato
          entre emissor e receptor. O conteúdo informacional é mínimo — o que
          importa é garantir que a comunicação está funcionando.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📞</span>
            <h3>Onde aparece?</h3>
            <p>
              Cumprimentos cotidianos, conversas telefônicas, saudações de
              abertura e encerramento, frases de cortesia em e-mails e
              discursos formais.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Marcas linguísticas</h3>
            <p>
              Expressões de contato ("alô?", "oi", "está me ouvindo?",
              "entendeu?"), repetições, confirmações, bordões de encerramento
              ("abraços", "até logo").
            </p>
          </div>

          <div className="lesson-card">
            <span>📡</span>
            <h3>Foco</h3>
            <p>
              Canal físico ou psicológico. A linguagem garante que o fio da
              comunicação está ativo entre os interlocutores.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "Alô? Alô? Me escuta?" — Verificação do canal telefônico, sem
            conteúdo informacional relevante.
          </p>
          <p>
            "Bom dia, tudo bem?" / "Tudo ótimo, e você?" — Troca de
            cumprimentos cuja função real é manter o vínculo social, não
            informar sobre o estado de saúde.
          </p>
          <p>
            "Prezados, iniciaremos a reunião em instantes. Agradeço a presença
            de todos." — Abertura de contato formal antes do conteúdo
            principal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 5</span>

        <h2>6. Função Metalinguística</h2>

        <p>
          A <strong>função metalinguística</strong> é centrada no{" "}
          <strong>código</strong>. Ocorre quando a linguagem fala sobre ela
          mesma — quando o texto toma o próprio sistema linguístico como objeto
          de análise, explicação ou reflexão. É a linguagem dobrando-se sobre
          si mesma.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Onde aparece?</h3>
            <p>
              Gramáticas, dicionários, glossários, textos críticos sobre
              literatura, poemas que refletem sobre a criação poética, notas
              de rodapé explicativas e aulas de língua.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪞</span>
            <h3>Marcas linguísticas</h3>
            <p>
              Aspas ao redor de palavras sendo definidas, expressões como
              "a palavra X significa…", "o termo Y vem do grego…", uso de
              metalinguagem explícita.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Foco</h3>
            <p>
              Código. O assunto da mensagem é o próprio código — a língua, a
              gramática, o signo linguístico, o gênero textual.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "'Saudade' é uma palavra de origem portuguesa que expressa a
            nostalgia de algo ou alguém amado e ausente." — O código (a
            palavra) é o próprio objeto da mensagem.
          </p>
          <p>
            "O soneto é uma forma poética composta por dois quartetos e dois
            tercetos." — Texto sobre o código (gênero literário).
          </p>
          <p>
            "No verso 'Amor é fogo que arde sem se ver', Camões usa a metáfora
            para definir o sentimento amoroso." — Crítica literária:
            linguagem falando sobre linguagem.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Metalinguagem na literatura</h3>
          <p>
            Poemas que têm como tema a criação do próprio poema são exemplos
            clássicos de função metalinguística. Drummond, Manoel de Barros e
            João Cabral de Melo Neto são mestres desse recurso. No ENEM, um
            poema que discute o ato de escrever ou o poder das palavras quase
            sempre possui predominância metalinguística.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função 6</span>

        <h2>7. Função Poética</h2>

        <p>
          A <strong>função poética</strong> é centrada na{" "}
          <strong>mensagem</strong> em si — na sua forma, na organização dos
          signos, no ritmo, na sonoridade, nas imagens e nos recursos
          estilísticos. O foco não é o que se diz, mas{" "}
          <em>como se diz</em>. A beleza e o efeito estético da linguagem
          passam a ser fins em si mesmos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Onde aparece?</h3>
            <p>
              Poesias, canções, contos literários, romances, slogans criativos,
              crônicas com estilo marcado, discursos retóricos elaborados e
              títulos de obras.
            </p>
          </div>

          <div className="lesson-card">
            <span>✨</span>
            <h3>Marcas linguísticas</h3>
            <p>
              Metáfora, metonímia, aliteração, assonância, rima, ritmo,
              paralelismo, antítese, hipérbole, ironia, ambiguidade e jogos
              de palavras.
            </p>
          </div>

          <div className="lesson-card">
            <span>📝</span>
            <h3>Foco</h3>
            <p>
              Mensagem. A atenção recai sobre a forma do enunciado — a
              escolha das palavras, a estrutura, o efeito sonoro e visual.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos</h3>
          <p>
            "No meio do caminho tinha uma pedra / tinha uma pedra no meio do
            caminho." (Carlos Drummond de Andrade) — Repetição obsessiva,
            ritmo deliberado, ambiguidade simbólica.
          </p>
          <p>
            "Saudade: a presença da ausência." — Paradoxo, jogo semântico,
            forma condensada e impactante.
          </p>
          <p>
            "Toda poesia é uma descoberta / de algo que já existia / e que eu
            não sabia que sabia." — Paralelismo, surpresa sintática, beleza
            da forma sobre o conteúdo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Poética não é exclusiva da poesia</h3>
          <p>
            A função poética pode aparecer em propagandas ("Faz bem, faz
            Brahma"), títulos de jornal com trocadilho, discursos políticos
            com paralelismo e até em textos didáticos com linguagem cuidadosa.
            O ENEM testa sua capacidade de reconhecer recursos estilísticos
            mesmo em textos que não são poemas formais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>8. Mapa das Seis Funções</h2>

        <p>
          A tabela abaixo reúne todas as funções em uma visão comparativa,
          essencial para a revisão rápida antes do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Foco / Elemento</th>
                <th>Objetivo</th>
                <th>Marcas típicas</th>
                <th>Onde aparece</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Referencial</strong></td>
                <td>Referente</td>
                <td>Informar objetivamente</td>
                <td>3ª pessoa, denotação, dados</td>
                <td>Notícia, enciclopédia, relatório</td>
              </tr>
              <tr>
                <td><strong>Emotiva</strong></td>
                <td>Emissor</td>
                <td>Expressar sentimentos</td>
                <td>1ª pessoa, exclamações, subjetividade</td>
                <td>Diário, carta pessoal, poema lírico</td>
              </tr>
              <tr>
                <td><strong>Conativa</strong></td>
                <td>Receptor</td>
                <td>Influenciar / persuadir</td>
                <td>Imperativo, vocativo, 2ª pessoa</td>
                <td>Publicidade, ordem, campanha</td>
              </tr>
              <tr>
                <td><strong>Fática</strong></td>
                <td>Canal</td>
                <td>Estabelecer / manter contato</td>
                <td>"Alô?", cumprimentos, confirmações</td>
                <td>Ligação, saudação, abertura</td>
              </tr>
              <tr>
                <td><strong>Metalinguística</strong></td>
                <td>Código</td>
                <td>Explicar o próprio código</td>
                <td>Aspas, definições, análise linguística</td>
                <td>Gramática, dicionário, crítica</td>
              </tr>
              <tr>
                <td><strong>Poética</strong></td>
                <td>Mensagem</td>
                <td>Valorizar a forma</td>
                <td>Metáfora, rima, ritmo, figuras</td>
                <td>Poema, slogan, crônica literária</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 280"
            width="680"
            height="280"
            aria-label="Diagrama mostrando as seis funções da linguagem organizadas em torno dos elementos de comunicação"
            role="img"
          >
            <rect width="680" height="280" rx="16" fill="#f1f5f9" />

            <ellipse cx="340" cy="140" rx="120" ry="80" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="340" y="130" textAnchor="middle" fill="#4338ca" fontSize="13" fontWeight="bold">MENSAGEM</text>
            <text x="340" y="148" textAnchor="middle" fill="#6366f1" fontSize="11">Poética</text>

            <rect x="10" y="110" width="130" height="52" rx="10" fill="#0ea5e9" opacity="0.9" />
            <text x="75" y="132" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">EMISSOR</text>
            <text x="75" y="150" textAnchor="middle" fill="#e0f2fe" fontSize="10">Emotiva</text>

            <rect x="540" y="110" width="130" height="52" rx="10" fill="#10b981" opacity="0.9" />
            <text x="605" y="132" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">RECEPTOR</text>
            <text x="605" y="150" textAnchor="middle" fill="#d1fae5" fontSize="10">Conativa</text>

            <rect x="260" y="10" width="160" height="52" rx="10" fill="#6366f1" opacity="0.9" />
            <text x="340" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">REFERENTE</text>
            <text x="340" y="50" textAnchor="middle" fill="#c7d2fe" fontSize="10">Referencial</text>

            <rect x="260" y="218" width="160" height="52" rx="10" fill="#f59e0b" opacity="0.9" />
            <text x="340" y="240" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CANAL</text>
            <text x="340" y="258" textAnchor="middle" fill="#fef3c7" fontSize="10">Fática</text>

            <rect x="545" y="10" width="125" height="52" rx="10" fill="#ef4444" opacity="0.9" />
            <text x="607" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">CÓDIGO</text>
            <text x="607" y="50" textAnchor="middle" fill="#fee2e2" fontSize="10">Metalinguística</text>

            <line x1="140" y1="136" x2="220" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="460" y1="140" x2="540" y2="136" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="340" y1="62" x2="340" y2="60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="340" y1="218" x2="340" y2="218" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
          </svg>
          <figcaption>
            Mapa visual das funções da linguagem e seus elementos centrais.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Análise Textual</span>

        <h2>9. Como Identificar a Função Predominante em Textos</h2>

        <p>
          Na prática do ENEM, a questão apresenta um fragmento de texto e
          pergunta qual função predomina ou qual efeito de sentido determinado
          recurso produz. O método correto é analisar três eixos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Identifique o gênero</h3>
            <p>
              Notícia? Poema? Anúncio? Carta? O gênero já orienta a função
              mais provável, mas não é suficiente — é preciso analisar o texto
              em si.
            </p>
          </div>

          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Mapeie as marcas linguísticas</h3>
            <p>
              Qual pessoa verbal? Há imperativo? Há figuras de linguagem? Há
              definição de termos? O texto fala de si mesmo? O canal é
              mencionado?
            </p>
          </div>

          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Determine o elemento em destaque</h3>
            <p>
              O texto foca em informar (referente)? Expressar emoção
              (emissor)? Persuadir (receptor)? Testar o canal? Explicar o
              código? Brincar com a forma?
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Regra de ouro: dominância, não exclusividade</h3>
          <p>
            Jakobson deixa claro que em todo ato comunicativo estão presentes
            todas as funções em algum grau. O que muda é qual delas é{" "}
            <strong>dominante</strong>. Uma notícia pode ter traços emotivos
            (opinião do repórter) sem deixar de ser predominantemente
            referencial. Uma propaganda pode trazer dados referenciais mas é
            predominantemente conativa. O ENEM pede sempre a função{" "}
            <em>predominante</em>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Casos Complexos</span>

        <h2>10. Dominância e Combinação de Funções</h2>

        <p>
          Textos reais raramente apresentam uma única função. Compreender como
          elas se combinam é o nível avançado exigido pelo ENEM. Veja os
          principais casos de combinação:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Texto</th>
                <th>Função Dominante</th>
                <th>Funções Secundárias</th>
                <th>Justificativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artigo de opinião</td>
                <td>Referencial + Conativa</td>
                <td>Emotiva</td>
                <td>Usa dados para persuadir, mas expressa o ponto de vista do autor</td>
              </tr>
              <tr>
                <td>Slogan publicitário</td>
                <td>Conativa + Poética</td>
                <td>Referencial</td>
                <td>Persuade com linguagem esteticamente elaborada</td>
              </tr>
              <tr>
                <td>Canção popular</td>
                <td>Poética + Emotiva</td>
                <td>Referencial</td>
                <td>Valoriza a forma e expressa sentimento</td>
              </tr>
              <tr>
                <td>Poema metalinguístico</td>
                <td>Metalinguística + Poética</td>
                <td>Emotiva</td>
                <td>Reflete sobre a linguagem com recursos estéticos</td>
              </tr>
              <tr>
                <td>Manual de instruções</td>
                <td>Referencial + Conativa</td>
                <td>Fática</td>
                <td>Informa e direciona ações do receptor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Análise de slogan: "Faz bem, faz Brahma"</h3>
          <p>
            <strong>Função conativa:</strong> direciona o consumidor a associar
            prazer ("faz bem") à marca. <strong>Função poética:</strong>{" "}
            paralelismo sintático ("faz bem / faz Brahma"), rima interna,
            ambiguidade do "bem" (bem-estar e bem como advérbio de modo).{" "}
            <strong>Função referencial mínima:</strong> a marca é nomeada.
            Predominância: <em>conativa</em>, com forte presença poética.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>

        <h2>11. Exemplos e Palavras-chave para o ENEM</h2>

        <p>
          O ENEM utiliza as funções da linguagem em dois contextos principais:
          identificação direta em textos e análise de efeitos de sentido
          produzidos por determinados recursos expressivos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Tipo 1: Identificação direta</h3>
            <p>
              "O trecho acima apresenta predominantemente a função ___ da
              linguagem porque..." — O candidato deve nomear e justificar.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔎</span>
            <h3>Tipo 2: Efeito de sentido</h3>
            <p>
              "O uso do imperativo no anúncio produz o efeito de..." — O
              candidato relaciona a marca linguística à função e ao efeito.
            </p>
          </div>

          <div className="lesson-card">
            <span>🆚</span>
            <h3>Tipo 3: Contraste</h3>
            <p>
              "Compare os dois textos quanto à função da linguagem." — O
              candidato distingue funções em fragmentos diferentes do mesmo
              tema.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Fragmento modelo para análise</h3>
          <p>
            "Você já pensou em quanto tempo passa olhando para uma tela? Suas
            metas merecem mais foco. Instale agora o aplicativo e transforme
            sua rotina."
          </p>
          <p>
            <strong>Análise:</strong> Pergunta retórica envolve o receptor
            ("Você"); "suas metas" usa possessivo da 2ª pessoa; imperativo
            duplo ("Instale", "transforme"); foco total no receptor.{" "}
            <strong>Função predominante: conativa/apelativa.</strong>
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Lista de palavras-chave para reconhecimento rápido</h3>
          <ul>
            <li>
              <strong>Referencial:</strong> "segundo dados", "de acordo com",
              "pesquisa aponta", "estima-se que"
            </li>
            <li>
              <strong>Emotiva:</strong> "sinto", "amo", "detesto", "que
              tristeza!", "jamais esquecerei"
            </li>
            <li>
              <strong>Conativa:</strong> "compre", "venha", "vote", "caro
              leitor", "não perca"
            </li>
            <li>
              <strong>Fática:</strong> "alô?", "tudo bem?", "me ouves?",
              "entendeu?", "tchau"
            </li>
            <li>
              <strong>Metalinguística:</strong> "o termo significa", "a palavra
              vem do", "o poema usa"
            </li>
            <li>
              <strong>Poética:</strong> "como se fosse", metáfora, rima,
              assonância, paralelismo
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Função fática"
          statement={
            <p>
              Em uma ligação telefônica, alguém diz: "Alô? Me ouve? Está
              aí?" Qual função da linguagem está em evidência nesse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Emotiva, pois o emissor expressa ansiedade" },
            { letter: "b", text: "Referencial, pois fornece informações objetivas" },
            { letter: "c", text: "Fática, pois verifica se o canal de comunicação está funcionando", correct: true },
            { letter: "d", text: "Metalinguística, pois fala sobre o código telefônico" },
          ]}
          resolution={
            <p>
              A função fática é centrada no canal. As perguntas "Alô?", "Me
              ouve?", "Está aí?" não transmitem informação relevante — apenas
              testam se o contato está estabelecido e funcionando. Não há
              conteúdo informacional, emotivo ou de persuasão.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Função referencial"
          statement={
            <p>
              "O Amazonas é o maior rio do mundo em volume de água, com uma
              descarga média de 209.000 m³ por segundo." Qual função da
              linguagem predomina nesse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Poética" },
            { letter: "b", text: "Conativa" },
            { letter: "c", text: "Emotiva" },
            { letter: "d", text: "Referencial", correct: true },
          ]}
          resolution={
            <p>
              O trecho apresenta dados objetivos e verificáveis sobre um fato
              do mundo exterior (o Rio Amazonas), usando linguagem denotativa,
              3ª pessoa e vocabulário técnico. Trata-se da função referencial,
              cujo foco é o referente — o objeto sobre o qual se fala.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Função metalinguística"
          statement={
            <p>
              Leia o trecho: "A palavra 'saudade' não encontra equivalente
              exato em outras línguas. Ela designa um sentimento de nostalgia
              mesclado com afeto pelo que está ausente." Qual função da
              linguagem está sendo exercida?
            </p>
          }
          options={[
            { letter: "a", text: "Fática, pois estabelece contato com o leitor" },
            { letter: "b", text: "Metalinguística, pois a linguagem está falando sobre um elemento do próprio código", correct: true },
            { letter: "c", text: "Emotiva, pois descreve um sentimento" },
            { letter: "d", text: "Poética, pois usa linguagem conotativa" },
          ]}
          resolution={
            <p>
              A função metalinguística ocorre quando a linguagem toma como
              objeto a si mesma — ou seja, quando fala sobre o próprio código.
              No trecho, o texto explica o significado e o uso da palavra
              "saudade", usando a linguagem para descrever um elemento da
              própria língua. Isso é metalinguagem por definição.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Publicidade e funções combinadas"
          statement={
            <p>
              Um anúncio de um banco estampava: "Seu futuro é agora. Abra sua
              conta e comece a investir hoje." Assinale a afirmativa correta
              sobre as funções da linguagem presentes nesse anúncio.
            </p>
          }
          options={[
            { letter: "a", text: "Predomina a função referencial, pois fornece informações sobre o banco" },
            { letter: "b", text: "Predomina a função fática, pois estabelece contato com o cliente" },
            { letter: "c", text: "Predomina a função conativa, com presença secundária da poética", correct: true },
            { letter: "d", text: "Predomina a função emotiva, pois o emissor expressa entusiasmo" },
          ]}
          resolution={
            <p>
              A função conativa predomina: os imperativos "Abra" e "comece"
              direcionam a ação do receptor (cliente potencial), e o possessivo
              "Seu" interpela diretamente o destinatário. A função poética é
              secundária: "Seu futuro é agora" é um paradoxo estilístico
              (futuro + presente) que torna a mensagem impactante e memorável.
              Não há emoção do emissor (não é emotiva), nem verificação de
              canal (não é fática).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Função poética em slogan"
          statement={
            <p>
              O slogan "Não é sobre ter, é sobre ser" foi amplamente
              compartilhado nas redes sociais. Sobre a função da linguagem
              dominante e o recurso que a caracteriza, é correto afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "Função referencial; o slogan informa sobre valores materiais e existenciais" },
            { letter: "b", text: "Função poética; o paralelismo sintático e a antítese entre 'ter' e 'ser' constroem o efeito estético", correct: true },
            { letter: "c", text: "Função metalinguística; o texto explica o significado dos verbos 'ter' e 'ser'" },
            { letter: "d", text: "Função fática; o texto pretende manter o contato com o leitor nas redes sociais" },
          ]}
          resolution={
            <p>
              A função poética está centrada na mensagem — na forma como ela é
              construída. O slogan explora o paralelismo sintático ("Não é sobre
              X, é sobre Y"), a antítese filosófica entre os verbos "ter"
              (posse material) e "ser" (identidade existencial) e a estrutura
              concisa que gera impacto. O efeito de sentido depende da forma
              escolhida, não apenas do conteúdo, o que caracteriza
              predominantemente a função poética.
            </p>
          }
        />
      </section>
    </article>
  );
}
