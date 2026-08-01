"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Redação • Aula 18</span>
          <h1>Estratégias para Nota 1000</h1>
          <p>
            Descubra o que diferencia uma redação nota 1000 de uma nota 800 — com
            estratégias concretas por competência, frases que impressionam o corretor,
            a técnica da tese em espelho e o modelo de gestão de tempo que maximiza
            sua pontuação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O que é nota 1000</span>
        <h2>1. O que Separa 900 de 1000</h2>
        <p>
          A diferença entre 900 e 1000 raramente está em um único elemento. Ela resulta
          da excelência simultânea em todas as competências — especialmente nas mais
          difíceis de maximizar: C2 (repertório produtivo e profundo), C3 (argumento
          causal com análise real) e C5 (PI com todos os 5 elementos e menção explícita
          a DH). Redações nota 900 normalmente têm uma competência com 160 em vez de 200.
          Redações nota 1000 atingem 200 em todas.
        </p>
        <div className="lesson-highlight">
          <h3>Os cinco pilares da nota 1000</h3>
          <p>
            C1 (200): zero erros gramaticais perceptíveis, pontuação variada, ortografia
            impecável. |
            C2 (200): repertório produtivo de pelo menos dois tipos (filosófico + dado, ou
            histórico + literário), integrado ao argumento. |
            C3 (200): dois argumentos de causa+consequência com análise profunda — não
            apenas afirmações. |
            C4 (200): coesão sofisticada entre todos os parágrafos, conectivos variados,
            referenciação sem repetição. |
            C5 (200): PI com os 5 elementos + menção explícita a direitos humanos.
          </p>
        </div>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 210" width="480" height="210" aria-label="Gráfico radar comparando redação nota 1000, 800 e 600 nas 5 competências">
            <rect width="480" height="210" fill="#f8fafc" rx="10" />
            {/* Labels for axes */}
            <text x="240" y="18" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">C1 — Norma Culta</text>
            <text x="448" y="105" textAnchor="end" fill="#1e293b" fontSize="10">C2</text>
            <text x="390" y="193" textAnchor="middle" fill="#1e293b" fontSize="10">C3</text>
            <text x="90" y="193" textAnchor="middle" fill="#1e293b" fontSize="10">C4</text>
            <text x="32" y="105" textAnchor="start" fill="#1e293b" fontSize="10">C5</text>
            {/* Center point */}
            <circle cx="240" cy="105" r="2" fill="#94a3b8" />
            {/* Grid circles */}
            <circle cx="240" cy="105" r="25" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="240" cy="105" r="50" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="240" cy="105" r="75" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            {/* Axes */}
            <line x1="240" y1="30" x2="240" y2="105" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="240" y1="105" x2="315" y2="180" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="240" y1="105" x2="165" y2="180" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="240" y1="105" x2="168" y2="62" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="240" y1="105" x2="312" y2="62" stroke="#cbd5e1" strokeWidth="1" />
            {/* Nota 1000 polygon (outer) - full 75px */}
            <polygon points="240,30 315,62 315,180 165,180 165,62" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="2" />
            {/* Nota 800 polygon (middle) - ~56px */}
            <polygon points="240,49 299,74 299,160 181,160 181,74" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="2" />
            {/* Nota 600 polygon (inner) - ~37px */}
            <polygon points="240,68 277,86 277,142 203,142 203,86" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="2" />
            {/* Legend */}
            <rect x="310" y="20" width="14" height="10" fill="rgba(59,130,246,0.4)" stroke="#3b82f6" />
            <text x="328" y="30" fill="#3b82f6" fontSize="10">Nota 1000</text>
            <rect x="310" y="38" width="14" height="10" fill="rgba(16,185,129,0.4)" stroke="#10b981" />
            <text x="328" y="48" fill="#10b981" fontSize="10">Nota 800</text>
            <rect x="310" y="56" width="14" height="10" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" />
            <text x="328" y="66" fill="#f59e0b" fontSize="10">Nota 600</text>
          </svg>
          <figcaption>Perfil comparativo de redações nota 1000, 800 e 600 nas cinco competências — a nota 1000 preenche o diagrama completo em todas as dimensões.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">C1 — 1000</span>
        <h2>2. Estratégia C1 (200 pontos): Precisão Gramatical</h2>
        <p>
          A Competência 1 avalia o domínio da norma culta escrita. Para chegar ao nível
          200, não basta evitar erros graves — é necessário demonstrar <strong>variedade
          e controle</strong> das estruturas da língua portuguesa.
        </p>
        <div className="lesson-highlight">
          <h3>O que fazer para 200 em C1</h3>
          <p>
            1. Escreva com cuidado — não apresse. Um erro de concordância por pressa vale
            menos que uma frase bem construída escrita com atenção. |
            2. Varie a pontuação: use vírgulas, ponto e vírgula, dois pontos e travessão
            com precisão. |
            3. Evite rasuras excessivas. Use linhas simples para corrigir — não cubra com
            garatujas. |
            4. Construa frases de diferentes comprimentos: curtas para efeito, longas para
            análise. |
            5. Revise os últimos 10 minutos focando especificamente em concordância verbal
            e nominal.
          </p>
        </div>
        <p>
          O erro mais comum que impede 200 em C1 é a concordância com sujeito posposto:
          "Existem várias causas..." (correto) vs. "Existe várias causas..." (erro). Outro
          é a regência de verbos como "assistir" (assistir <em>a</em> um filme) e "implicar"
          (implicar <em>em</em> algo).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">C2 — 1000</span>
        <h2>3. Estratégia C2 (200 pontos): Repertório Integrado, Não Decorado</h2>
        <p>
          A diferença entre 160 e 200 na C2 está quase sempre na profundidade com que o
          repertório é integrado ao argumento. No nível 160, o candidato apresenta um
          bom repertório mas não o explica com precisão ou não o conecta explicitamente
          ao tema. No nível 200, o repertório é tão bem integrado que pareceria uma
          lacuna no texto se fosse removido.
        </p>
        <div className="lesson-highlight">
          <h3>O teste do repertório 200 pontos</h3>
          <p>
            "Se eu remover essa frase com o repertório, o argumento fica mais fraco?"
            Se sim, o repertório é produtivo e contribui para C2. Se não — se o argumento
            ficaria igual sem ele — o repertório é decorativo e não vale 200 pontos.
          </p>
        </div>
        <p>
          Para garantir C2 máxima, use pelo menos dois tipos de repertório diferentes
          (ex: filosófico + dado científico) em diferentes parágrafos, com cada um
          explicitamente conectado ao argumento e ao tema.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">C3 — 1000</span>
        <h2>4. Estratégia C3 (200 pontos): Profundidade Causal Real</h2>
        <p>
          A Competência 3 avalia a seleção, organização e interpretação das informações.
          Para 200 pontos, cada argumento precisa funcionar como uma análise — não apenas
          uma afirmação. A estrutura ideal é:
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura de argumento C3 nota 1000</h3>
          <p>
            <strong>[Tópico frasal:]</strong> afirmação do argumento central do parágrafo. |
            <strong>[Causa:]</strong> por que esse problema existe? Qual é a raiz? |
            <strong>[Repertório:]</strong> qual referência cultural apoia essa análise? |
            <strong>[Consequência:]</strong> quem é afetado e como? Qual é o impacto real? |
            <strong>[Análise crítica:]</strong> por que isso é grave, injusto ou urgente? |
            <strong>[Fechamento:]</strong> conexão explícita à tese.
          </p>
        </div>
        <p>
          O que separa 160 de 200 em C3 é o passo da "análise crítica" — uma ou duas
          frases que vão além de descrever o problema e avaliam sua gravidade, ironia,
          contradição ou urgência. Esse é o diferencial das redações que os corretores
          classificam como "de alta maturidade argumentativa".
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">C4 — 1000</span>
        <h2>5. Estratégia C4 (200 pontos): Coesão Sofisticada</h2>
        <p>
          A Competência 4 avalia a coesão textual — os mecanismos linguísticos que
          conectam as partes do texto. Para 200 pontos, a coesão precisa ser
          <strong> sofisticada</strong>: vai além de conectivos simples e inclui
          referenciação anafórica e catafórica, retomada lexical variada e transições
          entre parágrafos.
        </p>
        <div className="lesson-highlight">
          <h3>Técnicas de coesão nível 1000</h3>
          <p>
            1. <strong>Conectivos variados:</strong> não use "além disso" em todos os
            parágrafos. Alterne com "ademais", "outrossim" (formal), "nesse sentido",
            "sob essa perspectiva", "em decorrência disso". |
            2. <strong>Referenciação anafórica:</strong> use "tal situação", "esse cenário",
            "essa realidade" para retomar o parágrafo anterior sem repetir as palavras. |
            3. <strong>Transição entre parágrafos:</strong> a primeira frase do segundo
            parágrafo de desenvolvimento deve estabelecer relação com o primeiro (adição,
            contraste, consequência ou exemplificação). |
            4. <strong>Pronomes demonstrativos:</strong> "essa problemática", "tal fenômeno",
            "o referido contexto" — evitam repetição e criam encadeamento lógico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">C5 — 1000</span>
        <h2>6. Estratégia C5 (200 pontos): PI Completa com Menção a DH</h2>
        <p>
          A Competência 5 é a mais "mecânica" de maximizar — basta seguir a estrutura
          correta. Para 200 pontos, a PI precisa ter todos os 5 elementos obrigatórios
          E uma menção explícita aos direitos humanos ou constitucionais:
        </p>
        <div className="lesson-highlight">
          <h3>Os 5 elementos + menção a DH</h3>
          <p>
            <strong>[Agente]</strong> Cabe ao Ministério da Educação |
            <strong>[Ação]</strong> implementar programas curriculares de educação financeira |
            <strong>[Meio]</strong> por meio de parcerias com o setor privado e formação
            continuada de professores |
            <strong>[Finalidade]</strong> com o objetivo de reduzir a vulnerabilidade econômica
            das famílias de baixa renda |
            <strong>[Detalhe]</strong> priorizando escolas públicas de regiões com maior índice de
            inadimplência |
            <strong>[DH]</strong> em respeito ao direito constitucional à educação de qualidade
            e à dignidade humana (CF/88, art. 205).
          </p>
        </div>
        <p>
          Note que cada elemento deve ser explícito e específico. "O governo deve agir"
          não tem agente específico, ação definida, meio claro nem finalidade precisa —
          vale no máximo 40 pontos em C5.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Léxico elevado</span>
        <h2>7. Frases que Impressionam o Corretor</h2>
        <p>
          O nível lexical do texto contribui para a C1 e demonstra domínio da modalidade
          escrita formal. Mas "impressionar" não significa usar palavras raras — significa
          usar o vocabulário formal com precisão e naturalidade. Estas são as estruturas
          que corretores associam a redações de alto nível:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão informal (evite)</th>
                <th>Equivalente formal (use)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"muita gente sofre com isso"</td>
                <td>"parcela expressiva da população é afetada por tal realidade"</td>
              </tr>
              <tr>
                <td>"o governo não faz nada"</td>
                <td>"o Estado falha em sua função protetora ao se omitir diante desse cenário"</td>
              </tr>
              <tr>
                <td>"isso é muito grave"</td>
                <td>"esse quadro configura uma violação sistemática de direitos fundamentais"</td>
              </tr>
              <tr>
                <td>"precisa resolver o problema"</td>
                <td>"faz-se imperativa a adoção de medidas estruturais que enfrentem as raízes do problema"</td>
              </tr>
              <tr>
                <td>"desde antigamente"</td>
                <td>"ao longo de décadas / historicamente / desde o período colonial"</td>
              </tr>
              <tr>
                <td>"todo mundo sabe que"</td>
                <td>"é amplamente documentado que / dados empíricos demonstram que"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tese em espelho</span>
        <h2>8. Técnica da "Tese em Espelho": Retomar na Conclusão</h2>
        <p>
          Uma das marcas das redações nota 1000 é a coesão global entre introdução e
          conclusão. A técnica da "tese em espelho" consiste em retomar a tese da
          introdução na conclusão, com palavras diferentes mas sentido equivalente,
          criando um efeito de encerramento elegante e coeso.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo de tese em espelho</h3>
          <p>
            <strong>Tese na introdução:</strong> "A violência contra a mulher no Brasil
            é perpetuada pela convergência de uma cultura machista historicamente
            enraizada e pela insuficiência das políticas públicas de proteção."
          </p>
          <p>
            <strong>Retomada na conclusão (espelho):</strong> "Portanto, para que o
            ciclo de violência que vitimiza mulheres brasileiras seja efetivamente
            rompido, torna-se imperativo que Estado e sociedade atuem simultaneamente:
            o primeiro, fortalecendo os mecanismos de proteção; a segunda, desconstruindo
            os valores que normalizam a opressão de gênero."
          </p>
        </div>
        <p>
          Note que a conclusão não repete as palavras da introdução, mas reconstrói a
          mesma ideia central com estrutura diferente, acrescentando a proposta de
          intervenção. Isso demonstra domínio argumentativo e produz uma redação com
          unidade temática perfeita.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gestão de tempo</span>
        <h2>9. Gestão de Tempo para Redação Nota 1000</h2>
        <p>
          Os candidatos com maior sucesso no ENEM seguem uma distribuição de tempo
          rigorosa que garante planejamento, escrita cuidadosa e revisão final:
        </p>
        <div className="lesson-highlight">
          <h3>Distribuição ideal (60 minutos totais para redação)</h3>
          <p>
            <strong>10–15 min — Planejamento:</strong> leia o tema 3 vezes, sublinhe
            palavras-chave, defina a tese, escolha 2 argumentos, escolha repertório para
            cada argumento, defina o agente e a ação da PI. Escreva um esqueleto no
            rascunho. |
            <strong>35–40 min — Escrita:</strong> escreva com atenção, um parágrafo de
            cada vez, retomando o plano. Não escreva rápido demais — qualidade supera
            velocidade no ENEM. |
            <strong>10 min — Revisão:</strong> releia tudo focando em: concordância
            verbal, crase, pontuação, fuga ao tema, completude da PI, respeito a DH.
          </p>
        </div>
        <p>
          O erro mais comum de gestão de tempo é pular o planejamento e começar a escrever
          imediatamente. Candidatos que planejam 15 minutos produzem textos mais coesos,
          com menos erros de fuga e com PI mais completa do que candidatos que escrevem
          sem planejamento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>10. O que 1000, 800 e 600 Parecem em Cada Competência</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Competência</th>
                <th>Nota 1000 (200/200)</th>
                <th>Nota 800 (160/200)</th>
                <th>Nota 600 (120/200)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C1 — Norma culta</td>
                <td>Zero erros perceptíveis; pontuação variada; construções sofisticadas</td>
                <td>Erros raros e isolados; boa pontuação; vocabulário formal adequado</td>
                <td>Erros pontuais recorrentes (concordância, crase); vocabulário básico</td>
              </tr>
              <tr>
                <td>C2 — Repertório</td>
                <td>2+ tipos de repertório produtivo, explicado e integrado ao argumento</td>
                <td>1 repertório bem usado; outro mencionado mas pouco desenvolvido</td>
                <td>Repertório presente mas superficial ou sem conexão clara ao tema</td>
              </tr>
              <tr>
                <td>C3 — Argumentação</td>
                <td>2 argumentos causais com análise crítica profunda e conexão à tese</td>
                <td>2 argumentos com causa ou consequência; análise presente mas breve</td>
                <td>Argumentos afirmativos sem análise causal; repetição de ideias</td>
              </tr>
              <tr>
                <td>C4 — Coesão</td>
                <td>Conectivos variados; referenciação sofisticada; transições entre parágrafos</td>
                <td>Conectivos adequados mas repetitivos; boa coesão sem variedade</td>
                <td>Conectivos básicos (além disso, portanto); poucos mecanismos de referenciação</td>
              </tr>
              <tr>
                <td>C5 — PI</td>
                <td>5 elementos + menção explícita a DH; linguagem elaborada</td>
                <td>4–5 elementos; menção a DH ausente ou vaga</td>
                <td>3 elementos; PI genérica sem detalhamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Estratégias para Nota 1000</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⏱️</span>
            <h3>Planeje antes de escrever</h3>
            <p>15 minutos de planejamento valem mais do que 15 minutos de escrita extra sem direção.</p>
          </div>
          <div className="math-card">
            <span>📚</span>
            <h3>Dois tipos de repertório</h3>
            <p>Use filosófico + dado científico, ou histórico + literário — diversidade eleva a C2 para 200.</p>
          </div>
          <div className="math-card">
            <span>🔍</span>
            <h3>Análise crítica na C3</h3>
            <p>Vá além de descrever — avalie por que o problema é grave, urgente ou contraditório.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Coesão sofisticada na C4</h3>
            <p>Varie conectivos, use referenciação anafórica e escreva frase de transição entre parágrafos.</p>
          </div>
          <div className="math-card">
            <span>✅</span>
            <h3>PI com 5 elementos + DH</h3>
            <p>Agente + ação + meio + finalidade + detalhe + "...de modo a garantir o direito a..." = C5 máxima.</p>
          </div>
          <div className="math-card">
            <span>🪞</span>
            <h3>Técnica da tese em espelho</h3>
            <p>Retome a tese na conclusão com outras palavras — cria unidade e demonstra controle argumentativo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O que separa 900 de 1000"
          statement={
            <p>
              A diferença principal entre uma redação nota 900 e uma nota 1000 no ENEM
              está em:
            </p>
          }
          options={[
            { letter: "a", text: "O número de parágrafos: redações nota 1000 têm mais parágrafos que as nota 900." },
            { letter: "b", text: "A excelência simultânea em todas as cinco competências — uma redação nota 900 geralmente tem pelo menos uma competência com 160 em vez de 200.", correct: true },
            { letter: "c", text: "O uso de palavras mais difíceis e sofisticadas que demonstram erudição." },
            { letter: "d", text: "A quantidade de filósofos citados na redação — quanto mais, melhor." },
          ]}
          resolution={
            <p>
              A nota 1000 exige 200 pontos em todas as cinco competências. Redações nota
              900 geralmente têm uma competência com 160 — mais comum: C2 (repertório não
              totalmente produtivo), C3 (argumento sem análise profunda) ou C5 (PI com
              quatro elementos em vez de cinco). A estratégia para sair de 900 para 1000
              é identificar qual competência está em 160 e maximizá-la.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Estrutura do argumento C3 nota 1000"
          statement={
            <p>
              Para garantir nota máxima na Competência 3, um parágrafo de desenvolvimento
              precisa necessariamente incluir:
            </p>
          }
          options={[
            { letter: "a", text: "Uma citação filosófica longa que demonstre erudição e domínio do assunto." },
            { letter: "b", text: "Tópico frasal, causa do problema, repertório integrado, consequência social e análise crítica que conecta à tese.", correct: true },
            { letter: "c", text: "Três exemplos concretos do problema em diferentes regiões do Brasil." },
            { letter: "d", text: "Uma proposta de solução parcial que antecipe a proposta de intervenção da conclusão." },
          ]}
          resolution={
            <p>
              A estrutura de argumento nota 1000 na C3 segue a cadeia: tópico frasal →
              causa → repertório → consequência → análise crítica → conexão à tese. O
              elemento diferencial é a "análise crítica" — frases que avaliam a gravidade,
              urgência ou ironia do problema, demonstrando maturidade argumentativa. Sem
              esse elemento, o argumento se mantém na descrição e não atinge 200 pontos
              na C3.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Técnica da tese em espelho"
          statement={
            <p>
              A "técnica da tese em espelho" consiste em:
            </p>
          }
          options={[
            { letter: "a", text: "Copiar a tese da introdução literalmente na conclusão para criar simetria textual." },
            { letter: "b", text: "Retomar a ideia central da tese na conclusão com palavras e estrutura diferentes, criando unidade argumentativa sem repetição.", correct: true },
            { letter: "c", text: "Usar a mesma citação filosófica da introdução na conclusão para criar coesão circular." },
            { letter: "d", text: "Apresentar uma tese contrária na conclusão para demonstrar capacidade de ver múltiplas perspectivas." },
          ]}
          resolution={
            <p>
              A tese em espelho não é cópia — é reconstrução. A ideia central é preservada,
              mas as palavras, a estrutura sintática e o ângulo mudam. Na introdução, a tese
              identifica o problema e suas causas; na conclusão, ela aparece reconvertida como
              fundamento da proposta de intervenção. Isso cria a unidade global do texto
              avaliada pela C4.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. PI completa com DH"
          statement={
            <p>
              (Estilo ENEM) Qual das propostas de intervenção a seguir está mais próxima
              do padrão nota 1000 na Competência 5?
            </p>
          }
          options={[
            { letter: "a", text: "'O governo deve resolver o problema da violência contra a mulher com urgência.'" },
            { letter: "b", text: "'É necessário que a sociedade se conscientize sobre a gravidade da violência doméstica no Brasil.'" },
            { letter: "c", text: "'Cabe ao Poder Executivo, em parceria com ONGs especializadas, ampliar a rede de Casas da Mulher Brasileira nos municípios com maior incidência de feminicídio, por meio de repasse de recursos do Fundo Nacional de Segurança Pública, com o objetivo de oferecer atendimento psicológico, jurídico e de requalificação profissional às vítimas, garantindo o direito constitucional à vida digna e à integridade física das mulheres brasileiras.'", correct: true },
            { letter: "d", text: "'Devemos criar leis mais rígidas contra violência doméstica, pois as atuais são insuficientes.'" },
          ]}
          resolution={
            <p>
              A alternativa C é a única que apresenta todos os cinco elementos: agente
              (Poder Executivo + ONGs), ação (ampliar rede de Casas da Mulher), meio
              (repasse de recursos do FNSP), finalidade (atendimento a vítimas), detalhe
              (municípios com maior incidência de feminicídio), e menção explícita a DH
              ("direito constitucional à vida digna e à integridade física"). As demais
              são vagas, sem agente específico ou mecanismo definido.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gestão de tempo na prova"
          statement={
            <p>
              (Estilo ENEM) Um candidato tem 60 minutos para escrever sua redação. Ele
              decide pular o planejamento e começar a escrever imediatamente. Qual é o
              principal risco desse comportamento?
            </p>
          }
          options={[
            { letter: "a", text: "Não há risco — quem escreve mais rápido tem mais tempo para revisar." },
            { letter: "b", text: "O candidato pode escrever mais parágrafos que o necessário, tornando o texto muito longo." },
            { letter: "c", text: "Sem planejamento, o candidato tende a perder o fio argumentativo, tangenciar o tema, esquecer elementos da PI e usar repertório de forma desorganizada — comprometendo C2, C3 e C5.", correct: true },
            { letter: "d", text: "O candidato pode acabar antes do tempo e não saber como usar os minutos restantes." },
          ]}
          resolution={
            <p>
              O planejamento (10–15 minutos) define o destino de toda a redação. Candidatos
              que planejam chegam ao terceiro parágrafo sabendo qual será o argumento,
              qual repertório usarão e o que estará na PI. Candidatos que pulam o
              planejamento frequentemente descobrem na metade da redação que não têm
              argumento para o segundo parágrafo, ou que a PI é genérica demais.
              O tempo "ganho" pulando o planejamento é gasto em reescrita e revisão
              desnecessária.
            </p>
          }
        />
      </section>
    </article>
  );
}
