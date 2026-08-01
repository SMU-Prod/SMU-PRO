"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 30</span>
          <h1>Mídia, Opinião Pública e Formação Política</h1>
          <p>
            A mídia não apenas informa — ela seleciona, enquadra e hierarquiza a realidade.
            Entender como os meios de comunicação de massa moldam a opinião pública e os processos
            democráticos é fundamental para a leitura crítica de textos e charges no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meios de Comunicação</span>
        <h2>1. Meios de Comunicação de Massa</h2>
        <p>
          Os <strong>meios de comunicação de massa</strong> (mass media) são tecnologias capazes de
          transmitir mensagens para grandes audiências simultâneas. Sua evolução histórica transformou
          radicalmente a forma como as sociedades se informam, debatem e se organizam politicamente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de mídia</th>
                <th>Surgimento</th>
                <th>Alcance</th>
                <th>Característica marcante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Imprensa escrita</td>
                <td>Séc. XV (Gutenberg, 1450)</td>
                <td>Regional/nacional</td>
                <td>Permanência; análise aprofundada; acesso limitado pela alfabetização</td>
              </tr>
              <tr>
                <td>Rádio</td>
                <td>Anos 1920</td>
                <td>Nacional/internacional</td>
                <td>Alcance popular; independe de alfabetização; imediato; Getúlio Vargas o utilizou na "Hora do Brasil"</td>
              </tr>
              <tr>
                <td>Televisão</td>
                <td>Anos 1950 (no Brasil: 1950, TV Tupi)</td>
                <td>Nacional/massivo</td>
                <td>Imagem + som; poder de agenda; telenovelas como vetor cultural</td>
              </tr>
              <tr>
                <td>Internet</td>
                <td>Anos 1990 (popularização)</td>
                <td>Global/descentralizado</td>
                <td>Bidirecional; personalização; redes sociais; desinformação</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Indústria cultural e mass media</h3>
          <p>
            Para Adorno e Horkheimer (Escola de Frankfurt), os meios de comunicação de massa
            compõem a <strong>indústria cultural</strong>: produzem cultura como mercadoria,
            padronizando gostos e neutralizando a capacidade crítica do público. A TV e as
            plataformas de streaming contemporâneas exemplificam essa lógica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agenda-Setting e Framing</span>
        <h2>2. Como a Mídia Molda o Debate Público</h2>
        <p>
          A mídia não nos diz <em>o que pensar</em>, mas nos diz <em>sobre o que pensar</em> —
          essa é a essência da <strong>teoria do agenda-setting</strong>, desenvolvida por
          Maxwell McCombs e Donald Shaw nos anos 1970.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Fluxo de influência da mídia na opinião pública">
            <rect x={10} y={75} width={130} height={50} rx={10} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={75} y={97} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Realidade</text>
            <text x={75} y={114} textAnchor="middle" fontSize={11} fill="#78350f">Eventos e fatos</text>

            <polygon points="145,100 175,90 175,110" fill="#9ca3af" />

            <rect x={180} y={65} width={140} height={70} rx={10} fill="#e0f2fe" stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={250} y={87} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0c4a6e">Gatekeeping</text>
            <text x={250} y={104} textAnchor="middle" fontSize={11} fill="#075985">Seleção + hierarquia</text>
            <text x={250} y={120} textAnchor="middle" fontSize={10} fill="#075985">da mídia</text>

            <polygon points="325,100 355,90 355,110" fill="#9ca3af" />

            <rect x={360} y={65} width={140} height={70} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={430} y={87} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4c1d95">Agenda pública</text>
            <text x={430} y={104} textAnchor="middle" fontSize={11} fill="#3b0764">O que o público</text>
            <text x={430} y={120} textAnchor="middle" fontSize={10} fill="#3b0764">considera importante</text>

            <polygon points="505,100 535,90 535,110" fill="#9ca3af" />

            <rect x={540} y={65} width={130} height={70} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={605} y={87} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Opinião pública</text>
            <text x={605} y={104} textAnchor="middle" fontSize={11} fill="#166534">e comportamento</text>
            <text x={605} y={120} textAnchor="middle" fontSize={10} fill="#166534">político/eleitoral</text>

            <text x={340} y={30} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">Teoria do Agenda-Setting (McCombs e Shaw, 1972)</text>
            <text x={340} y={175} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">A mídia não reflete a realidade — ela a constrói seletivamente.</text>
          </svg>
          <figcaption>Do evento ao comportamento eleitoral: o fluxo de influência da mídia.</figcaption>
        </figure>

        <p>
          O <strong>framing</strong> (enquadramento) é um passo além: a mídia não apenas seleciona
          quais temas cobrir, mas também como apresentá-los. A mesma greve de trabalhadores pode
          ser enquadrada como "manifestação legítima por direitos" ou como "baderna que prejudica
          a economia" — o enquadramento escolhido molda a percepção do público.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Agenda-setting</h3>
            <p>A mídia define <em>quais</em> temas entram no debate público, tornando uns visíveis e outros invisíveis.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Framing</h3>
            <p>A mídia define <em>como</em> um tema é apresentado — o ângulo, as fontes, a linguagem e as imagens escolhidas.</p>
          </div>
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Priming</h3>
            <p>Ao destacar certos temas repetidamente, a mídia influencia os critérios que o público usa para avaliar políticos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desinformação</span>
        <h2>3. Fake News, Desinformação e Pós-Verdade</h2>
        <p>
          A expansão das redes sociais digitais criou um ambiente propício à circulação de
          <strong> desinformação</strong> — informações falsas ou distorcidas que se disseminam
          rapidamente graças aos algoritmos de engajamento, que priorizam conteúdos emocionalmente
          provocadores.
        </p>
        <p>
          O termo <strong>pós-verdade</strong> (Oxford Word of the Year 2016) designa um contexto
          em que apelos emocionais e crenças pessoais têm mais peso na formação da opinião do que
          fatos objetivos e verificáveis. As eleições de 2016 nos EUA e o referendo do Brexit
          tornaram esse fenômeno evidente para o mundo.
        </p>

        <div className="lesson-highlight">
          <h3>Câmaras de eco e bolhas algorítmicas</h3>
          <p>
            Os algoritmos das redes sociais aprendem as preferências do usuário e mostram
            conteúdos que reforçam suas crenças, criando <strong>câmaras de eco</strong>:
            espaços onde o indivíduo só é exposto a opiniões semelhantes às suas, aprofundando
            a polarização política e dificultando o diálogo democrático.
          </p>
        </div>

        <ul>
          <li><strong>Desinformação:</strong> informação falsa difundida <em>intencionalmente</em>.</li>
          <li><strong>Misinformação:</strong> informação falsa difundida <em>sem intenção</em> de enganar.</li>
          <li><strong>Malinformação:</strong> informação verdadeira usada <em>com intenção de causar dano</em>.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concentração Midiática</span>
        <h2>4. Concentração de Mídia no Brasil</h2>
        <p>
          O Brasil possui uma das maiores concentrações de propriedade midiática do mundo. Famílias
          políticas e econômicas controlam a maioria dos veículos de comunicação, o que levanta
          questões sobre pluralidade e independência editorial.
        </p>
        <p>
          O <strong>Sistema Globo</strong> (família Marinho) é o maior conglomerado de mídia do país,
          controlando canais de TV, rádios, portais de internet e revistas. Outros grupos relevantes
          incluem o SBT (Silvio Santos), Record (Igreja Universal), Band e Grupo RBS. A Constituição
          de 1988 (Art. 220) proíbe monopólio e oligopólio nos meios de comunicação, mas a regulação
          efetiva ainda é considerada insuficiente por pesquisadores.
        </p>

        <div className="lesson-highlight">
          <h3>Por que a concentração midiática é um problema democrático?</h3>
          <p>
            Quando poucos grupos controlam o que a maioria da população vê, ouve e lê, a diversidade
            de perspectivas diminui. Minorias, movimentos sociais e grupos políticos alternativos
            ficam sub-representados ou distorcidos na cobertura. A regulação da mídia é, portanto,
            uma questão de <strong>saúde democrática</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escola de Frankfurt</span>
        <h2>5. Indústria Cultural e Escola de Frankfurt</h2>
        <p>
          A <strong>Escola de Frankfurt</strong> — grupo de intelectuais alemães associados ao Instituto
          de Pesquisa Social fundado em 1923 — desenvolveu uma das críticas mais influentes à cultura
          de massas. Theodor Adorno e Max Horkheimer, exilados nos Estados Unidos durante o nazismo,
          publicaram em 1944 a <em>Dialética do Esclarecimento</em>, obra em que forjaram o conceito
          de <strong>indústria cultural</strong>.
        </p>
        <p>
          Para Adorno e Horkheimer, os meios de comunicação de massa — rádio, cinema, revistas e,
          depois, televisão — não produzem cultura no sentido artístico e crítico do termo. Produzem
          mercadorias culturais padronizadas, desenhadas para o consumo passivo. O objetivo não é
          iluminar ou emancipar o público, mas entretê-lo e mantê-lo conformado com a ordem
          existente. A aparente variedade de produtos culturais é ilusória: por baixo das diferenças
          superficiais, há uma mesma lógica de padronização e <strong>pseudoindividualização</strong>
          — produtos ligeiramente diferentes que dão ao consumidor a sensação de escolha sem a
          substância da autonomia.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Arte autônoma (cultura crítica)</th>
                <th>Indústria cultural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Objetivo</strong></td>
                <td>Questionar, provocar, emancipar</td>
                <td>Entreter, conformar, vender</td>
              </tr>
              <tr>
                <td><strong>Produção</strong></td>
                <td>Singular, resultado de criação individual ou coletiva autêntica</td>
                <td>Padronizada, serializada, produção em massa</td>
              </tr>
              <tr>
                <td><strong>Consumidor</strong></td>
                <td>Sujeito crítico e ativo</td>
                <td>Consumidor passivo e manipulável</td>
              </tr>
              <tr>
                <td><strong>Relação com o poder</strong></td>
                <td>Pode confrontar e denunciar estruturas de poder</td>
                <td>Reproduz e legitima a ordem vigente</td>
              </tr>
              <tr>
                <td><strong>Exemplos contemporâneos</strong></td>
                <td>Cinema de autor, literatura experimental, arte de rua</td>
                <td>Streaming de séries padronizadas, reality shows, pop music algorítmica</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A crítica marxista à cultura de massas</h3>
          <p>
            A teoria da indústria cultural é uma crítica marxista: a cultura, na sociedade capitalista,
            torna-se mais uma forma de extração de mais-valia e de controle ideológico. O trabalhador,
            após uma jornada alienante, consome cultura igualmente alienante no tempo livre — o que
            Adorno chamou de <strong>"tempo livre administrado"</strong>. A diversão não regenera a
            capacidade crítica; ela a adormece ainda mais. Para o ENEM, o conceito opõe-se à ideia de
            que a mídia de massa é neutra ou libertadora.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Digital</span>
        <h2>6. Redes Sociais, Algoritmos e Democracia Digital</h2>
        <p>
          As plataformas de redes sociais — Facebook, Instagram, TikTok, X (ex-Twitter) e YouTube —
          são movidas por algoritmos de <strong>maximização do engajamento</strong>: o conteúdo que
          gera mais cliques, comentários e compartilhamentos é amplificado, independentemente de sua
          veracidade. A atenção humana, nesse modelo, é o produto vendido aos anunciantes — o que
          Shoshana Zuboff chama de <strong>capitalismo de vigilância</strong>.
        </p>
        <p>
          Esse mecanismo tem consequências democráticas profundas. Conteúdos que provocam indignação
          e medo geram mais engajamento do que análises equilibradas, favorecendo a desinformação.
          As <strong>câmaras de eco</strong> resultantes aprofundam a polarização política e
          fragilizam a base de fatos compartilhados que toda democracia deliberativa exige. Ao mesmo
          tempo, as redes sociais democratizaram a voz pública — movimentos como o Árabe Spring
          (2010–2012) e as Jornadas de Junho de 2013 no Brasil usaram as redes para mobilizar
          multidões sem estrutura partidária tradicional.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 660 200" width="660" height="200" aria-label="Ciclo de retroalimentação algorítmica">
            <defs>
              <marker id="arr30" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6d28d9" />
              </marker>
            </defs>
            <rect x={10} y={70} width={120} height={60} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={70} y={97} textAnchor="middle" fontSize={12} fontWeight={700} fill="#4c1d95">Usuário</text>
            <text x={70} y={114} textAnchor="middle" fontSize={11} fill="#4c1d95">interage</text>
            <line x1={130} y1={100} x2={175} y2={100} stroke="#6d28d9" strokeWidth={1.5} markerEnd="url(#arr30)" />

            <rect x={180} y={70} width={130} height={60} rx={10} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={245} y={93} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a8a">Algoritmo</text>
            <text x={245} y={110} textAnchor="middle" fontSize={11} fill="#1e40af">aprende perfil</text>
            <text x={245} y={123} textAnchor="middle" fontSize={10} fill="#1e40af">e amplifica</text>
            <line x1={310} y1={100} x2={355} y2={100} stroke="#6d28d9" strokeWidth={1.5} markerEnd="url(#arr30)" />

            <rect x={360} y={70} width={130} height={60} rx={10} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={425} y={93} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Câmara de eco</text>
            <text x={425} y={110} textAnchor="middle" fontSize={11} fill="#78350f">só vê o que</text>
            <text x={425} y={123} textAnchor="middle" fontSize={10} fill="#78350f">confirma crenças</text>
            <line x1={490} y1={100} x2={535} y2={100} stroke="#6d28d9" strokeWidth={1.5} markerEnd="url(#arr30)" />

            <rect x={540} y={70} width={110} height={60} rx={10} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} />
            <text x={595} y={93} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7f1d1d">Polarização</text>
            <text x={595} y={110} textAnchor="middle" fontSize={11} fill="#7f1d1d">e desinfor-</text>
            <text x={595} y={123} textAnchor="middle" fontSize={10} fill="#7f1d1d">mação</text>

            <path d="M595,130 Q595,175 330,175 Q65,175 65,130" stroke="#6d28d9" strokeWidth={1.5} fill="none" markerEnd="url(#arr30)" />
            <text x={330} y={192} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">ciclo de retroalimentação — aprofunda polarização a cada volta</text>
          </svg>
          <figcaption>O ciclo algorítmico: engajamento → perfil → câmara de eco → polarização → mais engajamento.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Democracia e redes: ambivalência</h3>
          <p>
            As redes sociais são ambivalentes: democratizaram a voz pública e viabilizaram movimentos
            sem liderança centralizada, mas também criaram infraestrutura ideal para desinformação,
            discurso de ódio e manipulação eleitoral. O desafio democrático contemporâneo é como
            regular plataformas privadas que exercem poder público sem sacrificar a liberdade de
            expressão — uma das tensões mais importantes do direito digital no século XXI.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mídia e Política</span>
        <h2>7. Mídia e Poder Político no Brasil</h2>
        <p>
          No Brasil, a relação entre mídia e política é historicamente íntima e controversa. A
          <strong> Rede Globo</strong>, fundada em 1965 com apoio do regime militar e da empresa
          norte-americana Time-Life, tornou-se o maior conglomerado de mídia da América Latina.
          Seu papel na cobertura de eventos políticos críticos — como as eleições de 1989 (edição
          do debate Lula-Collor) e o impeachment de Fernando Collor em 1992 — gerou debates
          permanentes sobre a influência midiática sobre a democracia.
        </p>
        <p>
          No processo de impeachment de Dilma Rousseff (2016), pesquisas mostraram que a cobertura
          da mídia tradicional foi predominantemente favorável ao processo de destituição, enquanto
          a mídia alternativa digital sustentava narrativas contrapostas. Esse episódio evidenciou
          a <strong>polarização midiática</strong> que marcou o Brasil entre 2018 e 2022, com a
          ascensão de canais digitais bolsonaristas desafiando a hegemonia da mídia tradicional.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Principais veículos</th>
                <th>Alcance</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Grupo Globo</strong></td>
                <td>TV Globo, GloboNews, O Globo, Rádio CBN, streaming Globoplay</td>
                <td>Nacional/dominante</td>
                <td>Maior audiência televisiva; família Marinho; influência política reconhecida</td>
              </tr>
              <tr>
                <td><strong>Grupo Record</strong></td>
                <td>TV Record, R7, Rádio Jovem Pan News</td>
                <td>Nacional</td>
                <td>Controlado pela Igreja Universal (Edir Macedo); segundo maior em audiência</td>
              </tr>
              <tr>
                <td><strong>Grupo SBT</strong></td>
                <td>SBT, Rádios locais</td>
                <td>Nacional</td>
                <td>Família Abravanel; entretenimento popular e programação infantil</td>
              </tr>
              <tr>
                <td><strong>Grupo Bandeirantes</strong></td>
                <td>Band, BandNews TV, Rádio BandNews</td>
                <td>Nacional</td>
                <td>Família Saad; cobertura esportiva e jornalismo econômico</td>
              </tr>
              <tr>
                <td><strong>Folha de S.Paulo / UOL</strong></td>
                <td>Jornal Folha de S.Paulo, UOL (maior portal do Brasil)</td>
                <td>Nacional/digital</td>
                <td>Família Frias; maior circulação impressa + maior portal digital</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Legislação e mídia eleitoral</h3>
          <p>
            A Lei das Eleições (Lei 9.504/1997) garante o <strong>Horário Eleitoral Gratuito</strong>
            no rádio e na TV — tempo dividido proporcionalmente entre os partidos com representação
            no Congresso. Isso cria uma assimetria: partidos maiores têm mais tempo de mídia,
            reforçando a concentração de poder. A Resolução do TSE regulamenta o uso das redes
            sociais nas eleições, proibindo impulsionamento pago de conteúdo no período eleitoral.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Jornalismo Crítico</span>
        <h2>8. Jornalismo, Fact-Checking e Verificação</h2>
        <p>
          O <strong>jornalismo profissional</strong> é construído sobre princípios que o distinguem
          da propaganda e da desinformação: verificação de fatos antes da publicação, separação
          entre notícia e opinião, ouvir as partes envolvidas, identificar fontes e servir ao
          interesse público. Esses princípios foram sistematizados no século XX e estão em crise
          no ambiente digital contemporâneo.
        </p>
        <p>
          A crise econômica do jornalismo é estrutural: a migração das receitas de publicidade para
          Google e Meta reduziu drasticamente as fontes de financiamento dos veículos tradicionais.
          Redações foram enxugadas, repórteres demitidos e a pressão por velocidade (publicar
          primeiro) compete com a pressão por precisão (verificar antes). Nesse contexto, o
          <strong> fact-checking</strong> surge como prática especializada de verificação de
          afirmações de figuras públicas e conteúdos virais.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Agência Lupa</h3>
            <p>Primeira agência de fact-checking do Brasil (2015). Verifica afirmações de políticos e conteúdos virais, classificando-os em Verdadeiro, Falso, Exagerado, Subestimado, Contraditório e Insustentável.</p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Aos Fatos</h3>
            <p>Plataforma de verificação fundada em 2015; parceira do Facebook no programa de combate à desinformação. Monitora o discurso presidencial em tempo real durante mandatos.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>G1 Fato ou Fake</h3>
            <p>Iniciativa da Rede Globo/G1 de checagem de conteúdos virais nas redes sociais, com foco em saúde, política e segurança pública.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Comprova</h3>
            <p>Coalizão de 24 veículos jornalísticos brasileiros que verificam conteúdos suspeitos durante períodos eleitorais — modelo colaborativo de fact-checking.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Limites do fact-checking</h3>
          <p>
            O fact-checking tem limitações reconhecidas pelos próprios verificadores: é mais eficaz
            contra mentiras factuais verificáveis do que contra narrativas enganosas parcialmente
            verdadeiras, opiniões apresentadas como fatos ou desinformação por omissão. Pesquisas
            mostram que correções nem sempre mudam crenças já formadas — o fenômeno do
            <strong> backfire effect</strong> (efeito de retrocesso) indica que, em certos contextos,
            a correção pode reforçar a crença equivocada nos mais motivados ideologicamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regulação</span>
        <h2>9. Regulação das Mídias Digitais e Liberdade de Expressão</h2>
        <p>
          A regulação das plataformas digitais é um dos debates políticos e jurídicos mais intensos
          da atualidade. De um lado, defensores da regulação argumentam que as big techs exercem
          poder público sem responsabilidade democrática — decidem unilateralmente o que pode ou não
          ser publicado, amplificam conteúdos prejudiciais por incentivo de engajamento e coletam
          dados pessoais em escala. Do outro, críticos alertam que a regulação pode tornar-se
          instrumento de censura governamental à liberdade de expressão.
        </p>
        <p>
          O <strong>Marco Civil da Internet</strong> (Lei 12.965/2014) foi pioneiro no mundo ao
          estabelecer princípios como neutralidade da rede, proteção da privacidade e
          responsabilização civil das plataformas apenas quando descumprirem ordem judicial de
          remoção (não por conteúdo de terceiros). A <strong>LGPD</strong> (Lei Geral de Proteção
          de Dados, Lei 13.709/2018) regulamentou o uso de dados pessoais por empresas digitais.
          O debate sobre um "PL das Fake News" movimentou o Congresso e o STF especialmente em
          2020-2023.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marco regulatório</th>
                <th>Ano</th>
                <th>O que regula</th>
                <th>Impacto principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Marco Civil da Internet</strong></td>
                <td>2014</td>
                <td>Direitos e deveres na internet brasileira</td>
                <td>Neutralidade da rede, privacidade, responsabilidade das plataformas por conteúdo de terceiros</td>
              </tr>
              <tr>
                <td><strong>LGPD</strong></td>
                <td>2018 (vigência 2020)</td>
                <td>Dados pessoais de usuários</td>
                <td>Consentimento informado, direito ao esquecimento, ANPD como órgão fiscalizador</td>
              </tr>
              <tr>
                <td><strong>Resolução TSE</strong></td>
                <td>Atualizada a cada eleição</td>
                <td>Uso das redes sociais em campanhas</td>
                <td>Proíbe impulsionamento pago; regula horário eleitoral digital</td>
              </tr>
              <tr>
                <td><strong>Lei Europeia de IA (UE)</strong></td>
                <td>2024</td>
                <td>Sistemas de inteligência artificial de alto risco</td>
                <td>Classificação de risco, transparência obrigatória, proibição de IA de vigilância de massa</td>
              </tr>
              <tr>
                <td><strong>Digital Services Act (UE)</strong></td>
                <td>2022</td>
                <td>Plataformas digitais na União Europeia</td>
                <td>Obrigação de transparência algorítmica, remoção de conteúdo ilegal, auditoria de risco</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Liberdade de expressão vs. combate à desinformação</h3>
          <p>
            A tensão central nesse debate: onde termina a liberdade de expressão e começa a
            desinformação perigosa? O STF brasileiro decidiu, em 2023, que o Marco Civil não
            protege plataformas que não agirem após notificação extrajudicial em casos de
            desinformação eleitoral. A tendência global é pela responsabilização crescente das
            plataformas — mas o critério de definição de "desinformação" permanece
            politicamente disputado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Mídia e Opinião Pública no ENEM</h2>
        <p>
          Mídia e comunicação aparecem no ENEM principalmente em questões que pedem a identificação
          de conceitos a partir de trechos de textos acadêmicos, charges políticas ou dados sobre
          consumo de informação. Os conceitos mais cobrados são os da teoria do agenda-setting e
          as críticas à indústria cultural da Escola de Frankfurt.
        </p>
        <p>
          O ENEM frequentemente apresenta situações concretas (uma manchete, um gráfico de uso de
          redes sociais, uma charge sobre fake news) e pede que o estudante identifique o fenômeno
          sociológico. A chave é dominar a distinção entre <em>agenda-setting</em> (o que pensar),
          <em>framing</em> (como pensar) e <em>priming</em> (com que critério avaliar).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Autor/Origem</th>
                <th>Exemplo para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Agenda-setting</strong></td>
                <td>A mídia define sobre o que o público pensa (pauta de temas)</td>
                <td>McCombs e Shaw (1972)</td>
                <td>Cobertura excessiva de violência cria percepção de que criminalidade aumentou mesmo quando não aumentou</td>
              </tr>
              <tr>
                <td><strong>Framing</strong></td>
                <td>A mídia define como um tema é apresentado (enquadramento)</td>
                <td>Goffman / Entman</td>
                <td>Mesma greve coberta como "caos" por um jornal e "direito" por outro</td>
              </tr>
              <tr>
                <td><strong>Priming</strong></td>
                <td>A cobertura repetida de um tema influencia os critérios de avaliação dos políticos</td>
                <td>Iyengar e Kinder</td>
                <td>Cobertura intensa de corrupção faz eleitores avaliarem candidatos sobretudo pela honestidade</td>
              </tr>
              <tr>
                <td><strong>Indústria cultural</strong></td>
                <td>Sistema de produção padronizada de cultura para consumo de massa, neutralizando a crítica</td>
                <td>Adorno / Horkheimer (1944)</td>
                <td>Streaming padroniza narrativas; pseudoindividualização dá ilusão de escolha</td>
              </tr>
              <tr>
                <td><strong>Câmara de eco</strong></td>
                <td>Ambiente digital onde o usuário só encontra opiniões que confirmam suas crenças</td>
                <td>Sunstein / algoritmos</td>
                <td>Feed de rede social que só mostra conteúdo de uma corrente política</td>
              </tr>
              <tr>
                <td><strong>Pós-verdade</strong></td>
                <td>Contexto em que apelos emocionais prevalecem sobre fatos verificáveis na formação da opinião</td>
                <td>Oxford (2016)</td>
                <td>Afirmação sem evidência é compartilhada por ser "emocionalmente verdadeira" para o receptor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dicas de prova — Armadilhas comuns</h3>
          <p>
            <strong>1.</strong> Agenda-setting ≠ determinar o que pensar: a mídia define <em>sobre o que</em> pensar, não <em>o que</em> pensar.{" "}
            <strong>2.</strong> Indústria cultural ≠ toda a cultura produzida industrialmente: o conceito é crítico — refere-se à cultura como mercadoria conformista, não à tecnologia de produção em si.{" "}
            <strong>3.</strong> Câmara de eco ≠ censura: a câmara de eco resulta de filtragem algorítmica e auto-seleção, não de proibição governamental de conteúdo.{" "}
            <strong>4.</strong> Pós-verdade ≠ mentira: é um contexto em que a verdade factual perde relevância relativa — mentiras e verdades coexistem, mas o critério de escolha não é a verificação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Agenda-setting"
          statement={
            <p>
              A teoria do <strong>agenda-setting</strong>, desenvolvida por McCombs e Shaw, afirma que a mídia:
            </p>
          }
          options={[
            { letter: "A", text: <>Determina diretamente o que as pessoas pensam sobre cada tema.</> },
            { letter: "B", text: <>Não exerce nenhuma influência sobre a opinião pública.</> },
            { letter: "C", text: <>Define quais temas entram no debate público, influenciando sobre o que as pessoas pensam.</>, correct: true },
            { letter: "D", text: <>Funciona apenas em regimes autoritários, onde há censura.</> },
            { letter: "E", text: <>É completamente substituída pelas redes sociais no século XXI.</> },
          ]}
          resolution={
            <p>
              A teoria do agenda-setting afirma que a mídia não diz <em>o que pensar</em>, mas
              define <em>sobre o que pensar</em> — selecionando e hierarquizando os temas que
              ganham visibilidade pública, moldando indiretamente o debate democrático.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Framing e enquadramento"
          statement={
            <p>
              Um jornal noticia uma greve de professores com a manchete: "Professores em greve
              prejudicam alunos carentes". Outro veicula: "Professores paralisam para defender
              educação pública". Ambos relatam o mesmo evento. Esse exemplo ilustra o conceito de:
            </p>
          }
          options={[
            { letter: "A", text: <>Censura governamental à imprensa livre.</> },
            { letter: "B", text: <>Agenda-setting — a mídia define quais temas cobrir.</> },
            { letter: "C", text: <>Framing — o enquadramento escolhido pela mídia molda a percepção do público.</>, correct: true },
            { letter: "D", text: <>Desinformação — ambos os jornais veiculam fake news.</> },
            { letter: "E", text: <>Concentração midiática — os dois jornais pertencem ao mesmo grupo.</> },
          ]}
          resolution={
            <p>
              O framing (enquadramento) refere-se à forma como a mídia apresenta um fato — a
              escolha de palavras, fontes e ângulos que constroem perspectivas diferentes sobre
              o mesmo evento, influenciando como o público interpreta a realidade.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Fake news e pós-verdade"
          statement={
            <p>
              O conceito de <strong>pós-verdade</strong>, eleito palavra do ano pela Oxford em 2016,
              descreve um contexto em que:
            </p>
          }
          options={[
            { letter: "A", text: <>Toda notícia publicada na internet é considerada falsa pelo público.</> },
            { letter: "B", text: <>Apelos emocionais e crenças pessoais têm mais peso na opinião do que fatos verificáveis.</>, correct: true },
            { letter: "C", text: <>Os governos controlam totalmente a produção de informação.</> },
            { letter: "D", text: <>A mídia tradicional perdeu completamente sua credibilidade.</> },
            { letter: "E", text: <>A internet tornou desnecessária a checagem de fatos (fact-checking).</> },
          ]}
          resolution={
            <p>
              A pós-verdade descreve um cenário em que a dimensão emocional e subjetiva das
              informações prevalece sobre a factualidade. Pessoas tendem a acreditar no que
              confirma suas crenças prévias, independente de evidências — o que facilita a
              difusão de desinformação.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Câmaras de eco e democracia"
          statement={
            <p>
              As "câmaras de eco" formadas pelos algoritmos das redes sociais representam um
              desafio à democracia porque:
            </p>
          }
          options={[
            { letter: "A", text: <>Aumentam o acesso da população à informação diversificada.</> },
            { letter: "B", text: <>Expõem os usuários apenas a perspectivas que reforçam suas crenças, aprofundando a polarização e dificultando o diálogo.</>, correct: true },
            { letter: "C", text: <>Eliminam as fake news ao filtrar conteúdos não verificados.</> },
            { letter: "D", text: <>Fortalecem a mídia tradicional ao reduzir a confiança nas redes sociais.</> },
            { letter: "E", text: <>São um problema apenas em democracias jovens e instáveis.</> },
          ]}
          resolution={
            <p>
              As câmaras de eco criam bolhas informacionais onde o usuário só encontra
              conteúdo que confirma suas visões, reduzindo a exposição a perspectivas
              diferentes e dificultando o debate plural que a democracia requer. Isso
              fragmenta o espaço público e aprofunda divisões políticas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Concentração midiática e democracia"
          statement={
            <p>
              "No Brasil, poucas famílias controlam a maior parte dos veículos de comunicação.
              A Constituição proíbe o monopólio, mas a regulação efetiva ainda é insuficiente."
              <br /><br />
              Considerando esse dado, assinale a alternativa que melhor explica por que a
              concentração midiática é considerada um problema para a democracia:
            </p>
          }
          options={[
            { letter: "A", text: <>Porque impede que partidos de oposição acessem canais de televisão.</> },
            { letter: "B", text: <>Porque reduz a diversidade de perspectivas, deixando grupos minoritários sem representação e favorecendo os interesses dos proprietários.</>, correct: true },
            { letter: "C", text: <>Porque faz com que toda a mídia publique as mesmas notícias, o que uniformiza a opinião pública de forma positiva.</> },
            { letter: "D", text: <>Porque encarece o acesso à internet e dificulta o uso de redes sociais pelas camadas mais pobres.</> },
            { letter: "E", text: <>Porque os grandes grupos midiáticos financiam pesquisas eleitorais que favorecem candidatos conservadores.</> },
          ]}
          resolution={
            <p>
              A concentração midiática reduz o pluralismo informativo: quando poucos grupos
              controlam o que a população acessa, a diversidade de vozes diminui, grupos
              minoritários ficam invisibilizados e os interesses dos proprietários dos
              veículos tendem a influenciar a cobertura jornalística — comprometendo a
              autonomia e a pluralidade necessárias à democracia.
            </p>
          }
        />
      </section>
    </article>
  );
}
