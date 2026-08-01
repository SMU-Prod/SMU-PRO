"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 40</span>
          <h1>Leitura e Interpretação de Textos, Gráficos e Charges em Sociologia</h1>
          <p>
            No ENEM, quase toda questão de Sociologia vem acompanhada de um texto de apoio — trecho
            teórico, dado estatístico, charge ou infográfico. Dominar a leitura crítica desses
            materiais é tão importante quanto conhecer os conteúdos. Este capítulo ensina estratégias
            práticas de interpretação com exemplos aplicados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Textos Teóricos</span>
        <h2>1. Como Ler Textos de Apoio do ENEM</h2>
        <p>
          Os textos do ENEM em Sociologia podem ser:
        </p>
        <ul>
          <li><strong>Trechos de clássicos</strong> (Marx, Durkheim, Weber, Foucault) — geralmente densos e com vocabulário específico.</li>
          <li><strong>Textos de comentadores</strong> — explicam ou contextualizam teorias.</li>
          <li><strong>Textos jornalísticos</strong> — descrevem fenômenos sociais contemporâneos que devem ser lidos com lentes sociológicas.</li>
        </ul>

        <div className="lesson-highlight">
          <h3>Método de leitura em 4 passos</h3>
          <p>
            <strong>1. Identifique o tema central</strong> (do que trata o texto?).<br />
            <strong>2. Localize a tese ou argumento principal</strong> (o que o autor afirma sobre esse tema?).<br />
            <strong>3. Identifique o autor ou corrente teórica</strong> — mesmo sem nome explícito, certas palavras-chave revelam a filiação.<br />
            <strong>4. Relacione com o enunciado da questão</strong> — qual das alternativas é coerente com o texto E com o conceito pedido?
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra-chave no texto</th>
                <th>Significado real</th>
                <th>Armadilha comum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anomia</td>
                <td>Estado de ausência ou fraqueza de normas sociais (Durkheim)</td>
                <td>Confundir com anarquia política ou desordem generalizada</td>
              </tr>
              <tr>
                <td>Alienação</td>
                <td>Separação do trabalhador do produto, do processo e de si mesmo (Marx)</td>
                <td>Confundir com loucura, distração ou apatia política</td>
              </tr>
              <tr>
                <td>Habitus</td>
                <td>Disposições incorporadas pelo indivíduo ao longo da socialização (Bourdieu)</td>
                <td>Confundir com hábito simples ou comportamento consciente</td>
              </tr>
              <tr>
                <td>Fato social</td>
                <td>Maneiras de agir, pensar e sentir externas e coercitivas ao indivíduo (Durkheim)</td>
                <td>Confundir com qualquer evento que acontece na sociedade</td>
              </tr>
              <tr>
                <td>Etnocentrismo</td>
                <td>Julgamento de outras culturas a partir dos valores da própria cultura</td>
                <td>Confundir com preconceito racial ou xenofobia</td>
              </tr>
              <tr>
                <td>Ação social</td>
                <td>Ação orientada pelo sentido atribuído pelo ator em relação ao outro (Weber)</td>
                <td>Confundir com qualquer ação humana, incluindo atos reflexos</td>
              </tr>
              <tr>
                <td>Solidariedade mecânica</td>
                <td>Coesão por semelhança, típica de sociedades tradicionais (Durkheim)</td>
                <td>Confundir com solidariedade no sentido comum de ajuda mútua</td>
              </tr>
              <tr>
                <td>Capital cultural</td>
                <td>Conjunto de conhecimentos, habilidades e títulos que conferem status (Bourdieu)</td>
                <td>Confundir com bens culturais materiais (livros, obras de arte)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos e Tabelas</span>
        <h2>2. Como Interpretar Gráficos e Dados Estatísticos</h2>
        <p>
          O ENEM frequentemente apresenta gráficos de barras, linhas e tabelas sobre desigualdade,
          trabalho, educação e outros temas sociais. A leitura crítica evita armadilhas comuns.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>Leia o título e as legendas primeiro</h3>
            <p>O que está sendo medido? Em que ano? Qual a fonte? Esses dados definem o que o gráfico pode e não pode afirmar.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Identifique as variáveis</h3>
            <p>O que está no eixo X (horizontal)? E no Y (vertical)? Qual grupo está sendo comparado com qual?</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Cuidado com correlação ≠ causalidade</h3>
            <p>Dois fenômenos podem crescer juntos sem que um cause o outro. O ENEM frequentemente testa se o estudante evita essa confusão.</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Não extrapole além do dado</h3>
            <p>Se o gráfico mostra que X cresceu entre 2010 e 2020, não se pode afirmar que continuará crescendo. Alternativas que vão além dos dados são geralmente erradas.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Charges</span>
        <h2>3. Como Ler Charges e Caricaturas Políticas</h2>
        <p>
          A charge é uma forma de crítica social por meio do humor, da ironia e da exageração
          (hipérbole). No ENEM, ela quase sempre acompanha questões sobre política, desigualdade,
          relações de poder ou temas contemporâneos.
        </p>

        <div className="lesson-highlight">
          <h3>Exemplo de análise de charge</h3>
          <p>
            <strong>Descrição da charge fictícia:</strong> Um homem rico de cartola e terno faz
            malabarismos com sacos de dinheiro em cima de uma balança. Na parte pesada da balança
            estão centenas de pessoas comuns. A legenda diz: "Equilíbrio fiscal."
            <br /><br />
            <strong>Análise sociológica:</strong><br />
            — <strong>Crítica central:</strong> a charge ironiza o discurso do "equilíbrio fiscal" mostrando que ele favorece o capital financeiro em detrimento da população.<br />
            — <strong>Recurso visual:</strong> a balança desnivelada exibe visualmente a desigualdade; o tamanho e traje do homem rico contrastam com a multidão pequena e anônima.<br />
            — <strong>Conceitos sociológicos:</strong> desigualdade de classe, hegemonia (Gramsci) — o discurso econômico dominante é apresentado como neutro, mas favorece interesses específicos.<br />
            — <strong>Hipérbole:</strong> um homem equilibrando centenas — exagero que enfatiza o poder desproporcional do capital sobre a maioria.
          </p>
        </div>

        <p>
          Ao analisar uma charge no ENEM:
        </p>
        <ul>
          <li>Identifique quem são os personagens (representações de classe, instituições, países).</li>
          <li>Identifique o objeto central (balança, muro, correntes) e seu simbolismo.</li>
          <li>Localize a ironia: o que está sendo dito literalmente × o que está sendo criticado.</li>
          <li>Pergunte: qual é o problema social que a charge aponta? Qual conceito sociológico isso evoca?</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>4. 5 Passos para Resolver Qualquer Questão de Sociologia no ENEM</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Leia o texto de apoio antes do enunciado</h3>
            <p>Entenda o que o texto diz sem deixar o enunciado da questão direcionar sua leitura.</p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Identifique o conceito-chave pedido</h3>
            <p>O enunciado geralmente pede que você identifique um fenômeno, aplique uma teoria ou relacione autores. Qual é a tarefa exata?</p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Elimine as alternativas claramente erradas</h3>
            <p>Alternativas que contradizem o texto, atribuem conceitos a autores errados ou extrapolam os dados são eliminadas primeiro.</p>
          </div>
          <div className="lesson-card">
            <span>4️⃣</span>
            <h3>Teste as alternativas restantes com o texto</h3>
            <p>A resposta correta deve ser sustentada pelo texto de apoio E pelo conceito sociológico. Ambos precisam confirmar a alternativa.</p>
          </div>
          <div className="lesson-card">
            <span>5️⃣</span>
            <h3>Desconfie de alternativas absolutas</h3>
            <p>Palavras como "sempre", "nunca", "exclusivamente" e "apenas" quase sempre indicam alternativa errada — a realidade social é complexa e contextual.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Infográficos e Mapas</span>
        <h2>5. Infográficos, Mapas e Dados Cartográficos</h2>
        <p>
          Além de gráficos de barras e linhas, o ENEM frequentemente utiliza <strong>mapas temáticos</strong>,
          <strong> cartogramas</strong> e <strong>infográficos multivariados</strong>. Um mapa temático de
          mortalidade infantil por município revela padrões de desigualdade regional que um gráfico de barras
          nacional esconderia. A espacialização dos dados é, em si, uma ferramenta analítica poderosa.
        </p>
        <p>
          O <strong>cartograma</strong> distorce proporcionalmente o território de acordo com a variável
          representada — um cartograma do PIB estadual torna São Paulo enorme e o Acre minúsculo. Já o
          <strong> infográfico multivariado</strong> combina várias fontes de dados em uma única imagem
          visual, exigindo leitura em múltiplas camadas. Para o ENEM, o protocolo de leitura é o mesmo:
          título → legenda → escala → fonte → o que o dado revela sobre a sociedade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Mapa de densidade</h3>
            <p>Mostra concentração de fenômenos por região (ex: homicídios por 100 mil habitantes por estado). Leia a legenda de cores antes de tirar conclusões.</p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Cartograma</h3>
            <p>Área proporcional à variável (ex: PIB, população). O tamanho visual não representa o território real — representa a magnitude do fenômeno.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Infográfico multivariado</h3>
            <p>Combina dados de várias fontes e variáveis. Identifique o que cada elemento visual representa antes de ler o todo. A hierarquia visual (tamanho, cor) sinaliza importância.</p>
          </div>
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Tabela de dupla entrada</h3>
            <p>Cruza duas variáveis (ex: raça × renda × gênero). Leia os cabeçalhos de linhas e colunas com atenção — a intersecção é o dado mais relevante para o ENEM.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>O que a espacialização revela que os números ocultam</h3>
          <p>
            Um mapa de insegurança alimentar do Brasil mostra concentração no Norte e Nordeste —
            dado que a média nacional (14%) esconde. O ENEM usa essa lógica para testar se o
            aluno percebe que desigualdades regionais, raciais e de gênero são <strong>estruturais</strong>,
            não aleatórias. Quando vir um mapa, pergunte: <em>que padrão social esse dado espacializa?</em>
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Textos Jurídicos</span>
        <h2>6. Análise de Textos Legislativos e Jurídicos</h2>
        <p>
          O ENEM de Ciências Humanas frequentemente usa fragmentos de textos legais como texto de apoio:
          artigos da <strong>Constituição Federal de 1988</strong>, do <strong>Estatuto da Criança e do
          Adolescente</strong> (ECA), do <strong>Estatuto da Igualdade Racial</strong> ou de tratados
          internacionais de direitos humanos. Esses textos exigem uma leitura sociológica — não jurídica —:
          o que essa lei diz sobre as relações sociais e os direitos que ela reconhece ou nega?
        </p>
        <p>
          Para ler um texto legislativo no ENEM, identifique: (1) <strong>qual direito</strong> está sendo
          regulamentado (civil, político ou social, na tipologia de Marshall); (2) <strong>quem é o sujeito</strong>
          de direito (trabalhadores, crianças, mulheres, indígenas); (3) <strong>qual o contexto histórico</strong>
          de aprovação (que luta social pressionou por essa lei?). A lei é sempre um resultado de conflito
          social — nunca surge do vácuo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Texto jurídico</th>
                <th>Ano</th>
                <th>Direito reconhecido</th>
                <th>Movimento social por trás</th>
                <th>Conceito sociológico associado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CF/1988 — Art. 196 (saúde)</td>
                <td>1988</td>
                <td>Saúde como direito social universal</td>
                <td>Movimento sanitarista</td>
                <td>Cidadania social (Marshall); SUS</td>
              </tr>
              <tr>
                <td>ECA — Lei 8.069/1990</td>
                <td>1990</td>
                <td>Proteção integral à criança e ao adolescente</td>
                <td>Movimento pelos direitos da criança</td>
                <td>Doutrina da proteção integral; vulnerabilidade</td>
              </tr>
              <tr>
                <td>Lei Maria da Penha — 11.340/2006</td>
                <td>2006</td>
                <td>Proteção contra violência doméstica e familiar</td>
                <td>Movimento feminista</td>
                <td>Patriarcado; violência de gênero</td>
              </tr>
              <tr>
                <td>Lei 10.639/2003</td>
                <td>2003</td>
                <td>Ensino obrigatório de história afro-brasileira</td>
                <td>Movimento negro</td>
                <td>Racismo estrutural; multiculturalismo</td>
              </tr>
              <tr>
                <td>Estatuto da Igualdade Racial — 12.288/2010</td>
                <td>2010</td>
                <td>Combate à discriminação racial e promoção de igualdade</td>
                <td>Movimento negro; quilombolas</td>
                <td>Ação afirmativa; racismo institucional</td>
              </tr>
              <tr>
                <td>CF/1988 — Art. 231 (terras indígenas)</td>
                <td>1988</td>
                <td>Reconhecimento dos direitos originários dos povos indígenas</td>
                <td>Movimento indígena</td>
                <td>Multiculturalismo; território; soberania</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Literatura e Música</span>
        <h2>7. Textos Literários e Músicas como Fontes Sociológicas</h2>
        <p>
          O ENEM usa obras literárias e musicais como textos de apoio para questões de Sociologia porque
          a arte é um espelho da sociedade: ela registra, critica e imagina realidades sociais de forma
          emotiva e acessível. Poemas de <strong>Carlos Drummond de Andrade</strong>, letras de samba,
          fragmentos de romances de <strong>Machado de Assis</strong> e letras de rap de <strong>Emicida</strong>
          já apareceram em provas anteriores.
        </p>
        <p>
          Para extrair o fenômeno social de um texto artístico: (1) identifique o <strong>contexto histórico</strong>
          da obra (quando foi escrita? Em que período social?); (2) localize o <strong>problema social</strong>
          descrito ou criticado (pobreza, discriminação, trabalho, poder); (3) traduza para um <strong>conceito
          sociológico</strong> (alienação, exclusão, etnocentrismo, patriarcado). O ENEM não exige que você
          conheça a obra — o texto é dado. Mas conhecê-la ajuda a contextualizar rapidamente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Obra / Artista</th>
                <th>Gênero</th>
                <th>Fenômeno social retratado</th>
                <th>Conceito sociológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"O Bicho" — Carlos Drummond de Andrade</td>
                <td>Poema (1948)</td>
                <td>Extrema pobreza urbana, fome, desumanização</td>
                <td>Exclusão social; pobreza absoluta</td>
              </tr>
              <tr>
                <td>"A Carne" — Elza Soares / Marcelo Yuka</td>
                <td>Samba-rock (2002)</td>
                <td>Racismo estrutural, corpos negros descartáveis</td>
                <td>Racismo estrutural; necropolítica (Mbembe)</td>
              </tr>
              <tr>
                <td>"Triste, Louca ou Má" — Francisco, el Hombre</td>
                <td>Música (2016)</td>
                <td>Patriarcado, controle dos corpos femininos</td>
                <td>Patriarcado; violência simbólica (Bourdieu)</td>
              </tr>
              <tr>
                <td>Memórias Póstumas de Brás Cubas — Machado de Assis</td>
                <td>Romance (1881)</td>
                <td>Hipocrisia da elite imperial brasileira, escravidão, classe</td>
                <td>Ideologia; estratificação social</td>
              </tr>
              <tr>
                <td>"Vidas Secas" — Graciliano Ramos</td>
                <td>Romance (1938)</td>
                <td>Seca, migração, pobreza rural nordestina</td>
                <td>Exclusão; mobilidade social; vulnerabilidade</td>
              </tr>
              <tr>
                <td>"Deus é Mulher" — Iza / Daniela Mercury (várias)</td>
                <td>MPB / Axé</td>
                <td>Empoderamento feminino, resistência ao patriarcado</td>
                <td>Gênero; feminismo; identidade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Imagem e Sociedade</span>
        <h2>8. Fotografia, Publicidade e Imagens como Texto Social</h2>
        <p>
          Toda imagem é uma escolha: o que mostrar, como enquadrar, quem está dentro e quem fica de
          fora do quadro. No ENEM, fotografias documentais, peças publicitárias e imagens institucionais
          são usadas para testar a leitura sociológica do visual. <strong>O fotógrafo Sebastião Salgado</strong>
          documentou trabalhadores migrantes e garimpos — suas imagens são textos sobre desigualdade,
          trabalho e dignidade. A publicidade brasileira, historicamente, sub-representou pessoas negras
          e as colocou em papéis subalternos — o que revelou sobre a estrutura racial da sociedade.
        </p>
        <p>
          O protocolo de leitura sociológica de uma imagem: (1) <strong>quem está representado?</strong>
          (raça, gênero, classe, faixa etária — e quem está ausente?); (2) <strong>que papel ocupa</strong>
          na imagem? (ativo/passivo, protagonista/figurante, poderoso/vulnerável); (3) <strong>que emoção</strong>
          a imagem busca provocar e por quê?; (4) <strong>para quem</strong> a imagem foi produzida (público-alvo,
          contexto de veiculação); (5) que <strong>fenômeno social</strong> essa representação naturaliza
          ou questiona?
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📸</span>
            <h3>Fotografia documental</h3>
            <p>Denúncia e testemunho. Sebastião Salgado (Serra Pelada, Êxodo), Evandro Teixeira (repressão, favelas). Pergunte: qual injustiça a foto torna visível?</p>
          </div>
          <div className="lesson-card">
            <span>📺</span>
            <h3>Publicidade</h3>
            <p>Revela estereótipos e normas sociais. Quem aparece? Em que papel? A ausência de pessoas negras em publicidade de luxo revela hierarquia racial implícita.</p>
          </div>
          <div className="lesson-card">
            <span>🎬</span>
            <h3>Frame de filme / série</h3>
            <p>O ENEM usa cenas ou pôsteres para questionar representações de gênero, classe e raça no cinema. Analise como poder e vulnerabilidade são distribuídos visualmente.</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Arte e pintura histórica</h3>
            <p>Pinturas coloniais e acadêmicas revelam visões de mundo de seu tempo. "O Derrubador Brasileiro" (Debret) vs. retratos indígenas — o olhar europeu sobre o "outro".</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Simulado Comentado</span>
        <h2>9. Prática Simulada: 3 Textos de Apoio Comentados</h2>
        <p>
          A melhor forma de dominar a leitura de textos de apoio é praticá-la com análise detalhada.
          A seguir, três modelos de texto de apoio do tipo ENEM com análise completa de cada um.
        </p>

        <div className="lesson-highlight">
          <h3>Texto 1 — Fragmento teórico (Durkheim)</h3>
          <p>
            <strong>Texto:</strong> "O crime não se observa apenas na maioria das sociedades desta ou
            daquela espécie, mas em todas as sociedades de todos os tipos. Não há nenhuma em que não
            haja criminalidade. Ela muda de forma; os atos assim qualificados não são em todo lugar os
            mesmos; mas em todo lugar e sempre existiram homens que se conduziam de forma a atrair sobre
            si a repressão penal." (Durkheim, As Regras do Método Sociológico)
            <br /><br />
            <strong>O que o texto diz:</strong> O crime é universal e presente em todas as sociedades —
            não é uma patologia social, mas um fenômeno normal.<br />
            <strong>Conceito evocado:</strong> Fato social; função social do crime (Durkheim argumenta
            que o crime tem função: ao ser punido, reafirma a consciência coletiva e os limites morais
            da sociedade).<br />
            <strong>Armadilha frequente:</strong> Alternativa que diz "Durkheim defende o crime como
            positivo" — errado: ele o considera normal (estatisticamente inevitável), não positivo moralmente.
            Outra armadilha: misturar com Marx (crime como resultado da exploração capitalista) — o texto
            não menciona classes ou economia.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Texto 2 — Dado estatístico (IBGE)</h3>
          <p>
            <strong>Texto:</strong> "Em 2022, a taxa de desemprego entre mulheres negras com ensino
            superior era de 12,3%, enquanto entre homens brancos com o mesmo nível de escolaridade
            era de 4,7%. A diferença persiste mesmo após controlar a variável escolaridade." (IBGE/PNAD 2022)
            <br /><br />
            <strong>O que o texto diz:</strong> Com a mesma escolaridade, mulheres negras têm mais
            que o dobro do desemprego de homens brancos — a escolaridade, sozinha, não explica a diferença.<br />
            <strong>Conceito evocado:</strong> Interseccionalidade (raça + gênero se combinam para produzir
            desvantagem acumulada); racismo estrutural; discriminação no mercado de trabalho.<br />
            <strong>Armadilha frequente:</strong> "O dado prova que mulheres negras são menos qualificadas"
            — eliminada, pois o texto controla a escolaridade. "O problema é apenas de gênero" — eliminada,
            pois homens negros também têm desemprego maior que homens brancos em outros dados.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Texto 3 — Charge (desigualdade)</h3>
          <p>
            <strong>Descrição:</strong> Charge mostra uma pirâmide. No topo, uma única pessoa de terno
            carrega um guarda-chuva dourado. Na base, centenas de pessoas sem proteção olham para cima
            enquanto a chuva cai. A legenda diz: "Distribuição de renda no Brasil."
            <br /><br />
            <strong>O que a charge diz:</strong> A riqueza está extremamente concentrada no topo,
            enquanto a maioria da população fica desprotegida da insegurança econômica.<br />
            <strong>Conceito evocado:</strong> Estratificação social; desigualdade (Coeficiente de Gini);
            pirâmide social; concentração de renda.<br />
            <strong>Recursos visuais:</strong> A pirâmide é a metáfora da hierarquia social. O guarda-chuva
            representa proteção (renda, patrimônio). A chuva representa os riscos sociais. A proporção
            (1 vs. centenas) exagera para evidenciar a desigualdade — hipérbole como recurso crítico.<br />
            <strong>Armadilha:</strong> "A charge defende que a riqueza deve ser abolida" — extrapola o
            que a imagem diz. Ela critica a concentração, não a existência de riqueza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Prova</span>
        <h2>10. Estratégia Completa para Ciências Humanas no ENEM</h2>
        <p>
          A prova de Ciências Humanas e suas Tecnologias tem <strong>45 questões</strong> e faz parte
          do segundo dia do ENEM, junto com Linguagens (45 questões) e Redação. O tempo total é de
          <strong>5h30</strong> para as 90 questões + redação. A gestão estratégica do tempo é tão
          importante quanto o domínio do conteúdo.
        </p>
        <p>
          Recomendação de ordem: comece pela redação (reserve 1h30), depois Linguagens (1h30) e por
          último Ciências Humanas (2h30 para 45 questões = ~3,3 min por questão). Questões com textos
          longos merecem até 5 min; questões de memorização direta devem ser resolvidas em 1-2 min.
          Deixe sempre 15 min no final para revisar marcações duvidosas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Estratégia de tempo no ENEM">
            <rect x={10} y={20} width={150} height={160} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={85} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Redação</text>
            <text x={85} y={65} textAnchor="middle" fontSize={11} fill="#78350f">1h30</text>
            <text x={85} y={83} textAnchor="middle" fontSize={10} fill="#78350f">Primeiro</text>
            <text x={85} y={98} textAnchor="middle" fontSize={10} fill="#78350f">Mente fresca</text>

            <rect x={175} y={20} width={150} height={160} rx={8} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={250} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Linguagens</text>
            <text x={250} y={65} textAnchor="middle" fontSize={11} fill="#1e40af">1h30</text>
            <text x={250} y={83} textAnchor="middle" fontSize={10} fill="#1e40af">45 questões</text>
            <text x={250} y={98} textAnchor="middle" fontSize={10} fill="#1e40af">~2 min/questão</text>

            <rect x={340} y={20} width={180} height={160} rx={8} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={430} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">C. Humanas</text>
            <text x={430} y={65} textAnchor="middle" fontSize={11} fill="#166534">2h30</text>
            <text x={430} y={83} textAnchor="middle" fontSize={10} fill="#166534">45 questões</text>
            <text x={430} y={98} textAnchor="middle" fontSize={10} fill="#166534">~3 min/questão</text>
            <text x={430} y={113} textAnchor="middle" fontSize={10} fill="#166534">Sociologia: ~10 questões</text>

            <rect x={535} y={20} width={130} height={160} rx={8} fill="#fce7f3" stroke="#db2777" strokeWidth={1.5} />
            <text x={600} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#831843">Revisão</text>
            <text x={600} y={65} textAnchor="middle" fontSize={11} fill="#9d174d">15 min</text>
            <text x={600} y={83} textAnchor="middle" fontSize={10} fill="#9d174d">Marcar dúvidas</text>
            <text x={600} y={98} textAnchor="middle" fontSize={10} fill="#9d174d">no caderno</text>

            <text x={340} y={195} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Total: 5h30 — distribua o tempo antes de começar</text>
          </svg>
          <figcaption>Distribuição recomendada de tempo no segundo dia do ENEM.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de questão</th>
                <th>Como identificar</th>
                <th>Estratégia específica</th>
                <th>Tempo médio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Texto teórico denso (clássicos)</td>
                <td>Fragmento de Marx, Durkheim, Weber, Foucault</td>
                <td>Leia devagar; identifique conceito-chave na 1ª leitura; elimine alternativas que atribuem a outro autor</td>
                <td>4–5 min</td>
              </tr>
              <tr>
                <td>Dado estatístico / gráfico</td>
                <td>Tabela, gráfico de barras, linha do tempo</td>
                <td>Leia título e legenda antes das alternativas; não extrapole além do dado; cuidado com correlação ≠ causalidade</td>
                <td>3–4 min</td>
              </tr>
              <tr>
                <td>Charge / imagem</td>
                <td>Ilustração com legenda ou sem</td>
                <td>Identifique personagens e objeto central; localize a crítica; traduza para conceito sociológico</td>
                <td>2–3 min</td>
              </tr>
              <tr>
                <td>Texto legislativo / jurídico</td>
                <td>Fragmento de lei, artigo constitucional</td>
                <td>Identifique o direito e o sujeito; relacione ao contexto histórico; não leia como jurista — leia como sociólogo</td>
                <td>3 min</td>
              </tr>
              <tr>
                <td>Texto literário / musical</td>
                <td>Poema, letra de música, trecho de romance</td>
                <td>Identifique o fenômeno social por trás da arte; não interprete literalmente; qual injustiça ou estrutura social o texto critica?</td>
                <td>3–4 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A regra de ouro: o texto de apoio é a âncora</h3>
          <p>
            Em Sociologia, a resposta correta <strong>sempre</strong> pode ser sustentada pelo texto de
            apoio. Se uma alternativa parece certa pelo seu conhecimento geral, mas não se sustenta no
            texto, ela está errada. Se uma alternativa contradiz o texto (mesmo sendo verdadeira fora
            dele), está eliminada. O texto de apoio é a prova; o conhecimento geral é a ferramenta para
            entendê-lo — não para substituí-lo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Leitura de texto sociológico"
          statement={
            <p>
              "A vida social é constituída de representações. Cada grupo elabora representações de
              si mesmo e dos outros grupos, que orientam os comportamentos e as formas de relação
              social. Essas representações não são simples reflexos da realidade, mas construções
              coletivas que têm eficácia prática."
              <br /><br />
              O texto descreve um conceito próximo de qual perspectiva sociológica?
            </p>
          }
          options={[
            { letter: "A", text: <>O materialismo histórico de Marx, segundo o qual as representações são determinadas pela estrutura econômica.</> },
            { letter: "B", text: <>A abordagem construtivista e interacionista, que enfatiza como as representações coletivas constroem a realidade social.</>, correct: true },
            { letter: "C", text: <>O positivismo de Comte, que defende o estudo dos fatos sociais por métodos puramente quantitativos.</> },
            { letter: "D", text: <>A teoria da ação racional, que explica o comportamento social como resultado exclusivo de cálculos individuais de custo-benefício.</> },
            { letter: "E", text: <>O funcionalismo estrutural de Parsons, que analisa os sistemas sociais como organismos em equilíbrio.</> },
          ]}
          resolution={<p>O texto descreve "representações coletivas" que constroem a realidade social — conceito que remete tanto a Durkheim (representações coletivas) quanto ao construtivismo social (Berger e Luckmann: "a realidade é uma construção social"). A ênfase em "construções coletivas com eficácia prática" descarta o determinismo econômico marxista e o positivismo estrito.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Interpretação de gráfico"
          statement={
            <p>
              Um gráfico mostra que entre 2000 e 2020, o índice de Gini do Brasil caiu de 0,59 para
              0,53, enquanto a porcentagem de pessoas com ensino superior dobrou no mesmo período.
              <br /><br />
              Uma leitura sociologicamente correta desse dado afirma que:
            </p>
          }
          options={[
            { letter: "A", text: <>O aumento da escolaridade causou diretamente a redução da desigualdade no período, demonstrando que educação é a única variável relevante para a mobilidade social.</> },
            { letter: "B", text: <>Os dois indicadores caíram simultaneamente, o que prova que educação e igualdade são inversamente proporcionais no Brasil.</> },
            { letter: "C", text: <>Houve correlação entre queda do Gini e expansão do ensino superior no período, mas não é possível afirmar causalidade direta ou exclusiva entre as variáveis apenas com esses dados.</>, correct: true },
            { letter: "D", text: <>A queda do Gini foi tão intensa que o Brasil se tornou uma das economias mais igualitárias do mundo no período analisado.</> },
            { letter: "E", text: <>O gráfico demonstra que políticas de expansão universitária são suficientes para eliminar a desigualdade social, independentemente de outras políticas redistributivas.</> },
          ]}
          resolution={<p>A armadilha clássica: correlação não implica causalidade. Ambos os indicadores mudaram no período, mas outros fatores também atuaram (Bolsa Família, salário mínimo real crescente, expansão do mercado formal). Afirmar causalidade direta exclusiva extrapola o que os dados mostram — e alternativas absolutas como "única variável" ou "suficiente" são sinais de resposta errada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Análise de charge"
          statement={
            <p>
              Uma charge mostra uma longa fila de pessoas aguardando atendimento médico em um posto
              de saúde precário. No centro da charge, uma placa enferrujada diz "Universalidade do SUS".
              Ao lado, um hospital particular brilhante com pouquíssimas pessoas na entrada.
              <br /><br />
              A charge critica principalmente:
            </p>
          }
          options={[
            { letter: "A", text: <>A ineficiência administrativa de todos os sistemas de saúde, tanto públicos quanto privados, no Brasil.</> },
            { letter: "B", text: <>A contradição entre o princípio constitucional de universalidade do SUS e a desigualdade real no acesso à saúde segundo renda.</>, correct: true },
            { letter: "C", text: <>A preferência cultural dos brasileiros por atendimento médico em grupo, em detrimento do atendimento individualizado.</> },
            { letter: "D", text: <>A superioridade técnica do sistema de saúde privado, que deveria substituir integralmente o SUS.</> },
            { letter: "E", text: <>A falta de profissionais médicos no Brasil, que gera filas independentemente do modelo de sistema de saúde adotado.</> },
          ]}
          resolution={<p>A charge usa o contraste visual para criticar a distância entre o princípio (universalidade do SUS inscrita na Constituição) e a prática (superlotação no sistema público × conforto no privado). A placa enferrujada simboliza o ideal desgastado pela realidade. Esse é um recurso típico da crítica sociológica: mostrar a contradição entre o formal e o real.</p>}
        />

        <Exercise
          level="Avançado"
          title="Armadilha conceitual"
          statement={
            <p>
              "Para Weber, a burocracia moderna é o instrumento mais eficiente de dominação racional-legal
              já desenvolvido pela humanidade. Ela opera com base em regras impessoais, hierarquia clara
              e especialização técnica dos funcionários."
              <br /><br />
              Uma alternativa incorreta sobre esse texto afirmaria que:
            </p>
          }
          options={[
            { letter: "A", text: <>A burocracia weberiana é caracterizada pela impessoalidade nas relações entre funcionários e administrados.</> },
            { letter: "B", text: <>Weber analisa a burocracia como forma de dominação racional-legal, distinta da dominação tradicional e carismática.</> },
            { letter: "C", text: <>A burocracia representa, para Weber, uma forma alienante de organização do trabalho, resultado direto da exploração capitalista do proletariado.</>, correct: true },
            { letter: "D", text: <>A especialização técnica dos funcionários é uma das características centrais da burocracia descrita por Weber.</> },
            { letter: "E", text: <>A hierarquia clara de cargos e funções é um traço fundamental da burocracia weberiana.</> },
          ]}
          resolution={<p>A armadilha é misturar Weber com Marx. "Alienação" é um conceito central de Marx, não de Weber. Weber analisa a burocracia com certa ambivalência — reconhece sua eficiência racional, mas também alerta para a "jaula de ferro" da racionalização excessiva. Mas nunca usa o conceito marxista de alienação nem conecta a burocracia diretamente à exploração do proletariado.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Estratégia de prova"
          statement={
            <p>
              Um estudante lê o seguinte texto de apoio no ENEM:<br /><br />
              "As normas sociais não são apenas regras externas impostas ao indivíduo: elas são
              interiorizadas durante o processo de socialização, tornando-se parte da consciência
              individual. O desvio dessas normas gera sanções sociais que reforçam sua validade."
              <br /><br />
              O enunciado pergunta: qual conceito sociológico o texto ilustra?<br /><br />
              O estudante deve escolher entre:
            </p>
          }
          options={[
            { letter: "A", text: <>Alienação marxista — a consciência do trabalhador é formada pelas condições materiais de produção, tornando-o incapaz de perceber sua exploração.</> },
            { letter: "B", text: <>Ação social weberiana — o indivíduo orienta sua ação em relação ao outro com base em sentidos subjetivamente visados.</> },
            { letter: "C", text: <>Fato social durkheimiano — maneiras de agir, pensar e sentir externas ao indivíduo e dotadas de poder coercitivo, interiorizadas pela socialização.</>, correct: true },
            { letter: "D", text: <>Dominação carismática weberiana — poder exercido por qualidades pessoais extraordinárias reconhecidas pelos seguidores.</> },
            { letter: "E", text: <>Mais-valia marxista — a diferença entre o valor produzido pelo trabalhador e o salário que recebe, apropriada pelo capitalista.</> },
          ]}
          resolution={<p>O texto descreve precisamente o conceito de fato social de Durkheim: externo ao indivíduo, coercitivo (sanções reforçam normas), e interiorizado pela socialização. As palavras "normas externas interiorizadas" e "sanções que reforçam sua validade" são marcas claras do vocabulário durkheimiano. As alternativas sobre Marx (alienação, mais-valia) e Weber (ação social, dominação carismática) não correspondem ao conteúdo do texto.</p>}
        />
      </section>
    </article>
  );
}
