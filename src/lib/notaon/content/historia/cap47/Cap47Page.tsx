"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap47Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 47</span>
          <h1>Questões sociais contemporâneas: direitos humanos, movimentos sociais, povos indígenas, racismo, meio ambiente e cidadania</h1>
          <p>
            As grandes questões sociais do Brasil e do mundo contemporâneo — racismo estrutural,
            direitos dos povos indígenas, feminismo, movimentos sociais, crise ambiental e
            democracia — são temas centrais no ENEM e refletem as lutas históricas de grupos que,
            por séculos, foram excluídos da narrativa oficial. Este capítulo articula o passado
            histórico com o presente: do tráfico negreiro ao racismo estrutural, da colonização
            às lutas indígenas contemporâneas, das conquistas sufragistas às pautas do feminismo
            interseccional. Compreender essas conexões é indispensável tanto para a prova
            quanto para a formação de uma cidadania crítica e comprometida com a dignidade humana.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos Históricos</span>
        <h2>1. Direitos humanos: história, DUDH e gerações</h2>
        <p>
          A expressão "direitos humanos" refere-se ao conjunto de direitos inerentes a toda pessoa
          humana, independentemente de nacionalidade, etnia, gênero, religião ou qualquer outra
          condição. Seu desenvolvimento histórico foi longo e marcado por contradições profundas:
          os mesmos iluministas que proclamaram os direitos do homem no século XVIII mantinham
          escravos; as constituições liberais do século XIX garantiam direitos apenas a proprietários
          brancos do sexo masculino. A universalidade real dos direitos humanos é uma conquista
          recente e permanentemente disputada.
        </p>
        <p>
          O marco histórico fundamental é a <strong>Declaração Universal dos Direitos Humanos</strong>
          (DUDH), aprovada pela Assembleia Geral da ONU em 10 de dezembro de 1948. Redigida no
          contexto do horror do Holocausto e das ruínas da Segunda Guerra Mundial — a prova de
          que Estados nacionais podiam sistematicamente violar a dignidade humana sem qualquer
          controle externo — a DUDH estabelece em 30 artigos um conjunto de direitos básicos:
          vida, liberdade, segurança, proibição da tortura, igualdade perante a lei, liberdade
          de pensamento e expressão, trabalho e educação. Sua elaboração foi liderada por
          Eleanor Roosevelt, viúva do presidente Franklin Roosevelt.
        </p>
        <p>
          A teoria das <strong>gerações (ou dimensões) dos direitos humanos</strong>, desenvolvida
          pelo jurista Karel Vasak, organiza os direitos em ondas históricas conforme emergiram.
          A <strong>primeira geração</strong> compreende os direitos civis e políticos, surgidos
          com as revoluções burguesas do século XVIII (inglesa, americana e francesa) — liberdade
          de expressão, direito ao voto, habeas corpus, propriedade privada, integridade física.
          O Estado deve se abster de violar esses direitos (direitos negativos). A
          <strong> segunda geração</strong> abrange os direitos sociais, econômicos e culturais,
          produto do século XIX e XX com a questão operária e o Estado de Bem-Estar Social —
          saúde, educação, trabalho, moradia, previdência. O Estado deve agir positivamente para
          garanti-los. A <strong>terceira geração</strong> engloba os direitos difusos e coletivos —
          meio ambiente, paz, desenvolvimento, autodeterminação dos povos — que não pertencem a
          um indivíduo mas à coletividade, incluindo gerações futuras. Pesquisadores contemporâneos
          discutem uma <strong>quarta geração</strong> ligada à bioética, ao genoma humano e ao
          acesso à internet como direito fundamental.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 240" width="760" height="240" aria-label="Diagrama das quatro gerações de direitos humanos">
            <rect x="0" y="0" width="760" height="240" fill="#f0f4ff" rx="10"/>
            <text x="380" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1a2e">Gerações dos Direitos Humanos</text>

            {/* 1ª Geração */}
            <rect x="15" y="35" width="172" height="188" rx="10" fill="#4361ee" opacity="0.12" stroke="#4361ee" strokeWidth="1.5"/>
            <text x="101" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">1ª Geração</text>
            <text x="101" y="74" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#4361ee">Liberdade</text>
            <text x="101" y="90" textAnchor="middle" fontSize="9" fill="#374151">Civis e Políticos</text>
            <line x1="30" y1="98" x2="173" y2="98" stroke="#4361ee" strokeWidth="1" opacity="0.5"/>
            <text x="101" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">• Liberdade de expressão</text>
            <text x="101" y="131" textAnchor="middle" fontSize="9" fill="#6b7280">• Voto / habeas corpus</text>
            <text x="101" y="147" textAnchor="middle" fontSize="9" fill="#6b7280">• Propriedade privada</text>
            <text x="101" y="163" textAnchor="middle" fontSize="9" fill="#6b7280">• Integridade física</text>
            <text x="101" y="186" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Revoluções séc. XVII–XVIII</text>
            <text x="101" y="200" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Estado deve se abster</text>
            <text x="101" y="214" textAnchor="middle" fontSize="8" fill="#4361ee">(direitos negativos)</text>

            {/* 2ª Geração */}
            <rect x="200" y="35" width="172" height="188" rx="10" fill="#3a0ca3" opacity="0.12" stroke="#3a0ca3" strokeWidth="1.5"/>
            <text x="286" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">2ª Geração</text>
            <text x="286" y="74" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#3a0ca3">Igualdade</text>
            <text x="286" y="90" textAnchor="middle" fontSize="9" fill="#374151">Sociais, Econômicos e Culturais</text>
            <line x1="215" y1="98" x2="358" y2="98" stroke="#3a0ca3" strokeWidth="1" opacity="0.5"/>
            <text x="286" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">• Saúde e educação</text>
            <text x="286" y="131" textAnchor="middle" fontSize="9" fill="#6b7280">• Trabalho e salário</text>
            <text x="286" y="147" textAnchor="middle" fontSize="9" fill="#6b7280">• Moradia e previdência</text>
            <text x="286" y="163" textAnchor="middle" fontSize="9" fill="#6b7280">• Cultura e lazer</text>
            <text x="286" y="186" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Questão social séc. XIX–XX</text>
            <text x="286" y="200" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Estado deve garantir</text>
            <text x="286" y="214" textAnchor="middle" fontSize="8" fill="#3a0ca3">(direitos positivos)</text>

            {/* 3ª Geração */}
            <rect x="385" y="35" width="172" height="188" rx="10" fill="#7209b7" opacity="0.12" stroke="#7209b7" strokeWidth="1.5"/>
            <text x="471" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">3ª Geração</text>
            <text x="471" y="74" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#7209b7">Fraternidade</text>
            <text x="471" y="90" textAnchor="middle" fontSize="9" fill="#374151">Difusos e Coletivos</text>
            <line x1="400" y1="98" x2="543" y2="98" stroke="#7209b7" strokeWidth="1" opacity="0.5"/>
            <text x="471" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">• Meio ambiente</text>
            <text x="471" y="131" textAnchor="middle" fontSize="9" fill="#6b7280">• Paz e desenvolvimento</text>
            <text x="471" y="147" textAnchor="middle" fontSize="9" fill="#6b7280">• Autodeterminação</text>
            <text x="471" y="163" textAnchor="middle" fontSize="9" fill="#6b7280">• Patrimônio comum</text>
            <text x="471" y="186" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Pós-2ª Guerra, ONU, descolonização</text>
            <text x="471" y="200" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Solidariedade coletiva</text>
            <text x="471" y="214" textAnchor="middle" fontSize="8" fill="#7209b7">(titular: a coletividade)</text>

            {/* 4ª Geração */}
            <rect x="570" y="35" width="172" height="188" rx="10" fill="#f72585" opacity="0.12" stroke="#f72585" strokeWidth="1.5"/>
            <text x="656" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">4ª Geração</text>
            <text x="656" y="74" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#f72585">Novos Direitos</text>
            <text x="656" y="90" textAnchor="middle" fontSize="9" fill="#374151">Bioética e Tecnologia</text>
            <line x1="585" y1="98" x2="728" y2="98" stroke="#f72585" strokeWidth="1" opacity="0.5"/>
            <text x="656" y="115" textAnchor="middle" fontSize="9" fill="#6b7280">• Genoma humano</text>
            <text x="656" y="131" textAnchor="middle" fontSize="9" fill="#6b7280">• Bioética e clonagem</text>
            <text x="656" y="147" textAnchor="middle" fontSize="9" fill="#6b7280">• Acesso à internet</text>
            <text x="656" y="163" textAnchor="middle" fontSize="9" fill="#6b7280">• Proteção de dados</text>
            <text x="656" y="186" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Revolução tecnológica séc. XXI</text>
            <text x="656" y="200" textAnchor="middle" fontSize="8" fontStyle="italic" fill="#9ca3af">Debate em construção</text>
            <text x="656" y="214" textAnchor="middle" fontSize="8" fill="#f72585">(regulação incompleta)</text>
          </svg>
          <figcaption>As quatro gerações de direitos humanos: fundamentos históricos, exemplos e relação com a obrigação estatal em cada dimensão.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Geração</th>
                <th>Contexto histórico de surgimento</th>
                <th>Exemplos de direitos</th>
                <th>Relação com o Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1ª — Civis e políticos</strong></td>
                <td>Revoluções Americana (1776) e Francesa (1789); Iluminismo</td>
                <td>Liberdade de expressão, voto, integridade física, habeas corpus</td>
                <td>Estado deve se abster de intervir (direitos negativos)</td>
              </tr>
              <tr>
                <td><strong>2ª — Sociais, econômicos e culturais</strong></td>
                <td>Movimento operário séc. XIX–XX; Estado de Bem-Estar Social</td>
                <td>Saúde, educação, moradia, trabalho, previdência</td>
                <td>Estado deve promover ativamente (direitos positivos)</td>
              </tr>
              <tr>
                <td><strong>3ª — Difusos e coletivos</strong></td>
                <td>Pós-2ª GM; descolonização; movimentos ambientalistas e de DH globais</td>
                <td>Meio ambiente saudável, paz, desenvolvimento, autodeterminação dos povos</td>
                <td>Responsabilidade difusa: Estados, empresas, sociedade global</td>
              </tr>
              <tr>
                <td><strong>4ª — Novos direitos</strong></td>
                <td>Revolução tecnológica e biotecnológica do século XXI</td>
                <td>Proteção do genoma, bioética, acesso à internet, proteção de dados pessoais</td>
                <td>Regulação internacional ainda em construção</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Internacional</span>
        <h2>2. O sistema internacional de proteção dos direitos humanos</h2>
        <p>
          A DUDH de 1948 não é um tratado juridicamente vinculante — é uma declaração política
          de princípios. Para criar obrigações legais, a ONU adotou dois pactos em 1966: o
          <strong> Pacto Internacional de Direitos Civis e Políticos</strong> (PIDCP) e o
          <strong> Pacto Internacional de Direitos Econômicos, Sociais e Culturais</strong>
          (PIDESC). Juntos com a DUDH, formam a "Carta Internacional dos Direitos Humanos" —
          o núcleo do sistema universal de proteção. Tratados específicos cobrem grupos
          vulneráveis: a Convenção sobre os Direitos da Criança (1989, a mais ratificada na
          história da ONU), a Convenção contra a Tortura (1984), a Convenção sobre os Direitos
          das Pessoas com Deficiência (2006).
        </p>
        <p>
          O <strong>Sistema Interamericano de Direitos Humanos</strong> é particularmente
          relevante para o Brasil. A <strong>Comissão Interamericana de Direitos Humanos</strong>
          (CIDH), com sede em Washington, recebe petições de violações de particulares e Estados.
          A <strong>Corte Interamericana de Direitos Humanos</strong> (CorteIDH), com sede em
          San José da Costa Rica, tem competência jurisdicional e pode condenar países a pagar
          indenizações e a implementar políticas públicas. O Brasil foi condenado em casos
          emblemáticos: o caso <strong>Damião Ximenes Lopes</strong> (morte de paciente
          psiquiátrico em casa de repouso privada, 2006 — primeira condenação do Brasil na
          CorteIDH) e o caso <strong>Maria da Penha</strong> (violência doméstica tolerada
          por anos pelo Estado brasileiro), que inspirou diretamente a lei homônima de 2006.
        </p>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Racismo Estrutural</span>
        <h2>3. Racismo estrutural no Brasil: da escravidão ao presente</h2>
        <p>
          O <strong>racismo estrutural</strong> — conceito desenvolvido pelo jurista Silvio
          Almeida no livro "Racismo Estrutural" (2018) — distingue-se de atos individuais
          de preconceito: é o modo como o racismo se manifesta nas instituições, nas políticas
          públicas, na distribuição de riqueza e nas relações sociais de forma sistemática e
          histórica. No Brasil, o racismo estrutural é a herança direta de mais de três séculos
          de escravidão e de uma abolição feita sem políticas de integração.
        </p>
        <p>
          A escravidão no Brasil foi a maior das Américas: estimativas indicam que mais de
          4 milhões de africanos foram trazidos ao Brasil entre os séculos XVI e XIX —
          contra cerca de 400.000 para os EUA. A <strong>Lei Áurea</strong> de 1888 aboliu a
          escravidão sem indenizar os escravizados, sem distribuir terras, sem garantir
          educação ou moradia. O resultado foi a inserção precária e violenta da população
          negra em uma sociedade que os excluía sistematicamente do mercado de trabalho formal,
          da propriedade e do sistema educacional — reforçada pela ideologia da "democracia
          racial" que negou por décadas a existência do racismo no Brasil.
        </p>
        <p>
          Os dados contemporâneos revelam a persistência dessa estrutura: negros e pardos
          representam mais de 77% das vítimas de homicídios dolosos no Brasil (Atlas da
          Violência 2022); a renda média de trabalhadores negros é cerca de 58% da renda de
          trabalhadores brancos; negros são mais de 60% da população carcerária; a
          representação de negros em cargos de liderança política, judiciária e empresarial
          é dramaticamente inferior à sua proporção na população (56% dos brasileiros se
          autodeclaram pretos ou pardos, segundo o Censo de 2022).
        </p>
        <p>
          As <strong>políticas de cotas</strong> representam o maior avanço institucional no
          enfrentamento do racismo estrutural: a Lei 12.711/2012 reservou 50% das vagas em
          universidades federais para estudantes de escolas públicas, com sub-cotas para
          autodeclarados negros e indígenas, proporcionais à população de cada estado.
          O STF confirmou a constitucionalidade das cotas em 2012 (ADPF 186) e em 2023.
          Avaliações do IPEA e de pesquisas independentes mostram que os cotistas têm
          desempenho igual ou superior aos não-cotistas, derrubando o principal argumento
          meritocrático contrário ao sistema.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marcos do combate ao racismo no Brasil</th>
                <th>Ano</th>
                <th>Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Constituição Federal, Art. 5º, XLII</td>
                <td>1988</td>
                <td>Racismo definido como crime inafiançável e imprescritível</td>
              </tr>
              <tr>
                <td>Lei Caó (7.716)</td>
                <td>1989</td>
                <td>Define crimes resultantes de preconceito de raça ou cor</td>
              </tr>
              <tr>
                <td>Lei 10.639</td>
                <td>2003</td>
                <td>Obriga ensino de história e cultura afro-brasileira e africana</td>
              </tr>
              <tr>
                <td>Estatuto da Igualdade Racial (12.288)</td>
                <td>2010</td>
                <td>Política nacional de promoção da igualdade racial</td>
              </tr>
              <tr>
                <td>Lei de Cotas (12.711)</td>
                <td>2012</td>
                <td>50% das vagas nas federais para escola pública, com recorte racial</td>
              </tr>
              <tr>
                <td>STF — criminalização da injúria racial</td>
                <td>2021</td>
                <td>Equipara injúria racial a racismo: imprescritível e inafiançável</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Povos Indígenas</span>
        <h2>4. Povos indígenas no Brasil: direitos, ameaças e protagonismo</h2>
        <p>
          O Brasil possui a maior diversidade indígena das Américas: mais de 300 povos com
          línguas e culturas distintas, totalizando cerca de 1,7 milhão de pessoas (menos de
          1% da população), espalhadas por todo o território — com maior concentração na
          Amazônia Legal. Essa diversidade, que era muito maior antes da colonização (estimativas
          apontam para 5 a 10 milhões de indígenas em 1500), é o resultado de séculos de
          massacre, escravização, expropriação territorial e etnocídio sistemático.
        </p>
        <p>
          A <strong>Constituição de 1988</strong> representou uma virada histórica no direito
          indígena brasileiro. O artigo 231 reconhece aos índios "sua organização social,
          costumes, línguas, crenças e tradições, e os direitos originários sobre as terras
          que tradicionalmente ocupam". O conceito de "terras originariamente ocupadas" supera
          a ideia de propriedade — não se trata de desapropriação ou doação do Estado, mas do
          reconhecimento de que essas terras sempre pertenceram aos povos que as habitavam.
          O processo de demarcação — identificação, delimitação, demarcação, homologação —
          é responsabilidade da FUNAI. Em 2022, existiam 720 Terras Indígenas demarcadas,
          cobrindo cerca de 13% do território nacional.
        </p>
        <p>
          As <strong>ameaças contemporâneas</strong> às terras indígenas são múltiplas:
          o garimpo ilegal (que contamina rios com mercúrio e traz doenças, como evidenciado
          na crise humanitária dos Yanomami em 2022–2023), a grilagem e o desmatamento para a
          pecuária e a soja, a pressão de bancadas ruralistas no Congresso, a tentativa de
          implementação do Marco Temporal. O <strong>protagonismo indígena</strong> tem crescido:
          a APIB (Articulação dos Povos Indígenas do Brasil) tornou-se um ator político central;
          Sônia Guajajara foi eleita deputada federal e nomeada Ministra dos Povos Indígenas
          em 2023; Ailton Krenak e Davi Kopenawa são vozes indígenas reconhecidas
          internacionalmente.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 250" width="760" height="250" aria-label="Mapa esquemático do Brasil com terras indígenas demarcadas por região">
            <rect x="0" y="0" width="760" height="250" fill="#e8f5e9" rx="10"/>
            <text x="380" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a2e">Terras Indígenas no Brasil — Distribuição Regional (2022)</text>

            {/* Contorno esquemático do Brasil */}
            <polygon points="270,38 420,28 530,58 575,118 545,188 460,225 375,230 295,210 235,185 215,125 238,72" fill="#c8e6c9" stroke="#388e3c" strokeWidth="2"/>

            {/* Norte / Amazônia — maior concentração */}
            <ellipse cx="310" cy="105" rx="82" ry="56" fill="#388e3c" opacity="0.65"/>
            <text x="310" y="98" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">NORTE (AMAZÔNIA)</text>
            <text x="310" y="112" textAnchor="middle" fontSize="9" fill="#e8f5e9">Maior concentração de TIs</text>
            <text x="310" y="126" textAnchor="middle" fontSize="9" fill="#e8f5e9">Yanomami, Kayapó, Munduruku</text>

            {/* Nordeste */}
            <circle cx="475" cy="108" r="25" fill="#66bb6a" opacity="0.75"/>
            <text x="475" y="105" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1b5e20">NORDESTE</text>
            <text x="475" y="118" textAnchor="middle" fontSize="7" fill="#1b5e20">Pataxó, Potiguara</text>

            {/* Centro-Oeste */}
            <circle cx="385" cy="172" r="22" fill="#81c784" opacity="0.75"/>
            <text x="385" y="168" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1b5e20">CENTRO-OESTE</text>
            <text x="385" y="180" textAnchor="middle" fontSize="7" fill="#1b5e20">Xavante, Kadiwéu</text>

            {/* Sul */}
            <circle cx="357" cy="210" r="16" fill="#a5d6a7" opacity="0.8"/>
            <text x="357" y="207" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1b5e20">SUL</text>
            <text x="357" y="218" textAnchor="middle" fontSize="7" fill="#1b5e20">Guarani-Kaiowá</text>

            {/* Legenda */}
            <rect x="560" y="40" width="185" height="185" rx="6" fill="#fff" stroke="#388e3c"/>
            <text x="652" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b5e20">Dados 2022 (IBGE/FUNAI)</text>
            <text x="570" y="82" fontSize="9" fill="#333">Total de TIs: 720 demarcadas</text>
            <text x="570" y="98" fontSize="9" fill="#333">Área: ~13% do território nacional</text>
            <text x="570" y="114" fontSize="9" fill="#333">Povos: mais de 300 etnias</text>
            <text x="570" y="130" fontSize="9" fill="#333">Línguas: 274 línguas distintas</text>
            <text x="570" y="146" fontSize="9" fill="#333">População: ~1,7 milhão (2022)</text>
            <line x1="565" y1="155" x2="735" y2="155" stroke="#ccc" strokeWidth="0.5"/>
            <text x="570" y="170" fontSize="9" fontWeight="bold" fill="#e63946">Principais ameaças:</text>
            <text x="570" y="186" fontSize="9" fill="#555">Garimpo ilegal (mercúrio)</text>
            <text x="570" y="202" fontSize="9" fill="#555">Grilagem e desmatamento</text>
            <text x="570" y="218" fontSize="9" fill="#555">Pressão do agronegócio</text>
          </svg>
          <figcaption>Distribuição esquemática das terras indígenas demarcadas no Brasil por região, com dados do Censo 2022 e principais ameaças contemporâneas.</figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Feminismo e Gênero</span>
        <h2>5. Feminismo e direitos das mulheres: ondas, conquistas e desafios</h2>
        <p>
          O movimento feminista organiza-se historicamente em "ondas". A <strong>primeira
          onda</strong>, do final do século XIX ao início do XX, centrou-se no sufrágio e na
          igualdade civil formal: no Brasil, <strong>Bertha Lutz</strong> liderou a campanha
          pelo voto feminino, conquistado em 1932 — quatro décadas depois dos EUA (1920)
          e vinte anos antes da França (1944). A <strong>segunda onda</strong> (anos 1960–70)
          radicalizou a agenda: além de igualdade formal, exigiu igualdade substantiva no
          trabalho, controle do próprio corpo e da sexualidade, combate à violência doméstica
          e questionamento das estruturas patriarcais da família e da cultura. A
          <strong> terceira onda</strong> (anos 1990–2000) introduziu a
          <strong> interseccionalidade</strong> — conceito de Kimberlé Crenshaw que articula
          gênero, raça e classe como eixos simultâneos de opressão.
        </p>
        <p>
          No Brasil, a <strong>Lei Maria da Penha</strong> (2006) — nomeada em homenagem à
          farmacêutica Maria da Penha Maia Fernandes, que ficou paraplégica após duas tentativas
          de assassinato pelo marido e cujo caso foi levado à Corte Interamericana — criou
          mecanismos de proteção, redes de apoio e punições mais severas para agressores em
          casos de violência doméstica. A <strong>Lei do Feminicídio</strong> (Lei 13.104/2015)
          qualificou o homicídio de mulheres por razões de gênero como crime hediondo.
          Apesar dos avanços, a violência contra mulheres permanece em nível alarmante:
          o Brasil ocupa posição entre os países com maiores taxas de feminicídio do mundo.
        </p>
        <p>
          A <strong>sub-representação política</strong> das mulheres é um dado estrutural:
          em 2023, mulheres ocupavam apenas 17,7% das cadeiras na Câmara dos Deputados —
          uma das menores proporções entre as democracias do mundo. Cotas eleitorais
          (30% das candidaturas de cada partido para mulheres) existem desde 1997, mas
          não garantiram representação proporcional. O pensamento de
          <strong> Lélia Gonzalez</strong>, intelectual negra brasileira dos anos 1980,
          e de <strong>Angela Davis</strong> nos EUA fundamentam o feminismo negro — a
          compreensão de que a opressão da mulher negra não pode ser analisada sem
          a dimensão racial.
        </p>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Movimentos Sociais</span>
        <h2>6. Movimentos sociais no Brasil contemporâneo</h2>
        <p>
          Os movimentos sociais são formas de organização coletiva que operam fora dos canais
          institucionais tradicionais — partidos e sindicatos — para pressionar por mudanças
          sociais, políticas e econômicas. O Brasil tem uma tradição rica e diversificada de
          movimentos que moldaram sua história recente, especialmente no período pós-1988.
        </p>
        <p>
          O <strong>MST</strong> (Movimento dos Trabalhadores Rurais Sem Terra), fundado em
          1984 no Sul do Brasil, é o maior movimento social da América Latina. Organizado em
          torno da demanda por reforma agrária — redistribuição das terras improdutivas, garantida
          constitucionalmente pela "função social da propriedade" —, o MST realiza ocupações de
          fazendas improdutivas, organiza acampamentos e assentamentos e desenvolve escolas e
          cooperativas. O índice de Gini fundiário brasileiro é um dos mais altos do mundo,
          com menos de 1% dos proprietários detendo mais de 45% das terras agrícolas.
        </p>
        <p>
          O movimento <strong>LGBTQIA+</strong> conquistou marcos históricos importantes por
          via judicial, diante da inação do Legislativo: o STF reconheceu em 2011 as uniões
          estáveis homoafetivas como entidades familiares; o CNJ autorizou o casamento civil
          em 2013; o STF criminalizou a homofobia em 2019, equiparando-a ao racismo. A
          <strong> Parada do Orgulho LGBT de São Paulo</strong>, que reúne anualmente mais
          de 3 milhões de pessoas, é considerada uma das maiores manifestações públicas do mundo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento Social</th>
                <th>Principal demanda</th>
                <th>Marco histórico relevante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MST</strong> (1984)</td>
                <td>Reforma agrária, redistribuição de terras</td>
                <td>Chacina de Eldorado dos Carajás (1996); mais de 350.000 famílias assentadas</td>
              </tr>
              <tr>
                <td><strong>MTST</strong></td>
                <td>Moradia urbana, combate à especulação imobiliária</td>
                <td>Pressão pelo Minha Casa Minha Vida e por Zonas Especiais de Interesse Social</td>
              </tr>
              <tr>
                <td><strong>Movimento Negro Unificado</strong> (1978)</td>
                <td>Combate ao racismo, políticas de igualdade racial</td>
                <td>Lei de cotas (2012), Estatuto da Igualdade Racial (2010)</td>
              </tr>
              <tr>
                <td><strong>Movimento LGBTQIA+</strong></td>
                <td>Igualdade de direitos, combate à discriminação</td>
                <td>Casamento civil (2013), criminalização da homofobia pelo STF (2019)</td>
              </tr>
              <tr>
                <td><strong>Movimento Feminista</strong></td>
                <td>Combate à violência de gênero, igualdade salarial</td>
                <td>Lei Maria da Penha (2006), Lei do Feminicídio (2015)</td>
              </tr>
              <tr>
                <td><strong>APIB</strong></td>
                <td>Demarcação de terras, direitos constitucionais</td>
                <td>STF rejeita Marco Temporal (2023); Sônia Guajajara como ministra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Crise Ambiental e História</span>
        <h2>7. A questão ambiental na perspectiva histórica</h2>
        <p>
          A relação entre o Brasil e seu meio ambiente é marcada pela contradição entre uma
          biodiversidade extraordinária — o Brasil é o país mais biodiverso do mundo, com
          mais de 20% das espécies conhecidas — e um modelo histórico de desenvolvimento
          predatório. Do Pau-Brasil explorado até a extinção no litoral, passando pelos ciclos
          do açúcar (Mata Atlântica devastada), do café (interior de São Paulo desmatado),
          do ouro e do diamante, e chegando à expansão da soja e da pecuária sobre o Cerrado
          e a Amazônia — o Brasil construiu historicamente sua riqueza à custa de sua
          biodiversidade e das comunidades que dela dependem.
        </p>
        <p>
          <strong>Chico Mendes</strong> — seringueiro e líder dos "povos da floresta"
          assassinado em 1988 por um fazendeiro em Xapuri, Acre — tornou-se símbolo
          internacional da defesa da Amazônia e dos direitos das comunidades tradicionais.
          Sua luta articulava meio ambiente e direitos humanos: a floresta não pode ser
          protegida sem proteger os povos que nela vivem. Esse princípio — que décadas depois
          seria chamado de "socioambientalismo" — é uma contribuição brasileira ao pensamento
          ambiental global.
        </p>
        <p>
          O conceito de <strong>racismo ambiental</strong>, desenvolvido pelo sociólogo Robert
          Bullard nos EUA a partir dos anos 1980 e aplicado ao Brasil por pesquisadores como
          Selene Herculano, denuncia que comunidades negras, indígenas e pobres são
          desproporcionalmente expostas a riscos ambientais — proximidade de indústrias
          poluentes, falta de saneamento básico, vulnerabilidade às mudanças climáticas,
          invasão de territórios por atividades extrativas ilegais. O caso dos Yanomami —
          com garimpo ilegal envenenando rios com mercúrio e dizimando crianças por
          desnutrição e malária — é a expressão mais grave e recente desse padrão.
        </p>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">África e Diáspora</span>
        <h2>8. África e diáspora africana: perspectiva anti-eurocêntrica</h2>
        <p>
          A história da África — obrigatória por lei (Lei 10.639/2003) no ensino básico —
          é muito mais rica e complexa do que a visão eurocêntrica que a reduz ao continente
          de origem dos escravizados. Civilizações africanas pré-coloniais alcançaram
          extraordinários níveis de organização política, artística e científica: o
          <strong> Império Mali</strong> (séculos XIII–XVI) controlava o comércio de ouro
          do Sahel e abrigava a Universidade de Timbuktu, um dos mais importantes centros
          intelectuais do mundo medieval; o <strong>Reino do Congo</strong> tinha uma
          organização estatal sofisticada com relações diplomáticas com Portugal; o
          <strong> Zimbábue</strong> construiu estruturas em pedra sem argamassa que até
          hoje desafiam a compreensão dos arqueólogos.
        </p>
        <p>
          A <strong>diáspora africana</strong> produziu culturas riquíssimas e resistentes
          no Brasil: o candomblé e a umbanda, o samba, o maracatu, o frevo, a capoeira,
          a culinária baiana, os quilombos — formas de preservação cultural que resistiram
          à brutalidade da escravidão. O ENEM frequentemente aborda essas manifestações
          culturais como formas de <strong>resistência</strong> e de afirmação identitária,
          valorizando a perspectiva das populações africanas e afro-brasileiras como sujeitos
          históricos ativos — não apenas vítimas passivas.
        </p>
      </section>

      {/* ===== SEÇÃO 9 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Cidadania e Democracia</span>
        <h2>9. Cidadania, participação política e ameaças à democracia</h2>
        <p>
          A cidadania não se resume ao direito ao voto — embora o voto universal secreto,
          garantido pela Constituição de 1988 inclusive para analfabetos (pela primeira vez
          na história brasileira), seja um avanço fundamental. A participação política
          democrática inclui mecanismos de democracia direta: plebiscitos, referendos e
          iniciativa popular de lei (com assinaturas de pelo menos 1% do eleitorado nacional
          em pelo menos 5 estados). Os <strong>conselhos de políticas públicas</strong> —
          de saúde, educação, assistência social, direitos da criança — representam formas
          de participação cidadã direta na formulação e fiscalização das políticas do Estado.
          O <strong>orçamento participativo</strong>, experiência pioneira de Porto Alegre
          (RS) nos anos 1990, permite que a população vote em prioridades de investimento
          municipal e foi adotado em centenas de municípios ao redor do mundo.
        </p>
        <p>
          As <strong>fake news e a desinformação</strong> tornaram-se ameaças estruturais
          à democracia no século XXI: a disseminação de informações falsas via redes sociais
          manipula o debate público, corrói a confiança nas instituições e pode influenciar
          eleições. O <strong>8 de janeiro de 2023</strong> foi o resultado mais extremo
          desse processo no Brasil: extremistas invadiram e depredaram as sedes dos três
          Poderes em Brasília, exigindo uma intervenção militar. O ENEM frequentemente
          aborda a relação entre desinformação, participação política e fortalecimento
          democrático — temas centrais para a formação da cidadania crítica.
        </p>
      </section>

      {/* ===== SEÇÃO 10 — EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — Direitos Humanos, Racismo, Indígenas, Meio Ambiente e Cidadania</h2>

        <Exercise
          level="Básico"
          title="1. Gerações dos direitos humanos"
          statement={
            <p>
              Segundo a teoria das gerações dos direitos humanos, o direito ao meio ambiente
              ecologicamente equilibrado, consagrado no artigo 225 da Constituição Federal
              de 1988, pertence à qual geração e por qual razão?
            </p>
          }
          options={[
            { letter: "a", text: "Primeira geração — pois surgiu com as revoluções liberais do século XVIII, que reconheceram os primeiros direitos naturais do homem, incluindo a natureza." },
            { letter: "b", text: "Segunda geração — pois é um direito social que depende da ação positiva do Estado para ser garantido a cada indivíduo." },
            { letter: "c", text: "Terceira geração — pois se trata de um direito difuso e coletivo, que pertence a toda a humanidade e às gerações futuras, exigindo solidariedade global para sua proteção.", correct: true },
            { letter: "d", text: "Quarta geração — pois envolve o uso de tecnologias avançadas de monitoramento ambiental e biotecnologia de recuperação de ecossistemas." },
            { letter: "e", text: "Não se enquadra em nenhuma geração de direitos humanos, pois o meio ambiente é uma questão técnica e não política." },
          ]}
          resolution={
            <p>
              Os direitos de terceira geração, também chamados de difusos ou coletivos, não
              pertencem a um indivíduo específico — pertencem à coletividade, incluindo gerações
              futuras. O artigo 225 da CF/88 é explícito: o meio ambiente é "bem de uso comum do
              povo", cujo dever de preservação cabe "às presentes e às futuras gerações". Esse
              caráter transgeracional e coletivo distingue-o dos direitos individuais de primeira
              geração e dos direitos prestacionais de segunda geração. As gerações são
              acumulativas e não excludentes: cada nova dimensão amplia, sem substituir, as anteriores.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Racismo estrutural e dados contemporâneos"
          statement={
            <div>
              <p>
                "Segundo o Atlas da Violência 2022, negros e pardos representam 77% das vítimas
                de homicídios dolosos no Brasil, apesar de corresponderem a 56% da população.
                Nos presídios, negros e pardos somam mais de 60% dos encarcerados. A renda
                média de trabalhadores negros é 57% da renda de trabalhadores brancos."
              </p>
              <p>
                Esses dados revelam principalmente a existência de:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Uma coincidência estatística sem causas históricas identificáveis, resultado de escolhas individuais dos grupos afetados." },
            { letter: "b", text: "Uma desigualdade que se explica exclusivamente pelo nível educacional dos grupos, sem relação com a cor da pele." },
            { letter: "c", text: "Racismo estrutural — a manifestação sistemática nas instituições (segurança pública, judiciário, mercado de trabalho) de desigualdades enraizadas na escravidão e na exclusão pós-abolição.", correct: true },
            { letter: "d", text: "Um problema de caráter exclusivamente regional, restrito às zonas mais pobres do Norte e Nordeste." },
            { letter: "e", text: "A superação gradual do racismo no Brasil, pois os dados mostram que negros já têm acesso crescente à educação e ao mercado de trabalho." },
          ]}
          resolution={
            <p>
              Os dados apresentados são evidência empírica do racismo estrutural: quando as
              desigualdades não são incidentais mas sistemáticas, afetando um grupo específico
              em todas as dimensões da vida social, e quando têm raízes históricas identificáveis
              (escravidão e abolição sem políticas de integração), estamos diante de uma estrutura
              racista — não de atos individuais isolados. O conceito de Silvio Almeida é
              precisamente essa distinção: o racismo opera não apenas pelo ato do racista
              individual, mas pela estrutura das instituições que produzem resultados racialmente
              desiguais, independentemente da intenção de cada agente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Marco Temporal e direitos originários indígenas"
          statement={
            <div>
              <p>
                A tese do "Marco Temporal" defendia que os indígenas só teriam direito às
                terras que estivessem efetivamente sob sua ocupação física em 5 de outubro
                de 1988 — data da promulgação da Constituição. Em setembro de 2023, o STF
                julgou a tese inconstitucional por 9 votos a 2.
              </p>
              <p>
                Qual é o argumento histórico central que fundamentou a inconstitucionalidade
                do Marco Temporal?
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Os indígenas têm direito a qualquer terra que reivindiquem, independentemente de qualquer critério histórico ou geográfico." },
            { letter: "b", text: "A data de 1988 é muito recente e deveria ser substituída por 1500, quando os povos indígenas ocupavam todo o território brasileiro sem restrições." },
            { letter: "c", text: "Os direitos territoriais indígenas são originários — anteriores ao próprio Estado — e grupos violentamente expulsos antes de 1988 (especialmente durante a ditadura militar) não perdem seus direitos; aceitar o Marco Temporal seria legitimar a expulsão violenta.", correct: true },
            { letter: "d", text: "O marco temporal seria inconstitucional por razões estritamente formais de processo legislativo, sem relação com o mérito histórico da questão." },
            { letter: "e", text: "A Constituição nunca mencionou uma data específica para os direitos indígenas, portanto qualquer critério temporal seria automaticamente inconstitucional." },
          ]}
          resolution={
            <p>
              O argumento histórico central: muitos grupos indígenas foram expulsos de seus
              territórios nos anos 1960, 1970 e 1980 — precisamente durante a ditadura militar,
              que promoveu a expansão do agronegócio e de projetos de infraestrutura sobre
              territórios indígenas. Usar a data de 1988 como critério de ocupação significaria
              legitimar essas expulsões violentas — premiando quem praticou o "esbulho"
              (tomada ilegal de terra). O STF reconheceu que os direitos territoriais são
              "originários" (pré-estatais) e que a CF protege também os casos de "esbulho
              renitente" — a resistência indígena que persistia mesmo após expulsão forçada.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Crise Yanomami e racismo ambiental"
          statement={
            <div>
              <p>
                Em 2023, o governo brasileiro decretou emergência de saúde pública no território
                Yanomami (Roraima), onde estimativas apontavam 20.000 garimpeiros ilegais.
                Crianças morriam de desnutrição e malária; rios estavam contaminados com
                mercúrio — que causa danos neurológicos permanentes. O Conselho Yanomami
                denunciou que a invasão havia se intensificado com omissão ou incentivo
                implícito de autoridades públicas nos anos anteriores.
              </p>
              <p>
                Em perspectiva histórica, essa crise humanitária reflete principalmente:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Um fenômeno totalmente novo e sem precedentes históricos, resultado exclusivo de políticas de um único governo." },
            { letter: "b", text: "A continuidade histórica da violência do Estado e do capital contra os povos indígenas — sob a lógica extrativista que coloca os lucros da mineração acima da vida das comunidades que habitam os territórios.", correct: true },
            { letter: "c", text: "Um conflito local de caráter estritamente criminal, sem relação com estruturas históricas ou políticas mais amplas." },
            { letter: "d", text: "Uma disputa entre comunidades indígenas rivais por controle dos recursos minerais dentro de seus próprios territórios." },
            { letter: "e", text: "O resultado inevitável da demarcação de terras indígenas, que teria gerado conflitos com populações mineradoras tradicionais da região." },
          ]}
          resolution={
            <p>
              A crise Yanomami não é episódica: expressa um padrão histórico que remonta à
              colonização — a subordinação dos direitos das populações originárias às demandas
              econômicas do capital extrativista. O garimpo ilegal em terras indígenas tem
              precedentes diretos: a crise Yanomami dos anos 1980–90 já havia custado centenas
              de vidas pela mesma causa. O conceito de racismo ambiental articula a dimensão
              racial da crise: não é coincidência que sejam precisamente comunidades indígenas
              e negras as mais expostas a essas formas de violência ambiental e territorial.
              A responsabilidade do Estado — por ação ou omissão — é um elemento estrutural,
              não acidental.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Feminismo interseccional e diversidade de opressões"
          statement={
            <div>
              <p>
                "As mulheres negras experienciam discriminação de uma forma que não é capturada
                inteiramente pelas estruturas que moldam tanto o feminismo quanto a política
                antirracismo. Como as mulheres negras não são brancas nem homens, elas são
                frequentemente invisibilizadas tanto pelas análises feministas quanto pelas
                análises raciais."
              </p>
              <p><em>(Kimberlé Crenshaw, "Mapping the Margins", 1991 — adaptado)</em></p>
              <p>
                O conceito de interseccionalidade, tal como definido no texto, implica que:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "As lutas antirracista e feminista são incompatíveis e devem ser travadas separadamente, pois abordam problemas distintos e inconciliáveis." },
            { letter: "b", text: "A opressão das mulheres negras pode ser compreendida simplesmente pela soma do sexismo e do racismo, sem que haja especificidades nessa combinação." },
            { letter: "c", text: "As múltiplas identidades sociais (raça, gênero, classe) criam formas específicas e não-aditivas de opressão, que exigem análises e políticas que considerem simultaneamente essas dimensões — pois sua combinação produz vulnerabilidades únicas.", correct: true },
            { letter: "d", text: "A interseccionalidade demonstra que apenas mulheres negras e pobres podem ser consideradas vítimas de discriminação, excluindo outros grupos de qualquer análise de opressão." },
            { letter: "e", text: "O texto argumenta que as análises feministas e antirracistas já são suficientes para compreender a situação das mulheres negras — apenas precisam ser aplicadas simultaneamente." },
          ]}
          resolution={
            <p>
              Crenshaw criou o conceito de interseccionalidade para mostrar que a opressão da
              mulher negra não é a soma de "mulher" + "negra": é uma experiência qualitativamente
              diferente. O feminismo tradicional (frequentemente centrado na experiência de
              mulheres brancas de classe média) e o antirracismo tradicional (frequentemente
              centrado na experiência de homens negros) deixavam as mulheres negras em uma
              "lacuna de invisibilidade". A interseccionalidade diz que as identidades se cruzam
              criando vulnerabilidades específicas que exigem políticas específicas. No Brasil,
              Lélia Gonzalez desenvolveu análise semelhante nos anos 1980, articulando gênero,
              raça e classe a partir da experiência brasileira.
            </p>
          }
        />
      </section>
    </article>
  );
}
