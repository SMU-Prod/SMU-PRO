"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 16</span>
          <h1>Erros que Zeram a Redação</h1>
          <p>
            Conheça todos os erros capazes de anular ou zerar sua redação no ENEM —
            com exemplos concretos, consequências por competência e um checklist de
            revisão final para garantir que você não perca pontos evitáveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>1. Critérios para Nota Zero: o Panorama Completo</h2>
        <p>
          A nota zero na redação ENEM pode ocorrer de duas formas: <strong>anulação
          total</strong> (a redação não é corrigida e recebe 0 em todas as competências)
          ou <strong>zero em competência específica</strong> (as demais competências são
          avaliadas normalmente, mas uma recebe 0). Conhecer a diferença é fundamental
          para saber o que evitar a qualquer custo.
        </p>
        <div className="lesson-highlight">
          <h3>Dois tipos de nota zero</h3>
          <p>
            <strong>Anulação total:</strong> injúria, calúnia, difamação, marcas de
            identificação do candidato, cópia integral dos textos motivadores. |
            <strong>Zero em C2:</strong> fuga total ao tema proposto. |
            <strong>Zero em C5:</strong> proposta de intervenção que viola os direitos
            humanos. |
            <strong>Zero geral (texto não avaliável):</strong> texto em branco, menos
            de 7 linhas, outro tipo textual (narrativo, poético, diálogo).
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Fluxograma de verificação anti-zero para redação ENEM">
            <rect width="480" height="200" fill="#f8fafc" rx="10" />
            {/* ZERO box */}
            <rect x="10" y="10" width="130" height="100" rx="8" fill="#ef4444" />
            <text x="75" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ANULAÇÃO</text>
            <text x="75" y="52" textAnchor="middle" fill="white" fontSize="9">Injúria/calúnia</text>
            <text x="75" y="65" textAnchor="middle" fill="white" fontSize="9">Identificação</text>
            <text x="75" y="78" textAnchor="middle" fill="white" fontSize="9">Cópia dos textos</text>
            <text x="75" y="91" textAnchor="middle" fill="white" fontSize="9">motivadores</text>
            <text x="75" y="104" textAnchor="middle" fill="#fee2e2" fontSize="8">Nota 0 em tudo</text>
            {/* Grave */}
            <rect x="10" y="120" width="130" height="68" rx="8" fill="#dc2626" />
            <text x="75" y="143" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ZERO TOTAL</text>
            <text x="75" y="158" textAnchor="middle" fill="white" fontSize="9">Branco / {"<"}7 linhas</text>
            <text x="75" y="171" textAnchor="middle" fill="white" fontSize="9">Narrativa/poema</text>
            <text x="75" y="184" textAnchor="middle" fill="#fee2e2" fontSize="8">Não avaliável</text>
            {/* C2 and C5 zero */}
            <rect x="175" y="10" width="130" height="100" rx="8" fill="#f97316" />
            <text x="240" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ZERO EM C2</text>
            <text x="240" y="50" textAnchor="middle" fill="white" fontSize="9">Fuga total ao tema</text>
            <text x="240" y="65" textAnchor="middle" fill="white" fontSize="9">(escreve sobre</text>
            <text x="240" y="78" textAnchor="middle" fill="white" fontSize="9">outro assunto)</text>
            <text x="240" y="96" textAnchor="middle" fill="#fed7aa" fontSize="8">Demais Cx avaliadas</text>
            <rect x="175" y="120" width="130" height="68" rx="8" fill="#f59e0b" />
            <text x="240" y="143" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ZERO EM C5</text>
            <text x="240" y="160" textAnchor="middle" fill="white" fontSize="9">PI viola DH</text>
            <text x="240" y="175" textAnchor="middle" fill="white" fontSize="9">(tortura, discriminação)</text>
            <text x="240" y="184" textAnchor="middle" fill="#fef3c7" fontSize="8">Demais Cx avaliadas</text>
            {/* Green - OK */}
            <rect x="340" y="10" width="130" height="178" rx="8" fill="#10b981" />
            <text x="405" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">APROVADO</text>
            <text x="405" y="55" textAnchor="middle" fill="white" fontSize="9">Texto dissertativo</text>
            <text x="405" y="70" textAnchor="middle" fill="white" fontSize="9">No tema proposto</text>
            <text x="405" y="85" textAnchor="middle" fill="white" fontSize="9">Mais de 7 linhas</text>
            <text x="405" y="100" textAnchor="middle" fill="white" fontSize="9">PI que respeita DH</text>
            <text x="405" y="115" textAnchor="middle" fill="white" fontSize="9">Sem marcas pessoais</text>
            <text x="405" y="130" textAnchor="middle" fill="white" fontSize="9">Autoria própria</text>
            <text x="405" y="160" textAnchor="middle" fill="#d1fae5" fontSize="9">Todas as competências</text>
            <text x="405" y="175" textAnchor="middle" fill="#d1fae5" fontSize="9">são avaliadas</text>
          </svg>
          <figcaption>Mapa dos tipos de erro que resultam em nota zero — da anulação total ao zero por competência.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Anulação</span>
        <h2>2. Anulação Total: os Casos que Eliminam Tudo</h2>
        <p>
          A anulação total significa que a redação não é corrigida e o candidato recebe
          zero em todas as cinco competências. Os casos são:
        </p>
        <div className="lesson-highlight">
          <h3>Injúria, calúnia e difamação</h3>
          <p>
            Qualquer texto que ofenda, calunie ou difame pessoas reais (inclusive figuras
            públicas), grupos sociais ou instituições. Isso inclui discurso de ódio
            disfarçado de argumento.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Marcas de identificação</h3>
          <p>
            Assinar o nome na folha, escrever o número de inscrição, usar marcas gráficas
            propositais (desenhos, símbolos) ou deixar mensagens ao corretor. O anonimato
            do candidato é garantia de imparcialidade — violá-lo anula a redação.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Cópia integral dos textos motivadores</h3>
          <p>
            Transcrever integralmente um ou mais textos da prova, sem produção própria,
            configura ausência de autoria e anula a redação. Pequenas citações dos
            motivadores são permitidas, mas nunca a cópia integral.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Zero geral</span>
        <h2>3. Zero em Todas as Competências: Texto Não Avaliável</h2>
        <p>
          Existem condições em que a redação é lida mas recebe zero em todas as
          competências porque não preenche os requisitos mínimos do tipo textual
          exigido pelo ENEM:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Erro</th>
                <th>Descrição</th>
                <th>Por que anula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Texto em branco</td>
                <td>Folha não preenchida ou completamente ilegível</td>
                <td>Ausência de produção textual</td>
              </tr>
              <tr>
                <td>Menos de 7 linhas</td>
                <td>Texto muito curto, considerado insuficiente para demonstrar competências</td>
                <td>Impossível avaliar estrutura, argumentação e coesão</td>
              </tr>
              <tr>
                <td>Tipo textual errado — narrativo</td>
                <td>Candidato escreve um conto, uma história em vez de dissertação</td>
                <td>O ENEM exige texto dissertativo-argumentativo</td>
              </tr>
              <tr>
                <td>Tipo textual errado — poético</td>
                <td>Candidato escreve poema, soneto, letra de música</td>
                <td>Gênero poético não atende ao tipo exigido</td>
              </tr>
              <tr>
                <td>Tipo textual errado — diálogo/peça</td>
                <td>Candidato escreve um roteiro ou diálogo teatral</td>
                <td>Não é dissertação argumentativa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fuga ao tema</span>
        <h2>4. Zero em C2: Fuga Total ao Tema</h2>
        <p>
          A fuga ao tema é o erro mais comum que leva ao zero na Competência 2. Acontece
          quando o candidato escreve sobre um assunto completamente diferente do proposto
          ou aborda o tema de forma tão superficial que é impossível relacionar o texto
          ao tema central.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo real de fuga total</h3>
          <p>
            Tema: "Os desafios do trabalho infantil no Brasil".<br />
            Fuga total: o candidato escreve sobre "os benefícios do trabalho para a
            autoestima dos jovens adultos" — ignorou completamente o recorte "infantil"
            e inverteu a perspectiva (benefício vs. problema).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Diferença entre fuga e tangenciamento</h3>
          <p>
            <strong>Fuga total:</strong> o texto não tem nenhuma relação com o tema
            proposto → zero em C2.<br />
            <strong>Tangenciamento:</strong> o texto aborda um aspecto relacionado ao
            tema, mas não o tema central → penaliza C2, mas não a zera.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">DH e C5</span>
        <h2>5. Zero em C5: Proposta que Fere os Direitos Humanos</h2>
        <p>
          Como estudado na Aula 15, a proposta de intervenção que viola direitos humanos
          zera a Competência 5. Alguns exemplos concretos identificados em edições
          anteriores do ENEM:
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos de PI que zeram C5</h3>
          <p>
            "Para combater a violência, o Estado deveria matar criminosos sem julgamento." |
            "Para resolver a pobreza, deveríamos esterilizar famílias numerosas de baixa renda." |
            "Imigrantes ilegais deveriam ser expulsos do país imediatamente, sem direito a
            recurso." |
            "A solução para a criminalidade é torturar suspeitos durante interrogatórios." |
            "Pessoas LGBTQIA+ deveriam ser obrigadas a fazer terapia de conversão."
          </p>
        </div>
        <p>
          Cada uma dessas propostas viola ao menos um direito fundamental (vida, integridade
          física, dignidade, igualdade, liberdade de orientação). O teste simples: "Essa
          proposta trata algum ser humano como menos digno?" — se sim, é violação de DH.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Erros graves</span>
        <h2>6. Erros Graves que Não Zeram, mas Destroem a Nota</h2>
        <p>
          Além dos erros que zeram, existem erros graves que não anulam a redação, mas
          impedem qualquer nota acima de 400–500 pontos:
        </p>
        <div className="lesson-highlight">
          <h3>Sem proposta de intervenção</h3>
          <p>
            A ausência de PI não anula a redação, mas a Competência 5 recebe nota muito baixa
            (40 ou 80 pontos em vez dos 200 possíveis). É um erro que custa até 160 pontos
            na nota final.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Redação em um único parágrafo</h3>
          <p>
            Escrever tudo em um bloco único sem parágrafos prejudica gravemente as
            Competências 3 e 4: o corretor não consegue identificar introdução, desenvolvimento
            e conclusão, nem avaliar a progressão argumentativa.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Copiar frases dos textos motivadores</h3>
          <p>
            Reproduzir frases dos textos da prova (não na íntegra, mas extensivamente) denota
            falta de repertório próprio e penaliza as Competências 2 e 3. Use os motivadores
            apenas como base para desenvolver seu próprio argumento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tangenciamento</span>
        <h2>7. Tangenciamento: O Erro Silencioso que Prejudica C2</h2>
        <p>
          O tangenciamento é quando o candidato aborda um aspecto relacionado ao tema, mas
          não o aspecto central. É um erro sutil que muitos candidatos não percebem, pois
          sentem que estão "dentro do assunto" quando na verdade estão apenas roçando
          a borda do tema.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo de tangenciamento</h3>
          <p>
            Tema: "Impactos da fake news na democracia brasileira".<br />
            Tangenciamento: o candidato escreve sobre "os problemas da internet na
            sociedade contemporânea" — menciona fake news brevemente, mas foca em
            cyberbullying, vício em redes sociais e exposição de crianças. O tema
            central (impactos na democracia) foi tangenciado.<br />
            O correto seria: desenvolver como a fake news mina a confiança nas
            instituições, influencia eleições e dificulta o debate público racional.
          </p>
        </div>
        <p>
          Para evitar o tangenciamento: releia o tema após cada parágrafo e pergunte-se
          "este parágrafo fala especificamente sobre o aspecto central do tema proposto?"
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">PI violadora</span>
        <h2>8. Como Reescrever uma PI que Viola DH</h2>
        <p>
          Quando você perceber que sua proposta viola DH, o remédio é simples: substitua
          a medida punitiva ou excludente por uma medida educativa, preventiva ou de
          inclusão. Veja os exemplos:
        </p>
        <div className="lesson-highlight">
          <h3>PI que viola → PI corrigida</h3>
          <p>
            <strong>ERRADA:</strong> "O Estado deveria criar campos de reeducação para
            viciados em drogas, forçando-os a trabalhar até se recuperarem."<br />
            <strong>CORRETA:</strong> "Cabe ao Estado ampliar a rede de Centros de Atenção
            Psicossocial (CAPS) por meio de investimento em saúde pública, com o objetivo
            de oferecer tratamento voluntário e humanizado para dependentes químicos,
            assegurando o direito constitucional à saúde e à dignidade."
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Checklist</span>
        <h2>9. Checklist de Revisão Final: 10 Itens</h2>
        <p>
          Antes de entregar sua redação, percorra mentalmente esta lista de verificação.
          Cada item que você deixar de checar pode custar pontos preciosos:
        </p>
        <div className="lesson-highlight">
          <h3>10 itens do checklist anti-erro</h3>
          <p>
            1. Meu texto tem mais de 7 linhas? |
            2. Escrevi em prosa dissertativa (sem poema, narrativa ou diálogo)? |
            3. Meu texto fala sobre o tema proposto (não sobre outro assunto)? |
            4. Existe uma tese clara na introdução? |
            5. Os dois parágrafos de desenvolvimento sustentam a tese com argumentos? |
            6. Há proposta de intervenção na conclusão? |
            7. A PI tem agente, ação, meio, finalidade e detalhe? |
            8. A PI respeita os direitos humanos (não propõe tortura, exclusão ou discriminação)? |
            9. Não usei linguagem ofensiva ou discriminatória? |
            10. Não escrevi meu nome ou outro sinal de identificação na folha?
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela completa</span>
        <h2>10. Tabela: Todos os Tipos de Erro e suas Consequências</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de erro</th>
                <th>Competência(s) afetada(s)</th>
                <th>Impacto na nota</th>
                <th>Como evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Injúria, calúnia, difamação</td>
                <td>Todas (anulação)</td>
                <td>0 em tudo</td>
                <td>Nunca ofenda pessoas ou grupos reais pelo nome</td>
              </tr>
              <tr>
                <td>Marcas de identificação</td>
                <td>Todas (anulação)</td>
                <td>0 em tudo</td>
                <td>Não escreva nome, número ou símbolos pessoais</td>
              </tr>
              <tr>
                <td>Cópia integral dos motivadores</td>
                <td>Todas (anulação)</td>
                <td>0 em tudo</td>
                <td>Produza seu próprio texto; só cite pequenos trechos</td>
              </tr>
              <tr>
                <td>Texto em branco ou menos de 7 linhas</td>
                <td>Todas</td>
                <td>0 em tudo</td>
                <td>Escreva ao menos 3 parágrafos — mesmo incompleto, é avaliável</td>
              </tr>
              <tr>
                <td>Tipo textual errado (narrativa/poema)</td>
                <td>Todas</td>
                <td>0 em tudo</td>
                <td>Escreva sempre em prosa dissertativa-argumentativa</td>
              </tr>
              <tr>
                <td>Fuga total ao tema</td>
                <td>C2</td>
                <td>Zero na C2</td>
                <td>Releia o tema antes de cada parágrafo</td>
              </tr>
              <tr>
                <td>PI que viola direitos humanos</td>
                <td>C5</td>
                <td>Zero na C5</td>
                <td>Prefira soluções educativas, preventivas e inclusivas</td>
              </tr>
              <tr>
                <td>Ausência de proposta de intervenção</td>
                <td>C5</td>
                <td>–160 pontos (máx.)</td>
                <td>Sempre escreva a PI com os 5 elementos</td>
              </tr>
              <tr>
                <td>Tangenciamento</td>
                <td>C2</td>
                <td>–80 a –120 pontos</td>
                <td>Foque no aspecto central do tema, não em periféricos</td>
              </tr>
              <tr>
                <td>Texto em um único bloco</td>
                <td>C3, C4</td>
                <td>–80 a –160 pontos</td>
                <td>Use paragrafação: introdução + 2 des. + conclusão</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Erros que Zeram a Redação</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🚫</span>
            <h3>Anulação total</h3>
            <p>Injúria, marcas de identificação e cópia integral dos motivadores = nota 0 em todas as competências.</p>
          </div>
          <div className="math-card">
            <span>📝</span>
            <h3>Texto não avaliável</h3>
            <p>Menos de 7 linhas, texto em branco, narrativa ou poema = 0 em tudo. Escreva sempre em prosa dissertativa.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Fuga ao tema = zero na C2</h3>
            <p>Escrever sobre outro assunto zera C2. Releia o tema antes de cada parágrafo.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>PI que viola DH = zero na C5</h3>
            <p>Tortura, discriminação, exclusão — nenhuma dessas medidas é aceitável como solução no ENEM.</p>
          </div>
          <div className="math-card">
            <span>✅</span>
            <h3>Use o checklist</h3>
            <p>10 itens de verificação antes de entregar — cada um pode salvar pontos preciosos.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Tangenciamento prejudica C2</h3>
            <p>Abordar aspecto periférico do tema não é fuga, mas penaliza C2. Foque no núcleo do tema.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Anulação vs. zero por competência"
          statement={
            <p>
              Qual das situações abaixo resulta em <strong>anulação total</strong> da
              redação (nota 0 em todas as competências), e não apenas em zero em uma
              competência específica?
            </p>
          }
          options={[
            { letter: "a", text: "A proposta de intervenção viola os direitos humanos ao propor tortura." },
            { letter: "b", text: "O candidato escreve sobre um tema diferente do proposto — fuga total ao tema." },
            { letter: "c", text: "O candidato escreve seu nome completo na folha de redação.", correct: true },
            { letter: "d", text: "A redação não tem proposta de intervenção na conclusão." },
          ]}
          resolution={
            <p>
              Escrever o nome na folha é uma "marca de identificação", o que resulta em
              anulação total da redação — nota 0 em todas as competências. A violação de
              DH na PI zera apenas a C5; a fuga ao tema zera a C2; a ausência de PI não
              zera, mas penaliza severamente a C5. Somente a identificação do candidato
              resulta em anulação completa junto com injúria, calúnia e cópia integral.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Texto não avaliável"
          statement={
            <p>
              Um candidato com dificuldades decidiu escrever um conto sobre um menino que
              supera a pobreza, em resposta ao tema "Pobreza e exclusão social no Brasil
              contemporâneo". O que acontece com essa redação?
            </p>
          }
          options={[
            { letter: "a", text: "É avaliada normalmente, pois o tema está relacionado ao problema da pobreza." },
            { letter: "b", text: "Recebe nota máxima, pois demonstra criatividade e capacidade narrativa do candidato." },
            { letter: "c", text: "Recebe nota zero em todas as competências, pois o tipo textual (narrativo) não é o solicitado pelo ENEM (dissertativo-argumentativo).", correct: true },
            { letter: "d", text: "Perde pontos apenas na Competência 3, pois as outras competências avaliam aspectos que independem do tipo textual." },
          ]}
          resolution={
            <p>
              O ENEM exige o tipo textual dissertativo-argumentativo. Narrativas, poemas,
              contos e diálogos são tipos textuais diferentes e, independentemente de sua
              qualidade literária, resultam em nota zero em todas as competências. O
              candidato deve sempre produzir um texto em prosa que defenda uma tese por
              meio de argumentos — isso é a dissertação argumentativa.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tangenciamento vs. fuga"
          statement={
            <p>
              O tema é "Desafios da saúde mental entre jovens brasileiros". Leia as duas
              situações: <strong>Situação A:</strong> o candidato escreve sobre "os problemas
              de saúde no Brasil, incluindo hipertensão, diabetes e doenças crônicas em
              idosos". <strong>Situação B:</strong> o candidato escreve sobre o uso problemático
              de redes sociais, mencionando brevemente que pode causar ansiedade, mas sem
              desenvolver o impacto na saúde mental dos jovens especificamente.
            </p>
          }
          options={[
            { letter: "a", text: "Situação A é tangenciamento; Situação B é fuga total." },
            { letter: "b", text: "Situação A é fuga total (outro assunto completamente); Situação B é tangenciamento (aborda aspecto relacionado, mas não o núcleo do tema).", correct: true },
            { letter: "c", text: "Ambas as situações são fuga total e resultam em zero na C2." },
            { letter: "d", text: "Ambas as situações são tangenciamento e recebem a mesma penalização." },
          ]}
          resolution={
            <p>
              A Situação A é fuga total: saúde de idosos e doenças crônicas não têm
              relação com saúde mental de jovens — outro assunto completamente diferente.
              Resultado: zero na C2. A Situação B é tangenciamento: redes sociais e saúde
              mental têm relação, mas o núcleo do tema (impactos específicos na saúde
              mental de jovens, causas, consequências) não foi desenvolvido. Resultado:
              penalização em C2, mas não zero.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Identificando a violação de DH"
          statement={
            <p>
              (Estilo ENEM) Em uma redação sobre
              <strong> tráfico de pessoas no Brasil</strong>, um candidato escreveu a
              seguinte PI: "O Estado deve criar campos de trabalho forçado para traficantes
              condenados, obrigando-os a trabalhar em condições difíceis como forma de
              punição exemplar e compensação à sociedade." Qual é o principal problema
              dessa proposta?
            </p>
          }
          options={[
            { letter: "a", text: "A proposta não indica qual agente implementaria a medida." },
            { letter: "b", text: "Trabalho forçado como punição é proibido pela Constituição Federal e pela Declaração Universal de DH, configurando violação que zera a Competência 5.", correct: true },
            { letter: "c", text: "A proposta é muito detalhada e deveria ser mais genérica." },
            { letter: "d", text: "O problema é que não menciona a finalidade da medida." },
          ]}
          resolution={
            <p>
              Trabalho forçado é vedado pela Constituição Federal (art. 5º, XLVII, que
              proíbe penas de trabalhos forçados) e pela Convenção 29 da OIT. Além disso,
              é uma forma de tratamento degradante vedada pela Declaração Universal de
              Direitos Humanos. Essa PI zera a Competência 5 independentemente dos demais
              elementos presentes (ação, finalidade etc.).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Aplicando o checklist"
          statement={
            <p>
              (Estilo ENEM) Antes de entregar sua redação, um candidato percorre mentalmente
              o checklist anti-zero e descobre que sua proposta de intervenção "faz sentido
              e resolve o problema, mas propõe que governos expulsem imigrantes sem
              documentação sem nenhum processo legal". O candidato deve:
            </p>
          }
          options={[
            { letter: "a", text: "Manter a proposta, pois é uma opinião legítima sobre imigração." },
            { letter: "b", text: "Reescrever apenas a última frase da PI para mencionar os DH." },
            { letter: "c", text: "Reescrever a PI para substituir a expulsão sem processo por medidas que respeitem o direito ao devido processo legal e à dignidade dos imigrantes, como políticas de regularização migratória.", correct: true },
            { letter: "d", text: "Entregar a redação assim, pois não há tempo para corrigir durante a prova." },
          ]}
          resolution={
            <p>
              Expulsão sem processo legal viola o direito ao devido processo (CF, art. 5º,
              LIV) e os princípios da dignidade humana e da não-discriminação. A solução
              correta é reescrever a PI com uma medida que resolva o problema (gestão da
              imigração irregular) sem violar DH — como "políticas de regularização
              migratória que assegurem o devido processo legal". É exatamente para isso que
              existe o checklist: identificar e corrigir antes de entregar.
            </p>
          }
        />
      </section>
    </article>
  );
}
