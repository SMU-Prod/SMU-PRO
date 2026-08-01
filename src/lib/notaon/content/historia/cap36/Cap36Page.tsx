"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 36</span>
          <h1>Crise do Império e Proclamação da República</h1>
          <p>
            Em menos de duas décadas, o Segundo Reinado — que parecia estável e
            duradouro — desmoronou sob o peso de três crises institucionais
            acumuladas, do isolamento crescente da monarquia e do protagonismo
            político de um Exército seduzido pelo positivismo republicano. O 15
            de novembro de 1889 não foi uma revolução popular, mas um golpe
            cirúrgico que inaugurou a República — com as mesmas elites no poder.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 — As Três Questões ── */}
      <section className="lesson-section">
        <span className="section-kicker">1870–1880</span>
        <h2>1. As "Questões" que Desgastaram o Império</h2>
        <p>
          Três crises institucionais, conhecidas como as "Questões", corroeram
          progressivamente a base de sustentação do Império na década de 1870:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⛪</span>
            <h3>Questão Religiosa (1872–75)</h3>
            <p>
              Os bispos D. Vital (Olinda) e D. Macedo Costa (Belém) proibiram
              irmandades católicas vinculadas à maçonaria de exercer atividades
              religiosas. D. Pedro II, ele próprio maçom, processou os bispos
              pelo governo civil; foram condenados a 4 anos de trabalhos
              forçados. Anistiados em 1875, mas o dano estava feito: a Igreja
              se afastou do Império.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Questão Militar (1879–87)</h3>
            <p>
              Militares insatisfeitos com baixos soldos, subalternidade ao poder
              civil e influência do positivismo. O caso Sena Madureira (1886)
              — oficial punido por artigo abolicionista em jornal — foi
              defendido publicamente pelo general Deodoro da Fonseca, expondo
              a ruptura entre o Exército e o governo imperial.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Questão Servil (1888)</h3>
            <p>
              A abolição sem indenização (Lei Áurea, 1888) alienou os grandes
              proprietários de escravizados de Minas e Rio de Janeiro, que
              migraram para o Partido Republicano ou simplesmente deixaram de
              apoiar o Império — retirando sua base econômica e social.
            </p>
          </div>
        </div>
      </section>

      {/* ── SVG 1 — Diagrama das causas da crise ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>2. Diagrama: Causas da Crise do Império</h2>
        <div className="lesson-figure">
          <svg viewBox="0 0 680 360" width="100%" aria-label="Diagrama das causas da crise do Império">
            {/* Centro: Crise do Império */}
            <ellipse cx="340" cy="180" rx="90" ry="45" fill="#991b1b" />
            <text x="340" y="175" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">CRISE DO</text>
            <text x="340" y="193" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">IMPÉRIO</text>

            {/* 1 — Questão Religiosa */}
            <rect x="20" y="20" width="160" height="70" rx="8" fill="#b45309" />
            <text x="100" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Questão Religiosa</text>
            <text x="100" y="58" textAnchor="middle" fontSize="9" fill="#fde68a">1872–75</text>
            <text x="100" y="74" textAnchor="middle" fontSize="9" fill="#fef3c7">Igreja afasta-se do Império</text>
            <line x1="180" y1="55" x2="255" y2="160" stroke="#b45309" strokeWidth="2" />

            {/* 2 — Questão Militar */}
            <rect x="500" y="20" width="160" height="70" rx="8" fill="#1d4ed8" />
            <text x="580" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Questão Militar</text>
            <text x="580" y="58" textAnchor="middle" fontSize="9" fill="#bfdbfe">1879–87</text>
            <text x="580" y="74" textAnchor="middle" fontSize="9" fill="#eff6ff">Exército politizado</text>
            <line x1="500" y1="55" x2="425" y2="160" stroke="#1d4ed8" strokeWidth="2" />

            {/* 3 — Questão Servil / Abolição */}
            <rect x="20" y="270" width="160" height="70" rx="8" fill="#7c3aed" />
            <text x="100" y="292" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Abolição (1888)</text>
            <text x="100" y="308" textAnchor="middle" fontSize="9" fill="#ede9fe">Sem indenização</text>
            <text x="100" y="324" textAnchor="middle" fontSize="9" fill="#f5f3ff">Elite rural migra p/ Rep.</text>
            <line x1="180" y1="305" x2="255" y2="210" stroke="#7c3aed" strokeWidth="2" />

            {/* 4 — Propaganda Republicana */}
            <rect x="500" y="270" width="160" height="70" rx="8" fill="#16a34a" />
            <text x="580" y="292" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Propaganda</text>
            <text x="580" y="308" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Republicana</text>
            <text x="580" y="324" textAnchor="middle" fontSize="9" fill="#dcfce7">Partido Rep. (1870)</text>
            <line x1="500" y1="305" x2="425" y2="210" stroke="#16a34a" strokeWidth="2" />

            {/* 5 — Positivismo */}
            <rect x="260" y="300" width="160" height="50" rx="8" fill="#d97706" />
            <text x="340" y="322" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Positivismo</text>
            <text x="340" y="338" textAnchor="middle" fontSize="9" fill="#fef3c7">Comte → militares</text>
            <line x1="340" y1="300" x2="340" y2="225" stroke="#d97706" strokeWidth="2" />
          </svg>
          <p className="lesson-figure-caption">As causas convergentes da crise do Império Brasileiro na década de 1880.</p>
        </div>
      </section>

      {/* ── SEÇÃO 3 — Propaganda Republicana ── */}
      <section className="lesson-section">
        <span className="section-kicker">Movimento republicano</span>
        <h2>3. A Propaganda Republicana e o Partido Republicano</h2>
        <p>
          O Partido Republicano foi fundado em dezembro de 1870 — com núcleos em
          São Paulo (3 de dezembro, "Convenção de Itu") e no Rio de Janeiro —
          e publicou o <em>Manifesto Republicano</em>, documento que criticava o
          Poder Moderador, defendia o federalismo e propunha a modernização do
          Estado.
        </p>
        <p>
          O movimento republicano não era monolítico. Três correntes principais
          coexistiam:
        </p>
        <ul>
          <li>
            <strong>Evolucionistas (SP):</strong> Predominavam em São Paulo;
            acreditavam que a república viria gradualmente, por pressão política
            e cultural, sem golpe. Representados por Campos Sales, Prudente de
            Moraes — futuros presidentes.
          </li>
          <li>
            <strong>Positivistas (militares, sul):</strong> Influenciados por
            Augusto Comte, defendiam uma "república científica" e a intervenção
            militar para acelerar a mudança. Benjamin Constant era o principal
            líder ideológico.
          </li>
          <li>
            <strong>Federalistas radicais:</strong> Queriam ampla autonomia das
            províncias (futuros estados), contra a centralização imperial.
          </li>
        </ul>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Corrente</th>
                <th>Base</th>
                <th>Método</th>
                <th>Representantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Evolucionista</td>
                <td>Elite cafeicultora paulista</td>
                <td>Pressão política gradual</td>
                <td>Campos Sales, Prudente de Moraes</td>
              </tr>
              <tr>
                <td>Positivista</td>
                <td>Militares (RS, RJ)</td>
                <td>Golpe / intervenção militar</td>
                <td>Benjamin Constant, Deodoro</td>
              </tr>
              <tr>
                <td>Federalista radical</td>
                <td>Diversas províncias</td>
                <td>Descentralização imediata</td>
                <td>Júlio de Castilhos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 — Proclamação ── */}
      <section className="lesson-section">
        <span className="section-kicker">15 de novembro de 1889</span>
        <h2>4. A Proclamação da República</h2>
        <p>
          Em novembro de 1889, o gabinete do Visconde de Ouro Preto — o último
          do Império — tentava reformas para salvar a monarquia (autonomia
          provincial, abolição do Senado vitalício). Os militares republicanos,
          liderados por <strong>Deodoro da Fonseca</strong> e inspirados
          ideologicamente por <strong>Benjamin Constant</strong>, conspiravam.
        </p>
        <p>
          O gatilho foi um rumor: que o governo iria prender Benjamin Constant e
          Deodoro e reforçar as tropas leais à monarquia. Na madrugada de 15 de
          novembro, Deodoro reuniu tropas no Campo de Santana, no Rio de Janeiro.
          O quartel estava cercado. Deodoro, sem uma ordem ou um plano elaborado
          previamente, improvisou: declarou deposto o gabinete de Ouro Preto.
        </p>
        <p>
          Dom Pedro II, em Petrópolis, não resistiu. Recebeu a notícia com
          relativa serenidade — estava doente e cansado. Em 17 de novembro, a
          família imperial embarcou para o exílio em Portugal e depois na França.
          Dom Pedro II morreu em Paris em 5 de dezembro de 1891.
        </p>

        <div className="lesson-highlight">
          <strong>O "povo bestializado":</strong> Aristides Lobo, republicano
          histórico e futuro ministro, escreveu dias depois: <em>"O povo assistiu
          àquilo bestializado, atônito, sem conhecer o que significava."</em>
          Não houve participação popular significativa — a república foi feita por
          militares e políticos, sem as ruas. Esse caráter elitista marcará a
          Primeira República.
        </div>
      </section>

      {/* ── SEÇÃO 5 — Caráter do 15 de Novembro ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação histórica</span>
        <h2>5. O Caráter do 15 de Novembro: Golpe ou Revolução?</h2>
        <p>
          A historiografia debate o caráter do 15 de Novembro. Os principais
          pontos de análise são:
        </p>
        <ul>
          <li>
            <strong>Golpe militar:</strong> A proclamação não foi resultado de
            eleições, plebiscito ou mobilização popular ampla. Foi uma decisão
            de um grupo de oficiais, sob liderança de Deodoro, que agiu
            motivado por razões corporativas (defesa da honra militar) tanto
            quanto por convicção republicana.
          </li>
          <li>
            <strong>Participação civil:</strong> Republicanos civis, como
            Benjamin Constant e Quintino Bocaiúva, participaram da articulação
            política, mas o momento decisivo foi militar.
          </li>
          <li>
            <strong>Continuidade das elites:</strong> Os fazendeiros do café
            paulista, que haviam migrado para o republicanismo após a abolição,
            logo assumiram o controle político da República — inaugurando a
            Política dos Governadores e a Política do Café com Leite.
          </li>
          <li>
            <strong>Sem participação popular:</strong> As classes trabalhadoras,
            os ex-escravizados, os sertanejos — nenhum desses grupos foi
            consultado ou mobilizado. A república foi proclamada em seu nome,
            mas sem sua participação.
          </li>
        </ul>
      </section>

      {/* ── SVG 2 — Linha do tempo 1870–1891 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>6. Linha do Tempo: Da Propaganda Republicana à Constituição (1870–1891)</h2>
        <div className="lesson-figure">
          <svg viewBox="0 0 860 230" width="100%" aria-label="Linha do tempo 1870 a 1891">
            {/* Linha base */}
            <line x1="40" y1="110" x2="820" y2="110" stroke="#dc2626" strokeWidth="3" />
            <polygon points="820,105 835,110 820,115" fill="#dc2626" />

            {[
              { x: 70,  ano: "1870", label: "Partido\nRepublicano" },
              { x: 170, ano: "1872", label: "Questão\nReligiosa" },
              { x: 280, ano: "1879", label: "Questão\nMilitar" },
              { x: 390, ano: "1885", label: "Lei dos\nSexagenários" },
              { x: 490, ano: "1888", label: "Lei\nÁurea" },
              { x: 590, ano: "1889", label: "Proclamação\nda República" },
              { x: 700, ano: "1890", label: "Deodoro\nPresidente" },
              { x: 800, ano: "1891", label: "Constituição\nRepublicana" },
            ].map(({ x, ano, label }) => (
              <g key={ano}>
                <circle cx={x} cy="110" r="7" fill="#dc2626" />
                <text x={x} y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">{ano}</text>
                {label.split("\n").map((line, i) => (
                  <text key={i} x={x} y={128 + i * 14} textAnchor="middle" fontSize="10" fill="#374151">{line}</text>
                ))}
              </g>
            ))}
          </svg>
          <p className="lesson-figure-caption">Cronologia da crise do Império e proclamação da República (1870–1891).</p>
        </div>
      </section>

      {/* ── SEÇÃO 6 — Constituição de 1891 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Nova ordem</span>
        <h2>7. A Constituição de 1891</h2>
        <p>
          A primeira Constituição republicana foi promulgada em 24 de fevereiro
          de 1891. Seu principal redator foi Rui Barbosa, inspirado no modelo
          norte-americano. As características centrais:
        </p>
        <ul>
          <li>
            <strong>República federativa presidencialista:</strong> Substituiu o
            Poder Moderador pelos três poderes clássicos (Executivo, Legislativo,
            Judiciário); presidente eleito diretamente.
          </li>
          <li>
            <strong>Federalismo amplo:</strong> Os estados (antigas províncias)
            ganharam autonomia para contrair empréstimos externos, criar impostos
            próprios e manter forças militares.
          </li>
          <li>
            <strong>Voto masculino e direto:</strong> Mas excluído para
            analfabetos (mais de 80% da população), mendigos, praças de pré,
            mulheres e religiosos sujeitos a voto de obediência.
          </li>
          <li>
            <strong>Separação Igreja-Estado:</strong> Fim do catolicismo como
            religião oficial; registro civil obrigatório; casamento civil.
          </li>
        </ul>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Constituição de 1824 (Império)</th>
                <th>Constituição de 1891 (República)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forma de governo</td>
                <td>Monarquia constitucional</td>
                <td>República presidencialista</td>
              </tr>
              <tr>
                <td>Poderes</td>
                <td>4 (+ Moderador)</td>
                <td>3 (Executivo, Legislativo, Judiciário)</td>
              </tr>
              <tr>
                <td>Organização territorial</td>
                <td>Centralizado (províncias sem autonomia)</td>
                <td>Federalismo amplo (estados autônomos)</td>
              </tr>
              <tr>
                <td>Religião oficial</td>
                <td>Catolicismo</td>
                <td>Estado laico</td>
              </tr>
              <tr>
                <td>Voto</td>
                <td>Censitário (por renda)</td>
                <td>Masculino direto (excluídos analfabetos etc.)</td>
              </tr>
              <tr>
                <td>Senado</td>
                <td>Vitalício (nomeado pelo Imperador)</td>
                <td>Eleito (mandato de 9 anos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 — República da Espada ── */}
      <section className="lesson-section">
        <span className="section-kicker">1889–1894</span>
        <h2>8. A República da Espada: Deodoro e Floriano</h2>
        <p>
          Os primeiros cinco anos da República foram governados por militares —
          período conhecido como "República da Espada":
        </p>
        <ul>
          <li>
            <strong>Deodoro da Fonseca (1889–1891):</strong> Primeiro presidente,
            em conflito permanente com o Congresso. Em novembro de 1891, fechou
            o Congresso — um autogolpe. A Revolta da Armada (marinha favorável ao
            parlamentarismo) o forçou a renunciar dias depois.
          </li>
          <li>
            <strong>Floriano Peixoto (1891–1894), o "Marechal de Ferro":</strong>
            Assumiu a presidência com base constitucional, mas governou de forma
            autoritária. Enfrentou a <em>Revolta da Armada</em> (1893–94, marinha
            monarquista) e a <em>Revolução Federalista</em> (1893–95, conflito
            civil no Rio Grande do Sul com degolas e violência extrema). Reprimiu
            ambas duramente.
          </li>
        </ul>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Presidente</th>
                <th>Período</th>
                <th>Principal crise</th>
                <th>Desfecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deodoro da Fonseca</td>
                <td>1889–1891</td>
                <td>Conflito com Congresso; autogolpe (nov/1891)</td>
                <td>Renuncia pressionado pela Revolta da Armada</td>
              </tr>
              <tr>
                <td>Floriano Peixoto</td>
                <td>1891–1894</td>
                <td>Revolta da Armada + Revolução Federalista</td>
                <td>Reprime ambas; entrega poder a Prudente de Moraes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Com a eleição de <strong>Prudente de Moraes</strong> em 1894 —
          primeiro presidente civil —, encerrava-se a República da Espada e
          começava a hegemonia da oligarquia cafeeira paulista, inaugurando a
          chamada Primeira República ou República Velha (1894–1930).
        </p>
      </section>

      {/* ── SEÇÃO 8 — Síntese ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Síntese: Do Império à República</h2>
        <p>
          A transição do Império para a República no Brasil foi gradual em seu
          desgaste e súbita em sua execução. O Império não caiu por uma
          insurreição popular, mas pelo abandono progressivo de seus apoios
          tradicionais: a Igreja (Questão Religiosa), o Exército (Questão
          Militar), os grandes proprietários (abolição sem indenização) e a
          nascente elite urbana (propaganda republicana).
        </p>
        <p>
          A República proclamada em 1889 herdou as estruturas fundamentais do
          Império: exclusão das mulheres, analfabetos e pobres do processo
          político; domínio das oligarquias regionais; economia agroexportadora
          dependente; racismo estrutural; e desigualdade social extrema. A
          mudança foi, sobretudo, de forma — da monarquia para a república —
          sem transformação da substância social.
        </p>
      </section>

      {/* ── SEÇÃO EXTRA — Positivismo e bandeira ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ideologia republicana</span>
        <h2>9b. O Positivismo e a Bandeira do Brasil</h2>
        <p>
          A influência do positivismo de Augusto Comte sobre os fundadores da
          República brasileira deixou marcas visíveis até hoje. O lema{" "}
          <strong>"Ordem e Progresso"</strong>, inscrito na bandeira da República
          proclamada em 1889, é diretamente extraído do positivismo comteano:
          "O amor por princípio e a ordem por base; o progresso por fim."
        </p>
        <p>
          O positivismo pregava que a humanidade passava por três estágios
          evolutivos:
        </p>
        <ol>
          <li><strong>Teológico:</strong> Explicação religiosa dos fenômenos; monarquias e feudalismo.</li>
          <li><strong>Metafísico:</strong> Explicação por entidades abstratas; filosofia iluminista.</li>
          <li><strong>Positivo (científico):</strong> Explicação pelos fatos e leis naturais; república e ciência.</li>
        </ol>
        <p>
          Para os militares positivistas brasileiros, como Benjamin Constant, a
          monarquia representava o estágio "teológico" — atrasado, irracional,
          baseado no privilégio de nascimento. A república seria a forma científica
          e racional de governo, adequada à modernidade. Esse quadro intelectual
          deu coerência ideológica ao golpe de 1889 e justificou o papel dos
          militares como "condutores" da sociedade ao progresso.
        </p>

        <div className="lesson-highlight">
          <strong>Ironia histórica:</strong> O positivismo, que se pretendia
          científico e progressista, foi usado para justificar governos
          autoritários na República brasileira. Júlio de Castilhos, no Rio
          Grande do Sul, governou por décadas com base em um positivismo
          conservador que excluía a oposição. O "progresso" positivista, no
          Brasil, muitas vezes significou ordem sem democracia.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito positivista</th>
                <th>Aplicação no contexto republicano brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Ordem"</td>
                <td>Estabilidade política; repressão às revoltas; centralização</td>
              </tr>
              <tr>
                <td>"Progresso"</td>
                <td>Modernização econômica; ciência; abolição da escravidão</td>
              </tr>
              <tr>
                <td>República como estágio científico</td>
                <td>Justificativa intelectual para substituir a monarquia</td>
              </tr>
              <tr>
                <td>Papel dos técnicos/militares</td>
                <td>Elite científica como condutora da sociedade ao progresso</td>
              </tr>
              <tr>
                <td>Ditadura positivista</td>
                <td>No RS, Júlio de Castilhos usa positivismo para concentrar poder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>10. Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A 'Questão Religiosa' (1872–75) envolveu um conflito entre D. Pedro II e a Igreja Católica. Qual foi o motivo central do conflito?</p>}
          options={[
            { letter: "a", text: "A tentativa do governo imperial de separar formalmente a Igreja do Estado, criando um registro civil" },
            { letter: "b", text: "Os bispos D. Vital e D. Macedo Costa proibiram irmandades católicas vinculadas à maçonaria, e o governo imperial processou e condenou os bispos, que resistiram às ordens civis", correct: true },
            { letter: "c", text: "A Igreja se recusou a abençoar a Guerra do Paraguai, gerando conflito com o Exército" },
            { letter: "d", text: "O governo imperial proibiu ordens religiosas de possuírem terras no Brasil" },
            { letter: "e", text: "Os bispos apoiaram o movimento abolicionista e o governo imperial os puniu por isso" },
          ]}
          resolution={<p>Os bispos D. Vital e D. Macedo Costa proibiram irmandades religiosas ligadas à maçonaria de exercer atividades nas igrejas. Dom Pedro II, que era maçom, considerou o ato uma desobediência ao poder civil — que, pela Constituição de 1824, tinha autoridade sobre a Igreja no Brasil (padroado régio). Os bispos foram processados e condenados. Anistiados em 1875, o episódio afastou definitivamente a Igreja do apoio à monarquia.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>A Proclamação da República em 15 de novembro de 1889 é frequentemente caracterizada pelo historiador José Murilo de Carvalho como uma mudança 'de cima para baixo', sem participação popular. Qual expressão contemporânea ao evento sintetiza esse caráter?</p>}
          options={[
            { letter: "a", text: "A frase de Deodoro: 'Em nome do povo brasileiro, proclamo a República'" },
            { letter: "b", text: "A afirmação de Aristides Lobo de que 'o povo assistiu àquilo bestializado, atônito, sem conhecer o que significava'", correct: true },
            { letter: "c", text: "O discurso de Rui Barbosa sobre 'a vontade geral da nação' expresso no 15 de Novembro" },
            { letter: "d", text: "A carta de Dom Pedro II aceitando pacificamente o novo regime em nome do bem do país" },
            { letter: "e", text: "O relato de Benjamin Constant sobre a 'aclamação popular' no Campo de Santana" },
          ]}
          resolution={<p>Aristides Lobo, republicano histórico e futuro ministro da República, escreveu em carta poucos dias após o 15 de Novembro: 'O povo assistiu àquilo bestializado, atônito, sem conhecer o que significava.' Essa expressão é usada pela historiografia para ilustrar o caráter elitista e não-popular da Proclamação da República brasileira.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Constituição de 1891 estabeleceu o voto direto masculino, mas excluiu várias categorias de cidadãos. Considerando que mais de 80% da população brasileira era analfabeta em 1891, qual foi o efeito prático da exclusão dos analfabetos do direito de voto?</p>}
          options={[
            { letter: "a", text: "Praticamente toda a população rural e pobre foi excluída da participação política, concentrando o poder nas mãos das oligarquias letradas", correct: true },
            { letter: "b", text: "A exclusão foi irrelevante, pois mesmo antes os analfabetos votavam informalmente nas decisões políticas locais" },
            { letter: "c", text: "A medida foi rapidamente revertida pela lei eleitoral de 1892, que incluiu os analfabetos" },
            { letter: "d", text: "A exclusão afetou principalmente as populações urbanas, que tinham índices de analfabetismo mais altos" },
            { letter: "e", text: "O efeito foi democratizador, pois garantiu que apenas cidadãos informados participassem das eleições" },
          ]}
          resolution={<p>Com mais de 80% de analfabetismo, a exclusão dos analfabetos significou, na prática, a exclusão da esmagadora maioria da população brasileira — especialmente trabalhadores rurais, ex-escravizados e populações pobres. O resultado foi a concentração do poder eleitoral nas mãos das oligarquias letradas, que dominaram a Primeira República por meio do coronelismo, do voto de cabresto e da Política dos Governadores.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) "A República proclamada em 1889 não alterou a estrutura fundiária, não incluiu os ex-escravizados, não universalizou o voto e manteve as mesmas oligarquias no poder. Mudou-se a forma — de monarquia para república — mas não a substância." Esse argumento sustenta a interpretação de que a Proclamação da República foi:</p>}
          options={[
            { letter: "a", text: "Uma revolução burguesa completa, que transformou radicalmente a sociedade brasileira" },
            { letter: "b", text: "Um golpe militar de caráter conservador que manteve as estruturas sociais e econômicas do período imperial, mudando apenas a forma política", correct: true },
            { letter: "c", text: "Um movimento popular que expressou a vontade das classes trabalhadoras contra a aristocracia imperial" },
            { letter: "d", text: "Uma revolução liberal-democrática que instituiu o sufrágio universal e garantiu direitos para todos" },
            { letter: "e", text: "Uma ruptura radical com o passado colonial, inspirada nos ideais da Revolução Francesa" },
          ]}
          resolution={<p>A historiografia dominante (José Murilo de Carvalho, Boris Fausto, entre outros) interpreta a Proclamação da República como um golpe militar conservador: não houve participação popular, não houve reforma agrária, os ex-escravizados foram excluídos, e as oligarquias cafeeiras paulistas assumiram o controle da República logo depois. A forma política mudou (monarquia → república), mas a estrutura social, econômica e de poder permaneceu essencialmente a mesma.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>A 'Questão Militar' da década de 1880 está relacionada à influência do positivismo comteano sobre os oficiais do Exército brasileiro. Como o positivismo contribuiu para o descontentamento militar com o Império?</p>}
          options={[
            { letter: "a", text: "O positivismo pregava a restauração da monarquia absoluta, em contradição com o liberalismo imperial" },
            { letter: "b", text: "O positivismo de Comte defendia uma 'república científica' governada por técnicos e positivamente ordenada, tornando os militares positivistas hostis ao sistema monárquico baseado no privilégio hereditário e na arbitrariedade do Poder Moderador", correct: true },
            { letter: "c", text: "O positivismo era uma corrente religiosa que os militares adotaram para se opor à Igreja, aliada do Império" },
            { letter: "d", text: "Os militares positivistas defendiam o socialismo e a redistribuição de terras, o que os colocava em choque com o Império" },
            { letter: "e", text: "O positivismo comteano defendia a separação total do Exército da política, o que foi rejeitado pelos militares que queriam mais influência" },
          ]}
          resolution={<p>O positivismo de Augusto Comte pregava uma sociedade racionalmente organizada, governada pela ciência e pelo progresso — a 'ordem e progresso' que apareceria na bandeira republicana. Para os militares positivistas (como Benjamin Constant), a monarquia representava o estágio 'teológico' e 'metafísico' da civilização, atrasado e irracional. A república seria o estágio 'positivo' e científico. Esse ideário forneceu a justificativa intelectual para o envolvimento militar na política e, finalmente, para o golpe de 1889.</p>}
        />
      </section>
    </article>
  );
}
