"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 35</span>
          <h1>Questões Ambientais e Sustentabilidade sob a Perspectiva Sociológica</h1>
          <p>
            A crise ambiental não é apenas um problema técnico — é uma questão social e política.
            Entender quem produz a degradação ambiental, quem mais sofre suas consequências e
            como a sociedade pode responder é essencial para a leitura crítica de textos ambientais no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crise Ambiental</span>
        <h2>1. A Crise Ambiental como Questão Social</h2>
        <p>
          O aquecimento global, o desmatamento, a poluição e a perda de biodiversidade são
          fenômenos naturais desencadeados por escolhas sociais, econômicas e políticas.
          A perspectiva sociológica revela que esses problemas <strong>não afetam todos
          igualmente</strong>: populações pobres, negras, indígenas e do Sul Global sofrem
          desproporcionalmente as consequências de uma crise produzida principalmente pelos
          países ricos e pelas classes abastadas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Aquecimento global</h3>
            <p>O aumento da temperatura média da Terra ameaça sistemas climáticos, eleva o nível dos oceanos e intensifica eventos extremos (secas, enchentes, furacões).</p>
          </div>
          <div className="lesson-card">
            <span>🌳</span>
            <h3>Desmatamento</h3>
            <p>O Brasil derrubou grande parte do Cerrado e Amazônia para agropecuária — afetando povos indígenas e regulação climática planetária.</p>
          </div>
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Poluição industrial</h3>
            <p>Fábricas e lixões concentram-se em bairros pobres e comunidades negras — fenômeno estudado pela justiça ambiental.</p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Perda de biodiversidade</h3>
            <p>A extinção de espécies compromete ecossistemas inteiros e afeta comunidades que dependem de recursos naturais para sobreviver.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Quem paga a conta da crise ambiental?</h3>
          <p>
            Os 10% mais ricos da população mundial são responsáveis por cerca de
            <strong> 50% das emissões de carbono</strong>, enquanto os 50% mais pobres
            emitem apenas 10%. Paradoxalmente, são os países mais pobres — especialmente
            os da África e do Sul da Ásia — que mais sofrem com secas, enchentes e
            insegurança alimentar causadas pelo aquecimento global.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Justiça Ambiental</span>
        <h2>2. Justiça Ambiental e Racismo Ambiental</h2>
        <p>
          A <strong>justiça ambiental</strong> é um campo de estudo e movimento social que analisa
          como os riscos ambientais (poluição, enchentes, contaminação) se distribuem de forma
          desigual na sociedade — recaindo predominantemente sobre comunidades pobres e grupos
          racializados.
        </p>
        <p>
          O conceito de <strong>racismo ambiental</strong> foi desenvolvido pelo geógrafo
          norte-americano <strong>Robert Bullard</strong> nos anos 1980, ao constatar que
          lixões e indústrias poluentes eram sistematicamente instalados próximos a comunidades
          negras nos EUA. No Brasil, o fenômeno é igualmente documentado: comunidades quilombolas,
          indígenas e periferias negras são as mais expostas a:
        </p>
        <ul>
          <li>Lixões e aterros sanitários.</li>
          <li>Indústrias químicas e petroquímicas (Polo Petroquímico de Camaçari, BA).</li>
          <li>Inundações e deslizamentos em áreas de risco (favelas em encostas).</li>
          <li>Contaminação de rios por mineração (Samarco/Mariana, 2015; Brumadinho, 2019).</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade</span>
        <h2>3. Desenvolvimento Sustentável: Conceito e Conferências</h2>
        <p>
          O conceito de <strong>desenvolvimento sustentável</strong> foi popularizado pelo
          <strong> Relatório Brundtland</strong> (1987), da Comissão Mundial sobre Meio
          Ambiente e Desenvolvimento da ONU: "desenvolvimento que atende às necessidades
          do presente sem comprometer a capacidade das gerações futuras de atenderem
          às suas próprias necessidades."
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 300 280" width="300" height="280" aria-label="Três pilares da sustentabilidade">
            <ellipse cx={150} cy={105} rx={90} ry={60} fill="#dcfce7" fillOpacity={0.7} stroke="#16a34a" strokeWidth={1.5} />
            <text x={150} y={95} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Ambiental</text>
            <text x={150} y={112} textAnchor="middle" fontSize={11} fill="#166534">Preservar ecossistemas</text>

            <ellipse cx={95} cy={195} rx={90} ry={60} fill="#dbeafe" fillOpacity={0.7} stroke="#2563eb" strokeWidth={1.5} />
            <text x={75} y={195} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Social</text>
            <text x={75} y={212} textAnchor="middle" fontSize={11} fill="#1e40af">Equidade e</text>
            <text x={75} y={226} textAnchor="middle" fontSize={11} fill="#1e40af">justiça social</text>

            <ellipse cx={205} cy={195} rx={90} ry={60} fill="#fef3c7" fillOpacity={0.7} stroke="#f59e0b" strokeWidth={1.5} />
            <text x={225} y={195} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Econômico</text>
            <text x={225} y={212} textAnchor="middle" fontSize={11} fill="#78350f">Viabilidade</text>
            <text x={225} y={226} textAnchor="middle" fontSize={11} fill="#78350f">econômica</text>

            <text x={150} y={162} textAnchor="middle" fontSize={12} fontWeight={800} fill="#374151">SUSTENTA-</text>
            <text x={150} y={177} textAnchor="middle" fontSize={12} fontWeight={800} fill="#374151">BILIDADE</text>

            <text x={150} y={268} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Intersecção dos três pilares</text>
          </svg>
          <figcaption>Os três pilares do desenvolvimento sustentável: ambiental, social e econômico.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conferência</th>
                <th>Ano</th>
                <th>Local</th>
                <th>Principal resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conferência de Estocolmo</td>
                <td>1972</td>
                <td>Estocolmo, Suécia</td>
                <td>Primeira grande conferência ambiental da ONU; criação do PNUMA (Programa das Nações Unidas para o Meio Ambiente)</td>
              </tr>
              <tr>
                <td>Rio-92 (ECO-92)</td>
                <td>1992</td>
                <td>Rio de Janeiro, Brasil</td>
                <td>Agenda 21; Convenção sobre Diversidade Biológica; Convenção-Quadro das Nações Unidas sobre Mudança do Clima (base do Protocolo de Quioto)</td>
              </tr>
              <tr>
                <td>Protocolo de Quioto</td>
                <td>1997</td>
                <td>Quioto, Japão</td>
                <td>Metas vinculantes de redução de emissões para países desenvolvidos</td>
              </tr>
              <tr>
                <td>Rio+10 (Joanesburgo)</td>
                <td>2002</td>
                <td>Joanesburgo, África do Sul</td>
                <td>Metas para acesso à água potável e saneamento; debate sobre pobreza e ambiente</td>
              </tr>
              <tr>
                <td>Rio+20</td>
                <td>2012</td>
                <td>Rio de Janeiro, Brasil</td>
                <td>Documento "O Futuro que Queremos"; base para a Agenda 2030 e os ODS</td>
              </tr>
              <tr>
                <td>Acordo de Paris (COP21)</td>
                <td>2015</td>
                <td>Paris, França</td>
                <td>Compromisso de limitar o aquecimento a 1,5°C; NDCs (contribuições nacionais)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>Agenda 2030</strong> da ONU estabeleceu 17 <strong>Objetivos de Desenvolvimento
          Sustentável (ODS)</strong>, que integram metas ambientais, sociais e econômicas —
          desde erradicação da pobreza (ODS 1) até ação climática (ODS 13) e vida terrestre (ODS 15).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos Ambientalistas</span>
        <h2>4. Movimentos Ambientalistas no Brasil e no Mundo</h2>
        <p>
          O movimento ambientalista surgiu nos anos 1960-70 nos países desenvolvidos,
          inicialmente com foco na preservação da natureza selvagem. Com o tempo, expandiu-se
          para incluir a dimensão da justiça social.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Greenpeace</h3>
            <p>ONG internacional fundada em 1971; ações diretas de denúncia (baleias, nucleares, desmatamento). Presente no Brasil desde 1991.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>ISA (Instituto Socioambiental)</h3>
            <p>ONG brasileira que articula direitos indígenas e quilombolas com preservação ambiental — pioneira no conceito socioambiental.</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>APIB</h3>
            <p>Articulação dos Povos Indígenas do Brasil — maior organização indígena do país, que articula luta territorial com pauta ambiental.</p>
          </div>
          <div className="lesson-card">
            <span>🌲</span>
            <h3>Chico Mendes</h3>
            <p>Seringueiro e sindicalista que criou as Reservas Extrativistas. Assassinado em 1988, tornou-se mártir internacional da causa ambiental.</p>
          </div>
          <div className="lesson-card">
            <span>🍃</span>
            <h3>Marina Silva</h3>
            <p>Ex-ministra do Meio Ambiente (2003–2008), reduziu o desmatamento da Amazônia em 83% no período. Símbolo do ambientalismo político brasileiro.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Amazônia</span>
        <h2>5. Amazônia: Desmatamento, Bioeconomia e Soberania</h2>
        <p>
          A Amazônia brasileira abriga cerca de <strong>60% da maior floresta tropical do mundo</strong>,
          com 4,1 milhões de km² — uma área maior que a Europa Ocidental. É o lar de pelo menos 300
          povos indígenas (incluindo dezenas de grupos isolados), de milhões de espécies ainda não
          catalogadas e de um dos maiores estoques de carbono florestal do planeta. Sua preservação
          não é apenas uma questão ambiental brasileira: é uma condição para a estabilidade climática
          global.
        </p>
        <p>
          Segundo o INPE (Instituto Nacional de Pesquisas Espaciais), o Brasil desmatou mais de
          <strong> 800.000 km² de Amazônia</strong> entre 1988 e 2022 — equivalente a toda a área
          do Chile. O <strong>arco do desmatamento</strong> concentra as maiores taxas de
          desflorestamento ao longo do sul e leste da Amazônia (Pará, Mato Grosso, Rondônia),
          onde avança o agronegócio da soja e da pecuária bovina. Os povos indígenas que vivem
          nessas áreas são os mais expostos à violência, invasão de terras e perda de modos
          de vida milenares.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 660 220" width="660" height="220" aria-label="Mapa esquemático da Amazônia com arco do desmatamento">
            <rect x={10} y={10} width={640} height={200} rx={12} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={330} y={35} textAnchor="middle" fontSize={14} fontWeight={700} fill="#14532d">Amazônia Legal Brasileira</text>
            <ellipse cx={280} cy={120} rx={220} ry={80} fill="#86efac" opacity={0.6} stroke="#15803d" strokeWidth={1} />
            <text x={280} y={115} textAnchor="middle" fontSize={12} fontWeight={600} fill="#14532d">Floresta</text>
            <text x={280} y={130} textAnchor="middle" fontSize={11} fill="#14532d">conservada</text>
            <path d="M360,160 Q430,180 510,150 Q560,130 570,100 Q575,80 530,70 Q490,60 440,75 Q400,88 380,110 Q365,130 360,160Z"
              fill="#fca5a5" opacity={0.8} stroke="#dc2626" strokeWidth={1.5} />
            <text x={480} y={115} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Arco do</text>
            <text x={480} y={130} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">desmatamento</text>
            <text x={480} y={155} textAnchor="middle" fontSize={10} fill="#7f1d1d">PA · MT · RO</text>
            <text x={330} y={195} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Arco do desmatamento: sul e leste da Amazônia — pressão do agronegócio</text>
          </svg>
          <figcaption>O arco do desmatamento concentra-se ao longo do sul e leste da Amazônia, em estados como Pará, Mato Grosso e Rondônia.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Bioeconomia: alternativa ao desmatamento</h3>
          <p>
            A <strong>bioeconomia amazônica</strong> propõe que a floresta em pé vale mais do que
            derrubada: castanha-do-pará, açaí, óleos vegetais, cosméticos e biofármacos geram renda
            sustentável para comunidades locais. O Brasil tem potencial de ser líder global em
            bioeconomia, mas isso exige demarcar territórios indígenas, combater o desmatamento ilegal
            e criar cadeias de valor que remuneram adequadamente os guardiões da floresta — povos
            indígenas e comunidades tradicionais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Biomas do Brasil</span>
        <h2>6. Biomas Brasileiros e Ameaças</h2>
        <p>
          O Brasil possui <strong>seis biomas</strong> — ecossistemas de grande escala com fauna,
          flora e clima característicos. Juntos, cobrem todo o território nacional e abrigam
          aproximadamente 20% da biodiversidade do planeta. Cada bioma enfrenta ameaças específicas,
          mas o denominador comum é a conversão para uso agropecuário e a urbanização desordenada.
        </p>
        <p>
          O <strong>Cerrado</strong> — o "berço das águas" do Brasil, onde nascem os rios que
          abastecem a maior parte do país — já perdeu mais de 50% de sua cobertura original e é
          considerado um dos hotspots de biodiversidade mais ameaçados do mundo. A Mata Atlântica,
          que cobria 15% do território e abrigava as cidades mais populosas, restam apenas cerca
          de 12% de fragmentos. Apesar de menor em extensão, esses fragmentos são
          fundamentais para a proteção de mananciais e a regulação do clima no Sudeste.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Bioma</th>
                <th>Cobertura original</th>
                <th>Cobertura atual (aprox.)</th>
                <th>Principal ameaça</th>
                <th>Espécie símbolo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Amazônia</strong></td>
                <td>4,1 mi km²</td>
                <td>~80% remanescente</td>
                <td>Desmatamento para pecuária e soja</td>
                <td>Onça-pintada</td>
              </tr>
              <tr>
                <td><strong>Cerrado</strong></td>
                <td>2,03 mi km²</td>
                <td>~49% remanescente</td>
                <td>Expansão do agronegócio (soja, cana)</td>
                <td>Tamanduá-bandeira</td>
              </tr>
              <tr>
                <td><strong>Mata Atlântica</strong></td>
                <td>1,3 mi km²</td>
                <td>~12% remanescente</td>
                <td>Urbanização, agricultura, pecuária</td>
                <td>Mico-leão-dourado</td>
              </tr>
              <tr>
                <td><strong>Caatinga</strong></td>
                <td>845 mil km²</td>
                <td>~53% remanescente</td>
                <td>Desertificação, extração de lenha, caça</td>
                <td>Ararinha-azul</td>
              </tr>
              <tr>
                <td><strong>Pampa</strong></td>
                <td>176 mil km² (RS)</td>
                <td>~46% remanescente</td>
                <td>Monocultura de soja, silvicultura de pinus</td>
                <td>Veado-campeiro</td>
              </tr>
              <tr>
                <td><strong>Pantanal</strong></td>
                <td>150 mil km²</td>
                <td>~84% remanescente</td>
                <td>Pecuária extensiva, incêndios, agrotóxicos</td>
                <td>Arara-azul</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Clima e Justiça</span>
        <h2>7. Mudanças Climáticas e Justiça Climática</h2>
        <p>
          O <strong>Painel Intergovernamental sobre Mudanças Climáticas (IPCC)</strong>, criado pela
          ONU em 1988, reúne centenas de cientistas que avaliam a literatura científica sobre o
          clima. Seus relatórios são o principal instrumento de informação para as negociações
          internacionais. O 6º Relatório de Avaliação (AR6, 2021-2023) concluiu com
          <em> "certeza inequívoca"</em> que a influência humana é responsável pelo aquecimento
          global observado desde meados do século XX.
        </p>
        <p>
          As projeções para 2100 variam de 1,5°C a 4°C de aquecimento médio global, dependendo
          das emissões dos próximos décadas. Mesmo 1,5°C — a meta mais ambiciosa do Acordo de Paris
          — implicará eventos climáticos extremos mais frequentes, elevação do nível do mar,
          insegurança alimentar e hídrica para centenas de milhões de pessoas. A
          <strong> justiça climática</strong> questiona que as populações mais vulneráveis —
          ilhas do Pacífico, populações costeiras pobres, agricultores do semiárido —
          sofrerão as consequências mais severas de um problema causado principalmente
          pelos países ricos industrializados.
        </p>
        <div className="lesson-highlight">
          <h3>Os 5 compromissos centrais do Acordo de Paris (2015)</h3>
          <p>
            <strong>1. Limitar o aquecimento a 1,5°C</strong> acima dos níveis pré-industriais, com
            esforços para não ultrapassar 2°C.<br />
            <strong>2. NDCs (Contribuições Determinadas Nacionalmente):</strong> cada país define e
            submete suas metas nacionais de redução de emissões, revisadas a cada 5 anos.<br />
            <strong>3. Financiamento climático:</strong> países desenvolvidos comprometeram
            US$ 100 bilhões/ano para países em desenvolvimento (meta não atingida).<br />
            <strong>4. Transparência e prestação de contas:</strong> sistema de monitoramento e
            verificação das emissões de cada país.<br />
            <strong>5. Adaptação:</strong> além de mitigar emissões, países devem se adaptar aos
            impactos climáticos já inevitáveis.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Impacto</th>
                <th>Região mais afetada</th>
                <th>Países mais responsáveis (emissões históricas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elevação do nível do mar</td>
                <td>Ilhas do Pacífico, Bangladesh, cidades costeiras</td>
                <td>EUA, Europa, China</td>
              </tr>
              <tr>
                <td>Secas e desertificação</td>
                <td>África Subsaariana, Nordeste brasileiro, Mediterrâneo</td>
                <td>EUA, Europa, países do G7</td>
              </tr>
              <tr>
                <td>Insegurança alimentar</td>
                <td>Sul da Ásia, África Oriental</td>
                <td>Países industrializados do Norte Global</td>
              </tr>
              <tr>
                <td>Refugiados climáticos</td>
                <td>Tuvalu, Maldivas, Bangladexi costeiro</td>
                <td>Historicamente os países ricos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Campo e Ambiente</span>
        <h2>8. Agronegócio, Conflitos Fundiários e Meio Ambiente</h2>
        <p>
          O <strong>agronegócio</strong> responde por cerca de 25% do PIB brasileiro (considerando a
          cadeia completa do campo à indústria), mas sua expansão tem sido historicamente associada
          ao desmatamento, à concentração fundiária e a conflitos com populações tradicionais. O
          Brasil é o maior exportador mundial de soja, carne bovina, frango, açúcar e café — um
          protagonismo econômico que coexiste com tensões socioambientais intensas.
        </p>
        <p>
          A <strong>Comissão Pastoral da Terra (CPT)</strong>, criada em 1975 pela Igreja Católica,
          documenta anualmente os conflitos no campo brasileiro. Em anos recentes, o Brasil tem
          figurado entre os países com maior número de assassinatos de defensores ambientais e
          lideranças camponesas. O <strong>Código Florestal</strong> (Lei 12.651/2012) exige que
          propriedades rurais mantenham percentuais mínimos de vegetação nativa como
          <strong> Reserva Legal</strong> — mas sua aplicação é historicamente deficiente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Liderança</th>
                <th>Atuação</th>
                <th>Assassinato</th>
                <th>Legado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chico Mendes</strong></td>
                <td>Seringueiro; criou reservas extrativistas no Acre</td>
                <td>1988, Xapuri (AC)</td>
                <td>Reservas Extrativistas reconhecidas internacionalmente; mártir do ambientalismo</td>
              </tr>
              <tr>
                <td><strong>Dorothy Stang</strong></td>
                <td>Missionária norte-americana; defendia assentados no Pará</td>
                <td>2005, Anapu (PA)</td>
                <td>Acelerou criação de áreas protegidas no Pará; pressão internacional</td>
              </tr>
              <tr>
                <td><strong>Paulo Paulino Guajajara</strong></td>
                <td>Guardião da floresta; protegia terras dos Guajajara</td>
                <td>2019, Maranhão</td>
                <td>Símbolo da luta dos Guardiões da Floresta; repercussão global</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Concentração de terras no Brasil</h3>
          <p>
            O Brasil tem o <strong>Índice de Gini da terra</strong> entre os mais altos do mundo:
            em 2017, 1% dos proprietários rurais detinha 47% da área total. Esse grau extremo
            de concentração fundiária é herança colonial e explica por que movimentos como o MST
            (reforma agrária) e as lutas quilombolas por demarcação de territórios permanecem
            tão relevantes no cenário político brasileiro contemporâneo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ODS e Agenda 2030</span>
        <h2>9. ODS: Os 17 Objetivos de Desenvolvimento Sustentável</h2>
        <p>
          Em 2015, os 193 países membros da ONU aprovaram a <strong>Agenda 2030</strong> — um
          conjunto de 17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas a serem
          atingidas até 2030. Os ODS substituíram os Objetivos de Desenvolvimento do Milênio
          (ODM, 2000-2015) e se distinguem por integrar as dimensões ambiental, social e econômica,
          e por se aplicarem a todos os países — não apenas aos mais pobres.
        </p>
        <p>
          Para o ENEM, os ODS mais cobrados são aqueles com forte dimensão sociológica: ODS 1
          (erradicação da pobreza), ODS 5 (igualdade de gênero), ODS 10 (redução das
          desigualdades), ODS 13 (ação climática) e ODS 15 (vida terrestre — biodiversidade).
          A Agenda 2030 é organizada pelos 5 "Ps": <strong>Pessoas</strong> (bem-estar social),
          <strong> Planeta</strong> (ambiente), <strong>Prosperidade</strong> (economia inclusiva),
          <strong> Paz</strong> (sociedades justas) e <strong>Parcerias</strong> (cooperação global).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍽️</span>
            <h3>ODS 1 e 2 — Sem Pobreza e Fome Zero</h3>
            <p>Erradicar a extrema pobreza e a fome. No Brasil, a retomada do Bolsa Família e do combate à fome (2023) está diretamente alinhada a esses objetivos.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>ODS 5 e 10 — Igualdade de Gênero e Redução das Desigualdades</h3>
            <p>Eliminar discriminação de gênero e reduzir desigualdades entre e dentro dos países. Inclui cotas, políticas salariais e proteção de grupos vulneráveis.</p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>ODS 13 — Ação Climática</h3>
            <p>Medidas urgentes para combater as mudanças climáticas. Relacionado ao Acordo de Paris e às NDCs brasileiras (reduzir desmatamento e descarbonizar a economia).</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>ODS 15 — Vida Terrestre</h3>
            <p>Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres. Diretamente ligado ao combate ao desmatamento da Amazônia e do Cerrado.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Brasil e os ODS: avanços e retrocessos</h3>
          <p>
            O Brasil avançou nos ODS sociais (redução da pobreza, expansão educacional) entre 2003
            e 2015, mas retrocedeu em vários indicadores após 2015. O ODS 13 (ação climática) foi
            especialmente impactado pelo aumento do desmatamento entre 2019 e 2022. O retorno ao
            Fundo Amazônia e à política climática pró-ativa a partir de 2023 sinaliza esforço de
            realinhamento com a Agenda 2030.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Meio Ambiente e Sociologia no ENEM</h2>
        <p>
          Questões ambientais no ENEM são quase sempre enquadradas sociologicamente: o foco não é
          a química do efeito estufa ou a biologia das espécies ameaçadas, mas a dimensão social
          da crise ambiental — quem produz, quem sofre, quem decide. Os textos de apoio costumam
          ser reportagens sobre desastres ambientais, dados de desmatamento ou trechos de
          documentos internacionais como o Acordo de Paris ou a Agenda 2030.
        </p>
        <p>
          O ENEM cobra especialmente a distinção entre <em>desenvolvimento sustentável</em> (conceito
          central do Relatório Brundtland) e os três pilares que o sustentam. Também são frequentes
          questões sobre justiça ambiental e racismo ambiental — que exigem articular desigualdade
          social com impactos ambientais. Movimentos ambientalistas brasileiros (Chico Mendes, APIB)
          costumam aparecer em questões sobre movimentos sociais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Exemplo concreto</th>
                <th>Autor/Documento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Justiça ambiental</strong></td>
                <td>Distribuição equitativa dos benefícios e riscos ambientais na sociedade</td>
                <td>Favelas em áreas de risco de enchente; periferias próximas a indústrias poluentes</td>
                <td>Robert Bullard / movimentos populares</td>
              </tr>
              <tr>
                <td><strong>Racismo ambiental</strong></td>
                <td>Concentração desproporcionada de riscos ambientais em comunidades negras e indígenas</td>
                <td>Polo petroquímico de Camaçari próximo a comunidades negras; garimpo em terras indígenas</td>
                <td>Robert Bullard (EUA, 1980s)</td>
              </tr>
              <tr>
                <td><strong>Desenvolvimento sustentável</strong></td>
                <td>Atender necessidades do presente sem comprometer gerações futuras; 3 pilares (ambiental, social, econômico)</td>
                <td>Bioeconomia amazônica; energia solar em comunidades rurais</td>
                <td>Relatório Brundtland (ONU, 1987)</td>
              </tr>
              <tr>
                <td><strong>Agenda 21 / Agenda 2030</strong></td>
                <td>Planos de ação globais para o desenvolvimento sustentável elaborados pela ONU</td>
                <td>Agenda 21 (Rio-92); 17 ODS da Agenda 2030</td>
                <td>ONU (1992 / 2015)</td>
              </tr>
              <tr>
                <td><strong>Acordo de Paris</strong></td>
                <td>Tratado internacional para limitar aquecimento global a 1,5°C; NDCs nacionais</td>
                <td>Compromisso do Brasil de restaurar 12 mi ha de floresta até 2030</td>
                <td>COP21, Paris, 2015</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Temas ambientais mais cobrados no ENEM</h3>
          <p>
            <strong>1.</strong> Desenvolvimento sustentável — definição e pilares (Brundtland, 1987).<br />
            <strong>2.</strong> Rio-92 e Agenda 21 — conferências globais e seus documentos.<br />
            <strong>3.</strong> Acordo de Paris — metas climáticas e NDCs.<br />
            <strong>4.</strong> Justiça ambiental e racismo ambiental — desigualdade na distribuição de riscos.<br />
            <strong>5.</strong> Movimentos ambientalistas brasileiros — Chico Mendes, APIB, reservas extrativistas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Desenvolvimento sustentável"
          statement={
            <p>
              O conceito de <strong>desenvolvimento sustentável</strong>, consagrado pelo
              Relatório Brundtland (1987), significa:
            </p>
          }
          options={[
            { letter: "A", text: <>Crescimento econômico ilimitado baseado no uso intensivo dos recursos naturais.</> },
            { letter: "B", text: <>A paralisação do desenvolvimento para preservar integralmente a natureza.</> },
            { letter: "C", text: <>O desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das gerações futuras.</>, correct: true },
            { letter: "D", text: <>A substituição de toda a energia fóssil por energia nuclear.</> },
            { letter: "E", text: <>O desenvolvimento exclusivo dos países pobres às custas dos países ricos.</> },
          ]}
          resolution={
            <p>
              O Relatório Brundtland ("Nosso Futuro Comum", 1987) definiu desenvolvimento
              sustentável como aquele que satisfaz as necessidades presentes sem comprometer
              as gerações futuras — integrando crescimento econômico, equidade social e
              preservação ambiental.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Racismo ambiental"
          statement={
            <p>
              O conceito de <strong>racismo ambiental</strong>, desenvolvido por Robert Bullard,
              refere-se à constatação de que:
            </p>
          }
          options={[
            { letter: "A", text: <>Apenas países com histórico de racismo institucional sofrem degradação ambiental.</> },
            { letter: "B", text: <>Comunidades negras, indígenas e pobres são desproporcionalmente expostas a riscos ambientais como lixões, poluição e enchentes.</>, correct: true },
            { letter: "C", text: <>O racismo impede que pessoas negras participem de movimentos ambientalistas.</> },
            { letter: "D", text: <>A poluição afeta igualmente todos os grupos sociais, independentemente de raça ou classe.</> },
            { letter: "E", text: <>O desmatamento está diretamente relacionado ao aumento do crime racial nas cidades.</> },
          ]}
          resolution={
            <p>
              Robert Bullard demonstrou nos anos 1980 que lixões e indústrias poluentes eram
              sistematicamente instalados em comunidades negras nos EUA. No Brasil, o mesmo
              padrão se observa: comunidades pobres e racializadas vivem mais perto de
              fontes de poluição e em áreas de maior risco ambiental.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Rio-92 e Agenda 21"
          statement={
            <p>
              A Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (Rio-92)
              foi importante porque:
            </p>
          }
          options={[
            { letter: "A", text: <>Estabeleceu metas vinculantes de redução de emissões para todos os países do mundo.</> },
            { letter: "B", text: <>Criou o Protocolo de Quioto, que entrou em vigor imediatamente em 1992.</> },
            { letter: "C", text: <>Produziu a Agenda 21 e convenções sobre biodiversidade e clima, lançando as bases do ambientalismo global contemporâneo.</>, correct: true },
            { letter: "D", text: <>Resultou no Acordo de Paris, limitando o aquecimento a 1,5°C.</> },
            { letter: "E", text: <>Foi o primeiro evento internacional a reconhecer a existência do aquecimento global.</> },
          ]}
          resolution={
            <p>
              A Rio-92 foi um marco: reuniu 172 países e produziu a Agenda 21 (plano de ação
              para o desenvolvimento sustentável), a Convenção sobre Diversidade Biológica e
              a Convenção-Quadro sobre Mudanças Climáticas — que seria a base do Protocolo
              de Quioto (1997) e do Acordo de Paris (2015).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Três pilares da sustentabilidade"
          statement={
            <p>
              O modelo dos "três pilares da sustentabilidade" (ambiental, social e econômico)
              implica que:
            </p>
          }
          options={[
            { letter: "A", text: <>A preservação ambiental deve sempre ter prioridade sobre as dimensões social e econômica.</> },
            { letter: "B", text: <>O crescimento econômico é incompatível com a sustentabilidade e deve ser abandonado.</> },
            { letter: "C", text: <>Desenvolvimento sustentável requer que as dimensões ambiental, social e econômica sejam simultaneamente consideradas e equilibradas.</>, correct: true },
            { letter: "D", text: <>A sustentabilidade é um objetivo exclusivamente dos países desenvolvidos, que já superaram a pobreza.</> },
            { letter: "E", text: <>O pilar econômico é o mais importante, pois sem riqueza não há como financiar os outros dois.</> },
          ]}
          resolution={
            <p>
              O modelo dos três pilares (ou tripé da sustentabilidade) estabelece que não há
              sustentabilidade real se apenas uma dimensão for privilegiada: crescimento que
              destrói a natureza não é sustentável; preservação que ignora a pobreza não é
              justa; e equidade social sem viabilidade econômica não é duradoura.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Crise ambiental e desigualdade"
          statement={
            <p>
              "Os 10% mais ricos do mundo emitem 50% do carbono global. Os 50% mais pobres
              emitem apenas 10%, mas são os que mais sofrerão com secas, enchentes e insegurança
              alimentar causadas pelo aquecimento."
              <br /><br />
              Esse dado ilustra qual conceito central da perspectiva sociológica sobre
              questões ambientais?
            </p>
          }
          options={[
            { letter: "A", text: <>Desenvolvimento sustentável — o crescimento econômico deve ser limitado para proteger o meio ambiente.</> },
            { letter: "B", text: <>Agenda 21 — o plano de ação das Nações Unidas para o desenvolvimento global.</> },
            { letter: "C", text: <>Injustiça ambiental — os que mais contribuem para a degradação são os que menos sofrem suas consequências, e vice-versa.</>, correct: true },
            { letter: "D", text: <>Racismo ambiental — a poluição afeta exclusivamente grupos racializados, não grupos de baixa renda.</> },
            { letter: "E", text: <>Neoliberalismo — a liberalização econômica é a principal causa do aquecimento global.</> },
          ]}
          resolution={
            <p>
              A injustiça ambiental é uma das contribuições mais importantes da Sociologia
              ao debate ambiental: ela revela que a crise climática é produto de escolhas
              sociais e econômicas desiguais, e que suas consequências são distribuídas
              de forma perversa — quem menos contribuiu para o problema é quem mais sofre
              com ele, exigindo respostas que articulem justiça social e ambiental.
            </p>
          }
        />
      </section>
    </article>
  );
}
