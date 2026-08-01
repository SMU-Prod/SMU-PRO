"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 33</span>
          <h1>Educação, Desigualdade e Mobilidade Social</h1>
          <p>
            A escola pode ser tanto instrumento de emancipação quanto de reprodução das desigualdades.
            Compreender as funções sociais da educação e as análises de Bourdieu, Durkheim, Marx e
            outros pensadores é fundamental para interpretar questões sobre mobilidade social,
            meritocracia e políticas educacionais no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Funções da Educação</span>
        <h2>1. As Funções Sociais da Educação</h2>
        <p>
          A educação cumpre múltiplas funções sociais, que diferentes perspectivas teóricas
          enfatizam de formas distintas — e frequentemente contraditórias. Para o funcionalismo,
          a escola integra e prepara; para as teorias críticas, ela também seleciona e reproduz
          hierarquias. Nenhuma das duas perspectivas captura toda a complexidade: a escola é,
          simultaneamente, campo de reprodução social e espaço de emancipação individual e coletiva.
        </p>
        <p>
          No Brasil, o sistema educacional é marcado por uma profunda dualidade: de um lado,
          escolas privadas de alto padrão que preparam as elites para as universidades federais;
          de outro, escolas públicas subfinanciadas, com infraestrutura precária, professores
          mal remunerados e altos índices de evasão — especialmente no ensino médio, quando
          a pressão econômica sobre as famílias mais pobres é maior.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Transmissão cultural</h3>
            <p>A escola transmite a herança cultural, os valores e o conhecimento acumulado pela sociedade às novas gerações (Durkheim). É a memória coletiva institucionalizada.</p>
          </div>
          <div className="lesson-card">
            <span>🔧</span>
            <h3>Qualificação profissional</h3>
            <p>Prepara indivíduos para o mercado de trabalho, fornecendo habilidades técnicas e intelectuais (perspectiva funcionalista e do capital humano).</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>Socialização</h3>
            <p>Incute normas, disciplina e valores coletivos; integra o indivíduo à vida social (Durkheim). A escola é a segunda grande agência de socialização após a família.</p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Seleção social</h3>
            <p>Distribui posições sociais por mérito aparente — mas, para Bourdieu, legitima hierarquias preexistentes ao transformar vantagens de origem em mérito individual.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Durkheim e a educação como fato social</h3>
          <p>
            Para Émile Durkheim, a educação é a ação das gerações adultas sobre as mais jovens,
            visando suscitar e desenvolver estados físicos, intelectuais e morais exigidos pela
            vida em sociedade. A escola é, antes de tudo, um mecanismo de integração social que
            garante a coesão da sociedade ao criar uma "consciência coletiva" compartilhada —
            valores, normas e crenças comuns que unem os indivíduos em torno de uma identidade social.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bourdieu e Reprodução Social</span>
        <h2>2. A Escola como Reprodutora das Desigualdades</h2>
        <p>
          O sociólogo francês <strong>Pierre Bourdieu</strong> (1930–2002), junto com Jean-Claude
          Passeron, propôs em <em>A Reprodução</em> (1970) uma visão crítica da escola: em vez de
          equalizar oportunidades, ela <strong>reproduz e legitima as desigualdades de classe</strong>.
          A escola não é neutra — ela seleciona, avalia e premia com base em padrões culturais
          que pertencem à classe dominante, mas são apresentados como universais e objetivos.
        </p>
        <p>
          A chave do pensamento de Bourdieu está no conceito de <strong>violência simbólica</strong>:
          a dominação que se exerce não pela força física, mas pela imposição de uma cultura como
          legítima e universal. A escola pratica violência simbólica ao exigir de todos o domínio
          de uma cultura (a da classe dominante) sem reconhecer que esse domínio é desigualmente
          distribuído antes mesmo da entrada na escola.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Exemplo prático</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Capital cultural</strong></td>
                <td>Conjunto de conhecimentos, habilidades e disposições adquiridos pela socialização familiar e escolar</td>
                <td>Filho de professores tem vantagem na escola por já possuir vocabulário e referências culturais valorizadas</td>
              </tr>
              <tr>
                <td><strong>Capital econômico</strong></td>
                <td>Recursos financeiros e bens materiais</td>
                <td>Acesso a cursinhos, livros, viagens educacionais, escolas privadas de qualidade</td>
              </tr>
              <tr>
                <td><strong>Capital social</strong></td>
                <td>Rede de relações e conexões sociais</td>
                <td>Conhecer professores e profissionais influentes facilita o acesso ao mercado e às oportunidades</td>
              </tr>
              <tr>
                <td><strong>Habitus</strong></td>
                <td>Sistema de disposições duráveis adquiridas pela posição social — modo de falar, se portar, valorizar</td>
                <td>Criança de família rica naturaliza práticas que a escola valoriza; a de família pobre precisa se "converter"</td>
              </tr>
              <tr>
                <td><strong>Campo</strong></td>
                <td>Espaço social estruturado por regras próprias onde agentes competem por capitais</td>
                <td>O campo escolar tem regras que favorecem quem já possui capital cultural</td>
              </tr>
              <tr>
                <td><strong>Violência simbólica</strong></td>
                <td>Imposição de uma cultura como universal e neutra, ocultando sua origem de classe</td>
                <td>A língua culta ensinada na escola é a da classe dominante, mas é apresentada como "correto" para todos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>A ilusão da meritocracia</h3>
          <p>
            Para Bourdieu, a escola apresenta-se como meritocrática — quem se esforça, vence —
            mas o "mérito" valorizado já é desigualmente distribuído antes da entrada na escola.
            Crianças de famílias cultas chegam com mais capital cultural, têm mais facilidade
            e são selecionadas para as melhores posições. A escola, assim, <strong>legitima</strong>{" "}
            a desigualdade ao transformá-la em "resultado natural" de esforço e talento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desigualdade Educacional</span>
        <h2>3. Desigualdade Educacional no Brasil</h2>
        <p>
          O Brasil avançou muito em acesso à educação nas últimas décadas, mas as desigualdades
          de qualidade e conclusão ainda são profundas, especialmente quando analisadas por
          raça e renda. O IDEB (Índice de Desenvolvimento da Educação Básica) varia enormemente
          entre escolas públicas de periferias urbanas e escolas privadas de classe média —
          revelando que a "escola" brasileira é, na prática, múltiplas escolas com experiências
          educativas radicalmente diferentes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Brancos</th>
                <th>Negros (pretos e pardos)</th>
                <th>Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Analfabetismo (15+ anos)</td>
                <td>~3,6%</td>
                <td>~9,1%</td>
                <td>PNAD Contínua 2022</td>
              </tr>
              <tr>
                <td>Anos médios de estudo</td>
                <td>~9,8 anos</td>
                <td>~8,4 anos</td>
                <td>IBGE 2022</td>
              </tr>
              <tr>
                <td>Acesso ao ensino superior</td>
                <td>~22%</td>
                <td>~11%</td>
                <td>IBGE/INEP 2022</td>
              </tr>
              <tr>
                <td>Conclusão do ensino médio (25–34 anos)</td>
                <td>~78%</td>
                <td>~64%</td>
                <td>PNAD 2022</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A evasão escolar é maior entre estudantes negros e pobres, com pico no ensino médio,
          quando muitos jovens precisam trabalhar para complementar a renda familiar. O abandono
          não decorre de falta de interesse, mas de <strong>condições materiais de vida</strong>
          incompatíveis com a permanência na escola — evidenciando que a desigualdade educacional
          é produto da desigualdade social, não o contrário.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Políticas Educacionais</span>
        <h2>4. Políticas de Acesso: Do ENEM às Cotas</h2>
        <p>
          Diante das desigualdades educacionais, o Estado brasileiro implementou diversas
          políticas públicas para ampliar o acesso ao ensino superior. Essas políticas representam
          uma mudança de paradigma: de uma universidade elitista, frequentada quase exclusivamente
          por jovens brancos de classe média alta, para uma universidade progressivamente mais
          diversa — embora ainda longe da representação proporcional de negros e pobres.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>ENEM (1998)</h3>
            <p>Criado como avaliação de saída do ensino médio, tornou-se a principal porta de entrada para o ensino superior público e privado, democratizando o acesso pelo mérito.</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>ProUni (2004)</h3>
            <p>Bolsas de estudo em faculdades privadas para estudantes de baixa renda, indígenas e pessoas com deficiência. Mais de 3 milhões de bolsas concedidas até 2023.</p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>FIES (1999)</h3>
            <p>Financiamento estudantil para cursos privados, com pagamento após a formatura. Expandiu acesso ao ensino superior privado para a classe trabalhadora.</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Cotas (Lei 12.711/2012)</h3>
            <p>Reserva de vagas nas federais para alunos de escola pública, negros, indígenas e quilombolas — política afirmativa pioneira com impacto comprovado.</p>
          </div>
          <div className="lesson-card">
            <span>🏫</span>
            <h3>FUNDEB (2007/2020)</h3>
            <p>Fundo que vincula receitas de impostos para financiamento da educação básica pública, com complementação federal para estados mais pobres.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>PNLD</h3>
            <p>Programa Nacional do Livro Didático: distribui gratuitamente livros a alunos da rede pública — política que universaliza o acesso ao material didático.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mobilidade Social</span>
        <h2>5. Mobilidade Social: Conceitos e Limites</h2>
        <p>
          A <strong>mobilidade social</strong> refere-se à mudança de posição de indivíduos ou
          grupos nas hierarquias sociais. Distingue-se a <strong>mobilidade vertical</strong>
          (ascensão ou queda na escala social) da <strong>mobilidade horizontal</strong> (mudança
          de posição sem alteração de estrato). A mobilidade pode ser também <strong>intergeracional</strong>
          (entre pais e filhos) ou <strong>intrageracional</strong> (ao longo da vida do mesmo indivíduo).
        </p>
        <p>
          No Brasil, a crença na mobilidade social pela educação é poderosa — mas os dados mostram
          que ela é mais limitada do que o imaginário meritocrático sugere. Estudos de Marcelo Medeiros
          e outros pesquisadores do IPEA demonstram que a probabilidade de um filho de família pobre
          atingir o topo da distribuição de renda é muito baixa, enquanto filhos de famílias ricas
          raramente caem para os estratos inferiores — evidenciando que a estrutura social é mais
          rígida do que o discurso do "mérito" reconhece.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de mobilidade</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ascensão social</strong></td>
                <td>Movimento para estrato social superior</td>
                <td>Filho de operário que se torna engenheiro via universidade pública</td>
              </tr>
              <tr>
                <td><strong>Mobilidade descendente</strong></td>
                <td>Queda para estrato social inferior</td>
                <td>Empresário que fale e retorna a trabalho assalariado de baixa renda</td>
              </tr>
              <tr>
                <td><strong>Mobilidade intergeracional</strong></td>
                <td>Mudança entre gerações (pai e filho)</td>
                <td>Pais agricultores, filho universitário e trabalhador urbano qualificado</td>
              </tr>
              <tr>
                <td><strong>Mobilidade intrageracional</strong></td>
                <td>Mudança ao longo da vida do indivíduo</td>
                <td>Trabalhador que começa como balconista e chega a gerente da empresa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorias Críticas</span>
        <h2>6. Perspectivas Marxistas e Críticas sobre a Educação</h2>
        <p>
          Enquanto Bourdieu analisa a escola como reprodutora da dominação cultural, a tradição
          marxista enfoca sua função na reprodução das relações de produção capitalistas. Louis
          Althusser, em <em>Ideologia e Aparelhos Ideológicos de Estado</em> (1970), conceituou
          a escola como principal <strong>Aparelho Ideológico de Estado</strong> (AIE): ela não
          reproduz o capitalismo pela força, mas pela ideologia, inculcando nos alunos os valores
          e comportamentos necessários à ordem capitalista — pontualidade, hierarquia, competição,
          aceitação da autoridade.
        </p>
        <p>
          Antonio Gramsci, por sua vez, destacou o papel dos <strong>intelectuais orgânicos</strong>
          — educadores vinculados às classes trabalhadoras — na construção de uma hegemonia
          alternativa. Para Gramsci, a escola poderia ser um campo de disputa: conquistar a
          escola significava conquistar a capacidade de produzir narrativas sobre o mundo social.
          Paulo Freire radicalizou essa perspectiva ao propor a <strong>educação libertadora</strong>,
          que parte da realidade dos educandos para transformá-la.
        </p>

        <div className="lesson-highlight">
          <h3>Paulo Freire: Pedagogia do Oprimido</h3>
          <p>
            Em <em>Pedagogia do Oprimido</em> (1968), Paulo Freire criticou a <strong>educação bancária</strong>:
            o modelo em que o professor "deposita" conhecimento num aluno passivo, como dinheiro num banco.
            Para Freire, a educação autêntica é dialógica — parte do universo cultural dos educandos,
            problematiza sua realidade e os capacita a transformá-la. A conscientização é o processo
            pelo qual o oprimido reconhece as causas estruturais de sua opressão e adquire capacidade
            de ação política.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ensino Público e Privado</span>
        <h2>7. Dualidade Público-Privado na Educação Brasileira</h2>
        <p>
          Um dos traços mais marcantes da educação brasileira é a inversão do padrão observado
          nos países desenvolvidos: no Brasil, as melhores escolas são privadas e pagas,
          enquanto as universidades mais conceituadas são públicas e gratuitas. Isso cria
          uma contradição paradoxal: os pobres que frequentam escolas públicas de baixa qualidade
          competem com os ricos que estudaram em escolas privadas caras pelo acesso às melhores
          universidades — que são gratuitas, mas inacessíveis sem preparação adequada.
        </p>
        <p>
          Esse sistema reproduz e amplifica a desigualdade: jovens de famílias ricas recebem
          educação básica de alta qualidade (privada e paga), entram facilmente nas universidades
          federais gratuitas e recebem gratuitamente uma formação superior que o Estado financia.
          Jovens pobres frequentam escolas públicas subfinanciadas, não conseguem entrar nas
          federais e, se acessam o ensino superior, é via ProUni ou FIES em faculdades privadas
          de qualidade variável.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏫</span>
            <h3>Escola pública</h3>
            <p>Atende 80% dos estudantes, mas é subfinanciada: salários de professores abaixo da média, infraestrutura precária, alta rotatividade docente.</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Escola privada</h3>
            <p>Atende 20% dos estudantes, mas produz a maioria dos aprovados nas melhores universidades federais — o "paradoxo da universidade pública para ricos".</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>IDEB e qualidade</h3>
            <p>O IDEB revela abismos de qualidade: escolas privadas das capitais têm média 7-8; escolas públicas de periferia, 3-4 — numa escala de 0 a 10.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Cotas como correção</h3>
            <p>As cotas buscam corrigir essa distorção, mas não a eliminam: a raiz do problema está na dualidade da educação básica, não apenas no acesso universitário.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Evasão e Trabalho Infantil</span>
        <h2>8. Evasão Escolar, Trabalho Infantil e Pobreza</h2>
        <p>
          A evasão escolar é um dos principais indicadores da desigualdade educacional brasileira.
          Ela atinge especialmente jovens entre 15 e 17 anos no ensino médio, fase em que a
          pressão econômica sobre as famílias mais vulneráveis leva muitos jovens a abandonar
          os estudos para trabalhar e contribuir com a renda doméstica. Esse fenômeno não é
          resultado de falta de interesse — é produto de condições estruturais de pobreza que
          tornam a permanência na escola economicamente inviável.
        </p>
        <p>
          O <strong>trabalho infantil</strong> — especialmente em suas formas mais leves,
          como o trabalho doméstico e em pequenas atividades familiares — afeta diretamente
          o desempenho escolar e aumenta a evasão. O Brasil ratificou as convenções da OIT que
          proíbem o trabalho de menores de 16 anos (salvo como aprendiz a partir dos 14) e
          criou o Programa de Erradicação do Trabalho Infantil (PETI), mas o fenômeno persiste,
          especialmente no campo e nas regiões Norte e Nordeste.
        </p>

        <div className="lesson-highlight">
          <h3>O custo da evasão para o desenvolvimento</h3>
          <p>
            Estudos do IPEA estimam que cada ano de escolaridade aumenta em cerca de 10% a
            renda do trabalhador ao longo da vida. A evasão escolar, portanto, não é apenas
            um problema individual — é um custo coletivo que perpetua a pobreza e reduz a
            produtividade da economia. Reter o estudante na escola é, ao mesmo tempo, política
            social, educacional e econômica — o que justifica programas como o Bolsa Família,
            que condicionou o benefício à frequência escolar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Educação e Gênero</span>
        <h2>9. Educação e Gênero: As Mulheres Superam os Homens, Mas a Desigualdade Persiste</h2>
        <p>
          Um dos paradoxos da educação brasileira contemporânea é o protagonismo feminino:
          mulheres têm mais anos de estudo, taxas de conclusão do ensino médio e do superior
          maiores do que os homens. No entanto, essa maior escolaridade não se traduz em
          igualdade salarial ou de representação nos postos de comando — evidenciando que
          a educação é necessária, mas não suficiente para superar as desigualdades de gênero.
        </p>
        <p>
          A <strong>sub-representação feminina</strong> em certas áreas do conhecimento — STEM
          (ciências, tecnologia, engenharia e matemática) — reflete estereótipos de gênero que
          influenciam as escolhas educacionais desde cedo. A socióloga Heleieth Saffioti e a
          filósofa Judith Butler analisaram como as instituições educacionais reproduzem papéis
          de gênero ao socializar meninos e meninas de formas diferentes, naturalizando desigualdades
          que são, na verdade, construções sociais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Mulheres</th>
                <th>Homens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anos médios de estudo</td>
                <td>9,4 anos</td>
                <td>8,8 anos</td>
              </tr>
              <tr>
                <td>Acesso ao ensino superior</td>
                <td>~58% dos matriculados</td>
                <td>~42% dos matriculados</td>
              </tr>
              <tr>
                <td>Salário médio (mesma função)</td>
                <td>~78% do salário masculino</td>
                <td>Referência (100%)</td>
              </tr>
              <tr>
                <td>Posições de liderança (empresas)</td>
                <td>~38% dos cargos gerenciais</td>
                <td>~62% dos cargos gerenciais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Novas Tecnologias</span>
        <h2>10. Educação Digital, EAD e Desigualdade de Acesso</h2>
        <p>
          A pandemia de COVID-19 (2020-2021) evidenciou brutalmente a desigualdade digital
          na educação brasileira: quando as escolas fecharam e o ensino passou a ser remoto,
          milhões de estudantes pobres ficaram sem acesso às aulas por não terem computador,
          internet adequada ou espaço para estudar em casa. A Pesquisa TIC Domicílios (CETIC)
          mostrou que apenas 57% dos domicílios da classe D/E tinham acesso à internet em 2020,
          contra 99% das classes A/B.
        </p>
        <p>
          A <strong>educação a distância</strong> (EAD) expandiu-se enormemente no Brasil,
          especialmente no ensino superior privado, onde já representa mais de 50% das matrículas.
          Essa expansão tem aspectos positivos (amplia o acesso para quem não pode se deslocar
          ou estudar em tempo integral), mas levanta questões sobre qualidade, evasão (taxas
          maiores no EAD do que no presencial) e a precarização do trabalho docente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💻</span>
            <h3>Exclusão digital</h3>
            <p>50 milhões de brasileiros não têm acesso à internet. A exclusão digital na educação reproduz e amplia a exclusão social — nova dimensão da desigualdade educacional.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Smartphone como único acesso</h3>
            <p>Para muitos estudantes pobres, o celular é o único dispositivo disponível — limitando as possibilidades de aprendizado em relação a quem tem computador e internet fixa.</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>EAD no superior</h3>
            <p>Mais de 50% das matrículas do ensino superior privado são EAD. Expansão do acesso, mas com desafios de qualidade e evasão que superam os do presencial.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Futuro do trabalho</h3>
            <p>Automação e inteligência artificial exigem novas competências da educação — mas o debate sobre essas demandas ainda não chegou à maioria das escolas públicas brasileiras.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Funções da educação"
          statement={
            <p>
              Para Émile Durkheim, a principal função social da educação é:
            </p>
          }
          options={[
            { letter: "A", text: "Preparar indivíduos exclusivamente para o mercado de trabalho capitalista." },
            { letter: "B", text: "Integrar o indivíduo à sociedade, transmitindo valores, normas e conhecimento coletivo.", correct: true },
            { letter: "C", text: "Reproduzir as desigualdades de classe por meio da violência simbólica." },
            { letter: "D", text: "Substituir a família como principal agente de socialização primária." },
            { letter: "E", text: "Conscientizar os trabalhadores sobre a exploração capitalista." },
          ]}
          resolution={
            <p>
              Para Durkheim, a educação é o mecanismo pelo qual a sociedade garante sua
              coesão ao transmitir às novas gerações normas, valores e conhecimentos necessários
              à vida coletiva — a função integradora é central em sua teoria funcionalista.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Capital cultural de Bourdieu"
          statement={
            <p>
              O conceito de <strong>capital cultural</strong> de Pierre Bourdieu refere-se a:
            </p>
          }
          options={[
            { letter: "A", text: "O dinheiro investido em cursos, livros e materiais escolares." },
            { letter: "B", text: "A rede de relações sociais que facilita o acesso a oportunidades educacionais." },
            { letter: "C", text: "O conjunto de conhecimentos, habilidades e disposições adquiridas pela socialização que são valorizadas pela escola.", correct: true },
            { letter: "D", text: "Os bens culturais (livros, obras de arte) que a família possui materialmente." },
            { letter: "E", text: "A certificação escolar obtida ao concluir cada etapa da educação formal." },
          ]}
          resolution={
            <p>
              Capital cultural inclui o domínio da língua culta, o conhecimento de arte e
              literatura, o modo de se expressar e o gosto por determinadas práticas culturais —
              elementos adquiridos no ambiente familiar e que conferem vantagem escolar a
              filhos de famílias com maior escolaridade.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Paulo Freire e educação bancária"
          statement={
            <p>
              Paulo Freire, em "Pedagogia do Oprimido", critica o modelo de "educação bancária" porque:
            </p>
          }
          options={[
            { letter: "A", text: "Propõe que a educação deve ser financiada exclusivamente pelo setor privado e pelos bancos." },
            { letter: "B", text: "Defende que o professor é o único detentor do conhecimento e os alunos não têm nada a ensinar." },
            { letter: "C", text: "Trata os alunos como receptores passivos de conhecimento, negando seu universo cultural e impedindo a conscientização e transformação social.", correct: true },
            { letter: "D", text: "Propõe que a educação deve ser restrita às disciplinas técnicas necessárias ao mercado de trabalho." },
            { letter: "E", text: "Defende que apenas os professores com formação universitária são capazes de promover aprendizado verdadeiro." },
          ]}
          resolution={
            <p>
              Freire critica o modelo em que o professor "deposita" conteúdo num aluno passivo,
              sem considerar sua experiência de vida. A educação libertadora, pelo contrário,
              é dialógica: parte do universo cultural dos educandos e os capacita a problematizar
              e transformar sua realidade — o processo de conscientização.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Meritocracia e Bourdieu"
          statement={
            <p>
              A crítica de Bourdieu à meritocracia escolar baseia-se no argumento de que:
            </p>
          }
          options={[
            { letter: "A", text: "A escola é uma instituição completamente justa, pois avalia todos pelos mesmos critérios." },
            { letter: "B", text: "O mérito escolar reflete exclusivamente o esforço individual de cada aluno." },
            { letter: "C", text: "A escola avalia todos pelo mesmo padrão, mas esse padrão já pertence à cultura da classe dominante, transformando vantagem de origem em mérito aparente.", correct: true },
            { letter: "D", text: "Os professores conscientemente discriminam alunos pobres em suas avaliações." },
            { letter: "E", text: "A meritocracia é um conceito apenas aplicável ao mercado de trabalho, não à educação." },
          ]}
          resolution={
            <p>
              Para Bourdieu, a escola cobra os mesmos padrões de todos, mas esse padrão é
              o da cultura dominante — quem cresceu nessa cultura já o domina "naturalmente".
              O que parece mérito é, na verdade, capital cultural herdado, e a escola legitima
              essa vantagem ao transformá-la em resultado de esforço e talento individuais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Cotas e políticas afirmativas"
          statement={
            <p>
              "A Lei de Cotas (2012) reservou vagas nas universidades federais para estudantes
              de escola pública, com distribuição proporcional entre pretos, pardos e indígenas.
              Dez anos após, pesquisas mostram que cotistas têm desempenho acadêmico igual ou
              superior aos não-cotistas."
              <br /><br />
              Esse dado refuta qual argumento contrário às cotas?
            </p>
          }
          options={[
            { letter: "A", text: "O argumento de que as cotas são inconstitucionais por violar a isonomia." },
            { letter: "B", text: "O argumento de que cotistas teriam desempenho inferior por falta de preparo, comprometendo a qualidade das universidades.", correct: true },
            { letter: "C", text: "O argumento de que as cotas deveriam ser apenas socioeconômicas, sem recorte racial." },
            { letter: "D", text: "O argumento de que as cotas beneficiam apenas as elites negras, não os mais pobres." },
            { letter: "E", text: "O argumento de que as universidades públicas já eram suficientemente diversas antes da lei." },
          ]}
          resolution={
            <p>
              O principal argumento contra as cotas era que estudantes cotistas seriam menos
              preparados e rebaixariam a qualidade acadêmica. Os dados mostram o contrário:
              cotistas se formam com desempenho igual ou melhor, refutando esse argumento e
              evidenciando que o baixo acesso antes das cotas era resultado de desigualdade
              estrutural, não de capacidade intelectual.
            </p>
          }
        />
      </section>
    </article>
  );
}
