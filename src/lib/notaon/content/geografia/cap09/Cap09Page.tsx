"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 09</span>
          <h1>Tipos de solo, erosão e conservação</h1>
          <p>
            O solo é muito mais do que a camada de terra que pisamos: é um sistema vivo e complexo,
            resultado de milhares a milhões de anos de intemperismo das rochas combinado à ação de
            organismos vivos, clima e relevo. Ele sustenta praticamente toda a produção de alimentos
            do planeta, regula o ciclo da água, filtra poluentes e armazena grandes quantidades de
            carbono. No Brasil, país com dimensões continentais e diversidade climática excepcional,
            encontra-se uma das maiores variedades de solos do mundo. Compreender os tipos de solo,
            os processos de erosão e as técnicas de conservação é fundamental tanto para a
            sustentabilidade da agricultura quanto para a preservação dos ecossistemas naturais.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Formação do solo</span>
        <h2>1. O que é solo e como ele se forma?</h2>
        <p>
          O solo é a camada superficial da crosta terrestre formada pela decomposição de rochas
          (material mineral) e pela acumulação de matéria orgânica proveniente de organismos vivos.
          Sua formação — chamada <strong>pedogênese</strong> — é lenta: em condições favoráveis,
          forma-se apenas 1 cm de solo a cada 100 a 400 anos.
        </p>
        <p>
          Os <strong>fatores de formação do solo</strong> são cinco: material de origem (rocha-mãe),
          clima, organismos vivos (vegetação, fauna e microrganismos), relevo e tempo. A
          combinação desses fatores resulta em solos com características muito diferentes de região
          para região.
        </p>
        <p>
          O processo de formação inclui o intemperismo da rocha-mãe (desagregação física e
          decomposição química), a incorporação de matéria orgânica pela decomposição de seres
          vivos (<strong>humificação</strong>) e a movimentação vertical de materiais entre os
          horizontes (<strong>lixiviação</strong> e <strong>iluviação</strong>).
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perfil do solo</span>
        <h2>2. Horizontes do solo (perfil pedológico)</h2>
        <p>
          Um corte vertical no solo revela camadas horizontais distintas, chamadas{" "}
          <strong>horizontes</strong>. O conjunto desses horizontes forma o{" "}
          <strong>perfil do solo</strong>. Os horizontes principais são:
        </p>
        <p>
          <strong>Horizonte O:</strong> camada superficial de matéria orgânica em decomposição
          (serapilheira). Presente principalmente em solos de floresta.
        </p>
        <p>
          <strong>Horizonte A (topsoil):</strong> camada mais superficial do solo mineral, rica
          em matéria orgânica (húmus) e atividade biológica. É a camada mais fértil e mais
          vulnerável à erosão.
        </p>
        <p>
          <strong>Horizonte B:</strong> zona de acumulação de argilas, óxidos e minerais
          lixiviados do horizonte A. Em climas tropicais, é frequentemente vermelho pela
          concentração de óxidos de ferro.
        </p>
        <p>
          <strong>Horizonte C:</strong> rocha em processo de decomposição (saprolito). Abaixo dele
          está a rocha-mãe inalterada (horizonte R).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Horizontes do solo e suas características</caption>
            <thead>
              <tr>
                <th>Horizonte</th>
                <th>Nome</th>
                <th>Característica principal</th>
                <th>Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O</td>
                <td>Orgânico</td>
                <td>Matéria orgânica em decomposição</td>
                <td>Fornece nutrientes ao solo</td>
              </tr>
              <tr>
                <td>A</td>
                <td>Topsoil</td>
                <td>Rico em húmus e organismos</td>
                <td>Camada mais fértil</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Subsolo</td>
                <td>Acumulação de argila e óxidos</td>
                <td>Reserva de minerais</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Saprolito</td>
                <td>Rocha em decomposição</td>
                <td>Transição para a rocha-mãe</td>
              </tr>
              <tr>
                <td>R</td>
                <td>Rocha-mãe</td>
                <td>Rocha sólida inalterada</td>
                <td>Material de origem do solo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG — Perfil do solo */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="360" fill="#fef9e7" />
          {/* Horizonte O */}
          <rect x="60" y="20" width="220" height="35" fill="#4a3728" rx="4" />
          <text x="170" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Horizonte O — Serapilheira</text>
          <text x="310" y="42" fontSize="11" fill="#555">Matéria orgânica bruta</text>
          {/* Horizonte A */}
          <rect x="60" y="57" width="220" height="65" fill="#5d4037" rx="4" />
          <text x="170" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Horizonte A</text>
          <text x="170" y="98" textAnchor="middle" fill="#d7ccc8" fontSize="11">Rico em húmus</text>
          <text x="310" y="78" fontSize="11" fill="#555">Topsoil — camada</text>
          <text x="310" y="93" fontSize="11" fill="#555">mais fértil</text>
          {/* Horizonte B */}
          <rect x="60" y="124" width="220" height="90" fill="#c0392b" rx="4" />
          <text x="170" y="152" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Horizonte B</text>
          <text x="170" y="170" textAnchor="middle" fill="#fcc" fontSize="11">Argila e óxidos</text>
          <text x="170" y="186" textAnchor="middle" fill="#fcc" fontSize="11">de ferro (vermelho)</text>
          <text x="310" y="160" fontSize="11" fill="#555">Subsolo — acumulação</text>
          <text x="310" y="175" fontSize="11" fill="#555">de minerais lixiviados</text>
          {/* Horizonte C */}
          <rect x="60" y="216" width="220" height="65" fill="#a0856f" rx="4" />
          <text x="170" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Horizonte C</text>
          <text x="170" y="262" textAnchor="middle" fill="#f5e6da" fontSize="11">Saprolito</text>
          <text x="310" y="248" fontSize="11" fill="#555">Rocha em decomposição</text>
          {/* Horizonte R */}
          <rect x="60" y="283" width="220" height="60" fill="#78909c" rx="4" />
          <text x="170" y="318" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Horizonte R — Rocha-mãe</text>
          <text x="310" y="318" fontSize="11" fill="#555">Rocha sólida inalterada</text>
          {/* Seta lateral */}
          <line x1="40" y1="20" x2="40" y2="343" stroke="#333" strokeWidth="2" />
          <text x="12" y="185" fontSize="11" fill="#333" transform="rotate(-90,12,185)">Profundidade</text>
        </svg>
        <figcaption>Figura 1 — Perfil pedológico típico de solo tropical com os principais horizontes</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Solos do Brasil</span>
        <h2>3. Principais tipos de solo do Brasil</h2>
        <p>
          O Sistema Brasileiro de Classificação de Solos (SiBCS), desenvolvido pela Embrapa,
          identifica 13 ordens de solos no país. As mais importantes em termos de extensão e
          relevância agrícola são:
        </p>
        <p>
          <strong>Latossolos:</strong> os mais comuns no Brasil (cerca de 40% do território).
          São solos profundos, bem drenados, ácidos, pobres em nutrientes mas de excelente
          estrutura física. Com calagem e adubação, tornam-se altamente produtivos — são a base
          da agricultura do Cerrado.
        </p>
        <p>
          <strong>Argissolos:</strong> solos de textura argilosa no horizonte B, comuns no
          Nordeste e nas encostas da Serra do Mar. Moderadamente férteis, mas susceptíveis à
          erosão quando desmatados.
        </p>
        <p>
          <strong>Cambissolos:</strong> solos jovens, ainda em formação. Frequentes em regiões
          serranas. Muito susceptíveis a deslizamentos.
        </p>
        <p>
          <strong>Neossolos:</strong> solos pouco desenvolvidos, praticamente sem horizonte B.
          Incluem os Neossolos Quartzarênicos (arenos do Cerrado e Nordeste) e os Neossolos
          Litólicos (solos rasos sobre rocha, comuns no semiárido).
        </p>
        <p>
          <strong>Terra Roxa (Nitossolo):</strong> solo fértil formado sobre rochas basálticas,
          especialmente no Paraná e São Paulo. Foi o suporte da cafeicultura paulista histórica.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais ordens de solos do Brasil e características</caption>
            <thead>
              <tr>
                <th>Solo</th>
                <th>Cobertura (aprox.)</th>
                <th>Fertilidade natural</th>
                <th>Região predominante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Latossolo</td>
                <td>≈ 40%</td>
                <td>Baixa (ácido, lixiviado)</td>
                <td>Cerrado, Amazônia, Sudeste</td>
              </tr>
              <tr>
                <td>Argissolo</td>
                <td>≈ 16%</td>
                <td>Média</td>
                <td>Nordeste, Sul, Sudeste</td>
              </tr>
              <tr>
                <td>Neossolo</td>
                <td>≈ 15%</td>
                <td>Muito baixa</td>
                <td>Semiárido, litoral</td>
              </tr>
              <tr>
                <td>Cambissolo</td>
                <td>≈ 6%</td>
                <td>Variável</td>
                <td>Serras do Sul e Sudeste</td>
              </tr>
              <tr>
                <td>Nitossolo (Terra Roxa)</td>
                <td>≈ 2%</td>
                <td>Alta</td>
                <td>Paraná, SP (Planalto Basáltico)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erosão do solo</span>
        <h2>4. Erosão do solo: tipos e causas</h2>
        <p>
          A <strong>erosão do solo</strong> é o processo de desprendimento e transporte de
          partículas de solo pela ação de agentes externos — principalmente a água da chuva e
          o vento. Ao contrário do intemperismo (que é o processo natural de alteração das
          rochas), a erosão é um processo de perda do solo já formado, frequentemente
          acelerada pela ação humana.
        </p>
        <p>
          A taxa natural de erosão em condições de vegetação nativa é muito pequena e geralmente
          equilibrada com a taxa de formação do solo. O problema surge quando atividades humanas
          (desmatamento, agricultura inadequada, urbanização) aceleram a erosão a taxas muito
          superiores à capacidade de regeneração do solo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais tipos de erosão e seus agentes</caption>
            <thead>
              <tr>
                <th>Tipo de erosão</th>
                <th>Agente principal</th>
                <th>Condições favoráveis</th>
                <th>Formas de relevo geradas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hídrica pluvial</td>
                <td>Água da chuva</td>
                <td>Chuvas intensas, solo exposto</td>
                <td>Sulcos, ravinas, voçorocas</td>
              </tr>
              <tr>
                <td>Hídrica fluvial</td>
                <td>Rios e córregos</td>
                <td>Desmatamento ciliar, cheias</td>
                <td>Barrancos, assoreamento</td>
              </tr>
              <tr>
                <td>Eólica</td>
                <td>Vento</td>
                <td>Clima árido, solo seco e exposto</td>
                <td>Dunas, deflação</td>
              </tr>
              <tr>
                <td>Antrópica</td>
                <td>Ação humana</td>
                <td>Desmatamento, agricultura, construção</td>
                <td>Aceleração de todos os processos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erosão no Brasil</span>
        <h2>5. A erosão do solo no Brasil</h2>
        <p>
          O Brasil perde anualmente bilhões de toneladas de solo por erosão — estimativas
          indicam entre 500 milhões e 1 bilhão de toneladas por ano só na agricultura. Esse
          material carregado pelos rios provoca o <strong>assoreamento</strong> de rios, lagos e
          reservatórios, prejudicando a navegação, reduzindo a capacidade de geração de
          hidroeletricidade e aumentando o risco de inundações.
        </p>
        <p>
          As regiões mais afetadas incluem o Cerrado (onde o avanço da soja sobre solos arenosos
          e ácidos é problemático), o Nordeste semiárido (onde a degradação das caatingas leva
          à desertificação em municípios dos estados do Piauí, Ceará, Rio Grande do Norte e
          Paraíba) e a Mata Atlântica (onde o desmatamento histórico de encostas gera erosão
          e deslizamentos).
        </p>
        <p>
          O <strong>Polígono das Secas</strong> e os chamados <strong>Núcleos de
          Desertificação</strong> no Nordeste — como os de Cabrobó (PE), Gilbués (PI) e
          Irauçuba (CE) — são exemplos graves de degradação dos solos, resultado da conjugação
          de clima semiárido, desmatamento, sobrepastoreio e práticas agrícolas inadequadas.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Degradação e desertificação</span>
        <h2>6. Degradação dos solos e desertificação</h2>
        <p>
          A <strong>degradação do solo</strong> é o processo pelo qual o solo perde sua
          capacidade produtiva, seja pela erosão, compactação, salinização, contaminação química
          ou empobrecimento biológico. Quando a degradação é intensa e irreversível em regiões
          áridas e semiáridas, pode evoluir para a <strong>desertificação</strong>.
        </p>
        <p>
          A desertificação não é o avanço natural dos desertos, mas a degradação de terras em
          regiões áridas, semiáridas e subúmidas secas causada principalmente pela ação humana.
          Segundo a ONU (Convenção das Nações Unidas de Combate à Desertificação — UNCCD), cerca
          de 2 bilhões de pessoas vivem em terras secas e 1,5 bilhão de pessoas são afetadas pela
          degradação do solo.
        </p>
        <p>
          Outros problemas graves de degradação incluem:
        </p>
        <ul style={{ paddingLeft: "1.4rem", lineHeight: "1.9" }}>
          <li>
            <strong>Salinização:</strong> acumulação de sais solúveis no solo, causada por
            irrigação inadequada. Afeta principalmente o semiárido nordestino, especialmente o
            Vale do São Francisco onde a irrigação para fruticultura levou à salinização de
            extensas áreas.
          </li>
          <li>
            <strong>Compactação:</strong> redução dos poros do solo pelo uso de maquinário pesado,
            prejudicando a infiltração da água e o desenvolvimento das raízes.
          </li>
          <li>
            <strong>Contaminação:</strong> por agrotóxicos, metais pesados (mineração) e
            resíduos industriais, comprometendo a qualidade dos solos e das águas subterrâneas.
          </li>
        </ul>
      </section>

      {/* SVG — Ciclo de degradação do solo */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="680" height="320" fill="#fef5e7" />
          {/* Nó central */}
          <ellipse cx="340" cy="160" rx="80" ry="45" fill="#e74c3c" />
          <text x="340" y="155" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Degradação</text>
          <text x="340" y="172" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">do Solo</text>
          {/* Causa 1: Desmatamento */}
          <ellipse cx="100" cy="80" rx="75" ry="35" fill="#e67e22" />
          <text x="100" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Desmatamento</text>
          <text x="100" y="91" textAnchor="middle" fill="white" fontSize="11">e queimadas</text>
          <line x1="170" y1="100" x2="265" y2="140" stroke="#e67e22" strokeWidth="2" markerEnd="url(#arr)" />
          {/* Causa 2: Sobrepastoreio */}
          <ellipse cx="340" cy="40" rx="80" ry="32" fill="#f39c12" />
          <text x="340" y="35" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Sobrepastoreio</text>
          <text x="340" y="52" textAnchor="middle" fill="white" fontSize="11">e compactação</text>
          <line x1="340" y1="72" x2="340" y2="115" stroke="#f39c12" strokeWidth="2" />
          {/* Causa 3: Agricultura inadequada */}
          <ellipse cx="570" cy="80" rx="90" ry="35" fill="#c0392b" />
          <text x="570" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Agricultura</text>
          <text x="570" y="91" textAnchor="middle" fill="white" fontSize="11">inadequada</text>
          <line x1="485" y1="100" x2="415" y2="140" stroke="#c0392b" strokeWidth="2" />
          {/* Consequência 1: Erosão */}
          <ellipse cx="100" cy="250" rx="75" ry="35" fill="#7f8c8d" />
          <text x="100" y="245" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Erosão</text>
          <text x="100" y="261" textAnchor="middle" fill="white" fontSize="11">acelerada</text>
          <line x1="265" y1="185" x2="170" y2="225" stroke="#7f8c8d" strokeWidth="2" />
          {/* Consequência 2: Desertificação */}
          <ellipse cx="340" cy="290" rx="80" ry="28" fill="#95a5a6" />
          <text x="340" y="287" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Desertificação</text>
          <text x="340" y="303" textAnchor="middle" fill="white" fontSize="11">e improdutividade</text>
          <line x1="340" y1="205" x2="340" y2="262" stroke="#95a5a6" strokeWidth="2" />
          {/* Consequência 3: Assoreamento */}
          <ellipse cx="570" cy="250" rx="90" ry="35" fill="#2c3e50" />
          <text x="570" y="245" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Assoreamento</text>
          <text x="570" y="261" textAnchor="middle" fill="white" fontSize="11">de rios e lagos</text>
          <line x1="415" y1="185" x2="485" y2="225" stroke="#2c3e50" strokeWidth="2" />
        </svg>
        <figcaption>Figura 2 — Ciclo de degradação do solo: causas antrópicas e consequências ambientais</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conservação do solo</span>
        <h2>7. Técnicas de conservação do solo</h2>
        <p>
          A conservação do solo visa manter ou restaurar sua capacidade produtiva e reduzir as
          perdas por erosão. As principais técnicas são:
        </p>
        <p>
          <strong>Terraceamento:</strong> construção de patamares em curva de nível nas encostas,
          reduzindo a velocidade do escoamento da água e retendo o solo. Muito usado em regiões
          montanhosas (arroz em terraços no Sudeste Asiático).
        </p>
        <p>
          <strong>Plantio em curva de nível:</strong> plantar linhas de cultura seguindo as curvas
          de nível do terreno, em vez de seguir a linha de declive. Isso reduz a velocidade do
          escoamento e a erosão.
        </p>
        <p>
          <strong>Cobertura vegetal do solo (mulching):</strong> manter o solo sempre coberto
          por vegetação ou palhada para protegê-lo do impacto das gotas de chuva (splash) e
          reduzir o escoamento superficial.
        </p>
        <p>
          <strong>Plantio direto:</strong> técnica em que o solo não é revolvido (não se usa
          arado), reduzindo a erosão e preservando a biota do solo. Amplamente adotado no Brasil,
          especialmente no Paraná e São Paulo.
        </p>
        <p>
          <strong>Rotação de culturas:</strong> alternância de culturas em uma mesma área para
          manter a matéria orgânica, reduzir pragas e doenças, e melhorar a estrutura do solo.
        </p>
        <p>
          <strong>Adubação verde:</strong> cultivo de leguminosas (feijão-de-porco, crotalária)
          para incorporar nitrogênio e matéria orgânica ao solo.
        </p>
        <p>
          <strong>Reflorestamento de matas ciliares:</strong> a vegetação nas margens dos rios
          protege o solo contra a erosão fluvial e reduz o assoreamento dos cursos d'água.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Técnicas de conservação do solo e seus objetivos</caption>
            <thead>
              <tr>
                <th>Técnica</th>
                <th>Principal objetivo</th>
                <th>Tipo de área</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Terraceamento</td>
                <td>Reduzir escoamento em encostas</td>
                <td>Área agrícola íngreme</td>
              </tr>
              <tr>
                <td>Plantio em curva de nível</td>
                <td>Diminuir velocidade da água</td>
                <td>Área agrícola com declividade</td>
              </tr>
              <tr>
                <td>Plantio direto</td>
                <td>Preservar estrutura e biota do solo</td>
                <td>Grande agricultura mecanizada</td>
              </tr>
              <tr>
                <td>Rotação de culturas</td>
                <td>Manter fertilidade e matéria orgânica</td>
                <td>Toda agricultura</td>
              </tr>
              <tr>
                <td>Reflorestamento ciliar</td>
                <td>Proteger margens e reduzir assoreamento</td>
                <td>Margens de rios e represas</td>
              </tr>
              <tr>
                <td>Cobertura morta (mulching)</td>
                <td>Proteger da erosão laminar</td>
                <td>Horticultura, fruticultura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Solo e agricultura no Brasil</span>
        <h2>8. Solo e produção agrícola brasileira</h2>
        <p>
          O Brasil é um dos maiores produtores agrícolas do mundo, responsável por cerca de 10%
          das exportações globais de alimentos. A expansão agrícola, especialmente no Cerrado
          (fronteira agrícola moderna), transformou solos naturalmente ácidos e de baixa
          fertilidade em áreas altamente produtivas por meio da <strong>correção do solo</strong>:
        </p>
        <p>
          <strong>Calagem:</strong> aplicação de calcário (CaCO₃) para neutralizar a acidez do
          solo e elevar o pH. O calcário também fornece cálcio e magnésio e ativa microrganismos
          benéficos. O Brasil é pioneiro mundial nessa técnica para solos tropicais.
        </p>
        <p>
          <strong>Adubação mineral:</strong> reposição de nutrientes (nitrogênio, fósforo, potássio
          — NPK) removidos pelas colheitas. O Brasil importa grande parte do potássio e do
          fertilizante nitrogenado.
        </p>
        <p>
          <strong>Fixação biológica de nitrogênio:</strong> o Brasil desenvolveu inoculantes
          com bactérias do gênero <em>Bradyrhizobium</em> para fixar nitrogênio atmosférico nas
          raízes da soja, reduzindo drasticamente o uso de fertilizantes nitrogenados. Essa
          tecnologia economiza bilhões de dólares anualmente.
        </p>
        <p>
          O resultado foi a chamada <strong>"Revolução do Cerrado"</strong>: transformação de
          uma savana com solo pobre em uma das maiores áreas produtoras de soja, milho, algodão
          e cana-de-açúcar do mundo, a partir dos anos 1970.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legislação ambiental</span>
        <h2>9. Solo, legislação e sustentabilidade</h2>
        <p>
          A legislação brasileira inclui instrumentos importantes para a proteção dos solos:
        </p>
        <p>
          <strong>Código Florestal (Lei 12.651/2012):</strong> obriga os proprietários rurais a
          manterem Áreas de Preservação Permanente (APPs — margens de rios, encostas íngremes,
          topos de morro) e a Reserva Legal (20% a 80% da propriedade, dependendo do bioma). As
          APPs protegem solos frágeis e mananciais.
        </p>
        <p>
          <strong>Política Nacional do Meio Ambiente (Lei 6.938/1981):</strong> estabelece o
          princípio do "poluidor-pagador" e a responsabilidade por danos ambientais, incluindo
          a degradação do solo.
        </p>
        <p>
          <strong>Programa Nacional de Combate à Desertificação (PAN-Brasil):</strong> ações
          governamentais para recuperar solos degradados no semiárido nordestino.
        </p>
        <p>
          A ideia da <strong>sustentabilidade agrícola</strong> propõe que a produção de alimentos
          seja feita sem comprometer os recursos naturais para as gerações futuras — em especial
          a qualidade e quantidade do solo, da água e da biodiversidade.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Síntese: solo como bem comum e recurso estratégico</h2>
        <p>
          O solo é um recurso natural não renovável na escala de tempo humana: sua formação leva
          séculos a milênios, mas sua destruição pode ocorrer em poucos anos de uso inadequado.
          Cada centímetro de solo perdido para a erosão representa décadas de processos
          pedogenéticos que não podem ser revertidos rapidamente.
        </p>
        <p>
          No contexto do ENEM e da discussão ambiental contemporânea, o tema do solo conecta
          questões de segurança alimentar (solos produtivos são essenciais para alimentar 8
          bilhões de pessoas), mudanças climáticas (solos armazenam mais carbono do que a
          atmosfera e toda a vegetação juntos), recursos hídricos (solos saudáveis infiltram e
          filtram a água) e desigualdade social (populações rurais pobres são as mais afetadas
          pela degradação dos solos). Proteger os solos é, portanto, uma questão de
          sustentabilidade, justiça social e soberania alimentar.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              Os Latossolos são o tipo de solo mais comum no Brasil, cobrindo cerca de 40% do
              território. Sobre as características desses solos, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "São solos rasos, de difícil mecanização e alta fertilidade natural" },
            { letter: "b", text: "São solos profundos, bem estruturados, mas ácidos e de baixa fertilidade natural, tornando-se produtivos com calagem e adubação", correct: true },
            { letter: "c", text: "São solos jovens, em processo de formação, muito susceptíveis a deslizamentos em encostas" },
            { letter: "d", text: "São solos altamente férteis, formados sobre rochas basálticas, usados historicamente para a cafeicultura no Paraná" },
            { letter: "e", text: "São solos arenosos, com baixa capacidade de retenção de água, encontrados apenas no litoral" },
          ]}
          resolution={
            <p>
              Os Latossolos são solos muito intemperizados, profundos (muitas vezes mais de 2
              metros) e bem estruturados, o que facilita a mecanização agrícola. Porém, por serem
              muito lixiviados (nutrientes lavados pela chuva intensa do clima tropical), são
              naturalmente ácidos e pobres em nutrientes. Com a aplicação de calcário (calagem
              para corrigir a acidez) e adubação mineral, tornam-se altamente produtivos. São a
              base da agricultura do Cerrado. Os solos férteis sobre basalto são os Nitossolos
              (Terra Roxa); os solos jovens em encostas são os Cambissolos.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A camada do solo mais vulnerável à erosão e mais importante para a fertilidade e a
              vida dos organismos do solo é:
            </p>
          }
          options={[
            { letter: "a", text: "Horizonte B, rico em argilas e óxidos de ferro" },
            { letter: "b", text: "Horizonte C (saprolito), formado por rocha em decomposição" },
            { letter: "c", text: "Horizonte A (topsoil), rico em matéria orgânica e organismos vivos", correct: true },
            { letter: "d", text: "Horizonte R, a rocha-mãe inalterada" },
            { letter: "e", text: "Horizonte O, formado exclusivamente por rochas basálticas" },
          ]}
          resolution={
            <p>
              O Horizonte A, também chamado de topsoil, é a camada superficial do solo mineral.
              É a mais rica em matéria orgânica (húmus), nutrientes e organismos vivos
              (minhocas, fungos, bactérias), sendo portanto a mais fértil. É também a mais
              exposta à ação da erosão, pois está na superfície. A perda do Horizonte A por
              erosão significa a perda da camada mais produtiva do solo — processo que pode
              levar séculos para ser revertido naturalmente. O Horizonte B acumula minerais
              lixiviados do horizonte A mas tem menos matéria orgânica e atividade biológica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A desertificação é um grave problema ambiental que afeta
              principalmente o Nordeste semiárido brasileiro. Sobre esse fenômeno, é INCORRETO
              afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A desertificação é causada principalmente pela ação humana, como desmatamento, sobrepastoreio e uso inadequado da terra em regiões áridas e semiáridas" },
            { letter: "b", text: "O Brasil possui núcleos de desertificação em estados como Piauí, Ceará, Pernambuco e Rio Grande do Norte" },
            { letter: "c", text: "A desertificação é o processo natural de expansão dos desertos, independente da ação humana", correct: true },
            { letter: "d", text: "A salinização dos solos irrigados é uma das formas de degradação que contribui para a desertificação no semiárido" },
            { letter: "e", text: "A recuperação de áreas em processo de desertificação envolve reflorestamento com espécies nativas e práticas agrícolas sustentáveis" },
          ]}
          resolution={
            <p>
              A afirmação incorreta é a alternativa C. Desertificação NÃO é a expansão natural
              dos desertos. Segundo a Convenção das Nações Unidas de Combate à Desertificação
              (UNCCD), desertificação é a degradação da terra em zonas áridas, semiáridas e
              subúmidas secas resultante de vários fatores, entre eles as variações climáticas
              e as atividades humanas. A causa principal é antrópica: desmatamento, sobrepastoreio,
              irrigação inadequada e queimadas. Os desertos naturais não avançam sobre regiões
              úmidas — o que ocorre é a degradação progressiva de terras secas pelo uso humano
              inadequado.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O terraceamento é uma técnica de conservação do solo amplamente utilizada em regiões
              agrícolas com relevo ondulado. A principal função do terraceamento é:
            </p>
          }
          options={[
            { letter: "a", text: "Aumentar a profundidade do horizonte B para facilitar o enraizamento das plantas" },
            { letter: "b", text: "Eliminar a acidez do solo pela incorporação de calcário nas camadas profundas" },
            { letter: "c", text: "Reduzir a velocidade do escoamento superficial da água nas encostas, retendo o solo e favorecendo a infiltração", correct: true },
            { letter: "d", text: "Aumentar a temperatura do solo e acelerar a decomposição da matéria orgânica" },
            { letter: "e", text: "Eliminar a compactação do solo pelo tráfego de máquinas pesadas" },
          ]}
          resolution={
            <p>
              O terraceamento consiste na construção de patamares horizontais (terraços) ao longo
              das curvas de nível em encostas. Esses terraços interrompem o fluxo da água morro
              abaixo, reduzindo sua velocidade e, consequentemente, sua capacidade erosiva.
              A água retida nos terraços tem tempo para se infiltrar no solo em vez de escorrer
              pela superfície e carregar o material do topo. Além de reduzir a erosão, o
              terraceamento melhora o aproveitamento das chuvas pela cultura. Calagem corrige
              acidez; plantio direto reduz compactação — essas são outras técnicas, com outros
              objetivos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) A chamada "Revolução do Cerrado" a partir dos anos 1970 transformou
              o Brasil em uma potência agrícola global ao viabilizar a produção em solos
              naturalmente ácidos e de baixa fertilidade. Esse processo envolveu tecnologias
              desenvolvidas principalmente pela Embrapa. Analise os fatores que possibilitaram
              essa transformação e assinale a alternativa CORRETA:
            </p>
          }
          options={[
            { letter: "a", text: "A irrigação intensiva com águas subterrâneas do Aquífero Guarani, que neutralizou naturalmente a acidez dos Latossolos" },
            { letter: "b", text: "O desenvolvimento de sementes geneticamente modificadas resistentes à acidez, dispensando qualquer correção do solo" },
            { letter: "c", text: "A aplicação em larga escala de calcário para corrigir a acidez (calagem), combinada ao desenvolvimento de cultivares adaptadas ao Cerrado e à técnica de fixação biológica de nitrogênio pela soja", correct: true },
            { letter: "d", text: "A substituição dos Latossolos por Nitossolos (Terra Roxa) trazidos do Paraná, que são naturalmente férteis" },
            { letter: "e", text: "A construção de hidrelétricas que regularam o regime das chuvas no Cerrado, tornando o clima mais favorável à agricultura" },
          ]}
          resolution={
            <p>
              A Revolução do Cerrado baseou-se em três pilares tecnológicos interligados: (1) a
              calagem em larga escala, que neutralizou a acidez dos Latossolos e disponibilizou
              nutrientes antes imobilizados pelo pH baixo; (2) o desenvolvimento de cultivares de
              soja, milho e outras culturas adaptadas às condições tropicais do Cerrado (dias curtos,
              temperatura elevada) pela Embrapa Soja e outras instituições; e (3) a fixação
              biológica de nitrogênio pela simbiose entre a soja e bactérias do gênero
              Bradyrhizobium, desenvolvida pela Embrapa e que eliminou a necessidade de fertilizantes
              nitrogenados caros para essa cultura. O Aquífero Guarani não está diretamente ligado
              à correção da acidez; não é possível "transferir" tipos de solo; hidrelétricas não
              regulam o regime de chuvas.
            </p>
          }
        />
      </section>
    </article>
  );
}
