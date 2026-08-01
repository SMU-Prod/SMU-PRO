"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 27</span>
          <h1>Agricultura moderna, agronegócio e agricultura familiar</h1>
          <p>
            A produção agrícola brasileira e mundial é marcada por uma profunda dualidade: de um lado, o
            agronegócio altamente mecanizado e voltado para a exportação; de outro, a agricultura familiar,
            responsável por boa parte dos alimentos que chegam à mesa dos brasileiros. Compreender essas duas
            lógicas produtivas — suas origens, técnicas, impactos e conflitos — é essencial para entender o
            Brasil contemporâneo e as questões do ENEM sobre espaço agrário, desenvolvimento rural e soberania
            alimentar.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto histórico</span>
        <h2>1. A modernização da agricultura no século XX</h2>
        <p>
          A partir da segunda metade do século XX, a agricultura passou por uma transformação radical
          conhecida como <strong>Revolução Verde</strong> (décadas de 1960–1970). Patrocinada por governos e
          organismos internacionais, essa revolução introduziu sementes de alto rendimento, uso intensivo de
          fertilizantes químicos, pesticidas e irrigação em larga escala. O objetivo declarado era aumentar a
          produção de alimentos e acabar com a fome no mundo, especialmente em países como Índia, México e
          Brasil.
        </p>
        <p>
          No Brasil, a modernização agrícola ocorreu de forma <strong>seletiva e excludente</strong>: grandes
          proprietários tiveram acesso ao crédito rural subsidiado, às novas tecnologias e à assistência
          técnica do Estado, enquanto pequenos agricultores foram marginalizados. Esse processo aprofundou a
          concentração fundiária e acelerou o êxodo rural, especialmente no Nordeste e no Sul do país.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Revolução Verde: características e impactos</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Características</th>
                <th>Impactos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tecnologia</td>
                <td>Sementes híbridas, mecanização, agroquímicos</td>
                <td>Aumento de produtividade; dependência de insumos</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Crédito concentrado em grandes propriedades</td>
                <td>Exclusão do pequeno agricultor; êxodo rural</td>
              </tr>
              <tr>
                <td>Ambiental</td>
                <td>Monoculturas extensas, uso intensivo de água</td>
                <td>Erosão, contaminação do solo e da água</td>
              </tr>
              <tr>
                <td>Econômico</td>
                <td>Integração ao mercado global de commodities</td>
                <td>Geração de divisas; vulnerabilidade às cotações internacionais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agronegócio</span>
        <h2>2. O agronegócio: conceito, estrutura e importância</h2>
        <p>
          O termo <strong>agronegócio</strong> (ou <em>agribusiness</em>) foi cunhado nos anos 1950 nos
          Estados Unidos para descrever o conjunto de atividades que envolvem a produção agropecuária e suas
          cadeias produtivas: fornecedores de insumos, produção rural, processamento industrial,
          armazenamento, distribuição e comercialização. No Brasil, o agronegócio representa hoje cerca de
          25% do PIB e é o principal responsável pelo saldo positivo da balança comercial.
        </p>
        <p>
          As principais commodities do agronegócio brasileiro são: <strong>soja</strong> (o Brasil é o
          maior exportador mundial), <strong>carne bovina e de frango</strong>, <strong>açúcar e
          etanol</strong>, <strong>café</strong>, <strong>celulose e papel</strong> e <strong>milho</strong>.
          A concentração produtiva ocorre especialmente no <strong>Centro-Oeste</strong> (Mato Grosso,
          Goiás, Mato Grosso do Sul) e no <strong>MATOPIBA</strong> (Maranhão, Tocantins, Piauí e Bahia),
          fronteira agrícola em expansão sobre o Cerrado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais produtos do agronegócio brasileiro (exportações, 2023)</caption>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Posição no ranking mundial</th>
                <th>Principais destinos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soja (grão + farelo + óleo)</td>
                <td>1º exportador mundial</td>
                <td>China, União Europeia, Tailândia</td>
              </tr>
              <tr>
                <td>Carne bovina</td>
                <td>1º exportador mundial</td>
                <td>China, EUA, Egito</td>
              </tr>
              <tr>
                <td>Frango</td>
                <td>1º exportador mundial</td>
                <td>Arábia Saudita, Japão, EUA</td>
              </tr>
              <tr>
                <td>Açúcar</td>
                <td>1º exportador mundial</td>
                <td>Índia, Bangladesh, Argélia</td>
              </tr>
              <tr>
                <td>Café</td>
                <td>1º produtor e exportador mundial</td>
                <td>EUA, Alemanha, Bélgica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          {/* fundo */}
          <rect width="700" height="320" fill="#f0f7ee" rx="12" />
          {/* título */}
          <text x="350" y="30" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#2d6a4f">
            Cadeia produtiva do agronegócio
          </text>
          {/* setas e caixas */}
          {/* caixa 1 */}
          <rect x="20" y="60" width="120" height="60" rx="8" fill="#95d5b2" />
          <text x="80" y="84" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b4332">Fornecedores</text>
          <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#1b4332">de insumos</text>
          <text x="80" y="114" textAnchor="middle" fontSize="9" fill="#1b4332">(sementes, adubo, máq.)</text>
          {/* seta */}
          <line x1="140" y1="90" x2="168" y2="90" stroke="#2d6a4f" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* caixa 2 */}
          <rect x="170" y="60" width="120" height="60" rx="8" fill="#52b788" />
          <text x="230" y="84" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Produção</text>
          <text x="230" y="100" textAnchor="middle" fontSize="10" fill="#fff">rural</text>
          <text x="230" y="114" textAnchor="middle" fontSize="9" fill="#fff">(fazendas, lavouras)</text>
          {/* seta */}
          <line x1="290" y1="90" x2="318" y2="90" stroke="#2d6a4f" strokeWidth="2" />
          <polygon points="318,86 326,90 318,94" fill="#2d6a4f" />
          {/* caixa 3 */}
          <rect x="320" y="60" width="120" height="60" rx="8" fill="#40916c" />
          <text x="380" y="84" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Processamento</text>
          <text x="380" y="100" textAnchor="middle" fontSize="10" fill="#fff">industrial</text>
          <text x="380" y="114" textAnchor="middle" fontSize="9" fill="#fff">(agroindústrias)</text>
          {/* seta */}
          <line x1="440" y1="90" x2="468" y2="90" stroke="#2d6a4f" strokeWidth="2" />
          <polygon points="468,86 476,90 468,94" fill="#2d6a4f" />
          {/* caixa 4 */}
          <rect x="470" y="60" width="120" height="60" rx="8" fill="#1b4332" />
          <text x="530" y="84" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#d8f3dc">Distribuição</text>
          <text x="530" y="100" textAnchor="middle" fontSize="10" fill="#d8f3dc">e exportação</text>
          <text x="530" y="114" textAnchor="middle" fontSize="9" fill="#d8f3dc">(portos, atacado, varejo)</text>
          {/* linha inferior: questões */}
          <rect x="20" y="170" width="660" height="50" rx="8" fill="#d8f3dc" />
          <text x="350" y="191" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1b4332">
            Impactos: geração de empregos, exportações, desmatamento, conflito agrário
          </text>
          <text x="350" y="210" textAnchor="middle" fontSize="11" fill="#2d6a4f">
            O agronegócio movimenta ~25% do PIB brasileiro e é o principal gerador de superávit comercial
          </text>
          {/* estados */}
          <rect x="20" y="240" width="200" height="50" rx="8" fill="#b7e4c7" />
          <text x="120" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b4332">Principais regiões</text>
          <text x="120" y="278" textAnchor="middle" fontSize="10" fill="#1b4332">Centro-Oeste e MATOPIBA</text>
          <rect x="240" y="240" width="200" height="50" rx="8" fill="#b7e4c7" />
          <text x="340" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b4332">Principais culturas</text>
          <text x="340" y="278" textAnchor="middle" fontSize="10" fill="#1b4332">Soja, milho, cana, café</text>
          <rect x="460" y="240" width="220" height="50" rx="8" fill="#b7e4c7" />
          <text x="570" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b4332">Tecnologia</text>
          <text x="570" y="278" textAnchor="middle" fontSize="10" fill="#1b4332">Precisão, drones, biotecnologia</text>
        </svg>
        <figcaption>Figura 1 — Cadeia produtiva do agronegócio: da produção à exportação</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agricultura familiar</span>
        <h2>3. Agricultura familiar: conceito e importância</h2>
        <p>
          A <strong>agricultura familiar</strong> é definida no Brasil pela Lei nº 11.326/2006 (Lei da
          Agricultura Familiar) como aquela em que a unidade produtiva é gerenciada pela própria família,
          que também fornece a maior parte da mão de obra e tem a renda proveniente predominantemente de
          atividades do estabelecimento. Apesar de ocupar apenas cerca de 23% da área cultivada do Brasil,
          a agricultura familiar é responsável por aproximadamente <strong>70% dos alimentos</strong>{" "}
          consumidos internamente, incluindo arroz, feijão, mandioca, hortaliças, frutas e leite.
        </p>
        <p>
          Segundo o Censo Agropecuário de 2017 (IBGE), existem cerca de <strong>3,9 milhões de
          estabelecimentos familiares</strong> no Brasil, concentrados especialmente no <strong>Sul</strong>{" "}
          (com tradição de colonização europeia) e no <strong>Nordeste</strong>. A agricultura familiar é
          essencial para a segurança alimentar, para a manutenção da biodiversidade agrícola e para a
          preservação de culturas e saberes tradicionais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação: Agronegócio x Agricultura familiar no Brasil</caption>
            <thead>
              <tr>
                <th>Critério</th>
                <th>Agronegócio</th>
                <th>Agricultura familiar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Área total</td>
                <td>~77% da área agrícola</td>
                <td>~23% da área agrícola</td>
              </tr>
              <tr>
                <td>Número de estabelecimentos</td>
                <td>Minoria (grandes propriedades)</td>
                <td>3,9 milhões (maioria dos estabelecimentos)</td>
              </tr>
              <tr>
                <td>Mão de obra</td>
                <td>Mecanizada, assalariada</td>
                <td>Familiar, artesanal</td>
              </tr>
              <tr>
                <td>Destino da produção</td>
                <td>Exportação (commodities)</td>
                <td>Mercado interno (alimentação)</td>
              </tr>
              <tr>
                <td>Contribuição ao abastecimento</td>
                <td>~30% dos alimentos da mesa</td>
                <td>~70% dos alimentos da mesa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura fundiária</span>
        <h2>4. Concentração fundiária e conflitos no campo</h2>
        <p>
          O Brasil possui uma das estruturas fundiárias mais concentradas do mundo. O <strong>Índice de
          Gini</strong> da distribuição de terras no Brasil é historicamente superior a 0,85, indicando
          extrema concentração: uma minoria de latifundiários detém a maior parte das terras agricultáveis.
          Essa realidade é herança do sistema colonial de sesmarias e da Lei de Terras de 1850, que
          dificultou o acesso à propriedade por parte de trabalhadores livres e imigrantes.
        </p>
        <p>
          Os conflitos no campo são monitorados pela <strong>Comissão Pastoral da Terra (CPT)</strong>,
          que registra anualmente disputas por terra, assassinatos de líderes rurais e tentativas de
          despejo de comunidades tradicionais. Movimentos sociais como o <strong>MST (Movimento dos
          Trabalhadores Rurais Sem Terra)</strong> e a <strong>CONTAG (Confederação Nacional dos
          Trabalhadores na Agricultura)</strong> lutam pela reforma agrária e por melhores condições para
          os trabalhadores rurais.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tecnologias agrícolas</span>
        <h2>5. Agricultura de precisão e biotecnologia</h2>
        <p>
          A chamada <strong>agricultura de precisão</strong> utiliza tecnologias como GPS, drones,
          sensoriamento remoto e sistemas de informação geográfica (SIG) para monitorar e gerenciar a
          produção com alta eficiência. Com essas ferramentas, é possível aplicar fertilizantes e
          defensivos apenas onde e quando são necessários, reduzindo desperdício e impacto ambiental.
        </p>
        <p>
          A <strong>biotecnologia</strong> agrícola também transformou o setor: os organismos
          geneticamente modificados (OGMs) ou transgênicos foram introduzidos no Brasil a partir dos anos
          2000 e hoje o país é o segundo maior produtor de culturas transgênicas do mundo (atrás apenas
          dos EUA). As culturas transgênicas mais comuns são soja, milho e algodão. O debate sobre OGMs
          envolve questões de produtividade, segurança alimentar, soberania tecnológica e riscos ambientais.
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="280" fill="#fff8e1" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#6d4c41">
            Agricultura familiar x Agronegócio: distribuição de terras e alimentos
          </text>
          {/* gráfico de barras comparativo */}
          {/* Eixo Y */}
          <line x1="80" y1="50" x2="80" y2="230" stroke="#795548" strokeWidth="2" />
          {/* Eixo X */}
          <line x1="80" y1="230" x2="620" y2="230" stroke="#795548" strokeWidth="2" />
          {/* linhas de grade */}
          <line x1="80" y1="130" x2="620" y2="130" stroke="#d7ccc8" strokeWidth="1" strokeDasharray="5,3" />
          <line x1="80" y1="90" x2="620" y2="90" stroke="#d7ccc8" strokeWidth="1" strokeDasharray="5,3" />
          {/* labels Y */}
          <text x="70" y="233" textAnchor="end" fontSize="10" fill="#795548">0%</text>
          <text x="70" y="133" textAnchor="end" fontSize="10" fill="#795548">50%</text>
          <text x="70" y="93" textAnchor="end" fontSize="10" fill="#795548">70%</text>
          {/* Barra: % de área - Agronegócio */}
          <rect x="120" y="87" width="80" height="143" fill="#ef6c00" rx="4" />
          <text x="160" y="80" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#bf360c">77%</text>
          <text x="160" y="248" textAnchor="middle" fontSize="10" fill="#795548">Área</text>
          <text x="160" y="260" textAnchor="middle" fontSize="10" fill="#795548">Agronegócio</text>
          {/* Barra: % de área - Fam */}
          <rect x="220" y="180" width="80" height="50" fill="#ffcc02" rx="4" />
          <text x="260" y="173" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#795548">23%</text>
          <text x="260" y="248" textAnchor="middle" fontSize="10" fill="#795548">Área</text>
          <text x="260" y="260" textAnchor="middle" fontSize="10" fill="#795548">Agric. Familiar</text>
          {/* Barra: % de alimentos - Agronegócio */}
          <rect x="380" y="167" width="80" height="63" fill="#e64a19" rx="4" />
          <text x="420" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#bf360c">30%</text>
          <text x="420" y="248" textAnchor="middle" fontSize="10" fill="#795548">Alimentos</text>
          <text x="420" y="260" textAnchor="middle" fontSize="10" fill="#795548">Agronegócio</text>
          {/* Barra: % de alimentos - Fam */}
          <rect x="480" y="90" width="80" height="140" fill="#ffa000" rx="4" />
          <text x="520" y="83" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#795548">70%</text>
          <text x="520" y="248" textAnchor="middle" fontSize="10" fill="#795548">Alimentos</text>
          <text x="520" y="260" textAnchor="middle" fontSize="10" fill="#795548">Agric. Familiar</text>
        </svg>
        <figcaption>
          Figura 2 — Paradoxo fundiário: a agricultura familiar ocupa apenas 23% da área mas fornece 70%
          dos alimentos consumidos no Brasil
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas públicas</span>
        <h2>6. Políticas agrícolas: PRONAF e reforma agrária</h2>
        <p>
          O <strong>PRONAF (Programa Nacional de Fortalecimento da Agricultura Familiar)</strong>, criado
          em 1995, é o principal instrumento de crédito para os agricultores familiares no Brasil. Oferece
          financiamento com juros reduzidos para custeio, investimento e agroindústria. Outras políticas
          importantes incluem o <strong>PAA (Programa de Aquisição de Alimentos)</strong> e o{" "}
          <strong>PNAE (Programa Nacional de Alimentação Escolar)</strong>, que garantem mercado para a
          produção familiar ao exigir que ao menos 30% dos recursos do programa sejam usados para comprar
          alimentos de agricultores familiares.
        </p>
        <p>
          A <strong>reforma agrária</strong> é uma bandeira histórica no Brasil, defendida por movimentos
          sociais e contestada pelo setor ruralista. O INCRA (Instituto Nacional de Colonização e Reforma
          Agrária) é o órgão responsável por desapropriar imóveis que não cumprem sua função social e
          assentar famílias sem-terra. O número de famílias assentadas cresceu nos anos 2000 mas estagnou
          nas décadas seguintes.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos ambientais</span>
        <h2>7. Impactos ambientais da agropecuária</h2>
        <p>
          A expansão do agronegócio está diretamente associada ao desmatamento de biomas brasileiros,
          especialmente a <strong>Amazônia</strong> e o <strong>Cerrado</strong>. O desmatamento para
          abertura de novas áreas de pastagem e lavoura libera grandes quantidades de dióxido de carbono e
          ameaça a biodiversidade. O Brasil é o maior consumidor de agrotóxicos do mundo, com impactos
          sobre a saúde dos trabalhadores rurais, a contaminação do solo e dos recursos hídricos.
        </p>
        <p>
          A <strong>pecuária bovina</strong> é outra grande fonte de emissão de gases de efeito estufa,
          principalmente metano. Em resposta, surgem iniciativas como o <strong>Plano ABC
          (Agricultura de Baixo Carbono)</strong>, que incentiva práticas sustentáveis como a integração
          lavoura-pecuária-floresta (ILPF), o plantio direto e a recuperação de pastagens degradadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais impactos ambientais da agropecuária e respostas</caption>
            <thead>
              <tr>
                <th>Problema</th>
                <th>Causa</th>
                <th>Solução/Resposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Desmatamento</td>
                <td>Expansão de fronteiras agrícolas</td>
                <td>Código Florestal, rastreabilidade de cadeias</td>
              </tr>
              <tr>
                <td>Contaminação do solo</td>
                <td>Uso excessivo de agrotóxicos</td>
                <td>Agricultura orgânica, controle biológico</td>
              </tr>
              <tr>
                <td>Emissão de gases</td>
                <td>Pecuária bovina, queimadas</td>
                <td>Plano ABC, ILPF, biogás</td>
              </tr>
              <tr>
                <td>Erosão e assoreamento</td>
                <td>Monocultura sem práticas conservacionistas</td>
                <td>Plantio direto, curvas de nível, reflorestamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agroecologia</span>
        <h2>8. Agroecologia e agricultura orgânica</h2>
        <p>
          A <strong>agroecologia</strong> é um modelo de produção que integra princípios ecológicos e
          socioculturais à prática agrícola. Ao contrário do modelo convencional, a agroecologia valoriza
          a diversidade de cultivos, os saberes tradicionais dos agricultores, a autonomia em relação a
          insumos externos e o manejo sustentável dos recursos naturais. No Brasil, comunidades
          quilombolas, indígenas e assentamentos da reforma agrária têm sido protagonistas de
          experiências agroecológicas exitosas.
        </p>
        <p>
          A <strong>agricultura orgânica</strong>, regulamentada no Brasil pela Lei nº 10.831/2003 e
          pelo Decreto nº 6.323/2007, é aquela que não utiliza agroquímicos sintéticos e está em
          conformidade com critérios de sustentabilidade. O mercado de orgânicos cresce no Brasil e no
          mundo, respondendo a uma demanda crescente por alimentos mais saudáveis e produzidos de forma
          mais ética.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Segurança alimentar</span>
        <h2>9. Soberania e segurança alimentar</h2>
        <p>
          O conceito de <strong>segurança alimentar</strong> envolve o acesso regular e permanente de
          todas as pessoas a alimentos de qualidade, em quantidade suficiente, sem comprometer o acesso a
          outras necessidades essenciais. O Brasil tem experimentado avanços e retrocessos nessa área:
          saiu do Mapa da Fome da ONU em 2014, mas voltou a enfrentar problemas graves de insegurança
          alimentar em anos recentes.
        </p>
        <p>
          A <strong>soberania alimentar</strong>, conceito mais amplo defendido por movimentos camponeses
          como a Via Campesina, vai além da segurança alimentar ao reivindicar o direito dos povos de
          definir suas próprias políticas alimentares e de produção, priorizando a produção local e
          familiar em detrimento do modelo agroexportador dependente do mercado internacional.
        </p>
      </section>

      {/* ── Seção de exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A Revolução Verde, ocorrida principalmente nas décadas de 1960 e 1970, é considerada um marco
              na transformação da agricultura mundial. No Brasil, esse processo teve características
              específicas. Assinale a alternativa que melhor descreve um impacto social da Revolução Verde
              no Brasil:
            </p>
          }
          options={[
            { letter: "a", text: "Distribuição equitativa do acesso ao crédito rural entre pequenos e grandes proprietários." },
            { letter: "b", text: "Redução da concentração fundiária devido ao aumento da produtividade das pequenas propriedades." },
            { letter: "c", text: "Exclusão dos pequenos agricultores do processo de modernização, acentuando o êxodo rural e a concentração de terras.", correct: true },
            { letter: "d", text: "Eliminação do trabalho assalariado no campo com a mecanização total da produção agrícola." },
            { letter: "e", text: "Redução da dependência do campo em relação a insumos externos, como fertilizantes e pesticidas." },
          ]}
          resolution={
            <p>
              A Revolução Verde no Brasil foi um processo excludente: o crédito subsidiado e as novas
              tecnologias ficaram concentrados nas mãos de grandes proprietários. Os pequenos agricultores,
              sem acesso a esses recursos, foram progressivamente marginalizados, o que intensificou o êxodo
              rural (migração campo-cidade) e aprofundou a concentração fundiária. Portanto, a alternativa C
              é a correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Embora a agricultura familiar ocupe uma fração menor da área agrícola total do Brasil, ela
              tem papel fundamental no abastecimento interno. Com base nos dados do Censo Agropecuário de
              2017, assinale a alternativa correta sobre a agricultura familiar:
            </p>
          }
          options={[
            { letter: "a", text: "Responde por mais de 80% das exportações agrícolas brasileiras." },
            { letter: "b", text: "Ocupa cerca de 23% da área agrícola, mas fornece aproximadamente 70% dos alimentos consumidos no país.", correct: true },
            { letter: "c", text: "É responsável pela maioria das exportações de soja, milho e carne bovina." },
            { letter: "d", text: "Emprega predominantemente mão de obra assalariada e mecanizada." },
            { letter: "e", text: "Está concentrada principalmente no Centro-Oeste, região de expansão do agronegócio." },
          ]}
          resolution={
            <p>
              A agricultura familiar ocupa apenas cerca de 23% da área agrícola total, mas é responsável
              por aproximadamente 70% dos alimentos consumidos internamente no Brasil (arroz, feijão,
              mandioca, hortaliças, leite etc.). Isso demonstra sua alta eficiência produtiva por unidade de
              área e sua importância estratégica para a segurança alimentar. A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O MATOPIBA é uma das mais recentes fronteiras agrícolas do Brasil. Analise as afirmações
              abaixo sobre essa região e assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "MATOPIBA corresponde a parte da Amazônia Legal, com produção predominante de madeira e borracha." },
            { letter: "b", text: "É uma região localizada no semiárido nordestino, dependente de irrigação para produção de frutas para exportação." },
            { letter: "c", text: "MATOPIBA abrange áreas de Cerrado nos estados do Maranhão, Tocantins, Piauí e Bahia, com expansão intensa da soja e do milho.", correct: true },
            { letter: "d", text: "É uma região do Sul do Brasil marcada pela tradição de colonização europeia e pela predominância da agricultura familiar." },
            { letter: "e", text: "MATOPIBA refere-se à zona costeira do Nordeste, especializada na produção de petróleo e gás natural." },
          ]}
          resolution={
            <p>
              MATOPIBA é o acrônimo formado pelas iniciais dos estados Maranhão, Tocantins, Piauí e Bahia.
              Essa região, localizada sobre o Cerrado, tornou-se uma das principais fronteiras do agronegócio
              brasileiro nas últimas décadas, com expansão acelerada da produção de soja e milho sobre áreas
              de Cerrado nativo. A expansão traz preocupações ambientais relacionadas ao desmatamento desse
              bioma. A alternativa C é a correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O PRONAF (Programa Nacional de Fortalecimento da Agricultura Familiar) e o PNAE (Programa
              Nacional de Alimentação Escolar) são exemplos de políticas públicas que visam fortalecer a
              agricultura familiar no Brasil. Qual é a relação entre esses dois programas?
            </p>
          }
          options={[
            { letter: "a", text: "O PRONAF financia exclusivamente a compra de maquinário agrícola, enquanto o PNAE é um programa de treinamento para agricultores." },
            { letter: "b", text: "Ambos os programas foram extintos durante as reformas fiscais dos anos 2010 e substituídos por subsídios diretos." },
            { letter: "c", text: "O PRONAF oferece crédito para produção, enquanto o PNAE garante mercado ao exigir que ao menos 30% de seus recursos comprem alimentos de agricultores familiares.", correct: true },
            { letter: "d", text: "O PRONAF e o PNAE são programas voltados exclusivamente para o agronegócio de exportação, sem relação com a agricultura familiar." },
            { letter: "e", text: "O PNAE substitui o PRONAF ao oferecer o mesmo tipo de crédito rural com taxas de juros ainda menores." },
          ]}
          resolution={
            <p>
              O PRONAF é o principal programa de crédito para a agricultura familiar, oferecendo
              financiamentos com juros subsidiados para custeio e investimento. O PNAE (alimentação escolar)
              articula-se a essa política ao garantir mercado institucional para a produção familiar: a
              legislação determina que pelo menos 30% dos recursos do programa sejam destinados à compra de
              alimentos de agricultores familiares. Essa complementaridade fortalece a cadeia produtiva
              familiar. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              "A soberania alimentar é o direito dos povos a alimentos nutritivos e culturalmente adequados,
              acessíveis, produzidos de forma sustentável e ecológica, e o direito de decidir seu próprio
              sistema alimentar e produtivo." (Via Campesina, 1996)
            </p>
          }
          options={[
            { letter: "a", text: "A soberania alimentar é sinônimo de segurança alimentar, pois ambos os conceitos se limitam a garantir o acesso a alimentos suficientes." },
            { letter: "b", text: "O modelo do agronegócio exportador é totalmente compatível com a soberania alimentar, pois gera divisas que financiam a importação de alimentos." },
            { letter: "c", text: "A soberania alimentar supera o conceito de segurança alimentar ao incluir o direito dos povos de definir seus sistemas produtivos e alimentares, valorizando a produção local e familiar em detrimento do modelo agroexportador.", correct: true },
            { letter: "d", text: "O conceito de soberania alimentar foi elaborado por organismos internacionais como a FAO e o Banco Mundial para regular o comércio agrícola global." },
            { letter: "e", text: "A soberania alimentar defende a especialização agrícola de cada país nas commodities em que é mais competitivo, favorecendo o livre-comércio internacional." },
          ]}
          resolution={
            <p>
              O conceito de soberania alimentar, cunhado pela Via Campesina em 1996, vai além da segurança
              alimentar (que se limita a garantir acesso a alimentos suficientes) ao reivindicar o direito
              dos povos e comunidades de definir suas próprias políticas alimentares e agrícolas, priorizando
              a produção local e familiar, os saberes tradicionais e a sustentabilidade ecológica. Esse
              conceito questiona o modelo do agronegócio exportador e a dependência do mercado internacional.
              A alternativa C está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
