"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 34</span>

          <h1>Anatomia e Organografia Vegetal: Raiz, Caule, Folha, Flor, Fruto e Semente</h1>

          <p>
            As angiospermas — o grupo dominante das plantas com flor — possuem
            um <strong>corpo organizado em órgãos especializados</strong> cujas
            formas, tecidos e funções são cobrados extensivamente no ENEM e nos
            principais vestibulares. Neste capítulo você vai dominar a anatomia
            e as adaptações dos órgãos vegetativos (raiz, caule, folha) e
            reprodutivos (flor, fruto, semente), compreender o significado
            biológico de cada estrutura e distinguir as modificações adaptativas
            mais recorrentes em provas — desde o pneumatóforo do mangue até o
            pseudofruto do cajueiro.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Órgãos Vegetativos e Reprodutivos das Angiospermas</h2>

        <p>
          O corpo de uma angiosperma divide-se em duas grandes categorias de
          órgãos. Os <strong>órgãos vegetativos</strong> — raiz, caule e folha
          — são responsáveis pela nutrição, sustentação e transporte de
          substâncias. Os <strong>órgãos reprodutivos</strong> — flor, fruto e
          semente — garantem a perpetuação da espécie por meio da reprodução
          sexuada e da dispersão. Essa separação funcional é fundamental para
          compreender por que uma modificação no órgão vegetativo (ex.: raiz
          tuberosa acumulando amido) tem consequências diretas sobre a
          sobrevivência de todo o indivíduo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Raiz</h3>
            <p>Fixação, absorção de água e sais minerais, eventualmente armazenamento.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Caule</h3>
            <p>Sustentação, condução de seivas, armazenamento (modificações).</p>
          </div>

          <div className="lesson-card">
            <span>🍃</span>
            <h3>Folha</h3>
            <p>Fotossíntese, transpiração e trocas gasosas com o ambiente.</p>
          </div>

          <div className="lesson-card">
            <span>🌸</span>
            <h3>Flor</h3>
            <p>Polinização e formação dos gametas para a reprodução sexuada.</p>
          </div>

          <div className="lesson-card">
            <span>🍊</span>
            <h3>Fruto</h3>
            <p>Proteção da semente e auxílio na dispersão (zoocoria, anemocoria etc.).</p>
          </div>

          <div className="lesson-card">
            <span>🌰</span>
            <h3>Semente</h3>
            <p>Embrião protegido pelo tegumento, com reservas para a germinação.</p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Raiz</span>

        <h2>2. A Raiz — Zonas, Tipos e Adaptações</h2>

        <p>
          A raiz é, em geral, um órgão subterrâneo <strong>desprovido de
          clorofila</strong>, sem nós e entrenós, e de crescimento por geotropismo
          positivo (em direção ao solo). Sua função principal é{" "}
          <strong>fixar a planta</strong> ao substrato e{" "}
          <strong>absorver água e sais minerais</strong> dissolvidos, que serão
          conduzidos ao caule pelo xilema (seiva bruta). Além disso, muitas raízes
          acumulam substâncias de reserva — como amido na mandioca ou inulina na
          dália.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 480 340" width="480" height="340" aria-label="Zonas de uma raiz rotuladas">
            {/* caule acima */}
            <rect x={210} y={10} width={60} height={30} rx={6} fill="#84cc16" opacity={0.3} stroke="#84cc16" strokeWidth={1.5} />
            <text x={240} y={30} textAnchor="middle" fontSize={12} fontWeight={700} fill="#365314">Caule</text>

            {/* corpo da raiz */}
            <rect x={205} y={40} width={70} height={260} rx={8} fill="#d97706" opacity={0.12} stroke="#d97706" strokeWidth={1.5} />

            {/* zona suberosa */}
            <rect x={205} y={40} width={70} height={52} rx={0} fill="#fbbf24" opacity={0.25} />
            <text x={300} y={60} fontSize={12} fontWeight={700} fill="#92400e">Zona suberosa</text>
            <text x={300} y={74} fontSize={10} fill="#78350f">(raízes secundárias)</text>
            <line x1={275} y1={66} x2={298} y2={66} stroke="#92400e" strokeWidth={1} />

            {/* zona pilífera */}
            <rect x={205} y={92} width={70} height={70} rx={0} fill="#f59e0b" opacity={0.25} />
            <text x={300} y={115} fontSize={12} fontWeight={700} fill="#92400e">Zona pilífera</text>
            <text x={300} y={129} fontSize={10} fill="#78350f">(pelos absorventes)</text>
            <line x1={275} y1={127} x2={298} y2={127} stroke="#92400e" strokeWidth={1} />

            {/* pelos absorventes desenhados */}
            {[100, 112, 124, 134, 146, 158].map((y) => (
              <line key={y} x1={205} y1={y} x2={190} y2={y - 4} stroke="#d97706" strokeWidth={1.5} />
            ))}
            {[100, 112, 124, 134, 146, 158].map((y) => (
              <line key={y + 200} x1={275} y1={y} x2={290} y2={y - 4} stroke="#d97706" strokeWidth={1.5} />
            ))}

            {/* zona de distensão */}
            <rect x={205} y={162} width={70} height={52} rx={0} fill="#fde68a" opacity={0.4} />
            <text x={300} y={182} fontSize={12} fontWeight={700} fill="#92400e">Zona de distensão</text>
            <text x={300} y={196} fontSize={10} fill="#78350f">(alongamento celular)</text>
            <line x1={275} y1={188} x2={298} y2={188} stroke="#92400e" strokeWidth={1} />

            {/* zona meristemática */}
            <rect x={205} y={214} width={70} height={44} rx={0} fill="#f97316" opacity={0.18} />
            <text x={300} y={234} fontSize={12} fontWeight={700} fill="#92400e">Zona meristemática</text>
            <text x={300} y={248} fontSize={10} fill="#78350f">(divisão celular)</text>
            <line x1={275} y1={236} x2={298} y2={236} stroke="#92400e" strokeWidth={1} />

            {/* coifa */}
            <ellipse cx={240} cy={296} rx={35} ry={22} fill="#ea580c" opacity={0.3} stroke="#ea580c" strokeWidth={1.5} />
            <text x={300} y={297} fontSize={12} fontWeight={700} fill="#7c2d12">Coifa</text>
            <text x={300} y={311} fontSize={10} fill="#7c2d12">(capuz protetor)</text>
            <line x1={275} y1={296} x2={298} y2={296} stroke="#7c2d12" strokeWidth={1} />

            {/* seta crescimento */}
            <text x={155} y={230} fontSize={10} fontStyle="italic" fill="#6b7280" textAnchor="middle">crescimento ↓</text>
          </svg>
          <figcaption>Zonas de uma raiz, da coifa (ápice) à zona suberosa (base).</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>As cinco zonas da raiz — resumo funcional</h3>
          <p>
            Da ponta para a base: a <strong>coifa</strong> é o capuz de células
            mortas que protege o meristema apical do atrito com o solo e secreta
            mucilagem lubrificante. Logo acima está a{" "}
            <strong>zona meristemática</strong>, onde células se dividem
            ativamente gerando novos tecidos. A{" "}
            <strong>zona de distensão (alongamento)</strong> é onde as células
            recém-formadas crescem em comprimento, empurrando a coifa para baixo.
            A <strong>zona pilífera</strong> é a mais importante para a nutrição:
            os pelos absorventes são projeções unicelulares da epiderme que
            ampliam enormemente a superfície de absorção. Por fim, a{" "}
            <strong>zona suberosa</strong> é a região mais antiga, com paredes
            suberizadas, onde brotam raízes laterais secundárias.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de raiz / Modificação</th>
                <th>Característica</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Axial (pivotante)</td>
                <td>Raiz principal grossa + raízes secundárias</td>
                <td>Feijão, cenoura, dicotiledôneas em geral</td>
              </tr>
              <tr>
                <td>Fasciculada (fibrosa)</td>
                <td>Várias raízes finas sem eixo principal</td>
                <td>Milho, trigo, arroz (monocotiledôneas)</td>
              </tr>
              <tr>
                <td>Adventícia</td>
                <td>Nasce do caule ou das folhas (não da radícula)</td>
                <td>Milho (escoras), hera (grudadeiras)</td>
              </tr>
              <tr>
                <td>Tuberosa</td>
                <td>Acumula amido; raiz engrossada</td>
                <td>Mandioca, beterraba, batata-doce, cenoura</td>
              </tr>
              <tr>
                <td>Sugadora (haustório)</td>
                <td>Penetra no hospedeiro para extrair nutrientes (parasitismo)</td>
                <td>Cipó-chumbo (Cuscuta), erva-de-passarinho</td>
              </tr>
              <tr>
                <td>Respiratória (pneumatóforo)</td>
                <td>Cresce verticalmente para fora do solo encharcado; lenticelas trocam gases</td>
                <td>Mangue (Avicennia, Laguncularia)</td>
              </tr>
              <tr>
                <td>Tabular (sapopema)</td>
                <td>Contraffortes laminares que sustentam troncos em solos rasos</td>
                <td>Figueiras, sumaúma da Amazônia</td>
              </tr>
              <tr>
                <td>Escora (esteio)</td>
                <td>Raízes adventícias que partem do caule e tocam o solo</td>
                <td>Milho, algumas palmeiras, rizóforas do mangue</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Atenção (pegadinha ENEM):</strong> a{" "}
            <strong>batata-doce</strong> é uma <em>raiz tuberosa</em>,
            enquanto a <strong>batata-inglesa</strong> é um{" "}
            <em>caule subterrâneo (tubérculo)</em>. A diferença é anatômica:
            na batata-inglesa existem gemas ("olhos"), estruturas exclusivas
            de caules; nas raízes não há gemas.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Caule</span>

        <h2>3. O Caule — Tipos Aéreos, Subterrâneos e Modificações</h2>

        <p>
          O caule é o <strong>eixo principal da planta</strong>, responsável
          por sustentar folhas, flores e frutos e por conduzir a{" "}
          <strong>seiva bruta</strong> (água + sais, pelo xilema, de baixo para
          cima) e a <strong>seiva elaborada</strong> (produtos da fotossíntese,
          pelo floema, bidirecionalmente). Reconhece-se o caule pela presença
          de <strong>nós</strong> (regiões onde as folhas se inserem) e{" "}
          <strong>entrenós</strong> (regiões entre dois nós consecutivos) — o
          que o distingue da raiz.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌳</span>
            <h3>Tronco</h3>
            <p>Lenhoso, cilíndrico e ramificado (árvores como ipê, carvalho).</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Haste</h3>
            <p>Pouco lenhoso, herbáceo, não ramificado (tomateiro, girassol).</p>
          </div>

          <div className="lesson-card">
            <span>🎋</span>
            <h3>Colmo</h3>
            <p>Cilíndrico com nós muito evidentes; pode ser oco (bambu) ou cheio (cana).</p>
          </div>

          <div className="lesson-card">
            <span>🌴</span>
            <h3>Estipe</h3>
            <p>Cilíndrico, sem ramificações laterais, coroa de folhas no ápice (palmeiras).</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de caule modificado</th>
                <th>Posição</th>
                <th>Característica diagnóstica</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rizoma</td>
                <td>Subterrâneo, horizontal</td>
                <td>Nós com gemas; folhas reduzidas a escamas</td>
                <td>Bananeira, gengibre, íris, feto</td>
              </tr>
              <tr>
                <td>Tubérculo caulinar</td>
                <td>Subterrâneo</td>
                <td>Muito intumescido de amido; gemas visíveis ("olhos")</td>
                <td>Batata-inglesa, cará</td>
              </tr>
              <tr>
                <td>Bulbo</td>
                <td>Subterrâneo</td>
                <td>Caule curto (prato) + folhas transformadas em escamas carnosas</td>
                <td>Cebola, alho, tulipa</td>
              </tr>
              <tr>
                <td>Cladódio (filóclado)</td>
                <td>Aéreo</td>
                <td>Caule achatado fotossintetizante; folhas reduzidas a espinhos</td>
                <td>Cacto (Opuntia), espargo</td>
              </tr>
              <tr>
                <td>Estolão</td>
                <td>Aéreo, rasteiro</td>
                <td>Emite raízes e brotos nos nós, gerando novas plantas</td>
                <td>Morangueiro, grama, violeta-africana</td>
              </tr>
              <tr>
                <td>Gavinha caulinar</td>
                <td>Aéreo</td>
                <td>Caule espiralado que se enrola em suportes</td>
                <td>Chuchu, maracujá, videira</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Como distinguir caule subterrâneo de raiz?</h3>
          <p>
            O critério decisivo é a presença de <strong>gemas (olhos)</strong>
            e de escamas foliares nos caules subterrâneos. Uma{" "}
            <strong>batata-inglesa</strong> apresenta gemas de onde brotam
            novas hastes; uma <strong>batata-doce</strong> (raiz tuberosa) não
            apresenta essas estruturas. Da mesma forma, um{" "}
            <strong>bulbo de cebola</strong>, quando cortado ao meio, revela o
            caule curto (disco basal) do qual partem raízes e acima do qual se
            dispõem as escamas — estruturas de origem foliar.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Folha</span>

        <h2>4. A Folha — Morfologia, Anatomia Interna e Modificações</h2>

        <p>
          A folha é o órgão mais especializado em{" "}
          <strong>fotossíntese</strong>. Sua morfologia laminar maximiza a
          captação de luz solar, enquanto sua anatomia interna cria
          compartimentos distintos para a fixação de CO₂ e para as trocas
          gasosas com a atmosfera. Uma folha{" "}
          <strong>completa</strong> apresenta três partes: o{" "}
          <strong>limbo</strong> (lâmina expandida), o{" "}
          <strong>pecíolo</strong> (haste que une o limbo ao caule) e a{" "}
          <strong>bainha</strong> (base alargada que abraça o caule,
          especialmente evidente em gramíneas). Folhas que apresentam todas
          as três partes são chamadas de <em>completas</em>; as que faltam
          ao pecíolo são denominadas <em>sésseis</em>.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 280 300" width="280" height="300" aria-label="Partes de uma folha completa">
              {/* limbo */}
              <ellipse cx={140} cy={110} rx={85} ry={80} fill="#86efac" opacity={0.6} stroke="#16a34a" strokeWidth={2} />
              <text x={140} y={100} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Limbo</text>
              {/* nervura central */}
              <line x1={140} y1={40} x2={140} y2={190} stroke="#15803d" strokeWidth={2.5} />
              {/* nervuras secundárias */}
              {[-1, 1].map((s) => (
                [60, 80, 100, 120, 140].map((y) => (
                  <line key={`${s}-${y}`} x1={140} y1={y} x2={140 + s * 60} y2={y + 18} stroke="#15803d" strokeWidth={1.2} opacity={0.7} />
                ))
              ))}
              {/* pecíolo */}
              <rect x={133} y={188} width={14} height={55} rx={4} fill="#65a30d" stroke="#4d7c0f" strokeWidth={1.5} />
              <text x={175} y={215} fontSize={12} fontWeight={700} fill="#3f6212">Pecíolo</text>
              <line x1={147} y1={215} x2={173} y2={215} stroke="#3f6212" strokeWidth={1} />
              {/* bainha */}
              <path d="M 115 243 Q 110 270 120 290 L 160 290 Q 170 270 165 243 Z" fill="#a3e635" opacity={0.5} stroke="#65a30d" strokeWidth={1.5} />
              <text x={175} y={272} fontSize={12} fontWeight={700} fill="#3f6212">Bainha</text>
              <line x1={162} y1={272} x2={173} y2={272} stroke="#3f6212" strokeWidth={1} />
              {/* ápice */}
              <text x={140} y={30} textAnchor="middle" fontSize={11} fill="#166534">ápice</text>
              <line x1={140} y1={33} x2={140} y2={40} stroke="#166534" strokeWidth={1} />
            </svg>
            <figcaption>Folha completa: limbo, pecíolo e bainha.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 280 300" width="280" height="300" aria-label="Corte transversal do limbo foliar">
              <rect x={20} y={20} width={240} height={260} rx={14} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
              {/* epiderme superior */}
              <rect x={20} y={36} width={240} height={22} rx={0} fill="#bbf7d0" opacity={0.9} />
              <text x={140} y={52} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Epiderme superior + cutícula</text>
              {/* parênquima paliçádico */}
              {[72, 86, 100, 114].map((x) => (
                <rect key={x} x={x} y={62} width={12} height={50} rx={3} fill="#4ade80" opacity={0.7} />
              ))}
              {[142, 156, 170, 184, 198].map((x) => (
                <rect key={x} x={x} y={62} width={12} height={50} rx={3} fill="#4ade80" opacity={0.7} />
              ))}
              <text x={140} y={80} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Par. paliçádico</text>
              <text x={140} y={93} textAnchor="middle" fontSize={9} fill="#166534">(fotossíntese intensa)</text>
              {/* parênquima lacunoso */}
              <rect x={30} y={116} width={220} height={72} rx={0} fill="#86efac" opacity={0.35} />
              <text x={140} y={148} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Parênquima lacunoso</text>
              <text x={140} y={162} textAnchor="middle" fontSize={9} fill="#166534">(trocas gasosas — espaços aéreos)</text>
              {/* feixe vascular */}
              <rect x={100} y={130} width={80} height={22} rx={6} fill="#60a5fa" opacity={0.5} />
              <text x={140} y={145} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e3a8a">Feixe vascular (nervura)</text>
              {/* epiderme inferior */}
              <rect x={20} y={192} width={240} height={22} rx={0} fill="#bbf7d0" opacity={0.9} />
              <text x={140} y={208} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Epiderme inferior</text>
              {/* estômatos */}
              <ellipse cx={80} cy={224} rx={10} ry={6} fill="#fff" stroke="#15803d" strokeWidth={1.5} />
              <ellipse cx={140} cy={224} rx={10} ry={6} fill="#fff" stroke="#15803d" strokeWidth={1.5} />
              <ellipse cx={200} cy={224} rx={10} ry={6} fill="#fff" stroke="#15803d" strokeWidth={1.5} />
              <text x={140} y={250} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Estômatos</text>
              <text x={140} y={265} textAnchor="middle" fontSize={9} fill="#166534">(trocas de CO₂, O₂ e H₂O)</text>
            </svg>
            <figcaption>Corte transversal do limbo — anatomia interna.</figcaption>
          </figure>
        </div>

        <div className="lesson-highlight">
          <h3>Modificações foliares e suas funções adaptativas</h3>
          <p>
            Ao longo da evolução, as folhas adquiriram funções distintas da
            fotossíntese. As <strong>gavinhas foliares</strong> (ervilha, lathyrus)
            são folíolos transformados em filamentos que se enrolam em suportes.
            Os <strong>espinhos foliares</strong> (cactos, Berberis) são folhas
            modificadas para reduzir a transpiração e proteger contra herbívoros.
            As <strong>brácteas</strong> (bico-de-papagaio, antúrio) são folhas
            modificadas, frequentemente coloridas, que atraem polinizadores.
            As <strong>folhas insetívoras</strong> da Drosera e da Dionaea
            muscipula formam armadilhas para capturar insetos como fonte de
            nitrogênio em solos pobres. As{" "}
            <strong>catáfilos</strong> são folhas reduzidas e membranosas que
            protegem gemas e constituem as escamas dos bulbos.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Flor</span>

        <h2>5. A Flor — Peças Florais e Sistemas de Polinização</h2>

        <p>
          A flor é o <strong>órgão reprodutivo exclusivo das
          angiospermas</strong> (Magnoliophyta). Ela é inserida no caule pelo
          pedúnculo, que se alarga em um <strong>receptáculo</strong> do qual
          partem as demais peças florais em verticilos (sépalas, pétalas,
          estames, carpelos). Uma flor é dita <strong>completa</strong> quando
          possui todos os quatro verticilos; <strong>incompleta</strong> quando
          falta algum deles. Quando tem androceu e gineceu na mesma flor, é
          chamada de <strong>monoclina ou hermafrodita</strong>; quando tem
          apenas um dos sexos, é <strong>diclina ou unissexuada</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Cálice</h3>
            <p>Conjunto de <strong>sépalas</strong> (geralmente verdes), que protegem a flor no botão.</p>
          </div>

          <div className="lesson-card">
            <span>🌺</span>
            <h3>Corola</h3>
            <p>Conjunto de <strong>pétalas</strong> (coloridas e perfumadas), responsável por atrair polinizadores.</p>
          </div>

          <div className="lesson-card">
            <span>🔴</span>
            <h3>Androceu</h3>
            <p>Parte masculina — conjunto de <strong>estames</strong> (filete + antera); a antera contém os grãos de pólen.</p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Gineceu (Pistilo)</h3>
            <p>Parte feminina — formado por <strong>estigma</strong> (receptivo ao pólen), <strong>estilete</strong> e <strong>ovário</strong> (com óvulos).</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Polinização: o grão de pólen encontra o estigma</h3>
          <p>
            A <strong>anemofilia</strong> (vento) ocorre em gramíneas como o
            milho: as flores são discretas, produzem pólen seco em grande
            quantidade e têm estigmas plumosos. A{" "}
            <strong>zoofilia</strong> (animais) envolve insetos (entomofilia),
            pássaros (ornitofilia) e morcegos (quiropterofilia): as flores
            atraem o agente com cor, odor e néctar. A{" "}
            <strong>hidrofilia</strong> ocorre em plantas aquáticas. A{" "}
            <strong>autopolinização</strong> transfere o pólen de um estame
            para o estigma da mesma flor (ou planta), enquanto a{" "}
            <strong>polinização cruzada</strong> (alogamia) aumenta a
            variabilidade genética.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Fruto</span>

        <h2>6. O Fruto — Pericarpo, Fruto Verdadeiro e Pseudofruto</h2>

        <p>
          O fruto é a estrutura resultante do <strong>desenvolvimento do ovário
          após a fecundação</strong>. Sua principal função biológica é proteger
          as sementes e, ao tornar-se atrativo (suculento, colorido, aromático),
          facilitar a <strong>dispersão</strong> delas por animais (zoocoria).
          O fruto verdadeiro deriva exclusivamente da parede do ovário{" "}
          (<em>pericarpo</em>). Quando outras partes da flor participam da
          estrutura carnosa — como o receptáculo, o pedúnculo ou as sépalas —
          o resultado é chamado de <strong>pseudofruto</strong>.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 260 260" width="260" height="260" aria-label="Corte de um fruto carnoso com epicarpo, mesocarpo, endocarpo e semente">
              {/* endocarpo — centro */}
              <ellipse cx={130} cy={130} rx={35} ry={38} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
              <text x={130} y={135} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">Endocarpo</text>
              {/* mesocarpo */}
              <ellipse cx={130} cy={130} rx={70} ry={75} fill="#fca5a5" opacity={0.6} stroke="#ef4444" strokeWidth={2} />
              {/* epicarpo */}
              <ellipse cx={130} cy={130} rx={100} ry={106} fill="#fef2f2" opacity={0.5} stroke="#dc2626" strokeWidth={2.5} />

              {/* rótulos com setas */}
              <text x={18} y={105} fontSize={11} fontWeight={700} fill="#b91c1c">Epicarpo</text>
              <text x={18} y={118} fontSize={9} fill="#7f1d1d">(casca externa)</text>
              <line x1={60} y1={110} x2={32} y2={110} stroke="#b91c1c" strokeWidth={1} markerEnd="url(#arr)" />

              <text x={18} y={155} fontSize={11} fontWeight={700} fill="#dc2626">Mesocarpo</text>
              <text x={18} y={168} fontSize={9} fill="#7f1d1d">(polpa)</text>
              <line x1={60} y1={150} x2={32} y2={155} stroke="#dc2626" strokeWidth={1} />

              <text x={170} y={186} fontSize={11} fontWeight={700} fill="#92400e">Endocarpo</text>
              <text x={170} y={199} fontSize={9} fill="#78350f">(caroço)</text>
              <line x1={165} y1={152} x2={175} y2={184} stroke="#92400e" strokeWidth={1} />

              {/* semente no centro */}
              <ellipse cx={130} cy={130} rx={16} ry={20} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
              <text x={130} y={172} textAnchor="middle" fontSize={10} fill="#92400e">Semente</text>
              <line x1={130} y1={152} x2={130} y2={168} stroke="#92400e" strokeWidth={1} />
            </svg>
            <figcaption>Corte transversal de um fruto carnoso (drupa, ex.: manga, pêssego).</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 260 260" width="260" height="260" aria-label="Comparação entre fruto verdadeiro e pseudofruto caju">
              {/* fundo */}
              <rect x={10} y={10} width={240} height={240} rx={14} fill="#fff7ed" stroke="#fed7aa" strokeWidth={1.5} />
              {/* caju — pedúnculo carnoso */}
              <path d="M 70 70 Q 50 120 65 165 Q 80 190 130 195 Q 180 190 195 165 Q 210 120 190 70 Z" fill="#fb923c" opacity={0.7} stroke="#ea580c" strokeWidth={2} />
              <text x={130} y={150} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c2d12">Pseudofruto</text>
              <text x={130} y={165} textAnchor="middle" fontSize={10} fill="#7c2d12">(pedúnculo carnoso)</text>
              {/* castanha — fruto verdadeiro */}
              <path d="M 105 55 Q 130 20 155 55 Q 165 70 130 78 Q 95 70 105 55 Z" fill="#fbbf24" stroke="#d97706" strokeWidth={2} />
              <text x={130} y={52} textAnchor="middle" fontSize={11} fontWeight={700} fill="#78350f">Castanha</text>
              <text x={130} y={64} textAnchor="middle" fontSize={9} fill="#78350f">(fruto verdadeiro)</text>
              {/* seta e legenda */}
              <text x={130} y={225} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#92400e">Cajueiro — Anacardium occidentale</text>
            </svg>
            <figcaption>No cajueiro, a castanha é o fruto verdadeiro; o "caju" é o pedúnculo carnoso (pseudofruto).</figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de fruto</th>
                <th>Pericarpo</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Carnoso — Baga</strong></td>
                <td>Epicarpo fino; mesocarpo e endocarpo carnosos; sementes soltas</td>
                <td>Tomate, uva, melancia, goiaba</td>
              </tr>
              <tr>
                <td><strong>Carnoso — Drupa</strong></td>
                <td>Epicarpo fino; mesocarpo carnoso; endocarpo endurecido (caroço)</td>
                <td>Manga, pêssego, ameixa, azeitona, coco</td>
              </tr>
              <tr>
                <td><strong>Carnoso — Hesperídio</strong></td>
                <td>Epicarpo glandular (flavedo); mesocarpo esponjoso branco (albedo)</td>
                <td>Laranja, limão, tangerina</td>
              </tr>
              <tr>
                <td><strong>Seco deiscente — Vagem</strong></td>
                <td>Pericarpo seco; abre-se longitudinalmente ao longo de duas suturas</td>
                <td>Feijão, ervilha, soja, amendoim</td>
              </tr>
              <tr>
                <td><strong>Seco deiscente — Cápsula</strong></td>
                <td>Pericarpo seco; abre-se de formas variadas (poricida, loculicida)</td>
                <td>Algodão, mamona, papoula</td>
              </tr>
              <tr>
                <td><strong>Seco indeiscente — Aquênio</strong></td>
                <td>Pericarpo seco e fino; não se abre; semente livre</td>
                <td>Girassol, morango (cada "pontinho"), carrapicho</td>
              </tr>
              <tr>
                <td><strong>Seco indeiscente — Cariopse</strong></td>
                <td>Pericarpo fundido ao tegumento da semente</td>
                <td>Trigo, milho, arroz (o "grão")</td>
              </tr>
              <tr>
                <td><strong>Pseudofruto</strong></td>
                <td>Parte carnosa derivada de estrutura não-ovariana</td>
                <td>Caju (pedúnculo), maçã/pera (receptáculo), morango (receptáculo)</td>
              </tr>
              <tr>
                <td><strong>Fruto composto (Sorose)</strong></td>
                <td>Vários frutos fundidos (infrutescência)</td>
                <td>Abacaxi, figo (sicônio), amora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Dispersão de frutos e sementes:</strong>{" "}
            <strong>Zoocoria</strong> — frutos carnosos atraem animais que
            ingerem a polpa e eliminam a semente (manga, cereja).{" "}
            <strong>Anemocoria</strong> — frutos ou sementes com estruturas
            aladas ou plumosas (tília, paineira, dente-de-leão).{" "}
            <strong>Hidrocoria</strong> — frutos com estruturas flutuantes
            (coco, vitória-régia). <strong>Autocoria</strong> — mecanismos
            explosivos ou de gancho (mamona, Strophanthus).
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Semente</span>

        <h2>7. A Semente — Estrutura, Cotilédones e Germinação</h2>

        <p>
          A semente resulta do desenvolvimento do <strong>óvulo fecundado</strong>.
          Ela encerra o embrião da próxima geração em estado de latência
          metabólica (dormência), protegido pelo <strong>tegumento</strong> e
          abastecido por reservas nutritivas suficientes para a germinação.
          A evolução da semente foi uma das grandes inovações da história das
          plantas, pois desvinculou a reprodução da necessidade de um ambiente
          úmido (ao contrário de briófitas e pteridófitas).
        </p>

        <div className="lesson-highlight">
          <h3>Partes da semente</h3>
          <p>
            O <strong>tegumento</strong> (ou testa) é a casca protetora derivada
            dos tegumentos do óvulo; apresenta o <em>hilo</em> (cicatriz de
            inserção no ovário) e a <em>micrópila</em> (orifício por onde
            penetra o tubo polínico). O <strong>embrião</strong> é o futuro
            esporófito em miniatura: possui a <em>radícula</em> (que originará
            a raiz primária), o <em>caulículo</em> (eixo entre os cotilédones
            e a radícula), a <em>gêmula ou plúmula</em> (futuras folhas e caule
            aéreo) e um ou dois <em>cotilédones</em>. O{" "}
            <strong>endosperma (albúmen)</strong> é um tecido triploide de
            reserva, proeminente em monocotiledôneas (milho, trigo) e ausente
            ou vestigial nas dicotiledôneas eudicots, nas quais os cotilédones
            assumem a função de depósito de reservas (feijão, soja).
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Monocotiledôneas</h3>
            <p>1 cotilédone; endosperma abundante; nervação paralela; milho, trigo, arroz, cana, palmeiras.</p>
          </div>

          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Dicotiledôneas</h3>
            <p>2 cotilédones; endosperma reduzido; nervação reticulada; feijão, soja, manga, maçã, café.</p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Germinação epígea</h3>
            <p>Cotilédones emergem acima do solo (feijão); hipocótilo se alonga muito.</p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Germinação hipógea</h3>
            <p>Cotilédones permanecem no solo (ervilha, milho); epicótilo se alonga, cotilédones são absorvidos.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Condições para a germinação</h3>
          <p>
            A semente sai da dormência quando encontra as condições ideais:
            <strong> água</strong> (reidratação do embrião e ativação enzimática),{" "}
            <strong>temperatura adequada</strong> (faixa ótima de 20–30 °C para
            a maioria das espécies tropicais) e{" "}
            <strong>oxigênio</strong> (respiração aeróbica para suprir energia
            à mitose). Algumas sementes exigem ainda{" "}
            <strong>luz</strong> (fotoblásticas positivas, como alface) ou
            ausência de luz (fotoblásticas negativas). A{" "}
            <strong>escarificação</strong> (quebra do tegumento) é necessária
            em sementes com casca muito impermeável para que a água entre.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Zonas da raiz"
          statement={
            <p>
              Qual região da raiz é responsável pela absorção de água e sais
              minerais do solo?
            </p>
          }
          options={[
            { letter: "a", text: "Coifa" },
            { letter: "b", text: "Zona meristemática" },
            { letter: "c", text: "Zona pilífera", correct: true },
            { letter: "d", text: "Zona suberosa" },
          ]}
          resolution={
            <p>
              A zona pilífera contém os pelos absorventes — prolongamentos
              unicelulares da epiderme que aumentam enormemente a superfície
              de contato com o solo, facilitando a absorção de água e sais
              minerais por osmose e transporte ativo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Caule modificado vs. raiz tuberosa"
          statement={
            <p>
              Assinale a alternativa que apresenta CORRETAMENTE um par
              (estrutura — classificação).
            </p>
          }
          options={[
            { letter: "a", text: "Batata-doce — tubérculo caulinar" },
            { letter: "b", text: "Batata-inglesa — raiz tuberosa" },
            { letter: "c", text: "Cebola — bulbo (caule modificado) e mandioca — raiz tuberosa", correct: true },
            { letter: "d", text: "Cenoura — rizoma e gengibre — raiz tuberosa" },
          ]}
          resolution={
            <p>
              A cebola é um bulbo (caule curto com folhas escamosas modificadas)
              e a mandioca é uma raiz tuberosa (raiz engrossada sem gemas).
              A batata-inglesa é tubérculo (caule com gemas); a batata-doce é
              raiz tuberosa; a cenoura é raiz tuberosa; o gengibre é um rizoma
              (caule subterrâneo horizontal).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Anatomia foliar e fotossíntese"
          statement={
            <p>
              Em corte transversal de uma folha, o parênquima paliçádico
              e o parênquima lacunoso desempenham funções complementares.
              Qual das alternativas descreve CORRETAMENTE essa
              complementaridade?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O paliçádico faz fotossíntese; o lacunoso só armazena água",
            },
            {
              letter: "b",
              text: "O paliçádico, rico em cloroplastos, concentra a fixação de CO₂; o lacunoso, cheio de espaços aéreos, facilita a difusão de CO₂ até as células fotossintéticas e a saída de O₂ pelos estômatos",
              correct: true,
            },
            {
              letter: "c",
              text: "Ambos realizam fotossíntese com a mesma eficiência; a diferença é apenas morfológica",
            },
            {
              letter: "d",
              text: "O lacunoso fica na face superior da folha e o paliçádico na inferior",
            },
          ]}
          resolution={
            <p>
              O parênquima paliçádico fica logo abaixo da epiderme superior e
              tem células cilíndricas densamente empacotadas com cloroplastos —
              ideal para captar luz e fixar CO₂ na fotossíntese. O parênquima
              lacunoso fica acima da epiderme inferior e possui grandes espaços
              intercelulares que formam uma rede de câmaras subestomáticas,
              por onde os gases (CO₂ entrando; O₂ e vapor d'água saindo)
              difundem-se livremente até os estômatos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. O caju no ENEM"
          statement={
            <p>
              Em uma aula de Botânica, o professor levou cajus para a turma
              e afirmou: "A parte suculenta e alaranjada que comemos não é,
              botanicamente, um fruto." Esse professor estava correto porque
              a parte carnosa do caju é:
            </p>
          }
          options={[
            { letter: "a", text: "O ovário fecundado, que sofreu hipertrofia" },
            {
              letter: "b",
              text: "O pedúnculo floral (pseudofruto); a castanha presa na ponta é o fruto verdadeiro",
              correct: true,
            },
            { letter: "c", text: "O receptáculo floral, assim como na maçã e no morango" },
            { letter: "d", text: "O mesocarpo hipertrofiado de um fruto do tipo drupa" },
          ]}
          resolution={
            <p>
              O "caju" que comemos é o pedúnculo floral engrossado — um
              pseudofruto. O verdadeiro fruto é a <strong>castanha de
              caju</strong> (tecnicamente, uma drupa), presa na extremidade
              do pedúnculo. Esse é um dos pseudofrutos mais cobrados em
              provas. Atenção: a maçã tem o receptáculo como pseudofruto,
              não o pedúnculo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Mangue e adaptações da raiz"
          statement={
            <p>
              Os manguezais são ecossistemas costeiros com solos encharcados
              e deficientes em oxigênio. As plantas de mangue do gênero{" "}
              <em>Avicennia</em> apresentam raízes que crescem verticalmente
              para cima, saindo do solo. Essas raízes são denominadas:
            </p>
          }
          options={[
            { letter: "a", text: "Haustórios" },
            { letter: "b", text: "Sapopemas (tabulares)" },
            { letter: "c", text: "Pneumatóforos", correct: true },
            { letter: "d", text: "Rizomas" },
          ]}
          resolution={
            <p>
              Os <strong>pneumatóforos</strong> são raízes respiratórias que
              crescem negativamente em relação ao geotropismo (para cima),
              emergindo acima da lama. Suas lenticelas permitem a troca de
              gases com a atmosfera, suprindo O₂ às raízes submetidas ao
              solo anóxico do manguezal. Haustórios são raízes sugadoras de
              parasitas; sapopemas são contrafortes de sustentação; rizomas
              são caules subterrâneos.
            </p>
          }
        />
      </section>
    </article>
  );
}
