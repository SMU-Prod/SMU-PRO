"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 16</span>
          <h1>Conjunções e Conectores Textuais</h1>
          <p>
            Os conectores são a <strong>cola invisível</strong> de qualquer texto em inglês. Eles
            revelam relações lógicas entre ideias — adição, contraste, causa, consequência,
            condição, tempo — e o ENEM os cobra constantemente em questões de interpretação. Quem
            domina os conectores lê mais rápido, entende mais fundo e erra menos.
          </p>
        </div>
      </section>

      {/* ─── Seção 1: Por que os conectores são essenciais ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que os Conectores São Essenciais no ENEM?</h2>
        <p>
          O ENEM de Inglês não testa gramática isolada. Ele testa <strong>compreensão de texto</strong>.
          Em cada questão, você precisa entender <em>como</em> as ideias se relacionam: uma causa e
          seu efeito, uma concessão que surpreende, uma condição que limita. Essa relação lógica é
          expressa, quase sempre, por um <strong>conector</strong>.
        </p>
        <p>
          Há três famílias principais de conectores em inglês:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Conjunções Coordenativas</h3>
            <p>
              Unem orações ou termos de <strong>mesmo nível gramatical</strong>. O grupo clássico
              é o <em>FANBOYS</em>: <em>for, and, nor, but, or, yet, so</em>. Aparecem entre as
              ideias que conectam.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Conjunções Subordinativas</h3>
            <p>
              Introduzem uma <strong>oração dependente</strong> que precisa de uma principal para
              fazer sentido. Podem indicar tempo, condição, causa, concessão ou finalidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Advérbios Conectivos</h3>
            <p>
              Palavras como <em>however, therefore, moreover</em> conectam <strong>frases ou
              parágrafos inteiros</strong>. São típicos de textos formais, acadêmicos e
              jornalísticos — exatamente os gêneros do ENEM.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Como o ENEM cobra</h3>
            <p>
              Perguntas frequentes: "qual conector substitui X sem alterar o sentido?", "qual
              relação lógica o trecho estabelece?", "o que a palavra <em>although</em> indica?".
              Reconhecer a família do conector já elimina distratores.
            </p>
          </div>
        </div>

        {/* SVG 1 — Mapa mental dos conectores */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 800 480"
            width="800"
            height="480"
            aria-label="Mapa mental dos conectores em inglês: três ramos saem do centro — Coordenativas (FANBOYS), Subordinativas (tempo, condição, causa, concessão, finalidade) e Advérbios Conectivos (however, therefore, moreover e outros)"
          >
            <rect width="800" height="480" rx="14" fill="#f8fafc" />

            {/* Centro */}
            <ellipse cx="400" cy="240" rx="80" ry="40" fill="#6366f1" />
            <text x="400" y="235" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              Conectores
            </text>
            <text x="400" y="252" textAnchor="middle" fill="#c7d2fe" fontSize="11">
              em Inglês
            </text>

            {/* ── Ramo 1: Coordenativas (esquerda-cima) ── */}
            <line x1="325" y1="215" x2="180" y2="120" stroke="#6366f1" strokeWidth="2.5" />
            <rect x="60" y="85" width="180" height="46" rx="10" fill="#6366f1" />
            <text x="150" y="107" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              Coordenativas
            </text>
            <text x="150" y="122" textAnchor="middle" fill="#c7d2fe" fontSize="10">
              FANBOYS
            </text>

            {/* Filhos Coordenativas */}
            <line x1="60" y1="108" x2="20" y2="60" stroke="#818cf8" strokeWidth="1.5" />
            <text x="16" y="55" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">for / and / nor</text>
            <line x1="60" y1="118" x2="10" y2="155" stroke="#818cf8" strokeWidth="1.5" />
            <text x="12" y="170" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">but / or / yet / so</text>

            {/* ── Ramo 2: Subordinativas (esquerda-baixo) ── */}
            <line x1="325" y1="262" x2="180" y2="360" stroke="#10b981" strokeWidth="2.5" />
            <rect x="55" y="335" width="200" height="46" rx="10" fill="#10b981" />
            <text x="155" y="357" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              Subordinativas
            </text>
            <text x="155" y="372" textAnchor="middle" fill="#d1fae5" fontSize="10">
              Tempo · Condição · Causa · Concessão · Fin.
            </text>

            {/* Filhos Subordinativas */}
            <line x1="55" y1="358" x2="10" y2="320" stroke="#34d399" strokeWidth="1.5" />
            <text x="8" y="315" textAnchor="start" fill="#065f46" fontSize="10">when · while · after</text>
            <line x1="55" y1="370" x2="10" y2="415" stroke="#34d399" strokeWidth="1.5" />
            <text x="8" y="430" textAnchor="start" fill="#065f46" fontSize="10">if · unless · although</text>
            <line x1="145" y1="381" x2="100" y2="440" stroke="#34d399" strokeWidth="1.5" />
            <text x="12" y="458" textAnchor="start" fill="#065f46" fontSize="10">because · since · so that</text>

            {/* ── Ramo 3: Advérbios Conectivos (direita) ── */}
            <line x1="478" y1="225" x2="590" y2="120" stroke="#f59e0b" strokeWidth="2.5" />
            <rect x="560" y="82" width="210" height="46" rx="10" fill="#f59e0b" />
            <text x="665" y="104" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              Advérbios Conectivos
            </text>
            <text x="665" y="119" textAnchor="middle" fill="#fef3c7" fontSize="10">
              Formal Linking Words
            </text>

            {/* Filhos Advérbios (direita-cima) */}
            <line x1="770" y1="105" x2="792" y2="55" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="790" y="50" textAnchor="end" fill="#92400e" fontSize="10" fontWeight="bold">however · nevertheless</text>
            <line x1="770" y1="115" x2="795" y2="160" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="793" y="175" textAnchor="end" fill="#92400e" fontSize="10" fontWeight="bold">therefore · consequently</text>

            {/* ── Ramo 4: Mais advérbios (direita-baixo) ── */}
            <line x1="478" y1="258" x2="590" y2="360" stroke="#e879f9" strokeWidth="2.5" />
            <rect x="555" y="335" width="215" height="46" rx="10" fill="#e879f9" />
            <text x="663" y="357" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              Adição / Conclusão
            </text>
            <text x="663" y="372" textAnchor="middle" fill="#fce7f3" fontSize="10">
              moreover · furthermore · in conclusion
            </text>

            {/* Filhos */}
            <line x1="770" y1="358" x2="795" y2="320" stroke="#d946ef" strokeWidth="1.5" />
            <text x="793" y="315" textAnchor="end" fill="#701a75" fontSize="10">in addition · as a result</text>
            <line x1="770" y1="370" x2="795" y2="415" stroke="#d946ef" strokeWidth="1.5" />
            <text x="793" y="430" textAnchor="end" fill="#701a75" fontSize="10">on the other hand · in contrast</text>
          </svg>
          <figcaption>
            Mapa mental dos conectores em inglês: quatro famílias essenciais para o ENEM.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Estratégia-chave:</strong> Antes de ler o texto do ENEM inteiro, identifique os
          conectores. Eles formam um "esqueleto lógico" que revela a estrutura argumentativa e
          guia a interpretação de cada alternativa.
        </div>
      </section>

      {/* ─── Seção 2: FANBOYS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Coordenativas</span>
        <h2>2. Conjunções Coordenativas: FANBOYS</h2>
        <p>
          O acrônimo <strong>FANBOYS</strong> reúne as sete conjunções coordenativas do inglês.
          Cada uma estabelece uma relação lógica diferente entre elementos de igual valor gramatical
          — duas orações independentes, dois substantivos ou dois adjetivos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Letra</th>
                <th>Conjunção</th>
                <th>Relação lógica</th>
                <th>Exemplo em inglês</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: "#6366f1" }}>F</strong></td>
                <td><em>for</em></td>
                <td>Causa / razão (formal)</td>
                <td>"She left early, <em>for</em> she was tired."</td>
                <td>"Ela saiu cedo, pois estava cansada."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#10b981" }}>A</strong></td>
                <td><em>and</em></td>
                <td>Adição</td>
                <td>"He reads <em>and</em> writes every day."</td>
                <td>"Ele lê e escreve todo dia."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#f59e0b" }}>N</strong></td>
                <td><em>nor</em></td>
                <td>Adição negativa</td>
                <td>"She doesn't smoke, <em>nor</em> does she drink."</td>
                <td>"Ela não fuma, tampouco bebe."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#ef4444" }}>B</strong></td>
                <td><em>but</em></td>
                <td>Contraste / adversidade</td>
                <td>"The film was long <em>but</em> entertaining."</td>
                <td>"O filme era longo, mas divertido."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#8b5cf6" }}>O</strong></td>
                <td><em>or</em></td>
                <td>Alternativa / escolha</td>
                <td>"You can walk <em>or</em> take the bus."</td>
                <td>"Você pode ir a pé ou pegar o ônibus."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#06b6d4" }}>Y</strong></td>
                <td><em>yet</em></td>
                <td>Contraste (surpresa)</td>
                <td>"It was cheap, <em>yet</em> very effective."</td>
                <td>"Era barato, mas muito eficaz."</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#84cc16" }}>S</strong></td>
                <td><em>so</em></td>
                <td>Consequência / resultado</td>
                <td>"It rained, <em>so</em> we stayed home."</td>
                <td>"Choveu, então ficamos em casa."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Dica FANBOYS no ENEM</h3>
          <p>
            <strong>But</strong> e <strong>yet</strong> são facilmente confundidos. A diferença
            é de intensidade: <em>but</em> é neutro ("mas"), enquanto <em>yet</em> carrega uma
            noção de <em>surpresa</em> — algo inesperado dado o contexto. Questões do ENEM que
            pedem substituição de conectores testam exatamente essa nuance.
          </p>
          <p>
            <strong>For</strong> como conjunção é raro em textos modernos e aparece em prosa
            literária e formal. Não confunda com <em>for</em> preposição ("por / para").
          </p>
        </div>

        <div className="lesson-highlight">
          <strong>Regra de pontuação:</strong> Quando FANBOYS une duas orações independentes, usa-se
          vírgula antes da conjunção: <em>"I wanted to go, <strong>but</strong> I was busy."</em>{" "}
          Quando une apenas dois termos, a vírgula é omitida: <em>"coffee <strong>and</strong> tea"</em>.
        </div>
      </section>

      {/* ─── Seção 3: Conjunções de Tempo ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Subordinativas</span>
        <h2>3. Conjunções de Tempo</h2>
        <p>
          As conjunções de tempo introduzem uma <strong>oração adverbial temporal</strong>,
          indicando quando a ação da oração principal acontece. A oração subordinada pode vir
          antes ou depois da principal — quando vem antes, usa-se vírgula para separá-las.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conjunção</th>
                <th>Significado</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>when</em></td>
                <td>quando</td>
                <td>"Call me <em>when</em> you arrive."</td>
                <td>"Ligue quando você chegar."</td>
              </tr>
              <tr>
                <td><em>while</em></td>
                <td>enquanto (simultâneo)</td>
                <td>"She listened <em>while</em> he spoke."</td>
                <td>"Ela escutou enquanto ele falava."</td>
              </tr>
              <tr>
                <td><em>before</em></td>
                <td>antes de / antes que</td>
                <td>"Leave <em>before</em> it gets dark."</td>
                <td>"Saia antes que escureça."</td>
              </tr>
              <tr>
                <td><em>after</em></td>
                <td>depois de / depois que</td>
                <td>"<em>After</em> she graduated, she moved abroad."</td>
                <td>"Depois que se formou, ela foi morar no exterior."</td>
              </tr>
              <tr>
                <td><em>since</em></td>
                <td>desde que (tempo)</td>
                <td>"I haven't slept <em>since</em> Monday."</td>
                <td>"Não durmo desde segunda-feira."</td>
              </tr>
              <tr>
                <td><em>until / till</em></td>
                <td>até que</td>
                <td>"Wait <em>until</em> the rain stops."</td>
                <td>"Espere até a chuva parar."</td>
              </tr>
              <tr>
                <td><em>as soon as</em></td>
                <td>assim que / tão logo</td>
                <td>"<em>As soon as</em> I finish, I'll call you."</td>
                <td>"Assim que eu terminar, te ligo."</td>
              </tr>
              <tr>
                <td><em>whenever</em></td>
                <td>sempre que / toda vez que</td>
                <td>"<em>Whenever</em> I visit, she cooks."</td>
                <td>"Sempre que eu visito, ela cozinha."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção — since duplo:</strong> <em>Since</em> pode ser conjunção de{" "}
          <strong>tempo</strong> ("desde que") ou de <strong>causa</strong> ("uma vez que / como").
          O contexto sempre esclarece: se vem com Present Perfect e indica duração, é temporal;
          se explica um motivo, é causal. Ex.: <em>"Since you're here, let's start"</em> = "Já
          que você está aqui, vamos começar" (causa).
        </div>
      </section>

      {/* ─── Seção 4: Conjunções de Condição ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Subordinativas</span>
        <h2>4. Conjunções de Condição</h2>
        <p>
          As conjunções condicionais introduzem uma <strong>hipótese</strong> da qual depende a
          oração principal. São a base dos períodos condicionais (<em>conditionals</em>), muito
          explorados em questões de gramática contextualizada do ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>if</h3>
            <p>
              A conjunção condicional mais comum: <em>"se"</em>. Funciona nos quatro tipos de
              condicional (zero, 1º, 2º e 3º grau).
              <br /><em>"If it rains, we'll cancel the trip."</em>
              <br />"Se chover, cancelaremos a viagem."
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>unless</h3>
            <p>
              Equivale a <em>"if … not"</em> — "a menos que / se não". Indica condição negativa
              necessária.
              <br /><em>"We'll go unless it rains."</em>
              <br />"Iremos, a menos que chova."
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>provided that / providing</h3>
            <p>
              "Desde que / contanto que" — condição formal e mais restritiva que <em>if</em>.
              <br /><em>"You may leave provided that you finish the report."</em>
              <br />"Você pode sair, contanto que termine o relatório."
            </p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>as long as</h3>
            <p>
              "Enquanto / desde que" — condição que deve se manter ao longo do tempo.
              <br /><em>"As long as you study, you'll pass."</em>
              <br />"Desde que você estude, passará."
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>in case</h3>
            <p>
              "Caso / para o caso de" — indica precaução, não simples condição.
              <br /><em>"Take an umbrella in case it rains."</em>
              <br />"Leve um guarda-chuva caso chova."
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>whether … or not</h3>
            <p>
              "Seja … ou não" — condição indiferente, abrange ambas as possibilidades.
              <br /><em>"We'll proceed whether you agree or not."</em>
              <br />"Prosseguiremos, concordes ou não."
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Unless vs. If not — a diferença sutil</h3>
          <p>
            Na maioria dos casos, <em>unless</em> e <em>if … not</em> são intercambiáveis.
            Porém, <em>unless</em> não funciona bem em condicionais do 2º e 3º grau (hipóteses
            contrafactuais): prefira <em>if … not</em> nesses casos. Ex.:
          </p>
          <p>
            ✅ <em>"If she hadn't helped me, I wouldn't have succeeded."</em><br />
            ⚠️ <em>"Unless she had helped me, I wouldn't have succeeded."</em> — soa estranho.
          </p>
        </div>
      </section>

      {/* ─── Seção 5: Causa e Consequência ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Subordinativas</span>
        <h2>5. Conjunções de Causa e Consequência</h2>
        <p>
          Os conectores de causa respondem à pergunta <em>"por quê?"</em>; os de consequência
          respondem a <em>"com que resultado?"</em>. No ENEM, textos argumentativos e científicos
          usam ambos com frequência.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conector</th>
                <th>Função</th>
                <th>Nível de formalidade</th>
                <th>Exemplo bilíngue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>because</em></td>
                <td>Causa (conjunção)</td>
                <td>Neutro</td>
                <td>
                  "She cried <em>because</em> she was happy."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Ela chorou porque estava feliz."</span>
                </td>
              </tr>
              <tr>
                <td><em>since</em></td>
                <td>Causa (conjunção)</td>
                <td>Formal / literário</td>
                <td>
                  "<em>Since</em> the bridge is closed, we'll take another route."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Como a ponte está fechada, tomaremos outra rota."</span>
                </td>
              </tr>
              <tr>
                <td><em>as</em></td>
                <td>Causa (conjunção)</td>
                <td>Formal</td>
                <td>
                  "<em>As</em> it was getting late, we decided to leave."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Como estava ficando tarde, decidimos ir embora."</span>
                </td>
              </tr>
              <tr>
                <td><em>due to</em></td>
                <td>Causa (preposição)</td>
                <td>Formal / técnico</td>
                <td>
                  "The flight was cancelled <em>due to</em> bad weather."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"O voo foi cancelado devido ao mau tempo."</span>
                </td>
              </tr>
              <tr>
                <td><em>owing to</em></td>
                <td>Causa (preposição)</td>
                <td>Muito formal</td>
                <td>
                  "<em>Owing to</em> budget cuts, the project was suspended."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Em razão dos cortes orçamentários, o projeto foi suspenso."</span>
                </td>
              </tr>
              <tr>
                <td><em>so … that</em></td>
                <td>Consequência (intensidade)</td>
                <td>Neutro</td>
                <td>
                  "It was <em>so</em> hot <em>that</em> we couldn't sleep."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Estava tão quente que não conseguíamos dormir."</span>
                </td>
              </tr>
              <tr>
                <td><em>such … that</em></td>
                <td>Consequência (qualidade/quantidade)</td>
                <td>Neutro</td>
                <td>
                  "She has <em>such</em> talent <em>that</em> everyone admires her."<br />
                  <span style={{ color: "#64748b", fontSize: "0.88em" }}>"Ela tem tanto talento que todos a admiram."</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Due to vs. Because of:</strong> Ambos expressam causa, mas <em>due to</em>{" "}
          modifica substantivos (<em>"The delay <strong>due to</strong> traffic"</em> — modifica
          "delay"), enquanto <em>because of</em> pode iniciar uma ideia causal mais livre. Em
          textos técnicos, prefira <em>due to</em>; em inglês coloquial, <em>because of</em> é
          mais natural.
        </div>
      </section>

      {/* ─── Seção 6: Concessão / Contraste ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Subordinativas</span>
        <h2>6. Conjunções de Concessão (Contraste)</h2>
        <p>
          Os conectores de concessão introduzem uma ideia que <strong>contrasta</strong> com a
          principal, mas não a impede — o que torna o resultado <em>surpreendente</em> ou
          inesperado. São os conectores mais testados em questões de interpretação do ENEM, pois
          alteram completamente a direção argumentativa do texto.
        </p>

        {/* SVG 2 — Diagrama de estrutura textual com conectores */}
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 340"
            width="760"
            height="340"
            aria-label="Diagrama mostrando como conectores de concessão ligam duas ideias contrastantes: Ideia A e Ideia B com seta de contraste entre elas, exemplificando although, even though, despite, whereas"
          >
            <rect width="760" height="340" rx="12" fill="#f8fafc" />

            {/* Título */}
            <text x="380" y="30" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold">
              Estrutura de Contraste / Concessão
            </text>

            {/* Bloco Ideia A */}
            <rect x="30" y="60" width="220" height="100" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="140" y="95" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">
              Ideia A (concessão)
            </text>
            <text x="140" y="115" textAnchor="middle" fill="#1d4ed8" fontSize="11">
              "Although she studied hard…"
            </text>
            <text x="140" y="132" textAnchor="middle" fill="#64748b" fontSize="10">
              "Embora ela tenha estudado muito…"
            </text>
            <text x="140" y="150" textAnchor="middle" fill="#64748b" fontSize="10">
              → ideia esperada: ela passaria
            </text>

            {/* Seta de contraste */}
            <line x1="250" y1="110" x2="510" y2="110" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
            <rect x="270" y="80" width="200" height="30" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="370" y="100" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">
              CONTRASTE / SURPRESA
            </text>
            {/* Conectores acima da seta */}
            <text x="370" y="145" textAnchor="middle" fill="#dc2626" fontSize="10">
              although · even though · though
            </text>
            <text x="370" y="160" textAnchor="middle" fill="#dc2626" fontSize="10">
              despite · in spite of · whereas · while
            </text>

            {/* Bloco Resultado */}
            <rect x="510" y="60" width="220" height="100" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="620" y="95" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold">
              Resultado (principal)
            </text>
            <text x="620" y="115" textAnchor="middle" fill="#b45309" fontSize="11">
              "…she failed the exam."
            </text>
            <text x="620" y="132" textAnchor="middle" fill="#64748b" fontSize="10">
              "…ela foi reprovada na prova."
            </text>
            <text x="620" y="150" textAnchor="middle" fill="#64748b" fontSize="10">
              → resultado inesperado!
            </text>

            {/* Dica */}
            <rect x="100" y="195" width="560" height="55" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
            <text x="380" y="218" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">
              Diferença estrutural: Conjunção vs. Preposição
            </text>
            <text x="380" y="238" textAnchor="middle" fill="#15803d" fontSize="11">
              Although/Even though + sujeito + verbo   |   Despite/In spite of + substantivo/gerúndio
            </text>

            {/* Exemplos */}
            <text x="380" y="280" textAnchor="middle" fill="#475569" fontSize="11">
              "Although it was cold, we went out." = "Despite the cold, we went out."
            </text>
            <text x="380" y="298" textAnchor="middle" fill="#64748b" fontSize="10">
              "Embora estivesse frio, saímos." = "Apesar do frio, saímos."
            </text>

            {/* Arrow marker */}
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Diagrama: como os conectores de concessão criam contraste entre duas ideias em inglês.
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔄</span>
            <h3>although / even though / though</h3>
            <p>
              Todos significam <em>"embora / apesar de que"</em> e introduzem uma oração com
              sujeito e verbo. <em>Even though</em> é o mais enfático; <em>though</em> é mais
              informal e pode vir ao final da frase: <em>"It was late, <strong>though</strong>."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>despite / in spite of</h3>
            <p>
              Preposições — seguidas de <strong>substantivo ou gerúndio</strong>, nunca de sujeito
              + verbo. <em>"Despite her efforts"</em> ✅ | <em>"Despite she tried"</em> ❌.
              Equivalem a "apesar de".
            </p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>whereas / while</h3>
            <p>
              Indicam <strong>contraste paralelo</strong> entre dois elementos comparáveis. <em>
              "Brazil is large, <strong>whereas</strong> Portugal is small."</em> — "O Brasil é
              grande, enquanto Portugal é pequeno."
            </p>
          </div>
          <div className="lesson-card">
            <span>🆚</span>
            <h3>however (advérbio)</h3>
            <p>
              Apesar de ser advérbio, funciona como conector de contraste entre duas frases
              completas, separado por ponto e vírgula ou ponto: <em>"The plan seemed good;
              <strong>however</strong>, it failed."</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Quadro comparativo — Concessão</h3>
          <p>
            <strong>Although it rained</strong>, we had fun. (conjunção + oração)<br />
            <strong>Despite the rain</strong>, we had fun. (preposição + substantivo)<br />
            <strong>In spite of it raining</strong>, we had fun. (preposição + gerúndio)<br />
            <strong>Even though it was raining</strong>, we had fun. (ênfase na concessão)
          </p>
          <p>
            Todas as frases acima têm o <em>mesmo significado</em>. O ENEM frequentemente pede
            que você identifique qual alternativa "expressa a mesma ideia" — essas equivalências
            são a resposta.
          </p>
        </div>
      </section>

      {/* ─── Seção 7: Finalidade ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Subordinativas</span>
        <h2>7. Conjunções de Finalidade</h2>
        <p>
          As conjunções de finalidade indicam o <strong>objetivo ou propósito</strong> de uma
          ação. Respondem à pergunta "para quê?". São comuns em textos instrucionais, científicos
          e argumentativos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>so that</h3>
            <p>
              "Para que / a fim de que" — introduz oração com sujeito e verbo. Geralmente seguido
              de <em>can/could</em> ou <em>will/would</em>.
              <br /><em>"She spoke slowly <strong>so that</strong> everyone could understand."</em>
              <br />"Ela falou devagar para que todos pudessem entender."
            </p>
          </div>
          <div className="lesson-card">
            <span>🔹</span>
            <h3>in order to / so as to</h3>
            <p>
              "A fim de / para" — seguidos de <strong>infinitivo</strong>. Formais e comuns em
              textos acadêmicos.
              <br /><em>"She studied hard <strong>in order to</strong> pass the exam."</em>
              <br />"Ela estudou muito a fim de passar na prova."
            </p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>so as not to / in order not to</h3>
            <p>
              Finalidade <em>negativa</em>: "para não / a fim de não".
              <br /><em>"He whispered <strong>so as not to</strong> wake the baby."</em>
              <br />"Ele sussurrou para não acordar o bebê."
            </p>
          </div>
          <div className="lesson-card">
            <span>📎</span>
            <h3>to (infinitivo simples)</h3>
            <p>
              Em inglês informal, o infinitivo simples já expressa finalidade, substituindo
              "in order to" sem perda de sentido.
              <br /><em>"He went to the store <strong>to</strong> buy milk."</em>
              <br />"Ele foi ao mercado comprar leite."
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Distinção importante — so (FANBOYS) vs. so that:</strong> <em>So</em> como
          conjunção coordenativa indica <em>consequência</em> ("então, portanto"), enquanto{" "}
          <em>so that</em> indica <em>finalidade</em> ("para que"). Compare: <em>"It was raining,
          <strong>so</strong> we stayed home"</em> (consequência) vs. <em>"We stayed home
          <strong>so that</strong> we could rest"</em> (finalidade).
        </div>
      </section>

      {/* ─── Seção 8: Advérbios Conectivos ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Formal Linking</span>
        <h2>8. Advérbios Conectivos: Formal Linking Words</h2>
        <p>
          Os advérbios conectivos — também chamados de <em>conjunctive adverbs</em> ou{" "}
          <em>linking adverbs</em> — conectam <strong>frases e parágrafos inteiros</strong>,
          diferentemente das conjunções que unem orações dentro de uma frase. Eles são essenciais
          na escrita formal e acadêmica e marcam presença constante nas leituras do ENEM.
        </p>
        <p>
          Atenção à pontuação: quando usados entre duas frases independentes, são precedidos de
          ponto ou ponto e vírgula e seguidos de vírgula:{" "}
          <em>"The project was risky. <strong>However,</strong> the team accepted it."</em>
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Advérbio Conectivo</th>
                <th>Relação lógica</th>
                <th>Equivalente em PT</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>however</em></td>
                <td>Contraste</td>
                <td>porém / no entanto / contudo</td>
                <td>"The economy grew. <em>However,</em> inequality remained."</td>
              </tr>
              <tr>
                <td><em>nevertheless / nonetheless</em></td>
                <td>Contraste com concessão</td>
                <td>mesmo assim / não obstante</td>
                <td>"The risks were high. <em>Nevertheless,</em> they proceeded."</td>
              </tr>
              <tr>
                <td><em>therefore</em></td>
                <td>Consequência / conclusão</td>
                <td>portanto / logo</td>
                <td>"She missed the class; <em>therefore,</em> she failed."</td>
              </tr>
              <tr>
                <td><em>consequently</em></td>
                <td>Consequência</td>
                <td>consequentemente / como resultado</td>
                <td>"Prices rose. <em>Consequently,</em> demand fell."</td>
              </tr>
              <tr>
                <td><em>as a result</em></td>
                <td>Consequência</td>
                <td>como resultado</td>
                <td>"Heavy rain fell. <em>As a result,</em> streets flooded."</td>
              </tr>
              <tr>
                <td><em>moreover</em></td>
                <td>Adição (ênfase)</td>
                <td>além disso / ademais</td>
                <td>"The film was boring. <em>Moreover,</em> it was too long."</td>
              </tr>
              <tr>
                <td><em>furthermore</em></td>
                <td>Adição (reforço)</td>
                <td>além disso / outrossim</td>
                <td>"The policy is efficient. <em>Furthermore,</em> it is fair."</td>
              </tr>
              <tr>
                <td><em>in addition</em></td>
                <td>Adição</td>
                <td>além disso / adicionalmente</td>
                <td>"<em>In addition,</em> the company offers free training."</td>
              </tr>
              <tr>
                <td><em>on the other hand</em></td>
                <td>Contraste balanceado</td>
                <td>por outro lado</td>
                <td>"City life is exciting. <em>On the other hand,</em> it's stressful."</td>
              </tr>
              <tr>
                <td><em>in contrast</em></td>
                <td>Contraste marcado</td>
                <td>em contraste / em contrapartida</td>
                <td>"<em>In contrast,</em> rural areas saw population decline."</td>
              </tr>
              <tr>
                <td><em>in conclusion / in summary</em></td>
                <td>Síntese / encerramento</td>
                <td>em conclusão / em resumo</td>
                <td>"<em>In conclusion,</em> climate action is urgent."</td>
              </tr>
              <tr>
                <td><em>for instance / for example</em></td>
                <td>Exemplificação</td>
                <td>por exemplo</td>
                <td>"Many factors matter; <em>for instance,</em> education."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>However vs. But — diferença de registro</h3>
          <p>
            <em>But</em> e <em>however</em> têm o mesmo significado básico de contraste, mas
            pertencem a registros diferentes. <em>But</em> é informal/conversacional e une
            orações dentro da mesma frase. <em>However</em> é formal, inicia uma nova frase e
            aparece em ensaios, artigos e reportagens — exatamente os textos do ENEM.
          </p>
          <p>
            ✅ Informal: <em>"I tried, <strong>but</strong> I couldn't do it."</em><br />
            ✅ Formal: <em>"I made every effort. <strong>However,</strong> success eluded me."</em>
          </p>
        </div>
      </section>

      {/* ─── Seção 9: Textos Jornalísticos e Acadêmicos ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Conectores em Textos Jornalísticos e Acadêmicos</h2>
        <p>
          O ENEM apresenta principalmente textos de dois gêneros: o <strong>jornalístico</strong>{" "}
          (notícias, reportagens, editoriais) e o <strong>acadêmico</strong> (artigos científicos,
          ensaios, relatórios). Cada gênero tem preferências distintas de conectores.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Texto Jornalístico</h3>
            <p>
              Frases curtas, conectores simples. Usa muito <em>but, and, so, however,
              as a result, while</em>. Objetivo: clareza e rapidez na transmissão da informação.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Texto Acadêmico</h3>
            <p>
              Frases mais longas, conectores formais. Prefere <em>however, therefore, moreover,
              furthermore, consequently, whereas, provided that, owing to</em>. Objetivo:
              precisão lógica e argumentação rigorosa.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Texto de Dados / Infográfico</h3>
            <p>
              Conectores de consequência e comparação: <em>as a result, in contrast, on the
              other hand, compared to, whereas</em>. Descrevem tendências e relacionam dados
              estatísticos.
            </p>
          </div>
          <div className="lesson-card">
            <span>✉️</span>
            <h3>Texto Publicitário / Persuasivo</h3>
            <p>
              Conectores de adição e finalidade dominam: <em>also, moreover, so that, in order
              to</em>. O objetivo é acumular argumentos positivos e apresentar um propósito claro.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Exemplo real de parágrafo acadêmico com conectores:</strong>
          <br /><br />
          <em>
            "Access to clean water remains a global challenge. <strong>Moreover,</strong> climate
            change is intensifying droughts in already vulnerable regions.{" "}
            <strong>As a result,</strong> millions of people face severe water shortages.{" "}
            <strong>However,</strong> recent technological advances offer new solutions.{" "}
            <strong>Therefore,</strong> investment in innovation is crucial."
          </em>
          <br /><br />
          Tradução: "O acesso à água potável continua sendo um desafio global. Além disso, as
          mudanças climáticas estão intensificando as secas em regiões já vulneráveis. Como
          resultado, milhões de pessoas enfrentam escassez grave de água. No entanto, avanços
          tecnológicos recentes oferecem novas soluções. Portanto, o investimento em inovação
          é crucial."
        </div>
      </section>

      {/* ─── Seção 10: Dicas ENEM e Armadilhas ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de prova</span>
        <h2>10. Dicas ENEM e Armadilhas dos Conectores</h2>
        <p>
          O ENEM não testa a tradução isolada de conectores — ele testa a compreensão da{" "}
          <strong>relação lógica</strong> que eles estabelecem. Conhecer as armadilhas mais comuns
          garante pontos que outros candidatos perdem.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 1 — Since</h3>
            <p>
              <em>Since</em> tem dois significados: <strong>temporal</strong> ("desde que") e
              <strong>causal</strong> ("uma vez que"). Leia o contexto: se há duração ou Present
              Perfect, é tempo; se há razão, é causa.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 2 — While</h3>
            <p>
              <em>While</em> pode ser <strong>temporal</strong> ("enquanto") ou de{" "}
              <strong>contraste</strong> ("ao passo que"). Quando as duas orações têm sujeitos
              diferentes com características opostas, é contraste.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 3 — Despite</h3>
            <p>
              <em>Despite</em> é preposição, não conjunção. Nunca pode ser seguida de
              sujeito + verbo: <em>"Despite he worked hard"</em> ❌. Use <em>although</em> nesse
              caso, ou <em>"Despite working hard"</em> ✅.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 4 — So vs. So that</h3>
            <p>
              <em>So</em> sozinho = consequência; <em>so that</em> = finalidade. Trocar um pelo
              outro muda radicalmente o sentido. O ENEM frequentemente apresenta questões de
              substituição que testam essa diferença.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Armadilha 5 — Yet</h3>
            <p>
              <em>Yet</em> pode ser conjunção adversativa ("mas/porém") ou advérbio de tempo
              em frases negativas ("ainda"). <em>"I haven't eaten yet"</em> = "Ainda não comi"
              (advérbio) ≠ <em>"cheap yet effective"</em> (conjunção).
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Dica geral — Relação lógica</h3>
            <p>
              Em qualquer questão sobre conectores, pergunte-se: as ideias se <em>somam</em>,
              <em>contrastam</em>, uma <em>causa</em> a outra, uma é <em>condição</em> para a
              outra, ou uma é o <em>propósito</em> da outra? A resposta elimina 3 das 5
              alternativas imediatamente.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Mnemônico FANBOYS + Relações</h3>
          <p>
            <strong>F</strong>or → causa formal &nbsp;|&nbsp;
            <strong>A</strong>nd → adição &nbsp;|&nbsp;
            <strong>N</strong>or → adição negativa<br />
            <strong>B</strong>ut → contraste &nbsp;|&nbsp;
            <strong>O</strong>r → alternativa &nbsp;|&nbsp;
            <strong>Y</strong>et → contraste-surpresa &nbsp;|&nbsp;
            <strong>S</strong>o → consequência
          </p>
          <p>
            Memorize a relação lógica de cada letra, não apenas a tradução. Quando o ENEM
            pedir um sinônimo de <em>yet</em>, você saberá que precisa de outro conector de
            contraste (como <em>but</em> ou <em>however</em>), não de adição.
          </p>
        </div>

        <div className="lesson-highlight">
          <strong>Checklist rápido antes de responder qualquer questão de conectores:</strong>
          <br />
          1. Identifique a família do conector (coordenativa, subordinativa ou advérbio).<br />
          2. Determine a relação lógica (adição, contraste, causa, condição, finalidade, tempo).<br />
          3. Verifique se a alternativa correta mantém <em>exatamente</em> essa relação.<br />
          4. Descarte alternativas que mudam a relação (ex.: trocar contraste por adição).
        </div>
      </section>

      {/* ─── Seção 11: Exercícios Comentados ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>11. Exercícios Comentados</h2>
        <p>
          Coloque em prática o que você aprendeu sobre conjunções e conectores textuais. Leia
          atentamente cada enunciado, identifique a relação lógica e escolha a alternativa correta.
        </p>

        <Exercise
          level="Básico"
          title="FANBOYS — Relação Lógica"
          statement={
            <p>
              Leia a frase: <em>"She trained every day for months, <strong>yet</strong> she did
              not win the competition."</em>
              <br /><br />
              A conjunção <strong>yet</strong>, nesse contexto, indica uma relação de:
            </p>
          }
          options={[
            { letter: "A", text: "Adição — acrescenta uma informação ao treinamento intenso." },
            { letter: "B", text: "Causa — explica por que ela não venceu a competição." },
            { letter: "C", text: "Contraste com elemento de surpresa — o resultado foi inesperado dado o esforço." , correct: true },
            { letter: "D", text: "Condição — indica que o treinamento era necessário para vencer." },
            { letter: "E", text: "Finalidade — revela o objetivo do treinamento diário." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> A conjunção <em>yet</em> pertence ao grupo FANBOYS
                e expressa <strong>contraste com surpresa</strong>. No contexto, a expectativa
                criada pelo treinamento diário durante meses seria a vitória na competição —
                mas o resultado é surpreendentemente o oposto (derrota). É exatamente essa
                quebra de expectativa que <em>yet</em> sinaliza, diferenciando-se de <em>but</em>{" "}
                (contraste neutro) e de <em>and</em> (adição). As demais alternativas descrevem
                relações que <em>yet</em> nunca expressa.
              </p>
            </div>
          }
        />

        <Exercise
          level="Intermediário"
          title="Conjunções de Concessão — Substituição"
          statement={
            <div>
              <p>
                Leia o trecho de uma reportagem científica:
              </p>
              <blockquote style={{ borderLeft: "4px solid #6366f1", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}>
                "Although renewable energy sources have become significantly cheaper over the past
                decade, the global transition away from fossil fuels remains frustratingly slow."
              </blockquote>
              <p>
                Qual das alternativas substitui <strong>although</strong> sem alterar o sentido
                da frase?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Because renewable energy sources have become significantly cheaper…" },
            { letter: "B", text: "Since renewable energy sources have become significantly cheaper…" },
            { letter: "C", text: "In spite of renewable energy sources becoming significantly cheaper…", correct: true },
            { letter: "D", text: "So that renewable energy sources have become significantly cheaper…" },
            { letter: "E", text: "Unless renewable energy sources have become significantly cheaper…" },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: C.</strong> <em>Although</em> é conjunção de concessão seguida
                de sujeito + verbo. Para substituí-la, precisamos de outro conector de concessão
                com a <em>mesma relação lógica</em>. A alternativa C usa{" "}
                <em>in spite of</em>, que é preposição de concessão — por isso o verbo
                "have become" vira o gerúndio "becoming". As demais introduzem relações
                diferentes: A e B = causa (<em>because/since</em>), D = finalidade (<em>so
                that</em>), E = condição negativa (<em>unless</em>).
              </p>
            </div>
          }
        />

        <Exercise
          level="Avançado"
          title="Advérbios Conectivos — Texto Acadêmico"
          statement={
            <div>
              <p>
                Leia o parágrafo e responda:
              </p>
              <blockquote style={{ borderLeft: "4px solid #10b981", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}>
                "The researchers observed a 40% increase in deforestation rates between 2018 and
                2022. ________, satellite data revealed an alarming expansion of agricultural
                land into previously protected forest areas. ________, indigenous communities
                reported unprecedented disruption to their traditional way of life."
              </blockquote>
              <p>
                Assinale a alternativa que preenche corretamente as lacunas, mantendo a coerência
                argumentativa do parágrafo:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "However / Therefore" },
            { letter: "B", text: "Moreover / Furthermore", correct: true },
            { letter: "C", text: "Nevertheless / In contrast" },
            { letter: "D", text: "As a result / On the other hand" },
            { letter: "E", text: "In conclusion / Although" },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> O parágrafo apresenta uma <em>série de evidências
                que se acumulam</em> sobre o mesmo problema: desmatamento em alta, expansão
                agrícola em áreas protegidas e impacto sobre comunidades indígenas. O fluxo
                lógico é de <strong>adição progressiva</strong> de informações que agravam o
                cenário — e não de contraste ou conclusão. <em>Moreover</em> (além disso — adição
                com ênfase) e <em>furthermore</em> (além disso — reforço) são os conectores
                que expressam exatamente essa acumulação argumentativa crescente. As demais
                opções introduzem contraste (A, C, D parcial) ou conclusão/concessão (E),
                rompendo a coerência do texto.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Conectores em Texto Jornalístico (ENEM-style)"
          statement={
            <div>
              <p>
                Leia o excerto de uma notícia internacional:
              </p>
              <blockquote style={{ borderLeft: "4px solid #f59e0b", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}>
                "The new vaccine was approved in record time <strong>due to</strong> the urgency
                of the health crisis. <strong>However</strong>, many health professionals expressed
                concerns about the accelerated testing process. <strong>Despite</strong> these
                concerns, governments in over 60 countries moved forward with mass vaccination
                campaigns <strong>so that</strong> herd immunity could be achieved before the
                next winter season."
              </blockquote>
              <p>
                Com base na análise dos conectores destacados, a sequência correta das relações
                lógicas estabelecidas no texto é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Finalidade → Adição → Condição → Contraste" },
            { letter: "B", text: "Causa → Contraste → Concessão → Finalidade", correct: true },
            { letter: "C", text: "Causa → Adição → Concessão → Consequência" },
            { letter: "D", text: "Tempo → Contraste → Causa → Finalidade" },
            { letter: "E", text: "Consequência → Contraste → Condição → Adição" },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: B.</strong> Análise conector por conector:
              </p>
              <ul>
                <li>
                  <strong>due to</strong> — preposição de <em>causa</em>: a aprovação acelerada
                  foi <em>causada</em> pela urgência da crise de saúde.
                </li>
                <li>
                  <strong>however</strong> — advérbio de <em>contraste</em>: apesar da aprovação,
                  profissionais expressaram preocupações (ideia oposta).
                </li>
                <li>
                  <strong>despite</strong> — preposição de <em>concessão</em>: mesmo com as
                  preocupações (fato admitido), os governos avançaram (resultado contrário ao
                  esperado).
                </li>
                <li>
                  <strong>so that</strong> — conjunção de <em>finalidade</em>: as campanhas de
                  vacinação tiveram como <em>propósito</em> alcançar imunidade coletiva.
                </li>
              </ul>
              <p>
                A sequência Causa → Contraste → Concessão → Finalidade corresponde exatamente
                à alternativa B.
              </p>
            </div>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Interpretação Global com Conectores (ENEM-style)"
          statement={
            <div>
              <p>
                Leia o texto de opinião:
              </p>
              <blockquote style={{ borderLeft: "4px solid #e879f9", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}>
                "Social media platforms claim they connect people. <strong>While</strong> this
                is partially true, the reality is far more complex. Algorithms are designed
                <strong>so as to</strong> maximize user engagement rather than well-being.
                <strong>As a result</strong>, users are often exposed to content that triggers
                anxiety and polarization. <strong>In spite of</strong> mounting evidence of
                these harms, tech companies have resisted meaningful regulation.{" "}
                <strong>Therefore</strong>, governments must act decisively to protect citizens."
              </blockquote>
              <p>
                A estrutura argumentativa do texto, mapeada pelos conectores, pode ser descrita como:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O autor apresenta uma tese, concede um ponto favorável às plataformas, expõe consequências negativas, reconhece a resistência das empresas e conclui com uma recomendação." , correct: true },
            { letter: "B", text: "O autor refuta completamente a ideia de que redes sociais conectam pessoas, listando apenas argumentos negativos sem qualquer concessão." },
            { letter: "C", text: "O texto apresenta causa e efeito entre o algoritmo e o bem-estar, mas não faz recomendações nem menciona resistência das empresas." },
            { letter: "D", text: "O autor defende que as redes sociais são benéficas, usando conectores para reforçar os pontos positivos ao longo do texto." },
            { letter: "E", text: "O texto é descritivo e neutro, sem tese definida, apenas apresentando dados sobre o funcionamento dos algoritmos." },
          ]}
          resolution={
            <div>
              <p>
                <strong>Resposta: A.</strong> Os conectores revelam o esqueleto argumentativo:
              </p>
              <ul>
                <li>
                  <strong>While</strong> (contraste/concessão): o autor admite parcialmente o
                  argumento das plataformas ("conectam pessoas"), mas introduz imediatamente a
                  complexidade do tema.
                </li>
                <li>
                  <strong>so as to</strong> (finalidade negativa implícita): os algoritmos têm
                  como propósito o engajamento, não o bem-estar — revelando intenção problemática.
                </li>
                <li>
                  <strong>As a result</strong> (consequência): o design dos algoritmos gera
                  ansiedade e polarização.
                </li>
                <li>
                  <strong>In spite of</strong> (concessão): mesmo com evidências dos danos, as
                  empresas resistem à regulação.
                </li>
                <li>
                  <strong>Therefore</strong> (conclusão/consequência): daí a recomendação de
                  ação governamental.
                </li>
              </ul>
              <p>
                A alternativa A é a única que captura todos esses movimentos argumentativos: tese
                parcial → concessão → consequência negativa → resistência → recomendação.
              </p>
            </div>
          }
        />
      </section>
    </article>
  );
}
