"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 20</span>
          <h1>Gênero, Sexualidade e Diversidade na Sociedade Contemporânea</h1>
          <p>
            "Não se nasce mulher: torna-se mulher." A frase de Simone de Beauvoir resume uma
            virada intelectual fundamental: gênero não é destino biológico, mas construção
            social. Compreender essa distinção é indispensável para analisar desigualdades,
            violência, movimentos sociais e políticas públicas na sociedade contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>1. Sexo vs. Gênero: Uma Distinção Fundamental</h2>
        <p>
          A Sociologia distingue dois conceitos frequentemente confundidos no senso comum.
          Essa distinção é a base de toda a análise sociológica sobre as desigualdades
          entre homens e mulheres e sobre a diversidade de identidades e orientações sexuais.
        </p>
        <p>
          <strong>Simone de Beauvoir</strong>, em <em>O Segundo Sexo</em> (1949), foi pioneira
          ao argumentar que a condição feminina não é determinada pela biologia, mas pela
          cultura e pelas relações sociais: "Não se nasce mulher: torna-se mulher." Essa
          separação entre sexo (biológico) e gênero (social) é a base do feminismo moderno
          e dos estudos de gênero. A feminilidade é aprendida — imposta por um processo de
          socialização que naturaliza papéis arbitrários.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Sexo biológico</h3>
            <p>
              Características anatômicas, cromossômicas e hormonais que geralmente classificam
              os corpos em masculino, feminino e intersexo. É uma categoria biológica — embora
              a biologia mostre que o sexo também não é simplesmente binário.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Gênero</h3>
            <p>
              Construção social e cultural do que significa ser "homem" ou "mulher" em
              determinada sociedade: papéis, comportamentos, expectativas e identidades
              que são aprendidos, não inatos. O gênero varia entre culturas e épocas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌈</span>
            <h3>Identidade de gênero</h3>
            <p>
              Como a pessoa se identifica internamente (homem, mulher, não-binário, etc.) —
              pode ou não coincidir com o sexo biológico atribuído ao nascer. Pessoas
              transgênero têm identidade de gênero diferente do sexo atribuído.
            </p>
          </div>
          <div className="lesson-card">
            <span>💫</span>
            <h3>Orientação sexual</h3>
            <p>
              Atração afetiva e/ou sexual por pessoas de determinado gênero (heterossexual,
              homossexual, bissexual, assexual, etc.). É uma dimensão independente da
              identidade de gênero: uma pessoa transgênero pode ser heterossexual ou
              homossexual.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Teoria Queer e desconstrução do binarismo</h3>
          <p>
            A <strong>teoria queer</strong>, desenvolvida por Judith Butler em <em>Problemas
            de Gênero</em> (1990), vai além da distinção sexo/gênero: questiona que mesmo o
            sexo biológico é uma construção discursiva. Para Butler, o gênero é uma
            <strong> performance</strong> — não uma essência interna, mas atos repetidos que
            criam a ilusão de uma identidade estável. Isso abre espaço para pensar
            identidades que escapam ao binário homem/mulher.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Patriarcado</span>
        <h2>2. Patriarcado e Machismo: Estrutura, Cotidiano e Símbolo</h2>
        <p>
          <strong>Patriarcado</strong> é um sistema social em que homens detêm autoridade,
          poder e privilégios superiores aos das mulheres, estruturando família, economia,
          política e cultura. Não é apenas um conjunto de atitudes individuais — é uma
          estrutura que organiza a sociedade inteira, distribui recursos e define quem
          tem voz, poder e acesso.
        </p>
        <p>
          Pierre Bourdieu, em <em>A Dominação Masculina</em> (1998), mostrou que essa
          dominação é sobretudo <strong>simbólica</strong>: ela se reproduz porque é
          incorporada pelos próprios dominados como "natural". Mulheres aprendem desde cedo
          a se comportar de certas formas, a valorizar certas qualidades e a aceitar certas
          limitações — sem perceber que estão reproduzindo uma ordem arbitrária. Isso é
          o que Bourdieu chama de <strong>violência simbólica</strong>: violência que
          não precisa de espancamento para funcionar.
        </p>
        <p>
          O patriarcado não é monolítico: varia historicamente e entre culturas. Na
          contemporaneidade, ele se adapta — mulheres acessam o mercado de trabalho, mas
          acumulam o trabalho doméstico (dupla jornada); chegam a cargos de chefia, mas
          enfrentam o "teto de vidro" que limita seu avanço. O sistema patriarcal se
          transforma para sobreviver.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de machismo</th>
                <th>Manifestação</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estrutural</td>
                <td>Embutido em leis, instituições e estrutura econômica</td>
                <td>Desigualdade salarial; sub-representação feminina no Congresso</td>
              </tr>
              <tr>
                <td>Institucional</td>
                <td>Práticas organizacionais que excluem ou desvalorizam mulheres</td>
                <td>Menos promoções para mulheres; assédio tolerado nos ambientes de trabalho</td>
              </tr>
              <tr>
                <td>Cotidiano</td>
                <td>Atitudes discriminatórias no dia a dia</td>
                <td>Mansplaining; interrupção de mulheres em reuniões</td>
              </tr>
              <tr>
                <td>Simbólico</td>
                <td>Representações que naturalizam a inferioridade feminina</td>
                <td>Publicidade sexista; estereótipos em livros didáticos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos Feministas</span>
        <h2>3. Feminismo: Ondas Históricas e Diversidade</h2>
        <p>
          O <strong>feminismo</strong> é um movimento social, político e intelectual que
          luta pela igualdade de direitos e oportunidades entre mulheres e homens, e pela
          eliminação das opressões de gênero. Sua história é geralmente organizada em
          "ondas", cada uma com pautas específicas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Primeira onda (séc. XIX – 1960s)</h3>
            <p>
              Luta pelo sufrágio feminino e direitos civis. No Brasil, as mulheres
              conquistaram o direito de voto em 1932. Figuras: Simone de Beauvoir,
              Betty Friedan, Bertha Lutz (Brasil).
            </p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Segunda onda (1960s – 1980s)</h3>
            <p>
              Expansão para sexualidade, trabalho, corpo e vida privada. "O pessoal é
              político." Luta pelo aborto, creches, igualdade no trabalho. Kate Millett,
              Germaine Greer, Simone de Beauvoir.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Terceira onda (1990s – 2010s)</h3>
            <p>
              Diversidade interna ao feminismo; crítica ao feminismo branco e hegemônico.
              Interseccionalidade (Crenshaw); feminismo negro; pós-colonial; queer.
              bell hooks, Judith Butler.
            </p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Quarta onda (2010s – presente)</h3>
            <p>
              Feminismo digital e redes sociais. MeToo (#MeToo), #EleNão, Marcha das
              Mulheres. Combate ao assédio e abuso sexual; representatividade;
              feminismo de base.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Feminismo negro no Brasil</h3>
          <p>
            Lélia Gonzalez, Sueli Carneiro e Djamila Ribeiro foram pioneiras no feminismo
            negro brasileiro, criticando o feminismo hegemônico (branco e de classe média)
            por ignorar as especificidades das mulheres negras. Para Lélia Gonzalez, a
            "amefricanidade" descreve a identidade das mulheres afro-latino-americanas,
            marcada pela sobreposição do racismo e do sexismo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Violência de Gênero</span>
        <h2>4. Violência de Gênero: Doméstica, Feminicídio e Assédio</h2>
        <p>
          A <strong>violência de gênero</strong> é aquela praticada contra uma pessoa em
          função do seu gênero ou sexualidade. A forma mais prevalente é a violência contra
          mulheres, especialmente a violência doméstica. No Brasil, uma mulher é espancada
          a cada 15 segundos, segundo o Fórum Brasileiro de Segurança Pública.
        </p>
        <p>
          A <strong>Lei Maria da Penha</strong> (Lei 11.340/2006) foi criada após o caso de
          Maria da Penha Maia Fernandes, que ficou paraplégica após tentativas de assassinato
          pelo marido e esperou 19 anos por uma condenação. O Brasil foi condenado pela
          Comissão Interamericana de Direitos Humanos por omissão. A lei define violência
          doméstica em suas diversas formas (física, psicológica, sexual, patrimonial e moral),
          cria medidas protetivas de urgência, proíbe penas alternativas e permite prisão
          preventiva do agressor.
        </p>
        <p>
          O <strong>feminicídio</strong> (Lei 13.104/2015) é o homicídio praticado contra
          mulher em razão de sua condição de gênero — seja por violência doméstica, seja por
          menosprezo ou discriminação. É qualificadora do homicídio com pena de 12 a 30 anos.
          O Brasil registra mais de 3.700 feminicídios por ano — cerca de um a cada duas horas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de violência</th>
                <th>Definição (Lei Maria da Penha)</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Física</td>
                <td>Conduta que ofende a integridade ou saúde corporal</td>
                <td>Tapas, socos, queimaduras, mordidas</td>
              </tr>
              <tr>
                <td>Psicológica</td>
                <td>Dano emocional, diminuição da autoestima, controle</td>
                <td>Ameaças, humilhações, isolamento social</td>
              </tr>
              <tr>
                <td>Sexual</td>
                <td>Forçar ou induzir a prática sexual não consentida</td>
                <td>Estupro conjugal; pornografia não consentida</td>
              </tr>
              <tr>
                <td>Patrimonial</td>
                <td>Controle dos bens, documentos e recursos financeiros</td>
                <td>Destruir documentos; negar acesso ao dinheiro</td>
              </tr>
              <tr>
                <td>Moral</td>
                <td>Calúnia, difamação ou injúria</td>
                <td>Acusar falsamente de infidelidade; xingamentos públicos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade</span>
        <h2>5. Desigualdade de Gênero no Mercado de Trabalho</h2>
        <p>
          Apesar de as mulheres terem, em média, mais anos de escolaridade que os homens no
          Brasil, elas ganham em média <strong>78% do salário masculino</strong> (IBGE, 2022).
          Essa diferença — chamada de <em>gap</em> salarial de gênero — não é explicada por
          produtividade nem por escolha profissional, mas por <strong>discriminação estrutural</strong>.
        </p>
        <p>
          Além do gap salarial, as mulheres enfrentam o <strong>teto de vidro</strong>: barreira
          invisível que dificulta o acesso a cargos de liderança. No Brasil, mulheres representam
          apenas 13% dos conselheiros das maiores empresas (IBGE, 2022) e 15% dos cargos de
          direção no serviço público federal. No Congresso Nacional, apenas 17% dos parlamentares
          são mulheres — uma das menores proporções da América Latina.
        </p>
        <p>
          As mulheres realizam <strong>dupla ou tripla jornada</strong>: além do trabalho
          remunerado, respondem pela maior parte do trabalho doméstico e de cuidado (filhos,
          idosos, casa). Pesquisa do IBGE (2022) mostrou que mulheres dedicam, em média, 21,3
          horas semanais a afazeres domésticos, contra 11 horas dos homens. Esse trabalho
          reprodutivo é invisível e não remunerado, mas é fundamental para a reprodução
          social — e é desproporcionalmente feminino.
        </p>

        <div className="lesson-highlight">
          <h3>Interseccionalidade no mercado de trabalho</h3>
          <p>
            A desigualdade salarial se aprofunda quando se cruzam gênero e raça: mulheres negras
            ganham, em média, 55% do salário de homens brancos — o piso mais baixo da pirâmide
            salarial brasileira. O conceito de <strong>interseccionalidade</strong> (Kimberlé
            Crenshaw) é fundamental para entender como diferentes eixos de opressão se combinam
            para produzir desvantagens específicas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diversidade Sexual</span>
        <h2>6. Diversidade Sexual e de Gênero: LGBTQIA+ e Direitos</h2>
        <p>
          A sigla <strong>LGBTQIA+</strong> agrupa identidades diversas de orientação sexual
          e identidade de gênero. Cada letra representa um grupo com experiências e demandas
          específicas, embora todos compartilhem a experiência da discriminação em uma sociedade
          heteronormativa e cisnormativa — que trata a heterossexualidade e a cisgeneridade
          como normas e todas as demais identidades como desvios.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Letra</th>
                <th>Identidade / Orientação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>L</td><td>Lésbica — mulher que se atrai afetiva e/ou sexualmente por mulheres</td></tr>
              <tr><td>G</td><td>Gay — homem que se atrai afetiva e/ou sexualmente por homens</td></tr>
              <tr><td>B</td><td>Bissexual — atração por mais de um gênero</td></tr>
              <tr><td>T</td><td>Transgênero / Travesti — identidade de gênero diferente do sexo atribuído ao nascer</td></tr>
              <tr><td>Q</td><td>Queer — identidade ou orientação que escapa às normas binárias; também usado como guarda-chuva</td></tr>
              <tr><td>I</td><td>Intersexo — variações biológicas que não se encaixam no binário sexual</td></tr>
              <tr><td>A</td><td>Assexual — pouca ou nenhuma atração sexual; Agênero — sem identificação com gênero</td></tr>
              <tr><td>+</td><td>Demais identidades e orientações não abrangidas pelas letras anteriores</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Conquistas jurídicas importantes no Brasil incluem: o reconhecimento da união
          estável homoafetiva pelo STF (2011); a permissão de casamento civil entre pessoas
          do mesmo sexo pelo CNJ (2013); a criminalização da homofobia e transfobia pelo STF
          (2018, por analogia à Lei do Racismo); e a permissão de mudança de gênero no
          registro civil sem cirurgia (STF, 2018).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">LGBTfobia</span>
        <h2>7. LGBTfobia, Transfobia e Violência</h2>
        <p>
          A <strong>LGBTfobia</strong> — discriminação e violência contra pessoas LGBTQIA+ —
          é um problema grave no Brasil. O país lidera o ranking mundial de assassinatos de
          pessoas trans e travestis: em 2022, foram registrados 131 homicídios de pessoas
          trans e travestis (Antra, 2023), e o Brasil ocupa esse triste posto há 14 anos
          consecutivos.
        </p>
        <p>
          A <strong>transfobia</strong> — discriminação específica contra pessoas transgênero
          e travestis — se manifesta em exclusão do mercado de trabalho formal (80% das
          travestis e mulheres trans recorrem à prostituição como única fonte de renda),
          abandono escolar, expulsão familiar, violência física e assassinatos. A expectativa
          de vida de travestis e mulheres trans no Brasil é de apenas 35 anos (Antra).
        </p>
        <p>
          A <strong>homofobia</strong> se manifesta em violência física, assédio, discriminação
          no trabalho e na escola, e o chamado "parent out" — expulsão de jovens LGBTQIA+ do
          núcleo familiar. Pesquisas mostram que jovens LGBTQIA+ têm taxas significativamente
          maiores de depressão, ansiedade e tentativas de suicídio em comparação com jovens
          heterossexuais e cisgênero.
        </p>

        <div className="lesson-highlight">
          <h3>Criminalização da homofobia — STF (2019)</h3>
          <p>
            Em 2019, o STF decidiu criminalizar a homofobia e a transfobia por analogia à Lei
            do Racismo (Lei 7.716/89), que pune crimes de discriminação por raça, cor, etnia,
            religião ou procedência nacional. A decisão foi necessária porque o Congresso
            não havia aprovado lei específica sobre o tema. A criminalização não elimina a
            violência, mas oferece instrumento jurídico de proteção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde e Direitos</span>
        <h2>8. Saúde Reprodutiva e Direitos Sexuais</h2>
        <p>
          Os <strong>direitos sexuais e reprodutivos</strong> são direitos humanos fundamentais
          que garantem às pessoas autonomia sobre seu corpo, sexualidade e reprodução. Incluem
          o direito à informação, ao planejamento familiar, à contracepção, à saúde materna
          e ao aborto legal nas hipóteses previstas em lei.
        </p>
        <p>
          No Brasil, o aborto é permitido em três situações: risco de vida para a gestante,
          gravidez resultante de estupro e gestação de anencéfalo (após decisão do STF em 2012).
          Fora dessas hipóteses, é crime. No entanto, o <strong>aborto clandestino</strong>
          é uma realidade: estima-se que cerca de 1 milhão de abortos são realizados
          ilegalmente por ano no Brasil (PNAS, 2016), em condições de risco, com impacto
          desproporcionalmente maior sobre mulheres negras e pobres sem acesso a serviços
          de saúde seguros.
        </p>
        <p>
          A <strong>mortalidade materna</strong> no Brasil também tem dimensão racial: mulheres
          negras morrem durante a gestação e o parto a uma taxa significativamente maior que
          mulheres brancas — reflexo do racismo institucional no sistema de saúde, que resulta
          em menor atenção, menor anestesia e menor humanização no atendimento a mulheres negras
          (fenômeno documentado por pesquisas como a da Fiocruz).
        </p>

        <div className="lesson-highlight">
          <h3>Violência obstétrica</h3>
          <p>
            A <strong>violência obstétrica</strong> é qualquer ato praticado durante o parto
            que viole os direitos e a dignidade da mulher — intervenções sem consentimento,
            procedimentos dolorosos desnecessários, xingamentos, humilhações. No Brasil,
            uma em cada quatro mulheres relatou violência obstétrica durante o parto (Fiocruz,
            2014), com maior incidência entre mulheres negras.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Política e Representação</span>
        <h2>9. Representação Política das Mulheres</h2>
        <p>
          A sub-representação feminina na política é um problema estrutural. No Brasil, as
          mulheres representam 52% do eleitorado, mas apenas 17% dos deputados federais e
          16% dos senadores eleitos em 2022. Na América Latina, o Brasil ocupa posição
          inferior à média regional em termos de participação feminina no parlamento.
        </p>
        <p>
          Para combater essa desigualdade, a legislação brasileira estabelece a cota de
          <strong>30% de candidaturas femininas</strong> nos partidos políticos (Lei
          9.504/1997). No entanto, pesquisas apontam que os partidos frequentemente
          cumprem a cota no papel sem oferecer estrutura real de campanha às candidatas —
          o que explica por que as cotas de candidatura não se traduzem em proporção
          equivalente de eleitas.
        </p>
        <p>
          A discussão sobre representação não se limita ao número de mulheres eleitas, mas
          à <strong>representação substantiva</strong>: eleger mulheres que de fato
          defendam pautas feministas e os interesses das mulheres mais vulneráveis, incluindo
          mulheres negras, LGBTQIA+ e de baixa renda. Figuras como Marielle Franco
          (vereadora assassinada no Rio em 2018) simbolizaram essa representação interseccional.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Cota de candidatura (30%)</h3>
            <p>
              Lei 9.504/1997 obriga partidos a reservar 30% das candidaturas para mulheres.
              O descumprimento gera multas, mas é comum a candidatura sem estrutura real.
            </p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>Financiamento de campanhas</h3>
            <p>
              Desde 2019, partidos são obrigados a destinar 30% do Fundo Eleitoral a
              candidatas mulheres. Fiscalização ainda é frágil.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Paridade nos executivos</h3>
            <p>
              Discussões sobre paridade de gênero em ministérios e cargos executivos
              ganham força, mas efetivação depende de vontade política dos governantes.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Contemporânea</span>
        <h2>10. Debates Contemporâneos: Identidade, Reconhecimento e Backlash</h2>
        <p>
          Os debates contemporâneos sobre gênero e sexualidade são marcados tanto por avanços
          significativos quanto por reações conservadoras — o chamado <strong>backlash</strong>
          (reação contrária). O politólogo estadunidense Susan Faludi usou o termo para
          descrever como cada avanço feminista provoca uma reação de retrocesso cultural
          e político.
        </p>
        <p>
          No Brasil, debates sobre a "ideologia de gênero" — expressão criada por setores
          conservadores para atacar a educação sexual nas escolas e os direitos LGBTQIA+ —
          ganharam força política nos anos 2010. A expressão é considerada um conceito
          equivocado pela maioria dos sociólogos: gênero como objeto de estudo científico
          não é "ideologia", mas análise empírica das desigualdades sociais.
        </p>
        <p>
          Ao mesmo tempo, surgem novas formas de luta e reconhecimento: a popularização das
          categorias não-binárias, o debate sobre uso de pronomes neutros em português ("elu"),
          a representatividade LGBTQIA+ na mídia e na política. O filósofo <strong>Axel
          Honneth</strong>, na teoria do <em>reconhecimento</em>, argumenta que a luta
          por igualdade é também uma luta por reconhecimento social da dignidade de identidades
          historicamente estigmatizadas.
        </p>

        <div className="lesson-highlight">
          <h3>Marielle Franco: símbolo e luta</h3>
          <p>
            Marielle Franco (1979–2018) foi vereadora pelo Rio de Janeiro, mulher negra,
            lésbica, oriunda da favela da Maré. Seu assassinato em março de 2018 chocou
            o Brasil e o mundo, tornando-se símbolo da violência contra mulheres negras
            e LGBTQIA+ que se engajam politicamente. O caso, que levou anos para ser
            elucidado, evidenciou as articulações entre crime organizado, milícias e
            política — e a vulnerabilidade de quem representa grupos marginalizados
            em ambientes políticos hostis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Sexo vs. gênero"
          statement={<p>A Sociologia distingue "sexo" de "gênero". Qual das alternativas <strong>melhor</strong> descreve o conceito sociológico de gênero?</p>}
          options={[
            { letter: "A", text: "As características biológicas e cromossômicas que classificam os seres humanos em masculino ou feminino." },
            { letter: "B", text: "A construção social e cultural do que significa ser homem ou mulher em determinada sociedade, incluindo papéis, comportamentos e identidades aprendidos.", correct: true },
            { letter: "C", text: "A orientação sexual de um indivíduo, determinada pela atração afetiva e sexual que sente." },
            { letter: "D", text: "A identidade de gênero de pessoas transgênero, em oposição à identidade de pessoas cisgênero." },
            { letter: "E", text: "A diferença entre homens e mulheres no mercado de trabalho, medida em salários e cargos." },
          ]}
          resolution={<p>Gênero é uma construção social: os papéis, comportamentos e expectativas atribuídos a homens e mulheres são aprendidos por meio da socialização, não determinados geneticamente. A frase de Simone de Beauvoir resume isso: "Não se nasce mulher: torna-se mulher."</p>}
        />

        <Exercise
          level="Intermediário"
          title="Lei Maria da Penha"
          statement={<p>A Lei Maria da Penha (11.340/2006) representou um avanço importante no combate à violência de gênero no Brasil. Qual das seguintes afirmações sobre a lei está <strong>correta</strong>?</p>}
          options={[
            { letter: "A", text: "A lei se aplica apenas à violência física praticada por cônjuges." },
            { letter: "B", text: "A lei permite que o agressor pague multa em substituição à prisão, evitando a criminalização da violência doméstica." },
            { letter: "C", text: "A lei define violência doméstica em suas diversas formas (física, psicológica, sexual, patrimonial e moral), cria medidas protetivas de urgência e veda penas alternativas como pagamento de cestas básicas.", correct: true },
            { letter: "D", text: "A lei foi criada espontaneamente pelo Congresso, sem pressão de movimentos de mulheres ou de organismos internacionais." },
            { letter: "E", text: "A lei protege apenas mulheres casadas em relações heterossexuais." },
          ]}
          resolution={<p>A Lei Maria da Penha define violência doméstica de forma ampla (física, psicológica, sexual, patrimonial e moral) e aplica-se a qualquer relação doméstica ou de afeto, incluindo relações homoafetivas. Foi criada após pressão de movimentos feministas e condenação do Brasil pela Comissão Interamericana de Direitos Humanos por não punir o caso de Maria da Penha.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Dominação masculina e violência simbólica"
          statement={<p>Pierre Bourdieu, ao analisar a dominação masculina, argumenta que ela é reproduzida principalmente por meio da <strong>violência simbólica</strong>, o que significa:</p>}
          options={[
            { letter: "A", text: "Agressões físicas simbólicas que deixam marcas psicológicas nas mulheres." },
            { letter: "B", text: "Uma dominação exercida por meio de representações culturais, discursos e práticas sociais que os próprios dominados incorporam como naturais, sem perceber que reproduzem a subordinação.", correct: true },
            { letter: "C", text: "A violência praticada apenas em espaços públicos, como ruas e locais de trabalho." },
            { letter: "D", text: "A dominação exercida exclusivamente pelos meios de comunicação de massa." },
            { letter: "E", text: "Atos de violência explícita praticados em rituais e cerimônias religiosas." },
          ]}
          resolution={<p>A violência simbólica de Bourdieu é uma dominação que se torna invisível porque é incorporada pelos próprios dominados. Mulheres aprendem a se comportar de certas maneiras, a valorizar certas qualidades e a aceitar certas limitações sem questionar. Isso não diminui o caráter violento da dominação: é violência sem espancamento, mas igualmente real e eficaz.</p>}
        />

        <Exercise
          level="Avançado"
          title="Feminicídio e patriarcado"
          statement={
            <p>
              O Brasil registra mais de 3.700 feminicídios por ano. A criminalização do
              feminicídio como qualificadora do homicídio (Lei 13.104/2015) representa
              uma inovação importante, pois reconhece legalmente que:
            </p>
          }
          options={[
            { letter: "A", text: "Assassinatos de mulheres são sempre cometidos por familiares, o que justifica pena maior." },
            { letter: "B", text: "O gênero da vítima é irrelevante para a análise criminal do homicídio." },
            { letter: "C", text: "Certos homicídios são motivados especificamente pela condição de gênero da vítima — pelo desejo de dominar, punir ou eliminar uma mulher por ser mulher —, exigindo resposta penal diferenciada.", correct: true },
            { letter: "D", text: "Toda violência doméstica culmina inevitavelmente em feminicídio, tornando desnecessária a Lei Maria da Penha." },
            { letter: "E", text: "O feminicídio ocorre apenas em países sem legislação igualitária de gênero." },
          ]}
          resolution={<p>O feminicídio não é apenas um homicídio qualquer: é um assassinato motivado pela condição de gênero da vítima — expressão extrema da misoginia e do patriarcado. Ao criar essa qualificadora, a lei reconhece a dimensão de gênero da violência e reforça a mensagem de que matar mulheres por serem mulheres é crime grave, com pena de 12 a 30 anos.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Desigualdade salarial de gênero e interseccionalidade"
          statement={
            <>
              <p>
                Dados do IBGE (2022) mostram que mulheres ganham, em média, 78% do salário
                dos homens no Brasil — diferença que persiste mesmo quando se controla o nível
                de escolaridade (mulheres têm, em média, mais anos de estudo). Mulheres negras
                recebem em média 55% do salário de homens brancos.
              </p>
              <p>Com base nos dados e nos conceitos sociológicos, assinale a alternativa correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "A diferença salarial é justificada pela menor produtividade biológica das mulheres." },
            { letter: "B", text: "A diferença salarial ocorre porque mulheres escolhem profissões naturalmente menos valorizadas, sem relação com o gênero." },
            { letter: "C", text: "A diferença salarial entre homens e mulheres, e especialmente entre homens brancos e mulheres negras, revela a interseccionalidade de gênero e raça como eixos estruturantes da desigualdade no mercado de trabalho.", correct: true },
            { letter: "D", text: "O fato de mulheres terem mais escolaridade que homens prova que a desigualdade salarial está sendo superada naturalmente." },
            { letter: "E", text: "A desigualdade salarial de gênero é um problema exclusivo de países que não têm legislação trabalhista igualitária." },
          ]}
          resolution={<p>Os dados revelam interseccionalidade (conceito de Kimberlé Crenshaw): gênero e raça se combinam para produzir desigualdades distintas. Mulheres ganham menos que homens mesmo com mais escolaridade (discriminação de gênero); mulheres negras ganham ainda menos que mulheres brancas (discriminação racial). A desigualdade não se explica pela produtividade nem pela escolha profissional, mas por estruturas patriarcais e racistas que desvalorizam o trabalho de certos grupos.</p>}
        />
      </section>
    </article>
  );
}
