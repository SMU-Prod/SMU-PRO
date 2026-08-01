"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 03</span>
          <h1>Palavras cognatas, falsos cognatos e estratégias de ampliação do vocabulário</h1>
          <p>
            Uma das grandes armadilhas do Espanhol para falantes do Português — e um dos temas favoritos do ENEM — são os <strong>falsos cognatos</strong> (também chamados de "falsos amigos" ou <em>falsos amigos</em> em espanhol). São palavras que parecem idênticas ou muito similares em ambas as línguas mas têm significados completamente diferentes, podendo levar o candidato a interpretar um texto de forma totalmente equivocada. Neste capítulo, você aprenderá a identificar os cognatos verdadeiros (que facilitam a leitura), reconhecer os falsos cognatos mais cobrados no ENEM, e desenvolver estratégias sistemáticas para ampliar seu vocabulário em espanhol de forma rápida e eficiente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cognatos Verdadeiros</span>
        <h2>1. O que são cognatos e por que eles facilitam a leitura</h2>
        <p>
          Cognatos são palavras de duas línguas diferentes que têm a mesma origem etimológica e, geralmente, significado semelhante ou idêntico. Entre Português e Espanhol, os cognatos são extremamente abundantes por conta da herança comum do Latim. Um cognato perfeito é aquele que tem grafia quase idêntica e significado igual: <em>hotel</em> = hotel, <em>música</em> = música, <em>problema</em> = problema, <em>natural</em> = natural, <em>importante</em> = importante. Esses cognatos representam a maior parte do vocabulário básico compartilhado entre as duas línguas e são a principal razão pela qual falantes do Português conseguem ler textos em Espanhol sem estudo prévio.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏨</span>
            <h3>Cognatos perfeitos</h3>
            <p>Grafia idêntica ou quase idêntica e significado igual: <em>hotel, animal, natural, social, cultural, general, normal, final, nacional, oficial</em>.</p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Cognatos próximos</h3>
            <p>Pequena diferença ortográfica, mesmo significado: <em>música/música, arte/arte, ciência/ciencia, nação/nación, coração/corazón</em>.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Cognatos por sufixo</h3>
            <p>Padrão sistemático de transformação: <em>-ção → -ción</em> (educação/educación), <em>-dade → -dad</em> (cidade/ciudad, liberdade/libertad).</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Cognatos por prefixo</h3>
            <p>Mesmo prefixo latino: <em>inter-</em> (internacional/internacional), <em>trans-</em> (transformar/transformar), <em>sub-</em> (subdesarrollo/subdesenvolvimento).</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Português</th>
                <th>Espanhol</th>
                <th>Padrão de transformação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>comunicação</td>
                <td><em>comunicación</em></td>
                <td>-ção → -ción</td>
              </tr>
              <tr>
                <td>cidade</td>
                <td><em>ciudad</em></td>
                <td>-dade → -dad</td>
              </tr>
              <tr>
                <td>felicidade</td>
                <td><em>felicidad</em></td>
                <td>-dade → -dad</td>
              </tr>
              <tr>
                <td>história</td>
                <td><em>historia</em></td>
                <td>-ória → -oria (sem acento)</td>
              </tr>
              <tr>
                <td>diferente</td>
                <td><em>diferente</em></td>
                <td>idêntico</td>
              </tr>
              <tr>
                <td>universidade</td>
                <td><em>universidad</em></td>
                <td>-dade → -dad</td>
              </tr>
              <tr>
                <td>responsabilidade</td>
                <td><em>responsabilidad</em></td>
                <td>-dade → -dad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Falsos Cognatos</span>
        <h2>2. O que são falsos cognatos (falsos amigos)</h2>
        <p>
          Os falsos cognatos (<em>falsos amigos</em>) são palavras que se parecem com palavras do Português mas têm significados completamente diferentes. Eles representam uma das maiores armadilhas para candidatos que escolhem Espanhol no ENEM, pois a semelhança visual cria uma falsa sensação de entendimento. Conhecer os falsos cognatos mais frequentes é uma das melhores formas de se preparar para o exame, pois o ENEM frequentemente seleciona textos ou cria questões que exploram exatamente essas diferenças.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Comparação visual entre cognatos verdadeiros e falsos cognatos">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">Cognatos Verdadeiros × Falsos Cognatos</text>
            {/* Lado cognatos verdadeiros */}
            <rect x="20" y="45" width="300" height="155" rx="10" fill="#d1fae5" />
            <text x="170" y="68" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">Cognatos Verdadeiros</text>
            <text x="170" y="92" textAnchor="middle" fill="#065f46" fontSize="12">PT: escola → ES: escuela</text>
            <text x="170" y="112" textAnchor="middle" fill="#065f46" fontSize="12">PT: importante → ES: importante</text>
            <text x="170" y="132" textAnchor="middle" fill="#065f46" fontSize="12">PT: professor → ES: profesor</text>
            <text x="170" y="152" textAnchor="middle" fill="#065f46" fontSize="12">PT: televisão → ES: televisión</text>
            <text x="170" y="178" textAnchor="middle" fill="#065f46" fontSize="11">✓ Mesma aparência, mesmo sentido</text>
            {/* Vs */}
            <text x="350" y="128" textAnchor="middle" fill="#1f2937" fontSize="18" fontWeight="bold">VS</text>
            {/* Lado falsos cognatos */}
            <rect x="380" y="45" width="300" height="155" rx="10" fill="#fce7f3" />
            <text x="530" y="68" textAnchor="middle" fill="#9d174d" fontSize="13" fontWeight="bold">Falsos Cognatos</text>
            <text x="530" y="92" textAnchor="middle" fill="#9d174d" fontSize="12">embarazada ≠ "embaraçada"</text>
            <text x="530" y="112" textAnchor="middle" fill="#9d174d" fontSize="12">borracha ≠ "borracha" (BR)</text>
            <text x="530" y="132" textAnchor="middle" fill="#9d174d" fontSize="12">polvo ≠ "polvo" (BR)</text>
            <text x="530" y="152" textAnchor="middle" fill="#9d174d" fontSize="12">largo ≠ "largo" (BR)</text>
            <text x="530" y="178" textAnchor="middle" fill="#9d174d" fontSize="11">⚠ Mesma aparência, sentido DIFERENTE</text>
          </svg>
          <figcaption>Distinção fundamental entre cognatos verdadeiros (facilitam a leitura) e falsos cognatos (armadilhas de interpretação).</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Falsos Amigos Clássicos</span>
        <h2>3. Os falsos cognatos mais cobrados no ENEM</h2>
        <p>
          A lista abaixo reúne os falsos cognatos mais frequentes em provas de Espanhol — tanto no ENEM quanto em vestibulares. Memorize principalmente os que diferem radicalmente em significado, pois são os que mais causam erros de interpretação. Ao encontrar uma dessas palavras em um texto, sempre verifique o contexto antes de assumir que o significado é o mesmo do Português.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra em Espanhol</th>
                <th>O que parece em Português</th>
                <th>Significado real em Espanhol</th>
                <th>Exemplo de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>embarazada</em></td>
                <td>embaraçada (envergonhada)</td>
                <td>grávida</td>
                <td><em>Ella está embarazada</em> = Ela está grávida</td>
              </tr>
              <tr>
                <td><em>borracha</em></td>
                <td>borracha (material elástico)</td>
                <td>bêbada (feminino de bêbado)</td>
                <td><em>La mujer estaba borracha</em> = A mulher estava bêbada</td>
              </tr>
              <tr>
                <td><em>polvo</em></td>
                <td>polvo (animal marinho)</td>
                <td>pó, poeira</td>
                <td><em>Hay mucho polvo en la casa</em> = Há muita poeira na casa</td>
              </tr>
              <tr>
                <td><em>salada</em></td>
                <td>salada (prato)</td>
                <td>salgada (adjetivo)</td>
                <td><em>La sopa está salada</em> = A sopa está salgada</td>
              </tr>
              <tr>
                <td><em>apellido</em></td>
                <td>apelido (nickname)</td>
                <td>sobrenome</td>
                <td><em>¿Cuál es tu apellido?</em> = Qual é seu sobrenome?</td>
              </tr>
              <tr>
                <td><em>constipado</em></td>
                <td>constipado (prisão de ventre)</td>
                <td>resfriado, gripado</td>
                <td><em>Estoy constipado</em> = Estou resfriado</td>
              </tr>
              <tr>
                <td><em>exquisito</em></td>
                <td>esquisito (estranho)</td>
                <td>delicioso, requintado</td>
                <td><em>El postre está exquisito</em> = A sobremesa está deliciosa</td>
              </tr>
              <tr>
                <td><em>largo</em></td>
                <td>largo (espaço aberto)</td>
                <td>comprido, longo</td>
                <td><em>El río es muy largo</em> = O rio é muito longo</td>
              </tr>
              <tr>
                <td><em>borrar</em></td>
                <td>borrar (manchar)</td>
                <td>apagar, deletar</td>
                <td><em>Borra lo que escribiste</em> = Apague o que escreveu</td>
              </tr>
              <tr>
                <td><em>pretender</em></td>
                <td>pretender (ter intenção)</td>
                <td>tentar, aspirar a</td>
                <td><em>Pretende ganar el premio</em> = Tenta/aspira ganhar o prêmio</td>
              </tr>
              <tr>
                <td><em>polvo</em> (animal)</td>
                <td>polvo (animal em PT)</td>
                <td>Em ES o polvo é <em>pulpo</em></td>
                <td><em>El pulpo es un animal marino</em> = O polvo é animal marinho</td>
              </tr>
              <tr>
                <td><em>ensalada</em></td>
                <td>ensalada ≠ salada (prato)</td>
                <td>salada (prato de vegetais)</td>
                <td><em>Quiero una ensalada verde</em> = Quero uma salada verde</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Mnemônico para os falsos amigos mais perigosos:</strong><br />
          • <em>embarazada</em> = grávida (pense: "embrião" = bebê)<br />
          • <em>exquisito</em> = delicioso (pense: "exquisite" em inglês = requintado)<br />
          • <em>largo</em> = comprido, longo (pense: "largo" em música = devagar/longo)<br />
          • <em>constipado</em> = resfriado (pense: "constipation" em inglês = resfriado no contexto hispânico)
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mais Falsos Amigos</span>
        <h2>4. Tabela expandida de falsos cognatos por categoria</h2>
        <p>
          Além dos falsos amigos clássicos já vistos, existem muitos outros que aparecem com frequência em textos hispânicos. Organizá-los por categoria temática ajuda na memorização e na aplicação durante a leitura de diferentes tipos de texto — do cotidiano à literatura, do jornalismo à publicidade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Espanhol</th>
                <th>Parece ser (PT)</th>
                <th>Significa (ES)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cotidiano</td>
                <td><em>vaso</em></td>
                <td>vaso (sanitário)</td>
                <td>copo (para beber)</td>
              </tr>
              <tr>
                <td>Cotidiano</td>
                <td><em>taza</em></td>
                <td>taça (troféu)</td>
                <td>xícara, caneca</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td><em>embarazo</em></td>
                <td>embaraço (constrangimento)</td>
                <td>gravidez</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td><em>borrachera</em></td>
                <td>borracheira (pneu furado)</td>
                <td>bebedeira, embriaguez</td>
              </tr>
              <tr>
                <td>Trabalho</td>
                <td><em>oficina</em></td>
                <td>oficina (garagem mecânica)</td>
                <td>escritório</td>
              </tr>
              <tr>
                <td>Trabalho</td>
                <td><em>carpeta</em></td>
                <td>carpete (tapete)</td>
                <td>pasta, arquivo</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td><em>mantequilla</em></td>
                <td>manteiguinha (familiar)</td>
                <td>manteiga</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td><em>postre</em></td>
                <td>poste (objeto urbano)</td>
                <td>sobremesa</td>
              </tr>
              <tr>
                <td>Vestuário</td>
                <td><em>ropa</em></td>
                <td>roupa (vestuário)</td>
                <td>roupa — ESTE É COGNATO VERDADEIRO</td>
              </tr>
              <tr>
                <td>Comportamento</td>
                <td><em>molestar</em></td>
                <td>molestar (abuso sexual)</td>
                <td>incomodar, aborrecer (sentido mais amplo)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Famílias de Palavras</span>
        <h2>5. Famílias de palavras cognatas por área temática</h2>
        <p>
          Uma estratégia muito eficiente para ampliar o vocabulário em espanhol rapidamente é aprender palavras em "famílias" — grupos de palavras relacionadas que compartilham a mesma raiz. Se você sabe que <em>educación</em> significa "educação", é provável que já saiba <em>educar</em> (educar), <em>educativo</em> (educativo), <em>educado</em> (educado/bem-criado), <em>educador</em> (educador). Dessa forma, aprender uma raiz nova expande automaticamente seu vocabulário em 4 a 6 palavras.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Família de palavras ao redor da raiz 'educ' em espanhol">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#e0e7ff" />
            <text x="350" y="26" textAnchor="middle" fill="#3730a3" fontSize="14" fontWeight="bold">Família de Palavras: Raiz "EDUC-" em Espanhol</text>
            <ellipse cx="350" cy="120" rx="60" ry="30" fill="#4f46e5" />
            <text x="350" y="116" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">EDUC-</text>
            <text x="350" y="132" textAnchor="middle" fill="white" fontSize="10">(raiz latina)</text>
            <defs>
              <marker id="cap03arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#3730a3" />
              </marker>
            </defs>
            {/* Ramo 1 */}
            <line x1="292" y1="107" x2="228" y2="80" stroke="#3730a3" strokeWidth="1.5" markerEnd="url(#cap03arr1)" />
            <rect x="80" y="58" width="140" height="38" rx="6" fill="#c7d2fe" />
            <text x="150" y="74" textAnchor="middle" fill="#1e1b4b" fontSize="12" fontWeight="bold">educación</text>
            <text x="150" y="89" textAnchor="middle" fill="#1e1b4b" fontSize="10">educação (substantivo)</text>
            {/* Ramo 2 */}
            <line x1="350" y1="90" x2="350" y2="60" stroke="#3730a3" strokeWidth="1.5" markerEnd="url(#cap03arr1)" />
            <rect x="255" y="38" width="190" height="38" rx="6" fill="#c7d2fe" />
            <text x="350" y="54" textAnchor="middle" fill="#1e1b4b" fontSize="12" fontWeight="bold">educar</text>
            <text x="350" y="69" textAnchor="middle" fill="#1e1b4b" fontSize="10">verbo: educar</text>
            {/* Ramo 3 */}
            <line x1="408" y1="107" x2="473" y2="80" stroke="#3730a3" strokeWidth="1.5" markerEnd="url(#cap03arr1)" />
            <rect x="472" y="58" width="180" height="38" rx="6" fill="#c7d2fe" />
            <text x="562" y="74" textAnchor="middle" fill="#1e1b4b" fontSize="12" fontWeight="bold">educativo/a</text>
            <text x="562" y="89" textAnchor="middle" fill="#1e1b4b" fontSize="10">adjetivo: educativo/a</text>
            {/* Ramo 4 */}
            <line x1="292" y1="133" x2="220" y2="158" stroke="#3730a3" strokeWidth="1.5" markerEnd="url(#cap03arr1)" />
            <rect x="60" y="148" width="155" height="38" rx="6" fill="#c7d2fe" />
            <text x="138" y="164" textAnchor="middle" fill="#1e1b4b" fontSize="12" fontWeight="bold">educado/a</text>
            <text x="138" y="179" textAnchor="middle" fill="#1e1b4b" fontSize="10">bem-educado, cortês</text>
            {/* Ramo 5 */}
            <line x1="408" y1="133" x2="478" y2="158" stroke="#3730a3" strokeWidth="1.5" markerEnd="url(#cap03arr1)" />
            <rect x="475" y="148" width="180" height="38" rx="6" fill="#c7d2fe" />
            <text x="565" y="164" textAnchor="middle" fill="#1e1b4b" fontSize="12" fontWeight="bold">educador/a</text>
            <text x="565" y="179" textAnchor="middle" fill="#1e1b4b" fontSize="10">substantivo: educador/a</text>
          </svg>
          <figcaption>A raiz latina "EDUC-" gera uma família de palavras em espanhol que um falante de Português reconhece quase intuitivamente.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área temática</th>
                <th>Raiz</th>
                <th>Família de palavras em Espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meio ambiente</td>
                <td><em>ambient-</em></td>
                <td><em>ambiente, ambiental, medioambiente, ambientalista</em></td>
              </tr>
              <tr>
                <td>Política</td>
                <td><em>democrac-</em></td>
                <td><em>democracia, democrático, democratizar, demócrata</em></td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td><em>salud-</em></td>
                <td><em>salud, saludable, saludar, saludo</em></td>
              </tr>
              <tr>
                <td>Economia</td>
                <td><em>econom-</em></td>
                <td><em>economía, económico, economizar, economista</em></td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td><em>cultur-</em></td>
                <td><em>cultura, cultural, cultivar, multicultural</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cognatos Parciais</span>
        <h2>6. Cognatos parciais — mesma palavra, diferença de sentido</h2>
        <p>
          Entre os verdadeiros cognatos e os falsos amigos existe uma categoria intermediária: os <strong>cognatos parciais</strong>. São palavras que existem em ambas as línguas com o mesmo sentido em alguns contextos mas com sentidos diferentes em outros. Por exemplo, <em>pretender</em>: em Português significa "ter a intenção de fazer algo" (<em>"pretendo estudar"</em>), enquanto em Espanhol significa primariamente "almejar/aspirar a algo" ou "tentar". O sentido de "ter intenção" também existe em Espanhol, mas é menos central do que em Português.
        </p>

        <div className="lesson-highlight">
          <strong>Cognatos parciais mais comuns no ENEM:</strong><br />
          • <em>sensible</em> (ES) = sensível (emocionalmente) E também sensível (perceptível) — em PT "sensível" tem o mesmo espectro semântico<br />
          • <em>gracioso</em> (ES) = engraçado, bonito, agradável — em PT "gracioso" = elegante/gracioso<br />
          • <em>policial</em> (ES) = policial (adjetivo/gênero literário) — uso idêntico, mas em PT também é substantivo<br />
          • <em>sensato</em> (ES) = sensato (razoável) — idêntico em PT<br />
          • <em>apreciar</em> (ES) = apreciar + valorizar — em PT principalmente "apreciar"
        </div>

        <div className="math-block">
          🎯 ESTRATÉGIA ENEM: Quando você encontrar uma palavra que parece ser um cognato mas o sentido no contexto parece "estranho", é sinal de que pode ser um falso amigo ou cognato parcial. Sempre verifique o contexto da frase antes de aceitar o significado intuitivo.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias de Vocabulário</span>
        <h2>7. Estratégias práticas para ampliar o vocabulário rapidamente</h2>
        <p>
          Para o ENEM, você não precisa — nem conseguiria — aprender todo o vocabulário do Espanhol. O que você precisa é de estratégias inteligentes que maximizem seu vocabulário de leitura no tempo disponível. As pesquisas em linguística aplicada mostram que conhecer as 1000 palavras mais frequentes de uma língua permite compreender cerca de 80% dos textos escritos nessa língua. Para Espanhol, dado o alto grau de sobreposição com o Português, você já domina boa parte dessas palavras sem perceber.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Leia em Espanhol</h3>
            <p>Dedique 10-15 minutos diários lendo textos autênticos: <em>El País</em>, <em>BBC Mundo</em>, <em>La Nación</em>. A exposição regular é o método mais eficiente.</p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Aprenda por campos semânticos</h3>
            <p>Agrupe palavras por tema: meios de transporte, partes do corpo, tempo atmosférico, emoções. Contexto facilita a memorização.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Padrões de transformação</h3>
            <p>Memorize as regras: <em>-ção → -ción</em>, <em>-dade → -dad</em>, <em>-mente → -mente</em>. Um padrão substitui centenas de palavras individuais.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Lista de falsos amigos</h3>
            <p>Crie e revise regularmente sua lista pessoal dos 30-40 falsos cognatos mais frequentes. São poucos mas causam muitos erros.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Temático ENEM</span>
        <h2>8. Vocabulário essencial por área temática do ENEM</h2>
        <p>
          Como o ENEM segue temas recorrentes, é possível preparar vocabulário específico por área. Estudar 20-30 palavras de cada tema a seguir garante que você não ficará sem entender partes cruciais dos textos das provas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema ENEM</th>
                <th>Vocabulário-chave em Espanhol</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meio Ambiente</td>
                <td><em>deforestación, contaminación, clima, especie, bosque, reciclaje, energía, sostenible</em></td>
                <td>desmatamento, contaminação, clima, espécie, floresta, reciclagem, energia, sustentável</td>
              </tr>
              <tr>
                <td>Direitos Humanos</td>
                <td><em>igualdad, discriminación, violencia, ciudadanía, justicia, derechos, pobreza, inclusión</em></td>
                <td>igualdade, discriminação, violência, cidadania, justiça, direitos, pobreza, inclusão</td>
              </tr>
              <tr>
                <td>Tecnologia</td>
                <td><em>internet, datos, privacidad, algoritmo, red social, digital, innovación, aplicación</em></td>
                <td>internet, dados, privacidade, algoritmo, rede social, digital, inovação, aplicativo</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td><em>enfermedad, tratamiento, prevención, salud mental, alimentación, vacuna, pandemia</em></td>
                <td>doença, tratamento, prevenção, saúde mental, alimentação, vacina, pandemia</td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td><em>identidad, patrimonio, tradición, diversidad, arte, lengua, literatura, folclore</em></td>
                <td>identidade, patrimônio, tradição, diversidade, arte, língua, literatura, folclore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificando cognatos verdadeiros"
          statement={
            <p>
              Leia a frase: <em>"La comunicación digital transformó las relaciones sociales y culturales en el siglo XXI."</em> Quantas palavras dessa frase são cognatos facilmente reconhecíveis por falantes de Português, sem necessidade de estudo prévio?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas 1-2 palavras são reconhecíveis: somente 'digital' e 'cultural'." },
            { letter: "b", text: "Nenhuma palavra é reconhecível — o Espanhol é muito diferente do Português." },
            { letter: "c", text: "A maioria das palavras são cognatos reconhecíveis: comunicación, digital, transformó, relaciones, sociales, culturales, siglo.", correct: true },
            { letter: "d", text: "Apenas 'social' e 'siglo' são reconhecíveis como cognatos." },
            { letter: "e", text: "Somente palavras terminadas em '-ción' são cognatos confiáveis em espanhol." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta. Analisando cada palavra: <em>comunicación</em>=comunicação, <em>digital</em>=digital (idêntico), <em>transformó</em>=transformou, <em>relaciones</em>=relações, <em>sociales</em>=sociais, <em>culturales</em>=culturais, <em>siglo</em>=século (cognato latino). As únicas palavras que precisariam de atenção especial são <em>La</em> (artigo) e <em>en</em> (em) — mas estas são palavras gramaticais básicas. Este exemplo ilustra perfeitamente por que o Espanhol é muito mais acessível que outras línguas para falantes do Português.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Reconhecendo falsos cognatos em contexto"
          statement={
            <div>
              <p>Leia o trecho: <em>"Después de la fiesta, María estaba completamente borracha y no podía caminar en línea recta. Sus amigos tuvieron que llevarla a casa."</em></p>
              <p>O que significa <em>borracha</em> nesse contexto? Qual seria o erro de interpretação de um candidato despreparado?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Borracha significa material elástico; o texto fala sobre Maria usando botas de borracha na festa." },
            { letter: "b", text: "Borracha significa bêbada/embriagada; o candidato despreparado poderia achar que Maria estava usando algum tipo de material elástico.", correct: true },
            { letter: "c", text: "Borracha é sinônimo de cansada em espanhol regional; não há risco de erro de interpretação." },
            { letter: "d", text: "Borracha é cognato verdadeiro do português 'borracha' e tem o mesmo significado: material elástico." },
            { letter: "e", text: "Borracha significa envergonhada — é confundida com 'embaraçada' pelo candidato despreparado." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. <em>Borracha</em> em espanhol é o feminino de <em>borracho</em>, significando "bêbada/embriagada". O contexto confirma isso: ela não conseguia caminhar em linha reta e os amigos precisaram levá-la para casa — comportamento típico de embriaguez. Um candidato despreparado, ao ver "borracha", pensaria automaticamente no material elástico usado em pneus ou luvas (significado em Português), criando uma interpretação absurda do trecho. Este é um dos falsos cognatos mais "perigosos" e frequentes em textos hispânicos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Falsos cognatos em texto de saúde"
          statement={
            <div>
              <p>Leia o trecho de um artigo médico hispânico: <em>"La paciente llegó a la consulta médica afirmando estar embarazada y con síntomas de constipado. El médico confirmó el embarazo y recetó medicamentos para aliviar los síntomas del resfriado."</em></p>
              <p>Qual das afirmações sobre o texto está CORRETA, considerando os falsos cognatos presentes?</p>
            </div>
          }
          options={[
            { letter: "a", text: "A paciente chegou constipada (intestino preso) e o médico confirmou que ela estava envergonhada." },
            { letter: "b", text: "A paciente estava grávida e com sintomas de resfriado; o médico confirmou a gravidez e receitou remédios para o resfriado.", correct: true },
            { letter: "c", text: "A paciente estava embaraçada por estar constipada; o médico receitou remédios para prisão de ventre." },
            { letter: "d", text: "O texto usa 'embarazada' no sentido de constrangimento e 'constipado' no sentido de prisão de ventre." },
            { letter: "e", text: "O texto é ambíguo porque usa dois falsos cognatos de forma incorreta." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> é correta. O texto usa dois falsos cognatos: (1) <em>embarazada</em> = grávida (não "embaraçada/envergonhada") — confirmado pela segunda frase: "confirmó el embarazo" = confirmou a gravidez; (2) <em>constipado</em> em espanhol = resfriado/gripado (não "constipado intestinal") — confirmado pela segunda frase: "síntomas del resfriado" (sintomas do resfriado). O texto é perfeitamente coerente em espanhol; os falsos cognatos criam confusão apenas para quem tenta "traduzir" com base na aparência das palavras.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Falso cognato em texto publicitário"
          statement={
            <div>
              <p>Leia o slogan de um restaurante: <em>"Nuestros postres son exquisitos — una experiencia de sabores únicos que no olvidarás."</em></p>
              <p>Um candidato que interpreta <em>exquisitos</em> como "esquisitos" (= estranhos/bizarros em Português) chegará a qual conclusão equivocada sobre o restaurante?</p>
            </div>
          }
          options={[
            { letter: "a", text: "Concluirá que o restaurante serve sobremesas deliciosas e requintadas, o que é a interpretação correta." },
            { letter: "b", text: "Concluirá que o restaurante admite que suas sobremesas são estranhas e bizarras, o que contradiz o propósito publicitário do slogan.", correct: true },
            { letter: "c", text: "Concluirá que o texto usa 'exquisitos' como sinônimo de 'caros', alertando sobre os preços." },
            { letter: "d", text: "Não haverá erro significativo, pois o contexto de restaurante já esclarece que as sobremesas são positivas." },
            { letter: "e", text: "Concluirá que a propaganda é irônica e que as sobremesas são na verdade ruins." },
          ]}
          resolution={
            <p>
              A alternativa <strong>b)</strong> está correta. <em>Exquisito</em> em espanhol significa "delicioso, requintado, de alta qualidade" — o oposto de "esquisito" em Português (= estranho, bizarro). Um candidato que faz a tradução literal pensará que o restaurante está admitindo que suas sobremesas são "estranhas e bizarras", o que seria um slogan publicitário absurdo. O significado correto — "Nossas sobremesas são deliciosas — uma experiência de sabores únicos que você não vai esquecer" — é exatamente o que se espera de um texto publicitário.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Padrão sistemático de cognatos — questão ENEM"
          statement={
            <div>
              <p>Leia o trecho: <em>"La globalización ha generado profundas transformaciones en las economías nacionales, afectando especialmente a las poblaciones más vulnerables. Sin embargo, también ha creado nuevas oportunidades de desarrollo y cooperación internacional."</em></p>
              <p>Identifique todos os pares cognato Português/Espanhol presentes no trecho e assinale a alternativa que os descreve corretamente:</p>
            </div>
          }
          options={[
            { letter: "a", text: "O trecho não contém cognatos — todo o vocabulário é exclusivo do Espanhol." },
            { letter: "b", text: "Apenas 'internacional' e 'nacional' são cognatos; o restante é vocabulário exclusivo do Espanhol." },
            { letter: "c", text: "Praticamente todo o vocabulário substantivo e adjetivo do trecho tem cognatos diretos em Português: globalización/globalização, transformaciones/transformações, economías/economias, vulnerables/vulneráveis, oportunidades/oportunidades, desarrollo/desenvolvimento, cooperación/cooperação.", correct: true },
            { letter: "d", text: "O trecho usa principalmente falsos cognatos que enganam o leitor português." },
            { letter: "e", text: "Apenas as palavras terminadas em '-ción' têm equivalentes em Português." },
          ]}
          resolution={
            <p>
              A alternativa <strong>c)</strong> é correta e exemplifica perfeitamente o alto grau de cognação entre Português e Espanhol. Analisando o trecho palavra por palavra: <em>globalización</em>=globalização, <em>generado</em>=gerado, <em>profundas</em>=profundas, <em>transformaciones</em>=transformações, <em>economías</em>=economias, <em>nacionales</em>=nacionais, <em>afectando</em>=afetando, <em>poblaciones</em>=populações, <em>vulnerables</em>=vulneráveis, <em>oportunidades</em>=oportunidades, <em>desarrollo</em>=desenvolvimento, <em>cooperación</em>=cooperação, <em>internacional</em>=internacional. Apenas <em>sin embargo</em> (= no entanto) e <em>también</em> (= também) precisariam de conhecimento específico de Espanhol.
            </p>
          }
        />
      </section>

    </article>
  );
}
