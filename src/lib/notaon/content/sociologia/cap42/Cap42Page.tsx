"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 42</span>
          <h1>Revisão Geral de Sociologia: Conceitos, Estratégias e Questões Comentadas</h1>
          <p>
            Este capítulo de revisão reúne os conceitos fundamentais de toda a disciplina, os 20
            temas que mais caem no ENEM, os erros mais comuns e um checklist de última hora.
            Use como referência rápida na véspera da prova.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa da Disciplina</span>
        <h2>1. Os 8 Módulos de Sociologia em Síntese</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📘</span>
            <h3>Módulo 1 — Introdução</h3>
            <p>O que é Sociologia, socialização, instituições sociais (família, escola, religião, Estado, mídia), normas e controle social.</p>
          </div>
          <div className="lesson-card">
            <span>🧑‍🏫</span>
            <h3>Módulo 2 — Clássicos</h3>
            <p>Comte (positivismo), Durkheim (fato social, anomia, solidariedade), Marx (capitalismo, alienação, luta de classes), Weber (ação social, burocracia, dominação).</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Módulo 3 — Cultura</h3>
            <p>Cultura, identidade, etnocentrismo, relativismo, multiculturalismo, indústria cultural (Adorno/Horkheimer), globalização cultural.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Módulo 4 — Desigualdades</h3>
            <p>Estratificação social, classes, raça, racismo estrutural (Silvio Almeida), gênero, patriarcado, pobreza e exclusão.</p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Módulo 5 — Trabalho</h3>
            <p>Revolução Industrial, fordismo/taylorismo/toyotismo, precarização, uberização, economia digital e solidária.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Módulo 6 — Política</h3>
            <p>Estado, poder, democracia, cidadania, Constituição de 1988, Direitos Humanos, movimentos sociais, mídia política.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Módulo 7 — Brasil</h3>
            <p>Formação da sociedade brasileira, urbanização, violência, educação, questão indígena e quilombola, meio ambiente.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Módulo 8 — Contemporâneo</h3>
            <p>Globalização, sociedade em rede (Castells), IA e impactos sociais, biopolítica (Foucault/Agamben), desinformação, polarização.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">20 Conceitos Essenciais</span>
        <h2>2. Os 20 Conceitos que Mais Caem no ENEM</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Conceito</th>
                <th>Definição resumida</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fato social</td>
                <td>Maneira de agir, pensar e sentir externa e coercitiva ao indivíduo</td>
                <td>Durkheim</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Anomia</td>
                <td>Estado de ausência ou enfraquecimento das normas sociais</td>
                <td>Durkheim</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Solidariedade mecânica</td>
                <td>Coesão pela semelhança; típica de sociedades tradicionais</td>
                <td>Durkheim</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Solidariedade orgânica</td>
                <td>Coesão pela interdependência entre funções especializadas</td>
                <td>Durkheim</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Alienação</td>
                <td>Separação do trabalhador do produto, processo e de si mesmo</td>
                <td>Marx</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Mais-valia</td>
                <td>Diferença entre o valor produzido e o salário pago, apropriada pelo capitalista</td>
                <td>Marx</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Luta de classes</td>
                <td>Conflito estrutural entre burguesia (detentora dos meios de produção) e proletariado</td>
                <td>Marx</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Ação social</td>
                <td>Ação dotada de sentido subjetivo e orientada em relação ao outro</td>
                <td>Weber</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Dominação carismática</td>
                <td>Poder baseado em qualidades pessoais extraordinárias reconhecidas pelos seguidores</td>
                <td>Weber</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Burocracia / dominação racional-legal</td>
                <td>Poder baseado em normas impessoais; autoridade deriva do cargo, não da pessoa</td>
                <td>Weber</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Habitus</td>
                <td>Disposições incorporadas pelo indivíduo ao longo da socialização de classe</td>
                <td>Bourdieu</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Capital cultural</td>
                <td>Conhecimentos, habilidades e títulos que conferem status e vantagens sociais</td>
                <td>Bourdieu</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Etnocentrismo</td>
                <td>Julgamento de outras culturas com base nos valores da própria cultura</td>
                <td>Sumner / Lévi-Strauss</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Indústria cultural</td>
                <td>Sistema de produção padronizada de cultura para consumo de massa; neutraliza a crítica</td>
                <td>Adorno / Horkheimer</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Racismo estrutural</td>
                <td>Racismo inscrito nas instituições e práticas sociais, independente de intenção individual</td>
                <td>Silvio Almeida</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Patriarcado</td>
                <td>Sistema de dominação masculina estruturado socialmente; manifesta-se na divisão sexual do trabalho</td>
                <td>Saffioti / Beauvoir</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Movimentos sociais</td>
                <td>Ações coletivas organizadas para transformar estruturas sociais e políticas</td>
                <td>Touraine / Tarrow</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Biopoder / biopolítica</td>
                <td>Poder que gere a vida das populações (saúde, natalidade, segurança)</td>
                <td>Foucault</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Sociedade em rede</td>
                <td>Organização social baseada em fluxos de informação, capital e poder em tempo real</td>
                <td>Castells</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Violência simbólica</td>
                <td>Dominação exercida com cumplicidade dos dominados, que a percebem como legítima ou natural</td>
                <td>Bourdieu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros Comuns</span>
        <h2>3. Os Erros Mais Comuns e Como Evitá-los</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Alienação ≠ Anomia</h3>
            <p>Alienação é Marx: separação do trabalhador de seu produto. Anomia é Durkheim: ausência de normas sociais. São autores e problemas completamente diferentes.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Etnocentrismo ≠ Racismo</h3>
            <p>Etnocentrismo é julgar culturas diferentes pela própria — pode ser qualquer povo sobre qualquer outro. Racismo é discriminação baseada em raça/cor, com componente de poder estrutural.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Weber não é marxista</h3>
            <p>Weber dialogou com Marx, mas nunca adotou o determinismo econômico. Para Weber, idéias (como a ética protestante) também causam mudanças sociais — não apenas a economia.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Solidariedade mecânica ≠ solidariedade moderna</h3>
            <p>No senso comum, "solidariedade" significa ajuda mútua. Em Durkheim, mecânica é coesão pela semelhança (primitiva) e orgânica é coesão pela diferença (industrial). São conceitos técnicos.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Fato social não é qualquer evento</h3>
            <p>O fato social durkheimiano é externo ao indivíduo e coercitivo — não é qualquer acontecimento social. Um modismo ou costume só é fato social se tiver essa exterioridade e coercitividade.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Habitus ≠ hábito</h3>
            <p>Hábito é comportamento repetido consciente ou inconsciente. Habitus (Bourdieu) é um sistema de disposições duráveis, incorporadas pela socialização de classe, que gera práticas sem deliberação consciente.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Véspera da Prova</span>
        <h2>4. Checklist de Revisão — O Que Rever na Véspera</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 660 280" width="660" height="280" aria-label="Checklist de revisão para o ENEM">
            {[
              { y: 20, text: "☑ Durkheim: fato social, anomia, solidariedade mecânica e orgânica, suicídio" },
              { y: 55, text: "☑ Marx: modo de produção, mais-valia, alienação, luta de classes, ideologia" },
              { y: 90, text: "☑ Weber: ação social (4 tipos), dominação (3 tipos), burocracia, ética protestante" },
              { y: 125, text: "☑ Bourdieu: habitus, capital (cultural, econômico, social), campo, violência simbólica" },
              { y: 160, text: "☑ Cultura: etnocentrismo, relativismo, multiculturalismo, indústria cultural" },
              { y: 195, text: "☑ Desigualdades: estratificação, racismo estrutural, patriarcado, interseccionalidade" },
              { y: 230, text: "☑ Contemporâneo: Castells (rede), Foucault (biopoder), movimentos sociais, democracia" },
            ].map((item) => (
              <g key={item.y}>
                <rect x={10} y={item.y} width={640} height={30} rx={5} fill="#f0fdf4" stroke="#16a34a" strokeWidth={1} />
                <text x={20} y={item.y + 20} fontSize={12} fill="#14532d">{item.text}</text>
              </g>
            ))}
          </svg>
          <figcaption>Revise pelo menos esses pontos antes da prova de Ciências Humanas.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Estratégia de tempo na prova</h3>
          <p>
            Sociologia no ENEM: normalmente 7–10 questões, integradas com Filosofia, História e
            Geografia (Ciências Humanas — 45 questões no total, 5h30 disponíveis).
            Tempo médio: ~5 minutos por questão de Sociologia. Se travar em uma questão,
            marque a mais provável e avance — não deixe questões mais fáceis sem resposta.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Autores Essenciais</span>
        <h2>5. Os 8 Autores que Você Precisa Dominar</h2>
        <p>
          O ENEM não exige conhecimento enciclopédico de todos os sociólogos da história, mas há um
          núcleo de autores que aparece repetidamente. Dominar os conceitos centrais de cada um e saber
          aplicá-los é suficiente para a grande maioria das questões. Os 8 autores a seguir explicam
          cerca de 90% das questões de Sociologia do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obras principais</th>
                <th>3 conceitos centrais</th>
                <th>Palavra-chave que revela</th>
                <th>Armadilha frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Émile Durkheim</strong></td>
                <td>As Regras do Método Sociológico; O Suicídio; A Divisão do Trabalho Social</td>
                <td>Fato social; anomia; solidariedade mecânica/orgânica</td>
                <td>"norma", "coercitivo", "externo", "suicídio", "solidariedade"</td>
                <td>Confundir anomia com alienação (Marx)</td>
              </tr>
              <tr>
                <td><strong>Karl Marx</strong></td>
                <td>O Capital; Manuscritos Econômico-Filosóficos; Manifesto Comunista</td>
                <td>Alienação; mais-valia; luta de classes</td>
                <td>"exploração", "capitalista", "proletariado", "mais-valia", "infraestrutura"</td>
                <td>Atribuir burocracia ou dominação a Marx (são de Weber)</td>
              </tr>
              <tr>
                <td><strong>Max Weber</strong></td>
                <td>Economia e Sociedade; Ética Protestante e o Espírito do Capitalismo</td>
                <td>Ação social; dominação (3 tipos); burocracia</td>
                <td>"ação orientada", "dominação", "racional-legal", "burocracia", "carisma"</td>
                <td>Confundir Weber com Marx (determinismo econômico)</td>
              </tr>
              <tr>
                <td><strong>Pierre Bourdieu</strong></td>
                <td>A Reprodução; A Distinção; O Senso Prático</td>
                <td>Habitus; capital cultural; violência simbólica</td>
                <td>"habitus", "campo", "capital", "distinção", "reprodução social"</td>
                <td>Confundir habitus com hábito; capital cultural com bens materiais</td>
              </tr>
              <tr>
                <td><strong>Adorno / Horkheimer</strong></td>
                <td>Dialética do Esclarecimento (1944)</td>
                <td>Indústria cultural; pseudoindividualização; razão instrumental</td>
                <td>"indústria cultural", "padronização", "cultura de massa", "Frankfurt"</td>
                <td>Confundir indústria cultural com setor cultural em geral</td>
              </tr>
              <tr>
                <td><strong>Florestan Fernandes</strong></td>
                <td>A Integração do Negro na Sociedade de Classes; A Revolução Burguesa no Brasil</td>
                <td>Racismo estrutural; capitalismo dependente; crítica à democracia racial</td>
                <td>"democracia racial" como mito; "capitalismo dependente"; "pós-abolição"</td>
                <td>Confundir com Gilberto Freyre (visões opostas sobre raça)</td>
              </tr>
              <tr>
                <td><strong>Manuel Castells</strong></td>
                <td>A Era da Informação (trilogia, 1996–1998)</td>
                <td>Sociedade em rede; espaço de fluxos; poder nos nós</td>
                <td>"rede", "fluxos", "informação", "nós estratégicos", "espaço de lugares"</td>
                <td>Confundir sociedade em rede com simples uso da internet</td>
              </tr>
              <tr>
                <td><strong>Silvio Almeida</strong></td>
                <td>Racismo Estrutural (2019)</td>
                <td>Racismo estrutural; racismo institucional; normalização do racismo</td>
                <td>"racismo estrutural", "institucional", "sem intenção", "normalizado"</td>
                <td>Reduzir racismo a atos individuais conscientes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Mapa conceitual dos autores e conexões">
            {[
              { x: 80, y: 100, label: "Durkheim", color: "#16a34a" },
              { x: 240, y: 40, label: "Marx", color: "#dc2626" },
              { x: 240, y: 160, label: "Weber", color: "#0ea5e9" },
              { x: 400, y: 100, label: "Bourdieu", color: "#7c3aed" },
              { x: 560, y: 40, label: "Castells", color: "#f59e0b" },
              { x: 560, y: 160, label: "Almeida", color: "#1e3a8a" },
            ].map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r={36} fill={n.color} opacity={0.15} stroke={n.color} strokeWidth={1.8} />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize={11} fontWeight={700} fill={n.color}>{n.label}</text>
              </g>
            ))}
            <line x1={116} y1={85} x2={204} y2={52} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={116} y1={115} x2={204} y2={148} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={276} y1={40} x2={364} y2={88} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={276} y1={160} x2={364} y2={112} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={436} y1={88} x2={524} y2={52} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={436} y1={112} x2={524} y2={148} stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3" />
            <text x={340} y={195} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">Conexões entre as tradições teóricas — do estruturalismo ao contemporâneo</text>
          </svg>
          <figcaption>Os 6 autores centrais e suas conexões na tradição sociológica cobrada no ENEM.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>6. Cronologia da Sociologia: dos Clássicos ao Contemporâneo</h2>
        <p>
          Conhecer a cronologia da Sociologia ajuda a contextualizar por que cada teoria surgiu:
          Marx respondia ao capitalismo industrial brutal do século XIX; Durkheim preocupava-se com a
          coesão social em sociedades fragmentadas pela modernidade; Weber tentava entender por que o
          capitalismo surgiu no Ocidente e não em outros lugares; Bourdieu queria explicar como as
          desigualdades se reproduzem apesar da aparência meritocrática da escola.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 140" width="680" height="140" aria-label="Linha do tempo da Sociologia">
            <line x1={20} y1={70} x2={660} y2={70} stroke="#9ca3af" strokeWidth={2} />
            {[
              { x: 40, year: "1848", label: "Manifesto\nComunista", color: "#dc2626" },
              { x: 150, year: "1893", label: "Divisão do\nTrabalho Social", color: "#16a34a" },
              { x: 240, year: "1905", label: "Ética\nProtestante", color: "#0ea5e9" },
              { x: 340, year: "1944", label: "Dialética do\nEsclarecimento", color: "#f59e0b" },
              { x: 430, year: "1970", label: "A\nReprodução", color: "#7c3aed" },
              { x: 520, year: "1996", label: "Era da\nInformação", color: "#f97316" },
              { x: 620, year: "2019", label: "Racismo\nEstrutural", color: "#1e3a8a" },
            ].map((ev) => (
              <g key={ev.year}>
                <circle cx={ev.x} cy={70} r={7} fill={ev.color} />
                <text x={ev.x} y={45} textAnchor="middle" fontSize={10} fontWeight={700} fill={ev.color}>{ev.year}</text>
                {ev.label.split("\n").map((l, i) => (
                  <text key={i} x={ev.x} y={92 + i * 13} textAnchor="middle" fontSize={9} fill="#374151">{l}</text>
                ))}
              </g>
            ))}
          </svg>
          <figcaption>Marcos da produção sociológica cobrada no ENEM — do Manifesto Comunista ao Racismo Estrutural.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Obra</th>
                <th>Autor</th>
                <th>Ano</th>
                <th>Conceito central</th>
                <th>Por que importa para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manifesto do Partido Comunista</td>
                <td>Marx e Engels</td>
                <td>1848</td>
                <td>Luta de classes; proletariado</td>
                <td>Base para questões sobre trabalho, capitalismo e desigualdade</td>
              </tr>
              <tr>
                <td>As Regras do Método Sociológico</td>
                <td>Durkheim</td>
                <td>1895</td>
                <td>Fato social; método sociológico</td>
                <td>Definição clássica do objeto da Sociologia</td>
              </tr>
              <tr>
                <td>A Ética Protestante e o Espírito do Capitalismo</td>
                <td>Weber</td>
                <td>1905</td>
                <td>Relação entre valores e economia</td>
                <td>Contraste com o determinismo econômico de Marx</td>
              </tr>
              <tr>
                <td>Dialética do Esclarecimento</td>
                <td>Adorno e Horkheimer</td>
                <td>1944</td>
                <td>Indústria cultural; razão instrumental</td>
                <td>Base para questões sobre mídia, cultura de massas e consumo</td>
              </tr>
              <tr>
                <td>A Reprodução</td>
                <td>Bourdieu e Passeron</td>
                <td>1970</td>
                <td>Capital cultural; reprodução social via escola</td>
                <td>Fundamental para questões sobre educação e desigualdade</td>
              </tr>
              <tr>
                <td>Racismo Estrutural</td>
                <td>Silvio Almeida</td>
                <td>2019</td>
                <td>Racismo estrutural e institucional</td>
                <td>Crescentemente presente no ENEM desde 2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo de Autores</span>
        <h2>7. Conceitos Comparados: Quem Disse o Quê</h2>
        <p>
          A confusão mais comum no ENEM é atribuir um conceito ao autor errado. O ENEM explora
          sistematicamente esse erro nas alternativas incorretas. A tabela a seguir mapeia os 15
          pares de confusão mais frequentes para que você nunca mais caia nessa armadilha.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Autor CORRETO</th>
                <th>Autor que se confunde</th>
                <th>Como distinguir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alienação</td>
                <td><strong>Marx</strong></td>
                <td>Durkheim</td>
                <td>Alienação = trabalhador × produto; anomia = falta de normas</td>
              </tr>
              <tr>
                <td>Anomia</td>
                <td><strong>Durkheim</strong></td>
                <td>Marx</td>
                <td>Anomia aparece sempre com "norma" e "regulação", nunca com "exploração"</td>
              </tr>
              <tr>
                <td>Burocracia / dominação racional-legal</td>
                <td><strong>Weber</strong></td>
                <td>Marx</td>
                <td>"Cargo", "impessoal", "norma abstrata" → Weber sempre</td>
              </tr>
              <tr>
                <td>Mais-valia</td>
                <td><strong>Marx</strong></td>
                <td>Weber</td>
                <td>Mais-valia = diferença entre valor produzido e salário pago</td>
              </tr>
              <tr>
                <td>Habitus</td>
                <td><strong>Bourdieu</strong></td>
                <td>Weber / Durkheim</td>
                <td>"Disposições incorporadas de classe" + "pré-reflexivo" → Bourdieu</td>
              </tr>
              <tr>
                <td>Indústria cultural</td>
                <td><strong>Adorno / Horkheimer</strong></td>
                <td>Marx diretamente</td>
                <td>"Padronização", "cultura como mercadoria", "Escola de Frankfurt" → Adorno</td>
              </tr>
              <tr>
                <td>Fato social</td>
                <td><strong>Durkheim</strong></td>
                <td>Weber</td>
                <td>"Externo", "coercitivo" → Durkheim; "sentido subjetivo" → Weber (ação social)</td>
              </tr>
              <tr>
                <td>Ação social</td>
                <td><strong>Weber</strong></td>
                <td>Durkheim</td>
                <td>Ação com sentido orientado para o outro → Weber; externo e coercitivo → Durkheim</td>
              </tr>
              <tr>
                <td>Capital cultural</td>
                <td><strong>Bourdieu</strong></td>
                <td>Marx (capital econômico)</td>
                <td>Capital econômico = dinheiro/propriedade; cultural = saberes, títulos, disposições</td>
              </tr>
              <tr>
                <td>Racismo estrutural</td>
                <td><strong>Silvio Almeida</strong></td>
                <td>Florestan Fernandes</td>
                <td>Florestan critica a democracia racial; Almeida teoriza o racismo como estrutura</td>
              </tr>
              <tr>
                <td>Democracia racial (como mito)</td>
                <td><strong>Florestan Fernandes</strong></td>
                <td>Gilberto Freyre</td>
                <td>Freyre criou o conceito positivamente; Florestan o desmontou criticamente</td>
              </tr>
              <tr>
                <td>Sociedade em rede</td>
                <td><strong>Manuel Castells</strong></td>
                <td>Bauman</td>
                <td>Redes, fluxos, nós → Castells; liquidez, fluidez, incerteza → Bauman</td>
              </tr>
              <tr>
                <td>Modernidade líquida</td>
                <td><strong>Zygmunt Bauman</strong></td>
                <td>Castells</td>
                <td>"Líquido", "identidade fluida", "amor líquido" → Bauman</td>
              </tr>
              <tr>
                <td>Biopoder / biopolítica</td>
                <td><strong>Michel Foucault</strong></td>
                <td>Durkheim ou Weber</td>
                <td>"Poder sobre a vida", "populações", "disciplina dos corpos" → Foucault</td>
              </tr>
              <tr>
                <td>Violência simbólica</td>
                <td><strong>Bourdieu</strong></td>
                <td>Foucault</td>
                <td>Violência simbólica = dominação com cumplicidade do dominado → Bourdieu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Regra mnemônica central</h3>
          <p>
            <strong>DMWB</strong> — Durkheim (normas/coesão), Marx (exploração/conflito),
            Weber (sentido/dominação), Bourdieu (habitus/reprodução). Quando um texto de apoio
            aparecer, localize uma dessas quatro famílias de palavras-chave para identificar o autor
            sem precisar decorar tudo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Autores Contemporâneos</span>
        <h2>8. Temas Emergentes: Foucault, Mbembe e o ENEM Recente</h2>
        <p>
          O ENEM das últimas edições (especialmente a partir de 2018) tem incorporado cada vez mais
          autores além do cânone clássico. <strong>Michel Foucault</strong>, <strong>Achille Mbembe</strong>
          e <strong>Frantz Fanon</strong> apareceram em questões que tratam de controle social, violência
          e colonialismo. Conhecer o conceito central de cada um é suficiente para não ser surpreendido.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Conceito central</th>
                <th>Definição resumida</th>
                <th>Aplicação no Brasil</th>
                <th>Palavra-chave no texto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Michel Foucault</strong></td>
                <td>Biopoder / biopolítica</td>
                <td>Poder que administra a vida das populações: saúde, natalidade, segurança, disciplina dos corpos</td>
                <td>Vacinação obrigatória, internação compulsória, registro civil, controle da sexualidade</td>
                <td>"poder sobre a vida", "disciplina", "normalização", "populações"</td>
              </tr>
              <tr>
                <td><strong>Foucault</strong></td>
                <td>Disciplina e vigilância</td>
                <td>Instituições (escola, prisão, hospital) disciplinam corpos e mentes por meio de normas e punições</td>
                <td>Escola, manicômios, presídios superlotados, câmeras de vigilância</td>
                <td>"panóptico", "vigilância", "punição", "normatização"</td>
              </tr>
              <tr>
                <td><strong>Achille Mbembe</strong></td>
                <td>Necropolítica</td>
                <td>O poder soberano que decide quem pode viver e quem deve (ser deixado para) morrer — especialmente corpos negros e colonizados</td>
                <td>Mortalidade de jovens negros nas periferias; violência policial; abandono do Estado nas favelas</td>
                <td>"quem pode morrer", "populações descartáveis", "necropolítica"</td>
              </tr>
              <tr>
                <td><strong>Frantz Fanon</strong></td>
                <td>Colonialismo e subjetividade</td>
                <td>O colonialismo não destrói apenas as economias — ele destrói a subjetividade e a cultura dos colonizados, impondo a identidade do colonizador como superior</td>
                <td>Branqueamento como ideal; negação da cultura afro-indígena; racismo internalizado</td>
                <td>"colonizado", "pele negra", "máscara branca", "psicologia colonial"</td>
              </tr>
              <tr>
                <td><strong>Zygmunt Bauman</strong></td>
                <td>Modernidade líquida</td>
                <td>Na modernidade atual, tudo é fluido e instável: identidades, laços afetivos, empregos, valores morais — contrário à solidez da modernidade anterior</td>
                <td>Instabilidade no trabalho (uberização); relacionamentos temporários; consumismo identitário</td>
                <td>"líquido", "fluidez", "identidade fluida", "incerteza"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Como esses autores aparecem no ENEM</h3>
          <p>
            Foucault aparece em questões sobre controle social, saúde pública e a função das
            instituições. Mbembe é evocado em questões sobre violência policial e a seletividade
            racial da morte. Fanon aparece em questões sobre colonialismo, racismo e identidade.
            Bauman é acionado para questões sobre globalização, trabalho flexível e consumismo.
            Nenhum exige conhecimento aprofundado das obras — o conceito central basta.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raça no Brasil</span>
        <h2>9. A Questão Racial no Brasil: Síntese dos Conceitos</h2>
        <p>
          A questão racial é um dos temas mais frequentes e complexos do ENEM de Sociologia. Ela exige
          compreensão de uma longa trajetória histórica — da escravidão à abolição formal, do mito da
          democracia racial ao racismo estrutural, das ações afirmativas ao debate contemporâneo.
          Confundir os autores ou as posições nesse debate é um dos erros mais comuns.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 130" width="680" height="130" aria-label="Linha do tempo do debate racial no Brasil">
            <line x1={20} y1={65} x2={660} y2={65} stroke="#9ca3af" strokeWidth={2} />
            {[
              { x: 50, year: "1888", label: "Lei Áurea", color: "#dc2626" },
              { x: 140, year: "1933", label: "Casa Grande\ne Senzala", color: "#f59e0b" },
              { x: 240, year: "1965", label: "Integração do\nNegro (Florestan)", color: "#16a34a" },
              { x: 340, year: "1988", label: "CF/88 Art. 68\n(quilombolas)", color: "#0ea5e9" },
              { x: 430, year: "2003", label: "Lei 10.639\nCotas federais", color: "#7c3aed" },
              { x: 540, year: "2019", label: "Racismo\nEstrutural", color: "#1e3a8a" },
              { x: 630, year: "2022", label: "Marco Legal\nIndígenas", color: "#059669" },
            ].map((ev) => (
              <g key={ev.year}>
                <circle cx={ev.x} cy={65} r={6} fill={ev.color} />
                <text x={ev.x} y={42} textAnchor="middle" fontSize={9} fontWeight={700} fill={ev.color}>{ev.year}</text>
                {ev.label.split("\n").map((l, i) => (
                  <text key={i} x={ev.x} y={82 + i * 13} textAnchor="middle" fontSize={8} fill="#374151">{l}</text>
                ))}
              </g>
            ))}
          </svg>
          <figcaption>Marcos do debate racial no Brasil — da abolição ao racismo estrutural.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito / Posição</th>
                <th>Autor / Período</th>
                <th>Argumento central</th>
                <th>Crítica / Contraponto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Democracia racial</strong></td>
                <td>Gilberto Freyre, 1933</td>
                <td>A miscigenação no Brasil criou relações raciais mais harmoniosas do que em outros países</td>
                <td>Mascara as desigualdades raciais reais; é uma ideologia que bloqueia a mobilização negra</td>
              </tr>
              <tr>
                <td><strong>Crítica à democracia racial</strong></td>
                <td>Florestan Fernandes, 1965</td>
                <td>A democracia racial é um mito que oculta o racismo estrutural e a exclusão dos negros no pós-abolição</td>
                <td>Base para o movimento negro brasileiro e as políticas de ação afirmativa</td>
              </tr>
              <tr>
                <td><strong>Branqueamento</strong></td>
                <td>Política estatal séc. XIX–XX</td>
                <td>Incentivo à imigração europeia para "embranquecer" a população brasileira e "civilizá-la"</td>
                <td>Expressão explícita de racismo institucional do Estado brasileiro</td>
              </tr>
              <tr>
                <td><strong>Racismo estrutural</strong></td>
                <td>Silvio Almeida, 2019</td>
                <td>O racismo é constitutivo da ordem social brasileira, operando nas instituições independentemente de intenção individual</td>
                <td>Principal referência contemporânea sobre raça; influenciou legislação e políticas públicas</td>
              </tr>
              <tr>
                <td><strong>Ação afirmativa / cotas</strong></td>
                <td>Política pública, 2001–2012</td>
                <td>Reserva de vagas em universidades e concursos para negros e indígenas como reparação histórica</td>
                <td>Debate entre defensores (reparação histórica, diversidade) e críticos (meritocracia, "racialização")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano de Estudos</span>
        <h2>10. Plano de Estudos Final: 4 Semanas para o ENEM</h2>
        <p>
          Sociologia é uma das matérias em que uma preparação focada e bem estruturada tem retorno
          rápido. Com 4 semanas de estudo consistente — cerca de 1 hora por dia —, é possível dominar
          os temas fundamentais e elevar significativamente o desempenho. A chave é combinar teoria
          com prática de questões contextualizadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Semana</th>
                <th>Tema central</th>
                <th>O que estudar</th>
                <th>Obras-chave</th>
                <th>Meta de exercícios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1</strong></td>
                <td>Fundamentos e clássicos</td>
                <td>Durkheim (fato social, anomia, solidariedade), Marx (alienação, mais-valia, luta de classes), Weber (ação social, dominação, burocracia)</td>
                <td>As Regras do Método (Durkheim), O Capital Vol. 1 Cap. 1 (Marx), Economia e Sociedade Cap. 1 (Weber)</td>
                <td>20 questões ENEM sobre clássicos (2015–2022)</td>
              </tr>
              <tr>
                <td><strong>2</strong></td>
                <td>Cultura, identidade e desigualdade</td>
                <td>Bourdieu (habitus, capital cultural), indústria cultural (Adorno), etnocentrismo vs. relativismo, estratificação social, racismo estrutural</td>
                <td>A Distinção (Bourdieu), Dialética do Esclarecimento (cap. Indústria Cultural), Racismo Estrutural (Almeida)</td>
                <td>20 questões sobre cultura e desigualdade</td>
              </tr>
              <tr>
                <td><strong>3</strong></td>
                <td>Trabalho, política e Estado</td>
                <td>Fordismo/taylorismo/toyotismo, precarização, cidadania (Marshall), movimentos sociais, CF/1988, democracia, Direitos Humanos</td>
                <td>Capitais do Século XXI (Piketty), O Privilégio da Servidão (Antunes)</td>
                <td>20 questões sobre trabalho e política</td>
              </tr>
              <tr>
                <td><strong>4</strong></td>
                <td>Brasil e contemporaneidade</td>
                <td>Formação do Brasil (Freyre vs. Florestan), globalização (Castells, Bauman), questão ambiental, mídia e democracia, temas emergentes (Foucault, Mbembe)</td>
                <td>Casa Grande e Senzala (Freyre — introdução), A Era da Informação Vol. 1 (Castells — intro)</td>
                <td>20 questões contextualizadas + 2 simulados completos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Meta de desempenho e como calcular</h3>
          <p>
            No ENEM, Ciências Humanas tem 45 questões. Para cursos de ciências humanas em universidades
            federais (SISU), a nota de corte costuma exigir entre <strong>65% e 80% de acertos</strong>.
            Em Sociologia especificamente (~8-10 questões), dominar os conceitos deste curso permite
            acertar ao menos 7-8 questões — contribuição significativa para a nota da área.
            A nota de Ciências Humanas no ENEM não é simplesmente a soma de acertos: usa a Teoria de
            Resposta ao Item (TRI), que valoriza acertar questões difíceis e penaliza inconsistências.
            Por isso, é melhor dominar bem os temas fundamentais do que tentar acertar questões aleatórias.
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎥</span>
            <h3>Videoaulas gratuitas</h3>
            <p>Khan Academy Brasil (Ciências Humanas), Me Salva! (Sociologia ENEM), Descomplica (Sociologia), YouTube do MEC (Ação e Pensamento).</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Questões oficiais ENEM</h3>
            <p>Banco de questões INEP (1998–2023) disponível em inep.gov.br. Filtre por Ciências Humanas e resolva em ordem cronológica para perceber a evolução dos temas.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Leituras complementares</h3>
            <p>Sociologia para o ENEM (Editora FTD/Saraiva), Sociologia Hoje (Editora Ática) — ambos alinham o conteúdo às matrizes de referência do ENEM.</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Grupos de estudo</h3>
            <p>Grupos de WhatsApp/Telegram focados em ENEM discutem questões e conceitos. Explicar um conceito para outro colega é a forma mais eficaz de fixação.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios de Revisão Final</h2>

        <Exercise
          level="Básico"
          title="Revisão: clássicos"
          statement={<p>Qual das seguintes afirmações corresponde corretamente a um dos três grandes clássicos da Sociologia?</p>}
          options={[
            { letter: "A", text: <>Marx defendia que a burocracia era o instrumento mais eficiente da dominação racional nas sociedades modernas.</> },
            { letter: "B", text: <>Durkheim analisou o suicídio como fenômeno puramente individual, resultante de perturbações psicológicas do indivíduo.</> },
            { letter: "C", text: <>Weber identificou três tipos de dominação legítima: racional-legal, tradicional e carismática, cada uma com lógica distinta de obediência.</>, correct: true },
            { letter: "D", text: <>Durkheim foi o principal teórico da luta de classes e da exploração do proletariado pelo capital.</> },
            { letter: "E", text: <>Marx defendia que as ideias religiosas, especialmente o protestantismo, foram a causa da formação do capitalismo moderno.</> },
          ]}
          resolution={<p>A afirmação sobre os três tipos de dominação weberiana está correta. As demais invertem autores: a burocracia como dominação eficiente é Weber (não Marx); o suicídio como fenômeno social (não individual) é Durkheim; luta de classes é Marx (não Durkheim); a relação entre protestantismo e capitalismo é Weber (não Marx).</p>}
        />

        <Exercise
          level="Intermediário"
          title="Revisão: cultura e identidade"
          statement={<p>A Escola de Frankfurt, representada por Adorno e Horkheimer, criou o conceito de "indústria cultural" para descrever:</p>}
          options={[
            { letter: "A", text: <>A produção artesanal de bens culturais por comunidades tradicionais, preservando sua identidade frente à globalização.</> },
            { letter: "B", text: <>A diversidade cultural que emerge naturalmente nas sociedades industriais como resultado da liberdade criativa dos artistas.</> },
            { letter: "C", text: <>A produção padronizada e mercantilizada de cultura para consumo de massa, que neutraliza a capacidade crítica e transforma a arte em entretenimento conformista.</>, correct: true },
            { letter: "D", text: <>O conjunto de políticas culturais do Estado para proteger e promover as artes populares contra a cultura elitista.</> },
            { letter: "E", text: <>O processo pelo qual a cultura operária revolucionária se organiza para disputar hegemonia com a cultura burguesa.</> },
          ]}
          resolution={<p>A indústria cultural (Adorno e Horkheimer, "Dialética do Esclarecimento", 1944) é uma crítica marxista-frankfurtiana à cultura capitalista de massa: filmes, música popular e rádio são produzidos de forma padronizada visando lucro, entorpecendo a consciência crítica das massas e mantendo-as conformadas com o status quo. É o oposto da arte autônoma, que deveria questionar e incomodar.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Revisão: trabalho contemporâneo"
          statement={<p>O modelo de trabalho chamado "toyotismo" ou "acumulação flexível" se diferencia do fordismo principalmente porque:</p>}
          options={[
            { letter: "A", text: <>Aumenta a rigidez da linha de produção, tornando os trabalhadores ainda mais especializados em uma única tarefa repetitiva.</> },
            { letter: "B", text: <>Produz em massa para estoque, otimizando economia de escala por meio da linha de montagem contínua.</> },
            { letter: "C", text: <>Produz de forma flexível e descentralizada, sob demanda, com trabalhadores polivalentes e externalização de etapas produtivas.</>, correct: true },
            { letter: "D", text: <>Elimina completamente a divisão do trabalho, conferindo a cada trabalhador controle total sobre o processo produtivo.</> },
            { letter: "E", text: <>Concentra toda a produção em grandes fábricas verticalizadas, eliminando terceiros e fornecedores externos.</> },
          ]}
          resolution={<p>O fordismo: produção em massa + linha de montagem rígida + trabalhador especializado em tarefa única + produção para estoque. O toyotismo (just in time): produção sob demanda + flexibilidade + trabalhador polivalente + terceirização/externalização + estoque mínimo. A acumulação flexível (Harvey) é a lógica do capital no pós-fordismo: flexibilidade de produto, processo, mercado de trabalho e padrões de consumo.</p>}
        />

        <Exercise
          level="Avançado"
          title="Revisão: Estado e democracia"
          statement={<p>A Constituição Federal de 1988, chamada de "Constituição Cidadã", representou uma ruptura com o regime anterior ao incorporar:</p>}
          options={[
            { letter: "A", text: <>Um sistema presidencialista centralizado, que concentra poder no Executivo federal e limita a autonomia de estados e municípios.</> },
            { letter: "B", text: <>Direitos sociais extensos (saúde, educação, previdência), direitos políticos ampliados e mecanismos de participação democrática direta, como referendo e plebiscito.</>, correct: true },
            { letter: "C", text: <>A criminalização dos movimentos sindicais e a proibição de greves em setores estratégicos da economia.</> },
            { letter: "D", text: <>A manutenção da legislação autoritária do regime militar, com adaptações pontuais para o contexto de abertura política.</> },
            { letter: "E", text: <>A subordinação dos direitos sociais às metas de equilíbrio fiscal, estabelecendo limites constitucionais para gastos com saúde e educação.</> },
          ]}
          resolution={<p>A CF/1988 foi o resultado de ampla mobilização social (Emendão popular com mais de 12 milhões de assinaturas) e incorporou um catálogo extenso de direitos fundamentais: direitos civis e políticos clássicos + direitos sociais (saúde, educação, previdência, moradia) + direitos difusos (ambiente, consumidor, patrimônio cultural) + mecanismos de democracia semidireta (referendo, plebiscito, iniciativa popular). Foi uma ruptura com a ordem autoritária anterior.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Revisão: interseccionalidade"
          statement={
            <p>
              "Uma mulher negra de baixa renda moradora de periferia enfrenta dificuldades no mercado
              de trabalho que não se explicam apenas pelo gênero, apenas pela raça ou apenas pela
              classe social isoladamente. É a combinação e interação dessas categorias que define
              sua posição e suas chances de vida."
              <br /><br />
              Esse argumento corresponde ao conceito sociológico de:
            </p>
          }
          options={[
            { letter: "A", text: <>Estratificação social — a hierarquização da sociedade em camadas baseadas em critérios como riqueza e prestígio.</> },
            { letter: "B", text: <>Mobilidade social — o movimento de indivíduos e grupos entre posições na hierarquia social ao longo do tempo.</> },
            { letter: "C", text: <>Interseccionalidade — a análise das formas de opressão (gênero, raça, classe) como sistemas que se cruzam e se potencializam mutuamente, não como categorias separadas e aditivas.</>, correct: true },
            { letter: "D", text: <>Habitus de classe — as disposições incorporadas que determinam as práticas e preferências dos agentes em um campo social específico.</> },
            { letter: "E", text: <>Solidariedade orgânica — a interdependência entre grupos sociais distintos que gera coesão nas sociedades industriais modernas.</> },
          ]}
          resolution={<p>O conceito de interseccionalidade foi desenvolvido pela jurista e ativista Kimberlé Crenshaw (1989) para descrever como diferentes sistemas de opressão — racismo, sexismo, classismo — não se somam, mas se entrecruzam e se potencializam. Uma mulher negra pobre não sofre "racismo + sexismo + pobreza" como categorias separadas: ela vive uma experiência específica que não pode ser compreendida por nenhuma dessas lentes isoladamente.</p>}
        />
      </section>
    </article>
  );
}
