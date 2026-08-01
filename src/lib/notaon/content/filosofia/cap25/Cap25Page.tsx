"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 25</span>
          <h1>Direitos Humanos e Ética na Sociedade Contemporânea</h1>
          <p>
            Os direitos humanos são uma das grandes conquistas da humanidade — e um dos temas mais
            cobrados no ENEM. Neste capítulo, traçamos a história, os fundamentos filosóficos e os
            desafios contemporâneos dos direitos humanos, com ênfase no contexto brasileiro.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>1. Surgimento Histórico dos Direitos Humanos</h2>
        <p>
          A ideia de que existem direitos inerentes à condição humana tem raízes no direito natural
          estoico e no pensamento cristão medieval. Mas sua formulação moderna começa com os grandes
          documentos políticos da modernidade:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 180" width="520" height="180" aria-label="Linha do tempo dos direitos humanos">
            {/* Linha */}
            <line x1="30" y1="90" x2="490" y2="90" stroke="#374151" strokeWidth="2"/>
            {/* Pontos e labels */}
            <circle cx="60" cy="90" r="7" fill="#2563eb"/>
            <text x="60" y="75" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">1215</text>
            <text x="60" y="115" textAnchor="middle" fontSize="9" fill="#374151">Magna Carta</text>
            <text x="60" y="127" textAnchor="middle" fontSize="9" fill="#374151">(Inglaterra)</text>

            <circle cx="150" cy="90" r="7" fill="#059669"/>
            <text x="150" y="75" textAnchor="middle" fontSize="10" fill="#065f46" fontWeight="bold">1776</text>
            <text x="150" y="115" textAnchor="middle" fontSize="9" fill="#374151">Declaração</text>
            <text x="150" y="127" textAnchor="middle" fontSize="9" fill="#374151">Independência EUA</text>

            <circle cx="240" cy="90" r="7" fill="#d97706"/>
            <text x="240" y="75" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="bold">1789</text>
            <text x="240" y="115" textAnchor="middle" fontSize="9" fill="#374151">Declaração dos</text>
            <text x="240" y="127" textAnchor="middle" fontSize="9" fill="#374151">Dir. do Homem (FR)</text>

            <circle cx="340" cy="90" r="7" fill="#7c3aed"/>
            <text x="340" y="75" textAnchor="middle" fontSize="10" fill="#5b21b6" fontWeight="bold">1948</text>
            <text x="340" y="115" textAnchor="middle" fontSize="9" fill="#374151">DUDH — ONU</text>

            <circle cx="430" cy="90" r="7" fill="#dc2626"/>
            <text x="430" y="75" textAnchor="middle" fontSize="10" fill="#991b1b" fontWeight="bold">1988</text>
            <text x="430" y="115" textAnchor="middle" fontSize="9" fill="#374151">CF/1988 Brasil</text>
            <text x="430" y="127" textAnchor="middle" fontSize="9" fill="#374151">"Constituição Cidadã"</text>
          </svg>
          <figcaption>Principais marcos históricos na construção dos direitos humanos.</figcaption>
        </figure>
        <p>
          A <strong>Declaração Universal dos Direitos Humanos</strong> (DUDH), aprovada pela ONU em
          10 de dezembro de 1948, em resposta aos horrores da Segunda Guerra Mundial e do Holocausto,
          é o documento fundante do sistema internacional de direitos humanos. Ela proclama direitos
          inerentes a todos os seres humanos, independentemente de raça, cor, sexo, idioma, religião
          ou qualquer outra condição.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gerações</span>
        <h2>2. As Três Gerações (Dimensões) dos Direitos Humanos</h2>
        <p>
          O jurista Karel Vasak (1977) propôs a divisão dos direitos humanos em <strong>três
          gerações</strong>, ligadas aos valores da Revolução Francesa: liberdade, igualdade,
          fraternidade. Hoje preferimos falar em <strong>dimensões</strong>, pois não são
          substituídas, mas acumuladas e interdependentes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Valor</th>
                <th>Período</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1ª — Civis e Políticos</strong></td>
                <td>Liberdade</td>
                <td>Séculos XVII–XVIII</td>
                <td>Vida, liberdade, propriedade, voto, expressão, religião</td>
              </tr>
              <tr>
                <td><strong>2ª — Sociais, Econômicos e Culturais</strong></td>
                <td>Igualdade</td>
                <td>Século XX</td>
                <td>Saúde, educação, trabalho, moradia, previdência</td>
              </tr>
              <tr>
                <td><strong>3ª — Difusos e Coletivos</strong></td>
                <td>Fraternidade</td>
                <td>Final séc. XX</td>
                <td>Meio ambiente, paz, autodeterminação dos povos, patrimônio comum</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Indivisibilidade e universalidade</h3>
          <p>
            A Conferência de Viena (1993) reafirmou que os direitos humanos são
            <strong> universais, indivisíveis, interdependentes e inter-relacionados</strong>. Não é
            possível realizar plenamente os direitos civis sem os direitos sociais, e vice-versa. Um
            povo que passa fome não exerce plenamente sua liberdade de expressão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>3. Fundamentos Filosóficos dos Direitos Humanos</h2>
        <p>
          Diferentes tradições filosóficas justificam os direitos humanos de maneiras distintas:
        </p>
        <ul>
          <li>
            <strong>Direito natural (jusnaturalismo):</strong> há uma lei moral inscrita na natureza
            humana ou na razão, anterior e superior ao direito positivo. Locke, Rousseau e Kant
            desenvolveram versões iluministas dessa ideia.
          </li>
          <li>
            <strong>Dignidade humana (Kant):</strong> o ser humano é um fim em si mesmo, jamais
            apenas um meio. O <em>imperativo categórico</em> kantiano fundamenta a inalienabilidade
            dos direitos: trate a humanidade sempre como fim, nunca apenas como meio.
          </li>
          <li>
            <strong>Contratualismo:</strong> os direitos são acordos entre pessoas racionais para
            garantir a convivência pacífica (Hobbes, Locke, Rousseau, Rawls).
          </li>
          <li>
            <strong>Universalismo pragmático (Rorty):</strong> os direitos humanos não precisam de
            fundamento metafísico; são construções culturais que produzem sentimentos de solidariedade
            e empatia, e que devem ser defendidos pragmaticamente.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Debates</span>
        <h2>4. Universalismo versus Relativismo Cultural</h2>
        <p>
          O <strong>universalismo</strong> sustenta que os direitos humanos valem para todos os seres
          humanos em todos os tempos e culturas, independentemente de tradições locais. O
          <strong> relativismo cultural</strong>, por outro lado, argumenta que os valores morais
          são relativos a cada cultura, e que impor um único padrão de direitos seria uma forma de
          imperialismo cultural ocidental.
        </p>
        <p>
          O debate é especialmente relevante em casos como: mutilação genital feminina, pena de
          morte, trabalho infantil em culturas específicas, direitos das mulheres em sociedades
          patriarcais tradicionais. Filósofas como Martha Nussbaum responderam ao relativismo com
          a <strong>abordagem das capacidades</strong>: há capacidades humanas centrais (saúde,
          razão, afiliação, controle sobre o ambiente) que toda pessoa deve poder desenvolver,
          independentemente da cultura.
        </p>
        <div className="lesson-highlight">
          <h3>Posição do ENEM</h3>
          <p>
            As questões do ENEM sobre direitos humanos geralmente pressupõem o princípio
            universalista — que a dignidade humana transcende fronteiras culturais — e relacionam
            os direitos à democracia, cidadania e combate à discriminação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arendt</span>
        <h2>5. Hannah Arendt: Totalitarismo e Direitos Humanos</h2>
        <p>
          Em <em>As Origens do Totalitarismo</em> (1951), Hannah Arendt analisou como os regimes
          totalitários (nazismo, stalinismo) construíram um sistema que, pela primeira vez na
          história, atacou sistematicamente a própria humanidade dos seres humanos — não apenas
          suas liberdades, mas sua condição de pessoas.
        </p>
        <p>
          Para Arendt, o totalitarismo revelou a fragilidade dos direitos humanos proclamados desde
          1789: ao destituir os judeus da cidadania alemã, o nazismo os expôs como "meros seres
          humanos" — e precisamente por isso vulneráveis, pois os "direitos do homem" sem amparo
          estatal eram ineficazes. Daí a necessidade de um sistema internacional de proteção dos
          direitos humanos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil</span>
        <h2>6. Direitos Humanos no Brasil: CF/1988 e Mecanismos de Proteção</h2>
        <p>
          A Constituição Federal de 1988, promulgada após a ditadura militar (1964–1985), representa
          um marco dos direitos humanos no Brasil:
        </p>
        <ul>
          <li>Artigo 5º: extenso rol de direitos fundamentais individuais e coletivos.</li>
          <li>Artigos 6º–11: direitos sociais (saúde, educação, alimentação, trabalho, lazer, segurança, previdência, proteção à maternidade e à infância, assistência aos desamparados).</li>
          <li>Princípio da prevalência dos direitos humanos nas relações internacionais (Art. 4º, II).</li>
        </ul>
        <p>
          O Brasil também integra o <strong>Sistema Interamericano de Direitos Humanos</strong> (OEA),
          com a Comissão e a Corte Interamericana de Direitos Humanos. Mecanismos internos de proteção
          incluem: Defensoria Pública, Ministério Público, habeas corpus, mandado de segurança,
          ação popular e ação civil pública.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Banalidade do Mal</span>
        <h2>7. Hannah Arendt: A Banalidade do Mal</h2>
        <p>
          Em 1961, Hannah Arendt cobriu, para a revista <em>The New Yorker</em>, o julgamento de
          Adolf Eichmann em Jerusalém — o burocrata nazista responsável pela logística da "Solução
          Final". Ela esperava encontrar um monstro; encontrou um homem comum, sem imaginação e sem
          capacidade de pensar pela perspectiva do outro. Desse choque nasceu o conceito de
          <strong> banalidade do mal</strong>.
        </p>
        <p>
          Para Arendt, o mal radical dos regimes totalitários não exige monstros. Eichmann obedecia
          ordens, seguia procedimentos burocráticos e não se perguntava sobre as consequências morais
          de seus atos. O mal pode ser cometido por pessoas perfeitamente "normais" que simplesmente
          <em> não pensam</em> — que abdicam do julgamento moral autônomo e se submetem à engrenagem
          do sistema.
        </p>
        <div className="lesson-highlight">
          <h3>A dimensão filosófica da banalidade do mal</h3>
          <p>
            Arendt concluiu que a capacidade de pensar — de se perguntar "o que estou fazendo e por
            quê?" — é a principal defesa contra o mal. Quando os seres humanos se transformam em
            meros executores de ordens, renunciam à condição humana. Essa reflexão é central para
            o ENEM: questões sobre totalitarismo, obediência, ética e responsabilidade individual
            frequentemente dialogam com Arendt.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desafios Atuais</span>
        <h2>8. Desafios Contemporâneos: Racismo Estrutural, Violência de Gênero e Direitos das Minorias</h2>
        <p>
          Os direitos humanos são conquistas históricas sempre ameaçadas. Os principais desafios
          contemporâneos incluem violações sistemáticas que atingem grupos específicos da população:
        </p>
        <ul>
          <li>
            <strong>Racismo estrutural:</strong> o racismo não é apenas atitudes individuais
            preconceituosas, mas um sistema histórico de distribuição desigual de poder e recursos
            que afeta estruturalmente pessoas negras e indígenas. Pensadores como Silvio Almeida
            (<em>Racismo Estrutural</em>, 2018) e Frantz Fanon (<em>Os Condenados da Terra</em>,
            1961) analisaram como o racismo é reproduzido por instituições, leis e práticas sociais.
          </li>
          <li>
            <strong>Violência de gênero:</strong> a violência contra mulheres, pessoas LGBTQIA+ e
            outras identidades de gênero representa uma das violações mais graves dos direitos humanos.
            No Brasil, a Lei Maria da Penha (2006) e a Lei do Feminicídio (2015) são respostas
            legislativas a essa realidade.
          </li>
          <li>
            <strong>Direitos dos povos indígenas:</strong> a CF/1988 reconhece direitos territoriais
            e culturais dos povos indígenas; a Convenção 169 da OIT e a Declaração da ONU sobre
            Direitos dos Povos Indígenas reforçam esse reconhecimento internacional.
          </li>
          <li>
            <strong>Direitos dos refugiados e migrantes:</strong> a crise de refugiados global
            (guerras, perseguições, catástrofes climáticas) coloca em xeque a capacidade do sistema
            internacional de proteger efetivamente os direitos humanos de quem não tem Estado.
          </li>
        </ul>
        <p>
          A filósofa Judith Butler cunhou o conceito de <strong>precariedade</strong> para descrever
          como algumas vidas são estruturalmente mais expostas à violência e à morte do que outras —
          e como os direitos humanos precisam reconhecer essa distribuição desigual da vulnerabilidade.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📜</span>
            <h3>DUDH 1948</h3>
            <p>Resposta ao Holocausto. Proclama direitos universais, inalienáveis e indivisíveis.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>3 Dimensões</h3>
            <p>1ª: liberdades civis. 2ª: direitos sociais. 3ª: direitos difusos/ambientais.</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Universalismo</h3>
            <p>Dignidade humana transcende culturas. Kant: o ser humano é fim em si mesmo.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Relativismo</h3>
            <p>Valores são culturais. Debate com universalismo — Nussbaum e abordagem das capacidades.</p>
          </div>
          <div className="math-card">
            <span>📖</span>
            <h3>Arendt</h3>
            <p>Totalitarismo destruiu cidadania. "Direito a ter direitos" — pertencer a comunidade política.</p>
          </div>
          <div className="math-card">
            <span>🇧🇷</span>
            <h3>CF/1988</h3>
            <p>"Constituição Cidadã" — amplo rol de direitos individuais e sociais após ditadura.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Gerações dos Direitos Humanos"
          statement={<p>Os direitos à saúde, à educação, ao trabalho e à moradia são classificados como direitos humanos de qual dimensão?</p>}
          options={[
            { letter: "a", text: "Primeira dimensão (direitos civis e políticos)." },
            { letter: "b", text: "Segunda dimensão (direitos sociais, econômicos e culturais).", correct: true },
            { letter: "c", text: "Terceira dimensão (direitos difusos e coletivos)." },
            { letter: "d", text: "Quarta dimensão (direitos à democracia e à informação)." },
          ]}
          resolution={<p>Os <strong>direitos sociais, econômicos e culturais</strong> constituem a segunda dimensão dos direitos humanos, ligada ao valor da igualdade. Surgiram como resposta às desigualdades produzidas pelo capitalismo industrial no século XIX e foram consolidados no século XX, com as constituições sociais (como a de Weimar, 1919) e documentos internacionais como o Pacto Internacional de Direitos Econômicos, Sociais e Culturais (1966).</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Universalismo e Relativismo Cultural"
          statement={<p>O debate entre universalismo e relativismo cultural nos direitos humanos coloca em oposição:</p>}
          options={[
            { letter: "a", text: "A defesa de direitos válidos para toda a humanidade e a afirmação de que os valores morais são relativos a cada cultura.", correct: true },
            { letter: "b", text: "Os direitos civis e políticos e os direitos sociais e econômicos." },
            { letter: "c", text: "O direito positivo e o direito natural, sem relação com culturas específicas." },
            { letter: "d", text: "A posição dos países desenvolvidos contra os países em desenvolvimento." },
          ]}
          resolution={<p>O <strong>universalismo</strong> afirma que direitos humanos valem para todos os seres humanos em qualquer cultura — baseando-se na dignidade humana (Kant) ou no direito natural. O <strong>relativismo cultural</strong> argumenta que os valores morais são construções históricas e culturais, e que impor um padrão único seria imperialismo. A Conferência de Viena (1993) reafirmou o universalismo, mas reconheceu especificidades regionais.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Fundamento Kantiano dos Direitos Humanos"
          statement={<p>O imperativo categórico de Kant — "age de tal forma que uses a humanidade, tanto na tua pessoa como na pessoa de qualquer outro, sempre simultaneamente como fim e nunca meramente como meio" — fundamenta os direitos humanos porque:</p>}
          options={[
            { letter: "a", text: "Autoriza a exploração de seres humanos desde que contribuam para o bem-estar coletivo." },
            { letter: "b", text: "Proclama que os direitos humanos são relativos à cultura de cada povo." },
            { letter: "c", text: "Afirma a dignidade inalienável de todo ser humano, proibindo que seja tratado como mero instrumento.", correct: true },
            { letter: "d", text: "Estabelece que apenas os cidadãos racionais adultos são portadores de direitos." },
          ]}
          resolution={<p>Kant estabelece que todo ser humano possui <strong>dignidade</strong> — um valor absoluto e incomparável que proíbe sua instrumentalização. Isso é o fundamento filosófico da inalienabilidade dos direitos humanos: nenhum ser humano pode ser reduzido a meio para fins alheios, nem mesmo por razões utilitárias (o bem da maioria não justifica torturar um inocente). Esta é a base da proibição da tortura e dos crimes contra a humanidade no direito internacional.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) DUDH e Totalitarismo"
          statement={
            <p>
              "Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade." (Artigo 1º, Declaração Universal dos Direitos Humanos, ONU, 1948)<br/><br/>
              A promulgação da DUDH em 1948, logo após a Segunda Guerra Mundial, está diretamente relacionada a:
            </p>
          }
          options={[
            { letter: "a", text: "À necessidade de criação de um mercado comum internacional entre as potências vencedoras." },
            { letter: "b", text: "À resposta da comunidade internacional às atrocidades do totalitarismo e do Holocausto.", correct: true },
            { letter: "c", text: "Ao interesse dos países colonizadores em manter o domínio sobre seus impérios." },
            { letter: "d", text: "À reação contra a expansão do socialismo soviético nos países do Ocidente." },
          ]}
          resolution={<p>A DUDH foi adotada em 10 de dezembro de 1948, impulsionada pelo horror provocado pelo nazismo: o genocídio de judeus, ciganos, homossexuais e outras minorias revelou que os Estados podiam ser agentes de violações massivas dos direitos humanos. A ONU criou um sistema de proteção internacional com o objetivo de que tais atrocidades nunca mais acontecessem (<em>never again</em>). O preâmbulo da DUDH menciona explicitamente "atos bárbaros que ultrajaram a consciência da humanidade".</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Direitos Humanos e CF/1988"
          statement={
            <p>
              A Constituição Federal brasileira de 1988 estabelece, em seu artigo 4º, que o Brasil rege-se nas relações internacionais, entre outros princípios, pela "prevalência dos direitos humanos". Internamente, o artigo 5º garante uma série de direitos individuais, incluindo a igualdade perante a lei sem distinção de qualquer natureza.<br/><br/>
              Qual instrumento constitucional protege o cidadão contra prisão ilegal ou violação da liberdade de locomoção?
            </p>
          }
          options={[
            { letter: "a", text: "Mandado de segurança." },
            { letter: "b", text: "Ação popular." },
            { letter: "c", text: "Habeas corpus.", correct: true },
            { letter: "d", text: "Mandado de injunção." },
          ]}
          resolution={<p>O <strong>habeas corpus</strong> (do latim: "que tenhas o corpo") é o instrumento constitucional que protege a <strong>liberdade de locomoção</strong> contra prisão ilegal, arbitrária ou abusiva. Está previsto no Art. 5º, LXVIII da CF/1988. Os outros instrumentos têm funções distintas: o mandado de segurança protege direito líquido e certo contra ato de autoridade; a ação popular protege o patrimônio público; o mandado de injunção exige regulamentação de direitos constitucionais não regulamentados.</p>}
        />
      </section>
    </article>
  );
}
