"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 40</span>
          <h1>Temas Contemporâneos Recorrentes no ENEM</h1>
          <p>
            O ENEM de Ciências Humanas conecta filosofia, história, sociologia e geografia
            a problemas contemporâneos: democracia, desigualdade, identidade, ética digital,
            meio ambiente. Este capítulo mapeia os temas mais recorrentes, os filósofos mais
            cobrados e os padrões de questões — para que você chegue à prova reconhecendo
            o que está sendo pedido antes mesmo de ler a última linha.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia</span>
        <h2>1. Democracia em Risco: Autoritarismo, Populismo e Desinformação</h2>
        <p>
          O ENEM frequentemente apresenta textos filosóficos sobre democracia e seus ameaças.
          Os conceitos-chave são:
        </p>
        <ul>
          <li>
            <strong>Hannah Arendt:</strong> o totalitarismo nasce quando a política é substituída
            pela propaganda, o pluralismo pelo pensamento único e a esfera pública pela vigilância
            e controle. A democracia exige a manutenção de um espaço público plural.
          </li>
          <li>
            <strong>Populismo:</strong> Ernesto Laclau e outros analisam o populismo como uma
            lógica política que divide a sociedade em "o povo" vs. "as elites". O populismo pode
            ser democrático ou antidemocrático dependendo de seu conteúdo.
          </li>
          <li>
            <strong>Desinformação:</strong> a circulação de fake news e desinformação nas redes
            sociais compromete a formação de uma esfera pública racional (Habermas), condição
            para a democracia deliberativa.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Hannah Arendt e as origens do totalitarismo</h3>
          <p>
            Em <em>Origens do Totalitarismo</em> (1951), Arendt analisou os regimes nazista e
            stalinista como formas radicalmente novas de dominação: não apenas ditaduras, mas
            sistemas que buscaram eliminar a pluralidade humana, a espontaneidade e o pensamento.
            A "banalidade do mal" — Eichmann em Jerusalém (1963) — mostrou que os maiores crimes
            podem ser cometidos por pessoas "comuns" que simplesmente deixaram de pensar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos Fundamentais</span>
        <h2>2. Cidadania e Direitos Fundamentais na CF/1988</h2>
        <p>
          A Constituição Federal de 1988 é central nas questões do ENEM. Os fundamentos
          filosóficos dos direitos fundamentais são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Geração de Direitos</th><th>Conteúdo</th><th>Fundamento Filosófico</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1ª geração</strong> (civis e políticos)</td>
                <td>Vida, liberdade, propriedade, voto, expressão</td>
                <td>Iluminismo liberal (Locke, Rousseau, Kant)</td>
              </tr>
              <tr>
                <td><strong>2ª geração</strong> (sociais, econômicos, culturais)</td>
                <td>Educação, saúde, trabalho, previdência</td>
                <td>Socialismo, Estado do bem-estar (Marx, Keynes)</td>
              </tr>
              <tr>
                <td><strong>3ª geração</strong> (coletivos/difusos)</td>
                <td>Meio ambiente, paz, desenvolvimento, herança cultural</td>
                <td>Solidariedade, responsabilidade geracional (Jonas)</td>
              </tr>
              <tr>
                <td><strong>4ª geração</strong> (bioética, digital)</td>
                <td>Genoma humano, privacidade digital, IA</td>
                <td>Bioética, ética tecnológica contemporânea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade</span>
        <h2>3. Desigualdade Social e Capitalismo Contemporâneo</h2>
        <p>
          O ENEM frequentemente relaciona Filosofia e desigualdade social. Os principais aportes:
        </p>
        <ul>
          <li>
            <strong>Marx:</strong> a desigualdade é estrutural ao capitalismo — resultado da
            exploração do trabalho (mais-valia) e da propriedade privada dos meios de produção.
          </li>
          <li>
            <strong>Rawls:</strong> numa sociedade justa, as desigualdades só são justificáveis
            se beneficiarem os mais desfavorecidos (princípio da diferença).
          </li>
          <li>
            <strong>Bauman:</strong> na modernidade líquida, a desigualdade se radicaliza:
            enquanto os ricos se globalizam, os pobres ficam "localizados" sem poder de
            mobilidade.
          </li>
          <li>
            <strong>Thomas Piketty:</strong> o retorno do capital supera o crescimento econômico
            (r &gt; g), gerando concentração crescente de riqueza — requerendo redistribuição via
            tributação progressiva.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">IA e Ética</span>
        <h2>4. Inteligência Artificial, Ética e Futuro da Humanidade</h2>
        <p>
          A IA é um dos temas mais presentes no ENEM contemporâneo. As questões filosóficas são:
        </p>
        <ul>
          <li><strong>O que define a inteligência humana?</strong> Pode uma máquina pensar? (Teste de Turing)</li>
          <li><strong>Responsabilidade moral:</strong> quando um sistema de IA causa dano, quem é responsável — o desenvolvedor, a empresa, o usuário, ou a própria IA?</li>
          <li><strong>Vieses algorítmicos:</strong> sistemas de IA treinados em dados históricos perpetuam e amplificam preconceitos de raça, gênero e classe.</li>
          <li><strong>Substituição do trabalho:</strong> a automação redistribui a riqueza ou concentra-a nas mãos de quem possui as máquinas? (Questão marxista atualizada)</li>
          <li><strong>Privacidade e vigilância:</strong> o capitalismo de vigilância (Zuboff) e o controle social pelo Estado.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>A questão filosófica central da IA</h3>
          <p>
            John Searle criou o "quarto chinês" para argumentar que computadores manipulam
            símbolos sem compreendê-los — portanto, não pensam no sentido humano. Para Searle,
            há uma diferença essencial entre <em>sintaxe</em> (manipulação de símbolos) e
            <em>semântica</em> (compreensão de significados). Isso abre o debate: pode uma IA
            ser moralmente responsável ou ter direitos?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saberes Invisibilizados</span>
        <h2>5. Filosofia Africana, Indígena e Saberes do Sul</h2>
        <p>
          O ENEM cada vez mais valoriza saberes filosóficos não-europeus. Os principais:
        </p>
        <ul>
          <li>
            <strong>Ubuntu (África subsaariana):</strong> "Umuntu ngumuntu ngabantu" — "Sou porque
            somos". A pessoa se constitui na relação com a comunidade, não no isolamento
            individual (crítica ao individualismo liberal).
          </li>
          <li>
            <strong>Buen Vivir / Sumak Kawsay (Andes):</strong> bem-viver em harmonia com a
            comunidade e a natureza — alternativa ao modelo desenvolvimentista ocidental.
          </li>
          <li>
            <strong>Filosofia Yorubá (Nigéria):</strong> conceito de Ori (destino individual),
            Ase (força vital), Orunmila (sabedoria) — cosmologia filosófica sofisticada.
          </li>
          <li>
            <strong>Epistemologias do Sul:</strong> Boaventura de Sousa Santos propõe
            "ecologia de saberes" — reconhecimento de que existem múltiplas formas de
            conhecimento válidas além da ciência moderna europeia.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa Temático</span>
        <h2>6. Mapa dos Temas Filosóficos no ENEM</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 280" width="520" height="280" aria-label="Mapa temático dos temas filosóficos no ENEM">
            <rect x="10" y="10" width="500" height="260" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5"/>
            <text x="260" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Filosofia no ENEM: Principais Eixos Temáticos</text>

            <circle cx="260" cy="148" r="38" fill="#4f46e5" stroke="#3730a3" strokeWidth="2"/>
            <text x="260" y="143" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">ENEM</text>
            <text x="260" y="158" textAnchor="middle" fontSize="10" fill="white">Filosofia</text>

            <circle cx="130" cy="80" r="30" fill="#0891b2" stroke="#0e7490" strokeWidth="1.5"/>
            <text x="130" y="75" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Ética e</text>
            <text x="130" y="88" textAnchor="middle" fontSize="9" fill="white">Moral</text>
            <line x1="158" y1="95" x2="227" y2="125" stroke="#94a3b8" strokeWidth="1.5"/>

            <circle cx="390" cy="80" r="30" fill="#16a34a" stroke="#15803d" strokeWidth="1.5"/>
            <text x="390" y="75" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Política e</text>
            <text x="390" y="88" textAnchor="middle" fontSize="9" fill="white">Democracia</text>
            <line x1="362" y1="95" x2="293" y2="125" stroke="#94a3b8" strokeWidth="1.5"/>

            <circle cx="80" cy="200" r="30" fill="#dc2626" stroke="#b91c1c" strokeWidth="1.5"/>
            <text x="80" y="195" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Gênero e</text>
            <text x="80" y="208" textAnchor="middle" fontSize="9" fill="white">Identidade</text>
            <line x1="108" y1="185" x2="227" y2="162" stroke="#94a3b8" strokeWidth="1.5"/>

            <circle cx="440" cy="200" r="30" fill="#d97706" stroke="#b45309" strokeWidth="1.5"/>
            <text x="440" y="195" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Ciência e</text>
            <text x="440" y="208" textAnchor="middle" fontSize="9" fill="white">Tecnologia</text>
            <line x1="412" y1="185" x2="293" y2="162" stroke="#94a3b8" strokeWidth="1.5"/>

            <circle cx="180" cy="248" r="28" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1.5"/>
            <text x="180" y="243" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Meio</text>
            <text x="180" y="256" textAnchor="middle" fontSize="9" fill="white">Ambiente</text>
            <line x1="202" y1="224" x2="247" y2="182" stroke="#94a3b8" strokeWidth="1.5"/>

            <circle cx="340" cy="248" r="28" fill="#0f766e" stroke="#0d9488" strokeWidth="1.5"/>
            <text x="340" y="243" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Desigual-</text>
            <text x="340" y="256" textAnchor="middle" fontSize="9" fill="white">dade</text>
            <line x1="318" y1="224" x2="273" y2="182" stroke="#94a3b8" strokeWidth="1.5"/>
          </svg>
          <figcaption>Os seis principais eixos temáticos de Filosofia no ENEM, todos convergindo para questões de cidadania e humanidade contemporânea.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pós-Verdade</span>
        <h2>7. Fake News, Pós-Verdade e Epistemologia Contemporânea</h2>
        <p>
          O termo <strong>pós-verdade</strong> (palavra do ano do Oxford Dictionary em 2016) descreve
          um contexto em que os fatos objetivos têm menos influência na formação da opinião pública
          do que emoções e crenças pessoais. É um problema filosófico antes de ser apenas político
          ou tecnológico: está em jogo a relação entre verdade, crença e poder.
        </p>
        <p>
          Do ponto de vista epistemológico, a pós-verdade não é apenas desinformação acidental —
          é a instrumentalização deliberada da dúvida. <strong>Hannah Arendt</strong> já havia
          analisado como os regimes totalitários não precisam apenas mentir: eles destroem a
          própria distinção entre verdade e mentira, deixando os cidadãos sem ferramentas para
          avaliar afirmações. A pós-verdade digital opera de forma similar.
        </p>
        <p>
          <strong>Harry Frankfurt</strong> (1929–), em seu ensaio "On Bullshit" (2005), distinguiu
          mentira de <em>bullshit</em>: o mentiroso sabe a verdade e a esconde; o produtor de
          bullshit não se importa se o que diz é verdadeiro ou falso — apenas quer um efeito
          persuasivo. Esse é o mecanismo epistêmico central das fake news: indiferença à verdade.
        </p>
        <div className="lesson-highlight">
          <h3>Habermas e a patologia da esfera pública digital</h3>
          <p>
            Para Habermas, a democracia deliberativa exige uma esfera pública onde cidadãos
            apresentem argumentos racionais e revisem posições à luz de evidências. As redes
            sociais criaram câmaras de eco, amplificam conteúdos emocionais e desinformativos,
            e fragmentam o espaço público em bolhas. Isso representa, para Habermas, uma
            patologia estrutural da esfera pública contemporânea que ameaça as condições
            comunicativas da democracia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde Mental</span>
        <h2>8. Filosofia e Saúde Mental: Ansiedade, Individualismo e Bem-Estar</h2>
        <p>
          A saúde mental tornou-se uma das principais questões sociais do século XXI. A filosofia
          oferece ferramentas para compreender suas raízes estruturais — que vão além da
          explicação bioquímica individual.
        </p>
        <p>
          <strong>Byung-Chul Han</strong> (1959–), filósofo sul-coreano radicado na Alemanha,
          diagnosticou em obras como <em>A Sociedade do Cansaço</em> (2010) e <em>A Sociedade
          da Transparência</em> a crise contemporânea de saúde mental. Para Han, a sociedade
          atual é uma "sociedade do desempenho": substituiu a proibição e a repressão pela
          cobrança de rendimento e produtividade. O resultado não é a liberação — é a depressão
          e o esgotamento. O sujeito contemporâneo não é oprimido por outros: ele se explora a
          si mesmo.
        </p>
        <p>
          A tradição estoica (Marco Aurélio, Epicteto, Sêneca) é frequentemente revisitada como
          filosofia de bem-estar: distinguir o que está em nosso poder do que não está, praticar
          a autossuficiência emocional e a contemplação racional. O neoestoicismo contemporâneo
          e a filosofia como prática terapêutica (Pierre Hadot: "exercícios espirituais") ganham
          relevância no debate sobre saúde mental.
        </p>
        <div className="lesson-highlight">
          <h3>ENEM e saúde mental</h3>
          <p>
            O ENEM tem abordado temas de saúde mental crescentemente — com textos sobre solidão,
            sofrimento psíquico, pressão por produtividade e ansiedade. A perspectiva filosófica
            esperada é social: não basta tratar o indivíduo — é preciso questionar as estruturas
            (capitalismo de desempenho, isolamento digital, precarização do trabalho) que produzem
            o sofrimento psíquico em massa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card"><span>🗳️</span><h3>Democracia</h3><p>Arendt: totalitarismo elimina pluralidade. Habermas: democracia requer esfera pública racional.</p></div>
          <div className="math-card"><span>📜</span><h3>CF/1988</h3><p>4 gerações de direitos fundamentais: civis, sociais, coletivos e bioéticos/digitais.</p></div>
          <div className="math-card"><span>💰</span><h3>Desigualdade</h3><p>Marx: estrutural ao capital. Rawls: só justificável se beneficia os mais desfavorecidos.</p></div>
          <div className="math-card"><span>🤖</span><h3>IA e Ética</h3><p>Responsabilidade, vieses algorítmicos, vigilância, substituição do trabalho — questões centrais.</p></div>
          <div className="math-card"><span>🌍</span><h3>Saberes do Sul</h3><p>Ubuntu, Buen Vivir, ecologia de saberes: múltiplas formas válidas de conhecimento e vida.</p></div>
          <div className="math-card"><span>📝</span><h3>ENEM</h3><p>Conecta filosofia a problemas contemporâneos via texto + questão contextualizada.</p></div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Hannah Arendt e o Totalitarismo"
          statement={<p>Hannah Arendt, em "Origens do Totalitarismo", identificou que os regimes totalitários do século XX (nazismo e stalinismo) se distinguiam das ditaduras tradicionais porque:</p>}
          options={[
            { letter: "a", text: "Utilizavam a violência apenas de forma localizada e nunca contra populações civis." },
            { letter: "b", text: "Buscavam não apenas a obediência política, mas a eliminação da pluralidade e da espontaneidade humanas, transformando pessoas em instrumentos previsíveis.", correct: true },
            { letter: "c", text: "Se baseavam na religião como única fonte de legitimidade do poder político." },
            { letter: "d", text: "Eram formas de governo que não utilizavam a propaganda como instrumento político." },
          ]}
          resolution={<p>Arendt mostrou que o totalitarismo não é apenas uma ditadura mais brutal — é qualitativamente diferente: busca transformar a natureza humana, eliminar a pluralidade (condição da política), e substituir o espaço público pelo terror e pela propaganda. Isso o torna ameaça à política em si, não apenas a uma forma específica de governo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Gerações de Direitos"
          statement={<p>O direito ao meio ambiente ecologicamente equilibrado, previsto no art. 225 da CF/1988, é classificado como direito de terceira geração porque:</p>}
          options={[
            { letter: "a", text: "Foi criado na terceira constituição brasileira." },
            { letter: "b", text: "Protege apenas a terceira geração de cidadãos brasileiros." },
            { letter: "c", text: "É um direito coletivo ou difuso, que não pertence a indivíduos isolados, mas à coletividade presente e futura, fundamentado na solidariedade geracional.", correct: true },
            { letter: "d", text: "Exige três etapas judiciais para ser reivindicado." },
          ]}
          resolution={<p>Os direitos de terceira geração são coletivos ou difusos: não pertencem a indivíduos específicos, mas a grupos, povos ou à humanidade como um todo. O direito ao meio ambiente saudável é o exemplo mais citado: seu titular é a coletividade presente e as gerações futuras, refletindo o princípio da responsabilidade geracional de Hans Jonas.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Ubuntu e Liberalismo"
          statement={<p>O conceito africano Ubuntu ("Sou porque somos") representa uma crítica filosófica ao individualismo liberal ocidental porque:</p>}
          options={[
            { letter: "a", text: "Nega qualquer valor moral ao indivíduo, subordinando-o completamente ao coletivo." },
            { letter: "b", text: "Propõe que a pessoa se constitui fundamentalmente nas relações comunitárias, questionando a premissa liberal do indivíduo pré-social como sujeito originário dos direitos.", correct: true },
            { letter: "c", text: "Defende que o Estado deve ter controle total sobre a vida dos cidadãos africanos." },
            { letter: "d", text: "Sustenta que a democracia liberal é incompatível com culturas não-ocidentais." },
          ]}
          resolution={<p>O liberalismo clássico (Locke, Rawls) parte do indivíduo como sujeito pré-social que contrata com outros para formar a sociedade. Ubuntu inverte essa prioridade: o indivíduo não preexiste à comunidade — é nela e por ela que se constitui como pessoa. Isso não nega a individualidade, mas a situa como relacional, não como ponto de partida isolado.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) IA e Responsabilidade"
          statement={<p>Um sistema de inteligência artificial utilizado para concessão de crédito bancário foi treinado em dados históricos que refletiam preconceitos raciais, resultando em negações desproporcionais para pessoas negras. Do ponto de vista da ética filosófica, esse caso exemplifica o problema de:</p>}
          options={[
            { letter: "a", text: "Responsabilidade individual dos engenheiros que programaram o sistema." },
            { letter: "b", text: "Viés algorítmico: sistemas de IA podem amplificar desigualdades históricas quando treinados em dados que refletem discriminações estruturais, levantando questões sobre responsabilidade difusa e justiça.", correct: true },
            { letter: "c", text: "Incompetência técnica dos cientistas de dados, resolvível por treinamento adicional." },
            { letter: "d", text: "Ineficiência do mercado financeiro em processar dados de forma igualitária." },
          ]}
          resolution={<p>O caso exemplifica o viés algorítmico: a IA "aprende" com dados históricos que refletem discriminações reais, reproduzindo e até amplificando essas discriminações. Filosoficamente, levanta questões sobre: quem é responsável (desenvolvedores? empresa? reguladores?); como garantir que sistemas técnicos não perpetuem injustiças sociais; e os limites da "neutralidade" técnica numa sociedade estruturalmente desigual.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Rawls e a Desigualdade"
          statement={<p>"As desigualdades sociais e econômicas devem ser ordenadas de modo que, ao mesmo tempo, proporcionem a maior expectativa de benefícios aos membros menos favorecidos da sociedade." (John Rawls, adaptado) Com base nesse princípio, qual das políticas abaixo poderia ser justificada rawlsianamente mesmo que gere alguma desigualdade formal?</p>}
          options={[
            { letter: "a", text: "Redução de impostos para os mais ricos com o argumento de que isso gera empregos para todos." },
            { letter: "b", text: "Programas de transferência de renda condicionada às famílias em situação de extrema pobreza, pois beneficiam prioritariamente os mais desfavorecidos.", correct: true },
            { letter: "c", text: "Privatização de serviços públicos essenciais, pois aumenta a eficiência do sistema." },
            { letter: "d", text: "Abolição de qualquer forma de tributação progressiva para garantir igualdade formal." },
          ]}
          resolution={<p>O princípio da diferença de Rawls afirma que desigualdades são justificáveis se, e somente se, beneficiam os menos favorecidos da sociedade. Programas de transferência de renda (como o Bolsa Família) se encaixam nessa justificativa: mesmo que não eliminem todas as desigualdades, beneficiam prioritariamente os mais pobres. A alternativa A (trickle-down economics) não garante que os benefícios cheguem aos mais pobres — é exatamente o que Rawls rejeitaria.</p>}
        />
      </section>
    </article>
  );
}
