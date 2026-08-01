"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 25</span>
          <h1>Propagandas, campanhas publicitárias e linguagem persuasiva</h1>
          <p>
            O texto publicitário em espanhol é um dos mais ricos em recursos linguísticos e semióticos.
            Seu objetivo central é persuadir — vender um produto, promover um comportamento ou construir
            uma imagem positiva. No ENEM, questões com anúncios publicitários e campanhas em espanhol
            testam a capacidade de identificar o público-alvo, a intenção persuasiva, os recursos
            linguísticos usados (metáfora, hipérbole, imperativo, rima) e os valores culturais evocados
            pela peça. Tanto a publicidade comercial quanto as campanhas sociais e políticas dos países
            hispânicos compõem esse universo. Dominar a linguagem publicitária em espanhol é dominar
            a leitura crítica da comunicação contemporânea.
          </p>
        </div>
      </section>

      {/* Seção 1 — Elementos do texto publicitário */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>Elementos do texto publicitário em espanhol</h2>
        <p>
          Uma peça publicitária é composta por elementos verbais e não verbais que atuam juntos para
          construir o efeito persuasivo. Conhecer cada elemento em espanhol facilita a análise.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Em espanhol</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Slogan</td>
                <td><em>eslogan / lema publicitario</em></td>
                <td>Frase curta e memorável que resume a proposta da marca</td>
              </tr>
              <tr>
                <td>Imagem</td>
                <td><em>imagen / ilustración / fotografía</em></td>
                <td>Elemento visual que atrai e orienta a interpretação</td>
              </tr>
              <tr>
                <td>Mensagem verbal</td>
                <td><em>texto / copy / cuerpo del anuncio</em></td>
                <td>Desenvolve a proposta e os benefícios do produto/causa</td>
              </tr>
              <tr>
                <td>Receptor</td>
                <td><em>receptor / público objetivo / target</em></td>
                <td>A quem a peça se dirige (definido por perfil, valores, necessidade)</td>
              </tr>
              <tr>
                <td>Propósito</td>
                <td><em>propósito / finalidad / objetivo</em></td>
                <td>Vender, informar, conscientizar, convencer ou entreter</td>
              </tr>
              <tr>
                <td>Marca / Logotipo</td>
                <td><em>marca / logotipo / logo</em></td>
                <td>Identidade visual da empresa ou campanha</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Elementos de um anúncio publicitário em espanhol">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <rect x="30" y="25" width="640" height="160" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            {/* Imagem simulada */}
            <rect x="50" y="45" width="180" height="120" rx="8" fill="#dbeafe" />
            <text x="140" y="110" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="bold">IMAGEN</text>
            {/* Slogan */}
            <text x="420" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">¡Vive sin límites!</text>
            <text x="420" y="95" textAnchor="middle" fontSize="10" fill="#64748b">[ESLOGAN]</text>
            {/* Corpo */}
            <rect x="260" y="105" width="320" height="40" rx="4" fill="#f1f5f9" />
            <text x="420" y="122" textAnchor="middle" fontSize="10" fill="#475569">Texto del anuncio / copy</text>
            <text x="420" y="137" textAnchor="middle" fontSize="10" fill="#475569">[beneficios del producto / llamada a la acción]</text>
            {/* Logotipo */}
            <rect x="580" y="155" width="70" height="22" rx="4" fill="#fef3c7" />
            <text x="615" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">LOGOTIPO</text>
            {/* Labels */}
            <text x="140" y="178" textAnchor="middle" fontSize="10" fill="#94a3b8">imagen central</text>
            <text x="420" y="180" textAnchor="middle" fontSize="10" fill="#94a3b8">mensaje verbal</text>
          </svg>
          <figcaption>Estrutura visual de um anúncio publicitário: imagem, eslogan, texto e logotipo.</figcaption>
        </figure>
      </section>

      {/* Seção 2 — Recursos linguísticos persuasivos */}
      <section className="lesson-section">
        <span className="section-kicker">Recursos Linguísticos</span>
        <h2>Recursos linguísticos persuasivos na publicidade hispânica</h2>
        <p>
          A linguagem publicitária em espanhol recorre a um conjunto de estratégias retóricas e estilísticas
          para capturar a atenção e persuadir. Identificar esses recursos é o cerne das questões do ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso</th>
                <th>Definição</th>
                <th>Exemplo em espanhol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Imperativo</strong></td>
                <td>Convoca diretamente o receptor à ação</td>
                <td><em>¡Pruébalo! / ¡Únete ahora! / ¡Descúbrelo!</em></td>
              </tr>
              <tr>
                <td><strong>Metáfora</strong></td>
                <td>Compara o produto a algo de valor evocativo</td>
                <td><em>"Este coche es tu libertad."</em></td>
              </tr>
              <tr>
                <td><strong>Hipérbole</strong></td>
                <td>Exagero para intensificar o efeito positivo</td>
                <td><em>"El mejor café del mundo."</em></td>
              </tr>
              <tr>
                <td><strong>Rima</strong></td>
                <td>Sons repetidos para memorabilidade</td>
                <td><em>"Que rico es, que rico es / el chocolate es"</em></td>
              </tr>
              <tr>
                <td><strong>Aliteração</strong></td>
                <td>Repetição de sons consonantais</td>
                <td><em>"Suave, sedoso, superior"</em></td>
              </tr>
              <tr>
                <td><strong>Neologismo</strong></td>
                <td>Criação de palavra nova para a marca</td>
                <td><em>"Zumosol" (suco + sol)</em></td>
              </tr>
              <tr>
                <td><strong>Anglicismo</strong></td>
                <td>Palavra em inglês para conotar modernidade</td>
                <td><em>"El nuevo look de tu cocina"</em></td>
              </tr>
              <tr>
                <td><strong>Interrogação retórica</strong></td>
                <td>Pergunta que implica resposta evidente</td>
                <td><em>"¿No mereces lo mejor?"</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 3 — Publicidade social vs comercial */}
      <section className="lesson-section">
        <span className="section-kicker">Tipologia</span>
        <h2>Publicidade comercial versus publicidade social</h2>
        <p>
          O ENEM apresenta tanto anúncios de produtos comerciais quanto campanhas de conscientização
          social — e pode pedir que o candidato distinga um do outro ou analise o propósito de cada um.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🛒</span>
            <h3>Publicidade comercial</h3>
            <p>Objetivo: vender produto ou serviço. Linguagem centrada em benefícios, prazer, status, exclusividade. <em>¡Compra ya!</em></p>
          </div>
          <div className="lesson-card">
            <span>💉</span>
            <h3>Campanha de saúde pública</h3>
            <p>Objetivo: mudar comportamento. Comum: vacinação, tabagismo, trânsito. <em>"¡Vacúnate! Protege a los tuyos."</em></p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Campanha ambiental</h3>
            <p>Objetivo: conscientizar sobre meio ambiente. <em>"El planeta no espera. Actúa hoy."</em> Tom urgente e emocional.</p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Propaganda política</h3>
            <p>Objetivo: conquistar voto ou apoio. Muito uso de apelo emocional, símbolos nacionais e promessas. <em>"Juntos por un país mejor."</em></p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> a questão pode perguntar qual é o propósito do texto. A publicidade
          social NÃO pretende vender produto — ela busca mudar atitude ou comportamento. A propaganda política
          busca mobilização ou votos. Confundir os propósitos é o erro mais comum.
        </div>
      </section>

      {/* Seção 4 — Linguagem conotativa */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem Conotativa</span>
        <h2>Linguagem conotativa na publicidade hispânica</h2>
        <p>
          A publicidade raramente usa linguagem denotativa (literal). Ela privilegia a conotação — os
          significados emotivos, culturais e simbólicos das palavras e imagens.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Cores e conotação</h3>
            <p>Azul → confiança, tecnologia. Verde → natureza, saúde. Vermelho → paixão, urgência, oferta. Dourado → luxo, prestígio.</p>
          </div>
          <div className="lesson-card">
            <span>🌟</span>
            <h3>Palavras com carga positiva</h3>
            <p><em>natural, premium, exclusivo, único, garantizado, innovador</em> — palavras que evocam qualidade e distinção.</p>
          </div>
          <div className="lesson-card">
            <span>👨‍👩‍👧</span>
            <h3>Imagem familiar</h3>
            <p>Família feliz → produto transmite segurança e pertencimento. Recurso amplamente usado em publicidade de alimentos e seguros.</p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Celebridades e endosso</h3>
            <p><em>El mejor deportista confía en...</em> Transferência de prestígio da personalidade para o produto.</p>
          </div>
        </div>
      </section>

      {/* Seção 5 — Campanhas hispânicas clássicas */}
      <section className="lesson-section">
        <span className="section-kicker">Referências</span>
        <h2>Slogans e campanhas clássicas em espanhol</h2>
        <p>
          Analisar slogans clássicos do mundo hispânico revela como os recursos linguísticos se combinam
          para criar mensagens eficazes e memoráveis.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Slogan em espanhol</th>
                <th>Marca / Campanha</th>
                <th>Recurso principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>"Porque tú lo vales"</em></td>
                <td>L'Oréal (adaptação hispânica)</td>
                <td>Apelo ao ego; pronome <em>tú</em> cria proximidade</td>
              </tr>
              <tr>
                <td><em>"Tasty siempre"</em></td>
                <td>Pepsi (hispânica)</td>
                <td>Anglicismo + advérbio de frequência</td>
              </tr>
              <tr>
                <td><em>"¡Destapa la felicidad!"</em></td>
                <td>Coca-Cola Espanha</td>
                <td>Imperativo + metáfora (felicidade dentro da garrafa)</td>
              </tr>
              <tr>
                <td><em>"Vacúnate, protege a los tuyos"</em></td>
                <td>Ministério da Saúde (vários países)</td>
                <td>Imperativo + apelo à família / altruísmo</td>
              </tr>
              <tr>
                <td><em>"El futuro es hoy"</em></td>
                <td>Campanhas tecnológicas / políticas</td>
                <td>Paradoxo temporal; urgência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 6 — Público-alvo */}
      <section className="lesson-section">
        <span className="section-kicker">Análise de Receptores</span>
        <h2>Como identificar o público-alvo de uma peça publicitária</h2>
        <p>
          Identificar o receptor (<em>destinatario / público objetivo</em>) de um anúncio é uma das
          perguntas mais frequentes do ENEM. O público é inferido por marcas linguísticas e visuais.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Pistas para identificar o público-alvo de uma peça publicitária">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="25" y="30" width="150" height="140" rx="8" fill="#dbeafe" />
            <text x="100" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Linguagem</text>
            <text x="100" y="78" textAnchor="middle" fontSize="10" fill="#1e40af">formal vs informal</text>
            <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#1e40af">gírias juvenis</text>
            <text x="100" y="112" textAnchor="middle" fontSize="10" fill="#1e40af">tecnicismos</text>
            <text x="100" y="129" textAnchor="middle" fontSize="10" fill="#1e40af">pronome: tú/usted</text>
            <rect x="190" y="30" width="150" height="140" rx="8" fill="#d1fae5" />
            <text x="265" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Tema/Produto</text>
            <text x="265" y="78" textAnchor="middle" fontSize="10" fill="#065f46">luxo vs acessível</text>
            <text x="265" y="95" textAnchor="middle" fontSize="10" fill="#065f46">tecnologia</text>
            <text x="265" y="112" textAnchor="middle" fontSize="10" fill="#065f46">família / saúde</text>
            <text x="265" y="129" textAnchor="middle" fontSize="10" fill="#065f46">moda / esporte</text>
            <rect x="355" y="30" width="150" height="140" rx="8" fill="#fef3c7" />
            <text x="430" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Imagem</text>
            <text x="430" y="78" textAnchor="middle" fontSize="10" fill="#92400e">faixa etária</text>
            <text x="430" y="95" textAnchor="middle" fontSize="10" fill="#92400e">gênero representado</text>
            <text x="430" y="112" textAnchor="middle" fontSize="10" fill="#92400e">contexto social</text>
            <text x="430" y="129" textAnchor="middle" fontSize="10" fill="#92400e">cenário urbano/rural</text>
            <rect x="520" y="30" width="155" height="140" rx="8" fill="#fce7f3" />
            <text x="597" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">Valores</text>
            <text x="597" y="78" textAnchor="middle" fontSize="10" fill="#9d174d">tradição/modernidade</text>
            <text x="597" y="95" textAnchor="middle" fontSize="10" fill="#9d174d">individualismo/coletivo</text>
            <text x="597" y="112" textAnchor="middle" fontSize="10" fill="#9d174d">saúde/hedonismo</text>
            <text x="597" y="129" textAnchor="middle" fontSize="10" fill="#9d174d">status/pertencimento</text>
          </svg>
          <figcaption>Quatro pistas para identificar o público-alvo: linguagem, tema, imagem e valores evocados.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> o uso de <em>tú</em> indica proximidade e público jovem/informal;
          <em>usted</em> indica formalidade ou respeito (público adulto/profissional). Em campanhas de saúde
          pública hispânicas, o imperativo com <em>tú</em> (<em>¡Vacúnate!</em>) busca criar urgência e
          impacto pessoal, enquanto <em>usted</em> (<em>Cuídese</em>) é mais usado com idosos.
        </div>
      </section>

      {/* Seção 7 — Campanhas de saúde pública hispânicas */}
      <section className="lesson-section">
        <span className="section-kicker">Saúde Pública</span>
        <h2>Campanhas de saúde pública em países hispânicos</h2>
        <p>
          Campanhas de saúde pública são fonte frequente de textos no ENEM. O espanhol utilizado nessas
          campanhas é claro, direto e costuma combinar imperativo com apelos emocionais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Slogan típico em espanhol</th>
                <th>Recurso linguístico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vacinação</td>
                <td><em>"Vacúnate. Protege a los tuyos y a tu comunidad."</em></td>
                <td>Imperativo + apelo altruísta</td>
              </tr>
              <tr>
                <td>Tabagismo</td>
                <td><em>"Fumar mata. Hay vida más allá del cigarrillo."</em></td>
                <td>Afirmação direta + esperança</td>
              </tr>
              <tr>
                <td>Trânsito</td>
                <td><em>"Si bebes, no conduzcas. Tu vida vale más."</em></td>
                <td>Condicional + apelo à autoestima</td>
              </tr>
              <tr>
                <td>Violência de gênero</td>
                <td><em>"Di no a la violencia. No estás sola."</em></td>
                <td>Imperativo + solidariedade</td>
              </tr>
              <tr>
                <td>Meio ambiente</td>
                <td><em>"El planeta respira si tú cuidas. Recicla."</em></td>
                <td>Metáfora (planeta que respira) + imperativo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM — Como analisar uma peça publicitária em espanhol:</strong>
          <ol>
            <li><strong>Identifique o propósito:</strong> comercial, social, político ou informativo.</li>
            <li><strong>Identifique o receptor:</strong> quem a peça quer atingir e como isso aparece na linguagem.</li>
            <li><strong>Identifique os recursos:</strong> imperativo, metáfora, hipérbole, rima, etc.</li>
            <li><strong>Identifique os valores:</strong> o que a peça pressupõe que o público valoriza.</li>
            <li><strong>Critique:</strong> o que a peça omite ou simplifica para ser mais persuasiva.</li>
          </ol>
        </div>
      </section>

      {/* Seção 8 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de recurso linguístico"
          statement={
            <p>
              Leia o slogan: <em>"¡Descubre el sabor que mueve el mundo!"</em>
              (anúncio de bebida energética). O recurso linguístico predominante nesse slogan é:
            </p>
          }
          options={[
            { letter: "a", text: "Ironia: o autor contradiz o que parece afirmar." },
            { letter: "b", text: "Hipérbole: exagera o poder do produto (mover o mundo).", correct: true },
            { letter: "c", text: "Aliteração: repetição de sons consonantais." },
            { letter: "d", text: "Neologismo: criação de uma palavra nova para nomear o produto." },
          ]}
          resolution={
            <p>
              <em>"Mueve el mundo"</em> é uma hipérbole — exagero que atribui ao produto um poder
              descomunal (mover o mundo). O imperativo <em>¡Descubre!</em> também está presente, mas
              o recurso mais marcante e o que a questão pede é a hipérbole na expressão principal do slogan.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Propósito da peça publicitária"
          statement={
            <p>
              Leia: <em>"Si notas síntomas de depresión o ansiedad, habla con un profesional.
              La salud mental es salud. No estás solo."</em>
              (campanha de um ministério da saúde). O propósito principal dessa campanha é:
            </p>
          }
          options={[
            { letter: "a", text: "Vender serviços de psicologia a preço reduzido." },
            { letter: "b", text: "Informar sobre os sintomas específicos da depressão e da ansiedade." },
            { letter: "c", text: "Reduzir o estigma da saúde mental e encorajar a busca de ajuda profissional.", correct: true },
            { letter: "d", text: "Criticar o sistema de saúde pública por não atender casos de saúde mental." },
          ]}
          resolution={
            <p>
              A campanha usa linguagem de acolhimento (<em>"no estás solo"</em>) e a afirmação
              <em>"la salud mental es salud"</em> — que combate o preconceito de que problemas mentais
              não são "problemas reais de saúde". O propósito é duplo: reduzir o estigma e estimular
              a busca de ajuda. Não há venda de serviços nem crítica ao sistema — é uma campanha
              social de saúde pública.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Valores evocados pelo anúncio"
          statement={
            <p>
              Um anúncio de automóvel de luxo mostra um homem de terno em uma cidade moderna ao entardecer.
              O slogan diz: <em>"Para los que no se conforman con menos. El nuevo Modelo X."</em>
              Quais valores culturais esse anúncio evoca para persuadir o receptor?
            </p>
          }
          options={[
            { letter: "a", text: "Solidariedade, coletivismo e preocupação com o meio ambiente." },
            { letter: "b", text: "Tradição familiar, segurança e estabilidade financeira." },
            { letter: "c", text: "Distinção social, ambição, status e individualismo de sucesso.", correct: true },
            { letter: "d", text: "Simplicidade, economia e praticidade no dia a dia." },
          ]}
          resolution={
            <p>
              A expressão <em>"los que no se conforman con menos"</em> pressupõe uma hierarquia social
              e apela à identidade de quem se vê como superior ou bem-sucedido. O cenário urbano de luxo,
              o homem de terno e a marca de prestígio reforçam os valores de status, distinção e
              individualismo. Esses valores são centrais na publicidade de bens de luxo em todo o
              mundo hispânico e além.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Publicidade social e linguagem"
          statement={
            <p>
              Leia: <em>"¿Sabes cuántos árboles perdemos cada minuto en la Amazonía? Tú puedes
              ser parte del cambio. Planta un árbol hoy. Por ti. Por ellos. Por el planeta."</em>
              Analise os recursos linguísticos usados nessa campanha ambiental.
            </p>
          }
          options={[
            { letter: "a", text: "Usa apenas dados estatísticos para convencer o receptor da gravidade do problema." },
            { letter: "b", text: "Usa ironia para criticar os governos que não protegem as florestas." },
            { letter: "c", text: "Usa interrogação retórica, imperativo e gradação de receptores (tú / ellos / planeta) para criar urgência e pertencimento.", correct: true },
            { letter: "d", text: "Usa linguagem técnica e científica para informar sobre desmatamento." },
          ]}
          resolution={
            <p>
              A interrogação retórica (<em>"¿Sabes cuántos...?"</em>) implica que o leitor deveria saber —
              cria culpa e atenção. O imperativo (<em>"Planta"</em>) convoca à ação direta. A gradação
              <em>"por ti / por ellos / por el planeta"</em> amplia progressivamente o raio de responsabilidade
              e cria identificação emocional em diferentes níveis (individual → social → global).
              Não há dados numéricos concretos nem ironia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Público-alvo e registro"
          statement={
            <p>
              Compare dois anúncios de um mesmo produto (creme hidratante):
              <br /><strong>A:</strong> <em>"¡Cuídate, mamá! Este verano, tu piel merece lo mejor. Con protección solar SPF 50."</em>
              <br /><strong>B:</strong> <em>"Dermaplex Pro: formulación avanzada con ácido hialurónico. Indicado para pieles maduras con pérdida de elasticidad."</em>
              <br />Qual das alternativas descreve corretamente os públicos-alvo dos dois anúncios?
            </p>
          }
          options={[
            { letter: "a", text: "Ambos se dirigem ao mesmo público de mulheres adultas, usando linguagens diferentes apenas por estilo." },
            { letter: "b", text: "O anúncio A se dirige a mulheres jovens; o B, a mulheres maduras com interesse em tecnologia." },
            { letter: "c", text: "O anúncio A usa linguagem afetiva e informal para público geral (mães); o B usa linguagem técnica para consumidoras com perfil mais informado e especializado.", correct: true },
            { letter: "d", text: "O anúncio B é uma campanha de saúde pública; o A é publicidade comercial." },
          ]}
          resolution={
            <p>
              O anúncio A usa vocativo afetivo (<em>mamá</em>), linguagem coloquial e apelo emocional
              — dirigido a mulheres em geral que se identificam com o papel de mãe. O anúncio B usa
              terminologia técnica (<em>formulación avanzada, ácido hialurónico, pieles maduras, elasticidad</em>)
              — dirigido a consumidoras com maior conhecimento sobre cosméticos, que valorizam a
              fundamentação científica do produto. Ambos são publicidade comercial; a diferença está
              no perfil de receptor e no registro linguístico.
            </p>
          }
        />
      </section>
    </article>
  );
}
