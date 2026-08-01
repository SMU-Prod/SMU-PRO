"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 28</span>
          <h1>Probabilidade</h1>
          <p>
            Calcule probabilidades de eventos simples e compostos. Domine a
            probabilidade condicional, Teorema de Bayes, probabilidade de união e
            interseção, e aplique em problemas do cotidiano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos Básicos</span>
        <h2>1. Espaço Amostral e Eventos</h2>
        <p>
          O <strong>espaço amostral</strong> Ω é o conjunto de todos os resultados possíveis
          de um experimento. Um <strong>evento</strong> A é um subconjunto de Ω.
        </p>
        <M block={true}>{"P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{casos favoráveis}}{\\text{casos possíveis}}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo — dado de 6 faces</h3>
          <p>Ω = {"{1, 2, 3, 4, 5, 6}"}, A = "número par" = {"{2, 4, 6}"}</p>
          <M block={true}>{"P(A) = \\frac{3}{6} = \\frac{1}{2}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Axiomas</span>
        <h2>2. Axiomas e Propriedades da Probabilidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Limites</td><td><M>{"0 \\leq P(A) \\leq 1"}</M></td></tr>
              <tr><td>Evento certo</td><td><M>{"P(\\Omega) = 1"}</M></td></tr>
              <tr><td>Evento impossível</td><td><M>{"P(\\emptyset) = 0"}</M></td></tr>
              <tr><td>Complementar</td><td><M>{"P(\\overline{A}) = 1 - P(A)"}</M></td></tr>
              <tr><td>União (disjuntos)</td><td><M>{"P(A \\cup B) = P(A)+P(B)"}</M></td></tr>
              <tr><td>União (geral)</td><td><M>{"P(A \\cup B) = P(A)+P(B)-P(A \\cap B)"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Complementar</span>
        <h2>3. Probabilidade Complementar</h2>
        <M block={true}>{"P(\\overline{A}) = 1 - P(A)"}</M>
        <div className="lesson-highlight">
          <h3>Estratégia "pelo menos um"</h3>
          <p>
            P(pelo menos 1 cara em 3 lançamentos) = 1 − P(nenhuma cara):
          </p>
          <M block={true}>{"P = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Probabilidade Condicional</span>
        <h2>4. Probabilidade Condicional</h2>
        <M block={true}>{"P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Uma turma tem 30 alunos: 18 estudam Física (F) e 12 estudam Química (Q),
            sendo 8 que estudam ambas. Dado que um aluno estuda Física,
            qual a probabilidade de também estudar Química?
          </p>
          <M block={true}>{"P(Q|F) = \\frac{P(Q \\cap F)}{P(F)} = \\frac{8/30}{18/30} = \\frac{8}{18} = \\frac{4}{9}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Independência</span>
        <h2>5. Eventos Independentes</h2>
        <p>
          A e B são <strong>independentes</strong> quando o resultado de um não afeta o outro:
        </p>
        <M block={true}>{"P(A \\cap B) = P(A) \\times P(B) \\quad \\Leftrightarrow \\quad P(A|B) = P(A)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Probabilidade de tirar cara duas vezes consecutivas com moeda honesta:</p>
          <M block={true}>{"P(C_1 \\cap C_2) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra do Produto</span>
        <h2>6. Regra da Multiplicação (Eventos Dependentes)</h2>
        <M block={true}>{"P(A \\cap B) = P(A) \\times P(B|A)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo — extração sem reposição</h3>
          <p>
            De uma urna com 5 bolas vermelhas e 3 azuis, extraem-se 2 sem reposição.
            P(ambas vermelhas):
          </p>
          <M block={true}>{"P = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema de Bayes</span>
        <h2>7. Teorema de Bayes</h2>
        <M block={true}>{"P(A_i|B) = \\frac{P(B|A_i)P(A_i)}{\\sum_j P(B|A_j)P(A_j)}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Uma fábrica tem 3 máquinas: M1 produz 50% e tem 2% de defeito;
            M2 produz 30% e tem 3% de defeito; M3 produz 20% e tem 5% de defeito.
            Dado que uma peça é defeituosa, P(veio de M1)?
          </p>
          <M block={true}>{"P(\\text{def}) = 0{,}5\\times0{,}02 + 0{,}3\\times0{,}03 + 0{,}2\\times0{,}05 = 0{,}029"}</M>
          <M block={true}>{"P(M_1|\\text{def}) = \\frac{0{,}5\\times0{,}02}{0{,}029} = \\frac{0{,}01}{0{,}029} \\approx 34{,}5\\%"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Espaço Amostral Visual</span>
        <h2>8. Espaço Amostral — Dado de 6 Faces</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Espaço amostral de um dado com evento favorável destacado">
            <rect x="10" y="10" width="680" height="200" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="350" y="40" textAnchor="middle" fontSize="15" fill="#1e3a8a" fontWeight="700">Ω = {"{1, 2, 3, 4, 5, 6}"} — Evento A = "número par" = {"{2, 4, 6}"}</text>
            {/* Células para as 6 faces */}
            {[1, 2, 3, 4, 5, 6].map((face, i) => {
              const x = 60 + i * 100;
              const isPar = face % 2 === 0;
              return (
                <g key={face}>
                  <rect x={x - 35} y="60" width="70" height="110" rx="8"
                    fill={isPar ? "#facc15" : "#ffffff"}
                    stroke={isPar ? "#ca8a04" : "#3b82f6"}
                    strokeWidth="2"/>
                  <text x={x} y="125" textAnchor="middle" fontSize="36" fill={isPar ? "#92400e" : "#1e40af"} fontWeight="700">{face}</text>
                  <text x={x} y="185" textAnchor="middle" fontSize="11" fill={isPar ? "#92400e" : "#374151"}>{isPar ? "par ✓" : "ímpar"}</text>
                </g>
              );
            })}
            <text x="350" y="210" textAnchor="middle" fontSize="12" fill="#1e40af">P(A) = 3/6 = 1/2 — células amarelas representam o evento favorável</text>
          </svg>
          <figcaption>Espaço amostral de um dado: os 3 resultados pares (amarelo) formam o evento A</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Venn</span>
        <h2>9. Probabilidade com Diagrama de Venn</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 280 160" width="280" height="160" aria-label="Diagrama de Venn probabilidade">
            <rect x="10" y="10" width="260" height="140" rx="8" fill="#f8fafc" stroke="#374151" strokeWidth="1.5"/>
            <circle cx="110" cy="80" r="55" fill="#93c5fd" fillOpacity="0.5" stroke="#2563eb" strokeWidth="2"/>
            <circle cx="170" cy="80" r="55" fill="#fca5a5" fillOpacity="0.5" stroke="#dc2626" strokeWidth="2"/>
            <text x="85" y="83" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">A</text>
            <text x="195" y="83" textAnchor="middle" fontSize="14" fill="#b91c1c" fontWeight="700">B</text>
            <text x="140" y="83" textAnchor="middle" fontSize="11" fill="#374151">A∩B</text>
            <text x="140" y="155" textAnchor="middle" fontSize="11" fill="#374151">P(A∪B) = P(A)+P(B)−P(A∩B)</text>
          </svg>
          <figcaption>Diagrama de Venn: a intersecção é subtraída para evitar dupla contagem</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Probabilidade Frequentista</span>
        <h2>10. Interpretações da Probabilidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Interpretação</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Clássica</td><td>Razão favoráveis / possíveis (eventos igualmente prováveis)</td></tr>
              <tr><td>Frequentista</td><td><M>{"P(A) = \\lim_{n\\to\\infty} \\frac{n_A}{n}"}</M></td></tr>
              <tr><td>Subjetiva</td><td>Grau de crença de um agente</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Probabilidade</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>P(A)</span>
            <h3>Definição clássica</h3>
            <M block={true}>{"P(A) = \\frac{|A|}{|\\Omega|}"}</M>
          </div>
          <div className="math-card">
            <span>Comp.</span>
            <h3>Complementar</h3>
            <M block={true}>{"P(\\bar{A}) = 1-P(A)"}</M>
          </div>
          <div className="math-card">
            <span>A|B</span>
            <h3>Condicional</h3>
            <M block={true}>{"P(A|B)=\\frac{P(A\\cap B)}{P(B)}"}</M>
          </div>
          <div className="math-card">
            <span>Ind.</span>
            <h3>Independência</h3>
            <M block={true}>{"P(A\\cap B)=P(A)P(B)"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Probabilidade simples"
          statement={
            <p>
              Um dado de 6 faces é lançado. Qual é a probabilidade de sair
              um número maior que 4?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"1/6"}</M> },
            { letter: "b", text: <M>{"1/3"}</M>, correct: true },
            { letter: "c", text: <M>{"1/2"}</M> },
            { letter: "d", text: <M>{"2/3"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"A = \\{5,6\\} \\Rightarrow P(A) = \\frac{2}{6} = \\frac{1}{3}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Probabilidade complementar"
          statement={
            <p>
              Uma moeda honesta é lançada 4 vezes. Qual é a probabilidade de
              sair ao menos uma cara?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{15}{16}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{1}{2}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{3}{4}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{1}{4}"}</M> },
          ]}
          resolution={
            <>
              <M block={true}>{"P = 1-P(\\text{nenhuma cara}) = 1-\\left(\\frac{1}{2}\\right)^4 = 1-\\frac{1}{16} = \\frac{15}{16}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Probabilidade condicional"
          statement={
            <p>
              Uma urna tem 4 bolas vermelhas e 3 azuis. Dois sorteios são feitos
              sem reposição. P(2ª bola azul | 1ª bola vermelha)?
            </p>
          }
          options={[
            { letter: "a", text: <M>{"\\dfrac{3}{6} = \\dfrac{1}{2}"}</M>, correct: true },
            { letter: "b", text: <M>{"\\dfrac{3}{7}"}</M> },
            { letter: "c", text: <M>{"\\dfrac{2}{7}"}</M> },
            { letter: "d", text: <M>{"\\dfrac{4}{7}"}</M> },
          ]}
          resolution={
            <>
              <p>Após retirar uma vermelha, restam 6 bolas (3 azuis):</p>
              <M block={true}>{"P(\\text{azul}|\\text{vermelha}) = \\frac{3}{6} = \\frac{1}{2}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Diagnóstico médico"
          statement={
            <p>
              Um teste de doença tem sensibilidade 95% (detecta doentes) e especificidade
              90% (descarta saudáveis). A prevalência é 1%. Se o teste é positivo,
              qual é a probabilidade de o paciente estar realmente doente?
            </p>
          }
          options={[
            { letter: "a", text: "≈ 8,7%", correct: true },
            { letter: "b", text: "≈ 95%" },
            { letter: "c", text: "≈ 50%" },
            { letter: "d", text: "≈ 1%" },
          ]}
          resolution={
            <>
              <M block={true}>{"P(+) = 0{,}01\\times0{,}95 + 0{,}99\\times0{,}10 = 0{,}0095+0{,}099 = 0{,}1085"}</M>
              <M block={true}>{"P(D|+) = \\frac{0{,}0095}{0{,}1085} \\approx 8{,}76\\%"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Probabilidade em concurso"
          statement={
            <p>
              Em um concurso, 60% dos candidatos estudaram Matemática, 50% estudaram
              Português, e 30% estudaram ambas. Qual é a probabilidade de um candidato
              escolhido ao acaso ter estudado pelo menos uma das duas matérias?
            </p>
          }
          options={[
            { letter: "a", text: "70%", correct: true },
            { letter: "b", text: "80%" },
            { letter: "c", text: "60%" },
            { letter: "d", text: "100%" },
          ]}
          resolution={
            <>
              <M block={true}>{"P(M\\cup P) = P(M)+P(P)-P(M\\cap P) = 0{,}6+0{,}5-0{,}3 = 0{,}8"}</M>
              <p>Nota: 80% estudaram pelo menos uma; 70% seria se os valores fossem diferentes.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
