"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 19</span>
          <h1>Linguagem Formal e Norma Culta</h1>
          <p>
            Domine as regras gramaticais que mais geram erros no ENEM — concordância,
            regência, crase e pontuação — com tabelas de erros mais comuns, exemplos
            corretos e estratégias de revisão para garantir nota máxima na Competência 1.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que a Norma Culta é Obrigatória no ENEM</h2>
        <p>
          A Competência 1 do ENEM avalia o "domínio da modalidade escrita formal da língua
          portuguesa". Isso significa que o candidato precisa demonstrar controle sobre as
          regras gramaticais da norma culta — não por elitismo linguístico, mas porque
          a redação é um texto produzido para uma situação formal de avaliação, equivalente
          a um documento público ou acadêmico.
        </p>
        <div className="lesson-highlight">
          <h3>O que é norma culta (e o que não é)</h3>
          <p>
            Norma culta NÃO significa usar palavras difíceis ou construções rebuscadas.
            Significa escrever com <strong>correção gramatical, clareza e adequação ao
            contexto formal</strong>. Uma frase simples, clara e gramaticalmente correta
            vale mais que uma frase complexa cheia de erros.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 180" width="480" height="180" aria-label="Gráfico de bolhas mostrando frequência dos erros gramaticais no ENEM">
            <rect width="480" height="180" fill="#f8fafc" rx="10" />
            <text x="240" y="18" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">Frequência de erros na redação ENEM (tamanho = frequência)</text>
            {/* Concordância verbal - maior */}
            <circle cx="100" cy="90" r="52" fill="rgba(239,68,68,0.7)" />
            <text x="100" y="86" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Concordância</text>
            <text x="100" y="98" textAnchor="middle" fill="white" fontSize="8">verbal</text>
            <text x="100" y="110" textAnchor="middle" fill="white" fontSize="8">⬤⬤⬤⬤⬤</text>
            {/* Crase */}
            <circle cx="220" cy="90" r="38" fill="rgba(245,158,11,0.7)" />
            <text x="220" y="86" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Crase</text>
            <text x="220" y="100" textAnchor="middle" fill="white" fontSize="8">⬤⬤⬤⬤</text>
            {/* Regência */}
            <circle cx="320" cy="80" r="30" fill="rgba(139,92,246,0.7)" />
            <text x="320" y="76" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Regência</text>
            <text x="320" y="90" textAnchor="middle" fill="white" fontSize="8">⬤⬤⬤</text>
            {/* Pontuação */}
            <circle cx="390" cy="100" r="36" fill="rgba(16,185,129,0.7)" />
            <text x="390" y="96" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Pontuação</text>
            <text x="390" y="110" textAnchor="middle" fill="white" fontSize="8">⬤⬤⬤⬤</text>
            {/* Concordância nominal */}
            <circle cx="145" cy="148" r="24" fill="rgba(59,130,246,0.7)" />
            <text x="145" y="145" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Conc.</text>
            <text x="145" y="157" textAnchor="middle" fill="white" fontSize="7">nominal</text>
            {/* Ortografia */}
            <circle cx="270" cy="148" r="20" fill="rgba(249,115,22,0.7)" />
            <text x="270" y="145" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Ortogr.</text>
            <text x="270" y="157" textAnchor="middle" fill="white" fontSize="7">⬤⬤</text>
          </svg>
          <figcaption>Mapa de frequência dos principais erros gramaticais na redação ENEM — concordância verbal é o erro mais recorrente.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concordância verbal</span>
        <h2>2. Concordância Verbal: as Regras que Mais Geram Erros</h2>
        <p>
          A concordância verbal exige que o verbo concorde em número e pessoa com o
          sujeito. Parece simples — mas os erros acontecem em situações específicas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>ERRADO (evite)</th>
                <th>CORRETO (use)</th>
                <th>Regra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sujeito posposto</td>
                <td>"Existe muitos motivos..."</td>
                <td>"Existem muitos motivos..."</td>
                <td>O verbo concorda com o sujeito, mesmo que ele venha depois</td>
              </tr>
              <tr>
                <td>Sujeito coletivo</td>
                <td>"A maioria dos jovens querem..."</td>
                <td>"A maioria dos jovens quer..."</td>
                <td>Sujeito coletivo (maioria, minoria, parte) fica no singular</td>
              </tr>
              <tr>
                <td>Sujeito composto antes do verbo</td>
                <td>"A escola e a família é responsável..."</td>
                <td>"A escola e a família são responsáveis..."</td>
                <td>Sujeito composto exige verbo no plural</td>
              </tr>
              <tr>
                <td>Verbo "haver" impessoal</td>
                <td>"Haviam muitas pessoas..."</td>
                <td>"Havia muitas pessoas..."</td>
                <td>"Haver" no sentido de "existir" é impessoal — sempre singular</td>
              </tr>
              <tr>
                <td>Verbo "fazer" impessoal</td>
                <td>"Fazem dez anos..."</td>
                <td>"Faz dez anos..."</td>
                <td>"Fazer" no sentido de tempo decorrido é impessoal — singular</td>
              </tr>
              <tr>
                <td>Pronome relativo "que"</td>
                <td>"As pessoas que precisa de ajuda..."</td>
                <td>"As pessoas que precisam de ajuda..."</td>
                <td>O verbo concorda com o antecedente do pronome relativo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concordância nominal</span>
        <h2>3. Concordância Nominal: Adjetivos e Particípios</h2>
        <p>
          A concordância nominal exige que adjetivos, pronomes e particípios concordem
          em gênero e número com o substantivo a que se referem. Os erros mais comuns:
        </p>
        <div className="lesson-highlight">
          <h3>Erro clássico 1: adjetivo com dois substantivos</h3>
          <p>
            "A violência e o preconceito estrutural são fatores..." — quando o adjetivo
            vem depois de dois substantivos de gêneros diferentes, usa-se o masculino
            plural. CORRETO: "A violência e o preconceito estruturais são fatores..." |
            Alternativa mais segura: separar os adjetivos — "A violência estrutural e o
            preconceito estrutural são fatores..."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro clássico 2: particípio e objeto</h3>
          <p>
            "Foram criados políticas públicas eficazes." — O particípio deve concordar
            com o sujeito ou objeto a que se refere. CORRETO: "Foram criadas políticas
            públicas eficazes." (políticas = feminino plural → criadas).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Erro clássico 3: "mesmo", "próprio", "só"</h3>
          <p>
            Quando funcionam como adjetivos, concordam com o substantivo: "As próprias
            vítimas denunciam" (não "os próprios"). "Elas mesmas resolveram" (não "elas
            mesmo").
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regência verbal</span>
        <h2>4. Regência Verbal: os Verbos que Mais Geram Erros</h2>
        <p>
          Regência verbal é a relação entre o verbo e seu complemento. Alguns verbos
          exigem preposição (são transitivos indiretos); outros não (são transitivos
          diretos). Confundir os dois é um erro grave de norma culta:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>ERRADO</th>
                <th>CORRETO</th>
                <th>Complemento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assistir (ver)</td>
                <td>"Assistimos o filme"</td>
                <td>"Assistimos ao filme"</td>
                <td>Exige "a" — transitivo indireto</td>
              </tr>
              <tr>
                <td>Obedecer</td>
                <td>"Obedecer as leis"</td>
                <td>"Obedecer às leis"</td>
                <td>Exige "a" — transitivo indireto</td>
              </tr>
              <tr>
                <td>Visar (pretender)</td>
                <td>"A política visa melhorar..."</td>
                <td>"A política visa a melhorar..."</td>
                <td>No sentido de pretender, exige "a"</td>
              </tr>
              <tr>
                <td>Implicar (acarretar)</td>
                <td>"Isso implica mudanças"</td>
                <td>"Isso implica em mudanças" (aceito) ou "implica mudanças" (mais formal)</td>
                <td>Ambas as formas são aceitas; a sem preposição é mais formal</td>
              </tr>
              <tr>
                <td>Preferir</td>
                <td>"Preferem mais a educação"</td>
                <td>"Preferem a educação"</td>
                <td>"Preferir" já tem ideia de comparação — o "mais" é redundante</td>
              </tr>
              <tr>
                <td>Chegar / ir</td>
                <td>"Chegou em São Paulo"</td>
                <td>"Chegou a São Paulo"</td>
                <td>Chegar/ir a (lugar), não "em" — uso formal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crase</span>
        <h2>5. Crase: Quando Usar e Quando Não Usar</h2>
        <p>
          A crase (à, às) ocorre quando há fusão da preposição "a" com o artigo "a/as"
          diante de palavras femininas. A regra básica:
        </p>
        <div className="lesson-highlight">
          <h3>Regra prática: substitua por "ao/aos"</h3>
          <p>
            Se você pode substituir a palavra por um equivalente masculino e usar "ao",
            então usa crase. Exemplos: "Refiro-me à educação" (refiro-me ao ensino → usa
            crase). "Cheguei à escola" (cheguei ao colégio → usa crase). "Fui a pé"
            (não dá para usar "ao pé" com esse sentido → não usa crase).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Casos que NUNCA usam crase</h3>
          <p>
            Antes de verbos: "começou a escrever" (não "à escrever"). |
            Antes de palavras masculinas: "a tempo", "a pé". |
            Antes de pronomes pessoais: "Refiro-me a ela" (não "à ela"). |
            Antes de "que" e "quem": "a que se refere", "a quem interessa". |
            Locuções adverbiais com palavra feminina que não aceita artigo: "a bordo", "a esmo".
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Casos que SEMPRE usam crase</h3>
          <p>
            Locuções adverbiais femininas: "à vista", "às vezes", "à tarde", "às pressas",
            "à medida que", "à proporção que". |
            Antes de "moda/moda de": "à moda italiana", "à francesa".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pontuação</span>
        <h2>6. Pontuação: as Regras que Mais Afetam a C1</h2>
        <p>
          A pontuação incorreta é um dos erros mais visíveis e mais facilmente evitáveis
          com atenção. Os casos mais comuns na redação ENEM:
        </p>
        <div className="lesson-highlight">
          <h3>Vírgula PROIBIDA antes de "que" subordinado</h3>
          <p>
            ERRADO: "O Estado precisa, que as políticas sejam eficazes." |
            CORRETO: "O Estado precisa que as políticas sejam eficazes." |
            Regra: não se usa vírgula entre verbo e complemento (objeto), mesmo que haja
            uma oração subordinada.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Vírgula OBRIGATÓRIA no aposto e no vocativo</h3>
          <p>
            Aposto explicativo: "O Brasil, país de dimensões continentais, enfrenta..."
            (aposto entre vírgulas). |
            Adjunto adverbial deslocado: "No Brasil contemporâneo, a desigualdade..." |
            Oração subordinada adverbial anteposta: "Quando o Estado falha, a sociedade..."
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Ponto e vírgula: separação de itens paralelos</h3>
          <p>
            O ponto e vírgula é uma marca de maturidade textual. Use para separar
            elementos de uma lista quando há mais de dois itens com vírgulas internas:
            "A exclusão se manifesta no acesso à educação, precário nas periferias;
            no atendimento à saúde, insuficiente em municípios menores; e na
            mobilidade urbana, inexistente em regiões rurais."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ortografia</span>
        <h2>7. Ortografia: Palavras Mais Erradas no ENEM</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma ERRADA (evite)</th>
                <th>Forma CORRETA (use)</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mêio / meio</td>
                <td>meio</td>
                <td>Sem acento desde a reforma ortográfica de 2009</td>
              </tr>
              <tr>
                <td>pôr que / por que / porque / porquê</td>
                <td>Depende do uso</td>
                <td>"Por que" (pergunta), "porque" (explicação), "porquê" (substantivo)</td>
              </tr>
              <tr>
                <td>mais / mas</td>
                <td>"mas" (adversativo) vs "mais" (adição/intensidade)</td>
                <td>"O problema existe, mas há soluções" vs "cada vez mais grave"</td>
              </tr>
              <tr>
                <td>a cerca de / acerca de / há cerca de</td>
                <td>Depende: "há" (tempo passado), "acerca de" (sobre), "a cerca de" (distância)</td>
                <td>"Há cerca de 10 anos" / "Acerca do tema..." / "a cerca de 5km"</td>
              </tr>
              <tr>
                <td>mau / mal</td>
                <td>"mau" (adjetivo — oposto de bom) vs "mal" (advérbio — oposto de bem)</td>
                <td>"Um mau exemplo" vs "O sistema funciona mal"</td>
              </tr>
              <tr>
                <td>descriminação / discriminação</td>
                <td>discriminação</td>
                <td>"Discriminar" = tratar diferente por preconceito. "Descriminar" = retirar do rol de crimes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Registro</span>
        <h2>8. Registro Formal vs. Informal: Palavras Proibidas</h2>
        <p>
          A redação ENEM exige registro formal. Algumas expressões que parecem naturais
          na fala são inadequadas na escrita formal:
        </p>
        <div className="lesson-highlight">
          <h3>Expressões informais e seus equivalentes formais</h3>
          <p>
            "A gente" → use "nós" ou reformule sem pronome. |
            "Tá" / "tô" → "está" / "estou". |
            "Tipo assim" → construção gramatical adequada. |
            "Hoje em dia" → "na contemporaneidade", "no cenário atual", "atualmente". |
            "Muito grave" → "alarmante", "preocupante", "de grande relevância". |
            "Precisa resolver" → "torna-se imperativo solucionar", "é fundamental que se
            adotem medidas". |
            "Porque sim" → construção lógica com argumento real. |
            "Todo mundo sabe" → "é amplamente reconhecido que", "dados evidenciam que".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vocabulário elevado</span>
        <h2>9. Vocabulário que Eleva o Nível sem Artificialidade</h2>
        <p>
          Existe uma diferença entre vocabulário formal e vocabulário rebuscado artificial.
          O ENEM valoriza o primeiro e penaliza o segundo quando gera obscuridade ou
          incorreção. Estas são expressões que elevam o nível do texto de forma natural:
        </p>
        <div className="lesson-highlight">
          <h3>Expressões que funcionam bem na redação formal</h3>
          <p>
            Para iniciar argumentos: "Em primeiro plano", "Sob essa perspectiva",
            "Nesse contexto", "À luz do exposto". |
            Para indicar consequência: "Em decorrência disso", "Consequentemente",
            "O que acarreta", "gerando, assim". |
            Para indicar contraste: "Não obstante", "Todavia", "Em contrapartida". |
            Para finalizar argumento: "Evidencia-se, portanto, que", "Fica demonstrado
            que", "Tal realidade aponta para". |
            Para indicar adição: "Ademais", "Outrossim" (muito formal), "Além do exposto".
          </p>
        </div>
        <p>
          Evite forçar palavras raras sem saber usá-las corretamente. "Hodiernamente"
          (atualmente) pode parecer rebuscado e artificial — "na contemporaneidade" ou
          "atualmente" são igualmente formais e mais naturais.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Checklist de revisão</span>
        <h2>10. Estratégia de Revisão Linguística</h2>
        <p>
          Os 10 minutos finais de revisão devem ser focados nos erros que mais afetam a
          Competência 1. Use este roteiro de revisão sistemático:
        </p>
        <div className="lesson-highlight">
          <h3>Roteiro de revisão da C1</h3>
          <p>
            1. Verifique cada verbo: o sujeito está em número/pessoa corretos? |
            2. Verifique cada "a" antes de palavra feminina: é crase ou não? |
            3. Verifique os verbos "assistir", "obedecer", "visar" — precisam de preposição? |
            4. Leia os adjetivos: concordam com o substantivo correto? |
            5. Verifique "mais/mas", "mau/mal", "porque/porquê". |
            6. Há vírgula antes de objeto direto (proibida)? |
            7. Há gírias, expressões informais ou "a gente" no texto? |
            8. Há frase sem verbo (período incompleto)? |
            9. Há repetição excessiva de uma mesma palavra em dois períodos seguidos? |
            10. Há período excessivamente longo (mais de 4 orações) que pode ser fragmentado?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Linguagem Formal e Norma Culta</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>✍️</span>
            <h3>Concordância verbal</h3>
            <p>Sujeito posposto, coletivo e composto — os três contextos que mais geram erro. Revise sempre.</p>
          </div>
          <div className="math-card">
            <span>🔤</span>
            <h3>Crase</h3>
            <p>Substitua por "ao/aos" — se funcionar, usa crase. Nunca antes de verbos ou pronomes pessoais.</p>
          </div>
          <div className="math-card">
            <span>📌</span>
            <h3>Regência dos verbos-problema</h3>
            <p>Assistir a, obedecer a, chegar a, visar a — memorize os cinco verbos mais cobrados.</p>
          </div>
          <div className="math-card">
            <span>🔡</span>
            <h3>Ortografia crítica</h3>
            <p>"Mas/mais", "mau/mal", "porque/porquê", "discriminação" — erros que mostram falta de atenção.</p>
          </div>
          <div className="math-card">
            <span>🚫</span>
            <h3>Sem informalidade</h3>
            <p>"A gente", "hoje em dia", "todo mundo sabe" — substitua por equivalentes formais precisos.</p>
          </div>
          <div className="math-card">
            <span>⏱️</span>
            <h3>Revise os 10 minutos finais</h3>
            <p>Foque em concordância, crase e pontuação — os três erros mais frequentes e mais evitáveis.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Concordância verbal com sujeito posposto"
          statement={
            <p>
              Identifique a frase <strong>correta</strong> do ponto de vista da
              concordância verbal:
            </p>
          }
          options={[
            { letter: "a", text: "'Existe muitas causas para a desigualdade social no Brasil.'" },
            { letter: "b", text: "'Existem muitas causas para a desigualdade social no Brasil.'", correct: true },
            { letter: "c", text: "'Existindo muitas causas para a desigualdade social no Brasil.'" },
            { letter: "d", text: "'Haviam muitos motivos para a crise, segundo especialistas.'" },
          ]}
          resolution={
            <p>
              "Existem muitas causas" está correto: o verbo "existir" concorda com o
              sujeito "muitas causas" (plural), mesmo que o sujeito venha depois do verbo
              (sujeito posposto). A alternativa A usa o singular incorretamente. A
              alternativa D tem outro erro: "haver" no sentido de "existir" é impessoal
              — "havia muitos motivos" (singular) seria o correto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Uso correto da crase"
          statement={
            <p>
              Qual das frases abaixo usa a crase <strong>corretamente</strong>?
            </p>
          }
          options={[
            { letter: "a", text: "'O governo precisa à investir em educação pública.'" },
            { letter: "b", text: "'Refiro-me à política de inclusão social implementada em 2021.'", correct: true },
            { letter: "c", text: "'À medida em que o problema cresce, torna-se urgente agir.'" },
            { letter: "d", text: "'O candidato chegou à tempo para realizar a prova.'" },
          ]}
          resolution={
            <p>
              A alternativa B está correta: "refiro-me à política" — o verbo "referir-se"
              exige preposição "a" (referir-se a algo) e "política" é feminino com artigo,
              gerando crase. A alternativa A é errada: nunca usa crase antes de verbo.
              A alternativa C tem erro de regência: "à medida que" (correto), não "à medida
              em que". A alternativa D é errada: "a tempo" é locução adverbial sem crase.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Regência verbal"
          statement={
            <p>
              Identifique a frase com uso <strong>correto</strong> de regência verbal:
            </p>
          }
          options={[
            { letter: "a", text: "'Os cidadãos precisam obedecer as leis para garantir a ordem social.'" },
            { letter: "b", text: "'A política pública visa melhorar as condições de vida da população vulnerável.'" },
            { letter: "c", text: "'Precisamos assistir ao debate para compreender as propostas dos candidatos.'", correct: true },
            { letter: "d", text: "'Os jovens chegaram em São Paulo em busca de oportunidades.'" },
          ]}
          resolution={
            <p>
              "Assistir ao debate" está correto: o verbo "assistir" no sentido de "ver" é
              transitivo indireto e exige preposição "a". As alternativas A (obedecer às
              leis), B (visa a melhorar — no sentido de pretender, exige preposição) e D
              (chegaram a São Paulo — verbo "chegar" seguido de "a", não "em", no uso
              formal) apresentam erros de regência.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Identificando erros na redação"
          statement={
            <p>
              (Estilo ENEM) Leia o trecho: "A desinformação é um problema que afeta a
              maioria dos brasileiros, que assistem notícias falsas diariamente e não
              possui ferramentas para identificar a veracidade das informações." Esse
              trecho contém quantos erros gramaticais?
            </p>
          }
          options={[
            { letter: "a", text: "Nenhum — o trecho está completamente correto." },
            { letter: "b", text: "Um erro: 'assistem notícias' deveria ser 'assistem às notícias'." },
            { letter: "c", text: "Dois erros: 'assistem notícias' (deveria ser 'assistem às notícias') e 'não possui' (deveria ser 'não possuem', concordando com 'que' = 'brasileiros').", correct: true },
            { letter: "d", text: "Três erros: além dos dois gramaticais, 'a maioria dos brasileiros' deveria estar no plural." },
          ]}
          resolution={
            <p>
              Existem dois erros: (1) "assistir" no sentido de "ver" é transitivo indireto
              e exige "a" — correto seria "assistem às notícias"; (2) "não possui" deveria
              ser "não possuem", pois o pronome relativo "que" retoma "brasileiros" (plural),
              e o verbo deve concordar com o antecedente. A maioria dos brasileiros (sujeito
              coletivo) fica no singular — correto — mas o "que" relativo se refere a
              "brasileiros", não a "maioria".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Registro formal na redação"
          statement={
            <p>
              (Estilo ENEM) Um candidato escreveu: "Hoje em dia, a gente percebe que
              o sistema de saúde tá cada vez mais precário, e isso é muito grave porque
              muita gente fica sem atendimento." Para adequar o trecho à norma culta
              formal, qual alternativa reescreve corretamente o trecho?
            </p>
          }
          options={[
            { letter: "a", text: "'Hoje em dia, as pessoas notam que o sistema de saúde está cada vez mais precário, e isso é muito grave porque muitos ficam sem atendimento.'" },
            { letter: "b", text: "'Na contemporaneidade, observa-se a crescente deterioração do sistema de saúde pública, realidade que priva parcelas expressivas da população do acesso a atendimento médico adequado.'", correct: true },
            { letter: "c", text: "'Atualmente, nós percebemos que o sistema de saúde está precário e isso é grave porque a gente fica sem atendimento.'" },
            { letter: "d", text: "'Nos dias de hoje, é notório que o sistema de saúde encontra-se em situação precária e muita gente sofre as consequências.'" },
          ]}
          resolution={
            <p>
              A alternativa B é a mais adequada ao registro formal do ENEM: elimina todas as
              marcas de oralidade ("hoje em dia" → "na contemporaneidade"; "a gente" →
              "parcelas expressivas da população"; "tá" → "observa-se"), usa vocabulário
              elevado ("deterioração", "priva", "adequado") e mantém a norma culta sem
              artificialidade. A alternativa A corrige parte dos erros, mas mantém
              "hoje em dia" e a estrutura informal. As alternativas C e D ainda contêm
              "a gente" ou "hoje em dia" — marcas de informalidade.
            </p>
          }
        />
      </section>
    </article>
  );
}
