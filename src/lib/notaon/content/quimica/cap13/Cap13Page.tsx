"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 13</span>
          <h1>Forças Intermoleculares × Propriedades Físicas</h1>
          <p>
            Por que a água ferve a 100 °C, mas o gás sulfídrico (uma molécula bem maior) ferve a
            −60 °C? Por que o álcool evapora e refresca a pele, enquanto o óleo não? No Capítulo 12
            definimos os três tipos de forças intermoleculares; agora vamos usá-las como
            <strong> chave-mestra</strong> para prever e explicar pontos de fusão e ebulição,
            volatilidade, pressão de vapor, solubilidade e tensão superficial — exatamente o tipo de
            raciocínio cobrado no ENEM e nos vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O elo central</span>
        <h2>1. Por que as Forças Intermoleculares Governam as Propriedades Físicas?</h2>
        <p>
          Mudar de estado físico ou dissolver uma substância molecular significa, no fundo,{" "}
          <strong>afastar as moléculas umas das outras</strong> — ou seja, vencer as atrações entre
          elas. Essas atrações são justamente as forças intermoleculares (dipolo induzido-dipolo
          induzido / London, dipolo-dipolo e ligação de hidrogênio, vistas no Capítulo 12). Quanto
          mais intensas essas forças, mais energia (na forma de calor) precisamos fornecer para
          separar as partículas.
        </p>
        <p>
          É crucial não confundir: ao ferver a água, <em>não</em> quebramos as ligações covalentes
          O–H de dentro da molécula — essas continuam intactas. Quebramos apenas as{" "}
          <strong>ligações de hidrogênio entre moléculas</strong> vizinhas. Por isso o vapor d'água
          ainda é <M>{"\\text{H}_2\\text{O}"}</M>, e não <M>{"\\text{H}_2"}</M> + <M>{"\\text{O}_2"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Regra-mestra do capítulo</h3>
          <p>
            Força intermolecular <strong>mais intensa</strong> ⇒ <strong>maiores</strong> pontos de
            fusão (PF) e ebulição (PE), <strong>menor</strong> volatilidade, <strong>menor</strong>{" "}
            pressão de vapor e <strong>maior</strong> tensão superficial. Memorize esta cadeia: ela
            resolve a maioria das questões.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quadro-resumo</span>
        <h2>2. Como Cada Propriedade Responde à Intensidade das Forças</h2>
        <p>
          A tabela a seguir condensa o efeito de aumentar a intensidade das forças intermoleculares
          sobre as principais propriedades físicas de uma substância molecular. Observe que as
          propriedades ligadas à <em>coesão</em> (PF, PE, tensão superficial) crescem, enquanto as
          ligadas à <em>fuga</em> das moléculas (volatilidade, pressão de vapor) diminuem.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Propriedade física</th>
                <th>O que mede</th>
                <th>Forças mais intensas →</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ponto de fusão (PF)</td><td>T em que o sólido vira líquido</td><td>Aumenta ↑</td></tr>
              <tr><td>Ponto de ebulição (PE)</td><td>T em que o líquido vira vapor</td><td>Aumenta ↑</td></tr>
              <tr><td>Volatilidade</td><td>Facilidade de evaporar</td><td>Diminui ↓</td></tr>
              <tr><td>Pressão de vapor</td><td>Tendência de escapar para o vapor</td><td>Diminui ↓</td></tr>
              <tr><td>Tensão superficial</td><td>Coesão na superfície do líquido</td><td>Aumenta ↑</td></tr>
              <tr><td>Calor de vaporização</td><td>Energia para vaporizar</td><td>Aumenta ↑</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Hierarquia das forças (mesma faixa de massa molar):</strong>{" "}
            ligação de hidrogênio <M>{">"}</M> dipolo permanente-dipolo permanente{" "}
            <M>{">"}</M> dipolo induzido (London). Quem faz ligação de hidrogênio "ganha" a disputa
            de maior PE — salvo grandes diferenças de massa molar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Roteiro de comparação</span>
        <h2>3. Como Comparar PF e PE de Duas Substâncias</h2>
        <p>
          Diante de duas substâncias, siga este roteiro em ordem — cada passo só é usado em caso de
          empate no anterior:
        </p>
        <div className="lesson-highlight">
          <ol>
            <li>
              <strong>Tipo de força predominante:</strong> vence quem tem a força mais forte. Ex.:{" "}
              <M>{"\\text{H}_2\\text{O}"}</M> (ligação de H) tem PE maior que o <M>{"\\text{H}_2\\text{S}"}</M>{" "}
              (dipolo-dipolo), apesar de ser mais leve.
            </li>
            <li>
              <strong>Empate no tipo?</strong> Compare a <strong>massa molar</strong>: maior massa →
              mais elétrons → forças de London mais intensas → maior PE. Ex.: entre os gases nobres,
              o xenônio ferve a uma temperatura bem maior que o hélio.
            </li>
            <li>
              <strong>Mesma massa e mesmo tipo?</strong> Avalie a <strong>forma</strong> da molécula
              (ramificação): cadeias lineares têm maior área de contato e PE maior que isômeros
              ramificados.
            </li>
          </ol>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A anomalia famosa</span>
        <h2>4. O Gráfico que Revela a Ligação de Hidrogênio</h2>
        <p>
          Se compararmos os hidretos de uma mesma família (grupo 16:{" "}
          <M>{"\\text{H}_2\\text{O}"}</M>, <M>{"\\text{H}_2\\text{S}"}</M>,{" "}
          <M>{"\\text{H}_2\\text{Se}"}</M>, <M>{"\\text{H}_2\\text{Te}"}</M>), o esperado é que o
          PE <em>cresça</em> com a massa molar, pois as forças de London aumentam. É o que de fato
          acontece de <M>{"\\text{H}_2\\text{S}"}</M> para baixo. Mas a água{" "}
          <strong>quebra a tendência de forma dramática</strong>: deveria ferver por volta de
          −80 °C (seguindo a reta dos demais) e ferve a +100 °C. O mesmo desvio para cima ocorre com
          <M>{"\\text{NH}_3"}</M> (grupo 15) e <M>{"\\text{HF}"}</M> (grupo 17). A causa é uma só: a{" "}
          <strong>ligação de hidrogênio</strong>, presente sempre que H está ligado a F, O ou N.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Pontos de ebulição dos hidretos dos grupos 14 a 17 versus período, mostrando a anomalia de H2O, NH3 e HF">
            {/* Eixos */}
            <line x1="58" y1="250" x2="478" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="58" y1="24" x2="58" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="268" y="284" textAnchor="middle" fontSize="13" fill="#374151">Período (massa molar crescente →)</text>
            <text x="20" y="140" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,140)">Ponto de ebulição (°C)</text>

            {/* Marcas eixo Y */}
            <text x="52" y="74" textAnchor="end" fontSize="10" fill="#374151">100</text>
            <text x="52" y="138" textAnchor="end" fontSize="10" fill="#374151">0</text>
            <text x="52" y="202" textAnchor="end" fontSize="10" fill="#374151">−100</text>
            <line x1="54" y1="70" x2="58" y2="70" stroke="#374151" strokeWidth="1"/>
            <line x1="54" y1="134" x2="58" y2="134" stroke="#374151" strokeWidth="1"/>
            <line x1="54" y1="198" x2="58" y2="198" stroke="#374151" strokeWidth="1"/>
            <line x1="58" y1="134" x2="478" y2="134" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Marcas eixo X: períodos 2,3,4,5 */}
            <text x="120" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">2º</text>
            <text x="220" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">3º</text>
            <text x="320" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">4º</text>
            <text x="420" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">5º</text>

            {/* Curva grupo 16 (H2O anômalo) — azul. PEs: H2O 100, H2S -60, H2Se -41, H2Te -2 */}
            <polyline points="120,70 220,172 320,160 420,135" fill="none" stroke="#2563eb" strokeWidth="2.5"/>
            <circle cx="120" cy="70" r="4" fill="#2563eb"/>
            <circle cx="220" cy="172" r="4" fill="#2563eb"/>
            <circle cx="320" cy="160" r="4" fill="#2563eb"/>
            <circle cx="420" cy="135" r="4" fill="#2563eb"/>
            <text x="120" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">H₂O</text>
            <text x="224" y="186" fontSize="9" fill="#1d4ed8">H₂S</text>
            <text x="324" y="174" fontSize="9" fill="#1d4ed8">H₂Se</text>
            <text x="424" y="132" fontSize="9" fill="#1d4ed8">H₂Te</text>
            {/* tendência esperada para H2O (tracejada) */}
            <line x1="120" y1="190" x2="220" y2="172" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="92" y="206" fontSize="8.5" fill="#64748b">esperado</text>

            {/* Curva grupo 15 (NH3 anômalo) — verde. NH3 -33, PH3 -88, AsH3 -62, SbH3 -17 */}
            <polyline points="120,155 220,200 320,182 420,154" fill="none" stroke="#059669" strokeWidth="2.5"/>
            <circle cx="120" cy="155" r="4" fill="#059669"/>
            <circle cx="220" cy="200" r="4" fill="#059669"/>
            <circle cx="320" cy="182" r="4" fill="#059669"/>
            <circle cx="420" cy="154" r="4" fill="#059669"/>
            <text x="108" y="150" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">NH₃</text>
            <text x="224" y="214" fontSize="9" fill="#047857">PH₃</text>

            {/* Curva grupo 17 (HF anômalo) — roxo. HF 20, HCl -85, HBr -67, HI -35 */}
            <polyline points="120,121 220,197 320,185 320,185 420,167" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
            <circle cx="120" cy="121" r="4" fill="#7c3aed"/>
            <circle cx="220" cy="197" r="4" fill="#7c3aed"/>
            <circle cx="320" cy="185" r="4" fill="#7c3aed"/>
            <circle cx="420" cy="167" r="4" fill="#7c3aed"/>
            <text x="120" y="114" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5b21b6">HF</text>
            <text x="224" y="192" fontSize="9" fill="#6d28d9">HCl</text>

            {/* Setas de anomalia */}
            <text x="160" y="42" fontSize="10" fill="#dc2626">↑ ligação de H eleva o PE</text>
          </svg>
          <figcaption>
            PE dos hidretos por período. Em cada família o PE cresceria com a massa molar (curvas a
            partir do 3º período), mas <strong>H₂O, NH₃ e HF</strong> aparecem anormalmente altos no
            2º período por causa das ligações de hidrogênio. A linha tracejada mostra onde a água
            "deveria" estar.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho e forma</span>
        <h2>5. Efeito da Massa Molar e da Ramificação</h2>
        <p>
          Entre substâncias <strong>apolares</strong> (que só fazem forças de London), o PE é
          governado por dois fatores geométricos:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📏</span>
            <h3>Tamanho da cadeia</h3>
            <p>
              Mais átomos → mais elétrons → nuvem eletrônica mais polarizável e maior superfície de
              contato → forças de London mais intensas → maior PE.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Ramificação</h3>
            <p>
              Para a mesma fórmula, quanto mais ramificada, mais "esférica" e compacta a molécula →{" "}
              <strong>menor</strong> área de contato → forças de London mais fracas → <strong>menor</strong> PE.
            </p>
          </div>
        </div>
        <p>
          O gráfico abaixo mostra o crescimento regular do PE com a massa molar na série dos alcanos
          lineares (homóloga). Como todos são apolares e do mesmo tipo, o PE sobe de forma quase
          linear: cada <M>{"\\text{CH}_2"}</M> adicionado reforça as forças de dispersão.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 290" width="500" height="290" aria-label="Ponto de ebulição dos alcanos lineares em função do número de carbonos">
            {/* Eixos */}
            <line x1="56" y1="244" x2="478" y2="244" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="22" x2="56" y2="244" stroke="#374151" strokeWidth="2"/>
            <text x="266" y="278" textAnchor="middle" fontSize="13" fill="#374151">Nº de carbonos (massa molar →)</text>
            <text x="18" y="135" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,135)">Ponto de ebulição (°C)</text>

            {/* Marcas eixo Y */}
            <text x="50" y="200" textAnchor="end" fontSize="10" fill="#374151">−100</text>
            <text x="50" y="155" textAnchor="end" fontSize="10" fill="#374151">−50</text>
            <text x="50" y="110" textAnchor="end" fontSize="10" fill="#374151">0</text>
            <text x="50" y="65" textAnchor="end" fontSize="10" fill="#374151">50</text>
            <line x1="52" y1="110" x2="56" y2="110" stroke="#374151" strokeWidth="1"/>
            <line x1="56" y1="110" x2="478" y2="110" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Curva crescente: CH4 -162, C2 -89, C3 -42, C4 -0.5, C5 36, C6 69 (mapeados) */}
            {/* y: 0°C->110, -50->155, escala 0.9px/°C aprox */}
            <polyline points="90,254 150,234 210,212 270,110 330,78 410,50" fill="none" stroke="#2563eb" strokeWidth="3"/>
            <circle cx="90" cy="254" r="4" fill="#dc2626"/>
            <circle cx="150" cy="234" r="4" fill="#dc2626"/>
            <circle cx="210" cy="212" r="4" fill="#dc2626"/>
            <circle cx="270" cy="110" r="4" fill="#dc2626"/>
            <circle cx="330" cy="78" r="4" fill="#dc2626"/>
            <circle cx="410" cy="50" r="4" fill="#dc2626"/>
            <text x="90" y="270" textAnchor="middle" fontSize="9" fill="#374151">CH₄</text>
            <text x="150" y="250" textAnchor="middle" fontSize="9" fill="#374151">C₂H₆</text>
            <text x="210" y="228" textAnchor="middle" fontSize="9" fill="#374151">C₃H₈</text>
            <text x="270" y="102" textAnchor="middle" fontSize="9" fill="#374151">C₄H₁₀</text>
            <text x="330" y="70" textAnchor="middle" fontSize="9" fill="#374151">C₅H₁₂</text>
            <text x="410" y="42" textAnchor="middle" fontSize="9" fill="#374151">C₆H₁₄</text>

            <text x="300" y="200" fontSize="11" fill="#1d4ed8">mais C → mais London → maior PE</text>
          </svg>
          <figcaption>
            Nos alcanos lineares, o PE cresce regularmente com o número de carbonos (massa molar):
            metano e etano são gases; pentano e hexano já são líquidos à temperatura ambiente.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Efeito da ramificação:</strong> o n-pentano (cadeia reta) ferve a 36 °C, enquanto
            o neopentano (muito ramificado, mesma fórmula <M>{"\\text{C}_5\\text{H}_{12}"}</M>) ferve
            a apenas 9,5 °C — a forma quase esférica reduz a área de contato e enfraquece as forças
            de London, mesmo com massa molar idêntica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Volatilidade</span>
        <h2>6. Volatilidade e Pressão de Vapor</h2>
        <p>
          Uma substância <strong>volátil</strong> evapora com facilidade — sinal de forças
          intermoleculares fracas. A <strong>pressão de vapor</strong> é a pressão exercida pelo
          vapor em equilíbrio com o líquido numa dada temperatura: quanto mais fácil escapar, maior a
          pressão de vapor. E um líquido ferve quando sua pressão de vapor iguala a pressão externa.
          Logo:
        </p>
        <div className="lesson-highlight">
          <p>
            Forças fracas ⇒ <strong>alta volatilidade</strong> ⇒ <strong>alta pressão de vapor</strong>{" "}
            ⇒ <strong>baixo ponto de ebulição</strong>. As três descrições andam sempre juntas.
          </p>
        </div>
        <p>
          A tabela compara três líquidos de massas molares parecidas, mas com forças
          intermoleculares bem diferentes. Note como a presença (ou ausência) de ligação de
          hidrogênio comanda o PE e a volatilidade:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Substância</th>
                <th>Fórmula</th>
                <th>Força predominante</th>
                <th>PE (1 atm)</th>
                <th>Volatilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Água</td>
                <td><M>{"\\text{H}_2\\text{O}"}</M></td>
                <td>Ligação de H (forte)</td>
                <td>100 °C</td>
                <td>Baixa</td>
              </tr>
              <tr>
                <td>Etanol</td>
                <td><M>{"\\text{C}_2\\text{H}_5\\text{OH}"}</M></td>
                <td>Ligação de H (1 grupo OH)</td>
                <td>78 °C</td>
                <td>Média</td>
              </tr>
              <tr>
                <td>Éter dimetílico</td>
                <td><M>{"\\text{CH}_3\\text{OCH}_3"}</M></td>
                <td>Dipolo-dipolo (sem OH)</td>
                <td>−24 °C</td>
                <td>Altíssima</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Etanol e éter dimetílico são <strong>isômeros</strong> (mesma fórmula molecular{" "}
          <M>{"\\text{C}_2\\text{H}_6\\text{O}"}</M>, mesma massa molar). Ainda assim, o etanol ferve
          mais de 100 °C acima do éter: a única diferença é que o etanol possui o grupo O–H que faz
          ligações de hidrogênio, enquanto no éter o oxigênio está "preso" entre dois carbonos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coesão na superfície</span>
        <h2>7. Tensão Superficial e Capilaridade</h2>
        <p>
          No interior do líquido, cada molécula é puxada igualmente em todas as direções pelas
          vizinhas. Na <strong>superfície</strong>, porém, não há vizinhas por cima: a resultante das
          forças aponta para dentro, criando uma espécie de "película elástica". Essa é a{" "}
          <strong>tensão superficial</strong>. Quanto mais intensas as forças intermoleculares, maior
          a tensão superficial — por isso a água (ligação de H) tem tensão superficial altíssima, que
          permite a um inseto como o "alfaiate" caminhar sobre ela e faz as gotas ficarem quase
          esféricas.
        </p>
        <p>
          A <strong>capilaridade</strong> é a subida (ou descida) de um líquido por tubos finos,
          resultado da competição entre <em>coesão</em> (forças líquido-líquido) e <em>adesão</em>{" "}
          (forças líquido-parede). É a capilaridade que faz a água subir pelo caule das plantas e o
          café molhar todo o açúcar de um cubo.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Sabões e detergentes</strong> são tensoativos: eles <em>reduzem</em> a tensão
            superficial da água, permitindo que ela molhe melhor as superfícies e penetre nos
            tecidos — daí seu poder de limpeza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Solubilidade</span>
        <h2>8. "Semelhante Dissolve Semelhante"</h2>
        <p>
          Para uma substância se dissolver em outra, as forças entre soluto e solvente precisam ser{" "}
          <strong>compatíveis</strong> com as forças que cada um já tinha. Por isso a regra prática:{" "}
          <strong>polar dissolve polar; apolar dissolve apolar</strong>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Polar + polar</h3>
            <p>
              A água (polar) dissolve sal, açúcar, álcool e vinagre — as moléculas de água envolvem o
              soluto por ligações de H e atrações dipolo-íon.
            </p>
          </div>
          <div className="lesson-card">
            <span>🛢️</span>
            <h3>Apolar + apolar</h3>
            <p>
              A gasolina (apolar) dissolve óleo, graxa, gorduras e ceras — todas governadas por
              forças de London.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>
            É por isso que <strong>água e óleo não se misturam</strong>: polaridades incompatíveis.
            E é por isso que o <strong>detergente</strong> limpa gordura — sua molécula tem uma
            "cabeça" polar (afim à água) e uma "cauda" apolar (afim à gordura), emulsionando a
            gordura para que a água a arraste.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Casos especiais</span>
        <h2>9. As Propriedades Anômalas da Água</h2>
        <p>
          Quase tudo de estranho na água tem a mesma origem: cada molécula faz até{" "}
          <strong>quatro</strong> ligações de hidrogênio com as vizinhas, formando uma rede coesa e
          tridimensional. Daí vêm seus comportamentos "fora da curva", essenciais para a vida:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>PE altíssimo (100 °C)</strong> para uma molécula tão pequena, como vimos no
              gráfico dos hidretos.
            </li>
            <li>
              <strong>Gelo flutua:</strong> ao congelar, as ligações de hidrogênio forçam um arranjo
              hexagonal <em>aberto</em>, com mais espaços vazios. O gelo fica <em>menos denso</em> que
              a água líquida (densidade máxima a 4 °C). Por isso lagos congelam de cima para baixo,
              preservando a vida no fundo.
            </li>
            <li>
              <strong>Alto calor específico e alto calor de vaporização:</strong> a água "segura"
              muito calor, regulando o clima e a temperatura corporal (suor que refresca).
            </li>
            <li>
              <strong>Alta tensão superficial</strong>, que sustenta insetos e impulsiona a
              capilaridade nas plantas.
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📈</span>
            <h3>Força × PF/PE</h3>
            <p>Forças mais intensas → maiores PF e PE. Ligação de H ganha a disputa.</p>
          </div>
          <div className="math-card">
            <span>💨</span>
            <h3>Volatilidade</h3>
            <p>Mais volátil → maior pressão de vapor → menor PE.</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>Massa e forma</h3>
            <p>Mais massa → mais London → maior PE. Mais ramificada → menor área → menor PE.</p>
          </div>
          <div className="math-card">
            <span>🌊</span>
            <h3>Tensão superficial</h3>
            <p>Forças fortes → maior coesão na superfície. Detergentes a reduzem.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Solubilidade</h3>
            <p>Semelhante dissolve semelhante: polar↔polar, apolar↔apolar.</p>
          </div>
          <div className="math-card">
            <span>🧊</span>
            <h3>Água anômala</h3>
            <p>Gelo flutua; PE, calor específico e tensão superficial altíssimos (ligação de H).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Volatilidade e ponto de ebulição"
          statement={<p>Uma substância muito volátil, comparada a uma pouco volátil de mesma massa molar, tende a apresentar:</p>}
          options={[
            { letter: "a", text: "Menor ponto de ebulição e maior pressão de vapor", correct: true },
            { letter: "b", text: "Maior ponto de ebulição e menor pressão de vapor" },
            { letter: "c", text: "Mesmo ponto de ebulição" },
            { letter: "d", text: "Ponto de fusão sempre maior" },
          ]}
          resolution={<p>Alta volatilidade indica forças intermoleculares fracas, que são facilmente vencidas. Logo, a substância evapora fácil (alta pressão de vapor) e ferve em temperatura baixa (menor PE). Pressão de vapor alta e PE baixo andam sempre juntos.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Semelhante dissolve semelhante"
          statement={<p>O óleo de cozinha (apolar) dissolve-se melhor em:</p>}
          options={[
            { letter: "a", text: "Gasolina (apolar)", correct: true },
            { letter: "b", text: "Água (polar)" },
            { letter: "c", text: "Solução aquosa de sal" },
            { letter: "d", text: "Vinagre" },
          ]}
          resolution={<p>Pelo princípio "semelhante dissolve semelhante", o óleo (apolar) dissolve-se em solventes apolares como a gasolina, pois ambos interagem por forças de London. Não se mistura com a água, que é polar e faz ligações de hidrogênio.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Comparando PE por tamanho de cadeia"
          statement={<p>Entre os hidrocarbonetos metano (<M>{"\\text{CH}_4"}</M>), propano (<M>{"\\text{C}_3\\text{H}_8"}</M>) e hexano (<M>{"\\text{C}_6\\text{H}_{14}"}</M>), o de maior ponto de ebulição é:</p>}
          options={[
            { letter: "a", text: "Hexano", correct: true },
            { letter: "b", text: "Propano" },
            { letter: "c", text: "Metano" },
            { letter: "d", text: "Todos têm o mesmo PE" },
          ]}
          resolution={<p>Todos são apolares (só fazem forças de London). Como o hexano tem a maior cadeia (6 carbonos), tem mais elétrons e a maior superfície de contato → forças de London mais intensas → maior ponto de ebulição.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Isômeros: etanol × éter dimetílico"
          statement={<p>O etanol (<M>{"\\text{C}_2\\text{H}_5\\text{OH}"}</M>) e o éter dimetílico (<M>{"\\text{CH}_3\\text{OCH}_3"}</M>) têm a mesma fórmula molecular (<M>{"\\text{C}_2\\text{H}_6\\text{O}"}</M>), mas o etanol ferve a 78 °C e o éter a −24 °C. A explicação é que o etanol:</p>}
          options={[
            { letter: "a", text: "Possui grupo O–H e faz ligações de hidrogênio, ausentes no éter", correct: true },
            { letter: "b", text: "Tem massa molar muito maior" },
            { letter: "c", text: "É apolar, ao contrário do éter" },
            { letter: "d", text: "Faz apenas forças de London" },
          ]}
          resolution={<p>Sendo isômeros, têm a mesma massa molar. A diferença decisiva é o grupo O–H do etanol, que permite ligações de hidrogênio intensas entre as moléculas. No éter, o oxigênio está entre dois carbonos (sem H ligado a O), então predomina apenas o dipolo-dipolo, bem mais fraco — daí o PE muito menor.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. A anomalia da água no gráfico dos hidretos"
          statement={<p>No gráfico de PE × período dos hidretos do grupo 16, a sequência <M>{"\\text{H}_2\\text{S}"}</M>, <M>{"\\text{H}_2\\text{Se}"}</M> e <M>{"\\text{H}_2\\text{Te}"}</M> tem PE crescente, mas a <M>{"\\text{H}_2\\text{O}"}</M> aparece muito acima do esperado. Isso ocorre porque:</p>}
          options={[
            { letter: "a", text: "A água faz ligações de hidrogênio, ausentes nos demais hidretos do grupo", correct: true },
            { letter: "b", text: "A água tem a maior massa molar do grupo" },
            { letter: "c", text: "A água é a única molécula apolar do grupo" },
            { letter: "d", text: "Os demais hidretos fazem ligações de hidrogênio mais fortes" },
          ]}
          resolution={<p>De <M>{"\\text{H}_2\\text{S}"}</M> em diante o PE cresce com a massa molar (forças de London). Mas só a água tem H ligado a O, fazendo ligações de hidrogênio fortíssimas. Por isso ela ferve a 100 °C em vez de cerca de −80 °C que a tendência do grupo previa. O mesmo desvio acontece com NH₃ (grupo 15) e HF (grupo 17).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Por que o álcool gel refresca a pele"
          statement={<p>Ao passar álcool gel nas mãos, sentimos uma sensação de frio que não ocorre com a mesma intensidade ao usar água. Sob o ponto de vista das forças intermoleculares, isso acontece porque o álcool, comparado à água:</p>}
          options={[
            { letter: "a", text: "É mais volátil (forças intermoleculares mais fracas), evapora rápido e retira calor da pele de forma intensa.", correct: true },
            { letter: "b", text: "É menos volátil e por isso resfria mais que a água." },
            { letter: "c", text: "Reage quimicamente com a pele, liberando frio." },
            { letter: "d", text: "Tem ponto de ebulição maior que o da água, evaporando mais devagar." },
          ]}
          resolution={<p>A evaporação é endotérmica: para escapar, as moléculas retiram calor da superfície (a pele), provocando a sensação de frio. O etanol faz ligações de hidrogênio mais fracas que a água (um único grupo OH por molécula), sendo mais volátil — evapora bem mais rápido e, num curto intervalo, retira calor de forma mais perceptível. A água, com ligações de hidrogênio mais intensas, evapora devagar e resfria menos.</p>}
        />
      </section>
    </article>
  );
}
