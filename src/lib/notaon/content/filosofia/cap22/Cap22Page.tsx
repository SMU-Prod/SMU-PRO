"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 22</span>
          <h1>Hobbes, Locke e Rousseau: Teorias do Contrato Social</h1>
          <p>
            As teorias do contrato social explicam como os seres humanos saíram de um estado de
            natureza para formar a sociedade política. Hobbes, Locke e Rousseau chegaram a conclusões
            radicalmente diferentes sobre a natureza humana, o Estado e os limites do poder, e suas
            ideias ainda fundamentam os debates sobre democracia, direitos e cidadania.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O que é o Contrato Social?</span>
        <h2>1. A Ideia de Contrato Social</h2>
        <p>
          A <strong>teoria do contrato social</strong> parte da pergunta: qual é a origem e a
          legitimidade do poder político? Por que os seres humanos obedecem ao Estado e às leis?
        </p>
        <p>
          A resposta contratualista: há um <em>contrato</em> (explícito ou implícito) pelo qual os
          indivíduos abrem mão de parte de sua liberdade natural em troca de segurança, ordem e
          proteção de seus direitos. O Estado é legítimo porque deriva desse consentimento — não
          de uma origem divina ou de conquista militar.
        </p>
        <p>
          Os três grandes contratualistas — <strong>Hobbes</strong>, <strong>Locke</strong> e
          <strong>Rousseau</strong> — compartilham a estrutura do contrato, mas divergem radicalmente
          em três pontos: a natureza humana no estado de natureza, os termos do contrato e as
          consequências para o governo legítimo.
        </p>
        <div className="lesson-highlight">
          <h3>Por que o contrato social importa para o ENEM?</h3>
          <p>
            As teorias contratualistas são a base filosófica das democracias modernas. A Constituição
            Federal de 1988, a Declaração Universal dos Direitos Humanos e os debates sobre
            soberania popular, direito à resistência e limites do Estado têm raízes diretas em
            Hobbes, Locke e Rousseau.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Thomas Hobbes</span>
        <h2>2. Thomas Hobbes (1588–1679): O Leviatã e a Soberania Absoluta</h2>
        <p>
          <strong>Thomas Hobbes</strong> viveu a Guerra Civil Inglesa e o regicídio de Carlos I
          (1649) — eventos que moldaram seu pessimismo político. Em <em>Leviatã</em> (1651), propõe:
        </p>
        <ul>
          <li>
            <strong>Estado de natureza:</strong> sem governo, os seres humanos vivem em guerra
            permanente de "todos contra todos" (<em>bellum omnium contra omnes</em>). A vida no
            estado de natureza é "solitária, pobre, sórdida, brutal e curta".
          </li>
          <li>
            <strong>Natureza humana:</strong> os seres humanos são movidos pelo autointeresse e
            pelo medo da morte. Sem coerção externa, entram em conflito.
          </li>
          <li>
            <strong>O contrato:</strong> por medo da morte, os indivíduos concordam em transferir
            <em> todos</em> os seus direitos a um soberano (o Leviatã — metáfora de um monstro
            bíblico). O soberano não é parte do contrato — está acima dele.
          </li>
          <li>
            <strong>Soberania absoluta:</strong> o soberano (monarca ou assembleia) tem poder
            absoluto e indivisível. Só é legítimo resistir ao soberano se ele ameaçar diretamente
            a vida do súdito (único direito que não pode ser alienado).
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">John Locke</span>
        <h2>3. John Locke (1632–1704): Propriedade, Consentimento e Direito à Revolução</h2>
        <p>
          <strong>John Locke</strong> viveu a Revolução Gloriosa (1688) e defendeu o parlamentarismo
          inglês. Em <em>Dois Tratados sobre o Governo</em> (1689), propõe:
        </p>
        <ul>
          <li>
            <strong>Estado de natureza:</strong> pacífico e governado pela lei natural (razão). Os
            seres humanos têm, por natureza, direitos a <em>vida, liberdade e propriedade</em>.
          </li>
          <li>
            <strong>Natureza humana:</strong> os seres humanos são racionais e cooperativos, mas
            vulneráveis a conflitos sobre propriedade — daí a necessidade do governo civil.
          </li>
          <li>
            <strong>O contrato:</strong> os indivíduos consentem em criar um governo para proteger
            seus direitos naturais. O governo é um <em>mandatário</em> — age por procuração do povo.
          </li>
          <li>
            <strong>Governo limitado:</strong> o poder do governo é limitado pelos direitos naturais
            que ele deve proteger. Se o governo viola esses direitos, o povo tem o <em>direito à
            revolução</em>.
          </li>
          <li>
            <strong>Separação dos poderes:</strong> Locke distingue o poder legislativo (supremo)
            do executivo (derivado). Influenciou diretamente a Constituição dos EUA.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Jean-Jacques Rousseau</span>
        <h2>4. Jean-Jacques Rousseau (1712–1778): Vontade Geral e Crítica à Propriedade</h2>
        <p>
          <strong>Jean-Jacques Rousseau</strong> é o mais radical dos contratualistas. Em
          <em> O Contrato Social</em> (1762) e no <em>Discurso sobre a Origem da Desigualdade</em>
          (1755), propõe:
        </p>
        <ul>
          <li>
            <strong>Estado de natureza:</strong> os seres humanos são naturalmente bons, livres e
            felizes — o "bom selvagem" não existe em conflito. A corrupção vem da civilização.
          </li>
          <li>
            <strong>A origem da desigualdade:</strong> quando alguém cercou um pedaço de terra e
            disse "isto é meu", nasceu a propriedade privada — e com ela a desigualdade, a
            servidão e o conflito.
          </li>
          <li>
            <strong>O contrato:</strong> os cidadãos se associam e alienam <em>todos</em> os seus
            direitos à <em>comunidade</em> (não a um soberano individual). Cada um obedece à lei
            porque é (direta ou indiretamente) seu autor.
          </li>
          <li>
            <strong>Vontade geral:</strong> a lei deve expressar a vontade geral — o bem comum —
            não os interesses particulares. A soberania é do povo e é inalienável.
          </li>
          <li>
            <strong>Democracia direta:</strong> idealmente, os cidadãos participam diretamente da
            elaboração das leis. A representação é problemática: "O povo inglês pensa que é livre;
            mas está enganado — só é livre durante a eleição dos membros do Parlamento."
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>5. Tabela Comparativa: Os Três Contratualistas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Hobbes</th>
                <th>Locke</th>
                <th>Rousseau</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natureza humana</td>
                <td>Egoísta, conflituosa, violenta</td>
                <td>Racional, cooperativa, mas vulnerável</td>
                <td>Boa, livre, corrompida pela sociedade</td>
              </tr>
              <tr>
                <td>Estado de natureza</td>
                <td>Guerra de todos contra todos</td>
                <td>Paz relativa, mas insegura</td>
                <td>Paz e liberdade originais</td>
              </tr>
              <tr>
                <td>Contrato</td>
                <td>Alienação total ao soberano</td>
                <td>Governo por consentimento, limitado</td>
                <td>Alienação à comunidade; vontade geral</td>
              </tr>
              <tr>
                <td>Soberania</td>
                <td>Absoluta (monarca)</td>
                <td>Parlamentar, limitada pelos direitos</td>
                <td>Popular, inalienável</td>
              </tr>
              <tr>
                <td>Direito à resistência?</td>
                <td>Só se o soberano ameaça a vida</td>
                <td>Sim, se o governo viola os direitos</td>
                <td>A soberania popular nunca pode ser alienada</td>
              </tr>
              <tr>
                <td>Obra principal</td>
                <td>Leviatã (1651)</td>
                <td>Dois Tratados sobre o Governo (1689)</td>
                <td>O Contrato Social (1762)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 220" width="520" height="220" aria-label="Comparativo dos contratualistas">
            <rect x="10" y="10" width="500" height="200" rx="10" fill="#f8fafc" stroke="#6366f1" strokeWidth="1.5"/>
            <text x="260" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3730a3">Os Três Contratos Sociais</text>
            {/* Hobbes */}
            <rect x="25" y="50" width="140" height="140" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5"/>
            <text x="95" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">HOBBES</text>
            <text x="95" y="88" textAnchor="middle" fontSize="9" fill="#7f1d1d">Estado de nat.:</text>
            <text x="95" y="101" textAnchor="middle" fontSize="9" fill="#991b1b">Guerra total</text>
            <text x="95" y="118" textAnchor="middle" fontSize="9" fill="#7f1d1d">Contrato:</text>
            <text x="95" y="131" textAnchor="middle" fontSize="9" fill="#991b1b">Alienação total</text>
            <text x="95" y="148" textAnchor="middle" fontSize="9" fill="#7f1d1d">Resultado:</text>
            <text x="95" y="161" textAnchor="middle" fontSize="9" fill="#991b1b">Soberania absoluta</text>
            <text x="95" y="178" textAnchor="middle" fontSize="10" fill="#b91c1c">👑 Monarca</text>
            {/* Locke */}
            <rect x="190" y="50" width="140" height="140" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="260" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">LOCKE</text>
            <text x="260" y="88" textAnchor="middle" fontSize="9" fill="#14532d">Estado de nat.:</text>
            <text x="260" y="101" textAnchor="middle" fontSize="9" fill="#15803d">Paz relativa</text>
            <text x="260" y="118" textAnchor="middle" fontSize="9" fill="#14532d">Contrato:</text>
            <text x="260" y="131" textAnchor="middle" fontSize="9" fill="#15803d">Governo limitado</text>
            <text x="260" y="148" textAnchor="middle" fontSize="9" fill="#14532d">Resultado:</text>
            <text x="260" y="161" textAnchor="middle" fontSize="9" fill="#15803d">Parlamento + direitos</text>
            <text x="260" y="178" textAnchor="middle" fontSize="10" fill="#166534">🏛️ Liberal</text>
            {/* Rousseau */}
            <rect x="355" y="50" width="140" height="140" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="425" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">ROUSSEAU</text>
            <text x="425" y="88" textAnchor="middle" fontSize="9" fill="#1e3a8a">Estado de nat.:</text>
            <text x="425" y="101" textAnchor="middle" fontSize="9" fill="#1e40af">Paz e bondade</text>
            <text x="425" y="118" textAnchor="middle" fontSize="9" fill="#1e3a8a">Contrato:</text>
            <text x="425" y="131" textAnchor="middle" fontSize="9" fill="#1e40af">Vontade geral</text>
            <text x="425" y="148" textAnchor="middle" fontSize="9" fill="#1e3a8a">Resultado:</text>
            <text x="425" y="161" textAnchor="middle" fontSize="9" fill="#1e40af">Soberania popular</text>
            <text x="425" y="178" textAnchor="middle" fontSize="10" fill="#1d4ed8">🗳️ Democrático</text>
          </svg>
          <figcaption>Os três contratualistas partem de pressupostos diferentes e chegam a modelos políticos distintos.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>6. Impacto nas Democracias Modernas e na CF/88</h2>
        <p>
          As teorias contratualistas têm impacto direto nos documentos fundadores das democracias:
        </p>
        <ul>
          <li>
            <strong>Declaração de Independência dos EUA (1776):</strong> "todos os homens são criados
            iguais; são dotados de direitos inalienáveis, entre os quais, vida, liberdade e busca da
            felicidade" — Locke diretamente.
          </li>
          <li>
            <strong>Declaração dos Direitos do Homem e do Cidadão (1789):</strong> "o princípio de
            toda soberania reside essencialmente na nação" — Rousseau diretamente.
          </li>
          <li>
            <strong>CF/88:</strong> Art. 1º — soberania popular; Art. 2º — separação dos poderes
            (Montesquieu/Locke); Art. 5º — direitos fundamentais inalienáveis (Locke). O parágrafo
            único do Art. 1º: "Todo o poder emana do povo" — Rousseau.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Hobbes e os regimes autoritários</h3>
          <p>
            O Leviatã hobbseano também foi usado para justificar regimes autoritários: se o soberano
            tem poder absoluto para garantir a ordem, qualquer ditador poderia invocar Hobbes.
            Contudo, Hobbes não defendia regimes arbitrários — o soberano tem poder absoluto, mas
            deve garantir a segurança e a paz. Se não o faz, perde sua razão de ser.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM em foco</span>
        <h2>7. O Contrato Social no ENEM: Como Diferenciar os Três Autores</h2>
        <p>
          O ENEM frequentemente apresenta trechos dos três contratualistas e pede para identificar
          o autor ou distinguir suas posições. Veja as palavras-chave que identificam cada um:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Palavra-chave no texto</th><th>Indica</th></tr>
            </thead>
            <tbody>
              <tr><td>"guerra de todos", "solitária e brutal", "medo da morte", "soberano absoluto", "Leviatã"</td><td><strong>Hobbes</strong></td></tr>
              <tr><td>"tábula rasa", "vida, liberdade e propriedade", "consentimento", "governo limitado", "direito à revolução"</td><td><strong>Locke</strong></td></tr>
              <tr><td>"bom selvagem", "vontade geral", "soberania popular", "propriedade como origem da desigualdade", "homem é livre, mas está acorrentado"</td><td><strong>Rousseau</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Além disso, o ENEM gosta de relacionar os três autores a eventos históricos:
        </p>
        <ul>
          <li><strong>Independência americana (1776):</strong> Locke (vida, liberdade, direitos naturais).</li>
          <li><strong>Revolução Francesa (1789):</strong> Rousseau (soberania popular, vontade geral).</li>
          <li><strong>Estado forte, autoritarismo:</strong> Hobbes (soberano absoluto para garantir a ordem).</li>
          <li><strong>CF/88, Art. 1º parágrafo único:</strong> Rousseau ("Todo o poder emana do povo").</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Armadilha clássica: Hobbes e Rousseau sobre a natureza humana</h3>
          <p>
            A armadilha mais frequente: trocar as posições de Hobbes e Rousseau sobre o estado de
            natureza. <strong>Hobbes</strong> = natureza humana má, estado de natureza violento.
            <strong>Rousseau</strong> = natureza humana boa, corrompida pela sociedade. Grave o
            contrário e você erra garantido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Heranças</span>
        <h2>8. Democracia Liberal e Republicanismo: Heranças do Contratualismo</h2>
        <p>
          As teorias do contrato social geraram duas grandes tradições políticas que ainda estruturam
          os debates contemporâneos:
        </p>
        <ul>
          <li>
            <strong>Liberalismo (herança de Locke):</strong> o Estado existe para proteger direitos
            individuais (vida, liberdade, propriedade). O governo deve ser limitado, tolerante e
            respeitar a autonomia privada. A democracia liberal enfatiza direitos individuais,
            eleições, separação dos poderes e Estado de Direito. Influenciou Mill, Rawls e os
            sistemas democráticos ocidentais.
          </li>
          <li>
            <strong>Republicanismo (herança de Rousseau):</strong> a liberdade verdadeira é
            participação política — o cidadão que não participa está sujeito à dominação. O
            republicanismo enfatiza a virtude cívica, a participação direta ou intensa, a soberania
            popular e o bem comum sobre o interesse privado. Influenciou Robespierre, Marx,
            Gramsci e movimentos democráticos participativos.
          </li>
          <li>
            <strong>Autoritarismo (distorção de Hobbes):</strong> a justificativa do soberano
            absoluto por necessidade de ordem foi usada por regimes autoritários. Mas Hobbes não
            defendia a tirania — o soberano tem obrigação de manter a paz, e perde a legitimidade
            se falha nisso.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>John Rawls e o contrato social contemporâneo</h3>
          <p>
            Em <em>Uma Teoria da Justiça</em> (1971), John Rawls atualizou o contrato social:
            imagina um "véu de ignorância" sob o qual os membros de uma sociedade escolhem princípios
            de justiça sem saber qual posição ocuparão nela. Esse experimento mental produz dois
            princípios: liberdades básicas iguais para todos e desigualdades apenas quando beneficiam
            os mais desfavorecidos (princípio da diferença). É a síntese liberal-igualitária do
            contratualismo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📜</span>
            <h3>Contrato Social</h3>
            <p>Indivíduos cedem parte da liberdade para criar Estado legítimo. Base das democracias.</p>
          </div>
          <div className="math-card">
            <span>👹</span>
            <h3>Hobbes</h3>
            <p>Guerra de todos. Alienação total ao soberano. Leviatã. Soberania absoluta.</p>
          </div>
          <div className="math-card">
            <span>🔑</span>
            <h3>Locke</h3>
            <p>Paz relativa. Governo por consentimento. Direito à revolução. Influência nos EUA.</p>
          </div>
          <div className="math-card">
            <span>🌿</span>
            <h3>Rousseau</h3>
            <p>Bom selvagem. Vontade geral. Soberania popular inalienável. Influência na França.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>CF/88</h3>
            <p>"Todo o poder emana do povo" (Rousseau). Separação dos poderes (Locke/Montesquieu).</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Direitos</h3>
            <p>Locke: vida, liberdade, propriedade. DH universal e CF/88 têm raízes contratualistas.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Estado de Natureza em Hobbes"
          statement={<p>Thomas Hobbes descreveu o estado de natureza (antes do contrato social) como uma situação de "guerra de todos contra todos". Qual seria a vida humana nesse estado, segundo Hobbes?</p>}
          options={[
            { letter: "a", text: "Solitária, pobre, sórdida, brutal e curta — dominada pelo medo da morte violenta e pela ausência de qualquer ordem.", correct: true },
            { letter: "b", text: "Pacífica e livre, pois os seres humanos naturalmente cooperam por instinto de sobrevivência." },
            { letter: "c", text: "Boa e feliz, pois sem propriedade privada não há razão para conflito entre as pessoas." },
            { letter: "d", text: "Ordenada e justa, pois a lei natural da razão regula as relações entre os indivíduos." },
          ]}
          resolution={<p>Hobbes descreve o estado de natureza em termos pessimistas: sem governo, cada um pode fazer qualquer coisa contra qualquer outro, e a vida é "solitária, pobre, sórdida, brutal e curta" (<em>solitary, poor, nasty, brutish, and short</em>). É o medo dessa condição que leva os seres humanos a ceder seus direitos ao soberano.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Locke e o Direito à Revolução"
          statement={<p>John Locke defendia que o povo tem direito a resistir ao governo e até depô-lo. Em que circunstâncias esse direito é legítimo, segundo Locke?</p>}
          options={[
            { letter: "a", text: "Quando o governo viola os direitos naturais (vida, liberdade, propriedade) que deveria proteger — o que constitui quebra do contrato.", correct: true },
            { letter: "b", text: "Sempre que a maioria da população discordar das políticas do governo, independentemente de violação de direitos." },
            { letter: "c", text: "Nunca — o contrato social é irrevogável e o povo não tem direito de resistência após firmado." },
            { letter: "d", text: "Apenas quando o governo não pagar os impostos ao parlamento, violando as leis fiscais." },
          ]}
          resolution={<p>Para Locke, o governo existe por consentimento do povo e tem como única finalidade proteger os direitos naturais (vida, liberdade, propriedade). Quando o governante viola sistematicamente esses direitos — tornando-se tirano —, ele quebra o contrato. Nesse caso, o povo recupera sua soberania e tem o direito de resistir, reformar ou substituir o governo. Isso fundamentou a Revolução Americana de 1776.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Rousseau e a Crítica à Representação"
          statement={<p>Rousseau criticou duramente o sistema parlamentar inglês afirmando: "O povo inglês pensa que é livre; mas está enganado — só é livre durante a eleição dos membros do Parlamento." Qual é o fundamento filosófico dessa crítica?</p>}
          options={[
            { letter: "a", text: "A soberania popular é inalienável — o povo não pode transferi-la definitivamente a representantes. Entre eleições, a vontade geral não é expressa, e o povo retorna à servidão.", correct: true },
            { letter: "b", text: "Rousseau criticava o parlamento por ser composto de aristocratas que não representavam os trabalhadores." },
            { letter: "c", text: "A representação política é legítima, mas Rousseau achava que as eleições inglesas eram fraudulentas." },
            { letter: "d", text: "O parlamento inglês não separava adequadamente os poderes, misturando o legislativo com o executivo." },
          ]}
          resolution={<p>Para Rousseau, a <strong>soberania popular</strong> é inalienável: não pode ser transferida permanentemente a representantes. Quando os cidadãos elegem parlamentares e entregam o poder a eles, ficam politicamente passivos até a próxima eleição. Nesse intervalo, a "vontade geral" do povo não se expressa — o que Rousseau vê como uma forma de servidão. Sua alternativa ideal é a democracia direta, em que os cidadãos participam ativamente da elaboração das leis.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) A CF/88 e o Contrato Social"
          statement={<p>O Preâmbulo da Constituição Federal de 1988 afirma que o povo brasileiro "institui um Estado Democrático, destinado a assegurar o exercício dos direitos sociais e individuais, a liberdade, a segurança, o bem-estar, o desenvolvimento, a igualdade e a justiça." O Art. 1º, parágrafo único, acrescenta: "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição." Qual filósofo contratualista está mais diretamente expresso nesse trecho?</p>}
          options={[
            { letter: "a", text: "Rousseau, cuja teoria da soberania popular inalienável e da vontade geral está na base da ideia de que todo poder emana do povo.", correct: true },
            { letter: "b", text: "Hobbes, cuja teoria do soberano absoluto explica a necessidade de um Estado forte e centralizado." },
            { letter: "c", text: "Maquiavel, cuja teoria da virtù do governante está presente na ideia de bem-estar e segurança." },
            { letter: "d", text: "Platão, cuja teoria da república ideal está na base do Estado democrático brasileiro." },
          ]}
          resolution={<p>"Todo o poder emana do povo" é a fórmula clássica da <strong>soberania popular</strong> de Rousseau. A CF/88 também reconhece, com a expressão "por meio de representantes eleitos ou diretamente", a tensão entre democracia representativa (que Rousseau criticava) e democracia direta (que Rousseau preferia), tentando conciliar as duas. Locke e Montesquieu também estão presentes na CF/88 (direitos naturais, separação dos poderes), mas a soberania popular é o legado mais direto de Rousseau.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Hobbes e a Ordem"
          statement={<p>O filósofo Thomas Hobbes viveu o período das guerras civis inglesas e da execução do rei Carlos I (1649). Essa experiência influenciou diretamente sua defesa do soberano absoluto. Considerando seu argumento, para Hobbes, o valor supremo que justifica a existência do Estado é:</p>}
          options={[
            { letter: "a", text: "A segurança e a paz — sem um soberano forte, os seres humanos retornam à guerra de todos contra todos, onde a vida é brutal e curta.", correct: true },
            { letter: "b", text: "A liberdade individual — o Estado existe para maximizar a liberdade de cada cidadão, mesmo ao custo da segurança." },
            { letter: "c", text: "A igualdade social — o soberano deve redistribuir riqueza e garantir condições iguais para todos." },
            { letter: "d", text: "A virtude moral — o soberano deve promover a excelência moral dos cidadãos seguindo preceitos religiosos." },
          ]}
          resolution={<p>Para Hobbes, o valor supremo é a <strong>segurança e a paz</strong>. A memória da guerra civil e do caos político fez de Hobbes um defensor ardente da ordem: melhor um soberano tirânico do que a ausência de governo, que leva ao estado de natureza (guerra de todos contra todos). Essa posição é o oposto de Locke (que valoriza a liberdade) e de Rousseau (que valoriza a igualdade e a vontade geral).</p>}
        />
      </section>
    </article>
  );
}
