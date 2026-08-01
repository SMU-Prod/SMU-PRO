"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 18</span>
          <h1>Sintaxe II: Termos Integrantes da Oração</h1>
          <p>
            Quando um verbo ou um nome tem significado incompleto, ele precisa de um
            complemento que integre seu sentido — e é aí que entram os termos integrantes
            da oração. Dominar objeto direto, objeto indireto, complemento nominal e agente
            da passiva é indispensável para gabaritar questões de sintaxe no ENEM e nos
            principais vestibulares, além de escrever textos com mais precisão e clareza.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. O que são Termos Integrantes da Oração?</h2>

        <p>
          A gramática tradicional classifica os termos da oração em duas grandes famílias:
          os <strong>termos essenciais</strong> (sujeito e predicado), os <strong>termos acessórios</strong>
          (adjunto adnominal, adjunto adverbial e aposto) e os <strong>termos integrantes</strong>.
          Estes últimos recebem essa denominação porque <em>integram</em> — isto é, completam,
          tornam inteiro — o sentido de verbos ou nomes que, por si sós, ficariam semanticamente
          incompletos.
        </p>
        <p>
          Imagine o verbo "gostar": "Ela gosta." A oração soa truncada, pois o verbo exige
          que informemos <em>de quê</em> ou <em>de quem</em> ela gosta. Esse complemento
          necessário é um termo integrante. O mesmo raciocínio vale para nomes: "Tenho
          necessidade." — necessidade <em>de quê</em>? O nome abstrato "necessidade"
          reclama um complemento para seu sentido ficar completo.
        </p>

        <div className="lesson-highlight">
          <strong>Os quatro termos integrantes:</strong>
          <ul>
            <li><strong>Objeto direto</strong> — complemento verbal sem preposição obrigatória</li>
            <li><strong>Objeto indireto</strong> — complemento verbal com preposição obrigatória</li>
            <li><strong>Complemento nominal</strong> — complemento de nomes (substantivos, adjetivos ou advérbios)</li>
            <li><strong>Agente da passiva</strong> — praticante da ação na voz passiva analítica</li>
          </ul>
        </div>

        <p>
          A distinção entre esses termos é um dos pontos mais cobrados em questões de
          análise sintática no ENEM e vestibulares. O erro mais comum dos candidatos é
          confundir <em>objeto indireto</em> com <em>complemento nominal</em>, pois ambos
          usam preposição — mas há um critério claro para diferenciá-los, que estudaremos
          em detalhe na seção 7.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Transitividade Verbal</span>
        <h2>2. Transitividade Verbal — A Base para Entender os Objetos</h2>

        <p>
          Antes de classificar os complementos verbais, é preciso entender a
          <strong> transitividade verbal</strong>: a propriedade que os verbos têm (ou não
          têm) de exigir complemento para completar seu sentido. Existem três possibilidades:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Transitivo Direto (VTD)</h3>
            <p>Exige complemento <strong>sem preposição obrigatória</strong>. Ex.: <em>"Ele leu o livro."</em> — objeto direto: "o livro".</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Transitivo Indireto (VTI)</h3>
            <p>Exige complemento <strong>com preposição obrigatória</strong>. Ex.: <em>"Ela gosta de música."</em> — objeto indireto: "de música".</p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Bitransitivo (VTDI)</h3>
            <p>Exige <strong>dois</strong> complementos: um direto e um indireto. Ex.: <em>"Ele deu o presente à criança."</em></p>
          </div>
          <div className="lesson-card">
            <span>✔️</span>
            <h3>Intransitivo (VI)</h3>
            <p>Tem sentido completo <strong>sem complemento</strong>. Ex.: <em>"A criança dormiu."</em> — "dormiu" não exige nada mais.</p>
          </div>
        </div>

        <p>
          Atenção: a transitividade de um verbo pode variar conforme o contexto e o
          significado empregado. "Correr" é intransitivo em "Ele correu.", mas transitivo
          direto em "Ele correu o risco." O dicionário lista os diferentes usos, mas a prova
          sempre apresenta o verbo em contexto — use-o para determinar a transitividade.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Esquema da transitividade verbal mostrando VTD, VTI, VTDI e VI">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            {/* título */}
            <text x="350" y="28" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Transitividade Verbal — Visão Geral</text>
            {/* VTD */}
            <rect x="30" y="50" width="145" height="100" rx="10" fill="#dbeafe" />
            <text x="102" y="75" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">VTD</text>
            <text x="102" y="95" textAnchor="middle" fill="#1e40af" fontSize="11">Objeto Direto</text>
            <text x="102" y="113" textAnchor="middle" fill="#1e40af" fontSize="10">(sem preposição</text>
            <text x="102" y="127" textAnchor="middle" fill="#1e40af" fontSize="10">obrigatória)</text>
            <text x="102" y="143" textAnchor="middle" fill="#1e40af" fontSize="10" fontStyle="italic">"leu o livro"</text>
            {/* VTI */}
            <rect x="190" y="50" width="145" height="100" rx="10" fill="#d1fae5" />
            <text x="262" y="75" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">VTI</text>
            <text x="262" y="95" textAnchor="middle" fill="#065f46" fontSize="11">Objeto Indireto</text>
            <text x="262" y="113" textAnchor="middle" fill="#065f46" fontSize="10">(com preposição</text>
            <text x="262" y="127" textAnchor="middle" fill="#065f46" fontSize="10">obrigatória)</text>
            <text x="262" y="143" textAnchor="middle" fill="#065f46" fontSize="10" fontStyle="italic">"gosta de música"</text>
            {/* VTDI */}
            <rect x="350" y="50" width="145" height="100" rx="10" fill="#fde68a" />
            <text x="422" y="75" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">VTDI</text>
            <text x="422" y="95" textAnchor="middle" fill="#92400e" fontSize="11">OD + OI</text>
            <text x="422" y="113" textAnchor="middle" fill="#92400e" fontSize="10">(dois complementos</text>
            <text x="422" y="127" textAnchor="middle" fill="#92400e" fontSize="10">diferentes)</text>
            <text x="422" y="143" textAnchor="middle" fill="#92400e" fontSize="10" fontStyle="italic">"deu o presente à filha"</text>
            {/* VI */}
            <rect x="510" y="50" width="155" height="100" rx="10" fill="#ede9fe" />
            <text x="587" y="75" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">VI</text>
            <text x="587" y="95" textAnchor="middle" fill="#7c3aed" fontSize="11">Sem complemento</text>
            <text x="587" y="113" textAnchor="middle" fill="#7c3aed" fontSize="10">obrigatório</text>
            <text x="587" y="143" textAnchor="middle" fill="#7c3aed" fontSize="10" fontStyle="italic">"a criança dormiu"</text>
            <text x="350" y="185" textAnchor="middle" fill="#64748b" fontSize="11">A transitividade varia conforme o sentido empregado no contexto</text>
          </svg>
          <figcaption>Os quatro tipos de transitividade verbal e seus complementos correspondentes.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto Direto</span>
        <h2>3. Objeto Direto — Complemento Verbal sem Preposição</h2>

        <p>
          O <strong>objeto direto (OD)</strong> é o complemento do verbo transitivo direto.
          Sua característica definidora é que a ligação entre o verbo e o complemento ocorre
          <em> sem preposição obrigatória</em> — a preposição, quando aparece, é acidental
          ou expressa ênfase, não é exigida pelo verbo.
        </p>
        <p>
          Para identificar o objeto direto, pergunte ao verbo: <strong>"Quem?"</strong> ou
          <strong> "O quê?"</strong> Se a resposta vier sem preposição obrigatória, temos
          um objeto direto.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplos de objeto direto:</strong>
          <ul>
            <li><em>"O aluno leu o livro."</em> → leu o quê? → <strong>"o livro"</strong> (OD)</li>
            <li><em>"A professora corrigiu as provas."</em> → corrigiu o quê? → <strong>"as provas"</strong> (OD)</li>
            <li><em>"Eles viram o filme ontem."</em> → viram o quê? → <strong>"o filme"</strong> (OD)</li>
            <li><em>"O presidente assinou o decreto."</em> → assinou o quê? → <strong>"o decreto"</strong> (OD)</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Objeto direto preposicionado:</strong>
          <p>
            Em alguns casos, o objeto direto vem acompanhado de preposição, mas essa
            preposição <em>não é exigida pelo verbo</em> — aparece por razões expressivas
            (ênfase, personificação, estrutura da frase). Exemplos:
          </p>
          <ul>
            <li><em>"Não vi a ninguém."</em> — "a ninguém" é OD preposicionado (o verbo "ver" é VTD, mas "ninguém" puxa a preposição "a" por tradição gramatical com pronomes indefinidos).</li>
            <li><em>"Ele amava a ela."</em> — preposição "a" indica ênfase no pronome oblíquo, não mudança de transitividade.</li>
          </ul>
        </div>

        <p>
          O objeto direto pode ser representado por um substantivo, um pronome (oblíquo
          átono: me, te, o, a, nos, vos, os, as), uma oração subordinada substantiva
          objetiva direta ou um pronome indefinido. Em questões de regência verbal e de
          análise sintática, a identificação correta do OD evita confusão com o OI e com
          o adjunto adverbial.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto Indireto</span>
        <h2>4. Objeto Indireto — Complemento Verbal com Preposição Obrigatória</h2>

        <p>
          O <strong>objeto indireto (OI)</strong> é o complemento do verbo transitivo
          indireto ou do segundo complemento do verbo bitransitivo. Sua marca
          inconfundível é a <em>preposição obrigatória</em>, exigida pela regência do
          próprio verbo — sem ela, a frase ficaria agramatical ou mudaria de sentido.
        </p>
        <p>
          As preposições mais comuns no OI são: <strong>a, de, em, com, para, por</strong>.
          Para identificá-lo, pergunte ao verbo: <strong>"A quem?", "De quê?", "Para quem?",
          "Em quê?", "Com quem?"</strong>
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Regência exigida</th>
                <th>Exemplo</th>
                <th>Objeto Indireto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gostar</td>
                <td>gostar <strong>de</strong></td>
                <td>"Ela gosta de música."</td>
                <td>"de música"</td>
              </tr>
              <tr>
                <td>precisar</td>
                <td>precisar <strong>de</strong></td>
                <td>"Precisamos de ajuda."</td>
                <td>"de ajuda"</td>
              </tr>
              <tr>
                <td>obedecer</td>
                <td>obedecer <strong>a</strong></td>
                <td>"Ele obedeceu ao juiz."</td>
                <td>"ao juiz"</td>
              </tr>
              <tr>
                <td>dar</td>
                <td>dar <strong>a / para</strong></td>
                <td>"Dei o livro ao aluno."</td>
                <td>"ao aluno"</td>
              </tr>
              <tr>
                <td>lembrar-se</td>
                <td>lembrar-se <strong>de</strong></td>
                <td>"Ela se lembrou do endereço."</td>
                <td>"do endereço"</td>
              </tr>
              <tr>
                <td>confiار</td>
                <td>confiar <strong>em</strong></td>
                <td>"Confio em você."</td>
                <td>"em você"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>OI representado por pronomes oblíquos:</strong>
          <p>
            Os pronomes oblíquos átonos <em>me, te, lhe, nos, vos, lhes</em> podem exercer
            função de objeto indireto quando substituem um complemento preposicionado.
            Ex.: <em>"Dei o livro ao aluno."</em> → <em>"Dei-lhe o livro."</em>
            ("lhe" = OI). Já os pronomes oblíquos <em>o, a, os, as</em> exercem função
            de objeto direto.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Complemento Nominal</span>
        <h2>5. Complemento Nominal — Completando o Sentido de Nomes</h2>

        <p>
          O <strong>complemento nominal (CN)</strong> é o termo integrante que completa o
          sentido de um <em>nome</em> — um substantivo abstrato, um adjetivo ou um advérbio
          — e não de um verbo. Assim como o objeto indireto, o complemento nominal é sempre
          introduzido por preposição; daí a confusão frequente entre os dois.
        </p>
        <p>
          O raciocínio central é: se o termo preposicionado completa um <strong>verbo</strong>,
          é objeto indireto; se completa um <strong>nome</strong>, é complemento nominal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Substantivos abstratos</h3>
            <p>Nomes como "necessidade", "amor", "medo", "orgulho", "ódio", "esperança" exigem complemento nominal. Ex.: <em>"Tenho necessidade <strong>de ajuda</strong>."</em></p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Adjetivos</h3>
            <p>Adjetivos como "digno", "contrário", "favorável", "ansioso", "satisfeito" pedem complemento nominal. Ex.: <em>"Estou ansioso <strong>pela aprovação</strong>."</em></p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Advérbios</h3>
            <p>Alguns advérbios de modo e intensidade também pedem complemento nominal. Ex.: <em>"Ele agiu favoravelmente <strong>ao candidato</strong>."</em></p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Exemplos clássicos de complemento nominal:</strong>
          <ul>
            <li><em>"Tenho orgulho <strong>de você</strong>."</em> — "orgulho" (subst. abstrato) + "de você" (CN)</li>
            <li><em>"O candidato é digno <strong>de confiança</strong>."</em> — "digno" (adj.) + "de confiança" (CN)</li>
            <li><em>"Ela tem medo <strong>do escuro</strong>."</em> — "medo" (subst. abstrato) + "do escuro" (CN)</li>
            <li><em>"A decisão foi favorável <strong>ao réu</strong>."</em> — "favorável" (adj.) + "ao réu" (CN)</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Voz Passiva</span>
        <h2>6. Agente da Passiva — Quem Pratica a Ação na Voz Passiva</h2>

        <p>
          O <strong>agente da passiva (AP)</strong> é o termo integrante que indica o ser
          que pratica a ação verbal quando o verbo está na <em>voz passiva analítica</em>.
          Ele é sempre introduzido pelas preposições <strong>"por"</strong> (e suas
          contrações: pelo, pela, pelos, pelas) ou, mais raramente, <strong>"de"</strong>.
        </p>
        <p>
          Para entender o agente da passiva, é preciso compreender a diferença entre voz
          ativa e passiva. Na <em>voz ativa</em>, o sujeito pratica a ação: <em>"O escritor
          escreveu o romance."</em> Na <em>voz passiva analítica</em>, o sujeito recebe a
          ação, e quem a pratica aparece como agente da passiva: <em>"O romance foi escrito
          <strong> pelo escritor</strong>."</em>
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Voz Ativa</th>
                <th>Voz Passiva Analítica</th>
                <th>Agente da Passiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O aluno leu o livro.</td>
                <td>O livro foi lido <strong>pelo aluno</strong>.</td>
                <td>"pelo aluno"</td>
              </tr>
              <tr>
                <td>A empresa construiu o prédio.</td>
                <td>O prédio foi construído <strong>pela empresa</strong>.</td>
                <td>"pela empresa"</td>
              </tr>
              <tr>
                <td>Ninguém tocou o assunto.</td>
                <td>O assunto não foi tocado <strong>por ninguém</strong>.</td>
                <td>"por ninguém"</td>
              </tr>
              <tr>
                <td>O compositor criou a ópera.</td>
                <td>A ópera foi criada <strong>pelo compositor</strong>.</td>
                <td>"pelo compositor"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Quando o agente da passiva é omitido:</strong>
          <p>
            Em muitos casos, o agente da passiva não aparece explicitamente na frase. Isso
            ocorre quando: (a) o agente é desconhecido (<em>"O carro foi roubado."</em>);
            (b) o agente é óbvio pelo contexto; (c) deseja-se apagar responsabilidades
            deliberadamente — recurso muito usado no discurso político e jornalístico
            (<em>"Erros foram cometidos."</em> — por quem?). O ENEM explora esse recurso
            em questões sobre efeitos de sentido e manipulação da linguagem.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distinção Crucial</span>
        <h2>7. Complemento Nominal × Adjunto Adnominal — A Diferença que o ENEM Cobra</h2>

        <p>
          Tanto o complemento nominal quanto o adjunto adnominal podem acompanhar um
          substantivo e ser introduzidos por preposição — por isso, a distinção entre eles
          é um dos pontos mais sutis e mais cobrados da sintaxe no ENEM e nos vestibulares.
          A chave está na <strong>relação semântica</strong>: paciente ou agente?
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Complemento Nominal</th>
                <th>Adjunto Adnominal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Função</td>
                <td>Completa o sentido do nome (necessário)</td>
                <td>Caracteriza/qualifica o nome (acessório)</td>
              </tr>
              <tr>
                <td>Relação com o nome</td>
                <td>Paciente (recebe a ação implícita do nome)</td>
                <td>Agente (pratica a ação implícita) ou caracterizador</td>
              </tr>
              <tr>
                <td>Podem ser retirados?</td>
                <td>Não (o nome fica incompleto)</td>
                <td>Sim (o nome continua com sentido)</td>
              </tr>
              <tr>
                <td>Exemplo com "amor"</td>
                <td>"amor à pátria" — CN (pátria é amada)</td>
                <td>"amor de mãe" — Adj. Adn. (mãe ama)</td>
              </tr>
              <tr>
                <td>Exemplo com "crítica"</td>
                <td>"crítica ao governo" — CN (governo é criticado)</td>
                <td>"crítica do jornalista" — Adj. Adn. (jornalista critica)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O teste clássico: transforme a frase e veja quem pratica e quem recebe a ação.
          Em <em>"o amor à pátria"</em> — alguém ama a pátria, então "à pátria" recebe
          a ação → <strong>complemento nominal</strong>. Em <em>"o amor de mãe"</em> — a
          mãe ama (pratica a ação) → <strong>adjunto adnominal</strong>.
        </p>

        <div className="lesson-highlight">
          <strong>Comparação OI × CN (os dois usam preposição!):</strong>
          <ul>
            <li><em>"Necessitamos <strong>de ajuda</strong>."</em> — "de ajuda" = <strong>OI</strong> (completa o verbo "necessitar")</li>
            <li><em>"Temos necessidade <strong>de ajuda</strong>."</em> — "de ajuda" = <strong>CN</strong> (completa o substantivo "necessidade")</li>
            <li><em>"Gostamos <strong>de poesia</strong>."</em> — "de poesia" = <strong>OI</strong> (completa o verbo "gostar")</li>
            <li><em>"Nosso amor <strong>de poesia</strong>…"</em> — "de poesia" = <strong>Adj. Adn.</strong> (amor que temos por poesia, praticamos o amor)</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto Preposicionado</span>
        <h2>8. Objeto Direto Preposicionado e Objeto Indireto Preposicionado</h2>

        <p>
          Dois casos especiais merecem atenção: o <strong>objeto direto preposicionado</strong>
          e o <strong>objeto indireto preposicionado</strong>. Ambos desafiam a expectativa
          de que "OD não tem preposição" e "OI tem preposição" — as realidades são mais
          nuançadas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>OD Preposicionado</h3>
            <p>Ocorre quando o verbo é VTD, mas a preposição aparece por razões expressivas, não por exigência do verbo. Ex.: <em>"Amo a minha mãe."</em> — "a minha mãe" é OD preposicionado (o verbo "amar" é VTD). A preposição "a" aqui é opcional, usada por ênfase ou tradição.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>OI Preposicionado</h3>
            <p>O OI sempre tem preposição — essa é sua marca definidora. O termo "OI preposicionado" é pleonástico, mas às vezes aparece em enunciados para enfatizar que a preposição é obrigatória. Ex.: <em>"Obedecemos <strong>às leis</strong>."</em> — a preposição "a" é exigida pelo verbo "obedecer".</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica de ouro para o ENEM:</strong>
          <p>
            Sempre pergunte: <em>A preposição é exigida pelo verbo (regência verbal)?</em>
            Se sim → objeto indireto. Se não (a preposição veio por ênfase, tradição ou
            referência a pronome indefinido) → objeto direto preposicionado. O dicionário
            de regência verbal é seu aliado: consulte se o verbo pede preposição
            estruturalmente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>
        <h2>9. Quadro Geral dos Termos Integrantes</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Mapa conceitual dos termos integrantes da oração">
            <rect x="0" y="0" width="700" height="260" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="bold">Termos Integrantes da Oração</text>
            {/* seta do centro */}
            <rect x="270" y="40" width="160" height="40" rx="8" fill="#7c3aed" />
            <text x="350" y="65" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">TERMOS INTEGRANTES</text>
            {/* linhas */}
            <line x1="350" y1="80" x2="100" y2="120" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="80" x2="270" y2="120" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="80" x2="440" y2="120" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="80" x2="610" y2="120" stroke="#7c3aed" strokeWidth="2" />
            {/* OD */}
            <rect x="25" y="120" width="150" height="110" rx="8" fill="#dbeafe" />
            <text x="100" y="145" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Objeto Direto</text>
            <text x="100" y="163" textAnchor="middle" fill="#1e40af" fontSize="10">Complementa VERBO</text>
            <text x="100" y="179" textAnchor="middle" fill="#1e40af" fontSize="10">Sem preposição</text>
            <text x="100" y="195" textAnchor="middle" fill="#1e40af" fontSize="10">obrigatória</text>
            <text x="100" y="215" textAnchor="middle" fill="#1e40af" fontSize="9" fontStyle="italic">"leu o livro"</text>
            {/* OI */}
            <rect x="190" y="120" width="150" height="110" rx="8" fill="#d1fae5" />
            <text x="265" y="145" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Obj. Indireto</text>
            <text x="265" y="163" textAnchor="middle" fill="#065f46" fontSize="10">Complementa VERBO</text>
            <text x="265" y="179" textAnchor="middle" fill="#065f46" fontSize="10">Com preposição</text>
            <text x="265" y="195" textAnchor="middle" fill="#065f46" fontSize="10">obrigatória</text>
            <text x="265" y="215" textAnchor="middle" fill="#065f46" fontSize="9" fontStyle="italic">"gosta de música"</text>
            {/* CN */}
            <rect x="358" y="120" width="150" height="110" rx="8" fill="#fde68a" />
            <text x="433" y="145" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Comp. Nominal</text>
            <text x="433" y="163" textAnchor="middle" fill="#92400e" fontSize="10">Complementa NOME</text>
            <text x="433" y="179" textAnchor="middle" fill="#92400e" fontSize="10">Com preposição</text>
            <text x="433" y="195" textAnchor="middle" fill="#92400e" fontSize="10">(subst./adj./adv.)</text>
            <text x="433" y="215" textAnchor="middle" fill="#92400e" fontSize="9" fontStyle="italic">"orgulho de você"</text>
            {/* AP */}
            <rect x="525" y="120" width="150" height="110" rx="8" fill="#ede9fe" />
            <text x="600" y="145" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">Agente da Passiva</text>
            <text x="600" y="163" textAnchor="middle" fill="#7c3aed" fontSize="10">Pratica a ação na</text>
            <text x="600" y="179" textAnchor="middle" fill="#7c3aed" fontSize="10">VOZ PASSIVA</text>
            <text x="600" y="195" textAnchor="middle" fill="#7c3aed" fontSize="10">Preposição "por/de"</text>
            <text x="600" y="215" textAnchor="middle" fill="#7c3aed" fontSize="9" fontStyle="italic">"escrito pelo autor"</text>
            <text x="350" y="248" textAnchor="middle" fill="#64748b" fontSize="11">OD e OI completam verbos; CN completa nomes; AP identifica o praticante na voz passiva</text>
          </svg>
          <figcaption>Mapa conceitual dos quatro termos integrantes da oração e suas características centrais.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo</th>
                <th>Completa</th>
                <th>Preposição</th>
                <th>Pergunta-chave</th>
                <th>Pronome substituto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objeto Direto</td>
                <td>Verbo (VTD)</td>
                <td>Não obrigatória</td>
                <td>Quem? / O quê?</td>
                <td>o, a, os, as</td>
              </tr>
              <tr>
                <td>Objeto Indireto</td>
                <td>Verbo (VTI)</td>
                <td>Obrigatória</td>
                <td>A quem? De quê? Para quem?</td>
                <td>lhe, lhes</td>
              </tr>
              <tr>
                <td>Complemento Nominal</td>
                <td>Nome (subst./adj./adv.)</td>
                <td>Obrigatória</td>
                <td>— (o nome está incompleto)</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Agente da Passiva</td>
                <td>Verbo (voz passiva)</td>
                <td>"por" ou "de"</td>
                <td>Por quem? / De quem?</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>10. Como o ENEM Cobra Termos Integrantes</h2>

        <p>
          O ENEM raramente pede que o candidato simplesmente <em>nomeie</em> um termo
          sintático. As questões sobre termos integrantes costumam aparecer de forma
          contextualizada: um trecho literário, jornalístico ou publicitário é apresentado,
          e o candidato deve identificar como a escolha sintática produz determinado efeito
          de sentido — ou deve apontar que substituição preserva o sentido original.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Regência verbal</h3>
            <p>O ENEM apresenta frases e pede a substituição correta do objeto por um pronome (o/a vs. lhe), testando se o candidato sabe diferenciar OD (o/a) de OI (lhe).</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Equivalência sintática</h3>
            <p>Questões que pedem qual reescrita mantém o sentido e a correção gramatical. O candidato deve identificar o tipo de complemento para saber qual preposição usar na reescrita.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Efeito da voz passiva</h3>
            <p>O ENEM pergunta por que determinado texto usa a voz passiva sem agente — normalmente para apagar a responsabilidade do sujeito (efeito ideológico da sintaxe).</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Interpretação textual</h3>
            <p>Questões de interpretação pedem que o candidato identifique a relação semântica entre termos — o que é, no fundo, reconhecer se um termo integra o verbo ou o nome.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Armadilha frequente — "lhe" ou "o"?</strong>
          <p>
            A troca de pronomes oblíquos é uma das pegadinhas mais comuns. A regra:
            <em> "lhe" substitui objeto indireto</em> (verbo pede preposição);
            <em> "o/a" substitui objeto direto</em> (verbo não pede preposição).
            Ex.: "Eu vi ela" → errado na norma culta → "Eu a vi" (OD).
            "Eu liguei para ela" → correto → "Eu lhe liguei" (OI).
            No ENEM, o candidato deve reconhecer essa distinção para identificar construções
            corretas ou analisar seu efeito de sentido.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação do Objeto Direto"
          statement={
            <p>
              Identifique o objeto direto na frase abaixo:
              <br /><br />
              <em>"A cantora gravou um novo álbum durante a pandemia."</em>
              <br /><br />
              Qual é o objeto direto e por que ele recebe essa classificação?
            </p>
          }
          options={[
            { letter: "a", text: "\"a cantora\" — sujeito da ação verbal." },
            { letter: "b", text: "\"um novo álbum\" — complemento do verbo \"gravar\", sem preposição obrigatória.", correct: true },
            { letter: "c", text: "\"durante a pandemia\" — complemento que indica tempo da ação." },
            { letter: "d", text: "\"gravou\" — núcleo do predicado verbal da oração." },
          ]}
          resolution={
            <p>
              O verbo "gravar" é transitivo direto: exige complemento que responda
              à pergunta "o quê?". Perguntando ao verbo — "a cantora gravou o quê?" —
              a resposta é "um novo álbum", sem nenhuma preposição obrigatória entre o
              verbo e o complemento. Esse é o objeto direto. "A cantora" é sujeito;
              "durante a pandemia" é adjunto adverbial de tempo (acessório, pode ser
              retirado sem prejudicar a estrutura nuclear). A alternativa B é a correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Objeto Indireto × Adjunto Adverbial"
          statement={
            <p>
              Nas frases abaixo, identifique qual delas apresenta um <strong>objeto indireto</strong>
              (e não um adjunto adverbial):
              <br /><br />
              I. <em>"Ele chegou <strong>ao aeroporto</strong> cedo."</em><br />
              II. <em>"Ela obedeceu <strong>às ordens</strong> sem questionar."</em><br />
              III. <em>"O avião partiu <strong>de manhã</strong>."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I apresenta objeto indireto." },
            { letter: "b", text: "Apenas II apresenta objeto indireto, pois \"obedecer\" é verbo transitivo indireto que exige a preposição \"a\".", correct: true },
            { letter: "c", text: "Apenas III apresenta objeto indireto, pois \"de manhã\" completa o verbo \"partir\"." },
            { letter: "d", text: "I e II apresentam objetos indiretos, pois ambas usam preposição." },
          ]}
          resolution={
            <p>
              O critério para diferenciar OI de adjunto adverbial é a <em>exigência</em>
              da preposição pelo verbo. Em II, "obedecer" é verbo transitivo indireto:
              pela regência, ele exige o complemento com a preposição "a" — sem ela,
              a frase ficaria incorreta. Logo, "às ordens" é OI. Em I, "chegar ao
              aeroporto" — embora use preposição — indica <em>destino/lugar</em>:
              "ao aeroporto" é adjunto adverbial de lugar (o verbo "chegar" é
              intransitivo; a preposição indica circunstância, não objeto). Em III,
              "de manhã" é claramente adjunto adverbial de tempo. Apenas II tem OI.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Complemento Nominal × Objeto Indireto"
          statement={
            <p>
              Analise os dois pares de frases e identifique a alternativa que distingue
              corretamente o complemento nominal do objeto indireto:
              <br /><br />
              P: <em>"Necessitamos <strong>de recursos</strong> urgentes."</em><br />
              Q: <em>"A necessidade <strong>de recursos</strong> é urgente."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Em P e Q, \"de recursos\" exerce a mesma função sintática: objeto indireto." },
            { letter: "b", text: "Em P, \"de recursos\" é adjunto adnominal; em Q, é complemento nominal." },
            { letter: "c", text: "Em P, \"de recursos\" é objeto indireto (complementa o verbo \"necessitar\"); em Q, é complemento nominal (complementa o substantivo abstrato \"necessidade\").", correct: true },
            { letter: "d", text: "Em P, \"de recursos\" é complemento nominal; em Q, é objeto indireto." },
          ]}
          resolution={
            <p>
              A distinção é precisa: em P, "necessitar" é verbo transitivo indireto que
              exige complemento com preposição "de" — logo, "de recursos" completa o
              <em> verbo</em> → <strong>objeto indireto</strong>. Em Q, "necessidade"
              é substantivo abstrato derivado do mesmo radical — ele também exige
              complemento com "de", mas agora o complemento integra o <em>nome</em>
              → <strong>complemento nominal</strong>. O mesmo sintagma preposicionado
              ("de recursos") exerce funções diferentes conforme o núcleo que ele
              complementa (verbo ou nome). A alternativa C descreve isso com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Voz Passiva sem Agente — Efeito Ideológico"
          statement={
            <p>
              Leia o trecho de nota oficial:
              <br /><br />
              <em>"Erros foram cometidos. Medidas serão adotadas. Responsabilidades
              serão apuradas."</em>
              <br /><br />
              O uso sistemático da voz passiva sem agente da passiva nesse trecho produz
              qual efeito de sentido?
            </p>
          }
          options={[
            { letter: "a", text: "Torna o texto mais formal e objetivo, sem implicações ideológicas." },
            { letter: "b", text: "Apaga a identidade dos responsáveis pelas ações, diluindo responsabilidades e criando a impressão de que os fatos aconteceram sem agentes humanos.", correct: true },
            { letter: "c", text: "Indica que as ações descritas foram praticadas por agentes desconhecidos, o que aumenta a credibilidade da nota." },
            { letter: "d", text: "A voz passiva sem agente é um recurso estilístico neutro, sem efeito pragmático ou ideológico relevante." },
          ]}
          resolution={
            <p>
              A voz passiva analítica permite omitir o agente da passiva — e essa omissão
              raramente é inocente no discurso político e institucional. Ao dizer "erros
              foram cometidos" em vez de "nós cometemos erros" ou "o ministério cometeu
              erros", o texto retira o foco do praticante da ação, tornando-o invisível.
              "Medidas serão adotadas" e "responsabilidades serão apuradas" — por quem?
              A passiva sem agente cria ambiguidade deliberada sobre os responsáveis,
              protegendo-os da accountability. Esse é um recurso analisado pelo ENEM
              em questões sobre efeito de sentido, ideologia e manipulação da linguagem.
              A alternativa B descreve esse efeito com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Análise Sintática em Texto Literário"
          statement={
            <p>
              Leia o verso de Drummond: <em>"No meio do caminho tinha uma pedra /
              tinha uma pedra no meio do caminho."</em>
              <br /><br />
              Considerando que o verbo "ter" (no sentido de "existir/haver") é
              <strong> intransitivo</strong> nessa construção coloquial, e o verso é
              frequentemente analisado como <em>"havia uma pedra"</em>, o sintagma
              "uma pedra" exerce qual função sintática?
            </p>
          }
          options={[
            { letter: "a", text: "Sujeito da oração, pois é o ser sobre o qual se faz a declaração." },
            { letter: "b", text: "Objeto direto do verbo \"ter\", pois \"ter\" é verbo transitivo direto em qualquer contexto." },
            { letter: "c", text: "Sujeito indeterminado, pois o verbo está na terceira pessoa do singular sem referente explícito." },
            { letter: "d", text: "Objeto direto do verbo \"ter\" usado no sentido de \"haver/existir\"; ou, na análise tradicional com \"haver\", sujeito inexistente (oração sem sujeito), sendo \"uma pedra\" o objeto direto.", correct: true },
          ]}
          resolution={
            <p>
              Este é um caso de análise gramatical sensível ao uso. Na gramática
              tradicional, quando "ter" é usado no sentido impessoal de "haver/existir",
              comporta-se como "haver": a oração fica sem sujeito e "uma pedra" é
              analisado como objeto direto. Na análise coloquial, "ter" às vezes é
              tratado como verbo de ligação ou existencial, com "uma pedra" como
              sujeito. O ENEM, ao trabalhar com textos literários, frequentemente pede
              que o candidato identifique o efeito sintático-semântico — e nesse caso
              a discussão centra-se na impessoalidade do verbo e no foco semântico
              dado à "pedra" (obstáculo, resistência à vida) pela repetição. A
              alternativa D descreve a análise mais comum na gramática normativa
              para "ter" como equivalente de "haver".
            </p>
          }
        />
      </section>
    </article>
  );
}
