"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 16</span>

          <h1>Período Simples</h1>

          <p>
            O período simples é formado por uma única oração — uma única estrutura
            verbal completa. Dominar seus termos essenciais, integrantes e acessórios
            é condição indispensável para acertar questões de sintaxe no ENEM e nos
            principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O que é Período Simples?</h2>

        <p>
          Um <strong>período</strong> é um enunciado gramatical completo, delimitado
          por ponto final, ponto de exclamação, ponto de interrogação ou reticências.
          Quando esse enunciado contém <em>uma única oração</em> — isto é, um único
          verbo (ou locução verbal) com todos os seus termos —, chamamos de{" "}
          <strong>período simples</strong>.
        </p>

        <div className="math-block">
          <p>
            <strong>Exemplos de período simples:</strong>
          </p>
          <p>
            "O menino <em>correu</em> rapidamente." — um verbo: <em>correu</em>.
          </p>
          <p>
            "A professora <em>explicou</em> a matéria com clareza." — um verbo:{" "}
            <em>explicou</em>.
          </p>
          <p>
            "Estudar diariamente <em>é</em> fundamental." — um verbo: <em>é</em>.
          </p>
        </div>

        <p>
          A <strong>oração</strong>, por sua vez, é toda construção que possui verbo
          ou locução verbal. Os termos que compõem a oração se dividem em:{" "}
          <em>essenciais</em> (sujeito e predicado), <em>integrantes</em> (complementos
          verbais e nominal) e <em>acessórios</em> (adjuntos adnominal e adverbial, aposto
          e vocativo).
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 180"
            width="700"
            height="180"
            aria-label="Diagrama: estrutura do período simples com uma única oração"
          >
            <rect x="10" y="10" width="680" height="160" rx="12" fill="#f0f4ff" stroke="#6366f1" strokeWidth="2" />
            <text x="350" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">PERÍODO SIMPLES</text>
            <rect x="50" y="60" width="600" height="90" rx="10" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
            <text x="350" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4338ca">UMA ÚNICA ORAÇÃO</text>
            <rect x="70" y="92" width="170" height="46" rx="8" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1" />
            <text x="155" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3730a3">SUJEITO</text>
            <text x="155" y="128" textAnchor="middle" fontSize="11" fill="#4338ca">(de quem se fala)</text>
            <rect x="260" y="92" width="170" height="46" rx="8" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1" />
            <text x="345" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3730a3">PREDICADO</text>
            <text x="345" y="128" textAnchor="middle" fontSize="11" fill="#4338ca">(o que se fala)</text>
            <rect x="450" y="92" width="170" height="46" rx="8" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1" />
            <text x="535" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3730a3">TERMOS</text>
            <text x="535" y="128" textAnchor="middle" fontSize="11" fill="#4338ca">ACESSÓRIOS</text>
          </svg>
          <figcaption>Estrutura interna do período simples.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Essenciais</span>
        <h2>2. Sujeito e Suas Classificações</h2>

        <p>
          O <strong>sujeito</strong> é o ser sobre o qual o predicado declara algo.
          Concorda em número e pessoa com o verbo. Pode ser simples, composto,
          desinencial, indeterminado ou inexistente (oração sem sujeito).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Sujeito Simples</h3>
            <p>Possui um único núcleo nominal. "A <strong>aluna</strong> estudou." — núcleo: <em>aluna</em>.</p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Sujeito Composto</h3>
            <p>Dois ou mais núcleos. "<strong>Ana e Pedro</strong> chegaram." — núcleos: <em>Ana</em> e <em>Pedro</em>.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Sujeito Desinencial</h3>
            <p>Não expresso, identificado pela desinência verbal. "<em>Chegamos</em> cedo." — sujeito: <em>nós</em> (1ª pl.).</p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Sujeito Indeterminado</h3>
            <p>Existe mas não é identificável. Verbo na 3ª pl. ou com <em>se</em> + verbo intransitivo. "Precisa-se de costureiras."</p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Oração Sem Sujeito</h3>
            <p>Verbos impessoais: meteorológicos (<em>chove</em>), <em>haver</em> existencial, <em>fazer</em> temporal. "Faz três anos."</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>Sujeito Oracional</h3>
            <p>Uma oração inteira funciona como sujeito. "<em>Estudar</em> é necessário." — sujeito: a oração <em>Estudar</em>.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Questões frequentemente testam a concordância com
          sujeito composto posposto ao verbo e o sujeito indeterminado com <em>se</em>. Lembre:
          "vende-se casas" (errado) vs. "vendem-se casas" (correto — <em>casas</em> é
          sujeito paciente).
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Essenciais</span>
        <h2>3. Predicado e Seus Tipos</h2>

        <p>
          O <strong>predicado</strong> é tudo o que se afirma sobre o sujeito. Classifica-se
          em três tipos de acordo com o núcleo semântico e com o verbo utilizado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Núcleo</th>
                <th>Verbo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Predicado Verbal</strong></td>
                <td>Verbo (ação/estado sem ligar)</td>
                <td>Intransitivo ou transitivo</td>
                <td>"O atleta <em>correu</em>."</td>
              </tr>
              <tr>
                <td><strong>Predicado Nominal</strong></td>
                <td>Nome (predicativo do sujeito)</td>
                <td>Verbo de ligação</td>
                <td>"Maria <em>é inteligente</em>."</td>
              </tr>
              <tr>
                <td><strong>Predicado Verbo-Nominal</strong></td>
                <td>Verbo + nome simultaneamente</td>
                <td>Transitivo ou intransitivo + predicativo</td>
                <td>"O time <em>voltou cansado</em>."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Os principais <strong>verbos de ligação</strong> são: <em>ser, estar, ficar,
          parecer, permanecer, continuar, tornar-se, andar, virar</em>. Eles não indicam
          ação; apenas estabelecem relação entre o sujeito e o predicativo.
        </p>

        <div className="math-block">
          <p><strong>Predicado Verbo-Nominal — atenção ao duplo núcleo:</strong></p>
          <p>"Os soldados <em>chegaram exaustos</em>." — núcleo verbal: <em>chegaram</em>;
          predicativo do sujeito: <em>exaustos</em>.</p>
          <p>"A empresa <em>contratou o candidato empolgada</em>." — núcleo verbal: <em>contratou</em>;
          predicativo do sujeito: <em>empolgada</em> (refere-se à empresa).</p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Complementos Verbais</span>
        <h2>4. Objeto Direto vs. Objeto Indireto</h2>

        <p>
          Os <strong>objetos</strong> são termos integrantes da oração: completam o
          sentido de verbos transitivos, tornando-o pleno. A distinção fundamental é a
          presença ou ausência de <em>preposição obrigatória</em> entre o verbo e o
          complemento.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Objeto Direto</h3>
            <p>Complemento do verbo transitivo direto. <strong>Sem preposição obrigatória.</strong> Responde "quê?" ou "quem?" ao verbo. "Comprei <em>um livro</em>."</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Objeto Indireto</h3>
            <p>Complemento do verbo transitivo indireto. <strong>Com preposição obrigatória</strong> (a, de, em, por…). "Gostei <em>da aula</em>." Responde "de quê?/a quem?"</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Objeto Direto</th>
                <th>Objeto Indireto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preposição</td>
                <td>Não exigida pelo verbo</td>
                <td>Exigida pelo verbo (rege)</td>
              </tr>
              <tr>
                <td>Pronome substituto</td>
                <td>o, a, os, as</td>
                <td>lhe, lhes, dele, disso…</td>
              </tr>
              <tr>
                <td>Pergunta-chave</td>
                <td>Verbo + "quê?" / "quem?"</td>
                <td>Verbo + "a quê?" / "a quem?" / "de quê?"</td>
              </tr>
              <tr>
                <td>Verbo típico</td>
                <td>fazer, ver, comprar, amar</td>
                <td>gostar, precisar, obedecer, lembrar-se</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção:</strong> Um verbo pode ser <em>bitransitivo</em> — exige dois
          objetos ao mesmo tempo: direto e indireto. "Ofereci <em>flores</em> (OD){" "}
          <em>à professora</em> (OI)." Verbos bitransitivos clássicos: <em>dar, oferecer,
          entregar, pedir, perguntar, dizer</em>.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Complementos Verbais — Casos Especiais</span>
        <h2>5. Objeto Direto Preposicionado e Agente da Passiva</h2>

        <p>
          Nem toda preposição diante de um complemento verbal cria um objeto indireto.
          O <strong>objeto direto preposicionado</strong> ocorre quando a preposição é usada
          por <em>expressividade, ênfase ou idiomatismo</em>, e não porque o verbo a exige.
          Nesse caso, o complemento ainda é direto — pode ser substituído por <em>o/a</em>.
        </p>

        <div className="math-block">
          <p><strong>Objeto direto preposicionado:</strong></p>
          <p>"Não vi <em>a ninguém</em> no corredor." — <em>a ninguém</em> = OD preposicionado
          (preposição por ênfase; pode ser substituído por "não o vi").</p>
          <p>"Amo <em>a minha mãe</em>." — OD preposicionado (afeto intensifica a preposição;
          substituição: "amo-a").</p>
        </div>

        <p>
          O <strong>agente da passiva</strong> é o termo que indica o ser que pratica a ação
          na voz passiva. É introduzido, em geral, pelas preposições <em>por</em> (ou{" "}
          <em>pelo/pela</em>) e, mais raramente, <em>de</em>.
        </p>

        <div className="math-block">
          <p><strong>Agente da passiva — exemplos:</strong></p>
          <p>"O gol foi marcado <em>pelo artilheiro</em>." — agente da passiva: <em>pelo artilheiro</em>.</p>
          <p>"O texto foi lido <em>por todos os alunos</em>." — agente: <em>por todos os alunos</em>.</p>
          <p>"Era amado <em>de todos</em>." — preposição <em>de</em> (uso literário).</p>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Não confunda agente da passiva com adjunto adverbial
          de causa ou de instrumento. O agente é o "praticante" da ação verbal na estrutura
          passiva. Se a oração estiver na voz ativa, esse mesmo ser seria o sujeito.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vozes Verbais</span>
        <h2>6. Voz Ativa, Passiva Analítica, Passiva Sintética e Pronominal Implícita</h2>

        <p>
          As <strong>vozes verbais</strong> indicam a relação entre o sujeito gramatical e a
          ação verbal: se o sujeito pratica ou sofre a ação, ou se apenas existe (voz reflexiva).
          O ENEM cobra especialmente a <em>transformação entre vozes</em> e o reconhecimento
          da passiva sintética.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 240"
            width="760"
            height="240"
            aria-label="Diagrama das vozes verbais: ativa, passiva analítica e passiva sintética"
          >
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            {/* Ativa */}
            <rect x="20" y="20" width="210" height="90" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="125" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">VOZ ATIVA</text>
            <text x="125" y="62" textAnchor="middle" fontSize="11" fill="#1e3a8a">Sujeito pratica a ação</text>
            <text x="125" y="80" textAnchor="middle" fontSize="11" fill="#1d4ed8">"O artista pintou</text>
            <text x="125" y="96" textAnchor="middle" fontSize="11" fill="#1d4ed8">o quadro."</text>
            {/* Seta para passiva analítica */}
            <line x1="230" y1="65" x2="290" y2="65" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="260" y="58" textAnchor="middle" fontSize="10" fill="#4338ca">transforma</text>
            {/* Passiva Analítica */}
            <rect x="290" y="20" width="210" height="90" rx="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="395" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4c1d95">PASSIVA ANALÍTICA</text>
            <text x="395" y="62" textAnchor="middle" fontSize="11" fill="#5b21b6">ser + particípio + agente</text>
            <text x="395" y="80" textAnchor="middle" fontSize="11" fill="#6d28d9">"O quadro foi pintado</text>
            <text x="395" y="96" textAnchor="middle" fontSize="11" fill="#6d28d9">pelo artista."</text>
            {/* Seta para sintética */}
            <line x1="500" y1="65" x2="560" y2="65" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="530" y="58" textAnchor="middle" fontSize="10" fill="#4338ca">equivale</text>
            {/* Passiva Sintética */}
            <rect x="560" y="20" width="180" height="90" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="650" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#831843">PASSIVA SINT.</text>
            <text x="650" y="62" textAnchor="middle" fontSize="11" fill="#9d174d">verbo + se + suj. paciente</text>
            <text x="650" y="80" textAnchor="middle" fontSize="11" fill="#be185d">"Pintou-se o quadro.</text>
            <text x="650" y="96" textAnchor="middle" fontSize="11" fill="#be185d">"</text>
            {/* Legenda */}
            <rect x="20" y="140" width="720" height="85" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <text x="380" y="162" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">PASSIVA PRONOMINAL IMPLÍCITA</text>
            <text x="380" y="182" textAnchor="middle" fontSize="11" fill="#4b5563">Agente omitido por ser irrelevante ou desconhecido.</text>
            <text x="380" y="200" textAnchor="middle" fontSize="11" fill="#6366f1">"O relatório foi aprovado." (sem agente expresso)</text>
          </svg>
          <figcaption>Relações entre as vozes verbais e como transformar entre elas.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Voz</th>
                <th>Estrutura</th>
                <th>Sujeito</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ativa</strong></td>
                <td>sujeito + VTD + OD</td>
                <td>Agente (pratica)</td>
                <td>"Joana assinou o contrato."</td>
              </tr>
              <tr>
                <td><strong>Passiva Analítica</strong></td>
                <td>sujeito + ser + particípio + por + agente</td>
                <td>Paciente (sofre)</td>
                <td>"O contrato foi assinado por Joana."</td>
              </tr>
              <tr>
                <td><strong>Passiva Sintética</strong></td>
                <td>verbo + se + sujeito paciente</td>
                <td>Paciente (sofre)</td>
                <td>"Assinou-se o contrato."</td>
              </tr>
              <tr>
                <td><strong>Passiva Pronominal Implícita</strong></td>
                <td>ser + particípio (sem agente)</td>
                <td>Paciente</td>
                <td>"O contrato foi assinado."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Regra de ouro para transformação:</strong> O OD da voz ativa vira
          sujeito da passiva. O sujeito da voz ativa vira agente da passiva (precedido de{" "}
          <em>por</em>). O verbo ganha a forma <em>ser + particípio</em>. Confira o tempo
          verbal: <em>"assinou" → "foi assinado"; "assina" → "é assinado"</em>.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Integrantes</span>
        <h2>7. Predicativo do Sujeito vs. Predicativo do Objeto</h2>

        <p>
          O <strong>predicativo</strong> é o termo que atribui uma qualidade ou estado a
          um ser (sujeito ou objeto). A distinção entre os dois tipos é crucial e frequente
          no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Predicativo do Sujeito</h3>
            <p>Qualifica o <strong>sujeito</strong>. Aparece em predicados nominais (verbo de ligação) ou verbo-nominais. Concorda com o sujeito. "A cidade ficou <em>tranquila</em>."</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Predicativo do Objeto</h3>
            <p>Qualifica o <strong>objeto direto ou indireto</strong>. Acompanha verbos como <em>considerar, chamar, eleger, nomear, julgar, achar</em>. "Consideraram o projeto <em>viável</em>."</p>
          </div>
        </div>

        <div className="math-block">
          <p><strong>Análise comparativa:</strong></p>
          <p>"O aluno está <em>preparado</em>." — predicativo do sujeito (<em>aluno</em>).</p>
          <p>"A banca considerou o aluno <em>preparado</em>." — predicativo do objeto (<em>aluno</em> = OD).</p>
          <p>"Elegeram Maria <em>presidenta</em>." — predicativo do objeto (<em>Maria</em> = OD).</p>
          <p>"Chamaram-no de <em>herói</em>." — predicativo do objeto indireto.</p>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Quando o predicativo aparece junto de um verbo
          transitivo (e não de ligação), quase sempre é predicativo do <em>objeto</em>.
          Pergunte: a qualidade se refere ao sujeito ou ao objeto?
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Integrantes</span>
        <h2>8. Complemento Nominal</h2>

        <p>
          O <strong>complemento nominal</strong> completa o sentido de um{" "}
          <em>nome</em> — substantivo, adjetivo ou advérbio — que, por ser transitivo,
          exige um termo para se completar. É sempre introduzido por preposição{" "}
          (regida pelo nome, não pelo verbo).
        </p>

        <div className="math-block">
          <p><strong>Exemplos com análise:</strong></p>
          <p>"Tenho <em>necessidade de água</em>." — <em>de água</em>: CN do substantivo <em>necessidade</em>.</p>
          <p>"Ele é <em>favorável à proposta</em>." — <em>à proposta</em>: CN do adjetivo <em>favorável</em>.</p>
          <p>"Agiu <em>contrariamente às normas</em>." — <em>às normas</em>: CN do advérbio <em>contrariamente</em>.</p>
          <p>"Tinha <em>medo de altura</em>." — <em>de altura</em>: CN do substantivo <em>medo</em>.</p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nome regente</th>
                <th>Preposição exigida</th>
                <th>Complemento Nominal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>amor</em> (subst.)</td>
                <td>a / por</td>
                <td>"amor <strong>à pátria</strong>"</td>
              </tr>
              <tr>
                <td><em>capaz</em> (adj.)</td>
                <td>de</td>
                <td>"capaz <strong>de tudo</strong>"</td>
              </tr>
              <tr>
                <td><em>fiel</em> (adj.)</td>
                <td>a</td>
                <td>"fiel <strong>aos amigos</strong>"</td>
              </tr>
              <tr>
                <td><em>longe</em> (adv.)</td>
                <td>de</td>
                <td>"longe <strong>da cidade</strong>"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Complemento Nominal vs. Adjunto Adnominal:</strong> Ambos modificam
          nomes, mas o CN <em>completa</em> o sentido do nome (relação de objeto —
          geralmente com sujeito paciente: "leitura <em>do livro</em>" = alguém lê o livro),
          enquanto o adjunto adnominal <em>especifica ou qualifica</em> sem ser exigido
          (relação de posse ou origem: "livro <em>do professor</em>" = pertence ao professor).
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Acessórios</span>
        <h2>9. Adjunto Adnominal e Adjunto Adverbial</h2>

        <p>
          Os adjuntos são <em>termos acessórios</em>: enriquecem o sentido da oração,
          mas não são exigidos pelo verbo ou pelo nome para que o sentido seja completo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔖</span>
            <h3>Adjunto Adnominal</h3>
            <p>Modifica um <strong>substantivo</strong>. Pode ser: artigo, numeral, pronome adjetivo, adjetivo, locução adjetiva. "O <em>velho</em> professor." "<em>Três</em> alunos."</p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>Adjunto Adverbial</h3>
            <p>Modifica verbo, adjetivo ou outro advérbio. Indica circunstâncias: tempo, lugar, modo, causa, etc. É <strong>móvel</strong> na frase. "Correu <em>rapidamente</em>."</p>
          </div>
        </div>

        <p>
          O <strong>adjunto adverbial</strong> é identificado pelas circunstâncias que
          exprime. Os principais tipos são:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Circunstância</th>
                <th>Pergunta</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tempo</td>
                <td>quando?</td>
                <td>"Estudei <em>ontem</em>."</td>
              </tr>
              <tr>
                <td>Lugar</td>
                <td>onde?</td>
                <td>"Mora <em>em São Paulo</em>."</td>
              </tr>
              <tr>
                <td>Modo</td>
                <td>como?</td>
                <td>"Falou <em>calmamente</em>."</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td>por quê?</td>
                <td>"Saiu <em>por medo</em>."</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>para quê?</td>
                <td>"Estudou <em>para o ENEM</em>."</td>
              </tr>
              <tr>
                <td>Instrumento</td>
                <td>com quê?</td>
                <td>"Escreveu <em>com caneta</em>."</td>
              </tr>
              <tr>
                <td>Negação / Afirmação</td>
                <td>—</td>
                <td>"<em>Não</em> concordo. <em>Sim</em>, vou."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Mobilidade do adjunto adverbial:</strong> Diferentemente dos complementos,
          o adjunto adverbial pode ser deslocado sem alterar o significado essencial da oração.
          "<em>Ontem</em>, o time treinou forte." / "O time treinou forte <em>ontem</em>." — mesmo
          sentido, apenas ênfase diferente.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Termos Acessórios</span>
        <h2>10. Aposto e Seus Tipos</h2>

        <p>
          O <strong>aposto</strong> é um termo que se junta a um substantivo (ou pronome)
          para explicar, especificar, resumir ou enumerar. É sempre separado por vírgula,
          dois-pontos ou travessão — exceto o aposto especificativo, que dispensa
          pontuação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Explicativo</h3>
            <p>Explica ou esclarece o termo anterior. Usa vírgulas. "Brasília, <em>a capital do Brasil</em>, é moderna."</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Enumerativo</h3>
            <p>Detalha por enumeração, após dois-pontos. "Trouxe tudo: <em>caderno, lápis e borracha</em>."</p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Especificativo</h3>
            <p>Individualiza sem pontuação. É restritivo. "O escritor <em>Machado de Assis</em> é genial." Sem vírgulas.</p>
          </div>
          <div className="lesson-card">
            <span>🗂️</span>
            <h3>Resumitivo</h3>
            <p>Resume termos anteriores, geralmente com pronome indefinido. "Paciência, dedicação, foco — <em>tudo</em> é necessário."</p>
          </div>
        </div>

        <div className="math-block">
          <p><strong>Aposto vs. Predicativo do Sujeito — como diferenciar:</strong></p>
          <p>"Luís, <em>o diretor</em>, chegou." — aposto (equivalência nominal, sem verbo de ligação subentendido).</p>
          <p>"Luís chegou <em>como diretor</em>." — predicativo do sujeito (qualidade em relação ao verbo).</p>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>11. Mapa dos Termos da Oração</h2>

        <p>
          Veja o panorama completo dos termos da oração organizados por função e
          relação com os demais elementos da sintaxe do período simples.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 780 340"
            width="780"
            height="340"
            aria-label="Mapa mental dos termos da oração no período simples"
          >
            {/* Centro */}
            <ellipse cx="390" cy="170" rx="90" ry="38" fill="#6366f1" />
            <text x="390" y="165" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">TERMOS DA</text>
            <text x="390" y="182" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">ORAÇÃO</text>
            {/* Essenciais */}
            <rect x="20" y="60" width="160" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">ESSENCIAIS</text>
            <text x="100" y="100" textAnchor="middle" fontSize="11" fill="#1d4ed8">Sujeito · Predicado</text>
            <line x1="180" y1="85" x2="300" y2="155" stroke="#3b82f6" strokeWidth="1.5" />
            {/* Integrantes */}
            <rect x="20" y="200" width="200" height="68" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="120" y="222" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4c1d95">INTEGRANTES</text>
            <text x="120" y="240" textAnchor="middle" fontSize="11" fill="#5b21b6">OD · OI · Pred. do Suj.</text>
            <text x="120" y="257" textAnchor="middle" fontSize="11" fill="#5b21b6">Pred. do Obj. · Comp. Nominal</text>
            <line x1="220" y1="230" x2="300" y2="188" stroke="#7c3aed" strokeWidth="1.5" />
            {/* Acessórios */}
            <rect x="560" y="60" width="200" height="68" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="660" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">ACESSÓRIOS</text>
            <text x="660" y="100" textAnchor="middle" fontSize="11" fill="#166534">Adj. Adnominal</text>
            <text x="660" y="117" textAnchor="middle" fontSize="11" fill="#166534">Adj. Adverbial · Aposto</text>
            <line x1="560" y1="95" x2="480" y2="155" stroke="#16a34a" strokeWidth="1.5" />
            {/* Vozes */}
            <rect x="560" y="200" width="200" height="68" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="660" y="222" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713f12">VOZES VERBAIS</text>
            <text x="660" y="240" textAnchor="middle" fontSize="11" fill="#854d0e">Ativa · Passiva Analítica</text>
            <text x="660" y="257" textAnchor="middle" fontSize="11" fill="#854d0e">Sintética · Pronominal</text>
            <line x1="560" y1="225" x2="480" y2="190" stroke="#ca8a04" strokeWidth="1.5" />
          </svg>
          <figcaption>Mapa dos termos da oração e as vozes verbais do período simples.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Estratégia de análise sintática no ENEM:</strong>
          <br />
          1. Encontre o <em>verbo</em> — núcleo do predicado.
          <br />
          2. Pergunte "quem?" ao verbo → sujeito.
          <br />
          3. Teste a transitividade: o verbo pede complemento? → identifique OD/OI.
          <br />
          4. Há preposição? Verifique se é exigida (OI ou CN) ou apenas expressiva (OD preposicionado).
          <br />
          5. O restante é adjunto (adnominal modifica nome; adverbial modifica verbo/adj./adv.) ou aposto.
        </div>
      </section>

      {/* ── SEÇÃO 12 – EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>12. Exercícios</h2>

        <Exercise
          title="Sujeito da Oração"
          level="Básico"
          statement={
            <p>
              Identifique o sujeito em: <em>"Chegaram tarde os últimos candidatos."</em>
            </p>
          }
          options={[
            { letter: "a", text: "Chegaram tarde" },
            { letter: "b", text: "os últimos candidatos", correct: true },
            { letter: "c", text: "tarde" },
            { letter: "d", text: "Sujeito indeterminado" },
          ]}
          resolution={
            <p>
              O verbo <em>chegaram</em> está na 3ª pessoa do plural; perguntando "quem chegou
              tarde?", a resposta é <strong>"os últimos candidatos"</strong> — sujeito simples
              posposto ao verbo. A concordância confirma: <em>chegaram</em> (plural) concorda
              com <em>candidatos</em> (plural).
            </p>
          }
        />

        <Exercise
          title="Objeto Direto vs. Objeto Indireto"
          level="Intermediário"
          statement={
            <p>
              Analise: <em>"A secretária entregou os documentos ao gerente."</em>
              <br />
              Assinale a alternativa que identifica corretamente os complementos verbais.
            </p>
          }
          options={[
            { letter: "a", text: "os documentos = OI; ao gerente = OD" },
            { letter: "b", text: "os documentos = OD; ao gerente = adjunto adverbial" },
            {
              letter: "c",
              text: "os documentos = OD; ao gerente = OI",
              correct: true,
            },
            { letter: "d", text: "Ambos são objetos diretos preposicionados" },
          ]}
          resolution={
            <p>
              O verbo <em>entregar</em> é bitransitivo: exige <strong>OD</strong>{" "}
              (o quê? → <em>os documentos</em>, sem preposição) e{" "}
              <strong>OI</strong> (a quem? → <em>ao gerente</em>, com preposição{" "}
              <em>a</em> exigida pelo verbo). Não é adjunto adverbial porque a preposição
              é regida pelo verbo, não indica circunstância livre.
            </p>
          }
        />

        <Exercise
          title="Vozes Verbais — Transformação"
          level="Avançado"
          statement={
            <p>
              Transforme para a voz passiva analítica, mantendo o mesmo tempo verbal:
              <br />
              <em>"A comissão aprovou todas as emendas ontem."</em>
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Todas as emendas foram aprovadas pela comissão ontem.",
              correct: true,
            },
            {
              letter: "b",
              text: "Aprovaram-se todas as emendas pela comissão ontem.",
            },
            {
              letter: "c",
              text: "Todas as emendas foram aprovadas da comissão ontem.",
            },
            {
              letter: "d",
              text: "Todas as emendas aprovaram a comissão ontem.",
            },
          ]}
          resolution={
            <p>
              Na transformação: OD da ativa (<em>todas as emendas</em>) → sujeito da passiva;
              sujeito da ativa (<em>a comissão</em>) → agente da passiva com <em>por</em>{" "}
              (<em>pela comissão</em>); verbo <em>aprovou</em> (pretérito perfeito) → <em>foram
              aprovadas</em> (ser no pretérito perfeito + particípio). O adjunto adverbial{" "}
              <em>ontem</em> permanece inalterado. A alternativa B é passiva <em>sintética</em>,
              não analítica.
            </p>
          }
        />

        <Exercise
          title="Complemento Nominal na Interpretação de Texto"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho de carta argumentativa: <em>"A população demonstrou total
              confiança nas instituições democráticas, reafirmando o respeito às leis
              constitucionais."</em>
              <br />
              Os termos <em>"nas instituições democráticas"</em> e{" "}
              <em>"às leis constitucionais"</em> exercem, respectivamente, as funções de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Adjunto adnominal e adjunto adverbial de finalidade",
            },
            {
              letter: "b",
              text: "Objeto indireto de 'demonstrou' e complemento nominal de 'respeito'",
              correct: true,
            },
            {
              letter: "c",
              text: "Complemento nominal de 'confiança' e objeto indireto de 'reafirmando'",
            },
            {
              letter: "d",
              text: "Adjunto adverbial de lugar e complemento nominal de 'confiança'",
            },
          ]}
          resolution={
            <p>
              <em>"Nas instituições democráticas"</em>: o verbo <em>demonstrar</em> é
              transitivo direto, mas aqui o complemento "confiança" já é o OD. A preposição
              que acompanha "instituições" é regida pelo substantivo <em>confiança</em>
              (confiança <em>em</em> algo) — portanto é <strong>objeto indireto</strong> do
              verbo <em>demonstrou</em> pelo esquema <em>demonstrou confiança em</em>.
              <em>"Às leis constitucionais"</em>: o substantivo <em>respeito</em> é transitivo
              nominal — exige preposição <em>a</em> — logo <em>às leis constitucionais</em>{" "}
              é <strong>complemento nominal</strong> de <em>respeito</em>.
            </p>
          }
        />

        <Exercise
          title="Aposto e Adjunto Adnominal na Redação ENEM"
          level="Contextualizado"
          statement={
            <p>
              Em uma redação argumentativa, o candidato escreveu:{" "}
              <em>"O Brasil, maior país da América do Sul, enfrenta sérios desafios
              ambientais."</em>
              <br />
              Identifique corretamente a função sintática de{" "}
              <em>"maior país da América do Sul"</em> e de <em>"ambientais"</em>.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Ambos são adjuntos adnominais de 'Brasil' e 'desafios', respectivamente",
            },
            {
              letter: "b",
              text: "Aposto explicativo de 'Brasil' e adjunto adnominal de 'desafios'",
              correct: true,
            },
            {
              letter: "c",
              text: "Predicativo do sujeito e complemento nominal de 'desafios'",
            },
            {
              letter: "d",
              text: "Aposto especificativo de 'Brasil' e predicativo do objeto",
            },
          ]}
          resolution={
            <p>
              <em>"maior país da América do Sul"</em> está entre vírgulas, retomando e
              explicando <em>Brasil</em> — é portanto <strong>aposto explicativo</strong>.
              Note que não é predicativo do sujeito porque não há verbo de ligação entre
              eles. Já <em>"ambientais"</em> é um adjetivo que modifica diretamente o
              substantivo <em>desafios</em>, sem ser exigido por ele — é{" "}
              <strong>adjunto adnominal</strong>. Distingue-se do complemento nominal
              porque não há preposição e não há relação de objeto entre o nome e o adjetivo.
            </p>
          }
        />
      </section>
    </article>
  );
}
