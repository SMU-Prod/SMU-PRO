"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 42</span>
          <h1>Revisão Geral de Português para o ENEM</h1>
          <p>
            Chegamos ao capítulo final da jornada de Português. Aqui, reunimos o mapa
            completo do que o ENEM cobra — de interpretação textual a escolas literárias,
            de gramática essencial a redação nota 1000 — para que você entre na prova
            com clareza sobre o que estudar, o que revisar e o que priorizar nos dias
            finais. Este capítulo é o seu painel de controle: visão panorâmica, atalhos
            estratégicos e as conexões que tornam o conhecimento aplicável.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa Geral</span>
        <h2>1. O que o ENEM Cobra em Português — Mapa Completo</h2>

        <p>
          A área de Linguagens, Códigos e suas Tecnologias no ENEM engloba 45 questões,
          das quais aproximadamente <strong>25 a 30</strong> são de Língua Portuguesa
          (as demais são de Arte, Educação Física e Língua Estrangeira). A área é
          organizada ao redor de <strong>habilidades</strong>, não de conteúdos isolados:
          o ENEM sempre apresenta um texto e pede que o candidato aplique conhecimento
          linguístico ou literário para interpretá-lo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Eixo</th>
                <th>Conteúdos principais</th>
                <th>Frequência no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Interpretação Textual</strong></td>
                <td>Inferência, implícitos, ironia, intenção comunicativa, ponto de vista</td>
                <td>Alta — presente em quase todas as questões</td>
              </tr>
              <tr>
                <td><strong>Literatura</strong></td>
                <td>Escolas literárias brasileiras e portuguesas, características, autores, obras</td>
                <td>Alta — de 8 a 12 questões por prova</td>
              </tr>
              <tr>
                <td><strong>Linguagem e Gêneros</strong></td>
                <td>Funções da linguagem, gêneros textuais, tipologias, multimodalidade</td>
                <td>Média-alta — 5 a 8 questões</td>
              </tr>
              <tr>
                <td><strong>Gramática Aplicada</strong></td>
                <td>Sintaxe (coesão, regência, concordância), semântica (conotação/denotação, figuras)</td>
                <td>Média — 3 a 6 questões, sempre em contexto textual</td>
              </tr>
              <tr>
                <td><strong>Variação Linguística</strong></td>
                <td>Variedades do português, registros, preconceito linguístico</td>
                <td>Baixa-média — 2 a 4 questões</td>
              </tr>
              <tr>
                <td><strong>Redação</strong></td>
                <td>Estrutura dissertativo-argumentativa, proposta de intervenção, 5 competências</td>
                <td>1 texto + avaliação em 5 competências (0–1000 pontos)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>A habilidade central do ENEM em Português:</strong>
          <p>
            Não é memorizar regras — é <strong>ler com criticidade</strong>. O ENEM
            avalia se você consegue extrair sentidos implícitos, identificar a função
            comunicativa de um texto, reconhecer recursos estilísticos e sua eficácia
            persuasiva, e contextualizar uma obra literária em seu momento histórico.
            Todo o conhecimento gramatical e literário serve a esta finalidade maior:
            ser um leitor crítico e um produtor consciente de textos.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 240" width="700" height="240" aria-label="Distribuição aproximada dos temas de Português cobrados no ENEM">
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold">O que mais cai em Português no ENEM</text>
            <line x1="60" y1="200" x2="660" y2="200" stroke="#94a3b8" strokeWidth="1.5" />

            <rect x="90" y="70" width="70" height="130" rx="5" fill="#6366f1" />
            <text x="125" y="218" textAnchor="middle" fill="#334155" fontSize="11">Interpre-</text>
            <text x="125" y="231" textAnchor="middle" fill="#334155" fontSize="11">tação</text>
            <text x="125" y="62" textAnchor="middle" fill="#4338ca" fontSize="11" fontWeight="bold">muito alta</text>

            <rect x="200" y="105" width="70" height="95" rx="5" fill="#8b5cf6" />
            <text x="235" y="218" textAnchor="middle" fill="#334155" fontSize="11">Literatura</text>
            <text x="235" y="97" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">alta</text>

            <rect x="310" y="120" width="70" height="80" rx="5" fill="#a78bfa" />
            <text x="345" y="218" textAnchor="middle" fill="#334155" fontSize="11">Funções/</text>
            <text x="345" y="231" textAnchor="middle" fill="#334155" fontSize="11">Figuras</text>

            <rect x="420" y="130" width="70" height="70" rx="5" fill="#c4b5fd" />
            <text x="455" y="218" textAnchor="middle" fill="#334155" fontSize="11">Variação</text>
            <text x="455" y="231" textAnchor="middle" fill="#334155" fontSize="11">linguística</text>

            <rect x="530" y="150" width="70" height="50" rx="5" fill="#ddd6fe" />
            <text x="565" y="218" textAnchor="middle" fill="#334155" fontSize="11">Gramática</text>
            <text x="565" y="231" textAnchor="middle" fill="#334155" fontSize="11">normativa</text>
          </svg>
          <figcaption>No ENEM, interpretação de texto e literatura lideram; a gramática normativa pura aparece quase sempre subordinada ao texto e ao sentido.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação Textual</span>
        <h2>2. Interpretação Textual — A Habilidade Mais Cobrada</h2>

        <p>
          Interpretação textual aparece em praticamente todas as questões de Português no
          ENEM — mesmo as que parecem ser de gramática, literatura ou linguagem, no fundo
          exigem que o candidato <em>leia bem</em> o texto apresentado. Por isso,
          aprimorar a leitura crítica é a preparação mais eficiente possível.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Inferência</h3>
            <p>O ENEM cobra o que o texto <em>implica</em>, não apenas o que está explícito. Ler nas entrelinhas: pressuposto (o que o texto assume como verdade) e subentendido (o que o texto insinua) são distinções cruciais.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Ironia e Humor</h3>
            <p>Em charges, tirinhas e crônicas, a ironia inverte o sentido literal. Identificar quando o texto diz o contrário do que parece dizer — e por quê — é uma habilidade frequentemente testada.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Multimodalidade</h3>
            <p>Textos multimodais combinam linguagem verbal e não-verbal (imagens, gráficos, charges). O ENEM cobra como os elementos visuais e verbais cooperam para construir o sentido do texto.</p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Intenção Comunicativa</h3>
            <p>Por que este texto foi escrito? Para informar, convencer, entreter, instruir? Identificar o propósito comunicativo orienta toda a interpretação e ajuda a eliminar alternativas erradas.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Estratégia para questões de interpretação:</strong>
          <p>
            1. Leia o <em>enunciado da questão antes</em> do texto: ele sinaliza o que
            procurar. 2. Leia o texto com atenção ao contexto de produção (quem escreveu,
            onde foi publicado, quando). 3. Identifique a tese ou ponto de vista central
            do texto. 4. Analise cada alternativa contra o texto — a resposta deve estar
            fundamentada no texto, não na sua opinião pessoal. 5. Elimine as alternativas
            que contradizem o texto ou que extrapolam para além do que ele afirma.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Escolas Literárias</span>
        <h2>3. Quadro-Resumo das Escolas Literárias — Do Trovadorismo ao Modernismo</h2>

        <p>
          A literatura é cobrada no ENEM sempre em contexto: o candidato recebe um
          fragmento literário e precisa relacioná-lo ao seu momento histórico, identificar
          características da escola literária correspondente e interpretar o efeito
          estético produzido. Não basta decorar datas — é preciso reconhecer o
          <em> espírito</em> de cada escola no texto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Escola</th>
                <th>Período</th>
                <th>Características centrais</th>
                <th>Autores-chave</th>
                <th>O que o ENEM cobra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Trovadorismo</strong></td>
                <td>Séc. XII–XIV (Portugal)</td>
                <td>Poesia lírica (cantigas de amor, amigo) e satírica (escárnio/maldizer). Teocentrismo.</td>
                <td>Paio Soares de Taveirós, D. Dinis</td>
                <td>Estrutura das cantigas, tipos, contexto medieval</td>
              </tr>
              <tr>
                <td><strong>Humanismo</strong></td>
                <td>Séc. XV–XVI (Portugal)</td>
                <td>Transição teocentrismo → antropocentrismo. Teatro, medida velha vs. nova.</td>
                <td>Gil Vicente, Sá de Miranda, Garcia de Resende</td>
                <td>Auto da Barca do Inferno, personagem-tipo, alegoria</td>
              </tr>
              <tr>
                <td><strong>Quinhentismo</strong></td>
                <td>Séc. XVI (Brasil/Portugal)</td>
                <td>Literatura de informação (cartas, relatos de viagem). Classicismo. Soneto.</td>
                <td>Camões, Pero Vaz de Caminha</td>
                <td>Carta de Caminha, sonetos camonianos, épica (Os Lusíadas)</td>
              </tr>
              <tr>
                <td><strong>Barroco</strong></td>
                <td>Séc. XVII</td>
                <td>Conflito entre fé e razão, antíteses, paradoxos, cultismo e conceptismo.</td>
                <td>Gregório de Matos, Padre Antônio Vieira</td>
                <td>Sermões de Vieira, poesia de Gregório, dualismo barroco</td>
              </tr>
              <tr>
                <td><strong>Arcadismo</strong></td>
                <td>Séc. XVIII</td>
                <td>Razão, natureza, arcádia, pastoralismo, "fugere urbem", "aurea mediocritas".</td>
                <td>Tomás Antônio Gonzaga, Cláudio Manuel da Costa</td>
                <td>Marília de Dirceu, contexto iluminista, Inconfidência</td>
              </tr>
              <tr>
                <td><strong>Romantismo</strong></td>
                <td>Séc. XIX (1836–1881)</td>
                <td>Subjetivismo, nação, indianismo, mal do século, sertanismo, amor idealizado.</td>
                <td>José de Alencar, Castro Alves, Álvares de Azevedo, Gonçalves Dias</td>
                <td>Indianismo, escravidão (Castro Alves), ultrarromantismo</td>
              </tr>
              <tr>
                <td><strong>Realismo/Naturalismo</strong></td>
                <td>1881–1893</td>
                <td>Crítica social, análise psicológica, determinismo, cientificismo.</td>
                <td>Machado de Assis, Eça de Queirós, Aluísio Azevedo</td>
                <td>Machado (ironia, narrador não confiável), O Cortiço</td>
              </tr>
              <tr>
                <td><strong>Parnasianismo/Simbolismo</strong></td>
                <td>1893–1922</td>
                <td>Parnasianismo: arte pela arte, perfeição formal. Simbolismo: misticismo, musicalidade.</td>
                <td>Olavo Bilac, Cruz e Sousa, Alphonsus de Guimaraens</td>
                <td>Soneto parnasiano, sinestesia simbolista</td>
              </tr>
              <tr>
                <td><strong>Modernismo (1.ª fase)</strong></td>
                <td>1922–1930</td>
                <td>Ruptura com padrões, verso livre, humor, brasilidade, vanguardas europeias.</td>
                <td>Mário de Andrade, Oswald de Andrade, Manuel Bandeira</td>
                <td>Semana de 22, poesia concreta, Macunaíma, paródia</td>
              </tr>
              <tr>
                <td><strong>Modernismo (2.ª fase)</strong></td>
                <td>1930–1945</td>
                <td>Romance social e regional, prosa psicológica, engajamento político.</td>
                <td>Graciliano Ramos, Jorge Amado, Rachel de Queiroz, Érico Veríssimo</td>
                <td>Vidas Secas, seca nordestina, classe trabalhadora</td>
              </tr>
              <tr>
                <td><strong>Modernismo (3.ª fase)</strong></td>
                <td>1945–1960</td>
                <td>Introspecção, linguagem experimental, existencialismo, poesia concreta.</td>
                <td>Clarice Lispector, João Cabral de Melo Neto, Guimarães Rosa</td>
                <td>Clarice (fluxo de consciência), Grande Sertão: Veredas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Literatura Mais Cobrada</span>
        <h2>4. Autores e Obras Mais Cobrados no ENEM — Foco Estratégico</h2>

        <p>
          Não é possível ler todas as obras da literatura brasileira e portuguesa antes
          do ENEM. A estratégia é concentrar esforços nos autores e obras que aparecem
          com maior frequência nas provas dos últimos 15 anos. O ENEM privilegia os
          autores cujas obras refletem questões sociais ainda relevantes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Machado de Assis</h3>
            <p>O autor mais cobrado do ENEM. Foco em: ironia, narrador não confiável, crítica à sociedade burguesa, realismo psicológico. Obras: <em>Dom Casmurro, Memórias Póstumas de Brás Cubas, O Alienista, Quincas Borba.</em></p>
          </div>
          <div className="lesson-card">
            <span>🌵</span>
            <h3>Graciliano Ramos</h3>
            <p>Segundo mais cobrado. Foco em: seca nordestina, desumanização da pobreza, linguagem seca e objetiva. Obras: <em>Vidas Secas, São Bernardo, Angústia, Memórias do Cárcere.</em></p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Gil Vicente</h3>
            <p>Mais cobrado na literatura portuguesa. Foco em: personagem-tipo, alegoria, crítica social, mistura de registros. Obras: <em>Auto da Barca do Inferno, Farsa de Inês Pereira.</em></p>
          </div>
          <div className="lesson-card">
            <span>💎</span>
            <h3>Carlos Drummond de Andrade</h3>
            <p>O poeta mais cobrado. Foco em: poesia cotidiana e existencial, verso livre, ironia, temas urbanos. Poemas: <em>No meio do caminho, A flor e a náusea, José, Quadrilha.</em></p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Clarice Lispector</h3>
            <p>Foco em: introspecção, fluxo de consciência, existencialismo feminino, linguagem experimental. Obras: <em>A hora da estrela, A maçã no escuro, A paixão segundo G.H.</em></p>
          </div>
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Oswald e Mário de Andrade</h3>
            <p>Foco em: Semana de 22, antropofagia (Oswald), brasilidade (Mário), ruptura com o academicismo. Obras: <em>Macunaíma, Pau Brasil, Serafim Ponte Grande.</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gramática Essencial</span>
        <h2>5. Gramática Essencial para o ENEM — O que Realmente Cai</h2>

        <p>
          O ENEM não cobra gramática pela gramática: cobra gramática como ferramenta de
          interpretação. Questões pedindo que o candidato "identifique a classe gramatical
          do vocábulo X" são raras — o que aparece são questões como "a substituição de X
          por Y produz o efeito de..." ou "o uso do tempo verbal X cria que efeito no
          texto?". Conheça a gramática para entender textos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tópico gramatical</th>
                <th>O que o ENEM cobra</th>
                <th>Como estudar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semântica (denotação/conotação)</td>
                <td>Efeito de sentido da escolha lexical; carga valorativa</td>
                <td>Praticar com textos publicitários e literários</td>
              </tr>
              <tr>
                <td>Figuras de linguagem</td>
                <td>Efeito das figuras (metáfora, ironia, hipérbole, antítese, paradoxo)</td>
                <td>Identificar figuras em textos e explicar seu efeito</td>
              </tr>
              <tr>
                <td>Coesão e coerência</td>
                <td>Conectivos, referência pronominal, progressão textual</td>
                <td>Analisar conectivos em textos argumentativos</td>
              </tr>
              <tr>
                <td>Sintaxe (termos da oração)</td>
                <td>Regência (OD/OI), voz passiva, efeitos sintáticos</td>
                <td>Treinar com frases em contexto, não classificação mecânica</td>
              </tr>
              <tr>
                <td>Variação linguística</td>
                <td>Registros formal/informal; preconceito linguístico</td>
                <td>Ler textos de diferentes registros e contextos</td>
              </tr>
              <tr>
                <td>Funções da linguagem</td>
                <td>Identificar a função predominante em textos específicos</td>
                <td>Praticar com publicidades, notícias, poemas, bulas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>As figuras de linguagem mais cobradas no ENEM:</strong>
          <ul>
            <li><strong>Metáfora:</strong> comparação implícita — "Aquela mulher é uma pedra." (efeito: insensibilidade)</li>
            <li><strong>Metonímia:</strong> substituição por parte, continente, causa — "Leu Machado inteiro." (= obras de Machado)</li>
            <li><strong>Ironia:</strong> dizer o contrário do que se pensa — "Que lindo serviço!" (quando o serviço foi péssimo)</li>
            <li><strong>Hipérbole:</strong> exagero expressivo — "Já te disse um milhão de vezes."</li>
            <li><strong>Antítese:</strong> oposição de ideias — "Era bom e mau ao mesmo tempo."</li>
            <li><strong>Paradoxo:</strong> contradição aparente — "Sou o intervalo entre o meu desejo e o que a vida fez de mim."</li>
            <li><strong>Eufemismo:</strong> suavização — "Passou para melhor" (= morreu)</li>
            <li><strong>Personificação:</strong> atribuir qualidades humanas a seres inanimados — "O vento sussurrou segredos."</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>6. Linha do Tempo da Literatura Brasileira</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Linha do tempo das escolas literárias brasileiras do Quinhentismo ao Modernismo">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <text x="350" y="22" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">Literatura Brasileira — Linha do Tempo</text>
            {/* linha */}
            <line x1="30" y1="80" x2="670" y2="80" stroke="#6366f1" strokeWidth="2.5" />
            {/* Quinhentismo */}
            <circle cx="60" cy="80" r="7" fill="#6366f1" />
            <text x="60" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1500</text>
            <text x="60" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Quinh.</text>
            {/* Barroco */}
            <circle cx="160" cy="80" r="7" fill="#8b5cf6" />
            <text x="160" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1601</text>
            <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Barroco</text>
            {/* Arcadismo */}
            <circle cx="270" cy="80" r="7" fill="#0891b2" />
            <text x="270" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1768</text>
            <text x="270" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Arcadismo</text>
            {/* Romantismo */}
            <circle cx="360" cy="80" r="7" fill="#059669" />
            <text x="360" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1836</text>
            <text x="360" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Romantismo</text>
            {/* Realismo */}
            <circle cx="450" cy="80" r="7" fill="#d97706" />
            <text x="450" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1881</text>
            <text x="450" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Realismo</text>
            {/* Parnasianismo */}
            <circle cx="530" cy="80" r="7" fill="#ec4899" />
            <text x="530" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1893</text>
            <text x="530" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Parnas./Simbol.</text>
            {/* Modernismo */}
            <circle cx="620" cy="80" r="7" fill="#ef4444" />
            <text x="620" y="63" textAnchor="middle" fontSize="9" fill="#1e1b4b" fontWeight="bold">1922</text>
            <text x="620" y="100" textAnchor="middle" fontSize="9" fill="#4b5563">Modernismo</text>
            {/* fases modernismo */}
            <text x="350" y="135" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="bold">Modernismo: 1.ª fase (1922–30) · 2.ª fase (1930–45) · 3.ª fase (1945–60)</text>
            <text x="350" y="155" textAnchor="middle" fill="#64748b" fontSize="10">1.ª: ruptura/vanguarda · 2.ª: romance social · 3.ª: introspecção/experimentalismo</text>
            <text x="350" y="175" textAnchor="middle" fill="#64748b" fontSize="10">Literatura contemporânea: a partir de 1960 — pluralidade de estilos e vozes</text>
          </svg>
          <figcaption>Linha do tempo das principais escolas literárias da literatura brasileira.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Escola</th>
                <th>Palavra-chave</th>
                <th>Conflito central</th>
                <th>Obra obrigatória</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barroco</td>
                <td>Conflito/Antítese</td>
                <td>Fé × razão; carne × espírito</td>
                <td>Gregório de Matos (poesias)</td>
              </tr>
              <tr>
                <td>Arcadismo</td>
                <td>Simplicidade/Razão</td>
                <td>Corte (cidade) × natureza (campo)</td>
                <td>Marília de Dirceu (Gonzaga)</td>
              </tr>
              <tr>
                <td>Romantismo</td>
                <td>Sentimento/Nação</td>
                <td>Ideal × real; indivíduo × sociedade</td>
                <td>O Guarani (Alencar), I-Juca-Pirama (G. Dias)</td>
              </tr>
              <tr>
                <td>Realismo</td>
                <td>Crítica/Análise</td>
                <td>Aparência × essência; ilusão × realidade</td>
                <td>Dom Casmurro (Machado)</td>
              </tr>
              <tr>
                <td>Modernismo 2.ª</td>
                <td>Social/Regional</td>
                <td>Opressão × resistência; seca × sobrevivência</td>
                <td>Vidas Secas (Graciliano)</td>
              </tr>
              <tr>
                <td>Modernismo 3.ª</td>
                <td>Introspecção/Experimental</td>
                <td>Ser × existir; identidade × fragmentação</td>
                <td>A hora da estrela (Clarice)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Variação Linguística</span>
        <h2>7. Variação Linguística e Preconceito Linguístico</h2>

        <p>
          A variação linguística é um dos temas com crescente presença no ENEM. O exame
          adota uma perspectiva descritiva e inclusiva da língua, rejeitando o preconceito
          linguístico — a ideia de que certas formas de falar são "erradas" ou "inferiores".
          O linguista brasileiro Marcos Bagno é a referência central nesse debate, com seu
          livro <em>Preconceito linguístico</em> (1999), que questiona os mitos sobre o
          "português correto".
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌎</span>
            <h3>Variação diatópica</h3>
            <p>Variação geográfica: diferenças entre o português do Nordeste, do Sul, de Portugal, do Brasil. Ex.: "mandioca" (SP) × "aipim" (RJ) × "macaxeira" (Nordeste).</p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Variação diastrática</h3>
            <p>Variação social: diferenças entre grupos sociais, classes, faixas etárias. O ENEM cobra a compreensão de que variantes estigmatizadas refletem exclusão social, não incapacidade linguística.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Variação diafásica</h3>
            <p>Variação situacional (registro): o mesmo falante usa linguagem diferente numa conversa informal, numa entrevista de emprego ou num texto acadêmico. Adequação à situação comunicativa é competência valorizada.</p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>Variação diacrônica</h3>
            <p>Variação histórica: a língua muda ao longo do tempo. Textos de séculos anteriores usam construções que hoje parecem arcaicas — o ENEM pode apresentar textos de épocas diferentes e pedir análise comparativa.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Preconceito linguístico no ENEM:</strong>
          <p>
            O ENEM frequentemente apresenta textos que discutem ou exemplificam o
            preconceito linguístico — e sempre adota a perspectiva de que todas as
            variedades da língua são sistemas completos e válidos. Questões sobre
            variação nunca pedem que o candidato identifique o "erro" — pedem que
            ele explique por que determinada variação ocorre ou qual é o efeito
            social do preconceito linguístico.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronograma de Revisão</span>
        <h2>8. Cronograma de Revisão para os Dias Finais</h2>

        <p>
          Nos dias que antecedem o ENEM, a qualidade da revisão supera a quantidade de
          matéria nova. Não adianta começar um livro novo — o objetivo é consolidar o
          que já foi aprendido e identificar os pontos de maior vulnerabilidade para
          tratá-los com precisão.
        </p>

        <div className="lesson-highlight">
          <strong>Cronograma sugerido para a última semana:</strong>
          <ul>
            <li>
              <strong>Dia 1:</strong> Literatura — escolas literárias do Barroco ao
              Realismo. Foco em Machado de Assis: ironia, narrador, Dom Casmurro.
            </li>
            <li>
              <strong>Dia 2:</strong> Literatura — Modernismo. As três fases, autores e
              obras principais. Praticar com questões dos últimos 5 anos.
            </li>
            <li>
              <strong>Dia 3:</strong> Linguagem — funções da linguagem, figuras,
              denotação/conotação, tipologias. Revisar com questões de charge e publicidade.
            </li>
            <li>
              <strong>Dia 4:</strong> Gramática aplicada — coesão (conectivos, anáfora),
              sintaxe (OD/OI, regência verbal), variação linguística.
            </li>
            <li>
              <strong>Dia 5:</strong> Redação — escrever uma redação completa no prazo
              (30 minutos). Revisar os 5 elementos da proposta de intervenção. Revisar
              conectivos para C4.
            </li>
            <li>
              <strong>Dia 6 (véspera):</strong> Revisão leve: reler resumos dos principais
              autores, confirmar estrutura da redação. Dormir bem — o sono é parte da
              preparação cognitiva.
            </li>
          </ul>
        </div>

        <div className="math-block">
          <strong>O que NÃO fazer nos dias finais:</strong>
          <p>
            Não comece conteúdo novo que não conhece. Não fique em redes sociais por
            horas ("só mais um post"). Não faça simulados de 5 horas na véspera — você
            chega exausto. Não revise tudo de uma vez: priorize os pontos onde você
            erra mais. Não subestime a redação: ela vale 1000 pontos e pode definir
            se você entra na universidade ou não.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conexões Temáticas</span>
        <h2>9. O que Mais Cai — Conexões entre Temas</h2>

        <p>
          O ENEM não cobra temas isolados — ele os conecta. Uma questão sobre a ironia
          machadiana também é uma questão sobre crítica social do século XIX. Uma questão
          sobre variação linguística também é sobre inclusão e cidadania. Reconhecer as
          conexões temáticas permite que o candidato responda com mais segurança, pois
          ativa múltiplas camadas de conhecimento simultaneamente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Literatura + Interpretação</h3>
            <p>Toda questão de literatura é, antes de tudo, uma questão de interpretação. Identifique o sentido do fragmento antes de classificá-lo historicamente. O contexto histórico é ferramenta de interpretação, não fim em si.</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Gramática + Ideologia</h3>
            <p>O ENEM conecta escolhas gramaticais a efeitos ideológicos: por que usar voz passiva sem agente? Por que escolher "protestantes" em vez de "baderneiros"? A sintaxe é política.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Imagem + Texto</h3>
            <p>Em textos multimodais, imagem e texto constroem sentido juntos. Na charge, o humor nasce da tensão entre o visual e o verbal. Nunca analise imagem e texto separadamente.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Interpretação + Redação</h3>
            <p>A leitura crítica dos textos motivadores alimenta a redação: eles trazem repertório, contextualização e perspectivas que o candidato pode usar nos parágrafos de desenvolvimento.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificando Escola Literária"
          statement={
            <p>
              Leia o fragmento poético:
              <br /><br />
              <em>"Nasce o Sol, e não dura mais que um dia,<br />
              Depois da Luz se segue a noite escura,<br />
              Em tristes sombras morre a formosura,<br />
              Em contínuas tristezas a alegria."</em>
              <br /><br />
              (Atribuído a Gregório de Matos, séc. XVII)
              <br /><br />
              Com base nas características presentes no fragmento, identifique a escola
              literária à qual pertence:
            </p>
          }
          options={[
            { letter: "a", text: "Romantismo, pois o poema expressa subjetivismo exacerbado e tristeza individual." },
            { letter: "b", text: "Arcadismo, pois o poema valoriza a natureza e a simplicidade da vida campestre." },
            { letter: "c", text: "Barroco, pois o poema é marcado por antíteses (luz/sombra, alegria/tristeza) e pela meditação sobre a efemeridade da vida — características centrais do Barroco seiscentista.", correct: true },
            { letter: "d", text: "Modernismo, pois o poema usa verso livre e linguagem cotidiana para expressar conflitos existenciais." },
          ]}
          resolution={
            <p>
              O fragmento apresenta as marcas clássicas do <strong>Barroco</strong>
              (século XVII): (1) <em>Antítese</em>: a oposição explícita entre pares
              contrários permeia todos os versos — Sol/noite, Luz/sombra escura,
              formosura/tristeza, alegria/tristeza. (2) <em>Efemeridade (carpe diem
              pessimista)</em>: o Sol "não dura mais que um dia" — a beleza e a alegria
              são transitórias e sucumbem inevitavelmente à noite e à tristeza.
              (3) <em>Dualismo barroco</em>: a tensão entre o belo/luminoso e o
              triste/sombrio reflete o conflito entre o efêmero terreno e o eterno
              espiritual, característico da mentalidade barroca. O Arcadismo buscaria
              equilíbrio e harmonia, não essa tensão dramática. O Romantismo
              enfatizaria o "eu" e a nação. O Modernismo romperia com a forma fixa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Variação Linguística e Preconceito"
          statement={
            <p>
              Uma professora corrigiu a frase de um aluno nordestino — <em>"Eu fui lá
              na casa dele ontem"</em> — escrevendo em vermelho: <em>"ERRADO! O correto
              é 'Eu fui À casa dele.'"</em>
              <br /><br />
              Do ponto de vista da linguística, essa correção é adequada? Por quê?
            </p>
          }
          options={[
            { letter: "a", text: "Sim, pois a regra gramatical é clara: o verbo 'ir' pede a preposição 'a', e a forma 'lá' é coloquial demais para qualquer contexto escolar." },
            { letter: "b", text: "Sim, pois o uso de 'lá na' é um erro grave que compromete a inteligibilidade da frase." },
            { letter: "c", text: "Não totalmente: a professora poderia ensinar a norma culta (\"fui à\") sem classificar a forma regional como \"errada\" — pois \"fui lá na\" é uma construção válida na variedade coloquial do português brasileiro, especialmente no Nordeste, refletindo a tendência ao uso de pronomes locativos plenos em vez de preposição pura.", correct: true },
            { letter: "d", text: "Não, pois a forma \"fui lá na\" é a única correta no português brasileiro moderno, sendo a forma \"fui à\" arcaica e inadequada." },
          ]}
          resolution={
            <p>
              Esta questão ilustra o debate sobre preconceito linguístico, central nas
              questões de variação do ENEM. A forma "fui lá na casa dele" é perfeitamente
              gramatical na variedade coloquial do português brasileiro — especialmente
              no Nordeste e nas classes populares. Não é um "erro": é uma variante
              sistemática que segue regras próprias (uso de advérbio locativo + preposição
              "em" em vez de preposição "a"). A professora cometeu o que Marcos Bagno
              chama de <em>preconceito linguístico</em>: tratou uma variante não-padrão
              como erro, em vez de ensiná-la como diferença de registro. A abordagem
              adequada seria mostrar ao aluno que <em>ambas as formas existem</em>:
              "fui lá na" é adequada na fala informal; "fui à" é a forma esperada em
              contextos formais escritos. Alternativa C é a correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ironia Machadiana"
          statement={
            <p>
              Leia o trecho de Machado de Assis:
              <br /><br />
              <em>"Que Humanitas filosofia! Mas não, não me rindo. O que me interessa
              é que a teoria da Humanitas, que eu chamo a filosofia do Quincas Borba,
              é a mais perfeita filosofia que o mundo já viu — a única que justifica
              as guerras, os massacres e qualquer ato de violência, porque tudo isso
              é necessário para que vença o mais forte."</em>
              <br /><br />
              O narrador afirma que a "filosofia de Quincas Borba" é "a mais perfeita
              que o mundo já viu". Qual é o recurso literário central nessa passagem
              e seu efeito?
            </p>
          }
          options={[
            { letter: "a", text: "Metáfora: Machado compara a filosofia a algo valioso para mostrar sua admiração genuína pela teoria." },
            { letter: "b", text: "Ironia: ao elogiar exageradamente uma filosofia que justifica violência e massacre, o narrador machadiano na verdade a denuncia e ridiculariza, expondo o cinismo das ideologias que legitimam a opressão dos mais fortes.", correct: true },
            { letter: "c", text: "Hipérbole: o uso de \"mais perfeita\" é apenas um exagero estilístico sem intenção crítica." },
            { letter: "d", text: "Paradoxo: a afirmação de que uma filosofia da violência é \"perfeita\" cria contradição lógica intencional, sem intenção crítica." },
          ]}
          resolution={
            <p>
              Este é um exemplo clássico da ironia machadiana. O narrador de
              <em>Quincas Borba</em> afirma, com aparente seriedade e até entusiasmo
              ("a mais perfeita filosofia que o mundo já viu"), que a teoria que justifica
              guerras e massacres é maravilhosa. Machado usa o
              <strong> elogio irônico</strong> — dizer exatamente o contrário do que
              pensa, de forma que o leitor crítico perceba a ironia e entenda que o
              autor está, na verdade, <em>denunciando</em> o darwinismo social e o
              positivismo da elite brasileira do século XIX. A "filosofia do mais forte"
              era usada para justificar a escravidão, o colonialismo e as desigualdades
              sociais — e Machado a destrói ao elogiá-la com a máxima elegância. O
              ENEM frequentemente cobra exatamente essa leitura: identificar quando
              um elogio é, na verdade, uma crítica — e explicar o mecanismo e o efeito
              da ironia. Alternativa B é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Modernismo e Ruptura — Oswald de Andrade"
          statement={
            <p>
              Leia o poema de Oswald de Andrade:
              <br /><br />
              <em>"Erro de Português<br /><br />
              Quando o português chegou<br />
              Debaixo de uma bruta chuva<br />
              Vestiu o índio<br />
              Que pena!<br />
              Fosse uma manhã de sol<br />
              O índio tinha despido<br />
              O português"</em>
              <br /><br />
              (Oswald de Andrade, <em>Pau Brasil</em>, 1925)
              <br /><br />
              O poema dialoga com o conceito central do Modernismo antropofágico de
              Oswald. Identifique o recurso central e seu sentido:
            </p>
          }
          options={[
            { letter: "a", text: "O poema usa hipérbole para exagerar o impacto negativo da colonização portuguesa sobre os indígenas brasileiros." },
            { letter: "b", text: "O poema usa ironia e inversão histórica: ao sugerir que, sem a chuva, o índio teria \"despido\" o português (assimilado/devorado o colonizador), Oswald formula a tese antropofágica — absorver o estrangeiro para criar algo novo e genuinamente brasileiro.", correct: true },
            { letter: "c", text: "O poema é um lamento pelo sofrimento dos indígenas, sem recurso irônico ou proposta estética." },
            { letter: "d", text: "O poema defende que a colonização portuguesa foi positiva por ter \"vestido\" os indígenas, trazendo civilização." },
          ]}
          resolution={
            <p>
              "Erro de Português" é um dos poemas mais famosos do Modernismo brasileiro
              e um manifesto comprimido da tese antropofágica de Oswald de Andrade.
              O título já é irônico: o "erro" não é gramatical — é histórico e cultural.
              A bruta chuva (condição climática desfavorável) impediu que o processo
              fosse invertido: em vez de o colonizador "vestir" (impor sua cultura a)
              o índio, em condições favoráveis (sol), o índio teria "despido" o
              português — metáfora da <em>antropofagia cultural</em>: devorar/assimilar
              o estrangeiro e transformá-lo em algo novo, genuinamente brasileiro, em vez
              de ser passivamente colonizado. Esse é o núcleo do <em>Manifesto Antropófago</em>
              (1928): "Só me interessa o que não é meu. Lei do homem. Lei do antropófago."
              O ENEM cobra frequentemente a relação entre forma (poema curto, irônico,
              verso livre) e conteúdo (crítica à colonização, proposta de identidade
              nacional) no Modernismo de Oswald. Alternativa B é a correta.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Integração de Conteúdos — Gramática, Literatura e Interpretação"
          statement={
            <p>
              Leia o trecho da crônica de Carlos Drummond de Andrade:
              <br /><br />
              <em>"Chega uma hora em que não se quer mais nada. Não se quer o jornal
              de hoje, não se quer o livro de ontem, não se quer o cigarro de amanhã.
              <strong>Não se quer nada</strong>. Essa é a excelente hora para escrever."</em>
              <br /><br />
              O uso sistemático da construção "não se quer" (com "se" apassivador ou
              indeterminador do sujeito) e a conclusão paradoxal ("excelente hora para
              escrever") produzem que efeito de sentido no texto?
            </p>
          }
          options={[
            { letter: "a", text: "A construção impessoal reforça a depressão do autor, que não quer mais escrever." },
            { letter: "b", text: "A repetição da construção impessoal e negativa cria um estado de vazio universal (não só do autor, mas de qualquer pessoa), e o paradoxo final — o vazio como condição para a escrita — sugere que a criação literária nasce do silêncio interior e do desapego do mundo, e não da abundância ou do entusiasmo.", correct: true },
            { letter: "c", text: "O uso do \"se\" é um erro gramatical típico do modernismo, que rejeitava as normas de regência verbal." },
            { letter: "d", text: "A construção impessoal é usada apenas para evitar a repetição do sujeito de primeira pessoa, sem efeito estilístico relevante." },
          ]}
          resolution={
            <p>
              Esta questão integra três eixos: gramática (uso do "se"), estilística
              (repetição, paradoxo) e interpretação literária. O "se" em "não se quer"
              funciona como <em>índice de indeterminação do sujeito</em>: o estado
              descrito não é apenas o de Drummond, mas de qualquer pessoa — a frase
              adquire caráter universal e existencial. A repetição anafórica intensifica
              esse esvaziamento progressivo: jornal (presente), livro (passado), cigarro
              (futuro) — o "não querer" atinge o tempo todo, não apenas o agora.
              O paradoxo final ("excelente hora para escrever") é a virada drumondiana:
              o vazio não é impotência, mas liberação — sem o ruído do mundo, a escrita
              pode emergir. Isso dialoga com a estética modernista do esvaziamento e
              com a visão de Drummond sobre a criação poética como ato que nasce do
              silêncio e da recusa do supérfluo. O ENEM cobra exatamente esse nível
              de leitura integrada: gramática a serviço do sentido literário.
            </p>
          }
        />
      </section>
    </article>
  );
}
