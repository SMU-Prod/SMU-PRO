"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 24</span>
          <h1>Artigos de opinião e textos argumentativos</h1>
          <p>
            O texto argumentativo em espanhol exige do leitor uma dupla competência: compreender o idioma
            e analisar criticamente a estrutura do raciocínio. No ENEM, artigos de opinião, cartas de leitores,
            editoriais e manifestos são apresentados com perguntas que cobram identificação da tese, dos
            argumentos, das estratégias persuasivas e da posição do autor. O espanhol dispõe de um rico
            repertório de conectores argumentativos — muitos similares ao português, outros com funcionamento
            próprio — cuja compreensão é decisiva para entender a lógica interna do texto. Este capítulo
            desenvolve todas essas habilidades com foco no nível ENEM.
          </p>
        </div>
      </section>

      {/* Seção 1 — Estrutura argumentativa */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Textual</span>
        <h2>Estrutura do texto argumentativo em espanhol</h2>
        <p>
          Todo texto argumentativo organiza seus elementos em uma sequência lógica. Em espanhol, a terminologia
          para cada parte varia ligeiramente conforme o país, mas as funções são universais.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Estrutura do texto argumentativo em espanhol">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap24arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            {/* Caixas horizontais */}
            <rect x="20" y="80" width="130" height="60" rx="8" fill="#dbeafe" />
            <text x="85" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">TESIS</text>
            <text x="85" y="124" textAnchor="middle" fontSize="10" fill="#1e40af">posição do autor</text>
            <line x1="152" y1="110" x2="188" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap24arr1)" />
            <rect x="190" y="80" width="130" height="60" rx="8" fill="#d1fae5" />
            <text x="255" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">ARGUMENTOS</text>
            <text x="255" y="124" textAnchor="middle" fontSize="10" fill="#065f46">provas e razões</text>
            <line x1="322" y1="110" x2="358" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap24arr1)" />
            <rect x="360" y="80" width="150" height="60" rx="8" fill="#fef3c7" />
            <text x="435" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">CONTRA-</text>
            <text x="435" y="116" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">ARGUMENTOS</text>
            <text x="435" y="133" textAnchor="middle" fontSize="10" fill="#92400e">objeções rebatidas</text>
            <line x1="512" y1="110" x2="548" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap24arr1)" />
            <rect x="550" y="80" width="130" height="60" rx="8" fill="#fce7f3" />
            <text x="615" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">CONCLUSIÓN</text>
            <text x="615" y="124" textAnchor="middle" fontSize="10" fill="#9d174d">síntese e apelo</text>
            {/* Rótulos */}
            <text x="85" y="158" textAnchor="middle" fontSize="10" fill="#64748b">Introdução</text>
            <text x="255" y="158" textAnchor="middle" fontSize="10" fill="#64748b">Desenvolvimento</text>
            <text x="435" y="158" textAnchor="middle" fontSize="10" fill="#64748b">Contra-ponto</text>
            <text x="615" y="158" textAnchor="middle" fontSize="10" fill="#64748b">Fechamento</text>
          </svg>
          <figcaption>Estrutura típica do texto argumentativo em espanhol: tese → argumentos → contra-argumentos → conclusão.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parte</th>
                <th>Nome em espanhol</th>
                <th>O que contém</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tese</td>
                <td><em>tesis / posición / punto de vista</em></td>
                <td>A opinião central do autor sobre o tema</td>
              </tr>
              <tr>
                <td>Argumentos</td>
                <td><em>argumentos / razones / pruebas</em></td>
                <td>Dados, exemplos, citações que sustentam a tese</td>
              </tr>
              <tr>
                <td>Contra-argumentos</td>
                <td><em>contraargumentos / objeciones</em></td>
                <td>Objeções opostas que o autor menciona para rebater</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td><em>conclusión / cierre</em></td>
                <td>Síntese da tese reforçada; pode incluir apelo ao leitor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 2 — Conectores argumentativos */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores Discursivos</span>
        <h2>Conectores argumentativos em espanhol</h2>
        <p>
          Os conectores (ou marcadores discursivos) são palavras ou expressões que explicitam as relações
          lógicas entre as ideias. No texto argumentativo, eles revelam a estrutura do raciocínio do autor
          e são essenciais para uma leitura precisa.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação lógica</th>
                <th>Conectores em espanhol</th>
                <th>Equivalente em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Causalidade</td>
                <td><em>porque, ya que, puesto que, dado que, pues</em></td>
                <td>porque, já que, visto que, dado que</td>
              </tr>
              <tr>
                <td>Consequência</td>
                <td><em>por eso, por lo tanto, en consecuencia, así que</em></td>
                <td>por isso, portanto, consequentemente</td>
              </tr>
              <tr>
                <td>Oposição / Contraste</td>
                <td><em>sin embargo, pero, no obstante, aunque, a pesar de</em></td>
                <td>porém / no entanto / apesar de / embora</td>
              </tr>
              <tr>
                <td>Concessão</td>
                <td><em>si bien, aunque, a pesar de que, aun cuando</em></td>
                <td>embora, mesmo que, apesar de que</td>
              </tr>
              <tr>
                <td>Adição / Reforço</td>
                <td><em>además, asimismo, también, incluso, encima</em></td>
                <td>além disso, também, inclusive</td>
              </tr>
              <tr>
                <td>Exemplificação</td>
                <td><em>por ejemplo, tal como, como es el caso de</em></td>
                <td>por exemplo, assim como, como é o caso de</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td><em>en conclusión, en definitiva, en suma, finalmente</em></td>
                <td>em conclusão, em suma, enfim</td>
              </tr>
              <tr>
                <td>Destaque</td>
                <td><em>cabe señalar que, es importante destacar que</em></td>
                <td>cabe ressaltar que, é importante destacar que</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção especial:</strong> <em>aunque</em> pode introduzir tanto concessão
          (<em>aunque llueva, saldré</em> = mesmo que chova, sairei) quanto oposição real
          (<em>aunque me dijo que sí, no vino</em> = embora tenha dito que sim, não veio).
          O contexto determina o valor exato.
        </div>
      </section>

      {/* Seção 3 — Estratégias de argumentação */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias</span>
        <h2>Estratégias de argumentação em textos hispânicos</h2>
        <p>
          Além dos conectores, o texto argumentativo usa estratégias retóricas para persuadir o leitor.
          Identificar qual estratégia o autor usa é uma habilidade frequentemente cobrada no ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Argumento de dados</h3>
            <p>Uso de estatísticas, percentuais e pesquisas para dar credibilidade à tese. <em>"Según la OMS, el 30% de la población..."</em></p>
          </div>
          <div className="lesson-card">
            <span>👨‍🏫</span>
            <h3>Argumento de autoridade</h3>
            <p>Citação de especialistas ou instituições reconhecidas. <em>"Como afirma el Nobel de Economía..."</em></p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Argumento por analogia</h3>
            <p>Comparação com situação semelhante para iluminar o caso discutido. <em>"Al igual que ocurrió en Europa..."</em></p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Apelo emocional (<em>pathos</em>)</h3>
            <p>Recurso a sentimentos (medo, compaixão, esperança) para mover o leitor à ação ou à concordância.</p>
          </div>
        </div>
      </section>

      {/* Seção 4 — Como identificar a tese */}
      <section className="lesson-section">
        <span className="section-kicker">Habilidade Central</span>
        <h2>Como identificar a tese e o posicionamento do autor</h2>
        <p>
          A tese é a posição que o autor defende ao longo do texto. Em espanhol, ela costuma aparecer
          no primeiro ou no último parágrafo, mas pode estar implícita na seleção de argumentos.
        </p>
        <div className="lesson-highlight">
          <strong>Pistas linguísticas da tese em espanhol:</strong>
          <ul>
            <li>Verbos de opinião: <em>creo que, considero que, me parece que, es evidente que, estoy convencido de que</em></li>
            <li>Adjetivos avaliativos: <em>es fundamental / esencial / inaceptable / inadmisible / urgente</em></li>
            <li>Modalizadores: <em>es necesario que, hay que, se debe, debería, es imprescindible</em></li>
          </ul>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão em espanhol</th>
                <th>Tradução</th>
                <th>Função no texto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Creo firmemente que</em></td>
                <td>Acredito firmemente que</td>
                <td>Introduz a tese com ênfase</td>
              </tr>
              <tr>
                <td><em>Es inaceptable que</em></td>
                <td>É inaceitável que</td>
                <td>Tese com forte carga valorativa negativa</td>
              </tr>
              <tr>
                <td><em>Hay que reconocer que</em></td>
                <td>É preciso reconhecer que</td>
                <td>Concessão antes de reforçar a tese</td>
              </tr>
              <tr>
                <td><em>Lo que está claro es que</em></td>
                <td>O que está claro é que</td>
                <td>Apresenta a tese como conclusão evidente</td>
              </tr>
              <tr>
                <td><em>No cabe duda de que</em></td>
                <td>Não resta dúvida de que</td>
                <td>Elimina a possibilidade de contestação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 5 — Fato vs Opinião */}
      <section className="lesson-section">
        <span className="section-kicker">Análise Crítica</span>
        <h2>Fato versus opinião em textos hispânicos</h2>
        <p>
          Distinguir o que é relato de fato verificável e o que é interpretação ou opinião do autor
          é uma das habilidades mais cobradas nas questões de espanhol do ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Fato verificável</h3>
            <p>Dado objetivo e comprovável: <em>"En 2023, el desempleo en España fue del 12,5%, según el INE."</em></p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Opinião</h3>
            <p>Avaliação subjetiva do autor: <em>"El gobierno ha fracasado estrepitosamente en la lucha contra el desempleo."</em></p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Fato + Interpretação</h3>
            <p>Muitos textos combinam os dois: cita o dado e em seguida o avalia com carga subjetiva.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Estratégia ENEM</h3>
            <p>Identifique o verbo: verbos cognitivos (<em>creo, considero, pienso</em>) marcam opinião; verbos factuais (<em>registra, muestra</em>) marcam fato.</p>
          </div>
        </div>
      </section>

      {/* Seção 6 — Operadores de concessão e contraste */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática Argumentativa</span>
        <h2>Operadores de concessão e contraste em detalhe</h2>
        <p>
          Concessão e contraste são as relações lógicas mais exploradas nas questões do ENEM. Distingui-las
          é fundamental para compreender a lógica do texto.
        </p>
        <div className="lesson-highlight">
          <strong>Contraste</strong> (<em>pero, sin embargo, no obstante</em>): as duas ideias se opõem sem que uma minimize a outra.
          <br /><em>"El proyecto es ambicioso, pero carece de financiamiento."</em>
          <br /><br />
          <strong>Concessão</strong> (<em>aunque, si bien, a pesar de que</em>): o autor reconhece a ideia contrária, mas mantém sua posição.
          <br /><em>"Aunque los datos son alarmantes, el gobierno insiste en que la situación está bajo control."</em>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diferença entre concessão e contraste em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            {/* Contraste */}
            <rect x="30" y="40" width="290" height="130" rx="10" fill="#dbeafe" />
            <text x="175" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">CONTRASTE</text>
            <text x="175" y="90" textAnchor="middle" fontSize="11" fill="#1e40af">pero / sin embargo / no obstante</text>
            <text x="175" y="112" textAnchor="middle" fontSize="11" fill="#1e40af">Ideia A ↔ Ideia B</text>
            <text x="175" y="132" textAnchor="middle" fontSize="10" fill="#3b82f6">Oposição simples; as duas</text>
            <text x="175" y="148" textAnchor="middle" fontSize="10" fill="#3b82f6">ideias têm peso equivalente</text>
            {/* Concessão */}
            <rect x="380" y="40" width="290" height="130" rx="10" fill="#d1fae5" />
            <text x="525" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">CONCESSÃO</text>
            <text x="525" y="90" textAnchor="middle" fontSize="11" fill="#065f46">aunque / si bien / a pesar de</text>
            <text x="525" y="112" textAnchor="middle" fontSize="11" fill="#065f46">Ideia A → mas ainda assim → B</text>
            <text x="525" y="132" textAnchor="middle" fontSize="10" fill="#10b981">Autor reconhece A mas</text>
            <text x="525" y="148" textAnchor="middle" fontSize="10" fill="#10b981">prevalece com B (sua tese)</text>
          </svg>
          <figcaption>Contraste versus concessão: distinção essencial para interpretar textos argumentativos.</figcaption>
        </figure>
      </section>

      {/* Seção 7 — Autores e colunistas hispânicos */}
      <section className="lesson-section">
        <span className="section-kicker">Referências Culturais</span>
        <h2>Colunistas e intelectuais hispânicos frequentes no ENEM</h2>
        <p>
          O ENEM utiliza textos de autores reais. Conhecer os principais colunistas e pensadores do
          mundo hispânico ajuda a contextualizar o texto e identificar seu público-alvo e registro.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>País</th>
                <th>Área / Perfil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mario Vargas Llosa</td>
                <td>Peru / Espanha</td>
                <td>Literatura e liberalismo; colunista de El País</td>
              </tr>
              <tr>
                <td>Eduardo Galeano</td>
                <td>Uruguai</td>
                <td>Ensaio crítico; "As Veias Abertas da América Latina"</td>
              </tr>
              <tr>
                <td>Maite Rico</td>
                <td>Espanha</td>
                <td>Jornalismo de investigação e América Latina</td>
              </tr>
              <tr>
                <td>Enrique Peña Nieto (citado)</td>
                <td>México</td>
                <td>Textos políticos e discursos governamentais</td>
              </tr>
              <tr>
                <td>Rosa Montero</td>
                <td>Espanha</td>
                <td>Crônica e literatura feminista em El País</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 8 — Texto modelo */}
      <section className="lesson-section">
        <span className="section-kicker">Texto Modelo</span>
        <h2>Exemplo de artigo de opinião em espanhol</h2>
        <p>Analise o texto abaixo identificando tese, argumentos e conectores:</p>
        <div className="lesson-highlight">
          <p><em>
            "La educación pública en América Latina atraviesa una crisis profunda que no puede seguir siendo ignorada.
            Si bien los gobiernos de la región han aumentado el presupuesto educativo en los últimos años, los resultados
            de las pruebas internacionales revelan que ese esfuerzo no ha sido suficiente. Cabe señalar que la inversión,
            por sí sola, no garantiza calidad: sin reformas pedagógicas estructurales y sin formación docente continua,
            el dinero se diluye en burocracia. Por lo tanto, es urgente que los estados asuman una política educativa
            de largo plazo, basada en evidencias y no en eslóganes electorales. La educación es, en definitiva, la única
            herramienta capaz de romper el ciclo de la pobreza."
          </em></p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento identificado</th>
                <th>Trecho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tese</td>
                <td><em>"La educación pública [...] no puede seguir siendo ignorada"</em></td>
              </tr>
              <tr>
                <td>Concessão</td>
                <td><em>"Si bien los gobiernos [...] han aumentado el presupuesto"</em></td>
              </tr>
              <tr>
                <td>Argumento de dados</td>
                <td><em>"los resultados de las pruebas internacionales revelan que"</em></td>
              </tr>
              <tr>
                <td>Conectores de consequência</td>
                <td><em>"Por lo tanto" / "en definitiva"</em></td>
              </tr>
              <tr>
                <td>Conclusão / apelo</td>
                <td><em>"es urgente que los estados asuman una política [...] de largo plazo"</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Como identificar a tese de um texto argumentativo:</strong>
          <ol>
            <li>Leia o primeiro e o último parágrafo com atenção.</li>
            <li>Procure verbos modais: <em>debe, hay que, es urgente, es necesario</em>.</li>
            <li>Identifique o que o autor quer que o leitor pense, sinta ou faça.</li>
            <li>A tese é a afirmação mais abrangente que os argumentos tentam provar.</li>
          </ol>
        </div>
      </section>

      {/* Seção 9 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de conector"
          statement={
            <p>
              Leia: <em>"El consumo de tabaco genera graves problemas de salud pública; sin embargo,
              el gobierno se resiste a elevar los impuestos sobre el producto."</em>
              O conector <em>sin embargo</em> estabelece entre as duas orações uma relação de:
            </p>
          }
          options={[
            { letter: "a", text: "Causa e consequência." },
            { letter: "b", text: "Adição de informações complementares." },
            { letter: "c", text: "Oposição / contraste entre duas ideias.", correct: true },
            { letter: "d", text: "Conclusão lógica a partir de um argumento." },
          ]}
          resolution={
            <p>
              <em>Sin embargo</em> equivale a "no entanto / porém" em português — estabelece contraste
              entre as duas ideias: os problemas de saúde (grave) e a resistência do governo (inesperada).
              Não há causa-consequência (<em>por lo tanto</em>), nem adição (<em>además</em>), nem conclusão
              (<em>en conclusión</em>).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Identificação da tese"
          statement={
            <p>
              Leia o trecho: <em>"Aunque muchos consideren que la energía nuclear es peligrosa, los datos
              demuestran que, bien regulada, es una de las opciones más seguras y limpias disponibles.
              Por eso, es fundamental que los países en desarrollo no descarten esta alternativa en sus
              políticas energéticas."</em>
              A tese do autor é:
            </p>
          }
          options={[
            { letter: "a", text: "A energia nuclear é perigosa e deve ser evitada." },
            { letter: "b", text: "Os dados sobre energia nuclear são imprecisos." },
            { letter: "c", text: "A energia nuclear, quando bem regulada, deve ser considerada pelos países em desenvolvimento.", correct: true },
            { letter: "d", text: "Os países desenvolvidos já utilizam energia nuclear com segurança." },
          ]}
          resolution={
            <p>
              A estrutura concessiva <em>aunque... los datos demuestran que</em> introduz a tese real do autor:
              apesar da visão negativa (que ele reconhece na concessão), a energia nuclear é uma opção válida.
              A conclusão <em>"es fundamental que los países en desarrollo no descarten esta alternativa"</em>
              reforça e resume a tese.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Estratégia argumentativa"
          statement={
            <p>
              Leia: <em>"Al igual que ocurrió en los años 70 con la crisis del petróleo, que finalmente
              impulsó el desarrollo de energías alternativas, la actual emergencia climática puede
              convertirse en el motor de una revolución energética sin precedentes."</em>
              Qual é a estratégia argumentativa predominante nesse trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Argumento de autoridade: cita especialistas reconhecidos." },
            { letter: "b", text: "Argumento de dados: apresenta estatísticas verificáveis." },
            { letter: "c", text: "Argumento por analogia: compara a crise climática com a crise do petróleo.", correct: true },
            { letter: "d", text: "Apelo emocional: provoca medo no leitor com a palavra 'emergência'." },
          ]}
          resolution={
            <p>
              A expressão <em>"al igual que ocurrió en..."</em> é uma marca clássica de analogia: o autor
              compara dois eventos históricos para sugerir que o segundo pode ter desfecho semelhante ao primeiro.
              Não há citação de especialistas (descarta a), nem dados numéricos (descarta b). O apelo emocional
              (d) pode estar presente, mas não é a estratégia dominante do trecho.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Concessão versus contraste"
          statement={
            <p>
              Leia os dois excertos:
              <br /><strong>I.</strong> <em>"Si bien el país ha avanzado en reducción de la pobreza, la desigualdad
              sigue siendo un problema estructural."</em>
              <br /><strong>II.</strong> <em>"El país ha avanzado en reducción de la pobreza, pero la desigualdad
              sigue siendo un problema estructural."</em>
              <br />A diferença entre as duas construções é:
            </p>
          }
          options={[
            { letter: "a", text: "São sinônimas perfeitas; não há diferença de sentido nem de ênfase." },
            { letter: "b", text: "O trecho I usa concessão (reconhece o avanço mas prioriza o problema); o II usa contraste simples (opõe as duas ideias com peso equivalente).", correct: true },
            { letter: "c", text: "O trecho I é mais formal; o II é mais informal — a diferença é apenas de registro." },
            { letter: "d", text: "O trecho II implica que o autor acredita que a desigualdade será resolvida em breve." },
          ]}
          resolution={
            <p>
              <em>Si bien</em> é um operador de concessão: o autor reconhece o avanço, mas usa essa concessão
              para introduzir o argumento que realmente quer defender (o problema da desigualdade). <em>Pero</em>
              é um conector de contraste simples, que opõe as duas ideias sem necessariamente estabelecer
              qual delas é a posição principal do autor. Mesmo que o resultado prático seja parecido, a
              orientação argumentativa é diferente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Posicionamento implícito do autor"
          statement={
            <p>
              Leia: <em>"Los llamados 'ajustes estructurales' impuestos por organismos internacionales
              han generado, históricamente, más desempleo y exclusión social en los países que los adoptaron.
              Es irónico que, a pesar de este historial, se siga presentando esa receta como la solución
              a las crisis económicas latinoamericanas."</em>
              O posicionamento do autor em relação aos ajustes estruturais é:
            </p>
          }
          options={[
            { letter: "a", text: "Favorável, pois reconhece que eles foram adotados por muitos países." },
            { letter: "b", text: "Neutro, pois apenas descreve fatos históricos sem emitir opinião." },
            { letter: "c", text: "Crítico: considera os ajustes prejudiciais e questiona sua continuidade.", correct: true },
            { letter: "d", text: "Favorável condicionalmente, pois defende que os ajustes funcionam se bem aplicados." },
          ]}
          resolution={
            <p>
              O autor usa aspas em <em>'ajustes estructurales'</em> (distanciamento irônico), o adjetivo
              <em>impuestos</em> (impostos, com carga negativa), a palavra <em>irónico</em> e a expressão
              <em>esa receta</em> (com tom depreciativo). Todas essas marcas revelam posicionamento crítico.
              Não há neutralidade: a seleção de vocabulário é claramente avaliativa.
            </p>
          }
        />
      </section>
    </article>
  );
}
