"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 38</span>
          <h1>Biopolítica, Vigilância e Controle Social</h1>
          <p>
            Michel Foucault revolucionou a análise do poder ao mostrar que ele não se exerce apenas
            pela força bruta, mas pela disciplina dos corpos e pela gestão das populações. Seus conceitos
            de biopolítica e biopoder — complementados por Bentham, Agamben, Bauman e Mbembe —
            iluminam como as sociedades modernas controlam, vigiam e administram a vida humana,
            questão central nas provas do ENEM de Sociologia e Filosofia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Foucault</span>
        <h2>1. Disciplina, Biopoder e Biopolítica em Foucault</h2>
        <p>
          Em <em>Vigiar e Punir</em> (1975) e em suas aulas no Collège de France, Michel Foucault
          traçou a genealogia do poder moderno, distinguindo dois regimes distintos: o poder
          soberano pré-moderno (que fazia morrer ou deixava viver — espetáculo da punição pública)
          e o biopoder moderno (que faz viver e deixa morrer — gestão da vida das populações).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏋️</span>
            <h3>Poder disciplinar (anátomo-política)</h3>
            <p>Incide sobre corpos individuais: dociliza, adestra, normaliza. Opera em instituições fechadas: escola, quartel, hospital, prisão. Instrumento central: o olhar que vigia e a norma que classifica.</p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Biopoder / Biopolítica</h3>
            <p>Incide sobre populações inteiras: controla natalidade, mortalidade, saúde, fluxos migratórios, epidemias. Instrumento central: estatísticas, demografias, políticas públicas, medicina social.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Saber-poder</h3>
            <p>Para Foucault, saber e poder são indissociáveis: a psiquiatria produz o "louco", a medicina produz o "doente", a criminologia produz o "delinquente" — classificações que justificam intervenções de poder.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Normalização</h3>
            <p>O poder moderno opera pela norma, não apenas pela lei. A norma distingue o normal do patológico, o sadio do doente, o sãos dos perigosos — e exige correção, tratamento, vigilância.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>O racismo de Estado em Foucault</h3>
          <p>
            Em "Em Defesa da Sociedade" (1976), Foucault argumentou que o racismo, no Estado
            moderno biopolítico, funciona como mecanismo que divide a população entre quem merece
            viver (populações a proteger, fazer prosperar) e quem pode ser deixado morrer — exposição
            ao risco, negligência, encarceramento. Essa análise é central para entender desigualdades
            em saúde pública, segurança e encarceramento no Brasil contemporâneo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Panoptismo</span>
        <h2>2. O Panóptico e a Vigilância Contemporânea</h2>
        <p>
          O filósofo utilitarista Jeremy Bentham projetou o <strong>Panóptico</strong> (1791): uma
          prisão circular em que uma única torre central pode observar todas as celas sem que os
          presos saibam quando estão sendo vigiados. O efeito é revolucionário: os presos passam
          a vigiar a si mesmos, internalizando o controle externo. O poder se torna automatizado
          e desindividualizado.
        </p>
        <p>
          Foucault utilizou o panóptico como metáfora da sociedade disciplinar moderna: não
          precisamos de um guarda em cada cela — basta a <em>possibilidade</em> do olhar. A
          eficácia do poder disciplinar reside exatamente nisso: o poder funciona mesmo na ausência
          do agente de controle, porque os próprios sujeitos assumem sua função. A vigilância
          se torna permanente mesmo quando intermitente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma de vigilância</th>
                <th>Período / Contexto</th>
                <th>Mecanismo</th>
                <th>Referência teórica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Panóptico de Bentham</td>
                <td>Séc. XVIII-XIX</td>
                <td>Torre central observa celas circulares; vigilância possível e invisível</td>
                <td>Bentham / Foucault</td>
              </tr>
              <tr>
                <td>Câmeras de segurança urbanas</td>
                <td>Séc. XX-XXI</td>
                <td>Monitoramento físico de espaços públicos e privados</td>
                <td>Foucault aplicado ao urbano</td>
              </tr>
              <tr>
                <td>Vigilância digital de plataformas</td>
                <td>Séc. XXI</td>
                <td>Rastreamento de comportamentos online; dados vendidos a anunciantes</td>
                <td>Zuboff (capitalismo de vigilância)</td>
              </tr>
              <tr>
                <td>Vigilância líquida</td>
                <td>Séc. XXI</td>
                <td>Vigilância difusa, voluntária, descentralizada via redes sociais</td>
                <td>Bauman e Lyon</td>
              </tr>
              <tr>
                <td>Sistema de crédito social (China)</td>
                <td>Séc. XXI</td>
                <td>Pontuação de comportamento por IA; recompensas e sanções automáticas</td>
                <td>Necropolítica / biopoder digital</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Vigilância líquida (Bauman e Lyon)</h3>
          <p>
            Zygmunt Bauman e David Lyon, em "Vigilância Líquida" (2013), propõem que a vigilância
            contemporânea não se encaixa no modelo panóptico rígido: ela é fluida, voluntária e
            onipresente. Ao contrário dos presos de Bentham, os usuários de redes sociais
            entregam voluntariamente dados pessoais em troca de conveniência e conexão social.
            A vigilância não é mais de cima para baixo — é horizontal, descentralizada e ubíqua.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agamben</span>
        <h2>3. Estado de Exceção e Vida Nua (Giorgio Agamben)</h2>
        <p>
          O filósofo italiano Giorgio Agamben, em <em>Homo Sacer</em> (1995) e <em>Estado de
          Exceção</em> (2003), desenvolveu uma análise radical do poder soberano moderno.
          Partindo de Foucault e do jurista Carl Schmitt, Agamben argumenta que a exceção — a
          suspensão temporária da lei em nome da segurança — não é uma anomalia, mas a estrutura
          oculta do poder soberano moderno.
        </p>
        <p>
          Agamben recupera a distinção grega entre dois modos de vida: <em>zoé</em> (vida nua,
          biológica, animal) e <em>bíos</em> (vida qualificada, política, com direitos e
          pertencimento à polis). Para ele, o poder soberano moderno opera incluindo os sujeitos
          na ordem jurídica ao mesmo tempo em que os exclui: é a "inclusão exclusiva" — a vida
          é capturada pelo poder político precisamente em sua dimensão biológica nua.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Vida nua (zoé)</h3>
            <p>Vida biológica despida de direitos e pertencimento político. O ser humano reduzido à sua existência animal, excluído da proteção do ordenamento jurídico.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Vida qualificada (bíos)</h3>
            <p>Vida política, com direitos, cidadania, participação na esfera pública. O modo de vida reconhecido e protegido pela ordem jurídica e política.</p>
          </div>
          <div className="lesson-card">
            <span>🏕️</span>
            <h3>Campo de concentração</h3>
            <p>Agamben o analisa como "paradigma biopolítico da modernidade": o espaço onde o Estado reduz humanos à vida nua, suspendendo o ordenamento jurídico — não exceção, mas estrutura.</p>
          </div>
          <div className="lesson-card">
            <span>🚨</span>
            <h3>Estado de exceção como norma</h3>
            <p>Legislações antiterrorismo, estados de emergência climática e sanitária revelam que a exceção tende a se normalizar — o "provisório" se torna permanente, expandindo o poder soberano.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Aplicação ao contexto brasileiro</h3>
          <p>
            A noção de "vida nua" de Agamben ilumina situações como a de populações em favelas
            submetidas a operações policiais sem garantias processuais, onde balas policiais matam
            sem investigação — como no caso Marielle Franco ou nas chacinas do Jacarezinho e do
            Cabula. São pessoas para quem a proteção jurídica formal existe no papel, mas não na
            prática cotidiana. Também ilumina a condição de refugiados e imigrantes indocumentados,
            reduzidos à vida nua pelo Estado soberano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mbembe</span>
        <h2>4. Necropolítica — Achille Mbembe</h2>
        <p>
          O filósofo camaronês Achille Mbembe, em "Necropolítica" (2003), radicaliza a análise
          foucaultiana ao perguntar: quem pode ser morto e quem não pode? Para Foucault, o biopoder
          administrava o "fazer viver e deixar morrer". Mbembe vai além: nas colônias e nas periferias
          contemporâneas, o poder soberano não apenas "deixa morrer" — ele age ativamente para matar.
          Isso é a <strong>necropolítica</strong>: a política da morte, a gestão soberana de quem
          pode ser assassinado sem punição.
        </p>
        <p>
          Mbembe desenvolve o conceito analisando a experiência colonial africana, o apartheid
          sul-africano, o Estado de Israel/Palestina e as favelas brasileiras. Em todos esses casos,
          existe uma zona em que o poder soberano decide quem é humano e quem é descartável. A
          necropolítica não é apenas uma política de morte física — é uma forma de organizar a
          vida social de modo que certas populações sejam expostas permanentemente ao risco de morte.
        </p>
        <div className="lesson-highlight">
          <h3>Necropolítica e o genocídio da população negra no Brasil</h3>
          <p>
            Pesquisadores como Silvio Almeida e Winnie Bueno aplicam o conceito de necropolítica
            ao Brasil: o Atlas da Violência (IPEA) documenta que jovens negros são assassinados
            2,5 vezes mais do que jovens brancos da mesma faixa etária. As políticas de segurança
            pública que permitem "autos de resistência" (mortes em operações policiais sem
            investigação adequada) constituem uma forma de necropolítica: o Estado decide
            implicitamente que certas vidas valem menos e podem ser eliminadas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Controle Social</span>
        <h2>5. Controle Social: Formal e Informal</h2>
        <p>
          Muito anterior a Foucault, o conceito de <strong>controle social</strong> aparece na
          Sociologia clássica como mecanismo que garante a conformidade dos indivíduos às normas
          do grupo. Toda sociedade desenvolve formas de fazer com que seus membros sigam as regras
          estabelecidas — sem isso, a vida social seria impossível. A questão sociológica é: quais
          são essas formas? Em benefício de quem operam? Quem define as normas?
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Controle formal</h3>
            <p>Exercido por instituições especializadas — polícia, judiciário, sistema prisional, serviço militar. Opera por leis escritas e sanções formalmente definidas. Típico de sociedades complexas e modernas.</p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Controle informal</h3>
            <p>Exercido por família, escola, comunidade, religião, pares. Opera por sanções difusas — aprovação, reprovação, vergonha, ostracismo, fofoca. Mais eficaz e pervasivo do que o formal.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Controle algorítmico</h3>
            <p>Nova forma de controle social mediada por plataformas digitais: algoritmos regulam o que é visto, quem é amplificado, quem é silenciado — sem leis explícitas, mas com efeitos políticos concretos.</p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>Controle antecipado</h3>
            <p>Vigilância preditiva usa IA para identificar "riscos" antes de qualquer crime. Policiamento preditivo, análise de rede social para "prevenir" terrorismo — mas recai desproporcionalmente sobre grupos marginalizados.</p>
          </div>
        </div>
        <p>
          Michel Foucault e, antes dele, Antonio Gramsci oferecem análises distintas sobre o
          controle social. Para Gramsci, o controle nas sociedades ocidentais avançadas opera
          principalmente pela <strong>hegemonia cultural</strong>: o grupo dominante convence a
          maioria de que seus valores e visão de mundo são os únicos legítimos, tornando a
          coerção desnecessária na maior parte do tempo. O controle é mais consentimento do que
          repressão — o que o torna mais eficaz e mais difícil de contestar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Punição e Prisão</span>
        <h2>6. A Questão Prisional e a Seletividade do Sistema Penal</h2>
        <p>
          <em>Vigiar e Punir</em> de Foucault (1975) traça a história da punição moderna: a transição
          do suplício público (tortura espetacular do corpo) para o encarceramento (disciplina
          contínua do sujeito). A prisão, para Foucault, não é um fracasso do sistema penal — é
          um sucesso. Ela não pretende reabilitar criminosos, mas produzir a "delinquência útil":
          um grupo marginalizado que justifica o aparato de controle e pode ser utilizado por
          redes ilegais sob supervisão policial.
        </p>
        <p>
          No Brasil, o sistema prisional é um dos maiores do mundo: a população carcerária
          ultrapassa 830 mil pessoas (3º maior encarceramento do mundo, após EUA e China), com
          um déficit de vagas acima de 200 mil. A seletividade racial e de classe é documentada:
          64% da população carcerária é negra (INFOPEN/DEPEN, 2022), embora negros representem
          56% da população brasileira. Crimes patrimoniais de menor potencial ofensivo (furto,
          roubo) predominam, enquanto crimes de colarinho branco raramente resultam em prisão.
        </p>
        <div className="lesson-highlight">
          <h3>Loïc Wacquant e o Estado penal</h3>
          <p>
            O sociólogo Loïc Wacquant, em "Punir os Pobres" (2001), analisa como nos EUA — e
            em países que seguiram o modelo neoliberal — o Estado de bem-estar social foi
            substituído pelo Estado penal: menos investimento em políticas sociais (habitação,
            educação, saúde para pobres) e mais encarceramento como forma de gerir a pobreza
            e a marginalidade urbana. O sistema prisional se torna uma política social às avessas:
            em vez de incluir, exclui e criminaliza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Corpo e Poder</span>
        <h2>7. Corpo, Gênero e Biopoder</h2>
        <p>
          Uma das contribuições mais inovadoras de Foucault foi mostrar que o poder incide
          diretamente sobre os corpos — não apenas por coerção física, mas pela produção de
          saberes que definem o que é um corpo "normal", "saudável", "produtivo", "desejável".
          Medicina, psiquiatria, sexologia, nutrição, educação física: todas essas disciplinas
          produzem normas corporais e, ao fazê-lo, exercem poder.
        </p>
        <p>
          A filósofa Judith Butler, em "Problemas de Gênero" (1990), radicaliza essa análise:
          o gênero não é expressão de uma identidade interior ou de um corpo biológico dado.
          O gênero é uma <strong>performatividade</strong> — uma série de atos repetidos e
          citações de normas de gênero que produzem o efeito de uma identidade estável. Sob
          essa perspectiva, o biopoder regula não apenas a reprodução das populações, mas a
          produção de corpos generificados.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩺</span>
            <h3>Medicalização do corpo</h3>
            <p>Processos corporais naturais (gravidez, menopausa, envelhecimento, morte) são progressivamente medicalizados — tratados como problemas médicos a resolver, não como experiências humanas normais.</p>
          </div>
          <div className="lesson-card">
            <span>🏋️</span>
            <h3>Biopolítica do corpo ideal</h3>
            <p>Indústria da beleza, fitness e dietas produz normas corporais ligadas a classe, raça e gênero. O corpo "saudável" e "belo" reflete valores da cultura dominante — e a "gordofobia" é uma forma de controle social.</p>
          </div>
          <div className="lesson-card">
            <span>⚧️</span>
            <h3>Controle da sexualidade</h3>
            <p>Foucault em "A História da Sexualidade" (1976): a modernidade não reprimiu a sexualidade — a produziu como objeto de saber-poder. Proliferação de discursos sobre sexo (medicina, psiquiatria, pedagogia, direito).</p>
          </div>
          <div className="lesson-card">
            <span>👶</span>
            <h3>Biopolítica e natalidade</h3>
            <p>Políticas demográficas, controle da natalidade, políticas familiares: exemplos clássicos de biopolítica. No Brasil, o debate sobre aborto é um campo biopolítico em que o Estado regula corpos femininos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resistência</span>
        <h2>8. Resistência ao Controle Social e Movimentos de Privacidade</h2>
        <p>
          O próprio Foucault argumentou que onde há poder, há resistência. As formas de resistência
          ao controle social são variadas e se transformam historicamente. Nos séculos XVIII-XIX,
          a resistência ao poder disciplinar tomou formas de greve, motim, deserção, fuga. No
          século XXI, a resistência ao biopoder e à vigilância digital assume novas configurações.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔐</span>
            <h3>Criptografia e anonimato</h3>
            <p>Uso de VPNs, Tor e criptografia de ponta a ponta (Signal, WhatsApp) para escapar da vigilância digital corporativa e estatal. Debate sobre backdoors (portas traseiras) para acesso governamental.</p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Whistleblowing</h3>
            <p>Edward Snowden (NSA, 2013) revelou programa global de espionagem dos EUA sobre líderes e cidadãos comuns. Chelsea Manning (2010) denunciou crimes de guerra via WikiLeaks. Denúncias de interesse público vs. segurança nacional.</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Direitos digitais</h3>
            <p>Organizações como EFF (EUA), Access Now e InternetLab (BR) pressionam por leis de privacidade, transparência algorítmica, neutralidade da rede e regulação de IA.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Contrapoder cultural</h3>
            <p>Arte, música, humor, memes como formas de resistência simbólica — o que Gramsci chamaria de guerra de posição cultural. Movimentos como o feminismo online, #BlackLivesMatter e #MeToo.</p>
          </div>
        </div>
        <p>
          Foucault chamava de <strong>cuidado de si</strong> (<em>souci de soi</em>) a prática
          de construir a própria subjetividade de modo autônomo, resistindo aos processos de
          normalização e governamentalização. Na contemporaneidade, o "cuidado de si" digital
          inclui o controle consciente sobre os próprios dados, o uso crítico de plataformas
          e a escolha de não participar de certos espaços de vigilância.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde e Biopoder</span>
        <h2>9. Pandemia, Saúde Pública e Biopolítica no Brasil</h2>
        <p>
          A pandemia de COVID-19 (2020-2022) foi um laboratório biopolítico em tempo real.
          Governos do mundo todo precisaram gerir coletivamente a vida e a morte de suas
          populações — lockdowns, vacinação compulsória, passaporte vacinal, quarentena
          obrigatória: medidas que revelam toda a dimensão biopolítica do Estado moderno.
          A saúde pública é, por excelência, o domínio do biopoder.
        </p>
        <p>
          No Brasil, a pandemia revelou as fraturas do sistema biopolítico: desigualdade de
          acesso a vacinas entre países ricos e pobres (apartheid vacinal), mortalidade
          diferencial por raça e classe, negacionismo científico como posição política de
          governo. Dados do IPEA e de universidades federais documentaram que a taxa de
          mortalidade por COVID-19 entre a população negra foi significativamente superior
          à da população branca — expressão do que Foucault chamava de racismo de Estado
          e Mbembe de necropolítica.
        </p>
        <div className="lesson-highlight">
          <h3>O debate Agamben vs. epidemiologistas</h3>
          <p>
            Giorgio Agamben gerou polêmica ao argumentar (2020) que as medidas de emergência
            sanitária expandiam o estado de exceção e suspendiam liberdades civis de forma
            desproporcional. Filósofos e epidemiologistas responderam que ele confundia o
            necessário exercício biopolítico de proteção da vida com autoritarismo. O debate
            ilumina uma tensão real: entre segurança coletiva (biopolítica) e liberdades
            individuais (direitos civis) — tensão que o ENEM frequentemente tematiza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Mapa Conceitual: Poder, Biopoder e Controle Social</h2>
        <p>
          A genealogia do poder moderno traçada por Foucault e expandida por Agamben, Mbembe e
          Bauman forma um mapa conceitual indispensável para a Sociologia do ENEM. Compreender
          que o poder não é apenas repressivo, mas produtivo; que opera não apenas pelo Estado,
          mas por instituições dispersas; que fabrica sujeitos ao mesmo tempo em que os controla
          — essas são as contribuições fundamentais para analisar qualquer situação social.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Autor</th>
                <th>Definição essencial</th>
                <th>Aplicação contemporânea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Poder disciplinar</td>
                <td>Foucault</td>
                <td>Adestramento de corpos individuais em instituições fechadas</td>
                <td>Escola, hospital, prisão, empresa</td>
              </tr>
              <tr>
                <td>Biopolítica</td>
                <td>Foucault</td>
                <td>Gestão da vida das populações por políticas públicas e saberes</td>
                <td>Saúde pública, vacinação, políticas demográficas</td>
              </tr>
              <tr>
                <td>Panoptismo</td>
                <td>Bentham / Foucault</td>
                <td>Vigilância que gera autocontrole pela possibilidade do olhar</td>
                <td>Câmeras, monitoramento corporativo, redes sociais</td>
              </tr>
              <tr>
                <td>Vida nua</td>
                <td>Agamben</td>
                <td>Vida biológica despida de direitos pelo poder soberano</td>
                <td>Refugiados, favelas, encarcerados sem julgamento</td>
              </tr>
              <tr>
                <td>Necropolítica</td>
                <td>Mbembe</td>
                <td>Gestão soberana de quem pode ser deixado morrer ou assassinado</td>
                <td>Violência policial, genocídio de jovens negros</td>
              </tr>
              <tr>
                <td>Vigilância líquida</td>
                <td>Bauman / Lyon</td>
                <td>Vigilância difusa, voluntária, ubíqua nas redes digitais</td>
                <td>Redes sociais, GPS, apps de entrega</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Estratégia para questões do ENEM sobre esse tema</h3>
          <p>
            Questões sobre biopolítica e vigilância no ENEM geralmente apresentam um texto de
            Foucault ou um caso contemporâneo (vigilância digital, pandemia, violência policial)
            e pedem que se identifique o conceito adequado. Atenção às pegadinhas: (1) não
            confundir poder disciplinar (sobre o indivíduo) com biopolítica (sobre populações);
            (2) não reduzir Foucault ao Estado — ele analisa poder disperso por toda a sociedade;
            (3) não confundir "estado de exceção" de Agamben com simples estado de emergência
            administrativo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Disciplina e biopoder"
          statement={<p>No pensamento de Michel Foucault, qual é a principal diferença entre poder disciplinar e biopolítica?</p>}
          options={[
            { letter: "A", text: "O poder disciplinar atua sobre populações por meio de estatísticas, enquanto a biopolítica adestra corpos individuais em instituições." },
            { letter: "B", text: "O poder disciplinar adestra corpos individuais em instituições fechadas; a biopolítica regula populações inteiras por meio de normas sobre saúde, natalidade e mortalidade.", correct: true },
            { letter: "C", text: "Disciplina é um conceito de Marx para descrever o controle capitalista do trabalho; biopolítica é um conceito de Weber sobre burocracia estatal." },
            { letter: "D", text: "Não há diferença significativa: ambos se referem ao mesmo mecanismo de controle jurídico pelo Estado soberano." },
            { letter: "E", text: "O poder disciplinar opera por meio da lei e da punição física, enquanto a biopolítica opera exclusivamente por recompensas materiais." },
          ]}
          resolution={<p>Foucault distingue dois níveis: o anátomo-político (disciplina dos corpos individuais: escola, quartel, hospital, prisão) e o biopolítico (regulação de populações: estatísticas de saúde, políticas demográficas, medicina social). Ambos operam pelo saber-poder — não apenas pela força — e se complementam no exercício do biopoder moderno.</p>}
        />

        <Exercise
          level="Intermediário"
          title="O panóptico"
          statement={<p>A metáfora do panóptico, utilizada por Foucault para analisar as sociedades modernas, demonstra que o controle social é mais eficiente quando:</p>}
          options={[
            { letter: "A", text: "A punição física é aplicada de forma pública e espetacular, para servir de exemplo a toda a população." },
            { letter: "B", text: "Os indivíduos internalizam o olhar vigilante e passam a se autocontrolar, tornando desnecessária a presença constante do guarda.", correct: true },
            { letter: "C", text: "O Estado dispõe de grande número de guardas, juízes e policiais para monitorar fisicamente cada cidadão." },
            { letter: "D", text: "A vigilância é exercida de forma transparente, com plena ciência dos vigiados sobre quando estão sendo observados." },
            { letter: "E", text: "As punições são aplicadas de modo aleatório e imprevisível, gerando medo generalizado na população." },
          ]}
          resolution={<p>O genial mecanismo do panóptico é que a mera possibilidade do olhar basta: os presos não sabem se estão sendo observados naquele momento, então se comportam como se estivessem sempre. O resultado é a introjeção do controle — o vigiado se torna seu próprio vigia. Isso é muito mais eficiente e econômico do que a vigilância constante, e é a forma dominante de controle nas sociedades disciplinares modernas.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Estado de exceção"
          statement={<p>Para Giorgio Agamben, o "estado de exceção" é problemático sociologicamente porque:</p>}
          options={[
            { letter: "A", text: "Representa uma situação temporária e excepcional que, uma vez encerrada, restaura plenamente o Estado de Direito sem efeitos duradouros." },
            { letter: "B", text: "Tende a se tornar a norma, revelando que a suspensão dos direitos não é uma exceção à regra, mas a estrutura oculta do poder soberano moderno.", correct: true },
            { letter: "C", text: "É um mecanismo exclusivo de regimes totalitários, sem aplicação em democracias liberais contemporâneas." },
            { letter: "D", text: "Fortalece os direitos individuais ao suspender temporariamente regulações burocráticas excessivas do Estado." },
            { letter: "E", text: "Refere-se apenas a situações de guerra internacional, sem aplicabilidade a conflitos internos ou crises sanitárias." },
          ]}
          resolution={<p>A tese central de Agamben é que o estado de exceção não é o oposto do Estado de Direito, mas sua "zona de indiferença" — o ponto em que direito e violência se tornam indistinguíveis. Legislações antiterrorismo, estados de emergência sanitária e ambiental demonstram que a exceção vai se normalizando. A frase de Walter Benjamin que Agamben cita é reveladora: "o estado de exceção tornou-se a regra."</p>}
        />

        <Exercise
          level="Avançado"
          title="Necropolítica no Brasil"
          statement={
            <p>
              "O Atlas da Violência 2023 documenta que jovens negros de 15 a 29 anos têm taxas de
              homicídio 2,8 vezes maiores do que jovens brancos da mesma faixa etária. Dados do DEPEN
              indicam que 64% da população carcerária brasileira é negra. Operações policiais em
              favelas resultam em número de mortes muito superior às ocorridas em bairros de alta renda,
              com menor taxa de investigação e responsabilização."
              <br /><br />
              Esses dados são analisados mais adequadamente à luz do conceito de:
            </p>
          }
          options={[
            { letter: "A", text: "Solidariedade orgânica — as diferenças entre grupos sociais geram interdependência que mantém a coesão social." },
            { letter: "B", text: "Ação racional com relação a valores — indivíduos agem com base em princípios éticos de segurança pública independentemente das consequências." },
            { letter: "C", text: "Necropolítica — gestão diferencial da morte pelo Estado, que expõe certos grupos populacionais (negros, periféricos) à morte prematura como resultado de políticas e omissões sistêmicas.", correct: true },
            { letter: "D", text: "Anomia — ausência de normas sociais entre jovens negros, que os leva a comportamentos autodestrutivos." },
            { letter: "E", text: "Solidariedade mecânica — grupos marginalizados desenvolvem forte coesão interna baseada na semelhança de condições de vida." },
          ]}
          resolution={<p>O conceito de necropolítica de Mbembe descreve exatamente a gestão soberana de quem pode ser deixado morrer ou assassinado sem consequências para o Estado. Os dados revelam que o Estado brasileiro, por omissão ou ação ativa, expõe desproporcionalmente jovens negros à morte: pelas mãos do crime (resultado de desigualdades não enfrentadas) ou pelas mãos da própria polícia (resultado de políticas de segurança seletivas). Anomia seria uma explicação que culpabiliza os próprios grupos, não o sistema.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Vigilância líquida e redes sociais"
          statement={
            <p>
              "Ao instalar um aplicativo de mapas, o usuário aceita, nas letras miúdas dos termos
              de serviço, que sua localização seja compartilhada com parceiros comerciais. Esse dado
              é combinado com seu histórico de compras e navegação para gerar um perfil que é vendido
              a varejistas, planos de saúde e campanhas políticas."
              <br /><br />
              Essa situação é melhor descrita pelo conceito de:
            </p>
          }
          options={[
            { letter: "A", text: "Panóptico de Bentham: uma torre central observa e controla todos os movimentos dos cidadãos em um espaço fechado e delimitado." },
            { letter: "B", text: "Vigilância líquida: vigilância ubíqua e voluntária mediada por plataformas digitais, em que os próprios usuários alimentam o sistema ao aceitar termos de serviço.", correct: true },
            { letter: "C", text: "Estado de exceção: suspensão temporária das normas de privacidade em situações de emergência nacional justificada." },
            { letter: "D", text: "Biopoder disciplinar: adestramento de corpos individuais por instituições especializadas do Estado moderno." },
            { letter: "E", text: "Necropolítica: gestão da morte por parte do Estado soberano para eliminar populações consideradas supérfluas." },
          ]}
          resolution={<p>Bauman e Lyon descrevem a vigilância líquida como fluida, voluntária e descentralizada — ao contrário do panóptico rígido, não há uma torre central, mas múltiplos atores (empresas, governos) que capturam dados gerados espontaneamente pelos próprios usuários. A palavra-chave é "voluntária": o usuário aceita os termos e entrega os dados. Isso é radicalmente diferente do panóptico (onde a vigilância é imposta) e do biopoder disciplinar (que opera em instituições fechadas).</p>}
        />
      </section>
    </article>
  );
}
