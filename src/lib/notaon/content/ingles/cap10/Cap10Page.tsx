"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 10</span>
          <h1>Futuro: Will, Going To e Present Continuous</h1>
          <p>
            Em inglês, não existe uma única forma de expressar o futuro — existem três principais,
            e cada uma carrega uma nuance diferente de intenção, planejamento e certeza. Dominar
            <strong> will</strong>, <strong>going to</strong> e o <strong>Present Continuous com
            valor de futuro</strong> é essencial para interpretar textos de campanhas, notícias,
            publicidade e discursos políticos que aparecem frequentemente nas provas do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>
        <h2>1. As Três Formas do Futuro em Inglês</h2>

        <p>
          Enquanto o português usa principalmente o futuro do presente ("farei", "irá", "vamos
          fazer"), o inglês distingue com precisão o <em>contexto</em> em que o futuro ocorre.
          Essa distinção é o coração deste capítulo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Estrutura</th>
                <th>Uso Principal</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Will</strong></td>
                <td>will + verbo base</td>
                <td>Decisão espontânea, previsão, promessa, oferta</td>
                <td><em>"I'll help you with that."</em></td>
              </tr>
              <tr>
                <td><strong>Going to</strong></td>
                <td>am/is/are + going to + verbo</td>
                <td>Plano prévio, previsão com evidências</td>
                <td><em>"She's going to study medicine."</em></td>
              </tr>
              <tr>
                <td><strong>Present Continuous</strong></td>
                <td>am/is/are + -ing</td>
                <td>Compromisso agendado e confirmado</td>
                <td><em>"We're flying to Paris tomorrow."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Princípio chave:</strong> A escolha entre as três formas depende do{" "}
          <em>grau de planejamento</em> e da <em>fonte da certeza</em>. Will é o mais
          imprevisível/espontâneo; Present Continuous é o mais concreto e confirmado.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Will</span>
        <h2>2. Will — Estrutura, Usos e Contrações</h2>

        <p>
          O <strong>will</strong> é um modal que se combina com o verbo na forma base. Ele
          não muda de forma para nenhuma pessoa (I will, you will, he will...) e sua contração
          é <strong>'ll</strong>. A negativa é <strong>will not</strong> ou <strong>won't</strong>.
        </p>

        <div className="math-block">
          <strong>Estrutura:</strong> Sujeito + will + verbo base
          <br />
          Negativa: Sujeito + won't + verbo base
          <br />
          Interrogativa: Will + sujeito + verbo base?
          <br /><br />
          <em>I <strong>'ll</strong> call you later.</em> — Te ligo mais tarde (decisão espontânea).
          <br />
          <em>It <strong>won't</strong> take long.</em> — Não vai demorar muito (previsão).
          <br />
          <em><strong>Will</strong> you be there?</em> — Você vai estar lá?
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Decisão Espontânea</h3>
            <p>
              Decisão tomada no momento da fala, sem planejamento prévio.
              <br />
              — <em>"We're out of milk."</em>
              <br />
              — <em>"I'll go to the store."</em>
              <br />
              (decidiu agora, não planejou antes)
            </p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>Previsão (sem evidência)</h3>
            <p>
              Opinião ou crença sobre o futuro, sem evidências concretas no presente.
              <br />
              <em>"I think she will pass the exam."</em>
              <br />
              <em>"Scientists predict it will be the hottest year."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Promessa</h3>
            <p>
              Compromisso verbal com outra pessoa.
              <br />
              <em>"I promise I will be there."</em>
              <br />
              <em>"We will never forget your help."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🙋</span>
            <h3>Oferta e Pedido</h3>
            <p>
              Oferecer ajuda ou fazer pedidos formais.
              <br />
              <em>"Will you open the window, please?"</em>
              <br />
              <em>"I'll carry your bags."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Fatos Futuros</h3>
            <p>
              Eventos futuros certos ou resultados inevitáveis.
              <br />
              <em>"The sun will rise at 6:03 a.m. tomorrow."</em>
              <br />
              <em>"The law will come into effect next January."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Condicionais (1st Conditional)</h3>
            <p>
              Resultado provável de uma condição real no presente.
              <br />
              <em>"If it rains, we will cancel the event."</em>
              <br />
              <em>"If you study hard, you will pass."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Going To</span>
        <h2>3. Going To — Planos e Previsões com Evidência</h2>

        <p>
          <strong>Going to</strong> é usado quando há uma intenção prévia ou quando as
          evidências presentes apontam claramente para o futuro. Ele indica que o falante
          <em> já decidiu</em> ou que a conclusão é quase inevitável dado o que se vê agora.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Descrição</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Plano decidido</strong></td>
                <td>Intenção formada antes da fala</td>
                <td><em>I'm going to apply for a scholarship.</em></td>
                <td>Vou me candidatar a uma bolsa. (já planejei)</td>
              </tr>
              <tr>
                <td><strong>Previsão com evidência</strong></td>
                <td>O que se vê agora indica o futuro</td>
                <td><em>Look at those clouds — it's going to rain!</em></td>
                <td>Olha aquelas nuvens — vai chover! (evidência visível)</td>
              </tr>
              <tr>
                <td><strong>Decisão anterior</strong></td>
                <td>O falante informa sobre plano já traçado</td>
                <td><em>They're going to build a new hospital.</em></td>
                <td>Eles vão construir um novo hospital. (já anunciado)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Will vs. Going to — a distinção clássica:</strong>
          <br />
          <em>"I'll open the window."</em> → Decisão espontânea (ninguém pediu antes).
          <br />
          <em>"I'm going to open the window."</em> → Decisão tomada antes, o falante já tinha
          a intenção.
          <br /><br />
          <em>"It will be cold tonight."</em> → Previsão baseada em crença/opinião.
          <br />
          <em>"It's going to be cold — look at the forecast."</em> → Previsão com evidência
          (previsão do tempo).
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Present Continuous para Futuro</span>
        <h2>4. Present Continuous com Valor de Futuro</h2>

        <p>
          Quando o <strong>Present Continuous</strong> é usado com uma expressão de tempo
          futuro, ele indica um compromisso já <em>agendado e confirmado</em> — algo marcado
          na agenda, reservas feitas, convites aceitos. É o nível mais "concreto" e
          comprometido dos três.
        </p>

        <div className="math-block">
          <strong>Dica:</strong> Present Continuous para futuro sempre vem acompanhado de
          uma expressão de tempo futuro (amanhã, na próxima semana, às 3h, etc.) para evitar
          ambiguidade com ação em progresso no presente.
          <br /><br />
          <em>"I <strong>am meeting</strong> the director <strong>tomorrow</strong>."</em> →
          Reunião marcada (agenda confirmada).
          <br />
          <em>"We <strong>are flying</strong> to Rome <strong>next week</strong>."</em> →
          Passagem comprada, viagem agendada.
          <br />
          <em>"She <strong>is presenting</strong> her research <strong>on Friday</strong>."</em> →
          Apresentação já confirmada.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✈️</span>
            <h3>Viagens e Deslocamentos</h3>
            <p>
              Passagens compradas, reservas confirmadas.
              <br />
              <em>"He's flying to Japan next month."</em>
              <br />
              <em>"They're taking the 9 a.m. train."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Compromissos Profissionais</h3>
            <p>
              Reuniões, apresentações, entrevistas marcadas.
              <br />
              <em>"She's giving a lecture on Thursday."</em>
              <br />
              <em>"I'm having an interview tomorrow."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🎉</span>
            <h3>Eventos Sociais</h3>
            <p>
              Festas, jantares, reuniões sociais agendadas.
              <br />
              <em>"We're having dinner with friends tonight."</em>
              <br />
              <em>"They're getting married in June."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>5. Espectro de Planejamento — Da Espontaneidade ao Compromisso</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama mostrando o espectro entre espontaneidade e compromisso para will, going to e present continuous">
            <defs>
              <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: "#fde68a", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#a7f3d0", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#bfdbfe", stopOpacity: 1}} />
              </linearGradient>
              <marker id="arrow10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Barra de gradiente */}
            <rect x="50" y="80" width="600" height="40" fill="url(#grad10)" rx="8" />
            {/* Seta */}
            <line x1="40" y1="100" x2="665" y2="100" stroke="#374151" strokeWidth="1" markerEnd="url(#arrow10)" />
            {/* Labels abaixo */}
            <text x="50" y="140" fontSize="12" fill="#92400e" textAnchor="middle">Espontâneo</text>
            <text x="660" y="140" fontSize="12" fill="#1e40af" textAnchor="middle">Planejado</text>
            {/* Marcadores */}
            <line x1="140" y1="75" x2="140" y2="130" stroke="#b45309" strokeWidth="2" />
            <text x="140" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b45309">WILL</text>
            <text x="140" y="155" textAnchor="middle" fontSize="11" fill="#b45309">Decisão do momento</text>
            <line x1="350" y1="75" x2="350" y2="130" stroke="#065f46" strokeWidth="2" />
            <text x="350" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">GOING TO</text>
            <text x="350" y="155" textAnchor="middle" fontSize="11" fill="#065f46">Plano com intenção prévia</text>
            <line x1="560" y1="75" x2="560" y2="130" stroke="#1e40af" strokeWidth="2" />
            <text x="560" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">PRES. CONT.</text>
            <text x="560" y="155" textAnchor="middle" fontSize="11" fill="#1e40af">Compromisso confirmado</text>
          </svg>
          <figcaption>Quanto mais à direita, maior o grau de planejamento e confirmação. Will é o mais espontâneo; Present Continuous é o mais comprometido e concreto.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Expressões Temporais</span>
        <h2>6. Marcadores de Tempo com Referência Futura</h2>

        <p>
          Certas expressões temporais são "pistas" para identificar contextos de futuro em
          textos. Reconhecê-las é uma estratégia importante de leitura no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão</th>
                <th>Tradução</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>tomorrow</em></td>
                <td>amanhã</td>
                <td><em>"The results will be announced tomorrow."</em></td>
              </tr>
              <tr>
                <td><em>next week / month / year</em></td>
                <td>na próxima semana / mês / ano</td>
                <td><em>"She's going to graduate next year."</em></td>
              </tr>
              <tr>
                <td><em>soon</em></td>
                <td>em breve</td>
                <td><em>"The update will be available soon."</em></td>
              </tr>
              <tr>
                <td><em>in the future</em></td>
                <td>no futuro</td>
                <td><em>"In the future, AI will transform healthcare."</em></td>
              </tr>
              <tr>
                <td><em>by [data]</em></td>
                <td>até [data]</td>
                <td><em>"We will finish by December."</em></td>
              </tr>
              <tr>
                <td><em>in [número] years/days</em></td>
                <td>em [número] anos/dias</td>
                <td><em>"In 10 years, the city will double in size."</em></td>
              </tr>
              <tr>
                <td><em>on [dia da semana]</em></td>
                <td>na [dia da semana]</td>
                <td><em>"She is presenting on Monday."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>
        <h2>7. Will, Going To e Present Continuous — Comparação Definitiva</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Will</th>
                <th>Going To</th>
                <th>Present Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Planejamento</strong></td>
                <td>Nenhum (espontâneo)</td>
                <td>Intenção prévia</td>
                <td>Totalmente planejado</td>
              </tr>
              <tr>
                <td><strong>Evidência</strong></td>
                <td>Nenhuma (opinião/crença)</td>
                <td>Evidência presente visível</td>
                <td>Evidência concreta (bilhete, agenda)</td>
              </tr>
              <tr>
                <td><strong>Certeza</strong></td>
                <td>Moderada</td>
                <td>Alta (baseada em evidência)</td>
                <td>Muito alta (compromisso)</td>
              </tr>
              <tr>
                <td><strong>Tipo de evento</strong></td>
                <td>Promessa, previsão, oferta</td>
                <td>Plano, previsão com base</td>
                <td>Agendamento confirmado</td>
              </tr>
              <tr>
                <td><strong>Exemplo</strong></td>
                <td><em>"I'll send you an email."</em></td>
                <td><em>"She's going to move to Paris."</em></td>
                <td><em>"We're leaving at noon."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos de campanha e publicidade, o <em>will</em>{" "}
          é frequentemente usado para fazer <strong>promessas e previsões positivas</strong>:{" "}
          <em>"This product will change your life."</em>,{" "}
          <em>"Together, we will build a better future."</em> Identificar esse tom persuasivo
          é fundamental para responder questões sobre intenção comunicativa.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na Prática</span>
        <h2>8. Futuro em Textos do ENEM — Padrões e Armadilhas</h2>

        <p>
          O ENEM apresenta textos de diversos gêneros que expressam futuro com nuances
          diferentes. Reconhecer esses padrões é fundamental para a interpretação correta.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama mostrando gêneros textuais e formas de futuro associadas no ENEM">
            <rect width="700" height="200" fill="#f8fafc" rx="10" />
            {/* Caixas de gêneros */}
            <rect x="20" y="20" width="180" height="70" fill="#dbeafe" rx="8" />
            <text x="110" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Discurso Político</text>
            <text x="110" y="65" textAnchor="middle" fontSize="11" fill="#1e40af">Will (promessas)</text>
            <text x="110" y="80" textAnchor="middle" fontSize="10" fill="#1e40af">"We will improve..."</text>
            <rect x="220" y="20" width="180" height="70" fill="#dcfce7" rx="8" />
            <text x="310" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Notícia / Manchete</text>
            <text x="310" y="65" textAnchor="middle" fontSize="11" fill="#166534">Will / Going to</text>
            <text x="310" y="80" textAnchor="middle" fontSize="10" fill="#166534">"City is going to..."</text>
            <rect x="420" y="20" width="180" height="70" fill="#fef9c3" rx="8" />
            <text x="510" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854d0e">Publicidade</text>
            <text x="510" y="65" textAnchor="middle" fontSize="11" fill="#854d0e">Will (promessa persuasiva)</text>
            <text x="510" y="80" textAnchor="middle" fontSize="10" fill="#854d0e">"This will transform..."</text>
            <rect x="100" y="115" width="200" height="70" fill="#fce7f3" rx="8" />
            <text x="200" y="143" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Texto Científico</text>
            <text x="200" y="160" textAnchor="middle" fontSize="11" fill="#9d174d">Will (previsões)</text>
            <text x="200" y="175" textAnchor="middle" fontSize="10" fill="#9d174d">"Temperatures will rise..."</text>
            <rect x="360" y="115" width="200" height="70" fill="#ede9fe" rx="8" />
            <text x="460" y="143" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5b21b6">Carta / E-mail</text>
            <text x="460" y="160" textAnchor="middle" fontSize="11" fill="#5b21b6">Present Cont. (agenda)</text>
            <text x="460" y="175" textAnchor="middle" fontSize="10" fill="#5b21b6">"I'm meeting you..."</text>
          </svg>
          <figcaption>Mapa de uso das formas de futuro nos principais gêneros textuais cobrados no ENEM.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Campanhas Políticas</h3>
            <p>
              Usam <em>will</em> para fazer promessas e criar expectativas positivas no eleitorado.
              <em>"We will create 1 million jobs."</em>
              <em>"Together, we will defeat poverty."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Relatórios Científicos</h3>
            <p>
              Usam <em>will</em> para previsões baseadas em modelos e dados, e <em>going to</em>
              quando a tendência já é evidente.
              <em>"Global temperatures will increase by 2°C."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Agendas e Programações</h3>
            <p>
              Usam Present Continuous para eventos já marcados, especialmente em e-mails e
              convites formais.
              <em>"The conference is starting at 9 a.m."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 9 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Will — Decisão Espontânea"
          statement={
            <p>
              Em qual situação o uso de <em>will</em> é mais adequado?
            </p>
          }
          options={[
            { letter: "A", text: <><em>"I'm going to study tonight."</em> — plano feito ontem.</> },
            { letter: "B", text: <><em>"We are flying to Rio next week."</em> — passagens compradas.</> },
            { letter: "C", text: <><em>"I'll answer the phone!"</em> — telefone toca e alguém decide ajudar.</>, correct: true },
            { letter: "D", text: <><em>"Look at those clouds — it's going to rain."</em> — evidência visível.</> },
            { letter: "E", text: <><em>"She is meeting the client on Thursday."</em> — reunião na agenda.</> },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. <em>"I'll answer the phone!"</em> é
              um exemplo clássico de <strong>decisão espontânea</strong>: o falante toma a
              decisão no exato momento em que o telefone toca, sem nenhum planejamento anterior.
              Essa é a situação prototípica para o uso de <em>will</em>. As opções A e D usam
              <em>going to</em> corretamente (plano prévio e evidência). B e E usam Present
              Continuous corretamente para compromissos já confirmados.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Going To com Evidência"
          statement={
            <p>
              Leia a situação e escolha a forma mais adequada:
              <br /><br />
              <em>Um médico observa um paciente que está muito pálido, suando frio e com a
              pressão baixando. Ele diz ao enfermeiro:</em>
              <br /><br />
              <em>"He ______ faint. Call for help!"</em>
            </p>
          }
          options={[
            { letter: "A", text: "will faint" },
            { letter: "B", text: "is going to faint", correct: true },
            { letter: "C", text: "is fainting" },
            { letter: "D", text: "faints" },
            { letter: "E", text: "would faint" },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B — is going to faint</strong>. Há evidências
              concretas e visíveis no presente (palidez, sudorese, pressão baixa) que indicam
              claramente que o desmaio é iminente. Esse é o uso clássico de <em>going to</em>
              para <strong>previsões baseadas em evidências presentes</strong>. O uso de
              <em>will</em> (A) seria inadequado pois ele expressa previsão sem evidência
              concreta. C usaria Present Continuous — o paciente ainda não está desmaiando.
              D usa Simple Present. E usa conditional.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Interpretação de Texto com Três Formas de Futuro"
          statement={
            <p>
              Leia o trecho de uma notícia:
              <br /><br />
              <em>"The city council <strong>is announcing</strong> new environmental policies
              next Monday. Officials believe these measures <strong>will reduce</strong> carbon
              emissions by 30% within five years. The mayor <strong>is going to sign</strong>
              the decree at the official ceremony, which has already been planned."</em>
              <br /><br />
              Analise o uso dos três futuros no texto e escolha a alternativa correta:
            </p>
          }
          options={[
            { letter: "A", text: "Todas as três formas são intercambiáveis; o autor poderia ter usado will em todos os casos." },
            { letter: "B", text: "O Present Continuous indica o anúncio como evento já agendado; will expressa previsão baseada em crença; going to indica intenção prévia confirmada.", correct: true },
            { letter: "C", text: "Will é o mais adequado para o decreto pois é uma decisão espontânea do prefeito." },
            { letter: "D", text: "Going to é sempre mais formal que will em textos jornalísticos." },
            { letter: "E", text: "O Present Continuous ('is announcing') indica que o anúncio está acontecendo agora." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. O texto usa as três formas com precisão:
              <em>"is announcing"</em> (Present Continuous) indica evento já agendado para
              segunda-feira — compromisso confirmado. <em>"will reduce"</em> expressa a
              previsão/crença dos oficiais sobre o impacto futuro — uso típico de will para
              previsões sem evidência imediata. <em>"is going to sign"</em> refere-se ao
              decreto que o prefeito já tinha a intenção de assinar (a cerimônia "já foi
              planejada") — uso de going to para plano prévio. A opção A está errada porque
              os usos não são intercambiáveis sem alteração de significado. E está errada
              porque o anúncio é para a próxima segunda, não agora.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Will em Discurso Político"
          statement={
            <p>
              Leia o trecho de um discurso político:
              <br /><br />
              <em>"If you vote for us, <strong>we will</strong> invest in education,
              <strong>we will</strong> create new jobs, and <strong>we will</strong> build a
              healthier nation. This is not a promise — this is a commitment."</em>
              <br /><br />
              O uso repetido de <em>will</em> no discurso tem como principal função retórica:
            </p>
          }
          options={[
            { letter: "A", text: "Indicar que as ações são espontâneas e não foram planejadas." },
            { letter: "B", text: "Expressar previsões científicas baseadas em dados concretos." },
            { letter: "C", text: "Criar um senso de comprometimento e urgência por meio de promessas explícitas ao eleitorado.", correct: true },
            { letter: "D", text: "Mostrar que as ações já foram iniciadas e estão em progresso." },
            { letter: "E", text: "Indicar planos já agendados e compromissos confirmados na agenda." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O uso repetido de <em>will</em> em
              série ("we will... we will... we will...") é um recurso retórico chamado de
              <em>anáfora</em>, muito comum em discursos políticos. Nesse contexto, o{" "}
              <em>will</em> funciona como <strong>promessa</strong> — o candidato compromete-se
              com ações futuras condicionadas ao voto. O próprio texto confirma isso: "this is
              not a promise — this is a commitment" usa o mesmo sentido de comprometimento
              que <em>will</em> expressa. Não são decisões espontâneas (A), nem previsões
              científicas (B), nem ações já iniciadas (D), nem agendamentos (E).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Present Continuous vs. Going To"
          statement={
            <p>
              Leia as duas frases e escolha a análise correta:
              <br /><br />
              <em>(1) "She's going to get a new job — she's been applying for months."</em>
              <br />
              <em>(2) "She's starting her new job on Monday — everything is confirmed."</em>
              <br /><br />
              A diferença entre as formas de futuro das duas frases é:
            </p>
          }
          options={[
            { letter: "A", text: "A frase 1 indica certeza maior que a frase 2." },
            { letter: "B", text: "A frase 1 expressa intenção/plano em andamento (sem confirmação final); a frase 2 expressa compromisso já confirmado e data definida.", correct: true },
            { letter: "C", text: "As frases são equivalentes em significado — tanto going to quanto present continuous indicam o mesmo grau de planejamento." },
            { letter: "D", text: "A frase 2 deveria usar will porque a data está confirmada." },
            { letter: "E", text: "Going to só pode ser usado quando há evidência visual presente." },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. A frase 1 usa <em>going to</em>: a
              pessoa tem a intenção clara (está se candidatando há meses), mas ainda não
              obteve o emprego — é um plano/intenção com forte indício mas sem confirmação
              final. A frase 2 usa Present Continuous (<em>is starting</em>): o emprego foi
              conseguido, a data de início está definida (<em>on Monday</em>) e tudo foi
              confirmado — é o uso clássico de Present Continuous para compromissos agendados
              e concretos. A opção A inverte a lógica: o Present Continuous indica maior
              confirmação. C está errada pois os graus de certeza diferem. D está errada
              porque <em>will</em> seria menos adequado que Present Continuous para um
              compromisso já confirmado.
            </p>
          }
        />
      </section>
    </article>
  );
}
