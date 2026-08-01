"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 26</span>
          <h1>Estado, Poder e Formas de Organização Política</h1>
          <p>
            O que é o Estado? De onde vem o poder que ele exerce? Por que obedecemos? Essas questões
            atravessam toda a filosofia política e a sociologia desde Maquiavel até Bourdieu. Compreendê-las
            é fundamental para analisar qualquer questão do ENEM sobre democracia, cidadania, autoritarismo
            e conflitos políticos contemporâneos no Brasil e no mundo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definição de Estado</span>
        <h2>1. O Que é o Estado? Definições Clássicas</h2>
        <p>
          O <strong>Estado</strong> é a forma de organização política que detém o poder sobre um
          território e uma população, exercendo funções de administração, legislação, julgamento,
          coerção e prestação de serviços públicos. É distinto do governo (conjunto de pessoas que
          ocupam o poder em dado momento) e da nação (comunidade cultural e identitária).
        </p>
        <p>
          Diferentes autores definiram o Estado de formas complementares, cada um enfatizando um
          aspecto central: a força, o consenso, a classe ou a soberania.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗡️</span>
            <h3>Maquiavel (séc. XVI)</h3>
            <p>
              Em <em>O Príncipe</em> (1513), separou a política da moral religiosa e analisou o
              Estado como instrumento de poder real. O governante deve usar força e astúcia para
              manter o poder — inaugurando a análise realista e secular da política.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Weber (séc. XX)</h3>
            <p>
              O Estado moderno é a instituição que reivindica com êxito o <strong>monopólio
              legítimo do uso da força física</strong> em determinado território. A polícia,
              o exército e os tribunais são expressões desse monopólio.
            </p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Gramsci (séc. XX)</h3>
            <p>
              Amplia a noção weberiana: o Estado não governa apenas pela coerção, mas também
              pelo <strong>consenso</strong> e pela <strong>hegemonia</strong> — capacidade de
              fazer com que os dominados aceitem a visão de mundo dos dominantes como natural.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔺</span>
            <h3>Marx e Engels</h3>
            <p>
              Em <em>O Manifesto Comunista</em>, o Estado é descrito como "comitê para gerir os
              negócios comuns de toda a burguesia" — instrumento de dominação de classe que
              preserva a propriedade privada e os interesses capitalistas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Elementos constitutivos do Estado (teoria clássica)</h3>
          <p>
            A teoria clássica do direito público (Georg Jellinek) identifica três elementos:{" "}
            <strong>povo</strong> (conjunto de pessoas sob jurisdição), <strong>território</strong>
            (espaço geográfico delimitado por fronteiras) e <strong>soberania</strong> (poder
            supremo, não submetido a nenhuma outra autoridade externa). O reconhecimento
            internacional é frequentemente acrescentado como quarto elemento necessário.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origens do Estado</span>
        <h2>2. Teorias sobre a Origem do Estado</h2>
        <p>
          A questão da origem do Estado é central na filosofia política: como surgiu? Por que os
          seres humanos aceitaram submeter-se a uma autoridade coletiva? Diferentes teorias oferecem
          respostas distintas, com implicações para a legitimidade do poder político.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Teoria</th>
                <th>Autor(es)</th>
                <th>Argumento central</th>
                <th>Implicação para a legitimidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Teológica</strong></td>
                <td>Santo Agostinho, São Tomás de Aquino</td>
                <td>O Estado vem de Deus; o poder político é divino</td>
                <td>Obedecer ao Estado é obedecer a Deus; rebeldia é pecado</td>
              </tr>
              <tr>
                <td><strong>Contratualista</strong></td>
                <td>Hobbes, Locke, Rousseau</td>
                <td>Os homens abriram mão de parte de sua liberdade natural para criar o Estado por contrato social</td>
                <td>Legitimidade deriva do consentimento dos governados</td>
              </tr>
              <tr>
                <td><strong>Patriarcal</strong></td>
                <td>Robert Filmer, Sir Henry Maine</td>
                <td>O Estado surgiu da família/clã expandido; o pai/patriarca tornou-se rei</td>
                <td>Legitimidade pela tradição e autoridade paterna</td>
              </tr>
              <tr>
                <td><strong>Pela força</strong></td>
                <td>Oppenheimer, Gumplowicz</td>
                <td>O Estado nasceu da conquista de um grupo por outro; é instrumento do vencedor</td>
                <td>O poder se mantém pela coerção, não pelo consentimento</td>
              </tr>
              <tr>
                <td><strong>Marxista</strong></td>
                <td>Marx, Engels, Lenin</td>
                <td>O Estado surgiu com a divisão de classes e serve para manter a dominação da classe proprietária</td>
                <td>Legitimidade falsa — é ideologia a serviço da burguesia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contratualismo</span>
        <h2>3. O Contratualismo: Hobbes, Locke e Rousseau</h2>
        <p>
          Os <strong>contratualistas</strong> compartilham a ideia de que o Estado surge de um
          "contrato social" — acordo (real ou hipotético) pelo qual os indivíduos saem do estado
          de natureza e criam a sociedade política. Mas discordam profundamente sobre o que seria
          esse estado de natureza e quais direitos o Estado deve proteger.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Thomas Hobbes (1588–1679)</h3>
            <p>
              No estado de natureza, o homem é lobo do homem (<em>homo homini lupus</em>): guerra
              de todos contra todos. Para garantir paz e segurança, os indivíduos transferem todos
              os poderes ao <strong>Leviatã</strong> (Estado absoluto). A liberdade é sacrificada
              pela ordem.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>John Locke (1632–1704)</h3>
            <p>
              O estado de natureza é de paz e razão. Os homens têm direitos naturais à vida,
              liberdade e propriedade. Criam o Estado para protegê-los — e podem derrubá-lo
              se ele os violar. Fundamentou o <strong>liberalismo político</strong>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Jean-Jacques Rousseau (1712–1778)</h3>
            <p>
              O homem nasce bom; a sociedade o corrompe. O contrato social legítimo expressa
              a <strong>vontade geral</strong> — o bem comum, não a soma de interesses privados.
              A soberania pertence ao povo e é inalienável. Inspirou a Revolução Francesa.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Legado dos contratualistas no Brasil</h3>
          <p>
            A Constituição Federal de 1988 é herdeira direta do pensamento contratualista:
            afirma que "todo poder emana do povo" (art. 1º), que o Estado existe para proteger
            direitos fundamentais (arts. 5º a 11) e que o povo pode se manifestar diretamente
            por plebiscito, referendo e iniciativa popular. Locke fundamenta os direitos
            individuais; Rousseau, a soberania popular e a democracia participativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formas de Estado e de Governo</span>
        <h2>4. Formas de Estado e Formas de Governo</h2>
        <p>
          É preciso distinguir <strong>forma de Estado</strong> (organização territorial do poder)
          de <strong>forma de governo</strong> (quem governa e como) e de <strong>sistema de
          governo</strong> (relação entre Executivo e Legislativo).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Características</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}><strong>Forma de Estado</strong></td>
                <td>Unitário</td>
                <td>Poder concentrado no governo central; regiões têm pouca autonomia</td>
                <td>França, Portugal, Chile, Japão</td>
              </tr>
              <tr>
                <td>Federativo</td>
                <td>Poder distribuído entre governo federal e unidades subnacionais com autonomia garantida constitucionalmente</td>
                <td>Brasil, EUA, Alemanha, Argentina</td>
              </tr>
              <tr>
                <td rowSpan={2}><strong>Forma de Governo</strong></td>
                <td>República</td>
                <td>Governante eleito por período determinado, com prestação de contas ao povo</td>
                <td>Brasil, França, EUA, Argentina</td>
              </tr>
              <tr>
                <td>Monarquia</td>
                <td>Chefe de Estado hereditário (rei/rainha), vitalício ou por abdicação voluntária</td>
                <td>Reino Unido, Espanha, Japão, Suécia</td>
              </tr>
              <tr>
                <td rowSpan={3}><strong>Sistema de Governo</strong></td>
                <td>Presidencialismo</td>
                <td>Executivo eleito diretamente; independente do Legislativo; mandato fixo</td>
                <td>Brasil, EUA, México</td>
              </tr>
              <tr>
                <td>Parlamentarismo</td>
                <td>Executivo (primeiro-ministro) depende de maioria parlamentar; pode ser derrubado pelo Parlamento</td>
                <td>Reino Unido, Alemanha, Itália, Japão</td>
              </tr>
              <tr>
                <td>Semipresidencialismo</td>
                <td>Presidente eleito diretamente com poderes relevantes + primeiro-ministro com apoio parlamentar</td>
                <td>França, Portugal, Rússia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Poder</span>
        <h2>5. Poder, Legitimidade e Dominação em Max Weber</h2>
        <p>
          <strong>Max Weber</strong> distinguiu <strong>poder</strong> (capacidade de impor a própria
          vontade mesmo contra resistência) de <strong>dominação</strong> (poder aceito como legítimo
          pelos dominados). Para Weber, o que torna um poder estável não é apenas a força, mas a
          crença dos dominados na legitimidade de quem manda.
        </p>
        <p>
          Weber identificou três tipos de dominação legítima — formas pelas quais o poder é exercido
          e aceito como válido:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👑</span>
            <h3>Dominação tradicional</h3>
            <p>
              Baseada em costumes e tradições imemoráveis. O rei governa porque sempre foi assim;
              os filhos herdam o poder dos pais. Obediência à pessoa do chefe pela tradição.
              Exemplo: monarquias medievais, chefias tribais.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Dominação carismática</h3>
            <p>
              Baseada nas qualidades pessoais extraordinárias do líder, visto como dotado de graça,
              heroísmo ou virtude especial. Obediência ao líder pela devoção pessoal. Exemplo:
              líderes revolucionários, profetas religiosos, Hitler, Gandhi.
            </p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Dominação racional-legal</h3>
            <p>
              Baseada em regras abstratas, impessoais e formalmente estabelecidas. O governante
              obedece e aplica as leis — inclusive as que regulam seu próprio poder. É o tipo
              dominante nas democracias modernas e no Estado de Direito.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Burocracia como expressão da dominação racional-legal</h3>
          <p>
            Para Weber, a <strong>burocracia</strong> é a forma de organização mais eficiente
            para o Estado moderno: é impessoal (as regras valem para todos), hierárquica
            (cada cargo tem competências definidas), profissional (funcionários selecionados
            por mérito) e documentada (decisões são registradas). A burocracia garante a
            continuidade do Estado independente de quem governa — mas pode também se tornar
            um fim em si mesma (a famosa "jaula de ferro" burocrática).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hegemonia e Poder Simbólico</span>
        <h2>6. Gramsci, Bourdieu e o Poder Simbólico</h2>
        <p>
          <strong>Antonio Gramsci</strong> (1891–1937) amplia a análise marxista do Estado ao
          introduzir o conceito de <strong>hegemonia</strong>: a capacidade das classes dominantes
          de exercer liderança moral e intelectual, fazendo com que sua visão de mundo seja aceita
          pelas classes subalternas como o "senso comum" — natural e inevitável. O Estado,
          para Gramsci, combina coerção (aparelho repressivo) e consenso (aparelho ideológico).
        </p>
        <p>
          <strong>Pierre Bourdieu</strong> desenvolve o conceito de <strong>poder simbólico</strong>:
          um poder invisível, que se exerce com o consentimento tácito dos dominados, que muitas
          vezes não o reconhecem como poder. A escola, a mídia, a religião e o próprio Estado
          exercem poder simbólico ao fazer com que certas visões de mundo pareçam naturais,
          universais e neutras — quando na verdade refletem interesses de grupos dominantes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Conceito central</th>
                <th>Mecanismo de dominação</th>
                <th>Instituições-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Marx / Lenin</strong></td>
                <td>Estado como instrumento de classe</td>
                <td>Coerção física + ideologia burguesa</td>
                <td>Forças armadas, judiciário, propriedade privada</td>
              </tr>
              <tr>
                <td><strong>Gramsci</strong></td>
                <td>Hegemonia</td>
                <td>Coerção + consenso cultural e moral</td>
                <td>Igreja, escola, mídia, intelectuais orgânicos</td>
              </tr>
              <tr>
                <td><strong>Bourdieu</strong></td>
                <td>Poder simbólico / Campo</td>
                <td>Violência simbólica — dominação aceita como legítima</td>
                <td>Sistema escolar, campo jurídico, campo político</td>
              </tr>
              <tr>
                <td><strong>Weber</strong></td>
                <td>Dominação legítima</td>
                <td>Crença na legitimidade (tradição/carisma/lei)</td>
                <td>Burocracia estatal, partidos, religião</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Separação de Poderes</span>
        <h2>7. Separação de Poderes e Estado de Direito</h2>
        <p>
          A <strong>separação de poderes</strong>, formulada por <strong>Montesquieu</strong> em{" "}
          <em>O Espírito das Leis</em> (1748), é um dos pilares do constitucionalismo moderno.
          Montesquieu observou que, quando uma mesma pessoa ou instituição acumula o poder de
          fazer as leis, aplicá-las e julgá-las, a liberdade está em risco. Por isso propôs a
          divisão em três poderes independentes que se freiam mutuamente:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Poder Legislativo</h3>
            <p>
              Cria as leis. No Brasil: Congresso Nacional (Câmara dos Deputados + Senado Federal),
              Assembleias Legislativas estaduais e Câmaras Municipais. Representação popular direta.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Poder Executivo</h3>
            <p>
              Aplica as leis e administra o Estado. No Brasil: Presidente da República (federal),
              governadores (estaduais), prefeitos (municipais) e seus respectivos ministérios
              e secretarias.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Poder Judiciário</h3>
            <p>
              Interpreta e aplica as leis nos conflitos concretos, garantindo direitos. No Brasil:
              STF (guarda da CF), STJ, TSE, TST, TRF, Tribunais de Justiça estaduais e juízes.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Checks and balances (freios e contrapesos)</h3>
          <p>
            O sistema de freios e contrapesos é a mecanismo pelo qual cada poder limita os outros:
            o Executivo pode vetar leis do Legislativo; o Legislativo pode derrubar vetos e
            destituir ministros (interpelação); o Judiciário pode declarar inconstitucionais atos
            do Executivo e leis do Legislativo (controle de constitucionalidade). No Brasil, o STF
            tem papel central nesse sistema, sendo frequentemente palco de disputas políticas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regimes Políticos</span>
        <h2>8. Regimes Políticos: Democracia, Autoritarismo e Totalitarismo</h2>
        <p>
          Os regimes políticos podem ser classificados pelo grau de participação popular, pela
          existência de liberdades civis e pelo nível de controle estatal sobre a vida social.
          A distinção clássica é entre <strong>democracia</strong> (poder do povo),{" "}
          <strong>autoritarismo</strong> (concentração de poder sem participação) e{" "}
          <strong>totalitarismo</strong> (controle total do Estado sobre a vida dos cidadãos).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Regime</th>
                <th>Características</th>
                <th>Exemplos históricos</th>
                <th>Liberdades civis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Democracia liberal</strong></td>
                <td>Eleições livres, pluralismo, separação de poderes, direitos fundamentais</td>
                <td>Brasil (pós-1988), França, EUA, Alemanha</td>
                <td>Amplas e garantidas</td>
              </tr>
              <tr>
                <td><strong>Autoritarismo</strong></td>
                <td>Poder concentrado, eleições manipuladas ou suspensas, restrição de oposição</td>
                <td>Brasil (1964–1985), Portugal (Salazar), Chile (Pinochet)</td>
                <td>Restritas; perseguição a opositores</td>
              </tr>
              <tr>
                <td><strong>Totalitarismo</strong></td>
                <td>Controle total da vida pública e privada, partido único, culto ao líder, propaganda massiva</td>
                <td>Alemanha nazista (Hitler), URSS stalinista, Coreia do Norte</td>
                <td>Praticamente inexistentes</td>
              </tr>
              <tr>
                <td><strong>Democracia iliberal</strong></td>
                <td>Eleições mantidas, mas erosão das liberdades, ataque ao judiciário e imprensa</td>
                <td>Hungria (Orbán), Turquia (Erdoğan), Venezuela</td>
                <td>Formalmente garantidas, mas violadas na prática</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado Brasileiro</span>
        <h2>9. O Estado Brasileiro: Formação e Especificidades</h2>
        <p>
          O Estado brasileiro tem uma formação histórica peculiar, marcada pela herança colonial,
          pela escravidão e por uma longa tradição de patrimonialismo. O sociólogo <strong>Sérgio
          Buarque de Holanda</strong> (<em>Raízes do Brasil</em>, 1936) identificou o{" "}
          <strong>"homem cordial"</strong> como tipo social central: a confusão entre público e
          privado, entre amizade pessoal e função pública, é uma característica estrutural das
          relações políticas brasileiras.
        </p>
        <p>
          O sociólogo <strong>Raymundo Faoro</strong> (<em>Os Donos do Poder</em>, 1958) analisou
          o <strong>estamento burocrático</strong> brasileiro: um grupo que controla o aparelho
          estatal como extensão de seus interesses privados, desde o período colonial até o
          século XX. Essa análise ilumina fenômenos como o clientelismo, o nepotismo e a
          corrupção como traços estruturais, não apenas conjunturais, do Estado brasileiro.
        </p>

        <div className="lesson-highlight">
          <h3>Patrimonialismo e o Estado brasileiro</h3>
          <p>
            O conceito weberiano de <strong>patrimonialismo</strong> descreve um tipo de dominação
            em que o governante trata o Estado como extensão de seu patrimônio pessoal — cargos
            são distribuídos por lealdade, não por competência; recursos públicos financiam
            interesses privados. Faoro e Buarque de Holanda aplicaram esse conceito ao Brasil,
            explicando por que a distinção entre público e privado permaneceu tênue mesmo
            após a proclamação da República.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado e Globalização</span>
        <h2>10. Estado, Globalização e Soberania no Século XXI</h2>
        <p>
          A <strong>globalização</strong> — intensificação dos fluxos de capital, mercadorias,
          informação e pessoas — desafia a soberania dos Estados nacionais. Decisões de grandes
          corporações transnacionais, organismos internacionais (FMI, OMC, ONU) e mercados
          financeiros globais impõem limites à autonomia dos governos nacionais, mesmo os de
          países desenvolvidos.
        </p>
        <p>
          Esse processo gerou interpretações divergentes: para alguns (como <strong>Kenichi Ohmae</strong>),
          o Estado-nação está em declínio irreversível. Para outros (como <strong>Boaventura de
          Sousa Santos</strong>), o Estado pode ser um espaço de resistência e regulação
          frente ao poder das corporações, desde que democratizado e fortalecido pela
          participação popular.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Organizações internacionais</h3>
            <p>
              ONU, FMI, OMC, Banco Mundial estabelecem regras e condicionalidades que limitam
              a autonomia dos Estados nacionais, especialmente dos países periféricos dependentes
              de financiamento externo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏢</span>
            <h3>Corporações transnacionais</h3>
            <p>
              Empresas como Apple, Google, Amazon e Volkswagen têm faturamento superior ao PIB
              de muitos países. Podem pressionar Estados por isenções fiscais, ameaçando retirar
              investimentos e empregos.
            </p>
          </div>
          <div className="lesson-card">
            <span>💸</span>
            <h3>Mercados financeiros</h3>
            <p>
              Fluxos de capital especulativo cruzam fronteiras em milissegundos. Países podem
              sofrer crises cambiais e ser forçados a adotar políticas de austeridade por
              pressão dos mercados financeiros internacionais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Blocos regionais</h3>
            <p>
              Mercosul, União Europeia e ASEAN criam espaços de soberania compartilhada —
              Estados cedem parte de sua autonomia em benefício de regras comuns regionais
              de comércio, segurança e direitos humanos.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Conceito de governança global</h3>
          <p>
            A <strong>governança global</strong> refere-se ao conjunto de mecanismos, instituições
            e normas que regulam problemas transfronteiriços — mudança climática, pandemias,
            terrorismo, crime organizado, fluxos migratórios — sem que haja um "governo mundial".
            O desafio é criar cooperação efetiva entre Estados soberanos com interesses divergentes.
            As Conferências do Clima (COP), a OMS e o Tribunal Penal Internacional são exemplos
            de instituições de governança global.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Monopólio legítimo da força — Weber"
          statement={
            <p>
              Para Max Weber, o Estado moderno se distingue de outras formas de organização
              política por reivindicar:
            </p>
          }
          options={[
            { letter: "A", text: "O controle total da economia e dos meios de produção." },
            { letter: "B", text: "A primazia da religião sobre a política em determinado território." },
            { letter: "C", text: "O monopólio legítimo do uso da força física em um determinado território.", correct: true },
            { letter: "D", text: "A representação exclusiva dos interesses da classe trabalhadora." },
            { letter: "E", text: "A gestão democrática de todos os recursos naturais nacionais." },
          ]}
          resolution={
            <p>
              A definição clássica de Weber: o Estado é a instituição que reivindica{" "}
              <strong>com êxito</strong> o <strong>monopólio legítimo do uso da força
              física</strong> em determinado território. A legitimidade é central: não
              é qualquer força, mas aquela reconhecida como válida pelos cidadãos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Hegemonia em Gramsci"
          statement={
            <p>
              O conceito gramsciano de "hegemonia" amplia a noção marxista de Estado porque:
            </p>
          }
          options={[
            { letter: "A", text: "Restringe o poder do Estado apenas ao uso da força militar." },
            { letter: "B", text: "Entende que o domínio é exercido somente por mecanismos econômicos." },
            { letter: "C", text: "Incorpora a dimensão do consentimento: os dominados aceitam a visão de mundo dos dominantes como natural.", correct: true },
            { letter: "D", text: "Defende que o Estado deve ser abolido imediatamente para libertar os trabalhadores." },
            { letter: "E", text: "Propõe que a dominação legítima é sempre baseada em carisma pessoal do líder." },
          ]}
          resolution={
            <p>
              Gramsci entende que a dominação burguesa não se sustenta apenas pela coerção
              (exércitos, prisões), mas também pelo <strong>consentimento</strong>: por meio
              de instituições como escola, mídia e Igreja, as classes dominantes fazem seus
              valores e visão de mundo serem aceitos como universais — isso é hegemonia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Contratualismo e legitimidade"
          statement={
            <p>
              John Locke, ao fundamentar o contratualismo liberal, argumenta que o governo
              civil é legítimo quando:
            </p>
          }
          options={[
            { letter: "A", text: "É estabelecido por tradição histórica e costumes imemoráveis da sociedade." },
            { letter: "B", text: "É imposto por um líder carismático que expressa a vontade geral do povo." },
            { letter: "C", text: "Protege os direitos naturais dos indivíduos — vida, liberdade e propriedade — e pode ser derrubado se os violar.", correct: true },
            { letter: "D", text: "Concentra todo o poder em um soberano que garante a paz social, como propôs Hobbes." },
            { letter: "E", text: "É aprovado por unanimidade por todos os cidadãos adultos em assembleia direta." },
          ]}
          resolution={
            <p>
              Para Locke, o Estado existe para proteger direitos naturais preexistentes ao
              contrato. Se o governo viola esses direitos, os governados têm o direito de
              resistir e derrubá-lo. Esse argumento foi fundamental para justificar a Revolução
              Gloriosa (1688) e a Revolução Americana (1776), e influenciou o constitucionalismo
              liberal moderno.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Dominação racional-legal e burocracia"
          statement={
            <p>
              Weber identificou três tipos de dominação legítima. O tipo "racional-legal"
              é o característico dos Estados modernos democráticos porque:
            </p>
          }
          options={[
            { letter: "A", text: "Baseia-se nas qualidades pessoais extraordinárias do líder, que inspira devoção." },
            { letter: "B", text: "Fundamenta-se em costumes e tradições que ninguém questiona." },
            { letter: "C", text: "Apoia-se em regras abstratas, impessoais e formalmente estabelecidas, às quais o próprio governante está submetido.", correct: true },
            { letter: "D", text: "Deriva da conquista militar e do temor que o governante inspira nos súditos." },
            { letter: "E", text: "Tem sua legitimidade conferida por instituições religiosas reconhecidas pela população." },
          ]}
          resolution={
            <p>
              A dominação racional-legal é impessoal: o presidente brasileiro obedece à
              Constituição, o servidor público segue regulamentos, o juiz aplica a lei —
              e todos estão submetidos às mesmas regras, independentemente de carisma ou
              tradição. Isso é a base do <strong>Estado de Direito</strong>. A burocracia
              é o aparato administrativo que operacionaliza esse tipo de dominação.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Patrimonialismo e Estado brasileiro"
          statement={
            <p>
              <em>"Raymundo Faoro, em 'Os Donos do Poder' (1958), argumentou que a formação do
              Estado brasileiro foi marcada por um 'estamento burocrático' que controla o aparelho
              estatal como extensão de seus interesses privados, desde o período colonial. O conceito
              weberiano de patrimonialismo explica por que, no Brasil, as fronteiras entre o público
              e o privado foram historicamente tênues."</em>
              <br /><br />
              Com base no texto, o <strong>patrimonialismo</strong> designa um modelo de Estado em que:
            </p>
          }
          options={[
            { letter: "A", text: "O poder é exercido com base em regras impessoais e formais, garantindo igualdade de tratamento a todos." },
            { letter: "B", text: "O governante trata o aparato estatal como extensão de seu patrimônio pessoal, distribuindo cargos e recursos por critérios de lealdade pessoal.", correct: true },
            { letter: "C", text: "O Estado é controlado pela classe operária por meio de conselhos de trabalhadores eleitos democraticamente." },
            { letter: "D", text: "O poder político está subordinado à legitimidade carismática de um líder revolucionário." },
            { letter: "E", text: "A burocracia estatal é altamente eficiente e meritocrática, selecionando funcionários por concurso público." },
          ]}
          resolution={
            <p>
              O <strong>patrimonialismo</strong> weberiano descreve um regime em que o senhor
              trata o Estado como propriedade pessoal — cargos são dados a aliados, recursos
              públicos financiam interesses privados, a distinção entre "meu" e "do Estado"
              é inexistente. Faoro mostrou que esse padrão, herdado de Portugal, estruturou
              o Estado brasileiro mesmo após a República, explicando fenômenos como clientelismo,
              nepotismo e corrupção como traços histórico-estruturais.
            </p>
          }
        />
      </section>
    </article>
  );
}
