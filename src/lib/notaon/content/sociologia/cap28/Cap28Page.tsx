"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 28</span>
          <h1>Direitos Humanos e Constituição de 1988</h1>
          <p>
            Direitos Humanos não são concessões de governantes — são conquistas históricas resultantes
            de lutas sociais e políticas ao longo de séculos. A Declaração Universal de 1948 e a
            Constituição Cidadã de 1988 representam marcos fundamentais que precisam ser conhecidos,
            analisados criticamente e defendidos por toda a cidadania. O ENEM aborda esse tema
            com frequência por meio de textos, charges e situações que exigem análise histórica e sociológica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem Histórica</span>
        <h2>1. Origens dos Direitos Humanos</h2>
        <p>
          Os <strong>Direitos Humanos</strong> são direitos que pertencem a todo ser humano
          simplesmente por sua condição humana — independentemente de raça, gênero, religião,
          nacionalidade ou qualquer outra característica. Sua fundamentação filosófica vem do
          <strong> jusnaturalismo</strong>: a ideia de que existem direitos naturais, anteriores ao
          Estado e à lei positiva, que nenhum governante pode legitimamente violar.
        </p>
        <p>
          Essa noção tem raízes nas escolas estoicas gregas e romanas (todos os homens compartilham
          a razão), foi reelaborada pelo direito natural medieval (Tomás de Aquino) e ganhou sua
          versão moderna com o Iluminismo dos séculos XVII e XVIII.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marco histórico</th>
                <th>Ano</th>
                <th>Contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Magna Carta</strong></td>
                <td>1215</td>
                <td>Primeiro documento a limitar o poder do rei inglês; protegia a nobreza, mas estabeleceu o precedente do poder limitado</td>
              </tr>
              <tr>
                <td><strong>Locke — Dois Tratados do Governo Civil</strong></td>
                <td>1689</td>
                <td>Direitos naturais à vida, liberdade e propriedade; governo deve protegê-los</td>
              </tr>
              <tr>
                <td><strong>Declaração da Independência dos EUA</strong></td>
                <td>1776</td>
                <td>"Todos os homens são criados iguais, dotados de direitos inalienáveis: vida, liberdade e busca da felicidade"</td>
              </tr>
              <tr>
                <td><strong>Declaração dos Direitos do Homem e do Cidadão</strong></td>
                <td>1789</td>
                <td>Revolução Francesa: liberdade, igualdade, fraternidade; mas "homem" excluía mulheres e escravizados</td>
              </tr>
              <tr>
                <td><strong>Declaração Universal dos Direitos Humanos (ONU)</strong></td>
                <td>1948</td>
                <td>Aprovada por 48 países; 30 artigos definindo direitos civis, políticos, sociais, econômicos e culturais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Características dos Direitos Humanos</h3>
          <p>
            Os Direitos Humanos são: <strong>universais</strong> (valem para todos, independente
            de cultura ou Estado); <strong>indivisíveis</strong> (todos são igualmente importantes —
            sem hierarquia entre civis, políticos e sociais); <strong>interdependentes</strong> (a
            violação de um afeta os outros); <strong>inalienáveis</strong> (não podem ser renunciados
            ou cedidos); <strong>imprescritíveis</strong> (nunca expiram, mesmo com o passar do tempo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gerações de Direitos</span>
        <h2>2. As Gerações (Dimensões) dos Direitos Humanos</h2>
        <p>
          O jurista tcheco-francês <strong>Karel Vasak</strong> propôs, em 1979, a classificação
          dos direitos humanos em gerações, inspirado nos ideais da Revolução Francesa: liberdade,
          igualdade e fraternidade. Cada geração emergiu em contexto histórico específico e foi
          conquistada por lutas sociais e políticas distintas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Geração</th>
                <th>Valor</th>
                <th>Período</th>
                <th>Direitos incluídos</th>
                <th>Obrigação do Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1ª geração</strong></td>
                <td>Liberdade</td>
                <td>Séc. XVIII–XIX</td>
                <td>Vida, liberdade, propriedade, igualdade perante a lei, voto, religião, expressão, processo justo</td>
                <td>Direitos <em>negativos</em>: abster-se de violar</td>
              </tr>
              <tr>
                <td><strong>2ª geração</strong></td>
                <td>Igualdade</td>
                <td>Séc. XX</td>
                <td>Saúde, educação, trabalho, moradia, previdência, cultura, alimentação</td>
                <td>Direitos <em>positivos</em>: agir para garantir</td>
              </tr>
              <tr>
                <td><strong>3ª geração</strong></td>
                <td>Fraternidade</td>
                <td>Final séc. XX</td>
                <td>Paz, desenvolvimento, meio ambiente, autodeterminação dos povos, patrimônio da humanidade</td>
                <td>Direitos <em>coletivos e difusos</em>: cooperação entre Estados</td>
              </tr>
              <tr>
                <td><strong>4ª geração</strong> (debatida)</td>
                <td>Democracia / Bioética</td>
                <td>Séc. XXI</td>
                <td>Privacidade de dados, acesso à internet, bioética, direitos de gerações futuras</td>
                <td>Em construção — sem consenso doutrinário</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Crítica à teoria das gerações</h3>
          <p>
            A ONU e muitos teóricos criticam o termo "gerações" porque pode sugerir que direitos
            mais antigos são mais importantes ou que os novos "substituem" os anteriores. Por isso,
            prefere-se falar em <strong>dimensões</strong> dos direitos humanos — todas igualmente
            válidas, interdependentes e indivisíveis. O direito à alimentação (2ª geração) é tão
            urgente quanto o direito à liberdade de expressão (1ª geração).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Declaração Universal</span>
        <h2>3. A Declaração Universal dos Direitos Humanos (1948)</h2>
        <p>
          A <strong>Declaração Universal dos Direitos Humanos</strong> (DUDH) foi aprovada pela
          Assembleia Geral da ONU em 10 de dezembro de 1948, com 48 votos a favor e nenhum contra
          (8 abstenções, incluindo a URSS e a África do Sul). Foi a resposta da humanidade ao horror
          da Segunda Guerra Mundial e do Holocausto nazista, que matou 6 milhões de judeus e milhões
          de outras pessoas.
        </p>
        <p>
          A DUDH não é um tratado juridicamente vinculante — é uma <strong>declaração</strong>,
          expressão de valores e aspirações. Mas serve de base para tratados internacionais que
          <em>são</em> vinculantes, como o Pacto Internacional dos Direitos Civis e Políticos
          (1966) e o Pacto Internacional dos Direitos Econômicos, Sociais e Culturais (1966).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Art. 1º — Dignidade</h3>
            <p>
              "Todos os seres humanos nascem livres e iguais em dignidade e em direitos." Principio
              fundante que ancora toda a arquitetura dos direitos humanos modernos.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Arts. 3–21 — Direitos civis e políticos</h3>
            <p>
              Vida, liberdade, segurança pessoal, proibição de tortura, igualdade perante a lei,
              liberdade de expressão e religião, direito ao voto e ao asilo político.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Arts. 22–27 — Direitos econômicos e sociais</h3>
            <p>
              Seguridade social, trabalho e remuneração justa, repouso, educação gratuita e
              obrigatória no nível elementar, participação na vida cultural da comunidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Arts. 28–30 — Deveres</h3>
            <p>
              Direito a uma ordem social e internacional em que os direitos possam ser plenamente
              realizados. Todo indivíduo tem deveres para com a comunidade. Nenhum direito pode
              ser usado para destruir os direitos dos outros.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constituição de 1988</span>
        <h2>4. A Constituição de 1988: A "Constituição Cidadã"</h2>
        <p>
          A <strong>Constituição Federal de 1988</strong> foi promulgada em 5 de outubro, após o
          processo de redemocratização que pôs fim à ditadura militar (1964–1985). O presidente da
          Assembleia Nacional Constituinte, deputado <strong>Ulysses Guimarães</strong>, a chamou de
          <strong>"Constituição Cidadã"</strong> por seu amplo elenco de direitos fundamentais e pela
          participação popular em sua elaboração: foram coletadas emendas populares com mais de
          12 milhões de assinaturas.
        </p>
        <p>
          O Título II da CF/88, "Dos Direitos e Garantias Fundamentais", ocupa os artigos 5º a 17
          e é um dos mais abrangentes do constitucionalismo mundial:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Art. 5º — Direitos individuais</h3>
            <p>
              78 incisos com direitos e garantias individuais: igualdade perante a lei, liberdade
              de expressão, inviolabilidade do domicílio, habeas corpus, sigilo de comunicações,
              proibição de tortura, racismo como crime inafiançável.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Art. 6º — Direitos sociais</h3>
            <p>
              Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança,
              previdência social, proteção à maternidade e à infância, assistência social.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Arts. 14–16 — Direitos políticos</h3>
            <p>
              Sufrágio universal, alistamento eleitoral obrigatório para maiores de 18 anos,
              plebiscito, referendo, iniciativa popular de leis.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Arts. 7–11 — Direitos trabalhistas</h3>
            <p>
              Salário mínimo, 13º salário, FGTS, jornada de 8h, 30 dias de férias, licença
              maternidade de 120 dias, seguro-desemprego, direito de greve.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">SUS e Direitos Sociais</span>
        <h2>5. O SUS e a Efetivação dos Direitos Sociais</h2>
        <p>
          Uma das conquistas mais emblemáticas da Constituição de 1988 foi o <strong>Sistema
          Único de Saúde (SUS)</strong> — saúde como direito de todos e dever do Estado,
          universal e gratuita. O SUS foi resultado das lutas da <strong>Reforma Sanitária
          Brasileira</strong>, liderada por profissionais de saúde, intelectuais e movimentos
          sociais que defendiam a saúde como direito e não como mercadoria.
        </p>
        <p>
          O SUS atende hoje mais de 150 milhões de brasileiros que dependem exclusivamente do
          sistema público de saúde. É considerado um dos maiores sistemas de saúde pública do
          mundo e é responsável pelo Programa Nacional de Imunizações (PNI) — o mais abrangente
          do mundo, que distribuiu gratuitamente vacinas contra Covid-19, gripe, poliomielite
          e dezenas de outras doenças.
        </p>

        <div className="lesson-highlight">
          <h3>Tensão entre direito formal e efetividade real</h3>
          <p>
            A constitucionalização dos direitos sociais não garante sua efetivação automática.
            O direito à saúde está no art. 6º da CF/88, mas o SUS enfrenta subfinanciamento crônico,
            filas extensas e desigualdades regionais graves. A tensão entre o <strong>direito
            formal</strong> (o que a lei garante) e o <strong>direito material</strong> (o que as
            pessoas efetivamente acessam) é central para a análise sociológica dos direitos
            sociais no Brasil.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direito à Igualdade</span>
        <h2>6. Igualdade, Discriminação e Ações Afirmativas</h2>
        <p>
          A Constituição de 1988 garante no art. 5º que "todos são iguais perante a lei, sem
          distinção de qualquer natureza". Mas a igualdade formal — todos tratados da mesma forma
          pela lei — não basta para superar desigualdades históricas profundas. Surge o debate sobre
          a necessidade de <strong>ações afirmativas</strong>: políticas que tratam desigualmente
          os desiguais para promover igualdade real.
        </p>
        <p>
          No Brasil, as principais ações afirmativas incluem o sistema de cotas raciais nas
          universidades federais (Lei 12.711/2012) e em concursos públicos (Lei 12.990/2014),
          além de cotas para pessoas com deficiência. O STF julgou as cotas constitucionais em
          2012 (ADPF 186), argumentando que a igualdade material exige tratamento diferenciado
          para superar desigualdades históricas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Igualdade formal</h3>
            <p>
              Todos são iguais perante a lei — a lei não faz distinção entre pessoas. Princípio
              fundamental desde a Revolução Francesa e a abolição dos privilégios estamentais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Igualdade material</h3>
            <p>
              Além da igualdade formal, é necessário tratar desigualmente os desiguais para
              compensar desvantagens históricas. Ações afirmativas operam nessa lógica.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏫</span>
            <h3>Cotas raciais</h3>
            <p>
              Reserva de vagas em universidades e concursos para negros, pardos e indígenas.
              Fundamentadas na necessidade de reparação histórica da escravidão e do racismo
              estrutural que persiste na sociedade brasileira.
            </p>
          </div>
          <div className="lesson-card">
            <span>♿</span>
            <h3>Cotas para PcD</h3>
            <p>
              Reserva de vagas em empresas (Lei 8.213/1991) e no serviço público para pessoas
              com deficiência. Garante inclusão de grupo historicamente discriminado no mercado
              de trabalho formal.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Violações no Brasil</span>
        <h2>7. Violações e Desafios dos Direitos Humanos no Brasil</h2>
        <p>
          A existência de uma Constituição avançada não elimina as violações de direitos humanos.
          O Brasil enfrenta desafios graves que evidenciam a distância entre o texto constitucional
          e a realidade vivida por parcelas significativas da população, especialmente negros,
          indígenas, quilombolas e pessoas em situação de pobreza.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔫</span>
            <h3>Violência policial</h3>
            <p>
              O Brasil é um dos países com maior número de mortes por intervenção policial do
              mundo. Em 2022, 6.429 pessoas foram mortas pela polícia (Monitor da Violência).
              79% das vítimas eram negras — evidência de racismo estrutural no sistema de
              segurança pública.
            </p>
          </div>
          <div className="lesson-card">
            <span>⛓️</span>
            <h3>Superlotação carcerária</h3>
            <p>
              O Brasil tem a 3ª maior população carcerária do mundo (cerca de 900 mil presos
              em 2023). Superlotação, tortura e condições desumanas são documentadas pelo CNJ
              e pelo Ministério da Justiça como violações sistemáticas de direitos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Defensores de direitos</h3>
            <p>
              O Brasil está consistentemente entre os países mais perigosos do mundo para
              defensores de direitos humanos e lideranças indígenas e quilombolas, segundo
              a Global Witness — ativistas ambientais são assassinados com impunidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Déficit habitacional</h3>
            <p>
              O déficit habitacional brasileiro supera 8 milhões de moradias. Favelas e
              ocupações urbanas evidenciam que o direito social à moradia (art. 6º CF/88)
              permanece negado para milhões de brasileiros.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Comissão Nacional da Verdade (2012–2014)</h3>
          <p>
            A <strong>Comissão Nacional da Verdade</strong> (CNV), criada pela Lei 12.528/2011,
            investigou graves violações de direitos humanos ocorridas entre 1946 e 1988, com
            ênfase na ditadura militar (1964–1985). Seu relatório final documentou 434 mortes
            e desaparecimentos, identificou 377 agentes públicos responsáveis por torturas,
            mortes e ocultação de cadáveres, e recomendou medidas de reparação às vítimas e
            seus familiares. O Brasil não julgou criminalmente os torturadores, diferente de
            Argentina e Chile — gerando debate sobre a Lei de Anistia (1979) e a obrigação
            internacional de investigar e punir graves violações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sistema Internacional</span>
        <h2>8. O Sistema Internacional de Proteção dos Direitos Humanos</h2>
        <p>
          Além da proteção nacional, os Direitos Humanos são protegidos por um sistema internacional
          em dois níveis: o <strong>sistema global da ONU</strong> e o <strong>sistema regional
          interamericano</strong>.
        </p>
        <p>
          O sistema global da ONU inclui o Conselho de Direitos Humanos (CDH), os comitês de
          tratados (CAT — tortura; CEDAW — mulheres; CERD — discriminação racial; CRC — crianças)
          e relatores especiais temáticos e por países. Os comitês recebem relatórios periódicos
          dos Estados e podem emitir recomendações.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Mecanismo</th>
                <th>Âmbito</th>
                <th>Competência</th>
                <th>Vinculação ao Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Conselho de Direitos Humanos da ONU</strong></td>
                <td>Global</td>
                <td>Revisão periódica universal; relatores especiais</td>
                <td>Desde 1945 (membro fundador da ONU)</td>
              </tr>
              <tr>
                <td><strong>Comitê contra a Tortura (CAT)</strong></td>
                <td>Global</td>
                <td>Monitorar implementação da Convenção contra a Tortura</td>
                <td>Brasil ratificou em 1989</td>
              </tr>
              <tr>
                <td><strong>Comissão Interamericana de DH (CIDH)</strong></td>
                <td>América</td>
                <td>Receber petições, investigar violações, medidas cautelares</td>
                <td>Brasil desde 1969</td>
              </tr>
              <tr>
                <td><strong>Corte Interamericana de DH</strong></td>
                <td>América</td>
                <td>Julgar casos; sentenças são vinculantes para os Estados</td>
                <td>Brasil reconheceu jurisdição em 1998</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O Brasil já foi condenado pela Corte Interamericana em casos emblemáticos: caso{" "}
          <strong>Damião Ximenes Lopes</strong> (violência em hospital psiquiátrico — 2006),
          caso <strong>Guerrilha do Araguaia</strong> (desaparecidos políticos — 2010) e caso{" "}
          <strong>Povo Indígena Xucuru</strong> (demarcação de terras — 2018).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Universalismo e Relativismo</span>
        <h2>9. O Debate entre Universalismo e Relativismo Cultural</h2>
        <p>
          Um dos debates mais instigantes na teoria dos Direitos Humanos é a tensão entre
          <strong> universalismo</strong> e <strong>relativismo cultural</strong>. O universalismo
          afirma que os DH valem para todos os seres humanos, em qualquer cultura ou contexto
          histórico. O relativismo cultural questiona se valores ocidentais podem ser impostos
          a outras culturas.
        </p>
        <p>
          Esse debate emergiu fortemente nas décadas de 1980 e 1990, quando países asiáticos
          (Singapura, China, Malásia) argumentaram em favor de "valores asiáticos" diferentes
          dos direitos individuais ocidentais — enfatizando coletividade, harmonia social e
          desenvolvimento econômico. Ditaduras do Oriente Médio utilizaram argumentos religiosos
          islâmicos para justificar restrições a direitos das mulheres.
        </p>

        <div className="lesson-highlight">
          <h3>Posição crítica contemporânea</h3>
          <p>
            A posição crítica mais influente, defendida por autoras como <strong>Amartya Sen</strong>
            e <strong>Martha Nussbaum</strong>, argumenta que o relativismo pode ser instrumentalizado
            por governantes autoritários para legitimar violações graves (mutilação genital feminina,
            pena de morte por apostasia, trabalho infantil) em nome da "cultura". A resposta universalista
            é que as vítimas dessas práticas — as mulheres mutiladas, os apóstatas condenados —
            raramente concordam que suas violações são "culturais". A <strong>Declaração de Viena</strong>
            (1993) reafirmou a universalidade, indivisibilidade e interdependência dos DH.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direitos e Democracia</span>
        <h2>10. Direitos Humanos, Democracia e Cidadania: Síntese</h2>
        <p>
          Direitos Humanos, democracia e cidadania são conceitos profundamente inter-relacionados.
          A democracia precisa dos direitos humanos para funcionar: sem liberdade de expressão,
          reunião e voto, não há democracia real. E os direitos humanos precisam da democracia para
          serem protegidos: só regimes democráticos com Estado de Direito garantem mecanismos de
          proteção efetiva dos direitos.
        </p>
        <p>
          A <strong>cidadania</strong> é o elo entre o indivíduo e esses sistemas: é o estatuto que
          atribui ao indivíduo direitos (de participar, de ser protegido) e deveres (de cumprir a
          lei, de contribuir com a sociedade). Mas a cidadania plena pressupõe não apenas o
          reconhecimento formal de direitos — pressupõe condições materiais para exercê-los.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔒</span>
            <h3>Direitos sem democracia</h3>
            <p>
              Regimes autoritários podem conceder alguns direitos sociais (como Vargas fez com
              os trabalhistas), mas sem democracia, são concessões revogáveis, não conquistas
              garantidas pela participação cidadã.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Democracia sem direitos</h3>
            <p>
              Uma democracia que não garante direitos fundamentais é uma democracia incompleta.
              Eleições sem liberdade de imprensa, sem proteção de minorias e sem acesso à
              educação são apenas procedimentos vazios.
            </p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Cidadania plena</h3>
            <p>
              Exige a convergência de direitos civis, políticos e sociais (Marshall) com condições
              materiais de exercê-los: escola pública de qualidade, saúde acessível, trabalho
              digno e segurança pública sem discriminação.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Luta por direitos</h3>
            <p>
              Nenhum direito foi dado: todos foram conquistados por lutas históricas — abolição,
              sufrágio feminino, CLT, SUS, cotas. A história dos direitos humanos é a história
              das lutas sociais e políticas pela dignidade humana.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Para o ENEM: direito formal vs. material</h3>
          <p>
            A distinção mais cobrada pelo ENEM sobre Direitos Humanos é a tensão entre o{" "}
            <strong>direito formal</strong> (o que a lei ou a Constituição garante) e o{" "}
            <strong>direito material</strong> (o que as pessoas efetivamente acessam na realidade).
            O Brasil tem uma Constituição avançada, mas altas taxas de violação de direitos —
            essa contradição é o núcleo das questões mais sofisticadas sobre o tema.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Gerações de direitos humanos"
          statement={
            <p>
              Com base na teoria das gerações dos Direitos Humanos, o direito ao meio ambiente
              ecologicamente equilibrado e o direito à paz pertencem à:
            </p>
          }
          options={[
            { letter: "A", text: "Primeira geração, ligada à liberdade individual e aos direitos civis." },
            { letter: "B", text: "Segunda geração, ligada à igualdade e aos direitos sociais e econômicos." },
            { letter: "C", text: "Terceira geração, ligada à fraternidade e aos direitos coletivos e difusos.", correct: true },
            { letter: "D", text: "Quarta geração, ligada à bioética e à privacidade digital." },
            { letter: "E", text: "Nenhuma geração específica — são direitos naturais pré-históricos." },
          ]}
          resolution={
            <p>
              A <strong>terceira geração</strong> de direitos é caracterizada por direitos de
              titularidade coletiva e difusa — pertencem a toda a humanidade ou a grupos (povos,
              gerações futuras). Incluem: direito ao meio ambiente, à paz, ao desenvolvimento,
              à autodeterminação dos povos e ao patrimônio comum da humanidade. São chamados
              direitos de solidariedade ou fraternidade.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Constituição de 1988 — Constituição Cidadã"
          statement={
            <p>
              A Constituição Federal de 1988 ficou conhecida como "Constituição Cidadã"
              principalmente porque:
            </p>
          }
          options={[
            { letter: "A", text: "Foi a primeira Constituição republicana do Brasil, promulgada com sufrágio universal." },
            { letter: "B", text: "Estabeleceu o direito de voto exclusivamente para cidadãos com ensino superior completo." },
            { letter: "C", text: "Ampliou significativamente os direitos fundamentais e foi elaborada com ampla participação popular, após o fim da ditadura.", correct: true },
            { letter: "D", text: "Extinguiu os partidos políticos e instituiu a democracia direta em todos os municípios." },
            { letter: "E", text: "Promoveu a privatização das empresas estatais e a abertura comercial do Brasil ao mercado global." },
          ]}
          resolution={
            <p>
              A CF/88 é chamada "Cidadã" pelo deputado Ulysses Guimarães por seu amplo catálogo
              de direitos (art. 5º a 11) e pela participação popular em sua elaboração: foram
              coletadas mais de 12 milhões de assinaturas em emendas populares. É fruto direto
              do processo de redemocratização após 21 anos de ditadura militar (1964–1985).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Direitos negativos e positivos"
          statement={
            <p>
              Na classificação dos Direitos Humanos, os direitos de primeira geração são chamados
              "negativos" e os de segunda geração, "positivos". Essa distinção se refere ao fato de que:
            </p>
          }
          options={[
            { letter: "A", text: "Os direitos negativos prejudicam a sociedade; os positivos a beneficiam." },
            { letter: "B", text: "Os direitos negativos exigem abstenção do Estado (não violar); os positivos exigem ação do Estado (prover).", correct: true },
            { letter: "C", text: "Os direitos negativos são aqueles negados historicamente; os positivos, os garantidos." },
            { letter: "D", text: "Os direitos negativos só existem na teoria; os positivos, na prática." },
            { letter: "E", text: "Os direitos negativos são individuais; os positivos, exclusivos de grupos minoritários." },
          ]}
          resolution={
            <p>
              Direitos <strong>"negativos"</strong> (1ª geração): o Estado cumpre seu papel
              simplesmente se abstendo de violar — não prender sem motivo, não censurar, não
              torturar. Direitos <strong>"positivos"</strong> (2ª geração): exigem ação ativa
              do Estado — construir hospitais, escolas, criar políticas habitacionais. Na prática,
              essa distinção é questionada: todos os direitos demandam recursos e estrutura estatal.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Universalidade vs. relativismo cultural dos DH"
          statement={
            <p>
              Um debate central na teoria dos Direitos Humanos é a tensão entre universalismo
              e relativismo cultural. O relativismo cultural aplicado aos DH argumenta que:
            </p>
          }
          options={[
            { letter: "A", text: "Os direitos humanos são válidos universalmente e devem ser aplicados da mesma forma em todas as culturas." },
            { letter: "B", text: "Os direitos humanos são uma imposição ocidental e cada cultura deve definir seus próprios valores e direitos.", correct: true },
            { letter: "C", text: "Os direitos humanos devem ser protegidos apenas pelos Estados que os ratificaram em tratados internacionais." },
            { letter: "D", text: "A soberania nacional impede qualquer interferência internacional em violações de DH." },
            { letter: "E", text: "Os direitos econômicos e sociais têm primazia sobre os civis e políticos em países em desenvolvimento." },
          ]}
          resolution={
            <p>
              O <strong>relativismo cultural</strong> argumenta que não existe um conjunto
              universal de valores — cada cultura tem seus próprios direitos e valores legítimos,
              e impor padrões ocidentais seria imperialismo cultural. A crítica universalista
              (Amartya Sen, Martha Nussbaum) responde que isso pode legitimar violações graves
              em nome da "cultura". O debate permanece aberto e relevante no ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Racismo e direitos fundamentais"
          statement={
            <p>
              <em>"Em 2022, 79% das 6.429 pessoas mortas pela polícia brasileira eram negras.
              O art. 5º, XLII, da Constituição Federal estabelece que a prática do racismo
              constitui crime inafiançável e imprescritível. O Supremo Tribunal Federal
              reconheceu, em 2023, que o racismo estrutural é uma violação sistemática de
              direitos fundamentais."</em>
              <br /><br />
              Com base nos dados e no texto, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: "A Constituição de 1988 eliminou o racismo no Brasil ao tipificá-lo como crime inafiançável." },
            { letter: "B", text: "A desigualdade racial nas mortes por violência policial demonstra que a proteção formal dos direitos não garante sua efetivação material.", correct: true },
            { letter: "C", text: "O reconhecimento constitucional do racismo como crime prova que o Estado brasileiro combate eficazmente a discriminação racial." },
            { letter: "D", text: "Os dados sobre violência policial mostram que a segurança pública opera de forma igualitária, sem discriminação racial." },
            { letter: "E", text: "O direito à segurança pública garantido no art. 6º é plenamente efetivado para todos os brasileiros." },
          ]}
          resolution={
            <p>
              O texto ilustra a tensão clássica entre <strong>direito formal</strong> (a lei que
              proíbe o racismo) e <strong>direito material</strong> (a realidade em que negros
              são 79% das vítimas da violência policial). A existência da norma constitucional não
              basta para eliminar o racismo estrutural — é preciso políticas públicas, mudança
              institucional e transformação cultural. Isso é central para a análise sociológica
              dos Direitos Humanos no Brasil contemporâneo.
            </p>
          }
        />
      </section>
    </article>
  );
}
