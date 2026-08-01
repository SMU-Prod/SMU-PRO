"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 17</span>

          <h1>Período Composto</h1>

          <p>
            Domine a estrutura do período composto — coordenação e subordinação — e
            aprenda a classificar todas as orações com segurança. Este é um dos temas
            mais recorrentes no ENEM e nos vestibulares, pois conecta sintaxe,
            semântica e interpretação textual.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>

        <h2>1. Período Simples vs. Período Composto</h2>

        <p>
          Um <strong>período</strong> é o conjunto de orações que forma um enunciado
          encerrado por ponto final, ponto de exclamação, ponto de interrogação ou
          reticências. Quando esse período contém <em>apenas uma oração</em> (um único
          verbo ou locução verbal), chamamos de <strong>período simples</strong>. Quando
          contém <em>duas ou mais orações</em>, temos o <strong>período composto</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Período Simples</h3>
            <p>
              Contém apenas uma oração. Ex.: "O estudante leu o texto." — um verbo,
              uma oração, um período simples.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Período Composto</h3>
            <p>
              Contém duas ou mais orações. Ex.: "O estudante leu o texto e fez
              anotações." — dois verbos, dois períodos, um período composto.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Regra prática para contar orações</h3>
          <p>
            Conte o número de verbos (ou locuções verbais) no período: cada verbo
            corresponde a uma oração. Em "Ele estuda, trabalha e ainda cuida dos
            filhos", há três verbos → três orações.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 640 180"
            width="640"
            height="180"
            aria-label="Diagrama: período simples tem 1 oração; período composto tem 2 ou mais orações"
          >
            <rect x="10" y="20" width="280" height="140" rx="12" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
            <text x="150" y="55" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#3730a3">Período Simples</text>
            <text x="150" y="85" textAnchor="middle" fontSize="13" fill="#1e1b4b">1 verbo = 1 oração</text>
            <text x="150" y="110" textAnchor="middle" fontSize="12" fill="#3730a3" fontStyle="italic">"O sol nasceu."</text>
            <rect x="350" y="20" width="280" height="140" rx="12" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="490" y="55" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#9d174d">Período Composto</text>
            <text x="490" y="85" textAnchor="middle" fontSize="13" fill="#500724">2+ verbos = 2+ orações</text>
            <text x="490" y="110" textAnchor="middle" fontSize="12" fill="#9d174d" fontStyle="italic">"O sol nasceu</text>
            <text x="490" y="130" textAnchor="middle" fontSize="12" fill="#9d174d" fontStyle="italic">e o dia clareou."</text>
          </svg>
          <figcaption>Diferença entre período simples e período composto</figcaption>
        </figure>

        <p>
          O período composto se divide em dois grandes tipos: por
          <strong> coordenação</strong> (orações independentes entre si) e por
          <strong> subordinação</strong> (orações dependentes de outra oração). Esses
          dois mecanismos refletem formas distintas de organizar o pensamento e
          estabelecer relações lógicas entre as ideias.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coordenação</span>

        <h2>2. Orações Coordenadas: Independência Sintática</h2>

        <p>
          As <strong>orações coordenadas</strong> são sintaticamente independentes: cada
          uma poderia existir sozinha, como um período simples, sem perder seu sentido
          gramatical. A relação entre elas é de <em>adição, oposição, alternância,
          conclusão ou explicação</em> — nunca de dependência.
        </p>

        <p>
          Divide-se em dois grupos principais: <strong>assindéticas</strong> (sem
          conjunção) e <strong>sindéticas</strong> (com conjunção coordenativa).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Assindéticas</h3>
            <p>
              Sem conjunção. Separadas por vírgula ou ponto e vírgula. Ex.: "Entrei,
              sentei, comecei a estudar."
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Sindéticas</h3>
            <p>
              Ligadas por conjunções coordenativas. Classificam-se conforme a conjunção
              usada e a relação de sentido estabelecida.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Estrutura das orações coordenadas assindéticas</h3>
          <p>
            "Chegou à biblioteca, escolheu um livro, sentou-se perto da janela."
          </p>
          <p>
            Três orações coordenadas assindéticas, separadas por vírgulas, cada uma
            autônoma sintaticamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sindéticas</span>

        <h2>3. Orações Coordenadas Sindéticas: Os Cinco Tipos</h2>

        <p>
          Cada tipo de oração coordenada sindética é definido pela conjunção
          que a introduz e pela relação lógica que essa conjunção estabelece.
          Memorizar as conjunções de cada tipo é indispensável para o ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Relação de sentido</th>
                <th>Conjunções principais</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aditiva</strong></td>
                <td>Adição, soma de ideias</td>
                <td>e, nem, não só...mas também, não apenas...como também</td>
                <td>"Estudei e aprendi."</td>
              </tr>
              <tr>
                <td><strong>Adversativa</strong></td>
                <td>Oposição, contraste</td>
                <td>mas, porém, contudo, todavia, no entanto, entretanto</td>
                <td>"Estudei, mas não passei."</td>
              </tr>
              <tr>
                <td><strong>Alternativa</strong></td>
                <td>Alternância, exclusão</td>
                <td>ou...ou, ora...ora, seja...seja, quer...quer, já...já</td>
                <td>"Ora chora, ora ri."</td>
              </tr>
              <tr>
                <td><strong>Conclusiva</strong></td>
                <td>Conclusão, consequência</td>
                <td>logo, portanto, assim, então, por isso, por conseguinte, pois (depois do verbo)</td>
                <td>"Estudou muito; logo, passou."</td>
              </tr>
              <tr>
                <td><strong>Explicativa</strong></td>
                <td>Explicação, justificativa</td>
                <td>pois (antes do verbo), porque, que, porquanto</td>
                <td>"Descanse, pois você está cansado."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção ao "pois" — armadilha clássica do ENEM</h3>
          <p>
            <strong>"Pois" conclusivo</strong> vem <em>após</em> o verbo da segunda oração:
            "Aprendi muito; saí satisfeito, pois." (posição posposta ao verbo — conclusão).
          </p>
          <p>
            <strong>"Pois" explicativo</strong> vem <em>antes</em> do verbo: "Saia logo,
            pois está ficando tarde." (inicia a oração — explicação).
          </p>
        </div>

        <div className="math-block">
          <h3>Exemplos detalhados de cada tipo</h3>
          <p><strong>Aditiva:</strong> "Não só leu o livro, mas também assistiu ao documentário."</p>
          <p><strong>Adversativa:</strong> "O candidato estudou muito; no entanto, não foi aprovado."</p>
          <p><strong>Alternativa:</strong> "Seja você quem o ajude, seja outra pessoa."</p>
          <p><strong>Conclusiva:</strong> "Ela dedicou anos à pesquisa; portanto, merece o reconhecimento."</p>
          <p><strong>Explicativa:</strong> "Não saia agora, porque vai chover."</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Subordinação</span>

        <h2>4. Orações Subordinadas: Dependência Sintática</h2>

        <p>
          As <strong>orações subordinadas</strong> são sintaticamente dependentes de uma
          oração principal (ou de um termo dela). Sozinhas, não formam enunciados
          completos — são como "encaixes" que exercem uma função sintática dentro da
          oração principal. Classificam-se em três grandes grupos: <strong>substantivas</strong>,
          <strong>adjetivas</strong> e <strong>adverbiais</strong>.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Mapa das orações subordinadas: substantivas, adjetivas e adverbiais"
          >
            <rect x="250" y="10" width="200" height="50" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="350" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">Orações Subordinadas</text>

            <line x1="350" y1="60" x2="100" y2="120" stroke="#6b7280" strokeWidth="2" />
            <line x1="350" y1="60" x2="350" y2="120" stroke="#6b7280" strokeWidth="2" />
            <line x1="350" y1="60" x2="600" y2="120" stroke="#6b7280" strokeWidth="2" />

            <rect x="10" y="120" width="180" height="50" rx="10" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="100" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Substantivas</text>

            <rect x="260" y="120" width="180" height="50" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="350" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Adjetivas</text>

            <rect x="510" y="120" width="180" height="50" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="600" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Adverbiais</text>

            <text x="100" y="195" textAnchor="middle" fontSize="11" fill="#065f46">função de substantivo</text>
            <text x="350" y="195" textAnchor="middle" fontSize="11" fill="#1e40af">função de adjetivo</text>
            <text x="600" y="195" textAnchor="middle" fontSize="11" fill="#9d174d">função de advérbio</text>

            <text x="100" y="215" textAnchor="middle" fontSize="11" fill="#065f46">(subj., OD, OI, pred...)</text>
            <text x="350" y="215" textAnchor="middle" fontSize="11" fill="#1e40af">(restritiva / explicativa)</text>
            <text x="600" y="215" textAnchor="middle" fontSize="11" fill="#9d174d">(causal, temporal...)</text>
          </svg>
          <figcaption>Mapa das três grandes classes de orações subordinadas</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Subordinadas Substantivas</span>

        <h2>5. Orações Subordinadas Substantivas</h2>

        <p>
          As <strong>orações subordinadas substantivas</strong> exercem a função que seria
          exercida por um substantivo (ou pronome). São introduzidas geralmente pelas
          conjunções integrantes <em>que</em> e <em>se</em>, ou por pronomes/advérbios
          interrogativos. Podem também aparecer na forma <strong>reduzida</strong>:
          de infinitivo (sem conjunção, verbo no infinitivo), de gerúndio ou de particípio.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Função sintática</th>
                <th>Exemplo</th>
                <th>Reduzida equivalente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Subjetiva</strong></td>
                <td>Sujeito da oração principal</td>
                <td>"É necessário <em>que você estude</em>."</td>
                <td>"É necessário <em>estudar</em>."</td>
              </tr>
              <tr>
                <td><strong>Objetiva direta</strong></td>
                <td>Objeto direto do verbo da principal</td>
                <td>"Ela quer <em>que tudo dê certo</em>."</td>
                <td>"Ela quer <em>que tudo dê certo</em>."</td>
              </tr>
              <tr>
                <td><strong>Objetiva indireta</strong></td>
                <td>Objeto indireto (com preposição)</td>
                <td>"Preciso <em>de que você me ajude</em>."</td>
                <td>"Preciso <em>de sua ajuda</em>."</td>
              </tr>
              <tr>
                <td><strong>Completiva nominal</strong></td>
                <td>Complemento nominal de um nome</td>
                <td>"Tenho certeza <em>de que virá</em>."</td>
                <td>"Tenho certeza <em>de sua vinda</em>."</td>
              </tr>
              <tr>
                <td><strong>Predicativa</strong></td>
                <td>Predicativo do sujeito</td>
                <td>"O fato é <em>que erramos</em>."</td>
                <td>"O fato é <em>ter errado</em>."</td>
              </tr>
              <tr>
                <td><strong>Apositiva</strong></td>
                <td>Aposto de um termo da principal</td>
                <td>"Só desejo uma coisa: <em>que sejamos felizes</em>."</td>
                <td>"Só desejo uma coisa: <em>ser feliz</em>."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Como identificar a substantiva subjetiva</h3>
          <p>
            Se o verbo da oração principal não tiver sujeito explícito e a oração
            subordinada responder à pergunta "quem?" ou "o quê?" antes do verbo
            principal, ela é <strong>subjetiva</strong>. Ocorre frequentemente com
            verbos impessoais e estruturas como "é preciso que", "convém que",
            "parece que".
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Diferença: objetiva direta vs. completiva nominal</h3>
          <p>
            A <strong>objetiva direta</strong> completa um <em>verbo</em> transitivo direto
            (sem preposição obrigatória entre o verbo e a oração).
            A <strong>completiva nominal</strong> completa um <em>nome</em> (substantivo,
            adjetivo ou advérbio) e sempre exige preposição: "certeza <em>de que</em>",
            "medo <em>de que</em>", "orgulhoso <em>de que</em>".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Subordinadas Adjetivas</span>

        <h2>6. Orações Subordinadas Adjetivas: Restritiva vs. Explicativa</h2>

        <p>
          As <strong>orações subordinadas adjetivas</strong> exercem a função de adjetivo,
          modificando um substantivo (ou pronome) da oração principal — chamado de
          <strong>antecedente</strong>. São introduzidas por <em>pronomes relativos</em>:
          que, o qual, cujo, onde, quando, como, quanto.
        </p>

        <p>
          A distinção entre <strong>restritiva</strong> e <strong>explicativa</strong>
          é fundamental para o ENEM, pois afeta o sentido do texto e o uso da vírgula.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Restritiva (sem vírgula)</h3>
            <p>
              Delimita, restringe o antecedente. Sem ela, o sentido muda ou fica
              incompleto. Não usa vírgulas. Ex.: "Os alunos <em>que estudaram</em>
              passaram." (apenas os que estudaram — não todos).
            </p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Explicativa (com vírgula)</h3>
            <p>
              Apenas acrescenta uma informação sobre o antecedente já determinado.
              Pode ser retirada sem alterar o sentido essencial. Usa vírgulas.
              Ex.: "Os alunos, <em>que estudaram bastante</em>, passaram." (todos
              passaram — a explicação é acessória).
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Contraste de sentido: mesmo pronome relativo, sentidos opostos</h3>
          <p>
            <strong>Restritiva:</strong> "Destruíram as florestas que impediam o avanço da soja."
            (apenas as florestas que impediam — outras foram preservadas).
          </p>
          <p>
            <strong>Explicativa:</strong> "Destruíram as florestas, que impediam o avanço da soja."
            (todas as florestas foram destruídas; a oração apenas explica por quê).
          </p>
          <p>
            Perceba: a vírgula muda completamente o sentido e tem implicações éticas
            e argumentativas relevantes para a interpretação de textos no ENEM.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Pronomes relativos e suas funções</h3>
          <p>
            <strong>que</strong> — sujeito ou objeto (o mais usado);
            <strong> o qual / a qual</strong> — após preposições dissílabas (após o qual);
            <strong> cujo / cuja</strong> — indica posse (nunca aceita artigo depois);
            <strong> onde</strong> — lugar;
            <strong> quando</strong> — tempo;
            <strong> como</strong> — modo;
            <strong> quanto</strong> — quantidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Subordinadas Adverbiais</span>

        <h2>7. Orações Subordinadas Adverbiais: Os Nove Tipos</h2>

        <p>
          As <strong>orações subordinadas adverbiais</strong> exercem a função de
          adjunto adverbial da oração principal, indicando circunstâncias como tempo,
          causa, condição, concessão, finalidade, comparação, consequência, conformidade
          e proporção. São introduzidas por <em>conjunções subordinativas adverbiais</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Ideia expressa</th>
                <th>Conjunções / locuções</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Causal</strong></td>
                <td>Causa, motivo</td>
                <td>porque, pois, como, já que, visto que, uma vez que, porquanto</td>
                <td>"Como não estudou, reprovou."</td>
              </tr>
              <tr>
                <td><strong>Concessiva</strong></td>
                <td>Concessão (fato que não impede)</td>
                <td>embora, aunque, mesmo que, ainda que, por mais que, se bem que, conquanto</td>
                <td>"Embora chovesse, saímos."</td>
              </tr>
              <tr>
                <td><strong>Condicional</strong></td>
                <td>Condição, hipótese</td>
                <td>se, caso, contanto que, desde que, a menos que, a não ser que, salvo se</td>
                <td>"Se estudar, passará."</td>
              </tr>
              <tr>
                <td><strong>Temporal</strong></td>
                <td>Tempo, situação no tempo</td>
                <td>quando, enquanto, assim que, logo que, antes que, depois que, até que, desde que</td>
                <td>"Assim que chegou, telefonou."</td>
              </tr>
              <tr>
                <td><strong>Final</strong></td>
                <td>Finalidade, objetivo</td>
                <td>para que, a fim de que, que (após verbos de movimento)</td>
                <td>"Estudou para que aprendesse."</td>
              </tr>
              <tr>
                <td><strong>Comparativa</strong></td>
                <td>Comparação</td>
                <td>como, assim como, tal qual, tanto quanto, mais...do que, menos...do que</td>
                <td>"Ele lê mais do que escreve."</td>
              </tr>
              <tr>
                <td><strong>Consecutiva</strong></td>
                <td>Consequência</td>
                <td>de modo que, de forma que, de maneira que, tanto que, tão...que, tal...que</td>
                <td>"Estudou tanto que passou."</td>
              </tr>
              <tr>
                <td><strong>Conformativa</strong></td>
                <td>Conformidade, acordo</td>
                <td>conforme, consoante, segundo, como</td>
                <td>"Agiu conforme o combinado."</td>
              </tr>
              <tr>
                <td><strong>Proporcional</strong></td>
                <td>Proporção entre dois fatos</td>
                <td>à medida que, ao passo que, à proporção que, quanto mais...mais</td>
                <td>"À medida que o dia avança, o calor aumenta."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Concessiva vs. Adversativa — diferença crucial</h3>
          <p>
            A <strong>adversativa</strong> é uma oração <em>coordenada</em>: "Estudou,
            mas não passou." (duas orações independentes ligadas por conjunção coordenativa).
          </p>
          <p>
            A <strong>concessiva</strong> é uma oração <em>subordinada</em>: "Embora
            tivesse estudado, não passou." (a concessiva depende da principal e usa
            subjuntivo).
          </p>
          <p>
            Ambas expressam contraste/oposição, mas a concessiva anuncia o fato
            contrário <em>antes</em> de afirmar que ele não impede a conclusão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Orações Reduzidas</span>

        <h2>8. Orações Reduzidas de Infinitivo, Gerúndio e Particípio</h2>

        <p>
          As <strong>orações reduzidas</strong> são subordinadas que não apresentam
          conjunção introdutória e têm o verbo em forma nominal: <em>infinitivo</em>,
          <em>gerúndio</em> ou <em>particípio</em>. Apesar de terem aparência mais
          simples, exercem as mesmas funções das orações desenvolvidas correspondentes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>∞</span>
            <h3>Reduzida de Infinitivo</h3>
            <p>
              Equivale geralmente a substantiva ou adverbial final/condicional.
              Ex.: "Quero <em>sair</em>." = "Quero que eu saia." (objetiva direta).
              "Para <em>vencer</em>, é preciso treinar." (adverbial final).
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Reduzida de Gerúndio</h3>
            <p>
              Equivale geralmente a adverbial temporal, causal ou condicional.
              Ex.: "<em>Chegando</em> cedo, aproveitou a manhã." (temporal) =
              "Quando chegou cedo, aproveitou a manhã."
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Reduzida de Particípio</h3>
            <p>
              Equivale geralmente a adverbial temporal ou concessiva.
              Ex.: "<em>Terminada</em> a prova, os alunos saíram." (temporal) =
              "Depois que a prova foi terminada, os alunos saíram."
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Transformando reduzida em desenvolvida (e vice-versa)</h3>
          <p>
            <strong>Reduzida:</strong> "Ao sair, apague a luz."
          </p>
          <p>
            <strong>Desenvolvida:</strong> "Quando você sair, apague a luz." (adverbial temporal)
          </p>
          <p>
            <strong>Reduzida:</strong> "Sei que ele virá." → A oração desenvolvida já está
            com conjunção; a reduzida seria: "Sei <em>de sua vinda</em>." (nominalização)
            ou contextos como: "Ouço-o <em>cantar</em>." (objetiva direta reduzida de infinitivo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conectivos e Sentido</span>

        <h2>9. O Papel dos Conectivos na Construção do Sentido</h2>

        <p>
          No ENEM, as questões sobre período composto raramente pedem apenas a
          classificação mecânica das orações. O que se cobra é a <strong>compreensão
          do sentido</strong> que os conectivos imprimem ao texto. Alterar uma conjunção
          pode mudar completamente a relação lógica entre as ideias — e, consequentemente,
          o sentido do enunciado.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Mesmo sentido, conjunções diferentes</h3>
            <p>
              "Não foi à escola <em>porque</em> estava doente." (causal) e
              "Não foi à escola; <em>logo</em>, estava doente." (conclusiva) indicam
              relações lógicas diferentes, mesmo tratando dos mesmos fatos.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Substituição inadequada de conectivos</h3>
            <p>
              Trocar "embora" por "porque" transforma uma concessiva em causal —
              sentidos opostos. O ENEM cobra qual substituição <em>mantém</em>
              o sentido original.
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Conjunções polissêmicas</h3>
            <p>
              "Como" pode ser causal ("Como choveu, ficamos") ou comparativa
              ("Agiu como esperado"). "Que" pode ser aditivo, causal, consecutivo,
              explicativo, integrante, relativo. O contexto decide.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Estratégia de análise</h3>
            <p>
              Identifique a relação lógica (causa? oposição? condição?) antes de
              nomear a conjunção. A relação semântica é mais importante que o rótulo
              gramatical nas questões do ENEM.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Questão-padrão do ENEM sobre conectivos</h3>
          <p>
            "Assinale a alternativa em que a substituição do conectivo em destaque
            mantém o sentido original do trecho." Nesse tipo de questão, identifique
            primeiro a <em>relação lógica</em> (causal, concessiva, adversativa etc.)
            e depois verifique qual opção preserva essa relação com outra conjunção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Período Composto Misto</span>

        <h2>10. Período Composto por Coordenação e Subordinação Simultaneamente</h2>

        <p>
          Nos textos reais — literários, jornalísticos, científicos — raramente
          encontramos períodos compostos "puros" (apenas por coordenação ou apenas por
          subordinação). O mais comum é o <strong>período composto misto</strong>,
          que combina orações coordenadas e subordinadas em uma mesma estrutura.
        </p>

        <div className="math-block">
          <h3>Análise de período composto misto</h3>
          <p>
            "Embora o dia estivesse nublado, a estudante saiu e caminhou até a biblioteca."
          </p>
          <p>
            Oração 1: "Embora o dia estivesse nublado" — subordinada adverbial
            concessiva (reduzida não; desenvolvida com conjunção "embora" + subjuntivo).
          </p>
          <p>
            Oração 2 (principal): "a estudante saiu" — oração principal.
          </p>
          <p>
            Oração 3: "e caminhou até a biblioteca" — coordenada sindética aditiva
            (ligada à oração 2 pela conjunção "e").
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Método para analisar períodos complexos</h3>
          <p>
            1. Conte os verbos: cada verbo = uma oração.
          </p>
          <p>
            2. Identifique a oração principal (aquela de que as demais dependem ou com
            a qual se coordenam).
          </p>
          <p>
            3. Para cada oração dependente, pergunte: ela exerce função de substantivo,
            adjetivo ou advérbio em relação à principal?
          </p>
          <p>
            4. Para cada oração independente, identifique a conjunção coordenativa e
            classifique o tipo.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            width="700"
            height="300"
            aria-label="Fluxograma de análise do período composto"
          >
            <rect x="250" y="10" width="200" height="45" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="350" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Período composto</text>

            <line x1="350" y1="55" x2="350" y2="85" stroke="#6b7280" strokeWidth="2" />
            <polygon points="345,85 355,85 350,95" fill="#6b7280" />

            <rect x="220" y="95" width="260" height="45" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
            <text x="350" y="118" textAnchor="middle" fontSize="12" fill="#3730a3">A oração depende de outra?</text>
            <text x="350" y="132" textAnchor="middle" fontSize="11" fill="#3730a3">(tem conjunção subordinativa?)</text>

            <line x1="220" y1="117" x2="130" y2="175" stroke="#059669" strokeWidth="2" />
            <text x="165" y="152" fontSize="11" fill="#059669" fontWeight="bold">NÃO</text>

            <line x1="480" y1="117" x2="570" y2="175" stroke="#dc2626" strokeWidth="2" />
            <text x="510" y="152" fontSize="11" fill="#dc2626" fontWeight="bold">SIM</text>

            <rect x="20" y="175" width="210" height="70" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
            <text x="125" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">COORDENADA</text>
            <text x="125" y="218" textAnchor="middle" fontSize="11" fill="#065f46">assindética ou sindética</text>
            <text x="125" y="234" textAnchor="middle" fontSize="11" fill="#065f46">(adit./advers./alt./concl./expl.)</text>

            <rect x="470" y="175" width="210" height="70" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
            <text x="575" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">SUBORDINADA</text>
            <text x="575" y="218" textAnchor="middle" fontSize="11" fill="#9d174d">substantiva, adjetiva</text>
            <text x="575" y="234" textAnchor="middle" fontSize="11" fill="#9d174d">ou adverbial</text>
          </svg>
          <figcaption>Fluxograma: como classificar uma oração no período composto</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM na prática</span>

        <h2>11. Período Composto no ENEM: Estratégias e Armadilhas</h2>

        <p>
          O ENEM aborda período composto principalmente de três formas: pedindo a
          <strong> classificação de orações</strong>, pedindo a identificação da
          <strong> relação de sentido</strong> estabelecida por um conectivo, ou pedindo
          qual <strong>substituição de conectivo mantém o sentido</strong>. Veja as
          principais armadilhas e como evitá-las.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Armadilha 1: "mas" vs. "embora"</h3>
            <p>
              "Mas" (adversativa coordenada) e "embora" (concessiva subordinada)
              expressam oposição de forma diferente: "embora" antecipa o obstáculo;
              "mas" o apresenta depois. Não são sempre intercambiáveis.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Armadilha 2: "logo" vs. "porque"</h3>
            <p>
              "Logo" introduz conclusão; "porque" introduz causa. São opostos na
              relação lógica: em "A → logo B", B decorre de A; em "A porque B", B
              causou A.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Armadilha 3: pronome relativo "cujo"</h3>
            <p>
              "Cujo" nunca aceita artigo após ele: *"cujo o livro" está errado.
              Além disso, concorda em gênero/número com o ser possuído, não com
              o possuidor: "o autor cujas obras são famosas".
            </p>
          </div>
          <div className="lesson-card">
            <span>🪤</span>
            <h3>Armadilha 4: consequência vs. conclusão</h3>
            <p>
              Consecutiva subordinada ("tanto que", "de modo que") expressa
              consequência de uma intensidade; conclusiva coordenada ("logo",
              "portanto") expressa dedução lógica. Contextos diferentes.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Mapa mental rápido para a prova</h3>
          <p>
            <strong>MAS / PORÉM / CONTUDO / TODAVIA / NO ENTANTO / ENTRETANTO</strong>
            → adversativa (coordenada).
          </p>
          <p>
            <strong>EMBORA / MESMO QUE / AINDA QUE / POR MAIS QUE</strong>
            → concessiva (subordinada) + subjuntivo.
          </p>
          <p>
            <strong>SE / CASO / CONTANTO QUE / DESDE QUE</strong>
            → condicional (subordinada).
          </p>
          <p>
            <strong>LOGO / PORTANTO / POR ISSO / ASSIM / POR CONSEGUINTE</strong>
            → conclusiva (coordenada).
          </p>
          <p>
            <strong>PORQUE / JÁ QUE / VISTO QUE / COMO (início de frase) / UMA VEZ QUE</strong>
            → causal (subordinada).
          </p>
          <p>
            <strong>POIS (antes do verbo)</strong> → explicativa (coordenada).
            <strong> POIS (após o verbo)</strong> → conclusiva (coordenada).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Classificação de oração coordenada sindética"
          statement={
            <p>
              Assinale a alternativa que identifica corretamente o tipo de oração
              coordenada sindética presente em: <strong>"Ele não apenas estudou,
              mas também praticou os exercícios."</strong>
            </p>
          }
          options={[
            { letter: "a", text: "Adversativa, pois indica oposição entre as ideias." },
            { letter: "b", text: "Alternativa, pois apresenta duas possibilidades." },
            { letter: "c", text: "Aditiva, pois a conjunção 'não só...mas também' acrescenta uma ideia à outra.", correct: true },
            { letter: "d", text: "Conclusiva, pois a segunda oração decorre logicamente da primeira." },
          ]}
          resolution={
            <p>
              A locução correlativa <strong>"não apenas...mas também"</strong> (variante
              de "não só...mas também") é uma conjunção <em>aditiva</em>: soma, acrescenta
              a segunda ação à primeira. Não há oposição (o que descartaria adversativa),
              nem alternativa (que exigiria exclusão mútua), nem conclusão (que precisaria
              de relação de consequência lógica).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Oração subordinada adjetiva restritiva e explicativa"
          statement={
            <p>
              Leia os dois enunciados abaixo e marque a opção que apresenta a
              diferença de sentido correta entre eles:
            </p>
          }
          options={[
            { letter: "a", text: "Ambos os enunciados têm o mesmo sentido; a vírgula é apenas estilística." },
            { letter: "b", text: "I — apenas os políticos que mentem foram investigados; II — todos os políticos foram investigados, e todos eles mentem.", correct: true },
            { letter: "c", text: "I — todos os políticos mentem e foram investigados; II — nenhum político foi investigado." },
            { letter: "d", text: "I e II têm sentidos opostos porque a conjunção relativa 'que' muda de classe gramatical." },
          ]}
          resolution={
            <p>
              Os enunciados são: <em>I. "Os políticos que mentem foram investigados."</em>
              (adjetiva <strong>restritiva</strong>, sem vírgula — delimita: somente os que
              mentem) e <em>II. "Os políticos, que mentem, foram investigados."</em>
              (adjetiva <strong>explicativa</strong>, com vírgula — todos foram investigados;
              a orelha entre vírgulas apenas acrescenta a informação de que eles mentem).
              A vírgula muda radicalmente o alcance da afirmação.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Identificação e substituição de conectivo em período composto"
          statement={
            <p>
              No trecho: <strong>"Por mais que a tecnologia avance, o elemento humano
              permanece insubstituível no cuidado com o próximo"</strong>, a relação
              lógica estabelecida é de concessão. Assinale a alternativa que substitui
              o conectivo em destaque mantendo o mesmo sentido:
            </p>
          }
          options={[
            { letter: "a", text: "Porque a tecnologia avança, o elemento humano permanece insubstituível." },
            { letter: "b", text: "Se a tecnologia avançar, o elemento humano permanece insubstituível." },
            { letter: "c", text: "Embora a tecnologia avance, o elemento humano permanece insubstituível.", correct: true },
            { letter: "d", text: "A tecnologia avança, mas o elemento humano permanece insubstituível." },
          ]}
          resolution={
            <p>
              "Por mais que" é uma conjunção <strong>concessiva</strong> (subordinada
              adverbial): introduz um fato que, mesmo acontecendo, não impede a conclusão
              da oração principal. A alternativa C usa "embora", que também é conjunção
              concessiva subordinada, preservando exatamente a mesma relação lógica e o
              modo subjuntivo ("avance"). A opção A (causal) inverte a lógica. A opção B
              (condicional) expressa hipótese, não concessão. A opção D usa "mas"
              (adversativa coordenada), que expressa oposição mas perde a nuance de
              "mesmo que isso aconteça" característica da concessão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Conectivo e efeito de sentido em texto argumentativo"
          statement={
            <p>
              Em um artigo de opinião, um jornalista escreveu: <strong>"O governo
              investiu bilhões em educação; <em>no entanto</em>, os índices de
              aprendizado continuam estagnados."</strong> Se o conectivo "no entanto"
              fosse substituído por "portanto", qual seria o efeito sobre o argumento?
            </p>
          }
          options={[
            { letter: "a", text: "O argumento se tornaria causal: o investimento causou a estagnação." },
            { letter: "b", text: "O argumento se tornaria concessivo: o investimento não foi suficiente." },
            { letter: "c", text: "O argumento se tornaria conclusivo: a estagnação decorreria logicamente do investimento, o que seria ilógico e destruiria o argumento original.", correct: true },
            { letter: "d", text: "O argumento permaneceria igual, pois ambas as conjunções expressam oposição." },
          ]}
          resolution={
            <p>
              "No entanto" é adversativa: opõe investimento e resultado negativo,
              criando um argumento crítico ao governo (investiu, mas não obteve
              resultado). "Portanto" é conclusiva: apresentaria a estagnação como
              consequência lógica do investimento — uma afirmação absurda e
              contraproducente do ponto de vista argumentativo. Isso demonstra que
              a escolha do conectivo é uma decisão retórica e argumentativa, não
              apenas gramatical.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Subordinada adverbial em contexto literário"
          statement={
            <p>
              Leia o trecho adaptado de Clarice Lispector: <strong>"Ela parou à beira
              da janela como quem espera algo que não sabe nomear."</strong> A oração
              sublinhada "como quem espera algo que não sabe nomear" é:
            </p>
          }
          options={[
            { letter: "a", text: "Subordinada adjetiva restritiva, pois modifica o substantivo 'janela'." },
            { letter: "b", text: "Subordinada adverbial comparativa, introduzida por 'como', expressando o modo de uma ação por meio de comparação.", correct: true },
            { letter: "c", text: "Subordinada adverbial conformativa, pois 'como' indica conformidade com um padrão estabelecido." },
            { letter: "d", text: "Oração coordenada assindética, pois poderia existir independentemente da oração anterior." },
          ]}
          resolution={
            <p>
              A oração "como quem espera algo que não sabe nomear" é introduzida por
              "como" com valor <strong>comparativo</strong>: ela estabelece uma comparação
              entre o modo como a personagem parou e o modo como alguém espera algo
              indefinido. Trata-se de oração subordinada adverbial comparativa. Não é
              conformativa (que expressaria acordo com uma norma, como "conforme
              combinado"). Não é adjetiva (não modifica um substantivo específico).
              Não é coordenada (depende sintaticamente da oração principal para existir).
              A beleza literária do trecho está justamente nessa comparação que expressa
              a espera pelo indefinível — característica do estilo lispectoriano.
            </p>
          }
        />
      </section>
    </article>
  );
}
