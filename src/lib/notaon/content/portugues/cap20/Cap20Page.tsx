"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 20</span>

          <h1>Concordância Verbal e Nominal</h1>

          <p>
            Concordância é o mecanismo gramatical pelo qual palavras se ajustam umas às outras dentro
            da frase. Dominar suas regras — e, principalmente, os casos especiais que fogem à
            intuição — é indispensável para produzir textos que se encaixam na <strong>norma culta</strong>{" "}
            exigida no ENEM e em concursos públicos. Neste capítulo você vai aprender a regra geral,
            identificar armadilhas clássicas e desenvolver raciocínio preciso para qualquer questão
            de concordância verbal ou nominal.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Concordância Verbal — Regra Geral</h2>

        <p>
          A regra mais básica da concordância verbal é: <strong>o verbo concorda com o sujeito em
          número (singular ou plural) e em pessoa (1ª, 2ª ou 3ª)</strong>. Essa relação é chamada
          de <em>concordância gramatical</em> ou <em>sintática</em>, pois segue a estrutura formal
          da oração. Identificar corretamente o sujeito — especialmente quando ele não está
          imediatamente antes do verbo — é a habilidade central para acertar questões de concordância.
        </p>

        <div className="math-block">
          <strong>Estrutura básica:</strong>
          <br />
          <em>Os alunos <strong>chegaram</strong> cedo.</em> — sujeito plural → verbo no plural.
          <br />
          <em>O aluno <strong>chegou</strong> cedo.</em> — sujeito singular → verbo no singular.
          <br />
          <em>Eu <strong>vim</strong> primeiro; eles <strong>vieram</strong> depois.</em> — 1ª e 3ª pessoa.
        </div>

        <p>
          O erro mais comum ocorre quando há um <strong>adjunto adnominal</strong> entre o sujeito e
          o verbo. Nesse caso, o verbo deve concordar com o <em>núcleo</em> do sujeito, e não com
          o adjunto:
        </p>

        <div className="math-block">
          <em>A caixa de chocolates <strong>chegou</strong>.</em> — núcleo: "caixa" (singular).
          <br />
          <em>As caixas de chocolate <strong>chegaram</strong>.</em> — núcleo: "caixas" (plural).
          <br />
          <strong>Armadilha:</strong> "A caixa de chocolates chegaram" — concordância com adjunto, ERRADO.
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Ao identificar o sujeito, sempre localize o <em>núcleo</em> —
          a palavra mais importante do sujeito, que comanda a concordância. Substantivos, pronomes e
          infinitivos podem ser núcleos de sujeito.
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais I</span>
        <h2>2. Sujeito Composto — Antes e Depois do Verbo</h2>

        <p>
          Quando o sujeito é formado por dois ou mais núcleos (<em>sujeito composto</em>), as regras
          variam conforme a posição do verbo em relação ao sujeito.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬅️</span>
            <h3>Sujeito Composto Antes do Verbo</h3>
            <p>
              O verbo vai, obrigatoriamente, para o <strong>plural</strong>.
              Exemplo: <em>"Pedro e Maria chegaram juntos."</em>
              Não há flexibilidade: com o sujeito anteposto, o plural é exigido.
            </p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Sujeito Composto Após o Verbo</h3>
            <p>
              Admite-se o verbo no <strong>plural</strong> (concordância gramatical) ou no{" "}
              <strong>singular por aproximação</strong> (concordando com o núcleo mais próximo).
              Exemplo: <em>"Chegou Pedro e Maria"</em> ou <em>"Chegaram Pedro e Maria"</em> — ambas corretas.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Posição do Sujeito</th>
                <th>Possibilidades do Verbo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antes do verbo (anteposto)</td>
                <td>Obrigatório plural</td>
                <td><em>O pai e a mãe <strong>vieram</strong>.</em></td>
              </tr>
              <tr>
                <td>Depois do verbo (posposto)</td>
                <td>Plural (gramatical) ou singular (aproximação)</td>
                <td>
                  <em><strong>Vieram</strong> o pai e a mãe.</em> /
                  <em><strong>Veio</strong> o pai e a mãe.</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Há ainda o caso de sujeito composto cujos núcleos se referem a uma mesma pessoa ou
          coisa (<em>sujeito por silepse</em>): o verbo vai ao singular. Exemplo:{" "}
          <em>"Meu chefe e patrão <strong>exigiu</strong> pontualidade."</em> — os dois
          substantivos identificam a mesma pessoa.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais II</span>
        <h2>3. Sujeito com Núcleos Sinônimos, em Gradação ou Resumidos por Pronome</h2>

        <p>
          Quando o sujeito composto apresenta núcleos que são <strong>sinônimos</strong> (expressam
          a mesma ideia com palavras diferentes) ou estão dispostos em <strong>gradação crescente
          ou decrescente</strong>, o verbo pode ficar no singular, concordando apenas com o último
          núcleo. Essa é a chamada <em>concordância atrativa</em> ou por silepse semântica.
        </p>

        <div className="math-block">
          <strong>Núcleos sinônimos:</strong>
          <br />
          <em>"A tristeza, a angústia, o desespero <strong>tomou</strong> conta dela."</em>
          <br />
          <em>"A tristeza, a angústia, o desespero <strong>tomaram</strong> conta dela."</em> (ambas válidas)
          <br /><br />
          <strong>Gradação:</strong>
          <br />
          <em>"Um gesto, uma palavra, um olhar <strong>bastava</strong> para acalmá-la."</em>
          <br />
          <em>"Um gesto, uma palavra, um olhar <strong>bastavam</strong> para acalmá-la."</em> (ambas válidas)
        </div>

        <p>
          Quando os sujeitos compostos são retomados por um pronome resumitivo como <em>tudo</em>,{" "}
          <em>nada</em>, <em>ninguém</em>, o verbo fica no <strong>singular</strong>:
        </p>

        <div className="math-block">
          <em>"Festa, viagem, presentes — <strong>tudo isso</strong> a deixou feliz."</em>
          <br />
          O pronome "tudo" resume os sujeitos e puxa o verbo para o singular.
        </div>

        <div className="lesson-highlight">
          <strong>Regra prática:</strong> Núcleos sinônimos ou em gradação permitem singular ou
          plural, mas o singular é mais elegante e literário. Na redação do ENEM, o plural é mais
          seguro para evitar ambiguidade.
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais III</span>
        <h2>4. Sujeito Coletivo e Expressões Partitivas</h2>

        <p>
          O <strong>sujeito coletivo</strong> representa um conjunto de seres com um único nome
          singular (<em>bando</em>, <em>grupo</em>, <em>multidão</em>, <em>rebanho</em>,{" "}
          <em>turma</em>). Por ser singular em sua forma, o verbo deve ir ao singular:
        </p>

        <div className="math-block">
          <em>"O grupo <strong>chegou</strong> atrasado."</em>
          <br />
          <em>"A multidão <strong>aplaudiu</strong> o artista."</em>
          <br />
          <em>"O rebanho <strong>desceu</strong> o morro."</em>
        </div>

        <p>
          Entretanto, quando o coletivo é seguido de um <strong>complemento partitivo no plural</strong>{" "}
          (<em>coletivo + de + substantivo plural</em>), o verbo pode ir ao plural, concordando com
          o complemento. Essa é a chamada <em>concordância silepse de número</em>:
        </p>

        <div className="math-block">
          <em>"Um bando de pássaros <strong>sobrevoava</strong> o lago."</em> (singular — regra)
          <br />
          <em>"Um bando de pássaros <strong>sobrevoavam</strong> o lago."</em> (plural — facultativo)
          <br /><br />
          <em>"A maioria dos alunos <strong>ficou</strong> em silêncio."</em> (singular)
          <br />
          <em>"A maioria dos alunos <strong>ficaram</strong> em silêncio."</em> (plural — facultativo)
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐦</span>
            <h3>Coletivo sem complemento</h3>
            <p>
              Verbo obrigatoriamente no singular.
              <br /><em>"O cardume <strong>atravessou</strong> o rio."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Coletivo + de + plural</h3>
            <p>
              Verbo no singular (rigor) ou no plural (silepse facultativa).
              <br /><em>"Um cardume de peixes <strong>atravessou</strong> / <strong>atravessaram</strong>."</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais IV</span>
        <h2>5. Expressões Partitivas, Porcentagens e "Mais de Um"</h2>

        <p>
          Expressões como <strong>a maioria de</strong>, <strong>grande parte de</strong>,{" "}
          <strong>a maior parte de</strong>, <strong>boa parte de</strong> funcionam como coletivos
          partitivos e admitem verbo no singular ou no plural quando seguidas de complemento plural:
        </p>

        <div className="math-block">
          <em>"Grande parte dos candidatos <strong>foi</strong> aprovada."</em> (singular — mais formal)
          <br />
          <em>"Grande parte dos candidatos <strong>foram</strong> aprovados."</em> (plural — aceitável)
        </div>

        <p>
          Com <strong>porcentagens</strong>, o verbo concorda com o <em>numeral</em> se não houver
          substantivo expresso, ou com o <em>substantivo</em> que acompanha a porcentagem:
        </p>

        <div className="math-block">
          <em>"50% dos eleitores <strong>votaram</strong> contra."</em> (plural — concorda com "eleitores")
          <br />
          <em>"50% da população <strong>votou</strong> contra."</em> (singular — concorda com "população")
          <br />
          <em>"1% dos candidatos <strong>foi</strong> eliminado."</em> (singular — concorda com "1%")
        </div>

        <p>
          A expressão <strong>"mais de um"</strong> exige verbo no singular por trazer o
          núcleo "um" como determinante principal. Já <strong>"mais de dois"</strong> (ou qualquer
          numeral maior que um) exige plural:
        </p>

        <div className="math-block">
          <em>"Mais de um aluno <strong>pediu</strong> revisão."</em> (singular — "mais de um")
          <br />
          <em>"Mais de dois alunos <strong>pediram</strong> revisão."</em> (plural — "mais de dois")
        </div>

        <div className="lesson-highlight">
          <strong>Exceção:</strong> Quando "mais de um" indica reciprocidade ou pluralidade de ação
          simultânea, admite-se o plural: <em>"Mais de um professor se <strong>entreolharam</strong>."</em>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pronomes Relativos</span>
        <h2>6. Concordância com Pronome Relativo "Que" e com "Quem"</h2>

        <p>
          O pronome relativo <strong>"que"</strong> é um substituto de seu antecedente dentro da
          oração subordinada. Portanto, o verbo da oração relativa concorda com o{" "}
          <em>antecedente do "que"</em>, não com o pronome em si:
        </p>

        <div className="math-block">
          <em>"Fui <strong>eu</strong> que <strong>fiz</strong> o trabalho."</em>
          <br />
          Antecedente de "que" é "eu" (1ª pessoa singular) → verbo na 1ª pessoa.
          <br /><br />
          <em>"Foste <strong>tu</strong> que <strong>fizeste</strong> o trabalho."</em>
          <br />
          Antecedente de "que" é "tu" (2ª pessoa singular) → verbo na 2ª pessoa.
          <br /><br />
          <em>"<strong>Nós</strong> somos os que <strong>decidimos</strong>."</em>
          <br />
          Antecedente de "que" é "nós" → verbo na 1ª pessoa do plural.
        </div>

        <p>
          O pronome relativo <strong>"quem"</strong>, quando exerce a função de sujeito, exige o
          verbo na <strong>3ª pessoa do singular</strong>, independentemente do antecedente — pois
          "quem" equivale a "a pessoa que":
        </p>

        <div className="math-block">
          <em>"Fui eu quem <strong>fez</strong> o trabalho."</em> (3ª singular — padrão culto)
          <br />
          <em>"Fui eu quem <strong>fiz</strong> o trabalho."</em> (concordância por silepse — também aceita)
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> A construção com "que" pede concordância com o antecedente
          (pessoa gramatical do antecedente). A construção com "quem" prefere a 3ª pessoa do singular
          na norma culta formal, embora a concordância por silepse também seja aceita.
        </div>
      </section>

      {/* ── Seção 7 — SVG 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos Impessoais</span>
        <h2>7. Haver, Fazer e Ser — Verbos Impessoais e suas Regras</h2>

        <p>
          Alguns verbos exercem funções impessoais — ou seja, não possuem sujeito — e por isso
          ficam <strong>obrigatoriamente no singular</strong> quando usados nessas acepções.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📅</span>
            <h3>HAVER (existência / tempo)</h3>
            <p>
              Quando significa "existir" ou indica tempo decorrido, <strong>haver é impessoal
              e fica no singular</strong>. Não se usa "existir" como impessoal da mesma forma.
              <br /><em>"Havia muitos erros no texto."</em>
              <br /><em>"Há dois anos não o vejo."</em>
              <br /><strong>ERRADO:</strong> <em>"Haviam erros"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>☀️</span>
            <h3>FAZER (fenômeno / tempo)</h3>
            <p>
              Quando indica fenômeno da natureza ou tempo decorrido, <strong>fazer é impessoal
              e fica no singular</strong>. Nenhum plural é aceito.
              <br /><em>"Faz três dias que não chove."</em>
              <br /><em>"Faz muito calor nesta cidade."</em>
              <br /><strong>ERRADO:</strong> <em>"Fazem três dias"</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🕐</span>
            <h3>SER (horas)</h3>
            <p>
              Quando indica horas, o verbo ser concorda com o numeral.
              <br /><em>"É uma hora."</em> (singular)
              <br /><em>"São duas horas."</em> (plural)
              <br /><em>"É meio-dia." / "É meia-noite."</em> (singular, invariável)
            </p>
          </div>
          <div className="lesson-card">
            <span>📆</span>
            <h3>SER (datas)</h3>
            <p>
              Para datas, o verbo concorda com o numeral do dia, exceto quando se refere a
              "dia primeiro" (sempre singular).
              <br /><em>"Hoje é dia quinze."</em> ou <em>"Hoje são quinze de junho."</em>
              <br /><em>"Hoje é dia primeiro."</em> (só singular)
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 260"
            width="520"
            height="260"
            aria-label="Fluxograma de verbos impessoais: haver, fazer e ser com suas respectivas regras de concordância no singular"
          >
            <rect x="5" y="5" width="510" height="250" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="260" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#1e293b">
              Verbos Impessoais — Sempre no Singular
            </text>

            <rect x="20" y="50" width="150" height="90" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="72" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#1d4ed8">HAVER</text>
            <text x="95" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">existência: "Há vagas"</text>
            <text x="95" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">tempo: "Há dois anos"</text>
            <text x="95" y="122" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#dc2626">✗ "Haviam vagas"</text>

            <rect x="185" y="50" width="150" height="90" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="260" y="72" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#15803d">FAZER</text>
            <text x="260" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">tempo: "Faz 3 dias"</text>
            <text x="260" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">clima: "Faz frio"</text>
            <text x="260" y="122" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#dc2626">✗ "Fazem 3 dias"</text>

            <rect x="350" y="50" width="155" height="90" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="428" y="72" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#92400e">SER</text>
            <text x="428" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">1 hora → "É uma hora"</text>
            <text x="428" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">2+ horas → "São duas"</text>
            <text x="428" y="122" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">meio-dia → singular</text>

            <rect x="140" y="165" width="240" height="42" rx="10" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="260" y="183" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#9d174d">
              REGRA DE OURO:
            </text>
            <text x="260" y="198" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">
              Impessoal = sem sujeito = singular fixo
            </text>

            <line x1="95" y1="140" x2="200" y2="165" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="260" y1="140" x2="260" y2="165" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="428" y1="140" x2="325" y2="165" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />

            <text x="260" y="235" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#6b7280" fontStyle="italic">
              Atenção: "existir" tem sujeito e concorda normalmente → "Existiam vagas" (correto)
            </text>
          </svg>
          <figcaption>Figura 1 — Verbos impessoais e suas regras de concordância no singular.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Atenção ao verbo EXISTIR:</strong> Diferente de <em>haver</em>, o verbo{" "}
          <em>existir</em> <strong>tem sujeito</strong> e deve concordar normalmente com ele.
          Compare: <em>"Havia vagas"</em> (haver, impessoal, singular) vs.{" "}
          <em>"Existiam vagas"</em> (existir, com sujeito "vagas", plural). Essa distinção
          é frequentemente explorada no ENEM.
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Concordância Nominal</span>
        <h2>8. Concordância Nominal — Regra Geral e Adjetivo com Vários Substantivos</h2>

        <p>
          A concordância nominal determina que <strong>adjetivos, artigos, pronomes e numerais
          concordam em gênero (masculino/feminino) e número (singular/plural) com o substantivo
          a que se referem</strong>. Quando o adjetivo se refere a um único substantivo, a regra
          é simples e direta.
        </p>

        <p>
          O desafio aparece quando um <strong>único adjetivo se refere a dois ou mais
          substantivos</strong>. Nesses casos, existem regras específicas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>Regra</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adjetivo depois de substantivos de gêneros diferentes</td>
                <td>Vai para o masculino plural (concordância gramatical)</td>
                <td><em>"Comprou blusa e vestido <strong>novos</strong>."</em></td>
              </tr>
              <tr>
                <td>Adjetivo depois de substantivos — mesmo gênero</td>
                <td>Plural do mesmo gênero</td>
                <td><em>"Camisa e calça <strong>brancas</strong>."</em></td>
              </tr>
              <tr>
                <td>Adjetivo antes dos substantivos</td>
                <td>Concorda com o substantivo mais próximo</td>
                <td><em>"<strong>Novos</strong> projetos e ideias."</em> ou <em>"<strong>Nova</strong> ideia e projeto."</em></td>
              </tr>
              <tr>
                <td>Adjetivo posposto ao último substantivo</td>
                <td>Pode concordar só com o mais próximo (silepse) ou ir ao plural</td>
                <td><em>"Amor e paixão <strong>recente</strong>."</em> / <em>"Amor e paixão <strong>recentes</strong>."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Regra principal quando o adjetivo vem DEPOIS de substantivos mistos (gêneros diferentes):</strong>
          <br />
          → Masculino plural obrigatório.
          <br />
          <em>"Pai e mãe <strong>preocupados</strong> com os filhos."</em> (correto)
          <br />
          <em>"Pai e mãe <strong>preocupadas</strong> com os filhos."</em> (errado — gênero errado)
        </div>
      </section>

      {/* ── Seção 9 — SVG 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais Nominais</span>
        <h2>9. Palavras com Concordância Especial: Meio, Mesmo, Obrigado, Bastante, Caro</h2>

        <p>
          Algumas palavras são fontes clássicas de dúvidas porque alternam entre função de{" "}
          <strong>adjetivo</strong> (variável) e <strong>advérbio</strong> (invariável). Saber
          distinguir a função gramatical é a chave para a concordância correta.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔢</span>
            <h3>MEIO / MEIA</h3>
            <p>
              Como <strong>adjetivo</strong> (= metade): varia em gênero e número.
              <em>"Comi meia laranja."</em>
              <br />
              Como <strong>advérbio</strong> (= um pouco, algo): invariável.
              <em>"Ela estava meio cansada."</em> (não "meia cansada")
            </p>
          </div>
          <div className="lesson-card">
            <span>🪞</span>
            <h3>MESMO / PRÓPRIO</h3>
            <p>
              Como <strong>adjetivo</strong> (= idêntico, em pessoa): varia normalmente.
              <em>"Elas mesmas fizeram."</em>
              <br />
              Como <strong>advérbio</strong> (= de fato, até): invariável.
              <em>"Mesmo cansado, ele foi."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>🙏</span>
            <h3>OBRIGADO / OBRIGADA</h3>
            <p>
              Sempre concorda com o <strong>gênero de quem fala</strong>, não com quem recebe
              o agradecimento. Homem diz: <em>"Obrigado."</em>
              Mulher diz: <em>"Obrigada."</em>
              Forma invariável não existe neste contexto.
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>BASTANTE(S)</h3>
            <p>
              Como <strong>adjetivo</strong> (= suficiente, muitos): varia em número.
              <em>"Havia <strong>bastantes</strong> razões."</em>
              <br />
              Como <strong>advérbio</strong> (= muito): invariável.
              <em>"Ela estava <strong>bastante</strong> cansada."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>💰</span>
            <h3>CARO / BARATO</h3>
            <p>
              Como <strong>adjetivo</strong>: concorda com o substantivo.
              <em>"Compras <strong>caras</strong>."</em>
              <br />
              Como <strong>advérbio</strong> (= a alto/baixo preço): invariável.
              <em>"Pagamos <strong>caro</strong> por isso."</em> (não "caros")
            </p>
          </div>
          <div className="lesson-card">
            <span>⬆️</span>
            <h3>MENOS / ALERTA / PSEUDO</h3>
            <p>
              Estas palavras são <strong>sempre invariáveis</strong>, independentemente da função.
              <em>"Havia <strong>menos</strong> pessoas."</em>
              <em>"Elas ficaram <strong>alerta</strong>."</em>
              <em>"Médicos <strong>pseudo</strong>-sábios."</em>
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 540 280"
            width="540"
            height="280"
            aria-label="Diagrama de fluxo para determinar se uma palavra é adjetivo variável ou advérbio invariável em concordância nominal"
          >
            <rect x="5" y="5" width="530" height="270" rx="14" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1.5" />
            <text x="270" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#1e293b">
              Adjetivo ou Advérbio? Fluxo de Decisão
            </text>

            <rect x="195" y="45" width="150" height="38" rx="8" fill="#6366f1" />
            <text x="270" y="69" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="white">
              PALAVRA DUVIDOSA
            </text>

            <rect x="160" y="105" width="220" height="38" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
            <text x="270" y="119" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#3730a3">
              Modifica um substantivo
            </text>
            <text x="270" y="133" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#3730a3">
              ou um verbo/adjetivo?
            </text>

            <line x1="270" y1="83" x2="270" y2="105" stroke="#6366f1" strokeWidth="1.5" />

            <defs>
              <marker id="arr1cv" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#16a34a" />
              </marker>
              <marker id="arr2cv" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#dc2626" />
              </marker>
            </defs>

            <line x1="160" y1="124" x2="95" y2="185" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arr1cv)" />
            <text x="110" y="165" fontFamily="sans-serif" fontSize="10" fill="#15803d" fontWeight="bold">substantivo</text>
            <rect x="20" y="185" width="150" height="55" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="95" y="205" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#15803d">ADJETIVO</text>
            <text x="95" y="221" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">Concorda em gênero</text>
            <text x="95" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">e número</text>

            <line x1="380" y1="124" x2="445" y2="185" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr2cv)" />
            <text x="405" y="165" fontFamily="sans-serif" fontSize="10" fill="#dc2626" fontWeight="bold">verbo/adjet.</text>
            <rect x="370" y="185" width="150" height="55" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="445" y="205" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#dc2626">ADVÉRBIO</text>
            <text x="445" y="221" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">Invariável — não</text>
            <text x="445" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#374151">muda de forma</text>

            <text x="95" y="258" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280" fontStyle="italic">
              "meia laranja", "bastantes alunos"
            </text>
            <text x="445" y="258" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280" fontStyle="italic">
              "meio cansada", "bastante difícil"
            </text>
          </svg>
          <figcaption>Figura 2 — Fluxo de decisão para distinguir adjetivo (variável) de advérbio (invariável) em concordância nominal.</figcaption>
        </figure>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Quadro-Resumo: As Principais Armadilhas do ENEM</h2>

        <p>
          As questões de concordância no ENEM exploram sistematicamente um conjunto previsível de
          armadilhas. Reconhecê-las antes da prova é a estratégia mais eficaz. O quadro abaixo
          consolida os pontos mais cobrados:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Caso</th>
                <th>Regra</th>
                <th>Correto</th>
                <th>Errado (armadilha)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Haver existencial</td>
                <td>Impessoal — sempre singular</td>
                <td><em>"Havia muitos livros"</em></td>
                <td><em>"Haviam muitos livros"</em></td>
              </tr>
              <tr>
                <td>Fazer (tempo/clima)</td>
                <td>Impessoal — sempre singular</td>
                <td><em>"Faz dois anos"</em></td>
                <td><em>"Fazem dois anos"</em></td>
              </tr>
              <tr>
                <td>Mais de um</td>
                <td>Singular</td>
                <td><em>"Mais de um candidato foi"</em></td>
                <td><em>"Mais de um candidatos foram"</em></td>
              </tr>
              <tr>
                <td>Coletivo partitivo</td>
                <td>Singular (rigoroso) ou plural (facultativo)</td>
                <td><em>"Um grupo de pessoas veio/vieram"</em></td>
                <td>Nenhuma forma é obrigatoriamente errada neste caso</td>
              </tr>
              <tr>
                <td>Porcentagem + substantivo plural</td>
                <td>Plural (concorda com o substantivo)</td>
                <td><em>"60% dos alunos passaram"</em></td>
                <td><em>"60% dos alunos passou"</em></td>
              </tr>
              <tr>
                <td>Meio (advérbio)</td>
                <td>Invariável</td>
                <td><em>"Ela estava meio cansada"</em></td>
                <td><em>"Ela estava meia cansada"</em></td>
              </tr>
              <tr>
                <td>Obrigado/Obrigada</td>
                <td>Concorda com quem agradece</td>
                <td>Mulher: <em>"Obrigada"</em></td>
                <td>Mulher: <em>"Obrigado"</em></td>
              </tr>
              <tr>
                <td>Pronome "quem" como sujeito</td>
                <td>3ª pessoa singular (norma culta)</td>
                <td><em>"Fui eu quem fez"</em></td>
                <td>Considerado informal: <em>"Fui eu quem fiz"</em> (aceito em silepse)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Estratégia de revisão:</strong> Ao rever cada linha deste quadro, construa uma
          frase própria para cada caso — isso ativa a memória ativa e consolida as regras muito
          mais do que apenas lê-las passivamente.
        </div>
      </section>

      {/* ── Seção 11 — Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Verbo Haver Existencial"
          statement={
            <p>
              Assinale a alternativa em que a concordância verbal está correta de acordo com a norma
              culta padrão:
            </p>
          }
          options={[
            { letter: "a", text: "Haviam muitas reclamações sobre o serviço prestado pela empresa." },
            { letter: "b", text: "Havia muitas reclamações sobre o serviço prestado pela empresa.", correct: true },
            { letter: "c", text: "Haveria muitas reclamações, mas elas se resolveram antes de chegar ao gerente." },
            { letter: "d", text: "Haveriam problemas se a situação não fosse resolvida rapidamente." },
          ]}
          resolution={
            <p>
              O verbo <strong>haver</strong> no sentido de "existir" é impessoal — não tem sujeito
              — e deve permanecer no <strong>singular</strong>. As formas "haviam" (alternativa A)
              e "haveriam" (alternativa D) pluralizam um verbo impessoal, o que contraria a norma
              culta. A alternativa C usa "haveria" no singular condicional, o que é correto, mas
              a alternativa B apresenta a situação mais direta e clara: <em>"Havia muitas reclamações"</em>
              — presente do indicativo, singular, correto.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Concordância Nominal — Meio/Meia"
          statement={
            <p>
              Em qual das frases abaixo a palavra <em>meio</em> está empregada e concordada
              corretamente segundo a norma culta?
            </p>
          }
          options={[
            { letter: "a", text: "A professora estava meia irritada com os alunos barulhentos da turma." },
            { letter: "b", text: "Comemos meia pizza e deixamos o restante para depois.", correct: true },
            { letter: "c", text: "Os estudantes ficaram meios preocupados com a prova de amanhã." },
            { letter: "d", text: "Ela parecia meias confusa diante das instruções complicadas do formulário." },
          ]}
          resolution={
            <p>
              A alternativa B está correta: <em>"meia pizza"</em> usa <strong>meio como adjetivo</strong>{" "}
              (no sentido de "metade"), concordando em gênero feminino com "pizza". As alternativas
              A e D usam "meia/meias" como advérbio (modificando adjetivos "irritada" e "confusa"),
              o que é incorreto — o advérbio é invariável: <em>"meio irritada"</em>. A alternativa
              C usa "meios" também como advérbio antes de adjetivo, igualmente errado — deve ser
              <em>"meio preocupados"</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Sujeito Composto e Verbo Impessoal FAZER"
          statement={
            <p>
              Leia as frases e identifique aquela em que a concordância verbal está{" "}
              <strong>incorreta</strong> segundo a norma culta:
            </p>
          }
          options={[
            { letter: "a", text: "Fazem três semanas que não tenho notícias do meu irmão.", correct: true },
            { letter: "b", text: "Faz três semanas que não tenho notícias do meu irmão." },
            { letter: "c", text: "Tanto o gerente quanto a diretora chegaram atrasados à reunião." },
            { letter: "d", text: "A maioria dos participantes votou a favor da proposta." },
          ]}
          resolution={
            <p>
              A alternativa A está <strong>incorreta</strong>: o verbo <em>fazer</em> indicando
              tempo decorrido é <strong>impessoal</strong> e deve permanecer no singular:{" "}
              <em>"Faz três semanas"</em> (alternativa B, correta). A alternativa C está correta —
              sujeito composto anteposto ao verbo exige plural. A alternativa D também está correta —
              coletivo partitivo "a maioria dos participantes" com verbo no singular é a forma
              rigorosa e amplamente aceita na norma culta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="4. Pronome Relativo QUE e Concordância"
          statement={
            <p>
              Analise as frases abaixo e assinale a alternativa gramaticalmente correta segundo
              a norma culta padrão em relação ao uso do pronome relativo "que":
            </p>
          }
          options={[
            { letter: "a", text: "Foste tu que chegou primeiro e resolveu o problema sozinho." },
            { letter: "b", text: "Foste tu que chegaste primeiro e resolveste o problema sozinho.", correct: true },
            { letter: "c", text: "Foram vocês que chegou primeiro e resolveu o problema sozinho." },
            { letter: "d", text: "Fomos nós que chegou primeiro e resolvemos o problema sozinho." },
          ]}
          resolution={
            <p>
              Quando o antecedente do pronome relativo <strong>"que"</strong> é um pronome pessoal,
              o verbo da oração relativa deve concordar com esse antecedente. Na alternativa B, o
              antecedente é <em>"tu"</em> (2ª pessoa singular), então os verbos ficam na 2ª pessoa:
              <em>"chegaste"</em> e <em>"resolveste"</em>. A alternativa A erra ao usar 3ª pessoa
              com antecedente "tu". A alternativa C usa "vocês" mas mantém verbos no singular
              — incorreto. A alternativa D usa "nós" mas mantém "chegou" no singular — incorreto,
              faltando "chegamos".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Concordância em Texto Argumentativo"
          statement={
            <p>
              Leia o trecho de uma redação ENEM: <em>"Grande parte dos jovens brasileiros não</em>{" "}
              <em>____ acesso à educação de qualidade. Além disso, fazem dois anos que o governo não</em>{" "}
              <em>implementa novas políticas públicas nessa área."</em>
              <br /><br />
              Assinale a alternativa que preenche corretamente a lacuna e identifica o único erro de
              concordância presente no trecho:
            </p>
          }
          options={[
            { letter: "a", text: "têm — O único erro é 'fazem dois anos', que deveria ser 'faz dois anos'.", correct: true },
            { letter: "b", text: "tem — Não há erros no trecho; a concordância está completamente correta." },
            { letter: "c", text: "têm — Não há erros de concordância no trecho apresentado." },
            { letter: "d", text: "tem — O erro está em 'grande parte dos jovens', que deveria concordar no plural com 'jovens'." },
          ]}
          resolution={
            <p>
              A expressão <em>"grande parte dos jovens"</em> é partitiva e admite verbo no singular
              ou no plural — como o complemento é plural ("jovens"), a forma plural{" "}
              <strong>"têm"</strong> é plenamente correta e muito comum na norma culta. O verdadeiro
              erro do trecho está em <em>"fazem dois anos"</em>: o verbo <strong>fazer</strong>{" "}
              indicando tempo decorrido é <strong>impessoal</strong> e deve ficar no singular:{" "}
              <em>"faz dois anos"</em>. Portanto, a alternativa A está correta: preenche a lacuna
              com "têm" (forma aceitável) e identifica precisamente o erro em "fazem".
            </p>
          }
        />
      </section>
    </article>
  );
}
