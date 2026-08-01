"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 28</span>
          <h1>Iluminismo e Independência dos Estados Unidos</h1>
          <p>
            O século XVIII foi palco de uma revolução nas ideias que mudaria o
            mundo para sempre. O Iluminismo — movimento filosófico que colocou a
            razão no centro de tudo — forneceu as ferramentas intelectuais para
            questionar reis, igrejas e tradições. Foi esse arsenal de ideias que
            inspirou as 13 Colônias britânicas da América do Norte a se tornarem
            os Estados Unidos da América, criando o primeiro grande Estado
            republicano da era moderna. Compreender esses conceitos é
            indispensável para o ENEM, que frequentemente cobra a relação entre
            filosofia iluminista e os processos revolucionários do século XVIII.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O que foi o Iluminismo</h2>
        <p>
          O <strong>Iluminismo</strong> (também chamado de <em>Ilustração</em>{" "}
          ou <em>Século das Luzes</em>) foi um movimento intelectual e filosófico
          que dominou a Europa — especialmente a França e a Inglaterra — durante
          o século XVIII. Seu nome não é por acaso: os iluministas acreditavam
          que a <strong>razão</strong> era a "luz" que dissiparia as trevas da
          ignorância, do fanatismo religioso e do absolutismo.
        </p>
        <p>
          O Iluminismo surgiu num contexto específico: a{" "}
          <strong>burguesia em ascensão</strong> precisava de uma justificativa
          filosófica para questionar os privilégios da nobreza e do clero. A
          ciência newtoniana havia demonstrado que o universo obedecia a leis
          racionais e mecânicas — se a natureza tinha leis, a sociedade também
          deveria tê-las.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💡</span>
            <h3>Racionalismo</h3>
            <p>A razão é o único instrumento confiável para conhecer a verdade. Tudo deve ser examinado criticamente, sem aceitar dogmas.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Universalismo</h3>
            <p>Todos os seres humanos possuem os mesmos direitos naturais, independentemente de sua origem, classe ou religião.</p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Progressismo</h3>
            <p>A história humana avança em direção ao progresso. A razão e a ciência levarão a humanidade a um futuro melhor.</p>
          </div>
          <div className="lesson-card">
            <span>⛪</span>
            <h3>Laicismo</h3>
            <p>O Estado deve ser separado da Igreja. As decisões políticas devem se basear na razão, não na fé.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>A Encyclopédie (1751–1772):</strong> Diderot e d'Alembert
          organizaram a grande obra coletiva do Iluminismo — uma enciclopédia
          com 35 volumes que reunia todo o conhecimento humano e criticava
          velados ou abertamente o absolutismo e a Igreja. Foi censurada, mas
          circulou amplamente pela Europa.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Filósofos</span>
        <h2>2. Os Principais Filósofos Iluministas</h2>
        <p>
          Os iluministas — chamados de <em>philosophes</em> na França — não
          eram um grupo homogêneo. Discordavam em muitos pontos, mas
          compartilhavam a fé na razão e a crítica às instituições tradicionais.
          Reuniam-se nos <strong>salões parisienses</strong> — encontros
          organizados por mulheres da elite (as <em>salonières</em>) onde as
          ideias circulavam livremente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Os Grandes Filósofos do Iluminismo</caption>
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>País / Datas</th>
                <th>Obra Principal</th>
                <th>Contribuição Central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Locke</td>
                <td>Inglaterra (1632–1704)</td>
                <td>Dois Tratados sobre o Governo Civil (1689)</td>
                <td>Direitos naturais (vida, liberdade, propriedade); contrato social; direito à revolução</td>
              </tr>
              <tr>
                <td>Montesquieu</td>
                <td>França (1689–1755)</td>
                <td>O Espírito das Leis (1748)</td>
                <td>Separação dos três poderes (Executivo, Legislativo, Judiciário)</td>
              </tr>
              <tr>
                <td>Rousseau</td>
                <td>Suíça/França (1712–1778)</td>
                <td>O Contrato Social (1762)</td>
                <td>Soberania popular; "vontade geral"; homem nasce bom e a sociedade o corrompe</td>
              </tr>
              <tr>
                <td>Voltaire</td>
                <td>França (1694–1778)</td>
                <td>Cândido (1759); Cartas Filosóficas (1734)</td>
                <td>Tolerância religiosa; anticlericalismo; racionalismo histórico</td>
              </tr>
              <tr>
                <td>Adam Smith</td>
                <td>Escócia (1723–1790)</td>
                <td>A Riqueza das Nações (1776)</td>
                <td>Liberalismo econômico; mercado livre; "mão invisível"; crítica ao mercantilismo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>John Locke e os direitos naturais</h3>
        <p>
          Locke é o pai do <strong>liberalismo político</strong>. Para ele, os
          seres humanos nascem com três direitos inalienáveis: vida, liberdade e
          propriedade. O governo existe por meio de um{" "}
          <strong>contrato social</strong> — os cidadãos cedem parte de sua
          liberdade em troca de proteção. Se o governo violar esses direitos, os
          cidadãos têm o{" "}
          <strong>direito à revolução</strong>. Essa ideia influenciou
          diretamente a Declaração de Independência dos EUA de 1776.
        </p>
        <h3>Montesquieu e a separação dos poderes</h3>
        <p>
          Montesquieu estudou as constituições de diferentes países e concluiu
          que a tirania surge quando o mesmo grupo detém o poder de fazer as
          leis, executá-las e julgá-las. A solução: dividir o poder em três
          poderes independentes — <strong>Legislativo</strong> (faz as leis),{" "}
          <strong>Executivo</strong> (executa as leis) e{" "}
          <strong>Judiciário</strong> (julga a aplicação das leis) — num sistema
          de freios e contrapesos. Essa ideia está na base das constituições dos
          EUA (1787) e do Brasil (1824 e 1988).
        </p>
        <h3>Rousseau e a soberania popular</h3>
        <p>
          Rousseau discordava de Locke num ponto fundamental: para ele, o
          problema não era o governo ruim, mas a <strong>propriedade privada</strong>,
          que gerava desigualdade. O "bom selvagem" vivia em harmonia até que a
          propriedade criou a competição e a guerra. A solução era um contrato
          social baseado na <strong>vontade geral</strong> — a soberania popular
          coletiva, não apenas a soma dos interesses individuais. Rousseau
          influenciou especialmente a Revolução Francesa.
        </p>
      </section>

      {/* ── SEÇÃO 3 — SVG LINHA DO TEMPO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>3. Linha do Tempo: Iluminismo e Independência Americana</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Linha do tempo do Iluminismo e Independência Americana de 1620 a 1791"
          >
            <rect x="0" y="0" width="700" height="320" fill="#fafafa" rx="8" />
            {/* Linha central */}
            <line x1="30" y1="160" x2="680" y2="160" stroke="#1565c0" strokeWidth="3" />
            {/* Seta */}
            <polygon points="680,154 695,160 680,166" fill="#1565c0" />

            {/* Eventos — parte superior */}
            {/* 1620 */}
            <line x1="65" y1="160" x2="65" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="65" cy="160" r="6" fill="#1565c0" />
            <rect x="20" y="55" width="90" height="30" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="65" y="69" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">1620</text>
            <text x="65" y="80" textAnchor="middle" fontSize="8" fill="#333">Mayflower</text>

            {/* 1689 */}
            <line x1="155" y1="160" x2="155" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="155" cy="160" r="6" fill="#1565c0" />
            <rect x="110" y="55" width="90" height="30" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="155" y="69" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">1689</text>
            <text x="155" y="80" textAnchor="middle" fontSize="8" fill="#333">Locke: Governo Civil</text>

            {/* 1748 */}
            <line x1="245" y1="160" x2="245" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="245" cy="160" r="6" fill="#1565c0" />
            <rect x="200" y="55" width="90" height="30" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="245" y="69" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">1748</text>
            <text x="245" y="80" textAnchor="middle" fontSize="8" fill="#333">Montesquieu: Espírito</text>

            {/* 1762 */}
            <line x1="335" y1="160" x2="335" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="335" cy="160" r="6" fill="#1565c0" />
            <rect x="290" y="55" width="90" height="30" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="335" y="69" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">1762</text>
            <text x="335" y="80" textAnchor="middle" fontSize="8" fill="#333">Rousseau: Contrato Social</text>

            {/* Eventos — parte inferior */}
            {/* 1773 */}
            <line x1="425" y1="160" x2="425" y2="240" stroke="#555" strokeWidth="1.5" />
            <circle cx="425" cy="160" r="6" fill="#c62828" />
            <rect x="380" y="240" width="90" height="30" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="425" y="254" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1773</text>
            <text x="425" y="265" textAnchor="middle" fontSize="8" fill="#333">Boston Tea Party</text>

            {/* 1776 */}
            <line x1="500" y1="160" x2="500" y2="240" stroke="#555" strokeWidth="1.5" />
            <circle cx="500" cy="160" r="8" fill="#c62828" />
            <rect x="455" y="240" width="90" height="30" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="500" y="254" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">4/07/1776</text>
            <text x="500" y="265" textAnchor="middle" fontSize="8" fill="#333">Declaração Independência</text>

            {/* 1787 */}
            <line x1="575" y1="160" x2="575" y2="240" stroke="#555" strokeWidth="1.5" />
            <circle cx="575" cy="160" r="6" fill="#c62828" />
            <rect x="530" y="240" width="90" height="30" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="575" y="254" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1787</text>
            <text x="575" y="265" textAnchor="middle" fontSize="8" fill="#333">Constituição dos EUA</text>

            {/* 1791 */}
            <line x1="645" y1="160" x2="645" y2="240" stroke="#555" strokeWidth="1.5" />
            <circle cx="645" cy="160" r="6" fill="#c62828" />
            <rect x="600" y="240" width="90" height="30" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="645" y="254" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1791</text>
            <text x="645" y="265" textAnchor="middle" fontSize="8" fill="#333">Bill of Rights</text>

            {/* Legenda */}
            <rect x="30" y="280" width="120" height="25" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="90" y="297" textAnchor="middle" fontSize="9" fill="#1565c0">Iluminismo europeu</text>
            <rect x="160" y="280" width="130" height="25" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="225" y="297" textAnchor="middle" fontSize="9" fill="#c62828">Independência americana</text>
          </svg>
          <figcaption>Linha do tempo do Iluminismo e da Independência dos Estados Unidos (1620–1791)</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Colonial</span>
        <h2>4. As 13 Colônias e o Conflito com a Metrópole</h2>
        <p>
          As 13 Colônias britânicas na costa leste da América do Norte tinham
          origens diversas: as colônias do Norte (Nova Inglaterra) foram fundadas
          por puritanos que buscavam liberdade religiosa — os Peregrinos do{" "}
          <strong>Mayflower</strong> chegaram em 1620. As colônias do Sul
          (Virginia, Carolinas) tinham motivações econômicas e praticavam
          trabalho escravo em larga escala.
        </p>
        <p>
          Com o tempo, as colônias desenvolveram uma{" "}
          <strong>mentalidade de autogoverno</strong>: cada uma tinha sua própria
          assembleia legislativa, que decidia sobre impostos locais. Quando a
          metrópole britânica — endividada após a{" "}
          <strong>Guerra dos Sete Anos (1756–1763)</strong>, travada em parte em
          território americano — começou a impor novos tributos sem consultar as
          assembleias coloniais, o conflito foi inevitável.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>A Escalada do Conflito com a Grã-Bretanha</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Evento</th>
                <th>Conteúdo</th>
                <th>Reação Colonial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1765</td>
                <td>Stamp Act</td>
                <td>Imposto sobre documentos, jornais, cartas e contratos</td>
                <td>"No taxation without representation!" (sem representação, sem impostos)</td>
              </tr>
              <tr>
                <td>1767</td>
                <td>Townshend Acts</td>
                <td>Taxas sobre vidro, papel, tinta e chá importados</td>
                <td>Boicote a produtos britânicos; Filha da Liberdade</td>
              </tr>
              <tr>
                <td>1773</td>
                <td>Tea Act</td>
                <td>Monopólio do chá para a Companhia das Índias Orientais</td>
                <td>Boston Tea Party: 342 caixas de chá jogadas ao porto</td>
              </tr>
              <tr>
                <td>1774</td>
                <td>Leis Intoleráveis</td>
                <td>Punição a Boston: fechamento do porto, ocupação militar</td>
                <td>1º Congresso Continental (Filadélfia, 1774)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O slogan <em>"no taxation without representation"</em> — sem
          representação, sem tributação — sintetizava o argumento lockeano: o
          governo só pode taxar quem tem voz no processo. O Parlamento britânico
          não incluía representantes das colônias americanas.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Independência</span>
        <h2>5. A Guerra e a Declaração de Independência (1776)</h2>
        <p>
          Em abril de 1775, os primeiros tiros foram disparados em{" "}
          <strong>Lexington e Concord</strong> (Massachusetts). O{" "}
          <strong>Segundo Congresso Continental</strong> (1775) assumiu o
          comando das operações militares e nomeou{" "}
          <strong>George Washington</strong> como comandante-geral das forças
          coloniais.
        </p>
        <p>
          Em janeiro de 1776, o jornalista e ativista Thomas Paine publicou{" "}
          <strong>"Senso Comum"</strong> (<em>Common Sense</em>) — um panfleto
          de linguagem acessível que argumentava pela independência total e pela
          república, tornando-se um fenômeno editorial com 500.000 cópias
          vendidas.
        </p>
        <p>
          Em <strong>4 de julho de 1776</strong>, o Congresso aprovou a{" "}
          <strong>Declaração de Independência</strong>, redigida principalmente
          por <strong>Thomas Jefferson</strong>, com forte influência de John
          Locke. O texto proclama que "todos os homens são criados iguais" e
          dotados de direitos inalienáveis: "vida, liberdade e busca da
          felicidade" (adaptação de Locke: vida, liberdade e propriedade).
        </p>
        <p>
          A guerra durou até 1781. A virada decisiva foi a aliança com a{" "}
          <strong>França de Luís XVI</strong> — ironia histórica: um rei absoluto
          ajudando colonos republicanos para prejudicar a rival Grã-Bretanha. A
          Batalha de <strong>Yorktown (1781)</strong> foi o último grande
          confronto; a Grã-Bretanha reconheceu a independência no{" "}
          <strong>Tratado de Paris (1783)</strong>.
        </p>
      </section>

      {/* ── SEÇÃO 6 — SVG SEPARAÇÃO DOS PODERES ── */}
      <section className="lesson-section">
        <span className="section-kicker">Instituições</span>
        <h2>6. A Constituição dos EUA e a Separação dos Poderes</h2>
        <p>
          Em 1787, os <em>Founding Fathers</em> se reuniram na Convenção
          da Filadélfia para redigir a <strong>Constituição dos Estados
          Unidos</strong> — a mais antiga constituição escrita ainda em vigor no
          mundo. Ela criou uma{" "}
          <strong>república federativa presidencialista</strong>, com separação
          dos poderes baseada em Montesquieu.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 480 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Diagrama da separação dos três poderes proposta por Montesquieu"
          >
            <rect x="0" y="0" width="480" height="320" fill="#f5f5f5" rx="8" />
            <text x="240" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Separação dos Poderes — Montesquieu</text>
            <text x="240" y="48" textAnchor="middle" fontSize="10" fill="#555">Sistema de Freios e Contrapesos (Checks and Balances)</text>

            {/* Triângulo */}
            <polygon points="240,70 80,260 400,260" fill="none" stroke="#1565c0" strokeWidth="2" />

            {/* Executivo — topo */}
            <rect x="185" y="55" width="110" height="60" fill="#1565c0" rx="6" />
            <text x="240" y="79" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">EXECUTIVO</text>
            <text x="240" y="94" textAnchor="middle" fontSize="9" fill="#bbdefb">EUA: Presidente</text>
            <text x="240" y="107" textAnchor="middle" fontSize="9" fill="#bbdefb">Executa as leis</text>

            {/* Legislativo — esquerda */}
            <rect x="25" y="250" width="130" height="60" fill="#388e3c" rx="6" />
            <text x="90" y="274" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">LEGISLATIVO</text>
            <text x="90" y="289" textAnchor="middle" fontSize="9" fill="#c8e6c9">EUA: Congresso</text>
            <text x="90" y="302" textAnchor="middle" fontSize="9" fill="#c8e6c9">Senado + Câmara</text>

            {/* Judiciário — direita */}
            <rect x="325" y="250" width="130" height="60" fill="#c62828" rx="6" />
            <text x="390" y="274" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">JUDICIÁRIO</text>
            <text x="390" y="289" textAnchor="middle" fontSize="9" fill="#ffcdd2">EUA: Suprema Corte</text>
            <text x="390" y="302" textAnchor="middle" fontSize="9" fill="#ffcdd2">Julga as leis</text>

            {/* Setas de freios e contrapesos */}
            <path d="M 200,115 Q 130,175 105,250" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
            <path d="M 280,115 Q 350,175 375,250" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="5,3" />
            <path d="M 155,270 L 325,270" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="5,3" />

            {/* Rótulos dos freios */}
            <text x="125" y="195" fontSize="8" fill="#555" transform="rotate(-55,125,195)">nomeia juízes</text>
            <text x="315" y="215" fontSize="8" fill="#555" transform="rotate(50,315,215)">veto de leis</text>
            <text x="230" y="265" fontSize="8" fill="#555">controla o orçamento</text>
          </svg>
          <figcaption>Diagrama da separação dos três poderes segundo Montesquieu, aplicada na Constituição dos EUA (1787)</figcaption>
        </figure>
        <p>
          O <strong>Bill of Rights</strong> (1791) — as primeiras 10 emendas à
          Constituição — garantiu liberdades civis fundamentais: liberdade de
          expressão, de imprensa, de religião, o direito ao devido processo
          legal e a proteção contra buscas e apreensões sem mandado.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contradições</span>
        <h2>7. As Contradições da Independência Americana</h2>
        <p>
          A Declaração afirmava que "todos os homens são criados iguais" — mas
          essa proclamação era profundamente contraditória na prática:
        </p>
        <ul>
          <li>
            <strong>A escravidão foi mantida:</strong> em 1776, havia
            aproximadamente 650.000 pessoas escravizadas nos EUA. Os grandes
            proprietários do Sul — incluindo o próprio Thomas Jefferson —
            dependiam do trabalho escravo. A escravidão não foi abolida até
            1865 (13ª Emenda).
          </li>
          <li>
            <strong>As mulheres foram excluídas:</strong> o direito ao voto só
            seria concedido às mulheres americanas em 1920 (19ª Emenda). Abigail
            Adams escreveu ao marido John Adams em 1776 pedindo que
            "lembrassem das mulheres" ao redigir as novas leis — seu apelo
            foi ignorado.
          </li>
          <li>
            <strong>Os povos indígenas foram ignorados:</strong> a Declaração
            inclusive se referia aos indígenas como "selvagens indianos
            impiedosos" — inimigos, não cidadãos.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Perspectiva crítica para o ENEM:</strong> O ENEM frequentemente
          cobra a capacidade de identificar as contradições entre o discurso
          liberal da Independência americana e a realidade da escravidão, da
          exclusão feminina e do genocídio indígena. Os ideais iluministas de
          igualdade eram restritos a homens brancos proprietários.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impacto Global</span>
        <h2>8. O Impacto do Iluminismo e da Independência Americana no Mundo</h2>
        <p>
          A Independência dos EUA foi o primeiro grande teste prático das ideias
          iluministas, e seu impacto foi imediato e global:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Influências do Iluminismo e da Independência Americana</caption>
            <thead>
              <tr>
                <th>Evento / Processo</th>
                <th>Ano</th>
                <th>Influência Iluminista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revolução Francesa</td>
                <td>1789</td>
                <td>Rousseau, Voltaire, Montesquieu; "Liberdade, Igualdade, Fraternidade"</td>
              </tr>
              <tr>
                <td>Inconfidência Mineira (Brasil)</td>
                <td>1789</td>
                <td>Leitura de Voltaire, Rousseau; modelo americano</td>
              </tr>
              <tr>
                <td>Revolução Haitiana</td>
                <td>1791</td>
                <td>Declaração dos Direitos do Homem; "todos são iguais"</td>
              </tr>
              <tr>
                <td>Independências latino-americanas</td>
                <td>1810–1830</td>
                <td>Modelo republicano dos EUA; ideias de soberania popular</td>
              </tr>
              <tr>
                <td>Constituição brasileira de 1824</td>
                <td>1824</td>
                <td>Separação dos poderes de Montesquieu (com 4º poder: Moderador)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>9. Exercícios</h2>

        <Exercise
          level="Básico"
          title="Locke e os Direitos Naturais"
          statement={
            <p>
              Para John Locke, o governo existe como resultado de um contrato
              social. Se o governo violar os direitos naturais dos cidadãos,
              estes têm o direito de:
            </p>
          }
          options={[
            { letter: "A", text: "Obedecer passivamente, pois o contrato é eterno e irrevogável." },
            { letter: "B", text: "Recorrer ao papa, que tem autoridade superior à do rei." },
            { letter: "C", text: "Revolucionar-se e substituir o governo, pois o poder emana do povo.", correct: true },
            { letter: "D", text: "Migrar para outra região, pois o contrato só vale no território do rei." },
            { letter: "E", text: "Aceitar os termos impostos, pois a propriedade privada é a base do poder." },
          ]}
          resolution={
            <p>
              Para Locke, o contrato social é condicionado: os governados cedem
              parte de sua liberdade em troca de proteção dos direitos naturais
              (vida, liberdade, propriedade). Se o governo violar esses direitos,
              o contrato é rompido e os cidadãos têm o direito à revolução. Essa
              ideia fundamenta diretamente a Declaração de Independência dos EUA.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="A Separação dos Poderes"
          statement={
            <p>
              A Constituição dos EUA (1787) e a Constituição brasileira de 1988
              estabelecem a divisão do Estado em Executivo, Legislativo e
              Judiciário. Esse modelo tem origem no pensamento de qual filósofo
              iluminista?
            </p>
          }
          options={[
            { letter: "A", text: "Jean-Jacques Rousseau, em O Contrato Social (1762)." },
            { letter: "B", text: "Charles de Montesquieu, em O Espírito das Leis (1748).", correct: true },
            { letter: "C", text: "John Locke, em Dois Tratados sobre o Governo Civil (1689)." },
            { letter: "D", text: "Voltaire, em Cartas Filosóficas (1734)." },
            { letter: "E", text: "Adam Smith, em A Riqueza das Nações (1776)." },
          ]}
          resolution={
            <p>
              A separação dos três poderes é a contribuição central de Montesquieu,
              desenvolvida em "O Espírito das Leis" (1748). Montesquieu defendia
              que a concentração de poder em uma só instância gera tirania. Rousseau
              contribuiu com a soberania popular; Locke com os direitos naturais;
              Smith com o liberalismo econômico; Voltaire com a tolerância religiosa.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="As Contradições da Independência Americana"
          statement={
            <p>
              A Declaração de Independência dos EUA (1776) afirma que "todos os
              homens são criados iguais". No entanto, historiadores apontam que
              esse princípio continha contradições fundamentais. Qual das
              afirmações a seguir MELHOR descreve essas contradições?
            </p>
          }
          options={[
            { letter: "A", text: "A igualdade declarada era universal desde o início, mas a aplicação dependia da aprovação do Parlamento britânico." },
            { letter: "B", text: "A Declaração se aplicava apenas aos colonos do Norte, excluindo os estados do Sul por razões climáticas." },
            { letter: "C", text: "A igualdade proclamada excluía negros escravizados, mulheres e indígenas, revelando que os direitos eram restritos a homens brancos proprietários.", correct: true },
            { letter: "D", text: "O texto foi mal traduzido das fontes de Locke, por isso criou contradições não intencionais entre igualdade e escravidão." },
            { letter: "E", text: "As contradições foram totalmente resolvidas com a aprovação do Bill of Rights em 1791, que estendeu os direitos a todos os habitantes." },
          ]}
          resolution={
            <p>
              A Declaração de 1776 foi redigida em grande parte por Thomas
              Jefferson, ele próprio proprietário de centenas de pessoas
              escravizadas. O texto não aboliu a escravidão (que só seria abolida
              em 1865), excluiu as mulheres (que só votaram em 1920) e classificou
              os indígenas como "selvagens". O Bill of Rights (1791) garantiu
              liberdades civis, mas também não incluiu mulheres, negros ou
              indígenas como sujeitos plenos de direitos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="O Iluminismo e as Revoluções Atlânticas"
          statement={
            <p>
              (ENEM adaptado) "Sustentamos como evidentes por si mesmas estas
              verdades: que todos os homens são criados iguais, dotados pelo
              Criador de certos Direitos inalienáveis, que entre estes estão a
              Vida, a Liberdade e a busca da Felicidade." (Declaração de
              Independência dos EUA, 1776) A ideia expressa no trecho acima tem
              relação direta com a obra de qual filósofo iluminista?
            </p>
          }
          options={[
            { letter: "A", text: "Voltaire, pela crítica às instituições religiosas e à intolerância." },
            { letter: "B", text: "Adam Smith, pelo liberalismo econômico e a defesa da propriedade privada." },
            { letter: "C", text: "John Locke, pela teoria dos direitos naturais (vida, liberdade, propriedade) e do contrato social.", correct: true },
            { letter: "D", text: "Montesquieu, pela proposta de separação dos poderes em Executivo, Legislativo e Judiciário." },
            { letter: "E", text: "Rousseau, pela crítica à propriedade privada como origem de todas as desigualdades." },
          ]}
          resolution={
            <p>
              O trecho é claramente lockiano: os "direitos inalienáveis" de "vida,
              liberdade e busca da felicidade" são a adaptação que Jefferson fez
              dos direitos naturais de Locke (vida, liberdade e propriedade). A
              ideia de que esses direitos são auto-evidentes e que o governo existe
              para protegê-los é o núcleo do pensamento político de Locke,
              expresso em "Dois Tratados sobre o Governo Civil" (1689).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="O Boston Tea Party e a Resistência Colonial"
          statement={
            <p>
              Em dezembro de 1773, colonos americanos disfarçados de indígenas
              invadiram navios britânicos no porto de Boston e jogaram 342 caixas
              de chá ao mar. Esse evento, conhecido como Boston Tea Party, foi uma
              resposta direta a:
            </p>
          }
          options={[
            { letter: "A", text: "A proibição britânica de que as colônias tivessem seus próprios jornais e meios de comunicação." },
            { letter: "B", text: "O Tea Act (1773), que concedeu monopólio do comércio de chá à Companhia das Índias Orientais, lesando os comerciantes coloniais.", correct: true },
            { letter: "C", text: "A decisão britânica de transferir o julgamento de colonos americanos para tribunais na Grã-Bretanha." },
            { letter: "D", text: "O Stamp Act (1765), que taxava todos os documentos e impressos produzidos nas colônias." },
            { letter: "E", text: "A Proclamação de 1763, que proibia a expansão colonial para além dos Apalaches." },
          ]}
          resolution={
            <p>
              O Boston Tea Party (dezembro de 1773) foi uma resposta direta ao
              Tea Act (maio de 1773), que concedeu à Companhia Britânica das Índias
              Orientais o monopólio de vender chá nas colônias — mesmo com impostos
              menores, isso prejudicava os comerciantes locais e representava a
              aceitação implícita do direito do Parlamento de taxar as colônias.
              O princípio era: sem representação no Parlamento, não havia
              legitimidade para nenhum imposto.
            </p>
          }
        />
      </section>
    </article>
  );
}
