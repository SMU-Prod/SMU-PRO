"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 15</span>

          <h1>Sintaxe da Oração</h1>

          <p>
            Domine a análise sintática da língua portuguesa: identifique frase,
            oração e período; classifique sujeitos, predicados e todos os termos
            da oração com a precisão exigida pelo ENEM e pelos principais
            vestibulares do país.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>

        <h2>1. Frase, Oração e Período</h2>

        <p>
          Antes de analisar termos, é preciso entender as três unidades básicas
          da comunicação escrita. Elas não são sinônimas, e confundi-las é um
          erro frequente em provas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💬</span>
            <h3>Frase</h3>
            <p>
              Enunciado com sentido completo que pode ou não conter verbo.
              <em> "Silêncio!"</em>, <em>"Que calor!"</em> e{" "}
              <em>"O aluno estudou."</em> são todas frases. O critério é ter
              sentido e entonação conclusiva.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔤</span>
            <h3>Oração</h3>
            <p>
              Enunciado que possui <strong>verbo ou locução verbal</strong>.
              Toda oração é uma frase (tem sentido), mas nem toda frase é uma
              oração. <em>"Ele partiu."</em> — uma oração; <em>"Cuidado!"</em>{" "}
              — frase, não oração.
            </p>
          </div>

          <div className="lesson-card">
            <span>📝</span>
            <h3>Período</h3>
            <p>
              Frase formada por <strong>uma ou mais orações</strong>. Quando
              tem uma só oração, é <strong>período simples</strong>; quando tem
              duas ou mais, é <strong>período composto</strong>. O período
              começa com maiúscula e termina com ponto final, exclamação,
              interrogação ou reticências.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplos comparativos</h3>
          <p>
            <strong>Frase sem verbo:</strong> <em>"Que notícia incrível!"</em>
          </p>
          <p>
            <strong>Oração / Período simples:</strong>{" "}
            <em>"O estudante leu o livro."</em>
          </p>
          <p>
            <strong>Período composto (2 orações):</strong>{" "}
            <em>"Ele acordou cedo / e foi à escola."</em>
          </p>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Essenciais</span>

        <h2>2. O Sujeito e Suas Classificações</h2>

        <p>
          O <strong>sujeito</strong> é o termo da oração sobre o qual o
          predicado diz algo, ou o responsável pela ação verbal. Ele concorda
          com o verbo em número e pessoa. Identificar o sujeito é o primeiro
          passo da análise sintática: pergunte ao verbo <em>"quem?"</em> ou{" "}
          <em>"o quê?"</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Simples</strong>
                </td>
                <td>Um único núcleo</td>
                <td>
                  <em>O menino correu.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Composto</strong>
                </td>
                <td>Dois ou mais núcleos</td>
                <td>
                  <em>Pedro e Ana saíram.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Oculto / Desinencial</strong>
                </td>
                <td>Não expresso, identificado pela desinência verbal</td>
                <td>
                  <em>Estudei muito ontem.</em> (eu)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Indeterminado</strong>
                </td>
                <td>Existe, mas não pode ser identificado</td>
                <td>
                  <em>Precisam de ajuda.</em> / <em>Come-se bem aqui.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Inexistente</strong>
                </td>
                <td>Oração sem sujeito — verbo impessoal</td>
                <td>
                  <em>Choveu muito.</em> / <em>Há problemas.</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — Sujeito Indeterminado x Inexistente</h3>
          <p>
            No sujeito <strong>indeterminado</strong>, o sujeito existe mas não
            queremos ou não podemos identificá-lo. Há dois recursos: (1) verbo
            na <strong>3ª pessoa do plural sem referente anterior</strong> —
            "Disseram que vai chover"; (2) verbo na{" "}
            <strong>3ª pessoa do singular + "se"</strong> (índice de
            indeterminação) com verbos intransitivos ou de ligação — "Vive-se
            bem aqui".
          </p>
          <p>
            Já nas <strong>orações sem sujeito</strong>, o verbo é impessoal e
            não admite sujeito algum: fenômenos da natureza (<em>trovejou</em>),
            "haver" e "fazer" no sentido temporal (<em>Faz dois anos</em>,{" "}
            <em>Há muitos meses</em>), "ser" indicando hora ou data (
            <em>São três horas</em>), e "existir" / "haver" no sentido de
            "existir" (<em>Há muitas dúvidas</em>).
          </p>
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Essenciais</span>

        <h2>3. Sujeito Oculto, Indeterminado e Inexistente — Aprofundamento</h2>

        <p>
          Esses três tipos causam confusão justamente porque, em todos eles, o
          sujeito não aparece explícito na frase. Veja como distingui-los com
          precisão.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Fluxograma para identificar o tipo de sujeito ausente"
          >
            {/* Caixas */}
            <rect x="260" y="10" width="180" height="44" rx="8" fill="#6366f1" />
            <text x="350" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              Sujeito não está expresso
            </text>

            {/* Seta para baixo */}
            <line x1="350" y1="54" x2="350" y2="80" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arr)" />

            <rect x="220" y="80" width="260" height="44" rx="8" fill="#818cf8" />
            <text x="350" y="100" textAnchor="middle" fill="white" fontSize="13">
              O verbo é impessoal?
            </text>
            <text x="350" y="116" textAnchor="middle" fill="white" fontSize="12">
              (chuva / haver temporal / ser hora)
            </text>

            {/* Sim — esquerda */}
            <line x1="220" y1="102" x2="120" y2="102" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrG)" />
            <text x="170" y="96" textAnchor="middle" fill="#10b981" fontSize="12">Sim</text>
            <rect x="20" y="80" width="100" height="44" rx="8" fill="#10b981" />
            <text x="70" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Inexistente</text>
            <text x="70" y="116" textAnchor="middle" fill="white" fontSize="11">(sem sujeito)</text>

            {/* Não — direita */}
            <line x1="480" y1="102" x2="580" y2="102" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrY)" />
            <text x="530" y="96" textAnchor="middle" fill="#f59e0b" fontSize="12">Não</text>

            <rect x="580" y="80" width="100" height="44" rx="8" fill="#f59e0b" />
            <text x="630" y="100" textAnchor="middle" fill="white" fontSize="12">Posso recuperar</text>
            <text x="630" y="116" textAnchor="middle" fill="white" fontSize="12">pela desinência?</text>

            {/* Sim desinência */}
            <line x1="630" y1="124" x2="630" y2="180" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrY)" />
            <text x="643" y="158" fill="#10b981" fontSize="12">Sim</text>
            <rect x="580" y="180" width="100" height="44" rx="8" fill="#10b981" />
            <text x="630" y="200" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Oculto</text>
            <text x="630" y="216" textAnchor="middle" fill="white" fontSize="11">(desinencial)</text>

            {/* Não indeterminado */}
            <line x1="350" y1="124" x2="350" y2="180" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="358" y="158" fill="#ef4444" fontSize="12">Não</text>
            <rect x="270" y="180" width="160" height="44" rx="8" fill="#ef4444" />
            <text x="350" y="200" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Indeterminado</text>
            <text x="350" y="216" textAnchor="middle" fill="white" fontSize="11">(existe, mas não se sabe quem)</text>

            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
              <marker id="arrG" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#10b981" />
              </marker>
              <marker id="arrY" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
          <figcaption>Fluxograma para classificar o sujeito não expresso</figcaption>
        </figure>

        <div className="math-block">
          <h3>Distinção prática: "se" — voz passiva ou indeterminação?</h3>
          <p>
            <strong>"Vendem-se casas."</strong> — o "se" é partícula apassivadora;
            "casas" é sujeito paciente (verbo concorda com ele → plural).
          </p>
          <p>
            <strong>"Vive-se bem aqui."</strong> — o "se" é índice de
            indeterminação; verbo intransitivo não aceita voz passiva; sujeito
            indeterminado.
          </p>
          <p>
            A chave: se o verbo transitivo direto concorda com o "sujeito"
            aparente, é voz passiva. Se o verbo for intransitivo, de ligação ou
            transitivo indireto, o "se" indetermina.
          </p>
        </div>
      </section>

      {/* SEÇÃO 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Essenciais</span>

        <h2>4. O Predicado — Tipos e Núcleos</h2>

        <p>
          O <strong>predicado</strong> é tudo o que se diz sobre o sujeito. Seu
          núcleo pode ser um <strong>verbo nocional</strong> (predicado verbal),
          um <strong>predicativo</strong> (predicado nominal) ou ambos
          simultaneamente (predicado verbo-nominal).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Predicado Verbal</h3>
            <p>
              Núcleo é o <strong>verbo nocional</strong> (ação, processo). Não
              há predicativo do sujeito. Pode ter complementos (OD, OI) ou não.{" "}
              <em>"O time venceu o jogo."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Predicado Nominal</h3>
            <p>
              Núcleo é o <strong>predicativo do sujeito</strong>. O verbo é de
              ligação (ser, estar, ficar, parecer, tornar-se…) e apenas conecta
              sujeito ao predicativo.{" "}
              <em>"A aluna é inteligente."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Predicado Verbo-Nominal</h3>
            <p>
              Dois núcleos: <strong>verbo nocional + predicativo</strong> (do
              sujeito ou do objeto). O verbo exprime ação E o predicativo
              qualifica simultaneamente.{" "}
              <em>"Ele chegou cansado."</em> (chegou = ação; cansado = estado do
              sujeito).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — Como identificar o predicado verbo-nominal</h3>
          <p>
            Teste: (1) o verbo exprime ação? (2) há um adjetivo ou substantivo
            que qualifica o sujeito ou objeto ao mesmo tempo?
          </p>
          <p>
            <em>"A mãe olhou o filho preocupada."</em> — "olhou" é ação
            (verbo nocional); "preocupada" qualifica "a mãe" (predicativo do
            sujeito) → predicado verbo-nominal.
          </p>
          <p>
            <em>"Encontraram o réu culpado."</em> — "encontraram" é ação;
            "culpado" qualifica "o réu" (predicativo do objeto direto) →
            predicado verbo-nominal com predicativo do objeto.
          </p>
        </div>
      </section>

      {/* SEÇÃO 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Transitividade Verbal</span>

        <h2>5. Verbos e Seus Complementos</h2>

        <p>
          A transitividade verbal determina se o verbo precisa ou não de
          complemento para completar seu sentido. Essa classificação é
          diretamente ligada aos <strong>termos integrantes</strong> da oração.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Pergunta ao verbo</th>
                <th>Complemento</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>VTD</strong> (transitivo direto)
                </td>
                <td>Fez o quê? / Amou quem?</td>
                <td>Objeto Direto (sem preposição obrigatória)</td>
                <td>
                  <em>Ele comprou um carro.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>VTI</strong> (transitivo indireto)
                </td>
                <td>Gostou de quê? / Obedeceu a quem?</td>
                <td>Objeto Indireto (com preposição obrigatória)</td>
                <td>
                  <em>Ela gosta de música.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>VTDI</strong> (transitivo direto e indireto)
                </td>
                <td>Deu o quê? A quem?</td>
                <td>OD + OI</td>
                <td>
                  <em>Dei o livro ao aluno.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>VI</strong> (intransitivo)
                </td>
                <td>Não exige complemento</td>
                <td>Nenhum (ou adjunto)</td>
                <td>
                  <em>O bebê dormiu.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>VL</strong> (de ligação)</td>
                <td>Como / O que é?</td>
                <td>Predicativo do sujeito</td>
                <td>
                  <em>Ela ficou triste.</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Atenção: "Objeto Direto Preposicionado"</h3>
          <p>
            Alguns VTD admitem preposição por razões estilísticas ou por
            influência do referente — isso não transforma o complemento em OI.
            Ex.: <em>"Amo a minha mãe."</em> — "a minha mãe" é OD (a preposição
            é por afeto, não estrutural). Teste: pode substituir por pronome
            oblíquo <strong>átono sem preposição</strong>? "Amo-a." — sim, logo
            é OD.
          </p>
        </div>
      </section>

      {/* SEÇÃO 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Integrantes</span>

        <h2>6. Complementos Verbais e Nominais</h2>

        <p>
          Os <strong>termos integrantes</strong> completam o sentido de verbos
          ou nomes. Sem eles, a frase ficaria semanticamente incompleta.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Objeto Direto (OD)</h3>
            <p>
              Complemento verbal sem preposição obrigatória. Núcleo pode ser
              substantivo, pronome, infinitivo ou oração. Pronomes: <em>o, a,
              os, as, me, te, nos, vos</em>.{" "}
              <em>"Comprei o livro / Comprei-o."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔍</span>
            <h3>Objeto Indireto (OI)</h3>
            <p>
              Complemento verbal com preposição obrigatória (a, de, em, para,
              com…). Pronomes: <em>lhe, lhes, mim, ti, si</em>.{" "}
              <em>"Obedeci ao professor / Obedeci-lhe."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>📌</span>
            <h3>Complemento Nominal (CN)</h3>
            <p>
              Complementa o sentido de um <strong>nome</strong> (substantivo
              abstrato, adjetivo ou advérbio), sempre com preposição.{" "}
              <em>"Tenho <u>medo</u> de altura."</em> ("de altura" completa
              "medo").
            </p>
          </div>

          <div className="lesson-card">
            <span>🔰</span>
            <h3>Agente da Passiva (AP)</h3>
            <p>
              Termo introduzido por preposição (<em>por, de</em>) que indica
              quem pratica a ação na voz passiva.{" "}
              <em>"O livro foi escrito <u>pelo autor</u>."</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>CN x OI — como diferenciar</h3>
          <p>
            A preposição do OI depende do verbo; a do CN depende do{" "}
            <strong>nome</strong>. Teste: substitua o elemento por pronome.
            Se cabe <em>lhe</em>, é OI (<em>"Preciso de você" → "Preciso de
            ti"</em>); se não cabe e o regente é um nome, é CN (
            <em>"Tenho necessidade de você" → CN de "necessidade"</em>).
          </p>
        </div>
      </section>

      {/* SEÇÃO 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Acessórios</span>

        <h2>7. Adjuntos e Aposto</h2>

        <p>
          Os <strong>termos acessórios</strong> enriquecem a oração sem ser
          indispensáveis para sua completude estrutural. São o{" "}
          <strong>adjunto adnominal</strong>, o <strong>adjunto adverbial</strong>{" "}
          e o <strong>aposto</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Adjunto Adnominal (AA)</h3>
            <p>
              Modifica um <strong>substantivo</strong> diretamente. Pode ser
              artigo, adjetivo, numeral, pronome adjetivo ou locução adjetiva.{" "}
              <em>"Aqueles três alunos dedicados chegaram cedo."</em> — "aqueles,
              três, dedicados" são AA de "alunos".
            </p>
          </div>

          <div className="lesson-card">
            <span>🕐</span>
            <h3>Adjunto Adverbial (AAd)</h3>
            <p>
              Modifica o verbo, adjetivo ou advérbio, indicando circunstâncias:
              tempo, lugar, modo, causa, fim, condição, concessão etc.{" "}
              <em>"Estudei <u>ontem</u> <u>em casa</u> <u>com dedicação</u>."</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>📋</span>
            <h3>Aposto</h3>
            <p>
              Explica, resume ou detalha um termo anterior. Geralmente separado
              por vírgulas, dois-pontos ou travessão.{" "}
              <em>"Camões, <u>o maior poeta português</u>, escreveu Os Lusíadas."</em>
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Aposto</th>
                <th>Função</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Explicativo</td>
                <td>Explica ou caracteriza</td>
                <td>
                  <em>São Paulo, a maior cidade do Brasil, é cosmopolita.</em>
                </td>
              </tr>
              <tr>
                <td>Enumerativo</td>
                <td>Enumera os elementos do termo anterior</td>
                <td>
                  <em>Trouxe tudo: caderno, caneta e borracha.</em>
                </td>
              </tr>
              <tr>
                <td>Resumitivo</td>
                <td>Resume elementos anteriores</td>
                <td>
                  <em>Honestidade, dedicação, amor — tudo ele possuía.</em>
                </td>
              </tr>
              <tr>
                <td>Especificativo</td>
                <td>Especifica sem vírgula</td>
                <td>
                  <em>O poeta Drummond escreveu "No meio do caminho".</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Adjunto Adnominal x Complemento Nominal</span>

        <h2>8. AA x CN — A Distinção Mais Cobrada</h2>

        <p>
          Tanto o <strong>adjunto adnominal</strong> quanto o{" "}
          <strong>complemento nominal</strong> podem aparecer como "substantivo
          + preposição + substantivo", mas exercem funções diferentes.
        </p>

        <div className="lesson-highlight">
          <h3>Critério definitivo: o nome regente é concreto ou abstrato?</h3>
          <p>
            <strong>Adjunto Adnominal:</strong> o nome regente é concreto, e o
            complemento indica posse, matéria, origem ou espécie. A relação é
            de qualificação. Teste: pode substituir por adjetivo?{" "}
            <em>"Casa de madeira"</em> → <em>"casa madeireira"</em> → AA.
          </p>
          <p>
            <strong>Complemento Nominal:</strong> o nome regente é abstrato
            (deriva de verbo ou adjetivo), e o complemento é necessário para
            completar o sentido. Teste: o nome regente pede um complemento assim
            como um verbo pediria? <em>"Amor à pátria"</em> — "amor" pede
            "a quê?" → CN.
          </p>
        </div>

        <div className="math-block">
          <h3>Casos ambíguos — posição do agente</h3>
          <p>
            Em "a <strong>destruição da cidade pelo inimigo</strong>", temos:
          </p>
          <ul>
            <li>
              <em>"da cidade"</em> — pode ser CN (equivale a: o inimigo
              destruiu <em>a cidade</em>) ou AA (indica o que sofreu a
              destruição). Grammarians divergem; em provas, aceita-se CN.
            </li>
            <li>
              <em>"pelo inimigo"</em> — agente da passiva nominal (o inimigo
              pratica a destruição).
            </li>
          </ul>
        </div>
      </section>

      {/* SEÇÃO 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Vocativo e Predicativo</span>

        <h2>9. Vocativo e Predicativo do Sujeito / do Objeto</h2>

        <p>
          O <strong>vocativo</strong> e o <strong>predicativo</strong> são
          elementos que frequentemente geram dúvidas na análise sintática.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📣</span>
            <h3>Vocativo</h3>
            <p>
              Chama, interpela ou nomeia o interlocutor. Está{" "}
              <strong>fora da estrutura sintática</strong> da oração — não é
              sujeito, nem objeto, nem adjunto. Separado por vírgulas.{" "}
              <em>"Maria, venha aqui."</em> — "Maria" é vocativo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌟</span>
            <h3>Predicativo do Sujeito</h3>
            <p>
              Qualifica ou classifica o <strong>sujeito</strong> por meio de
              verbo de ligação (predicado nominal) ou junto a verbo nocional
              (predicado verbo-nominal).{" "}
              <em>"Ela chegou cansada."</em> — "cansada" é predicativo do
              sujeito "ela".
            </p>
          </div>

          <div className="lesson-card">
            <span>🎖️</span>
            <h3>Predicativo do Objeto</h3>
            <p>
              Qualifica o <strong>objeto</strong> (direto ou indireto).
              Aparece em predicado verbo-nominal quando há dois núcleos.{" "}
              <em>"Consideraram o réu inocente."</em> — "inocente" é
              predicativo do OD "o réu".
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM — Vocativo não é sujeito</h3>
          <p>
            Erro clássico: <em>"João, saia."</em> — "João" não é sujeito, é
            vocativo. O sujeito de "saia" é oculto (você / tu). O vocativo é
            indicado pela entonação e pela vírgula. Quando há imperativos, o
            nome antes da vírgula é quase sempre vocativo.
          </p>
        </div>
      </section>

      {/* SEÇÃO 10 */}
      <section className="lesson-section">
        <span className="section-kicker">Metodologia</span>

        <h2>10. Análise Sintática — Método Passo a Passo</h2>

        <p>
          A análise sintática segue uma ordem lógica que facilita a
          identificação de cada termo. Seguir o método evita erros de
          classificação, especialmente nas questões de alto nível do ENEM.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 340"
            width="680"
            height="340"
            aria-label="Timeline dos passos da análise sintática"
          >
            {/* Linha central */}
            <line x1="40" y1="170" x2="640" y2="170" stroke="#6366f1" strokeWidth="3" />

            {/* Passo 1 */}
            <circle cx="80" cy="170" r="22" fill="#6366f1" />
            <text x="80" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
            <rect x="30" y="200" width="100" height="60" rx="6" fill="#eef2ff" />
            <text x="80" y="220" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Localize</text>
            <text x="80" y="234" textAnchor="middle" fill="#3730a3" fontSize="10">o verbo ou</text>
            <text x="80" y="248" textAnchor="middle" fill="#3730a3" fontSize="10">loc. verbal</text>

            {/* Passo 2 */}
            <circle cx="200" cy="170" r="22" fill="#6366f1" />
            <text x="200" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
            <rect x="150" y="84" width="100" height="60" rx="6" fill="#eef2ff" />
            <text x="200" y="104" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Classifique</text>
            <text x="200" y="118" textAnchor="middle" fill="#3730a3" fontSize="10">o verbo (VTD,</text>
            <text x="200" y="132" textAnchor="middle" fill="#3730a3" fontSize="10">VTI, VI, VL…)</text>
            <line x1="200" y1="144" x2="200" y2="148" stroke="#6366f1" strokeWidth="1" strokeDasharray="4" />

            {/* Passo 3 */}
            <circle cx="320" cy="170" r="22" fill="#6366f1" />
            <text x="320" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
            <rect x="270" y="200" width="100" height="60" rx="6" fill="#eef2ff" />
            <text x="320" y="220" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Identifique</text>
            <text x="320" y="234" textAnchor="middle" fill="#3730a3" fontSize="10">o sujeito</text>
            <text x="320" y="248" textAnchor="middle" fill="#3730a3" fontSize="10">(quem? o quê?)</text>

            {/* Passo 4 */}
            <circle cx="440" cy="170" r="22" fill="#6366f1" />
            <text x="440" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
            <rect x="390" y="84" width="100" height="60" rx="6" fill="#eef2ff" />
            <text x="440" y="104" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Encontre</text>
            <text x="440" y="118" textAnchor="middle" fill="#3730a3" fontSize="10">OD / OI /</text>
            <text x="440" y="132" textAnchor="middle" fill="#3730a3" fontSize="10">Predicativo</text>
            <line x1="440" y1="144" x2="440" y2="148" stroke="#6366f1" strokeWidth="1" strokeDasharray="4" />

            {/* Passo 5 */}
            <circle cx="560" cy="170" r="22" fill="#6366f1" />
            <text x="560" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">5</text>
            <rect x="510" y="200" width="100" height="70" rx="6" fill="#eef2ff" />
            <text x="560" y="220" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Classifique</text>
            <text x="560" y="234" textAnchor="middle" fill="#3730a3" fontSize="10">os termos</text>
            <text x="560" y="248" textAnchor="middle" fill="#3730a3" fontSize="10">acessórios</text>
            <text x="560" y="262" textAnchor="middle" fill="#3730a3" fontSize="10">(AA, AAd, ap.)</text>

            {/* Título */}
            <text x="340" y="30" textAnchor="middle" fill="#1e1b4b" fontSize="15" fontWeight="bold">
              Roteiro de Análise Sintática
            </text>
          </svg>
          <figcaption>Os cinco passos metodológicos da análise sintática completa</figcaption>
        </figure>

        <div className="math-block">
          <h3>Aplicação: "O professor entregou as provas aos alunos ontem."</h3>
          <p>
            <strong>Passo 1:</strong> Verbo = "entregou"
          </p>
          <p>
            <strong>Passo 2:</strong> Verbo VTDI (entregou o quê? + a quem?)
          </p>
          <p>
            <strong>Passo 3:</strong> Sujeito = "O professor" (simples; núcleo
            "professor")
          </p>
          <p>
            <strong>Passo 4:</strong> OD = "as provas"; OI = "aos alunos"
          </p>
          <p>
            <strong>Passo 5:</strong> AAd de tempo = "ontem"
          </p>
          <p>
            <strong>Predicado:</strong> verbal ("entregou as provas aos alunos
            ontem" — sem predicativo do sujeito).
          </p>
        </div>
      </section>

      {/* SEÇÃO 11 */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa Geral</span>

        <h2>11. Termos da Oração — Quadro Completo</h2>

        <p>
          Consolidando todos os termos estudados em um mapa estrutural para
          revisão rápida antes do ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Termo</th>
                <th>Pergunta / Critério</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <strong>Essenciais</strong>
                </td>
                <td>Sujeito</td>
                <td>Quem pratica / sofre a ação?</td>
                <td>
                  <em>O gato dormiu.</em>
                </td>
              </tr>
              <tr>
                <td>Predicado</td>
                <td>O que se diz do sujeito?</td>
                <td>
                  <em>dormiu / é bonito / saiu feliz</em>
                </td>
              </tr>
              <tr>
                <td rowSpan={5}>
                  <strong>Integrantes</strong>
                </td>
                <td>OD</td>
                <td>VTD + quê? / quem?</td>
                <td>
                  <em>Comprei um carro.</em>
                </td>
              </tr>
              <tr>
                <td>OI</td>
                <td>VTI + a quem? / de quê?</td>
                <td>
                  <em>Gosto de música.</em>
                </td>
              </tr>
              <tr>
                <td>CN</td>
                <td>Nome abstrato + de / a / em…</td>
                <td>
                  <em>Tenho medo de altura.</em>
                </td>
              </tr>
              <tr>
                <td>AP</td>
                <td>Voz passiva + por / de</td>
                <td>
                  <em>Escrito por Machado.</em>
                </td>
              </tr>
              <tr>
                <td>Predicativo</td>
                <td>Qualifica sujeito ou objeto</td>
                <td>
                  <em>Ela é bela. / Achei-o incrível.</em>
                </td>
              </tr>
              <tr>
                <td rowSpan={3}>
                  <strong>Acessórios</strong>
                </td>
                <td>AA</td>
                <td>Modifica substantivo</td>
                <td>
                  <em>O belo poema antigo.</em>
                </td>
              </tr>
              <tr>
                <td>AAd</td>
                <td>Modifica verbo / adj. / adv.</td>
                <td>
                  <em>Correu rapidamente.</em>
                </td>
              </tr>
              <tr>
                <td>Aposto</td>
                <td>Explica / resume termo anterior</td>
                <td>
                  <em>Camões, o épico português.</em>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>À parte</strong>
                </td>
                <td>Vocativo</td>
                <td>Chama o interlocutor — fora da estrutura</td>
                <td>
                  <em>Ana, venha!</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 12 — EXERCÍCIOS */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação e ENEM</span>

        <h2>12. Exercícios</h2>

        <Exercise
          title="Exercício 1 — Identificação de Oração e Frase"
          level="Básico"
          statement={
            <p>
              Analise os enunciados abaixo e marque a alternativa que contém
              apenas <strong>orações</strong> (enunciados com verbo):
            </p>
          }
          options={[
            {
              letter: "a",
              text: '"Silêncio!" / "Que saudade!" / "Cuidado!"',
            },
            {
              letter: "b",
              text: '"Que dia bonito!" / "Ela chegou." / "Fogo!"',
            },
            {
              letter: "c",
              text: '"O aluno estudou." / "Choveu muito." / "Ela sorriu."',
              correct: true,
            },
            {
              letter: "d",
              text: '"Atenção!" / "Fogo!" / "Silêncio, por favor!"',
            },
          ]}
          resolution={
            <p>
              A alternativa C apresenta apenas enunciados que possuem verbo:
              "estudou", "choveu" e "sorriu". Todos os demais enunciados das
              outras alternativas são frases sem verbo (interjeições ou
              exclamações nominais), o que as caracteriza como{" "}
              <strong>frases</strong>, mas não como <strong>orações</strong>.
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Classificação do Sujeito"
          level="Intermediário"
          statement={
            <p>
              Identifique o tipo de sujeito nas frases:
              <br />
              I. <em>"Há muitos problemas a resolver."</em>
              <br />
              II. <em>"Bateram na porta três vezes."</em>
              <br />
              III. <em>"Comprei pão na padaria."</em>
              <br />
              Assinale a sequência correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "I = inexistente; II = indeterminado; III = oculto",
              correct: true,
            },
            {
              letter: "b",
              text: "I = indeterminado; II = inexistente; III = simples",
            },
            {
              letter: "c",
              text: "I = oculto; II = indeterminado; III = inexistente",
            },
            {
              letter: "d",
              text: "I = inexistente; II = oculto; III = indeterminado",
            },
          ]}
          resolution={
            <p>
              I — "Há" é forma impessoal do verbo "haver" com sentido de
              existência: <strong>oração sem sujeito</strong> (inexistente). II
              — "Bateram" está na 3ª pessoa do plural sem referente anterior:
              sujeito <strong>indeterminado</strong>. III — "Comprei" é 1ª
              pessoa do singular; o sujeito "eu" está oculto, recuperável pela
              desinência verbal: sujeito <strong>oculto / desinencial</strong>.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Tipo de Predicado"
          level="Avançado"
          statement={
            <p>
              "Os juízes consideraram o réu inocente e o libertaram
              imediatamente."
              <br />
              <br />
              A primeira oração do período acima contém predicado do tipo:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Verbal, pois o verbo é transitivo direto.",
            },
            {
              letter: "b",
              text: "Nominal, pois há predicativo do sujeito.",
            },
            {
              letter: "c",
              text: "Verbo-nominal, pois há verbo nocional e predicativo do objeto direto.",
              correct: true,
            },
            {
              letter: "d",
              text: "Verbal, pois o verbo é de ligação e o predicativo é do sujeito.",
            },
          ]}
          resolution={
            <p>
              Em "consideraram o réu inocente", "consideraram" é verbo nocional
              (ação: os juízes consideram), mas "inocente" é um predicativo que
              qualifica o <strong>objeto direto</strong> "o réu". Assim, há dois
              núcleos: o verbo de ação e o predicativo do objeto → predicado{" "}
              <strong>verbo-nominal</strong> com predicativo do objeto direto. A
              alternativa B está errada porque o predicativo não qualifica o
              sujeito ("os juízes") e o verbo não é de ligação.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Contexto de Publicidade e Sujeito Indeterminado"
          level="Contextualizado"
          statement={
            <p>
              Leia o slogan publicitário:{" "}
              <em>"Aqui se vive melhor."</em>
              <br />
              <br />
              Do ponto de vista sintático, o pronome "se" funciona como índice
              de indeterminação do sujeito porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: 'O verbo "viver" é transitivo direto e "se" funciona como partícula apassivadora.',
            },
            {
              letter: "b",
              text: 'O verbo "viver" é intransitivo, tornando impossível a voz passiva; logo, "se" indetermina o sujeito.',
              correct: true,
            },
            {
              letter: "c",
              text: '"Aqui" é o sujeito da oração, por ser o lugar onde se vive.',
            },
            {
              letter: "d",
              text: '"Se" é pronome reflexivo, indicando que o sujeito pratica e sofre a ação ao mesmo tempo.',
            },
          ]}
          resolution={
            <p>
              "Viver" é verbo <strong>intransitivo</strong> — não admite objeto
              direto, portanto não pode formar voz passiva analítica. Quando o
              "se" aparece com verbo intransitivo, de ligação ou transitivo
              indireto, funciona como{" "}
              <strong>índice de indeterminação do sujeito</strong>, tornando-o
              indeterminado. O advérbio "aqui" é adjunto adverbial de lugar e
              não exerce função de sujeito. A estratégia publicitária usa o
              sujeito indeterminado para incluir todo e qualquer leitor no
              enunciado — recurso de persuasão pela generalização.
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Adjunto Adnominal x Complemento Nominal"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho jornalístico:{" "}
              <em>
                "A necessidade de reformas estruturais e o amor à democracia
                motivaram os manifestantes."
              </em>
              <br />
              <br />
              Assinale a alternativa que analisa corretamente os termos
              sublinhados:
            </p>
          }
          options={[
            {
              letter: "a",
              text: '"de reformas estruturais" = adjunto adnominal de "necessidade"; "à democracia" = adjunto adnominal de "amor".',
            },
            {
              letter: "b",
              text: '"de reformas estruturais" = complemento nominal de "necessidade"; "à democracia" = complemento nominal de "amor".',
              correct: true,
            },
            {
              letter: "c",
              text: '"de reformas estruturais" = objeto indireto; "à democracia" = objeto direto preposicionado.',
            },
            {
              letter: "d",
              text: '"de reformas estruturais" = adjunto adverbial; "à democracia" = complemento nominal de "amor".',
            },
          ]}
          resolution={
            <p>
              "Necessidade" é substantivo <strong>abstrato</strong> derivado do
              adjetivo "necessário" — pede complemento: necessidade de quê? →
              "de reformas estruturais" é{" "}
              <strong>complemento nominal</strong>. Da mesma forma, "amor" é
              substantivo abstrato (derivado do verbo "amar") que pede: amor a
              quê? → "à democracia" é <strong>complemento nominal</strong>. Se
              fossem substantivos concretos (ex.: "livro de capa", "casa de
              pedra"), os sintagmas seriam adjuntos adnominais. Essa distinção
              é central em questões de alta dificuldade do ENEM e de
              vestibulares como FUVEST e UNICAMP.
            </p>
          }
        />
      </section>
    </article>
  );
}
