"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 7</span>
          <h1>Tabela Periódica: Organização e Classificação</h1>
          <p>
            Conheça a história da tabela periódica, sua organização atual em períodos e grupos, as famílias
            e seus elétrons de valência, a classificação dos elementos (metais, ametais, semimetais e gases
            nobres) e como localizar qualquer elemento a partir da distribuição eletrônica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>1. A Construção da Tabela Periódica</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Cientista</th><th>Ano</th><th>Contribuição</th></tr>
            </thead>
            <tbody>
              <tr><td>Döbereiner</td><td>1817</td><td>Tríades — grupos de 3 elementos com propriedades semelhantes</td></tr>
              <tr><td>Newlands</td><td>1864</td><td>Lei das oitavas — propriedades se repetiam a cada 8 elementos</td></tr>
              <tr><td>Mendeleev</td><td>1869</td><td>Ordenou por massa atômica e previu elementos ainda não descobertos</td></tr>
              <tr><td>Moseley</td><td>1913</td><td>Ordenou por número atômico (Z) — base da tabela atual</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Lei periódica atual (Moseley)</h3>
          <p>
            "As propriedades dos elementos são funções periódicas de seus números atômicos." A genialidade
            de Mendeleev foi <strong>deixar lacunas</strong> e prever as propriedades de elementos como o
            gálio e o germânio, depois confirmados experimentalmente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>2. Períodos e Grupos</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Períodos (linhas)</h3>
            <p>São 7 períodos horizontais. O nº do período = nº de <strong>camadas</strong> eletrônicas do átomo.</p>
          </div>
          <div className="lesson-card">
            <span>↕️</span>
            <h3>Grupos / Famílias (colunas)</h3>
            <p>São 18 grupos verticais. Elementos do mesmo grupo têm o mesmo nº de <strong>elétrons de valência</strong> e propriedades semelhantes.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>
            Exemplo: o cloro (<M>{"Z = 17"}</M>), <M>{"1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5"}</M>, está no{" "}
            <strong>3º período</strong> (3 camadas) e no <strong>grupo 17 (7A)</strong> — possui 7 elétrons
            na camada de valência (<M>{"3s^2\\,3p^5"}</M>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Famílias</span>
        <h2>3. As Famílias dos Elementos Representativos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grupo</th><th>Nome da família</th><th>e⁻ de valência</th><th>Terminação</th></tr>
            </thead>
            <tbody>
              <tr><td>1 (1A)</td><td>Metais alcalinos</td><td>1</td><td><M>{"ns^1"}</M></td></tr>
              <tr><td>2 (2A)</td><td>Metais alcalino-terrosos</td><td>2</td><td><M>{"ns^2"}</M></td></tr>
              <tr><td>13 (3A)</td><td>Família do boro</td><td>3</td><td><M>{"ns^2\\,np^1"}</M></td></tr>
              <tr><td>14 (4A)</td><td>Família do carbono</td><td>4</td><td><M>{"ns^2\\,np^2"}</M></td></tr>
              <tr><td>15 (5A)</td><td>Família do nitrogênio</td><td>5</td><td><M>{"ns^2\\,np^3"}</M></td></tr>
              <tr><td>16 (6A)</td><td>Calcogênios</td><td>6</td><td><M>{"ns^2\\,np^4"}</M></td></tr>
              <tr><td>17 (7A)</td><td>Halogênios</td><td>7</td><td><M>{"ns^2\\,np^5"}</M></td></tr>
              <tr><td>18 (0/8A)</td><td>Gases nobres</td><td>8 (He = 2)</td><td><M>{"ns^2\\,np^6"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Para os elementos representativos (grupos A), o número de elétrons de valência indica o grupo.
            Os gases nobres têm a camada de valência completa — por isso são estáveis e pouco reativos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Metais de transição</span>
        <h2>4. Transição Externa e Interna</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔩</span>
            <h3>Transição externa (grupo B)</h3>
            <p>Grupos 3 a 12. Subnível mais energético é o <M>{"d"}</M>. Ex.: Fe, Cu, Zn, Ag, Au.</p>
          </div>
          <div className="lesson-card">
            <span>💎</span>
            <h3>Transição interna</h3>
            <p>Lantanídeos (4f) e actinídeos (5f) — as duas linhas separadas embaixo. Ex.: U, Th.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>5. Metais, Ametais, Semimetais e Gases Nobres</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Classe</th><th>Características</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Metais</td><td>Brilho, maleáveis, dúcteis, bons condutores; tendem a perder e⁻</td><td>Fe, Cu, Al, Na, Au</td></tr>
              <tr><td>Ametais (não-metais)</td><td>Maus condutores; tendem a ganhar e⁻</td><td>O, N, Cl, S, C</td></tr>
              <tr><td>Semimetais</td><td>Propriedades intermediárias (semicondutores)</td><td>B, Si, Ge, As</td></tr>
              <tr><td>Gases nobres</td><td>Estáveis, camada de valência completa</td><td>He, Ne, Ar, Kr</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            A maioria dos elementos é metálica. O <strong>hidrogênio</strong> é um caso à parte: embora fique
            no grupo 1, não é metal alcalino. O silício e o germânio (semimetais) são a base dos chips e
            semicondutores.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Blocos</span>
        <h2>6. Blocos da Tabela e Localização de um Elemento</h2>
        <p>
          A tabela divide-se em blocos conforme o subnível mais energético: <strong>bloco s</strong>{" "}
          (grupos 1–2), <strong>bloco p</strong> (grupos 13–18), <strong>bloco d</strong> (transição
          externa) e <strong>bloco f</strong> (transição interna).
        </p>
        <div className="math-block">
          <h3>Localizando pela distribuição — exemplo: bromo (Z = 35)</h3>
          <p><M>{"1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^{10}\\,4p^5"}</M></p>
          <ul>
            <li><strong>Período:</strong> maior <M>{"n = 4"}</M> → 4º período;</li>
            <li><strong>Bloco/grupo:</strong> termina em <M>{"4p^5"}</M> → bloco p; valência <M>{"4s^2\\,4p^5 = 7"}</M> elétrons → grupo 17 (halogênios).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📜</span>
            <h3>Moseley</h3>
            <p>Tabela atual ordenada por número atômico (Z).</p>
          </div>
          <div className="math-card">
            <span>↔️</span>
            <h3>Período</h3>
            <p>Linha = nº de camadas eletrônicas.</p>
          </div>
          <div className="math-card">
            <span>↕️</span>
            <h3>Grupo</h3>
            <p>Coluna = mesmos elétrons de valência e propriedades.</p>
          </div>
          <div className="math-card">
            <span>🧂</span>
            <h3>Famílias A</h3>
            <p>1A alcalinos → 8A gases nobres. Valência indica o grupo.</p>
          </div>
          <div className="math-card">
            <span>🔩</span>
            <h3>Classes</h3>
            <p>Metais, ametais, semimetais e gases nobres.</p>
          </div>
          <div className="math-card">
            <span>🧱</span>
            <h3>Blocos</h3>
            <p>s, p, d, f — conforme o subnível mais energético.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa da Tabela Periódica</span>
        <h2>Síntese Visual: Tendências Periódicas</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Tendências periódicas: raio atômico, eletronegatividade e energia de ionização">
          {/* eixo horizontal = períodos */}
          <text x="350" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Tendências na Tabela Periódica</text>
          {/* raio atômico: ↑ descendo, ← da esq pra dir */}
          <rect x="40" y="40" width="180" height="70" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="130" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Raio Atômico</text>
          <text x="130" y="85" textAnchor="middle" fontSize="12" fill="#1d4ed8">↑ desce no grupo</text>
          <text x="130" y="100" textAnchor="middle" fontSize="12" fill="#1d4ed8">↓ avança no período</text>
          {/* eletronegatividade */}
          <rect x="260" y="40" width="180" height="70" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Eletronegatividade</text>
          <text x="350" y="85" textAnchor="middle" fontSize="12" fill="#166534">↓ desce no grupo</text>
          <text x="350" y="100" textAnchor="middle" fontSize="12" fill="#166534">↑ avança no período</text>
          {/* energia de ionização */}
          <rect x="480" y="40" width="180" height="70" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="570" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Energia de</text>
          <text x="570" y="73" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Ionização</text>
          <text x="570" y="93" textAnchor="middle" fontSize="12" fill="#713f12">↓ desce no grupo</text>
          <text x="570" y="108" textAnchor="middle" fontSize="12" fill="#713f12">↑ avança no período</text>
          {/* mapa geral */}
          <rect x="40" y="130" width="620" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          <text x="350" y="150" textAnchor="middle" fontSize="13" fill="#0f172a">← esquerda: metais alcalinos (grupo 1) — doam e⁻ facilmente</text>
          <text x="350" y="168" textAnchor="middle" fontSize="13" fill="#0f172a">→ direita: halogênios (grupo 17) + gases nobres (grupo 18)</text>
          <text x="350" y="188" textAnchor="middle" fontSize="13" fill="#0f172a">Flúor (F): maior eletronegatividade | Cs/Fr: menor energia de ionização</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Grupos e famílias da tabela periódica">
          {[
            ["Grupo 1\nAlcalinos", "#fef3c7", "#d97706", "Li, Na, K\nDoam 1e⁻\nBases fortes", 65],
            ["Grupo 2\nAlcalino-terrosos", "#dcfce7", "#16a34a", "Be, Mg, Ca\nDoam 2e⁻\nBases moderadas", 200],
            ["Grupo 17\nHalogênios", "#dbeafe", "#2563eb", "F, Cl, Br, I\nRecebem 1e⁻\nSais com grupo 1", 335],
            ["Grupo 18\nGases Nobres", "#f3e8ff", "#7c3aed", "He, Ne, Ar\nOcteto completo\nInert (química)", 470],
            ["Metais de\nTransição", "#fce7f3", "#db2777", "Fe, Cu, Zn\nGrupos 3–12\nMultivalentes", 605]
          ].map(([title, fill, stroke, desc, cx]) => (
            <g key={cx as string}>
              <rect x={(cx as number)-90} y="20" width="120" height="155" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="2" />
              <text x={cx as number} y="45" textAnchor="middle" fontSize="11" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[0]}</text>
              <text x={cx as number} y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill={stroke as string}>{(title as string).split("\n")[1] || ""}</text>
              {(desc as string).split("\n").map((line, i) => (
                <text key={i} x={cx as number} y={85+i*18} textAnchor="middle" fontSize="11" fill={stroke as string}>{line}</text>
              ))}
            </g>
          ))}
          <text x="350" y="192" textAnchor="middle" fontSize="12" fill="#0f172a">Grupos = coluna (propriedades semelhantes) | Períodos = linha (mesma camada de valência)</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Critério de ordenação"
          statement={<p>Na tabela periódica atual, os elementos estão organizados em ordem crescente de:</p>}
          options={[
            { letter: "a", text: "Número atômico (Z)", correct: true },
            { letter: "b", text: "Massa atômica" },
            { letter: "c", text: "Número de nêutrons" },
            { letter: "d", text: "Raio atômico" },
          ]}
          resolution={<p>Mendeleev usou a massa atômica, mas Moseley (1913) mostrou que o critério correto é o número atômico (Z), que corrigiu as inversões da tabela de Mendeleev.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Família dos halogênios"
          statement={<p>Os elementos flúor, cloro, bromo e iodo pertencem à família dos:</p>}
          options={[
            { letter: "a", text: "Metais alcalinos" },
            { letter: "b", text: "Calcogênios" },
            { letter: "c", text: "Halogênios (grupo 17)", correct: true },
            { letter: "d", text: "Gases nobres" },
          ]}
          resolution={<p>F, Cl, Br, I e At formam os halogênios (grupo 17 / 7A), com 7 elétrons de valência (<M>{"ns^2\\,np^5"}</M>). São muito reativos e formam sais com metais.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Localização pela distribuição"
          statement={<p>Um elemento tem distribuição <M>{"1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4"}</M>. Ele está localizado no:</p>}
          options={[
            { letter: "a", text: "3º período, grupo 16 (calcogênios)", correct: true },
            { letter: "b", text: "4º período, grupo 14" },
            { letter: "c", text: "2º período, grupo 16" },
            { letter: "d", text: "3º período, grupo 14" },
          ]}
          resolution={<p>Maior <M>{"n = 3"}</M> → 3º período. Valência <M>{"3s^2\\,3p^4 = 6"}</M> elétrons → grupo 16 (calcogênios). É o enxofre (Z = 16).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Famílias e estabilidade"
          statement={<p>Os gases nobres são pouco reativos porque:</p>}
          options={[
            { letter: "a", text: "Possuem a camada de valência completa (8 elétrons, ou 2 no He)", correct: true },
            { letter: "b", text: "Têm massa atômica muito alta" },
            { letter: "c", text: "São todos radioativos" },
            { letter: "d", text: "Têm apenas 1 elétron de valência" },
          ]}
          resolution={<p>Os gases nobres têm a configuração de valência completa (<M>{"ns^2\\,np^6"}</M>, ou apenas <M>{"1s^2"}</M> no hélio), o que confere grande estabilidade — daí a regra do octeto, que outros elementos buscam imitar.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Elemento de transição"
          statement={<p>O elemento de número atômico Z = 24 (cromo) está classificado como elemento de transição externa. A que período e bloco ele pertence?</p>}
          options={[
            { letter: "a", text: "4º período, bloco d", correct: true },
            { letter: "b", text: "3º período, bloco d" },
            { letter: "c", text: "4º período, bloco p" },
            { letter: "d", text: "3º período, bloco s" },
          ]}
          resolution={<p>A distribuição do Cr termina em <M>{"4s^1\\,3d^5"}</M> (configuração anômala estabilizada). Maior <M>{"n = 4"}</M> → 4º período; subnível mais energético é o <M>{"3d"}</M> → bloco d (transição externa).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Semimetais e a era digital"
          statement={<p>Os chips de computadores e celulares são fabricados a partir de um elemento que conduz eletricidade de forma intermediária entre metais e isolantes, sendo por isso chamado de semicondutor. Esse elemento, um semimetal, é o:</p>}
          options={[
            { letter: "a", text: "Silício (Si), um semimetal usado em circuitos integrados.", correct: true },
            { letter: "b", text: "Sódio (Na), um metal alcalino." },
            { letter: "c", text: "Cloro (Cl), um halogênio." },
            { letter: "d", text: "Hélio (He), um gás nobre." },
          ]}
          resolution={<p>O silício (Si), semimetal do grupo 14, tem condutividade intermediária e pode ser "dopado" para controlar sua condução — propriedade essencial para transistores e chips, a base da microeletrônica.</p>}
        />
      </section>
    </article>
  );
}
