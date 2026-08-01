"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 27</span>
          <h1>Democracia, Cidadania e Participação Política</h1>
          <p>
            A democracia não se resume ao ato de votar a cada quatro anos. É um regime que precisa ser
            continuamente construído por cidadãos ativos, instituições sólidas e cultura política participativa.
            Entender seus fundamentos históricos, seus tipos, seus instrumentos de participação e suas ameaças
            contemporâneas é condição indispensável para qualquer análise crítica da realidade brasileira e mundial.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos de Democracia</span>
        <h2>1. O Que é Democracia? Tipos e Modelos</h2>
        <p>
          O termo <em>democracia</em> vem do grego <em>demos</em> (povo) + <em>kratos</em> (poder):
          "poder do povo". Historicamente, assume diferentes formas, com distintas formas de organizar
          a relação entre os cidadãos e o poder político.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Democracia Direta</h3>
            <p>
              Modelo ateniense (séc. V a.C.): cidadãos deliberavam e votavam diretamente as leis na
              <em> agora</em>. Era excludente — mulheres, escravos e estrangeiros não participavam.
              Hoje: referendo, plebiscito, iniciativa popular.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Democracia Representativa</h3>
            <p>
              Os cidadãos elegem representantes (deputados, senadores, presidente) que governam em
              seu nome. Modelo dominante nos Estados modernos. Crítica: risco de distanciamento
              entre representante e representado.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Democracia Participativa</h3>
            <p>
              Combina representação com mecanismos de participação direta: audiências públicas,
              conselhos de políticas públicas, orçamento participativo. Amplia o envolvimento
              cidadão além do voto periódico.
            </p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Democracia Deliberativa</h3>
            <p>
              <strong>Jürgen Habermas</strong> propõe que a legitimidade democrática vem da qualidade
              do debate público: decisões são válidas quando resultam de discussão racional, livre
              e inclusiva — a "situação ideal de fala".
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Democracia procedimental × democracia substantiva</h3>
          <p>
            A <strong>democracia procedimental</strong> foca nas regras do jogo: eleições livres,
            sufrágio universal, separação de poderes, liberdade de imprensa. A{" "}
            <strong>democracia substantiva</strong> vai além e exige que o regime produza
            resultados materiais de igualdade e justiça social. Para <strong>Boaventura de Sousa
            Santos</strong>, a democracia real precisa articular as duas dimensões — processos
            formais e resultados materiais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidadania</span>
        <h2>2. Cidadania: T.H. Marshall e a Ampliação de Direitos</h2>
        <p>
          O sociólogo britânico <strong>Thomas Humphrey Marshall</strong> (1893–1981) propôs uma
          teoria histórica da cidadania em três dimensões, cada uma conquistada em período distinto
          e ligada a instituições específicas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão da cidadania</th>
                <th>Século</th>
                <th>Direitos incluídos</th>
                <th>Instituição-chave</th>
                <th>Exemplos no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cidadania civil</strong></td>
                <td>XVIII</td>
                <td>Liberdade individual, propriedade, igualdade perante a lei, acesso à Justiça</td>
                <td>Tribunais, Judiciário</td>
                <td>Habeas corpus, direito de defesa, liberdade de expressão</td>
              </tr>
              <tr>
                <td><strong>Cidadania política</strong></td>
                <td>XIX</td>
                <td>Direito de votar e ser votado, participar de partidos e sindicatos</td>
                <td>Parlamento, partidos</td>
                <td>Voto feminino (1932), voto analfabeto (1985), voto aos 16 anos (1988)</td>
              </tr>
              <tr>
                <td><strong>Cidadania social</strong></td>
                <td>XX</td>
                <td>Educação, saúde, habitação, trabalho digno, previdência social</td>
                <td>Estado de Bem-Estar Social</td>
                <td>SUS (1988), FGTS, seguro-desemprego, Bolsa Família</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          No Brasil, a trajetória da cidadania foi tortuosa. <strong>José Murilo de Carvalho</strong>
          (<em>Cidadania no Brasil</em>, 2001) argumenta que a cidadania brasileira desenvolveu-se
          de forma invertida em relação ao modelo marshalliano: os direitos sociais vieram antes
          dos civis e políticos plenos, principalmente durante o Estado Novo de Getúlio Vargas
          (1937–1945), que concedeu direitos trabalhistas sem garantir liberdades políticas —
          gerando uma "cidadania regulada" (Wanderley Guilherme dos Santos).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sufrágio</span>
        <h2>3. A Conquista do Sufrágio: Da Exclusão à Universalidade</h2>
        <p>
          O <strong>sufrágio</strong> — direito de votar e ser votado — nem sempre foi universal.
          A história democrática é, em grande parte, uma história de expansão gradual do direito
          ao voto para grupos historicamente excluídos: mulheres, trabalhadores sem propriedade,
          negros, analfabetos, jovens.
        </p>
        <p>
          No Brasil, a ampliação do sufrágio seguiu uma trajetória marcada por avanços e recuos.
          A Constituição de 1824 (Império) excluía escravizados e mulheres; a República Velha
          (1889–1930) tinha voto aberto e fraude ("voto de cabresto"); a Revolução de 1930 introduziu
          o voto secreto e feminino (1932); a ditadura militar (1964–1985) manteve eleições controladas;
          a Constituição de 1988 instituiu o sufrágio universal pleno.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marco histórico</th>
                <th>Ano</th>
                <th>Conquista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Voto secreto</td>
                <td>1932</td>
                <td>Fim do voto a descoberto; redução do "voto de cabresto"</td>
              </tr>
              <tr>
                <td>Voto feminino</td>
                <td>1932</td>
                <td>Bertha Lutz liderou a campanha sufragista no Brasil</td>
              </tr>
              <tr>
                <td>Voto dos analfabetos</td>
                <td>1985</td>
                <td>Inclui a maior parcela historicamente excluída da participação</td>
              </tr>
              <tr>
                <td>Voto aos 16 anos</td>
                <td>1988 (CF)</td>
                <td>Facultativo para maiores de 16 e menores de 18 anos</td>
              </tr>
              <tr>
                <td>Voto de detentos provisórios</td>
                <td>2022 (STF)</td>
                <td>STF reconheceu direito de presos sem condenação definitiva votarem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Participação Política</span>
        <h2>4. Mecanismos de Participação Política no Brasil</h2>
        <p>
          A Constituição de 1988 criou uma variedade de instrumentos de participação cidadã,
          indo muito além do voto periódico. O art. 14 prevê três mecanismos de democracia
          semidireta: plebiscito, referendo e iniciativa popular.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Plebiscito</h3>
            <p>
              Consulta popular <em>antes</em> da decisão política. Exemplo clássico: plebiscito
              de 1993 sobre forma e sistema de governo (monarquia/república e
              presidencialismo/parlamentarismo) — ganhou a República Presidencialista.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Referendo</h3>
            <p>
              Consulta popular <em>depois</em> da decisão legislativa, para ratificação.
              Exemplo: referendo de 2005 sobre o comércio de armas de fogo — maioria votou
              contra a proibição (67% a 33%).
            </p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Iniciativa Popular</h3>
            <p>
              Cidadãos podem apresentar projetos de lei ao Congresso com assinaturas de 1%
              do eleitorado nacional (≈ 1,3 milhão de pessoas), distribuídas em ao menos
              cinco estados com no mínimo 0,3% em cada.
            </p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Orçamento Participativo</h3>
            <p>
              A população decide parte do orçamento municipal. Porto Alegre (1989) foi pioneira;
              modelo exportado para mais de 1.500 cidades em 40 países. Reduz desigualdade
              de investimento entre bairros.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Conselhos de Políticas Públicas</h3>
            <p>
              Órgãos mistos (governo + sociedade civil) que formulam e fiscalizam políticas
              em saúde (CNS), educação (CNE), assistência social (CNAS), criança (CONANDA).
              Criados pela CF/88 como espaços de controle social.
            </p>
          </div>
          <div className="lesson-card">
            <span>👁️</span>
            <h3>Controle Social</h3>
            <p>
              Mecanismos pelos quais a sociedade fiscaliza o poder público: Lei de Acesso à
              Informação (LAI, 2011), TCU, CGU, Ministério Público, imprensa livre
              e movimentos sociais.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura Política</span>
        <h2>5. Cultura Política: Civismo, Capital Social e Participação</h2>
        <p>
          A democracia não depende apenas de instituições formais — depende também de uma{" "}
          <strong>cultura política</strong> que valorize a participação, o debate racional
          e o respeito às regras do jogo. <strong>Gabriel Almond</strong> e{" "}
          <strong>Sidney Verba</strong> (<em>The Civic Culture</em>, 1963) identificaram
          três tipos de cultura política:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😶</span>
            <h3>Cultura paroquial</h3>
            <p>
              Os cidadãos não têm consciência do sistema político e não se veem como atores.
              Típica de sociedades tradicionais, com pouca urbanização e escolaridade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧑‍💼</span>
            <h3>Cultura de sujeição</h3>
            <p>
              Os cidadãos sabem que o sistema existe e esperam benefícios do Estado, mas
              participam pouco. Relação passiva com o poder político — típica em regimes
              paternalistas e clientelistas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Cultura participativa</h3>
            <p>
              Os cidadãos se percebem como atores políticos, participam, debatem, votam e
              cobram. Fundamento da democracia estável. Exige educação política e
              experiência de participação.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Capital social e democracia (Robert Putnam)</h3>
          <p>
            <strong>Robert Putnam</strong> (<em>Comunidade e Democracia</em>, 1993) estudou
            diferenças no desempenho democrático e econômico das regiões italianas, concluindo
            que o <strong>capital social</strong> — redes de cooperação, confiança mútua e
            normas de reciprocidade — é o fator explicativo central. Regiões com mais associações
            civis, clubes, corais e cooperativas tinham governos mais eficientes e democracias
            mais sólidas. O capital social cria a base cultural para a participação política.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Representação Política</span>
        <h2>6. Crise de Representação e Novas Formas de Participação</h2>
        <p>
          As democracias contemporâneas enfrentam uma crise de representação: o distanciamento
          entre representantes e representados, a profissionalização da política, o financiamento
          privado de campanhas e os escândalos de corrupção geram desconfiança nas instituições.
          Pesquisas do Latinobarómetro mostram queda consistente na confiança nos parlamentos e
          partidos políticos em toda a América Latina.
        </p>
        <p>
          Essa crise estimula a busca por novas formas de participação: movimentos sociais em rede
          (como o MPL em 2013 e o movimento #EleNão em 2018), petições online, pressão em redes
          sociais, jornalismo de dados e plataformas de transparência pública (e-SIC, Portal da
          Transparência).
        </p>

        <div className="lesson-highlight">
          <h3>Democracia digital: oportunidades e riscos</h3>
          <p>
            A internet abriu novas possibilidades de participação democrática: e-democracia,
            consultas públicas online, petições eletrônicas e transparência de dados públicos.
            Mas também criou riscos: desinformação, câmaras de eco, polarização e uso de algoritmos
            para manipular a opinião pública. O dilema democrático do século XXI é como aproveitar
            o potencial participativo da internet sem ser capturado pelos seus efeitos
            desagregadores sobre o debate público.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistemas Eleitorais</span>
        <h2>7. Sistemas Eleitorais: Proporcional, Majoritário e Misto</h2>
        <p>
          O <strong>sistema eleitoral</strong> define como os votos se convertem em mandatos.
          Diferentes sistemas têm implicações distintas para a representatividade, a governabilidade
          e o número de partidos no sistema político. O Brasil adota sistemas distintos para
          diferentes cargos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Como funciona</th>
                <th>Vantagem</th>
                <th>Desvantagem</th>
                <th>Uso no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Proporcional (lista aberta)</strong></td>
                <td>Vagas distribuídas conforme % de votos de cada partido; eleitos são os mais votados de cada lista</td>
                <td>Alta representatividade; minorias têm acesso</td>
                <td>Fragmentação partidária; dificulta governabilidade</td>
                <td>Câmara dos Deputados, Assembleias Legislativas, Câmaras Municipais</td>
              </tr>
              <tr>
                <td><strong>Majoritário (dois turnos)</strong></td>
                <td>Vence quem obtém maioria absoluta (1º turno) ou simples (2º turno entre os 2 mais votados)</td>
                <td>Governabilidade; mandato claro</td>
                <td>Votos "perdidos"; pode sub-representar minorias</td>
                <td>Presidência, governos estaduais, prefeituras (municípios com + 200 mil eleitores)</td>
              </tr>
              <tr>
                <td><strong>Majoritário simples (único turno)</strong></td>
                <td>Vence quem obtém mais votos, independentemente de atingir 50%</td>
                <td>Simplicidade e rapidez</td>
                <td>Vencedor pode ter minoria de votos</td>
                <td>Senado Federal; municípios com até 200 mil eleitores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ameaças à Democracia</span>
        <h2>8. Ameaças Contemporâneas à Democracia</h2>
        <p>
          A democracia não é um estado permanente e imutável — precisa ser ativamente defendida.
          <strong> Steven Levitsky</strong> e <strong>Daniel Ziblatt</strong> (<em>Como as Democracias
          Morrem</em>, 2018) mostram que a maioria das democracias contemporâneas colapsa não por
          golpes militares, mas pela erosão gradual promovida por líderes eleitos que, uma vez no
          poder, desmantelam os mecanismos de controle.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📣</span>
            <h3>Populismo autoritário</h3>
            <p>
              Líderes que se apresentam como expressão do "povo verdadeiro" contra as "elites corruptas",
              polarizando a sociedade, desacreditando instituições e atacando adversários como inimigos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Desinformação (fake news)</h3>
            <p>
              A proliferação de mentiras em redes sociais polariza o debate público, dificulta decisões
              racionais e pode ser instrumentalizada para influenciar eleições e deslegitimar resultados.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏦</span>
            <h3>Financiamento privado</h3>
            <p>
              O poder econômico influencia as eleições, comprometendo a igualdade política formal.
              Quanto mais cara é a política, maior o poder de grupos econômicos sobre candidatos
              e partidos.
            </p>
          </div>
          <div className="lesson-card">
            <span>😒</span>
            <h3>Abstenção e apatia</h3>
            <p>
              Quando cidadãos perdem a fé nas instituições e participam menos, abrem espaço para
              que minorias organizadas com agendas autoritárias tomem o poder por meios formalmente
              democráticos.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>O conceito de "democracia iliberal"</h3>
          <p>
            O cientista político <strong>Fareed Zakaria</strong> popularizou o termo{" "}
            <strong>democracia iliberal</strong> para descrever regimes que mantêm eleições
            periódicas mas suprimem liberdades civis, minorias e separação de poderes. Exemplos:
            Hungria (Orbán), Turquia (Erdoğan), Venezuela. O voto existe, mas o Estado de Direito
            não — o que demonstra que eleições são necessárias mas não suficientes para a democracia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ditadura no Brasil</span>
        <h2>9. A Ditadura Militar (1964–1985) e a Redemocratização</h2>
        <p>
          O Brasil viveu 21 anos de ditadura militar (1964–1985), período em que direitos políticos
          e civis foram gravemente violados. O regime fechou o Congresso em momentos de crise, cassou
          mandatos, exilou opositores, torturou e assassinou presos políticos — o que foi documentado
          pela Comissão Nacional da Verdade (CNV, 2014).
        </p>
        <p>
          A redemocratização seguiu um caminho gradual, negociado ("transição lenta, gradual e
          segura" — expressão do general Ernesto Geisel): abertura política (1974), anistia (1979),
          campanha das Diretas Já (1984), eleição de Tancredo Neves pelo Colégio Eleitoral (1985) e
          promulgação da Constituição Cidadã (1988). A primeira eleição presidencial direta pós-ditadura
          foi em 1989, vencida por Fernando Collor.
        </p>

        <div className="lesson-highlight">
          <h3>Diretas Já (1983–1984): a maior mobilização da redemocratização</h3>
          <p>
            A campanha <strong>"Diretas Já"</strong> reuniu mais de 1 milhão de pessoas no comício
            da Candelária (Rio de Janeiro) e cerca de 1,5 milhão no Vale do Anhangabaú (São Paulo)
            em 1984. Reivindicava eleições diretas para presidente, previstas na emenda Dante de
            Oliveira — que foi rejeitada no Congresso por pouco. Mesmo derrotada no Congresso, a
            campanha é considerada um marco da participação popular e da consciência democrática
            brasileira. Artistas, intelectuais, partidos e sindicatos se uniram em torno da bandeira
            da democracia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Hoje</span>
        <h2>10. Democracia no Século XXI: Desafios e Perspectivas</h2>
        <p>
          O século XXI apresenta novos e complexos desafios para as democracias. Relatório da
          organização <em>Freedom House</em> (2023) registrou a 17ª queda consecutiva global nos
          índices de democracia e liberdade: mais países recuaram em democracia do que avançaram.
          O <em>V-Dem Institute</em> (Suécia) estima que cerca de 72% da população mundial vive em
          autocracias ou em democracias em deterioração.
        </p>
        <p>
          No Brasil, após o período de consolidação democrática (1988–2002), a polarização política
          crescente nos anos 2010 e 2020 levantou preocupações sobre a saúde democrática: ataques
          às urnas eletrônicas, questionamento de resultados eleitorais, tensões entre Poderes e
          o uso das redes sociais para desinformação são fenômenos que exigem atenção e resposta
          institucional.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Retrocesso global</h3>
            <p>
              Freedom House e V-Dem documentam queda nos índices de democracia em todo o mundo.
              Autocratização cresce especialmente na Ásia, Europa Oriental e América Latina.
            </p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Tecnologia e democracia</h3>
            <p>
              Redes sociais ampliam a participação, mas também a desinformação e a polarização.
              Inteligência artificial pode ser usada para criar conteúdo falso em escala.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Crise climática</h3>
            <p>
              A urgência da crise climática coloca pressão sobre os processos democráticos:
              decisões necessárias são difíceis de tomar quando afetam interesses econômicos
              poderosos e demandam consenso político.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Desigualdade e democracia</h3>
            <p>
              Alta desigualdade econômica ameaça a democracia: quando o poder econômico é muito
              concentrado, ele tende a se converter em poder político, comprometendo a igualdade
              formal dos cidadãos.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Democracia é processo, não estado</h3>
          <p>
            A principal lição da sociologia política é que a democracia não é uma conquista
            permanente, mas um <strong>processo contínuo</strong> que precisa ser constantemente
            defendido, aprimorado e reinventado. Cidadãos informados, instituições fortes,
            sociedade civil ativa e cultura política participativa são os pilares que sustentam
            regimes democráticos diante das ameaças do autoritarismo e da indiferença.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Plebiscito e referendo"
          statement={
            <p>
              A diferença entre plebiscito e referendo, como mecanismos de democracia direta
              previstos na Constituição de 1988, é que:
            </p>
          }
          options={[
            { letter: "A", text: "O plebiscito é restrito a questões municipais; o referendo, a questões nacionais." },
            { letter: "B", text: "O plebiscito ocorre antes da decisão política; o referendo, depois, para ratificação.", correct: true },
            { letter: "C", text: "O plebiscito só pode ser convocado pelo presidente; o referendo, pelo Congresso." },
            { letter: "D", text: "O referendo ocorre antes da decisão; o plebiscito, depois." },
            { letter: "E", text: "Plebiscito e referendo são sinônimos na Constituição brasileira." },
          ]}
          resolution={
            <p>
              O <strong>plebiscito</strong> é convocado previamente: o povo decide antes que o ato
              político seja tomado. O <strong>referendo</strong> é posterior: o ato já foi aprovado
              (lei ou tratado) e submetido à população para confirmação ou rejeição. Exemplo: plebiscito
              de 1993 (forma e sistema de governo) e referendo de 2005 (desarmamento).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Cidadania em T.H. Marshall"
          statement={
            <p>
              T.H. Marshall identificou três dimensões históricas da cidadania. Qual das alternativas
              apresenta, corretamente e em ordem cronológica, essas dimensões?
            </p>
          }
          options={[
            { letter: "A", text: "Social → política → civil." },
            { letter: "B", text: "Política → social → civil." },
            { letter: "C", text: "Civil → política → social.", correct: true },
            { letter: "D", text: "Social → civil → política." },
            { letter: "E", text: "Política → civil → social." },
          ]}
          resolution={
            <p>
              Para Marshall, a sequência histórica no modelo inglês foi: (1) direitos{" "}
              <strong>civis</strong> no séc. XVIII (liberdades individuais); (2) direitos{" "}
              <strong>políticos</strong> no séc. XIX (voto, partidos); (3) direitos{" "}
              <strong>sociais</strong> no séc. XX (saúde, educação, previdência). José Murilo
              de Carvalho mostrou que no Brasil essa ordem foi invertida — os direitos sociais
              vieram primeiro, sob Vargas, antes dos direitos civis e políticos plenos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Orçamento participativo"
          statement={
            <p>
              O orçamento participativo, modelo desenvolvido em Porto Alegre a partir de 1989,
              é um mecanismo que:
            </p>
          }
          options={[
            { letter: "A", text: "Permite ao Congresso Nacional emendar o orçamento federal sem aprovação do Executivo." },
            { letter: "B", text: "Permite que empresas privadas financiem serviços públicos em troca de benefícios fiscais." },
            { letter: "C", text: "Envolve a população diretamente na definição de parte das prioridades de gasto público municipal.", correct: true },
            { letter: "D", text: "Transfere a gestão financeira do município para comitês técnicos independentes." },
            { letter: "E", text: "Privatiza serviços públicos com participação da sociedade civil no controle." },
          ]}
          resolution={
            <p>
              O <strong>orçamento participativo</strong> é um mecanismo de democracia participativa
              em que os cidadãos debatem e decidem como parte dos recursos municipais será gasta
              (geralmente em obras e serviços de bairro). Foi internacionalmente reconhecido como
              modelo de gestão democrática e redução de desigualdades territoriais, exportado para
              mais de 1.500 cidades em 40 países.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Democracia deliberativa — Habermas"
          statement={
            <p>
              Jürgen Habermas, ao propor o modelo de democracia deliberativa, defende que a
              legitimidade das decisões políticas depende de:
            </p>
          }
          options={[
            { letter: "A", text: "A maioria dos votos obtida em eleições livres e periódicas." },
            { letter: "B", text: "A aprovação das decisões pelos especialistas técnicos competentes." },
            { letter: "C", text: "A qualidade do debate público: discussão racional, livre, inclusiva e argumentativa que precede a decisão.", correct: true },
            { letter: "D", text: "O consenso entre as elites políticas e econômicas do país." },
            { letter: "E", text: "A conformidade das decisões com a tradição histórica e cultural do povo." },
          ]}
          resolution={
            <p>
              Para Habermas, o que torna uma decisão legítima não é apenas o procedimento do voto,
              mas a <strong>qualidade do processo comunicativo</strong> que o precede: um debate
              público em que todos possam participar em igualdade de condições, usando apenas a
              força dos argumentos — a "situação ideal de fala". Isso é a democracia deliberativa,
              que exige espaço público livre de coerção e dominação.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Erosão democrática contemporânea"
          statement={
            <p>
              <em>"Levitsky e Ziblatt, em 'Como as Democracias Morrem' (2018), mostram que, ao
              contrário do século XX, quando regimes democráticos eram derrubados principalmente
              por golpes militares, hoje a democracia morre lentamente pelas mãos de líderes
              eleitos que gradualmente enfraquecem as instituições de controle, a imprensa
              e a oposição."</em>
              <br /><br />
              O fenômeno descrito pelos autores é conhecido como:
            </p>
          }
          options={[
            { letter: "A", text: "Autoritarismo tradicional, com extinção do sufrágio universal." },
            { letter: "B", text: "Totalitarismo, com controle estatal de todos os aspectos da vida social." },
            { letter: "C", text: "Erosão democrática ou 'autocratização', em que líderes eleitos desmantelam a democracia de dentro.", correct: true },
            { letter: "D", text: "Anarquismo, com dissolução de todas as formas de autoridade estatal." },
            { letter: "E", text: "Federalismo assimétrico, com concentração excessiva de poder nos estados subnacionais." },
          ]}
          resolution={
            <p>
              O conceito central dos autores é o de <strong>erosão democrática</strong> (ou
              autocratização gradual): líderes eleitos democraticamente usam os mecanismos legais
              do próprio sistema para enfraquecer a democracia — cooptando o Judiciário, silenciando
              a imprensa, desacreditando eleições. Isso é diferente do golpe clássico e por isso é
              mais difícil de identificar e combater pelos mecanismos tradicionais de defesa democrática.
            </p>
          }
        />
      </section>
    </article>
  );
}
