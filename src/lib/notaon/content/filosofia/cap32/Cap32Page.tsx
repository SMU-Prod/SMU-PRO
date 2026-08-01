"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 32</span>
          <h1>Bioética, Inteligência Artificial e Responsabilidade Científica</h1>
          <p>
            A aceleração tecnológica do século XXI coloca questões filosóficas urgentes: onde estão
            os limites da manipulação genética? Máquinas podem tomar decisões morais? Quem é
            responsável pelos efeitos da ciência? Este capítulo explora a bioética e a ética da
            tecnologia — temas crescentes no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bioética</span>
        <h2>1. O que é Bioética?</h2>
        <p>
          O termo <strong>bioética</strong> foi cunhado pelo oncologista americano Van Rensselaer
          Potter em 1970, em seu artigo "Bioethics: The Science of Survival". Potter propunha uma
          "ponte" entre as ciências biológicas e os valores humanos — necessária para garantir a
          sobrevivência da espécie humana e do meio ambiente.
        </p>
        <p>
          Hoje, a bioética é um campo interdisciplinar que analisa as implicações éticas das
          ciências da vida e das tecnologias de saúde: medicina, biologia, genética, farmacologia,
          biotecnologia. Trata de questões como: aborto, eutanásia, clonagem, transgênicos,
          células-tronco, reprodução assistida, pesquisa com seres humanos, transplantes, triagem
          genética, entre muitas outras.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípios</span>
        <h2>2. Os Quatro Princípios de Georgetown</h2>
        <p>
          O modelo mais influente de bioética foi formulado por Tom Beauchamp e James Childress em
          <em> Principles of Biomedical Ethics</em> (1979), ligado à Universidade de Georgetown.
          Propõe quatro princípios fundamentais:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 240" width="460" height="240" aria-label="Diagrama dos quatro princípios da bioética">
            {/* Autonomia */}
            <rect x="20" y="20" width="190" height="85" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="115" y="48" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Autonomia</text>
            <text x="115" y="67" textAnchor="middle" fontSize="10" fill="#065f46">Respeitar as decisões</text>
            <text x="115" y="82" textAnchor="middle" fontSize="10" fill="#065f46">informadas do paciente</text>
            <text x="115" y="97" textAnchor="middle" fontSize="10" fill="#065f46">Consentimento livre e esclarecido</text>

            {/* Beneficência */}
            <rect x="250" y="20" width="190" height="85" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="345" y="48" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Beneficência</text>
            <text x="345" y="67" textAnchor="middle" fontSize="10" fill="#1e40af">Fazer o bem ao paciente;</text>
            <text x="345" y="82" textAnchor="middle" fontSize="10" fill="#1e40af">promover seu bem-estar</text>
            <text x="345" y="97" textAnchor="middle" fontSize="10" fill="#1e40af">"Primum non nocere"</text>

            {/* Não-maleficência */}
            <rect x="20" y="135" width="190" height="85" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="115" y="163" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Não-maleficência</text>
            <text x="115" y="182" textAnchor="middle" fontSize="10" fill="#92400e">Evitar causar danos</text>
            <text x="115" y="197" textAnchor="middle" fontSize="10" fill="#92400e">desnecessários ao paciente;</text>
            <text x="115" y="212" textAnchor="middle" fontSize="10" fill="#92400e">ponderar riscos × benefícios</text>

            {/* Justiça */}
            <rect x="250" y="135" width="190" height="85" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="2"/>
            <text x="345" y="163" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Justiça</text>
            <text x="345" y="182" textAnchor="middle" fontSize="10" fill="#9d174d">Distribuição equitativa</text>
            <text x="345" y="197" textAnchor="middle" fontSize="10" fill="#9d174d">dos recursos de saúde;</text>
            <text x="345" y="212" textAnchor="middle" fontSize="10" fill="#9d174d">não discriminação</text>
          </svg>
          <figcaption>Os quatro princípios da bioética de Georgetown: autonomia, beneficência, não-maleficência e justiça.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dilemas Biomédicos</span>
        <h2>3. Dilemas Biomédicos Contemporâneos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>O Dilema</th>
                <th>Princípios em tensão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clonagem reprodutiva</strong></td>
                <td>É legítimo clonar seres humanos?</td>
                <td>Autonomia + dignidade (instrumentalização) vs. avanço científico</td>
              </tr>
              <tr>
                <td><strong>Transgênicos</strong></td>
                <td>OGMs são seguros e eticamente aceitáveis?</td>
                <td>Beneficência (mais alimentos) vs. não-maleficência (riscos ambientais e à saúde)</td>
              </tr>
              <tr>
                <td><strong>Células-tronco embrionárias</strong></td>
                <td>Podem ser usadas em pesquisa embrióes que seriam descartados?</td>
                <td>Beneficência (curas potenciais) vs. status moral do embrião</td>
              </tr>
              <tr>
                <td><strong>Eutanásia ativa</strong></td>
                <td>Médico pode encerrar ativamente a vida de paciente terminal a seu pedido?</td>
                <td>Autonomia do paciente vs. dever de não matar do médico</td>
              </tr>
              <tr>
                <td><strong>Triagem genética</strong></td>
                <td>Pode-se selecionar embriões por características genéticas?</td>
                <td>Beneficência (evitar doenças) vs. eugenia e discriminação</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Pesquisa com seres humanos</h3>
          <p>
            O Código de Nuremberg (1947) e a Declaração de Helsinque (1964) estabeleceram os
            princípios éticos para pesquisa com seres humanos: consentimento informado obrigatório,
            ausência de coerção, proporcionalidade entre riscos e benefícios. No Brasil, o sistema
            CEP/CONEP (Comitê de Ética em Pesquisa / Comissão Nacional de Ética em Pesquisa)
            regula e fiscaliza essas pesquisas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inteligência Artificial</span>
        <h2>4. Inteligência Artificial: Questões Filosóficas</h2>
        <p>
          A IA levanta questões filosóficas que remontam ao coração da filosofia da mente e da ética:
        </p>
        <ul>
          <li>
            <strong>O Teste de Turing (1950):</strong> Alan Turing propôs que uma máquina pode ser
            considerada "inteligente" se, em um diálogo por escrito, um humano não consegue
            distingui-la de outro humano. Mas o filósofo John Searle respondeu com o argumento do
            "Quarto Chinês": uma máquina pode manipular símbolos sem compreendê-los — falta-lhe
            intencionalidade, a propriedade fundamental da mente.
          </li>
          <li>
            <strong>Consciência e subjetividade:</strong> Máquinas podem ter experiências subjetivas
            ("qualia")? É eticamente relevante se houver sofrimento artificial?
          </li>
          <li>
            <strong>Decisões morais da IA:</strong> Veículos autônomos enfrentam dilemas em acidentes
            inevitáveis (quem proteger?). Algoritmos de IA em saúde, crédito e justiça tomam
            decisões que afetam vidas. Quem é responsável pelos erros?
          </li>
          <li>
            <strong>Viés algorítmico:</strong> IAs treinadas em dados históricos reproduzem e
            amplificam preconceitos raciais, de gênero e socioeconômicos presentes nesses dados.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Responsabilidade</span>
        <h2>5. Responsabilidade Científica e Uso Dual de Tecnologias</h2>
        <p>
          O <strong>uso dual</strong> (<em>dual use</em>) refere-se ao fato de que a mesma pesquisa
          ou tecnologia pode ser usada tanto para fins benéficos quanto para fins destrutivos: a
          fissão nuclear que gera energia elétrica também produz bombas atômicas; a biologia sintética
          que desenvolve vacinas pode criar patógenos perigosos.
        </p>
        <p>
          Isso levanta questões sobre a responsabilidade dos cientistas: devem se preocupar apenas
          com a busca do conhecimento, deixando a responsabilidade pelo uso às autoridades políticas?
          Ou têm responsabilidade pelos impactos previsíveis de suas pesquisas?
        </p>
        <div className="lesson-highlight">
          <h3>Hans Jonas: O Princípio Responsabilidade</h3>
          <p>
            O filósofo alemão Hans Jonas (1903–1993), em <em>O Princípio Responsabilidade</em>{" "}
            (1979), propõe uma ética para a era tecnológica: "Age de tal forma que os efeitos de
            tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra."
            Diante da escala e da irreversibilidade dos impactos tecnológicos atuais (clima, nuclear,
            biotecnologia), a responsabilidade precisa ser expandida no espaço (toda a humanidade)
            e no tempo (gerações futuras).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hans Jonas</span>
        <h2>6. Hans Jonas e a Ética para a Civilização Tecnológica</h2>
        <p>
          Hans Jonas (1903–1993) foi o filósofo que mais sistematicamente pensou a ética diante da
          tecnologia moderna. Em <em>O Princípio Responsabilidade: Ensaio de uma Ética para a
          Civilização Tecnológica</em> (1979), argumentou que as éticas tradicionais — centradas
          nas relações entre contemporâneos e em situações de impacto limitado — são inadequadas
          para o mundo tecnológico, em que as ações humanas têm alcance global e consequências
          potencialmente irreversíveis por séculos.
        </p>
        <p>
          Jonas propõe um novo imperativo: <strong>"Age de tal forma que os efeitos de tua ação
          sejam compatíveis com a permanência de uma vida humana autêntica na Terra."</strong>
          Os princípios fundamentais de sua ética são:
        </p>
        <ul>
          <li><strong>Heurística do temor:</strong> diante da incerteza tecnológica, devemos dar mais peso às previsões de catástrofe do que às de benefício. Se um risco é suficientemente grave e irreversível, deve ser evitado mesmo com baixa probabilidade — o que Jonas chama de "negativismo do futuro".</li>
          <li><strong>Responsabilidade assimétrica:</strong> as gerações presentes têm responsabilidade com as futuras — que existirão (se não as destruirmos) mas não podem dar consentimento ou se defender. É a estrutura da responsabilidade paterna estendida à escala civilizatória.</li>
          <li><strong>Ontologia da vida:</strong> a natureza não é apenas recurso — tem um valor intrínseco que funda deveres éticos. Jonas é pioneiro na ética ambiental filosófica.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Jonas e o Princípio da Precaução</h3>
          <p>
            A "heurística do temor" de Jonas está na raiz do <strong>Princípio da Precaução</strong>,
            adotado em convenções internacionais de meio ambiente (Rio-92, Protocolo de Cartagena):
            na ausência de certeza científica sobre os riscos de uma atividade, a possibilidade de
            danos graves e irreversíveis deve ser suficiente para restringi-la. Esse princípio é
            central no debate sobre transgênicos, nanotecnologia e IA.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados e Privacidade</span>
        <h2>7. Privacidade, Dados Pessoais e Direitos na Era Digital</h2>
        <p>
          A coleta massiva de dados pessoais pelas grandes empresas de tecnologia levantou questões
          éticas que hoje são objeto de legislação (como a LGPD — Lei Geral de Proteção de Dados,
          no Brasil) e de intensa discussão filosófica. Os principais problemas são:
        </p>
        <ul>
          <li><strong>Vigilância e controle:</strong> a coleta de dados comportamentais permite prever e influenciar decisões individuais — o que Shoshana Zuboff chama de "capitalismo de vigilância".</li>
          <li><strong>Autonomia informacional:</strong> o direito de controlar as próprias informações pessoais é uma extensão da autonomia moral individual. Sem ele, a tomada de decisões livre é comprometida.</li>
          <li><strong>Consentimento vazio:</strong> os "termos e condições" das plataformas digitais raramente são lidos ou compreendidos — o consentimento formal existe, mas o real (informado e livre) é questionável.</li>
          <li><strong>Discriminação algorítmica:</strong> o uso de dados para segmentar usuários pode reproduzir e aprofundar desigualdades socioeconômicas, raciais e de gênero.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>LGPD e o debate filosófico</h3>
          <p>
            A Lei Geral de Proteção de Dados (Lei 13.709/2018) codifica no direito brasileiro
            princípios filosóficos de autonomia e dignidade: dados pessoais pertencem ao titular,
            não às empresas; o uso deve ser proporcional e transparente; há direito ao esquecimento.
            No ENEM, questões sobre privacidade digital frequentemente testam a capacidade de
            aplicar conceitos éticos a situações tecnológicas concretas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM</span>
        <h2>8. Bioética no ENEM: Estratégias e Textos Típicos</h2>
        <p>
          A bioética e a ética tecnológica aparecem crescentemente no ENEM, especialmente em questões
          que combinam textos científicos ou filosóficos com situações contemporâneas. Veja os padrões:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>O que o ENEM costuma cobrar</th>
                <th>Conceito-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pesquisa humana</strong></td>
                <td>Consentimento informado, proteção de vulneráveis, conflito de interesses</td>
                <td>Autonomia + não-maleficência</td>
              </tr>
              <tr>
                <td><strong>Transgênicos/biotecnologia</strong></td>
                <td>Princípio da precaução, riscos ambientais vs. benefícios alimentares</td>
                <td>Hans Jonas, Princípio da Precaução</td>
              </tr>
              <tr>
                <td><strong>IA e algoritmos</strong></td>
                <td>Viés, privacidade, responsabilidade por decisões automáticas</td>
                <td>Autonomia, justiça, viés algorítmico</td>
              </tr>
              <tr>
                <td><strong>Eutanásia/distanásia</strong></td>
                <td>Autonomia do paciente vs. dever médico, ortotanásia como alternativa</td>
                <td>Autonomia, beneficência, dignidade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica de estratégia</h3>
          <p>
            Em questões de bioética no ENEM, identifique primeiro qual <strong>princípio</strong>
            está em jogo (autonomia? beneficência? justiça?) e quais estão em <strong>conflito</strong>.
            A resposta correta geralmente reconhece a tensão entre princípios sem eliminar nenhum —
            em vez de declarar um "vencedor" absoluto, pondera o contexto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧬</span>
            <h3>Bioética</h3>
            <p>Campo interdisciplinar (ética + ciências da vida) fundado por Potter (1970) para lidar com dilemas biomédicos.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>4 Princípios</h3>
            <p>Georgetown: autonomia, beneficência, não-maleficência, justiça — base da ética médica.</p>
          </div>
          <div className="math-card">
            <span>🤖</span>
            <h3>IA e Ética</h3>
            <p>Teste de Turing, Quarto Chinês, viés algorítmico, responsabilidade por decisões automáticas.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Uso Dual</h3>
            <p>Mesma tecnologia serve ao bem e ao mal. Responsabilidade dos cientistas pelos impactos previsíveis.</p>
          </div>
          <div className="math-card">
            <span>🌱</span>
            <h3>Hans Jonas</h3>
            <p>"Princípio Responsabilidade": ética expandida no espaço e no tempo para proteger gerações futuras.</p>
          </div>
          <div className="math-card">
            <span>📋</span>
            <h3>Normas Éticas</h3>
            <p>Código de Nuremberg + Declaração de Helsinque: consentimento e proteção em pesquisa humana.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Os Princípios da Bioética"
          statement={<p>O princípio bioético da <strong>autonomia</strong> implica que, em relação ao tratamento médico:</p>}
          options={[
            { letter: "a", text: "O médico deve sempre tomar a decisão que considera melhor para o paciente, independentemente de sua vontade." },
            { letter: "b", text: "O paciente informado e capaz tem o direito de aceitar ou recusar procedimentos médicos.", correct: true },
            { letter: "c", text: "A família do paciente deve decidir pelo tratamento, especialmente em casos graves." },
            { letter: "d", text: "O Estado deve regular todas as decisões médicas para garantir o bem-estar coletivo." },
          ]}
          resolution={<p>O princípio da <strong>autonomia</strong> afirma que cada pessoa tem o direito de tomar decisões sobre sua própria vida e saúde, desde que informada e capaz. Na prática médica, isso se traduz no <strong>consentimento livre e esclarecido</strong>: antes de qualquer procedimento, o paciente deve receber informações claras sobre seu estado, as opções de tratamento e os riscos, e decidir livremente. Recusar o tratamento é um direito, mesmo quando a medicina considera o tratamento benéfico.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. O Teste de Turing e a IA"
          statement={<p>O Teste de Turing (1950) propõe que uma máquina deve ser considerada inteligente se:</p>}
          options={[
            { letter: "a", text: "For capaz de resolver problemas matemáticos mais rapidamente do que um ser humano." },
            { letter: "b", text: "Um avaliador humano não conseguir distingui-la de um humano em uma conversa por escrito.", correct: true },
            { letter: "c", text: "Demonstrar consciência subjetiva e capacidade de experienciar emoções genuínas." },
            { letter: "d", text: "For programada com os mesmos algoritmos utilizados no funcionamento do cérebro humano." },
          ]}
          resolution={<p>Alan Turing propôs um critério <strong>comportamental</strong> de inteligência: se uma máquina se comporta de maneira indistinguível de um humano inteligente em uma conversa, deve ser considerada inteligente. Turing evitou deliberadamente a questão metafísica ("as máquinas pensam?") em favor de um critério operacional. John Searle criticou esse teste com o "Quarto Chinês": manipular símbolos de forma correta não implica compreensão genuína ou intencionalidade.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Responsabilidade Científica e Uso Dual"
          statement={<p>O conceito de "uso dual" na ética da ciência refere-se à situação em que:</p>}
          options={[
            { letter: "a", text: "Uma mesma tecnologia pode ser utilizada tanto por países desenvolvidos quanto em desenvolvimento." },
            { letter: "b", text: "Pesquisas científicas podem ter aplicações tanto benéficas quanto potencialmente destrutivas ou perigosas.", correct: true },
            { letter: "c", text: "Dois pesquisadores independentes chegam às mesmas descobertas simultaneamente." },
            { letter: "d", text: "O financiamento científico pode vir tanto de fontes públicas quanto privadas." },
          ]}
          resolution={<p>O problema do <strong>uso dual</strong> (<em>dual use</em>) é central na ética da ciência: biologia sintética pode criar vacinas salva-vidas e também patógenos mortais; pesquisa nuclear gera energia limpa e armas de destruição em massa; inteligência artificial cura doenças e potencializa armamentos autônomos. Isso levanta a questão da responsabilidade do cientista: deve limitar-se à busca do conhecimento, ou deve antecipar e se responsabilizar pelos usos previsíveis de suas descobertas?</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Viés Algorítmico e Justiça"
          statement={
            <p>
              Pesquisas têm demonstrado que algoritmos de inteligência artificial utilizados no sistema de justiça americano para prever reincidência criminal classificam pessoas negras como de maior risco com o dobro da frequência de erros em relação a pessoas brancas. Isso ocorre porque os algoritmos foram treinados com dados históricos que refletem as desigualdades raciais do sistema de justiça.<br/><br/>
              Esse fenômeno ilustra qual problema ético associado ao uso de IA?
            </p>
          }
          options={[
            { letter: "a", text: "O problema do uso dual — a mesma IA pode ser usada tanto para reabilitar quanto para punir criminosos." },
            { letter: "b", text: "O viés algorítmico — IAs que reproduzem e amplificam desigualdades presentes nos dados de treinamento.", correct: true },
            { letter: "c", text: "O Teste de Turing — a IA não consegue distinguir humanos de máquinas na tomada de decisões jurídicas." },
            { letter: "d", text: "O princípio da autonomia — o algoritmo não considera a vontade individual dos acusados." },
          ]}
          resolution={<p>O <strong>viés algorítmico</strong> ocorre quando sistemas de IA, treinados em dados que refletem desigualdades históricas, reproduzem e muitas vezes amplificam essas desigualdades nas decisões automatizadas. Se o sistema de justiça historicamente penalizou mais pessoas negras (por razões estruturais de discriminação), os dados de treinamento refletirão isso — e o algoritmo "aprenderá" a classificar pessoas negras como de maior risco. Isso viola o princípio da justiça e da não-discriminação da bioética e da ética em IA.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Hans Jonas e a Responsabilidade"
          statement={
            <p>
              "Age de tal forma que os efeitos de tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra." (Hans Jonas, <em>O Princípio Responsabilidade</em>)<br/><br/>
              Esse imperativo de Jonas representa uma ampliação da ética tradicional porque:
            </p>
          }
          options={[
            { letter: "a", text: "Substitui a ética das virtudes pela ética das consequências em todas as situações." },
            { letter: "b", text: "Estende a responsabilidade moral para incluir as gerações futuras e os impactos de longo prazo da tecnologia.", correct: true },
            { letter: "c", text: "Propõe que toda pesquisa científica deve ser interrompida para preservar o status quo natural." },
            { letter: "d", text: "Afirma que apenas os Estados são moralmente responsáveis pelos impactos tecnológicos, não os cientistas." },
          ]}
          resolution={<p>Jonas percebeu que as éticas tradicionais (virtudes, dever, utilidade) foram concebidas para situações em que as ações humanas tinham alcance limitado no espaço e no tempo. A tecnologia moderna mudou isso radicalmente: as consequências das ações humanas (aquecimento global, armas nucleares, manipulação genética) podem ser globais e irreversíveis, afetando gerações que ainda não nasceram e que não têm voz. Por isso, a responsabilidade ética deve ser expandida além do presente e dos contemporâneos — incluindo a responsabilidade pelo futuro da humanidade e da vida na Terra.</p>}
        />
      </section>
    </article>
  );
}
