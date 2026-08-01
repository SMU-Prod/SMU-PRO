"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 05</span>
          <h1>Prefixos, sufixos e formação de palavras</h1>
          <p>
            Você não precisa conhecer todas as palavras do inglês para entender um
            texto — basta saber <strong>como as palavras são formadas</strong>. A
            morfologia do inglês segue padrões previsíveis: prefixos e sufixos
            carregam significados fixos que se somam à raiz, permitindo que você
            deduza o sentido de palavras novas sem nenhum dicionário.
          </p>
          <p>
            Neste capítulo você vai dominar os prefixos e sufixos mais cobrados no
            ENEM, aprender a estratégia de decomposição de palavras e entender como
            raízes latinas e gregas conectam o inglês ao português, multiplicando
            seu vocabulário ativo na prova.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Por que a Formação de Palavras Importa no ENEM</h2>
        <p>
          O vocabulário inglês tem mais de 170 mil palavras em uso ativo, mas a
          grande maioria delas é construída a partir de um repertório relativamente
          pequeno de <strong>raízes, prefixos e sufixos</strong>. Estima-se que
          conhecer os 30 afixos mais comuns do inglês permite deduzir o sentido de
          mais de 10 mil palavras novas.
        </p>
        <p>
          Para o ENEM, isso é decisivo: questões do tipo "A palavra destacada no
          texto significa…" e "O prefixo <em>un-</em> indica…" aparecem com
          regularidade. Mais importante: mesmo sem esse tipo de questão explícita,
          a decomposição morfológica acelera a compreensão de qualquer texto.
        </p>
        <div className="lesson-highlight">
          <strong>Estratégia central:</strong> Ao ver uma palavra desconhecida,
          pergunte: Reconheço a raiz? Há um prefixo que indica negação, repetição
          ou posição? Há um sufixo que indica a classe gramatical (verbo, substantivo,
          adjetivo)? Três perguntas — sentido deduzido.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Prefixo</h3>
            <p>Elemento adicionado antes da raiz. Muda o sentido (happy → unhappy).</p>
          </div>
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Sufixo</h3>
            <p>Elemento adicionado depois da raiz. Muda a classe gramatical (happy → happiness).</p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Raiz</h3>
            <p>Núcleo da palavra, frequentemente de origem latina ou grega (port → transport, export).</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Cognatos</h3>
            <p>Palavras com raiz comum ao português — facilitam o reconhecimento instantâneo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prefixos de negação</span>
        <h2>2. Prefixos de Negação e Oposição</h2>
        <p>
          Os prefixos de negação são os mais cobrados porque alteram completamente
          o sentido de uma palavra. Reconhecê-los evita erros de interpretação em
          alternativas que invertem o sentido do texto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Significado</th>
                <th>Exemplos</th>
                <th>Cognato em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>un-</strong></td>
                <td>não / desfazer</td>
                <td>unhappy, unknown, undo</td>
                <td>infeliz, desconhecido</td>
              </tr>
              <tr>
                <td><strong>in- / im- / il- / ir-</strong></td>
                <td>não</td>
                <td>impossible, illegal, irregular, incomplete</td>
                <td>impossível, ilegal, irregular</td>
              </tr>
              <tr>
                <td><strong>dis-</strong></td>
                <td>não / oposto</td>
                <td>disagree, dishonest, disappear</td>
                <td>discordar, desonesto</td>
              </tr>
              <tr>
                <td><strong>mis-</strong></td>
                <td>errado / mal</td>
                <td>misunderstand, misuse, mislead</td>
                <td>mal-entender, mau uso</td>
              </tr>
              <tr>
                <td><strong>non-</strong></td>
                <td>não</td>
                <td>nonprofit, nonfiction, nonviolent</td>
                <td>sem fins lucrativos, não-ficção</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Se uma alternativa contém a palavra com
          prefixo de negação (<em>unfair, impossible, dishonest</em>) e outra
          contém a palavra positiva (<em>fair, possible, honest</em>), a diferença
          entre acertar e errar é identificar corretamente o prefixo.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prefixos de posição e intensidade</span>
        <h2>3. Prefixos de Repetição, Posição e Grau</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Significado</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>re-</strong></td>
                <td>de novo / outra vez</td>
                <td>redo, rethink, rebuild, recycle, reuse</td>
              </tr>
              <tr>
                <td><strong>pre-</strong></td>
                <td>antes</td>
                <td>preview, predict, prehistoric, prepaid</td>
              </tr>
              <tr>
                <td><strong>over-</strong></td>
                <td>excessivo / acima</td>
                <td>overuse, overload, overcome, overlook</td>
              </tr>
              <tr>
                <td><strong>under-</strong></td>
                <td>insuficiente / abaixo</td>
                <td>underestimate, underpaid, undermine</td>
              </tr>
              <tr>
                <td><strong>inter-</strong></td>
                <td>entre / mútuo</td>
                <td>international, interact, interdependent</td>
              </tr>
              <tr>
                <td><strong>super-</strong></td>
                <td>acima / superior</td>
                <td>supernatural, superpower, supermarket</td>
              </tr>
              <tr>
                <td><strong>sub-</strong></td>
                <td>abaixo / subordinado</td>
                <td>submarine, subtitle, subway, subgroup</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Note que prefixos como <em>super-</em>, <em>sub-</em>, <em>inter-</em> e
          <em> pre-</em> são idênticos em português, tornando seu reconhecimento
          imediato. São cognatos morfológicos — a maior vantagem do falante de
          português ao aprender inglês.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sufixos substantivos</span>
        <h2>4. Sufixos que Formam Substantivos</h2>
        <p>
          Sufixos indicam a <strong>classe gramatical</strong> da palavra. Ao
          identificar um sufixo de substantivo, você sabe que a palavra é um
          objeto, ideia ou pessoa — mesmo sem saber o sentido exato.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sufixo</th>
                <th>Indica</th>
                <th>Exemplos</th>
                <th>Em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>-tion / -sion</strong></td>
                <td>ação / resultado</td>
                <td>pollution, education, decision</td>
                <td>poluição, educação, decisão</td>
              </tr>
              <tr>
                <td><strong>-ness</strong></td>
                <td>estado / qualidade</td>
                <td>happiness, darkness, kindness</td>
                <td>felicidade, escuridão, bondade</td>
              </tr>
              <tr>
                <td><strong>-ment</strong></td>
                <td>ação / resultado / estado</td>
                <td>government, movement, development</td>
                <td>governo, movimento, desenvolvimento</td>
              </tr>
              <tr>
                <td><strong>-er / -or</strong></td>
                <td>agente / quem faz</td>
                <td>teacher, writer, actor, director</td>
                <td>professor, escritor, ator</td>
              </tr>
              <tr>
                <td><strong>-ity / -ty</strong></td>
                <td>qualidade / estado</td>
                <td>equality, diversity, creativity</td>
                <td>igualdade, diversidade</td>
              </tr>
              <tr>
                <td><strong>-ism</strong></td>
                <td>doutrina / movimento</td>
                <td>capitalism, racism, feminism</td>
                <td>capitalismo, racismo, feminismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sufixos adjetivos e verbais</span>
        <h2>5. Sufixos que Formam Adjetivos e Verbos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sufixo</th>
                <th>Indica</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>-ful</strong></td>
                <td>cheio de / com qualidade positiva</td>
                <td>beautiful, powerful, successful, harmful</td>
              </tr>
              <tr>
                <td><strong>-less</strong></td>
                <td>sem / ausência de</td>
                <td>homeless, careless, useless, endless</td>
              </tr>
              <tr>
                <td><strong>-able / -ible</strong></td>
                <td>capaz de / possível</td>
                <td>sustainable, possible, responsible, readable</td>
              </tr>
              <tr>
                <td><strong>-al / -ial</strong></td>
                <td>relativo a</td>
                <td>natural, social, environmental, commercial</td>
              </tr>
              <tr>
                <td><strong>-ly</strong></td>
                <td>advérbio (modo)</td>
                <td>quickly, carefully, significantly, recently</td>
              </tr>
              <tr>
                <td><strong>-ize / -ise</strong></td>
                <td>verbo: tornar / fazer</td>
                <td>modernize, organize, realize, prioritize</td>
              </tr>
              <tr>
                <td><strong>-ify</strong></td>
                <td>verbo: fazer / tornar</td>
                <td>simplify, identify, modify, clarify</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção ao par -ful / -less:</strong> São opostos! <em>Hopeful</em>
          (cheio de esperança) ≠ <em>hopeless</em> (sem esperança). Questões do ENEM
          frequentemente usam esse par para testar se você reconhece a diferença
          de sentido entre alternativas aparentemente parecidas.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Raízes</span>
        <h2>6. Raízes Latinas e Gregas: a Ponte com o Português</h2>
        <p>
          Cerca de 60% do vocabulário inglês tem origem no latim ou no grego —
          as mesmas raízes do português. Isso significa que falantes de português
          têm acesso imediato a uma enorme fatia do vocabulário inglês, mesmo sem
          estudo formal de inglês.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Raiz</th>
                <th>Origem</th>
                <th>Significado</th>
                <th>Exemplos em inglês</th>
                <th>Em português</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>port</strong></td>
                <td>Latim</td>
                <td>carregar</td>
                <td>transport, import, export, portable</td>
                <td>transportar, importar</td>
              </tr>
              <tr>
                <td><strong>graph / gram</strong></td>
                <td>Grego</td>
                <td>escrever / registrar</td>
                <td>photograph, diagram, grammar</td>
                <td>fotografia, diagrama</td>
              </tr>
              <tr>
                <td><strong>bio</strong></td>
                <td>Grego</td>
                <td>vida</td>
                <td>biology, biography, biodiversity</td>
                <td>biologia, biografia</td>
              </tr>
              <tr>
                <td><strong>geo</strong></td>
                <td>Grego</td>
                <td>terra</td>
                <td>geography, geology, geometry</td>
                <td>geografia, geologia</td>
              </tr>
              <tr>
                <td><strong>dict</strong></td>
                <td>Latim</td>
                <td>dizer / falar</td>
                <td>predict, contradict, dictionary</td>
                <td>predizer, contradizer</td>
              </tr>
              <tr>
                <td><strong>scrib / script</strong></td>
                <td>Latim</td>
                <td>escrever</td>
                <td>describe, subscribe, manuscript</td>
                <td>descrever, manuscrito</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>7. Estratégia de Decomposição de Palavras</h2>
        <p>
          O método de decomposição é simples: ao encontrar uma palavra desconhecida,
          desmonte-a em partes reconhecíveis. Veja como aplicar com o exemplo
          <em> "underdevelopment"</em>:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            aria-label="Decomposição da palavra underdevelopment em prefixo, raiz e sufixo"
            role="img"
          >
            {/* Palavra completa */}
            <rect x="150" y="10" width="400" height="44" rx="10" fill="#4f46e5" />
            <text x="350" y="38" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">underdevelopment</text>

            {/* Setas para baixo */}
            <line x1="220" y1="54" x2="170" y2="105" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="350" y1="54" x2="350" y2="105" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="480" y1="54" x2="530" y2="105" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3" />

            {/* Prefixo */}
            <rect x="60" y="105" width="200" height="50" rx="8" fill="#dc2626" />
            <text x="160" y="126" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">under-</text>
            <text x="160" y="145" textAnchor="middle" fill="#fecaca" fontSize="11">prefixo: insuficiente/abaixo</text>

            {/* Raiz */}
            <rect x="250" y="105" width="200" height="50" rx="8" fill="#059669" />
            <text x="350" y="126" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">develop</text>
            <text x="350" y="145" textAnchor="middle" fill="#d1fae5" fontSize="11">raiz: desenvolver</text>

            {/* Sufixo */}
            <rect x="440" y="105" width="200" height="50" rx="8" fill="#d97706" />
            <text x="540" y="126" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">-ment</text>
            <text x="540" y="145" textAnchor="middle" fill="#fef3c7" fontSize="11">sufixo: ação/resultado</text>

            {/* Resultado */}
            <rect x="170" y="180" width="360" height="34" rx="8" fill="#1e1b4b" />
            <text x="350" y="202" textAnchor="middle" fill="white" fontSize="13">= subdesenvolvimento (resultado de desenvolver insuficientemente)</text>
          </svg>
          <figcaption>Decomposição de "underdevelopment": prefixo under- + raiz develop + sufixo -ment. Cada parte revela um aspecto do sentido.</figcaption>
        </figure>

        <p>
          Aplique a mesma lógica a qualquer palavra longa: <em>irresponsibility</em>
          = ir- (não) + respons(e) (resposta/obrigação) + -ibility (capacidade) =
          "incapacidade de ser responsável". <em>Unsustainable</em> = un- (não) +
          sustain (sustentar) + -able (capaz de) = "incapaz de ser sustentado".
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Atenção</span>
        <h2>8. Falsos Cognatos com Afixos: Armadilhas Clássicas</h2>
        <p>
          Alguns prefixos e sufixos criam palavras que parecem familiares mas têm
          sentido diferente do esperado. Conheça as armadilhas mais comuns:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>pretend</h3>
            <p><em>pre-</em> + <em>tend</em> — NÃO significa "pretender" (querer), e sim "fingir". I pretend = Eu finjo.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>misery</h3>
            <p>NÃO vem de <em>mis-</em> (prefixo de erro). Vem do latim <em>miser</em> = infeliz. Significa sofrimento/miséria.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>actually</h3>
            <p>Sufixo <em>-ly</em> de advérbio, mas NÃO significa "atualmente" — significa "na verdade / de fato".</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>overall</h3>
            <p><em>over-</em> + <em>all</em> — NÃO significa "sobre tudo", mas sim "no geral / em geral".</p>
          </div>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Sempre verifique a pista contextual antes de
          aplicar a regra do afixo. O contexto é sempre a autoridade máxima — o
          afixo é um atalho, não uma certeza absoluta.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ampliação</span>
        <h2>9. Palavras Compostas: Dois Substantivos, Um Sentido</h2>
        <p>
          O inglês cria palavras novas juntando dois substantivos (ou substantivo +
          adjetivo/verbo). Essas <strong>palavras compostas</strong> são muito
          comuns em textos de divulgação científica e jornalísticos — dois dos
          gêneros mais frequentes no ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra composta</th>
                <th>Componentes</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>greenhouse</td>
                <td>green (verde) + house (casa)</td>
                <td>estufa (efeito estufa)</td>
              </tr>
              <tr>
                <td>rainforest</td>
                <td>rain (chuva) + forest (floresta)</td>
                <td>floresta tropical</td>
              </tr>
              <tr>
                <td>breakthrough</td>
                <td>break (quebrar) + through (através)</td>
                <td>avanço / descoberta importante</td>
              </tr>
              <tr>
                <td>workforce</td>
                <td>work (trabalho) + force (força)</td>
                <td>mão de obra / força de trabalho</td>
              </tr>
              <tr>
                <td>wildlife</td>
                <td>wild (selvagem) + life (vida)</td>
                <td>fauna e flora silvestres</td>
              </tr>
              <tr>
                <td>outbreak</td>
                <td>out (fora) + break (romper)</td>
                <td>surto / eclosão (de doença)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação de prefixo de negação"
          statement={
            <p>
              Em um texto sobre política ambiental, aparece a frase:{" "}
              <em>"The new regulation was considered <strong>unsustainable</strong>{" "}
              by most experts."</em> Com base no prefixo da palavra destacada, o
              que ela significa?
            </p>
          }
          options={[
            { letter: "A", text: "Altamente sustentável, com grandes benefícios ambientais." },
            { letter: "B", text: "Parcialmente sustentável, com restrições específicas." },
            { letter: "C", text: "Que não pode ser sustentada ou mantida a longo prazo.", correct: true },
            { letter: "D", text: "Relacionada ao meio ambiente de forma geral." },
            { letter: "E", text: "Que ainda não foi avaliada pelos especialistas." },
          ]}
          resolution={
            <p>
              O prefixo <em>un-</em> indica negação. <em>Sustainable</em> = sustentável;
              portanto, <em>unsustainable</em> = não sustentável, que não pode ser
              mantida. A alternativa C captura esse sentido. Note que o contexto
              ("considerada pela maioria dos especialistas") reforça a ideia negativa,
              confirmando a análise morfológica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Sufixo e classe gramatical"
          statement={
            <p>
              Um estudante encontra a palavra <strong>development</strong> em um
              artigo sobre economia. Qual sufixo a palavra carrega e o que ele indica
              sobre sua classe gramatical e significado?
            </p>
          }
          options={[
            { letter: "A", text: "Sufixo -ment: indica um adjetivo que descreve a qualidade de desenvolver." },
            { letter: "B", text: "Sufixo -ment: indica um verbo de ação no passado." },
            { letter: "C", text: "Sufixo -ment: indica um substantivo que expressa ação ou resultado — neste caso, o processo de desenvolver.", correct: true },
            { letter: "D", text: "Sufixo -ment: indica um advérbio de modo relacionado ao desenvolvimento." },
            { letter: "E", text: "Sufixo -ment: é uma terminação irregular sem valor morfológico previsível." },
          ]}
          resolution={
            <p>
              O sufixo <em>-ment</em> forma substantivos a partir de verbos, indicando
              ação ou resultado: <em>develop</em> (verbo: desenvolver) →{" "}
              <em>development</em> (substantivo: desenvolvimento). O sufixo por si só
              informa que a palavra é um substantivo que expressa o processo ou resultado
              de algo — informação suficiente para a compreensão do texto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Decomposição e inferência"
          statement={
            <p>
              Em um texto sobre tecnologia, aparece o trecho:{" "}
              <em>"Critics argue that the overuse of social media leads to an
              <strong> unprecedented</strong> level of social isolation."</em>{" "}
              Decompondo a palavra destacada, qual é seu provável significado?
            </p>
          }
          options={[
            { letter: "A", text: "Amplamente estudado e documentado na literatura científica." },
            { letter: "B", text: "Que já ocorreu antes em proporções similares." },
            { letter: "C", text: "Que nunca aconteceu antes; sem precedentes.", correct: true },
            { letter: "D", text: "Relacionado ao uso excessivo da tecnologia moderna." },
            { letter: "E", text: "Que pode ser previsto com base em padrões anteriores." },
          ]}
          resolution={
            <p>
              Decomposição: <em>un-</em> (não/sem) + <em>precede</em> (preceder,
              vir antes) + <em>-nted</em> (adjetivação). Logo, <em>unprecedented</em>
              = algo que não teve precedente, que nunca aconteceu antes. A alternativa
              C é correta. O contexto também ajuda: a ideia de que redes sociais levam
              a um nível "sem precedentes" de isolamento reforça a gravidade e novidade
              do fenômeno.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Prefixo over- em contexto"
          statement={
            <div>
              <p>
                <em>(Baseado em situação típica do ENEM)</em>
              </p>
              <p>
                Um artigo afirma: <em>"Scientists warn that fishing companies have
                been <strong>overexploiting</strong> ocean resources for decades,
                threatening marine biodiversity."</em> Com base no prefixo da
                palavra destacada, o que ela comunica no contexto?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "As empresas pescam de forma sustentável e responsável." },
            { letter: "B", text: "As empresas exploram os recursos marinhos de forma insuficiente." },
            { letter: "C", text: "As empresas exploram os recursos marinhos de forma excessiva, além do limite sustentável.", correct: true },
            { letter: "D", text: "As empresas estão investigando novos métodos de pesca." },
            { letter: "E", text: "As empresas reiniciam a exploração após um período de pausa." },
          ]}
          resolution={
            <p>
              O prefixo <em>over-</em> indica excesso. <em>Exploit</em> = explorar;
              portanto, <em>overexploit</em> = explorar excessivamente, além do que
              é sustentável. O contexto confirma: a prática "ameaça a biodiversidade
              marinha", indicando que a exploração ultrapassa os limites saudáveis.
              A alternativa B seria o oposto (prefixo <em>under-</em>); A e D
              contradizem o tom crítico do texto.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Formação de palavras em texto real"
          statement={
            <div>
              <p>
                <em>Trecho de artigo de divulgação científica:</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The <strong>interconnectedness</strong> of global economies means
                that a financial crisis in one country can rapidly spread to others,
                creating widespread <strong>instability</strong>."
              </p>
              <p>
                Analisando as palavras destacadas, qual alternativa descreve
                corretamente o significado das duas?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Interconnectedness = separação dos países; instability = estabilidade crescente." },
            { letter: "B", text: "Interconnectedness = a condição de estar mutuamente conectado; instability = ausência de estabilidade.", correct: true },
            { letter: "C", text: "Interconnectedness = a falta de conexão entre economias; instability = período de crise resolvida." },
            { letter: "D", text: "Interconnectedness = processo de reconexão após crise; instability = equilíbrio temporário." },
            { letter: "E", text: "Interconnectedness = velocidade de conexão financeira; instability = tendência ao crescimento." },
          ]}
          resolution={
            <p>
              <em>Interconnectedness</em>: <em>inter-</em> (entre/mútuo) + <em>connect</em>
              (conectar) + <em>-ed</em> (adjetivo) + <em>-ness</em> (estado/qualidade) =
              a qualidade de estar mutuamente conectado.{" "}
              <em>Instability</em>: <em>in-</em> (não) + <em>stability</em> (estabilidade)
              = falta de estabilidade. Juntas, as palavras descrevem como a conexão
              mútua das economias globais pode propagar crises, gerando instabilidade.
              A alternativa B captura ambos os sentidos corretamente.
            </p>
          }
        />
      </section>
    </article>
  );
}
