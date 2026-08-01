"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 35</span>
          <h1>Segundo Reinado</h1>
          <p>
            O reinado de Dom Pedro II (1840–1889) foi o mais longo da história
            brasileira — 49 anos — e o período em que o Brasil consolidou sua
            economia cafeeira, recebeu milhões de imigrantes europeus, travou a
            maior guerra sul-americana e conduziu, lentamente, o processo de
            abolição da escravidão. Foi também uma era de contradições: um
            imperador ilustrado no centro de uma sociedade escravista.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — Dom Pedro II ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Imperador</span>
        <h2>1. Dom Pedro II: Perfil e o Sistema Político Imperial</h2>
        <p>
          Dom Pedro II coroou-se aos 14 anos e governou até os 63. Era um homem
          culto, austero e apaixonado por ciências — financiou a pesquisa de
          Graham Bell sobre o telefone, correspondia-se com Louis Pasteur e
          Victor Hugo, falava vários idiomas e era membro honorário de academias
          científicas europeias. Seu estilo pessoal era sóbrio ao extremo:
          recusou palácios suntuosos e vivia de forma quase republicana.
        </p>
        <p>
          No entanto, seu sistema de governo era profundamente personalista. O
          chamado <strong>"parlamentarismo às avessas"</strong> brasileiro
          invertia o modelo inglês: na Inglaterra, o Parlamento escolhe o
          primeiro-ministro; no Brasil, o Imperador nomeava o presidente do
          Conselho de Ministros (premiê), que então formava o gabinete e tentava
          obter maioria parlamentar. O ditado "O rei reina, governa e
          administra" — ao contrário do modelo britânico "reina, mas não
          governa" — resumia bem a concentração de poder em Pedro II.
        </p>

        <div className="lesson-highlight">
          <strong>O sistema político imperial:</strong> Dois partidos
          (Conservador e Liberal) alternavam-se no poder por decisão do
          Imperador, não por eleições livres. As eleições eram amplamente
          fraudadas — "eleições de cacete" —, com coronéis controlando o voto
          das populações rurais. O clientelismo e o patronato eram mecanismos
          estruturais de poder.
        </div>
      </section>

      {/* ── SEÇÃO 2 — Café ── */}
      <section className="lesson-section">
        <span className="section-kicker">Economia</span>
        <h2>2. A Expansão Cafeeira</h2>
        <p>
          O café transformou a economia brasileira no século XIX. Introduzido no
          Pará em 1727 e expandido para o Rio de Janeiro a partir de fins do
          século XVIII, o café se tornou, já na década de 1830, o principal
          produto de exportação do Brasil.
        </p>
        <p>
          A produção cafeeira passou por duas fases geográficas principais durante
          o Segundo Reinado:
        </p>
        <ul>
          <li>
            <strong>Vale do Paraíba fluminense e paulista (1820–1870):</strong>
            região montanhosa entre Rio de Janeiro e São Paulo; trabalho
            predominantemente escravo; solo rapidamente esgotado pelo
            monocultivo predatório.
          </li>
          <li>
            <strong>Oeste Paulista (a partir de 1870):</strong> terra roxa
            (solo rico em basalto), estradas de ferro (Santos-Jundiaí, 1867;
            Mogiana, Paulista etc.), mão de obra imigrante (colonato); cidades
            como Campinas, Ribeirão Preto e São Paulo crescem aceleradamente.
          </li>
        </ul>
        <p>
          No apogeu, o Brasil respondia por cerca de <strong>80% da produção
          mundial de café</strong> (décadas de 1870–1880). A acumulação de capital
          gerada pelo café financiou as primeiras indústrias brasileiras e a
          infraestrutura de transporte que marcaria o século XX.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Região</th>
                <th>Período</th>
                <th>Mão de obra</th>
                <th>Característica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª fase</td>
                <td>Vale do Paraíba (RJ/SP)</td>
                <td>1820–1870</td>
                <td>Escravizada</td>
                <td>Solo esgotado; técnicas rudimentares</td>
              </tr>
              <tr>
                <td>2ª fase</td>
                <td>Oeste Paulista</td>
                <td>1870–1929</td>
                <td>Imigrante (colonato)</td>
                <td>Terra roxa; ferrovias; modernização</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 — Imigração ── */}
      <section className="lesson-section">
        <span className="section-kicker">Demografa</span>
        <h2>3. A Imigração Europeia e Asiática</h2>
        <p>
          Com a crescente pressão abolicionista e o declínio do tráfico de
          escravizados (proibido em 1850), os cafeicultores paulistas passaram a
          buscar alternativas de mão de obra. O governo imperial, e depois o
          provincial e estadual de São Paulo, incentivaram ativamente a
          imigração europeia.
        </p>
        <p>
          O sistema predominante no Oeste Paulista foi o <strong>colonato</strong>:
          o imigrante recebia um contrato para cuidar de um determinado número
          de pés de café (capinar, podar, colher), recebendo uma quantia fixa
          por tarefa mais um percentual da colheita. Podia cultivar alimentos
          para subsistência nos intervalos. Era trabalho remunerado, mas as
          dívidas iniciais (viagem, instrumentos, alimentação nos primeiros
          meses) frequentemente prendiam o imigrante à fazenda por anos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Período principal</th>
                <th>Destino principal</th>
                <th>Volume estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Italianos</td>
                <td>1870–1930</td>
                <td>São Paulo (café)</td>
                <td>~1,5 milhão</td>
              </tr>
              <tr>
                <td>Alemães</td>
                <td>1824–1914</td>
                <td>Sul do Brasil (colonização)</td>
                <td>~300 mil</td>
              </tr>
              <tr>
                <td>Espanhóis</td>
                <td>1880–1930</td>
                <td>São Paulo e Rio</td>
                <td>~700 mil</td>
              </tr>
              <tr>
                <td>Japoneses</td>
                <td>A partir de 1908</td>
                <td>São Paulo (café/algodão)</td>
                <td>~250 mil (até 1941)</td>
              </tr>
              <tr>
                <td>Poloneses / Ucranianos</td>
                <td>1890–1914</td>
                <td>Paraná e Santa Catarina</td>
                <td>~150 mil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 — Abolição ── */}
      <section className="lesson-section">
        <span className="section-kicker">Processo gradual</span>
        <h2>4. A Abolição da Escravidão: Processo Gradual (1850–1888)</h2>
        <p>
          A escravidão foi abolida no Brasil em quatro etapas principais, ao longo
          de quase quatro décadas de pressões combinadas: britânica, abolicionista
          interna, econômica e militar.
        </p>

        {/* SVG 1 — Linha do tempo das leis abolicionistas */}
        <div className="lesson-figure">
          <svg viewBox="0 0 820 230" width="100%" aria-label="Linha do tempo das leis abolicionistas">
            {/* Linha base */}
            <line x1="40" y1="110" x2="780" y2="110" stroke="#7c3aed" strokeWidth="3" />
            <polygon points="780,105 795,110 780,115" fill="#7c3aed" />

            {/* Lei Eusébio de Queirós */}
            <circle cx="110" cy="110" r="10" fill="#7c3aed" />
            <text x="110" y="94" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">1850</text>
            <text x="110" y="128" textAnchor="middle" fontSize="9" fill="#374151">Lei Eusébio</text>
            <text x="110" y="142" textAnchor="middle" fontSize="9" fill="#374151">de Queirós</text>
            <text x="110" y="156" textAnchor="middle" fontSize="9" fill="#6b7280">Proíbe o tráfico</text>
            <text x="110" y="170" textAnchor="middle" fontSize="9" fill="#6b7280">atlântico</text>

            {/* Lei do Ventre Livre */}
            <circle cx="310" cy="110" r="10" fill="#7c3aed" />
            <text x="310" y="94" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">1871</text>
            <text x="310" y="128" textAnchor="middle" fontSize="9" fill="#374151">Lei do Ventre</text>
            <text x="310" y="142" textAnchor="middle" fontSize="9" fill="#374151">Livre</text>
            <text x="310" y="156" textAnchor="middle" fontSize="9" fill="#6b7280">Filhos de escravizadas</text>
            <text x="310" y="170" textAnchor="middle" fontSize="9" fill="#6b7280">nascem livres</text>

            {/* Lei dos Sexagenários */}
            <circle cx="540" cy="110" r="10" fill="#7c3aed" />
            <text x="540" y="94" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">1885</text>
            <text x="540" y="128" textAnchor="middle" fontSize="9" fill="#374151">Lei Saraiva-</text>
            <text x="540" y="142" textAnchor="middle" fontSize="9" fill="#374151">Cotegipe</text>
            <text x="540" y="156" textAnchor="middle" fontSize="9" fill="#6b7280">Liberta acima</text>
            <text x="540" y="170" textAnchor="middle" fontSize="9" fill="#6b7280">de 60 anos</text>

            {/* Lei Áurea */}
            <circle cx="720" cy="110" r="12" fill="#16a34a" />
            <text x="720" y="94" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">1888</text>
            <text x="720" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14532d">LEI ÁUREA</text>
            <text x="720" y="145" textAnchor="middle" fontSize="9" fill="#374151">Abolição total</text>
            <text x="720" y="159" textAnchor="middle" fontSize="9" fill="#374151">e imediata</text>
            <text x="720" y="173" textAnchor="middle" fontSize="9" fill="#16a34a">Princesa Isabel</text>

            {/* Barra indicativa de progressão */}
            <rect x="120" y="104" width="590" height="12" rx="3" fill="#ede9fe" opacity="0.5" />
          </svg>
          <p className="lesson-figure-caption">As quatro leis do processo abolicionista brasileiro (1850–1888).</p>
        </div>

        <h3>Comentários sobre cada lei</h3>
        <ul>
          <li>
            <strong>Lei Eusébio de Queirós (1850):</strong> Proibiu o tráfico
            atlântico de escravizados, sob pressão britânica (Bill Aberdeen,
            1845, autorizava navios ingleses a apreendir navios negreiros). Sua
            aplicação efetiva só ocorreu anos depois, mas o fim do tráfico
            elevou o preço dos escravizados internos e tornou a mão de obra
            imigrante mais atraente.
          </li>
          <li>
            <strong>Lei do Ventre Livre (1871):</strong> Os filhos de mulheres
            escravizadas nascidos a partir de 28/09/1871 seriam livres — mas
            permaneciam "sob guarda" do proprietário até os 21 anos (podiam
            ser entregues ao Estado mediante indenização). Na prática,
            beneficiou pouquíssimas crianças. Foi aprovada pelo gabinete do
            Visconde do Rio Branco (conservador) justamente para controlar e
            esvaziar o debate abolicionista.
          </li>
          <li>
            <strong>Lei dos Sexagenários (1885):</strong> Liberta escravizados
            acima de 60 anos, mas com a obrigação de trabalhar 3 anos como
            "indenização" ao proprietário. Era considerada pelos abolicionistas
            uma cruel ironia — liberdade para quem já não teria forças para
            sobreviver sozinho.
          </li>
          <li>
            <strong>Lei Áurea (13/05/1888):</strong> Abolição total e imediata,
            sem indenização aos proprietários. Assinada pela Princesa Isabel
            ("A Redentora") na ausência de Dom Pedro II (em tratamento na
            Europa). Os 700.000 libertos não receberam terra, renda, educação
            nem integração social — a abolição sem reforma social criou as bases
            do racismo estrutural contemporâneo.
          </li>
        </ul>

        <div className="lesson-highlight">
          <strong>O movimento abolicionista:</strong>{" "}
          <em>Joaquim Nabuco</em> — bacharel pernambucano, autor de "O
          Abolicionismo" (1883), parlamentar que usou a tribuna como arma;{" "}
          <em>José do Patrocínio</em> — jornalista negro, "Tigre da Abolição",
          fundador da Confederação Abolicionista;{" "}
          <em>Luís Gama</em> — ex-escravizado que se libertou, advogado
          autodidata que libertou centenas pela via judicial;{" "}
          <em>André Rebouças</em> — engenheiro negro que defendia "democracia
          rural" com distribuição de terras.
        </div>
      </section>

      {/* ── SEÇÃO 5 — Barão de Mauá ── */}
      <section className="lesson-section">
        <span className="section-kicker">Industrialização</span>
        <h2>5. Irineu Evangelista de Sousa — O Barão de Mauá</h2>
        <p>
          Irineu Evangelista de Sousa (1813–1889) foi o maior empreendedor do
          Brasil no século XIX. Filho de estancieiro gaúcho, tornou-se
          comerciante, importador, banqueiro e industrial, construindo um
          verdadeiro império econômico:
        </p>
        <ul>
          <li>Estaleiro no Rio de Janeiro (1846) — primeiro grande estaleiro moderno do Brasil</li>
          <li>Iluminação a gás no Rio de Janeiro (1851)</li>
          <li>Estrada de Ferro Mauá (Petrópolis, 1854) — primeira ferrovia do Brasil</li>
          <li>Estrada de ferro Santos-Jundiaí (1867, com parceiros ingleses)</li>
          <li>Banco Mauá, MacGregor & Co. — com agências na América do Sul e Europa</li>
          <li>Cabo telegráfico submarino ligando o Brasil à Europa</li>
        </ul>
        <p>
          Mauá faliu em 1875. As causas foram múltiplas: concorrência desleal de
          empresas inglesas protegidas pelos tratados de 1810; desconfiança do
          governo imperial com o capital industrial (preferência pela economia
          agrária); e uma crise bancária no Rio da Prata que arrastou suas
          operações. É símbolo tanto das possibilidades quanto dos limites do
          capitalismo brasileiro no século XIX.
        </p>
      </section>

      {/* ── SEÇÃO 6 — Guerra do Paraguai ── */}
      <section className="lesson-section">
        <span className="section-kicker">Maior guerra sul-americana</span>
        <h2>6. A Guerra do Paraguai (1864–1870)</h2>

        <div className="lesson-figure">
          <svg viewBox="0 0 620 380" width="100%" aria-label="Mapa do teatro da Guerra do Paraguai">
            {/* Fundo */}
            <rect x="0" y="0" width="620" height="380" fill="#f0f9ff" />

            {/* Paraguai */}
            <path d="M 240 80 L 320 70 L 360 130 L 340 220 L 260 240 L 200 180 L 200 120 Z" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
            <text x="275" y="160" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">PARAGUAI</text>
            <text x="275" y="178" textAnchor="middle" fontSize="10" fill="#991b1b">Solano López</text>

            {/* Brasil (Mato Grosso e RS) */}
            <rect x="120" y="30" width="340" height="60" rx="6" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" opacity="0.7" />
            <text x="290" y="65" textAnchor="middle" fontSize="11" fill="#14532d">BRASIL (Mato Grosso / Rio Grande do Sul)</text>

            {/* Argentina */}
            <path d="M 100 240 L 240 240 L 260 310 L 200 360 L 100 360 Z" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="180" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">ARGENTINA</text>

            {/* Uruguai */}
            <rect x="340" y="290" width="100" height="60" rx="4" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <text x="390" y="325" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">URUGUAI</text>

            {/* Tríplice Aliança */}
            <rect x="420" y="30" width="180" height="110" rx="6" fill="white" stroke="#374151" />
            <text x="510" y="52" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#374151">Tríplice Aliança</text>
            <circle cx="440" cy="72" r="6" fill="#16a34a" />
            <text x="455" y="76" fontSize="10" fill="#374151">Brasil</text>
            <circle cx="440" cy="92" r="6" fill="#1d4ed8" />
            <text x="455" y="96" fontSize="10" fill="#374151">Argentina</text>
            <circle cx="440" cy="112" r="6" fill="#d97706" />
            <text x="455" y="116" fontSize="10" fill="#374151">Uruguai</text>
            <text x="510" y="135" textAnchor="middle" fontSize="9" fill="#6b7280">vs. Paraguai</text>

            {/* Setas de invasão do Paraguai */}
            <path d="M 280 240 L 270 310" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" markerEnd="url(#red-arr)" />
            <path d="M 240 160 L 130 240" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />

            {/* Legenda de datas */}
            <rect x="30" y="280" width="170" height="80" rx="6" fill="white" stroke="#d1d5db" />
            <text x="115" y="300" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Dados da Guerra</text>
            <text x="45" y="318" fontSize="9" fill="#374151">• 1864–1870 (6 anos)</text>
            <text x="45" y="333" fontSize="9" fill="#374151">• Paraguai: 500k → 200k hab.</text>
            <text x="45" y="348" fontSize="9" fill="#374151">• 90% homens adultos mortos</text>
            <text x="45" y="363" fontSize="9" fill="#374151">• Brasil: dívida externa elevada</text>
          </svg>
          <p className="lesson-figure-caption">Teatro de operações da Guerra do Paraguai (1864–1870): Tríplice Aliança vs. Paraguai.</p>
        </div>

        <h3>Causas e Interpretações</h3>
        <p>
          As causas da guerra são debatidas até hoje pela historiografia. As
          principais interpretações são:
        </p>
        <ul>
          <li>
            <strong>Expansionismo de Solano López:</strong> Interpretação
            tradicional; o ditador paraguaio teria provocado a guerra por ambição
            territorial e medo do cerco argentino-brasileiro.
          </li>
          <li>
            <strong>Intervenção brasileira no Uruguai (1864):</strong> O Brasil
            interviu no Uruguai para apoiar o Partido Colorado (favorável ao
            Brasil) contra o Partido Blanco (favorável ao Paraguai), o que López
            considerou ameaça direta ao equilíbrio regional.
          </li>
          <li>
            <strong>Interpretação revisionista (Chiavenato, Eduardo Galeano):</strong>
            A guerra teria sido instigada pelo capital britânico para destruir o
            modelo econômico paraguaio — que havia industrializado o país sem
            dívidas externas — e integrá-lo ao mercado financeiro internacional.
            Essa tese é contestada por historiadores que apontam excesso de
            simplificação.
          </li>
        </ul>

        <h3>Consequências</h3>
        <p>
          A guerra devastou o Paraguai: de uma população estimada em 450–500
          mil habitantes, restaram menos de 200 mil ao fim do conflito — e apenas
          10% eram homens adultos. Aldeias inteiras desapareceram.
        </p>
        <p>
          Para o Brasil, as consequências foram igualmente significativas: a
          dívida externa disparou (empréstimos ingleses para financiar a guerra),
          o papel-moeda foi emitido em excesso gerando inflação, e o Exército —
          fortalecido, politizado e ressentido pela falta de reconhecimento do
          poder civil — saiu da guerra como força política autônoma, ator
          fundamental na crise que levaria à proclamação da República.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Paraguai</th>
                <th>Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mortos estimados</td>
                <td>~300 mil (60% da população)</td>
                <td>~50 mil (combate + doenças)</td>
              </tr>
              <tr>
                <td>Impacto econômico</td>
                <td>Devastação total; perdas territoriais</td>
                <td>Dívida externa elevada; inflação</td>
              </tr>
              <tr>
                <td>Impacto político</td>
                <td>País sob tutela do vencedor por anos</td>
                <td>Exército politizado; crise do Império</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO EXTRA — Síntese e legado ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. O Segundo Reinado: Legado e Contradições</h2>
        <p>
          O Segundo Reinado é frequentemente idealizado como uma era de paz,
          prosperidade e cultura — e de fato o Brasil avançou em muitos aspectos:
          crescimento econômico cafeeiro, abertura de ferrovias, chegada de
          imigrantes, movimentos abolicionistas, imprensa livre e vida cultural
          florescente no Rio. Dom Pedro II era respeitado internacionalmente e
          correspondia-se com os maiores cientistas e intelectuais de seu tempo.
        </p>
        <p>
          Mas esse progresso coexistiu com profundas contradições:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📈</span>
            <h3>Avanços</h3>
            <p>
              Café como produto de exportação dominante; início das ferrovias;
              imigração europeia; imprensa livre; vida cultural no Rio;
              abolição gradual da escravidão; longa estabilidade política relativa.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Contradições</h3>
            <p>
              Manutenção da escravidão até 1888; exclusão das mulheres e
              analfabetos; latifúndio; clientelismo político; "parlamentarismo
              às avessas"; Guerra do Paraguai devastadora; dívida externa crescente.
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Crise final</h3>
            <p>
              A abolição sem indenização alienou os fazendeiros; o Exército
              politizado exigiu maior reconhecimento; a Igreja se afastou após
              a Questão Religiosa — bases do colapso em 1889.
            </p>
          </div>
        </div>

        <p>
          O Segundo Reinado estabeleceu as bases econômicas (café, ferrovias,
          imigração) e sociais (urbanização incipiente, surgimento de uma classe
          média profissional) que impulsionariam o Brasil no século XX. Mas ao
          mesmo tempo cristalizou desigualdades estruturais — raciais, fundiárias,
          de gênero — que persistem no Brasil contemporâneo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Avanço do Segundo Reinado</th>
                <th>Limite ou Contradição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Economia</td>
                <td>Café como 80% das exportações; acumulação de capital</td>
                <td>Monocultura; dependência externa; dívida da guerra</td>
              </tr>
              <tr>
                <td>Trabalho</td>
                <td>Imigração europeia; início do colonato remunerado</td>
                <td>Escravidão mantida até 1888; libertos sem integração</td>
              </tr>
              <tr>
                <td>Infraestrutura</td>
                <td>Ferrovias (Santos-Jundiaí, Leopoldina, Mogiana)</td>
                <td>Investimento britânico; lucros enviados ao exterior</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>Estabilidade relativa; alternância de partidos</td>
                <td>Voto censitário; fraudes; "parlamentarismo às avessas"</td>
              </tr>
              <tr>
                <td>Militar</td>
                <td>Unidade nacional reforçada pela Guerra do Paraguai</td>
                <td>Exército politizado; crise de reconhecimento; republicanismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>8. Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A Lei do Ventre Livre (1871) estabelecia que os filhos de mulheres escravizadas nascidos a partir de sua promulgação seriam livres. No entanto, a lei tinha uma cláusula que limitava muito sua eficácia na prática. Qual era essa cláusula?</p>}
          options={[
            { letter: "a", text: "As crianças nascidas livres deveriam pagar uma taxa ao proprietário ao completar 18 anos" },
            { letter: "b", text: "As crianças permaneciam sob a 'guarda' do proprietário até os 21 anos, ou podiam ser entregues ao Estado mediante indenização — fazendo com que pouquíssimas se beneficiassem", correct: true },
            { letter: "c", text: "A lei só se aplicava às crianças nascidas em províncias que aderissem voluntariamente" },
            { letter: "d", text: "Os proprietários podiam reescravizar as crianças se elas não trabalhassem nas fazendas" },
            { letter: "e", text: "As crianças livres pela lei não tinham direito à educação pública" },
          ]}
          resolution={<p>A Lei do Ventre Livre previa que as crianças permanecessem sob tutela do proprietário até os 21 anos, trabalhando sem remuneração. O proprietário podia alternativamente entregá-las ao Estado, recebendo uma indenização — mas quase nenhum fez isso. Na prática, a lei serviu mais para conter o debate abolicionista do que para libertar crianças de fato.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>O 'parlamentarismo às avessas' do Segundo Reinado diferenciava-se do modelo parlamentarista inglês principalmente porque:</p>}
          options={[
            { letter: "a", text: "No Brasil, o Parlamento tinha mais poderes do que na Inglaterra, podendo destituir o Imperador" },
            { letter: "b", text: "No Brasil, o Imperador nomeava o presidente do Conselho de Ministros (premiê), que depois buscava maioria parlamentar — invertendo o modelo inglês, em que o Parlamento define quem governa", correct: true },
            { letter: "c", text: "O Brasil era uma república parlamentarista disfarçada de monarquia" },
            { letter: "d", text: "No Brasil, as eleições eram diretas e livres, ao contrário da Inglaterra vitoriana" },
            { letter: "e", text: "O Parlamento brasileiro tinha poder de veto sobre os atos do Imperador, diferente da Inglaterra" },
          ]}
          resolution={<p>No parlamentarismo inglês, o partido vencedor das eleições indica o primeiro-ministro, que forma o gabinete. No 'parlamentarismo às avessas' brasileiro, o Imperador escolhia o presidente do Conselho de Ministros por critério pessoal, e este então tentava construir maioria no Parlamento — muitas vezes por meio de fraudes eleitorais. Era o Imperador quem definia quem governaria, não as eleições.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Lei Áurea (1888) aboliu a escravidão sem qualquer indenização ou política de integração para os libertos. Qual a principal consequência histórica de longo prazo dessa ausência de políticas reparatórias?</p>}
          options={[
            { letter: "a", text: "Os ex-escravizados foram rapidamente absorvidos pelas indústrias urbanas que se expandiam no período" },
            { letter: "b", text: "A ausência de terra, renda, educação e integração social lançou os libertos à marginalização, criando as bases estruturais das desigualdades raciais que persistem no Brasil contemporâneo", correct: true },
            { letter: "c", text: "Os libertos conseguiram comprar terras com indenizações pagas por fazendeiros arrependidos" },
            { letter: "d", text: "O movimento abolicionista imediatamente se transformou em movimento por reforma agrária bem-sucedido" },
            { letter: "e", text: "Portugal indenizou os ex-escravizados como compensação pelo tráfico atlântico" },
          ]}
          resolution={<p>A abolição sem reforma social foi deliberada: os fazendeiros preferiram a imigração europeia à integração dos libertos. Os ex-escravizados, sem terra, renda, acesso à educação ou políticas públicas, foram forçados à marginalidade econômica — trabalhando por salários miseráveis ou migrando para as periferias urbanas. Essa estrutura é considerada pela historiografia como raiz do racismo estrutural contemporâneo no Brasil.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) "O fim da escravidão no Brasil não foi acompanhado de qualquer política de inclusão dos libertos: sem acesso à terra, à educação ou ao crédito, os ex-escravizados foram substituídos pelos imigrantes europeus no mercado de trabalho das fazendas." Essa afirmação relaciona-se diretamente com qual processo histórico do Segundo Reinado?</p>}
          options={[
            { letter: "a", text: "A construção de estradas de ferro que integrou o mercado interno e favoreceu os trabalhadores negros" },
            { letter: "b", text: "A política de imigração europeia subsidiada pelos cafeicultores paulistas, que preferiam a mão de obra imigrante à integração dos libertos, perpetuando a exclusão racial", correct: true },
            { letter: "c", text: "O projeto de industrialização do Barão de Mauá, que empregou principalmente ex-escravizados em suas fábricas" },
            { letter: "d", text: "A política educacional de Dom Pedro II, que incluiu os libertos no sistema de instrução pública" },
            { letter: "e", text: "A Proclamação da República, que imediatamente estendeu direitos civis plenos aos ex-escravizados" },
          ]}
          resolution={<p>A imigração europeia foi incentivada pelos cafeicultores paulistas como alternativa à integração dos libertos. O governo de São Paulo pagou a viagem de imigrantes italianos e espanhóis, preferindo esta mão de obra — considerada 'mais civilizada' segundo o racismo científico da época — à contratação de ex-escravizados. O resultado foi a marginalização estrutural da população negra liberta.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>A Guerra do Paraguai (1864–1870) teve um impacto político duradouro no Brasil ao fortalecer o Exército como instituição política. De que forma esse fortalecimento contribuiu para a crise do Império?</p>}
          options={[
            { letter: "a", text: "O Exército, satisfeito com as vitórias da guerra, tornou-se o principal apoiador da monarquia imperial" },
            { letter: "b", text: "O Exército, politizado e resentido com o tratamento recebido do poder civil, foi influenciado pelo positivismo e tornou-se ator central na crise que levou à Proclamação da República em 1889", correct: true },
            { letter: "c", text: "Os militares veteranos da guerra foram incorporados ao Partido Liberal, fortalecendo a oposição parlamentar" },
            { letter: "d", text: "A guerra reduziu o tamanho do Exército, enfraquecendo-o politicamente e eliminando qualquer influência militar" },
            { letter: "e", text: "Os militares paraguaios capturados foram integrados ao Exército brasileiro, mudando sua composição étnica" },
          ]}
          resolution={<p>O Exército saiu da Guerra do Paraguai como uma instituição coesa, nacional e politizada — com forte influência do positivismo comteano (Benjamin Constant). Os militares ressentiam-se da subalternidade ao poder civil imperial, dos baixos soldos e do pouco reconhecimento. Ao longo da década de 1880, foram se aproximando do movimento republicano, culminando com o golpe de 15 de novembro de 1889.</p>}
        />
      </section>
    </article>
  );
}
