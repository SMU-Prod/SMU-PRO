"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 23</span>
          <h1>Semântica</h1>
          <p>
            A semântica é a ciência dos significados: ela revela como as palavras carregam sentidos,
            como esses sentidos se relacionam entre si e como mudam ao longo do tempo e dos contextos.
            Dominar semântica é dominar a interpretação textual — habilidade central em todas as provas do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O Que É Semântica?</h2>
        <p>
          <strong>Semântica</strong> é o ramo da linguística que estuda o <em>significado</em> das unidades linguísticas:
          morfemas, palavras, sintagmas, frases e textos completos. O termo vem do grego <em>sēmantikós</em>, derivado
          de <em>sēma</em> (sinal, signo). Enquanto a <strong>fonologia</strong> estuda os sons e a <strong>sintaxe</strong>
          estuda as estruturas, a semântica pergunta: <em>o que isso quer dizer?</em>
        </p>
        <p>
          Dentro da semântica, distinguem-se dois planos fundamentais do signo linguístico, conforme Ferdinand de Saussure:
          o <strong>significante</strong> (a imagem acústica ou a sequência de letras — a "forma" da palavra) e o{" "}
          <strong>significado</strong> (o conceito mental associado a essa forma). A semântica se ocupa justamente
          desse segundo plano, investigando como os conceitos se organizam, se relacionam e se transformam.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Significante</h3>
            <p>
              A sequência sonora ou gráfica da palavra — ex.: as letras C-A-S-A formam o significante "casa".
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Significado</h3>
            <p>
              O conceito mental evocado — a ideia de habitação, abrigo, lar, que a palavra "casa" desperta na mente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Referente</h3>
            <p>
              O objeto real no mundo que a palavra denota — a casa concreta de tijolos e telhado que existe na realidade.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> O ENEM raramente pede definições teóricas de semântica. Ele aplica os conceitos
          em textos reais — charges, poemas, crônicas, anúncios. Compreender as relações semânticas é o que permite
          interpretar o que o autor realmente quis dizer além das palavras literais.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações entre palavras</span>
        <h2>2. Sinonímia: Palavras de Sentido Semelhante</h2>
        <p>
          A <strong>sinonímia</strong> é a relação entre duas ou mais palavras que possuem <em>significados semelhantes</em> ou
          próximos. Palavras sinônimas são chamadas de <strong>sinônimos</strong>. Por exemplo: <em>belo</em> e <em>formoso</em>;
          <em>falar</em> e <em>dizer</em>; <em>morrer</em> e <em>falecer</em>.
        </p>
        <p>
          Um ponto fundamental — e muito cobrado no ENEM — é que a <strong>sinonímia perfeita é raríssima</strong> em língua
          natural. Dois sinônimos quase nunca são intercambiáveis em <em>todos</em> os contextos sem qualquer alteração de
          sentido ou registro. O <strong>contexto</strong> define qual sinônimo é mais adequado: "falecer" soa mais formal
          e respeitoso que "morrer"; "residência" é mais formal que "casa"; "comer" é neutro, mas "devorar" intensifica a
          voracidade. Quando o ENEM pede a substituição de uma palavra por um sinônimo, ele avalia se o candidato percebe
          essas nuances contextuais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Sinônimos possíveis</th>
                <th>Nuance importante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>morrer</strong></td>
                <td>falecer, perecer, sucumbir, expirar</td>
                <td>"falecer" é mais formal e eufemístico; "sucumbir" implica derrota</td>
              </tr>
              <tr>
                <td><strong>belo</strong></td>
                <td>bonito, formoso, lindo, esplêndido</td>
                <td>"esplêndido" tem intensidade maior; "formoso" é mais literário</td>
              </tr>
              <tr>
                <td><strong>mudar</strong></td>
                <td>alterar, transformar, modificar, renovar</td>
                <td>"transformar" sugere mudança profunda; "modificar" pode ser parcial</td>
              </tr>
              <tr>
                <td><strong>difícil</strong></td>
                <td>árduo, trabalhoso, penoso, complexo</td>
                <td>"árduo" enfatiza esforço físico; "complexo" enfatiza dificuldade intelectual</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> Quando o ENEM pede "a palavra X pode ser substituída por Y sem prejuízo de sentido",
          analise não só o significado central, mas também o registro (formal/informal), a carga valorativa
          (positiva/negativa) e a intensidade expressa pelo termo.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações entre palavras</span>
        <h2>3. Antonímia: Os Três Tipos de Oposição</h2>
        <p>
          A <strong>antonímia</strong> é a relação de oposição semântica entre palavras. Mas a oposição não é um
          fenômeno simples: há ao menos três tipos distintos de antonímia, cada um com lógica própria.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚫</span>
            <h3>Antonímia Complementar (Binária)</h3>
            <p>
              Pares em que negar um implica necessariamente afirmar o outro — não existe meio-termo.
              Ex.: <em>vivo / morto</em>, <em>presente / ausente</em>, <em>par / ímpar</em>, <em>casado / solteiro</em>.
              Se não é vivo, é morto; não há grau intermediário.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Antonímia Graduável (Contrária)</h3>
            <p>
              Pares que admitem graus intermediários numa escala. Ex.: <em>quente / frio</em> (existe morno, tépido);
              <em>alto / baixo</em>; <em>velho / novo</em>; <em>rico / pobre</em>. Negar "quente" não significa
              necessariamente "frio" — pode ser apenas "morno".
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Antonímia Inversa (Recíproca)</h3>
            <p>
              Pares em que a existência de um pressupõe a existência do outro numa relação de papéis opostos.
              Ex.: <em>comprar / vender</em>, <em>dar / receber</em>, <em>professor / aluno</em>,
              <em>pai / filho</em>. Não há venda sem compra, nem doação sem recebimento.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Resumo esquemático:</strong>
          <ul style={{ marginTop: "0.5rem" }}>
            <li><strong>Complementar:</strong> vivo ↔ morto (sem grau intermediário)</li>
            <li><strong>Graduável:</strong> quente — morno — frio (escala de graus)</li>
            <li><strong>Recíproca:</strong> comprador ↔ vendedor (papéis que se pressupõem)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações entre palavras</span>
        <h2>4. Hiponímia, Hiperonímia e Meronímia</h2>
        <p>
          Além de sinonímia e antonímia, as palavras podem se relacionar por <em>inclusão hierárquica</em>. Essas relações
          são fundamentais para a construção da coesão textual e aparecem em questões de substituição de termos no ENEM.
        </p>
        <p>
          Na relação de <strong>hiponímia e hiperonímia</strong>, um termo mais específico (hipônimo) está contido
          semanticamente em um termo mais geral (hiperônimo). <em>Rosa</em> é hipônimo de <em>flor</em>:
          toda rosa é uma flor, mas nem toda flor é rosa. <em>Flor</em> é, portanto, o hiperônimo de rosa, margarida,
          girassol e tulipa. Pense numa hierarquia: o hiperônimo é o "topo" e os hipônimos são as "espécies" abaixo.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 500 220"
            width="500"
            height="220"
            aria-label="Diagrama de hiperonímia e hiponímia: ser vivo > animal > mamífero > cachorro"
          >
            <rect x="180" y="10" width="140" height="40" rx="8" fill="#6366f1" />
            <text x="250" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Ser vivo</text>

            <line x1="250" y1="50" x2="250" y2="75" stroke="#94a3b8" strokeWidth="2" />

            <rect x="180" y="75" width="140" height="40" rx="8" fill="#8b5cf6" />
            <text x="250" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Animal</text>

            <line x1="250" y1="115" x2="250" y2="140" stroke="#94a3b8" strokeWidth="2" />

            <rect x="180" y="140" width="140" height="40" rx="8" fill="#a78bfa" />
            <text x="250" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Mamífero</text>

            <line x1="250" y1="180" x2="100" y2="200" stroke="#94a3b8" strokeWidth="2" />
            <line x1="250" y1="180" x2="250" y2="200" stroke="#94a3b8" strokeWidth="2" />
            <line x1="250" y1="180" x2="400" y2="200" stroke="#94a3b8" strokeWidth="2" />

            <rect x="30" y="195" width="120" height="22" rx="6" fill="#c4b5fd" />
            <text x="90" y="210" textAnchor="middle" fill="#1e1b4b" fontSize="12">Cachorro</text>

            <rect x="190" y="195" width="120" height="22" rx="6" fill="#c4b5fd" />
            <text x="250" y="210" textAnchor="middle" fill="#1e1b4b" fontSize="12">Golfinho</text>

            <rect x="350" y="195" width="120" height="22" rx="6" fill="#c4b5fd" />
            <text x="410" y="210" textAnchor="middle" fill="#1e1b4b" fontSize="12">Baleia</text>

            <text x="10" y="170" fill="#64748b" fontSize="11" fontStyle="italic">← hiperônimo</text>
            <text x="10" y="210" fill="#64748b" fontSize="11" fontStyle="italic">← hipônimos</text>
          </svg>
          <figcaption>Hierarquia semântica: cada nível é hipônimo do nível acima e hiperônimo do nível abaixo.</figcaption>
        </figure>

        <p>
          Já a <strong>meronímia</strong> é a relação <em>parte-todo</em>: um merônimo é uma parte que integra um todo maior.
          Exemplos: <em>dedo</em> é merônimo de <em>mão</em>; <em>roda</em> é merônimo de <em>carro</em>; <em>página</em>
          é merônimo de <em>livro</em>. Diferente da hiponímia — onde o hipônimo <em>é um tipo de</em> hiperônimo —,
          na meronímia o merônimo <em>é uma parte de</em> um todo. Uma roda não é um tipo de carro; ela é uma parte do carro.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação</th>
                <th>Pergunta-chave</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hiponímia</strong></td>
                <td>"X é um tipo de Y?"</td>
                <td>Rosa é um tipo de flor ✓</td>
              </tr>
              <tr>
                <td><strong>Hiperonímia</strong></td>
                <td>"Y é o termo geral de X?"</td>
                <td>Flor é o termo geral de rosa, margarida ✓</td>
              </tr>
              <tr>
                <td><strong>Meronímia</strong></td>
                <td>"X é uma parte de Y?"</td>
                <td>Dedo é uma parte de mão ✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenômenos semânticos</span>
        <h2>5. Polissemia vs. Homonímia</h2>
        <p>
          Duas situações distintas ocorrem quando uma mesma sequência de letras remete a significados diferentes:
          a <strong>polissemia</strong> e a <strong>homonímia</strong>. Confundi-las é erro comum, mas a distinção
          é conceitual e historicamente importante.
        </p>
        <p>
          Na <strong>polissemia</strong>, uma palavra possui <em>múltiplos significados</em> que derivam uns dos outros
          por extensão metafórica ou metonímica — ou seja, há uma <em>origem comum</em> e os sentidos são relacionados.
          A palavra <em>cabeça</em>, por exemplo, significa a parte do corpo, mas também "líder de uma organização",
          "extremidade de um prego", "cabeça do processo judicial". Todos esses sentidos partem da ideia central de
          "extremidade superior" ou "ponto de controle". Outro exemplo clássico: <em>banco</em> (assento) e{" "}
          <em>banco</em> (instituição financeira) — ambos derivam do latim <em>bancus</em> (mesa/banco de troca de moedas),
          o que os aproxima da polissemia histórica.
        </p>
        <p>
          Na <strong>homonímia</strong>, duas palavras distintas — com <em>origens etimológicas diferentes</em> — coincidem
          na forma escrita ou falada. Elas são acidentalmente iguais. Os homônimos subdividem-se em:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👁️</span>
            <h3>Homógrafos</h3>
            <p>
              Mesma grafia, pronúncia diferente. Ex.: <em>molho</em> (molho de tempero, com "o" fechado) vs.
              <em>molho</em> (eu molho, com "o" aberto). <em>Colher</em> (verbo: colher frutos) vs.
              <em>colher</em> (substantivo: utensílio de cozinha).
            </p>
          </div>
          <div className="lesson-card">
            <span>👂</span>
            <h3>Homófonos</h3>
            <p>
              Mesma pronúncia, grafia diferente. Ex.: <em>acender</em> (ligar, inflamar) vs.
              <em>ascender</em> (subir, elevar-se). <em>Conserto</em> (reparo) vs.
              <em>concerto</em> (espetáculo musical).
            </p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Homônimos Perfeitos</h3>
            <p>
              Mesma grafia E mesma pronúncia, mas origens diferentes. Ex.: <em>canto</em> (ação de cantar) vs.
              <em>canto</em> (extremidade, canto da parede). <em>Manga</em> (fruta) vs. <em>manga</em> (parte da camisa).
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Como distinguir polissemia de homonímia na prática:</strong> Na polissemia, os sentidos guardam
          relação lógica ou histórica entre si (é possível perceber uma "família" de significados). Na homonímia,
          os sentidos são completamente independentes — é mera coincidência formal. O critério rigoroso é
          <em>etimológico</em>: mesma origem = polissemia; origens distintas = homonímia.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ortografia e vocabulário</span>
        <h2>6. Paronímia: Os Pares que o ENEM Adora</h2>
        <p>
          <strong>Parônimos</strong> são palavras <em>parecidas na forma</em> (grafia ou pronúncia) mas com significados
          completamente diferentes. Confundi-los é sinal de vocabulário impreciso — e o ENEM explora exatamente
          essa imprecisão para testar o candidato. Dominar os pares paronímicos mais frequentes é essencial.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Par Paronímico</th>
                <th>Significados</th>
                <th>Exemplo de uso correto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>discriminar / descriminar</strong></td>
                <td>
                  <em>discriminar</em>: diferenciar; tratar com preconceito.
                  <em>descriminar</em>: retirar a tipificação criminal de algo.
                </td>
                <td>"Discriminar pessoas por raça é crime." / "O Congresso votou descriminar o uso pessoal."</td>
              </tr>
              <tr>
                <td><strong>infligir / infringir</strong></td>
                <td>
                  <em>infligir</em>: causar, impor (castigo, dor, derrota).
                  <em>infringir</em>: transgredir, violar (lei, norma, regra).
                </td>
                <td>"O juiz infligiu pena severa." / "Ele infringiu o código de trânsito."</td>
              </tr>
              <tr>
                <td><strong>tráfego / tráfico</strong></td>
                <td>
                  <em>tráfego</em>: fluxo de veículos, circulação de trânsito.
                  <em>tráfico</em>: comércio ilegal de substâncias ou pessoas.
                </td>
                <td>"O tráfego estava intenso." / "O tráfico de drogas é crime."</td>
              </tr>
              <tr>
                <td><strong>comprimento / cumprimento</strong></td>
                <td>
                  <em>comprimento</em>: extensão, medida longitudinal.
                  <em>cumprimento</em>: saudação; ato de cumprir.
                </td>
                <td>"O comprimento da piscina é 25m." / "Dei um cumprimento ao diretor."</td>
              </tr>
              <tr>
                <td><strong>seção / sessão / cessão</strong></td>
                <td>
                  <em>seção</em>: parte, divisão de um estabelecimento.
                  <em>sessão</em>: período de tempo; reunião.
                  <em>cessão</em>: ato de ceder algo a alguém.
                </td>
                <td>"Seção de eletrodomésticos." / "Sessão do Senado." / "Cessão de direitos."</td>
              </tr>
              <tr>
                <td><strong>eminente / iminente</strong></td>
                <td>
                  <em>eminente</em>: ilustre, destacado, de grande prestígio.
                  <em>iminente</em>: que está prestes a acontecer, imediato.
                </td>
                <td>"Um eminente jurista." / "Risco iminente de desabamento."</td>
              </tr>
              <tr>
                <td><strong>ratificar / retificar</strong></td>
                <td>
                  <em>ratificar</em>: confirmar, aprovar, homologar.
                  <em>retificar</em>: corrigir, retificar um erro.
                </td>
                <td>"O Senado ratificou o tratado." / "Precisei retificar minha declaração."</td>
              </tr>
              <tr>
                <td><strong>flagrante / fragrante</strong></td>
                <td>
                  <em>flagrante</em>: evidente, que ocorre no momento; preso em flagrante.
                  <em>fragrante</em>: que tem fragrância, perfumado.
                </td>
                <td>"Preso em flagrante delito." / "Uma rosa fragrante."</td>
              </tr>
              <tr>
                <td><strong>cavaleiro / cavalheiro</strong></td>
                <td>
                  <em>cavaleiro</em>: aquele que monta cavalo; guerreiro medieval.
                  <em>cavalheiro</em>: homem cortês, bem-educado, gentleman.
                </td>
                <td>"O cavaleiro galopou pelo campo." / "Ele foi um cavalheiro ao abrir a porta."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Macete para paronímia:</strong> Sempre que encontrar dois termos parecidos na grafia, pergunte-se:
          "Qual é a origem desta palavra?" e "Qual é o contexto de uso?". Confundir <em>infligir</em> com{" "}
          <em>infringir</em>, por exemplo, pode mudar completamente o sentido de uma sentença jurídica ou jornalística.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Organização do vocabulário</span>
        <h2>7. Campo Semântico vs. Campo Lexical</h2>
        <p>
          Dois conceitos frequentemente confundidos — mas com diferenças importantes — organizam o vocabulário
          em grupos relacionados: o <strong>campo semântico</strong> e o <strong>campo lexical</strong>.
        </p>
        <p>
          O <strong>campo semântico</strong> reúne palavras que compartilham um componente de <em>significado</em>
          (um traço semântico em comum), independentemente de pertencerem à mesma classe gramatical ou ao mesmo
          tema superficial. Por exemplo, o traço [+humano] agrupa: homem, mulher, criança, pessoa, indivíduo.
          O traço [+movimento] agrupa: correr, voar, fluir, girar, deslizar. É uma categorização baseada em
          propriedades conceituais compartilhadas.
        </p>
        <p>
          O <strong>campo lexical</strong> reúne palavras que circulam em torno de um mesmo <em>tema ou área de conhecimento</em>,
          sem necessariamente compartilharem um traço semântico único. O campo lexical de "hospital" inclui:
          médico, enfermeiro, cirurgia, leito, prontuário, UTI, alta, diagnóstico, remédio. São palavras ligadas
          ao universo hospitalar por associação temática.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Campo Semântico</h3>
            <p>
              Baseado em traço de significado compartilhado. Ex.: [+líquido]: água, leite, suco, sangue, óleo —
              todos partilham a propriedade de serem líquidos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Campo Lexical</h3>
            <p>
              Baseado em tema ou domínio. Ex.: campo lexical de "futebol": gol, chute, trave, árbitro, falta,
              escanteio, impedimento — unidos pelo universo temático do esporte.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>No ENEM:</strong> O campo lexical é muito usado em questões de interpretação. Quando um texto sobre
          política usa palavras como "batalha", "arena", "aliados", "inimigos" e "vitória", ele ativa o campo lexical
          da guerra para falar de disputas políticas — criando um efeito metafórico coeso que o leitor deve identificar.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Evolução dos sentidos</span>
        <h2>8. Mudança Semântica Histórica</h2>
        <p>
          As palavras não têm significados fixos e eternos: eles mudam com o tempo, com a cultura e com o uso social.
          A <strong>semântica histórica</strong> (ou diacrônica) estuda justamente essas transformações. Há quatro
          processos clássicos de mudança semântica que o ENEM pode explorar em textos comparativos ou questões
          sobre o léxico.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 200"
            width="560"
            height="200"
            aria-label="Diagrama dos quatro processos de mudança semântica: alargamento, restrição, elevação e degradação"
          >
            <rect x="10" y="20" width="125" height="70" rx="8" fill="#0ea5e9" />
            <text x="72" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Alargamento</text>
            <text x="72" y="62" textAnchor="middle" fill="white" fontSize="10">sentido específico</text>
            <text x="72" y="76" textAnchor="middle" fill="white" fontSize="10">→ sentido geral</text>
            <text x="72" y="108" textAnchor="middle" fill="#0c4a6e" fontSize="10" fontStyle="italic">"virtude": excelência</text>
            <text x="72" y="120" textAnchor="middle" fill="#0c4a6e" fontSize="10" fontStyle="italic">→ qualidade moral</text>

            <rect x="145" y="20" width="125" height="70" rx="8" fill="#10b981" />
            <text x="207" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Restrição</text>
            <text x="207" y="62" textAnchor="middle" fill="white" fontSize="10">sentido geral</text>
            <text x="207" y="76" textAnchor="middle" fill="white" fontSize="10">→ sentido específico</text>
            <text x="207" y="108" textAnchor="middle" fill="#064e3b" fontSize="10" fontStyle="italic">"freira": mulher religiosa</text>
            <text x="207" y="120" textAnchor="middle" fill="#064e3b" fontSize="10" fontStyle="italic">→ monja cristã</text>

            <rect x="280" y="20" width="125" height="70" rx="8" fill="#f59e0b" />
            <text x="342" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Elevação</text>
            <text x="342" y="62" textAnchor="middle" fill="white" fontSize="10">sentido pejorativo</text>
            <text x="342" y="76" textAnchor="middle" fill="white" fontSize="10">→ sentido positivo</text>
            <text x="342" y="108" textAnchor="middle" fill="#78350f" fontSize="10" fontStyle="italic">"ministro": servo</text>
            <text x="342" y="120" textAnchor="middle" fill="#78350f" fontSize="10" fontStyle="italic">→ autoridade de Estado</text>

            <rect x="415" y="20" width="125" height="70" rx="8" fill="#ef4444" />
            <text x="477" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Degradação</text>
            <text x="477" y="62" textAnchor="middle" fill="white" fontSize="10">sentido neutro/positivo</text>
            <text x="477" y="76" textAnchor="middle" fill="white" fontSize="10">→ sentido negativo</text>
            <text x="477" y="108" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontStyle="italic">"vilão": camponês</text>
            <text x="477" y="120" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontStyle="italic">→ malvado, criminoso</text>
          </svg>
          <figcaption>Os quatro processos clássicos de mudança semântica ao longo da história das línguas.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📡</span>
            <h3>Alargamento (Generalização)</h3>
            <p>
              O sentido original era restrito e passou a ser mais amplo. <em>Virtude</em> vinha do latim
              <em>virtus</em> (excelência, sobretudo militar) e hoje designa qualquer qualidade moral positiva.
              <em>Escrever</em> significava originalmente "gravar/riscar" e passou a designar todo registro
              de linguagem.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Restrição (Especialização)</h3>
            <p>
              O sentido original era amplo e ficou mais restrito. <em>Freira</em> significava "mulher religiosa"
              em geral e hoje designa apenas a monja. <em>Carne</em> em latim designava qualquer alimento
              sólido; em português ficou restrito ao músculo animal.
            </p>
          </div>
          <div className="lesson-card">
            <span>⬆️</span>
            <h3>Elevação (Amelioração)</h3>
            <p>
              O sentido ganhou valor positivo. <em>Ministro</em> vinha do latim <em>minister</em> (servo,
              subordinado) e hoje designa alta autoridade estatal. <em>Senhor</em> era simplesmente "mais velho"
              (do latim <em>senior</em>) e tornou-se título de respeito.
            </p>
          </div>
          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Degradação (Pejorização)</h3>
            <p>
              O sentido adquiriu valor negativo. <em>Vilão</em> vinha do latim <em>villanus</em> (camponês,
              morador de vila) e hoje significa malvado, bandido. <em>Estúpido</em> significava originalmente
              "atordoado, perplexo" e tornou-se insulto.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Neologismo semântico:</strong> Além da mudança histórica, palavras existentes podem adquirir
          novos sentidos por pressão cultural contemporânea — isso é o <strong>neologismo semântico</strong>.
          Ex.: <em>navegar</em> (ir pela água → percorrer a internet); <em>vírus</em> (agente biológico →
          programa de computador malicioso); <em>curtir</em> (tratar couro → gostar de algo na internet).
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Registro e efeito de sentido</span>
        <h2>9. Eufemismo, Disfemismo e Tabu Linguístico</h2>
        <p>
          Toda sociedade possui palavras e temas sobre os quais é difícil ou interdito falar diretamente —
          os chamados <strong>tabus linguísticos</strong>. Para lidar com esses temas, os falantes recorrem
          a estratégias semânticas: o <strong>eufemismo</strong> e o <strong>disfemismo</strong>.
        </p>
        <p>
          O <strong>eufemismo</strong> é a substituição de uma palavra ou expressão tabu por outra mais
          suave, indireta ou socialmente aceitável. O objetivo é amenizar o impacto emocional, respeitar
          convenções sociais ou tratar de temas delicados com delicadeza. Exemplos: "ir a melhor" (morrer);
          "portador de necessidades especiais" (pessoa com deficiência); "colaborador" (funcionário, servo);
          "terceira idade" (velhice); "intervir militarmente" (invadir um país). Publicidade, jornalismo
          e discurso político são repletos de eufemismos.
        </p>
        <p>
          O <strong>disfemismo</strong> é o processo inverso: substituir uma expressão neutra por outra
          mais rude, chocante ou depreciativa, muitas vezes para provocar, ironizar ou intensificar. Exemplos:
          "morrer" por "esticar as canelas"; "beber demais" por "entornar o caldo"; chamar funcionários
          de "peões" num tom depreciativo. O disfemismo é muito usado em humor, ironia e crítica social.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🕊️</span>
            <h3>Eufemismo</h3>
            <p>
              Suaviza o tabu. <em>Morrer</em> → "partir", "adormecer", "ir à melhor", "falecer", "perder a vida".
              Cada substituição atenua a brutalidade do fato.
            </p>
          </div>
          <div className="lesson-card">
            <span>💢</span>
            <h3>Disfemismo</h3>
            <p>
              Intensifica, choca ou ironiza. <em>Morrer</em> → "bater as botas", "esticar as canelas",
              "virar presunto". Usado em humor, irreverência ou crítica.
            </p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Tabu Linguístico</h3>
            <p>
              Palavra ou tema que a sociedade evita mencionar diretamente: morte, sexo, doenças estigmatizadas,
              órgãos genitais, excreção. O tabu varia conforme a cultura e a época.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>No ENEM:</strong> Questões sobre eufemismo aparecem em textos de publicidade ("produto
          de higiene íntima" para falar de absorventes), discurso político ("ajuste fiscal" para cortes
          de direitos sociais) e textos literários. O candidato deve identificar o efeito produzido pela
          escolha do falante de amenizar ou intensificar o sentido de um tema delicado.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Denotação, Conotação e o Uso Estratégico do Sentido</h2>
        <p>
          Toda palavra pode ser usada em dois planos de significação: o <strong>denotativo</strong> e o{" "}
          <strong>conotativo</strong>. Compreender esse par é base da interpretação de textos poéticos,
          publicitários e argumentativos no ENEM.
        </p>
        <p>
          O <strong>sentido denotativo</strong> é o significado literal, objetivo, registrado em dicionários —
          aquele que independe do contexto emocional ou cultural. "O leão tem juba densa" usa "leão" em sentido
          denotativo: refere-se ao animal real <em>Panthera leo</em>.
        </p>
        <p>
          O <strong>sentido conotativo</strong> é o significado figurado, subjetivo, culturalmente construído.
          "Aquele homem é um leão nos negócios" usa "leão" conotativamente: evoca força, agressividade, poder
          de predação — qualidades atribuídas ao animal que são transpostas, metaforicamente, para o comportamento humano.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Uso denotativo</th>
                <th>Uso conotativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>fogo</strong></td>
                <td>"O fogo destruiu a floresta."</td>
                <td>"Aquela mulher tem fogo nos olhos." (intensidade, paixão)</td>
              </tr>
              <tr>
                <td><strong>pedra</strong></td>
                <td>"A pedra bloqueava o caminho."</td>
                <td>"Ele tem coração de pedra." (insensibilidade)</td>
              </tr>
              <tr>
                <td><strong>raiz</strong></td>
                <td>"As raízes da árvore são profundas."</td>
                <td>"Minhas raízes são nordestinas." (origem, identidade)</td>
              </tr>
              <tr>
                <td><strong>luz</strong></td>
                <td>"A luz do sol ilumina o quarto."</td>
                <td>"Ele foi a luz da minha vida." (alegria, salvação)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Resumão semântico para o ENEM:</strong>
          <ul style={{ marginTop: "0.5rem" }}>
            <li><strong>Sinonímia perfeita é rara</strong> — o contexto sempre define qual sinônimo é mais adequado.</li>
            <li><strong>Antonímia tem três tipos</strong>: complementar (vivo/morto), graduável (quente/frio), recíproca (comprar/vender).</li>
            <li><strong>Hipônimo</strong> é o termo específico; <strong>hiperônimo</strong> é o termo geral; <strong>merônimo</strong> é a parte.</li>
            <li><strong>Polissemia</strong>: uma palavra, múltiplos sentidos relacionados. <strong>Homonímia</strong>: formas iguais, origens distintas.</li>
            <li><strong>Parônimos</strong>: palavras parecidas com significados diferentes — erro gravíssimo em redação.</li>
            <li><strong>Mudança semântica</strong>: alargamento, restrição, elevação e degradação explicam como os sentidos evoluem.</li>
            <li><strong>Eufemismo</strong> suaviza; <strong>disfemismo</strong> choca — ambos são escolhas ideológicas.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Tipos de Antonímia"
          statement={
            <p>
              Analise os pares de palavras e identifique qual apresenta antonímia do tipo <strong>complementar (binária)</strong>,
              ou seja, aquela em que negar um termo implica necessariamente afirmar o outro, sem grau intermediário possível.
            </p>
          }
          options={[
            { letter: "a", text: "quente / frio" },
            { letter: "b", text: "rico / pobre" },
            { letter: "c", text: "vivo / morto", correct: true },
            { letter: "d", text: "alto / baixo" },
          ]}
          resolution={
            <p>
              O par <strong>vivo/morto</strong> é o único que não admite grau intermediário: um organismo ou está vivo
              ou está morto — não existe "meio-vivo". Os demais pares (quente/frio, rico/pobre, alto/baixo) admitem
              gradações intermediárias (morno, remediado, médio), caracterizando a <em>antonímia graduável</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Paronímia em Contexto"
          statement={
            <p>
              Leia o trecho: "O juiz determinou que o réu havia <em>___</em> as normas do contrato ao impor multas
              abusivas aos consumidores, conduta que lhe rendeu severa <em>___</em> judicial." Assinale a alternativa
              que preenche corretamente as lacunas com os parônimos adequados.
            </p>
          }
          options={[
            { letter: "a", text: "infligido / infringência" },
            { letter: "b", text: "infringido / infligência" },
            { letter: "c", text: "infringido / sanção", correct: true },
            { letter: "d", text: "infligido / sanção" },
          ]}
          resolution={
            <p>
              <strong>Infringir</strong> significa transgredir, violar uma norma ou lei — portanto, o réu "infringiu"
              as normas do contrato. <strong>Infligir</strong> significa causar ou impor (uma pena, castigo, dor) —
              logo, a conduta rendeu-lhe uma "sanção" judicial (pena imposta pelo juiz). A alternativa C é a única
              que usa ambos os parônimos corretamente no contexto jurídico apresentado.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Polissemia vs. Homonímia"
          statement={
            <p>
              Um linguista afirma que as duas ocorrências da palavra "banco" na frase "Sentei no banco em frente
              ao banco onde trabalho" constituem um caso de <em>polissemia</em>, enquanto um colega defende tratar-se
              de <em>homonímia perfeita</em>. Com base nos critérios rigorosos da semântica, qual posição é
              mais fundamentada?
            </p>
          }
          options={[
            { letter: "a", text: "A do primeiro linguista, pois ambas as palavras têm a mesma grafia e pronúncia." },
            {
              letter: "b",
              text: "A do segundo, pois banco (assento) e banco (instituição) têm origens etimológicas completamente distintas.",
            },
            {
              letter: "c",
              text: "A do primeiro, pois ambos os sentidos derivam historicamente do latim 'bancus' (mesa de troca), constituindo extensão semântica.",
              correct: true,
            },
            {
              letter: "d",
              text: "Nenhuma das duas, pois o fenômeno é exclusivamente de ambiguidade sintática.",
            },
          ]}
          resolution={
            <p>
              O critério rigoroso para distinguir polissemia de homonímia é <strong>etimológico</strong>. Tanto
              "banco" (assento) quanto "banco" (instituição financeira) derivam do latim <em>bancus</em>, que
              designava a mesa ou bancada onde cambistas medievais realizavam operações financeiras. O assento
              também herdou esse nome. Logo, trata-se de <em>polissemia</em>: uma mesma palavra com extensão
              histórica de sentido — e não de duas palavras diferentes que coincidiram na forma. A alternativa C
              é, portanto, a mais tecnicamente fundamentada.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Eufemismo e Discurso Político"
          statement={
            <p>
              Em nota oficial, um governo anunciou "medidas de racionalização de gastos públicos com realinhamento
              das políticas de pessoal". Analistas independentes traduziram a nota como "demissão em massa de
              servidores e corte de salários". Do ponto de vista semântico, o que o texto oficial evidencia?
            </p>
          }
          options={[
            { letter: "a", text: "Uso de disfemismo para chocar a opinião pública." },
            { letter: "b", text: "Uso de sinonímia perfeita entre os termos técnicos e os populares." },
            {
              letter: "c",
              text: "Uso estratégico de eufemismos para atenuar o impacto social de medidas impopulares, apagando a carga negativa dos referentes reais.",
              correct: true,
            },
            { letter: "d", text: "Uso de hiperônimos para ampliar o alcance semântico da mensagem." },
          ]}
          resolution={
            <p>
              O texto oficial emprega <strong>eufemismos</strong> sistematicamente: "racionalização de gastos"
              substitui "corte"; "realinhamento das políticas de pessoal" substitui "demissão". Cada escolha
              lexical atenua a carga negativa da realidade descrita, tornando medidas duras soarem como
              procedimentos técnicos e neutros. Esse uso ideológico da semântica — em que o <em>eufemismo</em>
              serve para ocultar realidades socialmente impactantes — é exatamente o tipo de análise que o
              ENEM exige do candidato em textos de natureza política e jornalística.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Campo Lexical e Efeito de Sentido"
          statement={
            <p>
              Em uma crônica esportiva, o autor descreve uma negociação salarial entre clube e jogador usando
              as palavras: "batalha", "trincheiras", "rendição", "ultimato", "capitulação" e "vitória".
              Que efeito semântico esse conjunto de palavras produz no texto?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Cria um campo lexical da diplomacia, sugerindo que a negociação foi pacífica e civilizada.",
            },
            {
              letter: "b",
              text: "Aciona o campo lexical da guerra para metaforizar a negociação como conflito de forças opostas, intensificando dramaticamente a tensão da disputa.",
              correct: true,
            },
            {
              letter: "c",
              text: "Usa hiperônimos da área jurídica para dar precisão técnica ao relato.",
            },
            {
              letter: "d",
              text: "Emprega eufemismos para suavizar os aspectos financeiros da negociação.",
            },
          ]}
          resolution={
            <p>
              O autor constrói um <strong>campo lexical da guerra</strong> ("batalha", "trincheiras", "rendição",
              "ultimato", "capitulação", "vitória") para descrever o que seria uma negociação contratual.
              Esse recurso — chamado de <em>metáfora estrutural</em> — transfere o esquema conceitual do
              conflito armado para o mundo dos negócios, intensificando dramaticamente a percepção do leitor
              sobre a disputa. O candidato deve reconhecer que o campo lexical escolhido não é neutro: ele
              constrói ativamente um ponto de vista sobre os eventos narrados.
            </p>
          }
        />
      </section>
    </article>
  );
}
