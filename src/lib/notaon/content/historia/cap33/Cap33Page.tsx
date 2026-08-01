"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 33</span>
          <h1>Independência do Brasil</h1>
          <p>
            De colônia a Império em pouco mais de quatorze anos: a Independência
            do Brasil foi um processo singular na América Latina — sem guerras
            prolongadas, mas também sem ruptura social. A mesma elite colonial
            que controlava a terra e os escravizados conduziu a separação de
            Portugal, preservando seus privilégios e construindo um Estado
            monárquico no coração de um continente republicano.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — Vinda da Família Real ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto europeu</span>
        <h2>1. A Vinda da Família Real (1808)</h2>
        <p>
          Em novembro de 1807, as tropas francesas do general Junot invadiram
          Portugal. Napoleão Bonaparte havia decretado o Bloqueio Continental
          (1806), exigindo que todos os países europeus fechassem seus portos
          para a Inglaterra; Portugal, aliado histórico dos britânicos, recusou.
          A invasão foi a resposta.
        </p>
        <p>
          Sob escolta da frota britânica do almirante Sir Sydney Smith, a família
          real portuguesa — D. João VI (príncipe regente), a rainha D. Maria I
          (mentalmente incapacitada), a princesa D. Carlota Joaquina e cerca de{" "}
          <strong>15.000 pessoas</strong> da corte, nobreza, funcionários e
          clérigos — embarcou em Lisboa em 27 de novembro de 1807. Chegaram ao
          Rio de Janeiro em março de 1808, após escala em Salvador.
        </p>

        <div className="lesson-highlight">
          <strong>Impacto imediato:</strong> pela primeira vez na história
          colonial ibérica, a metrópole se transferia para a colônia. O Rio de
          Janeiro tornou-se, do dia para a noite, a capital de um Império que
          abrangia Portugal, Brasil, Algarves e territórios ultramarinos.
        </div>

        <h3>Medidas adotadas por D. João VI no Brasil</h3>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Medida</th>
                <th>Data</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abertura dos Portos às Nações Amigas</td>
                <td>28/01/1808</td>
                <td>Fim do Pacto Colonial; produtos estrangeiros podem entrar no Brasil</td>
              </tr>
              <tr>
                <td>Criação do Banco do Brasil</td>
                <td>12/10/1808</td>
                <td>Primeiro banco emissor da América do Sul</td>
              </tr>
              <tr>
                <td>Imprensa Régia (Gazeta do Rio de Janeiro)</td>
                <td>13/05/1808</td>
                <td>Primeira tipografia e primeiro jornal oficial do Brasil</td>
              </tr>
              <tr>
                <td>Biblioteca Real</td>
                <td>1810</td>
                <td>Acervo de 60.000 volumes — origem da Biblioteca Nacional</td>
              </tr>
              <tr>
                <td>Jardim Botânico do Rio de Janeiro</td>
                <td>1808</td>
                <td>Pesquisa agronômica e aclimatação de espécies exóticas</td>
              </tr>
              <tr>
                <td>Academia Real de Belas Artes (Missão Francesa)</td>
                <td>1816</td>
                <td>Neoclassicismo e formação artística; Lebreton, Debret, Grandjean</td>
              </tr>
              <tr>
                <td>Elevação do Brasil a Reino Unido</td>
                <td>16/12/1815</td>
                <td>Brasil deixa de ser colônia; paridade formal com Portugal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 — Tratados de 1810 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dependência econômica</span>
        <h2>2. Os Tratados de 1810 e a Dominação Britânica</h2>
        <p>
          A escolta inglesa à família real teve seu preço. Em fevereiro de 1810,
          D. João VI assinou dois tratados com a Grã-Bretanha que definiram a
          economia brasileira por décadas:
        </p>
        <ul>
          <li>
            <strong>Tratado de Comércio e Navegação:</strong> tarifas de apenas
            15% para produtos ingleses importados pelo Brasil, contra 16% para os
            portugueses (e mais para as demais nações). O Brasil tornava-se,
            oficialmente, um mercado cativo da indústria britânica recém-saída da
            Revolução Industrial.
          </li>
          <li>
            <strong>Tratado de Aliança e Amizade:</strong> reconhecimento do
            direito inglês de fiscalizar navios suspeitos de transportar
            escravizados, abrindo caminho para pressões abolicionistas futuras.
          </li>
        </ul>
        <p>
          Com esses acordos, a Grã-Bretanha substituiu Portugal como principal
          parceira comercial do Brasil. Produtos têxteis ingleses inundaram o
          mercado, sufocando qualquer manufatura local. O Brasil exportava
          matérias-primas (açúcar, algodão, couro) e importava manufaturados —
          padrão que perduraria por mais de um século.
        </p>
      </section>

      {/* ── SEÇÃO 3 — Revolução do Porto ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crise portuguesa</span>
        <h2>3. A Revolução Liberal do Porto (1820) e o Retorno de D. João</h2>
        <p>
          Em agosto de 1820, em Porto, Portugal, militares e burgueses liberais
          deflagraram uma revolução inspirada pelo constitucionalismo espanhol.
          Exigiam o retorno de D. João VI, a elaboração de uma Constituição e,
          implicitamente, o retorno do Brasil à condição colonial — era preciso
          reaver o mercado consumidor perdido para os ingleses.
        </p>
        <p>
          As <strong>Cortes Constituintes</strong> convocadas em Lisboa passaram
          a tomar medidas hostis ao Brasil: determinaram o retorno do Príncipe
          Dom Pedro a Portugal, a extinção dos tribunais e repartições criados no
          Rio, e a subordinação direta das províncias brasileiras a Lisboa —
          ignorando o Rio de Janeiro como sede administrativa.
        </p>
        <p>
          D. João VI, pressionado, retornou a Portugal em abril de 1821,
          deixando seu filho Dom Pedro como Príncipe Regente do Brasil. Antes de
          partir, teria dito ao filho: <em>"Pedro, se o Brasil se separar, que
          seja para ti, que me hás de respeitar, e não para algum desses
          aventureiros."</em>
        </p>
      </section>

      {/* ── SEÇÃO 4 — Processo de Independência ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ruptura gradual</span>
        <h2>4. O Processo de Independência (1821–1822)</h2>
        <p>
          A independência não foi um evento súbito, mas um processo de meses.
          As elites brasileiras — fazendeiros, comerciantes, profissionais
          liberais — perceberam que a recolonização proposta pelas Cortes
          significaria perda dos mercados abertos em 1808 e retrocesso econômico.
          Uniram-se ao Príncipe Regente contra Lisboa.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>Dia do Fico (9/01/1822)</h3>
            <p>
              Diante da ordem das Cortes para que retornasse a Portugal, Dom Pedro
              recusou: <em>"Se é para o bem de todos e felicidade geral da nação,
              diga ao povo que fico."</em> Foi o primeiro gesto de desobediência
              formal a Lisboa.
            </p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>José Bonifácio</h3>
            <p>
              Cientista e estadista, José Bonifácio de Andrada e Silva foi
              nomeado ministro por Dom Pedro e conduziu a estratégia política da
              independência — articulando províncias, redigindo documentos e
              impondo ritmo à ruptura. É chamado "Patriarca da Independência".
            </p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Decretos de Ruptura</h3>
            <p>
              Entre janeiro e setembro de 1822, Dom Pedro convocou uma Assembleia
              Constituinte brasileira, criou o Conselho de Procuradores das
              Províncias e decretou que qualquer tropa vinda de Portugal seria
              considerada inimiga — construindo estruturas paralelas às de Lisboa.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 — Grito do Ipiranga ── */}
      <section className="lesson-section">
        <span className="section-kicker">7 de setembro</span>
        <h2>5. O Grito do Ipiranga (7/09/1822)</h2>
        <p>
          Em viagem a São Paulo para garantir apoio das províncias do sul, Dom
          Pedro recebeu, às margens do riacho Ipiranga, correspondências de
          Lisboa com um ultimato das Cortes: dissolução dos decretos brasileiros
          e retorno imediato do Príncipe. Também recebeu cartas de José Bonifácio
          e de sua esposa, Leopoldina, pedindo a proclamação imediata.
        </p>
        <p>
          Dom Pedro rasgou os documentos portugueses e, segundo a tradição,
          proclamou: <strong>"Independência ou Morte!"</strong> — dando ao Brasil
          sua data cívica fundadora.
        </p>

        <div className="lesson-highlight">
          <strong>Questão historiográfica:</strong> A cena épica com Dom Pedro
          empunhando a espada foi reconstruída na famosa pintura de{" "}
          <em>Pedro Américo</em> (1888), encomendada para o centenário do
          nascimento de Dom Pedro I. A independência real foi construída ao longo
          de meses — o 7 de Setembro cristalizou simbolicamente uma ruptura já
          em curso.
        </div>
      </section>

      {/* ── SVG 1 — Linha do tempo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>6. Linha do Tempo: 1807–1825</h2>
        <div className="lesson-figure">
          <svg viewBox="0 0 820 200" width="100%" aria-label="Linha do tempo da Independência do Brasil">
            {/* Linha base */}
            <line x1="40" y1="100" x2="780" y2="100" stroke="#b45309" strokeWidth="3" />
            {/* Seta final */}
            <polygon points="780,95 795,100 780,105" fill="#b45309" />

            {/* Eventos — 8 marcos */}
            {[
              { x: 60,  ano: "1807", label: "Invasão\nfrancesa" },
              { x: 160, ano: "1808", label: "Chegada ao\nRio / Portos" },
              { x: 270, ano: "1810", label: "Tratados\ncom England" },
              { x: 360, ano: "1815", label: "Reino\nUnido" },
              { x: 440, ano: "1820", label: "Revolução\ndo Porto" },
              { x: 530, ano: "1822", label: "Grito do\nIpiranga" },
              { x: 630, ano: "1824", label: "Constituição\nOutorgada" },
              { x: 720, ano: "1825", label: "Reconheci-\nmento PT" },
            ].map(({ x, ano, label }) => (
              <g key={ano}>
                <circle cx={x} cy="100" r="7" fill="#b45309" />
                <text x={x} y="88" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">{ano}</text>
                {label.split("\n").map((line, i) => (
                  <text key={i} x={x} y={120 + i * 14} textAnchor="middle" fontSize="10" fill="#374151">{line}</text>
                ))}
              </g>
            ))}
          </svg>
          <p className="lesson-figure-caption">Principais marcos do processo de independência (1807–1825).</p>
        </div>
      </section>

      {/* ── SEÇÃO 6 — Independência sem ruptura ── */}
      <section className="lesson-section">
        <span className="section-kicker">Caráter conservador</span>
        <h2>7. Uma Independência sem Ruptura Social</h2>
        <p>
          A grande diferença entre a independência brasileira e as da América
          Espanhola reside no <strong>caráter conservador</strong> do processo
          brasileiro. Enquanto na América Hispânica guerras prolongadas (10–15
          anos, como na Venezuela e no México) envolveram amplas camadas sociais
          e produziram maior instabilidade, o Brasil:
        </p>
        <ul>
          <li>Manteve a <strong>monarquia</strong> como forma de governo.</li>
          <li>
            Preservou a <strong>escravidão</strong> — aproximadamente 700.000
            pessoas escravizadas continuaram sob o mesmo sistema em 1822.
          </li>
          <li>
            Manteve a estrutura do <strong>latifúndio</strong> agroexportador.
          </li>
          <li>
            Deixou a <strong>mesma elite colonial</strong> no poder — fazendeiros,
            comerciantes, bacharéis formados em Coimbra.
          </li>
        </ul>
        <p>
          Em resumo: mudou o país político (de colônia a Império independente),
          mas a estrutura social permaneceu intacta. Não houve reforma agrária,
          abolição da escravidão nem extensão de direitos às camadas pobres.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Brasil (1822)</th>
                <th>América Espanhola (séc. XIX)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forma de governo pós-independência</td>
                <td>Monarquia constitucional</td>
                <td>Repúblicas (maioria)</td>
              </tr>
              <tr>
                <td>Duração do processo</td>
                <td>~2 anos (sem guerra ampla)</td>
                <td>10–15 anos de guerras</td>
              </tr>
              <tr>
                <td>Escravidão</td>
                <td>Mantida (abolida só em 1888)</td>
                <td>Abolida em grande parte no processo</td>
              </tr>
              <tr>
                <td>Estrutura fundiária</td>
                <td>Latifúndio preservado</td>
                <td>Algumas reformas parciais</td>
              </tr>
              <tr>
                <td>Participação popular</td>
                <td>Mínima</td>
                <td>Maior (em alguns casos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 — Reconhecimento internacional ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diplomacia</span>
        <h2>8. O Reconhecimento Internacional</h2>
        <p>
          A independência precisava ser reconhecida para ter validade plena no
          cenário internacional. Três reconhecimentos foram fundamentais:
        </p>
        <ul>
          <li>
            <strong>Estados Unidos (1824):</strong> primeiro grande país a
            reconhecer o Brasil, no contexto da Doutrina Monroe ("América para
            os americanos").
          </li>
          <li>
            <strong>Grã-Bretanha (1825):</strong> reconhecimento formal mediante
            renovação dos tratados comerciais favoráveis de 1810, garantindo
            continuidade dos privilégios britânicos no mercado brasileiro.
          </li>
          <li>
            <strong>Portugal (1825):</strong> o mais custoso — Portugal reconhece
            o Brasil em troca de uma indenização de <strong>2 milhões de libras
            esterlinas</strong>. O Brasil não tinha esse dinheiro e contraiu um
            empréstimo junto à banca inglesa — dívida que oneraria as finanças
            brasileiras por décadas.
          </li>
        </ul>
      </section>

      {/* ── SVG 2 — Quatro poderes ── */}
      <section className="lesson-section">
        <span className="section-kicker">Constituição de 1824</span>
        <h2>9. A Constituição de 1824 e os Quatro Poderes</h2>
        <p>
          Em novembro de 1823, Dom Pedro I dissolveu a Assembleia Constituinte
          (episódio conhecido como "Noite da Agonia") e outorgou, em 25/03/1824,
          a primeira Constituição do Brasil — a mais duradoura da história
          nacional (65 anos, até 1889).
        </p>

        <div className="lesson-figure">
          <svg viewBox="0 0 600 320" width="100%" aria-label="Diagrama dos quatro poderes da Constituição de 1824">
            {/* Título central */}
            <rect x="220" y="120" width="160" height="60" rx="8" fill="#92400e" />
            <text x="300" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">IMPERADOR</text>
            <text x="300" y="164" textAnchor="middle" fontSize="10" fill="#fde68a">Poder Moderador</text>

            {/* Poder Executivo */}
            <rect x="30" y="20" width="140" height="60" rx="8" fill="#b45309" />
            <text x="100" y="46" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">EXECUTIVO</text>
            <text x="100" y="64" textAnchor="middle" fontSize="10" fill="#fde68a">Ministros de Estado</text>
            <line x1="170" y1="50" x2="220" y2="140" stroke="#d97706" strokeWidth="2" strokeDasharray="5,3" />

            {/* Poder Legislativo */}
            <rect x="220" y="20" width="160" height="60" rx="8" fill="#b45309" />
            <text x="300" y="46" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">LEGISLATIVO</text>
            <text x="300" y="64" textAnchor="middle" fontSize="10" fill="#fde68a">Câmara + Senado vitalício</text>
            <line x1="300" y1="80" x2="300" y2="120" stroke="#d97706" strokeWidth="2" strokeDasharray="5,3" />

            {/* Poder Judiciário */}
            <rect x="430" y="20" width="140" height="60" rx="8" fill="#b45309" />
            <text x="500" y="46" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">JUDICIÁRIO</text>
            <text x="500" y="64" textAnchor="middle" fontSize="10" fill="#fde68a">Tribunais e juízes</text>
            <line x1="430" y1="50" x2="380" y2="140" stroke="#d97706" strokeWidth="2" strokeDasharray="5,3" />

            {/* Setas do Moderador para cada um */}
            <path d="M 260 150 Q 130 150 130 80" stroke="#fbbf24" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
            <path d="M 340 150 Q 450 150 470 80" stroke="#fbbf24" strokeWidth="2" fill="none" />

            {/* Caixa de características */}
            <rect x="30" y="230" width="540" height="70" rx="8" fill="#fef3c7" stroke="#d97706" />
            <text x="300" y="252" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Características da Constituição de 1824</text>
            <text x="50" y="272" fontSize="10" fill="#374151">• Voto censitário por renda (excluídos escravizados, mulheres, analfabetos)</text>
            <text x="50" y="288" fontSize="10" fill="#374151">• Catolicismo como religião oficial do Estado</text>
            <text x="50" y="304" fontSize="10" fill="#374151">• Poder Moderador acima dos demais — exclusivo do Imperador</text>
          </svg>
          <p className="lesson-figure-caption">Os quatro poderes previstos na Constituição de 1824, com o Poder Moderador no centro.</p>
        </div>

        <div className="lesson-highlight">
          <strong>Poder Moderador:</strong> inspirado no pensador suíço Benjamin
          Constant (diferente do político positivista), era o "quarto poder" que
          permitia ao Imperador nomear e demitir ministros, dissolver a Câmara,
          vetar leis e nomear senadores vitalícios. Na prática, colocava Dom
          Pedro I acima de todos os outros poderes.
        </div>
      </section>

      {/* ── SEÇÃO 8 — Confederação do Equador ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resistência republicana</span>
        <h2>10. A Confederação do Equador (1824)</h2>
        <p>
          A outorga da Constituição — mais conservadora que o projeto elaborado
          pela Assembleia dissolvida — gerou reação imediata no Nordeste. Em
          julho de 1824, Pernambuco, Ceará, Rio Grande do Norte e Paraíba
          recusaram-se a acatar a nova Carta e proclamaram a{" "}
          <strong>Confederação do Equador</strong>, regime de inspiração
          republicana e federalista.
        </p>
        <p>
          O movimento foi liderado por <strong>Frei Caneca</strong> (Joaquim do
          Amor Divino Caneca), carmelita, jornalista e intelectual pernambucano,
          que editava o jornal <em>Typhis Pernambucano</em> e defendia uma
          república federativa. A repressão imperial foi violenta: o movimento
          foi sufocado militarmente em meses. Frei Caneca foi condenado à morte
          e fuzilado em 13 de janeiro de 1825 — os carrascos se recusaram a
          enforcá-lo, considerando-o religioso, e ele foi executado a tiros.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data</td>
                <td>Julho–novembro de 1824</td>
              </tr>
              <tr>
                <td>Províncias envolvidas</td>
                <td>Pernambuco, Ceará, Rio Grande do Norte, Paraíba</td>
              </tr>
              <tr>
                <td>Principal ideólogo</td>
                <td>Frei Caneca (Joaquim do Amor Divino Caneca)</td>
              </tr>
              <tr>
                <td>Proposta</td>
                <td>República federativa, inspirada nos EUA e na Grã-Colômbia</td>
              </tr>
              <tr>
                <td>Desfecho</td>
                <td>Repressão violenta; Frei Caneca fuzilado em jan/1825</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO EXTRA — Comparação regional e síntese ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e ENEM</span>
        <h2>10. O Brasil no Contexto Latino-Americano: Por que a Monarquia?</h2>
        <p>
          Uma das questões mais debatidas sobre a Independência do Brasil é: por
          que o único país latino-americano que manteve a monarquia após a
          independência foi o Brasil? As principais razões historiográficas são:
        </p>
        <ul>
          <li>
            <strong>Presença física de um herdeiro legítimo:</strong> Dom Pedro
            estava no Brasil, o que possibilitou uma transição "de cima para
            baixo" sem vácuo de poder. Na América Espanhola, a metrópole não
            tinha representante local de nível dinástico.
          </li>
          <li>
            <strong>Medo da fragmentação:</strong> As elites brasileiras temiam
            que uma república federal gerasse a mesma fragmentação observada na
            América Espanhola, onde o antigo Vice-Reino do Prata se dividiu em
            Argentina, Bolívia, Paraguai e Uruguai. A monarquia era vista como
            garantia de unidade territorial.
          </li>
          <li>
            <strong>Medo da "haitianização":</strong> O Haiti (1804) era um
            fantasma permanente para as elites escravistas — uma revolução de
            escravizados que exterminara os brancos e proclamara a república. A
            monarquia, com um imperador forte, parecia garantia de ordem e controle
            sobre a população escravizada.
          </li>
          <li>
            <strong>Papel da Inglaterra:</strong> A Grã-Bretanha, potência
            hegemônica da época, preferia uma monarquia estável no Brasil —
            parceira comercial garantida — a uma república potencialmente instável.
          </li>
        </ul>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌎</span>
            <h3>América Espanhola</h3>
            <p>
              Repúblicas fragmentadas após guerras longas; caudilhismo; instabilidade
              crônica; sem herdeiro dinástico local para conduzir a transição.
            </p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Brasil</h3>
            <p>
              Monarquia constitucional estável; unidade territorial preservada;
              mesma elite colonial no poder; escravidão mantida; transição sem
              guerra prolongada.
            </p>
          </div>
          <div className="lesson-card">
            <span>🇺🇸</span>
            <h3>EUA (paralelo)</h3>
            <p>
              República federal após guerra de independência (1776–1783); abolição
              somente em 1865; expansão territorial ao oeste; industrialização
              acelerada no Norte.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator</th>
                <th>Justificativa para a Monarquia no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unidade territorial</td>
                <td>Evitou fragmentação como na América Espanhola</td>
              </tr>
              <tr>
                <td>Controle da escravidão</td>
                <td>Estado forte como garantia de ordem; medo do Haiti</td>
              </tr>
              <tr>
                <td>Herdeiro dinástico</td>
                <td>Dom Pedro disponível como liderança legítima</td>
              </tr>
              <tr>
                <td>Interesse britânico</td>
                <td>Inglaterra preferia monarquia estável como parceira</td>
              </tr>
              <tr>
                <td>Conservadorismo da elite</td>
                <td>Fazendeiros preferiam ordem à participação popular</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>11. Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A Abertura dos Portos às Nações Amigas, decretada por D. João VI em 28 de janeiro de 1808, representou o fim de qual política econômica colonial?</p>}
          options={[
            { letter: "a", text: "Do escravismo colonial" },
            { letter: "b", text: "Do Pacto Colonial (exclusivo metropolitano)", correct: true },
            { letter: "c", text: "Da tributação sobre o ouro" },
            { letter: "d", text: "Da proibição da imprensa no Brasil" },
            { letter: "e", text: "Do latifúndio agroexportador" },
          ]}
          resolution={<p>O Pacto Colonial determinava que as colônias só podiam comerciar com a metrópole, garantindo o monopólio do comércio português. A Abertura dos Portos rompeu esse exclusivo, permitindo ao Brasil negociar diretamente com outras nações — especialmente a Inglaterra.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>O Tratado de Comércio e Navegação de 1810 entre o Brasil e a Grã-Bretanha estabeleceu tarifas de 15% para produtos ingleses, contra 16% para os portugueses. Qual foi a consequência mais significativa desse acordo para a economia brasileira?</p>}
          options={[
            { letter: "a", text: "Impulsionou a industrialização brasileira ao reduzir importações" },
            { letter: "b", text: "Transformou o Brasil em mercado cativo da indústria britânica, sufocando manufaturas locais", correct: true },
            { letter: "c", text: "Garantiu ao Brasil acesso privilegiado ao mercado inglês" },
            { letter: "d", text: "Reduziu a dependência brasileira do trabalho escravo" },
            { letter: "e", text: "Forçou Portugal a abolir o tráfico de escravizados imediatamente" },
          ]}
          resolution={<p>Com tarifas preferênciais para os ingleses, os produtos manufaturados britânicos — tecidos, ferragens, louças — inundaram o Brasil a preços que nenhuma produção local conseguia competir. O Brasil ficou preso ao papel de exportador de matérias-primas e importador de manufaturados ingleses, padrão que perpetuou a dependência econômica.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Constituição de 1824 previa quatro poderes: Executivo, Legislativo, Judiciário e Moderador. O Poder Moderador, exclusivo do Imperador, tem sido interpretado pela historiografia como:</p>}
          options={[
            { letter: "a", text: "Uma garantia de equilíbrio entre os demais poderes, seguindo o modelo de Montesquieu" },
            { letter: "b", text: "Um mecanismo que, na prática, concentrava o controle político nas mãos do Imperador, sobrepondo-se aos demais poderes", correct: true },
            { letter: "c", text: "Uma inovação democrática que permitia ao povo recorrer diretamente ao Imperador" },
            { letter: "d", text: "Uma adaptação do sistema parlamentarista inglês ao contexto brasileiro" },
            { letter: "e", text: "Um instrumento para limitar os poderes do Exército no Estado imperial" },
          ]}
          resolution={<p>O Poder Moderador, inspirado em Benjamin Constant (político suíço), dava ao Imperador o direito de nomear e demitir ministros, dissolver a Câmara, vetar leis e nomear senadores vitalícios. Na prática, tornava os outros três poderes subordinados à vontade imperial, configurando um sistema de concentração do poder na figura do Imperador — o que é considerado elemento conservador e autoritário da ordem imperial brasileira.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) "A independência do Brasil foi feita de cima para baixo [...] não interrompeu a escravidão, não alterou a estrutura fundiária, não provocou guerras prolongadas [...] a mesma elite colonial assumiu o Estado independente." Esse trecho destaca qual característica central do processo de independência brasileiro?"</p>}
          options={[
            { letter: "a", text: "O caráter popular e democrático da independência, com ampla participação das camadas pobres" },
            { letter: "b", text: "A ruptura radical com o passado colonial, similar ao modelo norte-americano" },
            { letter: "c", text: "O caráter conservador e elitista, que preservou as estruturas sociais e econômicas do período colonial", correct: true },
            { letter: "d", text: "A influência decisiva da Revolução Francesa nos líderes da independência" },
            { letter: "e", text: "O papel central da Igreja Católica na mobilização popular pela separação de Portugal" },
          ]}
          resolution={<p>O texto descreve o caráter conservador da independência brasileira: processo conduzido pela elite colonial (fazendeiros, comerciantes, profissionais liberais), sem reforma social, com manutenção da escravidão, do latifúndio e da monarquia. Contrasta com processos mais radicais de outras regiões da América.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>A Confederação do Equador (1824) e a outorga da Constituição do mesmo ano estão diretamente relacionadas. Qual era a principal reivindicação do movimento e qual foi seu desfecho?</p>}
          options={[
            { letter: "a", text: "Reivindicava a abolição da escravidão; foi negociada politicamente por Dom Pedro I" },
            { letter: "b", text: "Reivindicava a independência total do Nordeste; foi reconhecida após negociação com Portugal" },
            { letter: "c", text: "Reivindicava um regime republicano e federalista em oposição à Constituição outorgada; foi reprimida violentamente e seu líder Frei Caneca foi executado", correct: true },
            { letter: "d", text: "Reivindicava a manutenção dos laços com Portugal; foi dissolvida pela pressão inglesa" },
            { letter: "e", text: "Reivindicava a reforma agrária e a expulsão dos latifundiários; foi integrada ao movimento abolicionista posterior" },
          ]}
          resolution={<p>Insatisfeitos com a dissolução da Assembleia Constituinte e a Constituição outorgada — mais conservadora que o projeto anterior —, as províncias do Nordeste proclamaram a Confederação do Equador, propondo uma república federativa. Dom Pedro I reprimiu o movimento militarmente; Frei Caneca, seu principal ideólogo, foi condenado à morte e fuzilado em janeiro de 1825.</p>}
        />
      </section>
    </article>
  );
}
