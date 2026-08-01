"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 18</span>
          <h1>Pobreza, Exclusão Social e Vulnerabilidade</h1>
          <p>
            Mais de 33 milhões de brasileiros não tinham o que comer em 2022. A pobreza
            não é apenas falta de dinheiro — é negação de direitos, de dignidade e de
            participação social. Compreendê-la exige ir além dos números.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos</span>
        <h2>1. O Que É Pobreza? Absoluta vs. Relativa</h2>
        <p>
          A Sociologia distingue duas formas principais de conceber a pobreza:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📉</span>
            <h3>Pobreza absoluta</h3>
            <p>
              Incapacidade de satisfazer necessidades básicas de sobrevivência: alimentação,
              abrigo, vestuário. O Banco Mundial define a linha de extrema pobreza em{" "}
              <strong>US$ 2,15 por pessoa/dia</strong> (valor atualizado em 2022).
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Pobreza relativa</h3>
            <p>
              Situação em que um indivíduo ou grupo tem renda e condições de vida
              significativamente abaixo do padrão médio da sociedade em que vive.
              Varia de país para país — alguém considerado pobre na Noruega pode
              estar acima da linha de pobreza absoluta do Banco Mundial.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Definição</th>
                <th>Brasil (2022, aprox.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extrema pobreza</td>
                <td>Renda abaixo de R$ 218/mês por pessoa</td>
                <td>~15,6% da população (≈ 33 milhões)</td>
              </tr>
              <tr>
                <td>Pobreza</td>
                <td>Renda abaixo de R$ 436/mês por pessoa</td>
                <td>~29% da população (≈ 62 milhões)</td>
              </tr>
              <tr>
                <td>Insegurança alimentar grave</td>
                <td>Situação de fome (sem alimentação adequada)</td>
                <td>≈ 14% dos domicílios (2022)</td>
              </tr>
              <tr>
                <td>Sem teto / sem moradia</td>
                <td>População em situação de rua</td>
                <td>≈ 281 mil (Censo 2022)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exclusão Social</span>
        <h2>2. Exclusão Social: Uma Questão Multidimensional</h2>
        <p>
          O conceito de <strong>exclusão social</strong> surgiu na França nos anos 1970
          (Robert Castel) para descrever grupos que não estavam apenas sem renda, mas
          marginalizados de múltiplas esferas da vida social: trabalho, moradia, saúde,
          educação e participação política.
        </p>
        <p>
          A exclusão é um processo, não um estado fixo. Castel identificou uma{" "}
          <em>zona de integração</em> (trabalho estável + vínculos sociais fortes),
          uma <em>zona de vulnerabilidade</em> (trabalho precário + relações sociais
          fragilizadas) e uma <em>zona de exclusão</em> (sem trabalho + desafiliação
          social). Pessoas transitam entre essas zonas ao longo da vida.
        </p>

        <div className="lesson-highlight">
          <h3>Pobreza multidimensional: o Índice IPM</h3>
          <p>
            O <strong>Índice de Pobreza Multidimensional</strong> (IPM), desenvolvido
            pela Oxford e adotado pelo PNUD, mede privações em três dimensões —
            saúde, educação e padrão de vida — em dez indicadores. Uma pessoa é
            "multidimensionalmente pobre" se sofre privações em pelo menos 33% desses
            indicadores. No Brasil, o IPM identifica mais pobres do que a linha de
            renda isolada.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 200" width="420" height="200" aria-label="Dimensões da exclusão social">
            <circle cx="210" cy="100" r="80" fill="#e5e7eb" />
            <circle cx="210" cy="100" r="80" fill="none" stroke="#9ca3af" strokeWidth="1" />
            {/* Segmentos coloridos */}
            <path d="M210 100 L210 22 A78 78 0 0 1 278 139 Z" fill="#0ea5e9" opacity="0.7" />
            <path d="M210 100 L278 139 A78 78 0 0 1 143 168 Z" fill="#16a34a" opacity="0.7" />
            <path d="M210 100 L143 168 A78 78 0 0 1 143 32 Z" fill="#f59e0b" opacity="0.7" />
            <path d="M210 100 L143 32 A78 78 0 0 1 210 22 Z" fill="#a855f7" opacity="0.7" />
            <circle cx="210" cy="100" r="28" fill="white" />
            <text x="210" y="97" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1f2937">Exclusão</text>
            <text x="210" y="109" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1f2937">Social</text>
            {/* Labels externos */}
            <text x="256" y="60" fontSize="11" fontWeight="600" fill="#0369a1">Trabalho</text>
            <text x="240" y="168" fontSize="11" fontWeight="600" fill="#15803d">Saúde</text>
            <text x="118" y="165" fontSize="11" fontWeight="600" fill="#b45309">Moradia</text>
            <text x="120" y="50" fontSize="11" fontWeight="600" fill="#7e22ce">Educação</text>
          </svg>
          <figcaption>A exclusão social é multidimensional: abrange trabalho, saúde, moradia, educação e participação política simultaneamente.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vulnerabilidade</span>
        <h2>3. Grupos em Situação de Vulnerabilidade Social</h2>
        <p>
          Vulnerabilidade social é a exposição a riscos combinada com a baixa capacidade
          de resposta a esses riscos. Certos grupos são estruturalmente mais vulneráveis
          em função de discriminações históricas e acesso desigual a recursos:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Principal fator de vulnerabilidade</th>
                <th>Dado relevante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crianças e adolescentes</td>
                <td>Trabalho infantil, violência, evasão escolar</td>
                <td>≈ 1,8 mi em trabalho infantil no Brasil (IBGE 2022)</td>
              </tr>
              <tr>
                <td>Idosos</td>
                <td>Isolamento, violência doméstica, precariedade da renda</td>
                <td>27% dos idosos brasileiros sobrevivem com 1 salário mínimo</td>
              </tr>
              <tr>
                <td>Mulheres (especialmente chefes de família)</td>
                <td>Feminização da pobreza, dupla jornada, desigualdade salarial</td>
                <td>Mulheres ganham ~22% menos que homens na mesma função</td>
              </tr>
              <tr>
                <td>Pessoas negras</td>
                <td>Racismo estrutural, segregação espacial</td>
                <td>75% das pessoas em extrema pobreza são pretas ou pardas</td>
              </tr>
              <tr>
                <td>Pessoas com deficiência</td>
                <td>Barreiras de acessibilidade, discriminação no mercado</td>
                <td>Taxa de desemprego 2× maior que a média geral</td>
              </tr>
              <tr>
                <td>Pessoas LGBTQIA+</td>
                <td>Violência, discriminação, expulsão familiar</td>
                <td>40% da população em situação de rua é LGBTQIA+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Feminização da pobreza</h3>
          <p>
            A <strong>feminização da pobreza</strong> é o fenômeno pelo qual as mulheres —
            especialmente mães solteiras, mulheres negras e idosas — constituem proporção
            crescente dos grupos mais pobres. No Brasil, 68% dos domicílios em extrema
            pobreza chefiados por mulheres não têm renda do trabalho. A dupla jornada,
            o cuidado não remunerado e as desigualdades salariais de gênero são seus
            principais determinantes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Políticas Sociais</span>
        <h2>4. Políticas Sociais no Brasil: SUS, SUAS, Bolsa Família e Habitação</h2>
        <p>
          O Brasil construiu, especialmente após a Constituição de 1988, um conjunto
          de políticas sociais destinadas a combater a pobreza e proteger grupos
          vulneráveis:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏥</span>
            <h3>SUS (1988)</h3>
            <p>Sistema Único de Saúde: saúde como direito universal. Cobre 75% da população. É o maior sistema de saúde pública do mundo em cobertura universal.</p>
          </div>
          <div className="lesson-card">
            <span>🤝</span>
            <h3>SUAS (2005)</h3>
            <p>Sistema Único de Assistência Social: organiza os serviços socioassistenciais nos CRAS (proteção básica) e CREAS (proteção especial) em todo o país.</p>
          </div>
          <div className="lesson-card">
            <span>💵</span>
            <h3>Bolsa Família / Auxílio Brasil</h3>
            <p>Programa de transferência condicionada de renda criado em 2003. Com condicionalidades de saúde e educação, chegou a 21 milhões de famílias em 2023.</p>
          </div>
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Minha Casa, Minha Vida</h3>
            <p>Programa habitacional criado em 2009, voltado para famílias de baixa renda. Construiu mais de 5,5 milhões de unidades até 2023, com retomada em 2023.</p>
          </div>
        </div>

        <p>
          Apesar dessas políticas, o Brasil ainda não eliminou a pobreza. A Sociologia
          aponta que políticas assistenciais são necessárias mas insuficientes: sem
          transformações estruturais no mercado de trabalho, na tributação e no acesso
          à educação de qualidade, a reprodução da pobreza permanece.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gini e Desigualdade</span>
        <h2>5. Desigualdade e Coeficiente de Gini no Brasil</h2>
        <p>
          O <strong>Coeficiente de Gini</strong> é o principal indicador de desigualdade de
          renda utilizado mundialmente. Desenvolvido pelo estatístico italiano Corrado Gini (1912),
          varia de <strong>0</strong> (perfeita igualdade — todos com a mesma renda) a
          <strong> 1</strong> (desigualdade máxima — toda a renda concentrada em uma pessoa).
          A <strong>Curva de Lorenz</strong>, representada graficamente, compara a distribuição
          real da renda com uma distribuição perfeitamente igualitária: quanto mais afastada da
          diagonal de 45° (igualdade perfeita), maior a desigualdade.
        </p>
        <p>
          O Brasil é historicamente um dos países mais desiguais do mundo. Em 2022, o Gini
          brasileiro era de aproximadamente <strong>0,518</strong> — entre os mais altos do planeta.
          Houve melhora significativa entre 2002 e 2014 (queda de 0,59 para 0,52), impulsionada
          pelo Bolsa Família, aumento real do salário mínimo e expansão do emprego formal.
          Após 2015, a tendência se reverteu, com crise econômica, desemprego e pandemia
          ampliando novamente a desigualdade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 300" width="400" height="300" aria-label="Curva de Lorenz simplificada para o Brasil">
            <line x1={50} y1={250} x2={350} y2={250} stroke="#9ca3af" strokeWidth={1} />
            <line x1={50} y1={250} x2={50} y2={20} stroke="#9ca3af" strokeWidth={1} />
            <line x1={50} y1={250} x2={350} y2={20} stroke="#16a34a" strokeWidth={1.5} strokeDasharray="6 3" />
            <text x={210} y={108} fontSize={11} fill="#15803d" fontStyle="italic">Igualdade perfeita</text>
            <path d="M50 250 Q150 240 350 20" stroke="#ef4444" fill="none" strokeWidth={2} />
            <text x={170} y={210} fontSize={11} fill="#b91c1c" fontWeight={700}>Curva real BR</text>
            <text x={55} y={268} fontSize={10} fill="#374151">0%</text>
            <text x={335} y={268} fontSize={10} fill="#374151">100%</text>
            <text x={10} y={25} fontSize={10} fill="#374151">100%</text>
            <text x={10} y={255} fontSize={10} fill="#374151">0%</text>
            <text x={170} y={290} fontSize={11} fill="#6b7280">% acumulada da população</text>
          </svg>
          <figcaption>Curva de Lorenz: a área entre a curva real e a diagonal representa a desigualdade (Gini).</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ano</th>
                <th>Gini Brasil</th>
                <th>Contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2002</td><td>0,593</td><td>Início dos governos Lula; desigualdade histórica elevada</td></tr>
              <tr><td>2009</td><td>0,543</td><td>Expansão do Bolsa Família e formalização do emprego</td></tr>
              <tr><td>2014</td><td>0,518</td><td>Menor nível histórico registrado pelo IBGE até então</td></tr>
              <tr><td>2017</td><td>0,539</td><td>Crise econômica, desemprego, Reforma Trabalhista</td></tr>
              <tr><td>2022</td><td>0,518</td><td>Recuperação pós-pandemia; retomada do Bolsa Família</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mobilidade Social</span>
        <h2>6. Trabalho, Renda e Mobilidade Social</h2>
        <p>
          <strong>Mobilidade social</strong> é o movimento de indivíduos ou grupos entre
          posições diferentes na hierarquia social. A mobilidade <strong>ascendente</strong>
          significa subir de classe (filhos de trabalhadores que se tornam profissionais de
          nível superior); a <strong>descendente</strong>, perder posição (profissionais que
          caem na informalidade); a <strong>horizontal</strong>, mudar de ocupação sem alterar
          o status social (troca entre posições equivalentes). A mobilidade pode ser
          <em> intergeracional</em> (comparando pais e filhos) ou <em>intrageracional</em>
          (mudanças na vida de uma mesma pessoa).
        </p>
        <p>
          No Brasil, a mobilidade social é estruturalmente limitada. Pesquisas do IPEA e da
          FGV mostram que o <strong>ponto de partida</strong> (renda e escolaridade dos pais)
          explica cerca de 60% da renda dos filhos — índice de persistência entre os mais
          altos do mundo. Isso indica que o "Brasil da meritocracia" é, em grande medida,
          um mito: raça, gênero, região e origem familiar pesam mais do que esforço individual
          na determinação das chances de vida. A expansão do ensino superior nos anos 2000
          (PROUNI, REUNI, FIES) gerou mobilidade ascendente real para parcelas da classe
          média baixa, mas as desigualdades de ponto de partida persistem.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Determinante</th>
                <th>Impacto na mobilidade</th>
                <th>Dado illustrativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Escolaridade</strong></td>
                <td>Alta correlação — diploma superior aumenta renda em ~200% sobre ensino médio</td>
                <td>Apenas 21% dos brasileiros têm ensino superior (IBGE, 2022)</td>
              </tr>
              <tr>
                <td><strong>Raça</strong></td>
                <td>Negros ganham ~40% menos que brancos com mesma escolaridade</td>
                <td>75% dos extremamente pobres são pretos ou pardos</td>
              </tr>
              <tr>
                <td><strong>Gênero</strong></td>
                <td>Mulheres ganham ~22% menos que homens em funções equivalentes</td>
                <td>Mulheres têm mais escolaridade média, mas menos renda</td>
              </tr>
              <tr>
                <td><strong>Região</strong></td>
                <td>Norte e Nordeste têm Gini 15-20% acima do Sul e Sudeste</td>
                <td>PIB per capita do DF é 4× o do Maranhão (IBGE, 2022)</td>
              </tr>
              <tr>
                <td><strong>Renda familiar</strong></td>
                <td>Filhos de ricos têm acesso a escolas, cursinhos e redes que filhos de pobres não têm</td>
                <td>60% da renda dos filhos é explicada pela renda dos pais (IPEA)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorias da Pobreza</span>
        <h2>7. A Sociologia da Pobreza: Marx, Weber e Bourdieu</h2>
        <p>
          A pobreza não é um fenômeno natural ou resultado de falhas individuais — é um
          produto de estruturas sociais. Os três grandes clássicos da Sociologia oferecem
          explicações distintas e complementares para a persistência da pobreza, cada um
          enfatizando diferentes mecanismos de produção e reprodução da desigualdade.
        </p>
        <p>
          Para <strong>Marx</strong>, a pobreza é estrutural ao capitalismo: a mais-valia
          (a diferença entre o valor produzido pelo trabalhador e o salário pago) é a
          fonte do lucro capitalista e, simultaneamente, a causa da pauperização do
          proletariado. A pobreza não é acidente — é condição necessária ao sistema
          ("exército industrial de reserva"). Para <strong>Weber</strong>, a desigualdade
          não se reduz à classe econômica: também envolve <em>status</em> (prestígio social)
          e <em>partido</em> (poder político), dimensões autônomas que se entrecruzam com
          a renda. Para <strong>Bourdieu</strong>, a pobreza é reproduzida pela desigualdade
          no acesso a diferentes formas de capital: cultural, social e econômico.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Causa principal da pobreza</th>
                <th>Mecanismo central</th>
                <th>Solução proposta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Karl Marx</strong></td>
                <td>Exploração capitalista — extração de mais-valia</td>
                <td>Apropriação do excedente pelos donos dos meios de produção</td>
                <td>Revolução e socialização dos meios de produção</td>
              </tr>
              <tr>
                <td><strong>Max Weber</strong></td>
                <td>Desigualdade multidimensional (classe + status + partido)</td>
                <td>Estratificação por prestígio social, além da renda</td>
                <td>Reforma institucional; não propôs revolução</td>
              </tr>
              <tr>
                <td><strong>Pierre Bourdieu</strong></td>
                <td>Reprodução do capital cultural, social e econômico entre gerações</td>
                <td>Sistema escolar valida capital cultural das classes dominantes como "mérito"</td>
                <td>Democratização do acesso ao capital cultural; políticas afirmativas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Segregação Urbana</span>
        <h2>8. Urbanização, Favelas e Segregação Socioespacial</h2>
        <p>
          O Brasil urbanizou-se de forma acelerada e desigual. Em 1950, apenas 36% da população
          vivia em cidades; em 2022, esse índice chegou a 87% (IBGE). A industrialização
          concentrada no Sudeste atraiu milhões de migrantes nordestinos e rurais, que não
          encontraram moradia formal acessível e ocuparam periferias e encostas, formando as
          <strong> favelas</strong>. A favela não é "anomalia" — é a solução popular criativa
          para a exclusão do mercado formal de moradia em cidades que cresceram sem planejamento
          inclusivo.
        </p>
        <p>
          A <strong>segregação socioespacial</strong> é o processo pelo qual as classes sociais
          ocupam espaços urbanos distintos: ricos em bairros com boa infraestrutura, serviços
          e segurança; pobres em periferias com transporte precário, saneamento deficiente e
          violência. A <strong>gentrificação</strong> é um processo inverso que expulsa os
          pobres de áreas centrais que se valorizam (o bairro do Pinheiro em SP, a Lapa no RJ):
          os pobres são deslocados para periferias ainda mais distantes.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏘️</span>
            <h3>Favela</h3>
            <p>Ocupação informal de terra urbana; solução habitacional popular para excluídos do mercado formal. Rocinha (RJ) tem ~70 mil habitantes — maior favela do Brasil.</p>
          </div>
          <div className="lesson-card">
            <span>🌇</span>
            <h3>Gentrificação</h3>
            <p>Valorização de bairros populares que expulsa moradores originais. Criativa destruição: cafés e co-workings onde havia cortiços. Viola o direito à cidade (Henri Lefebvre).</p>
          </div>
          <div className="lesson-card">
            <span>🚌</span>
            <h3>Segregação de mobilidade</h3>
            <p>Trabalhadores pobres gastam 2-4h/dia em transporte coletivo precário; ricos em carros e bairros próximos ao trabalho. O espaço urbano amplifica desigualdades de tempo e renda.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Déficit de saneamento</h3>
            <p>35 milhões de brasileiros sem água potável; 100 milhões sem esgoto tratado (SNIS, 2022). Concentrado em periferias e Norte/Nordeste — desigualdade ambiental urbana.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Déficit habitacional</h3>
          <p>
            O déficit habitacional brasileiro era de aproximadamente <strong>7,9 milhões de
            moradias</strong> em 2022 (FGV), concentrado 96% nas famílias com renda até
            3 salários mínimos. Isso demonstra que o mercado privado de moradia é incapaz
            de atender a demanda de baixa renda — requerendo políticas públicas como o
            programa Minha Casa, Minha Vida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fome e Direito Alimentar</span>
        <h2>9. Fome, Segurança Alimentar e Programa Fome Zero</h2>
        <p>
          A <strong>segurança alimentar</strong>, conforme definida pela FAO (Organização
          das Nações Unidas para Agricultura e Alimentação), existe quando "todas as pessoas,
          em todos os momentos, têm acesso físico, social e econômico a alimentos suficientes,
          seguros e nutritivos que atendam suas necessidades alimentares e preferências alimentares
          para uma vida ativa e saudável." O seu oposto — a insegurança alimentar — tem quatro
          estágios progressivos de gravidade.
        </p>
        <p>
          O <strong>Programa Fome Zero</strong>, lançado pelo governo Lula em 2003, foi o
          maior programa de combate à fome da história brasileira. Sua estratégia era
          multidimensional: transferência de renda (Bolsa Família, fusão de programas
          anteriores), ampliação do acesso a alimentos (Restaurantes Populares, Banco
          de Alimentos, PAA — Programa de Aquisição de Alimentos), e geração de renda.
          Entre 2003 e 2014, o Brasil foi retirado do Mapa da Fome da ONU — conquista
          histórica revertida após 2016 com a crise econômica e os cortes fiscais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estágio</th>
                <th>Definição</th>
                <th>Manifestação</th>
                <th>Brasil (2022, aprox.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Segurança alimentar</strong></td>
                <td>Acesso pleno a alimentos adequados</td>
                <td>Alimentação regular e nutritiva, sem restrições</td>
                <td>~58% dos domicílios</td>
              </tr>
              <tr>
                <td><strong>Insegurança leve</strong></td>
                <td>Preocupação com acesso futuro</td>
                <td>Restrição de variedade; receio de ficar sem comida</td>
                <td>~15% dos domicílios</td>
              </tr>
              <tr>
                <td><strong>Insegurança moderada</strong></td>
                <td>Redução quantitativa de alimentos</td>
                <td>Adultos pulam refeições para que crianças comam</td>
                <td>~13% dos domicílios</td>
              </tr>
              <tr>
                <td><strong>Insegurança grave (fome)</strong></td>
                <td>Privação total ou quase total de alimentos</td>
                <td>Dias sem comer; crianças passam fome</td>
                <td>~14% dos domicílios (~33 mi de pessoas)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Exclusão e Pobreza no ENEM: Conceitos, Dados e Questões</h2>
        <p>
          Pobreza, exclusão e desigualdade são temas transversais no ENEM, aparecendo em
          questões de Sociologia, Geografia, História e Filosofia. As questões de Sociologia
          geralmente partem de dados estatísticos, charges ou textos sobre a realidade
          brasileira e pedem que o estudante articule o fenômeno com um conceito teórico.
          O erro mais comum é usar os termos de forma intercambiável — cada um tem definição
          técnica precisa.
        </p>
        <p>
          O conceito de <strong>feminização da pobreza</strong> é especialmente frequente
          nas questões recentes: mulheres negras, mães solteiras e idosas concentram
          desproporcionalmente a pobreza, e isso é resultado de estruturas (desigualdade
          salarial, trabalho doméstico não remunerado, ausência de creches) — não de
          escolhas individuais. A <strong>interseccionalidade</strong> (raça + gênero + classe)
          é o conceito-chave para explicar esses dados ao ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Dado-chave</th>
                <th>Autor/Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pobreza absoluta</strong></td>
                <td>Incapacidade de satisfazer necessidades básicas de sobrevivência</td>
                <td>Linha: R$ 218/mês por pessoa; 15,6% dos brasileiros</td>
                <td>Banco Mundial</td>
              </tr>
              <tr>
                <td><strong>Pobreza relativa</strong></td>
                <td>Renda significativamente abaixo do padrão médio da sociedade</td>
                <td>Varia conforme o país; no Brasil: abaixo de R$ 436/mês</td>
                <td>IBGE / UE</td>
              </tr>
              <tr>
                <td><strong>Exclusão social</strong></td>
                <td>Marginalização de múltiplas esferas: trabalho, moradia, saúde, educação</td>
                <td>Zonas de integração, vulnerabilidade e exclusão</td>
                <td>Robert Castel</td>
              </tr>
              <tr>
                <td><strong>Pobreza multidimensional</strong></td>
                <td>Privações em saúde, educação e padrão de vida simultaneamente</td>
                <td>IPM identifica mais pobres do que a linha de renda</td>
                <td>Oxford / PNUD</td>
              </tr>
              <tr>
                <td><strong>Feminização da pobreza</strong></td>
                <td>Mulheres constituem proporção crescente dos mais pobres</td>
                <td>68% dos domicílios em extrema pobreza chefiados por mulheres sem renda do trabalho</td>
                <td>IBGE / ONU Mulheres</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica de prova: pobreza não é destino, é estrutura</h3>
          <p>
            O ENEM rejeita explicações individualistas da pobreza ("os pobres são pobres porque
            não se esforçam"). A perspectiva sociológica que a prova adota é estrutural: a pobreza
            é produto de relações sociais, históricas e institucionais — exploração do trabalho
            (Marx), ausência de capital cultural (Bourdieu), ruptura de vínculos sociais (Castel)
            e discriminação racial e de gênero. Alternativas que culpam o indivíduo estão quase
            sempre erradas no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Pobreza absoluta vs. relativa"
          statement={<p>Uma família que não tem renda suficiente para comprar alimentos básicos de sobrevivência está em situação de:</p>}
          options={[
            { letter: "A", text: <>Pobreza relativa, pois a situação é comparada com o padrão de vida nacional.</> },
            { letter: "B", text: <>Vulnerabilidade social secundária, pois ainda possui moradia.</> },
            { letter: "C", text: <>Pobreza absoluta, pois não consegue satisfazer necessidades básicas de subsistência.</>, correct: true },
            { letter: "D", text: <>Exclusão social institucional, categoria definida pela ONU.</> },
            { letter: "E", text: <>Desigualdade relativa, pois existem pessoas em situação ainda pior.</> },
          ]}
          resolution={<p>Pobreza absoluta é a incapacidade de satisfazer necessidades básicas de sobrevivência (alimentação, abrigo). A linha de extrema pobreza do Banco Mundial é US$ 2,15/dia. A pobreza relativa, por sua vez, é calculada em relação ao padrão médio de vida de cada sociedade.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Exclusão social multidimensional"
          statement={<p>O sociólogo Robert Castel desenvolveu o conceito de exclusão social como um processo que não se limita à falta de renda. Para Castel, a exclusão é resultado principalmente de:</p>}
          options={[
            { letter: "A", text: <>Uma opção individual de quem prefere não trabalhar ou se integrar à sociedade.</> },
            { letter: "B", text: <>A combinação de desvinculação do trabalho formal e ruptura dos vínculos sociais e familiares.</>, correct: true },
            { letter: "C", text: <>Fatores genéticos e biológicos que predispõem certos grupos ao fracasso social.</> },
            { letter: "D", text: <>Exclusivamente a discriminação racial, que impede minorias de acessar o mercado de trabalho.</> },
            { letter: "E", text: <>O baixo nível de escolaridade, sendo a educação o único fator determinante da exclusão.</> },
          ]}
          resolution={<p>Para Castel, a exclusão social resulta de uma dupla ruptura: do vínculo com o trabalho (desemprego, precarização) e dos vínculos sociais e comunitários (família, vizinhança, associações). A combinação dessas duas rupturas produz "desafiliação" — estado de isolamento e invisibilidade social.</p>}
        />

        <Exercise
          level="Intermediário"
          title="Feminização da pobreza"
          statement={<p>O fenômeno da "feminização da pobreza" refere-se ao processo pelo qual:</p>}
          options={[
            { letter: "A", text: <>As mulheres são naturalmente mais propensas à pobreza por razões biológicas.</> },
            { letter: "B", text: <>Os programas sociais são exclusivamente dirigidos a mulheres, excluindo os homens pobres.</> },
            { letter: "C", text: <>As mulheres — especialmente negras, mães solteiras e idosas — constituem proporção crescente dos grupos mais pobres, em função de desigualdades estruturais de gênero e raça.</>, correct: true },
            { letter: "D", text: <>A pobreza é um problema exclusivamente feminino nas sociedades contemporâneas.</> },
            { letter: "E", text: <>As mulheres ricas são cada vez mais raras, enquanto o enriquecimento é um fenômeno masculino.</> },
          ]}
          resolution={<p>A feminização da pobreza decorre de estruturas sociais desiguais: desigualdade salarial, dupla jornada de trabalho não remunerado, maior exposição à violência doméstica e abandono familiar. No Brasil, domicílios chefiados por mulheres negras têm as menores rendas médias.</p>}
        />

        <Exercise
          level="Avançado"
          title="SUS e direito à saúde"
          statement={
            <p>
              A Constituição Federal de 1988 estabeleceu a saúde como "<em>direito de todos
              e dever do Estado</em>", criando as bases para o SUS. Do ponto de vista
              sociológico, essa conquista representa:
            </p>
          }
          options={[
            { letter: "A", text: <>Uma privatização da saúde que beneficia apenas quem pode pagar por planos privados.</> },
            { letter: "B", text: <>A transformação da saúde de um serviço de mercado em um direito social universal, rompendo com a lógica contributiva anterior que excluía os mais pobres.</>, correct: true },
            { letter: "C", text: <>Uma medida assistencialista temporária sem impacto estrutural na redução da desigualdade.</> },
            { letter: "D", text: <>A substituição completa do setor privado de saúde pelo Estado.</> },
            { letter: "E", text: <>Um benefício exclusivo para trabalhadores formais com carteira assinada.</> },
          ]}
          resolution={<p>Antes do SUS, o acesso à saúde pública era restrito a trabalhadores com carteira assinada (INAMPS). A CF/88 universalizou o direito, tornando a saúde um direito social (Art. 196). Do ponto de vista sociológico, isso representou uma expansão da cidadania — o que T. H. Marshall chamaria de direitos sociais — reduzindo a exclusão dos mais pobres do sistema de saúde.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="Vulnerabilidade e pandemia"
          statement={
            <>
              <p>
                Durante a pandemia de Covid-19, o número de pessoas em situação de rua no
                Brasil cresceu 38% entre 2020 e 2022. Pesquisa do IPEA mostrou que esse
                grupo é composto majoritariamente por homens negros, com baixa escolaridade,
                histórico de vínculos familiares rompidos e uso de substâncias psicoativas.
                Muitos relataram ter perdido o emprego imediatamente antes de irem para
                as ruas.
              </p>
              <p>Com base no texto e no conceito de vulnerabilidade social, assinale a alternativa correta:</p>
            </>
          }
          options={[
            { letter: "A", text: <>A situação de rua é resultado de escolhas individuais irresponsáveis, sem relação com fatores estruturais.</> },
            { letter: "B", text: <>A pandemia foi o único fator que levou essas pessoas às ruas, sem relação com desigualdades preexistentes.</> },
            { letter: "C", text: <>O perfil descrito demonstra que a vulnerabilidade social é multidimensional e interseccional: raça, gênero, escolaridade e ruptura de vínculos se combinam e amplificam os riscos.</>, correct: true },
            { letter: "D", text: <>A situação de rua é um fenômeno exclusivamente urbano sem relação com a estrutura de classes da sociedade.</> },
            { letter: "E", text: <>O uso de substâncias psicoativas é o único fator determinante da situação de rua, independentemente de condições socioeconômicas.</> },
          ]}
          resolution={<p>O perfil da população em situação de rua revela a interseccionalidade das vulnerabilidades: ser negro (racismo estrutural), ter baixa escolaridade (exclusão educacional) e ter perdido emprego informal (precarização do trabalho) são fatores que se somam e agravam os riscos. A pandemia funcionou como gatilho sobre vulnerabilidades preexistentes, não como causa isolada. O conceito de interseccionalidade (Kimberlé Crenshaw) ajuda a entender como múltiplas formas de opressão se entrecruzam.</p>}
        />
      </section>
    </article>
  );
}
