"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">

      <div className="lesson-hero">
        <span className="lesson-badge">Português • Capítulo 12</span>
        <h1>Classes Gramaticais I</h1>
        <p>
          As classes gramaticais são a espinha dorsal da gramática normativa e respondem por um dos temas mais
          recorrentes no ENEM e em vestibulares. Neste capítulo você vai dominar <strong>substantivo</strong>,{" "}
          <strong>artigo</strong>, <strong>adjetivo</strong>, <strong>numeral</strong> e <strong>pronome</strong>{" "}
          — com todas as subclassificações, graus, irregularidades e os usos expressivos que as bancas adoram
          cobrar. Dominar essas classes é dominar a estrutura da frase e a precisão do texto.
        </p>
      </div>

      {/* SEÇÃO 1 — SUBSTANTIVO: CONCEITO E CLASSIFICAÇÕES BÁSICAS */}
      <section className="lesson-section">
        <span className="section-kicker">1 · Substantivo</span>
        <h2>Conceito e Classificações Básicas</h2>
        <p>
          O <strong>substantivo</strong> é a classe de palavras que nomeia seres, objetos, lugares, sentimentos,
          ações, qualidades e tudo o que pode ser concebido como existente no pensamento. É o núcleo do sujeito
          e do objeto na oração, influenciando diretamente a concordância verbal e nominal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏷️</span>
            <h3>Próprio</h3>
            <p>
              Nomeia um ser específico, individualizado: <em>Brasil, Maria, Amazônia, Google</em>. Escreve-se
              sempre com inicial maiúscula.
            </p>
          </div>
          <div className="lesson-card">
            <span>📦</span>
            <h3>Comum</h3>
            <p>
              Nomeia seres de uma mesma espécie genericamente: <em>país, mulher, rio, empresa</em>. Escreve-se
              com inicial minúscula (exceto no início de frase).
            </p>
          </div>
          <div className="lesson-card">
            <span>🪨</span>
            <h3>Concreto</h3>
            <p>
              Nomeia seres com existência independente, real ou imaginária: <em>pedra, fada, Deus, mesa</em>.
              Pode ser visualizado ou imaginado.
            </p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Abstrato</h3>
            <p>
              Nomeia ações, estados, sentimentos e qualidades abstraídos de outro ser: <em>amor, corrida,
              beleza, saudade</em>. Depende de outro ser para existir.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Primitivo</h3>
            <p>
              Não deriva de outra palavra da língua: <em>pedra, flor, mar, dente</em>. É a base a partir da
              qual se formam outros substantivos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Derivado</h3>
            <p>
              Origina-se de outra palavra: <em>pedreiro, floricultura, marinheiro</em>. Identificado pelos
              afixos (prefixos e sufixos) acrescentados ao radical.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Simples</h3>
            <p>
              Formado por um único radical: <em>sol, casa, água, pé</em>. O processo formativo mais elementar
              da língua.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Composto</h3>
            <p>
              Formado por dois ou mais radicais: <em>guarda-chuva, girassol, beija-flor, passatempo</em>. Pode
              ser escrito com ou sem hífen conforme o Acordo Ortográfico.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — SUBSTANTIVO COLETIVO */}
      <section className="lesson-section">
        <span className="section-kicker">2 · Substantivo</span>
        <h2>Substantivo Coletivo</h2>
        <p>
          O <strong>substantivo coletivo</strong> está no singular mas indica um conjunto de seres da mesma
          espécie. A concordância do verbo pode ser feita no singular ou no plural dependendo da estrutura da
          frase — tópico recorrente no ENEM. Confira os coletivos mais cobrados:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Coletivo</th>
                <th>Refere-se a</th>
                <th>Coletivo</th>
                <th>Refere-se a</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>alcateia</strong></td><td>lobos</td><td><strong>cardume</strong></td><td>peixes</td></tr>
              <tr><td><strong>matilha</strong></td><td>cães de caça</td><td><strong>vara</strong></td><td>porcos</td></tr>
              <tr><td><strong>manada</strong></td><td>bovinos / elefantes</td><td><strong>récua</strong></td><td>animais de carga</td></tr>
              <tr><td><strong>revoada</strong></td><td>pássaros (em voo)</td><td><strong>corja</strong></td><td>malfeitores</td></tr>
              <tr><td><strong>bando</strong></td><td>aves / ladrões</td><td><strong>horda</strong></td><td>bárbaros / povos nômades</td></tr>
              <tr><td><strong>enxame</strong></td><td>abelhas / vespas</td><td><strong>falange</strong></td><td>soldados</td></tr>
              <tr><td><strong>ramalhete</strong></td><td>flores</td><td><strong>acervo</strong></td><td>livros / obras</td></tr>
              <tr><td><strong>arquipélago</strong></td><td>ilhas</td><td><strong>constelação</strong></td><td>estrelas</td></tr>
              <tr><td><strong>clã</strong></td><td>família / tribo</td><td><strong>legião</strong></td><td>soldados / pessoas</td></tr>
              <tr><td><strong>penca</strong></td><td>bananas / chaves</td><td><strong>galeria</strong></td><td>quadros / pinturas</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Quando o coletivo vem seguido de adjunto adnominal no plural
          — <em>"Uma alcateia <u>de lobos</u> atacou…"</em> — o verbo pode ficar no singular
          (concordância gramatical) ou no plural (concordância atrativa / por atração). Ambas as formas
          são aceitas pela gramática normativa. As bancas costumam cobrar a alternativa que classifica
          incorretamente a forma plural como "erro".
        </div>
      </section>

      {/* SEÇÃO 3 — GÊNERO, NÚMERO E GRAU DO SUBSTANTIVO */}
      <section className="lesson-section">
        <span className="section-kicker">3 · Substantivo</span>
        <h2>Gênero, Número e Grau</h2>
        <p>
          O substantivo varia em <strong>gênero</strong> (masculino/feminino), <strong>número</strong>{" "}
          (singular/plural) e <strong>grau</strong> (aumentativo/diminutivo). Essas variações têm
          peculiaridades que frequentemente aparecem nas provas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 290" width="680" height="290" aria-label="Diagrama dos tipos de gênero dos substantivos">
            <rect x="0" y="0" width="680" height="290" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5"/>
            <text x="340" y="32" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">Gênero dos Substantivos</text>

            <rect x="20" y="50" width="155" height="72" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="97" y="75" textAnchor="middle" fontWeight="700" fontSize="12" fill="#1d4ed8">Biforme</text>
            <text x="97" y="92" textAnchor="middle" fontSize="10" fill="#1e40af">aluno / aluna</text>
            <text x="97" y="107" textAnchor="middle" fontSize="10" fill="#1e40af">leão / leoa</text>

            <rect x="195" y="50" width="155" height="72" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="272" y="75" textAnchor="middle" fontWeight="700" fontSize="12" fill="#15803d">Dois Gêneros</text>
            <text x="272" y="92" textAnchor="middle" fontSize="10" fill="#166534">o / a estudante</text>
            <text x="272" y="107" textAnchor="middle" fontSize="10" fill="#166534">o / a colega</text>

            <rect x="370" y="50" width="155" height="72" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5"/>
            <text x="447" y="75" textAnchor="middle" fontWeight="700" fontSize="12" fill="#92400e">Epiceno</text>
            <text x="447" y="92" textAnchor="middle" fontSize="10" fill="#92400e">a cobra macho/fêmea</text>
            <text x="447" y="107" textAnchor="middle" fontSize="10" fill="#92400e">o jacaré macho/fêmea</text>

            <rect x="100" y="158" width="185" height="72" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
            <text x="192" y="183" textAnchor="middle" fontWeight="700" fontSize="12" fill="#9d174d">Sobrecomum</text>
            <text x="192" y="200" textAnchor="middle" fontSize="10" fill="#9d174d">a criança (masc. ou fem.)</text>
            <text x="192" y="215" textAnchor="middle" fontSize="10" fill="#9d174d">a vítima · a testemunha</text>

            <rect x="310" y="158" width="220" height="72" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="420" y="183" textAnchor="middle" fontWeight="700" fontSize="12" fill="#5b21b6">Uniforme (único gênero)</text>
            <text x="420" y="200" textAnchor="middle" fontSize="10" fill="#5b21b6">o livro · a flor</text>
            <text x="420" y="215" textAnchor="middle" fontSize="10" fill="#5b21b6">artigo indica o gênero</text>

            <text x="340" y="262" textAnchor="middle" fontSize="11" fill="#64748b">Epiceno e sobrecomum: sexo indicado por "macho/fêmea" ou pelo contexto</text>
          </svg>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Grau</th>
                <th>Forma Analítica</th>
                <th>Forma Sintética</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aumentativo</strong></td>
                <td>casa <em>grande</em></td>
                <td>casarão, casão</td>
                <td>Sufixos: -ão, -aço, -arra, -ona</td>
              </tr>
              <tr>
                <td><strong>Diminutivo</strong></td>
                <td>casa <em>pequena</em></td>
                <td>casinha, casula</td>
                <td>Sufixos: -inho/-zinho, -ete, -cula</td>
              </tr>
              <tr>
                <td><strong>Dim. afetivo</strong></td>
                <td>—</td>
                <td>filhinho, amorзinho</td>
                <td>Não indica tamanho; exprime carinho</td>
              </tr>
              <tr>
                <td><strong>Dim. depreciativo</strong></td>
                <td>—</td>
                <td>poetastro, medicastro</td>
                <td>Sufixo -astro: indica inferioridade</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Plural irregular — cobrado em prova:</strong> cidadão → cidadãos; mão → mãos;
          cão → cães; pão → pães; alemão → alemães; barão → barões; capitão → capitães. A terminação
          varia conforme a etimologia latina e não obedece a uma regra única — é preciso memorizar
          por grupos.
        </div>
      </section>

      {/* SEÇÃO 4 — ARTIGO */}
      <section className="lesson-section">
        <span className="section-kicker">4 · Artigo</span>
        <h2>Artigo: Definido, Indefinido e Seus Usos</h2>
        <p>
          O <strong>artigo</strong> é a classe que antecede o substantivo, determinando-o de modo
          específico (definido) ou genérico (indefinido). Além de determinar o referente, indica gênero
          e número do substantivo que acompanha, sendo fundamental para a concordância nominal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Definido</h3>
            <p>
              <em>o, a, os, as</em> — indica ser já conhecido pelo interlocutor ou único em seu gênero:
              <em> "O sol nasceu cedo."</em> / <em>"A presidente discursou."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Indefinido</h3>
            <p>
              <em>um, uma, uns, umas</em> — indica ser indeterminado ou qualquer elemento de uma classe:
              <em> "Comprei um livro."</em> / <em>"Umas crianças brincavam."</em>
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Usos e Omissão do Artigo — Resumo Prático</strong>
          <br /><br />
          <strong>USO OBRIGATÓRIO:</strong><br />
          • Antes de nomes de países determinados: <em>o Brasil, a França, o Japão</em> (exceção: Portugal,
          Angola, Moçambique — sem artigo no PE; no PB há flutuação).<br />
          • Para substantivar qualquer palavra: <em>"O sim e o não são respostas."</em><br />
          • Após possessivo no PB: <em>"o meu carro"</em> — opcional no PE.<br /><br />
          <strong>OMISSÃO (casos principais):</strong><br />
          • Antes de nomes próprios de pessoas sem modificador: <em>"Maria chegou."</em>
          (mas: <em>"A Maria que eu conheço chegou."</em>)<br />
          • Após a preposição "de" em expressões partitivas: <em>"copo de água"</em> (não "copo da água").<br />
          • Em títulos, manchetes e provérbios: <em>"Homem morde cachorro."</em>
        </div>

        <div className="lesson-highlight">
          <strong>ENEM — Artigo e Sentido:</strong> A presença ou ausência do artigo pode alterar
          completamente o sentido da frase. Compare: <em>"Preciso de médico"</em> (qualquer médico) vs.
          <em> "Preciso do médico"</em> (de um médico específico). Essa distinção aparece em questões
          de interpretação textual e de variação linguística.
        </div>
      </section>

      {/* SEÇÃO 5 — ADJETIVO: CLASSIFICAÇÃO */}
      <section className="lesson-section">
        <span className="section-kicker">5 · Adjetivo</span>
        <h2>Adjetivo: Classificação e Locução Adjetiva</h2>
        <p>
          O <strong>adjetivo</strong> é a classe que caracteriza, qualifica ou classifica o substantivo,
          concordando com ele em gênero e número. É núcleo do predicativo do sujeito e do adjunto
          adnominal — funções sintáticas muito cobradas no ENEM.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Simples</h3>
            <p>
              Um único radical: <em>bonito, alto, verde, triste</em>. Quando integra um adjetivo composto,
              o elemento simples fica invariável, exceto o último.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Composto</h3>
            <p>
              Dois ou mais radicais: <em>luso-brasileiro, político-econômico, azul-escuro</em>. Regra: só
              o último elemento concorda; exceto quando o segundo é substantivo (<em>amarelo-ouro →
              invariável</em>).
            </p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Primitivo</h3>
            <p>
              Não deriva de outra classe: <em>bom, mau, grande, nobre</em>. Serve de base para a formação
              de outros adjetivos ou substantivos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Derivado</h3>
            <p>
              Origina-se de substantivo ou verbo: <em>amoroso (amor), amável (amar), nublado (nuvem)</em>.
              Identificado por sufixos como -oso, -ável, -ível, -ado, -ento.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Pátrio</h3>
            <p>
              Indica origem geográfica: <em>brasileiro, carioca, paulistano, parisiense, nipônico</em>.
              Pode funcionar como substantivo: <em>"Os brasileiros votaram."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Locução Adjetiva</h3>
            <p>
              Expressão (prep. + substantivo) com valor de adjetivo: <em>de ouro = áureo, de leite = lácteo,
              de herói = heroico, de rei = régio</em>.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Locução Adjetiva</th>
                <th>Adjetivo Equivalente</th>
                <th>Locução Adjetiva</th>
                <th>Adjetivo Equivalente</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>de ouro</td><td>áureo</td><td>de prata</td><td>argênteo</td></tr>
              <tr><td>de ferro</td><td>férreo</td><td>de fogo</td><td>ígneo</td></tr>
              <tr><td>de pedra</td><td>pétreo / lapídeo</td><td>de leite</td><td>lácteo</td></tr>
              <tr><td>de rei</td><td>régio</td><td>de mês</td><td>mensal</td></tr>
              <tr><td>de pai</td><td>paterno</td><td>de filho</td><td>filial</td></tr>
              <tr><td>de irmão</td><td>fraterno</td><td>de sol</td><td>solar</td></tr>
              <tr><td>de lua</td><td>lunar</td><td>de estrela</td><td>astral / estelar</td></tr>
              <tr><td>de cão</td><td>canino</td><td>de gato</td><td>felino</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 6 — GRAU DO ADJETIVO */}
      <section className="lesson-section">
        <span className="section-kicker">6 · Adjetivo</span>
        <h2>Grau do Adjetivo: Comparativo e Superlativo</h2>
        <p>
          O adjetivo varia em grau para expressar a intensidade da qualidade. O <strong>comparativo</strong>{" "}
          estabelece comparação entre dois seres; o <strong>superlativo</strong> eleva ou reduz ao máximo
          a qualidade de um ser em relação a um grupo ou em sentido absoluto.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 345" width="700" height="345" aria-label="Diagrama completo dos graus do adjetivo com exemplos">
            <rect x="0" y="0" width="700" height="345" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5"/>
            <text x="350" y="30" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">Graus do Adjetivo</text>

            <rect x="20" y="48" width="310" height="270" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="175" y="73" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1d4ed8">COMPARATIVO</text>

            <rect x="35" y="85" width="280" height="55" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="175" y="106" textAnchor="middle" fontWeight="600" fontSize="11" fill="#1e40af">Igualdade</text>
            <text x="175" y="121" textAnchor="middle" fontSize="10" fill="#1e3a8a">tão alto quanto / como</text>
            <text x="175" y="134" textAnchor="middle" fontSize="10" fill="#1e3a8a">"João é tão forte quanto Pedro."</text>

            <rect x="35" y="150" width="280" height="55" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="175" y="171" textAnchor="middle" fontWeight="600" fontSize="11" fill="#1e40af">Superioridade</text>
            <text x="175" y="186" textAnchor="middle" fontSize="10" fill="#1e3a8a">mais … do que / que</text>
            <text x="175" y="199" textAnchor="middle" fontSize="10" fill="#1e3a8a">"Ana é mais inteligente que Carlos."</text>

            <rect x="35" y="215" width="280" height="55" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
            <text x="175" y="236" textAnchor="middle" fontWeight="600" fontSize="11" fill="#1e40af">Inferioridade</text>
            <text x="175" y="251" textAnchor="middle" fontSize="10" fill="#1e3a8a">menos … do que / que</text>
            <text x="175" y="264" textAnchor="middle" fontSize="10" fill="#1e3a8a">"Este caminho é menos seguro que aquele."</text>

            <rect x="370" y="48" width="310" height="270" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="525" y="73" textAnchor="middle" fontWeight="700" fontSize="13" fill="#15803d">SUPERLATIVO</text>

            <rect x="385" y="85" width="280" height="100" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
            <text x="525" y="106" textAnchor="middle" fontWeight="600" fontSize="11" fill="#166534">Relativo</text>
            <text x="525" y="121" textAnchor="middle" fontSize="10" fill="#14532d">Superioridade: o mais … de / entre</text>
            <text x="525" y="135" textAnchor="middle" fontSize="10" fill="#14532d">"É o mais rápido da turma."</text>
            <text x="525" y="150" textAnchor="middle" fontSize="10" fill="#14532d">Inferioridade: o menos … de</text>
            <text x="525" y="164" textAnchor="middle" fontSize="10" fill="#14532d">"É o menos experiente do time."</text>

            <rect x="385" y="195" width="280" height="95" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
            <text x="525" y="216" textAnchor="middle" fontWeight="600" fontSize="11" fill="#166534">Absoluto</text>
            <text x="525" y="232" textAnchor="middle" fontSize="10" fill="#14532d">Analítico: muito belo, extremamente sábio</text>
            <text x="525" y="247" textAnchor="middle" fontSize="10" fill="#14532d">Sintético (sufixo -íssimo / -érrimo):</text>
            <text x="525" y="262" textAnchor="middle" fontSize="10" fill="#14532d">belíssimo · paupérrimo · celebérrimo</text>
            <text x="525" y="277" textAnchor="middle" fontSize="10" fill="#14532d">fidelíssimo · crudelíssimo</text>

            <text x="350" y="330" textAnchor="middle" fontSize="11" fill="#64748b">Formas irregulares: bom→ótimo · mau→péssimo · grande→máximo · pequeno→mínimo</text>
          </svg>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Adjetivo</th>
                <th>Comparativo Sup.</th>
                <th>Superlativo Relativo</th>
                <th>Superlativo Abs. Sint.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>bom</strong></td><td>melhor (que)</td><td>o melhor (de)</td><td>ótimo / boníssimo</td></tr>
              <tr><td><strong>mau</strong></td><td>pior (que)</td><td>o pior (de)</td><td>péssimo / malíssimo</td></tr>
              <tr><td><strong>grande</strong></td><td>maior (que)</td><td>o maior (de)</td><td>máximo / grandíssimo</td></tr>
              <tr><td><strong>pequeno</strong></td><td>menor (que)</td><td>o menor (de)</td><td>mínimo / pequeníssimo</td></tr>
              <tr><td><strong>alto</strong></td><td>superior (a)</td><td>o superior (de)</td><td>supremo / altíssimo</td></tr>
              <tr><td><strong>baixo</strong></td><td>inferior (a)</td><td>o inferior (de)</td><td>ínfimo / baixíssimo</td></tr>
              <tr><td><strong>célebre</strong></td><td>mais célebre</td><td>o mais célebre</td><td>celebérrimo</td></tr>
              <tr><td><strong>pobre</strong></td><td>mais pobre</td><td>o mais pobre</td><td>paupérrimo</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção — "mais melhor" e "mais pior":</strong> são formas <em>pleonásticas</em>{" "}
          (vício de linguagem), pois <em>melhor</em> e <em>pior</em> já são, por si mesmos, comparativos.
          O correto é apenas <em>melhor</em> ou <em>pior</em>. O ENEM cobra essa distinção em questões
          de adequação à norma culta.
        </div>
      </section>

      {/* SEÇÃO 7 — NUMERAL */}
      <section className="lesson-section">
        <span className="section-kicker">7 · Numeral</span>
        <h2>Numeral: Tipos e Usos</h2>
        <p>
          O <strong>numeral</strong> indica quantidade, ordem, multiplicação ou fração relacionada a seres.
          É frequentemente confundido com o pronome indefinido: a diferença está na precisão — o numeral
          indica quantidade exata, enquanto o pronome indefinido é vago.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Cardinal</h3>
            <p>
              Indica quantidade absoluta: <em>um, dois, cem, mil, um milhão</em>. É a base de todos os
              outros numerais. Ex.: <em>"Lí três livros."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Ordinal</h3>
            <p>
              Indica posição em série: <em>primeiro, segundo, décimo, vigésimo, centésimo</em>. Concorda
              em gênero e número. Ex.: <em>"Terminei em segundo lugar."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>✖️</span>
            <h3>Multiplicativo</h3>
            <p>
              Indica múltiplo: <em>dobro, triplo, quádruplo, quíntuplo, sêxtuplo, cêntuplo, duplo,
              décuplo</em>. Ex.: <em>"Ganhou o dobro do salário."</em>
            </p>
          </div>
          <div className="lesson-card">
            <span>➗</span>
            <h3>Fracionário</h3>
            <p>
              Indica parte: <em>meio, terço, quarto, quinto, décimo, centésimo</em>. A partir de 2/11
              usa-se o ordinal como denominador: <em>dois onze avos</em>.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Algarismos Romanos — os mais cobrados no ENEM</strong>
          <br /><br />
          I = 1 · V = 5 · X = 10 · L = 50 · C = 100 · D = 500 · M = 1000<br /><br />
          <strong>Regras de subtração:</strong> IV = 4 · IX = 9 · XL = 40 · XC = 90 · CD = 400 · CM = 900<br />
          <strong>Nunca subtrair:</strong> VV, LL, DD (letras que não se repetem para subtrair)<br /><br />
          <strong>Uso no cotidiano:</strong> capítulos (Cap. XII), séculos (séc. XXI), papas e reis
          (João Paulo II), artigos de lei, horas em relógios analógicos.
        </div>

        <div className="lesson-highlight">
          <strong>Cardinal × Ordinal — quando usar cada um?</strong> Para datas, usamos cardinal a
          partir do dia 2: <em>"dia dois de junho"</em> (não "dia segundo"). Para o primeiro dia usamos
          ordinal: <em>"primeiro de maio"</em>. Para papas e reis, ordinal até 10 e cardinal a partir
          de 11: <em>João Paulo II = João Paulo Segundo; Luís XIV = Luís Catorze</em>.
        </div>
      </section>

      {/* SEÇÃO 8 — PRONOME PESSOAL */}
      <section className="lesson-section">
        <span className="section-kicker">8 · Pronome</span>
        <h2>Pronome Pessoal: Reto, Oblíquo e Reflexivo</h2>
        <p>
          O <strong>pronome</strong> é a classe que substitui ou acompanha o substantivo. Os{" "}
          <strong>pronomes pessoais</strong> representam as três pessoas do discurso e variam conforme
          a função sintática que exercem na oração — sujeito, objeto direto, objeto indireto ou
          complemento oblíquo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Reto (sujeito)</th>
                <th>Oblíquo Átono (sem prep.)</th>
                <th>Oblíquo Tônico (com prep.)</th>
                <th>Reflexivo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1ª sing.</td><td><strong>eu</strong></td><td>me</td><td>mim, comigo</td><td>me</td></tr>
              <tr><td>2ª sing.</td><td><strong>tu</strong></td><td>te</td><td>ti, contigo</td><td>te</td></tr>
              <tr><td>3ª sing.</td><td><strong>ele / ela</strong></td><td>o, a, lhe</td><td>ele, ela</td><td>se, si, consigo</td></tr>
              <tr><td>1ª plur.</td><td><strong>nós</strong></td><td>nos</td><td>nós, conosco</td><td>nos</td></tr>
              <tr><td>2ª plur.</td><td><strong>vós</strong></td><td>vos</td><td>vós, convosco</td><td>vos</td></tr>
              <tr><td>3ª plur.</td><td><strong>eles / elas</strong></td><td>os, as, lhes</td><td>eles, elas</td><td>se, si, consigo</td></tr>
              <tr><td>Trat.</td><td><strong>você / vocês</strong></td><td>o, a, lhe / os, as, lhes</td><td>você(s)</td><td>se</td></tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Colocação Pronominal: Próclise, Ênclise e Mesóclise</strong><br /><br />
          <strong>Próclise</strong> (antes do verbo) — obrigatória em:<br />
          • Palavras atrativas: negação, advérbio sem pausa, pronome relativo, conjunção subordinativa<br />
          • Ex.: "Não <em>me</em> lembro." / "Quando <em>te</em> vejo, sorrio."<br /><br />
          <strong>Ênclise</strong> (depois do verbo) — usada em:<br />
          • Início de frase afirmativa, verbo no imperativo afirmativo, infinitivo impessoal<br />
          • Ex.: "Ajude-<em>me</em>." / "É preciso fazê-<em>lo</em>."<br /><br />
          <strong>Mesóclise</strong> (no meio do verbo) — usada apenas com:<br />
          • Futuro do presente e futuro do pretérito quando não há palavra atrativa<br />
          • Ex.: "Dar-<em>te</em>-ei o livro." / "Far-<em>me</em>-ia um favor."
        </div>

        <div className="lesson-highlight">
          <strong>Erro clássico no ENEM:</strong> "Entre eu e você" está errado. Após preposição,
          usa-se pronome oblíquo tônico: <em>"Entre mim e você"</em>. Outro caso: "para mim fazer"
          × "para eu fazer" — se houver verbo no infinitivo, o pronome exerce a função de sujeito,
          logo usa-se <em>eu</em>: <em>"para eu fazer"</em>. Se não houver verbo dependente,
          usa-se <em>mim</em>: <em>"isso é para mim"</em>.
        </div>
      </section>

      {/* SEÇÃO 9 — OUTROS PRONOMES */}
      <section className="lesson-section">
        <span className="section-kicker">9 · Pronome</span>
        <h2>Pronomes Possessivo, Demonstrativo, Indefinido e Interrogativo</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Possessivo</h3>
            <p>
              Indica posse em relação às pessoas do discurso: <em>meu/minha, teu/tua, seu/sua,
              nosso/nossa, vosso/vossa</em>. Ambiguidade de "seu": pode referir-se à 2ª ou à 3ª pessoa
              — use "dele/dela" para precisão.
            </p>
          </div>
          <div className="lesson-card">
            <span>👉</span>
            <h3>Demonstrativo</h3>
            <p>
              Situa o ser no espaço, no tempo ou no texto: <em>este/esse/aquele</em> e variações;
              <em> isto/isso/aquilo</em>. Regra textual: <em>este</em> aponta para o que vem depois
              (catáfora); <em>esse</em> retoma o que veio antes (anáfora).
            </p>
          </div>
          <div className="lesson-card">
            <span>🤷</span>
            <h3>Indefinido</h3>
            <p>
              Refere-se ao substantivo de modo vago: <em>alguém, ninguém, tudo, nada, algo, cada,
              certo, qualquer, vários, todo, algum, nenhum, outro</em>. Podem ser variáveis ou
              invariáveis.
            </p>
          </div>
          <div className="lesson-card">
            <span>❔</span>
            <h3>Interrogativo</h3>
            <p>
              Introduz pergunta sobre seres ou quantidade: <em>quem, que, qual/quais, quanto/quanta/
              quantos/quantas</em>. Usados em orações interrogativas diretas e indiretas.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Demonstrativo</th>
                <th>Espaço</th>
                <th>Tempo</th>
                <th>Referência Textual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>este / esta / isto</strong></td>
                <td>Próximo do falante (1ª pessoa)</td>
                <td>Presente / futuro próximo</td>
                <td>Catáfora (anuncia o que vem)</td>
              </tr>
              <tr>
                <td><strong>esse / essa / isso</strong></td>
                <td>Próximo do ouvinte (2ª pessoa)</td>
                <td>Passado recente</td>
                <td>Anáfora (retoma o que foi dito)</td>
              </tr>
              <tr>
                <td><strong>aquele / aquela / aquilo</strong></td>
                <td>Distante de ambos (3ª pessoa)</td>
                <td>Passado remoto</td>
                <td>Retomada de elemento mais distante</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Uso textual de este/esse — cobrado no ENEM:</strong> Quando dois elementos são
          mencionados antes, <em>este</em> retoma o segundo (mais próximo) e <em>aquele</em> retoma
          o primeiro (mais distante). Exemplo: <em>"Falou-se de liberdade e igualdade: <u>esta</u> é
          base da justiça; <u>aquela</u>, da autonomia."</em> — <em>esta</em> = igualdade; <em>aquela</em>
          = liberdade.
        </div>
      </section>

      {/* SEÇÃO 10 — PRONOME RELATIVO */}
      <section className="lesson-section">
        <span className="section-kicker">10 · Pronome</span>
        <h2>Pronome Relativo: Usos e Armadilhas</h2>
        <p>
          O <strong>pronome relativo</strong> substitui um substantivo (antecedente) e introduz uma
          oração subordinada adjetiva, conectando as duas orações e evitando repetição. É um dos pontos
          mais cobrados do ENEM, especialmente quanto ao uso de <em>cujo</em> e à regência verbal
          do relativo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pronome</th>
                <th>Antecedente</th>
                <th>Uso Correto</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>que</strong></td>
                <td>Pessoas e coisas</td>
                <td>Universal; mais frequente</td>
                <td><em>"O livro que li é ótimo."</em></td>
              </tr>
              <tr>
                <td><strong>quem</strong></td>
                <td>Só pessoas</td>
                <td>Com preposição obrigatória</td>
                <td><em>"A pessoa de quem gosto veio."</em></td>
              </tr>
              <tr>
                <td><strong>o qual / a qual</strong></td>
                <td>Pessoas e coisas</td>
                <td>Evita ambiguidade; após preposição longa</td>
                <td><em>"O pai da menina, o qual chegou…"</em></td>
              </tr>
              <tr>
                <td><strong>cujo / cuja</strong></td>
                <td>Posse</td>
                <td>Concorda com a coisa possuída; sem artigo depois</td>
                <td><em>"O aluno cujo livro sumiu…"</em></td>
              </tr>
              <tr>
                <td><strong>onde</strong></td>
                <td>Lugar físico</td>
                <td>Somente para lugar concreto</td>
                <td><em>"A cidade onde nasci…"</em></td>
              </tr>
              <tr>
                <td><strong>quanto / quanta</strong></td>
                <td>Ant. tudo / tanto</td>
                <td>Após "tudo" e "tanto"</td>
                <td><em>"Fiz tudo quanto pude."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Armadilhas com "cujo" — as bancas adoram:</strong><br /><br />
          ✅ CORRETO: "O autor <em>cujas obras</em> são famosas…" (cujas concorda com obras, o possuído)<br />
          ❌ ERRADO: "O autor <em>cujas as obras</em> são famosas…" (nunca artigo depois de cujo)<br />
          ❌ ERRADO: "O livro <em>cujo o autor</em> é famoso…" (idem — sem artigo entre cujo e o possuído)<br /><br />
          <strong>"Onde" usado para abstrações:</strong><br />
          ❌ ERRADO (norma culta): "A situação <em>onde</em> nos encontramos…" (situação não é lugar físico)<br />
          ✅ CORRETO: "A situação <em>em que</em> nos encontramos…"
        </div>

        <div className="lesson-highlight">
          <strong>Síntese ENEM — Pronome Relativo e Regência:</strong> O pronome relativo herda a
          função sintática do antecedente dentro da oração subordinada. Se a oração exige preposição
          (<em>gostar de, precisar de, confiar em</em>), a preposição deve preceder o relativo:
          <em> "O professor em quem confio…"</em> — nunca <em>"O professor que confio…"</em>,
          forma que viola a regência verbal.
        </div>
      </section>

      {/* SEÇÃO 11 — VISÃO GERAL E CONFUSÕES FREQUENTES */}
      <section className="lesson-section">
        <span className="section-kicker">11 · Revisão</span>
        <h2>Mapa Geral e Confusões Frequentes</h2>
        <p>
          Muitas questões do ENEM não pedem a classificação isolada de uma palavra, mas a{" "}
          <strong>identificação da classe por contexto</strong> — pois a mesma palavra pode pertencer
          a classes diferentes conforme o uso na frase. Veja os casos mais recorrentes:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Como Substantivo</th>
                <th>Como Adjetivo</th>
                <th>Como Pronome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>muito</strong></td>
                <td>—</td>
                <td>"Tenho <em>muito</em> dinheiro." (quantifica)</td>
                <td>"<em>Muitos</em> vieram." (indef.)</td>
              </tr>
              <tr>
                <td><strong>certo</strong></td>
                <td>"O <em>certo</em> é estudar."</td>
                <td>"Deu a resposta <em>certa</em>."</td>
                <td>"<em>Certas</em> pessoas chegaram." (indef.)</td>
              </tr>
              <tr>
                <td><strong>todo</strong></td>
                <td>"O <em>todo</em> é maior."</td>
                <td>"Ele comeu <em>todo</em> o bolo."</td>
                <td>"<em>Todos</em> concordaram." (indef.)</td>
              </tr>
              <tr>
                <td><strong>nenhum</strong></td>
                <td>—</td>
                <td>"<em>Nenhum</em> aluno faltou."</td>
                <td>"Não veio <em>nenhum</em>." (indef.)</td>
              </tr>
              <tr>
                <td><strong>tal</strong></td>
                <td>—</td>
                <td>"Tal pai, tal filho." (comp.)</td>
                <td>"Não faça <em>tal</em> coisa." (indef.)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Regra de ouro para identificar classes no ENEM:</strong> Observe a <em>função
          sintática</em> da palavra na frase. Substantivo é núcleo nominal; adjetivo é modificador
          do substantivo; pronome substitui ou acompanha o substantivo; artigo sempre antecede e
          determina o substantivo; numeral quantifica ou ordena com precisão. A mesma forma pode
          assumir qualquer dessas funções — o contexto é decisivo.
        </div>
      </section>

      {/* SEÇÃO 12 — EXERCÍCIOS */}
      <section className="lesson-section">
        <span className="section-kicker">12 · Prática</span>
        <h2>Exercícios</h2>

        <Exercise
          title="Exercício 1 — Classificação do Substantivo"
          level="Básico"
          statement={
            <p>
              Assinale a alternativa em que os dois substantivos destacados são, respectivamente,{" "}
              <strong>concreto</strong> e <strong>abstrato</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A felicidade e a saudade marcaram sua despedida.",
            },
            {
              letter: "b",
              text: "O vento trouxe uma estranha melancolia ao vilarejo.",
              correct: true,
            },
            {
              letter: "c",
              text: "A amizade e a lealdade são virtudes raras.",
            },
            {
              letter: "d",
              text: "A justiça e a igualdade são abstrações jurídicas.",
            },
          ]}
          resolution={
            <p>
              Na alternativa B, <em>"vento"</em> é substantivo <strong>concreto</strong> — tem existência
              independente e é perceptível pelos sentidos — e <em>"melancolia"</em> é substantivo{" "}
              <strong>abstrato</strong> — nomeia um estado emocional que depende de um ser para existir.
              Nas demais alternativas, ambos os substantivos são abstratos: felicidade/saudade (A),
              amizade/lealdade (C) e justiça/igualdade (D).
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Grau do Adjetivo"
          level="Intermediário"
          statement={
            <p>
              Assinale a alternativa que apresenta o superlativo absoluto sintético{" "}
              <strong>incorreto</strong> segundo a norma culta:
            </p>
          }
          options={[
            { letter: "a", text: "fácil → facílimo" },
            {
              letter: "b",
              text: "cruel → cruelíssimo",
              correct: true,
            },
            { letter: "c", text: "célebre → celebérrimo" },
            { letter: "d", text: "bom → ótimo / boníssimo (ambas corretas)" },
          ]}
          resolution={
            <p>
              A forma incorreta é <em>"cruelíssimo"</em>. O superlativo absoluto sintético de{" "}
              <em>cruel</em> é <strong>crudelíssimo</strong>, formado a partir do radical latino{" "}
              <em>crudel-</em>. Da mesma forma: fiel → fidelíssimo; simples → simplicíssimo. O erro
              está em aplicar o sufixo diretamente à forma portuguesa sem considerar o radical latino.
              As demais formas estão corretas: facílimo, celebérrimo e boníssimo/ótimo são igualmente
              aceitas pela norma culta.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Pronome Relativo e Regência"
          level="Avançado"
          statement={
            <p>
              Assinale a alternativa em que o emprego do pronome relativo respeita{" "}
              <strong>integralmente</strong> a norma culta escrita, inclusive quanto à regência verbal:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"O colega que eu confio sempre foi honesto.\"",
            },
            {
              letter: "b",
              text: "\"A cidade onde nasci guarda minhas melhores memórias.\"",
              correct: true,
            },
            {
              letter: "c",
              text: "\"O projeto cujo os resultados foram publicados é inovador.\"",
            },
            {
              letter: "d",
              text: "\"Trata-se de assuntos onde não há consenso acadêmico.\"",
            },
          ]}
          resolution={
            <p>
              A alternativa B está correta: <em>"onde"</em> refere-se a um lugar físico real
              ("cidade"), uso plenamente adequado à norma culta. Na alternativa A, <em>confiar</em>{" "}
              exige preposição: o correto é <em>"em quem confio"</em>. Na alternativa C, <em>cujo</em>{" "}
              não admite artigo depois: o correto é <em>"cujos resultados"</em>. Na alternativa D,
              <em> assuntos</em> não são lugares físicos; o correto seria <em>"sobre os quais"</em>{" "}
              ou <em>"em que"</em>.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Demonstrativos no Texto"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho: <em>"Há dois modelos em debate: a <strong>escola integral</strong> e o{" "}
              <strong>ensino remoto</strong>. <u>Este</u> exige infraestrutura digital; <u>aquele</u>,
              espaço físico ampliado."</em> O uso de <strong>"este"</strong> e{" "}
              <strong>"aquele"</strong> indica, respectivamente, referência a:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "escola integral e ensino remoto.",
            },
            {
              letter: "b",
              text: "ensino remoto e escola integral.",
              correct: true,
            },
            {
              letter: "c",
              text: "ambos se referem ao ensino remoto.",
            },
            {
              letter: "d",
              text: "ambos se referem à escola integral.",
            },
          ]}
          resolution={
            <p>
              Quando dois elementos são mencionados antes, <strong>este</strong> (e variações) retoma
              o <em>segundo</em> elemento citado (o mais próximo) e <strong>aquele</strong> retoma o{" "}
              <em>primeiro</em> (o mais distante). Os termos foram apresentados na ordem: (1) escola
              integral, (2) ensino remoto. Portanto, <em>"este"</em> = ensino remoto;{" "}
              <em>"aquele"</em> = escola integral. Essa distinção anafórica é cobrada frequentemente
              em questões de coesão textual no ENEM.
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Substantivo Coletivo e Concordância"
          level="Contextualizado"
          statement={
            <p>
              Em uma redação do ENEM, um candidato escreveu: <em>"Um <strong>enxame</strong> de
              abelhas <u>invadiram</u> o pomar e destruíram as colmeias artificiais."</em> Sobre
              a concordância verbal sublinhada, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "está correta, pois o verbo concorda com \"abelhas\", substantivo mais próximo, por regra obrigatória.",
            },
            {
              letter: "b",
              text: "está incorreta; com substantivo coletivo no singular, o verbo deve obrigatoriamente ir para o singular: \"invadiu\".",
            },
            {
              letter: "c",
              text: "está correta pela concordância atrativa, aceita pela norma culta quando o coletivo é seguido de complemento no plural.",
              correct: true,
            },
            {
              letter: "d",
              text: "está incorreta; o correto seria omitir o substantivo coletivo e usar apenas \"As abelhas invadiram\".",
            },
          ]}
          resolution={
            <p>
              A <strong>concordância atrativa</strong> (ou por atração) é aceita pela gramática
              normativa quando um substantivo coletivo vem seguido de adjunto adnominal no plural:
              <em> "Um enxame de abelhas invadiram…"</em> — o verbo atrai o número do complemento
              mais próximo. A concordância no singular (<em>"invadiu"</em>) também é correta
              (concordância gramatical). A alternativa C está correta: a forma plural <em>"invadiram"</em>{" "}
              é aceita. A alternativa B erra ao afirmar que o singular é <em>obrigatório</em>. Esse
              tipo de questão testa o conhecimento de que a norma culta admite as duas construções
              quando há coletivo seguido de complemento no plural.
            </p>
          }
        />
      </section>

    </article>
  );
}
