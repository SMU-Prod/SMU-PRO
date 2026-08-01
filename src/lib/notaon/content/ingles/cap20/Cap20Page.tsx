"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 20</span>
          <h1>Phrasal Verbs e Expressões Idiomáticas</h1>
          <p>
            Os <strong>phrasal verbs</strong> são combinações de verbo + partícula (preposição ou
            advérbio) que formam um novo significado, muitas vezes completamente diferente do verbo
            original. Junto com as <strong>expressões idiomáticas</strong>, eles estão presentes em
            praticamente todos os textos autênticos em inglês — artigos, notícias, anúncios,
            entrevistas — e são recorrentes nas provas do ENEM. Compreendê-los pelo contexto, sem
            precisar traduzir palavra por palavra, é a habilidade central deste capítulo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. O que é um Phrasal Verb?</h2>

        <p>
          Um <strong>phrasal verb</strong> (verbo frasal) é formado por um verbo base seguido de
          uma ou mais partículas — uma preposição, um advérbio ou ambos. O resultado é uma unidade
          semântica nova: o significado do conjunto <em>não é</em> a soma das partes.
        </p>

        {/* SVG 1 — Decomposição visual do phrasal verb */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama de formação de phrasal verbs">
            {/* fundo */}
            <rect width="700" height="260" rx="14" fill="#f0f4ff" />

            {/* caixa VERBO */}
            <rect x="30" y="90" width="160" height="60" rx="10" fill="#4f46e5" />
            <text x="110" y="116" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">VERBO BASE</text>
            <text x="110" y="135" textAnchor="middle" fill="#c7d2fe" fontSize="15" fontStyle="italic">give</text>

            {/* sinal + */}
            <text x="215" y="128" textAnchor="middle" fill="#6b7280" fontSize="28" fontWeight="bold">+</text>

            {/* caixa PARTÍCULA */}
            <rect x="240" y="90" width="160" height="60" rx="10" fill="#0891b2" />
            <text x="320" y="116" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">PARTÍCULA</text>
            <text x="320" y="135" textAnchor="middle" fill="#cffafe" fontSize="15" fontStyle="italic">up</text>

            {/* sinal = */}
            <text x="425" y="128" textAnchor="middle" fill="#6b7280" fontSize="28" fontWeight="bold">=</text>

            {/* caixa NOVO SIGNIFICADO */}
            <rect x="450" y="80" width="220" height="80" rx="10" fill="#059669" />
            <text x="560" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">NOVO SIGNIFICADO</text>
            <text x="560" y="130" textAnchor="middle" fill="#d1fae5" fontSize="15" fontStyle="italic">give up</text>
            <text x="560" y="150" textAnchor="middle" fill="#a7f3d0" fontSize="12">= desistir</text>

            {/* linha separadora */}
            <line x1="30" y1="185" x2="670" y2="185" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" />

            {/* exemplos adicionais */}
            <text x="50" y="210" fill="#1f2937" fontSize="12" fontWeight="bold">Mais exemplos:</text>
            <text x="50" y="230" fill="#4f46e5" fontSize="12" fontStyle="italic">look + up</text>
            <text x="140" y="230" fill="#374151" fontSize="12">= pesquisar</text>
            <text x="260" y="230" fill="#4f46e5" fontSize="12" fontStyle="italic">find + out</text>
            <text x="360" y="230" fill="#374151" fontSize="12">= descobrir</text>
            <text x="470" y="230" fill="#4f46e5" fontSize="12" fontStyle="italic">carry + out</text>
            <text x="575" y="230" fill="#374151" fontSize="12">= executar</text>

            {/* título */}
            <text x="350" y="50" textAnchor="middle" fill="#1e1b4b" fontSize="16" fontWeight="bold">Formação do Phrasal Verb</text>
            <text x="350" y="70" textAnchor="middle" fill="#6366f1" fontSize="12">verbo + partícula → novo significado</text>
          </svg>
          <figcaption>Diagrama: verbo base + partícula formam um novo significado — o phrasal verb.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> Nunca tente traduzir um phrasal verb palavra por palavra.
          <em> "Give up"</em> não é "dar para cima" — é <strong>desistir</strong>.
          <em> "Look up"</em> não é "olhar para cima" — é <strong>pesquisar/consultar</strong>.
          O contexto é o seu melhor aliado.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Verbo + Preposição</h3>
            <p>
              <em>look into</em> (investigar), <em>deal with</em> (lidar com),
              <em>care for</em> (cuidar de). A preposição une o verbo ao objeto.
            </p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Verbo + Advérbio</h3>
            <p>
              <em>give up</em> (desistir), <em>stand out</em> (destacar-se),
              <em>break down</em> (quebrar/colapsar). O advérbio modifica o verbo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Verbo + Adv + Prep</h3>
            <p>
              <em>come up with</em> (criar/propor), <em>look forward to</em> (ansiar por),
              <em>run out of</em> (ficar sem). Dois elementos após o verbo.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática</span>
        <h2>2. Phrasal Verbs Separáveis vs Inseparáveis</h2>

        <p>
          Uma das distinções mais importantes na gramática dos phrasal verbs é a capacidade de
          separar (ou não) o verbo da partícula quando há um objeto. Compreender essa diferença
          ajuda na leitura, pois o objeto pode aparecer em posições diferentes na frase.
        </p>

        {/* SVG 2 — Separável vs Inseparável */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama separável vs inseparável">
            <rect width="700" height="300" rx="14" fill="#fafafa" />

            {/* título */}
            <text x="350" y="35" textAnchor="middle" fill="#1f2937" fontSize="16" fontWeight="bold">Separável × Inseparável</text>

            {/* coluna SEPARÁVEL */}
            <rect x="30" y="55" width="300" height="230" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
            <text x="180" y="80" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="bold">✂ SEPARÁVEL</text>
            <text x="180" y="100" textAnchor="middle" fill="#3b82f6" fontSize="11">o objeto PODE ficar entre verbo e partícula</text>

            {/* seta SEPARÁVEL — objeto depois */}
            <text x="50" y="130" fill="#374151" fontSize="12" fontWeight="bold">Objeto depois:</text>
            <rect x="50" y="138" width="260" height="28" rx="6" fill="#dbeafe" />
            <text x="180" y="157" textAnchor="middle" fill="#1e40af" fontSize="12" fontStyle="italic">turn down the offer</text>

            {/* seta SEPARÁVEL — objeto no meio */}
            <text x="50" y="190" fill="#374151" fontSize="12" fontWeight="bold">Objeto no meio (pronome obrigatório):</text>
            <rect x="50" y="198" width="260" height="28" rx="6" fill="#bfdbfe" />
            <text x="180" y="217" textAnchor="middle" fill="#1e40af" fontSize="12" fontStyle="italic">turn it down ✓</text>

            <text x="50" y="248" fill="#dc2626" fontSize="12">✗ turn down it (pronome nunca vai depois)</text>

            <text x="50" y="270" fill="#6b7280" fontSize="11" fontStyle="italic">Outros: give up, put off, call off, fill in…</text>

            {/* coluna INSEPARÁVEL */}
            <rect x="370" y="55" width="300" height="230" rx="10" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="1.5" />
            <text x="520" y="80" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="bold">🔒 INSEPARÁVEL</text>
            <text x="520" y="100" textAnchor="middle" fill="#8b5cf6" fontSize="11">o objeto SEMPRE fica depois da partícula</text>

            {/* inseparável correto */}
            <text x="390" y="130" fill="#374151" fontSize="12" fontWeight="bold">Posição correta:</text>
            <rect x="390" y="138" width="260" height="28" rx="6" fill="#ede9fe" />
            <text x="520" y="157" textAnchor="middle" fill="#6d28d9" fontSize="12" fontStyle="italic">look into the problem ✓</text>

            {/* inseparável errado */}
            <text x="390" y="190" fill="#374151" fontSize="12" fontWeight="bold">Posição incorreta:</text>
            <rect x="390" y="198" width="260" height="28" rx="6" fill="#fce7f3" />
            <text x="520" y="217" textAnchor="middle" fill="#be185d" fontSize="12" fontStyle="italic">✗ look the problem into</text>

            <text x="390" y="248" fill="#6b7280" fontSize="11">Pronome também vai depois:</text>
            <text x="390" y="265" fill="#7c3aed" fontSize="11" fontStyle="italic">look into it ✓</text>
            <text x="390" y="280" fill="#6b7280" fontSize="11" fontStyle="italic">Outros: deal with, look into, run out of…</text>
          </svg>
          <figcaption>Separáveis: objeto pode ficar entre o verbo e a partícula (pronome obrigatório no meio). Inseparáveis: objeto sempre depois da partícula.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Phrasal Verb</th>
                <th>Objeto depois</th>
                <th>Objeto no meio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Separável</strong></td>
                <td><em>put off</em> (adiar)</td>
                <td><em>put off the meeting</em> ✓</td>
                <td><em>put it off</em> ✓</td>
              </tr>
              <tr>
                <td><strong>Separável</strong></td>
                <td><em>hand out</em> (distribuir)</td>
                <td><em>hand out the papers</em> ✓</td>
                <td><em>hand them out</em> ✓</td>
              </tr>
              <tr>
                <td><strong>Inseparável</strong></td>
                <td><em>deal with</em> (lidar com)</td>
                <td><em>deal with the issue</em> ✓</td>
                <td><em>deal the issue with</em> ✗</td>
              </tr>
              <tr>
                <td><strong>Inseparável</strong></td>
                <td><em>run out of</em> (ficar sem)</td>
                <td><em>run out of time</em> ✓</td>
                <td><em>run time out of</em> ✗</td>
              </tr>
              <tr>
                <td><strong>Sem objeto</strong></td>
                <td><em>stand out</em> (destacar-se)</td>
                <td colSpan={2} style={{textAlign:"center"}}>Não tem objeto — intransitivo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica de leitura:</strong> No ENEM, o que importa é entender o <em>significado</em>,
          não classificar o tipo. Foque no contexto da frase e no significado geral do phrasal verb.
          A separabilidade é mais relevante na produção escrita.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Essencial</span>
        <h2>3. Phrasal Verbs mais Frequentes: Give, Take, Look, Come</h2>

        <p>
          Os verbos <strong>give</strong>, <strong>take</strong>, <strong>look</strong> e{" "}
          <strong>come</strong> são quatro dos verbos mais produtivos em phrasal verbs do inglês.
          Cada um gera múltiplas combinações com significados distintos — todos frequentes nos
          textos do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Phrasal Verb</th>
                <th>Significado</th>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>give up</strong></td>
                <td>desistir</td>
                <td><em>She never gave up on her dream.</em></td>
                <td>Ela nunca desistiu do seu sonho.</td>
              </tr>
              <tr>
                <td><strong>give in</strong></td>
                <td>ceder / render-se</td>
                <td><em>He gave in to the pressure.</em></td>
                <td>Ele cedeu à pressão.</td>
              </tr>
              <tr>
                <td><strong>take care of</strong></td>
                <td>cuidar de</td>
                <td><em>We must take care of the environment.</em></td>
                <td>Devemos cuidar do meio ambiente.</td>
              </tr>
              <tr>
                <td><strong>take part in</strong></td>
                <td>participar de</td>
                <td><em>Students took part in the protest.</em></td>
                <td>Estudantes participaram do protesto.</td>
              </tr>
              <tr>
                <td><strong>take over</strong></td>
                <td>assumir o controle</td>
                <td><em>The new CEO took over the company.</em></td>
                <td>O novo CEO assumiu a empresa.</td>
              </tr>
              <tr>
                <td><strong>look up</strong></td>
                <td>pesquisar / consultar</td>
                <td><em>Look up the word in a dictionary.</em></td>
                <td>Pesquise a palavra no dicionário.</td>
              </tr>
              <tr>
                <td><strong>look into</strong></td>
                <td>investigar / examinar</td>
                <td><em>The police looked into the case.</em></td>
                <td>A polícia investigou o caso.</td>
              </tr>
              <tr>
                <td><strong>look forward to</strong></td>
                <td>ansiar por / aguardar</td>
                <td><em>I look forward to hearing from you.</em></td>
                <td>Aguardo seu retorno com ansiedade.</td>
              </tr>
              <tr>
                <td><strong>come up with</strong></td>
                <td>propor / criar / elaborar</td>
                <td><em>Scientists came up with a new solution.</em></td>
                <td>Cientistas elaboraram uma nova solução.</td>
              </tr>
              <tr>
                <td><strong>come across</strong></td>
                <td>encontrar / dar a impressão</td>
                <td><em>She came across an interesting article.</em></td>
                <td>Ela encontrou um artigo interessante.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>give up vs give in</h3>
            <p>
              <em>Give up</em> = desistir de algo completamente.
              <em> Give in</em> = ceder à pressão de alguém.
              Contexto determina qual está sendo usado.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>look up vs look into</h3>
            <p>
              <em>Look up</em> = buscar informação rapidamente.
              <em> Look into</em> = investigar em profundidade.
              A partícula muda a intensidade da ação.
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>come up with</h3>
            <p>
              Um dos phrasal verbs mais cobrados no ENEM em textos de ciência e
              inovação. Significa criar, propor ou elaborar uma ideia ou solução.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Essencial</span>
        <h2>4. Phrasal Verbs mais Frequentes: Put, Turn, Set, Break, Run</h2>

        <p>
          O segundo grupo de verbos de alta produtividade inclui <strong>put</strong>,{" "}
          <strong>turn</strong>, <strong>set</strong>, <strong>break</strong> e{" "}
          <strong>run</strong>. Eles aparecem principalmente em textos narrativos, notícias e
          artigos de opinião — todos gêneros recorrentes no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Phrasal Verb</th>
                <th>Significado</th>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>put off</strong></td>
                <td>adiar</td>
                <td><em>They put off the meeting until Friday.</em></td>
                <td>Eles adiaram a reunião para sexta.</td>
              </tr>
              <tr>
                <td><strong>turn down</strong></td>
                <td>recusar / rejeitar</td>
                <td><em>She turned down the job offer.</em></td>
                <td>Ela recusou a oferta de emprego.</td>
              </tr>
              <tr>
                <td><strong>turn out</strong></td>
                <td>revelar-se / resultar</td>
                <td><em>It turned out to be a great idea.</em></td>
                <td>Revelou-se uma ótima ideia.</td>
              </tr>
              <tr>
                <td><strong>set up</strong></td>
                <td>estabelecer / montar / criar</td>
                <td><em>They set up a new research center.</em></td>
                <td>Eles criaram um novo centro de pesquisa.</td>
              </tr>
              <tr>
                <td><strong>break down</strong></td>
                <td>quebrar / colapsar / decompor</td>
                <td><em>The car broke down on the highway.</em></td>
                <td>O carro quebrou na rodovia.</td>
              </tr>
              <tr>
                <td><strong>break out</strong></td>
                <td>eclodir / escapar</td>
                <td><em>A conflict broke out in the region.</em></td>
                <td>Um conflito eclodiu na região.</td>
              </tr>
              <tr>
                <td><strong>run out of</strong></td>
                <td>ficar sem</td>
                <td><em>The country ran out of natural resources.</em></td>
                <td>O país ficou sem recursos naturais.</td>
              </tr>
              <tr>
                <td><strong>go ahead</strong></td>
                <td>prosseguir / avançar</td>
                <td><em>The project went ahead despite the delays.</em></td>
                <td>O projeto prosseguiu apesar dos atrasos.</td>
              </tr>
              <tr>
                <td><strong>go through</strong></td>
                <td>passar por / vivenciar</td>
                <td><em>The community went through a crisis.</em></td>
                <td>A comunidade passou por uma crise.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção ao contexto:</strong> <em>Break down</em> pode significar "quebrar"
          (um carro), "colapsar" (um sistema), "decompor" (substâncias em química) ou até
          "entrar em colapso emocional". O significado exato depende sempre do contexto.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏰</span>
            <h3>put off (adiar)</h3>
            <p>
              <em>"The summit was put off due to the pandemic."</em> — Frequente em textos
              jornalísticos do ENEM sobre eventos adiados ou cancelados.
            </p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>turn down (recusar)</h3>
            <p>
              <em>"The committee turned down the proposal."</em> — Aparece em textos
              argumentativos sobre decisões políticas e científicas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>set up (criar/montar)</h3>
            <p>
              <em>"NGOs set up shelters for refugees."</em> — Comum em textos sobre
              iniciativas sociais, tecnológicas e ambientais.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Essencial</span>
        <h2>5. Phrasal Verbs mais Frequentes: Carry, Point, Find, Bring, Make</h2>

        <p>
          O terceiro grupo traz phrasal verbs muito frequentes em textos acadêmicos, de divulgação
          científica e de opinião — exatamente os gêneros que dominam as provas de inglês do ENEM.
          Preste atenção especial a <em>carry out</em>, <em>point out</em> e <em>find out</em>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>carry out (executar)</h3>
            <p>
              Realizar, executar, conduzir — especialmente pesquisas e experimentos.
              <em> "Scientists carried out a study on climate change."</em>
              (Cientistas conduziram um estudo sobre mudança climática.)
            </p>
          </div>
          <div className="lesson-card">
            <span>👆</span>
            <h3>point out (apontar)</h3>
            <p>
              Destacar, chamar atenção para algo importante.
              <em> "The report pointed out the main risks."</em>
              (O relatório apontou os principais riscos.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>find out (descobrir)</h3>
            <p>
              Descobrir, obter informação nova.
              <em> "Researchers found out that stress affects memory."</em>
              (Pesquisadores descobriram que o estresse afeta a memória.)
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>bring about (causar)</h3>
            <p>
              Causar, provocar, originar uma mudança ou situação.
              <em> "Technology brought about major social changes."</em>
              (A tecnologia causou grandes mudanças sociais.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>make up (inventar/compor)</h3>
            <p>
              Inventar uma história: <em>"He made up an excuse."</em> (Ele inventou uma desculpa.)
              Ou compor: <em>"Women make up 52% of the population."</em>
              (Mulheres compõem 52% da população.)
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>make sure (certificar-se)</h3>
            <p>
              Garantir, ter certeza de que algo aconteça.
              <em> "Make sure you read the instructions carefully."</em>
              (Certifique-se de ler as instruções com cuidado.)
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Phrasal Verb</th>
                <th>Significado</th>
                <th>Uso típico no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>carry out</strong></td>
                <td>executar / realizar / conduzir</td>
                <td>Textos científicos: <em>"a study was carried out"</em></td>
              </tr>
              <tr>
                <td><strong>point out</strong></td>
                <td>apontar / destacar</td>
                <td>Textos argumentativos: <em>"the author points out that..."</em></td>
              </tr>
              <tr>
                <td><strong>find out</strong></td>
                <td>descobrir / apurar</td>
                <td>Notícias: <em>"investigators found out..."</em></td>
              </tr>
              <tr>
                <td><strong>bring about</strong></td>
                <td>causar / provocar</td>
                <td>Ensaios: <em>"industrialization brought about..."</em></td>
              </tr>
              <tr>
                <td><strong>make up</strong></td>
                <td>inventar / compor / constituir</td>
                <td>Estatísticas: <em>"they make up 30% of..."</em></td>
              </tr>
              <tr>
                <td><strong>keep up with</strong></td>
                <td>acompanhar / manter o ritmo</td>
                <td>Tecnologia: <em>"it's hard to keep up with changes"</em></td>
              </tr>
              <tr>
                <td><strong>rule out</strong></td>
                <td>descartar / excluir</td>
                <td>Ciência: <em>"the hypothesis was ruled out"</em></td>
              </tr>
              <tr>
                <td><strong>stand out</strong></td>
                <td>destacar-se / sobressair</td>
                <td>Perfis: <em>"her leadership made her stand out"</em></td>
              </tr>
              <tr>
                <td><strong>deal with</strong></td>
                <td>lidar com / tratar de</td>
                <td>Argumentação: <em>"governments must deal with inequality"</em></td>
              </tr>
              <tr>
                <td><strong>call off</strong></td>
                <td>cancelar</td>
                <td>Eventos: <em>"the event was called off"</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Leitura</span>
        <h2>6. Como Deduzir Phrasal Verbs Desconhecidos</h2>

        <p>
          Mesmo que você não conheça um phrasal verb específico, há estratégias eficazes para
          deduzir seu significado durante a prova. O ENEM não exige memorização exaustiva — exige
          inteligência contextual.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Use o contexto imediato</h3>
            <p>
              Leia a frase antes e depois. O contexto quase sempre revela o significado geral,
              mesmo que você não conheça as palavras exatas.
              <em> "After years of struggle, she finally gave up."</em> — "struggle" e "finally"
              indicam que algo terminou: desistiu.
            </p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Analise a partícula</h3>
            <p>
              Partículas têm tendências de significado: <em>up/out</em> → completude ou término;
              <em> down</em> → redução ou rejeição; <em>in/into</em> → investigação ou entrada;
              <em> off</em> → separação ou cancelamento.
            </p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Identifique o verbo base</h3>
            <p>
              O significado do verbo base pode orientar. <em>Find out</em> — "find" sugere
              localizar algo → descobrir faz sentido. <em>Bring about</em> — "bring" sugere
              trazer → trazer à existência → causar.
            </p>
          </div>
          <div className="lesson-card">
            <span>4️⃣</span>
            <h3>Verifique os sinônimos no texto</h3>
            <p>
              Textos acadêmicos frequentemente repetem ideias com palavras diferentes.
              Se o phrasal verb aparece ao lado de um sinônimo ou paráfrase, use esse
              paralelo para confirmar o significado.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Passo a passo para phrasal verb desconhecido:</strong>
          <br /><br />
          1. Leia a frase completa — ignore o phrasal verb temporariamente.<br />
          2. Identifique o <strong>tema geral</strong> do parágrafo.<br />
          3. Pense: qual ação faz sentido nesse contexto?<br />
          4. Analise o verbo base e a(s) partícula(s).<br />
          5. Escolha a alternativa do ENEM que melhor se alinha ao contexto.
        </div>

        <div className="lesson-highlight">
          <strong>Exemplo prático:</strong> <em>"The government decided to phase out coal power
          plants by 2035."</em> — Mesmo sem conhecer <em>phase out</em>, "coal power plants",
          "by 2035" e o contexto ambiental sugerem uma ação de eliminação gradual. A partícula
          <em> out</em> reforça a ideia de término. Significado: <strong>eliminar gradualmente</strong>.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Expressões Idiomáticas</span>
        <h2>7. Expressões Idiomáticas Essenciais</h2>

        <p>
          As <strong>expressões idiomáticas</strong> (idioms) são frases cujo significado não
          pode ser deduzido pela tradução literal de cada palavra. Elas são culturalmente
          arraigadas e aparecem com frequência em textos jornalísticos, literários e de humor
          no ENEM. A chave é sempre o contexto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧊</span>
            <h3>break the ice</h3>
            <p>
              Literalmente: "quebrar o gelo". Significado real: <strong>quebrar o gelo</strong> —
              iniciar uma conversa ou aliviar o constrangimento em uma situação social.
              <em> "He told a joke to break the ice."</em> (Ele contou uma piada para quebrar o gelo.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🎂</span>
            <h3>piece of cake</h3>
            <p>
              Literalmente: "pedaço de bolo". Significado real: <strong>moleza / coisa fácil</strong>.
              <em> "The exam was a piece of cake for her."</em>
              (A prova foi moleza para ela.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🔨</span>
            <h3>hit the nail on the head</h3>
            <p>
              Literalmente: "acertar o prego na cabeça". Significado real: <strong>acertar em cheio</strong>.
              <em> "Your analysis hit the nail on the head."</em>
              (Sua análise acertou em cheio.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>under the weather</h3>
            <p>
              Literalmente: "sob o tempo". Significado real: <strong>mal-disposto / doente</strong>.
              <em> "She felt under the weather and stayed home."</em>
              (Ela estava mal-disposta e ficou em casa.)
            </p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>in the long run</h3>
            <p>
              Literalmente: "na corrida longa". Significado real: <strong>a longo prazo</strong>.
              <em> "Renewable energy pays off in the long run."</em>
              (Energia renovável compensa a longo prazo.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🌙</span>
            <h3>once in a blue moon</h3>
            <p>
              Literalmente: "uma vez em uma lua azul". Significado real: <strong>raramente</strong>.
              <em> "He visits his hometown once in a blue moon."</em>
              (Ele visita sua cidade natal raramente.)
            </p>
          </div>
          <div className="lesson-card">
            <span>🏔️</span>
            <h3>tip of the iceberg</h3>
            <p>
              Literalmente: "ponta do iceberg". Significado real: <strong>a ponta do iceberg</strong>
              — algo que indica um problema muito maior.
              <em> "That scandal was just the tip of the iceberg."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>💪</span>
            <h3>bite the bullet</h3>
            <p>
              Literalmente: "morder a bala". Significado real: <strong>aguentar firme</strong> /
              suportar algo difícil com coragem.
              <em> "You'll have to bite the bullet and face the consequences."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>cut corners</h3>
            <p>
              Literalmente: "cortar cantos". Significado real: <strong>economizar esforço /
              fazer de qualquer jeito</strong> — pulando etapas importantes.
              <em> "They cut corners during construction, causing accidents."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🚀</span>
            <h3>go the extra mile</h3>
            <p>
              Literalmente: "ir a milha extra". Significado real: <strong>fazer mais do
              necessário / esforçar-se além</strong>.
              <em> "Good teachers always go the extra mile for students."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>beat around the bush</h3>
            <p>
              Literalmente: "bater ao redor do arbusto". Significado real: <strong>enrolar /
              não ir direto ao ponto</strong>.
              <em> "Stop beating around the bush and give me a direct answer."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>😈</span>
            <h3>speak of the devil</h3>
            <p>
              Literalmente: "falando do diabo". Significado real: <strong>falando no diabo</strong>
              — quando alguém aparece exatamente quando estava sendo mencionado.
              <em> "Speak of the devil — here comes João!"</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>No ENEM:</strong> As expressões idiomáticas geralmente aparecem em textos
          literários, crônicas ou matérias de revista. O examinador costuma testar se o aluno
          consegue <em>não</em> cair na armadilha da tradução literal e identifica o verdadeiro
          sentido pelo contexto.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>8. Expressões Idiomáticas em Contexto</h2>

        <p>
          Veja como as expressões idiomáticas aparecem em trechos autênticos, semelhantes aos
          usados no ENEM. O contexto sempre revela o sentido — mesmo sem conhecer a expressão
          de antemão.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão</th>
                <th>Trecho contextualizado</th>
                <th>Significado no contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>in the long run</strong></td>
                <td><em>"Investing in education is costly now, but in the long run it benefits the whole society."</em></td>
                <td>A longo prazo — o benefício virá no futuro distante.</td>
              </tr>
              <tr>
                <td><strong>tip of the iceberg</strong></td>
                <td><em>"The reported cases of corruption are just the tip of the iceberg."</em></td>
                <td>A situação real é muito pior do que o que aparece.</td>
              </tr>
              <tr>
                <td><strong>cut corners</strong></td>
                <td><em>"Factories that cut corners on safety put workers at risk."</em></td>
                <td>Fábricas que economizam (pulam etapas de segurança) colocam trabalhadores em risco.</td>
              </tr>
              <tr>
                <td><strong>go the extra mile</strong></td>
                <td><em>"This NGO goes the extra mile to support families in poverty."</em></td>
                <td>A ONG faz mais do que o obrigatório para ajudar.</td>
              </tr>
              <tr>
                <td><strong>once in a blue moon</strong></td>
                <td><em>"Such genuine political reforms happen only once in a blue moon."</em></td>
                <td>Reformas políticas genuínas acontecem muito raramente.</td>
              </tr>
              <tr>
                <td><strong>on the other hand</strong></td>
                <td><em>"Social media connects people; on the other hand, it spreads misinformation."</em></td>
                <td>Por outro lado — introduz contraste ou contraponto.</td>
              </tr>
              <tr>
                <td><strong>under the weather</strong></td>
                <td><em>"Many students feel under the weather during exam season due to stress."</em></td>
                <td>Mal-dispostos, sem energia, adoecendo de estresse.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Estratégia para expressões idiomáticas no ENEM:</strong>
          <br /><br />
          1. Identifique que a frase parece estranha se traduzida literalmente.<br />
          2. Isso sinaliza que é uma expressão idiomática.<br />
          3. Analise o tom da frase: positivo, negativo, neutro?<br />
          4. Use o contexto do parágrafo para deduzir o sentido global.<br />
          5. Elimine as alternativas absurdas — geralmente a literal é a armadilha.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gêneros Textuais</span>
        <h2>9. Phrasal Verbs nos Gêneros Textuais do ENEM</h2>

        <p>
          O ENEM utiliza uma variedade de gêneros textuais em inglês. Cada gênero tem preferências
          por certos phrasal verbs e expressões idiomáticas. Reconhecer esse padrão ajuda a
          antecipar o vocabulário durante a leitura.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Artigos Jornalísticos</h3>
            <p>
              Frequentes: <em>call off</em> (cancelar), <em>break out</em> (eclodir),
              <em> carry out</em> (realizar), <em>point out</em> (destacar),
              <em> rule out</em> (descartar), <em>set up</em> (criar).
              <br /><em>"The summit was called off after tensions broke out."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Textos Científicos</h3>
            <p>
              Frequentes: <em>carry out</em> (conduzir), <em>find out</em> (descobrir),
              <em> come up with</em> (elaborar), <em>look into</em> (investigar),
              <em> rule out</em> (descartar), <em>break down</em> (decompor).
              <br /><em>"Researchers carried out experiments to find out the cause."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Textos de Opinião</h3>
            <p>
              Frequentes: <em>point out</em> (apontar), <em>deal with</em> (lidar com),
              <em> bring about</em> (causar), <em>go through</em> (passar por),
              <em> stand out</em> (destacar-se), <em>give up</em> (desistir).
              <br /><em>"Experts point out that we must deal with inequality."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Anúncios e Publicidade</h3>
            <p>
              Frequentes: <em>look forward to</em> (aguardar), <em>make sure</em> (certificar-se),
              <em> fill in</em> (preencher), <em>hand out</em> (distribuir),
              <em> sign up</em> (inscrever-se).
              <br /><em>"Fill in the form and look forward to great benefits!"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Textos Literários</h3>
            <p>
              Frequentes: expressões idiomáticas como <em>break the ice</em>,
              <em> under the weather</em>, <em>once in a blue moon</em>,
              phrasal verbs narrativos: <em>go through</em>, <em>give up</em>, <em>come across</em>.
              <br /><em>"She came across an old letter that changed everything."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Textos de Divulgação</h3>
            <p>
              Frequentes: <em>keep up with</em> (acompanhar), <em>take over</em> (assumir),
              <em> come up with</em> (criar), <em>set up</em> (estabelecer),
              <em> take part in</em> (participar).
              <br /><em>"It's hard to keep up with technological change."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Preparação ENEM</span>
        <h2>10. Dicas ENEM e Armadilhas</h2>

        <p>
          Conhecer as principais armadilhas das questões de phrasal verbs e expressões idiomáticas
          do ENEM evita erros por distração e aumenta significativamente o seu desempenho.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 1: Tradução Literal</h3>
            <p>
              A alternativa errada mais comum <em>traduz as palavras separadamente</em>.
              <em> "give up"</em> → alternativa errada: "dar para cima"; correta: "desistir".
              Desconfie sempre da tradução literal de frases em inglês.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 2: Partícula Enganosa</h3>
            <p>
              <em>"Turn down"</em> não é baixar o volume (isso é possível, mas no ENEM aparece
              como "recusar"). <em>"Look up"</em> não é olhar para cima. A partícula muda
              completamente o sentido do verbo.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 3: Falso Cognato Visual</h3>
            <p>
              <em>"Run out of"</em> parece ter a ver com "correr" (<em>run</em>), mas significa
              "ficar sem". <em>"Break down"</em> não é "quebrar para baixo" — é
              "colapsar/decompor". O verbo base pode enganar.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 4: Múltiplos Sentidos</h3>
            <p>
              <em>"Make up"</em> pode significar inventar, compor (um grupo) ou se maquiar.
              <em> "Come across"</em> pode ser encontrar ou dar a impressão de ser algo.
              Sempre use o contexto para escolher o sentido correto.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Os 10 phrasal verbs MAIS cobrados no ENEM (memorize):</strong>
          <br /><br />
          1. <strong>carry out</strong> — realizar/executar (textos científicos)<br />
          2. <strong>give up</strong> — desistir (narrativas e argumentação)<br />
          3. <strong>find out</strong> — descobrir (reportagens e ciência)<br />
          4. <strong>point out</strong> — apontar/destacar (textos de opinião)<br />
          5. <strong>come up with</strong> — criar/propor (inovação e ciência)<br />
          6. <strong>deal with</strong> — lidar com (problemas sociais)<br />
          7. <strong>set up</strong> — criar/estabelecer (organizações e projetos)<br />
          8. <strong>look into</strong> — investigar (jornalismo e ciência)<br />
          9. <strong>run out of</strong> — ficar sem (recursos e tempo)<br />
          10. <strong>bring about</strong> — causar/provocar (mudanças históricas)
        </div>

        <div className="lesson-highlight">
          <strong>Técnica da eliminação:</strong> No ENEM, se você não sabe o significado do
          phrasal verb, elimine as alternativas que:<br />
          (a) traduzem as palavras literalmente;<br />
          (b) contradizem o tom geral do texto;<br />
          (c) introduzem um tema completamente diferente do parágrafo.<br />
          Restará 1 ou 2 opções — use o contexto para decidir.
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>11. Exercícios Comentados</h2>

        <p>
          Aplique tudo que você aprendeu. Cada exercício foi elaborado no padrão ENEM, com
          textos autênticos e alternativas que testam compreensão contextual — não memorização
          mecânica.
        </p>

        <Exercise
          level="Básico"
          title="Phrasal verb em contexto político"
          statement={
            <p>
              Leia a frase: <em>"After months of protests, the government finally
              GAVE UP its controversial reform plan."</em> O phrasal verb{" "}
              <strong>gave up</strong> significa, nesse contexto:
            </p>
          }
          options={[
            { letter: "A", text: "Deu para cima — elevou o plano de reforma para aprovação." },
            { letter: "B", text: "Desistiu de — abandonou o plano de reforma.", correct: true },
            { letter: "C", text: "Entregou para — transferiu o plano para outra entidade." },
            { letter: "D", text: "Levantou — apresentou formalmente o plano ao parlamento." },
            { letter: "E", text: "Acelerou — implementou o plano mais rapidamente." },
          ]}
          resolution={
            <p>
              <em>Give up</em> significa <strong>desistir de algo</strong>. No
              contexto, após meses de protestos, o governo abandonou o plano de
              reforma — ou seja, desistiu dele. A alternativa A é a armadilha da
              tradução literal ("deu para cima"), que não faz sentido em inglês
              idiomático. As demais não se encaixam no contexto político do texto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Dois phrasal verbs em texto científico"
          statement={
            <p>
              Leia o trecho: <em>"The scientific team CARRIED OUT extensive
              research over three years. They eventually managed to FIND OUT the
              main cause of the disease, which had puzzled experts for decades."</em>{" "}
              As expressões <strong>carried out</strong> e <strong>found out</strong>{" "}
              significam, respectivamente:
            </p>
          }
          options={[
            { letter: "A", text: "carregou / achou fora" },
            { letter: "B", text: "executou / descobriu", correct: true },
            { letter: "C", text: "trouxe / verificou" },
            { letter: "D", text: "realizou / saiu fora" },
            { letter: "E", text: "conduziu / esqueceu" },
          ]}
          resolution={
            <p>
              <em>Carry out</em> = realizar, executar (especialmente pesquisas e
              experimentos). <em>Find out</em> = descobrir, apurar. Ambos são
              phrasal verbs de alta frequência em textos científicos no ENEM.
              A alternativa A é a armadilha literal. A B traz os dois significados
              corretos: a equipe executou pesquisas extensas e descobriu a causa
              da doença.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Expressões idiomáticas em texto ambiental"
          statement={
            <p>
              Leia: <em>"Environmental scientists have POINTED OUT that
              deforestation is not merely a regional issue — it is, in fact,
              just the TIP OF THE ICEBERG of a global crisis. Governments must
              DEAL WITH the root causes rather than BEAT AROUND THE BUSH with
              temporary measures."</em> Assinale a alternativa com a interpretação
              correta das expressões em destaque:
            </p>
          }
          options={[
            { letter: "A", text: "Pointed out = ignorou; tip of the iceberg = o problema inteiro; beat around the bush = atacar diretamente." },
            { letter: "B", text: "Pointed out = apontou; tip of the iceberg = a parte visível de algo maior; deal with = lidar com; beat around the bush = esquivar-se do assunto.", correct: true },
            { letter: "C", text: "Pointed out = descobriu; tip of the iceberg = um grande problema; deal with = fugir de; beat around the bush = resolver." },
            { letter: "D", text: "Pointed out = contradisse; tip of the iceberg = uma solução parcial; deal with = ignorar; beat around the bush = discutir abertamente." },
            { letter: "E", text: "Pointed out = apontou; tip of the iceberg = a solução definitiva; deal with = causar; beat around the bush = implementar medidas." },
          ]}
          resolution={
            <p>
              <em>Pointed out</em> = destacou/apontou. <em>Tip of the iceberg</em>
              = a parte visível de um problema muito maior. <em>Deal with</em> =
              lidar com, enfrentar. <em>Beat around the bush</em> = esquivar-se,
              não ir direto ao ponto. A alternativa B é a única internamente
              consistente e coerente com o contexto ambiental do texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Phrasal verbs em anúncio publicitário"
          statement={
            <p>
              Leia o anúncio: <em>"Are you RUNNING OUT OF ideas for your next
              project? Our creative workshop can help! SIGN UP now and GET the
              most out of your potential. Don't PUT IT OFF — spots are limited!"</em>{" "}
              Qual é a melhor interpretação para as expressões em destaque?
            </p>
          }
          options={[
            { letter: "A", text: "Correndo com ideias / colocar isso fora / pegar o máximo de fora." },
            { letter: "B", text: "Ficando sem ideias / adiar isso / aproveitar ao máximo.", correct: true },
            { letter: "C", text: "Desenvolvendo ideias / cancelar isso / tirar o melhor de fora." },
            { letter: "D", text: "Espalhando ideias / empurrar para fora / deixar de fora." },
            { letter: "E", text: "Executando ideias / desistir disso / sair com o máximo." },
          ]}
          resolution={
            <p>
              <em>Running out of ideas</em> = ficando sem ideias (run out of =
              ficar sem). <em>Put it off</em> = adiar isso (put off = adiar).
              <em>Get the most out of</em> = aproveitar ao máximo. A alternativa
              B captura os três significados corretamente no contexto do anúncio
              de workshop criativo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Phrasal verbs em artigo de opinião"
          statement={
            <p>
              Leia: <em>"Critics argue that recent economic policies have failed
              to BRING ABOUT any real change for low-income families. The measures,
              they POINT OUT, merely SCRATCH THE SURFACE of deep structural
              problems. Unless the government COMES UP WITH more inclusive
              solutions, inequality will continue to STAND OUT as the nation's
              greatest challenge."</em> É correto afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: "As políticas causaram grandes mudanças para famílias de baixa renda, segundo os críticos." },
            { letter: "B", text: "O texto usa phrasal verbs e expressão idiomática para argumentar que as políticas econômicas são insuficientes.", correct: true },
            { letter: "C", text: "O governo apresentou soluções inclusivas que eliminaram a desigualdade." },
            { letter: "D", text: "Segundo o artigo, a desigualdade está sendo resolvida gradualmente pelas medidas adotadas." },
            { letter: "E", text: "Os críticos elogiam as medidas econômicas por tratarem os problemas estruturais de forma abrangente." },
          ]}
          resolution={
            <p>
              <em>Bring about</em> = causar (as políticas falharam em causar
              mudanças). <em>Scratch the surface</em> = tratar superficialmente.
              <em>Come up with</em> = propor. <em>Stand out</em> = destacar-se.
              A B é a única que capta o argumento central: os phrasal verbs e a
              expressão idiomática constroem a crítica de que as medidas são
              insuficientes. A A contradiz o texto (as políticas falharam).
            </p>
          }
        />
      </section>
    </article>
  );
}
