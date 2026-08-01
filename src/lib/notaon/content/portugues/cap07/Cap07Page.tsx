"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 7</span>
          <h1>Denotação e Conotação</h1>
          <p>
            Toda palavra carrega camadas de significado: há o sentido que o dicionário registra e há o sentido que a cultura, a emoção e o contexto constroem. Dominar a diferença entre denotação e conotação é fundamental para interpretar textos literários, publicitários, humorísticos e jornalísticos — e para gabaritar as questões de linguagem do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. Sentido Denotativo — O Significado Literal da Palavra</h2>

        <p>
          O <strong>sentido denotativo</strong> (também chamado de <em>referencial</em>, <em>literal</em> ou <em>dicionarizado</em>) é aquele que corresponde à definição objetiva registrada nos dicionários. É o significado <strong>neutro</strong>, estável e compartilhado por todos os falantes de uma língua, independentemente do contexto emocional ou cultural do uso.
        </p>
        <p>
          Quando usamos uma palavra em seu sentido denotativo, estamos nos referindo diretamente ao objeto, fenômeno ou conceito do mundo real. Não há ambiguidade intencional, metáfora ou carga afetiva: a palavra aponta para aquilo que ela nomeia de forma direta.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplos clássicos de uso denotativo:</strong>
          <ul>
            <li><em>"A cobra é um réptil peçonhento."</em> — cobra = animal real da espécie dos ofídios.</li>
            <li><em>"O paciente apresenta febre alta."</em> — febre = elevação real da temperatura corporal.</li>
            <li><em>"A rosa possui espinhos."</em> — rosa = flor da família das rosáceas.</li>
          </ul>
        </div>

        <p>
          O uso denotativo predomina em <strong>textos científicos</strong>, <strong>boletins jornalísticos</strong>, <strong>manuais técnicos</strong> e <strong>leis</strong> — gêneros que exigem precisão, clareza e univocidade. Um laudo médico não pode dizer "o paciente está com o coração partido" se quer informar uma ruptura cardíaca; deve dizer "ruptura do miocárdio".
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Referencial</h3>
            <p>A palavra remete diretamente ao referente do mundo real — ao objeto, ser ou fenômeno que ela nomeia.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Dicionarizado</h3>
            <p>É o significado que aparece como primeira ou principal acepção em dicionários de língua padrão.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Neutro</h3>
            <p>Não carrega julgamento de valor, carga emocional ou simbolismo cultural — é informativamente "frio".</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Univocidade</h3>
            <p>Em contextos formais e científicos, busca-se que uma palavra tenha apenas um sentido possível, evitando ambiguidades.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>2. Sentido Conotativo — O Significado Figurado, Simbólico e Afetivo</h2>

        <p>
          O <strong>sentido conotativo</strong> é aquele que vai além do significado literal, incorporando dimensões <em>simbólicas</em>, <em>culturais</em>, <em>afetivas</em> e <em>contextuais</em>. A palavra deixa de apontar para o objeto real e passa a evocar sentimentos, valores, imagens mentais e associações culturais construídas historicamente por uma comunidade.
        </p>
        <p>
          A conotação não é fixa: ela varia conforme a cultura, a época e o contexto imediato de uso. A palavra <strong>"negro"</strong>, por exemplo, carrega significados conotativos distintos em diferentes momentos históricos e movimentos sociais. A palavra <strong>"branco"</strong> pode conotar pureza, inocência, vazio ou paz — dependendo do texto e da tradição cultural.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplos de uso conotativo:</strong>
          <ul>
            <li><em>"Ela é uma cobra!"</em> — cobra = pessoa traiçoeira, perigosa (conotação negativa).</li>
            <li><em>"Aquele professor é um poço de sabedoria."</em> — poço = profundidade, inesgotabilidade.</li>
            <li><em>"Ele tem um coração de ouro."</em> — ouro = bondade, generosidade, preciosidade.</li>
            <li><em>"A reunião foi um campo minado."</em> — campo minado = situação cheia de riscos ocultos.</li>
          </ul>
        </div>

        <p>
          O sentido conotativo é a alma da <strong>linguagem literária</strong>: poetas e romancistas exploram intencionalmente as múltiplas camadas de significado das palavras para criar beleza, ironia, ambiguidade e profundidade emocional. Na publicidade, a conotação é usada estrategicamente para associar um produto a valores desejáveis — liberdade, sucesso, amor, aventura — sem precisar afirmar isso explicitamente.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação Direta</span>
        <h2>3. Denotação × Conotação — Quadro Comparativo</h2>

        <p>
          A mesma palavra pode funcionar denotativa ou conotativamente dependendo do contexto. O quadro abaixo sistematiza as diferenças entre os dois usos e apresenta pares de exemplos contrastantes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Denotação</th>
                <th>Conotação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de sentido</td>
                <td>Literal, objetivo</td>
                <td>Figurado, subjetivo</td>
              </tr>
              <tr>
                <td>Relação com o real</td>
                <td>Aponta para o referente concreto</td>
                <td>Evoca associações simbólicas</td>
              </tr>
              <tr>
                <td>Carga emocional</td>
                <td>Neutra</td>
                <td>Positiva, negativa ou ambígua</td>
              </tr>
              <tr>
                <td>Variação cultural</td>
                <td>Estável entre culturas</td>
                <td>Varia conforme cultura e época</td>
              </tr>
              <tr>
                <td>Gêneros predominantes</td>
                <td>Científico, jurídico, jornalístico</td>
                <td>Literário, publicitário, humorístico</td>
              </tr>
              <tr>
                <td>Exemplo com "luz"</td>
                <td>"A luz viaja a 300 mil km/s."</td>
                <td>"Você é a luz da minha vida."</td>
              </tr>
              <tr>
                <td>Exemplo com "fogo"</td>
                <td>"O fogo consome oxigênio."</td>
                <td>"Aquela palestra foi fogo!"</td>
              </tr>
              <tr>
                <td>Exemplo com "pedra"</td>
                <td>"A pedra é um mineral."</td>
                <td>"Ela tem um coração de pedra."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama comparativo entre denotação e conotação mostrando a mesma palavra em dois contextos diferentes"
          >
            {/* fundo */}
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />

            {/* bloco PALAVRA */}
            <rect x="270" y="80" width="160" height="60" rx="10" fill="#6366f1" />
            <text x="350" y="115" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">PALAVRA</text>

            {/* seta esquerda */}
            <line x1="270" y1="110" x2="190" y2="110" stroke="#6366f1" strokeWidth="2.5" markerEnd="url(#arrowLeft)" />
            <defs>
              <marker id="arrowLeft" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
              <marker id="arrowRight" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 z" fill="#10b981" />
              </marker>
            </defs>

            {/* seta direita */}
            <line x1="430" y1="110" x2="510" y2="110" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowRight)" />

            {/* bloco DENOTAÇÃO */}
            <rect x="30" y="70" width="230" height="80" rx="10" fill="#dbeafe" />
            <text x="145" y="100" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">DENOTAÇÃO</text>
            <text x="145" y="122" textAnchor="middle" fill="#1e40af" fontSize="12">Sentido literal / dicionário</text>
            <text x="145" y="140" textAnchor="middle" fill="#1e40af" fontSize="11" fontStyle="italic">"A cobra é réptil."</text>

            {/* bloco CONOTAÇÃO */}
            <rect x="440" y="70" width="230" height="80" rx="10" fill="#d1fae5" />
            <text x="555" y="100" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="bold">CONOTAÇÃO</text>
            <text x="555" y="122" textAnchor="middle" fill="#065f46" fontSize="12">Sentido figurado / simbólico</text>
            <text x="555" y="140" textAnchor="middle" fill="#065f46" fontSize="11" fontStyle="italic">"Ela é uma cobra!"</text>

            <text x="350" y="195" textAnchor="middle" fill="#64748b" fontSize="12">O contexto determina qual sentido está em uso</text>
          </svg>
          <figcaption>A mesma palavra pode funcionar de modo denotativo ou conotativo conforme o contexto.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Semântica Lexical</span>
        <h2>4. Campo Semântico e Campo Lexical</h2>

        <p>
          Para compreender a conotação com profundidade, é necessário conhecer dois conceitos da semântica lexical: o <strong>campo semântico</strong> e o <strong>campo lexical</strong>. Esses conceitos aparecem em questões do ENEM que pedem para o candidato identificar grupos de palavras relacionadas e entender como eles constroem sentido num texto.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Campo Semântico</h3>
            <p>Grupo de palavras ligadas pelo mesmo <strong>traço de significado</strong> (sema). Exemplo: "calor", "chama", "brasa", "incêndio", "combustão" compartilham o sema [+fogo]. Podem pertencer a classes gramaticais distintas.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Campo Lexical</h3>
            <p>Grupo de palavras que pertencem a um mesmo <strong>tema ou área de conhecimento</strong>. Exemplo: campo lexical de medicina — "paciente", "diagnóstico", "cirurgia", "anestesia", "remédio".</p>
          </div>
        </div>

        <p>
          A distinção é sutil mas importante: o campo semântico foca no <em>significado compartilhado</em>; o campo lexical foca na <em>área temática</em>. Em textos literários, o autor cria efeitos conotativos explorando campos semânticos de forma intencional: ao usar palavras do campo semântico da morte (sombra, silêncio, vazio, cinzas, frio), o poeta constrói uma atmosfera conotativa mesmo sem mencionar a morte diretamente.
        </p>

        <div className="lesson-highlight">
          <strong>Exemplo de construção conotativa por campo semântico:</strong>
          <p>
            No poema <em>"Lira IV"</em> de Tomás Antônio Gonzaga, o eu lírico usa o campo semântico da natureza bucólica (prado, fonte, zéfiro, flores) para conotar paz, inocência e felicidade amorosa — sentidos que vão além do significado literal de cada palavra.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Valoração Linguística</span>
        <h2>5. Carga Valorativa — Positiva, Negativa e Neutra</h2>

        <p>
          Toda palavra, além do significado referencial, pode carregar uma <strong>carga valorativa</strong> — uma avaliação implícita positiva, negativa ou neutra que o falante ou escritor atribui ao referente. Essa carga é parte essencial da conotação e tem enorme impacto na persuasão, no discurso político e na manipulação midiática.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Referente</th>
                <th>Carga Positiva</th>
                <th>Carga Neutra</th>
                <th>Carga Negativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pessoa econômica</td>
                <td>poupador, prudente</td>
                <td>econômico</td>
                <td>pão-duro, sovina</td>
              </tr>
              <tr>
                <td>Pessoa determinada</td>
                <td>persistente, resiliente</td>
                <td>teimoso</td>
                <td>cabeça-dura, obstinado</td>
              </tr>
              <tr>
                <td>Grupo organizado</td>
                <td>movimento, partido</td>
                <td>grupo, organização</td>
                <td>bando, quadrilha</td>
              </tr>
              <tr>
                <td>Intervenção militar</td>
                <td>libertação, restauração</td>
                <td>intervenção</td>
                <td>invasão, golpe</td>
              </tr>
              <tr>
                <td>Remuneração extra</td>
                <td>gratificação, bônus</td>
                <td>adicional</td>
                <td>gorjeta, propina</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Perceba como <strong>a escolha de uma palavra em vez de outra</strong> já é em si uma tomada de posição. Um jornalista que chama manifestantes de "multidão" (neutro) faz uma escolha diferente de quem os chama de "massa enfurecida" (negativo) ou "cidadãos engajados" (positivo). Essa dimensão da carga valorativa é explorada intensamente nas questões do ENEM que pedem ao candidato para analisar o ponto de vista de um texto ou identificar marcas de subjetividade.
        </p>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Sempre que uma questão perguntar "qual o efeito de sentido produzido pela escolha da palavra X?", analise a carga valorativa. Pergunte: positiva, negativa ou neutra? Em relação a quê? Quem se beneficia dessa escolha?
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Publicidade e Consumo</span>
        <h2>6. Exploração Conotativa na Publicidade</h2>

        <p>
          A publicidade é um dos campos que mais explora sistematicamente o poder da conotação. Em vez de simplesmente descrever as características de um produto, as campanhas publicitárias <strong>associam o produto a valores, estilos de vida e emoções</strong> desejáveis — tudo por meio da linguagem conotativa.
        </p>
        <p>
          Esse mecanismo funciona porque a conotação ativa não apenas o intelecto, mas a memória afetiva e os desejos do consumidor. Quando um anúncio de automóvel usa imagens de estradas abertas e palavras como "liberdade", "aventura" e "horizonte", não está descrevendo o carro — está construindo uma identidade simbólica para ele.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Associação com Sucesso</h3>
            <p>Produtos de luxo usam palavras como "exclusivo", "elite", "seleto", "premiado" — evocando status e distinção social.</p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Associação com Amor</h3>
            <p>Alimentos, cosméticos e até seguros se associam a "família", "carinho", "abraço", "lar" — valores afetivos profundos.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Associação com Natureza</h3>
            <p>"Natural", "puro", "orgânico", "verde" — evocam saúde, autenticidade e preocupação ambiental, mesmo em produtos industrializados.</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Associação com Energia</h3>
            <p>Bebidas energéticas usam "potência", "descarga", "explosão", "turbo" — conotações de força e velocidade que prometem performance.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Slogan como concentrado conotativo:</strong>
          <ul>
            <li><em>"Abra a felicidade"</em> — refrigerante associado ao prazer e ao bem-estar emocional.</li>
            <li><em>"Porque você vale muito"</em> — cosméticos associados à autoestima e ao reconhecimento pessoal.</li>
            <li><em>"Voar é para os deuses"</em> — companhia aérea conotando transcendência, elevação espiritual e poder.</li>
            <li><em>"O sabor que o Brasil adora"</em> — conotação de pertencimento nacional e tradição cultural.</li>
          </ul>
        </div>

        <p>
          O ENEM frequentemente apresenta anúncios publicitários e pede ao candidato que identifique o <strong>valor conotativo</strong> explorado e o efeito persuasivo produzido. A chave é sempre perguntar: que sentimento, valor ou estilo de vida o texto está associando ao produto?
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Literatura e Poesia</span>
        <h2>7. Conotação em Poesia e Literatura</h2>

        <p>
          A linguagem literária é, por excelência, o domínio da conotação. O escritor literário <strong>não apenas comunica informações</strong>: ele constrói experiências estéticas, provoca emoções e sugere significados que vão muito além do literal. Cada escolha de palavra, imagem ou metáfora é um gesto conotativo deliberado.
        </p>
        <p>
          Na poesia, a conotação é potencializada pela musicalidade, pelas rimas, pelo ritmo e pelo espaço em branco — todos elementos que carregam sentido. Uma palavra isolada num verso curto tem impacto conotativo completamente diferente da mesma palavra numa prosa extensa.
        </p>

        <div className="math-block">
          <strong>Análise de fragmento poético:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Sou como a pedra entre as flores,<br/>
            dura, fria, sem cores,<br/>
            mas firme no chão."
          </p>
          <p>
            Aqui, <strong>"pedra"</strong> não é usada denotativamente (mineral rochoso), mas conotativamente: representa <em>solidez</em>, <em>resistência</em>, <em>frieza emocional</em> e talvez <em>isolamento</em>. "Fria" conota indiferença ou sofrimento contido. "Firme no chão" conota perseverança. A imagem total constrói um eu lírico paradoxal — ao mesmo tempo vulnerável e inabalável.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Diagrama mostrando as camadas de significado conotativo em linguagem literária"
          >
            <rect x="0" y="0" width="700" height="260" rx="14" fill="#fdf4ff" />

            {/* título */}
            <text x="350" y="30" textAnchor="middle" fill="#7c3aed" fontSize="15" fontWeight="bold">Camadas de significado em linguagem literária</text>

            {/* círculo 1 - denotação */}
            <circle cx="350" cy="145" r="110" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="6,3" />
            <circle cx="350" cy="145" r="80" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6,3" />
            <circle cx="350" cy="145" r="50" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6,3" />
            <circle cx="350" cy="145" r="22" fill="#7c3aed" />

            {/* labels */}
            <text x="350" y="149" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DENOTAÇÃO</text>
            <text x="350" y="160" textAnchor="middle" fill="white" fontSize="9">literal</text>

            <text x="350" y="95" textAnchor="middle" fill="#6d28d9" fontSize="11">Conotação cultural</text>
            <text x="350" y="67" textAnchor="middle" fill="#6d28d9" fontSize="11">Conotação afetiva / individual</text>
            <text x="350" y="43" textAnchor="middle" fill="#6d28d9" fontSize="10" fontStyle="italic">Sentidos ilimitados no texto literário</text>

            {/* setas explicativas */}
            <text x="88" y="145" textAnchor="middle" fill="#7c3aed" fontSize="10">sentido</text>
            <text x="88" y="157" textAnchor="middle" fill="#7c3aed" fontSize="10">objetivo</text>
            <line x1="120" y1="150" x2="170" y2="145" stroke="#7c3aed" strokeWidth="1" />

            <text x="612" y="110" textAnchor="middle" fill="#7c3aed" fontSize="10">símbolos</text>
            <text x="612" y="122" textAnchor="middle" fill="#7c3aed" fontSize="10">históricos</text>
            <line x1="580" y1="115" x2="535" y2="130" stroke="#7c3aed" strokeWidth="1" />
          </svg>
          <figcaption>No texto literário, o sentido denotativo é apenas o núcleo mais interno; a conotação expande o significado em múltiplas camadas culturais e afetivas.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Valoração Especial</span>
        <h2>8. Eufemismo e Disfemismo — Conotação a Serviço do Tabu</h2>

        <p>
          Dois fenômenos linguísticos particularmente ricos para o estudo da conotação são o <strong>eufemismo</strong> e o <strong>disfemismo</strong>. Ambos consistem em substituir uma palavra ou expressão direta por outra que carregue uma conotação mais suave (eufemismo) ou mais agressiva (disfemismo).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌸</span>
            <h3>Eufemismo</h3>
            <p>Substituição de uma expressão considerada rude, dolorosa ou tabu por outra de conotação mais suave. Exemplo: "passou para melhor" (morreu), "colaborador" (funcionário), "operação de limpeza" (violência policial).</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Disfemismo</h3>
            <p>O oposto: uso de uma expressão mais crua, pejorativa ou violenta do que a neutra. Exemplo: "esticar o pernil" (morrer), "engolir sapo" (suportar humilhações), "comer o pão que o diabo amassou".</p>
          </div>
        </div>

        <p>
          O eufemismo é uma estratégia linguística com forte função social: permite falar de assuntos tabus (morte, sexo, doenças, miséria) de forma que cause menos desconforto. Em discursos políticos, o eufemismo pode ser usado para <strong>suavizar realidades duras</strong> e manipular a percepção pública.
        </p>

        <div className="lesson-highlight">
          <strong>Eufemismos no discurso político e corporativo:</strong>
          <ul>
            <li>"Enxugamento da máquina" = demissão em massa de servidores</li>
            <li>"Reestruturação organizacional" = demissões em empresas</li>
            <li>"Danos colaterais" = mortes de civis em guerras</li>
            <li>"Intervenção humanitária" = invasão militar</li>
            <li>"Flexibilização de direitos" = redução de direitos trabalhistas</li>
          </ul>
        </div>

        <p>
          O ENEM frequentemente apresenta textos que usam eufemismos ou disfemismos e pede ao candidato que identifique o <strong>efeito ideológico</strong> dessa escolha — quem é beneficiado pela suavização e quem é prejudicado pela brutalização da linguagem.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Humor e Ambiguidade</span>
        <h2>9. Duplo Sentido, Palavras Polissêmicas e Humor</h2>

        <p>
          A <strong>polissemia</strong> é a propriedade de uma palavra de ter múltiplos significados relacionados entre si — seja por extensão metafórica, seja por evolução histórica. Palavras polissêmicas são a matéria-prima do <strong>duplo sentido</strong>, recurso central no humor, na ironia e na publicidade criativa.
        </p>
        <p>
          O duplo sentido explora propositalmente a ambiguidade conotativa de uma palavra ou expressão, permitindo que o texto seja lido de duas formas simultaneamente — uma literal (denotativa) e uma figurada (conotativa), muitas vezes com carga cômica, irônica ou erótica.
        </p>

        <div className="math-block">
          <strong>Como o duplo sentido funciona:</strong>
          <p>Manchete: <em>"Polícia prende quadrilha que assaltava bancos."</em></p>
          <p>O humor surge porque "bancos" pode significar: (a) instituições financeiras [denotação técnica] e (b) móveis de madeira onde se senta [denotação comum]. A ambiguidade cria o efeito cômico.</p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😂</span>
            <h3>Humor por Polissemia</h3>
            <p>Piadas exploram palavras com múltiplos sentidos para criar surpresa e efeito cômico. O riso surge do encontro inesperado entre dois significados.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Publicidade com Duplo Sentido</h3>
            <p>Anúncios inteligentes usam duplo sentido para serem memoráveis e provocar engajamento. O leitor sente prazer ao "descobrir" o segundo sentido.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Ironia como Conotação</h3>
            <p>Na ironia, o sentido conotativo inverte o denotativo. "Que belo serviço!" pode significar exatamente o contrário, dependendo do contexto e da entonação.</p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Polissemia vs. Homonímia</h3>
            <p>Na polissemia, os sentidos são relacionados (mesma origem). Na homonímia, são palavras distintas com a mesma grafia/pronúncia. O "manga" fruta e o "manga" de camisa são homônimos.</p>
          </div>
        </div>

        <p>
          Em questões do ENEM que envolvem charges, tirinhas e textos humorísticos, o candidato precisa identificar qual <strong>ambiguidade semântica</strong> foi explorada para criar o efeito cômico ou irônico. A resposta quase sempre passa pela análise do duplo sentido conotativo/denotativo de uma palavra-chave.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tabu Linguístico</span>
        <h2>10. Palavras Tabu — Conotação, Poder e Interdição Social</h2>

        <p>
          As chamadas <strong>taboo words</strong> (palavras tabu) são termos cujo uso é social ou culturalmente restrito, proibido ou marcado como inadequado em determinados contextos. O tabu linguístico revela muito sobre os valores e as hierarquias de uma sociedade: o que se proíbe dizer (ou como se proíbe dizer) mostra o que essa sociedade considera sagrado, vergonhoso, perigoso ou subversivo.
        </p>
        <p>
          Palavras tabu são carregadas de conotação por definição: não é o som que as torna proibidas, mas os significados, valores e poder que a sociedade atribui a elas. Por isso, a mesma palavra pode ser tabu em um contexto e completamente neutra em outro — um médico usa termos anatômicos em consultório que seriam tabu numa conversa informal.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Tabu</th>
                <th>Exemplos de Interdição</th>
                <th>Estratégia Substituída</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tabu da morte</td>
                <td>Evita-se dizer "morreu"</td>
                <td>"Faleceu", "partiu", "foi embora", "descansou"</td>
              </tr>
              <tr>
                <td>Tabu do corpo</td>
                <td>Nomes de partes íntimas</td>
                <td>Termos médicos, apelidos, eufemismos</td>
              </tr>
              <tr>
                <td>Tabu religioso</td>
                <td>Nomes divinos em vão</td>
                <td>"Puxa!", "Droga!", "Nossa!"</td>
              </tr>
              <tr>
                <td>Tabu social</td>
                <td>Termos pejorativos para grupos</td>
                <td>Substituição por termos de respeito e autodenominação</td>
              </tr>
              <tr>
                <td>Tabu político</td>
                <td>Palavras associadas a regimes</td>
                <td>Reformulações, siglas, neologismos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Taboo words e disputa de narrativas:</strong>
          <p>
            A luta pelo direito de nomear é uma luta política. Quando movimentos sociais reivindicam a substituição de certas palavras (ou a ressignificação delas), estão contestando as conotações negativas impostas historicamente. A palavra <strong>"negro"</strong>, por exemplo, foi ressignificada pelo Movimento Negro brasileiro, transformando o que era usado como insulto em símbolo de identidade e orgulho. Esse processo de <em>ressignificação conotativa</em> é um ato de resistência linguística e cultural.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>11. Denotação e Conotação no ENEM — Como Gabaritar</h2>

        <p>
          O ENEM não pede que o candidato <em>defina</em> denotação e conotação: ele pede que o candidato <em>aplique</em> esses conceitos na interpretação de textos reais. As questões geralmente apresentam um texto multimodal (charge, publicidade, poema, trecho literário, notícia) e pedem que o candidato identifique efeitos de sentido produzidos por escolhas lexicais específicas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Passo 1: Identifique a palavra-chave</h3>
            <p>Leia o enunciado e identifique qual palavra ou expressão está sendo analisada. O enunciado quase sempre sinaliza: "o uso da palavra X produz o efeito de..."</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Passo 2: Analise o contexto</h3>
            <p>O contexto determina se o uso é denotativo ou conotativo. Leia o parágrafo inteiro antes de julgar o sentido de uma palavra isolada.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Passo 3: Verifique a carga valorativa</h3>
            <p>A palavra tem carga positiva, negativa ou neutra naquele contexto? Isso revela a posição do enunciador e o efeito persuasivo buscado.</p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>Passo 4: Elimine distratores</h3>
            <p>As alternativas erradas costumam confundir sentido literal com figurado, ou inverter a carga valorativa. Descarte as que contradizem o contexto.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Tipos de questão mais frequentes no ENEM:</strong>
          <ul>
            <li><strong>Efeito de sentido:</strong> "O uso de X em vez de Y produz o efeito de..." — analisar conotação e carga valorativa.</li>
            <li><strong>Humor e ironia:</strong> "O efeito cômico da tira é criado pelo..." — identificar o duplo sentido ou a polissemia explorada.</li>
            <li><strong>Publicidade:</strong> "A expressão X no anúncio sugere..." — identificar o valor conotativo associado ao produto.</li>
            <li><strong>Eufemismo:</strong> "A substituição de X por Y neste texto tem o objetivo de..." — compreender o efeito de suavização ou valoração.</li>
            <li><strong>Campo semântico:</strong> "As palavras X, Y e Z constroem no texto a ideia de..." — reconhecer o campo semântico dominante.</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Armadilha frequente:</strong> O ENEM apresenta textos em que uma palavra aparentemente neutra tem conotação fortemente ideológica no contexto. Não se deixe enganar pelo significado dicionarizado isolado — analise sempre o <em>uso situado</em> da palavra.
        </div>
      </section>

      {/* ── SEÇÃO 12 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação do Sentido Denotativo"
          statement={
            <p>
              Leia as frases abaixo e identifique aquela em que a palavra <strong>"pedra"</strong> é usada em sentido estritamente denotativo:
            </p>
          }
          options={[
            { letter: "a", text: "Aquele policial tem coração de pedra." },
            { letter: "b", text: "A vida no sertão é uma pedra no caminho." },
            { letter: "c", text: "O geólogo identificou a pedra como granito.", correct: true },
            { letter: "d", text: "Ela é uma pedra preciosa nesta empresa." },
          ]}
          resolution={
            <p>
              Na alternativa C, "pedra" é usada em seu sentido referencial e literal: refere-se diretamente ao mineral identificado pelo geólogo. Nas demais alternativas, "pedra" é usada conotativamente — para representar insensibilidade (A), obstáculo (B) ou pessoa valiosa (D). O contexto científico da alternativa C garante o uso denotativo, pois textos técnicos exigem precisão referencial.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Carga Valorativa e Ponto de Vista"
          statement={
            <p>
              Observe os dois títulos de notícia sobre o mesmo evento:
              <br /><br />
              I. <em>"Manifestantes tomam as ruas em protesto"</em>
              <br />
              II. <em>"Baderneiros interrompem o trânsito no centro"</em>
              <br /><br />
              A diferença entre os dois títulos evidencia principalmente:
            </p>
          }
          options={[
            { letter: "a", text: "A distinção entre linguagem oral e escrita." },
            { letter: "b", text: "A variação regional do vocabulário brasileiro." },
            { letter: "c", text: "A carga valorativa conotativa das palavras escolhidas, que revela o posicionamento do enunciador.", correct: true },
            { letter: "d", text: "O uso de eufemismos para amenizar a notícia." },
          ]}
          resolution={
            <p>
              "Manifestantes" tem carga valorativa neutra a levemente positiva (pessoas exercendo direito democrático), enquanto "baderneiros" tem carga fortemente negativa (pessoas que causam desordem). A escolha lexical revela o posicionamento ideológico de cada veículo em relação ao evento. Esse é um exemplo clássico de como a conotação opera no discurso jornalístico — o mesmo evento é narrado de formas completamente distintas conforme a carga valorativa das palavras escolhidas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Eufemismo como Instrumento de Poder"
          statement={
            <p>
              Um documento corporativo afirma: <em>"A empresa implementará um processo de reestruturação organizacional visando à otimização de recursos humanos."</em>
              <br /><br />
              O uso de expressões como "reestruturação organizacional" e "otimização de recursos humanos" nesse contexto representa:
            </p>
          }
          options={[
            { letter: "a", text: "Linguagem técnica indispensável em comunicações formais, sem implicação conotativa." },
            { letter: "b", text: "Uso de eufemismos que suavizam conotativamente a informação de demissões, protegendo a imagem da empresa.", correct: true },
            { letter: "c", text: "Disfemismo que intensifica negativamente o impacto da notícia para os funcionários." },
            { letter: "d", text: "Campo lexical neutro da administração de empresas, com sentido exclusivamente denotativo." },
          ]}
          resolution={
            <p>
              "Reestruturação organizacional" e "otimização de recursos humanos" são eufemismos: substituem expressões diretas ("demissão em massa", "corte de pessoal") por formulações de conotação neutra ou positiva que amenizam o impacto negativo. Essa estratégia linguística serve para proteger a imagem corporativa, reduzir reações adversas e apresentar uma decisão prejudicial aos trabalhadores como se fosse um processo técnico e racional. Embora use vocabulário administrativo (campo lexical técnico), o efeito conotativo é deliberado — é linguagem de poder disfarçada de neutralidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Conotação em Slogan Publicitário"
          statement={
            <p>
              Uma campanha publicitária de um banco usa o slogan: <em>"Sonhos não têm limite. Seu crédito também não."</em>
              <br /><br />
              O recurso linguístico central desse slogan é a construção conotativa que:
            </p>
          }
          options={[
            { letter: "a", text: "Informa objetivamente as condições do crédito oferecido, usando sentido denotativo." },
            { letter: "b", text: "Associa conotativamente o produto financeiro (crédito) ao universo simbólico dos sonhos, ambições e realizações pessoais, apagando a dimensão econômica do endividamento.", correct: true },
            { letter: "c", text: "Usa disfemismo para destacar as vantagens do produto em relação à concorrência." },
            { letter: "d", text: "Cria duplo sentido irônico que critica o sistema de crédito bancário." },
          ]}
          resolution={
            <p>
              O slogan opera por justaposição conotativa: "sonhos" evoca aspirações, liberdade, realização pessoal — valores profundamente positivos. Ao afirmar que o crédito "também não tem limite", o banco transfere todas essas conotações positivas para o produto financeiro. Invisibiliza, assim, as conotações negativas reais do crédito ilimitado (endividamento, juros, dependência financeira). Esse mecanismo é um exemplo sofisticado de manipulação conotativa no discurso publicitário: a empresa não mente sobre o produto, mas usa a conotação para desviar a atenção das consequências reais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Duplo Sentido e Efeito Humorístico"
          statement={
            <p>
              Uma tirinha mostra um político pedindo votos e dizendo: <em>"Prometo que vou trabalhar dia e noite por vocês — começando pelas noites."</em> O efeito cômico da tirinha é produzido por:
            </p>
          }
          options={[
            { letter: "a", text: "O uso de linguagem formal incompatível com a situação eleitoral." },
            { letter: "b", text: "A exploração do campo semântico do trabalho noturno para criticar o sistema eleitoral." },
            { letter: "c", text: "A polissemia da expressão 'trabalhar de noite', que conota tanto dedicação profissional quanto diversão e ócio, criando contradição irônica com a promessa inicial.", correct: true },
            { letter: "d", text: "O eufemismo usado pelo político para esconder sua verdadeira intenção de não trabalhar." },
          ]}
          resolution={
            <p>
              O humor nasce da ambiguidade conotativa de "trabalhar à noite": no discurso político, evoca dedicação extrema e sacrifício (sentido que o político quer transmitir); mas na fala coloquial, "aproveitar a noite" conota festas, diversão e ócio — o oposto do trabalho. A tirinha explora essa polissemia para criar ironia: o político inadvertidamente (ou cinicamente) revela que usará o cargo para se beneficiar pessoalmente. O duplo sentido é o mecanismo técnico; a crítica política é o conteúdo que ele veicula. Questões do ENEM sobre tirinhas políticas frequentemente exploram esse mecanismo.
            </p>
          }
        />
      </section>
    </article>
  );
}
