"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 26</span>
          <h1>Quadrinhos, charges, cartuns e tirinhas</h1>
          <p>
            Os quadrinhos em espanhol são um dos gêneros mais ricos para o estudo da língua e da cultura
            hispânica — e uma fonte recorrente de questões no ENEM. Tiras (<em>tiras cómicas</em>), charges
            (<em>caricaturas políticas</em>) e cartuns (<em>viñetas</em>) combinam linguagem verbal e não
            verbal para criar humor, crítica social e ironia. A grande vantagem para o candidato: é possível
            compreender muito do significado mesmo sem dominar todo o vocabulário em espanhol, lendo os
            elementos visuais, a linguagem corporal dos personagens e o contexto cultural. Este capítulo
            desenvolve as estratégias de leitura e os conceitos essenciais para resolver qualquer questão
            com quadrinhos hispânicos no ENEM.
          </p>
        </div>
      </section>

      {/* Seção 1 — Elementos dos quadrinhos */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem dos Quadrinhos</span>
        <h2>Elementos da linguagem dos quadrinhos em espanhol</h2>
        <p>
          Os quadrinhos possuem um código visual-verbal próprio. Conhecer a terminologia em espanhol
          e a função de cada elemento é o primeiro passo para analisar qualquer tira ou charge.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Em espanhol</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quadrinho / Vinheta</td>
                <td><em>viñeta / panel</em></td>
                <td>Unidade mínima da narrativa; uma cena delimitada por bordas</td>
              </tr>
              <tr>
                <td>Balão de fala</td>
                <td><em>globo / bocadillo / burbuja</em></td>
                <td>Indica fala direta de um personagem</td>
              </tr>
              <tr>
                <td>Balão de pensamento</td>
                <td><em>globo de pensamiento</em></td>
                <td>Indica o que o personagem pensa (bordas em nuvem)</td>
              </tr>
              <tr>
                <td>Narrador</td>
                <td><em>cartela / recuadro narrativo</em></td>
                <td>Texto em retângulo no topo/base do quadrinho; voz do narrador</td>
              </tr>
              <tr>
                <td>Onomatopeia</td>
                <td><em>onomatopeya</em></td>
                <td>Som representado graficamente: <em>¡CRASH! ¡ZAS! ¡BOOM!</em></td>
              </tr>
              <tr>
                <td>Elipse temporal</td>
                <td><em>elipsis temporal</em></td>
                <td>O espaço entre quadrinhos — o que o leitor deve inferir</td>
              </tr>
              <tr>
                <td>Linha de ação</td>
                <td><em>línea cinética / líneas de movimiento</em></td>
                <td>Linhas que indicam velocidade ou movimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2 — Tipos de quadrinhos */}
      <section className="lesson-section">
        <span className="section-kicker">Tipologia</span>
        <h2>Cómic, tira, viñeta e caricatura: diferenças</h2>
        <p>
          O vocabulário hispânico para designar os subgêneros dos quadrinhos é rico e específico.
          Confundir esses termos pode gerar erro na interpretação da questão.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Cómic (<em>cómic / historieta</em>)</h3>
            <p>Narrativa longa em quadrinhos; pode ter formato de álbum ou revista. Inclui personagens fixos com arco narrativo.</p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Tira (<em>tira cómica</em>)</h3>
            <p>Sequência curta de 3-5 quadrinhos com humor ou situação do cotidiano. Publicada diariamente em jornais.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Viñeta (<em>viñeta / cartón</em>)</h3>
            <p>Um único quadrinho independente. Pode ser humorístico ou de crítica social/política.</p>
          </div>
          <div className="lesson-card">
            <span>✏️</span>
            <h3>Caricatura (<em>caricatura / carga</em>)</h3>
            <p>Retrato exagerado de personalidade pública com fins satíricos ou críticos. Traços físicos amplificados.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Importante:</strong> em espanhol, <em>carga</em> ou <em>caricatura política</em> equivale
          ao que no Brasil chamamos de "charge". <em>Tira</em> = "tirinha" brasileira. O ENEM usa ambos,
          e as questões podem usar os termos em espanhol — reconhecê-los é essencial.
        </div>
      </section>

      {/* Seção 3 — Autores hispânicos */}
      <section className="lesson-section">
        <span className="section-kicker">Referências Culturais</span>
        <h2>Autores hispânicos de quadrinhos e suas obras</h2>
        <p>
          Conhecer os principais quadrinistas hispânicos ajuda a contextualizar textos que aparecem
          no ENEM e a identificar o tom (humorístico, político, filosófico) de cada obra.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>País</th>
                <th>Obra / Personagem</th>
                <th>Perfil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quino (Joaquín Lavado)</td>
                <td>Argentina</td>
                <td><em>Mafalda</em></td>
                <td>Crítica política e social; personagem questiona o mundo adulto</td>
              </tr>
              <tr>
                <td>Roberto Fontanarrosa</td>
                <td>Argentina</td>
                <td><em>Inodoro Pereyra, Boogie el Aceitoso</em></td>
                <td>Humor político e satírico; linguagem popular argentina</td>
              </tr>
              <tr>
                <td>Forges (Antonio Fraguas)</td>
                <td>Espanha</td>
                <td>Viñetas políticas</td>
                <td>Crítica ao franquismo e à política espanhola contemporânea</td>
              </tr>
              <tr>
                <td>Guillermo Mordillo</td>
                <td>Argentina</td>
                <td>Viñetas sem texto</td>
                <td>Humor visual universal; personagens com nariz avermelhado</td>
              </tr>
              <tr>
                <td>Rius (Eduardo del Río)</td>
                <td>México</td>
                <td><em>Los Supermachos, El ABC del comunismo</em></td>
                <td>Quadrinhos políticos e didáticos de esquerda</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Mafalda no ENEM:</strong> Quino e Mafalda são os autores mais cobrados nas provas de
          espanhol. Mafalda é uma menina argentina dos anos 1960-70 que faz perguntas filosóficas e críticas
          ao mundo adulto, à política e às guerras. Seu tom é irônico e humanista.
        </div>
      </section>

      {/* Seção 4 — Estratégia de leitura */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>Como ler uma tirinha em espanhol sem entender todas as palavras</h2>
        <p>
          Uma das habilidades mais importantes para questões de quadrinhos no ENEM é a leitura
          multimodal: usar a imagem, o contexto e as pistas linguísticas juntos para construir sentido.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👀</span>
            <h3>Leia a sequência visual</h3>
            <p>Observe a progressão dos quadrinhos: o que muda de um para o outro? Qual a situação inicial e o desfecho?</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Interprete a linguagem corporal</h3>
            <p>Expressões faciais, gestos e postura dos personagens revelam emoções sem precisar de texto.</p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Foque nas palavras-chave</h3>
            <p>Mesmo sem entender tudo, identifique substantivos e verbos principais. Conectores (<em>pero, aunque</em>) indicam o giro da narrativa.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Identifique o gatilho do humor</h3>
            <p>Onde está a quebra de expectativa? O humor surge da incongruência: o que o leitor esperava e o que aconteceu.</p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Roteiro de análise de tirinha:</strong>
          <ol>
            <li>Identifique o personagem e o contexto da primeira vinheta.</li>
            <li>Observe a progressão: o que muda a cada quadrinho?</li>
            <li>Identifique o último quadrinho: onde está a surpresa/ironia/crítica?</li>
            <li>Relacione o conteúdo da fala com o que a imagem mostra — a contradição entre os dois pode ser a chave.</li>
            <li>Pergunte: qual é a crítica social ou o comentário sobre a condição humana presente na tira?</li>
          </ol>
        </div>
      </section>

      {/* Seção 5 — Humor por incongruência */}
      <section className="lesson-section">
        <span className="section-kicker">Teoria do Humor</span>
        <h2>Mecanismos de humor: incongruência e ironia visual</h2>
        <p>
          Compreender como funciona o humor nas tirinhas e charges hispânicas é essencial para interpretar
          o sentido do texto — e para evitar o erro de responder literalmente o que o texto diz.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Mecanismos de humor em quadrinhos: incongruência e ironia visual">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            {/* Incongruência */}
            <rect x="30" y="30" width="295" height="150" rx="10" fill="#dbeafe" />
            <text x="177" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">INCONGRUÊNCIA</text>
            <text x="177" y="80" textAnchor="middle" fontSize="11" fill="#1e40af">Expectativa → Quebra de expectativa</text>
            <text x="177" y="100" textAnchor="middle" fontSize="11" fill="#1e40af">O leitor espera X, recebe Y</text>
            <text x="177" y="122" textAnchor="middle" fontSize="10" fill="#3b82f6">Ex: personagem pede silêncio</text>
            <text x="177" y="140" textAnchor="middle" fontSize="10" fill="#3b82f6">mas faz barulho imenso</text>
            <text x="177" y="158" textAnchor="middle" fontSize="10" fill="#3b82f6">→ humor pela contradição</text>
            {/* Ironia visual */}
            <rect x="375" y="30" width="295" height="150" rx="10" fill="#d1fae5" />
            <text x="522" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">IRONIA VISUAL</text>
            <text x="522" y="80" textAnchor="middle" fontSize="11" fill="#065f46">Texto diz A, imagem mostra B</text>
            <text x="522" y="100" textAnchor="middle" fontSize="11" fill="#065f46">O sentido real é o oposto</text>
            <text x="522" y="122" textAnchor="middle" fontSize="10" fill="#10b981">Ex: político discursa sobre</text>
            <text x="522" y="140" textAnchor="middle" fontSize="10" fill="#10b981">honestidade enquanto rouba</text>
            <text x="522" y="158" textAnchor="middle" fontSize="10" fill="#10b981">→ crítica pela contradição</text>
          </svg>
          <figcaption>Dois mecanismos centrais do humor em quadrinhos: incongruência (quebra de expectativa) e ironia visual (texto vs. imagem).</figcaption>
        </figure>
        <div className="lesson-highlight">
          <strong>Ironia em charges políticas:</strong> a caricatura política hispânica frequentemente
          usa ironia — o texto diz algo positivo enquanto a imagem denuncia o oposto. Identificar essa
          contradição entre o verbal e o visual é a habilidade central cobrada pelo ENEM nessas questões.
        </div>
      </section>

      {/* Seção 6 — Vocabulário de balões */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>Interjeições e expressões típicas em balões de fala</h2>
        <p>
          As tirinhas em espanhol usam um vocabulário coloquial e expressivo nos balões. Conhecer as
          interjeições mais comuns evita mal-entendidos na interpretação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão / Interjeição</th>
                <th>Uso / Significado</th>
                <th>Equivalente em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>¡Ay!</em></td>
                <td>Dor, surpresa, lamento</td>
                <td>Ai! / Nossa!</td>
              </tr>
              <tr>
                <td><em>¡Vaya!</em></td>
                <td>Surpresa, ironia, decepção</td>
                <td>Ora! / Nossa! / Que dizer...</td>
              </tr>
              <tr>
                <td><em>¡Genial!</em></td>
                <td>Entusiasmo, aprovação</td>
                <td>Ótimo! / Que ideia!</td>
              </tr>
              <tr>
                <td><em>¡No puede ser!</em></td>
                <td>Incredulidade, espanto</td>
                <td>Não acredito! / Impossível!</td>
              </tr>
              <tr>
                <td><em>¡Qué vergüenza!</em></td>
                <td>Vergonha, constrangimento</td>
                <td>Que vergonha! / Que situação!</td>
              </tr>
              <tr>
                <td><em>¡Anda ya!</em></td>
                <td>Incredulidade, rejeição</td>
                <td>Que nada! / Vai embora! / Não acredito!</td>
              </tr>
              <tr>
                <td><em>¡Madre mía!</em></td>
                <td>Espanto, susto</td>
                <td>Meu Deus! / Nossa senhora!</td>
              </tr>
              <tr>
                <td><em>¡Hombre!</em></td>
                <td>Surpresa, apelação afetiva</td>
                <td>Cara! / Ora! / Ô amigo!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 7 — Crítica social em charges */}
      <section className="lesson-section">
        <span className="section-kicker">Dimensão Social</span>
        <h2>Crítica social em charges hispânicas</h2>
        <p>
          A charge hispânica (<em>caricatura política</em>) usa exagero, ironia e símbolos culturais
          para denunciar problemas sociais e políticos. Para interpretá-la corretamente, é necessário
          conhecer o contexto histórico e cultural ao qual ela se refere.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Crítica política</h3>
            <p>Corrupção, nepotismo, promessas vazias de políticos. Recurso comum: exagerar traços físicos do alvo da crítica.</p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Crítica econômica</h3>
            <p>Desigualdade, inflação, exploração do trabalhador. Charges usam símbolos como dinheiro, tesouras (cortes) e balanças desequilibradas.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Crítica ambiental</h3>
            <p>Desmatamento, poluição, inação climática. Personagens como árvores chorando ou o planeta com febre são recorrentes.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Crítica aos costumes</h3>
            <p>Uso excessivo de tecnologia, isolamento social, velocidade da vida moderna. Mafalda é mestre nesse tipo de crítica.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Contexto cultural obrigatório:</strong> charges hispânicas sobre política frequentemente
          requerem conhecimento do contexto (ditaduras latino-americanas, eleições, crises econômicas).
          O ENEM sempre fornece esse contexto no enunciado — leia-o com atenção antes de analisar a charge.
        </div>
      </section>

      {/* Seção 8 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Vocabulário de quadrinhos"
          statement={
            <p>
              Em uma tirinha em espanhol, um balão com bordas em forma de nuvem (em vez de bordas lisas)
              saindo da cabeça de um personagem indica que:
            </p>
          }
          options={[
            { letter: "a", text: "O personagem está falando em voz alta para todos ouvirem." },
            { letter: "b", text: "O personagem está pensando algo, não falando em voz alta.", correct: true },
            { letter: "c", text: "O personagem está sonhando acordado e está inconsciente." },
            { letter: "d", text: "O texto dentro do balão é uma narração externa ao personagem." },
          ]}
          resolution={
            <p>
              Em espanhol, esse elemento é chamado de <em>globo de pensamiento</em> (balão de pensamento).
              As bordas em nuvem (ao contrário do balão de fala, que tem borda lisa e cauda apontando para
              a boca do personagem) indicam o pensamento interno. A narração externa usa um retângulo
              (<em>cartela</em>), não um balão.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ironia visual em charge"
          statement={
            <p>
              Uma charge mostra um político subindo ao palanque com uma faixa que diz
              <em>"Combatimos la corrupción"</em>. Na última vinheta, ele discursa enquanto nos bolsos
              do terno aparecem notas de dinheiro caindo. A função da imagem das notas de dinheiro é:
            </p>
          }
          options={[
            { letter: "a", text: "Mostrar que o político é bem remunerado pelo seu trabalho honesto." },
            { letter: "b", text: "Indicar que o político está distribuindo dinheiro ao povo como prometido." },
            { letter: "c", text: "Criar ironia visual: contradiz o discurso verbal do político, denunciando corrupção.", correct: true },
            { letter: "d", text: "Ilustrar literalmente o slogan da campanha contra a corrupção." },
          ]}
          resolution={
            <p>
              A charge usa ironia visual clássica: o texto verbal (<em>"Combatimos la corrupción"</em>)
              afirma uma coisa, mas a imagem (dinheiro nos bolsos) denuncia o oposto. Essa contradição
              entre o que é dito e o que é mostrado é o mecanismo central da crítica política nos
              quadrinhos hispânicos. A charge não afirma diretamente a corrupção — ela deixa que o
              leitor chegue a essa conclusão pela incongruência.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mafalda e crítica social"
          statement={
            <p>
              Em uma tira de Quino, Mafalda olha para a TV e diz:
              <em>"¿Por qué cuando dicen 'el mundo' siempre hablan de guerras, hambre y problemas...
              y nunca de los chicos que todavía tenemos esperanza?"</em>
              O efeito crítico da fala de Mafalda é construído principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "O uso de hipérbole para exagerar os problemas noticiados na televisão." },
            { letter: "b", text: "A contradição entre a visão pessimista da mídia e a perspectiva esperançosa da infância, revelando uma crítica ao discurso adulto.", correct: true },
            { letter: "c", text: "A ironia visual: a imagem da TV contradiz a fala de Mafalda." },
            { letter: "d", text: "O uso de interjeições que revelam a ingenuidade infantil de Mafalda sem intenção crítica." },
          ]}
          resolution={
            <p>
              A crítica de Mafalda é construída pela oposição entre dois discursos: o da mídia adulta
              (guerras, fome, problemas) e o da criança que ainda tem esperança. Mafalda usa a lógica
              infantil para questionar o que os adultos consideram "o mundo" — revelando que essa
              visão é parcial e pessimista. Quino usa frequentemente esse recurso: a voz da criança
              desnuda as contradições do mundo adulto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Elipse temporal e inferência"
          statement={
            <p>
              Em uma tira com quatro vinhetas: (1) um homem planta uma semente; (2) um espaço vazio
              com apenas três pontinhos (...); (3) uma árvore adulta e frondosa; (4) o homem idoso
              sentado à sombra da árvore sorrindo. O que o leitor deve inferir sobre a segunda vinheta?
            </p>
          }
          options={[
            { letter: "a", text: "A segunda vinheta é um erro de impressão e deve ser ignorada." },
            { letter: "b", text: "Os três pontos indicam que o personagem esqueceu o que estava fazendo." },
            { letter: "c", text: "A segunda vinheta representa a elipse temporal: o passar de muitos anos que o leitor completa mentalmente.", correct: true },
            { letter: "d", text: "Os três pontos representam uma onomatopeia que indica silêncio absoluto." },
          ]}
          resolution={
            <p>
              Em espanhol, o espaço entre vinhetas é chamado de <em>elipsis temporal</em> — a lacuna
              narrativa que o leitor preenche com sua imaginação. Os três pontinhos (...) reforçam
              visualmente a ideia de tempo passando. A tira não narra os anos de crescimento da árvore:
              ela os <em>elide</em> (omite) e permite que o leitor os construa mentalmente. Esse é um
              dos recursos mais sofisticados da linguagem dos quadrinhos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Interjeição e tom emocional"
          statement={
            <p>
              Em uma tirinha cômica, um personagem descobre que comeu o jantar que era para o chefe
              e exclama: <em>"¡Madre mía! ¡No puede ser! ¡Qué vergüenza!"</em>
              Qual das afirmativas descreve corretamente o estado emocional do personagem com base
              nas interjeições usadas?
            </p>
          }
          options={[
            { letter: "a", text: "Alívio e satisfação por ter terminado o jantar sem perceber o erro." },
            { letter: "b", text: "Espanto, incredulidade e constrangimento diante do que fez.", correct: true },
            { letter: "c", text: "Raiva e indignação com o chefe por ter deixado a comida no lugar errado." },
            { letter: "d", text: "Humor e descontração, pois o personagem acha a situação engraçada." },
          ]}
          resolution={
            <p>
              <em>¡Madre mía!</em> = espanto/susto; <em>¡No puede ser!</em> = incredulidade (não consigo
              acreditar); <em>¡Qué vergüenza!</em> = constrangimento/vergonha. A sequência das três
              interjeições revela uma reação em escalonamento: primeiro o susto ao perceber, depois a
              incredulidade, depois a vergonha pelo erro. Não há raiva (o personagem é o culpado) nem
              alívio nem humor declarado.
            </p>
          }
        />
      </section>
    </article>
  );
}
