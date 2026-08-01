"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 27</span>
          <h1>Revoltas Coloniais e Emancipacionistas</h1>
          <p>
            O Brasil colonial não foi palco de passividade. Entre os séculos
            XVII e XVIII, uma série de revoltas abalou o domínio português —
            algumas reivindicando apenas direitos locais, outras ousando sonhar
            com a independência. Compreender a distinção entre revoltas
            nativistas e emancipacionistas, seus líderes, causas e consequências
            é essencial para o ENEM, que frequentemente cobra o contexto, os
            personagens e o significado histórico desses movimentos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito-chave</span>
        <h2>1. Nativistas vs. Emancipacionistas: a distinção fundamental</h2>
        <p>
          Antes de estudar cada revolta individualmente, é imprescindível
          dominar a diferença conceitual entre os dois grandes grupos de
          movimentos coloniais. O ENEM cobra frequentemente a classificação
          correta de cada revolta.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Revoltas Nativistas</h3>
            <p>
              Ocorrem principalmente nos séculos XVII e XVIII. Os participantes
              não questionam a soberania portuguesa nem buscam independência.
              Suas reivindicações são locais e imediatas: contra monopólios
              comerciais, impostos abusivos, disputas por poder regional e
              privilégios de grupos específicos. O vínculo com Portugal é
              mantido — pede-se apenas que ele governe melhor.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗽</span>
            <h3>Revoltas Emancipacionistas</h3>
            <p>
              Surgem principalmente na segunda metade do século XVIII,
              inspiradas pelo Iluminismo europeu (Locke, Rousseau, Voltaire) e
              pelo exemplo da Independência dos EUA (1776). Seus líderes buscam
              romper com Portugal e fundar um Estado independente. As principais
              são a Inconfidência Mineira (1789) e a Conjuração Baiana (1798).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Macete ENEM:</strong> Nativistas = ficam dentro do Império
          Português (reclamam das regras). Emancipacionistas = querem sair do
          Império Português (mudar o jogo).
        </div>
      </section>

      {/* ── SEÇÃO 2 — SVG MAPA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa</span>
        <h2>2. Onde Aconteceram as Revoltas</h2>
        <p>
          As revoltas se concentram em regiões de alta produtividade econômica
          ou em zonas de atrito entre grupos sociais. O mapa esquemático abaixo
          localiza os principais movimentos.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mapa esquemático do Brasil colonial localizando as principais revoltas"
          >
            {/* Contorno simplificado do Brasil colonial */}
            <rect x="0" y="0" width="520" height="600" fill="#e8f4f8" rx="8" />
            <path
              d="M100,40 L380,50 L430,120 L450,220 L440,320 L420,400 L370,480 L280,540 L200,550 L130,500 L80,420 L60,320 L70,220 L90,120 Z"
              fill="#c8e6c9"
              stroke="#388e3c"
              strokeWidth="2"
            />
            {/* Linhas internas — capitanias */}
            <line x1="120" y1="180" x2="400" y2="180" stroke="#81c784" strokeWidth="1" strokeDasharray="5,4" />
            <line x1="120" y1="300" x2="420" y2="300" stroke="#81c784" strokeWidth="1" strokeDasharray="5,4" />
            <line x1="120" y1="420" x2="380" y2="420" stroke="#81c784" strokeWidth="1" strokeDasharray="5,4" />

            {/* Maranhão — Beckman */}
            <circle cx="175" cy="105" r="14" fill="#e53935" opacity="0.85" />
            <text x="195" y="100" fontSize="11" fill="#b71c1c" fontWeight="bold">Revolta de Beckman</text>
            <text x="195" y="114" fontSize="10" fill="#333">1684 · Maranhão</text>

            {/* Minas Gerais — Emboabas + Vila Rica */}
            <circle cx="310" cy="310" r="14" fill="#fb8c00" opacity="0.85" />
            <text x="330" y="305" fontSize="11" fill="#e65100" fontWeight="bold">Guerra dos Emboabas</text>
            <text x="330" y="319" fontSize="10" fill="#333">1708-09 · Minas Gerais</text>

            <circle cx="290" cy="360" r="13" fill="#8e24aa" opacity="0.85" />
            <text x="310" y="355" fontSize="11" fill="#4a148c" fontWeight="bold">Inconfidência Mineira</text>
            <text x="310" y="369" fontSize="10" fill="#333">1789 · Vila Rica</text>

            {/* Pernambuco — Mascates */}
            <circle cx="390" cy="200" r="13" fill="#039be5" opacity="0.85" />
            <text x="200" y="195" fontSize="11" fill="#01579b" fontWeight="bold">Guerra dos Mascates</text>
            <text x="200" y="209" fontSize="10" fill="#333">1710-11 · Pernambuco</text>
            <line x1="375" y1="200" x2="300" y2="200" stroke="#01579b" strokeWidth="1" strokeDasharray="3,3" />

            {/* Salvador — Conjuração Baiana */}
            <circle cx="370" cy="270" r="13" fill="#00897b" opacity="0.85" />
            <text x="185" y="265" fontSize="11" fill="#004d40" fontWeight="bold">Conjuração Baiana</text>
            <text x="185" y="279" fontSize="10" fill="#333">1798 · Salvador</text>
            <line x1="355" y1="270" x2="295" y2="270" stroke="#004d40" strokeWidth="1" strokeDasharray="3,3" />

            {/* Legenda */}
            <rect x="30" y="510" width="200" height="75" fill="white" stroke="#aaa" strokeWidth="1" rx="4" />
            <text x="40" y="527" fontSize="11" fontWeight="bold" fill="#333">Legenda</text>
            <circle cx="50" cy="542" r="6" fill="#e53935" />
            <text x="62" y="546" fontSize="10" fill="#333">Nativista</text>
            <circle cx="50" cy="560" r="6" fill="#8e24aa" />
            <text x="62" y="564" fontSize="10" fill="#333">Emancipacionista</text>
            <circle cx="130" cy="542" r="6" fill="#039be5" />
            <text x="142" y="546" fontSize="10" fill="#333">Nativista</text>
            <circle cx="130" cy="560" r="6" fill="#00897b" />
            <text x="142" y="564" fontSize="10" fill="#333">Emancipacionista</text>

            <text x="40" y="582" fontSize="9" fill="#666">* Mapa esquemático para fins didáticos</text>
          </svg>
          <figcaption>Localização das principais revoltas coloniais no Brasil (séc. XVII–XVIII)</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Nativista</span>
        <h2>3. Revolta de Beckman (1684 — Maranhão)</h2>
        <p>
          A Revolta de Beckman é a <strong>primeira grande revolta colonial</strong>{" "}
          do Brasil. Ocorreu no Maranhão, em 1684, liderada pelos irmãos Manuel
          e Tomás Beckman (Beckmann). Suas causas são duplas: a insatisfação
          com o monopólio imposto pela <strong>Companhia de Comércio do
          Maranhão</strong> (1682), que controlava o fornecimento de
          escravizados africanos e a exportação dos produtos locais,
          prejudicando os produtores rurais; e o desejo de expulsar os{" "}
          <strong>jesuítas</strong>, que protegiam os indígenas do trabalho
          compulsório, fonte de mão de obra alternativa para os colonos.
        </p>
        <p>
          Os rebeldes tomaram o poder temporariamente, expulsaram os jesuítas e
          dissolveram a Companhia. A reação metropolitana veio em 1685: o
          governador Gomes Freire de Andrade sufocou o movimento, e Manuel
          Beckman foi <strong>preso e executado</strong>. Paradoxalmente, a
          Coroa extinguiu a Companhia de Comércio — uma das demandas dos
          rebeldes foi atendida mesmo com a derrota.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> A Revolta de Beckman é classificada como
          nativista porque não questionou a soberania portuguesa — apenas
          reivindicou mudanças na política econômica local.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Nativista</span>
        <h2>4. Guerra dos Emboabas (1708–1709 — Minas Gerais)</h2>
        <p>
          Com a descoberta do ouro em Minas Gerais, no final do século XVII,
          chegaram levas de imigrantes de todo o Brasil e de Portugal para
          disputar as minas. O conflito surgiu entre os{" "}
          <strong>bandeirantes paulistas</strong> — que se consideravam
          "descobridores" e legítimos donos das minas — e os{" "}
          <strong>emboabas</strong> (termo depreciativo para portugueses e
          brasileiros de outras regiões que chegaram depois).
        </p>
        <p>
          A palavra "emboaba" significava, na língua tupi, algo como "galinha
          de penas nos pés" — referência depreciativa a quem usava botas. O
          conflito foi essencialmente uma disputa por territórios auríferos.
          Os emboabas, numericamente superiores e com apoio do governador,
          venceram. Como consequência, os paulistas foram afastados das minas
          mais ricas, e a Coroa criou, em <strong>1709</strong>, a{" "}
          <strong>Capitania de São Paulo e Minas do Ouro</strong> — separada do
          Rio de Janeiro — para melhor controlar a região.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparativo das Revoltas Nativistas do Século XVIII</caption>
            <thead>
              <tr>
                <th>Revolta</th>
                <th>Ano</th>
                <th>Local</th>
                <th>Causa Principal</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revolta de Beckman</td>
                <td>1684</td>
                <td>Maranhão</td>
                <td>Monopólio da Companhia de Comércio + jesuítas</td>
                <td>Extinção da Companhia; Beckman executado</td>
              </tr>
              <tr>
                <td>Guerra dos Emboabas</td>
                <td>1708–09</td>
                <td>Minas Gerais</td>
                <td>Disputa pelo ouro entre paulistas e imigrantes</td>
                <td>Criação da Capitania de SP e Minas (1709)</td>
              </tr>
              <tr>
                <td>Guerra dos Mascates</td>
                <td>1710–11</td>
                <td>Pernambuco</td>
                <td>Nobreza rural vs. comerciantes portugueses</td>
                <td>Elevação de Recife a vila independente (1711)</td>
              </tr>
              <tr>
                <td>Revolta de Vila Rica</td>
                <td>1720</td>
                <td>Minas Gerais</td>
                <td>Criação das Casas de Fundição</td>
                <td>Filipe dos Santos executado; Casas suspensas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Nativista</span>
        <h2>5. Guerra dos Mascates (1710–1711 — Pernambuco)</h2>
        <p>
          Em Pernambuco, o conflito assumiu um caráter de{" "}
          <strong>luta de classes e regional</strong>. De um lado estavam os{" "}
          <strong>nobres rurais de Olinda</strong> — senhores de engenho
          açucareiro, endividados com os comerciantes após a crise do açúcar.
          Do outro, os <strong>mascates de Recife</strong> — comerciantes
          portugueses e luso-brasileiros, credores dos nobres, que se
          enriqueciam enquanto os senhores de engenho declinavam.
        </p>
        <p>
          O nome "mascates" era pejorativo: os nobres olindenses chamavam assim
          os comerciantes de varejo, vistos como inferiores socialmente. O
          estopim foi a elevação de Recife a vila independente de Olinda (1709),
          concedida pela Coroa — o que significava que Recife teria sua própria
          câmara municipal e deixaria de ser subordinada à tradicional Olinda.
          Os nobres de Olinda se rebelaram, chegando a destruir o pelourinho de
          Recife. A Coroa suprimiu a revolta e confirmou a{" "}
          <strong>elevação de Recife a vila (1711)</strong>.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Nativista</span>
        <h2>6. Revolta de Vila Rica / Filipe dos Santos (1720 — Minas Gerais)</h2>
        <p>
          Em 1720, a Coroa portuguesa anunciou a criação das{" "}
          <strong>Casas de Fundição</strong> — estabelecimentos onde todo o ouro
          seria obrigatoriamente pesado, fundido em barras e taxado, eliminando
          o contrabando mas tornando o controle fiscal muito mais rígido e
          eliminando a possibilidade de sonegação que os mineiros praticavam
          corriqueiramente.
        </p>
        <p>
          O movimento foi liderado por membros da elite local, como o Conde de
          Assumar e o padre Manuel Rebelo. <strong>Filipe dos Santos</strong>,
          um modesto ferreiro mulato, participou como mensageiro e organizador
          de base. Com a delação do movimento antes que ele eclodisse, os
          líderes principais fugiram ou foram poupados pela Coroa. Filipe dos
          Santos foi preso, julgado sumariamente e{" "}
          <strong>enforcado e esquartejado</strong> em 1720 — tornando-se um
          bode expiatório da revolta. A Coroa acabou por suspender as Casas de
          Fundição, concedendo, na prática, uma das principais demandas dos
          rebeldes.
        </p>
        <div className="lesson-highlight">
          <strong>Conexão histórica:</strong> A Revolta de Vila Rica é
          frequentemente chamada de "precursora" ou "prefiguração" da
          Inconfidência Mineira de 1789, pois envolveu os mesmos grupos sociais
          e as mesmas tensões fiscais de Minas Gerais.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Emancipacionista</span>
        <h2>7. Inconfidência Mineira (1789)</h2>
        <p>
          A Inconfidência Mineira é o mais célebre movimento emancipacionista
          do Brasil colonial. Ocorreu em 1789, em Vila Rica (atual Ouro Preto,
          Minas Gerais), num contexto de profunda crise econômica causada pela
          decadência do ciclo do ouro e pela pressão fiscal portuguesa.
        </p>
        <h3>Contexto e causas</h3>
        <p>
          A extração de ouro em Minas Gerais atingiu seu pico por volta de 1750
          e entrou em declínio progressivo. Portugal exigia o pagamento do{" "}
          <strong>quinto</strong> — um tributo de 20% sobre todo o ouro
          extraído. Com a queda da produção, a arrecadação diminuiu, e a Coroa
          decretou a <strong>derrama</strong>: a cobrança retroativa do quinto
          que os mineradores deviam, até atingir a cota anual de 100 arrobas.
          A derrama iminente era o estopim do movimento.
        </p>
        <p>
          Além da pressão fiscal, a elite intelectual e econômica de Minas
          Gerais havia tomado contato com as ideias iluministas (Voltaire,
          Rousseau) e com o exemplo da Independência americana (1776). Muitos
          líderes haviam estudado em Coimbra e lido obras proibidas.
        </p>
        <h3>Os inconfidentes</h3>
        <p>
          O movimento reuniu uma elite culta e econômica: padres, poetas,
          militares, proprietários e profissionais liberais. Os principais
          nomes foram:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais Líderes da Inconfidência Mineira</caption>
            <thead>
              <tr>
                <th>Personagem</th>
                <th>Profissão/Título</th>
                <th>Papel no Movimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joaquim José da Silva Xavier (Tiradentes)</td>
                <td>Alferes, dentista</td>
                <td>Agitador popular; único executado; construído como mártir</td>
              </tr>
              <tr>
                <td>Tomás Antônio Gonzaga</td>
                <td>Poeta, ouvidor</td>
                <td>Coordenação política; autor de "Marília de Dirceu"; degredado para África</td>
              </tr>
              <tr>
                <td>Cláudio Manuel da Costa</td>
                <td>Advogado, poeta</td>
                <td>Um dos articuladores; morreu na prisão (provável suicídio)</td>
              </tr>
              <tr>
                <td>Inácio José de Alvarenga Peixoto</td>
                <td>Proprietário, poeta</td>
                <td>Articulador; degredado para África</td>
              </tr>
              <tr>
                <td>Padre Carlos Correia de Toledo</td>
                <td>Clérigo</td>
                <td>Articulador religioso; preso e degredado</td>
              </tr>
              <tr>
                <td>Coronel Francisco de Paula Freire de Andrade</td>
                <td>Militar</td>
                <td>Deveria liderar as forças armadas do movimento</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>A delação e o desfecho</h3>
        <p>
          O movimento foi denunciado por <strong>Joaquim Silvério dos Reis</strong>,
          um dos inconfidentes, que delatou os companheiros à Coroa em troca do
          perdão de suas dívidas. Antes que a derrama fosse decretada, as
          prisões começaram. Tiradentes foi o único condenado à morte:{" "}
          <strong>enforcado e esquartejado em 21 de abril de 1792</strong> (não
          1789, data da conspiração). Os demais foram degredados para a África
          ou perdoados.
        </p>
        <h3>A construção do herói</h3>
        <p>
          Tiradentes só se tornou <strong>herói nacional</strong> após a
          Proclamação da República (1889). Os republicanos precisavam de um
          mártir que tivesse lutado contra a monarquia, e Tiradentes — o único
          executado, de origem humilde (mulato, pobre), que teria assumido toda
          a responsabilidade — encaixava-se perfeitamente. O{" "}
          <strong>21 de abril</strong> tornou-se feriado nacional em sua honra.
          Antes disso, durante o Império, a figura central era o poeta Gonzaga.
        </p>
      </section>

      {/* ── SEÇÃO 8 — SVG DIAGRAMA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama Comparativo</span>
        <h2>8. Nativistas vs. Emancipacionistas: Comparação Visual</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 340"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Diagrama comparando revoltas nativistas e emancipacionistas"
          >
            <rect x="0" y="0" width="560" height="340" fill="#f5f5f5" rx="8" />

            {/* Coluna Nativistas */}
            <rect x="20" y="20" width="240" height="300" fill="#e3f2fd" rx="6" stroke="#1565c0" strokeWidth="1.5" />
            <rect x="20" y="20" width="240" height="40" fill="#1565c0" rx="6" />
            <text x="140" y="45" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">Nativistas</text>

            <text x="35" y="85" fontSize="11" fill="#333" fontWeight="bold">Motivação:</text>
            <text x="35" y="100" fontSize="10" fill="#555">Impostos, monopólios, disputas</text>
            <text x="35" y="114" fontSize="10" fill="#555">regionais e de poder local</text>

            <text x="35" y="140" fontSize="11" fill="#333" fontWeight="bold">Líderes:</text>
            <text x="35" y="155" fontSize="10" fill="#555">Produtores rurais, comerciantes,</text>
            <text x="35" y="169" fontSize="10" fill="#555">mineradores, militares locais</text>

            <text x="35" y="195" fontSize="11" fill="#333" fontWeight="bold">Inspiração:</text>
            <text x="35" y="210" fontSize="10" fill="#555">Interesses econômicos locais;</text>
            <text x="35" y="224" fontSize="10" fill="#555">sem base filosófica sistematizada</text>

            <text x="35" y="250" fontSize="11" fill="#333" fontWeight="bold">Resultado:</text>
            <text x="35" y="265" fontSize="10" fill="#555">Derrota militar; algumas</text>
            <text x="35" y="279" fontSize="10" fill="#555">reivindicações atendidas pela Coroa</text>

            <text x="35" y="305" fontSize="10" fill="#1565c0" fontStyle="italic">Ex.: Beckman, Mascates, Emboabas</text>

            {/* Coluna Emancipacionistas */}
            <rect x="300" y="20" width="240" height="300" fill="#fce4ec" rx="6" stroke="#c62828" strokeWidth="1.5" />
            <rect x="300" y="20" width="240" height="40" fill="#c62828" rx="6" />
            <text x="420" y="45" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">Emancipacionistas</text>

            <text x="315" y="85" fontSize="11" fill="#333" fontWeight="bold">Motivação:</text>
            <text x="315" y="100" fontSize="10" fill="#555">Independência; república;</text>
            <text x="315" y="114" fontSize="10" fill="#555">fim do domínio colonial português</text>

            <text x="315" y="140" fontSize="11" fill="#333" fontWeight="bold">Líderes:</text>
            <text x="315" y="155" fontSize="10" fill="#555">Elite intelectual (poetas, padres,</text>
            <text x="315" y="169" fontSize="10" fill="#555">militares); camadas populares (1798)</text>

            <text x="315" y="195" fontSize="11" fill="#333" fontWeight="bold">Inspiração:</text>
            <text x="315" y="210" fontSize="10" fill="#555">Iluminismo europeu; Independência</text>
            <text x="315" y="224" fontSize="10" fill="#555">dos EUA; Rev. Haitiana (1798)</text>

            <text x="315" y="250" fontSize="11" fill="#333" fontWeight="bold">Resultado:</text>
            <text x="315" y="265" fontSize="10" fill="#555">Derrota; execuções; degredo;</text>
            <text x="315" y="279" fontSize="10" fill="#555">ideias persistem até 1822</text>

            <text x="315" y="305" fontSize="10" fill="#c62828" fontStyle="italic">Ex.: Inconfidência, Conjuração Baiana</text>
          </svg>
          <figcaption>Diagrama comparativo entre revoltas nativistas e emancipacionistas no Brasil colonial</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolta Emancipacionista</span>
        <h2>9. Conjuração Baiana / Revolta dos Alfaiates (1798 — Salvador)</h2>
        <p>
          A Conjuração Baiana de 1798 — também chamada de{" "}
          <strong>Revolta dos Alfaiates</strong> — é radicalmente diferente da
          Inconfidência Mineira em termos de caráter social e racial. Enquanto
          a conspiração de 1789 foi liderada pela elite branca e letrada de
          Minas Gerais, o movimento de Salvador envolveu artesãos, soldados,
          mulatos, libertos e escravizados.
        </p>
        <h3>Causas e inspirações</h3>
        <p>
          Em 1798, Salvador era uma cidade de enorme desigualdade social e
          racial. A maioria da população era negra ou mestiça, vivendo em
          condições precárias, enquanto uma minoria branca detinha o poder
          econômico e político. Os conspiradores foram inspirados diretamente
          por duas revoluções:
        </p>
        <ul>
          <li>
            <strong>Revolução Francesa (1789)</strong>: os panfletos colados
            nas paredes de Salvador repetiam os ideais de "Liberdade, Igualdade
            e Fraternidade", e pediam uma república independente.
          </li>
          <li>
            <strong>Revolução Haitiana (1791)</strong>: o levante dos
            escravizados de Saint-Domingue, que resultaria na independência do
            Haiti em 1804, era um modelo poderoso e assustador para a elite
            colonial brasileira.
          </li>
        </ul>
        <h3>O caráter popular e racial</h3>
        <p>
          Em agosto de 1798, panfletos manuscritos foram pregados nas paredes
          das igrejas e edifícios públicos de Salvador, pedindo igualdade
          racial, fim da escravidão, salários justos para os soldados e
          instauração de uma república. Os líderes eram majoritariamente{" "}
          <strong>mulatos pobres</strong>: alfaiates (costureiros), soldados,
          artesãos.
        </p>
        <h3>A punição e o recorte de classe</h3>
        <p>
          A repressão revelou o caráter racista da justiça colonial:{" "}
          <strong>quatro líderes foram executados</strong>, todos negros ou
          mulatos e pobres: <strong>Luís Gonzaga das Virgens</strong> (alfaiate,
          principal executado), <strong>Lucas Dantas</strong>,{" "}
          <strong>João de Deus do Nascimento</strong> e Manoel Faustino dos
          Santos Lira. Os conspiradores de elite branca e mais ricos que
          haveram algum envolvimento foram poupados ou tiveram penas muito
          menores.
        </p>
        <div className="lesson-highlight">
          <strong>ENEM — ponto crítico:</strong> A Conjuração Baiana é a única
          revolta colonial que pede explicitamente o <em>fim da escravidão</em>.
          Seu caráter popular, racial e influenciado pela Revolução Francesa e
          Haitiana a distingue radicalmente da Inconfidência Mineira, que era
          liderada por escravocratas que não tinham intenção de libertar os
          escravizados.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação Final</span>
        <h2>10. Inconfidência x Conjuração: Dois Projetos de Liberdade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Inconfidência Mineira (1789) vs. Conjuração Baiana (1798)</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Inconfidência Mineira</th>
                <th>Conjuração Baiana</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local</td>
                <td>Vila Rica (Minas Gerais)</td>
                <td>Salvador (Bahia)</td>
              </tr>
              <tr>
                <td>Líderes</td>
                <td>Elite branca: poetas, padres, militares, proprietários</td>
                <td>Artesãos, soldados, mulatos, libertos, escravizados</td>
              </tr>
              <tr>
                <td>Inspiração</td>
                <td>Iluminismo europeu, Independência dos EUA</td>
                <td>Revolução Francesa, Revolução Haitiana</td>
              </tr>
              <tr>
                <td>Escravidão</td>
                <td>Não questionada; líderes eram escravocratas</td>
                <td>Abolição exigida nos panfletos</td>
              </tr>
              <tr>
                <td>Projeto político</td>
                <td>República das Minas; bancos, universidade local</td>
                <td>República igualitária com igualdade racial</td>
              </tr>
              <tr>
                <td>Desfecho</td>
                <td>Tiradentes executado; demais degredados</td>
                <td>4 mulatos pobres executados; brancos poupados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>11. O Legado das Revoltas para a Independência</h2>
        <p>
          As revoltas coloniais não causaram diretamente a Independência do
          Brasil (1822), que se deu por um processo muito mais complexo
          envolvendo a vinda da família real portuguesa e as pressões
          internacionais. No entanto, foram fundamentais como{" "}
          <strong>precedentes ideológicos</strong>: demonstraram que existia
          uma identidade local, interesses específicos da colônia e, nas
          revoltas emancipacionistas, um projeto político alternativo ao
          domínio português.
        </p>
        <p>
          A <strong>construção da memória</strong> dessas revoltas também é
          relevante: Tiradentes foi transformado em herói nacional pela
          República; a Conjuração Baiana foi frequentemente esquecida pelos
          livros didáticos tradicionais e só recentemente ganhou o destaque
          que merece, especialmente por seu caráter antirracista e popular.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>12. Exercícios</h2>

        <Exercise
          level="Básico"
          title="Classificação das Revoltas"
          statement={
            <p>
              A Guerra dos Emboabas (1708–1709) é classificada como uma revolta
              nativista porque:
            </p>
          }
          options={[
            { letter: "A", text: "Buscava a independência de Minas Gerais inspirada no Iluminismo." },
            { letter: "B", text: "Reivindicava direitos locais (controle das minas) sem questionar a soberania portuguesa.", correct: true },
            { letter: "C", text: "Pediu o fim da escravidão e a igualdade racial entre os colonos." },
            { letter: "D", text: "Foi influenciada diretamente pela Revolução Francesa de 1789." },
            { letter: "E", text: "Propunha a criação de uma república independente em São Paulo." },
          ]}
          resolution={
            <p>
              As revoltas nativistas não questionam a soberania portuguesa; elas
              reivindicam direitos e interesses locais. A Guerra dos Emboabas foi
              uma disputa entre grupos de colonos pelo controle das minas de ouro,
              dentro do Império Português — portanto, nativista. As alternativas C,
              D e E descrevem características das revoltas emancipacionistas.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="A Delação da Inconfidência Mineira"
          statement={
            <p>
              A Inconfidência Mineira (1789) foi descoberta pela Coroa portuguesa
              antes de eclodir. Quem foi o responsável pela delação, e qual foi sua
              motivação?
            </p>
          }
          options={[
            { letter: "A", text: "Filipe dos Santos, que delatou para salvar sua própria vida após ser preso." },
            { letter: "B", text: "Tomás Antônio Gonzaga, em troca de liberdade para escrever e publicar sua poesia." },
            { letter: "C", text: "Joaquim Silvério dos Reis, em troca do perdão de suas dívidas com a Coroa.", correct: true },
            { letter: "D", text: "Padre Carlos Correia de Toledo, pressionado pelo bispo local." },
            { letter: "E", text: "O governador de Minas Gerais, que infiltrou um espião no grupo." },
          ]}
          resolution={
            <p>
              Joaquim Silvério dos Reis era um dos inconfidentes e estava
              profundamente endividado. Para ter suas dívidas perdoadas pela
              Coroa, denunciou o movimento em 1789. Filipe dos Santos (alternativa
              A) foi um dos executados — um ferreiro mulato que serviu como
              mensageiro na Revolta de Vila Rica de 1720, não na Inconfidência.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="A Construção do Herói Tiradentes"
          statement={
            <p>
              Historiadores apontam que a figura de Tiradentes como "herói
              nacional" é uma construção posterior ao movimento de 1789. Qual
              grupo político promoveu deliberadamente essa construção e com qual
              objetivo?
            </p>
          }
          options={[
            { letter: "A", text: "A elite imperial do século XIX, para justificar a Independência de 1822 liderada por D. Pedro I." },
            { letter: "B", text: "Os republicanos brasileiros, após a Proclamação da República (1889), que precisavam de um mártir antigo contrário à monarquia.", correct: true },
            { letter: "C", text: "Os poetas românticos, que transformaram Tiradentes em símbolo da luta pela liberdade de imprensa." },
            { letter: "D", text: "A Igreja Católica, que defendia Tiradentes como mártir religioso em oposição à Coroa laicizante." },
            { letter: "E", text: "Os abolicionistas do século XIX, que viam em Tiradentes um precursor da luta contra a escravidão." },
          ]}
          resolution={
            <p>
              A República proclamada em 1889 precisava de legitimidade histórica e
              de um herói popular que representasse a luta contra a monarquia.
              Tiradentes encaixou-se perfeitamente: era de origem humilde (mulato,
              pobre), único executado (assumiu a culpa), e havia conspira-do contra
              o domínio monárquico português. O 21 de abril virou feriado nacional
              em sua homenagem. Durante o Império, a figura central da Inconfidência
              era o poeta Gonzaga, não Tiradentes.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Conjuração Baiana e Desigualdade Social"
          statement={
            <p>
              (ENEM adaptado) Em 1798, panfletos apareceram nas paredes de
              Salvador pedindo "igualdade de condições", "liberdade do comércio" e
              "fim do cativeiro". Quatro líderes do movimento foram executados;
              todos eram mulatos e pobres. Outros conspiradores, brancos e mais
              ricos, receberam penas menores ou foram poupados. Esse episódio
              ilustra, na sociedade colonial brasileira:
            </p>
          }
          options={[
            { letter: "A", text: "A aplicação igualitária da lei colonial, que punia qualquer cidadão pelo crime de sedição." },
            { letter: "B", text: "O caráter racista e classista da justiça colonial, que protegia os poderosos e punia os marginalizados.", correct: true },
            { letter: "C", text: "A eficiência do sistema jurídico colonial, que identificava e punia apenas os líderes efetivos." },
            { letter: "D", text: "A preferência da Coroa por manter a escravidão, punindo qualquer tentativa de abolição independentemente do autor." },
            { letter: "E", text: "A ausência de hierarquia social na Bahia colonial, onde negros e brancos eram punidos da mesma forma." },
          ]}
          resolution={
            <p>
              A Conjuração Baiana de 1798 expõe com clareza a desigualdade
              estrutural da sociedade colonial. Os quatro executados eram todos
              negros ou mulatos e pobres — Luís Gonzaga das Virgens, Lucas Dantas,
              João de Deus do Nascimento e Manoel Faustino. Membros da elite
              branca com algum envolvimento foram poupados ou receberam penas
              brandas. Isso demonstra como a justiça colonial operava de forma
              racista e classista.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Revoltas Nativistas e a Política Colonial"
          statement={
            <p>
              (Vestibular adaptado) A Revolta de Beckman (1684, Maranhão) e a
              Guerra dos Mascates (1710–11, Pernambuco) são classificadas como
              revoltas nativistas. Uma característica comum a ambas é:
            </p>
          }
          options={[
            { letter: "A", text: "A busca pela independência política em relação a Portugal, inspirada no modelo republicano americano." },
            { letter: "B", text: "A liderança de escravizados e libertos que pediam o fim do trabalho compulsório." },
            { letter: "C", text: "O questionamento das estruturas econômicas locais (monopólio/dívidas) sem ruptura com o domínio português.", correct: true },
            { letter: "D", text: "A aliança entre diferentes grupos sociais — senhores de engenho, escravizados e comerciantes — contra a Coroa." },
            { letter: "E", text: "A influência direta da Revolução Francesa e das ideias de igualdade e fraternidade." },
          ]}
          resolution={
            <p>
              Ambas as revoltas são nativistas: reivindicam mudanças nas relações
              econômicas locais (Beckman: extinção do monopólio comercial; Mascates:
              poder político entre Olinda e Recife) sem questionar a soberania
              portuguesa. Nenhuma delas buscou independência ou foi influenciada
              pelo Iluminismo ou pela Revolução Francesa — características exclusivas
              das revoltas emancipacionistas.
            </p>
          }
        />
      </section>
    </article>
  );
}
