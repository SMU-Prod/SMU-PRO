"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 16</span>
          <h1>Estratificação Social, Mobilidade Social e Classes Sociais</h1>
          <p>
            Nenhuma sociedade é plenamente igualitária: todas distribuem recursos, prestígio
            e poder de forma desigual. Entender como isso funciona — quais sistemas de hierarquia
            existiram na história, como Marx e Weber compreenderam as classes sociais, e como as
            pessoas transitam (ou não) entre posições sociais — é um dos temas mais frequentes
            e fundamentais no ENEM e na Sociologia contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O Que é Estratificação Social?</h2>
        <p>
          <strong>Estratificação social</strong> é a divisão da sociedade em camadas (estratos)
          hierarquizadas, com base em critérios como riqueza, prestígio, poder ou origem.
          Toda sociedade conhecida na história apresentou alguma forma de estratificação —
          a questão sociológica é entender quais critérios definem as hierarquias, como elas
          se reproduzem e se podem ser transformadas.
        </p>
        <p>
          A estratificação social não é apenas econômica: envolve dimensões simbólicas (prestígio,
          honra, reconhecimento social), políticas (acesso ao poder e à tomada de decisões) e
          culturais (acesso ao conhecimento e aos bens culturais). Para a Sociologia, a
          desigualdade não é natural nem inevitável — é produto de relações sociais históricas
          que podem ser transformadas.
        </p>
        <div className="lesson-highlight">
          <h3>Estratificação vs. diferenciação social</h3>
          <p>
            Toda sociedade apresenta <strong>diferenciação social</strong> (divisão de papéis e
            funções, como médicos, agricultores, professores). Mas nem toda diferenciação é
            <strong>estratificação</strong>: a estratificação implica hierarquia de valor e de
            acesso a recursos. A divisão social do trabalho (Durkheim) é diferenciação; a
            desigualdade de salário entre médicos e garis é estratificação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formas Históricas</span>
        <h2>2. Sistemas de Estratificação ao Longo da História</h2>
        <p>
          Cada época histórica produziu um modelo diferente de estratificação social, com
          critérios distintos para definir quem está no topo e quem está na base, e com
          graus variáveis de abertura à mobilidade. O estudo comparado desses sistemas
          permite compreender o que é específico do sistema de classes capitalista.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Critério principal</th>
                <th>Mobilidade</th>
                <th>Exemplo histórico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Castas</strong></td>
                <td>Nascimento / religião</td>
                <td>Praticamente nula (fechado)</td>
                <td>Índia tradicional (brâmanes, xátrias, vaixás, sudras, dalit)</td>
              </tr>
              <tr>
                <td><strong>Estamentos</strong></td>
                <td>Nascimento + privilégios legais</td>
                <td>Muito restrita</td>
                <td>Europa feudal (clero, nobreza, servos)</td>
              </tr>
              <tr>
                <td><strong>Escravidão</strong></td>
                <td>Condição jurídica (propriedade)</td>
                <td>Nula (por definição)</td>
                <td>Antiguidade greco-romana; Brasil colonial e imperial</td>
              </tr>
              <tr>
                <td><strong>Classes sociais</strong></td>
                <td>Posição econômica</td>
                <td>Possível (sistema aberto)</td>
                <td>Sociedade capitalista contemporânea</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Sistema de castas e intocabilidade</h3>
          <p>
            O sistema de castas indiano, legitimado pelo hinduísmo, dividia a sociedade em
            grupos hereditários rígidos. Os <em>dalit</em> ("intocáveis") ficavam fora do
            sistema e realizavam as tarefas consideradas impuras. A Constituição indiana de
            1950 aboliu legalmente a discriminação por casta, mas os efeitos sociológicos
            persistem até hoje — B. R. Ambedkar, dalit que se tornou jurista e redator
            da Constituição indiana, é símbolo dessa luta.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classes Sociais</span>
        <h2>3. Classes Sociais: A Perspectiva de Marx</h2>
        <p>
          Para <strong>Karl Marx</strong>, as classes sociais são definidas objetivamente pela
          relação dos indivíduos com os <strong>meios de produção</strong>: quem os possui
          (a <strong>burguesia</strong>) e quem só possui sua força de trabalho (o
          <strong>proletariado</strong>) formam as duas classes fundamentais do capitalismo.
          Essa relação é necessariamente antagônica, pois o lucro capitalista provém da
          extração de <strong>mais-valia</strong> — trabalho não pago ao operário.
        </p>
        <p>
          Marx distinguia a <strong>classe em si</strong> (conjunto de pessoas que compartilham
          a mesma posição objetiva no sistema produtivo) da <strong>classe para si</strong>
          (quando esse grupo adquire consciência de seus interesses comuns e age coletivamente).
          A passagem de uma para outra é o processo de formação da <strong>consciência de classe</strong>,
          que Marx via como condição para a transformação social. A <strong>ideologia</strong>
          dominante funciona para impedir essa tomada de consciência — o que Engels chamou de
          "falsa consciência".
        </p>
        <div className="lesson-highlight">
          <h3>Outras classes em Marx</h3>
          <p>
            Embora o modelo marxista básico seja binário (burguesia × proletariado), Marx
            reconhecia a existência de outras classes: a <strong>pequena burguesia</strong>
            (pequenos proprietários que trabalham para si mesmos), o <strong>lumpemproletariado</strong>
            (a "ralé" sem trabalho fixo nem consciência de classe) e os <strong>camponeses</strong>.
            A fragmentação do proletariado e o crescimento da classe média assalariada foram
            aspectos que exigiram refinamentos posteriores da teoria marxista.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Weberiana</span>
        <h2>4. Classes Sociais: A Perspectiva de Weber</h2>
        <p>
          <strong>Max Weber</strong> concordava com Marx que a posição econômica é fundamental
          na estratificação, mas criticou o que considerava um reducionismo econômico. Para
          Weber, a estratificação é <strong>multidimensional</strong> e envolve três dimensões
          relativamente independentes: <strong>classe</strong> (situação de mercado — riqueza
          e oportunidades de vida), <strong>status</strong> (prestígio social, estilo de vida,
          honra) e <strong>partido</strong> (poder político, capacidade de influenciar decisões).
        </p>
        <p>
          A tridimensionalidade weberiana captura fenômenos que o modelo marxista binário
          deixava de explicar: um pastor protestante pode ter pouco dinheiro (classe baixa),
          alto prestígio na comunidade (status elevado) e influência política (partido). Um
          traficante de drogas pode ter alta renda (classe média-alta em termos de riqueza),
          estigma social (status negativo) e poder coercitivo informal (partido paralelo).
          Uma mulher rica pode ter alto status econômico mas sofrer discriminação de gênero
          que limita seu acesso ao poder político.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚒️</span>
            <h3>Classe (Weber)</h3>
            <p>
              Situação de mercado: probabilidades de vida determinadas pela posse de bens,
              qualificações e serviços. Não gera necessariamente ação coletiva — diferentemente
              das classes marxistas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎖️</span>
            <h3>Status</h3>
            <p>
              Prestígio social associado a estilos de vida, grupos de honra e comunidades de
              pertencimento. Pode reforçar ou contradizer a posição de classe.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Partido</h3>
            <p>
              Grupos que buscam influenciar o poder político, independentemente de sua base
              econômica ou social. Partidos podem representar classes ou status, mas têm
              lógica própria.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Capital Cultural</span>
        <h2>5. Bourdieu: Campo, Habitus e Capitais</h2>
        <p>
          O sociólogo francês <strong>Pierre Bourdieu</strong> desenvolveu uma teoria da
          estratificação que integra e supera as perspectivas marxista e weberiana. Para Bourdieu,
          a sociedade é organizada em <strong>campos</strong> (espaços sociais de disputas —
          o campo econômico, o campo cultural, o campo educacional, o campo artístico) onde os
          agentes competem por diferentes formas de <strong>capital</strong>.
        </p>
        <p>
          As formas de capital são: <strong>capital econômico</strong> (dinheiro e patrimônio),
          <strong>capital cultural</strong> (conhecimentos, diplomas e disposições adquiridas
          pela socialização e pela educação formal),{" "}
          <strong>capital social</strong> (redes de relações sociais) e{" "}
          <strong>capital simbólico</strong> (reconhecimento e prestígio). Esses capitais se
          convertem uns nos outros: diploma (capital cultural) pode gerar emprego de alta
          renda (capital econômico); redes de relações (capital social) podem abrir portas
          no mercado de trabalho.
        </p>
        <p>
          O <strong>habitus</strong> é o conjunto de disposições, esquemas de percepção e
          tendências de ação adquiridos pelo indivíduo ao longo de sua trajetória social.
          O habitus de classe explica por que filhos de famílias de alta cultura tendem a se
          sair melhor na escola (não por mérito, mas por correspondência entre o habitus
          familiar e o habitus exigido pela escola burguesa) — o que Bourdieu chamou de
          <strong>reprodução social</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mobilidade</span>
        <h2>6. Mobilidade Social: Tipos e Determinantes</h2>
        <p>
          <strong>Mobilidade social</strong> é a possibilidade de um indivíduo ou grupo
          mudar de posição na hierarquia social. A mobilidade é um dos principais critérios
          para distinguir sistemas de estratificação: sistemas fechados (castas) têm
          mobilidade nula; sistemas abertos (classes) permitem mobilidade, mas ela não é livre
          nem igualmente distribuída.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vertical ascendente</td>
                <td>Subida na hierarquia social</td>
                <td>Filho de operário torna-se médico via cotas universitárias</td>
              </tr>
              <tr>
                <td>Vertical descendente</td>
                <td>Queda na hierarquia social</td>
                <td>Empresário vai à falência e perde patrimônio após crise</td>
              </tr>
              <tr>
                <td>Horizontal</td>
                <td>Mudança de posição sem alterar o estrato</td>
                <td>Engenheiro muda de empresa mantendo salário equivalente</td>
              </tr>
              <tr>
                <td>Intrageneracional</td>
                <td>Mobilidade dentro da trajetória de um indivíduo</td>
                <td>Funcionário que parte de estagiário e chega a diretor</td>
              </tr>
              <tr>
                <td>Intergeracional</td>
                <td>Comparação entre posições de pais e filhos</td>
                <td>Filhos de trabalhadores rurais que chegam ao ensino superior</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A mobilidade social depende de fatores estruturais (crescimento econômico,
          expansão educacional, políticas públicas) e de fatores individuais (esforço,
          capital cultural herdado). Bourdieu demonstrou que o capital cultural —
          os conhecimentos, diplomas e disposições adquiridos em família e escola —
          é um fator decisivo na reprodução das desigualdades, pois favorece quem já
          pertence a classes privilegiadas, criando uma aparência meritocrática que
          na verdade reproduz a hierarquia existente.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meritocracia</span>
        <h2>7. Meritocracia: Ideologia ou Possibilidade Real?</h2>
        <p>
          A <strong>meritocracia</strong> é a crença de que a posição social de cada indivíduo
          resulta exclusivamente de seu esforço, talento e mérito pessoal. Tornou-se a
          ideologia dominante das sociedades capitalistas modernas — a justificativa para
          as desigualdades existentes: quem está no topo merece estar; quem está na base
          não se esforçou o suficiente.
        </p>
        <p>
          A crítica sociológica à meritocracia mostra que ela ignora as <strong>condições
          estruturais desiguais</strong> de partida: uma criança nascida em família de
          alta renda tem acesso a escola melhor, atividades extracurriculares, viagens,
          livros, alimentação adequada e redes de contato que uma criança pobre não tem.
          Comparar os resultados de ambas como se as condições fossem iguais é uma
          distorção ideológica que naturaliza a desigualdade.
        </p>
        <div className="lesson-highlight">
          <h3>Michael Sandel e a tirania do mérito</h3>
          <p>
            O filósofo Michael Sandel, em <em>A Tirania do Mérito</em> (2020), argumenta que
            a meritocracia, levada ao extremo, produz <strong>arrogância dos vencedores</strong>
            (que atribuem todo o sucesso a si mesmos) e <strong>humilhação dos perdedores</strong>
            (que internalizam o fracasso como falha pessoal). Isso corrói a solidariedade social
            e a democracia. Uma sociedade justa precisaria não apenas de igualdade de oportunidades,
            mas de reconhecimento da dignidade do trabalho independentemente do "mérito".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classe Média</span>
        <h2>8. A Classe Média Brasileira: Definição e Transformações</h2>
        <p>
          O conceito de <strong>classe média</strong> é um dos mais disputados na Sociologia
          brasileira. Diferentes abordagens produzem resultados distintos: pela renda (famílias
          com renda mensal entre R$ 2.000 e R$ 8.000 per capita, segundo critérios do FGV);
          pela ocupação (trabalhadores de colarinho branco, servidores públicos, profissionais
          liberais); pelo consumo e estilo de vida; ou pela posição entre o capital e o trabalho.
        </p>
        <p>
          Nos anos 2000–2014, o Brasil assistiu a um intenso debate sobre a "nova classe média"
          ou "Classe C": dezenas de milhões de famílias ascenderam da pobreza para um patamar
          de consumo antes inacessível, graças ao aumento do salário mínimo, ao Bolsa Família
          e ao crédito. O sociólogo <strong>Marcelo Neri</strong> chamou esse grupo de "nova
          classe média"; <strong>Jessé Souza</strong> criticou o conceito, argumentando que
          se tratava de uma "nova ralé" — trabalhadores precários que ganharam acesso a bens de
          consumo sem conquistar cidadania plena, segurança no trabalho ou reconhecimento social.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📈</span>
            <h3>Ascensão (2003–2014)</h3>
            <p>
              Cerca de 40 milhões de pessoas saíram da pobreza; a "Classe C" chegou a 53%
              da população. Crescimento do consumo, crédito e formalização do trabalho.
            </p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Retrocesso (2015–2021)</h3>
            <p>
              A crise econômica, a reforma trabalhista e a pandemia reverteram parte dos ganhos:
              desemprego, precarização e avanço da informalidade empurraram famílias de volta
              à vulnerabilidade.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>Educação e mobilidade</h3>
            <p>
              A expansão do ensino superior via PROUNI, FIES e REUNI criou uma geração de
              primeiros universitários. Mas diplomas sem emprego de qualidade geraram
              "frustração de expectativas".
            </p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Habitação e consumo</h3>
            <p>
              O Minha Casa Minha Vida e o acesso ao crédito possibilitaram a propriedade de
              imóveis e a compra de eletrônicos, automóveis e serviços antes restritos à
              classe média tradicional.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raça e Gênero</span>
        <h2>9. Estratificação, Raça e Gênero: Interseccionalidade</h2>
        <p>
          A estratificação social não é um fenômeno unidimensional: raça, gênero, sexualidade,
          deficiência e regionalidade se <strong>interseccionam</strong> com a classe para
          produzir posições sociais específicas. O conceito de <strong>interseccionalidade</strong>,
          desenvolvido pela jurista Kimberlé Crenshaw, mostra que as opressões não se somam
          simplesmente — elas se articulam de formas complexas que produzem experiências
          singulares.
        </p>
        <p>
          No Brasil, a estratificação racial é estrutural: pessoas negras (pretas e pardas)
          constituem 75% dos 10% mais pobres da população e apenas 27% dos 10% mais ricos
          (IBGE, 2022). Essa assimetria não é explicável apenas por classe — é produto do
          <strong>racismo estrutural</strong>: conjunto de práticas, normas e representações
          que, mesmo sem intenção discriminatória explícita, produzem sistematicamente
          desvantagens para pessoas negras em todas as esferas sociais.
        </p>
        <div className="lesson-highlight">
          <h3>Desigualdade de gênero no mercado de trabalho</h3>
          <p>
            Mulheres ganham em média 22% menos que homens para funções equivalentes no Brasil.
            Além disso, realizam a maior parte do trabalho doméstico e de cuidado não remunerado
            — o que a Sociologia chama de <strong>dupla jornada</strong>. O "teto de vidro"
            — barreira simbólica que impede mulheres de chegar ao topo das hierarquias
            organizacionais — é outra manifestação da estratificação de gênero que transcende
            a dimensão puramente econômica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil Contemporâneo</span>
        <h2>10. Estratificação no Brasil: Pirâmide e Índice de Gini</h2>
        <p>
          O Brasil é historicamente um dos países com maior concentração de renda do mundo.
          A pirâmide social brasileira revela que a riqueza está fortemente concentrada
          no topo, enquanto a base é amplamente majoritária e historicamente excluída.
          O <strong>Índice de Gini</strong> mede a desigualdade de renda numa escala de
          0 (igualdade perfeita) a 1 (desigualdade máxima).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Década</th>
                <th>Gini Brasil</th>
                <th>Contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1980</td>
                <td>0,59</td>
                <td>Redemocratização, hiperinflação, dívida externa</td>
              </tr>
              <tr>
                <td>1990</td>
                <td>0,61</td>
                <td>Plano Real, abertura econômica, privatizações</td>
              </tr>
              <tr>
                <td>2003</td>
                <td>0,58</td>
                <td>Início das políticas de transferência de renda</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>0,53</td>
                <td>Pico do Bolsa Família, expansão do ensino superior</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>0,52</td>
                <td>Pós-pandemia, retomada parcial, ainda muito desigual</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Mesmo com a queda do Gini nos anos 2000, o Brasil permanece entre os países mais
          desiguais do mundo. Os 1% mais ricos concentram cerca de 28% da renda nacional —
          mais do que os 50% mais pobres juntos. Essa concentração tem raízes históricas
          (escravidão, latifúndio, exclusão educacional) e é mantida por estruturas atuais
          (tributação regressiva, mercado de trabalho dual, segregação espacial). Transformá-la
          exige políticas redistributivas de longo prazo e mudanças estruturais profundas.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Sistemas de estratificação"
          statement={<p>O sistema de <strong>castas</strong>, presente na Índia tradicional, caracteriza-se por ser um sistema de estratificação:</p>}
          options={[
            { letter: "A", text: "Aberto, que permite ampla mobilidade social com base no mérito individual." },
            { letter: "B", text: "Fechado, determinado pelo nascimento, com mobilidade social praticamente nula.", correct: true },
            { letter: "C", text: "Baseado exclusivamente na posse de capital econômico." },
            { letter: "D", text: "Definido pela ocupação profissional, independentemente da origem familiar." },
            { letter: "E", text: "Temporário, pois é facilmente superado com o avanço do capitalismo." },
          ]}
          resolution={<p>O sistema de castas é fechado e hereditário: a posição de cada indivíduo é determinada pelo nascimento, com base em critérios religiosos (hinduísmo). A mobilidade entre castas é praticamente impossível, diferentemente das classes sociais capitalistas, que constituem um sistema (teoricamente) aberto.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Marx e Weber sobre classes"
          statement={<p>Compare as abordagens de Marx e Weber sobre classes sociais. Qual afirmação está <strong>correta</strong>?</p>}
          options={[
            { letter: "A", text: "Marx e Weber concordam que as classes são definidas exclusivamente pelo prestígio social." },
            { letter: "B", text: "Para Weber, a estratificação social se reduz à esfera econômica, tal como em Marx." },
            { letter: "C", text: "Marx define as classes pela relação com os meios de produção; Weber propõe uma visão multidimensional incluindo classe, status e partido.", correct: true },
            { letter: "D", text: "Weber nega a existência de conflito de classes, enquanto Marx o considera inevitável e salutar." },
            { letter: "E", text: "Ambos defendem que a mobilidade social é impossível em qualquer sistema capitalista." },
          ]}
          resolution={<p>Marx define as classes pela posição objetiva no sistema produtivo (burguesia × proletariado) e vê o conflito como motor da história. Weber amplia a análise: além da dimensão econômica (classe), considera o prestígio (status) e o poder político (partido) como dimensões independentes da estratificação, permitindo analisar situações em que essas dimensões não coincidem.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Capital cultural"
          statement={<p>O sociólogo Pierre Bourdieu introduziu o conceito de <strong>capital cultural</strong> para explicar a reprodução das desigualdades sociais. Esse conceito se refere a:</p>}
          options={[
            { letter: "A", text: "O montante de dinheiro que uma família possui para investir em educação." },
            { letter: "B", text: "Os conhecimentos, habilidades, títulos e disposições adquiridos pela socialização e pela educação formal que conferem vantagens sociais.", correct: true },
            { letter: "C", text: "Os investimentos financeiros realizados em obras de arte e bens culturais." },
            { letter: "D", text: "O acesso à internet e às tecnologias digitais de comunicação." },
            { letter: "E", text: "O número de idiomas que um indivíduo fala fluentemente." },
          ]}
          resolution={<p>O capital cultural de Bourdieu inclui o capital incorporado (disposições duráveis, gosto, maneiras aprendidos desde a infância), o objetivado (livros, obras de arte) e o institucionalizado (diplomas reconhecidos). Ele explica por que filhos de famílias cultas tendem a se sair melhor no sistema escolar — reproduzindo desigualdades de geração em geração sob aparência de mérito.</p>}
        />

        <Exercise
          level="Avançado"
          title="Mobilidade intergeracional"
          statement={
            <p>
              Pesquisa do IBGE mostrou que, no Brasil, filhos de pais sem ensino superior
              têm probabilidade muito menor de concluir o ensino superior do que filhos de
              pais universitários, mesmo controlando outros fatores. Esse dado ilustra
              principalmente o conceito de:
            </p>
          }
          options={[
            { letter: "A", text: "Alta mobilidade social intrageneracional." },
            { letter: "B", text: "Mobilidade horizontal, pois as pessoas mudam de ocupação sem alterar a classe." },
            { letter: "C", text: "Reprodução social e baixa mobilidade intergeracional, na qual as desigualdades tendem a se perpetuar entre gerações.", correct: true },
            { letter: "D", text: "Estratificação por castas, dado que o sistema brasileiro é hereditário e fechado." },
            { letter: "E", text: "Mobilidade vertical descendente, pois os filhos tendem a ter piores condições que os pais." },
          ]}
          resolution={<p>A perpetuação das desigualdades educacionais entre gerações é um exemplo clássico de baixa mobilidade intergeracional e reprodução social (Bourdieu). O Brasil apresenta alto grau de persistência intergeracional da renda: a posição econômica dos pais é um forte preditor da posição dos filhos, muito além do mérito individual.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Gini e políticas públicas"
          statement={
            <>
              <p>
                O Índice de Gini do Brasil caiu de 0,59 em 1999 para 0,53 em 2012,
                período que coincidiu com a expansão do Programa Bolsa Família, o aumento
                real do salário mínimo e a ampliação do acesso ao ensino superior via
                PROUNI e REUNI. A partir de 2015, com a crise econômica, a queda foi
                interrompida.
              </p>
              <p>Com base no texto e nos conhecimentos sociológicos, assinale a assertiva correta:</p>
            </>
          }
          options={[
            { letter: "A", text: "A queda do Gini demonstra que o Brasil eliminou a pobreza no período citado." },
            { letter: "B", text: "O crescimento econômico, por si só, distribui renda automaticamente, sem necessidade de políticas específicas." },
            { letter: "C", text: "A redução da desigualdade foi resultado de políticas redistributivas ativas, indicando que intervenção estatal pode alterar a estratificação social.", correct: true },
            { letter: "D", text: "A mobilidade social no Brasil independe de políticas públicas, dependendo apenas do esforço individual." },
            { letter: "E", text: "O aumento do Gini após 2015 prova que políticas redistributivas não têm efeito no longo prazo." },
          ]}
          resolution={<p>A queda do Gini entre 2003 e 2012 está associada a políticas redistributivas concretas: transferência de renda (Bolsa Família), valorização do salário mínimo e democratização do ensino superior. Isso demonstra que a desigualdade não é um dado natural — é passível de intervenção pelo Estado. A crise de 2015 e os cortes sociais reverteram parcialmente esses ganhos, confirmando que a redução da desigualdade exige políticas contínuas e estruturais.</p>}
        />
      </section>
    </article>
  );
}
