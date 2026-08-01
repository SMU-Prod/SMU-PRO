"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 20</span>
          <h1>Desenvolvimento sustentável, Agenda 2030 e economia verde</h1>
          <p>
            O conceito de desenvolvimento sustentável emerge como resposta à crise ambiental global
            e à percepção de que o modelo de crescimento econômico do século XX é insustentável a
            longo prazo. Propondo a conciliação entre crescimento econômico, equidade social e
            preservação ambiental, o desenvolvimento sustentável tornou-se o paradigma central das
            políticas internacionais, culminando na Agenda 2030 e nos 17 Objetivos de Desenvolvimento
            Sustentável (ODS) da ONU, aprovados em 2015 por 193 países-membros.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Origem do conceito</span>
        <h2>1. O que é desenvolvimento sustentável?</h2>
        <p>
          O termo "desenvolvimento sustentável" foi popularizado pelo Relatório Brundtland
          (Nosso Futuro Comum), publicado em 1987 pela Comissão Mundial sobre Meio Ambiente e
          Desenvolvimento da ONU. A definição clássica afirma que desenvolvimento sustentável é
          aquele que "atende às necessidades do presente sem comprometer a capacidade das gerações
          futuras de atenderem às suas próprias necessidades".
        </p>
        <p>
          O conceito é estruturado sobre três pilares interdependentes, conhecidos como o "tripé
          da sustentabilidade" ou triple bottom line: a dimensão econômica (eficiência e
          crescimento), a dimensão social (equidade e inclusão) e a dimensão ambiental (integridade
          dos ecossistemas). Mais recentemente, autores e organismos internacionais acrescentaram
          a dimensão institucional/política (boa governança) como quarto pilar.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Os pilares do desenvolvimento sustentável</caption>
            <thead>
              <tr>
                <th>Pilar</th>
                <th>Foco</th>
                <th>Exemplos de indicadores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Econômico</td>
                <td>Crescimento com eficiência e inovação</td>
                <td>PIB verde, produtividade por unidade de recurso</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Equidade, saúde, educação, redução da pobreza</td>
                <td>IDH, Gini, acesso a saneamento básico</td>
              </tr>
              <tr>
                <td>Ambiental</td>
                <td>Conservação dos ecossistemas e recursos naturais</td>
                <td>Emissões de CO₂, área desmatada, biodiversidade</td>
              </tr>
              <tr>
                <td>Institucional</td>
                <td>Governança, transparência, participação cidadã</td>
                <td>Índice de percepção de corrupção, acesso à justiça</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Histórico diplomático</span>
        <h2>2. Conferências internacionais e marcos históricos</h2>
        <p>
          A trajetória do desenvolvimento sustentável como agenda global é marcada por grandes
          conferências internacionais. A Conferência de Estocolmo (1972) foi o primeiro encontro
          global sobre meio ambiente, reconhecendo que o desenvolvimento e a proteção ambiental
          estão interligados. A Rio-92 (ECO-92) produziu a Agenda 21, documento de ação para o
          desenvolvimento sustentável no século XXI, e as convenções sobre Biodiversidade e
          Mudanças Climáticas.
        </p>
        <p>
          A Rio+10, em Joanesburgo (2002), focou na implementação prática da Agenda 21. A Rio+20
          (2012), novamente no Rio de Janeiro, debateu a economia verde e resultou no documento
          "O Futuro que Queremos", que deu origem ao processo de elaboração dos Objetivos de
          Desenvolvimento Sustentável. Em 2015, a Assembleia Geral da ONU aprovou simultaneamente
          o Acordo de Paris (clima) e a Agenda 2030 com seus 17 ODS.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Linha do tempo das principais conferências ambientais internacionais</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Conferência / Acordo</th>
                <th>Principal resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1972</td>
                <td>Conferência de Estocolmo</td>
                <td>Criação do PNUMA; reconhecimento da relação ambiente-desenvolvimento</td>
              </tr>
              <tr>
                <td>1987</td>
                <td>Relatório Brundtland</td>
                <td>Definição oficial de desenvolvimento sustentável</td>
              </tr>
              <tr>
                <td>1992</td>
                <td>Rio-92 (ECO-92)</td>
                <td>Agenda 21, Convenção do Clima, Convenção da Biodiversidade</td>
              </tr>
              <tr>
                <td>1997</td>
                <td>Protocolo de Quioto</td>
                <td>Metas vinculantes de redução de GEE para países desenvolvidos</td>
              </tr>
              <tr>
                <td>2000</td>
                <td>Objetivos do Milênio (ODM)</td>
                <td>8 metas sociais globais para 2015</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>Rio+20</td>
                <td>Economia verde; início do processo ODS</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>Agenda 2030 + Acordo de Paris</td>
                <td>17 ODS e meta de limitar aquecimento a 1,5°C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Figure 1 — Os 17 ODS */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" aria-label="Os 17 Objetivos de Desenvolvimento Sustentável da ONU">
          <rect width="700" height="320" fill="#f9f9f9" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">
            Os 17 ODS da Agenda 2030 (ONU, 2015)
          </text>
          {/* Grade de ícones ODS — 6 colunas x 3 linhas */}
          {/* Linha 1: ODS 1-6 */}
          <rect x="10" y="40" width="100" height="60" rx="6" fill="#e5243b" />
          <text x="60" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 1</text>
          <text x="60" y="83" textAnchor="middle" fontSize="10" fill="#fff">Erradicação</text>
          <text x="60" y="95" textAnchor="middle" fontSize="10" fill="#fff">da Pobreza</text>

          <rect x="120" y="40" width="100" height="60" rx="6" fill="#dda63a" />
          <text x="170" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 2</text>
          <text x="170" y="83" textAnchor="middle" fontSize="10" fill="#fff">Fome Zero e</text>
          <text x="170" y="95" textAnchor="middle" fontSize="10" fill="#fff">Agric. Sustentável</text>

          <rect x="230" y="40" width="100" height="60" rx="6" fill="#4c9f38" />
          <text x="280" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 3</text>
          <text x="280" y="83" textAnchor="middle" fontSize="10" fill="#fff">Saúde e</text>
          <text x="280" y="95" textAnchor="middle" fontSize="10" fill="#fff">Bem-Estar</text>

          <rect x="340" y="40" width="100" height="60" rx="6" fill="#c5192d" />
          <text x="390" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 4</text>
          <text x="390" y="83" textAnchor="middle" fontSize="10" fill="#fff">Educação de</text>
          <text x="390" y="95" textAnchor="middle" fontSize="10" fill="#fff">Qualidade</text>

          <rect x="450" y="40" width="100" height="60" rx="6" fill="#ff3a21" />
          <text x="500" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 5</text>
          <text x="500" y="83" textAnchor="middle" fontSize="10" fill="#fff">Igualdade de</text>
          <text x="500" y="95" textAnchor="middle" fontSize="10" fill="#fff">Gênero</text>

          <rect x="560" y="40" width="100" height="60" rx="6" fill="#26bde2" />
          <text x="610" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 6</text>
          <text x="610" y="83" textAnchor="middle" fontSize="10" fill="#fff">Água Potável</text>
          <text x="610" y="95" textAnchor="middle" fontSize="10" fill="#fff">e Saneamento</text>

          {/* Linha 2: ODS 7-12 */}
          <rect x="10" y="115" width="100" height="60" rx="6" fill="#fcc30b" />
          <text x="60" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 7</text>
          <text x="60" y="158" textAnchor="middle" fontSize="10" fill="#fff">Energia Limpa</text>
          <text x="60" y="170" textAnchor="middle" fontSize="10" fill="#fff">e Acessível</text>

          <rect x="120" y="115" width="100" height="60" rx="6" fill="#a21942" />
          <text x="170" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 8</text>
          <text x="170" y="158" textAnchor="middle" fontSize="10" fill="#fff">Trabalho Digno</text>
          <text x="170" y="170" textAnchor="middle" fontSize="10" fill="#fff">e Cresc. Econ.</text>

          <rect x="230" y="115" width="100" height="60" rx="6" fill="#fd6925" />
          <text x="280" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 9</text>
          <text x="280" y="158" textAnchor="middle" fontSize="10" fill="#fff">Indústria,</text>
          <text x="280" y="170" textAnchor="middle" fontSize="10" fill="#fff">Inovação</text>

          <rect x="340" y="115" width="100" height="60" rx="6" fill="#dd1367" />
          <text x="390" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 10</text>
          <text x="390" y="158" textAnchor="middle" fontSize="10" fill="#fff">Redução das</text>
          <text x="390" y="170" textAnchor="middle" fontSize="10" fill="#fff">Desigualdades</text>

          <rect x="450" y="115" width="100" height="60" rx="6" fill="#fd9d24" />
          <text x="500" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 11</text>
          <text x="500" y="158" textAnchor="middle" fontSize="10" fill="#fff">Cidades</text>
          <text x="500" y="170" textAnchor="middle" fontSize="10" fill="#fff">Sustentáveis</text>

          <rect x="560" y="115" width="100" height="60" rx="6" fill="#bf8b2e" />
          <text x="610" y="143" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 12</text>
          <text x="610" y="158" textAnchor="middle" fontSize="10" fill="#fff">Consumo e</text>
          <text x="610" y="170" textAnchor="middle" fontSize="10" fill="#fff">Prod. Responsáveis</text>

          {/* Linha 3: ODS 13-17 */}
          <rect x="65" y="190" width="100" height="60" rx="6" fill="#3f7e44" />
          <text x="115" y="218" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 13</text>
          <text x="115" y="233" textAnchor="middle" fontSize="10" fill="#fff">Ação contra</text>
          <text x="115" y="245" textAnchor="middle" fontSize="10" fill="#fff">Mudança Climática</text>

          <rect x="175" y="190" width="100" height="60" rx="6" fill="#0a97d9" />
          <text x="225" y="218" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 14</text>
          <text x="225" y="233" textAnchor="middle" fontSize="10" fill="#fff">Vida na Água</text>

          <rect x="285" y="190" width="100" height="60" rx="6" fill="#56c02b" />
          <text x="335" y="218" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 15</text>
          <text x="335" y="233" textAnchor="middle" fontSize="10" fill="#fff">Vida Terrestre</text>

          <rect x="395" y="190" width="100" height="60" rx="6" fill="#00689d" />
          <text x="445" y="218" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 16</text>
          <text x="445" y="233" textAnchor="middle" fontSize="10" fill="#fff">Paz, Justiça</text>
          <text x="445" y="245" textAnchor="middle" fontSize="10" fill="#fff">e Instituições</text>

          <rect x="505" y="190" width="100" height="60" rx="6" fill="#19486a" />
          <text x="555" y="218" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">ODS 17</text>
          <text x="555" y="233" textAnchor="middle" fontSize="10" fill="#fff">Parcerias e</text>
          <text x="555" y="245" textAnchor="middle" fontSize="10" fill="#fff">Meios de Impl.</text>

          <text x="350" y="295" textAnchor="middle" fontSize="11" fill="#666">
            Fonte: ONU — Agenda 2030 para o Desenvolvimento Sustentável
          </text>
        </svg>
        <figcaption>
          Os 17 Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030, adotados por 193
          países-membros da ONU em setembro de 2015, com prazo de cumprimento até 2030.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os ODS em detalhe</span>
        <h2>3. A Agenda 2030 e os Objetivos de Desenvolvimento Sustentável</h2>
        <p>
          A Agenda 2030 é um plano de ação global aprovado pela ONU em setembro de 2015, composto
          por 17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas, abrangendo dimensões
          econômicas, sociais e ambientais do desenvolvimento. É uma evolução dos Objetivos de
          Desenvolvimento do Milênio (ODM, 2000-2015) e se distingue por ser universal — aplica-se
          tanto a países desenvolvidos quanto em desenvolvimento.
        </p>
        <p>
          Os ODS abordam temas como erradicação da pobreza (ODS 1), segurança alimentar (ODS 2),
          saúde (ODS 3), educação (ODS 4), igualdade de gênero (ODS 5), água e saneamento (ODS 6),
          energia limpa (ODS 7), trabalho decente (ODS 8), inovação industrial (ODS 9), redução
          das desigualdades (ODS 10), cidades sustentáveis (ODS 11), consumo responsável (ODS 12),
          ação climática (ODS 13), vida na água (ODS 14), vida terrestre (ODS 15), paz e justiça
          (ODS 16) e parcerias globais (ODS 17).
        </p>
        <p>
          O Brasil criou a Comissão Nacional dos ODS para coordenar a implementação da Agenda 2030,
          mas enfrenta desafios significativos: desigualdade de renda (índice de Gini elevado),
          desmatamento, déficit de saneamento básico e fragilidades institucionais comprometem o
          alcance das metas até 2030.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Nova economia</span>
        <h2>4. Economia verde: conceito e aplicações</h2>
        <p>
          A economia verde é um modelo econômico que busca o bem-estar humano e a equidade social,
          ao mesmo tempo em que reduz significativamente os riscos ambientais e a escassez ecológica.
          Segundo o PNUMA, a economia verde é aquela que resulta "em melhoria do bem-estar humano e
          equidade social, enquanto reduz significativamente riscos ambientais e escassez ecológica".
        </p>
        <p>
          Seus pilares práticos incluem: energias renováveis (solar, eólica, hidrelétrica de baixo
          impacto, biomassa); eficiência energética em edificações e transportes; agricultura de baixo
          carbono e orgânica; ecoturismo e serviços ambientais; economia circular (eliminação de
          resíduos pelo redesign de produtos); e pagamento por serviços ambientais (PSA), que
          remunera agricultores e comunidades por preservar florestas e nascentes.
        </p>
        <p>
          No Brasil, o Programa de Produção Sustentável na Agropecuária (ABC+) e o Fundo Amazônia
          são exemplos de iniciativas de economia verde. A matriz elétrica brasileira é uma das mais
          renováveis do mundo, com cerca de 85% da energia gerada de fontes limpas.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Energias do futuro</span>
        <h2>5. Energias renováveis e transição energética</h2>
        <p>
          A transição energética é o processo de substituição dos combustíveis fósseis por fontes
          renováveis de energia. É um dos pilares mais importantes do desenvolvimento sustentável e
          da ação climática, sendo o setor energético responsável por cerca de 73% das emissões
          globais de gases de efeito estufa.
        </p>
        <p>
          A energia solar fotovoltaica teve seus custos reduzidos em mais de 90% na última década,
          tornando-se competitiva com as fontes convencionais. A energia eólica offshore (em alto
          mar) abre novas fronteiras para países com extensas costas litorâneas, como o Brasil. O
          hidrogênio verde, produzido a partir da eletrólise da água com energia renovável, é
          apontado como combustível do futuro para a descarbonização da indústria pesada e do
          transporte de carga.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fontes de energia e características ambientais</caption>
            <thead>
              <tr>
                <th>Fonte</th>
                <th>Tipo</th>
                <th>Emissão de CO₂</th>
                <th>Impactos ambientais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carvão mineral</td>
                <td>Não renovável / fóssil</td>
                <td>Alta (820 gCO₂/kWh)</td>
                <td>Poluição do ar, chuva ácida, mineração</td>
              </tr>
              <tr>
                <td>Petróleo / gás</td>
                <td>Não renovável / fóssil</td>
                <td>Média-alta (490-650 gCO₂/kWh)</td>
                <td>Vazamentos, poluição hídrica e atmosférica</td>
              </tr>
              <tr>
                <td>Nuclear</td>
                <td>Não renovável (urânio)</td>
                <td>Muito baixa (12 gCO₂/kWh)</td>
                <td>Resíduos radioativos de longa duração</td>
              </tr>
              <tr>
                <td>Hidrelétrica</td>
                <td>Renovável</td>
                <td>Variável (4-30 gCO₂/kWh)</td>
                <td>Alagamento de áreas, impacto em rios</td>
              </tr>
              <tr>
                <td>Solar fotovoltaica</td>
                <td>Renovável</td>
                <td>Baixa (41 gCO₂/kWh ciclo de vida)</td>
                <td>Uso de solo, resíduos de painéis</td>
              </tr>
              <tr>
                <td>Eólica</td>
                <td>Renovável</td>
                <td>Muito baixa (11 gCO₂/kWh)</td>
                <td>Ruído, impacto visual, aves</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Figure 2 — Tripé da sustentabilidade */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" aria-label="Tripé da Sustentabilidade">
          <rect width="600" height="300" fill="#f0f7f0" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">
            Tripé da Sustentabilidade
          </text>
          {/* Três círculos sobrepostos */}
          <circle cx="230" cy="140" r="90" fill="#4caf50" fillOpacity="0.45" stroke="#2e7d32" strokeWidth="2" />
          <circle cx="370" cy="140" r="90" fill="#1976d2" fillOpacity="0.45" stroke="#0d47a1" strokeWidth="2" />
          <circle cx="300" cy="200" r="90" fill="#f9a825" fillOpacity="0.45" stroke="#f57f17" strokeWidth="2" />
          {/* Rótulos dos círculos */}
          <text x="185" y="115" textAnchor="middle" fontSize="13" fill="#1b5e20" fontWeight="bold">Ambiental</text>
          <text x="415" y="115" textAnchor="middle" fontSize="13" fill="#0d47a1" fontWeight="bold">Social</text>
          <text x="300" y="265" textAnchor="middle" fontSize="13" fill="#e65100" fontWeight="bold">Econômico</text>
          {/* Centro — sustentável */}
          <text x="300" y="167" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">SUSTENTÁVEL</text>
          {/* Interseções */}
          <text x="248" y="188" textAnchor="middle" fontSize="10" fill="#555">Viável</text>
          <text x="352" y="188" textAnchor="middle" fontSize="10" fill="#555">Justo</text>
          <text x="300" y="142" textAnchor="middle" fontSize="10" fill="#555">Suportável</text>
        </svg>
        <figcaption>
          O tripé da sustentabilidade: o desenvolvimento sustentável só é possível na interseção
          das três dimensões — ambiental, social e econômica. A zona central representa o ideal
          de sustentabilidade plena.
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Circularidade produtiva</span>
        <h2>6. Economia circular e consumo responsável</h2>
        <p>
          A economia linear tradicional segue o modelo "extrair → produzir → descartar". A economia
          circular propõe um modelo em que os resíduos de um processo tornam-se insumos de outro,
          eliminando o conceito de "lixo". Inspirada em ciclos naturais, busca manter os materiais
          em uso pelo maior tempo possível, recuperar e regenerar produtos e materiais ao final de
          cada ciclo de vida.
        </p>
        <p>
          O consumo responsável (ODS 12) envolve padrões de produção e consumo mais sustentáveis.
          Isso inclui reduzir o desperdício de alimentos (um terço de toda a comida produzida no
          mundo é perdida ou desperdiçada), adotar produtos com menor pegada ecológica, preferir
          empresas com responsabilidade socioambiental e questionar a obsolescência programada — a
          prática de fabricar produtos com vida útil artificialmente curta para estimular o consumo.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil e sustentabilidade</span>
        <h2>7. Desenvolvimento sustentável no contexto brasileiro</h2>
        <p>
          O Brasil ocupa posição ambígua no cenário do desenvolvimento sustentável: possui uma das
          maiores biodiversidades do planeta e uma das matrizes elétricas mais renováveis do mundo,
          mas também lidera historicamente os rankings de desmatamento tropical e concentração de
          renda. O índice de Gini brasileiro é um dos mais altos do mundo, revelando profunda
          desigualdade social.
        </p>
        <p>
          Iniciativas relevantes incluem o Pagamento por Serviços Ambientais (PSA), o Programa Bolsa
          Verde (que remunerava famílias em situação de vulnerabilidade por conservar florestas), o
          Cadastro Ambiental Rural (CAR) e o Código Florestal. O desafio central é compatibilizar
          o desenvolvimento do agronegócio — setor fundamental para a economia — com a conservação
          dos biomas e o bem-estar das populações tradicionais.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Indicadores de sustentabilidade</span>
        <h2>8. Indicadores e métricas de desenvolvimento sustentável</h2>
        <p>
          Medir o desenvolvimento sustentável exige ir além do Produto Interno Bruto (PIB), que
          mede apenas a produção econômica sem considerar desigualdade, bem-estar ou degradação
          ambiental. O Índice de Desenvolvimento Humano (IDH), calculado pelo PNUD, incorpora
          saúde (expectativa de vida), educação (anos de escolaridade) e renda per capita.
        </p>
        <p>
          Outros indicadores relevantes são a Pegada Ecológica (mede a área necessária para sustentar
          o estilo de vida de uma população), o PIB Verde (desconta a degradação ambiental do PIB
          convencional), o Índice de Progresso Social (IPS) e os relatórios Planeta Vivo do WWF.
          O Acordo de Paris criou um sistema de Contribuições Nacionalmente Determinadas (NDCs), que
          funcionam como metas voluntárias de cada país para reduzir emissões.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais indicadores de desenvolvimento sustentável</caption>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>O que mede</th>
                <th>Organismo responsável</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IDH</td>
                <td>Saúde, educação e renda</td>
                <td>PNUD (ONU)</td>
              </tr>
              <tr>
                <td>Pegada Ecológica</td>
                <td>Demanda humana sobre ecossistemas</td>
                <td>Global Footprint Network</td>
              </tr>
              <tr>
                <td>Índice de Gini</td>
                <td>Desigualdade de renda</td>
                <td>Banco Mundial / IBGE</td>
              </tr>
              <tr>
                <td>Índice de Progresso Social</td>
                <td>Necessidades humanas, bem-estar, oportunidades</td>
                <td>Social Progress Imperative</td>
              </tr>
              <tr>
                <td>PIB Verde</td>
                <td>Crescimento econômico descontado do capital natural</td>
                <td>OCDE / bancos centrais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desafios globais</span>
        <h2>9. Obstáculos e críticas ao desenvolvimento sustentável</h2>
        <p>
          Apesar do avanço do discurso sustentável, críticas importantes são levantadas. O conceito
          de "sustentabilidade fraca" aceita a substituição do capital natural por capital humano ou
          físico, enquanto a "sustentabilidade forte" defende que determinados recursos naturais são
          insubstituíveis. O decrescimento é uma corrente que questiona a própria ideia de
          crescimento econômico como objetivo, propondo uma redução planejada da produção e do
          consumo nos países ricos.
        </p>
        <p>
          O greenwashing (lavagem verde) é a prática de empresas e governos que utilizam discurso
          ambiental sem implementar mudanças reais, como forma de marketing enganoso. A justiça
          climática questiona quem deve pagar pela descarbonização: os países historicamente mais
          poluidores (nações industrializadas do Norte) ou os que emitem mais hoje (China, Índia)?
          Essa tensão está no centro das negociações das COPs climáticas.
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
              O Relatório Brundtland (1987) é um marco histórico na consolidação do conceito de
              desenvolvimento sustentável. De acordo com esse documento, qual é a definição correta
              de desenvolvimento sustentável?
            </p>
          }
          options={[
            { letter: "a", text: "Desenvolvimento que prioriza o crescimento econômico acelerado, ignorando fatores sociais e ambientais para maximizar o bem-estar das gerações atuais." },
            { letter: "b", text: "Desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atenderem às suas próprias necessidades.", correct: true },
            { letter: "c", text: "Desenvolvimento que preserva integralmente todos os recursos naturais para o uso exclusivo das gerações futuras, sem permitir exploração no presente." },
            { letter: "d", text: "Desenvolvimento baseado exclusivamente em energias renováveis e na eliminação total da atividade industrial." },
            { letter: "e", text: "Desenvolvimento que substitui progressivamente os recursos naturais por tecnologia, eliminando a dependência da natureza." },
          ]}
          resolution={
            <p>
              A definição clássica de desenvolvimento sustentável, consagrada pelo Relatório
              Brundtland em 1987, é a que consta na alternativa B: "atender às necessidades do
              presente sem comprometer a capacidade das gerações futuras de atenderem às suas
              próprias necessidades". Essa definição equilibra as necessidades atuais com a
              responsabilidade intergeracional, reconhecendo que desenvolvimento econômico e social
              é necessário, mas deve ocorrer dentro dos limites da capacidade de suporte dos
              ecossistemas.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Agenda 2030, aprovada pela ONU em 2015, estabeleceu os Objetivos de Desenvolvimento
              Sustentável (ODS). Sobre a Agenda 2030 e os ODS, assinale a alternativa correta.
            </p>
          }
          options={[
            { letter: "a", text: "A Agenda 2030 é composta por 8 objetivos e aplica-se exclusivamente a países em desenvolvimento, isentando as nações ricas de responsabilidades." },
            { letter: "b", text: "Os ODS substituíram apenas o Protocolo de Quioto, focando exclusivamente na redução de emissões de gases de efeito estufa." },
            { letter: "c", text: "A Agenda 2030 estabelece 17 ODS e 169 metas, é universal (aplica-se a todos os países) e abrange dimensões econômicas, sociais e ambientais do desenvolvimento.", correct: true },
            { letter: "d", text: "Os ODS têm caráter juridicamente vinculante, obrigando todos os países a cumprirem as 169 metas sob pena de sanções econômicas." },
            { letter: "e", text: "A Agenda 2030 é restrita ao continente africano, onde os desafios de desenvolvimento são mais urgentes." },
          ]}
          resolution={
            <p>
              A Agenda 2030 é um documento universal, adotado por 193 países-membros da ONU em
              setembro de 2015. Ela estabelece 17 Objetivos de Desenvolvimento Sustentável (ODS)
              e 169 metas interconectadas que abordam dimensões econômicas, sociais e ambientais.
              Diferentemente dos ODM (que se aplicavam principalmente a países em desenvolvimento),
              os ODS são universais. Entretanto, eles não têm caráter juridicamente vinculante —
              são compromissos voluntários dos Estados. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A economia verde propõe um modelo alternativo ao sistema econômico
              convencional baseado em combustíveis fósseis. Sobre esse modelo, analise as afirmativas:
              <br /><br />
              I. A economia verde busca o crescimento econômico dissociado do aumento das emissões
              de carbono e da degradação dos ecossistemas, através de eficiência energética e
              energias renováveis.<br />
              II. O Pagamento por Serviços Ambientais (PSA) é um instrumento de economia verde que
              remunera comunidades e agricultores pela conservação de recursos naturais, como
              florestas e mananciais.<br />
              III. A economia verde rejeita totalmente a atividade agrícola e industrial, propondo
              o retorno a sociedades pré-industriais de subsistência.
              <br /><br />
              Estão corretas apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas." },
            { letter: "b", text: "III apenas." },
            { letter: "c", text: "I e II apenas.", correct: true },
            { letter: "d", text: "II e III apenas." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A afirmativa I é verdadeira: a economia verde busca o desacoplamento entre crescimento
              econômico e impacto ambiental, utilizando tecnologias limpas e eficientes. A afirmativa
              II também é verdadeira: o PSA é um dos principais instrumentos práticos de economia
              verde, presente em países como Brasil, Costa Rica e México. A afirmativa III é falsa:
              a economia verde não rejeita a atividade econômica — ao contrário, propõe transformá-la
              para que seja mais eficiente e sustentável, mantendo produção industrial e agrícola com
              menor impacto ambiental. A resposta correta é a alternativa C (I e II apenas).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O conceito de "greenwashing" tem se tornado cada vez mais relevante no debate sobre
              sustentabilidade corporativa. Qual das alternativas abaixo melhor define esse conceito
              e apresenta um exemplo correto?
            </p>
          }
          options={[
            { letter: "a", text: "Greenwashing refere-se ao processo de pintar instalações industriais de verde para reduzir o impacto visual no meio ambiente." },
            { letter: "b", text: "É a prática de empresas e governos que adotam discurso ambiental sem implementar mudanças reais, utilizando marketing enganoso para parecerem sustentáveis — por exemplo, uma empresa petrolífera que patrocina eventos ambientais mas expande sua exploração de combustíveis fósseis.", correct: true },
            { letter: "c", text: "Refere-se ao processo de lavar produtos químicos tóxicos em rios para diluí-los e reduzir sua concentração." },
            { letter: "d", text: "É o nome técnico dado à coleta seletiva de lixo orgânico para compostagem em escala industrial." },
            { letter: "e", text: "Greenwashing é uma certificação internacional concedida a empresas que atingem metas de redução de carbono." },
          ]}
          resolution={
            <p>
              Greenwashing (lavagem verde) é a prática pela qual empresas, governos ou organizações
              utilizam discurso, imagem ou campanhas de marketing com apelo ambiental sem que haja
              correspondência em práticas reais de sustentabilidade. O objetivo é melhorar a reputação
              perante consumidores e investidores sem incorrer nos custos de mudanças efetivas.
              Exemplos incluem: empresas de fast-fashion que afirmam usar materiais "ecológicos"
              enquanto mantêm produção em massa insustentável; companhias de aviação que vendem
              "créditos de carbono" sem reduzir efetivamente suas emissões; e municípios que declaram
              metas climáticas ambiciosas sem implementar políticas concretas. A alternativa B é
              a correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O Acordo de Paris (2015) estabeleceu um novo paradigma para a
              diplomacia climática global. Sobre esse acordo e os mecanismos de ação climática,
              assinale a alternativa que apresenta afirmação correta.
            </p>
          }
          options={[
            { letter: "a", text: "O Acordo de Paris substituiu o Protocolo de Quioto e impõe metas juridicamente vinculantes e uniformes de redução de emissões para todos os países, sob pena de sanções econômicas." },
            { letter: "b", text: "O acordo estabelece como meta limitar o aquecimento global a no máximo 2°C acima dos níveis pré-industriais, com esforços para limitar a 1,5°C, por meio de Contribuições Nacionalmente Determinadas (NDCs) voluntárias de cada país.", correct: true },
            { letter: "c", text: "O Acordo de Paris aplica-se exclusivamente a países desenvolvidos, eximindo nações em desenvolvimento de qualquer compromisso com a redução de emissões de gases de efeito estufa." },
            { letter: "d", text: "A COP (Conferência das Partes) é um organismo permanente com sede em Paris que fiscaliza e pune governos que descumprem as metas climáticas." },
            { letter: "e", text: "O acordo prevê que todos os países devem zerar suas emissões de carbono até 2030, sem distinção entre nações desenvolvidas e em desenvolvimento." },
          ]}
          resolution={
            <p>
              O Acordo de Paris (adotado na COP21, em dezembro de 2015, em vigor desde novembro de
              2016) estabelece como meta global limitar o aumento da temperatura média do planeta a
              bem abaixo de 2°C em relação aos níveis pré-industriais, com esforços para limitá-la
              a 1,5°C. O mecanismo central são as Contribuições Nacionalmente Determinadas (NDCs),
              compromissos voluntários de cada país que devem ser revisados e aprimorados
              progressivamente. Ao contrário do Protocolo de Quioto, o Acordo de Paris é universal
              (todos os países participam) e não prevê sanções para descumprimento das NDCs — seu
              enforcement é baseado em transparência e pressão internacional. A meta de emissões zero
              é para 2050, não 2030. A alternativa B está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
